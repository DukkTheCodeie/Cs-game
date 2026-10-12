// 2D drawings for the in-world computer screens (MeTube, login, CCTV).

function rr(x, X, Y, W, H, r) {
  x.beginPath();
  x.moveTo(X + r, Y);
  x.arcTo(X + W, Y, X + W, Y + H, r);
  x.arcTo(X + W, Y + H, X, Y + H, r);
  x.arcTo(X, Y + H, X, Y, r);
  x.arcTo(X, Y, X + W, Y, r);
  x.closePath();
}

export function drawMeTube(x, t, secondsLeft) {
  const W = x.canvas.width, H = x.canvas.height;
  x.fillStyle = '#0f0f0f';
  x.fillRect(0, 0, W, H);
  // top bar
  x.fillStyle = '#ff2b2b';
  rr(x, 24, 18, 54, 38, 10);
  x.fill();
  x.fillStyle = '#fff';
  x.beginPath();
  x.moveTo(44, 27); x.lineTo(62, 37); x.lineTo(44, 47);
  x.fill();
  x.font = 'bold 30px Arial';
  x.fillText('MeTube', 88, 48);
  x.fillStyle = '#222';
  rr(x, 300, 18, 440, 40, 20);
  x.fill();
  x.fillStyle = '#aaa';
  x.font = '20px Arial';
  x.fillText('dinosaurs that could beat you in a race', 322, 45);
  // video area
  const vx = 24, vy = 76, vw = 660, vh = 372;
  const sky = x.createLinearGradient(0, vy, 0, vy + vh);
  sky.addColorStop(0, '#ff9a5a');
  sky.addColorStop(1, '#ffd98a');
  x.fillStyle = sky;
  x.fillRect(vx, vy, vw, vh);
  x.fillStyle = '#c8763a';
  x.fillRect(vx, vy + vh * 0.72, vw, vh * 0.28);
  // volcano
  x.fillStyle = '#6b3b2a';
  x.beginPath();
  x.moveTo(vx + 380, vy + vh * 0.72); x.lineTo(vx + 480, vy + 120); x.lineTo(vx + 520, vy + 120); x.lineTo(vx + 640, vy + vh * 0.72);
  x.fill();
  x.fillStyle = 'rgba(80,60,60,0.6)';
  x.beginPath();
  x.arc(vx + 500 + Math.sin(t) * 10, vy + 90 - (t * 20) % 40, 26, 0, 7);
  x.fill();
  // running T-Rex silhouette chasing a stick person
  const run = (t * 140) % (vw + 300) - 150;
  const gy = vy + vh * 0.72;
  x.save();
  x.translate(vx + run, gy);
  x.fillStyle = '#2b1d14';
  const bob = Math.abs(Math.sin(t * 12)) * 6;
  x.beginPath();
  x.ellipse(0, -70 - bob, 55, 30, -0.1, 0, 7); x.fill();
  x.beginPath();
  x.moveTo(-50, -75 - bob); x.lineTo(-130, -60 - bob); x.lineTo(-48, -60 - bob); x.fill();
  x.beginPath();
  x.ellipse(52, -105 - bob, 30, 18, -0.2, 0, 7); x.fill();
  x.fillRect(20, -100 - bob, 18, 30);
  const leg = Math.sin(t * 12) * 18;
  x.fillRect(-10 + leg, -50 - bob, 12, 50 + bob);
  x.fillRect(10 - leg, -50 - bob, 12, 50 + bob);
  x.fillStyle = '#ff3b3b';
  x.beginPath(); x.arc(64, -110 - bob, 4, 0, 7); x.fill();
  x.restore();
  x.save();
  x.translate(vx + run + 170, gy);
  x.strokeStyle = '#1a1a1a';
  x.lineWidth = 5;
  x.beginPath(); x.arc(0, -62, 10, 0, 7); x.stroke();
  x.beginPath(); x.moveTo(0, -52); x.lineTo(0, -25); x.stroke();
  const l2 = Math.sin(t * 16) * 12;
  x.beginPath(); x.moveTo(0, -25); x.lineTo(l2, 0); x.moveTo(0, -25); x.lineTo(-l2, 0); x.stroke();
  x.beginPath(); x.moveTo(0, -45); x.lineTo(-l2, -32); x.moveTo(0, -45); x.lineTo(l2, -30); x.stroke();
  x.restore();
  x.fillStyle = 'rgba(0,0,0,0.6)';
  rr(x, vx + 16, vy + 16, 120, 44, 8);
  x.fill();
  x.fillStyle = '#fff';
  x.font = 'bold 30px Arial';
  x.fillText('#3', vx + 52, vy + 50);
  // progress bar
  x.fillStyle = '#444';
  x.fillRect(vx, vy + vh - 6, vw, 6);
  x.fillStyle = '#ff2b2b';
  x.fillRect(vx, vy + vh - 6, vw * (0.42 + ((t * 0.004) % 0.5)), 6);
  // title
  x.fillStyle = '#fff';
  x.font = 'bold 24px Arial';
  x.fillText('TOP 10 DINOSAURS THAT COULD BEAT YOU IN A RACE', vx, vy + vh + 40);
  x.fillText('(#1 WILL SHOCK YOU)', vx, vy + vh + 70);
  x.fillStyle = '#aaa';
  x.font = '18px Arial';
  x.fillText('DinoFacts4Kids  •  2.1M views  •  3 years ago', vx, vy + vh + 100);
  x.fillStyle = '#fff';
  rr(x, vx + 470, vy + vh + 80, 120, 36, 18);
  x.fill();
  x.fillStyle = '#000';
  x.font = 'bold 18px Arial';
  x.fillText('Subscribe', vx + 488, vy + vh + 104);
  // sidebar
  const recs = [
    ['I SURVIVED 24 HRS IN A MUSEUM', '#3a6'],
    ['Donut tier list (honest)', '#d58'],
    ['Is the T-Rex REAL?? (not clickbait)', '#a63'],
    ['Night guard falls asleep on cam', '#36a'],
    ['How to remember passwords', '#777'],
  ];
  recs.forEach(([title, col], i) => {
    const y = 80 + i * 108;
    x.fillStyle = col;
    rr(x, 708, y, 150, 86, 8);
    x.fill();
    x.fillStyle = 'rgba(255,255,255,0.3)';
    x.beginPath(); x.arc(783, y + 43, 18, 0, 7); x.fill();
    x.fillStyle = '#eee';
    x.font = 'bold 16px Arial';
    const words = title.split(' ');
    let line = '', ly = y + 20;
    for (const w of words) {
      if (x.measureText(line + w).width > 140) { x.fillText(line, 868, ly); line = ''; ly += 20; }
      line += w + ' ';
    }
    x.fillText(line, 868, ly);
    x.fillStyle = '#999';
    x.font = '14px Arial';
    x.fillText(`${(i * 3.7 + 1.2).toFixed(1)}M views`, 868, ly + 22);
  });
  // session warning toast
  if (secondsLeft != null) {
    const urgent = secondsLeft <= 5;
    x.fillStyle = urgent && Math.floor(t * 4) % 2 ? '#ff2b2b' : '#ffcc4d';
    rr(x, W - 360, H - 92, 340, 72, 10);
    x.fill();
    x.fillStyle = '#111';
    x.font = 'bold 22px Arial';
    x.fillText('⚠ MUSE-OS SESSION', W - 340, H - 62);
    x.font = 'bold 22px Arial';
    x.fillText(`Expires in 0:${String(Math.max(0, Math.ceil(secondsLeft))).padStart(2, '0')}`, W - 340, H - 34);
  }
}

export function drawLocked(x, t, title = 'SESSION EXPIRED', sub = 'Please log in again.') {
  const W = x.canvas.width, H = x.canvas.height;
  const g = x.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, '#0d2340');
  g.addColorStop(1, '#2a0f3d');
  x.fillStyle = g;
  x.fillRect(0, 0, W, H);
  x.fillStyle = 'rgba(255,255,255,0.06)';
  for (let i = 0; i < 12; i++) {
    x.beginPath();
    x.arc((i * 173 + t * 20) % W, (i * 97) % H, 60 + (i % 3) * 30, 0, 7);
    x.fill();
  }
  x.textAlign = 'center';
  x.fillStyle = '#fff';
  x.font = 'bold 54px Arial';
  x.fillText('🔒', W / 2, H / 2 - 90);
  x.font = 'bold 48px Arial';
  x.fillText(title, W / 2, H / 2);
  x.font = '28px Arial';
  x.fillStyle = '#c9d6ff';
  x.fillText(sub, W / 2, H / 2 + 50);
  x.font = '22px "Courier New", monospace';
  x.fillStyle = '#7fa0d0';
  x.fillText('MUSE-OS v2.3 — City Museum of Natural History', W / 2, H - 40);
  x.textAlign = 'left';
}

export function drawLogin(x, t, pw = '', msg = '', msgColor = '#ff6b6b') {
  drawLocked(x, t, '', '');
  const W = x.canvas.width, H = x.canvas.height;
  x.fillStyle = 'rgba(0,0,0,0.45)';
  rr(x, W / 2 - 260, H / 2 - 170, 520, 340, 18);
  x.fill();
  x.textAlign = 'center';
  x.fillStyle = '#fff';
  x.font = 'bold 34px Arial';
  x.fillText('NIGHT_GUARD', W / 2, H / 2 - 110);
  x.fillStyle = '#fff';
  rr(x, W / 2 - 200, H / 2 - 70, 400, 56, 10);
  x.fill();
  x.fillStyle = '#222';
  x.font = 'bold 34px Arial';
  x.fillText('•'.repeat(pw.length) + (Math.floor(t * 2) % 2 ? '|' : ''), W / 2, H / 2 - 30);
  x.fillStyle = '#4c8dff';
  rr(x, W / 2 - 200, H / 2 + 6, 190, 50, 10);
  x.fill();
  x.fillStyle = '#ffcc4d';
  rr(x, W / 2 + 10, H / 2 + 6, 190, 50, 10);
  x.fill();
  x.fillStyle = '#fff';
  x.font = 'bold 24px Arial';
  x.fillText('LOG IN', W / 2 - 105, H / 2 + 40);
  x.fillStyle = '#111';
  x.fillText('HINT?', W / 2 + 105, H / 2 + 40);
  if (msg) {
    x.fillStyle = msgColor;
    x.font = 'bold 26px Arial';
    x.fillText(msg, W / 2, H / 2 + 120);
  }
  x.textAlign = 'left';
}

export function drawHintScreen(x, t) {
  const W = x.canvas.width, H = x.canvas.height;
  x.fillStyle = '#000';
  x.fillRect(0, 0, W, H);
  x.textAlign = 'center';
  const g = Math.random() < 0.1 ? (Math.random() - 0.5) * 30 : 0;
  x.fillStyle = '#6dff9e';
  x.font = 'bold 64px "Courier New", monospace';
  x.fillText('SOLVE THE PUZZLES', W / 2 + g, H / 2 - 20);
  x.fillStyle = '#ff3b6b';
  x.fillText('SOLVE THE PUZZLES', W / 2 - g * 0.5 + 3, H / 2 - 20 + 2);
  x.fillStyle = '#6dff9e';
  x.font = '28px "Courier New", monospace';
  x.fillText('PUZZLE #1 SLEEPS WHERE GIANTS ONCE WALKED', W / 2, H / 2 + 50);
  x.fillText('> DINOSAUR HALL', W / 2, H / 2 + 100);
  for (let y = 0; y < H; y += 4) { x.fillStyle = 'rgba(0,0,0,0.3)'; x.fillRect(0, y, W, 2); }
  x.textAlign = 'left';
}

export function drawDenied(x, t) {
  const W = x.canvas.width, H = x.canvas.height;
  x.fillStyle = Math.floor(t * 3) % 2 ? '#3a0000' : '#1a0000';
  x.fillRect(0, 0, W, H);
  x.textAlign = 'center';
  x.fillStyle = '#ff3b3b';
  x.font = 'bold 72px Arial';
  x.fillText('ACCESS DENIED', W / 2, H / 2);
  x.font = '28px Arial';
  x.fillText('Password fragments: 5 / 6', W / 2, H / 2 + 60);
  x.textAlign = 'left';
}

// CCTV wall: 3x2 grid of noisy camera feeds.
export function drawCCTV(x, t, { trexGone = false, day = false } = {}) {
  const W = x.canvas.width, H = x.canvas.height;
  const cw = W / 3, ch = H / 2;
  const labels = ['CAM 1 LOBBY', 'CAM 2 DINO HALL', 'CAM 3 ROMAN', 'CAM 4 ENTRANCE', 'CAM 5 ARCHIVES', 'CAM 6 PARKING'];
  for (let i = 0; i < 6; i++) {
    const cx = (i % 3) * cw, cy = Math.floor(i / 3) * ch;
    x.fillStyle = day ? '#3a4a3a' : '#0c1410';
    x.fillRect(cx, cy, cw, ch);
    x.fillStyle = day ? '#5a6a5a' : '#16241c';
    x.fillRect(cx + 10, cy + ch * 0.6, cw - 20, ch * 0.35);
    if (i === 1 && !trexGone) {
      x.strokeStyle = day ? '#d8d0b8' : '#5a7a66';
      x.lineWidth = 3;
      x.beginPath();
      x.ellipse(cx + cw * 0.5, cy + ch * 0.45, 26, 14, 0, 0, 7);
      x.moveTo(cx + cw * 0.5 + 20, cy + ch * 0.4);
      x.lineTo(cx + cw * 0.72, cy + ch * 0.25);
      x.moveTo(cx + cw * 0.5 - 24, cy + ch * 0.45);
      x.lineTo(cx + cw * 0.2, cy + ch * 0.55);
      x.moveTo(cx + cw * 0.48, cy + ch * 0.55);
      x.lineTo(cx + cw * 0.46, cy + ch * 0.85);
      x.moveTo(cx + cw * 0.55, cy + ch * 0.55);
      x.lineTo(cx + cw * 0.57, cy + ch * 0.85);
      x.stroke();
    }
    const img = x.getImageData(cx, cy, cw, ch);
    const d = img.data;
    for (let p = 0; p < d.length; p += 16) {
      const n = (Math.random() - 0.5) * (day ? 30 : 60);
      d[p] += n; d[p + 1] += n; d[p + 2] += n;
    }
    x.putImageData(img, cx, cy);
    x.fillStyle = day ? '#ffffff' : '#9dffb8';
    x.font = 'bold 13px monospace';
    x.fillText(labels[i], cx + 8, cy + 18);
    if (Math.floor(t * 2) % 2) {
      x.fillStyle = '#ff3b3b';
      x.beginPath(); x.arc(cx + cw - 14, cy + 13, 5, 0, 7); x.fill();
    }
    x.strokeStyle = '#000';
    x.lineWidth = 4;
    x.strokeRect(cx, cy, cw, ch);
  }
}
