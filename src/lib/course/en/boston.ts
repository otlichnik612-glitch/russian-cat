import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "../tr/make";

/* Бостон · «Погода и одежда» · погода, одежда, цвета, Present Continuous (I'm wearing, it's raining), покупка одежды, too big. */

const p = (name: string) => pic(`en/boston/${name}`);

const boston1: Lesson = {
  id: "en-a1-boston-1",
  level: "A1",
  cityId: "en-boston",
  number: 1,
  title: "It's raining! — Идёт дождь!",
  minutes: 7,
  goals: ["Спросить о погоде", "Сказать: солнечно, дождь, холодно, ветрено", "Сказать «сейчас идёт дождь»: it's raining"],
  vocabNote: "О погоде всегда говорят с it: It's cold. It's sunny. It's raining — «идёт дождь (прямо сейчас)».",
  vocab: [
    v("enbo1-1", "What's the weather like?", "Какая погода?", "Мурзик выглядывает в окно, прижав нос к стеклу.", "Послушать What's the weather like", p("l1-1")),
    v("enbo1-2", "It's raining.", "Идёт дождь.", "Капли дождя стекают по окну.", "Послушать It's raining", p("l1-2")),
    v("enbo1-3", "It's sunny.", "Солнечно.", "Яркое солнце над кирпичными домами.", "Послушать It's sunny", p("l1-3")),
    v("enbo1-4", "It's cold.", "Холодно.", "Мурзик дрожит, кутаясь в шарф.", "Послушать It's cold", p("l1-4")),
    v("enbo1-5", "It's windy.", "Ветрено.", "Ветер срывает с деревьев жёлтые листья.", "Послушать It's windy", p("l1-5")),
    v("enbo1-6", "It's cloudy.", "Облачно.", "Серые облака над гаванью.", "Послушать It's cloudy", p("l1-6")),
    v("enbo1-7", "It's warm today.", "Сегодня тепло.", "Люди сидят в парке на скамейках без курток.", "Послушать It's warm today", p("l1-7")),
  ],
  dialogue: {
    title: "Эмили",
    note: "Эмили — студентка, подруга Рози. Она работает в магазине одежды. Fall — «осень» в Америке (в Британии — autumn).",
    lines: [
      line("emily", "Hi! You're Murzik and Tom! I'm Emily. Welcome to Boston!", "Привет! Вы Мурзик и Том! Я Эмили. Добро пожаловать в Бостон!"),
      line("murzik", "Hello, Emily! What's the weather like in Boston?", "Привет, Эмили! Какая погода в Бостоне?"),
      line("emily", "Today it's raining and it's cold. It's fall!", "Сегодня дождь и холодно. Осень!"),
      line("tom", "Will it be sunny tomorrow?", "А завтра будет солнечно?"),
      line("emily", "Maybe! In Boston the weather changes every day.", "Может быть! В Бостоне погода меняется каждый день."),
      line("murzik", "Like in London!", "Как в Лондоне!"),
    ],
    gist: choice("enbo1-d1", "Какая сегодня погода в Бостоне?", [
      ["Дождь и холодно.", true],
      ["Солнечно и тепло.", false],
      ["Ветрено, но тепло.", false],
    ]),
  },
  grammar: [
    {
      title: "Погода: It's…",
      paragraphs: [
        "В английском у предложения всегда есть подлежащее. Поэтому даже о погоде говорят it: It's cold. — Холодно. It's sunny. — Солнечно.",
        "Что происходит прямо сейчас: It's raining. — Идёт дождь. It's snowing. — Идёт снег.",
      ],
      examples: [
        { ru: "It's hot and sunny.", en: "Жарко и солнечно." },
        { ru: "It's snowing!", en: "Идёт снег!" },
      ],
    },
  ],
  tasks: [
    choice("enbo1-t1", "Как сказать «Холодно»?", [
      ["It's cold.", true],
      ["Is cold.", false],
      ["Cold it.", false],
    ], { skill: "grammar" }),
    listen("enbo1-t2", "Послушай. Какая погода?", "It's windy and cloudy.", [
      ["Ветрено и облачно.", true],
      ["Солнечно и тепло.", false],
      ["Идёт снег.", false],
    ]),
    match("enbo1-t3", "Соедини пары.", [
      ["sunny", "солнечно"],
      ["windy", "ветрено"],
      ["cold", "холодно"],
      ["warm", "тепло"],
    ], { skill: "words" }),
    missing("enbo1-t4", "Какой буквы не хватает? («дождь»)", "ra", "n", "i", ["i", "e", "y"]),
    speak("enbo1-t5", "What's the weather like today?", "It's sunny and warm.", "Солнечно и тепло.", { help: "Расскажи вслух, какая сегодня погода." }),
    choice("enbo1-t6", "Как сказать «Он не любит хот-доги»?", [
      ["He doesn't like hot dogs.", true],
      ["He don't like hot dogs.", false],
      ["He not like hot dogs.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "umbrella",
    itemName: "Зонт-трость",
    itemNameRu: "Umbrella",
    ru: "Hooray! An umbrella!",
    en: "Ура! Зонт!",
    a11y: "Большой тёмно-зелёный зонт-трость с деревянной ручкой стоит у двери.",
    image: p("umbrella"),
    steps: ["Эмили показывает Мурзику комнату в старом кирпичном доме.", "У двери стоит большой зелёный зонт.", "«In Boston you need it every day!» — «В Бостоне он нужен каждый день!»", "Мурзик открывает его — он больше самого Мурзика!"],
    bridge: "Утром Эмили смотрит на Мурзика: «Murzik, what are you wearing? It's cold!»",
  },
};

const boston2: Lesson = {
  id: "en-a1-boston-2",
  level: "A1",
  cityId: "en-boston",
  number: 2,
  title: "What are you wearing? — Что на тебе надето?",
  minutes: 7,
  goals: ["Назвать одежду", "Сказать, что на тебе сейчас: I'm wearing", "Спросить: What are you wearing?"],
  vocabNote: "Что происходит сейчас — am / is / are + глагол с -ing: I'm wearing — на мне сейчас надето, she's wearing — на ней надето.",
  vocab: [
    v("enbo2-1", "I'm wearing a scarf.", "На мне шарф.", "Мурзик в своём рыжем вязаном шарфе.", "Послушать I'm wearing a scarf", p("l2-1")),
    v("enbo2-2", "a coat", "пальто", "Длинное шерстяное пальто на вешалке.", "Послушать a coat", p("l2-2")),
    v("enbo2-3", "a jacket", "куртка", "Тёплая куртка с капюшоном.", "Послушать a jacket", p("l2-3")),
    v("enbo2-4", "boots", "ботинки, сапоги", "Пара тёплых ботинок у двери.", "Послушать boots", p("l2-4")),
    v("enbo2-5", "a hat", "шапка, шляпа", "Вязаная шапка с помпоном.", "Послушать a hat", p("l2-5")),
    v("enbo2-6", "a T-shirt and jeans", "футболка и джинсы", "Эмили в футболке и джинсах.", "Послушать a T-shirt and jeans", p("l2-6")),
    v("enbo2-7", "Tom is wearing a green coat.", "Том в зелёном пальто.", "Том в своём длинном зелёном пальто.", "Послушать Tom is wearing a green coat", p("l2-7")),
  ],
  dialogue: {
    title: "Холодное утро",
    note: "Only — «только». Need — «нужно, нуждаться».",
    lines: [
      line("emily", "Murzik, what are you wearing? It's cold!", "Мурзик, что на тебе надето? Холодно же!"),
      line("murzik", "I'm wearing my scarf!", "На мне мой шарф!"),
      line("emily", "Only a scarf? You need a jacket and boots!", "Только шарф? Тебе нужны куртка и ботинки!"),
      line("tom", "Look at me. I'm wearing a coat, a hat and boots.", "Посмотри на меня. На мне пальто, шапка и ботинки."),
      line("murzik", "But I've got fur!", "Но у меня же есть шерсть!"),
      line("emily", "Ha-ha! OK. But I'm buying you a hat!", "Ха-ха! Ладно. Но шапку я тебе куплю!"),
    ],
    gist: choice("enbo2-d1", "Что надето на Мурзике?", [
      ["Только шарф.", true],
      ["Куртка и ботинки.", false],
      ["Пальто и шапка.", false],
    ]),
  },
  grammar: [
    {
      title: "Present Continuous: I'm wearing",
      paragraphs: [
        "То, что происходит прямо сейчас, — am / is / are + глагол с -ing: I'm wearing a coat. She's reading. It's raining.",
        "Вопрос: What are you wearing? What is she doing? Ответ: I'm wearing jeans. She's sleeping.",
      ],
      examples: [
        { ru: "Emily is wearing a red jacket.", en: "На Эмили красная куртка." },
        { ru: "What are you doing? — I'm reading.", en: "Что ты делаешь? — Читаю." },
      ],
    },
  ],
  tasks: [
    choice("enbo2-t1", "Как сказать «На ней пальто»?", [
      ["She's wearing a coat.", true],
      ["She wearing a coat.", false],
      ["She's wear a coat.", false],
    ], { skill: "grammar" }),
    listen("enbo2-t2", "Послушай. Что на нём?", "He's wearing jeans and a T-shirt.", [
      ["Джинсы и футболка.", true],
      ["Пальто и шапка.", false],
      ["Куртка и ботинки.", false],
    ]),
    match("enbo2-t3", "Соедини пары.", [
      ["coat", "пальто"],
      ["jacket", "куртка"],
      ["boots", "ботинки"],
      ["hat", "шапка"],
    ], { skill: "words" }),
    missing("enbo2-t4", "Какой буквы не хватает? («куртка»)", "jack", "t", "e", ["e", "a", "i"]),
    speak("enbo2-t5", "What are you wearing today?", "I'm wearing jeans and a jumper.", "На мне джинсы и свитер.", { help: "Скажи вслух, что на тебе сейчас надето." }),
    choice("enbo2-t6", "Как сказать «Идёт дождь»?", [
      ["It's raining.", true],
      ["It rains now.", false],
      ["Is rain.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cap",
    itemName: "Бейсболка",
    itemNameRu: "Baseball cap",
    ru: "Hooray! A baseball cap!",
    en: "Ура! Бейсболка!",
    a11y: "Маленькая синяя бейсболка с прорезями для кошачьих ушей висит на крючке.",
    image: p("cap"),
    steps: ["Эмили приносит Мурзику подарок.", "Это бейсболка — с дырками для ушей!", "«A Boston hat for a Boston cat!» — «Бостонская кепка для бостонского кота!»", "Мурзик носит её, не снимая."],
    bridge: "Эмили зовёт Мурзика к себе в магазин: «Come and help me today!»",
  },
};

const boston3: Lesson = {
  id: "en-a1-boston-3",
  level: "A1",
  cityId: "en-boston",
  number: 3,
  title: "Colours — Цвета",
  minutes: 7,
  goals: ["Назвать цвета", "Спросить: What colour is it?", "Описать одежду по цвету"],
  vocabNote: "Цвет стоит перед словом: a red jacket. Слово «цвет» пишут по-разному: colour в Британии, color в Америке.",
  vocab: [
    v("enbo3-1", "red and blue", "красный и синий", "Красная и синяя куртки рядом.", "Послушать red and blue", p("l3-1")),
    v("enbo3-2", "green and yellow", "зелёный и жёлтый", "Зелёная и жёлтая шапки.", "Послушать green and yellow", p("l3-2")),
    v("enbo3-3", "black and white", "чёрный и белый", "Чёрные и белые носки.", "Послушать black and white", p("l3-3")),
    v("enbo3-4", "brown and grey", "коричневый и серый", "Коричневые ботинки и серое пальто.", "Послушать brown and grey", p("l3-4")),
    v("enbo3-5", "pink and orange", "розовый и оранжевый", "Розовый и оранжевый шарфы.", "Послушать pink and orange", p("l3-5")),
    v("enbo3-6", "What colour is it?", "Какого это цвета?", "Эмили держит свитер и вопросительно смотрит.", "Послушать What colour is it", p("l3-6")),
    v("enbo3-7", "It's dark blue.", "Он тёмно-синий.", "Тёмно-синий свитер.", "Послушать It's dark blue", p("l3-7")),
  ],
  dialogue: {
    title: "В магазине одежды",
    note: "Sweater [свэ́тэ] — свитер (в Британии чаще jumper). Light blue — голубой, dark blue — тёмно-синий.",
    lines: [
      line("emily", "Murzik, can you help me? These sweaters go here. What colour is this one?", "Мурзик, поможешь? Свитера кладём сюда. Какого цвета этот?"),
      line("murzik", "It's dark blue.", "Тёмно-синий."),
      line("emily", "Good. And this one?", "Хорошо. А этот?"),
      line("murzik", "It's… orange! Like me!", "Он… оранжевый! Как я!"),
      line("tom", "And my coat is green. Green is my favourite colour.", "А моё пальто зелёное. Зелёный — мой любимый цвет."),
      line("emily", "My favourite colour is yellow. Like Boston in autumn!", "А мой любимый — жёлтый. Как Бостон осенью!"),
    ],
    gist: choice("enbo3-d1", "Какой любимый цвет Эмили?", [
      ["Жёлтый.", true],
      ["Зелёный.", false],
      ["Оранжевый.", false],
    ]),
  },
  grammar: [
    {
      title: "Цвета: a red jacket",
      paragraphs: [
        "Цвет — прилагательное, он стоит перед словом и не меняется: a red jacket, red boots.",
        "Вопрос: What colour is it? What colour are they? Ответ: It's red. They're black. Любимый цвет — favourite colour.",
      ],
      examples: [
        { ru: "I've got a black coat.", en: "У меня чёрное пальто." },
        { ru: "What colour are your eyes? — They're green.", en: "Какого цвета твои глаза? — Зелёные." },
      ],
    },
  ],
  tasks: [
    choice("enbo3-t1", "Как сказать «красные ботинки»?", [
      ["red boots", true],
      ["boots red", false],
      ["reds boots", false],
    ], { skill: "grammar" }),
    listen("enbo3-t2", "Послушай. Какого цвета шапка?", "My hat is pink.", [
      ["Розовая.", true],
      ["Красная.", false],
      ["Оранжевая.", false],
    ]),
    match("enbo3-t3", "Соедини пары.", [
      ["yellow", "жёлтый"],
      ["grey", "серый"],
      ["brown", "коричневый"],
      ["white", "белый"],
    ], { skill: "words" }),
    spell("enbo3-t4", "Собери из букв слово «зелёный».", "green"),
    speak("enbo3-t5", "What's your favourite colour?", "My favourite colour is blue.", "Мой любимый цвет — синий.", { help: "Назови вслух свой любимый цвет." }),
    choice("enbo3-t6", "Как сказать «На мне шарф»?", [
      ["I'm wearing a scarf.", true],
      ["I wearing a scarf.", false],
      ["I'm wear a scarf.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "wellies",
    itemName: "Резиновые сапоги",
    itemNameRu: "Rain boots",
    ru: "Hooray! Rain boots!",
    en: "Ура! Резиновые сапоги!",
    a11y: "Маленькие жёлтые резиновые сапожки стоят на коврике у двери.",
    image: p("wellies"),
    steps: ["Вечером в магазине Мурзик находит крошечные жёлтые сапожки.", "«They're your size!» — смеётся Эмили. «Как раз твой размер!»", "Она дарит их Мурзику.", "Теперь лужи не страшны!"],
    bridge: "Утром в магазин заходит покупательница — и Мурзик сам ей помогает.",
  },
};

const boston4: Lesson = {
  id: "en-a1-boston-4",
  level: "A1",
  cityId: "en-boston",
  number: 4,
  title: "I'm looking for a jacket — Я ищу куртку",
  minutes: 7,
  goals: ["Помочь покупателю: Can I help you?", "Сказать, что ищешь", "Спросить про размер и примерочную"],
  vocabNote: "I'm looking for… — «Я ищу…». Try on — «примерить». Fitting room — «примерочная».",
  vocab: [
    v("enbo4-1", "Can I help you?", "Вам помочь?", "Мурзик в бейсболке встречает покупателя у двери.", "Послушать Can I help you", p("l4-1")),
    v("enbo4-2", "I'm looking for a jacket.", "Я ищу куртку.", "Покупатель разглядывает куртки на вешалках.", "Послушать I'm looking for a jacket", p("l4-2")),
    v("enbo4-3", "What size?", "Какой размер?", "Мурзик держит две куртки — маленькую и большую.", "Послушать What size", p("l4-3")),
    v("enbo4-4", "Medium, please.", "Средний, пожалуйста.", "Ярлык с буквой M.", "Послушать Medium, please", p("l4-4")),
    v("enbo4-5", "Can I try it on?", "Можно примерить?", "Покупатель держит куртку перед зеркалом.", "Послушать Can I try it on", p("l4-5")),
    v("enbo4-6", "The fitting room is over there.", "Примерочная вон там.", "Мурзик показывает на занавеску примерочной.", "Послушать The fitting room is over there", p("l4-6")),
    v("enbo4-7", "Just looking, thanks.", "Я просто смотрю, спасибо.", "Женщина вежливо улыбается и рассматривает шарфы.", "Послушать Just looking, thanks", p("l4-7")),
  ],
  dialogue: {
    title: "Первый покупатель",
    note: "Small — S, medium — M, large — L. Размеры одежды так и пишут: S, M, L.",
    lines: [
      line("murzik", "Good morning! Can I help you?", "Доброе утро! Вам помочь?"),
      line("passerby", "Yes, please. I'm looking for a jacket. A warm jacket.", "Да, пожалуйста. Я ищу куртку. Тёплую куртку."),
      line("murzik", "What size?", "Какой размер?"),
      line("passerby", "Medium, please. Can I try it on?", "Средний, пожалуйста. Можно примерить?"),
      line("murzik", "Of course. The fitting room is over there.", "Конечно. Примерочная вон там."),
      line("emily", "Murzik, you're a great shop assistant!", "Мурзик, ты отличный продавец!"),
    ],
    gist: choice("enbo4-d1", "Что ищет покупательница?", [
      ["Тёплую куртку, средний размер.", true],
      ["Шапку и шарф.", false],
      ["Резиновые сапоги.", false],
    ]),
  },
  grammar: [
    {
      title: "Сейчас: I'm looking for",
      paragraphs: [
        "I'm looking for… — тоже Present Continuous: «я (сейчас) ищу». Look for — «искать».",
        "Вежливые просьбы в магазине: Can I try it on? Can I help you? Can I have…?",
      ],
      examples: [
        { ru: "I'm looking for a hat.", en: "Я ищу шапку." },
        { ru: "Can I try these boots on?", en: "Можно примерить эти ботинки?" },
      ],
    },
  ],
  tasks: [
    choice("enbo4-t1", "Как сказать «Я ищу пальто»?", [
      ["I'm looking for a coat.", true],
      ["I look a coat.", false],
      ["I'm looking a coat.", false],
    ], { skill: "grammar" }),
    listen("enbo4-t2", "Послушай. Какой размер?", "Large, please.", [
      ["Большой.", true],
      ["Средний.", false],
      ["Маленький.", false],
    ]),
    match("enbo4-t3", "Соедини пары.", [
      ["size", "размер"],
      ["try on", "примерить"],
      ["fitting room", "примерочная"],
      ["Just looking.", "Я просто смотрю."],
    ], { skill: "words" }),
    missing("enbo4-t4", "Какой буквы не хватает? («размер»)", "si", "e", "z", ["z", "s", "c"]),
    speak("enbo4-t5", "Can I help you?", "Yes, please. I'm looking for a scarf.", "Да, пожалуйста. Я ищу шарф.", { help: "Ответь продавцу вслух, что ты ищешь." }),
    choice("enbo4-t6", "Как спросить «Какого это цвета?»", [
      ["What colour is it?", true],
      ["What colour it is?", false],
      ["How colour is it?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "thermos",
    itemName: "Термос",
    itemNameRu: "Thermos",
    ru: "Hooray! A thermos!",
    en: "Ура! Термос!",
    a11y: "Красный металлический термос с чашкой-крышкой, из чашки идёт пар.",
    image: p("thermos"),
    steps: ["Покупательница покупает куртку — и довольна.", "На следующий день она приносит Мурзику термос.", "«Hot tea for a cold day. Thank you, little helper!» — «Горячий чай для холодного дня. Спасибо, маленький помощник!»", "Мурзик ставит термос на полку."],
    bridge: "Днём в магазин заходит Том: он хочет новую куртку, но всё не то…",
  },
};

const boston5: Lesson = {
  id: "en-a1-boston-5",
  level: "A1",
  cityId: "en-boston",
  number: 5,
  title: "It's too big — Слишком большая",
  minutes: 7,
  goals: ["Сказать, что вещь не подходит: too big, too small", "Спросить другой цвет или размер", "Сказать «беру!»"],
  vocabNote: "Too — «слишком»: too big — слишком большой. It fits — «подходит по размеру». I'll take it — «Я беру».",
  vocab: [
    v("enbo5-1", "It's too big.", "Она слишком большая.", "Том тонет в огромной куртке, рукава свисают.", "Послушать It's too big", p("l5-1")),
    v("enbo5-2", "It's too small.", "Она слишком маленькая.", "Том в крошечной куртке, она не застёгивается.", "Послушать It's too small", p("l5-2")),
    v("enbo5-3", "Have you got it in blue?", "У вас есть такая же синяя?", "Том держит зелёную куртку и показывает на синюю на полке.", "Послушать Have you got it in blue", p("l5-3")),
    v("enbo5-4", "Have you got a bigger size?", "Есть размер побольше?", "Эмили ищет на вешалке другой размер.", "Послушать Have you got a bigger size", p("l5-4")),
    v("enbo5-5", "It fits!", "Как раз!", "Том в куртке, которая сидит идеально.", "Послушать It fits", p("l5-5")),
    v("enbo5-6", "It looks great on you!", "Тебе очень идёт!", "Мурзик показывает Тому большой палец.", "Послушать It looks great on you", p("l5-6")),
    v("enbo5-7", "I'll take it.", "Беру.", "Том протягивает куртку к кассе.", "Послушать I'll take it", p("l5-7")),
  ],
  dialogue: {
    title: "Том выбирает куртку",
    note: "Bigger — «побольше», smaller — «поменьше».",
    lines: [
      line("tom", "Emily, this jacket is too small.", "Эмили, эта куртка слишком маленькая."),
      line("emily", "Try this one. It's large.", "Примерь вот эту. Это большой размер."),
      line("tom", "Now it's too big! Have you got a medium in blue?", "Теперь слишком большая! А есть средний размер синего цвета?"),
      line("emily", "Yes, we have. Here you are.", "Да, есть. Вот, пожалуйста."),
      line("tom", "It fits!", "Как раз!"),
      line("murzik", "It looks great on you, Tom!", "Тебе очень идёт, Том!"),
      line("tom", "Thanks! I'll take it.", "Спасибо! Беру."),
    ],
    gist: choice("enbo5-d1", "Какую куртку купил Том?", [
      ["Синюю, средний размер.", true],
      ["Зелёную, большой размер.", false],
      ["Синюю, маленький размер.", false],
    ]),
  },
  grammar: [
    {
      title: "Too и very",
      paragraphs: [
        "Very — «очень», и это может быть хорошо: It's very warm. Too — «слишком», и это уже плохо: It's too warm.",
        "Too big, too small, too long, too expensive — так говорят, когда вещь не подходит.",
      ],
      examples: [
        { ru: "These boots are too small.", en: "Эти ботинки слишком маленькие." },
        { ru: "It's very nice, but it's too expensive.", en: "Очень красиво, но слишком дорого." },
      ],
    },
  ],
  tasks: [
    choice("enbo5-t1", "Куртка не подходит, она огромная. Что сказать?", [
      ["It's too big.", true],
      ["It's very big, I'll take it.", false],
      ["It fits.", false],
    ], { skill: "grammar" }),
    listen("enbo5-t2", "Послушай. В чём проблема?", "These boots are too small.", [
      ["Ботинки слишком маленькие.", true],
      ["Ботинки слишком большие.", false],
      ["Ботинки слишком дорогие.", false],
    ]),
    match("enbo5-t3", "Соедини пары.", [
      ["too big", "слишком большой"],
      ["too small", "слишком маленький"],
      ["It fits!", "Как раз!"],
      ["I'll take it.", "Беру."],
    ], { skill: "words" }),
    spell("enbo5-t4", "Собери из букв слово «слишком».", "too", ["e"]),
    speak("enbo5-t5", "How does the jacket fit?", "It's too big. Have you got a smaller size?", "Слишком большая. Есть размер поменьше?", { help: "Скажи вслух, что вещь не подходит, и попроси другой размер." }),
    choice("enbo5-t6", "Как сказать «Можно примерить?»", [
      ["Can I try it on?", true],
      ["Can I try on it?", false],
      ["I try it?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "donuts",
    itemName: "Коробка пончиков",
    itemNameRu: "Box of donuts",
    ru: "Hooray! A box of donuts!",
    en: "Ура! Коробка пончиков!",
    a11y: "Открытая коробка с шестью пончиками в разноцветной глазури и посыпке.",
    image: p("donuts"),
    steps: ["Том в новой синей куртке очень доволен.", "Он покупает всем коробку пончиков.", "«For the best shop assistants!» — «Лучшим продавцам!»", "Мурзик выбирает розовый."],
    bridge: "В субботу Эмили обычно работает. Но сегодня она делает что-то другое…",
  },
};

const boston6: Lesson = {
  id: "en-a1-boston-6",
  level: "A1",
  cityId: "en-boston",
  number: 6,
  title: "Usually or now? — Обычно или сейчас?",
  minutes: 7,
  goals: ["Различать «обычно» и «сейчас»", "Сказать: I usually work, but today I'm studying", "Спросить: What are you doing?"],
  vocabNote: "Обычно, всегда, каждый день — простое время: I work. Прямо сейчас, сегодня — am / is / are + -ing: I'm working.",
  vocab: [
    v("enbo6-1", "Emily usually works on Saturday.", "Эмили обычно работает по субботам.", "Эмили за кассой магазина, на календаре суббота.", "Послушать Emily usually works on Saturday", p("l6-1")),
    v("enbo6-2", "Today she's studying.", "А сегодня она занимается.", "Эмили в библиотеке среди стопок книг.", "Послушать Today she's studying", p("l6-2")),
    v("enbo6-3", "What are you doing?", "Что ты делаешь?", "Мурзик заглядывает через плечо Эмили.", "Послушать What are you doing", p("l6-3")),
    v("enbo6-4", "I'm writing an essay.", "Я пишу сочинение.", "Эмили печатает на ноутбуке.", "Послушать I'm writing an essay", p("l6-4")),
    v("enbo6-5", "Tom is taking photos.", "Том фотографирует.", "Том с фотоаппаратом у старой гавани.", "Послушать Tom is taking photos", p("l6-5")),
    v("enbo6-6", "I'm not working today.", "Сегодня я не работаю.", "Мурзик в сапожках прыгает по лужам.", "Послушать I'm not working today", p("l6-6")),
    v("enbo6-7", "Are you having fun?", "Тебе весело?", "Эмили смеётся, глядя на мокрого Мурзика.", "Послушать Are you having fun", p("l6-7")),
  ],
  dialogue: {
    title: "Суббота",
    note: "Exam — «экзамен». Puddle — «лужа».",
    lines: [
      line("murzik", "Emily! You usually work on Saturday. What are you doing here?", "Эмили! Ты же обычно работаешь по субботам. Что ты здесь делаешь?"),
      line("emily", "I'm not working today. I've got an exam on Monday. I'm studying.", "Сегодня я не работаю. У меня в понедельник экзамен. Я занимаюсь."),
      line("murzik", "What are you writing?", "А что ты пишешь?"),
      line("emily", "I'm writing an essay. And what are you doing?", "Пишу сочинение. А ты что делаешь?"),
      line("murzik", "Tom is taking photos and I'm jumping in puddles!", "Том фотографирует, а я прыгаю по лужам!"),
      line("emily", "Ha-ha! Are you having fun?", "Ха-ха! Тебе весело?"),
      line("murzik", "Yes, I am!", "Да!"),
    ],
    gist: choice("enbo6-d1", "Почему Эмили сегодня не работает?", [
      ["У неё экзамен, она занимается.", true],
      ["Магазин закрыт.", false],
      ["Она заболела.", false],
    ]),
  },
  grammar: [
    {
      title: "I work или I'm working?",
      paragraphs: [
        "Простое время — для того, что бывает обычно: Emily works on Saturday. I drink tea every morning.",
        "Present Continuous — для того, что происходит сейчас: Today she's studying. Look, it's snowing! Слова-подсказки: usually, every day — простое; now, right now, look! — с -ing.",
      ],
      examples: [
        { ru: "I usually drink tea, but today I'm drinking coffee.", en: "Обычно я пью чай, но сегодня пью кофе." },
        { ru: "Tom works every day. Now he's sleeping.", en: "Том работает каждый день. А сейчас он спит." },
      ],
    },
  ],
  tasks: [
    choice("enbo6-t1", "Выбери правильно: «Смотри! Идёт снег!»", [
      ["Look! It's snowing!", true],
      ["Look! It snows!", false],
      ["Look! It snowing!", false],
    ], { skill: "grammar" }),
    listen("enbo6-t2", "Послушай. Что Том делает сейчас?", "Tom usually works in the morning, but now he's sleeping.", [
      ["Спит.", true],
      ["Работает.", false],
      ["Фотографирует.", false],
    ]),
    match("enbo6-t3", "Соедини пары.", [
      ["usually", "обычно"],
      ["now", "сейчас"],
      ["today", "сегодня"],
      ["have fun", "веселиться"],
    ], { skill: "words" }),
    missing("enbo6-t4", "Какой буквы не хватает? («обычно»)", "usu", "lly", "a", ["a", "e", "o"]),
    speak("enbo6-t5", "What are you doing now?", "I'm learning English!", "Я учу английский!", { help: "Скажи вслух, что ты делаешь прямо сейчас." }),
    choice("enbo6-t6", "Ботинки огромные. Что сказать?", [
      ["They're too big.", true],
      ["They fit.", false],
      ["They're very small.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "doormat",
    itemName: "Коврик у двери",
    itemNameRu: "Doormat",
    ru: "Hooray! A doormat!",
    en: "Ура! Коврик у двери!",
    a11y: "Плетёный коврик у двери с отпечатками мокрых кошачьих лапок.",
    image: p("doormat"),
    steps: ["Мурзик приходит домой мокрый до ушей.", "На полу — мокрые следы лапок.", "Эмили смеётся и приносит коврик для двери.", "«Wipe your paws, please!» — «Вытирай лапы, пожалуйста!»"],
    bridge: "Перед отъездом Эмили бежит за Мурзиком: «Wait! I've got something for you!»",
  },
};

const boston7: Lesson = {
  id: "en-a1-boston-7",
  level: "A1",
  cityId: "en-boston",
  number: 7,
  title: "Goodbye, Boston! — Пока, Бостон!",
  minutes: 8,
  goals: ["Описать погоду и одежду", "Купить одежду", "Вспомнить все слова Бостона"],
  vocabNote: "Повторяем: погода (it's raining), одежда и цвета, Present Continuous, too big.",
  vocab: [
    v("enbo7-1", "Wait a minute!", "Подожди минутку!", "Эмили бежит за Мурзиком по улице.", "Послушать Wait a minute", p("l7-1")),
    v("enbo7-2", "Boston cream pie", "бостонский кремовый торт", "Торт с кремом внутри и шоколадом сверху.", "Послушать Boston cream pie", p("l7-2")),
    v("enbo7-3", "My grandma was a cook.", "Моя бабушка была поваром.", "Старая фотография: женщина в колпаке у торта.", "Послушать My grandma was a cook", p("l7-3")),
    v("enbo7-4", "a coat stand", "вешалка для одежды", "Деревянная вешалка-стойка с крючками.", "Послушать a coat stand", p("l7-4")),
    v("enbo7-5", "Your guests need it.", "Она нужна твоим гостям.", "На вешалке висят мокрые пальто и зонты.", "Послушать Your guests need it", p("l7-5")),
    v("enbo7-6", "It's getting colder.", "Становится холоднее.", "Первые снежинки над гаванью.", "Послушать It's getting colder", p("l7-6")),
    v("enbo7-7", "Take your umbrella!", "Возьми зонт!", "Эмили протягивает Мурзику зелёный зонт.", "Послушать Take your umbrella", p("l7-7")),
  ],
  dialogue: {
    title: "Седьмая страница",
    note: "Chicago [шика́гоу] — большой город у озера на севере США.",
    lines: [
      line("emily", "Murzik! Wait a minute! This is for you.", "Мурзик! Подожди минутку! Это тебе."),
      line("murzik", "A page! Boston cream pie!", "Страница! Бостонский кремовый торт!"),
      line("emily", "My grandma was a cook. She was Mrs Hope's friend.", "Моя бабушка была поваром. Она дружила с миссис Хоуп."),
      line("emily", "And this coat stand is for your café. Your guests need it!", "А эта вешалка — для твоего кафе. Она нужна твоим гостям!"),
      line("tom", "Thank you, Emily! Where's the next page?", "Спасибо, Эмили! Где следующая страница?"),
      line("emily", "In Chicago. Ask Tony. He's a taxi driver. Take your umbrella!", "В Чикаго. Спросите Тони. Он таксист. Возьми зонт!"),
    ],
    gist: choice("enbo7-d1", "Кто такой Тони?", [
      ["Таксист в Чикаго.", true],
      ["Повар в Бостоне.", false],
      ["Двоюродный брат Эмили.", false],
    ]),
  },
  grammar: [
    {
      title: "Погода и одежда: всё вместе",
      paragraphs: [
        "Погода: It's cold. It's raining. Одежда сейчас: I'm wearing a red coat. Цвет: a green umbrella.",
        "В магазине: I'm looking for… What size? Can I try it on? It's too big. I'll take it.",
      ],
      examples: [
        { ru: "It's cold and I'm wearing a warm coat.", en: "Холодно, и на мне тёплое пальто." },
        { ru: "Have you got this jacket in black?", en: "Есть такая куртка чёрного цвета?" },
      ],
    },
  ],
  tasks: [
    listen("enbo7-t1", "Аудиоэкзамен. Что рассказывает Эмили?", "It's raining today. I'm wearing my yellow jacket and black boots. I'm not working, I'm studying.", [
      ["Идёт дождь, на ней жёлтая куртка и чёрные ботинки, она занимается.", true],
      ["Солнечно, на ней чёрная куртка, она работает.", false],
      ["Идёт снег, на ней жёлтые сапоги, она спит.", false],
    ]),
    choice("enbo7-t2", "Выбери правильное предложение.", [
      ["She's wearing a blue coat today.", true],
      ["She wearing a blue coat today.", false],
      ["She's wearing a coat blue today.", false],
    ], { skill: "grammar" }),
    match("enbo7-t3", "Соедини пары.", [
      ["Wait a minute!", "Подожди минутку!"],
      ["guests", "гости"],
      ["a coat stand", "вешалка"],
      ["colder", "холоднее"],
    ], { skill: "words" }),
    spell("enbo7-t4", "Собери из букв слово «зонт».", "umbrella"),
    speak("enbo7-t5", "What's the weather like and what are you wearing?", "It's cold. I'm wearing a coat and a hat.", "Холодно. На мне пальто и шапка.", { help: "Расскажи вслух о погоде и о своей одежде." }),
    script("enbo7-t6", "Вспомни весь Бостон. Закончи разговор в магазине.", [
      { speaker: "Продавец", text: "Can I help you?" },
      { speaker: "Ты", answer: "Yes, please. I'm looking for a jacket.", options: ["Yes, please. I'm looking for a jacket.", "Yes, please. I look a jacket.", "No, I'm wearing."] },
      { speaker: "Продавец", text: "What colour?" },
      { speaker: "Ты", answer: "Blue, please.", options: ["Blue, please.", "Medium, please.", "Too big, please."] },
      { speaker: "Продавец", text: "How does it fit?" },
      { speaker: "Ты", answer: "It fits! I'll take it.", options: ["It fits! I'll take it.", "It fits! It's too small.", "I'm looking."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "coat-stand",
    itemName: "Вешалка для одежды",
    itemNameRu: "Coat stand",
    ru: "Hooray! A coat stand!",
    en: "Ура! Вешалка!",
    a11y: "Высокая деревянная вешалка-стойка с изогнутыми крючками, на ней висят рыжий шарф Мурзика и бейсболка.",
    image: p("coat-stand"),
    steps: ["Эмили дарит Мурзику старую деревянную вешалку.", "«For wet coats and umbrellas!» — «Для мокрых пальто и зонтов!»", "Мурзик вешает на неё свой шарф и бейсболку.", "Теперь гостям будет куда повесить пальто."],
    bridge: "Следующая страница — в Чикаго, у таксиста Тони.",
  },
};

const story: CityStory = {
  home: {
    name: "Комната в старом кирпичном доме",
    nameRu: "Murzik's room in Boston",
    image: p("home"),
    a11y: "Пустая комната в старом кирпичном доме с камином и высоким окном. За окном красные и жёлтые деревья. Посередине чемодан Мурзика.",
  },
  keepsakeId: "coat-stand",
  welcomeRu: "Hello, Boston!",
  welcomeEn: "Привет, Бостон!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том в Бостоне: старые кирпичные дома, жёлтые и красные осенние листья, идёт дождь.",
  departureImage: p("departure"),
  departureA11y: "Эмили в жёлтой куртке машет на прощание у дверей магазина одежды.",
  finale: [
    {
      image: p("page"),
      a11y: "Крупно: седьмая страница книги рецептов, рецепт бостонского кремового торта. На полях записка от руки.",
      lines: [
        { en: "Мурзик вклеивает седьмую страницу. На полях — записка миссис Хоуп:" },
        { ru: "At my café, wet guests always got a warm towel.", en: "В моём кафе промокшие гости всегда получали тёплое полотенце." },
        { en: "Мурзик вспоминает бостонский дождь и кивает: правильно." },
      ],
    },
    {
      image: p("coat-stand"),
      a11y: "Мурзик обходит свою бостонскую комнату, которую обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свою комнату в Бостоне. Том фотографирует её для журнала." },
        { en: "Для будущего кафе он берёт с собой вешалку для пальто." },
        { en: "Половина пути позади: семь страниц из четырнадцати!" },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "Boston complete!", en: "Бостон пройден!" },
        { en: "7 / 7 уроков" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Эмили машет на прощание.",
      lines: [
        { ru: "Goodbye, Emily!", en: "Пока, Эмили!" },
        { ru: "Next stop: Chicago!", en: "Следующая остановка: Чикаго!" },
      ],
    },
    {
      image: p("train"),
      a11y: "Поезд едет на запад через леса и поля.",
      lines: [{ ru: "Boston → Chicago", en: "Бостон → Чикаго" }],
    },
    {
      image: pic("en/chicago/arrival"),
      a11y: "Мурзик и Том в Чикаго: высокие стеклянные дома у огромного синего озера, ветер развевает шарф Мурзика.",
      lines: [
        { ru: "Hello, Chicago!", en: "Привет, Чикаго!" },
        { ru: "It's so windy!", en: "Как ветрено!" },
      ],
    },
  ],
};

export const enBoston = {
  id: "en-boston",
  name: "Бостон",
  nameEn: "Boston",
  lessons: [boston1, boston2, boston3, boston4, boston5, boston6, boston7],
  story,
};
