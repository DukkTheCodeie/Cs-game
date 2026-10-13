import { LINES, SPEAKERS } from '../game/script.js';
import { drawAvatar } from './avatar.js';
import { $, escapeHtml } from '../core/util.js';

// A "station" is a place a speaker appears: the facecam bubble, or the TV in the menu.
export class Station {
  constructor(frame, { canvas, img, video, root = frame, nameEl = null }) {
    this.root = root;
    this.frame = frame;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.img = img;
    this.video = video;
    this.nameEl = nameEl;
    this.who = 'guard';
    this.mood = 'normal';
    this.talk = 0;
    this.speaking = false;
    this.blinkT = 2;
    this.blink = 0;
    this.t = 0;
  }

  setMode(mode) {
    this.frame.classList.toggle('has-video', mode === 'video');
    this.frame.classList.toggle('has-img', mode === 'img');
  }

  // Show a photo, a silent looping reaction video, or (null) the cartoon.
  showFace(media) {
    const v = this.video;
    if (media?.kind === 'video') {
      this.setMode('video');
      if (v.getAttribute('src') !== media.url) v.src = media.url;
      v.muted = true;
      v.loop = true;
      v.play().catch(() => {});
    } else {
      if (!v.paused) v.pause();
      v.loop = false;
      if (media) { this.setMode('img'); if (this.img.getAttribute('src') !== media.url) this.img.src = media.url; } else this.setMode('canvas');
    }
  }

  update(dt) {
    this.t += dt;
    this.blinkT -= dt;
    if (this.blinkT < 0) { this.blink = 1; if (this.blinkT < -0.12) { this.blink = 0; this.blinkT = 2 + Math.random() * 3; } }
    const target = this.speaking ? Math.abs(Math.sin(this.t * 17)) * (0.5 + Math.random() * 0.5) : 0;
    this.talk += (target - this.talk) * Math.min(1, dt * 25);
    this.frame.classList.toggle('talking', this.speaking);
    drawAvatar(this.ctx, this.who, { t: this.t, talk: this.talk, mood: this.mood, blink: this.blink });
  }
}

export class Dialogue {
  constructor(game) {
    this.game = game;
    this.sub = $('#subtitle');
    this.subName = $('.sub-name', this.sub);
    this.subText = $('.sub-text', this.sub);
    this.fcRoot = $('#facecam');
    const fr = $('.fc-frame', this.fcRoot);
    this.facecam = new Station(fr, { canvas: $('canvas', fr), img: $('img', fr), video: $('video', fr), root: this.fcRoot, nameEl: $('.fc-name', this.fcRoot) });
    this.tv = null; // set by the menu
    this.current = null;
    this.typeT = 0;
    this.fullText = '';
    this.voices = [];
    this.allowClickSkip = false;
    if ('speechSynthesis' in window) {
      const load = () => { this.voices = speechSynthesis.getVoices().filter((v) => /^en/i.test(v.lang)); };
      load();
      speechSynthesis.onvoiceschanged = load;
    }
    const advance = (e) => {
      if (!this.current || !this.allowClickSkip) return;
      if (e.target.closest && e.target.closest('button, .modal, #menu')) return;
      this.skipLine();
    };
    addEventListener('mousedown', advance);
    addEventListener('touchstart', advance, { passive: true });
  }

  stationFor(who) {
    if (this.tv && (who === 'dev' || this.forceTv)) return this.tv;
    return this.facecam;
  }

  skipLine() {
    if (this.current) this.current.skip();
  }

  stop() {
    this.skipLine();
  }

  update(dt) {
    if (this.current) {
      this.typeT += dt;
      const n = Math.min(this.fullText.length, Math.floor(this.typeT * 55));
      if (n !== this.shown) {
        this.shown = n;
        this.subText.textContent = this.fullText.slice(0, n);
        this.sub.classList.toggle('done', n >= this.fullText.length);
      }
    }
    if (!this.fcRoot.classList.contains('off')) this.facecam.update(dt);
    if (this.tv) this.tv.update(dt);
  }

  // Say a scripted line by id (see game/script.js).
  say(id, opts = {}) {
    const L = LINES[id] || { who: opts.who || 'guard', text: id, mood: 'normal' };
    return this.sayRaw(L.who, L.text, { mood: L.mood, clip: LINES[id] ? id : null, ...opts });
  }

  // beeps: always speak in beeps (unless voices are off), e.g. the morning visitors; pitch: their voice
  async sayRaw(who, text, { mood = 'normal', clip = null, hold = 0.35, showCam = true, beeps = false, pitch = 1, name: nameOverride = null } = {}) {
    const g = this.game;
    if (g.sched.skipping) return;
    this.skipLine();
    let skipFn;
    const skipped = new Promise((r) => (skipFn = r));
    const token = { skipped: false, skip: () => { token.skipped = true; skipFn(); } };
    this.current = token;
    document.body.classList.add('talking');
    g.audio.duck(true);

    const st = this.stationFor(who);
    st.who = who;
    st.mood = mood;
    const name = nameOverride || SPEAKERS[who]?.name() || who.toUpperCase();
    // subtitles
    const subsOn = g.save.settings.subtitles !== 'off';
    this.sub.classList.toggle('off', !subsOn);
    this.sub.dataset.who = who;
    // in the menu, speech appears next to whoever is talking instead of over the buttons
    this.sub.dataset.place = st === this.tv ? 'tv' : this.fcRoot.classList.contains('menu-pos') ? 'left' : '';
    this.subName.textContent = name;
    // *stage directions* show without the asterisks
    this.fullText = text.replace(/\*([^*]+)\*/g, '$1');
    this.typeT = 0;
    this.shown = -1;
    this.subText.textContent = '';
    this.sub.classList.remove('done');
    this.sub.style.animation = 'none';
    void this.sub.offsetWidth;
    this.sub.style.animation = '';
    if (st === this.facecam) {
      this.fcRoot.classList.toggle('off', !showCam);
      this.fcRoot.dataset.who = who;
      st.nameEl.textContent = name;
      this.fcRoot.style.animation = 'none';
      void this.fcRoot.offsetWidth;
      this.fcRoot.style.animation = '';
    } else {
      this.tvBubble?.(text);
    }

    const media = await g.clips.forLine(clip, who, mood);
    if (token.skipped) return this._end(token, st);
    const timeout = (s) => new Promise((r) => setTimeout(r, s * 1000));

    if (media?.type === 'line') {
      st.setMode('video');
      const v = st.video;
      v.src = media.url;
      v.loop = false;
      v.muted = false;
      v.volume = Math.min(1, g.save.settings.master * 1.1);
      v.currentTime = 0;
      st.speaking = false;
      const ended = new Promise((r) => { v.onended = r; v.onerror = r; });
      try { await v.play(); } catch (_) { v.muted = true; v.play().catch(() => {}); }
      await Promise.race([ended, skipped, timeout(30)]);
      v.pause();
    } else {
      st.showFace(media);
      st.speaking = true;
      const est = 1.2 + text.length * 0.055;
      const voice = beeps ? (g.save.settings.voice === 'off' ? 'off' : 'beeps') : g.save.settings.voice || 'tts';
      let done;
      if (voice === 'tts' && 'speechSynthesis' in window && this.voices.length && !this.ttsBroken) {
        done = Promise.race([this._tts(who, text), timeout(est * 1.8 + 2)]).then((r) => {
          // The browser refused to speak (e.g. blocked autoplay): use beeps from now on.
          if (r === 'nostart' && !token.skipped) {
            this.ttsBroken = true;
            return timeout(Math.max(g.audio.babble(text, who), 0.6));
          }
        });
      } else if (voice !== 'off') {
        const d = g.audio.babble(text, who, undefined, pitch);
        done = timeout(Math.max(d, 0.6));
      } else done = timeout(est);
      await Promise.race([done, skipped]);
      if ('speechSynthesis' in window) speechSynthesis.cancel();
      st.speaking = false;
      this.subText.textContent = this.fullText;
      this.sub.classList.add('done');
      if (!token.skipped) await Promise.race([timeout(hold), skipped]);
    }
    return this._end(token, st);
  }

  _end(token, st) {
    if (this.current === token) {
      this.current = null;
      document.body.classList.remove('talking');
      this.game.audio.duck(false);
      this.sub.classList.add('off');
      if (st === this.facecam) this.fcRoot.classList.add('off');
      else this.tvBubble?.(null);
      st.speaking = false;
      st.showFace(st === this.facecam ? null : this.game.clips.face(st.who, st.mood));
    }
  }

  _tts(who, text) {
    return new Promise((resolve) => {
      const clean = text.replace(/\*[^*]+\*/g, '').replace(/—/g, ', ').replace(/MUSE-OS/g, 'Muse O S');
      const u = new SpeechSynthesisUtterance(clean);
      const vs = this.voices;
      const prefs = { guard: 0, dev: 1, aaron: 2, museos: 3, mummy: 1 };
      u.voice = vs[(prefs[who] ?? 0) % vs.length];
      u.pitch = { guard: 1.05, dev: 0.85, aaron: 1.3, museos: 0.4, mummy: 0.1 }[who] ?? 1;
      u.rate = { guard: 1.08, dev: 1.0, aaron: 1.12, museos: 0.88, mummy: 0.75 }[who] ?? 1;
      u.volume = Math.min(1, (this.game.save.settings.master ?? 0.8) * 1.1);
      let started = false;
      u.onstart = () => { started = true; };
      u.onend = () => resolve('end');
      u.onerror = () => resolve(started ? 'end' : 'nostart');
      speechSynthesis.cancel();
      speechSynthesis.speak(u);
      setTimeout(() => { if (!started && !speechSynthesis.speaking) { speechSynthesis.cancel(); resolve('nostart'); } }, 1500);
    });
  }

  setPaused(p) {
    const v = this.facecam.video;
    if (p) { v.pause(); if ('speechSynthesis' in window) speechSynthesis.pause(); }
    else { if (this.current && v.src && !v.ended && this.facecam.frame.classList.contains('has-video')) v.play().catch(() => {}); if ('speechSynthesis' in window) speechSynthesis.resume(); }
  }
}

export function escape(s) {
  return escapeHtml(s);
}
