import { pic } from "../art";
import { choice, fill, letter, line, listen, match, read, script, speak, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Naples · «Каникулы с семьёй» · A2 lessons 1–7.
 * Aunt Olya flies in from Rome with Barsik and Musya for the school holidays. A flat with a balcony over the bay,
 * holiday plans, a family pizzeria, a day in Pompeii, the beach with the children. Musya, who loves drawing,
 * asks Murzik about his grandmother Asya and draws her from his stories — without ever having seen her.
 * Then Aunt Olya and the children go home, and Murzik and Tom take the train to Bari and the night ferry to Dubrovnik.
 * Grammar: свой (one's own) and себя (oneself): свой чемодан, закажи себе, с собой, веди себя хорошо.
 */

const p = (name: string) => pic(`naples/${name}`);

export const naples1: Lesson = {
  id: "a2-naples-1",
  level: "A2",
  cityId: "naples",
  number: 1,
  title: "Holidays!",
  minutes: 8,
  goals: ["Welcome family and settle in", "Say whose things are whose", "Use свой: my own, your own, his own"],
  vocabNote: "Свой means “one's own” — it points back to the subject: Барсик несёт свой чемодан (Barsik carries his own suitcase).",
  vocab: [
    v("np1-1", "школьные каникулы", "the school holidays", "Barsik and Musya run out of the arrivals hall with backpacks.", "Listen to школьные каникулы", p("1-1")),
    v("np1-2", "Каждый несёт свой чемодан.", "Everyone carries their own suitcase.", "Four cats and Tom, each pulling a suitcase.", "Listen to Каждый несёт свой чемодан", p("1-2")),
    v("np1-3", "квартира с балконом", "a flat with a balcony", "A small balcony with washing lines, over a blue bay.", "Listen to квартира с балконом", p("1-3")),
    v("np1-4", "вид на залив", "a view of the bay", "A wide blue bay with a volcano on the far side.", "Listen to вид на залив", p("1-4")),
    v("np1-5", "Где моя кровать?", "Where's my bed?", "Musya stands on a bed, hands on her hips.", "Listen to Где моя кровать", p("1-5")),
    v("np1-6", "У каждого своя кровать.", "Everyone has their own bed.", "Five beds with name signs drawn by Musya.", "Listen to У каждого своя кровать", p("1-6")),
    v("np1-7", "Разбирайте вещи!", "Unpack your things!", "Aunt Olya points at the open suitcases.", "Listen to Разбирайте вещи", p("1-7")),
    v("np1-8", "Как я по вам соскучился (соскучилась)!", "I've missed you so much!", "Murzik hugs Barsik and Musya at once.", "Listen to Как я по вам соскучился (соскучилась)", p("1-8")),
  ],
  letters: [
    letter("каникулы", "ka-NEE-ku-ly: stress on НИ; always plural.", "летние каникулы", "the summer holidays"),
    letter("соскучился", "sas-KU-chil-sya: stress on КУ.", "Я соскучился (соскучилась).", "I've missed you."),
  ],
  dialogue: {
    title: "At the airport",
    note: "Aunt Olya is Barsik and Musya's mum. Murzik and Tom stayed with them in Rome. Musya is five and loves drawing.",
    lines: [
      line("musya", "Мурзик! Мурзик! У нас каникулы!", "Murzik! Murzik! We're on holiday!"),
      line("murzik", "Муся! Барсик! Как я по вам соскучился!", "Musya! Barsik! I've missed you so much!"),
      line("aunt", "Так, дети, каждый несёт свой чемодан. Барсик, это твой рюкзак или мой?", "Right, children, everyone carries their own suitcase. Barsik, is this your backpack or mine?"),
      line("barsik", "Мой. Но он тяжёлый…", "Mine. But it's heavy…"),
      line("tom", "Мы сняли квартиру с балконом и видом на залив. У каждого своя кровать!", "We've rented a flat with a balcony and a view of the bay. Everyone has their own bed!"),
      line("musya", "А где моя кровать? Я хочу у окна!", "And where's my bed? I want it by the window!"),
      line("aunt", "Сначала доедем. Потом разбирайте вещи — каждый свои!", "First let's get there. Then unpack your things — everyone their own!"),
    ],
    gist: choice("np1-d1", "Who arrives in Naples?", [
      ["Aunt Olya with Barsik and Musya.", true],
      ["Lev and Asya.", false],
      ["Dolores and Marisol.", false],
    ]),
  },
  grammar: [
    {
      title: "Свой: one's own",
      paragraphs: [
        "Свой (своя, своё, свои) means “my / your / his / her / our / their own” — it always refers back to the subject of the sentence: Я несу свой чемодан. Ты несёшь свой. Барсик несёт свой.",
        "Compare: Барсик несёт свой рюкзак (his own). Барсик несёт его рюкзак (someone else's — another boy's).",
      ],
      examples: [
        { ru: "Муся рисует свою кошку.", en: "Musya is drawing her (own) cat." },
        { ru: "Каждый взял свои вещи.", en: "Everyone took their own things." },
      ],
    },
  ],
  tasks: [
    listen("np1-t1", "Listen. What does the flat have?", "Мы сняли квартиру с балконом и видом на залив.", [
      ["A balcony with a view of the bay.", true],
      ["A garden with a pool.", false],
      ["A view of the station.", false],
    ]),
    choice("np1-t2", "“Musya is drawing her (own) cat.” Which is right?", [
      ["Муся рисует свою кошку.", true],
      ["Муся рисует свой кошку.", false],
      ["Муся рисует своя кошка.", false],
    ], { skill: "grammar" }),
    fill("np1-t3", "Choose the right form: “Everyone took their own things.”", "Каждый взял", "вещи.", "свои", ["свои", "свой", "своё"], { skill: "grammar" }),
    read("np1-t4", "Read Musya's signs on the doors. Whose room is next to the bathroom?", "1 — МАМА\n2 — БАРСИК И МУСЯ (у окна!)\n3 — МУРЗИК И ТОМ\nВанная — рядом с комнатой 3", [
      ["Murzik and Tom's.", true],
      ["Mum's.", false],
      ["Barsik and Musya's.", false],
    ]),
    match("np1-t5", "Match the Russian with the English.", [
      ["школьные каникулы", "the school holidays"],
      ["вид на залив", "a view of the bay"],
      ["Разбирайте вещи!", "Unpack your things!"],
      ["квартира с балконом", "a flat with a balcony"],
    ], { skill: "words" }),
    tf("np1-t6", "Barsik says the backpack is his mum's.", false, "True or false?", { skill: "listening" }),
    speak("np1-t7", "Ты едешь в отпуск с семьёй. Кто что несёт?", "Каждый несёт свой чемодан. Я несу свой рюкзак, а мама — свою сумку.", "Everyone carries their own suitcase. I'm carrying my backpack, and Mum her bag.", {
      help: "Say out loud who carries what. Use свой.",
    }),
  ],
  reward: {
    itemId: "familyphoto2",
    itemName: "Family photo at the airport",
    itemNameRu: "Семейное фото",
    ru: "Вся семья — вместе!",
    en: "The whole family — together!",
    a11y: "A framed photo stands on the windowsill: Aunt Olya, Barsik, Musya, Murzik and Tom laughing in front of the arrivals board.",
    image: p("reward-1"),
    steps: ["Tom takes a photo of everyone at the airport.", "Barsik is yawning, Musya is jumping.", "In the flat Murzik puts the photo on the windowsill.", "Behind it — the bay and the volcano."],
    bridge: "In the evening everyone sits on the balcony with a map. A week in Naples — and everyone wants something different.",
  },
};

export const naples2: Lesson = {
  id: "a2-naples-2",
  level: "A2",
  cityId: "naples",
  number: 2,
  title: "Holiday Plans",
  minutes: 8,
  goals: ["Make plans as a family", "Suggest and choose", "Use себе: for oneself"],
  vocabNote: "Себя / себе — oneself: Выбери себе… — Choose for yourself… It never changes for person: я выбираю себе, ты выбираешь себе.",
  vocab: [
    v("np2-1", "Что будем делать?", "What shall we do?", "Everyone sits round a map on the balcony table.", "Listen to Что будем делать", p("2-1")),
    v("np2-2", "подняться на вулкан", "to climb the volcano", "A path winding up a grey volcano.", "Listen to подняться на вулкан", p("2-2")),
    v("np2-3", "поехать на остров", "to go to the island", "A ferry heading to a rocky green island.", "Listen to поехать на остров", p("2-3")),
    v("np2-4", "Каждый выбирает себе одно место.", "Everyone chooses one place for themselves.", "Each paw points at a different spot on the map.", "Listen to Каждый выбирает себе одно место", p("2-4")),
    v("np2-5", "Давайте проголосуем!", "Let's vote!", "Paws and hands raised in the air.", "Listen to Давайте проголосуем", p("2-5")),
    v("np2-6", "Я за!", "I'm for it!", "Musya raises both paws.", "Listen to Я за", p("2-6")),
    v("np2-7", "Я против.", "I'm against it.", "Barsik crosses his arms.", "Listen to Я против", p("2-7")),
    v("np2-8", "Большинство за.", "The majority is for it.", "Aunt Olya counts raised paws and hands.", "Listen to Большинство за", p("2-8")),
  ],
  letters: [
    letter("проголосуем", "pra-ga-la-SU-yem: stress on СУ; every unstressed о sounds like а.", "Давайте проголосуем!", "Let's vote!"),
    letter("вулкан", "vul-KAN: stress on the end.", "на вулкан", "up the volcano"),
  ],
  dialogue: {
    title: "On the balcony",
    note: "The volcano across the bay is Vesuvius. People walk up to its crater on a marked path.",
    lines: [
      line("aunt", "Так, что будем делать на этой неделе? Каждый выбирает себе одно место.", "Right, what shall we do this week? Everyone chooses one place for themselves."),
      line("barsik", "Я выбираю себе… пляж. И диван.", "I'm choosing… the beach. And the sofa."),
      line("musya", "А я хочу подняться на вулкан!", "And I want to climb the volcano!"),
      line("tom", "Я хочу поехать на остров — там красивые скалы для фото.", "I want to go to the island — there are beautiful cliffs for photos."),
      line("murzik", "А я — в Помпеи. Давайте проголосуем! Кто за Помпеи?", "And I want Pompeii. Let's vote! Who's for Pompeii?"),
      line("musya", "Я за! Я против дивана.", "I'm for it! I'm against the sofa."),
      line("aunt", "Большинство за! Решено: Помпеи, пляж, вулкан и остров. А диван — вечером.", "The majority is for it! It's decided: Pompeii, the beach, the volcano and the island. And the sofa — in the evening."),
    ],
    gist: choice("np2-d1", "What does Barsik want?", [
      ["The beach and the sofa.", true],
      ["To climb the volcano.", false],
      ["To go to the island.", false],
    ]),
  },
  grammar: [
    {
      title: "Себе: for oneself",
      paragraphs: [
        "Себе (dative of себя) — for oneself, to oneself: Я выбираю себе место. Купи себе мороженое! Она взяла себе самую большую комнату.",
        "Себя has no nominative and is the same for all persons: я, ты, он, мы — всегда себе.",
      ],
      examples: [
        { ru: "Барсик купил себе новые солнечные очки.", en: "Barsik bought himself new sunglasses." },
        { ru: "Выбери себе любое мороженое!", en: "Choose any ice cream you like (for yourself)!" },
      ],
    },
  ],
  tasks: [
    listen("np2-t1", "Listen. Why does Tom want to go to the island?", "Я хочу поехать на остров — там красивые скалы для фото.", [
      ["For photos of the beautiful cliffs.", true],
      ["To swim.", false],
      ["To see a museum.", false],
    ]),
    choice("np2-t2", "“Barsik bought himself new sunglasses.” Which is right?", [
      ["Барсик купил себе новые солнечные очки.", true],
      ["Барсик купил себя новые солнечные очки.", false],
      ["Барсик купил ему новые солнечные очки.", false],
    ], { skill: "grammar" }),
    fill("np2-t3", "Choose the right word: “Choose any ice cream (for yourself)!”", "Выбери", "любое мороженое!", "себе", ["себе", "себя", "свой"], { skill: "grammar" }),
    read("np2-t4", "Read Aunt Olya's plan for the week. When are they going to Pompeii?", "ПЛАН НА НЕДЕЛЮ\nПн — пицца и старый город\nВт — Помпеи\nСр — вулкан\nЧт — остров\nПт — пляж", [
      ["On Tuesday.", true],
      ["On Monday.", false],
      ["On Thursday.", false],
    ]),
    match("np2-t5", "Match the Russian with the English.", [
      ["Давайте проголосуем!", "Let's vote!"],
      ["Я за!", "I'm for it!"],
      ["Я против.", "I'm against it."],
      ["Большинство за.", "The majority is for it."],
    ], { skill: "words" }),
    tf("np2-t6", "Musya wants to climb the volcano.", true, "True or false?", { skill: "listening" }),
    speak("np2-t7", "У тебя неделя отпуска. Что ты выбираешь себе?", "Я выбираю себе море и хорошую книгу. А ещё одну экскурсию — в старый город.", "I choose the sea and a good book for myself. And one tour — to the old town.", {
      help: "Say out loud what you choose for yourself.",
    }),
  ],
  reward: {
    itemId: "holidayplanner",
    itemName: "Holiday plan on the fridge",
    itemNameRu: "План на неделю",
    ru: "План готов — решено!",
    en: "The plan is ready — it's decided!",
    a11y: "A sheet of paper with a week's plan and Musya's little drawings — a volcano, a pizza, a ruin, an island — is stuck to the fridge with a lemon magnet.",
    image: p("reward-2"),
    steps: ["Aunt Olya writes the plan for the week.", "Musya draws a picture next to each day.", "Barsik draws a sofa next to every evening.", "The plan goes on the fridge with a lemon magnet."],
    bridge: "“А ужинаем сегодня в пиццерии,” says Aunt Olya. “В Неаполе — только пицца!”",
  },
};

export const naples3: Lesson = {
  id: "a2-naples-3",
  level: "A2",
  cityId: "naples",
  number: 3,
  title: "At the Pizzeria",
  minutes: 8,
  goals: ["Order for a family", "Say what you want for yourself", "Use себе and свой at the table"],
  vocabNote: "Закажи себе — order for yourself. Каждый ест свою пиццу — everyone eats their own pizza.",
  vocab: [
    v("np3-1", "столик на пятерых", "a table for five", "A waiter pushes two small tables together.", "Listen to столик на пятерых", p("3-1")),
    v("np3-2", "Закажи себе, что хочешь.", "Order whatever you want (for yourself).", "Aunt Olya hands Musya the menu.", "Listen to Закажи себе, что хочешь", p("3-2")),
    v("np3-3", "пицца «Маргарита»", "a margherita pizza", "A round pizza with tomato, white cheese and basil leaves.", "Listen to пицца Маргарита", p("3-3")),
    v("np3-4", "без грибов, пожалуйста", "without mushrooms, please", "A mushroom crossed out on a menu.", "Listen to без грибов, пожалуйста", p("3-4")),
    v("np3-5", "дровяная печь", "a wood-fired oven", "A domed oven with fire inside and a long wooden paddle.", "Listen to дровяная печь", p("3-5")),
    v("np3-6", "Каждый ест свою пиццу.", "Everyone eats their own pizza.", "Five plates, each with a whole pizza.", "Listen to Каждый ест свою пиццу", p("3-6")),
    v("np3-7", "Можно взять с собой?", "Can I take it with me (to go)?", "A pizza box with leftovers.", "Listen to Можно взять с собой", p("3-7")),
    v("np3-8", "Счёт, пожалуйста. Мы платим вместе.", "The bill, please. We're paying together.", "Tom raises his hand to the waiter.", "Listen to Счёт, пожалуйста. Мы платим вместе", p("3-8")),
  ],
  letters: [
    letter("грибов", "gri-BOF: stress on the end; the final в sounds like ф.", "без грибов", "without mushrooms"),
    letter("дровяная", "dra-vya-NA-ya: stress on НА.", "дровяная печь", "a wood-fired oven"),
  ],
  dialogue: {
    title: "A pizzeria in the old town",
    note: "In Naples each person usually orders a whole pizza. The waiter speaks a little Russian — many tourists come here.",
    lines: [
      line("waiter", "Добрый вечер! Столик на пятерых? Пожалуйста.", "Good evening! A table for five? Here you are."),
      line("aunt", "Муся, закажи себе, что хочешь.", "Musya, order whatever you want."),
      line("musya", "Мне пиццу с ветчиной! Без грибов, пожалуйста.", "A ham pizza for me! Without mushrooms, please."),
      line("barsik", "Мне две пиццы. Одну здесь, а другую можно взять с собой?", "Two pizzas for me. One here, and can I take one with me?"),
      line("waiter", "Конечно! Каждый ест свою пиццу — так в Неаполе. Мы печём в дровяной печи, полторы минуты.", "Of course! Everyone eats their own pizza — that's how it is in Naples. We bake in a wood-fired oven, a minute and a half."),
      line("murzik", "Всего полторы минуты? Я не успею проголодаться!", "Only a minute and a half? I won't even have time to get hungry!"),
      line("tom", "Счёт, пожалуйста. Мы платим вместе.", "The bill, please. We're paying together."),
    ],
    gist: choice("np3-d1", "How long does a pizza bake in the wood-fired oven?", [
      ["A minute and a half.", true],
      ["Fifteen minutes.", false],
      ["Half an hour.", false],
    ]),
  },
  grammar: [
    {
      title: "С собой, себе, свой",
      paragraphs: [
        "С собой — with oneself: Возьми с собой воду. Можно взять с собой? (to take away).",
        "At the table: закажи себе (order for yourself), каждый ест свою пиццу (everyone eats their own pizza), каждый платит за себя (everyone pays for themselves).",
      ],
      examples: [
        { ru: "Каждый платит за себя.", en: "Everyone pays for themselves." },
        { ru: "Я возьму пиццу с собой.", en: "I'll take the pizza with me." },
      ],
    },
  ],
  tasks: [
    listen("np3-t1", "Listen. What doesn't Musya want on her pizza?", "Мне пиццу с ветчиной! Без грибов, пожалуйста.", [
      ["Mushrooms.", true],
      ["Cheese.", false],
      ["Tomatoes.", false],
    ]),
    choice("np3-t2", "“Everyone pays for themselves.” Which is right?", [
      ["Каждый платит за себя.", true],
      ["Каждый платит за себе.", false],
      ["Каждый платит за свой.", false],
    ], { skill: "grammar" }),
    fill("np3-t3", "Choose the right word: “Can I take it with me?”", "Можно взять с", "?", "собой", ["собой", "себе", "своим"], { skill: "grammar" }),
    read("np3-t4", "Read the menu. Which pizza has no cheese?", "ПИЦЦЕРИЯ «У ДЖЕННАРО»\nМаргарита — томаты, моцарелла, базилик — 7 €\nМаринара — томаты, чеснок, орегано — 6 €\nКватро формаджи — четыре сыра — 9 €", [
      ["Marinara.", true],
      ["Margherita.", false],
      ["Four cheeses.", false],
    ]),
    match("np3-t5", "Match the Russian with the English.", [
      ["столик на пятерых", "a table for five"],
      ["без грибов", "without mushrooms"],
      ["дровяная печь", "a wood-fired oven"],
      ["Можно взять с собой?", "Can I take it with me?"],
    ], { skill: "words" }),
    tf("np3-t6", "Barsik orders one pizza.", false, "True or false?", { skill: "listening" }),
    speak("np3-t7", "Что вы будете заказывать?", "Мне пиццу «Маргарита», без грибов, пожалуйста. А это я возьму с собой.", "A margherita for me, without mushrooms, please. And I'll take this with me.", {
      help: "Order a pizza out loud.",
    }),
  ],
  reward: {
    itemId: "pizzapeel",
    itemName: "Mini pizza paddle",
    itemNameRu: "Лопатка для пиццы",
    ru: "Лопатка — как у пиццайоло!",
    en: "A paddle — like a real pizza-maker's!",
    a11y: "A small wooden pizza paddle hangs on the kitchen wall of the flat.",
    image: p("reward-3"),
    steps: ["The pizza-maker shows Musya and Murzik the oven.", "He gives each of them a tiny wooden paddle.", "Barsik asks for a third pizza. To take with him.", "Murzik hangs his paddle on the kitchen wall."],
    bridge: "Tuesday is Pompeii. Aunt Olya packs water, hats and sun cream — for everyone.",
  },
};

export const naples4: Lesson = {
  id: "a2-naples-4",
  level: "A2",
  cityId: "naples",
  number: 4,
  title: "A Day in Pompeii",
  minutes: 8,
  goals: ["Understand a guided tour", "Remind someone what to take", "Use с собой and себя in other cases"],
  vocabNote: "Себя changes like a pronoun: себя (accusative), себе (dative), собой (instrumental), о себе (prepositional).",
  vocab: [
    v("np4-1", "древний город", "an ancient city", "Stone streets and broken columns under a blue sky.", "Listen to древний город", p("4-1")),
    v("np4-2", "Возьмите с собой воду.", "Take water with you.", "A row of water bottles in a backpack.", "Listen to Возьмите с собой воду", p("4-2")),
    v("np4-3", "извержение вулкана", "a volcanic eruption", "An old painting: dark smoke over a volcano.", "Listen to извержение вулкана", p("4-3")),
    v("np4-4", "почти две тысячи лет назад", "almost two thousand years ago", "A stone sign with a very old date.", "Listen to почти две тысячи лет назад", p("4-4")),
    v("np4-5", "под открытым небом", "in the open air", "Roofless houses and streets under a blue sky.", "Listen to под открытым небом", p("4-5")),
    v("np4-6", "Барсик думает только о себе.", "Barsik only thinks about himself.", "Barsik sits in the shade eating, while the others walk.", "Listen to Барсик думает только о себе", p("4-6")),
    v("np4-7", "Посмотри на себя!", "Look at yourself!", "Musya, covered in dust, looks into a puddle.", "Listen to Посмотри на себя", p("4-7")),
    v("np4-8", "мозаика с собакой", "a mosaic with a dog", "An old floor mosaic of a dog on a chain.", "Listen to мозаика с собакой", p("4-8")),
  ],
  letters: [
    letter("древний", "DRYEV-niy: stress on ДРЕВ.", "древний город", "an ancient city"),
    letter("извержение", "iz-vir-ZHE-ni-ye: stress on ЖЕ.", "извержение вулкана", "a volcanic eruption"),
  ],
  dialogue: {
    title: "The stone streets",
    note: "Pompeii was buried under ash when Vesuvius erupted in the year 79. Today you can walk its streets.",
    lines: [
      line("guide", "Добро пожаловать в Помпеи! Это древний город — музей под открытым небом. Почти две тысячи лет назад город засыпал пепел вулкана.", "Welcome to Pompeii! This is an ancient city — an open-air museum. Almost two thousand years ago the city was buried by ash from the volcano."),
      line("aunt", "Дети, возьмите с собой воду. Сегодня жарко.", "Children, take water with you. It's hot today."),
      line("guide", "Идём дальше. Не отставайте! Посмотрите на эту мозаику с собакой.", "Let's move on. Don't fall behind! Look at this mosaic with a dog."),
      line("musya", "Какая смешная собака! А где Барсик?", "What a funny dog! And where's Barsik?"),
      line("murzik", "Сидит в тени и ест. Барсик думает только о себе!", "He's sitting in the shade, eating. Barsik only thinks about himself!"),
      line("barsik", "Неправда! Я думаю о себе и о пицце.", "Not true! I think about myself and about pizza."),
      line("aunt", "Муся, посмотри на себя — ты вся в пыли!", "Musya, look at yourself — you're covered in dust!"),
    ],
    gist: choice("np4-d1", "What happened in Pompeii long ago?", [
      ["A volcanic eruption.", true],
      ["A big flood.", false],
      ["A festival.", false],
    ]),
  },
  grammar: [
    {
      title: "Себя in all its forms",
      paragraphs: [
        "Accusative / genitive: себя — Посмотри на себя! У себя дома (at one's own home). Dative: себе. Instrumental: собой — с собой. Prepositional: о себе.",
        "It always refers back to the subject: Барсик думает о себе (about himself), Муся смотрит на себя (at herself).",
      ],
      examples: [
        { ru: "Расскажи немного о себе.", en: "Tell me a little about yourself." },
        { ru: "Не забудь взять с собой шляпу.", en: "Don't forget to take a hat with you." },
      ],
    },
  ],
  tasks: [
    listen("np4-t1", "Listen. What does the mosaic show?", "Посмотрите на эту мозаику с собакой.", [
      ["A dog.", true],
      ["A cat.", false],
      ["A volcano.", false],
    ]),
    choice("np4-t2", "“Tell me a little about yourself.” Which is right?", [
      ["Расскажи немного о себе.", true],
      ["Расскажи немного о себя.", false],
      ["Расскажи немного о свой.", false],
    ], { skill: "grammar" }),
    fill("np4-t3", "Choose the right word: “Look at yourself!”", "Посмотри на", "!", "себя", ["себя", "себе", "собой"], { skill: "grammar" }),
    read("np4-t4", "Read the sign at the entrance. What must you NOT do?", "ПОМПЕИ\nОткрыто: 9:00–19:00\nВозьмите с собой воду и шляпу\nНе садитесь на стены и мозаики\nСобаки — только на поводке", [
      ["Sit on the walls and mosaics.", true],
      ["Bring water.", false],
      ["Wear a hat.", false],
    ]),
    match("np4-t5", "Match the Russian with the English.", [
      ["древний город", "an ancient city"],
      ["извержение вулкана", "a volcanic eruption"],
      ["под открытым небом", "in the open air"],
      ["мозаика с собакой", "a mosaic with a dog"],
    ], { skill: "words" }),
    tf("np4-t6", "Barsik says he thinks about himself and about pizza.", true, "True or false?", { skill: "listening" }),
    speak("np4-t7", "Что ты берёшь с собой на экскурсию?", "Я всегда беру с собой воду, шляпу и телефон. И немного еды — как Барсик.", "I always take water, a hat and my phone with me. And a little food — like Barsik.", {
      help: "Say out loud what you take with you on a trip.",
    }),
  ],
  reward: {
    itemId: "pompeiitile",
    itemName: "Mosaic tile magnet",
    itemNameRu: "Магнит-мозаика",
    ru: "Собака из Помпей — на холодильник!",
    en: "A dog from Pompeii — for the fridge!",
    a11y: "A small square magnet copying an old mosaic of a dog sits on the fridge next to the week's plan.",
    image: p("reward-4"),
    steps: ["At the museum shop Musya chooses a magnet.", "A tiny copy of the dog mosaic.", "“Это наша собака,” she says. “Она нас охраняет.”", "It goes on the fridge, next to the plan."],
    bridge: "Wednesday was the volcano. Thursday, the island. And Friday — a whole day on the beach with the children.",
  },
};

export const naples5: Lesson = {
  id: "a2-naples-5",
  level: "A2",
  cityId: "naples",
  number: 5,
  title: "On the Beach with the Kids",
  minutes: 8,
  goals: ["Look after children on the beach", "Give friendly instructions", "Use вести себя (to behave) and гордиться собой"],
  vocabNote: "Вести себя — to behave: Веди себя хорошо! — Behave yourself! Как он себя ведёт? — How is he behaving?",
  vocab: [
    v("np5-1", "Веди себя хорошо!", "Behave yourself!", "Aunt Olya wags a finger at Musya, smiling.", "Listen to Веди себя хорошо", p("5-1")),
    v("np5-2", "Не заплывай далеко!", "Don't swim out too far!", "A line of buoys in the sea.", "Listen to Не заплывай далеко", p("5-2")),
    v("np5-3", "Намажься кремом.", "Put some sun cream on.", "Musya smears white cream on her nose.", "Listen to Намажься кремом", p("5-3")),
    v("np5-4", "строить замок из песка", "to build a sandcastle", "A lopsided sandcastle with a shell on top.", "Listen to строить замок из песка", p("5-4")),
    v("np5-5", "Будь рядом со мной.", "Stay close to me.", "Murzik holds Musya's paw at the water's edge.", "Listen to Будь рядом со мной", p("5-5")),
    v("np5-6", "спасатель", "a lifeguard", "A lifeguard on a tall white chair with a green flag.", "Listen to спасатель", p("5-6")),
    v("np5-7", "Он ведёт себя как маленький.", "He's behaving like a little kid.", "Barsik buried up to his neck in sand, laughing.", "Listen to Он ведёт себя как маленький", p("5-7")),
    v("np5-8", "Я горжусь собой!", "I'm proud of myself!", "Musya stands next to her finished sandcastle.", "Listen to Я горжусь собой", p("5-8")),
  ],
  letters: [
    letter("Намажься", "na-MAZH-sya: stress on МАЖ; жс sounds like a long ш.", "Намажься кремом.", "Put some cream on."),
    letter("спасатель", "spa-SA-til': stress on СА.", "Где спасатель?", "Where's the lifeguard?"),
  ],
  dialogue: {
    title: "Friday on the beach",
    note: "Tom has gone to photograph the island. Murzik and Aunt Olya look after the children.",
    lines: [
      line("aunt", "Муся, намажься кремом. И не заплывай далеко!", "Musya, put some sun cream on. And don't swim out too far!"),
      line("murzik", "Будь рядом со мной. Там, на вышке, спасатель — он всё видит.", "Stay close to me. Up there on the tower is the lifeguard — he sees everything."),
      line("musya", "А можно строить замок из песка?", "And can I build a sandcastle?"),
      line("aunt", "Можно. Только веди себя хорошо. Барсик, а ты что делаешь?", "You can. Just behave yourself. Barsik, and what are you doing?"),
      line("barsik", "Я в песке. Мне хорошо!", "I'm in the sand. I'm happy!"),
      line("murzik", "Он ведёт себя как маленький! А ему уже десять лет.", "He's behaving like a little kid! And he's ten already."),
      line("musya", "Смотрите, мой замок готов! Я горжусь собой!", "Look, my castle's ready! I'm proud of myself!"),
    ],
    gist: choice("np5-d1", "Who is looking after the children?", [
      ["Murzik and Aunt Olya.", true],
      ["Tom and Barsik.", false],
      ["Only the lifeguard.", false],
    ]),
  },
  grammar: [
    {
      title: "Вести себя, гордиться собой",
      paragraphs: [
        "Вести себя (to behave): я веду себя, ты ведёшь себя, он ведёт себя. Imperative: Веди себя хорошо! Ведите себя тихо!",
        "Гордиться + instrumental: горжусь собой (proud of myself), горжусь тобой (proud of you).",
      ],
      examples: [
        { ru: "Дети вели себя очень хорошо.", en: "The children behaved very well." },
        { ru: "Мама гордится собой: она научилась плавать.", en: "Mum is proud of herself: she has learned to swim." },
      ],
    },
  ],
  tasks: [
    listen("np5-t1", "Listen. How old is Barsik?", "Он ведёт себя как маленький! А ему уже десять лет.", [
      ["Ten.", true],
      ["Five.", false],
      ["Twelve.", false],
    ]),
    choice("np5-t2", "“The children behaved very well.” Which is right?", [
      ["Дети вели себя очень хорошо.", true],
      ["Дети вели себе очень хорошо.", false],
      ["Дети вели свой очень хорошо.", false],
    ], { skill: "grammar" }),
    fill("np5-t3", "Choose the right word: “I'm proud of myself!”", "Я горжусь", "!", "собой", ["собой", "себя", "себе"], { skill: "grammar" }),
    read("np5-t4", "Read the flag sign by the lifeguard's tower. What does a red flag mean?", "ФЛАГИ НА ПЛЯЖЕ\nЗелёный — можно купаться\nЖёлтый — купаться осторожно\nКрасный — купаться нельзя!", [
      ["You must not swim.", true],
      ["Swimming is safe.", false],
      ["Swim carefully.", false],
    ]),
    match("np5-t5", "Match the Russian with the English.", [
      ["Не заплывай далеко!", "Don't swim out too far!"],
      ["спасатель", "a lifeguard"],
      ["строить замок из песка", "to build a sandcastle"],
      ["Будь рядом со мной.", "Stay close to me."],
    ], { skill: "words" }),
    tf("np5-t6", "Tom is on the beach with the children.", false, "True or false?", { skill: "reading" }),
    speak("np5-t7", "Ты на пляже с ребёнком. Что ты ему говоришь?", "Намажься кремом, не заплывай далеко и будь рядом со мной. И веди себя хорошо!", "Put some sun cream on, don't swim out too far and stay close to me. And behave yourself!", {
      help: "Give a child instructions on the beach, out loud.",
    }),
  ],
  reward: {
    itemId: "bucketspade",
    itemName: "Bucket and spade",
    itemNameRu: "Ведёрко и лопатка",
    ru: "Ведёрко — для лучшего замка!",
    en: "A bucket — for the best castle!",
    a11y: "A red plastic bucket and a yellow spade, still a little sandy, stand by the balcony door.",
    image: p("reward-5"),
    steps: ["Musya's castle wins: it has a shell on every tower.", "Barsik's castle is himself, covered in sand.", "Musya gives Murzik her red bucket and yellow spade.", "“Тебе. Чтобы ты строил замки в других городах.”"],
    bridge: "In the evening Musya sits next to Murzik with her pencils. “Расскажи мне про бабушку Асю. Какая она?”",
  },
};

export const naples6: Lesson = {
  id: "a2-naples-6",
  level: "A2",
  cityId: "naples",
  number: 6,
  title: "Musya's Drawing",
  minutes: 8,
  goals: ["Describe a person you love", "Tell someone what to draw", "Review свой and себя"],
  vocabNote: "Какая она? — What is she like? (mostly character). Как она выглядит? — What does she look like?",
  vocab: [
    v("np6-1", "Какая она?", "What is she like?", "Musya holds a pencil and looks up at Murzik.", "Listen to Какая она", p("6-1")),
    v("np6-2", "добрая и весёлая", "kind and cheerful", "A drawn sun with a smiling face.", "Listen to добрая и весёлая", p("6-2")),
    v("np6-3", "Она всегда в шляпе.", "She always wears a hat.", "A straw hat drawn on paper.", "Listen to Она всегда в шляпе", p("6-3")),
    v("np6-4", "Я её никогда не видел (не видела).", "I've never seen her.", "Murzik shakes his head sadly.", "Listen to Я её никогда не видел", p("6-4")),
    v("np6-5", "по рассказам", "from what people have told me", "Pages of postcards and notes spread out on the floor.", "Listen to по рассказам", p("6-5")),
    v("np6-6", "Нарисуй себя рядом с ней.", "Draw yourself next to her.", "A drawing: a big ginger cat and a little one, side by side.", "Listen to Нарисуй себя рядом с ней", p("6-6")),
    v("np6-7", "Это мой подарок тебе.", "This is my present to you.", "Musya holds out the drawing with both paws.", "Listen to Это мой подарок тебе", p("6-7")),
    v("np6-8", "Я повешу его у себя дома.", "I'll hang it up at home.", "Murzik holds the drawing to his chest.", "Listen to Я повешу его у себя дома", p("6-8")),
  ],
  letters: [
    letter("весёлая", "vi-SYO-la-ya: ё is always stressed.", "добрая и весёлая", "kind and cheerful"),
    letter("повешу", "pa-VYE-shu: stress on ВЕ.", "Я повешу его.", "I'll hang it up."),
  ],
  dialogue: {
    title: "Pencils on the balcony",
    note: "Murzik has never seen Asya. He knows her from postcards, drawings and from the people he has met: Ursula, Sophie, Dolores…",
    lines: [
      line("musya", "Расскажи про бабушку Асю. Какая она?", "Tell me about Grandma Asya. What is she like?"),
      line("murzik", "Я её никогда не видел. Но по рассказам — добрая и весёлая. Рыжая, как я.", "I've never seen her. But from what people say — kind and cheerful. Ginger, like me."),
      line("musya", "А что она носит?", "And what does she wear?"),
      line("murzik", "Она всегда в соломенной шляпе. И она любит рисовать котов и лодки.", "She always wears a straw hat. And she loves drawing cats and boats."),
      line("musya", "Готово! А теперь нарисую тебя. Или нет — нарисуй себя рядом с ней сам!", "Done! And now I'll draw you. Or no — draw yourself next to her!"),
      line("murzik", "Ой, у меня не получится… Ну ладно.", "Oh, I won't be able to… Well, all right."),
      line("musya", "Это мой подарок тебе. Когда найдёшь её — покажи ей.", "This is my present to you. When you find her — show her."),
      line("murzik", "Спасибо, Муся. Я повешу его у себя дома — когда у меня будет свой дом.", "Thank you, Musya. I'll hang it up at home — when I have a home of my own."),
    ],
    gist: choice("np6-d1", "How does Musya know what Asya looks like?", [
      ["From Murzik's stories.", true],
      ["From a photo.", false],
      ["She met her in Rome.", false],
    ]),
  },
  grammar: [
    {
      title: "Свой и себя: review",
      paragraphs: [
        "свой — one's own: свой дом, своя шляпа, свои рисунки. себя — oneself: нарисуй себя, у себя дома (at one's own home), подарок себе.",
        "Какая она? — about character: добрая, весёлая, умная. Как она выглядит? — about looks: рыжая, в шляпе, маленькая.",
      ],
      examples: [
        { ru: "Муся нарисовала себя и свою маму.", en: "Musya drew herself and her mum." },
        { ru: "У себя дома я всегда пью чай.", en: "At home I always drink tea." },
      ],
    },
  ],
  tasks: [
    listen("np6-t1", "Listen. What does Asya love drawing?", "Она всегда в соломенной шляпе. И она любит рисовать котов и лодки.", [
      ["Cats and boats.", true],
      ["Flowers and trees.", false],
      ["Houses and bridges.", false],
    ]),
    choice("np6-t2", "“Musya drew herself and her mum.” Which is right?", [
      ["Муся нарисовала себя и свою маму.", true],
      ["Муся нарисовала себе и своя мама.", false],
      ["Муся нарисовала свою и себя маму.", false],
    ], { skill: "grammar" }),
    fill("np6-t3", "Choose the right word: “Draw yourself next to her.”", "Нарисуй", "рядом с ней.", "себя", ["себя", "себе", "свой"], { skill: "grammar" }),
    read("np6-t4", "Read what Musya wrote under her drawing. Who is in the picture?", "Бабушка Ася и Мурзик.\nОна в шляпе. Он в шарфе.\nОни рисуют море.\nМуся, 5 лет", [
      ["Grandma Asya and Murzik.", true],
      ["Musya and her mum.", false],
      ["Barsik and Tom.", false],
    ]),
    match("np6-t5", "Match the Russian with the English.", [
      ["Какая она?", "What is she like?"],
      ["добрая и весёлая", "kind and cheerful"],
      ["по рассказам", "from what people have told me"],
      ["Это мой подарок тебе.", "This is my present to you."],
    ], { skill: "words" }),
    tf("np6-t6", "Murzik has seen Asya many times.", false, "True or false?", { skill: "listening" }),
    speak("np6-t7", "Расскажи о человеке, которого ты любишь. Какой он (какая она)?", "Моя бабушка добрая и весёлая. Она всегда в своём синем платке и всегда что-нибудь печёт.", "My grandma is kind and cheerful. She always wears her blue headscarf and is always baking something.", {
      help: "Describe someone you love out loud.",
    }),
  ],
  reward: {
    itemId: "seashellframe",
    itemName: "Shell frame",
    itemNameRu: "Рамка из ракушек",
    ru: "Рамка — для рисунка Муси!",
    en: "A frame — for Musya's drawing!",
    a11y: "An empty little frame decorated with tiny shells from the beach lies on the table.",
    image: p("reward-6"),
    steps: ["Aunt Olya and Barsik glue shells onto an old frame.", "Barsik eats only two of the biscuits used as weights.", "The frame is ready by night.", "Tomorrow Musya's drawing will go in it."],
    bridge: "Saturday morning. The family's holiday is over. Aunt Olya is packing — and Musya isn't letting go of Murzik's paw.",
  },
};

export const naples7: Lesson = {
  id: "a2-naples-7",
  level: "A2",
  cityId: "naples",
  number: 7,
  title: "Naples Exam",
  minutes: 9,
  goals: ["Understand a longer story", "Say goodbye to family", "Review everything from Naples"],
  vocabNote: "Lesson 7 is the city exam: a longer listening story and a review of everything from Naples.",
  vocab: [
    v("np7-1", "рисунок Муси", "Musya's drawing", "A child's drawing of two ginger cats in a shell frame.", "Listen to рисунок Муси", p("7-1")),
    v("np7-2", "Не плачь, мы скоро увидимся.", "Don't cry, we'll see each other soon.", "Murzik wipes a tear from Musya's cheek.", "Listen to Не плачь, мы скоро увидимся", p("7-2")),
    v("np7-3", "Звони нам каждое воскресенье!", "Call us every Sunday!", "Aunt Olya holds up her phone.", "Listen to Звони нам каждое воскресенье", p("7-3")),
    v("np7-4", "поезд до Бари", "the train to Bari", "A train heading east through green hills.", "Listen to поезд до Бари", p("7-4")),
    v("np7-5", "ночной паром", "the night ferry", "A big white ferry with lit windows at night.", "Listen to ночной паром", p("7-5")),
    v("np7-6", "каюта на двоих", "a cabin for two", "A tiny cabin with two bunk beds and a round window.", "Listen to каюта на двоих", p("7-6")),
    v("np7-7", "Возьми с собой бутерброды.", "Take some sandwiches with you.", "Aunt Olya presses a paper bag into Murzik's paws.", "Listen to Возьми с собой бутерброды", p("7-7")),
    v("np7-8", "Береги себя и Тома!", "Look after yourself and Tom!", "Aunt Olya hugs Murzik tightly.", "Listen to Береги себя и Тома", p("7-8")),
  ],
  letters: [
    letter("паром", "pa-ROM: stress on the end.", "ночной паром", "the night ferry"),
  ],
  dialogue: {
    title: "Goodbye at the station",
    note: "From Bari a night ferry goes across the Adriatic Sea to Dubrovnik.",
    lines: [
      line("musya", "Не уезжай! Останься с нами!", "Don't go! Stay with us!"),
      line("murzik", "Не плачь, мы скоро увидимся. Смотри — твой рисунок у меня, в рамке.", "Don't cry, we'll see each other soon. Look — your drawing's with me, in a frame."),
      line("aunt", "Звони нам каждое воскресенье! А куда вы теперь?", "Call us every Sunday! And where are you going now?"),
      line("tom", "Поезд до Бари, а оттуда ночной паром в Дубровник. Каюта на двоих.", "The train to Bari, and from there the night ferry to Dubrovnik. A cabin for two."),
      line("aunt", "Возьми с собой бутерброды. И береги себя и Тома!", "Take some sandwiches with you. And look after yourself and Tom!"),
      line("barsik", "Мурзик… можно, я возьму себе один бутерброд? На дорогу.", "Murzik… can I take one sandwich for myself? For the road."),
    ],
    gist: choice("np7-d1", "How will Murzik and Tom get to Dubrovnik?", [
      ["By train to Bari, then by night ferry.", true],
      ["By plane from Naples.", false],
      ["By car along the coast.", false],
    ]),
  },
  grammar: [
    {
      title: "Naples review",
      paragraphs: [
        "свой (one's own): свой чемодан, своя комната, своё место, свои вещи — always refers back to the subject.",
        "себя (oneself): себя — нарисуй себя, береги себя, вести себя; себе — закажи себе, купи себе; собой — с собой, горжусь собой; о себе — расскажи о себе.",
      ],
      examples: [
        { ru: "Каждый взял с собой свой чемодан и свой рисунок.", en: "Everyone took their own suitcase and their own drawing with them." },
        { ru: "Береги себя и звони!", en: "Look after yourself and call!" },
      ],
    },
  ],
  tasks: [
    listen("np7-t1", "Audio story: Aunt Olya talks about the holiday. What was the best day for Musya?", "Неделя пролетела быстро. Каждый выбрал себе одно место. Барсик выбрал пляж, Том — остров, Мурзик — Помпеи. Но лучший день для Муси был последний: она нарисовала бабушку Асю. Теперь она говорит, что будет художницей, как бабушка Мурзика.", [
      ["The last day, when she drew Grandma Asya.", true],
      ["The day on the island.", false],
      ["The day in Pompeii.", false],
    ]),
    listen("np7-t2", "Listen again. What does Musya want to be?", "Теперь она говорит, что будет художницей, как бабушка Мурзика.", [
      ["An artist.", true],
      ["A lifeguard.", false],
      ["A pizza-maker.", false],
    ]),
    choice("np7-t3", "“Look after yourself and call!” Which is right?", [
      ["Береги себя и звони!", true],
      ["Береги себе и звони!", false],
      ["Береги свой и звони!", false],
    ], { skill: "grammar" }),
    read("np7-t4", "Read the ferry ticket. When does the ferry arrive in Dubrovnik?", "БАРИ — ДУБРОВНИК\nОтправление: 22:00\nПрибытие: 08:00\nКаюта на двоих, №214", [
      ["At 8 in the morning.", true],
      ["At 10 in the evening.", false],
      ["At 2:14.", false],
    ]),
    script("np7-t5", "Say goodbye to Aunt Olya and Musya.", [
      { speaker: "Musya", text: "Не уезжай!" },
      { speaker: "You", answer: "Не плачь, мы скоро увидимся!", options: ["Не плачь, мы скоро увидимся!", "Не плачь, закажи себе пиццу!", "Не плачь, я против."] },
      { speaker: "Aunt Olya", text: "Береги себя!" },
      { speaker: "You", answer: "Спасибо! Буду звонить каждое воскресенье.", options: ["Спасибо! Буду звонить каждое воскресенье.", "Спасибо! Я горжусь собой.", "Спасибо! Без грибов, пожалуйста."] },
    ], { skill: "review" }),
    match("np7-t6", "Naples review: match the Russian with the English.", [
      ["школьные каникулы", "the school holidays"],
      ["дровяная печь", "a wood-fired oven"],
      ["древний город", "an ancient city"],
      ["ночной паром", "the night ferry"],
    ], { skill: "review" }),
    speak("np7-t7", "Расскажи о своём лучшем отпуске с семьёй.", "Мы ездили на море всей семьёй. Каждый выбрал себе своё любимое занятие: я — плавать, мама — читать, а папа — спать.", "We went to the seaside as a family. Everyone chose their own favourite thing: me — swimming, Mum — reading, and Dad — sleeping.", {
      help: "Tell out loud about a family holiday. Use свой and себе.",
    }),
  ],
  reward: {
    itemId: "musyadrawing",
    itemName: "Musya's drawing of Asya",
    itemNameRu: "Рисунок Муси",
    ru: "Бабушка Ася — глазами Муси!",
    en: "Grandma Asya — through Musya's eyes!",
    a11y: "A child's crayon drawing in a frame of tiny shells: a big ginger cat in a straw hat and a small ginger kitten in a scarf, drawing the sea together.",
    image: p("reward-7"),
    steps: ["Musya's drawing goes into the shell frame.", "A big ginger cat in a straw hat. A little one in a scarf.", "They are drawing the sea together.", "Murzik packs it on top — next to Asya's fan."],
  },
};

export const naplesLessons: Lesson[] = [naples1, naples2, naples3, naples4, naples5, naples6, naples7];
