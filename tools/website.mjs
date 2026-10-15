// The museum website (website/index.html) keeps its puzzle answers as hashes and its staff-only area
// scrambled with the staff password, so reading the page's code gives neither away. This writes both in.
// Run it after editing website/staff.html (or the answers below): npm run website
import { readFileSync, writeFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const page = new URL('website/index.html', root);
const staff = new URL('website/staff.html', root);

// the same hash the page uses (cyrb53)
function hash(str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) { ch = str.charCodeAt(i); h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677); }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

// the website's puzzles: the Dinosaur Hall word, the Roman number, and the staff password
// (the game's five fragments, then fragment six = the word + the number)
const ANSWERS = { dino: 'SHIFT', rome: '47', five: 'REXMUMMY1974ZAPDONUT', pw: 'REXMUMMY1974ZAPDONUTSHIFT47' };

function scramble(text, pw) {
  let seed = hash(pw, 1974) >>> 0;
  const rnd = () => { seed = (seed + 0x6D2B79F5) >>> 0; let t = seed; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) & 255; };
  const bytes = Buffer.from(text, 'utf8');
  for (let i = 0; i < bytes.length; i++) bytes[i] ^= rnd();
  return bytes.toString('base64');
}

const hashes = Object.fromEntries(Object.entries(ANSWERS).map(([k, v]) => [k, hash(v, 47)]));
const secret = readFileSync(staff, 'utf8').replace(/^<!--[\s\S]*?-->\s*/, '');
let html = readFileSync(page, 'utf8');
const swap = (name, value) => {
  const re = new RegExp(`/\\*${name}\\*/[\\s\\S]*?/\\*END\\*/`);
  if (!re.test(html)) throw new Error(`no /*${name}*/ … /*END*/ in website/index.html`);
  html = html.replace(re, () => `/*${name}*/${value}/*END*/`);
};
swap('ANSWERS', JSON.stringify(hashes));
swap('STAFF', JSON.stringify(scramble(secret, ANSWERS.pw)));
writeFileSync(page, html);
console.log(`wrote website/index.html: ${(html.length / 1024).toFixed(0)} KB, staff area ${(secret.length / 1024).toFixed(1)} KB scrambled`);
