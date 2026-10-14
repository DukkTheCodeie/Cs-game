// Builds the line booths: pages (published as claude.ai artifacts, so they work on a phone) for recording
// the characters' lines, one take per line. They mark lines that are new, or whose text changed since the
// take that's in the game (assets/clips/recorded.json).
//   node tools/booth.mjs dev      → dev-recorder.html   the Dev Line Booth
//   node tools/booth.mjs cast     → cast-recorder.html  the Guard & Aaron Booth
//   node tools/booth.mjs --todo   → just list the lines that need (re)recording, in every booth
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export const BOOTHS = {
  dev: { who: ['dev'], out: 'dev-recorder.html', title: 'Dev Line Booth', brand: 'DEV LINE B<span class="o">O</span><span class="o">O</span>TH' },
  cast: { who: ['guard', 'aaron'], out: 'cast-recorder.html', title: 'Guard & Aaron Booth', brand: 'GUARD &amp; AAR<span class="o">O</span>N B<span class="o">O</span><span class="o">O</span>TH' },
};
const NAMES = { dev: ['The dev', '🧑‍💻'], guard: ['Guard (you)', '🔦'], aaron: ['Aaron', '👮'] };

// the same hash as the booth page: tells us when a line's text changed after it was recorded
export function hash(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(16); }

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  globalThis.window = {};
  const { LINES, EMOTIONS } = await import('../src/game/script.js');
  const root = new URL('../', import.meta.url);
  const pkg = JSON.parse(readFileSync(new URL('package.json', root), 'utf8'));
  const recFile = new URL('assets/clips/recorded.json', root);
  const recorded = existsSync(recFile) ? JSON.parse(readFileSync(recFile, 'utf8')) : {};
  const linesOf = (who) => Object.entries(LINES)
    .filter(([, L]) => who.includes(L.who))
    .map(([id, L]) => ({ id, who: L.who, mood: L.mood, text: L.text }))
    .sort((a, b) => who.indexOf(a.who) - who.indexOf(b.who) || a.id.localeCompare(b.id, 'en', { numeric: true }));
  const todo = (lines) => lines.filter((L) => recorded[L.id]?.hash !== hash(L.text));

  if (process.argv.includes('--todo')) {
    for (const [key, B] of Object.entries(BOOTHS)) {
      const lines = linesOf(B.who), left = todo(lines);
      for (const L of left) console.log(`${recorded[L.id] ? 'RE-RECORD' : 'NEW      '} ${L.id}  ${L.text}`);
      console.log(`${B.title} (${key}): ${left.length} of ${lines.length} lines need recording.`);
    }
  } else {
    const key = process.argv[2] || 'dev';
    const B = BOOTHS[key];
    if (!B) { console.error(`usage: node tools/booth.mjs <${Object.keys(BOOTHS).join('|')}> | --todo`); process.exit(1); }
    const lines = linesOf(B.who);
    const cast = B.who.map((w) => ({ who: w, name: NAMES[w][0], emoji: NAMES[w][1] }));
    const fill = (tag, v) => (s) => s.replace(tag, () => v);
    let html = readFileSync(new URL('tools/booth.template.html', root), 'utf8');
    for (const f of [
      fill('__TITLE__', B.title),
      fill('__BRAND__', B.brand),
      fill('/*LINES*/[]', JSON.stringify(lines)),
      fill('/*CAST*/[]', JSON.stringify(cast)),
      fill('/*RECORDED*/{}', JSON.stringify(recorded)),
      fill('/*EMOTIONS*/{}', JSON.stringify(EMOTIONS)),
      fill("/*VERSION*/''", JSON.stringify('v' + pkg.version)),
    ]) html = f(html);
    writeFileSync(new URL(B.out, root), html);
    console.log(`wrote ${B.out}: ${lines.length} lines, ${todo(lines).length} to record`);
  }
}
