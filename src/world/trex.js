import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { damp, mulberry32 } from '../core/util.js';
import { batchJoints } from './batch.js';
import { makeCanvas, canvasTexture } from './textures.js';

// A fully procedural, animated T-Rex skeleton: a museum fossil mount that comes alive at night.
// Local space: +z = forward (head), y = up, feet on y = 0.
//
// Every bone is generated here: the skull and jaws are rounded bone plates cut from real side
// profiles (with the openings a T. rex skull has), bent so the skull is narrow at the snout and wide
// at the back; limbs, ribs and the tail are lofted tubes. Colours ("fossil" staining, darker joints)
// are baked into vertex colours, and all static pieces are merged into one mesh per moving joint and
// material, built once and shared by every T-Rex in the game.

const TAU = Math.PI * 2;
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const lerp = (a, b, t) => a + (b - a) * t;
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

// ---------------------------------------------------------------- layout (shared with trexMount)
const HIP_Y = 3.42; // body origin height (≈ hip sockets)
const FEMUR = 1.5, TIBIA = 1.4, META = 0.78, BALL = 0.09; // BALL: height of the ball of the foot when standing
const HIP_X = 0.38, HIP_Z = 0.1;
const SHOULDER = [0.47, -0.22, 2.74];
const HEAD_AT = [0, 1.74, 3.64];
const TAIL_BASE = [0, 0.2, -0.7];
const TAIL_N = 14;
const tailLen = (i) => 0.5 * (1 - i * 0.03);
const TAIL_RX = (i) => (i < 4 ? 0.028 : -0.012); // rest pitch per tail joint (rises, then levels out)
const STANCE = { 1: { z: 0.72, a3: -0.42 }, '-1': { z: -0.62, a3: 0.12 } }; // museum stride: right foot forward

// height of the backbone (centrum centres) along the body
const spineY = (z) => 0.18 + 0.15 * sstep(1.2, 3.0, z) + 0.03 * Math.sin(clamp((z - 0.7) / 2.3, 0, 1) * Math.PI);

// ---------------------------------------------------------------- noise
function hash(x, y, z) {
  let h = Math.imul(x | 0, 0x27d4eb2d) ^ Math.imul(y | 0, 0x165667b1) ^ Math.imul(z | 0, 0x1b873593);
  h = Math.imul(h ^ (h >>> 15), 0x85ebca6b);
  h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}
function noise3(x, y, z) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
  const fx = x - xi, fy = y - yi, fz = z - zi;
  const u = fx * fx * (3 - 2 * fx), v = fy * fy * (3 - 2 * fy), w = fz * fz * (3 - 2 * fz);
  const a = lerp(lerp(hash(xi, yi, zi), hash(xi + 1, yi, zi), u), lerp(hash(xi, yi + 1, zi), hash(xi + 1, yi + 1, zi), u), v);
  const b = lerp(lerp(hash(xi, yi, zi + 1), hash(xi + 1, yi, zi + 1), u), lerp(hash(xi, yi + 1, zi + 1), hash(xi + 1, yi + 1, zi + 1), u), v);
  return lerp(a, b, w);
}
const fbm3 = (x, y, z) => noise3(x, y, z) * 0.55 + noise3(x * 2.03 + 17.1, y * 2.03, z * 2.03) * 0.3 + noise3(x * 4.1, y * 4.1 + 31.7, z * 4.1) * 0.15;

// tileable value noise for the canvas textures
function tileNoise(S, cells, seed) {
  const out = new Float32Array(S * S);
  for (let y = 0; y < S; y++) {
    const fy = (y / S) * cells, y0 = Math.floor(fy), ty = fy - y0, sy = ty * ty * (3 - 2 * ty);
    const ya = y0 % cells, yb = (y0 + 1) % cells;
    for (let x = 0; x < S; x++) {
      const fx = (x / S) * cells, x0 = Math.floor(fx), tx = fx - x0, sx = tx * tx * (3 - 2 * tx);
      const xa = x0 % cells, xb = (x0 + 1) % cells;
      out[y * S + x] = lerp(lerp(hash(xa, ya, seed), hash(xb, ya, seed), sx), lerp(hash(xa, yb, seed), hash(xb, yb, seed), sx), sy);
    }
  }
  return out;
}

// Aged fossil surface: a near-white detail map (the colour lives in the vertex colours) plus a bump map
// with pores and hairline cracks, so the bones read as bone under the flashlight.
function boneTextures() {
  const S = 256;
  const n1 = tileNoise(S, 4, 11), n2 = tileNoise(S, 8, 12), n3 = tileNoise(S, 16, 13), n4 = tileNoise(S, 32, 14), n5 = tileNoise(S, 64, 15);
  const [c1, x1] = makeCanvas(S, S), [c2, x2] = makeCanvas(S, S);
  const im1 = x1.createImageData(S, S), im2 = x2.createImageData(S, S);
  for (let i = 0; i < S * S; i++) {
    const m = n1[i] * 0.45 + n2[i] * 0.3 + n3[i] * 0.25;
    const g = n4[i] * 0.5 + n5[i] * 0.5;
    const pore = n5[i] > 0.8 ? (n5[i] - 0.8) * 5 : 0;
    const v = (0.86 + 0.14 * m + (g - 0.5) * 0.09) * (1 - pore * 0.18);
    im1.data[i * 4] = 255 * clamp(v, 0, 1);
    im1.data[i * 4 + 1] = 255 * clamp(v * (0.975 + 0.025 * n2[i]), 0, 1);
    im1.data[i * 4 + 2] = 255 * clamp(v * (0.93 + 0.07 * n3[i]), 0, 1);
    im1.data[i * 4 + 3] = 255;
    const h = 0.55 + (n3[i] - 0.5) * 0.3 + (g - 0.5) * 0.35 - pore * 0.35;
    im2.data[i * 4] = im2.data[i * 4 + 1] = im2.data[i * 4 + 2] = 255 * clamp(h, 0, 1);
    im2.data[i * 4 + 3] = 255;
  }
  x1.putImageData(im1, 0, 0);
  x2.putImageData(im2, 0, 0);
  // hairline cracks, drawn wrapped so the tile stays seamless
  const rnd = mulberry32(77);
  for (let k = 0; k < 16; k++) {
    let px = rnd() * S, py = rnd() * S, ang = rnd() * TAU;
    const pts = [[px, py]];
    const n = 5 + Math.floor(rnd() * 9);
    for (let s = 0; s < n; s++) { ang += (rnd() - 0.5) * 1.1; px += Math.cos(ang) * 6; py += Math.sin(ang) * 6; pts.push([px, py]); }
    for (const [ctx, col, w] of [[x1, 'rgba(95,62,36,0.32)', 0.9], [x2, 'rgba(0,0,0,0.55)', 1.3]]) {
      ctx.strokeStyle = col;
      ctx.lineWidth = w;
      for (const ox of [-S, 0, S]) for (const oy of [-S, 0, S]) {
        ctx.beginPath();
        pts.forEach(([a, b], i) => (i ? ctx.lineTo(a + ox, b + oy) : ctx.moveTo(a + ox, b + oy)));
        ctx.stroke();
      }
    }
  }
  return { map: canvasTexture(c1), bump: canvasTexture(c2, { srgb: false }) };
}

let MATS = null;
export function trexMats() {
  if (MATS) return MATS;
  const { map, bump } = boneTextures();
  MATS = {
    bone: new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, map, bumpMap: bump, bumpScale: 1.6, roughness: 0.58, metalness: 0 }),
    dark: new THREE.MeshStandardMaterial({ color: 0x15100c, roughness: 1 }),
    tooth: new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: 0.32, metalness: 0 }),
    eye: new THREE.MeshStandardMaterial({ color: 0xff3010, emissive: 0xff2a00, emissiveIntensity: 5 }),
  };
  return MATS;
}

// ---------------------------------------------------------------- colours
const srgb = (r, g, b) => new THREE.Color().setRGB(r / 255, g / 255, b / 255, THREE.SRGBColorSpace);
const COL = {
  ivory: srgb(230, 214, 180),
  tan: srgb(198, 168, 122),
  stain: srgb(118, 86, 54),
  root: srgb(132, 98, 60),
  tooth: srgb(212, 190, 146),
  tip: srgb(238, 226, 198),
};
const _c = new THREE.Color();

// Bake vertex colours. Bone: ivory → tan mottling with brown mineral stains (noise in joint space, so
// no two bones look alike), times the part's own shading ('ao' attribute: darker joints and insides).
// Teeth: 'ao' runs 0 (root) → 1 (tip): brown root, ivory crown, pale tip.
function colorize(g, kind, seed, shade) {
  const p = g.attributes.position, ao = g.attributes.ao, n = p.count;
  const col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const a = ao ? ao.getX(i) : 1;
    if (kind === 'tooth') {
      _c.copy(COL.root).lerp(COL.tooth, sstep(0.02, 0.4, a)).lerp(COL.tip, sstep(0.6, 1, a));
      _c.multiplyScalar(shade);
    } else {
      const m = fbm3(x * 1.25 + seed * 3.1, y * 1.25 + seed, z * 1.25 - seed * 1.7);
      const st = noise3(x * 4.3 - seed, y * 4.3 + 7.3, z * 4.3 + seed * 2.3);
      _c.copy(COL.ivory).lerp(COL.tan, clamp(m * 1.25 - 0.2, 0, 1));
      _c.lerp(COL.stain, sstep(0.56, 0.86, m) * 0.5 + sstep(0.64, 0.92, st) * 0.32);
      _c.multiplyScalar(a * shade);
    }
    col[i * 3] = _c.r;
    col[i * 3 + 1] = _c.g;
    col[i * 3 + 2] = _c.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.deleteAttribute('ao');
}

// ---------------------------------------------------------------- 2D outlines
const V2 = (a, b) => new THREE.Vector2(a, b);
// smooth closed outline through [[a, b], ...], resampled to n evenly spaced points
function loop(pts, n) {
  const c = new THREE.CatmullRomCurve3(pts.map(([a, b]) => new THREE.Vector3(a, b, 0)), true, 'centripetal');
  return c.getSpacedPoints(n).slice(0, n).map((p) => V2(p.x, p.y));
}
function ellipse(ca, cb, ra, rb, rot = 0, n = 14) {
  const cs = Math.cos(rot), sn = Math.sin(rot), out = [];
  for (let i = 0; i < n; i++) {
    const t = (i / n) * TAU, x = Math.cos(t) * ra, y = Math.sin(t) * rb;
    out.push(V2(ca + x * cs - y * sn, cb + x * sn + y * cs));
  }
  return out;
}
function perimeter(pts) {
  let s = 0;
  for (let i = 0; i < pts.length; i++) s += Math.hypot(pts[(i + 1) % pts.length][0] - pts[i][0], pts[(i + 1) % pts.length][1] - pts[i][1]);
  return s;
}
const outline = (pts, spacing) => loop(pts, Math.max(8, Math.round(perimeter(pts) / spacing)));

// 1D Catmull-Rom through a table
function curve1(xs, ys) {
  const n = xs.length;
  return (x) => {
    if (x <= xs[0]) return ys[0];
    if (x >= xs[n - 1]) return ys[n - 1];
    let i = 0;
    while (x > xs[i + 1]) i++;
    const t = (x - xs[i]) / (xs[i + 1] - xs[i]);
    const y0 = ys[Math.max(0, i - 1)], y1 = ys[i], y2 = ys[i + 1], y3 = ys[Math.min(n - 1, i + 2)];
    return 0.5 * (2 * y1 + (y2 - y0) * t + (2 * y0 - 5 * y1 + 4 * y2 - y3) * t * t + (3 * y1 - y0 - 3 * y2 + y3) * t * t * t);
  };
}

function insidePoly(poly, p) {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[i], b = poly[j];
    if ((a.y > p.y) !== (b.y > p.y) && p.x < ((b.x - a.x) * (p.y - a.y)) / (b.y - a.y) + a.x) c = !c;
  }
  return c;
}
function distSegs(polys, p) {
  let best = Infinity;
  for (const poly of polys) {
    for (let i = 0; i < poly.length; i++) {
      const a = poly[i], b = poly[(i + 1) % poly.length];
      const dx = b.x - a.x, dy = b.y - a.y, l2 = dx * dx + dy * dy || 1e-9;
      const t = clamp(((p.x - a.x) * dx + (p.y - a.y) * dy) / l2, 0, 1);
      best = Math.min(best, Math.hypot(p.x - a.x - dx * t, p.y - a.y - dy * t));
    }
  }
  return best;
}
// per-vertex offset (toward the material) for a closed contour: outer CCW / holes CW → left normal
function offsets(c) {
  const n = c.length, out = [];
  for (let i = 0; i < n; i++) {
    const p0 = c[(i - 1 + n) % n], p1 = c[i], p2 = c[(i + 1) % n];
    let ax = p1.x - p0.x, ay = p1.y - p0.y, l = Math.hypot(ax, ay) || 1;
    ax /= l; ay /= l;
    let bx = p2.x - p1.x, by = p2.y - p1.y;
    l = Math.hypot(bx, by) || 1;
    bx /= l; by /= l;
    let mx = -ay - by, my = ax + bx;
    l = Math.hypot(mx, my);
    if (l < 1e-6) { mx = -ay; my = ax; l = 1; }
    mx /= l; my /= l;
    const k = 1 / Math.max(0.4, mx * -ay + my * ax);
    out.push(V2(mx * k, my * k));
  }
  return out;
}

// Delaunay triangulation (Bowyer-Watson) of 2D points; returns index triples. Only used at build time,
// on a few hundred points per bone plate.
function delaunay(pts) {
  const n = pts.length, X = new Float64Array(n + 3), Y = new Float64Array(n + 3);
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (let i = 0; i < n; i++) {
    X[i] = pts[i].x; Y[i] = pts[i].y;
    x0 = Math.min(x0, X[i]); x1 = Math.max(x1, X[i]); y0 = Math.min(y0, Y[i]); y1 = Math.max(y1, Y[i]);
  }
  const d = Math.max(x1 - x0, y1 - y0) * 20, mx = (x0 + x1) / 2, my = (y0 + y1) / 2;
  X[n] = mx - d; Y[n] = my - d; X[n + 1] = mx; Y[n + 1] = my + d; X[n + 2] = mx + d; Y[n + 2] = my - d;
  const tri = (a, b, c) => {
    const ax = X[a], ay = Y[a], bx = X[b], by = Y[b], cx = X[c], cy = Y[c];
    const dd = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
    if (Math.abs(dd) < 1e-12) return { a, b, c, x: 0, y: 0, r2: Infinity };
    const a2 = ax * ax + ay * ay, b2 = bx * bx + by * by, c2 = cx * cx + cy * cy;
    const ux = (a2 * (by - cy) + b2 * (cy - ay) + c2 * (ay - by)) / dd, uy = (a2 * (cx - bx) + b2 * (ax - cx) + c2 * (bx - ax)) / dd;
    return { a, b, c, x: ux, y: uy, r2: (ax - ux) ** 2 + (ay - uy) ** 2 };
  };
  let tris = [tri(n, n + 1, n + 2)];
  const edges = new Map(), M3 = n + 3;
  for (let i = 0; i < n; i++) {
    const px = X[i], py = Y[i], keep = [];
    edges.clear();
    const edge = (u, v) => { const k = u < v ? u * M3 + v : v * M3 + u; const e = edges.get(k); if (e) e[2]++; else edges.set(k, [u, v, 1]); };
    for (const t of tris) {
      if ((px - t.x) ** 2 + (py - t.y) ** 2 < t.r2) { edge(t.a, t.b); edge(t.b, t.c); edge(t.c, t.a); }
      else keep.push(t);
    }
    for (const [u, v, c] of edges.values()) if (c === 1) keep.push(tri(u, v, i));
    tris = keep;
  }
  return tris.filter((t) => t.a < n && t.b < n && t.c < n).map((t) => [t.a, t.b, t.c]);
}

// ---------------------------------------------------------------- geometry generators
// Every generator returns an indexed geometry with position, normal, uv and a temporary 'ao'.
function finish(pos, uv, ao, idx, normals = null) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setAttribute('ao', new THREE.Float32BufferAttribute(ao, 1));
  g.setIndex(idx);
  if (normals) g.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  else g.computeVertexNormals();
  return g;
}

// A rounded bone plate: a 2D outline (+ holes) in the (z, y) plane, `thick` along x, with rounded rims
// and evenly tessellated faces (so it can be bent smoothly by `bend(v)`, which may move any coordinate).
function slab(outer, holes = [], o = {}) {
  const T = o.thick ?? 0.08, s = o.inset ?? 0.018, d = Math.min(o.depth ?? 0.03, T / 2), segs = o.segs ?? 2, grid = o.grid ?? 0.06;
  const C = [THREE.ShapeUtils.isClockWise(outer) ? outer.slice().reverse() : outer, ...holes.map((h) => (THREE.ShapeUtils.isClockWise(h) ? h : h.slice().reverse()))];
  const OFF = C.map(offsets);
  const prof = [];
  for (let k = 0; k <= segs; k++) {
    const th = (k / segs) * Math.PI / 2;
    prof.push([s * (1 - Math.sin(th)), T / 2 - d + d * Math.cos(th)]);
  }
  const rings = prof.slice();
  for (let k = segs; k >= 0; k--) {
    if (k === segs && T / 2 - d < 1e-4) continue;
    rings.push([prof[k][0], -prof[k][1]]);
  }
  const R = rings.length;
  const inner = o.innerShade ?? 1, rim = o.rimShade ?? 1;
  const pos = [], ao = [], idx = [], base = [];
  C.forEach((c, ci) => {
    base.push(pos.length / 3);
    rings.forEach(([ins, x], r) => {
      const onRim = r > 0 && r < R - 1;
      for (let i = 0; i < c.length; i++) {
        pos.push(x, c[i].y + OFF[ci][i].y * ins, c[i].x + OFF[ci][i].x * ins);
        ao.push(lerp(inner, 1, (x + T / 2) / T) * (onRim ? rim : 1));
      }
    });
  });
  C.forEach((c, ci) => {
    const n = c.length, b0 = base[ci];
    for (let r = 0; r < R - 1; r++) for (let i = 0; i < n; i++) {
      const i2 = (i + 1) % n;
      const A = b0 + r * n + i, B = b0 + r * n + i2, Cc = b0 + (r + 1) * n + i2, D = b0 + (r + 1) * n + i;
      idx.push(A, B, Cc, A, Cc, D);
    }
  });
  // faces: the inset outline + an even (hexagonal, jittered) grid of interior points, Delaunay-
  // triangulated so the faces bend smoothly (earcut would join them with long slivers that crease)
  const cap = C.map((c, ci) => c.map((p, i) => V2(p.x + OFF[ci][i].x * s, p.y + OFF[ci][i].y * s)));
  let steiner = [];
  if (grid < 1) {
    let a0 = Infinity, a1 = -Infinity, b0 = Infinity, b1 = -Infinity;
    for (const p of cap[0]) { a0 = Math.min(a0, p.x); a1 = Math.max(a1, p.x); b0 = Math.min(b0, p.y); b1 = Math.max(b1, p.y); }
    const rh = grid * 0.866, jit = mulberry32(Math.round((a1 - a0) * 1000 + (b1 - b0) * 7919));
    for (let b = b0 + rh * 0.5, row = 0; b < b1; b += rh, row++) {
      for (let a = a0 + (row % 2 ? grid * 0.5 : 0) + grid * 0.3; a < a1; a += grid) {
        const p = V2(a + (jit() - 0.5) * grid * 0.2, b + (jit() - 0.5) * grid * 0.2);
        if (!insidePoly(cap[0], p) || cap.slice(1).some((h) => insidePoly(h, p))) continue;
        if (distSegs(cap, p) < grid * 0.55) continue;
        steiner.push(p);
      }
    }
  }
  const all = cap.flat();
  let faces = null;
  if (steiner.length) {
    const pts = all.concat(steiner);
    const inShape = (x, y) => { const c = V2(x, y); return insidePoly(cap[0], c) && !cap.slice(1).some((h) => insidePoly(h, c)); };
    faces = delaunay(pts).filter(([i, j, k]) => inShape((pts[i].x + pts[j].x + pts[k].x) / 3, (pts[i].y + pts[j].y + pts[k].y) / 3));
    // every outline edge must survive, or the face would come loose from its rim: else fall back
    const E = new Set(), key = (i, j) => (i < j ? i * 100003 + j : j * 100003 + i);
    for (const [i, j, k] of faces) { E.add(key(i, j)); E.add(key(j, k)); E.add(key(k, i)); }
    let off = 0;
    for (const c of cap) {
      for (let i = 0; i < c.length && faces; i++) if (!E.has(key(off + i, off + ((i + 1) % c.length)))) faces = null;
      off += c.length;
    }
    if (faces) all.push(...steiner);
    else steiner = [];
  }
  if (!faces) faces = THREE.ShapeUtils.triangulateShape(cap[0], cap.slice(1));
  const sF = pos.length / 3;
  for (const p of steiner) { pos.push(T / 2, p.y, p.x); ao.push(1); }
  const sB = pos.length / 3;
  for (const p of steiner) { pos.push(-T / 2, p.y, p.x); ao.push(inner); }
  const mapF = [], mapB = [];
  cap.forEach((c, ci) => c.forEach((p, i) => { mapF.push(base[ci] + i); mapB.push(base[ci] + (R - 1) * c.length + i); }));
  steiner.forEach((p, i) => { mapF.push(sF + i); mapB.push(sB + i); });
  for (const [i, j, k] of faces) {
    const p = all[i], q = all[j], r = all[k];
    const cr = (q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x);
    if (cr < 0) idx.push(mapF[i], mapF[j], mapF[k], mapB[i], mapB[k], mapB[j]);
    else idx.push(mapF[i], mapF[k], mapF[j], mapB[i], mapB[j], mapB[k]);
  }
  const uv = [];
  for (let i = 0; i < pos.length; i += 3) uv.push(pos[i + 2] * 1.4, pos[i + 1] * 1.4);
  if (o.bend) {
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.length; i += 3) {
      v.set(pos[i], pos[i + 1], pos[i + 2]);
      o.bend(v);
      pos[i] = v.x; pos[i + 1] = v.y; pos[i + 2] = v.z;
    }
  }
  return finish(pos, uv, ao, idx);
}

// A lofted tube along a path ([[x,y,z],...] or Vector3s). `rad` is a number, an array, or fn(t) → r or
// [rN, rB] (elliptical section; N starts along `up`). Ends get rounded caps; a 0 radius ends in a point.
function tube(path, rad, o = {}) {
  const R = o.radial ?? 6;
  const P = path.map((p) => (p.isVector3 ? p.clone() : new THREE.Vector3(p[0], p[1], p[2])));
  const n = P.length;
  const L = [0];
  for (let i = 1; i < n; i++) L.push(L[i - 1] + P[i].distanceTo(P[i - 1]));
  const tot = L[n - 1] || 1;
  const Tn = P.map((_, i) => new THREE.Vector3().subVectors(P[Math.min(n - 1, i + 1)], P[Math.max(0, i - 1)]).normalize());
  let prev = new THREE.Vector3(...(o.up || (Math.abs(Tn[0].y) > 0.9 ? [0, 0, 1] : [0, 1, 0])));
  const N = [], B = [];
  for (let i = 0; i < n; i++) {
    let nn = prev.clone().addScaledVector(Tn[i], -prev.dot(Tn[i]));
    if (nn.lengthSq() < 1e-8) nn = new THREE.Vector3(1, 0, 0).addScaledVector(Tn[i], -Tn[i].x);
    nn.normalize();
    N.push(nn);
    B.push(new THREE.Vector3().crossVectors(Tn[i], nn));
    prev = nn;
  }
  const radius = (i) => {
    const r = typeof rad === 'function' ? rad(L[i] / tot, i) : Array.isArray(rad) ? rad[i] : rad;
    return Array.isArray(r) ? r : [r, r];
  };
  const endShade = o.endShade ?? 0.2, aoFn = o.ao;
  const rings = [];
  const ring = (c, i, rn, rb, u, a) => rings.push({ c, nn: N[i], bb: B[i], rn, rb, u, a });
  const cap = o.cap ?? 0.7, capSegs = o.capSegs ?? 2;
  const [s0n, s0b] = radius(0);
  if (o.capStart !== false && s0n > 1e-5) {
    const rr = Math.max(s0n, s0b) * cap;
    for (let k = capSegs; k >= 1; k--) {
      const th = (k / capSegs) * Math.PI / 2;
      ring(P[0].clone().addScaledVector(Tn[0], -rr * Math.sin(th)), 0, s0n * Math.cos(th), s0b * Math.cos(th), -rr * Math.sin(th), aoFn ? aoFn(0) : 1 - endShade);
    }
  }
  for (let i = 0; i < n; i++) {
    const [rn, rb] = radius(i);
    const e = Math.min(L[i], tot - L[i]);
    ring(P[i], i, rn, rb, L[i], aoFn ? aoFn(L[i] / tot) : 1 - endShade * (1 - sstep(0, 0.14, e)));
  }
  const [s1n, s1b] = radius(n - 1);
  if (o.capEnd !== false && s1n > 1e-5) {
    const rr = Math.max(s1n, s1b) * cap;
    for (let k = 1; k <= capSegs; k++) {
      const th = (k / capSegs) * Math.PI / 2;
      ring(P[n - 1].clone().addScaledVector(Tn[n - 1], rr * Math.sin(th)), n - 1, s1n * Math.cos(th), s1b * Math.cos(th), tot + rr * Math.sin(th), aoFn ? aoFn(1) : 1 - endShade);
    }
  }
  const pos = [], uv = [], ao = [], idx = [], start = [];
  for (const r of rings) {
    start.push(pos.length / 3);
    if (r.rn < 1e-5 && r.rb < 1e-5) {
      pos.push(r.c.x, r.c.y, r.c.z);
      uv.push(r.u * 1.4, 0.5);
      ao.push(r.a);
      r.tip = true;
      continue;
    }
    for (let j = 0; j < R; j++) {
      const ph = (j / R) * TAU, cs = Math.cos(ph) * r.rn, sn = Math.sin(ph) * r.rb;
      pos.push(r.c.x + r.nn.x * cs + r.bb.x * sn, r.c.y + r.nn.y * cs + r.bb.y * sn, r.c.z + r.nn.z * cs + r.bb.z * sn);
      uv.push(r.u * 1.4, Math.abs((j / R) * 2 - 1) * 0.5);
      ao.push(r.a);
    }
  }
  for (let k = 0; k < rings.length - 1; k++) {
    const A = rings[k], Bq = rings[k + 1], a0 = start[k], b0 = start[k + 1];
    for (let j = 0; j < R; j++) {
      const j2 = (j + 1) % R;
      if (A.tip && Bq.tip) continue;
      if (A.tip) idx.push(a0, b0 + j2, b0 + j);
      else if (Bq.tip) idx.push(a0 + j, a0 + j2, b0);
      else idx.push(a0 + j, a0 + j2, b0 + j2, a0 + j, b0 + j2, b0 + j);
    }
  }
  return finish(pos, uv, ao, idx);
}

// an ellipsoid knob (analytic normals, so non-uniform scale shades correctly)
function blob(rx, ry, rz, ws = 10, hs = 7, shade = 1) {
  const g = new THREE.SphereGeometry(1, ws, hs);
  const p = g.attributes.position, nrm = g.attributes.normal;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    p.setXYZ(i, x * rx, y * ry, z * rz);
    const nx = x / rx, ny = y / ry, nz = z / rz, l = Math.hypot(nx, ny, nz) || 1;
    nrm.setXYZ(i, nx / l, ny / l, nz / l);
  }
  const uv = g.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * rx * 6, uv.getY(i) * ry * 3);
  g.setAttribute('ao', new THREE.Float32BufferAttribute(new Array(p.count).fill(shade), 1));
  return g;
}

// a curved claw / tooth: base at the origin, pointing along +z, curling toward -y
function claw(len, r, curl = 0.35, flat = 0.62, seg = 5) {
  const path = [], rad = [];
  for (let i = 0; i <= seg; i++) {
    const t = i / seg;
    path.push([0, -curl * len * t * t, len * t]);
    const k = Math.pow(1 - t, 0.8);
    rad.push([r * k, r * flat * k]);
  }
  return tube(path, rad, { radial: 6, up: [0, 1, 0], cap: 0.4, capSegs: 1, ao: (t) => 1 - 0.3 * t });
}

// ---------------------------------------------------------------- placement helpers
const Q = new THREE.Quaternion(), Z = new THREE.Vector3(0, 0, 1);
function M(x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, s = 1) {
  return new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), new THREE.Vector3(s, s, s));
}
// a matrix that puts a +z-pointing part at `at`, pointing along `dir`, rolled by `roll`
function aim(at, dir, roll = 0, s = 1) {
  const d = new THREE.Vector3(...dir).normalize();
  Q.setFromUnitVectors(Z, d);
  const q = Q.clone().multiply(new THREE.Quaternion().setFromAxisAngle(Z, roll));
  return new THREE.Matrix4().compose(new THREE.Vector3(...at), q, new THREE.Vector3(s, s, s));
}
const MIRROR = new THREE.Matrix4().makeScale(-1, 1, 1);
const mirrored = (m) => (m ? MIRROR.clone().multiply(m) : MIRROR.clone());

function flipWinding(g) {
  const ix = g.index.array;
  for (let i = 0; i < ix.length; i += 3) { const t = ix[i + 1]; ix[i + 1] = ix[i + 2]; ix[i + 2] = t; }
}

// Collects transformed, coloured parts per joint and material, then merges each group.
function makeRig() {
  const parts = new Map();
  let seed = 0;
  return {
    add(joint, mat, geo, m = null, { shade = 1, both = false } = {}) {
      const list = both ? [[joint, m], [both, mirrored(m)]] : [[joint, m]];
      for (const [j, mm] of list) {
        const g = geo.clone();
        if (mm) {
          g.applyMatrix4(mm);
          if (mm.determinant() < 0) flipWinding(g);
        }
        colorize(g, mat === 'tooth' ? 'tooth' : 'bone', ++seed * 0.37, shade);
        const key = j + '|' + mat;
        if (!parts.has(key)) parts.set(key, []);
        parts.get(key).push(g);
      }
    },
    build() {
      const out = {};
      for (const [key, list] of parts) {
        const [joint, mat] = key.split('|');
        const geo = mergeGeometries(list);
        for (const g of list) g.dispose();
        geo.computeBoundingSphere();
        (out[joint] ||= []).push({ mat, geo });
      }
      return out;
    },
  };
}

// ================================================================ the skull
// Lateral profile of the cranium (head space: z toward the snout, y up, origin at the neck joint).
const SKULL_OUT = [
  [-0.11, -0.43], [-0.03, -0.4], [0.06, -0.31], [0.2, -0.29], [0.36, -0.3], [0.5, -0.33], [0.68, -0.355], [0.88, -0.36],
  [1.08, -0.345], [1.26, -0.325], [1.42, -0.3], [1.53, -0.27], [1.6, -0.2], [1.625, -0.1], [1.62, 0.0], [1.595, 0.09],
  [1.54, 0.16], [1.44, 0.21], [1.3, 0.25], [1.12, 0.295], [0.95, 0.34], [0.82, 0.38], [0.72, 0.43], [0.64, 0.465],
  [0.56, 0.45], [0.48, 0.425], [0.38, 0.435], [0.26, 0.45], [0.14, 0.44], [0.03, 0.42], [-0.06, 0.38], [-0.12, 0.3],
  [-0.14, 0.18], [-0.12, 0.04], [-0.1, -0.12], [-0.12, -0.3],
];
const skullHoles = () => [
  ellipse(1.43, 0.115, 0.1, 0.042, -0.26, 16), // external naris (nostril)
  ellipse(1.06, 0.1, 0.058, 0.048, -0.3, 12), // maxillary fenestra
  outline([[0.93, 0.05], [0.84, 0.19], [0.72, 0.29], [0.63, 0.3], [0.6, 0.2], [0.61, 0.02], [0.66, -0.1], [0.78, -0.13], [0.88, -0.06]], 0.04), // antorbital fenestra
  outline([[0.52, 0.27], [0.5, 0.33], [0.45, 0.355], [0.4, 0.33], [0.38, 0.26], [0.405, 0.17], [0.43, 0.07], [0.442, 0.01], [0.457, 0.07], [0.495, 0.18]], 0.03), // orbit (keyhole)
  outline([[0.31, 0.3], [0.25, 0.36], [0.14, 0.37], [0.04, 0.33], [-0.01, 0.22], [0.0, 0.05], [0.05, -0.1], [0.12, -0.17], [0.2, -0.13], [0.27, 0.05]], 0.04), // lateral temporal fenestra
];
// half-width of the cranium wall at (z, y): narrow snout, wide cheeks, walls leaning in at the top
const skWB = curve1([-0.16, 0.05, 0.3, 0.45, 0.6, 0.75, 0.9, 1.1, 1.3, 1.45, 1.53, 1.6], [0.5, 0.485, 0.445, 0.395, 0.325, 0.265, 0.228, 0.2, 0.185, 0.165, 0.12, 0.035]);
const skWT = curve1([-0.16, 0.05, 0.3, 0.45, 0.6, 0.75, 0.9, 1.1, 1.3, 1.45, 1.53, 1.6], [0.33, 0.325, 0.28, 0.23, 0.162, 0.108, 0.08, 0.062, 0.056, 0.05, 0.045, 0.035]);
function skullW(z, y) {
  const t = (y + 0.33) / 0.76;
  return lerp(skWB(z), skWT(z), t) + 0.022 * Math.sin(Math.PI * clamp(t, 0, 1));
}
// top of the skull along z (for the roof)
const skTop = curve1([-0.1, 0.03, 0.14, 0.26, 0.38, 0.48, 0.56, 0.64, 0.72, 0.82, 0.95], [0.34, 0.42, 0.44, 0.45, 0.435, 0.425, 0.45, 0.465, 0.43, 0.38, 0.34]);
const skRow = curve1([0.36, 0.5, 0.68, 0.88, 1.08, 1.26, 1.42, 1.53, 1.6], [-0.3, -0.33, -0.355, -0.36, -0.345, -0.325, -0.3, -0.27, -0.2]);

const JAW_OUT = [
  [-0.13, 0.0], [-0.09, 0.055], [-0.02, 0.045], [0.06, 0.085], [0.18, 0.135], [0.3, 0.15], [0.44, 0.12], [0.58, 0.082],
  [0.8, 0.07], [1.02, 0.072], [1.22, 0.08], [1.4, 0.085], [1.52, 0.08], [1.6, 0.045], [1.615, -0.03], [1.58, -0.11],
  [1.5, -0.15], [1.3, -0.17], [1.1, -0.19], [0.9, -0.215], [0.7, -0.255], [0.5, -0.29], [0.36, -0.3], [0.22, -0.27],
  [0.1, -0.2], [-0.02, -0.12], [-0.1, -0.06],
];
const JAW_AT = [0, -0.44, -0.08]; // jaw hinge in head space
const jwB = curve1([-0.15, 0.0, 0.3, 0.6, 0.9, 1.2, 1.4, 1.52, 1.62], [0.5, 0.49, 0.44, 0.33, 0.24, 0.175, 0.14, 0.1, 0.03]);
const jwT = curve1([-0.15, 0.0, 0.3, 0.6, 0.9, 1.2, 1.4, 1.52, 1.62], [0.475, 0.465, 0.4, 0.285, 0.195, 0.137, 0.108, 0.08, 0.03]);
function jawW(z, y) {
  const t = (y + 0.25) / 0.35;
  return lerp(jwB(z), jwT(z), t) + 0.012 * Math.sin(Math.PI * clamp(t, 0, 1));
}
const jawTop = curve1([0.58, 0.8, 1.02, 1.22, 1.4, 1.52], [0.082, 0.07, 0.072, 0.08, 0.085, 0.08]);

const EYE_AT = [0.45, 0.27]; // (z, y) of the eyeball in head space

function toothGeo(len, rf, rs, curve) {
  const path = [], rad = [];
  for (let i = 0; i <= 5; i++) {
    const t = i / 5;
    path.push([0, 0.04 - (len + 0.04) * t, -curve * len * t * t]);
    const k = Math.pow(1 - t, 0.85);
    rad.push([rf * k, rs * k]);
  }
  return tube(path, rad, { radial: 6, up: [0, 0, 1], cap: 0.3, capSegs: 1, ao: (t) => t });
}

let SKULL = null;
function skullParts() {
  if (SKULL) return SKULL;
  const rig = makeRig();
  const rnd = mulberry32(9);
  // cranium walls
  const wall = slab(outline(SKULL_OUT, 0.05), skullHoles(), {
    thick: 0.085, inset: 0.018, depth: 0.032, segs: 2, grid: 0.062, innerShade: 0.55,
    bend: (v) => { v.x += skullW(v.z, v.y); },
  });
  rig.add('head', 'bone', wall, null, { both: 'head' });
  // skull roof with the two supratemporal openings
  const roofPts = [];
  const rz = [-0.1, 0.0, 0.15, 0.3, 0.45, 0.6, 0.72, 0.84];
  for (const z of rz) roofPts.push([z, skWT(z) + 0.012]);
  roofPts.push([0.93, 0]);
  for (const z of rz.slice().reverse()) roofPts.push([z, -(skWT(z) + 0.012)]);
  roofPts.push([-0.14, 0]);
  const roof = slab(outline(roofPts, 0.045), [ellipse(0.12, 0.13, 0.11, 0.06, 0.12, 14), ellipse(0.12, -0.13, 0.11, 0.06, -0.12, 14)], {
    thick: 0.05, inset: 0.012, depth: 0.02, segs: 2, grid: 0.05,
    bend: (v) => { v.x -= skTop(v.z) - 0.035 - 0.35 * v.y * v.y; },
  });
  rig.add('head', 'bone', roof, M(0, 0, 0, 0, 0, -Math.PI / 2));
  // sagittal and nuchal crests
  rig.add('head', 'bone', tube([[0, skTop(-0.06) - 0.015, -0.06], [0, skTop(0.12) + 0.0, 0.12], [0, skTop(0.3) - 0.025, 0.3]], [0.022, 0.028, 0.015], { radial: 6 }));
  rig.add('head', 'bone', tube([[-0.33, 0.36, -0.07], [-0.17, 0.41, -0.1], [0, 0.425, -0.11], [0.17, 0.41, -0.1], [0.33, 0.36, -0.07]], 0.032, { radial: 6 }));
  // roof of the mouth
  const palPts = [];
  const pz = [0.32, 0.5, 0.7, 0.9, 1.1, 1.3, 1.45, 1.54];
  for (const z of pz) palPts.push([z, skullW(z, -0.25) - 0.025]);
  palPts.push([1.58, 0]);
  for (const z of pz.slice().reverse()) palPts.push([z, -(skullW(z, -0.25) - 0.025)]);
  palPts.push([0.28, 0]);
  const palate = slab(outline(palPts, 0.06), [], { thick: 0.04, inset: 0.01, depth: 0.015, segs: 1, grid: 0.07, bend: (v) => { v.x += 0.25; } });
  rig.add('head', 'bone', palate, M(0, 0, 0, 0, 0, -Math.PI / 2), { shade: 0.7 });
  // back of the skull (occiput) + the condyle the neck plugs into
  const occ = slab(outline([[-0.3, -0.2], [0.3, -0.2], [0.37, 0.05], [0.33, 0.3], [0.2, 0.39], [-0.2, 0.39], [-0.33, 0.3], [-0.37, 0.05]], 0.05), [ellipse(0, 0.06, 0.05, 0.045, 0, 12)], { thick: 0.06, inset: 0.014, depth: 0.022, segs: 1, grid: 0.07 });
  rig.add('head', 'bone', occ, M(0, 0, -0.075, 0, -Math.PI / 2, 0), { shade: 0.85 });
  rig.add('head', 'bone', blob(0.07, 0.065, 0.075), M(0, -0.03, -0.12), { shade: 0.8 });
  // bony bumps: lacrimal "horns", brow bosses over the eyes, cheek bosses, jaw-hinge knobs
  rig.add('head', 'bone', blob(0.045, 0.034, 0.075), M(skullW(0.64, 0.44) - 0.005, 0.455, 0.64, 0, 0.15, 0), { both: 'head' });
  rig.add('head', 'bone', blob(0.04, 0.035, 0.065), M(skullW(0.36, 0.4) + 0.012, 0.405, 0.36), { both: 'head' });
  rig.add('head', 'bone', blob(0.035, 0.05, 0.085), M(skullW(0.2, -0.22) + 0.035, -0.22, 0.2), { both: 'head' });
  rig.add('head', 'bone', blob(0.065, 0.05, 0.07), M(0.475, -0.43, -0.1), { both: 'head', shade: 0.85 });
  // upper teeth: 3 small front (premaxillary) teeth, then 11 big ones, largest in the middle of the row
  const upper = [];
  for (const z of [1.47, 1.53, 1.575]) upper.push([z, 0.075 + rnd() * 0.012, 0.024, 0.02, 0.15]);
  for (let i = 0; i < 11; i++) upper.push([0.56 + i * 0.081, 0.1 + 0.085 * Math.exp(-(((i - 3.6) / 2.7) ** 2)) + rnd() * 0.012, 0.042, 0.03, 0.3]);
  for (const [z, len, rf, rs, cv] of upper) {
    const y = skRow(z) + 0.01, x = skullW(z, y) - 0.008;
    const g = toothGeo(len, rf * (0.8 + len * 1.4), rs * (0.8 + len * 1.4), cv);
    rig.add('head', 'tooth', g, M(x, y, z, (rnd() - 0.5) * 0.12, 0, -0.05 + (rnd() - 0.5) * 0.1), { both: 'head' });
  }
  // eyeball sockets look deeper with a dark backing ring inside the skull
  // lower jaw: two rami that meet at the chin, each with the mandibular opening
  const jaw = slab(outline(JAW_OUT, 0.045), [outline([[0.18, -0.08], [0.26, -0.02], [0.4, 0.0], [0.5, -0.04], [0.52, -0.12], [0.42, -0.18], [0.28, -0.17]], 0.035)], {
    thick: 0.07, inset: 0.016, depth: 0.028, segs: 2, grid: 0.055, innerShade: 0.55,
    bend: (v) => { v.x += jawW(v.z, v.y); },
  });
  rig.add('jaw', 'bone', jaw, null, { both: 'jaw' });
  for (let i = 0; i < 12; i++) {
    const z = 0.62 + i * 0.077, y = jawTop(z) - 0.01, x = jawW(z, y) - 0.006;
    const len = 0.075 + 0.055 * Math.exp(-(((i - 4) / 3.2) ** 2)) + rnd() * 0.01;
    const g = toothGeo(len, 0.03 * (0.8 + len * 1.4), 0.024 * (0.8 + len * 1.4), 0.25);
    rig.add('jaw', 'tooth', g, M(x, y, z, (rnd() - 0.5) * 0.12, 0, Math.PI + 0.05 + (rnd() - 0.5) * 0.1), { both: 'jaw' });
  }
  SKULL = rig.build();
  return SKULL;
}

const EYE_GEO = () => (SKULL_EYE ||= new THREE.SphereGeometry(0.056, 14, 10));
let SKULL_EYE = null;

function meshesFor(list, m, shadow = true) {
  return list.map(({ mat, geo }) => {
    const o = new THREE.Mesh(geo, m[mat]);
    o.castShadow = shadow && mat === 'bone';
    o.receiveShadow = false;
    return o;
  });
}

export function buildSkull(m = trexMats()) {
  const parts = skullParts();
  const head = new THREE.Group();
  for (const o of meshesFor(parts.head, m)) head.add(o);
  const eyes = [];
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(EYE_GEO(), m.eye);
    eye.position.set(s * (skullW(EYE_AT[0], EYE_AT[1]) - 0.052), EYE_AT[1], EYE_AT[0]);
    eye.scale.set(0.85, 1, 1.15);
    eye.visible = false;
    head.add(eye);
    eyes.push(eye);
  }
  const jaw = new THREE.Group();
  jaw.position.set(...JAW_AT);
  head.add(jaw);
  for (const o of meshesFor(parts.jaw, m)) jaw.add(o);
  return { head, jaw, eyes };
}

// ================================================================ the body
function centrumGeo(r, len, radial = 7) {
  const h = len / 2;
  return tube([[0, 0, -h], [0, 0, -h * 0.55], [0, 0, 0], [0, 0, h * 0.55], [0, 0, h]], [[r, r * 0.92], [r * 0.9, r * 0.83], [r * 0.76, r * 0.72], [r * 0.9, r * 0.83], [r, r * 0.92]], { radial, cap: 0.22, capSegs: 1, up: [0, 1, 0], endShade: 0.3 });
}

// a vertebra in its own frame (centrum along z, spine up): o = { r, len, spine, spineW, tilt, tp, tpUp, zyg, radial }
function vertebraGeo(o) {
  const rad = o.radial ?? 7;
  const parts = [centrumGeo(o.r, o.len, rad)];
  const arch = blob(o.r * 0.72, o.r * 0.55, o.len * 0.42, Math.max(5, rad - 1), 5);
  arch.translate(0, o.r * 1.05, 0);
  parts.push(arch);
  if (o.spine > o.r * 1.5) {
    const w = o.spineW, h0 = o.r * 0.95, h1 = o.spine;
    const sh = outline([[-w * 0.5, h0], [w * 0.5, h0], [w * 0.47, lerp(h0, h1, 0.6)], [w * 0.42, h1 - w * 0.2], [w * 0.22, h1], [-w * 0.26, h1], [-w * 0.48, h1 - w * 0.2], [-w * 0.5, lerp(h0, h1, 0.6)]], Math.max(0.025, w * 0.3));
    const t = o.spineT ?? Math.max(0.022, w * 0.3);
    const sp = slab(sh, [], { thick: t, inset: t * 0.2, depth: t / 2, segs: 1, grid: 2 });
    sp.rotateX(-(o.tilt || 0));
    parts.push(sp);
  }
  if (o.tp > 0) {
    for (const s of [-1, 1]) {
      parts.push(tube([[s * o.r * 0.5, o.r * 0.95, 0], [s * o.tp * 0.6, o.r * 0.95 + o.tpUp * 0.6, -o.len * 0.05], [s * o.tp, o.r * 0.95 + o.tpUp, -o.len * 0.12]],
        [[o.r * 0.38, o.r * 0.24], [o.r * 0.3, o.r * 0.2], [o.r * 0.26, o.r * 0.18]], { radial: 4, up: [0, 0, 1], cap: 0.6, capSegs: 1 }));
    }
  }
  if (o.zyg) {
    for (const s of [-1, 1]) for (const f of [-1, 1]) {
      const k = blob(o.r * 0.24, o.r * 0.2, o.r * 0.3, 5, 4);
      k.translate(s * o.r * 0.42, o.r * 1.45, f * o.len * 0.48);
      parts.push(k);
    }
  }
  return mergeGeometries(parts);
}

function chevronGeo(len, w) {
  const sh = outline([[-w * 0.55, 0.01], [w * 0.55, 0.01], [w * 0.38, -len * 0.45], [w * 0.2, -len], [-w * 0.2, -len * 0.95], [-w * 0.42, -len * 0.45]], Math.max(0.02, w * 0.3));
  const t = Math.max(0.018, w * 0.45);
  return slab(sh, [], { thick: t, inset: w * 0.08, depth: t / 2, segs: 1, grid: 2 });
}

// bone with knobbly ends between two points (simple limb element)
function longBone(a, b, r0, r1, rm, o = {}) {
  const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b);
  const mid = A.clone().lerp(B, 0.5);
  if (o.bow) mid.add(new THREE.Vector3(...o.bow));
  return tube([A, A.clone().lerp(mid, 0.3), mid, mid.clone().lerp(B, 0.7), B], [r0 * 1.12, rm * 1.05, rm, rm * 1.05, r1 * 1.12].map((r) => [r, r * (o.flat ?? 1)]), { radial: o.radial ?? 7, cap: 0.75, capSegs: o.capSegs ?? 2, up: o.up, endShade: 0.25 });
}

const RIB_T = [[0, 0, 0], [0.12, 0.03, -0.01], [0.27, -0.06, -0.04], [0.37, -0.25, -0.08], [0.41, -0.48, -0.13], [0.39, -0.72, -0.19], [0.32, -0.95, -0.25], [0.22, -1.12, -0.3]];
function ribGeo(L, W) {
  const c = new THREE.CatmullRomCurve3(RIB_T.map(([x, y, z]) => new THREE.Vector3(x * W, y * L, z * L)));
  return tube(c.getSpacedPoints(12), (t) => { const r = lerp(0.044, 0.016, Math.pow(t, 0.75)); return [r * 1.4, r]; }, { radial: 5, up: [0, 0, 1], cap: 0.6, capSegs: 1, endShade: 0.25 });
}
const RIBL = [0.46, 0.66, 0.84, 0.97, 1.06, 1.1, 1.08, 1.0, 0.84, 0.62];
const RIBW = [0.75, 0.88, 0.98, 1.05, 1.1, 1.12, 1.1, 1.04, 0.95, 0.82];
const ribZ = (i) => 0.95 + i * 0.212;
// where each rib ends (body space, right side)
const ribTip = (i) => [0.085 + RIB_T[7][0] * RIBW[i], spineY(ribZ(i)) + 0.05 + RIB_T[7][1] * RIBL[i], ribZ(i) + RIB_T[7][2] * RIBL[i]];

const NECK = new THREE.CubicBezierCurve3(new THREE.Vector3(0, 0.44, 2.98), new THREE.Vector3(0, 0.68, 3.52), new THREE.Vector3(0, 1.24, 3.3), new THREE.Vector3(0, 1.6, 3.52));

let BODY = null;
function bodyParts() {
  if (BODY) return BODY;
  const rig = makeRig();

  // ---- sacrum and pelvis
  for (let k = 0; k < 5; k++) {
    const z = -0.55 + k * 0.275;
    rig.add('body', 'bone', centrumGeo(0.095, 0.25), M(0, 0.18, z));
    // sacral spines (fused in life; kept as separate blades so the hips read as bone, not a plank)
    const top = 0.8 - 0.05 * Math.abs(k - 2);
    rig.add('body', 'bone', slab(outline([[-0.1, 0.24], [0.1, 0.24], [0.105, top - 0.04], [0.06, top], [-0.07, top], [-0.105, top - 0.05]], 0.04), [], { thick: 0.05, inset: 0.012, depth: 0.025, segs: 1, grid: 0.08 }), M(0, 0, z));
  }
  // ilium: long, low hip blade (deep rounded front with a hooked notch below it, tapering back end,
  // the hip socket between the two pegs underneath), gently dished on its outer face
  const ilW = (y, z) => 0.235 - 0.08 * clamp(y / 0.7, 0, 1) + 0.055 * sstep(0.25, -0.15, y)
    + 0.02 * Math.sin(Math.PI * clamp((z + 0.9) / 1.95, 0, 1))
    - 0.022 * Math.exp(-(((z + 0.15) / 0.45) ** 2) - (((y - 0.4) / 0.16) ** 2));
  const ilium = slab(outline([[0.95, 0.62], [0.6, 0.7], [0.2, 0.72], [-0.2, 0.71], [-0.55, 0.66], [-0.8, 0.56], [-0.95, 0.42], [-0.93, 0.33], [-0.8, 0.28], [-0.55, 0.22],
    [-0.35, 0.12], [-0.27, 0.0], [-0.24, -0.12], [-0.16, -0.1], [-0.05, 0.05], [0.08, 0.09], [0.2, 0.06], [0.28, -0.06], [0.34, -0.2], [0.44, -0.18], [0.48, -0.04],
    [0.62, 0.08], [0.76, 0.06], [0.86, 0.14], [0.94, 0.22], [1.02, 0.35], [1.0, 0.52]], 0.05), [], {
    thick: 0.07, inset: 0.016, depth: 0.028, segs: 2, grid: 0.075, innerShade: 0.7, rimShade: 0.86,
    bend: (v) => { v.x += ilW(v.y, v.z); },
  });
  rig.add('body', 'bone', ilium, null, { both: 'body' });
  // the strong ridge above the hip socket
  rig.add('body', 'bone', tube([[ilW(0.08, 0.14) + 0.035, 0.08, 0.14], [ilW(0.25, 0.1) + 0.04, 0.25, 0.1], [ilW(0.42, 0.05) + 0.03, 0.42, 0.05]], [0.03, 0.026, 0.016], { radial: 5 }), null, { both: 'body', shade: 0.92 });
  // pubis rods down to the big "boot", ischia going back
  rig.add('body', 'bone', tube([[0.26, -0.13, 0.35], [0.22, -0.6, 0.47], [0.14, -1.0, 0.56], [0.06, -1.27, 0.6]], [[0.08, 0.064], [0.062, 0.05], [0.055, 0.045], [0.065, 0.055]], { radial: 7, up: [0, 0, 1] }), null, { both: 'body' });
  rig.add('body', 'bone', slab(outline([[0.08, -0.85], [0.42, -0.95], [0.48, -1.22], [0.12, -1.26]], 0.06), [], { thick: 0.025, inset: 0.008, depth: 0.012, segs: 1, grid: 2 }), null, { shade: 0.85 }); // pubic apron
  const boot = slab(outline([[0.0, -1.3], [0.3, -1.24], [0.6, -1.23], [0.85, -1.28], [0.98, -1.36], [0.92, -1.44], [0.65, -1.48], [0.3, -1.49], [0.05, -1.45], [-0.08, -1.39]], 0.05), [], { thick: 0.2, inset: 0.03, depth: 0.08, segs: 2, grid: 0.08 });
  rig.add('body', 'bone', boot);
  rig.add('body', 'bone', tube([[0.21, -0.12, -0.22], [0.17, -0.45, -0.36], [0.11, -0.72, -0.5], [0.05, -0.9, -0.6]], [[0.068, 0.052], [0.048, 0.038], [0.042, 0.036], [0.055, 0.042]], { radial: 7, up: [0, 0, 1] }), null, { both: 'body' });

  // ---- back (dorsal) vertebrae and ribs
  for (let i = 0; i < 10; i++) {
    const z = ribZ(i), y = spineY(z);
    const h = 0.6 - 0.1 * sstep(1.6, 2.9, z) + 0.03 * Math.sin(i * 1.9);
    rig.add('body', 'bone', vertebraGeo({ r: 0.088, len: 0.18, spine: h, spineW: 0.15, tilt: 0.06, tp: 0.25, tpUp: 0.07, zyg: true }), M(0, y, z, -0.04));
    rig.add('body', 'bone', ribGeo(RIBL[i], RIBW[i]), M(0.085, y + 0.05, z, 0, 0, 0), { both: 'body' });
  }
  // belly ribs (gastralia): a basket of thin chevrons hung between the rib tips, from the pubic boot to the chest
  for (let j = 0; j < 11; j++) {
    const z = 0.98 + j * 0.15;
    // nearest rib tips set the outer ends
    const f = clamp((z + 0.1 - 0.95) / 0.212, 0, 9), i0 = Math.floor(f), i1 = Math.min(9, i0 + 1), tt = f - i0;
    const a = ribTip(i0), b = ribTip(i1);
    const ex = lerp(a[0], b[0], tt) + 0.02, ey = Math.min(-0.62, lerp(a[1], b[1], tt) - 0.06);
    const yc = Math.min(ey - 0.18, -1.24 + 0.3 * sstep(1.0, 2.6, z));
    const pts = [[-ex, ey, z - 0.06], [-ex * 0.66, lerp(ey, yc, 0.62), z + 0.02], [-ex * 0.3, lerp(ey, yc, 0.93), z + 0.09], [0, yc, z + 0.13], [ex * 0.3, lerp(ey, yc, 0.93), z + 0.09], [ex * 0.66, lerp(ey, yc, 0.62), z + 0.02], [ex, ey, z - 0.06]];
    const c = new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(...p)));
    rig.add('body', 'bone', tube(c.getSpacedPoints(12), (t) => 0.011 + 0.008 * Math.sin(t * Math.PI), { radial: 4, cap: 0.5, capSegs: 1 }), null, { shade: 0.92 });
  }

  // ---- neck: 7 chunky cervicals in an S-curve with backward-pointing cervical ribs
  for (let i = 0; i < 7; i++) {
    const t = 0.06 + i * 0.145;
    const p = NECK.getPointAt(t), tg = NECK.getTangentAt(t);
    const s = lerp(1.18, 0.88, i / 6);
    const g = vertebraGeo({ r: 0.112 * s, len: 0.165 * s, spine: 0.26 * s, spineW: 0.14 * s, tilt: -0.15, tp: 0.23 * s, tpUp: -0.06, zyg: true });
    const q = new THREE.Quaternion().setFromUnitVectors(Z, tg);
    rig.add('body', 'bone', g, aim([p.x, p.y, p.z], [tg.x, tg.y, tg.z]));
    // cervical ribs: thin splints running back along the neck
    const back = tg.clone().multiplyScalar(-0.38 * s);
    for (const sd of [-1, 1]) {
      const a = new THREE.Vector3(sd * 0.15 * s, -0.07 * s, 0).applyQuaternion(q).add(p);
      rig.add('body', 'bone', tube([a, a.clone().addScaledVector(back, 0.5).add(new THREE.Vector3(sd * 0.02, -0.03, 0)), a.clone().add(back).add(new THREE.Vector3(sd * 0.03, -0.05, 0))], [0.03 * s, 0.02 * s, 0.008], { radial: 4, cap: 0.5, capSegs: 1 }));
    }
  }
  // atlas ring right behind the skull's condyle
  rig.add('body', 'bone', blob(0.09, 0.08, 0.065), M(HEAD_AT[0], HEAD_AT[1] - 0.07, HEAD_AT[2] - 0.2, 0.7));

  // ---- shoulder girdle: scapula blades, coracoids and the wishbone
  const scap = slab(outline([[2.86, -0.27], [2.83, -0.1], [2.62, 0.04], [2.42, 0.19], [2.22, 0.35], [2.08, 0.47], [1.99, 0.45], [2.02, 0.35], [2.2, 0.2], [2.42, 0.02], [2.6, -0.12], [2.65, -0.27]], 0.04), [], {
    thick: 0.045, inset: 0.012, depth: 0.018, segs: 1, grid: 0.06,
    bend: (v) => { v.x += 0.51 - 0.15 * clamp((v.y + 0.25) / 0.75, 0, 1); },
  });
  rig.add('body', 'bone', scap, null, { both: 'body' });
  const cor = slab(ellipse(0, 0, 0.12, 0.1, 0, 16), [], { thick: 0.04, inset: 0.012, depth: 0.016, segs: 1, grid: 0.06 });
  rig.add('body', 'bone', cor, M(0.45, -0.36, 2.85, 0, 0.55, 0.15), { both: 'body' });
  rig.add('body', 'bone', tube([[0.43, -0.24, 2.86], [0.24, -0.41, 2.98], [0, -0.47, 3.02], [-0.24, -0.41, 2.98], [-0.43, -0.24, 2.86]], 0.022, { radial: 5 }));

  // ---- arms (shoulder frame; humerus hangs down -y): exactly two clawed fingers per hand
  {
    const j = 'armR';
    rig.add(j, 'bone', blob(0.05, 0.055, 0.06), M(0, 0, 0));
    rig.add(j, 'bone', longBone([0, -0.03, 0], [0, -0.39, 0.01], 0.036, 0.04, 0.026, { bow: [0, 0, 0.012] }));
    const E = new THREE.Vector3(0, -0.41, 0.012);
    const dF = new THREE.Vector3(0, -0.3, 0.95).normalize();
    const Wr = E.clone().addScaledVector(dF, 0.27);
    rig.add(j, 'bone', longBone([0.018, E.y + 0.01, E.z], [0.014, Wr.y, Wr.z], 0.024, 0.02, 0.016));
    rig.add(j, 'bone', longBone([-0.018, E.y + 0.03, E.z - 0.03], [-0.014, Wr.y + 0.005, Wr.z], 0.026, 0.02, 0.016));
    rig.add(j, 'bone', blob(0.035, 0.024, 0.03), M(Wr.x, Wr.y, Wr.z + 0.01));
    const fingers = [
      { x: -0.018, segs: [[-0.008, -0.025, 0.065], [-0.012, -0.055, 0.05]], claw: [0.075, 0.017] },
      { x: 0.016, segs: [[0.004, -0.02, 0.09], [0.004, -0.04, 0.05], [0.002, -0.05, 0.03]], claw: [0.065, 0.015] },
    ];
    for (const f of fingers) {
      let p = Wr.clone().add(new THREE.Vector3(f.x, -0.005, 0.015));
      let dir = null;
      for (const [dx, dy, dz] of f.segs) {
        const q = p.clone().add(new THREE.Vector3(dx, dy, dz));
        rig.add(j, 'bone', longBone([p.x, p.y, p.z], [q.x, q.y, q.z], 0.016, 0.014, 0.011, { radial: 6 }));
        dir = new THREE.Vector3(dx, dy, dz).normalize();
        p = q;
      }
      const cd = dir.clone().add(new THREE.Vector3(0, -0.4, 0)).normalize();
      rig.add(j, 'bone', claw(f.claw[0], f.claw[1], 0.45), aim([p.x, p.y, p.z], [cd.x, cd.y, cd.z]), { shade: 0.72 });
    }
    // the vestigial third metacarpal: a tiny splint
    rig.add(j, 'bone', longBone([Wr.x + 0.03, Wr.y - 0.005, Wr.z], [Wr.x + 0.042, Wr.y - 0.02, Wr.z + 0.045], 0.008, 0.005, 0.006, { radial: 4 }));
  }

  // ---- tail: 14 joints; two caudals per joint, then long, low ones toward the whip-like tip
  for (let i = 0; i < TAIL_N; i++) {
    const L = tailLen(i), j = 'tail' + i, nv = i < 9 ? 2 : 1;
    for (let k = 0; k < nv; k++) {
      const t = (i + (k + 0.5) / nv) / TAIL_N;
      const r = 0.09 * (1 - 0.76 * t), len = L / nv - 0.035;
      const z = (-L * (k + 0.5)) / nv;
      const spine = t < 0.55 ? r + 0.28 * Math.pow(1 - t / 0.55, 1.2) : 0;
      const tp = t < 0.42 ? 0.25 * (1 - t / 0.42) + r : 0;
      rig.add(j, 'bone', vertebraGeo({ r, len, spine, spineW: Math.max(0.05, 0.15 * (1 - t)), tilt: 0.62, tp, tpUp: 0.02, zyg: false, radial: t < 0.45 ? 7 : 5 }), M(0, 0, z));
      if (t < 0.7) {
        const cl = 0.38 * Math.pow(1 - t / 0.7, 0.9) + 0.035;
        rig.add(j, 'bone', chevronGeo(cl, Math.max(0.03, 0.085 * (1 - t))), M(0, -r * 0.92, z - len * 0.3, 0.8));
      }
    }
  }

  // ---- legs (right leg; the left one is mirrored). Bones sit 5-6 cm outboard of each joint axis.
  // hip joint: femur with its ball-shaped head in the hip socket
  rig.add('hipR', 'bone', blob(0.12, 0.115, 0.12), M(-0.03, 0, 0));
  rig.add('hipR', 'bone', tube([[-0.03, 0, 0], [0.05, -0.08, 0]], 0.085, { radial: 7, capStart: false, capEnd: false }));
  rig.add('hipR', 'bone', blob(0.075, 0.115, 0.12), M(0.11, -0.06, -0.01));
  rig.add('hipR', 'bone', blob(0.045, 0.09, 0.05), M(0.085, -0.16, 0.085));
  rig.add('hipR', 'bone', tube([[0.06, -0.06, 0], [0.066, -0.4, 0.05], [0.068, -0.8, 0.06], [0.064, -1.2, 0.035], [0.06, -FEMUR + 0.07, 0]],
    [[0.13, 0.14], [0.104, 0.108], [0.097, 0.102], [0.104, 0.108], [0.122, 0.145]], { radial: 9, cap: 0.4, capSegs: 1 }));
  rig.add('hipR', 'bone', blob(0.035, 0.14, 0.045), M(0.045, -0.56, -0.088));
  rig.add('hipR', 'bone', blob(0.07, 0.1, 0.105), M(-0.002, -FEMUR + 0.01, -0.02), { shade: 0.9 });
  rig.add('hipR', 'bone', blob(0.07, 0.1, 0.105), M(0.122, -FEMUR + 0.01, -0.02), { shade: 0.9 });
  // knee joint: tibia (with its forward crest) + the thin fibula
  rig.add('kneeR', 'bone', blob(0.14, 0.08, 0.125), M(0.06, -0.07, 0));
  rig.add('kneeR', 'bone', blob(0.04, 0.15, 0.1), M(0.06, -0.13, 0.1));
  rig.add('kneeR', 'bone', tube([[0.06, -0.08, 0.02], [0.06, -0.5, 0.012], [0.06, -1.0, 0.0], [0.06, -TIBIA + 0.06, 0]], [[0.1, 0.105], [0.073, 0.078], [0.067, 0.074], [0.085, 0.11]], { radial: 9, cap: 0.4, capSegs: 1 }));
  rig.add('kneeR', 'bone', tube([[0.17, -0.08, -0.035], [0.155, -0.5, -0.022], [0.137, -1.0, -0.01], [0.122, -TIBIA + 0.16, 0]], [0.048, 0.03, 0.025, 0.034], { radial: 6 }));
  rig.add('kneeR', 'bone', tube([[-0.05, -TIBIA, 0], [0.06, -TIBIA - 0.005, 0], [0.175, -TIBIA, 0]], [0.068, 0.084, 0.07], { radial: 9, cap: 0.5 }), null, { shade: 0.9 });
  rig.add('kneeR', 'bone', blob(0.08, 0.17, 0.025), M(0.06, -TIBIA + 0.17, 0.068));
  // ankle joint: three bundled metatarsals (+ the little dewclaw)
  rig.add('ankleR', 'bone', blob(0.125, 0.05, 0.085), M(0.05, -0.04, 0));
  rig.add('ankleR', 'bone', tube([[-0.008, -0.06, 0.012], [-0.003, -0.4, 0.022], [-0.012, -META + 0.07, 0.037]], [0.048, 0.041, 0.049], { radial: 7 }));
  rig.add('ankleR', 'bone', tube([[0.05, -0.09, -0.008], [0.05, -0.4, 0.0], [0.05, -META + 0.02, 0.022]], [0.026, 0.043, 0.055], { radial: 7 }));
  rig.add('ankleR', 'bone', tube([[0.108, -0.06, 0], [0.113, -0.4, 0.01], [0.12, -META + 0.075, 0.024]], [0.047, 0.04, 0.048], { radial: 7 }));
  rig.add('ankleR', 'bone', blob(0.052, 0.055, 0.057), M(-0.012, -META + 0.06, 0.043), { shade: 0.9 });
  rig.add('ankleR', 'bone', blob(0.058, 0.058, 0.062), M(0.05, -META + 0.005, 0.027), { shade: 0.9 });
  rig.add('ankleR', 'bone', blob(0.05, 0.054, 0.056), M(0.12, -META + 0.065, 0.028), { shade: 0.9 });
  rig.add('ankleR', 'bone', longBone([-0.02, -META + 0.3, -0.035], [-0.05, -META + 0.17, -0.08], 0.024, 0.022, 0.017, { radial: 5 }));
  rig.add('ankleR', 'bone', longBone([-0.05, -META + 0.17, -0.08], [-0.065, -META + 0.11, -0.135], 0.022, 0.02, 0.016, { radial: 5 }));
  rig.add('ankleR', 'bone', claw(0.075, 0.022, 0.4), aim([-0.065, -META + 0.11, -0.135], [-0.2, -0.55, -0.8]), { shade: 0.72 });
  // foot joint (ball of the foot): three forward toes with claws; ground at y = -BALL
  const toe = (x, yaw, lens, cl) => {
    const dx = Math.sin(yaw), dz = Math.cos(yaw);
    let px = x, pz = 0, py = -0.005;
    const hy = [-0.028, -0.04, -0.046, -0.05];
    lens.forEach((l, i) => {
      const nx = px + dx * l, nz = pz + dz * l, ny = hy[Math.min(i, hy.length - 1)];
      rig.add('footR', 'bone', longBone([px, py, pz], [nx, ny, nz], 0.052 - i * 0.005, 0.047 - i * 0.005, 0.036 - i * 0.004, { radial: 7, flat: 0.85, up: [0, 1, 0] }));
      px = nx; pz = nz; py = ny;
    });
    rig.add('footR', 'bone', claw(cl, 0.038, 0.3, 0.62), aim([px, py, pz], [dx, -0.04, dz]), { shade: 0.7 });
  };
  toe(0.05, 0, [0.17, 0.14, 0.11], 0.13);
  toe(-0.012, -0.34, [0.15, 0.12], 0.115);
  toe(0.114, 0.36, [0.12, 0.09, 0.08], 0.11);

  BODY = rig.build();
  // mirror the right limbs for the left side
  for (const j of ['hipR', 'kneeR', 'ankleR', 'footR', 'armR']) {
    BODY[j.slice(0, -1) + 'L'] = BODY[j].map(({ mat, geo }) => {
      const g = geo.clone();
      g.applyMatrix4(MIRROR);
      flipWinding(g);
      g.computeBoundingSphere();
      return { mat, geo: g };
    });
  }
  return BODY;
}

// ================================================================ the museum armature
// Thin black steel supports for the posed skeleton, like a real fossil mount: posts under the hips,
// the chest and the tail (with a cradle between the chevrons), and a bent rod up under the neck.
// Same local space as TRex.group (feet on y = 0, facing +z). A static prop: place it where the T-Rex
// stands and leave it there when the T-Rex walks off. One mesh, one draw call.
let STEEL = null;
export function trexMount() {
  const parts = [];
  const rod = (pts, r = 0.032) => {
    const g = tube(pts, r, { radial: 8, cap: 0.3, capSegs: 1 });
    g.deleteAttribute('ao');
    parts.push(g);
  };
  const plate = (x, z) => {
    const g = new THREE.BoxGeometry(0.42, 0.03, 0.42);
    g.translate(x, 0.015, z);
    parts.push(g);
  };
  // where the posed tail runs (same chain as TRex.tail in 'pose')
  const chain = new THREE.Object3D();
  chain.position.set(TAIL_BASE[0], TAIL_BASE[1] + HIP_Y, TAIL_BASE[2]);
  let seg = chain;
  const joints = [chain];
  for (let i = 0; i < TAIL_N; i++) {
    if (i > 0) { const s = new THREE.Object3D(); s.position.set(0, 0, -tailLen(i - 1)); seg.add(s); seg = s; joints.push(s); }
    seg.rotation.set(TAIL_RX(i), i > 6 ? -0.05 : -0.015, 0);
  }
  chain.updateMatrixWorld(true);
  const tp = new THREE.Vector3(0, 0, -tailLen(6) * 0.5).applyMatrix4(joints[6].matrixWorld); // mid tail joint 6
  const tr = 0.09 * (1 - 0.76 * ((6.5 / TAIL_N))); // centrum radius there
  // hips: up to the underside of the sacrum
  const hipTop = HIP_Y + 0.18 - 0.095;
  rod([[0, 0.03, -0.35], [0, hipTop, -0.35]], 0.04);
  plate(0, -0.35);
  // chest: up through the belly ribs to the backbone
  const cz = 2.0, chestTop = HIP_Y + spineY(cz) - 0.088;
  rod([[0, 0.03, cz], [0, chestTop, cz]], 0.04);
  plate(0, cz);
  // neck: a bent rod from the chest post, forward and up under the lower neck
  const np = NECK.getPointAt(0.3);
  rod([[0, chestTop - 0.35, cz], [0, chestTop - 0.2, cz + 0.6], [0, np.y + HIP_Y - 0.45, np.z - 0.05], [0, np.y + HIP_Y - 0.12, np.z]], 0.026);
  // tail: a post with a small U-cradle, the vertebra sits in it between two chevrons
  const cradle = tp.y - tr - 0.02;
  rod([[tp.x, 0.03, tp.z], [tp.x, cradle - 0.12, tp.z]], 0.034);
  rod([[tp.x - 0.09, cradle + 0.06, tp.z], [tp.x - 0.09, cradle - 0.08, tp.z], [tp.x - 0.05, cradle - 0.12, tp.z], [tp.x + 0.05, cradle - 0.12, tp.z], [tp.x + 0.09, cradle - 0.08, tp.z], [tp.x + 0.09, cradle + 0.06, tp.z]], 0.018);
  plate(tp.x, tp.z);
  const geo = mergeGeometries(parts.map((g) => {
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    return g;
  }));
  for (const g of parts) g.dispose();
  STEEL ||= new THREE.MeshStandardMaterial({ color: 0x24262b, roughness: 0.42, metalness: 0.55 });
  const mesh = new THREE.Mesh(geo, STEEL);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  const group = new THREE.Group();
  group.add(mesh);
  return group;
}

// ================================================================ the animated skeleton
const _look = new THREE.Vector3();
const LOOK_FROM = new THREE.Vector3(0, HIP_Y + HEAD_AT[1] + 0.2, HEAD_AT[2] + 0.4);

export class TRex {
  constructor({ eyeLight = true } = {}) {
    const m = trexMats();
    const parts = bodyParts();
    const attach = (group, key) => { for (const o of meshesFor(parts[key] || [], m)) group.add(o); };
    this.group = new THREE.Group();
    this.body = new THREE.Group();
    this.body.position.y = HIP_Y;
    this.group.add(this.body);
    this.alive = false;
    attach(this.body, 'body');

    this.headPivot = new THREE.Group();
    this.headPivot.position.set(...HEAD_AT);
    this.body.add(this.headPivot);
    const sk = buildSkull(m);
    this.headPivot.add(sk.head); // (must stay headPivot.children[0]: the morning chapter hangs a hat on it)
    this.jaw = sk.jaw;
    this.eyes = sk.eyes;
    this.eyeLight = null;
    if (eyeLight) {
      this.eyeLight = new THREE.PointLight(0xff2a00, 0, 9, 1.6);
      this.eyeLight.position.set(0, 0.16, 0.62);
      sk.head.add(this.eyeLight);
    }

    // tiny arms (two fingers each — a clue!)
    this.arms = [];
    for (const s of [-1, 1]) {
      const sh = new THREE.Group();
      sh.position.set(s * SHOULDER[0], SHOULDER[1], SHOULDER[2]);
      sh.rotation.set(-0.6, 0, s * 0.18);
      this.body.add(sh);
      attach(sh, s > 0 ? 'armR' : 'armL');
      this.arms.push(sh);
    }

    // tail chain
    this.tail = [];
    let parent = this.body;
    for (let i = 0; i < TAIL_N; i++) {
      const seg = new THREE.Group();
      if (i === 0) seg.position.set(...TAIL_BASE);
      else seg.position.set(0, 0, -tailLen(i - 1));
      parent.add(seg);
      attach(seg, 'tail' + i);
      this.tail.push(seg);
      parent = seg;
    }

    // legs
    this.legs = [-1, 1].map((s) => {
      const k = s > 0 ? 'R' : 'L';
      const hip = new THREE.Group();
      hip.position.set(s * HIP_X, 0, HIP_Z);
      this.body.add(hip);
      attach(hip, 'hip' + k);
      const knee = new THREE.Group();
      knee.position.y = -FEMUR;
      hip.add(knee);
      attach(knee, 'knee' + k);
      const ankle = new THREE.Group();
      ankle.position.y = -TIBIA;
      knee.add(ankle);
      attach(ankle, 'ankle' + k);
      const foot = new THREE.Group();
      foot.position.y = -META;
      ankle.add(foot);
      attach(foot, 'foot' + k);
      return { hip, knee, ankle, foot, side: s };
    });

    this.anim = {
      mode: 'pose', phase: 0, speed: 0, roar: 0, roarT: 0,
      headYaw: 0.28, headPitch: 0.05, jaw: 0.28, targetYaw: 0.28, targetPitch: 0.05,
      breathe: 0, time: 0, lean: 0, gait: 0, runK: 0, curl: 1,
    };
    this._rx = null;
    this.applyPose(0);
    // the bones are pre-merged per joint; this just keeps any extra static pieces batched too
    const joints = [this.body, this.headPivot, this.jaw, ...this.tail, ...this.arms, ...this.legs.flatMap((l) => [l.hip, l.knee, l.ankle, l.foot])];
    batchJoints(joints, this.eyes);
  }

  setAlive(on) {
    this.alive = on;
    for (const e of this.eyes) e.visible = on;
    if (this.eyeLight) this.eyeLight.intensity = on ? 6 : 0;
  }

  setMode(mode, speed = 0) {
    this.anim.mode = mode;
    this.anim.speed = speed;
  }

  roar(duration = 2.2) {
    this.anim.roar = duration;
    this.anim.roarT = 0;
  }

  lookAt(worldPos) {
    // (from between the eyes; no allocations, chapters call this every frame)
    const d = this.group.worldToLocal(_look.copy(worldPos)).sub(LOOK_FROM);
    this.anim.targetYaw = Math.max(-0.8, Math.min(0.8, Math.atan2(d.x, d.z)));
    this.anim.targetPitch = Math.max(-0.4, Math.min(0.6, -Math.atan2(d.y, Math.hypot(d.x, d.z))));
  }

  update(dt) {
    this.anim.time += dt;
    this.applyPose(dt);
  }

  // Two-bone IK for one leg in the body's side plane. Angles are absolute pitches from straight down
  // (positive = swung backward). (hy, hz): hip socket; (by, bz): ball of the foot; a3: metatarsus
  // pitch; a4: toe pitch (0 = flat on the ground).
  _ik(leg, hy, hz, by, bz, a3, a4, bodyRX) {
    const ay = by + META * Math.cos(a3), az = bz + META * Math.sin(a3);
    let dy = ay - hy, dz = az - hz, d = Math.hypot(dy, dz);
    const maxD = FEMUR + TIBIA - 0.01;
    if (d > maxD) { dy *= maxD / d; dz *= maxD / d; d = maxD; }
    const phi = Math.atan2(-dz, -dy);
    const cb = (FEMUR * FEMUR + d * d - TIBIA * TIBIA) / (2 * FEMUR * d);
    const a1 = phi - Math.acos(cb < -1 ? -1 : cb > 1 ? 1 : cb);
    const ky = hy - FEMUR * Math.cos(a1), kz = hz - FEMUR * Math.sin(a1);
    const a2 = Math.atan2(-(hz + dz - kz), -(hy + dy - ky));
    leg.hip.rotation.x = a1 - bodyRX;
    leg.knee.rotation.x = a2 - a1;
    leg.ankle.rotation.x = a3 - a2;
    leg.foot.rotation.x = a4 - a3;
  }

  applyPose(dt) {
    const a = this.anim;
    const mode = a.mode;
    const walk = mode === 'walk', run = mode === 'run', moving = walk || run;
    const idleAlive = this.alive && mode === 'idle';
    const k5 = dt ? 1 - Math.exp(-5 * dt) : 1, k4 = dt ? 1 - Math.exp(-4 * dt) : 1, k3 = dt ? 1 - Math.exp(-3 * dt) : 1;
    a.gait += ((moving ? 1 : 0) - a.gait) * k5;
    a.runK += ((run ? 1 : 0) - a.runK) * k4;
    a.curl += ((mode === 'pose' ? 1 : 0) - a.curl) * k3;
    const freq = walk ? a.speed / 3.6 : run ? a.speed / 6.5 : 0;
    a.phase += freq * TAU * dt;
    const ph = a.phase;
    const g = a.gait, rk = a.runK;
    const cyc = ph / TAU, p0 = cyc - Math.floor(cyc);
    const duty = lerp(0.62, 0.4, rk);

    // body: bob twice per stride (walk: highest mid-stance, run: lowest), lean, roll, twist
    const bob = Math.cos(TAU * 2 * (p0 - duty / 2));
    let by = HIP_Y + g * (lerp(-0.04, -0.2, rk) + bob * lerp(0.045, -0.1, rk));
    if (idleAlive) by += Math.sin(a.time * 1.6) * 0.035;
    this.body.position.y = by;
    const leanT = walk ? 0.05 : run ? 0.12 : 0;
    a.lean = dt ? damp(a.lean, leanT, 4, dt) : leanT;
    // (cutscenes may tilt body.rotation.x themselves: respect that while they do)
    const ext = this._rx !== null && this.body.rotation.x !== this._rx;
    const rx = ext ? this.body.rotation.x : a.lean + g * rk * 0.025 * bob;
    const roll = g * lerp(0.03, 0.02, rk) * Math.sin(TAU * p0);
    const yaw = g * lerp(0.035, 0.02, rk) * Math.cos(TAU * p0);
    this.body.rotation.set(rx, yaw, roll);
    this._rx = rx;

    // legs: planted museum stride ↔ gait cycle, solved with IK so the feet meet the floor
    const D = lerp(2.23, 2.45, rk), zc = lerp(0.24, 0.2, rk), lift = lerp(0.46, 0.6, rk), back3 = lerp(0.18, 0.32, rk);
    const cr = Math.cos(roll), sr = Math.sin(roll), cyw = Math.cos(yaw), syw = Math.sin(yaw), cx = Math.cos(rx), sx = Math.sin(rx);
    for (const leg of this.legs) {
      const p = leg.side > 0 ? p0 : (p0 + 0.5) % 1;
      let cz, cy, c3, c4 = 0;
      if (p < duty) {
        const s = p / duty;
        cz = zc + D * (0.5 - s); cy = BALL; c3 = lerp(-0.5, back3, s);
      } else {
        const s = (p - duty) / (1 - duty), e = s * s * (3 - 2 * s), arc = Math.sin(Math.PI * s);
        cz = zc + D * (e - 0.5); cy = BALL + lift * Math.pow(arc, 0.85); c3 = lerp(back3, -0.5, e) + 0.6 * arc; c4 = 0.42 * arc;
      }
      const st = STANCE[leg.side];
      const tz = HIP_Z + lerp(st.z, cz, g), ty = lerp(BALL, cy, g), t3 = lerp(st.a3, c3, g);
      // toes may droop in the air but never dig into the floor
      const t4 = Math.min(lerp(0, c4, g), Math.asin(clamp((ty - BALL) / 0.6, 0, 1)));
      // hip socket in group space (body rotation order XYZ)
      const hx = leg.side * HIP_X;
      const x1 = hx * cr, y1 = hx * sr, z1 = HIP_Z;
      const zz = -x1 * syw + z1 * cyw;
      const hy = by + y1 * cx - zz * sx, hz = y1 * sx + zz * cx;
      this._ik(leg, hy, hz, ty, tz, t3, t4, rx);
    }

    // tail: museum curl, walking sway, running bounce, idle swish
    for (let i = 0; i < TAIL_N; i++) {
      const seg = this.tail[i];
      let ry = a.curl * (i > 6 ? -0.05 : -0.015);
      let tx = TAIL_RX(i) - (i < 3 ? 0.03 * g * rk : 0);
      ry += g * lerp(0.06, 0.025, rk) * Math.sin(TAU * p0 - i * 0.42);
      tx += g * rk * 0.02 * Math.cos(TAU * 2 * (p0 - duty / 2) - i * 0.5);
      if (idleAlive) { ry += Math.sin(a.time * 0.9 + i * 0.3) * 0.03; tx += Math.sin(a.time * 0.7 + i * 0.25) * 0.006; }
      seg.rotation.y = ry;
      seg.rotation.x = tx;
    }

    // head
    let targetJaw = mode === 'pose' ? 0.28 : 0.1;
    let pitch = a.targetPitch, hyaw = a.targetYaw;
    if (run) { pitch = 0.15 + Math.sin(ph * 2) * 0.05; hyaw = 0; targetJaw = 0.35 + Math.max(0, Math.sin(ph)) * 0.2; }
    if (walk) pitch += Math.sin(ph * 2) * 0.04;
    if (idleAlive) targetJaw = 0.12 + Math.max(0, Math.sin(a.time * 0.8)) * 0.1;
    if (a.roar > 0) {
      a.roarT += dt;
      const kk = a.roarT / a.roar;
      if (kk >= 1) a.roar = 0;
      else {
        const env = kk < 0.15 ? kk / 0.15 : kk > 0.8 ? (1 - kk) / 0.2 : 1;
        pitch = -0.45 * env + (1 - env) * pitch;
        targetJaw = 0.95 * env + Math.sin(a.roarT * 40) * 0.05 * env;
        hyaw += Math.sin(a.roarT * 9) * 0.08 * env;
      }
    }
    if (dt) {
      a.headYaw = damp(a.headYaw, hyaw, 6, dt);
      a.headPitch = damp(a.headPitch, pitch, a.roar > 0 ? 10 : 5, dt);
      a.jaw = damp(a.jaw, targetJaw, 14, dt);
    } else {
      a.headYaw = hyaw; a.headPitch = pitch; a.jaw = targetJaw;
    }
    this.headPivot.rotation.set(a.headPitch, a.headYaw, 0, 'YXZ');
    this.jaw.rotation.x = a.jaw;
    for (const arm of this.arms) arm.rotation.x = -0.6 + Math.sin(ph * 2) * (run ? 0.3 : 0.05) * g;
  }
}
