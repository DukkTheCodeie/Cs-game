import * as THREE from 'three';
import { damp } from '../core/util.js';

// Low-poly people: the guard (you!), Aaron, and museum visitors.

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
      cap: false, badge: false, hairStyle: 'short', scale: 1, nameTag: null, ...opts,
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
      const e = m(eyeG, mat(0x111111, 0.3));
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
      const crown = m(geo('cap', () => new THREE.CylinderGeometry(0.135, 0.15, 0.1, 14)), capMat);
      crown.position.y = 0.25;
      head.add(crown);
      const brim = m(geo('brim', () => new THREE.BoxGeometry(0.2, 0.015, 0.13)), capMat);
      brim.position.set(0, 0.205, 0.17);
      head.add(brim);
      const cb = m(geo('capbadge', () => new THREE.BoxGeometry(0.05, 0.04, 0.01)), new THREE.MeshStandardMaterial({ color: 0xffd34d, metalness: 0.8, roughness: 0.3 }));
      cb.position.set(0, 0.26, 0.142);
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

    this.anim = { mode: 'idle', phase: 0, speed: 0, time: 0, talk: 0, blend: {} };
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
    if (mode === 'walk') freq = a.speed / 1.5;
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
  return new Person({
    shirt: pickR(SHIRTS), pants: pickR(PANTS), skin: pickR(SKINS), hair: pickR(HAIRS),
    hairStyle: r() < 0.4 ? 'long' : r() < 0.1 ? 'bald' : 'short',
    sleeves: r() < 0.5 ? 'short' : 'long',
    scale: kid ? 0.62 + r() * 0.12 : 0.95 + r() * 0.1,
  });
}
