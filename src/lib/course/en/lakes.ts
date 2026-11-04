import { pic } from "../art";
import { read } from "../make";
import type { CityStory, Lesson } from "../types";
import { choice, fill, letter, line, listen, match, script, speak, tf, v } from "../tr/make";

/*
 * Озёрный край · «Поход и природа» · A2, уроки 1–7.
 * Фургон «Hope on Wheels» стоит на кемпинге у озера. Фрейя (около 35) — смотрительница национального
 * парка, объясняет правила. Фермер Гордон (около 60) пасёт овец на холмах; когда фургон застревает
 * на узкой горной дороге, он вытаскивает его трактором. Его жена Джин печёт мятную плитку Кендала.
 * Грамматика: have to / don't have to, must / mustn't, should; правила и советы для похода.
 */

const p = (name: string) => pic(`en/lakes/${name}`);

const lakes1: Lesson = {
  id: "en-a2-lakes-1",
  level: "A2",
  cityId: "en-lakes",
  number: 1,
  title: "Campsite rules — Правила кемпинга",
  minutes: 8,
  goals: ["Понять правила", "You must… / You mustn't…", "Спросить, что можно и нельзя"],
  vocabNote: "Must — «обязательно нужно», mustn't — «нельзя ни в коем случае». В правилах и на табличках это обычные слова.",
  vocab: [
    v("enlk1-1", "a campsite", "кемпинг", "Поле у озера, палатки и фургоны.", "Послушать a campsite", p("l1-1")),
    v("enlk1-2", "a ranger", "смотритель(ница) парка", "Фрейя в зелёной куртке с биноклем на шее.", "Послушать a ranger", p("l1-2")),
    v("enlk1-3", "You must close the gate.", "Ворота нужно обязательно закрывать.", "Деревянная калитка в каменной стене.", "Послушать You must close the gate", p("l1-3")),
    v("enlk1-4", "You mustn't light fires.", "Костры разводить нельзя.", "Знак: перечёркнутый костёр.", "Послушать You mustn't light fires", p("l1-4")),
    v("enlk1-5", "Keep dogs on a lead.", "Держите собак на поводке.", "Собака на поводке идёт мимо овец.", "Послушать Keep dogs on a lead", p("l1-5")),
    v("enlk1-6", "Take your rubbish home.", "Забирайте мусор с собой.", "Мешок с мусором в руке туриста.", "Послушать Take your rubbish home", p("l1-6")),
    v("enlk1-7", "sheep", "овца, овцы", "Белые овцы на зелёном склоне.", "Послушать sheep", p("l1-7")),
    v("enlk1-8", "Is it OK to…?", "Можно ли…?", "Мурзик поднимает лапу, как на уроке.", "Послушать Is it OK to", p("l1-8")),
  ],
  letters: [
    letter("mustn't = [маснт]", "В mustn't первая t не читается: [маснт].", "You mustn't light fires.", "Костры разводить нельзя."),
    letter("sheep = sheep", "Sheep — и одна овца, и много: one sheep, ten sheep. Не путай с ship [шип] — корабль.", "a lot of sheep", "много овец"),
  ],
  dialogue: {
    title: "У ворот кемпинга",
    note: "Gate — калитка, ворота. Lead [ли:д] — поводок.",
    lines: [
      line("freya", "Welcome to the Lake District! I'm Freya, the ranger. Here are the rules.", "Добро пожаловать в Озёрный край! Я Фрейя, смотрительница. Вот правила."),
      line("freya", "You must close the gates — the sheep can get out. And you mustn't light fires.", "Ворота нужно обязательно закрывать — иначе овцы разбегутся. И костры разводить нельзя."),
      line("murzik", "Is it OK to cook in the van?", "А можно готовить в фургоне?"),
      line("freya", "Yes, that's fine. But take your rubbish home.", "Да, конечно. Но мусор забирайте с собой."),
      line("tom", "And can we swim in the lake?", "А в озере можно купаться?"),
      line("freya", "Yes, but it's very cold! And keep your cat on a lead near the sheep.", "Да, но вода очень холодная! И держите кота на поводке рядом с овцами."),
      line("murzik", "On a lead?! I'm not a dog!", "На поводке?! Я не собака!"),
    ],
    gist: choice("enlk1-d1", "Чего на кемпинге делать нельзя?", [
      ["Разводить костры.", true],
      ["Готовить в фургоне.", false],
      ["Купаться в озере.", false],
    ]),
  },
  grammar: [
    {
      title: "Must и mustn't",
      paragraphs: [
        "Must + глагол без to — «обязательно надо»: You must close the gate. Mustn't — «нельзя»: You mustn't light fires.",
        "Must одинаково для всех: I must, he must (без -s). Вопрос: Must I…? — но чаще спрашивают Do I have to…? или Is it OK to…?",
      ],
      examples: [
        { ru: "You must wear a helmet.", en: "Шлем надевать обязательно." },
        { ru: "You mustn't feed the sheep.", en: "Кормить овец нельзя." },
      ],
    },
  ],
  tasks: [
    listen("enlk1-t1", "Послушай. Почему ворота нужно закрывать?", "You must close the gates — the sheep can get out.", [
      ["Чтобы не разбежались овцы.", true],
      ["Чтобы не замёрзнуть.", false],
      ["Потому что ночью опасно.", false],
    ]),
    choice("enlk1-t2", "Как сказать «Кормить овец нельзя»?", [
      ["You mustn't feed the sheep.", true],
      ["You mustn't to feed the sheep.", false],
      ["You don't must feed the sheep.", false],
    ], { skill: "grammar" }),
    fill("enlk1-t3", "Выбери правильное слово.", "He", "close the gate.", "must", ["must", "musts", "must to"], { skill: "grammar" }),
    read("enlk1-t4", "Прочитай табличку на кемпинге. Когда нужно соблюдать тишину?", "LAKESIDE CAMPSITE\nQuiet time: 10 pm – 7 am\nNo campfires. Barbecues on stands only.\nPlease take your rubbish home.", [
      ["С 10 вечера до 7 утра.", true],
      ["Весь день.", false],
      ["Только по выходным.", false],
    ]),
    match("enlk1-t5", "Соедини пары.", [
      ["a campsite", "кемпинг"],
      ["a ranger", "смотритель парка"],
      ["sheep", "овцы"],
      ["Take your rubbish home.", "Забирайте мусор с собой."],
    ], { skill: "words" }),
    tf("enlk1-t6", "Sheep во множественном числе — тоже sheep.", true, "words"),
    speak("enlk1-t7", "What are the rules in your home or at work?", "At work we have to start at nine. We mustn't use our phones in meetings.", "На работе мы должны начинать в девять. На совещаниях нельзя пользоваться телефоном.", {
      help: "Расскажи вслух о правилах дома или на работе: must, mustn't.",
    }),
  ],
  reward: {
    itemId: "camping-lantern",
    itemName: "Походный фонарь",
    itemNameRu: "Camping lantern",
    ru: "Light without a fire!",
    en: "Свет без костра!",
    a11y: "На крючке под навесом фургона висит зелёный походный фонарь на батарейках; за ним темнеет озеро.",
    image: p("camping-lantern"),
    steps: ["Костры разводить нельзя, а вечером темно.", "Фрейя даёт фургону походный фонарь.", "Мурзик вешает его под навесом.", "Вечером у озера — уютный зелёный свет."],
    bridge: "Утром Фрейя говорит: «Tomorrow you have to try a proper walk — up the fell!» Fell — это горы по-местному.",
  },
};

const lakes2: Lesson = {
  id: "en-a2-lakes-2",
  level: "A2",
  cityId: "en-lakes",
  number: 2,
  title: "What do we have to take? — Что нужно взять?",
  minutes: 8,
  goals: ["Собраться в поход", "Have to / don't have to", "Do I have to…?"],
  vocabNote: "Have to — «приходится, нужно» (часто из-за обстоятельств). Don't have to — «не обязательно», а не «нельзя»!",
  vocab: [
    v("enlk2-1", "a walk up the fell", "поход в горы (местное fell — гора)", "Тропа поднимается на зелёную гору.", "Послушать a walk up the fell", p("l2-1")),
    v("enlk2-2", "walking boots", "походные ботинки", "Крепкие ботинки с толстой подошвой.", "Послушать walking boots", p("l2-2")),
    v("enlk2-3", "a waterproof", "дождевик, непромокаемая куртка", "Ярко-красная непромокаемая куртка.", "Послушать a waterproof", p("l2-3")),
    v("enlk2-4", "a map and a compass", "карта и компас", "Карта местности и компас на камне.", "Послушать a map and a compass", p("l2-4")),
    v("enlk2-5", "You have to take water.", "Нужно взять воду.", "Две бутылки воды в рюкзаке.", "Послушать You have to take water", p("l2-5")),
    v("enlk2-6", "You don't have to bring food.", "Еду брать не обязательно.", "Фрейя показывает на кафе внизу у озера.", "Послушать You don't have to bring food", p("l2-6")),
    v("enlk2-7", "Do I have to…?", "Мне нужно…? Обязательно ли…?", "Том держит в руках огромный рюкзак.", "Послушать Do I have to", p("l2-7")),
    v("enlk2-8", "a packed lunch", "обед с собой", "Сэндвичи и яблоко в бумажном пакете.", "Послушать a packed lunch", p("l2-8")),
  ],
  letters: [
    letter("have to = [хэфтэ]", "В have to [v] переходит в [ф]: [хэфтэ]. Has to — [хэстэ].", "You have to take water.", "Нужно взять воду."),
    letter("compass = [кАмпэс]", "Ударение на первый слог, o звучит как [а]: [кАмпэс].", "a map and a compass", "карта и компас"),
  ],
  dialogue: {
    title: "Сборы",
    note: "Fell — горный склон, гора (так говорят на севере Англии). Weather changes fast — погода быстро меняется.",
    lines: [
      line("tom", "Freya, what do we have to take?", "Фрейя, что нам нужно взять?"),
      line("freya", "You have to wear walking boots. And you have to take a waterproof — the weather changes fast.", "Обязательно надо надеть походные ботинки. И взять дождевик — погода меняется быстро."),
      line("murzik", "Do I have to carry a map?", "Мне надо нести карту?"),
      line("freya", "Yes — a map and a compass. Phones don't always work up there.", "Да — карту и компас. Телефоны наверху не всегда ловят."),
      line("tom", "And food? Do we have to bring a packed lunch?", "А еду? Нам надо брать обед с собой?"),
      line("freya", "You don't have to bring a packed lunch — there's a café on the way up. But take a snack, and you have to take water!", "Обед с собой брать не обязательно — по дороге есть кафе. Но возьмите перекус, а воду — обязательно!"),
    ],
    gist: choice("enlk2-d1", "Почему еду брать не обязательно?", [
      ["По дороге есть кафе.", true],
      ["Поход очень короткий.", false],
      ["Фрейя принесёт еду.", false],
    ]),
  },
  grammar: [
    {
      title: "Have to и don't have to",
      paragraphs: [
        "Have to — «надо, приходится»: I have to work today. He has to wear boots. Прошедшее: had to.",
        "Don't have to — «не надо, не обязательно»: You don't have to bring food. Сравни: You mustn't light fires — «костры разводить нельзя».",
      ],
      examples: [
        { ru: "Do I have to pay? — No, you don't have to. It's free.", en: "Мне нужно платить? — Нет, не нужно. Это бесплатно." },
        { ru: "Yesterday we had to walk in the rain.", en: "Вчера нам пришлось идти под дождём." },
      ],
    },
  ],
  tasks: [
    listen("enlk2-t1", "Послушай. Почему нужно взять карту и компас?", "Yes — a map and a compass. Phones don't always work up there.", [
      ["Телефоны наверху не всегда ловят.", true],
      ["Там нет тропы.", false],
      ["Так требуют правила кафе.", false],
    ]),
    choice("enlk2-t2", "Как сказать «Платить не нужно, это бесплатно»?", [
      ["You don't have to pay. It's free.", true],
      ["You mustn't pay. It's free.", false],
      ["You haven't to pay. It's free.", false],
    ], { skill: "grammar" }),
    fill("enlk2-t3", "Выбери правильное слово.", "She", "to wear boots.", "has", ["has", "have", "must"], { skill: "grammar" }),
    read("enlk2-t4", "Прочитай список Фрейи. Что брать не обязательно?", "FELL WALK — WHAT TO TAKE\nMust: boots, waterproof, water, map, compass\nOptional: packed lunch (café on the way), camera", [
      ["Обед и фотоаппарат.", true],
      ["Ботинки.", false],
      ["Воду и карту.", false],
    ]),
    match("enlk2-t5", "Соедини пары.", [
      ["walking boots", "походные ботинки"],
      ["a waterproof", "дождевик"],
      ["a map and a compass", "карта и компас"],
      ["a packed lunch", "обед с собой"],
    ], { skill: "words" }),
    tf("enlk2-t6", "You don't have to значит «тебе нельзя».", false, "grammar"),
    speak("enlk2-t7", "What do you have to do tomorrow?", "Tomorrow I have to get up early and go to work. But I don't have to cook — my friend is making dinner.", "Завтра мне надо рано встать и пойти на работу. Но готовить не надо — ужин готовит друг.", {
      help: "Расскажи вслух, что тебе нужно и не нужно делать завтра.",
    }),
  ],
  reward: {
    itemId: "compass",
    itemName: "Старый компас",
    itemNameRu: "Old compass",
    ru: "North is that way!",
    en: "Север — вон там!",
    a11y: "На полке фургона лежит старый латунный компас с откидной крышкой, рядом сложенная карта.",
    image: p("compass"),
    steps: ["Фрейя одалживает Мурзику старый латунный компас.", "«It was my grandad's. Keep it — it should travel».", "Мурзик учится находить север.", "Стрелка всегда показывает на озеро."],
    bridge: "Утро солнечное. Мурзик, Том и Фрейя идут вверх по тропе. Но погода в горах быстро меняется…",
  },
};

const lakes3: Lesson = {
  id: "en-a2-lakes-3",
  level: "A2",
  cityId: "en-lakes",
  number: 3,
  title: "On the fell — В горах",
  minutes: 8,
  goals: ["Дать совет: should / shouldn't", "Описать погоду в горах", "Предложить повернуть назад"],
  vocabNote: "Should — «стоит, лучше бы» (совет). Shouldn't — «не стоит». Это мягче, чем must.",
  vocab: [
    v("enlk3-1", "the path", "тропа", "Каменистая тропа зигзагом идёт вверх.", "Послушать the path", p("l3-1")),
    v("enlk3-2", "the top", "вершина", "Каменная пирамидка на вершине горы.", "Послушать the top", p("l3-2")),
    v("enlk3-3", "fog / foggy", "туман / туманно", "Густой белый туман закрывает тропу.", "Послушать fog, foggy", p("l3-3")),
    v("enlk3-4", "We should turn back.", "Нам стоит повернуть назад.", "Фрейя показывает рукой вниз.", "Послушать We should turn back", p("l3-4")),
    v("enlk3-5", "You shouldn't go alone.", "Не стоит идти в одиночку.", "Одинокая фигура в тумане.", "Послушать You shouldn't go alone", p("l3-5")),
    v("enlk3-6", "Stay on the path.", "Держитесь тропы.", "Фрейя идёт первой по тропе.", "Послушать Stay on the path", p("l3-6")),
    v("enlk3-7", "slippery", "скользкий", "Мокрые камни блестят.", "Послушать slippery", p("l3-7")),
    v("enlk3-8", "I'm out of breath.", "Я запыхался(-лась).", "Том согнулся, тяжело дышит.", "Послушать I'm out of breath", p("l3-8")),
  ],
  letters: [
    letter("should = [шуд]", "L в should не читается: [шуд]. Так же could [куд], would [вуд].", "We should turn back.", "Стоит повернуть назад."),
  ],
  dialogue: {
    title: "Туман",
    note: "Fog is coming — надвигается туман. Follow me — идите за мной.",
    lines: [
      line("tom", "Wait… I'm out of breath. How far is the top?", "Подождите… Я запыхался. Далеко до вершины?"),
      line("freya", "Not far. But look — fog is coming. And the rocks are slippery.", "Недалеко. Но смотрите — идёт туман. И камни скользкие."),
      line("murzik", "I can't see the path!", "Я не вижу тропу!"),
      line("freya", "We should turn back. In fog you shouldn't go to the top.", "Нам стоит повернуть назад. В туман не стоит идти на вершину."),
      line("tom", "But the café is up there…", "Но кафе-то наверху…"),
      line("freya", "There's another café by the lake. Stay on the path and follow me.", "Есть другое кафе у озера. Держитесь тропы и идите за мной."),
    ],
    gist: choice("enlk3-d1", "Почему они поворачивают назад?", [
      ["Идёт туман, и камни скользкие.", true],
      ["Том устал и хочет спать.", false],
      ["Кафе наверху закрыто.", false],
    ]),
  },
  grammar: [
    {
      title: "Should и shouldn't",
      paragraphs: [
        "Should + глагол без to — совет: You should take a waterproof. Shouldn't — «не стоит»: You shouldn't go alone.",
        "Вопрос-совет: Should we turn back? — Да, стоит. / What should I do? — Что мне делать?",
      ],
      examples: [
        { ru: "You should drink more water on a walk.", en: "В походе стоит пить больше воды." },
        { ru: "We shouldn't leave so late.", en: "Нам не стоит выходить так поздно." },
      ],
    },
  ],
  tasks: [
    listen("enlk3-t1", "Послушай. Что предлагает Фрейя?", "We should turn back. In fog you shouldn't go to the top.", [
      ["Повернуть назад.", true],
      ["Подождать на вершине.", false],
      ["Идти быстрее.", false],
    ]),
    choice("enlk3-t2", "Дай совет: «Тебе стоит взять дождевик».", [
      ["You should take a waterproof.", true],
      ["You should to take a waterproof.", false],
      ["You shoulds take a waterproof.", false],
    ], { skill: "grammar" }),
    fill("enlk3-t3", "Выбери правильное слово: «Не стоит идти одному».", "You", "go alone.", "shouldn't", ["shouldn't", "don't should", "not should"], { skill: "grammar" }),
    read("enlk3-t4", "Прочитай табличку у тропы. Что делать, если туман?", "SAFETY ON THE FELLS\n• Check the weather before you go.\n• Tell someone your route.\n• In fog: stop, use your compass, go back down.", [
      ["Остановиться, свериться с компасом и спуститься.", true],
      ["Идти дальше на вершину.", false],
      ["Позвонить в кафе.", false],
    ]),
    match("enlk3-t5", "Соедини пары.", [
      ["the path", "тропа"],
      ["the top", "вершина"],
      ["slippery", "скользкий"],
      ["fog", "туман"],
    ], { skill: "words" }),
    script("enlk3-t6", "Друг хочет идти в горы вечером.", [
      { speaker: "Друг", text: "Let's go up the fell now! It's 7 pm." },
      { speaker: "Ты", answer: "We shouldn't go so late. It will be dark soon.", options: ["We shouldn't go so late. It will be dark soon.", "We should to go now.", "Stay on the slippery."] },
      { speaker: "Друг", text: "OK. What should we do?" },
      { speaker: "Ты", answer: "We should go tomorrow morning.", options: ["We should go tomorrow morning.", "We mustn't go never.", "I'm out of fog."] },
    ], { skill: "speaking" }),
    speak("enlk3-t7", "I'm always tired. What should I do?", "You should go to bed earlier and walk more. You shouldn't drink coffee in the evening.", "Тебе стоит раньше ложиться и больше гулять. Не стоит пить кофе вечером.", {
      help: "Дай другу совет вслух: should, shouldn't.",
    }),
  ],
  reward: {
    itemId: "walking-sticks",
    itemName: "Палки для ходьбы",
    itemNameRu: "Walking poles",
    ru: "Four legs are better than two!",
    en: "Четыре ноги лучше, чем две!",
    a11y: "У двери фургона прислонены две лёгкие складные палки для ходьбы.",
    image: p("walking-sticks"),
    steps: ["На спуске Тому очень помогают палки Фрейи.", "«Keep them — you'll need them», — говорит она.", "Мурзику палки не нужны — у него четыре лапы.", "Палки стоят у двери, готовые к следующему походу."],
    bridge: "На следующий день они едут в соседнюю долину. Дорога становится всё уже и уже…",
  },
};

const lakes4: Lesson = {
  id: "en-a2-lakes-4",
  level: "A2",
  cityId: "en-lakes",
  number: 4,
  title: "Stuck! — Застряли!",
  minutes: 8,
  goals: ["Попросить о помощи на дороге", "Had to — пришлось", "Объяснить, что случилось с машиной"],
  vocabNote: "Stuck — застрял. We had to… — нам пришлось… Tow — тащить на буксире.",
  vocab: [
    v("enlk4-1", "a narrow road", "узкая дорога", "Дорога шириной с фургон между каменными стенами.", "Послушать a narrow road", p("l4-1")),
    v("enlk4-2", "We're stuck!", "Мы застряли!", "Колесо фургона в грязи, брызги во все стороны.", "Послушать We're stuck", p("l4-2")),
    v("enlk4-3", "mud", "грязь", "Глубокая лужа грязи на дороге.", "Послушать mud", p("l4-3")),
    v("enlk4-4", "a tractor", "трактор", "Красный старый трактор едет по полю.", "Послушать a tractor", p("l4-4")),
    v("enlk4-5", "Can you give us a hand?", "Вы не поможете нам?", "Том машет фермеру.", "Послушать Can you give us a hand", p("l4-5")),
    v("enlk4-6", "I'll tow you out.", "Я вытащу вас на буксире.", "Гордон цепляет трос к фургону.", "Послушать I'll tow you out", p("l4-6")),
    v("enlk4-7", "We had to wait an hour.", "Нам пришлось ждать час.", "Мурзик сидит на капоте и смотрит на часы.", "Послушать We had to wait an hour", p("l4-7")),
    v("enlk4-8", "You shouldn't drive here.", "Здесь не стоит ездить.", "Знак: «Unsuitable for wide vehicles».", "Послушать You shouldn't drive here", p("l4-8")),
  ],
  letters: [
    letter("narrow = [нЭроу]", "Двойная r читается как одна: [нЭроу].", "a narrow road", "узкая дорога"),
    letter("tow = [тоу]", "Tow [тоу] звучит как toe — палец ноги.", "I'll tow you out.", "Я вас вытащу."),
  ],
  dialogue: {
    title: "В грязи",
    note: "Gordon говорит с сильным северным акцентом: aye — «да», lad — «парень».",
    lines: [
      line("tom", "Oh no — we're stuck! The wheel is in the mud.", "О нет — мы застряли! Колесо в грязи."),
      line("murzik", "A tractor — at last! Excuse me! Can you give us a hand?", "Трактор — наконец-то! Простите! Вы не поможете нам?"),
      line("gordon", "Aye. You shouldn't drive a van on this road, lad. It's too narrow.", "Ага. На этой дороге на фургоне не стоит ездить, парень. Она слишком узкая."),
      line("gordon", "But don't worry. I'll tow you out.", "Но не волнуйтесь. Я вытащу вас на буксире."),
      line("tom", "Thank you so much! We had to wait an hour for someone.", "Огромное спасибо! Нам пришлось целый час кого-нибудь ждать."),
      line("gordon", "Come to the farm. My wife Jean's got the kettle on.", "Заезжайте на ферму. Моя жена Джин уже поставила чайник."),
    ],
    gist: choice("enlk4-d1", "Как Гордон помогает?", [
      ["Вытаскивает фургон трактором.", true],
      ["Чинит колесо.", false],
      ["Вызывает полицию.", false],
    ]),
  },
  grammar: [
    {
      title: "Had to — пришлось",
      paragraphs: [
        "Прошедшее от have to и от must — had to: We had to wait an hour. I had to walk to the farm.",
        "Вопрос: Did you have to…? — Did you have to pay? Отрицание: We didn't have to wait — ждать не пришлось.",
      ],
      examples: [
        { ru: "Yesterday I had to get up at five.", en: "Вчера мне пришлось встать в пять." },
        { ru: "We didn't have to pay — it was free.", en: "Платить не пришлось — было бесплатно." },
      ],
    },
  ],
  tasks: [
    listen("enlk4-t1", "Послушай. Почему не стоит ездить по этой дороге?", "You shouldn't drive a van on this road, lad. It's too narrow.", [
      ["Она слишком узкая.", true],
      ["Она закрыта на ремонт.", false],
      ["Там много овец.", false],
    ]),
    choice("enlk4-t2", "Как сказать «Нам пришлось ждать час»?", [
      ["We had to wait an hour.", true],
      ["We must waited an hour.", false],
      ["We have to waited an hour.", false],
    ], { skill: "grammar" }),
    fill("enlk4-t3", "Выбери правильное слово.", "Did you", "to pay?", "have", ["have", "had", "has"], { skill: "grammar" }),
    read("enlk4-t4", "Прочитай знак у дороги. Для кого эта дорога не подходит?", "HARDKNOTT PASS\nNarrow road, very steep\nUnsuitable for caravans and wide vehicles\nNot in snow or ice", [
      ["Фургонам и широким машинам.", true],
      ["Велосипедам.", false],
      ["Всем машинам летом.", false],
    ]),
    match("enlk4-t5", "Соедини пары.", [
      ["mud", "грязь"],
      ["a tractor", "трактор"],
      ["We're stuck!", "Мы застряли!"],
      ["Can you give us a hand?", "Вы не поможете нам?"],
    ], { skill: "words" }),
    tf("enlk4-t6", "Had to — это прошедшее время от have to и must.", true, "grammar"),
    speak("enlk4-t7", "Tell me about a bad day you had.", "Last week my car broke down. I had to call my friend, and we had to wait two hours!", "На прошлой неделе у меня сломалась машина. Пришлось звонить другу, и нам пришлось ждать два часа!", {
      help: "Расскажи вслух о неудачном дне: had to.",
    }),
  ],
  reward: {
    itemId: "tow-rope",
    itemName: "Буксирный трос",
    itemNameRu: "Tow rope",
    ru: "Never stuck again!",
    en: "Больше никогда не застрянем!",
    a11y: "Под сиденьем фургона аккуратно свёрнут толстый жёлтый буксирный трос.",
    image: p("tow-rope"),
    steps: ["Гордон дарит фургону старый буксирный трос.", "«For next time, lad». «На следующий раз, парень».", "Том кладёт его под сиденье.", "А Мурзик клянётся больше никогда не выбирать дорогу по карте сам."],
    bridge: "На ферме Гордона пахнет сеном и чаем. И везде — овцы. Сотни овец.",
  },
};

const lakes5: Lesson = {
  id: "en-a2-lakes-5",
  level: "A2",
  cityId: "en-lakes",
  number: 5,
  title: "Life on the farm — Жизнь на ферме",
  minutes: 8,
  goals: ["Рассказать о своих обязанностях", "Have to в настоящем: every day I have to…", "Говорить о животных и работе на ферме"],
  vocabNote: "Have to часто говорят о ежедневных обязанностях: I have to feed the sheep every morning.",
  vocab: [
    v("enlk5-1", "a farm", "ферма", "Каменный дом и сарай в зелёной долине.", "Послушать a farm", p("l5-1")),
    v("enlk5-2", "a lamb", "ягнёнок", "Маленький белый ягнёнок прыгает на траве.", "Послушать a lamb", p("l5-2")),
    v("enlk5-3", "a sheepdog", "овчарка, пастушья собака", "Чёрно-белая собака бежит за овцами.", "Послушать a sheepdog", p("l5-3")),
    v("enlk5-4", "feed the animals", "кормить животных", "Гордон высыпает корм в кормушку.", "Послушать feed the animals", p("l5-4")),
    v("enlk5-5", "get up at dawn", "вставать на рассвете", "Солнце встаёт над холмами, Гордон уже в сапогах.", "Послушать get up at dawn", p("l5-5")),
    v("enlk5-6", "It's hard work.", "Это тяжёлая работа.", "Гордон вытирает лоб.", "Послушать It's hard work", p("l5-6")),
    v("enlk5-7", "a barn", "сарай, амбар", "Большой каменный сарай, внутри сено.", "Послушать a barn", p("l5-7")),
    v("enlk5-8", "Can I help?", "Можно мне помочь?", "Мурзик держит ведро обеими лапами.", "Послушать Can I help", p("l5-8")),
  ],
  letters: [
    letter("lamb = [лэм]", "B в конце не читается: lamb [лэм].", "a little lamb", "маленький ягнёнок"),
    letter("dawn = [до:н]", "Aw читается как долгое [о:]: dawn [до:н], saw [со:].", "at dawn", "на рассвете"),
  ],
  dialogue: {
    title: "Утро на ферме",
    note: "Мэг — пастушья собака Гордона. Джин — жена Гордона.",
    lines: [
      line("gordon", "On a farm you have to get up at dawn. Every day.", "На ферме приходится вставать на рассвете. Каждый день."),
      line("murzik", "Even on Sunday?", "Даже в воскресенье?"),
      line("gordon", "Even on Sunday. The sheep have to eat. I have to feed the animals and check the lambs.", "Даже в воскресенье. Овцам тоже надо есть. Мне надо покормить животных и проверить ягнят."),
      line("tom", "It's hard work.", "Это тяжёлая работа."),
      line("gordon", "Aye. But Meg helps — she's the best sheepdog in the valley.", "Ага. Но Мэг помогает — она лучшая пастушья собака в долине."),
      line("murzik", "Can I help? I'm a cat, but I'm very good with sheep!", "Можно мне помочь? Я кот, но с овцами я лажу!"),
    ],
    gist: choice("enlk5-d1", "Кто помогает Гордону с овцами?", [
      ["Собака Мэг.", true],
      ["Его жена.", false],
      ["Фрейя.", false],
    ]),
  },
  grammar: [
    {
      title: "Have to — каждый день",
      paragraphs: [
        "Have to для обязанностей: I have to get up at six. She has to work on Saturdays. Do you have to…? — Ты должен(-на)…?",
        "Сравни: must — когда говорящий сам считает это важным (I must call Mum!), have to — когда так требуют обстоятельства (I have to work tomorrow).",
      ],
      examples: [
        { ru: "Does Gordon have to work on Sundays? — Yes, he does.", en: "Гордону нужно работать по воскресеньям? — Да." },
        { ru: "I must call my mum tonight — it's her birthday!", en: "Мне обязательно надо позвонить маме вечером — у неё день рождения!" },
      ],
    },
  ],
  tasks: [
    listen("enlk5-t1", "Послушай. Во сколько встаёт фермер?", "On a farm you have to get up at dawn. Every day.", [
      ["На рассвете.", true],
      ["В полдень.", false],
      ["Только в будни рано.", false],
    ]),
    choice("enlk5-t2", "Как спросить «Тебе нужно работать в субботу?»", [
      ["Do you have to work on Saturday?", true],
      ["Have you to work on Saturday?", false],
      ["Do you must work on Saturday?", false],
    ], { skill: "grammar" }),
    fill("enlk5-t3", "Выбери правильное слово.", "The lambs", "to eat every day.", "have", ["have", "has", "having"], { skill: "grammar" }),
    read("enlk5-t4", "Прочитай расписание Гордона. Что он делает в полдень?", "GORDON'S DAY\n5:00 — feed the animals\n8:00 — check the lambs\n12:00 — lunch (Jean's mint cake!)\n14:00 — move the sheep with Meg", [
      ["Обедает.", true],
      ["Кормит животных.", false],
      ["Перегоняет овец.", false],
    ]),
    match("enlk5-t5", "Соедини пары.", [
      ["a lamb", "ягнёнок"],
      ["a sheepdog", "пастушья собака"],
      ["a barn", "сарай"],
      ["get up at dawn", "вставать на рассвете"],
    ], { skill: "words" }),
    tf("enlk5-t6", "Гордон не работает по воскресеньям.", false, "listening"),
    speak("enlk5-t7", "What do you have to do every day?", "Every day I have to get up at seven, make breakfast and take the bus to work.", "Каждый день мне надо вставать в семь, готовить завтрак и ехать на автобусе на работу.", {
      help: "Расскажи вслух о своих ежедневных обязанностях: I have to…",
    }),
  ],
  reward: {
    itemId: "sheep-toy",
    itemName: "Вязаная овечка",
    itemNameRu: "Knitted sheep",
    ru: "A little sheep for the van!",
    en: "Маленькая овечка для фургона!",
    a11y: "На приборной панели фургона сидит маленькая вязаная белая овечка с чёрной мордочкой.",
    image: p("sheep-toy"),
    steps: ["Джин вяжет маленьких овечек из шерсти своих овец.", "Одну она дарит Мурзику.", "Он сажает её на приборную панель.", "Теперь у фургона есть своя овца."],
    bridge: "Вечером на кухне Джин достаёт кастрюлю и сахар. «Now you have to learn the most important thing in Cumbria — mint cake!»",
  },
};

const lakes6: Lesson = {
  id: "en-a2-lakes-6",
  level: "A2",
  cityId: "en-lakes",
  number: 6,
  title: "Jean's mint cake — Мятная сладость Джин",
  minutes: 8,
  goals: ["Понять рецепт", "Must / mustn't в рецепте", "Узнать, зачем альпинистам mint cake"],
  vocabNote: "Kendal mint cake — не торт, а плитка из сахара с мятой. Её берут в горы для энергии.",
  vocab: [
    v("enlk6-1", "sugar and water", "сахар и вода", "Сахар сыплется в кастрюлю с водой.", "Послушать sugar and water", p("l6-1")),
    v("enlk6-2", "peppermint oil", "мятное масло", "Маленький флакон с мятным маслом.", "Послушать peppermint oil", p("l6-2")),
    v("enlk6-3", "Boil it.", "Доведи до кипения.", "Сироп пузырится в кастрюле.", "Послушать Boil it", p("l6-3")),
    v("enlk6-4", "You must stir all the time.", "Мешать нужно всё время.", "Джин мешает деревянной ложкой.", "Послушать You must stir all the time", p("l6-4")),
    v("enlk6-5", "You mustn't touch it — it's very hot!", "Не трогай — очень горячо!", "Джин отводит лапу Мурзика от кастрюли.", "Послушать You mustn't touch it", p("l6-5")),
    v("enlk6-6", "a tray", "противень, поднос", "Белая масса выливается на противень.", "Послушать a tray", p("l6-6")),
    v("enlk6-7", "energy", "энергия", "Альпинист на вершине ест белую плитку.", "Послушать energy", p("l6-7")),
    v("enlk6-8", "climbers", "альпинисты", "Двое альпинистов в верёвках на скале.", "Послушать climbers", p("l6-8")),
  ],
  letters: [
    letter("energy = [Энэджи]", "Ударение на первый слог, g читается как [дж]: [Энэджи].", "energy for climbers", "энергия для альпинистов"),
  ],
  dialogue: {
    title: "Кухня Джин",
    note: "Everest [Эверист] — Эверест. Mint cake брали на Эверест в 1953 году.",
    lines: [
      line("jean", "Put the sugar and water in the pan. Boil it — and you must stir all the time.", "Положи сахар и воду в кастрюлю. Доведи до кипения — и мешай всё время."),
      line("murzik", "Can I taste it?", "Можно попробовать?"),
      line("jean", "No! You mustn't touch it — it's very hot! Now add the peppermint oil.", "Нет! Не трогай — очень горячо! Теперь добавь мятное масло."),
      line("jean", "Pour it onto the tray. You don't have to wait long — it gets hard quickly.", "Вылей на противень. Долго ждать не нужно — быстро застывает."),
      line("tom", "Why do people take it up mountains?", "А зачем её берут в горы?"),
      line("jean", "For energy! Climbers took Kendal mint cake up Everest!", "Для энергии! Альпинисты брали мятную плитку Кендала на Эверест!"),
    ],
    gist: choice("enlk6-d1", "Зачем mint cake берут в горы?", [
      ["Для энергии.", true],
      ["Чтобы не замёрзнуть.", false],
      ["Чтобы угощать овец.", false],
    ]),
  },
  grammar: [
    {
      title: "Must, mustn't, don't have to — вместе",
      paragraphs: [
        "Must — обязательно: You must stir all the time. Mustn't — нельзя: You mustn't touch it.",
        "Don't have to — не обязательно: You don't have to wait long. Не путай mustn't (нельзя) и don't have to (не нужно)!",
      ],
      examples: [
        { ru: "You mustn't touch the pan. You don't have to wait long.", en: "Кастрюлю трогать нельзя. Долго ждать не нужно." },
        { ru: "You must be careful — the sugar is very hot.", en: "Осторожно — сахар очень горячий." },
      ],
    },
  ],
  tasks: [
    listen("enlk6-t1", "Послушай. Почему не нужно долго ждать?", "You don't have to wait long — it gets hard quickly.", [
      ["Масса быстро застывает.", true],
      ["Джин торопится.", false],
      ["Её едят горячей.", false],
    ]),
    choice("enlk6-t2", "Как сказать «Трогать нельзя»?", [
      ["You mustn't touch it.", true],
      ["You don't have to touch it.", false],
      ["You haven't touch it.", false],
    ], { skill: "grammar" }),
    choice("enlk6-t3", "Как сказать «Долго ждать не нужно»?", [
      ["You don't have to wait long.", true],
      ["You mustn't wait long.", false],
      ["You don't must wait long.", false],
    ], { skill: "grammar" }),
    match("enlk6-t5", "Соедини пары.", [
      ["a tray", "противень"],
      ["energy", "энергия"],
      ["climbers", "альпинисты"],
      ["Boil it.", "Доведи до кипения."],
    ], { skill: "words" }),
    fill("enlk6-t6", "Выбери правильное слово: «Мешать нужно всё время».", "You", "stir all the time.", "must", ["must", "mustn't", "don't have to"], { skill: "grammar" }),
    speak("enlk6-t7", "What rules are there in your kitchen?", "In my kitchen you must wash your hands. You mustn't touch my knives. And you don't have to wash up — I've got a dishwasher!", "На моей кухне нужно мыть руки. Мои ножи трогать нельзя. А посуду мыть не нужно — у меня посудомойка!", {
      help: "Расскажи вслух о правилах своей кухни: must, mustn't, don't have to.",
    }),
  ],
  reward: {
    itemId: "mint-tin",
    itemName: "Жестяная коробка для сладостей",
    itemNameRu: "Mint cake tin",
    ru: "Energy for the road!",
    en: "Энергия в дорогу!",
    a11y: "На полке фургона стоит жестяная коробка с нарисованными горами, внутри — белые мятные плитки.",
    image: p("mint-tin"),
    steps: ["Джин раскладывает мятные плитки в старую жестяную коробку.", "«For the road. And for the next mountain».", "Мурзик съедает одну плитку — и три раза обегает ферму.", "«That's the energy!» — смеётся Гордон."],
    bridge: "Последний день. Фрейя приходит на ферму попрощаться, а Джин достаёт карточку с рецептом.",
  },
};

const lakes7: Lesson = {
  id: "en-a2-lakes-7",
  level: "A2",
  cityId: "en-lakes",
  number: 7,
  title: "Lake District exam — Экзамен: Озёрный край",
  minutes: 9,
  goals: ["Понять длинный рассказ на слух", "Объяснить правила и дать советы", "Повторить всё из Озёрного края"],
  vocabNote: "Урок 7 — экзамен города: длинная аудиоистория и повторение всего из Озёрного края.",
  vocab: [
    v("enlk7-1", "Scotland", "Шотландия", "Карта: стрелка на север, к Шотландии.", "Послушать Scotland", p("l7-1")),
    v("enlk7-2", "Glasgow", "Глазго", "Город с большой рекой и мостами.", "Послушать Glasgow", p("l7-2")),
    v("enlk7-3", "the border", "граница", "Табличка на дороге: «Welcome to Scotland».", "Послушать the border", p("l7-3")),
    v("enlk7-4", "You should go by the main road.", "Лучше ехать по главной дороге.", "Широкая дорога на карте выделена жёлтым.", "Послушать You should go by the main road", p("l7-4")),
    v("enlk7-5", "Our eighth recipe!", "Наш восьмой рецепт!", "Мурзик держит карточку с рецептом.", "Послушать Our eighth recipe", p("l7-5")),
    v("enlk7-6", "Safe journey!", "Доброго пути!", "Фрейя машет рукой.", "Послушать Safe journey", p("l7-6")),
    v("enlk7-7", "Come back in spring!", "Приезжайте весной!", "Ягнята на зелёном склоне.", "Послушать Come back in spring", p("l7-7")),
    v("enlk7-8", "I'll miss the sheep.", "Я буду скучать по овцам.", "Мурзик обнимает вязаную овечку.", "Послушать I'll miss the sheep", p("l7-8")),
  ],
  letters: [
    letter("eighth = [эйтθ]", "Gh не читается. В конце глухой th [θ]: язык между зубами, как шепелявое «с». Не путай с eight [эйт] — восемь.", "our eighth recipe", "наш восьмой рецепт"),
  ],
  dialogue: {
    title: "Прощание на ферме",
    note: "Spring — весна. In spring there are lots of lambs — весной много ягнят.",
    lines: [
      line("jean", "Here's my mint cake recipe for your book.", "Вот мой рецепт мятной плитки для вашей книги."),
      line("murzik", "Our eighth recipe! Thank you, Jean!", "Наш восьмой рецепт! Спасибо, Джин!"),
      line("gordon", "Where are you going next?", "Куда вы дальше?"),
      line("tom", "To Scotland. To Glasgow.", "В Шотландию. В Глазго."),
      line("gordon", "You should go by the main road this time, lad. No more narrow roads!", "На этот раз езжай по главной дороге, парень. Никаких больше узких дорог!"),
      line("freya", "Safe journey! And come back in spring — the lambs are lovely.", "Доброго пути! И приезжайте весной — ягнята чудесные."),
      line("murzik", "I'll miss the sheep!", "Я буду скучать по овцам!"),
    ],
    gist: choice("enlk7-d1", "Что советует Гордон?", [
      ["Ехать по главной дороге.", true],
      ["Приехать весной.", false],
      ["Взять с собой собаку.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем Озёрный край",
      paragraphs: [
        "Правила: must / mustn't. Необходимость: have to / has to / had to. Не обязательно: don't have to. Совет: should / shouldn't.",
        "Природа и поход: fell, path, top, fog, slippery, walking boots, a waterproof, a map and a compass.",
      ],
      examples: [
        { ru: "You must close the gate, but you don't have to pay.", en: "Калитку закрывать обязательно, а платить не нужно." },
        { ru: "We had to turn back. You shouldn't go up the fell in fog.", en: "Нам пришлось повернуть назад. В туман не стоит подниматься в горы." },
      ],
    },
  ],
  tasks: [
    listen("enlk7-t1", "Аудиоистория: Фрейя рассказывает о своей работе. Послушай. Что она делает каждое утро?", "I've been a ranger here for ten years. Every morning I have to check the weather and the paths. In summer there are lots of walkers, and some of them don't have the right boots! I have to tell them: you should turn back. It's not always easy, but I love these fells.", [
      ["Проверяет погоду и тропы.", true],
      ["Кормит овец.", false],
      ["Печёт мятную плитку.", false],
    ]),
    choice("enlk7-t2", "Из рассказа Фрейи: какая проблема бывает у туристов летом?", [
      ["У некоторых неподходящие ботинки.", true],
      ["Они кормят овец.", false],
      ["Они разводят костры.", false],
    ], { skill: "listening" }),
    choice("enlk7-t3", "Как сказать «Калитку закрывать обязательно, а платить не нужно»?", [
      ["You must close the gate, but you don't have to pay.", true],
      ["You must close the gate, but you mustn't pay.", false],
      ["You have close the gate, but you don't must pay.", false],
    ], { skill: "grammar" }),
    read("enlk7-t4", "Прочитай сообщение Фрейи. Что она обещает?", "Safe journey! See you at the festival in London in August. I'll bring a postcard of Gordon's lambs — and some of Jean's mint cake! Freya", [
      ["Приехать на фестиваль с мятной плиткой Джин.", true],
      ["Привезти настоящих ягнят.", false],
      ["Встретить их в Глазго.", false],
    ]),
    script("enlk7-t5", "Попрощайся с Гордоном.", [
      { speaker: "Гордон", text: "You should go by the main road, lad." },
      { speaker: "Ты", answer: "Don't worry, we will. No more narrow roads!", options: ["Don't worry, we will. No more narrow roads!", "We mustn't go by road.", "We're stuck!"] },
      { speaker: "Гордон", text: "Safe journey!" },
      { speaker: "Ты", answer: "Thank you for everything! I'll miss the sheep!", options: ["Thank you for everything! I'll miss the sheep!", "You must stir all the time!", "Fog is coming!"] },
    ], { skill: "review" }),
    match("enlk7-t6", "Повторяем Озёрный край: соедини пары.", [
      ["a ranger", "смотритель парка"],
      ["slippery", "скользкий"],
      ["mud", "грязь"],
      ["a lamb", "ягнёнок"],
    ], { skill: "review" }),
    speak("enlk7-t7", "My friend wants to go walking in the mountains. What should he do?", "He must wear good boots and take a map. He should check the weather. He shouldn't go alone.", "Ему обязательно надо надеть хорошие ботинки и взять карту. Стоит проверить погоду. Одному идти не стоит.", {
      help: "Дай вслух советы для похода в горы: must, should, shouldn't.",
    }),
  ],
  reward: {
    itemId: "recipe-mint-cake",
    itemName: "Рецепт «Kendal mint cake»",
    itemNameRu: "Kendal mint cake recipe card",
    ru: "Our eighth recipe!",
    en: "Наш восьмой рецепт!",
    a11y: "Карточка с рецептом мятной плитки вклеена на восьмую страницу голубой тетради; на полях нарисованы горы и маленькая овечка.",
    image: p("recipe-mint-cake"),
    steps: ["Мурзик вклеивает рецепт на восьмую страницу книги дороги.", "Джин нарисовала на полях горы.", "Мурзик дорисовывает овечку.", "Восемь рецептов есть. Впереди — Шотландия."],
  },
};

const story: CityStory = {
  home: {
    name: "Фургон у озера",
    nameRu: "The van by the lake",
    image: p("home"),
    a11y: "Голубой фургон «Hope on Wheels» стоит на кемпинге у тихого озера; вокруг зелёные горы, каменные стены и овцы.",
  },
  keepsakeId: "recipe-mint-cake",
  welcomeRu: "Hello, the Lake District!",
  welcomeEn: "Привет, Озёрный край!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Голубой фургон в Озёрном крае: синее озеро, зелёные горы, овцы и узкая дорога между каменными стенами.",
  departureImage: p("departure"),
  departureA11y: "Фрейя, Гордон, Джин и собака Мэг машут голубому фургону с фермы; на дороге стоят овцы.",
  finale: [
    {
      image: p("finale-1"),
      a11y: "У фургона уютно: походный фонарь, старый компас, палки для ходьбы, буксирный трос, вязаная овечка на панели и жестяная коробка с мятной плиткой.",
      lines: [
        { en: "Фургон застрял, но не сдался — и подружился с овцами." },
        { en: "В книге дороги восьмой рецепт: мятная плитка Джин." },
      ],
    },
    {
      image: p("finale-2"),
      a11y: "Мурзик, Том и Фрейя на склоне горы в солнечный день; внизу блестит озеро.",
      lines: [
        { ru: "The Lake District complete!", en: "Озёрный край пройден!" },
        { en: "7 / 7 уроков" },
        { ru: "Next time — the top!", en: "В следующий раз — до вершины!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Фрейя, Гордон, Джин и собака Мэг машут голубому фургону с фермы; на дороге стоят овцы.",
      lines: [
        { ru: "Goodbye, Freya! Goodbye, Gordon and Jean!", en: "До свидания, Фрейя! До свидания, Гордон и Джин!" },
        { ru: "Next stop: Glasgow!", en: "Следующая остановка: Глазго!" },
      ],
    },
    {
      image: p("finale-4"),
      a11y: "Голубой фургон едет по широкой главной дороге на север мимо таблички «Welcome to Scotland».",
      lines: [{ ru: "The Lake District → Glasgow", en: "Озёрный край → Глазго" }],
    },
    {
      image: pic("en/glasgow/arrival"),
      a11y: "Голубой фургон в Глазго: широкая река, мосты, старые здания из красного песчаника и уличные росписи на стенах.",
      lines: [{ ru: "Hello, Glasgow!", en: "Привет, Глазго!" }],
    },
  ],
};

export const enLakes = {
  id: "en-lakes",
  name: "Озёрный край",
  nameEn: "The Lake District",
  lessons: [lakes1, lakes2, lakes3, lakes4, lakes5, lakes6, lakes7],
  story,
};
