import { pic } from "../art";
import { choice, fill, line, listen, match, missing, speak, spell, v } from "../make";
import type { Lesson } from "../types";

/* Madrid · «Еда и покупки» · lessons 1–7. Murzik's home here: a small flat with a balcony. */

export const madrid1: Lesson = {
  id: "a1-madrid-1",
  level: "A1",
  cityId: "madrid",
  number: 1,
  title: "At the Café",
  minutes: 5,
  goals: ["Order a drink politely", "Say with milk or without sugar", "Say “That's all”"],
  vocabNote:
    "The easiest way to order is Мне …, пожалуйста — literally “To me …, please”. Waiters speak to you with вы.",
  vocab: [
    v("ma1-1", "Что вы хотите?", "What would you like?", "A smiling waiter with a white apron holds a small notepad at a Madrid café table.", "Play Что вы хотите", pic("madrid/1-1")),
    v("ma1-2", "Мне кофе, пожалуйста.", "A coffee for me, please.", "Tom points at a cup of coffee on the menu and smiles at the waiter.", "Play Мне кофе, пожалуйста", pic("madrid/1-2")),
    v("ma1-3", "Можно чай?", "Can I have some tea?", "Murzik raises his paw politely at a café table.", "Play Можно чай", pic("madrid/1-3")),
    v("ma1-4", "С молоком?", "With milk?", "The waiter holds a small jug of milk over a cup of coffee.", "Play С молоком", pic("madrid/1-4")),
    v("ma1-5", "Без сахара.", "Without sugar.", "Tom gently pushes a sugar bowl away and shakes his head.", "Play Без сахара", pic("madrid/1-5")),
    v("ma1-6", "Что-нибудь ещё?", "Anything else?", "The waiter raises his pen and eyebrows, waiting.", "Play Что-нибудь ещё", pic("madrid/1-8")),
    v("ma1-7", "Это всё.", "That's all.", "Tom closes the menu and hands it back to the waiter.", "Play Это всё", pic("madrid/1-9")),
  ],
  dialogue: {
    title: "Breakfast in Madrid",
    note: "Доброе утро! means “Good morning!” Горячий шоколад is hot chocolate.",
    lines: [
      line("waiter", "Доброе утро! Что вы хотите?", "Good morning! What would you like?"),
      line("tom", "Мне кофе, пожалуйста.", "A coffee for me, please."),
      line("waiter", "С молоком?", "With milk?"),
      line("tom", "Да, с молоком. Без сахара.", "Yes, with milk. Without sugar."),
      line("waiter", "А вы?", "And you?"),
      line("murzik", "Можно чай? И горячий шоколад!", "Can I have some tea? And a hot chocolate!"),
      line("waiter", "Что-нибудь ещё?", "Anything else?"),
      line("tom", "Нет, это всё. Спасибо.", "No, that's all. Thank you."),
    ],
    gist: choice("ma1-d1", "What does Tom order?", [
      ["Coffee with milk, no sugar.", true],
      ["Tea with sugar.", false],
      ["Hot chocolate.", false],
    ]),
  },
  grammar: [
    {
      title: "Мне …, пожалуйста and Можно …?",
      paragraphs: [
        "Мне + what you want + пожалуйста: Мне кофе, пожалуйста. Мне чай, пожалуйста.",
        "Можно + a thing asks for it politely: Можно чай? Можно меню?",
        "с — with, без — without. Learn the pairs whole: с молоком, без сахара.",
      ],
      examples: [
        { ru: "Мне кофе, пожалуйста.", en: "A coffee for me, please." },
        { ru: "Можно меню?", en: "Can I have the menu?" },
      ],
    },
  ],
  tasks: [
    listen("ma1-t1", "Listen. What does it mean?", "Что-нибудь ещё?", [
      ["Anything else?", true],
      ["That's all.", false],
      ["With milk?", false],
    ]),
    choice("ma1-t2", 'Which phrase means "Without sugar"?', [
      ["Без сахара.", true],
      ["С молоком.", false],
      ["Это всё.", false],
    ], { skill: "words" }),
    choice("ma1-t3", "Find the correct sentence.", [
      ["Мне кофе, пожалуйста.", true],
      ["Меня кофе, пожалуйста.", false],
      ["Я кофе, пожалуйста.", false],
    ], { skill: "grammar" }),
    spell("ma1-t4", "Build the word for “milk”.", "молоко"),
    speak("ma1-t5", "Здравствуйте! Что вы хотите?", "Мне кофе, пожалуйста. Без сахара.", "A coffee for me, please. Without sugar.", {
      help: "You are in a café. Order aloud.",
    }),
    listen("ma1-t6", "Listen and choose the best reply.", "Добро пожаловать в Мадрид!", [
      ["Спасибо!", true],
      ["Это всё.", false],
      ["Мне холодно.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "balcony-table",
    itemName: "Balcony table",
    itemNameRu: "Столик",
    ru: "Ура! Столик на балкон!",
    en: "Yay! A table for my balcony!",
    a11y: "Murzik stands on the small sunny balcony of his Madrid flat next to a little round blue table.",
    image: pic("madrid/reward-1"),
    steps: ["Tom and Murzik rent a small flat with a balcony.", "The café owner has an old round table.", "He gives it to Murzik.", "Now Murzik can have breakfast outside."],
    bridge: "On the café wall Murzik notices a small painting of a ginger cat. In the corner there is a name: Ася. In the evening Tom and Murzik want a real Spanish dinner.",
  },
};

export const madrid2: Lesson = {
  id: "a1-madrid-2",
  level: "A1",
  cityId: "madrid",
  number: 2,
  title: "At the Restaurant",
  minutes: 5,
  goals: ["Ask for the menu and the bill", "Order a dish with Я буду…", "Say that it is very tasty"],
  vocabNote:
    "Я буду … literally means “I will be …”, but in a restaurant it means “I'll have …”. Приятного аппетита! means “Enjoy your meal!”",
  vocab: [
    v("ma2-1", "Меню, пожалуйста.", "The menu, please.", "Tom raises his hand at a restaurant table with a candle on it.", "Play Меню, пожалуйста", pic("madrid/2-1")),
    v("ma2-2", "Я буду…", "I'll have…", "Murzik points at a dish in the menu with a confident smile.", "Play Я буду", pic("madrid/2-3")),
    v("ma2-3", "суп", "soup", "A bowl of hot vegetable soup with steam rising.", "Play суп", pic("madrid/2-4")),
    v("ma2-4", "рыба или мясо", "fish or meat", "A plate of grilled fish next to a plate of meat with potatoes.", "Play рыба или мясо", pic("madrid/2-4b")),
    v("ma2-5", "курица", "chicken", "Roast chicken with potatoes on a plate.", "Play курица", pic("madrid/2-6")),
    v("ma2-6", "И сок, пожалуйста.", "And a juice, please.", "A tall glass of orange juice on a restaurant table.", "Play И сок, пожалуйста", pic("madrid/2-6b")),
    v("ma2-7", "Счёт, пожалуйста.", "The bill, please.", "Tom makes a “writing in the air” gesture to the waiter.", "Play Счёт, пожалуйста", pic("madrid/2-10")),
  ],
  dialogue: {
    title: "Dinner at eight",
    note: "Spaniards eat dinner late, at nine or even ten. Tom and Murzik are early!",
    lines: [
      line("tom", "Извините! Меню, пожалуйста.", "Excuse me! The menu, please."),
      line("waiter", "Вот, пожалуйста.", "Here you are."),
      line("murzik", "Я буду рыбу.", "I'll have the fish."),
      line("tom", "А я буду суп и курицу.", "And I'll have the soup and the chicken."),
      line("murzik", "И сок, пожалуйста.", "And a juice, please."),
      line("waiter", "Приятного аппетита!", "Enjoy your meal!"),
      line("murzik", "Ммм! Очень вкусно!", "Mmm! It's very tasty!"),
      line("tom", "Извините, счёт, пожалуйста.", "Excuse me, the bill, please."),
    ],
    gist: choice("ma2-d1", "What does Murzik order?", [
      ["Fish.", true],
      ["Soup.", false],
      ["Chicken.", false],
    ]),
  },
  grammar: [
    {
      title: "Я буду рыбу",
      paragraphs: [
        "After Я буду, feminine words change -а → -у: рыба → рыбу, курица → курицу.",
        "Masculine words do not change: Я буду суп. You met this change before: И ещё воду (вода → воду).",
      ],
      examples: [
        { ru: "Я буду рыбу.", en: "I'll have the fish." },
        { ru: "Я буду суп и курицу.", en: "I'll have the soup and the chicken." },
      ],
    },
  ],
  tasks: [
    match("ma2-t1", "Match the Russian with the English.", [
      ["суп", "soup"],
      ["рыба", "fish"],
      ["курица", "chicken"],
    ], { skill: "words" }),
    listen("ma2-t2", "Listen. What did you hear?", "Я буду рыбу.", [
      ["Я буду рыбу.", true],
      ["Я буду суп.", false],
      ["Я люблю рыбу.", false],
    ]),
    fill("ma2-t3", "Complete.", "Я буду", ".", "курицу", ["курицу", "курица", "курицы"], { skill: "grammar" }),
    missing("ma2-t4", "Which letter is missing? (the bill)", "Сч", "т", "ё", ["ё", "е", "о"]),
    speak("ma2-t5", "Что вы будете?", "Я буду суп и рыбу.", "I'll have the soup and the fish.", { help: "Order your dinner aloud." }),
    listen("ma2-t6", "Listen and choose the best reply.", "С молоком?", [
      ["Да, с молоком.", true],
      ["Я буду рыбу.", false],
      ["Счёт, пожалуйста.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "chairs",
    itemName: "Wicker chairs",
    itemNameRu: "Стулья",
    ru: "Ура! Два стула для балкона!",
    en: "Yay! Two chairs for the balcony!",
    a11y: "Two small wicker chairs stand by the round blue table on Murzik's balcony. Murzik sits in one of them.",
    image: pic("madrid/reward-2"),
    steps: ["The restaurant is changing its chairs.", "The waiter gives Tom two old wicker chairs.", "They carry them home.", "Now there are two seats on the balcony."],
    bridge: "Tomorrow morning: the big Madrid market.",
  },
};

export const madrid3: Lesson = {
  id: "a1-madrid-3",
  level: "A1",
  cityId: "madrid",
  number: 3,
  title: "At the Market",
  minutes: 5,
  goals: ["Name some fruit and vegetables", "Ask for something at a market stall", "Ask if it is fresh"],
  vocabNote:
    "Дайте, пожалуйста … is the usual way to ask for something in a shop or at a market. It sounds polite, not rude.",
  vocab: [
    v("ma3-1", "рынок", "market", "A busy, colourful covered market in Madrid with many stalls.", "Play рынок", pic("madrid/3-1")),
    v("ma3-2", "помидоры", "tomatoes", "A wooden box full of red tomatoes.", "Play помидоры", pic("madrid/3-3")),
    v("ma3-3", "апельсины и яблоки", "oranges and apples", "A market stall with a pile of oranges next to a pile of red and green apples.", "Play апельсины и яблоки", pic("madrid/3-3b")),
    v("ma3-4", "клубника", "strawberries", "A small basket of red strawberries.", "Play клубника", pic("madrid/3-5")),
    v("ma3-5", "Дайте, пожалуйста…", "Could I have…, please?", "Murzik politely points at the tomatoes at a market stall.", "Play Дайте, пожалуйста", pic("madrid/3-6")),
    v("ma3-6", "Один килограмм.", "One kilo.", "The seller puts tomatoes on old-fashioned scales showing 1 kg.", "Play Один килограмм", pic("madrid/3-7")),
    v("ma3-7", "овощи и фрукты", "vegetables and fruit", "A colourful market stall: vegetables on one side, fruit on the other.", "Play овощи и фрукты", pic("madrid/3-7b")),
  ],
  dialogue: {
    title: "The big market",
    note: "Клубника is one Russian word for many strawberries. Они means “they”.",
    lines: [
      line("murzik", "Том, смотри! Рынок! Какие овощи и фрукты!", "Tom, look! A market! What vegetables and fruit!"),
      line("seller", "Здравствуйте! Что вы хотите?", "Hello! What would you like?"),
      line("murzik", "Помидоры. Они свежие?", "Tomatoes. Are they fresh?"),
      line("seller", "Очень свежие!", "Very fresh!"),
      line("murzik", "Дайте, пожалуйста, один килограмм.", "One kilo, please."),
      line("seller", "Что-нибудь ещё?", "Anything else?"),
      line("murzik", "Дайте, пожалуйста, клубнику!", "The strawberries, please!"),
      line("tom", "И апельсины и яблоки!", "And oranges and apples!"),
    ],
    gist: choice("ma3-d1", "What does Murzik buy first?", [
      ["Tomatoes.", true],
      ["Oranges.", false],
      ["Strawberries.", false],
    ]),
  },
  grammar: [
    {
      title: "Дайте, пожалуйста …",
      paragraphs: [
        "After дайте, feminine words change -а → -у, just as after буду: клубника → Дайте клубнику.",
        "Plurals and masculine words stay the same: Дайте помидоры. Дайте один килограмм.",
      ],
      examples: [
        { ru: "Дайте, пожалуйста, клубнику.", en: "The strawberries, please." },
        { ru: "Дайте, пожалуйста, апельсины.", en: "Some oranges, please." },
      ],
    },
  ],
  tasks: [
    choice("ma3-t1", "Find the odd one out.", [
      ["помидоры", false],
      ["апельсины", false],
      ["клубника", false],
      ["чемодан", true],
    ], { skill: "words", help: "Three of them are things you buy at a market." }),
    listen("ma3-t2", "Listen and choose the best reply.", "Что вы хотите?", [
      ["Дайте, пожалуйста, апельсины.", true],
      ["Очень свежие!", false],
      ["Вот ключ.", false],
    ]),
    fill("ma3-t3", "Complete.", "Дайте, пожалуйста,", ".", "клубнику", ["клубнику", "клубника", "клубники"], { skill: "grammar" }),
    spell("ma3-t4", "Build the word for “market”.", "рынок"),
    speak("ma3-t5", "Здравствуйте! Что вы хотите?", "Дайте, пожалуйста, помидоры.", "Some tomatoes, please.", {
      help: "You are at a market stall. Answer aloud.",
    }),
    listen("ma3-t6", "Listen. What did you hear?", "Приятного аппетита!", [
      ["Приятного аппетита!", true],
      ["Хорошего дня!", false],
      ["Счастливого пути!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "flowers",
    itemName: "Flowers in pots",
    itemNameRu: "Цветы",
    ru: "Ура! Цветы для балкона!",
    en: "Yay! Flowers for the balcony!",
    a11y: "Three clay pots with bright red geraniums stand along the railing of Murzik's sunny balcony.",
    image: pic("madrid/reward-3"),
    steps: ["Next to the fruit stall there are flowers.", "Murzik chooses three red geraniums.", "He carries them home.", "The balcony is red, white and blue now."],
    bridge: "Next to the market there is a souvenir shop. But how much do things cost?",
  },
};

export const madrid4: Lesson = {
  id: "a1-madrid-4",
  level: "A1",
  cityId: "madrid",
  number: 4,
  title: "How Much Is It?",
  minutes: 5,
  goals: ["Ask how much something costs", "Understand prices up to 100", "Say that it is expensive or cheap"],
  vocabNote: "Евро never changes: один евро, два евро, сто евро. That makes prices in Madrid easy!",
  vocab: [
    v("ma4-1", "Сколько стоит?", "How much is it?", "Murzik holds up a small Spanish fan in a souvenir shop with a questioning face.", "Play Сколько стоит", pic("madrid/4-1")),
    v("ma4-2", "евро", "euro / euros", "A few euro coins and a euro banknote on a shop counter.", "Play евро", pic("madrid/4-3")),
    v("ma4-3", "тридцать, сорок, пятьдесят", "thirty, forty, fifty", "Three price tags: 30 €, 40 €, 50 €.", "Play тридцать, сорок, пятьдесят", pic("madrid/4-3b")),
    v("ma4-4", "шестьдесят, семьдесят, восемьдесят, девяносто", "sixty, seventy, eighty, ninety", "Four price tags: 60 €, 70 €, 80 €, 90 €.", "Play шестьдесят, семьдесят, восемьдесят, девяносто", pic("madrid/4-4b")),
    v("ma4-5", "сто, двести, тысяча", "a hundred, two hundred, a thousand", "Three price tags: 100 €, 200 €, 1000 €.", "Play сто, двести, тысяча", pic("madrid/4-5b")),
    v("ma4-6", "Это дорого.", "That's expensive.", "Murzik looks at a price tag with huge eyes and his fur standing on end.", "Play Это дорого", pic("madrid/4-8")),
    v("ma4-7", "Это дёшево.", "That's cheap.", "Murzik happily holds a small magnet with a tiny price tag.", "Play Это дёшево", pic("madrid/4-9")),
  ],
  dialogue: {
    title: "The souvenir shop",
    note: "Веер is a fan. Этот means “this one”.",
    lines: [
      line("murzik", "Извините, сколько стоит веер?", "Excuse me, how much is the fan?"),
      line("seller", "Пятьдесят евро.", "Fifty euros."),
      line("murzik", "Пятьдесят? Это дорого!", "Fifty? That's expensive!"),
      line("seller", "А этот веер — двадцать евро.", "And this fan is twenty euros."),
      line("murzik", "Двадцать? Хорошо!", "Twenty? Good!"),
      line("tom", "А магнит?", "And the magnet?"),
      line("seller", "Три евро.", "Three euros."),
      line("tom", "Это дёшево!", "That's cheap!"),
    ],
    gist: choice("ma4-d1", "How much is the fan that Murzik likes?", [
      ["20 €.", true],
      ["50 €.", false],
      ["3 €.", false],
    ]),
  },
  grammar: [
    {
      title: "Numbers up to 1000",
      paragraphs: [
        "11–19 are a small number + -надцать: одиннадцать, двенадцать … пятнадцать … девятнадцать.",
        "Tens: 20 двадцать · 30 тридцать · 40 сорок · 50 пятьдесят · 60 шестьдесят · 70 семьдесят · 80 восемьдесят · 90 девяносто · 100 сто.",
        "Build the rest like in English: двадцать три (23), сорок пять (45).",
        "Bigger numbers: сто (100), двести (200), тысяча (1000).",
      ],
      examples: [{ ru: "Двадцать три евро.", en: "Twenty-three euros." }],
    },
  ],
  tasks: [
    listen("ma4-t1", "Listen. What is the price?", "Пятьдесят евро.", [
      ["50 €", true],
      ["15 €", false],
      ["5 €", false],
    ]),
    listen("ma4-t2", "Listen. Which number is it?", "тридцать", [
      ["30", true],
      ["13", false],
      ["3", false],
    ]),
    match("ma4-t3", "Match the numbers.", [
      ["двадцать", "20"],
      ["пятьдесят", "50"],
      ["сто", "100"],
    ], { skill: "words" }),
    choice("ma4-t4", "A coffee costs 100 euros! What do you say?", [
      ["Это дорого!", true],
      ["Это дёшево!", false],
    ], { skill: "grammar" }),
    missing("ma4-t5", "Which letter is missing? (cheap)", "дёш", "во", "е", ["е", "ё", "о"]),
    speak("ma4-t6", "Ask how much the fan costs.", "Извините, сколько стоит веер?", "Excuse me, how much is the fan?", {
      promptLang: undefined,
    }),
    listen("ma4-t7", "Listen and choose the best reply.", "Они свежие?", [
      ["Очень свежие!", true],
      ["Один килограмм.", false],
      ["Это всё.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fan",
    itemName: "Spanish fan",
    itemNameRu: "Веер",
    ru: "Ура! Красный веер!",
    en: "Yay! A red fan!",
    a11y: "Murzik hangs an open red Spanish fan with white flowers on the white wall of his Madrid flat.",
    image: pic("madrid/reward-4"),
    steps: ["Murzik buys the twenty-euro fan.", "It is red with white flowers.", "He fans himself in the Madrid heat.", "Then he hangs it on the wall."],
    bridge: "The flat still has a bare floor. At the next shop Murzik sees a bright rug, but can he pay by card?",
  },
};

export const madrid5: Lesson = {
  id: "a1-madrid-5",
  level: "A1",
  cityId: "madrid",
  number: 5,
  title: "Card or Cash?",
  minutes: 5,
  goals: ["Ask how much you have to pay", "Ask if you can pay by card", "Answer “Do you need a bag?”"],
  vocabNote: "Сколько с меня? literally means “How much from me?” It is a very common way to ask how much you owe.",
  vocab: [
    v("ma5-1", "Сколько с меня?", "How much do I owe?", "Murzik stands at a shop till and looks at the cashier.", "Play Сколько с меня", pic("madrid/5-1")),
    v("ma5-2", "Можно картой?", "Can I pay by card?", "Murzik holds up a bank card with a hopeful face.", "Play Можно картой", pic("madrid/5-2")),
    v("ma5-3", "Только наличными.", "Cash only.", "A small sign on the till shows coins and a banknote. The cashier points to it.", "Play Только наличными", pic("madrid/5-4")),
    v("ma5-4", "Пакет нужен?", "Do you need a bag?", "The cashier holds up a paper bag with a questioning face.", "Play Пакет нужен", pic("madrid/5-5")),
    v("ma5-5", "Нет, не нужен.", "No, I don't need one.", "Murzik shakes his head, holding a rolled-up rug under his arm.", "Play Нет, не нужен", pic("madrid/5-6")),
    v("ma5-6", "Вот ваша сдача.", "Here is your change.", "The cashier puts a few coins into Murzik's paw.", "Play Вот ваша сдача", pic("madrid/5-8")),
    v("ma5-7", "Следующий!", "Next, please!", "The cashier waves to the next person in the queue.", "Play Следующий", pic("madrid/5-10")),
  ],
  dialogue: {
    title: "At the till",
    lines: [
      line("cashier", "Следующий!", "Next, please!"),
      line("murzik", "Здравствуйте! Сколько с меня?", "Hello! How much do I owe?"),
      line("cashier", "Пятнадцать евро.", "Fifteen euros."),
      line("murzik", "Можно картой?", "Can I pay by card?"),
      line("cashier", "Извините, только наличными.", "Sorry, cash only."),
      line("tom", "Вот двадцать евро.", "Here's twenty euros."),
      line("cashier", "Пакет нужен?", "Do you need a bag?"),
      line("murzik", "Нет, не нужен. Спасибо.", "No, I don't need one. Thank you."),
      line("cashier", "Вот ваша сдача — пять евро.", "Here is your change: five euros."),
    ],
    gist: choice("ma5-d1", "How do they pay?", [
      ["Tom pays in cash.", true],
      ["Murzik pays by card.", false],
      ["They do not pay.", false],
    ]),
  },
  grammar: [
    {
      title: "Картой or наличными? Нужен or нужна?",
      paragraphs: [
        "картой — by card · наличными — in cash. Use them as fixed answers: Можно картой? — Только наличными.",
        "Нужен (needed) changes with the noun, like мой: Пакет нужен? — Нет, не нужен. Сумка нужна? — Нет, не нужна.",
      ],
      examples: [
        { ru: "Можно картой? — Да, конечно.", en: "Can I pay by card? — Yes, of course." },
        { ru: "Пакет нужен? — Нет, не нужен.", en: "Do you need a bag? — No, I don't." },
      ],
    },
  ],
  tasks: [
    listen("ma5-t1", "Listen. What is the price?", "Пятнадцать евро.", [
      ["15 €", true],
      ["50 €", false],
      ["5 €", false],
    ]),
    choice("ma5-t2", "What does Следующий! mean?", [
      ["Next, please!", true],
      ["That's all!", false],
      ["Cash only!", false],
    ], { skill: "words" }),
    choice("ma5-t3", "Пакет нужен? You don't need one. Choose the answer.", [
      ["Нет, не нужен.", true],
      ["Нет, не нужна.", false],
      ["Да, нужен.", false],
    ], { skill: "grammar" }),
    spell("ma5-t4", "Build the word for “change” (money back).", "сдача"),
    speak("ma5-t5", "Следующий!", "Здравствуйте! Сколько с меня?", "Hello! How much do I owe?", { help: "It's your turn at the till. Speak aloud." }),
    listen("ma5-t6", "Listen. What did you hear?", "Это дёшево!", [
      ["Это дёшево!", true],
      ["Это дорого!", false],
      ["Это всё!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "rug",
    itemName: "Bright rug",
    itemNameRu: "Ковёр",
    ru: "Ура! Яркий ковёр!",
    en: "Yay! A bright rug!",
    a11y: "Murzik rolls out a colourful striped rug on the tiled floor of his Madrid flat and lies on it happily.",
    image: pic("madrid/reward-5"),
    steps: ["Tom pays for the rug in cash.", "Murzik carries it home under his arm.", "He rolls it out on the floor.", "He lies on it and stretches."],
    bridge: "In the evening, Tom wants Murzik to try real Spanish tapas.",
  },
};

export const madrid6: Lesson = {
  id: "a1-madrid-6",
  level: "A1",
  cityId: "madrid",
  number: 6,
  title: "Delicious!",
  minutes: 5,
  goals: ["Say that food is tasty", "Say what you like and do not like", "Invite someone to try something"],
  vocabNote:
    "Мне нравится … means “I like …” — literally “… is pleasing to me”. The thing you like does not change: Мне нравится паэлья.",
  vocab: [
    v("ma6-1", "Вкусно!", "Tasty! / Delicious!", "Murzik licks his lips after a bite of tapas.", "Play Вкусно", pic("madrid/6-1")),
    v("ma6-2", "Мне нравится…", "I like…", "Murzik hugs a plate of tortilla with a happy face.", "Play Мне нравится", pic("madrid/6-3")),
    v("ma6-3", "Мне не нравится…", "I don't like…", "Murzik frowns at a small dish of spicy sauce and shakes his head.", "Play Мне не нравится", pic("madrid/6-4")),
    v("ma6-4", "Тебе нравится?", "Do you like it?", "Tom watches Murzik taste something and asks with a curious smile.", "Play Тебе нравится", pic("madrid/6-5")),
    v("ma6-5", "сладкий", "sweet", "Churros covered in sugar on a plate.", "Play сладкий", pic("madrid/6-6")),
    v("ma6-6", "острый", "spicy", "Murzik's face turns red after a bite of spicy potatoes. Small flames come from his mouth.", "Play острый", pic("madrid/6-7")),
    v("ma6-7", "Попробуй!", "Try it!", "Tom holds out a fork with a piece of tortilla to Murzik.", "Play Попробуй", pic("madrid/6-10")),
  ],
  dialogue: {
    title: "A tapas evening",
    note: "Тортилья in Spain is a thick potato omelette. Соус is a sauce.",
    lines: [
      line("tom", "Мурзик, попробуй! Это тортилья.", "Murzik, try it! This is tortilla."),
      line("murzik", "Ммм! Вкусно! Мне нравится.", "Mmm! Delicious! I like it."),
      line("tom", "А это острый соус.", "And this is a spicy sauce."),
      line("murzik", "Ой! Очень острый! Мне не нравится.", "Oh! Very spicy! I don't like it."),
      line("tom", "А вот горячий шоколад. Тебе нравится?", "And here is hot chocolate. Do you like it?"),
      line("murzik", "Сладкий! Очень нравится!", "Sweet! I like it a lot!"),
    ],
    gist: choice("ma6-d1", "What does Murzik not like?", [
      ["The spicy sauce.", true],
      ["The tortilla.", false],
      ["The hot chocolate.", false],
    ]),
  },
  grammar: [
    {
      title: "Мне нравится …",
      paragraphs: [
        "Мне нравится + thing. The thing does not change: Мне нравится паэлья. Мне нравится сыр.",
        "Compare: Я буду паэлью (I'll have) — but Мне нравится паэлья (I like). Ask a friend: Тебе нравится?",
        "Adjectives change too: острый соус (masculine), острая паэлья (feminine).",
      ],
      examples: [
        { ru: "Мне нравится сыр.", en: "I like cheese." },
        { ru: "Мне не нравится острый соус.", en: "I don't like spicy sauce." },
      ],
    },
  ],
  tasks: [
    match("ma6-t1", "Match the Russian with the English.", [
      ["сладкий", "sweet"],
      ["острый", "spicy"],
      ["Вкусно!", "Tasty!"],
    ], { skill: "words" }),
    listen("ma6-t2", "Listen and choose the best reply.", "Тебе нравится?", [
      ["Да, очень вкусно!", true],
      ["Я буду суп.", false],
      ["Можно картой?", false],
    ]),
    choice("ma6-t3", "Find the correct sentence.", [
      ["Мне нравится паэлья.", true],
      ["Мне нравится паэлью.", false],
      ["Я нравится паэлья.", false],
    ], { skill: "grammar" }),
    missing("ma6-t4", "Which letter is missing? (spicy)", "ост", "ый", "р", ["р", "л", "н"]),
    speak("ma6-t5", "Попробуй! Тебе нравится?", "Да, вкусно! Мне нравится.", "Yes, it's tasty! I like it.", { help: "Taste and react aloud." }),
    listen("ma6-t6", "Listen. What does it mean?", "Только наличными.", [
      ["Cash only.", true],
      ["By card, please.", false],
      ["Here is your change.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "lantern",
    itemName: "Lantern",
    itemNameRu: "Фонарь",
    ru: "Ура! Фонарь для балкона!",
    en: "Yay! A lantern for the balcony!",
    a11y: "A small metal lantern with coloured glass glows on the round table of Murzik's balcony in the evening.",
    image: pic("madrid/reward-6"),
    steps: ["The tapas bar has coloured lanterns.", "The owner gives Murzik a small one.", "At home he puts it on the balcony table.", "In the evening it glows red, blue and yellow."],
    bridge: "Tomorrow is the last day in Madrid. Murzik has an idea: they can cook dinner themselves.",
  },
};

export const madrid7: Lesson = {
  id: "a1-madrid-7",
  level: "A1",
  cityId: "madrid",
  number: 7,
  title: "Cooking at Home",
  minutes: 5,
  goals: ["Suggest cooking together", "Say what you need", "Ask for help and say “It's ready!”"],
  vocabNote: "Нужен, нужна, нужны all mean “needed”. The ending depends on the thing you need.",
  vocab: [
    v("ma7-1", "Давай приготовим ужин!", "Let's make dinner!", "Murzik ties on a small apron in a sunny Madrid kitchen and raises a wooden spoon.", "Play Давай приготовим ужин", pic("madrid/7-1")),
    v("ma7-2", "Что нам нужно?", "What do we need?", "Tom and Murzik look into an almost empty fridge.", "Play Что нам нужно", pic("madrid/7-2")),
    v("ma7-3", "Нужны яйца.", "We need eggs.", "A box of six eggs on the kitchen table.", "Play Нужны яйца", pic("madrid/7-3")),
    v("ma7-4", "Нужна картошка.", "We need potatoes.", "A small sack of potatoes on the kitchen floor.", "Play Нужна картошка", pic("madrid/7-4")),
    v("ma7-5", "Нужен лук.", "We need an onion.", "One golden onion on a cutting board.", "Play Нужен лук", pic("madrid/7-5")),
    v("ma7-6", "Помоги мне!", "Help me!", "Murzik struggles to lift a big frying pan and looks at Tom.", "Play Помоги мне", pic("madrid/7-7")),
    v("ma7-7", "Готово!", "It's ready!", "Murzik proudly holds up a golden Spanish tortilla on a plate.", "Play Готово", pic("madrid/7-9")),
  ],
  dialogue: {
    title: "Dinner for two",
    note: "Садись за стол! means “Sit down at the table!” Масло here means oil.",
    lines: [
      line("murzik", "Том, давай приготовим ужин!", "Tom, let's make dinner!"),
      line("tom", "Давай! Тортилью? Что нам нужно?", "Let's! A tortilla? What do we need?"),
      line("murzik", "Нужны яйца, нужна картошка и нужен лук.", "We need eggs, potatoes and an onion."),
      line("tom", "И масло.", "And oil."),
      line("murzik", "Том, помоги мне!", "Tom, help me!"),
      line("murzik", "Готово! Садись за стол!", "It's ready! Sit down at the table!"),
      line("tom", "Ммм! Очень вкусно! Приятного аппетита!", "Mmm! Very tasty! Enjoy your meal!"),
    ],
    gist: choice("ma7-d1", "What do Tom and Murzik cook?", [
      ["A Spanish tortilla.", true],
      ["Paella.", false],
      ["Soup.", false],
    ]),
  },
  grammar: [
    {
      title: "Нужен, нужна, нужно, нужны",
      paragraphs: [
        "The word for “needed” agrees with the thing: нужен лук (masculine), нужна картошка (feminine), нужно масло (neuter), нужны яйца (plural).",
        "Who needs it? мне (me), тебе (you), нам (us): Что нам нужно? — What do we need?",
      ],
      examples: [
        { ru: "Нужен лук.", en: "We need an onion." },
        { ru: "Нужны яйца.", en: "We need eggs." },
      ],
    },
  ],
  tasks: [
    listen("ma7-t1", "Listen to the conversation in a café. How much does it cost?", "Здравствуйте! Что вы хотите? — Мне чай, пожалуйста. И суп. — Что-нибудь ещё? — Нет, это всё. Сколько с меня? — Восемь евро.", [
      ["8 €", true],
      ["18 €", false],
      ["80 €", false],
    ], { help: "This is your Madrid listening test." }),
    fill("ma7-t2", "Complete.", "", "лук.", "Нужен", ["Нужен", "Нужна", "Нужны"], { skill: "grammar" }),
    fill("ma7-t3", "Complete.", "", "яйца.", "Нужны", ["Нужны", "Нужен", "Нужна"], { skill: "grammar" }),
    spell("ma7-t4", "Build the word for “potatoes”.", "картошка"),
    speak("ma7-t5", "Что нам нужно?", "Нужны яйца и нужна картошка.", "We need eggs and potatoes.", { help: "You are cooking with a friend. Answer aloud." }),
    listen("ma7-t6", "Listen and choose the best reply.", "Приятного аппетита!", [
      ["Спасибо!", true],
      ["Следующий!", false],
      ["Это дорого.", false],
    ], { skill: "review" }),
    listen("ma7-t7", "Listen. What did you hear?", "Сколько с меня?", [
      ["Сколько с меня?", true],
      ["Сколько стоит?", false],
      ["Можно картой?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "paella-pan",
    itemName: "Paella pan",
    itemNameRu: "Сковорода",
    ru: "Ура! Сковорода для паэльи!",
    en: "Yay! A paella pan!",
    a11y: "A big round paella pan with two handles hangs on the kitchen wall of Murzik's Madrid flat. Murzik points at it proudly.",
    image: pic("madrid/reward-7"),
    steps: ["After dinner Tom gives Murzik a present.", "It is a big round paella pan.", "Murzik hangs it on the kitchen wall.", "Next time they will cook paella!"],
    bridge: "The Madrid flat is full of colour. Tom says: “Next stop, Rome!”",
  },
};
