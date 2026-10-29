import { pic } from "../art";
import { choice, fill, line, listen, match, missing, speak, spell, v } from "../make";
import type { Lesson } from "../types";

/*
 * Prague · «Одежда и самочувствие» · lessons 1–7.
 * Cold autumn in Prague. Murzik and Tom buy warm clothes, Murzik catches a cold,
 * and Dr Anna Petrovna — a Russian doctor who lives downstairs — looks after him.
 * Murzik's home here: a small room in an old house with a view of red roofs.
 */

export const prague1: Lesson = {
  id: "a1-prague-1",
  level: "A1",
  cityId: "prague",
  number: 1,
  title: "Warm Clothes",
  minutes: 5,
  goals: ["Name warm clothes", "Say what you need", "Tell a friend to put on a hat"],
  vocabNote:
    "You know нужен, нужна, нужны from Madrid. It works with clothes too: Мне нужна шапка. Мне нужен шарф. Мне нужны ботинки.",
  vocab: [
    v("pr1-1", "Мне нужна куртка.", "I need a jacket.", "Murzik shivers in the cold wind on a Prague street, hugging himself.", "Listen to Мне нужна куртка", pic("prague/1-1")),
    v("pr1-2", "шапка", "hat (warm)", "A warm knitted hat with a pompom.", "Listen to шапка", pic("prague/1-2")),
    v("pr1-3", "свитер", "sweater", "A thick cosy sweater folded on a chair.", "Listen to свитер", pic("prague/1-3")),
    v("pr1-4", "шарф", "scarf", "Murzik proudly touches his rust-orange knitted scarf.", "Listen to шарф", pic("prague/1-4")),
    v("pr1-5", "ботинки", "boots", "A pair of warm brown boots by the door.", "Listen to ботинки", pic("prague/1-5")),
    v("pr1-6", "Надень шапку!", "Put on a hat!", "Tom pulls a warm hat down over Murzik's ears.", "Listen to Надень шапку", pic("prague/1-6")),
    v("pr1-7", "Тебе тепло?", "Are you warm?", "Tom asks Murzik, who is wrapped in a hat, scarf and sweater, with only his eyes showing.", "Listen to Тебе тепло", pic("prague/1-7")),
  ],
  dialogue: {
    title: "A cold morning",
    note: "Брр! is the sound people make when they are cold. У меня нет шапки — I don't have a hat. Пойдём в магазин — let's go to the shop.",
    lines: [
      line("murzik", "Брр! Том, мне холодно!", "Brr! Tom, I'm cold!"),
      line("tom", "Конечно! Здесь не Мадрид. Надень шапку!", "Of course! This isn't Madrid. Put on a hat!"),
      line("murzik", "У меня нет шапки. Только шарф.", "I don't have a hat. Only a scarf."),
      line("tom", "Тебе нужна шапка. И куртка.", "You need a hat. And a jacket."),
      line("murzik", "И свитер! И ботинки!", "And a sweater! And boots!"),
      line("tom", "Пойдём в магазин!", "Let's go to the shop!"),
    ],
    gist: choice("pr1-d1", "What does Murzik already have?", [
      ["Only a scarf.", true],
      ["A hat and a jacket.", false],
      ["Warm boots.", false],
    ]),
  },
  grammar: [
    {
      title: "Нужен, нужна, нужны",
      paragraphs: [
        "Мне нужен + a “he” word: шарф, свитер. Мне нужна + a “she” word: шапка, куртка. Мне нужны + many things: ботинки.",
        "Тебе нужна куртка — You need a jacket.",
      ],
      examples: [
        { ru: "Мне нужен свитер.", en: "I need a sweater." },
        { ru: "Мне нужны ботинки.", en: "I need boots." },
      ],
    },
  ],
  tasks: [
    listen("pr1-t1", "Listen. What does the person need?", "Мне нужна шапка.", [
      ["A hat.", true],
      ["A scarf.", false],
      ["Boots.", false],
    ]),
    match("pr1-t2", "Match the Russian with the English.", [
      ["куртка", "jacket"],
      ["свитер", "sweater"],
      ["ботинки", "boots"],
    ], { skill: "words" }),
    fill("pr1-t3", "Complete: “I need a sweater.”", "Мне", "свитер.", "нужен", ["нужен", "нужна", "нужны"], { skill: "grammar" }),
    spell("pr1-t4", "Build the word for “scarf”.", "шарф"),
    speak("pr1-t5", "Тебе тепло?", "Нет, мне холодно! Мне нужна куртка.", "No, I'm cold! I need a jacket.", {
      help: "It's cold outside. Tell Tom how you feel and what you need.",
    }),
    listen("pr1-t6", "Listen and choose the best reply.", "Как тебе концерт?", [
      ["Это было чудесно!", true],
      ["Мне нужна шапка.", false],
      ["Тебе тепло?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "coat-stand",
    itemName: "Coat stand",
    itemNameRu: "Вешалка",
    ru: "Ура! Вешалка для одежды!",
    en: "Yay! A coat stand!",
    a11y: "An old wooden coat stand by the door of Murzik's room in Prague, with his scarf hanging on it. The window shows red roofs.",
    image: pic("prague/reward-1"),
    steps: ["Their room is in an old house near the river.", "From the window you can see red roofs.", "By the door there is an old wooden coat stand.", "Murzik hangs his scarf on it."],
    bridge: "In the shop there are so many colours! Which one will Murzik choose?",
  },
};

export const prague2: Lesson = {
  id: "a1-prague-2",
  level: "A1",
  cityId: "prague",
  number: 2,
  title: "What Colour?",
  minutes: 5,
  goals: ["Name colours", "Ask what colour something is", "Say your favourite colour"],
  vocabNote:
    "Colours are describing words, so they change their ending: красный шарф, красная шапка.",
  vocab: [
    v("pr2-1", "Какого цвета?", "What colour?", "Murzik holds up a hat and looks at it with a questioning face.", "Listen to Какого цвета", pic("prague/2-1")),
    v("pr2-2", "красный", "red", "A bright red apple and a red hat.", "Listen to красный", pic("prague/2-2")),
    v("pr2-3", "синий и голубой", "dark blue and light blue", "Two paint patches: a deep dark blue like the sea at night, and a light sky blue.", "Listen to синий и голубой", pic("prague/2-3b")),
    v("pr2-4", "зелёный и жёлтый", "green and yellow", "A green leaf and a yellow sun side by side.", "Listen to зелёный и жёлтый", pic("prague/2-4b")),
    v("pr2-5", "розовый и коричневый", "pink and brown", "A pink flower and a brown teddy bear side by side.", "Listen to розовый и коричневый", pic("prague/2-5b")),
    v("pr2-6", "чёрный и белый", "black and white", "A black cat and a white cat sit side by side.", "Listen to чёрный и белый", pic("prague/2-6")),
    v("pr2-7", "Мой любимый цвет — синий.", "My favourite colour is blue.", "Murzik hugs a dark blue hat with a happy face.", "Listen to Мой любимый цвет — синий", pic("prague/2-7")),
  ],
  dialogue: {
    title: "In the shop",
    note: "Или — or. Как море — like the sea.",
    lines: [
      line("seller", "Здравствуйте! Вам нужна шапка?", "Hello! Do you need a hat?"),
      line("murzik", "Да. А какие есть цвета?", "Yes. And what colours are there?"),
      line("seller", "Красная, зелёная, жёлтая или синяя.", "Red, green, yellow or blue."),
      line("tom", "Мурзик, может быть, зелёная? Как моё пальто!", "Murzik, maybe green? Like my coat!"),
      line("murzik", "Нет. Мой любимый цвет — синий. Как море!", "No. My favourite colour is blue. Like the sea!"),
      line("seller", "Вот синяя шапка.", "Here's a blue hat."),
    ],
    gist: choice("pr2-d1", "Which hat does Murzik want?", [
      ["The blue one.", true],
      ["The green one.", false],
      ["The red one.", false],
    ]),
  },
  grammar: [
    {
      title: "Colours match the word",
      paragraphs: [
        "“He” words: красный шарф. “She” words: красная шапка. “It” words: красное пальто. Many things: красные ботинки.",
        "Синий is a little different: синий шарф, синяя шапка, синее пальто, синие ботинки.",
        "Russian has two blues: синий (dark blue) and голубой (light blue, like the sky). They are different colours!",
      ],
      examples: [
        { ru: "зелёная куртка", en: "a green jacket" },
        { ru: "чёрные ботинки", en: "black boots" },
      ],
    },
  ],
  tasks: [
    listen("pr2-t1", "Listen. What colour is the scarf?", "У меня жёлтый шарф.", [
      ["Yellow.", true],
      ["Green.", false],
      ["Red.", false],
    ]),
    match("pr2-t2", "Match the colours.", [
      ["красный", "red"],
      ["зелёный", "green"],
      ["чёрный", "black"],
      ["белый", "white"],
    ], { skill: "words" }),
    fill("pr2-t3", "Complete: “a red hat”.", "", "шапка", "красная", ["красная", "красный", "красные"], { skill: "grammar" }),
    missing("pr2-t4", "Which letter is missing? (green)", "зел", "ный", "ё", ["ё", "о", "е"]),
    speak("pr2-t5", "Какой твой любимый цвет?", "Мой любимый цвет — зелёный.", "My favourite colour is green.", {
      help: "Say your real favourite colour.",
    }),
    listen("pr2-t6", "Listen and choose the best reply.", "Ты занимаешься спортом?", [
      ["Да, я бегаю каждый день.", true],
      ["Мой любимый цвет — синий.", false],
      ["Мне нужна куртка.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "paints",
    itemName: "Watercolour paints",
    itemNameRu: "Акварельные краски",
    ru: "Ура! Акварельные краски!",
    en: "Yay! Watercolour paints!",
    a11y: "An open box of watercolour paints with many bright colours and a brush, on Murzik's windowsill above the red roofs of Prague.",
    image: pic("prague/reward-2"),
    steps: ["Next to the clothes shop there is an art shop.", "Murzik sees a box of watercolours.", "So many colours!", "Now he can paint like Asya."],
    bridge: "Tomorrow Tom wants to buy a new jacket. But will it fit?",
  },
};

export const prague3: Lesson = {
  id: "a1-prague-3",
  level: "A1",
  cityId: "prague",
  number: 3,
  title: "Does It Suit Me?",
  minutes: 6,
  goals: ["Ask to try something on", "Ask about size", "Say something suits someone"],
  vocabNote:
    "Мне идёт? literally means “Does it go to me?” — Russians use it for “Does it suit me?”",
  vocab: [
    v("pr3-1", "Можно примерить?", "Can I try it on?", "Tom holds up a jacket and points at a fitting room.", "Listen to Можно примерить", pic("prague/3-1")),
    v("pr3-2", "Какой размер? — Это мой размер.", "What size? — This is my size.", "A shop assistant with a measuring tape; Tom wears a jacket that fits perfectly.", "Listen to Какой размер? — Это мой размер", pic("prague/3-2b")),
    v("pr3-3", "рубашка и брюки", "a shirt and trousers", "A white shirt and grey trousers on hangers.", "Listen to рубашка и брюки", pic("prague/3-3b")),
    v("pr3-4", "Слишком большая.", "Too big.", "Murzik is lost inside a huge jacket; only his ears show.", "Listen to Слишком большая", pic("prague/3-4")),
    v("pr3-5", "Мне идёт? — Тебе очень идёт!", "Does it suit me? — It really suits you!", "Tom turns in front of a mirror in a new jacket; Murzik gives two thumbs up.", "Listen to Мне идёт? — Тебе очень идёт", pic("prague/3-5b")),
    v("pr3-6", "джинсы, юбка, туфли", "jeans, a skirt, shoes", "Blue jeans, a red skirt and a pair of shoes on a shop shelf.", "Listen to джинсы, юбка, туфли", pic("prague/3-6b")),
    v("pr3-7", "Беру!", "I'll take it!", "Tom hands the jacket to the cashier with a happy face.", "Listen to Беру", pic("prague/3-7")),
  ],
  dialogue: {
    title: "A new jacket",
    note: "Куртка is a “she” word, so: большая куртка, она мне идёт. Вот эта — this one.",
    lines: [
      line("tom", "Здравствуйте! Можно примерить куртку?", "Hello! Can I try on a jacket?"),
      line("seller", "Конечно. Какой размер?", "Of course. What size?"),
      line("tom", "Не знаю… Ой, эта слишком большая.", "I don't know… Oh, this one is too big."),
      line("seller", "А вот эта?", "And this one?"),
      line("tom", "Это мой размер! Мурзик, мне идёт?", "This is my size! Murzik, does it suit me?"),
      line("murzik", "Тебе очень идёт!", "It really suits you!"),
      line("tom", "Беру!", "I'll take it!"),
    ],
    gist: choice("pr3-d1", "What was wrong with the first jacket?", [
      ["It was too big.", true],
      ["It was the wrong colour.", false],
      ["It was too expensive.", false],
    ]),
  },
  grammar: [
    {
      title: "Идёт and идут",
      paragraphs: [
        "Тебе идёт + one thing: Тебе идёт эта шапка. Тебе идут + many things: Тебе идут эти ботинки.",
        "Слишком means “too”: слишком большой, слишком маленький.",
      ],
      examples: [
        { ru: "Мне идёт этот свитер?", en: "Does this sweater suit me?" },
        { ru: "Тебе идут эти ботинки.", en: "These boots suit you." },
      ],
    },
  ],
  tasks: [
    listen("pr3-t1", "Listen. What's the problem?", "Этот свитер слишком маленький.", [
      ["The sweater is too small.", true],
      ["The sweater is too big.", false],
      ["The sweater is the wrong colour.", false],
    ]),
    choice("pr3-t2", "You love it and want to buy it. What do you say?", [
      ["Беру!", true],
      ["Слишком большая.", false],
      ["Какой размер?", false],
    ], { skill: "words" }),
    choice("pr3-t3", "How do you say “These boots suit you”?", [
      ["Тебе идут эти ботинки.", true],
      ["Тебе идёт эти ботинки.", false],
      ["Ты идёшь эти ботинки.", false],
    ], { skill: "grammar" }),
    spell("pr3-t4", "Build the word for “size”.", "размер"),
    speak("pr3-t5", "Мне идёт?", "Тебе очень идёт!", "It really suits you!", {
      help: "Your friend tries on a new hat. Say it suits them.",
    }),
    listen("pr3-t6", "Listen and choose the best reply.", "Какого цвета?", [
      ["Синего.", true],
      ["Слишком большая.", false],
      ["Беру!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "wardrobe",
    itemName: "Wardrobe",
    itemNameRu: "Шкаф",
    ru: "Ура! Шкаф для одежды!",
    en: "Yay! A wardrobe!",
    a11y: "A small painted wooden wardrobe with flowers on its doors. Inside hang Murzik's new blue hat and Tom's new jacket.",
    image: pic("prague/reward-3"),
    steps: ["So many new clothes!", "They need somewhere to put them.", "The old lady downstairs gives them a little painted wardrobe.", "Everything fits inside."],
    bridge: "That night it rains and rains. In the morning Murzik wakes up feeling strange…",
  },
};

export const prague4: Lesson = {
  id: "a1-prague-4",
  level: "A1",
  cityId: "prague",
  number: 4,
  title: "I Don't Feel Well",
  minutes: 6,
  goals: ["Ask how someone feels", "Say what hurts", "Wish someone a quick recovery"],
  vocabNote:
    "У меня болит… means “My … hurts”, literally “At me hurts…”: У меня болит голова — I have a headache.",
  vocab: [
    v("pr4-1", "Как ты себя чувствуешь?", "How are you feeling?", "Tom sits on the edge of Murzik's bed with a worried face.", "Listen to Как ты себя чувствуешь", pic("prague/4-1")),
    v("pr4-2", "Мне плохо. У меня температура.", "I feel bad. I have a temperature.", "Murzik lies in bed with red cheeks and a thermometer in his mouth.", "Listen to Мне плохо. У меня температура", pic("prague/4-2b")),
    v("pr4-3", "У меня болит голова. И горло.", "I have a headache. And a sore throat.", "Murzik holds his head with one paw and his throat with the other.", "Listen to У меня болит голова. И горло", pic("prague/4-3b")),
    v("pr4-4", "У меня болит живот.", "I have a stomach ache.", "Murzik holds his tummy with both paws and a sad face.", "Listen to У меня болит живот", pic("prague/4-4b")),
    v("pr4-5", "У меня болит зуб.", "I have a toothache.", "Murzik holds his cheek; one side of his face is a little swollen.", "Listen to У меня болит зуб", pic("prague/4-5b")),
    v("pr4-6", "рука, нога, спина", "arm, leg, back", "A simple friendly picture of Tom with arrows pointing to his arm, his leg and his back.", "Listen to рука, нога, спина", pic("prague/4-6b")),
    v("pr4-7", "Отдыхай! Выздоравливай!", "Rest! Get well soon!", "Tom tucks the blanket around Murzik and puts a cup of tea by the bed.", "Listen to Отдыхай! Выздоравливай", pic("prague/4-7b")),
  ],
  dialogue: {
    title: "A bad morning",
    note: "Врач — a doctor. Внизу — downstairs.",
    lines: [
      line("tom", "Мурзик, как ты себя чувствуешь?", "Murzik, how are you feeling?"),
      line("murzik", "Мне плохо…", "I feel bad…"),
      line("tom", "Что болит?", "What hurts?"),
      line("murzik", "У меня болит голова. И горло.", "I have a headache. And a sore throat."),
      line("tom", "Ой, у тебя температура! Отдыхай.", "Oh, you have a temperature! Rest."),
      line("tom", "Внизу живёт врач, Анна Петровна. Я её позову.", "A doctor lives downstairs, Anna Petrovna. I'll call her."),
    ],
    gist: choice("pr4-d1", "What hurts?", [
      ["His head and his throat.", true],
      ["His paw.", false],
      ["His stomach.", false],
    ]),
  },
  grammar: [
    {
      title: "У меня болит …",
      paragraphs: [
        "У меня болит + one thing: голова, горло, нога. For many things: У меня болят уши (my ears hurt).",
        "To ask a friend: Что у тебя болит? — What hurts?",
      ],
      examples: [
        { ru: "У меня болит нога.", en: "My leg hurts." },
        { ru: "Что у тебя болит?", en: "What hurts?" },
      ],
    },
  ],
  tasks: [
    listen("pr4-t1", "Listen. What hurts?", "У меня болит горло.", [
      ["Throat.", true],
      ["Head.", false],
      ["Leg.", false],
    ]),
    match("pr4-t2", "Match the Russian with the English.", [
      ["Мне плохо.", "I feel bad."],
      ["Отдыхай!", "Rest!"],
      ["Выздоравливай!", "Get well soon!"],
    ], { skill: "words" }),
    fill("pr4-t3", "Complete: “I have a headache.”", "У меня", "голова.", "болит", ["болит", "болят", "больно"], { skill: "grammar" }),
    missing("pr4-t4", "Which letter is missing? (head)", "гол", "ва", "о", ["о", "а", "ы"]),
    speak("pr4-t5", "Как ты себя чувствуешь?", "Мне плохо. У меня болит голова.", "I feel bad. I have a headache.", {
      help: "Imagine you are ill. Tell Tom how you feel and what hurts.",
    }),
    listen("pr4-t6", "Listen and choose the best reply.", "Мне идёт?", [
      ["Тебе очень идёт!", true],
      ["Мне плохо.", false],
      ["Это мой размер.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "hot-water-bottle",
    itemName: "Hot-water bottle",
    itemNameRu: "Грелка",
    ru: "Ура! Тёплая грелка!",
    en: "Yay! A warm hot-water bottle!",
    a11y: "Murzik hugs a soft hot-water bottle in a knitted cat-shaped cover, tucked up in bed.",
    image: pic("prague/reward-4"),
    steps: ["Tom fills a hot-water bottle.", "It has a knitted cover shaped like a cat.", "Murzik hugs it.", "It's warm, and he feels a little better."],
    bridge: "A knock at the door. It's Anna Petrovna, with her doctor's bag.",
  },
};

export const prague5: Lesson = {
  id: "a1-prague-5",
  level: "A1",
  cityId: "prague",
  number: 5,
  title: "At the Doctor's",
  minutes: 6,
  goals: ["Understand a doctor's questions", "Understand simple instructions", "Thank the doctor"],
  vocabNote:
    "Doctors speak politely, with -те: Откройте! Пейте! Лежите! You learned this -те rule in Rome.",
  vocab: [
    v("pr5-1", "Что у вас болит?", "What hurts? (polite)", "Anna Petrovna, a kind elderly doctor with glasses, sits by Murzik's bed.", "Listen to Что у вас болит", pic("prague/5-1")),
    v("pr5-2", "Откройте рот, пожалуйста.", "Open your mouth, please.", "Murzik opens his mouth wide while the doctor looks with a little light.", "Listen to Откройте рот, пожалуйста", pic("prague/5-2")),
    v("pr5-3", "Это простуда.", "It's a cold.", "The doctor smiles calmly and closes her bag.", "Listen to Это простуда", pic("prague/5-3")),
    v("pr5-4", "Пейте много чая.", "Drink lots of tea.", "A big teapot and a cup of tea with lemon on the bedside table.", "Listen to Пейте много чая", pic("prague/5-4")),
    v("pr5-5", "Лежите три дня.", "Stay in bed for three days.", "Murzik in bed next to a small calendar with three days circled.", "Listen to Лежите три дня", pic("prague/5-5")),
    v("pr5-6", "Вот рецепт на лекарство.", "Here is a prescription for medicine.", "The doctor hands Tom a small paper prescription and points at a medicine bottle.", "Listen to Вот рецепт на лекарство", pic("prague/5-6b")),
    v("pr5-7", "Мне нужно в больницу?", "Do I need to go to hospital?", "Murzik looks worried, with a small picture of a hospital building in a thought bubble.", "Listen to Мне нужно в больницу", pic("prague/5-7b")),
  ],
  dialogue: {
    title: "Dr Anna Petrovna",
    note: "С мёдом — with honey. Не волнуйтесь — don't worry (polite).",
    lines: [
      line("doctor", "Здравствуйте! Что у вас болит?", "Hello! What hurts?"),
      line("murzik", "Голова и горло.", "My head and my throat."),
      line("doctor", "Откройте рот, пожалуйста. Скажите «а-а-а».", "Open your mouth, please. Say “a-a-a”."),
      line("murzik", "А-а-а…", "A-a-a…"),
      line("doctor", "Не волнуйтесь, это простуда. Пейте много чая с мёдом. И лежите три дня.", "Don't worry, it's a cold. Drink lots of tea with honey. And stay in bed for three days."),
      line("doctor", "Вот рецепт на лекарство.", "Here is a prescription for medicine."),
      line("murzik", "Спасибо, доктор! Мне нужно в больницу?", "Thank you, doctor! Do I need to go to hospital?"),
      line("doctor", "Нет, не нужно. Лежите дома.", "No, you don't. Stay in bed at home."),
    ],
    gist: choice("pr5-d1", "What is wrong with Murzik?", [
      ["He has a cold.", true],
      ["He broke his paw.", false],
      ["Nothing at all.", false],
    ]),
  },
  grammar: [
    {
      title: "Polite instructions with -те",
      paragraphs: [
        "To a friend: Открой! Пей! Лежи! To a stranger or a patient: Откройте! Пейте! Лежите!",
        "Doctors, shop assistants and teachers usually speak to you this polite way.",
      ],
      examples: [
        { ru: "Пейте чай.", en: "Drink tea. (polite)" },
        { ru: "Открой окно!", en: "Open the window! (to a friend)" },
      ],
    },
  ],
  tasks: [
    listen("pr5-t1", "Listen. What does the doctor say?", "Лежите дома три дня.", [
      ["Stay at home for three days.", true],
      ["Drink tea three times a day.", false],
      ["Come back in three days.", false],
    ]),
    choice("pr5-t2", "What is простуда?", [
      ["a cold", true],
      ["a prescription", false],
      ["a temperature", false],
    ], { skill: "words" }),
    choice("pr5-t3", "A doctor talks to a patient. What does she say?", [
      ["Откройте рот, пожалуйста.", true],
      ["Открой рот, пожалуйста.", false],
    ], { skill: "grammar" }),
    spell("pr5-t4", "Build the word for “prescription”.", "рецепт"),
    speak("pr5-t5", "Что у вас болит?", "У меня болит горло.", "I have a sore throat.", {
      help: "You are at the doctor's. Say what hurts.",
    }),
    listen("pr5-t6", "Listen and choose the best reply.", "Как ты себя чувствуешь?", [
      ["Мне плохо.", true],
      ["Беру!", false],
      ["Это мой размер.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "honey",
    itemName: "Jar of honey",
    itemNameRu: "Мёд",
    ru: "Ура! Банка мёда!",
    en: "Yay! A jar of honey!",
    a11y: "A big jar of golden honey with a cloth lid tied with string, on the table next to a cup of tea.",
    image: pic("prague/reward-5"),
    steps: ["Anna Petrovna comes back in the evening.", "She brings a big jar of honey.", "“From my dacha,” she says.", "Tea with honey is the best medicine."],
    bridge: "Tom has to go to the pharmacy with the prescription.",
  },
};

export const prague6: Lesson = {
  id: "a1-prague-6",
  level: "A1",
  cityId: "prague",
  number: 6,
  title: "At the Pharmacy",
  minutes: 6,
  goals: ["Ask for something at a pharmacy", "Understand how often to take medicine", "Say “Bless you!”"],
  vocabNote:
    "Раз means “time(s)”: один раз — once. It changes like час: два раза, пять раз.",
  vocab: [
    v("pr6-1", "Где аптека?", "Where is the pharmacy?", "Tom stands on a rainy Prague street, looking around with a prescription in his hand.", "Listen to Где аптека", pic("prague/6-1")),
    v("pr6-2", "У вас есть что-нибудь от горла?", "Do you have anything for a sore throat?", "Tom asks a pharmacist at the counter, pointing at his throat.", "Listen to У вас есть что-нибудь от горла", pic("prague/6-2")),
    v("pr6-3", "таблетки", "tablets", "A small box of tablets on the pharmacy counter.", "Listen to таблетки", pic("prague/6-3")),
    v("pr6-4", "Сколько раз в день?", "How many times a day?", "Tom holds the box of tablets and looks at the pharmacist with a question.", "Listen to Сколько раз в день", pic("prague/6-4")),
    v("pr6-5", "Три раза в день.", "Three times a day.", "Three little suns: morning, midday and evening, each with one tablet.", "Listen to Три раза в день", pic("prague/6-5")),
    v("pr6-6", "после еды", "after meals", "An empty plate, then an arrow, then one tablet with a glass of water.", "Listen to после еды", pic("prague/6-6")),
    v("pr6-7", "Будьте здоровы!", "Bless you! / Stay healthy!", "Tom sneezes; the pharmacist smiles kindly.", "Listen to Будьте здоровы", pic("prague/6-7")),
  ],
  dialogue: {
    title: "The pharmacy",
    note: "Апчхи! is the sound of a sneeze. Для друга — for a friend.",
    lines: [
      line("pharmacist", "Здравствуйте! Что вам нужно?", "Hello! What do you need?"),
      line("tom", "Вот рецепт. И у вас есть что-нибудь от горла?", "Here's the prescription. And do you have anything for a sore throat?"),
      line("pharmacist", "Да. Вот таблетки.", "Yes. Here are some tablets."),
      line("tom", "Сколько раз в день?", "How many times a day?"),
      line("pharmacist", "Три раза в день, после еды.", "Three times a day, after meals."),
      line("tom", "Спасибо! Апчхи!", "Thank you! Atchoo!"),
      line("pharmacist", "Будьте здоровы!", "Bless you!"),
    ],
    gist: choice("pr6-d1", "How often should Murzik take the tablets?", [
      ["Three times a day.", true],
      ["Once a day.", false],
      ["Two times a day.", false],
    ]),
  },
  grammar: [
    {
      title: "Раз, раза, раз",
      paragraphs: [
        "It works like час: один раз (once), два, три, четыре раза, пять раз.",
        "В день means “a day”: три раза в день — three times a day.",
      ],
      examples: [
        { ru: "Один раз в день.", en: "Once a day." },
        { ru: "Два раза в день.", en: "Twice a day." },
      ],
    },
  ],
  tasks: [
    listen("pr6-t1", "Listen. How often?", "Два раза в день, после еды.", [
      ["Twice a day, after meals.", true],
      ["Three times a day, before meals.", false],
      ["Once a day, after meals.", false],
    ]),
    choice("pr6-t2", "Someone sneezes. What do you say?", [
      ["Будьте здоровы!", true],
      ["Выздоравливай!", false],
      ["После еды.", false],
    ], { skill: "words" }),
    fill("pr6-t3", "Complete: “three times a day”.", "три", "в день", "раза", ["раза", "раз", "разы"], { skill: "grammar" }),
    missing("pr6-t4", "Which letter is missing? (pharmacy)", "апт", "ка", "е", ["е", "и", "а"]),
    speak("pr6-t5", "Что вам нужно?", "У вас есть что-нибудь от горла?", "Do you have anything for a sore throat?", {
      help: "You are at a pharmacy with a sore throat. Ask for something.",
    }),
    listen("pr6-t6", "Listen and choose the best reply.", "Что у вас болит?", [
      ["У меня болит голова.", true],
      ["Три раза в день.", false],
      ["Вот рецепт.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "night-light",
    itemName: "Night light",
    itemNameRu: "Ночник",
    ru: "Ура! Ночник в виде луны!",
    en: "Yay! A moon night light!",
    a11y: "A small round night light shaped like a moon glows softly beside Murzik's bed in the dark room.",
    image: pic("prague/reward-6"),
    steps: ["Next to the pharmacy there is a tiny shop.", "Tom sees a night light shaped like the moon.", "He buys it for Murzik.", "Now the room glows softly at night."],
    bridge: "Three days later Murzik opens his eyes. He feels… much better!",
  },
};

export const prague7: Lesson = {
  id: "a1-prague-7",
  level: "A1",
  cityId: "prague",
  number: 7,
  title: "Much Better!",
  minutes: 7,
  goals: ["Say you feel better", "Thank someone for taking care of you", "Tell a friend to take care"],
  vocabNote:
    "Мне лучше means “I feel better” — it works like Мне холодно and Мне скучно.",
  vocab: [
    v("pr7-1", "Мне уже лучше!", "I'm feeling better already!", "Murzik sits up in bed and stretches with a big smile.", "Listen to Мне уже лучше", pic("prague/7-1")),
    v("pr7-2", "Как хорошо!", "How good!", "Tom claps his hands with relief.", "Listen to Как хорошо", pic("prague/7-2")),
    v("pr7-3", "Я снова на ногах!", "I'm back on my feet!", "Murzik jumps out of bed and stands proudly on two feet.", "Listen to Я снова на ногах", pic("prague/7-3")),
    v("pr7-4", "Спасибо за заботу!", "Thank you for looking after me!", "Murzik hugs Anna Petrovna at her door.", "Listen to Спасибо за заботу", pic("prague/7-4")),
    v("pr7-5", "Береги себя!", "Take care!", "Anna Petrovna wraps Murzik's scarf a little tighter around his neck.", "Listen to Береги себя", pic("prague/7-5")),
    v("pr7-6", "Не болей!", "Don't get ill again!", "Anna Petrovna wags a finger kindly at Murzik with a smile.", "Listen to Не болей", pic("prague/7-6")),
    v("pr7-7", "Ты как?", "How are you? (casual)", "Tom peeks around the door and asks with a grin.", "Listen to Ты как", pic("prague/7-7")),
  ],
  dialogue: {
    title: "On my feet again",
    note: "Подарок — a present. На память — as a keepsake (to remember).",
    lines: [
      line("tom", "Мурзик, ты как?", "Murzik, how are you?"),
      line("murzik", "Мне уже лучше! Я снова на ногах!", "I'm feeling better already! I'm back on my feet!"),
      line("tom", "Как хорошо!", "How good!"),
      line("murzik", "Анна Петровна, спасибо за заботу!", "Anna Petrovna, thank you for looking after me!"),
      line("doctor", "Пожалуйста. Береги себя! Не болей!", "You're welcome. Take care! Don't get ill again!"),
      line("doctor", "А это тебе — подарок на память.", "And this is for you — a present to remember me by."),
      line("murzik", "Ой! Спасибо большое!", "Oh! Thank you very much!"),
    ],
    gist: choice("pr7-d1", "How does Murzik feel now?", [
      ["Much better.", true],
      ["Still ill.", false],
      ["Very tired.", false],
    ]),
  },
  grammar: [
    {
      title: "Мне + word: how I feel",
      paragraphs: [
        "Russian often says how you feel with мне: Мне лучше (I feel better), Мне плохо (I feel bad), Мне холодно, Мне скучно.",
        "To ask a friend: Тебе лучше? — Do you feel better?",
      ],
      examples: [
        { ru: "Тебе лучше?", en: "Are you feeling better?" },
        { ru: "Мне уже хорошо.", en: "I'm fine now." },
      ],
    },
  ],
  tasks: [
    listen("pr7-t1", "Listen. What do they buy, and what colour is it?", "Мне холодно. Мне нужна шапка. Вот эта, синяя. Можно примерить? Ой, слишком большая.", [
      ["A blue hat.", true],
      ["A blue jacket.", false],
      ["A green hat.", false],
    ], { help: "This is your Prague listening test." }),
    choice("pr7-t2", "A friend is going out into the cold after being ill. What do you say?", [
      ["Береги себя!", true],
      ["Будьте здоровы!", false],
      ["Беру!", false],
    ], { skill: "words" }),
    fill("pr7-t3", "Complete: “Are you feeling better?”", "", "лучше?", "Тебе", ["Тебе", "Ты", "Твой"], { skill: "grammar" }),
    spell("pr7-t4", "Build the word for “doctor”.", "врач"),
    speak("pr7-t5", "Ты как?", "Мне уже лучше! Спасибо за заботу!", "I'm feeling better already! Thank you for looking after me!", {
      help: "You were ill, and now you are better. Answer your friend.",
    }),
    listen("pr7-t6", "Listen and choose the best reply.", "Сколько раз в день?", [
      ["Три раза в день.", true],
      ["Ряд пять.", false],
      ["Каждый день.", false],
    ], { skill: "review" }),
    listen("pr7-t7", "Listen and choose the best reply.", "Тебе тепло?", [
      ["Да, мне тепло.", true],
      ["Да, мне скучно.", false],
      ["Да, у меня температура.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "puppet",
    itemName: "Cat puppet",
    itemNameRu: "Марионетка",
    ru: "Ура! Кот-марионетка!",
    en: "Yay! A cat puppet!",
    a11y: "Murzik holds a wooden string puppet of a ginger cat in a little scarf — it looks just like him. He makes it dance.",
    image: pic("prague/reward-7"),
    steps: ["Anna Petrovna's present is a wooden puppet.", "Prague is famous for puppets.", "The puppet is a ginger cat in a little scarf.", "It looks just like Murzik!"],
    bridge: "Murzik is healthy again, and the suitcase is packed. Tom has news: an email from a magazine…",
  },
};
