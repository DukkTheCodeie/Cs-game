import { CONFIG } from '../config.js';
import { VERSION } from '../version.js';

// Counts plays, anonymously: no cookies, no names, nothing personal. Each event is just a page name
// (like "/play" or "/chapter/egypt") plus the kind of device it was played on. It goes to your free
// GoatCounter dashboard, which shows how many people played and on what (phone/computer, iPhone/
// Windows/..., Chrome/Safari/..., screen size). It's OFF until you put your GoatCounter code in
// game-config.js (see the README).

const sent = new Set();

// What someone is playing on, in plain words.
export function deviceInfo() {
  const ua = navigator.userAgent;
  const touch = navigator.maxTouchPoints > 1;
  const os = /iPhone|iPod/.test(ua) ? 'iPhone' : /iPad/.test(ua) || (/Macintosh/.test(ua) && touch) ? 'iPad'
    : /Android/.test(ua) ? 'Android' : /CrOS/.test(ua) ? 'Chromebook' : /Windows/.test(ua) ? 'Windows'
      : /Mac OS X/.test(ua) ? 'Mac' : /Linux/.test(ua) ? 'Linux' : 'other';
  const browser = /Edg\//.test(ua) ? 'Edge' : /OPR\//.test(ua) ? 'Opera' : /SamsungBrowser/.test(ua) ? 'Samsung'
    : /CriOS|Chrome\//.test(ua) ? 'Chrome' : /FxiOS|Firefox\//.test(ua) ? 'Firefox' : /Safari\//.test(ua) ? 'Safari' : 'other';
  const type = os === 'iPhone' || /Android.+Mobile/.test(ua) ? 'phone' : os === 'iPad' || os === 'Android' ? 'tablet' : 'computer';
  return { type, os, browser };
}

// Log an event once per visit (e.g. "play", "chapter/dino", "finished").
export function logEvent(name, { once = true } = {}) {
  const code = String(CONFIG.analytics || '').trim();
  if (!code || (once && sent.has(name))) return;
  sent.add(name);
  try {
    if (/^(localhost|127\.|0\.0\.0\.0)/.test(location.hostname)) return; // not while testing locally
    const d = deviceInfo();
    const base = /^https?:\/\//.test(code) ? code.replace(/\/+$/, '') : `https://${code}.goatcounter.com`;
    const q = new URLSearchParams({
      p: '/' + name,
      t: `${name} · ${d.type} · ${d.os} · ${d.browser} · ${VERSION}`,
      e: 'true',
      s: `${screen.width},${screen.height},${devicePixelRatio || 1}`,
      rnd: Math.random().toString(36).slice(2),
    });
    const url = `${base}/count?${q}`;
    if (!(navigator.sendBeacon && navigator.sendBeacon(url))) new Image().src = url;
  } catch (_) { /* counting must never break the game */ }
}
