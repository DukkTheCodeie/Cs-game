import * as THREE from 'three';
import { mulberry32 } from '../core/util.js';

// All textures are painted at runtime on <canvas> — no image files needed.

let maxAniso = 4;
export function setMaxAnisotropy(n) {
  maxAniso = Math.min(8, n || 4);
}

export function makeCanvas(w, h, opts) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return [c, c.getContext('2d', opts)];
}

export function canvasTexture(c, { repeat = [1, 1], srgb = true } = {}) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat[0], repeat[1]);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = maxAniso;
  return t;
}

function grain(ctx, w, h, amount, rnd) {
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (rnd() - 0.5) * amount;
    d[i] += n; d[i + 1] += n; d[i + 2] += n;
  }
  ctx.putImageData(img, 0, 0);
}

const cache = new Map();
function cached(key, fn) {
  if (!cache.has(key)) cache.set(key, fn());
  return cache.get(key);
}

// Clone a cached texture with its own repeat setting.
export function tex(name, repeatX = 1, repeatY = 1) {
  const base = cached(name, () => BUILDERS[name]());
  const t = base.clone();
  t.repeat.set(repeatX, repeatY);
  t.needsUpdate = true;
  return t;
}

const BUILDERS = {
  marble() {
    const S = 512, [c, x] = makeCanvas(S, S), r = mulberry32(7);
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
      const dark = (i + j) % 2 === 1;
      x.fillStyle = dark ? '#2b2f38' : '#ddd6c8';
      x.fillRect(i * 256, j * 256, 256, 256);
      x.strokeStyle = dark ? 'rgba(255,255,255,0.10)' : 'rgba(80,70,60,0.18)';
      for (let k = 0; k < 7; k++) {
        x.lineWidth = 0.6 + r() * 1.6;
        x.beginPath();
        let px = i * 256 + r() * 256, py = j * 256;
        x.moveTo(px, py);
        for (let s = 0; s < 8; s++) {
          px += (r() - 0.5) * 70; py += 32;
          x.lineTo(px, py);
        }
        x.stroke();
      }
    }
    x.strokeStyle = 'rgba(0,0,0,0.5)';
    x.lineWidth = 2;
    for (let i = 0; i <= 2; i++) {
      x.beginPath(); x.moveTo(i * 256, 0); x.lineTo(i * 256, S); x.stroke();
      x.beginPath(); x.moveTo(0, i * 256); x.lineTo(S, i * 256); x.stroke();
    }
    grain(x, S, S, 14, r);
    return canvasTexture(c);
  },
  stone() {
    const S = 512, [c, x] = makeCanvas(S, S), r = mulberry32(3);
    const n = 4, sz = S / n;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      const v = 120 + r() * 30;
      x.fillStyle = `rgb(${v + 12},${v + 6},${v - 6})`;
      x.fillRect(i * sz, j * sz, sz, sz);
      for (let k = 0; k < 30; k++) {
        x.fillStyle = `rgba(${r() > 0.5 ? 255 : 0},${r() > 0.5 ? 240 : 0},200,0.04)`;
        x.beginPath();
        x.arc(i * sz + r() * sz, j * sz + r() * sz, 4 + r() * 16, 0, 7);
        x.fill();
      }
    }
    x.strokeStyle = 'rgba(30,25,20,0.7)';
    x.lineWidth = 3;
    for (let i = 0; i <= n; i++) {
      x.beginPath(); x.moveTo(i * sz, 0); x.lineTo(i * sz, S); x.stroke();
      x.beginPath(); x.moveTo(0, i * sz); x.lineTo(S, i * sz); x.stroke();
    }
    grain(x, S, S, 22, r);
    return canvasTexture(c);
  },
  wood() {
    const S = 512, [c, x] = makeCanvas(S, S), r = mulberry32(11);
    const rows = 8, h = S / rows;
    for (let j = 0; j < rows; j++) {
      let off = r() * S;
      for (let k = -1; k < 2; k++) {
        const v = 70 + r() * 30;
        x.fillStyle = `rgb(${v + 50},${v + 22},${v - 10})`;
        x.fillRect(off + k * S * 0.6 - S * 0.3, j * h, S * 0.6, h);
        x.fillStyle = 'rgba(0,0,0,0.35)';
        x.fillRect(off + k * S * 0.6 - S * 0.3, j * h, 2, h);
      }
      for (let g = 0; g < 14; g++) {
        x.strokeStyle = `rgba(40,20,5,${0.1 + r() * 0.15})`;
        x.lineWidth = 1;
        x.beginPath();
        const y = j * h + r() * h;
        x.moveTo(0, y);
        x.bezierCurveTo(S * 0.3, y + (r() - 0.5) * 8, S * 0.6, y + (r() - 0.5) * 8, S, y);
        x.stroke();
      }
      x.fillStyle = 'rgba(0,0,0,0.5)';
      x.fillRect(0, j * h, S, 2);
    }
    grain(x, S, S, 10, r);
    return canvasTexture(c);
  },
  plaster() {
    const S = 256, [c, x] = makeCanvas(S, S), r = mulberry32(5);
    x.fillStyle = '#ffffff';
    x.fillRect(0, 0, S, S);
    grain(x, S, S, 18, r);
    return canvasTexture(c);
  },
  mosaic() {
    const S = 512, [c, x] = makeCanvas(S, S), r = mulberry32(9);
    x.fillStyle = '#3a2a20';
    x.fillRect(0, 0, S, S);
    const t = 16;
    const pal = ['#c96f3b', '#d9a066', '#e8d3b0', '#8c3b2a', '#e8d3b0', '#e8d3b0', '#5a6e7a'];
    for (let i = 0; i < S / t; i++) for (let j = 0; j < S / t; j++) {
      const cx = i - S / t / 2 + 0.5, cy = j - S / t / 2 + 0.5;
      const ring = Math.floor(Math.max(Math.abs(cx), Math.abs(cy)));
      let col = pal[(ring + (Math.abs(cx) === Math.abs(cy) ? 3 : 0)) % pal.length];
      if (ring > 13) col = (i + j) % 2 ? '#8c3b2a' : '#e8d3b0';
      x.fillStyle = col;
      x.fillRect(i * t + 1 + r() * 1.2, j * t + 1 + r() * 1.2, t - 2.5, t - 2.5);
    }
    grain(x, S, S, 18, r);
    return canvasTexture(c);
  },
  concrete() {
    const S = 512, [c, x] = makeCanvas(S, S), r = mulberry32(13);
    x.fillStyle = '#6d6a64';
    x.fillRect(0, 0, S, S);
    for (let k = 0; k < 400; k++) {
      x.fillStyle = `rgba(${r() > 0.5 ? 255 : 0},${r() > 0.5 ? 255 : 0},${r() > 0.5 ? 255 : 0},0.03)`;
      x.beginPath();
      x.arc(r() * S, r() * S, 2 + r() * 30, 0, 7);
      x.fill();
    }
    x.strokeStyle = 'rgba(20,20,20,0.35)';
    for (let k = 0; k < 5; k++) {
      x.beginPath();
      let px = r() * S, py = r() * S;
      x.moveTo(px, py);
      for (let s = 0; s < 6; s++) { px += (r() - 0.5) * 60; py += (r() - 0.5) * 60; x.lineTo(px, py); }
      x.stroke();
    }
    grain(x, S, S, 30, r);
    return canvasTexture(c);
  },
  shelves() {
    const W = 512, H = 512, [c, x] = makeCanvas(W, H), r = mulberry32(21);
    x.fillStyle = '#1b1612';
    x.fillRect(0, 0, W, H);
    const rows = 4, rh = H / rows;
    const boxCols = ['#a4824f', '#b8955e', '#8f6c3c', '#c4a574', '#9a7a52', '#6b5a48'];
    for (let j = 0; j < rows; j++) {
      let px = 6;
      while (px < W - 20) {
        const bw = 40 + r() * 80, bh = rh * (0.45 + r() * 0.45);
        if (r() < 0.15) { px += bw * 0.6; continue; }
        x.fillStyle = boxCols[Math.floor(r() * boxCols.length)];
        x.fillRect(px, (j + 1) * rh - 10 - bh, bw - 4, bh);
        x.fillStyle = 'rgba(0,0,0,0.25)';
        x.fillRect(px, (j + 1) * rh - 10 - bh, bw - 4, 5);
        if (r() < 0.6) {
          x.fillStyle = '#efe6cf';
          x.fillRect(px + bw * 0.2, (j + 1) * rh - 10 - bh * 0.6, bw * 0.45, 14);
          x.fillStyle = '#333';
          x.font = 'bold 9px monospace';
          x.fillText(['ARCH', 'FOSSIL', 'MISC', '1974', 'DO NOT', 'VASE', 'BONES?'][Math.floor(r() * 7)], px + bw * 0.22, (j + 1) * rh - 10 - bh * 0.6 + 10);
        }
        px += bw;
      }
      x.fillStyle = '#5b5550';
      x.fillRect(0, (j + 1) * rh - 12, W, 12);
      x.fillStyle = 'rgba(255,255,255,0.15)';
      x.fillRect(0, (j + 1) * rh - 12, W, 2);
    }
    x.fillStyle = '#4a4540';
    x.fillRect(0, 0, 10, H);
    x.fillRect(W - 10, 0, 10, H);
    grain(x, W, H, 16, r);
    return canvasTexture(c);
  },
  crate() {
    const S = 256, [c, x] = makeCanvas(S, S), r = mulberry32(17);
    x.fillStyle = '#8a6a40';
    x.fillRect(0, 0, S, S);
    for (let i = 0; i < 6; i++) {
      x.fillStyle = i % 2 ? '#7d5f38' : '#94744a';
      x.fillRect(0, i * (S / 6), S, S / 6 - 2);
    }
    x.strokeStyle = '#4b3820';
    x.lineWidth = 18;
    x.strokeRect(9, 9, S - 18, S - 18);
    x.beginPath(); x.moveTo(9, 9); x.lineTo(S - 9, S - 9); x.stroke();
    x.fillStyle = 'rgba(20,10,0,0.7)';
    x.font = 'bold 26px monospace';
    x.fillText('FRAGILE', 70, 140);
    grain(x, S, S, 20, r);
    return canvasTexture(c);
  },
  carpet() {
    const W = 512, H = 512, [c, x] = makeCanvas(W, H), r = mulberry32(23);
    x.fillStyle = '#6e1420';
    x.fillRect(0, 0, W, H);
    x.fillStyle = '#c9a24a';
    x.fillRect(0, 0, 14, H);
    x.fillRect(W - 14, 0, 14, H);
    x.fillStyle = '#5a0f19';
    x.fillRect(W / 3 - 3, 0, 6, H);
    x.fillRect((2 * W) / 3 - 3, 0, 6, H);
    x.fillStyle = 'rgba(201,162,74,0.35)';
    for (let j = 0; j < 8; j++) for (let i = 0; i < 3; i++) {
      const cx = (i + 0.5) * (W / 3), cy = (j + 0.5) * (H / 8);
      x.beginPath();
      x.moveTo(cx, cy - 14); x.lineTo(cx + 14, cy); x.lineTo(cx, cy + 14); x.lineTo(cx - 14, cy);
      x.closePath();
      x.fill();
    }
    grain(x, W, H, 26, r);
    return canvasTexture(c);
  },
  ceiling() {
    const S = 256, [c, x] = makeCanvas(S, S), r = mulberry32(31);
    x.fillStyle = '#cfcac0';
    x.fillRect(0, 0, S, S);
    x.strokeStyle = '#8d877c';
    x.lineWidth = 4;
    x.strokeRect(0, 0, S, S);
    x.strokeRect(S / 2, 0, 0.1, S);
    x.strokeRect(0, S / 2, S, 0.1);
    grain(x, S, S, 20, r);
    return canvasTexture(c);
  },
  bone() {
    const S = 128, [c, x] = makeCanvas(S, S), r = mulberry32(41);
    x.fillStyle = '#d8ccb0';
    x.fillRect(0, 0, S, S);
    for (let k = 0; k < 60; k++) {
      x.fillStyle = `rgba(${r() > 0.5 ? 120 : 255},${r() > 0.5 ? 100 : 240},80,0.12)`;
      x.fillRect(r() * S, r() * S, 1 + r() * 10, 1 + r() * 3);
    }
    grain(x, S, S, 30, r);
    return canvasTexture(c);
  },
};

// ---------- text / sign textures ----------
export function wrapText(ctx, text, maxW) {
  const words = String(text).split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
    const test = line ? line + ' ' + w : w;
    if (ctx.measureText(test).width > maxW && line) {
      lines.push(line);
      line = w;
    } else line = test;
  }
  if (line) lines.push(line);
  return lines;
}

export function plaqueTexture({ title, body = '', w = 512, h = 320, bg = '#1c1a17', fg = '#e9dfc8', accent = '#c9a24a', titleFont = 'bold 40px Georgia, serif', bodyFont = '22px Georgia, serif', align = 'left' }) {
  const [c, x] = makeCanvas(w, h);
  x.fillStyle = bg;
  x.fillRect(0, 0, w, h);
  x.strokeStyle = accent;
  x.lineWidth = 6;
  x.strokeRect(10, 10, w - 20, h - 20);
  x.fillStyle = accent;
  x.font = titleFont;
  x.textAlign = align;
  const tx = align === 'center' ? w / 2 : 36;
  x.fillText(title, tx, 70);
  x.fillRect(36, 88, w - 72, 2);
  x.fillStyle = fg;
  x.font = bodyFont;
  let y = 128;
  for (const para of String(body).split('\n')) {
    for (const ln of wrapText(x, para, w - 72)) {
      x.fillText(ln, tx, y);
      y += parseInt(bodyFont, 10) * 1.35;
    }
  }
  return canvasTexture(c, { repeat: [1, 1] });
}

// A sticky note somebody stuck on a plaque or a sign, in handwriting (the font shrinks until the note fits).
export function stickyTexture(text, { color = '#ffe66e', ink = '#1d2a6b', font = '"Comic Sans MS", "Chalkboard SE", "Segoe Print", cursive', size = 34 } = {}) {
  const S = 256;
  const [c, x] = makeCanvas(S, S);
  x.fillStyle = color;
  x.fillRect(0, 0, S, S);
  const curl = x.createLinearGradient(0, S * 0.7, 0, S);
  curl.addColorStop(0, 'rgba(0,0,0,0)');
  curl.addColorStop(1, 'rgba(0,0,0,0.13)');
  x.fillStyle = curl;
  x.fillRect(0, 0, S, S);
  x.fillStyle = ink;
  x.textAlign = 'center';
  x.textBaseline = 'middle';
  let sz = size + 2, lines;
  do {
    sz -= 2;
    x.font = `bold ${sz}px ${font}`;
    lines = String(text).split('\n').flatMap((p) => wrapText(x, p, S - 34));
  } while (lines.length * sz * 1.22 > S - 36 && sz > 14);
  const lh = sz * 1.22;
  lines.forEach((ln, i) => x.fillText(ln, S / 2, S / 2 + (i - (lines.length - 1) / 2) * lh));
  return canvasTexture(c);
}

export function signTexture(text, { w = 512, h = 128, bg = '#111', fg = '#fff', font = 'bold 56px Arial Black, Arial, sans-serif', border = null } = {}) {
  const [c, x] = makeCanvas(w, h);
  x.fillStyle = bg;
  x.fillRect(0, 0, w, h);
  if (border) {
    x.strokeStyle = border;
    x.lineWidth = 8;
    x.strokeRect(6, 6, w - 12, h - 12);
  }
  x.fillStyle = fg;
  x.font = font;
  x.textAlign = 'center';
  x.textBaseline = 'middle';
  const lines = String(text).split('\n');
  const lh = h / (lines.length + 0.4);
  const maxW = w - (border ? 36 : 20);
  lines.forEach((ln, i) => {
    // squeeze a line that's too long to fit (instead of cutting it off at the edges)
    const tw = x.measureText(ln).width;
    const sx = tw > maxW ? maxW / tw : 1;
    x.save();
    x.translate(w / 2, h / 2 + (i - (lines.length - 1) / 2) * lh);
    x.scale(sx, 1);
    x.fillText(ln, 0, 0);
    x.restore();
  });
  return canvasTexture(c);
}

export function paintingTexture(seed, kind = 'landscape') {
  const r = mulberry32(seed);
  const w = 256, h = kind === 'portrait' ? 320 : 192;
  const [c, x] = makeCanvas(w, h);
  if (kind === 'portrait') {
    const g = x.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, `hsl(${r() * 60 + 20},30%,25%)`);
    g.addColorStop(1, `hsl(${r() * 60},30%,10%)`);
    x.fillStyle = g;
    x.fillRect(0, 0, w, h);
    x.fillStyle = `hsl(${r() * 360},40%,30%)`;
    x.beginPath(); x.ellipse(w / 2, h * 0.95, w * 0.42, h * 0.38, 0, 0, 7); x.fill();
    x.fillStyle = '#d9b38c';
    x.beginPath(); x.ellipse(w / 2, h * 0.42, w * 0.17, h * 0.16, 0, 0, 7); x.fill();
    x.fillStyle = `hsl(${r() * 40},40%,${10 + r() * 30}%)`;
    x.beginPath(); x.ellipse(w / 2, h * 0.33, w * 0.19, h * 0.1, 0, Math.PI, 0); x.fill();
    x.fillStyle = '#222';
    x.fillRect(w / 2 - 22, h * 0.42, 8, 6);
    x.fillRect(w / 2 + 14, h * 0.42, 8, 6);
    if (r() < 0.5) { x.fillStyle = '#c9a24a'; x.fillRect(w / 2 - 30, h * 0.22, 60, 14); }
  } else {
    const g = x.createLinearGradient(0, 0, 0, h);
    const hue = r() * 360;
    g.addColorStop(0, `hsl(${hue},50%,${50 + r() * 20}%)`);
    g.addColorStop(0.6, `hsl(${hue + 30},50%,70%)`);
    x.fillStyle = g;
    x.fillRect(0, 0, w, h);
    x.fillStyle = `hsl(${r() * 60 + 30},70%,70%)`;
    x.beginPath(); x.arc(w * (0.2 + r() * 0.6), h * 0.3, 18, 0, 7); x.fill();
    for (let l = 0; l < 3; l++) {
      x.fillStyle = `hsl(${100 + r() * 60},${30 + l * 10}%,${35 - l * 9}%)`;
      x.beginPath();
      x.moveTo(0, h);
      for (let px = 0; px <= w; px += 16) x.lineTo(px, h * (0.5 + l * 0.12) + Math.sin(px * 0.03 + r() * 6) * 14 + r() * 10);
      x.lineTo(w, h);
      x.fill();
    }
  }
  for (let k = 0; k < 900; k++) {
    x.fillStyle = `rgba(0,0,0,${r() * 0.08})`;
    x.fillRect(r() * w, r() * h, 3, 3);
  }
  return canvasTexture(c);
}

export function noiseDataURL(size = 128, alpha = 0.12) {
  const [c, x] = makeCanvas(size, size);
  const img = x.createImageData(size, size);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = Math.random() * 255;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
    img.data[i + 3] = alpha * 255;
  }
  x.putImageData(img, 0, 0);
  return c.toDataURL();
}
