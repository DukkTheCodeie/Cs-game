import * as THREE from 'three';
import { box, mat, MATS, shadowAll, makeTriceratopsSkull } from './props.js';
import { makeCanvas, canvasTexture, signTexture, paintingTexture } from './textures.js';
import { mulberry32 } from '../core/util.js';
import { makeNpc, npcsAreNew } from './cast.js';
import { drawGlyph } from './glyphs.js';

// More things to look at in every room: hanging flying reptiles, fossil slabs, a dig site, a gift shop,
// statues, a legionary, cats, a sphinx... Every builder returns a Group standing on the floor at the
// origin, facing +z, made of shared materials so the museum can merge them into a few draw calls.

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const UP = V(0, 1, 0);

// A tapered rod from a to b.
function rod(a, b, r1, r2, m, seg = 7) {
  const d = new THREE.Vector3().subVectors(b, a);
  const len = d.length();
  const o = new THREE.Mesh(new THREE.CylinderGeometry(r2, r1, len, seg), m);
  o.position.copy(a).addScaledVector(d, 0.5);
  o.quaternion.setFromUnitVectors(UP, d.normalize());
  return o;
}

function ball(r, m, p, sx = 1, sy = 1, sz = 1, seg = 10) {
  const o = new THREE.Mesh(new THREE.SphereGeometry(r, seg, Math.max(4, Math.round(seg * 0.7))), m);
  o.position.copy(p);
  o.scale.set(sx, sy, sz);
  return o;
}

// A plane showing one cell of a texture atlas (cols × rows), so many pictures share one material.
function atlasPlane(w, h, material, cols, rows, i) {
  const g = new THREE.PlaneGeometry(w, h);
  const uv = g.attributes.uv, c = i % cols, r = Math.floor(i / cols);
  for (let k = 0; k < uv.count; k++) uv.setXY(k, (c + uv.getX(k)) / cols, 1 - (r + 1 - uv.getY(k)) / rows);
  return new THREE.Mesh(g, material);
}

const steel = () => mat('exSteel', { color: 0x2a2e35, roughness: 0.5, metalness: 0.6 });
const cable = () => mat('exCable', { color: 0x111111, roughness: 0.6 });

// ------------------------------------------------------------------ flying reptile (hangs from the ceiling)
export function makePterosaur(seed = 1) {
  const r = mulberry32(seed);
  const skin = mat('pteroSkin', { color: 0x9a8c78, roughness: 0.8 });
  const wing = mat('pteroWing', { color: 0x8a5c3c, roughness: 0.9, side: THREE.DoubleSide });
  const crestM = mat('pteroCrest', { color: 0xc4512a, roughness: 0.7 });
  const beakM = mat('pteroBeak', { color: 0xd9c9a0, roughness: 0.5 });
  const g = new THREE.Group();
  g.add(ball(0.2, skin, V(0, 0, -0.05), 0.95, 0.85, 2.1));
  // neck and head with the long beak and the swept-back crest
  g.add(rod(V(0, 0.08, 0.35), V(0, 0.3, 0.85), 0.09, 0.065, skin));
  const head = new THREE.Group();
  head.position.set(0, 0.33, 0.92);
  head.rotation.y = (r() - 0.5) * 0.5;
  g.add(head);
  head.add(ball(0.11, skin, V(0, 0, 0), 0.85, 1, 1.4));
  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.075, 1.15, 8), beakM);
  beak.rotation.x = Math.PI / 2;
  beak.scale.set(0.75, 1, 1);
  beak.position.set(0, -0.01, 0.66);
  head.add(beak);
  const cs = new THREE.Shape();
  cs.moveTo(0.1, 0); cs.lineTo(-0.8, 0.36); cs.lineTo(-0.55, 0.12); cs.lineTo(0.1, -0.04);
  const crest = new THREE.Mesh(new THREE.ExtrudeGeometry(cs, { depth: 0.03, bevelEnabled: false }), crestM);
  crest.rotation.y = -Math.PI / 2;
  crest.position.set(0.015, 0.03, 0);
  head.add(crest);
  for (const s of [-1, 1]) {
    const eye = ball(0.025, mat('pteroEye', { color: 0x111111, roughness: 0.3 }), V(s * 0.08, 0.03, 0.08));
    head.add(eye);
    // the wing: arm bones along the front edge, and the skin stretched back to the ankle
    const sh = V(s * 0.16, 0.06, 0.22), el = V(s * 0.7, 0.12, 0.05), wr = V(s * 1.45, 0.16, 0.2);
    const k1 = V(s * 1.95, 0.13, 0.06), k2 = V(s * 2.42, 0.08, -0.16), k3 = V(s * 2.76, 0.03, -0.38), tip = V(s * 3.0, -0.02, -0.62);
    const edge = [sh, el, wr, k1, k2, k3, tip];
    for (let i = 0; i < edge.length - 1; i++) g.add(rod(edge[i], edge[i + 1], 0.06 - i * 0.007, 0.05 - i * 0.007, skin));
    for (const p of [el, wr]) g.add(ball(0.065, skin, p));
    const hip = V(s * 0.12, -0.04, -0.33), knee = V(s * 0.3, -0.1, -0.72), foot = V(s * 0.36, -0.13, -1.08);
    g.add(rod(hip, knee, 0.05, 0.04, skin));
    g.add(rod(knee, foot, 0.04, 0.025, skin));
    const trail = [tip, V(s * 2.45, -0.02, -0.78), V(s * 1.75, -0.05, -0.92), V(s * 1.0, -0.08, -1.0), foot, hip];
    const outline = [...edge, ...trail.slice(1), edge[0]];
    const c = V(s * 1.1, 0.02, -0.3);
    const pos = [];
    for (let i = 0; i < outline.length - 1; i++) pos.push(c.x, c.y, c.z, outline[i].x, outline[i].y, outline[i].z, outline[i + 1].x, outline[i + 1].y, outline[i + 1].z);
    const mg = new THREE.BufferGeometry();
    mg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    mg.computeVertexNormals();
    g.add(new THREE.Mesh(mg, wing));
  }
  g.add(rod(V(0, -0.01, -0.45), V(0, -0.03, -0.7), 0.035, 0.01, skin));
  return shadowAll(g, true, false);
}

// Cables from points on a hanging model up to the ceiling.
export function hangFrom(obj, ceilingY, points) {
  obj.updateMatrixWorld(true);
  const g = new THREE.Group();
  for (const p of points) {
    const w = obj.localToWorld(p.clone());
    g.add(rod(w, V(w.x, ceilingY, w.z), 0.008, 0.008, cable(), 4));
  }
  return g;
}

// ------------------------------------------------------------------ ceiling trusses (Dinosaur Hall)
export function makeTruss(len, depth = 1.2) {
  const g = new THREE.Group();
  const m = steel();
  g.add(box(len, 0.18, 0.22, m, 0, depth, 0));
  g.add(box(len, 0.16, 0.2, m, 0, 0, 0));
  const n = Math.round(len / 1.5);
  for (let i = 0; i <= n; i++) {
    const x = -len / 2 + (i * len) / n;
    g.add(rod(V(x, 0.08, 0), V(x, depth, 0), 0.04, 0.04, m, 5));
    if (i < n) {
      const x2 = -len / 2 + ((i + 1) * len) / n;
      g.add(i % 2 ? rod(V(x, 0.1, 0), V(x2, depth, 0), 0.035, 0.035, m, 5) : rod(V(x, depth, 0), V(x2, 0.1, 0), 0.035, 0.035, m, 5));
    }
  }
  return g;
}

// A pendant lamp on a rod: lit by day, nearly dark at night (it doesn't light anything: just glows).
export function makePendant(drop, on) {
  const g = new THREE.Group();
  g.add(rod(V(0, 0, 0), V(0, -drop, 0), 0.015, 0.015, MATS.brass(), 5));
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.16, 0.12, 12), MATS.brass());
  cap.position.y = -drop;
  g.add(cap);
  // (switched off at night: dark glass, so they don't float in the dark like little moons)
  const glass = new THREE.Mesh(new THREE.SphereGeometry(0.38, 12, 8), on
    ? mat('pendantOn', { color: 0xfff4dc, emissive: 0xffe2b0, emissiveIntensity: 1.3, roughness: 0.3 })
    : mat('pendantOff', { color: 0x3a3833, roughness: 0.25, metalness: 0.1 }));
  glass.position.y = -drop - 0.4;
  g.add(glass);
  return g;
}

// ------------------------------------------------------------------ fossil slabs (atlas of 8)
let fossilAtlas = null;
const FOSSILS = [
  ['KNIGHTIA', 'Fossil fish · 50 million years'],
  ['FERN FROND', 'Fossil plant · 300 million years'],
  ['TRILOBITE', 'Sea bug · 450 million years'],
  ['AMMONITE', 'Sea snail cousin · 150 million years'],
  ['RAPTOR CLAW', 'Velociraptor · 75 million years'],
  ['DRAGONFLY', 'Giant insect · 150 million years'],
  ['ARCHAEOPTERYX', 'Feathered dinosaur · 150 million years'],
  ['FOOTPRINT', 'Theropod track · 200 million years'],
];
function fossilMaterials() {
  if (fossilAtlas) return fossilAtlas;
  const [c, x] = makeCanvas(1024, 512);
  const r = mulberry32(77);
  for (let i = 0; i < 8; i++) {
    const cx = (i % 4) * 256, cy = Math.floor(i / 4) * 256;
    const g = x.createLinearGradient(cx, cy, cx + 256, cy + 256);
    g.addColorStop(0, '#cbbd9f'); g.addColorStop(1, '#a8987a');
    x.fillStyle = g; x.fillRect(cx, cy, 256, 256);
    for (let k = 0; k < 400; k++) { x.fillStyle = `rgba(${r() > 0.5 ? '255,250,235' : '60,45,30'},${r() * 0.12})`; x.fillRect(cx + r() * 256, cy + r() * 256, 1 + r() * 3, 1 + r() * 3); }
    x.save();
    x.translate(cx + 128, cy + 128);
    // draw twice: a light edge, then the dark imprint, so it looks pressed into the stone
    for (const [ox, col, lw] of [[2, 'rgba(240,230,205,0.7)', 1], [0, 'rgba(70,52,35,0.85)', 1]]) {
      x.save(); x.translate(ox, ox);
      x.strokeStyle = col; x.fillStyle = col; x.lineWidth = 3 * lw; x.lineCap = 'round';
      drawFossil(x, i);
      x.restore();
    }
    x.restore();
  }
  const map = canvasTexture(c);
  // labels
  const [lc, lx] = makeCanvas(1024, 256);
  FOSSILS.forEach(([t, s], i) => {
    const ox = (i % 4) * 256, oy = Math.floor(i / 4) * 128;
    lx.fillStyle = '#1c1a17'; lx.fillRect(ox, oy, 256, 128);
    lx.strokeStyle = '#c9a24a'; lx.lineWidth = 4; lx.strokeRect(ox + 6, oy + 6, 244, 116);
    lx.fillStyle = '#e9cf8a'; lx.font = 'bold 30px Georgia, serif'; lx.textAlign = 'center';
    lx.fillText(t, ox + 128, oy + 55, 230);
    lx.fillStyle = '#e9dfc8'; lx.font = '19px Georgia, serif';
    lx.fillText(s, ox + 128, oy + 92, 236);
  });
  fossilAtlas = {
    slab: new THREE.MeshStandardMaterial({ map, roughness: 0.85 }),
    label: new THREE.MeshStandardMaterial({ map: canvasTexture(lc), roughness: 0.6, emissive: 0xffffff, emissiveIntensity: 0.03 }),
  };
  fossilAtlas.slab.map.userData.keep = true;
  fossilAtlas.label.map.userData.keep = true;
  return fossilAtlas;
}

function drawFossil(x, i) {
  const line = (pts) => { x.beginPath(); pts.forEach(([a, b], k) => (k ? x.lineTo(a, b) : x.moveTo(a, b))); x.stroke(); };
  if (i === 0) { // fish
    x.beginPath(); x.ellipse(-10, 0, 70, 28, 0, 0, 7); x.stroke();
    line([[-80, 0], [60, 0]]);
    for (let k = -60; k < 50; k += 10) line([[k, -24 * Math.cos(k / 80)], [k + 6, 0], [k, 24 * Math.cos(k / 80)]]);
    line([[60, 0], [95, -26], [88, 0], [95, 26], [60, 0]]);
    x.beginPath(); x.arc(-62, -6, 5, 0, 7); x.fill();
  } else if (i === 1) { // fern
    line([[0, 100], [0, -100]]);
    for (let k = -90; k < 90; k += 12) { const l = 60 * (1 - Math.abs(k) / 110); line([[0, k], [-l, k - 14]]); line([[0, k], [l, k - 14]]); }
  } else if (i === 2) { // trilobite
    x.beginPath(); x.ellipse(0, 0, 50, 85, 0, 0, 7); x.stroke();
    x.beginPath(); x.ellipse(0, -62, 46, 26, 0, Math.PI, 0); x.stroke();
    line([[-16, -85], [-16, 80]]); line([[16, -85], [16, 80]]);
    for (let k = -40; k < 80; k += 11) line([[-48 * Math.sqrt(Math.max(0, 1 - (k / 85) ** 2)), k], [48 * Math.sqrt(Math.max(0, 1 - (k / 85) ** 2)), k]]);
  } else if (i === 3) { // ammonite
    x.beginPath();
    for (let a = 0; a < Math.PI * 7; a += 0.1) { const rr = 4 + (a / (Math.PI * 7)) * 92; x.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); }
    x.stroke();
    for (let a = 0.5; a < Math.PI * 7; a += 0.4) { const rr = 4 + (a / (Math.PI * 7)) * 92; line([[Math.cos(a) * rr * 0.72, Math.sin(a) * rr * 0.72], [Math.cos(a) * rr, Math.sin(a) * rr]]); }
  } else if (i === 4) { // claw
    x.lineWidth = 7;
    x.beginPath(); x.moveTo(-60, 70); x.quadraticCurveTo(-70, -60, 60, -85); x.quadraticCurveTo(-20, -30, -20, 70); x.stroke();
  } else if (i === 5) { // dragonfly
    line([[0, -80], [0, 90]]);
    for (const s of [-1, 1]) for (const y of [-40, -10]) { x.beginPath(); x.ellipse(s * 55, y, 52, 13, s * 0.1, 0, 7); x.stroke(); }
    x.beginPath(); x.arc(0, -84, 9, 0, 7); x.stroke();
  } else if (i === 6) { // archaeopteryx
    line([[-20, -70], [0, -30], [5, 30], [10, 95]]);
    x.beginPath(); x.arc(-26, -78, 12, 0, 7); x.stroke();
    for (const s of [-1, 1]) {
      line([[0, -20], [s * 45, -40], [s * 90, -20]]);
      for (let k = 0; k < 6; k++) line([[s * (40 + k * 9), -38 + k * 3], [s * (35 + k * 10), 10 + k * 4]]);
      line([[3, 30], [s * 25, 60], [s * 18, 92]]);
    }
    for (let k = -2; k <= 2; k++) line([[8, 60], [8 + k * 9, 110]]);
  } else { // footprint
    x.lineWidth = 6;
    x.beginPath(); x.ellipse(0, 40, 28, 34, 0, 0, 7); x.stroke();
    for (const [a, l] of [[-0.5, 80], [0, 95], [0.5, 80]]) { x.save(); x.rotate(a); x.beginPath(); x.ellipse(0, -l * 0.55, 14, l * 0.45, 0, 0, 7); x.stroke(); x.restore(); }
  }
}

export function makeFossilFrame(i) {
  const m = fossilMaterials();
  const g = new THREE.Group();
  g.add(box(1.0, 1.0, 0.06, MATS.darkWood(), 0, -0.5, -0.03));
  const slab = atlasPlane(0.88, 0.88, m.slab, 4, 2, i % 8);
  slab.position.z = 0.002;
  g.add(slab);
  const label = atlasPlane(0.6, 0.3, m.label, 4, 2, i % 8);
  label.position.set(0, -0.72, 0.002);
  g.add(label);
  return g;
}

// ------------------------------------------------------------------ Dinosaur Hall extras
export function makeTimeline() {
  const [c, x] = makeCanvas(2048, 256);
  const eras = [['TRIASSIC', '252 – 201 million years ago', '#7a4a2a', 0, 0.28], ['JURASSIC', '201 – 145', '#2f6b4a', 0.28, 0.6], ['CRETACEOUS', '145 – 66', '#2a4f7a', 0.6, 0.9], ['TODAY', '(you are here)', '#6b1f3a', 0.9, 1]];
  for (const [name, sub, col, a, b] of eras) {
    x.fillStyle = col; x.fillRect(a * 2048, 0, (b - a) * 2048, 256);
    x.fillStyle = 'rgba(255,255,255,0.08)'; x.fillRect(a * 2048, 0, (b - a) * 2048, 60);
    x.fillStyle = '#f3e6c4'; x.font = 'bold 46px Georgia, serif'; x.textAlign = 'left';
    x.fillText(name, a * 2048 + 18, 52);
    x.font = 'italic 24px Georgia, serif'; x.fillText(sub, a * 2048 + 20, 84);
  }
  // silhouettes walking along the bottom
  x.fillStyle = 'rgba(15,10,8,0.85)';
  const dino = (cx, s, kind) => {
    x.save(); x.translate(cx, 236); x.scale(s, s);
    x.beginPath();
    if (kind === 'long') { x.ellipse(0, -40, 60, 26, 0, 0, 7); x.moveTo(40, -50); x.quadraticCurveTo(90, -150, 110, -150); x.lineTo(115, -138); x.quadraticCurveTo(95, -130, 60, -40); x.moveTo(-50, -40); x.quadraticCurveTo(-130, -40, -160, -20); x.lineTo(-50, -30); for (const lx2 of [-35, -15, 20, 40]) x.rect(lx2, -25, 12, 25); }
    else if (kind === 'stego') { x.ellipse(0, -40, 55, 28, 0, 0, 7); for (let k = -40; k <= 40; k += 16) { x.moveTo(k - 8, -60); x.lineTo(k, -92); x.lineTo(k + 8, -60); } x.moveTo(50, -40); x.lineTo(80, -32); x.lineTo(78, -22); x.lineTo(45, -28); x.moveTo(-50, -40); x.lineTo(-110, -30); x.lineTo(-50, -30); for (const lx2 of [-35, -15, 15, 32]) x.rect(lx2, -22, 12, 22); }
    else if (kind === 'rex') { x.ellipse(0, -70, 50, 24, -0.15, 0, 7); x.ellipse(58, -98, 30, 18, 0, 0, 7); x.moveTo(-40, -70); x.lineTo(-130, -60); x.lineTo(-40, -58); x.rect(-10, -60, 14, 60); x.rect(14, -58, 14, 58); }
    else if (kind === 'tri') { x.ellipse(0, -38, 55, 28, 0, 0, 7); x.ellipse(58, -50, 26, 30, 0.4, 0, 7); x.moveTo(70, -60); x.lineTo(115, -70); x.lineTo(75, -52); x.moveTo(-50, -40); x.lineTo(-90, -30); x.lineTo(-50, -30); for (const lx2 of [-35, -15, 15, 32]) x.rect(lx2, -22, 12, 22); }
    else if (kind === 'ptero') { x.moveTo(-90, -150); x.lineTo(0, -130); x.lineTo(90, -150); x.lineTo(10, -120); x.lineTo(-10, -120); }
    else { x.ellipse(0, -60, 12, 30, 0, 0, 7); x.arc(0, -100, 12, 0, 7); x.rect(-10, -32, 7, 32); x.rect(3, -32, 7, 32); }
    x.fill(); x.restore();
  };
  dino(200, 0.7, 'long'); dino(430, 0.55, 'ptero'); dino(780, 0.8, 'long'); dino(1050, 0.75, 'stego'); dino(1360, 0.9, 'rex'); dino(1640, 0.75, 'tri'); dino(1500, 0.5, 'ptero');
  dino(1930, 0.9, 'you');
  x.fillStyle = '#f3e6c4'; x.font = 'bold 22px Georgia, serif'; x.textAlign = 'center'; x.fillText('(a guard)', 1930, 120);
  const g = new THREE.Group();
  g.add(box(14.2, 1.95, 0.05, MATS.darkWood(), 0, -0.975, -0.03));
  const p = new THREE.Mesh(new THREE.PlaneGeometry(14, 1.75), new THREE.MeshStandardMaterial({ map: canvasTexture(c), roughness: 0.7 }));
  p.position.z = 0.002;
  g.add(p);
  return g;
}

export function makeHeightChart() {
  const [c, x] = makeCanvas(256, 1152);
  x.fillStyle = '#f3e6c4'; x.fillRect(0, 0, 256, 1152);
  x.fillStyle = '#2a4f7a'; x.fillRect(0, 0, 256, 120);
  x.fillStyle = '#fff'; x.font = 'bold 34px Arial Black, Arial'; x.textAlign = 'center';
  x.fillText('HOW TALL', 128, 52); x.fillText('ARE YOU?', 128, 98);
  const px = (m) => 1152 - (m / 3.6) * 1152;
  x.fillStyle = '#2a1a12'; x.textAlign = 'left'; x.font = 'bold 18px Arial';
  for (let cm = 10; cm <= 330; cm += 10) { const y = px(cm / 100); x.fillRect(0, y - 1, cm % 50 ? 26 : 50, cm % 50 ? 2 : 4); if (cm % 50 === 0) x.fillText(`${cm / 100} m`, 56, y + 6); }
  const mark = (m, text, col) => { const y = px(m); x.fillStyle = col; x.fillRect(120, y - 3, 136, 6); x.font = 'bold 20px Arial'; x.fillText(text, 124, y - 10); };
  mark(0.6, 'Velociraptor', '#7a2a1a'); mark(1.3, 'Average kid', '#2f6b4a'); mark(1.8, 'Night guard', '#1b2440'); mark(2.9, 'T. rex hip (!)', '#7a2a1a');
  const g = new THREE.Group();
  g.add(box(0.86, 3.66, 0.05, MATS.darkWood(), 0, -1.83, -0.03));
  const p = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 3.6), new THREE.MeshStandardMaterial({ map: canvasTexture(c), roughness: 0.7 }));
  p.position.z = 0.002;
  g.add(p);
  return g;
}

// A sandbox with half-buried bones, brushes and a bucket.
export function makeDigSite(w = 4, d = 3.4) {
  const g = new THREE.Group();
  const wood = mat('digWood', { color: 0x8a6a40, roughness: 0.85 });
  for (const s of [-1, 1]) {
    g.add(box(w, 0.28, 0.14, wood, 0, 0, s * (d / 2 - 0.07)));
    g.add(box(0.14, 0.28, d - 0.28, wood, s * (w / 2 - 0.07), 0, 0));
  }
  const [c, x] = makeCanvas(256, 256);
  x.fillStyle = '#d8bf8a'; x.fillRect(0, 0, 256, 256);
  const r = mulberry32(31);
  for (let k = 0; k < 2500; k++) { x.fillStyle = `rgba(${r() > 0.5 ? '255,240,200' : '120,90,50'},${r() * 0.25})`; x.fillRect(r() * 256, r() * 256, 2, 2); }
  const sand = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.28, d - 0.28), new THREE.MeshStandardMaterial({ map: canvasTexture(c, { repeat: [2, 2] }), roughness: 1 }));
  sand.rotation.x = -Math.PI / 2;
  sand.position.y = 0.2;
  g.add(sand);
  const bone = mat('digBone', { color: 0xe3d6b8, roughness: 0.7 });
  for (const [x0, z0, a, l] of [[-0.9, -0.6, 0.4, 1.0], [0.6, 0.5, -0.9, 0.8], [1.2, -0.7, 1.4, 0.6], [-0.3, 0.8, 0.1, 0.5]]) {
    const b = new THREE.Group();
    b.add(rod(V(-l / 2, 0, 0), V(l / 2, 0, 0), 0.06, 0.05, bone));
    for (const s of [-1, 1]) { b.add(ball(0.08, bone, V(s * l / 2, 0, 0.03))); b.add(ball(0.08, bone, V(s * l / 2, 0, -0.03))); }
    b.position.set(x0, 0.2, z0);
    b.rotation.y = a;
    g.add(b);
  }
  const skull = makeTriceratopsSkull();
  skull.scale.setScalar(0.38);
  skull.position.set(-0.4, 0.05, -0.1);
  skull.rotation.set(0.25, 0.8, 0);
  g.add(skull);
  // tools
  const red = MATS.red();
  const bucket = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.12, 0.26, 12), mat('digBucket', { color: 0x2d6cc4, roughness: 0.5 }));
  bucket.position.set(1.4, 0.33, 1.1);
  g.add(bucket);
  for (const [bx, bz, a] of [[0.9, 1.15, 0.3], [-1.5, 1.2, -0.6]]) {
    const br = new THREE.Group();
    br.add(box(0.28, 0.025, 0.035, MATS.wood()));
    br.add(box(0.07, 0.05, 0.06, red, 0.17, 0, 0));
    br.position.set(bx, 0.21, bz);
    br.rotation.y = a;
    g.add(br);
  }
  return shadowAll(g, true, true);
}

// A cycad: a stubby trunk with a crown of long stiff fronds (dinosaur food).
export function makeCycad(seed = 1, h = 1.4) {
  const r = mulberry32(seed);
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.3, h, 10, 6), mat('cycadTrunk', { color: 0x6b5236, roughness: 0.95 }));
  trunk.position.y = h / 2 + 0.35;
  g.add(trunk);
  const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.36, 0.5, 14), mat('cycadPot', { color: 0x4a4038, roughness: 0.8 }));
  pot.position.y = 0.25;
  g.add(pot);
  const leaf = new THREE.Shape();
  leaf.moveTo(0, 0);
  for (let i = 0; i <= 12; i++) leaf.lineTo((i % 2 ? 0.16 : 0.05) * (1 - i / 13), i * 0.13);
  for (let i = 12; i >= 0; i--) leaf.lineTo(-(i % 2 ? 0.16 : 0.05) * (1 - i / 13), i * 0.13);
  const lg = new THREE.ShapeGeometry(leaf);
  const lm = mat('cycadLeaf', { color: 0x3d6b2a, roughness: 0.8, side: THREE.DoubleSide });
  for (let i = 0; i < 12; i++) {
    const l = new THREE.Mesh(lg, lm);
    l.position.y = h + 0.35;
    l.rotation.set(0, (i / 12) * Math.PI * 2 + r() * 0.3, 0);
    l.rotateX(-0.9 - r() * 0.5);
    l.scale.setScalar(0.85 + r() * 0.35);
    g.add(l);
  }
  return shadowAll(g, true, false);
}

// ------------------------------------------------------------------ lobby extras
export function makeGiftShelf(seed = 1) {
  const r = mulberry32(seed);
  const g = new THREE.Group();
  const w = 2.0, d = 0.5, H = 2.1;
  const wood = mat('shopWood', { color: 0xe9e2d4, roughness: 0.6 });
  g.add(box(w, H, 0.04, wood, 0, 0, -d / 2 + 0.02));
  for (const s of [-1, 1]) g.add(box(0.04, H, d, wood, s * (w / 2 - 0.02), 0, 0));
  const plush = [0x4f9a3a, 0xf28cb1, 0x7ad3ff, 0xffd34d];
  for (let k = 0; k < 4; k++) {
    const y = 0.15 + k * 0.5;
    g.add(box(w - 0.08, 0.03, d - 0.04, wood, 0, y, 0.01));
    let px = -w / 2 + 0.18;
    while (px < w / 2 - 0.18) {
      const kind = Math.floor(r() * 4);
      if (kind === 0) { // a plush dino
        const pm = mat('plush' + k, { color: plush[k], roughness: 0.95 });
        g.add(ball(0.11, pm, V(px, y + 0.13, 0), 1, 0.9, 1.3, 8));
        g.add(ball(0.07, pm, V(px, y + 0.27, 0.1), 1, 1, 1, 8));
        for (const ex of [-0.03, 0.03]) g.add(box(0.018, 0.018, 0.01, MATS.black(), px + ex, y + 0.28, 0.165));
        px += 0.3;
      } else if (kind === 1) { // a stack of books
        for (let b = 0; b < 3; b++) g.add(box(0.22, 0.05, 0.3, mat('book' + ((k + b) % 5), { color: [0x9c1c1c, 0x2a4f7a, 0x2f6b4a, 0xc9a24a, 0x6b3a7a][(k + b) % 5], roughness: 0.7 }), px, y + 0.03 + b * 0.05, 0));
        px += 0.3;
      } else if (kind === 2) { // mugs
        for (let b = 0; b < 2; b++) {
          const mug = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.1, 10), mat('shopMug' + b, { color: b ? 0x1b2440 : 0xffffff, roughness: 0.4 }));
          mug.position.set(px + b * 0.11, y + 0.08, 0.05);
          g.add(mug);
        }
        px += 0.3;
      } else { // a donut plush (of course)
        const dn = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.05, 6, 12), mat('plushDonut' + (k % 3), { color: [0xff7eb6, 0x6b3a1e, 0x7ad3ff][k % 3], roughness: 0.9 }));
        dn.rotation.x = Math.PI / 2;
        dn.position.set(px, y + 0.07, 0.02);
        g.add(dn);
        px += 0.28;
      }
    }
  }
  return shadowAll(g, true, true);
}

export function makeShopCounter() {
  const g = new THREE.Group();
  g.add(box(2.2, 1.0, 0.7, mat('counterFront', { color: 0x2a4f7a, roughness: 0.6 })));
  g.add(box(2.3, 0.05, 0.8, MATS.marble(), 0, 1.0, 0));
  const reg = new THREE.Group();
  reg.add(box(0.36, 0.14, 0.3, MATS.black()));
  const scr = box(0.3, 0.2, 0.02, mat('regScreen', { color: 0x223344, emissive: 0x66ccff, emissiveIntensity: 0.4 }), 0, 0.14, -0.08);
  scr.rotation.x = -0.3;
  reg.add(scr);
  reg.position.set(-0.5, 1.05, 0);
  g.add(reg);
  const jar = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.24, 12), MATS.glass());
  jar.position.set(0.5, 1.17, 0);
  g.add(jar);
  for (let i = 0; i < 6; i++) g.add(ball(0.025, mat('candy' + (i % 3), { color: [0xff4f9a, 0xffd34d, 0x7ad3ff][i % 3], roughness: 0.3 }), V(0.45 + (i % 3) * 0.04, 1.08 + Math.floor(i / 3) * 0.05, (i % 2) * 0.03)));
  return shadowAll(g, true, true);
}

export function makePostcardRack() {
  const g = new THREE.Group();
  g.add(rod(V(0, 0, 0), V(0, 1.7, 0), 0.025, 0.025, MATS.metal(), 6));
  g.add(new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.28, 0.04, 12), MATS.metal()));
  const cols = [0xf2b134, 0x4f7bd9, 0xe25555, 0x55a868, 0xf28cb1, 0xffffff];
  for (let k = 0; k < 4; k++) for (let j = 0; j < 4; j++) {
    const a = (k / 4) * Math.PI * 2;
    const card = box(0.16, 0.22, 0.01, mat('postcard' + ((k + j) % 6), { color: cols[(k + j) % 6], roughness: 0.6 }), Math.sin(a) * 0.12, 0.6 + j * 0.27, Math.cos(a) * 0.12);
    card.rotation.y = a;
    g.add(card);
  }
  return shadowAll(g, true, true);
}

export function makeDonationBox() {
  const g = new THREE.Group();
  g.add(box(0.45, 0.95, 0.45, MATS.darkWood()));
  const glass = box(0.42, 0.42, 0.42, MATS.glass(), 0, 0.95, 0);
  g.add(glass);
  for (let i = 0; i < 14; i++) g.add(box(0.07, 0.01, 0.035, mat('bill', { color: 0x7fb37a, roughness: 0.8 }), (i % 4) * 0.08 - 0.12, 0.96 + Math.floor(i / 4) * 0.012, ((i * 7) % 5) * 0.06 - 0.12));
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.2), new THREE.MeshStandardMaterial({ map: signTexture('DONATIONS\n(the T-Rex is hungry)', { w: 256, h: 122, bg: '#2a241c', fg: '#e9d7a8', font: 'bold 26px Georgia, serif' }) }));
  sign.position.set(0, 0.7, 0.228);
  g.add(sign);
  return shadowAll(g, true, true);
}

export function makeWetFloorSign() {
  const g = new THREE.Group();
  const m = new THREE.MeshStandardMaterial({ map: signTexture('⚠\nCAUTION\nWET FLOOR', { w: 128, h: 220, bg: '#ffd21f', fg: '#1a1a1a', font: 'bold 26px Arial Black, Arial' }), roughness: 0.5 });
  for (const s of [-1, 1]) {
    const p = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.62, 0.012), [m, m, m, m, m, m]);
    p.position.set(0, 0.3, s * 0.08);
    p.rotation.x = s * 0.26;
    g.add(p);
  }
  return shadowAll(g, true, true);
}

export function makeTrashBin() {
  const g = new THREE.Group();
  const b = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.18, 0.75, 14), mat('bin', { color: 0x3a3f46, roughness: 0.5, metalness: 0.4 }));
  b.position.y = 0.375;
  g.add(b);
  const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.05, 14), MATS.black());
  lid.position.y = 0.77;
  g.add(lid);
  return shadowAll(g, true, true);
}

export function makeWaterFountain() {
  const g = new THREE.Group();
  const st = mat('fountain', { color: 0xc8ccd2, roughness: 0.25, metalness: 0.7 });
  g.add(box(0.5, 0.2, 0.35, st, 0, 0.8, 0));
  const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.12, 0.08, 14, 1, true), st);
  bowl.position.set(0, 1.04, 0.02);
  g.add(bowl);
  g.add(box(0.06, 0.08, 0.06, MATS.metal(), 0.12, 1.0, 0.1));
  g.add(box(0.12, 0.8, 0.12, st, 0, 0, -0.1));
  return shadowAll(g, true, true);
}

// A framed painting from the shared portrait/landscape painter.
export function makePainting(seed, kind = 'portrait', w = 1.1) {
  const h = kind === 'portrait' ? w * 1.25 : w * 0.75;
  const g = new THREE.Group();
  const frame = mat('goldFrame', { color: 0xb08a3a, roughness: 0.35, metalness: 0.7 });
  g.add(box(w + 0.16, h + 0.16, 0.06, frame, 0, -(h + 0.16) / 2, -0.03));
  const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: paintingTexture(seed, kind), roughness: 0.7 }));
  p.position.z = 0.002;
  g.add(p);
  return g;
}

export function makeHangingSign(text, w = 2.6, h = 0.6, colors = ['#14100c', '#e9cf8a', '#c9a24a']) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: signTexture(text, { w: 1024, h: Math.round((1024 * h) / w), bg: colors[0], fg: colors[1], font: `bold ${Math.round((1024 * h) / w * 0.55)}px Georgia, serif`, border: colors[2] }), roughness: 0.5, emissive: 0xffffff, emissiveIntensity: 0.04 }));
  return m;
}

// ------------------------------------------------------------------ statues (people, carved in marble)
export function makeStatue(pose = 'point', seed = 1, tone = 0xece6da, name = '') {
  const r = mulberry32(seed);
  const p = makeNpc({ hairStyle: r() < 0.5 ? 'short' : 'long', sleeves: 'long', scale: 1.05 });
  p.setMode(pose);
  for (let i = 0; i < 30; i++) p.update(0.05);
  const marble = mat('statue' + tone, { color: tone, roughness: 0.4 });
  p.group.traverse((o) => { if (o.isMesh) o.material = marble; });
  // a golden laurel wreath
  const wreath = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.022, 6, 16), MATS.brass());
  wreath.rotation.x = Math.PI / 2 - 0.15;
  wreath.position.y = 0.2;
  p.head.add(wreath);
  // a toga: a wide drape around the body
  const toga = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.36, 1.0, 12, 1, true), marble);
  toga.position.y = 0.55;
  p.group.add(toga);
  const g = new THREE.Group();
  const ped = box(0.95, 0.9, 0.95, mat('statuePed', { color: 0xbfb6a6, roughness: 0.5 }));
  g.add(ped);
  p.group.position.y = 0.9;
  g.add(p.group);
  if (name) {
    const plate = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.22), new THREE.MeshStandardMaterial({ map: signTexture(name, { w: 320, h: 100, bg: '#2a241c', fg: '#e9d7a8', font: 'bold 28px Georgia, serif' }), roughness: 0.5 }));
    plate.position.set(0, 0.6, 0.478);
    g.add(plate);
  }
  return shadowAll(g, true, true);
}

// A Roman legionary on a stand: red tunic, bronze helmet, a big curved shield and a spear.
export function makeLegionary() {
  const p = makeNpc({ shirt: 0x9c1c1c, pants: 0x9c1c1c, skin: 0xd9b38c, hairStyle: 'short', sleeves: 'short' });
  const fresh = npcsAreNew(); // (the new heads and bodies are a bit rounder)
  p.update(0);
  const g = new THREE.Group();
  g.add(box(0.9, 0.12, 0.9, MATS.darkWood()));
  p.group.position.y = 0.12;
  g.add(p.group);
  const bronze = MATS.bronze();
  const helmet = new THREE.Mesh(new THREE.SphereGeometry(fresh ? 0.2 : 0.16, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), bronze);
  helmet.position.set(0, fresh ? 1.88 : 1.84, 0);
  g.add(helmet);
  const crest = box(0.04, 0.12, 0.3, MATS.red(), 0, fresh ? 2.11 : 1.98, 0);
  g.add(crest);
  g.add(fresh ? box(0.38, 0.32, 0.3, bronze, 0, 1.3, 0) : box(0.36, 0.3, 0.24, bronze, 0, 1.3, 0)); // breastplate
  // the scutum: a curved red shield with a golden boss
  const sg = new THREE.CylinderGeometry(0.75, 0.75, 1.05, 16, 1, true, -0.45, 0.9);
  const shield = new THREE.Mesh(sg, mat('scutum', { color: 0x8a1022, roughness: 0.6, side: THREE.DoubleSide }));
  shield.position.set(-0.3, 1.0, -0.42); // its curved face sits just in front of the left arm
  g.add(shield);
  const boss = ball(0.08, MATS.brass(), V(-0.3, 1.0, 0.34));
  g.add(boss);
  g.add(rod(V(0.32, 0.12, 0.1), V(0.32, 2.4, 0.1), 0.018, 0.018, MATS.darkWood(), 6));
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.22, 6), MATS.metal());
  tip.position.set(0.32, 2.5, 0.1);
  g.add(tip);
  return shadowAll(g, true, true);
}

// The Colosseum, in a case.
export function makeColosseum() {
  const g = new THREE.Group();
  const [c, x] = makeCanvas(512, 128);
  x.fillStyle = '#d9c7a4'; x.fillRect(0, 0, 512, 128);
  for (let row = 0; row < 3; row++) for (let i = 0; i < 16; i++) {
    x.fillStyle = '#3a2a1a';
    x.beginPath(); const ax = i * 32 + 16, ay = 18 + row * 38;
    x.moveTo(ax - 9, ay + 30); x.lineTo(ax - 9, ay + 10); x.arc(ax, ay + 10, 9, Math.PI, 0); x.lineTo(ax + 9, ay + 30); x.fill();
  }
  const wallM = new THREE.MeshStandardMaterial({ map: canvasTexture(c, { repeat: [2, 1] }), roughness: 0.8, side: THREE.DoubleSide });
  const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.32, 32, 1, true), wallM);
  ring.scale.set(1, 1, 0.8);
  ring.position.y = 0.16;
  g.add(ring);
  const inner = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.32, 0.22, 32, 1, true), mat('colInner', { color: 0xc9b38a, roughness: 0.9, side: THREE.DoubleSide }));
  inner.scale.set(1, 1, 0.8);
  inner.position.y = 0.13;
  g.add(inner);
  const arena = new THREE.Mesh(new THREE.CircleGeometry(0.3, 24), mat('arena', { color: 0xe3cf9c, roughness: 1 }));
  arena.rotation.x = -Math.PI / 2;
  arena.scale.set(1, 0.8, 1);
  arena.position.y = 0.03;
  g.add(arena);
  return g;
}

export function makeCoins() {
  const g = new THREE.Group();
  const r = mulberry32(9);
  for (let i = 0; i < 18; i++) {
    const c = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.008, 12), i % 3 ? MATS.brass() : mat('silver', { color: 0xc8ccd2, roughness: 0.3, metalness: 0.9 }));
    c.position.set((r() - 0.5) * 0.7, 0.02, (r() - 0.5) * 0.35);
    c.rotation.set((r() - 0.5) * 0.3, 0, (r() - 0.5) * 0.3);
    g.add(c);
  }
  return g;
}

// A low, flat display case (a table with a glass top).
export function makeFlatCase(w = 1.2, d = 0.7, inner = null) {
  const g = new THREE.Group();
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(box(0.05, 0.85, 0.05, MATS.darkWood(), sx * (w / 2 - 0.05), 0, sz * (d / 2 - 0.05)));
  g.add(box(w, 0.08, d, MATS.darkWood(), 0, 0.85, 0));
  const glass = box(w, 0.22, d, MATS.glass(), 0, 0.93, 0);
  g.add(glass);
  if (inner) { inner.position.y = 0.94; g.add(inner); }
  shadowAll(g, true, true);
  glass.castShadow = false;
  return g;
}

export function makeCandelabrum(lit) {
  const g = new THREE.Group();
  const b = MATS.bronze();
  g.add(new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 0.08, 10), b));
  g.add(rod(V(0, 0.04, 0), V(0, 1.75, 0), 0.03, 0.025, b, 8));
  for (const y of [0.6, 1.2]) { const k = ball(0.05, b, V(0, y, 0)); g.add(k); }
  const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.08, 0.12, 12), b);
  bowl.position.y = 1.8;
  g.add(bowl);
  if (lit) {
    const f = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.24, 8), mat('candleFlame', { color: 0xffb050, emissive: 0xff8a20, emissiveIntensity: 2.2 }));
    f.position.y = 1.98;
    g.add(f);
  }
  return shadowAll(g, true, false);
}

// ------------------------------------------------------------------ Egyptian Wing extras
export function makeCatStatue() {
  const g = new THREE.Group();
  const basalt = mat('catBasalt', { color: 0x1b1a1f, roughness: 0.35, metalness: 0.2 });
  const gold = MATS.brass();
  g.add(box(0.55, 0.5, 0.75, mat('catPed', { color: 0xc8a978, roughness: 0.85 })));
  g.add(ball(0.2, basalt, V(0, 0.82, -0.05), 1, 1.5, 1.1));
  g.add(ball(0.12, basalt, V(0, 1.18, 0.06), 1, 1.05, 1.05));
  for (const s of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.12, 4), basalt);
    ear.position.set(s * 0.065, 1.3, 0.04);
    g.add(ear);
    g.add(rod(V(s * 0.07, 0.52, 0.12), V(s * 0.07, 0.8, 0.08), 0.035, 0.03, basalt, 6));
    g.add(ball(0.012, gold, V(s * 0.04, 1.2, 0.165)));
  }
  g.add(rod(V(0, 0.55, -0.25), V(0.18, 0.52, 0.12), 0.03, 0.025, basalt, 6));
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.018, 6, 14), gold);
  collar.rotation.x = Math.PI / 2;
  collar.position.y = 1.05;
  g.add(collar);
  return shadowAll(g, true, true);
}

export function makeSphinx() {
  const g = new THREE.Group();
  const sand = mat('sphinx', { color: 0xd2b07a, roughness: 0.85 });
  const nemes = mat('nemes', { color: 0x2a4f9a, roughness: 0.6 });
  g.add(box(1.1, 0.25, 2.3, mat('sphinxBase', { color: 0x9a7f58, roughness: 0.9 })));
  g.add(box(0.8, 0.55, 1.5, sand, 0, 0.25, -0.25));
  for (const s of [-1, 1]) g.add(box(0.22, 0.22, 0.95, sand, s * 0.25, 0.25, 0.75));
  g.add(box(0.5, 0.65, 0.5, sand, 0, 0.6, 0.35));
  const head = new THREE.Group();
  head.position.set(0, 1.35, 0.45);
  g.add(head);
  head.add(box(0.36, 0.42, 0.36, sand, 0, -0.21, 0));
  head.add(box(0.5, 0.36, 0.34, nemes, 0, -0.12, -0.06));
  for (const s of [-1, 1]) head.add(box(0.12, 0.42, 0.12, nemes, s * 0.24, -0.5, 0.02));
  head.add(box(0.06, 0.18, 0.04, sand, 0, -0.3, 0.2));
  return shadowAll(g, true, true);
}

export function makePapyrus() {
  const [c, x] = makeCanvas(512, 192);
  x.fillStyle = '#e3d0a0'; x.fillRect(0, 0, 512, 192);
  const r = mulberry32(5);
  for (let k = 0; k < 40; k++) { x.strokeStyle = `rgba(150,120,70,${r() * 0.2})`; x.beginPath(); const y = r() * 192; x.moveTo(0, y); x.lineTo(512, y + (r() - 0.5) * 6); x.stroke(); }
  const keys = ['bird', 'eye', 'water', 'sun', 'feather', 'ankh', 'snake', 'scarab'];
  for (let col = 0; col < 12; col++) for (let row = 0; row < 3; row++) drawGlyph(x, keys[(col * 3 + row) % keys.length], 24 + col * 40, 34 + row * 58, 34, row === 1 ? '#8a2a18' : '#1d1d1d');
  const sheet = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 0.375), new THREE.MeshStandardMaterial({ map: canvasTexture(c), roughness: 0.9 }));
  sheet.rotation.x = -Math.PI / 2;
  sheet.position.y = 0.01;
  const g = new THREE.Group();
  g.add(sheet);
  return g;
}

export function makeBoatModel() {
  const g = new THREE.Group();
  const wood = mat('boatWood', { color: 0x8a5a33, roughness: 0.7 });
  const hull = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.3, 12, 1, false, 0, Math.PI), wood);
  hull.rotation.set(Math.PI / 2, 0, Math.PI);
  hull.scale.set(1.4, 1, 1);
  hull.position.y = 0.14;
  g.add(hull);
  for (const s of [-1, 1]) {
    const end = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.3, 6), wood);
    end.position.set(0, 0.24, s * 0.72);
    end.rotation.x = s * -0.6;
    g.add(end);
  }
  g.add(rod(V(0, 0.14, 0), V(0, 0.75, 0), 0.012, 0.01, wood, 5));
  const sail = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.45), mat('sail', { color: 0xefe6cf, roughness: 0.9, side: THREE.DoubleSide }));
  sail.position.set(0, 0.5, 0);
  sail.rotation.y = Math.PI / 2;
  g.add(sail);
  return g;
}

export function makePapyrusPlant(seed = 1) {
  const r = mulberry32(seed);
  const g = new THREE.Group();
  const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.24, 0.45, 12), MATS.terracotta());
  pot.position.y = 0.22;
  g.add(pot);
  const stem = mat('papyrusStem', { color: 0x4f7a2a, roughness: 0.8 });
  const head = mat('papyrusHead', { color: 0x6b9a35, roughness: 0.8 });
  for (let i = 0; i < 9; i++) {
    const a = r() * Math.PI * 2, lean = 0.1 + r() * 0.25, hgt = 1.1 + r() * 0.7;
    const top = V(Math.cos(a) * lean * hgt, 0.42 + hgt, Math.sin(a) * lean * hgt);
    g.add(rod(V(Math.cos(a) * 0.05, 0.42, Math.sin(a) * 0.05), top, 0.012, 0.01, stem, 4));
    const tuft = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.2, 8, 1, true), head);
    tuft.position.copy(top).add(V(0, 0.06, 0));
    tuft.rotation.x = Math.PI;
    g.add(tuft);
  }
  return shadowAll(g, true, false);
}

// ------------------------------------------------------------------ security office extras
export function makeFilingCabinet() {
  const g = new THREE.Group();
  const m = mat('cabinet', { color: 0x6b7480, roughness: 0.5, metalness: 0.5 });
  g.add(box(0.5, 1.32, 0.62, m));
  for (let i = 0; i < 4; i++) {
    g.add(box(0.44, 0.02, 0.01, mat('cabinetLine', { color: 0x3a4048, roughness: 0.5 }), 0, 0.31 + i * 0.32, 0.311));
    g.add(box(0.14, 0.03, 0.03, MATS.metal(), 0, 0.18 + i * 0.32, 0.32));
  }
  return shadowAll(g, true, true);
}

export function makeWaterCooler() {
  const g = new THREE.Group();
  g.add(box(0.36, 1.0, 0.36, mat('coolerBody', { color: 0xe8e8e8, roughness: 0.5 })));
  const jug = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.42, 14), mat('jug', { color: 0x8fd0ff, roughness: 0.1, transparent: true, opacity: 0.55 }));
  jug.position.y = 1.22;
  g.add(jug);
  g.add(box(0.06, 0.05, 0.05, mat('tapBlue', { color: 0x2d6cc4 }), -0.08, 0.72, 0.19));
  g.add(box(0.06, 0.05, 0.05, MATS.red(), 0.08, 0.72, 0.19));
  return shadowAll(g, true, true);
}

export function makeCoffeeStation() {
  const g = new THREE.Group();
  g.add(box(0.9, 0.9, 0.45, MATS.darkWood()));
  const maker = new THREE.Group();
  maker.add(box(0.26, 0.36, 0.24, MATS.black()));
  const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.14, 12), mat('coffeePot', { color: 0x3a1f10, roughness: 0.2, transparent: true, opacity: 0.85 }));
  pot.position.set(0, 0.08, 0.06);
  maker.add(pot);
  maker.position.set(-0.22, 0.9, 0);
  g.add(maker);
  for (let i = 0; i < 3; i++) {
    const mug = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.035, 0.09, 10), mat('mug' + i, { color: [0xffffff, 0x9c1c1c, 0x2a4f7a][i], roughness: 0.4 }));
    mug.position.set(0.12 + i * 0.1, 0.945, 0.05 - i * 0.04);
    g.add(mug);
  }
  // an empty donut box. (Who did this.)
  const dbox = box(0.3, 0.05, 0.22, mat('emptyBox', { color: 0xf7a8c8, roughness: 0.8 }), 0.25, 0.9, -0.08);
  g.add(dbox);
  return shadowAll(g, true, true);
}

function boardTexture(lines, { w = 512, h = 352, bg = '#fafafa', fg = '#1a2a6a', title = '', titleCol = '#c81e1e', notes = false, font = '28px "Comic Sans MS", "Chalkboard SE", cursive' } = {}) {
  const [c, x] = makeCanvas(w, h);
  x.fillStyle = bg; x.fillRect(0, 0, w, h);
  if (notes) {
    const r = mulberry32(4);
    const cols = ['#fff27a', '#ff9ec7', '#9ee6ff', '#b6ff9e'];
    for (let i = 0; i < lines.length; i++) {
      const nx = 20 + (i % 3) * 165, ny = 22 + Math.floor(i / 3) * 160;
      x.save(); x.translate(nx + 70, ny + 65); x.rotate((r() - 0.5) * 0.2);
      x.fillStyle = cols[i % 4]; x.fillRect(-70, -65, 140, 130);
      x.fillStyle = '#c81e1e'; x.beginPath(); x.arc(0, -55, 6, 0, 7); x.fill();
      x.fillStyle = '#222'; x.font = 'bold 19px "Comic Sans MS", cursive'; x.textAlign = 'center';
      String(lines[i]).split('\n').forEach((ln, k) => x.fillText(ln, 0, -18 + k * 24));
      x.restore();
    }
  } else {
    if (title) { x.fillStyle = titleCol; x.font = 'bold 32px "Comic Sans MS", cursive'; x.fillText(title, 24, 46); }
    x.fillStyle = fg; x.font = font;
    lines.forEach((ln, i) => x.fillText(ln, 28, (title ? 96 : 52) + i * 44));
  }
  return canvasTexture(c);
}

export function makeBulletinBoard() {
  const g = new THREE.Group();
  g.add(box(1.7, 1.08, 0.04, MATS.darkWood(), 0, -0.54, -0.02));
  const p = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.0), new THREE.MeshStandardMaterial({ map: boardTexture(['DON\'T\nFEED THE\nT-REX', 'PIZZA\nFRIDAY?\n(no)', 'WHO ATE\nMY DONUT', 'AARON:\nEMPLOYEE\nOF THE YEAR', 'CALL MOM', 'PASSWORD\nHINT:\n???'], { w: 544, h: 340, bg: '#b48a5a', notes: true }), roughness: 0.9 }));
  p.position.z = 0.002;
  g.add(p);
  return g;
}

export function makeWhiteboard() {
  const g = new THREE.Group();
  g.add(box(1.06, 0.78, 0.03, MATS.metal(), 0, -0.39, -0.015));
  const p = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 0.72), new THREE.MeshStandardMaterial({ map: boardTexture(['1. Stay awake', '2. Do NOT eat the donuts', '3. Check the T-Rex (still dead?)', '4. ???'], { title: 'NIGHT SHIFT CHECKLIST' }), roughness: 0.3 }));
  p.position.z = 0.002;
  g.add(p);
  return g;
}

export function makeIncidentSign() {
  const g = new THREE.Group();
  const m = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.7), new THREE.MeshStandardMaterial({ map: signTexture('DAYS WITHOUT A\nDINOSAUR\nINCIDENT:\n0', { w: 330, h: 210, bg: '#f2f2f2', fg: '#1a6b2a', font: 'bold 30px Arial Black, Arial', border: '#1a6b2a' }), roughness: 0.6 }));
  g.add(m);
  return g;
}
