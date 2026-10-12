import { LINES } from '../game/script.js';

// Where clips come from (first match wins):
//   1. Recorded / uploaded in the in-game Clip Studio (saved in this browser, IndexedDB)
//   2. Files you drop in the repo:  assets/clips/<lineId>.mp4  (.webm / .mov also work)
// Photos for portraits:  assets/clips/guard.png  /  assets/clips/dev.png  (.jpg / .webp also work)
// If nothing is found, a cartoon portrait + voice is used instead.

export const CLIP_DIR = 'assets/clips/';
const VIDEO_EXTS = ['mp4', 'webm', 'mov'];
const IMAGE_EXTS = ['png', 'jpg', 'jpeg', 'webp'];
export const PORTRAIT_WHO = ['guard', 'dev', 'aaron'];

function openDB() {
  return new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) return reject(new Error('no indexedDB'));
    const r = indexedDB.open('locked-out-clips', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('clips');
    r.onsuccess = () => resolve(r.result);
    r.onerror = () => reject(r.error);
  });
}

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
    this.files = {};
    this.recorded = {};
    this.probes = {};
    this.db = null;
    this.listeners = new Set();
  }

  async init() {
    try {
      this.db = await openDB();
      const keys = await this._req((s) => s.getAllKeys());
      for (const k of keys) {
        const blob = await this._req((s) => s.get(k));
        if (blob) this._setRecorded(k, blob);
      }
    } catch (e) {
      console.info('[clips] browser storage unavailable — recording disabled', e?.message || e);
    }
    this._probeAll();
  }

  _req(fn, mode = 'readonly') {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction('clips', mode);
      const r = fn(tx.objectStore('clips'));
      r.onsuccess = () => resolve(r.result);
      r.onerror = () => reject(r.error);
    });
  }

  _setRecorded(k, blob) {
    if (this.recorded[k]) URL.revokeObjectURL(this.recorded[k].url);
    this.recorded[k] = { url: URL.createObjectURL(blob), blob, type: blob.type || '', source: 'recorded' };
  }

  async _probeAll() {
    const jobs = [];
    for (const id of Object.keys(LINES)) jobs.push(() => this._probeVideo(id));
    for (const who of PORTRAIT_WHO) jobs.push(() => this._probeImage(who));
    let i = 0;
    const worker = async () => { while (i < jobs.length) await jobs[i++](); };
    await Promise.all([worker(), worker(), worker(), worker()]);
    this._emit();
  }

  _probeVideo(id) {
    if (!this.probes[id]) {
      this.probes[id] = (async () => {
        for (const ext of VIDEO_EXTS) {
          const url = `${CLIP_DIR}${id}.${ext}`;
          if (await probe(url, 'video')) { this.files[id] = { url, source: 'file' }; return; }
        }
      })();
    }
    return this.probes[id];
  }

  _probeImage(who) {
    const key = 'portrait_' + who;
    if (!this.probes[key]) {
      this.probes[key] = (async () => {
        for (const ext of IMAGE_EXTS) {
          const url = `${CLIP_DIR}${who}.${ext}`;
          if (await probe(url, 'img')) { this.files[key] = { url, source: 'file' }; return; }
        }
      })();
    }
    return this.probes[key];
  }

  // Resolve a clip for a line, waiting briefly for the file probe if it hasn't finished.
  async resolve(id) {
    if (this.recorded[id]) return this.recorded[id];
    if (this.files[id]) return this.files[id];
    const p = this._probeVideo(id);
    await Promise.race([p, new Promise((r) => setTimeout(r, 350))]);
    return this.recorded[id] || this.files[id] || null;
  }

  get(id) {
    return this.recorded[id] || this.files[id] || null;
  }

  portrait(who) {
    const k = 'portrait_' + who;
    return this.recorded[k] || this.files[k] || null;
  }

  async save(id, blob) {
    this._setRecorded(id, blob);
    if (this.db) await this._req((s) => s.put(blob, id), 'readwrite');
    this._emit();
  }

  async remove(id) {
    if (this.recorded[id]) URL.revokeObjectURL(this.recorded[id].url);
    delete this.recorded[id];
    if (this.db) await this._req((s) => s.delete(id), 'readwrite');
    this._emit();
  }

  get canStore() {
    return !!this.db;
  }

  onChange(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  _emit() {
    for (const fn of this.listeners) fn();
  }
}
