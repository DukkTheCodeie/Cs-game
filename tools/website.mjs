// The museum website (website/index.html) is one file to paste into Google Sites. This writes three things
// into it: the photos (website/photos/*.webp, taken inside the game), the answers to its puzzles (as hashes),
// and the staff-only area (below, scrambled with the staff password), so reading the page's code gives none of
// the secrets away. Run it after changing any of them: npm run website
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const page = new URL('website/index.html', root);
const photoDir = new URL('website/photos/', root);

// the same hash the page uses (cyrb53)
function hash(str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) { ch = str.charCodeAt(i); h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677); }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

// the website's puzzles: the Dinosaur Hall word, the Roman number, and the staff password
// (the game's five fragments, then fragment six: the word and the number)
const ANSWERS = { dino: 'SHIFT', rome: '47', five: 'REXMUMMY1974ZAPDONUT', pw: 'REXMUMMY1974ZAPDONUTSHIFT47' };

// The staff-only area, shown after signing in to the staff portal. Photos in it use data-photo like the
// rest of the page.
const STAFF = `
<p class="eyebrow">MUSE-OS · Signed in as NIGHT_GUARD</p>
<h2>Welcome back</h2>
<p class="lede" style="margin-top:10px">The password was REX, MUMMY, 1974, ZAP, DONUT and SHIFT47. The sixth piece was your own shift number.</p>

<h3 style="margin-top:28px">Security cameras, last night</h3>
<div class="cams">
  <figure class="cam"><img data-photo="noffice" alt="The security office at night"><figcaption>CAM 1 · SECURITY OFFICE · 23:52</figcaption></figure>
  <figure class="cam"><img data-photo="ndino" alt="The Dinosaur Hall at night"><figcaption>CAM 2 · DINOSAUR HALL · 00:03</figcaption></figure>
  <figure class="cam"><img data-photo="nlobby" alt="The lobby at night"><figcaption>CAM 4 · LOBBY · 01:02</figcaption></figure>
  <figure class="cam"><img data-photo="archive" alt="The archives"><figcaption>CAM 5 · ARCHIVES · NO SIGNAL</figcaption></figure>
</div>

<div class="staff-cols">
  <section class="log">
    <h3>Night shift log, shift #47</h3>
    <ul>
      <li><b>11:52 PM</b> Session expired. donut123 doesn't work anymore. The screen just says SOLVE THE PUZZLES.</li>
      <li><b>12:00 AM</b> Panel in the Dino Hall. Got REX. Turned around and the T-Rex was gone. GONE.</li>
      <li><b>12:40 AM</b> Followed the footprints into the Egyptian Wing. Pillars, then the Pharaoh's Lock. Got MUMMY. Then the mummy woke up and I gave him a donut. Not putting that in the real report.</li>
      <li><b>1:02 AM</b> Roman Hall. The code was 1974. Then the T-Rex was right behind me, so I ran.</li>
      <li><b>1:10 AM</b> Ended up in the archives. ZAP. DONUT. Kept going. No fragment six anywhere.</li>
      <li><b>???</b> Fell asleep.</li>
      <li><b>7:00 AM</b> Woke up in the Dino Hall. The T-Rex is back. It has my hat.</li>
    </ul>
  </section>
  <aside>
    <div class="note"><h4>From IT</h4><p>All staff passwords were changed at 11:52 PM for the yearly security update. If you're locked out, come and see us between 9 AM and 5 PM.</p></div>
    <div class="note"><h4>Employee of the Month</h4><p>Aaron, for the twelfth month in a row.</p></div>
    <div class="note"><h4>Parade day</h4><p>Museum Avenue is closed from 9 AM. Night staff, please leave by the side door.</p></div>
    <div class="note"><h4>From the developer</h4><p>You found the secret staff area. Thanks for playing LOCKED OUT! If you liked it, or found a bug, fill out the comment card at the bottom of the page. I read every one. — Hudson</p></div>
  </aside>
</div>
`;

function scramble(text, pw) {
  let seed = hash(pw, 1974) >>> 0;
  const rnd = () => { seed = (seed + 0x6D2B79F5) >>> 0; let t = seed; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) & 255; };
  const bytes = Buffer.from(text, 'utf8');
  for (let i = 0; i < bytes.length; i++) bytes[i] ^= rnd();
  return bytes.toString('base64');
}

const photos = {};
for (const f of readdirSync(photoDir).filter((n) => n.endsWith('.webp')).sort()) {
  photos[f.replace(/\.webp$/, '')] = 'data:image/webp;base64,' + readFileSync(new URL(f, photoDir)).toString('base64');
}
const hashes = Object.fromEntries(Object.entries(ANSWERS).map(([k, v]) => [k, hash(v, 47)]));
let html = readFileSync(page, 'utf8');
const swap = (name, value) => {
  const re = new RegExp(`/\\*${name}\\*/[\\s\\S]*?/\\*END\\*/`);
  if (!re.test(html)) throw new Error(`no /*${name}*/ … /*END*/ in website/index.html`);
  html = html.replace(re, () => `/*${name}*/${value}/*END*/`);
};
swap('PHOTOS', JSON.stringify(photos));
swap('ANSWERS', JSON.stringify(hashes));
swap('STAFF', JSON.stringify(scramble(STAFF.trim(), ANSWERS.pw)));
writeFileSync(page, html);
console.log(`wrote website/index.html: ${(html.length / 1024).toFixed(0)} KB (${Object.keys(photos).length} photos, staff area ${(STAFF.length / 1024).toFixed(1)} KB scrambled)`);
