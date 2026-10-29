import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "../tr/make";

/* Нью-Йорк · «Еда и большой город» · he / she + -s, does / doesn't, I'd like, Would you like…?, some / any, еда, like / don't like. */

const p = (name: string) => pic(`en/newyork/${name}`);

const newyork1: Lesson = {
  id: "en-a1-newyork-1",
  level: "A1",
  cityId: "en-newyork",
  number: 1,
  title: "She lives in Brooklyn — Она живёт в Бруклине",
  minutes: 7,
  goals: ["Рассказать о другом человеке: he works, she lives", "Добавлять -s к глаголу после he и she", "Запомнить he has и he goes"],
  vocabNote: "Главное правило: после he, she, it к глаголу добавляют -s: I live → she lives, I work → he works. Особые формы: have → has, go → goes, watch → watches.",
  vocab: [
    v("enny1-1", "Marcus works in a diner.", "Маркус работает в закусочной.", "Большой улыбчивый повар в белом фартуке у плиты.", "Послушать Marcus works in a diner", p("l1-1")),
    v("enny1-2", "He lives in Manhattan.", "Он живёт на Манхэттене.", "Высокие дома Манхэттена за окном.", "Послушать He lives in Manhattan", p("l1-2")),
    v("enny1-3", "Rosie lives in Brooklyn.", "Рози живёт в Бруклине.", "Весёлая женщина с кудрями машет с крыльца кирпичного дома.", "Послушать Rosie lives in Brooklyn", p("l1-3")),
    v("enny1-4", "She goes to work by subway.", "Она ездит на работу на метро.", "Рози в вагоне метро с газетой.", "Послушать She goes to work by subway", p("l1-4")),
    v("enny1-5", "He has a big family.", "У него большая семья.", "Фотография: Маркус и много детей вокруг.", "Послушать He has a big family", p("l1-5")),
    v("enny1-6", "She watches TV in the evening.", "Вечером она смотрит телевизор.", "Рози с попкорном перед телевизором.", "Послушать She watches TV in the evening", p("l1-6")),
    v("enny1-7", "He cooks every day.", "Он готовит каждый день.", "Маркус ловко переворачивает блины на сковороде.", "Послушать He cooks every day", p("l1-7")),
  ],
  dialogue: {
    title: "Закусочная Маркуса",
    note: "Diner [да́йнэ] — американская закусочная. Subway — «метро» в Америке (в Лондоне — the Underground).",
    lines: [
      line("marcus", "Hey! Welcome to New York! I'm Marcus. Seán's cousin!", "Эй! Добро пожаловать в Нью-Йорк! Я Маркус. Двоюродный брат Шона!"),
      line("murzik", "Hello, Marcus! Do you live here?", "Здравствуйте, Маркус! Вы живёте здесь?"),
      line("marcus", "No, I live in Manhattan. I work here every day.", "Нет, я живу на Манхэттене. А здесь работаю каждый день."),
      line("marcus", "And this is Rosie. She lives next door. She comes here every morning!", "А это Рози. Она живёт по соседству. Приходит сюда каждое утро!"),
      line("rosie", "Every morning! Marcus cooks the best pancakes in New York.", "Каждое утро! Маркус печёт лучшие блины в Нью-Йорке."),
    ],
    gist: choice("enny1-d1", "Кто такой Маркус?", [
      ["Повар закусочной, двоюродный брат Шона.", true],
      ["Сосед Рози, таксист.", false],
      ["Друг Тома из Лондона.", false],
    ]),
  },
  grammar: [
    {
      title: "He works, she lives: окончание -s",
      paragraphs: [
        "I / you / we / they live, work, go. He / she / it lives, works, goes. Это самая частая ошибка у русскоязычных: не забывай -s после he и she!",
        "После s, sh, ch, x, o — -es: watch → watches, go → goes. Have → has.",
      ],
      examples: [
        { ru: "I work in a café. Marcus works in a diner.", en: "Я работаю в кафе. Маркус работает в закусочной." },
        { ru: "She has a cat.", en: "У неё есть кот." },
      ],
    },
  ],
  tasks: [
    choice("enny1-t1", "Как сказать «Она живёт в Бруклине»?", [
      ["She lives in Brooklyn.", true],
      ["She live in Brooklyn.", false],
      ["She is live in Brooklyn.", false],
    ], { skill: "grammar" }),
    listen("enny1-t2", "Послушай. Где работает Рози?", "Rosie works in a hospital.", [
      ["В больнице.", true],
      ["В закусочной.", false],
      ["В метро.", false],
    ]),
    match("enny1-t3", "Соедини пары.", [
      ["I go", "he goes"],
      ["I have", "she has"],
      ["I watch", "he watches"],
      ["I live", "she lives"],
    ], { skill: "words" }),
    missing("enny1-t4", "Какой буквы не хватает? («он работает»)", "he work", "", "s", ["s", "es", "z"]),
    speak("enny1-t5", "Tell me about your friend.", "My friend lives in Kazan. She works in a school.", "Моя подруга живёт в Казани. Она работает в школе.", { help: "Расскажи вслух о друге: где живёт и работает. Не забудь -s!" }),
    choice("enny1-t6", "Как сказать «Я не работаю в воскресенье»?", [
      ["I don't work on Sunday.", true],
      ["I not work on Sunday.", false],
      ["I doesn't work on Sunday.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "stool",
    itemName: "Высокий табурет",
    itemNameRu: "Bar stool",
    ru: "Hooray! A tall stool!",
    en: "Ура! Высокий табурет!",
    a11y: "Высокий табурет с круглым красным сиденьем и блестящей ножкой стоит у окна.",
    image: p("stool"),
    steps: ["Маркус показывает Мурзику квартирку над закусочной.", "Она крошечная, зато с видом на улицу.", "Маркус приносит из закусочной высокий красный табурет.", "Мурзик крутится на нём: вжух!"],
    bridge: "Утром в закусочную приходит новый посетитель. Мурзик хочет всё о нём узнать.",
  },
};

const newyork2: Lesson = {
  id: "en-a1-newyork-2",
  level: "A1",
  cityId: "en-newyork",
  number: 2,
  title: "Does he work here? — Он здесь работает?",
  minutes: 7,
  goals: ["Спросить о другом человеке: Does he…?", "Ответить: Yes, he does / No, he doesn't", "Сказать «он не…»: he doesn't"],
  vocabNote: "Вопрос о нём или о ней — с does, и тогда -s у глагола пропадает: He works. → Does he work? Отрицание — doesn't: She doesn't work here.",
  vocab: [
    v("enny2-1", "Does he work here?", "Он здесь работает?", "Мурзик шёпотом спрашивает про официанта в бейсболке.", "Послушать Does he work here", p("l2-1")),
    v("enny2-2", "Yes, he does.", "Да.", "Маркус кивает.", "Послушать Yes, he does", p("l2-2")),
    v("enny2-3", "No, she doesn't.", "Нет.", "Рози качает головой.", "Послушать No, she doesn't", p("l2-3")),
    v("enny2-4", "Does she like coffee?", "Она любит кофе?", "Мурзик держит две чашки и смотрит на Рози.", "Послушать Does she like coffee", p("l2-4")),
    v("enny2-5", "She doesn't drink coffee.", "Она не пьёт кофе.", "Рози отодвигает чашку кофе и берёт чай.", "Послушать She doesn't drink coffee", p("l2-5")),
    v("enny2-6", "He doesn't speak Russian.", "Он не говорит по-русски.", "Маркус разводит руками, над ним вопросительный знак.", "Послушать He doesn't speak Russian", p("l2-6")),
    v("enny2-7", "What does she do?", "Кем она работает?", "Мурзик с любопытством смотрит на Рози.", "Послушать What does she do", p("l2-7")),
  ],
  dialogue: {
    title: "Утренние посетители",
    note: "What does she do? — «Чем она занимается? Кем работает?» Nurse — «медсестра».",
    lines: [
      line("murzik", "Marcus, does Rosie work here?", "Маркус, Рози здесь работает?"),
      line("marcus", "No, she doesn't. She's a nurse.", "Нет. Она медсестра."),
      line("murzik", "Does she like coffee?", "Она любит кофе?"),
      line("marcus", "No, she doesn't drink coffee. She drinks tea with milk.", "Нет, она не пьёт кофе. Она пьёт чай с молоком."),
      line("tom", "Tea with milk! Like an English lady!", "Чай с молоком! Как настоящая англичанка!"),
      line("rosie", "My grandma is English! Does Tom live in London?", "Моя бабушка — англичанка! А Том живёт в Лондоне?"),
      line("marcus", "Yes, he does!", "Да!"),
    ],
    gist: choice("enny2-d1", "Что пьёт Рози?", [
      ["Чай с молоком.", true],
      ["Чёрный кофе.", false],
      ["Апельсиновый сок.", false],
    ]),
  },
  grammar: [
    {
      title: "Does / doesn't",
      paragraphs: [
        "С he / she / it вопросы и отрицания строятся с does: Does he work here? — Yes, he does. / No, he doesn't.",
        "После does и doesn't глагол без -s: Does she drink? (не drinks!). She doesn't drink coffee.",
      ],
      examples: [
        { ru: "Does Marcus cook? — Yes, he does.", en: "Маркус готовит? — Да." },
        { ru: "Rosie doesn't drink coffee.", en: "Рози не пьёт кофе." },
      ],
    },
  ],
  tasks: [
    choice("enny2-t1", "Как спросить «Она говорит по-английски?»", [
      ["Does she speak English?", true],
      ["Does she speaks English?", false],
      ["Do she speak English?", false],
    ], { skill: "grammar" }),
    listen("enny2-t2", "Послушай. Работает ли он здесь?", "No, he doesn't work here.", [
      ["Нет, не работает.", true],
      ["Да, работает.", false],
      ["Работает по выходным.", false],
    ]),
    match("enny2-t3", "Соедини пары.", [
      ["Yes, he does.", "Да. (о нём)"],
      ["No, she doesn't.", "Нет. (о ней)"],
      ["nurse", "медсестра"],
      ["drink", "пить"],
    ], { skill: "words" }),
    missing("enny2-t4", "Какой буквы не хватает? («не»)", "does", "'t", "n", ["n", "m", "t"]),
    speak("enny2-t5", "Does your friend like tea?", "Yes, he does. He drinks tea every day.", "Да. Он пьёт чай каждый день.", { help: "Ответь вслух про друга." }),
    choice("enny2-t6", "Как сказать «Он готовит каждый день»?", [
      ["He cooks every day.", true],
      ["He cook every day.", false],
      ["He is cook every day.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "waffle-iron",
    itemName: "Вафельница",
    itemNameRu: "Waffle iron",
    ru: "Hooray! A waffle iron!",
    en: "Ура! Вафельница!",
    a11y: "Старая чугунная вафельница с длинными ручками, рядом тарелка с золотистыми вафлями.",
    image: p("waffle-iron"),
    steps: ["Рози приносит из дома старую вафельницу.", "«My grandma's. She doesn't use it now.» — «Бабушкина. Она ею больше не пользуется».", "Маркус показывает, как печь вафли.", "Вафельница теперь у Мурзика."],
    bridge: "Днём Маркус ставит Мурзика к стойке: «Today you take the orders!»",
  },
};

const newyork3: Lesson = {
  id: "en-a1-newyork-3",
  level: "A1",
  cityId: "en-newyork",
  number: 3,
  title: "I'd like a bagel — Мне бейгл, пожалуйста",
  minutes: 7,
  goals: ["Заказать еду: I'd like…", "Спросить гостя: Would you like…?", "Спросить: здесь или с собой?"],
  vocabNote: "I'd like — короткое I would like, «я бы хотел(а)». Это вежливее, чем I want. To go — «с собой» (в Британии — to take away).",
  vocab: [
    v("enny3-1", "What would you like?", "Что вы будете?", "Мурзик за стойкой с блокнотом и карандашом.", "Послушать What would you like", p("l3-1")),
    v("enny3-2", "I'd like a bagel, please.", "Мне бейгл, пожалуйста.", "Покупатель показывает на бейгл с кунжутом.", "Послушать I'd like a bagel, please", p("l3-2")),
    v("enny3-3", "Would you like a drink?", "Хотите что-нибудь выпить?", "Мурзик показывает на кофейник и кувшин с соком.", "Послушать Would you like a drink", p("l3-3")),
    v("enny3-4", "An orange juice, please.", "Апельсиновый сок, пожалуйста.", "Высокий стакан апельсинового сока.", "Послушать An orange juice, please", p("l3-4")),
    v("enny3-5", "For here or to go?", "Здесь или с собой?", "Мурзик держит тарелку в одной лапе и бумажный пакет в другой.", "Послушать For here or to go", p("l3-5")),
    v("enny3-6", "To go, please.", "С собой, пожалуйста.", "Покупатель забирает бумажный пакет и стаканчик.", "Послушать To go, please", p("l3-6")),
    v("enny3-7", "Coming right up!", "Сейчас будет!", "Маркус уже кладёт бейгл в тостер.", "Послушать Coming right up", p("l3-7")),
  ],
  dialogue: {
    title: "Мурзик принимает заказ",
    note: "Cream cheese — «сливочный сыр». В Нью-Йорке бейгл со сливочным сыром — классический завтрак.",
    lines: [
      line("murzik", "Good morning! What would you like?", "Доброе утро! Что вы будете?"),
      line("passerby", "I'd like a bagel with cream cheese, please.", "Мне бейгл со сливочным сыром, пожалуйста."),
      line("murzik", "Would you like a drink?", "Хотите что-нибудь выпить?"),
      line("passerby", "Yes, an orange juice, please.", "Да, апельсиновый сок, пожалуйста."),
      line("murzik", "For here or to go?", "Здесь или с собой?"),
      line("passerby", "To go, please. I'm late!", "С собой, пожалуйста. Я опаздываю!"),
      line("marcus", "Coming right up!", "Сейчас будет!"),
    ],
    gist: choice("enny3-d1", "Что заказала покупательница?", [
      ["Бейгл и апельсиновый сок с собой.", true],
      ["Блины и кофе здесь.", false],
      ["Только кофе.", false],
    ]),
  },
  grammar: [
    {
      title: "I'd like / Would you like…?",
      paragraphs: [
        "Заказать: I'd like + что: I'd like a coffee, please. Это вежливее, чем I want.",
        "Предложить: Would you like + что? Would you like some tea? Ответ: Yes, please. / No, thank you.",
      ],
      examples: [
        { ru: "I'd like a sandwich, please.", en: "Мне сэндвич, пожалуйста." },
        { ru: "Would you like a drink? — Yes, please.", en: "Хотите выпить? — Да, пожалуйста." },
      ],
    },
  ],
  tasks: [
    choice("enny3-t1", "Как вежливо заказать кофе?", [
      ["I'd like a coffee, please.", true],
      ["I like a coffee, please.", false],
      ["Give me coffee.", false],
    ], { skill: "grammar" }),
    listen("enny3-t2", "Послушай. Что заказывают?", "I'd like a sandwich and a tea, please. For here.", [
      ["Сэндвич и чай, здесь.", true],
      ["Сэндвич и сок, с собой.", false],
      ["Бейгл и чай, здесь.", false],
    ]),
    match("enny3-t3", "Соедини пары.", [
      ["to go", "с собой"],
      ["for here", "здесь"],
      ["juice", "сок"],
      ["Coming right up!", "Сейчас будет!"],
    ], { skill: "words" }),
    spell("enny3-t4", "Собери из букв слово «сок».", "juice"),
    speak("enny3-t5", "What would you like?", "I'd like a tea and a bagel, please.", "Мне чай и бейгл, пожалуйста.", { help: "Закажи вслух." }),
    choice("enny3-t6", "Как спросить «Она любит кофе?»", [
      ["Does she like coffee?", true],
      ["Do she like coffee?", false],
      ["Does she likes coffee?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cookie-jar",
    itemName: "Банка для печенья",
    itemNameRu: "Cookie jar",
    ru: "Hooray! A cookie jar!",
    en: "Ура! Банка для печенья!",
    a11y: "Большая стеклянная банка с крышкой, полная круглого печенья с шоколадной крошкой.",
    image: p("cookie-jar"),
    steps: ["Мурзик принял двадцать заказов!", "Маркус гордо хлопает его по плечу.", "«You're a natural!» — «Ты прирождённый официант!»", "Он дарит Мурзику банку печенья."],
    bridge: "Вечером Маркус печёт что-то новое, но у него кончается молоко.",
  },
};

const newyork4: Lesson = {
  id: "en-a1-newyork-4",
  level: "A1",
  cityId: "en-newyork",
  number: 4,
  title: "Some milk, any sugar? — Немного молока, есть сахар?",
  minutes: 7,
  goals: ["Сказать «немного»: some milk", "Спросить «есть ли»: any sugar?", "Сказать «нет ни одного»: not any"],
  vocabNote: "Some — «немного, сколько-то» в утверждении: some milk. Any — в вопросе и отрицании: Have we got any sugar? We haven't got any eggs.",
  vocab: [
    v("enny4-1", "some milk", "немного молока", "Маркус наливает немного молока в миску.", "Послушать some milk", p("l4-1")),
    v("enny4-2", "Have we got any sugar?", "У нас есть сахар?", "Маркус заглядывает в пустую сахарницу.", "Послушать Have we got any sugar", p("l4-2")),
    v("enny4-3", "We haven't got any eggs.", "У нас нет яиц.", "Пустая коробка из-под яиц.", "Послушать We haven't got any eggs", p("l4-3")),
    v("enny4-4", "some flour", "немного муки", "Мурзик весь в муке, мука летит облаком.", "Послушать some flour", p("l4-4")),
    v("enny4-5", "Can you buy some eggs?", "Можешь купить яиц?", "Маркус протягивает Мурзику пакет и деньги.", "Послушать Can you buy some eggs", p("l4-5")),
    v("enny4-6", "a bottle of milk", "бутылка молока", "Стеклянная бутылка молока.", "Послушать a bottle of milk", p("l4-6")),
    v("enny4-7", "a box of eggs", "коробка яиц", "Коробка с десятком яиц.", "Послушать a box of eggs", p("l4-7")),
  ],
  dialogue: {
    title: "Пустой холодильник",
    note: "Fridge — «холодильник». Store — «магазин» (американское слово; британское — shop).",
    lines: [
      line("marcus", "Pancakes! We need some milk, some flour and some eggs.", "Блины! Нам нужно молоко, мука и яйца."),
      line("murzik", "Have we got any eggs?", "У нас есть яйца?"),
      line("marcus", "Let me see… No, we haven't got any eggs. And we haven't got any milk!", "Сейчас посмотрю… Нет, яиц нет. И молока нет!"),
      line("marcus", "Murzik, can you buy some eggs and a bottle of milk?", "Мурзик, можешь купить яиц и бутылку молока?"),
      line("murzik", "Of course! Where is the store?", "Конечно! Где магазин?"),
      line("marcus", "On the corner. Thanks, partner!", "На углу. Спасибо, напарник!"),
    ],
    gist: choice("enny4-d1", "Чего нет у Маркуса?", [
      ["Яиц и молока.", true],
      ["Муки и сахара.", false],
      ["Всё есть.", false],
    ]),
  },
  grammar: [
    {
      title: "Some и any",
      paragraphs: [
        "Some — в утверждении: I need some milk. We've got some eggs. Any — в вопросе и отрицании: Have you got any milk? We haven't got any eggs.",
        "Предлагая что-то, тоже говорят some: Would you like some tea?",
      ],
      examples: [
        { ru: "Can I have some water, please?", en: "Можно мне воды, пожалуйста?" },
        { ru: "Have you got any apples? — No, I haven't got any.", en: "У тебя есть яблоки? — Нет, ни одного." },
      ],
    },
  ],
  tasks: [
    choice("enny4-t1", "Как спросить «У тебя есть сахар?»", [
      ["Have you got any sugar?", true],
      ["Has you got any sugar?", false],
      ["You got any sugar have?", false],
    ], { skill: "grammar" }),
    listen("enny4-t2", "Послушай. Что нужно купить?", "We need some bread and a bottle of milk.", [
      ["Хлеб и бутылку молока.", true],
      ["Яйца и муку.", false],
      ["Сахар и молоко.", false],
    ]),
    match("enny4-t3", "Соедини пары.", [
      ["milk", "молоко"],
      ["eggs", "яйца"],
      ["flour", "мука"],
      ["sugar", "сахар"],
    ], { skill: "words" }),
    missing("enny4-t4", "Какой буквы не хватает? («сахар»)", "su", "ar", "g", ["g", "k", "j"]),
    speak("enny4-t5", "Would you like some tea?", "Yes, please. With some milk.", "Да, пожалуйста. С молоком.", { help: "Ответь вслух." }),
    choice("enny4-t6", "Как вежливо заказать бейгл?", [
      ["I'd like a bagel, please.", true],
      ["I like bagel.", false],
      ["Bagel give, please.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "napkin-holder",
    itemName: "Салфетница",
    itemNameRu: "Napkin holder",
    ru: "Hooray! A napkin holder!",
    en: "Ура! Салфетница!",
    a11y: "Блестящая металлическая салфетница, как в американских закусочных, полная белых салфеток.",
    image: p("napkin-holder"),
    steps: ["Мурзик приносит яйца и молоко.", "Маркус печёт целую гору блинов.", "Мурзик весь в муке и сиропе!", "Маркус смеётся и дарит ему салфетницу."],
    bridge: "В выходной Рози зовёт всех на большой американский завтрак.",
  },
};

const newyork5: Lesson = {
  id: "en-a1-newyork-5",
  level: "A1",
  cityId: "en-newyork",
  number: 5,
  title: "Big portions! — Огромные порции!",
  minutes: 7,
  goals: ["Назвать еду на завтрак и обед", "Сказать, что ты ешь на завтрак", "Сказать «Я наелся / наелась»"],
  vocabNote: "Американские порции большие. I'm full — «я наелся». Delicious — «очень вкусно».",
  vocab: [
    v("enny5-1", "pancakes with syrup", "блины с сиропом", "Стопка пышных блинов, политых кленовым сиропом.", "Послушать pancakes with syrup", p("l5-1")),
    v("enny5-2", "eggs and bacon", "яичница с беконом", "Тарелка с яичницей и полосками бекона.", "Послушать eggs and bacon", p("l5-2")),
    v("enny5-3", "a burger and fries", "бургер с картошкой фри", "Высокий бургер и гора картошки фри.", "Послушать a burger and fries", p("l5-3")),
    v("enny5-4", "a salad", "салат", "Миска зелёного салата с помидорами.", "Послушать a salad", p("l5-4")),
    v("enny5-5", "It's huge!", "Какая огромная порция!", "Мурзик выглядывает из-за огромного бургера.", "Послушать It's huge", p("l5-5")),
    v("enny5-6", "It's delicious!", "Очень вкусно!", "Мурзик зажмурился от удовольствия.", "Послушать It's delicious", p("l5-6")),
    v("enny5-7", "I'm full.", "Я наелся.", "Мурзик откинулся на спинку стула и гладит круглый живот.", "Послушать I'm full", p("l5-7")),
  ],
  dialogue: {
    title: "Завтрак у Рози",
    note: "Usually — «обычно». Toast — «тост, поджаренный хлеб».",
    lines: [
      line("rosie", "Breakfast! Pancakes, eggs and bacon!", "Завтрак! Блины, яичница с беконом!"),
      line("murzik", "Wow! It's huge! In Russia I usually have porridge for breakfast.", "Ого! Какое огромное! В России я обычно ем на завтрак кашу."),
      line("tom", "In England we have eggs and toast.", "А в Англии мы едим яйца и тосты."),
      line("rosie", "Here in America we have a big breakfast! Do you like pancakes?", "А здесь, в Америке, у нас большой завтрак! Ты любишь блины?"),
      line("murzik", "Yes! It's delicious!", "Да! Очень вкусно!"),
      line("murzik", "But now… I'm full!", "Но теперь… я наелся!"),
    ],
    gist: choice("enny5-d1", "Что Мурзик обычно ест на завтрак в России?", [
      ["Кашу.", true],
      ["Блины с сиропом.", false],
      ["Яйца и тосты.", false],
    ]),
  },
  grammar: [
    {
      title: "Have breakfast, have pancakes",
      paragraphs: [
        "С едой глагол have значит «есть, пить»: I have breakfast at eight. I have eggs for breakfast. We have tea.",
        "For breakfast — «на завтрак», for lunch — «на обед», for dinner — «на ужин».",
      ],
      examples: [
        { ru: "I have porridge for breakfast.", en: "На завтрак я ем кашу." },
        { ru: "She has a salad for lunch.", en: "На обед она ест салат." },
      ],
    },
  ],
  tasks: [
    choice("enny5-t1", "Как сказать «На обед он ест суп»?", [
      ["He has soup for lunch.", true],
      ["He have soup for lunch.", false],
      ["He has soup on lunch.", false],
    ], { skill: "grammar" }),
    listen("enny5-t2", "Послушай. Что на завтрак?", "I have eggs and toast for breakfast.", [
      ["Яйца и тосты.", true],
      ["Блины с сиропом.", false],
      ["Каша и сок.", false],
    ]),
    match("enny5-t3", "Соедини пары.", [
      ["pancakes", "блины"],
      ["fries", "картошка фри"],
      ["huge", "огромный"],
      ["delicious", "очень вкусный"],
    ], { skill: "words" }),
    missing("enny5-t4", "Какой буквы не хватает? («салат»)", "sal", "d", "a", ["a", "o", "e"]),
    speak("enny5-t5", "What do you have for breakfast?", "I have coffee and a sandwich for breakfast.", "На завтрак я пью кофе и ем бутерброд.", { help: "Расскажи вслух, что ты ешь на завтрак." }),
    choice("enny5-t6", "Как сказать «У нас нет яиц»?", [
      ["We haven't got any eggs.", true],
      ["We haven't got some eggs.", false],
      ["We not got eggs.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "register",
    itemName: "Касса-копилка",
    itemNameRu: "Cash register",
    ru: "Hooray! A little cash register!",
    en: "Ура! Маленькая касса!",
    a11y: "Старинная игрушечная касса-копилка с кнопками и выдвижным ящичком для монет.",
    image: p("register"),
    steps: ["Рози находит на чердаке старую кассу-копилку.", "Динь! — выдвигается ящичек.", "«For your tips!» — «Для твоих чаевых!»", "Мурзик кладёт туда первую монетку."],
    bridge: "За завтраком выясняется: Рози обожает одно блюдо, а Маркус его терпеть не может.",
  },
};

const newyork6: Lesson = {
  id: "en-a1-newyork-6",
  level: "A1",
  cityId: "en-newyork",
  number: 6,
  title: "I don't like… — Я не люблю…",
  minutes: 7,
  goals: ["Сказать, что любишь и что нет", "Сказать о другом: she likes, he doesn't like", "Спросить: Do you like…?"],
  vocabNote: "Like — «нравиться, любить» (о еде, вещах). Love — «очень любить, обожать». Hate — «терпеть не могу».",
  vocab: [
    v("enny6-1", "I like pizza.", "Я люблю пиццу.", "Мурзик с куском пиццы, сыр тянется.", "Послушать I like pizza", p("l6-1")),
    v("enny6-2", "I love chocolate!", "Обожаю шоколад!", "Мурзик обнимает плитку шоколада.", "Послушать I love chocolate", p("l6-2")),
    v("enny6-3", "I don't like onions.", "Я не люблю лук.", "Мурзик морщится и отодвигает лук на край тарелки.", "Послушать I don't like onions", p("l6-3")),
    v("enny6-4", "She likes hot dogs.", "Она любит хот-доги.", "Рози с хот-догом у тележки на улице.", "Послушать She likes hot dogs", p("l6-4")),
    v("enny6-5", "He doesn't like hot dogs.", "Он не любит хот-доги.", "Маркус качает головой, глядя на хот-дог.", "Послушать He doesn't like hot dogs", p("l6-5")),
    v("enny6-6", "Do you like cheesecake?", "Ты любишь чизкейк?", "Кусок нью-йоркского чизкейка с клубникой.", "Послушать Do you like cheesecake", p("l6-6")),
    v("enny6-7", "I hate mushrooms.", "Терпеть не могу грибы.", "Том с ужасом смотрит на тарелку грибов.", "Послушать I hate mushrooms", p("l6-7")),
  ],
  dialogue: {
    title: "Спор о хот-догах",
    note: "Cheesecake — творожный торт; нью-йоркский чизкейк знаменит на весь мир. Crazy — «с ума сойти, безумный».",
    lines: [
      line("rosie", "I love hot dogs! Marcus, do you like hot dogs?", "Обожаю хот-доги! Маркус, ты любишь хот-доги?"),
      line("marcus", "No, I don't. I hate hot dogs!", "Нет. Терпеть не могу хот-доги!"),
      line("rosie", "A cook in New York, and he doesn't like hot dogs! Crazy!", "Повар в Нью-Йорке — и не любит хот-доги! С ума сойти!"),
      line("marcus", "I like cheesecake. Murzik, do you like cheesecake?", "Я люблю чизкейк. Мурзик, ты любишь чизкейк?"),
      line("murzik", "I don't know! But I love cheese!", "Не знаю! Но сыр я обожаю!"),
      line("marcus", "Then you'll love it! It's my recipe… no, it's Mrs Hope's recipe!", "Тогда тебе понравится! Это мой рецепт… нет, это рецепт миссис Хоуп!"),
    ],
    gist: choice("enny6-d1", "Что Маркус терпеть не может?", [
      ["Хот-доги.", true],
      ["Чизкейк.", false],
      ["Сыр.", false],
    ]),
  },
  grammar: [
    {
      title: "Like / doesn't like",
      paragraphs: [
        "I like, you like, we like. Но: he likes, she likes. Отрицание: I don't like, she doesn't like.",
        "Вопрос: Do you like pizza? Does he like pizza? После like о еде вообще — без a и the: то, что можно посчитать, — во множественном числе (I like apples), остальное — без изменений (I like cheese).",
      ],
      examples: [
        { ru: "Rosie likes hot dogs, but Marcus doesn't.", en: "Рози любит хот-доги, а Маркус нет." },
        { ru: "Do you like fish? — No, I don't.", en: "Ты любишь рыбу? — Нет." },
      ],
    },
  ],
  tasks: [
    choice("enny6-t1", "Как сказать «Он не любит лук»?", [
      ["He doesn't like onions.", true],
      ["He don't like onions.", false],
      ["He doesn't likes onions.", false],
    ], { skill: "grammar" }),
    listen("enny6-t2", "Послушай. Что она любит?", "She loves chocolate, but she doesn't like cake.", [
      ["Шоколад, но не торт.", true],
      ["Торт, но не шоколад.", false],
      ["И шоколад, и торт.", false],
    ]),
    match("enny6-t3", "Соедини пары.", [
      ["love", "обожать"],
      ["like", "любить, нравиться"],
      ["hate", "терпеть не мочь"],
      ["onions", "лук"],
    ], { skill: "words" }),
    spell("enny6-t4", "Собери из букв слово «сыр».", "cheese"),
    speak("enny6-t5", "Do you like pizza?", "Yes, I do. I love pizza!", "Да. Обожаю пиццу!", { help: "Ответь вслух, что ты любишь и что нет." }),
    choice("enny6-t6", "Как сказать «Я наелся / наелась»?", [
      ["I'm full.", true],
      ["I'm huge.", false],
      ["I'm delicious.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "poster",
    itemName: "Плакат с Бруклинским мостом",
    itemNameRu: "Bridge poster",
    ru: "Hooray! A poster!",
    en: "Ура! Плакат!",
    a11y: "Большой плакат с Бруклинским мостом на закате висит на стене над кроватью.",
    image: p("poster"),
    steps: ["Том фотографирует Бруклинский мост на закате.", "Печатает снимок большим плакатом.", "«For your wall!» — «Для твоей стены!»", "Теперь Нью-Йорк всегда с Мурзиком."],
    bridge: "Маркус достаёт из ящика конверт: «Murzik, this is yours».",
  },
};

const newyork7: Lesson = {
  id: "en-a1-newyork-7",
  level: "A1",
  cityId: "en-newyork",
  number: 7,
  title: "Goodbye, New York! — Пока, Нью-Йорк!",
  minutes: 8,
  goals: ["Рассказать о другом человеке: где живёт, что делает, что любит", "Заказать еду", "Вспомнить все слова Нью-Йорка"],
  vocabNote: "Повторяем: he works / she lives, does / doesn't, I'd like, some / any, like / don't like.",
  vocab: [
    v("enny7-1", "This is yours.", "Это твоё.", "Маркус протягивает Мурзику конверт.", "Послушать This is yours", p("l7-1")),
    v("enny7-2", "the recipe for cheesecake", "рецепт чизкейка", "Страница с рисунком чизкейка.", "Послушать the recipe for cheesecake", p("l7-2")),
    v("enny7-3", "She sends me a card every year.", "Она каждый год присылает мне открытку.", "Стопка старых открыток из Лондона.", "Послушать She sends me a card every year", p("l7-3")),
    v("enny7-4", "a neon sign", "неоновая вывеска", "Неоновая вывеска в виде чашки кофе с паром.", "Послушать a neon sign", p("l7-4")),
    v("enny7-5", "It's from my diner.", "Она из моей закусочной.", "Маркус снимает вывеску с окна.", "Послушать It's from my diner", p("l7-5")),
    v("enny7-6", "Good luck!", "Удачи!", "Маркус и Рози машут у дверей закусочной.", "Послушать Good luck", p("l7-6")),
    v("enny7-7", "Keep in touch!", "Не пропадай! / Будем на связи!", "Рози показывает телефон и подмигивает.", "Послушать Keep in touch", p("l7-7")),
  ],
  dialogue: {
    title: "Шестая страница",
    note: "Boston — старый город на северо-востоке США.",
    lines: [
      line("marcus", "Murzik, this is yours. It's from Mrs Hope's book.", "Мурзик, это твоё. Это из книги миссис Хоуп."),
      line("murzik", "The recipe for cheesecake! Does Mrs Hope know you?", "Рецепт чизкейка! Миссис Хоуп знает вас?"),
      line("marcus", "Yes, she does. She sends me a card every year.", "Да. Она каждый год присылает мне открытку."),
      line("marcus", "And this neon sign is for your café. It's from my diner.", "А эта неоновая вывеска — для твоего кафе. Она из моей закусочной."),
      line("tom", "Thank you, Marcus! Where's the next page?", "Спасибо, Маркус! Где следующая страница?"),
      line("rosie", "In Boston! My friend Emily works in a shop there. Good luck!", "В Бостоне! Там в магазине работает моя подруга Эмили. Удачи!"),
      line("marcus", "Keep in touch, partner!", "Не пропадай, напарник!"),
    ],
    gist: choice("enny7-d1", "Где следующая страница?", [
      ["В Бостоне, у Эмили.", true],
      ["В Лондоне, у миссис Хоуп.", false],
      ["В Бруклине, у Рози.", false],
    ]),
  },
  grammar: [
    {
      title: "Рассказ о другом человеке",
      paragraphs: [
        "Где живёт и работает: Marcus lives in Manhattan. He works in a diner. Что делает: He cooks every day. Что любит: He likes cheesecake, but he doesn't like hot dogs.",
        "Вопросы: Does he live here? What does he do? Does she like tea?",
      ],
      examples: [
        { ru: "Rosie is a nurse. She lives in Brooklyn. She likes hot dogs.", en: "Рози медсестра. Она живёт в Бруклине. Она любит хот-доги." },
        { ru: "Does Marcus like hot dogs? — No, he doesn't.", en: "Маркус любит хот-доги? — Нет." },
      ],
    },
  ],
  tasks: [
    listen("enny7-t1", "Аудиоэкзамен. Что рассказывают о Маркусе?", "Marcus is a cook. He lives in Manhattan. He works every day. He likes cheesecake, but he doesn't like hot dogs.", [
      ["Повар, живёт на Манхэттене, любит чизкейк, не любит хот-доги.", true],
      ["Медсестра, живёт в Бруклине, любит хот-доги.", false],
      ["Повар, живёт в Бостоне, не любит чизкейк.", false],
    ]),
    choice("enny7-t2", "Выбери правильное предложение.", [
      ["She doesn't drink coffee.", true],
      ["She don't drink coffee.", false],
      ["She doesn't drinks coffee.", false],
    ], { skill: "grammar" }),
    match("enny7-t3", "Соедини пары.", [
      ["Good luck!", "Удачи!"],
      ["Keep in touch!", "Будем на связи!"],
      ["yours", "твоё"],
      ["a neon sign", "неоновая вывеска"],
    ], { skill: "words" }),
    spell("enny7-t4", "Собери из букв слово «удача».", "luck"),
    speak("enny7-t5", "Tell me about your friend.", "My friend is a teacher. She lives in Kazan. She likes books.", "Моя подруга учительница. Она живёт в Казани. Она любит книги.", { help: "Расскажи вслух о друге или подруге. Не забудь -s!" }),
    script("enny7-t6", "Вспомни весь Нью-Йорк. Закончи разговоры в закусочной.", [
      { speaker: "Официант", text: "What would you like?" },
      { speaker: "Ты", answer: "I'd like pancakes, please.", options: ["I'd like pancakes, please.", "I like pancakes, please.", "I'd likes pancakes."] },
      { speaker: "Официант", text: "Would you like a drink?" },
      { speaker: "Ты", answer: "Yes, an orange juice, please.", options: ["Yes, an orange juice, please.", "Yes, a orange juice, please.", "No, I'm full."] },
      { speaker: "Официант", text: "For here or to go?" },
      { speaker: "Ты", answer: "For here, please.", options: ["For here, please.", "For go, please.", "To here, please."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "neon",
    itemName: "Неоновая вывеска",
    itemNameRu: "Neon sign",
    ru: "Hooray! A neon sign!",
    en: "Ура! Неоновая вывеска!",
    a11y: "Неоновая вывеска в виде чашки кофе с завитками пара светится тёплым розово-оранжевым светом.",
    image: p("neon"),
    steps: ["Маркус снимает с окна неоновую вывеску-чашку.", "Она светится розовым и оранжевым.", "«Every café needs a light!» — «Каждому кафе нужен огонёк!»", "Мурзик бережно заворачивает её в плед."],
    bridge: "Следующая страница — в Бостоне, у Эмили.",
  },
};

const story: CityStory = {
  home: {
    name: "Квартирка над закусочной",
    nameRu: "Murzik's flat in New York",
    image: p("home"),
    a11y: "Крошечная пустая квартирка с кирпичной стеной и окном на пожарную лестницу. За окном шумная нью-йоркская улица. Посередине чемодан Мурзика.",
  },
  keepsakeId: "neon",
  welcomeRu: "Hello, New York!",
  welcomeEn: "Привет, Нью-Йорк!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том в Нью-Йорке: огромные дома до неба, жёлтые такси, шум улиц.",
  departureImage: p("departure"),
  departureA11y: "Маркус в фартуке и Рози машут на прощание у дверей закусочной.",
  finale: [
    {
      image: p("page"),
      a11y: "Крупно: шестая страница книги рецептов, рецепт чизкейка. На полях записка от руки.",
      lines: [
        { en: "Мурзик вклеивает шестую страницу. На полях — записка миссис Хоуп:" },
        { ru: "At my café, I remembered every guest's favourite drink.", en: "В моём кафе я помнила любимый напиток каждого гостя." },
        { en: "Мурзик думает о Рози: чай с молоком. Он тоже запомнит." },
      ],
    },
    {
      image: p("neon"),
      a11y: "Мурзик обходит свою квартирку над закусочной, которую обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свою нью-йоркскую квартирку. Том фотографирует её для журнала." },
        { en: "Для будущего кафе он берёт с собой неоновую вывеску-чашку." },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "New York complete!", en: "Нью-Йорк пройден!" },
        { en: "7 / 7 уроков" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Маркус и Рози машут на прощание.",
      lines: [
        { ru: "Goodbye, Marcus! Goodbye, Rosie!", en: "Пока, Маркус! Пока, Рози!" },
        { ru: "Next stop: Boston!", en: "Следующая остановка: Бостон!" },
      ],
    },
    {
      image: p("train"),
      a11y: "Поезд едет на север вдоль моря, за окном осенние деревья.",
      lines: [{ ru: "New York → Boston", en: "Нью-Йорк → Бостон" }],
    },
    {
      image: pic("en/boston/arrival"),
      a11y: "Мурзик и Том в Бостоне: старые кирпичные дома, жёлтые и красные осенние листья, идёт дождь.",
      lines: [
        { ru: "Hello, Boston!", en: "Привет, Бостон!" },
        { ru: "It's raining again!", en: "Опять дождь!" },
      ],
    },
  ],
};

export const enNewYork = {
  id: "en-newyork",
  name: "Нью-Йорк",
  nameEn: "New York",
  lessons: [newyork1, newyork2, newyork3, newyork4, newyork5, newyork6, newyork7],
  story,
};
