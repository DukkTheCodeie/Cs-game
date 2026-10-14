import * as THREE from 'three';
import { damp } from '../core/util.js';
import { batchJoints, bakeColors } from './batch.js';

// The classic people (the look before v0.7.0): the guard, Aaron, visitors, the mummy and the statues. Picked
// with the "Characters" setting (see cast.js); people.js has the new look.

const matCache = new Map();
function mat(color, rough = 0.8) {
  const k = color + ':' + rough;
  if (!matCache.has(k)) matCache.set(k, new THREE.MeshStandardMaterial({ color, roughness: rough }));
  return matCache.get(k);
}
const G = {};
const geo = (k, f) => G[k] || (G[k] = f());

function m(g, material) {
  const o = new THREE.Mesh(g, material);
  o.castShadow = true;
  return o;
}

export class Person {
  constructor(opts = {}) {
    const o = (this.opts = {
      shirt: 0x7fa6d9, pants: 0x1d2a44, skin: 0xe0b18f, hair: 0x2b1d14, shoes: 0x151515,
      cap: false, badge: false, hairStyle: 'short', scale: 1, nameTag: null, eyeMat: null, ...opts,
    });
    this.group = new THREE.Group();
    const root = (this.root = new THREE.Group());
    root.scale.setScalar(o.scale);
    this.group.add(root);

    const hips = (this.hips = new THREE.Group());
    hips.position.y = 0.92;
    root.add(hips);
    const pelvis = m(geo('pelvis', () => new THREE.BoxGeometry(0.34, 0.2, 0.21)), mat(o.pants));
    hips.add(pelvis);

    const torso = (this.torso = new THREE.Group());
    torso.position.y = 0.08;
    hips.add(torso);
    const chest = m(geo('chest', () => new THREE.CapsuleGeometry(0.18, 0.3, 4, 10)), mat(o.shirt));
    chest.scale.set(1.05, 1, 0.72);
    chest.position.y = 0.27;
    torso.add(chest);
    const belt = m(geo('belt', () => new THREE.BoxGeometry(0.36, 0.06, 0.24)), mat(0x111111, 0.5));
    belt.position.y = 0.02;
    torso.add(belt);
    if (o.badge) {
      const b = m(geo('badge', () => new THREE.BoxGeometry(0.06, 0.07, 0.02)), new THREE.MeshStandardMaterial({ color: 0xffd34d, metalness: 0.8, roughness: 0.3 }));
      b.position.set(-0.09, 0.38, 0.135);
      torso.add(b);
      const radio = m(geo('radio', () => new THREE.BoxGeometry(0.05, 0.1, 0.03)), mat(0x222222));
      radio.position.set(0.1, 0.4, 0.13);
      torso.add(radio);
    }
    if (o.nameTag) {
      const t = m(geo('tag', () => new THREE.BoxGeometry(0.09, 0.035, 0.01)), mat(0xffffff));
      t.position.set(0.09, 0.4, 0.135);
      torso.add(t);
    }
    const neck = m(geo('neck', () => new THREE.CylinderGeometry(0.055, 0.06, 0.1, 8)), mat(o.skin));
    neck.position.y = 0.6;
    torso.add(neck);

    const head = (this.head = new THREE.Group());
    head.position.y = 0.64;
    torso.add(head);
    const skull = m(geo('head', () => new THREE.SphereGeometry(0.135, 16, 12)), mat(o.skin));
    skull.scale.set(0.95, 1.08, 1);
    skull.position.y = 0.12;
    head.add(skull);
    const eyeG = geo('eye', () => new THREE.SphereGeometry(0.018, 8, 6));
    for (const s of [-1, 1]) {
      const e = m(eyeG, o.eyeMat || mat(0x111111, 0.3));
      e.position.set(s * 0.048, 0.14, 0.122);
      head.add(e);
    }
    const nose = m(geo('nose', () => new THREE.SphereGeometry(0.022, 8, 6)), mat(o.skin));
    nose.position.set(0, 0.1, 0.135);
    head.add(nose);
    this.mouth = m(geo('mouth', () => new THREE.BoxGeometry(0.05, 0.012, 0.01)), mat(0x5a2a2a));
    this.mouth.position.set(0, 0.055, 0.125);
    head.add(this.mouth);
    if (o.hairStyle !== 'bald') {
      const hair = m(geo('hair', () => new THREE.SphereGeometry(0.145, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.55)), mat(o.hair));
      hair.position.set(0, 0.13, -0.012);
      head.add(hair);
      if (o.hairStyle === 'long') {
        const back = m(geo('hairlong', () => new THREE.BoxGeometry(0.26, 0.28, 0.08)), mat(o.hair));
        back.position.set(0, 0.0, -0.09);
        head.add(back);
      }
    }
    if (o.cap) {
      const capMat = mat(0x1b2440, 0.7);
      const crown = m(geo('cap', () => new THREE.SphereGeometry(0.148, 16, 8, 0, Math.PI * 2, 0, Math.PI * 0.5)), capMat);
      crown.scale.set(1.04, 0.62, 1.08);
      crown.position.y = 0.19;
      head.add(crown);
      const band = m(geo('capband', () => new THREE.CylinderGeometry(0.152, 0.152, 0.035, 16)), mat(0x0e1326, 0.6));
      band.position.y = 0.19;
      head.add(band);
      const brim = m(geo('brim', () => new THREE.CylinderGeometry(0.11, 0.11, 0.014, 16, 1, false, -Math.PI / 2, Math.PI)), capMat);
      brim.scale.set(1.1, 1, 1.2);
      brim.position.set(0, 0.185, 0.12);
      brim.rotation.x = 0.12;
      head.add(brim);
      const cb = m(geo('capbadge', () => new THREE.BoxGeometry(0.045, 0.035, 0.01)), new THREE.MeshStandardMaterial({ color: 0xffd34d, metalness: 0.8, roughness: 0.3 }));
      cb.position.set(0, 0.235, 0.152);
      head.add(cb);
      this.cap = { crown, brim, cb };
    }

    const armG = geo('arm', () => new THREE.CapsuleGeometry(0.058, 0.2, 4, 8));
    const foreG = geo('fore', () => new THREE.CapsuleGeometry(0.052, 0.19, 4, 8));
    const handG = geo('hand', () => new THREE.SphereGeometry(0.055, 8, 6));
    this.arms = [-1, 1].map((s) => {
      const sh = new THREE.Group();
      sh.position.set(s * 0.235, 0.5, 0);
      torso.add(sh);
      const up = m(armG, mat(o.shirt));
      up.position.y = -0.14;
      sh.add(up);
      const el = new THREE.Group();
      el.position.y = -0.29;
      sh.add(el);
      const fo = m(foreG, mat(o.sleeves === 'short' ? o.skin : o.shirt));
      fo.position.y = -0.13;
      el.add(fo);
      const hand = new THREE.Group();
      hand.position.y = -0.28;
      el.add(hand);
      hand.add(m(handG, mat(o.skin)));
      return { sh, el, hand, side: s };
    });
    const thighG = geo('thigh', () => new THREE.CapsuleGeometry(0.075, 0.3, 4, 8));
    const shinG = geo('shin', () => new THREE.CapsuleGeometry(0.066, 0.3, 4, 8));
    const footG = geo('foot', () => new THREE.BoxGeometry(0.11, 0.07, 0.25));
    this.legs = [-1, 1].map((s) => {
      const hip = new THREE.Group();
      hip.position.set(s * 0.095, -0.06, 0);
      hips.add(hip);
      const th = m(thighG, mat(o.pants));
      th.position.y = -0.21;
      hip.add(th);
      const knee = new THREE.Group();
      knee.position.y = -0.42;
      hip.add(knee);
      const sh = m(shinG, mat(o.pants));
      sh.position.y = -0.2;
      knee.add(sh);
      const ft = m(footG, mat(o.shoes, 0.5));
      ft.position.set(0, -0.42, 0.05);
      knee.add(ft);
      return { hip, knee, side: s };
    });

    this.anim = { mode: 'idle', phase: 0, speed: 0, time: 0, talk: 0, sit: 0, blend: {} };
    // every plain-colored part shares one material (the color goes into the mesh), so each joint is one
    // draw call; only the talking mouth stays separate (and glowing eyes, which aren't plain). The hands
    // never bend on their own, so they're merged into the forearms.
    bakeColors(root, (x) => x === this.mouth, { single: true });
    batchJoints([hips, torso, head, ...this.arms.flatMap((a) => [a.sh, a.el]), ...this.legs.flatMap((l) => [l.hip, l.knee])], [this.mouth]);
    this.update(0);
  }

  attachToHand(obj, side = 1) {
    const arm = this.arms.find((a) => a.side === side);
    arm.hand.add(obj);
    return obj;
  }

  setMode(mode, speed = 0) {
    this.anim.mode = mode;
    this.anim.speed = speed;
  }

  update(dt) {
    const a = this.anim;
    a.time += dt;
    const t = a.time;
    const mode = a.mode;
    let freq = 0;
    if (mode === 'walk' || mode === 'zombie') freq = a.speed / 1.5;
    if (mode === 'run') freq = a.speed / 3.2;
    a.phase += freq * Math.PI * 2 * dt;
    const ph = a.phase;
    const target = {
      hipsY: 0.92, hipsRX: 0, torsoRX: 0, headRX: 0, headRY: 0,
      legs: [[0, 0], [0, 0]], arms: [[0, 0.15, 0], [0, 0.15, 0]],
    };
    if (mode === 'idle') {
      target.hipsY = 0.92 + Math.sin(t * 2) * 0.005;
      target.headRY = Math.sin(t * 0.5) * 0.15;
      target.arms = [[0.05, -0.15, 0.1], [0.05, -0.15, -0.1]];
    } else if (mode === 'walk') {
      const s = Math.sin(ph);
      target.legs = [[-0.5 * s, Math.max(0, -Math.cos(ph)) * 0.7], [0.5 * s, Math.max(0, Math.cos(ph)) * 0.7]];
      target.arms = [[0.4 * s, -0.2, 0.08], [-0.4 * s, -0.2, -0.08]];
      target.hipsY = 0.92 - Math.abs(Math.cos(ph)) * 0.03;
    } else if (mode === 'run') {
      const s = Math.sin(ph);
      target.legs = [[-0.95 * s, 0.4 + Math.max(0, -Math.cos(ph)) * 1.3], [0.95 * s, 0.4 + Math.max(0, Math.cos(ph)) * 1.3]];
      target.arms = [[0.9 * s, -1.3, 0.1], [-0.9 * s, -1.3, -0.1]];
      target.torsoRX = 0.25;
      target.hipsY = 0.9 - Math.abs(Math.cos(ph)) * 0.08;
    } else if (mode === 'jump') {
      target.legs = [[-0.9, 1.4], [-0.3, 0.9]];
      target.arms = [[-2.6, -0.3, 0.3], [-2.6, -0.3, -0.3]];
      target.torsoRX = 0.1;
    } else if (mode === 'slide') {
      target.hipsY = 0.35;
      target.hipsRX = -1.15;
      target.legs = [[-0.4, 0.2], [-0.2, 0.6]];
      target.arms = [[-1.6, -0.3, 0.3], [-1.6, -0.3, -0.3]];
      target.torsoRX = 0.1;
      target.headRX = 0.7;
    } else if (mode === 'sit' || mode === 'eat' || mode === 'type') {
      target.hipsY = 0.55;
      target.legs = [[-1.57, 1.57], [-1.57, 1.57]];
      target.torsoRX = 0.08;
      target.arms = [[-0.7, -0.8, 0.1], [-0.7, -0.8, -0.1]];
      if (mode === 'eat') {
        const k = (Math.sin(t * 2.2) + 1) / 2;
        target.arms[1] = [-0.4 - 1.5 * k, -1.2 - 0.9 * k, -0.25 * k];
        target.headRX = 0.1 * k;
      }
      if (mode === 'type') {
        target.arms[0] = [-0.9 + Math.sin(t * 18) * 0.05, -0.7, 0.15];
        target.arms[1] = [-0.9 + Math.sin(t * 15 + 1) * 0.05, -0.7, -0.15];
        target.headRX = 0.12;
      }
    } else if (mode === 'sleep') {
      target.hipsY = 0.55;
      target.legs = [[-1.4, 1.5], [-1.5, 1.4]];
      target.torsoRX = 0.5;
      target.headRX = 0.6;
      target.arms = [[-0.2, -0.3, 0.2], [-0.2, -0.3, -0.2]];
    } else if (mode === 'shock') {
      target.arms = [[-2.8, -0.3, 0.4], [-2.8, -0.3, -0.4]];
      target.headRX = -0.15;
      target.hipsY = 0.92 + Math.abs(Math.sin(t * 20)) * 0.02;
    } else if (mode === 'point') {
      target.arms[1] = [-1.55, 0, 0];
      target.headRY = 0.1;
    } else if (mode === 'shrug') {
      target.arms = [[-0.2, -1.6, 0.6], [-0.2, -1.6, -0.6]];
      target.headRX = -0.1;
    } else if (mode === 'zombie') {
      // the classic mummy shuffle: stiff little steps, arms straight out
      const s = Math.sin(ph);
      target.legs = [[-0.25 * s, 0.1], [0.25 * s, 0.1]];
      target.arms = [[-1.5 + 0.05 * s, -0.05, 0.08], [-1.5 - 0.05 * s, -0.05, -0.08]];
      target.torsoRX = 0.06;
      target.headRY = Math.sin(t * 1.3) * 0.12;
      target.hipsY = 0.92 - Math.abs(s) * 0.02;
    } else if (mode === 'liesit') {
      // lying in a sarcophagus (sit = 0) → sitting up (sit = 1); the caller tilts the body
      const k = a.sit;
      target.legs = [[-1.55 * k, 0.05 * k], [-1.55 * k, 0.05 * k]];
      target.arms = [[-1.5 * k, -1.9 * (1 - k), 0.35 * (1 - k)], [-1.5 * k, -1.9 * (1 - k), -0.35 * (1 - k)]];
      target.headRX = 0.1 * (1 - k);
    } else if (mode === 'munch') {
      const k = (Math.sin(t * 9) + 1) / 2;
      target.arms[1] = [-0.6 - 1.1 * k, -1.6 - 0.4 * k, -0.25];
      target.arms[0] = [-0.2, -0.4, 0.1];
      target.headRX = 0.12 * k;
    } else if (mode === 'wave') {
      target.arms[1] = [-2.7, -0.3, -0.5 + Math.sin(t * 10) * 0.45];
      target.arms[0] = [0.05, -0.15, 0.1];
      target.headRY = 0.15;
      target.hipsY = 0.92 + Math.abs(Math.sin(t * 6)) * 0.04;
    } else if (mode === 'sad') {
      target.headRX = 0.45;
      target.torsoRX = 0.15;
      target.arms = [[0.1, -0.1, 0.05], [0.1, -0.1, -0.05]];
    }
    const k = dt ? 1 - Math.exp(-14 * dt) : 1;
    const L = (obj, prop, v) => { obj[prop] += (v - obj[prop]) * k; };
    L(this.hips.position, 'y', target.hipsY);
    L(this.hips.rotation, 'x', target.hipsRX);
    L(this.torso.rotation, 'x', target.torsoRX);
    L(this.head.rotation, 'x', target.headRX);
    L(this.head.rotation, 'y', target.headRY);
    this.legs.forEach((leg, i) => {
      L(leg.hip.rotation, 'x', target.legs[i][0]);
      L(leg.knee.rotation, 'x', target.legs[i][1]);
    });
    this.arms.forEach((arm, i) => {
      L(arm.sh.rotation, 'x', target.arms[i][0]);
      L(arm.el.rotation, 'x', target.arms[i][1]);
      L(arm.sh.rotation, 'z', target.arms[i][2] + arm.side * 0.08);
    });
    // talking mouth
    if (a.talk > 0) {
      a.talk -= dt;
      this.mouth.scale.y = 1 + Math.abs(Math.sin(t * 22)) * 5;
    } else this.mouth.scale.y = damp(this.mouth.scale.y, 1, 10, dt || 1);
  }
}

export const makeGuard = (extra = {}) =>
  new Person({ shirt: 0x8fb3e0, pants: 0x1b2440, cap: true, badge: true, hair: 0x3a2412, ...extra });

const SHIRTS = [0xe25555, 0x55a868, 0xf2b134, 0x8c6bd6, 0x2bb3b3, 0xf28cb1, 0xffffff, 0x333333, 0xff8a3d, 0x4f7bd9];
const PANTS = [0x2b3a55, 0x333333, 0x6b5a48, 0x1d1d1d, 0x4a6fa5];
const SKINS = [0xf1c7a4, 0xe0b18f, 0xc68e64, 0x8d5a3b, 0x5c3a24, 0xf7d9c0];
const HAIRS = [0x2b1d14, 0x111111, 0x8b5a2b, 0xd9b26a, 0x6b3b1f, 0x999999];

export function makeVisitor(r = Math.random) {
  const pickR = (arr) => arr[Math.floor(r() * arr.length)];
  const kid = r() < 0.35;
  const scale = kid ? 0.62 + r() * 0.12 : 0.95 + r() * 0.1;
  const p = new Person({
    shirt: pickR(SHIRTS), pants: pickR(PANTS), skin: pickR(SKINS), hair: pickR(HAIRS),
    hairStyle: r() < 0.4 ? 'long' : r() < 0.1 ? 'bald' : 'short',
    sleeves: r() < 0.5 ? 'short' : 'long',
    scale,
  });
  p.kid = kid;
  p.height = 1.75 * scale;
  return p;
}

// THE MUMMY. Wrapped head to toe, glowing eyes, very into donuts.
function bandageTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const x = c.getContext('2d');
  x.fillStyle = '#cdbf9c';
  x.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 400; i++) { x.fillStyle = `rgba(70,50,25,${Math.random() * 0.16})`; x.fillRect(Math.random() * 128, Math.random() * 128, 2, 2); }
  // overlapping wraps: a shadow line under each one, a lighter edge on top
  for (let y = -128; y < 256; y += 14) {
    x.strokeStyle = 'rgba(80,60,30,0.75)';
    x.lineWidth = 3;
    x.beginPath(); x.moveTo(0, y); x.lineTo(128, y + 34); x.stroke();
    x.strokeStyle = 'rgba(255,250,235,0.35)';
    x.lineWidth = 2;
    x.beginPath(); x.moveTo(0, y + 4); x.lineTo(128, y + 38); x.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(2, 2);
  return t;
}

export function makeMummy() {
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0xfff6b0, emissive: 0xffe066, emissiveIntensity: 3 });
  const p = new Person({ shirt: 0xe3d8bc, pants: 0xd8ccae, skin: 0xe6dcc2, hair: 0xd8ccae, shoes: 0xd2c6a8, hairStyle: 'bald', eyeMat });
  const wrap = new THREE.MeshStandardMaterial({ map: bandageTexture(), color: 0xc9bea6, roughness: 1 });
  p.group.traverse((o) => {
    if (!o.isMesh || o === p.mouth || o.material === eyeMat) return;
    o.material = wrap;
  });
  p.mouth.visible = false;
  // a dark gap in the wraps around the eyes, and a loose bandage end
  const gap = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.06, 0.03), new THREE.MeshStandardMaterial({ color: 0x1a120a, roughness: 1 }));
  gap.position.set(0, 0.14, 0.112);
  p.head.add(gap);
  const tail = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.32, 0.01), wrap);
  tail.position.set(0.1, -0.05, -0.14);
  tail.rotation.set(0.3, 0, -0.25);
  p.head.add(tail);
  return p;
}
