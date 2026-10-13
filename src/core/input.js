import { isTouchDevice, clamp } from './util.js';

// Keyboard + mouse (pointer lock) + touch (virtual stick, look-drag, swipes, buttons).
export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.down = new Set();
    this.pressed = new Set();
    this.mdx = 0;
    this.mdy = 0;
    this.locked = false;
    this.isTouch = isTouchDevice();
    this.stick = { x: 0, y: 0 };
    this.onLockChange = null;
    this.onKey = null;

    addEventListener('keydown', (e) => {
      if (e.repeat) return;
      this.down.add(e.code);
      this.pressed.add(e.code);
      this.onKey?.(e);
      if (this.locked && ['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
    });
    addEventListener('keyup', (e) => this.down.delete(e.code));
    addEventListener('blur', () => this.down.clear());
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === canvas;
      this.onLockChange?.(this.locked);
    });
    addEventListener('mousemove', (e) => {
      // Pointer lock, or (fallback for browsers that refuse it) click-and-drag on the game view.
      if (this.locked || (this.dragging && (e.buttons & 1))) {
        // Some browsers spike movementX on lock; clamp it.
        this.mdx += clamp(e.movementX, -200, 200);
        this.mdy += clamp(e.movementY, -200, 200);
      }
    });
    canvas.addEventListener('mousedown', (e) => {
      if (e.button === 0) this.dragging = true;
      this.pressed.add('Mouse' + e.button);
      this.down.add('Mouse' + e.button);
    });
    addEventListener('mouseup', (e) => { this.down.delete('Mouse' + e.button); if (e.button === 0) this.dragging = false; });

    // Never let the browser zoom the page (or the page the game is embedded in): a trackpad pinch
    // arrives as ctrl+wheel, Safari sends its own gesture events, and two fingers on a touchscreen
    // are a pinch wherever they land.
    addEventListener('wheel', (e) => { if (e.ctrlKey) e.preventDefault(); }, { passive: false });
    for (const type of ['gesturestart', 'gesturechange']) document.addEventListener(type, (e) => e.preventDefault(), { passive: false });
    const noPinch = (e) => { if (e.touches.length > 1 && e.cancelable) e.preventDefault(); };
    addEventListener('touchstart', noPinch, { passive: false });
    addEventListener('touchmove', noPinch, { passive: false });

    if (this.isTouch) this._setupTouch();
  }

  requestLock() {
    if (this.isTouch || this.locked) return;
    try {
      const p = this.canvas.requestPointerLock?.();
      if (p && p.catch) p.catch(() => {});
    } catch (_) { /* ignore */ }
  }

  exitLock() {
    if (document.pointerLockElement) document.exitPointerLock();
  }

  isDown(...codes) {
    return codes.some((c) => this.down.has(c));
  }

  wasPressed(...codes) {
    return codes.some((c) => this.pressed.has(c));
  }

  endFrame() {
    this.pressed.clear();
    this.mdx = 0;
    this.mdy = 0;
  }

  // Movement axes: x = strafe (right +), z = forward (+)
  moveAxis() {
    let x = 0, z = 0;
    if (this.isDown('KeyW', 'ArrowUp')) z += 1;
    if (this.isDown('KeyS', 'ArrowDown')) z -= 1;
    if (this.isDown('KeyD', 'ArrowRight')) x += 1;
    if (this.isDown('KeyA', 'ArrowLeft')) x -= 1;
    x += this.stick.x;
    z += -this.stick.y;
    const len = Math.hypot(x, z);
    if (len > 1) { x /= len; z /= len; }
    return { x, z };
  }

  showTouch(mode) {
    if (!this.touchRoot) return;
    this.touchRoot.dataset.mode = mode || 'off';
  }

  _setupTouch() {
    const root = document.getElementById('touch');
    if (!root) return;
    this.touchRoot = root;
    const stickBase = root.querySelector('.stick');
    const knob = root.querySelector('.knob');
    let stickId = null, lookId = null, sx = 0, sy = 0, lx = 0, ly = 0;
    let swipe = null;

    const start = (e) => {
      const mode = root.dataset.mode;
      // A thumb on the stick plus a thumb looking around is a pinch to the browser: claim the
      // touch so it can't zoom the page (or double-tap zoom, or pop up a long-press menu).
      if (mode !== 'off' && e.target === this.canvas && e.cancelable) e.preventDefault();
      for (const t of e.changedTouches) {
        if (t.target.closest('.tbtn')) continue;
        if (mode === 'runner') {
          swipe = { id: t.identifier, x: t.clientX, y: t.clientY, done: false };
          continue;
        }
        if (mode !== 'explore') continue;
        if (t.clientX < innerWidth * 0.45 && stickId === null) {
          stickId = t.identifier; sx = t.clientX; sy = t.clientY;
          stickBase.style.left = sx + 'px'; stickBase.style.top = sy + 'px';
          stickBase.classList.add('on');
        } else if (lookId === null) {
          lookId = t.identifier; lx = t.clientX; ly = t.clientY;
        }
      }
    };
    const move = (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === stickId) {
          const dx = t.clientX - sx, dy = t.clientY - sy;
          const r = 55, len = Math.hypot(dx, dy) || 1, k = Math.min(1, len / r);
          this.stick.x = (dx / len) * k; this.stick.y = (dy / len) * k;
          knob.style.transform = `translate(${this.stick.x * r}px, ${this.stick.y * r}px)`;
        } else if (t.identifier === lookId) {
          this.mdx += (t.clientX - lx) * 2.2; this.mdy += (t.clientY - ly) * 2.2;
          lx = t.clientX; ly = t.clientY;
        } else if (swipe && t.identifier === swipe.id && !swipe.done) {
          const dx = t.clientX - swipe.x, dy = t.clientY - swipe.y;
          if (Math.hypot(dx, dy) > 28) {
            swipe.done = true;
            if (Math.abs(dx) > Math.abs(dy)) this.pressed.add(dx > 0 ? 'SwipeRight' : 'SwipeLeft');
            else this.pressed.add(dy > 0 ? 'SwipeDown' : 'SwipeUp');
          }
        }
      }
      if (root.dataset.mode !== 'off') e.preventDefault();
    };
    const end = (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === stickId) {
          stickId = null; this.stick.x = 0; this.stick.y = 0;
          knob.style.transform = ''; stickBase.classList.remove('on');
        }
        if (t.identifier === lookId) lookId = null;
        if (swipe && t.identifier === swipe.id) swipe = null;
      }
    };
    addEventListener('touchstart', start, { passive: false });
    addEventListener('touchmove', move, { passive: false });
    addEventListener('touchend', end);
    addEventListener('touchcancel', end);

    for (const b of root.querySelectorAll('.tbtn')) {
      const code = b.dataset.code;
      b.addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.pressed.add(code); this.down.add(code); b.classList.add('on');
      }, { passive: false });
      const up = () => { this.down.delete(code); b.classList.remove('on'); };
      b.addEventListener('touchend', up);
      b.addEventListener('touchcancel', up);
    }
  }
}
