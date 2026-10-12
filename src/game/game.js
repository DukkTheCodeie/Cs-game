import * as THREE from 'three';
import { $, clamp, rand } from '../core/util.js';
import { Scheduler, Ease } from '../core/scheduler.js';
import { Input } from '../core/input.js';
import { AudioEngine } from '../core/audio.js';
import { setMaxAnisotropy } from '../world/textures.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { HUD } from '../ui/hud.js';
import { Dialogue } from '../ui/dialogue.js';
import { ClipLibrary } from '../ui/clips.js';
import { Menu, modal } from '../ui/menu.js';
import { Computer, showGameOver } from '../ui/computer.js';
import { openPuzzle } from '../puzzles/puzzles.js';
import { Player } from './player.js';
import { Museum, SPOTS } from '../world/museum.js';
import { CHAPTERS, START, runChapter, tipFor } from './chapters.js';

const SAVE_KEY = 'locked-out.save.v1';
export const TOTAL_DONUTS = 14;

function defaultSave() {
  return {
    chapter: null, reached: [], solved: {}, donuts: [], fragments: [], flags: {},
    settings: { master: 0.8, music: 0.6, sfx: 0.9, voice: 'tts', subtitles: 'medium', sensitivity: 1, invertY: false, fov: 75, quality: 'high', marker: true, shake: true, brightness: 1.15 },
  };
}

function loadSave() {
  const d = defaultSave();
  try {
    const s = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');
    if (s) return { ...d, ...s, settings: { ...d.settings, ...(s.settings || {}) }, flags: { ...(s.flags || {}) } };
  } catch (_) { /* ignore */ }
  return d;
}

class DonutMeter {
  constructor(game) {
    this.g = game;
    this.value = 100;
    this.drain = 0;
    this.enabled = false;
    this.onEmpty = null;
    this.blinkT = 5;
  }
  set(v) { this.value = clamp(v, 0, 100); this.g.hud.setMeter(this.value); }
  add(n) {
    this.set(this.value + n);
    if (n > 0) this.fired = false;
  }
  update(dt) {
    const g = this.g;
    if (!this.enabled || !['explore', 'runner'].includes(g.mode)) return;
    const mul = g.player?.sprinting && g.mode === 'explore' ? 2.4 : 1;
    this.set(this.value - this.drain * mul * dt);
    const drowsy = this.value < 22 ? (22 - this.value) / 22 : 0;
    g.hud.setDrowsy(drowsy * 0.85);
    if (this.value < 15) {
      this.blinkT -= dt;
      if (this.blinkT < 0) {
        this.blinkT = 4 + Math.random() * 3;
        g.hud.setLids(0.6, 0.35);
        setTimeout(() => g.hud.setLids(0, 0.35), 450);
        if (Math.random() < 0.5) g.audio.play('yawn');
      }
    }
    if (this.value <= 0 && !this.fired) {
      this.fired = true;
      this.onEmpty?.();
    }
  }
}

export class Game {
  constructor() {
    this.save = loadSave();
    this.canvas = $('#game');
    const r = (this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, powerPreference: 'high-performance' }));
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.15;
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFSoftShadowMap;
    setMaxAnisotropy(r.capabilities.getMaxAnisotropy());
    this.camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.05, 400);
    this.camLook = new THREE.Vector3();
    // Post-processing: bloom makes the T-Rex eyes, screens, signs and donuts glow.
    this.composer = new EffectComposer(r);
    this.renderPass = new RenderPass(new THREE.Scene(), this.camera);
    this.bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.55, 0.45, 0.82);
    this.composer.addPass(this.renderPass);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());
    this.useBloom = true;
    this.input = new Input(this.canvas);
    this.audio = new AudioEngine();
    this.sched = new Scheduler();
    this.hud = new HUD(this);
    this.dialogue = new Dialogue(this);
    this.clips = new ClipLibrary();
    this.menu = new Menu(this);
    this.computer = new Computer(this);
    this.meter = new DonutMeter(this);
    this.player = new Player(this);
    this.level = null;
    this.mode = 'boot';
    this.paused = false;
    this.runId = 0;
    this.shakeOffset = { x: 0, y: 0, z: 0, rx: 0, rz: 0 };
    this.shakeAmp = 0;
    this.shakeT = 0;
    this.shakeDur = 1;
    this.clockMin = 0;
    this.clockOn = false;
    this.unlockT = 0;
    this.menuAngle = 0;
    this.timeScale = 1;
    this.clock = new THREE.Clock();

    addEventListener('resize', () => this.resize());
    this.resize();
    this.input.onKey = (e) => this._onKey(e);
    this.input.onLockChange = (locked) => {
      if (!locked && this.mode === 'explore' && !this.paused) this.pause();
    };
    this.canvas.addEventListener('click', () => {
      if (this.mode === 'explore' && !this.paused) this.input.requestLock();
    });
    $('#skip-btn').addEventListener('click', () => this.skipCutscene());
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && ['explore', 'runner'].includes(this.mode) && !this.paused) this.pause();
    });
    this.applySettings();
  }

  persist() {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(this.save)); } catch (_) { /* ignore */ }
  }

  resetSave() {
    const settings = this.save.settings;
    this.save = defaultSave();
    this.save.settings = settings;
    this.persist();
  }

  applySettings() {
    const s = this.save.settings;
    this.audio.setVolumes({ master: s.master, music: s.music, sfx: s.sfx });
    if (this.mode !== 'runner') this.camera.fov = s.fov;
    this.camera.updateProjectionMatrix();
    if (s.quality === 'ultra') s.quality = 'high';
    const q = s.quality; // high = shadows + glow, medium = shadows, low = fastest
    const pr = Math.min(devicePixelRatio, q === 'low' ? 1 : 1.75);
    this.renderer.setPixelRatio(pr);
    this.composer.setPixelRatio(pr);
    this.composer.setSize(innerWidth, innerHeight);
    this.useBloom = q === 'high';
    this.renderer.toneMappingExposure = s.brightness ?? 1.15;
    this.player.spot.castShadow = q !== 'low';
    document.documentElement.style.setProperty('--sub-size', s.subtitles === 'large' ? '28px' : innerWidth < 720 ? '17px' : '22px');
    this.persist();
  }

  resize() {
    this.renderer.setSize(innerWidth, innerHeight, false);
    this.composer?.setSize(innerWidth, innerHeight);
    this.camera.aspect = innerWidth / innerHeight;
    this.camera.updateProjectionMatrix();
  }

  // ------------------------------------------------------------ boot
  async boot() {
    await this.clips.init();
    this.menuLevel = new Museum(this, { time: 'night' });
    this.menuLevel.persistent = true;
    this.setLevel(this.menuLevel);
    this.renderer.compile(this.menuLevel.scene, this.camera);
    this.renderer.setAnimationLoop(() => this.loop());
  }

  start() {
    this.audio.init();
    const dbg = new URLSearchParams(location.search).get('chapter');
    if (dbg && CHAPTERS.find((c) => c.id === dbg)) this.startChapter(dbg, { mode: 'fresh' });
    else this.toMenu();
  }

  // ------------------------------------------------------------ loop
  loop() {
    const realDt = this.clock.getDelta();
    const rawDt = Math.min(0.05, realDt);
    const dt = rawDt * this.timeScale;
    const inp = this.input;
    this._perfCheck(Math.min(realDt, 0.5));
    if (inp.isTouch && inp.wasPressed('Escape') && ['explore', 'runner'].includes(this.mode)) this.togglePause();
    if (!this.paused) {
      this.sched.update(dt);
      if (this.mode === 'explore') {
        this.player.update(dt, this.level?.colliders);
        this._interact();
        if (!inp.isTouch && !inp.locked) {
          this.unlockT += rawDt;
          if (this.unlockT > 0.6) this.hud.setPrompt(inp.dragging ? null : 'Click (or drag) to look around');
        } else this.unlockT = 0;
      } else if (this.mode === 'menu') this._menuCam(dt);
      this.level?.update(dt);
      this.player.updateDust(dt);
      this.meter.update(dt);
      this._updateShake(dt);
      if (this.clockOn) {
        this.clockMin += dt / 4;
        const m = Math.floor(this.clockMin) % (24 * 60);
        const h = Math.floor(m / 60), mm = m % 60;
        this.hud.setClock(`${((h + 11) % 12) + 1}:${String(mm).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`);
      }
    }
    this.dialogue.update(rawDt);
    this.hud.update();
    const cam = this.camera, s = this.shakeOffset;
    cam.position.x += s.x; cam.position.y += s.y; cam.rotation.z += s.rz;
    if (this.level) {
      if (this.useBloom) {
        this.renderPass.scene = this.level.scene;
        this.composer.render(rawDt);
      } else this.renderer.render(this.level.scene, cam);
    }
    cam.position.x -= s.x; cam.position.y -= s.y; cam.rotation.z -= s.rz;
    inp.endFrame();
  }

  // If gameplay runs slowly for a few seconds, step graphics down one level (once per tier).
  _perfCheck(dt) {
    if (this.paused || !['explore', 'runner'].includes(this.mode) || document.hidden) { this._perf = null; return; }
    const p = (this._perf ||= { t: 0, n: 0, skip: 1 });
    if (p.skip > 0) { p.skip -= dt; return; } // ignore the first second (shader warm-up)
    p.t += dt; p.n++;
    if (p.t < 4) return;
    const fps = p.n / p.t;
    this._perf = { t: 0, n: 0, skip: 0 };
    const s = this.save.settings;
    if (fps < 28 && s.quality !== 'low' && !this.autoLowered?.[s.quality]) {
      (this.autoLowered ||= {})[s.quality] = true;
      s.quality = s.quality === 'high' ? 'medium' : 'low';
      this.applySettings();
      this.hud.toast(`⚙️ Graphics set to <b>${s.quality === 'medium' ? 'Medium' : 'Fast'}</b> for smoother play (change it in Settings)`, 'gold');
    }
  }

  _interact() {
    const lvl = this.level;
    if (!lvl || !this.player.enabled) return;
    const cam = this.camera;
    const fwd = this.player.forward();
    let best = null, bestDot = 0.82;
    const d = new THREE.Vector3();
    for (const it of lvl.interactables) {
      if (!it.enabled) continue;
      d.copy(it.pos).sub(cam.position);
      const dist = d.length();
      if (dist > it.radius) continue;
      const dot = d.normalize().dot(fwd) + (dist < 1.2 ? 0.15 : 0);
      if (dot > bestDot) { best = it; bestDot = dot; }
    }
    if (this.unlockT <= 0.6) this.hud.setPrompt(best ? best.prompt : null);
    if (best && this.input.wasPressed('KeyE', 'Enter') || (best && this.input.locked && this.input.wasPressed('Mouse0'))) {
      this.audio.play('click');
      best.onUse?.();
    }
  }

  _menuCam(dt) {
    this.menuAngle += dt * 0.045;
    const a = this.menuAngle;
    const c = SPOTS.trex;
    this.camera.position.set(c.x + Math.sin(a) * 12.5, 3.2 + Math.sin(a * 0.7) * 0.8, c.z + Math.cos(a) * 12.5);
    this.camera.lookAt(c.x, 4.2, c.z);
    this.player.spot.target.position.set(Math.sin(this.menuAngle * 3) * 1.5, -0.1, -6);
  }

  _updateShake(dt) {
    const s = this.shakeOffset;
    if (this.shakeT > 0) {
      this.shakeT -= dt;
      const k = this.shakeAmp * Math.max(0, this.shakeT / this.shakeDur);
      s.x = rand(-1, 1) * k * 0.3; s.y = rand(-1, 1) * k * 0.3; s.rz = rand(-1, 1) * k * 0.04;
    } else { s.x = s.y = s.rz = 0; this.shakeAmp = 0; }
  }

  shake(amp, dur = 0.5) {
    if (!this.save.settings.shake) amp *= 0.15;
    if (amp >= this.shakeAmp * Math.max(0, this.shakeT / this.shakeDur)) { this.shakeAmp = amp; this.shakeT = dur; this.shakeDur = dur; }
  }

  _onKey(e) {
    if (e.code === 'Escape' || e.code === 'KeyP') {
      if (this.mode === 'cutscene' && e.code === 'Escape') this.skipCutscene();
      else if (['explore', 'runner'].includes(this.mode)) this.togglePause();
    }
    if (this.mode === 'cutscene' && (e.code === 'Space' || e.code === 'Enter')) this.dialogue.skipLine();
  }

  // ------------------------------------------------------------ modes
  setMode(mode) {
    this.mode = mode;
    // drop focus from any clicked button so Space/Enter go to the game, not the button
    const ae = document.activeElement;
    if (ae && ae !== document.body && ae.blur && !ae.closest?.('.modal')) ae.blur();
    document.body.classList.toggle('playing', mode !== 'menu' && mode !== 'boot');
    const explore = mode === 'explore';
    this.player.enabled = explore;
    this.hud.crosshair(explore);
    if (!explore) this.hud.setPrompt(null);
    this.input.showTouch(explore ? 'explore' : mode === 'runner' ? 'runner' : 'off');
    this.dialogue.allowClickSkip = mode === 'cutscene';
    if (explore) this.input.requestLock();
    else this.input.exitLock();
  }

  togglePause() {
    if (this.paused) this.resume();
    else this.pause();
  }

  pause() {
    if (this.paused) return;
    this.paused = true;
    this.dialogue.setPaused(true);
    this.input.exitLock();
    this.audio.ctx?.suspend?.();
    const m = (this.pauseModal = modal(`<h2>PAUSED</h2><div class="sub">${this.chapterName()}</div>
      <div class="chapters">
        <button class="btn big pink" data-a="resume">▶ RESUME</button>
        <button class="btn" data-a="settings">SETTINGS</button>
        <button class="btn" data-a="restart">RESTART CHAPTER</button>
        <button class="btn ghost" data-a="menu">QUIT TO MENU</button>
      </div>`, () => { if (this.paused) this.resume(); }));
    m.panel.querySelector('[data-a=resume]').onclick = () => m.close();
    m.panel.querySelector('[data-a=settings]').onclick = () => { this.audio.ctx?.resume?.(); this.menu.settings(); };
    m.panel.querySelector('[data-a=restart]').onclick = () => { this.paused = false; m.close(); this.startChapter(this.save.chapter || 'intro', { mode: 'continue' }); };
    m.panel.querySelector('[data-a=menu]').onclick = () => { this.paused = false; m.close(); this.toMenu(); };
  }

  resume() {
    if (!this.paused) return;
    this.paused = false;
    this.audio.ctx?.resume?.();
    this.dialogue.setPaused(false);
    if (this.pauseModal) { const m = this.pauseModal; this.pauseModal = null; m.close(); }
    this.clock.getDelta();
    if (this.mode === 'explore') this.input.requestLock();
  }

  chapterName() {
    return CHAPTERS.find((c) => c.id === this.save.chapter)?.name || '';
  }

  // ------------------------------------------------------------ level management
  setLevel(level) {
    if (this.level) {
      this.level.scene.remove(this.camera);
      if (!this.level.persistent) this.level.dispose();
    }
    this.level = level;
    level.scene.add(this.camera);
    this.sched.reset();
  }

  async loadLevel(level) {
    this.setLevel(level);
    try { this.renderer.compile(level.scene, this.camera); } catch (_) { /* ignore */ }
    this.clock.getDelta();
  }

  _guard(p) {
    const id = this.runId;
    return Promise.resolve(p).then((v) => (id === this.runId ? v : new Promise(() => {})));
  }

  // scheduler + dialogue helpers (all cancel automatically when the chapter changes)
  wait(s) { return this._guard(this.sched.wait(s)); }
  tween(d, fn, ease) { return this._guard(this.sched.tween(d, fn, ease)); }
  until(cond) { return this._guard(this.sched.until(cond)); }
  say(id, opts) { return this._guard(this.dialogue.say(id, opts)); }

  async fadeOut(d = 0.5) { this.hud.setFade(1, d); await this._guard(new Promise((r) => setTimeout(r, d * 1000 + 30))); }
  async fadeIn(d = 0.8) { this.hud.setFade(0, d); await this.wait(d); }

  async cutscene(fn) {
    this.setMode('cutscene');
    this.hud.setLetterbox(true);
    $('#skip-btn').classList.remove('off');
    this.hud.show(true);
    try {
      await fn();
    } finally {
      this.sched.skipping = false;
      this.hud.setLetterbox(false);
      $('#skip-btn').classList.add('off');
      this.hud.caption('');
    }
  }

  skipCutscene() {
    if (this.mode !== 'cutscene' || this.sched.skipping) return;
    this.audio.play('whoosh', { vol: 0.4 });
    this.sched.skipAll();
    this.dialogue.skipLine();
    this.computer.typingSkip = true;
  }

  // Tween the cutscene camera to a new position + look target.
  camTo(pos, look, dur = 1.5, ease = Ease.inOut) {
    const p0 = this.camera.position.clone(), l0 = this.camLook.clone();
    const p1 = new THREE.Vector3(...pos), l1 = new THREE.Vector3(...look);
    return this.tween(dur, (k) => {
      this.camera.position.lerpVectors(p0, p1, k);
      this.camLook.lerpVectors(l0, l1, k);
      this.camera.lookAt(this.camLook);
    }, ease);
  }
  camSet(pos, look) {
    this.camera.position.set(...pos);
    this.camLook.set(...look);
    this.camera.lookAt(this.camLook);
  }

  // ------------------------------------------------------------ gameplay helpers
  objective(text, target) { this.hud.objective(text, target); }

  addFragment(f) {
    if (!this.save.fragments.includes(f)) this.save.fragments.push(f);
    this.persist();
    this.hud.setFragments(this.save.fragments);
  }

  collectDonut(id) {
    if (!this.save.donuts.includes(id)) this.save.donuts.push(id);
    this.persist();
    this.meter.add(20);
    this.audio.play('munch');
    this.audio.play('pickup');
    this.hud.toast(`🍩 Donut found! <b>+20%</b> <span style="opacity:.7">(${this.save.donuts.length}/${TOTAL_DONUTS} hidden donuts)</span>`);
    if (this.save.donuts.length === TOTAL_DONUTS) {
      setTimeout(() => { this.hud.toast('🏆 <b>DONUT HUNTER</b> — you found every hidden donut!', 'gold'); this.audio.play('chime'); }, 1200);
    }
  }

  async openPuzzle(kind, fragment) {
    this.setMode('puzzle');
    const ok = await this._guard(openPuzzle(this, kind, { fragment }));
    this.setMode('explore');
    if (ok) {
      this.meter.add(35);
      this.audio.play('munch', { delay: 0.2 });
      this.addFragment(fragment);
      this.hud.toast(`🧩 Puzzle solved! <b>+1 donut</b> · fragment <b style="color:var(--mint)">${fragment}</b>`, 'mint');
    }
    return ok;
  }

  checkpoint(id) {
    this.save.chapter = id;
    if (!this.save.reached.includes(id)) this.save.reached.push(id);
    this.persist();
  }

  setClock(minutes, on = true) {
    this.clockMin = minutes;
    this.clockOn = on;
    this.hud.showClock(on);
  }

  async failed(title, sub) {
    this.setMode('cutscene');
    this.meter.enabled = false;
    this.audio.stopMusic(0.5);
    this.audio.play('wahwah');
    this.dialogue.stop();
    const v = await this._guard(showGameOver(this, { title, sub, buttons: [{ label: '↻ TRY AGAIN', value: 'retry', cls: 'pink' }, { label: 'MENU', value: 'menu', cls: 'ghost' }] }));
    if (v === 'retry') this.startChapter(this.save.chapter, { mode: 'continue' });
    else this.toMenu();
  }

  resetHud() {
    const h = this.hud;
    h.show(false);
    h.showMeter(false);
    h.showClock(false);
    h.objective(null);
    h.setFragments([], { show: false });
    h.showChase(false);
    h.showArrow(false);
    h.setSpeedLines(0);
    h.setPrompt(null);
    h.controlsHint(null);
    h.setDrowsy(0);
    h.setLids(0, 0);
    h.setLetterbox(false);
    h.setDonutCount(null);
    h.caption('');
    h.loadingTip(null);
    $('#minimap').classList.add('off');
    $('#skip-btn').classList.add('off');
    $('#modal-root').innerHTML = '';
    this.computer.close();
  }

  // ------------------------------------------------------------ chapters / menu
  async startChapter(id, { mode = 'fresh' } = {}) {
    this.runId++;
    this.paused = false;
    this.timeScale = 1;
    this.menu.hide();
    this.dialogue.stop();
    this.setMode('loading');
    await this._guard(this.fadeOut(0.45));
    this.resetHud();
    this.player.eyeOffset = 0;
    this.player.speedMul = 1;
    this.meter.enabled = false;
    this.meter.onEmpty = null;
    this.meter.fired = false;
    const st = START[id];
    if (mode === 'fresh') {
      this.save.fragments = st.fragments.slice();
      if (['intro', 'dino', 'roman', 'chase', 'maze'].includes(id)) this.save.solved = {};
      this.meter.set(st.meter);
    } else if (mode === 'continue') {
      this.meter.set(Math.max(60, st.meter * 0.85));
      for (const f of st.fragments) if (!this.save.fragments.includes(f)) this.save.fragments.push(f);
    } else {
      this.meter.set(Math.max(45, this.meter.value));
    }
    this.checkpoint(id);
    this.audio.setReverb(0.5);
    if (id !== 'intro') {
      this.hud.loadingTip(CHAPTERS.find((c) => c.id === id)?.name, tipFor(id));
      await this._guard(new Promise((r) => requestAnimationFrame(() => setTimeout(r, 40))));
    }
    runChapter(this, id, mode);
  }

  toMenu() {
    this.runId++;
    this.paused = false;
    this.timeScale = 1;
    this.dialogue.stop();
    this.resetHud();
    this.meter.enabled = false;
    this.setLevel(this.menuLevel);
    this.setMode('menu');
    this.player.hasFlashlight = true;
    this.player.flModel.visible = false;
    this.player.setFlash(true);
    this.player.spot.target.position.set(0, -0.1, -6);
    this.camera.fov = 60;
    this.camera.updateProjectionMatrix();
    this.audio.setAmbient('night');
    this.audio.setReverb(0.6);
    this.hud.setFade(0, 1.2);
    this.menu.show();
  }
}
