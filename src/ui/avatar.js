// Cartoon portraits drawn live on a 256×256 canvas. Used whenever there's no clip or photo for a
// line. Every character can make every face in EMOTIONS (game/script.js).

const TAU = Math.PI * 2;
const INK = '#2a1a12';

function circle(x, cx, cy, r) {
  x.beginPath();
  x.arc(cx, cy, r, 0, TAU);
}

function bg(x, c1, c2) {
  const g = x.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, c1);
  g.addColorStop(1, c2);
  x.fillStyle = g;
  x.fillRect(0, 0, 256, 256);
}

// ------------------------------------------------------------------ eyes
function eyes(x, cx, cy, { mood, blink, t, sep = 26, skin, line = INK, rim = null }) {
  if (mood === 'cool') {
    // sunglasses
    x.fillStyle = '#0d0d12';
    for (const s of [-1, 1]) {
      x.beginPath();
      if (x.roundRect) x.roundRect(cx + s * sep - 19, cy - 12, 38, 24, [4, 4, 12, 12]);
      else x.rect(cx + s * sep - 19, cy - 12, 38, 24);
      x.fill();
      if (rim) { x.strokeStyle = rim; x.lineWidth = 3; x.stroke(); }
    }
    x.fillRect(cx - sep + 15, cy - 9, (sep - 15) * 2, 5);
    x.fillStyle = 'rgba(255,255,255,0.55)';
    for (const s of [-1, 1]) {
      x.beginPath();
      x.moveTo(cx + s * sep - 12, cy - 7); x.lineTo(cx + s * sep - 4, cy - 7); x.lineTo(cx + s * sep - 12, cy + 4);
      x.fill();
    }
    return;
  }
  if (mood === 'happy') {
    // ^ ^ squint
    x.strokeStyle = line;
    x.lineWidth = 5;
    x.lineCap = 'round';
    for (const s of [-1, 1]) {
      x.beginPath();
      x.arc(cx + s * sep, cy + 5, 11, 1.15 * Math.PI, 1.85 * Math.PI);
      x.stroke();
    }
    return;
  }
  for (const s of [-1, 1]) {
    const ex = cx + s * sep, ey = cy;
    let open = { sleepy: 0.3, annoyed: 0.55, angry: 0.8, shocked: 1.35, scared: 1.25, sad: 0.9, hungry: 1.15 }[mood] ?? 1;
    if (mood === 'confused' && s > 0) open *= 0.55;
    open *= 1 - blink;
    const rw = mood === 'shocked' ? 14 : 13, rh = 14 * open;
    x.fillStyle = '#fff';
    x.beginPath();
    x.ellipse(ex, ey, rw, Math.max(1.5, rh), 0, 0, TAU);
    x.fill();
    if (open > 0.15) {
      const look = { sad: [0, 4], confused: [-3, -3], hungry: [3, -3], sleepy: [0, 2] }[mood] || [0, 1];
      const small = mood === 'shocked' || mood === 'scared';
      const pr = small ? 4 : mood === 'hungry' ? 8 : 6.5;
      const jx = mood === 'scared' ? Math.sin(t * 50) * 1.2 : 0;
      x.fillStyle = '#1a1210';
      circle(x, ex + look[0] + jx, ey + look[1], Math.min(pr, rh));
      x.fill();
      x.fillStyle = '#fff';
      if (mood === 'hungry') {
        // sparkly eyes
        star(x, ex + look[0] + 2, ey + look[1] - 2, 4.5);
      } else {
        circle(x, ex + look[0] + 2, ey + look[1] - 2, 1.8);
        x.fill();
      }
    }
    x.strokeStyle = INK;
    x.lineWidth = 2;
    x.beginPath();
    x.ellipse(ex, ey, rw, Math.max(1.5, rh), 0, 0, TAU);
    x.stroke();
    // heavy lids
    if ((mood === 'annoyed' || mood === 'angry') && skin && open > 0.1) {
      x.fillStyle = skin;
      x.beginPath();
      if (mood === 'annoyed') {
        x.rect(ex - rw - 2, ey - rh - 3, rw * 2 + 4, rh * 0.75 + 3);
      } else {
        // slanted: low at the nose side
        x.moveTo(ex - rw - 2, ey - rh - 3);
        x.lineTo(ex + rw + 2, ey - rh - 3);
        x.lineTo(ex + s * -rw, ey - rh * 0.1);
        x.lineTo(ex + s * rw, ey - rh * 0.7);
      }
      x.fill();
      x.strokeStyle = INK;
      x.lineWidth = 2.5;
      x.beginPath();
      if (mood === 'annoyed') { x.moveTo(ex - rw, ey - rh * 0.25); x.lineTo(ex + rw, ey - rh * 0.25); } else { x.moveTo(ex + s * -rw, ey - rh * 0.1); x.lineTo(ex + s * rw, ey - rh * 0.7); }
      x.stroke();
    }
  }
}

function star(x, cx, cy, r) {
  x.beginPath();
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU - Math.PI / 2, rr = i % 2 ? r * 0.4 : r;
    i ? x.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr) : x.moveTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr);
  }
  x.closePath();
  x.fill();
}

// ------------------------------------------------------------------ eyebrows
function brows(x, cx, cy, mood, color = INK, sep = 26) {
  x.strokeStyle = color;
  x.lineWidth = 6;
  x.lineCap = 'round';
  for (const s of [-1, 1]) {
    // [inner y offset, outer y offset] — negative = higher
    let [inner, outer] = {
      normal: [0, -2], happy: [-6, -8], hungry: [-8, -6], annoyed: [3, 3], angry: [10, -6],
      shocked: [-14, -12], scared: [-14, -4], sad: [-10, 4], sleepy: [-2, 5],
    }[mood] || [0, -2];
    if (mood === 'cool') [inner, outer] = s > 0 ? [-10, -16] : [2, 2];
    if (mood === 'confused') [inner, outer] = s > 0 ? [-10, -14] : [4, 2];
    x.beginPath();
    x.moveTo(cx + s * (sep - 14), cy - 22 + inner);
    x.quadraticCurveTo(cx + s * sep, cy - 27 + (inner + outer) / 2, cx + s * (sep + 12), cy - 24 + outer);
    x.stroke();
  }
}

// ------------------------------------------------------------------ mouth
function mouth(x, cx, cy, talk, mood, t) {
  const open = talk > 0.05;
  x.fillStyle = '#5a1e1e';
  x.strokeStyle = '#2a1010';
  x.lineWidth = 3;
  x.lineCap = 'round';
  const tongue = (w, h, oy = 0.45) => {
    x.fillStyle = '#ff7a8a';
    x.beginPath();
    x.ellipse(cx, cy + h * oy, w * 0.55, h * 0.35, 0, 0, TAU);
    x.fill();
  };
  if (mood === 'shocked') {
    const h = 16 + talk * 8;
    x.beginPath(); x.ellipse(cx, cy + 4, 12, h, 0, 0, TAU); x.fill(); x.stroke();
    return;
  }
  if (mood === 'happy' || mood === 'hungry') {
    // open D smile
    const w = 26, h = 14 + talk * 10;
    x.beginPath();
    x.moveTo(cx - w, cy - 4);
    x.quadraticCurveTo(cx, cy - 8, cx + w, cy - 4);
    x.quadraticCurveTo(cx + w * 0.8, cy + h * 1.6, cx, cy + h * 1.4);
    x.quadraticCurveTo(cx - w * 0.8, cy + h * 1.6, cx - w, cy - 4);
    x.fill(); x.stroke();
    x.save(); x.clip();
    tongue(w, h * 1.4, 0.75);
    x.fillStyle = '#fff'; x.fillRect(cx - w, cy - 9, w * 2, 7);
    x.restore();
    if (mood === 'hungry') {
      // drool
      const d = (t * 0.7) % 1;
      x.fillStyle = 'rgba(150,210,255,0.95)';
      x.beginPath(); x.ellipse(cx + 18, cy + 10 + d * 22, 4, 6 + d * 4, 0, 0, TAU); x.fill();
    }
    return;
  }
  if (mood === 'angry') {
    const h = open ? 10 + talk * 16 : 8;
    // shouting / gritting teeth
    x.beginPath();
    x.moveTo(cx - 22, cy + 2); x.lineTo(cx + 22, cy + 2); x.lineTo(cx + 16, cy + 2 + h); x.lineTo(cx - 16, cy + 2 + h); x.closePath();
    x.fill(); x.stroke();
    x.fillStyle = '#fff';
    x.fillRect(cx - 19, cy + 3, 38, Math.min(6, h * 0.45));
    if (!open) {
      x.strokeStyle = '#999'; x.lineWidth = 1.5;
      for (let i = -12; i <= 12; i += 8) { x.beginPath(); x.moveTo(cx + i, cy + 3); x.lineTo(cx + i, cy + 9); x.stroke(); }
    }
    return;
  }
  if (mood === 'scared') {
    // wobbly grimace
    const h = 6 + talk * 10;
    x.beginPath();
    for (let i = 0; i <= 20; i++) { const px = cx - 24 + i * 2.4; x.lineTo(px, cy - 2 + Math.sin(i * 1.4 + t * 30) * 2); }
    for (let i = 20; i >= 0; i--) { const px = cx - 24 + i * 2.4; x.lineTo(px, cy + h + Math.sin(i * 1.4 + t * 30 + 1) * 2); }
    x.closePath();
    x.fillStyle = '#fff'; x.fill(); x.stroke();
    x.strokeStyle = '#bbb'; x.lineWidth = 1.5;
    x.beginPath(); x.moveTo(cx - 22, cy + h / 2); x.lineTo(cx + 22, cy + h / 2); x.stroke();
    return;
  }
  if (mood === 'sad') {
    if (open) {
      // one downturned mouth that opens as they talk: both lips stay arched like a frown, so the
      // opening is a sad crescent (not an "o" with a frown drawn over it)
      const w = 16 + talk * 2, my = cy + 12, cy2 = my + talk * 4;
      x.beginPath();
      x.moveTo(cx - w, cy2);
      x.quadraticCurveTo(cx, my - 18 - talk * 6, cx + w, cy2);
      x.quadraticCurveTo(cx, my - 13 + talk * 10, cx - w, cy2);
      x.closePath();
      x.fill();
      x.stroke();
      return;
    }
    x.strokeStyle = '#2a1010';
    x.lineWidth = 3.5;
    x.beginPath(); x.arc(cx, cy + 22, 18, 1.2 * Math.PI, 1.8 * Math.PI); x.stroke();
    return;
  }
  if (mood === 'cool') {
    if (open) { x.beginPath(); x.ellipse(cx + 8, cy + 2, 14, 3 + talk * 9, -0.15, 0, TAU); x.fill(); x.stroke(); return; }
    x.beginPath(); x.moveTo(cx - 14, cy + 4); x.quadraticCurveTo(cx + 6, cy + 8, cx + 20, cy - 4); x.stroke();
    return;
  }
  if (mood === 'confused') {
    if (open) { x.beginPath(); x.ellipse(cx - 6, cy + 2, 9, 3 + talk * 9, 0, 0, TAU); x.fill(); x.stroke(); return; }
    x.beginPath(); x.moveTo(cx - 18, cy + 2);
    for (let i = 1; i <= 6; i++) x.lineTo(cx - 18 + i * 6, cy + 2 + (i % 2 ? -4 : 3));
    x.stroke();
    return;
  }
  if (mood === 'sleepy') {
    const h = 6 + talk * 8 + Math.max(0, Math.sin(t * 0.9)) * 8; // yawning
    x.beginPath(); x.ellipse(cx, cy + 4, 10, h, 0, 0, TAU); x.fill(); x.stroke();
    return;
  }
  if (mood === 'annoyed') {
    if (open) { x.beginPath(); x.ellipse(cx, cy + 2, 16, 2 + talk * 8, 0.08, 0, TAU); x.fill(); x.stroke(); return; }
    x.beginPath(); x.moveTo(cx - 16, cy + 3); x.lineTo(cx + 16, cy - 1); x.stroke();
    return;
  }
  // normal
  if (open) {
    const h = 3 + talk * 16;
    x.beginPath(); x.ellipse(cx, cy, 20, h, 0, 0, TAU); x.fill(); x.stroke();
    if (h > 8) tongue(20, h);
    return;
  }
  x.beginPath(); x.arc(cx, cy - 8, 16, 0.25 * Math.PI, 0.75 * Math.PI); x.stroke();
}

// ------------------------------------------------------------------ extras around the face
function extras(x, cx, cy, mood, t, face) {
  const [fx, fy, frx, fry] = face;
  if (mood === 'happy') {
    x.fillStyle = 'rgba(255,110,120,0.4)';
    circle(x, cx - 38, cy + 22, 11); x.fill();
    circle(x, cx + 38, cy + 22, 11); x.fill();
  }
  if (mood === 'angry') {
    x.save();
    x.beginPath(); x.ellipse(fx, fy, frx, fry, 0, 0, TAU); x.clip();
    x.fillStyle = 'rgba(230,30,20,0.28)';
    x.fillRect(0, 0, 256, 256);
    x.restore();
    // anger mark
    x.strokeStyle = '#d00000';
    x.lineWidth = 4;
    const vx = cx + 44, vy = cy - 46;
    for (const [a, b] of [[[-9, -3], [-3, -3]], [[3, -3], [9, -3]], [[-3, -9], [-3, -3]], [[3, 3], [3, 9]], [[-9, 3], [-3, 3]], [[3, -9], [3, -3]], [[-3, 3], [-3, 9]], [[3, 3], [9, 3]]]) {
      x.beginPath(); x.moveTo(vx + a[0], vy + a[1]); x.lineTo(vx + b[0], vy + b[1]); x.stroke();
    }
    // steam
    x.fillStyle = 'rgba(255,255,255,0.7)';
    for (const s of [-1, 1]) {
      const k = (t * 0.8 + (s > 0 ? 0.5 : 0)) % 1;
      circle(x, cx + s * (frx + 10 + k * 8), cy - 10 - k * 40, 6 + k * 6);
      x.fill();
    }
  }
  if (mood === 'scared' || mood === 'sad') {
    x.save();
    x.beginPath(); x.ellipse(fx, fy, frx, fry, 0, 0, TAU); x.clip();
    const g = x.createLinearGradient(0, fy - fry, 0, fy);
    g.addColorStop(0, mood === 'scared' ? 'rgba(90,110,200,0.55)' : 'rgba(90,110,200,0.3)');
    g.addColorStop(1, 'rgba(90,110,200,0)');
    x.fillStyle = g;
    x.fillRect(0, 0, 256, 256);
    x.restore();
  }
  if (mood === 'scared' || mood === 'shocked') {
    x.fillStyle = 'rgba(140,200,255,0.95)';
    x.beginPath();
    x.ellipse(cx + 50, cy - 18 + ((t * 40) % 30), 5, 8, 0, 0, TAU);
    x.fill();
  }
  if (mood === 'sad') {
    x.fillStyle = 'rgba(120,190,255,0.9)';
    for (const s of [-1, 1]) {
      for (let i = 0; i < 2; i++) {
        const k = (t * 0.9 + i * 0.5 + (s > 0 ? 0.25 : 0)) % 1;
        x.beginPath(); x.ellipse(cx + s * 30, cy + 12 + k * 46, 4, 6, 0, 0, TAU); x.fill();
      }
    }
  }
  if (mood === 'shocked') {
    x.fillStyle = '#ffdd33';
    x.font = 'bold 54px Arial Black, Arial';
    x.fillText('!', 202, 72 + Math.sin(t * 8) * 3);
  }
  if (mood === 'confused') {
    x.fillStyle = '#ffdd33';
    x.font = 'bold 50px Arial Black, Arial';
    x.fillText('?', 196, 70 + Math.sin(t * 3) * 5);
  }
  if (mood === 'sleepy') {
    x.fillStyle = '#fff';
    for (let i = 0; i < 3; i++) {
      const k = (t * 0.5 + i / 3) % 1;
      x.globalAlpha = 1 - k;
      x.font = `bold ${16 + i * 6}px Arial`;
      x.fillText('Z', 190 + k * 30, 90 - k * 60);
    }
    x.globalAlpha = 1;
  }
  if (mood === 'hungry') {
    // thought bubble with a donut
    x.fillStyle = 'rgba(255,255,255,0.92)';
    circle(x, 206, 48, 30); x.fill();
    circle(x, 176, 84, 7); x.fill();
    circle(x, 166, 98, 4); x.fill();
    x.fillStyle = '#d49a5c'; circle(x, 206, 48, 19); x.fill();
    x.fillStyle = '#ff7eb6'; circle(x, 206, 46, 16); x.fill();
    x.fillStyle = 'rgba(255,255,255,0.92)'; circle(x, 206, 47, 6); x.fill();
    const cols = ['#3bc9ff', '#ffe14d', '#7dff6b'];
    for (let i = 0; i < 6; i++) { x.fillStyle = cols[i % 3]; x.fillRect(206 + Math.cos(i) * 11 - 2, 46 + Math.sin(i * 1.7) * 10, 4, 2); }
  }
  if (mood === 'cool') {
    x.fillStyle = 'rgba(255,255,255,0.9)';
    star(x, 214, 46 + Math.sin(t * 3) * 3, 9 + Math.sin(t * 5) * 2);
  }
}

// ------------------------------------------------------------------ characters
export function drawAvatar(x, who, { t = 0, talk = 0, mood = 'normal', blink = 0 } = {}) {
  x.save();
  x.clearRect(0, 0, 256, 256);
  const bob = Math.sin(t * 2) * 2 + talk * 2;
  const shakeX = mood === 'scared' ? Math.sin(t * 45) * 1.5 : 0;
  const o = { t, talk, mood, blink, bob, cx: 128 + shakeX, cy: 132 + bob };
  if (who === 'museos') drawMuseOS(x, o);
  else if (who === 'mummy') drawMummy(x, o);
  else if (who === 'dev') drawDev(x, o);
  else drawGuard(x, o, who === 'aaron');
  x.restore();
}

// the guard (you) and Aaron
function drawGuard(x, { t, talk, mood, blink, bob, cx, cy }, aaron) {
  bg(x, aaron ? '#3a5a7a' : '#0e1a30', aaron ? '#1a2a3a' : '#050a14');
  if (!aaron) {
    // CCTV glow
    x.fillStyle = 'rgba(80,255,140,0.12)';
    x.fillRect(10, 30, 70, 50);
    x.fillRect(176, 30, 70, 50);
  }
  // shirt
  x.fillStyle = '#8fb3e0';
  x.beginPath();
  x.ellipse(cx, 280 + bob, 112, 95, 0, 0, TAU);
  x.fill();
  x.fillStyle = '#6f93c0';
  x.beginPath();
  x.moveTo(cx - 30, 196 + bob); x.lineTo(cx, 226 + bob); x.lineTo(cx + 30, 196 + bob);
  x.fill();
  x.fillStyle = '#ffd34d';
  x.beginPath();
  x.moveTo(cx - 62, 214 + bob); x.lineTo(cx - 48, 208 + bob); x.lineTo(cx - 36, 214 + bob); x.lineTo(cx - 40, 232 + bob); x.lineTo(cx - 58, 232 + bob);
  x.fill();
  // neck + face
  const skin = aaron ? '#b07a52' : '#e3b48f';
  x.fillStyle = skin;
  x.fillRect(cx - 18, cy + 40, 36, 30);
  x.beginPath();
  x.ellipse(cx - 58, cy + 6, 10, 16, 0, 0, TAU);
  x.ellipse(cx + 58, cy + 6, 10, 16, 0, 0, TAU);
  x.fill();
  x.beginPath();
  x.ellipse(cx, cy + 4, 58, 64, 0, 0, TAU);
  x.fill();
  eyes(x, cx, cy, { mood, blink, t, skin });
  brows(x, cx, cy, mood);
  x.fillStyle = aaron ? '#8a5a3a' : '#c99070';
  x.beginPath();
  x.ellipse(cx, cy + 16, 7, 9, 0, 0, TAU);
  x.fill();
  if (aaron) {
    x.fillStyle = '#1a1210';
    x.beginPath();
    x.ellipse(cx, cy + 30, 24, 7, 0, 0, TAU);
    x.fill();
  }
  mouth(x, cx, cy + 40, talk, mood, t);
  extras(x, cx, cy, mood, t, [cx, cy + 4, 58, 64]);
  // cap
  x.fillStyle = '#1b2440';
  x.beginPath();
  x.ellipse(cx, cy - 44, 64, 40, 0, Math.PI, 0);
  x.fill();
  x.fillRect(cx - 64, cy - 46, 128, 12);
  x.beginPath();
  x.ellipse(cx, cy - 34, 72, 12, 0, 0, Math.PI);
  x.fill();
  x.fillStyle = '#ffd34d';
  x.beginPath();
  x.moveTo(cx, cy - 76); x.lineTo(cx + 12, cy - 66); x.lineTo(cx + 8, cy - 52); x.lineTo(cx - 8, cy - 52); x.lineTo(cx - 12, cy - 66);
  x.fill();
  if (aaron) {
    x.fillStyle = '#111';
    x.fillRect(cx - 50, cy - 70, 40, 14);
    x.fillRect(cx + 10, cy - 70, 40, 14);
    x.fillStyle = '#fff';
    x.font = 'bold 13px Arial';
    x.fillText('DAY SHIFT', cx - 34, 248);
  }
}


function drawDev(x, { t, talk, mood, blink, bob, cx, cy }) {
  const angry = mood === 'angry';
  bg(x, angry ? '#4a0000' : '#14162a', angry ? '#1a0000' : '#2a1640');
  // monitor glow behind
  x.fillStyle = angry ? 'rgba(255,60,60,0.3)' : 'rgba(80,160,255,0.25)';
  x.fillRect(150, 30, 100, 70);
  // hoodie
  x.fillStyle = angry ? '#6a1030' : '#3a2a5a';
  x.beginPath();
  x.ellipse(cx, 270 + bob, 110, 90, 0, 0, TAU);
  x.fill();
  x.beginPath();
  x.ellipse(cx, cy - 6, 78, 86, 0, 0, TAU);
  x.fill();
  // face
  const skin = '#f0c4a0';
  x.fillStyle = skin;
  x.beginPath();
  x.ellipse(cx, cy + 4, 56, 62, 0, 0, TAU);
  x.fill();
  // messy hair
  x.fillStyle = '#2a1a10';
  x.beginPath();
  x.moveTo(cx - 60, cy - 20);
  for (let i = 0; i <= 10; i++) {
    const a = Math.PI + (i / 10) * Math.PI;
    const r = 64 + (i % 2 ? 16 : 0) + Math.sin(t * 3 + i) * 2;
    x.lineTo(cx + Math.cos(a) * r, cy - 14 + Math.sin(a) * r * 0.85);
  }
  x.lineTo(cx + 60, cy - 20);
  x.quadraticCurveTo(cx, cy - 38, cx - 60, cy - 20);
  x.fill();
  // headphones around neck
  x.strokeStyle = '#111';
  x.lineWidth = 10;
  x.beginPath();
  x.arc(cx, cy + 60, 50, 0.1 * Math.PI, 0.9 * Math.PI);
  x.stroke();
  x.fillStyle = '#ff6fae';
  x.fillRect(cx - 62, cy + 62, 22, 30);
  x.fillRect(cx + 40, cy + 62, 22, 30);
  eyes(x, cx, cy, { mood, blink, t, sep: 24, skin });
  if (mood !== 'cool' && mood !== 'happy') {
    // eye bags (up all night)
    x.strokeStyle = 'rgba(90,40,90,0.6)';
    x.lineWidth = 3;
    for (const s of [-1, 1]) {
      x.beginPath();
      x.arc(cx + s * 24, cy + 14, 12, 0.15 * Math.PI, 0.85 * Math.PI);
      x.stroke();
    }
  }
  brows(x, cx, cy, mood, '#2a1a10', 24);
  mouth(x, cx, cy + 36, talk, mood, t);
  extras(x, cx, cy, mood, t, [cx, cy + 4, 56, 62]);
  // mug
  x.fillStyle = '#eee';
  x.fillRect(196, 190 + bob, 34, 40);
  x.strokeStyle = '#eee';
  x.lineWidth = 5;
  x.beginPath();
  x.arc(232, 210 + bob, 9, -Math.PI / 2, Math.PI / 2);
  x.stroke();
  x.fillStyle = '#c33';
  x.font = 'bold 11px Arial';
  x.fillText('DEV', 202, 214 + bob);
}

function drawMummy(x, { t, talk, mood, blink, bob, cx, cy }) {
  bg(x, '#2a1d0a', '#0e0904');
  // faint hieroglyphs on the tomb wall
  x.fillStyle = 'rgba(232,201,154,0.12)';
  x.font = 'bold 26px serif';
  ['☥', '◉', '◬', '☼'].forEach((g, i) => x.fillText(g, 14 + (i % 2) * 196, 50 + i * 46));
  const wrap = '#e6dcc2', dark = '#b9ab88';
  // shoulders
  x.fillStyle = wrap;
  x.beginPath(); x.ellipse(cx, 282 + bob, 106, 92, 0, 0, TAU); x.fill();
  // head
  x.beginPath(); x.ellipse(cx, cy + 4, 58, 66, 0, 0, TAU); x.fill();
  x.save();
  x.beginPath(); x.ellipse(cx, cy + 4, 58, 66, 0, 0, TAU); x.clip();
  // bandage wraps
  x.strokeStyle = dark;
  x.lineWidth = 3;
  for (let i = -6; i < 9; i++) {
    x.beginPath();
    x.moveTo(cx - 70, cy + i * 14 + 6);
    x.lineTo(cx + 70, cy + i * 14 - 6 + (i % 2) * 8);
    x.stroke();
  }
  // the eye gap
  x.fillStyle = '#1a1208';
  x.beginPath(); x.ellipse(cx, cy, 52, 17, 0, 0, TAU); x.fill();
  x.restore();
  // loose bandage end
  x.strokeStyle = wrap;
  x.lineWidth = 9;
  x.lineCap = 'round';
  x.beginPath(); x.moveTo(cx + 44, cy - 40); x.quadraticCurveTo(cx + 80, cy - 52 + Math.sin(t * 2) * 6, cx + 92, cy - 20 + Math.sin(t * 2.5) * 8); x.stroke();
  eyes(x, cx, cy, { mood, blink, t, sep: 24, skin: '#1a1208', line: '#fff3c4', rim: '#d4a43a' });
  brows(x, cx, cy - 4, mood, dark, 24);
  // mouth: a slit between bandages that opens when it mumbles
  const mcy = cy + 40;
  if (talk > 0.05 || ['shocked', 'happy', 'hungry'].includes(mood)) mouth(x, cx, mcy, talk * 0.7, mood, t);
  else { x.strokeStyle = '#6a5a3a'; x.lineWidth = 3; x.beginPath(); x.moveTo(cx - 14, mcy); x.lineTo(cx + 14, mcy); x.stroke(); }
  extras(x, cx, cy, mood, t, [cx, cy + 4, 58, 66]);
}

function drawMuseOS(x, { t, talk, blink }) {
  bg(x, '#031208', '#062a14');
  x.fillStyle = '#0c3a1f';
  x.fillRect(40, 50, 176, 140);
  x.strokeStyle = '#6dff9e';
  x.lineWidth = 4;
  x.strokeRect(40, 50, 176, 140);
  x.fillStyle = '#6dff9e';
  const bl = blink > 0.5;
  x.fillRect(84, 92, 22, bl ? 4 : 22);
  x.fillRect(150, 92, 22, bl ? 4 : 22);
  x.beginPath();
  x.lineWidth = 4;
  x.strokeStyle = '#6dff9e';
  for (let i = 0; i <= 40; i++) {
    const px = 78 + i * 2.5;
    const py = 152 + Math.sin(i * 0.9 + t * 20) * talk * 14;
    i ? x.lineTo(px, py) : x.moveTo(px, py);
  }
  x.stroke();
  for (let y = 0; y < 256; y += 4) { x.fillStyle = 'rgba(0,0,0,0.25)'; x.fillRect(0, y, 256, 2); }
  x.fillStyle = '#6dff9e';
  x.font = 'bold 18px monospace';
  x.fillText('MUSE-OS', 92, 222);
}
