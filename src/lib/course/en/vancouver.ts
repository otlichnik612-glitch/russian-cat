import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "../tr/make";

/* Ванкувер · «Здоровье и природа» · части тела, болезни, What's the matter?, should / shouldn't, аптека, лес, too / enough. */

const p = (name: string) => pic(`en/vancouver/${name}`);

const vancouver1: Lesson = {
  id: "en-a1-vancouver-1",
  level: "A1",
  cityId: "en-vancouver",
  number: 1,
  title: "What's the matter? — Что случилось?",
  minutes: 7,
  goals: ["Назвать части тела", "Спросить: What's the matter?", "Сказать: I don't feel well"],
  vocabNote: "What's the matter? — «Что случилось? Что с тобой?» I don't feel well — «Я плохо себя чувствую».",
  vocab: [
    v("enva1-1", "What's the matter?", "Что случилось?", "Женщина в белом халате с тревогой наклоняется к Мурзику.", "Послушать What's the matter", p("l1-1")),
    v("enva1-2", "I don't feel well.", "Я плохо себя чувствую.", "Мурзик лежит под пледом, уши опущены.", "Послушать I don't feel well", p("l1-2")),
    v("enva1-3", "my head", "моя голова", "Мурзик держится лапами за голову.", "Послушать my head", p("l1-3")),
    v("enva1-4", "my stomach", "мой живот", "Мурзик держится за живот.", "Послушать my stomach", p("l1-4")),
    v("enva1-5", "my back", "моя спина", "Том держится за спину и кривится.", "Послушать my back", p("l1-5")),
    v("enva1-6", "my arm and my leg", "моя рука и моя нога", "Схема: котик, стрелки к лапке и к ножке.", "Послушать my arm and my leg", p("l1-6")),
    v("enva1-7", "my throat", "моё горло", "Мурзик показывает на горло, у него шарф.", "Послушать my throat", p("l1-7")),
  ],
  dialogue: {
    title: "Доктор Ли",
    note: "Доктор Ли — врач, подруга миссис Хоуп. Poor thing — «бедняжка». Long trip — «долгая дорога».",
    lines: [
      line("lee", "Welcome to Vancouver! I'm Dr Lee. Oh, Murzik, what's the matter?", "Добро пожаловать в Ванкувер! Я доктор Ли. Ой, Мурзик, что случилось?"),
      line("murzik", "I don't feel well. My head hurts and my throat too.", "Я плохо себя чувствую. Голова болит, и горло тоже."),
      line("lee", "Poor thing! It's a long trip from San Francisco.", "Бедняжка! Дорога из Сан-Франциско долгая."),
      line("tom", "And my back! The train seats…", "А у меня спина! Эти сиденья в поезде…"),
      line("lee", "Ha-ha! Come in, both of you. I'm a doctor!", "Ха-ха! Заходите оба. Я же врач!"),
    ],
    gist: choice("enva1-d1", "Что болит у Мурзика?", [
      ["Голова и горло.", true],
      ["Спина.", false],
      ["Живот и нога.", false],
    ]),
  },
  grammar: [
    {
      title: "My head, my arm",
      paragraphs: [
        "О частях тела в английском говорят с my, your, his: my head, his arm, her leg. Не «the head», а именно «моя голова».",
        "Множественное: two arms, two legs. Особые слова: foot — feet (ступни), tooth — teeth (зубы).",
      ],
      examples: [
        { ru: "My leg hurts.", en: "У меня болит нога." },
        { ru: "Cats have got four legs.", en: "У кошек четыре лапы." },
      ],
    },
  ],
  tasks: [
    choice("enva1-t1", "Как сказать «моя рука»?", [
      ["my arm", true],
      ["the my arm", false],
      ["arm my", false],
    ], { skill: "grammar" }),
    listen("enva1-t2", "Послушай. Что с ним?", "I don't feel well.", [
      ["Он плохо себя чувствует.", true],
      ["Он устал.", false],
      ["Он голоден.", false],
    ]),
    match("enva1-t3", "Соедини пары.", [
      ["head", "голова"],
      ["stomach", "живот"],
      ["back", "спина"],
      ["throat", "горло"],
    ], { skill: "words" }),
    missing("enva1-t4", "Какой буквы не хватает? («нога»)", "l", "g", "e", ["e", "o", "u"]),
    speak("enva1-t5", "What's the matter?", "I don't feel well. My head hurts.", "Я плохо себя чувствую. Болит голова.", { help: "Скажи вслух, что тебе плохо и что болит." }),
    choice("enva1-t6", "Как сказать «Я умею готовить»?", [
      ["I can cook.", true],
      ["I can to cook.", false],
      ["I cans cook.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "first-aid",
    itemName: "Аптечка",
    itemNameRu: "First-aid kit",
    ru: "Hooray! A first-aid kit!",
    en: "Ура! Аптечка!",
    a11y: "Маленькая белая аптечка с зелёным листочком на крышке висит на стене.",
    image: p("first-aid"),
    steps: ["Доктор Ли показывает Мурзику его комнату в деревянном доме у леса.", "Она вешает на стену маленькую аптечку.", "«Every home needs one!» — «Она нужна в каждом доме!»", "Мурзик знает: здесь о нём позаботятся."],
    bridge: "Доктор Ли осматривает Мурзика: «Let's see. Have you got a temperature?»",
  },
};

const vancouver2: Lesson = {
  id: "en-a1-vancouver-2",
  level: "A1",
  cityId: "en-vancouver",
  number: 2,
  title: "I have a headache — У меня болит голова",
  minutes: 7,
  goals: ["Сказать, что болит: I have a headache", "Назвать простуду, кашель, температуру", "Сказать: my leg hurts"],
  vocabNote: "Боль: headache — головная боль, stomachache — боль в животе, toothache — зубная боль. I have a cold — я простудился. My leg hurts — у меня болит нога.",
  vocab: [
    v("enva2-1", "I have a headache.", "У меня болит голова.", "Мурзик с мокрым полотенцем на лбу.", "Послушать I have a headache", p("l2-1")),
    v("enva2-2", "I have a cold.", "Я простудился.", "Мурзик чихает в платок, нос красный.", "Послушать I have a cold", p("l2-2")),
    v("enva2-3", "I have a sore throat.", "У меня болит горло.", "Мурзик пьёт тёплый чай с мёдом.", "Послушать I have a sore throat", p("l2-3")),
    v("enva2-4", "I have a temperature.", "У меня температура.", "Градусник показывает 38.", "Послушать I have a temperature", p("l2-4")),
    v("enva2-5", "I have a cough.", "У меня кашель.", "Мурзик кашляет в лапку.", "Послушать I have a cough", p("l2-5")),
    v("enva2-6", "My back hurts.", "У меня болит спина.", "Том осторожно садится, держась за спину.", "Послушать My back hurts", p("l2-6")),
    v("enva2-7", "It's not serious.", "Ничего серьёзного.", "Доктор Ли с улыбкой убирает стетоскоп.", "Послушать It's not serious", p("l2-7")),
  ],
  dialogue: {
    title: "Осмотр",
    note: "Open your mouth — «открой рот». Say \"Ah\" — «скажи „а“».",
    lines: [
      line("lee", "Have you got a temperature?", "У тебя температура?"),
      line("murzik", "I think so. And I have a headache and a sore throat.", "Кажется, да. И у меня болит голова и горло."),
      line("lee", "Open your mouth. Say \"Ah\".", "Открой рот. Скажи «а»."),
      line("murzik", "Ah…", "А-а-а…"),
      line("lee", "It's a cold. It's not serious. And what about your back, Tom?", "Это простуда. Ничего серьёзного. А как твоя спина, Том?"),
      line("tom", "My back hurts a little. But I'm OK!", "Спина немного болит. Но я в порядке!"),
    ],
    gist: choice("enva2-d1", "Что у Мурзика?", [
      ["Простуда, ничего серьёзного.", true],
      ["Сломана лапа.", false],
      ["Болит живот.", false],
    ]),
  },
  grammar: [
    {
      title: "I have a headache / My leg hurts",
      paragraphs: [
        "Про болезни: I have a cold, I have a cough, I have a temperature, I have a headache (= I've got a headache).",
        "Про конкретное место: My leg hurts. — Болит нога. My eyes hurt. — Болят глаза. С he / she: His arm hurts.",
      ],
      examples: [
        { ru: "She has a toothache.", en: "У неё болит зуб." },
        { ru: "My feet hurt!", en: "У меня болят ноги (ступни)!" },
      ],
    },
  ],
  tasks: [
    choice("enva2-t1", "Как сказать «У меня болит голова»?", [
      ["I have a headache.", true],
      ["I am headache.", false],
      ["My head is headache.", false],
    ], { skill: "grammar" }),
    listen("enva2-t2", "Послушай. Что у неё болит?", "I have a toothache.", [
      ["Зуб.", true],
      ["Горло.", false],
      ["Живот.", false],
    ]),
    match("enva2-t3", "Соедини пары.", [
      ["a cold", "простуда"],
      ["a cough", "кашель"],
      ["a temperature", "температура"],
      ["hurt", "болеть"],
    ], { skill: "words" }),
    missing("enva2-t4", "Какой буквы не хватает? («кашель»)", "cou", "h", "g", ["g", "k", "f"]),
    speak("enva2-t5", "What's the matter?", "I have a cold and a sore throat.", "Я простудился, и болит горло.", { help: "Расскажи вслух врачу, что с тобой." }),
    choice("enva2-t6", "Как спросить «Что случилось?»", [
      ["What's the matter?", true],
      ["What matter is?", false],
      ["How is the matter?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cocoa",
    itemName: "Чашка какао",
    itemNameRu: "Mug of cocoa",
    ru: "Hooray! A mug of cocoa!",
    en: "Ура! Чашка какао!",
    a11y: "Большая кружка горячего какао с маршмеллоу сверху, от неё идёт пар.",
    image: p("cocoa"),
    steps: ["Доктор Ли приносит горячее какао с маршмеллоу.", "«Doctor's orders!» — «Предписание врача!»", "Кружка остаётся у Мурзика.", "Тепло и сладко."],
    bridge: "Доктор Ли садится рядом: «Now listen. You should…»",
  },
};

const vancouver3: Lesson = {
  id: "en-a1-vancouver-3",
  level: "A1",
  cityId: "en-vancouver",
  number: 3,
  title: "You should rest — Тебе стоит отдохнуть",
  minutes: 7,
  goals: ["Дать совет: You should…", "Сказать, чего не стоит делать: You shouldn't…", "Спросить совета: What should I do?"],
  vocabNote: "Should — «стоит, следует» (совет). После should глагол в простой форме: You should rest. Не стоит — shouldn't.",
  vocab: [
    v("enva3-1", "You should rest.", "Тебе стоит отдохнуть.", "Доктор Ли поправляет Мурзику подушку.", "Послушать You should rest", p("l3-1")),
    v("enva3-2", "You should stay in bed.", "Тебе лучше полежать в кровати.", "Мурзик в кровати с книжкой.", "Послушать You should stay in bed", p("l3-2")),
    v("enva3-3", "You should drink lots of water.", "Тебе нужно много пить.", "Большой стакан воды с лимоном.", "Послушать You should drink lots of water", p("l3-3")),
    v("enva3-4", "You shouldn't go out today.", "Сегодня тебе не стоит выходить.", "За окном дождь и ветер.", "Послушать You shouldn't go out today", p("l3-4")),
    v("enva3-5", "What should I do?", "Что мне делать?", "Мурзик растерянно смотрит на доктора.", "Послушать What should I do", p("l3-5")),
    v("enva3-6", "You should see a doctor.", "Тебе стоит сходить к врачу.", "Табличка с красным крестом на двери клиники.", "Послушать You should see a doctor", p("l3-6")),
    v("enva3-7", "Get well soon!", "Выздоравливай!", "Сэм машет Мурзику с порога.", "Послушать Get well soon", p("l3-7")),
  ],
  dialogue: {
    title: "Советы доктора",
    note: "Сэм — сын доктора Ли, лесник. Forest — «лес». Ranger — «лесник, смотритель парка».",
    lines: [
      line("lee", "Murzik, you should rest. You should stay in bed today.", "Мурзик, тебе нужно отдохнуть. Сегодня полежи в кровати."),
      line("murzik", "But I want to see the forest!", "Но я хочу посмотреть лес!"),
      line("lee", "You shouldn't go out today. It's cold and wet.", "Сегодня тебе не стоит выходить. Холодно и сыро."),
      line("murzik", "What should I do?", "А что мне делать?"),
      line("lee", "Drink lots of water and sleep. Tomorrow my son Sam can show you the forest.", "Пей много воды и спи. А завтра мой сын Сэм покажет тебе лес."),
      line("sam", "Hi, Murzik! I'm a ranger. Get well soon!", "Привет, Мурзик! Я лесник. Выздоравливай!"),
    ],
    gist: choice("enva3-d1", "Почему Мурзику не стоит выходить?", [
      ["Он болен, а на улице холодно и сыро.", true],
      ["Лес закрыт.", false],
      ["Сэм на работе.", false],
    ]),
  },
  grammar: [
    {
      title: "Should / shouldn't",
      paragraphs: [
        "Совет: You should rest. She should see a doctor. Should одинаковое для всех, без -s.",
        "Отрицание: You shouldn't go out. Вопрос: Should I take a tablet? What should I do?",
      ],
      examples: [
        { ru: "You should sleep more.", en: "Тебе стоит больше спать." },
        { ru: "He shouldn't eat so much chocolate.", en: "Ему не стоит есть столько шоколада." },
      ],
    },
  ],
  tasks: [
    choice("enva3-t1", "Как сказать «Тебе стоит пойти к врачу»?", [
      ["You should see a doctor.", true],
      ["You should to see a doctor.", false],
      ["You shoulds see a doctor.", false],
    ], { skill: "grammar" }),
    listen("enva3-t2", "Послушай. Какой совет?", "You should drink hot tea with honey.", [
      ["Пить горячий чай с мёдом.", true],
      ["Пойти к врачу.", false],
      ["Не выходить на улицу.", false],
    ]),
    match("enva3-t3", "Соедини пары.", [
      ["rest", "отдыхать"],
      ["stay in bed", "лежать в кровати"],
      ["go out", "выходить"],
      ["Get well soon!", "Выздоравливай!"],
    ], { skill: "words" }),
    missing("enva3-t4", "Какой буквы не хватает? («стоит, следует»)", "sho", "ld", "u", ["u", "o", "a"]),
    speak("enva3-t5", "I have a headache. What should I do?", "You should rest and drink lots of water.", "Тебе стоит отдохнуть и пить много воды.", { help: "Дай вслух совет." }),
    choice("enva3-t6", "Как сказать «Я простудился»?", [
      ["I have a cold.", true],
      ["I am cold have.", false],
      ["I have cold.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cones",
    itemName: "Шишки в вазе",
    itemNameRu: "Pine cones",
    ru: "Hooray! Pine cones!",
    en: "Ура! Шишки!",
    a11y: "Стеклянная ваза, полная больших еловых шишек, стоит на подоконнике.",
    image: p("cones"),
    steps: ["Пока Мурзик болеет, Сэм приносит ему лес.", "Целую вазу огромных шишек!", "«The forest is waiting for you!» — «Лес тебя ждёт!»", "Шишки пахнут смолой."],
    bridge: "Утром Мурзику уже лучше. Но горло ещё болит. Нужно в аптеку.",
  },
};

const vancouver4: Lesson = {
  id: "en-a1-vancouver-4",
  level: "A1",
  cityId: "en-vancouver",
  number: 4,
  title: "At the pharmacy — В аптеке",
  minutes: 7,
  goals: ["Попросить лекарство", "Понять, как его принимать", "Спросить, есть ли что-то от боли"],
  vocabNote: "Something for… — «что-нибудь от…»: something for a cough — что-нибудь от кашля. Twice a day — два раза в день.",
  vocab: [
    v("enva4-1", "Can I have something for a sore throat?", "Можно что-нибудь от боли в горле?", "Мурзик у прилавка аптеки.", "Послушать Can I have something for a sore throat", p("l4-1")),
    v("enva4-2", "Try these lozenges.", "Попробуй эти пастилки.", "Фармацевт протягивает коробочку пастилок.", "Послушать Try these lozenges", p("l4-2")),
    v("enva4-3", "cough syrup", "сироп от кашля", "Бутылочка красного сиропа с ложечкой.", "Послушать cough syrup", p("l4-3")),
    v("enva4-4", "Take one tablet twice a day.", "Принимай по одной таблетке два раза в день.", "Две таблетки и солнце с луной: утром и вечером.", "Послушать Take one tablet twice a day", p("l4-4")),
    v("enva4-5", "after meals", "после еды", "Тарелка и таблетка рядом.", "Послушать after meals", p("l4-5")),
    v("enva4-6", "Do I need a prescription?", "Нужен ли рецепт врача?", "Мурзик показывает на листок с подписью врача.", "Послушать Do I need a prescription", p("l4-6")),
    v("enva4-7", "I feel better.", "Мне лучше.", "Мурзик улыбается и потягивается.", "Послушать I feel better", p("l4-7")),
  ],
  dialogue: {
    title: "Аптека",
    note: "Lozenges [ло́зинджиз] — пастилки для горла.",
    lines: [
      line("murzik", "Hello. Can I have something for a sore throat, please?", "Здравствуйте. Можно что-нибудь от боли в горле?"),
      line("pharmacist", "Of course. Try these lozenges. Have you got a cough?", "Конечно. Попробуйте эти пастилки. А кашель есть?"),
      line("murzik", "Yes, a little.", "Да, немного."),
      line("pharmacist", "Then take this cough syrup. One spoonful twice a day, after meals.", "Тогда вот сироп от кашля. Одна ложка два раза в день, после еды."),
      line("murzik", "Thank you. Do I need a prescription?", "Спасибо. Нужен рецепт врача?"),
      line("pharmacist", "No, you don't. That's eleven dollars. Get well soon!", "Нет, не нужен. С вас одиннадцать долларов. Выздоравливайте!"),
    ],
    gist: choice("enva4-d1", "Как принимать сироп?", [
      ["По ложке два раза в день после еды.", true],
      ["По две ложки утром.", false],
      ["Одну таблетку перед сном.", false],
    ]),
  },
  grammar: [
    {
      title: "Как часто: once, twice, three times",
      paragraphs: [
        "Once — один раз, twice — два раза, three times — три раза. A day — в день, a week — в неделю: twice a day, once a week.",
        "Before meals — до еды, after meals — после еды.",
      ],
      examples: [
        { ru: "Take it three times a day.", en: "Принимайте три раза в день." },
        { ru: "I go swimming once a week.", en: "Я плаваю раз в неделю." },
      ],
    },
  ],
  tasks: [
    choice("enva4-t1", "Как сказать «два раза в день»?", [
      ["twice a day", true],
      ["two time a day", false],
      ["twice in day", false],
    ], { skill: "grammar" }),
    listen("enva4-t2", "Послушай. Как принимать лекарство?", "Take one tablet three times a day, before meals.", [
      ["Три раза в день до еды.", true],
      ["Два раза в день после еды.", false],
      ["Один раз в день перед сном.", false],
    ]),
    match("enva4-t3", "Соедини пары.", [
      ["tablet", "таблетка"],
      ["syrup", "сироп"],
      ["twice", "дважды"],
      ["after meals", "после еды"],
    ], { skill: "words" }),
    spell("enva4-t4", "Собери из букв слово «лучше».", "better"),
    speak("enva4-t5", "Can I help you?", "Can I have something for a headache, please?", "Можно что-нибудь от головной боли?", { help: "Попроси вслух лекарство в аптеке." }),
    choice("enva4-t6", "Как сказать «Тебе не стоит выходить»?", [
      ["You shouldn't go out.", true],
      ["You don't should go out.", false],
      ["You shouldn't to go out.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "torch",
    itemName: "Фонарик",
    itemNameRu: "Torch",
    ru: "Hooray! A torch!",
    en: "Ура! Фонарик!",
    a11y: "Зелёный походный фонарик на ремешке висит на крючке у двери.",
    image: p("torch"),
    steps: ["Мурзику лучше! Сэм радуется.", "«Tomorrow — the forest!» — «Завтра — в лес!»", "Он дарит Мурзику походный фонарик.", "Теперь можно в поход!"],
    bridge: "Утром Сэм ведёт Мурзика и Тома в большой лес.",
  },
};

const vancouver5: Lesson = {
  id: "en-a1-vancouver-5",
  level: "A1",
  cityId: "en-vancouver",
  number: 5,
  title: "In the forest — В лесу",
  minutes: 7,
  goals: ["Назвать природу: trees, mountains, river", "Понять правила в парке", "Сказать «тихо!» и «смотри!»"],
  vocabNote: "Правила в парке часто начинаются с Don't: Don't feed the animals. Please be quiet. Keep to the path — «не сходи с тропы».",
  vocab: [
    v("enva5-1", "tall trees", "высокие деревья", "Огромные ели до самого неба.", "Послушать tall trees", p("l5-1")),
    v("enva5-2", "mountains", "горы", "Заснеженные вершины над лесом.", "Послушать mountains", p("l5-2")),
    v("enva5-3", "a river", "река", "Быстрая прозрачная река среди камней.", "Послушать a river", p("l5-3")),
    v("enva5-4", "Look! A bear!", "Смотри! Медведь!", "Вдали у реки бурый медведь ловит рыбу.", "Послушать Look! A bear", p("l5-4")),
    v("enva5-5", "Be quiet!", "Тише!", "Сэм прикладывает палец к губам.", "Послушать Be quiet", p("l5-5")),
    v("enva5-6", "Don't feed the animals.", "Не кормите животных.", "Белка тянется к орешку в лапе Мурзика.", "Послушать Don't feed the animals", p("l5-6")),
    v("enva5-7", "Keep to the path.", "Не сходите с тропы.", "Деревянная тропа петляет между елями.", "Послушать Keep to the path", p("l5-7")),
  ],
  dialogue: {
    title: "Поход",
    note: "Squirrel — «белка». Hungry — «голодный».",
    lines: [
      line("sam", "Welcome to the forest! Look at the tall trees and the mountains!", "Добро пожаловать в лес! Посмотрите на эти деревья и горы!"),
      line("murzik", "It's beautiful! Look, a squirrel! Is it hungry?", "Как красиво! Смотрите, белка! Она голодная?"),
      line("sam", "Maybe, but don't feed the animals. And keep to the path.", "Может быть, но животных не кормите. И не сходите с тропы."),
      line("tom", "Look! A bear! Near the river!", "Смотрите! Медведь! У реки!"),
      line("sam", "Be quiet! It's OK. He's far away. He's fishing.", "Тише! Всё в порядке. Он далеко. Он ловит рыбу."),
      line("murzik", "A real bear! Tom, take a photo!", "Настоящий медведь! Том, сфотографируй!"),
    ],
    gist: choice("enva5-d1", "Что делает медведь?", [
      ["Ловит рыбу у реки.", true],
      ["Идёт к ним по тропе.", false],
      ["Спит под деревом.", false],
    ]),
  },
  grammar: [
    {
      title: "Правила: Don't… Please…",
      paragraphs: [
        "Правила и запреты — повелительное наклонение: Keep to the path. Don't feed the animals. Don't swim here.",
        "Be + слово: Be quiet! Be careful! Be nice!",
      ],
      examples: [
        { ru: "Don't touch the flowers.", en: "Не трогайте цветы." },
        { ru: "Please be quiet in the library.", en: "Пожалуйста, тише в библиотеке." },
      ],
    },
  ],
  tasks: [
    choice("enva5-t1", "Как сказать «Не кормите животных»?", [
      ["Don't feed the animals.", true],
      ["No feed animals.", false],
      ["You don't feeding the animals.", false],
    ], { skill: "grammar" }),
    listen("enva5-t2", "Послушай. Какое правило?", "Please keep to the path.", [
      ["Не сходить с тропы.", true],
      ["Не кормить животных.", false],
      ["Не шуметь.", false],
    ]),
    match("enva5-t3", "Соедини пары.", [
      ["tree", "дерево"],
      ["mountain", "гора"],
      ["river", "река"],
      ["bear", "медведь"],
    ], { skill: "words" }),
    missing("enva5-t4", "Какой буквы не хватает? («гора»)", "mount", "in", "a", ["a", "e", "o"]),
    speak("enva5-t5", "What can you see?", "I can see tall trees and a river.", "Я вижу высокие деревья и реку.", { help: "Опиши вслух, что видишь в лесу." }),
    choice("enva5-t6", "Как сказать «Мне лучше»?", [
      ["I feel better.", true],
      ["I am better feel.", false],
      ["I feel good more.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bird-feeder",
    itemName: "Деревянная кормушка",
    itemNameRu: "Bird feeder",
    ru: "Hooray! A bird feeder!",
    en: "Ура! Кормушка для птиц!",
    a11y: "Деревянная кормушка-домик с семечками висит за окном, на ней сидит синица.",
    image: p("bird-feeder"),
    steps: ["Животных в лесу кормить нельзя.", "А птиц у дома — можно и нужно!", "Сэм дарит Мурзику деревянную кормушку.", "Утром за окном поют птицы."],
    bridge: "На следующий день Мурзик хочет на озеро. Но вода в горах…",
  },
};

const vancouver6: Lesson = {
  id: "en-a1-vancouver-6",
  level: "A1",
  cityId: "en-vancouver",
  number: 6,
  title: "Too cold! — Слишком холодно!",
  minutes: 7,
  goals: ["Сказать «слишком»: too cold to swim", "Сказать «достаточно»: warm enough", "Сказать «не хватает»: not enough"],
  vocabNote: "Too — «слишком»: too cold. Enough — «достаточно», стоит после прилагательного: warm enough. Перед словом: enough time — достаточно времени.",
  vocab: [
    v("enva6-1", "The water is too cold.", "Вода слишком холодная.", "Мурзик трогает воду лапой и отдёргивает её.", "Послушать The water is too cold", p("l6-1")),
    v("enva6-2", "It's too cold to swim.", "Слишком холодно, чтобы плавать.", "Горное озеро, у берега льдинки.", "Послушать It's too cold to swim", p("l6-2")),
    v("enva6-3", "Is it warm enough?", "Достаточно тепло?", "Сэм протягивает Мурзику тёплую куртку.", "Послушать Is it warm enough", p("l6-3")),
    v("enva6-4", "We haven't got enough time.", "У нас мало времени.", "Солнце садится за горы, Том смотрит на часы.", "Послушать We haven't got enough time", p("l6-4")),
    v("enva6-5", "It's too far to walk.", "Слишком далеко, чтобы идти пешком.", "Длинная дорога уходит в горы.", "Послушать It's too far to walk", p("l6-5")),
    v("enva6-6", "Let's take the car.", "Поехали на машине.", "Старый пикап Сэма у дома.", "Послушать Let's take the car", p("l6-6")),
    v("enva6-7", "It's perfect!", "Идеально!", "Мурзик и Том у костра на берегу озера.", "Послушать It's perfect", p("l6-7")),
  ],
  dialogue: {
    title: "Горное озеро",
    note: "Campfire — «костёр». Waterfall — «водопад».",
    lines: [
      line("murzik", "Can I swim in the lake?", "Можно поплавать в озере?"),
      line("sam", "No, the water is too cold. It's too cold to swim, even for bears!", "Нет, вода слишком холодная. Даже для медведей!"),
      line("tom", "Let's walk to the waterfall!", "Пойдём к водопаду!"),
      line("sam", "It's too far to walk. And we haven't got enough time. Let's take the car.", "Слишком далеко пешком. И времени мало. Поехали на машине."),
      line("sam", "Murzik, is your jacket warm enough?", "Мурзик, твоя куртка достаточно тёплая?"),
      line("murzik", "Yes! And the campfire… It's perfect!", "Да! А костёр… Идеально!"),
    ],
    gist: choice("enva6-d1", "Почему нельзя плавать?", [
      ["Вода слишком холодная.", true],
      ["Там медведи.", false],
      ["Озеро слишком далеко.", false],
    ]),
  },
  grammar: [
    {
      title: "Too и enough",
      paragraphs: [
        "Too + прилагательное — «слишком»: too cold, too far. Too … to … — «слишком…, чтобы…»: It's too cold to swim.",
        "Прилагательное + enough — «достаточно»: warm enough, big enough. Enough + слово: enough time, enough money. Not enough — «не хватает».",
      ],
      examples: [
        { ru: "This bag is too small.", en: "Эта сумка слишком маленькая." },
        { ru: "Are you old enough to drive?", en: "Ты уже достаточно взрослый, чтобы водить?" },
      ],
    },
  ],
  tasks: [
    choice("enva6-t1", "Как сказать «достаточно тёплый»?", [
      ["warm enough", true],
      ["enough warm", false],
      ["too warm enough", false],
    ], { skill: "grammar" }),
    listen("enva6-t2", "Послушай. Почему они не идут пешком?", "It's too far to walk.", [
      ["Слишком далеко.", true],
      ["Слишком холодно.", false],
      ["Нет машины.", false],
    ]),
    match("enva6-t3", "Соедини пары.", [
      ["too", "слишком"],
      ["enough", "достаточно"],
      ["far", "далеко"],
      ["perfect", "идеальный"],
    ], { skill: "words" }),
    spell("enva6-t4", "Собери из букв слово «озеро».", "lake"),
    speak("enva6-t5", "Can we swim today?", "No, it's too cold to swim.", "Нет, слишком холодно, чтобы плавать.", { help: "Ответь вслух, используя too." }),
    choice("enva6-t6", "Как сказать «Тише!»?", [
      ["Be quiet!", true],
      ["Quiet be!", false],
      ["You quiet!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "moose",
    itemName: "Деревянный лось",
    itemNameRu: "Wooden moose",
    ru: "Hooray! A wooden moose!",
    en: "Ура! Деревянный лось!",
    a11y: "Маленькая вырезанная из дерева фигурка лося с большими рогами стоит на полке.",
    image: p("moose"),
    steps: ["У костра Сэм вырезает из дерева фигурку.", "Это лось с большими рогами!", "«For you. A friend from the forest.» — «Тебе. Друг из леса».", "Лось стоит на полке рядом с шишками."],
    bridge: "Последний вечер. Доктор Ли достаёт из комода конверт.",
  },
};

const vancouver7: Lesson = {
  id: "en-a1-vancouver-7",
  level: "A1",
  cityId: "en-vancouver",
  number: 7,
  title: "Goodbye, Vancouver! — Пока, Ванкувер!",
  minutes: 8,
  goals: ["Рассказать врачу, что болит, и понять совет", "Описать природу", "Вспомнить все слова Ванкувера"],
  vocabNote: "Повторяем: части тела, I have a headache, should / shouldn't, twice a day, Don't…, too / enough.",
  vocab: [
    v("enva7-1", "It was in my drawer.", "Она лежала у меня в ящике.", "Доктор Ли достаёт из комода пожелтевший конверт.", "Послушать It was in my drawer", p("l7-1")),
    v("enva7-2", "the recipe for maple pie", "рецепт кленового пирога", "Страница с рисунком пирога и кленового листа.", "Послушать the recipe for maple pie", p("l7-2")),
    v("enva7-3", "a bottle of maple syrup", "бутылка кленового сиропа", "Стеклянная бутылочка в форме кленового листа с золотым сиропом.", "Послушать a bottle of maple syrup", p("l7-3")),
    v("enva7-4", "Look after yourself.", "Береги себя.", "Доктор Ли поправляет Мурзику шарф.", "Послушать Look after yourself", p("l7-4")),
    v("enva7-5", "Don't forget your medicine.", "Не забудь лекарство.", "Бутылочка сиропа в боковом кармане чемодана.", "Послушать Don't forget your medicine", p("l7-5")),
    v("enva7-6", "Toronto is in the east.", "Торонто на востоке.", "Сэм показывает на карте Канады стрелку на восток.", "Послушать Toronto is in the east", p("l7-6")),
    v("enva7-7", "Come back in summer!", "Приезжай летом!", "Сэм машет у старого пикапа.", "Послушать Come back in summer", p("l7-7")),
  ],
  dialogue: {
    title: "Одиннадцатая страница",
    note: "Maple — «клён». Кленовый сироп — символ Канады. Family café — «семейное кафе».",
    lines: [
      line("lee", "Murzik, this is from Mrs Hope's book. It was in my drawer for years.", "Мурзик, это из книги миссис Хоуп. Она много лет лежала у меня в ящике."),
      line("murzik", "The recipe for maple pie!", "Рецепт кленового пирога!"),
      line("sam", "And this bottle of maple syrup is for your café!", "А эта бутылка кленового сиропа — для твоего кафе!"),
      line("lee", "Look after yourself. And don't forget your medicine!", "Береги себя. И не забудь лекарство!"),
      line("tom", "Where's the next page?", "Где следующая страница?"),
      line("lee", "In Toronto, in the east. The Chen family has got a café there. Come back in summer!", "В Торонто, на востоке. Там кафе у семьи Чен. Приезжайте летом!"),
    ],
    gist: choice("enva7-d1", "Где следующая страница?", [
      ["В Торонто, у семьи Чен.", true],
      ["В Ванкувере, у Сэма.", false],
      ["В Сан-Франциско.", false],
    ]),
  },
  grammar: [
    {
      title: "Здоровье: всё вместе",
      paragraphs: [
        "Что случилось: What's the matter? — I have a headache. My back hurts. Совет: You should rest. You shouldn't go out.",
        "В аптеке: Can I have something for a cough? Take it twice a day. В лесу: Don't feed the animals. It's too cold to swim.",
      ],
      examples: [
        { ru: "I have a sore throat. What should I do? — You should drink hot tea.", en: "У меня болит горло. Что делать? — Пей горячий чай." },
        { ru: "Take one tablet three times a day.", en: "По одной таблетке три раза в день." },
      ],
    },
  ],
  tasks: [
    listen("enva7-t1", "Аудиоэкзамен. Что говорит врач?", "It's a cold. It's not serious. You should stay in bed and drink lots of water. Take this syrup twice a day.", [
      ["Простуда, лежать, много пить, сироп два раза в день.", true],
      ["Ничего серьёзного, можно гулять, таблетки не нужны.", false],
      ["Серьёзная болезнь, нужно в больницу.", false],
    ]),
    choice("enva7-t2", "Выбери правильное предложение.", [
      ["You should drink more water.", true],
      ["You should drinks more water.", false],
      ["You should to drink more water.", false],
    ], { skill: "grammar" }),
    match("enva7-t3", "Соедини пары.", [
      ["maple", "клён"],
      ["medicine", "лекарство"],
      ["east", "восток"],
      ["summer", "лето"],
    ], { skill: "words" }),
    spell("enva7-t4", "Собери из букв слово «лекарство».", "medicine"),
    speak("enva7-t5", "What's the matter?", "I have a headache and a cough.", "У меня болит голова и кашель.", { help: "Расскажи вслух врачу, что с тобой." }),
    script("enva7-t6", "Вспомни весь Ванкувер. Закончи разговор с доктором.", [
      { speaker: "Доктор Ли", text: "What's the matter?" },
      { speaker: "Ты", answer: "I don't feel well. I have a temperature.", options: ["I don't feel well. I have a temperature.", "I don't feel well. I am temperature.", "I feel better."] },
      { speaker: "Доктор Ли", text: "You should stay in bed." },
      { speaker: "Ты", answer: "What should I take?", options: ["What should I take?", "What should I to take?", "What I should take?"] },
      { speaker: "Доктор Ли", text: "This syrup, twice a day. Get well soon!" },
      { speaker: "Ты", answer: "Thank you, doctor!", options: ["Thank you, doctor!", "You're welcome!", "Be quiet!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "maple-syrup",
    itemName: "Бутылка кленового сиропа",
    itemNameRu: "Maple syrup",
    ru: "Hooray! Maple syrup!",
    en: "Ура! Кленовый сироп!",
    a11y: "Стеклянная бутылочка в форме кленового листа, полная золотого кленового сиропа, с маленькой пробкой.",
    image: p("maple-syrup"),
    steps: ["Сэм протягивает бутылочку в форме кленового листа.", "Внутри — золотой кленовый сироп.", "«From our trees!» — «С наших деревьев!»", "Мурзик заворачивает её в шарф, чтобы не разбилась."],
    bridge: "Следующая страница — на востоке Канады, в Торонто.",
  },
};

const story: CityStory = {
  home: {
    name: "Деревянный домик у леса",
    nameRu: "Murzik's room in Vancouver",
    image: p("home"),
    a11y: "Пустая комната в деревянном доме. В окне высокие ели и заснеженные горы. Пахнет смолой. Посередине чемодан Мурзика.",
  },
  keepsakeId: "maple-syrup",
  welcomeRu: "Hello, Vancouver!",
  welcomeEn: "Привет, Ванкувер!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том в Ванкувере: высокие ели, заснеженные горы над морем, стеклянные дома у воды.",
  departureImage: p("departure"),
  departureA11y: "Доктор Ли и Сэм машут на прощание у деревянного дома, рядом старый пикап.",
  finale: [
    {
      image: p("page"),
      a11y: "Крупно: одиннадцатая страница книги рецептов, рецепт кленового пирога. На полях записка от руки.",
      lines: [
        { en: "Мурзик вклеивает одиннадцатую страницу. На полях — записка миссис Хоуп:" },
        { ru: "At my café, I always asked: \"How are you today?\" And I listened.", en: "В моём кафе я всегда спрашивала: «Как вы сегодня?» — и слушала ответ." },
        { en: "Мурзик вспоминает доктора Ли: в первый же день она спросила, что с ним, — и выслушала." },
      ],
    },
    {
      image: p("maple-syrup"),
      a11y: "Мурзик обходит свою комнату в деревянном домике, которую обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свою комнату в Ванкувере. Том фотографирует её для журнала." },
        { en: "Для будущего кафе он берёт с собой кленовый сироп." },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "Vancouver complete!", en: "Ванкувер пройден!" },
        { en: "7 / 7 уроков" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Доктор Ли и Сэм машут на прощание.",
      lines: [
        { ru: "Goodbye, Dr Lee! Goodbye, Sam!", en: "До свидания, доктор Ли! Пока, Сэм!" },
        { ru: "Next stop: Toronto!", en: "Следующая остановка: Торонто!" },
      ],
    },
    {
      image: p("train"),
      a11y: "Длинный поезд едет на восток через горы и бескрайние прерии Канады.",
      lines: [{ ru: "Vancouver → Toronto", en: "Ванкувер → Торонто" }],
    },
    {
      image: pic("en/toronto/arrival"),
      a11y: "Мурзик и Том в Торонто: высокая башня над озером, разноцветные дома, весенние цветы.",
      lines: [
        { ru: "Hello, Toronto!", en: "Привет, Торонто!" },
        { ru: "It's spring!", en: "Весна!" },
      ],
    },
  ],
};

export const enVancouver = {
  id: "en-vancouver",
  name: "Ванкувер",
  nameEn: "Vancouver",
  lessons: [vancouver1, vancouver2, vancouver3, vancouver4, vancouver5, vancouver6, vancouver7],
  story,
};
