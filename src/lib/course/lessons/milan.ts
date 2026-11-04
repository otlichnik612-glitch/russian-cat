import { pic } from "../art";
import { choice, fill, letter, line, listen, match, read, script, speak, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Milan · «Одежда» · A2 lessons 1–7.
 * Murzik and Tom rent a small attic room above an old tailor's workshop by the canals. Giulia (about 30,
 * studied Russian at university) works in a clothes shop; her grandfather Franco (about 80) was a tailor.
 * Tom has a job: photographing the shop's new catalogue, and he needs a suit. Sizes, fitting rooms,
 * colours and fabrics, returns, a photo shoot. In lesson 6 Franco remembers a ginger cat who drew
 * dress sketches for him thirty years ago and then went to an autumn festival in Munich.
 * Grammar: the genitive — нет чего, из чего, много / мало / несколько чего, без чего, чей (костюм Тома),
 * в начале / в конце чего.
 */

const p = (name: string) => pic(`milan/${name}`);

export const milan1: Lesson = {
  id: "a2-milan-1",
  level: "A2",
  cityId: "milan",
  number: 1,
  title: "A Size Bigger, Please",
  minutes: 8,
  goals: ["Ask for another size", "Say something is too big or too small", "Say what there isn't: нет + the “of” form"],
  vocabNote: "Clothes shopping! Он мне велик — it's too big for me; он мне мал — it's too small for me. Велик / мал change with the item: платье мне велико, брюки мне малы.",
  vocab: [
    v("mi1-1", "примерочная", "fitting room", "A small fitting room with a velvet curtain and a mirror.", "Listen to примерочная", p("1-1")),
    v("mi1-2", "на размер больше", "a size bigger", "Two jackets side by side, the second one bigger.", "Listen to на размер больше", p("1-2")),
    v("mi1-3", "на размер меньше", "a size smaller", "Two jackets side by side, the second one smaller.", "Listen to на размер меньше", p("1-3")),
    v("mi1-4", "Он мне велик.", "It's too big for me.", "Tom in a jacket with sleeves far past his hands.", "Listen to Он мне велик", p("1-4")),
    v("mi1-5", "Он мне мал.", "It's too small for me.", "Tom in a tiny jacket that won't button.", "Listen to Он мне мал", p("1-5")),
    v("mi1-6", "Нет моего размера.", "They don't have my size.", "An empty rail with only one tiny shirt left.", "Listen to Нет моего размера", p("1-6")),
    v("mi1-7", "Он мне как раз.", "It fits me just right.", "Tom in a jacket that fits perfectly, smiling at the mirror.", "Listen to Он мне как раз", p("1-7")),
    v("mi1-8", "пиджак", "jacket (suit jacket)", "A dark blue suit jacket on a hanger.", "Listen to пиджак", p("1-8")),
  ],
  letters: [
    letter("-ого → -ово", "In моего, г sounds like в: ma-ye-VO.", "Нет моего размера.", "They don't have my size."),
    letter("брюки", "Брюки is always plural: эти брюки, они стоят. Never “эта брюка”.", "эти брюки", "these trousers"),
  ],
  dialogue: {
    title: "In Giulia's shop",
    note: "Giulia is Italian; she studied Russian at university, so she's happy to speak Russian with Murzik and Tom.",
    lines: [
      line("giulia", "Добрый день! Вам помочь?", "Good afternoon! Can I help you?"),
      line("tom", "Да, мне нужен пиджак для работы. Можно примерить этот?", "Yes, I need a jacket for work. Can I try this one?"),
      line("giulia", "Конечно. Примерочная вон там.", "Of course. The fitting room is over there."),
      line("tom", "Ой, он мне мал! Есть на размер больше?", "Oh, it's too small! Do you have a size bigger?"),
      line("giulia", "Вот, пожалуйста.", "Here you are."),
      line("tom", "А теперь он мне велик… Моего размера нет?", "And now it's too big… Don't you have my size?"),
      line("giulia", "Сейчас посмотрю… Есть! Последний.", "Let me look… Yes! The last one."),
      line("tom", "Ура! Он мне как раз.", "Hooray! It fits me just right."),
      line("murzik", "Отлично! А сколько стоят эти брюки?", "Great! And how much are these trousers?"),
    ],
    gist: choice("mi1-d1", "Why does Tom try three jackets?", [
      ["The first is too small, the second too big.", true],
      ["He doesn't like the colours.", false],
      ["The shop is closing.", false],
    ]),
  },
  grammar: [
    {
      title: "Нет + the “of” form (genitive)",
      paragraphs: [
        "After нет (there isn't), Russian uses the “of” form, the genitive: размер → нет размера, рубашка → нет рубашки, пальто → нет пальто (it never changes).",
        "Masculine adds -а / -я, neuter changes -о / -е to -а / -я, feminine changes -а / -я to -ы / -и. Мой размер → нет моего размера.",
      ],
      examples: [
        { ru: "У вас нет синей рубашки?", en: "Don't you have a blue shirt?" },
        { ru: "Здесь нет примерочной.", en: "There's no fitting room here." },
      ],
    },
  ],
  tasks: [
    listen("mi1-t1", "Listen. What's wrong with the jacket?", "Ой, он мне мал! Есть на размер больше?", [
      ["It's too small.", true],
      ["It's too big.", false],
      ["It's too expensive.", false],
    ]),
    choice("mi1-t2", "“They don't have a blue shirt.” Which is right?", [
      ["Нет синей рубашки.", true],
      ["Нет синяя рубашка.", false],
      ["Нет синюю рубашку.", false],
    ], { skill: "grammar" }),
    fill("mi1-t3", "Choose the right form: “There's no fitting room here.”", "Здесь нет", ".", "примерочной", ["примерочной", "примерочная", "примерочную"], { skill: "grammar" }),
    read("mi1-t4", "Read the size label. Which size is Tom's (chest 100 cm)?", "РАЗМЕРЫ\nS — грудь 88–92\nM — грудь 96–100\nL — грудь 104–108", [
      ["M.", true],
      ["S.", false],
      ["L.", false],
    ]),
    script("mi1-t5", "You're in a shop. Talk to Giulia.", [
      { speaker: "Giulia", text: "Вам помочь?" },
      { speaker: "You", answer: "Да, можно примерить этот пиджак?", options: ["Да, можно примерить этот пиджак?", "Снято!", "Пара носков."] },
      { speaker: "Giulia", text: "Конечно. Ну как, подходит?" },
      { speaker: "You", answer: "Он мне велик. Есть на размер меньше?", options: ["Он мне велик. Есть на размер меньше?", "Он мне велик. Есть на размер больше?", "Сколько стоят эти брюки?"] },
    ], { skill: "speaking" }),
    match("mi1-t6", "Match the Russian with the English.", [
      ["примерочная", "fitting room"],
      ["пиджак", "jacket"],
      ["Он мне велик.", "It's too big."],
      ["Он мне мал.", "It's too small."],
    ], { skill: "words" }),
    speak("mi1-t7", "Как вам пиджак?", "Он мне мал. Есть на размер больше?", "It's too small for me. Do you have a size bigger?", {
      help: "The jacket is too small. Ask for another size out loud.",
    }),
  ],
  reward: {
    itemId: "hangers",
    itemName: "Wooden coat rack",
    itemNameRu: "Вешалка",
    ru: "Ура! Вешалка для одежды!",
    en: "Yay! A coat rack!",
    a11y: "A wooden coat rack with three hooks and a few hangers stands in the corner of a small attic room with a round window.",
    image: p("reward-1"),
    steps: ["Their attic room is above an old tailor's workshop, by the canals.", "There's nowhere to put clothes.", "Giulia brings an old wooden coat rack from the shop.", "Tom's new jacket hangs on it at once."],
    bridge: "The jacket is perfect. Now Tom needs a shirt and a tie — but what colour? And what fabric?",
  },
};

export const milan2: Lesson = {
  id: "a2-milan-2",
  level: "A2",
  cityId: "milan",
  number: 2,
  title: "Colours and Fabrics",
  minutes: 8,
  goals: ["Describe colours and patterns", "Say what clothes are made of: из хлопка", "Say a colour suits someone"],
  vocabNote: "Из + the “of” form tells you what something is made of: из хлопка — (made) of cotton.",
  vocab: [
    v("mi2-1", "из хлопка", "(made) of cotton", "A white cotton shirt with a cotton flower beside it.", "Listen to из хлопка", p("2-1")),
    v("mi2-2", "из шерсти", "(made) of wool", "A soft grey jumper and a ball of wool.", "Listen to из шерсти", p("2-2")),
    v("mi2-3", "в полоску", "striped", "A shirt with thin blue stripes.", "Listen to в полоску", p("2-3")),
    v("mi2-4", "в клетку", "checked", "A tie with a small red and green check.", "Listen to в клетку", p("2-4")),
    v("mi2-5", "однотонный", "plain, one colour", "A plain dark blue tie.", "Listen to однотонный", p("2-5")),
    v("mi2-6", "галстук", "tie", "A neat tie on a wooden hanger.", "Listen to галстук", p("2-6")),
    v("mi2-7", "светлый / тёмный", "light / dark", "Two shirts: light blue and dark blue.", "Listen to светлый, тёмный", p("2-7")),
    v("mi2-8", "Этот цвет вам идёт.", "This colour suits you.", "Giulia nods approvingly at Tom in a light blue shirt.", "Listen to Этот цвет вам идёт", p("2-8")),
  ],
  letters: [
    letter("ше", "ш is always hard, so е after it sounds like э: SHER-sti, not shyer-sti.", "из шерсти", "of wool"),
    letter("галстук", "One stress, on the first syllable: GAL-stuk.", "галстук", "tie"),
  ],
  dialogue: {
    title: "Shirt and tie",
    note: "Вам идёт — it suits you (polite); тебе идёт — to a friend.",
    lines: [
      line("giulia", "Какую рубашку вы хотите? Светлую или тёмную?", "Which shirt would you like? A light one or a dark one?"),
      line("tom", "Светлую. Из хлопка, пожалуйста.", "A light one. Cotton, please."),
      line("giulia", "Вот голубая. А вот в полоску.", "Here's a light blue one. And here's a striped one."),
      line("tom", "Голубая лучше. А галстук?", "The light blue one is better. And a tie?"),
      line("murzik", "Галстук в клетку! Как у шотландцев!", "A checked tie! Like the Scots!"),
      line("giulia", "Нет, для фото лучше однотонный. Тёмно-синий.", "No, for photos a plain one is better. Dark blue."),
      line("murzik", "Том, этот цвет тебе идёт!", "Tom, this colour suits you!"),
    ],
    gist: choice("mi2-d1", "Which tie does Giulia recommend?", [
      ["A plain dark blue one.", true],
      ["A checked one.", false],
      ["A striped one.", false],
    ]),
  },
  grammar: [
    {
      title: "Из + the “of” form: what it's made of",
      paragraphs: [
        "Из + genitive tells you the material: хлопок → из хлопка, шерсть → из шерсти, шёлк → из шёлка.",
        "Patterns don't change: в полоску (striped), в клетку (checked), в горошек (polka dot).",
      ],
      examples: [
        { ru: "Это платье из шёлка.", en: "This dress is made of silk." },
        { ru: "Мне нужен свитер из шерсти.", en: "I need a woollen jumper." },
      ],
    },
  ],
  tasks: [
    listen("mi2-t1", "Listen. What kind of shirt does Tom want?", "Светлую. Из хлопка, пожалуйста.", [
      ["A light cotton shirt.", true],
      ["A dark woollen shirt.", false],
      ["A striped silk shirt.", false],
    ]),
    choice("mi2-t2", "“A jumper made of wool.” Which is right?", [
      ["свитер из шерсти", true],
      ["свитер из шерсть", false],
      ["свитер в шерсти", false],
    ], { skill: "grammar" }),
    read("mi2-t3", "Read the label. How should you wash this shirt?", "РУБАШКА\n100% хлопок\nСтирать при 30°\nНе гладить", [
      ["At 30 degrees, and don't iron it.", true],
      ["At 90 degrees.", false],
      ["Only dry-clean.", false],
    ]),
    match("mi2-t4", "Match the Russian with the English.", [
      ["в полоску", "striped"],
      ["в клетку", "checked"],
      ["однотонный", "plain"],
      ["галстук", "tie"],
    ], { skill: "words" }),
    choice("mi2-t5", "Help Tom! He says to Giulia: «Этот цвет тебе идёт». Is that OK?", [
      ["Better: Этот цвет вам идёт — she's someone he calls вы.", true],
      ["Yes, тебе is always polite.", false],
      ["Better: Этот цвет вы идёте.", false],
    ], { skill: "grammar" }),
    tf("mi2-t6", "Из хлопка means “made of cotton”.", true, "True or false?", { skill: "words" }),
    speak("mi2-t7", "Какую рубашку вы хотите?", "Светлую, из хлопка. Можно в полоску?", "A light one, cotton. Could I have a striped one?", {
      help: "Describe the shirt you want out loud.",
    }),
  ],
  reward: {
    itemId: "longmirror",
    itemName: "Tall mirror",
    itemNameRu: "Зеркало",
    ru: "Какое большое зеркало!",
    en: "What a big mirror!",
    a11y: "A tall old mirror in a carved wooden frame leans against the wall of the attic room.",
    image: p("reward-2"),
    steps: ["Giulia's grandfather Franco has an old tall mirror.", "“Every tailor needs a good mirror,” he says.", "Tom tries his shirt and tie in front of it.", "Murzik practises serious faces for the photos."],
    bridge: "Tom's shoot is on Friday. But first — shopping for the trip. Murzik's suitcase is almost full.",
  },
};

export const milan3: Lesson = {
  id: "a2-milan-3",
  level: "A2",
  cityId: "milan",
  number: 3,
  title: "So Many Things!",
  minutes: 8,
  goals: ["Talk about quantities: много, мало, несколько", "Ask how many pairs", "Talk about a sale and discounts"],
  vocabNote: "After много, мало, несколько and сколько Russian uses the “of” form. For plurals it's the genitive plural: много вещей.",
  vocab: [
    v("mi3-1", "пара носков", "a pair of socks", "A pair of striped socks with little cats on them.", "Listen to пара носков", p("3-1")),
    v("mi3-2", "много вещей", "lots of things", "A huge pile of clothes on the bed.", "Listen to много вещей", p("3-2")),
    v("mi3-3", "мало места", "little space, not much room", "A suitcase that won't close.", "Listen to мало места", p("3-3")),
    v("mi3-4", "несколько", "several, a few", "Three or four T-shirts folded in a neat pile.", "Listen to несколько", p("3-4")),
    v("mi3-5", "Сколько пар?", "How many pairs?", "Tom counts shoes lined up on the floor.", "Listen to Сколько пар", p("3-5")),
    v("mi3-6", "распродажа", "sale", "A shop window with big red signs and balloons.", "Listen to распродажа", p("3-6")),
    v("mi3-7", "скидка", "discount", "A price tag crossed out with a lower price below.", "Listen to скидка", p("3-7")),
    v("mi3-8", "Чемодан не закрывается!", "The suitcase won't close!", "Murzik sits on his suitcase, trying to close it.", "Listen to Чемодан не закрывается", p("3-8")),
  ],
  letters: [
    letter("-тся", "-тся sounds like tsa: za-kry-VA-ye-tsa.", "не закрывается", "won't close"),
    letter("сколько", "SKOL'-ka: soft л, unstressed о at the end sounds like а.", "Сколько пар?", "How many pairs?"),
  ],
  dialogue: {
    title: "The sale",
    note: "Ну и что? — So what? Murzik doesn't care that he has many socks.",
    lines: [
      line("tom", "Мурзик, смотри — распродажа! Скидка пятьдесят процентов!", "Murzik, look — a sale! Fifty per cent off!"),
      line("murzik", "Ой, какие носки! Я возьму несколько пар.", "Oh, what socks! I'll take a few pairs."),
      line("tom", "Сколько пар? У тебя уже много носков.", "How many pairs? You already have lots of socks."),
      line("murzik", "Ну и что? Пять пар носков с котиками!", "So what? Five pairs of socks with kittens!"),
      line("tom", "А в чемодане мало места.", "But there's not much room in the suitcase."),
      line("murzik", "Ничего. Ой… Чемодан не закрывается!", "Never mind. Oh… The suitcase won't close!"),
    ],
    gist: choice("mi3-d1", "How many pairs of socks does Murzik buy?", [
      ["Five.", true],
      ["Fifty.", false],
      ["One.", false],
    ]),
  },
  grammar: [
    {
      title: "Много, мало, несколько + the “of” form",
      paragraphs: [
        "With things you can count, use the genitive plural: носки → много носков, вещи → много вещей, пары → несколько пар.",
        "With things you can't count, use the genitive singular: место → мало места, время → мало времени.",
      ],
      examples: [
        { ru: "У меня мало времени.", en: "I don't have much time." },
        { ru: "В магазине много людей.", en: "There are lots of people in the shop." },
      ],
    },
  ],
  tasks: [
    listen("mi3-t1", "Listen. What's the discount?", "Смотри — распродажа! Скидка пятьдесят процентов!", [
      ["Fifty per cent.", true],
      ["Fifteen per cent.", false],
      ["Five per cent.", false],
    ]),
    choice("mi3-t2", "“Lots of socks.” Which is right?", [
      ["много носков", true],
      ["много носки", false],
      ["много носка", false],
    ], { skill: "grammar" }),
    fill("mi3-t3", "Choose the right form: “I don't have much time.”", "У меня мало", ".", "времени", ["времени", "время", "временем"], { skill: "grammar" }),
    read("mi3-t4", "Read the sign. How much are the socks now?", "РАСПРОДАЖА!\nНоски: было 10 евро, сейчас 5 евро\nРубашки: скидка 30%", [
      ["Five euros.", true],
      ["Ten euros.", false],
      ["Thirty euros.", false],
    ]),
    match("mi3-t5", "Match the Russian with the English.", [
      ["распродажа", "sale"],
      ["скидка", "discount"],
      ["несколько", "several"],
      ["мало места", "not much room"],
    ], { skill: "words" }),
    choice("mi3-t6", "Help Tom! He says: «В чемодане мало место». What should he say?", [
      ["В чемодане мало места.", true],
      ["В чемодане мало местом.", false],
      ["В чемодане мало месту.", false],
    ], { skill: "grammar" }),
    speak("mi3-t7", "Сколько у тебя вещей?", "У меня много вещей, но мало места в чемодане!", "I have lots of things, but not much room in my suitcase!", {
      help: "Talk about your suitcase out loud: много, мало.",
    }),
  ],
  reward: {
    itemId: "catsocks",
    itemName: "Socks with kittens",
    itemNameRu: "Носки с котиками",
    ru: "Пять пар носков с котиками!",
    en: "Five pairs of kitten socks!",
    a11y: "Five pairs of colourful socks with little cats on them are laid out in a row on the bed.",
    image: p("reward-3"),
    steps: ["Murzik lays out his new socks on the bed.", "Red, yellow, green, blue and orange.", "Each pair has little cats.", "Tom laughs: “You'll need a second suitcase!”"],
    bridge: "In the evening Tom tries the shirt again — and finds a small hole. He'll have to take it back.",
  },
};

export const milan4: Lesson = {
  id: "a2-milan-4",
  level: "A2",
  cityId: "milan",
  number: 4,
  title: "Taking It Back",
  minutes: 8,
  goals: ["Return or exchange something", "Explain what's wrong", "Use без + the “of” form: без чека"],
  vocabNote: "Вернуть — to return, give back. Обменять — to exchange. Чек — receipt.",
  vocab: [
    v("mi4-1", "вернуть", "to return, to take back", "Tom puts a shirt on the shop counter.", "Listen to вернуть", p("4-1")),
    v("mi4-2", "обменять", "to exchange", "Two shirts with arrows between them.", "Listen to обменять", p("4-2")),
    v("mi4-3", "чек", "receipt", "A long paper receipt in Tom's hand.", "Listen to чек", p("4-3")),
    v("mi4-4", "без чека", "without a receipt", "An empty hand and a question mark.", "Listen to без чека", p("4-4")),
    v("mi4-5", "Здесь дырка.", "There's a hole here.", "Tom points at a small hole in the sleeve.", "Listen to Здесь дырка", p("4-5")),
    v("mi4-6", "Не подошло.", "It didn't fit. It wasn't right.", "Tom shakes his head at a shirt that's too long.", "Listen to Не подошло", p("4-6")),
    v("mi4-7", "Можно вернуть деньги?", "Can I get my money back?", "Coins and notes coming back from the till.", "Listen to Можно вернуть деньги", p("4-7")),
    v("mi4-8", "в течение двух недель", "within two weeks", "A calendar with fourteen days marked.", "Listen to в течение двух недель", p("4-8")),
  ],
  letters: [
    letter("подошло", "pa-da-SHLO: unstressed о twice sounds like а.", "Не подошло.", "It didn't fit."),
  ],
  dialogue: {
    title: "The hole",
    note: "Покажите — show me (polite). Конечно, обменяем — of course, we'll exchange it.",
    lines: [
      line("tom", "Здравствуйте! Я хочу вернуть рубашку. Здесь дырка.", "Hello! I'd like to return this shirt. There's a hole here."),
      line("giulia", "Ой, покажите… Да, правда. У вас есть чек?", "Oh, show me… Yes, that's true. Do you have the receipt?"),
      line("tom", "Чек… Нет. Можно без чека?", "The receipt… No. Can I do it without a receipt?"),
      line("giulia", "Без чека вернуть деньги нельзя. Но можно обменять.", "Without a receipt we can't give you your money back. But you can exchange it."),
      line("murzik", "Том, вот чек! Он был в кармане пиджака.", "Tom, here's the receipt! It was in the jacket pocket."),
      line("giulia", "Отлично! Можно вернуть в течение двух недель. Вернуть или обменять?", "Great! You can return it within two weeks. Refund or exchange?"),
      line("tom", "Обменять, пожалуйста. Рубашка мне очень нравится.", "Exchange, please. I really like the shirt."),
    ],
    gist: choice("mi4-d1", "What does Tom decide in the end?", [
      ["To exchange the shirt.", true],
      ["To get his money back.", false],
      ["To keep the shirt with the hole.", false],
    ]),
  },
  grammar: [
    {
      title: "Без + the “of” form",
      paragraphs: [
        "Без (without) is always followed by the genitive: чек → без чека, сахар → без сахара, дырка → без дырки.",
        "Other words that take the genitive: в течение (within), у (at, by — у меня), для (for), из (from, out of), до (until).",
      ],
      examples: [
        { ru: "Без чека нельзя вернуть деньги.", en: "You can't get a refund without a receipt." },
        { ru: "Я купил подарок для сестры.", en: "I bought a present for my sister." },
      ],
    },
  ],
  tasks: [
    listen("mi4-t1", "Listen. What's wrong with the shirt?", "Я хочу вернуть рубашку. Здесь дырка.", [
      ["There's a hole in it.", true],
      ["It's too small.", false],
      ["It's the wrong colour.", false],
    ]),
    choice("mi4-t2", "“Without a receipt.” Which is right?", [
      ["без чека", true],
      ["без чек", false],
      ["без чеком", false],
    ], { skill: "grammar" }),
    read("mi4-t3", "Read the shop rules. Can Tom return the shirt after three weeks?", "ПРАВИЛА МАГАЗИНА\nВернуть или обменять — в течение двух недель.\nТолько с чеком.", [
      ["No: only within two weeks.", true],
      ["Yes, any time.", false],
      ["Yes, but only without a receipt.", false],
    ]),
    script("mi4-t4", "Return a shirt in a shop.", [
      { speaker: "You", answer: "Здравствуйте! Я хочу вернуть рубашку.", options: ["Здравствуйте! Я хочу вернуть рубашку.", "Он мне как раз.", "Какая скидка!"] },
      { speaker: "Giulia", text: "Что случилось?" },
      { speaker: "You", answer: "Здесь дырка. Вот чек.", options: ["Здесь дырка. Вот чек.", "Без чека.", "Пара носков."] },
      { speaker: "Giulia", text: "Вернуть деньги или обменять?" },
      { speaker: "You", answer: "Обменять, пожалуйста.", options: ["Обменять, пожалуйста.", "Не подошло, пожалуйста.", "В течение двух недель."] },
    ], { skill: "speaking" }),
    match("mi4-t5", "Match the Russian with the English.", [
      ["вернуть", "to return"],
      ["обменять", "to exchange"],
      ["чек", "receipt"],
      ["Не подошло.", "It didn't fit."],
    ], { skill: "words" }),
    fill("mi4-t6", "Choose the right form: “This is a present for my sister.”", "Это подарок для", ".", "сестры", ["сестры", "сестра", "сестру"], { skill: "grammar" }),
    speak("mi4-t7", "Чем могу помочь?", "Я хочу обменять эти брюки. Они мне не подошли. Вот чек.", "I'd like to exchange these trousers. They didn't fit me. Here's the receipt.", {
      help: "You're in a shop. Explain out loud what you want and why.",
    }),
  ],
  reward: {
    itemId: "sewingbox",
    itemName: "Sewing box",
    itemNameRu: "Шкатулка с нитками",
    ru: "Шкатулка с нитками и иголками!",
    en: "A box of threads and needles!",
    a11y: "An old wooden sewing box with many little drawers, colourful reels of thread and a pincushion shaped like a tomato.",
    image: p("reward-4"),
    steps: ["Grandpa Franco hears about the hole and laughs.", "“A hole? I can mend that in a minute!”", "He gives Murzik his old sewing box.", "“Every traveller should know how to sew on a button.”"],
    bridge: "Friday! The shoot is in front of the cathedral. Tom is the photographer — and Murzik suddenly becomes a model.",
  },
};

export const milan5: Lesson = {
  id: "a2-milan-5",
  level: "A2",
  cityId: "milan",
  number: 5,
  title: "The Photo Shoot",
  minutes: 8,
  goals: ["Follow simple instructions for a photo", "Say whose something is: костюм Тома", "Use у кого: у Джулии"],
  vocabNote: "Чей? — whose? In Russian the owner comes after the thing, in the “of” form: костюм Тома — Tom's suit.",
  vocab: [
    v("mi5-1", "фотосессия", "photo shoot", "Tom with a big camera, Giulia with a reflector, Murzik posing in the square.", "Listen to фотосессия", p("5-1")),
    v("mi5-2", "Стой прямо!", "Stand up straight!", "Murzik straightens his back, chin up.", "Listen to Стой прямо", p("5-2")),
    v("mi5-3", "Повернись!", "Turn around!", "Murzik turns to show his profile.", "Listen to Повернись", p("5-3")),
    v("mi5-4", "Не моргай!", "Don't blink!", "Murzik with very wide-open eyes.", "Listen to Не моргай", p("5-4")),
    v("mi5-5", "на фоне собора", "with the cathedral in the background", "Murzik in front of a huge white cathedral with spires.", "Listen to на фоне собора", p("5-5")),
    v("mi5-6", "шарф Мурзика", "Murzik's scarf", "Close-up of Murzik's long scarf fluttering.", "Listen to шарф Мурзика", p("5-6")),
    v("mi5-7", "У Джулии новое платье.", "Giulia has a new dress.", "Giulia twirls in a new summer dress.", "Listen to У Джулии новое платье", p("5-7")),
    v("mi5-8", "Снято!", "That's a wrap! Got it!", "Tom lowers the camera and gives a thumbs up.", "Listen to Снято", p("5-8")),
  ],
  letters: [
    letter("Повернись!", "The stress is on the last syllable: pa-vir-NEES'. The е sounds like и.", "Повернись!", "Turn around!"),
  ],
  dialogue: {
    title: "In front of the cathedral",
    note: "Tom photographs Giulia's shop catalogue. The model was late, so Murzik takes her place.",
    lines: [
      line("tom", "Где модель? Фотосессия через пять минут!", "Where's the model? The shoot is in five minutes!"),
      line("giulia", "Модель опаздывает… Мурзик, может, ты?", "The model is late… Murzik, how about you?"),
      line("murzik", "Я? Ну… давайте!", "Me? Well… let's do it!"),
      line("tom", "Стой прямо! Повернись! Не моргай!", "Stand up straight! Turn around! Don't blink!"),
      line("giulia", "Шарф Мурзика — просто супер. На фоне собора — красиво!", "Murzik's scarf is just super. With the cathedral behind — beautiful!"),
      line("murzik", "А у Джулии новое платье. Джулия, иди к нам!", "And Giulia has a new dress. Giulia, come and join us!"),
      line("tom", "Отлично, улыбаемся… Снято!", "Great, smile… Got it!"),
    ],
    gist: choice("mi5-d1", "Why does Murzik become the model?", [
      ["The real model is late.", true],
      ["Giulia doesn't want to be in the photos.", false],
      ["Tom forgot his camera.", false],
    ]),
  },
  grammar: [
    {
      title: "Whose: костюм Тома, у Джулии",
      paragraphs: [
        "To say whose, put the owner after the thing, in the “of” form: шарф Мурзика (Murzik's scarf), платье Джулии (Giulia's dress), магазин мамы (Mum's shop).",
        "To say someone has something, use у + the “of” form: у Джулии новое платье, у Тома есть камера.",
      ],
      examples: [
        { ru: "Это камера Тома.", en: "This is Tom's camera." },
        { ru: "У моей сестры два кота.", en: "My sister has two cats." },
      ],
    },
  ],
  tasks: [
    listen("mi5-t1", "Listen. What does Tom tell Murzik?", "Стой прямо! Повернись! Не моргай!", [
      ["Stand straight, turn around, don't blink.", true],
      ["Sit down and smile.", false],
      ["Go home, it's late.", false],
    ]),
    choice("mi5-t2", "“This is Tom's camera.” Which is right?", [
      ["Это камера Тома.", true],
      ["Это Том камера.", false],
      ["Это камера Том.", false],
    ], { skill: "grammar" }),
    fill("mi5-t3", "Choose the right form: “Giulia has a new dress.”", "У", "новое платье.", "Джулии", ["Джулии", "Джулия", "Джулию"], { skill: "grammar" }),
    read("mi5-t4", "Read Tom's shoot plan. What's at 11:00?", "ФОТОСЕССИЯ\n10:00 — пиджак, на фоне собора\n11:00 — платье, у канала\n12:00 — обед", [
      ["The dress, by the canal.", true],
      ["The jacket, at the cathedral.", false],
      ["Lunch.", false],
    ]),
    match("mi5-t5", "Match the Russian with the English.", [
      ["Стой прямо!", "Stand up straight!"],
      ["Повернись!", "Turn around!"],
      ["Не моргай!", "Don't blink!"],
      ["Снято!", "Got it!"],
    ], { skill: "words" }),
    tf("mi5-t6", "Шарф Мурзика means “Murzik's scarf”.", true, "True or false?", { skill: "grammar" }),
    speak("mi5-t7", "Чей это телефон?", "Это телефон Тома. А у меня новый телефон.", "It's Tom's phone. And I have a new phone.", {
      help: "Say out loud whose the phone is, and what you have.",
    }),
  ],
  reward: {
    itemId: "pouf",
    itemName: "Velvet pouf",
    itemNameRu: "Бархатный пуф",
    ru: "Мягкий пуф! Как у моделей!",
    en: "A soft pouf! Like the models have!",
    a11y: "A round dark-green velvet pouf stands in front of the tall mirror in the attic room.",
    image: p("reward-5"),
    steps: ["After the shoot Giulia gives Murzik a velvet pouf from the studio.", "“For our new model,” she laughs.", "Murzik sits on it in front of the mirror.", "He looks very serious — like in the photos."],
    bridge: "Grandpa Franco sees the photos. He looks at Murzik for a long time. “Ginger fur… I once knew a ginger cat who drew dresses.”",
  },
};

export const milan6: Lesson = {
  id: "a2-milan-6",
  level: "A2",
  cityId: "milan",
  number: 6,
  title: "The Old Tailor",
  minutes: 8,
  goals: ["Talk about a craft: шить, сшить", "Say when: в начале, в середине, в конце + month", "Understand a memory from long ago"],
  vocabNote: "Шить — to sew. Сшить — to sew (and finish): сшить платье — to make a dress.",
  vocab: [
    v("mi6-1", "портной", "tailor", "Old Franco with a measuring tape round his neck.", "Listen to портной", p("6-1")),
    v("mi6-2", "ателье", "tailor's workshop", "A small workshop full of fabric rolls and an old sewing machine.", "Listen to ателье", p("6-2")),
    v("mi6-3", "шить", "to sew", "A needle with red thread going through fabric.", "Listen to шить", p("6-3")),
    v("mi6-4", "сшить платье", "to make a dress", "A finished summer dress on a tailor's dummy.", "Listen to сшить платье", p("6-4")),
    v("mi6-5", "эскиз", "sketch, design", "A pencil sketch of a long dress with flowers.", "Listen to эскиз", p("6-5")),
    v("mi6-6", "в середине сентября", "in the middle of September", "A calendar page: September, the middle days circled.", "Listen to в середине сентября", p("6-6")),
    v("mi6-7", "Я сразу её узнал.", "I recognised her at once.", "Franco's eyes light up as he looks at Tom's photos of Murzik.", "Listen to Я сразу её узнал", p("6-7")),
    v("mi6-8", "осенний праздник", "autumn festival", "A festival with tents, music and colourful lights.", "Listen to осенний праздник", p("6-8")),
  ],
  letters: [
    letter("ателье", "A French word: a-te-LYE. The т is hard here, not soft.", "ателье", "workshop"),
    letter("сш → ш", "In сшить the с merges with ш: a long ш-sound, SHSHIT'.", "сшить", "to sew (and finish)"),
  ],
  dialogue: {
    title: "Franco remembers",
    note: "Лучшими — the best (after были). Узнал — recognised (узнать).",
    lines: [
      line("franco", "Тридцать лет назад у меня было ателье. Я шил платья.", "Thirty years ago I had a workshop. I made dresses."),
      line("murzik", "А кто рисовал эскизы?", "And who drew the designs?"),
      line("franco", "Одна рыжая кошка. Её эскизы были лучшими в Милане!", "A ginger cat. Her sketches were the best in Milan!"),
      line("murzik", "Её звали Ася?", "Was her name Asya?"),
      line("franco", "Да! Ася! Я сразу её узнал — у тебя её глаза.", "Yes! Asya! I recognised her at once — you have her eyes."),
      line("giulia", "Дедушка, ты сшил платье по её эскизу?", "Grandpa, did you make a dress from her sketch?"),
      line("franco", "Сшил. А в середине сентября она уехала. На осенний праздник в Мюнхен.", "I did. And in the middle of September she left. For the autumn festival in Munich."),
    ],
    gist: choice("mi6-d1", "What did Asya do in Milan?", [
      ["She drew dress designs for Franco.", true],
      ["She sold clothes in Giulia's shop.", false],
      ["She was a model.", false],
    ]),
  },
  grammar: [
    {
      title: "В начале, в конце, в середине + the “of” form",
      paragraphs: [
        "Начало (beginning), конец (end) and середина (middle) take the genitive: в начале октября, в конце лета, в середине недели.",
        "Months in the genitive: январь → января, май → мая, сентябрь → сентября.",
      ],
      examples: [
        { ru: "Мы приедем в конце мая.", en: "We'll come at the end of May." },
        { ru: "В середине недели я работаю.", en: "In the middle of the week I work." },
      ],
    },
  ],
  tasks: [
    listen("mi6-t1", "Listen. When did Asya leave Milan?", "А в середине сентября она уехала.", [
      ["In the middle of September.", true],
      ["At the end of October.", false],
      ["In the middle of the summer.", false],
    ]),
    choice("mi6-t2", "Detective! Where did Asya go next?", [
      ["To an autumn festival in Munich.", true],
      ["Back to Barcelona.", false],
      ["To Lyon.", false],
    ], { skill: "listening" }),
    fill("mi6-t3", "Choose the right form: “at the end of the summer”", "в конце", "", "лета", ["лета", "лето", "летом"], { skill: "grammar" }),
    read("mi6-t4", "In Franco's old notebook Murzik finds a note. Who wrote it?", "Франко, спасибо за платье!\nОно лучше моего эскиза.\nЕду в Мюнхен. А.", [
      ["Asya.", true],
      ["Giulia.", false],
      ["Franco.", false],
    ]),
    match("mi6-t5", "Match the Russian with the English.", [
      ["портной", "tailor"],
      ["ателье", "workshop"],
      ["эскиз", "sketch, design"],
      ["шить", "to sew"],
    ], { skill: "words" }),
    tf("mi6-t6", "Franco recognised Asya's eyes in Murzik's photos.", true, "True or false?", { skill: "listening" }),
    speak("mi6-t7", "Когда у тебя отпуск?", "В конце июля. А в начале августа я поеду к морю.", "At the end of July. And at the beginning of August I'll go to the sea.", {
      help: "Say when your holiday is: в начале, в конце, в середине.",
    }),
  ],
  reward: {
    itemId: "dummy",
    itemName: "Tailor's dummy",
    itemNameRu: "Манекен",
    ru: "Манекен! Как в настоящем ателье!",
    en: "A tailor's dummy! Like in a real workshop!",
    a11y: "An old tailor's dummy stands by the round window; Murzik's long scarf is draped over it.",
    image: p("reward-6"),
    steps: ["Franco carries an old tailor's dummy up to the attic.", "“Asya always drew her sketches next to this one.”", "Murzik puts his scarf on it.", "Now the room looks like a real workshop."],
    bridge: "Tomorrow they leave for Munich. Giulia wants to say goodbye properly — with coffee.",
  },
};

export const milan7: Lesson = {
  id: "a2-milan-7",
  level: "A2",
  cityId: "milan",
  number: 7,
  title: "Milan Exam",
  minutes: 9,
  goals: ["Understand a longer story", "Order coffee the Italian way", "Review everything from Milan"],
  vocabNote: "Lesson 7 is the city exam: a longer listening story and a review of everything from Milan.",
  vocab: [
    v("mi7-1", "кофеварка", "coffee maker", "A small metal stovetop coffee maker on the stove.", "Listen to кофеварка", p("7-1")),
    v("mi7-2", "чашка эспрессо", "a cup of espresso", "A tiny white cup of strong coffee.", "Listen to чашка эспрессо", p("7-2")),
    v("mi7-3", "крепкий", "strong", "Murzik takes a sip and his eyes go wide.", "Listen to крепкий", p("7-3")),
    v("mi7-4", "у стойки", "at the bar (counter)", "People drinking coffee standing at a café counter.", "Listen to у стойки", p("7-4")),
    v("mi7-5", "Заходите ещё!", "Come again!", "A barista waves from behind the counter.", "Listen to Заходите ещё", p("7-5")),
    v("mi7-6", "Не забывайте нас!", "Don't forget us!", "Giulia hugs Murzik and Tom at the café door.", "Listen to Не забывайте нас", p("7-6")),
    v("mi7-7", "Мы пришлём фотографии.", "We'll send photos.", "Tom shows the camera screen full of photos.", "Listen to Мы пришлём фотографии", p("7-7")),
    v("mi7-8", "Передай привет бабушке!", "Say hello to your grandmother!", "Franco waves and winks.", "Listen to Передай привет бабушке", p("7-8")),
  ],
  letters: [
    letter("эспрессо", "Not “expresso”: es-PRES-sa. The last о sounds like а.", "чашка эспрессо", "a cup of espresso"),
  ],
  dialogue: {
    title: "Coffee at the bar",
    note: "In Italy people often drink coffee standing at the bar — it's quick and cheaper.",
    lines: [
      line("giulia", "Четыре эспрессо, пожалуйста. Пьём у стойки, как настоящие миланцы!", "Four espressos, please. We'll drink them at the bar, like real Milanese!"),
      line("murzik", "Ого, какой крепкий!", "Wow, it's so strong!"),
      line("giulia", "Это тебе на память. Кофеварка — чтобы ты вспоминал нас каждое утро.", "This is for you, as a keepsake. A coffee maker — so that you remember us every morning."),
      line("murzik", "Спасибо, Джулия! Я буду варить кофе каждое утро.", "Thank you, Giulia! I'll make coffee every morning."),
      line("tom", "А мы пришлём фотографии из Мюнхена.", "And we'll send photos from Munich."),
      line("giulia", "Не забывайте нас! И заходите ещё!", "Don't forget us! And come again!"),
      line("franco", "Передай привет бабушке, когда её найдёшь!", "Say hello to your grandmother when you find her!"),
    ],
    gist: choice("mi7-d1", "What does Giulia give Murzik?", [
      ["A coffee maker.", true],
      ["A new dress.", false],
      ["A photo.", false],
    ]),
  },
  grammar: [
    {
      title: "Milan review: the “of” form",
      paragraphs: [
        "After нет, без, для, из, у, много, мало, несколько, сколько: нет размера, без чека, из хлопка, у Джулии, много вещей.",
        "Whose: шарф Мурзика. When: в начале октября, в конце лета.",
      ],
      examples: [
        { ru: "У Тома нет галстука из шёлка.", en: "Tom doesn't have a silk tie." },
        { ru: "В конце недели у нас много работы.", en: "At the end of the week we have lots of work." },
      ],
    },
  ],
  tasks: [
    listen("mi7-t1", "Audio story: Giulia tells about her shop. Listen. Why did she open it?", "Мой дедушка был портным. В детстве я часто сидела в его ателье и смотрела, как он шьёт. Там было много тканей, ниток и старых эскизов. Я очень любила это место. Поэтому пять лет назад я открыла свой магазин. На стене висит один старый эскиз — платье с цветами. Это эскиз Аси.", [
      ["She grew up in her grandfather's workshop and loved it.", true],
      ["She found it on sale.", false],
      ["Asya asked her to.", false],
    ]),
    choice("mi7-t2", "In Giulia's story, whose sketch hangs on the wall?", [
      ["Asya's.", true],
      ["Giulia's.", false],
      ["Franco's.", false],
    ], { skill: "listening" }),
    choice("mi7-t3", "“Tom doesn't have a tie.” Which is right?", [
      ["У Тома нет галстука.", true],
      ["У Том нет галстук.", false],
      ["Тома нет галстук.", false],
    ], { skill: "grammar" }),
    read("mi7-t4", "Read the café price list. How much is coffee at the bar?", "КАФЕ\nЭспрессо у стойки — 1,20 €\nЭспрессо за столиком — 2,50 €", [
      ["1.20 euros.", true],
      ["2.50 euros.", false],
      ["It's free.", false],
    ]),
    script("mi7-t5", "Say goodbye to Giulia and Franco.", [
      { speaker: "Giulia", text: "Это тебе — на память о Милане." },
      { speaker: "You", answer: "Спасибо! Я буду варить кофе каждое утро.", options: ["Спасибо! Я буду варить кофе каждое утро.", "Нет моего размера.", "Не моргай!"] },
      { speaker: "Franco", text: "Передай привет бабушке!" },
      { speaker: "You", answer: "Обязательно! Мы пришлём фотографии.", options: ["Обязательно! Мы пришлём фотографии.", "Без чека.", "Повернись!"] },
    ], { skill: "review" }),
    match("mi7-t6", "Milan review: match the Russian with the English.", [
      ["примерочная", "fitting room"],
      ["из шерсти", "of wool"],
      ["скидка", "discount"],
      ["портной", "tailor"],
    ], { skill: "review" }),
    speak("mi7-t7", "Что ты купил в Милане?", "Я купил пиджак из шерсти и пять пар носков. Было много скидок!", "I bought a woollen jacket and five pairs of socks. There were lots of discounts!", {
      help: "Say what you bought out loud. A woman says купила (and is asked: Что ты купила в Милане?).",
    }),
  ],
  reward: {
    itemId: "mokapot",
    itemName: "Stovetop coffee maker",
    itemNameRu: "Кофеварка",
    ru: "Своя кофеварка! Как у миланцев!",
    en: "My own coffee maker! Like the Milanese!",
    a11y: "A small silver stovetop coffee maker stands on a little stove by the round window; a tiny cup next to it.",
    image: p("reward-7"),
    steps: ["Giulia's present is a small silver coffee maker.", "“Every Milanese has one at home.”", "Murzik makes his first coffee — and it's very strong!", "Now he'll start every morning like in Milan."],
  },
};

export const milanLessons: Lesson[] = [milan1, milan2, milan3, milan4, milan5, milan6, milan7];
