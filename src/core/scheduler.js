// Game-time scheduler: waits and tweens advance only while the game is unpaused,
// and a cutscene can be fast-forwarded by completing everything instantly.

export const Ease = {
  linear: (t) => t,
  in: (t) => t * t * t,
  out: (t) => 1 - Math.pow(1 - t, 3),
  inOut: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  sine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
  outBack: (t) => {
    const c1 = 1.70158, c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
  outElastic: (t) =>
    t === 0 || t === 1 ? t : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1,
};

export class Scheduler {
  constructor() {
    this.time = 0;
    this.waits = [];
    this.tweens = [];
    this.skipping = false;
  }

  reset() {
    this.waits = [];
    this.tweens = [];
    this.skipping = false;
  }

  update(dt) {
    this.time += dt;
    if (this.waits.length) {
      const due = [];
      this.waits = this.waits.filter((w) => {
        if (w.t <= this.time || (w.cond && w.cond())) {
          due.push(w);
          return false;
        }
        return true;
      });
      for (const w of due) w.resolve();
    }
    if (this.tweens.length) {
      const done = [];
      for (const tw of this.tweens) {
        tw.t += dt;
        const k = Math.min(1, tw.t / tw.d);
        tw.fn(tw.ease(k));
        if (k >= 1) done.push(tw);
      }
      if (done.length) {
        this.tweens = this.tweens.filter((t) => !done.includes(t));
        for (const tw of done) tw.resolve();
      }
    }
  }

  wait(sec) {
    if (this.skipping || sec <= 0) return Promise.resolve();
    return new Promise((resolve) => this.waits.push({ t: this.time + sec, resolve }));
  }

  // Waits for a condition. Never fast-forwarded (it depends on the player).
  until(cond) {
    if (cond()) return Promise.resolve();
    return new Promise((resolve) => this.waits.push({ t: Infinity, cond, resolve }));
  }

  tween(duration, fn, ease = Ease.inOut) {
    if (this.skipping || duration <= 0) {
      fn(1);
      return Promise.resolve();
    }
    fn(0);
    return new Promise((resolve) => this.tweens.push({ t: 0, d: duration, fn, ease, resolve }));
  }

  skipAll() {
    this.skipping = true;
    const tweens = this.tweens;
    this.tweens = [];
    for (const tw of tweens) {
      tw.fn(1);
      tw.resolve();
    }
    const timed = this.waits.filter((w) => !w.cond);
    this.waits = this.waits.filter((w) => w.cond);
    for (const w of timed) w.resolve();
  }
}
