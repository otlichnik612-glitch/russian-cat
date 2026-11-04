import { pic } from "../art";
import { read } from "../make";
import type { CityStory, Lesson } from "../types";
import { choice, fill, letter, line, listen, match, script, speak, tf, v } from "../tr/make";

/*
 * Сент-Айвс · «Погода и пляж» · A2, уроки 1–7.
 * Фургон «Hope on Wheels» стоит у маленькой гавани в Корнуолле. Керра — спасательница на пляже и
 * инструктор по сёрфингу; её дедушка Джаго — старый рыбак, который всегда знает, какая будет погода,
 * и печёт лучшие корнуольские пирожки. На четвёртый день приходит шторм, и фургон стоит под дождём.
 * Грамматика: will для прогнозов и решений (It'll be sunny. I'll help you.), might — «может быть»,
 * I think / I don't think … will, probably / definitely.
 */

const p = (name: string) => pic(`en/stives/${name}`);

const stives1: Lesson = {
  id: "en-a2-stives-1",
  level: "A2",
  cityId: "en-stives",
  number: 1,
  title: "What's the weather like? — Какая погода?",
  minutes: 8,
  goals: ["Спросить о погоде", "Понять прогноз", "Will для прогноза: It'll be sunny"],
  vocabNote: "Англичане говорят о погоде постоянно — это лучший способ начать разговор с незнакомым человеком.",
  vocab: [
    v("ensi1-1", "What will it be like tomorrow?", "Какая погода будет завтра?", "Мурзик выглядывает из окошка фургона и смотрит на небо.", "Послушать What will it be like tomorrow", p("l1-1")),
    v("ensi1-2", "the weather forecast", "прогноз погоды", "Маленькое радио на полке фургона, из него звучит прогноз.", "Послушать the weather forecast", p("l1-2")),
    v("ensi1-3", "It'll be sunny.", "Будет солнечно.", "Яркое солнце над гаванью, лодки блестят.", "Послушать It'll be sunny", p("l1-3")),
    v("ensi1-4", "cloudy", "облачно", "Серые облака закрыли солнце над морем.", "Послушать cloudy", p("l1-4")),
    v("ensi1-5", "windy", "ветрено", "Ветер раздувает шарф Мурзика и флажки над фургоном.", "Послушать windy", p("l1-5")),
    v("ensi1-6", "a shower", "короткий дождь, ливень", "Короткий дождик из одной тучки, а вокруг солнце.", "Послушать a shower", p("l1-6")),
    v("ensi1-7", "twenty degrees", "двадцать градусов", "Термометр на стенке фургона показывает 20°.", "Послушать twenty degrees", p("l1-7")),
    v("ensi1-8", "Lovely day, isn't it?", "Чудесный день, правда?", "Старый рыбак в кепке улыбается и кивает на небо.", "Послушать Lovely day, isn't it", p("l1-8")),
  ],
  letters: [
    letter("It'll = [итл]", "It will в речи сливается в короткое [итл]: It'll be sunny — [итл би: сани].", "It'll be sunny.", "Будет солнечно."),
    letter("weather = [уэзэ]", "Th здесь звонкое, кончик языка между зубами. Weather (погода) и whether (ли) звучат одинаково.", "the weather", "погода"),
  ],
  dialogue: {
    title: "Утро в гавани",
    note: "Isn't it? в конце фразы — как русское «правда?». Так англичане начинают разговор.",
    lines: [
      line("jago", "Morning! Lovely day, isn't it?", "Доброе утро! Чудесный день, правда?"),
      line("murzik", "Yes! What will it be like tomorrow?", "Да! А какая погода будет завтра?"),
      line("jago", "The forecast says it'll be sunny in the morning.", "По прогнозу утром будет солнечно."),
      line("tom", "Great! How warm will it be?", "Отлично! А насколько тепло?"),
      line("jago", "About twenty degrees. But it'll be cloudy and windy in the afternoon.", "Около двадцати градусов. Но днём будет облачно и ветрено."),
      line("murzik", "Will it rain?", "А дождь будет?"),
      line("jago", "Maybe a shower. This is Cornwall!", "Может, короткий дождик. Это же Корнуолл!"),
    ],
    gist: choice("ensi1-d1", "Какая погода будет завтра утром?", [
      ["Солнечно.", true],
      ["Облачно и ветрено.", false],
      ["Сильный дождь.", false],
    ]),
  },
  grammar: [
    {
      title: "Will для прогноза",
      paragraphs: [
        "Когда говорим, какая будет погода (или что вообще случится), используем will + глагол: It will be sunny. В речи — сокращённо: It'll be sunny.",
        "Вопрос: Will it rain? Отрицание: It won't rain (won't = will not).",
      ],
      examples: [
        { ru: "It'll be cold tomorrow.", en: "Завтра будет холодно." },
        { ru: "Will it be windy? — No, it won't.", en: "Будет ветрено? — Нет." },
      ],
    },
  ],
  tasks: [
    listen("ensi1-t1", "Послушай прогноз. Какая погода будет днём?", "But it'll be cloudy and windy in the afternoon.", [
      ["Облачно и ветрено.", true],
      ["Солнечно и тепло.", false],
      ["Снег.", false],
    ]),
    choice("ensi1-t2", "Как сказать «Завтра будет солнечно»?", [
      ["It'll be sunny tomorrow.", true],
      ["It's be sunny tomorrow.", false],
      ["It will sunny tomorrow.", false],
    ], { skill: "grammar" }),
    fill("ensi1-t3", "Выбери правильное слово: «Дождя не будет».", "It", "rain.", "won't", ["won't", "isn't", "doesn't will"], { skill: "grammar" }),
    read("ensi1-t4", "Прочитай прогноз на доске в гавани. Когда может пойти дождь?", "ST IVES — TOMORROW\nMorning: sunny, 18°\nAfternoon: cloudy, showers\nEvening: windy", [
      ["Днём.", true],
      ["Утром.", false],
      ["Вечером.", false],
    ]),
    match("ensi1-t5", "Соедини пары.", [
      ["cloudy", "облачно"],
      ["windy", "ветрено"],
      ["a shower", "короткий дождь"],
      ["the weather forecast", "прогноз погоды"],
    ], { skill: "words" }),
    tf("ensi1-t6", "Lovely day, isn't it? — это способ начать разговор.", true, "words"),
    speak("ensi1-t7", "What's the weather like today?", "It's sunny and warm, about twenty degrees. But it'll be windy in the evening.", "Солнечно и тепло, около двадцати градусов. Но вечером будет ветрено.", {
      help: "Расскажи вслух, какая сегодня погода и какая будет вечером.",
    }),
  ],
  reward: {
    itemId: "old-radio",
    itemName: "Старое радио",
    itemNameRu: "Old radio",
    ru: "Our own weather station!",
    en: "Наша метеостанция!",
    a11y: "Маленькое старое радио с круглой ручкой стоит на полке фургона, рядом ракушка.",
    image: p("old-radio"),
    steps: ["Джаго дарит Мурзику своё старое радио.", "«Every morning — the shipping forecast», — говорит он. «Каждое утро — прогноз для моряков».", "Мурзик ставит его на полку у окошка.", "Теперь фургон знает погоду раньше всех."],
    bridge: "Прогноз не обманул: утро солнечное! Керра, внучка Джаго и спасательница с пляжа, зовёт к морю.",
  },
};

const stives2: Lesson = {
  id: "en-a2-stives-2",
  level: "A2",
  cityId: "en-stives",
  number: 2,
  title: "A day at the beach — День на пляже",
  minutes: 8,
  goals: ["Сказать, что взять с собой", "Предупредить: Don't forget…", "Might — «может быть»"],
  vocabNote: "Might — «может быть, возможно». You might need a jumper — «Тебе, может быть, понадобится свитер».",
  vocab: [
    v("ensi2-1", "sun cream", "солнцезащитный крем", "Тюбик крема, Мурзик мажет нос.", "Послушать sun cream", p("l2-1")),
    v("ensi2-2", "a towel", "полотенце", "Полосатое полотенце на песке.", "Послушать a towel", p("l2-2")),
    v("ensi2-3", "Don't forget your hat!", "Не забудь шляпу!", "Керра протягивает Мурзику панаму.", "Послушать Don't forget your hat", p("l2-3")),
    v("ensi2-4", "You might need a jumper.", "Может, тебе понадобится свитер.", "Свитер в рюкзаке, вдали облака.", "Послушать You might need a jumper", p("l2-4")),
    v("ensi2-5", "the tide", "прилив и отлив", "Море отошло далеко, на мокром песке лодки.", "Послушать the tide", p("l2-5")),
    v("ensi2-6", "the lifeguard", "спасатель", "Керра в красно-жёлтой форме сидит на высоком стуле с биноклем.", "Послушать the lifeguard", p("l2-6")),
    v("ensi2-7", "Swim between the flags.", "Плавайте между флагами.", "Два красно-жёлтых флага на пляже, люди плавают между ними.", "Послушать Swim between the flags", p("l2-7")),
    v("ensi2-8", "It might be cold.", "Может быть холодно.", "Мурзик трогает воду лапой и вздрагивает.", "Послушать It might be cold", p("l2-8")),
  ],
  letters: [
    letter("might = [майт]", "Gh не читается: might [майт], night [найт], light [лайт].", "It might be cold.", "Может быть холодно."),
  ],
  dialogue: {
    title: "На пляже Портминстер",
    note: "Flags — флажки. На британских пляжах спасатели ставят красно-жёлтые флаги: плавать можно только между ними.",
    lines: [
      line("kerra", "Hi! I'm Kerra, the lifeguard. Have you got sun cream?", "Привет! Я Керра, спасательница. У вас есть солнцезащитный крем?"),
      line("murzik", "Yes, and a towel. Can we swim now?", "Да, и полотенце. Можно сейчас купаться?"),
      line("kerra", "Yes, but swim between the flags. And the water might be cold!", "Да, но плавайте между флагами. И вода, может быть, холодная!"),
      line("tom", "How cold?", "Насколько холодная?"),
      line("kerra", "About fifteen degrees. Don't forget: the tide comes in at four.", "Около пятнадцати градусов. Не забудьте: прилив в четыре."),
      line("murzik", "Fifteen?! I might just sit on my towel.", "Пятнадцать?! Я, может, просто посижу на полотенце."),
    ],
    gist: choice("ensi2-d1", "Где можно плавать?", [
      ["Между флагами.", true],
      ["Где угодно.", false],
      ["Только после четырёх.", false],
    ]),
  },
  grammar: [
    {
      title: "Might — «может быть»",
      paragraphs: [
        "Will — мы уверены: It'll be sunny. Might — не уверены, может быть: It might rain.",
        "После might глагол без to: You might need a jumper. Отрицание: It might not be warm.",
      ],
      examples: [
        { ru: "Take an umbrella. It might rain.", en: "Возьми зонт. Может пойти дождь." },
        { ru: "We might go surfing tomorrow.", en: "Может быть, завтра пойдём на сёрфинг." },
      ],
    },
  ],
  tasks: [
    listen("ensi2-t1", "Послушай Керру. Во сколько прилив?", "Don't forget: the tide comes in at four.", [
      ["В четыре.", true],
      ["В пять.", false],
      ["В два.", false],
    ]),
    choice("ensi2-t2", "Ты не уверен(а), что пойдёт дождь. Как сказать?", [
      ["It might rain.", true],
      ["It might to rain.", false],
      ["It mights rain.", false],
    ], { skill: "grammar" }),
    fill("ensi2-t3", "Выбери правильное слово.", "Don't forget your", "! It's very sunny.", "sun cream", ["sun cream", "jumper", "umbrella"], { skill: "words" }),
    read("ensi2-t4", "Прочитай табличку на пляже. Что нельзя делать?", "PORTHMINSTER BEACH\nLifeguards: 10 am – 6 pm\nSwim between the red and yellow flags.\nNo dogs on the beach in summer.", [
      ["Приходить с собаками летом.", true],
      ["Плавать между флагами.", false],
      ["Купаться в десять утра.", false],
    ]),
    match("ensi2-t5", "Соедини пары.", [
      ["a towel", "полотенце"],
      ["the lifeguard", "спасатель"],
      ["the tide", "прилив и отлив"],
      ["sun cream", "солнцезащитный крем"],
    ], { skill: "words" }),
    script("ensi2-t6", "Друг собирается на пляж. Помоги.", [
      { speaker: "Друг", text: "I'm going to the beach. What do I need?" },
      { speaker: "Ты", answer: "A towel and sun cream. Don't forget your hat!", options: ["A towel and sun cream. Don't forget your hat!", "Swim between the tide.", "It'll be twenty jumpers."] },
      { speaker: "Друг", text: "It's warm. Do I need a jumper?" },
      { speaker: "Ты", answer: "Take one. It might be cold in the evening.", options: ["Take one. It might be cold in the evening.", "Take one. It might to be cold.", "No, it'll snow."] },
    ], { skill: "speaking" }),
    speak("ensi2-t7", "What do you take to the beach?", "I always take a towel and sun cream. I might take a jumper too.", "Я всегда беру полотенце и крем от солнца. Может, ещё возьму свитер.", {
      help: "Расскажи вслух, что ты берёшь на пляж.",
    }),
  ],
  reward: {
    itemId: "windbreak",
    itemName: "Полосатый ветрозащитный экран",
    itemNameRu: "Striped windbreak",
    ru: "No more wind in our soup!",
    en: "Больше никакого ветра в супе!",
    a11y: "Красно-белый полосатый тканевый экран на деревянных колышках стоит у столиков фургона и закрывает их от ветра.",
    image: p("windbreak"),
    steps: ["На пляже у всех стоят полосатые экраны от ветра.", "Керра дарит фургону запасной.", "Мурзик ставит его у столиков.", "Теперь салфетки не улетают в море."],
    bridge: "Керра ещё и учит сёрфингу. «Tomorrow I'll teach you to surf!» — обещает она. Том уже боится.",
  },
};

const stives3: Lesson = {
  id: "en-a2-stives-3",
  level: "A2",
  cityId: "en-stives",
  number: 3,
  title: "Surf school — Школа сёрфинга",
  minutes: 8,
  goals: ["Понимать указания инструктора", "Подбодрить: You'll be fine!", "Will для решений и обещаний: I'll help you"],
  vocabNote: "I'll… часто значит решение прямо сейчас: «Я помогу!», «Я возьму эту!».",
  vocab: [
    v("ensi3-1", "a surfboard", "доска для сёрфинга", "Длинная жёлто-синяя доска на песке.", "Послушать a surfboard", p("l3-1")),
    v("ensi3-2", "a wetsuit", "гидрокостюм", "Мурзик в чёрном гидрокостюме, который ему чуть велик.", "Послушать a wetsuit", p("l3-2")),
    v("ensi3-3", "a wave", "волна", "Большая белая волна у берега.", "Послушать a wave", p("l3-3")),
    v("ensi3-4", "Stand up slowly!", "Вставай медленно!", "Керра показывает на песке, как вставать на доску.", "Послушать Stand up slowly", p("l3-4")),
    v("ensi3-5", "I fell off!", "Я упал(а)!", "Мурзик плюхается в воду, доска улетает.", "Послушать I fell off", p("l3-5")),
    v("ensi3-6", "Try again!", "Попробуй ещё раз!", "Керра машет рукой из воды.", "Послушать Try again", p("l3-6")),
    v("ensi3-7", "I'll help you.", "Я тебе помогу.", "Керра держит доску, пока Том забирается на неё.", "Послушать I'll help you", p("l3-7")),
    v("ensi3-8", "You'll be fine!", "Всё у тебя получится!", "Керра поднимает большой палец.", "Послушать You'll be fine", p("l3-8")),
  ],
  letters: [
    letter("wave = [уэйв]", "W — губы трубочкой, а не русское [в]: wave [уэйв], wetsuit [уэтсу:т].", "a wave", "волна"),
    letter("I'll = [айл]", "I will сокращается до [айл]. Не путай с aisle [айл] — проход, и isle [айл] — остров.", "I'll help you.", "Я помогу."),
  ],
  dialogue: {
    title: "Первый урок",
    note: "Fall off — упасть (с доски, с велосипеда). Fell — прошедшее время от fall: I fell off! Everyone falls off — все падают.",
    lines: [
      line("kerra", "First, put on your wetsuit. Then take a surfboard.", "Сначала надень гидрокостюм. Потом возьми доску."),
      line("tom", "I'm scared. The waves are big!", "Мне страшно. Волны большие!"),
      line("kerra", "Don't worry, you'll be fine! I'll help you.", "Не волнуйся, всё получится! Я помогу."),
      line("kerra", "Here's a wave. Stand up slowly!", "Вот волна. Вставай медленно!"),
      line("murzik", "Oh no! I fell off!", "Ой, нет! Я упал!"),
      line("kerra", "Everyone falls off. Try again!", "Все падают. Попробуй ещё раз!"),
      line("murzik", "OK, I'll try one more time… I'm standing! I'm surfing!", "Ладно, попробую ещё раз… Я стою! Я катаюсь!"),
    ],
    gist: choice("ensi3-d1", "Что случилось с Мурзиком в конце?", [
      ["Он встал на доску.", true],
      ["Он ушёл с пляжа.", false],
      ["Он сломал доску.", false],
    ]),
  },
  grammar: [
    {
      title: "Will: решение и обещание",
      paragraphs: [
        "Решили прямо сейчас — I'll: The phone's ringing. — I'll answer it! («Я отвечу!»).",
        "Обещаем или подбадриваем — тоже will: I'll help you. You'll be fine. I won't be late.",
      ],
      examples: [
        { ru: "I'm cold. — I'll get you a towel.", en: "Мне холодно. — Сейчас принесу полотенце." },
        { ru: "Don't worry. I won't tell anyone.", en: "Не волнуйся. Я никому не скажу." },
      ],
    },
  ],
  tasks: [
    listen("ensi3-t1", "Послушай. Почему Тому страшно?", "I'm scared. The waves are big!", [
      ["Волны большие.", true],
      ["Вода холодная.", false],
      ["У него нет доски.", false],
    ]),
    choice("ensi3-t2", "Другу тяжело нести доску. Что ты скажешь?", [
      ["I'll help you!", true],
      ["I help you yesterday!", false],
      ["I'm help you!", false],
    ], { skill: "grammar" }),
    fill("ensi3-t3", "Выбери правильное слово: «Не волнуйся, всё у тебя получится!»", "Don't worry, you", "be fine!", "will", ["will", "are", "do"], { skill: "grammar" }),
    read("ensi3-t4", "Прочитай объявление. Сколько стоит урок с доской и гидрокостюмом?", "KERRA'S SURF SCHOOL\nLessons every day, 10 am and 2 pm\n2 hours — £40\nSurfboard and wetsuit included!", [
      ["40 фунтов: доска и костюм уже включены.", true],
      ["40 фунтов плюс доска.", false],
      ["Урок бесплатный.", false],
    ]),
    match("ensi3-t5", "Соедини пары.", [
      ["a wave", "волна"],
      ["a wetsuit", "гидрокостюм"],
      ["Try again!", "Попробуй ещё раз!"],
      ["I fell off!", "Я упал(а)!"],
    ], { skill: "words" }),
    tf("ensi3-t6", "You'll be fine! значит «Ты будешь оштрафован(а)!».", false, "words"),
    speak("ensi3-t7", "I'm scared. I can't do it!", "Don't worry, you'll be fine! I'll help you.", "Не волнуйся, всё получится! Я тебе помогу.", {
      help: "Подбодри друга вслух и пообещай помочь.",
    }),
  ],
  reward: {
    itemId: "shell-chime",
    itemName: "Музыка ветра из ракушек",
    itemNameRu: "Shell wind chime",
    ru: "Listen — the sea is singing!",
    en: "Слушай — море поёт!",
    a11y: "Над окошком фургона висят на нитках белые и розовые ракушки, они тихо звенят на ветру.",
    image: p("shell-chime"),
    steps: ["После урока Мурзик собирает ракушки на берегу.", "Керра показывает, как сделать из них музыку ветра.", "Они вешают её над окошком фургона.", "Теперь каждый ветерок звенит."],
    bridge: "Вечером старое радио Джаго в фургоне говорит тревожные слова: «Storm warning». Шторм идёт к Корнуоллу.",
  },
};

const stives4: Lesson = {
  id: "en-a2-stives-4",
  level: "A2",
  cityId: "en-stives",
  number: 4,
  title: "Storm warning — Штормовое предупреждение",
  minutes: 8,
  goals: ["Понять предупреждение", "Сказать, что ты думаешь: I think it will…", "I don't think it will…"],
  vocabNote: "Обычно говорят не «I think it won't…», а I don't think it will… — «Не думаю, что…».",
  vocab: [
    v("ensi4-1", "a storm", "шторм, буря", "Тёмное небо, огромные волны бьют о стену гавани.", "Послушать a storm", p("l4-1")),
    v("ensi4-2", "a warning", "предупреждение", "Жёлтый треугольник со знаком «!» на экране телефона.", "Послушать a warning", p("l4-2")),
    v("ensi4-3", "Stay inside!", "Оставайтесь дома!", "Джаго закрывает дверь и окна.", "Послушать Stay inside", p("l4-3")),
    v("ensi4-4", "It might be dangerous.", "Это может быть опасно.", "Волна перехлёстывает через набережную.", "Послушать It might be dangerous", p("l4-4")),
    v("ensi4-5", "The road will be closed.", "Дорогу закроют.", "Знак «ROAD CLOSED» перед дорогой вдоль моря.", "Послушать The road will be closed", p("l4-5")),
    v("ensi4-6", "a power cut", "отключение электричества", "В окнах домов гаснет свет, Мурзик держит фонарик.", "Послушать a power cut", p("l4-6")),
    v("ensi4-7", "I think it'll stop on Thursday.", "Думаю, он кончится в четверг.", "Джаго смотрит на небо и задумчиво кивает.", "Послушать I think it'll stop on Thursday", p("l4-7")),
    v("ensi4-8", "I don't think so.", "Не думаю.", "Керра качает головой.", "Послушать I don't think so", p("l4-8")),
  ],
  letters: [
    letter("dangerous = [дэйнджэрэс]", "Ударение на первый слог: [дэйнджэрэс]. Не [дангерос]!", "It might be dangerous.", "Это может быть опасно."),
  ],
  dialogue: {
    title: "Шторм",
    note: "Move the van — переставить фургон. Up the hill — вверх, на холм.",
    lines: [
      line("kerra", "There's a storm warning. Stay inside tonight!", "Штормовое предупреждение. Сегодня вечером сидите дома!"),
      line("tom", "But we live in the van! Is the van safe here?", "Но мы живём в фургоне! Фургону здесь не опасно?"),
      line("jago", "Not by the sea. It might be dangerous. Move it up the hill.", "У моря — нет. Это может быть опасно. Переставьте его на холм."),
      line("murzik", "Will the storm stop tomorrow?", "Шторм завтра кончится?"),
      line("jago", "I don't think so. I think it'll stop on Thursday.", "Не думаю. Думаю, он кончится в четверг."),
      line("kerra", "And there might be a power cut. Have you got a torch?", "И может отключиться электричество. У вас есть фонарик?"),
    ],
    gist: choice("ensi4-d1", "Что Джаго советует сделать с фургоном?", [
      ["Переставить его на холм.", true],
      ["Оставить у моря.", false],
      ["Продать.", false],
    ]),
  },
  grammar: [
    {
      title: "I think… / I don't think… + will",
      paragraphs: [
        "Своё мнение о будущем: I think it'll rain. I think we'll be OK.",
        "Отрицание ставим в начало: I don't think it will stop (так естественнее, чем I think it won't stop). Коротко: I think so. / I don't think so.",
      ],
      examples: [
        { ru: "Will the road be open? — I don't think so.", en: "Дорогу откроют? — Не думаю." },
        { ru: "I don't think it'll be warm tomorrow.", en: "Не думаю, что завтра будет тепло." },
      ],
    },
  ],
  tasks: [
    listen("ensi4-t1", "Послушай Джаго. Когда, по его мнению, кончится шторм?", "I don't think so. I think it'll stop on Thursday.", [
      ["В четверг.", true],
      ["Завтра.", false],
      ["Сегодня вечером.", false],
    ]),
    choice("ensi4-t2", "Как сказать «Не думаю, что дождь кончится»?", [
      ["I don't think it'll stop raining.", true],
      ["I not think it stops raining.", false],
      ["I think it don't stop raining.", false],
    ], { skill: "grammar" }),
    read("ensi4-t3", "Прочитай сообщение от службы погоды. Что будет закрыто?", "STORM WARNING — Cornwall\nStrong winds and big waves tonight.\nThe coast road will be closed from 6 pm.\nStay away from the harbour wall.", [
      ["Дорога вдоль побережья с шести вечера.", true],
      ["Все магазины.", false],
      ["Пляж с шести утра.", false],
    ]),
    fill("ensi4-t4", "Выбери правильное слово.", "Stay inside! It", "be dangerous.", "might", ["might", "is might", "mights"], { skill: "grammar" }),
    match("ensi4-t5", "Соедини пары.", [
      ["a storm", "шторм"],
      ["a warning", "предупреждение"],
      ["a power cut", "отключение электричества"],
      ["Stay inside!", "Оставайтесь дома!"],
    ], { skill: "words" }),
    script("ensi4-t6", "Шторм. Поговори с соседом.", [
      { speaker: "Сосед", text: "There's a storm warning tonight." },
      { speaker: "Ты", answer: "Oh no! Will it stop tomorrow?", options: ["Oh no! Will it stop tomorrow?", "Lovely day, isn't it?", "Swim between the flags!"] },
      { speaker: "Сосед", text: "I don't think so." },
      { speaker: "Ты", answer: "OK, we'll stay inside.", options: ["OK, we'll stay inside.", "OK, we'll go surfing.", "OK, it fell off."] },
    ], { skill: "speaking" }),
    speak("ensi4-t7", "Will it be sunny tomorrow?", "I don't think so. I think it'll rain.", "Не думаю. Думаю, будет дождь.", {
      help: "Ответь вслух, что ты думаешь о погоде на завтра.",
    }),
  ],
  reward: {
    itemId: "storm-lantern",
    itemName: "Штормовой фонарь",
    itemNameRu: "Storm lantern",
    ru: "Light in the storm!",
    en: "Свет в бурю!",
    a11y: "Старый медный фонарь со стеклом висит на крючке внутри фургона и освещает тёплым светом мокрое окно.",
    image: p("storm-lantern"),
    steps: ["Ночью гаснет свет во всём городе.", "Джаго приносит старый рыбацкий фонарь.", "«My father took it to sea», — говорит он. «Его брал в море мой отец».", "Фонарь горит, а за окном воет ветер."],
    bridge: "Утром шторм ещё не кончился. Дождь, ветер, пляж закрыт. Что делать весь день?",
  },
};

const stives5: Lesson = {
  id: "en-a2-stives-5",
  level: "A2",
  cityId: "en-stives",
  number: 5,
  title: "A rainy day — Дождливый день",
  minutes: 8,
  goals: ["Обсудить, чем заняться в дождь", "Probably и definitely с will", "Предложить план Б"],
  vocabNote: "Probably — «наверное», definitely — «точно». С will они стоят после will: I'll probably stay in. А в отрицании — перед won't: I probably won't go.",
  vocab: [
    v("ensi5-1", "It's pouring.", "Льёт как из ведра.", "Сплошной дождь стекает по стеклу фургона.", "Послушать It's pouring", p("l5-1")),
    v("ensi5-2", "a board game", "настольная игра", "Коробка с настольной игрой на столике в фургоне.", "Послушать a board game", p("l5-2")),
    v("ensi5-3", "an art gallery", "картинная галерея", "Белое здание галереи на берегу.", "Послушать an art gallery", p("l5-3")),
    v("ensi5-4", "I'll probably stay in.", "Наверное, останусь дома.", "Мурзик под пледом с чашкой какао.", "Послушать I'll probably stay in", p("l5-4")),
    v("ensi5-5", "We'll definitely go.", "Мы точно пойдём.", "Керра решительно надевает дождевик.", "Послушать We'll definitely go", p("l5-5")),
    v("ensi5-6", "a raincoat", "дождевик", "Жёлтый дождевик с капюшоном на крючке.", "Послушать a raincoat", p("l5-6")),
    v("ensi5-7", "soaked", "насквозь мокрый", "Том, с которого течёт вода.", "Послушать soaked", p("l5-7")),
    v("ensi5-8", "What shall we do?", "Что будем делать?", "Мурзик и Том смотрят друг на друга и на дождь.", "Послушать What shall we do", p("l5-8")),
  ],
  letters: [
    letter("soaked = [соукт]", "-ed после k звучит как [т]: soaked [соукт], looked [лукт], cooked [кукт].", "I'm soaked!", "Я промок(ла) насквозь!"),
  ],
  dialogue: {
    title: "В фургоне",
    note: "Stay in — сидеть дома, никуда не выходить. Board — доска, game — игра.",
    lines: [
      line("tom", "It's pouring. What shall we do?", "Льёт как из ведра. Что будем делать?"),
      line("murzik", "I'll probably stay in and play a board game.", "Я, наверное, останусь дома и поиграю в настольную игру."),
      line("kerra", "Why don't we go to the art gallery? It's by the beach.", "Может, пойдём в картинную галерею? Она у пляжа."),
      line("tom", "In this rain? We'll be soaked!", "В такой дождь? Мы промокнем насквозь!"),
      line("kerra", "Take a raincoat. It's only five minutes.", "Возьми дождевик. Это всего пять минут."),
      line("murzik", "OK! We'll definitely go. And then a board game!", "Ладно! Точно идём. А потом — настольная игра!"),
    ],
    gist: choice("ensi5-d1", "Что они решают в конце?", [
      ["Пойти в галерею, а потом играть.", true],
      ["Весь день сидеть в фургоне.", false],
      ["Пойти на сёрфинг.", false],
    ]),
  },
  grammar: [
    {
      title: "Probably и definitely",
      paragraphs: [
        "Насколько мы уверены: I'll definitely go (точно) — I'll probably go (наверное) — I might go (может быть).",
        "Probably и definitely стоят после will: We'll probably stay in. Но перед won't: I definitely won't swim today.",
      ],
      examples: [
        { ru: "It'll probably rain all day.", en: "Наверное, весь день будет дождь." },
        { ru: "I probably won't come.", en: "Я, наверное, не приду." },
      ],
    },
  ],
  tasks: [
    listen("ensi5-t1", "Послушай Мурзика. Что он хочет делать сначала?", "I'll probably stay in and play a board game.", [
      ["Остаться дома и поиграть в настольную игру.", true],
      ["Пойти в галерею.", false],
      ["Пойти на пляж.", false],
    ]),
    choice("ensi5-t2", "Где правильный порядок слов?", [
      ["We'll probably stay in.", true],
      ["We probably'll stay in.", false],
      ["We'll stay probably in.", false],
    ], { skill: "grammar" }),
    choice("ensi5-t3", "Ты уверен(а) на сто процентов. Что скажешь?", [
      ["I'll definitely come.", true],
      ["I might come.", false],
      ["I'll probably come.", false],
    ], { skill: "grammar" }),
    read("ensi5-t4", "Прочитай объявление у входа. Когда галерея закрыта?", "ST IVES ART GALLERY\nOpen 10 am – 5 pm\nClosed on Mondays from November to March\nCafé with sea view on the top floor", [
      ["По понедельникам с ноября по март.", true],
      ["По воскресеньям.", false],
      ["По понедельникам с апреля по октябрь.", false],
    ]),
    match("ensi5-t5", "Соедини пары.", [
      ["It's pouring.", "Льёт как из ведра."],
      ["a raincoat", "дождевик"],
      ["soaked", "насквозь мокрый"],
      ["a board game", "настольная игра"],
    ], { skill: "words" }),
    tf("ensi5-t6", "I'll definitely go значит «Я, может быть, пойду».", false, "grammar"),
    speak("ensi5-t7", "It's raining. What will you do today?", "I'll probably stay in and read. In the evening I'll definitely call my friend.", "Я, наверное, останусь дома и почитаю. А вечером точно позвоню другу.", {
      help: "Расскажи вслух о планах на дождливый день: probably, definitely.",
    }),
  ],
  reward: {
    itemId: "board-game",
    itemName: "Настольная игра",
    itemNameRu: "Board game",
    ru: "Rainy days are fun now!",
    en: "Теперь дождь — это весело!",
    a11y: "Коробка с настольной игрой лежит на полке фургона, на крышке нарисованы корабли и маяк.",
    image: p("board-game"),
    steps: ["В галерее есть маленький магазинчик.", "Мурзик покупает новую игру — про корабли и маяки.", "Вечером они играют втроём с Керрой.", "Том проигрывает три раза — и смеётся."],
    bridge: "Джаго зовёт всех к себе: «When it rains in Cornwall, we make pasties». Когда в Корнуолле дождь, пекут пирожки.",
  },
};

const stives6: Lesson = {
  id: "en-a2-stives-6",
  level: "A2",
  cityId: "en-stives",
  number: 6,
  title: "Jago's pasties — Пирожки Джаго",
  minutes: 8,
  goals: ["Понять рецепт", "Сказать, когда будет готово: It'll be ready in…", "Узнать историю корнуольского пирожка"],
  vocabNote: "Pasty [пэсти] — корнуольский пирожок с мясом и овощами. Не путай с pastry [пэйстри] — тесто, выпечка.",
  vocab: [
    v("ensi6-1", "a pasty", "корнуольский пирожок", "Большой золотистый пирожок-полумесяц с косичкой сбоку.", "Послушать a pasty", p("l6-1")),
    v("ensi6-2", "beef", "говядина", "Кусочки мяса на разделочной доске.", "Послушать beef", p("l6-2")),
    v("ensi6-3", "potatoes and onions", "картошка и лук", "Нарезанные кубиками картошка и лук.", "Послушать potatoes and onions", p("l6-3")),
    v("ensi6-4", "Cut it into small pieces.", "Нарежь мелкими кусочками.", "Джаго режет овощи большим ножом.", "Послушать Cut it into small pieces", p("l6-4")),
    v("ensi6-5", "Fold it in half.", "Сложи пополам.", "Круг теста складывают пополам над начинкой.", "Послушать Fold it in half", p("l6-5")),
    v("ensi6-6", "It'll be ready in an hour.", "Будет готово через час.", "Пирожки в духовке, рядом часы.", "Послушать It'll be ready in an hour", p("l6-6")),
    v("ensi6-7", "miners", "шахтёры", "Старая фотография шахтёров с пирожками в руках.", "Послушать miners", p("l6-7")),
    v("ensi6-8", "Mind, it's hot!", "Осторожно, горячо!", "Джаго достаёт противень в толстых рукавицах.", "Послушать Mind, it's hot", p("l6-8")),
  ],
  letters: [
    letter("pasty ≠ pastry", "Pasty [пэсти] — пирожок, pastry [пэйстри] — тесто. Разница не только в букве r: в pasty звук [э], в pastry — [эй].", "a pasty", "пирожок"),
  ],
  dialogue: {
    title: "Кухня Джаго",
    note: "Mind! — британское «Осторожно!». Crimp — защипнуть край косичкой.",
    lines: [
      line("jago", "Cut the beef and the potatoes into small pieces.", "Нарежь говядину и картошку мелкими кусочками."),
      line("murzik", "And the onions?", "А лук?"),
      line("jago", "Onions too. Put it all on the pastry and fold it in half.", "Лук тоже. Положи всё на тесто и сложи пополам."),
      line("tom", "Why is the edge so thick?", "Почему край такой толстый?"),
      line("jago", "Miners held the pasty by the edge. Their hands were dirty, so they didn't eat the edge.", "Шахтёры держали пирожок за край. Руки у них были грязные, поэтому край они не ели."),
      line("murzik", "When will they be ready?", "Когда они будут готовы?"),
      line("jago", "In an hour. Mind, they'll be hot!", "Через час. Осторожно, будут горячие!"),
    ],
    gist: choice("ensi6-d1", "Зачем у пирожка толстый край?", [
      ["Шахтёры держали его грязными руками.", true],
      ["Так вкуснее.", false],
      ["Чтобы пирожок не сгорел.", false],
    ]),
  },
  grammar: [
    {
      title: "In + время: через сколько",
      paragraphs: [
        "«Через час» по-английски — in an hour (не after an hour): It'll be ready in an hour. I'll call you in five minutes.",
        "Вопрос: When will it be ready? How long will it take?",
      ],
      examples: [
        { ru: "Dinner will be ready in ten minutes.", en: "Ужин будет готов через десять минут." },
        { ru: "The bus will come in half an hour.", en: "Автобус придёт через полчаса." },
      ],
    },
  ],
  tasks: [
    listen("ensi6-t1", "Послушай Джаго. Когда пирожки будут готовы?", "In an hour. Mind, they'll be hot!", [
      ["Через час.", true],
      ["Через десять минут.", false],
      ["Завтра.", false],
    ]),
    choice("ensi6-t2", "Как сказать «Я позвоню тебе через пять минут»?", [
      ["I'll call you in five minutes.", true],
      ["I'll call you after five minutes ago.", false],
      ["I call you through five minutes.", false],
    ], { skill: "grammar" }),
    read("ensi6-t3", "Прочитай рецепт на карточке. Что делать после того, как сложил(а) пирожок?", "CORNISH PASTY\n1. Cut beef, potato, onion and swede.\n2. Put them on the pastry.\n3. Fold in half and crimp the edge.\n4. Bake for 50 minutes.", [
      ["Защипнуть край.", true],
      ["Нарезать мясо.", false],
      ["Положить начинку на тесто.", false],
    ]),
    fill("ensi6-t4", "Выбери правильное слово.", "Fold the pastry in", ".", "half", ["half", "hour", "hot"], { skill: "words" }),
    match("ensi6-t5", "Соедини пары.", [
      ["beef", "говядина"],
      ["miners", "шахтёры"],
      ["Fold it in half.", "Сложи пополам."],
      ["Mind, it's hot!", "Осторожно, горячо!"],
    ], { skill: "words" }),
    tf("ensi6-t6", "Pasty и pastry — это одно и то же слово.", false, "words"),
    speak("ensi6-t7", "When will dinner be ready?", "It'll be ready in twenty minutes. Mind, it's hot!", "Будет готово через двадцать минут. Осторожно, горячо!", {
      help: "Скажи вслух, когда будет готов ужин, и предупреди, что горячо.",
    }),
  ],
  reward: {
    itemId: "oven-gloves",
    itemName: "Рукавицы для духовки",
    itemNameRu: "Oven gloves",
    ru: "Hot pasties — no problem!",
    en: "Горячие пирожки — не проблема!",
    a11y: "Толстые сине-белые рукавицы для духовки, сшитые вместе, висят у плиты фургона.",
    image: p("oven-gloves"),
    steps: ["Мурзик хватает горячий противень — ай!", "Джаго смеётся и дарит ему старые рукавицы.", "«Every cook needs good gloves». «Каждому повару нужны хорошие рукавицы».", "Теперь они висят у плиты в фургоне."],
    bridge: "В четверг шторм кончился — как и говорил Джаго. Пора в дорогу. Но сначала — прощание в гавани.",
  },
};

const stives7: Lesson = {
  id: "en-a2-stives-7",
  level: "A2",
  cityId: "en-stives",
  number: 7,
  title: "St Ives exam — Экзамен: Сент-Айвс",
  minutes: 9,
  goals: ["Понять длинный рассказ на слух", "Поговорить о погоде в дорогу", "Повторить всё из Сент-Айвса"],
  vocabNote: "Урок 7 — экзамен города: длинная аудиоистория и повторение всего из Сент-Айвса.",
  vocab: [
    v("ensi7-1", "a fisherman", "рыбак", "Джаго в старом свитере и кепке у своей лодки.", "Послушать a fisherman", p("l7-1")),
    v("ensi7-2", "the harbour", "гавань", "Маленькая гавань с разноцветными лодками.", "Послушать the harbour", p("l7-2")),
    v("ensi7-3", "a lighthouse", "маяк", "Белый маяк на скале у моря.", "Послушать a lighthouse", p("l7-3")),
    v("ensi7-4", "It'll be a nice day for driving.", "Хороший будет день для дороги.", "Солнечная дорога вдоль моря.", "Послушать It'll be a nice day for driving", p("l7-4")),
    v("ensi7-5", "Wales", "Уэльс", "Карта: стрелка от Корнуолла через залив в Уэльс.", "Послушать Wales", p("l7-5")),
    v("ensi7-6", "Drop in any time!", "Заглядывайте в любое время!", "Керра машет обеими руками.", "Послушать Drop in any time", p("l7-6")),
    v("ensi7-7", "I'll miss the sea.", "Я буду скучать по морю.", "Мурзик смотрит на море в последний раз.", "Послушать I'll miss the sea", p("l7-7")),
    v("ensi7-8", "Good luck in Wales!", "Удачи в Уэльсе!", "Джаго приподнимает кепку.", "Послушать Good luck in Wales", p("l7-8")),
  ],
  letters: [
    letter("Wales = [уэйлз]", "Уэльс по-английски звучит так же, как whales — киты: [уэйлз].", "Wales", "Уэльс"),
  ],
  dialogue: {
    title: "Прощание в гавани",
    note: "Miss — скучать по кому-то или чему-то: I'll miss you — «Я буду по тебе скучать».",
    lines: [
      line("jago", "This is for your road book. My wife's pasty recipe.", "Это для вашей книги дороги. Рецепт пирожков моей жены."),
      line("murzik", "Thank you, Jago! I'll miss the sea.", "Спасибо, Джаго! Я буду скучать по морю."),
      line("kerra", "Where are you going next?", "Куда вы дальше?"),
      line("tom", "To Wales. To Cardiff. I need a new jacket for the festival in August.", "В Уэльс. В Кардифф. Мне нужна новая куртка для фестиваля в августе."),
      line("jago", "The forecast is good. It'll be a nice day for driving.", "Прогноз хороший. Будет отличный день для дороги."),
      line("kerra", "Drop in any time! And I'll definitely come to the festival.", "Заглядывайте в любое время! А я точно приеду на фестиваль."),
      line("jago", "Good luck in Wales!", "Удачи в Уэльсе!"),
    ],
    gist: choice("ensi7-d1", "Зачем Тому в Кардифф?", [
      ["Ему нужна новая куртка для фестиваля.", true],
      ["Он хочет заниматься сёрфингом.", false],
      ["Там живёт Керра.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем Сент-Айвс",
      paragraphs: [
        "Прогноз: It'll be sunny. Will it rain? It won't. Может быть: It might be cold. Мнение: I think it'll stop. I don't think so.",
        "Решение и обещание: I'll help you. Уверенность: I'll definitely / probably go. Через сколько: in an hour.",
      ],
      examples: [
        { ru: "I think it'll be sunny, but it might be windy.", en: "Думаю, будет солнечно, но может быть ветрено." },
        { ru: "We'll probably be in Cardiff in five hours.", en: "Наверное, через пять часов будем в Кардиффе." },
      ],
    },
  ],
  tasks: [
    listen("ensi7-t1", "Аудиоистория: Джаго рассказывает о своей жизни. Послушай. Кем он был?", "I was a fisherman for fifty years. Every morning I listened to the forecast. If there was a storm warning, I stayed in the harbour. My wife made pasties, and I took them to sea. Now I'm old, but I still listen to the forecast every morning.", [
      ["Рыбаком.", true],
      ["Шахтёром.", false],
      ["Спасателем.", false],
    ]),
    choice("ensi7-t2", "Из рассказа Джаго: что он делал, если обещали шторм?", [
      ["Оставался в гавани.", true],
      ["Всё равно выходил в море.", false],
      ["Пёк пирожки.", false],
    ], { skill: "listening" }),
    choice("ensi7-t3", "Как сказать «Не думаю, что будет дождь»?", [
      ["I don't think it'll rain.", true],
      ["I think it don't rain.", false],
      ["I not think it will rain.", false],
    ], { skill: "grammar" }),
    read("ensi7-t4", "Прочитай сообщение от Керры. Что она обещает?", "Good luck! I'll definitely come to the festival in August. I'll bring Grandad's pasties! Kerra", [
      ["Приехать на фестиваль и привезти пирожки дедушки.", true],
      ["Приехать в Кардифф.", false],
      ["Научить Тома сёрфингу в августе.", false],
    ]),
    script("ensi7-t5", "Попрощайся с Джаго.", [
      { speaker: "Джаго", text: "The forecast is good. It'll be a nice day for driving." },
      { speaker: "Ты", answer: "Great! I'll miss the sea.", options: ["Great! I'll miss the sea.", "Stay inside!", "Fold it in half."] },
      { speaker: "Джаго", text: "Drop in any time!" },
      { speaker: "Ты", answer: "We'll definitely come back!", options: ["We'll definitely come back!", "We'll definitely fell off!", "It might be dangerous."] },
    ], { skill: "review" }),
    match("ensi7-t6", "Повторяем Сент-Айвс: соедини пары.", [
      ["windy", "ветрено"],
      ["a wave", "волна"],
      ["a storm", "шторм"],
      ["a lighthouse", "маяк"],
    ], { skill: "review" }),
    speak("ensi7-t7", "What will the weather be like tomorrow?", "I think it'll be sunny, but it might be windy. It'll be a nice day for the beach.", "Думаю, будет солнечно, но может быть ветрено. Хороший будет день для пляжа.", {
      help: "Расскажи вслух прогноз на завтра: will, might, I think.",
    }),
  ],
  reward: {
    itemId: "recipe-cornish-pasty",
    itemName: "Рецепт «Cornish pasty»",
    itemNameRu: "Cornish pasty recipe card",
    ru: "Our third recipe!",
    en: "Наш третий рецепт!",
    a11y: "Карточка с рецептом корнуольского пирожка, написанным синими чернилами, вклеена на третью страницу голубой тетради; на полях нарисован маяк.",
    image: p("recipe-cornish-pasty"),
    steps: ["Мурзик вклеивает рецепт на третью страницу книги дороги.", "Его написала жена Джаго много лет назад.", "Керра рисует на полях маяк.", "Три рецепта есть. Впереди — Уэльс."],
  },
};

const story: CityStory = {
  home: {
    name: "Фургон у гавани",
    nameRu: "The van by the harbour",
    image: p("home"),
    a11y: "Голубой фургон «Hope on Wheels» стоит у маленькой гавани; лодки, белые домики на холме, бирюзовое море.",
  },
  keepsakeId: "recipe-cornish-pasty",
  welcomeRu: "Hello, St Ives!",
  welcomeEn: "Привет, Сент-Айвс!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Голубой фургон в Сент-Айвсе: маленькая гавань с лодками, белые домики на холме, бирюзовое море и чайки.",
  departureImage: p("departure"),
  departureA11y: "Керра и Джаго машут на прощание голубому фургону на дороге над морем; Джаго приподнимает кепку.",
  finale: [
    {
      image: p("finale-1"),
      a11y: "У фургона уютно: старое радио на полке, полосатый экран от ветра, ракушки над окошком, медный фонарь, настольная игра, рукавицы у плиты.",
      lines: [
        { en: "Фургон пережил свой первый шторм." },
        { en: "В книге дороги третий рецепт: корнуольские пирожки." },
      ],
    },
    {
      image: p("finale-2"),
      a11y: "Мурзик стоит на доске для сёрфинга на маленькой волне, Керра аплодирует из воды, Том смеётся на берегу.",
      lines: [
        { ru: "St Ives complete!", en: "Сент-Айвс пройден!" },
        { en: "7 / 7 уроков" },
        { ru: "I'll definitely come back!", en: "Я точно вернусь!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Керра и Джаго машут на прощание голубому фургону на дороге над морем; Джаго приподнимает кепку.",
      lines: [
        { ru: "Goodbye, Kerra! Goodbye, Jago!", en: "До свидания, Керра! До свидания, Джаго!" },
        { ru: "Next stop: Wales!", en: "Следующая остановка: Уэльс!" },
      ],
    },
    {
      image: p("finale-4"),
      a11y: "Голубой фургон едет по большому мосту через широкую реку, на щите написано «Croeso i Gymru — Welcome to Wales».",
      lines: [{ ru: "St Ives → Cardiff", en: "Сент-Айвс → Кардифф" }],
    },
    {
      image: pic("en/cardiff/arrival"),
      a11y: "Голубой фургон в Кардиффе: замок в центре города, торговые аркады, красный дракон на флагах.",
      lines: [{ ru: "Hello, Cardiff!", en: "Привет, Кардифф!" }],
    },
  ],
};

export const enStIves = {
  id: "en-stives",
  name: "Сент-Айвс",
  nameEn: "St Ives",
  lessons: [stives1, stives2, stives3, stives4, stives5, stives6, stives7],
  story,
};
