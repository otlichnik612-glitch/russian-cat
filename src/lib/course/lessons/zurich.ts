import { pic } from "../art";
import { choice, fill, letter, line, listen, match, read, script, speak, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Zurich · «Банк и деньги» · A2 lessons 1–7.
 * Murzik and Tom rent a room above an old clock shop in the old town. Ursula (about 65) owns it; her late
 * husband was Russian, so she speaks Russian. Exchanging money, counting francs, paying, a blocked card,
 * expensive Zurich. In lesson 6 Ursula remembers: thirty years ago a ginger cat lived above the shop and
 * paid the rent with drawings. Ursula's father kept one and sold nineteen to a gallery in Geneva.
 * Grammar: numbers with nouns — 1 франк, 2–4 франка, 5+ франков; 21 франк, 22 франка, 25 франков;
 * сколько + genitive plural; money phrases.
 */

const p = (name: string) => pic(`zurich/${name}`);

export const zurich1: Lesson = {
  id: "a2-zurich-1",
  level: "A2",
  cityId: "zurich",
  number: 1,
  title: "At the Bank",
  minutes: 8,
  goals: ["Change money", "Ask about the exchange rate", "Understand francs and euros"],
  vocabNote: "In Switzerland people pay in Swiss francs — франки. Обменять евро на франки — to change euros into francs.",
  vocab: [
    v("zu1-1", "обменять евро на франки", "to change euros into francs", "Murzik slides a few euro notes under a bank window.", "Listen to обменять евро на франки", p("1-1")),
    v("zu1-2", "курс", "exchange rate", "A screen showing EUR → CHF 0.95.", "Listen to курс", p("1-2")),
    v("zu1-3", "Какой сегодня курс?", "What's today's rate?", "Tom points at the screen.", "Listen to Какой сегодня курс", p("1-3")),
    v("zu1-4", "комиссия", "commission, fee", "A small line on a receipt: “fee 5 CHF”.", "Listen to комиссия", p("1-4")),
    v("zu1-5", "наличные", "cash", "A neat stack of red and purple franc notes.", "Listen to наличные", p("1-5")),
    v("zu1-6", "мелкими купюрами", "in small notes", "Several small notes fanned out.", "Listen to мелкими купюрами", p("1-6")),
    v("zu1-7", "паспорт, пожалуйста", "passport, please", "The cashier holds out his hand.", "Listen to паспорт, пожалуйста", p("1-7")),
    v("zu1-8", "Распишитесь здесь.", "Sign here.", "A pen and a form with a cross where to sign.", "Listen to Распишитесь здесь", p("1-8")),
  ],
  letters: [
    letter("франки", "FRAN-ki: stress on the first syllable. One франк, many франки.", "швейцарские франки", "Swiss francs"),
    letter("наличные", "na-LEECH-ny-ye: stress on ЛИ.", "Только наличные?", "Cash only?"),
  ],
  dialogue: {
    title: "At the counter",
    note: "Евро never changes: один евро, пять евро. Франк changes: один франк, пять франков.",
    lines: [
      line("tom", "Здравствуйте! Я хочу обменять евро на франки.", "Hello! I'd like to change euros into francs."),
      line("cashier", "Пожалуйста. Сколько?", "Certainly. How much?"),
      line("tom", "Двести евро. Какой сегодня курс?", "Two hundred euros. What's today's rate?"),
      line("cashier", "Ноль девяносто пять. Комиссия — пять франков. Ваш паспорт, пожалуйста.", "Nought point nine five. The fee is five francs. Your passport, please."),
      line("tom", "Вот. Можно мелкими купюрами?", "Here. Could I have small notes?"),
      line("cashier", "Конечно. Распишитесь здесь. Вот ваши наличные.", "Of course. Sign here. Here's your cash."),
    ],
    gist: choice("zu1-d1", "How much is the bank's fee?", [
      ["Five francs.", true],
      ["Ninety-five francs.", false],
      ["There's no fee.", false],
    ]),
  },
  grammar: [
    {
      title: "Money words",
      paragraphs: [
        "Обменять что на что: обменять евро на франки, обменять доллары на рубли.",
        "Купюры (notes), монеты (coins), наличные (cash), карта (card). Евро doesn't change: два евро, десять евро.",
      ],
      examples: [
        { ru: "Где можно обменять деньги?", en: "Where can I change money?" },
        { ru: "У меня только наличные.", en: "I've only got cash." },
      ],
    },
  ],
  tasks: [
    listen("zu1-t1", "Listen. How many euros does Tom change?", "Двести евро. Какой сегодня курс?", [
      ["Two hundred.", true],
      ["Twenty.", false],
      ["Two thousand.", false],
    ]),
    choice("zu1-t2", "“I'd like to change euros into francs.” Which is right?", [
      ["Я хочу обменять евро на франки.", true],
      ["Я хочу обменять евро в франки.", false],
      ["Я хочу обменять евро для франков.", false],
    ], { skill: "grammar" }),
    fill("zu1-t3", "Choose the right word: “Could I have small notes?”", "Можно мелкими", "?", "купюрами", ["купюрами", "купюры", "купюр"], { skill: "grammar" }),
    read("zu1-t4", "Read the board at the bank. How much is the fee?", "ОБМЕН ВАЛЮТЫ\nEUR → CHF: 0,95\nUSD → CHF: 0,88\nКомиссия: 5 CHF\nНужен паспорт!", [
      ["5 francs.", true],
      ["0.95 francs.", false],
      ["No fee.", false],
    ]),
    match("zu1-t5", "Match the Russian with the English.", [
      ["курс", "exchange rate"],
      ["комиссия", "fee"],
      ["наличные", "cash"],
      ["Распишитесь здесь.", "Sign here."],
    ], { skill: "words" }),
    tf("zu1-t6", "Евро never changes its form: два евро, пять евро.", true, "True or false?", { skill: "grammar" }),
    speak("zu1-t7", "Чем могу помочь?", "Здравствуйте! Я хочу обменять сто евро на франки. Какой сегодня курс?", "Hello! I'd like to change a hundred euros into francs. What's today's rate?", {
      help: "Change money at the bank out loud.",
    }),
  ],
  reward: {
    itemId: "coinjar",
    itemName: "Glass coin jar",
    itemNameRu: "Банка для монет",
    ru: "Копилка для франков!",
    en: "A money jar for francs!",
    a11y: "A glass jar with a few silver coins stands on a shelf in a small room; through the window, old roofs and a church clock tower.",
    image: p("reward-1"),
    steps: ["Their room is above an old clock shop in Zurich's old town.", "From every city Murzik has a few coins left.", "Ursula, the owner, gives him a glass jar for them.", "Euros, crowns, złoty — and now francs."],
    bridge: "Francs, francs, франков, франка… Murzik is confused. Ursula laughs: “Давай посчитаем вместе.”",
  },
};

export const zurich2: Lesson = {
  id: "a2-zurich-2",
  level: "A2",
  cityId: "zurich",
  number: 2,
  title: "One Franc, Two Francs, Five Francs",
  minutes: 8,
  goals: ["Use numbers with nouns", "Say prices correctly", "Know the rule 1 / 2–4 / 5+"],
  vocabNote: "After 1 — nominative: один франк. After 2, 3, 4 — genitive singular: два франка. After 5 and more — genitive plural: пять франков.",
  vocab: [
    v("zu2-1", "один франк", "one franc", "One silver coin.", "Listen to один франк", p("2-1")),
    v("zu2-2", "два франка", "two francs", "Two coins.", "Listen to два франка", p("2-2")),
    v("zu2-3", "пять франков", "five francs", "A big five-franc coin.", "Listen to пять франков", p("2-3")),
    v("zu2-4", "двадцать один франк", "twenty-one francs", "A price tag: 21 CHF.", "Listen to двадцать один франк", p("2-4")),
    v("zu2-5", "монета", "coin", "A shiny coin spinning on the table.", "Listen to монета", p("2-5")),
    v("zu2-6", "две монеты / пять монет", "two coins / five coins", "Two coins, then five coins.", "Listen to две монеты, пять монет", p("2-6")),
    v("zu2-7", "Посчитаем вместе.", "Let's count together.", "Ursula and Murzik count coins on the table.", "Listen to Посчитаем вместе", p("2-7")),
    v("zu2-8", "Всего…", "In total…", "Ursula writes a sum at the bottom of a list.", "Listen to Всего", p("2-8")),
  ],
  letters: [
    letter("франков", "FRAN-kaf: the final в sounds like ф.", "пять франков", "five francs"),
    letter("двадцать", "DVA-tsat': the д before ц is silent.", "двадцать один франк", "twenty-one francs"),
  ],
  dialogue: {
    title: "Counting with Ursula",
    note: "Ursula's late husband was Russian. She still speaks Russian, slowly and carefully.",
    lines: [
      line("murzik", "Урсула, я запутался! Один франк, два франка, пять франков…", "Ursula, I'm muddled! One franc, two francs, five francs…"),
      line("ursula", "Посчитаем вместе. Один — франк. Два, три, четыре — франка.", "Let's count together. One — франк. Two, three, four — франка."),
      line("ursula", "Пять, шесть, десять, двадцать — франков.", "Five, six, ten, twenty — франков."),
      line("murzik", "А двадцать один?", "And twenty-one?"),
      line("ursula", "Смотри на последнее слово: двадцать один франк. Двадцать два франка. Двадцать пять франков.", "Look at the last word: twenty-one франк. Twenty-two франка. Twenty-five франков."),
      line("murzik", "Значит, у меня всего… семь франков и две монеты по пятьдесят сантимов!", "So I've got in total… seven francs and two fifty-centime coins!"),
    ],
    gist: choice("zu2-d1", "What does Ursula say about 21, 22, 25?", [
      ["Look at the last number word.", true],
      ["Always use франков after 20.", false],
      ["It doesn't matter.", false],
    ]),
  },
  grammar: [
    {
      title: "Numbers + nouns",
      paragraphs: [
        "1 (21, 31…) + nominative singular: один франк, одна монета. 2–4 (22–24…) + genitive singular: два франка, три монеты. 5–20 (25–30…) + genitive plural: пять франков, десять монет.",
        "11–14 always take the genitive plural: одиннадцать франков, четырнадцать монет. Сколько? also takes the genitive plural: сколько франков?",
      ],
      examples: [
        { ru: "Кофе стоит пять франков, а булочка — три франка.", en: "Coffee costs five francs, and a bun three francs." },
        { ru: "У меня двадцать одна монета.", en: "I've got twenty-one coins." },
      ],
    },
  ],
  tasks: [
    listen("zu2-t1", "Listen. How much money does Murzik have?", "Значит, у меня всего… семь франков и две монеты по пятьдесят сантимов!", [
      ["Eight francs (seven francs and two fifty-centime coins).", true],
      ["Seventy francs.", false],
      ["Two francs.", false],
    ]),
    choice("zu2-t2", "“Three francs.” Which is right?", [
      ["три франка", true],
      ["три франков", false],
      ["три франк", false],
    ], { skill: "grammar" }),
    fill("zu2-t3", "Choose the right form: “twelve francs”", "двенадцать", "", "франков", ["франков", "франка", "франк"], { skill: "grammar" }),
    read("zu2-t4", "Read the café menu. How much is a coffee and a croissant?", "КАФЕ\nКофе — 5 франков\nКруассан — 4 франка\nЧай — 4 франка\nВода — 3 франка", [
      ["Nine francs.", true],
      ["Eight francs.", false],
      ["Twelve francs.", false],
    ]),
    match("zu2-t5", "Match the Russian with the numbers.", [
      ["один франк", "1 franc"],
      ["два франка", "2 francs"],
      ["пять франков", "5 francs"],
      ["двадцать один франк", "21 francs"],
    ], { skill: "words" }),
    tf("zu2-t6", "After 11, 12, 13, 14 you always use the genitive plural: двенадцать франков.", true, "True or false?", { skill: "grammar" }),
    speak("zu2-t7", "Сколько у тебя денег?", "У меня двадцать два франка и пять монет.", "I've got twenty-two francs and five coins.", {
      help: "Count your money out loud. Watch the endings!",
    }),
  ],
  reward: {
    itemId: "abacus",
    itemName: "Wooden abacus",
    itemNameRu: "Деревянные счёты",
    ru: "Счёты — как у бабушки в детстве!",
    en: "An abacus — like Grandma had long ago!",
    a11y: "Old wooden Russian counting frame with brown and white beads stands on the desk.",
    image: p("reward-2"),
    steps: ["Ursula takes old wooden счёты from a drawer.", "“Мой муж привёз их из России.”", "Murzik counts francs on them: один, два, три франка…", "Click-click — the beads fly."],
    bridge: "With francs in his pocket, Murzik goes shopping. But in Zurich, paying is not so simple.",
  },
};

export const zurich3: Lesson = {
  id: "a2-zurich-3",
  level: "A2",
  cityId: "zurich",
  number: 3,
  title: "Card or Cash?",
  minutes: 8,
  goals: ["Pay in a shop", "Ask about cards and cash machines", "Check the change"],
  vocabNote: "Банкомат — cash machine. Снять деньги — to withdraw money. Оплатить картой — to pay by card.",
  vocab: [
    v("zu3-1", "банкомат", "cash machine, ATM", "A cash machine in a stone wall.", "Listen to банкомат", p("3-1")),
    v("zu3-2", "снять деньги", "to withdraw money", "Notes coming out of the cash machine.", "Listen to снять деньги", p("3-2")),
    v("zu3-3", "оплатить картой", "to pay by card", "A card held to a payment terminal.", "Listen to оплатить картой", p("3-3")),
    v("zu3-4", "Приложите карту.", "Tap your card.", "The terminal screen: «Приложите карту».", "Listen to Приложите карту", p("3-4")),
    v("zu3-5", "Оплата прошла.", "The payment went through.", "A green tick on the terminal.", "Listen to Оплата прошла", p("3-5")),
    v("zu3-6", "Вы мне недодали.", "You've short-changed me.", "Murzik counts coins in his paw, frowning.", "Listen to Вы мне недодали", p("3-6")),
    v("zu3-7", "Извините, ошиблась.", "Sorry, my mistake.", "The shop assistant smiles and hands over a coin.", "Listen to Извините, ошиблась", p("3-7")),
    v("zu3-8", "Без сдачи, пожалуйста.", "Exact money, please. (no change)", "A sign by the till.", "Listen to Без сдачи, пожалуйста", p("3-8")),
  ],
  letters: [
    letter("банкомат", "ban-ka-MAT: stress on the end.", "Где банкомат?", "Where's the cash machine?"),
    letter("недодали", "ne-DO-da-li: stress on ДО. Written as one word.", "Вы мне недодали.", "You've short-changed me."),
  ],
  dialogue: {
    title: "The chocolate shop",
    note: "Murzik buys Swiss chocolate. The shop assistant speaks a little Russian.",
    lines: [
      line("murzik", "Три плитки шоколада, пожалуйста. Можно оплатить картой?", "Three bars of chocolate, please. Can I pay by card?"),
      line("seller", "Конечно. Приложите карту… Готово, оплата прошла.", "Of course. Tap your card… Done, the payment went through."),
      line("murzik", "Спасибо! А ещё две плитки — наличными. Вот двадцать франков.", "Thanks! And two more bars — in cash. Here's twenty francs."),
      line("seller", "С вас двенадцать франков. Вот ваша сдача — семь франков.", "That's twelve francs. Here's your change — seven francs."),
      line("murzik", "Простите, вы мне недодали. Должно быть восемь франков.", "Sorry, you've short-changed me. It should be eight francs."),
      line("seller", "Извините, ошиблась! Вот ещё один франк.", "Sorry, my mistake! Here's one more franc."),
    ],
    gist: choice("zu3-d1", "How much change should Murzik get?", [
      ["Eight francs.", true],
      ["Seven francs.", false],
      ["Twelve francs.", false],
    ]),
  },
  grammar: [
    {
      title: "С вас… — That'll be…",
      paragraphs: [
        "С вас + number + noun = that'll be: С вас двенадцать франков. С вас один франк.",
        "Сдача — change. Недодать — to give too little. Взять / снять деньги в банкомате — withdraw money.",
      ],
      examples: [
        { ru: "С вас тридцать четыре франка.", en: "That'll be thirty-four francs." },
        { ru: "Где здесь банкомат? Мне нужно снять деньги.", en: "Where's a cash machine here? I need to withdraw money." },
      ],
    },
  ],
  tasks: [
    listen("zu3-t1", "Listen. How much does the seller ask for?", "С вас двенадцать франков.", [
      ["Twelve francs.", true],
      ["Twenty francs.", false],
      ["Two francs.", false],
    ]),
    choice("zu3-t2", "“That'll be thirty-four francs.” Which is right?", [
      ["С вас тридцать четыре франка.", true],
      ["С вас тридцать четыре франков.", false],
      ["У вас тридцать четыре франк.", false],
    ], { skill: "grammar" }),
    fill("zu3-t3", "Choose the right form: “I need to withdraw money.”", "Мне нужно снять", ".", "деньги", ["деньги", "деньгам", "деньгами"], { skill: "grammar" }),
    read("zu3-t4", "Read the sign on the cash machine. What's the fee for a foreign card?", "БАНКОМАТ\nСнять деньги: от 20 до 1000 франков\nИностранная карта: комиссия 4 франка\nРаботает 24 часа", [
      ["Four francs.", true],
      ["Twenty francs.", false],
      ["No fee.", false],
    ]),
    match("zu3-t5", "Match the Russian with the English.", [
      ["банкомат", "cash machine"],
      ["снять деньги", "to withdraw money"],
      ["Оплата прошла.", "The payment went through."],
      ["Вы мне недодали.", "You've short-changed me."],
    ], { skill: "words" }),
    script("zu3-t6", "Pay in a shop.", [
      { speaker: "Seller", text: "С вас пятнадцать франков." },
      { speaker: "You", answer: "Можно оплатить картой?", options: ["Можно оплатить картой?", "Можно оплатить карта?", "Вы мне недодали."] },
      { speaker: "Seller", text: "Конечно. Приложите карту." },
      { speaker: "You", answer: "Спасибо. Оплата прошла?", options: ["Спасибо. Оплата прошла?", "Спасибо. Пятнадцать франк?", "Спасибо. Банкомат."] },
    ], { skill: "speaking" }),
    speak("zu3-t7", "Вот ваша сдача.", "Простите, вы мне недодали. Должно быть пять франков, а не три.", "Sorry, you've short-changed me. It should be five francs, not three.", {
      help: "Politely point out that the change is wrong, out loud.",
    }),
  ],
  reward: {
    itemId: "chocolatebox",
    itemName: "Box of Swiss chocolate",
    itemNameRu: "Коробка швейцарского шоколада",
    ru: "Пять плиток шоколада!",
    en: "Five bars of chocolate!",
    a11y: "A red cardboard box with five bars of Swiss chocolate stands on the table next to the abacus.",
    image: p("reward-3"),
    steps: ["Murzik brings home five bars of chocolate.", "One for Ursula, one for Tom, one for Murzik…", "…and two “for later”.", "“Later” lasts until the evening."],
    bridge: "The next morning Tom tries to pay for the tram — and his card doesn't work. “Карта заблокирована”?!",
  },
};

export const zurich4: Lesson = {
  id: "a2-zurich-4",
  level: "A2",
  cityId: "zurich",
  number: 4,
  title: "My Card Is Blocked!",
  minutes: 8,
  goals: ["Call the bank about a problem", "Understand questions from the bank", "Transfer money"],
  vocabNote: "Заблокировать карту — to block a card. Перевести деньги — to transfer money. Перевод — transfer.",
  vocab: [
    v("zu4-1", "Карта заблокирована.", "The card is blocked.", "A terminal screen with a red cross.", "Listen to Карта заблокирована", p("4-1")),
    v("zu4-2", "служба поддержки", "customer support", "Tom on the phone, listening to hold music.", "Listen to служба поддержки", p("4-2")),
    v("zu4-3", "Назовите последние четыре цифры.", "Tell me the last four digits.", "Four digits highlighted on a card.", "Listen to Назовите последние четыре цифры", p("4-3")),
    v("zu4-4", "подозрительная операция", "suspicious transaction", "A warning symbol over a list of payments.", "Listen to подозрительная операция", p("4-4")),
    v("zu4-5", "Это были вы?", "Was that you?", "The bank worker's voice sounds doubtful.", "Listen to Это были вы", p("4-5")),
    v("zu4-6", "разблокировать", "to unblock", "A green tick appears on the card.", "Listen to разблокировать", p("4-6")),
    v("zu4-7", "перевести деньги", "to transfer money", "An arrow from one phone to another with a coin.", "Listen to перевести деньги", p("4-7")),
    v("zu4-8", "Никому не говорите ПИН-код.", "Never tell anyone your PIN.", "A finger on lips; a padlock.", "Listen to Никому не говорите ПИН-код", p("4-8")),
  ],
  letters: [
    letter("заблокирована", "za-bla-KEE-ra-va-na: stress on КИ.", "Карта заблокирована.", "The card is blocked."),
    letter("цифры", "TSIF-ry: ц is always hard, so и after it sounds like ы.", "четыре цифры", "four digits"),
  ],
  dialogue: {
    title: "Calling the bank",
    note: "Yesterday Murzik paid for chocolate with Tom's card — the bank found it suspicious.",
    lines: [
      line("tom", "Здравствуйте! Моя карта заблокирована. Я в Цюрихе.", "Hello! My card is blocked. I'm in Zurich."),
      line("cashier", "Назовите, пожалуйста, последние четыре цифры карты.", "Please tell me the last four digits of the card."),
      line("tom", "Два, семь, ноль, пять.", "Two, seven, nought, five."),
      line("cashier", "Вчера была подозрительная операция в Цюрихе: шоколадный магазин. Это были вы?", "Yesterday there was a suspicious transaction in Zurich: a chocolate shop. Was that you?"),
      line("tom", "Это был мой кот… То есть друг. Да, это мы!", "That was my cat… I mean, my friend. Yes, that was us!"),
      line("cashier", "Хорошо, мы разблокируем карту. И помните: никому не говорите ПИН-код.", "All right, we'll unblock the card. And remember: never tell anyone your PIN."),
    ],
    gist: choice("zu4-d1", "Why was Tom's card blocked?", [
      ["The bank thought the chocolate payment was suspicious.", true],
      ["Tom forgot his PIN.", false],
      ["The card was too old.", false],
    ]),
  },
  grammar: [
    {
      title: "Цифры и числа",
      paragraphs: [
        "Цифра — a digit (0–9). Число — a number. Номер — a number of something (номер карты, номер телефона).",
        "Adjectives like последние, первые usually go before the number: последние четыре цифры, первые два дня.",
      ],
      examples: [
        { ru: "Назовите номер карты.", en: "Tell me the card number." },
        { ru: "Мне нужно перевести сто франков другу.", en: "I need to transfer a hundred francs to a friend." },
      ],
    },
  ],
  tasks: [
    listen("zu4-t1", "Listen. What are the last digits of Tom's card?", "Два, семь, ноль, пять.", [
      ["2705.", true],
      ["2750.", false],
      ["7205.", false],
    ]),
    choice("zu4-t2", "“I need to transfer money to a friend.” Which is right?", [
      ["Мне нужно перевести деньги другу.", true],
      ["Мне нужно перевести деньги друг.", false],
      ["Мне нужно перевести денег другом.", false],
    ], { skill: "grammar" }),
    fill("zu4-t3", "Choose the right word: “Never tell anyone your PIN.”", "", "не говорите ПИН-код.", "Никому", ["Никому", "Никто", "Ничего"], { skill: "grammar" }),
    read("zu4-t4", "Read the bank's text message. What should Tom do?", "БАНК: Подозрительная операция по карте *2705.\nЕсли это были вы, ответьте ДА.\nЕсли нет — позвоните нам: 0800 123 456.", [
      ["Reply YES if it was him.", true],
      ["Go to the bank in person.", false],
      ["Buy a new card.", false],
    ]),
    match("zu4-t5", "Match the Russian with the English.", [
      ["Карта заблокирована.", "The card is blocked."],
      ["служба поддержки", "customer support"],
      ["разблокировать", "to unblock"],
      ["перевести деньги", "to transfer money"],
    ], { skill: "words" }),
    tf("zu4-t6", "The bank asks for Tom's PIN on the phone.", false, "True or false?", { skill: "listening" }),
    speak("zu4-t7", "Служба поддержки, слушаю вас.", "Здравствуйте! Моя карта заблокирована. Я сейчас за границей. Можно её разблокировать?", "Hello! My card is blocked. I'm abroad at the moment. Can you unblock it?", {
      help: "Call the bank out loud and explain the problem.",
    }),
  ],
  reward: {
    itemId: "wallet",
    itemName: "Leather wallet",
    itemNameRu: "Кожаный кошелёк",
    ru: "Кошелёк — для франков и карты!",
    en: "A wallet — for francs and the card!",
    a11y: "A small brown leather wallet with a coin pocket lies on the desk next to the coin jar.",
    image: p("reward-4"),
    steps: ["Ursula gives Tom her husband's old leather wallet.", "“Карту — сюда, монеты — сюда, ПИН-код — только в голову.”", "Tom puts the card in carefully.", "Murzik puts in one chocolate wrapper. As a keepsake."],
    bridge: "Ursula takes them for a walk by the lake. “Цюрих — один из самых дорогих городов мира,” she warns.",
  },
};

export const zurich5: Lesson = {
  id: "a2-zurich-5",
  level: "A2",
  cityId: "zurich",
  number: 5,
  title: "An Expensive City",
  minutes: 8,
  goals: ["Talk about prices and budget", "Compare prices: на сколько дороже", "Use numbers in longer phrases"],
  vocabNote: "Бюджет — budget. На сколько дороже? — How much more expensive? Мы тратим — we spend.",
  vocab: [
    v("zu5-1", "Как дорого!", "How expensive!", "Tom looks at a menu and his eyes widen.", "Listen to Как дорого", p("5-1")),
    v("zu5-2", "бюджет", "budget", "A notebook with a list of costs.", "Listen to бюджет", p("5-2")),
    v("zu5-3", "тратить деньги", "to spend money", "Coins flying out of a wallet.", "Listen to тратить деньги", p("5-3")),
    v("zu5-4", "на пять франков дороже", "five francs more expensive", "Two price tags: 15 and 20 francs.", "Listen to на пять франков дороже", p("5-4")),
    v("zu5-5", "в два раза дешевле", "half the price (twice as cheap)", "A supermarket sandwich next to a café sandwich.", "Listen to в два раза дешевле", p("5-5")),
    v("zu5-6", "купить в супермаркете", "to buy at the supermarket", "A basket with bread, cheese and fruit.", "Listen to купить в супермаркете", p("5-6")),
    v("zu5-7", "пикник у озера", "a picnic by the lake", "A blanket by a blue lake, mountains behind.", "Listen to пикник у озера", p("5-7")),
    v("zu5-8", "Мы сэкономили!", "We saved money!", "Murzik and Tom give each other a high five.", "Listen to Мы сэкономили", p("5-8")),
  ],
  letters: [
    letter("сэкономили", "sy-ka-NO-mi-li: stress on НО. Spelled сэ-, so the с stays hard.", "Мы сэкономили!", "We saved!"),
  ],
  dialogue: {
    title: "By the lake",
    note: "На + accusative for the difference: на пять франков дороже. В два раза — twice.",
    lines: [
      line("tom", "Бутерброд в кафе — двадцать франков?! Как дорого!", "A sandwich at the café — twenty francs?! How expensive!"),
      line("ursula", "В супермаркете он в два раза дешевле. Десять франков.", "At the supermarket it's half the price. Ten francs."),
      line("murzik", "А кофе здесь на два франка дороже, чем в Милане.", "And coffee here is two francs more expensive than in Milan."),
      line("ursula", "Если хотите тратить меньше — купите всё в супермаркете и устройте пикник у озера.", "If you want to spend less, buy everything at the supermarket and have a picnic by the lake."),
      line("tom", "Хорошая идея. Наш бюджет — пятьдесят франков в день.", "Good idea. Our budget is fifty francs a day."),
      line("murzik", "Хлеб, сыр, фрукты — двадцать два франка. Мы сэкономили!", "Bread, cheese, fruit — twenty-two francs. We saved!"),
    ],
    gist: choice("zu5-d1", "What does Ursula suggest?", [
      ["Buy food at the supermarket and have a picnic by the lake.", true],
      ["Eat only at expensive cafés.", false],
      ["Go back to Milan.", false],
    ]),
  },
  grammar: [
    {
      title: "На сколько? Во сколько раз?",
      paragraphs: [
        "Difference: на + accusative: на пять франков дороже, на два франка дешевле.",
        "Times: в два раза дороже (twice as expensive), в три раза дешевле (three times cheaper).",
      ],
      examples: [
        { ru: "Билет на поезд на десять франков дороже, чем на автобус.", en: "The train ticket is ten francs more than the bus." },
        { ru: "В супермаркете всё в два раза дешевле.", en: "At the supermarket everything is half the price." },
      ],
    },
  ],
  tasks: [
    listen("zu5-t1", "Listen. How much is the sandwich at the café?", "Бутерброд в кафе — двадцать франков?! Как дорого!", [
      ["Twenty francs.", true],
      ["Ten francs.", false],
      ["Twelve francs.", false],
    ]),
    choice("zu5-t2", "“Five francs more expensive.” Which is right?", [
      ["на пять франков дороже", true],
      ["в пять франков дороже", false],
      ["на пять франка дороже", false],
    ], { skill: "grammar" }),
    fill("zu5-t3", "Choose the right word: “Everything is half the price.”", "Всё в два", "дешевле.", "раза", ["раза", "раз", "разом"], { skill: "grammar" }),
    read("zu5-t4", "Read Tom's budget. How much is left?", "БЮДЖЕТ НА ДЕНЬ: 50 франков\nТрамвай — 9 франков\nПикник — 22 франка\nМороженое — 6 франков\nОСТАЛОСЬ: ?", [
      ["Thirteen francs.", true],
      ["Thirty-seven francs.", false],
      ["Three francs.", false],
    ]),
    match("zu5-t5", "Match the Russian with the English.", [
      ["бюджет", "budget"],
      ["тратить деньги", "to spend money"],
      ["Мы сэкономили!", "We saved money!"],
      ["пикник у озера", "a picnic by the lake"],
    ], { skill: "words" }),
    tf("zu5-t6", "Coffee in Zurich is two francs cheaper than in Milan.", false, "True or false?", { skill: "listening" }),
    speak("zu5-t7", "Сколько ты тратишь в день, когда путешествуешь?", "Обычно я трачу пятьдесят франков в день. Еду покупаю в супермаркете — так в два раза дешевле.", "I usually spend fifty francs a day. I buy food at the supermarket — it's half the price.", {
      help: "Talk about your travel budget out loud.",
    }),
  ],
  reward: {
    itemId: "picnicblanket",
    itemName: "Red-and-white picnic blanket",
    itemNameRu: "Плед для пикника",
    ru: "Пикник у озера — лучше любого кафе!",
    en: "A picnic by the lake — better than any café!",
    a11y: "A red-and-white checked picnic blanket is folded on a chair, with a small basket on top.",
    image: p("reward-5"),
    steps: ["Ursula lends them a red-and-white picnic blanket.", "It has a little white cross — like the Swiss flag.", "Every evening they have dinner by the lake.", "The budget is happy. So is Murzik."],
    bridge: "That evening Ursula shows them the back room of her clock shop. On the wall — a framed drawing of a clock tower, signed «А.».",
  },
};

export const zurich6: Lesson = {
  id: "a2-zurich-6",
  level: "A2",
  cityId: "zurich",
  number: 6,
  title: "Paid in Drawings",
  minutes: 8,
  goals: ["Understand a memory", "Talk about rent and payment", "Use numbers in a story: три месяца, двадцать рисунков"],
  vocabNote: "Платить за комнату — to pay rent for a room. Вместо денег — instead of money. Галерея — gallery.",
  vocab: [
    v("zu6-1", "часовая мастерская", "clock workshop", "Hundreds of clocks ticking on the walls.", "Listen to часовая мастерская", p("6-1")),
    v("zu6-2", "платить за комнату", "to pay for the room (rent)", "An old ledger with columns of numbers.", "Listen to платить за комнату", p("6-2")),
    v("zu6-3", "у неё не было денег", "she had no money", "An empty purse turned upside down.", "Listen to у неё не было денег", p("6-3")),
    v("zu6-4", "рисунками", "with drawings", "A pile of drawings tied with string.", "Listen to рисунками", p("6-4")),
    v("zu6-5", "двадцать рисунков", "twenty drawings", "Twenty small drawings laid out on a table.", "Listen to двадцать рисунков", p("6-5")),
    v("zu6-6", "за три месяца", "for three months", "A calendar with three months circled.", "Listen to за три месяца", p("6-6")),
    v("zu6-7", "галерея в Женеве", "a gallery in Geneva", "A white gallery room with paintings on the walls.", "Listen to галерея в Женеве", p("6-7")),
    v("zu6-8", "Они висят там до сих пор.", "They still hang there.", "Framed drawings in a gallery, a small «А.» in the corner.", "Listen to Они висят там до сих пор", p("6-8")),
  ],
  letters: [
    letter("рисунков", "ri-SUN-kaf: stress on СУН, final в sounds like ф.", "двадцать рисунков", "twenty drawings"),
    letter("Женеве", "zhy-NE-vye: ж is always hard, so the first е sounds like ы; н is hard here too.", "в Женеве", "in Geneva"),
  ],
  dialogue: {
    title: "In the back room",
    note: "Ursula's father ran the clock shop thirty years ago; the room upstairs was rented out.",
    lines: [
      line("ursula", "Тридцать лет назад в вашей комнате жила рыжая кошка. Ася.", "Thirty years ago a ginger cat lived in your room. Asya."),
      line("murzik", "Моя бабушка!", "My grandmother!"),
      line("ursula", "У неё не было денег. И она платила за комнату рисунками — часы, башни, горы.", "She had no money. And she paid for the room with drawings — clocks, towers, mountains."),
      line("tom", "Сколько рисунков?", "How many drawings?"),
      line("ursula", "За три месяца — двадцать рисунков. Папа один оставил себе. А девятнадцать продал галерее в Женеве.", "In three months — twenty drawings. Dad kept one. And he sold nineteen to a gallery in Geneva."),
      line("ursula", "Говорят, они висят там до сих пор.", "They say they still hang there."),
    ],
    gist: choice("zu6-d1", "How did Asya pay for her room?", [
      ["With drawings.", true],
      ["With francs.", false],
      ["She worked in the shop.", false],
    ]),
  },
  grammar: [
    {
      title: "Numbers in a story",
      paragraphs: [
        "Time: один месяц, два / три месяца, пять месяцев. Things: один рисунок, два рисунка, двадцать рисунков, двадцать один рисунок.",
        "За + accusative = in, over (a period): за три месяца (in three months), за неделю.",
      ],
      examples: [
        { ru: "Она прожила здесь три месяца.", en: "She lived here for three months." },
        { ru: "За неделю она нарисовала пять рисунков.", en: "In a week she made five drawings." },
      ],
    },
  ],
  tasks: [
    listen("zu6-t1", "Listen. How many drawings did Ursula's father sell?", "А девятнадцать продал галерее в Женеве.", [
      ["Nineteen.", true],
      ["Twenty.", false],
      ["Nine.", false],
    ]),
    choice("zu6-t2", "Detective! Where are most of Asya's drawings now?", [
      ["In a gallery in Geneva.", true],
      ["In Ursula's shop, all of them.", false],
      ["Lost.", false],
    ], { skill: "listening" }),
    fill("zu6-t3", "Choose the right form: “twenty-one drawings”", "двадцать один", "", "рисунок", ["рисунок", "рисунка", "рисунков"], { skill: "grammar" }),
    read("zu6-t4", "Ursula shows the old ledger. How much was the rent per month?", "Комната наверху:\nАся — 3 месяца\nОплата: 20 рисунков (вместо 300 франков в месяц)\nХозяин доволен!", [
      ["300 francs a month.", true],
      ["20 francs.", false],
      ["3 francs.", false],
    ]),
    match("zu6-t5", "Match the Russian with the English.", [
      ["часовая мастерская", "clock workshop"],
      ["у неё не было денег", "she had no money"],
      ["за три месяца", "in three months"],
      ["до сих пор", "still, until now"],
    ], { skill: "words" }),
    tf("zu6-t6", "Ursula's father kept one drawing.", true, "True or false?", { skill: "listening" }),
    speak("zu6-t7", "Сколько ты платишь за квартиру?", "Я плачу девятьсот франков в месяц. За год — больше десяти тысяч франков.", "I pay nine hundred francs a month. In a year — over ten thousand francs.", {
      help: "Talk about rent out loud. Watch the number endings.",
    }),
  ],
  reward: {
    itemId: "towerdrawing",
    itemName: "Photo of Asya's clock-tower drawing",
    itemNameRu: "Фото рисунка Аси",
    ru: "Башня с часами — рисунок бабушки!",
    en: "A clock tower — Grandma's drawing!",
    a11y: "A photo of an old pencil drawing of a church clock tower, signed «А.» in the corner, stands propped against the coin jar.",
    image: p("reward-6"),
    steps: ["Tom photographs Asya's drawing in the back room.", "A clock tower — the same one they see from their window.", "Murzik puts the photo next to the coin jar.", "Now he knows: Geneva is next."],
    bridge: "Ursula says goodbye in her own way. She takes a small clock down from the wall of the workshop.",
  },
};

export const zurich7: Lesson = {
  id: "a2-zurich-7",
  level: "A2",
  cityId: "zurich",
  number: 7,
  title: "Zurich Exam",
  minutes: 9,
  goals: ["Understand a longer story", "Pay, count and change money", "Review everything from Zurich"],
  vocabNote: "Lesson 7 is the city exam: a longer listening story and a review of everything from Zurich.",
  vocab: [
    v("zu7-1", "часы с кукушкой", "cuckoo clock", "A carved wooden cuckoo clock; a little bird peeps out.", "Listen to часы с кукушкой", p("7-1")),
    v("zu7-2", "Их сделал мой отец.", "My father made it.", "Ursula holds the clock carefully.", "Listen to Их сделал мой отец", p("7-2")),
    v("zu7-3", "Они бьют каждый час.", "It strikes every hour.", "The cuckoo comes out: ку-ку!", "Listen to Они бьют каждый час", p("7-3")),
    v("zu7-4", "Это бесценно.", "It's priceless.", "Murzik hugs the clock.", "Listen to Это бесценно", p("7-4")),
    v("zu7-5", "Сколько мы вам должны?", "How much do we owe you?", "Tom reaches for his wallet.", "Listen to Сколько мы вам должны", p("7-5")),
    v("zu7-6", "Нисколько!", "Nothing at all!", "Ursula waves her hands.", "Listen to Нисколько", p("7-6")),
    v("zu7-7", "почти три часа", "almost three hours", "A train running along a lake, heading west.", "Listen to почти три часа", p("7-7")),
    v("zu7-8", "Найдите её рисунки!", "Find her drawings!", "Ursula points west.", "Listen to Найдите её рисунки", p("7-8")),
  ],
  letters: [
    letter("кукушкой", "ku-KUSH-kay: stress on КУШ.", "часы с кукушкой", "cuckoo clock"),
  ],
  dialogue: {
    title: "The cuckoo clock",
    note: "Часы is always plural in Russian: эти часы, они бьют, их сделал отец.",
    lines: [
      line("ursula", "Это вам. Часы с кукушкой. Их сделал мой отец.", "This is for you. A cuckoo clock. My father made it."),
      line("murzik", "Они такие красивые! Это бесценно.", "It's so beautiful! It's priceless."),
      line("tom", "Урсула, сколько мы вам должны?", "Ursula, how much do we owe you?"),
      line("ursula", "Нисколько! Папа сделал их для Аси — в благодарность за рисунки. Но она не смогла их увезти. Они ждали тридцать лет.", "Nothing at all! Dad made it for Asya — as thanks for the drawings. But she couldn't take it with her. It's waited thirty years."),
      line("ursula", "Поезд в Женеву идёт почти три часа. Найдите её рисунки!", "The train to Geneva takes almost three hours. Find her drawings!"),
      line("murzik", "Найдём! И каждый час кукушка будет нам напоминать о вас.", "We will! And every hour the cuckoo will remind us of you."),
    ],
    gist: choice("zu7-d1", "Why doesn't Ursula take money for the clock?", [
      ["It was made for Asya long ago — it has been waiting for her family.", true],
      ["The clock is broken.", false],
      ["Tom's card is blocked.", false],
    ]),
  },
  grammar: [
    {
      title: "Zurich review",
      paragraphs: [
        "Numbers + nouns: 1 франк / монета; 2–4 франка / монеты; 5–20 франков / монет; 21 франк, 22 франка, 25 франков; 11–14 + genitive plural.",
        "Money: обменять евро на франки, курс, комиссия, наличные, снять деньги, оплатить картой, сдача, С вас…, перевести деньги, на пять франков дороже, в два раза дешевле.",
      ],
      examples: [
        { ru: "С вас двадцать три франка. Можно картой.", en: "That'll be twenty-three francs. You can pay by card." },
        { ru: "Мы прожили в Цюрихе две недели и потратили пятьсот франков.", en: "We lived in Zurich for two weeks and spent five hundred francs." },
      ],
    },
  ],
  tasks: [
    listen("zu7-t1", "Audio story: Ursula talks about her shop. Listen. How many clocks are in the shop?", "Моему магазину сто лет. Его открыл мой дедушка. Сейчас здесь двести сорок часов: маленькие и большие, старые и новые. Каждый час они бьют все вместе. Соседи привыкли. А мой муж говорил: «Двести сорок часов — и ни одной минуты свободного времени!»", [
      ["240.", true],
      ["100.", false],
      ["24.", false],
    ]),
    choice("zu7-t2", "In Ursula's story, who opened the shop?", [
      ["Her grandfather.", true],
      ["Her husband.", false],
      ["Asya.", false],
    ], { skill: "listening" }),
    choice("zu7-t3", "“That'll be twenty-three francs.” Which is right?", [
      ["С вас двадцать три франка.", true],
      ["С вас двадцать три франков.", false],
      ["С вас двадцать три франк.", false],
    ], { skill: "grammar" }),
    read("zu7-t4", "Read the train ticket. How long is the journey?", "ЦЮРИХ — ЖЕНЕВА\nОтправление: 10:02\nПрибытие: 12:46\nЦена: 2 × 89 франков", [
      ["About two and three-quarter hours.", true],
      ["About one hour.", false],
      ["About eight hours.", false],
    ]),
    script("zu7-t5", "Say goodbye to Ursula.", [
      { speaker: "Ursula", text: "Это вам — часы с кукушкой." },
      { speaker: "You", answer: "Спасибо! Сколько с нас?", options: ["Спасибо! Сколько с нас?", "Спасибо! Карта заблокирована.", "Спасибо! Двадцать франк."] },
      { speaker: "Ursula", text: "Нисколько! Найдите рисунки Аси." },
      { speaker: "You", answer: "Обязательно найдём! Спасибо за всё!", options: ["Обязательно найдём! Спасибо за всё!", "Обязательно, наличными!", "Вы мне недодали!"] },
    ], { skill: "review" }),
    match("zu7-t6", "Zurich review: match the Russian with the English.", [
      ["курс", "exchange rate"],
      ["банкомат", "cash machine"],
      ["бюджет", "budget"],
      ["часы с кукушкой", "cuckoo clock"],
    ], { skill: "review" }),
    speak("zu7-t7", "Сколько вы потратили за неделю?", "За неделю мы потратили триста двадцать франков: сто франков на еду, двести двадцать на жильё.", "In a week we spent three hundred and twenty francs: a hundred on food, two hundred and twenty on accommodation.", {
      help: "Say out loud how much you spent and on what.",
    }),
  ],
  reward: {
    itemId: "cuckooclock",
    itemName: "Cuckoo clock",
    itemNameRu: "Часы с кукушкой",
    ru: "Ку-ку! Часы с кукушкой!",
    en: "Cuckoo! A cuckoo clock!",
    a11y: "A carved wooden cuckoo clock with a little bird at its door hangs above Murzik's suitcase; tiny painted mountains on its roof.",
    image: p("reward-7"),
    steps: ["Ursula's present is a cuckoo clock her father made.", "On its roof — tiny painted mountains.", "He made it for Asya thirty years ago — but she couldn't carry it.", "Every hour on the train it sings: ку-ку!"],
  },
};

export const zurichLessons: Lesson[] = [zurich1, zurich2, zurich3, zurich4, zurich5, zurich6, zurich7];
