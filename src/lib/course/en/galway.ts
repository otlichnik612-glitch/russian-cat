import { pic } from "../art";
import { read } from "../make";
import type { CityStory, Lesson } from "../types";
import { choice, fill, letter, line, listen, match, script, speak, tf, v } from "../tr/make";

/*
 * Голуэй · «Фестиваль и опыт» · A2, уроки 1–7.
 * Первый настоящий фестиваль для фургона «Hope on Wheels». Шивон организует фестиваль; сосед по месту —
 * Деклан, ветеран фестивалей, продаёт устрицы и ирландский цельнозерновой хлеб; его мама Нора учит Мурзика и Тома готовить
 * ирландское рагу. Музыкальный вечер в пабе, дождь и ветер три раза в день, приз «Лучший новичок».
 * В конце Конор приезжает из Белфаста и отгоняет фургон в Лондон, а Мурзик и Том летят в Сиэтл.
 * Грамматика: Present Perfect для опыта — ever, never, once, twice, how many times;
 * Present Perfect и Past Simple; the best … I've ever …
 */

const p = (name: string) => pic(`en/galway/${name}`);

const galway1: Lesson = {
  id: "en-a2-galway-1",
  level: "A2",
  cityId: "en-galway",
  number: 1,
  title: "Have you ever been to a festival? — Ты когда-нибудь был(а) на фестивале?",
  minutes: 8,
  goals: ["Зарегистрироваться на фестивале", "Спросить об опыте: Have you ever…?", "Ответить: Yes, I have / No, never"],
  vocabNote: "Have you ever been…? — «Ты когда-нибудь бывал(а)…?» A stall — палатка или прилавок на рынке и фестивале. A pitch — место, где стоит палатка.",
  vocab: [
    v("enga1-1", "Have you ever been to a food festival?", "Ты когда-нибудь бывал(а) на фестивале еды?", "Шивон с планшетом для бумаг улыбается у ворот фестиваля.", "Послушать Have you ever been to a food festival", p("l1-1")),
    v("enga1-2", "No, never.", "Нет, никогда.", "Том качает головой.", "Послушать No, never", p("l1-2")),
    v("enga1-3", "It's our first time.", "Мы здесь впервые.", "Мурзик и Том растерянно смотрят на ряды палаток.", "Послушать It's our first time", p("l1-3")),
    v("enga1-4", "a stall", "палатка, прилавок", "Ряд палаток с полосатыми навесами у гавани.", "Послушать a stall", p("l1-4")),
    v("enga1-5", "Where's our pitch?", "Где наше место?", "На асфальте мелом нарисован номер 14.", "Послушать Where's our pitch", p("l1-5")),
    v("enga1-6", "Fill in this form, please.", "Заполните, пожалуйста, эту анкету.", "Том пишет на листке, прижатом к планшету.", "Послушать Fill in this form, please", p("l1-6")),
    v("enga1-7", "a trader's badge", "бейдж участника", "Зелёный бейдж на шнурке с надписью TRADER.", "Послушать a trader's badge", p("l1-7")),
    v("enga1-8", "You're the first.", "Вы первые.", "Шивон смеётся и показывает на Мурзика.", "Послушать You're the first", p("l1-8")),
  ],
  letters: [
    letter("ever = [Эвэр]", "Ever — «когда-нибудь», [Эвэр]. Не путай с every [Эври] — «каждый».", "Have you ever been here?", "Ты когда-нибудь здесь бывал(а)?"),
    letter("Siobhán = [шивОн]", "Ирландское имя читается совсем не так, как пишется: Siobhán — [шивОн].", "Hi, Siobhán!", "Привет, Шивон!"),
  ],
  dialogue: {
    title: "У ворот фестиваля",
    note: "Голуэй — город на западе Ирландии, у моря. Здесь много фестивалей и уличной музыки. Фургон стоит у гавани.",
    lines: [
      line("siobhan", "Hello! You must be Hope on Wheels. I'm Siobhán, I'm organising the festival.", "Здравствуйте! Вы, наверное, «Hope on Wheels». Я Шивон, я организую фестиваль."),
      line("tom", "Hi! Yes, that's us. Where's our pitch?", "Привет! Да, это мы. Где наше место?"),
      line("siobhan", "Number fourteen, by the harbour. Have you ever been to a food festival?", "Номер четырнадцать, у гавани. Вы когда-нибудь бывали на фестивале еды?"),
      line("tom", "As visitors, yes. But never with our own stall. It's our first time.", "Как гости — да. Но никогда со своей палаткой. Мы здесь впервые."),
      line("siobhan", "Don't worry, everyone's friendly here. Fill in this form, please. And here are your trader's badges.", "Не волнуйтесь, здесь все дружелюбные. Заполните, пожалуйста, эту анкету. А вот ваши бейджи участников."),
      line("murzik", "Have you ever had a cat on a stall before?", "А у вас когда-нибудь раньше был кот за прилавком?"),
      line("siobhan", "Never! You're the first.", "Никогда! Вы первые."),
    ],
    gist: choice("enga1-d1", "Что Том говорит о фестивалях?", [
      ["Они бывали на фестивалях как гости, но со своей палаткой — впервые.", true],
      ["Они никогда не были ни на одном фестивале.", false],
      ["Они приезжают в Голуэй каждый год.", false],
    ]),
  },
  grammar: [
    {
      title: "Present Perfect: опыт",
      paragraphs: [
        "Когда важно, было ли это в жизни вообще, а не когда именно: have / has + третья форма глагола. Have you ever been to Ireland? — Ты когда-нибудь бывал(а) в Ирландии?",
        "Ответы: Yes, I have. / No, I haven't. / No, never. Ever — «когда-нибудь» в вопросе, never — «никогда» (с ним not не нужен): I've never been to a festival.",
      ],
      examples: [
        { ru: "Have you ever been to Ireland? — Yes, I have.", en: "Ты когда-нибудь бывал(а) в Ирландии? — Да." },
        { ru: "She has never had a stall.", en: "У неё никогда не было своей палатки." },
      ],
    },
  ],
  tasks: [
    listen("enga1-t1", "Послушай. Какой номер у их места?", "Number fourteen, by the harbour. Have you ever been to a food festival?", [
      ["Четырнадцать.", true],
      ["Сорок.", false],
      ["Четыре.", false],
    ]),
    choice("enga1-t2", "Как спросить «Ты когда-нибудь бывал(а) в Ирландии?»", [
      ["Have you ever been to Ireland?", true],
      ["Did you ever be to Ireland?", false],
      ["Are you ever been to Ireland?", false],
    ], { skill: "grammar" }),
    fill("enga1-t3", "Выбери правильное слово: «Я никогда не был(а) на фестивале».", "I've", "been to a festival.", "never", ["never", "ever", "not never"], { skill: "grammar" }),
    read("enga1-t4", "Прочитай бейдж. Какой номер места у фургона?", "GALWAY STREET FOOD FESTIVAL\nTRADER\nHope on Wheels — Pitch 14\nFri–Sun, 10 am – 9 pm", [
      ["14.", true],
      ["10.", false],
      ["9.", false],
    ]),
    match("enga1-t5", "Соедини пары.", [
      ["a stall", "палатка, прилавок"],
      ["Where's our pitch?", "Где наше место?"],
      ["It's our first time.", "Мы здесь впервые."],
      ["a trader's badge", "бейдж участника"],
    ], { skill: "words" }),
    tf("enga1-t6", "Шивон уже видела кота за прилавком.", false, "listening"),
    speak("enga1-t7", "Have you ever been to a food festival?", "Yes, I have. I've been to a food festival in my city. But I've never had my own stall.", "Да. Я бывал(а) на фестивале еды в своём городе. Но своей палатки у меня никогда не было.", {
      help: "Ответь вслух о своём опыте: Yes, I have… / No, never…",
    }),
  ],
  reward: {
    itemId: "trader-badge",
    itemName: "Бейджи участников",
    itemNameRu: "Trader's badges",
    ru: "We're real traders now!",
    en: "Теперь мы настоящие участники!",
    a11y: "Два зелёных бейджа на шнурках висят на зеркале голубого фургона; на одном — крошечная фотография Мурзика.",
    image: p("trader-badge"),
    steps: ["Шивон выдаёт два зелёных бейджа.", "На одном написано: TOM. На втором — MURZIK.", "Мурзик носит свой с огромной гордостью.", "Ночью бейджи висят на зеркале фургона."],
    bridge: "Утром у соседней палатки уже работает бородатый мужчина в кепке. Он смотрит, как Том воюет с ветром и навесом.",
  },
};

const galway2: Lesson = {
  id: "en-a2-galway-2",
  level: "A2",
  cityId: "en-galway",
  number: 2,
  title: "I've never done this before — Я никогда этого не делал(а)",
  minutes: 8,
  goals: ["Попросить о помощи", "Рассказать, чего ты никогда не делал(а)", "Спросить, сколько раз: How many times…?"],
  vocabNote: "Give me a hand — «помоги мне» (дословно «дай мне руку»). Lots of times — «много раз».",
  vocab: [
    v("enga2-1", "I've never done this before.", "Я никогда раньше этого не делал(а).", "Том держит навес, ветер тянет его в сторону.", "Послушать I've never done this before", p("l2-1")),
    v("enga2-2", "Have you done this before?", "Ты раньше это делал(а)?", "Деклан в кепке с усмешкой смотрит на Тома.", "Послушать Have you done this before", p("l2-2")),
    v("enga2-3", "lots of times", "много раз", "Деклан показывает на стену, где висят старые бейджи фестивалей.", "Послушать lots of times", p("l2-3")),
    v("enga2-4", "set up the stall", "поставить палатку, подготовить прилавок", "Деклан и Том вместе ставят стойки палатки.", "Послушать set up the stall", p("l2-4")),
    v("enga2-5", "an awning", "навес", "Полосатый навес над окном фургона.", "Послушать an awning", p("l2-5")),
    v("enga2-6", "Give me a hand!", "Помоги мне!", "Том тянет руку к Деклану, навес улетает.", "Послушать Give me a hand", p("l2-6")),
    v("enga2-7", "Is it always this windy?", "Здесь всегда так ветрено?", "Шарф Мурзика развевается на ветру.", "Послушать Is it always this windy", p("l2-7")),
    v("enga2-8", "How many times have you…?", "Сколько раз ты…?", "Мурзик загибает пальцы на лапке.", "Послушать How many times have you", p("l2-8")),
  ],
  letters: [
    letter("done = [дан]", "Третья форма do — done [дан]. Не путай с don't [доунт].", "I've done it.", "Я это сделал(а)."),
    letter("awning = [О:нинг]", "aw читается как долгое [о:], как в saw.", "an awning", "навес"),
  ],
  dialogue: {
    title: "Ветер и навес",
    note: "Lad — «парень», так в Ирландии часто обращаются к молодым мужчинам. Деклан продаёт устрицы и ирландский цельнозерновой хлеб.",
    lines: [
      line("declan", "First time? I can always tell. Have you ever set up a stall in the wind?", "Впервые? Я такое сразу вижу. Ты когда-нибудь ставил палатку на ветру?"),
      line("tom", "Never. I've never done this before. Give me a hand!", "Никогда. Я никогда раньше этого не делал. Помоги мне!"),
      line("declan", "I've done this festival twenty-two times. Hold this — and I'll fix your awning.", "Я торговал на этом фестивале двадцать два раза. Держи — а я поправлю твой навес."),
      line("murzik", "Is it always this windy?", "Здесь всегда так ветрено?"),
      line("declan", "This is Galway, lad. Wind, rain — and then sun. Three times a day.", "Это Голуэй, парень. Ветер, дождь — а потом солнце. Три раза в день."),
      line("tom", "Have you ever had a bad festival?", "А у тебя когда-нибудь был плохой фестиваль?"),
      line("declan", "Lots of times! But never a boring one.", "Много раз! Но скучного — ни разу."),
    ],
    gist: choice("enga2-d1", "Сколько раз Деклан был на этом фестивале?", [
      ["Двадцать два раза.", true],
      ["Ни разу.", false],
      ["Три раза.", false],
    ]),
  },
  grammar: [
    {
      title: "Never и how many times",
      paragraphs: [
        "I've never… — «Я никогда не…». She's never… — «Она никогда не…». С never не нужно not: I've never done it (а не I haven't never done it).",
        "Сколько раз за жизнь: How many times have you been to Galway? — I've been here twice / three times / lots of times.",
      ],
      examples: [
        { ru: "How many times have you been to Ireland?", en: "Сколько раз ты был(а) в Ирландии?" },
        { ru: "We've never cooked for so many people.", en: "Мы никогда не готовили на столько людей." },
      ],
    },
  ],
  tasks: [
    listen("enga2-t1", "Послушай. Какая погода в Голуэе, по словам Деклана?", "This is Galway, lad. Wind, rain — and then sun. Three times a day.", [
      ["Ветер, дождь и солнце — по три раза в день.", true],
      ["Всегда солнечно.", false],
      ["Всегда идёт снег.", false],
    ]),
    choice("enga2-t2", "Как сказать «Я никогда раньше этого не делал(а)»?", [
      ["I've never done this before.", true],
      ["I haven't never done this before.", false],
      ["I never have do this before.", false],
    ], { skill: "grammar" }),
    fill("enga2-t3", "Выбери правильную форму: «Сколько раз ты здесь был(а)?»", "How many times have you", "here?", "been", ["been", "was", "be"], { skill: "grammar" }),
    read("enga2-t4", "Прочитай записку на палатке Деклана. С какого года и сколько раз он торгует на фестивале?", "DECLAN'S OYSTERS\nGalway oysters & brown bread\nAt this festival since 2005 — 22 festivals and still smiling!", [
      ["С 2005 года, 22 раза.", true],
      ["С прошлого года.", false],
      ["Это его первый фестиваль.", false],
    ]),
    match("enga2-t5", "Соедини пары.", [
      ["an awning", "навес"],
      ["Give me a hand!", "Помоги мне!"],
      ["lots of times", "много раз"],
      ["set up the stall", "поставить палатку"],
    ], { skill: "words" }),
    tf("enga2-t6", "Деклан говорит, что у него никогда не было плохого фестиваля.", false, "listening"),
    speak("enga2-t7", "What have you never done?", "I've never been to Ireland. I've never cooked for a hundred people. And I've never set up a stall!", "Я никогда не был(а) в Ирландии. Я никогда не готовил(а) на сто человек. И никогда не ставил(а) палатку!", {
      help: "Скажи вслух три вещи, которых ты никогда не делал(а): I've never…",
    }),
  ],
  reward: {
    itemId: "rain-cover",
    itemName: "Непромокаемый навес",
    itemNameRu: "Rain cover",
    ru: "No more wet customers!",
    en: "Больше никаких мокрых покупателей!",
    a11y: "Над окном голубого фургона натянут новый зелёный непромокаемый навес; с него стекают капли дождя.",
    image: p("rain-cover"),
    steps: ["Старый навес улетел в гавань.", "Деклан достаёт из машины запасной — зелёный и крепкий.", "«Ветер в Голуэе — это не шутка, парень».", "Под навесом сухо даже в дождь."],
    bridge: "Пока Том печёт, Деклан открывает свои устрицы. «А ты когда-нибудь пробовал устриц из Голуэя?»",
  },
};

const galway3: Lesson = {
  id: "en-a2-galway-3",
  level: "A2",
  cityId: "en-galway",
  number: 3,
  title: "Have you ever tried oysters? — Ты когда-нибудь пробовал(а) устриц?",
  minutes: 8,
  goals: ["Предложить попробовать и отказаться", "Описать вкус", "Present Perfect или Past Simple: когда сказать «когда»"],
  vocabNote: "Try — «пробовать». What's it like? — «Какой он (на вкус)?» Give it a go! — «Попробуй!»",
  vocab: [
    v("enga3-1", "Have you ever tried oysters?", "Ты когда-нибудь пробовал(а) устриц?", "Деклан протягивает тарелку с устрицами на льду.", "Послушать Have you ever tried oysters", p("l3-1")),
    v("enga3-2", "I've never tried them.", "Я их никогда не пробовал(а).", "Том с сомнением смотрит на устрицу.", "Послушать I've never tried them", p("l3-2")),
    v("enga3-3", "What's it like?", "Какой он (она, оно) на вкус?", "Том наклоняется к тарелке, нахмурившись.", "Послушать What's it like", p("l3-3")),
    v("enga3-4", "It tastes of the sea.", "На вкус как море.", "Волна и чайки за палаткой.", "Послушать It tastes of the sea", p("l3-4")),
    v("enga3-5", "salty", "солёный", "Белые кристаллики соли на деревянной доске.", "Послушать salty", p("l3-5")),
    v("enga3-6", "brown bread", "ирландский цельнозерновой хлеб", "Ломти тёмного ирландского хлеба с маслом.", "Послушать brown bread", p("l3-6")),
    v("enga3-7", "Give it a go!", "Попробуй!", "Деклан подмигивает и подталкивает тарелку.", "Послушать Give it a go", p("l3-7")),
    v("enga3-8", "Not for me, thanks.", "Нет, спасибо, это не для меня.", "Том вежливо поднимает ладонь.", "Послушать Not for me, thanks", p("l3-8")),
  ],
  letters: [
    letter("tried = [трайд]", "Try → tried [трайд]: y меняется на i, окончание -ed звучит как [д].", "I've never tried it.", "Я никогда это не пробовал(а)."),
    letter("oysters = [Ойстэрз]", "Ударение на первый слог: OY-sters.", "Galway oysters", "устрицы из Голуэя"),
  ],
  dialogue: {
    title: "У палатки Деклана",
    note: "Голуэй славится устрицами. Их едят с ирландским цельнозерновым хлебом и маслом.",
    lines: [
      line("declan", "Here, Tom. Have you ever tried Galway oysters?", "Держи, Том. Ты когда-нибудь пробовал устриц из Голуэя?"),
      line("tom", "Never. What are they like?", "Никогда. А какие они на вкус?"),
      line("declan", "They taste of the sea. Salty and fresh. With brown bread and butter.", "На вкус как море. Солёные и свежие. С цельнозерновым хлебом и маслом."),
      line("murzik", "I've tried oysters! I tried one in Brighton in the spring.", "А я пробовал устриц! Я съел одну в Брайтоне весной."),
      line("tom", "Hmm… Not for me, thanks.", "Хм… Нет, спасибо, это не для меня."),
      line("declan", "Go on, give it a go!", "Да ладно, попробуй!"),
      line("tom", "OK… It's not bad! I've never eaten anything like it.", "Ладно… А неплохо! Я никогда не ел ничего подобного."),
    ],
    gist: choice("enga3-d1", "Что Том думает об устрице в конце?", [
      ["Неплохо — он никогда не ел ничего подобного.", true],
      ["Ужасно, он больше никогда её не съест.", false],
      ["Он так её и не попробовал.", false],
    ]),
  },
  grammar: [
    {
      title: "Present Perfect или Past Simple?",
      paragraphs: [
        "Present Perfect — опыт, без «когда»: I've tried oysters. Have you ever been to Ireland?",
        "Как только называешь, когда это было, или рассказываешь подробности случая — Past Simple: I tried one in Brighton in the spring. I went to Ireland in 2020. Слова yesterday, last week, in 2020, ago — всегда с Past Simple.",
      ],
      examples: [
        { ru: "Have you ever eaten oysters? — Yes, I ate some in Paris last year.", en: "Ты когда-нибудь ел(а) устриц? — Да, ел(а) в Париже в прошлом году." },
        { ru: "I've been to Galway, but I went there a long time ago.", en: "Я бывал(а) в Голуэе, но это было давно." },
      ],
    },
  ],
  tasks: [
    listen("enga3-t1", "Послушай. Где Мурзик пробовал устриц?", "I've tried oysters! I tried one in Brighton in the spring.", [
      ["В Брайтоне весной.", true],
      ["В Голуэе вчера.", false],
      ["Никогда не пробовал.", false],
    ]),
    choice("enga3-t2", "Как сказать «Я пробовал(а) их в Брайтоне весной»?", [
      ["I tried them in Brighton in the spring.", true],
      ["I've tried them in Brighton in the spring.", false],
      ["I have try them in Brighton in the spring.", false],
    ], { skill: "grammar" }),
    fill("enga3-t3", "Выбери правильную форму: «Ты когда-нибудь пробовал(а) ирландское рагу?»", "Have you ever", "Irish stew?", "tried", ["tried", "try", "tries"], { skill: "grammar" }),
    read("enga3-t4", "Прочитай меню Деклана. Что подают к устрицам?", "DECLAN'S OYSTERS\n6 oysters — €15\nServed with brown bread, butter and lemon\nNever tried them? Ask for one free taste!", [
      ["Чёрный хлеб, масло и лимон.", true],
      ["Картошку фри.", false],
      ["Рис и соус.", false],
    ]),
    match("enga3-t5", "Соедини пары.", [
      ["salty", "солёный"],
      ["brown bread", "цельнозерновой хлеб"],
      ["Give it a go!", "Попробуй!"],
      ["Not for me, thanks.", "Нет, спасибо, это не для меня."],
    ], { skill: "words" }),
    tf("enga3-t6", "Устрицы, по словам Деклана, на вкус как море.", true, "listening"),
    speak("enga3-t7", "Have you ever tried any unusual food?", "Yes, I have. I tried oysters in France two years ago. They tasted of the sea!", "Да. Я пробовал(а) устриц во Франции два года назад. На вкус они были как море!", {
      help: "Расскажи вслух о необычной еде: сначала Present Perfect, потом подробности в Past Simple.",
    }),
  ],
  reward: {
    itemId: "claddagh-ring",
    itemName: "Кладдахское кольцо",
    itemNameRu: "Claddagh ring",
    ru: "Friendship, love and loyalty!",
    en: "Дружба, любовь и верность!",
    a11y: "На зеркале фургона на ленточке висит серебряное кольцо: две руки держат сердце с короной.",
    image: p("claddagh-ring"),
    steps: ["Деклан доволен: Том съел устрицу!", "Он дарит Мурзику маленькое серебряное кольцо.", "Две руки держат сердце с короной — так делают в Голуэе.", "Кольцо велико для лапки, и Мурзик вешает его на зеркало."],
    bridge: "Вечером Шивон зовёт всех в паб у гавани. По пятницам там играют ирландскую музыку — и Деклан тоже.",
  },
};

const galway4: Lesson = {
  id: "en-a2-galway-4",
  level: "A2",
  cityId: "en-galway",
  number: 4,
  title: "How many times? — Сколько раз?",
  minutes: 8,
  goals: ["Сказать, сколько раз: once, twice, three times", "Рассказать, о чём всегда мечтал(а)", "Понять разговор в шумном месте"],
  vocabNote: "Once — один раз, twice — два раза, дальше three times, four times… A session — вечер живой ирландской музыки в пабе.",
  vocab: [
    v("enga4-1", "once", "один раз, однажды", "Мурзик показывает один палец.", "Послушать once", p("l4-1")),
    v("enga4-2", "twice", "два раза", "Мурзик показывает два пальца.", "Послушать twice", p("l4-2")),
    v("enga4-3", "a music session", "вечер живой музыки", "В пабе за столом играют скрипка, флейта и барабан.", "Послушать a music session", p("l4-3")),
    v("enga4-4", "a fiddle", "скрипка (в народной музыке)", "Шивон держит скрипку под подбородком.", "Послушать a fiddle", p("l4-4")),
    v("enga4-5", "Have you ever played the drum?", "Ты когда-нибудь играл(а) на барабане?", "Деклан протягивает Мурзику круглый плоский барабан.", "Послушать Have you ever played the drum", p("l4-5")),
    v("enga4-6", "I've always wanted to.", "Я всегда об этом мечтал(а).", "Мурзик с сияющими глазами смотрит на барабан.", "Послушать I've always wanted to", p("l4-6")),
    v("enga4-7", "Join in!", "Присоединяйся! Подпевай!", "Весь паб хлопает в ладоши.", "Послушать Join in", p("l4-7")),
    v("enga4-8", "I've lost count.", "Я сбился (сбилась) со счёта.", "Деклан машет рукой и смеётся.", "Послушать I've lost count", p("l4-8")),
  ],
  letters: [
    letter("once = [уанс]", "Once читается [уанс] — совсем не так, как пишется.", "only once", "только один раз"),
    letter("twice = [туайс]", "Twice — один слог: [туайс]; c здесь читается как [с].", "twice a week", "два раза в неделю"),
  ],
  dialogue: {
    title: "Пятница в пабе",
    note: "Бодран — круглый плоский ирландский барабан, на нём играют палочкой. В A1 Мурзик и Том уже были в Дублине.",
    lines: [
      line("siobhan", "Have you ever been to a real Irish music session?", "Вы когда-нибудь были на настоящем вечере ирландской музыки?"),
      line("tom", "Once, in Dublin. But that was ages ago.", "Один раз, в Дублине. Но это было сто лет назад."),
      line("declan", "I've played here every Friday for thirty years.", "Я играю здесь каждую пятницу уже тридцать лет."),
      line("murzik", "How many times have you played this song?", "Сколько раз ты играл эту песню?"),
      line("declan", "I've lost count! A thousand times? Here — have you ever played the drum?", "Я сбился со счёта! Тысячу раз? Держи — ты когда-нибудь играл на барабане?"),
      line("murzik", "Never. But I've always wanted to.", "Никогда. Но я всегда этого хотел."),
      line("siobhan", "Then join in! I'll play the fiddle. One, two, three!", "Тогда присоединяйся! Я сыграю на скрипке. Раз, два, три!"),
    ],
    gist: choice("enga4-d1", "Сколько раз Том был на вечере ирландской музыки?", [
      ["Один раз, в Дублине.", true],
      ["Никогда.", false],
      ["Каждую пятницу.", false],
    ]),
  },
  grammar: [
    {
      title: "Once, twice, three times",
      paragraphs: [
        "Сколько раз в жизни: I've been to Dublin once. She's played here twice. We've seen this film three times.",
        "Сколько раз за период: twice a week — два раза в неделю, three times a day — три раза в день. I've always wanted to… — «Я всегда хотел(а)…».",
      ],
      examples: [
        { ru: "I've been to Ireland twice.", en: "Я был(а) в Ирландии два раза." },
        { ru: "He plays here once a week.", en: "Он играет здесь раз в неделю." },
      ],
    },
  ],
  tasks: [
    listen("enga4-t1", "Послушай. Как давно Деклан играет в этом пабе?", "I've played here every Friday for thirty years.", [
      ["Тридцать лет.", true],
      ["Тринадцать лет.", false],
      ["Три года.", false],
    ]),
    choice("enga4-t2", "Как сказать «Я был(а) в Ирландии два раза»?", [
      ["I've been to Ireland twice.", true],
      ["I was to Ireland twice.", false],
      ["I was being to Ireland twice.", false],
    ], { skill: "grammar" }),
    fill("enga4-t3", "Выбери правильное слово: «Он играет здесь раз в неделю».", "He plays here", "a week.", "once", ["once", "one", "first"], { skill: "grammar" }),
    read("enga4-t4", "Прочитай афишу паба. В какие дни там играют музыку?", "THE HARBOUR BAR\nTraditional music sessions\nTwice a week: Wednesday & Friday, 9 pm\nEveryone welcome — bring your fiddle!", [
      ["По средам и пятницам.", true],
      ["Каждый день.", false],
      ["Только по субботам.", false],
    ]),
    match("enga4-t5", "Соедини пары.", [
      ["once", "один раз"],
      ["twice", "два раза"],
      ["a fiddle", "скрипка"],
      ["Join in!", "Присоединяйся!"],
    ], { skill: "words" }),
    tf("enga4-t6", "Мурзик уже много раз играл на барабане.", false, "listening"),
    speak("enga4-t7", "What have you always wanted to do?", "I've always wanted to play the guitar. I've tried it once, but I've never had lessons.", "Я всегда хотел(а) играть на гитаре. Один раз пробовал(а), но уроков у меня никогда не было.", {
      help: "Расскажи вслух, о чём ты всегда мечтал(а): I've always wanted to…",
    }),
  ],
  reward: {
    itemId: "bodhran",
    itemName: "Бодран",
    itemNameRu: "Bodhrán drum",
    ru: "Boom-ba-da-boom!",
    en: "Бум-ба-да-бум!",
    a11y: "Над окном фургона висит круглый плоский барабан с нарисованным голубым фургоном и маленькой деревянной палочкой.",
    image: p("bodhran"),
    steps: ["Мурзик играет на барабане весь вечер.", "Не всегда в ритм, но всем весело.", "Деклан дарит ему старый бодран.", "Шивон рисует на нём голубой фургон."],
    bridge: "Утром к палатке Деклана подходит маленькая пожилая женщина с огромной кастрюлей. Это его мама, Нора.",
  },
};

const galway5: Lesson = {
  id: "en-a2-galway-5",
  level: "A2",
  cityId: "en-galway",
  number: 5,
  title: "Irish stew with Nora — Ирландское рагу с Норой",
  minutes: 8,
  goals: ["Понять рецепт и указания на кухне", "Сказать, как долго ты что-то делаешь: for sixty years", "Never… so many"],
  vocabNote: "Simmer — тушить на медленном огне. Chunks — крупные куски. Peel — чистить (овощи).",
  vocab: [
    v("enga5-1", "Add some water.", "Добавь немного воды.", "Нора наливает воду из кувшина в кастрюлю.", "Послушать Add some water", p("l5-1")),
    v("enga5-2", "Peel the potatoes.", "Почисти картошку.", "Мурзик с овощечисткой и горой картошки.", "Послушать Peel the potatoes", p("l5-2")),
    v("enga5-3", "a big pot", "большая кастрюля", "Огромная чёрная кастрюля на плите.", "Послушать a big pot", p("l5-3")),
    v("enga5-4", "Cut it into chunks.", "Нарежь крупными кусками.", "Нож и крупно нарезанное мясо.", "Послушать Cut it into chunks", p("l5-4")),
    v("enga5-5", "Let it simmer for two hours.", "Пусть тушится на медленном огне два часа.", "Большая кастрюля на плите, лёгкий пар.", "Послушать Let it simmer for two hours", p("l5-5")),
    v("enga5-6", "I've never peeled so many potatoes!", "Я никогда не чистил(а) столько картошки!", "Мурзик сидит в горе картофельных очисток.", "Послушать I've never peeled so many potatoes", p("l5-6")),
    v("enga5-7", "I've made it for sixty years.", "Я готовлю его уже шестьдесят лет.", "Нора с половником, на стене старые фотографии.", "Послушать I've made it for sixty years", p("l5-7")),
    v("enga5-8", "Good stew never hurries.", "Хорошее рагу не торопится.", "Нора поднимает палец, как учительница.", "Послушать Good stew never hurries", p("l5-8")),
  ],
  letters: [
    letter("lamb = [лэм]", "В lamb буква b на конце не читается: [лэм]. Так же в comb [коум] и climb [клайм].", "Irish stew with lamb", "ирландское рагу с бараниной"),
    letter("potatoes = [пэтЭйтоуз]", "Ударение на второй слог: po-TA-toes.", "Peel the potatoes.", "Почисти картошку."),
  ],
  dialogue: {
    title: "Кухня Норы",
    note: "Нора — мама Деклана, ей 85 лет. Её рагу знает весь Голуэй.",
    lines: [
      line("nora", "So you've never made Irish stew? Right. Peel the potatoes. All of them.", "Значит, вы никогда не готовили ирландское рагу? Хорошо. Чистите картошку. Всю."),
      line("murzik", "All of them? I've never peeled so many potatoes!", "Всю? Я никогда не чистил столько картошки!"),
      line("nora", "Then cut the lamb and the carrots into chunks. Put it all in a big pot and add some water.", "Потом нарежьте баранину и морковь крупными кусками. Сложите всё в большую кастрюлю и добавьте немного воды."),
      line("tom", "How long does it cook?", "Сколько оно готовится?"),
      line("nora", "Let it simmer for two hours. Slowly. Good stew never hurries.", "Пусть тушится два часа. Медленно. Хорошее рагу не торопится."),
      line("tom", "Have you ever changed the recipe?", "Вы когда-нибудь меняли рецепт?"),
      line("nora", "Never! I've made it the same way for sixty years. And my mother made it the same way.", "Никогда! Я готовлю его одинаково уже шестьдесят лет. И моя мама готовила так же."),
    ],
    gist: choice("enga5-d1", "Как долго тушится рагу?", [
      ["Два часа.", true],
      ["Двадцать минут.", false],
      ["Шестьдесят минут.", false],
    ]),
  },
  grammar: [
    {
      title: "Present Perfect + for: как давно",
      paragraphs: [
        "Если что-то началось в прошлом и продолжается сейчас, по-английски говорят Present Perfect + for: I've made it for sixty years — «Я готовлю его (уже) шестьдесят лет». По-русски здесь настоящее время! (Носители часто говорят и I've been making it — эту форму мы выучим позже.)",
        "Never… so many / so much — «никогда… столько»: I've never peeled so many potatoes. I've never eaten so much.",
      ],
      examples: [
        { ru: "We've had the van for two months.", en: "Фургон у нас уже два месяца." },
        { ru: "I've never seen so much rain!", en: "Я никогда не видел(а) столько дождя!" },
      ],
    },
  ],
  tasks: [
    listen("enga5-t1", "Послушай. Сколько лет Нора готовит это рагу?", "Never! I've made it the same way for sixty years. And my mother made it the same way.", [
      ["Шестьдесят лет.", true],
      ["Шестнадцать лет.", false],
      ["Два часа.", false],
    ]),
    choice("enga5-t2", "Как сказать «Фургон у нас уже два месяца»?", [
      ["We've had the van for two months.", true],
      ["We have the van since two months.", false],
      ["We had the van for two months ago.", false],
    ], { skill: "grammar" }),
    fill("enga5-t3", "Выбери правильное слово: «Я никогда не видел(а) столько дождя!»", "I've never seen so", "rain!", "much", ["much", "many", "lot"], { skill: "grammar" }),
    read("enga5-t4", "Прочитай рецепт Норы. Что делать после того, как нарезаешь мясо?", "NORA'S IRISH STEW\n1. Peel 2 kg of potatoes.\n2. Cut the lamb into chunks.\n3. Add carrots, onions and water.\n4. Let it simmer for 2 hours. Don't hurry!", [
      ["Добавить морковь, лук и воду.", true],
      ["Почистить картошку.", false],
      ["Сразу подавать.", false],
    ]),
    match("enga5-t5", "Соедини пары.", [
      ["Add some water.", "Добавь немного воды."],
      ["Peel the potatoes.", "Почисти картошку."],
      ["Cut it into chunks.", "Нарежь крупными кусками."],
      ["a big pot", "большая кастрюля"],
    ], { skill: "words" }),
    tf("enga5-t6", "Нора часто меняет рецепт рагу.", false, "listening"),
    speak("enga5-t7", "Is there a dish your family has made for many years?", "My grandmother has made borscht for fifty years. She's never changed the recipe!", "Моя бабушка варит борщ уже пятьдесят лет. Она никогда не меняла рецепт!", {
      help: "Расскажи вслух о семейном блюде: …has made it for … years.",
    }),
  ],
  reward: {
    itemId: "potato-peeler",
    itemName: "Овощечистка Норы",
    itemNameRu: "Nora's potato peeler",
    ru: "Two kilos of potatoes — no problem!",
    en: "Два кило картошки — не проблема!",
    a11y: "На крючке в фургоне висит старая овощечистка с деревянной ручкой, рядом — мешок картошки.",
    image: p("potato-peeler"),
    steps: ["К обеду картошка почищена — вся.", "Нора дарит Мурзику свою старую овощечистку.", "«Ей шестьдесят лет. Береги её».", "Рагу тушится два часа. Весь рынок нюхает воздух."],
    bridge: "В воскресенье вечером Шивон поднимается на маленькую сцену с микрофоном. Пора объявлять победителей.",
  },
};

const galway6: Lesson = {
  id: "en-a2-galway-6",
  level: "A2",
  cityId: "en-galway",
  number: 6,
  title: "We've won! — Мы победили!",
  minutes: 8,
  goals: ["Понять объявление со сцены", "Порадоваться и поздравить", "The best … I've ever …"],
  vocabNote: "The judges — жюри, судьи. The winner — победитель. Best Newcomer — «лучший новичок».",
  vocab: [
    v("enga6-1", "the judges", "жюри, судьи", "Три человека за столом с карандашами и тарелками.", "Послушать the judges", p("l6-1")),
    v("enga6-2", "the results", "результаты", "Шивон держит конверт на сцене.", "Послушать the results", p("l6-2")),
    v("enga6-3", "And the winner is…", "И побеждает…", "Все замерли и ждут.", "Послушать And the winner is", p("l6-3")),
    v("enga6-4", "Best Newcomer", "лучший новичок", "Зелёная розетка с золотыми буквами.", "Послушать Best Newcomer", p("l6-4")),
    v("enga6-5", "We've won!", "Мы победили!", "Мурзик и Том прыгают от радости.", "Послушать We've won", p("l6-5")),
    v("enga6-6", "We've never won anything!", "Мы никогда ничего не выигрывали!", "Том держится за голову от удивления.", "Послушать We've never won anything", p("l6-6")),
    v("enga6-7", "the best stew I've ever tasted", "лучшее рагу, которое я пробовал(а)", "Судья с закрытыми глазами держит ложку.", "Послушать the best stew I've ever tasted", p("l6-7")),
    v("enga6-8", "Well done, you two!", "Молодцы, вы оба!", "Деклан хлопает Тома по плечу.", "Послушать Well done, you two", p("l6-8")),
  ],
  letters: [
    letter("won = [уан]", "Won (третья форма win) звучит как one [уан].", "We've won!", "Мы победили!"),
    letter("judges = [джАджиз]", "dg читается как [дж]; в конце -es звучит [из].", "the judges", "судьи"),
  ],
  dialogue: {
    title: "Сцена у гавани",
    note: "После «лучшее, которое я когда-либо…» по-английски идёт Present Perfect: the best stew I've ever tasted.",
    lines: [
      line("siobhan", "Ladies and gentlemen, the results! The prize for Best Newcomer goes to… Hope on Wheels!", "Дамы и господа, результаты! Приз «Лучший новичок» получает… «Hope on Wheels»!"),
      line("tom", "We've won? We've never won anything!", "Мы победили? Мы никогда ничего не выигрывали!"),
      line("murzik", "I can't believe it! Tom, we've won!", "Не могу поверить! Том, мы победили!"),
      line("siobhan", "The judges said it's the best stew they've ever tasted.", "Судьи сказали, что это лучшее рагу, которое они когда-либо пробовали."),
      line("nora", "After mine, of course.", "После моего, конечно."),
      line("declan", "Well done, you two! I've seen a lot of newcomers. You're the best.", "Молодцы, вы оба! Я видел много новичков. Вы лучшие."),
    ],
    gist: choice("enga6-d1", "Какой приз получил фургон?", [
      ["«Лучший новичок».", true],
      ["«Лучшие устрицы».", false],
      ["Никакого.", false],
    ]),
  },
  grammar: [
    {
      title: "The best … I've ever …",
      paragraphs: [
        "Самое-самое в жизни: превосходная степень + I've ever + третья форма. The best stew I've ever tasted. The most beautiful place I've ever seen.",
        "Свежая новость с результатом сейчас — тоже Present Perfect: We've won! She's lost her badge!",
      ],
      examples: [
        { ru: "It's the best festival I've ever been to.", en: "Это лучший фестиваль, на котором я был(а)." },
        { ru: "This is the funniest film we've ever seen.", en: "Это самый смешной фильм, который мы видели." },
      ],
    },
  ],
  tasks: [
    listen("enga6-t1", "Послушай. Что сказали судьи?", "The judges said it's the best stew they've ever tasted.", [
      ["Это лучшее рагу, которое они пробовали.", true],
      ["Рагу слишком солёное.", false],
      ["Они никогда не ели рагу.", false],
    ]),
    choice("enga6-t2", "Как сказать «Это лучший фестиваль, на котором я был(а)»?", [
      ["It's the best festival I've ever been to.", true],
      ["It's the best festival I ever have went to.", false],
      ["It's the most best festival I've ever been to.", false],
    ], { skill: "grammar" }),
    fill("enga6-t3", "Выбери правильную форму: «Мы победили!»", "We've", "!", "won", ["won", "win", "winned"], { skill: "grammar" }),
    read("enga6-t4", "Прочитай пост фестиваля. Кто получил приз за лучший суп?", "GALWAY STREET FOOD FESTIVAL — WINNERS!\nBest Soup: Molly's Chowder Pot\nBest Newcomer: Hope on Wheels\nBest Stall Design: The Pie Wagon", [
      ["Molly's Chowder Pot.", true],
      ["Hope on Wheels.", false],
      ["The Pie Wagon.", false],
    ]),
    match("enga6-t5", "Соедини пары.", [
      ["the judges", "судьи"],
      ["the results", "результаты"],
      ["Best Newcomer", "лучший новичок"],
      ["Well done!", "Молодцы!"],
    ], { skill: "words" }),
    tf("enga6-t6", "Нора считает, что её рагу всё равно лучше.", true, "listening"),
    speak("enga6-t7", "What's the best meal you've ever eaten?", "The best meal I've ever eaten was my grandmother's soup. I've never tasted anything better!", "Лучшее, что я когда-либо ел(а), — бабушкин суп. Ничего вкуснее я не пробовал(а)!", {
      help: "Расскажи вслух о самом-самом: The best … I've ever …",
    }),
  ],
  reward: {
    itemId: "rosette",
    itemName: "Розетка «Лучший новичок»",
    itemNameRu: "Best Newcomer rosette",
    ru: "Our first prize!",
    en: "Наш первый приз!",
    a11y: "На борту голубого фургона приколота большая зелёная розетка с лентами и золотыми буквами BEST NEWCOMER.",
    image: p("rosette"),
    steps: ["Шивон прикалывает к фургону зелёную розетку.", "На ней золотом: BEST NEWCOMER.", "Том фотографирует её двадцать раз.", "Миссис Хоуп по видеосвязи плачет от радости."],
    bridge: "Фестиваль кончился. Утром к гавани подъезжает автобус из Белфаста — и из него выходит знакомый парень с кудрявыми волосами.",
  },
};

const galway7: Lesson = {
  id: "en-a2-galway-7",
  level: "A2",
  cityId: "en-galway",
  number: 7,
  title: "Galway exam — Экзамен: Голуэй",
  minutes: 9,
  goals: ["Понять длинный рассказ на слух", "Говорить об опыте", "Повторить всё из Голуэя"],
  vocabNote: "Урок 7 — экзамен города: длинная аудиоистория и повторение всего из Голуэя.",
  vocab: [
    v("enga7-1", "Our eleventh recipe!", "Наш одиннадцатый рецепт!", "Мурзик держит карточку с рецептом рагу.", "Послушать Our eleventh recipe", p("l7-1")),
    v("enga7-2", "Have you ever been to America?", "Ты когда-нибудь бывал(а) в Америке?", "Шивон с любопытством смотрит на Мурзика.", "Послушать Have you ever been to America", p("l7-2")),
    v("enga7-3", "We're flying to Seattle tomorrow.", "Завтра мы летим в Сиэтл.", "Два билета на самолёт в лапах Мурзика.", "Послушать We're flying to Seattle tomorrow", p("l7-3")),
    v("enga7-4", "We'll rent a van there.", "Там мы возьмём фургон напрокат.", "Карта: стрелка через океан.", "Послушать We'll rent a van there", p("l7-4")),
    v("enga7-5", "Look after our van!", "Береги наш фургон!", "Том передаёт ключи Конору.", "Послушать Look after our van", p("l7-5")),
    v("enga7-6", "the Atlantic", "Атлантический океан", "Бескрайний серый океан за гаванью.", "Послушать the Atlantic", p("l7-6")),
    v("enga7-7", "We've never been to Seattle.", "Мы никогда не были в Сиэтле.", "Мурзик ищет Сиэтл на огромном глобусе.", "Послушать We've never been to Seattle", p("l7-7")),
    v("enga7-8", "Come back next year!", "Приезжайте в следующем году!", "Деклан и Нора машут у гавани.", "Послушать Come back next year", p("l7-8")),
  ],
  letters: [
    letter("flown = [флоун]", "Fly → flew → flown [флоун].", "We've flown to Sydney once.", "Мы один раз летали в Сидней."),
  ],
  dialogue: {
    title: "Прощание у гавани",
    note: "Конор, внук Мэгги, обещал отвезти бабушку на фестиваль в Лондон. Теперь они поедут на голубом фургоне.",
    lines: [
      line("conor", "Right, give me the keys. I'll take the van to London — and pick up Gran in Belfast on the way. I'll drive slowly, I promise.", "Так, давай ключи. Я отгоню фургон в Лондон — и по дороге заберу бабушку в Белфасте. Буду ехать медленно, обещаю."),
      line("tom", "Thanks, Conor. Look after our van!", "Спасибо, Конор. Береги наш фургон!"),
      line("siobhan", "So where next? Have you ever been to America?", "Куда дальше? Вы когда-нибудь бывали в Америке?"),
      line("murzik", "Yes, we have! We've been to New York, Boston and San Francisco. But we've never been to Seattle.", "Да! Мы были в Нью-Йорке, Бостоне и Сан-Франциско. Но в Сиэтле никогда не были."),
      line("tom", "We're flying there tomorrow. We'll rent a van there.", "Завтра летим туда. Там возьмём фургон напрокат."),
      line("nora", "Here's the recipe for your road book. Our family's Irish stew.", "Вот рецепт для вашей книги дороги. Наше семейное ирландское рагу."),
      line("murzik", "Our eleventh recipe! The best stew in the world.", "Наш одиннадцатый рецепт! Лучшее рагу на свете."),
      line("declan", "Safe travels, you two! Come back next year!", "Счастливого пути, вы оба! Приезжайте в следующем году!"),
    ],
    gist: choice("enga7-d1", "Что будет с голубым фургоном?", [
      ["Конор отгонит его в Лондон.", true],
      ["Он полетит в Сиэтл.", false],
      ["Он останется у Деклана.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем Голуэй",
      paragraphs: [
        "Опыт: Have you ever…? — Yes, I have. / No, never. I've never… Сколько раз: once, twice, three times, lots of times. How many times have you…?",
        "Когда и как это было — Past Simple: I tried oysters in Brighton in the spring. Как давно: I've made it for sixty years. Самое-самое: the best … I've ever …",
      ],
      examples: [
        { ru: "Have you ever been to Galway? — Yes, twice. I went there last year.", en: "Ты когда-нибудь был(а) в Голуэе? — Да, два раза. Я ездил(а) туда в прошлом году." },
        { ru: "It's the best festival we've ever been to!", en: "Это лучший фестиваль в нашей жизни!" },
      ],
    },
  ],
  tasks: [
    listen("enga7-t1", "Аудиоистория: Шивон рассказывает о фестивале. Сколько палаток приезжает каждый год?", "I've organised this festival for eight years. Every year about forty stalls come from all over Ireland. This year we've had rain, wind and sun — sometimes in one hour! I've seen a lot of food trucks, but I've never seen a cat on a stall before. And I've never tasted a better stew — except Nora's, of course.", [
      ["Около сорока.", true],
      ["Около четырнадцати.", false],
      ["Восемь.", false],
    ]),
    listen("enga7-t2", "Послушай ещё раз начало рассказа Шивон. Сколько лет она организует фестиваль?", "I've organised this festival for eight years. Every year about forty stalls come from all over Ireland.", [
      ["Восемь лет.", true],
      ["Сорок лет.", false],
      ["Это её первый фестиваль.", false],
    ], { skill: "listening" }),
    choice("enga7-t3", "Как сказать «Я ездил(а) туда в прошлом году»?", [
      ["I went there last year.", true],
      ["I've gone there last year.", false],
      ["I've went there last year.", false],
    ], { skill: "grammar" }),
    read("enga7-t4", "Прочитай посадочный талон. Во сколько вылет?", "BOARDING PASS\nDUBLIN → SEATTLE\nPassenger: TOM HOPE (+ 1 cat in cabin)\nGate 12 · Boarding 10:40 · Departure 11:20", [
      ["В 11:20.", true],
      ["В 10:40.", false],
      ["В 12:00.", false],
    ]),
    script("enga7-t5", "Попрощайся с Декланом и Норой.", [
      { speaker: "Деклан", text: "Have you ever been to America?" },
      { speaker: "Ты", answer: "Yes, twice! But we've never been to Seattle.", options: ["Yes, twice! But we've never been to Seattle.", "Yes, I've been there tomorrow.", "Peel the potatoes."] },
      { speaker: "Нора", text: "Safe travels! Don't forget the recipe." },
      { speaker: "Ты", answer: "Thank you! It's the best stew I've ever tasted.", options: ["Thank you! It's the best stew I've ever tasted.", "Thank you! I've lost count.", "Thank you! Where's our pitch?"] },
    ], { skill: "review" }),
    match("enga7-t6", "Повторяем Голуэй: соедини пары.", [
      ["a stall", "палатка"],
      ["twice", "два раза"],
      ["salty", "солёный"],
      ["the judges", "судьи"],
    ], { skill: "review" }),
    speak("enga7-t7", "Tell me about a trip you've never forgotten.", "I've been to the sea many times, but I've never forgotten my first trip. I went there with my family when I was seven.", "Я много раз был(а) на море, но никогда не забуду свою первую поездку. Я ездил(а) туда с семьёй, когда мне было семь.", {
      help: "Расскажи вслух о поездке: начни с Present Perfect, подробности — в Past Simple.",
    }),
  ],
  reward: {
    itemId: "recipe-irish-stew",
    itemName: "Рецепт «Irish stew»",
    itemNameRu: "Irish stew recipe card",
    ru: "Our eleventh recipe — sixty years old!",
    en: "Наш одиннадцатый рецепт — ему шестьдесят лет!",
    a11y: "Карточка с рецептом ирландского рагу вклеена на одиннадцатую страницу голубой тетради; в углу — зелёная ленточка от розетки «Best Newcomer».",
    image: p("recipe-irish-stew"),
    steps: ["Мурзик вклеивает рецепт Норы на одиннадцатую страницу.", "Рядом — зелёная ленточка от первого приза.", "Фургон уезжает с Конором в Лондон.", "А Мурзика и Тома ждёт самолёт через океан."],
  },
};

const story: CityStory = {
  home: {
    name: "Фургон у гавани",
    nameRu: "The van by the harbour",
    image: p("home"),
    a11y: "Голубой фургон «Hope on Wheels» стоит у гавани Голуэя; рядом пустое место для палатки с номером 14, на воде — лодки.",
  },
  keepsakeId: "recipe-irish-stew",
  welcomeRu: "Hello, Galway!",
  welcomeEn: "Привет, Голуэй!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Голубой фургон в Голуэе: разноцветные домики, уличные музыканты и залив с лодками.",
  departureImage: p("departure"),
  departureA11y: "Конор за рулём голубого фургона машет из окна; Деклан, Нора и Шивон машут у гавани, Мурзик держит карточку с рецептом.",
  finale: [
    {
      image: p("finale-1"),
      a11y: "У фургона уютно: бейджи участников, зелёный навес, кладдахское кольцо на зеркале, бодран над окном, старая овощечистка, розетка «Best Newcomer» и рецепт рагу.",
      lines: [
        { en: "Первый настоящий фестиваль — и первый приз." },
        { en: "В книге дороги одиннадцатый рецепт: ирландское рагу Норы." },
      ],
    },
    {
      image: p("finale-2"),
      a11y: "Вечер в пабе: Шивон играет на скрипке, Мурзик на бодране, Деклан поёт, Нора хлопает в ладоши.",
      lines: [
        { ru: "Galway complete!", en: "Голуэй пройден!" },
        { en: "7 / 7 уроков" },
        { ru: "It's the best festival we've ever been to!", en: "Это лучший фестиваль в нашей жизни!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Конор за рулём голубого фургона машет из окна; Деклан, Нора и Шивон машут у гавани, Мурзик держит карточку с рецептом.",
      lines: [
        { ru: "Goodbye, Galway! Look after our van, Conor!", en: "До свидания, Голуэй! Береги наш фургон, Конор!" },
        { ru: "Next stop: Seattle!", en: "Следующая остановка: Сиэтл!" },
      ],
    },
    {
      image: p("finale-4"),
      a11y: "Самолёт летит над Атлантическим океаном; в иллюминаторе — Мурзик в наушниках.",
      lines: [{ ru: "Galway → Dublin → Seattle", en: "Голуэй → Дублин → Сиэтл" }],
    },
    {
      image: pic("en/seattle/arrival"),
      a11y: "Мурзик и Том в Сиэтле: дождливая гавань, высокая башня с круглой верхушкой и снежная гора вдали.",
      lines: [{ ru: "Hello, Seattle!", en: "Привет, Сиэтл!" }],
    },
  ],
};

export const enGalway = {
  id: "en-galway",
  name: "Голуэй",
  nameEn: "Galway",
  lessons: [galway1, galway2, galway3, galway4, galway5, galway6, galway7],
  story,
};
