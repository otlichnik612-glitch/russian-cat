import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "../tr/make";

/* Дублин · «Мой день» · время, распорядок дня, дни недели, Present Simple (I / you / we / they), вопросы Do you…? */

const p = (name: string) => pic(`en/dublin/${name}`);

const dublin1: Lesson = {
  id: "en-a1-dublin-1",
  level: "A1",
  cityId: "en-dublin",
  number: 1,
  title: "What time is it? — Который час?",
  minutes: 7,
  goals: ["Спросить, который час", "Назвать время: o'clock, half past", "Сказать quarter past и quarter to"],
  vocabNote: "O'clock — ровно: seven o'clock. Half past — половина: half past seven = 7:30. Quarter past — четверть после (7:15), quarter to — без четверти (7:45).",
  vocab: [
    v("endu1-1", "What time is it?", "Который час?", "Мурзик смотрит на большие часы над дверью кафе.", "Послушать What time is it", p("l1-1")),
    v("endu1-2", "It's seven o'clock.", "Семь часов.", "Часы: короткая стрелка на семи, длинная на двенадцати.", "Послушать It's seven o'clock", p("l1-2")),
    v("endu1-3", "It's half past eight.", "Половина девятого.", "Часы: длинная стрелка на шести, короткая между восемью и девятью.", "Послушать It's half past eight", p("l1-3")),
    v("endu1-4", "It's quarter past nine.", "Четверть десятого.", "Часы: длинная стрелка на трёх.", "Послушать It's quarter past nine", p("l1-4")),
    v("endu1-5", "It's quarter to ten.", "Без четверти десять.", "Часы: длинная стрелка на девяти.", "Послушать It's quarter to ten", p("l1-5")),
    v("endu1-6", "It's early.", "Ещё рано.", "За окном темно, Мурзик зевает.", "Послушать It's early", p("l1-6")),
    v("endu1-7", "We're late!", "Мы опаздываем!", "Том бежит по улице, на ходу надевая куртку.", "Послушать We're late", p("l1-7")),
  ],
  dialogue: {
    title: "Шон",
    note: "Шон — бариста и скрипач, внук подруги миссис Хоуп. В его кафе по вечерам играет живая музыка.",
    lines: [
      line("sean", "Good morning! You're Murzik! I'm Seán.", "Доброе утро! Ты Мурзик! Я Шон."),
      line("murzik", "Good morning! What time is it?", "Доброе утро! Который час?"),
      line("sean", "It's half past six.", "Половина седьмого."),
      line("murzik", "Half past six? It's early!", "Половина седьмого? Ещё рано!"),
      line("sean", "Not for a café! We open at seven o'clock.", "Только не для кафе! Мы открываемся в семь."),
      line("tom", "At seven? Quick, Murzik! Let's help!", "В семь? Быстрее, Мурзик! Давай помогать!"),
    ],
    gist: choice("endu1-d1", "Во сколько открывается кафе Шона?", [
      ["В семь.", true],
      ["В половине седьмого.", false],
      ["В девять.", false],
    ]),
  },
  grammar: [
    {
      title: "Время",
      paragraphs: [
        "Ровно — o'clock: It's five o'clock. Половина — half past: half past five = 5:30. Четверть — quarter: quarter past five = 5:15, quarter to six = 5:45.",
        "Можно и просто цифрами: It's five thirty (5:30), It's five fifteen (5:15). Так говорят всё чаще, особенно в Америке.",
      ],
      examples: [
        { ru: "It's ten o'clock.", en: "Десять часов." },
        { ru: "It's half past two.", en: "Половина третьего." },
      ],
    },
  ],
  tasks: [
    choice("endu1-t1", "Как сказать 4:30?", [
      ["It's half past four.", true],
      ["It's half past five.", false],
      ["It's half to four.", false],
    ], { skill: "grammar" }),
    listen("endu1-t2", "Послушай. Который час?", "It's quarter past eleven.", [
      ["11:15", true],
      ["10:45", false],
      ["11:45", false],
    ]),
    match("endu1-t3", "Соедини пары.", [
      ["o'clock", "ровно"],
      ["half past", "половина"],
      ["early", "рано"],
      ["late", "поздно"],
    ], { skill: "words" }),
    missing("endu1-t4", "Какой буквы не хватает? («четверть»)", "qu", "rter", "a", ["a", "o", "e"]),
    speak("endu1-t5", "What time is it?", "It's nine o'clock.", "Девять часов.", { help: "Назови вслух, который час." }),
    choice("endu1-t6", "Как сказать «У меня есть сестра»?", [
      ["I've got a sister.", true],
      ["I'm got a sister.", false],
      ["I have sister got.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "hourglass",
    itemName: "Песочные часы",
    itemNameRu: "Hourglass",
    ru: "Hooray! An hourglass!",
    en: "Ура! Песочные часы!",
    a11y: "Песочные часы в деревянной рамке, золотой песок сыплется вниз.",
    image: p("hourglass"),
    steps: ["Шон заваривает чай по песочным часам.", "«Three minutes. Perfect tea!» — «Три минуты. Идеальный чай!»", "У него есть ещё одни — для Мурзика.", "Мурзик ставит их на полку в своей комнате над кафе."],
    bridge: "Шон спрашивает: «Murzik, what time do you get up?»",
  },
};

const dublin2: Lesson = {
  id: "en-a1-dublin-2",
  level: "A1",
  cityId: "en-dublin",
  number: 2,
  title: "I get up at seven — Я встаю в семь",
  minutes: 7,
  goals: ["Рассказать о своём дне", "Сказать, во сколько: at seven", "Назвать завтрак, обед и ужин"],
  vocabNote: "Во сколько — at: at seven, at half past eight. Breakfast — завтрак, lunch — обед, dinner — ужин. «Есть завтрак» — have breakfast.",
  vocab: [
    v("endu2-1", "I get up at seven.", "Я встаю в семь.", "Мурзик потягивается в кровати, будильник показывает семь.", "Послушать I get up at seven", p("l2-1")),
    v("endu2-2", "I have breakfast.", "Я завтракаю.", "Мурзик ест тост с джемом и пьёт чай.", "Послушать I have breakfast", p("l2-2")),
    v("endu2-3", "I go to work.", "Я иду на работу.", "Шон с рюкзаком и футляром для скрипки идёт по улице.", "Послушать I go to work", p("l2-3")),
    v("endu2-4", "We have lunch at one.", "Мы обедаем в час.", "Шон и Мурзик едят суп за маленьким столиком.", "Послушать We have lunch at one", p("l2-4")),
    v("endu2-5", "I go home.", "Я иду домой.", "Вечер, Мурзик идёт по мосту к дому.", "Послушать I go home", p("l2-5")),
    v("endu2-6", "We have dinner at eight.", "Мы ужинаем в восемь.", "Шон, Том и Мурзик ужинают при свечах.", "Послушать We have dinner at eight", p("l2-6")),
    v("endu2-7", "I go to bed at ten.", "Я ложусь спать в десять.", "Мурзик в пижаме забирается под одеяло.", "Послушать I go to bed at ten", p("l2-7")),
  ],
  dialogue: {
    title: "Распорядок",
    note: "Start — «начинать». Finish — «заканчивать».",
    lines: [
      line("sean", "Murzik, what time do you get up?", "Мурзик, во сколько ты встаёшь?"),
      line("murzik", "I get up at eight. And you?", "Я встаю в восемь. А ты?"),
      line("sean", "I get up at six! I have breakfast and I go to work.", "Я встаю в шесть! Завтракаю и иду на работу."),
      line("tom", "What time do you finish?", "Во сколько ты заканчиваешь?"),
      line("sean", "I finish at five. We have dinner at seven and then — music!", "Заканчиваю в пять. В семь ужинаем, а потом — музыка!"),
      line("murzik", "And what time do you go to bed?", "А во сколько ложишься спать?"),
      line("sean", "Very late! At midnight.", "Очень поздно! В полночь."),
    ],
    gist: choice("endu2-d1", "Во сколько встаёт Шон?", [
      ["В шесть.", true],
      ["В восемь.", false],
      ["В полночь.", false],
    ]),
  },
  grammar: [
    {
      title: "Мой день: I get up, I go",
      paragraphs: [
        "О том, что ты делаешь каждый день, говорят в простом настоящем времени: I get up, I have breakfast, I go to work. С I, you, we, they глагол — в простой форме, без окончаний. С he и she добавляем -s: he works, she plays.",
        "Во сколько — at: at seven, at half past six. Вопрос: What time do you get up? — Во сколько ты встаёшь?",
      ],
      examples: [
        { ru: "I have lunch at one o'clock.", en: "Я обедаю в час." },
        { ru: "We go to bed at eleven.", en: "Мы ложимся спать в одиннадцать." },
      ],
    },
  ],
  tasks: [
    choice("endu2-t1", "Как сказать «Я встаю в семь»?", [
      ["I get up at seven.", true],
      ["I get up in seven.", false],
      ["I am get up at seven.", false],
    ], { skill: "grammar" }),
    listen("endu2-t2", "Послушай. Во сколько обед?", "We have lunch at half past twelve.", [
      ["В 12:30.", true],
      ["В 2:30.", false],
      ["В 12:00.", false],
    ]),
    match("endu2-t3", "Соедини пары.", [
      ["breakfast", "завтрак"],
      ["lunch", "обед"],
      ["dinner", "ужин"],
      ["go to bed", "ложиться спать"],
    ], { skill: "words" }),
    missing("endu2-t4", "Какой буквы не хватает? («завтрак»)", "br", "akfast", "e", ["e", "a", "i"]),
    speak("endu2-t5", "What time do you get up?", "I get up at seven o'clock.", "Я встаю в семь часов.", { help: "Ответь вслух, во сколько ты встаёшь." }),
    choice("endu2-t6", "Как сказать «Половина девятого»?", [
      ["It's half past eight.", true],
      ["It's half past nine.", false],
      ["It's half to eight.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bread-basket",
    itemName: "Корзинка для хлеба",
    itemNameRu: "Bread basket",
    ru: "Hooray! A bread basket!",
    en: "Ура! Корзинка для хлеба!",
    a11y: "Плетёная корзинка с льняной салфеткой, в ней ломтики тёмного ирландского хлеба.",
    image: p("bread-basket"),
    steps: ["Каждое утро Мурзик завтракает в кафе.", "Шон приносит хлеб в плетёной корзинке.", "«Keep it. You have breakfast here every day!» — «Оставь себе. Ты ведь завтракаешь каждый день!»", "Корзинка стоит на столе у окна."],
    bridge: "Мурзик спрашивает: «Seán, when is the music night?»",
  },
};

const dublin3: Lesson = {
  id: "en-a1-dublin-3",
  level: "A1",
  cityId: "en-dublin",
  number: 3,
  title: "Дни недели",
  minutes: 7,
  goals: ["Назвать дни недели", "Сказать «в понедельник»: on Monday", "Сказать «сегодня», «завтра», «в выходные»"],
  vocabNote: "Дни недели пишут с большой буквы: Monday, Tuesday. «В какой-то день» — on: on Friday. Выходные — the weekend, в выходные — at the weekend.",
  vocab: [
    v("endu3-1", "Monday, Tuesday, Wednesday", "понедельник, вторник, среда", "Три листка календаря подряд.", "Послушать Monday, Tuesday, Wednesday", p("l3-1")),
    v("endu3-2", "Thursday, Friday", "четверг, пятница", "На листке пятницы нарисована скрипка.", "Послушать Thursday, Friday", p("l3-2")),
    v("endu3-3", "Saturday, Sunday", "суббота, воскресенье", "На листках выходных нарисовано солнце.", "Послушать Saturday, Sunday", p("l3-3")),
    v("endu3-4", "on Friday", "в пятницу", "Календарь, пятница обведена красным.", "Послушать on Friday", p("l3-4")),
    v("endu3-5", "today", "сегодня", "Мурзик показывает на сегодняшний листок календаря.", "Послушать today", p("l3-5")),
    v("endu3-6", "tomorrow", "завтра", "Стрелка от сегодняшнего листка к следующему.", "Послушать tomorrow", p("l3-6")),
    v("endu3-7", "at the weekend", "в выходные", "Мурзик и Том гуляют у моря.", "Послушать at the weekend", p("l3-7")),
  ],
  dialogue: {
    title: "Когда музыка?",
    note: "Wednesday пишется длинно, а читается коротко: [уэ́нздэй]. Closed — «закрыто».",
    lines: [
      line("murzik", "Seán, when is the music night?", "Шон, когда музыкальный вечер?"),
      line("sean", "On Friday.", "В пятницу."),
      line("murzik", "What day is it today?", "Какой сегодня день?"),
      line("sean", "Today is Wednesday. So it's the day after tomorrow!", "Сегодня среда. Значит, послезавтра!"),
      line("tom", "And is the café open at the weekend?", "А кафе работает в выходные?"),
      line("sean", "On Saturday, yes. On Sunday, it's closed.", "В субботу да. В воскресенье закрыто."),
    ],
    gist: choice("endu3-d1", "Когда музыкальный вечер?", [
      ["В пятницу.", true],
      ["В среду.", false],
      ["В воскресенье.", false],
    ]),
  },
  grammar: [
    {
      title: "On Monday, at the weekend",
      paragraphs: [
        "С днями недели — on: on Monday, on Sunday. С временем — at: at seven. С выходными — at the weekend (в Америке — on the weekend).",
        "Today, tomorrow — без предлога: I work today. See you tomorrow!",
      ],
      examples: [
        { ru: "The café is closed on Sunday.", en: "В воскресенье кафе закрыто." },
        { ru: "We play music on Friday at eight.", en: "Мы играем по пятницам в восемь." },
      ],
    },
  ],
  tasks: [
    choice("endu3-t1", "Как сказать «в понедельник»?", [
      ["on Monday", true],
      ["in Monday", false],
      ["at Monday", false],
    ], { skill: "grammar" }),
    listen("endu3-t2", "Послушай. Какой день?", "Today is Thursday.", [
      ["Четверг.", true],
      ["Вторник.", false],
      ["Суббота.", false],
    ]),
    match("endu3-t3", "Соедини пары.", [
      ["Monday", "понедельник"],
      ["Wednesday", "среда"],
      ["Friday", "пятница"],
      ["Sunday", "воскресенье"],
    ], { skill: "words" }),
    missing("endu3-t4", "Какой буквы не хватает? («среда»)", "We", "nesday", "d", ["d", "t", "n"]),
    speak("endu3-t5", "What do you do at the weekend?", "At the weekend I go to the park.", "В выходные я хожу в парк.", { help: "Расскажи вслух, что ты делаешь в выходные." }),
    choice("endu3-t6", "Как сказать «Мы обедаем в час»?", [
      ["We have lunch at one.", true],
      ["We have lunch on one.", false],
      ["We are lunch at one.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "calendar",
    itemName: "Настенный календарь",
    itemNameRu: "Calendar",
    ru: "Hooray! A calendar!",
    en: "Ура! Календарь!",
    a11y: "Настенный календарь с фотографиями ирландских зелёных холмов. Пятница обведена красным.",
    image: p("calendar"),
    steps: ["Шон дарит Мурзику календарь с видами Ирландии.", "Мурзик обводит пятницу красным.", "«Music night!» — пишет он.", "Календарь висит над кроватью."],
    bridge: "Пока ждут пятницу, Шон рассказывает о себе.",
  },
};

const dublin4: Lesson = {
  id: "en-a1-dublin-4",
  level: "A1",
  cityId: "en-dublin",
  number: 4,
  title: "I live, I work — Я живу, я работаю",
  minutes: 7,
  goals: ["Сказать, где живёшь и работаешь", "Спросить: Do you…?", "Ответить: Yes, I do / No, I don't"],
  vocabNote: "Вопрос в простом настоящем строится с do: You live in Dublin. → Do you live in Dublin? Отрицание — don't: I don't live here.",
  vocab: [
    v("endu4-1", "I live in Dublin.", "Я живу в Дублине.", "Шон стоит на мосту над рекой.", "Послушать I live in Dublin", p("l4-1")),
    v("endu4-2", "I work in a café.", "Я работаю в кафе.", "Шон за стойкой варит кофе.", "Послушать I work in a café", p("l4-2")),
    v("endu4-3", "Do you live here?", "Ты живёшь здесь?", "Мурзик показывает на окна над кафе.", "Послушать Do you live here", p("l4-3")),
    v("endu4-4", "Yes, I do.", "Да.", "Шон кивает.", "Послушать Yes, I do", p("l4-4")),
    v("endu4-5", "No, I don't.", "Нет.", "Шон качает головой и улыбается.", "Послушать No, I don't", p("l4-5")),
    v("endu4-6", "I don't work on Sunday.", "Я не работаю в воскресенье.", "Шон в воскресенье играет на скрипке в парке.", "Послушать I don't work on Sunday", p("l4-6")),
    v("endu4-7", "We play music.", "Мы играем вместе.", "Шон со скрипкой и девушка с гитарой играют вместе.", "Послушать We play music", p("l4-7")),
  ],
  dialogue: {
    title: "О себе",
    note: "Near the sea — «у моря». Fiddle — «скрипка» (так её зовут в ирландской музыке).",
    lines: [
      line("murzik", "Seán, do you live here, above the café?", "Шон, ты живёшь здесь, над кафе?"),
      line("sean", "No, I don't. I live near the sea. But I work here six days a week.", "Нет. Я живу у моря. Но работаю здесь шесть дней в неделю."),
      line("tom", "Do you work on Sunday?", "А в воскресенье работаешь?"),
      line("sean", "No, I don't. On Sunday I play the fiddle in the park.", "Нет. В воскресенье я играю на скрипке в парке."),
      line("murzik", "Do you play music on Friday too?", "А в пятницу тоже играешь?"),
      line("sean", "Yes, I do! My friends and I play music here. We love it!", "Да! Мы с друзьями играем здесь музыку. Мы это обожаем!"),
    ],
    gist: choice("endu4-d1", "Где живёт Шон?", [
      ["У моря.", true],
      ["Над кафе.", false],
      ["В парке.", false],
    ]),
  },
  grammar: [
    {
      title: "Present Simple: вопрос и «не»",
      paragraphs: [
        "Утверждение: I live, you work, we play, they go. Вопрос — do в начале: Do you live here? Do they work on Sunday?",
        "Короткий ответ: Yes, I do. / No, I don't. Отрицание — don't перед глаголом: I don't work on Sunday. They don't live here.",
      ],
      examples: [
        { ru: "Do you like tea? — Yes, I do.", en: "Ты любишь чай? — Да." },
        { ru: "We don't work at the weekend.", en: "Мы не работаем в выходные." },
      ],
    },
  ],
  tasks: [
    choice("endu4-t1", "Как спросить «Ты работаешь здесь?»", [
      ["Do you work here?", true],
      ["Are you work here?", false],
      ["You work here do?", false],
    ], { skill: "grammar" }),
    listen("endu4-t2", "Послушай. Работает ли он в воскресенье?", "No, I don't work on Sunday.", [
      ["Нет, не работает.", true],
      ["Да, работает.", false],
      ["Работает только утром.", false],
    ]),
    match("endu4-t3", "Соедини пары.", [
      ["live", "жить"],
      ["work", "работать"],
      ["play", "играть"],
      ["Yes, I do.", "Да."],
    ], { skill: "words" }),
    spell("endu4-t4", "Собери из букв слово «жить».", "live"),
    speak("endu4-t5", "Do you live in a big city?", "Yes, I do. I live in a big city.", "Да. Я живу в большом городе.", { help: "Ответь вслух: Yes, I do или No, I don't — и назови свой город." }),
    choice("endu4-t6", "Как сказать «в пятницу»?", [
      ["on Friday", true],
      ["in Friday", false],
      ["at Friday", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "knitted-rug",
    itemName: "Вязаный коврик",
    itemNameRu: "Knitted rug",
    ru: "Hooray! A knitted rug!",
    en: "Ура! Вязаный коврик!",
    a11y: "Толстый вязаный коврик из белой и серой шерсти с узором-косичками лежит у кровати.",
    image: p("rug"),
    steps: ["Мама Шона вяжет коврики из шерсти ирландских овец.", "Шон приносит один Мурзику.", "«From my mum. She knits every evening.» — «От мамы. Она вяжет каждый вечер».", "Коврик тёплый и мягкий."],
    bridge: "Мурзик хочет узнать, что Шон делает каждое утро до работы.",
  },
};

const dublin5: Lesson = {
  id: "en-a1-dublin-5",
  level: "A1",
  cityId: "en-dublin",
  number: 5,
  title: "Every morning — Каждое утро",
  minutes: 7,
  goals: ["Сказать «каждый день», «утром», «вечером»", "Задать вопрос What do you do…?", "Рассказать о привычках"],
  vocabNote: "In the morning — утром, in the afternoon — днём, in the evening — вечером, at night — ночью. Every day — каждый день.",
  vocab: [
    v("endu5-1", "every morning", "каждое утро", "Шон бежит вдоль моря на рассвете.", "Послушать every morning", p("l5-1")),
    v("endu5-2", "in the afternoon", "днём", "Солнечный день, люди пьют кофе на улице.", "Послушать in the afternoon", p("l5-2")),
    v("endu5-3", "in the evening", "вечером", "Вечерний Дублин, горят фонари.", "Послушать in the evening", p("l5-3")),
    v("endu5-4", "What do you do in the morning?", "Что ты делаешь утром?", "Мурзик с любопытством смотрит на Шона.", "Послушать What do you do in the morning", p("l5-4")),
    v("endu5-5", "I go for a run.", "Я бегаю.", "Шон в кроссовках бежит по набережной.", "Послушать I go for a run", p("l5-5")),
    v("endu5-6", "I read the news.", "Я читаю новости.", "Том читает новости в телефоне за чашкой кофе.", "Послушать I read the news", p("l5-6")),
    v("endu5-7", "I drink coffee every day.", "Я пью кофе каждый день.", "Шон с большой чашкой кофе.", "Послушать I drink coffee every day", p("l5-7")),
  ],
  dialogue: {
    title: "Утро у моря",
    note: "Sleep — «спать». Lazy — «ленивый».",
    lines: [
      line("murzik", "Seán, what do you do in the morning?", "Шон, что ты делаешь утром?"),
      line("sean", "Every morning I go for a run by the sea. Then I drink coffee.", "Каждое утро бегаю у моря. Потом пью кофе."),
      line("murzik", "Every morning? Wow! Tom, what do you do in the morning?", "Каждое утро? Ого! Том, а ты что делаешь утром?"),
      line("tom", "I drink tea and I read the news.", "Пью чай и читаю новости."),
      line("sean", "And you, Murzik?", "А ты, Мурзик?"),
      line("murzik", "In the morning I sleep! I'm a cat!", "Утром я сплю! Я же кот!"),
    ],
    gist: choice("endu5-d1", "Что Шон делает каждое утро?", [
      ["Бегает у моря.", true],
      ["Читает новости.", false],
      ["Спит.", false],
    ]),
  },
  grammar: [
    {
      title: "Когда: in the morning, every day",
      paragraphs: [
        "Части дня — in the: in the morning, in the afternoon, in the evening. Но ночью — at night.",
        "Every — «каждый»: every day, every morning, every Friday. Такие слова обычно ставят в начало или в конец фразы.",
      ],
      examples: [
        { ru: "I drink tea every morning.", en: "Я пью чай каждое утро." },
        { ru: "In the evening we play music.", en: "Вечером мы играем." },
      ],
    },
  ],
  tasks: [
    choice("endu5-t1", "Как сказать «вечером»?", [
      ["in the evening", true],
      ["at the evening", false],
      ["on evening", false],
    ], { skill: "grammar" }),
    listen("endu5-t2", "Послушай. Что он делает вечером?", "In the evening I read a book.", [
      ["Читает книгу.", true],
      ["Бегает.", false],
      ["Пьёт кофе.", false],
    ]),
    match("endu5-t3", "Соедини пары.", [
      ["in the morning", "утром"],
      ["in the afternoon", "днём"],
      ["in the evening", "вечером"],
      ["at night", "ночью"],
    ], { skill: "words" }),
    missing("endu5-t4", "Какой буквы не хватает? («каждый»)", "ev", "ry", "e", ["e", "a", "i"]),
    speak("endu5-t5", "What do you do in the morning?", "In the morning I drink coffee and go to work.", "Утром я пью кофе и иду на работу.", { help: "Расскажи вслух, что ты делаешь утром." }),
    choice("endu5-t6", "Как ответить «Нет» на вопрос Do you work on Sunday?", [
      ["No, I don't.", true],
      ["No, I'm not.", false],
      ["No, I isn't.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "radio",
    itemName: "Старое радио",
    itemNameRu: "Old radio",
    ru: "Hooray! An old radio!",
    en: "Ура! Старое радио!",
    a11y: "Старое деревянное радио с круглыми ручками стоит на тумбочке.",
    image: p("radio"),
    steps: ["Том находит на рынке старое радио.", "Каждое утро оно играет ирландскую музыку.", "«Now you wake up to music!» — «Теперь ты просыпаешься под музыку!»", "Мурзик пританцовывает у окна."],
    bridge: "Наконец пятница! Вечером в кафе — музыка.",
  },
};

const dublin6: Lesson = {
  id: "en-a1-dublin-6",
  level: "A1",
  cityId: "en-dublin",
  number: 6,
  title: "Music night — Музыкальный вечер",
  minutes: 7,
  goals: ["Пригласить: Come in! Sit down!", "Спросить, кто на чём играет", "Сказать, кто поёт и танцует: sing, dance"],
  vocabNote: "Play the guitar, play the fiddle — играть на гитаре, на скрипке (с the). Sing — петь, dance — танцевать.",
  vocab: [
    v("endu6-1", "Come in!", "Заходите!", "Шон открывает дверь, внутри полно людей и музыки.", "Послушать Come in", p("l6-1")),
    v("endu6-2", "Sit down, please.", "Садитесь, пожалуйста.", "Шон показывает на свободный стул у окна.", "Послушать Sit down, please", p("l6-2")),
    v("endu6-3", "I play the guitar.", "Я играю на гитаре.", "Девушка с гитарой улыбается.", "Послушать I play the guitar", p("l6-3")),
    v("endu6-4", "Do you sing?", "Ты поёшь?", "Шон протягивает Мурзику микрофон.", "Послушать Do you sing", p("l6-4")),
    v("endu6-5", "We start at eight.", "Мы начинаем в восемь.", "Часы показывают восемь, музыканты берут инструменты.", "Послушать We start at eight", p("l6-5")),
    v("endu6-6", "Let's dance!", "Давайте танцевать!", "Люди танцуют между столиками.", "Послушать Let's dance", p("l6-6")),
    v("endu6-7", "What a great night!", "Какой чудесный вечер!", "Мурзик сияет, сидя на стойке с маленьким бубном.", "Послушать What a great night", p("l6-7")),
  ],
  dialogue: {
    title: "Пятница",
    note: "Drum — «барабан». Brilliant! — «Великолепно!», так часто говорят в Ирландии и Британии.",
    lines: [
      line("sean", "Come in, come in! Sit down, please. We start at eight.", "Заходите, заходите! Садитесь, пожалуйста. Начинаем в восемь."),
      line("murzik", "Seán, do you sing?", "Шон, ты поёшь?"),
      line("sean", "No, I don't. I play the fiddle. My friend Niamh plays the guitar.", "Нет. Я играю на скрипке. Моя подруга Нив играет на гитаре."),
      line("sean", "Murzik, do you play music?", "Мурзик, а ты играешь на чём-нибудь?"),
      line("murzik", "Not really… but I can play the drum!", "Не очень… но умею играть на барабане!"),
      line("tom", "Brilliant! Let's dance!", "Великолепно! Давайте танцевать!"),
    ],
    gist: choice("endu6-d1", "На чём играет Шон?", [
      ["На скрипке.", true],
      ["На гитаре.", false],
      ["На барабане.", false],
    ]),
  },
  grammar: [
    {
      title: "Повелительное: Come in! Sit down!",
      paragraphs: [
        "Чтобы пригласить или попросить, берут глагол в простой форме: Come in! Sit down! Listen! С please — вежливее: Sit down, please.",
        "Let's — «давай(те)»: Let's dance! Let's go! Let's sing!",
      ],
      examples: [
        { ru: "Come in, please!", en: "Заходите, пожалуйста!" },
        { ru: "Let's play music!", en: "Давайте играть музыку!" },
      ],
    },
  ],
  tasks: [
    choice("endu6-t1", "Как вежливо пригласить сесть?", [
      ["Sit down, please.", true],
      ["You sit down.", false],
      ["Sitting down, please.", false],
    ], { skill: "grammar" }),
    listen("endu6-t2", "Послушай. Во сколько начало?", "We start at eight.", [
      ["В восемь.", true],
      ["В девять.", false],
      ["В пять.", false],
    ]),
    match("endu6-t3", "Соедини пары.", [
      ["sing", "петь"],
      ["dance", "танцевать"],
      ["the guitar", "гитара"],
      ["Come in!", "Заходите!"],
    ], { skill: "words" }),
    spell("endu6-t4", "Собери из букв слово «петь».", "sing"),
    speak("endu6-t5", "Do you play music?", "Yes, I do. I play the guitar.", "Да. Я играю на гитаре.", { help: "Ответь вслух, играешь ли ты на чём-нибудь." }),
    choice("endu6-t6", "Как сказать «каждое утро»?", [
      ["every morning", true],
      ["all morning", false],
      ["in every morning", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fiddle",
    itemName: "Маленькая скрипка",
    itemNameRu: "Little fiddle",
    ru: "Hooray! A little fiddle!",
    en: "Ура! Маленькая скрипка!",
    a11y: "Маленькая игрушечная скрипка со смычком висит на стене на гвоздике.",
    image: p("fiddle"),
    steps: ["После концерта Шон достаёт маленькую детскую скрипку.", "«This was my first fiddle.» — «Это была моя первая скрипка».", "Он дарит её Мурзику.", "Мурзик пробует сыграть: скрип-скрип! Все смеются."],
    bridge: "Завтра Шон обещает отдать Мурзику что-то очень важное.",
  },
};

const dublin7: Lesson = {
  id: "en-a1-dublin-7",
  level: "A1",
  cityId: "en-dublin",
  number: 7,
  title: "Goodbye, Dublin! — Пока, Дублин!",
  minutes: 8,
  goals: ["Рассказать о своём дне от утра до вечера", "Спросить о чужом дне", "Вспомнить все слова Дублина"],
  vocabNote: "Повторяем: время, дни недели, I get up / I work / I go, Do you…? — Yes, I do / No, I don't.",
  vocab: [
    v("endu7-1", "This is for you.", "Это тебе.", "Шон протягивает Мурзику сложенную страницу.", "Послушать This is for you", p("l7-1")),
    v("endu7-2", "soda bread", "содовый хлеб", "Круглая буханка с крестом сверху.", "Послушать soda bread", p("l7-2")),
    v("endu7-3", "My gran knows Mrs Hope.", "Моя бабушка знает миссис Хоуп.", "Старая фотография: две девушки на ступеньках кафе.", "Послушать My gran knows Mrs Hope", p("l7-3")),
    v("endu7-4", "clay mugs", "глиняные кружки", "Четыре глиняные кружки разного цвета.", "Послушать clay mugs", p("l7-4")),
    v("endu7-5", "We're flying to New York.", "Мы летим в Нью-Йорк.", "Том показывает два билета на самолёт.", "Послушать We're flying to New York", p("l7-5")),
    v("endu7-6", "Safe travels!", "Счастливо долететь!", "Шон машет у дверей кафе.", "Послушать Safe travels", p("l7-6")),
    v("endu7-7", "I'll miss Dublin.", "Я буду скучать по Дублину.", "Мурзик грустно смотрит на мост над рекой.", "Послушать I'll miss Dublin", p("l7-7")),
  ],
  dialogue: {
    title: "Пятая страница",
    note: "Across the ocean — «через океан». America — Америка.",
    lines: [
      line("sean", "Murzik, this is for you. It's from Mrs Hope's book.", "Мурзик, это тебе. Это из книги миссис Хоуп."),
      line("murzik", "A page! The recipe for soda bread!", "Страница! Рецепт содового хлеба!"),
      line("sean", "And these clay mugs are for your café.", "А эти глиняные кружки — для твоего кафе."),
      line("tom", "Thank you, Seán! Where is the next page?", "Спасибо, Шон! А где следующая страница?"),
      line("sean", "Across the ocean! In New York. My cousin Marcus has got a diner there.", "За океаном! В Нью-Йорке. У моего двоюродного брата Маркуса там закусочная."),
      line("murzik", "New York! I'll miss Dublin…", "Нью-Йорк! Я буду скучать по Дублину…"),
      line("sean", "Come back on a Friday! Safe travels!", "Приезжай как-нибудь в пятницу! Счастливо долететь!"),
    ],
    gist: choice("endu7-d1", "Где следующая страница?", [
      ["В Нью-Йорке, у Маркуса.", true],
      ["В Лондоне, у миссис Хоуп.", false],
      ["В Эдинбурге.", false],
    ]),
  },
  grammar: [
    {
      title: "Мой день: всё вместе",
      paragraphs: [
        "Распорядок: I get up at seven. I have breakfast. I go to work at half past eight. On Sunday I don't work.",
        "Вопросы: What time do you get up? What do you do in the evening? Do you work on Saturday? — Yes, I do. / No, I don't.",
      ],
      examples: [
        { ru: "I get up at six and I go for a run.", en: "Я встаю в шесть и бегаю." },
        { ru: "Do you play music on Friday? — Yes, I do.", en: "Ты играешь по пятницам? — Да." },
      ],
    },
  ],
  tasks: [
    listen("endu7-t1", "Аудиоэкзамен. Что рассказывает Шон?", "I get up at six. I go for a run. I work from seven to five. On Friday I play the fiddle.", [
      ["Встаёт в шесть, бегает, работает с семи до пяти, по пятницам играет на скрипке.", true],
      ["Встаёт в семь, работает с шести до пяти, по воскресеньям поёт.", false],
      ["Встаёт в пять, не работает, по пятницам танцует.", false],
    ]),
    choice("endu7-t2", "Выбери правильное предложение.", [
      ["I don't work on Sunday.", true],
      ["I not work on Sunday.", false],
      ["I don't work in Sunday.", false],
    ], { skill: "grammar" }),
    match("endu7-t3", "Соедини пары.", [
      ["Safe travels!", "Счастливо долететь!"],
      ["mugs", "кружки"],
      ["I'll miss…", "Я буду скучать по…"],
      ["fly", "лететь"],
    ], { skill: "words" }),
    spell("endu7-t4", "Собери из букв слово «хлеб».", "bread"),
    speak("endu7-t5", "Tell me about your day.", "I get up at seven. I go to work at eight. In the evening I read.", "Я встаю в семь. В восемь иду на работу. Вечером читаю.", { help: "Расскажи вслух о своём дне." }),
    script("endu7-t6", "Вспомни весь Дублин. Закончи разговоры.", [
      { speaker: "Шон", text: "What time is it?" },
      { speaker: "Ты", answer: "It's half past seven.", options: ["It's half past seven.", "It's seven and half.", "It's half past at seven."] },
      { speaker: "Шон", text: "What time do you get up?" },
      { speaker: "Ты", answer: "I get up at seven.", options: ["I get up at seven.", "I get up on seven.", "I am get up at seven."] },
      { speaker: "Шон", text: "Do you work on Sunday?" },
      { speaker: "Ты", answer: "No, I don't.", options: ["No, I don't.", "No, I'm not.", "No, I not."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "mugs",
    itemName: "Глиняные кружки",
    itemNameRu: "Clay mugs",
    ru: "Hooray! Clay mugs!",
    en: "Ура! Глиняные кружки!",
    a11y: "Четыре глиняные кружки ручной работы — зелёная, синяя, кремовая и коричневая.",
    image: p("mugs"),
    steps: ["Шон заворачивает четыре кружки в газету.", "Их сделала его бабушка.", "«For coffee, for tea, for your guests!» — «Для кофе, для чая, для твоих гостей!»", "Мурзик бережно кладёт их в чемодан."],
    bridge: "Следующая страница — за океаном, в Нью-Йорке.",
  },
};

const story: CityStory = {
  home: {
    name: "Комната над кафе Шона",
    nameRu: "Murzik's room in Dublin",
    image: p("home"),
    a11y: "Маленькая пустая комната над кафе. Снизу слышна музыка, в окне видна река и мост. Посередине чемодан Мурзика.",
  },
  keepsakeId: "mugs",
  welcomeRu: "Hello, Dublin!",
  welcomeEn: "Привет, Дублин!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том в Дублине: разноцветные двери домов, мост над рекой, где-то играет скрипка.",
  departureImage: p("departure"),
  departureA11y: "Шон со скрипкой машет на прощание у дверей кафе.",
  finale: [
    {
      image: p("page"),
      a11y: "Крупно: пятая страница книги рецептов, рецепт содового хлеба. На полях записка от руки.",
      lines: [
        { en: "Мурзик вклеивает пятую страницу. На полях — записка миссис Хоуп:" },
        { ru: "At my café, there was music on Fridays.", en: "В моём кафе по пятницам была музыка." },
        { en: "Мурзик вспоминает пятницу у Шона и улыбается." },
      ],
    },
    {
      image: p("mugs"),
      a11y: "Мурзик обходит свою комнату над кафе, которую обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свою комнату в Дублине. Том фотографирует её для журнала." },
        { en: "Для будущего кафе он берёт с собой глиняные кружки." },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "Dublin complete!", en: "Дублин пройден!" },
        { en: "7 / 7 уроков" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Шон машет на прощание.",
      lines: [
        { ru: "Goodbye, Seán!", en: "Пока, Шон!" },
        { ru: "Next stop: New York!", en: "Следующая остановка: Нью-Йорк!" },
      ],
    },
    {
      image: img.flight,
      a11y: "Самолёт летит над океаном на запад, к Америке.",
      lines: [{ ru: "Dublin → New York", en: "Дублин → Нью-Йорк" }],
    },
    {
      image: pic("en/newyork/arrival"),
      a11y: "Мурзик и Том в Нью-Йорке: огромные дома до неба, жёлтые такси, шум улиц.",
      lines: [
        { ru: "Hello, New York!", en: "Привет, Нью-Йорк!" },
        { ru: "Everything is so big!", en: "Тут всё такое огромное!" },
      ],
    },
  ],
};

export const enDublin = {
  id: "en-dublin",
  name: "Дублин",
  nameEn: "Dublin",
  lessons: [dublin1, dublin2, dublin3, dublin4, dublin5, dublin6, dublin7],
  story,
};
