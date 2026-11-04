import { pic } from "../art";
import { choice, fill, letter, line, listen, match, read, script, speak, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Lyon · «Рынок и кухня» · A2 lessons 1–7.
 * Murzik and Tom stay with Nina (a Russian cook, about 65) and her husband Bernard (a French
 * cheese seller, about 70, who learned Russian from Nina) in a flat above their cheese shop on
 * the Croix-Rousse hill. Market, kitchen, guests. In lesson 6 Bernard remembers a ginger cat who
 * drew at the market thirty years ago — Asya — and gives Murzik the silk scarf she left behind.
 * Grammar: aspect — делал / сделал, буду делать / сделаю, уже / ещё не, часто / однажды.
 * From A2 every lesson teaches 8 words, and “Sounds and reading” replaces the letters.
 */

const p = (name: string) => pic(`lyon/${name}`);

export const lyon1: Lesson = {
  id: "a2-lyon-1",
  level: "A2",
  cityId: "lyon",
  number: 1,
  title: "At the Market",
  minutes: 8,
  goals: ["Buy food by the kilo", "Ask to taste", "Say what you bought: покупал or купил"],
  vocabNote:
    "Welcome to A2! From now on each lesson has 8 new words and phrases. Many Russian verbs come in pairs: покупать (to be buying, to buy often) and купить (to buy — done!).",
  vocab: [
    v("ly1-1", "прилавок", "market stall, counter", "A wooden market stall covered with cheeses of every shape.", "Listen to прилавок", p("1-1")),
    v("ly1-2", "килограмм помидоров", "a kilo of tomatoes", "A pile of red tomatoes on old-fashioned scales.", "Listen to килограмм помидоров", p("1-2")),
    v("ly1-3", "полкило сыра", "half a kilo of cheese", "A wedge of yellow cheese on the scales, half the weight of the tomatoes.", "Listen to полкило сыра", p("1-3")),
    v("ly1-4", "свежий хлеб", "fresh bread", "A warm loaf with steam rising from it.", "Listen to свежий хлеб", p("1-4")),
    v("ly1-5", "кусок", "a piece", "A knife cuts one piece off a round cheese.", "Listen to кусок", p("1-5")),
    v("ly1-6", "Можно попробовать?", "Can I taste it?", "Murzik looks hungrily at a tiny piece of cheese on a toothpick.", "Listen to Можно попробовать", p("1-6")),
    v("ly1-7", "весы", "scales", "Old-fashioned market scales with a brass dish.", "Listen to весы", p("1-7")),
    v("ly1-8", "Я купил сыр. / Я купила сыр.", "I bought cheese. (man / woman)", "Murzik proudly holds up a paper bag with cheese.", "Listen to Я купил сыр. Я купила сыр", p("1-8")),
  ],
  letters: [
    letter("о → а", "Without stress, о sounds like а.", "помидоры", "tomatoes", "Say pa-mi-DO-ry: only the stressed о is a clear о."),
    letter("г → в", "In сегодня, г sounds like в: se-VOD-nya.", "сегодня", "today"),
  ],
  dialogue: {
    title: "Bernard's cheese",
    note: "Nina says А вот сыр моего мужа — “and here is my husband's cheese”. Bernard is French, but he learned Russian from Nina long ago.",
    lines: [
      line("nina", "Вот наш рынок, Мурзик. А вот сыр моего мужа.", "Here's our market, Murzik. And here's my husband's cheese."),
      line("murzik", "Ого! Можно попробовать?", "Wow! Can I taste it?"),
      line("bernard", "Привет, Мурзик! Конечно. Попробуй этот.", "Hi, Murzik! Of course. Try this one."),
      line("murzik", "Спасибо… Очень вкусно! Можно полкило?", "Thanks… Very tasty! Can I have half a kilo?"),
      line("bernard", "Полкило? Конечно. Что ещё?", "Half a kilo? Of course. Anything else?"),
      line("nina", "Нам ещё нужен килограмм помидоров и свежий хлеб.", "We also need a kilo of tomatoes and fresh bread."),
      line("bernard", "Помидоры — вон там, а хлеб — за углом.", "Tomatoes are over there, and the bread is round the corner."),
      line("murzik", "Нина, смотри! Я купил сыр. Сам!", "Nina, look! I bought cheese. All by myself!"),
      line("nina", "Молодец! Вчера ты весь день покупал открытки, а сегодня купил сыр.", "Well done! Yesterday you spent all day buying postcards, and today you bought cheese."),
    ],
    gist: choice("ly1-d1", "What did Murzik buy at Bernard's stall?", [
      ["Half a kilo of cheese.", true],
      ["A kilo of tomatoes.", false],
      ["Fresh bread.", false],
    ]),
  },
  grammar: [
    {
      title: "Покупал or купил?",
      paragraphs: [
        "Most Russian verbs come in pairs. Покупать is about the action: it went on for a while or happened often. Купить is about the result: done, finished, here it is.",
        "Вчера я весь день покупал открытки — yesterday I spent all day buying postcards. Я купил сыр — I bought cheese (and here it is!). Other pairs: пробовать / попробовать, делать / сделать.",
      ],
      examples: [
        { ru: "Я часто покупаю сыр на рынке.", en: "I often buy cheese at the market." },
        { ru: "Сегодня я купила хлеб.", en: "Today I bought bread. (woman)" },
      ],
    },
  ],
  tasks: [
    listen("ly1-t1", "Listen. What does the customer want?", "Дайте, пожалуйста, килограмм помидоров.", [
      ["A kilo of tomatoes.", true],
      ["Half a kilo of cheese.", false],
      ["A piece of bread.", false],
    ]),
    choice("ly1-t2", "“Yesterday I spent the whole day buying postcards.” Which is right?", [
      ["Вчера я весь день покупал открытки.", true],
      ["Вчера я весь день купил открытки.", false],
    ], { skill: "grammar" }),
    choice("ly1-t3", "“Done! I've bought the bread.” Which is right?", [
      ["Готово! Я купил хлеб.", true],
      ["Готово! Я покупал хлеб.", false],
    ], { skill: "grammar" }),
    read("ly1-t4", "Read the sign. Can you shop here on Monday afternoon?", "РЫНОК\nВторник — воскресенье: 7:00–13:00\nПонедельник: закрыто", [
      ["No: it's closed on Mondays.", true],
      ["Yes, until 1 pm.", false],
      ["Yes, all day.", false],
    ]),
    match("ly1-t5", "Match the Russian with the English.", [
      ["прилавок", "market stall"],
      ["кусок", "a piece"],
      ["свежий", "fresh"],
      ["полкило", "half a kilo"],
    ], { skill: "words" }),
    speak("ly1-t6", "Хочешь попробовать?", "Да, спасибо! Очень вкусно. Можно полкило?", "Yes, thank you! Very tasty. Can I have half a kilo?", {
      help: "Bernard offers you a taste. Answer out loud and buy some.",
    }),
    listen("ly1-t7", "You know this from A1. Listen and choose the best reply.", "Можно картой?", [
      ["Да, конечно.", true],
      ["Полкило сыра.", false],
      ["Вон там.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "basket",
    itemName: "Market basket",
    itemNameRu: "Корзинка",
    ru: "Ура! Корзинка для рынка!",
    en: "Yay! A basket for the market!",
    a11y: "A woven wicker basket with a leather handle stands by the door of a small room under the roof.",
    image: p("reward-1"),
    steps: ["Murzik's room is under the roof, above Bernard's cheese shop.", "Nina gives him a wicker basket.", "“Every cook in Lyon has one,” she says.", "Now Murzik is ready for the market."],
    bridge: "In the evening Nina says: “Tomorrow we're cooking a real Lyon salad. All three of us!”",
  },
};

export const lyon2: Lesson = {
  id: "a2-lyon-2",
  level: "A2",
  cityId: "lyon",
  number: 2,
  title: "Cooking Together",
  minutes: 8,
  goals: ["Name kitchen actions", "Follow a short recipe", "Say what you will do: буду готовить or приготовлю"],
  vocabNote: "Kitchen verbs come in pairs too: готовить / приготовить (to cook / to have it cooked).",
  vocab: [
    v("ly2-1", "готовить", "to cook", "Nina stirs a pot on an old stove, steam everywhere.", "Listen to готовить", p("2-1")),
    v("ly2-2", "резать", "to cut, to slice", "A knife slices a red tomato on a wooden board.", "Listen to резать", p("2-2")),
    v("ly2-3", "варить", "to boil", "Eggs bubble in a pot of boiling water.", "Listen to варить", p("2-3")),
    v("ly2-4", "жарить", "to fry", "Little cubes of bread sizzle in a frying pan.", "Listen to жарить", p("2-4")),
    v("ly2-5", "кастрюля", "saucepan, pot", "A big shiny pot with two handles and a lid.", "Listen to кастрюля", p("2-5")),
    v("ly2-6", "сковородка", "frying pan", "A black frying pan with a long handle.", "Listen to сковородка", p("2-6")),
    v("ly2-7", "соль и перец", "salt and pepper", "A white salt shaker and a black pepper mill side by side.", "Listen to соль и перец", p("2-7")),
    v("ly2-8", "Я приготовлю ужин.", "I'll make dinner.", "Murzik in a big chef's hat, a wooden spoon held high.", "Listen to Я приготовлю ужин", p("2-8")),
  ],
  letters: [
    letter("д → т", "Before к, д sounds like т: ska-va-ROT-ka.", "сковородка", "frying pan"),
    letter("ь", "The soft sign makes the consonant before it soft: соль ends in a soft l.", "соль", "salt", "Compare: угол (corner) and уголь (coal)."),
  ],
  dialogue: {
    title: "A Lyon salad",
    note: "Nina gives everyone a job. Я всё сделаю — “I'll do it all”: сделаю is the future of сделать.",
    lines: [
      line("nina", "Сегодня мы приготовим лионский салат.", "Today we're going to make a Lyon salad."),
      line("murzik", "А что нужно делать?", "And what do we need to do?"),
      line("nina", "Сначала ты будешь резать помидоры. Вот нож.", "First you'll slice the tomatoes. Here's a knife."),
      line("murzik", "А ты?", "And you?"),
      line("nina", "А я буду варить яйца. Вот кастрюля.", "And I'll boil the eggs. Here's the pot."),
      line("tom", "Привет! А что буду делать я?", "Hi! And what will I do?"),
      line("nina", "Ты будешь жарить хлеб. Вот сковородка.", "You'll fry the bread. Here's the frying pan."),
      line("tom", "Хорошо! Я всё сделаю!", "OK! I'll do it all!"),
      line("murzik", "А соль и перец — это моя работа!", "And salt and pepper are my job!"),
    ],
    gist: choice("ly2-d1", "What will Tom do?", [
      ["Fry the bread.", true],
      ["Boil the eggs.", false],
      ["Slice the tomatoes.", false],
    ]),
  },
  grammar: [
    {
      title: "Two futures: буду готовить and приготовлю",
      paragraphs: [
        "Буду + the first verb of the pair talks about the process: я буду резать помидоры — I'll be slicing tomatoes.",
        "The second verb of the pair, in the present form, is already the future with a result: я приготовлю ужин — I'll make dinner (and it will be ready). No буду here!",
      ],
      examples: [
        { ru: "Вечером я буду готовить.", en: "In the evening I'll be cooking." },
        { ru: "Я приготовлю ужин к семи.", en: "I'll have dinner ready by seven." },
      ],
    },
  ],
  tasks: [
    listen("ly2-t1", "Listen. What will Murzik do first?", "Сначала ты будешь резать помидоры.", [
      ["Slice the tomatoes.", true],
      ["Boil the eggs.", false],
      ["Fry the bread.", false],
    ]),
    choice("ly2-t2", "“I'll make dinner (and it will be ready).” Which is right?", [
      ["Я приготовлю ужин.", true],
      ["Я буду приготовлю ужин.", false],
      ["Я приготовил ужин.", false],
    ], { skill: "grammar" }),
    fill("ly2-t3", "Choose the right words: “Tomorrow I'll be working all day.”", "Завтра я", "весь день.", "буду работать", ["буду работать", "поработал", "работал"], { skill: "grammar" }),
    read("ly2-t4", "Read Nina's recipe. What do you do first?", "Лионский салат\n1. Свари яйца.\n2. Нарежь помидоры.\n3. Нарежь хлеб и пожарь его.\n4. Добавь салат, соль и перец.", [
      ["Boil the eggs.", true],
      ["Fry the bread.", false],
      ["Add salt and pepper.", false],
    ]),
    choice("ly2-t5", "Help Tom! He says: «Я будут жарить хлеб». What should he say?", [
      ["Я буду жарить хлеб.", true],
      ["Я будешь жарить хлеб.", false],
      ["Я будем жарить хлеб.", false],
    ], { skill: "grammar" }),
    match("ly2-t6", "Match the Russian with the English.", [
      ["варить", "to boil"],
      ["жарить", "to fry"],
      ["резать", "to slice"],
      ["кастрюля", "saucepan"],
    ], { skill: "words" }),
    speak("ly2-t7", "Что ты будешь делать вечером?", "Вечером я буду готовить. Я приготовлю ужин для друзей.", "In the evening I'll be cooking. I'll make dinner for my friends.", {
      help: "Say what you'll do this evening.",
    }),
  ],
  reward: {
    itemId: "copperpan",
    itemName: "Copper saucepan",
    itemNameRu: "Медная кастрюля",
    ru: "Ого! Медная кастрюля!",
    en: "Wow! A copper saucepan!",
    a11y: "A shiny copper saucepan with a brass handle hangs on a hook on the wall of a small kitchen corner.",
    image: p("reward-2"),
    steps: ["The salad is ready, and it's delicious.", "Nina finds an old copper saucepan in the cupboard.", "“For your corner. Every cook needs a good pan.”", "Murzik hangs it on the wall. It shines like the sun."],
    bridge: "“Tomorrow we'll have your salad for dinner,” says Bernard. “Will you help, chef Murzik?”",
  },
};

export const lyon3: Lesson = {
  id: "a2-lyon-3",
  level: "A2",
  cityId: "lyon",
  number: 3,
  title: "Help Yourself!",
  minutes: 8,
  goals: ["Offer food and accept it", "Say you're full", "Say already and not yet: уже, ещё не"],
  vocabNote: "Угощайся! is for one friend, Угощайтесь! for several people or someone you call вы.",
  vocab: [
    v("ly3-1", "Угощайся! / Угощайтесь!", "Help yourself! (to a friend / to everyone)", "Nina puts a big bowl of salad in the middle of the table, smiling.", "Listen to Угощайся! Угощайтесь", p("3-1")),
    v("ly3-2", "Ещё кусочек?", "Another piece?", "Bernard holds out a basket of bread with a questioning look.", "Listen to Ещё кусочек", p("3-2")),
    v("ly3-3", "Я наелся. / Я наелась.", "I'm full. (man / woman)", "Murzik leans back in his chair and pats his round tummy.", "Listen to Я наелся. Я наелась", p("3-3")),
    v("ly3-4", "Пальчики оближешь!", "It's finger-licking good!", "Tom licks his fingers with his eyes closed in delight.", "Listen to Пальчики оближешь", p("3-4")),
    v("ly3-5", "Как ты это приготовила?", "How did you make this? (to a woman)", "Bernard points at the salad and looks at Nina in wonder.", "Listen to Как ты это приготовила", p("3-5")),
    v("ly3-6", "Я уже сделал. / Я уже сделала.", "I've already done it. (man / woman)", "A clock and a big green tick: done.", "Listen to Я уже сделал. Я уже сделала", p("3-6")),
    v("ly3-7", "ещё не", "not yet", "A clock and an empty circle: not done yet.", "Listen to ещё не", p("3-7")),
    v("ly3-8", "Пирог ещё не готов.", "The pie isn't ready yet.", "A pie in the oven, still pale; Nina shakes her head.", "Listen to Пирог ещё не готов", p("3-8")),
  ],
  letters: [
    letter("-ся", "After a consonant, -ся sounds sa: na-YEL-sa.", "Я наелся.", "I'm full."),
    letter("щ", "щ is a long, soft “shch”: hold it a little.", "угощайся", "help yourself"),
  ],
  dialogue: {
    title: "Dinner at Nina's",
    note: "Пальчики оближешь — literally “you'll lick your fingers”. Russians say it about very tasty food.",
    lines: [
      line("nina", "Угощайтесь! Это лионский салат.", "Help yourselves! It's a Lyon salad."),
      line("tom", "Мм… Пальчики оближешь!", "Mmm… It's finger-licking good!"),
      line("bernard", "Нина, как ты это приготовила?", "Nina, how did you make this?"),
      line("nina", "Это не я! Это Мурзик и Том.", "It wasn't me! It was Murzik and Tom."),
      line("bernard", "Правда? Мурзик, ещё кусочек хлеба?", "Really? Murzik, another piece of bread?"),
      line("murzik", "Нет, спасибо. Я уже наелся.", "No, thank you. I'm already full."),
      line("tom", "А я ещё не наелся! Можно ещё?", "And I'm not full yet! Can I have some more?"),
      line("nina", "Конечно! А пирог ещё не готов. Подождите десять минут.", "Of course! And the pie isn't ready yet. Wait ten minutes."),
    ],
    gist: choice("ly3-d1", "Who made the salad?", [
      ["Murzik and Tom.", true],
      ["Nina.", false],
      ["Bernard.", false],
    ]),
  },
  grammar: [
    {
      title: "Уже and ещё не",
      paragraphs: [
        "Уже means already: я уже наелся — I'm already full. Ещё не means not yet: я ещё не наелся — I'm not full yet.",
        "With уже we usually use the result verb: я уже сделал. Ещё не works with both: я ещё не сделал, я ещё не обедал.",
      ],
      examples: [
        { ru: "Ты уже купил хлеб? — Ещё нет.", en: "Have you bought the bread yet? — Not yet." },
        { ru: "Я ещё не приготовила ужин.", en: "I haven't made dinner yet. (woman)" },
      ],
    },
  ],
  tasks: [
    listen("ly3-t1", "Listen. Is Tom full?", "А я ещё не наелся! Можно ещё?", [
      ["No, he wants more.", true],
      ["Yes, he's full.", false],
      ["He doesn't like the salad.", false],
    ]),
    choice("ly3-t2", "Anna has finished cooking. What does she say?", [
      ["Я уже приготовила ужин.", true],
      ["Я ещё не приготовила ужин.", false],
      ["Я уже приготовил ужин.", false],
    ], { skill: "grammar" }),
    tf("ly3-t3", "Угощайтесь! is what you say to a whole table of guests.", true, "True or false?", { skill: "words" }),
    script("ly3-t4", "You're at Nina's table. Choose your replies.", [
      { speaker: "Nina", text: "Угощайся! Как салат?" },
      { speaker: "You", answer: "Спасибо! Пальчики оближешь!", options: ["Спасибо! Пальчики оближешь!", "Пирог ещё не готов.", "Угощайтесь!"] },
      { speaker: "Nina", text: "Ещё кусочек?" },
      { speaker: "You", answer: "Нет, спасибо, было очень вкусно!", options: ["Нет, спасибо, было очень вкусно!", "Как ты это приготовила?", "Ещё не."] },
    ], { skill: "speaking" }),
    read("ly3-t5", "Read Nina's note on the fridge. Can you eat the pie now?", "Пирог ещё не готов!\nЖдите до восьми.\nСалат — можно. Угощайтесь!", [
      ["No, only after eight. But the salad is OK.", true],
      ["Yes, help yourself.", false],
      ["No, there's no food.", false],
    ]),
    match("ly3-t6", "Match the Russian with the English.", [
      ["Я уже сделал.", "I've already done it."],
      ["ещё не", "not yet"],
      ["Ещё кусочек?", "Another piece?"],
      ["Я наелся.", "I'm full."],
    ], { skill: "words" }),
    speak("ly3-t7", "Ещё кусочек?", "Нет, спасибо, я уже наелся. Было очень вкусно!", "No, thank you, I'm already full. It was very tasty!", {
      help: "Say no politely and thank the cook. A woman says наелась.",
    }),
  ],
  reward: {
    itemId: "tablecloth",
    itemName: "Checked tablecloth",
    itemNameRu: "Скатерть в клетку",
    ru: "Как красиво! Скатерть в клетку!",
    en: "How pretty! A checked tablecloth!",
    a11y: "A small round table covered with a red and white checked tablecloth, by the window under the roof.",
    image: p("reward-3"),
    steps: ["After dinner Nina gives Murzik a red and white tablecloth.", "“Like in a real Lyon bouchon,” she says.", "A bouchon is a small, cosy Lyon restaurant.", "Now Murzik's little table looks like one too."],
    bridge: "Tomorrow is Saturday — the best market day. Bernard has to be there at seven. Will they wake up in time?",
  },
};

export const lyon4: Lesson = {
  id: "a2-lyon-4",
  level: "A2",
  cityId: "lyon",
  number: 4,
  title: "Did We Make It?",
  minutes: 8,
  goals: ["Ask until when something is open", "Say you made it or didn't: успел, не успел", "Say sorry for being late"],
  vocabNote: "Успеть means to make it in time. Опоздать means to be late. Both are “result” verbs.",
  vocab: [
    v("ly4-1", "успеть", "to make it (in time)", "Murzik jumps through a closing door just in time.", "Listen to успеть", p("4-1")),
    v("ly4-2", "Мы успели!", "We made it!", "Murzik and Tom, out of breath, high-five at a market stall.", "Listen to Мы успели", p("4-2")),
    v("ly4-3", "Я не успел. / Я не успела.", "I didn't make it. (man / woman)", "Tom stops in front of a closed shutter, disappointed.", "Listen to Я не успел. Я не успела", p("4-3")),
    v("ly4-4", "опоздать", "to be late", "A big clock showing ten past seven, and Tom running.", "Listen to опоздать", p("4-4")),
    v("ly4-5", "Извини, что я опоздал. / Извини, что я опоздала.", "Sorry I'm late. (man / woman, to a friend)", "Tom bows slightly, out of breath, a hand on his chest.", "Listen to Извини, что я опоздал. Извини, что я опоздала", p("4-5")),
    v("ly4-6", "уже закрыто", "it's already closed", "A shop door with a sign: closed.", "Listen to уже закрыто", p("4-6")),
    v("ly4-7", "ещё открыто", "it's still open", "A stall with an open awning and a smiling seller.", "Listen to ещё открыто", p("4-7")),
    v("ly4-8", "через пять минут", "in five minutes", "A clock with five minutes marked in yellow.", "Listen to через пять минут", p("4-8")),
  ],
  letters: [
    letter("что → што", "In что, ч sounds like ш: shto.", "Что?", "What?", "The same in Извини, что я опоздал."),
  ],
  dialogue: {
    title: "Saturday morning",
    note: "Будильник — alarm clock. Tom's alarm didn't ring, so he's late.",
    lines: [
      line("murzik", "Том, уже семь часов! Бернар уже на рынке!", "Tom, it's seven o'clock already! Bernard's already at the market!"),
      line("tom", "Что? Мой будильник не звонил!", "What? My alarm didn't go off!"),
      line("murzik", "Быстрее! Рынок закрывается в час.", "Hurry! The market closes at one."),
      line("tom", "Ещё шесть часов! Мы успеем.", "That's six more hours! We'll make it."),
      line("murzik", "Нет! Лучший сыр покупают утром.", "No! People buy the best cheese in the morning."),
      line("bernard", "А вот и вы! Почему так поздно?", "There you are! Why so late?"),
      line("tom", "Извини, что я опоздал. Сыр ещё есть?", "Sorry I'm late. Is there any cheese left?"),
      line("bernard", "Есть. Вы успели! Через пять минут всё купят.", "There is. You made it! In five minutes it'll all be sold."),
    ],
    gist: choice("ly4-d1", "Why was Tom late?", [
      ["His alarm didn't go off.", true],
      ["He was at the market.", false],
      ["The market was closed.", false],
    ]),
  },
  grammar: [
    {
      title: "Успел, опоздал: one moment, one result",
      paragraphs: [
        "Успеть and опоздать are about one moment: did you make it or not? Мы успели — we made it. Я опоздал — I was late. Я не успел — I didn't make it.",
        "Their future works like приготовлю: мы успеем — we'll make it; ты опоздаешь — you'll be late.",
      ],
      examples: [
        { ru: "Быстрее, а то мы опоздаем!", en: "Hurry, or we'll be late!" },
        { ru: "Она успела на поезд.", en: "She made the train." },
      ],
    },
  ],
  tasks: [
    listen("ly4-t1", "Listen. When does the market close?", "Рынок закрывается в час.", [
      ["At one o'clock.", true],
      ["At seven o'clock.", false],
      ["In five minutes.", false],
    ]),
    choice("ly4-t2", "You ran and got to the shop in time. What do you say?", [
      ["Я успел! / Я успела!", true],
      ["Я опоздал! / Я опоздала!", false],
      ["Уже закрыто!", false],
    ], { skill: "grammar" }),
    script("ly4-t3", "Messages: you're late to meet Tom. Choose your replies.", [
      { speaker: "Tom", text: "Ты где? Я уже у кафе." },
      { speaker: "You", answer: "Извини, я опаздываю! Буду через пять минут.", options: ["Извини, я опаздываю! Буду через пять минут.", "Мы успели!", "Уже закрыто."] },
      { speaker: "Tom", text: "Хорошо. Кафе ещё открыто." },
      { speaker: "You", answer: "Отлично! Скоро буду.", options: ["Отлично! Скоро буду.", "Я наелся.", "Попробуй!"] },
    ], { skill: "reading" }),
    read("ly4-t4", "It's Saturday, 12:50. Read the sign. Can you still buy cheese?", "СЫР У БЕРНАРА\nСуббота: 7:00–13:00", [
      ["Yes, it's still open for ten minutes.", true],
      ["No, it's already closed.", false],
      ["No, it opens at seven.", false],
    ]),
    fill("ly4-t5", "Choose the right word: “Hurry, or we'll be late!”", "Быстрее, а то мы", "!", "опоздаем", ["опоздаем", "опоздали", "успеем"], { skill: "grammar" }),
    match("ly4-t6", "Match the Russian with the English.", [
      ["успеть", "to make it"],
      ["опоздать", "to be late"],
      ["уже закрыто", "already closed"],
      ["ещё открыто", "still open"],
    ], { skill: "words" }),
    speak("ly4-t7", "Почему так поздно?", "Извини, что я опоздал. Мой будильник не звонил!", "Sorry I'm late. My alarm didn't go off!", {
      help: "Your friend asks why you're late. Say sorry and explain. A woman says опоздала.",
    }),
  ],
  reward: {
    itemId: "hentimer",
    itemName: "Kitchen timer",
    itemNameRu: "Кухонный таймер",
    ru: "Ха-ха! Таймер-курочка!",
    en: "Ha-ha! A hen-shaped timer!",
    a11y: "A little yellow kitchen timer shaped like a hen sits on the windowsill next to the copper pan.",
    image: p("reward-4"),
    steps: ["Bernard laughs and gives Tom a kitchen timer shaped like a hen.", "“It rings loudly. You'll never be late again!”", "Tom winds it up. Dzzzzin!", "Murzik puts the hen on his windowsill."],
    bridge: "Nina has an idea: “Let's have a big dinner on Sunday. Invite your friends, Murzik!”",
  },
};

export const lyon5: Lesson = {
  id: "a2-lyon-5",
  level: "A2",
  cityId: "lyon",
  number: 5,
  title: "A Dinner for Friends",
  minutes: 8,
  goals: ["Invite people over", "Set the table", "Say who will do what: позову, накрою, куплю"],
  vocabNote: "Приходи к нам! is to one friend; Приходите к нам! to several people or someone you call вы.",
  vocab: [
    v("ly5-1", "позвать гостей", "to invite guests", "Murzik on the phone, a list of names in his paw.", "Listen to позвать гостей", p("5-1")),
    v("ly5-2", "Приходи к нам! / Приходите к нам!", "Come over to ours! (to a friend / to several people)", "Nina waves from an open door, warm light behind her.", "Listen to Приходи к нам! Приходите к нам", p("5-2")),
    v("ly5-3", "накрыть на стол", "to set the table", "A table with a tablecloth, plates and glasses being put in place.", "Listen to накрыть на стол", p("5-3")),
    v("ly5-4", "тарелка", "plate", "A white plate with a blue flower pattern.", "Listen to тарелка", p("5-4")),
    v("ly5-5", "вилка", "fork", "A silver fork on a folded napkin.", "Listen to вилка", p("5-5")),
    v("ly5-6", "стакан", "glass, tumbler", "A clear glass of water with a slice of lemon.", "Listen to стакан", p("5-6")),
    v("ly5-7", "салфетка", "napkin", "A red napkin folded into a little fan.", "Listen to салфетка", p("5-7")),
    v("ly5-8", "Я всё сделаю!", "I'll do it all!", "Tom rolls up his sleeves, ready for work.", "Listen to Я всё сделаю", p("5-8")),
  ],
  letters: [
    letter("в → ф", "Before к, т, с or п, в sounds like ф: в кафе sounds f-ka-FE.", "в кафе", "in a café"),
    letter("ё", "ё is always stressed: всё — fsyo.", "всё", "everything"),
  ],
  dialogue: {
    title: "Who does what?",
    note: "Позову, накрою, куплю, сделаю — all future: the job will be done.",
    lines: [
      line("nina", "В воскресенье у нас ужин. Мурзик, кого ты позовёшь?", "On Sunday we're having a dinner. Murzik, who will you invite?"),
      line("murzik", "Я позову соседей и Пьера с рынка.", "I'll invite the neighbours and Pierre from the market."),
      line("nina", "Хорошо. А кто накроет на стол?", "Good. And who will set the table?"),
      line("tom", "Я! Я всё сделаю! Где тарелки?", "Me! I'll do it all! Where are the plates?"),
      line("nina", "Тарелки в шкафу, вилки и ножи — в ящике.", "Plates are in the cupboard, forks and knives are in the drawer."),
      line("tom", "А стаканы? А салфетки?", "And the glasses? And the napkins?"),
      line("nina", "Стаканов мало. Бернар купит ещё шесть.", "We don't have many glasses. Bernard will buy six more."),
      line("bernard", "Куплю! И сыр принесу. Лучший!", "I'll buy them! And I'll bring cheese. The best one!"),
    ],
    gist: choice("ly5-d1", "Who will set the table?", [
      ["Tom.", true],
      ["Murzik.", false],
      ["Bernard.", false],
    ]),
  },
  grammar: [
    {
      title: "Who will do what: позову, накрою, куплю",
      paragraphs: [
        "When you share jobs, use the “result” verbs in the future: я позову (I'll invite), ты накроешь (you'll set), он купит (he'll buy).",
        "Their endings are like the present you know: я позову, ты позовёшь, он позовёт; я куплю, ты купишь, он купит.",
      ],
      examples: [
        { ru: "Я позову друзей, а ты купишь торт.", en: "I'll invite friends, and you'll buy a cake." },
        { ru: "Кто накроет на стол?", en: "Who will set the table?" },
      ],
    },
  ],
  tasks: [
    listen("ly5-t1", "Listen. What will Bernard buy?", "Стаканов мало. Бернар купит ещё шесть.", [
      ["Six more glasses.", true],
      ["Six plates.", false],
      ["Cheese and bread.", false],
    ]),
    choice("ly5-t2", "“Who will invite the guests?” Which is right?", [
      ["Кто позовёт гостей?", true],
      ["Кто звал гостей?", false],
      ["Кто будет позвать гостей?", false],
    ], { skill: "grammar" }),
    read("ly5-t3", "Read Nina's list. What is Tom's job?", "Воскресенье, ужин в 19:00\nМурзик — позовёт гостей\nТом — накроет на стол\nБернар — купит стаканы и сыр\nНина — приготовит курицу", [
      ["Setting the table.", true],
      ["Buying glasses.", false],
      ["Cooking the chicken.", false],
    ]),
    choice("ly5-t4", "Help Tom! He says: «Я накрою на стол и куплю салфетка». What should he say?", [
      ["…и куплю салфетки.", true],
      ["…и купил салфетка.", false],
      ["…и купить салфетки.", false],
    ], { skill: "grammar" }),
    match("ly5-t5", "Match the Russian with the English.", [
      ["тарелка", "plate"],
      ["вилка", "fork"],
      ["стакан", "glass"],
      ["салфетка", "napkin"],
    ], { skill: "words" }),
    tf("ly5-t6", "Приходите к нам! can be said to several friends.", true, "True or false?", { skill: "words" }),
    speak("ly5-t7", "Кто что будет делать?", "Я позову гостей, а ты накроешь на стол.", "I'll invite the guests, and you'll set the table.", {
      help: "Share the jobs for your dinner party out loud.",
    }),
  ],
  reward: {
    itemId: "flowerplates",
    itemName: "Plates with flowers",
    itemNameRu: "Тарелки с цветами",
    ru: "Какие красивые тарелки!",
    en: "What beautiful plates!",
    a11y: "Two white plates with painted blue flowers stand on a little shelf above Murzik's table.",
    image: p("reward-5"),
    steps: ["The Sunday dinner is a big success.", "The neighbours bring flowers; Pierre brings a big apple tart.", "Nina gives Murzik two plates with blue flowers.", "“For your guests. One day you'll have your own home.”"],
    bridge: "After dinner Bernard looks at Murzik for a long time. “Ginger fur… a scarf… You remind me of someone.”",
  },
};

export const lyon6: Lesson = {
  id: "a2-lyon-6",
  level: "A2",
  cityId: "lyon",
  number: 6,
  title: "The Ginger Cat",
  minutes: 8,
  goals: ["Talk about memories", "Say often and once: часто + рисовала, однажды + нарисовала", "Describe what someone used to do"],
  vocabNote: "Помнить — to remember (to keep in memory). Вспомнить — to remember suddenly, to recall.",
  vocab: [
    v("ly6-1", "помнить", "to remember", "Bernard looks at an old photo, smiling.", "Listen to помнить", p("6-1")),
    v("ly6-2", "Я вспомнил! / Я вспомнила!", "I've remembered! (man / woman)", "A light bulb shines above Bernard's head.", "Listen to Я вспомнил! Я вспомнила", p("6-2")),
    v("ly6-3", "однажды", "once, one day", "A single star on a calendar page.", "Listen to однажды", p("6-3")),
    v("ly6-4", "часто", "often", "Many little stars on a calendar page.", "Listen to часто", p("6-4")),
    v("ly6-5", "нарисовать портрет", "to draw a portrait", "A paw holding a pencil over a sketch of a smiling face.", "Listen to нарисовать портрет", p("6-5")),
    v("ly6-6", "рисунок", "a drawing", "A pencil drawing of the market with the cheese stall.", "Listen to рисунок", p("6-6")),
    v("ly6-7", "лет тридцать назад", "about thirty years ago", "An old faded photo of the market, black and white.", "Listen to лет тридцать назад", p("6-7")),
    v("ly6-8", "Она всегда улыбалась.", "She was always smiling.", "The outline of a ginger cat with a big smile, seen from behind.", "Listen to Она всегда улыбалась", p("6-8")),
  ],
  letters: [
    letter("дц → ц", "In тридцать, дц sounds like one ц: TRI-tsat'.", "тридцать", "thirty", "The same in двадцать: DVA-tsat'."),
  ],
  dialogue: {
    title: "Bernard remembers",
    note: "Bernard says хранил — he kept it (for a long time, so the first verb of the pair). And Возьми — take it.",
    lines: [
      line("murzik", "Бернар, ты давно работаешь на рынке?", "Bernard, have you worked at the market for long?"),
      line("bernard", "Сорок лет! Я помню всех.", "Forty years! I remember everyone."),
      line("murzik", "Может быть, ты помнишь рыжую кошку? Её зовут Ася. Она рисует.", "Maybe you remember a ginger cat? Her name is Asya. She draws."),
      line("bernard", "Рыжая кошка… Подожди… Я вспомнил!", "A ginger cat… Wait… I remember!"),
      line("bernard", "Лет тридцать назад она часто приходила на рынок и рисовала.", "About thirty years ago she often came to the market and drew."),
      line("nina", "А однажды она нарисовала Бернара!", "And once she drew Bernard!"),
      line("bernard", "Да! Она всегда улыбалась. А однажды она забыла здесь платок.", "Yes! She was always smiling. And one day she left her scarf here."),
      line("murzik", "Платок? Он у тебя?", "A scarf? You have it?"),
      line("bernard", "Тридцать лет я его хранил. Возьми. Это её.", "I've kept it for thirty years. Take it. It's hers."),
    ],
    gist: choice("ly6-d1", "What did Asya leave at the market?", [
      ["A silk scarf.", true],
      ["A drawing.", false],
      ["A photo.", false],
    ]),
  },
  grammar: [
    {
      title: "Часто рисовала, однажды нарисовала",
      paragraphs: [
        "Часто, всегда, каждый день — something happened many times: use the first verb of the pair. Она часто рисовала — she often drew.",
        "Однажды — it happened once: use the “result” verb. Однажды она нарисовала Бернара — once she drew Bernard.",
      ],
      examples: [
        { ru: "Он часто покупал здесь сыр.", en: "He often bought cheese here." },
        { ru: "Однажды он купил весь сыр!", en: "Once he bought all the cheese!" },
      ],
    },
  ],
  tasks: [
    listen("ly6-t1", "Listen. How often did Asya come to the market?", "Лет тридцать назад она часто приходила на рынок.", [
      ["Often, about thirty years ago.", true],
      ["Once, thirty years ago.", false],
      ["Every day, last year.", false],
    ]),
    choice("ly6-t2", "“Once she drew Bernard.” Which is right?", [
      ["Однажды она нарисовала Бернара.", true],
      ["Однажды она рисовала Бернара.", false],
      ["Часто она нарисовала Бернара.", false],
    ], { skill: "grammar" }),
    fill("ly6-t3", "Choose the right word: “She always smiled.”", "Она всегда", ".", "улыбалась", ["улыбалась", "улыбнулась", "улыбнётся"], { skill: "grammar" }),
    choice("ly6-t4", "Detective! Listen to the dialogue again in your head. What clue about Asya did Murzik get?", [
      ["She was in Lyon about thirty years ago and drew at the market.", true],
      ["She lives in Lyon now.", false],
      ["She sold cheese with Bernard.", false],
    ], { skill: "listening" }),
    read("ly6-t5", "Murzik finds an old note in the scarf. Where was Asya going next?", "Купить сыр у Бернара!\nЗавтра я еду к морю, в Барселону.\nА.", [
      ["To the sea, to Barcelona.", true],
      ["Back to Paris.", false],
      ["To the market.", false],
    ]),
    match("ly6-t6", "Match the Russian with the English.", [
      ["помнить", "to remember"],
      ["часто", "often"],
      ["однажды", "once"],
      ["рисунок", "a drawing"],
    ], { skill: "words" }),
    speak("ly6-t7", "Что ты часто делал в детстве?", "В детстве я часто рисовал. А однажды я нарисовал кота!", "As a child I often drew. And once I drew a cat!", {
      help: "Say what you often did as a child, and one thing you did once. A woman says рисовала, нарисовала.",
    }),
  ],
  reward: {
    itemId: "silkscarf",
    itemName: "Asya's silk scarf",
    itemNameRu: "Шёлковый платок",
    ru: "Это платок бабушки Аси!",
    en: "It's Grandma Asya's scarf!",
    a11y: "A soft silk scarf with little painted cats and boats lies folded on Murzik's pillow under the roof.",
    image: p("reward-6"),
    steps: ["Lyon is famous for its silk.", "Asya bought this scarf here thirty years ago.", "On it — little painted cats and boats.", "It still smells a little of paint. Murzik holds it close."],
    bridge: "Tomorrow is the last day in Lyon. Nina is cooking a farewell dinner — and she has a surprise.",
  },
};

export const lyon7: Lesson = {
  id: "a2-lyon-7",
  level: "A2",
  cityId: "lyon",
  number: 7,
  title: "Lyon Exam",
  minutes: 9,
  goals: ["Thank your hosts", "Say you'll miss someone", "Show what you learned in Lyon"],
  vocabNote: "Lesson 7 is the city exam: a longer listening story and a review of everything from Lyon.",
  vocab: [
    v("ly7-1", "Спасибо за ужин!", "Thank you for dinner!", "Murzik bows to Nina at the table, his paw on his heart.", "Listen to Спасибо за ужин", p("7-1")),
    v("ly7-2", "На здоровье!", "You're welcome! (after food)", "Nina smiles warmly and waves her hand.", "Listen to На здоровье", p("7-2")),
    v("ly7-3", "скучать", "to miss someone", "Murzik looks out of a train window, a little sad.", "Listen to скучать", p("7-3")),
    v("ly7-4", "Я буду по вам скучать.", "I'll miss you (all).", "Nina hugs Murzik at the door.", "Listen to Я буду по вам скучать", p("7-4")),
    v("ly7-5", "Приезжай ещё!", "Come again!", "Bernard waves with both hands from the shop door.", "Listen to Приезжай ещё", p("7-5")),
    v("ly7-6", "Обнимаю!", "Hugs! (lit. I hug you)", "Bernard gives Murzik and Tom a big bear hug.", "Listen to Обнимаю", p("7-6")),
    v("ly7-7", "на память", "as a keepsake, to remember by", "Nina puts a small wrapped gift into Murzik's paws.", "Listen to на память", p("7-7")),
    v("ly7-8", "книга рецептов", "recipe book", "An old notebook full of handwritten recipes and drawings.", "Listen to книга рецептов", p("7-8")),
  ],
  letters: [
    letter("Счастливого", "сч sounds like щ, т is silent, and -ого sounds -ова: shchis-LI-va-va.", "Счастливого пути!", "Have a good trip!", "The stress is on ли: счастли́вого."),
  ],
  dialogue: {
    title: "The farewell dinner",
    note: "На здоровье after food means “you're welcome, it was a pleasure”. Not as a toast!",
    lines: [
      line("nina", "Угощайтесь! Сегодня всё, что вы любите.", "Help yourselves! Today it's everything you love."),
      line("murzik", "Спасибо за ужин, Нина! И за всё!", "Thank you for dinner, Nina! And for everything!"),
      line("nina", "На здоровье! А это тебе на память. Моя книга рецептов.", "You're welcome! And this is for you, to remember us by. My recipe book."),
      line("murzik", "Твоя книга? Спасибо! Я буду готовить по ней.", "Your book? Thank you! I'll cook from it."),
      line("bernard", "А куда вы поедете?", "And where will you go?"),
      line("murzik", "В Барселону. Ася тоже туда поехала.", "To Barcelona. Asya went there too."),
      line("tom", "Мы уже купили билеты. Поезд в девять.", "We've already bought the tickets. The train is at nine."),
      line("bernard", "Приезжайте ещё! Мы будем по вам скучать. Обнимаю!", "Come again! We'll miss you. Hugs!"),
      line("nina", "Счастливого пути!", "Have a good trip!"),
    ],
    gist: choice("ly7-d1", "What does Nina give Murzik?", [
      ["Her recipe book.", true],
      ["A silk scarf.", false],
      ["Train tickets.", false],
    ]),
  },
  grammar: [
    {
      title: "Lyon review: the two verbs of a pair",
      paragraphs: [
        "Process, often, always: покупал, буду готовить, часто рисовала. Result, once, done: купил, приготовлю, однажды нарисовала, уже сделал.",
        "Ask yourself: is it about the action — or about the result?",
      ],
      examples: [
        { ru: "Мы уже купили билеты.", en: "We've already bought the tickets." },
        { ru: "Я буду готовить по твоей книге.", en: "I'll cook from your book." },
      ],
    },
  ],
  tasks: [
    listen("ly7-t1", "Audio story: Nina tells how she met Bernard. Listen. Where did they meet?", "Сорок лет назад я приехала в Лион. Я часто ходила на рынок. Однажды я купила сыр у одного молодого человека. Сыр был очень вкусный! Я пришла ещё раз, потом ещё. Это был Бернар. Через год мы поженились.", [
      ["At the market: she bought cheese from him.", true],
      ["At a restaurant in Paris.", false],
      ["On a train to Barcelona.", false],
    ]),
    choice("ly7-t2", "In Nina's story, how often did she go to the market?", [
      ["Often.", true],
      ["Once.", false],
      ["Never.", false],
    ], { skill: "listening" }),
    choice("ly7-t3", "Which sentence is about a result?", [
      ["Мы уже купили билеты.", true],
      ["Мы часто покупали билеты.", false],
      ["Мы будем покупать билеты.", false],
    ], { skill: "grammar" }),
    read("ly7-t4", "Read the ticket. When does the train leave?", "ЛИОН → БАРСЕЛОНА\nОтправление: 09:00\nВагон 3, место 12", [
      ["At nine o'clock.", true],
      ["At three o'clock.", false],
      ["At twelve o'clock.", false],
    ]),
    script("ly7-t5", "Say goodbye to Nina and Bernard.", [
      { speaker: "Nina", text: "Это тебе на память." },
      { speaker: "You", answer: "Спасибо! Я буду по вам скучать.", options: ["Спасибо! Я буду по вам скучать.", "Ещё кусочек?", "Уже закрыто."] },
      { speaker: "Bernard", text: "Приезжай ещё!" },
      { speaker: "You", answer: "Обязательно приеду!", options: ["Обязательно приеду!", "Я не успел.", "Попробуй!"] },
      { speaker: "Nina", text: "Счастливого пути!" },
      { speaker: "You", answer: "Спасибо за всё!", options: ["Спасибо за всё!", "На здоровье!", "Я наелся."] },
    ], { skill: "review" }),
    match("ly7-t6", "Lyon review: match the Russian with the English.", [
      ["прилавок", "market stall"],
      ["сковородка", "frying pan"],
      ["успеть", "to make it"],
      ["скучать", "to miss someone"],
    ], { skill: "review" }),
    speak("ly7-t7", "Спасибо за ужин!", "На здоровье! Приезжай ещё. Я буду по тебе скучать.", "You're welcome! Come again. I'll miss you.", {
      help: "Your guest thanks you for dinner. Answer like Nina.",
    }),
  ],
  reward: {
    itemId: "herbs",
    itemName: "Pots of herbs",
    itemNameRu: "Горшочки с травами",
    ru: "Как пахнет! Травы в горшочках!",
    en: "What a smell! Pots of herbs!",
    a11y: "Three little clay pots with fresh basil, thyme and parsley stand in a row on the windowsill under the roof.",
    image: p("reward-7"),
    steps: ["Bernard brings three little pots of herbs.", "Basil, thyme and parsley.", "“A cook always has fresh herbs,” says Nina.", "Murzik's room under the roof smells like a real kitchen now."],
  },
};

export const lyonLessons: Lesson[] = [lyon1, lyon2, lyon3, lyon4, lyon5, lyon6, lyon7];
