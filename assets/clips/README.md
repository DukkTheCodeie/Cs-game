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
| 😲 **Shocked** | Eyes huge, mouth wide open. WHAT?! | `guard-shocked.jpg` | `guard-shocked.mp4` | 7 |
| 😱 **Scared** | Hands on your cheeks. Silent scream. | `guard-scared.jpg` | `guard-scared.mp4` | 12 |
| 😢 **Sad** | Big pout. Fake cry. | `guard-sad.jpg` | `guard-sad.mp4` | 1 |
| 😴 **Sleepy** | Huge yawn, eyes half closed. | `guard-sleepy.jpg` | `guard-sleepy.mp4` | 5 |

One photo for everything: `guard.jpg` (used for any emotion you didn't make).

### 📺 The developer (on the menu TV)

| Emotion | Act it out | Photo | or video | Lines |
|---|---|---|---|---|
| 😄 **Happy** | Big smile! | `dev-happy.jpg` | `dev-happy.mp4` | 10 |
| 🤤 **Hungry** | Stare at an imaginary donut. Lick your lips. | `dev-hungry.jpg` | `dev-hungry.mp4` | 1 |
| 😎 **Cool** | Smug grin, one eyebrow up. You are the best. | `dev-cool.jpg` | `dev-cool.mp4` | 4 |
| 🤔 **Confused** | Squint and tilt your head. "Huh?" | `dev-confused.jpg` | `dev-confused.mp4` | 4 |
| 😒 **Annoyed** | Roll your eyes. Ugh. | `dev-annoyed.jpg` | `dev-annoyed.mp4` | 6 |
| 😠 **Angry** | Frown as hard as you can. Grrr. | `dev-angry.jpg` | `dev-angry.mp4` | 3 |
| 😲 **Shocked** | Eyes huge, mouth wide open. WHAT?! | `dev-shocked.jpg` | `dev-shocked.mp4` | 5 |
| 😱 **Scared** | Hands on your cheeks. Silent scream. | `dev-scared.jpg` | `dev-scared.mp4` | 2 |
| 😢 **Sad** | Big pout. Fake cry. | `dev-sad.jpg` | `dev-sad.mp4` | 5 |
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
Just your voice works too: `guard05.mp3` (then the cartoon, or your photo, talks along).
The dev's, the guard's and Aaron's lines are easiest to record on your phone in the line booths (ask Claude for the links).

**Which one is used?** For each line the game picks the first one it finds:
1. `<line id>.mp4` — you saying that line (or `<line id>.mp3`, just your voice)
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
| `guard01.mp4` | 🤤 Hungry | Number THREE? The T-Rex is number three? Who made this list, a stegosaurus? |
| `guard02.mp4` | 😎 Cool | Yeah, yeah. It's one night. How bad can it be. |
| `guard03.mp4` | 😒 Annoyed | Are you kidding me. I looked away for like one second. |
| `guard04.mp4` | 🤔 Confused | Huh? It's donut one two three. It's ALWAYS donut one two three. I've had that password since sixth grade. |
| `guard05.mp4` | 😲 Shocked | WHAT?! Who changed my password?! |
| `guard06.mp4` | 😄 Happy | Where giants once walked... okay, that's the dinosaur room. They're not even trying. |
| `guard07.mp4` | 😎 Cool | Flashlight. Donuts. Backup donut. Okay, let's go. |
| `guard08.mp4` | 😄 Happy | Sup, big guy. Don't eat me. |
| `guard09.mp4` | 😎 Cool | Egyptian Wing. Easy. I could do this in my sleep. |
| `guard10.mp4` | 🤔 Confused | ...What was that? |
| `guard11.mp4` | 😲 Shocked | Wait. Where's the T-Rex? |
| `guard12.mp4` | 😱 Scared | Oh no. Oh no no no. This is literally Night at the Museum. |
| `guard13.mp4` | 😱 Scared | Okay. It's fine. Somebody probably just... borrowed it. I'm gonna go to Egypt now. |
| `guard35.mp4` | 😱 Scared | I hate this room. Who puts a dead guy in a museum? |
| `guard47.mp4` | 🤔 Confused | Upside-down U's and little sticks... oh, it's counting. The U's are tens. Okay, the Egyptians were smart. |
| `guard42.mp4` | 😱 Scared | That footprint is bigger than my car. The T-Rex came this way. |
| `guard36.mp4` | 😄 Happy | All four pillars. I'm basically an archaeologist now. |
| `guard37.mp4` | 😱 Scared | Why is the coffin making noises. Coffins are not supposed to make noises. |
| `guard38.mp4` | 😱 Scared | AAAH! MUMMY! Get back in your box! I'll call Aaron! |
| `guard39.mp4` | 🤔 Confused | You want my DONUT? Dude, you've been dead for three thousand years. |
| `guard40.mp4` | 😒 Annoyed | Ugh. FINE. One donut. Not the sprinkle one. |
| `guard41.mp4` | 😎 Cool | No. Go back to bed. |
| `guard14.mp4` | 😱 Scared | Nope. Nope nope nope nope. |
| `guard15.mp4` | 🙂 Normal | Romans. Okay. The Romans didn't have dinosaurs. I think. I'm safe in here. |
| `guard16.mp4` | 🤔 Confused | Beyond the walls? What does that even mea— |
| `guard17.mp4` | 😲 Shocked | OH MY GOSH. |
| `guard18.mp4` | 😱 Scared | AAAAAAAAAAH! |
| `guard19.mp4` | 😱 Scared | Why is this hallway so LONG?! Who designed this museum?! |
| `guard20.mp4` | 😄 Happy | A hole in the wall! Shaped exactly like me! I'm not gonna question it! |
| `guard21.mp4` | 😎 Cool | HA! You can't fit! Skill issue! |
| `guard22.mp4` | 😒 Annoyed | My sugar levels are FINE. |
| `guard23.mp4` | 😱 Scared | Is that... an EYE?! Go away! Shoo! |
| `guard24.mp4` | 😒 Annoyed | Three keys? For ONE gate? This is a basement, not a bank. |
| `guard43.mp4` | 😒 Annoyed | ANOTHER gate? How big IS this place?! |
| `guard45.mp4` | 🤔 Confused | These shelves look familiar. Am I going in circles? I'm definitely going in circles. |
| `guard44.mp4` | 😴 Sleepy | Need... donut... so... tired... |
| `guard46.mp4` | 😄 Happy | A secret room! With a DONUT in it! Best night of my life. |
| `guard27.mp4` | 😴 Sleepy | So... sleepy... just gonna... rest my eyes... five minutes... |
| `guard48.mp4` | 😄 Happy | Spare bones. I could build my own dinosaur. I'd call him Steve. |
| `guard49.mp4` | 😱 Scared | More mummies. If any of you wake up, I'm not sharing. |
| `guard50.mp4` | 😎 Cool | Who keeps breaking these? ...It wasn't me. I wasn't even here. |
| `guard51.mp4` | 🤔 Confused | Why is there a Christmas tree down here? It's October. |
| `guard52.mp4` | 😒 Annoyed | My socks are wet. I just bought these socks. |
| `guard53.mp4` | 😱 Scared | It's so dark down here. I'm gonna walk into something. I can feel it. |
| `guard54.mp4` | 😢 Sad | Donut storage is EMPTY?! Who would DO this?! |
| `guard55.mp4` | 😴 Sleepy | How deep does this basement go? I think I'm under the gift shop. |
| `guard56.mp4` | 😒 Annoyed | Who builds a basement like this?! Kevin. It was probably Kevin. |
| `guard57.mp4` | 😄 Happy | Another key. Somebody down here needs a keychain. |
| `guard58.mp4` | 😴 Sleepy | My eyes... are closing... all by themselves... |
| `guard59.mp4` | 😴 Sleepy | Look at that. The whole city's asleep. Must be nice. |
| `guard60.mp4` | 😲 Shocked | Wait, is that a marching band? There's a PARADE today? Nobody told me! |
| `guard61.mp4` | 😄 Happy | A GIANT DONUT?! Okay, this parade is goated. |
| `guard62.mp4` | 😄 Happy | Ugh, sunlight. Okay. I really need to go log in. |
| `guard28.mp4` | 🤔 Confused | Mmh... huh? It's MORNING?! |
| `guard29.mp4` | 🤔 Confused | The T-Rex is back. Like nothing happened. |
| `guard63.mp4` | 😲 Shocked | ...Is that MY HAT? |
| `guard30.mp4` | 😲 Shocked | Aaron! The T-Rex was ALIVE! It chased me! There was a MUMMY! And the archives NEVER END! |
| `guard31.mp4` | 😠 Angry | WHAT? I solved like FIVE puzzles! |
| `guard32.mp4` | 🤔 Confused | Wait... that's it? That game was WAY too short. |
| `guard33.mp4` | 😲 Shocked | Oh my gosh. Are you serious? This is really it? That's the WHOLE game?! |
| `guard34.mp4` | 😒 Annoyed | ...I could do better. |

## 📺 The developer (on the menu TV)

| File name | Emotion | Line |
|---|---|---|
| `dev01.mp4` | 😄 Happy | Oh hey! Welcome to my game. Made it myself. It's really good, bradar. You should, like, play it. You should press that big PLAY button right there. Truly. Press it. |
| `dev02.mp4` | 😢 Sad | Bro, I was up all night making this. |
| `dev03.mp4` | 😠 Angry | Aw, HELL no, boy! |
| `dev04.mp4` | 😠 Angry | GET OUT OF MY GAME! |
| `dev05.mp4` | 😒 Annoyed | Oh. You're back. Okay, fine. You can play again. Just don't complain this time, you little dingle chud. |
| `dev06.mp4` | 😒 Annoyed | Stop poking the TV. |
| `dev08.mp4` | 🤔 Confused | Why do you keep clicking on my monitor? Stop! It's annoying. |
| `dev09.mp4` | 😄 Happy | Fun fact: I made every line in this game with code. Like, I wrote it all. So, like, even the munching of you, eating the dang donuts. |
| `dev11.mp4` | 🤤 Hungry | Got any donuts? I'm asking for a friend. That friend is me. |
| `dev12.mp4` | 😒 Annoyed | That is a LOT of pokes. I'm counting, you know. That's like, at least two. |
| `dev13.mp4` | 😱 Scared | Please don't tell the T-Rex where I live. |
| `dev15.mp4` | 😲 Shocked | Wait, have you found the secret rooms? There's like EIGHT of them. That's at least two. |
| `dev16.mp4` | 😢 Sad | Nobody ever reads the plaques. I wrote SO many plaques. |
| `dev17.mp4` | 😒 Annoyed | You fell asleep? In MY game? How rude. |
| `dev18.mp4` | 😲 Shocked | What? You found ALL the donuts? I can't even do that, and I ate th- hid them. HID them. |
| `dev19.mp4` | 😴 Sleepy | So are you gonna press the big play button? Or are you just gonna be stuck here looking at my hunter eyes? Look me in my hunter eyes! |
| `dev20.mp4` | 😄 Happy | Did you turn the music up? I worked really hard making that music. I'm quite literally Khantrast. All right? And if you don't turn that gosh dang music up, you're gonna be bu-bu-bugging. |
| `dev21.mp4` | 😄 Happy | Oh hey! You found one of my secret rooms! Take the donut. I insist! |
| `dev23.mp4` | 😢 Sad | Sweet dreams, little guard. It's almost morning. |
| `dev24.mp4` | 😎 Cool | Pro tip: you can sprint, but it burns donuts, though. Just like in real life. Maybe you should be sprinting more. |
| `dev25.mp4` | 😄 Happy | Did you see my name in the credits? Uh, Hudson Saunders? Yeah, put it there myself. And I'm very proud of it. Okay, so you better look at it. Right? You'll be like, "Oh my gosh, is that really the big H? Hudson S-A-U-N-D-E-R-S Saunders?" Oh my gosh. I feel like I'm in his otherworldly presence right now. It's amazing. I can almost feel his six-foot-tall dread-head aura washing over me. |
| `dev26.mp4` | 🤔 Confused | Back already? Then you're really bad at this game. |
| `dev27.mp4` | 😒 Annoyed | You turned the voices off? Fine. I'll just type REALLY loudly. |
| `dev28.mp4` | 😢 Sad | Fast graphics? What do you want, a potato? My beautiful cylinders... they look like hexagons. |
| `dev29.mp4` | 😴 Sleepy | Okay, I'm taking a nap, so wake me up when you press play. |
| `dev34.mp4` | 😎 Cool | Oh hey, it's me, playing my game. While dev mode's on. Don't tell the players. |
| `dev35.mp4` | 😠 Angry | Yeah, bud, nice try. I know that's not the code. You wanna know how? 'Cause I made it. |
| `dev36.mp4` | 😄 Happy | Fun fact: the T-Rex is made of over 50 million triangles. And I counted each one of them individually, like you should be counting your calories. |
| `dev38.mp4` | 🤔 Confused | Have you tried turning the T-Rex off and on again? |
| `dev39.mp4` | 😄 Happy | This whole game runs in your browser. No download needed. I'm basically a wizard. |
| `dev41.mp4` | 😒 Annoyed | If you find a bug, it's a feature. If you find a REAL bug, maybe you should clean your room, with all that food in it. |
| `dev44.mp4` | 😱 Scared | Every time I close and reopen the game, the T-Rex moves a little. Scary. I think it's coming for your mama. |
| `dev45.mp4` | 😎 Cool | The mummy is on a strict diet. Ancient grains only. I think you should join him. |
| `dev46.mp4` | 😲 Shocked | Wait, the archives are different every single time now? Oh wait, I just remembered. I did that. 'Cause I'm Megamind. |
| `dev47.mp4` | 😄 Happy | In the game there's a talking speed setting, so now I can talk really, really fast, like this. I'm talking so fast. Supersonic speed. Uh... I'm superhuman. |
| `dev48.mp4` | 🤔 Confused | Is it weird that I'm in my own game? Oh wait, I made it, and I'm the best. So, uh, no, it's not weird. And I'm the GOAT. I'm the aura farmer. |
| `dev49.mp4` | 😢 Sad | Someone said that the parade is too long. Like, bradar. It's a PARADE. That's the whole point! |
| `dev50.mp4` | 😄 Happy | Pick a chapter, any chapter. My favorite chapter is chapter four. Don't tell the other chapters. |
| `dev52.mp4` | 😴 Sleepy | Mmm... no, no... five more minutes... the T-Rex can wait, Mom... wait... |
| `dev54.mp4` | 😎 Cool | Oh, you're back! The museum's been real quiet since you left. I've been talking to the dino, but... I'm scared he's gonna start talking back. |
| `dev33.mp4` | 😄 Happy | Oh, you found the parade! Yeah, I made it myself. Not to brag, but I'm lowkey the GOAT. And look at the end, 'cause I think you're gonna get something you like, all right? |
| `dev32.mp4` | 😲 Shocked | You got EATEN by my T-Rex? Looking at you, I'm surprised you didn't eat HIM! |
| `dev31.mp4` | 😲 Shocked | Wait, you finished the whole game, and you came BACK? You must really like donuts. |

## 🧢 Aaron

| File name | Emotion | Line |
|---|---|---|
| `aaron01.mp4` | 🙂 Normal | Yo, it's Aaron. IT is changing all the computer passwords tonight, so don't let your session time out. And don't eat all the donuts again, man. |
| `aaron02.mp4` | 😒 Annoyed | Dude. Did you sleep in the dinosaur exhibit again? You have a floor pattern on your face. |
| `aaron03.mp4` | 😎 Cool | Sure, buddy. Also your computer's been beeping all morning. Might wanna log in. |
| `aaron04.mp4` | 😄 Happy | Oh, and there's a parade outside today. There's a giant donut float. I knew you'd want to know. |

## 🧟 The Mummy

| File name | Emotion | Line |
|---|---|---|
| `mummy01.mp4` | 🤤 Hungry | Mmmph... mmh mmph? *(Is that... a DONUT?)* |
| `mummy02.mp4` | 😢 Sad | Mmmph. *(Please.)* |
| `mummy03.mp4` | 😄 Happy | MMMMMMH! *(...Can I have the sprinkle one?)* |

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
| `museos06.mp4` | 🙂 Normal | You have entered the archives. The last password fragments are behind these gates. Also, your sugar level is low. You ate a dozen donuts before midnight. That's on you. |
| `museos07.mp4` | 🙂 Normal | Fragment four: ZAP. |
| `museos08.mp4` | 🙂 Normal | The next gate needs three keys: red, blue and yellow. Somebody lost them in this section. It was probably you. |
| `museos09.mp4` | 🙂 Normal | Fragment five: DONUT. Only one fragment left. It is behind the next gate. |
| `museos15.mp4` | 🙂 Normal | Fragment six is not here. |
| `museos16.mp4` | 🙂 Normal | Still not here. Have you tried looking somewhere else? |
| `museos17.mp4` | 🙂 Normal | Nobody knows how far the archives go. The last person who tried to find out never came back up. |
| `museos18.mp4` | 🙂 Normal | Sugar level: very low. I would eat something. Not the posters. |
| `museos19.mp4` | 🙂 Normal | Sugar level zero. The guard is asleep on the floor. Again. Logging out. |
| `museos20.mp4` | 🙂 Normal | Section two: Lost and Found. If you find a phone, it's probably Aaron's. |
| `museos21.mp4` | 🙂 Normal | Section three: Posters and Prints. Somebody cut the good one into nine pieces. |
| `museos22.mp4` | 🙂 Normal | Now entering: Spare Dinosaur Bones. Do not build a dinosaur. |
| `museos23.mp4` | 🙂 Normal | Now entering: Egyptian Overflow. Don't touch anything. The last guard touched something. |
| `museos24.mp4` | 🙂 Normal | Now entering: Broken Statues. They came like that. |
| `museos25.mp4` | 🙂 Normal | Now entering: Holiday Decorations. Yes, the tree is still up. |
| `museos26.mp4` | 🙂 Normal | Now entering: the Flooded Bit. Facilities says it's basically dry. |
| `museos27.mp4` | 🙂 Normal | Now entering: Power Outage. Kevin from IT says he's working on it. He has been working on it since March. |
| `museos28.mp4` | 🙂 Normal | Now entering: Donut Storage. It's empty. We both know why. |
| `museos29.mp4` | 🙂 Normal | Gate open. Took you long enough. |
| `museos30.mp4` | 🙂 Normal | Another gate. Did you think there would only be one? |
| `museos31.mp4` | 🙂 Normal | Reminder: the museum opens at 9 AM. You are still in the basement. |
| `museos32.mp4` | 🙂 Normal | Sugar level critical. Eat something. Please. I can hear your stomach through the cameras. |
| `museos11.mp4` | 🙂 Normal | Fragments entered: five of six. You did not solve the puzzles. |
| `museos12.mp4` | 🙂 Normal | Five isn't six. Logging out. Have a nice day. |

