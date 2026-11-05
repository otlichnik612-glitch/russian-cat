import { pic } from "../art";
import { read } from "../make";
import type { CityStory, Lesson } from "../types";
import { choice, fill, letter, line, listen, match, script, speak, tf, v } from "../tr/make";

/*
 * Нэшвилл · «Вечер музыки» · A2, уроки 1–7.
 * Город музыки: неон, гитары, музыка из каждой двери. Рэн (около 28) пишет песни и поёт на улице; мисс Дот (около 70)
 * держит маленькое кафе с острой жареной курицей. Рассказы о том, что случилось (свет погас посреди ужина),
 * песня про кафе «Хоуп», вечер открытого микрофона и отзывы. Рецепт — hot chicken.
 * Грамматика: Past Simple и Past Continuous вместе — when / while: We were serving dinner when the lights went out.
 * Рассказать историю: first, then, after that, in the end (повторение); отзывы: It was amazing! I'd give it five stars.
 */

const p = (name: string) => pic(`en/nashville/${name}`);

const nash1: Lesson = {
  id: "en-a2-nashville-1",
  level: "A2",
  cityId: "en-nashville",
  number: 1,
  title: "Music City — Город музыки",
  minutes: 8,
  goals: ["Рассказать, что происходило, когда…", "Past Continuous + when + Past Simple", "Описать шумную улицу"],
  vocabNote: "Длинное действие — Past Continuous (was / were + -ing). Короткое, которое его прервало, — Past Simple. We were parking when a band started playing.",
  vocab: [
    v("enna1-1", "neon signs", "неоновые вывески", "Разноцветные вывески в форме гитар и сапог.", "Послушать neon signs", p("l1-1")),
    v("enna1-2", "We were parking when…", "Мы парковались, когда…", "Жёлтый фургон въезжает на парковку.", "Послушать We were parking when", p("l1-2")),
    v("enna1-3", "a band started playing", "заиграла группа", "Группа с банджо и скрипкой на углу улицы.", "Послушать a band started playing", p("l1-3")),
    v("enna1-4", "music from every door", "музыка из каждой двери", "Из всех баров на улице льётся музыка.", "Послушать music from every door", p("l1-4")),
    v("enna1-5", "a street singer", "уличная певица", "Девушка с гитарой и открытым чехлом для монет.", "Послушать a street singer", p("l1-5")),
    v("enna1-6", "She was singing about…", "Она пела о…", "Рэн поёт с закрытыми глазами.", "Послушать She was singing about", p("l1-6")),
    v("enna1-7", "I stopped to listen.", "Я остановился (остановилась) послушать.", "Мурзик замер посреди тротуара.", "Послушать I stopped to listen", p("l1-7")),
    v("enna1-8", "a cowboy boot", "ковбойский сапог", "Огромный сапог-вывеска над магазином.", "Послушать a cowboy boot", p("l1-8")),
  ],
  letters: [
    letter("neon = [нИ:ан]", "Ударение на первый слог: NEE-on.", "neon signs", "неоновые вывески"),
    letter("boot = [бу:т]", "oo — долгое [у:]: boot, food, too.", "cowboy boots", "ковбойские сапоги"),
  ],
  dialogue: {
    title: "Бродвей вечером",
    note: "Главная улица Нэшвилла с барами и живой музыкой называется Бродвей — как в Нью-Йорке, но совсем другая. Такие бары с живой музыкой называют honky-tonks.",
    lines: [
      line("murzik", "Tom, listen! We were parking when a band started playing — right next to us!", "Том, слушай! Мы парковались, когда рядом с нами заиграла группа!"),
      line("tom", "There's music from every door here. And look at that cowboy boot!", "Здесь музыка из каждой двери. И посмотри на этот сапог!"),
      line("murzik", "Wait. That street singer… She was singing about a café with a blue door.", "Подожди. Та уличная певица… Она пела о кафе с синей дверью."),
      line("tom", "Really? I didn't hear. I was looking at the neon signs.", "Правда? Я не слышал. Я смотрел на неоновые вывески."),
      line("wren", "Hi! You stopped to listen. Thanks! I'm Wren.", "Привет! Вы остановились послушать. Спасибо! Я Рэн."),
      line("murzik", "Your song — the café with the blue door. Is it Hope's Café in London?", "Твоя песня — кафе с синей дверью. Это кафе «Хоуп» в Лондоне?"),
      line("wren", "No idea! I just made it up while I was driving. Why?", "Понятия не имею! Я просто её придумала, пока ехала за рулём. А что?"),
    ],
    gist: choice("enna1-d1", "О чём пела Рэн?", [
      ["О кафе с синей дверью.", true],
      ["О ковбойских сапогах.", false],
      ["О жёлтом фургоне.", false],
    ]),
  },
  grammar: [
    {
      title: "Past Continuous + when + Past Simple",
      paragraphs: [
        "Фон, длинное действие — Past Continuous: We were parking. She was singing. Короткое событие, которое случилось на этом фоне, — Past Simple: a band started playing, I stopped.",
        "When обычно стоит перед коротким событием: We were parking when a band started playing. While — перед длинным: I made it up while I was driving.",
      ],
      examples: [
        { ru: "I was looking at the signs when I heard the song.", en: "Я смотрел(а) на вывески, когда услышал(а) песню." },
        { ru: "She wrote the song while she was driving.", en: "Она написала песню, пока ехала за рулём." },
      ],
    },
  ],
  tasks: [
    listen("enna1-t1", "Послушай. Что делал Том, когда Рэн пела?", "Really? I didn't hear. I was looking at the neon signs.", [
      ["Смотрел на неоновые вывески.", true],
      ["Парковал фургон.", false],
      ["Пел вместе с ней.", false],
    ]),
    choice("enna1-t2", "Как сказать «Я смотрел(а) на вывески, когда услышал(а) песню»?", [
      ["I was looking at the signs when I heard the song.", true],
      ["I looked at the signs when I was hearing the song.", false],
      ["I was look at the signs when I was heard the song.", false],
    ], { skill: "grammar" }),
    fill("enna1-t3", "Выбери правильную форму: «Мы парковались, когда заиграла группа».", "We", "parking when a band started playing.", "were", ["were", "was", "did"], { skill: "grammar" }),
    read("enna1-t4", "Прочитай афишу у бара. Во сколько начинается музыка?", "THE BLUE BOOT\nLive music every day\n10 am till 2 am\nNo cover charge!", [
      ["В 10 утра.", true],
      ["В 2 часа ночи.", false],
      ["Только вечером.", false],
    ]),
    match("enna1-t5", "Соедини пары.", [
      ["neon signs", "неоновые вывески"],
      ["a street singer", "уличная певица"],
      ["I stopped to listen.", "Я остановился (остановилась) послушать."],
      ["a cowboy boot", "ковбойский сапог"],
    ], { skill: "words" }),
    tf("enna1-t6", "Рэн придумала песню, когда была в Лондоне.", false, "listening"),
    speak("enna1-t7", "Tell me: what were you doing when something surprising happened?", "I was cooking dinner when my friend called. We talked for an hour!", "Я готовил(а) ужин, когда позвонил друг. Мы проговорили целый час!", {
      help: "Расскажи вслух: что ты делал(а), когда что-то случилось.",
    }),
  ],
  reward: {
    itemId: "neon-sign",
    itemName: "Маленькая неоновая гитара",
    itemNameRu: "Mini neon guitar",
    ru: "Our own neon sign!",
    en: "Наша собственная неоновая вывеска!",
    a11y: "В окошке жёлтого фургона светится маленькая розовая неоновая гитара.",
    image: p("neon-sign"),
    steps: ["В сувенирной лавке Мурзик видит маленькую неоновую гитару.", "Розовую, на батарейках.", "Теперь окошко фургона светится по вечерам.", "Как настоящий бар на Бродвее."],
    bridge: "Рэн зовёт их на вечер авторов песен в маленьком кафе. «Там каждый рассказывает, как родилась его песня».",
  },
};

const nash2: Lesson = {
  id: "en-a2-nashville-2",
  level: "A2",
  cityId: "en-nashville",
  number: 2,
  title: "How the song was born — Как родилась песня",
  minutes: 8,
  goals: ["Понять историю на слух", "While + Past Continuous", "Задать вопрос о прошлом: What were you doing when…?"],
  vocabNote: "A songwriter — автор песен. Lyrics — слова песни. Make up — придумать.",
  vocab: [
    v("enna2-1", "a songwriter", "автор песен", "Рэн с тетрадкой, полной зачёркнутых строчек.", "Послушать a songwriter", p("l2-1")),
    v("enna2-2", "a writers' night", "вечер авторов", "Маленькая сцена, четыре стула, четыре гитары.", "Послушать a writers' night", p("l2-2")),
    v("enna2-3", "the lyrics", "слова песни", "Листок со словами песни и аккордами.", "Послушать the lyrics", p("l2-3")),
    v("enna2-4", "I was driving through the rain.", "Я ехала под дождём.", "Капли на лобовом стекле, дворники.", "Послушать I was driving through the rain", p("l2-4")),
    v("enna2-5", "while I was waiting at a red light", "пока я ждала на красный свет", "Красный светофор сквозь мокрое стекло.", "Послушать while I was waiting at a red light", p("l2-5")),
    v("enna2-6", "The words just came to me.", "Слова сами пришли ко мне.", "Рэн улыбается, будто что-то услышала.", "Послушать The words just came to me", p("l2-6")),
    v("enna2-7", "What were you doing when…?", "Что ты делал(а), когда…?", "Мурзик поднимает лапку, чтобы задать вопрос.", "Послушать What were you doing when", p("l2-7")),
    v("enna2-8", "Everyone went quiet.", "Все затихли.", "Зал слушает, никто не двигается.", "Послушать Everyone went quiet", p("l2-8")),
  ],
  letters: [
    letter("lyrics = [лИрикс]", "y здесь звучит как короткое [и].", "the lyrics", "слова песни"),
    letter("quiet = [куАйэт]", "Два слога: QUI-et. Не путай с quite [куайт] — «довольно».", "Everyone went quiet.", "Все затихли."),
  ],
  dialogue: {
    title: "Вечер авторов",
    note: "На таких вечерах четыре автора сидят на сцене вместе, по очереди поют и рассказывают историю каждой песни.",
    lines: [
      line("wren", "This song is called \"Blue Door\". I was driving through the rain to Nashville.", "Эта песня называется «Синяя дверь». Я ехала под дождём в Нэшвилл."),
      line("wren", "While I was waiting at a red light, I saw an old café with a blue door. The words just came to me.", "Пока я ждала на красный свет, я увидела старое кафе с синей дверью. Слова сами пришли ко мне."),
      line("murzik", "What were you doing when you wrote the rest?", "А что ты делала, когда писала остальное?"),
      line("wren", "I was eating hot chicken at Miss Dot's. My mouth was on fire — and I finished the song!", "Я ела острую курицу у мисс Дот. Рот горел — и я дописала песню!"),
      line("tom", "Everyone went quiet when you sang it.", "Все затихли, когда ты её пела."),
      line("wren", "That's the best thing a songwriter can hear. Thank you.", "Это лучшее, что может услышать автор песен. Спасибо."),
    ],
    gist: choice("enna2-d1", "Где Рэн увидела кафе с синей дверью?", [
      ["Пока ждала на красный свет под дождём.", true],
      ["В Лондоне.", false],
      ["У мисс Дот.", false],
    ]),
  },
  grammar: [
    {
      title: "While + Past Continuous",
      paragraphs: [
        "While — «пока», «в то время как» — обычно с длинным действием: While I was waiting at a red light, I saw a café.",
        "Вопрос о фоне: What were you doing when…? — Что ты делал(а), когда…? Ответ: I was eating / I was driving.",
      ],
      examples: [
        { ru: "While we were eating, it started to rain.", en: "Пока мы ели, пошёл дождь." },
        { ru: "What were you doing when I called? — I was taking a shower.", en: "Что ты делал(а), когда я позвонил(а)? — Я был(а) в душе." },
      ],
    },
  ],
  tasks: [
    listen("enna2-t1", "Послушай. Что Рэн делала, когда дописала песню?", "I was eating hot chicken at Miss Dot's. My mouth was on fire — and I finished the song!", [
      ["Ела острую курицу у мисс Дот.", true],
      ["Ехала под дождём.", false],
      ["Пела на улице.", false],
    ]),
    choice("enna2-t2", "Как сказать «Пока мы ели, пошёл дождь»?", [
      ["While we were eating, it started to rain.", true],
      ["While we ate, it was start to rain.", false],
      ["While we were eat, it starting to rain.", false],
    ], { skill: "grammar" }),
    fill("enna2-t3", "Выбери правильную форму: «Что ты делал(а), когда я позвонил(а)?»", "What were you", "when I called?", "doing", ["doing", "do", "did"], { skill: "grammar" }),
    read("enna2-t4", "Прочитай программу вечера. Кто выступает третьим?", "WRITERS' NIGHT — 7 pm\n1. Sam Lee — \"Old Road\"\n2. Wren — \"Blue Door\"\n3. Jo Parks — \"Rainy Day\"\n4. Open mic — anyone!", [
      ["Джо Паркс.", true],
      ["Рэн.", false],
      ["Сэм Ли.", false],
    ]),
    match("enna2-t5", "Соедини пары.", [
      ["a songwriter", "автор песен"],
      ["the lyrics", "слова песни"],
      ["The words just came to me.", "Слова сами пришли ко мне."],
      ["Everyone went quiet.", "Все затихли."],
    ], { skill: "words" }),
    tf("enna2-t6", "Песня Рэн называется «Синяя дверь».", true, "listening"),
    speak("enna2-t7", "Where did you have your best idea? What were you doing?", "I had my best idea while I was walking in the park. I was listening to music when it just came to me.", "Лучшая идея пришла мне, пока я гулял(а) в парке. Я слушал(а) музыку, и она просто пришла сама.", {
      help: "Расскажи вслух, где и когда к тебе пришла хорошая идея.",
    }),
  ],
  reward: {
    itemId: "lyric-sheet",
    itemName: "Листок со словами «Blue Door»",
    itemNameRu: "\"Blue Door\" lyric sheet",
    ru: "A song about a blue door — signed by the songwriter!",
    en: "Песня о синей двери — с автографом автора!",
    a11y: "На стене фургона на прищепке висит листок со словами песни «Blue Door», аккордами и подписью Рэн.",
    image: p("lyric-sheet"),
    steps: ["После концерта Рэн дарит им листок со словами.", "Сверху — аккорды, внизу — подпись.", "Том фотографирует его и отправляет миссис Хоуп.", "Миссис Хоуп отвечает одним словом: «Плачу»."],
    bridge: "На следующий вечер у фургона длинная очередь. Они только начали подавать еду — и вдруг весь квартал погружается в темноту.",
  },
};

const nash3: Lesson = {
  id: "en-a2-nashville-3",
  level: "A2",
  cityId: "en-nashville",
  number: 3,
  title: "The lights went out! — Погас свет!",
  minutes: 8,
  goals: ["Рассказать о неожиданном событии", "Past Continuous для нескольких действий сразу", "Последовательность: first, then, in the end"],
  vocabNote: "A power outage (в Британии — power cut) — отключение электричества. The lights went out — погас свет.",
  vocab: [
    v("enna3-1", "We were serving dinner when the lights went out.", "Мы подавали ужин, когда погас свет.", "Тёмная улица, только звёзды и фонарики телефонов.", "Послушать We were serving dinner when the lights went out", p("l3-1")),
    v("enna3-2", "a power outage", "отключение электричества", "Тёмные окна домов по всей улице.", "Послушать a power outage", p("l3-2")),
    v("enna3-3", "Some people were eating, others were waiting.", "Одни ели, другие ждали.", "Люди в темноте у фургона.", "Послушать Some people were eating, others were waiting", p("l3-3")),
    v("enna3-4", "a flashlight", "фонарик", "Том держит фонарик над прилавком.", "Послушать a flashlight", p("l3-4")),
    v("enna3-5", "Nobody panicked.", "Никто не запаниковал.", "Люди спокойно включают фонарики на телефонах.", "Послушать Nobody panicked", p("l3-5")),
    v("enna3-6", "Someone started singing.", "Кто-то запел.", "Рэн с гитарой посреди тёмной улицы.", "Послушать Someone started singing", p("l3-6")),
    v("enna3-7", "the whole street", "вся улица", "Вся улица поёт хором при свете телефонов.", "Послушать the whole street", p("l3-7")),
    v("enna3-8", "It was the best night ever.", "Это был лучший вечер в жизни.", "Мурзик сияет в свете фонариков.", "Послушать It was the best night ever", p("l3-8")),
  ],
  letters: [
    letter("outage = [Аутидж]", "out + age: [аут-идж], ударение на первый слог.", "a power outage", "отключение электричества"),
    letter("panicked = [пЭникт]", "Panic → panicked: перед -ed добавляется k, окончание звучит [т].", "Nobody panicked.", "Никто не запаниковал."),
  ],
  dialogue: {
    title: "В темноте",
    note: "Flashlight — фонарик по-американски (в Британии — torch). Мурзик рассказывает миссис Хоуп о вечере по видеосвязи.",
    lines: [
      line("murzik", "Gran, you won't believe it! We were serving dinner when the lights went out — the whole street!", "Бабушка, ты не поверишь! Мы подавали ужин, когда погас свет — на всей улице!"),
      line("hope", "Oh no! What happened then?", "Ой! А что было дальше?"),
      line("murzik", "Some people were eating, others were waiting. First Tom found a flashlight. Then everyone turned on their phone flashlights.", "Одни ели, другие ждали. Сначала Том нашёл фонарик. Потом все включили фонарики на телефонах."),
      line("tom", "Nobody panicked. And then someone started singing — it was Wren!", "Никто не запаниковал. А потом кто-то запел — это была Рэн!"),
      line("murzik", "In the end the whole street was singing \"Blue Door\". It was the best night ever.", "В конце концов вся улица пела «Синюю дверь». Это был лучший вечер в жизни."),
      line("hope", "And the food?", "А еда?"),
      line("tom", "We were cooking on gas, so the food was fine!", "Мы готовили на газу, так что с едой всё было в порядке!"),
    ],
    gist: choice("enna3-d1", "Что сделала Рэн в темноте?", [
      ["Начала петь.", true],
      ["Ушла домой.", false],
      ["Нашла фонарик.", false],
    ]),
  },
  grammar: [
    {
      title: "Несколько фоновых действий",
      paragraphs: [
        "Когда описываешь картину в прошлом, несколько действий могут идти одновременно — все в Past Continuous: Some people were eating, others were waiting, Wren was tuning her guitar.",
        "Затем события по порядку — в Past Simple: First Tom found a flashlight. Then everyone turned on their phone flashlights. In the end the whole street sang.",
      ],
      examples: [
        { ru: "The kids were playing and their parents were talking when it started to snow.", en: "Дети играли, а родители разговаривали, когда пошёл снег." },
        { ru: "First the lights went out. Then someone started singing.", en: "Сначала погас свет. Потом кто-то запел." },
      ],
    },
  ],
  tasks: [
    listen("enna3-t1", "Послушай. Почему с едой всё было в порядке?", "We were cooking on gas, so the food was fine!", [
      ["Они готовили на газу.", true],
      ["Еду уже съели.", false],
      ["У них был генератор.", false],
    ]),
    choice("enna3-t2", "Как сказать «Дети играли, а родители разговаривали»?", [
      ["The kids were playing and their parents were talking.", true],
      ["The kids was playing and their parents was talking.", false],
      ["The kids played and their parents were talk.", false],
    ], { skill: "grammar" }),
    fill("enna3-t3", "Выбери правильное слово: «Сначала погас свет. Потом кто-то запел».", "First the lights went out.", "someone started singing.", "Then", ["Then", "While", "When"], { skill: "grammar" }),
    read("enna3-t4", "Прочитай сообщение энергокомпании. Когда вернётся свет?", "CITY POWER: Power outage in the Broadway area. Our team is working on it. Power back by 10:30 pm. Sorry for the trouble!", [
      ["К 22:30.", true],
      ["Утром.", false],
      ["Через неделю.", false],
    ]),
    match("enna3-t5", "Соедини пары.", [
      ["a power outage", "отключение электричества"],
      ["a flashlight", "фонарик"],
      ["Nobody panicked.", "Никто не запаниковал."],
      ["the whole street", "вся улица"],
    ], { skill: "words" }),
    tf("enna3-t6", "Люди в очереди запаниковали и ушли.", false, "listening"),
    speak("enna3-t7", "Tell me about a time something went wrong. What happened?", "We were having dinner when the lights went out. First we found some candles. Then we played cards. In the end it was a lovely evening!", "Мы ужинали, когда погас свет. Сначала мы нашли свечи. Потом играли в карты. В итоге вечер получился чудесный!", {
      help: "Расскажи вслух историю: when…, first…, then…, in the end…",
    }),
  ],
  reward: {
    itemId: "flashlight2",
    itemName: "Фонарик",
    itemNameRu: "Flashlight",
    ru: "Next time we'll be ready!",
    en: "В следующий раз мы будем готовы!",
    a11y: "На крючке у двери фургона висит большой жёлтый фонарик.",
    image: p("flashlight"),
    steps: ["Свет вернулся в половине одиннадцатого.", "Вся улица захлопала.", "Мурзик покупает большой жёлтый фонарик.", "«На всякий случай. И для концертов в темноте»."],
    bridge: "Рэн говорит: «Вы должны попробовать курицу мисс Дот. Это то, ради чего люди едут в Нэшвилл. Только осторожно — она очень острая».",
  },
};

const nash4: Lesson = {
  id: "en-a2-nashville-4",
  level: "A2",
  cityId: "en-nashville",
  number: 4,
  title: "Miss Dot's hot chicken — Острая курица мисс Дот",
  minutes: 8,
  goals: ["Понять, как готовят блюдо", "While + Past Continuous на кухне", "Говорить об остроте"],
  vocabNote: "Hot здесь — «острый», а не «горячий». Mild — чуть острое, medium — средне, extra hot — очень острое.",
  vocab: [
    v("enna4-1", "How hot do you want it?", "Насколько острую вы хотите?", "Мисс Дот показывает на доску со шкалой остроты.", "Послушать How hot do you want it", p("l4-1")),
    v("enna4-2", "mild, medium or extra hot", "слабоострая, средняя или очень острая", "Три перца: зелёный, оранжевый и красный.", "Послушать mild, medium or extra hot", p("l4-2")),
    v("enna4-3", "cayenne pepper", "кайенский перец", "Банка ярко-красного молотого перца.", "Послушать cayenne pepper", p("l4-3")),
    v("enna4-4", "My grandmother was frying chicken when…", "Моя бабушка жарила курицу, когда…", "Старая фотография маленькой кухни.", "Послушать My grandmother was frying chicken when", p("l4-4")),
    v("enna4-5", "on white bread with pickles", "на белом хлебе с маринованными огурцами", "Кусок курицы на ломте хлеба, сверху огурчики.", "Послушать on white bread with pickles", p("l4-5")),
    v("enna4-6", "My mouth is on fire!", "У меня во рту пожар!", "Том хватается за стакан молока, лицо красное.", "Послушать My mouth is on fire", p("l4-6")),
    v("enna4-7", "Drink some milk, not water.", "Пей молоко, а не воду.", "Мисс Дот протягивает стакан молока.", "Послушать Drink some milk, not water", p("l4-7")),
    v("enna4-8", "It's worth it!", "Оно того стоит!", "Мурзик облизывается, хотя глаза слезятся.", "Послушать It's worth it", p("l4-8")),
  ],
  letters: [
    letter("cayenne = [кайЭн]", "Ударение на второй слог: cay-ENNE.", "cayenne pepper", "кайенский перец"),
    letter("worth = [уё:рс]", "or после w звучит как [ё:]: worth, work, word. th на конце — глухой.", "It's worth it!", "Оно того стоит!"),
  ],
  dialogue: {
    title: "Кафе мисс Дот",
    note: "Горячим маслом занимается только мисс Дот. Мурзик и Том смешивают специи и раскладывают огурцы.",
    lines: [
      line("dot", "Welcome, y'all! How hot do you want it? Mild, medium or extra hot?", "Добро пожаловать! Насколько острую хотите? Слабоострую, среднюю или очень острую?"),
      line("tom", "Extra hot, please!", "Очень острую, пожалуйста!"),
      line("murzik", "Mild for me. How did this recipe start, Miss Dot?", "Мне слабоострую. Мисс Дот, а как появился этот рецепт?"),
      line("dot", "My grandmother was frying chicken when she dropped a whole jar of cayenne pepper in the oil. Everyone laughed — then everyone loved it!", "Моя бабушка жарила курицу, когда уронила в масло целую банку кайенского перца. Все смеялись — а потом всем понравилось!"),
      line("dot", "We serve it on white bread with pickles. Here you go.", "Подаём на белом хлебе с маринованными огурцами. Вот, пожалуйста."),
      line("tom", "Mmm… Oh! My mouth is on fire!", "Ммм… Ой! У меня во рту пожар!"),
      line("dot", "Drink some milk, not water. But tell me — is it worth it?", "Пей молоко, а не воду. Но скажи — оно того стоит?"),
      line("tom", "It's worth it!", "Оно того стоит!"),
    ],
    gist: choice("enna4-d1", "Как появился рецепт острой курицы?", [
      ["Бабушка мисс Дот случайно уронила перец в масло.", true],
      ["Его придумала Рэн.", false],
      ["Его привезли из Мексики.", false],
    ]),
  },
  grammar: [
    {
      title: "Истории с when и while",
      paragraphs: [
        "Кто-то что-то делал (Past Continuous), когда случилось событие (Past Simple): My grandmother was frying chicken when she dropped the pepper.",
        "While + длинное действие: While she was cooking, the phone rang. Два длинных действия одновременно: While I was eating, Tom was drinking milk — оба действия длились одновременно.",
      ],
      examples: [
        { ru: "I was cutting bread when I cut my finger.", en: "Я резал(а) хлеб и порезал(а) палец." },
        { ru: "While Miss Dot was frying, we were making the sauce.", en: "Пока мисс Дот жарила, мы делали соус." },
      ],
    },
  ],
  tasks: [
    listen("enna4-t1", "Послушай. Что лучше пить, если очень остро?", "Drink some milk, not water. But tell me — is it worth it?", [
      ["Молоко.", true],
      ["Воду.", false],
      ["Лимонад.", false],
    ]),
    choice("enna4-t2", "Как сказать «Пока мисс Дот жарила, мы делали соус»?", [
      ["While Miss Dot was frying, we were making the sauce.", true],
      ["While Miss Dot fried, we was making the sauce.", false],
      ["When Miss Dot was fry, we made the sauce.", false],
    ], { skill: "grammar" }),
    fill("enna4-t3", "Выбери правильную форму: «Бабушка жарила курицу, когда уронила перец».", "My grandmother was frying chicken when she", "the pepper.", "dropped", ["dropped", "was dropping", "drop"], { skill: "grammar" }),
    read("enna4-t4", "Прочитай меню мисс Дот. Какая курица самая острая?", "MISS DOT'S HOT CHICKEN\nPlain — no heat\nMild — a little heat\nMedium — spicy!\nHot — very spicy!\nDragon Fire — for brave people only!", [
      ["Dragon Fire.", true],
      ["Mild.", false],
      ["Plain.", false],
    ]),
    match("enna4-t5", "Соедини пары.", [
      ["cayenne pepper", "кайенский перец"],
      ["My mouth is on fire!", "У меня во рту пожар!"],
      ["Drink some milk, not water.", "Пей молоко, а не воду."],
      ["It's worth it!", "Оно того стоит!"],
    ], { skill: "words" }),
    tf("enna4-t6", "Мурзик заказал очень острую курицу.", false, "listening"),
    speak("enna4-t7", "How hot do you want it?", "Medium, please. I like spicy food, but not too spicy. Could I have some milk too?", "Среднюю, пожалуйста. Я люблю острое, но не слишком. И можно ещё молока?", {
      help: "Закажи вслух курицу и скажи, насколько острую.",
    }),
  ],
  reward: {
    itemId: "spice-jar",
    itemName: "Банка смеси специй",
    itemNameRu: "Spice mix jar",
    ru: "Miss Dot's secret mix — handle with care!",
    en: "Секретная смесь мисс Дот — обращаться осторожно!",
    a11y: "На полке фургона стоит маленькая банка с красной смесью специй; на этикетке нарисован огонь и надпись HANDLE WITH CARE.",
    image: p("spice-jar"),
    steps: ["Мисс Дот насыпает им банку своей смеси.", "Кайенский перец, паприка и что-то секретное.", "На этикетке она пишет: «Осторожно!»", "Том больше никогда не заказывает очень острую."],
    bridge: "Рэн предлагает: «Давайте напишем песню про ваше кафе! Расскажите мне всё — с самого начала»."
  },
};

const nash5: Lesson = {
  id: "en-a2-nashville-5",
  level: "A2",
  cityId: "en-nashville",
  number: 5,
  title: "Writing a song — Пишем песню",
  minutes: 8,
  goals: ["Рассказать историю своего путешествия", "Связать события: when, while, after that", "Вспомнить прошлые города"],
  vocabNote: "A verse — куплет. A chorus — припев. Rhyme — рифма, рифмоваться.",
  vocab: [
    v("enna5-1", "Tell me everything from the beginning.", "Расскажите мне всё с самого начала.", "Рэн с тетрадкой и ручкой.", "Послушать Tell me everything from the beginning", p("l5-1")),
    v("enna5-2", "a verse", "куплет", "Тетрадь: блок строчек с надписью VERSE 1.", "Послушать a verse", p("l5-2")),
    v("enna5-3", "the chorus", "припев", "Тетрадь: строчки, обведённые звёздочкой — CHORUS.", "Послушать the chorus", p("l5-3")),
    v("enna5-4", "What rhymes with \"door\"?", "Что рифмуется с «door»?", "Мурзик задумчиво смотрит в потолок.", "Послушать What rhymes with door", p("l5-4")),
    v("enna5-5", "When we were in Galway, we won a prize.", "Когда мы были в Голуэе, мы выиграли приз.", "Зелёная розетка «Best Newcomer».", "Послушать When we were in Galway, we won a prize", p("l5-5")),
    v("enna5-6", "While we were driving along the coast…", "Пока мы ехали вдоль побережья…", "Жёлтый фургон на дороге вдоль океана.", "Послушать While we were driving along the coast", p("l5-6")),
    v("enna5-7", "That's a great line!", "Отличная строчка!", "Рэн восторженно записывает.", "Послушать That's a great line", p("l5-7")),
    v("enna5-8", "Let's try it from the top.", "Давайте с самого начала.", "Рэн берёт гитару и кивает.", "Послушать Let's try it from the top", p("l5-8")),
  ],
  letters: [
    letter("chorus = [кО:рэс]", "ch здесь читается как [к]: chorus, Christmas, school.", "the chorus", "припев"),
    letter("rhyme = [райм]", "h не читается, y = [ай]: rhyme [райм].", "What rhymes with door?", "Что рифмуется с door?"),
  ],
  dialogue: {
    title: "На ступеньках у фургона",
    note: "Рифмы к door: more, floor, before, four, store.",
    lines: [
      line("wren", "OK. Tell me everything from the beginning. How did it start?", "Хорошо. Расскажите мне всё с самого начала. Как это началось?"),
      line("tom", "Gran's old recipe book was missing some pages. We were looking for them when a letter came — a food festival in London!", "В бабушкиной старой книге рецептов не хватало страниц. Мы их искали, когда пришло письмо — фестиваль еды в Лондоне!"),
      line("murzik", "So we bought an old van in Brighton, and Lily painted it blue — like the door of Gran's café.", "Тогда мы купили старый фургон в Брайтоне, и Лили покрасила его в голубой — как дверь бабушкиного кафе."),
      line("tom", "When we were in Galway, we won a prize. And while we were driving to L.A., we got stuck in traffic for three hours!", "Когда мы были в Голуэе, мы выиграли приз. А пока мы ехали в Лос-Анджелес, мы три часа стояли в пробке!"),
      line("wren", "That's a great line! Verse one — London. Chorus — the blue door. What rhymes with \"door\"?", "Отличная строчка! Первый куплет — Лондон. Припев — синяя дверь. Что рифмуется с «door»?"),
      line("murzik", "\"More\"! \"We always come back for more\"!", "«More»! «Мы всегда возвращаемся за добавкой»!"),
      line("wren", "Perfect. Let's try it from the top.", "Идеально. Давайте с самого начала."),
    ],
    gist: choice("enna5-d1", "Где они выиграли приз?", [
      ["В Голуэе.", true],
      ["В Портленде.", false],
      ["В Нэшвилле.", false],
    ]),
  },
  grammar: [
    {
      title: "Рассказ о путешествии",
      paragraphs: [
        "Фон — Past Continuous: We were looking for the pages. We were driving to L.A. События — Past Simple: A letter came. Lily painted the van. We won a prize.",
        "Связки: when, while, then, after that, in the end. When we were in Galway… (were — было состояние, а не процесс).",
      ],
      examples: [
        { ru: "While we were driving to Austin, we saw a huge storm.", en: "Пока мы ехали в Остин, мы увидели огромную грозу." },
        { ru: "When we got to Seattle, it was raining.", en: "Когда мы приехали в Сиэтл, шёл дождь." },
      ],
    },
  ],
  tasks: [
    listen("enna5-t1", "Послушай. Сколько часов они стояли в пробке?", "And while we were driving to L.A., we got stuck in traffic for three hours!", [
      ["Три часа.", true],
      ["Ни одного.", false],
      ["Двенадцать часов.", false],
    ]),
    choice("enna5-t2", "Как сказать «Когда мы приехали в Сиэтл, шёл дождь»?", [
      ["When we got to Seattle, it was raining.", true],
      ["When we were getting to Seattle, it rained always.", false],
      ["When we got to Seattle, it raining.", false],
    ], { skill: "grammar" }),
    fill("enna5-t3", "Выбери правильную форму: «Бабушка искала свои страницы, когда пришло письмо».", "Gran", "looking for her pages when a letter came.", "was", ["was", "were", "did"], { skill: "grammar" }),
    read("enna5-t4", "Прочитай черновик песни. Что в припеве?", "BLUE DOOR (draft)\nVerse 1: A blue door in London, a cat and a friend…\nChorus: Blue door, blue door — we always come back for more!\nVerse 2: Galway rain and a green rosette…", [
      ["«Синяя дверь — мы всегда возвращаемся за добавкой».", true],
      ["«Синяя дверь в Лондоне, кот и друг».", false],
      ["«Дождь в Голуэе и зелёная розетка».", false],
    ]),
    match("enna5-t5", "Соедини пары.", [
      ["a verse", "куплет"],
      ["the chorus", "припев"],
      ["That's a great line!", "Отличная строчка!"],
      ["Let's try it from the top.", "Давайте с самого начала."],
    ], { skill: "words" }),
    tf("enna5-t6", "Мурзик придумал рифму «more».", true, "listening"),
    speak("enna5-t7", "Tell me the story of a trip you took.", "When I was in Rome last year, it was very hot. While I was walking to the Colosseum, I met an old friend from school!", "Когда я был(а) в Риме в прошлом году, было очень жарко. Пока я шёл (шла) к Колизею, я встретил(а) старого школьного друга!", {
      help: "Расскажи вслух историю поездки: when…, while…",
    }),
  ],
  reward: {
    itemId: "songbook",
    itemName: "Тетрадь с песней",
    itemNameRu: "Songbook",
    ru: "Our own song — \"Blue Door\"!",
    en: "Наша собственная песня — «Синяя дверь»!",
    a11y: "На столике в фургоне лежит потрёпанная тетрадь Рэн, открытая на странице «BLUE DOOR» с куплетами, припевом и рисунками на полях.",
    image: p("songbook"),
    steps: ["К полуночи песня готова: три куплета и припев.", "Рэн дарит им страницы из своей тетради.", "На полях Мурзик рисует синюю дверь и фургон.", "Завтра — вечер открытого микрофона."],
    bridge: "«Завтра вы споёте её со мной, — говорит Рэн. — Нет, не спорьте. Вы оба».",
  },
};

const nash6: Lesson = {
  id: "en-a2-nashville-6",
  level: "A2",
  cityId: "en-nashville",
  number: 6,
  title: "Open mic night — Открытый микрофон",
  minutes: 8,
  goals: ["Рассказать, как прошёл вечер", "Оставить отзыв", "Похвалить и честно покритиковать"],
  vocabNote: "Review — отзыв. Five stars — пять звёзд, высшая оценка. I'd recommend it — я бы посоветовал(а).",
  vocab: [
    v("enna6-1", "an open mic night", "вечер открытого микрофона", "Маленькая сцена, табличка OPEN MIC — SIGN UP HERE.", "Послушать an open mic night", p("l6-1")),
    v("enna6-2", "My knees were shaking.", "У меня тряслись колени.", "Мурзик на сцене, колени дрожат.", "Послушать My knees were shaking", p("l6-2")),
    v("enna6-3", "We forgot the second verse!", "Мы забыли второй куплет!", "Том и Мурзик переглядываются в панике.", "Послушать We forgot the second verse", p("l6-3")),
    v("enna6-4", "The audience sang along.", "Зрители подпевали.", "Весь зал поёт вместе.", "Послушать The audience sang along", p("l6-4")),
    v("enna6-5", "a standing ovation", "овация стоя", "Зрители аплодируют стоя.", "Послушать a standing ovation", p("l6-5")),
    v("enna6-6", "a bit too long", "немного затянуто", "Человек в зале зевает.", "Послушать a bit too long", p("l6-6")),
    v("enna6-7", "I'd give it five stars.", "Я бы поставил(а) пять звёзд.", "Пять золотых звёзд на экране телефона.", "Послушать I'd give it five stars", p("l6-7")),
    v("enna6-8", "I'd highly recommend it.", "Очень рекомендую.", "Палец над кнопкой POST REVIEW.", "Послушать I'd highly recommend it", p("l6-8")),
  ],
  letters: [
    letter("audience = [О:диэнс]", "au = [о:], ударение на первый слог.", "the audience", "зрители"),
    letter("recommend = [рэкэмЭнд]", "Ударение на последний слог: re-com-MEND.", "I'd recommend it.", "Я бы посоветовал(а)."),
  ],
  dialogue: {
    title: "После выступления",
    note: "Мурзик и Том спели «Blue Door» вместе с Рэн на открытом микрофоне в кафе мисс Дот. Теперь они читают отзывы в интернете.",
    lines: [
      line("murzik", "My knees were shaking! And then we forgot the second verse!", "У меня тряслись колени! А потом мы забыли второй куплет!"),
      line("wren", "But the audience sang along. Nobody noticed! And we got a standing ovation!", "Но зрители подпевали. Никто не заметил! И нам аплодировали стоя!"),
      line("tom", "Look, Miss Dot's café already has new reviews. Listen: \"It was amazing! A cat singing about a blue door. I'd give it five stars.\"", "Смотри, у кафе мисс Дот уже новые отзывы. Слушайте: «Это было потрясающе! Кот поёт о синей двери. Ставлю пять звёзд»."),
      line("murzik", "And this one? \"The song was great, but a bit too long.\"", "А этот? «Песня отличная, но немного затянута»."),
      line("wren", "That's fair. We sang the chorus for ten minutes!", "Справедливо. Мы пели припев десять минут!"),
      line("tom", "\"I'd highly recommend it. Come for the music, stay for the hot chicken.\"", "«Очень рекомендую. Приходите ради музыки, оставайтесь ради острой курицы»."),
    ],
    gist: choice("enna6-d1", "Что заметили зрители, когда они забыли куплет?", [
      ["Ничего — все подпевали.", true],
      ["Все ушли.", false],
      ["Все засмеялись.", false],
    ]),
  },
  grammar: [
    {
      title: "Отзыв: что было и как",
      paragraphs: [
        "Что было — Past Simple и Continuous: My knees were shaking. We forgot the second verse. The audience sang along.",
        "Оценка: It was amazing / great / OK / a bit disappointing. A bit too long / too loud. I'd give it five stars. I'd (highly) recommend it.",
      ],
      examples: [
        { ru: "The food was great, but the music was a bit too loud.", en: "Еда отличная, но музыка немного громковата." },
        { ru: "I'd give it four stars. I'd recommend it.", en: "Я бы поставил(а) четыре звезды. Советую." },
      ],
    },
  ],
  tasks: [
    listen("enna6-t1", "Послушай. Сколько минут они пели припев?", "That's fair. We sang the chorus for ten minutes!", [
      ["Десять минут.", true],
      ["Две минуты.", false],
      ["Час.", false],
    ]),
    choice("enna6-t2", "Как написать в отзыве «Еда отличная, но музыка немного громковата»?", [
      ["The food was great, but the music was a bit too loud.", true],
      ["The food was great, but the music was a bit too much loud.", false],
      ["The food great, but music a bit loud too.", false],
    ], { skill: "grammar" }),
    fill("enna6-t3", "Выбери правильное слово: «Я бы поставил(а) пять звёзд».", "I'd", "it five stars.", "give", ["give", "gave", "giving"], { skill: "grammar" }),
    read("enna6-t4", "Прочитай отзыв. Что не понравилось автору?", "★★★★☆ \"Great night! The cat was so funny and the hot chicken was amazing. The only problem — the place was a bit too crowded. I'd still recommend it!\" — Kim", [
      ["Было слишком много людей.", true],
      ["Курица была плохая.", false],
      ["Кот плохо пел.", false],
    ]),
    match("enna6-t5", "Соедини пары.", [
      ["My knees were shaking.", "У меня тряслись колени."],
      ["The audience sang along.", "Зрители подпевали."],
      ["a bit too long", "немного затянуто"],
      ["I'd highly recommend it.", "Очень рекомендую."],
    ], { skill: "words" }),
    tf("enna6-t6", "Все отзывы только хорошие, без критики.", false, "listening"),
    speak("enna6-t7", "Give me a short review of a café or concert you went to.", "It was amazing! The music was great, but it was a bit too loud. I'd give it four stars, and I'd recommend it.", "Было потрясающе! Музыка отличная, но немного громковато. Я бы поставил(а) четыре звезды и советую.", {
      help: "Скажи вслух короткий отзыв: что понравилось, что нет, сколько звёзд.",
    }),
  ],
  reward: {
    itemId: "open-mic-ticket",
    itemName: "Пропуск на сцену",
    itemNameRu: "Open mic pass",
    ru: "We sang on a Nashville stage!",
    en: "Мы пели на сцене в Нэшвилле!",
    a11y: "На зеркале фургона висит пропуск на шнурке: OPEN MIC — PERFORMER, с подписью Рэн.",
    image: p("open-mic-ticket"),
    steps: ["Каждому исполнителю дают пропуск.", "Мурзик свой не снимает до утра.", "Рэн расписывается на обоих.", "«Теперь вы музыканты из Нэшвилла. Почти»."],
    bridge: "Последний день. Мисс Дот стучит в окошко фургона с бумажным пакетом и листком в руке.",
  },
};

const nash7: Lesson = {
  id: "en-a2-nashville-7",
  level: "A2",
  cityId: "en-nashville",
  number: 7,
  title: "Nashville exam — Экзамен: Нэшвилл",
  minutes: 9,
  goals: ["Понять длинный рассказ на слух", "Рассказать историю в прошлом", "Повторить всё из Нэшвилла"],
  vocabNote: "Урок 7 — экзамен города: длинная аудиоистория и повторение всего из Нэшвилла.",
  vocab: [
    v("enna7-1", "Our sixteenth recipe!", "Наш шестнадцатый рецепт!", "Мурзик держит карточку с рецептом острой курицы.", "Послушать Our sixteenth recipe", p("l7-1")),
    v("enna7-2", "a recording", "запись (песни)", "Телефон Рэн с файлом BLUE DOOR.mp3.", "Послушать a recording", p("l7-2")),
    v("enna7-3", "I recorded it while you were singing.", "Я записала, пока вы пели.", "Рэн показывает на телефон.", "Послушать I recorded it while you were singing", p("l7-3")),
    v("enna7-4", "Play it at the festival!", "Включите её на фестивале!", "Рэн подмигивает.", "Послушать Play it at the festival", p("l7-4")),
    v("enna7-5", "Florida", "Флорида", "Карта: дорога на юго-восток, к океану.", "Послушать Florida", p("l7-5")),
    v("enna7-6", "the last city before home", "последний город перед домом", "Карта с отмеченным Майами.", "Послушать the last city before home", p("l7-6")),
    v("enna7-7", "Take this for the road.", "Возьмите это в дорогу.", "Мисс Дот протягивает бумажный пакет.", "Послушать Take this for the road", p("l7-7")),
    v("enna7-8", "Keep singing!", "Продолжайте петь!", "Рэн машет гитарой.", "Послушать Keep singing", p("l7-8")),
  ],
  letters: [
    letter("record = [рикО:рд] / [рЭкэрд]", "Глагол record — ударение на второй слог: re-CORD. Существительное a record — на первый: RE-cord.", "I recorded it.", "Я это записала."),
  ],
  dialogue: {
    title: "Прощание у фургона",
    note: "Майами — последний город поездки по Америке. Оттуда они полетят домой, в Лондон, на фестиваль.",
    lines: [
      line("dot", "Take this for the road. And here's my recipe for your book.", "Возьмите это в дорогу. А вот мой рецепт для вашей книги."),
      line("murzik", "Our sixteenth recipe! Thank you, Miss Dot.", "Наш шестнадцатый рецепт! Спасибо, мисс Дот."),
      line("wren", "And I've got something for you. I recorded it while you were singing.", "А у меня для вас кое-что есть. Я записала, пока вы пели."),
      line("tom", "\"Blue Door\"! Gran will cry again.", "«Синяя дверь»! Бабушка снова расплачется."),
      line("wren", "Play it at the festival! Where are you going now?", "Включите её на фестивале! А куда вы теперь?"),
      line("tom", "To Florida — to Miami. The last city before home.", "Во Флориду — в Майами. Последний город перед домом."),
      line("wren", "Keep singing, you two!", "Продолжайте петь, вы оба!"),
    ],
    gist: choice("enna7-d1", "Что Рэн дарит им на прощание?", [
      ["Запись их песни.", true],
      ["Свою гитару.", false],
      ["Острую курицу.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем Нэшвилл",
      paragraphs: [
        "Past Continuous + when + Past Simple: We were serving dinner when the lights went out. While + Past Continuous: I recorded it while you were singing. Два длинных действия: While Dot was frying, we were making the sauce.",
        "Рассказ: first, then, after that, in the end. Отзыв: It was amazing. A bit too long. I'd give it five stars. I'd highly recommend it.",
      ],
      examples: [
        { ru: "We were leaving Nashville when Wren called.", en: "Мы уезжали из Нэшвилла, когда позвонила Рэн." },
        { ru: "While Tom was driving, Murzik was singing \"Blue Door\".", en: "Пока Том вёл фургон, Мурзик пел «Синюю дверь»." },
      ],
    },
  ],
  tasks: [
    listen("enna7-t1", "Аудиоистория: мисс Дот рассказывает о своём кафе. Сколько лет кафе?", "My grandmother opened this café seventy years ago. I was washing dishes here when I was six. When I was twenty, I started frying chicken. Now my granddaughter is learning. While she's cooking, I'm telling stories. And every night someone comes in and says: \"My mouth is on fire!\"", [
      ["Семьдесят лет.", true],
      ["Двадцать лет.", false],
      ["Шесть лет.", false],
    ]),
    listen("enna7-t2", "Послушай ещё раз. Что делала мисс Дот в шесть лет?", "I was washing dishes here when I was six. When I was twenty, I started frying chicken.", [
      ["Мыла посуду в кафе.", true],
      ["Жарила курицу.", false],
      ["Пела на улице.", false],
    ]),
    choice("enna7-t3", "Как сказать «Мы уезжали из Нэшвилла, когда позвонила Рэн»?", [
      ["We were leaving Nashville when Wren called.", true],
      ["We left Nashville when Wren was call.", false],
      ["We were leave Nashville when Wren calling.", false],
    ], { skill: "grammar" }),
    read("enna7-t4", "Прочитай маршрут. Сколько дней ехать до Майами?", "NASHVILLE → MIAMI (about 950 miles)\nDay 1: Nashville → Atlanta → Valdosta\nDay 2: Valdosta → Orlando → Miami", [
      ["Два дня.", true],
      ["Один день.", false],
      ["Неделю.", false],
    ]),
    script("enna7-t5", "Попрощайся с Рэн и мисс Дот.", [
      { speaker: "Рэн", text: "Keep singing, you two!" },
      { speaker: "Ты", answer: "We will! It was the best night ever.", options: ["We will! It was the best night ever.", "We will! My knees was shaking.", "We will! Mild, please."] },
      { speaker: "Мисс Дот", text: "Take this for the road." },
      { speaker: "Ты", answer: "Thank you! I'd give your chicken five stars.", options: ["Thank you! I'd give your chicken five stars.", "Thank you! I give your chicken five stars yesterday.", "Thank you! The lights went out."] },
    ], { skill: "review" }),
    match("enna7-t6", "Повторяем Нэшвилл: соедини пары.", [
      ["a songwriter", "автор песен"],
      ["a power outage", "отключение электричества"],
      ["cayenne pepper", "кайенский перец"],
      ["the chorus", "припев"],
    ], { skill: "review" }),
    speak("enna7-t7", "Tell me about the best evening you remember.", "I was walking home when I heard music. A band was playing in the square, and people were dancing. I stayed till midnight — it was the best night ever!", "Я шёл (шла) домой, когда услышал(а) музыку. На площади играла группа, люди танцевали. Я остался (осталась) до полуночи — это был лучший вечер!", {
      help: "Расскажи вслух о лучшем вечере: was / were + -ing и when.",
    }),
  ],
  reward: {
    itemId: "recipe-hot-chicken",
    itemName: "Рецепт «Hot chicken»",
    itemNameRu: "Hot chicken recipe card",
    ru: "Our sixteenth recipe — handle with care!",
    en: "Наш шестнадцатый рецепт — обращаться осторожно!",
    a11y: "Карточка с рецептом острой курицы вклеена на шестнадцатую страницу голубой тетради; в углу — нарисованный огонёк и надпись MILK!",
    image: p("recipe-hot-chicken"),
    steps: ["Мурзик вклеивает рецепт мисс Дот на шестнадцатую страницу.", "В углу она нарисовала огонёк и написала: MILK!", "В телефоне у Тома — запись «Blue Door».", "Жёлтый фургон едет на юг. Последний город перед домом."],
  },
};

const story: CityStory = {
  home: {
    name: "Фургон у музыкальных баров",
    nameRu: "The van by the music bars",
    image: p("home"),
    a11y: "Жёлтый фургон «Sunny» стоит на улице с неоновыми вывесками в форме гитар и сапог.",
  },
  keepsakeId: "recipe-hot-chicken",
  welcomeRu: "Hello, Nashville!",
  welcomeEn: "Привет, Нэшвилл!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том в Нэшвилле: неоновые вывески, гитары в витринах и музыка из каждой двери.",
  departureImage: p("departure"),
  departureA11y: "Рэн с гитарой и мисс Дот с бумажным пакетом машут жёлтому фургону; в окошке светится неоновая гитара.",
  finale: [
    {
      image: p("finale-1"),
      a11y: "В фургоне уютно: неоновая гитара, листок со словами песни, фонарик, банка специй, тетрадь с песней, пропуск на сцену и рецепт острой курицы.",
      lines: [
        { en: "Темнота, острый перец и своя песня — Нэшвилл не забудешь." },
        { en: "В книге дороги шестнадцатый рецепт: острая курица мисс Дот." },
      ],
    },
    {
      image: p("finale-2"),
      a11y: "Мурзик, Том и Рэн поют на маленькой сцене; зрители подпевают при свете телефонов.",
      lines: [
        { ru: "Nashville complete!", en: "Нэшвилл пройден!" },
        { en: "7 / 7 уроков" },
        { ru: "We were serving dinner when the lights went out — and the whole street sang along!", en: "Мы подавали ужин, когда погас свет, — и вся улица пела вместе с нами!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Рэн с гитарой и мисс Дот с бумажным пакетом машут жёлтому фургону; в окошке светится неоновая гитара.",
      lines: [
        { ru: "Goodbye, Nashville! Thank you, Wren and Miss Dot!", en: "До свидания, Нэшвилл! Спасибо, Рэн и мисс Дот!" },
        { ru: "Next stop: Miami!", en: "Следующая остановка: Майами!" },
      ],
    },
    {
      image: p("finale-4"),
      a11y: "Жёлтый фургон едет на юг среди пальм и болот; впереди — океан.",
      lines: [{ ru: "Nashville → Miami", en: "Нэшвилл → Майами" }],
    },
    {
      image: pic("en/miami/arrival"),
      a11y: "Мурзик и Том в Майами: бирюзовый океан, белый песок, пальмы и пастельные домики.",
      lines: [{ ru: "Hello, Miami!", en: "Привет, Майами!" }],
    },
  ],
};

export const enNashville = {
  id: "en-nashville",
  name: "Нэшвилл",
  nameEn: "Nashville",
  lessons: [nash1, nash2, nash3, nash4, nash5, nash6, nash7],
  story,
};
