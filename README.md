# 🍩 LOCKED OUT — a night guard story

A 3D story game that runs in your web browser. You're the night security guard at the City Museum of
Natural History. You're watching videos and eating donuts... and then your computer session times out.
The password has been changed. The hint just says: **SOLVE THE PUZZLES.**

The first one is in the Dino exhibit. You like the Dino exhibit. What could go wrong?

## ▶ How to play

**Just open `https://hudsoonvid.github.io/Cs-game`** in Chrome, Edge or Firefox (double-click it). No install needed.

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

Phones and tablets get touch controls (stick + buttons, and swipes during the chase) — play in landscape.
In the maze, press `M` to show/hide the map that fills in as you explore. During the chase, the
**BEHIND YOU** view shows how close the T-Rex is. The full list is under **CONTROLS** in the menu and pause screen.

**Settings** has volume, voices (robot text-to-speech, cute beeps, or off), subtitles, mouse sensitivity,
field of view, brightness, camera shake, and graphics quality (High adds glow effects; Fast is for older computers).

## 📖 The story (spoilers!)

| | Chapter | What happens |
|---|---|---|
| 🖥️ | **Prologue — Session Expired** | Night shift #47. MeTube, a Dozen Deluxe, and a warning from Aaron. The session times out, `donut123` doesn't work anymore, and the hint button says *solve the puzzles*. |
| 🦖 | **Chapter 1 — The King** | Flashlight on. Find the cipher panel next to the T-Rex skeleton and decode it with the bone wheel. Then turn around... *where did the T-Rex go?* |
| 🏺 | **Chapter 2 — Curse of the Pharaoh** | Giant footprints lead into the Egyptian Wing. Find the four painted pillars, crack the Pharaoh's Lock... and then the sarcophagus starts to open. The mummy is awake. And it's hungry. |
| 🏛️ | **Chapter 3 — All Roads** | On to the Roman Empire hall. Crack the Roman-numeral lock. Something is breathing behind you. |
| 🏃 | **Chapter 4 — RUN** | A skeleton T-Rex chase down the museum gallery, endless-runner style. Dodge, jump, slide, grab donuts. At the end: **GO RIGHT**, into the hole shaped exactly like you. |
| 🗝️ | **Chapter 5 — Behind the Walls** | The archives, the last part of the night. A fuse box, three lost keys and a torn poster guard the last password pieces... and then the archives just keep going. Every new gate has a new puzzle, each one a bit harder, and the donuts get smaller. You *will* run out of donuts. How far can you get? |
| ☀️ | **Chapter 6 — Morning Shift** | You fell asleep somewhere deep in the archives. Now the museum is open. The T-Rex is back on its stand (wearing your hat). Aaron is there. You're still locked out. |
| 🧩 | **???** | Back at the menu... the game seems a little short, doesn't it? |

The **donut meter** (top-left) drains the whole night. Solving a puzzle gives you a donut. If the meter hits
zero, you fall asleep on the job. In the endless archives that's how the night ends; anywhere else it's game over.

There are **16 hidden donuts**, and most are hard to find:
* **2** are out in the open.
* **8** are in **secret rooms** in the museum. Look for something on a wall that seems a little *off* (a crooked
  poster, a loose brick, a strange fossil, a torch holder...) and press **E** on it.
* **6** are in the first three sections of the archives. One in each section is behind a shelf with a strange
  pink box on it.

The deeper archives have more donuts and secret shelves, but they keep getting smaller (and don't count toward the 16).

## 🎬 Put yourself in the game

You can star as the security guard, the developer on the menu TV, Aaron — and the Mummy. Only photos and
videos **in this repo** are used, so only you decide who's in the game.

* **Act out the emotions (easiest):** every line has an emotion (happy, scared, angry, hungry...). Take one
  photo of yourself making each face, like `assets/clips/guard-scared.jpg`, and every scared line uses it.
  A short video works too (`guard-scared.mp4`, played silently on a loop).
* **Say the real lines:** a video named after a line, like `assets/clips/guard05.mp4` for
  *"WHAT?! Who changed my password?!"*, plays with your own voice.
* **One photo for everything:** `assets/clips/guard.jpg` (or `dev.jpg`, `aaron.jpg`, `mummy.jpg`).

The full list of emotions to act, file names and lines is in [`assets/clips/README.md`](assets/clips/README.md),
with steps for uploading on GitHub.

Change the names shown in subtitles (and the game title) in [`game-config.js`](game-config.js) — no rebuild needed.

## 🛠 For developers

The game is written in plain JavaScript with [three.js](https://threejs.org). Everything — the museum,
the T-Rex, the music and every sound effect — is generated in code. `dist/game.js` is the built bundle
(committed, so `index.html` works with no setup).

```bash
npm install
npm run dev     # live-rebuild + local server at http://localhost:8080
npm run build   # rebuild dist/game.js after changing anything in src/
npm run clips-readme  # rewrite assets/clips/README.md after changing lines in src/game/script.js
```

| Folder | What's inside |
|---|---|
| `src/game/` | the story (`chapters.js`), every spoken line (`script.js`), game loop, player |
| `src/world/` | the museum (and its secret rooms), T-Rex skeleton, people, the chase level, the endless archives maze, textures |
| `src/puzzles/` | the puzzles (cipher wheel, Pharaoh's Lock, Roman dials, fuse box, sliding poster, memory lock). The endless archives reuse them with generated settings. |
| `src/ui/` | HUD, subtitles/facecam (with the cartoon emotion faces), menu, the login computer |
| `src/core/` | input, synthesized audio + music, timing |

Jump straight to a chapter while testing: `index.html?chapter=dino` (also `intro`, `egypt`, `roman`, `chase`, `maze`, `morning`).
