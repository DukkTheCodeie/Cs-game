# Changelog

Every version here has a matching [GitHub release](https://github.com/Hudsoonvid/Cs-game/releases), and the
game shows its version in the corner of the menu. To make a new release: bump `version` in `package.json`,
add a section for it below, run `npm run build`, and merge to `main`. The release is created automatically.

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
