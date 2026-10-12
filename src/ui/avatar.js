// Cartoon portraits drawn live on a canvas. Used whenever no video clip / photo exists for a line.

function circle(x, cx, cy, r) {
  x.beginPath();
  x.arc(cx, cy, r, 0, Math.PI * 2);
}

function eyes(x, cx, cy, { mood, blink, t, sep = 26, look = 0 }) {
  for (const s of [-1, 1]) {
    const ex = cx + s * sep, ey = cy;
    let open = 1 - blink;
    if (mood === 'sleepy' || mood === 'tired') open *= 0.35;
    if (mood === 'shock' || mood === 'scared') open *= 1.25;
    const rw = 13, rh = 14 * open;
    x.fillStyle = '#fff';
    x.beginPath();
    x.ellipse(ex, ey, rw, Math.max(1.5, rh), 0, 0, Math.PI * 2);
    x.fill();
    if (open > 0.15) {
      x.fillStyle = '#1a1210';
      const pr = mood === 'shock' || mood === 'scared' ? 4.5 : 6.5;
      circle(x, ex + look * 4, ey + 1, Math.min(pr, rh));
      x.fill();
      x.fillStyle = '#fff';
      circle(x, ex + look * 4 + 2, ey - 2, 1.8);
      x.fill();
    }
    x.strokeStyle = '#2a1a12';
    x.lineWidth = 2;
    x.beginPath();
    x.ellipse(ex, ey, rw, Math.max(1.5, rh), 0, 0, Math.PI * 2);
    x.stroke();
  }
}

function brows(x, cx, cy, mood, color = '#2a1a12', sep = 26) {
  x.strokeStyle = color;
  x.lineWidth = 6;
  x.lineCap = 'round';
  for (const s of [-1, 1]) {
    let inner = 0, outer = 0;
    if (mood === 'angry' || mood === 'annoyed') { inner = 8; outer = -4; }
    if (mood === 'shock' || mood === 'scared') { inner = -10; outer = -8; }
    if (mood === 'confused') { inner = s > 0 ? -8 : 2; outer = s > 0 ? -12 : 0; }
    if (mood === 'tired' || mood === 'sleepy') { inner = -3; outer = 4; }
    x.beginPath();
    x.moveTo(cx + s * (sep - 14), cy - 22 + inner);
    x.lineTo(cx + s * (sep + 12), cy - 24 + outer);
    x.stroke();
  }
}

function mouth(x, cx, cy, talk, mood) {
  x.fillStyle = '#5a1e1e';
  x.strokeStyle = '#2a1010';
  x.lineWidth = 3;
  const w = mood === 'shock' || mood === 'scared' ? 14 : 22;
  const h = 3 + talk * 16 + (mood === 'shock' ? 10 : 0);
  if (talk < 0.05 && mood === 'happy') {
    x.beginPath();
    x.arc(cx, cy - 6, 18, 0.2 * Math.PI, 0.8 * Math.PI);
    x.stroke();
    return;
  }
  if (talk < 0.05 && (mood === 'angry' || mood === 'annoyed')) {
    x.beginPath();
    x.moveTo(cx - 16, cy + 2);
    x.lineTo(cx + 16, cy - 2);
    x.stroke();
    return;
  }
  x.beginPath();
  x.ellipse(cx, cy, w, h, 0, 0, Math.PI * 2);
  x.fill();
  x.stroke();
  if (h > 8) {
    x.fillStyle = '#ff7a8a';
    x.beginPath();
    x.ellipse(cx, cy + h * 0.45, w * 0.55, h * 0.35, 0, 0, Math.PI * 2);
    x.fill();
  }
}

function bg(x, c1, c2) {
  const g = x.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, c1);
  g.addColorStop(1, c2);
  x.fillStyle = g;
  x.fillRect(0, 0, 256, 256);
}

export function drawAvatar(x, who, { t = 0, talk = 0, mood = 'normal', blink = 0 } = {}) {
  x.save();
  x.clearRect(0, 0, 256, 256);
  const bob = Math.sin(t * 2) * 2 + talk * 2;
  if (who === 'museos') {
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
    x.restore();
    return;
  }

  const cx = 128, cy = 132 + bob;
  if (who === 'dev') {
    const angry = mood === 'angry';
    bg(x, angry ? '#4a0000' : '#14162a', angry ? '#1a0000' : '#2a1640');
    // monitor glow behind
    x.fillStyle = angry ? 'rgba(255,60,60,0.3)' : 'rgba(80,160,255,0.25)';
    x.fillRect(150, 30, 100, 70);
    // hoodie
    x.fillStyle = angry ? '#6a1030' : '#3a2a5a';
    x.beginPath();
    x.ellipse(cx, 270 + bob, 110, 90, 0, 0, Math.PI * 2);
    x.fill();
    x.beginPath();
    x.ellipse(cx, cy - 6, 78, 86, 0, 0, Math.PI * 2);
    x.fill();
    // face
    x.fillStyle = angry ? '#e8907a' : '#f0c4a0';
    x.beginPath();
    x.ellipse(cx, cy + 4, 56, 62, 0, 0, Math.PI * 2);
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
    eyes(x, cx, cy, { mood, blink, t, sep: 24 });
    // eye bags
    x.strokeStyle = 'rgba(90,40,90,0.6)';
    x.lineWidth = 3;
    for (const s of [-1, 1]) {
      x.beginPath();
      x.arc(cx + s * 24, cy + 14, 12, 0.15 * Math.PI, 0.85 * Math.PI);
      x.stroke();
    }
    brows(x, cx, cy, mood, '#2a1a10', 24);
    mouth(x, cx, cy + 36, talk, mood);
    if (angry) {
      x.strokeStyle = '#b00000';
      x.lineWidth = 4;
      const vx = cx + 34, vy = cy - 40;
      x.beginPath();
      x.moveTo(vx - 8, vy); x.lineTo(vx - 2, vy); x.moveTo(vx + 2, vy); x.lineTo(vx + 8, vy);
      x.moveTo(vx, vy - 8); x.lineTo(vx, vy - 2); x.moveTo(vx, vy + 2); x.lineTo(vx, vy + 8);
      x.stroke();
    }
    if (mood === 'tired') {
      x.fillStyle = '#fff';
      x.font = 'bold 26px Arial';
      x.fillText('z', 200, 60 + Math.sin(t * 2) * 6);
      x.font = 'bold 18px Arial';
      x.fillText('z', 220, 40 + Math.sin(t * 2 + 1) * 6);
    }
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
    x.restore();
    return;
  }

  // guard / aaron
  const aaron = who === 'aaron';
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
  x.ellipse(cx, 280 + bob, 112, 95, 0, 0, Math.PI * 2);
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
  x.ellipse(cx - 58, cy + 6, 10, 16, 0, 0, Math.PI * 2);
  x.ellipse(cx + 58, cy + 6, 10, 16, 0, 0, Math.PI * 2);
  x.fill();
  x.beginPath();
  x.ellipse(cx, cy + 4, 58, 64, 0, 0, Math.PI * 2);
  x.fill();
  if (mood === 'scared' || mood === 'shock') {
    x.fillStyle = 'rgba(120,180,255,0.9)';
    x.beginPath();
    x.ellipse(cx + 50, cy - 18 + ((t * 40) % 30), 5, 8, 0, 0, Math.PI * 2);
    x.fill();
  }
  if (mood === 'happy') {
    x.fillStyle = 'rgba(255,120,120,0.35)';
    circle(x, cx - 36, cy + 22, 10); x.fill();
    circle(x, cx + 36, cy + 22, 10); x.fill();
  }
  eyes(x, cx, cy, { mood, blink, t });
  brows(x, cx, cy, mood);
  x.fillStyle = aaron ? '#8a5a3a' : '#c99070';
  x.beginPath();
  x.ellipse(cx, cy + 16, 7, 9, 0, 0, Math.PI * 2);
  x.fill();
  if (aaron) {
    x.fillStyle = '#1a1210';
    x.beginPath();
    x.ellipse(cx, cy + 30, 24, 7, 0, 0, Math.PI * 2);
    x.fill();
  }
  mouth(x, cx, cy + 40, talk, mood);
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
  if (mood === 'sleepy') {
    x.fillStyle = '#fff';
    x.font = 'bold 26px Arial';
    x.fillText('Z', 200, 70 + Math.sin(t * 2) * 6);
  }
  x.restore();
}
