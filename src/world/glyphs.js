// Hieroglyph-style symbols for the Egyptian Wing, drawn with plain canvas shapes so they look
// the same everywhere (on the 3D pillars and in the Pharaoh's Lock puzzle).

export const GLYPHS = {
  bird: 'Bird',
  eye: 'Eye',
  snake: 'Snake',
  ankh: 'Ankh',
  scarab: 'Beetle',
  sun: 'Sun',
  feather: 'Feather',
  water: 'Water',
};
export const GLYPH_KEYS = Object.keys(GLYPHS);

// The Pharaoh's Lock answer: pillar | , || , ||| , ||||
export const PHARAOH_CODE = ['bird', 'eye', 'snake', 'ankh'];

// Draw glyph `kind` centered at (cx, cy), fitting in a box of size s.
export function drawGlyph(x, kind, cx, cy, s, color = '#1d3f8f') {
  x.save();
  x.translate(cx, cy);
  x.scale(s / 100, s / 100);
  x.fillStyle = color;
  x.strokeStyle = color;
  x.lineWidth = 7;
  x.lineCap = 'round';
  x.lineJoin = 'round';
  const P = (pts) => { x.beginPath(); pts.forEach(([px, py], i) => (i ? x.lineTo(px, py) : x.moveTo(px, py))); };
  switch (kind) {
    case 'eye': {
      // Eye of Horus
      x.beginPath(); x.moveTo(-42, 0); x.quadraticCurveTo(0, -34, 42, 0); x.quadraticCurveTo(0, 26, -42, 0); x.stroke();
      x.beginPath(); x.arc(0, -2, 12, 0, Math.PI * 2); x.fill();
      x.beginPath(); x.moveTo(-36, -22); x.quadraticCurveTo(0, -46, 40, -24); x.stroke();
      P([[-6, 14], [-10, 40]]); x.stroke();
      x.beginPath(); x.moveTo(8, 12); x.quadraticCurveTo(20, 40, 36, 30); x.quadraticCurveTo(44, 20, 30, 18); x.stroke();
      break;
    }
    case 'bird': {
      // ibis-ish: body, long beak, legs
      x.beginPath(); x.ellipse(4, 0, 30, 18, -0.2, 0, Math.PI * 2); x.fill();
      x.beginPath(); x.arc(-26, -26, 11, 0, Math.PI * 2); x.fill();
      P([[-30, -22], [-48, 8]]); x.stroke();
      P([[-18, -20], [-12, -6]]); x.stroke();
      P([[30, -6], [46, 4], [30, 10]]); x.fill();
      P([[0, 16], [-6, 44]]); x.stroke();
      P([[12, 16], [16, 44]]); x.stroke();
      break;
    }
    case 'snake': {
      // cobra
      x.lineWidth = 10;
      x.beginPath(); x.moveTo(-44, 36); x.bezierCurveTo(-10, 46, 10, 20, 26, 26); x.bezierCurveTo(44, 32, 40, 4, 22, -2); x.stroke();
      x.beginPath(); x.ellipse(18, -20, 15, 24, 0.1, 0, Math.PI * 2); x.fill();
      x.fillStyle = '#e8d5a8';
      x.beginPath(); x.arc(14, -28, 3.5, 0, Math.PI * 2); x.fill();
      x.strokeStyle = color; x.lineWidth = 4;
      P([[22, -44], [24, -54]]); x.stroke();
      break;
    }
    case 'ankh': {
      x.lineWidth = 12;
      x.beginPath(); x.ellipse(0, -26, 15, 20, 0, 0, Math.PI * 2); x.stroke();
      P([[-34, 2], [34, 2]]); x.stroke();
      P([[0, -6], [0, 46]]); x.stroke();
      break;
    }
    case 'scarab': {
      x.beginPath(); x.ellipse(0, 6, 22, 28, 0, 0, Math.PI * 2); x.fill();
      x.beginPath(); x.ellipse(0, -28, 14, 10, 0, 0, Math.PI * 2); x.fill();
      for (const s of [-1, 1]) for (const k of [-1, 0, 1]) { P([[s * 18, k * 16 + 4], [s * 38, k * 20 - 4], [s * 44, k * 24 + 6]]); x.stroke(); }
      x.strokeStyle = '#e8d5a8'; x.lineWidth = 3; P([[0, -18], [0, 32]]); x.stroke();
      break;
    }
    case 'sun': {
      x.beginPath(); x.arc(0, 0, 22, 0, Math.PI * 2); x.fill();
      x.lineWidth = 6;
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2;
        P([[Math.cos(a) * 30, Math.sin(a) * 30], [Math.cos(a) * 44, Math.sin(a) * 44]]); x.stroke();
      }
      break;
    }
    case 'feather': {
      x.beginPath(); x.moveTo(-4, 46); x.quadraticCurveTo(-30, -6, 6, -46); x.quadraticCurveTo(28, -8, 6, 30); x.closePath(); x.fill();
      x.strokeStyle = '#e8d5a8'; x.lineWidth = 3;
      x.beginPath(); x.moveTo(-2, 44); x.quadraticCurveTo(-4, 0, 6, -40); x.stroke();
      x.strokeStyle = color; x.lineWidth = 7;
      P([[-4, 46], [-8, 50]]); x.stroke();
      break;
    }
    case 'water': {
      x.lineWidth = 6;
      for (const y of [-20, 0, 20]) {
        x.beginPath();
        for (let i = 0; i <= 8; i++) x.lineTo(-42 + i * 10.5, y + (i % 2 ? -8 : 8));
        x.stroke();
      }
      break;
    }
    default:
      break;
  }
  x.restore();
}

// Egyptian numbers: ∩ (a heel bone) is 10 and | is 1, so ∩∩||| is 23. Tens first, then ones.
export const EGYPT_NUMERAL = (v) => '∩'.repeat(Math.floor(v / 10)) + '|'.repeat(v % 10);
export function drawNumeral(x, value, cx, cy, h, color = '#7a1a10') {
  const tens = Math.floor(value / 10), ones = value % 10;
  const aw = h * 0.42, sw = h * 0.12, gap = h * 0.14;
  const total = tens * aw + Math.max(0, tens - 1) * gap + (tens && ones ? gap * 1.6 : 0) + ones * sw + Math.max(0, ones - 1) * gap;
  let px = cx - total / 2;
  x.save();
  x.strokeStyle = color;
  x.fillStyle = color;
  x.lineWidth = h * 0.12;
  x.lineCap = 'round';
  for (let i = 0; i < tens; i++) {
    x.beginPath();
    x.moveTo(px + x.lineWidth / 2, cy + h / 2);
    x.lineTo(px + x.lineWidth / 2, cy - h * 0.12);
    x.arc(px + aw / 2, cy - h * 0.12, aw / 2 - x.lineWidth / 2, Math.PI, 0);
    x.lineTo(px + aw - x.lineWidth / 2, cy + h / 2);
    x.stroke();
    px += aw + (i < tens - 1 ? gap : 0);
  }
  if (tens && ones) px += gap * 1.6;
  for (let i = 0; i < ones; i++) { x.fillRect(px, cy - h / 2, sw, h); px += sw + gap; }
  x.restore();
}
