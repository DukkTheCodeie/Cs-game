import * as THREE from 'three';
import { clamp, damp, rand } from '../core/util.js';
import { makeFlashlightModel } from '../world/props.js';

export class Player {
  constructor(game) {
    this.game = game;
    this.camera = game.camera;
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.yaw = 0;
    this.pitch = 0;
    this.height = 1.65;
    this.radius = 0.32;
    this.enabled = false;
    this.lookEnabled = true;
    this.bobT = 0;
    this.stepAcc = 0;
    this.sprinting = false;
    this.speedMul = 1;
    this.eyeOffset = 0; // for crouch/wake-up animations

    // flashlight
    const spot = (this.spot = new THREE.SpotLight(0xfff1d6, 0, 36, 0.48, 0.6, 1.2));
    // (it shines from the flashlight in your hand at whatever's in the middle of the screen: applyCamera)
    spot.position.set(0.2, -0.2, -0.6);
    spot.target.position.set(0, 0, -8);
    spot.castShadow = true;
    spot.shadow.mapSize.set(1024, 1024);
    spot.shadow.bias = -0.0004;
    spot.shadow.normalBias = 0.02;
    spot.shadow.camera.near = 0.3;
    spot.shadow.camera.far = 34;
    this.camera.add(spot, spot.target);
    // faint fill so the beam's surroundings aren't pitch black
    this.fill = new THREE.PointLight(0xffe6c0, 0, 7, 2);
    this.fill.position.set(0, 0, -3);
    this.camera.add(this.fill);
    this.flModel = makeFlashlightModel();
    this.flModel.scale.setScalar(0.7);
    this.flModel.position.set(0.24, -0.22, -0.45);
    this.camera.add(this.flModel);
    this.flModel.visible = false;
    this._makeDust();
    this._makeShaft();
    this.flashOn = false;
    this.hasFlashlight = false;
    this.flickerT = 0;
    this.baseIntensity = 32;
    this.nearDim = 1; // dims the beam when you're right up against something (so you can read it)
    this.aimDist = 8; // how far away the thing in the middle of the screen is (the beam aims there)
    this.lens = new THREE.Vector3(0.2, -0.2, -0.6);
    this.swayX = 0;
    this.swayY = 0;
  }

  // Dust motes floating inside the flashlight beam.
  _makeDust() {
    const N = 140;
    const pos = new Float32Array(N * 3);
    this.dustSeed = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      this.dustSeed[i * 3] = Math.random();
      this.dustSeed[i * 3 + 1] = Math.random();
      this.dustSeed[i * 3 + 2] = Math.random();
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const c = document.createElement('canvas');
    c.width = c.height = 32;
    const x = c.getContext('2d');
    const gr = x.createRadialGradient(16, 16, 0, 16, 16, 16);
    gr.addColorStop(0, 'rgba(255,240,210,1)');
    gr.addColorStop(1, 'rgba(255,240,210,0)');
    x.fillStyle = gr;
    x.fillRect(0, 0, 32, 32);
    const mat = new THREE.PointsMaterial({ size: 0.014, map: new THREE.CanvasTexture(c), transparent: true, opacity: 0.32, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true });
    this.dust = new THREE.Points(geo, mat);
    this.dust.frustumCulled = false;
    this.dust.visible = false;
    this.camera.add(this.dust);
    this.dustT = 0;
  }

  // A faint shaft of light from the lens to the spot, so you can see where the beam comes from.
  _makeShaft() {
    const c = document.createElement('canvas');
    c.width = 4; c.height = 64;
    const x = c.getContext('2d');
    const gr = x.createLinearGradient(0, 0, 0, 64);
    gr.addColorStop(0, '#fff');
    gr.addColorStop(0.35, '#777');
    gr.addColorStop(1, '#000');
    x.fillStyle = gr;
    x.fillRect(0, 0, 4, 64);
    // a cone along -y, from the tip (lens) at 0 to a 1-wide end at -1
    const geo = new THREE.CylinderGeometry(0.03, 1, 1, 20, 1, true).translate(0, -0.5, 0);
    const mat = new THREE.MeshBasicMaterial({ color: 0xfff1d6, alphaMap: new THREE.CanvasTexture(c), transparent: true, opacity: 0.07, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
    this.shaft = new THREE.Mesh(geo, mat);
    this.shaft.frustumCulled = false;
    this.shaft.visible = false;
    this.camera.add(this.shaft);
    this._down = new THREE.Vector3(0, -1, 0);
    this._dir = new THREE.Vector3();
  }

  updateDust(dt) {
    const on = this.flashOn && this.flModel.visible && ['explore', 'cutscene', 'puzzle'].includes(this.game.mode);
    this.dust.visible = on;
    this.shaft.visible = on;
    if (on) {
      // from the lens to the middle of the screen, as wide as the beam
      const len = Math.min(this.aimDist, 7);
      this._dir.set(-this.lens.x, -this.lens.y, -this.aimDist - this.lens.z).normalize();
      this.shaft.position.copy(this.lens);
      this.shaft.quaternion.setFromUnitVectors(this._down, this._dir);
      const r = len * 0.32;
      this.shaft.scale.set(r, len, r);
      this.shaft.material.opacity = 0.07 * this.nearDim * (this.spot.intensity > 0 ? 1 : 0);
    }
    if (!on) return;
    this.dustT += dt;
    const p = this.dust.geometry.attributes.position;
    const sd = this.dustSeed, t = this.dustT;
    for (let i = 0; i < p.count; i++) {
      const a = sd[i * 3], b = sd[i * 3 + 1], c = sd[i * 3 + 2];
      // depth cycles slowly toward the camera so motes drift through the beam
      const z = -0.6 - ((c * 7 + t * 0.12 * (0.5 + a)) % 7);
      const r = Math.tan(0.4) * -z * Math.sqrt(b);
      const ang = a * Math.PI * 2 + t * 0.15 * (b - 0.5);
      const k = Math.max(0, 1 + z / this.aimDist); // (the beam's axis, from the lens to the middle of the screen)
      p.setXYZ(i, this.lens.x * k + Math.cos(ang) * r + Math.sin(t * 0.7 + i) * 0.03, this.lens.y * k + Math.sin(ang) * r * 0.9 + Math.cos(t * 0.5 + i * 1.3) * 0.03, z);
    }
    p.needsUpdate = true;
  }

  setPose(x, z, yaw, pitch = 0) {
    this.pos.set(x, 0, z);
    this.vel.set(0, 0, 0);
    this.yaw = yaw;
    this.pitch = pitch;
    this.applyCamera(0);
  }

  // Yaw so the camera looks toward a world point.
  faceToward(x, z) {
    this.yaw = Math.atan2(-(x - this.pos.x), -(z - this.pos.z));
  }

  giveFlashlight(on = true) {
    this.hasFlashlight = true;
    this.flModel.visible = true;
    this.setFlash(on);
  }

  setFlash(on) {
    if (!this.hasFlashlight) on = false;
    this.flashOn = on;
    this.spot.intensity = on ? this.baseIntensity * this.nearDim : 0;
    this.fill.intensity = on ? 0.5 : 0;
    this.flModel.userData.lens.material.color.set(on ? 0xfff6dc : 0x333333);
  }

  flicker(duration = 1.2) {
    this.flickerT = duration;
  }

  // How far the flashlight beam travels before it hits a wall, a display or the floor (up to `max`).
  beamDistance(colliders, max = 3) {
    const f = this.forward();
    const ox = this.pos.x, oz = this.pos.z, oy = this.height + this.eyeOffset;
    let best = f.y < -0.05 ? Math.min(max, oy / -f.y) : max;
    if (colliders) {
      for (const b of colliders) {
        if (!b.enabled) continue;
        // ray vs. box (the boxes are walls and furniture: a floor plan, plus how tall each one is)
        let t0 = 0, t1 = best;
        if (Math.abs(f.x) < 1e-6) { if (ox < b.minX || ox > b.maxX) continue; } else {
          let a = (b.minX - ox) / f.x, c = (b.maxX - ox) / f.x;
          if (a > c) [a, c] = [c, a];
          t0 = Math.max(t0, a); t1 = Math.min(t1, c);
        }
        if (Math.abs(f.z) < 1e-6) { if (oz < b.minZ || oz > b.maxZ) continue; } else {
          let a = (b.minZ - oz) / f.z, c = (b.maxZ - oz) / f.z;
          if (a > c) [a, c] = [c, a];
          t0 = Math.max(t0, a); t1 = Math.min(t1, c);
        }
        // ...and only up to how tall the thing is (you can shine over a bench)
        const top = b.top ?? Infinity;
        if (Math.abs(f.y) < 1e-6) { if (oy > top) continue; } else {
          let a = -oy / f.y, c = (top - oy) / f.y;
          if (a > c) [a, c] = [c, a];
          t0 = Math.max(t0, a); t1 = Math.min(t1, c);
        }
        if (t0 <= t1 && t0 < best) best = t0;
      }
    }
    return best;
  }

  forward() {
    return new THREE.Vector3(-Math.sin(this.yaw) * Math.cos(this.pitch), Math.sin(this.pitch), -Math.cos(this.yaw) * Math.cos(this.pitch));
  }

  update(dt, colliders) {
    const g = this.game, inp = g.input, s = g.save.settings;
    if (this.enabled && this.lookEnabled) {
      const sens = 0.0022 * (s.sensitivity || 1);
      this.yaw -= inp.mdx * sens;
      this.pitch -= inp.mdy * sens * (s.invertY ? -1 : 1);
      this.pitch = clamp(this.pitch, -1.45, 1.45);
      this.swayX = damp(this.swayX, clamp(inp.mdx * 0.002, -0.05, 0.05), 10, dt);
      this.swayY = damp(this.swayY, clamp(inp.mdy * 0.002, -0.05, 0.05), 10, dt);
    }
    let speed = 0;
    if (this.enabled) {
      const ax = inp.moveAxis();
      this.sprinting = inp.isDown('ShiftLeft', 'ShiftRight') && (ax.z > 0.1) && g.meter.value > 0;
      const max = (this.sprinting ? 5.6 : 3.3) * this.speedMul;
      const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw);
      const tx = (-sin * ax.z + cos * ax.x) * max;
      const tz = (-cos * ax.z - sin * ax.x) * max;
      const k = 1 - Math.exp(-10 * dt);
      this.vel.x += (tx - this.vel.x) * k;
      this.vel.z += (tz - this.vel.z) * k;
      this.pos.x += this.vel.x * dt;
      this.pos.z += this.vel.z * dt;
      if (colliders) for (let it = 0; it < 2; it++) collide(this.pos, this.radius, colliders);
      speed = Math.hypot(this.vel.x, this.vel.z);
      if (inp.wasPressed('KeyF') && this.hasFlashlight) {
        this.setFlash(!this.flashOn);
        g.audio.play('flashlight');
      }
    } else {
      this.vel.set(0, 0, 0);
    }
    // footsteps + head bob
    this.bobT += dt * speed * 2.1;
    this.stepAcc += speed * dt;
    const stride = this.sprinting ? 2.1 : 1.65;
    if (this.stepAcc > stride) {
      this.stepAcc = 0;
      const lvl = g.level;
      const surface = lvl?.surfaceAt ? lvl.surfaceAt(this.pos.x, this.pos.z) : lvl?.surface || 'marble';
      g.audio.play('step', { surface, vol: this.sprinting ? 1.2 : 0.9 });
    }
    // up close, the beam dims so whatever it lights stays about as bright as it would from 3 m away
    if (this.flashOn) {
      const far = this.beamDistance(colliders, 25);
      const d = Math.max(0.2, Math.min(far, 3));
      const target = clamp(Math.pow(d / 3, 1.3), 0.1, 1);
      this.nearDim += (target - this.nearDim) * Math.min(1, dt * 8);
      this.aimDist += (clamp(far, 0.8, 25) - this.aimDist) * Math.min(1, dt * 10);
    }
    const beam = this.baseIntensity * this.nearDim;
    // flashlight flicker
    if (this.flickerT > 0) {
      this.flickerT -= dt;
      if (this.flashOn) this.spot.intensity = Math.random() < 0.45 ? rand(0, 8) * this.nearDim : beam;
    } else if (this.flashOn) this.spot.intensity = beam;
    this.applyCamera(dt, speed);
  }

  applyCamera(dt, speed = 0) {
    const cam = this.camera;
    const bobAmt = Math.min(1, speed / 3.3);
    const bobY = Math.sin(this.bobT * 2) * 0.045 * bobAmt;
    const bobX = Math.cos(this.bobT) * 0.03 * bobAmt;
    cam.position.set(this.pos.x + bobX, this.height + this.eyeOffset + bobY, this.pos.z);
    cam.rotation.set(this.pitch, this.yaw, 0, 'YXZ');
    // flashlight sway
    // the flashlight points at the middle of the screen, and the beam comes out of its lens
    const m = this.flModel, aim = this.aimDist;
    m.position.set(0.2 - this.swayX + bobX * 0.4, -0.23 + this.swayY + bobY * 0.6, -0.48);
    const ax = -m.position.x, ay = -m.position.y, az = -aim - m.position.z;
    m.rotation.set(Math.atan2(ay, Math.hypot(ax, az)) + this.swayY, Math.atan2(-ax, -az) - this.swayX * 2, 0, 'YXZ');
    this.lens.set(0, 0, -0.15).applyEuler(m.rotation).add(m.position);
    this.spot.position.copy(this.lens);
    this.spot.target.position.set(0, 0, -aim);
  }
}

export function collide(pos, r, boxes) {
  for (const b of boxes) {
    if (!b.enabled) continue;
    const cx = Math.max(b.minX, Math.min(pos.x, b.maxX));
    const cz = Math.max(b.minZ, Math.min(pos.z, b.maxZ));
    const dx = pos.x - cx, dz = pos.z - cz;
    const d2 = dx * dx + dz * dz;
    if (d2 >= r * r) continue;
    if (d2 > 1e-9) {
      const d = Math.sqrt(d2);
      pos.x += (dx / d) * (r - d);
      pos.z += (dz / d) * (r - d);
    } else {
      const pl = pos.x - b.minX, pr = b.maxX - pos.x, pt = pos.z - b.minZ, pb = b.maxZ - pos.z;
      const mn = Math.min(pl, pr, pt, pb);
      if (mn === pl) pos.x = b.minX - r;
      else if (mn === pr) pos.x = b.maxX + r;
      else if (mn === pt) pos.z = b.minZ - r;
      else pos.z = b.maxZ + r;
    }
  }
}
