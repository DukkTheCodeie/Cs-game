import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// Static batching: merge meshes that never move relative to `root` into one mesh per material.
// Cuts draw calls a lot (hundreds of bones/props → a few dozen meshes) without changing the look.
// `isDynamic(obj)` marks objects (and their whole subtree) that must be left alone.

function signature(g) {
  const names = Object.keys(g.attributes).sort();
  return names.map((n) => n + g.attributes[n].itemSize).join(',') + (g.index ? '|i' : '|n');
}

export function batchStatic(root, isDynamic = () => false) {
  root.updateMatrixWorld(true);
  const rootInv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const buckets = new Map();
  const walk = (o) => {
    if (o !== root && isDynamic(o)) return;
    if (o.isMesh && !o.isInstancedMesh && !o.isSkinnedMesh && o !== root && o.visible && o.children.length === 0 &&
        !Array.isArray(o.material) && !o.material.transparent && !o.userData.noBatch && o.geometry?.attributes?.position) {
      const key = `${o.material.uuid}|${o.castShadow}|${o.receiveShadow}|${o.renderOrder}|${signature(o.geometry)}`;
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
    out.receiveShadow = src.receiveShadow;
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
