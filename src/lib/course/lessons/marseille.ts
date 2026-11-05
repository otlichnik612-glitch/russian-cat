import { pic } from "../art";
import { choice, fill, letter, line, listen, match, read, script, speak, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Marseille · «Проблемы в дороге» · A2 lessons 1–7.
 * At Marseille station Murzik's suitcase is gone from the luggage rack (again — like in Istanbul). Olga (about 50)
 * works at the lost property office. The camera shows an old lady taking it by mistake: her own suitcase looks
 * the same, and it has an address tag. A night without things; next morning Isabelle (about 60), who makes soap in
 * a workshop by the Old Port, calls. In her workshop she sees Asya's silk scarf: a ginger cat in a straw hat bought
 * lavender soap there a few days ago and said «Если придёт рыжий котёнок — скажите ему: сначала Севилья».
 * The train is cancelled, so they fly. Grammar: prefixes по-, при-, у-, вы- with идти / ехать / нести / везти.
 */

const p = (name: string) => pic(`marseille/${name}`);

export const marseille1: Lesson = {
  id: "a2-marseille-1",
  level: "A2",
  cityId: "marseille",
  number: 1,
  title: "Where's My Suitcase?",
  minutes: 8,
  goals: ["Report lost luggage", "Describe a suitcase", "Use приехать, уехать, выйти"],
  vocabNote: "Бюро находок — lost property office. Заявление — a written report or application.",
  vocab: [
    v("mr1-1", "Мой чемодан пропал.", "My suitcase has gone missing.", "Murzik stares at an empty luggage rack in a train carriage.", "Listen to Мой чемодан пропал", p("1-1")),
    v("mr1-2", "бюро находок", "lost property office", "A small office at the station with umbrellas and bags on shelves.", "Listen to бюро находок", p("1-2")),
    v("mr1-3", "Мы вышли из вагона.", "We got off the train (out of the carriage).", "Tom and Murzik step down onto a platform.", "Listen to Мы вышли из вагона", p("1-3")),
    v("mr1-4", "багажная полка", "a luggage rack", "A metal rack above the seats; one space is empty.", "Listen to багажная полка", p("1-4")),
    v("mr1-5", "Опишите, пожалуйста, ваш чемодан.", "Please describe your suitcase.", "Olga holds a pen over a form.", "Listen to Опишите, пожалуйста, ваш чемодан", p("1-5")),
    v("mr1-6", "старый, с наклейками", "old, with stickers", "A worn brown suitcase covered in city stickers.", "Listen to старый, с наклейками", p("1-6")),
    v("mr1-7", "Заполните заявление.", "Fill in a form.", "A form with lines and boxes to fill in.", "Listen to Заполните заявление", p("1-7")),
    v("mr1-8", "Мы вам сообщим.", "We'll let you know.", "Olga taps a phone number on the form.", "Listen to Мы вам сообщим", p("1-8")),
  ],
  letters: [
    letter("бюро", "byu-RO: stress on the end; бюро never changes its form.", "в бюро находок", "at the lost property office"),
    letter("вышли", "VYSH-li: ы after в; stress on ВЫ.", "Мы вышли из вагона.", "We got off the train."),
  ],
  dialogue: {
    title: "Lost property",
    note: "Olga works at the lost property office at Marseille station. She has lived in Marseille for twenty years.",
    lines: [
      line("tom", "Здравствуйте! У нас пропал чемодан.", "Hello! Our suitcase has gone missing."),
      line("olga", "Когда вы приехали?", "When did you arrive?"),
      line("tom", "Полчаса назад, из Ниццы. Мы хотели взять чемодан, а на багажной полке его нет!", "Half an hour ago, from Nice. We went to get our suitcase, and it wasn't on the luggage rack!"),
      line("murzik", "Опять! Как в Стамбуле!", "Again! Like in Istanbul!"),
      line("olga", "Не волнуйтесь. Опишите, пожалуйста, ваш чемодан.", "Don't worry. Please describe your suitcase."),
      line("murzik", "Коричневый, старый, с наклейками из разных городов. Там все мои вещи!", "Brown, old, with stickers from different cities. All my things are in it!"),
      line("olga", "Заполните заявление. Мы вам сообщим, если он найдётся.", "Fill in a form. We'll let you know if it turns up."),
    ],
    gist: choice("mr1-d1", "Where was the suitcase?", [
      ["On the luggage rack in the train.", true],
      ["In the taxi.", false],
      ["At the hotel.", false],
    ]),
  },
  grammar: [
    {
      title: "При-, у-, вы-: arrive, leave, go out",
      paragraphs: [
        "A prefix changes the direction: приехать — to arrive (by transport); уехать — to leave, go away; выйти из — to go out of, get off.",
        "Приехать из Ниццы — to arrive from Nice. Уехать в Париж — to leave for Paris. Выйти из вагона — to get off the train.",
      ],
      examples: [
        { ru: "Мы приехали в Марсель утром.", en: "We arrived in Marseille in the morning." },
        { ru: "Они уже уехали в Париж.", en: "They have already left for Paris." },
      ],
    },
  ],
  tasks: [
    listen("mr1-t1", "Listen. When did they arrive?", "Полчаса назад, из Ниццы. Мы хотели взять чемодан, а на багажной полке его нет!", [
      ["Half an hour ago.", true],
      ["An hour and a half ago.", false],
      ["Yesterday.", false],
    ]),
    choice("mr1-t2", "“We arrived from Nice.” Which is right?", [
      ["Мы приехали из Ниццы.", true],
      ["Мы уехали из Ниццы в Ниццу.", false],
      ["Мы вышли из Ниццы на вагон.", false],
    ], { skill: "grammar" }),
    fill("mr1-t3", "Choose the right word: “We got off the train.”", "Мы", "из вагона.", "вышли", ["вышли", "пришли", "уехали"], { skill: "grammar" }),
    read("mr1-t4", "Read the sign. When is the lost property office open on Sunday?", "БЮРО НАХОДОК\nПн–пт: 8:00–19:00\nСб: 9:00–13:00\nВс: закрыто\nТел.: 04 91 00 00 00", [
      ["It's closed.", true],
      ["From 9 to 1.", false],
      ["From 8 to 7.", false],
    ]),
    match("mr1-t5", "Match the Russian with the English.", [
      ["бюро находок", "lost property office"],
      ["багажная полка", "a luggage rack"],
      ["Заполните заявление.", "Fill in a form."],
      ["Мы вам сообщим.", "We'll let you know."],
    ], { skill: "words" }),
    tf("mr1-t6", "Murzik has lost his suitcase before.", true, "True or false?", { skill: "listening" }),
    speak("mr1-t7", "Опишите, пожалуйста, ваш чемодан.", "Он большой, синий, с колёсиками. На нём наклейка с котом. Там все мои вещи!", "It's big and blue, on wheels. There's a sticker with a cat on it. All my things are in it!", {
      help: "Describe your suitcase out loud.",
    }),
  ],
  reward: {
    itemId: "redluggagetag",
    itemName: "Red luggage tag",
    itemNameRu: "Красная бирка",
    ru: "Бирка — чтобы больше не путать!",
    en: "A tag — so nobody mixes it up again!",
    a11y: "A bright red luggage tag with a little black cat on it lies on the bed in a small room with a view of boats.",
    image: p("reward-1"),
    steps: ["Olga gives Murzik a bright red luggage tag.", "“Когда найдём чемодан — повесьте. Такой ни с чем не перепутаешь.”", "They rent a tiny room above a café by the Old Port.", "The tag waits on the bed. The suitcase doesn't come."],
    bridge: "Late in the afternoon Olga calls them back to the office. “Я посмотрела камеру. Идите сюда — быстро!”",
  },
};

export const marseille2: Lesson = {
  id: "a2-marseille-2",
  level: "A2",
  cityId: "marseille",
  number: 2,
  title: "Who Took It?",
  minutes: 8,
  goals: ["Understand what happened from a video", "Say someone took something by mistake", "Use унести / увезти and принести / привезти"],
  vocabNote: "Нести — to carry (on foot), везти — to carry by transport. У- = away: унести, увезти. При- = here, to: принести, привезти.",
  vocab: [
    v("mr2-1", "камера видеонаблюдения", "a CCTV camera", "A small camera on the station ceiling.", "Listen to камера видеонаблюдения", p("2-1")),
    v("mr2-2", "похожий чемодан", "a similar suitcase", "Two brown suitcases side by side — almost the same.", "Listen to похожий чемодан", p("2-2")),
    v("mr2-3", "перепутать", "to mix up", "Arrows swap two suitcases.", "Listen to перепутать", p("2-3")),
    v("mr2-4", "Она взяла его по ошибке.", "She took it by mistake.", "A grainy screen: an old lady pulls a brown suitcase.", "Listen to Она взяла его по ошибке", p("2-4")),
    v("mr2-5", "унести", "to carry away", "The old lady walks off with the suitcase.", "Listen to унести", p("2-5")),
    v("mr2-6", "Она уехала на такси.", "She left in a taxi.", "A taxi drives away from the station.", "Listen to Она уехала на такси", p("2-6")),
    v("mr2-7", "бирка с адресом", "a tag with an address", "A tag on the other suitcase: a name and an address by the port.", "Listen to бирка с адресом", p("2-7")),
    v("mr2-8", "Вот она!", "There she is!", "Murzik jabs a paw at the screen.", "Listen to Вот она", p("2-8")),
  ],
  letters: [
    letter("похожий", "pa-KHO-zhy: stress on ХО; ж is hard, so и after it sounds like ы.", "похожий чемодан", "a similar suitcase"),
    letter("унесла", "u-ni-SLA: stress on the end.", "Она унесла чемодан.", "She carried the suitcase away."),
  ],
  dialogue: {
    title: "The video",
    note: "A lady left her own suitcase on the train and took Murzik's. Someone brought hers to the office.",
    lines: [
      line("olga", "Смотрите, это камера видеонаблюдения. Вот дама выходит из вагона с вашим чемоданом.", "Look, this is the CCTV camera. Here's a lady getting off the train with your suitcase."),
      line("murzik", "Вот она! Это наш чемодан! Она его уносит!", "There she is! That's our suitcase! She's carrying it away!"),
      line("olga", "Пожилая дама. У неё был похожий чемодан. Она его перепутала.", "An elderly lady. She had a similar suitcase. She mixed them up."),
      line("tom", "Она взяла его по ошибке?", "She took it by mistake?"),
      line("olga", "Похоже, да. Она унесла ваш чемодан, а свой оставила. Его принесли к нам.", "Looks like it. She carried yours away and left hers. Someone brought it to us."),
      line("tom", "А куда она увезла наш?", "And where did she take ours?"),
      line("olga", "Она уехала на такси. Но на её чемодане есть бирка с адресом: «Изабель, мыловарня, Старый порт».", "She left in a taxi. But her suitcase has a tag with an address: “Isabelle, soap workshop, Old Port”."),
    ],
    gist: choice("mr2-d1", "What happened to the suitcase?", [
      ["A lady with a similar suitcase took it by mistake.", true],
      ["A thief stole it.", false],
      ["It went on to Paris on the train.", false],
    ]),
  },
  grammar: [
    {
      title: "Нести / везти with у- and при-",
      paragraphs: [
        "On foot: унести (carry away), принести (bring). By transport: увезти (take away), привезти (bring).",
        "Past: она унесла, увезла; он унёс, увёз; они принесли, привезли.",
      ],
      examples: [
        { ru: "Кто-то унёс мой зонт!", en: "Someone has taken my umbrella!" },
        { ru: "Таксист привёз нас прямо к порту.", en: "The taxi driver brought us right to the port." },
      ],
    },
  ],
  tasks: [
    listen("mr2-t1", "Listen. How did the lady leave?", "Она уехала на такси. Но на её чемодане есть бирка с адресом.", [
      ["By taxi.", true],
      ["On foot.", false],
      ["By train.", false],
    ]),
    choice("mr2-t2", "“She carried the suitcase away (on foot).” Which is right?", [
      ["Она унесла чемодан.", true],
      ["Она увезла чемодан пешком.", false],
      ["Она принесла чемодан прочь.", false],
    ], { skill: "grammar" }),
    fill("mr2-t3", "Choose the right word: “The taxi driver brought us to the port.”", "Таксист", "нас к порту.", "привёз", ["привёз", "принёс", "ушёл"], { skill: "grammar" }),
    choice("mr2-t4", "Detective! How will they find the lady?", [
      ["Her suitcase has a tag with an address.", true],
      ["Olga knows her.", false],
      ["The taxi driver will call.", false],
    ], { skill: "listening" }),
    match("mr2-t5", "Match the Russian with the English.", [
      ["похожий чемодан", "a similar suitcase"],
      ["перепутать", "to mix up"],
      ["камера видеонаблюдения", "a CCTV camera"],
      ["бирка с адресом", "a tag with an address"],
    ], { skill: "words" }),
    read("mr2-t6", "Read the tag on the lady's suitcase. Where is the soap workshop?", "Изабель Лоран\nМыловарня «Лаванда»\nСтарый порт, улица Рыбаков, 12\nТел.: 04 91 55 12 12\nЕсли нашли — позвоните, пожалуйста!", [
      ["By the Old Port.", true],
      ["At the station.", false],
      ["In Nice.", false],
    ]),
    speak("mr2-t7", "Что случилось с вашим чемоданом?", "Одна дама перепутала чемоданы. Она взяла мой по ошибке и уехала на такси.", "A lady mixed up the suitcases. She took mine by mistake and left in a taxi.", {
      help: "Explain out loud what happened.",
    }),
  ],
  reward: {
    itemId: "marseillemap",
    itemName: "Map of Marseille",
    itemNameRu: "Карта Марселя",
    ru: "Карта — найдём мыловарню!",
    en: "A map — let's find the soap workshop!",
    a11y: "A paper map of Marseille is pinned to the wall; a red circle around the Old Port.",
    image: p("reward-2"),
    steps: ["Olga gives them a free map of the city.", "She draws a red circle: the Old Port.", "“Мыловарня где-то здесь.”", "Murzik pins the map above the bed."],
    bridge: "They run to Fishermen's Street, but the workshop closes at six — the door is locked and nobody answers the phone. A night without any things at all.",
  },
};

export const marseille3: Lesson = {
  id: "a2-marseille-3",
  level: "A2",
  cityId: "marseille",
  number: 3,
  title: "A Night Without Things",
  minutes: 8,
  goals: ["Buy what you need for one night", "Suggest doing something: пойдём, посидим", "Use по-: start and “for a while”"],
  vocabNote: "Переночевать — to stay the night. Зарядка — a charger.",
  vocab: [
    v("mr3-1", "переночевать", "to stay the night", "A small bed with one pillow in a tiny room.", "Listen to переночевать", p("3-1")),
    v("mr3-2", "зубная щётка", "a toothbrush", "Two new toothbrushes in a packet.", "Listen to зубная щётка", p("3-2")),
    v("mr3-3", "зарядка для телефона", "a phone charger", "A phone with a dead battery and a charger cable.", "Listen to зарядка для телефона", p("3-3")),
    v("mr3-4", "пижама", "pyjamas", "Tiny striped pyjamas on a supermarket shelf.", "Listen to пижама", p("3-4")),
    v("mr3-5", "Пойдём в супермаркет.", "Let's go to the supermarket.", "A small supermarket with lights still on.", "Listen to Пойдём в супермаркет", p("3-5")),
    v("mr3-6", "Давай посидим немного.", "Let's sit for a bit.", "Tom sits down on a bench by the boats.", "Listen to Давай посидим немного", p("3-6")),
    v("mr3-7", "погуляем по порту", "let's walk round the port (for a while)", "Evening at the Old Port: boats and lights in the water.", "Listen to погуляем по порту", p("3-7")),
    v("mr3-8", "Всё будет хорошо.", "Everything will be fine.", "Tom puts an arm around Murzik on the bench.", "Listen to Всё будет хорошо", p("3-8")),
  ],
  letters: [
    letter("щётка", "SHSHOT-ka: щ is a long soft ш; ё is always stressed.", "зубная щётка", "a toothbrush"),
    letter("переночевать", "pi-ri-na-chi-VAT': stress on the end.", "Где переночевать?", "Where can we stay the night?"),
  ],
  dialogue: {
    title: "By the Old Port",
    note: "Пойдём! — Let's go (on foot)! Поехали! — Let's go (by transport)!",
    lines: [
      line("tom", "Уже девять. Мыловарня закрыта, никто не отвечает.", "It's nine already. The soap workshop is closed and nobody answers."),
      line("murzik", "Значит, надо переночевать без вещей.", "So we'll have to stay the night without our things."),
      line("tom", "Пойдём в супермаркет. Нам нужны зубные щётки и зарядка для телефона.", "Let's go to the supermarket. We need toothbrushes and a phone charger."),
      line("murzik", "И пижама! Я не могу спать без пижамы.", "And pyjamas! I can't sleep without pyjamas."),
      line("tom", "Давай сначала посидим немного. Я так устал.", "Let's sit for a bit first. I'm so tired."),
      line("murzik", "Хорошо. Посидим, погуляем по порту — а потом в магазин.", "OK. We'll sit for a bit, walk round the port — and then to the shop."),
      line("tom", "Всё будет хорошо, Мурзик. Завтра чемодан вернётся.", "Everything will be fine, Murzik. Tomorrow the suitcase will come back."),
    ],
    gist: choice("mr3-d1", "What do they need to buy?", [
      ["Toothbrushes, a phone charger and pyjamas.", true],
      ["A new suitcase.", false],
      ["Train tickets.", false],
    ]),
  },
  grammar: [
    {
      title: "По-: start, and “for a while”",
      paragraphs: [
        "With motion verbs по- means “set off”: пойти, поехать. Пойдём! — Let's go! Поехали! — Off we go!",
        "With many other verbs по- means “for a while, a little”: посидеть (sit for a bit), погулять (walk for a while), поспать (have a nap), поговорить (have a chat).",
      ],
      examples: [
        { ru: "Давай немного поговорим.", en: "Let's have a little chat." },
        { ru: "Я посплю полчаса.", en: "I'll have a half-hour nap." },
      ],
    },
  ],
  tasks: [
    listen("mr3-t1", "Listen. What time is it?", "Уже девять. Мыловарня закрыта, никто не отвечает.", [
      ["Nine o'clock.", true],
      ["Seven o'clock.", false],
      ["Ten o'clock.", false],
    ]),
    choice("mr3-t2", "“Let's sit for a bit.” Which is right?", [
      ["Давай посидим немного.", true],
      ["Давай сидим немного.", false],
      ["Давай присидим немного.", false],
    ], { skill: "grammar" }),
    fill("mr3-t3", "Choose the right word: “Let's go to the supermarket (on foot).”", "", "в супермаркет.", "Пойдём", ["Пойдём", "Поедем на ногах", "Придём"], { skill: "grammar" }),
    read("mr3-t4", "Read Tom's receipt. How much did the pyjamas cost?", "СУПЕРМАРКЕТ «У ПОРТА»\nЗубные щётки ×2 — 4 €\nЗарядка — 12 €\nПижама (детская) — 9 €\nИТОГО: 25 €", [
      ["9 euros.", true],
      ["12 euros.", false],
      ["25 euros.", false],
    ]),
    match("mr3-t5", "Match the Russian with the English.", [
      ["переночевать", "to stay the night"],
      ["зубная щётка", "a toothbrush"],
      ["зарядка для телефона", "a phone charger"],
      ["Всё будет хорошо.", "Everything will be fine."],
    ], { skill: "words" }),
    tf("mr3-t6", "They go to the supermarket first and then sit by the port.", false, "True or false?", { skill: "listening" }),
    speak("mr3-t7", "Ты остался (осталась) на ночь без вещей. Что тебе нужно?", "Мне нужна зубная щётка, зарядка для телефона и что-нибудь для сна. Пойдём в магазин!", "I need a toothbrush, a phone charger and something to sleep in. Let's go to the shop!", {
      help: "Say out loud what you need for one night.",
    }),
  ],
  reward: {
    itemId: "toothbrushcup",
    itemName: "Cup with two toothbrushes",
    itemNameRu: "Стаканчик с щётками",
    ru: "Две щётки — большая и маленькая!",
    en: "Two toothbrushes — a big one and a little one!",
    a11y: "A blue plastic cup with two toothbrushes, a big one and a tiny one, stands on the little washbasin.",
    image: p("reward-3"),
    steps: ["In the supermarket they find everything.", "Even tiny striped pyjamas — from the children's section.", "Back in the room: one cup, two toothbrushes.", "Murzik falls asleep at once."],
    bridge: "At eight in the morning Tom's phone rings. An unknown number with a Marseille code.",
  },
};

export const marseille4: Lesson = {
  id: "a2-marseille-4",
  level: "A2",
  cityId: "marseille",
  number: 4,
  title: "A Phone Call",
  minutes: 8,
  goals: ["Understand an apology on the phone", "Arrange to come over", "Use при-: приехать, привезти, Приезжайте!"],
  vocabNote: "Приезжайте! / Приходите! — Come over! (polite). Как к вам добраться? — How do I get to you?",
  vocab: [
    v("mr4-1", "мыловарня", "a soap workshop", "A small workshop with blocks of soap on wooden shelves.", "Listen to мыловарня", p("4-1")),
    v("mr4-2", "Простите, я всё перепутала.", "I'm sorry, I mixed everything up.", "Isabelle on the phone, hand on her forehead.", "Listen to Простите, я всё перепутала", p("4-2")),
    v("mr4-3", "Я могу привезти его.", "I can bring it (by car).", "A small old car with a suitcase on the back seat.", "Listen to Я могу привезти его", p("4-3")),
    v("mr4-4", "Приезжайте ко мне!", "Come over to my place!", "Isabelle waves from a workshop door.", "Listen to Приезжайте ко мне", p("4-4")),
    v("mr4-5", "Как к вам добраться?", "How do we get to you?", "Tom holds the map and a pen.", "Listen to Как к вам добраться", p("4-5")),
    v("mr4-6", "Это недалеко от порта.", "It's not far from the port.", "A dotted line from the port to a little street.", "Listen to Это недалеко от порта", p("4-6")),
    v("mr4-7", "Через полчаса буду на месте.", "I'll be there in half an hour.", "A clock: 8:30.", "Listen to Через полчаса буду на месте", p("4-7")),
    v("mr4-8", "Мы привезём ваш чемодан.", "We'll bring your suitcase.", "Tom pulls Isabelle's brown suitcase out of the office.", "Listen to Мы привезём ваш чемодан", p("4-8")),
  ],
  letters: [
    letter("Приезжайте", "pri-YEZH-zhai-tye: жж is said as one long ж; stress on ЕЖ.", "Приезжайте ко мне!", "Come over!"),
    letter("добраться", "da-BRA-tsa: -ться sounds like “tsa”.", "Как добраться?", "How do I get there?"),
  ],
  dialogue: {
    title: "An unknown number",
    note: "Isabelle is French, but she learned Russian from her Russian neighbour — they drink coffee together every morning.",
    lines: [
      line("isabelle", "Алло! Это Изабель, из мыловарни у Старого порта. Ваш номер мне дали в бюро находок. Простите, я всё перепутала!", "Hello! It's Isabelle, from the soap workshop by the Old Port. The lost property office gave me your number. I'm sorry, I mixed everything up!"),
      line("tom", "Здравствуйте! У вас наш чемодан?", "Hello! Have you got our suitcase?"),
      line("isabelle", "Да! Он такой же, как мой. Дома я его открыла — а там кофеварка, часы с кукушкой, варежки…", "Yes! It's just like mine. At home I opened it — and there was a coffee pot, a cuckoo clock, mittens…"),
      line("murzik", "Это мои вещи!", "Those are my things!"),
      line("isabelle", "Я могу привезти его на вокзал. Или приезжайте ко мне — я угощу вас кофе.", "I can bring it to the station. Or come over to my place — I'll treat you to coffee."),
      line("tom", "Мы приедем! Сначала заберём ваш чемодан на вокзале и привезём его на такси. Как к вам добраться?", "We'll come! First we'll pick up your suitcase at the station and bring it by taxi. How do we get to you?"),
      line("isabelle", "Это недалеко от порта, улица Рыбаков, двенадцать. Через полчаса буду на месте.", "It's not far from the port, 12 Fishermen's Street. I'll be there in half an hour."),
    ],
    gist: choice("mr4-d1", "What do they decide?", [
      ["Tom and Murzik will go to Isabelle's workshop and bring her suitcase.", true],
      ["Isabelle will post the suitcase to Seville.", false],
      ["They will meet at the lost property office.", false],
    ]),
  },
  grammar: [
    {
      title: "При-: coming and bringing",
      paragraphs: [
        "приехать (come by transport), прийти (come on foot), привезти (bring by transport), принести (bring on foot).",
        "Polite invitations: Приезжайте! Приходите! — Come over! For a friend: Приезжай! Приходи!",
      ],
      examples: [
        { ru: "Приходите к нам в субботу!", en: "Come round to ours on Saturday!" },
        { ru: "Я принесу торт, а ты привези фрукты.", en: "I'll bring a cake, and you bring (by car) some fruit." },
      ],
    },
  ],
  tasks: [
    listen("mr4-t1", "Listen. What is Isabelle's address?", "Это недалеко от порта, улица Рыбаков, двенадцать. Через полчаса буду на месте.", [
      ["12 Fishermen's Street.", true],
      ["20 Fishermen's Street.", false],
      ["12 Station Street.", false],
    ]),
    choice("mr4-t2", "Invite a new friend (polite): “Come round on Saturday!”", [
      ["Приходите в субботу!", true],
      ["Уходите в субботу!", false],
      ["Выходите в субботу!", false],
    ], { skill: "grammar" }),
    fill("mr4-t3", "Choose the right word: “We'll bring your suitcase (by taxi).”", "Мы", "ваш чемодан.", "привезём", ["привезём", "увезём", "принесёмся"], { skill: "grammar" }),
    read("mr4-t4", "Read Isabelle's text. What should they do when they arrive?", "Изабель: Жду вас в мастерской с 8:30. Дверь синяя, звонок не работает — стучите громко! ☕", [
      ["Knock loudly — the bell doesn't work.", true],
      ["Ring the bell twice.", false],
      ["Wait outside until ten.", false],
    ]),
    match("mr4-t5", "Match the Russian with the English.", [
      ["мыловарня", "a soap workshop"],
      ["Как к вам добраться?", "How do we get to you?"],
      ["Это недалеко от порта.", "It's not far from the port."],
      ["Приезжайте ко мне!", "Come over to my place!"],
    ], { skill: "words" }),
    tf("mr4-t6", "Isabelle opened the suitcase and found Murzik's things.", true, "True or false?", { skill: "listening" }),
    script("mr4-t7", "Answer Isabelle's call.", [
      { speaker: "Isabelle", text: "Простите, я взяла ваш чемодан. Приезжайте ко мне!" },
      { speaker: "You", answer: "Спасибо! Как к вам добраться?", options: ["Спасибо! Как к вам добраться?", "Спасибо! Уезжайте от меня!", "Спасибо! Зарядка для телефона."] },
      { speaker: "Isabelle", text: "Это недалеко от порта." },
      { speaker: "You", answer: "Хорошо, мы приедем через полчаса.", options: ["Хорошо, мы приедем через полчаса.", "Хорошо, мы уедем через полчаса.", "Хорошо, мы вышли через полчаса."] },
    ], { skill: "speaking" }),
  ],
  reward: {
    itemId: "navettebiscuits",
    itemName: "Box of boat-shaped biscuits",
    itemNameRu: "Печенье-лодочки",
    ru: "Печенье — как маленькие лодки!",
    en: "Biscuits like little boats!",
    a11y: "A tin of small golden biscuits shaped like little boats stands open on the table.",
    image: p("reward-4"),
    steps: ["On the way they pass an old bakery.", "In the window: biscuits shaped like little boats.", "Tom buys a tin — for Isabelle and for them.", "Murzik eats one. Then two."],
    bridge: "A blue door on Fishermen's Street. They knock loudly. The whole street smells of lavender.",
  },
};

export const marseille5: Lesson = {
  id: "a2-marseille-5",
  level: "A2",
  cityId: "marseille",
  number: 5,
  title: "The Soap Workshop",
  minutes: 8,
  goals: ["Understand how something is made", "Choose a present", "Use вы-: выбрать, вынуть, выйти"],
  vocabNote: "Вы- often means “out”: выйти (go out), вынуть (take out), выбрать (choose — pick out).",
  vocab: [
    v("mr5-1", "оливковое масло", "olive oil", "A big tin of golden olive oil.", "Listen to оливковое масло", p("5-1")),
    v("mr5-2", "Как приятно пахнет!", "What a lovely smell!", "Murzik sniffs the air with his eyes closed.", "Listen to Как приятно пахнет", p("5-2")),
    v("mr5-3", "лаванда", "lavender", "Bunches of dry purple lavender hanging upside down.", "Listen to лаванда", p("5-3")),
    v("mr5-4", "Выбирайте!", "Go ahead and choose!", "Isabelle points at shelves full of soap.", "Listen to Выбирайте", p("5-4")),
    v("mr5-5", "Мыло сохнет месяц.", "Soap takes a month to dry.", "Rows of soap cubes drying on wooden racks.", "Listen to Мыло сохнет месяц", p("5-5")),
    v("mr5-6", "Выньте, пожалуйста, этот платок.", "Please take out this scarf.", "Isabelle points at a silk scarf in the open suitcase.", "Listen to Выньте, пожалуйста, этот платок", p("5-6")),
    v("mr5-7", "Мне описали этот платок.", "Someone described this scarf to me.", "Isabelle stares at the scarf, eyes wide.", "Listen to Мне описали этот платок", p("5-7")),
    v("mr5-8", "Сначала Севилья.", "Seville first.", "A note on a scrap of paper: «Сначала Севилья».", "Listen to Сначала Севилья", p("5-8")),
  ],
  letters: [
    letter("пахнет", "PAKH-nit: stress on ПАХ; the unstressed е sounds like и.", "Как приятно пахнет!", "What a lovely smell!"),
    letter("Выньте", "VYN'-tye: the soft н, then т.", "Выньте платок.", "Take out the scarf."),
  ],
  dialogue: {
    title: "Lavender and olive oil",
    note: "The silk scarf with painted cats and boats was Asya's. Murzik got it in Lyon.",
    lines: [
      line("isabelle", "Добро пожаловать! Мыло мы делаем из оливкового масла, как сто лет назад.", "Welcome! We make the soap from olive oil, like a hundred years ago."),
      line("murzik", "Как приятно пахнет!", "What a lovely smell!"),
      line("isabelle", "Это лаванда. Выбирайте любое мыло — это вам за беспокойство.", "That's lavender. Choose any soap you like — it's for your trouble."),
      line("tom", "Спасибо! А сколько времени сохнет мыло?", "Thank you! And how long does soap take to dry?"),
      line("isabelle", "Месяц. Ой, а что это у вас в чемодане? Выньте, пожалуйста, этот платок.", "A month. Oh, what's that in your suitcase? Please take out this scarf."),
      line("murzik", "Это платок моей бабушки. С котами и лодками.", "It's my grandma's scarf. With cats and boats."),
      line("isabelle", "С котами и лодками… Мне описали этот платок! Дня три назад сюда приходила рыжая кошка в соломенной шляпе. Она купила мыло с лавандой.", "With cats and boats… Someone described this scarf to me! About three days ago a ginger cat in a straw hat came here. She bought lavender soap."),
      line("isabelle", "И сказала странную вещь: «Если придёт рыжий котёнок с платком — с котами и лодками, — скажите ему: сначала Севилья».", "And she said something strange: “If a ginger kitten comes with a scarf — with cats and boats — tell him: Seville first.”"),
    ],
    gist: choice("mr5-d1", "What did the cat in the straw hat say?", [
      ["“If a ginger kitten comes, tell him: Seville first.”", true],
      ["“I'm going back to Paris.”", false],
      ["“I don't like lavender.”", false],
    ]),
  },
  grammar: [
    {
      title: "Вы-: out",
      paragraphs: [
        "выйти (go out), вынуть (take out), выбрать (choose, pick out), выехать (drive out, set off).",
        "Polite imperative: Выбирайте! Выньте! Выходите! Stress is on вы- in the perfective: вынуть, выбрать, вышел.",
      ],
      examples: [
        { ru: "Мы выехали из Марселя рано утром.", en: "We set off from Marseille early in the morning." },
        { ru: "Выберите мыло, которое вам нравится.", en: "Choose the soap you like." },
      ],
    },
  ],
  tasks: [
    listen("mr5-t1", "Listen. When did Isabelle see the cat in the straw hat?", "Мне описали этот платок! Дня три назад сюда приходила рыжая кошка в соломенной шляпе.", [
      ["About three days ago.", true],
      ["About three weeks ago.", false],
      ["Thirty years ago.", false],
    ]),
    choice("mr5-t2", "Detective! What did the cat buy?", [
      ["Lavender soap.", true],
      ["Olive oil.", false],
      ["A straw hat.", false],
    ], { skill: "listening" }),
    fill("mr5-t3", "Choose the right word: “Please take out this scarf.”", "", "пожалуйста, этот платок.", "Выньте,", ["Выньте,", "Принесите,", "Уйдите,"], { skill: "grammar" }),
    read("mr5-t4", "Read the label on the soap. What is it made of?", "МАРСЕЛЬСКОЕ МЫЛО\nИз оливкового масла\nБез запаха\nСохнет: 1 месяц\nМыловарня «Лаванда», Марсель", [
      ["Olive oil.", true],
      ["Lavender only.", false],
      ["Milk.", false],
    ]),
    match("mr5-t5", "Match the Russian with the English.", [
      ["оливковое масло", "olive oil"],
      ["лаванда", "lavender"],
      ["Выбирайте!", "Go ahead and choose!"],
      ["Как приятно пахнет!", "What a lovely smell!"],
    ], { skill: "words" }),
    tf("mr5-t6", "The soap takes a year to dry.", false, "True or false?", { skill: "listening" }),
    speak("mr5-t7", "Выбирайте любой подарок!", "Спасибо! Я выберу мыло с лавандой — оно так приятно пахнет.", "Thank you! I'll choose the lavender soap — it smells so lovely.", {
      help: "Choose a present out loud and say why.",
    }),
  ],
  reward: {
    itemId: "lavendersachet",
    itemName: "Lavender sachet",
    itemNameRu: "Мешочек с лавандой",
    ru: "Теперь чемодан пахнет лавандой!",
    en: "Now the suitcase smells of lavender!",
    a11y: "A small purple cotton bag tied with string lies on top of the open suitcase; dry lavender flowers peep out.",
    image: p("reward-5"),
    steps: ["Isabelle fills a little cotton bag with lavender.", "“В чемодан — чтобы все вещи пахли Марселем.”", "Murzik checks every thing in the suitcase. All there!", "He writes Asya's words on a scrap of paper: «Сначала Севилья»."],
    bridge: "Back at the station, the board for the train to Barcelona has one red word on it.",
  },
};

export const marseille6: Lesson = {
  id: "a2-marseille-6",
  level: "A2",
  cityId: "marseille",
  number: 6,
  title: "The Train Is Cancelled",
  minutes: 8,
  goals: ["Understand station announcements", "Change a ticket or get a refund", "Use у-: уйти, уехать — and Поезд ушёл"],
  vocabNote: "Отменили — (they) cancelled: Russian often says “they cancelled the train” instead of “the train was cancelled”.",
  vocab: [
    v("mr6-1", "Поезд отменили.", "The train has been cancelled.", "A departures board with one line in red.", "Listen to Поезд отменили", p("6-1")),
    v("mr6-2", "табло", "a departures board", "A big black board with yellow letters and times.", "Listen to табло", p("6-2")),
    v("mr6-3", "из-за ремонта путей", "because of track repairs", "Workers in orange vests on the rails.", "Listen to из-за ремонта путей", p("6-3")),
    v("mr6-4", "поменять билет", "to change a ticket", "The cashier stamps a new date on a ticket.", "Listen to поменять билет", p("6-4")),
    v("mr6-5", "вернуть деньги за билет", "to get a refund for a ticket", "Coins and notes going back across the counter.", "Listen to вернуть деньги за билет", p("6-5")),
    v("mr6-6", "автобус вместо поезда", "a replacement bus (a bus instead of the train)", "A long coach parked outside the station.", "Listen to автобус вместо поезда", p("6-6")),
    v("mr6-7", "Он уходит через два часа.", "It leaves in two hours.", "A clock and a coach driver with a cap.", "Listen to Он уходит через два часа", p("6-7")),
    v("mr6-8", "Полетим на самолёте!", "Let's fly!", "Murzik spreads his paws like wings.", "Listen to Полетим на самолёте", p("6-8")),
  ],
  letters: [
    letter("отменили", "at-mi-NEE-li: stress on НИ; unstressed о sounds like а, е like и.", "Поезд отменили.", "The train has been cancelled."),
    letter("табло", "tab-LO: stress on the end; табло never changes.", "на табло", "on the board"),
  ],
  dialogue: {
    title: "At the ticket office",
    note: "They planned to go by train to Barcelona — only to change trains — and then on to Seville.",
    lines: [
      line("tom", "Здравствуйте! На табло написано, что наш поезд в Барселону отменили.", "Hello! The board says our train to Barcelona has been cancelled."),
      line("cashier", "Да, из-за ремонта путей. Есть автобус вместо поезда. Он уходит через два часа.", "Yes, because of track repairs. There's a replacement bus. It leaves in two hours."),
      line("murzik", "А сколько ехать?", "And how long does it take?"),
      line("cashier", "До Барселоны — часов восемь, с пересадкой. А можно поменять билет на завтра или вернуть деньги.", "To Barcelona — about eight hours, with a change. Or you can change the ticket to tomorrow or get a refund."),
      line("murzik", "Восемь часов в автобусе, а потом ещё в Севилью?! Давайте вернём деньги и полетим на самолёте!", "Eight hours on a bus, and then on to Seville?! Let's get a refund and fly!"),
      line("tom", "Хорошая идея. До Севильи меньше двух часов лететь.", "Good idea. It's less than two hours' flight to Seville."),
      line("cashier", "Пожалуйста, вот ваши деньги. Счастливого пути!", "Here's your money. Have a good trip!"),
    ],
    gist: choice("mr6-d1", "What do they decide to do?", [
      ["Get a refund and fly to Seville.", true],
      ["Take the replacement bus.", false],
      ["Change the ticket to tomorrow.", false],
    ]),
  },
  grammar: [
    {
      title: "У-: away",
      paragraphs: [
        "уйти (go away on foot; for trains and buses — to leave), уехать (leave by transport), унести, увезти (carry away).",
        "Автобус уходит через два часа — the bus leaves in two hours. Поезд ушёл — the train has gone; it also means “too late, the chance is gone”.",
      ],
      examples: [
        { ru: "Последний автобус уходит в одиннадцать.", en: "The last bus leaves at eleven." },
        { ru: "Мы опоздали — поезд уже ушёл.", en: "We're late — the train has already gone." },
      ],
    },
  ],
  tasks: [
    listen("mr6-t1", "Listen. Why was the train cancelled?", "Да, из-за ремонта путей. Есть автобус вместо поезда.", [
      ["Because of track repairs.", true],
      ["Because of the weather.", false],
      ["There was no driver.", false],
    ]),
    choice("mr6-t2", "“The last bus leaves at eleven.” Which is right?", [
      ["Последний автобус уходит в одиннадцать.", true],
      ["Последний автобус приходит из одиннадцать.", false],
      ["Последний автобус выходит в одиннадцатом.", false],
    ], { skill: "grammar" }),
    fill("mr6-t3", "Choose the right word: “We're late — the train has already gone.”", "Мы опоздали — поезд уже", ".", "ушёл", ["ушёл", "пришёл", "вышел"], { skill: "grammar" }),
    read("mr6-t4", "Read the departures board. Which train is still running on time?", "ОТПРАВЛЕНИЕ\n10:12 Барселона — ОТМЕНЁН\n10:30 Лион — по расписанию\n10:45 Ницца — задерживается на 20 минут", [
      ["The 10:30 to Lyon.", true],
      ["The 10:12 to Barcelona.", false],
      ["The 10:45 to Nice.", false],
    ]),
    match("mr6-t5", "Match the Russian with the English.", [
      ["табло", "a departures board"],
      ["поменять билет", "to change a ticket"],
      ["вернуть деньги за билет", "to get a refund"],
      ["автобус вместо поезда", "a replacement bus"],
    ], { skill: "words" }),
    tf("mr6-t6", "The replacement bus to Barcelona takes about two hours.", false, "True or false?", { skill: "listening" }),
    speak("mr6-t7", "Ваш поезд отменили. Что вы хотите сделать?", "Можно вернуть деньги за билет? Мы решили лететь на самолёте.", "Can I get a refund for the ticket? We've decided to fly.", {
      help: "Ask for a refund out loud.",
    }),
  ],
  reward: {
    itemId: "travelpillow",
    itemName: "Travel pillow",
    itemNameRu: "Подушка для путешествий",
    ru: "Подушка — для любой дороги!",
    en: "A pillow — for any journey!",
    a11y: "A soft orange travel pillow shaped like a horseshoe lies on Murzik's suitcase.",
    image: p("reward-6"),
    steps: ["At the station shop Tom sees a travel pillow.", "Orange — just like Murzik.", "“На случай, если всё-таки поедем на автобусе.”", "Murzik tries it on. It fits him like a collar."],
    bridge: "Their flight is in the evening. There's time to say goodbye to Isabelle — and to the Old Port.",
  },
};

export const marseille7: Lesson = {
  id: "a2-marseille-7",
  level: "A2",
  cityId: "marseille",
  number: 7,
  title: "Marseille Exam",
  minutes: 9,
  goals: ["Understand a longer story", "Talk about travel problems", "Review everything from Marseille"],
  vocabNote: "Lesson 7 is the city exam: a longer listening story and a review of everything from Marseille.",
  vocab: [
    v("mr7-1", "марсельское мыло", "Marseille soap", "A big green-brown cube of soap with letters pressed into it.", "Listen to марсельское мыло", p("7-1")),
    v("mr7-2", "кубик мыла", "a cube of soap", "Isabelle holds out a cube of soap on her palm.", "Listen to кубик мыла", p("7-2")),
    v("mr7-3", "Старый порт", "the Old Port", "Boats in the harbour; the fish market on the quay.", "Listen to Старый порт", p("7-3")),
    v("mr7-4", "Вы нас выручили.", "You've helped us out.", "Tom shakes Isabelle's hand warmly.", "Listen to Вы нас выручили", p("7-4")),
    v("mr7-5", "Всё хорошо, что хорошо кончается.", "All's well that ends well.", "Murzik hugs his suitcase with the red tag.", "Listen to Всё хорошо, что хорошо кончается", p("7-5")),
    v("mr7-6", "церковь на холме", "the church on the hill", "A church with a golden statue high on a hill above the city.", "Listen to церковь на холме", p("7-6")),
    v("mr7-7", "рейс в Севилью", "the flight to Seville", "A plane on the runway at sunset.", "Listen to рейс в Севилью", p("7-7")),
    v("mr7-8", "Берегите чемодан!", "Look after your suitcase!", "Isabelle wags her finger, smiling.", "Listen to Берегите чемодан", p("7-8")),
  ],
  letters: [
    letter("выручили", "VY-ru-chi-li: stress on ВЫ.", "Вы нас выручили!", "You've helped us out!"),
  ],
  dialogue: {
    title: "Goodbye, Isabelle",
    note: "Марсельское мыло — Marseille soap, a big cube made from olive oil. People have made it here for hundreds of years.",
    lines: [
      line("isabelle", "Это вам — кубик марсельского мыла. На память о Старом порте.", "This is for you — a cube of Marseille soap. A keepsake of the Old Port."),
      line("murzik", "Спасибо! Вы нас так выручили.", "Thank you! You've helped us out so much."),
      line("isabelle", "Это вы меня выручили — привезли мой чемодан. Всё хорошо, что хорошо кончается.", "It's you who helped me — you brought my suitcase back. All's well that ends well."),
      line("tom", "Наш рейс в Севилью сегодня вечером.", "Our flight to Seville is this evening."),
      line("isabelle", "Берегите чемодан! А если увидите рыжую кошку в соломенной шляпе — скажите ей, что мыло с лавандой у меня всегда есть.", "Look after your suitcase! And if you see a ginger cat in a straw hat, tell her I always have lavender soap."),
      line("murzik", "Обязательно скажем! А перед рейсом поднимемся к церкви на холме.", "We'll be sure to tell her! And before the flight we'll go up to the church on the hill."),
    ],
    gist: choice("mr7-d1", "What does Isabelle give Murzik?", [
      ["A cube of Marseille soap.", true],
      ["A lavender plant.", false],
      ["Her own suitcase.", false],
    ]),
  },
  grammar: [
    {
      title: "Marseille review",
      paragraphs: [
        "по- (set off; for a while): пойти, поехать, посидеть, погулять. при- (arrive, bring): приехать, прийти, привезти, принести. у- (away): уехать, уйти, унести, увезти. вы- (out): выйти, вынуть, выбрать, выехать.",
        "Travel problems: чемодан пропал, бюро находок, заявление, перепутать, по ошибке, поезд отменили, поменять билет, вернуть деньги.",
      ],
      examples: [
        { ru: "Мы приехали в Марсель, вышли из вагона — а чемодана нет!", en: "We arrived in Marseille, got off the train — and the suitcase was gone!" },
        { ru: "Изабель увезла наш чемодан, а мы привезли ей её чемодан.", en: "Isabelle took our suitcase away, and we brought her hers." },
      ],
    },
  ],
  tasks: [
    listen("mr7-t1", "Audio story: Olga talks about her work. What do people lose most often?", "Я работаю в бюро находок десять лет. Каждый день люди теряют вещи: телефоны, ключи, сумки. Но чаще всего — зонты. Однажды нам принесли живого попугая! Он сидел в клетке и говорил «Бонжур». Хозяйка приехала за ним через два дня.", [
      ["Umbrellas.", true],
      ["Phones.", false],
      ["Parrots.", false],
    ]),
    choice("mr7-t2", "In Olga's story, when did the parrot's owner come for him?", [
      ["Two days later.", true],
      ["Ten years later.", false],
      ["Never.", false],
    ], { skill: "listening" }),
    choice("mr7-t3", "“We brought Isabelle her suitcase (by taxi).” Which is right?", [
      ["Мы привезли Изабель её чемодан.", true],
      ["Мы унесли Изабель её чемодан на такси.", false],
      ["Мы вышли Изабель её чемодан.", false],
    ], { skill: "grammar" }),
    read("mr7-t4", "Read the boarding pass. What time does boarding start?", "МАРСЕЛЬ — СЕВИЛЬЯ\nРейс 2214\nПосадка: 18:25\nВылет: 19:05\nВыход: 7", [
      ["At 18:25.", true],
      ["At 19:05.", false],
      ["At 7:00.", false],
    ]),
    script("mr7-t5", "Say goodbye to Isabelle.", [
      { speaker: "Isabelle", text: "Это вам — марсельское мыло." },
      { speaker: "You", answer: "Спасибо! Вы нас так выручили.", options: ["Спасибо! Вы нас так выручили.", "Спасибо! Поезд отменили.", "Спасибо! Мой чемодан пропал."] },
      { speaker: "Isabelle", text: "Берегите чемодан!" },
      { speaker: "You", answer: "Обязательно! Всё хорошо, что хорошо кончается.", options: ["Обязательно! Всё хорошо, что хорошо кончается.", "Обязательно! Заполните заявление.", "Обязательно! Выньте платок."] },
    ], { skill: "review" }),
    match("mr7-t6", "Marseille review: match the Russian with the English.", [
      ["бюро находок", "lost property office"],
      ["перепутать", "to mix up"],
      ["церковь на холме", "the church on the hill"],
      ["Поезд отменили.", "The train has been cancelled."],
    ], { skill: "review" }),
    speak("mr7-t7", "У тебя были проблемы в дороге?", "Да, однажды мой рейс отменили. Я поменял(а) билет и улетел(а) на следующий день.", "Yes, once my flight was cancelled. I changed my ticket and flew the next day.", {
      help: "Tell out loud about a problem you had while travelling.",
    }),
  ],
  reward: {
    itemId: "marseillesoap",
    itemName: "Cube of Marseille soap",
    itemNameRu: "Марсельское мыло",
    ru: "Мыло, которое пахнет портом!",
    en: "Soap that smells of the port!",
    a11y: "A big green-brown cube of Marseille soap with letters pressed into its sides sits on top of Murzik's suitcase, next to the red luggage tag.",
    image: p("reward-7"),
    steps: ["Isabelle gives Murzik a big cube of Marseille soap.", "Letters are pressed into every side.", "The suitcase now has a red tag — no more mix-ups.", "And inside, a note: «Сначала Севилья»."],
  },
};

export const marseilleLessons: Lesson[] = [marseille1, marseille2, marseille3, marseille4, marseille5, marseille6, marseille7];
