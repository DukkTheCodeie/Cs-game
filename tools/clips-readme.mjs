// Regenerates assets/clips/README.md from the lines in src/game/script.js.
//   node tools/clips-readme.mjs
import { writeFileSync } from 'node:fs';

globalThis.window = {};
const { LINES, EMOTIONS, SPEAKER_EMOTIONS } = await import('../src/game/script.js');

const ACTORS = [
  ['guard', '💂 You — the security guard'],
  ['dev', '📺 The developer (on the menu TV)'],
  ['aaron', '🧢 Aaron'],
  ['mummy', '🧟 The Mummy'],
];
const count = (who, mood) => Object.values(LINES).filter((L) => L.who === who && L.mood === mood).length;
const clean = (t) => t.replace(/\|/g, '\\|');

let md = `# 🎬 Put yourself in the game

The game only uses photos and videos from **this folder**, so only people who can change this repo — you —
decide who's in the game. Anything missing uses the cartoon actor (who makes the same faces).

## 🎭 The easy way: act out the emotions

Every line in the game has an emotion. Make each face **once** — as a photo, or a short silent video — and
every line with that emotion uses it. You don't need all of them: anything missing uses the cartoon.

`;
for (const [who, title] of ACTORS) {
  const moods = Object.keys(EMOTIONS).filter((m) => SPEAKER_EMOTIONS[who]?.has(m));
  md += `### ${title}\n\n| Emotion | Act it out | Photo | or video | Lines |\n|---|---|---|---|---|\n`;
  for (const m of moods) {
    const E = EMOTIONS[m];
    md += `| ${E.emoji} **${E.label}** | ${E.act} | \`${who}-${m}.jpg\` | \`${who}-${m}.mp4\` | ${count(who, m)} |\n`;
  }
  md += `\nOne photo for everything: \`${who}.jpg\` (used for any emotion you didn't make).\n\n`;
}

md += `### Tips

* **Photos:** \`.jpg\`, \`.jpeg\`, \`.png\` or \`.webp\`. Square-ish, with your face in the middle, looks best.
* **Emotion videos** play on a loop **without sound** while the voice reads the line. 2–4 seconds is plenty.
* **Videos:** \`.mp4\` works in every browser. (iPhone \`.mov\` files may not play in Chrome — convert to \`.mp4\`.)
* Keep files small (under 10 MB each) so the game loads fast.

## 🎤 Extra: say the actual lines

Want your real voice? Record yourself saying a line and name the video after the line's **id** (left column below),
for example \`guard05.mp4\`. It plays **with sound** instead of the robot voice, for that line only.

**Which one is used?** For each line the game picks the first one it finds:
1. \`<line id>.mp4\` — you saying that line
2. \`<who>-<emotion>.mp4\` — your silent reaction video for that emotion
3. \`<who>-<emotion>.jpg\` — your photo making that face
4. \`<who>.jpg\` — your normal photo
5. the cartoon, making that face

## 📤 How to add your files on GitHub

1. Open the repo on GitHub and go into the \`assets/clips\` folder — on the branch your GitHub Pages site
   publishes from (**Settings → Pages** shows which one).
2. **Add file → Upload files**, drag your photos/videos in, then **Commit changes**.
3. In a minute or two, the game website updates. Refresh it and you're in!

(Opening \`index.html\` straight from your computer works too — just put the files in this folder.)

---

# All the lines

`;
for (const [who, title] of [...ACTORS, ['museos', '🖥️ MUSE-OS (the museum computer — no faces to act, but you can record its voice)']]) {
  const ids = Object.keys(LINES).filter((id) => LINES[id].who === who);
  md += `## ${title}\n\n| File name | Emotion | Line |\n|---|---|---|\n`;
  for (const id of ids) md += `| \`${id}.mp4\` | ${EMOTIONS[LINES[id].mood].emoji} ${EMOTIONS[LINES[id].mood].label} | ${clean(LINES[id].text)} |\n`;
  md += '\n';
}
writeFileSync(new URL('../assets/clips/README.md', import.meta.url), md);
console.log('wrote assets/clips/README.md:', md.split('\n').length, 'lines');
