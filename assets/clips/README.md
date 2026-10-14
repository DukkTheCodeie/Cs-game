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
| 😄 **Happy** | Big smile! | `guard-happy.jpg` | `guard-happy.mp4` | 9 |
| 🤤 **Hungry** | Stare at an imaginary donut. Lick your lips. | `guard-hungry.jpg` | `guard-hungry.mp4` | 1 |
| 😎 **Cool** | Smug grin, one eyebrow up. You are the best. | `guard-cool.jpg` | `guard-cool.mp4` | 6 |
| 🤔 **Confused** | Squint and tilt your head. "Huh?" | `guard-confused.jpg` | `guard-confused.mp4` | 10 |
| 😒 **Annoyed** | Roll your eyes. Ugh. | `guard-annoyed.jpg` | `guard-annoyed.mp4` | 8 |
| 😠 **Angry** | Frown as hard as you can. Grrr. | `guard-angry.jpg` | `guard-angry.mp4` | 1 |
| 😲 **Shocked** | Eyes huge, mouth wide open. WHAT?! | `guard-shocked.jpg` | `guard-shocked.mp4` | 6 |
| 😱 **Scared** | Hands on your cheeks. Silent scream. | `guard-scared.jpg` | `guard-scared.mp4` | 12 |
| 😢 **Sad** | Big pout. Fake cry. | `guard-sad.jpg` | `guard-sad.mp4` | 1 |
| 😴 **Sleepy** | Huge yawn, eyes half closed. | `guard-sleepy.jpg` | `guard-sleepy.mp4` | 5 |

One photo for everything: `guard.jpg` (used for any emotion you didn't make).

### 📺 The developer (on the menu TV)

| Emotion | Act it out | Photo | or video | Lines |
|---|---|---|---|---|
| 😄 **Happy** | Big smile! | `dev-happy.jpg` | `dev-happy.mp4` | 8 |
| 🤤 **Hungry** | Stare at an imaginary donut. Lick your lips. | `dev-hungry.jpg` | `dev-hungry.mp4` | 1 |
| 😎 **Cool** | Smug grin, one eyebrow up. You are the best. | `dev-cool.jpg` | `dev-cool.mp4` | 1 |
| 🤔 **Confused** | Squint and tilt your head. "Huh?" | `dev-confused.jpg` | `dev-confused.mp4` | 2 |
| 😒 **Annoyed** | Roll your eyes. Ugh. | `dev-annoyed.jpg` | `dev-annoyed.mp4` | 5 |
| 😠 **Angry** | Frown as hard as you can. Grrr. | `dev-angry.jpg` | `dev-angry.mp4` | 2 |
| 😲 **Shocked** | Eyes huge, mouth wide open. WHAT?! | `dev-shocked.jpg` | `dev-shocked.mp4` | 4 |
| 😱 **Scared** | Hands on your cheeks. Silent scream. | `dev-scared.jpg` | `dev-scared.mp4` | 1 |
| 😢 **Sad** | Big pout. Fake cry. | `dev-sad.jpg` | `dev-sad.mp4` | 4 |
| 😴 **Sleepy** | Huge yawn, eyes half closed. | `dev-sleepy.jpg` | `dev-sleepy.mp4` | 3 |

One photo for everything: `dev.jpg` (used for any emotion you didn't make).

### 🧢 Aaron

| Emotion | Act it out | Photo | or video | Lines |
|---|---|---|---|---|
| 🙂 **Normal** | Your regular face. Just chilling. | `aaron-normal.jpg` | `aaron-normal.mp4` | 1 |
| 😄 **Happy** | Big smile! | `aaron-happy.jpg` | `aaron-happy.mp4` | 1 |
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
| `guard47.mp4` | 🤔 Confused | Upside-down U's and little sticks? ...Oh! Each U must be a TEN. And the sticks are ones. |
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
| `guard43.mp4` | 😒 Annoyed | ANOTHER gate? How big IS this place?! |
| `guard45.mp4` | 🤔 Confused | Wait. These shelves look familiar. Am I going in circles? |
| `guard44.mp4` | 😴 Sleepy | Need... donut... so... tired... |
| `guard46.mp4` | 😄 Happy | A secret room! With a DONUT in it! |
| `guard27.mp4` | 😴 Sleepy | So... sleepy... just gonna... rest my eyes... five minutes... |
| `guard48.mp4` | 😄 Happy | Spare bones! Do you think anyone would notice if I built my own dinosaur? |
| `guard49.mp4` | 😱 Scared | More mummies. Great. Just great. Nobody look at me. |
| `guard50.mp4` | 😎 Cool | Broken statues. Hey, this one kind of looks like me. Handsome. |
| `guard51.mp4` | 🤔 Confused | Why is there a Christmas tree down here? It's not even December! |
| `guard52.mp4` | 😒 Annoyed | My socks are wet. My socks are WET. |
| `guard53.mp4` | 😱 Scared | Okay. It's just dark. Dark is fine. Dark is totally, completely fine. |
| `guard54.mp4` | 😢 Sad | Donut storage... and it is EMPTY? This is the worst night of my life. |
| `guard55.mp4` | 😴 Sleepy | How deep does this go? I can't feel my feet anymore. |
| `guard56.mp4` | 😒 Annoyed | Who designs a basement like this?! ...Oh. Right. A computer. |
| `guard57.mp4` | 😄 Happy | Another key! Somebody down here is REALLY bad at keeping track of keys. |
| `guard58.mp4` | 😴 Sleepy | My eyes... are closing... all by themselves... |
| `guard59.mp4` | 😴 Sleepy | Look at that. The whole city's asleep. Lucky city. |
| `guard60.mp4` | 😲 Shocked | Wait. Is that a marching band? A PARADE?! Nobody tells me ANYTHING around here. |
| `guard61.mp4` | 😄 Happy | Is that... a GIANT DONUT?! Best. Parade. EVER. |
| `guard62.mp4` | 😄 Happy | Fresh air! Sunshine! A whole city out here! ...I should probably go log in, though. |
| `guard28.mp4` | 🤔 Confused | Mmh... huh? It's MORNING?! |
| `guard29.mp4` | 🤔 Confused | The T-Rex is back. Like nothing happened. ...Is that MY HAT? |
| `guard30.mp4` | 😲 Shocked | Aaron! The T-Rex was ALIVE! It chased me! There was a MUMMY! And the archives NEVER END! |
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
| `dev08.mp4` | 🤔 Confused | Why do you keep clicking me? I'm a TV. ...Kind of. |
| `dev09.mp4` | 😄 Happy | Fun fact: I made every sound in this game with code. Even the munching. |
| `dev11.mp4` | 🤤 Hungry | Got any donuts? Asking for a friend. The friend is me. |
| `dev12.mp4` | 😒 Annoyed | Okay, that's a LOT of pokes. I'm counting, you know. |
| `dev13.mp4` | 😱 Scared | Please don't tell the T-Rex where I live. |
| `dev14.mp4` | 😴 Sleepy | I made this game at three in the morning. It's still three in the morning. Help. |
| `dev15.mp4` | 😲 Shocked | Wait, have you found the secret rooms? There are EIGHT of them! |
| `dev16.mp4` | 😢 Sad | Nobody ever reads the plaques. I wrote SO many plaques. |
| `dev17.mp4` | 😒 Annoyed | You fell asleep? In MY game? ...Rude. Try again. |
| `dev18.mp4` | 😲 Shocked | You found ALL the donuts?! Even I can't do that. And I hid them! |
| `dev19.mp4` | 😴 Sleepy | ...So are you gonna press play, or are we just staring at each other? |
| `dev20.mp4` | 😄 Happy | Did you turn the music up? Turn it up. I worked really hard on that music. |
| `dev21.mp4` | 😄 Happy | Hey, you found one of my secret rooms! Take the donut. I insist. |
| `dev23.mp4` | 😢 Sad | Aww. Sweet dreams, little guard. Don't worry, it's almost morning. |
| `dev24.mp4` | 😎 Cool | Pro tip: you can sprint. It burns donuts, though. Just like real life. |
| `dev25.mp4` | 😄 Happy | Did you see my name in the credits? I put it there myself. Very proud of it. |
| `dev26.mp4` | 🤔 Confused | Back already? The museum misses you. Well, the T-Rex does. |
| `dev27.mp4` | 😒 Annoyed | You turned the voices off? ...Fine. I will just type REALLY loudly. |
| `dev28.mp4` | 😢 Sad | Fast graphics? My beautiful cylinders... they look so blurry now. |
| `dev29.mp4` | 😴 Sleepy | Okay, I'm taking a nap. Wake me up when you press play. |
| `dev30.mp4` | 😄 Happy | New in this version: there's a whole CITY outside! Look out the front windows. And in the morning... well. You'll see. |
| `dev33.mp4` | 😄 Happy | Oh, you found my parade! I built every float myself. The donut one is my favorite. Obviously. |
| `dev32.mp4` | 😲 Shocked | You got EATEN? By MY T-Rex? ...Okay, that's actually pretty cool. Try again. |
| `dev31.mp4` | 😲 Shocked | Wait, you finished the whole game? And you came BACK? You must really like donuts. |

## 🧢 Aaron

| File name | Emotion | Line |
|---|---|---|
| `aaron01.mp4` | 🙂 Normal | Yo, it's Aaron. Heads up — IT is changing all the computer passwords tonight. So, uh... don't let your session time out. Okay byeee. |
| `aaron02.mp4` | 😒 Annoyed | Dude. Did you sleep in the dinosaur exhibit? Again? |
| `aaron03.mp4` | 😎 Cool | Sure, buddy. Also, your computer's been beeping all morning. You should probably log in. |
| `aaron04.mp4` | 😄 Happy | Oh, and there's a parade outside today. Floats, a marching band, the works. Front doors are open if you want a look. |

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
| `museos13.mp4` | 🙂 Normal | Puzzle number two: the Pharaoh's Lock. Its secret is on four pillars, in Egyptian numbers. The Pharaoh wants them smallest first. |
| `museos14.mp4` | 🙂 Normal | Fragment two: MUMMY. Next puzzle: the Roman Empire hall. |
| `museos05.mp4` | 🙂 Normal | Fragment three: 1974. The remaining puzzles lie... beyond the walls. |
| `museos06.mp4` | 🙂 Normal | Welcome to the archives, guard. The last password fragments are behind these gates. Also, your sugar levels are... concerning. |
| `museos07.mp4` | 🙂 Normal | Fragment four: ZAP. |
| `museos08.mp4` | 🙂 Normal | The next gate needs three keys: red, blue and yellow. They were lost somewhere in this section. Classic. |
| `museos09.mp4` | 🙂 Normal | Fragment five: DONUT. Only one fragment left. It is behind the next gate. |
| `museos15.mp4` | 🙂 Normal | Fragment six was not here. Have you tried the next gate? |
| `museos16.mp4` | 🙂 Normal | Still no fragment six. It is definitely behind the next gate. Probably. |
| `museos17.mp4` | 🙂 Normal | Fun fact: nobody has ever reached the end of the archives. |
| `museos18.mp4` | 🙂 Normal | Your sugar levels are now... alarming. Please keep solving puzzles. |
| `museos19.mp4` | 🙂 Normal | Guard? ...Guard? Sugar level: zero. The guard is asleep. Logging out. |
| `museos20.mp4` | 🙂 Normal | Section two: Lost and Found. Everything anyone ever lost in this museum ends up here. Including, apparently, three keys. |
| `museos21.mp4` | 🙂 Normal | Section three: Posters and Prints. Please do not tear the posters. Someone already did. |
| `museos22.mp4` | 🙂 Normal | Now entering: Spare Dinosaur Bones. If you find a skull, please do not wear it. |
| `museos23.mp4` | 🙂 Normal | Now entering: Egyptian Overflow. These mummies are on vacation. Do not wake them. |
| `museos24.mp4` | 🙂 Normal | Now entering: Roman Statues, Broken. Somebody keeps dropping them. It was not me. I have no hands. |
| `museos25.mp4` | 🙂 Normal | Now entering: Holiday Decorations. It is not the holidays. It has never been the holidays down here. |
| `museos26.mp4` | 🙂 Normal | Now entering: the Flooded Bit. Mind the puddles. And the drips. And the other drips. |
| `museos27.mp4` | 🙂 Normal | Now entering: the Power Outage section. The lights here stopped working in nineteen seventy-four. |
| `museos28.mp4` | 🙂 Normal | Now entering: Donut Storage. Status: empty. Someone ate everything. I have a guess who. |
| `museos29.mp4` | 🙂 Normal | Gate open. Your puzzle-solving speed is... adequate. |
| `museos30.mp4` | 🙂 Normal | Another gate. Fun fact: there are infinity gates. I counted. |
| `museos31.mp4` | 🙂 Normal | Reminder: the museum opens in a few hours. You are still in the basement. |
| `museos32.mp4` | 🙂 Normal | Warning: sugar level critical. I recommend a donut. Or twelve. |
| `museos11.mp4` | 🙂 Normal | Fragments entered: five of six. You did not solve the puzzles. |
| `museos12.mp4` | 🙂 Normal | Five is not six. Goodbye. |

