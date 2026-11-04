import { pic } from "../art";
import { read } from "../make";
import type { CityStory, Lesson } from "../types";
import { choice, fill, letter, line, listen, match, script, speak, tf, v } from "../tr/make";

/*
 * Брайтон · «Кафе на колёсах» начинается · A2, уроки 1–7.
 * Кафе «Хоуп» снова открыто. Приходит письмо: в конце августа в Лондоне фестиваль уличной еды.
 * Нужен фургон и «книга дороги» — рецепты из разных городов. В Брайтоне Мурзик и Том покупают старый
 * фургон у механика Дейва, его дочь Лили, уличная художница, красит его и пишет вывеску «Hope on Wheels».
 * Грамматика: прошедшее время (повторение, слова времени, неправильные глаголы), What's she like?
 * С A2 в уроке 8 новых фраз, а вместо букв — «Звуки и чтение».
 */

const p = (name: string) => pic(`en/brighton/${name}`);

const brighton1: Lesson = {
  id: "en-a2-brighton-1",
  level: "A2",
  cityId: "en-brighton",
  number: 1,
  title: "How was your weekend? — Как прошли выходные?",
  minutes: 8,
  goals: ["Спросить, как прошли выходные", "Рассказать, что ты делал(а)", "Сказать «неделю назад», «в прошлые выходные»"],
  vocabNote: "Добро пожаловать на A2! Теперь в каждом уроке 8 новых фраз. Начинаем с прошедшего времени: как прошли выходные, что ты делал(а).",
  vocab: [
    v("enbr1-1", "How was your weekend?", "Как прошли выходные?", "Миссис Хоуп за стойкой кафе наливает чай и улыбается.", "Послушать How was your weekend", p("l1-1")),
    v("enbr1-2", "It was amazing!", "Было потрясающе!", "Том сияет и раскидывает руки.", "Послушать It was amazing", p("l1-2")),
    v("enbr1-3", "I stayed in.", "Я никуда не ходил(а), сидел(а) дома.", "Мурзик в пледе на диване с книгой.", "Послушать I stayed in", p("l1-3")),
    v("enbr1-4", "We went to the seaside.", "Мы ездили на море.", "Том с фотоаппаратом на галечном пляже, вдали пирс.", "Послушать We went to the seaside", p("l1-4")),
    v("enbr1-5", "last weekend", "в прошлые выходные", "Страница календаря: прошлые суббота и воскресенье обведены.", "Послушать last weekend", p("l1-5")),
    v("enbr1-6", "a week ago", "неделю назад", "Календарь, стрелка назад на семь дней.", "Послушать a week ago", p("l1-6")),
    v("enbr1-7", "What did you get up to?", "Чем занимался(-ась)?", "Миссис Хоуп с любопытством наклоняется к Мурзику.", "Послушать What did you get up to", p("l1-7")),
    v("enbr1-8", "Not much.", "Да особо ничем.", "Мурзик пожимает плечами и улыбается.", "Послушать Not much", p("l1-8")),
  ],
  letters: [
    letter("-ed = [д]", "После звонких звуков и гласных -ed звучит как [д]: stayed — [стэйд].", "stayed", "оставался(-ась)", "Букву e не произносим: не [стэйед], а [стэйд]."),
    letter("-ed = [т]", "После глухих звуков (k, p, s, sh, ch) -ed звучит как [т]: walked — [уокт].", "walked", "гулял(а)"),
    letter("-ed = [ид]", "После t и d -ed звучит как [ид]: visited — [визитид].", "visited", "навещал(а), побывал(а)"),
  ],
  dialogue: {
    title: "Понедельник в кафе",
    note: "Get up to — разговорное «заниматься (чем-то)». Dear — «дорогой, милый»: так миссис Хоуп обращается к Мурзику и Тому.",
    lines: [
      line("hope", "Good morning, dears! How was your weekend?", "Доброе утро, мои дорогие! Как прошли выходные?"),
      line("tom", "It was amazing! We went to the seaside.", "Было потрясающе! Мы ездили на море."),
      line("hope", "How lovely! And you, Murzik? What did you get up to?", "Как чудесно! А ты, Мурзик? Чем ты занимался?"),
      line("murzik", "Not much. I stayed in and read a book.", "Да особо ничем. Я сидел дома и читал книгу."),
      line("tom", "He read all weekend! Three books!", "Он читал все выходные! Три книги!"),
      line("hope", "Well, I've got some news. This letter came a week ago.", "Что ж, у меня есть новость. Это письмо пришло неделю назад."),
      line("murzik", "A letter? What does it say?", "Письмо? А что там написано?"),
      line("hope", "Read it, dear.", "Прочитай, дорогой."),
    ],
    gist: choice("enbr1-d1", "Где был Том в выходные?", [
      ["На море.", true],
      ["Дома.", false],
      ["В кафе.", false],
    ]),
  },
  grammar: [
    {
      title: "Прошедшее время и слова времени",
      paragraphs: [
        "Вспоминаем прошедшее время: stayed, went, read. Слова времени ставим в начало или в конец: last weekend (в прошлые выходные), yesterday (вчера), a week ago (неделю назад).",
        "Ago всегда идёт после срока: a week ago, three days ago, ten years ago. По-русски наоборот: «неделю назад».",
      ],
      examples: [
        { ru: "Last weekend we went to the seaside.", en: "В прошлые выходные мы ездили на море." },
        { ru: "The letter came a week ago.", en: "Письмо пришло неделю назад." },
      ],
    },
  ],
  tasks: [
    listen("enbr1-t1", "Послушай. Что делал Мурзик в выходные?", "I stayed in and read a book.", [
      ["Сидел дома и читал.", true],
      ["Ездил на море.", false],
      ["Работал в кафе.", false],
    ]),
    choice("enbr1-t2", "Как сказать «три дня назад»?", [
      ["three days ago", true],
      ["ago three days", false],
      ["before three days", false],
    ], { skill: "grammar" }),
    fill("enbr1-t3", "Выбери правильное слово.", "Last weekend we", "to the seaside.", "went", ["went", "go", "goes"], { skill: "grammar" }),
    read("enbr1-t4", "Прочитай сообщение. Когда Прия была в Брайтоне?", "Hi Murzik! How was your weekend? I went to Brighton on Saturday. It was amazing! Priya x", [
      ["В субботу.", true],
      ["В воскресенье.", false],
      ["Неделю назад.", false],
    ]),
    script("enbr1-t5", "Понедельник. Ответь Тому.", [
      { speaker: "Том", text: "Hi! How was your weekend?" },
      { speaker: "Ты", answer: "It was amazing!", options: ["It was amazing!", "Not much.", "A week ago."] },
      { speaker: "Том", text: "What did you get up to?" },
      { speaker: "Ты", answer: "We went to the seaside.", options: ["We went to the seaside.", "We go to the seaside.", "How was your weekend?"] },
    ], { skill: "speaking" }),
    match("enbr1-t6", "Соедини пары.", [
      ["last weekend", "в прошлые выходные"],
      ["a week ago", "неделю назад"],
      ["I stayed in.", "Я сидел(а) дома."],
      ["Not much.", "Да особо ничем."],
    ], { skill: "words" }),
    speak("enbr1-t7", "How was your weekend?", "It was great! On Saturday I went to the park, and on Sunday I stayed in.", "Было здорово! В субботу я ходил(а) в парк, а в воскресенье сидел(а) дома.", {
      help: "Расскажи вслух, как прошли твои выходные.",
    }),
  ],
  reward: {
    itemId: "festival-poster",
    itemName: "Плакат фестиваля",
    itemNameRu: "Festival poster",
    ru: "Look! The festival poster!",
    en: "Смотри! Плакат фестиваля!",
    a11y: "Яркий плакат: фургончики с едой, гирлянды, толпа людей, большая золотая ложка.",
    image: p("festival-poster"),
    steps: ["В письме лежит яркий плакат.", "На нём фургончики с едой, гирлянды и золотая ложка.", "Мурзик вешает плакат на стену в кафе.", "«What is it?» — спрашивает Том. Сейчас узнаем!"],
    bridge: "Теперь нужно прочитать само письмо. По-английски Мурзик писем ещё никогда не читал…",
  },
};

const brighton2: Lesson = {
  id: "en-a2-brighton-2",
  level: "A2",
  cityId: "en-brighton",
  number: 2,
  title: "The letter — Письмо",
  minutes: 8,
  goals: ["Понять приглашение", "Спросить и ответить в прошедшем: Did you…? — I didn't…", "Согласиться: Why not? Count me in!"],
  vocabNote: "Food truck — фургон, где готовят и продают еду. Street food — уличная еда.",
  vocab: [
    v("enbr2-1", "a street food festival", "фестиваль уличной еды", "Площадь, полная фургончиков с едой и гирлянд.", "Послушать a street food festival", p("l2-1")),
    v("enbr2-2", "a food truck", "фургон с едой, фудтрак", "Маленький фургон с окошком и навесом, внутри плита.", "Послушать a food truck", p("l2-2")),
    v("enbr2-3", "to take part", "участвовать", "Повара в фартуках выстроились в ряд перед жюри.", "Послушать to take part", p("l2-3")),
    v("enbr2-4", "the first prize", "первый приз", "Золотая ложка на бархатной подушечке.", "Послушать the first prize", p("l2-4")),
    v("enbr2-5", "at the end of August", "в конце августа", "Страница календаря: август, последние дни обведены.", "Послушать at the end of August", p("l2-5")),
    v("enbr2-6", "Why not?", "А почему бы и нет?", "Мурзик поднимает брови и хитро улыбается.", "Послушать Why not", p("l2-6")),
    v("enbr2-7", "We need a van.", "Нам нужен фургон.", "Том рисует на салфетке фургон.", "Послушать We need a van", p("l2-7")),
    v("enbr2-8", "Count me in!", "Я с вами! Я в деле!", "Миссис Хоуп решительно поднимает руку.", "Послушать Count me in", p("l2-8")),
  ],
  letters: [
    letter("th = [ð]", "В the, this, that кончик языка — между зубами, звук звонкий, похож на мягкое «з».", "the end", "конец", "Не «зе» и не «де»: язык между зубами."),
    letter("FES-ti-val", "Ударение на первый слог: FEStival. Последнее a почти не слышно.", "festival", "фестиваль"),
  ],
  dialogue: {
    title: "Золотая ложка",
    note: "Once — «однажды, один раз». I didn't win — «я не выиграла»: после didn't глагол без -ed.",
    lines: [
      line("murzik", "“Dear Mrs Hope, we invite you to the London Street Food Festival.”", "«Дорогая миссис Хоуп, приглашаем вас на Лондонский фестиваль уличной еды»."),
      line("tom", "A festival! Did you ever take part, Granny?", "Фестиваль! Бабушка, ты когда-нибудь участвовала?"),
      line("hope", "Once, fifty years ago. I didn't win.", "Однажды, пятьдесят лет назад. Я не выиграла."),
      line("murzik", "It's at the end of August. The first prize is a golden spoon!", "Он в конце августа. Первый приз — золотая ложка!"),
      line("hope", "But you need a food truck. And recipes from all over the country.", "Но нужен фургон с едой. И рецепты со всей страны."),
      line("tom", "Count me in! So we need a van!", "Я в деле! Значит, нам нужен фургон!"),
      line("murzik", "Why not? We can travel and collect recipes!", "А почему бы и нет? Можно путешествовать и собирать рецепты!"),
      line("hope", "Good idea! I'll stay here and keep the café open.", "Отличная мысль! А я останусь здесь, и кафе будет работать."),
    ],
    gist: choice("enbr2-d1", "Что нужно, чтобы участвовать в фестивале?", [
      ["Фургон с едой и рецепты со всей страны.", true],
      ["Только золотая ложка.", false],
      ["Новое кафе в Лондоне.", false],
    ]),
  },
  grammar: [
    {
      title: "Did you…? — I didn't…",
      paragraphs: [
        "Вопрос в прошедшем: Did + кто + глагол без изменений: Did you take part? Did she win?",
        "Отрицание: didn't + глагол без изменений: I didn't win. Не «I didn't won» — прошедшее уже есть в didn't.",
      ],
      examples: [
        { ru: "Did you read the letter? — Yes, I did.", en: "Ты прочитал(а) письмо? — Да." },
        { ru: "She didn't win the prize.", en: "Она не выиграла приз." },
      ],
    },
  ],
  tasks: [
    listen("enbr2-t1", "Послушай. Когда будет фестиваль?", "The festival is at the end of August.", [
      ["В конце августа.", true],
      ["В начале августа.", false],
      ["Неделю назад.", false],
    ]),
    choice("enbr2-t2", "Помоги Тому! Он говорит: «I didn't won». Как правильно?", [
      ["I didn't win.", true],
      ["I not won.", false],
      ["I didn't wins.", false],
    ], { skill: "grammar" }),
    read("enbr2-t3", "Прочитай правила фестиваля. Сколько рецептов нужно?", "LONDON STREET FOOD FESTIVAL\nTo take part, you need:\n• a food truck\n• a menu\n• 17 recipes from 17 different places", [
      ["17 рецептов из 17 разных мест.", true],
      ["Один рецепт из Лондона.", false],
      ["70 рецептов.", false],
    ]),
    choice("enbr2-t4", "Как спросить «Ты когда-нибудь участвовал(а)?»", [
      ["Did you ever take part?", true],
      ["Do you ever took part?", false],
      ["Did you ever took part?", false],
    ], { skill: "grammar" }),
    match("enbr2-t5", "Соедини пары.", [
      ["to take part", "участвовать"],
      ["the first prize", "первый приз"],
      ["Why not?", "Почему бы и нет?"],
      ["Count me in!", "Я с вами!"],
    ], { skill: "words" }),
    tf("enbr2-t6", "Миссис Хоуп выиграла фестиваль пятьдесят лет назад.", false, "listening"),
    speak("enbr2-t7", "Do you want to take part in the festival?", "Why not? Count me in!", "А почему бы и нет? Я с вами!", {
      help: "Тебя зовут участвовать в фестивале. Согласись вслух.",
    }),
  ],
  reward: {
    itemId: "road-book",
    itemName: "Книга дороги",
    itemNameRu: "Road book",
    ru: "Our road book!",
    en: "Наша книга дороги!",
    a11y: "Толстая тетрадь в голубой обложке с нарисованным фургончиком; страницы пока пустые.",
    image: p("road-book"),
    steps: ["Миссис Хоуп достаёт толстую тетрадь в голубой обложке.", "«This is your road book. One recipe from every place!» — «Это ваша книга дороги. По рецепту из каждого места!»", "Первая страница пока пустая."],
    bridge: "Где взять фургон? Том знает: в Брайтоне, у моря, есть старый гараж.",
  },
};

const brighton3: Lesson = {
  id: "en-a2-brighton-3",
  level: "A2",
  cityId: "en-brighton",
  number: 3,
  title: "Buying a van — Покупаем фургон",
  minutes: 8,
  goals: ["Спросить цену и поторговаться", "Попросить пробную поездку", "Неправильные глаголы: buy — bought, drive — drove"],
  vocabNote: "Second-hand — «подержанный». It's a deal! — «Договорились! По рукам!»",
  vocab: [
    v("enbr3-1", "second-hand", "подержанный", "Старенький голубой фургон с вмятиной на двери.", "Послушать second-hand", p("l3-1")),
    v("enbr3-2", "How much do you want for it?", "Сколько вы за него хотите?", "Том показывает на фургон, в руке кошелёк.", "Послушать How much do you want for it", p("l3-2")),
    v("enbr3-3", "It's ten years old.", "Ему десять лет.", "На лобовом стекле табличка с цифрой 10.", "Послушать It's ten years old", p("l3-3")),
    v("enbr3-4", "It runs well.", "Он хорошо ездит, он на ходу.", "Механик Дейв, весёлый мужчина в комбинезоне, хлопает фургон по капоту.", "Послушать It runs well", p("l3-4")),
    v("enbr3-5", "a test drive", "пробная поездка", "Фургон едет по набережной, из окна смотрят Том и Мурзик.", "Послушать a test drive", p("l3-5")),
    v("enbr3-6", "Can we try it?", "Можно попробовать, прокатиться?", "Мурзик держит в лапке ключи и вопросительно смотрит.", "Послушать Can we try it", p("l3-6")),
    v("enbr3-7", "That's too much.", "Это слишком дорого.", "Том качает головой и прячет кошелёк.", "Послушать That's too much", p("l3-7")),
    v("enbr3-8", "It's a deal!", "Договорились! По рукам!", "Мурзик и Дейв жмут друг другу руку и лапу.", "Послушать It's a deal", p("l3-8")),
  ],
  letters: [
    letter("ea = [и:]", "Сочетание ea часто читается как долгое [и:]: deal — [ди:л].", "deal", "сделка"),
    letter("ow = [ау]", "В how, now, wow — [ау]: how much — [хау мач].", "How much?", "Сколько?", "Но в snow, show — [оу]: [сноу], [шоу]."),
  ],
  dialogue: {
    title: "Гараж Дейва",
    note: "Pounds — фунты, британские деньги. Bought — прошедшее от buy (купить), drove — от drive (ехать, водить).",
    lines: [
      line("dave", "Hello there! Looking for a van?", "Здравствуйте! Ищете фургон?"),
      line("tom", "Yes, a second-hand one. Not too big.", "Да, подержанный. Не слишком большой."),
      line("dave", "This one's ten years old, but it runs well. I bought it eight years ago.", "Этому десять лет, но он хорошо ездит. Я купил его восемь лет назад."),
      line("murzik", "How much do you want for it?", "Сколько вы за него хотите?"),
      line("dave", "Three thousand pounds.", "Три тысячи фунтов."),
      line("tom", "That's too much for us. Can we try it?", "Для нас это слишком дорого. Можно прокатиться?"),
      line("dave", "Of course. Here are the keys.", "Конечно. Вот ключи."),
      line("tom", "We drove along the seafront. It's nice, but it's still too much for us.", "Мы прокатились по набережной. Он хороший, но для нас всё равно дорого."),
      line("dave", "OK, two thousand five hundred.", "Ладно, две тысячи пятьсот."),
      line("murzik", "It's a deal!", "По рукам!"),
    ],
    gist: choice("enbr3-d1", "За сколько в итоге купили фургон?", [
      ["За две с половиной тысячи фунтов.", true],
      ["За три тысячи фунтов.", false],
      ["За десять тысяч фунтов.", false],
    ]),
  },
  grammar: [
    {
      title: "Неправильные глаголы: buy — bought",
      paragraphs: [
        "Многие частые глаголы в прошедшем меняются целиком: buy — bought (купил), drive — drove (ехал, вёл машину), pay — paid (заплатил), sell — sold (продал).",
        "Их просто запоминаем: по три-четыре в каждом уроке. В вопросе и с didn't — снова обычная форма: Did you buy it? I didn't buy it.",
      ],
      examples: [
        { ru: "I bought this van eight years ago.", en: "Я купил этот фургон восемь лет назад." },
        { ru: "We paid two thousand five hundred pounds.", en: "Мы заплатили две тысячи пятьсот фунтов." },
      ],
    },
  ],
  tasks: [
    listen("enbr3-t1", "Послушай. Сколько лет фургону?", "This one's ten years old, but it runs well.", [
      ["Десять лет, но он хорошо ездит.", true],
      ["Восемь лет.", false],
      ["Он новый.", false],
    ]),
    choice("enbr3-t2", "Как сказать «Я продал его вчера»?", [
      ["I sold it yesterday.", true],
      ["I selled it yesterday.", false],
      ["I sell it yesterday.", false],
    ], { skill: "grammar" }),
    read("enbr3-t3", "Прочитай объявление. Что не так с фургоном?", "FOR SALE\nSecond-hand van, 10 years old.\nRuns well. New tyres.\nSmall dent on the door.\n£3,000 — call Dave", [
      ["Небольшая вмятина на двери.", true],
      ["Он не ездит.", false],
      ["У него старые шины.", false],
    ]),
    script("enbr3-t4", "Поторгуйся с Дейвом.", [
      { speaker: "Дейв", text: "It's three thousand pounds." },
      { speaker: "Ты", answer: "That's too much. Can we try it?", options: ["That's too much. Can we try it?", "It's a deal!", "It runs well."] },
      { speaker: "Дейв", text: "OK, two thousand five hundred." },
      { speaker: "Ты", answer: "It's a deal!", options: ["It's a deal!", "How was your weekend?", "Not much."] },
    ], { skill: "speaking" }),
    fill("enbr3-t5", "Выбери правильное слово.", "We", "two thousand five hundred pounds for it.", "paid", ["paid", "payed", "pay"], { skill: "grammar" }),
    match("enbr3-t6", "Соедини пары.", [
      ["second-hand", "подержанный"],
      ["a test drive", "пробная поездка"],
      ["That's too much.", "Это слишком дорого."],
      ["It's a deal!", "По рукам!"],
    ], { skill: "words" }),
    speak("enbr3-t7", "The bike is two hundred pounds.", "That's too much. How about one hundred and fifty?", "Это слишком дорого. Может, сто пятьдесят?", {
      help: "Ты покупаешь подержанный велосипед. Поторгуйся вслух.",
    }),
  ],
  reward: {
    itemId: "van-keys",
    itemName: "Ключи от фургона",
    itemNameRu: "Van keys",
    ru: "Our very own van keys!",
    en: "Ключи от нашего собственного фургона!",
    a11y: "Связка ключей с брелоком в виде маленькой чашки висит на крючке внутри фургона.",
    image: p("van-keys"),
    steps: ["Дейв отдаёт ключи.", "На брелоке маленькая чашка — Дейв её сам сделал.", "Теперь фургон — их маленький дом на колёсах.", "Внутри пока пусто и пахнет старым кофе."],
    bridge: "Фургон голубой… но очень, очень облезлый. Дейв говорит: «Ask my daughter Lily. She paints walls all over Brighton».",
  },
};

const brighton4: Lesson = {
  id: "en-a2-brighton-4",
  level: "A2",
  cityId: "en-brighton",
  number: 4,
  title: "Painting the van — Красим фургон",
  minutes: 8,
  goals: ["Попросить о помощи", "Сказать, как что-то выглядит", "Неправильные глаголы: make — made, write — wrote"],
  vocabNote: "Give me a hand — «помоги мне» (дословно «дай мне руку»).",
  vocab: [
    v("enbr4-1", "paint", "краска", "Банки с голубой и белой краской на траве.", "Послушать paint", p("l4-1")),
    v("enbr4-2", "a brush", "кисть", "Широкая кисть с голубой краской.", "Послушать a brush", p("l4-2")),
    v("enbr4-3", "light blue", "голубой", "Ровная полоса голубого цвета — как синяя дверь кафе, только светлее.", "Послушать light blue", p("l4-3")),
    v("enbr4-4", "Can you give me a hand?", "Можешь мне помочь?", "Лили, девушка с цветными прядками в комбинезоне в краске, протягивает Мурзику кисть.", "Послушать Can you give me a hand", p("l4-4")),
    v("enbr4-5", "It looks brand new!", "Выглядит как новый!", "Сверкающий голубой фургон на солнце.", "Послушать It looks brand new", p("l4-5")),
    v("enbr4-6", "It's still wet.", "Краска ещё не высохла.", "Табличка у фургона с нарисованной рукой и каплей.", "Послушать It's still wet", p("l4-6")),
    v("enbr4-7", "a sign", "вывеска", "Пустая деревянная доска над окошком фургона.", "Послушать a sign", p("l4-7")),
    v("enbr4-8", "What should we call it?", "Как нам его назвать?", "Мурзик и Лили задумчиво смотрят на пустую вывеску.", "Послушать What should we call it", p("l4-8")),
  ],
  letters: [
    letter("ign = [айн]", "В sign буква g не читается: [сайн].", "a sign", "вывеска"),
    letter("w = [у]", "W — короткое губное [у]: wet — [уэт].", "wet", "мокрый"),
  ],
  dialogue: {
    title: "Лили",
    note: "Made — от make (делать), wrote — от write (писать). Wheels — колёса. Hope on Wheels — «Надежда на колёсах».",
    lines: [
      line("lily", "Hi! I'm Lily. Dad says you need some paint.", "Привет! Я Лили. Папа говорит, вам нужна краска."),
      line("murzik", "Yes, please! Can you give me a hand?", "Да, пожалуйста! Можешь мне помочь?"),
      line("lily", "Of course. What colour?", "Конечно. Какой цвет?"),
      line("tom", "Light blue. Our café has a blue door, so a light blue van!", "Голубой. У нашего кафе синяя дверь — значит, голубой фургон!"),
      line("lily", "There! It looks brand new! Don't touch, it's still wet.", "Вот! Выглядит как новый! Не трогайте, краска ещё мокрая."),
      line("murzik", "And the sign? What should we call it?", "А вывеска? Как нам его назвать?"),
      line("tom", "It's a café on wheels… Hope on Wheels!", "Это кафе на колёсах… «Надежда на колёсах»!"),
      line("lily", "Perfect! I made a sign and wrote the name. Look!", "Отлично! Я сделала вывеску и написала название. Смотрите!"),
    ],
    gist: choice("enbr4-d1", "Как назвали фургон?", [
      ["Hope on Wheels.", true],
      ["Light Blue.", false],
      ["Lily's Van.", false],
    ]),
  },
  grammar: [
    {
      title: "Ещё неправильные глаголы: made, wrote",
      paragraphs: [
        "Make — made (сделал), write — wrote (написал), take — took (взял), give — gave (дал).",
        "Сравни: правильный глагол paint — painted (покрасил), а make — made. Правильные просто получают -ed.",
      ],
      examples: [
        { ru: "Lily painted the van and wrote the name.", en: "Лили покрасила фургон и написала название." },
        { ru: "Dave gave us the keys.", en: "Дейв дал нам ключи." },
      ],
    },
  ],
  tasks: [
    listen("enbr4-t1", "Послушай. Почему нельзя трогать фургон?", "Don't touch, it's still wet.", [
      ["Краска ещё не высохла.", true],
      ["Фургон грязный.", false],
      ["Фургон сломан.", false],
    ]),
    choice("enbr4-t2", "Как сказать «Она написала название»?", [
      ["She wrote the name.", true],
      ["She writed the name.", false],
      ["She write the name.", false],
    ], { skill: "grammar" }),
    choice("enbr4-t3", "Помоги Тому! Он говорит: «Lily maked a sign». Как правильно?", [
      ["Lily made a sign.", true],
      ["Lily make a sign.", false],
      ["Lily did made a sign.", false],
    ], { skill: "grammar" }),
    read("enbr4-t4", "Прочитай табличку. Что делать нельзя?", "WET PAINT!\nPlease don't touch.\nDry by 6 pm.", [
      ["Трогать фургон до шести вечера.", true],
      ["Смотреть на фургон.", false],
      ["Ездить на фургоне после шести.", false],
    ]),
    match("enbr4-t5", "Соедини пары.", [
      ["paint", "краска"],
      ["a brush", "кисть"],
      ["a sign", "вывеска"],
      ["light blue", "голубой"],
    ], { skill: "words" }),
    tf("enbr4-t6", "Can you give me a hand? значит «Дай мне руку, я упаду».", false, "words"),
    speak("enbr4-t7", "Can you give me a hand?", "Of course! What can I do?", "Конечно! Что мне делать?", {
      help: "Друг просит помочь. Согласись вслух.",
    }),
  ],
  reward: {
    itemId: "van-sign",
    itemName: "Вывеска «Hope on Wheels»",
    itemNameRu: "The “Hope on Wheels” sign",
    ru: "Hope on Wheels!",
    en: "«Надежда на колёсах»!",
    a11y: "Над окошком голубого фургона деревянная вывеска с белыми буквами и нарисованной чашкой.",
    image: p("van-sign"),
    steps: ["Лили вешает вывеску над окошком.", "Белые буквы на голубом и маленькая чашка.", "Мурзик фотографирует её для миссис Хоуп.", "«It looks brand new!» — пишет миссис Хоуп в ответ."],
    bridge: "Лили хочет нарисовать на боку фургона портрет миссис Хоуп. «But what is she like?»",
  },
};

const brighton5: Lesson = {
  id: "en-a2-brighton-5",
  level: "A2",
  cityId: "en-brighton",
  number: 5,
  title: "What's she like? — Какая она?",
  minutes: 8,
  goals: ["Описать характер", "Различать What's she like? и What does she look like?", "Сказать, кого человек напоминает"],
  vocabNote: "What's she like? — о характере: «какая она?». What does she look like? — о внешности (это было на A1).",
  vocab: [
    v("enbr5-1", "What's she like?", "Какая она (по характеру)?", "Лили с кистью в зубах и блокнотом слушает Мурзика.", "Послушать What's she like", p("l5-1")),
    v("enbr5-2", "friendly", "дружелюбный", "Миссис Хоуп обнимает незнакомую девочку в кафе.", "Послушать friendly", p("l5-2")),
    v("enbr5-3", "funny", "весёлый, смешной", "Миссис Хоуп в смешной шляпе показывает фокус с ложкой.", "Послушать funny", p("l5-3")),
    v("enbr5-4", "a bit strict", "немного строгий", "Миссис Хоуп грозит пальцем: «Wash your hands!».", "Послушать a bit strict", p("l5-4")),
    v("enbr5-5", "hard-working", "трудолюбивый", "Миссис Хоуп печёт сконы рано утром, за окном ещё темно.", "Послушать hard-working", p("l5-5")),
    v("enbr5-6", "shy", "застенчивый", "Том прячется за фотоаппаратом и краснеет.", "Послушать shy", p("l5-6")),
    v("enbr5-7", "She's got a big heart.", "У неё большое сердце.", "Миссис Хоуп раздаёт чай всем в очереди под дождём.", "Послушать She's got a big heart", p("l5-7")),
    v("enbr5-8", "She reminds me of my granny.", "Она напоминает мне мою бабушку.", "Лили держит в руках старое фото своей бабушки.", "Послушать She reminds me of my granny", p("l5-8")),
  ],
  letters: [
    letter("u = [а]", "В закрытом слоге u часто звучит как короткое [а]: funny — [фани].", "funny", "смешной"),
    letter("heart = [ха:т]", "Исключение: в heart сочетание ear читается как долгое [а:], r почти не слышно.", "heart", "сердце", "Обычно ear читается иначе: ear — [иэ], hear — [хиэ]."),
  ],
  dialogue: {
    title: "Портрет",
    note: "Granny — «бабуля». Like — здесь не «нравится», а «какой, похожий»: What's she like?",
    lines: [
      line("lily", "I want to paint Mrs Hope. What's she like?", "Я хочу нарисовать миссис Хоуп. Какая она?"),
      line("murzik", "She's very friendly. And funny!", "Она очень дружелюбная. И весёлая!"),
      line("tom", "And a bit strict. She always says: “Wash your hands!”", "И немного строгая. Она всегда говорит: «Мойте руки!»"),
      line("murzik", "She's hard-working, too. She gets up at five.", "А ещё трудолюбивая. Она встаёт в пять."),
      line("lily", "And what does she look like?", "А как она выглядит?"),
      line("tom", "She's small, with grey hair, a little hat and an apron.", "Она маленькая, с седыми волосами, в шляпке и фартуке."),
      line("murzik", "And she's got a big heart.", "И у неё большое сердце."),
      line("lily", "She reminds me of my granny. I'll paint her with a cup of tea.", "Она напоминает мне мою бабушку. Нарисую её с чашкой чая."),
    ],
    gist: choice("enbr5-d1", "Что Лили нарисует в руках у миссис Хоуп?", [
      ["Чашку чая.", true],
      ["Кисть.", false],
      ["Золотую ложку.", false],
    ]),
  },
  grammar: [
    {
      title: "What's she like? и What does she look like?",
      paragraphs: [
        "What's she like? — вопрос о характере: She's friendly. She's a bit strict.",
        "What does she look like? — вопрос о внешности: She's small. She's got grey hair. Не перепутай: в первом вопросе нет look.",
      ],
      examples: [
        { ru: "What's your teacher like? — He's funny.", en: "Какой твой учитель? — Весёлый." },
        { ru: "What does he look like? — He's tall.", en: "Как он выглядит? — Он высокий." },
      ],
    },
  ],
  tasks: [
    listen("enbr5-t1", "Послушай. Какая миссис Хоуп?", "She's very friendly, funny and a bit strict.", [
      ["Дружелюбная, весёлая и немного строгая.", true],
      ["Застенчивая и тихая.", false],
      ["Высокая и седая.", false],
    ]),
    choice("enbr5-t2", "Тебя спросили: What's your friend like? Какой ответ подходит?", [
      ["He's funny and friendly.", true],
      ["He's got short hair.", false],
      ["He likes pizza.", false],
    ], { skill: "grammar" }),
    choice("enbr5-t3", "Тебя спросили: What does your friend look like? Какой ответ подходит?", [
      ["She's tall and she's got long hair.", true],
      ["She's a bit shy.", false],
      ["She's hard-working.", false],
    ], { skill: "grammar" }),
    read("enbr5-t4", "Прочитай отзыв о кафе. Каким был официант?", "Lovely café! The cakes were great and the waiter was very friendly, but a bit shy. ★★★★★", [
      ["Дружелюбным, но немного застенчивым.", true],
      ["Строгим.", false],
      ["Весёлым и шумным.", false],
    ]),
    match("enbr5-t5", "Соедини пары.", [
      ["friendly", "дружелюбный"],
      ["shy", "застенчивый"],
      ["hard-working", "трудолюбивый"],
      ["a bit strict", "немного строгий"],
    ], { skill: "words" }),
    tf("enbr5-t6", "She's got a big heart значит «Она добрая».", true, "words"),
    speak("enbr5-t7", "What's your best friend like?", "My best friend is funny and friendly. He's got a big heart.", "Мой лучший друг весёлый и дружелюбный. У него большое сердце.", {
      help: "Расскажи вслух, какой у тебя лучший друг или подруга.",
    }),
  ],
  reward: {
    itemId: "hope-portrait",
    itemName: "Портрет миссис Хоуп",
    itemNameRu: "Mrs Hope's portrait",
    ru: "It's Mrs Hope!",
    en: "Это миссис Хоуп!",
    a11y: "На боку голубого фургона нарисована улыбающаяся пожилая женщина в шляпке и фартуке с чашкой чая.",
    image: p("hope-portrait"),
    steps: ["Лили рисует весь вечер.", "На боку фургона — миссис Хоуп с чашкой чая.", "Она улыбается, как в жизни.", "Миссис Хоуп отвечает на фото: «Do I really look so young?»"],
    bridge: "Завтра суббота. Фургон готов. Дейв говорит: «Try it on the pier! Everyone loves chips by the sea».",
  },
};

const brighton6: Lesson = {
  id: "en-a2-brighton-6",
  level: "A2",
  cityId: "en-brighton",
  number: 6,
  title: "Our first customers — Первые покупатели",
  minutes: 8,
  goals: ["Обслужить очередь", "Спросить: здесь или с собой?", "Рассказать, как прошёл день"],
  vocabNote: "Take away — «с собой». В Британии к картошке фри часто добавляют соль и уксус.",
  vocab: [
    v("enbr6-1", "a queue", "очередь", "Длинная очередь к голубому фургону на пирсе.", "Послушать a queue", p("l6-1")),
    v("enbr6-2", "Who's next?", "Кто следующий?", "Мурзик выглядывает из окошка фургона.", "Послушать Who's next", p("l6-2")),
    v("enbr6-3", "a portion of chips", "порция картошки фри", "Бумажный кулёк с горячей картошкой.", "Послушать a portion of chips", p("l6-3")),
    v("enbr6-4", "salt and vinegar", "соль и уксус", "Солонка и бутылочка уксуса у окошка.", "Послушать salt and vinegar", p("l6-4")),
    v("enbr6-5", "to take away", "с собой", "Девушка уходит с кульком картошки по пирсу.", "Послушать to take away", p("l6-5")),
    v("enbr6-6", "Enjoy!", "Приятного аппетита!", "Мурзик с улыбкой протягивает кулёк.", "Послушать Enjoy", p("l6-6")),
    v("enbr6-7", "We've sold out!", "Всё распродано!", "Пустые полки фургона, табличка на окошке.", "Послушать We've sold out", p("l6-7")),
    v("enbr6-8", "It was a busy day.", "Был тяжёлый, суматошный день.", "Мурзик и Том без сил сидят на ступеньке фургона на закате.", "Послушать It was a busy day", p("l6-8")),
  ],
  letters: [
    letter("ue = тишина", "В queue читается только первая буква и одно [ю]: [кью].", "a queue", "очередь", "Пять букв — один слог!"),
    letter("ch = [ч]", "Ch — как «ч»: chips — [чипс].", "chips", "картошка фри"),
  ],
  dialogue: {
    title: "На пирсе",
    note: "Eat in or take away? — «Здесь или с собой?». На пирсе почти все берут с собой.",
    lines: [
      line("murzik", "Hello! Who's next?", "Здравствуйте! Кто следующий?"),
      line("passerby", "A portion of chips, please.", "Порцию картошки, пожалуйста."),
      line("murzik", "Eat in or take away? Salt and vinegar?", "Здесь или с собой? Соль и уксус?"),
      line("passerby", "To take away. And yes, please.", "С собой. И да, пожалуйста."),
      line("murzik", "Here you are. Enjoy!", "Пожалуйста. Приятного аппетита!"),
      line("tom", "Murzik, look at the queue! It's so long!", "Мурзик, посмотри на очередь! Какая длинная!"),
      line("murzik", "Sorry, everyone! We've sold out!", "Простите все! Всё распродано!"),
      line("tom", "We opened at twelve and sold a hundred portions. It was a busy day!", "Мы открылись в двенадцать и продали сто порций. Вот это был день!"),
    ],
    gist: choice("enbr6-d1", "Сколько порций продали Мурзик и Том?", [
      ["Сто.", true],
      ["Двенадцать.", false],
      ["Десять.", false],
    ]),
  },
  grammar: [
    {
      title: "Рассказ о дне: first, then, after that",
      paragraphs: [
        "Чтобы рассказать, как прошёл день, ставим действия по порядку в прошедшем времени: First we opened the van. Then we sold chips. After that we cleaned up.",
        "First — сначала, then — потом, after that — после этого, in the end — в конце концов.",
      ],
      examples: [
        { ru: "First we opened at twelve. Then lots of people came.", en: "Сначала мы открылись в двенадцать. Потом пришло много людей." },
        { ru: "In the end we sold out!", en: "В конце концов всё распродали!" },
      ],
    },
  ],
  tasks: [
    listen("enbr6-t1", "Послушай. Что хочет покупательница?", "A portion of chips, please. To take away.", [
      ["Порцию картошки с собой.", true],
      ["Две порции рыбы здесь.", false],
      ["Только соль и уксус.", false],
    ]),
    script("enbr6-t2", "Ты в окошке фургона. Обслужи покупателя.", [
      { speaker: "Покупатель", text: "Hi! A portion of chips, please." },
      { speaker: "Ты", answer: "Salt and vinegar?", options: ["Salt and vinegar?", "We've sold out!", "It was a busy day."] },
      { speaker: "Покупатель", text: "Yes, please. To take away." },
      { speaker: "Ты", answer: "Here you are. Enjoy!", options: ["Here you are. Enjoy!", "Who's next?", "Not much."] },
    ], { skill: "speaking" }),
    choice("enbr6-t3", "Что было в конце?", [
      ["In the end we sold out.", true],
      ["First we opened the van.", false],
      ["Then lots of people came.", false],
    ], { skill: "grammar" }),
    read("enbr6-t4", "Прочитай меню фургона. Сколько стоит картошка с сыром?", "HOPE ON WHEELS\nChips — £3\nChips with cheese — £4\nTea — £2\nEat in or take away", [
      ["4 фунта.", true],
      ["3 фунта.", false],
      ["2 фунта.", false],
    ]),
    match("enbr6-t5", "Соедини пары.", [
      ["a queue", "очередь"],
      ["to take away", "с собой"],
      ["Who's next?", "Кто следующий?"],
      ["We've sold out!", "Всё распродано!"],
    ], { skill: "words" }),
    fill("enbr6-t6", "Выбери правильное слово.", "We opened at twelve and", "a hundred portions.", "sold", ["sold", "selled", "sell"], { skill: "review" }),
    speak("enbr6-t7", "How was your day?", "It was a busy day! First I worked, then I went shopping, and in the end I cooked dinner.", "Был суматошный день! Сначала я работал(а), потом ходил(а) по магазинам, а в конце приготовил(а) ужин.", {
      help: "Расскажи вслух, как прошёл твой день: first, then, in the end.",
    }),
  ],
  reward: {
    itemId: "paper-cones",
    itemName: "Бумажные кульки",
    itemNameRu: "Paper cones",
    ru: "Paper cones for chips!",
    en: "Бумажные кульки для картошки!",
    a11y: "Стопка бумажных кульков в голубую полоску у окошка фургона.",
    image: p("paper-cones"),
    steps: ["Вечером Лили приносит стопку кульков.", "Она нарисовала на каждом голубые полоски.", "«For your next hundred portions!»", "Мурзик ставит их у окошка."],
    bridge: "Завтра пора ехать. Но в книге дороги ещё нет ни одного рецепта… Дейв загадочно улыбается.",
  },
};

const brighton7: Lesson = {
  id: "en-a2-brighton-7",
  level: "A2",
  cityId: "en-brighton",
  number: 7,
  title: "Brighton exam — Экзамен: Брайтон",
  minutes: 9,
  goals: ["Понять длинный рассказ на слух", "Попрощаться с друзьями", "Повторить всё из Брайтона"],
  vocabNote: "Урок 7 — экзамен города: длинная аудиоистория и повторение. Batter — жидкое тесто, кляр.",
  vocab: [
    v("enbr7-1", "fish and chips", "рыба с картошкой фри", "Золотистая рыба в кляре и картошка в бумажном кульке.", "Послушать fish and chips", p("l7-1")),
    v("enbr7-2", "batter", "кляр, жидкое тесто", "Миска с жидким тестом и венчик.", "Послушать batter", p("l7-2")),
    v("enbr7-3", "crispy", "хрустящий", "Кусок рыбы в кляре хрустит, крошки летят.", "Послушать crispy", p("l7-3")),
    v("enbr7-4", "my dad's recipe", "рецепт моего папы", "Старая карточка с рецептом, написанная от руки.", "Послушать my dad's recipe", p("l7-4")),
    v("enbr7-5", "Don't forget to write!", "Не забывай писать!", "Лили машет телефоном.", "Послушать Don't forget to write", p("l7-5")),
    v("enbr7-6", "Take care on the road!", "Берегите себя в дороге!", "Дейв серьёзно поднимает палец у открытой двери фургона.", "Послушать Take care on the road", p("l7-6")),
    v("enbr7-7", "Next stop: Cambridge!", "Следующая остановка: Кембридж!", "На карте Англии стрелка от Брайтона к Кембриджу.", "Послушать Next stop Cambridge", p("l7-7")),
    v("enbr7-8", "See you in London!", "Увидимся в Лондоне!", "Дейв и Лили показывают на плакат фестиваля.", "Послушать See you in London", p("l7-8")),
  ],
  letters: [
    letter("a = [æ]", "Короткое a в закрытом слоге — между «а» и «э»: batter — [бэтэ].", "batter", "кляр"),
  ],
  dialogue: {
    title: "Первый рецепт",
    note: "Secret — «секрет». Cold water — «холодная вода»: секрет хрустящего кляра.",
    lines: [
      line("dave", "Before you go… This is for your road book.", "Пока вы не уехали… Это для вашей книги дороги."),
      line("murzik", "A recipe? Fish and chips!", "Рецепт? Рыба с картошкой!"),
      line("dave", "My dad's recipe. The secret is cold water in the batter.", "Рецепт моего папы. Секрет — холодная вода в кляре."),
      line("tom", "That's why it's so crispy!", "Вот почему он такой хрустящий!"),
      line("lily", "Don't forget to write! And send photos.", "Не забывайте писать! И присылайте фото."),
      line("dave", "And take care on the road! The van is old.", "И берегите себя в дороге! Фургон старый."),
      line("murzik", "We will! Next stop: Cambridge!", "Обязательно! Следующая остановка — Кембридж!"),
      line("lily", "See you in London! We'll come to the festival.", "Увидимся в Лондоне! Мы приедем на фестиваль."),
    ],
    gist: choice("enbr7-d1", "В чём секрет кляра?", [
      ["В холодной воде.", true],
      ["В горячем масле.", false],
      ["В уксусе.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем Брайтон",
      paragraphs: [
        "Прошедшее время: правильные глаголы с -ed (stayed, painted) и неправильные (went, bought, made, wrote, sold). Вопрос — Did you…? Отрицание — I didn't…",
        "Характер — What's she like? Порядок событий — first, then, after that, in the end.",
      ],
      examples: [
        { ru: "We bought a van, Lily painted it, and then we sold a hundred portions.", en: "Мы купили фургон, Лили его покрасила, а потом мы продали сто порций." },
        { ru: "Did you write to Mrs Hope? — Yes, I did.", en: "Ты написал(а) миссис Хоуп? — Да." },
      ],
    },
  ],
  tasks: [
    listen("enbr7-t1", "Аудиоистория. Дейв рассказывает про своего папу. Послушай. Где работал его папа?", "My dad worked on the pier for forty years. He had a small fish and chip shop. Every summer there was a long queue. When I was a boy, I helped him. He always said: the secret is cold water. Now the shop is gone, but I've still got his recipe.", [
      ["В маленьком кафе рыбы с картошкой на пирсе.", true],
      ["В гараже.", false],
      ["На рыболовном судне.", false],
    ]),
    choice("enbr7-t2", "Из рассказа Дейва: сколько лет его папа работал на пирсе?", [
      ["Сорок лет.", true],
      ["Четырнадцать лет.", false],
      ["Четыре года.", false],
    ], { skill: "listening" }),
    read("enbr7-t3", "Прочитай рецепт. Какая вода нужна для кляра?", "FISH AND CHIPS (Dave's dad)\n1. Make the batter: flour, salt and very cold water.\n2. Dip the fish in the batter.\n3. Fry until golden and crispy.", [
      ["Очень холодная.", true],
      ["Горячая.", false],
      ["Солёная морская.", false],
    ]),
    choice("enbr7-t4", "Что было сначала в Брайтоне?", [
      ["First they bought a van.", true],
      ["First they sold out.", false],
      ["First they painted the sign.", false],
    ], { skill: "review" }),
    script("enbr7-t5", "Попрощайся с Дейвом и Лили.", [
      { speaker: "Лили", text: "Don't forget to write!" },
      { speaker: "Ты", answer: "I won't! I'll send photos.", options: ["I won't! I'll send photos.", "Who's next?", "That's too much."] },
      { speaker: "Дейв", text: "Take care on the road!" },
      { speaker: "Ты", answer: "Thanks for everything! See you in London!", options: ["Thanks for everything! See you in London!", "It's still wet.", "Salt and vinegar?"] },
    ], { skill: "review" }),
    match("enbr7-t6", "Повторяем Брайтон: соедини пары.", [
      ["a week ago", "неделю назад"],
      ["second-hand", "подержанный"],
      ["a queue", "очередь"],
      ["crispy", "хрустящий"],
    ], { skill: "review" }),
    speak("enbr7-t7", "What did you do in Brighton?", "We bought a van, Lily painted it, and we sold chips on the pier!", "Мы купили фургон, Лили его покрасила, и мы продавали картошку фри на пирсе!", {
      help: "Расскажи вслух, что было в Брайтоне, в прошедшем времени.",
    }),
  ],
  reward: {
    itemId: "recipe-fish-and-chips",
    itemName: "Рецепт «Fish and chips»",
    itemNameRu: "Fish and chips recipe card",
    ru: "Our first recipe!",
    en: "Наш первый рецепт!",
    a11y: "Карточка с рецептом, написанным от руки, и рисунком рыбы с картошкой вклеена в голубую тетрадь.",
    image: p("recipe-fish-and-chips"),
    steps: ["Мурзик вклеивает карточку в книгу дороги.", "Первая страница больше не пустая.", "Рецепт папы Дейва и рисунок Лили.", "Осталось ещё шестнадцать мест!"],
  },
};

const story: CityStory = {
  home: {
    name: "Фургон «Hope on Wheels»",
    nameRu: "The Hope on Wheels van",
    image: p("home"),
    a11y: "Внутри старого голубого фургона: маленькая плита, полки, окошко с навесом, пока пусто и немного облезло.",
  },
  keepsakeId: "recipe-fish-and-chips",
  welcomeRu: "Hello, Brighton!",
  welcomeEn: "Привет, Брайтон!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том на набережной Брайтона: галечный пляж, длинный пирс с каруселью, чайки и разноцветные домики.",
  departureImage: p("departure"),
  departureA11y: "Голубой фургон «Hope on Wheels» отъезжает от гаража, Дейв и Лили машут вслед.",
  finale: [
    {
      image: p("finale-1"),
      a11y: "Внутри фургона уютно: плакат фестиваля, голубая тетрадь, ключи с чашкой, вывеска, портрет миссис Хоуп на боку, стопка кульков в полоску.",
      lines: [
        { en: "Старый фургон теперь — маленькое кафе на колёсах." },
        { en: "В книге дороги первый рецепт: рыба с картошкой от папы Дейва." },
      ],
    },
    {
      image: p("finale-2"),
      a11y: "Мурзик и Том на пирсе на закате подбрасывают бумажные кульки, рядом голубой фургон.",
      lines: [
        { ru: "Brighton complete!", en: "Брайтон пройден!" },
        { en: "7 / 7 уроков" },
        { ru: "We've got a van and our first recipe!", en: "У нас есть фургон и первый рецепт!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Голубой фургон «Hope on Wheels» отъезжает от гаража, Дейв и Лили машут вслед.",
      lines: [
        { ru: "Goodbye, Dave! Goodbye, Lily!", en: "До свидания, Дейв! До свидания, Лили!" },
        { ru: "Next stop: Cambridge!", en: "Следующая остановка: Кембридж!" },
      ],
    },
    {
      image: p("finale-4"),
      a11y: "Голубой фургон едет по зелёной английской дороге на север, мимо полей и холмов.",
      lines: [{ ru: "Brighton → Cambridge", en: "Брайтон → Кембридж" }],
    },
    {
      image: pic("en/cambridge/arrival"),
      a11y: "Голубой фургон у реки в Кембридже: старинные колледжи, плоскодонки на воде, велосипеды.",
      lines: [{ ru: "Hello, Cambridge!", en: "Привет, Кембридж!" }],
    },
  ],
};

export const enBrighton = {
  id: "en-brighton",
  name: "Брайтон",
  nameEn: "Brighton",
  lessons: [brighton1, brighton2, brighton3, brighton4, brighton5, brighton6, brighton7],
  story,
};
