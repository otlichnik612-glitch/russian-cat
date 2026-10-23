import { pic } from "../art";
import { choice, fill, line, listen, match, missing, speak, spell, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Budapest · «Что я делал» · lessons 1–7.
 * Murzik and Tom stay in an old guesthouse by the Danube. Dora, the owner's curious
 * ten-year-old granddaughter, wants to hear everything — so Murzik tells the whole story so far,
 * in the past tense.
 * This is the city where the learner finally says the past about themself: я был / я была.
 * Every card and model gives both forms; the help text says which one women use.
 */

export const budapest1: Lesson = {
  id: "a1-budapest-1",
  level: "A1",
  cityId: "budapest",
  number: 1,
  title: "What Did You Do Yesterday?",
  minutes: 6,
  goals: ["Ask what someone did", "Say what you did yesterday", "Use the past: man -л, woman -ла"],
  vocabNote:
    "In the past, “I” changes with who you are: a man says я гулял, a woman says я гуляла. Choose your form!",
  vocab: [
    v("bu1-1", "Что ты делал вчера?", "What did you do yesterday? (to a man)", "Dora, a girl of about ten with two braids, asks Murzik with big curious eyes.", "Play Что ты делал вчера", pic("budapest/1-1")),
    v("bu1-2", "Я гулял. / Я гуляла.", "I went for a walk. (man / woman)", "Murzik walks along the Danube embankment in the sunshine.", "Play Я гулял. Я гуляла", pic("budapest/1-2")),
    v("bu1-3", "Я читал. / Я читала.", "I was reading. (man / woman)", "Murzik reads a book on a bench by the river.", "Play Я читал. Я читала", pic("budapest/1-3")),
    v("bu1-4", "Я работал. / Я работала.", "I was working. (man / woman)", "Tom works at a laptop in a café, with his camera next to him.", "Play Я работал. Я работала", pic("budapest/1-4")),
    v("bu1-5", "весь день", "all day", "A sun rises, goes across the sky and sets — one full arc.", "Play весь день", pic("budapest/1-5")),
    v("bu1-6", "Я весь день отдыхал.", "I rested all day. (man)", "Murzik lies in a hammock-like chair with his eyes closed from morning till evening.", "Play Я весь день отдыхал", pic("budapest/1-6")),
    v("bu1-7", "Сначала… потом…", "First… then…", "Two small pictures joined by an arrow: first a cup of coffee, then a walk.", "Play Сначала… потом", pic("budapest/1-7")),
  ],
  dialogue: {
    title: "Dora's questions",
    note: "Dora is a girl, so she says я гуляла. Murzik and Tom are men: я гулял, я работал.",
    lines: [
      line("dora", "Мурзик, что ты делал вчера?", "Murzik, what did you do yesterday?"),
      line("murzik", "Вчера? Сначала я гулял, потом читал.", "Yesterday? First I went for a walk, then I read."),
      line("dora", "А Том?", "And Tom?"),
      line("tom", "Я работал. Весь день!", "I was working. All day!"),
      line("murzik", "А ты, Дора? Что ты делала?", "And you, Dora? What did you do?"),
      line("dora", "Я? Я гуляла с собакой и рисовала кота. Тебя!", "Me? I walked the dog and drew a cat. You!"),
    ],
    gist: choice("bu1-d1", "What did Tom do yesterday?", [
      ["He worked all day.", true],
      ["He went for a walk.", false],
      ["He drew a cat.", false],
    ]),
  },
  grammar: [
    {
      title: "The past: -л (man), -ла (woman)",
      paragraphs: [
        "Take the verb, drop -ть, add -л for a man or -ла for a woman: гулять → я гулял / я гуляла; читать → я читал / я читала.",
        "For мы, вы and они, it is -ли for everyone: мы гуляли (you know this from Berlin).",
      ],
      examples: [
        { ru: "Он читал, а она работала.", en: "He was reading, and she was working." },
        { ru: "Что ты делала вчера?", en: "What did you do yesterday? (to a woman)" },
      ],
    },
  ],
  tasks: [
    listen("bu1-t1", "Listen. Who is speaking — a man or a woman?", "Вчера я весь день работала.", [
      ["A woman (работала).", true],
      ["A man.", false],
      ["Several people.", false],
    ]),
    match("bu1-t2", "Match the Russian with the English.", [
      ["весь день", "all day"],
      ["сначала", "first"],
      ["потом", "then"],
    ], { skill: "words" }),
    choice("bu1-t3", "Anna says: “Yesterday I was reading.” Which is right?", [
      ["Вчера я читала.", true],
      ["Вчера я читал.", false],
      ["Вчера я читали.", false],
    ], { skill: "grammar" }),
    spell("bu1-t4", "Build the word for “yesterday” — you know it from Berlin.", "вчера"),
    speak("bu1-t5", "Что ты делал вчера?", "Вчера я работал, а потом отдыхал.", "Yesterday I worked, and then I rested.", {
      help: "Say what you really did yesterday. A woman says работала, отдыхала.",
    }),
    listen("bu1-t6", "Listen and choose the best reply.", "Где находится банк?", [
      ["Рядом с почтой.", true],
      ["Я весь день отдыхал.", false],
      ["Сначала я гулял.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "paprika",
    itemName: "String of paprika",
    itemNameRu: "Паприка",
    ru: "Ура! Связка красной паприки!",
    en: "Yay! A string of red peppers!",
    a11y: "A string of bright red dried peppers hangs by the window of an old room with a view of the Danube.",
    image: pic("budapest/reward-1"),
    steps: ["Their room is in an old guesthouse by the Danube.", "Dora's grandmother owns it.", "By the window hangs a string of red peppers.", "“For good luck,” says Dora."],
    bridge: "Dora sees the map with the red pins. “You've been to so many cities! Where have you been?”",
  },
};

export const budapest2: Lesson = {
  id: "a1-budapest-2",
  level: "A1",
  cityId: "budapest",
  number: 2,
  title: "Where Have You Been?",
  minutes: 6,
  goals: ["Ask where someone has been", "Say where you have been", "Say recently, long ago, last year"],
  vocabNote:
    "Я был в… / Я была в… means “I have been to…”. Use в + the city with -е, as in Warsaw: в Париже, в Риме.",
  vocab: [
    v("bu2-1", "Где ты был?", "Where have you been? (to a man)", "Dora points at the world map full of red pins.", "Play Где ты был", pic("budapest/2-1")),
    v("bu2-2", "Я был в Париже. / Я была в Париже.", "I have been to Paris. (man / woman)", "A small picture of the Eiffel Tower in a round frame.", "Play Я был в Париже. Я была в Париже", pic("budapest/2-2")),
    v("bu2-3", "недавно", "recently", "A calendar page from just a few days ago, with a little star.", "Play недавно", pic("budapest/2-3")),
    v("bu2-4", "давно", "a long time ago", "An old faded calendar page with cobwebs.", "Play давно", pic("budapest/2-4")),
    v("bu2-5", "в прошлом году", "last year", "Two calendars: last year's in grey, this year's in colour; an arrow points back.", "Play в прошлом году", pic("budapest/2-5")),
    v("bu2-6", "Ты был в Москве?", "Have you been to Moscow? (to a man)", "Dora points at a small picture of Moscow's colourful domes.", "Play Ты был в Москве", pic("budapest/2-6")),
    v("bu2-7", "Я никогда не был в…", "I've never been to… (man)", "Murzik shakes his head and points at an empty spot on the map.", "Play Я никогда не был в", pic("budapest/2-7")),
  ],
  dialogue: {
    title: "The map with pins",
    note: "Murzik is from Moscow, so of course he has been there! Конечно — of course.",
    lines: [
      line("dora", "Мурзик, где ты был?", "Murzik, where have you been?"),
      line("murzik", "Я был в Париже, в Лондоне, в Мадриде, в Риме…", "I've been to Paris, London, Madrid, Rome…"),
      line("dora", "Ого! А когда ты был в Париже?", "Wow! And when were you in Paris?"),
      line("murzik", "Давно. А в Варшаве — недавно.", "A long time ago. And in Warsaw — recently."),
      line("dora", "А ты был в Москве?", "And have you been to Moscow?"),
      line("murzik", "Конечно! Я из Москвы. А ты?", "Of course! I'm from Moscow. And you?"),
      line("dora", "Я никогда не была в Москве. Только в Вене, в прошлом году.", "I've never been to Moscow. Only to Vienna, last year."),
    ],
    gist: choice("bu2-d1", "Where has Dora been?", [
      ["Vienna, last year.", true],
      ["Moscow.", false],
      ["Paris and London.", false],
    ]),
  },
  grammar: [
    {
      title: "Был / была в …",
      paragraphs: [
        "Я был в Риме (man). Я была в Риме (woman). Мы были в Риме (everyone).",
        "Never: Я никогда не был в… / Я никогда не была в… — remember the не from Vienna.",
      ],
      examples: [
        { ru: "Ты была в Лондоне?", en: "Have you been to London? (to a woman)" },
        { ru: "Я никогда не была в Риме.", en: "I've never been to Rome. (woman)" },
      ],
    },
  ],
  tasks: [
    listen("bu2-t1", "Listen. Where has the person been?", "Я была в Праге в прошлом году.", [
      ["Prague, last year.", true],
      ["Prague, recently.", false],
      ["Vienna, last year.", false],
    ]),
    choice("bu2-t2", "What does недавно mean?", [
      ["recently", true],
      ["a long time ago", false],
      ["never", false],
    ], { skill: "words" }),
    fill("bu2-t3", "Complete (a woman speaks): “I have been to Paris.”", "Я", "в Париже.", "была", ["была", "был", "были"], { skill: "grammar" }),
    missing("bu2-t4", "Which letter is missing? (recently)", "н", "давно", "е", ["е", "и", "а"]),
    speak("bu2-t5", "Где ты был?", "Я был в Лондоне и в Риме.", "I've been to London and Rome.", {
      help: "Say which cities you have really been to. A woman says Я была в…",
    }),
    listen("bu2-t6", "Listen and choose the best reply.", "Что ты делал вчера?", [
      ["Я весь день работал.", true],
      ["Я был в Париже.", false],
      ["Давно.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tablecloth",
    itemName: "Embroidered tablecloth",
    itemNameRu: "Скатерть",
    ru: "Ура! Вышитая скатерть!",
    en: "Yay! An embroidered tablecloth!",
    a11y: "A white tablecloth embroidered with bright red, blue and green flowers covers a small round table in Murzik's room.",
    image: pic("budapest/reward-2"),
    steps: ["Dora's grandmother brings a tablecloth.", "She embroidered the flowers herself.", "Red, blue and green.", "The little table looks like a garden now."],
    bridge: "In the evening Dora sits down on the floor. “Now tell me the whole story. From the very beginning!”",
  },
};

export const budapest3: Lesson = {
  id: "a1-budapest-3",
  level: "A1",
  cityId: "budapest",
  number: 3,
  title: "How It All Began",
  minutes: 6,
  goals: ["Tell a story in order", "Use story words: suddenly, at the end", "Ask “What happened?”"],
  vocabNote:
    "Story words help a listener follow: сначала (first), потом (then), вдруг (suddenly), в конце (at the end).",
  vocab: [
    v("bu3-1", "Что случилось?", "What happened?", "Dora sits on the floor hugging her knees, leaning in to listen.", "Play Что случилось", pic("budapest/3-1")),
    v("bu3-2", "Всё началось в Париже.", "It all began in Paris.", "A soft, dreamy picture of Murzik's Paris apartment with the Eiffel Tower outside.", "Play Всё началось в Париже", pic("budapest/3-2")),
    v("bu3-3", "Я нашёл открытку. / Я нашла открытку.", "I found a postcard. (man / woman)", "Murzik opens a desk drawer and finds an old postcard.", "Play Я нашёл открытку. Я нашла открытку", pic("budapest/3-3")),
    v("bu3-4", "вдруг", "suddenly", "A big surprised “!” flash above Murzik's head.", "Play вдруг", pic("budapest/3-4")),
    v("bu3-5", "в конце", "at the end", "The last page of a book with a small star at the bottom.", "Play в конце", pic("budapest/3-5")),
    v("bu3-6", "Мы решили поехать.", "We decided to go.", "Murzik and Tom shake hands firmly in front of a suitcase.", "Play Мы решили поехать", pic("budapest/3-6")),
    v("bu3-7", "Вот так!", "That's how it was!", "Murzik spreads his paws as if finishing a story.", "Play Вот так", pic("budapest/3-7")),
  ],
  dialogue: {
    title: "From the very beginning",
    note: "Нашёл (found) is a little irregular: он нашёл, она нашла. Ящик — drawer.",
    lines: [
      line("dora", "Что случилось? Почему ты путешествуешь?", "What happened? Why are you travelling?"),
      line("murzik", "Всё началось в Париже. Сначала я купил старый стол.", "It all began in Paris. First I bought an old desk."),
      line("murzik", "Потом я открыл ящик и вдруг нашёл открытку.", "Then I opened the drawer and suddenly found a postcard."),
      line("dora", "От кого?", "From whom?"),
      line("murzik", "От бабушки Аси! А в конце: «Иди по моим следам».", "From Grandma Asya! And at the end: “Follow my steps.”"),
      line("tom", "И мы решили поехать. Вот так!", "And we decided to go. That's how it was!"),
    ],
    gist: choice("bu3-d1", "Where did Murzik find the postcard?", [
      ["In the drawer of an old desk.", true],
      ["In his suitcase.", false],
      ["At the post office.", false],
    ]),
  },
  grammar: [
    {
      title: "Telling a story",
      paragraphs: [
        "Put the events in order with сначала → потом → вдруг → в конце.",
        "Сначала я купил стол. Потом открыл ящик. Вдруг нашёл открытку. (A woman: купила, открыла, нашла.)",
      ],
      examples: [
        { ru: "Сначала мы были в Лондоне, потом в Мадриде.", en: "First we were in London, then in Madrid." },
        { ru: "Вдруг пошёл дождь.", en: "Suddenly it started to rain." },
      ],
    },
  ],
  tasks: [
    listen("bu3-t1", "Listen. What happened suddenly?", "Мы гуляли, и вдруг пошёл дождь.", [
      ["It started to rain.", true],
      ["They got lost.", false],
      ["The phone died.", false],
    ]),
    match("bu3-t2", "Match the Russian with the English.", [
      ["вдруг", "suddenly"],
      ["в конце", "at the end"],
      ["Что случилось?", "What happened?"],
    ], { skill: "words" }),
    choice("bu3-t3", "Put the story words in a natural order.", [
      ["сначала → потом → в конце", true],
      ["в конце → сначала → потом", false],
      ["потом → в конце → сначала", false],
    ], { skill: "grammar" }),
    spell("bu3-t4", "Build the word for “suddenly”.", "вдруг"),
    speak("bu3-t5", "Что случилось?", "Сначала я гулял, а потом вдруг пошёл дождь.", "First I was walking, and then suddenly it started to rain.", {
      help: "Tell a tiny story with сначала and вдруг. A woman says гуляла.",
    }),
    listen("bu3-t6", "Listen and choose the best reply.", "Ты был в Москве?", [
      ["Да, я был в Москве.", true],
      ["Что случилось?", false],
      ["Вдруг.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "rubiks-cube",
    itemName: "Puzzle cube",
    itemNameRu: "Кубик Рубика",
    ru: "Ура! Кубик Рубика!",
    en: "Yay! A puzzle cube!",
    a11y: "Murzik turns a colourful puzzle cube in his paws with a concentrated face.",
    image: pic("budapest/reward-3"),
    steps: ["Dora shows Murzik a colourful cube.", "“It was invented here, in Hungary!”", "Murzik turns it again and again.", "The colours will not come together!"],
    bridge: "“And was it ever scary?” asks Dora the next morning.",
  },
};

export const budapest4: Lesson = {
  id: "a1-budapest-4",
  level: "A1",
  cityId: "budapest",
  number: 4,
  title: "How Did You Feel?",
  minutes: 6,
  goals: ["Say how you felt", "Say it was scary, sad or funny", "Say “the best day”"],
  vocabNote:
    "Мне было… is the past of Мне холодно, Мне скучно. Good news: it is the same for men and women!",
  vocab: [
    v("bu4-1", "Тебе было страшно?", "Were you scared?", "Dora asks with wide eyes, hiding half her face behind a cushion.", "Play Тебе было страшно", pic("budapest/4-1")),
    v("bu4-2", "Мне было страшно.", "I was scared.", "Memory picture: Murzik in the Istanbul hotel, looking at the empty spot where the suitcase was.", "Play Мне было страшно", pic("budapest/4-2")),
    v("bu4-3", "Мне было грустно.", "I was sad.", "Memory picture: Murzik waving goodbye to Barsik at a train window.", "Play Мне было грустно", pic("budapest/4-3")),
    v("bu4-4", "Мне было смешно.", "It was funny. / I found it funny.", "Memory picture: Barsik wobbling on a bicycle in Amsterdam.", "Play Мне было смешно", pic("budapest/4-4")),
    v("bu4-5", "Мне было одиноко.", "I felt lonely.", "Memory picture: Murzik alone in an empty Paris apartment before he met Tom.", "Play Мне было одиноко", pic("budapest/4-5")),
    v("bu4-6", "Но потом всё было хорошо.", "But then everything was fine.", "Memory picture: Murzik hugging his found suitcase.", "Play Но потом всё было хорошо", pic("budapest/4-6")),
    v("bu4-7", "Это был лучший день!", "It was the best day!", "Memory picture: Murzik's birthday on the Athens roof with balloons and cake.", "Play Это был лучший день", pic("budapest/4-7")),
  ],
  dialogue: {
    title: "Scary, sad and funny",
    note: "Когда пропал чемодан — when the suitcase disappeared. День рождения — birthday.",
    lines: [
      line("dora", "Мурзик, тебе было страшно?", "Murzik, were you scared?"),
      line("murzik", "Да. В Стамбуле. Когда пропал чемодан, мне было очень страшно.", "Yes. In Istanbul. When the suitcase disappeared, I was very scared."),
      line("dora", "А грустно?", "And sad?"),
      line("murzik", "Мне было грустно, когда уехал Барсик. Но потом всё было хорошо.", "I was sad when Barsik left. But then everything was fine."),
      line("tom", "А в Амстердаме Барсик ехал на велосипеде. Нам было так смешно!", "And in Amsterdam Barsik rode a bike. It was so funny!"),
      line("murzik", "А день рождения в Афинах — это был лучший день!", "And my birthday in Athens — it was the best day!"),
    ],
    gist: choice("bu4-d1", "When was Murzik scared?", [
      ["When the suitcase disappeared.", true],
      ["On his birthday.", false],
      ["In Amsterdam on the bike.", false],
    ]),
  },
  grammar: [
    {
      title: "Мне было + feeling",
      paragraphs: [
        "Мне страшно (now) → Мне было страшно (in the past). It works with all the “мне” words: холодно, скучно, весело, грустно.",
        "Тебе было…? — Were you…? Нам было смешно — We found it funny.",
      ],
      examples: [
        { ru: "Мне было холодно.", en: "I was cold." },
        { ru: "Нам было весело.", en: "We had fun." },
      ],
    },
  ],
  tasks: [
    listen("bu4-t1", "Listen. How did the person feel?", "Мне было грустно.", [
      ["Sad.", true],
      ["Scared.", false],
      ["Lonely.", false],
    ]),
    match("bu4-t2", "Match the Russian with the English.", [
      ["страшно", "scary"],
      ["смешно", "funny"],
      ["одиноко", "lonely"],
    ], { skill: "words" }),
    fill("bu4-t3", "Complete: “I was cold.”", "Мне", "холодно.", "было", ["было", "был", "была"], { skill: "grammar" }),
    missing("bu4-t4", "Which letter is missing? (funny)", "см", "шно", "е", ["е", "и", "ё"]),
    speak("bu4-t5", "Какой был твой лучший день?", "Это был мой день рождения. Мне было очень весело!", "It was my birthday. I had a lot of fun!", {
      help: "Talk about your best day. Мне было… is the same for everyone.",
    }),
    listen("bu4-t6", "Listen and choose the best reply.", "Что случилось?", [
      ["Мы потеряли чемодан!", true],
      ["Это был лучший день!", false],
      ["Мне было смешно.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "doras-drawing",
    itemName: "Dora's drawing",
    itemNameRu: "Рисунок Доры",
    ru: "Ура! Рисунок Доры!",
    en: "Yay! Dora's drawing!",
    a11y: "A child's colourful crayon drawing of Murzik and Tom with a big suitcase and many little houses hangs on the wall.",
    image: pic("budapest/reward-4"),
    steps: ["Dora has listened to every story.", "Now she draws them.", "Murzik, Tom, the suitcase and many little cities.", "Murzik hangs the drawing on the wall."],
    bridge: "“Today we're not telling stories,” says Tom. “Today we're going to the famous thermal baths!”",
  },
};

export const budapest5: Lesson = {
  id: "a1-budapest-5",
  level: "A1",
  cityId: "budapest",
  number: 5,
  title: "Already or Not Yet?",
  minutes: 6,
  goals: ["Ask “Have you already…?”", "Answer: already / not yet", "Describe a nice experience"],
  vocabNote:
    "Уже means “already”, ещё не means “not yet”: Я уже был там. — Я ещё не был там. Купальня is a thermal bath.",
  vocab: [
    v("bu5-1", "Ты уже был в купальне?", "Have you been to the thermal baths yet? (to a man)", "A grand yellow building with big outdoor pools full of steaming water.", "Play Ты уже был в купальне", pic("budapest/5-1")),
    v("bu5-2", "Ещё нет.", "Not yet.", "Murzik shakes his head with a curious smile.", "Play Ещё нет", pic("budapest/5-2")),
    v("bu5-3", "Уже!", "Already!", "Tom nods proudly, holding a towel.", "Play Уже", pic("budapest/5-3")),
    v("bu5-4", "Я уже купил билеты.", "I've already bought the tickets. (man)", "Tom waves two tickets in front of the bath entrance.", "Play Я уже купил билеты", pic("budapest/5-4")),
    v("bu5-5", "Вода очень тёплая!", "The water is very warm!", "Murzik sits in a steaming pool up to his chin, eyes closed with joy.", "Play Вода очень тёплая", pic("budapest/5-5")),
    v("bu5-6", "Как приятно!", "How nice! / How lovely!", "Murzik floats on his back in warm water with a blissful face.", "Play Как приятно", pic("budapest/5-6")),
    v("bu5-7", "Ты ещё не ел лангош?", "Haven't you tried lángos yet? (to a man)", "A big round fried dough bread with sour cream and cheese on a paper plate.", "Play Ты ещё не ел лангош", pic("budapest/5-7")),
  ],
  dialogue: {
    title: "At the thermal baths",
    note: "Лангош — Hungarian fried bread. Ел — ate (a man; a woman says ела). Тогда — then, in that case.",
    lines: [
      line("tom", "Мурзик, ты уже был в купальне?", "Murzik, have you been to the thermal baths yet?"),
      line("murzik", "Ещё нет. А ты?", "Not yet. And you?"),
      line("tom", "Тоже нет. Но я уже купил билеты!", "Me neither. But I've already bought the tickets!"),
      line("murzik", "Ой… Вода очень тёплая! Как приятно!", "Oh… The water is very warm! How lovely!"),
      line("dora", "А потом — лангош! Ты ещё не ел лангош?", "And afterwards — lángos! Haven't you tried lángos yet?"),
      line("murzik", "Ещё нет!", "Not yet!"),
      line("dora", "Тогда идём!", "Then let's go!"),
    ],
    gist: choice("bu5-d1", "Who bought the tickets?", [
      ["Tom.", true],
      ["Dora.", false],
      ["Murzik.", false],
    ]),
  },
  grammar: [
    {
      title: "Уже / ещё не",
      paragraphs: [
        "Уже + past: Я уже купил билеты. — I've already bought the tickets. (A woman: купила.)",
        "Ещё не + past: Я ещё не был там. — I haven't been there yet. Short answers: Уже! — Ещё нет.",
      ],
      examples: [
        { ru: "Ты уже обедала? — Ещё нет.", en: "Have you had lunch yet? (to a woman) — Not yet." },
        { ru: "Мы уже были в Вене.", en: "We've already been to Vienna." },
      ],
    },
  ],
  tasks: [
    listen("bu5-t1", "Listen. Has the person bought the tickets?", "Я ещё не купила билеты.", [
      ["Not yet.", true],
      ["Yes, already.", false],
      ["She doesn't need them.", false],
    ]),
    choice("bu5-t2", "Your friend asks: Ты уже был в Будапеште? You haven't been. What do you say?", [
      ["Ещё нет.", true],
      ["Уже!", false],
      ["Как приятно!", false],
    ], { skill: "words" }),
    fill("bu5-t3", "Complete: “I haven't been there yet.” (a man)", "Я ещё", "был там.", "не", ["не", "уже", "нет"], { skill: "grammar" }),
    spell("bu5-t4", "Build the word for “water”.", "вода"),
    speak("bu5-t5", "Ты уже был в Будапеште?", "Ещё нет. Но очень хочу!", "Not yet. But I really want to!", {
      help: "Answer truthfully. If you have been, say Уже! Я был… (a woman: была).",
    }),
    listen("bu5-t6", "Listen and choose the best reply.", "Тебе было страшно?", [
      ["Да, мне было очень страшно.", true],
      ["Ещё нет.", false],
      ["Вода очень тёплая!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bathrobe",
    itemName: "Bathrobe",
    itemNameRu: "Халат",
    ru: "Ура! Мягкий халат!",
    en: "Yay! A soft bathrobe!",
    a11y: "A small fluffy white bathrobe with a hood hangs on the door of Murzik's room.",
    image: pic("budapest/reward-5"),
    steps: ["After the baths Murzik is warm and sleepy.", "At the shop there are little fluffy bathrobes.", "One is just his size — with a hood!", "He wears it all evening."],
    bridge: "In the evening Tom opens his laptop: all the photos from all the cities.",
  },
};

export const budapest6: Lesson = {
  id: "a1-budapest-6",
  level: "A1",
  cityId: "budapest",
  number: 6,
  title: "Do You Remember?",
  minutes: 6,
  goals: ["Ask a friend “Do you remember…?”", "Talk about shared memories", "Say it was a good time"],
  vocabNote:
    "Помнишь, как…? — “Do you remember how…?” is a lovely way to start a shared memory.",
  vocab: [
    v("bu6-1", "Помнишь, как…?", "Do you remember how…?", "Tom and Murzik sit together looking at photos on a laptop, smiling.", "Play Помнишь, как", pic("budapest/6-1")),
    v("bu6-2", "Конечно, помню!", "Of course I remember!", "Murzik laughs and puts a paw on his heart.", "Play Конечно, помню", pic("budapest/6-2")),
    v("bu6-3", "Как мы опоздали на поезд!", "How we missed the train!", "Photo memory: Tom and Murzik on an empty Berlin platform.", "Play Как мы опоздали на поезд", pic("budapest/6-3")),
    v("bu6-4", "Как мы заблудились!", "How we got lost!", "Photo memory: three bikes in a maze of Amsterdam canals.", "Play Как мы заблудились", pic("budapest/6-4")),
    v("bu6-5", "Это было так смешно!", "It was so funny!", "Tom and Murzik laugh so hard they hold their tummies.", "Play Это было так смешно", pic("budapest/6-5")),
    v("bu6-6", "Хорошее было время.", "Those were good times.", "A row of small framed photos from many cities on a shelf.", "Play Хорошее было время", pic("budapest/6-6")),
    v("bu6-7", "Я часто думаю об этом.", "I often think about it.", "Murzik sits by the window with his chin on his paw, thinking, the photo album on his lap.", "Play Я часто думаю об этом", pic("budapest/6-7b")),
  ],
  dialogue: {
    title: "Old photos",
    note: "Тот кот в шляпе — that cat in the hat. На каждой фотографии — in every photo.",
    lines: [
      line("tom", "Мурзик, помнишь, как мы опоздали на поезд в Берлине?", "Murzik, do you remember how we missed the train in Berlin?"),
      line("murzik", "Конечно, помню! А как мы заблудились в Амстердаме!", "Of course I remember! And how we got lost in Amsterdam!"),
      line("tom", "Это было так смешно! Столько всего!", "It was so funny! So much has happened!"),
      line("murzik", "Хорошее было время… Я часто думаю об этом. Ой! Том, смотри!", "Those were good times… I often think about it. Oh! Tom, look!"),
      line("murzik", "Вот здесь, и здесь… Тот кот в шляпе! На каждой фотографии!", "Here, and here… That cat in the hat! In every photo!"),
      line("tom", "Не может быть…", "It can't be…"),
    ],
    gist: choice("bu6-d1", "What does Murzik find in the photos?", [
      ["The cat in the hat — in every photo.", true],
      ["A photo of Grandma Asya.", false],
      ["A photo of Dora.", false],
    ]),
  },
  grammar: [
    {
      title: "Помню, помнишь",
      paragraphs: [
        "я помню, ты помнишь: Ты помнишь Лондон? — Конечно, помню!",
        "Помнишь, как…? + a story in the past: Помнишь, как мы гуляли в Праге?",
      ],
      examples: [
        { ru: "Ты помнишь Карла?", en: "Do you remember Karl?" },
        { ru: "Я не помню.", en: "I don't remember." },
      ],
    },
  ],
  tasks: [
    listen("bu6-t1", "Listen. What does Tom remember?", "Помнишь, как мы ели паэлью в Мадриде?", [
      ["Eating paella in Madrid.", true],
      ["Getting lost in Amsterdam.", false],
      ["Missing the train in Berlin.", false],
    ]),
    choice("bu6-t2", "What does Хорошее было время mean?", [
      ["Those were good times.", true],
      ["It's a good time now.", false],
      ["The weather was good.", false],
    ], { skill: "words" }),
    fill("bu6-t3", "Complete: “Do you remember Karl?”", "Ты", "Карла?", "помнишь", ["помнишь", "помню", "помнит"], { skill: "grammar" }),
    missing("bu6-t4", "Which letter is missing? (time)", "вр", "мя", "е", ["е", "и", "я"]),
    speak("bu6-t5", "Помнишь, как мы опоздали на поезд?", "Конечно, помню! Это было так смешно!", "Of course I remember! It was so funny!", {
      help: "Your friend remembers a funny day. Answer aloud.",
    }),
    listen("bu6-t6", "Listen and choose the best reply.", "Ты уже был в купальне?", [
      ["Уже! Как приятно!", true],
      ["Конечно, помню!", false],
      ["Столько всего!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-album",
    itemName: "Photo album",
    itemNameRu: "Фотоальбом",
    ru: "Ура! Фотоальбом путешествия!",
    en: "Yay! A photo album of the journey!",
    a11y: "Murzik opens a thick photo album full of pictures from every city. In the background of many photos, a tiny white cat in a hat can be seen.",
    image: pic("budapest/reward-6"),
    steps: ["Tom prints his best photos.", "One for every city.", "They make a big album together.", "And in many of them — a tiny cat in a hat."],
    bridge: "On the last evening Dora asks: “Will you tell me the whole story once more? All of it?”",
  },
};

export const budapest7: Lesson = {
  id: "a1-budapest-7",
  level: "A1",
  cityId: "budapest",
  number: 7,
  title: "The Whole Story",
  minutes: 7,
  goals: ["Tell a short story about a journey", "Say what you are doing now and what will happen", "Understand a story by ear"],
  vocabNote:
    "This lesson puts past, present and future together: мы были (past), мы ищем (now), мы найдём (future).",
  vocab: [
    v("bu7-1", "Расскажи всё с начала!", "Tell me everything from the beginning!", "Dora sits in her pyjamas with a cup of cocoa, ready to listen.", "Play Расскажи всё с начала", pic("budapest/7-1")),
    v("bu7-2", "Мы ищем бабушку.", "We are looking for Grandma.", "Murzik holds the Paris postcard and the birthday postcard side by side.", "Play Мы ищем бабушку", pic("budapest/7-2")),
    v("bu7-3", "Мы были в двенадцати городах.", "We've been to twelve cities.", "The world map on the wall with twelve red pins and a thirteenth one in Budapest.", "Play Мы были в двенадцати городах", pic("budapest/7-3")),
    v("bu7-4", "Мы ещё не нашли её.", "We haven't found her yet.", "Murzik looks out of the window at the night sky, thinking.", "Play Мы ещё не нашли её", pic("budapest/7-4")),
    v("bu7-5", "Но мы найдём!", "But we will find her!", "Murzik clenches his paw with a brave, determined face.", "Play Но мы найдём", pic("budapest/7-5")),
    v("bu7-6", "Это ещё не конец.", "This isn't the end yet.", "A road goes on over the hills towards a far-away sunrise.", "Play Это ещё не конец", pic("budapest/7-6")),
    v("bu7-7", "Спокойной ночи, Дора!", "Good night, Dora!", "Murzik tucks a blanket around a sleepy Dora.", "Play Спокойной ночи, Дора", pic("budapest/7-7")),
  ],
  dialogue: {
    title: "A bedtime story",
    note: "Murzik tells the story using past, present and future. Ищем — we're looking for. Найдём — we will find.",
    lines: [
      line("dora", "Мурзик, расскажи всё с начала!", "Murzik, tell me everything from the beginning!"),
      line("murzik", "Хорошо. Всё началось в Париже. Я нашёл открытку от бабушки Аси.", "OK. It all began in Paris. I found a postcard from Grandma Asya."),
      line("murzik", "Потом мы были в двенадцати городах. Сейчас мы в Будапеште.", "Then we've been to twelve cities. Now we're in Budapest."),
      line("dora", "А бабушка?", "And Grandma?"),
      line("murzik", "Мы ещё не нашли её. Но мы найдём! Это ещё не конец.", "We haven't found her yet. But we will! This isn't the end yet."),
      line("dora", "А кот в шляпе?", "And the cat in the hat?"),
      line("murzik", "Это тайна. Спокойной ночи, Дора!", "That's a mystery. Good night, Dora!"),
    ],
    gist: choice("bu7-d1", "Have they found Grandma Asya?", [
      ["Not yet.", true],
      ["Yes, in Budapest.", false],
      ["Yes, in Paris.", false],
    ]),
  },
  grammar: [
    {
      title: "Past, present, future",
      paragraphs: [
        "Past: мы были, я нашёл / нашла. Present: мы ищем, я ищу. Future: мы найдём, я найду.",
        "Short words show the time: вчера, сейчас, завтра.",
      ],
      examples: [
        { ru: "Вчера мы были в Варшаве. Сейчас мы в Будапеште. Завтра мы будем в новом городе.", en: "Yesterday we were in Warsaw. Now we're in Budapest. Tomorrow we'll be in a new city." },
      ],
    },
  ],
  tasks: [
    listen("bu7-t1", "Listen. What did the person do on Saturday?", "В субботу я была в купальне. Сначала я плавала, потом обедала, а вечером гуляла у реки. Было очень приятно!", [
      ["She went to the thermal baths.", true],
      ["She worked all day.", false],
      ["She went to the cinema.", false],
    ], { help: "This is your Budapest listening test." }),
    choice("bu7-t2", "Which word shows the future?", [
      ["найдём", true],
      ["нашли", false],
      ["ищем", false],
    ], { skill: "words" }),
    choice("bu7-t3", "Which sentence is about NOW?", [
      ["Сейчас мы в Будапеште.", true],
      ["Вчера мы были в Варшаве.", false],
      ["Завтра мы будем в новом городе.", false],
    ], { skill: "grammar" }),
    spell("bu7-t4", "Build the word for “story / history” — you know it from Lisbon.", "история"),
    speak("bu7-t5", "Расскажи о себе. Где ты был?", "Я был в Лондоне. Сейчас я дома. Завтра я буду учить русский!", "I've been to London. Now I'm at home. Tomorrow I'll study Russian!", {
      help: "Say three sentences: past, now, future. A woman says Я была.",
    }),
    listen("bu7-t6", "Listen and choose the best reply.", "Помнишь, как мы заблудились?", [
      ["Конечно, помню!", true],
      ["Мы ещё не нашли её.", false],
      ["Уже!", false],
    ], { skill: "review" }),
    tf("bu7-t7", "A woman says: Вчера я гулял.", false, "True or false", { skill: "review" }),
  ],
  reward: {
    itemId: "travel-diary",
    itemName: "Travel diary",
    itemNameRu: "Дневник",
    ru: "Ура! Дневник путешествий!",
    en: "Yay! A travel diary!",
    a11y: "Murzik writes in a thick notebook with a red ribbon. On the open page there is a little drawing of every city they have visited.",
    image: pic("budapest/reward-7"),
    steps: ["Dora gives Murzik a thick notebook.", "“Write the whole story down,” she says.", "Murzik draws every city on the first page.", "His travel diary has begun."],
    bridge: "The diary goes into the suitcase. One more city — and A1 is finished!",
  },
};
