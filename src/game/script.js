import { CONFIG } from '../config.js';

// Every spoken line in the game. Each line has a speaker and an emotion (`mood`).
// Your own clips/photos go in assets/clips/ (see assets/clips/README.md):
//   <lineId>.mp4         you saying that exact line (plays with its sound)
//   <who>-<emotion>.mp4  a short silent reaction, used for every line with that emotion
//   <who>-<emotion>.jpg  a photo of you making that face

export const SPEAKERS = {
  guard: { name: () => CONFIG.guardName, color: 'gold' },
  dev: { name: () => CONFIG.devName, color: 'pink' },
  aaron: { name: () => 'AARON', color: 'sky' },
  mummy: { name: () => 'THE MUMMY', color: 'sand' },
  museos: { name: () => 'MUSE-OS', color: 'mint' },
};

// The faces you can act out. `act` is the stage direction shown in the clips README.
export const EMOTIONS = {
  normal: { emoji: '🙂', label: 'Normal', act: 'Your regular face. Just chilling.' },
  happy: { emoji: '😄', label: 'Happy', act: 'Big smile!' },
  hungry: { emoji: '🤤', label: 'Hungry', act: 'Stare at an imaginary donut. Lick your lips.' },
  cool: { emoji: '😎', label: 'Cool', act: 'Smug grin, one eyebrow up. You are the best.' },
  confused: { emoji: '🤔', label: 'Confused', act: 'Squint and tilt your head. "Huh?"' },
  annoyed: { emoji: '😒', label: 'Annoyed', act: 'Roll your eyes. Ugh.' },
  angry: { emoji: '😠', label: 'Angry', act: 'Frown as hard as you can. Grrr.' },
  shocked: { emoji: '😲', label: 'Shocked', act: 'Eyes huge, mouth wide open. WHAT?!' },
  scared: { emoji: '😱', label: 'Scared', act: 'Hands on your cheeks. Silent scream.' },
  sad: { emoji: '😢', label: 'Sad', act: 'Big pout. Fake cry.' },
  sleepy: { emoji: '😴', label: 'Sleepy', act: 'Huge yawn, eyes half closed.' },
};
const MOOD_ALIASES = { shock: 'shocked', tired: 'sleepy' };
export const moodOf = (m) => (EMOTIONS[m] ? m : MOOD_ALIASES[m] || 'normal');

export const LINES = {
  // ---------------- Prologue: the security office
  guard01: { who: 'guard', mood: 'hungry', text: 'Mmm. Number three is the T-Rex. Obviously. Nothing beats the King.' },
  aaron01: { who: 'aaron', mood: 'normal', text: "Yo, it's Aaron. Heads up — IT is changing all the computer passwords tonight. So, uh... don't let your session time out. Okay byeee." },
  guard02: { who: 'guard', mood: 'cool', text: "Yeah, yeah. Like that's gonna happen." },
  museos01: { who: 'museos', mood: 'normal', text: 'SESSION EXPIRED.' },
  guard03: { who: 'guard', mood: 'annoyed', text: "Ugh. Whatever. I'll just log back in." },
  guard04: { who: 'guard', mood: 'confused', text: "Huh? Donut-one-two-three. That's literally always my password." },
  guard05: { who: 'guard', mood: 'shocked', text: 'WHAT?! Who changed my password?!' },
  museos02: { who: 'museos', mood: 'normal', text: 'Password reset protocol activated. To recover access... SOLVE THE PUZZLES.' },
  museos03: { who: 'museos', mood: 'normal', text: 'Puzzle number one sleeps where giants once walked.' },
  guard06: { who: 'guard', mood: 'happy', text: 'Where giants once walked... the Dino exhibit! Oh yeah, I like the Dino exhibit.' },
  guard07: { who: 'guard', mood: 'cool', text: "Flashlight: check. Donuts: check. Let's go." },

  // ---------------- Chapter 1: Dinosaur Hall
  guard08: { who: 'guard', mood: 'happy', text: 'Whoa. Never gets old. Hey, big guy.' },
  museos04: { who: 'museos', mood: 'normal', text: 'Fragment one: REX. Next puzzle: the Egyptian Wing.' },
  guard09: { who: 'guard', mood: 'cool', text: 'Egyptian Wing. Got it. Easy.' },
  guard10: { who: 'guard', mood: 'confused', text: '...What was that?' },
  guard11: { who: 'guard', mood: 'shocked', text: "Wait. Where's the T-Rex?" },
  guard12: { who: 'guard', mood: 'scared', text: 'Oh crap. Oh crap oh crap. This is like Night at the Museum.' },
  guard13: { who: 'guard', mood: 'scared', text: "Okay. Totally normal. Big dinosaur's just... on a walk. I'm gonna go to the Egyptian Wing. Quickly." },

  // ---------------- Chapter 2: the Egyptian Wing
  guard35: { who: 'guard', mood: 'scared', text: 'The Egyptian Wing. Why is it ALWAYS so creepy in here?' },
  museos13: { who: 'museos', mood: 'normal', text: "Puzzle number two: the Pharaoh's Lock. Its secret is on four pillars, in Egyptian numbers. The Pharaoh wants them smallest first." },
  guard47: { who: 'guard', mood: 'confused', text: 'Upside-down U\'s and little sticks? ...Oh! Each U must be a TEN. And the sticks are ones.' },
  guard42: { who: 'guard', mood: 'scared', text: 'That footprint is the size of a bathtub. The T-Rex came through here.' },
  guard36: { who: 'guard', mood: 'happy', text: 'All four pillars. Now, to the Pharaoh\'s Lock.' },
  museos14: { who: 'museos', mood: 'normal', text: 'Fragment two: MUMMY. Next puzzle: the Roman Empire hall.' },
  guard37: { who: 'guard', mood: 'scared', text: 'Uh... why is the coffin making noises?' },
  guard38: { who: 'guard', mood: 'scared', text: "AAAH! A MUMMY! Stay back! I have a flashlight and I'm not afraid to... shine it!" },
  mummy01: { who: 'mummy', mood: 'hungry', text: 'Mmmph... mmh mmph? *(Is that... a DONUT?)*' },
  guard39: { who: 'guard', mood: 'confused', text: "...You want a donut? You've been in there for three thousand years and you want a DONUT?" },
  mummy02: { who: 'mummy', mood: 'sad', text: 'Mmmph. *(Please.)*' },
  guard40: { who: 'guard', mood: 'annoyed', text: 'Ugh. FINE. One donut. But you owe me.' },
  mummy03: { who: 'mummy', mood: 'happy', text: 'MMMMMMH! *(Best. Snack. In. Three. Thousand. Years.)*' },
  guard41: { who: 'guard', mood: 'cool', text: "Yeah, they're pretty good. Okay. Back to bed, little buddy." },
  guard14: { who: 'guard', mood: 'scared', text: 'Nope. Nope nope nope nope.' },

  // ---------------- Chapter 3: Roman Hall
  guard15: { who: 'guard', mood: 'normal', text: 'Okay. Romans. Romans are chill. Romans never chased anybody.' },
  museos05: { who: 'museos', mood: 'normal', text: 'Fragment three: 1974. The remaining puzzles lie... beyond the walls.' },
  guard16: { who: 'guard', mood: 'confused', text: 'Beyond the walls? What does that even mea—' },
  guard17: { who: 'guard', mood: 'shocked', text: 'OH MY GOSH.' },

  // ---------------- Chapter 4: the chase
  guard18: { who: 'guard', mood: 'scared', text: 'AAAAAAAAAAH!' },
  guard19: { who: 'guard', mood: 'scared', text: 'Why is this hallway so LONG?!' },
  guard20: { who: 'guard', mood: 'happy', text: 'There! A hole shaped exactly like me! That is SO convenient!' },
  guard21: { who: 'guard', mood: 'cool', text: "HA! You can't fit, big guy! Shoulda done more cardio! ...Wait, you don't have lungs." },

  // ---------------- Chapter 5: the archives maze
  museos06: { who: 'museos', mood: 'normal', text: 'Welcome to the archives, guard. The last password fragments are behind these gates. Also, your sugar levels are... concerning.' },
  guard22: { who: 'guard', mood: 'annoyed', text: 'My sugar levels are FINE.' },
  guard23: { who: 'guard', mood: 'scared', text: 'Is that... an EYE?! Go away! Shoo!' },
  museos07: { who: 'museos', mood: 'normal', text: 'Fragment four: ZAP.' },
  museos08: { who: 'museos', mood: 'normal', text: 'The next gate needs three keys: red, blue and yellow. They were lost somewhere in this section. Classic.' },
  guard24: { who: 'guard', mood: 'annoyed', text: 'Three keys for ONE gate. Who designs these places?' },
  museos09: { who: 'museos', mood: 'normal', text: 'Fragment five: DONUT. Only one fragment left. It is behind the next gate.' },
  // ...the endless part. There is always another gate.
  guard43: { who: 'guard', mood: 'annoyed', text: 'ANOTHER gate? How big IS this place?!' },
  museos15: { who: 'museos', mood: 'normal', text: 'Fragment six was not here. Have you tried the next gate?' },
  museos16: { who: 'museos', mood: 'normal', text: 'Still no fragment six. It is definitely behind the next gate. Probably.' },
  guard45: { who: 'guard', mood: 'confused', text: 'Wait. These shelves look familiar. Am I going in circles?' },
  museos17: { who: 'museos', mood: 'normal', text: 'Fun fact: nobody has ever reached the end of the archives.' },
  museos18: { who: 'museos', mood: 'normal', text: 'Your sugar levels are now... alarming. Please keep solving puzzles.' },
  guard44: { who: 'guard', mood: 'sleepy', text: 'Need... donut... so... tired...' },
  guard46: { who: 'guard', mood: 'happy', text: 'A secret room! With a DONUT in it!' },
  guard27: { who: 'guard', mood: 'sleepy', text: 'So... sleepy... just gonna... rest my eyes... five minutes...' },
  museos19: { who: 'museos', mood: 'normal', text: 'Guard? ...Guard? Sugar level: zero. The guard is asleep. Logging out.' },
  // the archive sections (MUSE-OS says where you are; the guard has opinions)
  museos20: { who: 'museos', mood: 'normal', text: 'Section two: Lost and Found. Everything anyone ever lost in this museum ends up here. Including, apparently, three keys.' },
  museos21: { who: 'museos', mood: 'normal', text: 'Section three: Posters and Prints. Please do not tear the posters. Someone already did.' },
  museos22: { who: 'museos', mood: 'normal', text: 'Now entering: Spare Dinosaur Bones. If you find a skull, please do not wear it.' },
  museos23: { who: 'museos', mood: 'normal', text: 'Now entering: Egyptian Overflow. These mummies are on vacation. Do not wake them.' },
  museos24: { who: 'museos', mood: 'normal', text: 'Now entering: Roman Statues, Broken. Somebody keeps dropping them. It was not me. I have no hands.' },
  museos25: { who: 'museos', mood: 'normal', text: 'Now entering: Holiday Decorations. It is not the holidays. It has never been the holidays down here.' },
  museos26: { who: 'museos', mood: 'normal', text: 'Now entering: the Flooded Bit. Mind the puddles. And the drips. And the other drips.' },
  museos27: { who: 'museos', mood: 'normal', text: 'Now entering: the Power Outage section. The lights here stopped working in nineteen seventy-four.' },
  museos28: { who: 'museos', mood: 'normal', text: 'Now entering: Donut Storage. Status: empty. Someone ate everything. I have a guess who.' },
  guard48: { who: 'guard', mood: 'happy', text: 'Spare bones! Do you think anyone would notice if I built my own dinosaur?' },
  guard49: { who: 'guard', mood: 'scared', text: 'More mummies. Great. Just great. Nobody look at me.' },
  guard50: { who: 'guard', mood: 'cool', text: 'Broken statues. Hey, this one kind of looks like me. Handsome.' },
  guard51: { who: 'guard', mood: 'confused', text: "Why is there a Christmas tree down here? It's not even December!" },
  guard52: { who: 'guard', mood: 'annoyed', text: 'My socks are wet. My socks are WET.' },
  guard53: { who: 'guard', mood: 'scared', text: "Okay. It's just dark. Dark is fine. Dark is totally, completely fine." },
  guard54: { who: 'guard', mood: 'sad', text: 'Donut storage... and it is EMPTY? This is the worst night of my life.' },
  // ...and the deeper you go
  museos29: { who: 'museos', mood: 'normal', text: 'Gate open. Your puzzle-solving speed is... adequate.' },
  museos30: { who: 'museos', mood: 'normal', text: 'Another gate. Fun fact: there are infinity gates. I counted.' },
  museos31: { who: 'museos', mood: 'normal', text: 'Reminder: the museum opens in a few hours. You are still in the basement.' },
  guard55: { who: 'guard', mood: 'sleepy', text: "How deep does this go? I can't feel my feet anymore." },
  guard56: { who: 'guard', mood: 'annoyed', text: "Who designs a basement like this?! ...Oh. Right. A computer." },
  guard57: { who: 'guard', mood: 'happy', text: 'Another key! Somebody down here is REALLY bad at keeping track of keys.' },
  guard58: { who: 'guard', mood: 'sleepy', text: 'My eyes... are closing... all by themselves...' },
  museos32: { who: 'museos', mood: 'normal', text: 'Warning: sugar level critical. I recommend a donut. Or twelve.' },
  // the city outside
  guard59: { who: 'guard', mood: 'sleepy', text: "Look at that. The whole city's asleep. Lucky city." },
  guard60: { who: 'guard', mood: 'shocked', text: 'A PARADE?! Is that a giant DONUT?! Nobody tells me ANYTHING around here.' },

  // ---------------- Chapter 6: morning
  guard28: { who: 'guard', mood: 'confused', text: "Mmh... huh? It's MORNING?!" },
  guard29: { who: 'guard', mood: 'confused', text: 'The T-Rex is back. Like nothing happened. ...Is that MY HAT?' },
  aaron02: { who: 'aaron', mood: 'annoyed', text: 'Dude. Did you sleep in the dinosaur exhibit? Again?' },
  guard30: { who: 'guard', mood: 'shocked', text: 'Aaron! The T-Rex was ALIVE! It chased me! There was a MUMMY! And the archives NEVER END!' },
  aaron03: { who: 'aaron', mood: 'cool', text: "Sure, buddy. Also, your computer's been beeping all morning. You should probably log in." },
  aaron04: { who: 'aaron', mood: 'happy', text: "Oh, and there's a parade outside today. Floats, a marching band, the works. Front doors are open if you want a look." },
  museos11: { who: 'museos', mood: 'normal', text: 'Fragments entered: five of six. You did not solve the puzzles.' },
  guard31: { who: 'guard', mood: 'angry', text: 'WHAT? I solved like FIVE puzzles!' },
  museos12: { who: 'museos', mood: 'normal', text: 'Five is not six. Goodbye.' },

  // ---------------- The menu. The developer is watching.
  dev01: { who: 'dev', mood: 'happy', text: "Oh hey! Welcome to my game. I made it myself. It's really good, I promise." },
  guard32: { who: 'guard', mood: 'confused', text: 'Wait... that\'s it? That game was WAY too short.' },
  guard33: { who: 'guard', mood: 'shocked', text: 'Oh my gosh. Are you serious? This is really it? That\'s the WHOLE game?!' },
  dev02: { who: 'dev', mood: 'sad', text: 'Bro, I was up all night making this.' },
  guard34: { who: 'guard', mood: 'annoyed', text: '...I could do better.' },
  dev03: { who: 'dev', mood: 'angry', text: 'HELL NAW.' },
  dev04: { who: 'dev', mood: 'angry', text: 'GET OUT OF MY GAME!' },
  dev05: { who: 'dev', mood: 'annoyed', text: "...Oh. You're back. Fine. You can play it again. But NO complaining." },
  dev06: { who: 'dev', mood: 'annoyed', text: 'Stop poking the TV.' },
  dev07: { who: 'dev', mood: 'happy', text: "Psst. There's a MUMMY in this game now. I made it at three in the morning." },
  // poking the TV (they go round in order)
  dev08: { who: 'dev', mood: 'confused', text: "Why do you keep clicking me? I'm a TV. ...Kind of." },
  dev09: { who: 'dev', mood: 'happy', text: 'Fun fact: I made every sound in this game with code. Even the munching.' },
  dev11: { who: 'dev', mood: 'hungry', text: 'Got any donuts? Asking for a friend. The friend is me.' },
  dev12: { who: 'dev', mood: 'annoyed', text: "Okay, that's a LOT of pokes. I'm counting, you know." },
  dev13: { who: 'dev', mood: 'scared', text: "Please don't tell the T-Rex where I live." },
  dev14: { who: 'dev', mood: 'sleepy', text: "I made this game at three in the morning. It's still three in the morning. Help." },
  dev15: { who: 'dev', mood: 'shocked', text: 'Wait, have you found the secret rooms? There are EIGHT of them!' },
  dev16: { who: 'dev', mood: 'sad', text: 'Nobody ever reads the plaques. I wrote SO many plaques.' },
  // back at the menu
  dev17: { who: 'dev', mood: 'annoyed', text: 'You fell asleep? In MY game? ...Rude. Try again.' },
  dev18: { who: 'dev', mood: 'shocked', text: 'You found ALL the donuts?! Even I can\'t do that. And I hid them!' },
  dev19: { who: 'dev', mood: 'sleepy', text: '...So are you gonna press play, or are we just staring at each other?' },
  dev20: { who: 'dev', mood: 'happy', text: 'Did you turn the music up? Turn it up. I worked really hard on that music.' },
  // popping into the game
  dev21: { who: 'dev', mood: 'happy', text: 'Hey, you found one of my secret rooms! Take the donut. I insist.' },
  dev23: { who: 'dev', mood: 'sad', text: "Aww. Sweet dreams, little guard. Don't worry, it's almost morning." },
  // more of the dev in the menus
  dev24: { who: 'dev', mood: 'cool', text: 'Pro tip: you can sprint. It burns donuts, though. Just like real life.' },
  dev25: { who: 'dev', mood: 'happy', text: 'Did you see my name in the credits? I put it there myself. Very proud of it.' },
  dev26: { who: 'dev', mood: 'confused', text: 'Back already? The museum misses you. Well, the T-Rex does.' },
  dev27: { who: 'dev', mood: 'annoyed', text: 'You turned the voices off? ...Fine. I will just type REALLY loudly.' },
  dev28: { who: 'dev', mood: 'sad', text: 'Fast graphics? My beautiful cylinders... they look so blurry now.' },
  dev29: { who: 'dev', mood: 'sleepy', text: "Okay, I'm taking a nap. Wake me up when you press play." },
  dev30: { who: 'dev', mood: 'happy', text: "New in this version: there's a whole CITY outside! Look out the front windows. And in the morning... well. You'll see." },
  dev33: { who: 'dev', mood: 'happy', text: 'Oh, you found my parade! I built every float myself. The donut one is my favorite. Obviously.' },
  dev32: { who: 'dev', mood: 'shocked', text: "You got EATEN? By MY T-Rex? ...Okay, that's actually pretty cool. Try again." },
  dev31: { who: 'dev', mood: 'shocked', text: 'Wait, you finished the whole game? And you came BACK? You must really like donuts.' },
};
for (const L of Object.values(LINES)) L.mood = moodOf(L.mood);

// Morning visitors. Subtitles only, spoken in beeps, so they never need a recording (and they're not in
// the clips list). One is picked at random each time you talk to someone, or bump into them.
export const VISITOR_LINES = {
  kid: [
    'Is the T-Rex real? My brother says it comes alive at night.',
    'Why is the dinosaur wearing a guard hat?',
    "I'm gonna be a paleontologist. Or a donut taster.",
    "My mom said don't touch anything. I touched four things.",
    'Can I pet the mummy? Please? PLEASE?',
    'Do you have a donut? You look like you have a donut.',
    'You look really tired, mister.',
    'I found a secret room once. Just kidding. ...Or AM I?',
    'ROAR! ...Did I scare you? I scared you.',
    'This is the best field trip EVER.',
    'Why are there giant footprints going into the Egypt room?',
    'I had a dream that the archives went on forever.',
    'Can we go watch the parade? PLEEEASE?',
    'I saw a float shaped like a T-Rex! Is it this T-Rex?',
  ],
  adult: [
    "Excuse me, where's the gift shop?",
    'Lovely museum. Is the T-Rex supposed to be wearing a hat?',
    'Long night? You look like you slept in an exhibit.',
    'The Egyptian Wing is new, right? That sarcophagus is fantastic.',
    "I could've sworn that mummy moved.",
    'Is the Roman Hall open? I want to see the gladiator shield.',
    'My kid wants a donut. Do you have any? No? Okay.',
    'These plaques are so well written. Somebody worked hard on these.',
    'I heard the archives go on forever. Is that true?',
    "Is there a Wi-Fi password? ...It's not donut123, is it?",
    'Great security here. Very... relaxed.',
    "Do you know where the restrooms are? ...Never mind, I'll follow the signs.",
    'Is the parade today? I had no idea. Nobody tells me anything either.',
    'You can see half the city from those front windows. Lovely view.',
  ],
  kidBump: ['Hey! Watch it!', 'Ow! You stepped on my shoe!', 'Mooom! The guard bumped me!', "Whoa! You're like a bulldozer!", 'Excuse YOU!', 'Rude!'],
  adultBump: ['Oof! Excuse me!', 'Watch where you\'re going, please.', 'Whoa there! Easy!', 'Sorry! ...Oh wait, that was you.', 'Is running allowed in museums?', "My coffee! ...Oh, I don't have coffee. Never mind."],
};

// Which emotions each character actually uses (so you know what to act out).
export const SPEAKER_EMOTIONS = {};
for (const L of Object.values(LINES)) {
  (SPEAKER_EMOTIONS[L.who] ||= new Set()).add(L.mood);
}

export function lineText(id) {
  return LINES[id]?.text || id;
}
