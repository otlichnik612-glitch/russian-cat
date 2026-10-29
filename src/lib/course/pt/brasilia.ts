import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { PAIRS, YOU, choice, g, line, listen, match, missing, script, speak, spell, t, v } from "./make";

/* Бразилиа · «Работа и время» · Кузен Бии Рафаэл, вечно спешащий. Профессии, который час, во сколько, дни недели, распорядок дня, город-самолёт. Пипока выучил «Estou atrasado!». */

const p = (name: string) => pic(`pt/brasilia/${name}`);
const RAFAEL = t("Рафаэл", "Rafael");

const br1: Lesson = {
  id: "pt-a1-brasilia-1",
  level: "A1",
  cityId: "pt-brasilia",
  number: 1,
  title: t("O que você faz? — Кем ты работаешь?", "O que você faz? — What do you do?"),
  minutes: 7,
  goals: [
    t("Спросить о профессии", "Ask about someone's job"),
    t("Назвать профессии", "Name some jobs"),
    t("Сказать, где работаешь", "Say where you work"),
  ],
  vocabNote: t(
    "Профессии меняются по роду: professor — professora, médico — médica. А jornalista, estudante, motorista — одинаковые для всех.",
    "Most jobs change for gender: professor — professora, médico — médica. Words ending in -ista or -nte stay the same: jornalista, estudante.",
  ),
  vocab: [
    v("ptbr1-1", "O que você faz?", t("Кем ты работаешь?", "What do you do?"),
      t("Мурзик с любопытством смотрит на парня в рубашке и галстуке.", "Murzik looks curiously at a young man in a shirt and tie."),
      p("l1-1")),
    v("ptbr1-2", "Eu sou professor.", t("Я учитель.", "I'm a teacher."),
      t("Учитель у доски с мелом.", "A teacher with chalk at the blackboard."),
      p("l1-2")),
    v("ptbr1-3", "Ela é médica.", t("Она врач.", "She's a doctor."),
      t("Женщина-врач в белом халате со стетоскопом.", "A woman doctor in a white coat with a stethoscope."),
      p("l1-3")),
    v("ptbr1-4", "Ele é engenheiro.", t("Он инженер.", "He's an engineer."),
      t("Инженер в каске смотрит на чертежи.", "An engineer in a hard hat studies some plans."),
      p("l1-4")),
    v("ptbr1-5", "Eu trabalho num escritório.", t("Я работаю в офисе.", "I work in an office."),
      t("Рафаэл за компьютером в большом офисе.", "Rafael at his computer in a big office."),
      p("l1-5")),
    v("ptbr1-6", "Eu quero ser jornalista.", t("Я хочу стать журналистом.", "I want to be a journalist."),
      t("Биа с микрофоном и блокнотом.", "Bia with a microphone and a notebook."),
      p("l1-6")),
    v("ptbr1-7", "Você gosta do seu trabalho?", t("Тебе нравится твоя работа?", "Do you like your job?"),
      t("Мурзик держит воображаемый микрофон у лица Рафаэла.", "Murzik holds an imaginary microphone up to Rafael."),
      p("l1-7")),
  ],
  dialogue: {
    title: t("Кузен Рафаэл", "Cousin Rafael"),
    note: t(
      "Primo — «двоюродный брат». Funcionário público — «госслужащий». Muito trabalho — «много работы».",
      "Primo means “cousin”. Funcionário público means “civil servant”. Muito trabalho means “lots of work”.",
    ),
    lines: [
      line("bia", "Murzik, este é o meu primo, o Rafael.", t("Мурзик, это мой двоюродный брат, Рафаэл.", "Murzik, this is my cousin, Rafael.")),
      line("murzik", "Oi, Rafael! O que você faz?", t("Привет, Рафаэл! Кем ты работаешь?", "Hi, Rafael! What do you do?")),
      line("rafael", "Eu sou funcionário público. Eu trabalho num escritório, num ministério.", t("Я госслужащий. Работаю в офисе, в министерстве.", "I'm a civil servant. I work in an office, at a ministry.")),
      line("murzik", "Você gosta do seu trabalho?", t("Тебе нравится твоя работа?", "Do you like your job?")),
      line("rafael", "Gosto, mas é muito trabalho! E a minha mãe é médica, o meu pai é engenheiro…", t("Нравится, но работы очень много! А моя мама — врач, папа — инженер…", "I do, but there's so much work! And my mum's a doctor, my dad's an engineer…")),
      line("bia", "E eu quero ser jornalista!", t("А я хочу стать журналисткой!", "And I want to be a journalist!")),
      line("rafael", "Eu sei, prima! Você fala muito!", t("Знаю, сестрёнка! Ты так много говоришь!", "I know, cuz! You talk a lot!")),
    ],
    gist: choice("ptbr1-d1", t("Где работает Рафаэл?", "Where does Rafael work?"), [
      [t("В министерстве, в офисе.", "In an office, at a ministry."), true],
      [t("В больнице.", "In a hospital."), false],
      [t("В школе.", "At a school."), false],
    ]),
  },
  grammar: [
    g(
      t("Профессии: professor, professora", "Jobs: professor, professora"),
      [
        t(
          "О профессии говорят с ser и без артикля: Eu sou professor, Ela é médica. Женская форма обычно на -a: professora, médica, engenheira.",
          "Use ser with no “a” or “an” before a job: Eu sou professor (I'm a teacher), Ela é médica (She's a doctor). The feminine form usually ends in -a: professora, médica, engenheira.",
        ),
        t(
          "«Стать кем-то» — тоже ser: Eu quero ser jornalista. — Я хочу стать журналистом.",
          "“To become” a job is also ser: Eu quero ser jornalista — I want to be a journalist.",
        ),
      ],
      [
        ["Ele é professor. Ela é professora.", t("Он учитель. Она учительница.", "He's a teacher. She's a teacher.")],
        ["Eu sou jornalista.", t("Я журналист(ка).", "I'm a journalist.")],
      ],
    ),
  ],
  tasks: [
    choice("ptbr1-t1", t("Как сказать «Она врач»?", "How do you say “She's a doctor”?"), [
      ["Ela é médica.", true],
      ["Ela é uma médico.", false],
      ["Ela está médica.", false],
    ], { skill: "grammar" }),
    listen("ptbr1-t2", t("Послушай. Кем работает человек?", "Listen. What's the person's job?"), "Eu sou engenheiro.", [
      [t("Инженер.", "An engineer."), true],
      [t("Учитель.", "A teacher."), false],
      [t("Врач.", "A doctor."), false],
    ]),
    match("ptbr1-t3", PAIRS, [
      ["o professor", t("учитель", "the teacher")],
      ["a médica", t("врач (женщина)", "the doctor (woman)")],
      ["o engenheiro", t("инженер", "the engineer")],
      ["o escritório", t("офис", "the office")],
    ], { skill: "words" }),
    spell("ptbr1-t4", t("Собери из букв слово «работа».", "Spell the word for “work”."), "trabalho"),
    speak("ptbr1-t5", "O que você faz?", "Eu sou professor. Eu trabalho numa escola.", t("Я учитель. Работаю в школе. (Расскажи о своей работе.)", "I'm a teacher. I work in a school. (Talk about your job.)"), {
      help: t("Скажи вслух, кем ты работаешь или учишься. Женщина скажет professora.", "Say aloud what you do. A woman says professora."),
    }),
    choice("ptbr1-t6", t("Как сказать «Он спас Зеку!»?", "How do you say “He saved Zeca!”?"), [
      ["Ele salvou o Zeca!", true],
      ["Ele salva Zeca ontem!", false],
      ["Ele é salvou o Zeca!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "badge",
    itemName: t("Бейджик гостя", "Visitor's badge"),
    itemNameRu: "Crachá",
    ru: "Oba! Um crachá!",
    en: t("Ура! Бейджик!", "Hooray! A badge!"),
    a11y: t("На столе лежит бейджик на синем шнурке с надписью-полоской и фото Мурзика.", "A badge on a blue lanyard with Murzik's photo lies on the desk."),
    image: p("badge"),
    steps: [
      t("Рафаэл приносит Мурзику бейджик гостя.", "Rafael brings Murzik a visitor's badge."),
      t("С фотографией Мурзика!", "With Murzik's photo on it!"),
      t("«Agora você é funcionário!» — «Теперь ты сотрудник!»", "“Agora você é funcionário!” — “Now you're on the staff!”"),
      t("Бейджик лежит на столе.", "The badge lies on the desk."),
    ],
    bridge: t("Рафаэл всё время смотрит на часы. «Que horas são?»", "Rafael keeps looking at his watch. “Que horas são?”"),
  },
};

const br2: Lesson = {
  id: "pt-a1-brasilia-2",
  level: "A1",
  cityId: "pt-brasilia",
  number: 2,
  title: t("Que horas são? — Который час?", "Que horas são? — What time is it?"),
  minutes: 7,
  goals: [
    t("Спросить, который час", "Ask the time"),
    t("Назвать время: час, два, половина", "Tell the time: one, two, half past"),
    t("Сказать «уже поздно»", "Say “it's late”"),
  ],
  vocabNote: t(
    "Meia — «половина»: três e meia — «половина четвёртого», буквально «три с половиной». Meio-dia — полдень, meia-noite — полночь.",
    "Meia means “half”: três e meia is half past three — literally “three and a half”. Meio-dia is midday and meia-noite is midnight.",
  ),
  vocab: [
    v("ptbr2-1", "Que horas são?", t("Который час?", "What time is it?"),
      t("Мурзик показывает на пустое запястье.", "Murzik points at his bare wrist."),
      p("l2-1")),
    v("ptbr2-2", "É uma hora.", t("Час.", "It's one o'clock."),
      t("Часы показывают час.", "A clock showing one o'clock."),
      p("l2-2")),
    v("ptbr2-3", "São duas horas.", t("Два часа.", "It's two o'clock."),
      t("Часы показывают два.", "A clock showing two o'clock."),
      p("l2-3")),
    v("ptbr2-4", "São três e meia.", t("Половина четвёртого.", "It's half past three."),
      t("Часы показывают половину четвёртого.", "A clock showing half past three."),
      p("l2-4")),
    v("ptbr2-5", "meio-dia", t("полдень", "midday"),
      t("Солнце прямо над головой, тень Мурзика — крошечная.", "The sun directly overhead; Murzik's shadow is tiny."),
      p("l2-5")),
    v("ptbr2-6", "meia-noite", t("полночь", "midnight"),
      t("Ночное небо, часы показывают двенадцать.", "A night sky and a clock at twelve."),
      p("l2-6")),
    v("ptbr2-7", "Já é tarde!", t("Уже поздно!", "It's late already!"),
      t("Рафаэл в панике хватает портфель.", "Rafael grabs his briefcase in a panic."),
      p("l2-7")),
  ],
  dialogue: {
    title: t("Вечно спешащий Рафаэл", "Rafael's always in a hurry"),
    note: t(
      "Reunião — «совещание». Ainda — «ещё». Calma! — «Спокойно!»",
      "Reunião means “meeting”. Ainda means “still”. Calma! means “Relax!”",
    ),
    lines: [
      line("rafael", "Bia, que horas são?", t("Биа, который час?", "Bia, what time is it?")),
      line("bia", "São duas horas.", t("Два часа.", "It's two o'clock.")),
      line("rafael", "Duas? Eu tenho uma reunião às três!", t("Два? У меня совещание в три!", "Two? I've got a meeting at three!")),
      line("murzik", "Calma! Ainda é cedo.", t("Спокойно! Ещё рано.", "Relax! It's still early.")),
      line("rafael", "E agora? Que horas são?", t("А сейчас? Который час?", "And now? What time is it?")),
      line("bia", "Rafael! São duas e cinco!", t("Рафаэл! Пять минут третьего!", "Rafael! It's five past two!")),
      line("rafael", "Já é tarde! Tchau!", t("Уже поздно! Пока!", "It's late already! Bye!")),
    ],
    gist: choice("ptbr2-d1", t("Во сколько у Рафаэла совещание?", "What time is Rafael's meeting?"), [
      [t("В три.", "At three."), true],
      [t("В два.", "At two."), false],
      [t("В полдень.", "At midday."), false],
    ]),
  },
  grammar: [
    g(
      t("Который час: é uma hora, são duas horas", "É uma hora, são duas horas"),
      [
        t(
          "Час — é uma hora (одна). С двух и дальше — são: são duas horas, são cinco horas. Глагол меняется, как «стоит / стоят».",
          "For one o'clock use é (singular): é uma hora. From two onwards use são (plural): são duas horas, são cinco horas.",
        ),
        t(
          "Минуты добавляют через e: duas e cinco — «пять минут третьего», três e meia — «половина четвёртого», quatro e quinze — «четверть пятого».",
          "Add minutes with e (and): duas e cinco (five past two), três e meia (half past three), quatro e quinze (quarter past four).",
        ),
      ],
      [
        ["São dez e meia.", t("Половина одиннадцатого.", "It's half past ten.")],
        ["É meio-dia.", t("Полдень.", "It's midday.")],
      ],
    ),
  ],
  tasks: [
    choice("ptbr2-t1", t("Как сказать «Два часа»?", "How do you say “It's two o'clock”?"), [
      ["São duas horas.", true],
      ["É duas horas.", false],
      ["São dois horas.", false],
    ], { skill: "grammar" }),
    listen("ptbr2-t2", t("Послушай. Который час?", "Listen. What time is it?"), "São três e meia.", [
      ["3:30", true],
      ["3:00", false],
      ["13:00", false],
    ]),
    match("ptbr2-t3", PAIRS, [
      ["meio-dia", "12:00"],
      ["uma hora", "1:00"],
      ["duas e meia", "2:30"],
      ["quatro e quinze", "4:15"],
    ], { skill: "words" }),
    missing("ptbr2-t4", t("Какой буквы не хватает? («час»)", "Which letter is missing? (“hour”)"), "", "ora", "h", ["h", "o", "g"]),
    speak("ptbr2-t5", "Que horas são agora?", "Agora são dez horas.", t("Сейчас десять часов. (Назови своё время.)", "It's ten o'clock now. (Say your own time.)"), {
      help: t("Скажи вслух, который у тебя час.", "Say aloud what time it is where you are."),
    }),
    choice("ptbr2-t6", t("Как спросить «Кем ты работаешь?»", "How do you ask “What do you do?”"), [
      ["O que você faz?", true],
      ["Quem você é?", false],
      ["Onde você mora?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "clock",
    itemName: t("Настенные часы", "Wall clock"),
    itemNameRu: "Relógio de parede",
    ru: "Oba! Um relógio de parede!",
    en: t("Ура! Настенные часы!", "Hooray! A wall clock!"),
    a11y: t("На стене висят круглые часы в форме самолёта.", "A round wall clock shaped like an aeroplane hangs on the wall."),
    image: p("clock"),
    steps: [
      t("Вечером Рафаэл приносит Мурзику часы.", "In the evening Rafael brings Murzik a clock."),
      t("Они в форме самолёта — как Бразилиа!", "It's shaped like a plane — just like Brasília!"),
      t("«Para você nunca se atrasar!» — «Чтобы ты никогда не опаздывал!»", "“Para você nunca se atrasar!” — “So you're never late!”"),
      t("Часы висят над кроватью. Тик-так.", "The clock hangs above the bed. Tick-tock."),
    ],
    bridge: t("Мурзику интересно: как устроен день Рафаэла?", "Murzik wonders: what's Rafael's day like?"),
  },
};

const br3: Lesson = {
  id: "pt-a1-brasilia-3",
  level: "A1",
  cityId: "pt-brasilia",
  number: 3,
  title: t("A que horas? — Во сколько?", "A que horas? — At what time?"),
  minutes: 7,
  goals: [
    t("Спросить, во сколько что-то происходит", "Ask what time something happens"),
    t("Рассказать о своём дне по часам", "Tell your day by the clock"),
    t("Сказать «в шесть», «в полдень»", "Say “at six”, “at midday”"),
  ],
  vocabNote: t(
    "Às — «в» перед временем: às seis — «в шесть». А «в час» и «в полдень» — à uma, ao meio-dia.",
    "Às means “at” before a time: às seis (at six). With one o'clock and midday: à uma, ao meio-dia.",
  ),
  vocab: [
    v("ptbr3-1", "A que horas você acorda?", t("Во сколько ты встаёшь?", "What time do you wake up?"),
      t("Мурзик с блокнотом берёт интервью у Рафаэла.", "Murzik interviews Rafael with a notebook."),
      p("l3-1")),
    v("ptbr3-2", "Eu acordo às seis.", t("Я встаю в шесть.", "I wake up at six."),
      t("Будильник звенит, за окном ещё темно.", "An alarm clock rings; it's still dark outside."),
      p("l3-2")),
    v("ptbr3-3", "Eu almoço ao meio-dia.", t("Я обедаю в полдень.", "I have lunch at midday."),
      t("Рафаэл ест рис с фасолью за рабочим столом.", "Rafael eats rice and beans at his desk."),
      p("l3-3")),
    v("ptbr3-4", "A reunião é às nove.", t("Совещание в девять.", "The meeting's at nine."),
      t("Люди в костюмах сидят за длинным столом.", "People in suits sit at a long table."),
      p("l3-4")),
    v("ptbr3-5", "Eu saio do trabalho às seis.", t("Я ухожу с работы в шесть.", "I leave work at six."),
      t("Рафаэл выходит из здания министерства на закате.", "Rafael walks out of the ministry building at sunset."),
      p("l3-5")),
    v("ptbr3-6", "Eu janto às oito.", t("Я ужинаю в восемь.", "I have dinner at eight."),
      t("Ужин на столе, часы показывают восемь.", "Dinner on the table; the clock shows eight."),
      p("l3-6")),
    v("ptbr3-7", "Eu durmo às onze.", t("Я ложусь спать в одиннадцать.", "I go to sleep at eleven."),
      t("Рафаэл спит, обнимая портфель.", "Rafael asleep, hugging his briefcase."),
      p("l3-7")),
  ],
  dialogue: {
    title: t("Интервью с Рафаэлом", "Interviewing Rafael"),
    note: t(
      "Tão cedo — «так рано». Por isso — «вот поэтому».",
      "Tão cedo means “so early”. Por isso means “that's why”.",
    ),
    lines: [
      line("murzik", "Rafael, a que horas você acorda?", t("Рафаэл, во сколько ты встаёшь?", "Rafael, what time do you wake up?")),
      line("rafael", "Eu acordo às seis. A reunião é às nove.", t("Встаю в шесть. Совещание в девять.", "I wake up at six. The meeting's at nine.")),
      line("murzik", "Às seis? Tão cedo! E a que horas você almoça?", t("В шесть? Так рано! А во сколько обедаешь?", "At six? So early! And what time do you have lunch?")),
      line("rafael", "Eu almoço ao meio-dia. E eu saio do trabalho às seis.", t("Обедаю в полдень. А с работы ухожу в шесть.", "I have lunch at midday. And I leave work at six.")),
      line("bia", "E você janta a que horas?", t("А ужинаешь во сколько?", "And what time do you have dinner?")),
      line("rafael", "Eu janto às oito e durmo às onze.", t("Ужинаю в восемь, сплю с одиннадцати.", "I have dinner at eight and go to sleep at eleven.")),
      line("murzik", "Por isso você está sempre cansado!", t("Вот поэтому ты всегда уставший!", "That's why you're always tired!")),
    ],
    gist: choice("ptbr3-d1", t("Во сколько встаёт Рафаэл?", "What time does Rafael wake up?"), [
      [t("В шесть.", "At six."), true],
      [t("В девять.", "At nine."), false],
      [t("В одиннадцать.", "At eleven."), false],
    ]),
  },
  grammar: [
    g(
      t("Во сколько: às, à uma, ao meio-dia", "At what time: às, à uma, ao meio-dia"),
      [
        t(
          "«Во сколько?» — A que horas? Ответ: às + время: às seis, às oito e meia. Для часа — à uma, для полудня и полуночи — ao meio-dia, à meia-noite.",
          "“At what time?” is A que horas? Answer with às + time: às seis, às oito e meia. For one o'clock: à uma. For midday and midnight: ao meio-dia, à meia-noite.",
        ),
        t(
          "Saio — «выхожу», от sair; durmo — «сплю», от dormir. У этих глаголов форма «я» немного особенная.",
          "Saio (I leave, from sair) and durmo (I sleep, from dormir) have slightly irregular “I” forms — learn them as they come.",
        ),
      ],
      [
        ["O ônibus sai às sete.", t("Автобус уходит в семь.", "The bus leaves at seven.")],
        ["Eu almoço à uma.", t("Я обедаю в час.", "I have lunch at one.")],
      ],
    ),
  ],
  tasks: [
    choice("ptbr3-t1", t("Как сказать «в восемь»?", "How do you say “at eight”?"), [
      ["às oito", true],
      ["a oito", false],
      ["em oito", false],
    ], { skill: "grammar" }),
    listen("ptbr3-t2", t("Послушай. Во сколько ужин?", "Listen. What time is dinner?"), "Eu janto às oito.", [
      [t("В восемь.", "At eight."), true],
      [t("В шесть.", "At six."), false],
      [t("В полдень.", "At midday."), false],
    ]),
    match("ptbr3-t3", PAIRS, [
      ["acordar", t("просыпаться", "to wake up")],
      ["almoçar", t("обедать", "to have lunch")],
      ["jantar", t("ужинать", "to have dinner")],
      ["dormir", t("спать", "to sleep")],
    ], { skill: "words" }),
    spell("ptbr3-t4", t("Собери из букв слово «рано».", "Spell the word for “early”."), "cedo"),
    speak("ptbr3-t5", "A que horas você acorda?", "Eu acordo às sete.", t("Я встаю в семь. (Назови своё время.)", "I wake up at seven. (Say your own time.)"), {
      help: t("Ответь вслух, во сколько ты встаёшь.", "Say aloud what time you wake up."),
    }),
    choice("ptbr3-t6", t("Как сказать «Уже поздно!»?", "How do you say “It's late already!”?"), [
      ["Já é tarde!", true],
      ["Boa tarde!", false],
      ["É uma hora.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "planner",
    itemName: t("Ежедневник", "Planner"),
    itemNameRu: "Agenda",
    ru: "Oba! Uma agenda!",
    en: t("Ура! Ежедневник!", "Hooray! A planner!"),
    a11y: t("Маленький синий ежедневник, внутри расписание с часами и рисунками.", "A small blue planner with a timetable inside, full of times and little drawings."),
    image: p("planner"),
    steps: [
      t("Рафаэл дарит Мурзику ежедневник.", "Rafael gives Murzik a planner."),
      t("Мурзик пишет: «Acordar às oito. Brincar. Dormir.»", "Murzik writes: “Acordar às oito. Brincar. Dormir.”"),
      t("Рафаэл смеётся: «Que vida boa!» — «Хорошо живёшь!»", "Rafael laughs: “Que vida boa!” — “What a life!”"),
      t("Ежедневник лежит на столе.", "The planner lies on the desk."),
    ],
    bridge: t("Мурзик спрашивает: «А выходные у тебя бывают?»", "Murzik asks: “Do you ever get a weekend?”"),
  },
};

const br4: Lesson = {
  id: "pt-a1-brasilia-4",
  level: "A1",
  cityId: "pt-brasilia",
  number: 4,
  title: t("Os dias da semana — Дни недели", "Os dias da semana — Days of the week"),
  minutes: 7,
  goals: [
    t("Назвать дни недели", "Name the days of the week"),
    t("Спросить, какой сегодня день", "Ask what day it is"),
    t("Сказать «по выходным», «с понедельника по пятницу»", "Say “at the weekend”, “Monday to Friday”"),
  ],
  vocabNote: t(
    "Дни недели в португальском — по номерам: segunda-feira («второй день») — понедельник, terça — вторник, quarta — среда, quinta — четверг, sexta — пятница. Только sábado и domingo — со своими именами.",
    "Portuguese days are numbered: segunda-feira (“second day”) is Monday, then terça, quarta, quinta, sexta. Only sábado and domingo have their own names. In speech, people drop -feira: segunda, terça…",
  ),
  vocab: [
    v("ptbr4-1", "Que dia é hoje?", t("Какой сегодня день?", "What day is it today?"),
      t("Мурзик смотрит на большой настенный календарь.", "Murzik looks at a big wall calendar."),
      p("l4-1")),
    v("ptbr4-2", "Hoje é sexta-feira.", t("Сегодня пятница.", "Today's Friday."),
      t("В календаре обведена пятница.", "Friday is circled on the calendar."),
      p("l4-2")),
    v("ptbr4-3", "segunda, terça, quarta", t("понедельник, вторник, среда", "Monday, Tuesday, Wednesday"),
      t("Три листка календаря: понедельник, вторник, среда.", "Three calendar pages: Monday, Tuesday, Wednesday."),
      p("l4-3")),
    v("ptbr4-4", "quinta e sexta", t("четверг и пятница", "Thursday and Friday"),
      t("Два листка календаря: четверг и пятница.", "Two calendar pages: Thursday and Friday."),
      p("l4-4")),
    v("ptbr4-5", "sábado e domingo", t("суббота и воскресенье", "Saturday and Sunday"),
      t("Солнечные выходные: гамак и мяч.", "A sunny weekend: a hammock and a ball."),
      p("l4-5")),
    v("ptbr4-6", "de segunda a sexta", t("с понедельника по пятницу", "Monday to Friday"),
      t("Пять рабочих дней в календаре закрашены серым.", "Five working days shaded grey on the calendar."),
      p("l4-6")),
    v("ptbr4-7", "no fim de semana", t("по выходным", "at the weekend"),
      t("Рафаэл в шортах и кепке катается на велосипеде.", "Rafael in shorts and a cap riding a bike."),
      p("l4-7")),
  ],
  dialogue: {
    title: t("Наконец-то выходные", "The weekend at last"),
    note: t(
      "Amanhã — «завтра». Andar de bicicleta — «кататься на велосипеде».",
      "Amanhã means “tomorrow”. Andar de bicicleta means “to ride a bike”.",
    ),
    lines: [
      line("murzik", "Rafael, que dia é hoje?", t("Рафаэл, какой сегодня день?", "Rafael, what day is it today?")),
      line("rafael", "Hoje é sexta-feira! Amanhã é sábado!", t("Сегодня пятница! Завтра суббота!", "Today's Friday! Tomorrow's Saturday!")),
      line("murzik", "Você trabalha no sábado?", t("Ты работаешь в субботу?", "Do you work on Saturday?")),
      line("rafael", "Não! Eu trabalho de segunda a sexta.", t("Нет! Я работаю с понедельника по пятницу.", "No! I work Monday to Friday.")),
      line("bia", "E o que você faz no fim de semana?", t("А что ты делаешь по выходным?", "And what do you do at the weekend?")),
      line("rafael", "No sábado eu ando de bicicleta. E no domingo… eu durmo!", t("В субботу катаюсь на велосипеде. А в воскресенье… сплю!", "On Saturday I go cycling. And on Sunday… I sleep!")),
    ],
    gist: choice("ptbr4-d1", t("Что Рафаэл делает в воскресенье?", "What does Rafael do on Sunday?"), [
      [t("Спит.", "He sleeps."), true],
      [t("Работает.", "He works."), false],
      [t("Катается на велосипеде.", "He goes cycling."), false],
    ]),
  },
  grammar: [
    g(
      t("В понедельник, в субботу: na segunda, no sábado", "Na segunda, no sábado"),
      [
        t(
          "«В понедельник» — na segunda (женский род), «в субботу» — no sábado (мужской). Регулярно, «по понедельникам» — às segundas, aos sábados.",
          "“On Monday” is na segunda (feminine), “on Saturday” is no sábado (masculine). For something regular — “on Mondays” — say às segundas, aos sábados.",
        ),
        t(
          "De… a… — «с… по…»: de segunda a sexta, de manhã à noite.",
          "De… a… means “from… to…”: de segunda a sexta (Monday to Friday), de manhã à noite (from morning till night).",
        ),
      ],
      [
        ["Na quarta eu vou ao cinema.", t("В среду я иду в кино.", "On Wednesday I'm going to the cinema.")],
        ["Eu não trabalho no domingo.", t("В воскресенье я не работаю.", "I don't work on Sunday.")],
      ],
    ),
  ],
  tasks: [
    choice("ptbr4-t1", t("Как сказать «в субботу»?", "How do you say “on Saturday”?"), [
      ["no sábado", true],
      ["na sábado", false],
      ["em sábado o", false],
    ], { skill: "grammar" }),
    listen("ptbr4-t2", t("Послушай. Какой сегодня день?", "Listen. What day is it today?"), "Hoje é quarta-feira.", [
      [t("Среда.", "Wednesday."), true],
      [t("Четверг.", "Thursday."), false],
      [t("Понедельник.", "Monday."), false],
    ]),
    match("ptbr4-t3", PAIRS, [
      ["segunda-feira", t("понедельник", "Monday")],
      ["quarta-feira", t("среда", "Wednesday")],
      ["sexta-feira", t("пятница", "Friday")],
      ["domingo", t("воскресенье", "Sunday")],
    ], { skill: "words" }),
    missing("ptbr4-t4", t("Какой буквы не хватает? («суббота»)", "Which letter is missing? (“Saturday”)"), "s", "bado", "á", ["á", "a", "â"]),
    speak("ptbr4-t5", "O que você faz no fim de semana?", "No sábado eu descanso e no domingo eu vejo os amigos.", t("В субботу я отдыхаю, а в воскресенье встречаюсь с друзьями.", "On Saturday I rest, and on Sunday I see my friends."), {
      help: t("Расскажи вслух, что ты делаешь по выходным.", "Say aloud what you do at the weekend."),
    }),
    choice("ptbr4-t6", t("Как спросить «Во сколько ты встаёшь?»", "How do you ask “What time do you wake up?”"), [
      ["A que horas você acorda?", true],
      ["Que horas são?", false],
      ["Que dia é hoje?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "calendar",
    itemName: t("Календарь", "Calendar"),
    itemNameRu: "Calendário",
    ru: "Oba! Um calendário!",
    en: t("Ура! Календарь!", "Hooray! A calendar!"),
    a11y: t("Настенный календарь с фотографиями Бразилии, один день обведён красным сердечком.", "A wall calendar with photos of Brazil; one day is circled with a red heart."),
    image: p("calendar"),
    steps: [
      t("Биа вешает в комнате Мурзика календарь.", "Bia hangs a calendar in Murzik's room."),
      t("Один день обведён красным сердечком.", "One day is circled with a red heart."),
      t("«O aniversário da vovó!» — «День рождения бабушки!»", "“O aniversário da vovó!” — “Grandma's birthday!”"),
      t("До него всё меньше листков.", "There are fewer and fewer pages left."),
    ],
    bridge: t("Утром в субботу Мурзик расписывает, как проходит его день.", "On Saturday morning Murzik writes down how his day goes."),
  },
};

const br5: Lesson = {
  id: "pt-a1-brasilia-5",
  level: "A1",
  cityId: "pt-brasilia",
  number: 5,
  title: t("A rotina — Распорядок дня", "A rotina — Daily routine"),
  minutes: 7,
  goals: [
    t("Рассказать о своём утре", "Talk about your morning"),
    t("Связать рассказ: сначала, потом", "Link events: first, then"),
    t("Сказать «какая суета!»", "Say “what a rush!”"),
  ],
  vocabNote: t(
    "Tomar banho — «принимать душ», буквально «брать купание». Бразильцы принимают душ два-три раза в день — жарко!",
    "Tomar banho means “to have a shower” (literally “to take a bath”). Many Brazilians shower two or three times a day — it's hot!",
  ),
  vocab: [
    v("ptbr5-1", "Primeiro eu tomo banho.", t("Сначала я принимаю душ.", "First I have a shower."),
      t("Мурзик в душе, в пене, с резиновой уточкой.", "Murzik in the shower, covered in foam, with a rubber duck."),
      p("l5-1")),
    v("ptbr5-2", "Eu escovo os dentes.", t("Я чищу зубы.", "I brush my teeth."),
      t("Мурзик чистит зубы маленькой щёткой.", "Murzik brushes his teeth with a tiny toothbrush."),
      p("l5-2")),
    v("ptbr5-3", "Eu me visto.", t("Я одеваюсь.", "I get dressed."),
      t("Мурзик натягивает футболку через голову.", "Murzik pulls a T-shirt over his head."),
      p("l5-3")),
    v("ptbr5-4", "Depois eu tomo café.", t("Потом я завтракаю.", "Then I have breakfast."),
      t("Мурзик ест хлеб и пьёт кофе с молоком.", "Murzik eats bread and drinks milky coffee."),
      p("l5-4")),
    v("ptbr5-5", "Eu pego o ônibus.", t("Я сажусь на автобус.", "I catch the bus."),
      t("Рафаэл бежит к отходящему автобусу.", "Rafael runs for a bus that's pulling away."),
      p("l5-5")),
    v("ptbr5-6", "No fim, eu descanso.", t("А в конце я отдыхаю.", "In the end, I rest."),
      t("Мурзик лежит на диване с книжкой.", "Murzik lies on the sofa with a book."),
      p("l5-6")),
    v("ptbr5-7", "Que correria!", t("Какая суета!", "What a rush!"),
      t("Рафаэл бежит с портфелем, бутербродом и телефоном сразу.", "Rafael runs with his briefcase, a sandwich and his phone all at once."),
      p("l5-7")),
  ],
  dialogue: {
    title: t("Утро Мурзика и утро Рафаэла", "Murzik's morning and Rafael's morning"),
    note: t(
      "Com calma — «не спеша». Tudo junto — «всё сразу».",
      "Com calma means “calmly, without rushing”. Tudo junto means “all at once”.",
    ),
    lines: [
      line("bia", "Murzik, como é a sua manhã?", t("Мурзик, как проходит твоё утро?", "Murzik, what's your morning like?")),
      line("murzik", "Primeiro eu tomo banho. Depois eu escovo os dentes e me visto.", t("Сначала я принимаю душ. Потом чищу зубы и одеваюсь.", "First I have a shower. Then I brush my teeth and get dressed.")),
      line("murzik", "Depois eu tomo café, com calma.", t("Потом я завтракаю, не спеша.", "Then I have breakfast, nice and slowly.")),
      line("bia", "E o Rafael?", t("А Рафаэл?", "And Rafael?")),
      line("rafael", "Eu? Eu acordo, tomo banho, tomo café e pego o ônibus… tudo junto!", t("Я? Я встаю, моюсь, завтракаю и бегу на автобус… всё сразу!", "Me? I wake up, shower, have breakfast and catch the bus… all at once!")),
      line("murzik", "Que correria!", t("Какая суета!", "What a rush!")),
    ],
    gist: choice("ptbr5-d1", t("Чем утро Рафаэла отличается от утра Мурзика?", "How is Rafael's morning different from Murzik's?"), [
      [t("Рафаэл всё делает в спешке.", "Rafael does everything in a rush."), true],
      [t("Рафаэл не завтракает.", "Rafael skips breakfast."), false],
      [t("Рафаэл встаёт поздно.", "Rafael gets up late."), false],
    ]),
  },
  grammar: [
    g(
      t("Сначала, потом, в конце", "First, then, in the end"),
      [
        t(
          "Чтобы рассказать по порядку: primeiro — «сначала», depois — «потом», então — «тогда, и вот», no fim — «в конце».",
          "To tell things in order: primeiro (first), depois (then, after that), então (so, then), no fim (in the end).",
        ),
        t(
          "Eu me visto — «я одеваюсь», с маленьким словом me, как русское «-сь». Такие глаголы встретятся ещё: me chamo — «меня зовут».",
          "Eu me visto (I get dressed) has a little me — like “myself”: literally “I dress myself”. You'll see more of these: Eu me chamo… (My name is…).",
        ),
      ],
      [
        ["Primeiro eu trabalho, depois eu janto.", t("Сначала я работаю, потом ужинаю.", "First I work, then I have dinner.")],
        ["Eu me chamo Murzik.", t("Меня зовут Мурзик.", "My name is Murzik.")],
      ],
    ),
  ],
  tasks: [
    choice("ptbr5-t1", t("Как сказать «Я одеваюсь»?", "How do you say “I get dressed”?"), [
      ["Eu me visto.", true],
      ["Eu visto me.", false],
      ["Eu sou visto.", false],
    ], { skill: "grammar" }),
    listen("ptbr5-t2", t("Послушай. Что человек делает сначала?", "Listen. What does the person do first?"), "Primeiro eu tomo banho, depois eu tomo café.", [
      [t("Принимает душ.", "Has a shower."), true],
      [t("Завтракает.", "Has breakfast."), false],
      [t("Едет на автобусе.", "Takes the bus."), false],
    ]),
    match("ptbr5-t3", PAIRS, [
      ["primeiro", t("сначала", "first")],
      ["depois", t("потом", "then")],
      ["no fim", t("в конце", "in the end")],
      ["tomar banho", t("принимать душ", "to have a shower")],
    ], { skill: "words" }),
    spell("ptbr5-t4", t("Собери из букв слово «потом».", "Spell the word for “then, after”."), "depois"),
    speak("ptbr5-t5", "Como é a sua manhã?", "Primeiro eu tomo banho. Depois eu tomo café.", t("Сначала я принимаю душ. Потом завтракаю.", "First I have a shower. Then I have breakfast."), {
      help: t("Расскажи вслух о своём утре по порядку.", "Describe your morning aloud, step by step."),
    }),
    choice("ptbr5-t6", t("Как сказать «по выходным»?", "How do you say “at the weekend”?"), [
      ["no fim de semana", true],
      ["de segunda a sexta", false],
      ["na sexta-feira", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "toothbrush",
    itemName: t("Зубная щётка", "Toothbrush"),
    itemNameRu: "Escova de dentes",
    ru: "Oba! Uma escova de dentes!",
    en: t("Ура! Зубная щётка!", "Hooray! A toothbrush!"),
    a11y: t("В ванной в зелёном стаканчике стоит маленькая зубная щётка с ручкой-попугаем.", "In the bathroom, a little toothbrush with a parrot-shaped handle stands in a green cup."),
    image: p("toothbrush"),
    steps: [
      t("Биа покупает Мурзику новую зубную щётку.", "Bia buys Murzik a new toothbrush."),
      t("Ручка у неё — в виде попугая.", "Its handle is shaped like a parrot."),
      t("«Para lembrar do Pipoca!» — «Чтобы помнить о Пипоке!»", "“Para lembrar do Pipoca!” — “So you remember Pipoca!”"),
      t("Щётка стоит в стаканчике в ванной.", "The toothbrush stands in a cup in the bathroom."),
    ],
    bridge: t("Днём Рафаэл показывает им город. Сверху он похож на самолёт!", "In the afternoon Rafael shows them the city. From above, it looks like a plane!"),
  },
};

const br6: Lesson = {
  id: "pt-a1-brasilia-6",
  level: "A1",
  cityId: "pt-brasilia",
  number: 6,
  title: t("A cidade-avião — Город-самолёт", "A cidade-avião — The plane city"),
  minutes: 7,
  goals: [
    t("Описать необычный город", "Describe an unusual city"),
    t("Сравнить: больше, меньше", "Compare things: bigger, smaller"),
    t("Сказать, на что похоже", "Say what something looks like"),
  ],
  vocabNote: t(
    "Бразилиа построили с нуля всего за четыре года, в 1956–1960. Сверху город похож на самолёт или на птицу.",
    "Brasília was built from scratch in just four years, from 1956 to 1960. From above, it looks like a plane — or a bird.",
  ),
  vocab: [
    v("ptbr6-1", "Brasília parece um avião.", t("Бразилиа похожа на самолёт.", "Brasília looks like a plane."),
      t("Карта Бразилиа сверху: город в форме самолёта.", "A map of Brasília from above: a plane-shaped city."),
      p("l6-1")),
    v("ptbr6-2", "o Congresso", t("Конгресс", "the Congress"),
      t("Две высокие белые башни и два купола, один вверх, другой вниз.", "Two tall white towers and two domes, one facing up, one facing down."),
      p("l6-2")),
    v("ptbr6-3", "a catedral", t("собор", "the cathedral"),
      t("Собор, похожий на корону из белых изогнутых колонн.", "A cathedral like a crown of curved white columns."),
      p("l6-3")),
    v("ptbr6-4", "É muito moderno.", t("Очень современно.", "It's very modern."),
      t("Мурзик в восхищении смотрит на белые здания.", "Murzik gazes in admiration at the white buildings."),
      p("l6-4")),
    v("ptbr6-5", "Quem fez isso?", t("Кто это построил?", "Who made this?"),
      t("Мурзик показывает на необычное здание.", "Murzik points at an unusual building."),
      p("l6-5")),
    v("ptbr6-6", "Brasília é mais nova do que o Rio.", t("Бразилиа моложе Рио.", "Brasília is newer than Rio."),
      t("Две картинки рядом: старый Рио и новая Бразилиа.", "Two pictures side by side: old Rio and new Brasília."),
      p("l6-6")),
    v("ptbr6-7", "O Rio é maior.", t("Рио больше.", "Rio is bigger."),
      t("Большой и маленький кружки на карте.", "A big circle and a small circle on a map."),
      p("l6-7")),
  ],
  dialogue: {
    title: t("Экскурсия по столице", "A tour of the capital"),
    note: t(
      "Asas — «крылья». O arquiteto — «архитектор». Menos — «менее, меньше».",
      "Asas means “wings”. O arquiteto means “the architect”. Menos means “less, fewer”.",
    ),
    lines: [
      line("rafael", "Olha o mapa: Brasília parece um avião! Essas são as asas.", t("Посмотрите на карту: Бразилиа похожа на самолёт! Вот крылья.", "Look at the map: Brasília looks like a plane! These are the wings.")),
      line("murzik", "Que legal! E aquele prédio é o Congresso?", t("Как здорово! А то здание — Конгресс?", "Cool! And is that building the Congress?")),
      line("rafael", "É! E ali é a catedral. Tudo é muito moderno.", t("Да! А там собор. Всё очень современное.", "It is! And over there is the cathedral. Everything's very modern.")),
      line("murzik", "Quem fez isso?", t("Кто это построил?", "Who made all this?")),
      line("rafael", "Um arquiteto famoso, Oscar Niemeyer.", t("Знаменитый архитектор, Оскар Нимейер.", "A famous architect, Oscar Niemeyer.")),
      line("bia", "Brasília é mais nova do que o Rio. Mas o Rio é maior!", t("Бразилиа моложе Рио. Но Рио больше!", "Brasília is newer than Rio. But Rio is bigger!")),
      line("rafael", "E Brasília tem menos praia!", t("И пляжей в Бразилиа поменьше!", "And Brasília has fewer beaches!")),
    ],
    gist: choice("ptbr6-d1", t("На что похожа Бразилиа сверху?", "What does Brasília look like from above?"), [
      [t("На самолёт.", "A plane."), true],
      [t("На корабль.", "A ship."), false],
      [t("На звезду.", "A star."), false],
    ]),
  },
  grammar: [
    g(
      t("Сравнение: mais… do que", "Comparing: mais… do que"),
      [
        t(
          "«Больше, чем» — mais… do que: Brasília é mais nova do que o Rio. «Меньше, чем» — menos… do que. Прилагательное по-прежнему согласуется: Brasília é mais nova (a cidade).",
          "“More… than” is mais… do que: Brasília é mais nova do que o Rio (newer than Rio). “Less… than” is menos… do que. There's no -er ending — just mais + adjective.",
        ),
        t(
          "Есть и особые слова: maior — «больше», menor — «меньше», melhor — «лучше». Parecer — «быть похожим, казаться»: parece um avião.",
          "A few are special: maior (bigger), menor (smaller), melhor (better). Parecer means “to look like”: parece um avião.",
        ),
      ],
      [
        ["O Rio é mais antigo do que Brasília.", t("Рио старше Бразилиа.", "Rio is older than Brasília.")],
        ["O meu quarto é menor.", t("Моя комната меньше.", "My room is smaller.")],
      ],
    ),
  ],
  tasks: [
    choice("ptbr6-t1", t("Как сказать «Рио больше»?", "How do you say “Rio is bigger”?"), [
      ["O Rio é maior.", true],
      ["O Rio é mais grande.", false],
      ["O Rio é grande do que.", false],
    ], { skill: "grammar" }),
    listen("ptbr6-t2", t("Послушай. На что похож город?", "Listen. What does the city look like?"), "A cidade parece um avião.", [
      [t("На самолёт.", "A plane."), true],
      [t("На птицу.", "A bird."), false],
      [t("На рыбу.", "A fish."), false],
    ]),
    match("ptbr6-t3", PAIRS, [
      ["maior", t("больше", "bigger")],
      ["menor", t("меньше", "smaller")],
      ["melhor", t("лучше", "better")],
      ["moderno", t("современный", "modern")],
    ], { skill: "words" }),
    missing("ptbr6-t4", t("Какой буквы не хватает? («самолёт»)", "Which letter is missing? (“plane”)"), "avi", "o", "ã", ["ã", "a", "â"]),
    speak("ptbr6-t5", "A sua cidade é grande?", "A minha cidade é menor do que o Rio.", t("Мой город меньше Рио. (Сравни свой город.)", "My city is smaller than Rio. (Compare your own city.)"), {
      help: t("Сравни вслух свой город с Рио.", "Compare your city with Rio aloud."),
    }),
    choice("ptbr6-t6", t("Как сказать «Сначала я принимаю душ»?", "How do you say “First I have a shower”?"), [
      ["Primeiro eu tomo banho.", true],
      ["No fim eu tomo banho.", false],
      ["Eu me visto banho.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "model",
    itemName: t("Макет Конгресса", "Model of the Congress"),
    itemNameRu: "Maquete do Congresso",
    ru: "Oba! Uma maquete!",
    en: t("Ура! Макет!", "Hooray! A model!"),
    a11y: t("На полке стоит маленький белый макет: две башенки и два купола.", "A small white model stands on the shelf: two little towers and two domes."),
    image: p("model"),
    steps: [
      t("В сувенирной лавке продаются маленькие макеты.", "The souvenir shop sells little models."),
      t("Рафаэл покупает Мурзику Конгресс.", "Rafael buys Murzik one of the Congress."),
      t("«Agora você tem a capital no quarto!» — «Теперь у тебя в комнате столица!»", "“Agora você tem a capital no quarto!” — “Now you've got the capital in your room!”"),
      t("Макет стоит на полке.", "The model stands on the shelf."),
    ],
    bridge: t("Вечером Рафаэл вспоминает, что видел на автовокзале что-то очень странное.", "In the evening Rafael remembers seeing something very strange at the bus station."),
  },
};

const br7: Lesson = {
  id: "pt-a1-brasilia-7",
  level: "A1",
  cityId: "pt-brasilia",
  number: 7,
  title: t("Estou atrasado! — Я опаздываю!", "Estou atrasado! — I'm late!"),
  minutes: 8,
  goals: [
    t("Понять, что рассказывают о Пипоке", "Understand what people say about Pipoca"),
    t("Сказать «беги!», «не опаздывай!»", "Say “run!” and “don't be late!”"),
    t("Вспомнить все слова Бразилиа", "Review all the words from Brasília"),
  ],
  vocabNote: t(
    "Estou atrasado — «я опаздываю» (мужчина), estou atrasada — женщина. Rodoviária — «автовокзал».",
    "Estou atrasado means “I'm late” — a woman says estou atrasada. Rodoviária means “bus station”.",
  ),
  vocab: [
    v("ptbr7-1", "Estou atrasado!", t("Я опаздываю!", "I'm late!"),
      t("Зелёный попугай на табло отправлений хлопает крыльями.", "The green parrot flaps his wings on top of a departures board."),
      p("l7-1")),
    v("ptbr7-2", "na rodoviária", t("на автовокзале", "at the bus station"),
      t("Огромный автовокзал, люди бегут с сумками.", "A huge bus station with people running with bags."),
      p("l7-2")),
    v("ptbr7-3", "toda hora", t("всё время", "all the time"),
      t("Рафаэл смотрит на часы, на часы, снова на часы.", "Rafael checks his watch, and again, and again."),
      p("l7-3")),
    v("ptbr7-4", "Ele imitou o Rafael!", t("Он передразнил Рафаэла!", "He copied Rafael!"),
      t("Рафаэл и попугай одинаково хватаются за голову.", "Rafael and the parrot clutch their heads in exactly the same way."),
      p("l7-4")),
    v("ptbr7-5", "Eles foram para Ouro Preto.", t("Они уехали в Ору-Прету.", "They've gone to Ouro Preto."),
      t("Карта: стрелка к старому городу в горах.", "A map: an arrow to an old town in the hills."),
      p("l7-5")),
    v("ptbr7-6", "Corre!", t("Беги!", "Run!"),
      t("Мурзик и Биа бегут к автобусу с чемоданами.", "Murzik and Bia run for the bus with their suitcases."),
      p("l7-6")),
    v("ptbr7-7", "Não se atrase!", t("Не опоздай!", "Don't be late!"),
      t("Рафаэл грозит пальцем и улыбается.", "Rafael wags a finger, smiling."),
      p("l7-7")),
  ],
  dialogue: {
    title: t("Что сказал попугай", "What the parrot said"),
    note: t(
      "Ontem — «вчера». Gritando — «крича». Riu — «засмеялся».",
      "Ontem means “yesterday”. Gritando means “shouting”. Riu means “laughed”.",
    ),
    lines: [
      line("rafael", "Ah, o papagaio! Eu vi na rodoviária, ontem.", t("А, попугай! Я видел его на автовокзале, вчера.", "Ah, the parrot! I saw him at the bus station yesterday.")),
      line("bia", "E o que ele fez?", t("И что он сделал?", "And what did he do?")),
      line("rafael", "Eu estava correndo, gritando: Estou atrasado! E ele repetiu: Estou atrasado! Estou atrasado!", t("Я бежал и кричал: «Я опаздываю!» А он повторил: «Я опаздываю! Я опаздываю!»", "I was running and shouting: I'm late! And he repeated: I'm late! I'm late!")),
      line("murzik", "Ele imitou você! Que engraçado!", t("Он тебя передразнил! Как смешно!", "He copied you! How funny!")),
      line("rafael", "Toda a rodoviária riu. Eles foram para Ouro Preto.", t("Весь вокзал засмеялся. Они уехали в Ору-Прету.", "The whole station laughed. They went to Ouro Preto.")),
      line("bia", "O ônibus sai às oito! Que horas são?", t("Автобус уходит в восемь! Который час?", "The bus leaves at eight! What time is it?")),
      line("rafael", "Sete e meia! Corre! Não se atrase!", t("Половина восьмого! Бегите! Не опоздайте!", "Half past seven! Run! Don't be late!")),
    ],
    gist: choice("ptbr7-d1", t("Какую фразу выучил Пипока в Бразилиа?", "What phrase did Pipoca learn in Brasília?"), [
      [t("«Я опаздываю!»", "“I'm late!”"), true],
      [t("«Который час?»", "“What time is it?”"), false],
      [t("«Какая суета!»", "“What a rush!”"), false],
    ]),
  },
  grammar: [
    g(
      t("Estava correndo — «бежал (в тот момент)»", "Estava correndo — “was running”"),
      [
        t(
          "Помнишь estava olhando? Так же: eu estava correndo — «я бежал(а)», он в тот момент был в процессе. Estar в прошлом — estava, и окончание -ando / -endo.",
          "Remember estava olhando? Same here: eu estava correndo — “I was running”. Estava + -ando / -endo describes something in progress in the past, like English “was …-ing”.",
        ),
        t(
          "Ele repetiu, ele imitou — «он повторил», «он передразнил»: прошедшее время на -iu и -ou.",
          "Ele repetiu (he repeated), ele imitou (he imitated) — past forms ending in -iu and -ou.",
        ),
      ],
      [
        ["Eu estava dormindo.", t("Я спал(а).", "I was sleeping.")],
        ["Nós estávamos comendo.", t("Мы ели.", "We were eating.")],
      ],
    ),
  ],
  tasks: [
    listen("ptbr7-t1", t("Аудиоэкзамен. Что рассказывает Рафаэл?", "Audio exam. What does Rafael tell them?"), "O papagaio estava na rodoviária e repetiu: Estou atrasado! A banda foi para Ouro Preto.", [
      [t("Попугай передразнивал на вокзале, а группа уехала в Ору-Прету.", "The parrot was copying people at the bus station, and the band went to Ouro Preto."), true],
      [t("Попугай опоздал на автобус.", "The parrot missed the bus."), false],
      [t("Группа выступила в Конгрессе.", "The band played at the Congress."), false],
    ]),
    choice("ptbr7-t2", t("Биа опаздывает. Что она говорит?", "Bia is late. What does she say?"), [
      ["Estou atrasada!", true],
      ["Estou atrasado!", false],
      ["Sou atrasada!", false],
    ], { skill: "grammar" }),
    match("ptbr7-t3", PAIRS, [
      ["Corre!", t("Беги!", "Run!")],
      ["toda hora", t("всё время", "all the time")],
      ["a rodoviária", t("автовокзал", "the bus station")],
      ["Não se atrase!", t("Не опоздай!", "Don't be late!")],
    ], { skill: "words" }),
    missing("ptbr7-t4", t("Какой буквы не хватает? («опаздывающий»)", "Which letter is missing? (“late”)"), "atra", "ado", "s", ["s", "z", "ç"]),
    speak("ptbr7-t5", "O ônibus sai às oito! Corre!", "Estou atrasado! Tchau!", t("Я опаздываю! Пока!", "I'm late! Bye!"), {
      help: t("Скажи вслух. Женщина скажет atrasada.", "Say it aloud. A woman says atrasada."),
    }),
    script("ptbr7-t6", t("Вспомни всю Бразилиа. Закончи разговор с Рафаэлом.", "Remember all of Brasília. Finish the conversation with Rafael."), [
      { speaker: RAFAEL, text: "Oi! O que você faz?" },
      { speaker: YOU, answer: "Eu sou estudante.", options: ["Eu sou estudante.", "Eu estou estudante.", "São duas horas."] },
      { speaker: RAFAEL, text: "A que horas você acorda?" },
      { speaker: YOU, answer: "Eu acordo às sete.", options: ["Eu acordo às sete.", "São sete horas.", "No domingo."] },
      { speaker: RAFAEL, text: "E no fim de semana?" },
      { speaker: YOU, answer: "No sábado eu descanso.", options: ["No sábado eu descanso.", "Na sábado eu descanso.", "Que correria!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-brasilia",
    itemName: t("Фото Пипоки на табло", "Photo of Pipoca on the departures board"),
    itemNameRu: "Foto do Pipoca na rodoviária",
    ru: "Oba! Mais uma foto do Pipoca!",
    en: t("Ура! Ещё одно фото Пипоки!", "Hooray! Another photo of Pipoca!"),
    a11y: t(
      "Фото: зелёный попугай на табло отправлений, внизу смеются пассажиры с сумками.",
      "A photo: the green parrot on top of the departures board, with passengers laughing below.",
    ),
    image: p("photo"),
    steps: [
      t("Рафаэл находит фото в телефоне.", "Rafael finds a photo on his phone."),
      t("Пипока на табло, а под ним хохочет весь вокзал!", "Pipoca on the departures board, with the whole station laughing below!"),
      t("Мурзик смеётся вместе с ними.", "Murzik laughs too."),
      t("Подпись: «Estou atrasado!» Фото — в альбом.", "Caption: “Estou atrasado!” Into the album it goes."),
    ],
    bridge: t("Автобус едет на юго-восток, в горы штата Минас-Жерайс.", "The bus heads south-east, into the hills of Minas Gerais."),
  },
};

const story: CityStory = {
  home: {
    name: t("Комната в квартире Рафаэла", "A room in Rafael's flat"),
    nameRu: "O quarto no apartamento do Rafael",
    image: p("home"),
    a11y: t(
      "Аккуратная светлая комната в доме на ножках-колоннах. В окно видны зелёные деревья и белые многоэтажки. Посередине чемодан Мурзика.",
      "A neat, bright room in a building raised on pillars. Through the window: green trees and white apartment blocks. Murzik's suitcase in the middle.",
    ),
  },
  keepsakeId: "photo-brasilia",
  welcomeRu: "Olá, Brasília!",
  welcomeEn: t("Привет, Бразилиа!", "Hello, Brasília!"),
  welcomeImage: p("arrival"),
  welcomeA11y: t(
    "Широкая площадь с белыми зданиями необычной формы: две высокие башни и купола. Рафаэл в рубашке и галстуке спешит навстречу Мурзику и Бии.",
    "A wide square with unusual white buildings: two tall towers and domes. Rafael, in a shirt and tie, hurries over to meet Murzik and Bia.",
  ),
  departureImage: p("departure"),
  departureA11y: t("Рафаэл машет с перрона автовокзала.", "Rafael waves from the bus station platform."),
  finale: [
    {
      image: p("photo"),
      a11y: t("Мурзик вклеивает в альбом фото Пипоки на табло.", "Murzik sticks the photo of Pipoca on the departures board into the album."),
      lines: [
        { en: t("Восьмая страница альбома: Пипока на автовокзале.", "Page eight of the album: Pipoca at the bus station.") },
        { ru: "Estou atrasado!", en: t("Я опаздываю!", "I'm late!") },
        { en: t("А на календаре всё ближе красное сердечко.", "And the red heart on the calendar is getting closer.") },
      ],
    },
    {
      image: img.greet,
      a11y: t("Мурзик радостно подпрыгивает.", "Murzik jumps for joy."),
      lines: [
        { ru: "Brasília completa!", en: t("Бразилиа пройдена!", "Brasília complete!") },
        { en: t("7 / 7 уроков", "7 / 7 lessons") },
      ],
    },
    {
      image: p("departure"),
      a11y: t("Рафаэл машет на прощание.", "Rafael waves goodbye."),
      lines: [
        { ru: "Tchau, Rafael! Não se atrase!", en: t("Пока, Рафаэл! Не опаздывай!", "Bye, Rafael! Don't be late!") },
        { ru: "Próxima parada: Ouro Preto!", en: t("Следующая остановка: Ору-Прету!", "Next stop: Ouro Preto!") },
      ],
    },
    {
      image: p("bus"),
      a11y: t("Ночной автобус едет по извилистой дороге среди холмов.", "A night bus travels along a winding road through the hills."),
      lines: [{ ru: "Brasília → Ouro Preto", en: t("Бразилиа → Ору-Прету", "Brasília → Ouro Preto") }],
    },
    {
      image: pic("pt/ouropreto/arrival"),
      a11y: t(
        "Старинный город на холмах: белые домики с цветными окнами, мощёные улицы круто идут вверх и вниз, церкви с башенками.",
        "An old town on the hills: white houses with colourful windows, steep cobbled streets going up and down, churches with little towers.",
      ),
      lines: [
        { ru: "Olá, Ouro Preto!", en: t("Привет, Ору-Прету!", "Hello, Ouro Preto!") },
        { ru: "Quantas ladeiras!", en: t("Сколько крутых улочек!", "So many steep streets!") },
      ],
    },
  ],
};

export const ptBrasilia = {
  id: "pt-brasilia",
  name: t("Бразилиа", "Brasília"),
  namePt: "Brasília",
  lessons: [br1, br2, br3, br4, br5, br6, br7],
  story,
};
