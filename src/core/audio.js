// Everything you hear is synthesized live with the Web Audio API:
// sound effects, the T-Rex roar, the music tracks and the "babble" voices.

const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);
const R = Math.random;

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.track = null;
    this.trackName = null;
    this.pendingMusic = null;
    this.ambientNodes = [];
    this.vol = { master: 0.8, music: 0.6, sfx: 0.9 };
  }

  get now() {
    return this.ctx ? this.ctx.currentTime : 0;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.out = ctx.createDynamicsCompressor();
    this.out.threshold.value = -12;
    this.out.ratio.value = 4;
    this.out.connect(ctx.destination);
    this.master = ctx.createGain();
    this.master.connect(this.out);
    this.musicBus = ctx.createGain();
    this.musicBus.connect(this.master);
    // music gets quieter while someone talks and under big sound effects (see duck())
    this.musicDuck = ctx.createGain();
    this.musicDuck.connect(this.musicBus);
    this.sfxBus = ctx.createGain();
    this.sfxBus.connect(this.master);
    this.ambBus = ctx.createGain();
    this.ambBus.connect(this.sfxBus);
    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this._impulse(2.6, 2.4);
    this.revGain = ctx.createGain();
    this.revGain.gain.value = 0.5;
    this.reverb.connect(this.revGain);
    this.revGain.connect(this.master);
    this.noiseBuf = this._noise(2);
    this.brownBuf = this._brown(4);
    this.distCurve = this._curve(60);
    this.setVolumes(this.vol);
    this._seq = setInterval(() => this._tick(), 25);
    if (this.pendingMusic) {
      const m = this.pendingMusic;
      this.pendingMusic = null;
      this.playMusic(m);
    }
    if (this.pendingAmbient) this.setAmbient(this.pendingAmbient);
  }

  setVolumes(v) {
    Object.assign(this.vol, v);
    if (!this.ctx) return;
    this.master.gain.value = this.vol.master;
    this.musicBus.gain.value = this.vol.music * 0.9;
    this.sfxBus.gain.value = this.vol.sfx;
  }

  setReverb(amount) {
    if (this.revGain) this.revGain.gain.setTargetAtTime(amount, this.now, 0.3);
  }

  // ---------- buffers ----------
  _noise(sec) {
    const b = this.ctx.createBuffer(1, this.ctx.sampleRate * sec, this.ctx.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = R() * 2 - 1;
    return b;
  }
  _brown(sec) {
    const b = this.ctx.createBuffer(1, this.ctx.sampleRate * sec, this.ctx.sampleRate);
    const d = b.getChannelData(0);
    let last = 0;
    for (let i = 0; i < d.length; i++) {
      last = (last + 0.02 * (R() * 2 - 1)) / 1.02;
      d[i] = last * 3.5;
    }
    return b;
  }
  _impulse(sec, decay) {
    const rate = this.ctx.sampleRate, len = rate * sec;
    const b = this.ctx.createBuffer(2, len, rate);
    for (let c = 0; c < 2; c++) {
      const d = b.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (R() * 2 - 1) * Math.pow(1 - i / len, decay);
    }
    return b;
  }
  _curve(k) {
    const n = 1024, c = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const x = (i * 2) / n - 1;
      c[i] = ((3 + k) * x * 20 * (Math.PI / 180)) / (Math.PI + k * Math.abs(x));
    }
    return c;
  }

  // ---------- primitives ----------
  _route(node, dest, send) {
    node.connect(dest || this.sfxBus);
    if (send) {
      const s = this.ctx.createGain();
      s.gain.value = send;
      node.connect(s);
      s.connect(this.reverb);
    }
  }

  tone({ type = 'sine', f = 440, f2 = null, t = this.now, a = 0.005, d = 0.3, g = 0.3, dest, send = 0, detune = 0, vib = 0, vibRate = 5, filter = null }) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f, t);
    if (f2) o.frequency.exponentialRampToValueAtTime(Math.max(1, f2), t + a + d);
    o.detune.value = detune;
    if (vib) {
      const l = ctx.createOscillator(), lg = ctx.createGain();
      l.frequency.value = vibRate;
      lg.gain.value = vib;
      l.connect(lg);
      lg.connect(o.frequency);
      l.start(t);
      l.stop(t + a + d + 0.1);
    }
    const gn = ctx.createGain();
    gn.gain.setValueAtTime(0.0001, t);
    gn.gain.linearRampToValueAtTime(g, t + a);
    gn.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
    let src = o;
    if (filter) {
      const fl = ctx.createBiquadFilter();
      fl.type = filter.type || 'lowpass';
      fl.frequency.value = filter.f;
      fl.Q.value = filter.q || 0.7;
      o.connect(fl);
      src = fl;
    }
    src.connect(gn);
    this._route(gn, dest, send);
    o.start(t);
    o.stop(t + a + d + 0.05);
    return o;
  }

  noise({ t = this.now, a = 0.005, d = 0.2, g = 0.3, type = 'bandpass', f = 1000, f2 = null, q = 1, dest, send = 0, brown = false }) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const s = ctx.createBufferSource();
    s.buffer = brown ? this.brownBuf : this.noiseBuf;
    s.playbackRate.value = 0.8 + R() * 0.4;
    const fl = ctx.createBiquadFilter();
    fl.type = type;
    fl.frequency.setValueAtTime(f, t);
    if (f2) fl.frequency.exponentialRampToValueAtTime(f2, t + a + d);
    fl.Q.value = q;
    const gn = ctx.createGain();
    gn.gain.setValueAtTime(0.0001, t);
    gn.gain.linearRampToValueAtTime(g, t + a);
    gn.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
    s.connect(fl);
    fl.connect(gn);
    this._route(gn, dest, send);
    s.start(t, R() * 1.5);
    s.stop(t + a + d + 0.05);
  }

  // ---------- instruments (for music) ----------
  pluck(t, f, d, g, dest, type = 'triangle') {
    this.tone({ type, f, t, a: 0.003, d, g, dest });
  }
  bell(t, f, g, dest) {
    this.tone({ type: 'sine', f, t, a: 0.002, d: 1.6, g, dest, send: 0.3 });
    this.tone({ type: 'sine', f: f * 2.76, t, a: 0.002, d: 0.6, g: g * 0.35, dest });
  }
  pad(t, notes, dur, g, dest, cutoff = 900) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const fl = ctx.createBiquadFilter();
    fl.type = 'lowpass';
    fl.frequency.value = cutoff;
    const gn = ctx.createGain();
    gn.gain.setValueAtTime(0.0001, t);
    gn.gain.linearRampToValueAtTime(g, t + Math.min(1.2, dur * 0.3));
    gn.gain.setValueAtTime(g, t + dur * 0.75);
    gn.gain.linearRampToValueAtTime(0.0001, t + dur);
    fl.connect(gn);
    gn.connect(dest);
    for (const m of notes) {
      for (const det of [-8, 8]) {
        const o = ctx.createOscillator();
        o.type = 'sawtooth';
        o.frequency.value = mtof(m);
        o.detune.value = det;
        o.connect(fl);
        o.start(t);
        o.stop(t + dur + 0.05);
      }
    }
  }
  kick(t, g, dest) {
    this.tone({ type: 'sine', f: 150, f2: 42, t, a: 0.002, d: 0.28, g, dest });
  }
  snare(t, g, dest) {
    this.noise({ t, d: 0.16, g, type: 'highpass', f: 1400, dest });
    this.tone({ type: 'triangle', f: 210, f2: 150, t, d: 0.08, g: g * 0.6, dest });
  }
  hat(t, g, dest, open = false) {
    this.noise({ t, d: open ? 0.18 : 0.04, g, type: 'highpass', f: 7500, dest });
  }
  bass(t, f, d, g, dest, cutoff = 700) {
    this.tone({ type: 'sawtooth', f, t, a: 0.005, d, g, dest, filter: { f: cutoff, q: 4 } });
  }
  distBass(t, f, d, g, dest) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = 'sawtooth';
    o.frequency.value = f;
    const ws = ctx.createWaveShaper();
    ws.curve = this.distCurve;
    const fl = ctx.createBiquadFilter();
    fl.type = 'lowpass';
    fl.frequency.value = 1200;
    const gn = ctx.createGain();
    gn.gain.setValueAtTime(g, t);
    gn.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(ws); ws.connect(fl); fl.connect(gn); gn.connect(dest);
    o.start(t);
    o.stop(t + d + 0.05);
  }

  // ---------- named sound effects ----------
  play(name, opts = {}) {
    if (!this.ctx) return;
    const t = this.now + (opts.delay || 0);
    const v = opts.vol ?? 1;
    if (LOUD_SFX.has(name) && v > 0.5) this._duckFor((opts.delay || 0) + 1.6);
    switch (name) {
      case 'step': {
        const surf = opts.surface || 'marble';
        const f = surf === 'wood' ? 450 : surf === 'concrete' ? 1300 : surf === 'carpet' ? 300 : 950;
        this.noise({ t, a: 0.002, d: surf === 'carpet' ? 0.05 : 0.09, g: 0.14 * v, type: 'bandpass', f: f * (0.85 + R() * 0.3), q: 1.3, send: 0.25 });
        this.tone({ type: 'sine', f: 120, f2: 55, t, d: 0.07, g: 0.12 * v });
        break;
      }
      case 'click':
        this.tone({ type: 'square', f: 1900, t, d: 0.025, g: 0.05 * v, filter: { f: 3000 } });
        break;
      case 'hover':
        this.tone({ type: 'sine', f: 1300, t, d: 0.04, g: 0.035 * v });
        break;
      case 'select':
        this.tone({ type: 'triangle', f: 660, t, d: 0.08, g: 0.1 * v });
        this.tone({ type: 'triangle', f: 990, t: t + 0.06, d: 0.12, g: 0.1 * v });
        break;
      case 'back':
        this.tone({ type: 'triangle', f: 700, t, d: 0.08, g: 0.08 * v });
        this.tone({ type: 'triangle', f: 470, t: t + 0.06, d: 0.12, g: 0.08 * v });
        break;
      case 'chime': {
        [72, 76, 79, 84, 88].forEach((m, i) => {
          this.tone({ type: 'triangle', f: mtof(m), t: t + i * 0.07, d: 0.7, g: 0.12 * v, send: 0.4 });
          this.tone({ type: 'sine', f: mtof(m + 12), t: t + i * 0.07, d: 0.4, g: 0.04 * v });
        });
        break;
      }
      case 'unlock':
        this.tone({ type: 'square', f: 300, t, d: 0.05, g: 0.08 * v, filter: { f: 1500 } });
        this.tone({ type: 'square', f: 180, t: t + 0.08, d: 0.08, g: 0.1 * v, filter: { f: 1200 } });
        this.noise({ t: t + 0.08, d: 0.1, g: 0.15 * v, f: 2500, q: 2 });
        break;
      case 'error':
        this.tone({ type: 'square', f: 150, t, d: 0.13, g: 0.07 * v, filter: { f: 900 } });
        this.tone({ type: 'square', f: 112, t: t + 0.15, d: 0.22, g: 0.07 * v, filter: { f: 900 } });
        break;
      case 'tick':
        this.tone({ type: 'sine', f: 2400, t, d: 0.015, g: 0.05 * v });
        break;
      case 'type':
        this.noise({ t, d: 0.03, g: 0.12 * v, f: 3000 + R() * 1500, q: 3 });
        break;
      case 'munch':
        for (let i = 0; i < 4; i++) this.noise({ t: t + i * (0.09 + R() * 0.05), d: 0.07, g: 0.5 * v, f: 1300 + R() * 1800, q: 1.2 });
        this.tone({ type: 'sine', f: 300, f2: 120, t: t + 0.42, d: 0.12, g: 0.22 * v });
        break;
      case 'pickup':
        this.tone({ type: 'sine', f: 520, f2: 1500, t, d: 0.16, g: 0.12 * v });
        [88, 91, 96].forEach((m, i) => this.tone({ type: 'triangle', f: mtof(m), t: t + 0.08 + i * 0.05, d: 0.3, g: 0.06 * v, send: 0.4 }));
        break;
      case 'coin':
        this.tone({ type: 'square', f: mtof(83 + (opts.pitch || 0)), t, d: 0.05, g: 0.05 * v, filter: { f: 4000 } });
        this.tone({ type: 'square', f: mtof(88 + (opts.pitch || 0)), t: t + 0.05, d: 0.14, g: 0.05 * v, filter: { f: 4000 } });
        break;
      case 'flashlight':
        this.noise({ t, d: 0.02, g: 0.25 * v, f: 3500, q: 4 });
        this.noise({ t: t + 0.05, d: 0.02, g: 0.18 * v, f: 2500, q: 4 });
        break;
      case 'roar':
        this._roar(t, v, opts.short);
        break;
      case 'growl':
        this._roar(t, v * 0.45, true, true);
        break;
      case 'stomp':
        this.tone({ type: 'sine', f: 70, f2: 28, t, a: 0.005, d: 0.6, g: 0.7 * v, send: 0.5 });
        this.noise({ t, d: 0.5, g: 0.35 * v, type: 'lowpass', f: 220, send: 0.6, brown: true });
        break;
      case 'clatter':
        for (let i = 0; i < 16; i++) {
          const tt = t + R() * 1.4 * (i / 16 + 0.2);
          this.noise({ t: tt, d: 0.05 + R() * 0.05, g: (0.15 + R() * 0.15) * v, f: 1200 + R() * 2600, q: 6, send: 0.7 });
        }
        for (let i = 0; i < 4; i++) this.tone({ type: 'sine', f: 90 + R() * 40, f2: 40, t: t + R() * 1.2, d: 0.3, g: 0.3 * v, send: 0.6 });
        break;
      case 'creak':
        this.tone({ type: 'sawtooth', f: 70, f2: 95, t, a: 0.2, d: 1.2, g: 0.05 * v, vib: 18, vibRate: 13, filter: { type: 'bandpass', f: 700, q: 6 }, send: 0.6 });
        break;
      case 'whoosh':
        this.noise({ t, a: 0.12, d: 0.35, g: 0.3 * v, f: 400, f2: 2500, q: 1.5 });
        break;
      case 'heartbeat':
        this.tone({ type: 'sine', f: 60, f2: 40, t, d: 0.14, g: 0.5 * v });
        this.tone({ type: 'sine', f: 55, f2: 38, t: t + 0.22, d: 0.18, g: 0.4 * v });
        break;
      case 'note':
        this.tone({ type: 'triangle', f: opts.f || 523, t, a: 0.005, d: opts.dur || 0.3, g: 0.16 * v });
        this.tone({ type: 'sine', f: (opts.f || 523) * 2, t, a: 0.005, d: (opts.dur || 0.3) * 0.6, g: 0.04 * v });
        break;
      case 'beep':
        this.tone({ type: 'sine', f: 760, t, a: 0.004, d: opts.dur || 0.1, g: 0.14 * v });
        break;
      case 'static':
        this.noise({ t, d: opts.dur || 0.35, g: 0.12 * v, type: 'highpass', f: 2500 });
        break;
      case 'radio':
        this.noise({ t, d: 0.25, g: 0.14 * v, type: 'bandpass', f: 1800, q: 0.8 });
        this.tone({ type: 'square', f: 1200, t: t + 0.25, d: 0.06, g: 0.04 * v });
        break;
      case 'gate':
        this.tone({ type: 'sawtooth', f: 55, f2: 75, t, a: 0.1, d: 1.6, g: 0.12 * v, filter: { type: 'bandpass', f: 400, q: 3 }, send: 0.4 });
        this.noise({ t, a: 0.1, d: 1.6, g: 0.08 * v, f: 900, q: 4, send: 0.3 });
        this.tone({ type: 'sine', f: 90, f2: 40, t: t + 1.6, d: 0.3, g: 0.4 * v, send: 0.4 });
        break;
      case 'bonk':
        this.tone({ type: 'sine', f: 420, f2: 90, t, d: 0.25, g: 0.4 * v });
        this.noise({ t, d: 0.2, g: 0.3 * v, f: 800 });
        break;
      case 'crash':
        this.noise({ t, d: 1.2, g: 0.6 * v, type: 'lowpass', f: 3000, f2: 200, send: 0.6 });
        this.tone({ type: 'sine', f: 80, f2: 30, t, d: 0.8, g: 0.8 * v });
        for (let i = 0; i < 10; i++) this.noise({ t: t + 0.1 + R() * 0.9, d: 0.08, g: 0.12 * v, f: 2000 + R() * 3000, q: 5, send: 0.5 });
        break;
      case 'scratch':
        this.noise({ t, a: 0.01, d: 0.25, g: 0.4 * v, f: 3000, f2: 600, q: 2 });
        this.tone({ type: 'sawtooth', f: 900, f2: 120, t, d: 0.25, g: 0.1 * v });
        break;
      case 'wahwah': {
        [55, 54, 53].forEach((m, i) => this.tone({ type: 'sawtooth', f: mtof(m), t: t + i * 0.55, a: 0.05, d: 0.5, g: 0.12 * v, filter: { f: 1100 } }));
        this.tone({ type: 'sawtooth', f: mtof(52), t: t + 1.65, a: 0.05, d: 1.5, g: 0.12 * v, vib: 6, vibRate: 6, filter: { f: 1000 } });
        break;
      }
      case 'kick':
        this.noise({ t, a: 0.05, d: 0.2, g: 0.4 * v, f: 600, f2: 3000 });
        this.tone({ type: 'sine', f: 160, f2: 40, t: t + 0.22, d: 0.5, g: 0.9 * v });
        this.noise({ t: t + 0.22, d: 0.4, g: 0.5 * v, type: 'lowpass', f: 1500 });
        break;
      case 'crt':
        this.tone({ type: 'sine', f: 9000, f2: 300, t, d: 0.4, g: 0.05 * v });
        this.tone({ type: 'sine', f: 90, f2: 30, t, d: 0.3, g: 0.4 * v });
        break;
      case 'glitch':
        for (let i = 0; i < 6; i++) this.tone({ type: 'square', f: 100 + R() * 2000, t: t + i * 0.04, d: 0.035, g: 0.05 * v });
        break;
      case 'alarm':
        for (let i = 0; i < (opts.n || 3); i++) {
          this.tone({ type: 'sawtooth', f: 620, t: t + i * 0.8, d: 0.38, g: 0.05 * v, filter: { f: 1800 } });
          this.tone({ type: 'sawtooth', f: 830, t: t + i * 0.8 + 0.4, d: 0.38, g: 0.05 * v, filter: { f: 1800 } });
        }
        break;
      case 'yawn':
        this.tone({ type: 'sawtooth', f: 330, f2: 160, t, a: 0.3, d: 1.3, g: 0.06 * v, filter: { type: 'bandpass', f: 800, q: 2 } });
        break;
      case 'sparkle':
        for (let i = 0; i < 6; i++) this.tone({ type: 'sine', f: mtof(84 + Math.floor(R() * 14)), t: t + i * 0.05, d: 0.2, g: 0.04 * v, send: 0.5 });
        break;
      case 'drip':
        this.tone({ type: 'sine', f: 1400 + R() * 500, f2: 600, t, d: 0.12, g: 0.06 * v, send: 0.8 });
        break;
      case 'thud':
        this.tone({ type: 'sine', f: 100, f2: 45, t, d: 0.25, g: 0.4 * v, send: 0.3 });
        this.noise({ t, d: 0.12, g: 0.2 * v, type: 'lowpass', f: 500 });
        break;
      case 'buzz':
        this.tone({ type: 'sawtooth', f: 120, t, d: 0.25, g: 0.05 * v, filter: { f: 800 } });
        break;
      case 'cheer': // a crowd: layered shouts (bands of noise swelling and fading) and a few whistles
        for (let i = 0; i < 7; i++) this.noise({ t: t + R() * 0.4, a: 0.25 + R() * 0.3, d: 1.2 + R() * 1.2, g: 0.05 * v, type: 'bandpass', f: 700 + R() * 1600, q: 1.5 + R() * 2, send: 0.3 });
        for (let i = 0; i < 2; i++) if (R() < 0.8) this.tone({ type: 'sine', f: 2200 + R() * 600, f2: 2900 + R() * 400, t: t + 0.2 + R() * 0.8, a: 0.02, d: 0.35, g: 0.02 * v, vib: 12, vibRate: 9 });
        break;
      case 'carby': { // a car driving past outside: tires and engine swell, then fade as it goes
        const dur = opts.dur || 3;
        this.noise({ t, a: dur * 0.5, d: dur * 0.5, g: 0.08 * v, type: 'lowpass', f: 300, f2: 180, q: 0.7, brown: true });
        this.noise({ t, a: dur * 0.5, d: dur * 0.5, g: 0.025 * v, type: 'bandpass', f: 900, f2: 500, q: 0.8 });
        this.tone({ type: 'sawtooth', f: 70, f2: 52, t, a: dur * 0.5, d: dur * 0.5, g: 0.012 * v, filter: { f: 300 } });
        break;
      }
      case 'honk':
        for (const f of [440, 554]) this.tone({ type: 'square', f, t, a: 0.01, d: 0.28, g: 0.02 * v, filter: { f: 1800 } });
        break;
      case 'sting':
        this.tone({ type: 'sawtooth', f: mtof(45), t, a: 0.01, d: 2.2, g: 0.12 * v, filter: { f: 900 }, send: 0.5 });
        this.tone({ type: 'sawtooth', f: mtof(46), t, a: 0.01, d: 2.2, g: 0.1 * v, filter: { f: 900 }, send: 0.5 });
        this.tone({ type: 'sine', f: mtof(81), t, a: 0.01, d: 1.5, g: 0.06 * v, vib: 8, send: 0.5 });
        this.noise({ t, d: 0.6, g: 0.3 * v, type: 'lowpass', f: 400, brown: true });
        break;
      default:
        break;
    }
  }

  _roar(t, v, short = false, soft = false) {
    const ctx = this.ctx;
    const dur = short ? 1.2 : 2.4;
    const out = ctx.createGain();
    out.gain.setValueAtTime(0.0001, t);
    out.gain.linearRampToValueAtTime(0.9 * v, t + 0.25);
    out.gain.setValueAtTime(0.9 * v, t + dur * 0.6);
    out.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    // rattle tremolo
    const trem = ctx.createGain();
    trem.gain.value = 0.7;
    const lfo = ctx.createOscillator();
    lfo.frequency.value = soft ? 9 : 22;
    const lfoG = ctx.createGain();
    lfoG.gain.value = 0.3;
    lfo.connect(lfoG);
    lfoG.connect(trem.gain);
    lfo.start(t);
    lfo.stop(t + dur);
    const ws = ctx.createWaveShaper();
    ws.curve = this.distCurve;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.Q.value = 3;
    lp.frequency.setValueAtTime(350, t);
    lp.frequency.linearRampToValueAtTime(soft ? 600 : 1700, t + 0.4);
    lp.frequency.linearRampToValueAtTime(300, t + dur);
    ws.connect(lp);
    lp.connect(trem);
    trem.connect(out);
    this._route(out, null, 0.7);
    for (const [base, det] of [[68, 0], [91, 12], [113, -9], [46, 4]]) {
      const o = ctx.createOscillator();
      o.type = 'sawtooth';
      o.frequency.setValueAtTime(base * 0.8, t);
      o.frequency.linearRampToValueAtTime(base * 1.25, t + 0.35);
      o.frequency.linearRampToValueAtTime(base * 0.7, t + dur);
      o.detune.value = det;
      o.connect(ws);
      o.start(t);
      o.stop(t + dur + 0.05);
    }
    // breath
    this.noise({ t, a: 0.2, d: dur, g: 0.35 * v, type: 'bandpass', f: 700, f2: 300, q: 0.8, send: 0.6 });
  }

  // ---------- voices ----------
  babble(text, who, dest, pitch = 1) {
    if (!this.ctx) return 0;
    const base = ({ guard: 210, dev: 150, aaron: 260, mummy: 120, museos: 520, narrator: 180, kid: 330, visitor: 190 }[who] || 200) * pitch;
    const type = who === 'museos' ? 'sine' : who === 'dev' ? 'sawtooth' : 'triangle';
    let t = this.now + 0.02;
    const words = String(text).split(/\s+/);
    for (const w of words) {
      const syl = Math.max(1, Math.round(w.replace(/[^a-z]/gi, '').length / 2.6));
      for (let i = 0; i < syl; i++) {
        const f = base * (0.85 + R() * 0.45) * (w === w.toUpperCase() && w.length > 1 ? 1.25 : 1);
        this.tone({ type, f, f2: f * (0.9 + R() * 0.2), t, a: 0.01, d: 0.07, g: 0.06, dest, filter: { f: 1800 } });
        t += 0.085;
      }
      t += /[.,!?…]$/.test(w) ? 0.22 : 0.05;
    }
    return t - this.now;
  }

  // ---------- music ----------
  playMusic(name, fade = 1.5) {
    if (!this.ctx) {
      this.pendingMusic = name;
      return;
    }
    if (this.trackName === name) return;
    const now = this.now;
    const old = this.track;
    // the old song fades out first and the new one starts as it ends, so two songs never play over each other
    const out = name ? Math.min(fade, 1.5) : fade;
    const start = old ? now + out * 0.85 : now + 0.08;
    if (old) {
      old.dead = true;
      const g = old.gain.gain;
      g.cancelScheduledValues(now);
      g.setValueAtTime(g.value, now);
      g.linearRampToValueAtTime(0, now + out);
      setTimeout(() => { old.gain.disconnect(); old.level.disconnect(); }, out * 1000 + 400);
    }
    this.trackName = name;
    const def = TRACKS[name];
    if (!def) {
      this.track = null;
      return;
    }
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, start);
    g.gain.linearRampToValueAtTime(def.vol ?? 0.8, start + Math.max(0.05, fade * 0.5));
    // each song also has its own level (see setMusicLevel()), so the next one always starts at full volume
    const level = this.ctx.createGain();
    g.connect(level);
    level.connect(this.musicDuck);
    this.track = { def, gain: g, level, k: 1, step: 0, next: start, dead: false };
  }

  stopMusic(fade = 1) {
    this.playMusic(null, fade);
  }

  // How loud the song that's playing is, 0..1, on top of the volume setting (a marching band coming
  // closer and going away again). Changes glide; tiny changes are ignored.
  setMusicLevel(k, glide = 0.5) {
    const tr = this.track;
    if (!tr || tr.dead || Math.abs(k - tr.k) < 0.02) return;
    tr.k = k;
    const g = tr.level.gain;
    g.cancelScheduledValues(this.now);
    g.setTargetAtTime(k, this.now, glide);
  }

  // Lower the music while someone is talking...
  duck(on) {
    this.ducked = on;
    const g = this.musicDuck?.gain;
    if (!g) return;
    // (if a big sound effect is still ducking the music, change level when it's done)
    const t = Math.max(this.now, this.duckEnd || 0);
    g.cancelScheduledValues(t);
    g.setTargetAtTime(on ? 0.4 : 1, t, on ? 0.08 : 0.5);
  }

  // ...and for a moment under a big sound effect.
  _duckFor(sec) {
    const g = this.musicDuck?.gain;
    if (!g) return;
    const now = this.now;
    this.duckEnd = Math.max(this.duckEnd || 0, now + sec);
    g.cancelScheduledValues(now);
    g.setTargetAtTime(0.3, now, 0.03);
    g.setTargetAtTime(this.ducked ? 0.4 : 1, this.duckEnd, 0.5);
  }

  _tick() {
    const tr = this.track;
    if (!tr || tr.dead || !this.ctx) return;
    const spb = 60 / tr.def.bpm / 4;
    if (tr.next < this.now - 0.3) tr.next = this.now + 0.05; // tab was asleep
    while (tr.next < this.now + 0.15) {
      try {
        tr.def.step(this, tr.step, tr.next, spb, tr.gain);
      } catch (e) {
        console.warn(e);
      }
      tr.step++;
      tr.next += spb;
    }
  }

  // ---------- ambience ----------
  setAmbient(kind) {
    if (!this.ctx) {
      this.pendingAmbient = kind;
      return;
    }
    const now = this.now;
    for (const n of this.ambientNodes) {
      try {
        n.g.gain.setTargetAtTime(0, now, 0.4);
        setTimeout(() => n.src.stop(), 2000);
      } catch (_) { /* ignore */ }
    }
    this.ambientNodes = [];
    this.ambientKind = kind;
    const add = (buf, type, f, q, gain, rate = 1) => {
      const src = this.ctx.createBufferSource();
      src.buffer = buf;
      src.loop = true;
      src.playbackRate.value = rate;
      const fl = this.ctx.createBiquadFilter();
      fl.type = type;
      fl.frequency.value = f;
      fl.Q.value = q;
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(0, now);
      g.gain.linearRampToValueAtTime(gain, now + 2);
      src.connect(fl); fl.connect(g); g.connect(this.ambBus);
      src.start();
      this.ambientNodes.push({ src, g, fl });
      return { src, g, fl };
    };
    if (kind === 'night') {
      add(this.brownBuf, 'lowpass', 200, 0.5, 0.12);
      add(this.noiseBuf, 'bandpass', 5000, 0.5, 0.006);
    } else if (kind === 'office') {
      add(this.brownBuf, 'lowpass', 180, 0.5, 0.08);
      const o = this.ctx.createOscillator();
      o.type = 'sawtooth';
      o.frequency.value = 60;
      const fl = this.ctx.createBiquadFilter();
      fl.type = 'lowpass';
      fl.frequency.value = 240;
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(0, now);
      g.gain.linearRampToValueAtTime(0.025, now + 2);
      o.connect(fl); fl.connect(g); g.connect(this.ambBus);
      o.start();
      this.ambientNodes.push({ src: o, g });
    } else if (kind === 'day') {
      const a = add(this.brownBuf, 'bandpass', 500, 0.6, 0.18, 1.6);
      const l = this.ctx.createOscillator(), lg = this.ctx.createGain();
      l.frequency.value = 0.3;
      lg.gain.value = 0.05;
      l.connect(lg); lg.connect(a.g.gain); l.start();
      this.ambientNodes.push({ src: l, g: lg });
      add(this.noiseBuf, 'bandpass', 1400, 2, 0.01);
    } else if (kind === 'maze') {
      add(this.brownBuf, 'lowpass', 110, 0.7, 0.22);
      add(this.noiseBuf, 'bandpass', 300, 4, 0.01);
    } else if (kind === 'runner') {
      add(this.noiseBuf, 'bandpass', 600, 0.4, 0.04);
    }
  }
}

// Big moments the music should get out of the way for.
const LOUD_SFX = new Set(['sting', 'roar', 'growl', 'wahwah', 'gate', 'alarm', 'crash']);

// ---------------------------------------------------------------------------
// Music. Each track is a 16th-note step sequencer function. Every part of the night has its own:
// office (prologue), dino + hunt (Dinosaur Hall), tomb + egypt (Egyptian Wing), roman, chase, maze
// (the archives), morning, plus the menu ones.
const TRACKS = {
  menu: {
    bpm: 76, vol: 1.25,
    step(a, s, t, spb, out) {
      const bar = Math.floor(s / 16) % 4, st = s % 16;
      const chords = [[57, 60, 64], [53, 57, 60], [50, 53, 57], [52, 56, 59]];
      const ch = chords[bar];
      if (st === 0) {
        a.pad(t, ch.map((m) => m - 12), spb * 16, 0.035, out, 700);
        a.tone({ type: 'sine', f: mtof(ch[0] - 24), t, a: 0.1, d: spb * 15, g: 0.12, dest: out });
      }
      if (st % 2 === 0) {
        const arp = [0, 1, 2, 1, 2, 1, 0, 2];
        a.pluck(t, mtof(ch[arp[(st / 2) % 8]] + 12), 0.5, 0.045, out);
      }
      if (st === 10 && bar % 2 === 1) a.bell(t, mtof(ch[2] + 24), 0.03, out);
    },
  },
  // Prologue: a lazy lo-fi groove for a quiet night of videos and donuts.
  office: {
    bpm: 82, vol: 1.3,
    step(a, s, t, spb, out) {
      const st = s % 16, bar = Math.floor(s / 16) % 4;
      const chords = [[53, 57, 60, 64], [52, 55, 59, 62], [50, 53, 57, 60], [48, 52, 55, 59]];
      const ch = chords[bar];
      // electric piano on 1 and the "and" of 2
      if (st === 0 || st === 6) ch.forEach((m, i) => a.tone({ type: 'sine', f: mtof(m), t: t + i * 0.012, a: 0.01, d: st === 0 ? 1.4 : 0.8, g: 0.026, dest: out, vib: 2, vibRate: 4 }));
      if (st === 0) a.bass(t, mtof(ch[0] - 24), spb * 6, 0.09, out, 300);
      if (st === 10) a.bass(t, mtof(ch[0] - 17), spb * 4, 0.07, out, 300);
      if (st === 0 || st === 9) a.kick(t, 0.22, out);
      if (st === 4 || st === 12) a.snare(t, 0.05, out);
      if (st % 2 === 0) a.hat(t, st % 4 === 2 ? 0.024 : 0.012, out);
      const mel = [2, 7, 11, 14];
      if (Math.floor(s / 64) % 2 === 1 && mel.includes(st)) a.pluck(t, mtof([72, 76, 74, 79][mel.indexOf(st)] - (bar === 3 ? 2 : 0)), 0.4, 0.03, out, 'sine');
    },
  },
  // Dinosaur Hall: big slow drums like far-off footsteps, and a marimba.
  dino: {
    bpm: 70, vol: 1.2,
    step(a, s, t, spb, out) {
      const st = s % 16, bar = Math.floor(s / 16) % 4;
      if (s % 64 === 0) a.pad(t, [28, 35, 40], spb * 64, 0.03, out, 380);
      if (st === 0 || (st === 10 && bar % 2 === 1)) a.tone({ type: 'sine', f: 95, f2: 55, t, a: 0.004, d: 0.5, g: 0.22, dest: out });
      if (st === 6 && bar === 3) a.tone({ type: 'sine', f: 130, f2: 80, t, a: 0.004, d: 0.35, g: 0.14, dest: out });
      const pent = [64, 67, 69, 71, 74, 76, 79];
      const phrase = [[0, 2, -1, 3, 2, -1, 1, -1], [4, -1, 3, 2, 3, -1, -1, -1], [2, 3, 4, 5, 4, 3, -1, 2], [1, -1, 0, -1, -1, -1, -1, -1]][bar];
      if (st % 2 === 0 && Math.floor(s / 64) % 2 === 0) {
        const n = phrase[st / 2];
        if (n >= 0) { a.pluck(t, mtof(pent[n]), 0.22, 0.05, out, 'sine'); a.pluck(t, mtof(pent[n] + 12), 0.08, 0.012, out, 'sine'); }
      }
      if (st === 12 && Math.floor(s / 64) % 2 === 1) a.bell(t, mtof(pent[(bar * 3) % 7] + 12), 0.02, out);
    },
  },
  // The T-Rex is loose: THUD... THUD... and trembling strings.
  hunt: {
    bpm: 66, vol: 0.95,
    step(a, s, t, spb, out) {
      const st = s % 16, bar = Math.floor(s / 16) % 4;
      if (st === 0) { a.tone({ type: 'sine', f: 70, f2: 38, t, a: 0.003, d: 0.7, g: 0.32, dest: out }); a.noise({ t, d: 0.25, g: 0.05, f: 180, q: 1, dest: out, brown: true }); }
      if (st === 8 && bar % 2 === 1) a.tone({ type: 'sine', f: 66, f2: 36, t, a: 0.003, d: 0.6, g: 0.24, dest: out });
      if (s % 32 === 0) a.pad(t, [40, 41, 52], spb * 32, 0.026, out, 450);
      if (st === 14 && bar === 3) a.tone({ type: 'sawtooth', f: mtof(40), f2: mtof(39), t, a: 0.05, d: 1.4, g: 0.05, dest: out, filter: { f: 500, q: 2 } });
      if (st === 4 && bar % 2 === 0) a.tone({ type: 'sawtooth', f: mtof(88), t, a: 0.6, d: 1.8, g: 0.008, dest: out, vib: 10, vibRate: 9, filter: { f: 3000 } });
    },
  },
  // On the way into the tomb (and when the mummy wakes up): a drone, a frame drum and a breathy ney.
  tomb: {
    bpm: 60, vol: 1.1,
    step(a, s, t, spb, out) {
      const st = s % 16, bar = Math.floor(s / 16) % 4;
      if (s % 64 === 0) a.pad(t, [26, 33, 39], spb * 64, 0.03, out, 420);
      if (st === 0) a.tone({ type: 'sine', f: 85, f2: 50, t, a: 0.005, d: 0.6, g: 0.2, dest: out });
      if (st === 11) a.tone({ type: 'sine', f: 110, f2: 70, t, a: 0.005, d: 0.3, g: 0.1, dest: out });
      if (st === 8 && bar % 2 === 0) a.noise({ t, a: 0.02, d: 0.35, g: 0.025, type: 'bandpass', f: 6000, q: 3, dest: out });
      const ney = [[62, 63, 66], [67, 66, 63], [69, 67, 66], [63, 62, -1]][bar];
      if (st % 5 === 0 && st < 15 && Math.floor(s / 64) % 2 === 1) {
        const n = ney[st / 5];
        if (n > 0) a.tone({ type: 'sine', f: mtof(n), t, a: 0.15, d: spb * 4, g: 0.035, dest: out, vib: 5, vibRate: 5.5, send: 0.4 });
      }
    },
  },
  // Roman Hall: low horns, a quiet marching snare, a lyre and a trumpet call.
  roman: {
    bpm: 100, vol: 1.15,
    step(a, s, t, spb, out) {
      const st = s % 16, bar = Math.floor(s / 16) % 4;
      const r = [50, 48, 46, 45][bar];
      if (st === 0) {
        a.tone({ type: 'sawtooth', f: mtof(r - 12), t, a: 0.25, d: spb * 14, g: 0.035, dest: out, filter: { f: 650, q: 1 } });
        a.tone({ type: 'sawtooth', f: mtof(r - 5), t, a: 0.3, d: spb * 14, g: 0.022, dest: out, filter: { f: 650, q: 1 } });
      }
      if ([0, 3, 4, 8, 11, 12, 14, 15].includes(st)) a.snare(t, st % 4 === 0 ? 0.045 : 0.022, out);
      if (st === 0 || st === 8) a.kick(t, 0.2, out);
      if (Math.floor(s / 64) % 2 === 1 && st % 2 === 0) a.pluck(t, mtof(r + 12 + [0, 7, 12, 15, 19, 15, 12, 7][st / 2]), 0.45, 0.035, out);
      if (bar === 3 && (st === 8 || st === 10 || st === 12)) a.tone({ type: 'square', f: mtof([69, 74, 74][(st - 8) / 2]), t, a: 0.02, d: st === 12 ? 0.9 : 0.15, g: 0.018, dest: out, filter: { f: 2200 } });
    },
  },
  chase: {
    bpm: 156, vol: 0.85,
    step(a, s, t, spb, out) {
      const st = s % 16, bar = Math.floor(s / 16) % 4;
      const roots = [40, 36, 38, 35];
      const r = roots[bar];
      if (st % 4 === 0) a.kick(t, 0.55, out);
      if (st === 4 || st === 12) a.snare(t, 0.3, out);
      if (st % 2 === 1) a.hat(t, 0.08, out, st === 15);
      const pat = [0, 0, 12, 0, 0, 12, 0, 7, 0, 0, 12, 0, 10, 12, 7, 5];
      a.bass(t, mtof(r + pat[st] - 12), spb * 0.9, 0.13, out, 900);
      if (Math.floor(s / 64) % 2 === 1 && st % 2 === 0) {
        const lead = [64, 67, 71, 67, 76, 74, 71, 67];
        a.pluck(t, mtof(lead[(st / 2) % 8] + (bar === 1 ? -4 : bar === 2 ? -2 : bar === 3 ? -5 : 0)), 0.14, 0.05, out, 'square');
      }
      if (st === 0 && bar === 0) a.tone({ type: 'sawtooth', f: mtof(76), f2: mtof(64), t, d: spb * 8, g: 0.03, dest: out, filter: { f: 2500 } });
    },
  },
  egypt: {
    bpm: 96, vol: 1.2,
    step(a, s, t, spb, out) {
      const st = s % 16, bar = Math.floor(s / 16) % 4;
      if (s % 64 === 0) a.pad(t, [38, 45, 50], spb * 64, 0.026, out, 520);
      // hand drum: DUM . . tek tek . DUM . . . tek . tek . tek .
      if (st === 0 || st === 6) a.kick(t, st === 0 ? 0.26 : 0.18, out);
      if ([3, 4, 10, 12, 14].includes(st)) a.hat(t, st === 12 ? 0.05 : 0.03, out);
      // plucked melody on an "Egyptian" scale (D E♭ F♯ G A B♭ C D)
      const scale = [62, 63, 66, 67, 69, 70, 72, 74];
      const phrase = [[0, -1, 2, -1, 3, 2, 1, 0], [4, -1, 3, 2, 3, -1, 1, 2], [4, 5, 4, 3, 2, -1, 3, 1], [2, 1, 0, -1, 1, -1, 0, -1]][bar];
      if (st % 2 === 0 && Math.floor(s / 64) % 2 === 1) {
        const n = phrase[st / 2];
        if (n >= 0) a.pluck(t, mtof(scale[n]), 0.35, 0.045, out);
      }
      if (st === 8 && bar === 3) a.tone({ type: 'sine', f: mtof(74), f2: mtof(72), t, a: 0.3, d: 2, g: 0.03, dest: out, vib: 6, vibRate: 5, send: 0.4 });
    },
  },
  maze: {
    bpm: 92, vol: 1.15,
    step(a, s, t, spb, out) {
      const st = s % 16, bar = Math.floor(s / 16) % 4;
      if (st % 2 === 0) a.hat(t, st % 4 === 0 ? 0.04 : 0.02, out);
      if (st % 4 === 0) a.bass(t, mtof([33, 33, 34, 32][bar]), spb * 3, 0.1, out, 400);
      if (st === 8 && bar % 2 === 1) {
        const n = [69, 72, 75, 78][Math.floor(s / 32) % 4];
        a.tone({ type: 'sine', f: mtof(n), t, a: 0.2, d: 1.6, g: 0.05, dest: out, vib: 5, vibRate: 5, send: 0.4 });
      }
      if (st === 0 && bar === 0) a.pad(t, [45, 51], spb * 64, 0.025, out, 500);
    },
  },
  morning: {
    bpm: 112, vol: 1.6,
    step(a, s, t, spb, out) {
      const st = s % 16, bar = Math.floor(s / 16) % 4;
      const chords = [[60, 64, 67], [55, 59, 62], [57, 60, 64], [53, 57, 60]];
      const ch = chords[bar];
      if (st % 4 === 0) a.bass(t, mtof(ch[0] - 24), spb * 2, 0.1, out, 500);
      if ([0, 3, 6, 8, 11, 14].includes(st)) ch.forEach((m) => a.pluck(t, mtof(m + 12), 0.25, 0.03, out));
      if (st % 4 === 2) a.hat(t, 0.03, out);
      if (st === 4 || st === 12) a.snare(t, 0.06, out);
      if (st % 8 === 0) a.kick(t, 0.25, out);
    },
  },
  // the morning parade: a brass band march (oom-pah tuba, snare rudiments, brass stabs, a trumpet tune)
  parade: {
    bpm: 118, vol: 1.3,
    step(a, s, t, spb, out) {
      const st = s % 16, bar = Math.floor(s / 16) % 4;
      const chords = [[60, 64, 67], [55, 59, 62, 65], [60, 64, 67], [53, 57, 60]];
      const r = [48, 43, 48, 41][bar], ch = chords[bar];
      if (st % 4 === 0) a.kick(t, st === 0 ? 0.32 : 0.22, out);
      if ([0, 2, 3, 6, 8, 10, 11, 14].includes(st)) a.snare(t, st % 8 === 0 ? 0.07 : st % 2 ? 0.025 : 0.04, out);
      if (st % 8 === 0) a.bass(t, mtof(r - 12), spb * 3, 0.12, out, 600);
      if (st % 8 === 4) a.bass(t, mtof(r - 5), spb * 3, 0.1, out, 600);
      if (st % 4 === 2) ch.forEach((m) => a.tone({ type: 'sawtooth', f: mtof(m), t, a: 0.01, d: spb * 1.2, g: 0.012, dest: out, filter: { f: 1800, q: 0.8 } }));
      const tune = [[67, 72, 76, 79, 76, 72, 76, 72], [74, 71, 74, 77, 74, 71, 67, -1], [76, 79, 84, 79, 76, 79, 76, 72], [77, 76, 74, 72, 71, 74, 72, -1]][bar];
      if (st % 2 === 0) {
        const n = tune[st / 2];
        if (n > 0) a.tone({ type: 'square', f: mtof(n), t, a: 0.015, d: spb * 1.7, g: 0.02, dest: out, filter: { f: 2600, q: 0.7 }, vib: 4, vibRate: 6 });
      }
      if (s % 64 === 0) a.noise({ t, d: 1.2, g: 0.05, type: 'highpass', f: 5000, q: 0.6, dest: out });
      if (Math.floor(s / 64) % 2 === 1 && st % 4 === 0 && tune[st / 2] > 0) a.tone({ type: 'sine', f: mtof(tune[st / 2] + 12), t, a: 0.002, d: 0.5, g: 0.02, dest: out });
    },
  },
  meta: {
    bpm: 100, vol: 2.0,
    step(a, s, t, spb, out) {
      const st = s % 16, bar = Math.floor(s / 16) % 4;
      const chords = [[60, 64, 67, 71], [57, 60, 64, 67], [50, 53, 57, 60], [55, 59, 62, 65]];
      const ch = chords[bar];
      if ([0, 6, 10].includes(st)) ch.forEach((m) => a.tone({ type: 'sine', f: mtof(m), t, a: 0.01, d: 0.6, g: 0.03, dest: out, vib: 3, vibRate: 4 }));
      if (st % 4 === 0) a.pluck(t, mtof(ch[0] - 24 + (st === 8 ? 7 : 0)), 0.4, 0.12, out, 'sine');
      if (st % 4 === 3) a.noise({ t, d: 0.02, g: 0.05, f: 4000, q: 4, dest: out });
    },
  },
  angry: {
    bpm: 150, vol: 0.9,
    step(a, s, t, spb, out) {
      const st = s % 16;
      if (st % 4 === 0) a.kick(t, 0.7, out);
      if (st === 4 || st === 12) a.snare(t, 0.4, out);
      if (st % 2 === 0) a.distBass(t, mtof([28, 28, 31, 28, 34, 28, 33, 31][(st / 2) % 8]), spb * 1.8, 0.12, out);
      a.hat(t, 0.06, out);
    },
  },
};
