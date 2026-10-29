import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "../tr/make";

/* Торонто · «Праздники и даты» · месяцы, даты, порядковые числа, going to (планы), день рождения, подарки, пожелания. */

const p = (name: string) => pic(`en/toronto/${name}`);

const toronto1: Lesson = {
  id: "en-a1-toronto-1",
  level: "A1",
  cityId: "en-toronto",
  number: 1,
  title: "January, February… — Месяцы",
  minutes: 7,
  goals: ["Назвать месяцы", "Сказать «в мае»: in May", "Назвать времена года"],
  vocabNote: "Месяцы пишут с большой буквы: May, June. «В каком месяце» — in: in May, in December. Времена года: spring, summer, autumn (в Америке и Канаде — fall), winter.",
  vocab: [
    v("ento1-1", "January, February, March", "январь, февраль, март", "Три листка календаря: снег, снег и первые подснежники.", "Послушать January, February, March", p("l1-1")),
    v("ento1-2", "April, May, June", "апрель, май, июнь", "Три листка календаря: дождик, тюльпаны, солнце.", "Послушать April, May, June", p("l1-2")),
    v("ento1-3", "July, August, September", "июль, август, сентябрь", "Три листка календаря: озеро, арбуз, первые жёлтые листья.", "Послушать July, August, September", p("l1-3")),
    v("ento1-4", "October, November, December", "октябрь, ноябрь, декабрь", "Три листка календаря: кленовые листья, дождь, снеговик.", "Послушать October, November, December", p("l1-4")),
    v("ento1-5", "in May", "в мае", "Цветущие тюльпаны у озера.", "Послушать in May", p("l1-5")),
    v("ento1-6", "spring and summer", "весна и лето", "Половина картинки — весенние цветы, половина — летний пляж.", "Послушать spring and summer", p("l1-6")),
    v("ento1-7", "autumn and winter", "осень и зима", "Половина картинки — кленовые листья, половина — снег.", "Послушать autumn and winter", p("l1-7")),
  ],
  dialogue: {
    title: "Семья Чен",
    note: "Семья Чен держит маленькое семейное кафе. Майкл и Люси — хозяева, бабушка Мэй — мама Майкла. Gorgeous — «великолепный».",
    lines: [
      line("lucy", "Welcome to Toronto! I'm Lucy, and this is my husband, Michael.", "Добро пожаловать в Торонто! Я Люси, а это мой муж, Майкл."),
      line("michael", "And this is my mother, Grandma May. Welcome to our family café!", "А это моя мама, бабушка Мэй. Добро пожаловать в наше семейное кафе!"),
      line("murzik", "Hello! Toronto is beautiful in May!", "Здравствуйте! Торонто в мае такой красивый!"),
      line("may", "Yes, spring is gorgeous here. But winter is very cold!", "Да, весна здесь великолепная. А вот зима очень холодная!"),
      line("tom", "What's your favourite month, Grandma May?", "Какой ваш любимый месяц, бабушка Мэй?"),
      line("may", "October. The maple trees are red and gold.", "Октябрь. Клёны красные и золотые."),
    ],
    gist: choice("ento1-d1", "Какой любимый месяц бабушки Мэй?", [
      ["Октябрь.", true],
      ["Май.", false],
      ["Январь.", false],
    ]),
  },
  grammar: [
    {
      title: "Месяцы и времена года: in",
      paragraphs: [
        "С месяцами и временами года — in: in May, in winter, in the summer.",
        "Месяцы всегда пишут с большой буквы: January, February… Времена года — с маленькой: spring, summer.",
      ],
      examples: [
        { ru: "It's very cold in January.", en: "В январе очень холодно." },
        { ru: "We go to the lake in summer.", en: "Летом мы ездим на озеро." },
      ],
    },
  ],
  tasks: [
    choice("ento1-t1", "Как сказать «в декабре»?", [
      ["in December", true],
      ["on December", false],
      ["at December", false],
    ], { skill: "grammar" }),
    listen("ento1-t2", "Послушай. Какой месяц?", "My favourite month is September.", [
      ["Сентябрь.", true],
      ["Ноябрь.", false],
      ["Декабрь.", false],
    ]),
    match("ento1-t3", "Соедини пары.", [
      ["spring", "весна"],
      ["summer", "лето"],
      ["autumn", "осень"],
      ["winter", "зима"],
    ], { skill: "words" }),
    missing("ento1-t4", "Какой буквы не хватает? («февраль»)", "Febr", "ary", "u", ["u", "o", "a"]),
    speak("ento1-t5", "What's your favourite month?", "My favourite month is June. It's summer!", "Мой любимый месяц — июнь. Это лето!", { help: "Назови вслух свой любимый месяц." }),
    choice("ento1-t6", "Как сказать «Тебе стоит отдохнуть»?", [
      ["You should rest.", true],
      ["You should to rest.", false],
      ["You rest should.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tulips",
    itemName: "Ваза с тюльпанами",
    itemNameRu: "Tulips",
    ru: "Hooray! Tulips!",
    en: "Ура! Тюльпаны!",
    a11y: "Белая ваза с букетом красных и жёлтых тюльпанов стоит на подоконнике.",
    image: p("tulips"),
    steps: ["Люси показывает Мурзику квартиру над кафе.", "На подоконнике — ваза с тюльпанами.", "«In May, Toronto is full of tulips!» — «В мае Торонто полон тюльпанов!»", "В комнате пахнет весной."],
    bridge: "Бабушка Мэй смотрит на календарь: «What's the date today?»",
  },
};

const toronto2: Lesson = {
  id: "en-a1-toronto-2",
  level: "A1",
  cityId: "en-toronto",
  number: 2,
  title: "The fifth of May — Пятое мая",
  minutes: 7,
  goals: ["Назвать порядковые числа: first, second, third", "Назвать дату: the fifth of May", "Спросить: What's the date today?"],
  vocabNote: "Порядковые: first (1st), second (2nd), third (3rd), потом -th: fourth, fifth, sixth… Дату говорят так: the fifth of May или May fifth.",
  vocab: [
    v("ento2-1", "What's the date today?", "Какое сегодня число?", "Бабушка Мэй надевает очки и смотрит на календарь.", "Послушать What's the date today", p("l2-1")),
    v("ento2-2", "It's the second of May.", "Сегодня второе мая.", "Листок календаря с цифрой 2.", "Послушать It's the second of May", p("l2-2")),
    v("ento2-3", "first, second, third", "первый, второй, третий", "Три котёнка на пьедестале: первое, второе и третье место.", "Послушать first, second, third", p("l2-3")),
    v("ento2-4", "fourth, fifth, sixth", "четвёртый, пятый, шестой", "Ряд стульев, на спинках таблички 4, 5, 6.", "Послушать fourth, fifth, sixth", p("l2-4")),
    v("ento2-5", "the fifth of May", "пятое мая", "Листок календаря, пятое мая обведено сердечком.", "Послушать the fifth of May", p("l2-5")),
    v("ento2-6", "in three days", "через три дня", "Три листка календаря, на третьем нарисован торт.", "Послушать in three days", p("l2-6")),
    v("ento2-7", "next week", "на следующей неделе", "Стрелка на календаре показывает вперёд.", "Послушать next week", p("l2-7")),
  ],
  dialogue: {
    title: "Подозрительный Том",
    note: "Why? — «Почему?» Nothing! — «Ничего!» Just asking — «просто спрашиваю».",
    lines: [
      line("tom", "Grandma May, what's the date today?", "Бабушка Мэй, какое сегодня число?"),
      line("may", "It's the second of May.", "Второе мая."),
      line("tom", "The second… So in three days it's the fifth of May!", "Второе… Значит, через три дня пятое мая!"),
      line("murzik", "The fifth of May? Why?", "Пятое мая? А что?"),
      line("tom", "Nothing! Just asking.", "Ничего! Просто спрашиваю."),
      line("may", "Tom, you're a bad actor!", "Том, ты плохой актёр!"),
    ],
    gist: choice("ento2-d1", "Какое сегодня число?", [
      ["Второе мая.", true],
      ["Пятое мая.", false],
      ["Третье мая.", false],
    ]),
  },
  grammar: [
    {
      title: "Порядковые числа и даты",
      paragraphs: [
        "1st first, 2nd second, 3rd third, 4th fourth, 5th fifth, 6th sixth… 20th twentieth, 21st twenty-first.",
        "Дата: It's the tenth of March. В разговоре в Америке и Канаде часто говорят: It's March tenth.",
      ],
      examples: [
        { ru: "Today is the twenty-first of June.", en: "Сегодня двадцать первое июня." },
        { ru: "It's the first day of spring!", en: "Сегодня первый день весны!" },
      ],
    },
  ],
  tasks: [
    choice("ento2-t1", "Как сказать «третье мая»?", [
      ["the third of May", true],
      ["the three of May", false],
      ["third May of", false],
    ], { skill: "grammar" }),
    listen("ento2-t2", "Послушай. Какая дата?", "It's the fifteenth of August.", [
      ["15 августа", true],
      ["5 августа", false],
      ["15 апреля", false],
    ]),
    match("ento2-t3", "Соедини пары.", [
      ["first", "первый"],
      ["second", "второй"],
      ["third", "третий"],
      ["fifth", "пятый"],
    ], { skill: "words" }),
    missing("ento2-t4", "Какой буквы не хватает? («пятый»)", "fi", "th", "f", ["f", "v", "s"]),
    speak("ento2-t5", "What's the date today?", "It's the tenth of March.", "Сегодня десятое марта.", { help: "Назови вслух сегодняшнюю дату." }),
    choice("ento2-t6", "Как сказать «в мае»?", [
      ["in May", true],
      ["on May", false],
      ["at May", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "frame",
    itemName: "Рамка для фото",
    itemNameRu: "Photo frame",
    ru: "Hooray! A photo frame!",
    en: "Ура! Рамка для фото!",
    a11y: "Серебряная рамка для фотографии, пока пустая, стоит на комоде.",
    image: p("frame"),
    steps: ["Бабушка Мэй достаёт из шкафа серебряную рамку.", "«It's empty now, but soon…» — «Пока пустая, но скоро…»", "Она хитро подмигивает Тому.", "Мурзик ставит рамку на комод. Какое фото здесь будет?"],
    bridge: "Мурзик спрашивает бабушку Мэй: «When's your birthday?»",
  },
};

const toronto3: Lesson = {
  id: "en-a1-toronto-3",
  level: "A1",
  cityId: "en-toronto",
  number: 3,
  title: "When's your birthday? — Когда твой день рождения?",
  minutes: 7,
  goals: ["Спросить, когда день рождения", "Сказать дату с on: on the fifth of May", "Сказать, сколько исполнится"],
  vocabNote: "С датой — on: My birthday is on the fifth of May. С месяцем — in: My birthday is in May.",
  vocab: [
    v("ento3-1", "When's your birthday?", "Когда твой день рождения?", "Бабушка Мэй с улыбкой спрашивает Мурзика за чаем.", "Послушать When's your birthday", p("l3-1")),
    v("ento3-2", "My birthday is on the fifth of May.", "Мой день рождения пятого мая.", "Мурзик показывает на календаре пятое мая.", "Послушать My birthday is on the fifth of May", p("l3-2")),
    v("ento3-3", "How old are you going to be?", "Сколько тебе исполнится?", "Бабушка Мэй с любопытством наклоняется к Мурзику.", "Послушать How old are you going to be", p("l3-3")),
    v("ento3-4", "I'm going to be seven.", "Мне исполнится семь.", "Мурзик гордо показывает семь пальцев на двух лапах.", "Послушать I'm going to be seven", p("l3-4")),
    v("ento3-5", "a party", "праздник, вечеринка", "Комната с гирляндами и шариками.", "Послушать a party", p("l3-5")),
    v("ento3-6", "an invitation", "приглашение", "Красивая открытка-приглашение с шариками.", "Послушать an invitation", p("l3-6")),
    v("ento3-7", "Can you come?", "Придёшь?", "Том протягивает соседу приглашение.", "Послушать Can you come", p("l3-7")),
  ],
  dialogue: {
    title: "Секрет раскрыт",
    note: "So — «значит». Kitchen — «кухня». А у Люси, кажется, появился план…",
    lines: [
      line("murzik", "Grandma May, when's your birthday?", "Бабушка Мэй, когда ваш день рождения?"),
      line("may", "My birthday is in October, on the tenth. And yours?", "Мой день рождения в октябре, десятого. А твой?"),
      line("murzik", "My birthday is on the fifth of May!", "Мой день рождения пятого мая!"),
      line("may", "The fifth of May? So it's in three days! How old are you going to be?", "Пятого мая? Значит, через три дня! Сколько тебе исполнится?"),
      line("murzik", "I'm going to be seven.", "Мне исполнится семь."),
      line("lucy", "In three days? Hmm… Tom, can you come to the kitchen, please?", "Через три дня? Хм… Том, зайди-ка на кухню, пожалуйста."),
    ],
    gist: choice("ento3-d1", "Когда день рождения у Мурзика?", [
      ["Пятого мая.", true],
      ["Десятого октября.", false],
      ["Второго мая.", false],
    ]),
  },
  grammar: [
    {
      title: "On the fifth / in May",
      paragraphs: [
        "С точной датой и днём — on: on the fifth of May, on Monday, on my birthday. С месяцем, годом, временем года — in: in May, in 2026, in summer.",
        "С временем — at: at seven o'clock.",
      ],
      examples: [
        { ru: "The party is on Saturday at six.", en: "Праздник в субботу в шесть." },
        { ru: "My mum's birthday is in July.", en: "День рождения мамы в июле." },
      ],
    },
  ],
  tasks: [
    choice("ento3-t1", "Как сказать «двенадцатого июня»?", [
      ["on the twelfth of June", true],
      ["in the twelfth of June", false],
      ["at the twelfth of June", false],
    ], { skill: "grammar" }),
    listen("ento3-t2", "Послушай. Когда день рождения?", "My birthday is on the third of March.", [
      ["Третьего марта.", true],
      ["Тринадцатого марта.", false],
      ["Третьего мая.", false],
    ]),
    match("ento3-t3", "Соедини пары.", [
      ["birthday", "день рождения"],
      ["party", "праздник"],
      ["invitation", "приглашение"],
      ["neighbours", "соседи"],
    ], { skill: "words" }),
    spell("ento3-t4", "Собери из букв слово «праздник».", "party"),
    speak("ento3-t5", "When's your birthday?", "My birthday is on the twelfth of June.", "Мой день рождения двенадцатого июня.", { help: "Назови вслух дату своего дня рождения." }),
    choice("ento3-t6", "Как спросить «Какое сегодня число?»", [
      ["What's the date today?", true],
      ["What day is date?", false],
      ["How date is it?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "party-hats",
    itemName: "Праздничные колпаки",
    itemNameRu: "Party hats",
    ru: "Hooray! Party hats!",
    en: "Ура! Праздничные колпаки!",
    a11y: "Стопка бумажных праздничных колпаков в горошек и полоску, с резинками и помпонами.",
    image: p("party-hats"),
    steps: ["Люси приносит стопку праздничных колпаков.", "«For your party!» — «Для твоего праздника!»", "Один, самый маленький, с прорезями для ушей.", "Мурзик примеряет его перед зеркалом."],
    bridge: "Тем временем Том и семья Чен строят тайные планы.",
  },
};

const toronto4: Lesson = {
  id: "en-a1-toronto-4",
  level: "A1",
  cityId: "en-toronto",
  number: 4,
  title: "We're going to… — Мы собираемся…",
  minutes: 7,
  goals: ["Рассказать о планах: I'm going to", "Спросить: What are you going to do?", "Сказать, чего не собираешься делать"],
  vocabNote: "Going to — «собираюсь (сделать)»: I'm going to bake a cake. Это планы, которые уже решены.",
  vocab: [
    v("ento4-1", "What are you going to do?", "Что ты собираешься делать?", "Том и Майкл шепчутся на кухне.", "Послушать What are you going to do", p("l4-1")),
    v("ento4-2", "I'm going to bake a cake.", "Я испеку торт.", "Люси достаёт муку и яйца.", "Послушать I'm going to bake a cake", p("l4-2")),
    v("ento4-3", "We're going to have a party.", "У нас будет праздник.", "Майкл рисует на доске план праздника.", "Послушать We're going to have a party", p("l4-3")),
    v("ento4-4", "He's going to buy a present.", "Он купит подарок.", "Том смотрит на витрину магазина.", "Послушать He's going to buy a present", p("l4-4")),
    v("ento4-5", "We're going to invite our friends.", "Мы пригласим друзей.", "Стопка приглашений и конверты.", "Послушать We're going to invite our friends", p("l4-5")),
    v("ento4-6", "Don't tell him!", "Не говори ему!", "Бабушка Мэй прикладывает палец к губам.", "Послушать Don't tell him", p("l4-6")),
    v("ento4-7", "It's a surprise!", "Это сюрприз!", "Из коробки выпрыгивают конфетти.", "Послушать It's a surprise", p("l4-7")),
  ],
  dialogue: {
    title: "Тайный совет",
    note: "Sketchbook — «альбом для рисования». Draw — «рисовать».",
    lines: [
      line("tom", "So, what are we going to do for Murzik's birthday?", "Итак, что будем делать на день рождения Мурзика?"),
      line("lucy", "I'm going to bake a cake. A big chocolate cake!", "Я испеку торт. Большой шоколадный!"),
      line("michael", "We're going to have a party in the café and invite the neighbours.", "Устроим праздник в кафе и пригласим соседей."),
      line("tom", "And I'm going to buy a present. Murzik loves drawing. A sketchbook!", "А я куплю подарок. Мурзик любит рисовать. Альбом для рисования!"),
      line("may", "Good idea. But don't tell him! It's a surprise!", "Хорошая идея. Только ему не говорите! Это сюрприз!"),
    ],
    gist: choice("ento4-d1", "Что Том собирается подарить?", [
      ["Альбом для рисования.", true],
      ["Торт.", false],
      ["Фотоаппарат.", false],
    ]),
  },
  grammar: [
    {
      title: "Going to: планы",
      paragraphs: [
        "Планы: am / is / are + going to + глагол: I'm going to bake. She's going to buy. We're going to have a party.",
        "Вопрос: What are you going to do? Are you going to come? Отрицание: I'm not going to tell him.",
      ],
      examples: [
        { ru: "I'm going to visit my grandma on Sunday.", en: "В воскресенье я поеду к бабушке." },
        { ru: "Are you going to buy a present? — Yes, I am.", en: "Ты купишь подарок? — Да." },
      ],
    },
  ],
  tasks: [
    choice("ento4-t1", "Как сказать «Я собираюсь испечь торт»?", [
      ["I'm going to bake a cake.", true],
      ["I going to bake a cake.", false],
      ["I'm going bake a cake.", false],
    ], { skill: "grammar" }),
    listen("ento4-t2", "Послушай. Что они собираются делать?", "We're going to watch a film tonight.", [
      ["Смотреть фильм сегодня вечером.", true],
      ["Печь торт завтра.", false],
      ["Пойти в парк.", false],
    ]),
    match("ento4-t3", "Соедини пары.", [
      ["bake", "печь"],
      ["buy", "покупать"],
      ["invite", "приглашать"],
      ["surprise", "сюрприз"],
    ], { skill: "words" }),
    missing("ento4-t4", "Какой буквы не хватает? («подарок»)", "pres", "nt", "e", ["e", "a", "i"]),
    speak("ento4-t5", "What are you going to do at the weekend?", "I'm going to meet my friends.", "Я встречусь с друзьями.", { help: "Расскажи вслух о своих планах." }),
    choice("ento4-t6", "Как сказать «в субботу»?", [
      ["on Saturday", true],
      ["in Saturday", false],
      ["at Saturday", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "balloons",
    itemName: "Воздушные шарики",
    itemNameRu: "Balloons",
    ru: "Hooray! Balloons!",
    en: "Ура! Шарики!",
    a11y: "Связка разноцветных воздушных шариков привязана к спинке стула.",
    image: p("balloons"),
    steps: ["Том приходит домой со связкой шариков.", "«What are they for?» — спрашивает Мурзик. «Это для чего?»", "«Nothing! They're just nice!» — «Просто так! Красиво же!»", "Мурзик ничего не подозревает."],
    bridge: "Утро пятого мая. Мурзик спускается в кафе — а там подозрительно тихо…",
  },
};

const toronto5: Lesson = {
  id: "en-a1-toronto-5",
  level: "A1",
  cityId: "en-toronto",
  number: 5,
  title: "Happy birthday! — С днём рождения!",
  minutes: 7,
  goals: ["Поздравить с днём рождения", "Подарить подарок и попросить открыть", "Порадоваться сюрпризу"],
  vocabNote: "Happy birthday! — «С днём рождения!» Many happy returns! — «Долгих лет!» (так говорят в Британии). What a…! — «Какой…!»",
  vocab: [
    v("ento5-1", "Surprise! Happy birthday!", "Сюрприз! С днём рождения!", "Все выпрыгивают из-за стойки кафе с хлопушками.", "Послушать Surprise! Happy birthday", p("l5-1")),
    v("ento5-2", "Here's your present.", "Вот твой подарок.", "Том протягивает Мурзику коробку с бантом.", "Послушать Here's your present", p("l5-2")),
    v("ento5-3", "Open it!", "Открой!", "Мурзик развязывает бант.", "Послушать Open it", p("l5-3")),
    v("ento5-4", "What a lovely surprise!", "Какой чудесный сюрприз!", "Мурзик прижимает лапы к щекам от восторга.", "Послушать What a lovely surprise", p("l5-4")),
    v("ento5-5", "Thank you so much!", "Огромное спасибо!", "Мурзик обнимает Тома.", "Послушать Thank you so much", p("l5-5")),
    v("ento5-6", "How old are you now?", "Сколько тебе теперь лет?", "Бабушка Мэй ласково гладит Мурзика по голове.", "Послушать How old are you now", p("l5-6")),
    v("ento5-7", "We love you!", "Мы тебя любим!", "Вся семья Чен и Том обнимают Мурзика.", "Послушать We love you", p("l5-7")),
  ],
  dialogue: {
    title: "Утро пятого мая",
    note: "Sketchbook — «альбом для рисования». Watercolours — «акварель».",
    lines: [
      line("tom", "Surprise! Happy birthday, Murzik!", "Сюрприз! С днём рождения, Мурзик!"),
      line("may", "Happy birthday, dear!", "С днём рождения, дорогой!"),
      line("murzik", "What a lovely surprise! Thank you!", "Какой чудесный сюрприз! Спасибо!"),
      line("tom", "Here's your present. Open it!", "Вот твой подарок. Открывай!"),
      line("murzik", "A sketchbook! And watercolours! Thank you so much!", "Альбом для рисования! И акварель! Огромное спасибо!"),
      line("may", "How old are you now?", "Сколько тебе теперь лет?"),
      line("murzik", "Seven!", "Семь!"),
    ],
    gist: choice("ento5-d1", "Что подарил Том?", [
      ["Альбом и акварель.", true],
      ["Торт.", false],
      ["Шарики.", false],
    ]),
  },
  grammar: [
    {
      title: "Восклицания: What a…! How…!",
      paragraphs: [
        "What a + прилагательное + слово (об одной вещи, которую можно посчитать): What a lovely surprise! What a beautiful cake! How + прилагательное: How nice! How kind!",
        "На подарок отвечают: Thank you so much! It's beautiful! I love it!",
      ],
      examples: [
        { ru: "What a big cake!", en: "Какой большой торт!" },
        { ru: "How kind of you!", en: "Как мило с вашей стороны!" },
      ],
    },
  ],
  tasks: [
    choice("ento5-t1", "Как сказать «Какой красивый торт!»?", [
      ["What a beautiful cake!", true],
      ["How a beautiful cake!", false],
      ["What beautiful a cake!", false],
    ], { skill: "grammar" }),
    listen("ento5-t2", "Послушай. Что говорят?", "Happy birthday! This is for you!", [
      ["С днём рождения! Это тебе!", true],
      ["С Новым годом!", false],
      ["Выздоравливай!", false],
    ]),
    match("ento5-t3", "Соедини пары.", [
      ["Happy birthday!", "С днём рождения!"],
      ["Open it!", "Открой!"],
      ["lovely", "чудесный"],
      ["How kind!", "Как мило!"],
    ], { skill: "words" }),
    missing("ento5-t4", "Какой буквы не хватает? («день рождения»)", "birthd", "y", "a", ["a", "e", "i"]),
    speak("ento5-t5", "Happy birthday! This is for you.", "Thank you so much! What a lovely surprise!", "Огромное спасибо! Какой чудесный сюрприз!", { help: "Поблагодари вслух за подарок." }),
    choice("ento5-t6", "Как сказать «Это сюрприз!»?", [
      ["It's a surprise!", true],
      ["It's surprise!", false],
      ["Is a surprise!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sketchbook",
    itemName: "Альбом для рисования",
    itemNameRu: "Sketchbook",
    ru: "Hooray! A sketchbook!",
    en: "Ура! Альбом для рисования!",
    a11y: "Большой альбом для рисования и коробка акварели. На обложке Том нарисовал рыжего котёнка в фартуке.",
    image: p("sketchbook"),
    steps: ["Мурзик открывает альбом.", "На первой странице Том нарисовал его — в фартуке, за стойкой кафе!", "Внизу подпись: «Murzik's Café — one day!» — «Кафе Мурзика — когда-нибудь!»", "Мурзик сразу рисует первую картинку."],
    bridge: "А в кафе ждёт шоколадный торт со свечками!",
  },
};

const toronto6: Lesson = {
  id: "en-a1-toronto-6",
  level: "A1",
  cityId: "en-toronto",
  number: 6,
  title: "Make a wish! — Загадай желание!",
  minutes: 7,
  goals: ["Загадать желание и задуть свечи", "Пожелать чего-то: I wish you…", "Подписать открытку"],
  vocabNote: "Make a wish! — «Загадай желание!» Blow out the candles! — «Задуй свечи!» В открытке пишут: Best wishes! — «С наилучшими пожеланиями!»",
  vocab: [
    v("ento6-1", "Make a wish!", "Загадай желание!", "Мурзик зажмурился и сложил лапки над тортом.", "Послушать Make a wish", p("l6-1")),
    v("ento6-2", "Blow out the candles!", "Задуй свечи!", "Мурзик надувает щёки над семью свечками.", "Послушать Blow out the candles", p("l6-2")),
    v("ento6-3", "What's your wish?", "Какое у тебя желание?", "Бабушка Мэй с любопытством наклоняется к Мурзику.", "Послушать What's your wish", p("l6-3")),
    v("ento6-4", "It's a secret!", "Это секрет!", "Мурзик прижимает лапку к губам.", "Послушать It's a secret", p("l6-4")),
    v("ento6-5", "Have a very happy year!", "Счастливого тебе года!", "Бабушка Мэй поднимает чашку чая.", "Послушать Have a very happy year", p("l6-5")),
    v("ento6-6", "Best wishes!", "С наилучшими пожеланиями!", "Открытка с подписью и сердечком.", "Послушать Best wishes", p("l6-6")),
    v("ento6-7", "Cheers!", "Ура! / За нас!", "Все поднимают стаканы с лимонадом.", "Послушать Cheers", p("l6-7")),
  ],
  dialogue: {
    title: "Семь свечек",
    note: "Secret — «секрет».",
    lines: [
      line("lucy", "Here's the cake! Seven candles!", "Вот торт! Семь свечек!"),
      line("michael", "Make a wish, Murzik!", "Загадай желание, Мурзик!"),
      line("tom", "And blow out the candles!", "И задуй свечи!"),
      line("may", "What's your wish?", "Какое у тебя желание?"),
      line("murzik", "It's a secret!", "Это секрет!"),
      line("tom", "I know your wish… A café!", "А я знаю твоё желание… Кафе!"),
      line("may", "Have a very happy year, dear. Cheers!", "Счастливого тебе года, дорогой. За тебя!"),
    ],
    gist: choice("ento6-d1", "Что, по мнению Тома, загадал Мурзик?", [
      ["Кафе.", true],
      ["Новый альбом.", false],
      ["Ещё кусочек торта.", false],
    ]),
  },
  grammar: [
    {
      title: "Пожелания",
      paragraphs: [
        "I wish you + что: I wish you a happy birthday. I wish you good luck. В открытке: Best wishes, Love, With love — так подписываются.",
        "Make a wish — загадать желание. My wish is… — Моё желание…",
      ],
      examples: [
        { ru: "I wish you lots of happiness!", en: "Желаю тебе много счастья!" },
        { ru: "Happy birthday! Best wishes, Anna.", en: "С днём рождения! С наилучшими пожеланиями, Анна." },
      ],
    },
  ],
  tasks: [
    choice("ento6-t1", "Как пожелать удачи?", [
      ["I wish you good luck!", true],
      ["I wish to you luck good!", false],
      ["I'm wish you luck!", false],
    ], { skill: "grammar" }),
    listen("ento6-t2", "Послушай. Что говорят?", "Make a wish and blow out the candles!", [
      ["Загадай желание и задуй свечи!", true],
      ["Открой подарок!", false],
      ["Отрежь кусок торта!", false],
    ]),
    match("ento6-t3", "Соедини пары.", [
      ["wish", "желание"],
      ["candles", "свечи"],
      ["secret", "секрет"],
      ["Cheers!", "За нас!"],
    ], { skill: "words" }),
    spell("ento6-t4", "Собери из букв слово «свеча».", "candle"),
    speak("ento6-t5", "It's my birthday today!", "Happy birthday! I wish you a very happy birthday!", "С днём рождения! Желаю тебе счастливого дня рождения!", { help: "Поздравь вслух." }),
    choice("ento6-t6", "Как сказать «Какой чудесный сюрприз!»?", [
      ["What a lovely surprise!", true],
      ["How a lovely surprise!", false],
      ["What lovely surprise!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "seven-candle",
    itemName: "Свеча-цифра семь",
    itemNameRu: "Number candle",
    ru: "Hooray! A number seven candle!",
    en: "Ура! Свеча-семёрка!",
    a11y: "Маленькая голубая свеча в форме цифры семь стоит на кусочке шоколадного торта.",
    image: p("seven-candle"),
    steps: ["После торта бабушка Мэй вынимает свечку-семёрку.", "«Keep it. To remember!» — «Сохрани. На память!»", "Мурзик ставит её на полку.", "А рядом — рамка. Теперь в ней фото с праздника!"],
    bridge: "Вечером Майкл говорит: «Murzik, Mrs Hope's page is in our café. It's in the old recipe box».",
  },
};

const toronto7: Lesson = {
  id: "en-a1-toronto-7",
  level: "A1",
  cityId: "en-toronto",
  number: 7,
  title: "Goodbye, Toronto! — Пока, Торонто!",
  minutes: 8,
  goals: ["Рассказать о датах и планах", "Поздравить и пожелать", "Вспомнить все слова Торонто"],
  vocabNote: "Повторяем: месяцы и даты, on / in / at, going to, Happy birthday!, I wish you…",
  vocab: [
    v("ento7-1", "the old recipe box", "старая коробка с рецептами", "Деревянная коробка с карточками рецептов на полке кафе.", "Послушать the old recipe box", p("l7-1")),
    v("ento7-2", "the recipe for butter tarts", "рецепт масляных тарталеток", "Страница с рисунком маленьких тарталеток с карамелью.", "Послушать the recipe for butter tarts", p("l7-2")),
    v("ento7-3", "a tablecloth", "скатерть", "Белая скатерть с вышитыми красными кленовыми листьями.", "Послушать a tablecloth", p("l7-3")),
    v("ento7-4", "I made it many years ago.", "Я вышила её много лет назад.", "Бабушка Мэй гладит вышивку.", "Послушать I made it many years ago", p("l7-4")),
    v("ento7-5", "We're going to fly to Australia.", "Мы полетим в Австралию.", "Том показывает на глобусе другую сторону земли.", "Послушать We're going to fly to Australia", p("l7-5")),
    v("ento7-6", "It's autumn there now!", "Там сейчас осень!", "Половина глобуса — весна, другая половина — осень.", "Послушать It's autumn there now", p("l7-6")),
    v("ento7-7", "Have a wonderful trip!", "Чудесной поездки!", "Семья Чен машет у дверей кафе.", "Послушать Have a wonderful trip", p("l7-7")),
  ],
  dialogue: {
    title: "Двенадцатая страница",
    note: "Butter tarts — маленькие тарталетки с карамельной начинкой, любимый канадский десерт. Other side — «другая сторона».",
    lines: [
      line("michael", "Murzik, look in the old recipe box. Mrs Hope's page is there.", "Мурзик, загляни в старую коробку с рецептами. Там страница миссис Хоуп."),
      line("murzik", "Here it is! The recipe for butter tarts!", "Вот она! Рецепт масляных тарталеток!"),
      line("may", "And this tablecloth is for your café. I made it many years ago.", "А эта скатерть — для твоего кафе. Я вышила её много лет назад."),
      line("tom", "Thank you! The next page is in Sydney. We're going to fly to Australia!", "Спасибо! Следующая страница в Сиднее. Мы полетим в Австралию!"),
      line("lucy", "Australia! It's autumn there now!", "Австралия! Там сейчас осень!"),
      line("murzik", "Autumn in May? The other side of the world!", "Осень в мае? Другой конец света!"),
      line("michael", "Have a wonderful trip!", "Чудесной поездки!"),
    ],
    gist: choice("ento7-d1", "Куда летят Мурзик и Том?", [
      ["В Австралию, в Сидней.", true],
      ["В Лондон.", false],
      ["В Ванкувер.", false],
    ]),
  },
  grammar: [
    {
      title: "Даты и планы: всё вместе",
      paragraphs: [
        "Когда: in May, on the fifth of May, at six o'clock. Планы: We're going to have a party. I'm going to fly to Sydney.",
        "Праздник: Happy birthday! Make a wish! Have a very happy year! What a lovely surprise!",
      ],
      examples: [
        { ru: "My birthday is on the fifth of May. We're going to have a party.", en: "Мой день рождения пятого мая. Мы устроим праздник." },
        { ru: "I'm going to visit Australia in December.", en: "В декабре я поеду в Австралию." },
      ],
    },
  ],
  tasks: [
    listen("ento7-t1", "Аудиоэкзамен. Что рассказывает Люси?", "My birthday is on the tenth of June. I'm going to have a party in the café. I'm going to bake a big cake.", [
      ["День рождения 10 июня, праздник в кафе, она испечёт большой торт.", true],
      ["День рождения в мае, праздник дома, торт купят.", false],
      ["День рождения 10 января, праздника не будет.", false],
    ]),
    choice("ento7-t2", "Выбери правильное предложение.", [
      ["We're going to fly on Monday.", true],
      ["We going to fly on Monday.", false],
      ["We're going fly in Monday.", false],
    ], { skill: "grammar" }),
    match("ento7-t3", "Соедини пары.", [
      ["tablecloth", "скатерть"],
      ["years ago", "лет назад"],
      ["the other side", "другая сторона"],
      ["Have a wonderful trip!", "Чудесной поездки!"],
    ], { skill: "words" }),
    spell("ento7-t4", "Собери из букв слово «май».", "May", ["e"]),
    speak("ento7-t5", "What are you going to do next month?", "I'm going to visit my friends.", "Я поеду в гости к друзьям.", { help: "Расскажи вслух о планах на следующий месяц." }),
    script("ento7-t6", "Вспомни весь Торонто. Закончи разговоры.", [
      { speaker: "Бабушка Мэй", text: "When's your birthday?" },
      { speaker: "Ты", answer: "It's on the fifth of May.", options: ["It's on the fifth of May.", "It's in the fifth of May.", "It's on five May."] },
      { speaker: "Люси", text: "What are you going to do on your birthday?" },
      { speaker: "Ты", answer: "I'm going to have a party.", options: ["I'm going to have a party.", "I going to have a party.", "I'm go to have a party."] },
      { speaker: "Майкл", text: "Happy birthday! This is for you." },
      { speaker: "Ты", answer: "Thank you so much! What a lovely surprise!", options: ["Thank you so much! What a lovely surprise!", "You're welcome!", "Make a wish!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tablecloth",
    itemName: "Скатерть с кленовыми листьями",
    itemNameRu: "Tablecloth",
    ru: "Hooray! A tablecloth!",
    en: "Ура! Скатерть!",
    a11y: "Белая льняная скатерть с вышитыми по краю красными кленовыми листьями.",
    image: p("tablecloth"),
    steps: ["Бабушка Мэй аккуратно складывает скатерть.", "По краю вышиты красные кленовые листья.", "«For the first table in your café.» — «Для первого столика в твоём кафе».", "Мурзик кладёт её в чемодан рядом с пледом."],
    bridge: "Следующая страница — на другом конце света, в Сиднее.",
  },
};

const story: CityStory = {
  home: {
    name: "Квартира над семейным кафе",
    nameRu: "Murzik's flat in Toronto",
    image: p("home"),
    a11y: "Пустая светлая квартира над семейным кафе. В окне высокая башня и озеро. Посередине чемодан Мурзика.",
  },
  keepsakeId: "tablecloth",
  welcomeRu: "Hello, Toronto!",
  welcomeEn: "Привет, Торонто!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том в Торонто: высокая башня над озером, разноцветные дома, весенние цветы.",
  departureImage: p("departure"),
  departureA11y: "Семья Чен — Майкл, Люси и бабушка Мэй — машет на прощание у дверей кафе.",
  finale: [
    {
      image: p("page"),
      a11y: "Крупно: двенадцатая страница книги рецептов, рецепт масляных тарталеток. На полях записка от руки.",
      lines: [
        { en: "Мурзик вклеивает двенадцатую страницу. На полях — записка миссис Хоуп:" },
        { ru: "At my café, everyone got a birthday candle — even strangers.", en: "В моём кафе каждый получал свечку на день рождения — даже незнакомцев." },
        { en: "Мурзик смотрит на свою свечку-семёрку и думает: «Обязательно»." },
      ],
    },
    {
      image: p("tablecloth"),
      a11y: "Мурзик обходит свою квартиру над кафе, которую обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свою квартиру в Торонто. Том фотографирует её для журнала." },
        { en: "Для будущего кафе он берёт с собой скатерть бабушки Мэй." },
        { en: "Осталось всего две страницы!" },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "Toronto complete!", en: "Торонто пройден!" },
        { en: "7 / 7 уроков" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Семья Чен машет на прощание.",
      lines: [
        { ru: "Goodbye, Chen family!", en: "До свидания, семья Чен!" },
        { ru: "Next stop: Sydney!", en: "Следующая остановка: Сидней!" },
      ],
    },
    {
      image: img.flight,
      a11y: "Самолёт летит над огромным океаном на другую сторону земли.",
      lines: [{ ru: "Toronto → Sydney", en: "Торонто → Сидней" }],
    },
    {
      image: pic("en/sydney/arrival"),
      a11y: "Мурзик и Том в Сиднее: белое здание оперы, похожее на паруса, синяя гавань, большой мост.",
      lines: [
        { ru: "Hello, Sydney!", en: "Привет, Сидней!" },
        { ru: "We're on the other side of the world!", en: "Мы на другом конце света!" },
      ],
    },
  ],
};

export const enToronto = {
  id: "en-toronto",
  name: "Торонто",
  nameEn: "Toronto",
  lessons: [toronto1, toronto2, toronto3, toronto4, toronto5, toronto6, toronto7],
  story,
};
