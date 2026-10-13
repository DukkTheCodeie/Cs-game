import { LINES, SPEAKER_EMOTIONS } from '../game/script.js';

// Your clips and photos come ONLY from files in the repo (assets/clips/), so only people who can
// change the repo (you) can put things in the game. For each line, the first match wins:
//   1. assets/clips/<lineId>.mp4        you saying that line (plays with its own sound)
//   2. assets/clips/<who>-<emotion>.mp4 a short reaction for that emotion (plays muted, looped)
//   3. assets/clips/<who>-<emotion>.jpg a photo of you making that face
//   4. assets/clips/<who>.jpg           your normal photo
//   5. the cartoon, making that face
// Videos: .mp4 / .webm / .mov · photos: .jpg / .jpeg / .png / .webp

export const CLIP_DIR = 'assets/clips/';
const VIDEO_EXTS = ['mp4', 'webm', 'mov'];
const IMAGE_EXTS = ['jpg', 'jpeg', 'png', 'webp'];
export const ACTORS = ['guard', 'dev', 'aaron', 'mummy'];

function probe(url, kind) {
  return new Promise((resolve) => {
    let done = false;
    const el = document.createElement(kind === 'video' ? 'video' : 'img');
    const fin = (ok) => {
      if (done) return;
      done = true;
      if (kind === 'video') { el.removeAttribute('src'); try { el.load(); } catch (_) { /* ignore */ } }
      resolve(ok);
    };
    if (kind === 'video') {
      el.preload = 'metadata';
      el.muted = true;
      el.onloadedmetadata = () => fin(true);
    } else el.onload = () => fin(true);
    el.onerror = () => fin(false);
    setTimeout(() => fin(false), 8000);
    el.src = url;
  });
}

export class ClipLibrary {
  constructor() {
    this.found = {};
    this.probes = {};
    this.listeners = new Set();
  }

  // Look for files in the background; the game doesn't wait for this.
  init() {
    const jobs = [];
    const faces = (who) => {
      jobs.push(() => this._find(`img:${who}`, who, 'img'));
      for (const mood of SPEAKER_EMOTIONS[who] || []) {
        jobs.push(() => this._find(`emoimg:${who}-${mood}`, `${who}-${mood}`, 'img'));
        jobs.push(() => this._find(`emovid:${who}-${mood}`, `${who}-${mood}`, 'video'));
      }
    };
    faces('dev'); // the menu TV shows up first
    for (const who of ACTORS) if (who !== 'dev') faces(who);
    for (const id of Object.keys(LINES)) jobs.push(() => this._find(`line:${id}`, id, 'video'));
    let i = 0;
    const worker = async () => { while (i < jobs.length) await jobs[i++](); };
    Promise.all([worker(), worker(), worker(), worker(), worker(), worker()]).then(() => this._emit());
  }

  _find(key, base, kind) {
    if (!this.probes[key]) {
      this.probes[key] = (async () => {
        for (const ext of kind === 'video' ? VIDEO_EXTS : IMAGE_EXTS) {
          const url = `${CLIP_DIR}${base}.${ext}`;
          if (await probe(url, kind)) {
            this.found[key] = { url, kind };
            this._emit();
            return this.found[key];
          }
        }
        return null;
      })();
    }
    return this.probes[key];
  }

  _candidates(id, who, mood) {
    const c = [];
    if (id) c.push([`line:${id}`, id, 'video', 'line']);
    if (ACTORS.includes(who)) {
      c.push([`emovid:${who}-${mood}`, `${who}-${mood}`, 'video', 'emotion']);
      c.push([`emoimg:${who}-${mood}`, `${who}-${mood}`, 'img', 'emotion']);
      c.push([`img:${who}`, who, 'img', 'photo']);
    }
    return c;
  }

  // Best media for a line, waiting briefly for file checks that haven't finished yet.
  async forLine(id, who, mood) {
    const deadline = performance.now() + 450;
    for (const [key, base, kind, type] of this._candidates(id, who, mood)) {
      if (this.found[key]) return { ...this.found[key], type };
      const left = deadline - performance.now();
      const r = left > 0 ? await Promise.race([this._find(key, base, kind), new Promise((res) => setTimeout(() => res(null), left))]) : null;
      if (r) return { ...r, type };
    }
    return null;
  }

  // Best still face (or silent loop) for a character who isn't talking, e.g. the dev on the menu TV.
  face(who, mood = 'normal') {
    for (const [key] of this._candidates(null, who, mood)) if (this.found[key]) return this.found[key];
    return null;
  }

  onChange(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  _emit() {
    for (const fn of this.listeners) fn();
  }
}
