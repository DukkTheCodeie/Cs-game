import * as THREE from 'three';
import { tex, makeCanvas, canvasTexture, plaqueTexture, signTexture, stickyTexture } from './textures.js';
import { mulberry32 } from '../core/util.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { batchStatic } from './batch.js';
export { batchStatic };

// Reusable museum props. Every function returns a THREE.Group positioned at the origin (floor level).

const G = {};
const geo = (k, f) => G[k] || (G[k] = f());
const M = {};
export function mat(key, opts) {
  if (!M[key]) M[key] = new THREE.MeshStandardMaterial(opts);
  return M[key];
}
export const MATS = {
  marble: () => mat('marble', { color: 0xeeeae2, roughness: 0.35 }),
  stoneWhite: () => mat('stoneWhite', { color: 0xd9d3c7, roughness: 0.6 }),
  darkWood: () => mat('darkWood', { color: 0x4a2f1c, roughness: 0.6 }),
  wood: () => mat('wood', { color: 0x8a5a33, roughness: 0.7 }),
  metal: () => mat('metal', { color: 0x8b8f96, roughness: 0.35, metalness: 0.8 }),
  black: () => mat('black', { color: 0x151515, roughness: 0.6 }),
  brass: () => mat('brass', { color: 0xc9a24a, roughness: 0.35, metalness: 0.9 }),
  velvet: () => mat('velvet', { color: 0x8a1022, roughness: 0.9 }),
  glass: () => { const m = mat('glass', { color: 0xaaccdd, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.18, depthWrite: false }); m.userData.batch = true; return m; },
  plant: () => mat('plant', { color: 0x2f6b34, roughness: 0.8, side: THREE.DoubleSide }),
  terracotta: () => mat('terracotta', { color: 0xb5582f, roughness: 0.75 }),
  bronze: () => mat('bronze', { color: 0x8a6a3a, roughness: 0.4, metalness: 0.7 }),
  red: () => mat('red', { color: 0x9c1c1c, roughness: 0.8 }),
  dough: () => mat('dough', { color: 0xd49a5c, roughness: 0.7 }),
};

export function shadowAll(obj, cast = true, receive = true) {
  obj.traverse((o) => {
    if (o.isMesh) { o.castShadow = cast; o.receiveShadow = receive; }
  });
  return obj;
}

export function box(w, h, d, material, x = 0, y = 0, z = 0) {
  const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  o.position.set(x, y + h / 2, z);
  return o;
}

// ---------- donuts ----------
const FROSTINGS = [0xff7eb6, 0x6b3a1e, 0xfff3e0, 0x7ad3ff, 0xffd34d];
const SPRINKLES = [0xff3b3b, 0x3bc9ff, 0xffe14d, 0x7dff6b, 0xffffff, 0xb86bff];
export function makeDonut({ frosting = 0, glow = false, scale = 1 } = {}) {
  const g = new THREE.Group();
  const dough = new THREE.Mesh(geo('dough', () => new THREE.TorusGeometry(0.12, 0.062, 12, 24)), MATS.dough());
  dough.rotation.x = Math.PI / 2;
  g.add(dough);
  const fc = FROSTINGS[frosting % FROSTINGS.length];
  const fm = mat('frost' + fc + glow, { color: fc, roughness: 0.3, emissive: glow ? fc : 0x000000, emissiveIntensity: glow ? 0.35 : 0 });
  const fr = new THREE.Mesh(geo('frost', () => new THREE.TorusGeometry(0.12, 0.058, 10, 24, Math.PI * 2)), fm);
  fr.rotation.x = Math.PI / 2;
  fr.scale.set(1.03, 1.03, 0.62);
  fr.position.y = 0.022;
  g.add(fr);
  // all 14 sprinkles are one vertex-colored mesh (one draw call)
  const sprGeo = geo('sprinkles' + (frosting % 5), () => {
    const r = mulberry32(frosting * 31 + 7);
    const base = new THREE.CapsuleGeometry(0.006, 0.022, 2, 4);
    const parts = [];
    const col = new THREE.Color();
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
    for (let i = 0; i < 14; i++) {
      const a = r() * Math.PI * 2, rad = 0.09 + r() * 0.06;
      col.set(SPRINKLES[Math.floor(r() * SPRINKLES.length)]);
      const g2 = base.clone();
      q.setFromEuler(e.set(Math.PI / 2, 0, r() * Math.PI));
      g2.applyMatrix4(m4.compose(new THREE.Vector3(Math.cos(a) * rad, 0.06, Math.sin(a) * rad), q, new THREE.Vector3(1, 1, 1)));
      const n = g2.attributes.position.count, cols = new Float32Array(n * 3);
      for (let k = 0; k < n; k++) { cols[k * 3] = col.r; cols[k * 3 + 1] = col.g; cols[k * 3 + 2] = col.b; }
      g2.setAttribute('color', new THREE.BufferAttribute(cols, 3));
      parts.push(g2);
    }
    return mergeGeometries(parts, false);
  });
  g.add(new THREE.Mesh(sprGeo, mat('sprinkleMat' + glow, { vertexColors: true, roughness: 0.4, emissive: glow ? 0x444444 : 0x000000 })));
  g.scale.setScalar(scale);
  return g;
}

// Collectible: floating, spinning, glowing donut with a soft halo sprite.
let haloTex = null;
export function makeCollectible(frosting = 0) {
  const g = new THREE.Group();
  const d = makeDonut({ frosting, glow: true, scale: 1.3 });
  d.rotation.x = 0.5;
  g.add(d);
  if (!haloTex) {
    const [c, x] = makeCanvas(128, 128);
    const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(255,190,220,0.9)');
    gr.addColorStop(0.4, 'rgba(255,120,180,0.25)');
    gr.addColorStop(1, 'rgba(255,120,180,0)');
    x.fillStyle = gr;
    x.fillRect(0, 0, 128, 128);
    haloTex = canvasTexture(c);
  }
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: haloTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  halo.scale.set(0.9, 0.9, 1);
  g.add(halo);
  g.userData.spin = d;
  g.userData.halo = halo;
  return g;
}

// ---------- architecture ----------
export function makeColumn(h = 7, r = 0.45, material = MATS.marble()) {
  const g = new THREE.Group();
  g.add(box(r * 2.6, 0.35, r * 2.6, material));
  const shaft = new THREE.Mesh(geo('colshaft' + h + r, () => new THREE.CylinderGeometry(r * 0.88, r, h - 0.8, 20)), material);
  shaft.position.y = 0.35 + (h - 0.8) / 2;
  g.add(shaft);
  g.add(box(r * 2.4, 0.15, r * 2.4, material, 0, h - 0.45, 0));
  g.add(box(r * 2.7, 0.3, r * 2.7, material, 0, h - 0.3, 0));
  return shadowAll(g);
}

export function makePedestal(w = 0.8, h = 1.1, material = MATS.marble()) {
  const g = new THREE.Group();
  g.add(box(w * 1.15, 0.1, w * 1.15, material));
  g.add(box(w, h - 0.2, w, material, 0, 0.1, 0));
  g.add(box(w * 1.15, 0.1, w * 1.15, material, 0, h - 0.1, 0));
  return shadowAll(g);
}

export function makeBust(name, tone = 0xe9e4da) {
  const g = new THREE.Group();
  const m = mat('bust' + tone, { color: tone, roughness: 0.45 });
  g.add(makePedestal(0.7, 1.2));
  const sh = new THREE.Mesh(geo('bustsh', () => new THREE.SphereGeometry(0.32, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2)), m);
  sh.scale.set(1.1, 0.6, 0.65);
  sh.position.y = 1.2;
  g.add(sh);
  const neck = new THREE.Mesh(geo('bustneck', () => new THREE.CylinderGeometry(0.08, 0.1, 0.2, 10)), m);
  neck.position.y = 1.42;
  g.add(neck);
  const head = new THREE.Mesh(geo('busthead', () => new THREE.SphereGeometry(0.15, 16, 12)), m);
  head.scale.set(0.9, 1.1, 1);
  head.position.y = 1.62;
  g.add(head);
  const nose = new THREE.Mesh(geo('bustnose', () => new THREE.ConeGeometry(0.03, 0.08, 6)), m);
  nose.rotation.x = Math.PI / 2;
  nose.position.set(0, 1.62, 0.15);
  g.add(nose);
  // laurel wreath
  const laurel = new THREE.Mesh(geo('laurel', () => new THREE.TorusGeometry(0.15, 0.02, 6, 16)), MATS.brass());
  laurel.rotation.x = Math.PI / 2 - 0.2;
  laurel.position.y = 1.72;
  g.add(laurel);
  if (name) {
    const plate = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.12), new THREE.MeshStandardMaterial({ map: signTexture(name, { w: 256, h: 52, bg: '#2a241c', fg: '#e9d7a8', font: 'bold 26px Georgia, serif' }), roughness: 0.5 }));
    plate.position.set(0, 0.95, 0.357);
    g.add(plate);
  }
  return shadowAll(g);
}

export function makeAmphora() {
  const pts = [];
  const prof = [[0, 0], [0.08, 0], [0.12, 0.08], [0.22, 0.3], [0.26, 0.5], [0.22, 0.75], [0.1, 0.92], [0.08, 1.05], [0.11, 1.1]];
  for (const [r, y] of prof) pts.push(new THREE.Vector2(r, y));
  const g = new THREE.Group();
  const body = new THREE.Mesh(geo('amph', () => new THREE.LatheGeometry(pts, 18)), MATS.terracotta());
  g.add(body);
  for (const s of [-1, 1]) {
    const h = new THREE.Mesh(geo('amphh', () => new THREE.TorusGeometry(0.1, 0.02, 6, 12, Math.PI)), MATS.terracotta());
    h.position.set(s * 0.12, 0.88, 0);
    h.rotation.z = s > 0 ? -Math.PI / 2 : Math.PI / 2;
    g.add(h);
  }
  return shadowAll(g);
}

export function makeBench(len = 2.2) {
  const g = new THREE.Group();
  g.add(box(len, 0.08, 0.5, MATS.darkWood(), 0, 0.42, 0));
  for (const s of [-1, 1]) g.add(box(0.08, 0.42, 0.42, MATS.metal(), s * (len / 2 - 0.2), 0, 0));
  return shadowAll(g);
}

export function makeStanchion() {
  const g = new THREE.Group();
  g.add(new THREE.Mesh(geo('stanb', () => new THREE.CylinderGeometry(0.16, 0.18, 0.04, 14)), MATS.brass()));
  const p = new THREE.Mesh(geo('stanp', () => new THREE.CylinderGeometry(0.03, 0.03, 0.95, 8)), MATS.brass());
  p.position.y = 0.48;
  g.add(p);
  const t = new THREE.Mesh(geo('stant', () => new THREE.SphereGeometry(0.05, 10, 8)), MATS.brass());
  t.position.y = 0.98;
  g.add(t);
  return shadowAll(g);
}

export function makeRope(len) {
  const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(0, 0.92, 0), new THREE.Vector3(len / 2, 0.62, 0), new THREE.Vector3(len, 0.92, 0));
  const m = new THREE.Mesh(new THREE.TubeGeometry(curve, 12, 0.025, 6), MATS.velvet());
  m.castShadow = true;
  return m;
}

export function makeFern(seed = 1) {
  const g = new THREE.Group();
  const r = mulberry32(seed);
  const leafG = geo('leaf', () => {
    const s = new THREE.Shape();
    s.moveTo(0, 0);
    s.quadraticCurveTo(0.12, 0.4, 0, 0.9);
    s.quadraticCurveTo(-0.12, 0.4, 0, 0);
    return new THREE.ShapeGeometry(s, 4);
  });
  for (let i = 0; i < 9; i++) {
    const l = new THREE.Mesh(leafG, MATS.plant());
    const a = (i / 9) * Math.PI * 2 + r();
    l.rotation.set(0, a, 0);
    l.rotateX(-0.6 - r() * 0.5);
    l.scale.setScalar(0.8 + r() * 0.7);
    g.add(l);
  }
  const pot = new THREE.Mesh(geo('pot', () => new THREE.CylinderGeometry(0.25, 0.2, 0.35, 12)), MATS.terracotta());
  pot.position.y = 0.17;
  g.add(pot);
  g.children.forEach((c, i) => { if (i < 9) c.position.y = 0.33; });
  return shadowAll(g, true, false);
}

export function makeRock(seed = 1, s = 1) {
  const r = mulberry32(seed);
  const g = new THREE.DodecahedronGeometry(0.6 * s, 1);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) p.setXYZ(i, p.getX(i) * (0.8 + r() * 0.4), p.getY(i) * (0.6 + r() * 0.3), p.getZ(i) * (0.8 + r() * 0.4));
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, mat('rock', { color: 0x5c534a, roughness: 0.95, flatShading: true }));
  m.position.y = 0.2 * s;
  m.castShadow = m.receiveShadow = true;
  return m;
}

export function makeDisplayCase(w = 1.4, h = 1.0, d = 0.8, inner = null) {
  const g = new THREE.Group();
  g.add(box(w, 0.9, d, MATS.darkWood()));
  const glass = box(w, h, d, MATS.glass(), 0, 0.9, 0);
  glass.castShadow = false;
  g.add(glass);
  g.add(box(w + 0.04, 0.04, d + 0.04, MATS.brass(), 0, 0.9 + h, 0));
  if (inner) { inner.position.y = 0.9; g.add(inner); }
  shadowAll(g);
  glass.castShadow = false;
  return g;
}

export function makePlaqueStand(title, body, opts = {}) {
  const g = new THREE.Group();
  const post = box(0.08, 0.9, 0.08, MATS.black());
  g.add(post);
  const board = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.56), new THREE.MeshStandardMaterial({ map: plaqueTexture({ title, body, ...opts }), roughness: 0.6, emissive: 0xffffff, emissiveIntensity: 0.02 }));
  board.position.set(0, 1.05, 0.05);
  board.rotation.x = -0.5;
  g.add(board);
  const back = new THREE.Mesh(new THREE.BoxGeometry(0.96, 0.6, 0.03), MATS.black());
  back.position.z = -0.02;
  board.add(back);
  if (opts.note) board.add(stickyNote(opts.note, 0.22, 0.47, -0.2, -0.14, opts.noteColor));
  return shadowAll(g, true, true);
}

// A sticky note stuck on the corner of a plaque: a note from the staff, or from a visitor.
function stickyNote(text, size, x, y, rot, color) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshStandardMaterial({ map: stickyTexture(text, color ? { color } : {}), color: 0xb8b8b8, roughness: 1 }));
  m.position.set(x, y, 0.004);
  m.rotation.z = rot;
  return m;
}

export function makeWallPlaque(title, body, w = 2, h = 1.25, opts = {}) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: plaqueTexture({ title, body, w: 512, h: Math.round((512 * h) / w), ...opts }), roughness: 0.6, emissive: 0xffffff, emissiveIntensity: 0.03 }));
  if (opts.note) { const s = Math.min(w, h) * 0.4; m.add(stickyNote(opts.note, s, w / 2 - s * 0.25, -h / 2 + s * 0.3, 0.1, opts.noteColor)); }
  return m;
}

// Puzzle console: a pedestal with a glowing screen you can redraw.
export function makeConsole({ title = 'PUZZLE', color = '#6dff9e' } = {}) {
  const g = new THREE.Group();
  g.add(box(0.7, 1.0, 0.5, MATS.black()));
  const top = box(0.8, 0.08, 0.6, MATS.metal(), 0, 1.0, 0);
  g.add(top);
  const [c, x] = makeCanvas(320, 200);
  const t = canvasTexture(c);
  const screenMat = new THREE.MeshBasicMaterial({ map: t, toneMapped: false });
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.39), screenMat);
  screen.position.set(0, 1.32, 0.03);
  screen.rotation.x = -0.45;
  const frame = box(0.7, 0.46, 0.06, MATS.black(), 0, 1.08, 0);
  frame.rotation.x = -0.45;
  frame.position.set(0, 1.31, -0.005);
  g.add(frame);
  g.add(screen);
  const light = new THREE.PointLight(color, 0.8, 3.5, 2);
  light.position.set(0, 1.5, 0.5);
  g.add(light);
  let blink = 0;
  const draw = (lines, col = color, sub = '') => {
    x.fillStyle = '#05080a';
    x.fillRect(0, 0, 320, 200);
    x.strokeStyle = col;
    x.lineWidth = 6;
    x.strokeRect(6, 6, 308, 188);
    x.fillStyle = col;
    x.font = 'bold 26px "Courier New", monospace';
    x.textAlign = 'center';
    x.fillText(title, 160, 48);
    x.font = 'bold 22px "Courier New", monospace';
    lines.forEach((ln, i) => x.fillText(ln, 160, 98 + i * 30));
    if (sub) {
      x.font = '18px "Courier New", monospace';
      x.fillText(sub, 160, 178);
    }
    for (let y = 0; y < 200; y += 4) { x.fillStyle = 'rgba(0,0,0,0.25)'; x.fillRect(0, y, 320, 2); }
    t.needsUpdate = true;
    light.color.set(col);
  };
  draw(['LOCKED'], color, '[E] INSPECT');
  shadowAll(g);
  screen.castShadow = false;
  return {
    group: g, draw, light,
    update(dt) {
      blink += dt;
      screenMat.color.setScalar(0.85 + Math.sin(blink * 6) * 0.15);
    },
  };
}

export function makeChariot() {
  const g = new THREE.Group();
  const bronze = MATS.bronze();
  const tub = box(1.3, 0.9, 1.1, bronze, 0, 0.55, 0);
  g.add(tub);
  for (const s of [-1, 1]) {
    const wheel = new THREE.Mesh(geo('wheel', () => new THREE.TorusGeometry(0.55, 0.06, 8, 24)), MATS.darkWood());
    wheel.position.set(s * 0.75, 0.6, 0);
    wheel.rotation.y = Math.PI / 2;
    g.add(wheel);
    for (let i = 0; i < 4; i++) {
      const sp = box(0.04, 1.1, 0.04, MATS.darkWood(), s * 0.75, 0.05, 0);
      sp.rotation.x = (i * Math.PI) / 4;
      sp.position.set(s * 0.75, 0.6, 0);
      g.add(sp);
    }
  }
  const pole = box(0.08, 0.08, 2.2, MATS.darkWood(), 0, 0.5, 1.6);
  g.add(pole);
  return shadowAll(g);
}

export function makeTriceratopsSkull() {
  const g = new THREE.Group();
  const bone = mat('trik', { color: 0xc9bc9b, roughness: 0.8, map: tex('bone', 1, 1) });
  const frill = new THREE.Mesh(geo('frill', () => new THREE.CircleGeometry(0.85, 24, 0, Math.PI)), mat('frillm', { color: 0xc2b48f, roughness: 0.8, side: THREE.DoubleSide }));
  frill.position.set(0, 0.5, -0.2);
  frill.rotation.x = -0.3;
  g.add(frill);
  const head = new THREE.Mesh(geo('trihead', () => new THREE.ConeGeometry(0.35, 1.2, 10)), bone);
  head.rotation.x = Math.PI / 2 + 0.3;
  head.position.set(0, 0.35, 0.5);
  g.add(head);
  const hornG = geo('horn', () => new THREE.ConeGeometry(0.07, 0.8, 8));
  for (const s of [-1, 1]) {
    const h = new THREE.Mesh(hornG, bone);
    h.position.set(s * 0.22, 0.7, 0.2);
    h.rotation.set(1.1, 0, -s * 0.2);
    g.add(h);
  }
  const nh = new THREE.Mesh(hornG, bone);
  nh.scale.set(0.8, 0.45, 0.8);
  nh.position.set(0, 0.5, 0.95);
  nh.rotation.x = 0.6;
  g.add(nh);
  return shadowAll(g);
}

export function makeAmmonite() {
  const g = new THREE.Group();
  const m = mat('ammo', { color: 0xa88e6a, roughness: 0.6 });
  for (let i = 0; i < 4; i++) {
    const t = new THREE.Mesh(new THREE.TorusGeometry(0.06 + i * 0.045, 0.02 + i * 0.012, 6, 18), m);
    t.position.y = 0.25;
    g.add(t);
  }
  return g;
}

export function makeSarcophagus() {
  const g = new THREE.Group();
  const gold = mat('sarc', { color: 0xd4a43a, roughness: 0.35, metalness: 0.7 });
  const blue = mat('sarcb', { color: 0x1f3d8a, roughness: 0.5 });
  const body = new THREE.Mesh(geo('sarcb', () => new THREE.CapsuleGeometry(0.32, 1.4, 4, 12)), gold);
  body.scale.set(1, 1, 0.55);
  body.position.y = 1.05;
  g.add(body);
  const face = new THREE.Mesh(geo('sarcf', () => new THREE.SphereGeometry(0.2, 12, 10)), gold);
  face.position.set(0, 1.62, 0.12);
  face.scale.set(1, 1.2, 0.6);
  g.add(face);
  for (const s of [-1, 1]) {
    const stripe = box(0.12, 0.6, 0.05, blue, s * 0.2, 1.35, 0.13);
    g.add(stripe);
  }
  const eyes = new THREE.Mesh(geo('sarce', () => new THREE.BoxGeometry(0.22, 0.03, 0.02)), mat('sarceye', { color: 0x111111 }));
  eyes.position.set(0, 1.66, 0.24);
  g.add(eyes);
  return shadowAll(g);
}

export function makeSheetStatue(seed = 1) {
  const r = mulberry32(seed);
  const g = new THREE.Group();
  const sheet = mat('sheet', { color: 0xd8d4cc, roughness: 0.95 });
  const h = 1.6 + r() * 0.6;
  const geoS = new THREE.CylinderGeometry(0.18, 0.5, h, 12, 6);
  const p = geoS.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i);
    const a = Math.atan2(p.getZ(i), p.getX(i));
    const k = 1 + Math.sin(a * 5 + y * 3) * 0.06;
    p.setX(i, p.getX(i) * k);
    p.setZ(i, p.getZ(i) * k);
  }
  geoS.computeVertexNormals();
  const body = new THREE.Mesh(geoS, sheet);
  body.position.y = h / 2;
  g.add(body);
  const head = new THREE.Mesh(geo('sheethead', () => new THREE.SphereGeometry(0.22, 12, 10)), sheet);
  head.position.y = h + 0.1;
  g.add(head);
  if (r() < 0.5) {
    const arm = new THREE.Mesh(geo('sheetarm', () => new THREE.CapsuleGeometry(0.07, 0.5, 4, 6)), sheet);
    arm.position.set(0.3, h * 0.75, 0.15);
    arm.rotation.set(-0.9, 0, -0.5);
    g.add(arm);
  }
  return shadowAll(g);
}

export function makeCrate(s = 1) {
  const m = mat('crate', { map: tex('crate'), roughness: 0.85 });
  const c = new THREE.Mesh(geo('crate', () => new THREE.BoxGeometry(1, 1, 1)), m);
  c.scale.setScalar(s);
  c.position.y = s / 2;
  c.castShadow = c.receiveShadow = true;
  return c;
}

export function makeDesk(w = 1.8, d = 0.8) {
  const g = new THREE.Group();
  g.add(box(w, 0.06, d, MATS.darkWood(), 0, 0.74, 0));
  for (const sx of [-1, 1]) g.add(box(0.06, 0.74, d - 0.05, MATS.darkWood(), sx * (w / 2 - 0.05), 0, 0));
  g.add(box(0.5, 0.6, d - 0.1, MATS.darkWood(), w / 2 - 0.35, 0.08, 0));
  return shadowAll(g);
}

export function makeChair() {
  const g = new THREE.Group();
  const seatMat = mat('chairseat', { color: 0x222630, roughness: 0.7 });
  g.add(box(0.5, 0.08, 0.5, seatMat, 0, 0.45, 0));
  const back = box(0.5, 0.6, 0.07, seatMat, 0, 0.55, -0.24);
  g.add(back);
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.4, 8), MATS.metal());
  pole.position.y = 0.25;
  g.add(pole);
  for (let i = 0; i < 5; i++) {
    const leg = box(0.04, 0.03, 0.32, MATS.metal(), 0, 0.03, 0);
    leg.rotation.y = (i / 5) * Math.PI * 2;
    leg.position.set(Math.sin(leg.rotation.y) * 0.16, 0.03, Math.cos(leg.rotation.y) * 0.16);
    g.add(leg);
  }
  return shadowAll(g);
}

// A monitor whose screen is a live <canvas> (MeTube, login, etc.)
export function makeMonitor(w = 0.95, h = 0.6, resW = 1024, resH = 640) {
  const g = new THREE.Group();
  g.add(box(0.25, 0.03, 0.2, MATS.black()));
  g.add(box(0.05, 0.25, 0.05, MATS.black(), 0, 0.03, -0.03));
  const bezel = box(w + 0.06, h + 0.06, 0.05, MATS.black(), 0, 0.25, -0.03);
  g.add(bezel);
  const [c, x] = makeCanvas(resW, resH);
  const t = canvasTexture(c);
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: t, toneMapped: false }));
  screen.position.set(0, 0.28 + h / 2, 0.0);
  g.add(screen);
  const glow = new THREE.PointLight(0x9fc6ff, 1.2, 4, 2);
  glow.position.set(0, 0.6, 0.5);
  g.add(glow);
  shadowAll(g);
  screen.castShadow = false;
  return { group: g, canvas: c, ctx: x, texture: t, screen, glow };
}

export function makeFlashlightModel() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.03, 0.26, 12), mat('flbody', { color: 0x3a3a3c, roughness: 0.45, metalness: 0.35, emissive: 0x1c1c1e }));
  body.rotation.x = Math.PI / 2;
  g.add(body);
  const head = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.03, 0.08, 14), mat('flhead', { color: 0x5a5a5e, roughness: 0.3, metalness: 0.5, emissive: 0x232326 }));
  head.rotation.x = Math.PI / 2;
  head.position.z = -0.16;
  g.add(head);
  const lens = new THREE.Mesh(new THREE.CircleGeometry(0.04, 16), new THREE.MeshBasicMaterial({ color: 0xfff6dc }));
  lens.position.z = -0.201;
  lens.rotation.y = Math.PI;
  g.add(lens);
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.031, 0.031, 0.1, 12), mat('flgrip', { color: 0x333333, roughness: 0.9, emissive: 0x141414 }));
  grip.rotation.x = Math.PI / 2;
  grip.position.z = 0.06;
  g.add(grip);
  g.userData.lens = lens;
  return g;
}

let exitFace = null;
export function makeExitSign() {
  const g = new THREE.Group();
  g.add(box(0.7, 0.25, 0.08, MATS.black(), 0, -0.125, 0));
  if (!exitFace) {
    exitFace = new THREE.MeshBasicMaterial({ map: signTexture('EXIT', { w: 256, h: 96, bg: '#0a3d1c', fg: '#6dff9e', font: 'bold 64px Arial Black, Arial' }), toneMapped: false });
    exitFace.map.userData.keep = true;
    exitFace.userData.keep = true;
  }
  const face = new THREE.Mesh(new THREE.PlaneGeometry(0.66, 0.22), exitFace);
  face.position.z = 0.041;
  g.add(face);
  return g;
}

export function makeSignPost(text, arrow = '') {
  const g = new THREE.Group();
  g.add(box(0.06, 1.6, 0.06, MATS.brass()));
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.45), new THREE.MeshStandardMaterial({ map: signTexture(text + (arrow ? '  ' + arrow : ''), { w: 512, h: 150, bg: '#1d2433', fg: '#f3e6c4', font: 'bold 44px Arial Black, Arial', border: '#c9a24a' }), roughness: 0.5, emissive: 0xffffff, emissiveIntensity: 0.05, side: THREE.DoubleSide }));
  sign.position.y = 1.6;
  g.add(sign);
  return shadowAll(g);
}

export function makeTelegraph() {
  const g = new THREE.Group();
  g.add(makeDesk(1.4, 0.7));
  const base = box(0.4, 0.06, 0.25, MATS.darkWood(), 0, 0.77, 0);
  g.add(base);
  const key = box(0.25, 0.03, 0.05, MATS.brass(), 0, 0.86, 0);
  g.add(key);
  const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.03, 12), MATS.black());
  knob.position.set(0.12, 0.9, 0);
  g.add(knob);
  const lampMat = new THREE.MeshStandardMaterial({ color: 0x331a00, emissive: 0xffaa33, emissiveIntensity: 0 });
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.09, 14, 10), lampMat);
  lamp.position.set(-0.45, 1.0, 0);
  g.add(lamp);
  const lampBase = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 0.2, 10), MATS.brass());
  lampBase.position.set(-0.45, 0.86, 0);
  g.add(lampBase);
  const light = new THREE.PointLight(0xffaa33, 0, 6, 2);
  light.position.set(-0.45, 1.15, 0.2);
  g.add(light);
  shadowAll(g);
  return { group: g, setLamp(on) { lampMat.emissiveIntensity = on ? 3 : 0; light.intensity = on ? 3 : 0; } };
}

export function makeBeanbag() {
  const g = new THREE.Group();
  const m = new THREE.Mesh(new THREE.SphereGeometry(0.6, 16, 12), mat('beanbag', { color: 0xc23b6a, roughness: 0.9 }));
  m.scale.set(1, 0.55, 1);
  m.position.y = 0.3;
  g.add(m);
  return shadowAll(g);
}

export function makeVendingMachine() {
  const g = new THREE.Group();
  g.add(box(1, 2, 0.8, mat('vend', { color: 0xb3202a, roughness: 0.5 })));
  const front = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 1.3), new THREE.MeshBasicMaterial({ map: signTexture('OUT OF\nORDER\n(again)', { w: 256, h: 512, bg: '#1a2a3a', fg: '#ff6b6b', font: 'bold 54px Arial Black, Arial' }), toneMapped: false }));
  front.position.set(-0.12, 1.15, 0.401);
  g.add(front);
  return shadowAll(g);
}
