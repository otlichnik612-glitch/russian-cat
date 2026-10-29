import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "../tr/make";

/* Новый Орлеан · «Свободное время» · like / love / hate + -ing, как часто (always, sometimes, never), выходные, концерт, приглашения. */

const p = (name: string) => pic(`en/neworleans/${name}`);

const neworleans1: Lesson = {
  id: "en-a1-neworleans-1",
  level: "A1",
  cityId: "en-neworleans",
  number: 1,
  title: "I like music — Я люблю музыку",
  minutes: 7,
  goals: ["Сказать, какую музыку любишь", "Спросить: What kind of music do you like?", "Назвать любимого певца"],
  vocabNote: "What kind of…? — «Какой (вид, сорт)…?» What kind of music? — «Какую музыку?» Favourite — «любимый» (в Америке пишут favorite).",
  vocab: [
    v("enno1-1", "What kind of music do you like?", "Какую музыку ты любишь?", "Женщина в ярком платке с микрофоном улыбается Мурзику.", "Послушать What kind of music do you like", p("l1-1")),
    v("enno1-2", "I like jazz.", "Я люблю джаз.", "Духовой оркестр играет на улице.", "Послушать I like jazz", p("l1-2")),
    v("enno1-3", "I love rock music!", "Обожаю рок!", "Мурзик с игрушечной гитарой прыгает на кровати.", "Послушать I love rock music", p("l1-3")),
    v("enno1-4", "classical music", "классическая музыка", "Скрипачи в чёрных костюмах на сцене.", "Послушать classical music", p("l1-4")),
    v("enno1-5", "Who's your favourite singer?", "Кто твой любимый певец?", "Мурзик держит воображаемый микрофон.", "Послушать Who's your favourite singer", p("l1-5")),
    v("enno1-6", "She sings in a band.", "Она поёт в группе.", "Певица и четыре музыканта на маленькой сцене.", "Послушать She sings in a band", p("l1-6")),
    v("enno1-7", "It's my favourite song.", "Это моя любимая песня.", "Мурзик закрыл глаза и покачивается под музыку.", "Послушать It's my favourite song", p("l1-7")),
  ],
  dialogue: {
    title: "Бернадетт",
    note: "Бернадетт — джазовая певица, подруга Тони. Band — «группа, оркестр».",
    lines: [
      line("bernadette", "Welcome to New Orleans, sugar! I'm Bernadette. I sing jazz.", "Добро пожаловать в Новый Орлеан, сладкий! Я Бернадетт. Я пою джаз."),
      line("murzik", "Hello! I love music!", "Здравствуйте! Я люблю музыку!"),
      line("bernadette", "What kind of music do you like?", "А какую музыку ты любишь?"),
      line("murzik", "I like jazz… and I love rock music!", "Мне нравится джаз… а рок я обожаю!"),
      line("tom", "I like classical music. My favourite singer is… you, Bernadette!", "А я люблю классическую музыку. Моя любимая певица — это… вы, Бернадетт!"),
      line("bernadette", "Ha! Sweet boy! Come to my concert on Saturday. I sing with my band.", "Ха! Милый мальчик! Приходите в субботу на мой концерт. Я пою со своей группой."),
    ],
    gist: choice("enno1-d1", "Кто такая Бернадетт?", [
      ["Джазовая певица.", true],
      ["Повар закусочной.", false],
      ["Таксистка.", false],
    ]),
  },
  grammar: [
    {
      title: "What kind of…? Favourite",
      paragraphs: [
        "What kind of music / films / books do you like? — Какую музыку / какие фильмы / книги ты любишь?",
        "Favourite — «любимый»: my favourite song, her favourite singer. Вопрос: What's your favourite song? Who's your favourite singer?",
      ],
      examples: [
        { ru: "What kind of films do you like? — I like comedies.", en: "Какие фильмы ты любишь? — Комедии." },
        { ru: "My favourite band is from Liverpool.", en: "Моя любимая группа из Ливерпуля." },
      ],
    },
  ],
  tasks: [
    choice("enno1-t1", "Как спросить «Какую музыку ты любишь?»", [
      ["What kind of music do you like?", true],
      ["What music kind you like?", false],
      ["What kind music do you like?", false],
    ], { skill: "grammar" }),
    listen("enno1-t2", "Послушай. Какую музыку он любит?", "I love classical music.", [
      ["Классическую.", true],
      ["Джаз.", false],
      ["Рок.", false],
    ]),
    match("enno1-t3", "Соедини пары.", [
      ["song", "песня"],
      ["singer", "певец"],
      ["band", "группа"],
      ["favourite", "любимый"],
    ], { skill: "words" }),
    missing("enno1-t4", "Какой буквы не хватает? («музыка»)", "mus", "c", "i", ["i", "e", "y"]),
    speak("enno1-t5", "What kind of music do you like?", "I like rock music. My favourite band is Queen.", "Я люблю рок. Моя любимая группа — Queen.", { help: "Расскажи вслух, какую музыку ты любишь." }),
    choice("enno1-t6", "Как сказать «Здесь есть парк»?", [
      ["There's a park here.", true],
      ["It's a park here is.", false],
      ["There are a park here.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "rocking-chair",
    itemName: "Кресло-качалка",
    itemNameRu: "Rocking chair",
    ru: "Hooray! A rocking chair!",
    en: "Ура! Кресло-качалка!",
    a11y: "Белое деревянное кресло-качалка стоит на веранде с коваными перилами.",
    image: p("rocking-chair"),
    steps: ["Бернадетт показывает Мурзику комнату с верандой.", "На веранде — белое кресло-качалка.", "«For listening to music in the evening.» — «Чтобы слушать музыку по вечерам».", "Мурзик качается: туда-сюда, туда-сюда."],
    bridge: "Вечером Бернадетт спрашивает: «What do you like doing, Murzik?»",
  },
};

const neworleans2: Lesson = {
  id: "en-a1-neworleans-2",
  level: "A1",
  cityId: "en-neworleans",
  number: 2,
  title: "I love dancing — Обожаю танцевать",
  minutes: 7,
  goals: ["Сказать, что любишь делать: I like reading", "Сказать, что не любишь делать", "Спросить: What do you like doing?"],
  vocabNote: "После like, love, hate о занятиях ставят глагол с -ing: I like reading — я люблю читать. I hate getting up early — терпеть не могу рано вставать.",
  vocab: [
    v("enno2-1", "What do you like doing?", "Что ты любишь делать?", "Бернадетт сидит в кресле с чашкой и смотрит на Мурзика.", "Послушать What do you like doing", p("l2-1")),
    v("enno2-2", "I love dancing.", "Обожаю танцевать.", "Мурзик кружится в танце.", "Послушать I love dancing", p("l2-2")),
    v("enno2-3", "I like reading.", "Я люблю читать.", "Том читает книгу на веранде.", "Послушать I like reading", p("l2-3")),
    v("enno2-4", "I like cooking.", "Я люблю готовить.", "Мурзик в фартуке мешает что-то в кастрюле.", "Послушать I like cooking", p("l2-4")),
    v("enno2-5", "I don't like swimming.", "Я не люблю плавать.", "Мурзик с ужасом смотрит на бассейн.", "Послушать I don't like swimming", p("l2-5")),
    v("enno2-6", "I hate getting up early.", "Терпеть не могу рано вставать.", "Том с подушкой на голове, будильник звенит.", "Послушать I hate getting up early", p("l2-6")),
    v("enno2-7", "She loves singing.", "Она обожает петь.", "Бернадетт поёт, поливая цветы.", "Послушать She loves singing", p("l2-7")),
  ],
  dialogue: {
    title: "Вечер на веранде",
    note: "Water — «вода», но о кошке: cats hate water — коты терпеть не могут воду.",
    lines: [
      line("bernadette", "Murzik, what do you like doing?", "Мурзик, что ты любишь делать?"),
      line("murzik", "I love dancing and I like cooking!", "Обожаю танцевать и люблю готовить!"),
      line("bernadette", "Do you like swimming?", "А плавать любишь?"),
      line("murzik", "No! I hate swimming. I'm a cat!", "Нет! Терпеть не могу плавать. Я же кот!"),
      line("tom", "I like reading and taking photos. And I hate getting up early!", "Я люблю читать и фотографировать. И терпеть не могу рано вставать!"),
      line("bernadette", "And I love singing — all day, every day!", "А я обожаю петь — весь день, каждый день!"),
    ],
    gist: choice("enno2-d1", "Что Мурзик терпеть не может?", [
      ["Плавать.", true],
      ["Танцевать.", false],
      ["Готовить.", false],
    ]),
  },
  grammar: [
    {
      title: "Like + -ing",
      paragraphs: [
        "О любимых занятиях: like / love / hate + глагол с -ing: I like reading. She loves singing. They hate waiting.",
        "Правописание: dance → dancing (без e), swim → swimming (две m), get → getting.",
      ],
      examples: [
        { ru: "I love cooking for my friends.", en: "Обожаю готовить для друзей." },
        { ru: "Tom doesn't like waiting.", en: "Том не любит ждать." },
      ],
    },
  ],
  tasks: [
    choice("enno2-t1", "Как сказать «Я люблю читать»?", [
      ["I like reading.", true],
      ["I like read.", false],
      ["I like to reading.", false],
    ], { skill: "grammar" }),
    listen("enno2-t2", "Послушай. Что она любит?", "She loves dancing, but she hates swimming.", [
      ["Танцевать, но не плавать.", true],
      ["Плавать, но не танцевать.", false],
      ["Петь и танцевать.", false],
    ]),
    match("enno2-t3", "Соедини пары.", [
      ["dancing", "танцевать"],
      ["swimming", "плавать"],
      ["cooking", "готовить"],
      ["reading", "читать"],
    ], { skill: "words" }),
    missing("enno2-t4", "Какой буквы не хватает? («плавание»)", "swi", "ming", "m", ["m", "n", "w"]),
    speak("enno2-t5", "What do you like doing?", "I like reading and I love walking in the park.", "Я люблю читать и обожаю гулять в парке.", { help: "Расскажи вслух, что ты любишь делать." }),
    choice("enno2-t6", "Как спросить «Кто твой любимый певец?»", [
      ["Who's your favourite singer?", true],
      ["What's your favourite singer is?", false],
      ["Who your singer favourite?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "record",
    itemName: "Джазовая пластинка",
    itemNameRu: "Jazz record",
    ru: "Hooray! A jazz record!",
    en: "Ура! Джазовая пластинка!",
    a11y: "Старая виниловая пластинка в картонном конверте с рисунком трубы и луны.",
    image: p("record"),
    steps: ["Бернадетт достаёт старую пластинку.", "«My first record. I was nineteen!» — «Моя первая пластинка. Мне было девятнадцать!»", "Она подписывает конверт для Мурзика.", "Пластинка стоит на полке."],
    bridge: "Мурзик спрашивает Бернадетт: «Do you sing every day?»",
  },
};

const neworleans3: Lesson = {
  id: "en-a1-neworleans-3",
  level: "A1",
  cityId: "en-neworleans",
  number: 3,
  title: "Always, sometimes, never — Всегда, иногда, никогда",
  minutes: 7,
  goals: ["Сказать, как часто: always, usually, sometimes, never", "Поставить эти слова на правильное место", "Спросить: How often?"],
  vocabNote: "Always, usually, often, sometimes, never стоят перед глаголом: I always drink tea. Но после is / are: She's always late.",
  vocab: [
    v("enno3-1", "I always sing in the morning.", "Я всегда пою по утрам.", "Бернадетт поёт у открытого окна, солнце встаёт.", "Послушать I always sing in the morning", p("l3-1")),
    v("enno3-2", "I usually get up at nine.", "Обычно я встаю в девять.", "Будильник на девяти, Бернадетт потягивается.", "Послушать I usually get up at nine", p("l3-2")),
    v("enno3-3", "We often go to the river.", "Мы часто ходим к реке.", "Мурзик и Бернадетт на набережной широкой реки.", "Послушать We often go to the river", p("l3-3")),
    v("enno3-4", "I sometimes cook gumbo.", "Иногда я готовлю гамбо.", "Большая кастрюля густого супа.", "Послушать I sometimes cook gumbo", p("l3-4")),
    v("enno3-5", "I never drink coffee at night.", "Я никогда не пью кофе на ночь.", "Перечёркнутая чашка кофе под луной.", "Послушать I never drink coffee at night", p("l3-5")),
    v("enno3-6", "How often do you sing?", "Как часто ты поёшь?", "Мурзик с блокнотом берёт интервью.", "Послушать How often do you sing", p("l3-6")),
    v("enno3-7", "Tom is always late!", "Том вечно опаздывает!", "Том бежит, на ходу застёгивая рубашку.", "Послушать Tom is always late", p("l3-7")),
  ],
  dialogue: {
    title: "Интервью",
    note: "Gumbo — густой суп, знаменитое блюдо Нового Орлеана. Never со словом do не ставят: I never drink, а не «I don't never».",
    lines: [
      line("murzik", "Bernadette, how often do you sing?", "Бернадетт, как часто вы поёте?"),
      line("bernadette", "I always sing! In the morning, in the evening, in the shower!", "Всегда! Утром, вечером, в душе!"),
      line("murzik", "Do you cook?", "А готовите?"),
      line("bernadette", "Sometimes. I sometimes cook gumbo. But I usually make beignets.", "Иногда. Иногда готовлю гамбо. Но обычно жарю бенье."),
      line("murzik", "Do you drink coffee?", "А кофе пьёте?"),
      line("bernadette", "Yes, but I never drink coffee at night. I sing at night!", "Да, но никогда не пью кофе на ночь. По ночам я пою!"),
      line("tom", "Sorry, sorry, I'm late!", "Простите, простите, я опоздал!"),
      line("murzik", "Tom is always late!", "Том вечно опаздывает!"),
    ],
    gist: choice("enno3-d1", "Что Бернадетт делает всегда?", [
      ["Поёт.", true],
      ["Готовит гамбо.", false],
      ["Пьёт кофе вечером.", false],
    ]),
  },
  grammar: [
    {
      title: "Как часто: место в предложении",
      paragraphs: [
        "Always (всегда), usually (обычно), often (часто), sometimes (иногда), never (никогда) стоят перед глаголом: I usually walk. She never eats meat.",
        "С is / are — после них: He's always happy. We're never late. Never уже значит «не»: I never drink (не «I don't never drink»).",
      ],
      examples: [
        { ru: "I often read in the evening.", en: "Я часто читаю по вечерам." },
        { ru: "She's always kind.", en: "Она всегда добрая." },
      ],
    },
  ],
  tasks: [
    choice("enno3-t1", "Где правильно стоит usually?", [
      ["I usually drink tea.", true],
      ["I drink usually tea.", false],
      ["Usually I drink tea usually.", false],
    ], { skill: "grammar" }),
    listen("enno3-t2", "Послушай. Как часто он ходит в кино?", "I sometimes go to the cinema.", [
      ["Иногда.", true],
      ["Всегда.", false],
      ["Никогда.", false],
    ]),
    match("enno3-t3", "Соедини пары.", [
      ["always", "всегда"],
      ["often", "часто"],
      ["sometimes", "иногда"],
      ["never", "никогда"],
    ], { skill: "words" }),
    missing("enno3-t4", "Какой буквы не хватает? («никогда»)", "nev", "r", "e", ["e", "a", "i"]),
    speak("enno3-t5", "How often do you drink coffee?", "I usually drink coffee in the morning.", "Обычно я пью кофе утром.", { help: "Расскажи вслух, как часто ты что-то делаешь." }),
    choice("enno3-t6", "Как сказать «Обожаю танцевать»?", [
      ["I love dancing.", true],
      ["I love dance.", false],
      ["I'm love dancing.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sieve",
    itemName: "Ситечко для сахарной пудры",
    itemNameRu: "Sugar sieve",
    ru: "Hooray! A sugar sieve!",
    en: "Ура! Ситечко для пудры!",
    a11y: "Маленькое металлическое ситечко с ручкой, под ним снежок сахарной пудры.",
    image: p("sieve"),
    steps: ["Бернадетт показывает, как посыпать бенье сахарной пудрой.", "Много пудры! Ещё больше пудры!", "Мурзик весь белый, как снеговик.", "Бернадетт смеётся и дарит ему ситечко."],
    bridge: "Наступают выходные. Что делают в Новом Орлеане на выходных?",
  },
};

const neworleans4: Lesson = {
  id: "en-a1-neworleans-4",
  level: "A1",
  cityId: "en-neworleans",
  number: 4,
  title: "At the weekend — В выходные",
  minutes: 7,
  goals: ["Рассказать о выходных", "Назвать занятия: cinema, shopping, friends", "Спросить: What do you do at the weekend?"],
  vocabNote: "Go + -ing: go shopping (ходить по магазинам), go swimming, go dancing. Но: go to the cinema, go to a concert.",
  vocab: [
    v("enno4-1", "What do you do at the weekend?", "Что ты делаешь в выходные?", "Мурзик и Бернадетт на веранде в субботнее утро.", "Послушать What do you do at the weekend", p("l4-1")),
    v("enno4-2", "I meet my friends.", "Я встречаюсь с друзьями.", "Бернадетт обнимается с подругами на улице.", "Послушать I meet my friends", p("l4-2")),
    v("enno4-3", "We go to the cinema.", "Мы ходим в кино.", "Мурзик и Том с попкорном в кинотеатре.", "Послушать We go to the cinema", p("l4-3")),
    v("enno4-4", "She goes shopping.", "Она ходит по магазинам.", "Бернадетт с пакетами покупок.", "Послушать She goes shopping", p("l4-4")),
    v("enno4-5", "I watch films at home.", "Я смотрю фильмы дома.", "Том под пледом смотрит фильм.", "Послушать I watch films at home", p("l4-5")),
    v("enno4-6", "I just relax.", "Я просто отдыхаю.", "Мурзик дремлет в кресле-качалке.", "Послушать I just relax", p("l4-6")),
    v("enno4-7", "We go to the market.", "Мы ходим на рынок.", "Пёстрый рынок с фруктами и специями.", "Послушать We go to the market", p("l4-7")),
  ],
  dialogue: {
    title: "Субботние планы",
    note: "French Market — старый рынок Нового Орлеана. Just — «просто».",
    lines: [
      line("murzik", "Bernadette, what do you do at the weekend?", "Бернадетт, что вы делаете в выходные?"),
      line("bernadette", "On Saturday I go to the French Market. Then I meet my friends.", "В субботу хожу на Французский рынок. Потом встречаюсь с друзьями."),
      line("murzik", "And on Sunday?", "А в воскресенье?"),
      line("bernadette", "On Sunday I just relax. I watch films at home. And you?", "В воскресенье я просто отдыхаю. Смотрю фильмы дома. А ты?"),
      line("murzik", "In Russia I usually go to the park. Tom goes shopping!", "В России я обычно хожу в парк. А Том — по магазинам!"),
      line("tom", "Only for cameras!", "Только за фотоаппаратами!"),
    ],
    gist: choice("enno4-d1", "Что Бернадетт делает в воскресенье?", [
      ["Отдыхает и смотрит фильмы дома.", true],
      ["Ходит на рынок.", false],
      ["Поёт в клубе.", false],
    ]),
  },
  grammar: [
    {
      title: "Go shopping, go to the cinema",
      paragraphs: [
        "Занятия с -ing: go shopping, go swimming, go dancing, go running.",
        "Места — с to: go to the cinema, go to the park, go to a concert. Но домой — просто go home.",
      ],
      examples: [
        { ru: "At the weekend I go swimming.", en: "В выходные я хожу плавать." },
        { ru: "We go to the theatre on Fridays.", en: "По пятницам мы ходим в театр." },
      ],
    },
  ],
  tasks: [
    choice("enno4-t1", "Как сказать «Я хожу по магазинам»?", [
      ["I go shopping.", true],
      ["I go to shopping.", false],
      ["I go shop.", false],
    ], { skill: "grammar" }),
    listen("enno4-t2", "Послушай. Что они делают в выходные?", "At the weekend we go to the cinema and meet friends.", [
      ["Ходят в кино и встречаются с друзьями.", true],
      ["Ходят на рынок и готовят.", false],
      ["Отдыхают дома.", false],
    ]),
    match("enno4-t3", "Соедини пары.", [
      ["cinema", "кино"],
      ["relax", "отдыхать"],
      ["meet", "встречать"],
      ["market", "рынок"],
    ], { skill: "words" }),
    spell("enno4-t4", "Собери из букв слово «фильм».", "film"),
    speak("enno4-t5", "What do you do at the weekend?", "I meet my friends and go to the cinema.", "Встречаюсь с друзьями и хожу в кино.", { help: "Расскажи вслух о своих выходных." }),
    choice("enno4-t6", "Где правильно стоит never?", [
      ["I never drink coffee.", true],
      ["I drink never coffee.", false],
      ["I don't never drink coffee.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "iron-table",
    itemName: "Кованый столик",
    itemNameRu: "Iron table",
    ru: "Hooray! An iron table!",
    en: "Ура! Кованый столик!",
    a11y: "Маленький круглый столик с кованым узором из завитков стоит на веранде.",
    image: p("iron-table"),
    steps: ["На Французском рынке Мурзик видит кованый столик.", "Как балконы в Новом Орлеане!", "Бернадетт торгуется и покупает его.", "Теперь на веранде можно пить кофе вдвоём."],
    bridge: "Вечером — концерт Бернадетт в клубе!",
  },
};

const neworleans5: Lesson = {
  id: "en-a1-neworleans-5",
  level: "A1",
  cityId: "en-neworleans",
  number: 5,
  title: "At the concert — На концерте",
  minutes: 7,
  goals: ["Купить билеты", "Спросить, во сколько начало: What time does it start?", "Похвалить выступление"],
  vocabNote: "What time does it start? — «Во сколько начало?» It starts at nine. В вопросе о нём / о ней — does, а в ответе снова -s: it starts.",
  vocab: [
    v("enno5-1", "Two tickets, please.", "Два билета, пожалуйста.", "Мурзик протягивает деньги в окошко кассы.", "Послушать Two tickets, please", p("l5-1")),
    v("enno5-2", "What time does it start?", "Во сколько начало?", "Мурзик смотрит на афишу у входа в клуб.", "Послушать What time does it start", p("l5-2")),
    v("enno5-3", "It starts at nine.", "Начало в девять.", "Часы над сценой показывают девять.", "Послушать It starts at nine", p("l5-3")),
    v("enno5-4", "in the front row", "в первом ряду", "Мурзик и Том сидят прямо у сцены.", "Послушать in the front row", p("l5-4")),
    v("enno5-5", "She's amazing!", "Она потрясающая!", "Бернадетт поёт в лучах прожектора.", "Послушать She's amazing", p("l5-5")),
    v("enno5-6", "Everybody is clapping.", "Все аплодируют.", "Зрители хлопают стоя.", "Послушать Everybody is clapping", p("l5-6")),
    v("enno5-7", "When does it finish?", "Когда конец?", "Том шёпотом спрашивает, глядя на часы.", "Послушать When does it finish", p("l5-7")),
  ],
  dialogue: {
    title: "Джаз-клуб",
    note: "Seat — «место (в зале)». Wonderful — «чудесный».",
    lines: [
      line("murzik", "Two tickets, please. What time does it start?", "Два билета, пожалуйста. Во сколько начало?"),
      line("cashier", "It starts at nine. Here are your tickets. Your seats are in the front row!", "В девять. Вот ваши билеты. Ваши места в первом ряду!"),
      line("tom", "In the front row! Wonderful!", "В первом ряду! Чудесно!"),
      line("murzik", "Look! Everybody is clapping. She's amazing!", "Смотри! Все аплодируют. Она потрясающая!"),
      line("tom", "When does it finish?", "Когда конец?"),
      line("murzik", "I don't know… I don't want it to finish!", "Не знаю… Я не хочу, чтобы кончалось!"),
    ],
    gist: choice("enno5-d1", "Где места Мурзика и Тома?", [
      ["В первом ряду.", true],
      ["В последнем ряду.", false],
      ["На балконе.", false],
    ]),
  },
  grammar: [
    {
      title: "What time does it start?",
      paragraphs: [
        "О расписании говорят простым настоящим: The concert starts at nine. The film finishes at eleven.",
        "Вопрос с it / he / she — does: What time does it start? When does the shop open? После does глагол без -s.",
      ],
      examples: [
        { ru: "The train leaves at six.", en: "Поезд отправляется в шесть." },
        { ru: "What time does the museum open?", en: "Во сколько открывается музей?" },
      ],
    },
  ],
  tasks: [
    choice("enno5-t1", "Как спросить «Во сколько начинается фильм?»", [
      ["What time does the film start?", true],
      ["What time do the film start?", false],
      ["What time does the film starts?", false],
    ], { skill: "grammar" }),
    listen("enno5-t2", "Послушай. Во сколько концерт?", "The concert starts at half past eight.", [
      ["В 8:30.", true],
      ["В 9:30.", false],
      ["В 8:00.", false],
    ]),
    match("enno5-t3", "Соедини пары.", [
      ["ticket", "билет"],
      ["front row", "первый ряд"],
      ["clap", "хлопать"],
      ["amazing", "потрясающий"],
    ], { skill: "words" }),
    missing("enno5-t4", "Какой буквы не хватает? («билет»)", "tick", "t", "e", ["e", "i", "a"]),
    speak("enno5-t5", "Can I help you?", "Two tickets, please. What time does it start?", "Два билета, пожалуйста. Во сколько начало?", { help: "Купи вслух билеты." }),
    choice("enno5-t6", "Как сказать «Я хожу в кино»?", [
      ["I go to the cinema.", true],
      ["I go cinema.", false],
      ["I go to cinemaing.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "lanterns",
    itemName: "Гирлянда фонариков",
    itemNameRu: "Lanterns",
    ru: "Hooray! Little lanterns!",
    en: "Ура! Фонарики!",
    a11y: "Гирлянда маленьких бумажных фонариков разных цветов висит над верандой и мягко светится.",
    image: p("lanterns"),
    steps: ["После концерта хозяин клуба снимает гирлянду со сцены.", "«For the little fan in the front row!» — «Маленькому поклоннику из первого ряда!»", "Мурзик вешает фонарики над верандой.", "Вечером они светятся, как звёзды."],
    bridge: "Утром Бернадетт жарит бенье. Мурзик зовёт всех соседей.",
  },
};

const neworleans6: Lesson = {
  id: "en-a1-neworleans-6",
  level: "A1",
  cityId: "en-neworleans",
  number: 6,
  title: "Would you like to come? — Придёшь?",
  minutes: 7,
  goals: ["Пригласить: Would you like to…?", "Согласиться: I'd love to!", "Вежливо отказаться: Sorry, I can't"],
  vocabNote: "Would you like to come? — «Хочешь прийти?» Вежливый ответ «да» — I'd love to! «Нет» — Sorry, I can't, но обязательно с причиной.",
  vocab: [
    v("enno6-1", "Would you like to come?", "Хотите прийти?", "Мурзик стоит у соседской двери с тарелкой бенье.", "Послушать Would you like to come", p("l6-1")),
    v("enno6-2", "I'd love to!", "С удовольствием!", "Соседка радостно хлопает в ладоши.", "Послушать I'd love to", p("l6-2")),
    v("enno6-3", "Sorry, I can't.", "Извините, не могу.", "Сосед с чемоданом виновато разводит руками.", "Послушать Sorry, I can't", p("l6-3")),
    v("enno6-4", "I'm busy today.", "Сегодня я занят.", "Мужчина в форме спешит на работу.", "Послушать I'm busy today", p("l6-4")),
    v("enno6-5", "Maybe next time.", "Может, в другой раз.", "Сосед машет и улыбается.", "Послушать Maybe next time", p("l6-5")),
    v("enno6-6", "beignets with sugar", "бенье с сахарной пудрой", "Горка пышных квадратных пончиков в сахарной пудре.", "Послушать beignets with sugar", p("l6-6")),
    v("enno6-7", "Everybody is welcome!", "Приходите все!", "На веранде собрались соседи, все в сахарной пудре.", "Послушать Everybody is welcome", p("l6-7")),
  ],
  dialogue: {
    title: "Соседи",
    note: "Beignets [бэнье́й] — квадратные пончики в сахарной пудре, символ Нового Орлеана.",
    lines: [
      line("murzik", "Hello! We've got beignets. Would you like to come?", "Здравствуйте! У нас бенье. Хотите прийти?"),
      line("passerby", "Beignets? I'd love to!", "Бенье? С удовольствием!"),
      line("murzik", "And your husband? Would he like to come?", "А ваш муж? Он придёт?"),
      line("passerby", "Sorry, he can't. He's busy today. Maybe next time!", "Извините, он не может. Сегодня он занят. Может, в другой раз!"),
      line("bernadette", "Murzik, everybody is welcome! There are a hundred beignets!", "Мурзик, зови всех! Тут сто бенье!"),
      line("murzik", "A hundred? Then I'll invite the whole street!", "Сто? Тогда я приглашу всю улицу!"),
    ],
    gist: choice("enno6-d1", "Почему муж соседки не придёт?", [
      ["Он сегодня занят.", true],
      ["Он не любит бенье.", false],
      ["Он болеет.", false],
    ]),
  },
  grammar: [
    {
      title: "Приглашение и ответ",
      paragraphs: [
        "Пригласить: Would you like to come? Would you like to have dinner with us? Do you want to…? — проще, по-дружески.",
        "Да: I'd love to! Yes, please! Нет: Sorry, I can't. I'm busy. Maybe next time. Просто «No» звучит грубо.",
      ],
      examples: [
        { ru: "Would you like to go to the cinema? — I'd love to!", en: "Хочешь в кино? — С удовольствием!" },
        { ru: "Sorry, I can't. I'm working tomorrow.", en: "Извини, не могу. Я завтра работаю." },
      ],
    },
  ],
  tasks: [
    choice("enno6-t1", "Тебя приглашают на ужин. Как вежливо согласиться?", [
      ["I'd love to!", true],
      ["I love to!", false],
      ["Yes, I like.", false],
    ], { skill: "grammar" }),
    listen("enno6-t2", "Послушай. Что отвечают на приглашение?", "Sorry, I can't. I'm busy. Maybe next time.", [
      ["Отказываются: заняты.", true],
      ["Соглашаются.", false],
      ["Спрашивают, во сколько.", false],
    ]),
    match("enno6-t3", "Соедини пары.", [
      ["busy", "занят"],
      ["next time", "в другой раз"],
      ["I'd love to!", "С удовольствием!"],
      ["Everybody is welcome!", "Приходите все!"],
    ], { skill: "words" }),
    spell("enno6-t4", "Собери из букв слово «занят» (busy).", "busy"),
    speak("enno6-t5", "Would you like to come to my party?", "I'd love to! Thank you!", "С удовольствием! Спасибо!", { help: "Ответь вслух на приглашение." }),
    choice("enno6-t6", "Как спросить «Во сколько начало?»", [
      ["What time does it start?", true],
      ["What time it starts?", false],
      ["What time do it start?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fan",
    itemName: "Расписной веер",
    itemNameRu: "Fan",
    ru: "Hooray! A pretty fan!",
    en: "Ура! Красивый веер!",
    a11y: "Раскрытый бумажный веер с нарисованными магнолиями лежит на кованом столике.",
    image: p("fan"),
    steps: ["Соседка приходит с подарком.", "В Новом Орлеане жарко — без веера никуда!", "«For hot days!» — «Для жарких дней!»", "Мурзик обмахивается веером на веранде."],
    bridge: "На прощание Бернадетт говорит: «Sugar, I've got something for your book».",
  },
};

const neworleans7: Lesson = {
  id: "en-a1-neworleans-7",
  level: "A1",
  cityId: "en-neworleans",
  number: 7,
  title: "Goodbye, New Orleans! — Пока, Новый Орлеан!",
  minutes: 8,
  goals: ["Рассказать о своём свободном времени", "Пригласить и ответить на приглашение", "Вспомнить все слова Нового Орлеана"],
  vocabNote: "Повторяем: like / love / hate + -ing, always / sometimes / never, go shopping, Would you like to…? — I'd love to!",
  vocab: [
    v("enno7-1", "I've got something for your book.", "У меня есть кое-что для твоей книги.", "Бернадетт достаёт из шкатулки сложенную страницу.", "Послушать I've got something for your book", p("l7-1")),
    v("enno7-2", "the recipe for beignets", "рецепт бенье", "Страница с рисунком бенье в пудре.", "Послушать the recipe for beignets", p("l7-2")),
    v("enno7-3", "a record player", "проигрыватель", "Старый проигрыватель в чемоданчике, на нём пластинка.", "Послушать a record player", p("l7-3")),
    v("enno7-4", "Music makes people happy.", "Музыка делает людей счастливыми.", "Люди на улице танцуют под оркестр.", "Послушать Music makes people happy", p("l7-4")),
    v("enno7-5", "We're flying to San Francisco.", "Мы летим в Сан-Франциско.", "Том показывает на карте западное побережье.", "Послушать We're flying to San Francisco", p("l7-5")),
    v("enno7-6", "Don't stop singing!", "Не переставай петь!", "Мурзик машет Бернадетт с веранды.", "Послушать Don't stop singing", p("l7-6")),
    v("enno7-7", "See you later, alligator!", "До встречи, крокодильчик!", "Бернадетт смеётся и машет платком.", "Послушать See you later, alligator", p("l7-7")),
  ],
  dialogue: {
    title: "Девятая страница",
    note: "See you later, alligator! — шуточное прощание. Отвечают: In a while, crocodile! («Чуть позже, крокодил!»).",
    lines: [
      line("bernadette", "Sugar, I've got something for your book.", "Сладкий, у меня есть кое-что для твоей книги."),
      line("murzik", "A page! The recipe for beignets!", "Страница! Рецепт бенье!"),
      line("bernadette", "And this record player is for your café. Music makes people happy.", "А этот проигрыватель — для твоего кафе. Музыка делает людей счастливыми."),
      line("tom", "Thank you, Bernadette! Where's the next page?", "Спасибо, Бернадетт! Где следующая страница?"),
      line("bernadette", "In San Francisco. Ask Daniel. He's got a little coffee shop on a hill.", "В Сан-Франциско. Спросите Дэниела. У него маленькая кофейня на холме."),
      line("murzik", "Don't stop singing, Bernadette!", "Не переставайте петь, Бернадетт!"),
      line("bernadette", "Never! See you later, alligator!", "Никогда! До встречи, крокодильчик!"),
      line("murzik", "In a while, crocodile!", "Чуть позже, крокодил!"),
    ],
    gist: choice("enno7-d1", "Где следующая страница?", [
      ["В Сан-Франциско, у Дэниела.", true],
      ["В Чикаго, у Тони.", false],
      ["В Новом Орлеане, в клубе.", false],
    ]),
  },
  grammar: [
    {
      title: "Свободное время: всё вместе",
      paragraphs: [
        "Что любишь: I like reading. I love dancing. I hate swimming. Как часто: I always sing. I never drink coffee at night.",
        "Выходные: I go shopping, I meet my friends. Приглашение: Would you like to come? — I'd love to! / Sorry, I can't.",
      ],
      examples: [
        { ru: "I usually go swimming at the weekend.", en: "В выходные я обычно хожу плавать." },
        { ru: "Would you like to come to the concert? — I'd love to!", en: "Хочешь на концерт? — С удовольствием!" },
      ],
    },
  ],
  tasks: [
    listen("enno7-t1", "Аудиоэкзамен. Что рассказывает Бернадетт?", "I always sing in the morning. I love cooking, but I never cook on Sunday. On Sunday I just relax.", [
      ["Всегда поёт утром, любит готовить, но в воскресенье не готовит, а отдыхает.", true],
      ["Иногда поёт, никогда не готовит, в воскресенье ходит по магазинам.", false],
      ["Поёт только вечером, готовит каждое воскресенье.", false],
    ]),
    choice("enno7-t2", "Выбери правильное предложение.", [
      ["She often goes shopping at the weekend.", true],
      ["She goes often shopping at the weekend.", false],
      ["She often go shopping at the weekend.", false],
    ], { skill: "grammar" }),
    match("enno7-t3", "Соедини пары.", [
      ["record player", "проигрыватель"],
      ["happy", "счастливый"],
      ["Don't stop!", "Не останавливайся!"],
      ["See you later!", "До встречи!"],
    ], { skill: "words" }),
    spell("enno7-t4", "Собери из букв слово «счастливый».", "happy"),
    speak("enno7-t5", "What do you like doing in your free time?", "I love reading and I sometimes go to concerts.", "Обожаю читать и иногда хожу на концерты.", { help: "Расскажи вслух о своём свободном времени." }),
    script("enno7-t6", "Вспомни весь Новый Орлеан. Закончи разговоры.", [
      { speaker: "Бернадетт", text: "What do you like doing?" },
      { speaker: "Ты", answer: "I like cooking and dancing.", options: ["I like cooking and dancing.", "I like cook and dance.", "I'm like cooking."] },
      { speaker: "Бернадетт", text: "How often do you dance?" },
      { speaker: "Ты", answer: "I sometimes dance at the weekend.", options: ["I sometimes dance at the weekend.", "I dance sometimes at weekend.", "I am sometimes dance."] },
      { speaker: "Бернадетт", text: "Would you like to come to my concert?" },
      { speaker: "Ты", answer: "I'd love to!", options: ["I'd love to!", "I love!", "I'd like!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "record-player",
    itemName: "Проигрыватель",
    itemNameRu: "Record player",
    ru: "Hooray! A record player!",
    en: "Ура! Проигрыватель!",
    a11y: "Старый проигрыватель в красном чемоданчике, на нём крутится джазовая пластинка.",
    image: p("record-player"),
    steps: ["Бернадетт ставит на проигрыватель свою пластинку.", "Комната наполняется джазом.", "«For your café. Every café needs music!» — «Для твоего кафе. В каждом кафе должна быть музыка!»", "Мурзик закрывает чемоданчик и берёт его с собой."],
    bridge: "Следующая страница — в Сан-Франциско, у Дэниела.",
  },
};

const story: CityStory = {
  home: {
    name: "Комната с верандой",
    nameRu: "Murzik's room in New Orleans",
    image: p("home"),
    a11y: "Пустая комната со ставнями и дверью на веранду с коваными перилами. Снаружи цветут магнолии, где-то играет труба. Посередине чемодан Мурзика.",
  },
  keepsakeId: "record-player",
  welcomeRu: "Hello, New Orleans!",
  welcomeEn: "Привет, Новый Орлеан!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том в Новом Орлеане: старые дома с коваными балконами, цветы, на улице играет духовой оркестр.",
  departureImage: p("departure"),
  departureA11y: "Бернадетт в ярком платке машет на прощание с веранды под фонариками.",
  finale: [
    {
      image: p("page"),
      a11y: "Крупно: девятая страница книги рецептов, рецепт бенье. На полях записка от руки, страница чуть присыпана сахарной пудрой.",
      lines: [
        { en: "Мурзик вклеивает девятую страницу. На полях — записка миссис Хоуп:" },
        { ru: "At my café, the music was quiet in the morning and loud in the evening.", en: "В моём кафе утром музыка играла тихо, а вечером — громко." },
        { en: "Мурзик смотрит на проигрыватель и думает: «Утром — тихий джаз»." },
      ],
    },
    {
      image: p("record-player"),
      a11y: "Мурзик обходит свою комнату с верандой, которую обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свою комнату в Новом Орлеане. Том фотографирует её для журнала." },
        { en: "Для будущего кафе он берёт с собой проигрыватель Бернадетт." },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "New Orleans complete!", en: "Новый Орлеан пройден!" },
        { en: "7 / 7 уроков" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Бернадетт машет на прощание.",
      lines: [
        { ru: "Goodbye, Bernadette!", en: "До свидания, Бернадетт!" },
        { ru: "Next stop: San Francisco!", en: "Следующая остановка: Сан-Франциско!" },
      ],
    },
    {
      image: img.flight,
      a11y: "Самолёт летит на запад над пустынями и горами.",
      lines: [{ ru: "New Orleans → San Francisco", en: "Новый Орлеан → Сан-Франциско" }],
    },
    {
      image: pic("en/sanfrancisco/arrival"),
      a11y: "Мурзик и Том в Сан-Франциско: красный мост в тумане, крутые улицы, старый трамвайчик едет в гору.",
      lines: [
        { ru: "Hello, San Francisco!", en: "Привет, Сан-Франциско!" },
        { ru: "So many hills!", en: "Сколько холмов!" },
      ],
    },
  ],
};

export const enNewOrleans = {
  id: "en-neworleans",
  name: "Новый Орлеан",
  nameEn: "New Orleans",
  lessons: [neworleans1, neworleans2, neworleans3, neworleans4, neworleans5, neworleans6, neworleans7],
  story,
};
