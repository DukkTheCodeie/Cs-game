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
    const spot = (this.spot = new THREE.SpotLight(0xfff1d6, 0, 34, 0.48, 0.55, 1.4));
    spot.position.set(0.18, -0.15, 0.1);
    spot.target.position.set(0.05, -0.2, -6);
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
    this.flashOn = false;
    this.hasFlashlight = false;
    this.flickerT = 0;
    this.baseIntensity = 60;
    this.swayX = 0;
    this.swayY = 0;
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
    this.spot.intensity = on ? this.baseIntensity : 0;
    this.fill.intensity = on ? 0.5 : 0;
    this.flModel.userData.lens.material.color.set(on ? 0xfff6dc : 0x333333);
  }

  flicker(duration = 1.2) {
    this.flickerT = duration;
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
    // flashlight flicker
    if (this.flickerT > 0) {
      this.flickerT -= dt;
      if (this.flashOn) this.spot.intensity = Math.random() < 0.45 ? rand(0, 8) : this.baseIntensity;
      if (this.flickerT <= 0 && this.flashOn) this.spot.intensity = this.baseIntensity;
    }
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
    this.flModel.position.set(0.27 - this.swayX + bobX * 0.4, -0.25 + this.swayY + bobY * 0.6, -0.5);
    this.flModel.rotation.set(0.05 + this.swayY, 0.08 - this.swayX * 2, 0);
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
