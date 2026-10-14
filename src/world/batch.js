import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// Static batching: merge meshes that never move relative to `root` into one mesh per material.
// Cuts draw calls a lot (hundreds of bones/props → a few dozen meshes) without changing the look.
// `isDynamic(obj)` marks objects (and their whole subtree) that must be left alone.

function signature(g) {
  const names = Object.keys(g.attributes).sort();
  return names.map((n) => n + g.attributes[n].itemSize).join(',') + (g.index ? '|i' : '|n');
}

// Plain-colored materials → a few shared vertex-color materials (the color goes into the mesh), so
// meshes that only differ by color merge into one draw call. Anything textured, glowing, see-through,
// flat-shaded or marked `userData.keep` is left alone, and so is anything `skip(obj)` says to skip.
const VC = new Map();
function vcMaterial(rough, metal, side) {
  const k = `${rough}|${metal}|${side}`;
  if (!VC.has(k)) {
    const m = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: rough, metalness: metal, side });
    m.userData.shared = true;
    VC.set(k, m);
  }
  return VC.get(k);
}
export function bakeColors(root, skip = () => false, { single = false } = {}) {
  const walk = (o) => {
    if (o !== root && skip(o)) return;
    const m = o.material;
    if (o.isMesh && !o.isInstancedMesh && !o.isSkinnedMesh && m && !Array.isArray(m) && m.isMeshStandardMaterial && !m.isMeshPhysicalMaterial &&
        !m.map && !m.bumpMap && !m.normalMap && !m.transparent && !m.vertexColors && !m.flatShading && !m.userData.keep &&
        (m.emissive.r + m.emissive.g + m.emissive.b) * m.emissiveIntensity < 0.01 && o.geometry?.attributes?.position && !o.geometry.attributes.color) {
      // (`single`: everything gets the same material — for a person, where a little shine doesn't matter)
      const rough = single ? 0.75 : m.roughness < 0.45 ? 0.35 : m.roughness < 0.75 ? 0.6 : 0.85;
      const metal = single ? 0 : m.metalness > 0.5 ? 0.8 : m.metalness > 0.15 ? 0.3 : 0;
      const g = o.geometry.clone();
      const n = g.attributes.position.count, col = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) { col[i * 3] = m.color.r; col[i * 3 + 1] = m.color.g; col[i * 3 + 2] = m.color.b; }
      g.setAttribute('color', new THREE.BufferAttribute(col, 3));
      o.geometry = g;
      o.material = vcMaterial(rough, metal, m.side);
    }
    for (const c of o.children) walk(c);
  };
  walk(root);
}

// `cell` (meters): merge per area of the world instead of all at once, so what's behind you is
// culled. 0 = no areas (one merged mesh per material).
export function batchStatic(root, isDynamic = () => false, cell = 0) {
  root.updateMatrixWorld(true);
  const rootInv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const buckets = new Map();
  const c = new THREE.Vector3();
  const walk = (o) => {
    if (o !== root && isDynamic(o)) return;
    if (o.isMesh && !o.isInstancedMesh && !o.isSkinnedMesh && o !== root && o.visible && o.children.length === 0 &&
        !Array.isArray(o.material) && (!o.material.transparent || o.material.userData.batch) && !o.userData.noBatch && o.geometry?.attributes?.position) {
      let area = '';
      if (cell) {
        if (!o.geometry.boundingSphere) o.geometry.computeBoundingSphere();
        c.copy(o.geometry.boundingSphere.center).applyMatrix4(o.matrixWorld);
        area = `${Math.floor(c.x / cell)},${Math.floor(c.z / cell)}`;
      }
      const key = `${o.material.uuid}|${o.castShadow}|${o.renderOrder}|${signature(o.geometry)}|${area}`;
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(o);
    }
    for (const c of [...o.children]) {
      if (!c.visible) continue;
      walk(c);
    }
  };
  walk(root);
  let merged = 0, removed = 0;
  const m = new THREE.Matrix4();
  for (const list of buckets.values()) {
    if (list.length < 2) continue;
    const geos = list.map((mesh) => {
      const g = mesh.geometry.clone();
      for (const k of Object.keys(g.morphAttributes)) delete g.morphAttributes[k];
      m.multiplyMatrices(rootInv, mesh.matrixWorld);
      g.applyMatrix4(m);
      return g;
    });
    let geo;
    try { geo = mergeGeometries(geos, false); } catch (_) { geo = null; }
    for (const g of geos) g.dispose();
    if (!geo) continue;
    const src = list[0];
    const out = new THREE.Mesh(geo, src.material);
    out.castShadow = src.castShadow;
    out.receiveShadow = list.some((x) => x.receiveShadow);
    out.renderOrder = src.renderOrder;
    out.name = 'batched';
    root.add(out);
    for (const mesh of list) { mesh.parent?.remove(mesh); removed++; }
    merged++;
  }
  return { merged, removed };
}

// Batch an articulated model: each joint keeps animating; the static pieces under each joint are merged.
export function batchJoints(joints, keep = []) {
  const jointSet = new Set(joints);
  const keepSet = new Set(keep);
  let removed = 0;
  for (const j of joints) {
    const r = batchStatic(j, (o) => jointSet.has(o) || keepSet.has(o));
    removed += r.removed;
  }
  return removed;
}
