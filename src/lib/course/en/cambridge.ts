import { pic } from "../art";
import { read } from "../make";
import type { CityStory, Lesson } from "../types";
import { choice, fill, letter, line, listen, match, script, speak, tf, v } from "../tr/make";

/*
 * Кембридж · «Планы и приглашения» · A2, уроки 1–7.
 * Фургон «Hope on Wheels» стоит у реки. Студент Олли (катается на лодке и на велосипеде) зовёт Мурзика
 * и Тома в гости и на день рождения; пекарь Рут учит печь булочки «Челси».
 * Грамматика: Present Continuous для планов (I'm meeting…), предложения Let's… / Why don't we…? /
 * Shall we…?, вежливый отказ I'm afraid…, перенести встречу, Shall I…?
 */

const p = (name: string) => pic(`en/cambridge/${name}`);

const cambridge1: Lesson = {
  id: "en-a2-cambridge-1",
  level: "A2",
  cityId: "en-cambridge",
  number: 1,
  title: "What are you doing tomorrow? — Что ты делаешь завтра?",
  minutes: 8,
  goals: ["Спросить о планах", "Рассказать о своих планах", "Present Continuous для будущего: I'm meeting…"],
  vocabNote: "О планах, которые уже решены, англичане говорят в Present Continuous: I'm meeting Ollie tomorrow — «Завтра я встречаюсь с Олли».",
  vocab: [
    v("enca1-1", "What are you doing tomorrow?", "Что ты делаешь завтра?", "Олли, высокий студент в шарфе колледжа, облокотился на окошко фургона.", "Послушать What are you doing tomorrow", p("l1-1")),
    v("enca1-2", "I'm meeting a friend.", "Я встречаюсь с другом.", "Мурзик показывает на часы и на кафе у реки.", "Послушать I'm meeting a friend", p("l1-2")),
    v("enca1-3", "Are you free on Saturday?", "Ты свободен(-на) в субботу?", "Олли держит два билета и улыбается.", "Послушать Are you free on Saturday", p("l1-3")),
    v("enca1-4", "I'm working all day.", "Я работаю весь день.", "Том за плитой в фургоне, вокруг пар.", "Послушать I'm working all day", p("l1-4")),
    v("enca1-5", "this evening", "сегодня вечером", "Река на закате, у воды зажигаются фонари.", "Послушать this evening", p("l1-5")),
    v("enca1-6", "the day after tomorrow", "послезавтра", "Календарь: сегодня, завтра и обведённое «послезавтра».", "Послушать the day after tomorrow", p("l1-6")),
    v("enca1-7", "How about Sunday?", "Может, в воскресенье?", "Мурзик листает маленький ежедневник.", "Послушать How about Sunday", p("l1-7")),
    v("enca1-8", "I've got plans.", "У меня планы.", "Плотно исписанная страница ежедневника.", "Послушать I've got plans", p("l1-8")),
  ],
  letters: [
    letter("-ing = [иŋ]", "Окончание -ing — носовое [ŋ], не [инг] и не [ин]: meeting — [ми:тиŋ].", "meeting", "встреча, встречаюсь"),
    letter("Saturday", "Ударение на первый слог, середина почти глотается: [сэтэдэй].", "on Saturday", "в субботу"),
  ],
  dialogue: {
    title: "У реки",
    note: "Olly / Ollie — сокращённое от Oliver. Uni — разговорное «университет».",
    lines: [
      line("ollie", "Hi! Nice van! What are you doing tomorrow?", "Привет! Классный фургон! Что вы делаете завтра?"),
      line("tom", "I'm working all day. We're selling chips here.", "Я работаю весь день. Мы продаём здесь картошку."),
      line("ollie", "And you? Are you free on Saturday?", "А ты? Ты свободен в субботу?"),
      line("murzik", "Sorry, I've got plans. I'm meeting a friend from London.", "Извини, у меня планы. Я встречаюсь с другом из Лондона."),
      line("ollie", "How about Sunday? I'm rowing on the river. Come and watch!", "А в воскресенье? Я гребу на реке. Приходите посмотреть!"),
      line("murzik", "Sunday is great! What time?", "Воскресенье — отлично! Во сколько?"),
      line("ollie", "At ten. And this evening I'm going to a party. Want to come?", "В десять. А сегодня вечером я иду на вечеринку. Хотите со мной?"),
    ],
    gist: choice("enca1-d1", "Когда Мурзик придёт смотреть, как Олли гребёт?", [
      ["В воскресенье в десять.", true],
      ["В субботу.", false],
      ["Сегодня вечером.", false],
    ]),
  },
  grammar: [
    {
      title: "Present Continuous для планов",
      paragraphs: [
        "Если план уже решён (договорились, купили билеты), используем Present Continuous и слово времени: I'm meeting a friend tomorrow. We're leaving on Monday.",
        "Без слова времени это значит «сейчас»: I'm working. Со словом времени — будущее: I'm working on Saturday.",
      ],
      examples: [
        { ru: "What are you doing this evening? — I'm going to the cinema.", en: "Что делаешь сегодня вечером? — Иду в кино." },
        { ru: "We're leaving the day after tomorrow.", en: "Мы уезжаем послезавтра." },
      ],
    },
  ],
  tasks: [
    listen("enca1-t1", "Послушай. Что Олли делает в воскресенье?", "How about Sunday? I'm rowing on the river.", [
      ["Гребёт на реке.", true],
      ["Работает весь день.", false],
      ["Идёт на вечеринку.", false],
    ]),
    choice("enca1-t2", "Как сказать «Завтра я встречаюсь с другом»?", [
      ["I'm meeting a friend tomorrow.", true],
      ["I meet a friend tomorrow yesterday.", false],
      ["I'm meet a friend tomorrow.", false],
    ], { skill: "grammar" }),
    fill("enca1-t3", "Выбери правильное слово.", "We", "on Monday.", "are leaving", ["are leaving", "leaving", "is leave"], { skill: "grammar" }),
    read("enca1-t4", "Прочитай записку Олли. Чем он занят в пятницу?", "My week:\nMon — lectures\nTue — rowing\nFri — working in the college café\nSat — free!", [
      ["Работает в кафе колледжа.", true],
      ["Гребёт.", false],
      ["Свободен.", false],
    ]),
    script("enca1-t5", "Олли пишет тебе. Ответь.", [
      { speaker: "Олли", text: "Are you free on Saturday?" },
      { speaker: "Ты", answer: "Sorry, I've got plans.", options: ["Sorry, I've got plans.", "Nice van!", "the day after tomorrow"] },
      { speaker: "Олли", text: "OK! How about Sunday?" },
      { speaker: "Ты", answer: "Sunday is great!", options: ["Sunday is great!", "I'm working all day yesterday.", "What are you doing?"] },
    ], { skill: "reading" }),
    match("enca1-t6", "Соедини пары.", [
      ["this evening", "сегодня вечером"],
      ["the day after tomorrow", "послезавтра"],
      ["I've got plans.", "У меня планы."],
      ["How about Sunday?", "Может, в воскресенье?"],
    ], { skill: "words" }),
    speak("enca1-t7", "What are you doing this weekend?", "On Saturday I'm meeting a friend, and on Sunday I'm working.", "В субботу я встречаюсь с другом, а в воскресенье работаю.", {
      help: "Расскажи вслух о своих планах на выходные.",
    }),
  ],
  reward: {
    itemId: "wall-planner",
    itemName: "Календарь для планов",
    itemNameRu: "Wall planner",
    ru: "A planner for our plans!",
    en: "Календарь для наших планов!",
    a11y: "На стенке фургона висит календарь-планер, в нём нарисованы маленькие значки: лодка, торт, велосипед.",
    image: p("wall-planner"),
    steps: ["Олли дарит Мурзику старый календарь-планер.", "«In Cambridge everyone is always busy», — смеётся он. «В Кембридже все всегда заняты».", "Мурзик рисует в воскресенье маленькую лодку.", "Теперь планы не потеряются."],
    bridge: "В воскресенье после гонки Олли предлагает: «Let's go punting!» Пантинг? Что это?",
  },
};

const cambridge2: Lesson = {
  id: "en-a2-cambridge-2",
  level: "A2",
  cityId: "en-cambridge",
  number: 2,
  title: "Let's go punting! — Давайте покатаемся!",
  minutes: 8,
  goals: ["Предложить что-то сделать", "Согласиться или засомневаться", "Let's…, Why don't we…?, Shall we…?"],
  vocabNote: "Punt — плоская лодка, которую толкают длинным шестом. Кататься на ней — go punting, самое кембриджское развлечение.",
  vocab: [
    v("enca2-1", "a punt", "плоскодонка (лодка с шестом)", "Плоская деревянная лодка у причала, рядом длинный шест.", "Послушать a punt", p("l2-1")),
    v("enca2-2", "Why don't we go punting?", "Может, покатаемся на лодке?", "Олли показывает на лодки у реки.", "Послушать Why don't we go punting", p("l2-2")),
    v("enca2-3", "Shall we go?", "Пойдём? Поехали?", "Олли протягивает Мурзику спасательный жилет.", "Послушать Shall we go", p("l2-3")),
    v("enca2-4", "That sounds fun!", "Звучит весело!", "Мурзик подпрыгивает от радости.", "Послушать That sounds fun", p("l2-4")),
    v("enca2-5", "I'm not sure.", "Я не уверен(а).", "Том с сомнением смотрит на воду.", "Послушать I'm not sure", p("l2-5")),
    v("enca2-6", "Be careful!", "Осторожно! Будь осторожен(-на)!", "Шест застрял в иле, Том висит на нём над водой.", "Послушать Be careful", p("l2-6")),
    v("enca2-7", "Hold on tight!", "Держись крепче!", "Лодка качается, Мурзик вцепился в борт.", "Послушать Hold on tight", p("l2-7")),
    v("enca2-8", "under the bridge", "под мостом", "Лодка проплывает под старым каменным мостом.", "Послушать under the bridge", p("l2-8")),
  ],
  letters: [
    letter("u = [а]", "В punt, fun короткое [а]: [пант], [фан].", "That sounds fun!", "Звучит весело!"),
    letter("dge = [дж]", "dge в конце — как «дж»: bridge — [бридж].", "under the bridge", "под мостом"),
  ],
  dialogue: {
    title: "Пантинг",
    note: "Pole — шест. Fall in — упасть в воду. Get wet — промокнуть.",
    lines: [
      line("ollie", "The race is over! Why don't we go punting?", "Гонка закончилась! Может, покатаемся на лодке?"),
      line("murzik", "That sounds fun! Shall we go now?", "Звучит весело! Пойдём сейчас?"),
      line("tom", "I'm not sure. I don't want to get wet.", "Я не уверен. Не хочу промокнуть."),
      line("ollie", "Don't worry! Let's take the big punt. Hold on tight!", "Не волнуйся! Давайте возьмём большую лодку. Держитесь крепче!"),
      line("murzik", "Look, we're going under the bridge!", "Смотрите, мы проплываем под мостом!"),
      line("ollie", "Tom, take the pole. Be careful!", "Том, бери шест. Осторожно!"),
      line("tom", "Help! The pole is stuck!", "Помогите! Шест застрял!"),
    ],
    gist: choice("enca2-d1", "Почему Том сначала не хочет кататься?", [
      ["Не хочет промокнуть.", true],
      ["Он устал после гонки.", false],
      ["Он боится моста.", false],
    ]),
  },
  grammar: [
    {
      title: "Предложения: Let's…, Why don't we…?, Shall we…?",
      paragraphs: [
        "Три способа предложить что-то сделать: Let's go punting! (Давайте покатаемся!) — Why don't we go punting? (Может, покатаемся?) — Shall we go? (Пойдём?).",
        "После всех трёх — глагол без to: Let's take, Why don't we take, Shall we take. Отвечаем: That sounds fun! / Good idea! / I'm not sure.",
      ],
      examples: [
        { ru: "Why don't we have lunch by the river?", en: "Может, пообедаем у реки?" },
        { ru: "Shall we meet at ten? — Good idea!", en: "Встретимся в десять? — Хорошая мысль!" },
      ],
    },
  ],
  tasks: [
    listen("enca2-t1", "Послушай. Что предлагает Олли?", "Why don't we go punting?", [
      ["Покататься на лодке.", true],
      ["Пойти на гонку.", false],
      ["Пообедать у реки.", false],
    ]),
    choice("enca2-t2", "Как вежливо предложить «Может, пообедаем у реки?»", [
      ["Why don't we have lunch by the river?", true],
      ["Why don't we to have lunch by the river?", false],
      ["Why we don't have lunch by the river?", false],
    ], { skill: "grammar" }),
    fill("enca2-t3", "Выбери правильное слово.", "Shall we", "the big punt?", "take", ["take", "to take", "taking"], { skill: "grammar" }),
    read("enca2-t4", "Прочитай объявление у причала. Что обязательно для детей?", "PUNT HIRE\n£30 per hour\nUp to 6 people\nChildren must wear life jackets", [
      ["Спасательный жилет.", true],
      ["Шляпа.", false],
      ["Шест.", false],
    ]),
    choice("enca2-t5", "Помоги Тому! Он говорит: «Let's to go!» Как правильно?", [
      ["Let's go!", true],
      ["Let's going!", false],
      ["Let us to go!", false],
    ], { skill: "grammar" }),
    match("enca2-t6", "Соедини пары.", [
      ["That sounds fun!", "Звучит весело!"],
      ["I'm not sure.", "Я не уверен(а)."],
      ["Be careful!", "Осторожно!"],
      ["under the bridge", "под мостом"],
    ], { skill: "words" }),
    speak("enca2-t7", "What shall we do on Sunday?", "Why don't we go to the park? Or let's have lunch by the river!", "Может, сходим в парк? Или давай пообедаем у реки!", {
      help: "Предложи вслух два варианта, что делать в воскресенье.",
    }),
  ],
  reward: {
    itemId: "folding-chairs",
    itemName: "Складные стулья",
    itemNameRu: "Folding chairs",
    ru: "Folding chairs for our guests!",
    en: "Складные стулья для гостей!",
    a11y: "Два полосатых складных стула прислонены к голубому фургону у реки.",
    image: p("folding-chairs"),
    steps: ["Том всё-таки упал в реку — но смеялся громче всех.", "Олли приносит из колледжа два старых складных стула.", "«For your customers by the river».", "Теперь у фургона можно посидеть."],
    bridge: "На понедельник Мурзик назначил встречу с Рут, лучшим пекарем Кембриджа. Но утром звонит Рут…",
  },
};

const cambridge3: Lesson = {
  id: "en-a2-cambridge-3",
  level: "A2",
  cityId: "en-cambridge",
  number: 3,
  title: "Something came up — Кое-что случилось",
  minutes: 8,
  goals: ["Вежливо отказаться: I'm afraid…", "Перенести встречу", "Предупредить, что опоздаешь"],
  vocabNote: "I'm afraid… в начале фразы — не «я боюсь», а вежливое «к сожалению».",
  vocab: [
    v("enca3-1", "I'm afraid I can't make it.", "К сожалению, я не смогу прийти.", "Рут, пожилая женщина в муке и очках, говорит по телефону.", "Послушать I'm afraid I can't make it", p("l3-1")),
    v("enca3-2", "Something came up.", "Кое-что случилось. Появились дела.", "Духовка в пекарне дымит, Рут машет полотенцем.", "Послушать Something came up", p("l3-2")),
    v("enca3-3", "Can we move it to Tuesday?", "Можно перенести на вторник?", "В календаре стрелка с понедельника на вторник.", "Послушать Can we move it to Tuesday", p("l3-3")),
    v("enca3-4", "Let me check.", "Сейчас посмотрю.", "Мурзик листает календарь-планер.", "Послушать Let me check", p("l3-4")),
    v("enca3-5", "Is four o'clock OK?", "Четыре часа подойдёт?", "Часы показывают четыре.", "Послушать Is four o'clock OK", p("l3-5")),
    v("enca3-6", "That works for me.", "Мне подходит.", "Мурзик рисует в планере кружок и показывает большой палец.", "Послушать That works for me", p("l3-6")),
    v("enca3-7", "I'll be a bit late.", "Я немного опоздаю.", "Том бежит с телефоном у уха.", "Послушать I'll be a bit late", p("l3-7")),
    v("enca3-8", "No problem at all.", "Совсем не проблема.", "Рут улыбается и машет рукой.", "Послушать No problem at all", p("l3-8")),
  ],
  letters: [
    letter("can't = [ка:нт]", "В британском английском can't — долгое [а:]: [ка:нт]. А can — коротко: [кэн].", "I can't make it.", "Я не смогу.", "Не путай: can [кэн] — могу, can't [ка:нт] — не могу."),
    letter("ue = [ю:]", "В Tuesday — [ю:]: [тью:зди].", "on Tuesday", "во вторник"),
  ],
  dialogue: {
    title: "Звонок от Рут",
    note: "Oven — духовка. Make it — здесь «успеть, смочь прийти».",
    lines: [
      line("ruth", "Hello, Murzik? It's Ruth from the bakery. I'm afraid I can't make it today.", "Алло, Мурзик? Это Рут из пекарни. К сожалению, сегодня я не смогу."),
      line("murzik", "Oh no! Is everything OK?", "Ой! Всё в порядке?"),
      line("ruth", "Something came up. My oven is broken! Can we move it to Tuesday?", "Кое-что случилось. Сломалась духовка! Можно перенести на вторник?"),
      line("murzik", "Let me check… Yes, Tuesday is free. What time?", "Сейчас посмотрю… Да, вторник свободен. Во сколько?"),
      line("ruth", "Is four o'clock OK?", "Четыре часа подойдёт?"),
      line("murzik", "That works for me. But Tom is working till four. He'll be a bit late.", "Мне подходит. Но Том работает до четырёх. Он немного опоздает."),
      line("ruth", "No problem at all. See you on Tuesday!", "Совсем не проблема. До вторника!"),
    ],
    gist: choice("enca3-d1", "Почему Рут переносит встречу?", [
      ["Сломалась духовка.", true],
      ["Она заболела.", false],
      ["Она уехала из города.", false],
    ]),
  },
  grammar: [
    {
      title: "Вежливо отказаться и перенести",
      paragraphs: [
        "Отказ: I'm afraid I can't make it. Причина без подробностей: Something came up.",
        "Перенос: Can we move it to Tuesday? / Is four o'clock OK? Ответ: That works for me. / Let me check. Предупредить: I'll be a bit late — «Я немного опоздаю» (I'll = I will, будущее время).",
      ],
      examples: [
        { ru: "I'm afraid I can't come tonight. Can we move it to Friday?", en: "К сожалению, я не смогу сегодня. Можно перенести на пятницу?" },
        { ru: "Is six OK? — That works for me.", en: "Шесть подойдёт? — Мне подходит." },
      ],
    },
  ],
  tasks: [
    listen("enca3-t1", "Послушай. На какой день переносят встречу?", "Can we move it to Tuesday?", [
      ["На вторник.", true],
      ["На четверг.", false],
      ["На сегодня.", false],
    ]),
    choice("enca3-t2", "Как вежливо отказаться от встречи?", [
      ["I'm afraid I can't make it.", true],
      ["I don't want to come.", false],
      ["No.", false],
    ], { skill: "grammar" }),
    script("enca3-t3", "Сообщения: перенеси встречу с Олли.", [
      { speaker: "Олли", text: "See you at the river at ten?" },
      { speaker: "Ты", answer: "I'm afraid I can't make it. Something came up.", options: ["I'm afraid I can't make it. Something came up.", "That works for me.", "Hold on tight!"] },
      { speaker: "Олли", text: "No problem! Can we move it to eleven?" },
      { speaker: "Ты", answer: "Let me check… Yes, that works for me.", options: ["Let me check… Yes, that works for me.", "I'm afraid I'm free.", "Shall we go punting yesterday?"] },
    ], { skill: "reading" }),
    read("enca3-t4", "Прочитай сообщение Тома. Почему он опоздает?", "Sorry! I'll be a bit late. My bike has got a flat tyre. Start without me! Tom", [
      ["У велосипеда спустило колесо.", true],
      ["Он проспал.", false],
      ["Он заблудился.", false],
    ]),
    fill("enca3-t5", "Выбери правильное слово.", "Don't wait for me. I", "be a bit late.", "will", ["will", "am", "do"], { skill: "grammar" }),
    match("enca3-t6", "Соедини пары.", [
      ["Let me check.", "Сейчас посмотрю."],
      ["That works for me.", "Мне подходит."],
      ["Something came up.", "Кое-что случилось."],
      ["No problem at all.", "Совсем не проблема."],
    ], { skill: "words" }),
    speak("enca3-t7", "Can you come to the meeting today?", "I'm afraid I can't make it. Can we move it to tomorrow?", "К сожалению, я не смогу. Можно перенести на завтра?", {
      help: "Вежливо откажись и предложи другой день.",
    }),
  ],
  reward: {
    itemId: "chalkboard-menu",
    itemName: "Доска для меню",
    itemNameRu: "Chalkboard menu",
    ru: "A chalkboard for our menu!",
    en: "Доска для нашего меню!",
    a11y: "Маленькая грифельная доска на ножках у фургона, на ней мелом нарисованы чашка и булочка.",
    image: p("chalkboard-menu"),
    steps: ["Пока Рут чинит духовку, Мурзик гуляет по рынку.", "В лавке старьёвщика — маленькая грифельная доска.", "Мурзик рисует на ней мелом чашку и булочку.", "Теперь у фургона есть настоящее меню."],
    bridge: "До вторника ещё целый день. Олли говорит: «In Cambridge you need a bike!»",
  },
};

const cambridge4: Lesson = {
  id: "en-a2-cambridge-4",
  level: "A2",
  cityId: "en-cambridge",
  number: 4,
  title: "Hiring a bike — Берём велосипед",
  minutes: 8,
  goals: ["Взять напрокат велосипед", "Спросить про цену и правила", "Рассказать, что ты делаешь завтра"],
  vocabNote: "Hire — брать напрокат. By the hour — почасово.",
  vocab: [
    v("enca4-1", "I'd like to hire a bike.", "Я хотел(а) бы взять велосипед напрокат.", "Мурзик у прилавка проката, за ним ряд велосипедов.", "Послушать I'd like to hire a bike", p("l4-1")),
    v("enca4-2", "by the hour", "почасово", "Табличка с часами и ценой.", "Послушать by the hour", p("l4-2")),
    v("enca4-3", "a helmet", "шлем", "Маленький голубой шлем на голове у Мурзика.", "Послушать a helmet", p("l4-3")),
    v("enca4-4", "a lock", "замок (велосипедный)", "Велосипед пристёгнут замком к перилам.", "Послушать a lock", p("l4-4")),
    v("enca4-5", "Where can I leave it?", "Где его можно оставить?", "Мурзик держит велосипед и оглядывается.", "Послушать Where can I leave it", p("l4-5")),
    v("enca4-6", "a cycle lane", "велодорожка", "Красная полоса с нарисованным велосипедом.", "Послушать a cycle lane", p("l4-6")),
    v("enca4-7", "a flat tyre", "спущенное колесо", "Сдутое колесо, Том грустно на него смотрит.", "Послушать a flat tyre", p("l4-7")),
    v("enca4-8", "Keep left!", "Держитесь левой стороны!", "Дорожный знак со стрелкой влево.", "Послушать Keep left", p("l4-8")),
  ],
  letters: [
    letter("tyre = [тайэ]", "y здесь читается как [ай], а re в конце почти не слышно: [тайэ].", "a flat tyre", "спущенное колесо"),
    letter("hour = [ауэ]", "В hour буква h не читается: [ауэ]. Поэтому an hour, а не a hour.", "by the hour", "почасово"),
  ],
  dialogue: {
    title: "Прокат",
    note: "Deposit — залог. В Британии ездят по левой стороне — и велосипеды тоже.",
    lines: [
      line("murzik", "Hello! I'd like to hire a bike, please.", "Здравствуйте! Я хотел бы взять велосипед напрокат."),
      line("seller", "Sure. It's five pounds an hour, or fifteen for the day.", "Конечно. Пять фунтов в час или пятнадцать за день."),
      line("murzik", "Tomorrow, for the day, please. I'm cycling to Grantchester.", "На завтра, на весь день, пожалуйста. Я еду на велосипеде в Грантчестер."),
      line("seller", "Here's a helmet and a lock. Keep left, and use the cycle lanes!", "Вот шлем и замок. Держитесь левой стороны и ездите по велодорожкам!"),
      line("murzik", "Where can I leave it in the evening?", "Где его можно оставить вечером?"),
      line("seller", "Here, at the shop. We close at seven.", "Здесь, у магазина. Мы закрываемся в семь."),
      line("tom", "Murzik! My bike has got a flat tyre!", "Мурзик! У моего велосипеда спустило колесо!"),
    ],
    gist: choice("enca4-d1", "Куда Мурзик едет завтра?", [
      ["В Грантчестер на велосипеде.", true],
      ["В Лондон на поезде.", false],
      ["На реку кататься на лодке.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем: планы в Present Continuous",
      paragraphs: [
        "Tomorrow I'm cycling to Grantchester. We're having a picnic. Планы уже решены — значит, Present Continuous.",
        "Вопросы: What are you doing tomorrow? Where are you going? Who are you meeting?",
      ],
      examples: [
        { ru: "Where are you going tomorrow? — I'm cycling to the village.", en: "Куда ты завтра? — Еду на велосипеде в деревню." },
        { ru: "We're having a picnic by the river.", en: "Мы устраиваем пикник у реки." },
      ],
    },
  ],
  tasks: [
    listen("enca4-t1", "Послушай. Сколько стоит велосипед на день?", "It's five pounds an hour, or fifteen for the day.", [
      ["Пятнадцать фунтов.", true],
      ["Пять фунтов.", false],
      ["Пятьдесят фунтов.", false],
    ]),
    choice("enca4-t2", "Как спросить «Куда ты едешь завтра?»", [
      ["Where are you going tomorrow?", true],
      ["Where you are going tomorrow?", false],
      ["Where do you going tomorrow?", false],
    ], { skill: "grammar" }),
    read("enca4-t3", "Прочитай правила проката. Что будет, если вернуть велосипед после семи?", "BIKE HIRE RULES\n• Always lock your bike.\n• Return it by 7 pm.\n• Late return: £10 extra.", [
      ["Нужно заплатить ещё 10 фунтов.", true],
      ["Ничего.", false],
      ["Велосипед подарят.", false],
    ]),
    choice("enca4-t4", "Почему говорят an hour, а не a hour?", [
      ["В hour не читается h, слово начинается с гласного звука.", true],
      ["Потому что hour — это время.", false],
      ["Так говорят только в Кембридже.", false],
    ], { skill: "letters" }),
    match("enca4-t5", "Соедини пары.", [
      ["a helmet", "шлем"],
      ["a lock", "замок"],
      ["a cycle lane", "велодорожка"],
      ["a flat tyre", "спущенное колесо"],
    ], { skill: "words" }),
    tf("enca4-t6", "Keep left! значит «Держитесь левой стороны!».", true, "words"),
    speak("enca4-t7", "Can I help you?", "I'd like to hire a bike for the day, please. How much is it?", "Я хотел(а) бы взять велосипед на день. Сколько это стоит?", {
      help: "Ты в прокате. Попроси велосипед вслух.",
    }),
  ],
  reward: {
    itemId: "bike-bell",
    itemName: "Велосипедный звонок",
    itemNameRu: "Bike bell",
    ru: "Ring-ring! A bike bell!",
    en: "Дзынь-дзынь! Велосипедный звонок!",
    a11y: "Блестящий звонок в виде чашки прикручен у окошка фургона.",
    image: p("bike-bell"),
    steps: ["В прокате Мурзику дарят старый звонок.", "Он похож на маленькую чашку!", "Мурзик прикручивает его у окошка фургона.", "Теперь покупатели звонят: дзынь — и Мурзик выглядывает."],
    bridge: "Вечером Олли приходит с новостью: «It's my birthday on Saturday. I'm having a party!»",
  },
};

const cambridge5: Lesson = {
  id: "en-a2-cambridge-5",
  level: "A2",
  cityId: "en-cambridge",
  number: 5,
  title: "Ollie's party — Вечеринка Олли",
  minutes: 8,
  goals: ["Пригласить на праздник", "Спросить, что принести", "Предложить помощь: Shall I…?"],
  vocabNote: "Shall I…? — «Мне…?», когда предлагаешь помочь: Shall I bring a cake? — «Мне принести торт?»",
  vocab: [
    v("enca5-1", "I'm having a party.", "Я устраиваю вечеринку.", "Олли держит связку воздушных шаров.", "Послушать I'm having a party", p("l5-1")),
    v("enca5-2", "You're invited!", "Ты приглашён (приглашена)!", "Открытка-приглашение с нарисованной лодкой.", "Послушать You're invited", p("l5-2")),
    v("enca5-3", "What shall I bring?", "Что мне принести?", "Мурзик стоит с пустой корзинкой и думает.", "Послушать What shall I bring", p("l5-3")),
    v("enca5-4", "Shall I bake a cake?", "Мне испечь торт?", "Мурзик в фартуке держит венчик.", "Послушать Shall I bake a cake", p("l5-4")),
    v("enca5-5", "Just bring yourself!", "Просто приходи сам(а)!", "Олли смеётся и машет руками.", "Послушать Just bring yourself", p("l5-5")),
    v("enca5-6", "fancy dress", "маскарадный костюм; (вечеринка) в костюмах", "Студенты в костюмах пиратов и королев.", "Послушать fancy dress", p("l5-6")),
    v("enca5-7", "the theme", "тема (вечеринки)", "Плакат с нарисованной лодкой и волнами.", "Послушать the theme", p("l5-7")),
    v("enca5-8", "Happy birthday, Ollie!", "С днём рождения, Олли!", "Все поднимают стаканы с лимонадом, Олли задувает свечи.", "Послушать Happy birthday, Ollie", p("l5-8")),
  ],
  letters: [
    letter("th = [θ]", "В theme и birthday th глухой: язык между зубами, как шепелявое «с».", "the theme", "тема", "В the — звонкий [ð], а в theme — глухой [θ]."),
  ],
  dialogue: {
    title: "Приглашение",
    note: "Fancy dress — когда все приходят в костюмах. Pirate — пират.",
    lines: [
      line("ollie", "It's my birthday on Saturday. I'm having a party. You're invited!", "В субботу у меня день рождения. Я устраиваю вечеринку. Вы приглашены!"),
      line("murzik", "Thank you! What shall I bring?", "Спасибо! Что мне принести?"),
      line("ollie", "Just bring yourselves! But it's fancy dress.", "Просто приходите сами! Но это костюмированная вечеринка."),
      line("tom", "Fancy dress? What's the theme?", "В костюмах? А какая тема?"),
      line("ollie", "The river! Pirates, fish, boats…", "Река! Пираты, рыбы, лодки…"),
      line("murzik", "Shall I bake a cake? A boat cake!", "Мне испечь торт? Торт-лодку!"),
      line("ollie", "That would be amazing!", "Это было бы потрясающе!"),
    ],
    gist: choice("enca5-d1", "Какая тема у вечеринки?", [
      ["Река: пираты, рыбы, лодки.", true],
      ["Кино.", false],
      ["Космос.", false],
    ]),
  },
  grammar: [
    {
      title: "Shall I…? — предлагаем помощь",
      paragraphs: [
        "Shall I + глагол? — «Мне сделать…?», когда предлагаешь помочь: Shall I bake a cake? Shall I open the window?",
        "Shall we…? — предложение сделать вместе (урок 2). Shall I…? — предлагаю сделать сам(а).",
      ],
      examples: [
        { ru: "Shall I help you? — Yes, please!", en: "Тебе помочь? — Да, пожалуйста!" },
        { ru: "What shall I bring? — Some drinks.", en: "Что мне принести? — Что-нибудь попить." },
      ],
    },
  ],
  tasks: [
    listen("enca5-t1", "Послушай. Когда вечеринка?", "It's my birthday on Saturday. I'm having a party.", [
      ["В субботу.", true],
      ["В воскресенье.", false],
      ["Сегодня.", false],
    ]),
    choice("enca5-t2", "Как предложить «Мне открыть окно?»", [
      ["Shall I open the window?", true],
      ["Shall we to open the window?", false],
      ["Do I open the window?", false],
    ], { skill: "grammar" }),
    read("enca5-t3", "Прочитай приглашение. Во что нужно нарядиться?", "OLLIE'S 21st!\nSaturday, 7 pm\nThe Boathouse\nFancy dress: THE RIVER (pirates, fish, boats)\nJust bring yourself!", [
      ["Пиратом, рыбой или лодкой.", true],
      ["В вечернее платье или костюм.", false],
      ["В спортивную форму.", false],
    ]),
    script("enca5-t4", "Олли приглашает тебя. Ответь.", [
      { speaker: "Олли", text: "I'm having a party on Saturday. You're invited!" },
      { speaker: "Ты", answer: "Thank you! What shall I bring?", options: ["Thank you! What shall I bring?", "I'm afraid I'm a pirate.", "Keep left!"] },
      { speaker: "Олли", text: "Just bring yourself! It's fancy dress." },
      { speaker: "Ты", answer: "Great! Shall I bake a cake?", options: ["Great! Shall I bake a cake?", "Shall I bring yourself?", "No problem yesterday."] },
    ], { skill: "speaking" }),
    match("enca5-t5", "Соедини пары.", [
      ["You're invited!", "Ты приглашён (приглашена)!"],
      ["fancy dress", "в маскарадных костюмах"],
      ["the theme", "тема"],
      ["Just bring yourself!", "Просто приходи сам(а)!"],
    ], { skill: "words" }),
    tf("enca5-t6", "Shall I bake a cake? — это вопрос «Ты испечёшь торт?»", false, "grammar"),
    speak("enca5-t7", "I'm having a party on Friday. Can you come?", "I'd love to! What shall I bring? Shall I make a salad?", "С удовольствием! Что принести? Может, мне сделать салат?", {
      help: "Тебя приглашают на вечеринку. Согласись и предложи помощь.",
    }),
  ],
  reward: {
    itemId: "bunting",
    itemName: "Гирлянда-флажки",
    itemNameRu: "Bunting",
    ru: "Bunting! Just like a real party!",
    en: "Флажки! Совсем как на настоящем празднике!",
    a11y: "Гирлянда из разноцветных треугольных флажков натянута над окошком фургона.",
    image: p("bunting"),
    steps: ["Олли приносит Мурзику гирлянду из флажков: «For the party — and for your van!»", "Красные, жёлтые, голубые треугольники.", "«Bunting makes everything a party», — говорит он.", "Мурзик сразу вешает её над окошком фургона."],
    bridge: "Наступает вторник. Духовка у Рут снова работает. Пора учиться печь булочки «Челси»!",
  },
};

const cambridge6: Lesson = {
  id: "en-a2-cambridge-6",
  level: "A2",
  cityId: "en-cambridge",
  number: 6,
  title: "Chelsea buns — Булочки «Челси»",
  minutes: 8,
  goals: ["Понять рецепт выпечки", "Спросить, сколько времени это займёт", "Предложить помощь на кухне"],
  vocabNote: "Chelsea bun — скрученная улиткой сладкая булочка с изюмом и корицей. В Кембридже её любят уже сто лет.",
  vocab: [
    v("enca6-1", "dough", "тесто", "Рут месит большой ком теста на посыпанном мукой столе.", "Послушать dough", p("l6-1")),
    v("enca6-2", "roll it out", "раскатать", "Скалка раскатывает тесто в тонкий прямоугольник.", "Послушать roll it out", p("l6-2")),
    v("enca6-3", "cinnamon", "корица", "Палочки корицы и коричневый порошок в миске.", "Послушать cinnamon", p("l6-3")),
    v("enca6-4", "currants", "изюм (мелкий)", "Горсть мелкого тёмного изюма.", "Послушать currants", p("l6-4")),
    v("enca6-5", "sticky", "липкий", "Мурзик облизывает лапу в сладком сиропе.", "Послушать sticky", p("l6-5")),
    v("enca6-6", "How long does it take?", "Сколько времени это займёт?", "Мурзик смотрит на кухонные часы.", "Послушать How long does it take", p("l6-6")),
    v("enca6-7", "Leave it for an hour.", "Оставь на час.", "Тесто под полотенцем поднимается в миске.", "Послушать Leave it for an hour", p("l6-7")),
    v("enca6-8", "Shall I wash up?", "Мне помыть посуду?", "Мурзик у раковины в пене с губкой.", "Послушать Shall I wash up", p("l6-8")),
  ],
  letters: [
    letter("ough = [оу]", "В dough буквы gh не читаются: [доу].", "dough", "тесто", "Сочетание ough читается по-разному: dough [доу], tough [таф]. Запоминаем по словам."),
    letter("c = [с]", "Перед i и e буква c — [с]: cinnamon — [синэмэн].", "cinnamon", "корица"),
  ],
  dialogue: {
    title: "В пекарне Рут",
    note: "Rise — подниматься (о тесте). Glaze — глазурь, сироп сверху.",
    lines: [
      line("ruth", "First, make the dough. Then leave it for an hour.", "Сначала сделай тесто. Потом оставь его на час."),
      line("murzik", "An hour! How long does it take in total?", "Час! А сколько всё это займёт?"),
      line("ruth", "About three hours. After an hour, roll it out and add the cinnamon and currants.", "Около трёх часов. Через час раскатай тесто и добавь корицу и изюм."),
      line("murzik", "Like this? Then I roll it up like a snail?", "Вот так? А потом сворачиваю улиткой?"),
      line("ruth", "Exactly! Bake them for twenty minutes, and then the sticky glaze.", "Точно! Пеки двадцать минут, а потом — липкая глазурь."),
      line("tom", "Sorry I'm late! Shall I help? Shall I wash up?", "Простите, я опоздал! Мне помочь? Мне помыть посуду?"),
      line("ruth", "Yes, please! Murzik's paws are very sticky!", "Да, пожалуйста! У Мурзика лапы очень липкие!"),
    ],
    gist: choice("enca6-d1", "Сколько всего времени уходит на булочки?", [
      ["Около трёх часов.", true],
      ["Двадцать минут.", false],
      ["Один час.", false],
    ]),
  },
  grammar: [
    {
      title: "Рецепты: повелительное наклонение",
      paragraphs: [
        "В рецептах говорят глаголом без you: Make the dough. Roll it out. Add the cinnamon. Bake for twenty minutes.",
        "Порядок: first, then, after that, finally. Время: for an hour (в течение часа), for twenty minutes.",
      ],
      examples: [
        { ru: "First, mix the flour and milk. Then leave it for an hour.", en: "Сначала смешай муку и молоко. Потом оставь на час." },
        { ru: "Finally, add the glaze.", en: "В конце добавь глазурь." },
      ],
    },
  ],
  tasks: [
    listen("enca6-t1", "Послушай. Сколько печь булочки?", "Bake them for twenty minutes, and then the sticky glaze.", [
      ["Двадцать минут.", true],
      ["Час.", false],
      ["Три часа.", false],
    ]),
    read("enca6-t2", "Прочитай рецепт Рут. Что делать после того, как тесто подошло?", "CHELSEA BUNS\n1. Make the dough. Leave it for an hour.\n2. Roll it out. Add butter, cinnamon and currants.\n3. Roll it up and cut it into buns.\n4. Bake for 20 minutes. Add the glaze.", [
      ["Раскатать и добавить масло, корицу и изюм.", true],
      ["Сразу печь двадцать минут.", false],
      ["Добавить глазурь.", false],
    ]),
    choice("enca6-t3", "Как предложить «Мне помыть посуду?»", [
      ["Shall I wash up?", true],
      ["Shall we washing up?", false],
      ["Do I wash up?", false],
    ], { skill: "grammar" }),
    fill("enca6-t4", "Выбери правильное слово.", "", "it for an hour.", "Leave", ["Leave", "Leaves", "Leaving"], { skill: "grammar" }),
    match("enca6-t5", "Соедини пары.", [
      ["dough", "тесто"],
      ["cinnamon", "корица"],
      ["sticky", "липкий"],
      ["roll it out", "раскатать"],
    ], { skill: "words" }),
    tf("enca6-t6", "How long does it take? — это вопрос о цене.", false, "words"),
    speak("enca6-t7", "How do you make tea?", "First, boil the water. Then put a tea bag in a cup and pour in the water. Leave it for three minutes.", "Сначала вскипяти воду. Потом положи пакетик в чашку и налей воду. Оставь на три минуты.", {
      help: "Объясни вслух простой рецепт: как заварить чай.",
    }),
  ],
  reward: {
    itemId: "baking-tray",
    itemName: "Противень",
    itemNameRu: "Baking tray",
    ru: "Our own baking tray!",
    en: "Наш собственный противень!",
    a11y: "Старый круглый противень с двенадцатью липкими булочками-улитками стоит на плите фургона.",
    image: p("baking-tray"),
    steps: ["Рут дарит Мурзику свой старый противень.", "«It baked a thousand buns. Now it's your turn».", "«Он испёк тысячу булочек. Теперь твоя очередь».", "Мурзик ставит его на плиту в фургоне."],
    bridge: "Последний день в Кембридже. Рут обещала подарок для книги дороги.",
  },
};

const cambridge7: Lesson = {
  id: "en-a2-cambridge-7",
  level: "A2",
  cityId: "en-cambridge",
  number: 7,
  title: "Cambridge exam — Экзамен: Кембридж",
  minutes: 9,
  goals: ["Понять длинный рассказ на слух", "Договориться о следующей встрече", "Повторить всё из Кембриджа"],
  vocabNote: "Урок 7 — экзамен города: длинная аудиоистория и повторение всего из Кембриджа.",
  vocab: [
    v("enca7-1", "a secret recipe", "секретный рецепт", "Рут прижимает к груди старую карточку.", "Послушать a secret recipe", p("l7-1")),
    v("enca7-2", "my grandmother's", "моей бабушки", "Старая фотография женщины у пекарни.", "Послушать my grandmother's", p("l7-2")),
    v("enca7-3", "Keep it safe!", "Береги его!", "Рут вкладывает карточку в лапы Мурзику.", "Послушать Keep it safe", p("l7-3")),
    v("enca7-4", "Where are you going next?", "Куда вы дальше?", "Олли рассматривает карту на стенке фургона.", "Послушать Where are you going next", p("l7-4")),
    v("enca7-5", "We're heading to Cornwall.", "Мы едем в Корнуолл.", "Стрелка на карте на юго-запад Англии.", "Послушать We're heading to Cornwall", p("l7-5")),
    v("enca7-6", "It's a long drive.", "Ехать долго.", "Длинная дорога через поля, фургон вдали.", "Послушать It's a long drive", p("l7-6")),
    v("enca7-7", "Let's keep in touch!", "Давай не терять связь!", "Олли и Мурзик обмениваются телефонами.", "Послушать Let's keep in touch", p("l7-7")),
    v("enca7-8", "I'm coming to the festival!", "Я приеду на фестиваль!", "Олли показывает на плакат фестиваля.", "Послушать I'm coming to the festival", p("l7-8")),
  ],
  letters: [
    letter("Cornwall", "Ударение на первый слог, a почти как [о:]: [ко:нуол].", "Cornwall", "Корнуолл"),
  ],
  dialogue: {
    title: "Прощание у реки",
    note: "Head to — разговорное «направляться». Promise — обещать.",
    lines: [
      line("ruth", "This is for your road book. My grandmother's secret recipe.", "Это для вашей книги дороги. Секретный рецепт моей бабушки."),
      line("murzik", "Chelsea buns! Thank you, Ruth. I'll keep it safe!", "Булочки «Челси»! Спасибо, Рут. Я буду его беречь!"),
      line("ollie", "So where are you going next?", "Ну, а куда вы дальше?"),
      line("tom", "We're heading to Cornwall. We're leaving tomorrow morning.", "Мы едем в Корнуолл. Выезжаем завтра утром."),
      line("ollie", "That's a long drive! Let's keep in touch.", "Ехать долго! Давайте не теряться."),
      line("murzik", "Of course! And the festival is at the end of August.", "Конечно! А фестиваль — в конце августа."),
      line("ollie", "I know! I'm coming to the festival. I promise!", "Знаю! Я приеду на фестиваль. Обещаю!"),
    ],
    gist: choice("enca7-d1", "Когда Мурзик и Том уезжают?", [
      ["Завтра утром.", true],
      ["Сегодня вечером.", false],
      ["В конце августа.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем Кембридж",
      paragraphs: [
        "Планы: I'm meeting…, We're leaving tomorrow. Предложения: Let's…, Why don't we…?, Shall we…? Помощь: Shall I…?",
        "Вежливый отказ и перенос: I'm afraid I can't make it. Can we move it to…? Рецепт: Make…, Leave it for an hour.",
      ],
      examples: [
        { ru: "We're leaving tomorrow. Shall we have dinner tonight?", en: "Мы завтра уезжаем. Поужинаем сегодня?" },
        { ru: "I'm afraid I can't. Can we move it to Friday?", en: "Боюсь, не смогу. Можно перенести на пятницу?" },
      ],
    },
  ],
  tasks: [
    listen("enca7-t1", "Аудиоистория: Рут рассказывает о своей пекарне. Послушай. Кто открыл пекарню?", "My grandmother opened this bakery in 1925. Every morning she got up at four and made Chelsea buns. Students queued outside before their lectures. When I was a girl, I helped her. Now I'm seventy, and I still get up at four!", [
      ["Бабушка Рут, в 1925 году.", true],
      ["Сама Рут, когда ей было двадцать.", false],
      ["Студенты университета.", false],
    ]),
    choice("enca7-t2", "Из рассказа Рут: во сколько она встаёт?", [
      ["В четыре.", true],
      ["В семь.", false],
      ["В девять.", false],
    ], { skill: "listening" }),
    choice("enca7-t3", "Как сказать «Мы уезжаем завтра утром» (план уже решён)?", [
      ["We're leaving tomorrow morning.", true],
      ["We leave yesterday morning.", false],
      ["We leaving tomorrow morning.", false],
    ], { skill: "grammar" }),
    read("enca7-t4", "Прочитай сообщение Олли. Что он предлагает?", "Hi! Why don't we have breakfast before you leave? The café by the bridge, 8 am? Ollie", [
      ["Позавтракать вместе в кафе у моста в восемь.", true],
      ["Покататься на лодке.", false],
      ["Поехать вместе в Корнуолл.", false],
    ]),
    script("enca7-t5", "Попрощайся с Олли.", [
      { speaker: "Олли", text: "Where are you going next?" },
      { speaker: "Ты", answer: "We're heading to Cornwall.", options: ["We're heading to Cornwall.", "I'm afraid I can't make it.", "Leave it for an hour."] },
      { speaker: "Олли", text: "Let's keep in touch!" },
      { speaker: "Ты", answer: "Of course! See you at the festival!", options: ["Of course! See you at the festival!", "Shall I wash up?", "Keep left!"] },
    ], { skill: "review" }),
    match("enca7-t6", "Повторяем Кембридж: соедини пары.", [
      ["the day after tomorrow", "послезавтра"],
      ["That sounds fun!", "Звучит весело!"],
      ["That works for me.", "Мне подходит."],
      ["dough", "тесто"],
    ], { skill: "review" }),
    speak("enca7-t7", "What are you doing tomorrow?", "Tomorrow I'm leaving for Cornwall. Why don't we meet for breakfast first?", "Завтра я уезжаю в Корнуолл. Может, сначала встретимся за завтраком?", {
      help: "Расскажи о планах на завтра и предложи встретиться.",
    }),
  ],
  reward: {
    itemId: "recipe-chelsea-buns",
    itemName: "Рецепт «Chelsea buns»",
    itemNameRu: "Chelsea buns recipe card",
    ru: "Our second recipe!",
    en: "Наш второй рецепт!",
    a11y: "Старая карточка с рецептом булочек «Челси», написанным от руки, вклеена на вторую страницу голубой тетради; на полях нарисована лодка.",
    image: p("recipe-chelsea-buns"),
    steps: ["Мурзик вклеивает рецепт на вторую страницу книги дороги.", "Почерк бабушки Рут — сто лет назад.", "Олли рисует на полях лодку.", "Два рецепта есть. Впереди — море Корнуолла."],
  },
};

const story: CityStory = {
  home: {
    name: "Фургон у реки",
    nameRu: "The van by the river",
    image: p("home"),
    a11y: "Голубой фургон «Hope on Wheels» стоит на зелёном лугу у реки; рядом старые колледжи, по реке плывут плоскодонки.",
  },
  keepsakeId: "recipe-chelsea-buns",
  welcomeRu: "Hello, Cambridge!",
  welcomeEn: "Привет, Кембридж!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Голубой фургон у реки в Кембридже: старинные колледжи, плоскодонки на воде, велосипеды.",
  departureImage: p("departure"),
  departureA11y: "Олли и Рут машут на прощание голубому фургону, который отъезжает от луга у реки.",
  finale: [
    {
      image: p("finale-1"),
      a11y: "У фургона уютно: календарь-планер, складные стулья, доска с меню, звонок-чашка, флажки над окошком, противень с булочками.",
      lines: [
        { en: "Фургон у реки стал любимым местом студентов." },
        { en: "В книге дороги второй рецепт: булочки «Челси» бабушки Рут." },
      ],
    },
    {
      image: p("finale-2"),
      a11y: "Мурзик и Том на плоскодонке под каменным мостом на закате, Олли толкает лодку шестом.",
      lines: [
        { ru: "Cambridge complete!", en: "Кембридж пройден!" },
        { en: "7 / 7 уроков" },
        { ru: "We're making plans in English!", en: "Мы строим планы по-английски!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Олли и Рут машут на прощание голубому фургону, который отъезжает от луга у реки.",
      lines: [
        { ru: "Goodbye, Ollie! Goodbye, Ruth!", en: "До свидания, Олли! До свидания, Рут!" },
        { ru: "Next stop: Cornwall!", en: "Следующая остановка: Корнуолл!" },
      ],
    },
    {
      image: p("finale-4"),
      a11y: "Голубой фургон едет по длинной дороге на юго-запад, мимо полей и каменных изгородей, впереди виднеется море.",
      lines: [{ ru: "Cambridge → St Ives", en: "Кембридж → Сент-Айвс" }],
    },
    {
      image: pic("en/stives/arrival"),
      a11y: "Голубой фургон в Сент-Айвсе: маленькая гавань с лодками, белые домики на холме, бирюзовое море и чайки.",
      lines: [{ ru: "Hello, St Ives!", en: "Привет, Сент-Айвс!" }],
    },
  ],
};

export const enCambridge = {
  id: "en-cambridge",
  name: "Кембридж",
  nameEn: "Cambridge",
  lessons: [cambridge1, cambridge2, cambridge3, cambridge4, cambridge5, cambridge6, cambridge7],
  story,
};
