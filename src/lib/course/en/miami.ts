import { pic } from "../art";
import { read } from "../make";
import type { CityStory, Lesson } from "../types";
import { choice, fill, letter, line, listen, match, script, speak, tf, v } from "../tr/make";

/*
 * Майами · «Гостиница и жалобы» · A2, уроки 1–7.
 * Последний город перед домом. Маленький мотель у пляжа, управляющий Луис (около 40): сломанный кондиционер,
 * шум, смена номера. Маленькая Гавана: кафе бабушки Йоланды (около 75) — кубинский кофе, домино и кубинский сэндвич.
 * Её внучка Габи (около 25) мечтает о своём фургоне с едой — и Мурзик с Томом дарят ей жёлтый «Sunny».
 * Грамматика: глагол + to / -ing: want to, decide to, hope to, need to, forget to; enjoy, mind, stop, finish,
 * can't stand + -ing; look forward to + -ing.
 */

const p = (name: string) => pic(`en/miami/${name}`);

const miami1: Lesson = {
  id: "en-a2-miami-1",
  level: "A2",
  cityId: "en-miami",
  number: 1,
  title: "Checking in — Заселение",
  minutes: 8,
  goals: ["Заселиться в мотель", "Глагол + to: want to, decide to, hope to", "Сказать о своих планах"],
  vocabNote: "После want, decide, hope, need, plan, would like ставим to + глагол: We decided to stay. I hope to see the ocean.",
  vocab: [
    v("enmi1-1", "a motel by the beach", "мотель у пляжа", "Низкий розовый мотель с пальмами и бассейном в форме фасолины.", "Послушать a motel by the beach", p("l1-1")),
    v("enmi1-2", "We decided to stay three nights.", "Мы решили остаться на три ночи.", "Том показывает три пальца у стойки.", "Послушать We decided to stay three nights", p("l1-2")),
    v("enmi1-3", "I'd like to check in.", "Я бы хотел(а) заселиться.", "Колокольчик на стойке регистрации.", "Послушать I'd like to check in", p("l1-3")),
    v("enmi1-4", "I hope to see the ocean from my window.", "Надеюсь увидеть океан из окна.", "Мурзик мечтательно смотрит на картинку с волнами.", "Послушать I hope to see the ocean from my window", p("l1-4")),
    v("enmi1-5", "an ocean view", "вид на океан", "Окно, за которым бирюзовая вода.", "Послушать an ocean view", p("l1-5")),
    v("enmi1-6", "We need to park the truck.", "Нам нужно припарковать фургон.", "Жёлтый фургон у входа, табличка NO PARKING.", "Послушать We need to park the truck", p("l1-6")),
    v("enmi1-7", "the parking lot in the back", "парковка сзади", "Стрелка на табличке: PARKING IN BACK.", "Послушать the parking lot in the back", p("l1-7")),
    v("enmi1-8", "Enjoy your stay!", "Приятного отдыха!", "Луис с улыбкой протягивает ключ с брелоком-фламинго.", "Послушать Enjoy your stay", p("l1-8")),
  ],
  letters: [
    letter("ocean = [Оушэн]", "c здесь читается как [ш]: ocean [Оушэн].", "an ocean view", "вид на океан"),
    letter("motel = [моутЭл]", "Ударение на последний слог: mo-TEL. Motel = motor + hotel.", "a motel by the beach", "мотель у пляжа"),
  ],
  dialogue: {
    title: "Розовый мотель",
    note: "Майами — последний город поездки. Отсюда Мурзик и Том полетят домой, в Лондон, на фестиваль.",
    lines: [
      line("tom", "Hi! I'd like to check in. Tom Hope. We decided to stay three nights.", "Здравствуйте! Я бы хотел заселиться. Том Хоуп. Мы решили остаться на три ночи."),
      line("luis", "Welcome to Miami! Room fourteen. Do you need to park?", "Добро пожаловать в Майами! Номер четырнадцать. Вам нужно припарковаться?"),
      line("tom", "Yes, we need to park the truck. The yellow one outside.", "Да, нам нужно припарковать фургон. Жёлтый, у входа."),
      line("luis", "Use the parking lot in the back.", "Пользуйтесь парковкой сзади."),
      line("murzik", "Does our room have an ocean view? I hope to see the ocean from my window.", "А в нашем номере есть вид на океан? Я надеюсь увидеть океан из окна."),
      line("luis", "It has a… partial ocean view. Here's your key. Enjoy your stay!", "У него… частичный вид на океан. Вот ваш ключ. Приятного отдыха!"),
    ],
    gist: choice("enmi1-d1", "Где можно припарковать фургон?", [
      ["На парковке сзади.", true],
      ["Прямо у входа.", false],
      ["На пляже.", false],
    ]),
  },
  grammar: [
    {
      title: "Глагол + to",
      paragraphs: [
        "После want, would like, decide, hope, need, plan, forget, learn ставим to + глагол: I want to swim. We decided to stay. She hopes to win.",
        "Отрицание — not перед to: We decided not to go. Try not to be late.",
      ],
      examples: [
        { ru: "We need to buy some sunscreen.", en: "Нам нужно купить солнцезащитный крем." },
        { ru: "They decided not to take a taxi.", en: "Они решили не брать такси." },
      ],
    },
  ],
  tasks: [
    listen("enmi1-t1", "Послушай. Какой у них номер?", "Welcome to Miami! Room fourteen. Do you need to park?", [
      ["Четырнадцать.", true],
      ["Сорок.", false],
      ["Четыре.", false],
    ]),
    choice("enmi1-t2", "Как сказать «Мы решили остаться на три ночи»?", [
      ["We decided to stay three nights.", true],
      ["We decided staying three nights.", false],
      ["We decided stay three nights.", false],
    ], { skill: "grammar" }),
    fill("enmi1-t3", "Выбери правильную форму: «Надеюсь увидеть океан».", "I hope", "the ocean.", "to see", ["to see", "seeing", "see"], { skill: "grammar" }),
    read("enmi1-t4", "Прочитай карточку мотеля. До какого часа надо выехать?", "FLAMINGO MOTEL\nCheck-in: 3 pm\nCheck-out: 11 am\nPool: 8 am – 10 pm\nParking: in back, free", [
      ["До 11 утра.", true],
      ["До 3 дня.", false],
      ["До 10 вечера.", false],
    ]),
    match("enmi1-t5", "Соедини пары.", [
      ["a motel by the beach", "мотель у пляжа"],
      ["an ocean view", "вид на океан"],
      ["the parking lot in the back", "парковка сзади"],
      ["Enjoy your stay!", "Приятного отдыха!"],
    ], { skill: "words" }),
    tf("enmi1-t6", "Из номера отлично виден океан.", false, "listening"),
    speak("enmi1-t7", "Hi! Can I help you?", "Hi! I'd like to check in. I need to stay two nights, and I hope to get a room with an ocean view.", "Здравствуйте! Я бы хотел(а) заселиться. Мне нужно остаться на две ночи, и я надеюсь получить номер с видом на океан.", {
      help: "Заселись вслух в гостиницу: I'd like to…, I need to…, I hope to…",
    }),
  ],
  reward: {
    itemId: "flamingo",
    itemName: "Брелок-фламинго",
    itemNameRu: "Flamingo keyring",
    ru: "A pink flamingo — very Miami!",
    en: "Розовый фламинго — очень по-майамски!",
    a11y: "На ручке чемодана Тома висит розовый пластиковый брелок-фламинго.",
    image: p("flamingo"),
    steps: ["Ключ от номера — на брелоке-фламинго.", "Луис дарит Мурзику второй такой же — на память.", "Мурзик вешает его на ручку чемодана.", "А «частичный вид на океан» — это кусочек моря между двумя стенами."],
    bridge: "Ночью в номере жарко, как в духовке. Кондиционер гудит, кашляет — и замолкает.",
  },
};

const miami2: Lesson = {
  id: "en-a2-miami-2",
  level: "A2",
  cityId: "en-miami",
  number: 2,
  title: "The AC stopped working — Кондиционер перестал работать",
  minutes: 8,
  goals: ["Пожаловаться на проблему в номере", "Stop + -ing", "Can't stand + -ing — «терпеть не могу»"],
  vocabNote: "AC (эй-си) — кондиционер по-американски. Stop + -ing — перестать что-то делать: It stopped working. Can't stand + -ing — терпеть не могу.",
  vocab: [
    v("enmi2-1", "The AC stopped working.", "Кондиционер перестал работать.", "Тихий кондиционер с поникшей ленточкой.", "Послушать The AC stopped working", p("l2-1")),
    v("enmi2-2", "It's boiling in here!", "Здесь жарища!", "Мурзик лежит на полу, раскинув лапы.", "Послушать It's boiling in here", p("l2-2")),
    v("enmi2-3", "The ice machine keeps making noise.", "Машина для льда всё время шумит.", "Автомат со льдом в коридоре грохочет.", "Послушать The ice machine keeps making noise", p("l2-3")),
    v("enmi2-4", "I can't stand sleeping in the heat.", "Терпеть не могу спать в жару.", "Том с мокрой головой обмахивается журналом.", "Послушать I can't stand sleeping in the heat", p("l2-4")),
    v("enmi2-5", "Could you send someone up?", "Не могли бы вы кого-нибудь прислать?", "Том звонит с гостиничного телефона.", "Послушать Could you send someone up", p("l2-5")),
    v("enmi2-6", "I apologize for the inconvenience.", "Приношу извинения за неудобства.", "Луис прижимает руку к сердцу.", "Послушать I apologize for the inconvenience", p("l2-6")),
    v("enmi2-7", "I can bring you a fan.", "Могу принести вам вентилятор.", "Большой белый вентилятор на подставке.", "Послушать I can bring you a fan", p("l2-7")),
    v("enmi2-8", "for now", "пока что, на первое время", "Луис ставит вентилятор в номер.", "Послушать for now", p("l2-8")),
  ],
  letters: [
    letter("AC = [эй-си]", "AC — air conditioning, читается по буквам: [эй-сИ:].", "The AC stopped working.", "Кондиционер перестал работать."),
    letter("apologize = [эпОлэджайз]", "Ударение на второй слог: a-POL-o-gize.", "I apologize.", "Приношу извинения."),
  ],
  dialogue: {
    title: "Звонок на ресепшен",
    note: "Ice machine — автомат со льдом, такие стоят в коридорах американских мотелей.",
    lines: [
      line("tom", "Hello, front desk? This is room fourteen. The AC stopped working, and it's boiling in here!", "Алло, ресепшен? Это номер четырнадцать. Кондиционер перестал работать, и здесь жарища!"),
      line("murzik", "And the ice machine keeps making noise. I can't stand sleeping in the heat!", "И автомат со льдом всё время шумит. Терпеть не могу спать в жару!"),
      line("tom", "Could you send someone up?", "Не могли бы вы кого-нибудь прислать?"),
      line("luis", "I apologize for the inconvenience. The repairman can't come until the morning.", "Приношу извинения за неудобства. Мастер придёт только утром."),
      line("luis", "But I can bring you a fan for now. Or would you like to change rooms?", "Но пока я могу принести вам вентилятор. Или хотите поменять номер?"),
      line("tom", "We'd like to change rooms, please. Far from the ice machine!", "Мы бы хотели поменять номер, пожалуйста. Подальше от автомата со льдом!"),
    ],
    gist: choice("enmi2-d1", "Что они решили?", [
      ["Поменять номер.", true],
      ["Ждать мастера до утра.", false],
      ["Уехать из мотеля.", false],
    ]),
  },
  grammar: [
    {
      title: "Глагол + -ing",
      paragraphs: [
        "После enjoy, mind, finish, can't stand, keep (продолжать, всё время) глагол с -ing: I enjoy swimming. It keeps making noise. I can't stand waiting.",
        "Stop + -ing — перестать: The AC stopped working. Сравни: I stopped to listen (в Нэшвилле) — остановился, чтобы послушать.",
      ],
      examples: [
        { ru: "The baby kept crying all night.", en: "Малыш плакал всю ночь (не переставая)." },
        { ru: "I can't stand waiting in long lines.", en: "Терпеть не могу стоять в длинных очередях." },
      ],
    },
  ],
  tasks: [
    listen("enmi2-t1", "Послушай. Когда придёт мастер?", "I apologize for the inconvenience. The repairman can't come until the morning.", [
      ["Только утром.", true],
      ["Через пять минут.", false],
      ["Никогда.", false],
    ]),
    choice("enmi2-t2", "Как сказать «Кондиционер перестал работать»?", [
      ["The AC stopped working.", true],
      ["The AC stopped to work.", false],
      ["The AC stop work.", false],
    ], { skill: "grammar" }),
    fill("enmi2-t3", "Выбери правильную форму: «Терпеть не могу ждать».", "I can't stand", ".", "waiting", ["waiting", "to waiting", "wait"], { skill: "grammar" }),
    read("enmi2-t4", "Прочитай записку на двери номера. Что предлагают гостям?", "Dear guests,\nSorry — our AC repairman is coming tomorrow at 9 am.\nFree fans at the front desk.\nFree breakfast at Yolanda's in Little Havana for rooms 10–16!", [
      ["Бесплатные вентиляторы и завтрак в Маленькой Гаване.", true],
      ["Бесплатный номер на неделю.", false],
      ["Деньги назад.", false],
    ]),
    match("enmi2-t5", "Соедини пары.", [
      ["It's boiling in here!", "Здесь жарища!"],
      ["I apologize for the inconvenience.", "Приношу извинения за неудобства."],
      ["I can bring you a fan.", "Могу принести вам вентилятор."],
      ["for now", "пока что"],
    ], { skill: "words" }),
    tf("enmi2-t6", "Автомат со льдом работает тихо.", false, "listening"),
    speak("enmi2-t7", "Front desk, how can I help?", "Hi! The shower stopped working, and the TV keeps turning off. Could you send someone up?", "Здравствуйте! Душ перестал работать, а телевизор всё время выключается. Не могли бы вы кого-нибудь прислать?", {
      help: "Пожалуйся вслух на две проблемы в номере.",
    }),
  ],
  reward: {
    itemId: "hand-fan",
    itemName: "Веер-фламинго",
    itemNameRu: "Flamingo hand fan",
    ru: "A fan for the Miami heat!",
    en: "Веер для майамской жары!",
    a11y: "На тумбочке в номере лежит розовый бумажный веер с фламинго.",
    image: p("hand-fan"),
    steps: ["Новый номер — двадцать два, в конце коридора.", "Кондиционер работает. Тишина.", "Луис всё равно дарит Мурзику бумажный веер — «на всякий случай».", "Мурзик спит под одеялом. В Майами. Летом."],
    bridge: "Утром Луис извиняется ещё раз и дарит им талоны: «Завтрак в Маленькой Гаване. Лучший кофе в городе — у бабушки Йоланды».",
  },
};

const miami3: Lesson = {
  id: "en-a2-miami-3",
  level: "A2",
  cityId: "en-miami",
  number: 3,
  title: "Little Havana — Маленькая Гавана",
  minutes: 8,
  goals: ["Заказать кофе и завтрак", "Enjoy + -ing / would like to", "Поговорить о том, что любишь делать"],
  vocabNote: "Little Havana — район Майами, где живёт много кубинцев. Cafecito — маленькая чашка очень крепкого сладкого кубинского кофе.",
  vocab: [
    v("enmi3-1", "a cafecito", "кубинский кофе (крепкий и сладкий)", "Крошечная чашечка с тёмным кофе и пенкой.", "Послушать a cafecito", p("l3-1")),
    v("enmi3-2", "It's very strong and sweet.", "Он очень крепкий и сладкий.", "Том делает глоток — глаза округляются.", "Послушать It's very strong and sweet", p("l3-2")),
    v("enmi3-3", "Would you like to try it?", "Хотите попробовать?", "Йоланда протягивает чашечку через окошко.", "Послушать Would you like to try it", p("l3-3")),
    v("enmi3-4", "I enjoy watching people play dominoes.", "Мне нравится смотреть, как играют в домино.", "Пожилые мужчины играют в домино за столиком в парке.", "Послушать I enjoy watching people play dominoes", p("l3-4")),
    v("enmi3-5", "Do you mind sharing your table?", "Вы не против сесть вместе за ваш столик?", "Йоланда показывает на свободные стулья за столиком пожилой женщины.", "Послушать Do you mind sharing your table", p("l3-5")),
    v("enmi3-6", "Not at all — sit down!", "Нисколько — садитесь!", "Пожилая женщина в соломенной шляпе отодвигает стул.", "Послушать Not at all — sit down", p("l3-6")),
    v("enmi3-7", "a ventanita", "окошко кафе (на улицу)", "Маленькое окошко кафе, у которого стоят люди с кофе.", "Послушать a ventanita", p("l3-7")),
    v("enmi3-8", "Everyone speaks Spanish here.", "Здесь все говорят по-испански.", "Вывески на испанском, яркие стены.", "Послушать Everyone speaks Spanish here", p("l3-8")),
  ],
  letters: [
    letter("cafecito = [кафесИто]", "Испанское слово: ударение на «си».", "a cafecito", "кубинский кофе"),
    letter("dominoes = [дОминоуз]", "Ударение на первый слог: DOM-i-noes.", "play dominoes", "играть в домино"),
  ],
  dialogue: {
    title: "Окошко бабушки Йоланды",
    note: "В Маленькой Гаване кофе часто пьют прямо у окошка кафе на улице — ventanita по-испански.",
    lines: [
      line("yolanda", "¡Buenos días! Welcome! Would you like to try a cafecito?", "Доброе утро! Добро пожаловать! Хотите попробовать кубинский кофе?"),
      line("tom", "Yes, please! Wow! It's very strong and sweet!", "Да, пожалуйста! Ого! Он очень крепкий и сладкий!"),
      line("yolanda", "That's how we like it. Señora, do you mind sharing your table? It's busy this morning.", "Мы любим именно так. Сеньора, вы не против, если они сядут за ваш столик? Сегодня утром много людей."),
      line("passerby", "Not at all — sit down!", "Нисколько — садитесь!"),
      line("tom", "Everyone speaks Spanish here. And everyone is playing dominoes!", "Здесь все говорят по-испански. И все играют в домино!"),
      line("murzik", "I enjoy watching people play dominoes. They slam the tiles so loudly!", "Мне нравится смотреть, как играют в домино. Они так громко стучат костяшками!"),
    ],
    gist: choice("enmi3-d1", "Какой на вкус кубинский кофе?", [
      ["Очень крепкий и сладкий.", true],
      ["Слабый и горький.", false],
      ["Холодный и без сахара.", false],
    ]),
  },
  grammar: [
    {
      title: "Enjoy + -ing и would like to",
      paragraphs: [
        "Enjoy, love, like, hate, don't mind + -ing — про то, что нравится (или нет) вообще: I enjoy watching people. I don't mind waiting. (Like, love, hate можно и с to: I love to swim — тоже правильно.)",
        "Would like + to — про конкретное желание сейчас: Would you like to try it? I'd like to sit outside.",
      ],
      examples: [
        { ru: "I love walking on the beach in the morning.", en: "Я обожаю гулять по пляжу утром." },
        { ru: "Would you like to join us?", en: "Хотите к нам присоединиться?" },
      ],
    },
  ],
  tasks: [
    listen("enmi3-t1", "Послушай. Что нравится Мурзику?", "I enjoy watching people play dominoes. They slam the tiles so loudly!", [
      ["Смотреть, как играют в домино.", true],
      ["Играть в карты.", false],
      ["Пить чай.", false],
    ]),
    choice("enmi3-t2", "Как сказать «Я обожаю гулять по пляжу утром»?", [
      ["I love walking on the beach in the morning.", true],
      ["I love walk on the beach in the morning.", false],
      ["I'd love walking on the beach yesterday.", false],
    ], { skill: "grammar" }),
    fill("enmi3-t3", "Выбери правильную форму: «Хотите к нам присоединиться?»", "Would you like", "us?", "to join", ["to join", "joining", "join"], { skill: "grammar" }),
    read("enmi3-t4", "Прочитай меню у окошка. Сколько стоит кубинский кофе?", "YOLANDA'S — LA VENTANITA\nCafecito — $1.50\nCafé con leche — $3\nPastelito (guava) — $2\nCuban sandwich — $9", [
      ["1 доллар 50 центов.", true],
      ["3 доллара.", false],
      ["9 долларов.", false],
    ]),
    match("enmi3-t5", "Соедини пары.", [
      ["a cafecito", "кубинский кофе"],
      ["Would you like to try it?", "Хотите попробовать?"],
      ["Do you mind sharing your table?", "Вы не против сесть вместе за ваш столик?"],
      ["Everyone speaks Spanish here.", "Здесь все говорят по-испански."],
    ], { skill: "words" }),
    tf("enmi3-t6", "Сегодня утром в кафе пусто.", false, "listening"),
    speak("enmi3-t7", "What do you enjoy doing on vacation?", "I enjoy walking around old towns and trying local coffee. I don't mind getting up early.", "Мне нравится гулять по старым городам и пробовать местный кофе. Я не против рано вставать.", {
      help: "Расскажи вслух, что тебе нравится делать в отпуске: I enjoy…, I don't mind…",
    }),
  ],
  reward: {
    itemId: "cafecito-cup",
    itemName: "Чашечка для кафесито",
    itemNameRu: "Cafecito cup",
    ru: "A tiny cup for very strong coffee!",
    en: "Крошечная чашка для очень крепкого кофе!",
    a11y: "На тумбочке в номере мотеля стоит крошечная белая чашечка с синими цветами и нарисованной пальмой.",
    image: p("cafecito-cup"),
    steps: ["Йоланда дарит Мурзику крошечную чашечку.", "«Для настоящего кофе много не надо».", "Мурзик пьёт из неё молоко.", "Йоланда делает вид, что не видит."],
    bridge: "«Вы ведь повара? — спрашивает Йоланда. — Тогда приходите вечером. Научу делать кубинский сэндвич. Только приходите голодными»."
  },
};

const miami4: Lesson = {
  id: "en-a2-miami-4",
  level: "A2",
  cityId: "en-miami",
  number: 4,
  title: "The Cuban sandwich — Кубинский сэндвич",
  minutes: 8,
  goals: ["Понять рецепт", "Remember to / don't forget to", "Finish + -ing"],
  vocabNote: "Remember to / Don't forget to + глагол — «не забудь сделать». Finish + -ing — закончить делать что-то.",
  vocab: [
    v("enmi4-1", "Cuban bread", "кубинский хлеб (длинный, с тонкой хрустящей корочкой)", "Длинный золотистый батон.", "Послушать Cuban bread", p("l4-1")),
    v("enmi4-2", "roast pork, ham and Swiss cheese", "запечённая свинина, ветчина и швейцарский сыр", "Слои мяса и сыра на доске.", "Послушать roast pork, ham and Swiss cheese", p("l4-2")),
    v("enmi4-3", "Don't forget to add the pickles.", "Не забудь положить маринованные огурцы.", "Йоланда грозит пальцем и показывает на банку огурцов.", "Послушать Don't forget to add the pickles", p("l4-3")),
    v("enmi4-4", "Remember to spread the mustard.", "Не забудь намазать горчицу.", "Нож с жёлтой горчицей над хлебом.", "Послушать Remember to spread the mustard", p("l4-4")),
    v("enmi4-5", "Press it until it's flat and crispy.", "Прижми, пока не станет плоским и хрустящим.", "Сэндвич под тяжёлым прессом, видно пар.", "Послушать Press it until it's flat and crispy", p("l4-5")),
    v("enmi4-6", "Have you finished cutting?", "Ты закончил(а) резать?", "Том нарезает свинину тонкими ломтиками.", "Послушать Have you finished cutting", p("l4-6")),
    v("enmi4-7", "Cut it diagonally.", "Разрежь по диагонали.", "Готовый сэндвич разрезан наискосок.", "Послушать Cut it diagonally", p("l4-7")),
    v("enmi4-8", "My mouth is watering.", "У меня слюнки текут.", "Мурзик облизывается, глядя на сэндвич.", "Послушать My mouth is watering", p("l4-8")),
  ],
  letters: [
    letter("mustard = [мАстэрд]", "u = короткое [а]: mustard, butter, cup.", "spread the mustard", "намазать горчицу"),
    letter("diagonally = [дайЭгэнэли]", "Ударение на второй слог: di-AG-o-nal-ly.", "Cut it diagonally.", "Разрежь по диагонали."),
  ],
  dialogue: {
    title: "Кухня Йоланды",
    note: "Горячий пресс — дело Йоланды и Тома. Мурзик раскладывает огурцы и следит, чтобы никто не забыл горчицу.",
    lines: [
      line("yolanda", "First, Cuban bread. Cut it in half lengthwise. Then roast pork, ham and Swiss cheese.", "Сначала кубинский хлеб. Разрежьте вдоль пополам. Потом запечённая свинина, ветчина и швейцарский сыр."),
      line("murzik", "And pickles?", "А огурцы?"),
      line("yolanda", "Yes! Don't forget to add the pickles. And remember to spread the mustard.", "Да! Не забудь положить маринованные огурцы. И не забудь намазать горчицу."),
      line("yolanda", "Tom, have you finished cutting the pork?", "Том, ты закончил резать свинину?"),
      line("tom", "Almost. OK — finished!", "Почти. Всё — закончил!"),
      line("yolanda", "Now I'll press it until it's flat and crispy. Careful, it's hot. Then cut it diagonally.", "Теперь я прижму его прессом, пока не станет плоским и хрустящим. Осторожно, горячо. Потом разрежем по диагонали."),
      line("murzik", "My mouth is watering!", "У меня слюнки текут!"),
    ],
    gist: choice("enmi4-d1", "Как разрезают готовый сэндвич?", [
      ["По диагонали.", true],
      ["На маленькие кубики.", false],
      ["Не режут вообще.", false],
    ]),
  },
  grammar: [
    {
      title: "Remember to, forget to, finish -ing",
      paragraphs: [
        "Remember to / Don't forget to + глагол — не забудь сделать (в будущем): Remember to spread the mustard. Don't forget to call Gran!",
        "Finish + -ing: Have you finished cutting? I finished packing.",
      ],
      examples: [
        { ru: "Don't forget to turn off the oven.", en: "Не забудь выключить духовку." },
        { ru: "When I finish cooking, I'll call you.", en: "Когда закончу готовить, позвоню тебе." },
      ],
    },
  ],
  tasks: [
    listen("enmi4-t1", "Послушай. Что кладут в сэндвич?", "First, Cuban bread. Cut it in half lengthwise. Then roast pork, ham and Swiss cheese.", [
      ["Свинину, ветчину и швейцарский сыр.", true],
      ["Курицу и салат.", false],
      ["Рыбу и рис.", false],
    ]),
    choice("enmi4-t2", "Как сказать «Не забудь выключить духовку»?", [
      ["Don't forget to turn off the oven.", true],
      ["Don't forget turning off the oven.", false],
      ["Don't forget turn off the oven.", false],
    ], { skill: "grammar" }),
    fill("enmi4-t3", "Выбери правильную форму: «Ты закончил(а) резать?»", "Have you finished", "?", "cutting", ["cutting", "to cut", "cut"], { skill: "grammar" }),
    read("enmi4-t4", "Прочитай рецепт Йоланды. Что делают последним?", "YOLANDA'S CUBANO\n1. Cuban bread, cut in half lengthwise\n2. Mustard, roast pork, ham, Swiss cheese, pickles\n3. Press until flat and crispy (careful — hot!)\n4. Cut diagonally and enjoy!", [
      ["Разрезают по диагонали.", true],
      ["Мажут горчицу.", false],
      ["Кладут огурцы.", false],
    ]),
    match("enmi4-t5", "Соедини пары.", [
      ["Cuban bread", "кубинский хлеб"],
      ["Remember to spread the mustard.", "Не забудь намазать горчицу."],
      ["Cut it diagonally.", "Разрежь по диагонали."],
      ["My mouth is watering.", "У меня слюнки текут."],
    ], { skill: "words" }),
    tf("enmi4-t6", "Горячим прессом пользуется Мурзик.", false, "listening"),
    speak("enmi4-t7", "Your friend is cooking for the first time. Give two reminders.", "Remember to wash your hands. And don't forget to turn off the stove when you finish cooking!", "Не забудь вымыть руки. И не забудь выключить плиту, когда закончишь готовить!", {
      help: "Дай вслух два напоминания: Remember to…, Don't forget to…",
    }),
  ],
  reward: {
    itemId: "sandwich-press",
    itemName: "Пресс для сэндвичей",
    itemNameRu: "Sandwich press",
    ru: "Flat and crispy — every time!",
    en: "Плоский и хрустящий — каждый раз!",
    a11y: "На прилавке жёлтого фургона стоит маленький металлический пресс для сэндвичей с красной ручкой — теперь он поедет с Габи.",
    image: p("sandwich-press"),
    steps: ["Сэндвичи получились хрустящими.", "Йоланда дарит им старый маленький пресс.", "«У меня есть новый. А этот видел полвека сэндвичей».", "Мурзик гладит его, как кота."],
    bridge: "За ужином к Йоланде приходит внучка, Габи. Она рассматривает жёлтый фургон очень внимательно — слишком внимательно.",
  },
};

const miami5: Lesson = {
  id: "en-a2-miami-5",
  level: "A2",
  cityId: "en-miami",
  number: 5,
  title: "Gabi's dream — Мечта Габи",
  minutes: 8,
  goals: ["Рассказать о мечтах и планах", "Plan to / hope to / dream of + -ing", "Поддержать человека"],
  vocabNote: "Dream of + -ing — мечтать о том, чтобы… Plan to / hope to + глагол — планировать, надеяться. Give up + -ing — бросить (делать).",
  vocab: [
    v("enmi5-1", "I dream of having my own food truck.", "Я мечтаю о своём фургоне с едой.", "Габи смотрит на жёлтый фургон с сияющими глазами.", "Послушать I dream of having my own food truck", p("l5-1")),
    v("enmi5-2", "I'm saving money.", "Я коплю деньги.", "Банка с монетами и купюрами на подоконнике.", "Послушать I'm saving money", p("l5-2")),
    v("enmi5-3", "I plan to open it next year.", "Я планирую открыть его в следующем году.", "Календарь на следующий год, обведённый красным.", "Послушать I plan to open it next year", p("l5-3")),
    v("enmi5-4", "Trucks are so expensive.", "Фургоны такие дорогие.", "Объявление о продаже фургона с огромной ценой.", "Послушать Trucks are so expensive", p("l5-4")),
    v("enmi5-5", "Don't give up!", "Не сдавайся!", "Мурзик кладёт лапку Габи на руку.", "Послушать Don't give up", p("l5-5")),
    v("enmi5-6", "Keep trying.", "Продолжай пытаться.", "Том ободряюще кивает.", "Послушать Keep trying", p("l5-6")),
    v("enmi5-7", "Grandma's recipes", "бабушкины рецепты", "Старая тетрадь Йоланды с пятнами кофе.", "Послушать Grandma's recipes", p("l5-7")),
    v("enmi5-8", "That's exactly how we started.", "Мы начинали точно так же.", "Мурзик и Том переглядываются.", "Послушать That's exactly how we started", p("l5-8")),
  ],
  letters: [
    letter("exactly = [игзЭктли]", "x здесь звучит как [гз]: exactly, example.", "That's exactly right.", "Точно так."),
    letter("saving = [сЭйвинг]", "a перед согласной и e (save) = [эй]; e исчезает перед -ing.", "I'm saving money.", "Я коплю деньги."),
  ],
  dialogue: {
    title: "Вечер на веранде",
    note: "Габи — внучка Йоланды, ей около 25. Она работает официанткой и по вечерам учится у бабушки готовить.",
    lines: [
      line("gabi", "I dream of having my own food truck. With Grandma's recipes.", "Я мечтаю о своём фургоне с едой. С бабушкиными рецептами."),
      line("murzik", "That's exactly how we started! Our café, Gran's recipes, an old van…", "Мы начинали точно так же! Наше кафе, бабушкины рецепты, старый фургон…"),
      line("gabi", "I'm saving money. I plan to open it next year. But trucks are so expensive.", "Я коплю деньги. Планирую открыть его в следующем году. Но фургоны такие дорогие."),
      line("tom", "Don't give up! Keep trying.", "Не сдавайся! Продолжай пытаться."),
      line("yolanda", "She never stops working. She's a waitress during the day and cooks with me in the evenings.", "Она никогда не перестаёт работать. Днём официантка, а по вечерам готовит со мной."),
      line("murzik", "Tom… we're flying home in two days. And Sunny…", "Том… мы через два дня летим домой. А «Sunny»…"),
      line("tom", "I'm thinking the same thing.", "Я думаю о том же."),
    ],
    gist: choice("enmi5-d1", "О чём мечтает Габи?", [
      ["О своём фургоне с едой.", true],
      ["О поездке в Лондон.", false],
      ["О новом кафе в Маленькой Гаване.", false],
    ]),
  },
  grammar: [
    {
      title: "Мечты и планы",
      paragraphs: [
        "Plan to / hope to / want to + глагол: I plan to open it next year. Dream of + -ing (после предлога всегда -ing!): I dream of having a truck.",
        "Give up + -ing — бросить: Don't give up! He gave up smoking. Keep + -ing — продолжать: Keep trying. Never stop + -ing: She never stops working.",
      ],
      examples: [
        { ru: "I dream of traveling around the world.", en: "Я мечтаю путешествовать по миру." },
        { ru: "She hopes to finish her course next year.", en: "Она надеется закончить курс в следующем году." },
      ],
    },
  ],
  tasks: [
    listen("enmi5-t1", "Послушай. Когда Габи планирует открыть фургон?", "I'm saving money. I plan to open it next year. But trucks are so expensive.", [
      ["В следующем году.", true],
      ["Завтра.", false],
      ["Через десять лет.", false],
    ]),
    choice("enmi5-t2", "Как сказать «Я мечтаю путешествовать по миру»?", [
      ["I dream of traveling around the world.", true],
      ["I dream to traveling around the world.", false],
      ["I dream of travel around the world.", false],
    ], { skill: "grammar" }),
    fill("enmi5-t3", "Выбери правильную форму: «Продолжай пытаться».", "Keep", ".", "trying", ["trying", "to try", "try"], { skill: "grammar" }),
    read("enmi5-t4", "Прочитай листок у Габи на холодильнике. Сколько ей ещё нужно накопить?", "MY FOOD TRUCK FUND\nGoal: $30,000\nSaved: $8,500\nStill to go: $21,500\nDon't give up, Gabi!", [
      ["21 500 долларов.", true],
      ["8 500 долларов.", false],
      ["30 000 долларов.", false],
    ]),
    match("enmi5-t5", "Соедини пары.", [
      ["I'm saving money.", "Я коплю деньги."],
      ["Don't give up!", "Не сдавайся!"],
      ["Keep trying.", "Продолжай пытаться."],
      ["That's exactly how we started.", "Мы начинали точно так же."],
    ], { skill: "words" }),
    tf("enmi5-t6", "Габи уже купила фургон.", false, "listening"),
    speak("enmi5-t7", "What do you dream of doing? What do you plan to do?", "I dream of living by the sea. I plan to learn English well and I hope to travel next summer.", "Я мечтаю жить у моря. Планирую хорошо выучить английский и надеюсь поехать путешествовать следующим летом.", {
      help: "Расскажи вслух о мечтах и планах: I dream of…, I plan to…, I hope to…",
    }),
  ],
  reward: {
    itemId: "dominoes",
    itemName: "Домино",
    itemNameRu: "Dominoes",
    ru: "Clack! Clack! — like in Little Havana!",
    en: "Стук! Стук! — как в Маленькой Гаване!",
    a11y: "На тумбочке в номере мотеля лежит коробка старого домино с белыми костяшками и чёрными точками.",
    image: p("dominoes"),
    steps: ["Старик из парка учит Мурзика играть в домино.", "Мурзик проигрывает пять раз подряд.", "На шестой — выигрывает.", "Старик дарит ему коробку домино: «Ты не сдаёшься. Это главное»."],
    bridge: "Ночью Мурзик и Том долго говорят. Утром они идут к Йоланде с ключами в руке.",
  },
};

const miami6: Lesson = {
  id: "en-a2-miami-6",
  level: "A2",
  cityId: "en-miami",
  number: 6,
  title: "Pay it forward — Передай добро дальше",
  minutes: 8,
  goals: ["Сделать подарок и принять его", "Повторить глагол + to / -ing", "Выразить благодарность"],
  vocabNote: "Pay it forward — «передай добро дальше»: ответить на доброту добротой к другому человеку.",
  vocab: [
    v("enmi6-1", "We want you to have it.", "Мы хотим, чтобы он был у тебя.", "Том протягивает Габи ключи от «Sunny».", "Послушать We want you to have it", p("l6-1")),
    v("enmi6-2", "I can't accept this!", "Я не могу это принять!", "Габи отступает, прижав руки к щекам.", "Послушать I can't accept this", p("l6-2")),
    v("enmi6-3", "Someone gave it to us.", "Нам его тоже подарили.", "Фото Лолы у жёлтого фургона в Портленде.", "Послушать Someone gave it to us", p("l6-3")),
    v("enmi6-4", "Pay it forward.", "Передай добро дальше.", "Мурзик улыбается.", "Послушать Pay it forward", p("l6-4")),
    v("enmi6-5", "Promise to give it to someone one day.", "Обещай когда-нибудь подарить его кому-то.", "Мурзик протягивает лапку для обещания.", "Послушать Promise to give it to someone one day", p("l6-5")),
    v("enmi6-6", "I promise to take care of it.", "Обещаю беречь его.", "Габи и Мурзик скрепляют обещание рукой и лапой.", "Послушать I promise to take care of it", p("l6-6")),
    v("enmi6-7", "I don't know what to say.", "Не знаю, что сказать.", "Габи плачет и смеётся одновременно.", "Послушать I don't know what to say", p("l6-7")),
    v("enmi6-8", "Just say yes!", "Просто скажи «да»!", "Йоланда обнимает внучку.", "Послушать Just say yes", p("l6-8")),
  ],
  letters: [
    letter("accept = [эксЭпт]", "cc перед e = [кс]: accept, accent. Не путай с except [иксЭпт] — «кроме».", "I can't accept this!", "Я не могу это принять!"),
    letter("forward = [фО:рвэрд]", "Ударение на первый слог: FOR-ward.", "Pay it forward.", "Передай добро дальше."),
  ],
  dialogue: {
    title: "Ключи от «Sunny»",
    note: "В Портленде Лола отдала им свой старый фургон «Sunny». Теперь им лететь домой, а фургон останется в Америке.",
    lines: [
      line("tom", "Gabi, these are the keys to Sunny. We want you to have it.", "Габи, это ключи от «Sunny». Мы хотим, чтобы он был у тебя."),
      line("gabi", "What? No! I can't accept this!", "Что? Нет! Я не могу это принять!"),
      line("murzik", "Someone gave it to us — Lola, in Portland. Now we're paying it forward.", "Нам его тоже подарили — Лола, в Портленде. Теперь мы передаём добро дальше."),
      line("murzik", "Just promise to give it to someone one day.", "Только пообещай когда-нибудь подарить его кому-то."),
      line("gabi", "I promise to take care of it. I… I don't know what to say.", "Обещаю беречь его. Я… я не знаю, что сказать."),
      line("yolanda", "Just say yes, mi amor!", "Просто скажи «да», милая!"),
      line("gabi", "Yes! Thank you! I'll call it… \"Sunny Cubano\"!", "Да! Спасибо! Я назову его… «Sunny Cubano»!"),
    ],
    gist: choice("enmi6-d1", "Что Мурзик и Том дарят Габи?", [
      ["Жёлтый фургон «Sunny».", true],
      ["Свою книгу рецептов.", false],
      ["Билеты в Лондон.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем: to или -ing?",
      paragraphs: [
        "to + глагол после: want, would like, decide, hope, plan, need, promise, forget, remember (не забыть сделать). Want someone to…: We want you to have it.",
        "-ing после: enjoy, mind, finish, keep, stop, give up, can't stand, dream of, look forward to.",
      ],
      examples: [
        { ru: "We want you to keep it.", en: "Мы хотим, чтобы ты оставил(а) его себе." },
        { ru: "She promised to call every week.", en: "Она обещала звонить каждую неделю." },
      ],
    },
  ],
  tasks: [
    listen("enmi6-t1", "Послушай. Как Габи назовёт фургон?", "Yes! Thank you! I'll call it… \"Sunny Cubano\"!", [
      ["«Sunny Cubano».", true],
      ["«Hope on Wheels».", false],
      ["«Little Havana».", false],
    ]),
    choice("enmi6-t2", "Как сказать «Мы хотим, чтобы ты оставил(а) его себе»?", [
      ["We want you to keep it.", true],
      ["We want that you keep it.", false],
      ["We want you keeping it.", false],
    ], { skill: "grammar" }),
    fill("enmi6-t3", "Выбери правильную форму: «Она обещала звонить каждую неделю».", "She promised", "every week.", "to call", ["to call", "calling", "call"], { skill: "grammar" }),
    read("enmi6-t4", "Прочитай записку, которую Мурзик оставил в бардачке. Что они просят?", "Dear Gabi,\nThis truck came from Lola in Portland.\nDrive carefully, cook with love —\nand one day, pay it forward.\nMurzik & Tom", [
      ["Когда-нибудь передать добро дальше.", true],
      ["Вернуть фургон через год.", false],
      ["Продать фургон.", false],
    ]),
    match("enmi6-t5", "Соедини пары.", [
      ["I can't accept this!", "Я не могу это принять!"],
      ["Pay it forward.", "Передай добро дальше."],
      ["I don't know what to say.", "Не знаю, что сказать."],
      ["Just say yes!", "Просто скажи «да»!"],
    ], { skill: "words" }),
    tf("enmi6-t6", "Фургон «Sunny» раньше принадлежал Лоле из Портленда.", true, "listening"),
    speak("enmi6-t7", "Someone gives you a very big present. What do you say?", "I can't accept this! It's too much. I don't know what to say… Thank you so much! I promise to take care of it.", "Я не могу это принять! Это слишком. Не знаю, что сказать… Огромное спасибо! Обещаю беречь его.", {
      help: "Вслух прими большой подарок: удивись, поблагодари, пообещай.",
    }),
  ],
  reward: {
    itemId: "sunny-keys",
    itemName: "Фото: ключи от «Sunny»",
    itemNameRu: "Photo: Sunny's keys",
    ru: "Sunny has a new home!",
    en: "У «Sunny» новый дом!",
    a11y: "Фотография: Габи держит ключи от «Sunny» у жёлтого фургона; рядом Йоланда, Мурзик и Том.",
    image: p("sunny-keys"),
    steps: ["Том фотографирует Габи у фургона.", "Отправляет фото Лоле в Портленд.", "Лола отвечает: «Лучшее, что вы могли сделать!»", "Магнитная вывеска «Hope on Wheels» едет в чемодане домой."],
    bridge: "Завтра самолёт в Лондон. Сегодня — последний вечер в Майами. И очень много вещей, которые надо уложить.",
  },
};

const miami7: Lesson = {
  id: "en-a2-miami-7",
  level: "A2",
  cityId: "en-miami",
  number: 7,
  title: "Miami exam — Экзамен: Майами",
  minutes: 9,
  goals: ["Понять длинный рассказ на слух", "Говорить о планах и ожиданиях", "Повторить всё из Майами"],
  vocabNote: "Урок 7 — экзамен города: длинная аудиоистория и повторение всего из Майами. Look forward to + -ing — с нетерпением ждать.",
  vocab: [
    v("enmi7-1", "Our seventeenth recipe!", "Наш семнадцатый рецепт!", "Мурзик держит карточку с рецептом кубинского сэндвича.", "Послушать Our seventeenth recipe", p("l7-1")),
    v("enmi7-2", "We need to pack.", "Нам нужно собрать вещи.", "Открытый чемодан и гора вещей на кровати.", "Послушать We need to pack", p("l7-2")),
    v("enmi7-3", "I'm looking forward to seeing Gran.", "Я с нетерпением жду встречи с бабушкой.", "Том смотрит на фото миссис Хоуп в телефоне.", "Послушать I'm looking forward to seeing Gran", p("l7-3")),
    v("enmi7-4", "the festival in London", "фестиваль в Лондоне", "Афиша уличного фестиваля еды в Лондоне.", "Послушать the festival in London", p("l7-4")),
    v("enmi7-5", "a sunset on the beach", "закат на пляже", "Оранжевое солнце садится в океан, пальмы.", "Послушать a sunset on the beach", p("l7-5")),
    v("enmi7-6", "We'll miss Miami.", "Мы будем скучать по Майами.", "Мурзик и Том сидят на песке.", "Послушать We'll miss Miami", p("l7-6")),
    v("enmi7-7", "Have a safe flight!", "Хорошего полёта!", "Габи машет из окна жёлтого фургона.", "Послушать Have a safe flight", p("l7-7")),
    v("enmi7-8", "See you at the festival!", "Увидимся на фестивале!", "Йоланда подмигивает — у неё в руке билет.", "Послушать See you at the festival", p("l7-8")),
  ],
  letters: [
    letter("seventeenth = [сэвэнтИ:нс]", "Ударение на teen; th в конце глухой: кончик языка между зубами.", "our seventeenth recipe", "наш семнадцатый рецепт"),
  ],
  dialogue: {
    title: "Последний закат",
    note: "Look forward to — после to здесь идёт -ing: I'm looking forward to seeing you. Это исключение, его просто запоминают.",
    lines: [
      line("yolanda", "Here's my recipe for your road book. A real Cubano.", "Вот мой рецепт для вашей книги дороги. Настоящий кубинский сэндвич."),
      line("murzik", "Our seventeenth recipe! Only one city left — home.", "Наш семнадцатый рецепт! Остался только один город — дом."),
      line("tom", "We need to pack tonight. I'm looking forward to seeing Gran — and the festival in London.", "Сегодня надо собрать вещи. Я с нетерпением жду встречи с бабушкой — и фестиваля в Лондоне."),
      line("gabi", "We'll miss you! Have a safe flight!", "Мы будем по вам скучать! Хорошего полёта!"),
      line("yolanda", "And guess what? Gabi and I decided to come to the festival. See you in London!", "И знаете что? Мы с Габи решили приехать на фестиваль. Увидимся в Лондоне!"),
      line("murzik", "Really? Hooray! See you at the festival!", "Правда? Ура! Увидимся на фестивале!"),
    ],
    gist: choice("enmi7-d1", "Что решили Йоланда и Габи?", [
      ["Приехать на фестиваль в Лондон.", true],
      ["Продать фургон.", false],
      ["Переехать в Нэшвилл.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем Майами",
      paragraphs: [
        "to + глагол: want, would like, decide, hope, plan, need, promise, remember, forget. Want someone to: We want you to have it.",
        "-ing: enjoy, mind, finish, keep, stop, give up, can't stand, dream of, look forward to. Жалобы в гостинице: The AC stopped working. It keeps making noise. I apologize for the inconvenience.",
      ],
      examples: [
        { ru: "We decided to fly home, and we're looking forward to seeing everyone.", en: "Мы решили лететь домой и с нетерпением ждём встречи со всеми." },
        { ru: "Don't forget to pack the recipe book!", en: "Не забудь положить книгу рецептов!" },
      ],
    },
  ],
  tasks: [
    listen("enmi7-t1", "Аудиоистория: Йоланда рассказывает о своей жизни. Сколько ей было лет, когда она приехала в Майами?", "I came to Miami from Cuba when I was twenty. I didn't speak English. I started working in a small café, washing dishes. I enjoyed watching the cook, and soon I learned to make everything. Thirty years later I decided to open my own café. Now Gabi wants to have her own truck. In our family, we never stop dreaming.", [
      ["Двадцать.", true],
      ["Тридцать.", false],
      ["Пятьдесят.", false],
    ]),
    listen("enmi7-t2", "Послушай конец рассказа. Чего никогда не перестают делать в семье Йоланды?", "Now Gabi wants to have her own truck. In our family, we never stop dreaming.", [
      ["Мечтать.", true],
      ["Работать по ночам.", false],
      ["Играть в домино.", false],
    ]),
    choice("enmi7-t3", "Как сказать «Не забудь положить книгу рецептов!»?", [
      ["Don't forget to pack the recipe book!", true],
      ["Don't forget packing the recipe book!", false],
      ["Don't forget pack the recipe book!", false],
    ], { skill: "grammar" }),
    read("enmi7-t4", "Прочитай посадочный талон. Куда летят Мурзик и Том?", "BOARDING PASS\nMIAMI (MIA) → LONDON (LHR)\nPassenger: HOPE / TOM + 1 cat\nBoarding: 6:10 pm · Departure: 6:50 pm", [
      ["В Лондон.", true],
      ["В Нэшвилл.", false],
      ["В Гавану.", false],
    ]),
    script("enmi7-t5", "Попрощайся с Йоландой и Габи.", [
      { speaker: "Габи", text: "We'll miss you! Have a safe flight!" },
      { speaker: "Ты", answer: "Thank you! We're looking forward to seeing you in London.", options: ["Thank you! We're looking forward to seeing you in London.", "Thank you! We're looking forward to see you in London.", "Thank you! The AC stopped working."] },
      { speaker: "Йоланда", text: "Don't forget to write!" },
      { speaker: "Ты", answer: "We promise to send lots of photos!", options: ["We promise to send lots of photos!", "We promise sending lots of photos!", "We promise send photos yesterday!"] },
    ], { skill: "review" }),
    match("enmi7-t6", "Повторяем Майами: соедини пары.", [
      ["an ocean view", "вид на океан"],
      ["for now", "пока что"],
      ["a cafecito", "кубинский кофе"],
      ["Pay it forward.", "Передай добро дальше."],
    ], { skill: "review" }),
    speak("enmi7-t7", "What are you looking forward to? What do you plan to do?", "I'm looking forward to my summer vacation. I plan to visit my family, and I hope to learn to cook something new.", "Я с нетерпением жду летнего отпуска. Планирую навестить семью и надеюсь научиться готовить что-нибудь новое.", {
      help: "Расскажи вслух: I'm looking forward to…, I plan to…, I hope to…",
    }),
  ],
  reward: {
    itemId: "recipe-cuban-sandwich",
    itemName: "Рецепт «Cuban sandwich»",
    itemNameRu: "Cuban sandwich recipe card",
    ru: "Our seventeenth recipe — the last one on the road!",
    en: "Наш семнадцатый рецепт — последний в дороге!",
    a11y: "Карточка с рецептом кубинского сэндвича вклеена на семнадцатую страницу голубой тетради; рядом — маленькое фото Габи у жёлтого фургона.",
    image: p("recipe-cuban-sandwich"),
    steps: ["Мурзик вклеивает рецепт Йоланды на семнадцатую страницу.", "Рядом — фото Габи у «Sunny».", "Осталась одна пустая страница — для рецепта миссис Хоуп.", "Самолёт в Лондон. Домой. На фестиваль."],
  },
};

const story: CityStory = {
  home: {
    name: "Розовый мотель",
    nameRu: "The pink motel",
    image: p("home"),
    a11y: "Розовый мотель у пляжа; на парковке сзади — жёлтый фургон «Sunny» под пальмой.",
  },
  keepsakeId: "recipe-cuban-sandwich",
  welcomeRu: "Hello, Miami!",
  welcomeEn: "Привет, Майами!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том в Майами: бирюзовый океан, белый песок, пальмы и пастельные домики.",
  departureImage: p("departure"),
  departureA11y: "Габи за рулём жёлтого фургона «Sunny Cubano» везёт Мурзика и Тома в аэропорт; Йоланда машет с тротуара.",
  finale: [
    {
      image: p("finale-1"),
      a11y: "В номере мотеля — открытый чемодан: брелок-фламинго, веер, чашечка для кофе, домино, фото с ключами и рецепт кубинского сэндвича. Маленький пресс Йоланды остался в фургоне у Габи.",
      lines: [
        { en: "Сломанный кондиционер, крепкий кофе и подарок, который передали дальше." },
        { en: "В книге дороги семнадцатый рецепт: кубинский сэндвич Йоланды." },
      ],
    },
    {
      image: p("finale-2"),
      a11y: "Мурзик, Том, Габи и Йоланда сидят на песке и смотрят на закат над океаном.",
      lines: [
        { ru: "Miami complete!", en: "Майами пройден!" },
        { en: "7 / 7 уроков" },
        { ru: "We decided to pay it forward — and we're looking forward to going home!", en: "Мы решили передать добро дальше — и с нетерпением ждём возвращения домой!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Габи за рулём жёлтого фургона «Sunny Cubano» везёт Мурзика и Тома в аэропорт; Йоланда машет с тротуара.",
      lines: [
        { ru: "Goodbye, Miami! Thank you, Yolanda, Gabi and Luis!", en: "До свидания, Майами! Спасибо, Йоланда, Габи и Луис!" },
        { ru: "Next stop: London — home!", en: "Следующая остановка: Лондон — дом!" },
      ],
    },
    {
      image: p("finale-4"),
      a11y: "Самолёт летит над океаном на восток; в иллюминаторе — Мурзик с голубой тетрадью рецептов.",
      lines: [{ ru: "Miami → London", en: "Майами → Лондон" }],
    },
    {
      image: pic("en/london-festival/arrival"),
      a11y: "Мурзик и Том снова в Лондоне: голубой фургон «Hope on Wheels» ждёт у кафе с синей дверью, улицу украшают флажки фестиваля.",
      lines: [{ ru: "Hello again, London!", en: "Снова привет, Лондон!" }],
    },
  ],
};

export const enMiami = {
  id: "en-miami",
  name: "Майами",
  nameEn: "Miami",
  lessons: [miami1, miami2, miami3, miami4, miami5, miami6, miami7],
  story,
};
