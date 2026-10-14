import * as THREE from 'three';
import { makeCanvas, canvasTexture } from './textures.js';
import { mulberry32 } from '../core/util.js';
import { drawGlyph, GLYPH_KEYS } from './glyphs.js';

// Walls, floors and ceilings for the museum. Each surface is painted twice: once in color, and once
// as a height map (light = raised, dark = recessed) that's used as a bump map, so block joints, grout
// and carvings catch the flashlight. Each one is painted for a known size in meters (its `period`),
// which matches the UV scale its walls or floors use, so nothing is stretched.

const cache = new Map();

// { map, bump } for a surface, as fresh clones (so each material can have its own repeat).
export function surface(name) {
  if (!cache.has(name)) cache.set(name, PAINTERS[name]());
  const s = cache.get(name);
  const out = {};
  for (const k of ['map', 'bump']) {
    const t = s[k].clone();
    t.needsUpdate = true;
    out[k] = t;
  }
  return out;
}

function pair(W, H) {
  const [c, x] = makeCanvas(W, H);
  const [hc, h] = makeCanvas(W, H);
  return { c, x, hc, h, W, H };
}

function finish(P, { clampY = false } = {}) {
  const map = canvasTexture(P.c);
  const bump = canvasTexture(P.hc, { srgb: false });
  if (clampY) for (const t of [map, bump]) t.wrapT = THREE.ClampToEdgeWrapping;
  return { map, bump };
}

const gray = (v) => `rgb(${v | 0},${v | 0},${v | 0})`;
const rgb = ([r, g, b], k = 1) => `rgb(${Math.min(255, r * k) | 0},${Math.min(255, g * k) | 0},${Math.min(255, b * k) | 0})`;

function grain(ctx, W, H, amount, r) {
  const img = ctx.getImageData(0, 0, W, H);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (r() - 0.5) * amount;
    d[i] += n; d[i + 1] += n; d[i + 2] += n;
  }
  ctx.putImageData(img, 0, 0);
}

// Draw something at (cx, cy) and again wherever it wraps around an edge, so the texture tiles.
function wrapped(W, H, cx, cy, rad, fn) {
  for (const dx of [-W, 0, W]) for (const dy of [-H, 0, H]) {
    const x = cx + dx, y = cy + dy;
    if (x + rad < 0 || x - rad > W || y + rad < 0 || y - rad > H) continue;
    fn(x, y);
  }
}

// Soft blotches of lighter and darker color: the stuff that makes a flat color look like a material.
function mottle(P, r, n, { rMin = 8, rMax = 60, alpha = 0.06, light = [255, 250, 235], dark = [40, 30, 20], height = 0 } = {}) {
  const { x, h, W, H } = P;
  for (let i = 0; i < n; i++) {
    const cx = r() * W, cy = r() * H, rad = rMin + r() * (rMax - rMin);
    const up = r() > 0.5, a = alpha * (0.4 + r() * 0.6);
    wrapped(W, H, cx, cy, rad, (px, py) => {
      const g = x.createRadialGradient(px, py, 0, px, py, rad);
      const col = up ? light : dark;
      g.addColorStop(0, `rgba(${col[0]},${col[1]},${col[2]},${a})`);
      g.addColorStop(1, `rgba(${col[0]},${col[1]},${col[2]},0)`);
      x.fillStyle = g;
      x.fillRect(px - rad, py - rad, rad * 2, rad * 2);
      if (height) {
        const gh = h.createRadialGradient(px, py, 0, px, py, rad);
        gh.addColorStop(0, `rgba(${up ? 255 : 0},${up ? 255 : 0},${up ? 255 : 0},${height * a * 4})`);
        gh.addColorStop(1, 'rgba(128,128,128,0)');
        h.fillStyle = gh;
        h.fillRect(px - rad, py - rad, rad * 2, rad * 2);
      }
    });
  }
}

// One block (or tile, or slab) with a chamfered edge: lighter on the top-left, darker on the bottom-right.
function block(P, x0, y0, w, hgt, col, tone, hv, { edge = 2, jointH = 40, shade = 0.1 } = {}) {
  const { x, h } = P;
  x.fillStyle = rgb(col, tone);
  x.fillRect(x0, y0, w, hgt);
  x.fillStyle = `rgba(255,255,255,${shade})`;
  x.fillRect(x0, y0, w, Math.max(1, edge * 0.6));
  x.fillRect(x0, y0, Math.max(1, edge * 0.6), hgt);
  x.fillStyle = `rgba(0,0,0,${shade * 1.4})`;
  x.fillRect(x0, y0 + hgt - Math.max(1, edge * 0.6), w, Math.max(1, edge * 0.6));
  x.fillRect(x0 + w - Math.max(1, edge * 0.6), y0, Math.max(1, edge * 0.6), hgt);
  // height: a bevel from the joint up to the face
  for (let k = 0; k <= edge; k++) {
    h.fillStyle = gray(jointH + ((hv - jointH) * (k + 1)) / (edge + 1));
    h.fillRect(x0 + k, y0 + k, w - 2 * k, hgt - 2 * k);
  }
}

// Running-bond blocks: `rows` courses of `cols` blocks, every other course shifted by `offset`.
function bond(P, r, { rows, cols, offset = 0.5, joint, jointCol, jointH = 40, col, vary = 0.06, edge = 2, shade = 0.1, inner = null, widths = null }) {
  const { x, h, W, H } = P;
  x.fillStyle = jointCol;
  x.fillRect(0, 0, W, H);
  h.fillStyle = gray(jointH);
  h.fillRect(0, 0, W, H);
  const rh = H / rows;
  for (let j = 0; j < rows; j++) {
    // block widths for this course (all the same, or random ones that add up to the full width)
    const ws = widths ? widths(j, r) : Array.from({ length: cols }, () => W / cols);
    let px = (j % 2) * offset * (W / cols) + (widths ? r() * W : 0);
    for (const bw of ws) {
      const tone = 1 + (r() - 0.5) * 2 * vary, hv = 150 + (r() - 0.5) * 36, seed = (r() * 1e9) | 0;
      for (const dx of [-W, 0, W]) {
        const bx = px + dx;
        if (bx >= W || bx + bw <= 0) continue;
        block(P, bx + joint / 2, j * rh + joint / 2, bw - joint, rh - joint, col, tone, hv, { edge, jointH, shade });
        if (inner) inner(P, bx + joint / 2, j * rh + joint / 2, bw - joint, rh - joint, mulberry32(seed), hv);
      }
      px += bw;
    }
  }
}

// A little ammonite spiral (fossils turn up in limestone, and this is a natural history museum).
function spiral(ctx, cx, cy, s, color, lw) {
  ctx.strokeStyle = color;
  ctx.lineWidth = lw;
  ctx.beginPath();
  for (let a = 0; a < Math.PI * 6; a += 0.15) {
    const rr = s * 0.08 + (a / (Math.PI * 6)) * s;
    const px = cx + Math.cos(a) * rr, py = cy + Math.sin(a) * rr;
    a ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
  }
  ctx.stroke();
  for (let a = 0.6; a < Math.PI * 6; a += 0.55) {
    const r1 = s * 0.08 + (a / (Math.PI * 6)) * s;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * r1 * 0.75, cy + Math.sin(a) * r1 * 0.75);
    ctx.lineTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1);
    ctx.stroke();
  }
}

function crack(ctx, x0, y0, len, r, color, lw) {
  ctx.strokeStyle = color;
  ctx.lineWidth = lw;
  ctx.beginPath();
  let px = x0, py = y0, a = r() * Math.PI * 2;
  ctx.moveTo(px, py);
  for (let i = 0; i < 8; i++) {
    a += (r() - 0.5) * 1.2;
    px += Math.cos(a) * len / 8;
    py += Math.sin(a) * len / 8;
    ctx.lineTo(px, py);
  }
  ctx.stroke();
}

const PAINTERS = {
  // ---------------------------------------------------------------- walls
  // Lobby: pale cut limestone, 3 m. Six 50 cm courses of 1.5 m blocks, with the odd fossil.
  ashlar() {
    const P = pair(512, 512), r = mulberry32(101);
    bond(P, r, {
      rows: 6, cols: 2, joint: 3, jointCol: '#a29a8b', jointH: 70, col: [226, 219, 204], vary: 0.045, edge: 2, shade: 0.08,
      inner(P, x0, y0, w, hh, rr) {
        if (rr() < 0.22) spiral(P.x, x0 + w * (0.2 + rr() * 0.6), y0 + hh * (0.3 + rr() * 0.4), 6 + rr() * 8, 'rgba(120,105,85,0.35)', 1.2);
        for (let i = 0; i < 40; i++) { P.x.fillStyle = `rgba(110,95,75,${rr() * 0.12})`; P.x.fillRect(x0 + rr() * w, y0 + rr() * hh, 1 + rr() * 2, 1 + rr() * 2); }
      },
    });
    mottle(P, r, 60, { rMin: 10, rMax: 70, alpha: 0.05, height: 0.2 });
    grain(P.x, 512, 512, 8, r);
    grain(P.h, 512, 512, 10, r);
    return finish(P);
  },
  // Security office: painted concrete blocks, 2 m. Ten 20 cm courses of 40 cm blocks.
  cmu() {
    const P = pair(512, 512), r = mulberry32(102);
    bond(P, r, {
      rows: 10, cols: 5, joint: 5, jointCol: '#cbc2ac', jointH: 60, col: [233, 226, 207], vary: 0.02, edge: 3, shade: 0.06,
      inner(P, x0, y0, w, hh, rr) {
        for (let i = 0; i < 70; i++) {
          const px = x0 + 3 + rr() * (w - 6), py = y0 + 3 + rr() * (hh - 6), s = 0.6 + rr() * 1.4;
          P.x.fillStyle = 'rgba(120,110,90,0.18)'; P.x.fillRect(px, py, s, s);
          P.h.fillStyle = gray(110); P.h.fillRect(px, py, s, s);
        }
      },
    });
    mottle(P, r, 30, { rMin: 20, rMax: 80, alpha: 0.03 });
    grain(P.x, 512, 512, 6, r);
    return finish(P);
  },
  // Dinosaur Hall: big rough stone blocks, 3 m. Four 75 cm courses, with fossils pressed into a few.
  rustic() {
    const P = pair(512, 512), r = mulberry32(103);
    bond(P, r, {
      rows: 4, cols: 2, joint: 7, jointCol: '#4f473e', jointH: 30, col: [184, 168, 146], vary: 0.09, edge: 5, shade: 0.12,
      inner(P, x0, y0, w, hh, rr, hv) {
        for (let i = 0; i < 26; i++) {
          const cx = x0 + rr() * w, cy = y0 + rr() * hh, rad = 4 + rr() * 22, up = rr() > 0.5;
          P.x.fillStyle = up ? 'rgba(255,245,225,0.07)' : 'rgba(40,30,20,0.08)';
          P.x.beginPath(); P.x.arc(cx, cy, rad, 0, 7); P.x.fill();
          P.h.fillStyle = up ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)';
          P.h.beginPath(); P.h.arc(cx, cy, rad, 0, 7); P.h.fill();
        }
        if (rr() < 0.3) crack(P.x, x0 + rr() * w, y0 + rr() * hh, 30 + rr() * 50, rr, 'rgba(50,40,30,0.45)', 1.2);
        if (rr() < 0.35) {
          const cx = x0 + w * (0.25 + rr() * 0.5), cy = y0 + hh * (0.3 + rr() * 0.4), s = 10 + rr() * 14;
          spiral(P.x, cx, cy, s, 'rgba(70,55,40,0.45)', 2);
          spiral(P.h, cx, cy, s, gray(hv - 60), 2.5);
        }
      },
    });
    mottle(P, r, 50, { rMin: 15, rMax: 80, alpha: 0.07, height: 0.3 });
    grain(P.x, 512, 512, 14, r);
    grain(P.h, 512, 512, 22, r);
    return finish(P);
  },
  // Egyptian Wing: sandstone blocks, 3 m, some carved with hieroglyphs.
  sandblock() {
    const P = pair(512, 512), r = mulberry32(104);
    bond(P, r, {
      rows: 6, cols: 3, joint: 3, jointCol: '#a37c49', jointH: 60, col: [226, 194, 144], vary: 0.07, edge: 2, shade: 0.09,
      inner(P, x0, y0, w, hh, rr, hv) {
        if (rr() < 0.3) {
          const k = GLYPH_KEYS[Math.floor(rr() * GLYPH_KEYS.length)], s = hh * 0.72, cx = x0 + w / 2, cy = y0 + hh / 2;
          drawGlyph(P.x, k, cx, cy, s, 'rgba(120,85,40,0.45)');
          drawGlyph(P.h, k, cx, cy, s, gray(hv - 70));
        }
        for (let i = 0; i < 30; i++) { P.x.fillStyle = `rgba(120,80,30,${rr() * 0.12})`; P.x.fillRect(x0 + rr() * w, y0 + rr() * hh, 1 + rr() * 3, 1 + rr() * 2); }
      },
    });
    mottle(P, r, 50, { rMin: 10, rMax: 70, alpha: 0.06, light: [255, 235, 190], dark: [110, 70, 30], height: 0.2 });
    grain(P.x, 512, 512, 10, r);
    grain(P.h, 512, 512, 12, r);
    return finish(P);
  },
  // Roman Hall: a Pompeii-style painted wall, 3 m wide by 4.5 m tall (it's clamped above that, where
  // the wall is plain): a dark faux-marble dado, red panels with thin frames and black bands, and a
  // golden frieze with a meander pattern.
  fresco() {
    const W = 512, H = 768, P = pair(W, H), r = mulberry32(105), { x, h } = P;
    const m = H / 4.5, Y = (v) => H - v * m, X = (u) => (u / 3) * W;
    x.fillStyle = '#c99a6e'; x.fillRect(0, 0, W, H);
    h.fillStyle = gray(140); h.fillRect(0, 0, W, H);
    // dado
    x.fillStyle = '#2b1d19'; x.fillRect(0, Y(1.0), W, m * 1.0);
    for (let i = 0; i < 120; i++) {
      const cx = r() * W, cy = Y(1.0) + r() * m, rad = 2 + r() * 10;
      wrapped(W, H, cx, cy, rad, (px, py) => { x.fillStyle = `rgba(${r() > 0.5 ? '200,170,140' : '120,60,50'},${0.15 + r() * 0.2})`; x.beginPath(); x.arc(px, py, rad, 0, 7); x.fill(); });
    }
    x.strokeStyle = 'rgba(230,210,180,0.25)'; x.lineWidth = 1;
    for (let i = 0; i < 6; i++) { x.beginPath(); let px = r() * W, py = Y(1.0); x.moveTo(px, py); for (let k = 0; k < 8; k++) { px += (r() - 0.5) * 40; py += m / 8; x.lineTo(px, py); } x.stroke(); }
    // main zone: red
    x.fillStyle = '#9b2a1d'; x.fillRect(0, Y(3.5), W, m * 2.5);
    // black band with a candelabrum, centered on the tile edge (so it wraps)
    const band = (u) => {
      x.fillStyle = '#1d1514'; x.fillRect(X(u - 0.25), Y(3.5), X(0.5), m * 2.5);
      x.strokeStyle = '#d9a441'; x.lineWidth = 2.5;
      x.beginPath(); x.moveTo(X(u), Y(1.15)); x.lineTo(X(u), Y(3.3)); x.stroke();
      x.fillStyle = '#d9a441';
      for (let v = 1.4; v < 3.3; v += 0.35) {
        for (const s of [-1, 1]) { x.beginPath(); x.ellipse(X(u) + s * 7, Y(v), 6, 2.5, s * 0.6, 0, 7); x.fill(); }
      }
      x.beginPath(); x.arc(X(u), Y(3.3), 6, 0, 7); x.fill();
    };
    band(0); band(3);
    // panel frames: a cream line, then a thin gold one
    x.strokeStyle = '#f0dfbd'; x.lineWidth = 3; x.strokeRect(X(0.38), Y(3.35), X(2.24), m * 2.18);
    x.strokeStyle = '#d9a441'; x.lineWidth = 1.5; x.strokeRect(X(0.46), Y(3.27), X(2.08), m * 2.02);
    // a little laurel wreath floating in the middle of the panel
    const cx = X(1.5), cy = Y(2.3), rw = 26;
    x.strokeStyle = '#e8c97a'; x.lineWidth = 2; x.beginPath(); x.arc(cx, cy, rw, 0.35, Math.PI * 2 - 0.35); x.stroke();
    x.fillStyle = '#c9e09a';
    for (let a = 0.5; a < Math.PI * 2 - 0.4; a += 0.32) { x.beginPath(); x.ellipse(cx + Math.cos(a) * rw, cy + Math.sin(a) * rw, 5, 2.2, a + 0.8, 0, 7); x.fill(); }
    x.fillStyle = '#e8c97a'; x.beginPath(); x.ellipse(cx, cy + rw + 4, 9, 3, 0, 0, 7); x.fill();
    // frieze
    x.fillStyle = '#d6a046'; x.fillRect(0, Y(4.0), W, m * 0.5);
    x.fillStyle = '#3a1712'; x.fillRect(0, Y(4.0), W, 3); x.fillRect(0, Y(3.5) - 3, W, 3);
    x.strokeStyle = '#7a2216'; x.lineWidth = 4; x.lineCap = 'square';
    const step = W / 12, top = Y(3.93), bot = Y(3.57);
    for (let i = 0; i < 12; i++) {
      // greek key: one hook per step
      const x0 = i * step + 4, s = step - 8, hgt = bot - top;
      x.beginPath();
      x.moveTo(x0, bot); x.lineTo(x0, top); x.lineTo(x0 + s, top); x.lineTo(x0 + s, top + hgt * 0.7);
      x.lineTo(x0 + s * 0.35, top + hgt * 0.7); x.lineTo(x0 + s * 0.35, top + hgt * 0.35); x.lineTo(x0 + s * 0.65, top + hgt * 0.35);
      x.stroke();
    }
    mottle(P, r, 90, { rMin: 8, rMax: 60, alpha: 0.06, dark: [60, 20, 10], height: 0.15 });
    grain(x, W, H, 10, r);
    grain(h, W, H, 14, r);
    return finish(P, { clampY: true });
  },

  // ---------------------------------------------------------------- floors
  // Lobby: black and white marble, 4 m (2 m squares), with proper veins.
  marbleFloor() {
    const S = 1024, P = pair(S, S), r = mulberry32(201), { x, h } = P;
    const half = S / 2;
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
      const dark = (i + j) % 2 === 1, x0 = i * half, y0 = j * half;
      const g = x.createLinearGradient(x0, y0, x0 + half, y0 + half);
      g.addColorStop(0, dark ? '#24272e' : '#e9e3d6');
      g.addColorStop(1, dark ? '#2e323a' : '#ddd5c5');
      x.fillStyle = g; x.fillRect(x0, y0, half, half);
      x.save(); x.beginPath(); x.rect(x0, y0, half, half); x.clip();
      // clouds, then veins: a soft wide pass and a thin sharp pass along the same path
      for (let k = 0; k < 14; k++) {
        const cx = x0 + r() * half, cy = y0 + r() * half, rad = 30 + r() * 120;
        const gg = x.createRadialGradient(cx, cy, 0, cx, cy, rad);
        gg.addColorStop(0, dark ? 'rgba(90,95,110,0.18)' : 'rgba(170,160,145,0.16)');
        gg.addColorStop(1, 'rgba(0,0,0,0)');
        x.fillStyle = gg; x.fillRect(cx - rad, cy - rad, rad * 2, rad * 2);
      }
      for (let k = 0; k < 6; k++) {
        const pts = [];
        let px = x0 + r() * half, py = y0 - 10, a = Math.PI / 2 + (r() - 0.5) * 0.9;
        while (py < y0 + half + 10 && pts.length < 40) { pts.push([px, py]); a += (r() - 0.5) * 0.5; px += Math.cos(a) * 26; py += Math.sin(a) * 26; }
        for (const [lw, al] of [[6, 0.06], [1.6, dark ? 0.5 : 0.4], [0.7, dark ? 0.7 : 0.55]]) {
          x.strokeStyle = dark ? `rgba(235,235,240,${al})` : `rgba(95,85,75,${al})`;
          x.lineWidth = lw;
          x.beginPath(); pts.forEach(([a1, b1], n) => (n ? x.lineTo(a1, b1) : x.moveTo(a1, b1))); x.stroke();
        }
        // a branch
        if (pts.length > 8) {
          let [bx, by] = pts[Math.floor(pts.length / 2)], ba = r() * Math.PI;
          x.lineWidth = 0.8;
          x.beginPath(); x.moveTo(bx, by);
          for (let q = 0; q < 8; q++) { ba += (r() - 0.5) * 0.6; bx += Math.cos(ba) * 18; by += Math.sin(ba) * 18; x.lineTo(bx, by); }
          x.stroke();
        }
      }
      x.restore();
    }
    h.fillStyle = gray(200); h.fillRect(0, 0, S, S);
    // grout
    x.fillStyle = 'rgba(20,18,16,0.85)'; h.fillStyle = gray(40);
    for (const v of [0, half, S]) {
      x.fillRect(v - 1.5, 0, 3, S); x.fillRect(0, v - 1.5, S, 3);
      h.fillRect(v - 2, 0, 4, S); h.fillRect(0, v - 2, S, 4);
    }
    grain(x, S, S, 7, r);
    return finish(P);
  },
  // Dinosaur Hall: flagstones of different sizes, 4 m, a few with fossils in them.
  flagstone() {
    const S = 512, P = pair(S, S), r = mulberry32(202);
    const rowsM = [0.9, 1.15, 0.8, 1.15], m = S / 4;
    const { x, h } = P;
    x.fillStyle = '#3a342d'; x.fillRect(0, 0, S, S);
    h.fillStyle = gray(45); h.fillRect(0, 0, S, S);
    let y = 0;
    for (const rm of rowsM) {
      const rh = rm * m;
      // stone lengths (0.7–1.5 m) that add up to exactly 4 m
      const ls = [];
      let left = 4;
      while (left > 1.6) { const l = 0.7 + r() * 0.8; ls.push(l); left -= l; }
      ls.push(left);
      let px = r() * S;
      for (const l of ls) {
        const w = l * m, tone = 0.88 + r() * 0.24, hv = 140 + (r() - 0.5) * 30, seed = (r() * 1e9) | 0;
        const base = r() < 0.5 ? [168, 160, 148] : [158, 152, 144];
        for (const dx of [-S, 0, S]) {
          const bx = px + dx;
          if (bx >= S || bx + w <= 0) continue;
          block(P, bx + 2.5, y + 2.5, w - 5, rh - 5, base, tone, hv, { edge: 3, jointH: 45, shade: 0.1 });
          const rr = mulberry32(seed);
          for (let i = 0; i < 18; i++) {
            const cx = bx + rr() * w, cy = y + rr() * rh, rad = 3 + rr() * 16;
            x.fillStyle = rr() > 0.5 ? 'rgba(255,250,240,0.06)' : 'rgba(30,25,20,0.07)';
            x.beginPath(); x.arc(cx, cy, rad, 0, 7); x.fill();
          }
          if (rr() < 0.2) {
            const cx = bx + w * (0.3 + rr() * 0.4), cy = y + rh * (0.3 + rr() * 0.4), s = 8 + rr() * 10;
            spiral(x, cx, cy, s, 'rgba(60,50,40,0.4)', 1.6);
            spiral(h, cx, cy, s, gray(hv - 50), 2);
          }
          if (rr() < 0.25) crack(x, bx + rr() * w, y + rr() * rh, 20 + rr() * 40, rr, 'rgba(40,34,28,0.5)', 1);
        }
        px += w;
      }
      y += rh;
    }
    grain(x, S, S, 12, r);
    grain(h, S, S, 16, r);
    return finish(P);
  },
  // Roman Hall: the same mosaic as before, now with grout you can feel.
  mosaic() {
    const S = 512, P = pair(S, S), r = mulberry32(9), { x, h } = P;
    x.fillStyle = '#3a2a20'; x.fillRect(0, 0, S, S);
    h.fillStyle = gray(50); h.fillRect(0, 0, S, S);
    const t = 16;
    const pal = ['#c96f3b', '#d9a066', '#e8d3b0', '#8c3b2a', '#e8d3b0', '#e8d3b0', '#5a6e7a'];
    for (let i = 0; i < S / t; i++) for (let j = 0; j < S / t; j++) {
      const cx = i - S / t / 2 + 0.5, cy = j - S / t / 2 + 0.5;
      const ring = Math.floor(Math.max(Math.abs(cx), Math.abs(cy)));
      let col = pal[(ring + (Math.abs(cx) === Math.abs(cy) ? 3 : 0)) % pal.length];
      if (ring > 13) col = (i + j) % 2 ? '#8c3b2a' : '#e8d3b0';
      const ox = 1 + r() * 1.2, oy = 1 + r() * 1.2;
      x.fillStyle = col;
      x.fillRect(i * t + ox, j * t + oy, t - 2.5, t - 2.5);
      h.fillStyle = gray(150 + (r() - 0.5) * 40);
      h.fillRect(i * t + ox + 0.5, j * t + oy + 0.5, t - 3.5, t - 3.5);
    }
    grain(x, S, S, 18, r);
    return finish(P);
  },
  // Security office: wooden boards, 3 m.
  planks() {
    const S = 512, P = pair(S, S), r = mulberry32(203), { x, h } = P;
    const rows = 8, rh = S / rows;
    h.fillStyle = gray(150); h.fillRect(0, 0, S, S);
    for (let j = 0; j < rows; j++) {
      // boards of different lengths that cover the row exactly, wrapping around the edge
      let px = r() * S, covered = 0;
      while (covered < S) {
        const len = Math.min(S - covered, S * (0.35 + r() * 0.45)), v = 70 + r() * 30;
        for (const dx of [-S, 0]) {
          const x0 = px + dx;
          if (x0 >= S || x0 + len <= 0) continue;
          x.fillStyle = `rgb(${v + 52},${v + 24},${v - 8})`;
          x.fillRect(x0, j * rh, len, rh);
          x.fillStyle = 'rgba(0,0,0,0.4)'; x.fillRect(x0, j * rh, 2, rh);
          h.fillStyle = gray(60); h.fillRect(x0, j * rh, 2, rh);
        }
        px = (px + len) % S;
        covered += len;
      }
      for (let g = 0; g < 16; g++) {
        x.strokeStyle = `rgba(40,20,5,${0.08 + r() * 0.15})`;
        x.lineWidth = 1;
        x.beginPath();
        const yy = j * rh + r() * rh;
        x.moveTo(0, yy);
        x.bezierCurveTo(S * 0.3, yy + (r() - 0.5) * 8, S * 0.6, yy + (r() - 0.5) * 8, S, yy);
        x.stroke();
      }
      // a knot or two
      for (let q = 0; q < 2; q++) if (r() < 0.6) {
        const kx = r() * S, ky = j * rh + 8 + r() * (rh - 16);
        x.fillStyle = 'rgba(60,30,10,0.5)'; x.beginPath(); x.ellipse(kx, ky, 7, 3, 0, 0, 7); x.fill();
        x.strokeStyle = 'rgba(60,30,10,0.3)'; x.beginPath(); x.ellipse(kx, ky, 13, 5, 0, 0, 7); x.stroke();
      }
      x.fillStyle = 'rgba(0,0,0,0.5)'; x.fillRect(0, j * rh, S, 2);
      h.fillStyle = gray(50); h.fillRect(0, j * rh, S, 2);
    }
    grain(x, S, S, 10, r);
    return finish(P);
  },
  // Egyptian Wing: sandstone slabs, 3 m, with sand in the cracks.
  sandslab() {
    const S = 512, P = pair(S, S), r = mulberry32(204);
    bond(P, r, {
      rows: 4, cols: 3, offset: 0.33, joint: 4, jointCol: '#c3a06b', jointH: 70, col: [214, 186, 140], vary: 0.07, edge: 3, shade: 0.08,
      inner(P, x0, y0, w, hh, rr) {
        for (let i = 0; i < 20; i++) {
          const cx = x0 + rr() * w, cy = y0 + rr() * hh, rad = 4 + rr() * 18;
          P.x.fillStyle = rr() > 0.5 ? 'rgba(255,240,210,0.07)' : 'rgba(110,80,40,0.07)';
          P.x.beginPath(); P.x.arc(cx, cy, rad, 0, 7); P.x.fill();
        }
        if (rr() < 0.25) crack(P.x, x0 + rr() * w, y0 + rr() * hh, 25 + rr() * 40, rr, 'rgba(110,80,40,0.45)', 1.2);
      },
    });
    // drifts of sand
    mottle(P, r, 24, { rMin: 20, rMax: 90, alpha: 0.12, light: [236, 214, 170], dark: [150, 115, 70] });
    grain(P.x, S, S, 12, r);
    grain(P.h, S, S, 14, r);
    return finish(P);
  },

  // Archives: poured concrete, 3 m, with saw-cut joints every 1.5 m, stains and scuffs.
  slab() {
    const S = 512, P = pair(S, S), r = mulberry32(205), { x, h } = P;
    const half = S / 2;
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
      const v = 112 + (r() - 0.5) * 16;
      x.fillStyle = `rgb(${v + 4},${v + 2},${v - 2})`;
      x.fillRect(i * half, j * half, half, half);
    }
    h.fillStyle = gray(150); h.fillRect(0, 0, S, S);
    mottle(P, r, 70, { rMin: 10, rMax: 90, alpha: 0.08, light: [200, 196, 188], dark: [40, 38, 34] });
    // water stains: darker rings
    for (let k = 0; k < 5; k++) {
      const cx = r() * S, cy = r() * S, rad = 20 + r() * 60;
      wrapped(S, S, cx, cy, rad + 4, (px, py) => {
        x.strokeStyle = 'rgba(50,46,40,0.14)'; x.lineWidth = 3;
        x.beginPath(); x.ellipse(px, py, rad, rad * (0.6 + r() * 0.4), r() * 3, 0, 7); x.stroke();
      });
    }
    // scuffs from carts and boots
    for (let k = 0; k < 40; k++) {
      const cx = r() * S, cy = r() * S, a = r() * Math.PI, l = 8 + r() * 30;
      x.strokeStyle = `rgba(30,28,26,${0.08 + r() * 0.12})`; x.lineWidth = 1 + r() * 2;
      x.beginPath(); x.moveTo(cx, cy); x.lineTo(cx + Math.cos(a) * l, cy + Math.sin(a) * l); x.stroke();
    }
    for (let k = 0; k < 4; k++) crack(x, r() * S, r() * S, 40 + r() * 60, r, 'rgba(35,32,28,0.5)', 1);
    // saw-cut joints
    x.fillStyle = 'rgba(25,24,22,0.8)'; h.fillStyle = gray(40);
    for (const v of [0, half, S]) {
      x.fillRect(v - 1.5, 0, 3, S); x.fillRect(0, v - 1.5, S, 3);
      h.fillRect(v - 2, 0, 4, S); h.fillRect(0, v - 2, S, 4);
    }
    grain(x, S, S, 16, r);
    grain(h, S, S, 20, r);
    return finish(P);
  },

  // ---------------------------------------------------------------- ceilings
  // Coffered ceiling, 4 m (2 m coffers) with a little gilded rosette in each.
  coffer() {
    const S = 512, P = pair(S, S), r = mulberry32(301), { x, h } = P;
    const c = S / 2, beam = 34;
    x.fillStyle = '#e2d9c6'; x.fillRect(0, 0, S, S);
    h.fillStyle = gray(230); h.fillRect(0, 0, S, S);
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
      const x0 = i * c + beam / 2, y0 = j * c + beam / 2, w = c - beam;
      const steps = [[0, '#cfc5b0', 190], [14, '#bfb49d', 150], [26, '#a99d85', 110]];
      for (const [ins, col, hv] of steps) {
        x.fillStyle = col; x.fillRect(x0 + ins, y0 + ins, w - ins * 2, w - ins * 2);
        h.fillStyle = gray(hv); h.fillRect(x0 + ins, y0 + ins, w - ins * 2, w - ins * 2);
      }
      // shadow under the beam edge
      x.fillStyle = 'rgba(0,0,0,0.12)'; x.fillRect(x0, y0, w, 5); x.fillRect(x0, y0, 5, w);
      const cx = x0 + w / 2, cy = y0 + w / 2;
      x.fillStyle = '#c9a24a';
      for (let k = 0; k < 8; k++) { const a = (k / 8) * Math.PI * 2; x.beginPath(); x.ellipse(cx + Math.cos(a) * 12, cy + Math.sin(a) * 12, 9, 4, a, 0, 7); x.fill(); }
      x.fillStyle = '#e8c97a'; x.beginPath(); x.arc(cx, cy, 7, 0, 7); x.fill();
      h.fillStyle = gray(170); h.beginPath(); h.arc(cx, cy, 20, 0, 7); h.fill();
    }
    grain(x, S, S, 8, r);
    return finish(P);
  },
  // Egyptian tomb ceiling: deep blue with golden stars, 3 m.
  stars() {
    const S = 512, P = pair(S, S), r = mulberry32(302), { x, h } = P;
    x.fillStyle = '#1b2c66'; x.fillRect(0, 0, S, S);
    h.fillStyle = gray(140); h.fillRect(0, 0, S, S);
    mottle(P, r, 40, { rMin: 20, rMax: 90, alpha: 0.1, light: [80, 110, 190], dark: [5, 10, 40] });
    const star = (cx, cy, rad) => {
      x.fillStyle = '#e8c35a';
      x.beginPath();
      for (let k = 0; k < 10; k++) {
        const a = -Math.PI / 2 + (k * Math.PI) / 5, rr = k % 2 ? rad * 0.42 : rad;
        k ? x.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr) : x.moveTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr);
      }
      x.fill();
    };
    const n = 4, step = S / n;
    for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
      wrapped(S, S, ((i + 0.5 + (j % 2) * 0.5) * step) % S, (j + 0.5) * step, 18, (px, py) => star(px, py, 16));
    }
    grain(x, S, S, 10, r);
    return finish(P);
  },
};
