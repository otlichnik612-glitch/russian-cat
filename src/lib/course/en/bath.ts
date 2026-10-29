import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "../tr/make";

/* Бат · «Сколько стоит?» · this / that / these / those, a / an, множественное число, числа до 100, цены, покупки. */

const p = (name: string) => pic(`en/bath/${name}`);

const bath1: Lesson = {
  id: "en-a1-bath-1",
  level: "A1",
  cityId: "en-bath",
  number: 1,
  title: "This or that? — Это или то?",
  minutes: 7,
  goals: ["Спросить «Что это?»", "Сказать this (это, рядом) и that (то, подальше)", "Поставить a или an"],
  vocabNote: "This — то, что рядом, под рукой. That — то, что подальше. A ставят перед согласным звуком (a bun), an — перед гласным (an apple).",
  vocab: [
    v("enba1-1", "What's this?", "Что это?", "Мурзик держит в лапах круглую пышную булочку.", "Послушать What's this", p("l1-1")),
    v("enba1-2", "It's a bun.", "Это булочка.", "Большая пышная булочка на деревянной доске.", "Послушать It's a bun", p("l1-2")),
    v("enba1-3", "This is a cake.", "Это торт.", "Миссис Грин держит в руках торт с ягодами.", "Послушать This is a cake", p("l1-3")),
    v("enba1-4", "That is a pie.", "А то — пирог.", "Мурзик показывает лапой на пирог на дальней полке.", "Послушать That is a pie", p("l1-4")),
    v("enba1-5", "an apple", "яблоко", "Красное блестящее яблоко.", "Послушать an apple", p("l1-5")),
    v("enba1-6", "an egg", "яйцо", "Одно белое яйцо в маленькой подставке.", "Послушать an egg", p("l1-6")),
    v("enba1-7", "What's that?", "А что это там?", "Мурзик показывает на огромную булку в витрине.", "Послушать What's that", p("l1-7")),
  ],
  dialogue: {
    title: "Пекарня миссис Грин",
    note: "Миссис Грин — пекарь, старая подруга миссис Хоуп. Sally Lunn bun — знаменитая большая булочка из Бата.",
    lines: [
      line("green", "Hello! You're Murzik! Come in, come in!", "Здравствуй! Ты Мурзик! Заходи, заходи!"),
      line("murzik", "Hello, Mrs Green! What's this?", "Здравствуйте, миссис Грин! Что это?"),
      line("green", "It's a bun. A Sally Lunn bun.", "Это булочка. Булочка «Салли Ланн»."),
      line("murzik", "It's very big! And what's that?", "Она очень большая! А что это там?"),
      line("green", "That's an apple pie.", "А то — яблочный пирог."),
      line("tom", "And this is a cake! Mmm!", "А вот это торт! М-м-м!"),
    ],
    gist: choice("enba1-d1", "Где Мурзик?", [
      ["В пекарне.", true],
      ["В кафе миссис Хоуп.", false],
      ["На рынке.", false],
    ]),
  },
  grammar: [
    {
      title: "This и that, a и an",
      paragraphs: [
        "This — «это (здесь)», that — «то (там)»: This is a cake. That is a pie.",
        "Перед словом об одной вещи ставят a: a bun, a cake. Если слово начинается с гласного звука — an: an apple, an egg, an orange. Так легче произносить.",
      ],
      examples: [
        { ru: "This is an apple.", en: "Это яблоко." },
        { ru: "That's a pie.", en: "А то — пирог." },
      ],
    },
  ],
  tasks: [
    choice("enba1-t1", "Выбери правильно: «яйцо»", [
      ["an egg", true],
      ["a egg", false],
      ["egg a", false],
    ], { skill: "grammar" }),
    listen("enba1-t2", "Послушай. Что это?", "It's an orange.", [
      ["Апельсин.", true],
      ["Яблоко.", false],
      ["Булочка.", false],
    ]),
    match("enba1-t3", "Соедини пары.", [
      ["a bun", "булочка"],
      ["a cake", "торт"],
      ["a pie", "пирог"],
      ["an apple", "яблоко"],
    ], { skill: "words" }),
    missing("enba1-t4", "Какой буквы не хватает? («торт»)", "ca", "e", "k", ["k", "c", "ck"]),
    speak("enba1-t5", "What's this?", "It's an apple.", "Это яблоко.", { help: "Ответь вслух, что это." }),
    choice("enba1-t6", "Как сказать «Он фотограф»?", [
      ["He's a photographer.", true],
      ["He's photographer.", false],
      ["He photographer.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "jug",
    itemName: "Молочник",
    itemNameRu: "Milk jug",
    ru: "Hooray! A milk jug!",
    en: "Ура! Молочник!",
    a11y: "Маленький белый фарфоровый молочник в форме коровы стоит на подоконнике.",
    image: p("jug"),
    steps: ["Миссис Грин показывает Мурзику его квартирку над пекарней.", "На подоконнике — молочник в форме коровы.", "«For your tea!» — «Для твоего чая!»", "Мурзик смеётся: какая смешная корова!"],
    bridge: "Утром в пекарне много работы: нужно посчитать все чашки и тарелки.",
  },
};

const bath2: Lesson = {
  id: "en-a1-bath-2",
  level: "A1",
  cityId: "en-bath",
  number: 2,
  title: "One cup, two cups — Одна чашка, две чашки",
  minutes: 7,
  goals: ["Сказать о нескольких вещах: cups, glasses", "Сказать these и those", "Запомнить особые слова: people, children"],
  vocabNote: "Обычно к слову добавляют -s: cup — cups. После s, sh, ch, x — -es: glass — glasses. Некоторые слова меняются целиком: child — children, person — people.",
  vocab: [
    v("enba2-1", "two cups", "две чашки", "Две чашки стоят рядом на блюдцах.", "Послушать two cups", p("l2-1")),
    v("enba2-2", "three glasses", "три стакана", "Три стеклянных стакана с водой.", "Послушать three glasses", p("l2-2")),
    v("enba2-3", "These are plates.", "Это тарелки.", "Мурзик держит стопку тарелок.", "Послушать These are plates", p("l2-3")),
    v("enba2-4", "Those are spoons.", "А там — ложки.", "Мурзик показывает на ложки в дальней банке.", "Послушать Those are spoons", p("l2-4")),
    v("enba2-5", "children", "дети", "Двое детей прижались носами к витрине пекарни.", "Послушать children", p("l2-5")),
    v("enba2-6", "people", "люди", "У пекарни очередь из людей.", "Послушать people", p("l2-6")),
    v("enba2-7", "How many people?", "Сколько человек?", "Миссис Грин выглядывает в окно на очередь.", "Послушать How many people", p("l2-7")),
  ],
  dialogue: {
    title: "Утро в пекарне",
    note: "Queue [кью] — «очередь». Англичане очень любят стоять в очереди ровно и спокойно.",
    lines: [
      line("green", "Murzik, how many cups?", "Мурзик, сколько чашек?"),
      line("murzik", "Ten cups and ten plates.", "Десять чашек и десять тарелок."),
      line("green", "Good. And these glasses? And those spoons?", "Хорошо. А эти стаканы? А те ложки?"),
      line("murzik", "Six glasses… and eight spoons.", "Шесть стаканов… и восемь ложек."),
      line("tom", "Look! A queue! How many people?", "Смотрите! Очередь! Сколько человек?"),
      line("green", "Twelve people and two children. Let's open!", "Двенадцать человек и двое детей. Открываемся!"),
    ],
    gist: choice("enba2-d1", "Сколько людей в очереди?", [
      ["Двенадцать взрослых и двое детей.", true],
      ["Десять человек.", false],
      ["Никого нет.", false],
    ]),
  },
  grammar: [
    {
      title: "Много вещей: -s, -es, these, those",
      paragraphs: [
        "Много: cup — cups, plate — plates, glass — glasses. Особые слова: child — children, person — people, man — men, woman — women.",
        "Для многих вещей вместо this / that говорят these (эти, рядом) и those (те, подальше): These are cups. Those are plates. Глагол — are.",
      ],
      examples: [
        { ru: "These are my children.", en: "Это мои дети." },
        { ru: "Those are cakes.", en: "А там — торты." },
      ],
    },
  ],
  tasks: [
    choice("enba2-t1", "Как сказать «Это чашки» (рядом)?", [
      ["These are cups.", true],
      ["This is cups.", false],
      ["These is cups.", false],
    ], { skill: "grammar" }),
    listen("enba2-t2", "Послушай. Сколько стаканов?", "Five glasses, please.", [
      ["Пять.", true],
      ["Четыре.", false],
      ["Пятнадцать.", false],
    ]),
    match("enba2-t3", "Соедини пары.", [
      ["child", "children"],
      ["person", "people"],
      ["glass", "glasses"],
      ["cup", "cups"],
    ], { skill: "words" }),
    missing("enba2-t4", "Какой буквы не хватает? («ложка»)", "sp", "on", "o", ["o", "u", "a"]),
    speak("enba2-t5", "How many cups?", "Two cups, please.", "Две чашки, пожалуйста.", { help: "Ответь вслух." }),
    choice("enba2-t6", "Выбери правильно: «яблоко»", [
      ["an apple", true],
      ["a apple", false],
      ["apple an", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "vase",
    itemName: "Ваза с цветами",
    itemNameRu: "Vase",
    ru: "Hooray! A vase of flowers!",
    en: "Ура! Ваза с цветами!",
    a11y: "Голубая стеклянная ваза с букетом садовых цветов стоит на столе.",
    image: p("vase"),
    steps: ["После работы дети из очереди приносят Мурзику цветы.", "«Thank you for the buns!» — «Спасибо за булочки!»", "Миссис Грин находит голубую вазу.", "Цветы стоят на столе у окна."],
    bridge: "Днём Мурзик учится считать деньги в кассе.",
  },
};

const bath3: Lesson = {
  id: "en-a1-bath-3",
  level: "A1",
  cityId: "en-bath",
  number: 3,
  title: "Числа до 100",
  minutes: 7,
  goals: ["Считать десятками до ста", "Назвать любое число до ста", "Не путать thirteen и thirty"],
  vocabNote: "Десятки кончаются на -ty: thirty, forty, fifty. Двадцать один — twenty-one, через чёрточку. Сто — a hundred или one hundred.",
  vocab: [
    v("enba3-1", "thirty, forty", "тридцать, сорок", "Сорок булочек на больших противнях.", "Послушать thirty, forty", p("l3-1")),
    v("enba3-2", "fifty, sixty", "пятьдесят, шестьдесят", "Шестьдесят печений в больших банках.", "Послушать fifty, sixty", p("l3-2")),
    v("enba3-3", "seventy, eighty, ninety", "семьдесят, восемьдесят, девяносто", "Старушка с тортом, на торте свечка в виде цифры 90.", "Послушать seventy, eighty, ninety", p("l3-3")),
    v("enba3-4", "a hundred", "сто", "Огромная гора из ста булочек.", "Послушать a hundred", p("l3-4")),
    v("enba3-5", "twenty-one", "двадцать один", "Двадцать одна свеча на торте.", "Послушать twenty-one", p("l3-5")),
    v("enba3-6", "thirteen or thirty?", "тринадцать или тридцать?", "Две таблички: 13 и 30, Мурзик растерянно смотрит на обе.", "Послушать thirteen or thirty", p("l3-6")),
    v("enba3-7", "It's ninety-nine.", "Это девяносто девять.", "Мурзик показывает на ценник с числом 99.", "Послушать It's ninety-nine", p("l3-7")),
  ],
  dialogue: {
    title: "Заказ на праздник",
    note: "Order — «заказ». Party — «праздник, вечеринка».",
    lines: [
      line("green", "A big order! Forty buns for a party.", "Большой заказ! Сорок булочек на праздник."),
      line("murzik", "Fourteen or forty?", "Четырнадцать или сорок?"),
      line("green", "Forty! Four-zero.", "Сорок! Четыре-ноль."),
      line("murzik", "And how many cakes?", "А сколько тортов?"),
      line("green", "Three cakes and sixty biscuits.", "Три торта и шестьдесят печений."),
      line("tom", "That's a hundred and three things!", "Это сто три штуки!"),
    ],
    gist: choice("enba3-d1", "Сколько булочек в заказе?", [
      ["Сорок.", true],
      ["Четырнадцать.", false],
      ["Сто.", false],
    ]),
  },
  grammar: [
    {
      title: "Числа до ста",
      paragraphs: [
        "Десятки: twenty, thirty, forty (без u!), fifty, sixty, seventy, eighty, ninety. Сто — a hundred.",
        "Число из двух частей пишут через дефис: twenty-five, forty-two, ninety-nine. -teen (13–19) — ударение на конце, -ty (30, 40…) — ударение в начале.",
      ],
      examples: [
        { ru: "forty-five", en: "сорок пять" },
        { ru: "I'm thirty-three.", en: "Мне тридцать три." },
      ],
    },
  ],
  tasks: [
    choice("enba3-t1", "Как правильно написать «сорок»?", [
      ["forty", true],
      ["fourty", false],
      ["fourteen", false],
    ], { skill: "grammar" }),
    listen("enba3-t2", "Послушай. Какое число?", "sixty-two", [
      ["62", true],
      ["26", false],
      ["16", false],
    ]),
    match("enba3-t3", "Соедини пары.", [
      ["thirty", "30"],
      ["fifty", "50"],
      ["eighty", "80"],
      ["a hundred", "100"],
    ], { skill: "words" }),
    missing("enba3-t4", "Какой буквы не хватает? («девяносто»)", "nin", "ty", "e", ["e", "i", "a"]),
    speak("enba3-t5", "How old is your grandmother?", "She's seventy-five.", "Ей семьдесят пять.", { help: "Ответь вслух, назови число." }),
    choice("enba3-t6", "Как сказать «Это люди»?", [
      ["These are people.", true],
      ["This is peoples.", false],
      ["These is people.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "candle",
    itemName: "Свеча в подсвечнике",
    itemNameRu: "Candle",
    ru: "Hooray! A candle!",
    en: "Ура! Свеча!",
    a11y: "Высокая кремовая свеча в старинном латунном подсвечнике горит на столе.",
    image: p("candle"),
    steps: ["Заказ готов: сорок булочек, три торта и шестьдесят печений.", "Хозяйка праздника дарит Мурзику свечу.", "«Thank you, little baker!» — «Спасибо, маленький пекарь!»", "Вечером Мурзик зажигает её у окна."],
    bridge: "Завтра Мурзик сам будет стоять за кассой. Страшно!",
  },
};

const bath4: Lesson = {
  id: "en-a1-bath-4",
  level: "A1",
  cityId: "en-bath",
  number: 4,
  title: "How much is it? — Сколько стоит?",
  minutes: 7,
  goals: ["Спросить цену", "Назвать цену в фунтах и пенсах", "Сказать «дорого» и «дёшево»"],
  vocabNote: "Деньги в Британии — фунты и пенсы: £1 = 100p. Цену говорят так: £3.50 — three pounds fifty или просто three fifty.",
  vocab: [
    v("enba4-1", "How much is it?", "Сколько это стоит?", "Покупательница показывает на булочку в витрине.", "Послушать How much is it", p("l4-1")),
    v("enba4-2", "It's two pounds.", "Два фунта.", "Ценник: £2.", "Послушать It's two pounds", p("l4-2")),
    v("enba4-3", "three pounds fifty", "три фунта пятьдесят", "Ценник: £3.50.", "Послушать three pounds fifty", p("l4-3")),
    v("enba4-4", "Here you are.", "Вот, пожалуйста.", "Мурзик протягивает покупательнице пакет с булочкой.", "Послушать Here you are", p("l4-4")),
    v("enba4-5", "Your change.", "Ваша сдача.", "Мурзик кладёт монеты в ладонь покупательницы.", "Послушать Your change", p("l4-5")),
    v("enba4-6", "It's expensive.", "Это дорого.", "Покупательница поднимает брови, глядя на ценник у торта.", "Послушать It's expensive", p("l4-6")),
    v("enba4-7", "It's cheap.", "Это дёшево.", "Маленькое печенье с ценником 50p.", "Послушать It's cheap", p("l4-7")),
  ],
  dialogue: {
    title: "За кассой",
    note: "How much are they? — «Сколько они стоят?» (о нескольких вещах).",
    lines: [
      line("passerby", "Hello! How much is this bun?", "Здравствуйте! Сколько стоит эта булочка?"),
      line("murzik", "It's two pounds.", "Два фунта."),
      line("passerby", "And the biscuits? How much are they?", "А печенье? Сколько оно стоит?"),
      line("murzik", "Fifty pence each. They're cheap!", "Пятьдесят пенсов за штуку. Это дёшево!"),
      line("passerby", "One bun and two biscuits, please. Here you are, five pounds.", "Одну булочку и два печенья, пожалуйста. Вот, пять фунтов."),
      line("murzik", "Thank you. Your change — two pounds.", "Спасибо. Ваша сдача — два фунта."),
    ],
    gist: choice("enba4-d1", "Сколько стоит булочка?", [
      ["Два фунта.", true],
      ["Пятьдесят пенсов.", false],
      ["Пять фунтов.", false],
    ]),
  },
  grammar: [
    {
      title: "How much is it? How much are they?",
      paragraphs: [
        "О цене спрашивают How much…?: How much is it? — Сколько это стоит? О нескольких вещах — How much are they?",
        "How much — для денег и того, что не считают поштучно. How many — для того, что считают: How many buns? — Сколько булочек?",
      ],
      examples: [
        { ru: "How much is the cake? — It's twelve pounds.", en: "Сколько стоит торт? — Двенадцать фунтов." },
        { ru: "How many buns? — Four, please.", en: "Сколько булочек? — Четыре, пожалуйста." },
      ],
    },
  ],
  tasks: [
    choice("enba4-t1", "Как спросить, сколько стоят печенья?", [
      ["How much are they?", true],
      ["How many is it?", false],
      ["How much is they?", false],
    ], { skill: "grammar" }),
    listen("enba4-t2", "Послушай. Сколько стоит?", "It's four pounds twenty.", [
      ["£4.20", true],
      ["£2.40", false],
      ["£14.20", false],
    ]),
    match("enba4-t3", "Соедини пары.", [
      ["expensive", "дорого"],
      ["cheap", "дёшево"],
      ["change", "сдача"],
      ["Here you are.", "Вот, пожалуйста."],
    ], { skill: "words" }),
    spell("enba4-t4", "Собери из букв слово «дёшево».", "cheap"),
    speak("enba4-t5", "How much is it?", "It's three pounds fifty.", "Три фунта пятьдесят.", { help: "Назови вслух цену." }),
    choice("enba4-t6", "Как правильно написать «сорок»?", [
      ["forty", true],
      ["fourty", false],
      ["forteen", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "basket",
    itemName: "Плетёная корзинка",
    itemNameRu: "Basket",
    ru: "Hooray! A basket!",
    en: "Ура! Корзинка!",
    a11y: "Плетёная корзинка с клетчатой салфеткой внутри стоит у двери.",
    image: p("basket"),
    steps: ["Вечером в кассе всё сходится до пенса!", "Миссис Грин довольна.", "Она дарит Мурзику плетёную корзинку.", "«For the market tomorrow!» — «Для рынка завтра!»"],
    bridge: "Утром Мурзик с корзинкой идёт на рынок за яблоками для пирога.",
  },
};

const bath5: Lesson = {
  id: "en-a1-bath-5",
  level: "A1",
  cityId: "en-bath",
  number: 5,
  title: "На рынке",
  minutes: 7,
  goals: ["Вежливо попросить: Can I have…?", "Сказать, сколько нужно", "Ответить «Что-нибудь ещё?»"],
  vocabNote: "Can I have…, please? — самая удобная вежливая просьба в магазине и кафе. Буквально «Могу я получить…?»",
  vocab: [
    v("enba5-1", "Can I have six apples, please?", "Можно мне шесть яблок, пожалуйста?", "Мурзик с корзинкой у прилавка с яблоками.", "Послушать Can I have six apples, please", p("l5-1")),
    v("enba5-2", "a kilo of carrots", "килограмм моркови", "На весах лежит морковь, стрелка показывает 1 кг.", "Послушать a kilo of carrots", p("l5-2")),
    v("enba5-3", "Anything else?", "Что-нибудь ещё?", "Продавщица в фартуке вопросительно улыбается.", "Послушать Anything else", p("l5-3")),
    v("enba5-4", "That's all, thanks.", "Это всё, спасибо.", "Мурзик довольно похлопывает по полной корзинке.", "Послушать That's all, thanks", p("l5-4")),
    v("enba5-5", "They're fresh.", "Они свежие.", "Блестящие яблоки с листиками.", "Послушать They're fresh", p("l5-5")),
    v("enba5-6", "a bag", "пакет, сумка", "Продавщица протягивает бумажный пакет.", "Послушать a bag", p("l5-6")),
    v("enba5-7", "a bunch of flowers", "букет цветов", "Ведро с букетами тюльпанов.", "Послушать a bunch of flowers", p("l5-7")),
  ],
  dialogue: {
    title: "Яблоки для пирога",
    note: "Do you need a bag? — «Вам нужен пакет?» Need — «нуждаться, нужно».",
    lines: [
      line("seller", "Good morning! What can I get you?", "Доброе утро! Что вам дать?"),
      line("murzik", "Can I have six apples, please?", "Можно мне шесть яблок, пожалуйста?"),
      line("seller", "Here you are. They're fresh. Anything else?", "Пожалуйста. Они свежие. Что-нибудь ещё?"),
      line("murzik", "A bunch of flowers, please. How much is it?", "Букет цветов, пожалуйста. Сколько это стоит?"),
      line("seller", "Six pounds, please. Do you need a bag?", "Шесть фунтов, пожалуйста. Вам нужен пакет?"),
      line("murzik", "No, thanks. I have a basket. That's all!", "Нет, спасибо. У меня корзинка. Это всё!"),
    ],
    gist: choice("enba5-d1", "Почему Мурзику не нужен пакет?", [
      ["У него есть корзинка.", true],
      ["Пакеты дорогие.", false],
      ["Он ничего не купил.", false],
    ]),
  },
  grammar: [
    {
      title: "Can I have…, please?",
      paragraphs: [
        "Вежливая просьба: Can I have + что + please? Can I have a cup of tea, please? — Можно мне чашку чая?",
        "Сколько: a kilo of (килограмм), a bag of (пакет), a bunch of (пучок, букет), a cup of (чашка).",
      ],
      examples: [
        { ru: "Can I have a kilo of apples, please?", en: "Можно мне килограмм яблок, пожалуйста?" },
        { ru: "Can I have a bag, please?", en: "Можно мне пакет, пожалуйста?" },
      ],
    },
  ],
  tasks: [
    choice("enba5-t1", "Как вежливо попросить чашку чая?", [
      ["Can I have a cup of tea, please?", true],
      ["Give tea.", false],
      ["I have tea, please?", false],
    ], { skill: "grammar" }),
    listen("enba5-t2", "Послушай. Что покупают?", "Can I have a kilo of carrots, please?", [
      ["Килограмм моркови.", true],
      ["Шесть яблок.", false],
      ["Букет цветов.", false],
    ]),
    match("enba5-t3", "Соедини пары.", [
      ["Anything else?", "Что-нибудь ещё?"],
      ["That's all.", "Это всё."],
      ["fresh", "свежий"],
      ["a bag", "пакет"],
    ], { skill: "words" }),
    missing("enba5-t4", "Какой буквы не хватает? («морковь»)", "car", "ots", "r", ["r", "l", "w"]),
    speak("enba5-t5", "Anything else?", "No, that's all, thanks.", "Нет, это всё, спасибо.", { help: "Ответь вслух продавцу." }),
    listen("enba5-t6", "Вспомни прошлый урок. Сколько стоит?", "It's five pounds fifty.", [
      ["£5.50", true],
      ["£15.50", false],
      ["£5.15", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "plate",
    itemName: "Фарфоровое блюдо",
    itemNameRu: "Plate",
    ru: "Hooray! A pretty plate!",
    en: "Ура! Красивое блюдо!",
    a11y: "Большое круглое фарфоровое блюдо с голубым рисунком: мостик, домик и деревья.",
    image: p("plate"),
    steps: ["Мурзик и миссис Грин пекут яблочный пирог.", "Пирог ложится на старое голубое блюдо.", "«Keep the plate, Murzik!» — «Оставь блюдо себе, Мурзик!»", "Блюдо встаёт на полку."],
    bridge: "В выходной Том ведёт Мурзика смотреть римские бани.",
  },
};

const bath6: Lesson = {
  id: "en-a1-bath-6",
  level: "A1",
  cityId: "en-bath",
  number: 6,
  title: "Old and new — Старое и новое",
  minutes: 7,
  goals: ["Описать вещь: big, small, old, new", "Поставить прилагательное перед словом", "Сказать «очень»: very"],
  vocabNote: "Прилагательное стоит перед словом и никогда не меняется: an old city, old cities. В английском нет окончаний «старый, старая, старые».",
  vocab: [
    v("enba6-1", "It's an old city.", "Это старый город.", "Улица из домов медового цвета.", "Послушать It's an old city", p("l6-1")),
    v("enba6-2", "The water is hot.", "Вода горячая.", "Над зелёной водой римских бань поднимается пар.", "Послушать The water is hot", p("l6-2")),
    v("enba6-3", "It's very beautiful.", "Это очень красиво.", "Колонны вокруг бассейна, отражения в воде.", "Послушать It's very beautiful", p("l6-3")),
    v("enba6-4", "a big house", "большой дом", "Большой дом с колоннами.", "Послушать a big house", p("l6-4")),
    v("enba6-5", "a small shop", "маленький магазин", "Крошечный магазинчик с одной витриной.", "Послушать a small shop", p("l6-5")),
    v("enba6-6", "new or old?", "новый или старый?", "Новенький велосипед рядом со старым ржавым.", "Послушать new or old", p("l6-6")),
    v("enba6-7", "two thousand years", "две тысячи лет", "Старинная римская монета на ладони.", "Послушать two thousand years", p("l6-7")),
  ],
  dialogue: {
    title: "Римские бани",
    note: "Roman — «римский». The Romans — «римляне». Swim — «плавать».",
    lines: [
      line("tom", "This is the Roman Baths. It's very old!", "Это римские бани. Они очень старые!"),
      line("murzik", "How old?", "Насколько?"),
      line("tom", "Two thousand years!", "Две тысячи лет!"),
      line("murzik", "Look! The water is green and hot!", "Смотри! Вода зелёная и горячая!"),
      line("tom", "Yes, it's hot water from the ground. It's very beautiful.", "Да, это горячая вода из-под земли. Очень красиво."),
      line("murzik", "Bath is a small city, but it's a beautiful city!", "Бат — маленький город, но красивый!"),
    ],
    gist: choice("enba6-d1", "Сколько лет римским баням?", [
      ["Две тысячи лет.", true],
      ["Двести лет.", false],
      ["Двадцать лет.", false],
    ]),
  },
  grammar: [
    {
      title: "Прилагательные: a big house",
      paragraphs: [
        "Прилагательное стоит перед словом: a big house, an old city, beautiful flowers. Оно не меняется ни по роду, ни по числу.",
        "Или после is / are: The house is big. The flowers are beautiful. Very — «очень»: very old, very beautiful.",
      ],
      examples: [
        { ru: "It's a very old house.", en: "Это очень старый дом." },
        { ru: "The cakes are small.", en: "Торты маленькие." },
      ],
    },
  ],
  tasks: [
    choice("enba6-t1", "Как сказать «старый город»?", [
      ["an old city", true],
      ["a city old", false],
      ["a old city", false],
    ], { skill: "grammar" }),
    listen("enba6-t2", "Послушай. Какой дом?", "It's a small house, but it's very beautiful.", [
      ["Маленький, но красивый.", true],
      ["Большой и новый.", false],
      ["Старый и некрасивый.", false],
    ]),
    match("enba6-t3", "Соедини пары.", [
      ["big", "большой"],
      ["small", "маленький"],
      ["old", "старый"],
      ["new", "новый"],
    ], { skill: "words" }),
    spell("enba6-t4", "Собери из букв слово «горячий».", "hot", ["a"]),
    speak("enba6-t5", "Tell me about your city.", "My city is big and very beautiful.", "Мой город большой и очень красивый.", { help: "Опиши вслух свой город." }),
    choice("enba6-t6", "Как вежливо попросить шесть яблок?", [
      ["Can I have six apples, please?", true],
      ["I have six apples?", false],
      ["Six apple, please.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "rug",
    itemName: "Круглый половик",
    itemNameRu: "Rug",
    ru: "Hooray! A rug!",
    en: "Ура! Половик!",
    a11y: "Круглый вязаный половик из разноцветных полосок лежит у кровати.",
    image: p("rug"),
    steps: ["У бань старушка продаёт вязаные половики.", "Мурзик выбирает круглый, разноцветный.", "«It's old, but it's very warm.» — «Он старый, но очень тёплый».", "Половик лежит у кровати."],
    bridge: "Последний день в Бате. Миссис Грин что-то ищет в старом шкафу…",
  },
};

const bath7: Lesson = {
  id: "en-a1-bath-7",
  level: "A1",
  cityId: "en-bath",
  number: 7,
  title: "Goodbye, Bath! — Пока, Бат!",
  minutes: 8,
  goals: ["Купить что-нибудь целиком: попросить, спросить цену, заплатить", "Описать вещь", "Вспомнить все слова Бата"],
  vocabNote: "Повторяем: a / an, this / that / these / those, how much / how many, Can I have…?",
  vocab: [
    v("enba7-1", "I'm looking for something.", "Я кое-что ищу.", "Миссис Грин роется в старом шкафу.", "Послушать I'm looking for something", p("l7-1")),
    v("enba7-2", "Here it is!", "Вот оно!", "Миссис Грин поднимает над головой сложенный листок.", "Послушать Here it is", p("l7-2")),
    v("enba7-3", "the recipe for Bath buns", "рецепт батских булочек", "Пожелтевшая страница с рисунком булочки.", "Послушать the recipe for Bath buns", p("l7-3")),
    v("enba7-4", "a cake stand", "подставка для пирожных", "Трёхъярусная фарфоровая подставка с пирожными.", "Послушать a cake stand", p("l7-4")),
    v("enba7-5", "It's for you.", "Это тебе.", "Миссис Грин протягивает Мурзику подарок.", "Послушать It's for you", p("l7-5")),
    v("enba7-6", "You're very kind.", "Вы очень добры.", "Мурзик прижимает лапку к сердцу.", "Послушать You're very kind", p("l7-6")),
    v("enba7-7", "Where to next?", "Куда дальше?", "Том разворачивает карту Британии.", "Послушать Where to next", p("l7-7")),
  ],
  dialogue: {
    title: "Третья страница",
    note: "Scotland — Шотландия. Edinburgh [э́динбэрэ] — столица Шотландии.",
    lines: [
      line("green", "I'm looking for something… Here it is!", "Я кое-что ищу… Вот оно!"),
      line("murzik", "A page! The recipe for Bath buns!", "Страница! Рецепт батских булочек!"),
      line("green", "And this cake stand is for you. It's for your café.", "А эта подставка для пирожных — тебе. Для твоего кафе."),
      line("murzik", "Thank you, Mrs Green! You're very kind.", "Спасибо, миссис Грин! Вы очень добры."),
      line("tom", "Where to next?", "Куда дальше?"),
      line("green", "To Scotland! To the MacDonalds in Edinburgh. They're a big family!", "В Шотландию! К Макдональдам в Эдинбург. У них большая семья!"),
    ],
    gist: choice("enba7-d1", "Куда поедут Мурзик и Том?", [
      ["В Эдинбург, к семье Макдональд.", true],
      ["В Лондон, к миссис Хоуп.", false],
      ["В Оксфорд, к Прие.", false],
    ]),
  },
  grammar: [
    {
      title: "В магазине: всё вместе",
      paragraphs: [
        "Попросить: Can I have…, please? Спросить цену: How much is it? / How much are they? Ответить продавцу: That's all, thanks.",
        "Описать: It's a big cake. They're very fresh. This is an old plate.",
      ],
      examples: [
        { ru: "Can I have two buns, please? How much are they?", en: "Можно мне две булочки? Сколько они стоят?" },
        { ru: "This is a very old recipe.", en: "Это очень старый рецепт." },
      ],
    },
  ],
  tasks: [
    listen("enba7-t1", "Аудиоэкзамен. Что купил покупатель?", "Can I have three buns and a cake, please? How much is it? — Fifteen pounds.", [
      ["Три булочки и торт за пятнадцать фунтов.", true],
      ["Три торта и булочку за пятьдесят фунтов.", false],
      ["Тринадцать булочек за пять фунтов.", false],
    ]),
    choice("enba7-t2", "Выбери правильно: «эти старые тарелки»", [
      ["these old plates", true],
      ["this old plates", false],
      ["these olds plates", false],
    ], { skill: "grammar" }),
    match("enba7-t3", "Соедини пары.", [
      ["recipe", "рецепт"],
      ["kind", "добрый"],
      ["a cake stand", "подставка для пирожных"],
      ["Here it is!", "Вот оно!"],
    ], { skill: "words" }),
    spell("enba7-t4", "Собери из букв слово «рецепт».", "recipe"),
    speak("enba7-t5", "This is for you.", "Thank you! You're very kind.", "Спасибо! Вы очень добры.", { help: "Поблагодари вслух за подарок." }),
    script("enba7-t6", "Вспомни весь Бат. Закончи разговор в пекарне.", [
      { speaker: "Продавец", text: "Hello! What can I get you?" },
      { speaker: "Ты", answer: "Can I have two buns, please?", options: ["Can I have two buns, please?", "Can I have two bun, please?", "I have two buns?"] },
      { speaker: "Продавец", text: "Here you are. Anything else?" },
      { speaker: "Ты", answer: "No, that's all. How much is it?", options: ["No, that's all. How much is it?", "No, that's all. How many is it?", "Yes, that's all."] },
      { speaker: "Продавец", text: "Four pounds, please." },
      { speaker: "Ты", answer: "Here you are.", options: ["Here you are.", "You're welcome.", "It's cheap you."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cake-stand",
    itemName: "Подставка для пирожных",
    itemNameRu: "Cake stand",
    ru: "Hooray! A cake stand!",
    en: "Ура! Подставка для пирожных!",
    a11y: "Трёхъярусная фарфоровая подставка для пирожных с золотой ручкой сверху, на ярусах розовые цветочки.",
    image: p("cake-stand"),
    steps: ["Миссис Грин заворачивает подставку в газету.", "Три яруса, золотая ручка, розовые цветочки.", "«Every café needs one!» — «Она нужна каждому кафе!»", "Мурзик бережно кладёт её в чемодан."],
    bridge: "Следующая страница — в Эдинбурге, у большой семьи Макдональд.",
  },
};

const story: CityStory = {
  home: {
    name: "Квартирка над пекарней",
    nameRu: "Murzik's flat in Bath",
    image: p("home"),
    a11y: "Маленькая пустая квартирка над пекарней миссис Грин: стены из медового камня, окно на тихую улицу. Пахнет хлебом. Посередине чемодан Мурзика.",
  },
  keepsakeId: "cake-stand",
  welcomeRu: "Hello, Bath!",
  welcomeEn: "Привет, Бат!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том в Бате: дома из медового камня полукругом, старинные римские бани, над ними пар.",
  departureImage: p("departure"),
  departureA11y: "Миссис Грин в муке машет на прощание у дверей пекарни.",
  finale: [
    {
      image: p("page"),
      a11y: "Крупно: третья страница книги рецептов, рецепт батских булочек. На полях записка от руки.",
      lines: [
        { en: "Мурзик вклеивает третью страницу. На полях — записка миссис Хоуп:" },
        { ru: "At my café, every guest got a smile first and tea second.", en: "В моём кафе каждый гость сначала получал улыбку, а уже потом чай." },
        { en: "Мурзик улыбается — и сразу понимает, как это приятно." },
      ],
    },
    {
      image: p("cake-stand"),
      a11y: "Мурзик обходит свою квартирку над пекарней, которую обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свою квартирку над пекарней. Том фотографирует её для журнала." },
        { en: "Для будущего кафе он берёт с собой подставку для пирожных." },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "Bath complete!", en: "Бат пройден!" },
        { en: "7 / 7 уроков" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Миссис Грин машет на прощание.",
      lines: [
        { ru: "Goodbye, Mrs Green!", en: "До свидания, миссис Грин!" },
        { ru: "Next stop: Edinburgh!", en: "Следующая остановка: Эдинбург!" },
      ],
    },
    {
      image: p("train"),
      a11y: "Поезд едет на север, за окном холмы, овцы и серое море.",
      lines: [{ ru: "Bath → Edinburgh", en: "Бат → Эдинбург" }],
    },
    {
      image: pic("en/edinburgh/arrival"),
      a11y: "Мурзик и Том в Эдинбурге: серый замок на высокой скале над старым городом. Ветер и мелкий дождь.",
      lines: [
        { ru: "Hello, Edinburgh!", en: "Привет, Эдинбург!" },
        { ru: "It's cold!", en: "Холодно!" },
      ],
    },
  ],
};

export const enBath = {
  id: "en-bath",
  name: "Бат",
  nameEn: "Bath",
  lessons: [bath1, bath2, bath3, bath4, bath5, bath6, bath7],
  story,
};
