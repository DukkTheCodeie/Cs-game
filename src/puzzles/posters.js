// The posters for the sliding "torn poster" puzzle: a different one each time. All drawn in code
// (360×360), each with a big title and a picture, so every one of the 9 pieces looks different.

const S = 360;
const TAU = Math.PI * 2;

function title(x, text, y, size, fill = '#fff', stroke = '#1a1020', font = 'Arial Black, Arial') {
  x.font = `900 ${size}px ${font}`;
  x.textAlign = 'center';
  x.textBaseline = 'alphabetic';
  x.lineJoin = 'round';
  x.lineWidth = Math.max(4, size / 7);
  x.strokeStyle = stroke;
  x.strokeText(text, S / 2, y);
  x.fillStyle = fill;
  x.fillText(text, S / 2, y);
}
function grad(x, stops, x0 = 0, y0 = 0, x1 = 0, y1 = S) {
  const g = x.createLinearGradient(x0, y0, x1, y1);
  stops.forEach((c, i) => g.addColorStop(i / (stops.length - 1), c));
  return g;
}
function bg(x, stops) { x.fillStyle = grad(x, stops); x.fillRect(0, 0, S, S); }
function circle(x, cx, cy, r, fill) { x.fillStyle = fill; x.beginPath(); x.arc(cx, cy, r, 0, TAU); x.fill(); }
function poly(x, pts, fill) { x.fillStyle = fill; x.beginPath(); pts.forEach(([a, b], i) => (i ? x.lineTo(a, b) : x.moveTo(a, b))); x.closePath(); x.fill(); }
function rays(x, cx, cy, n, fill) { x.fillStyle = fill; for (let i = 0; i < n; i++) { const a = (i / n) * TAU; x.beginPath(); x.moveTo(cx, cy); x.arc(cx, cy, 400, a, a + Math.PI / n); x.fill(); } }
function stars(x, n, seed = 1, color = '#fff') {
  let s = seed;
  const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  x.fillStyle = color;
  for (let i = 0; i < n; i++) { const sz = r() * 2.2 + 0.6; x.fillRect(r() * S, r() * S * 0.7, sz, sz); }
}
function border(x, color, w = 10) { x.strokeStyle = color; x.lineWidth = w; x.strokeRect(w / 2, w / 2, S - w, S - w); }
function sprinkles(x, cx, cy, r0, r1, n) {
  const cols = ['#3bc9ff', '#ffe14d', '#7dff6b', '#fff', '#b86bff'];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * TAU * 3.7, r = r0 + ((i * 37) % 100) / 100 * (r1 - r0);
    x.save(); x.translate(cx + Math.cos(a) * r, cy + Math.sin(a) * r); x.rotate(i * 1.3);
    x.fillStyle = cols[i % 5]; x.fillRect(-6, -2, 12, 4); x.restore();
  }
}
function donut(x, cx, cy, r, icing = '#ff7eb6', hole = '#7a1f4d') {
  circle(x, cx, cy, r, '#d49a5c');
  circle(x, cx, cy - r * 0.06, r * 0.9, icing);
  circle(x, cx, cy - r * 0.03, r * 0.34, hole);
  sprinkles(x, cx, cy - r * 0.05, r * 0.45, r * 0.82, 34);
}
// a chunky cartoon T-Rex in profile facing right, standing on (cx, by)
function trex(x, cx, by, s, fill) {
  x.save(); x.translate(cx, by); x.scale(s, s);
  poly(x, [[-150, -60], [-60, -95], [10, -120], [40, -150], [110, -150], [125, -120], [80, -110], [70, -95], [40, -90], [30, -60], [10, -40], [5, 0], [-20, 0], [-25, -35], [-45, -40], [-40, 0], [-65, 0], [-70, -45], [-110, -55]], fill);
  poly(x, [[25, -88], [45, -78], [40, -70]], fill);
  x.restore();
}

const POSTERS = [
  { name: 'DONUT DAY', draw(x) {
    bg(x, ['#ff9a5a', '#7a1f4d']);
    rays(x, 180, 200, 12, 'rgba(255,255,255,0.15)');
    donut(x, 180, 220, 90);
    poly(x, [[260, 120], [350, 90], [360, 150], [300, 175], [250, 160]], '#2b1d14');
    x.fillStyle = '#fff';
    for (let i = 0; i < 5; i++) poly(x, [[262 + i * 16, 160 - i * 3], [268 + i * 16, 175 - i * 3], [274 + i * 16, 158 - i * 3]], '#fff');
    circle(x, 320, 110, 7, '#ff3b3b');
    title(x, 'DONUT DAY', 64, 50);
    title(x, 'MUSEUM GIFT SHOP', 344, 30);
  } },
  { name: 'THE AGE OF DINOSAURS', draw(x) {
    bg(x, ['#2a1446', '#c2385a', '#ffb347']);
    circle(x, 250, 200, 70, '#ffd36b');
    poly(x, [[0, 280], [70, 180], [130, 260], [200, 150], [290, 280], [360, 210], [360, 360], [0, 360]], '#3a1a2a');
    trex(x, 150, 330, 1.1, '#120a14');
    title(x, 'THE AGE OF', 56, 34, '#ffe9c2');
    title(x, 'DINOSAURS', 100, 52, '#ffd36b');
  } },
  { name: 'CURSE OF THE PHARAOH', draw(x) {
    bg(x, ['#0f1b4a', '#3b5bb5', '#f2b866']);
    circle(x, 270, 120, 46, '#fff1b8');
    poly(x, [[30, 300], [130, 160], [230, 300]], '#c9973e');
    poly(x, [[130, 160], [230, 300], [170, 300]], '#a3772c');
    poly(x, [[180, 300], [260, 200], [340, 300]], '#d8a650');
    poly(x, [[260, 200], [340, 300], [290, 300]], '#b2843a');
    x.fillStyle = '#e8c57a'; x.fillRect(0, 300, S, 60);
    // eye of Horus
    x.strokeStyle = '#13235c'; x.lineWidth = 6;
    x.beginPath(); x.ellipse(180, 220, 34, 16, 0, 0, TAU); x.stroke();
    circle(x, 180, 220, 9, '#13235c');
    title(x, 'CURSE OF THE', 54, 32, '#ffe08a', '#13235c');
    title(x, 'PHARAOH', 100, 54, '#ffcc4d', '#13235c');
    title(x, 'EGYPTIAN WING', 344, 26, '#13235c', '#ffe08a');
  } },
  { name: 'ALL ROADS LEAD TO ROME', draw(x) {
    bg(x, ['#8a1022', '#d4502e']);
    rays(x, 180, 380, 16, 'rgba(255,220,150,0.12)');
    // colosseum
    x.fillStyle = '#e9d8b4'; x.fillRect(60, 170, 240, 130);
    x.fillStyle = '#7a1018';
    for (let r = 0; r < 3; r++) for (let i = 0; i < 7; i++) { x.beginPath(); x.ellipse(82 + i * 33, 195 + r * 40, 11, 15, 0, 0, TAU); x.fill(); }
    x.fillStyle = '#c9b48a'; x.fillRect(50, 160, 260, 12); x.fillRect(50, 298, 260, 10);
    // laurel leaves around SPQR
    for (const s of [-1, 1]) for (let i = 0; i < 5; i++) {
      x.save(); x.translate(180 + s * (62 + i * 9), 334 - i * 6); x.rotate(s * (0.9 - i * 0.25));
      x.fillStyle = '#e9c46a'; x.beginPath(); x.ellipse(0, 0, 9, 4, 0, 0, TAU); x.fill(); x.restore();
    }
    title(x, 'ALL ROADS', 62, 46, '#ffe08a', '#3a0810');
    title(x, 'LEAD TO ROME', 104, 38, '#fff', '#3a0810');
    title(x, 'SPQR', 345, 32, '#e9c46a', '#3a0810');
  } },
  { name: 'MUSEUM AFTER DARK', draw(x) {
    bg(x, ['#050a24', '#1d2a6a']);
    stars(x, 90, 7);
    circle(x, 290, 70, 34, '#f4f1d0'); circle(x, 304, 62, 30, '#14205a');
    // museum facade
    poly(x, [[60, 210], [180, 150], [300, 210]], '#cfc7b0');
    x.fillStyle = '#e6dfc8'; x.fillRect(70, 210, 220, 110);
    x.fillStyle = '#1a2250'; for (let i = 0; i < 5; i++) x.fillRect(86 + i * 42, 228, 20, 92);
    x.fillStyle = '#ffd36b'; x.fillRect(166, 262, 28, 58);
    title(x, 'OPEN LATE', 120, 44, '#ffd36b', '#050a24');
    title(x, 'MUSEUM AFTER DARK', 350, 28, '#cfe0ff', '#050a24');
  } },
  { name: 'DEEP SEA GIANTS', draw(x) {
    bg(x, ['#1aa3c9', '#0a3d73', '#04142e']);
    x.fillStyle = 'rgba(255,255,255,0.12)';
    for (let i = 0; i < 6; i++) poly(x, [[40 + i * 60, 0], [70 + i * 60, 0], [10 + i * 70, 360], [-10 + i * 70, 360]], 'rgba(255,255,255,0.06)');
    // whale
    x.fillStyle = '#3d6fb0';
    x.beginPath(); x.ellipse(170, 210, 120, 52, -0.1, 0, TAU); x.fill();
    poly(x, [[290, 190], [350, 150], [335, 205], [352, 255], [290, 225]], '#3d6fb0');
    x.fillStyle = '#d9ecff'; x.beginPath(); x.ellipse(160, 238, 95, 20, -0.08, 0, Math.PI); x.fill();
    circle(x, 95, 200, 7, '#04142e');
    for (let i = 0; i < 9; i++) { x.strokeStyle = 'rgba(255,255,255,0.7)'; x.lineWidth = 2; x.beginPath(); x.arc(70 + i * 26, 160 - (i % 3) * 16, 5 + (i % 3) * 2, 0, TAU); x.stroke(); }
    title(x, 'DEEP SEA', 62, 50, '#bff3ff', '#04142e');
    title(x, 'GIANTS', 340, 54, '#ffffff', '#04142e');
  } },
  { name: 'MEET THE MUMMY', draw(x) {
    bg(x, ['#3a2a5c', '#1a1030']);
    rays(x, 180, 220, 14, 'rgba(255,230,160,0.07)');
    // mummy
    x.fillStyle = '#e8dcc0';
    x.beginPath(); x.ellipse(180, 250, 70, 100, 0, 0, TAU); x.fill();
    circle(x, 180, 140, 52, '#e8dcc0');
    x.strokeStyle = '#b8a77e'; x.lineWidth = 4;
    for (let i = 0; i < 12; i++) { x.beginPath(); x.moveTo(120, 100 + i * 20); x.lineTo(240, 92 + i * 20 + (i % 2) * 10); x.stroke(); }
    circle(x, 162, 136, 9, '#ff5a3c'); circle(x, 198, 136, 9, '#ff5a3c');
    // waving arm
    x.fillStyle = '#e8dcc0'; x.save(); x.translate(245, 220); x.rotate(-0.9); x.fillRect(0, -14, 80, 28); x.restore();
    donut(x, 300, 140, 22);
    title(x, 'MEET THE', 50, 34, '#ffe9a8', '#1a1030');
    title(x, 'MUMMY', 345, 56, '#ffcc4d', '#1a1030');
  } },
  { name: 'VOLCANOES!', draw(x) {
    bg(x, ['#2b0f0f', '#7a1f12', '#ff8a3c']);
    poly(x, [[30, 330], [150, 140], [210, 140], [330, 330]], '#3a2420');
    poly(x, [[150, 140], [165, 175], [180, 150], [195, 180], [210, 140]], '#ff5a1f');
    poly(x, [[165, 175], [150, 260], [175, 230], [190, 300], [195, 180]], '#ff7a2a');
    for (let i = 0; i < 14; i++) circle(x, 180 + Math.cos(i * 1.7) * (30 + i * 6), 130 - (i % 5) * 10, 6 + (i % 4) * 3, i % 2 ? '#ffb347' : '#ff5a1f');
    x.fillStyle = '#1a0a08'; x.fillRect(0, 330, S, 30);
    title(x, 'VOLCANOES!', 62, 44, '#ffd36b', '#2b0f0f');
    title(x, 'HOT STUFF', 350, 24, '#ffb347', '#1a0a08');
  } },
  { name: 'MAMMOTH MONTH', draw(x) {
    bg(x, ['#cfe8ff', '#8fb6d9', '#f4f8ff']);
    poly(x, [[0, 280], [90, 200], [170, 260], [260, 180], [360, 270], [360, 360], [0, 360]], '#ffffff');
    // mammoth
    x.fillStyle = '#7a4a2a';
    x.beginPath(); x.ellipse(170, 220, 95, 70, 0, 0, TAU); x.fill();
    circle(x, 255, 185, 48, '#7a4a2a');
    for (const lx of [100, 140, 200, 235]) x.fillRect(lx, 260, 26, 62);
    x.fillStyle = '#6a3e22'; x.fillRect(270, 205, 22, 90);
    x.strokeStyle = '#fff7e6'; x.lineWidth = 9; x.lineCap = 'round';
    x.beginPath(); x.moveTo(270, 215); x.quadraticCurveTo(330, 270, 300, 300); x.stroke();
    circle(x, 268, 172, 6, '#1a0f08');
    title(x, 'MAMMOTH', 62, 54, '#5a3418', '#ffffff');
    title(x, 'MONTH', 106, 40, '#2a5a8a', '#ffffff');
  } },
  { name: '50 YEARS', draw(x) {
    bg(x, ['#1b2a6b', '#2d4fb0']);
    for (let i = 0; i < 70; i++) { x.save(); x.translate((i * 97) % S, (i * 53) % S); x.rotate(i); x.fillStyle = ['#ff6fae', '#ffd36b', '#7dff6b', '#3bc9ff', '#fff'][i % 5]; x.fillRect(-6, -3, 12, 6); x.restore(); }
    title(x, '50', 230, 190, '#ffd36b', '#0b1440');
    title(x, 'HAPPY BIRTHDAY,', 52, 30, '#ffffff', '#0b1440');
    title(x, 'CITY MUSEUM!', 300, 40, '#ff8fbf', '#0b1440');
    title(x, '1974 – 2024', 344, 24, '#cfe0ff', '#0b1440');
  } },
  { name: 'FLY PTERODACTYL AIR', draw(x) {
    bg(x, ['#5fc3ff', '#bfe8ff']);
    for (const [cx, cy, r] of [[70, 280, 40], [110, 270, 50], [160, 285, 36], [270, 120, 30], [310, 112, 38]]) circle(x, cx, cy, r, '#ffffff');
    // pterodactyl
    x.save(); x.translate(180, 170);
    poly(x, [[-150, -10], [-20, -30], [0, 0], [-20, 10]], '#7a5a9a');
    poly(x, [[150, -40], [20, -30], [0, 0], [20, 12]], '#7a5a9a');
    x.fillStyle = '#5a3f7a'; x.beginPath(); x.ellipse(0, 0, 34, 14, 0.1, 0, TAU); x.fill();
    poly(x, [[25, -8], [80, 5], [25, 6]], '#ffb347');
    poly(x, [[20, -12], [5, -38], [30, -14]], '#5a3f7a');
    circle(x, 22, -4, 3, '#fff');
    x.restore();
    title(x, 'FLY', 70, 56, '#ffffff', '#2a3a7a');
    title(x, 'PTERODACTYL AIR', 340, 30, '#2a3a7a', '#ffffff');
  } },
  { name: 'GEMS & MINERALS', draw(x) {
    bg(x, ['#14082a', '#3a1466']);
    rays(x, 180, 220, 18, 'rgba(180,140,255,0.08)');
    const gem = (cx, cy, s, c1, c2) => {
      poly(x, [[cx - s, cy - s * 0.3], [cx - s * 0.5, cy - s], [cx + s * 0.5, cy - s], [cx + s, cy - s * 0.3], [cx, cy + s * 1.2]], c1);
      poly(x, [[cx - s * 0.5, cy - s], [cx + s * 0.5, cy - s], [cx, cy - s * 0.3]], c2);
      poly(x, [[cx - s, cy - s * 0.3], [cx, cy - s * 0.3], [cx, cy + s * 1.2]], 'rgba(255,255,255,0.18)');
    };
    gem(180, 200, 70, '#3bc9ff', '#bff3ff');
    gem(80, 250, 36, '#ff6fae', '#ffd0e6');
    gem(280, 250, 40, '#7dff6b', '#d8ffd0');
    gem(110, 140, 22, '#ffd36b', '#fff4c2');
    gem(260, 130, 26, '#b86bff', '#e6d0ff');
    title(x, 'GEMS &', 60, 44, '#ffffff', '#14082a');
    title(x, 'MINERALS', 345, 46, '#bff3ff', '#14082a');
  } },
  { name: 'THE GREAT DONUT HEIST', draw(x) {
    bg(x, ['#111', '#2a2a2a']);
    x.fillStyle = '#ffd36b'; x.beginPath(); x.moveTo(180, 0); x.lineTo(60, 360); x.lineTo(300, 360); x.closePath(); x.globalAlpha = 0.25; x.fill(); x.globalAlpha = 1;
    donut(x, 180, 220, 86, '#c67bff', '#222');
    // robber mask
    x.fillStyle = '#111'; x.fillRect(100, 175, 160, 34);
    circle(x, 150, 192, 12, '#fff'); circle(x, 210, 192, 12, '#fff');
    circle(x, 153, 194, 5, '#111'); circle(x, 213, 194, 5, '#111');
    title(x, 'THE GREAT', 56, 40, '#ffd36b', '#000');
    title(x, 'DONUT HEIST', 104, 44, '#ffffff', '#000');
    title(x, 'NOW SHOWING · ROXY', 346, 22, '#ffd36b', '#000');
  } },
  { name: 'BEWARE OF T-REX', draw(x) {
    bg(x, ['#ffd23f', '#ffb000']);
    x.fillStyle = '#1a1a1a';
    for (let i = -2; i < 12; i++) poly(x, [[i * 40, 0], [i * 40 + 20, 0], [i * 40 - 10, 30], [i * 40 - 30, 30]], '#1a1a1a');
    for (let i = -2; i < 12; i++) poly(x, [[i * 40, 330], [i * 40 + 20, 330], [i * 40 - 10, 360], [i * 40 - 30, 360]], '#1a1a1a');
    poly(x, [[180, 84], [290, 272], [70, 272]], '#1a1a1a');
    poly(x, [[180, 108], [268, 260], [92, 260]], '#ffd23f');
    trex(x, 192, 252, 0.55, '#1a1a1a');
    title(x, 'BEWARE OF', 66, 40, '#1a1a1a', '#ffd23f');
    title(x, 'T-REX', 316, 40, '#1a1a1a', '#ffd23f');
  } },
  { name: 'THANK A SECURITY GUARD', draw(x) {
    bg(x, ['#0b1430', '#24407a']);
    // flashlight beam
    x.fillStyle = 'rgba(255,240,180,0.25)'; x.beginPath(); x.moveTo(215, 205); x.lineTo(360, 120); x.lineTo(360, 300); x.closePath(); x.fill();
    // guard
    x.fillStyle = '#1b2a55'; x.fillRect(120, 200, 110, 130);
    circle(x, 175, 160, 44, '#e7b98f');
    x.fillStyle = '#3a5aa8'; x.fillRect(131, 104, 88, 26); x.fillStyle = '#0a0f22'; x.fillRect(122, 126, 106, 10);
    circle(x, 175, 116, 7, '#e9c46a');
    circle(x, 160, 160, 5, '#1a1020'); circle(x, 190, 160, 5, '#1a1020');
    x.strokeStyle = '#1a1020'; x.lineWidth = 4; x.beginPath(); x.arc(175, 172, 14, 0.2, Math.PI - 0.2); x.stroke();
    x.fillStyle = '#e9c46a'; x.fillRect(140, 225, 20, 16);
    x.fillStyle = '#333'; x.fillRect(205, 196, 30, 14);
    title(x, 'THANK A', 56, 38, '#ffd36b', '#0b1430');
    title(x, 'SECURITY GUARD', 92, 32, '#ffffff', '#0b1430');
    title(x, 'THEY HAVE DONUTS', 350, 24, '#cfe0ff', '#0b1430');
  } },
  { name: 'TO THE STARS', draw(x) {
    bg(x, ['#000814', '#16234f']);
    stars(x, 140, 3);
    circle(x, 70, 300, 120, '#5a6a9a'); circle(x, 40, 280, 22, '#4a5888'); circle(x, 110, 330, 16, '#4a5888');
    // rocket
    x.save(); x.translate(230, 170); x.rotate(0.5);
    x.fillStyle = '#eeeeee'; x.beginPath(); x.ellipse(0, 0, 26, 70, 0, 0, TAU); x.fill();
    poly(x, [[-26, 20], [-50, 70], [-20, 50]], '#ff3b3b'); poly(x, [[26, 20], [50, 70], [20, 50]], '#ff3b3b');
    poly(x, [[-14, 62], [0, 110], [14, 62]], '#ffb347');
    circle(x, 0, -15, 12, '#3bc9ff');
    x.restore();
    title(x, 'TO THE', 58, 40, '#ffffff', '#000814');
    title(x, 'STARS', 110, 56, '#ffd36b', '#000814');
    title(x, 'PLANETARIUM', 350, 26, '#cfe0ff', '#000814');
  } },
];

export const POSTER_COUNT = POSTERS.length;

const cache = new Map();
// The poster as a canvas (index wraps around; omit it for a random one).
export function posterCanvas(i = Math.floor(Math.random() * POSTERS.length)) {
  i = ((i % POSTERS.length) + POSTERS.length) % POSTERS.length;
  if (!cache.has(i)) {
    const c = document.createElement('canvas');
    c.width = c.height = S;
    const x = c.getContext('2d');
    x.save();
    POSTERS[i].draw(x);
    x.restore();
    border(x, 'rgba(0,0,0,0.35)', 6);
    cache.set(i, c);
  }
  return cache.get(i);
}

const urls = new Map();
export function posterImage(i) {
  const c = posterCanvas(i);
  if (!urls.has(c)) urls.set(c, c.toDataURL());
  return urls.get(c);
}
