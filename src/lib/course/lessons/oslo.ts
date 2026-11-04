import { pic } from "../art";
import { choice, fill, letter, line, listen, match, read, script, speak, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Oslo · «Погода и природа» · A2 lessons 1–7.
 * Murzik and Tom stay in a red wooden guesthouse by the fjord. Ingrid (about 40) runs it; she studied
 * in Murmansk and speaks Russian. Weather, plans, a fjord boat trip, a hike. On the boat Murzik finally
 * sees Lev up close — the old white cat in the hat. Lev says he too has been looking for Asya for years,
 * and disappears again. Ingrid's mother knitted a sweater with a northern-lights pattern that Asya drew;
 * then Asya went south, to the Swiss mountains.
 * Grammar: если + future (Если будет дождь, мы останемся дома), the future of plans, weather words.
 */

const p = (name: string) => pic(`oslo/${name}`);

export const oslo1: Lesson = {
  id: "a2-oslo-1",
  level: "A2",
  cityId: "oslo",
  number: 1,
  title: "What Will the Weather Be Like?",
  minutes: 8,
  goals: ["Understand a weather forecast", "Talk about tomorrow's weather", "Use если + future: Если будет дождь…"],
  vocabNote: "In Russian, after если (if) you use the future when you talk about the future: Если завтра будет дождь… (not “если завтра есть дождь”).",
  vocab: [
    v("os1-1", "прогноз погоды", "weather forecast", "Ingrid looks at a weather app on her phone.", "Listen to прогноз погоды", p("1-1")),
    v("os1-2", "Завтра будет дождь.", "It will rain tomorrow.", "A weather icon: a cloud with rain drops.", "Listen to Завтра будет дождь", p("1-2")),
    v("os1-3", "переменная облачность", "partly cloudy", "Sun peeking between clouds over the fjord.", "Listen to переменная облачность", p("1-3")),
    v("os1-4", "ветер с моря", "wind from the sea", "Waves on the fjord, a flag flapping.", "Listen to ветер с моря", p("1-4")),
    v("os1-5", "плюс двенадцать", "plus twelve (degrees)", "A thermometer showing +12.", "Listen to плюс двенадцать", p("1-5")),
    v("os1-6", "Если будет солнце…", "If it's sunny…", "Murzik dreams of a sunny mountain.", "Listen to Если будет солнце", p("1-6")),
    v("os1-7", "останемся дома", "we'll stay at home", "Murzik and Tom on the sofa with blankets and tea.", "Listen to останемся дома", p("1-7")),
    v("os1-8", "Погода быстро меняется.", "The weather changes fast.", "Half the sky sunny, half dark with rain.", "Listen to Погода быстро меняется", p("1-8")),
  ],
  letters: [
    letter("облачность", "OB-lach-nast': stress on the first syllable.", "переменная облачность", "partly cloudy"),
    letter("дождь", "Said DOSHCH' (with a long soft щ at the end) or DOSHT'. Both are fine.", "Завтра будет дождь.", "It will rain tomorrow."),
  ],
  dialogue: {
    title: "The forecast",
    note: "Ingrid studied in Murmansk and speaks Russian. She runs a small guesthouse by the fjord.",
    lines: [
      line("ingrid", "Добро пожаловать в Осло! Какие у вас планы на завтра?", "Welcome to Oslo! What are your plans for tomorrow?"),
      line("tom", "Хотим поехать на фьорд. Какой прогноз погоды?", "We want to go to the fjord. What's the weather forecast?"),
      line("ingrid", "Утром переменная облачность, плюс двенадцать. А днём будет дождь и ветер с моря.", "In the morning, partly cloudy, plus twelve. And in the afternoon, rain and wind from the sea."),
      line("murzik", "Если будет дождь, мы останемся дома?", "If it rains, will we stay at home?"),
      line("ingrid", "В Норвегии погода быстро меняется. Если будете ждать солнца — никуда не поедете!", "In Norway the weather changes fast. If you wait for sunshine, you'll never go anywhere!"),
      line("tom", "Тогда посмотрим завтра утром!", "Then we'll see tomorrow morning!"),
    ],
    gist: choice("os1-d1", "What will the weather be in the afternoon?", [
      ["Rain and wind from the sea.", true],
      ["Sunny and warm.", false],
      ["Snow.", false],
    ]),
  },
  grammar: [
    {
      title: "Если + future",
      paragraphs: [
        "When you talk about a possible future, both parts are in the future: Если будет дождь, мы останемся дома. Если ты придёшь, я буду рад.",
        "English uses the present after if (If it rains…), but Russian uses the future: если будет, если пойдёт, если устанешь.",
      ],
      examples: [
        { ru: "Если будет солнце, мы пойдём в горы.", en: "If it's sunny, we'll go to the mountains." },
        { ru: "Если пойдёт дождь, возьми зонт.", en: "If it starts raining, take an umbrella." },
      ],
    },
  ],
  tasks: [
    listen("os1-t1", "Listen. What's the temperature in the morning?", "Утром переменная облачность, плюс двенадцать.", [
      ["Plus twelve.", true],
      ["Minus twelve.", false],
      ["Plus twenty.", false],
    ]),
    choice("os1-t2", "“If it's sunny, we'll go to the mountains.” Which is right?", [
      ["Если будет солнце, мы пойдём в горы.", true],
      ["Если будет солнце, мы пошли в горы вчера.", false],
      ["Если было солнце, мы пойдём в горы.", false],
    ], { skill: "grammar" }),
    fill("os1-t3", "Choose the right word: “If it rains tomorrow, we'll stay at home.”", "Если завтра", "дождь, мы останемся дома.", "будет", ["будет", "есть", "был"], { skill: "grammar" }),
    read("os1-t4", "Read the forecast. When will it be windy?", "ОСЛО, ЗАВТРА\nУтро: +12, переменная облачность\nДень: +10, дождь\nВечер: +8, сильный ветер", [
      ["In the evening.", true],
      ["In the morning.", false],
      ["All day.", false],
    ]),
    match("os1-t5", "Match the Russian with the English.", [
      ["прогноз погоды", "weather forecast"],
      ["переменная облачность", "partly cloudy"],
      ["ветер с моря", "wind from the sea"],
      ["останемся дома", "we'll stay at home"],
    ], { skill: "words" }),
    tf("os1-t6", "After если, Russian uses the future when talking about the future.", true, "True or false?", { skill: "grammar" }),
    speak("os1-t7", "Какие у тебя планы на выходные?", "Если будет солнце, я поеду за город. А если будет дождь, останусь дома и почитаю.", "If it's sunny, I'll go to the countryside. And if it rains, I'll stay at home and read.", {
      help: "Say out loud what you'll do at the weekend: если будет…",
    }),
  ],
  reward: {
    itemId: "barometer",
    itemName: "Old barometer",
    itemNameRu: "Старый барометр",
    ru: "Барометр — сам знает погоду!",
    en: "A barometer — it knows the weather by itself!",
    a11y: "A round brass barometer with words «Буря», «Дождь», «Ясно» hangs on the wall of a small room with red wooden walls and a window onto the fjord.",
    image: p("reward-1"),
    steps: ["Their room is in Ingrid's red wooden guesthouse by the fjord.", "On the wall hangs an old brass barometer.", "Ingrid has stuck Russian words on it: «Буря», «Дождь», «Ясно».", "Every morning Murzik taps it and reads the weather."],
    bridge: "The barometer says «Переменно». Murzik and Tom start to plan the day: if it's dry — a hike, if not — a museum.",
  },
};

export const oslo2: Lesson = {
  id: "a2-oslo-2",
  level: "A2",
  cityId: "oslo",
  number: 2,
  title: "Plan A, Plan B",
  minutes: 8,
  goals: ["Make plans with conditions", "Use если … , то …", "Talk about museums and day trips"],
  vocabNote: "Если …, то … — if …, then … The то is optional: Если будет дождь, (то) пойдём в музей.",
  vocab: [
    v("os2-1", "план Б", "plan B", "Murzik's notebook: «План А — фьорд. План Б — музей».", "Listen to план Б", p("2-1")),
    v("os2-2", "морской музей", "maritime museum", "Old wooden boats and ship models in a museum hall.", "Listen to морской музей", p("2-2")),
    v("os2-3", "Если не будет дождя…", "If it doesn't rain…", "A crossed-out rain cloud.", "Listen to Если не будет дождя", p("2-3")),
    v("os2-4", "то пойдём в поход", "then we'll go hiking", "A trail up a green hill above the city.", "Listen to то пойдём в поход", p("2-4")),
    v("os2-5", "Посмотрим по погоде.", "We'll see what the weather does.", "Ingrid shrugs, looking at the sky.", "Listen to Посмотрим по погоде", p("2-5")),
    v("os2-6", "Если успеем…", "If we have time… (if we make it)", "Tom looks at his watch.", "Listen to Если успеем", p("2-6")),
    v("os2-7", "на всякий случай", "just in case", "Murzik puts an umbrella in the backpack.", "Listen to на всякий случай", p("2-7")),
    v("os2-8", "Решено!", "It's decided! Settled!", "Murzik and Tom shake paws.", "Listen to Решено", p("2-8")),
  ],
  letters: [
    letter("дождя", "Said da-ZHDYA, stress on the end. Some older speakers say da-ZHZHA, with a long soft ж.", "Если не будет дождя…", "If it doesn't rain…"),
    letter("всякий", "FSYA-kiy: в before с sounds like ф.", "на всякий случай", "just in case"),
  ],
  dialogue: {
    title: "At breakfast",
    note: "Если не будет дождя — after не будет, use the genitive: дождя, солнца, снега.",
    lines: [
      line("murzik", "У меня два плана! План А: если не будет дождя, то пойдём в поход.", "I've got two plans! Plan A: if it doesn't rain, then we'll go hiking."),
      line("tom", "А план Б?", "And plan B?"),
      line("murzik", "Если будет дождь, пойдём в морской музей.", "If it rains, we'll go to the maritime museum."),
      line("ingrid", "Хорошие планы. А вечером — на фьорд, если успеете.", "Good plans. And in the evening — the fjord, if you have time."),
      line("tom", "Ну что, посмотрим по погоде?", "So, shall we see what the weather does?"),
      line("murzik", "Решено! А зонт возьму на всякий случай.", "Settled! And I'll take an umbrella just in case."),
    ],
    gist: choice("os2-d1", "What will they do if it rains?", [
      ["Go to the maritime museum.", true],
      ["Go hiking.", false],
      ["Stay in bed.", false],
    ]),
  },
  grammar: [
    {
      title: "Если не будет + genitive",
      paragraphs: [
        "If there won't be something: Если не будет дождя (genitive), если не будет времени, если не будет билетов.",
        "Если …, то … : Если будет холодно, то наденем свитера. The то can be left out.",
      ],
      examples: [
        { ru: "Если не будет времени, пойдём в музей завтра.", en: "If there's no time, we'll go to the museum tomorrow." },
        { ru: "Если успеем, то поедем на фьорд.", en: "If we have time, we'll go to the fjord." },
      ],
    },
  ],
  tasks: [
    listen("os2-t1", "Listen. What's plan A?", "План А: если не будет дождя, то пойдём в поход.", [
      ["If it doesn't rain, go hiking.", true],
      ["If it rains, go to a museum.", false],
      ["Go to the fjord in the morning.", false],
    ]),
    choice("os2-t2", "“If it doesn't rain…” Which is right?", [
      ["Если не будет дождя…", true],
      ["Если не будет дождь…", false],
      ["Если не есть дождя…", false],
    ], { skill: "grammar" }),
    fill("os2-t3", "Choose the right form: “If there's no time, we'll go to the museum tomorrow.”", "Если не будет", ", пойдём в музей завтра.", "времени", ["времени", "время", "временем"], { skill: "grammar" }),
    read("os2-t4", "Read the museum sign. When is it closed?", "МОРСКОЙ МУЗЕЙ\nОткрыт: 10:00–17:00\nВыходной: понедельник\nБилет: 150 крон, дети — бесплатно", [
      ["On Mondays.", true],
      ["On Sundays.", false],
      ["After ten in the morning.", false],
    ]),
    match("os2-t5", "Match the Russian with the English.", [
      ["на всякий случай", "just in case"],
      ["Посмотрим по погоде.", "We'll see what the weather does."],
      ["Если успеем…", "If we have time…"],
      ["Решено!", "Settled!"],
    ], { skill: "words" }),
    script("os2-t6", "Make plans with a friend.", [
      { speaker: "Friend", text: "Что будем делать завтра?" },
      { speaker: "You", answer: "Если будет солнце, пойдём на пляж.", options: ["Если будет солнце, пойдём на пляж.", "Если есть солнце, идём вчера.", "Договорились, дождя."] },
      { speaker: "Friend", text: "А если будет дождь?" },
      { speaker: "You", answer: "Тогда пойдём в кино. Договорились?", options: ["Тогда пойдём в кино. Договорились?", "Тогда не будет дождь.", "На всякий случай кино."] },
    ], { skill: "speaking" }),
    speak("os2-t7", "Что ты будешь делать, если завтра будет плохая погода?", "Если будет плохая погода, я останусь дома. А если не будет дождя, пойду гулять.", "If the weather's bad, I'll stay at home. And if it doesn't rain, I'll go for a walk.", {
      help: "Say plan A and plan B out loud.",
    }),
  ],
  reward: {
    itemId: "vikingship",
    itemName: "Little Viking ship",
    itemNameRu: "Кораблик викингов",
    ru: "Кораблик с драконом!",
    en: "A little ship with a dragon!",
    a11y: "A small wooden model of a Viking ship with a dragon head and a striped sail stands on the windowsill.",
    image: p("reward-2"),
    steps: ["It rained — so plan B: the maritime museum.", "Old boats, maps and a real polar ship's wheel!", "In the shop Murzik finds a little wooden Viking ship.", "Its dragon head looks like the little dragon from Krakow."],
    bridge: "In the evening the rain stops. Ingrid says: “Завтра на фьорд — но одевайтесь тепло. На воде холодно.”",
  },
};

export const oslo3: Lesson = {
  id: "a2-oslo-3",
  level: "A2",
  cityId: "oslo",
  number: 3,
  title: "Dress Warmly!",
  minutes: 8,
  goals: ["Pack for a trip outdoors", "Give advice with если: Если замёрзнешь, надень…", "Name outdoor clothes and things"],
  vocabNote: "Если замёрзнешь — if you get cold. Надень — put on (imperative of надеть). Возьми с собой — take with you.",
  vocab: [
    v("os3-1", "Одевайтесь тепло!", "Dress warmly!", "Ingrid holds up a pile of warm clothes.", "Listen to Одевайтесь тепло", p("3-1")),
    v("os3-2", "шерстяной свитер", "woollen jumper", "A thick grey woollen jumper.", "Listen to шерстяной свитер", p("3-2")),
    v("os3-3", "термос", "thermos flask", "A red thermos with steam from the cup.", "Listen to термос", p("3-3")),
    v("os3-4", "непромокаемая куртка", "waterproof jacket", "Rain runs off a yellow jacket.", "Listen to непромокаемая куртка", p("3-4")),
    v("os3-5", "Если замёрзнешь, надень свитер.", "If you get cold, put on the jumper.", "Murzik shivers and pulls on a jumper.", "Listen to Если замёрзнешь, надень свитер", p("3-5")),
    v("os3-6", "Возьми с собой…", "Take … with you", "A backpack being packed.", "Listen to Возьми с собой", p("3-6")),
    v("os3-7", "запасные носки", "spare socks", "A pair of thick socks rolled up in the backpack.", "Listen to запасные носки", p("3-7")),
    v("os3-8", "Лучше взять, чем замёрзнуть.", "Better to take it than to freeze.", "Ingrid winks.", "Listen to Лучше взять, чем замёрзнуть", p("3-8")),
  ],
  letters: [
    letter("замёрзнешь", "ё is stressed: za-MYORZ-nesh.", "Если замёрзнешь…", "If you get cold…"),
    letter("шерстяной", "sher-sti-NOY: stress on the end.", "шерстяной свитер", "woollen jumper"),
  ],
  dialogue: {
    title: "Packing",
    note: "Норвежская поговорка: «Нет плохой погоды — есть плохая одежда».",
    lines: [
      line("ingrid", "На фьорде холодно. Одевайтесь тепло! Возьмите шерстяные свитера.", "It's cold on the fjord. Dress warmly! Take woollen jumpers."),
      line("tom", "Свитер? Сейчас же лето!", "A jumper? It's summer!"),
      line("ingrid", "Это Норвегия. Нет плохой погоды — есть плохая одежда.", "This is Norway. There's no bad weather — only bad clothes."),
      line("ingrid", "Мурзик, возьми с собой термос с чаем. И запасные носки.", "Murzik, take a thermos of tea with you. And spare socks."),
      line("murzik", "А если будет жарко?", "And if it's hot?"),
      line("ingrid", "Снимешь. Лучше взять, чем замёрзнуть!", "You'll take it off. Better to take it than to freeze!"),
    ],
    gist: choice("os3-d1", "Why does Ingrid say to take jumpers?", [
      ["It's cold on the fjord.", true],
      ["It will snow.", false],
      ["The boat has no roof.", false],
    ]),
  },
  grammar: [
    {
      title: "Если + future, then an imperative",
      paragraphs: [
        "Advice: если + future, then a command: Если замёрзнешь, надень свитер. Если устанешь, скажи мне.",
        "Надеть (put on clothes) — надень, наденьте. Снять (take off) — сними, снимите.",
      ],
      examples: [
        { ru: "Если пойдёт дождь, надень куртку.", en: "If it starts raining, put on your jacket." },
        { ru: "Если будет жарко, сними свитер.", en: "If it's hot, take off your jumper." },
      ],
    },
  ],
  tasks: [
    listen("os3-t1", "Listen. What does Ingrid tell Murzik to take?", "Мурзик, возьми с собой термос с чаем. И запасные носки.", [
      ["A thermos of tea and spare socks.", true],
      ["An umbrella and a map.", false],
      ["Sun cream.", false],
    ]),
    choice("os3-t2", "“If you get cold, put on the jumper.” Which is right?", [
      ["Если замёрзнешь, надень свитер.", true],
      ["Если замерзаешь вчера, надень свитер.", false],
      ["Если замёрзнешь, наденешь свитера вчера.", false],
    ], { skill: "grammar" }),
    fill("os3-t3", "Choose the right word: “If it's hot, take off your jumper.”", "Если будет жарко,", "свитер.", "сними", ["сними", "надень", "возьми"], { skill: "grammar" }),
    read("os3-t4", "Read Ingrid's list. What should they NOT forget?", "НА ФЬОРД:\n✓ свитер\n✓ куртка\n✓ термос\n✓ запасные носки\n!!! НЕ ЗАБУДЬТЕ билеты на катер!", [
      ["The boat tickets.", true],
      ["Sun cream.", false],
      ["The umbrella.", false],
    ]),
    match("os3-t5", "Match the Russian with the English.", [
      ["шерстяной свитер", "woollen jumper"],
      ["термос", "thermos"],
      ["запасные носки", "spare socks"],
      ["Одевайтесь тепло!", "Dress warmly!"],
    ], { skill: "words" }),
    tf("os3-t6", "Ingrid says there's no bad weather, only bad clothes.", true, "True or false?", { skill: "listening" }),
    speak("os3-t7", "Что взять в поход в горы?", "Возьми тёплый свитер и термос. Если пойдёт дождь, надень непромокаемую куртку.", "Take a warm jumper and a thermos. If it rains, put on a waterproof jacket.", {
      help: "Give a friend packing advice out loud with если.",
    }),
  ],
  reward: {
    itemId: "thermos",
    itemName: "Red thermos",
    itemNameRu: "Красный термос",
    ru: "Термос — горячий чай в любую погоду!",
    en: "A thermos — hot tea in any weather!",
    a11y: "An old red thermos with a dented cup-lid stands by the door next to two pairs of thick socks.",
    image: p("reward-3"),
    steps: ["Ingrid gives them her old red thermos.", "It has a dent from a fall in the mountains — “сто лет назад”.", "Murzik fills it with hot tea.", "Tomorrow — the fjord."],
    bridge: "The boat goes deep into the fjord. Waterfalls, rocks, seagulls. And on the back deck — an old white cat in a hat.",
  },
};

export const oslo4: Lesson = {
  id: "a2-oslo-4",
  level: "A2",
  cityId: "oslo",
  number: 4,
  title: "The Cat in the Hat",
  minutes: 8,
  goals: ["Describe nature: скалы, водопад, фьорд", "Understand a mysterious conversation", "Use если in questions: Что будет, если…?"],
  vocabNote: "Murzik has seen the old white cat in the hat three times before. This time they really talk.",
  vocab: [
    v("os4-1", "катер", "small boat, motorboat", "A white boat sailing into a narrow fjord.", "Listen to катер", p("4-1")),
    v("os4-2", "водопад", "waterfall", "A tall waterfall falling down a cliff into the fjord.", "Listen to водопад", p("4-2")),
    v("os4-3", "скалы", "cliffs, rocks", "Steep grey cliffs on both sides of the water.", "Listen to скалы", p("4-3")),
    v("os4-4", "палуба", "deck", "The back deck of the boat, wet with spray.", "Listen to палуба", p("4-4")),
    v("os4-5", "Я тоже её ищу.", "I'm looking for her too.", "The old white cat in the hat looks at the water.", "Listen to Я тоже её ищу", p("4-5")),
    v("os4-6", "много лет", "for many years", "A row of old train tickets in the cat's paw.", "Listen to много лет", p("4-6")),
    v("os4-7", "Если найдёшь её…", "If you find her…", "The old cat takes off his hat.", "Listen to Если найдёшь её", p("4-7")),
    v("os4-8", "Он снова исчез.", "He's disappeared again.", "An empty deck; only a grey feather on the bench.", "Listen to Он снова исчез", p("4-8")),
  ],
  letters: [
    letter("водопад", "va-da-PAT: the final д sounds like т.", "водопад", "waterfall"),
    letter("палуба", "PA-lu-ba: stress on the first syllable.", "на палубе", "on deck"),
  ],
  dialogue: {
    title: "On the deck",
    note: "Lev is an old white cat in a hat. Murzik saw him in Berlin, Amsterdam and Edinburgh.",
    lines: [
      line("murzik", "Это вы! Я видел вас в Эдинбурге! Кто вы?", "It's you! I saw you in Edinburgh! Who are you?"),
      line("lev", "Меня зовут Лев. Я знал твою бабушку очень давно.", "My name is Lev. I knew your grandmother a very long time ago."),
      line("murzik", "Вы знаете, где она?", "Do you know where she is?"),
      line("lev", "Нет. Я тоже её ищу. Много лет.", "No. I'm looking for her too. For many years."),
      line("lev", "Если найдёшь её раньше меня — скажи ей, что Лев помнит Севилью.", "If you find her before me, tell her that Lev remembers Seville."),
      line("tom", "Мурзик, смотри — водопад! … А где твой знакомый?", "Murzik, look — a waterfall! … And where's your friend?"),
      line("murzik", "Он снова исчез.", "He's disappeared again."),
    ],
    gist: choice("os4-d1", "What does Lev say?", [
      ["He's also been looking for Asya for many years.", true],
      ["He knows where Asya lives.", false],
      ["He's Murzik's grandfather.", false],
    ]),
  },
  grammar: [
    {
      title: "Если in a message",
      paragraphs: [
        "Если найдёшь её, скажи… — If you find her, tell… (future + imperative).",
        "Questions: Что будет, если…? — What will happen if…? Что ты сделаешь, если…? — What will you do if…?",
      ],
      examples: [
        { ru: "Если увидишь Тома, скажи ему, что я жду.", en: "If you see Tom, tell him I'm waiting." },
        { ru: "Что ты сделаешь, если найдёшь бабушку?", en: "What will you do if you find your grandmother?" },
      ],
    },
  ],
  tasks: [
    listen("os4-t1", "Listen. How long has Lev been looking for Asya?", "Нет. Я тоже её ищу. Много лет.", [
      ["For many years.", true],
      ["For a week.", false],
      ["Since Edinburgh.", false],
    ]),
    choice("os4-t2", "Detective! What should Murzik tell Asya?", [
      ["That Lev remembers Seville.", true],
      ["That Lev lives in Oslo.", false],
      ["That Lev is ill.", false],
    ], { skill: "listening" }),
    fill("os4-t3", "Choose the right word: “If you see Tom, tell him I'm waiting.”", "Если", "Тома, скажи ему, что я жду.", "увидишь", ["увидишь", "увидеть", "увидим"], { skill: "grammar" }),
    read("os4-t4", "On the bench where Lev sat, Murzik finds a note. What does it say?", "Внук Аси!\nОтсюда она уехала на юг, к солнцу.\nИщи там, где горы и часы.\nЛ.", [
      ["From here Asya went south; look where there are mountains and clocks.", true],
      ["Asya is in Oslo.", false],
      ["Lev will wait in Edinburgh.", false],
    ]),
    match("os4-t5", "Match the Russian with the English.", [
      ["катер", "motorboat"],
      ["водопад", "waterfall"],
      ["скалы", "cliffs"],
      ["палуба", "deck"],
    ], { skill: "words" }),
    tf("os4-t6", "Lev knows where Asya is now.", false, "True or false?", { skill: "listening" }),
    speak("os4-t7", "Что ты сделаешь, если найдёшь бабушку?", "Если я её найду, я её обниму и расскажу про всех её друзей.", "If I find her, I'll hug her and tell her about all her friends.", {
      help: "Answer out loud as Murzik: если найду…",
    }),
  ],
  reward: {
    itemId: "greyfeather",
    itemName: "Grey feather",
    itemNameRu: "Серое перо",
    ru: "Перо со шляпы Льва!",
    en: "A feather from Lev's hat!",
    a11y: "A long grey feather lies on the carved box with Asya's notes, next to Lev's folded note.",
    image: p("reward-4"),
    steps: ["On the bench, Lev's grey feather — just like in Edinburgh.", "And a note: «Ищи там, где горы и часы».", "Murzik puts the feather and the note in the carved box.", "Mountains and clocks… Switzerland?"],
    bridge: "The next day the sun is out. Ingrid takes them on a hike to a viewpoint above the fjord.",
  },
};

export const oslo5: Lesson = {
  id: "a2-oslo-5",
  level: "A2",
  cityId: "oslo",
  number: 5,
  title: "The Viewpoint",
  minutes: 8,
  goals: ["Talk about a hike", "Encourage someone: если устанешь, скажи", "Describe a view"],
  vocabNote: "Смотровая площадка — viewpoint. Вид на фьорд — a view of the fjord.",
  vocab: [
    v("os5-1", "смотровая площадка", "viewpoint, lookout", "A flat rock high above the fjord with a railing.", "Listen to смотровая площадка", p("5-1")),
    v("os5-2", "подниматься", "to go up, to climb", "A steep stone path going up.", "Listen to подниматься", p("5-2")),
    v("os5-3", "Если устанешь, скажи.", "If you get tired, tell me.", "Ingrid looks back at Tom on the path.", "Listen to Если устанешь, скажи", p("5-3")),
    v("os5-4", "передохнуть", "to take a short rest", "Tom sits on a rock, drinking from the thermos.", "Listen to передохнуть", p("5-4")),
    v("os5-5", "Ещё чуть-чуть!", "Just a little more!", "Murzik waves from higher up.", "Listen to Ещё чуть-чуть", p("5-5")),
    v("os5-6", "Дух захватывает!", "It takes your breath away!", "The fjord far below, blue and silver.", "Listen to Дух захватывает", p("5-6")),
    v("os5-7", "Оно того стоило.", "It was worth it.", "Tom, tired but smiling, at the top.", "Listen to Оно того стоило", p("5-7")),
    v("os5-8", "спускаться", "to go down", "The path winding down to the water.", "Listen to спускаться", p("5-8")),
  ],
  letters: [
    letter("площадка", "pla-SHCHAT-ka: щ is a long soft ш; д before к sounds like т.", "смотровая площадка", "viewpoint"),
  ],
  dialogue: {
    title: "On the path",
    note: "Подниматься / спускаться — imperfective (process); подняться / спуститься — perfective (result).",
    lines: [
      line("ingrid", "Подниматься час. Том, если устанешь, скажи.", "It's an hour's climb. Tom, if you get tired, tell me."),
      line("tom", "Я устал… Можно передохнуть?", "I'm tired… Can we take a short rest?"),
      line("ingrid", "Конечно. Если хочешь, выпей чаю из термоса.", "Of course. If you like, have some tea from the thermos."),
      line("murzik", "Том, ещё чуть-чуть! Я уже вижу площадку!", "Tom, just a little more! I can already see the viewpoint!"),
      line("tom", "Ух… Дух захватывает! Оно того стоило.", "Phew… It takes your breath away! It was worth it."),
      line("ingrid", "А спускаться будет легче. Если не пойдёт дождь!", "And going down will be easier. If it doesn't rain!"),
    ],
    gist: choice("os5-d1", "How long is the climb?", [
      ["An hour.", true],
      ["Ten minutes.", false],
      ["All day.", false],
    ]),
  },
  grammar: [
    {
      title: "Если устанешь, если хочешь",
      paragraphs: [
        "Если + future (perfective) — if something happens: Если устанешь, скажи. Если пойдёт дождь, вернёмся.",
        "Если хочешь / если хотите (present) — if you want: Если хочешь, выпей чаю.",
      ],
      examples: [
        { ru: "Если хочешь, пойдём вместе.", en: "If you want, let's go together." },
        { ru: "Если устанете, отдохните.", en: "If you get tired, have a rest." },
      ],
    },
  ],
  tasks: [
    listen("os5-t1", "Listen. What does Ingrid offer Tom?", "Конечно. Если хочешь, выпей чаю из термоса.", [
      ["Tea from the thermos.", true],
      ["A sandwich.", false],
      ["To go back down.", false],
    ]),
    choice("os5-t2", "“If you get tired, tell me.” Which is right?", [
      ["Если устанешь, скажи.", true],
      ["Если устал завтра, говоришь.", false],
      ["Если уставать, сказать.", false],
    ], { skill: "grammar" }),
    fill("os5-t3", "Choose the right word: “If you want, let's go together.”", "Если", ", пойдём вместе.", "хочешь", ["хочешь", "хотеть", "хотел"], { skill: "grammar" }),
    read("os5-t4", "Read the sign at the start of the path. How long to the viewpoint?", "СМОТРОВАЯ ПЛОЩАДКА\nВверх: 1 час\nВниз: 40 минут\nВ дождь тропа скользкая!", [
      ["One hour up.", true],
      ["40 minutes up.", false],
      ["Two hours up.", false],
    ]),
    match("os5-t5", "Match the Russian with the English.", [
      ["подниматься", "to go up"],
      ["спускаться", "to go down"],
      ["передохнуть", "to take a short rest"],
      ["Дух захватывает!", "It takes your breath away!"],
    ], { skill: "words" }),
    script("os5-t6", "Encourage a tired friend on a hike.", [
      { speaker: "Friend", text: "Я больше не могу…" },
      { speaker: "You", answer: "Ещё чуть-чуть! Если хочешь, передохнём.", options: ["Ещё чуть-чуть! Если хочешь, передохнём.", "Ещё чуть-чуть! Если хотел, вчера.", "Какой вид! Спускаться."] },
      { speaker: "Friend", text: "Давай. Спасибо." },
      { speaker: "You", answer: "Выпей чаю. Вид того стоит!", options: ["Выпей чаю. Вид того стоит!", "Выпей чаю. Термос скалы!", "Выпей чаю вчера."] },
    ], { skill: "speaking" }),
    speak("os5-t7", "Расскажи о самом красивом виде, который ты видел(а).", "Однажды я поднялся (поднялась) на гору. Было трудно, но какой вид! Оно того стоило.", "Once I climbed a mountain. It was hard, but what a view! It was worth it.", {
      help: "Tell a short story out loud about a beautiful view.",
    }),
  ],
  reward: {
    itemId: "fjordphoto",
    itemName: "Framed photo of the fjord",
    itemNameRu: "Фото фьорда в рамке",
    ru: "Фото с вершины — оно того стоило!",
    en: "A photo from the top — it was worth it!",
    a11y: "A framed photo shows Murzik, Tom and Ingrid on a rock high above a blue fjord.",
    image: p("reward-5"),
    steps: ["At the top Tom takes his best photo of the trip.", "Ingrid prints it and puts it in a wooden frame.", "Murzik, Tom and Ingrid on the rock — and the fjord far below.", "The photo goes on the shelf, next to the Viking ship."],
    bridge: "That evening Ingrid's mother, old Solveig, comes to visit. She sees Murzik — and goes very quiet.",
  },
};

export const oslo6: Lesson = {
  id: "a2-oslo-6",
  level: "A2",
  cityId: "oslo",
  number: 6,
  title: "The Northern Lights Sweater",
  minutes: 8,
  goals: ["Understand a memory", "Talk about the northern lights", "Use ждать + genitive: ждать сияния"],
  vocabNote: "Северное сияние — the northern lights. In Oslo you can see it only sometimes, in winter; further north, much more often.",
  vocab: [
    v("os6-1", "Сольвейг", "Solveig (Ingrid's mother)", "An old lady with white plaits and a knitted shawl.", "Listen to Сольвейг", p("6-1")),
    v("os6-2", "Она увидела сияние.", "She saw the lights.", "Green ribbons of light over a snowy fjord.", "Listen to Она увидела сияние", p("6-2")),
    v("os6-3", "Она нарисовала узор.", "She drew a pattern.", "A pencil drawing of waves of light on squared paper.", "Listen to Она нарисовала узор", p("6-3")),
    v("os6-4", "свитер с узором", "a jumper with a pattern", "A dark blue jumper with green waves knitted on the chest.", "Listen to свитер с узором", p("6-4")),
    v("os6-5", "той зимой", "that winter", "A snowy guesthouse, smoke from the chimney, long ago.", "Listen to той зимой", p("6-5")),
    v("os6-6", "Она ждала сияния каждую ночь.", "She waited for the lights every night.", "A ginger cat seen from behind on the snowy porch, looking up.", "Listen to Она ждала сияния каждую ночь", p("6-6")),
    v("os6-7", "на юг, в Швейцарию", "south, to Switzerland", "A map arrow from Oslo south to the Alps.", "Listen to на юг, в Швейцарию", p("6-7")),
    v("os6-8", "в горы", "to the mountains", "Snowy Alpine peaks.", "Listen to в горы", p("6-8")),
  ],
  letters: [
    letter("сияния", "si-YA-ni-ya: genitive after ждать (waiting for something unclear).", "ждала сияния", "waited for the lights"),
  ],
  dialogue: {
    title: "Solveig remembers",
    note: "Сольвейг speaks a little Russian — she learned it from her daughter.",
    lines: [
      line("solveig", "Рыжий кот… Тридцать лет назад у нас жила рыжая кошка. Ася.", "A ginger cat… Thirty years ago a ginger cat lived with us. Asya."),
      line("murzik", "Ася — моя бабушка!", "Asya is my grandmother!"),
      line("solveig", "Той зимой она ждала северного сияния каждую ночь.", "That winter she waited for the northern lights every night."),
      line("solveig", "А когда увидела сияние — нарисовала узор. И я связала свитер с этим узором.", "And when she saw them, she drew a pattern. And I knitted a jumper with that pattern."),
      line("ingrid", "Мама, это тот свитер? Который ты носишь каждую зиму?", "Mum, is that the jumper? The one you wear every winter?"),
      line("solveig", "Тот самый. А весной Ася уехала на юг — в Швейцарию, в горы.", "That very one. And in spring Asya went south — to Switzerland, to the mountains."),
    ],
    gist: choice("os6-d1", "What did Asya do when she saw the northern lights?", [
      ["She drew a pattern for a jumper.", true],
      ["She left for Switzerland the same night.", false],
      ["She took a photo.", false],
    ]),
  },
  grammar: [
    {
      title: "Ждать + genitive or accusative",
      paragraphs: [
        "Ждать + accusative for a concrete person or thing: жду Тома, жду автобус.",
        "Ждать + genitive for something less concrete: ждать сияния, ждать ответа, ждать помощи.",
      ],
      examples: [
        { ru: "Я жду ответа от Лены.", en: "I'm waiting for an answer from Lena." },
        { ru: "Мы ждём автобус.", en: "We're waiting for the bus." },
      ],
    },
  ],
  tasks: [
    listen("os6-t1", "Listen. When did Asya live with Solveig?", "Тридцать лет назад у нас жила рыжая кошка. Ася.", [
      ["Thirty years ago.", true],
      ["Last winter.", false],
      ["Ten years ago.", false],
    ]),
    choice("os6-t2", "Detective! Where did Asya go next?", [
      ["South, to the mountains of Switzerland.", true],
      ["North, to see more lights.", false],
      ["Back to Helsinki.", false],
    ], { skill: "listening" }),
    fill("os6-t3", "Choose the right form: “I'm waiting for an answer.”", "Я жду", ".", "ответа", ["ответа", "ответом", "ответу"], { skill: "grammar" }),
    read("os6-t4", "Inside the jumper there's an old label. What does it say?", "Связала Сольвейг.\nУзор нарисовала Ася.\nСеверное сияние, январь.", [
      ["Solveig knitted it; Asya drew the northern-lights pattern.", true],
      ["The jumper was bought in a shop.", false],
      ["Asya knitted it herself.", false],
    ]),
    match("os6-t5", "Match the Russian with the English.", [
      ["Она увидела сияние.", "She saw the lights."],
      ["свитер с узором", "jumper with a pattern"],
      ["той зимой", "that winter"],
      ["в горы", "to the mountains"],
    ], { skill: "words" }),
    tf("os6-t6", "Solveig wears the jumper every winter.", true, "True or false?", { skill: "listening" }),
    speak("os6-t7", "Чего ты ждёшь с нетерпением?", "Я жду лета и отпуска. А ещё жду письма от друга.", "I'm looking forward to summer and holidays. And I'm also waiting for a letter from a friend.", {
      help: "Say out loud what you're waiting for: жду + genitive.",
    }),
  ],
  reward: {
    itemId: "knittingpattern",
    itemName: "Copy of Asya's pattern",
    itemNameRu: "Копия узора Аси",
    ru: "Узор северного сияния — рукой Аси!",
    en: "The northern lights pattern — in Asya's hand!",
    a11y: "A sheet of squared paper with green and blue waves drawn in pencil is pinned above the bed.",
    image: p("reward-6"),
    steps: ["Solveig still has Asya's drawing of the pattern.", "Ingrid makes a copy for Murzik.", "He pins it above his bed.", "At night he dreams of green lights over a white fjord."],
    bridge: "Tomorrow — the train south. Solveig has been knitting since the evening. Ingrid laughs: “Мама не спала всю ночь.”",
  },
};

export const oslo7: Lesson = {
  id: "a2-oslo-7",
  level: "A2",
  cityId: "oslo",
  number: 7,
  title: "Oslo Exam",
  minutes: 9,
  goals: ["Understand a longer story", "Make plans with если", "Review everything from Oslo"],
  vocabNote: "Lesson 7 is the city exam: a longer listening story and a review of everything from Oslo.",
  vocab: [
    v("os7-1", "свитер с северным сиянием", "a northern lights jumper", "A small dark blue jumper with green waves, just Murzik's size.", "Listen to свитер с северным сиянием", p("7-1")),
    v("os7-2", "по твоему размеру", "in your size", "Solveig holds the jumper up to Murzik.", "Listen to по твоему размеру", p("7-2")),
    v("os7-3", "Носи и вспоминай нас!", "Wear it and remember us!", "Solveig smiles and pats Murzik's head.", "Listen to Носи и вспоминай нас", p("7-3")),
    v("os7-4", "Если будешь в Норвегии…", "If you're ever in Norway…", "Ingrid waves from the porch.", "Listen to Если будешь в Норвегии", p("7-4")),
    v("os7-5", "заезжайте", "drop in, come by (on your way)", "The red guesthouse with its door open.", "Listen to заезжайте", p("7-5")),
    v("os7-6", "через Германию", "via Germany", "A map: a line from Oslo through Germany to Zurich.", "Listen to через Германию", p("7-6")),
    v("os7-7", "поезд в Цюрих", "the train to Zurich", "A long train in the station, «Zürich» on the board.", "Listen to поезд в Цюрих", p("7-7")),
    v("os7-8", "Если повезёт…", "If we're lucky…", "Murzik crosses his paws.", "Listen to Если повезёт", p("7-8")),
  ],
  letters: [
    letter("Цюрих", "TSYU-rikh: ц is like ts, stress on the first syllable.", "в Цюрих", "to Zurich"),
  ],
  dialogue: {
    title: "Goodbye, Oslo",
    note: "Повезти (кому) — to be lucky: Если повезёт — if we're lucky.",
    lines: [
      line("solveig", "Это тебе. Свитер с северным сиянием — по твоему размеру.", "This is for you. A northern lights jumper — in your size."),
      line("murzik", "С узором бабушки?! Спасибо, Сольвейг!", "With Grandma's pattern?! Thank you, Solveig!"),
      line("solveig", "Носи и вспоминай нас. В горах пригодится.", "Wear it and remember us. It'll be useful in the mountains."),
      line("ingrid", "Если будете в Норвегии — заезжайте! А куда теперь?", "If you're ever in Norway — drop in! And where now?"),
      line("tom", "Поезд в Цюрих, через Германию. Горы и часы — как написал Лев.", "The train to Zurich, via Germany. Mountains and clocks — as Lev wrote."),
      line("murzik", "Если повезёт, найдём там новый след!", "If we're lucky, we'll find a new clue there!"),
    ],
    gist: choice("os7-d1", "Why are they going to Zurich?", [
      ["Lev's note said: mountains and clocks.", true],
      ["Ingrid has a friend there.", false],
      ["Tom has a job there.", false],
    ]),
  },
  grammar: [
    {
      title: "Oslo review",
      paragraphs: [
        "Weather: прогноз погоды, переменная облачность, будет дождь, ветер с моря, погода быстро меняется.",
        "Если + future: Если будет дождь, пойдём в музей. Если не будет дождя (genitive), пойдём в поход. Если замёрзнешь, надень свитер. Если хочешь — present.",
      ],
      examples: [
        { ru: "Если не будет дождя, мы поднимемся на смотровую площадку.", en: "If it doesn't rain, we'll climb to the viewpoint." },
        { ru: "Если найдёшь бабушку, скажи ей, что Лев её помнит.", en: "If you find your grandmother, tell her Lev remembers her." },
      ],
    },
  ],
  tasks: [
    listen("os7-t1", "Audio story: Ingrid talks about her guesthouse. Listen. Why did she study in Murmansk?", "Я выросла здесь, у фьорда. Когда мне было двадцать, я поехала учиться в Мурманск — я хотела выучить русский, потому что тогда к нам приезжало много русских туристов. Теперь у меня свой маленький гостевой дом. Если гости говорят по-русски, я всегда рада. А если идёт дождь, мы пьём чай и смотрим на фьорд.", [
      ["She wanted to learn Russian because many Russian tourists came there.", true],
      ["Her mother was Russian.", false],
      ["She wanted to see the northern lights.", false],
    ]),
    choice("os7-t2", "In Ingrid's story, what do they do when it rains?", [
      ["Drink tea and look at the fjord.", true],
      ["Go to a museum.", false],
      ["Go hiking anyway.", false],
    ], { skill: "listening" }),
    choice("os7-t3", "“If it doesn't rain, we'll climb to the viewpoint.” Which is right?", [
      ["Если не будет дождя, мы поднимемся на смотровую площадку.", true],
      ["Если нет дождь, мы поднимаемся на смотровую площадку вчера.", false],
      ["Если не будет дождь, мы поднялись на смотровую площадку.", false],
    ], { skill: "grammar" }),
    read("os7-t4", "Read the train ticket. Which part is the night train?", "БИЛЕТ\nОсло — Гамбург (с пересадками): 07:30 – 19:10\nГамбург — Цюрих (ночной поезд): 21:00 – 08:40", [
      ["Hamburg — Zurich.", true],
      ["Oslo — Hamburg.", false],
      ["Both trains.", false],
    ]),
    script("os7-t5", "Say goodbye to Ingrid.", [
      { speaker: "Ingrid", text: "Если будете в Норвегии — заезжайте!" },
      { speaker: "You", answer: "Обязательно! Спасибо за всё!", options: ["Обязательно! Спасибо за всё!", "Обязательно! Водопад!", "Если будет дождя."] },
      { speaker: "Ingrid", text: "Что будете делать в Цюрихе?" },
      { speaker: "You", answer: "Если повезёт, найдём новый след.", options: ["Если повезёт, найдём новый след.", "Если повезло, найдём вчера.", "Одевайтесь тепло, палуба."] },
    ], { skill: "review" }),
    match("os7-t6", "Oslo review: match the Russian with the English.", [
      ["прогноз погоды", "weather forecast"],
      ["термос", "thermos"],
      ["водопад", "waterfall"],
      ["смотровая площадка", "viewpoint"],
    ], { skill: "review" }),
    speak("os7-t7", "Какие у тебя планы на лето?", "Если будет хорошая погода, поеду в горы. Если не будет денег, останусь дома и буду гулять в парке.", "If the weather's good, I'll go to the mountains. If there's no money, I'll stay at home and walk in the park.", {
      help: "Say your summer plans out loud with если.",
    }),
  ],
  reward: {
    itemId: "woolsweater",
    itemName: "Northern lights jumper",
    itemNameRu: "Свитер с северным сиянием",
    ru: "Свитер с узором Аси!",
    en: "A jumper with Asya's pattern!",
    a11y: "A small dark blue woollen jumper with green northern-lights waves knitted on the chest, folded on top of Murzik's suitcase.",
    image: p("reward-7"),
    steps: ["Solveig knitted all night.", "A small dark blue jumper with Asya's northern-lights pattern.", "It fits Murzik perfectly.", "He wears it on the train — and feels like Asya is very close."],
  },
};

export const osloLessons: Lesson[] = [oslo1, oslo2, oslo3, oslo4, oslo5, oslo6, oslo7];
