# 🎬 Put yourself in the game

The game only uses photos and videos from **this folder**, so only people who can change this repo — you —
decide who's in the game. Anything missing uses the cartoon actor (who makes the same faces).

## 🎭 The easy way: act out the emotions

Every line in the game has an emotion. Make each face **once** — as a photo, or a short silent video — and
every line with that emotion uses it. You don't need all of them: anything missing uses the cartoon.

### 💂 You — the security guard

| Emotion | Act it out | Photo | or video | Lines |
|---|---|---|---|---|
| 🙂 **Normal** | Your regular face. Just chilling. | `guard-normal.jpg` | `guard-normal.mp4` | 1 |
| 😄 **Happy** | Big smile! | `guard-happy.jpg` | `guard-happy.mp4` | 4 |
| 🤤 **Hungry** | Stare at an imaginary donut. Lick your lips. | `guard-hungry.jpg` | `guard-hungry.mp4` | 2 |
| 😎 **Cool** | Smug grin, one eyebrow up. You are the best. | `guard-cool.jpg` | `guard-cool.mp4` | 5 |
| 🤔 **Confused** | Squint and tilt your head. "Huh?" | `guard-confused.jpg` | `guard-confused.mp4` | 7 |
| 😒 **Annoyed** | Roll your eyes. Ugh. | `guard-annoyed.jpg` | `guard-annoyed.mp4` | 5 |
| 😠 **Angry** | Frown as hard as you can. Grrr. | `guard-angry.jpg` | `guard-angry.mp4` | 1 |
| 😲 **Shocked** | Eyes huge, mouth wide open. WHAT?! | `guard-shocked.jpg` | `guard-shocked.mp4` | 6 |
| 😱 **Scared** | Hands on your cheeks. Silent scream. | `guard-scared.jpg` | `guard-scared.mp4` | 10 |
| 😴 **Sleepy** | Huge yawn, eyes half closed. | `guard-sleepy.jpg` | `guard-sleepy.mp4` | 1 |

One photo for everything: `guard.jpg` (used for any emotion you didn't make).

### 📺 The developer (on the menu TV)

| Emotion | Act it out | Photo | or video | Lines |
|---|---|---|---|---|
| 😄 **Happy** | Big smile! | `dev-happy.jpg` | `dev-happy.mp4` | 2 |
| 😒 **Annoyed** | Roll your eyes. Ugh. | `dev-annoyed.jpg` | `dev-annoyed.mp4` | 2 |
| 😠 **Angry** | Frown as hard as you can. Grrr. | `dev-angry.jpg` | `dev-angry.mp4` | 2 |
| 😢 **Sad** | Big pout. Fake cry. | `dev-sad.jpg` | `dev-sad.mp4` | 1 |

One photo for everything: `dev.jpg` (used for any emotion you didn't make).

### 🧢 Aaron

| Emotion | Act it out | Photo | or video | Lines |
|---|---|---|---|---|
| 🙂 **Normal** | Your regular face. Just chilling. | `aaron-normal.jpg` | `aaron-normal.mp4` | 1 |
| 😎 **Cool** | Smug grin, one eyebrow up. You are the best. | `aaron-cool.jpg` | `aaron-cool.mp4` | 1 |
| 😒 **Annoyed** | Roll your eyes. Ugh. | `aaron-annoyed.jpg` | `aaron-annoyed.mp4` | 1 |

One photo for everything: `aaron.jpg` (used for any emotion you didn't make).

### 🧟 The Mummy

| Emotion | Act it out | Photo | or video | Lines |
|---|---|---|---|---|
| 😄 **Happy** | Big smile! | `mummy-happy.jpg` | `mummy-happy.mp4` | 1 |
| 🤤 **Hungry** | Stare at an imaginary donut. Lick your lips. | `mummy-hungry.jpg` | `mummy-hungry.mp4` | 1 |
| 😢 **Sad** | Big pout. Fake cry. | `mummy-sad.jpg` | `mummy-sad.mp4` | 1 |

One photo for everything: `mummy.jpg` (used for any emotion you didn't make).

### Tips

* **Photos:** `.jpg`, `.jpeg`, `.png` or `.webp`. Square-ish, with your face in the middle, looks best.
* **Emotion videos** play on a loop **without sound** while the voice reads the line. 2–4 seconds is plenty.
* **Videos:** `.mp4` works in every browser. (iPhone `.mov` files may not play in Chrome — convert to `.mp4`.)
* Keep files small (under 10 MB each) so the game loads fast.

## 🎤 Extra: say the actual lines

Want your real voice? Record yourself saying a line and name the video after the line's **id** (left column below),
for example `guard05.mp4`. It plays **with sound** instead of the robot voice, for that line only.

**Which one is used?** For each line the game picks the first one it finds:
1. `<line id>.mp4` — you saying that line
2. `<who>-<emotion>.mp4` — your silent reaction video for that emotion
3. `<who>-<emotion>.jpg` — your photo making that face
4. `<who>.jpg` — your normal photo
5. the cartoon, making that face

## 📤 How to add your files on GitHub

1. Open the repo on GitHub and go into the `assets/clips` folder — on the branch your GitHub Pages site
   publishes from (**Settings → Pages** shows which one).
2. **Add file → Upload files**, drag your photos/videos in, then **Commit changes**.
3. In a minute or two, the game website updates. Refresh it and you're in!

(Opening `index.html` straight from your computer works too — just put the files in this folder.)

---

# All the lines

## 💂 You — the security guard

| File name | Emotion | Line |
|---|---|---|
| `guard01.mp4` | 🤤 Hungry | Mmm. Number three is the T-Rex. Obviously. Nothing beats the King. |
| `guard02.mp4` | 😎 Cool | Yeah, yeah. Like that's gonna happen. |
| `guard03.mp4` | 😒 Annoyed | Ugh. Whatever. I'll just log back in. |
| `guard04.mp4` | 🤔 Confused | Huh? Donut-one-two-three. That's literally always my password. |
| `guard05.mp4` | 😲 Shocked | WHAT?! Who changed my password?! |
| `guard06.mp4` | 😄 Happy | Where giants once walked... the Dino exhibit! Oh yeah, I like the Dino exhibit. |
| `guard07.mp4` | 😎 Cool | Flashlight: check. Donuts: check. Let's go. |
| `guard08.mp4` | 😄 Happy | Whoa. Never gets old. Hey, big guy. |
| `guard09.mp4` | 😎 Cool | Egyptian Wing. Got it. Easy. |
| `guard10.mp4` | 🤔 Confused | ...What was that? |
| `guard11.mp4` | 😲 Shocked | Wait. Where's the T-Rex? |
| `guard12.mp4` | 😱 Scared | Oh crap. Oh crap oh crap. This is like Night at the Museum. |
| `guard13.mp4` | 😱 Scared | Okay. Totally normal. Big dinosaur's just... on a walk. I'm gonna go to the Egyptian Wing. Quickly. |
| `guard35.mp4` | 😱 Scared | The Egyptian Wing. Why is it ALWAYS so creepy in here? |
| `guard42.mp4` | 😱 Scared | That footprint is the size of a bathtub. The T-Rex came through here. |
| `guard36.mp4` | 😄 Happy | All four pillars. Now, to the Pharaoh's Lock. |
| `guard37.mp4` | 😱 Scared | Uh... why is the coffin making noises? |
| `guard38.mp4` | 😱 Scared | AAAH! A MUMMY! Stay back! I have a flashlight and I'm not afraid to... shine it! |
| `guard39.mp4` | 🤔 Confused | ...You want a donut? You've been in there for three thousand years and you want a DONUT? |
| `guard40.mp4` | 😒 Annoyed | Ugh. FINE. One donut. But you owe me. |
| `guard41.mp4` | 😎 Cool | Yeah, they're pretty good. Okay. Back to bed, little buddy. |
| `guard14.mp4` | 😱 Scared | Nope. Nope nope nope nope. |
| `guard15.mp4` | 🙂 Normal | Okay. Romans. Romans are chill. Romans never chased anybody. |
| `guard16.mp4` | 🤔 Confused | Beyond the walls? What does that even mea— |
| `guard17.mp4` | 😲 Shocked | OH MY GOSH. |
| `guard18.mp4` | 😱 Scared | AAAAAAAAAAH! |
| `guard19.mp4` | 😱 Scared | Why is this hallway so LONG?! |
| `guard20.mp4` | 😄 Happy | There! A hole shaped exactly like me! That is SO convenient! |
| `guard21.mp4` | 😎 Cool | HA! You can't fit, big guy! Shoulda done more cardio! ...Wait, you don't have lungs. |
| `guard22.mp4` | 😒 Annoyed | My sugar levels are FINE. |
| `guard23.mp4` | 😱 Scared | Is that... an EYE?! Go away! Shoo! |
| `guard24.mp4` | 😒 Annoyed | Three keys for ONE gate. Who designs these places? |
| `guard25.mp4` | 🤤 Hungry | THE. LAST. DONUT. It is beautiful. |
| `guard26.mp4` | 😲 Shocked | It's... it's PLASTIC?! |
| `guard27.mp4` | 😴 Sleepy | So... sleepy... just gonna... rest my eyes... five minutes... |
| `guard28.mp4` | 🤔 Confused | Mmh... huh? It's MORNING?! |
| `guard29.mp4` | 🤔 Confused | The T-Rex is back. Like nothing happened. ...Is that MY HAT? |
| `guard30.mp4` | 😲 Shocked | Aaron! The T-Rex was ALIVE! It chased me! There was a MUMMY! And a PLASTIC DONUT! |
| `guard31.mp4` | 😠 Angry | WHAT? I solved like FIVE puzzles! |
| `guard32.mp4` | 🤔 Confused | Wait... that's it? That game was WAY too short. |
| `guard33.mp4` | 😲 Shocked | Oh my gosh. Are you serious? This is really it? That's the WHOLE game?! |
| `guard34.mp4` | 😒 Annoyed | ...I could do better. |

## 📺 The developer (on the menu TV)

| File name | Emotion | Line |
|---|---|---|
| `dev01.mp4` | 😄 Happy | Oh hey! Welcome to my game. I made it myself. It's really good, I promise. |
| `dev02.mp4` | 😢 Sad | Bro, I was up all night making this. |
| `dev03.mp4` | 😠 Angry | HELL NAW. |
| `dev04.mp4` | 😠 Angry | GET OUT OF MY GAME! |
| `dev05.mp4` | 😒 Annoyed | ...Oh. You're back. Fine. You can play it again. But NO complaining. |
| `dev06.mp4` | 😒 Annoyed | Stop poking the TV. |
| `dev07.mp4` | 😄 Happy | Psst. There's a MUMMY in this game now. I made it at three in the morning. |

## 🧢 Aaron

| File name | Emotion | Line |
|---|---|---|
| `aaron01.mp4` | 🙂 Normal | Yo, it's Aaron. Heads up — IT is changing all the computer passwords tonight. So, uh... don't let your session time out. Okay byeee. |
| `aaron02.mp4` | 😒 Annoyed | Dude. Did you sleep in the dinosaur exhibit? Again? |
| `aaron03.mp4` | 😎 Cool | Sure, buddy. Also, your computer's been beeping all morning. You should probably log in. |

## 🧟 The Mummy

| File name | Emotion | Line |
|---|---|---|
| `mummy01.mp4` | 🤤 Hungry | Mmmph... mmh mmph? *(Is that... a DONUT?)* |
| `mummy02.mp4` | 😢 Sad | Mmmph. *(Please.)* |
| `mummy03.mp4` | 😄 Happy | MMMMMMH! *(Best. Snack. In. Three. Thousand. Years.)* |

## 🖥️ MUSE-OS (the museum computer — no faces to act, but you can record its voice)

| File name | Emotion | Line |
|---|---|---|
| `museos01.mp4` | 🙂 Normal | SESSION EXPIRED. |
| `museos02.mp4` | 🙂 Normal | Password reset protocol activated. To recover access... SOLVE THE PUZZLES. |
| `museos03.mp4` | 🙂 Normal | Puzzle number one sleeps where giants once walked. |
| `museos04.mp4` | 🙂 Normal | Fragment one: REX. Next puzzle: the Egyptian Wing. |
| `museos13.mp4` | 🙂 Normal | Puzzle number two: the Pharaoh's Lock. Its secret is written on four pillars. Count the lines. |
| `museos14.mp4` | 🙂 Normal | Fragment two: MUMMY. Next puzzle: the Roman Empire hall. |
| `museos05.mp4` | 🙂 Normal | Fragment three: 1974. The remaining puzzles lie... beyond the walls. |
| `museos06.mp4` | 🙂 Normal | Welcome to the archives, guard. Three locked gates stand between you and the break room. Also, your sugar levels are... concerning. |
| `museos07.mp4` | 🙂 Normal | Fragment four: ZAP. |
| `museos08.mp4` | 🙂 Normal | The next gate needs three keys: red, blue and yellow. They were lost somewhere in this section. Classic. |
| `museos09.mp4` | 🙂 Normal | Fragment five: DONUT. Please proceed to the break room. |
| `museos10.mp4` | 🙂 Normal | Exhibit 404: replica donut. Not for eating. |
| `museos11.mp4` | 🙂 Normal | Fragments entered: five of six. You did not solve the puzzles. |
| `museos12.mp4` | 🙂 Normal | Five is not six. Goodbye. |

