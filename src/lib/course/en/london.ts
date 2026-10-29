import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, fill, letter, line, listen, match, missing, script, speak, spell, tf, v } from "../tr/make";

/* Лондон · «Первые слова» · Мурзик и Том приезжают к бабушке Тома, миссис Хоуп. Алфавит, приветствия, вежливые слова, числа. */

const p = (name: string) => pic(`en/london/${name}`);

const london1: Lesson = {
  id: "en-a1-london-1",
  level: "A1",
  cityId: "en-london",
  number: 1,
  title: "Hello! — Привет!",
  minutes: 6,
  goals: ["Поздороваться", "Спросить, как зовут, и назвать себя", "Сказать «Очень приятно»"],
  vocabNote: "Hello подходит всем. Hi — проще, так здороваются с друзьями. I'm — короткое I am, «я (есть)».",
  vocab: [
    v("enlo1-1", "Hello!", "Здравствуйте! / Привет!", "Мурзик на вокзале улыбается и машет лапой.", "Послушать Hello", p("l1-1"), "[хэлоу]"),
    v("enlo1-2", "Hi!", "Привет! (другу)", "Мурзик весело машет Тому.", "Послушать Hi", p("l1-2"), "[хай]"),
    v("enlo1-3", "What's your name?", "Как тебя зовут?", "Пожилая дама в шляпке с любопытством наклоняется к Мурзику.", "Послушать What's your name", p("l1-3"), "[уотс ё нэйм]"),
    v("enlo1-4", "My name is Murzik.", "Меня зовут Мурзик.", "Мурзик прикладывает лапу к груди и гордо называет своё имя.", "Послушать My name is Murzik", p("l1-4"), "[май нэйм из мурзик]"),
    v("enlo1-5", "I'm Tom.", "Я Том.", "Том показывает на себя и улыбается.", "Послушать I'm Tom", p("l1-5"), "[айм том]"),
    v("enlo1-6", "Nice to meet you.", "Очень приятно.", "Мурзик и пожилая дама пожимают друг другу руку и лапу.", "Послушать Nice to meet you", p("l1-6"), "[найс ту мит ю]"),
    v("enlo1-7", "Nice to meet you too.", "Мне тоже очень приятно.", "Дама в шляпке тепло улыбается в ответ.", "Послушать Nice to meet you too", p("l1-7"), "[найс ту мит ю ту]"),
  ],
  letters: [
    letter("A a", "в алфавите — «эй»; в словах часто «э» или «а»", "name", "имя", "В слове name буква a читается «эй»: [нэйм]."),
    letter("B b", "как «б»", "Bye!", "Пока!"),
    letter("C c", "перед e, i — «с», в остальных случаях — «к»", "nice", "приятный", "nice — [найс], а cat — [кэт]."),
    letter("D d", "как «д»", "Hello, dear!", "Здравствуй, дорогой!"),
    letter("E e", "в алфавите — «и»; в словах часто «э»", "meet", "встречать", "Две e подряд читаются как долгое «и»: meet — [мит]."),
  ],
  dialogue: {
    title: "На вокзале",
    note: "Gran — «бабуля», так Том ласково зовёт бабушку. Welcome, Murzik! — «Добро пожаловать, Мурзик!»",
    lines: [
      line("tom", "Gran! Hello!", "Бабуля! Привет!"),
      line("hope", "Tom! Hello, dear! And who is this?", "Том! Здравствуй, дорогой! А это кто?"),
      line("murzik", "Hello! My name is Murzik.", "Здравствуйте! Меня зовут Мурзик."),
      line("hope", "Welcome, Murzik! I'm Mrs Hope. Nice to meet you.", "Добро пожаловать, Мурзик! Я миссис Хоуп. Очень приятно."),
      line("murzik", "Nice to meet you too!", "Мне тоже очень приятно!"),
      line("hope", "Welcome to London!", "Добро пожаловать в Лондон!"),
    ],
    gist: choice("enlo1-d1", "Кто встречает Мурзика и Тома?", [
      ["Бабушка Тома.", true],
      ["Мама Тома.", false],
      ["Таксист.", false],
    ]),
  },
  grammar: [
    {
      title: "I'm — «я (есть)»",
      paragraphs: [
        "В русском говорят просто «Я Том». В английском между «я» и «Том» обязательно стоит глагол am — «есть»: I am Tom. Коротко: I'm Tom.",
        "Без него нельзя: «I Tom» — ошибка. Это первое большое отличие английского от русского.",
      ],
      examples: [
        { ru: "I'm Murzik.", en: "Я Мурзик." },
        { ru: "I'm Mrs Hope.", en: "Я миссис Хоуп." },
      ],
    },
  ],
  tasks: [
    choice("enlo1-t1", "Как сказать «Я Том»?", [
      ["I'm Tom.", true],
      ["I Tom.", false],
      ["Me Tom.", false],
    ], { skill: "grammar" }),
    listen("enlo1-t2", "Послушай. Что это значит?", "What's your name?", [
      ["Как тебя зовут?", true],
      ["Как дела?", false],
      ["Кто это?", false],
    ]),
    match("enlo1-t3", "Соедини пары.", [
      ["Hello!", "Здравствуйте!"],
      ["Hi!", "Привет!"],
      ["Nice to meet you.", "Очень приятно."],
      ["My name is…", "Меня зовут…"],
    ], { skill: "words" }),
    spell("enlo1-t4", "Собери из букв имя Тома.", "Tom"),
    speak("enlo1-t5", "Hello! What's your name?", "Hello! My name is Alex.", "Здравствуйте! Меня зовут Алекс.", { help: "Ответь вслух и назови своё имя." }),
    script("enlo1-t6", "Закончи мини-диалог.", [
      { speaker: "Миссис Хоуп", text: "Hello! I'm Mrs Hope. What's your name?" },
      { speaker: "Ты", answer: "My name is Alex.", options: ["My name is Alex.", "Nice to meet you too.", "What's your name?"] },
      { speaker: "Миссис Хоуп", text: "Nice to meet you!" },
      { speaker: "Ты", answer: "Nice to meet you too!", options: ["Nice to meet you too!", "Hi!", "I'm Tom."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cup",
    itemName: "Чайная пара",
    itemNameRu: "Cup and saucer",
    ru: "Hooray! A cup and saucer!",
    en: "Ура! Чашка с блюдцем!",
    a11y: "Мурзик в своей новой комнате держит фарфоровую чашку с блюдцем в мелкий голубой цветочек.",
    image: p("cup"),
    steps: ["Миссис Хоуп ведёт Мурзика в его комнату.", "На столе — чашка с блюдцем в голубой цветочек.", "«For you, dear!» — «Это тебе, дорогой!»", "Мурзик бережно ставит её на подоконник."],
    bridge: "Утром из кухни пахнет чем-то вкусным. Миссис Хоуп уже не спит.",
  },
};

const london2: Lesson = {
  id: "en-a1-london-2",
  level: "A1",
  cityId: "en-london",
  number: 2,
  title: "How are you? — Как дела?",
  minutes: 6,
  goals: ["Поздороваться утром", "Спросить, как дела", "Ответить: отлично, хорошо, неплохо, так себе"],
  vocabNote: "На вопрос How are you? англичане почти всегда отвечают коротко и бодро: I'm fine, thanks. And you?",
  vocab: [
    v("enlo2-1", "Good morning!", "Доброе утро!", "Миссис Хоуп в фартуке открывает окно, светит утреннее солнце.", "Послушать Good morning", p("l2-1"), "[гуд мо́нинг]"),
    v("enlo2-2", "How are you?", "Как дела?", "Миссис Хоуп ласково смотрит на Мурзика поверх очков.", "Послушать How are you", p("l2-2"), "[хау а ю]"),
    v("enlo2-3", "I'm fine, thanks.", "Хорошо, спасибо.", "Мурзик спокойно улыбается и показывает большой палец.", "Послушать I'm fine, thanks", p("l2-3"), "[айм файн, сэнкс]"),
    v("enlo2-4", "I'm great!", "Отлично!", "Мурзик подпрыгивает от радости, подняв обе лапы.", "Послушать I'm great", p("l2-4"), "[айм грэйт]"),
    v("enlo2-5", "Not bad.", "Неплохо.", "Том пожимает плечами и улыбается.", "Послушать Not bad", p("l2-5"), "[нот бэд]"),
    v("enlo2-6", "So-so.", "Так себе.", "Том, сонный и растрёпанный, покачивает рукой туда-сюда.", "Послушать So-so", p("l2-6"), "[со́у-со́у]"),
    v("enlo2-7", "And you?", "А ты? / А вы?", "Мурзик дружелюбно показывает лапой на миссис Хоуп.", "Послушать And you", p("l2-7"), "[энд ю]"),
  ],
  letters: [
    letter("F f", "как «ф»", "fine", "хорошо"),
    letter("G g", "перед e, i часто «дж», в остальных случаях — «г»", "good", "хороший", "good — [гуд], а orange — [о́риндж]."),
    letter("H h", "лёгкий выдох, похоже на «х»", "Hello!", "Привет!"),
    letter("I i", "в алфавите — «ай»; в словах часто «и»", "fine", "хорошо", "В слове fine буква i читается «ай»: [файн]."),
    letter("J j", "как «дж»", "jam", "джем"),
  ],
  dialogue: {
    title: "Утро на кухне",
    note: "You — и «ты», и «вы»: в английском это одно слово. Вежливость слышна в тоне и в словах please и thank you.",
    lines: [
      line("hope", "Good morning, Murzik!", "Доброе утро, Мурзик!"),
      line("murzik", "Good morning, Mrs Hope!", "Доброе утро, миссис Хоуп!"),
      line("hope", "How are you?", "Как дела?"),
      line("murzik", "I'm great, thanks! And you?", "Отлично, спасибо! А у вас?"),
      line("hope", "I'm fine, thank you. Tom! How are you?", "Хорошо, спасибо. Том! А ты как?"),
      line("tom", "So-so… I'm sleepy!", "Так себе… Я сонный!"),
    ],
    gist: choice("enlo2-d1", "Как дела у Тома?", [
      ["Так себе, он сонный.", true],
      ["Отлично.", false],
      ["Хорошо, спасибо.", false],
    ]),
  },
  grammar: [
    {
      title: "You — и «ты», и «вы»",
      paragraphs: [
        "В английском одно слово you и для друга, и для взрослого незнакомого человека: How are you? — «Как ты?» и «Как вы?»",
        "Вежливость показывают другими словами: thank you, please, Mrs Hope (а не просто Hope).",
      ],
      examples: [
        { ru: "How are you, Tom?", en: "Как дела, Том?" },
        { ru: "How are you, Mrs Hope?", en: "Как поживаете, миссис Хоуп?" },
      ],
    },
  ],
  tasks: [
    listen("enlo2-t1", "Послушай. Как дела у говорящего?", "Not bad.", [
      ["Неплохо.", true],
      ["Отлично.", false],
      ["Плохо.", false],
    ]),
    match("enlo2-t2", "Соедини пары.", [
      ["I'm fine.", "Хорошо."],
      ["I'm great!", "Отлично!"],
      ["So-so.", "Так себе."],
      ["Not bad.", "Неплохо."],
    ], { skill: "words" }),
    tf("enlo2-t3", "You значит и „ты“, и „вы“.", true, "grammar"),
    missing("enlo2-t4", "Какой буквы не хватает? («хорошо»)", "", "ine", "f", ["f", "d", "p"]),
    speak("enlo2-t5", "Good morning! How are you?", "Good morning! I'm fine, thanks. And you?", "Доброе утро! Хорошо, спасибо. А у вас?", { help: "Ответь вслух и спроси в ответ." }),
    choice("enlo2-t6", "Миссис Хоуп говорит: Nice to meet you! Что ответить?", [
      ["Nice to meet you too!", true],
      ["What's your name?", false],
      ["So-so.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cushion",
    itemName: "Вязаная подушка",
    itemNameRu: "Cushion",
    ru: "Hooray! A cushion!",
    en: "Ура! Подушка!",
    a11y: "Мурзик уютно устроился в кресле на мягкой вязаной подушке в красно-белую клетку.",
    image: p("cushion"),
    steps: ["Миссис Хоуп приносит вязаную подушку.", "«I made it. Long ago.» — «Я её связала. Давным-давно».", "Мурзик кладёт подушку в кресло.", "Как мягко!"],
    bridge: "За завтраком Том дарит Мурзику маленький подарок.",
  },
};

const london3: Lesson = {
  id: "en-a1-london-3",
  level: "A1",
  cityId: "en-london",
  number: 3,
  title: "Please, thank you, sorry — Вежливые слова",
  minutes: 6,
  goals: ["Поблагодарить и ответить на «спасибо»", "Попросить вежливо", "Извиниться и сказать «ничего страшного»"],
  vocabNote: "Англичане говорят please, thank you и sorry очень часто — гораздо чаще, чем по-русски. Это важная часть вежливости.",
  vocab: [
    v("enlo3-1", "Thank you!", "Спасибо!", "Мурзик держит маленькую коробку с подарком и благодарно улыбается Тому.", "Послушать Thank you", p("l3-1"), "[сэнк ю]"),
    v("enlo3-2", "Thanks!", "Спасибо! (проще)", "Мурзик весело показывает Тому большой палец.", "Послушать Thanks", p("l3-2"), "[сэнкс]"),
    v("enlo3-3", "You're welcome.", "Пожалуйста. (в ответ на «спасибо»)", "Том тепло улыбается и делает скромный жест рукой.", "Послушать You're welcome", p("l3-3"), "[ё уэлкам]"),
    v("enlo3-4", "Tea, please.", "Чай, пожалуйста.", "Мурзик вежливо протягивает чашку.", "Послушать Tea, please", p("l3-4"), "[ти, плиз]"),
    v("enlo3-5", "Sorry!", "Извините! / Прости!", "Том случайно наступил Мурзику на хвост и виновато поднимает ногу.", "Послушать Sorry", p("l3-5"), "[со́ри]"),
    v("enlo3-6", "Excuse me.", "Простите. (чтобы пройти или спросить)", "Мурзик вежливо поднимает лапу, чтобы пройти мимо дамы в узком коридоре.", "Послушать Excuse me", p("l3-6"), "[икскью́з ми]"),
    v("enlo3-7", "That's OK.", "Ничего страшного.", "Мурзик улыбается и добродушно машет хвостом: всё в порядке.", "Послушать That's OK", p("l3-7"), "[зэтс оу-кэй]"),
  ],
  letters: [
    letter("K k", "как «к»", "OK", "хорошо"),
    letter("L l", "как «л»", "please", "пожалуйста"),
    letter("M m", "как «м»", "me", "меня, мне"),
    letter("N n", "как «н»", "thank you", "спасибо"),
    letter("O o", "в алфавите — «оу»; в словах часто «о» или «а»", "sorry", "прости", "OK читается [оу-кэй]."),
  ],
  dialogue: {
    title: "Подарок",
    note: "Звук th (thank, that) — особый: кончик языка между зубами. По-русски похоже то на «с», то на «з», но лучше попробовать сказать его правильно.",
    lines: [
      line("tom", "Murzik, this is for you.", "Мурзик, это тебе."),
      line("murzik", "Oh! Thank you!", "Ой! Спасибо!"),
      line("tom", "You're welcome.", "Пожалуйста."),
      line("tom", "Oh! Sorry!", "Ой! Прости!"),
      line("murzik", "That's OK.", "Ничего страшного."),
      line("hope", "Tea, Murzik?", "Чаю, Мурзик?"),
      line("murzik", "Yes, please! Thanks!", "Да, пожалуйста! Спасибо!"),
    ],
    gist: choice("enlo3-d1", "Что случилось с хвостом Мурзика?", [
      ["Том случайно на него наступил.", true],
      ["Его прищемило дверью.", false],
      ["Ничего не случилось.", false],
    ]),
  },
  grammar: [
    {
      title: "Please или you're welcome?",
      paragraphs: [
        "В русском «пожалуйста» — и просьба, и ответ на «спасибо». В английском это разные слова.",
        "Просишь — please: Tea, please. Отвечаешь на «спасибо» — you're welcome: Thank you! — You're welcome.",
      ],
      examples: [
        { ru: "Coffee, please.", en: "Кофе, пожалуйста." },
        { ru: "Thank you! — You're welcome.", en: "Спасибо! — Пожалуйста." },
      ],
    },
  ],
  tasks: [
    choice("enlo3-t1", "Тебе говорят: Thank you! Что ответить?", [
      ["You're welcome.", true],
      ["Please.", false],
      ["Excuse me.", false],
    ], { skill: "grammar" }),
    listen("enlo3-t2", "Послушай. Что говорят?", "Sorry!", [
      ["Извините!", true],
      ["Спасибо!", false],
      ["Пожалуйста!", false],
    ]),
    tf("enlo3-t3", "Excuse me говорят, чтобы пройти или обратиться к незнакомому человеку.", true),
    missing("enlo3-t4", "Какой буквы не хватает? («пожалуйста» в просьбе)", "p", "ease", "l", ["l", "r", "n"]),
    speak("enlo3-t5", "Sorry!", "That's OK.", "Ничего страшного.", { help: "Ответь вслух." }),
    choice("enlo3-t6", "Как сказать «Доброе утро!»?", [
      ["Good morning!", true],
      ["Good night!", false],
      ["How are you?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "jam",
    itemName: "Банка клубничного джема",
    itemNameRu: "Jam",
    ru: "Hooray! A jar of jam!",
    en: "Ура! Банка джема!",
    a11y: "На полке стоит стеклянная банка клубничного джема с крышкой в красно-белую клетку.",
    image: p("jam"),
    steps: ["В коробке от Тома — банка клубничного джема.", "«Gran's jam. The best in London!» — «Бабушкин джем. Лучший в Лондоне!»", "Мурзик ставит банку на полку.", "Пахнет летом."],
    bridge: "Днём миссис Хоуп рассказывает о Лондоне. Но говорит так быстро…",
  },
};

const london4: Lesson = {
  id: "en-a1-london-4",
  level: "A1",
  cityId: "en-london",
  number: 4,
  title: "Как это пишется?",
  minutes: 7,
  goals: ["Сказать, что не понимаешь", "Попросить повторить и говорить медленнее", "Спросить, как пишется слово и что оно значит"],
  vocabNote: "В английском слова часто пишутся не так, как слышатся. Поэтому даже англичане спрашивают друг друга: How do you spell it?",
  vocab: [
    v("enlo4-1", "I don't understand.", "Я не понимаю.", "Мурзик чешет за ухом с растерянной мордочкой, над ним знак вопроса.", "Послушать I don't understand", p("l4-1"), "[ай доунт андэстэ́нд]"),
    v("enlo4-2", "Can you repeat that, please?", "Повторите, пожалуйста.", "Мурзик прикладывает лапу к уху.", "Послушать Can you repeat that, please", p("l4-2"), "[кэн ю рипи́т зэт, плиз]"),
    v("enlo4-3", "Slowly, please.", "Медленнее, пожалуйста.", "Мурзик мягким жестом показывает «помедленнее». Рядом ползёт улитка.", "Послушать Slowly, please", p("l4-3"), "[сло́ули, плиз]"),
    v("enlo4-4", "How do you spell it?", "Как это пишется?", "Мурзик держит блокнот и карандаш, готовый записывать.", "Послушать How do you spell it", p("l4-4"), "[хау ду ю спэл ит]"),
    v("enlo4-5", "What does it mean?", "Что это значит?", "Мурзик показывает на незнакомое слово в газете.", "Послушать What does it mean", p("l4-5"), "[уот даз ит мин]"),
    v("enlo4-6", "How do you say it in English?", "Как это сказать по-английски?", "Мурзик держит в лапах чайник и вопросительно смотрит.", "Послушать How do you say it in English", p("l4-6"), "[хау ду ю сэй ит ин ин-глиш]"),
    v("enlo4-7", "I don't know.", "Я не знаю.", "Том разводит руками с забавной растерянной улыбкой.", "Послушать I don't know", p("l4-7"), "[ай доунт ноу]"),
  ],
  letters: [
    letter("P p", "как «п»", "please", "пожалуйста"),
    letter("Q q", "почти всегда вместе с u: qu — «кв»", "queen", "королева"),
    letter("R r", "не раскатистое, язык не дрожит; в конце слова в британском почти не слышно", "repeat", "повторить"),
    letter("S s", "как «с», между гласными иногда «з»", "slowly", "медленно"),
    letter("T t", "как «т», но кончик языка чуть выше", "it", "это"),
  ],
  dialogue: {
    title: "Экскурсия по кухне",
    note: "Scone [скон] — английская булочка, её едят с джемом и густыми сливками.",
    lines: [
      line("hope", "And this is a scone. We eat scones with jam and cream.", "А это скон. Мы едим сконы с джемом и сливками."),
      line("murzik", "Sorry, I don't understand. Slowly, please.", "Простите, я не понимаю. Медленнее, пожалуйста."),
      line("hope", "A scone. With jam.", "Скон. С джемом."),
      line("murzik", "How do you spell it?", "Как это пишется?"),
      line("hope", "S-C-O-N-E.", "Эс-си-оу-эн-и."),
      line("murzik", "And what does \"cream\" mean?", "А что значит «cream»?"),
      line("tom", "I don't know how to say it in Russian! Look — this is cream.", "Не знаю, как это сказать по-русски! Смотри — вот это cream."),
    ],
    gist: choice("enlo4-d1", "Почему Мурзик переспрашивает?", [
      ["Миссис Хоуп говорит быстро.", true],
      ["Он не хочет сконов.", false],
      ["Он торопится.", false],
    ]),
  },
  grammar: [
    {
      title: "Как сказать «не»",
      paragraphs: [
        "«Не» в английском — don't перед глаголом: I understand — я понимаю, I don't understand — я не понимаю. I know — я знаю, I don't know — я не знаю.",
        "Don't — короткое do not. В разговоре почти всегда говорят коротко.",
      ],
      examples: [
        { ru: "I don't understand.", en: "Я не понимаю." },
        { ru: "I don't know. Can you repeat that, please?", en: "Я не знаю. Повторите, пожалуйста." },
      ],
    },
  ],
  tasks: [
    choice("enlo4-t1", "Как сказать «Я не знаю»?", [
      ["I don't know.", true],
      ["I not know.", false],
      ["I no know.", false],
    ], { skill: "grammar" }),
    listen("enlo4-t2", "Послушай. О чём просят?", "Slowly, please.", [
      ["Говорить медленнее.", true],
      ["Повторить ещё раз.", false],
      ["Сказать, как пишется слово.", false],
    ]),
    match("enlo4-t3", "Соедини пары.", [
      ["How do you spell it?", "Как это пишется?"],
      ["What does it mean?", "Что это значит?"],
      ["I don't understand.", "Я не понимаю."],
      ["I don't know.", "Я не знаю."],
    ], { skill: "words" }),
    spell("enlo4-t4", "Собери из букв слово «скон» (булочка).", "scone"),
    speak("enlo4-t5", "What does \"cream\" mean?", "I don't know. Can you repeat that, please?", "Не знаю. Повторите, пожалуйста.", { help: "Ответь вслух, что не знаешь, и попроси повторить." }),
    match("enlo4-t6", "Вспомни прошлый урок. Соедини пары.", [
      ["Thank you!", "Спасибо!"],
      ["You're welcome.", "Пожалуйста. (в ответ)"],
      ["Sorry!", "Извините!"],
      ["That's OK.", "Ничего страшного."],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "towel",
    itemName: "Кухонное полотенце",
    itemNameRu: "Tea towel",
    ru: "Hooray! A tea towel!",
    en: "Ура! Кухонное полотенце!",
    a11y: "На крючке висит льняное кухонное полотенце с нарисованным чайником и сконами.",
    image: p("towel"),
    steps: ["Мурзик помогает вытирать посуду.", "Миссис Хоуп дарит ему полотенце с нарисованным чайником.", "«Every cook needs one!» — «Оно нужно каждому повару!»", "Полотенце висит на крючке у двери."],
    bridge: "Вечером Том учит Мурзика считать — по ступенькам на лестнице.",
  },
};

const london5: Lesson = {
  id: "en-a1-london-5",
  level: "A1",
  cityId: "en-london",
  number: 5,
  title: "Числа 1–10",
  minutes: 7,
  goals: ["Считать от нуля до десяти", "Спросить «Сколько?»", "Продиктовать номер телефона"],
  vocabNote: "Номер телефона англичане диктуют по одной цифре, а ноль часто называют oh [оу]: 0-7-9 — oh-seven-nine.",
  vocab: [
    v("enlo5-1", "one, two, three", "один, два, три", "Три ступеньки лестницы, на каждой сидит по котёнку-игрушке.", "Послушать one, two, three", p("l5-1"), "[уан, ту, сри]"),
    v("enlo5-2", "four, five, six", "четыре, пять, шесть", "Шесть чашек выстроились в ряд на полке.", "Послушать four, five, six", p("l5-2"), "[фо, файв, сикс]"),
    v("enlo5-3", "seven, eight", "семь, восемь", "Восемь сконов на тарелке.", "Послушать seven, eight", p("l5-3"), "[сэвн, эйт]"),
    v("enlo5-4", "nine, ten", "девять, десять", "Мурзик показывает десять пальцев на двух лапах.", "Послушать nine, ten", p("l5-4"), "[найн, тэн]"),
    v("enlo5-5", "zero", "ноль", "Пустая тарелка — ни одного скона.", "Послушать zero", p("l5-5"), "[зи́роу]"),
    v("enlo5-6", "How many?", "Сколько?", "Миссис Хоуп показывает на тарелку со сконами и вопросительно поднимает брови.", "Послушать How many", p("l5-6"), "[хау мэ́ни]"),
    v("enlo5-7", "What's your phone number?", "Какой у тебя номер телефона?", "Том держит телефон и готов записывать.", "Послушать What's your phone number", p("l5-7"), "[уотс ё фоун на́мбэ]"),
  ],
  letters: [
    letter("U u", "в алфавите — «ю»; в словах часто «а» или «у»", "number", "номер", "В number буква u читается почти как «а»: [намбэ]."),
    letter("V v", "как «в»", "seven", "семь"),
    letter("W w", "губы трубочкой, быстрое «у»", "what", "что", "Это не «в»: what — [уот], а не [вот]."),
    letter("X x", "как «кс»", "six", "шесть"),
    letter("Y y", "в начале слова — «й», в конце — «и» или «ай»", "my", "мой", "my — [май], а yes — [йес]."),
    letter("Z z", "как «з»", "zero", "ноль"),
  ],
  dialogue: {
    title: "Сколько сконов?",
    note: "In the oven — «в духовке». Scones — множественное число: один scone, много scones.",
    lines: [
      line("hope", "How many scones, Murzik?", "Сколько сконов, Мурзик?"),
      line("murzik", "One, two, three, four… Eight!", "Один, два, три, четыре… Восемь!"),
      line("hope", "Good! And in the oven? How many?", "Молодец! А в духовке? Сколько?"),
      line("murzik", "Zero!", "Ноль!"),
      line("tom", "Murzik, what's your phone number?", "Мурзик, какой у тебя номер телефона?"),
      line("murzik", "Oh-seven-nine, six-five-four…", "Ноль-семь-девять, шесть-пять-четыре…"),
    ],
    gist: choice("enlo5-d1", "Сколько сконов на тарелке?", [
      ["Восемь.", true],
      ["Три.", false],
      ["Ни одного.", false],
    ]),
  },
  grammar: [
    {
      title: "Одна вещь и много: -s",
      paragraphs: [
        "Чтобы сказать «много», к слову добавляют -s: one scone — eight scones, one cup — two cups.",
        "Вопрос «сколько?» про то, что можно посчитать, — How many…?: How many cups? — Сколько чашек?",
      ],
      examples: [
        { ru: "How many cups? — Six.", en: "Сколько чашек? — Шесть." },
        { ru: "One scone, two scones.", en: "Один скон, два скона." },
      ],
    },
  ],
  tasks: [
    listen("enlo5-t1", "Послушай. Какое число?", "seven", [
      ["7", true],
      ["11", false],
      ["9", false],
    ]),
    match("enlo5-t2", "Соедини пары.", [
      ["three", "3"],
      ["five", "5"],
      ["eight", "8"],
      ["ten", "10"],
    ], { skill: "words" }),
    choice("enlo5-t3", "Как сказать «четыре чашки»?", [
      ["four cups", true],
      ["four cup", false],
      ["a four cups", false],
    ], { skill: "grammar" }),
    missing("enlo5-t4", "Какой буквы не хватает? («шесть»)", "si", "", "x", ["x", "ks", "s"]),
    speak("enlo5-t5", "What's your phone number?", "It's oh-seven-nine, two-five-one…", "Ноль-семь-девять, два-пять-один…", { help: "Продиктуй вслух номер телефона по одной цифре." }),
    choice("enlo5-t6", "Слово непонятно. Что сказать?", [
      ["What does it mean?", true],
      ["You're welcome.", false],
      ["Good morning!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "clock",
    itemName: "Красный будильник",
    itemNameRu: "Alarm clock",
    ru: "Hooray! An alarm clock!",
    en: "Ура! Будильник!",
    a11y: "На тумбочке стоит круглый красный будильник с двумя звонками сверху.",
    image: p("clock"),
    steps: ["Том дарит Мурзику красный будильник.", "«Seven o'clock, every morning!» — «Каждое утро в семь!»", "Мурзик ставит его на тумбочку.", "Тик-так, тик-так."],
    bridge: "Утром миссис Хоуп говорит: «Хочешь, покажу тебе кое-что? Внизу, за старой дверью…»",
  },
};

const london6: Lesson = {
  id: "en-a1-london-6",
  level: "A1",
  cityId: "en-london",
  number: 6,
  title: "Да, нет, может быть",
  minutes: 7,
  goals: ["Ответить «да», «нет», «конечно», «может быть»", "Задать вопрос Is it…? и ответить", "Сказать «давай!»"],
  vocabNote: "Yes, please — «да, пожалуйста», No, thank you — «нет, спасибо». Просто Yes или No без вежливого слова звучит резковато.",
  vocab: [
    v("enlo6-1", "Yes, please.", "Да, пожалуйста.", "Мурзик радостно кивает и протягивает лапы.", "Послушать Yes, please", p("l6-1"), "[йес, плиз]"),
    v("enlo6-2", "No, thank you.", "Нет, спасибо.", "Мурзик вежливо поднимает лапу и с улыбкой отказывается.", "Послушать No, thank you", p("l6-2"), "[ноу, сэнк ю]"),
    v("enlo6-3", "Of course!", "Конечно!", "Мурзик горячо кивает, хвост трубой.", "Послушать Of course", p("l6-3"), "[ов ко́ус]"),
    v("enlo6-4", "Maybe.", "Может быть.", "Мурзик постукивает лапой по подбородку.", "Послушать Maybe", p("l6-4"), "[мэ́йби]"),
    v("enlo6-5", "Let's go!", "Пойдём! / Давай!", "Мурзик и Том дают друг другу пять.", "Послушать Let's go", p("l6-5"), "[лэтс гоу]"),
    v("enlo6-6", "Is it your café? — Yes, it is.", "Это ваше кафе? — Да.", "Миссис Хоуп стоит у старой синей двери и кивает.", "Послушать Is it your café? Yes, it is", p("l6-6"), "[из ит ё кэ́фэй — йес, ит из]"),
    v("enlo6-7", "It's closed.", "Оно закрыто.", "На синей двери висит табличка, окна в пыли.", "Послушать It's closed", p("l6-7"), "[итс кло́узд]"),
  ],
  letters: [
    letter("A E I O U", "гласные: в алфавите их называют «эй, и, ай, оу, ю»", "café", "кафе", "В словах гласные часто звучат иначе, чем в алфавите. Это нормально — слушай и повторяй."),
    letter("th", "особый звук: кончик языка между зубами", "thank you", "спасибо", "Не «с» и не «з» — попробуй сказать с языком между зубами."),
  ],
  dialogue: {
    title: "Синяя дверь",
    note: "Downstairs — «внизу (на нижнем этаже)». Recipe book — «книга рецептов». Pages are missing — «страниц не хватает».",
    lines: [
      line("hope", "Murzik, do you want to see something? It's downstairs.", "Мурзик, хочешь кое-что увидеть? Это внизу."),
      line("murzik", "Of course! Let's go!", "Конечно! Пойдёмте!"),
      line("murzik", "A blue door! Is it your café?", "Синяя дверь! Это ваше кафе?"),
      line("hope", "Yes, it is. Hope's Café. It's been closed for many years.", "Да. Кафе «Хоуп». Оно закрыто уже много лет."),
      line("hope", "And this is my old recipe book. Look — some pages are missing.", "А это моя старая книга рецептов. Смотри — страниц не хватает."),
      line("murzik", "Where are they?", "Где же они?"),
      line("hope", "Maybe… with my old friends.", "Может быть… у моих старых друзей."),
    ],
    gist: choice("enlo6-d1", "Что за синей дверью?", [
      ["Старое закрытое кафе миссис Хоуп.", true],
      ["Новый магазин.", false],
      ["Комната Тома.", false],
    ]),
  },
  grammar: [
    {
      title: "Вопрос Is it…?",
      paragraphs: [
        "Чтобы спросить «Это…?», ставят is в начало: It is your café. — Это ваше кафе. Is it your café? — Это ваше кафе?",
        "Короткий ответ: Yes, it is. — Да. No, it isn't. — Нет. Просто «Yes» тоже можно, но с it is звучит вежливее и полнее.",
      ],
      examples: [
        { ru: "Is it closed? — Yes, it is.", en: "Оно закрыто? — Да." },
        { ru: "Is it your book? — No, it isn't.", en: "Это твоя книга? — Нет." },
      ],
    },
  ],
  tasks: [
    choice("enlo6-t1", "Как спросить «Это твой чай?»", [
      ["Is it your tea?", true],
      ["It is your tea?", false],
      ["Your tea is it?", false],
    ], { skill: "grammar" }),
    listen("enlo6-t2", "Послушай. Что делает Мурзик?", "No, thank you.", [
      ["Вежливо отказывается.", true],
      ["Соглашается.", false],
      ["Говорит, что не знает.", false],
    ]),
    match("enlo6-t3", "Соедини пары.", [
      ["Yes, please.", "Да, пожалуйста."],
      ["No, thank you.", "Нет, спасибо."],
      ["Maybe.", "Может быть."],
      ["Of course!", "Конечно!"],
    ], { skill: "words" }),
    spell("enlo6-t4", "Собери из букв слово «да».", "yes", ["a"]),
    speak("enlo6-t5", "Do you want to see the café?", "Of course! Let's go!", "Конечно! Пойдёмте!", { help: "Согласись вслух." }),
    choice("enlo6-t6", "Как спросить «Сколько?» о чашках?", [
      ["How many cups?", true],
      ["How are you?", false],
      ["What's your name?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "recipe-book",
    itemName: "Старая книга рецептов",
    itemNameRu: "Recipe book",
    ru: "Hooray! The old recipe book!",
    en: "Ура! Старая книга рецептов!",
    a11y: "Толстая старая книга рецептов в потёртой синей обложке. Между страницами видны пустые места, где листы вырваны.",
    image: p("recipe-book"),
    steps: ["Миссис Хоуп протягивает Мурзику книгу.", "На первой странице — рецепт сконов.", "А дальше многих страниц нет.", "«Find the pages, and you'll find your café.» — «Найди страницы — и найдёшь своё кафе»."],
    bridge: "Миссис Хоуп пишет список: где живут её старые друзья. Первым в списке — Оксфорд.",
  },
};

const london7: Lesson = {
  id: "en-a1-london-7",
  level: "A1",
  cityId: "en-london",
  number: 7,
  title: "Goodbye! — До свидания!",
  minutes: 8,
  goals: ["Попрощаться с другом и вежливо", "Пожелать хорошего дня и счастливого пути", "Вспомнить все слова Лондона"],
  vocabNote: "Goodbye — «до свидания», Bye — проще, «пока». See you! — «увидимся!» — подходит всем.",
  vocab: [
    v("enlo7-1", "Goodbye!", "До свидания!", "Мурзик вежливо машет миссис Хоуп у двери.", "Послушать Goodbye", p("l7-1"), "[гудба́й]"),
    v("enlo7-2", "Bye!", "Пока!", "Мурзик весело машет Тому с другой стороны улицы.", "Послушать Bye", p("l7-2"), "[бай]"),
    v("enlo7-3", "See you soon!", "До скорой встречи!", "Миссис Хоуп обнимает Мурзика на прощание.", "Послушать See you soon", p("l7-3"), "[си ю сун]"),
    v("enlo7-4", "See you tomorrow!", "До завтра!", "Вечером соседский мальчик машет с улицы. В небе месяц.", "Послушать See you tomorrow", p("l7-4"), "[си ю тэмо́роу]"),
    v("enlo7-5", "Have a nice day!", "Хорошего дня!", "Солнечным утром почтальон улыбается и машет Мурзику.", "Послушать Have a nice day", p("l7-5"), "[хэв э найс дэй]"),
    v("enlo7-6", "You too!", "И вам тоже!", "Мурзик с широкой улыбкой машет в ответ.", "Послушать You too", p("l7-6"), "[ю ту]"),
    v("enlo7-7", "Have a good trip!", "Счастливого пути!", "Миссис Хоуп машет платком, а Мурзик несёт маленький чемодан.", "Послушать Have a good trip", p("l7-7"), "[хэв э гуд трип]"),
  ],
  letters: [
    letter("ee", "долгое «и»", "see", "видеть", "see — [си], meet — [мит]."),
    letter("oo", "долгое «у» или короткое «у»", "soon", "скоро", "soon — [сун], good — [гуд]."),
  ],
  dialogue: {
    title: "Прощание",
    note: "Dear — «дорогой, милый»: так ласково говорят пожилые англичане. Page — «страница».",
    lines: [
      line("murzik", "Mrs Hope, we're going to Oxford tomorrow!", "Миссис Хоуп, завтра мы едем в Оксфорд!"),
      line("hope", "To Oxford! My friend's granddaughter Priya is there. She has a page from my book.", "В Оксфорд! Там Прия, внучка моей подруги. У неё страница из моей книги."),
      line("hope", "And this bell is for you. It's from my café door.", "А этот колокольчик — тебе. Он с двери моего кафе."),
      line("murzik", "Thank you very much!", "Большое спасибо!"),
      line("hope", "You're welcome, dear. Have a good trip!", "Пожалуйста, дорогой. Счастливого пути!"),
      line("murzik", "Goodbye, Mrs Hope! See you soon!", "До свидания, миссис Хоуп! До скорой встречи!"),
    ],
    gist: choice("enlo7-d1", "Что дарит миссис Хоуп?", [
      ["Колокольчик с двери кафе.", true],
      ["Чашку для чая.", false],
      ["Открытку.", false],
    ]),
  },
  grammar: [
    {
      title: "Как попрощаться",
      paragraphs: [
        "Goodbye! — «до свидания» (всем). Bye! — «пока» (друзьям). See you! — «увидимся!», можно добавить, когда: See you tomorrow! See you soon!",
        "На пожелание Have a nice day! отвечают You too! — «И вам тоже!»",
      ],
      examples: [
        { ru: "Bye, Tom! See you tomorrow!", en: "Пока, Том! До завтра!" },
        { ru: "Have a nice day! — You too!", en: "Хорошего дня! — И вам тоже!" },
      ],
    },
  ],
  tasks: [
    listen("enlo7-t1", "Аудиоэкзамен. Что говорит миссис Хоуп?", "My friend is in Oxford. Have a good trip! See you soon!", [
      ["Её подруга в Оксфорде, она желает хорошей дороги.", true],
      ["Её подруга в Лондоне, кафе открыто.", false],
      ["Она едет в Оксфорд завтра.", false],
    ]),
    choice("enlo7-t2", "Тебе говорят: Have a nice day! Что ответить?", [
      ["You too!", true],
      ["You're welcome.", false],
      ["Of course!", false],
    ], { skill: "words" }),
    fill("enlo7-t3", "Вставь слово: «До завтра!»", "See you", "!", "tomorrow", ["tomorrow", "soon", "day"], { skill: "grammar" }),
    missing("enlo7-t4", "Какой буквы не хватает? («До скорой встречи!»)", "See you so", "n!", "o", ["o", "u", "a"]),
    speak("enlo7-t5", "Have a nice day!", "You too!", "И вам тоже!", { help: "Ответь вслух." }),
    script("enlo7-t6", "Вспомни весь Лондон. Закончи разговор с миссис Хоуп.", [
      { speaker: "Миссис Хоуп", text: "Good morning! How are you?" },
      { speaker: "Ты", answer: "I'm fine, thanks. And you?", options: ["I'm fine, thanks. And you?", "I don't know.", "Goodbye!"] },
      { speaker: "Миссис Хоуп", text: "Tea?" },
      { speaker: "Ты", answer: "Yes, please!", options: ["Yes, please!", "Sorry!", "What's your name?"] },
      { speaker: "Миссис Хоуп", text: "Have a good trip!" },
      { speaker: "Ты", answer: "Thank you! Goodbye!", options: ["Thank you! Goodbye!", "You're welcome!", "Nice to meet you."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bell",
    itemName: "Колокольчик с двери кафе",
    itemNameRu: "Café bell",
    ru: "Hooray! The café bell!",
    en: "Ура! Колокольчик кафе!",
    a11y: "Мурзик держит в лапах старый латунный колокольчик на изогнутом крючке — такие вешают над дверью кафе.",
    image: p("bell"),
    steps: ["Миссис Хоуп снимает колокольчик со старой синей двери.", "Дзинь! — звенит он.", "«For your café, one day.» — «Для твоего кафе. Когда-нибудь».", "Мурзик бережно кладёт его в чемодан."],
    bridge: "Чемодан собран. Завтра — Оксфорд!",
  },
};

const story: CityStory = {
  home: {
    name: "Комната в доме миссис Хоуп",
    nameRu: "Murzik's room in London",
    image: p("home"),
    a11y: "Маленькая пустая комната под крышей в доме миссис Хоуп: окно с белой рамой, за окном лондонские крыши и трубы. Посередине чемодан Мурзика.",
  },
  keepsakeId: "bell",
  welcomeRu: "Hello, London!",
  welcomeEn: "Привет, Лондон!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том выходят с чемоданами из поезда на большом лондонском вокзале со стеклянной крышей. Их встречает пожилая дама в шляпке и машет рукой.",
  departureImage: p("departure"),
  departureA11y: "Миссис Хоуп машет на прощание у синей двери своего старого кафе.",
  finale: [
    {
      image: p("book"),
      a11y: "Крупно: раскрытая старая книга рецептов. На первой странице рецепт сконов и аккуратная приписка от руки на полях. Дальше видны пустые места от вырванных страниц.",
      lines: [
        { en: "Перед сном Мурзик листает книгу миссис Хоуп. На полях первой страницы — записка от руки:" },
        { ru: "In my café, it always smelled of cinnamon.", en: "В моём кафе всегда пахло корицей." },
        { en: "Сколько ещё таких записок на пропавших страницах?" },
      ],
    },
    {
      image: p("bell"),
      a11y: "Мурзик обходит свою комнату в доме миссис Хоуп, которую обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свою лондонскую комнату. Том фотографирует её для журнала." },
        { en: "Для будущего кафе он берёт с собой колокольчик с синей двери." },
        { en: "Книга рецептов ложится в кармашек чемодана." },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "London complete!", en: "Лондон пройден!" },
        { en: "7 / 7 уроков" },
        { ru: "Your first city!", en: "Первый город позади!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Миссис Хоуп машет на прощание у синей двери.",
      lines: [
        { ru: "Goodbye, Mrs Hope!", en: "До свидания, миссис Хоуп!" },
        { ru: "Next stop: Oxford!", en: "Следующая остановка: Оксфорд!" },
      ],
    },
    {
      image: p("train"),
      a11y: "Красный поезд едет по зелёным английским полям.",
      lines: [{ ru: "London → Oxford", en: "Лондон → Оксфорд" }],
    },
    {
      image: pic("en/oxford/arrival"),
      a11y: "Мурзик и Том в Оксфорде: старинные каменные здания с башенками, студенты на велосипедах.",
      lines: [
        { ru: "Hello, Oxford!", en: "Привет, Оксфорд!" },
        { ru: "A new city. New words. New friends.", en: "Новый город. Новые слова. Новые друзья." },
      ],
    },
  ],
};

export const enLondon = {
  id: "en-london",
  name: "Лондон",
  nameEn: "London",
  lessons: [london1, london2, london3, london4, london5, london6, london7],
  story,
};
