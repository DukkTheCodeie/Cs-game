import { $, el, clamp, angleDiff } from '../core/util.js';
import { noiseDataURL } from '../world/textures.js';

import { FRAGMENTS } from '../game/constants.js';
export { FRAGMENTS };

export class HUD {
  constructor(game) {
    this.game = game;
    this.root = $('#hud');
    this.meterEl = $('#meter');
    this.meterFill = $('.meter-fill');
    this.meterPct = $('.meter-pct');
    this.meterDonut = $('.meter-donut');
    this.clockEl = $('#clock');
    this.objEl = $('#objective');
    this.objText = $('.obj-text');
    this.fragEl = $('#fragments');
    this.fragSlots = $('.frag-slots');
    this.prompt = $('#prompt');
    this.promptText = $('.prompt-text');
    this.cross = $('#crosshair');
    this.compass = $('#compass');
    this.compassMarker = $('.compass-marker');
    this.chase = $('#chase');
    this.arrow = $('#arrow');
    this.big = $('#bigtext');
    this.hint = $('#controls-hint');
    this.toasts = $('#toasts');
    this.titleEl = $('#titlecard');
    this.captionEl = $('#caption');
    this.donutCount = $('#donut-count');
    this.fade = $('#fx-fade');
    this.flashEl = $('#fx-flash');
    this.drowsy = $('#fx-drowsy');
    this.lids = [$('#fx-eyelids .top'), $('#fx-eyelids .bottom')];
    this.letterbox = $('#letterbox');
    $('#fx-grain').style.backgroundImage = `url(${noiseDataURL(160, 0.5)})`;
    this.target = null;
    this.lastMeter = -1;
    for (let i = 0; i < 6; i++) this.fragSlots.append(el('div', 'frag', '·'.repeat(Math.min(5, FRAGMENTS[i].length))));
  }

  show(on) { this.root.classList.toggle('off', !on); }
  showMeter(on) { this.meterEl.classList.toggle('off', !on); }
  showClock(on) { this.clockEl.classList.toggle('off', !on); }

  setMeter(v) {
    const r = Math.round(v);
    if (r === this.lastMeter) return;
    if (r > this.lastMeter && this.lastMeter >= 0) {
      this.meterEl.classList.remove('bump');
      void this.meterEl.offsetWidth;
      this.meterEl.classList.add('bump');
    }
    this.lastMeter = r;
    this.meterFill.style.width = clamp(v, 0, 100) + '%';
    this.meterPct.textContent = r + '%';
    this.meterEl.classList.toggle('low', v < 25);
    this.meterDonut.classList.toggle('bitten', v < 60);
  }

  setClock(text) { this.clockEl.textContent = text; }

  objective(text, target = null) {
    this.target = target;
    if (!text) { this.objEl.classList.add('off'); this.compass.classList.add('off'); return; }
    this.objEl.classList.remove('off', 'new');
    void this.objEl.offsetWidth;
    this.objEl.classList.add('new');
    this.objText.textContent = text;
    this.compass.classList.toggle('off', !target || !this.game.save.settings.marker);
    this.game.audio.play('select', { vol: 0.6 });
  }

  setFragments(list, { show = true, missing = false } = {}) {
    this.fragEl.classList.toggle('off', !show);
    [...this.fragSlots.children].forEach((s, i) => {
      const got = list.includes(FRAGMENTS[i]);
      const was = s.classList.contains('got');
      s.textContent = got ? FRAGMENTS[i] : missing && i === 5 ? '???' : '·'.repeat(Math.min(5, FRAGMENTS[i].length));
      s.classList.toggle('got', got);
      s.classList.toggle('missing', missing && i === 5);
      if (got && !was) { s.style.animation = 'none'; void s.offsetWidth; s.style.animation = ''; }
    });
  }

  // key: false for a hint that isn't about pressing E
  setPrompt(text, { key = true } = {}) {
    if (!text) { this.prompt.classList.add('off'); this.cross.classList.remove('hot'); return; }
    if (this.promptText.textContent !== text || this.prompt.classList.contains('off')) {
      this.promptText.textContent = text;
      this.prompt.classList.remove('off');
    }
    this.cross.classList.toggle('hot', key);
    const kbd = this.prompt.querySelector('kbd');
    kbd.classList.toggle('off', !key);
    kbd.textContent = this.game.input.isTouch ? 'USE' : 'E';
  }

  // The page the game is in won't let it lock the mouse: say so, with a button to play in its own tab
  // (where it can): an address to open, or the embedding page's own way to open one (open()).
  noMouseLock(url, open) {
    const box = $('#popout');
    if (!box) return;
    box.innerHTML = '';
    box.append(el('span', '', "This page won't let the game lock your mouse, so drag to look around."));
    if (url || open) {
      const a = el('a', 'btn', 'Play in its own tab ↗');
      if (open) a.href = '#';
      else { a.href = url; a.target = '_blank'; a.rel = 'noopener'; }
      a.onclick = (e) => {
        if (open) { e.preventDefault(); open(); }
        box.classList.add('off');
        // (pause here, so the music doesn't play in both tabs)
        if (['explore', 'runner'].includes(this.game.mode)) this.game.pause();
      };
      box.append(a);
    }
    box.classList.remove('off');
    clearTimeout(this.popoutT);
    this.popoutT = setTimeout(() => box.classList.add('off'), url || open ? 12000 : 6000);
  }

  crosshair(on) { this.cross.classList.toggle('hidden', !on); }

  toast(html, kind = '') {
    const t = el('div', 'toast ' + kind, html);
    this.toasts.append(t);
    setTimeout(() => t.remove(), 3100);
  }

  titleCard(chapter, title) {
    $('.tc-chapter', this.titleEl).textContent = chapter;
    $('.tc-title', this.titleEl).textContent = title;
    this.titleEl.classList.remove('show');
    void this.titleEl.offsetWidth;
    this.titleEl.classList.add('show');
    this.game.audio.play('sting', { vol: 0.5 });
  }

  caption(text) {
    this.captionEl.textContent = text || '';
  }

  bigText(text) {
    this.big.textContent = text;
    this.big.classList.remove('show');
    void this.big.offsetWidth;
    this.big.classList.add('show');
  }

  controlsHint(items) {
    if (!items) { this.hint.classList.add('off'); return; }
    this.hint.innerHTML = items.map((i) => `<span>${i}</span>`).join('');
    this.hint.classList.remove('off');
  }

  loadingTip(chapter, tip) {
    const el = $('#loadtip');
    if (!chapter) { el.classList.add('off'); return; }
    $('.lt-chapter', el).textContent = chapter;
    $('.lt-tip', el).innerHTML = tip ? '💡 ' + tip : '';
    el.classList.remove('off');
  }

  setFade(v, dur = 0.2) {
    if (v === 0) this.loadingTip(null);
    this.fade.style.transition = `opacity ${dur}s linear`;
    this.fade.style.opacity = v;
  }

  flash(color = 'rgba(255,255,255,0.6)', dur = 0.5) {
    const f = this.flashEl;
    f.style.transition = 'none';
    f.style.background = color;
    f.style.opacity = 1;
    void f.offsetWidth;
    f.style.transition = `opacity ${dur}s`;
    f.style.opacity = 0;
  }

  setDrowsy(k) { this.drowsy.style.opacity = clamp(k, 0, 1); }

  // 0 = eyes open, 1 = closed
  setLids(k, dur = 0.25) {
    for (const l of this.lids) l.style.transition = `transform ${dur}s ease-in-out`;
    this.lids[0].style.transform = `translateY(${-101 + k * 101}%)`;
    this.lids[1].style.transform = `translateY(${101 - k * 101}%)`;
  }

  setLetterbox(on) { this.letterbox.classList.toggle('on', on); }

  showChase(on) { this.chase.classList.toggle('off', !on); }
  setChase(progress, danger, donuts) {
    const p = clamp(progress, 0, 1) * 100;
    $('.chase-fill', this.chase).style.width = p + '%';
    $('.chase-you', this.chase).style.left = p + '%';
    $('.chase-rex', this.chase).style.left = Math.max(0, p - 4 - (1 - danger) * 26) + '%';
    $('.danger-fill', this.chase).style.width = danger * 100 + '%';
    $('.chase-dist', this.chase).textContent = Math.round(progress * 880) + ' m';
    if (donuts != null) this.setDonutCount(`🍩 × ${donuts}`);
  }
  setSpeedLines(k) { $('#fx-speed').style.opacity = clamp(k, 0, 1); }
  showArrow(on) { this.arrow.classList.toggle('off', !on); }
  setDonutCount(text) {
    this.donutCount.classList.toggle('off', !text);
    if (text) this.donutCount.textContent = text;
  }

  // Compass strip pointing at the current objective target
  update() {
    const g = this.game;
    if (!this.target || this.compass.classList.contains('off') || !g.player) return;
    const p = g.player;
    const ang = Math.atan2(-(this.target.x - p.pos.x), -(this.target.z - p.pos.z));
    const d = angleDiff(p.yaw, ang);
    const x = clamp(50 - (d / (Math.PI / 2)) * 50, -10, 110);
    this.compassMarker.style.left = x + '%';
    this.compassMarker.style.opacity = Math.abs(d) > Math.PI / 2 ? 0.25 : 1;
    const dist = Math.hypot(this.target.x - p.pos.x, this.target.z - p.pos.z);
    this.compassMarker.textContent = dist < 3 ? '●' : '▼';
  }
}
