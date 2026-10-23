import { pic } from "../art";
import { choice, fill, line, listen, match, missing, speak, spell, tf, v } from "../make";
import type { Lesson } from "../types";

/* London · «Приезд» · lessons 1–7. Murzik's home here: his room in Tom's flat. */

export const london1: Lesson = {
  id: "a1-london-1",
  level: "A1",
  cityId: "london",
  number: 1,
  title: "At the Airport",
  minutes: 5,
  goals: ["Show your passport", "Say that something is yours", "Ask where the exit is"],
  vocabNote:
    "At passport control people use вы, the polite “you”: Вы турист? Это ваш чемодан? Answer short and simple.",
  vocab: [
    v("lo1-1", "Паспорт, пожалуйста. — Вот мой паспорт.", "Passport, please. — Here is my passport.", "A passport officer in a navy uniform holds out his hand; Murzik hands him a passport.", "Play Паспорт, пожалуйста. — Вот мой паспорт", pic("london/1-1b")),
    v("lo1-2", "аэропорт", "airport", "A big, busy airport hall with tall windows and planes outside.", "Play аэропорт", pic("london/1-2b")),
    v("lo1-3", "Вы турист?", "Are you a tourist?", "The officer looks at Murzik over his glasses with a curious face.", "Play Вы турист", pic("london/1-3")),
    v("lo1-4", "Это ваш чемодан? — Да, мой.", "Is this your suitcase? — Yes, it's mine.", "The officer points at a brown suitcase; Murzik nods and puts a paw on it.", "Play Это ваш чемодан? — Да, мой", pic("london/1-4b")),
    v("lo1-5", "самолёт", "plane", "A white plane lands on a runway under a grey London sky.", "Play самолёт", pic("london/1-5b")),
    v("lo1-6", "Где выход?", "Where is the exit?", "Murzik looks around a big airport hall with a puzzled face.", "Play Где выход", pic("london/1-7")),
    v("lo1-7", "Добро пожаловать!", "Welcome!", "The officer smiles and stamps Murzik's passport.", "Play Добро пожаловать", pic("london/1-10")),
  ],
  dialogue: {
    title: "Passport control",
    lines: [
      line("murzik", "Ура! Лондон! Вот и аэропорт!", "Hooray! London! Here's the airport!"),
      line("officer", "Здравствуйте! Паспорт, пожалуйста.", "Hello! Passport, please."),
      line("murzik", "Здравствуйте! Вот мой паспорт.", "Hello! Here is my passport."),
      line("officer", "Вы турист?", "Are you a tourist?"),
      line("murzik", "Да, я турист.", "Yes, I'm a tourist."),
      line("officer", "Это ваш чемодан?", "Is this your suitcase?"),
      line("murzik", "Да, мой.", "Yes, it's mine."),
      line("officer", "Добро пожаловать в Лондон!", "Welcome to London!"),
      line("murzik", "Спасибо! Извините, где выход?", "Thank you! Excuse me, where is the exit?"),
      line("officer", "Выход там.", "The exit is over there."),
    ],
    gist: choice("lo1-d1", "Where is Murzik?", [
      ["At passport control.", true],
      ["In a café.", false],
      ["At a market.", false],
    ]),
  },
  grammar: [
    {
      title: "Мой, моя, моё",
      paragraphs: [
        "Russian nouns are masculine, feminine or neuter, and “my” changes with them.",
        "Masculine (most end in a consonant): мой паспорт. Feminine (most end in -а): моя сумка. Neuter (often -о, -е): моё такси.",
        "Polite “your” changes the same way: ваш чемодан, ваша сумка.",
      ],
      examples: [
        { ru: "Это мой паспорт.", en: "This is my passport." },
        { ru: "Это ваша сумка? — Да, моя.", en: "Is this your bag? — Yes, it's mine." },
      ],
    },
  ],
  tasks: [
    choice("lo1-t1", "What does Где выход? mean?", [
      ["Where is the exit?", true],
      ["Where is the taxi?", false],
      ["Where is my passport?", false],
    ], { skill: "words" }),
    listen("lo1-t2", "Listen. What did you hear?", "Это ваш чемодан?", [
      ["Это ваш чемодан?", true],
      ["Это мой чемодан?", false],
      ["Где ваш чемодан?", false],
    ]),
    fill("lo1-t3", "Complete.", "Это", "сумка.", "моя", ["моя", "мой", "моё"], { skill: "grammar" }),
    spell("lo1-t4", "Build the word for “passport”.", "паспорт"),
    speak("lo1-t5", "Здравствуйте! Паспорт, пожалуйста.", "Здравствуйте! Вот мой паспорт.", "Hello! Here is my passport.", {
      help: "You are at passport control. Answer aloud.",
    }),
    listen("lo1-t6", "Listen and choose the best reply.", "Добро пожаловать!", [
      ["Спасибо!", true],
      ["Мне тоже.", false],
      ["Пока!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "blanket",
    itemName: "Tartan blanket",
    itemNameRu: "Плед",
    ru: "Ура! Тёплый плед!",
    en: "Yay! A warm blanket!",
    a11y: "Tom wraps Murzik in a soft red-and-green tartan blanket in the airport hall. Murzik smiles, only his face showing.",
    image: pic("london/reward-1"),
    steps: ["Tom meets Murzik at the exit.", "London is cold today.", "Tom gives him a tartan blanket.", "It is for Murzik's new room."],
    bridge: "Murzik will live in Tom's flat and have his own room. A taxi takes them there through London.",
  },
};

export const london2: Lesson = {
  id: "a1-london-2",
  level: "A1",
  cityId: "london",
  number: 2,
  title: "Numbers 0–20",
  minutes: 5,
  goals: ["Count from 0 to 20", "Ask “How many?”", "Say a house or flat number"],
  vocabNote:
    "Listen to the stress: оди́н, два, три, четы́ре, пять, шесть, семь, во́семь, де́вять, де́сять.",
  vocab: [
    v("lo2-1", "один, два, три, четыре, пять", "one, two, three, four, five", "Five red buses in a row with the numbers 1 to 5 on them.", "Play один, два, три, четыре, пять", pic("london/2-1b")),
    v("lo2-2", "шесть, семь, восемь, девять, десять", "six, seven, eight, nine, ten", "Five red buses in a row with the numbers 6 to 10 on them.", "Play шесть, семь, восемь, девять, десять", pic("london/2-2b")),
    v("lo2-3", "одиннадцать, двенадцать, тринадцать, четырнадцать, пятнадцать", "eleven, twelve, thirteen, fourteen, fifteen", "Five number cards: 11, 12, 13, 14, 15.", "Play одиннадцать, двенадцать, тринадцать, четырнадцать, пятнадцать", pic("london/2-3b")),
    v("lo2-4", "шестнадцать, семнадцать, восемнадцать, девятнадцать, двадцать", "sixteen, seventeen, eighteen, nineteen, twenty", "Five number cards: 16, 17, 18, 19, 20.", "Play шестнадцать, семнадцать, восемнадцать, девятнадцать, двадцать", pic("london/2-4b")),
    v("lo2-5", "ноль", "zero", "A card with a big number 0 and an empty bus stop.", "Play ноль", pic("london/2-0")),
    v("lo2-6", "Сколько?", "How many?", "Murzik looks out of a taxi window at many red buses, counting on his paw.", "Play Сколько", pic("london/2-q")),
    v("lo2-7", "Номер…", "Number…", "A London front door with a big brass number 8 on it.", "Play Номер", pic("london/2-n")),
  ],
  dialogue: {
    title: "Red buses",
    lines: [
      line("tom", "Мурзик, смотри! Красный автобус!", "Murzik, look! A red bus!"),
      line("murzik", "Один! Два, три!", "One! Two, three!"),
      line("tom", "Четыре, пять…", "Four, five…"),
      line("murzik", "Шесть, семь!", "Six, seven!"),
      line("tom", "Сколько? Семь?", "How many? Seven?"),
      line("murzik", "Да, семь!", "Yes, seven!"),
      line("tom", "Смотри, автобус номер пятнадцать!", "Look, bus number fifteen!"),
      line("tom", "А вот мой дом. Номер восемь.", "And here is my house. Number eight."),
      line("murzik", "А квартира?", "And the flat?"),
      line("tom", "Квартира десять.", "Flat ten."),
    ],
    gist: choice("lo2-d1", "How many red buses does Murzik count?", [
      ["Seven.", true],
      ["Three.", false],
      ["Ten.", false],
    ]),
  },
  grammar: [
    {
      title: "Сколько? and Номер",
      paragraphs: [
        "Сколько? means “How many?” At this stage, answer with the number alone: Сколько? — Семь.",
        "11–19 end in -надцать (“on ten”): одиннадцать (11), двенадцать (12), пятнадцать (15). 20 is двадцать.",
        "Номер (number) comes before the number: дом номер восемь, автобус номер пять. People often drop it: Квартира десять.",
      ],
      examples: [
        { ru: "Сколько? — Пять.", en: "How many? — Five." },
        { ru: "Мой дом — номер восемь.", en: "My house is number eight." },
      ],
    },
  ],
  tasks: [
    listen("lo2-t1", "Listen. Which number is it?", "восемь", [
      ["8", true],
      ["7", false],
      ["3", false],
    ]),
    match("lo2-t2", "Match the numbers.", [
      ["четыре", "4"],
      ["девять", "9"],
      ["два", "2"],
      ["десять", "10"],
    ], { skill: "words" }),
    fill("lo2-t3", "Complete the count.", "шесть, семь,", ", девять", "восемь", ["восемь", "десять", "шесть"], { skill: "grammar" }),
    missing("lo2-t4", "Which letter is missing? (ten)", "дес", "ть", "я", ["я", "е", "а"]),
    speak("lo2-t5", "Count from one to ten.", "Один, два, три, четыре, пять, шесть, семь, восемь, девять, десять.", "One, two, three, four, five, six, seven, eight, nine, ten.", {
      promptLang: undefined,
      help: "Say the numbers aloud. Do not hurry.",
    }),
    choice("lo2-t6", "Это ваш чемодан? Choose the short answer.", [
      ["Да, мой.", true],
      ["Да, ваш.", false],
      ["Да, моя.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cushion",
    itemName: "Cushion",
    itemNameRu: "Подушка",
    ru: "Ура! Новая подушка!",
    en: "Yay! A new cushion!",
    a11y: "Murzik hugs a soft round cushion with a little red bus embroidered on it, at the door of flat number 10.",
    image: pic("london/reward-2"),
    steps: ["They arrive at flat number 10.", "On the doormat there is a parcel.", "Inside is a soft cushion with a red bus.", "Murzik counts: one cushion!"],
    bridge: "Tom opens the door of flat ten. Murzik is about to see his London room.",
  },
};

export const london3: Lesson = {
  id: "a1-london-3",
  level: "A1",
  cityId: "london",
  number: 3,
  title: "At Tom's Flat",
  minutes: 5,
  goals: ["Invite a guest in", "Show someone their room", "Ask where the bathroom is"],
  vocabNote:
    "Russians count floors from the street: the ground floor is первый этаж. So третий этаж is what the British call the second floor.",
  vocab: [
    v("lo3-1", "Это моя квартира.", "This is my flat.", "Tom opens his front door and shows a cosy London flat with a big window.", "Play Это моя квартира", pic("london/4-1")),
    v("lo3-2", "Проходи!", "Come in!", "Tom holds the door open and invites Murzik in with a sweeping gesture.", "Play Проходи", pic("london/4-2")),
    v("lo3-3", "Чувствуй себя как дома.", "Make yourself at home.", "Murzik lies relaxed on a cushion with a cup of tea. Tom smiles.", "Play Чувствуй себя как дома", pic("london/4-3")),
    v("lo3-4", "Вот ключ.", "Here is the key.", "Tom gives Murzik a shiny key on a red key ring.", "Play Вот ключ", pic("london/4-4")),
    v("lo3-5", "Какой этаж?", "Which floor?", "Murzik looks up a tall staircase with a questioning face.", "Play Какой этаж", pic("london/4-5")),
    v("lo3-6", "Вот кухня, а вот твоя комната.", "Here is the kitchen, and here is your room.", "Tom points at a small kitchen and then at an open door to a little room.", "Play Вот кухня, а вот твоя комната", pic("london/3-6b")),
    v("lo3-7", "Где ванная и туалет?", "Where are the bathroom and the toilet?", "Murzik stands in a hallway looking at two closed doors with a questioning face.", "Play Где ванная и туалет", pic("london/3-7b")),
  ],
  dialogue: {
    title: "Welcome home",
    lines: [
      line("murzik", "Том, какой этаж?", "Tom, which floor?"),
      line("tom", "Третий этаж. Вот ключ. Это моя квартира. Проходи!", "The third floor. Here's the key. This is my flat. Come in!"),
      line("murzik", "Спасибо! Ого, как красиво!", "Thank you! Wow, how lovely!"),
      line("tom", "Чувствуй себя как дома. Вот кухня, а вот твоя комната.", "Make yourself at home. Here is the kitchen, and here is your room."),
      line("murzik", "Моя комната? Отлично! А где ванная и туалет?", "My room? Great! And where are the bathroom and the toilet?"),
      line("tom", "Ванная и туалет там.", "The bathroom and the toilet are over there."),
    ],
    gist: choice("lo3-d1", "What does Tom show Murzik?", [
      ["His flat and Murzik's room.", true],
      ["The airport.", false],
      ["A bus stop.", false],
    ]),
  },
  grammar: [
    {
      title: "Мой and твой",
      paragraphs: [
        "Твой means “your” when you say ты. It changes like мой: твой ключ, твоя комната.",
        "Remember the -те rule: to a friend Проходи!, to a guest you do not know well Проходите!",
      ],
      examples: [
        { ru: "Это моя квартира.", en: "This is my flat." },
        { ru: "Вот твоя комната.", en: "Here is your room." },
      ],
    },
  ],
  tasks: [
    tf("lo3-t1", "У Мурзика есть своя комната.", true, "True or false: Murzik has his own room.", { skill: "words" }),
    listen("lo3-t2", "Listen. What did you hear?", "Вот твоя комната.", [
      ["Вот твоя комната.", true],
      ["Вот моя комната.", false],
      ["Где твоя комната?", false],
    ]),
    fill("lo3-t3", "Complete.", "Это", "ключ.", "твой", ["твой", "твоя", "твоё"], { skill: "grammar" }),
    missing("lo3-t4", "Which letter is missing? (flat)", "кварт", "ра", "и", ["и", "е", "ы"]),
    speak("lo3-t5", "Привет! Можно?", "Привет! Проходи! Чувствуй себя как дома.", "Hi! Come in! Make yourself at home.", {
      help: "A friend visits you. Answer aloud.",
    }),
    listen("lo3-t6", "Listen. Which number is it?", "шесть", [
      ["6", true],
      ["7", false],
      ["4", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "armchair",
    itemName: "Armchair",
    itemNameRu: "Кресло",
    ru: "Ура! У меня кресло!",
    en: "Yay! I have an armchair!",
    a11y: "Murzik sits in a soft green armchair by the big window of his London room, with the tartan blanket and the bus cushion on it.",
    image: pic("london/reward-3"),
    steps: ["The room is almost empty.", "But by the window stands an old armchair.", "Murzik puts his blanket and cushion on it.", "Now it is his favourite place."],
    bridge: "Tomorrow Tom wants to show Murzik the city. By metro or by bus?",
  },
};

export const london4: Lesson = {
  id: "a1-london-4",
  level: "A1",
  cityId: "london",
  number: 4,
  title: "By Metro or by Bus?",
  minutes: 5,
  goals: ["Name the metro, the bus and the bus stop", "Buy one ticket", "Say how you are travelling"],
  vocabNote: "Russians call the London Underground метро, just like in Moscow. Метро never changes its form.",
  vocab: [
    v("lo4-1", "метро", "metro / the Underground", "A London Underground entrance with the red-and-blue round sign.", "Play метро", pic("london/3-1")),
    v("lo4-2", "автобус", "bus", "A red double-decker bus on a London street.", "Play автобус", pic("london/3-2")),
    v("lo4-3", "остановка", "bus stop", "A red London bus stop sign with a small bench. Murzik waits there.", "Play остановка", pic("london/3-3")),
    v("lo4-4", "Один билет, пожалуйста.", "One ticket, please.", "Murzik holds up one paw finger at a ticket window.", "Play Один билет, пожалуйста", pic("london/3-5")),
    v("lo4-5", "Едем на метро.", "We're going by metro.", "Tom and Murzik walk down the steps into the Underground.", "Play Едем на метро", pic("london/3-6")),
    v("lo4-6", "Едем на автобусе.", "We're going by bus.", "Tom and Murzik sit on the top deck of a red bus, looking out of the window.", "Play Едем на автобусе", pic("london/3-7")),
    v("lo4-7", "Поехали!", "Let's go!", "Murzik sits at the front of the top deck and raises both paws happily as the bus starts.", "Play Поехали", pic("london/3-10")),
  ],
  dialogue: {
    title: "Around London",
    note: "Наш means “our”: наш автобус. Или means “or”.",
    lines: [
      line("tom", "Мурзик, вот твой билет.", "Murzik, here is your ticket."),
      line("murzik", "Спасибо! Едем на метро?", "Thank you! Are we going by metro?"),
      line("tom", "Хочешь на метро или на автобусе?", "Do you want to go by metro or by bus?"),
      line("murzik", "На автобусе! Он красный!", "By bus! It's red!"),
      line("tom", "Хорошо. Вот остановка. Наш автобус — номер девять.", "OK. Here is the bus stop. Our bus is number nine."),
      line("murzik", "Вот номер девять!", "Here's number nine!"),
      line("tom", "Поехали!", "Let's go!"),
    ],
    gist: choice("lo4-d1", "How do Tom and Murzik travel?", [
      ["By bus.", true],
      ["By metro.", false],
      ["By taxi.", false],
    ]),
  },
  grammar: [
    {
      title: "На + transport",
      paragraphs: [
        "Use на to say how you travel: на метро, на такси, на автобусе.",
        "Метро and такси never change. Автобус becomes на автобусе. Едем means “we're going” (in a vehicle).",
      ],
      examples: [
        { ru: "Едем на метро.", en: "We're going by metro." },
        { ru: "Едем на автобусе.", en: "We're going by bus." },
      ],
    },
  ],
  tasks: [
    choice("lo4-t1", "Find the odd one out.", [
      ["метро", false],
      ["автобус", false],
      ["такси", false],
      ["чемодан", true],
    ], { skill: "words", help: "Three of them are ways to travel." }),
    listen("lo4-t2", "Listen and choose the best reply.", "Едем на метро или на автобусе?", [
      ["На автобусе!", true],
      ["Номер девять.", false],
      ["Да, мой.", false],
    ]),
    fill("lo4-t3", "Complete.", "Едем на", ".", "автобусе", ["автобусе", "автобус", "автобуса"], { skill: "grammar" }),
    spell("lo4-t4", "Build the word for “metro”.", "метро"),
    speak("lo4-t5", "Здравствуйте! Что вы хотите?", "Один билет, пожалуйста.", "One ticket, please.", {
      help: "You are at a ticket window. Answer aloud.",
    }),
    listen("lo4-t6", "Listen. What did you hear?", "Вот ключ.", [
      ["Вот ключ.", true],
      ["Вот твой.", false],
      ["Вот выход.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "metro-map",
    itemName: "Metro map poster",
    itemNameRu: "Карта метро",
    ru: "Ура! Карта метро на стену!",
    en: "Yay! A metro map for my wall!",
    a11y: "Murzik pins a colourful London Underground map poster on the wall of his room, above the armchair.",
    image: pic("london/reward-4"),
    steps: ["At the metro, Tom finds a big map poster.", "Murzik takes it home.", "He pins it above the armchair.", "Now his room looks like London."],
    bridge: "In the morning Murzik looks out of the window. The sky is grey. What is the weather like?",
  },
};

export const london5: Lesson = {
  id: "a1-london-5",
  level: "A1",
  cityId: "london",
  number: 5,
  title: "Rain Again!",
  minutes: 5,
  goals: ["Ask what the weather is like", "Say that it is cold, warm, rainy or sunny", "Say that you are cold"],
  vocabNote: "Russian weather sentences have no “it”: Сегодня холодно — literally “Today cold”. Short and easy!",
  vocab: [
    v("lo5-1", "Какая сегодня погода?", "What's the weather like today?", "Murzik looks out of a window at a grey London sky, his nose against the glass.", "Play Какая сегодня погода", pic("london/5-1")),
    v("lo5-2", "Сегодня холодно.", "It's cold today.", "Murzik shivers on a London street, wrapped in his scarf, with frosty breath.", "Play Сегодня холодно", pic("london/5-2")),
    v("lo5-3", "Сегодня тепло.", "It's warm today.", "Murzik sits relaxed on a park bench in gentle warm light.", "Play Сегодня тепло", pic("london/5-3")),
    v("lo5-4", "Идёт дождь.", "It's raining.", "Rain falls on a London street with red buses and grey buildings.", "Play Идёт дождь", pic("london/5-4")),
    v("lo5-5", "Светит солнце.", "The sun is shining.", "The sun shines brightly over Big Ben and the river.", "Play Светит солнце", pic("london/5-5")),
    v("lo5-6", "Мне холодно.", "I'm cold.", "Murzik hugs himself and shivers, his fur standing on end.", "Play Мне холодно", pic("london/5-7")),
    v("lo5-7", "Возьми зонт!", "Take an umbrella!", "Murzik holds out a black umbrella to Tom at the front door.", "Play Возьми зонт", pic("london/5-8")),
  ],
  dialogue: {
    title: "London weather",
    note: "Опять means “again”. Смотри! means “Look!”",
    lines: [
      line("murzik", "Том, какая сегодня погода?", "Tom, what's the weather like today?"),
      line("tom", "Сегодня холодно.", "It's cold today."),
      line("murzik", "Мне холодно!", "I'm cold!"),
      line("tom", "Смотри! Идёт дождь. Возьми зонт!", "Look! It's raining. Take an umbrella!"),
      line("murzik", "Опять дождь!", "Rain again!"),
      line("tom", "Ой, смотри! Светит солнце!", "Oh, look! The sun is shining!"),
      line("murzik", "Ура! Сегодня тепло!", "Hooray! It's warm today!"),
    ],
    gist: choice("lo5-d1", "What is the weather like at the end?", [
      ["Sunny and warm.", true],
      ["It's raining.", false],
      ["It's snowing.", false],
    ]),
  },
  grammar: [
    {
      title: "Сегодня холодно and Мне холодно",
      paragraphs: [
        "Weather words end in -о: холодно (cold), тепло (warm), жарко (hot). No “it is”: Сегодня тепло.",
        "Сегодня холодно is about the weather. Мне холодно is about you: “I feel cold”. You already know мне from Мне тоже and Мне пора.",
      ],
      examples: [
        { ru: "Сегодня жарко.", en: "It's hot today." },
        { ru: "Мне холодно.", en: "I'm cold." },
      ],
    },
  ],
  tasks: [
    match("lo5-t1", "Match the Russian with the English.", [
      ["Идёт дождь.", "It's raining."],
      ["Светит солнце.", "The sun is shining."],
      ["Сегодня тепло.", "It's warm today."],
    ], { skill: "words" }),
    listen("lo5-t2", "Listen. What did you hear?", "Сегодня тепло.", [
      ["Сегодня тепло.", true],
      ["Сегодня холодно.", false],
      ["Мне тепло.", false],
    ]),
    choice("lo5-t3", "You are shivering. Find the correct sentence.", [
      ["Мне холодно.", true],
      ["Я холодно.", false],
      ["Мне холодный.", false],
    ], { skill: "grammar" }),
    spell("lo5-t4", "Build the word for “umbrella”.", "зонт"),
    speak("lo5-t5", "Какая сегодня погода?", "Сегодня тепло. Светит солнце.", "It's warm today. The sun is shining.", {
      help: "Look out of your own window and describe the real weather aloud.",
    }),
    listen("lo5-t6", "Listen and choose the best reply.", "Чувствуй себя как дома.", [
      ["Спасибо!", true],
      ["Третий этаж.", false],
      ["Возьми зонт!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "plant",
    itemName: "Plant",
    itemNameRu: "Цветок",
    ru: "Ура! Цветок на окне!",
    en: "Yay! A plant for my window!",
    a11y: "Murzik puts a small pot with a bright yellow flower on the windowsill of his room. Rain runs down the glass outside.",
    image: pic("london/reward-5"),
    steps: ["The rain does not stop.", "Tom brings home a yellow flower.", "Murzik puts it on the windowsill.", "Now the room is bright even on grey days."],
    bridge: "Tom has to work tomorrow. Murzik will explore alone, so they need each other's phone numbers.",
  },
};

export const london6: Lesson = {
  id: "a1-london-6",
  level: "A1",
  cityId: "london",
  number: 6,
  title: "Call Me!",
  minutes: 5,
  goals: ["Answer the phone", "Ask for and give a phone number", "Ask “Where are you?” and answer"],
  vocabNote: "Алло! is only for the phone. Phone numbers can be read one digit at a time.",
  vocab: [
    v("lo6-1", "Алло!", "Hello? (on the phone)", "Murzik answers a ringing mobile phone, holding it to his ear.", "Play Алло", pic("london/6-1")),
    v("lo6-2", "Какой у тебя номер?", "What's your number?", "Tom holds his phone and looks at Murzik, ready to type.", "Play Какой у тебя номер", pic("london/6-2")),
    v("lo6-3", "Мой номер…", "My number is…", "Murzik shows his phone screen with digits on it.", "Play Мой номер", pic("london/6-3")),
    v("lo6-4", "Позвони мне!", "Call me!", "Murzik makes a “call me” gesture with his paw near his ear.", "Play Позвони мне", pic("london/6-5")),
    v("lo6-5", "Напиши мне!", "Text me!", "Murzik types a message on his phone with both paws. A heart floats above.", "Play Напиши мне", pic("london/6-6")),
    v("lo6-6", "Ты где?", "Where are you?", "Tom talks on his phone in the street and looks around for Murzik.", "Play Ты где", pic("london/6-7")),
    v("lo6-7", "Я дома.", "I'm at home.", "Tom sits on his sofa at home, talking on the phone.", "Play Я дома", pic("london/6-8")),
  ],
  dialogue: {
    title: "A call from the park",
    note: "The first lines are in the morning. Later Murzik's phone rings. Иду! means “I'm coming!”",
    lines: [
      line("tom", "Мурзик, какой у тебя номер?", "Murzik, what's your number?"),
      line("murzik", "Мой номер: пять, восемь, три, ноль, один.", "My number is five, eight, three, zero, one."),
      line("tom", "Хорошо! Позвони мне или напиши мне.", "OK! Call me or text me."),
      line("murzik", "Алло!", "Hello?"),
      line("tom", "Алло, Мурзик! Ты где?", "Hello, Murzik! Where are you?"),
      line("murzik", "Я в парке. А ты?", "I'm in the park. And you?"),
      line("tom", "Я дома. Иду!", "I'm at home. I'm coming!"),
    ],
    gist: choice("lo6-d1", "Where is Murzik when Tom calls?", [
      ["In the park.", true],
      ["At home.", false],
      ["In the metro.", false],
    ]),
  },
  grammar: [
    {
      title: "Ты где? — Я дома.",
      paragraphs: [
        "Дома means “at home”. With other places use в and the ending -е: в парке, в кафе, в метро (кафе and метро do not change).",
        "Позвони мне! — Call me! Напиши мне! — Text me! For вы, add -те: Позвоните мне!",
      ],
      examples: [
        { ru: "Я дома.", en: "I'm at home." },
        { ru: "Я в парке.", en: "I'm in the park." },
      ],
    },
  ],
  tasks: [
    listen("lo6-t1", "Listen to Murzik's number. Which one is it?", "пять, восемь, три, ноль, один", [
      ["5 8 3 0 1", true],
      ["5 8 3 1 0", false],
      ["8 5 3 0 1", false],
    ]),
    choice("lo6-t2", "When do you say Алло!?", [
      ["When you answer the phone.", true],
      ["When you meet a friend in the street.", false],
      ["When you say goodbye.", false],
    ], { skill: "words" }),
    fill("lo6-t3", "Complete.", "Я в", ".", "парке", ["парке", "парк", "дома"], { skill: "grammar" }),
    missing("lo6-t4", "Which letter is missing? (Hello? on the phone)", "Ал", "о!", "л", ["л", "п", "н"]),
    speak("lo6-t5", "Алло! Ты где?", "Я дома. А ты?", "I'm at home. And you?", { help: "Your phone rings. Answer aloud." }),
    listen("lo6-t6", "Listen. What did you hear?", "Идёт дождь.", [
      ["Идёт дождь.", true],
      ["Опять дождь.", false],
      ["Светит солнце.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "floor-lamp",
    itemName: "Floor lamp",
    itemNameRu: "Торшер",
    ru: "Ура! У меня торшер!",
    en: "Yay! I have a floor lamp!",
    a11y: "A tall floor lamp with a warm yellow shade stands next to the green armchair. Murzik reads under it, wrapped in his tartan blanket.",
    image: pic("london/reward-6"),
    steps: ["In the evening it gets dark early.", "Tom brings a tall floor lamp.", "Murzik puts it next to the armchair.", "His room is warm and cosy now."],
    bridge: "The last London day. Murzik wants to see Big Ben, but how does he get there?",
  },
};

export const london7: Lesson = {
  id: "a1-london-7",
  level: "A1",
  cityId: "london",
  number: 7,
  title: "How Do I Get There?",
  minutes: 5,
  goals: ["Ask the way politely", "Understand straight on, right and left", "Ask if a place is far"],
  vocabNote:
    "In the street, start with Извините! A stranger gives directions in the polite вы form: Идите, Поверните.",
  vocab: [
    v("lo7-1", "Как пройти к…?", "How do I get to…?", "Murzik politely asks a lady in the street, holding a small map.", "Play Как пройти к", pic("london/7-1")),
    v("lo7-2", "Идите прямо.", "Go straight on.", "A street with a big arrow going straight ahead.", "Play Идите прямо", pic("london/7-2")),
    v("lo7-3", "Поверните направо.", "Turn right.", "A street corner with a big arrow turning right.", "Play Поверните направо", pic("london/7-3")),
    v("lo7-4", "Поверните налево.", "Turn left.", "A street corner with a big arrow turning left.", "Play Поверните налево", pic("london/7-4")),
    v("lo7-5", "Это далеко?", "Is it far?", "Murzik looks at a very long road with a worried face.", "Play Это далеко", pic("london/7-5")),
    v("lo7-6", "Нет, это близко.", "No, it's close.", "The lady smiles and shows a small distance between her hands.", "Play Нет, это близко", pic("london/7-6")),
    v("lo7-7", "Мы на месте!", "We're here!", "Tom and Murzik stand in front of Big Ben and celebrate.", "Play Мы на месте", pic("london/7-9")),
  ],
  dialogue: {
    title: "The way to Big Ben",
    note: "Потом means “then”. Минут пять means “about five minutes”.",
    lines: [
      line("murzik", "Извините! Как пройти к Биг-Бену?", "Excuse me! How do I get to Big Ben?"),
      line("passerby", "Идите прямо. Потом поверните налево.", "Go straight on. Then turn left."),
      line("murzik", "Это далеко?", "Is it far?"),
      line("passerby", "Нет, это близко. Минут пять.", "No, it's close. About five minutes."),
      line("murzik", "Спасибо большое!", "Thank you very much!"),
      line("tom", "Мурзик! Я здесь!", "Murzik! I'm here!"),
      line("murzik", "Том! Мы на месте! Какой красивый Биг-Бен!", "Tom! We're here! What a beautiful Big Ben!"),
    ],
    gist: choice("lo7-d1", "Which way does Murzik have to turn?", [
      ["Left.", true],
      ["Right.", false],
      ["He does not turn.", false],
    ]),
  },
  grammar: [
    {
      title: "Polite directions",
      paragraphs: [
        "Strangers use the вы form with -те: Идите! (Go!) Поверните! (Turn!)",
        "прямо — straight on · направо — to the right · налево — to the left · далеко — far · близко — close.",
      ],
      examples: [
        { ru: "Идите прямо, потом поверните направо.", en: "Go straight on, then turn right." },
        { ru: "Как пройти к метро?", en: "How do I get to the metro?" },
      ],
    },
  ],
  tasks: [
    listen("lo7-t1", "Listen to the conversation. Where is the metro?", "Извините, где метро? — Идите прямо, потом поверните направо. — Это далеко? — Нет, минут пять.", [
      ["Straight on, then right. About five minutes.", true],
      ["Straight on, then left. Far away.", false],
      ["Turn left. About ten minutes.", false],
    ], { help: "This is your London listening test." }),
    listen("lo7-t2", "Listen. What did you hear?", "Поверните направо.", [
      ["Поверните направо.", true],
      ["Поверните налево.", false],
      ["Идите прямо.", false],
    ]),
    choice("lo7-t3", "Choose the polite question for a stranger.", [
      ["Извините, как пройти к метро?", true],
      ["Эй, где метро?", false],
    ], { skill: "grammar" }),
    spell("lo7-t4", "Build the word for “straight on”.", "прямо"),
    speak("lo7-t5", "Ask a stranger the way to the metro.", "Извините, как пройти к метро?", "Excuse me, how do I get to the metro?", {
      promptLang: undefined,
    }),
    listen("lo7-t6", "Listen and choose the best reply.", "Ты где?", [
      ["Я в парке.", true],
      ["Номер девять.", false],
      ["Мне холодно.", false],
    ], { skill: "review" }),
    choice("lo7-t7", "What does Возьми зонт! mean?", [
      ["Take an umbrella!", true],
      ["Where is the umbrella?", false],
      ["It's raining.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "teapot",
    itemName: "Teapot",
    itemNameRu: "Чайник",
    ru: "Ура! Английский чайник!",
    en: "Yay! An English teapot!",
    a11y: "Murzik holds a round white teapot with little blue flowers. Tom stands beside him, and Big Ben is behind them.",
    image: pic("london/reward-7"),
    steps: ["At Big Ben, Tom gives Murzik a present.", "It is a round white teapot.", "Tom found it in a tiny old tea shop.", "Murzik hugs it carefully."],
    bridge: "The London room is cosy now. Murzik wants to thank the lady from the tea shop, and he takes Grandma Asya's postcard with him.",
  },
};
