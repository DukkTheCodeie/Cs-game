import * as THREE from 'three';
import { tex } from './textures.js';
import { damp } from '../core/util.js';

// A fully procedural, animated T-Rex skeleton. Local space: +z = forward (head), y = up.

let MATS = null;
export function trexMats() {
  if (MATS) return MATS;
  MATS = {
    bone: new THREE.MeshStandardMaterial({ color: 0xe6dcc4, roughness: 0.72, map: tex('bone', 1, 2) }),
    dark: new THREE.MeshStandardMaterial({ color: 0x15100c, roughness: 1 }),
    tooth: new THREE.MeshStandardMaterial({ color: 0xf6f0de, roughness: 0.35 }),
    eye: new THREE.MeshStandardMaterial({ color: 0xff3010, emissive: 0xff2a00, emissiveIntensity: 5 }),
  };
  return MATS;
}

const GEO = {};
function geo(key, fn) {
  return GEO[key] || (GEO[key] = fn());
}

function taperedBox(w, h, len, fx, fy, topDrop = 0) {
  const g = new THREE.BoxGeometry(w, h, len, 6, 6, 10);
  g.translate(0, 0, len / 2);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    // round the square cross-section into a superellipse so it reads as bone, not a box
    const nx = p.getX(i) / (w / 2), ny = p.getY(i) / (h / 2);
    const r = Math.pow(Math.pow(Math.abs(nx), 2.6) + Math.pow(Math.abs(ny), 2.6), 1 / 2.6);
    if (r > 1e-6) {
      const k = Math.max(Math.abs(nx), Math.abs(ny)) / r;
      p.setX(i, p.getX(i) * k);
      p.setY(i, p.getY(i) * k);
    }
    const t = p.getZ(i) / len;
    p.setX(i, p.getX(i) * (1 + (fx - 1) * t));
    let y = p.getY(i) * (1 + (fy - 1) * t);
    if (y > 0) y -= topDrop * t * t;
    p.setY(i, y);
  }
  g.computeVertexNormals();
  return g;
}

function mesh(g, m, shadow = true) {
  const o = new THREE.Mesh(g, m);
  o.castShadow = shadow;
  o.receiveShadow = false;
  return o;
}

// A limb bone hanging from the origin down -y.
function bone(len, r1, r2, m) {
  const grp = new THREE.Group();
  const shaft = mesh(geo(`shaft${len}${r1}${r2}`, () => new THREE.CylinderGeometry(r2, r1, len, 8)), m);
  shaft.position.y = -len / 2;
  grp.add(shaft);
  const k1 = mesh(geo(`knob${r1}`, () => new THREE.SphereGeometry(r1 * 1.35, 10, 8)), m);
  grp.add(k1);
  const k2 = mesh(geo(`knob${r2}`, () => new THREE.SphereGeometry(r2 * 1.35, 10, 8)), m);
  k2.position.y = -len;
  grp.add(k2);
  return grp;
}

function vertebra(s, m) {
  const grp = new THREE.Group();
  const c = mesh(geo('vcent', () => new THREE.SphereGeometry(0.13, 10, 8)), m);
  c.scale.set(1, 0.85, 1.25);
  grp.add(c);
  const sp = mesh(geo('vspine', () => new THREE.BoxGeometry(0.05, 0.34, 0.11)), m);
  sp.position.y = 0.2;
  grp.add(sp);
  const tr = mesh(geo('vtrans', () => new THREE.BoxGeometry(0.42, 0.05, 0.07)), m);
  tr.position.y = 0.05;
  grp.add(tr);
  grp.scale.setScalar(s);
  return grp;
}

export function buildSkull(m = trexMats()) {
  const head = new THREE.Group();
  const L = 1.65;
  const skull = mesh(geo('skull', () => taperedBox(0.62, 0.72, L, 0.55, 0.62, 0.12)), m.bone);
  skull.position.z = -0.1;
  head.add(skull);
  const crest = mesh(geo('crest', () => taperedBox(0.46, 0.16, 1.0, 0.5, 0.6)), m.bone);
  crest.position.set(0, 0.36, -0.08);
  head.add(crest);
  const sph = geo('sph', () => new THREE.SphereGeometry(0.12, 10, 8));
  const eyes = [];
  for (const s of [-1, 1]) {
    const sock = mesh(sph, m.dark, false);
    sock.position.set(s * 0.25, 0.16, 0.36);
    sock.scale.set(0.7, 0.95, 1.1);
    head.add(sock);
    const eye = new THREE.Mesh(geo('eye', () => new THREE.SphereGeometry(0.06, 10, 8)), m.eye);
    eye.position.set(s * 0.29, 0.16, 0.39);
    eye.visible = false;
    head.add(eye);
    eyes.push(eye);
    const fen = mesh(sph, m.dark, false);
    fen.position.set(s * 0.2, 0.0, 0.88);
    fen.scale.set(0.55, 0.75, 1.9);
    head.add(fen);
    const nos = mesh(sph, m.dark, false);
    nos.position.set(s * 0.08, 0.1, 1.46);
    nos.scale.set(0.35, 0.3, 0.45);
    head.add(nos);
    const cheek = mesh(sph, m.bone);
    cheek.position.set(s * 0.3, -0.18, 0.05);
    cheek.scale.set(0.8, 1.2, 1.4);
    head.add(cheek);
  }
  const toothGeo = geo('tooth', () => {
    const g = new THREE.ConeGeometry(0.035, 0.17, 6);
    g.rotateX(Math.PI);
    return g;
  });
  for (const s of [-1, 1]) {
    for (let i = 0; i < 10; i++) {
      const z = 0.3 + i * 0.125;
      const t = (z + 0.1) / L;
      const tooth = mesh(toothGeo, m.tooth, false);
      tooth.position.set(s * (0.31 * (1 - 0.45 * t) - 0.035), -0.36 * (1 - 0.38 * t) - 0.06, z);
      tooth.scale.setScalar(i < 2 || i > 7 ? 0.75 : 1.05);
      head.add(tooth);
    }
  }
  const jaw = new THREE.Group();
  jaw.position.set(0, -0.2, -0.05);
  head.add(jaw);
  const jm = mesh(geo('jaw', () => taperedBox(0.56, 0.2, 1.55, 0.5, 0.8)), m.bone);
  jm.position.set(0, -0.27, 0);
  jaw.add(jm);
  for (const s of [-1, 1]) {
    for (let i = 0; i < 9; i++) {
      const z = 0.35 + i * 0.125;
      const t = z / 1.55;
      const tooth = mesh(toothGeo, m.tooth, false);
      tooth.rotation.x = Math.PI;
      tooth.position.set(s * (0.28 * (1 - 0.5 * t) - 0.04), -0.27 + 0.1 * (1 - 0.2 * t) + 0.06, z);
      tooth.scale.setScalar(0.85);
      jaw.add(tooth);
    }
  }
  return { head, jaw, eyes };
}

export class TRex {
  constructor({ eyeLight = true } = {}) {
    const m = trexMats();
    this.group = new THREE.Group();
    this.body = new THREE.Group();
    this.body.position.y = 3.42;
    this.group.add(this.body);
    this.alive = false;

    const pelvis = mesh(geo('pelvis', () => new THREE.SphereGeometry(0.45, 14, 10)), m.bone);
    pelvis.scale.set(0.9, 0.75, 1.45);
    pelvis.position.z = 0.05;
    this.body.add(pelvis);
    for (const s of [-1, 1]) {
      const il = mesh(geo('ilium', () => new THREE.SphereGeometry(0.5, 12, 10)), m.bone);
      il.scale.set(0.14, 0.55, 1.35);
      il.position.set(s * 0.26, 0.14, 0.05);
      this.body.add(il);
      const pub = mesh(geo('pubis', () => new THREE.CylinderGeometry(0.05, 0.08, 1.0, 6)), m.bone);
      pub.position.set(s * 0.15, -0.55, 0.35);
      pub.rotation.x = 0.5;
      this.body.add(pub);
    }

    // spine (hips → shoulders)
    const spinePts = [];
    for (let i = 0; i < 11; i++) {
      const t = i / 10;
      const z = -0.25 + t * 3.0;
      const y = 0.38 + Math.sin(t * Math.PI) * 0.1 + t * 0.32;
      spinePts.push([z, y]);
      const v = vertebra(1.05 - 0.15 * t, m.bone);
      v.position.set(0, y, z);
      v.rotation.x = -0.1;
      this.body.add(v);
    }
    // ribs
    const ribArc = Math.PI * 2 - 0.9;
    for (let i = 0; i < 9; i++) {
      const t = i / 8;
      const z = 0.3 + t * 2.3;
      const y = 0.38 + Math.sin(((z + 0.25) / 3) * Math.PI) * 0.1 + ((z + 0.25) / 3) * 0.32;
      const r = 0.48 + 0.34 * Math.sin((0.15 + t * 0.75) * Math.PI);
      const g = geo(`rib${i}`, () => new THREE.TorusGeometry(r, 0.04, 6, 22, ribArc));
      const rib = mesh(g, m.bone);
      rib.rotation.order = 'XYZ';
      rib.rotation.x = 0.38;
      rib.rotation.z = Math.PI / 2 + 0.45;
      rib.scale.set(0.58, 1.12, 1);
      rib.position.set(0, y - r * 1.05 + 0.05, z - 0.15);
      this.body.add(rib);
    }
    // neck
    const neckFrom = new THREE.Vector3(0, 0.86, 2.85), neckTo = new THREE.Vector3(0, 1.55, 3.42);
    for (let i = 0; i < 5; i++) {
      const p = neckFrom.clone().lerp(neckTo, i / 4);
      const v = vertebra(0.95, m.bone);
      v.position.copy(p);
      v.rotation.x = -0.9;
      this.body.add(v);
    }
    this.headPivot = new THREE.Group();
    this.headPivot.position.set(0, 1.72, 3.5);
    this.body.add(this.headPivot);
    const sk = buildSkull(m);
    this.headPivot.add(sk.head);
    this.jaw = sk.jaw;
    this.eyes = sk.eyes;
    this.eyeLight = null;
    if (eyeLight) {
      this.eyeLight = new THREE.PointLight(0xff2a00, 0, 9, 1.6);
      this.eyeLight.position.set(0, 0.2, 0.9);
      sk.head.add(this.eyeLight);
    }

    // tiny arms (two fingers each — a clue!)
    this.arms = [];
    for (const s of [-1, 1]) {
      const sh = new THREE.Group();
      sh.position.set(s * 0.5, 0.15, 2.45);
      sh.rotation.set(-0.6, 0, s * 0.2);
      this.body.add(sh);
      sh.add(bone(0.45, 0.05, 0.04, m.bone));
      const el = new THREE.Group();
      el.position.y = -0.45;
      el.rotation.x = -1.1;
      sh.add(el);
      el.add(bone(0.36, 0.04, 0.035, m.bone));
      for (const f of [-1, 1]) {
        const fin = bone(0.14, 0.02, 0.015, m.bone);
        fin.position.set(f * 0.03, -0.36, 0);
        fin.rotation.x = -0.6;
        el.add(fin);
      }
      this.arms.push(sh);
    }

    // tail chain
    this.tail = [];
    let parent = this.body;
    for (let i = 0; i < 14; i++) {
      const seg = new THREE.Group();
      if (i === 0) seg.position.set(0, 0.32, -0.5);
      else seg.position.set(0, 0, -0.5 * (1 - i * 0.03));
      parent.add(seg);
      const v = vertebra(1 - i * 0.062, m.bone);
      seg.add(v);
      if (i < 9) {
        const chev = mesh(geo('chev', () => new THREE.BoxGeometry(0.04, 0.32, 0.08)), m.bone);
        chev.position.y = -0.2 * (1 - i * 0.08);
        chev.rotation.x = -0.4;
        seg.add(chev);
      }
      this.tail.push(seg);
      parent = seg;
    }

    // legs
    this.legs = [-1, 1].map((s) => this._leg(s, m));

    this.anim = {
      mode: 'pose', phase: 0, speed: 0, roar: 0, roarT: 0,
      headYaw: 0.28, headPitch: 0.05, jaw: 0.28, targetYaw: 0.28, targetPitch: 0.05,
      breathe: 0, time: 0, lean: 0,
    };
    this.applyPose(0);
  }

  _leg(s, m) {
    const hip = new THREE.Group();
    hip.position.set(s * 0.44, -0.05, 0.15);
    this.body.add(hip);
    const thigh = bone(1.45, 0.2, 0.12, m.bone);
    hip.add(thigh);
    const knee = new THREE.Group();
    knee.position.y = -1.45;
    hip.add(knee);
    knee.add(bone(1.55, 0.12, 0.075, m.bone));
    const fib = bone(1.4, 0.04, 0.03, m.bone);
    fib.position.set(0, -0.05, -0.1);
    knee.add(fib);
    const ankle = new THREE.Group();
    ankle.position.y = -1.55;
    knee.add(ankle);
    ankle.add(bone(0.8, 0.08, 0.07, m.bone));
    const foot = new THREE.Group();
    foot.position.y = -0.8;
    ankle.add(foot);
    for (const tx of [-0.13, 0, 0.13]) {
      const toe = new THREE.Group();
      toe.position.set(tx, -0.04, 0);
      toe.rotation.set(Math.PI / 2 + 0.1, tx * -1.6, 0);
      toe.rotation.order = 'YXZ';
      foot.add(toe);
      toe.add(bone(tx === 0 ? 0.55 : 0.45, 0.05, 0.035, m.bone));
      const claw = mesh(geo('claw', () => new THREE.ConeGeometry(0.035, 0.14, 5)), m.tooth, false);
      claw.position.y = tx === 0 ? -0.6 : -0.5;
      claw.rotation.x = Math.PI;
      toe.add(claw);
    }
    return { hip, knee, ankle, foot, side: s };
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
    const local = this.group.worldToLocal(worldPos.clone());
    const hp = new THREE.Vector3(0, 5.3, 3.5);
    const d = local.sub(hp);
    this.anim.targetYaw = Math.max(-0.8, Math.min(0.8, Math.atan2(d.x, d.z)));
    this.anim.targetPitch = Math.max(-0.4, Math.min(0.6, -Math.atan2(d.y, Math.hypot(d.x, d.z))));
  }

  update(dt) {
    this.anim.time += dt;
    this.applyPose(dt);
  }

  applyPose(dt) {
    const a = this.anim;
    const mode = a.mode;
    let hipAmp = 0, kneeAmp = 0, bob = 0, lean = 0, tailSway = 0, freq = 0;
    if (mode === 'walk') { freq = a.speed / 3.6; hipAmp = 0.45; kneeAmp = 0.55; bob = 0.12; lean = 0.04; tailSway = 0.06; }
    else if (mode === 'run') { freq = a.speed / 6.5; hipAmp = 0.7; kneeAmp = 0.9; bob = 0.22; lean = 0.16; tailSway = 0.04; }
    a.phase += freq * Math.PI * 2 * dt;
    const ph = a.phase;

    for (const leg of this.legs) {
      const p = ph + (leg.side > 0 ? Math.PI : 0);
      const swing = Math.max(0, Math.cos(p));
      const hip = -0.5 - hipAmp * Math.sin(p);
      const knee = 1.1 + kneeAmp * swing;
      const ankle = -0.95 - kneeAmp * 0.6 * swing;
      leg.hip.rotation.x = hip - lean;
      leg.knee.rotation.x = knee;
      leg.ankle.rotation.x = ankle;
      leg.foot.rotation.x = -(hip - lean + knee + ankle);
    }
    a.lean = dt ? damp(a.lean, lean, 4, dt) : lean;
    this.body.rotation.x = a.lean;
    let by = 3.42 - bob * Math.abs(Math.sin(ph));
    if (this.alive && mode === 'idle') by += Math.sin(a.time * 1.6) * 0.04;
    this.body.position.y = by;

    // tail
    const curl = mode === 'pose' ? 0.05 : 0;
    this.tail.forEach((seg, i) => {
      seg.rotation.y = tailSway * Math.sin(ph + i * 0.45) + curl * (i > 6 ? 1 : 0.3) + (this.alive && mode === 'idle' ? Math.sin(a.time * 0.9 + i * 0.3) * 0.03 : 0);
      seg.rotation.x = i < 5 ? 0.035 : -0.018;
    });

    // head
    let targetJaw = mode === 'pose' ? 0.28 : 0.1;
    let pitch = a.targetPitch, yaw = a.targetYaw;
    if (mode === 'run') { pitch = 0.15 + Math.sin(ph * 2) * 0.05; yaw = 0; targetJaw = 0.35 + Math.max(0, Math.sin(ph)) * 0.2; }
    if (mode === 'walk') pitch += Math.sin(ph * 2) * 0.04;
    if (this.alive && mode === 'idle') { targetJaw = 0.12 + Math.max(0, Math.sin(a.time * 0.8)) * 0.1; }
    if (a.roar > 0) {
      a.roarT += dt;
      const k = a.roarT / a.roar;
      if (k >= 1) a.roar = 0;
      else {
        const env = k < 0.15 ? k / 0.15 : k > 0.8 ? (1 - k) / 0.2 : 1;
        pitch = -0.45 * env + (1 - env) * pitch;
        targetJaw = 0.95 * env + Math.sin(a.roarT * 40) * 0.05 * env;
        yaw += Math.sin(a.roarT * 9) * 0.08 * env;
      }
    }
    if (dt) {
      a.headYaw = damp(a.headYaw, yaw, 6, dt);
      a.headPitch = damp(a.headPitch, pitch, a.roar > 0 ? 10 : 5, dt);
      a.jaw = damp(a.jaw, targetJaw, 14, dt);
    } else {
      a.headYaw = yaw; a.headPitch = pitch; a.jaw = targetJaw;
    }
    this.headPivot.rotation.set(a.headPitch, a.headYaw, 0, 'YXZ');
    this.jaw.rotation.x = a.jaw;
    for (const arm of this.arms) arm.rotation.x = -0.6 + Math.sin(ph * 2) * (mode === 'run' ? 0.3 : 0.05);
  }
}
