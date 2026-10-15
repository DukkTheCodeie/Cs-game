# Changelog

Every version here has a matching [GitHub release](https://github.com/Hudsoonvid/Cs-game/releases), and the
game shows its version in the corner of the menu. To make a new release: bump `version` in `package.json`,
add a section for it below, run `npm run build`, and merge to `main`. The release is created automatically.

## v0.7.6 — 2026-10-15

- **New writing:** the guard, Aaron, the mummy and the museum's visitors talk more naturally, MUSE-OS talks
  like a computer, and the plaques read like real museum labels. The signs, posters, tips and credits got
  the same treatment. The dev's recorded lines are exactly as recorded.
- **The city stays put:** looking back from the Dinosaur Hall, you see the city through the lobby's front
  windows, instead of it popping in when you walk into the lobby.
- **The museum's website, redone** (`website/index.html`): it looks like a real museum's site now, with
  photos taken inside the game, pages for each hall, visiting, events, the collection, lost and found and
  the staff portal, and quieter secrets. The staff area is part of the one file.
- Behind the scenes: the Guard & Aaron Booth has the new lines.

## v0.7.5 — 2026-10-15

- **The City Museum's website** (`website/index.html`): one page to paste into Google Sites as a full-page
  embed. It shows the newest release of the game in a gilded frame in the lobby (loaded from jsDelivr, or
  GitHub if that's blocked, never GitHub Pages), with *Play in its own tab*, *Full screen* and a one-file
  download. Around it: the museum's front, every hall from the game, a map, events, the parade, the gift
  shop, lost and found, a staff login, and a comment card linking to the feedback form. Plus 16 secrets to
  stamp in a museum passport, and two puzzles that find the password fragment the game is missing.
- A page that builds the game itself (like the website) can hand the game its own way to open in a new tab
  (`popout` in the config), so the game's *Play in its own tab* button works inside the website too.

## v0.7.4 — 2026-10-15

- "Play in its own tab" (when a page like Google Sites won't let the game lock your mouse) now opens the
  game on GitHub Pages, https://hudsoonvid.github.io/Cs-game, which opens on networks where the
  Cloudflare address can't be reached.

## v0.7.3 — 2026-10-15

- **Morning:** your hat is hanging out of the T-Rex's mouth now, and the camera zooms in on it right before
  "...Is that MY HAT?"
- The dev cleaned up his mouth: no more "fatty" or "goddamn", and the bit about trash cleaning at the parade
  is gone. The recordings were trimmed to match.
- **Playing inside another page** (like a Google Sites embed): the start button works there now. If that
  page won't let the game lock your mouse, you drag to look, and the game offers to open in its own tab,
  where the mouse locks: the game on Cloudflare (`playUrl` in `game-config.js`).
- "Click (or drag) to look around" shows once, when you first get to walk around, without the E key.

## v0.7.2 — 2026-10-14

- **The recorded voice lines are off by default.** Turn them on in *Settings → Recorded voices*; until
  then everyone talks in the voice picked under *Character voices*.
- The game goes online with Cloudflare Workers: `npm run site` builds the site into `public/` and
  `wrangler.jsonc` serves it.

## v0.7.1 — 2026-10-14

- Subtitle fixes for the dev's recorded lines: "Khantrast", "dingle chud" and "bradar" are now spelled the
  way they're said.
- **The flashlight** points at the middle of the screen and the beam comes out of it, with a faint shaft of
  light, so it lands right where you look at any distance.
- **The characters are classic again by default.** The new guard, Aaron and mummy are still in
  *Settings → Characters* (*New guard, Aaron + mummy* or *All new*).
- If the game can't start, the "Uh oh" screen now says to try refreshing your tab, with a button that does it.
- Behind the scenes: a **Guard & Aaron Booth** for recording the guard's and Aaron's lines on a phone.

## v0.7.0 — 2026-10-14

- **The dev talks with a real voice.** All 43 of the dev's lines are recorded, and the cartoon face on the
  TV moves its mouth with the voice. The subtitles match what's actually said in the recordings (a lot of
  lines changed), and the 10 lines that weren't recorded are gone.
- **New characters:** the guard, Aaron and the mummy are rebuilt: rounder bodies, faces with eyes, brows
  and a smile, proper shoes, and a walk where feet don't slide. Visitors can get the new look too.
- **Characters setting:** *New guard, Aaron + mummy* (the default, with the classic visitors), *All new*,
  or *All classic*. It changes from the next chapter you start.
- **The flashlight shines where you look,** right in the middle of the screen.
- Long lines scroll in the speech bubble instead of running off the screen, and the *Talking speed* setting
  speeds up recorded lines too.
- The people outside no longer have their hair over their faces.
- Behind the scenes: the **Dev Line Booth**, a page for recording the dev's lines on a phone.

## v0.5.0 — 2026-10-14

- **16 posters** for the torn-poster puzzle in the archives, a different one each time (dinosaurs,
  Egypt, Rome, a whale, the mummy, volcanoes, a mammoth, gems, a rocket, the great donut heist...). The
  poster on the wall in the archives shows the real torn pieces too.
- **People talk faster**, and there's a new **Talking speed** setting (Normal, Fast, Faster).
- **The dev** has a new look: medium-dark skin and curly black hair. And 20 new things to say.

- **The whole game in one file:** every release now comes with `locked-out.html`. Double-click it to
  play, share it in Google Classroom or Drive, or put it on any website host.
- **A new version is out?** The menu shows a link to download it (the one file can't update itself).
  Turn this off with `checkUpdates: false` in `game-config.js`.
- **Dev mode:** tap the LOCKED OUT logo on the menu 7 times and type the dev code (`devCode` in
  `game-config.js`) to unlock every chapter, every hidden donut and the ending.
- **Admin panel** (dev mode): press <kbd>`</kbd> in the game, or open it from the pause menu, to jump to
  any chapter, set off events (the T-Rex vanishing, waking up and roaring, the lights flickering, the
  parade...), play any title card, teleport around the museum, and cheat (endless donuts, walk
  through walls, triple speed, every password piece).
- **The archives are different every time:** a new layout each run, and the three lost keys are
  spread out instead of lined up.
- **Credits:** Hudson Saunders, lead developer.

## v0.4.0 — 2026-10-14

**The city outside**
- There's a whole city outside the museum now, through the lobby windows and the front doors: the museum's
  front steps and plaza, a street with a crosswalk and traffic lights, a donut shop with a giant donut on
  the roof, a cinema, a bookstore, a diner, apartments, towers and a skyline.
- At night it's asleep: a few lit windows, streetlamps (one of them flickers), the diner that never
  closes, and a car or the night bus driving past now and then. You can hear them go by.
- In the morning the shops are open, people walk the sidewalks, and cars stop at the crosswalk.
- The front doors are open in the morning, so you can walk out onto the plaza (there's a bronze
  triceratops out there).
- At night the streetlamps throw a little warm light in through the lobby windows.

**The parade**
- Walk up to the front windows (or out the doors) in the morning and the museum's 50th birthday parade
  comes down the street: a police car, a banner, a marching band, a pterodactyl balloon and a whale
  balloon, and floats for the museum, the T-Rex, the Egyptian Wing, the Roman Hall... and a giant donut.
  Confetti cannons, ticker tape, and a street sweeper at the end to clean up.
- The crowd behind the barricades cheers, waves and points as the floats go by.
- It has its own march. You hear the band before you see it, and it gets louder as it comes closer.
- The guard (and the dev) have something to say about it.

**The T-Rex**
- A new skeleton: a real skull with openings, a rib cage, hips, little arms and a long tail, on a steel
  display mount. It walks, roars and runs like before, and its legs step properly now.
- In the chase it runs exactly as fast as you do, so its feet don't slide.

**Fixes**
- The front glass no longer throws the flashlight back in your eyes.
- The flashlight still dims properly near the T-Rex's platform.
- Caligula's bust (and what's behind it) moved to the far corner of the Roman Hall, to make room for
  the museum's new front. Augustus took his old spot.

## v0.3.0 — 2026-10-13

**The museum**
- Every wall, floor and ceiling has a real surface now, with depth you can see under the flashlight:
  painted blocks in the security office, cut limestone and a coffered ceiling in the lobby, big stone
  blocks (with fossils in them) and flagstones in the Dinosaur Hall, a Pompeii-style painted wall and a
  mosaic in the Roman Hall, carved sandstone and a starry tomb ceiling in the Egyptian Wing. Plus
  baseboards and door frames, concrete slabs in the archives and stone walls in the chase.
- Lots more to look at, so no room feels empty: flying reptiles hanging from the ceilings, steel
  trusses, fossil slabs, a dinosaur timeline, a "how tall are you?" chart, a dig site, egg and tooth
  cases, a gift shop, a queue and a rug at the info desk, portraits, statues, a Roman legionary, a tiny
  Colosseum, coins, a sphinx, cat statues, a model boat, papyrus, and a much messier security office.
- Morning visitors walk up to the exhibits, look at them and point things out.

**Fixes**
- The dev no longer brags that the archives never end.
- Sad faces: when someone talks sadly, they get one sad mouth instead of a frown drawn over an open mouth.
- The flashlight knows how tall things are again (columns counted as 35 cm tall).

**Performance**
- Things that only differ by color are drawn together: about 20% fewer draw calls in the busiest
  view, and each visitor takes 12 instead of 18.

## v0.2.0 — 2026-10-13

**Sound**
- Every part of the night has its own music: the office, the Dinosaur Hall (and a scarier song once the
  T-Rex is loose), the tomb and the Egyptian Wing, the Roman Hall, the chase, the archives and the morning.
- Music gets quieter while people talk and under big sound effects.
- Songs no longer play on top of each other: the old one fades out before the new one starts.

**Morning shift**
- Visitors find their way around displays instead of walking through them.
- Press **E** to chat with a visitor. Kids and grown-ups have their own things to say (subtitles and beeps).
- Bump into someone and they'll let you know about it.

**Archives**
- Shorter: each section is smaller, the first sliding poster is easier, and the endless part runs out
  of donuts sooner.
- Every section has a theme now, with a sign over its gate and its own stuff on the shelves and in the
  corners: Lost & Found, Posters & Prints, Spare Dinosaur Bones, Egyptian Overflow, Roman Statues
  (Broken), Holiday Decorations, the Flooded Bit (puddles!), Power Outage (red emergency bulbs) and
  Donut Storage (empty, of course).
- MUSE-OS announces each section, and the guard has something to say about most of them. Plus more
  lines deep in the archives.
- The archive map is shorter to match the smaller sections, so it covers less of the screen and shows
  the section you're in plus the start of the next one.

**Puzzles**
- The Pharaoh's Lock is harder: the pillars now show real Egyptian numbers (∩ is 10, | is 1), and the
  lock wants the symbols from the smallest number to the biggest. Wrong guesses zap your donut meter.
- Number locks (the Roman dials and the archive number locks) no longer turn each dial green when it's
  right, so you can't just click until it turns green. Set the whole code and press **UNLOCK**.
- The memory lock's pads have shapes on them too (● ▲ ■ ★), so you don't need to tell the colors apart.

**Screens and controls**
- Chat boxes now show on top of the login computer, so you can read them in the prologue and the ending.
- The password box works like a real one: you only see the last letter you typed, and long passwords are
  trimmed with "…" instead of running off the side of the screen.
- The flashlight dims when you're right up against something, so you can read plaques up close.

**More**
- 25 new lines for the dev: poking the TV, comments on the menu screens and your settings, reactions when
  you come back (asleep? eaten?), what's new in this version, and a few surprise appearances in the game.
- Fixed flickering surfaces (the Egyptian mural, the sarcophagus corners, the office desk, where the
  keyboard was buried inside the desk) and sharper far-away detail.
- Smoother on slower computers: the museum's small lamps share a few real lights (about 10 lights instead
  of 18), and the T-Rex's big reveal no longer causes a little stutter.
- The version number now shows in the menu, pause screen and credits.
- Optional anonymous play counting (see the README).

## v0.1.0 — 2026-10-13

The first release: the whole night shift, from the prologue to the morning.
- Chapters: Session Expired, The King (Dinosaur Hall), Curse of the Pharaoh (Egyptian Wing), All Roads
  (Roman Hall), RUN (the T-Rex chase), Behind the Walls (the endless archives) and Morning Shift.
- Puzzles: the bone cipher wheel, the Pharaoh's Lock, the Roman dials, fuse boxes, lost keys, sliding
  posters, cipher terminals, number locks and memory locks.
- 16 hidden donuts, most of them in secret rooms.
- Act out the characters: photos or videos for every emotion, from files in the repo.
