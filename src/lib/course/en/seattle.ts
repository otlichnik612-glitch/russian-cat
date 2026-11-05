import { pic } from "../art";
import { read } from "../make";
import type { CityStory, Lesson } from "../types";
import { choice, fill, letter, line, listen, match, script, speak, tf, v } from "../tr/make";

/*
 * Сиэтл · «Ремонт и мастерская» · A2, уроки 1–7.
 * Через океан: голубой фургон остался в Европе, в Америке Мурзик и Том берут фургон напрокат у Джун
 * (около 55, прокат «Rainy Day Rentals»). Американские слова: gas, trunk, check. Заправка, поломка на мосту,
 * мастерская механика Матео, дождливый Сиэтл, рынок у залива, моллюски. Муж Джун, Уолт, бывший рыбак,
 * учит их варить clam chowder.
 * Грамматика: первое условное — If + Present Simple, will…: If it rains, we'll cook under the awning.
 * Unless не даём; when / if различаем один раз.
 */

const p = (name: string) => pic(`en/seattle/${name}`);

const seattle1: Lesson = {
  id: "en-a2-seattle-1",
  level: "A2",
  cityId: "en-seattle",
  number: 1,
  title: "Renting a van — Берём фургон напрокат",
  minutes: 8,
  goals: ["Взять машину напрокат", "Понять условия: залог, страховка, права", "Первое условное: If you…, you'll…"],
  vocabNote: "Rent — брать (или сдавать) напрокат. A deposit — залог. A driver's license — водительские права (в Америке пишут license, в Британии licence).",
  vocab: [
    v("ensea1-1", "We'd like to rent a van.", "Мы хотели бы взять фургон напрокат.", "Том у стойки проката, за окном — ряд белых фургонов под дождём.", "Послушать We'd like to rent a van", p("l1-1")),
    v("ensea1-2", "for two weeks", "на две недели", "Календарь, на котором обведены две недели.", "Послушать for two weeks", p("l1-2")),
    v("ensea1-3", "your driver's license", "ваши водительские права", "Том протягивает пластиковую карточку с фотографией.", "Послушать your driver's license", p("l1-3")),
    v("ensea1-4", "a deposit", "залог", "Джун пишет сумму на бланке.", "Послушать a deposit", p("l1-4")),
    v("ensea1-5", "insurance", "страховка", "Документ со щитом на обложке.", "Послушать insurance", p("l1-5")),
    v("ensea1-6", "If you return it late, you'll pay extra.", "Если вернёте его поздно, заплатите дополнительно.", "Часы и знак доллара с плюсом.", "Послушать If you return it late, you'll pay extra", p("l1-6")),
    v("ensea1-7", "a full tank", "полный бак", "Стрелка топлива на приборной панели показывает F.", "Послушать a full tank", p("l1-7")),
    v("ensea1-8", "Here are the keys.", "Вот ключи.", "Джун кладёт ключи с брелоком-капелькой в руку Тома.", "Послушать Here are the keys", p("l1-8")),
  ],
  letters: [
    letter("license = [лАйсэнс]", "Ударение на первый слог: LI-cense. В Америке пишут license, в Британии licence — звучит одинаково.", "a driver's license", "водительские права"),
    letter("insurance = [иншУрэнс]", "s здесь читается как [ш], ударение на второй слог.", "Is insurance included?", "Страховка включена?"),
  ],
  dialogue: {
    title: "Прокат «Rainy Day Rentals»",
    note: "Голубой фургон остался в Европе — Конор везёт его в Лондон. В Америке нужен другой.",
    lines: [
      line("tom", "Hi! We'd like to rent a van for two weeks.", "Здравствуйте! Мы хотели бы взять фургон напрокат на две недели."),
      line("june", "Sure. Can I see your driver's license?", "Конечно. Можно ваши водительские права?"),
      line("tom", "Here you are. Is insurance included?", "Вот, пожалуйста. Страховка включена?"),
      line("june", "Yes, it is. There's a five-hundred-dollar deposit. You'll get it back when you return the van.", "Да. Залог — пятьсот долларов. Вы получите его обратно, когда вернёте фургон."),
      line("murzik", "And if we return it late?", "А если мы вернём его поздно?"),
      line("june", "If you return it late, you'll pay extra. And it comes with a full tank — so please bring it back full.", "Если вернёте поздно, заплатите дополнительно. И он с полным баком — так что, пожалуйста, верните его полным."),
      line("june", "Here are the keys. Welcome to Seattle — don't forget your raincoat!", "Вот ключи. Добро пожаловать в Сиэтл — не забудьте дождевик!"),
    ],
    gist: choice("ensea1-d1", "Когда Том получит залог обратно?", [
      ["Когда вернёт фургон.", true],
      ["Сразу, на следующий день.", false],
      ["Никогда.", false],
    ]),
  },
  grammar: [
    {
      title: "Первое условное: If…, …will…",
      paragraphs: [
        "Реальное условие в будущем: If + Present Simple, will + глагол. If you return it late, you'll pay extra. — Если вернёте поздно, заплатите больше.",
        "Важно: после if будущего времени нет! По-русски «если вернёте» — будущее, а по-английски if you return (а не if you will return).",
      ],
      examples: [
        { ru: "If it rains, we'll stay in the van.", en: "Если пойдёт дождь, мы останемся в фургоне." },
        { ru: "You'll get the deposit back if the van is OK.", en: "Вы получите залог обратно, если с фургоном всё будет в порядке." },
      ],
    },
  ],
  tasks: [
    listen("ensea1-t1", "Послушай. Какой залог?", "Yes, it is. There's a five-hundred-dollar deposit. You'll get it back when you return the van.", [
      ["Пятьсот долларов.", true],
      ["Пятьдесят долларов.", false],
      ["Пять тысяч долларов.", false],
    ]),
    choice("ensea1-t2", "Как сказать «Если вернёте поздно, заплатите больше»?", [
      ["If you return it late, you'll pay extra.", true],
      ["If you will return it late, you pay extra.", false],
      ["If you returned it late, you pay extra tomorrow.", false],
    ], { skill: "grammar" }),
    fill("ensea1-t3", "Выбери правильную форму: «Если пойдёт дождь, мы останемся в фургоне».", "If it", ", we'll stay in the van.", "rains", ["rains", "will rain", "rained"], { skill: "grammar" }),
    read("ensea1-t4", "Прочитай договор. Сколько стоит фургон в день?", "RAINY DAY RENTALS\nVan: $65 per day\nDeposit: $500\nInsurance: included\nLate return: $10 per hour\nReturn with a full tank!", [
      ["65 долларов.", true],
      ["500 долларов.", false],
      ["10 долларов.", false],
    ]),
    match("ensea1-t5", "Соедини пары.", [
      ["a deposit", "залог"],
      ["insurance", "страховка"],
      ["a full tank", "полный бак"],
      ["your driver's license", "ваши права"],
    ], { skill: "words" }),
    tf("ensea1-t6", "Фургон нужно вернуть с полным баком.", true, "listening"),
    speak("ensea1-t7", "Hi! How can I help you?", "Hi! We'd like to rent a car for a week. Is insurance included? And what happens if we return it late?", "Здравствуйте! Мы хотели бы взять машину напрокат на неделю. Страховка включена? И что будет, если мы вернём её поздно?", {
      help: "Скажи вслух, что хочешь взять машину напрокат, и спроси об условиях.",
    }),
  ],
  reward: {
    itemId: "van-magnet",
    itemName: "Магнитная вывеска «Hope on Wheels»",
    itemNameRu: "Hope on Wheels magnet sign",
    ru: "A rented van — with our name on it!",
    en: "Фургон напрокат — но с нашим именем!",
    a11y: "На борту белого фургона под дождём — голубая магнитная вывеска «Hope on Wheels» с маленькой синей дверью.",
    image: p("van-magnet"),
    steps: ["Фургон белый и чужой.", "Но в чемодане у Тома — сюрприз от миссис Хоуп.", "Голубая магнитная вывеска «Hope on Wheels»!", "Хлоп — и фургон стал своим."],
    bridge: "Первым делом — заправка. Но здесь бензин называют по-другому, и платить надо по-другому.",
  },
};

const seattle2: Lesson = {
  id: "en-a2-seattle-2",
  level: "A2",
  cityId: "en-seattle",
  number: 2,
  title: "At the gas station — На заправке",
  minutes: 8,
  goals: ["Заправиться и заплатить", "Американские слова: gas, trunk", "If… — что случится, если…"],
  vocabNote: "В Америке бензин — gas (в Британии petrol), багажник — trunk (в Британии boot), заправка — a gas station.",
  vocab: [
    v("ensea2-1", "a gas station", "заправка, АЗС", "Заправка под дождём, яркие огни над колонками.", "Послушать a gas station", p("l2-1")),
    v("ensea2-2", "fill up the tank", "заправить полный бак", "Том держит пистолет колонки у бака.", "Послушать fill up the tank", p("l2-2")),
    v("ensea2-3", "Pump number four", "колонка номер четыре", "Большая цифра 4 на колонке.", "Послушать Pump number four", p("l2-3")),
    v("ensea2-4", "Pay inside or at the pump.", "Оплата в здании или прямо у колонки.", "Табличка на колонке и окошко магазина.", "Послушать Pay inside or at the pump", p("l2-4")),
    v("ensea2-5", "the trunk", "багажник (в Америке)", "Открытый задний отсек машины, внутри чемодан с красной биркой.", "Послушать the trunk", p("l2-5")),
    v("ensea2-6", "We're almost out of gas.", "У нас почти кончился бензин.", "Стрелка топлива почти на E.", "Послушать We're almost out of gas", p("l2-6")),
    v("ensea2-7", "If we don't stop now, we'll run out.", "Если не остановимся сейчас, бензин кончится.", "Мурзик тревожно показывает на стрелку.", "Послушать If we don't stop now, we'll run out", p("l2-7")),
    v("ensea2-8", "a car wash", "автомойка", "Щётки автомойки крутятся вокруг фургона.", "Послушать a car wash", p("l2-8")),
  ],
  letters: [
    letter("gas = [гэс]", "Короткий звук [э], как в cat. В Британии сказали бы petrol [пЭтрэл].", "We need gas.", "Нам нужен бензин."),
    letter("pump = [памп]", "u здесь звучит как короткое [а].", "pump number four", "колонка номер четыре"),
  ],
  dialogue: {
    title: "Стрелка на E",
    note: "E — empty (пусто), F — full (полно). Американцы платят на колонке картой или внутри, у кассы.",
    lines: [
      line("murzik", "Tom, look! We're almost out of gas.", "Том, смотри! У нас почти кончился бензин."),
      line("tom", "Already? If we don't stop now, we'll run out on the bridge.", "Уже? Если не остановимся сейчас, бензин кончится на мосту."),
      line("murzik", "There's a gas station! Pump number four is free.", "Вон заправка! Колонка номер четыре свободна."),
      line("cashier", "Hi! You can pay inside or at the pump. Do you want a car wash too?", "Привет! Платить можно внутри или у колонки. Мойку тоже хотите?"),
      line("tom", "No, thanks. If it keeps raining, it'll wash itself!", "Нет, спасибо. Если дождь не кончится, он сам помоется!"),
      line("cashier", "Ha! True. Just fill up the tank and pay at the pump.", "Ха! Точно. Просто заправьте полный бак и заплатите у колонки."),
    ],
    gist: choice("ensea2-d1", "Почему Том не хочет мыть фургон?", [
      ["Идёт дождь — фургон «помоется сам».", true],
      ["Мойка слишком дорогая.", false],
      ["Мойка закрыта.", false],
    ]),
  },
  grammar: [
    {
      title: "If… not: что будет, если не…",
      paragraphs: [
        "Отрицание после if — don't / doesn't: If we don't stop now, we'll run out. If he doesn't call, I'll go to the garage.",
        "Части можно поменять местами, тогда запятая не нужна: We'll run out if we don't stop.",
      ],
      examples: [
        { ru: "If you don't hurry, you'll miss the bus.", en: "Если не поторопишься, опоздаешь на автобус." },
        { ru: "We'll be late if the traffic is bad.", en: "Мы опоздаем, если будут пробки." },
      ],
    },
  ],
  tasks: [
    listen("ensea2-t1", "Послушай. Какая колонка свободна?", "There's a gas station! Pump number four is free.", [
      ["Номер четыре.", true],
      ["Номер четырнадцать.", false],
      ["Номер сорок.", false],
    ]),
    choice("ensea2-t2", "Как сказать «Если не поторопишься, опоздаешь на автобус»?", [
      ["If you don't hurry, you'll miss the bus.", true],
      ["If you won't hurry, you miss the bus.", false],
      ["If you not hurry, you'll miss the bus.", false],
    ], { skill: "grammar" }),
    fill("ensea2-t3", "Выбери правильное слово: «Если не остановимся, бензин кончится».", "If we", "stop, we'll run out of gas.", "don't", ["don't", "won't", "aren't"], { skill: "grammar" }),
    read("ensea2-t4", "Прочитай табличку на колонке. Как здесь можно заплатить?", "PUMP 4\nPay at the pump: credit or debit card\nCash? Please pay inside first.\nCar wash: $8", [
      ["Картой у колонки или наличными внутри.", true],
      ["Только наличными у колонки.", false],
      ["Только через приложение.", false],
    ]),
    match("ensea2-t5", "Соедини американское слово с русским.", [
      ["gas", "бензин"],
      ["the trunk", "багажник"],
      ["a gas station", "заправка"],
      ["a car wash", "автомойка"],
    ], { skill: "words" }),
    tf("ensea2-t6", "Том решил помыть фургон на мойке.", false, "listening"),
    speak("ensea2-t7", "What will you do if your car is almost out of gas?", "If my car is almost out of gas, I'll stop at the nearest gas station and fill up the tank.", "Если у меня почти кончится бензин, я остановлюсь на ближайшей заправке и заправлю полный бак.", {
      help: "Ответь вслух: If…, I'll…",
    }),
  ],
  reward: {
    itemId: "road-atlas",
    itemName: "Дорожный атлас",
    itemNameRu: "Road atlas",
    ru: "A real paper map — just in case!",
    en: "Настоящая бумажная карта — на всякий случай!",
    a11y: "На сиденье фургона лежит толстый дорожный атлас западного побережья Америки, открытый на странице с Сиэтлом.",
    image: p("road-atlas"),
    steps: ["В магазине при заправке продают бумажные атласы.", "«Если телефон сядет, у нас будет карта», — говорит Мурзик.", "Он покупает толстый атлас западного побережья.", "И сразу находит Портленд."],
    bridge: "Утром фургон стоит на парковке у залива. Том поворачивает ключ — и ничего. Только тихий щелчок.",
  },
};

const seattle3: Lesson = {
  id: "en-a2-seattle-3",
  level: "A2",
  cityId: "en-seattle",
  number: 3,
  title: "It won't start! — Он не заводится!",
  minutes: 8,
  goals: ["Описать поломку", "Позвонить в службу помощи на дороге", "If you…, I'll…: предложить помощь"],
  vocabNote: "It won't start — «не заводится» (won't здесь — «никак не хочет»). Roadside assistance — помощь на дороге. A tow truck — эвакуатор.",
  vocab: [
    v("ensea3-1", "It won't start.", "Он не заводится.", "Том сидит за рулём и поворачивает ключ.", "Послушать It won't start", p("l3-1")),
    v("ensea3-2", "a strange noise", "странный звук", "Мурзик прижал уши; над капотом нарисовано «клик-клик».", "Послушать a strange noise", p("l3-2")),
    v("ensea3-3", "The battery is dead.", "Аккумулятор сел.", "Значок аккумулятора на приборной панели горит красным.", "Послушать The battery is dead", p("l3-3")),
    v("ensea3-4", "roadside assistance", "помощь на дороге", "Наклейка с телефоном на стекле фургона.", "Послушать roadside assistance", p("l3-4")),
    v("ensea3-5", "Where exactly are you?", "Где именно вы находитесь?", "Голос в телефоне; Мурзик смотрит по сторонам.", "Послушать Where exactly are you", p("l3-5")),
    v("ensea3-6", "a tow truck", "эвакуатор", "Большой жёлтый эвакуатор с лебёдкой.", "Послушать a tow truck", p("l3-6")),
    v("ensea3-7", "If you wait here, I'll send someone.", "Если подождёте здесь, я пришлю кого-нибудь.", "Оператор в наушниках печатает на компьютере.", "Послушать If you wait here, I'll send someone", p("l3-7")),
    v("ensea3-8", "Stay in the vehicle.", "Оставайтесь в машине.", "Мурзик и Том сидят в фургоне, по стеклу бежит дождь.", "Послушать Stay in the vehicle", p("l3-8")),
  ],
  letters: [
    letter("vehicle = [вИикл]", "h в vehicle не читается: [вИикл].", "Stay in the vehicle.", "Оставайтесь в машине."),
    letter("tow = [тоу]", "Tow (тянуть, буксировать) звучит как toe [тоу] — палец ноги.", "a tow truck", "эвакуатор"),
  ],
  dialogue: {
    title: "Звонок в службу помощи",
    note: "Номер службы помощи на дороге есть в договоре проката. Вежливое «Ma'am» — «мэм», обращение к женщине.",
    lines: [
      line("tom", "Hello, roadside assistance? Our van won't start. It just makes a strange noise.", "Алло, помощь на дороге? Наш фургон не заводится. Только издаёт странный звук."),
      line("operator", "OK, sir. What kind of noise?", "Хорошо, сэр. Какой звук?"),
      line("murzik", "Click, click, click.", "Щёлк, щёлк, щёлк."),
      line("operator", "Sounds like the battery is dead. Where exactly are you?", "Похоже, сел аккумулятор. Где именно вы находитесь?"),
      line("tom", "In a parking lot by the waterfront, next to the big wheel.", "На парковке у набережной, рядом с колесом обозрения."),
      line("operator", "If you wait there, I'll send a tow truck. It'll take about forty minutes. Stay in the vehicle.", "Если подождёте там, я пришлю эвакуатор. Это займёт минут сорок. Оставайтесь в машине."),
      line("tom", "Thank you, ma'am. We'll wait.", "Спасибо, мэм. Мы подождём."),
    ],
    gist: choice("ensea3-d1", "Что, скорее всего, случилось с фургоном?", [
      ["Сел аккумулятор.", true],
      ["Кончился бензин.", false],
      ["Спустило колесо.", false],
    ]),
  },
  grammar: [
    {
      title: "If you…, I'll…: предложить помощь",
      paragraphs: [
        "Когда предлагаешь что-то сделать при условии: If you wait here, I'll send someone. If you give me your number, I'll call you back.",
        "Won't иногда значит «никак не хочет»: The van won't start. The door won't open.",
      ],
      examples: [
        { ru: "If you send me the address, I'll come and pick you up.", en: "Если пришлёшь адрес, я приеду и заберу тебя." },
        { ru: "The window won't close!", en: "Окно никак не закрывается!" },
      ],
    },
  ],
  tasks: [
    listen("ensea3-t1", "Послушай. Через сколько приедет эвакуатор?", "If you wait there, I'll send a tow truck. It'll take about forty minutes. Stay in the vehicle.", [
      ["Минут через сорок.", true],
      ["Минут через четырнадцать.", false],
      ["Через четыре часа.", false],
    ]),
    choice("ensea3-t2", "Как сказать «Если подождёте здесь, я пришлю кого-нибудь»?", [
      ["If you wait here, I'll send someone.", true],
      ["If you'll wait here, I send someone.", false],
      ["If you waited here, I send someone.", false],
    ], { skill: "grammar" }),
    fill("ensea3-t3", "Выбери правильный вариант: «Фургон никак не заводится».", "The van", "start.", "won't", ["won't", "doesn't will", "isn't"], { skill: "grammar" }),
    read("ensea3-t4", "Прочитай наклейку на стекле. Что делать, если машина сломалась?", "BROKEN DOWN?\nCall Roadside Assistance 24/7: 1-800-555-0199\nTell us where you are.\nStay in the vehicle if it's safe.", [
      ["Позвонить по номеру и сказать, где ты.", true],
      ["Самому чинить мотор.", false],
      ["Бросить машину и уйти.", false],
    ]),
    match("ensea3-t5", "Соедини пары.", [
      ["It won't start.", "Он не заводится."],
      ["a tow truck", "эвакуатор"],
      ["The battery is dead.", "Аккумулятор сел."],
      ["roadside assistance", "помощь на дороге"],
    ], { skill: "words" }),
    tf("ensea3-t6", "Фургон стоит на мосту.", false, "listening"),
    speak("ensea3-t7", "Roadside assistance, how can I help?", "Hi! Our car won't start. I think the battery is dead. We're in a parking lot near the station.", "Здравствуйте! Наша машина не заводится. Кажется, сел аккумулятор. Мы на парковке у вокзала.", {
      help: "Позвони в службу помощи вслух: что случилось и где ты.",
    }),
  ],
  reward: {
    itemId: "jumper-cables",
    itemName: "Провода для прикуривания",
    itemNameRu: "Jumper cables",
    ru: "Red to red, black to black!",
    en: "Красный к красному, чёрный к чёрному!",
    a11y: "В багажнике фургона аккуратно свёрнуты красные и чёрные провода с большими зажимами.",
    image: p("jumper-cables"),
    steps: ["Водитель эвакуатора пробует завести фургон проводами.", "Мотор чихает — и снова молчит.", "«Нужно в мастерскую. Если повезёт, починят быстро».", "Провода он оставляет им. На будущее."],
    bridge: "Мастерская Матео — под старым мостом. Внутри пахнет маслом, кофе и почему-то корицей.",
  },
};

const seattle4: Lesson = {
  id: "en-a2-seattle-4",
  level: "A2",
  cityId: "en-seattle",
  number: 4,
  title: "At the garage — В мастерской",
  minutes: 8,
  goals: ["Понять, что сломалось", "Спросить, сколько стоит и когда будет готово", "If… — планы, которые зависят от условия"],
  vocabNote: "A garage — мастерская (и гараж). A mechanic — автомеханик. A part — запчасть.",
  vocab: [
    v("ensea4-1", "a mechanic", "автомеханик", "Матео в комбинезоне вытирает руки тряпкой.", "Послушать a mechanic", p("l4-1")),
    v("ensea4-2", "What's wrong with it?", "Что с ним не так?", "Том показывает на открытый капот.", "Послушать What's wrong with it", p("l4-2")),
    v("ensea4-3", "We need a new part.", "Нужна новая запчасть.", "Матео держит маленькую старую деталь.", "Послушать We need a new part", p("l4-3")),
    v("ensea4-4", "How long will it take?", "Сколько времени это займёт?", "Том смотрит на часы на стене мастерской.", "Послушать How long will it take", p("l4-4")),
    v("ensea4-5", "How much will it cost?", "Сколько это будет стоить?", "Матео считает на калькуляторе.", "Послушать How much will it cost", p("l4-5")),
    v("ensea4-6", "If the part comes tomorrow…", "Если запчасть придёт завтра…", "Коробка с запчастью в руках курьера.", "Послушать If the part comes tomorrow", p("l4-6")),
    v("ensea4-7", "It'll be ready on Friday.", "Он будет готов в пятницу.", "Календарь, пятница обведена.", "Послушать It'll be ready on Friday", p("l4-7")),
    v("ensea4-8", "Can we get another van till then?", "Можно пока взять другой фургон?", "Мурзик с надеждой смотрит на Матео.", "Послушать Can we get another van till then", p("l4-8")),
  ],
  letters: [
    letter("mechanic = [мэкЭник]", "ch здесь читается как [к], ударение на второй слог.", "a good mechanic", "хороший механик"),
    letter("part = [па:рт]", "В американском английском r слышно: [па:рт].", "a new part", "новая запчасть"),
  ],
  dialogue: {
    title: "Под мостом",
    note: "Матео — автомеханик, около 35 лет. Его мастерская под мостом, у входа — кофемашина и тарелка с булочками с корицей.",
    lines: [
      line("mateo", "Hi, I'm Mateo. So what's wrong with it?", "Привет, я Матео. Ну, что с ним не так?"),
      line("tom", "It won't start. The tow truck driver tried the jumper cables, but nothing happened.", "Не заводится. Водитель эвакуатора пробовал провода, но ничего не вышло."),
      line("mateo", "Let me see… It's the starter. We need a new part.", "Дай посмотреть… Это стартер. Нужна новая запчасть."),
      line("tom", "How long will it take? And how much will it cost?", "Сколько времени это займёт? И сколько будет стоить?"),
      line("mateo", "The part is about two hundred dollars. If it comes tomorrow, the van will be ready on Friday.", "Запчасть около двухсот долларов. Если её привезут завтра, фургон будет готов в пятницу."),
      line("murzik", "And if it doesn't come tomorrow?", "А если не привезут завтра?"),
      line("mateo", "Then Monday. But don't worry — June's rental company will pay. It's their van.", "Тогда в понедельник. Но не волнуйтесь — платит прокат Джун. Это их фургон."),
    ],
    gist: choice("ensea4-d1", "Кто заплатит за ремонт?", [
      ["Прокат Джун — это их фургон.", true],
      ["Том.", false],
      ["Матео бесплатно.", false],
    ]),
  },
  grammar: [
    {
      title: "If… — когда план зависит от условия",
      paragraphs: [
        "If the part comes tomorrow, the van will be ready on Friday. If it doesn't come, it'll be ready on Monday.",
        "Вопросы о будущем: How long will it take? How much will it cost? When will it be ready?",
      ],
      examples: [
        { ru: "If the weather is good, we'll go to the market.", en: "Если будет хорошая погода, мы пойдём на рынок." },
        { ru: "When will it be ready? — If all goes well, tomorrow.", en: "Когда будет готово? — Если всё пойдёт хорошо, завтра." },
      ],
    },
  ],
  tasks: [
    listen("ensea4-t1", "Послушай. Сколько стоит запчасть?", "The part is about two hundred dollars. If it comes tomorrow, the van will be ready on Friday.", [
      ["Около двухсот долларов.", true],
      ["Около двадцати долларов.", false],
      ["Около двух тысяч долларов.", false],
    ]),
    choice("ensea4-t2", "Как спросить «Сколько времени это займёт?»", [
      ["How long will it take?", true],
      ["How long does it will take?", false],
      ["How much time it takes will?", false],
    ], { skill: "grammar" }),
    fill("ensea4-t3", "Выбери правильную форму: «Если запчасть придёт завтра, фургон будет готов в пятницу».", "If the part", "tomorrow, the van will be ready on Friday.", "comes", ["comes", "will come", "came"], { skill: "grammar" }),
    read("ensea4-t4", "Прочитай сообщение от Матео. Когда можно забрать фургон?", "Mateo's Garage: Good news! The part came yesterday. Your van will be ready on Friday after 4 pm. See you! — M.", [
      ["В пятницу после четырёх.", true],
      ["В понедельник.", false],
      ["Завтра утром.", false],
    ]),
    match("ensea4-t5", "Соедини пары.", [
      ["a mechanic", "автомеханик"],
      ["a part", "запчасть"],
      ["How much will it cost?", "Сколько это будет стоить?"],
      ["What's wrong with it?", "Что с ним не так?"],
    ], { skill: "words" }),
    tf("ensea4-t6", "Если запчасть не привезут завтра, фургон будет готов в понедельник.", true, "listening"),
    speak("ensea4-t7", "Your car will be ready on Friday.", "On Friday? How much will it cost? And if the part comes early, will it be ready sooner?", "В пятницу? Сколько это будет стоить? А если запчасть привезут раньше, будет готово раньше?", {
      help: "Задай механику вслух вопросы о цене и сроках.",
    }),
  ],
  reward: {
    itemId: "gas-can",
    itemName: "Красная канистра",
    itemNameRu: "Gas can",
    ru: "If we run out, we'll be ready!",
    en: "Если бензин кончится — мы готовы!",
    a11y: "В углу фургона стоит небольшая красная канистра для бензина, рядом — промасленная тряпка и визитка мастерской.",
    image: p("gas-can"),
    steps: ["Запчасть приходит на следующий день.", "Матео чинит фургон, и в пятницу он готов.", "И дарит им маленькую красную канистру.", "«Если застрянете на дороге — будет запас»."],
    bridge: "Фургон снова на ходу. А Сиэтл снова под дождём. Мурзик смотрит в окно и строит планы на субботу.",
  },
};

const seattle5: Lesson = {
  id: "en-a2-seattle-5",
  level: "A2",
  cityId: "en-seattle",
  number: 5,
  title: "Rain or shine — В дождь и в солнце",
  minutes: 8,
  goals: ["Строить планы с условием", "Договориться на рынке", "If it rains, we'll… / If you buy…, I'll…"],
  vocabNote: "Rain or shine — «в любую погоду». A pound — фунт, мера веса в США (около 450 граммов). Clams — съедобные моллюски в раковинах.",
  vocab: [
    v("ensea5-1", "If it rains, we'll cook under the awning.", "Если пойдёт дождь, будем готовить под навесом.", "Фургон с раскрытым навесом под мелким дождём.", "Послушать If it rains, we'll cook under the awning", p("l5-1")),
    v("ensea5-2", "If the sun comes out…", "Если выглянет солнце…", "Солнце выглядывает из-за туч над заливом.", "Послушать If the sun comes out", p("l5-2")),
    v("ensea5-3", "rain or shine", "в любую погоду", "Половина картинки — дождь, половина — солнце.", "Послушать rain or shine", p("l5-3")),
    v("ensea5-4", "a fish market", "рыбный рынок", "Рыбный прилавок на льду, продавцы в оранжевых фартуках.", "Послушать a fish market", p("l5-4")),
    v("ensea5-5", "clams", "моллюски (в раковинах)", "Горка серых раковин в ящике со льдом.", "Послушать clams", p("l5-5")),
    v("ensea5-6", "two pounds", "два фунта (чуть меньше килограмма)", "Весы показывают 2 lb.", "Послушать two pounds", p("l5-6")),
    v("ensea5-7", "If you buy two pounds, I'll give you a discount.", "Если возьмёте два фунта, сделаю скидку.", "Продавец подмигивает Мурзику.", "Послушать If you buy two pounds, I'll give you a discount", p("l5-7")),
    v("ensea5-8", "Are they fresh?", "Они свежие?", "Мурзик нюхает раковину.", "Послушать Are they fresh", p("l5-8")),
  ],
  letters: [
    letter("pound = [паунд]", "ou = [ау]. Pound — и фунт веса, и фунт стерлингов.", "two pounds of clams", "два фунта моллюсков"),
    letter("shine = [шайн]", "i перед согласной и e на конце читается [ай].", "rain or shine", "в любую погоду"),
  ],
  dialogue: {
    title: "Рынок у залива",
    note: "Рядом с заливом — большой старый рынок. Продавцы рыбы там иногда перебрасывают рыбу через прилавок.",
    lines: [
      line("murzik", "Tom, on Saturday we'll sell food by the market. Rain or shine!", "Том, в субботу будем продавать еду у рынка. В любую погоду!"),
      line("tom", "If it rains, we'll cook under the awning. If the sun comes out, we'll put out tables.", "Если пойдёт дождь, будем готовить под навесом. Если выглянет солнце, поставим столики."),
      line("murzik", "And what will we cook?", "А что будем готовить?"),
      line("june", "Clam chowder, of course! My husband Walt will show you. But first — clams.", "Конечно, похлёбку с моллюсками! Мой муж Уолт вам покажет. Но сначала — моллюски."),
      line("seller", "Fresh clams! If you buy two pounds, I'll give you a discount.", "Свежие моллюски! Если возьмёте два фунта, сделаю скидку."),
      line("murzik", "Are they fresh?", "Они свежие?"),
      line("seller", "Caught this morning! If you don't believe me, ask the seagulls.", "Пойманы сегодня утром! Если не верите, спросите у чаек."),
    ],
    gist: choice("ensea5-d1", "Что будут делать, если пойдёт дождь?", [
      ["Готовить под навесом.", true],
      ["Отменят торговлю.", false],
      ["Поставят столики на улице.", false],
    ]),
  },
  grammar: [
    {
      title: "If… для планов и предложений",
      paragraphs: [
        "Планы с условием: If it rains, we'll cook under the awning. If the sun comes out, we'll put out tables.",
        "Предложение на рынке: If you buy two pounds, I'll give you a discount. If you don't like it, I'll give you your money back.",
      ],
      examples: [
        { ru: "If you come early, I'll save you the best seat.", en: "Если придёшь пораньше, я займу тебе лучшее место." },
        { ru: "If it's sunny tomorrow, we'll go to the beach.", en: "Если завтра будет солнечно, поедем на пляж." },
      ],
    },
  ],
  tasks: [
    listen("ensea5-t1", "Послушай. Что предлагает продавец?", "Fresh clams! If you buy two pounds, I'll give you a discount.", [
      ["Скидку, если взять два фунта.", true],
      ["Бесплатную доставку.", false],
      ["Рыбу в подарок.", false],
    ]),
    choice("ensea5-t2", "Как сказать «Если придёшь пораньше, я займу тебе место»?", [
      ["If you come early, I'll save you a seat.", true],
      ["If you will come early, I save you a seat.", false],
      ["If you came early, I'll saving you a seat.", false],
    ], { skill: "grammar" }),
    fill("ensea5-t3", "Выбери правильную форму: «Если выглянет солнце, поставим столики».", "If the sun comes out,", "put out tables.", "we'll", ["we'll", "we're", "we did"], { skill: "grammar" }),
    read("ensea5-t4", "Прочитай ценник. Сколько стоят два фунта моллюсков со скидкой?", "FRESH CLAMS\n$9 per pound\nBuy 2 pounds — $16!\nCaught this morning", [
      ["16 долларов.", true],
      ["18 долларов.", false],
      ["9 долларов.", false],
    ]),
    match("ensea5-t5", "Соедини пары.", [
      ["rain or shine", "в любую погоду"],
      ["a fish market", "рыбный рынок"],
      ["clams", "моллюски"],
      ["Are they fresh?", "Они свежие?"],
    ], { skill: "words" }),
    tf("ensea5-t6", "Похлёбку научит готовить муж Джун.", true, "listening"),
    speak("ensea5-t7", "What will you do this weekend?", "If the weather is good, I'll go to the park. If it rains, I'll stay at home and cook something nice.", "Если будет хорошая погода, пойду в парк. Если пойдёт дождь, останусь дома и приготовлю что-нибудь вкусное.", {
      help: "Расскажи вслух о планах на выходные: If…, I'll…",
    }),
  ],
  reward: {
    itemId: "rain-poncho",
    itemName: "Дождевик",
    itemNameRu: "Rain poncho",
    ru: "Rain or shine — I'm ready!",
    en: "В дождь и в солнце — я готов!",
    a11y: "На крючке в фургоне висит маленький жёлтый дождевик с капюшоном, рядом — большой для Тома.",
    image: p("rain-poncho"),
    steps: ["Джун смеётся: «В Сиэтле без дождевика нельзя».", "Она дарит им два жёлтых дождевика.", "Большой для Тома и совсем маленький для Мурзика.", "У маленького капюшон с ушками."],
    bridge: "Вечером у Джун дома пахнет луком и сливками. Уолт, бывший рыбак, уже надел фартук.",
  },
};

const seattle6: Lesson = {
  id: "en-a2-seattle-6",
  level: "A2",
  cityId: "en-seattle",
  number: 6,
  title: "Walt's clam chowder — Похлёбка Уолта",
  minutes: 8,
  goals: ["Понять рецепт и предупреждения", "If you…, it'll…: что случится, если…", "Повторить кухонные глаголы"],
  vocabNote: "Chowder — густая похлёбка со сливками. Tough — жёсткий (о мясе, моллюсках). Stir — помешивать.",
  vocab: [
    v("ensea6-1", "clam chowder", "похлёбка с моллюсками", "Глубокая миска густого белого супа с крекерами.", "Послушать clam chowder", p("l6-1")),
    v("ensea6-2", "Chop the onions finely.", "Мелко нарежь лук.", "Уолт мелко режет лук, у Мурзика слёзы.", "Послушать Chop the onions finely", p("l6-2")),
    v("ensea6-3", "Stir it all the time.", "Всё время помешивай.", "Мурзик двумя лапами держит большую деревянную ложку.", "Послушать Stir it all the time", p("l6-3")),
    v("ensea6-4", "cream", "сливки", "Кувшин густых сливок.", "Послушать cream", p("l6-4")),
    v("ensea6-5", "If you boil them too long, they'll get tough.", "Если варить их слишком долго, они станут жёсткими.", "Уолт строго поднимает палец над кастрюлей.", "Послушать If you boil them too long, they'll get tough", p("l6-5")),
    v("ensea6-6", "If you don't stir it, it'll burn.", "Если не помешивать, пригорит.", "Мурзик испуганно смотрит на дымок над кастрюлей.", "Послушать If you don't stir it, it'll burn", p("l6-6")),
    v("ensea6-7", "Add the clams at the end.", "Добавь моллюсков в конце.", "Раковины падают в кастрюлю.", "Послушать Add the clams at the end", p("l6-7")),
    v("ensea6-8", "a bread bowl", "хлебная миска (суп в круглой булке)", "Круглая булка, внутри которой налит суп.", "Послушать a bread bowl", p("l6-8")),
  ],
  letters: [
    letter("chowder = [чАудэр]", "ow = [ау], как в now.", "a bowl of clam chowder", "миска похлёбки"),
    letter("tough = [таф]", "gh на конце здесь читается как [ф]: tough [таф], enough [инАф].", "They'll get tough.", "Они станут жёсткими."),
  ],
  dialogue: {
    title: "Кухня Уолта",
    note: "Уолт, муж Джун, сорок лет ловил рыбу. В Америке похлёбку иногда подают прямо в круглой булке.",
    lines: [
      line("walt", "First, chop the onions finely. Then cook them in butter.", "Сначала мелко нарежь лук. Потом обжарь его на масле."),
      line("murzik", "My eyes! If I chop more onions, I'll cry all night!", "Мои глаза! Если я нарежу ещё лука, буду плакать всю ночь!"),
      line("walt", "Ha! Now the potatoes, water and cream. And stir it all the time. If you don't stir it, it'll burn.", "Ха! Теперь картошка, вода и сливки. И всё время помешивай. Если не помешивать, пригорит."),
      line("tom", "When do we add the clams?", "Когда добавлять моллюсков?"),
      line("walt", "At the very end. If you boil them too long, they'll get tough — like old boots.", "В самом конце. Если варить их слишком долго, они станут жёсткими — как старые ботинки."),
      line("june", "And if you serve it in a bread bowl, everyone in Seattle will love you.", "А если подадите её прямо в булке, весь Сиэтл вас полюбит."),
    ],
    gist: choice("ensea6-d1", "Когда добавлять моллюсков?", [
      ["В самом конце.", true],
      ["В самом начале, вместе с луком.", false],
      ["Их не добавляют.", false],
    ]),
  },
  grammar: [
    {
      title: "If you…, it'll…: предупреждение",
      paragraphs: [
        "Предупреждение о последствиях: If you boil them too long, they'll get tough. If you don't stir it, it'll burn.",
        "Get + прилагательное — «становиться»: get tough (стать жёстким), get cold (остыть), get dark (стемнеть).",
      ],
      examples: [
        { ru: "If you leave it in the sun, it'll get warm.", en: "Если оставишь на солнце, нагреется." },
        { ru: "Eat it now — if you wait, it'll get cold.", en: "Ешь сейчас — если подождёшь, остынет." },
      ],
    },
  ],
  tasks: [
    listen("ensea6-t1", "Послушай. Что будет, если не помешивать?", "Now the potatoes, water and cream. And stir it all the time. If you don't stir it, it'll burn.", [
      ["Похлёбка пригорит.", true],
      ["Похлёбка остынет.", false],
      ["Моллюски убегут.", false],
    ]),
    choice("ensea6-t2", "Как сказать «Если подождёшь, остынет»?", [
      ["If you wait, it'll get cold.", true],
      ["If you will wait, it gets cold.", false],
      ["If you wait, it gets colder will.", false],
    ], { skill: "grammar" }),
    fill("ensea6-t3", "Выбери правильное слово: «Если варить слишком долго, они станут жёсткими».", "If you boil them too long, they'll", "tough.", "get", ["get", "got", "getting"], { skill: "grammar" }),
    read("ensea6-t4", "Прочитай рецепт Уолта. Что делать после лука?", "WALT'S CLAM CHOWDER\n1. Chop 2 onions finely, cook in butter.\n2. Add potatoes, water and cream.\n3. Stir all the time!\n4. Add clams at the end — 5 minutes only.\n5. Serve in a bread bowl.", [
      ["Добавить картошку, воду и сливки.", true],
      ["Сразу добавить моллюсков.", false],
      ["Подать в хлебе.", false],
    ]),
    match("ensea6-t5", "Соедини пары.", [
      ["cream", "сливки"],
      ["Stir it all the time.", "Всё время помешивай."],
      ["a bread bowl", "хлебная миска"],
      ["Chop the onions finely.", "Мелко нарежь лук."],
    ], { skill: "words" }),
    tf("ensea6-t6", "Моллюсков нужно варить долго, чтобы они стали мягче.", false, "listening"),
    speak("ensea6-t7", "Give me a cooking tip!", "If you make soup, don't boil it too long. And stir it all the time — if you don't, it'll burn.", "Если варишь суп, не кипяти его слишком долго. И всё время помешивай — иначе пригорит.", {
      help: "Дай вслух совет на кухне: If you…, it'll…",
    }),
  ],
  reward: {
    itemId: "clam-bucket",
    itemName: "Ведёрко для моллюсков",
    itemNameRu: "Clam bucket",
    ru: "Walt's old bucket — with forty years of stories!",
    en: "Старое ведёрко Уолта — и сорок лет историй!",
    a11y: "У двери фургона стоит старое оцинкованное ведёрко с вмятинами; на боку краской написано «WALT».",
    image: p("clam-bucket"),
    steps: ["Похлёбка получилась густая и вкусная.", "Для субботы продавец с рынка привозит целый ящик моллюсков.", "А Уолт достаёт из гаража своё старое ведёрко.", "«С ним я сорок лет ходил за моллюсками».", "Теперь оно едет с фургоном."],
    bridge: "В субботу лил дождь — а потом выглянуло солнце. К фургону выстроилась очередь.",
  },
};

const seattle7: Lesson = {
  id: "en-a2-seattle-7",
  level: "A2",
  cityId: "en-seattle",
  number: 7,
  title: "Seattle exam — Экзамен: Сиэтл",
  minutes: 9,
  goals: ["Понять длинный рассказ на слух", "Говорить о планах и условиях", "Повторить всё из Сиэтла"],
  vocabNote: "Урок 7 — экзамен города: длинная аудиоистория и повторение всего из Сиэтла.",
  vocab: [
    v("ensea7-1", "Our twelfth recipe!", "Наш двенадцатый рецепт!", "Мурзик держит карточку с рецептом похлёбки.", "Послушать Our twelfth recipe", p("l7-1")),
    v("ensea7-2", "We sold out!", "Мы всё распродали!", "Пустая кастрюля и табличка SOLD OUT.", "Послушать We sold out", p("l7-2")),
    v("ensea7-3", "the line", "очередь (в Америке)", "Длинная очередь людей в дождевиках у фургона.", "Послушать the line", p("l7-3")),
    v("ensea7-4", "If you're ever in London…", "Если когда-нибудь будете в Лондоне…", "Том протягивает Джун открытку с синей дверью.", "Послушать If you're ever in London", p("l7-4")),
    v("ensea7-5", "We'll drive south.", "Мы поедем на юг.", "Дорожный атлас, палец ведёт вниз по карте.", "Послушать We'll drive south", p("l7-5")),
    v("ensea7-6", "about three hours", "около трёх часов", "Указатель на шоссе: PORTLAND 174.", "Послушать about three hours", p("l7-6")),
    v("ensea7-7", "If you need anything, call me.", "Если что-нибудь понадобится, звоните.", "Матео машет телефоном.", "Послушать If you need anything, call me", p("l7-7")),
    v("ensea7-8", "Drive safe!", "Осторожнее на дороге!", "Джун, Уолт и Матео машут под дождём.", "Послушать Drive safe", p("l7-8")),
  ],
  letters: [
    letter("twelfth = [твэлфс]", "Twelve → twelfth: в конце глухой th (кончик языка между зубами), перед ним f.", "our twelfth recipe", "наш двенадцатый рецепт"),
  ],
  dialogue: {
    title: "Суббота у рынка",
    note: "Line — очередь по-американски (в Британии — queue). Drive safe! — разговорное американское «Счастливо, осторожно на дороге!»",
    lines: [
      line("june", "Look at that line! The whole market wants your chowder.", "Посмотрите на эту очередь! Весь рынок хочет вашу похлёбку."),
      line("murzik", "We sold out! Two hundred bowls in four hours!", "Мы всё распродали! Двести мисок за четыре часа!"),
      line("walt", "Here's the recipe for your road book. Don't change it.", "Вот рецепт для вашей книги дороги. Не меняйте его."),
      line("murzik", "Our twelfth recipe! Thank you, Walt.", "Наш двенадцатый рецепт! Спасибо, Уолт."),
      line("tom", "Tomorrow we'll drive south, to Portland. It's about three hours.", "Завтра поедем на юг, в Портленд. Это около трёх часов."),
      line("mateo", "If you need anything on the road, call me.", "Если что-нибудь понадобится в дороге, звоните."),
      line("tom", "We will. And if you're ever in London, come to Hope's Café!", "Обязательно. А если когда-нибудь будете в Лондоне, приходите в кафе «Хоуп»!"),
      line("june", "Drive safe, you two! And you can return the van in Portland.", "Осторожнее на дороге, вы оба! И фургон можно вернуть в Портленде."),
    ],
    gist: choice("ensea7-d1", "Сколько мисок они продали?", [
      ["Двести, за четыре часа.", true],
      ["Сорок, за два часа.", false],
      ["Двенадцать.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем Сиэтл",
      paragraphs: [
        "Первое условное: If + Present Simple, will…: If it rains, we'll cook under the awning. If you don't stir it, it'll burn. После if — без will!",
        "Машина и дорога: rent a van, a deposit, insurance, gas, fill up the tank, the trunk, It won't start, a tow truck, a mechanic, a part, How long will it take? Американские слова: gas, trunk, line.",
      ],
      examples: [
        { ru: "If the van breaks down again, we'll call Mateo.", en: "Если фургон снова сломается, позвоним Матео." },
        { ru: "We'll sell out if the sun comes out.", en: "Мы всё распродадим, если выглянет солнце." },
      ],
    },
  ],
  tasks: [
    listen("ensea7-t1", "Аудиоистория: Джун рассказывает о своём прокате. Сколько у неё фургонов?", "I opened Rainy Day Rentals twenty years ago with one old van. Now we have twelve vans and two cars. Most of our customers are tourists. If they bring a van back dirty, I don't mind — in Seattle the rain washes it anyway. But if they bring it back without gas, I get very grumpy!", [
      ["Двенадцать фургонов.", true],
      ["Двадцать фургонов.", false],
      ["Один старый фургон.", false],
    ]),
    listen("ensea7-t2", "Послушай конец рассказа Джун. Что её сердит?", "If they bring a van back dirty, I don't mind — in Seattle the rain washes it anyway. But if they bring it back without gas, I get very grumpy!", [
      ["Когда фургон возвращают без бензина.", true],
      ["Когда фургон возвращают грязным.", false],
      ["Когда идёт дождь.", false],
    ]),
    choice("ensea7-t3", "Как сказать «Если фургон снова сломается, позвоним Матео»?", [
      ["If the van breaks down again, we'll call Mateo.", true],
      ["If the van will break down again, we call Mateo.", false],
      ["If the van broke down again, we'll calling Mateo.", false],
    ], { skill: "grammar" }),
    read("ensea7-t4", "Прочитай указатель на шоссе. Сколько миль до Портленда?", "I-5 SOUTH\nTacoma 32\nOlympia 60\nPortland 174", [
      ["174 мили.", true],
      ["60 миль.", false],
      ["32 мили.", false],
    ]),
    script("ensea7-t5", "Попрощайся с Джун и Матео.", [
      { speaker: "Матео", text: "If you need anything on the road, call me." },
      { speaker: "Ты", answer: "Thank you! We will.", options: ["Thank you! We will.", "Thank you! It won't start.", "Thank you! Two pounds, please."] },
      { speaker: "Джун", text: "Drive safe!" },
      { speaker: "Ты", answer: "Thanks! If you're ever in London, come and see us!", options: ["Thanks! If you're ever in London, come and see us!", "Thanks! If you will be in London, you come.", "Thanks! Pay at the pump."] },
    ], { skill: "review" }),
    match("ensea7-t6", "Повторяем Сиэтл: соедини пары.", [
      ["a deposit", "залог"],
      ["a tow truck", "эвакуатор"],
      ["clams", "моллюски"],
      ["the line", "очередь"],
    ], { skill: "review" }),
    speak("ensea7-t7", "What will you do if your car breaks down on a trip?", "If my car breaks down, I'll call roadside assistance. If they can't come, I'll find a mechanic nearby.", "Если машина сломается, я позвоню в службу помощи на дороге. Если они не смогут приехать, найду механика поблизости.", {
      help: "Ответь вслух: If…, I'll…",
    }),
  ],
  reward: {
    itemId: "recipe-clam-chowder",
    itemName: "Рецепт «Clam chowder»",
    itemNameRu: "Clam chowder recipe card",
    ru: "Our twelfth recipe — from a real fisherman!",
    en: "Наш двенадцатый рецепт — от настоящего рыбака!",
    a11y: "Карточка с рецептом похлёбки вклеена на двенадцатую страницу голубой тетради; в углу — капля от дождя и рисунок ракушки.",
    image: p("recipe-clam-chowder"),
    steps: ["Мурзик вклеивает рецепт Уолта на двенадцатую страницу.", "На карточку падает капля дождя — сиэтлская печать.", "Уолт рисует в углу ракушку.", "Утром фургон едет на юг, в Портленд."],
  },
};

const story: CityStory = {
  home: {
    name: "Фургон напрокат",
    nameRu: "The rented van",
    image: p("home"),
    a11y: "Белый фургон напрокат стоит на парковке у залива под дождём; вдали — колесо обозрения и высокие дома.",
  },
  keepsakeId: "recipe-clam-chowder",
  welcomeRu: "Hello, Seattle!",
  welcomeEn: "Привет, Сиэтл!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том в Сиэтле: дождливая гавань, высокая башня с круглой верхушкой и снежная гора вдали.",
  departureImage: p("departure"),
  departureA11y: "Джун, Уолт и Матео в жёлтых дождевиках машут белому фургону с голубой вывеской «Hope on Wheels».",
  finale: [
    {
      image: p("finale-1"),
      a11y: "У фургона уютно: магнитная вывеска, дорожный атлас, провода для прикуривания, красная канистра, жёлтые дождевики, ведёрко Уолта и рецепт похлёбки.",
      lines: [
        { en: "Чужой фургон стал своим — с голубой вывеской и ведёрком рыбака." },
        { en: "В книге дороги двенадцатый рецепт: похлёбка с моллюсками." },
      ],
    },
    {
      image: p("finale-2"),
      a11y: "Длинная очередь людей в дождевиках у белого фургона; над рынком выглянуло солнце, появилась радуга.",
      lines: [
        { ru: "Seattle complete!", en: "Сиэтл пройден!" },
        { en: "7 / 7 уроков" },
        { ru: "If it rains, we'll cook. If the sun comes out, we'll sell out!", en: "Если пойдёт дождь — будем готовить. Если выглянет солнце — всё распродадим!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Джун, Уолт и Матео в жёлтых дождевиках машут белому фургону с голубой вывеской «Hope on Wheels».",
      lines: [
        { ru: "Goodbye, Seattle! Thank you, June, Walt and Mateo!", en: "До свидания, Сиэтл! Спасибо, Джун, Уолт и Матео!" },
        { ru: "Next stop: Portland!", en: "Следующая остановка: Портленд!" },
      ],
    },
    {
      image: p("finale-4"),
      a11y: "Белый фургон едет на юг по шоссе среди высоких зелёных елей.",
      lines: [{ ru: "Seattle → Portland", en: "Сиэтл → Портленд" }],
    },
    {
      image: pic("en/portland/arrival"),
      a11y: "Мурзик и Том в Портленде: мосты над рекой, зелёные парки и ряды разноцветных фургонов с едой.",
      lines: [{ ru: "Hello, Portland!", en: "Привет, Портленд!" }],
    },
  ],
};

export const enSeattle = {
  id: "en-seattle",
  name: "Сиэтл",
  nameEn: "Seattle",
  lessons: [seattle1, seattle2, seattle3, seattle4, seattle5, seattle6, seattle7],
  story,
};
