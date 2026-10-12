# 🍩 LOCKED OUT — a night guard story

A 3D story game that runs in your web browser. You're the night security guard at the City Museum of
Natural History. You're watching videos and eating donuts... and then your computer session times out.
The password has been changed. The hint just says: **SOLVE THE PUZZLES.**

The first one is in the Dino exhibit. You like the Dino exhibit. What could go wrong?

## ▶ How to play

**Just open `index.html`** in Chrome, Edge or Firefox (double-click it). No install needed.

Or put it online for free with GitHub Pages: repo **Settings → Pages → Deploy from a branch → `main` / root**.
Then anyone can play at `https://<your-username>.github.io/<repo-name>/`.

| Action | Keys |
|---|---|
| Move / look | `W A S D` + mouse |
| Use / inspect | `E` (or click) |
| Flashlight on/off | `F` |
| Sprint (burns donuts faster!) | `Shift` |
| Chase: change lanes / jump / slide | `A D` or `← →` / `W` or `Space` / `S` or `↓` |
| Pause | `Esc` |
| Skip a line / cutscene | `Space` / `Esc` |

Phones and tablets get touch controls (stick + buttons, and swipes during the chase).

## 📖 The story (spoilers!)

| | Chapter | What happens |
|---|---|---|
| 🖥️ | **Prologue — Session Expired** | Night shift #47. MeTube, a Dozen Deluxe, and a warning from Aaron. The session times out, `donut123` doesn't work anymore, and the hint button says *solve the puzzles*. |
| 🦖 | **Chapter 1 — The King** | Flashlight on. Find the cipher panel next to the T-Rex skeleton and decode it with the bone wheel. Then turn around... *where did the T-Rex go?* |
| 🏛️ | **Chapter 2 — All Roads** | Footprints lead to the Roman Empire hall. Crack the Roman-numeral lock. Something is breathing behind you. |
| 🏃 | **Chapter 3 — RUN** | A skeleton T-Rex chase down the museum gallery, endless-runner style. Dodge, jump, slide, grab donuts. At the end: **GO RIGHT**, into the hole shaped exactly like you. |
| 🗝️ | **Chapter 4 — Behind the Walls** | A maze in the archives. A fuse box, a Morse-code telegraph and a torn poster stand between you and THE LAST DONUT. Your donut meter is running out. |
| ☀️ | **Chapter 5 — Morning Shift** | You wake up. The museum is open. The T-Rex is back on its stand (wearing your hat). Aaron is there. You're still locked out. |
| 🧩 | **???** | Back at the menu... the game seems a little short, doesn't it? |

The **donut meter** (top-left) drains the whole night. Solving a puzzle gives you a donut, and there are
**14 hidden donuts** glowing around the museum and archives. If the meter hits zero, you fall asleep on the job.

## 🎬 Put yourself in the game

You can be the security guard **and** the developer on the menu TV:

* **Easiest:** main menu → **🎬 CLIP STUDIO** → press **● REC** next to any line and act it out with your
  webcam (or **⬆** to upload a video/photo). Saved in your browser.
* **For everyone who plays:** put video files in [`assets/clips/`](assets/clips/README.md) named after the
  line, like `assets/clips/guard05.mp4` for *"WHAT?! Who changed my password?!"*. The full list of lines
  and file names is in [`assets/clips/README.md`](assets/clips/README.md).
* A photo named `assets/clips/guard.png` or `dev.png` becomes your face for any line without a video.

Change the names shown in subtitles (and the game title) in [`game-config.js`](game-config.js) — no rebuild needed.

## 🛠 For developers

The game is written in plain JavaScript with [three.js](https://threejs.org). Everything — the museum,
the T-Rex, the music and every sound effect — is generated in code. `dist/game.js` is the built bundle
(committed, so `index.html` works with no setup).

```bash
npm install
npm run dev     # live-rebuild + local server at http://localhost:8080
npm run build   # rebuild dist/game.js after changing anything in src/
```

| Folder | What's inside |
|---|---|
| `src/game/` | the story (`chapters.js`), every spoken line (`script.js`), game loop, player |
| `src/world/` | the museum, T-Rex skeleton, people, the chase level, the maze, textures |
| `src/puzzles/` | the five puzzles |
| `src/ui/` | HUD, subtitles/facecam, menu, Clip Studio, the login computer |
| `src/core/` | input, synthesized audio + music, timing |

Jump straight to a chapter while testing: `index.html?chapter=dino` (also `intro`, `roman`, `chase`, `maze`, `morning`).
