import { pic } from "../art";
import { read } from "../make";
import type { CityStory, Lesson } from "../types";
import { choice, fill, letter, line, listen, match, script, speak, tf, v } from "../tr/make";

/*
 * Остин · «Деньги и цены» · A2, уроки 1–7.
 * Столица Техаса: живая музыка, летучие мыши под мостом и большой конкурс барбекю. Таша (около 30) работает
 * в банке и по выходным помогает на конкурсе. Рэй (около 55) — мастер барбекю, который двенадцать часов коптит мясо
 * в смокере. Банк и мелкие купюры, оптовый магазин и скидки, взнос и чек, чаевые, судейство — второе место.
 * Грамматика: вежливые просьбы — Could you…? Would you mind + -ing? Would you mind if I…? Could I…?
 */

const p = (name: string) => pic(`en/austin/${name}`);

const austin1: Lesson = {
  id: "en-a2-austin-1",
  level: "A2",
  cityId: "en-austin",
  number: 1,
  title: "At the bank — В банке",
  minutes: 8,
  goals: ["Разменять деньги в банке", "Could you…? — вежливая просьба", "Американские деньги: bills, quarters"],
  vocabNote: "В Америке бумажные деньги — bills (купюры), монета в 25 центов — a quarter. Could you…? — «Не могли бы вы…?»",
  vocab: [
    v("enau1-1", "Could you help me, please?", "Не могли бы вы мне помочь?", "Том у окошка банка, за стеклом улыбается Таша.", "Послушать Could you help me, please", p("l1-1")),
    v("enau1-2", "small bills", "мелкие купюры", "Веер из купюр по одному и пять долларов.", "Послушать small bills", p("l1-2")),
    v("enau1-3", "Could you break a hundred?", "Не могли бы вы разменять сотню?", "Том протягивает купюру в сто долларов.", "Послушать Could you break a hundred", p("l1-3")),
    v("enau1-4", "ones and fives", "купюры по одному и по пять долларов", "Две стопки купюр: 1 и 5.", "Послушать ones and fives", p("l1-4")),
    v("enau1-5", "a roll of quarters", "столбик монет по 25 центов", "Бумажный цилиндр с монетами.", "Послушать a roll of quarters", p("l1-5")),
    v("enau1-6", "Could I see your ID?", "Можно ваш документ?", "Таша протягивает руку за паспортом.", "Послушать Could I see your ID", p("l1-6")),
    v("enau1-7", "an ATM fee", "комиссия банкомата", "Экран банкомата: FEE $3.50.", "Послушать an ATM fee", p("l1-7")),
    v("enau1-8", "Here you go.", "Вот, пожалуйста.", "Таша кладёт деньги в маленький конверт.", "Послушать Here you go", p("l1-8")),
  ],
  letters: [
    letter("quarter = [куО:рдэр]", "qu = [ку], ar = [о:р]. В Америке t между гласными звучит почти как [д], а r в конце слышно.", "a roll of quarters", "столбик монет по 25 центов"),
    letter("ATM = [эй ти эм]", "Читается по буквам: [эй-ти-Эм] — банкомат.", "Where's the ATM?", "Где банкомат?"),
  ],
  dialogue: {
    title: "Окошко номер три",
    note: "В фургоне нужна сдача для покупателей: много мелких купюр и монет. Break a bill — разменять купюру.",
    lines: [
      line("tom", "Hi! Could you help me, please? We need change for our food truck.", "Здравствуйте! Не могли бы вы мне помочь? Нам нужна мелочь для фургона с едой."),
      line("tasha", "Sure! What do you need?", "Конечно! Что вам нужно?"),
      line("tom", "Could you break a hundred into ones and fives? And a roll of quarters, please.", "Не могли бы вы разменять сотню на купюры по одному и по пять? И столбик монет по 25 центов, пожалуйста."),
      line("tasha", "No problem. Could I see your ID?", "Без проблем. Можно ваш документ?"),
      line("murzik", "Why don't we just use the ATM?", "А почему бы просто не воспользоваться банкоматом?"),
      line("tasha", "The ATM only gives twenties. And there's an ATM fee for foreign cards. Here you go!", "Банкомат выдаёт только двадцатки. И для иностранных карт есть комиссия. Вот, пожалуйста!"),
    ],
    gist: choice("enau1-d1", "Почему они не берут деньги в банкомате?", [
      ["Банкомат выдаёт только двадцатки, и есть комиссия.", true],
      ["Банкомат сломан.", false],
      ["У них нет карты.", false],
    ]),
  },
  grammar: [
    {
      title: "Could you…? Could I…?",
      paragraphs: [
        "Could you + глагол? — вежливая просьба к другому: Could you help me? Could you break a hundred?",
        "Could I + глагол? — вежливая просьба о себе: Could I see your ID? Could I have a receipt? Отвечают: Sure! / Of course! / No problem.",
      ],
      examples: [
        { ru: "Could you speak more slowly, please?", en: "Не могли бы вы говорить помедленнее?" },
        { ru: "Could I pay by card?", en: "Можно я заплачу картой?" },
      ],
    },
  ],
  tasks: [
    listen("enau1-t1", "Послушай. Какие купюры выдаёт банкомат?", "The ATM only gives twenties. And there's an ATM fee for foreign cards.", [
      ["Только двадцатки.", true],
      ["Только сотни.", false],
      ["Любые купюры.", false],
    ]),
    choice("enau1-t2", "Как вежливо попросить «Не могли бы вы говорить помедленнее?»", [
      ["Could you speak more slowly, please?", true],
      ["Could you to speak more slowly?", false],
      ["You could speaking slowly, please?", false],
    ], { skill: "grammar" }),
    fill("enau1-t3", "Выбери правильное слово: «Можно я заплачу картой?»", "", "I pay by card?", "Could", ["Could", "Would", "Am"], { skill: "grammar" }),
    read("enau1-t4", "Прочитай экран банкомата. Какая комиссия для иностранной карты?", "WELCOME\nWithdrawals in $20 bills only\nForeign card fee: $3.50\nPress ENTER to continue", [
      ["3 доллара 50 центов.", true],
      ["20 долларов.", false],
      ["Бесплатно.", false],
    ]),
    match("enau1-t5", "Соедини пары.", [
      ["small bills", "мелкие купюры"],
      ["a roll of quarters", "столбик монет по 25 центов"],
      ["an ATM fee", "комиссия банкомата"],
      ["Here you go.", "Вот, пожалуйста."],
    ], { skill: "words" }),
    tf("enau1-t6", "Таша просит у Тома документ.", true, "listening"),
    speak("enau1-t7", "Hi! How can I help you today?", "Hi! Could you break a fifty, please? Could I have some ones and fives?", "Здравствуйте! Не могли бы вы разменять пятьдесят долларов? Можно мне купюры по одному и по пять?", {
      help: "Вежливо попроси вслух разменять деньги.",
    }),
  ],
  reward: {
    itemId: "small-bills",
    itemName: "Касса с мелочью",
    itemNameRu: "Cash box with change",
    ru: "Ones, fives, quarters — we're ready for customers!",
    en: "Доллары, пятёрки, четвертаки — мы готовы к покупателям!",
    a11y: "В жёлтом фургоне на прилавке стоит маленькая металлическая касса с отделениями для купюр и монет.",
    image: p("small-bills"),
    steps: ["Таша дарит им старую металлическую кассу.", "В ней отделения: ones, fives, tens, quarters.", "Мурзик раскладывает деньги по ячейкам.", "Звенит, как настоящий магазин."],
    bridge: "Таша рассказывает: в субботу в Остине большой конкурс барбекю. «Хотите участвовать? Только мясо нужно купить заранее — много мяса».",
  },
};

const austin2: Lesson = {
  id: "en-a2-austin-2",
  level: "A2",
  cityId: "en-austin",
  number: 2,
  title: "Is there a discount? — Есть скидка?",
  minutes: 8,
  goals: ["Спросить о скидке", "Would you mind + -ing? — вежливая просьба", "Понять цены «за фунт» и «оптом»"],
  vocabNote: "Would you mind + глагол с -ing? — «Вы не против…?», «Не могли бы вы…?» Отвечают: Not at all! — «Нисколько!» (значит «да, сделаю»).",
  vocab: [
    v("enau2-1", "a warehouse store", "оптовый магазин", "Огромный магазин с высокими полками до потолка.", "Послушать a warehouse store", p("l2-1")),
    v("enau2-2", "in bulk", "оптом, большим количеством", "Огромные упаковки мяса и мешки угля.", "Послушать in bulk", p("l2-2")),
    v("enau2-3", "Is there a discount?", "Есть скидка?", "Том показывает на гору коробок.", "Послушать Is there a discount", p("l2-3")),
    v("enau2-4", "ten percent off", "скидка десять процентов", "Жёлтый ценник: 10% OFF.", "Послушать ten percent off", p("l2-4")),
    v("enau2-5", "Would you mind checking the price?", "Вы не могли бы проверить цену?", "Продавец сканирует ценник.", "Послушать Would you mind checking the price", p("l2-5")),
    v("enau2-6", "Not at all!", "Нисколько! Конечно!", "Продавец с улыбкой кивает.", "Послушать Not at all", p("l2-6")),
    v("enau2-7", "per pound", "за фунт", "Ценник: $4.99 / lb.", "Послушать per pound", p("l2-7")),
    v("enau2-8", "a bag of charcoal", "мешок угля", "Большой бумажный мешок с древесным углём.", "Послушать a bag of charcoal", p("l2-8")),
  ],
  letters: [
    letter("percent = [пэрсЭнт]", "Ударение на второй слог: per-CENT.", "ten percent off", "скидка десять процентов"),
    letter("mind = [майнд]", "i перед nd читается [ай]: mind, find, kind.", "Would you mind…?", "Вы не против…?"),
  ],
  dialogue: {
    title: "Оптовый магазин",
    note: "Не путай: «Would you mind…?» — «Вы не против?» Если отвечают «Not at all», это значит «Не против, сделаю».",
    lines: [
      line("tom", "Excuse me. We need a lot of beef for a barbecue contest. Is there a discount if we buy in bulk?", "Извините. Нам нужно много говядины для конкурса барбекю. Есть скидка, если покупать оптом?"),
      line("seller", "Sure. Ten percent off if you buy over fifty pounds.", "Конечно. Скидка десять процентов, если берёте больше пятидесяти фунтов."),
      line("murzik", "This label says $4.99 per pound, but the shelf says $3.99. Would you mind checking the price?", "На этикетке $4.99 за фунт, а на полке $3.99. Вы не могли бы проверить цену?"),
      line("seller", "Not at all! Let me see… You're right — it's $3.99 today.", "Конечно! Дайте посмотреть… Вы правы — сегодня $3.99."),
      line("tom", "Great! And would you mind helping us with the charcoal? It's heavy.", "Отлично! И вы не могли бы помочь нам с углём? Он тяжёлый."),
      line("seller", "Not at all. How many bags?", "Конечно. Сколько мешков?"),
    ],
    gist: choice("enau2-d1", "Какая цена за фунт оказалась правильной?", [
      ["$3.99.", true],
      ["$4.99.", false],
      ["$10.", false],
    ]),
  },
  grammar: [
    {
      title: "Would you mind + -ing?",
      paragraphs: [
        "Would you mind + глагол с -ing? — очень вежливая просьба: Would you mind checking the price? Would you mind helping us?",
        "Осторожно с ответом! «Would you mind?» дословно — «Вы против?» Поэтому «Not at all!» / «No, of course not!» значит «Не против, пожалуйста!»",
      ],
      examples: [
        { ru: "Would you mind closing the window?", en: "Вы не могли бы закрыть окно?" },
        { ru: "Would you mind waiting a moment? — Not at all.", en: "Вы не могли бы немного подождать? — Конечно." },
      ],
    },
  ],
  tasks: [
    listen("enau2-t1", "Послушай. Когда дают скидку?", "Sure. Ten percent off if you buy over fifty pounds.", [
      ["Если купить больше пятидесяти фунтов.", true],
      ["Если купить больше пятнадцати фунтов.", false],
      ["Скидки нет.", false],
    ]),
    choice("enau2-t2", "Как сказать «Вы не могли бы закрыть окно?»", [
      ["Would you mind closing the window?", true],
      ["Would you mind to close the window?", false],
      ["Would you mind close the window?", false],
    ], { skill: "grammar" }),
    fill("enau2-t3", "Выбери правильную форму: «Вы не могли бы помочь нам?»", "Would you mind", "us?", "helping", ["helping", "to help", "help"], { skill: "grammar" }),
    read("enau2-t4", "Прочитай ценники. Сколько стоят два мешка угля?", "CHARCOAL — 20 lb bag: $12\nBUY 2 — SAVE $4!\nBEEF BRISKET: $3.99 / lb (today only)", [
      ["20 долларов.", true],
      ["24 доллара.", false],
      ["12 долларов.", false],
    ]),
    match("enau2-t5", "Соедини пары.", [
      ["in bulk", "оптом"],
      ["Is there a discount?", "Есть скидка?"],
      ["per pound", "за фунт"],
      ["Not at all!", "Нисколько! Конечно!"],
    ], { skill: "words" }),
    tf("enau2-t6", "Продавец отказывается проверить цену.", false, "listening"),
    speak("enau2-t7", "Can I help you?", "Yes, please. Is there a discount if I buy two? And would you mind checking the price of this one?", "Да, пожалуйста. Есть скидка, если взять две? И вы не могли бы проверить цену вот этой?", {
      help: "Спроси вслух о скидке и вежливо попроси проверить цену.",
    }),
  ],
  reward: {
    itemId: "bulk-receipt",
    itemName: "Самый длинный чек",
    itemNameRu: "The longest receipt",
    ru: "The longest receipt in Texas!",
    en: "Самый длинный чек в Техасе!",
    a11y: "Над окошком жёлтого фургона висит очень длинный чек — он спускается до самого пола.",
    image: p("bulk-receipt"),
    steps: ["Чек получился длиннее Мурзика.", "Мясо, уголь, соль, перец, хлеб, огурцы.", "Скидка — десять процентов.", "Мурзик вешает чек над окошком, как трофей."],
    bridge: "Чтобы участвовать в конкурсе, нужно зарегистрироваться и заплатить взнос. Таша сидит за столиком с бланками.",
  },
};

const austin3: Lesson = {
  id: "en-a2-austin-3",
  level: "A2",
  cityId: "en-austin",
  number: 3,
  title: "The entry fee — Взнос за участие",
  minutes: 8,
  goals: ["Зарегистрироваться и заплатить взнос", "Could I have a receipt?", "Would you mind if I…? — «Вы не против, если я…?»"],
  vocabNote: "An entry fee — взнос за участие. A receipt — чек, квитанция. Would you mind if I…? — «Вы не против, если я…?»",
  vocab: [
    v("enau3-1", "an entry fee", "взнос за участие", "Табличка: ENTRY FEE $75.", "Послушать an entry fee", p("l3-1")),
    v("enau3-2", "Could I have a receipt?", "Можно чек?", "Таша отрывает квитанцию.", "Послушать Could I have a receipt", p("l3-2")),
    v("enau3-3", "Would you mind if I pay in cash?", "Вы не против, если я заплачу наличными?", "Том достаёт пачку мелких купюр.", "Послушать Would you mind if I pay in cash", p("l3-3")),
    v("enau3-4", "That's fine.", "Хорошо, можно.", "Таша кивает.", "Послушать That's fine", p("l3-4")),
    v("enau3-5", "Sign here, please.", "Распишитесь здесь, пожалуйста.", "Ручка над строчкой для подписи.", "Послушать Sign here, please", p("l3-5")),
    v("enau3-6", "your team number", "ваш номер команды", "Большая табличка с номером 23.", "Послушать your team number", p("l3-6")),
    v("enau3-7", "Would you mind spelling that?", "Вы не могли бы продиктовать по буквам?", "Таша держит ручку наготове.", "Послушать Would you mind spelling that", p("l3-7")),
    v("enau3-8", "non-refundable", "без возврата (деньги не возвращают)", "Мелкий текст внизу бланка.", "Послушать non-refundable", p("l3-8")),
  ],
  letters: [
    letter("receipt = [рисИ:т]", "p в receipt не читается: [рисИ:т].", "Could I have a receipt?", "Можно чек?"),
    letter("fee = [фи:]", "ee — долгое [и:]: fee, free, three.", "an entry fee", "взнос"),
  ],
  dialogue: {
    title: "Столик регистрации",
    note: "Таша работает в банке, а по выходным помогает на конкурсе барбекю. В Америке фамилию часто просят продиктовать по буквам.",
    lines: [
      line("tasha", "Hi again! Team name?", "Снова привет! Название команды?"),
      line("tom", "Hope on Wheels. The entry fee is seventy-five dollars, right? Would you mind if I pay in cash?", "«Hope on Wheels». Взнос — семьдесят пять долларов, верно? Вы не против, если я заплачу наличными?"),
      line("tasha", "That's fine. And your first name? Would you mind spelling that?", "Хорошо. А ваше имя? Вы не могли бы продиктовать по буквам?"),
      line("tom", "T-O-M. Tom. And Hope — like the team name.", "Ти-оу-эм. Том. А фамилия Хоуп — как название команды."),
      line("tasha", "Sign here, please. Your team number is twenty-three. The fee is non-refundable.", "Распишитесь здесь, пожалуйста. Ваш номер команды — двадцать три. Взнос не возвращается."),
      line("murzik", "Could I have a receipt?", "Можно чек?"),
      line("tasha", "Of course. Here you go — and good luck!", "Конечно. Вот, пожалуйста — и удачи!"),
    ],
    gist: choice("enau3-d1", "Какой у них номер команды?", [
      ["Двадцать три.", true],
      ["Семьдесят пять.", false],
      ["Тридцать два.", false],
    ]),
  },
  grammar: [
    {
      title: "Would you mind if I…?",
      paragraphs: [
        "Would you mind if I + настоящее время: if I pay, if I sit — «Вы не против, если я…?» Можно и в прошедшем: if I paid — так говорят ещё вежливее и официальнее.",
        "Ответы: That's fine. / Not at all. / Go ahead. — можно. I'm sorry, but… — нельзя.",
      ],
      examples: [
        { ru: "Would you mind if I sit here? — Go ahead!", en: "Вы не против, если я сяду здесь? — Садитесь!" },
        { ru: "Would you mind if I take a photo? — Not at all.", en: "Вы не против, если я сфотографирую? — Пожалуйста." },
      ],
    },
  ],
  tasks: [
    listen("enau3-t1", "Послушай. Сколько стоит взнос?", "The entry fee is seventy-five dollars, right? Would you mind if I pay in cash?", [
      ["Семьдесят пять долларов.", true],
      ["Семнадцать долларов.", false],
      ["Двадцать три доллара.", false],
    ]),
    choice("enau3-t2", "Как спросить «Вы не против, если я сфотографирую?»", [
      ["Would you mind if I take a photo?", true],
      ["Would you mind if I taking a photo?", false],
      ["Would you mind I to take a photo?", false],
    ], { skill: "grammar" }),
    fill("enau3-t3", "Выбери правильное слово: «Можно чек?»", "Could I", "a receipt?", "have", ["have", "having", "to have"], { skill: "grammar" }),
    read("enau3-t4", "Прочитай бланк. Можно ли вернуть взнос?", "AUSTIN BBQ CONTEST — ENTRY FORM\nTeam: Hope on Wheels · No. 23\nEntry fee: $75 (non-refundable)\nCheck-in: Saturday 5:00 am\nJudging: 1:00 pm", [
      ["Нет, взнос не возвращается.", true],
      ["Да, в любой момент.", false],
      ["Да, если не понравится.", false],
    ]),
    match("enau3-t5", "Соедини пары.", [
      ["an entry fee", "взнос"],
      ["Sign here, please.", "Распишитесь здесь."],
      ["your team number", "ваш номер команды"],
      ["non-refundable", "без возврата"],
    ], { skill: "words" }),
    tf("enau3-t6", "Том платит картой.", false, "listening"),
    speak("enau3-t7", "That's seventy-five dollars, please.", "Would you mind if I pay in cash? And could I have a receipt, please?", "Вы не против, если я заплачу наличными? И можно чек, пожалуйста?", {
      help: "Заплати вслух и вежливо попроси чек.",
    }),
  ],
  reward: {
    itemId: "contest-number",
    itemName: "Номер команды 23",
    itemNameRu: "Team number 23",
    ru: "Team twenty-three — that's us!",
    en: "Команда двадцать три — это мы!",
    a11y: "На борту жёлтого фургона висит большая табличка с номером 23 и звездой Техаса.",
    image: p("contest-number"),
    steps: ["Таша выдаёт табличку с номером 23.", "На ней звезда Техаса.", "Мурзик вешает её на борт фургона.", "До конкурса — три дня. А барбекю они никогда не делали."],
    bridge: "Таша знакомит их с Рэем: «Рэй — лучший мастер барбекю в городе. Если кто-то вам поможет — то он».",
  },
};

const austin4: Lesson = {
  id: "en-a2-austin-4",
  level: "A2",
  cityId: "en-austin",
  number: 4,
  title: "Low and slow — Медленно и на слабом огне",
  minutes: 8,
  goals: ["Попросить мастера научить", "Would you mind showing us…?", "Понять безопасность у огня"],
  vocabNote: "A smoker — коптильня для барбекю. Low and slow — «низкая температура и долго»: главный секрет техасского барбекю. Brisket — говяжья грудинка.",
  vocab: [
    v("enau4-1", "a smoker", "коптильня", "Большая чёрная металлическая бочка с трубой.", "Послушать a smoker", p("l4-1")),
    v("enau4-2", "brisket", "говяжья грудинка", "Большой кусок мяса с чёрной корочкой.", "Послушать brisket", p("l4-2")),
    v("enau4-3", "Would you mind showing us?", "Вы не могли бы нам показать?", "Том и Мурзик смотрят на Рэя с надеждой.", "Послушать Would you mind showing us", p("l4-3")),
    v("enau4-4", "salt and black pepper", "соль и чёрный перец", "Две большие баночки: соль и перец.", "Послушать salt and black pepper", p("l4-4")),
    v("enau4-5", "for twelve hours", "двенадцать часов", "Часы, обведённые по кругу.", "Послушать for twelve hours", p("l4-5")),
    v("enau4-6", "Stay away from the fire.", "Держись подальше от огня.", "Рэй вытягивает руку, не пуская Мурзика к смокеру.", "Послушать Stay away from the fire", p("l4-6")),
    v("enau4-7", "Could you keep an eye on it?", "Не мог бы ты присмотреть за ним?", "Термометр на крышке смокера и его маленький экранчик в руке у Мурзика.", "Послушать Could you keep an eye on it", p("l4-7")),
    v("enau4-8", "Patience is the secret.", "Терпение — вот секрет.", "Рэй сидит в кресле-качалке с чашкой кофе.", "Послушать Patience is the secret", p("l4-8")),
  ],
  letters: [
    letter("brisket = [брИскит]", "Ударение на первый слог: BRIS-ket.", "Texas brisket", "техасская грудинка"),
    letter("patience = [пЭйшнс]", "ti здесь звучит как [ш]: patience, station, nation.", "Patience is the secret.", "Терпение — вот секрет."),
  ],
  dialogue: {
    title: "У смокера Рэя",
    note: "Огонь и смокер — дело взрослых. Мурзик помогает с солью и перцем и следит за термометром издалека.",
    lines: [
      line("tom", "Ray, we've never made Texas barbecue. Would you mind showing us?", "Рэй, мы никогда не делали техасское барбекю. Вы не могли бы нам показать?"),
      line("ray", "Not at all. Look: brisket. Just salt and black pepper. Nothing else.", "Конечно. Смотрите: грудинка. Только соль и чёрный перец. Больше ничего."),
      line("murzik", "How long does it cook?", "Сколько она готовится?"),
      line("ray", "In the smoker, low and slow, for twelve hours. Murzik, stay away from the fire — it's very hot.", "В коптильне, на слабом огне, двенадцать часов. Мурзик, держись подальше от огня — он очень горячий."),
      line("murzik", "OK. Could I watch the thermometer — from here?", "Хорошо. Можно я буду следить за термометром — отсюда?"),
      line("ray", "Good idea. Tom, could you keep an eye on the fire? I need a coffee. Patience is the secret.", "Хорошая мысль. Том, не мог бы ты присмотреть за огнём? Мне нужен кофе. Терпение — вот секрет."),
    ],
    gist: choice("enau4-d1", "Сколько часов готовится грудинка?", [
      ["Двенадцать.", true],
      ["Два.", false],
      ["Двадцать.", false],
    ]),
  },
  grammar: [
    {
      title: "Просьбы: сравниваем",
      paragraphs: [
        "Can you…? — просто, с друзьями. Could you…? — вежливо. Would you mind + -ing? — очень вежливо.",
        "Could I…? / Can I…? — разрешение для себя. Would you mind if I…? — очень вежливо о себе.",
      ],
      examples: [
        { ru: "Can you pass the salt? — Could you pass the salt? — Would you mind passing the salt?", en: "Передай соль. — Ты не можешь передать соль? — Тебя не затруднит передать соль?" },
        { ru: "Could I try a piece?", en: "Можно мне попробовать кусочек?" },
      ],
    },
  ],
  tasks: [
    listen("enau4-t1", "Послушай. Чем Рэй посыпает грудинку?", "Not at all. Look: brisket. Just salt and black pepper. Nothing else.", [
      ["Только солью и чёрным перцем.", true],
      ["Сахаром и чесноком.", false],
      ["Острым соусом.", false],
    ]),
    choice("enau4-t2", "Какая просьба самая вежливая?", [
      ["Would you mind passing the salt?", true],
      ["Pass the salt.", false],
      ["Salt!", false],
    ], { skill: "grammar" }),
    fill("enau4-t3", "Выбери правильную форму: «Вы не могли бы нам показать?»", "Would you mind", "us?", "showing", ["showing", "show", "to show"], { skill: "grammar" }),
    read("enau4-t4", "Прочитай табличку на смокере. Что запрещено?", "RAY'S SMOKER\nHOT! DO NOT TOUCH!\nKids & pets: stay 10 feet away\nLow & slow: 225°F, 12 hours", [
      ["Трогать смокер; детям и животным подходить ближе трёх метров.", true],
      ["Готовить больше двух часов.", false],
      ["Пить кофе рядом.", false],
    ]),
    match("enau4-t5", "Соедини пары.", [
      ["a smoker", "коптильня"],
      ["brisket", "говяжья грудинка"],
      ["Stay away from the fire.", "Держись подальше от огня."],
      ["Patience is the secret.", "Терпение — вот секрет."],
    ], { skill: "words" }),
    tf("enau4-t6", "Мурзик сам подкладывает дрова в смокер.", false, "listening"),
    speak("enau4-t7", "You want a chef to teach you. What do you say?", "Excuse me, would you mind showing me how you make this? Could I watch you cook?", "Простите, вы не могли бы показать, как вы это готовите? Можно я посмотрю, как вы готовите?", {
      help: "Очень вежливо попроси вслух научить тебя.",
    }),
  ],
  reward: {
    itemId: "smoker-thermometer",
    itemName: "Термометр для смокера",
    itemNameRu: "Smoker thermometer",
    ru: "Two twenty-five — perfect!",
    en: "Двести двадцать пять — идеально!",
    a11y: "На стене фургона висит большой круглый термометр со стрелкой и надписью LOW & SLOW.",
    image: p("smoker-thermometer"),
    steps: ["Мурзик весь вечер следит за термометром — издалека, по маленькому экранчику.", "Стрелка всё время на 225.", "Рэй дарит ему старый запасной термометр.", "«У тебя есть терпение, малыш. Это главное»."],
    bridge: "Пока мясо коптится, Рэй предлагает поторговать на площадке рядом. «Посмотрим, как вы умеете считать сдачу».",
  },
};

const austin5: Lesson = {
  id: "en-a2-austin-5",
  level: "A2",
  cityId: "en-austin",
  number: 5,
  title: "Keep the change — Сдачи не надо",
  minutes: 8,
  goals: ["Принять оплату и дать сдачу", "Понять американские чаевые", "Вежливо исправить ошибку"],
  vocabNote: "A tip — чаевые. A tip jar — банка для чаевых. Keep the change — «сдачи не надо».",
  vocab: [
    v("enau5-1", "That'll be twelve fifty.", "С вас двенадцать пятьдесят.", "Мурзик показывает на табличку с ценой.", "Послушать That'll be twelve fifty", p("l5-1")),
    v("enau5-2", "Here's a twenty.", "Вот двадцать.", "Покупатель протягивает купюру в двадцать долларов.", "Послушать Here's a twenty", p("l5-2")),
    v("enau5-3", "Your change is seven fifty.", "Ваша сдача — семь пятьдесят.", "Мурзик отсчитывает купюры и монеты.", "Послушать Your change is seven fifty", p("l5-3")),
    v("enau5-4", "a tip jar", "банка для чаевых", "Стеклянная банка с надписью TIPS.", "Послушать a tip jar", p("l5-4")),
    v("enau5-5", "Could you check the change again?", "Не могли бы вы пересчитать сдачу?", "Покупательница хмурится над монетами.", "Послушать Could you check the change again", p("l5-5")),
    v("enau5-6", "My mistake. Sorry about that.", "Моя ошибка. Простите.", "Мурзик виновато прижимает уши.", "Послушать My mistake. Sorry about that", p("l5-6")),
    v("enau5-7", "Do you take cards?", "Вы принимаете карты?", "Покупатель держит карту.", "Послушать Do you take cards", p("l5-7")),
    v("enau5-8", "Cash only, sorry.", "Только наличные, простите.", "Табличка CASH ONLY.", "Послушать Cash only, sorry", p("l5-8")),
  ],
  letters: [
    letter("change = [чейндж]", "a перед nge читается [эй]: change, strange.", "Keep the change.", "Сдачи не надо."),
    letter("twelve fifty = [туэлв фИфти]", "Цены так и говорят: twelve fifty = $12.50.", "That'll be twelve fifty.", "С вас двенадцать пятьдесят."),
  ],
  dialogue: {
    title: "Окошко жёлтого фургона",
    note: "В Америке в кафе и фургонах часто оставляют чаевые — в банку на прилавке.",
    lines: [
      line("murzik", "Two sandwiches and a lemonade. That'll be twelve fifty.", "Два сэндвича и лимонад. С вас двенадцать пятьдесят."),
      line("passerby", "Here's a twenty.", "Вот двадцать."),
      line("murzik", "Your change is… six fifty.", "Ваша сдача… шесть пятьдесят."),
      line("passerby", "Hmm. Could you check the change again?", "Хм. Не могли бы вы пересчитать сдачу?"),
      line("murzik", "Oh! Twenty minus twelve fifty is seven fifty. My mistake. Sorry about that.", "Ой! Двадцать минус двенадцать пятьдесят — семь пятьдесят. Моя ошибка. Простите."),
      line("passerby", "No problem. Actually — keep the change! Put it in the tip jar.", "Ничего. Знаешь что — сдачи не надо! Положи её в банку для чаевых."),
    ],
    gist: choice("enau5-d1", "Какая правильная сдача с двадцати долларов?", [
      ["Семь пятьдесят.", true],
      ["Шесть пятьдесят.", false],
      ["Двенадцать пятьдесят.", false],
    ]),
  },
  grammar: [
    {
      title: "Вежливо исправить ошибку",
      paragraphs: [
        "Покупатель: Could you check the change again? / I think there's a mistake. Продавец: My mistake. Sorry about that. / You're right, here you go.",
        "Цены вслух: $12.50 — twelve fifty, $7.50 — seven fifty, $3.99 — three ninety-nine.",
      ],
      examples: [
        { ru: "Excuse me, I think there's a mistake with my change.", en: "Простите, кажется, вы ошиблись со сдачей." },
        { ru: "You're right. Sorry about that!", en: "Вы правы. Простите!" },
      ],
    },
  ],
  tasks: [
    listen("enau5-t1", "Послушай. Сколько стоит заказ?", "Two sandwiches and a lemonade. That'll be twelve fifty.", [
      ["Двенадцать пятьдесят.", true],
      ["Двадцать долларов.", false],
      ["Двенадцать пятнадцать.", false],
    ]),
    choice("enau5-t2", "Как вежливо сказать «Простите, кажется, вы ошиблись со сдачей»?", [
      ["Excuse me, I think there's a mistake with my change.", true],
      ["You make mistake, give money!", false],
      ["Excuse me, I think is mistake my change.", false],
    ], { skill: "grammar" }),
    fill("enau5-t3", "Выбери правильное слово: «Не могли бы вы пересчитать сдачу?»", "", "you check the change again?", "Could", ["Could", "Would mind", "Do"], { skill: "grammar" }),
    read("enau5-t4", "Прочитай доску с ценами. Сколько стоят два сэндвича?", "HOPE ON WHEELS\nPulled pork sandwich — $5.50\nLemonade — $1.50\nCookies — 2 for $3\nCASH ONLY · Tips welcome!", [
      ["11 долларов.", true],
      ["5 долларов 50 центов.", false],
      ["12 долларов 50 центов.", false],
    ]),
    match("enau5-t5", "Соедини пары.", [
      ["a tip jar", "банка для чаевых"],
      ["Keep the change!", "Сдачи не надо!"],
      ["Do you take cards?", "Вы принимаете карты?"],
      ["Cash only, sorry.", "Только наличные, простите."],
    ], { skill: "words" }),
    tf("enau5-t6", "Мурзик сначала дал правильную сдачу.", false, "listening"),
    script("enau5-t7", "Ты продаёшь сэндвичи. Ответь покупателю.", [
      { speaker: "Покупатель", text: "One sandwich, please. Do you take cards?" },
      { speaker: "Ты", answer: "Cash only, sorry. That'll be five fifty.", options: ["Cash only, sorry. That'll be five fifty.", "Cash only, sorry. Keep the change.", "Would you mind if I pay?"] },
      { speaker: "Покупатель", text: "Here's a ten." },
      { speaker: "Ты", answer: "Thank you. Your change is four fifty.", options: ["Thank you. Your change is four fifty.", "Thank you. Your change is five fifty.", "Thank you. Not at all."] },
    ], { skill: "speaking" }),
  ],
  reward: {
    itemId: "tip-jar",
    itemName: "Банка для чаевых",
    itemNameRu: "Tip jar",
    ru: "Our first tips — thank you, Austin!",
    en: "Наши первые чаевые — спасибо, Остин!",
    a11y: "На прилавке фургона стоит стеклянная банка с надписью TIPS — FOR MRS. HOPE'S FESTIVAL IN LONDON; внутри несколько купюр и монет.",
    image: p("tip-jar"),
    steps: ["К вечеру в банке для чаевых — тридцать два доллара.", "Мурзик пишет на ней: «Для фестиваля миссис Хоуп».", "Покупатели кладут ещё.", "А Мурзик больше не ошибается со сдачей."],
    bridge: "Суббота, пять утра. Двенадцать часов позади. Рэй открывает смокер, и над площадкой поднимается запах дыма.",
  },
};

const austin6: Lesson = {
  id: "en-a2-austin-6",
  level: "A2",
  cityId: "en-austin",
  number: 6,
  title: "The judges — Судьи",
  minutes: 8,
  goals: ["Вежливо обратиться к судьям", "Понять оценки и результаты", "Порадоваться второму месту"],
  vocabNote: "A tray — поднос (на конкурсе мясо сдают судьям на подносе). Tender — нежный, мягкий (о мясе). Second place — второе место.",
  vocab: [
    v("enau6-1", "Could you sign for the tray, please?", "Распишитесь, пожалуйста, за поднос.", "Таша принимает поднос с мясом.", "Послушать Could you sign for the tray, please", p("l6-1")),
    v("enau6-2", "It's so tender!", "Оно такое нежное!", "Судья отрезает кусочек — мясо мягко распадается.", "Послушать It's so tender", p("l6-2")),
    v("enau6-3", "a bit too salty", "немного пересолено", "Судья морщится и пьёт воду.", "Послушать a bit too salty", p("l6-3")),
    v("enau6-4", "Would you mind repeating that?", "Вы не могли бы повторить?", "Том наклоняется к громкоговорителю.", "Послушать Would you mind repeating that", p("l6-4")),
    v("enau6-5", "second place", "второе место", "Красная лента с надписью 2ND PLACE.", "Послушать second place", p("l6-5")),
    v("enau6-6", "We came in second!", "Мы заняли второе место!", "Мурзик прыгает, держа ленту.", "Послушать We came in second", p("l6-6")),
    v("enau6-7", "Who won?", "Кто победил?", "Том оглядывается на сцену.", "Послушать Who won", p("l6-7")),
    v("enau6-8", "Congratulations, partner!", "Поздравляю, напарник!", "Рэй жмёт Тому руку.", "Послушать Congratulations, partner", p("l6-8")),
  ],
  letters: [
    letter("tender = [тЭндэр]", "Ударение на первый слог; r в конце в Америке слышно.", "so tender", "такое нежное"),
    letter("partner = [пА:ртнэр]", "Partner — в Техасе так дружески обращаются к кому угодно: «напарник».", "Thanks, partner!", "Спасибо, напарник!"),
  ],
  dialogue: {
    title: "Объявление результатов",
    note: "Двенадцать часов коптили — и всё ради одного подноса для судей.",
    lines: [
      line("tom", "Here's our tray. Could you sign for it, please?", "Вот наш поднос. Распишитесь за него, пожалуйста."),
      line("tasha", "Sure. Team twenty-three. Good luck!", "Конечно. Команда двадцать три. Удачи!"),
      line("tasha", "And now the results! Second place goes to… team twenty-three — Hope on Wheels! The judges said: \"It's so tender! Just a bit too salty.\"", "А теперь результаты! Второе место — у команды двадцать три, «Hope on Wheels»! Судьи сказали: «Очень нежное! Только немного пересолено»."),
      line("tom", "Sorry, would you mind repeating that? Was that us?", "Простите, вы не могли бы повторить? Это мы?"),
      line("murzik", "We came in second! Who won?", "Мы заняли второе место! А кто победил?"),
      line("tasha", "First place — Ray, of course. For the eleventh time!", "Первое место — Рэй, конечно. В одиннадцатый раз!"),
      line("ray", "Congratulations, partner! Next year — less salt.", "Поздравляю, напарник! В следующем году — меньше соли."),
    ],
    gist: choice("enau6-d1", "Кто занял первое место?", [
      ["Рэй — в одиннадцатый раз.", true],
      ["«Hope on Wheels».", false],
      ["Таша.", false],
    ]),
  },
  grammar: [
    {
      title: "Вежливо переспросить",
      paragraphs: [
        "Если не расслышал(а): Sorry, would you mind repeating that? / Could you say that again, please? / Sorry, could you speak a bit louder?",
        "Места: first, second, third place. We came in second / We took second place.",
      ],
      examples: [
        { ru: "Could you say that again, please?", en: "Не могли бы вы повторить?" },
        { ru: "Our team came in third.", en: "Наша команда заняла третье место." },
      ],
    },
  ],
  tasks: [
    listen("enau6-t1", "Послушай. Что сказали судьи о мясе?", "The judges said: \"It's so tender! Just a bit too salty.\"", [
      ["Очень нежное, только немного пересолено.", true],
      ["Слишком жёсткое.", false],
      ["Слишком сладкое.", false],
    ]),
    choice("enau6-t2", "Как вежливо переспросить «Не могли бы вы повторить?»", [
      ["Could you say that again, please?", true],
      ["Say again you could please?", false],
      ["Would you mind to repeat?", false],
    ], { skill: "grammar" }),
    fill("enau6-t3", "Выбери правильное слово: «Мы заняли второе место!»", "We came in", "!", "second", ["second", "two", "the two"], { skill: "grammar" }),
    read("enau6-t4", "Прочитай таблицу результатов. Кто на третьем месте?", "AUSTIN BBQ CONTEST — RESULTS\n1st — Ray's Smokehouse (No. 7)\n2nd — Hope on Wheels (No. 23)\n3rd — Lone Star Grill (No. 41)", [
      ["Lone Star Grill.", true],
      ["Ray's Smokehouse.", false],
      ["Hope on Wheels.", false],
    ]),
    match("enau6-t5", "Соедини пары.", [
      ["It's so tender!", "Оно такое нежное!"],
      ["a bit too salty", "немного пересолено"],
      ["second place", "второе место"],
      ["Congratulations, partner!", "Поздравляю, напарник!"],
    ], { skill: "words" }),
    tf("enau6-t6", "Рэй выиграл конкурс в первый раз.", false, "listening"),
    speak("enau6-t7", "And the winner is… sorry, the microphone isn't working!", "Sorry, would you mind repeating that? Could you speak a bit louder, please?", "Простите, вы не могли бы повторить? Не могли бы вы говорить чуть громче?", {
      help: "Вежливо переспроси вслух.",
    }),
  ],
  reward: {
    itemId: "second-place-ribbon",
    itemName: "Лента за второе место",
    itemNameRu: "Second place ribbon",
    ru: "Second place — next to Galway's Best Newcomer!",
    en: "Второе место — рядом с «Лучшим новичком» из Голуэя!",
    a11y: "На борту жёлтого фургона рядом с зелёной розеткой из Голуэя теперь висит красная лента 2ND PLACE.",
    image: p("second-place-ribbon"),
    steps: ["Таша прикалывает красную ленту к фургону.", "Рядом с зелёной розеткой из Голуэя.", "Миссис Хоуп по видеосвязи кричит: «Второе место в Техасе!»", "Рэй ворчит: «В следующем году я дам вам выиграть». И подмигивает."],
    bridge: "Вечером Таша зовёт их на мост: «На закате оттуда вылетают полтора миллиона летучих мышей. Такого вы нигде не увидите».",
  },
};

const austin7: Lesson = {
  id: "en-a2-austin-7",
  level: "A2",
  cityId: "en-austin",
  number: 7,
  title: "Austin exam — Экзамен: Остин",
  minutes: 9,
  goals: ["Понять длинный рассказ на слух", "Вежливо просить и благодарить", "Повторить всё из Остина"],
  vocabNote: "Урок 7 — экзамен города: длинная аудиоистория и повторение всего из Остина.",
  vocab: [
    v("enau7-1", "Our fifteenth recipe!", "Наш пятнадцатый рецепт!", "Мурзик держит карточку с рецептом барбекю.", "Послушать Our fifteenth recipe", p("l7-1")),
    v("enau7-2", "bats under the bridge", "летучие мыши под мостом", "Тёмное облако летучих мышей над рекой на закате.", "Послушать bats under the bridge", p("l7-2")),
    v("enau7-3", "Would you mind taking a photo of us?", "Вы не могли бы нас сфотографировать?", "Том протягивает телефон Рэю.", "Послушать Would you mind taking a photo of us", p("l7-3")),
    v("enau7-4", "live music", "живая музыка", "Гитарист играет на маленькой сцене у реки.", "Послушать live music", p("l7-4")),
    v("enau7-5", "the Live Music Capital", "столица живой музыки", "Табличка: LIVE MUSIC CAPITAL OF THE WORLD.", "Послушать the Live Music Capital", p("l7-5")),
    v("enau7-6", "Tennessee", "Теннесси", "Карта: дорога на северо-восток.", "Послушать Tennessee", p("l7-6")),
    v("enau7-7", "Could you write it down for me?", "Вы не могли бы мне это записать?", "Рэй пишет на салфетке.", "Послушать Could you write it down for me", p("l7-7")),
    v("enau7-8", "Y'all come back now!", "Приезжайте ещё! (по-техасски)", "Рэй и Таша машут шляпами.", "Послушать Y'all come back now", p("l7-8")),
  ],
  letters: [
    letter("y'all = [йо:л]", "Y'all = you all, «вы все» — так говорят на юге США.", "Y'all come back now!", "Приезжайте ещё!"),
  ],
  dialogue: {
    title: "На мосту на закате",
    note: "Под одним из мостов Остина летом живут полтора миллиона летучих мышей. На закате они вылетают все вместе — посмотреть на это приходят толпы людей.",
    lines: [
      line("tasha", "Look! Here they come — the bats under the bridge!", "Смотрите! Вот они — летучие мыши из-под моста!"),
      line("murzik", "There are millions! Would you mind taking a photo of us?", "Их миллионы! Вы не могли бы нас сфотографировать?"),
      line("ray", "Not at all! Say \"brisket\"! And here's my recipe for your road book.", "Конечно! Скажите «брискет»! А вот мой рецепт для вашей книги дороги."),
      line("murzik", "Our fifteenth recipe! Could you write down the secret too?", "Наш пятнадцатый рецепт! А секрет вы не могли бы тоже записать?"),
      line("ray", "The secret's already there. Patience. And less salt.", "Секрет уже там. Терпение. И поменьше соли."),
      line("tom", "Tomorrow we're driving to Tennessee, to Nashville.", "Завтра едем в Теннесси, в Нэшвилл."),
      line("ray", "Austin's the Live Music Capital, but Nashville is Music City. Y'all come back now!", "Остин — столица живой музыки, а Нэшвилл — «город музыки». Приезжайте ещё!"),
    ],
    gist: choice("enau7-d1", "Какой секрет Рэя?", [
      ["Терпение и поменьше соли.", true],
      ["Много острого соуса.", false],
      ["Готовить быстро на сильном огне.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем Остин",
      paragraphs: [
        "Просьбы: Can you…? (просто) — Could you…? (вежливо) — Would you mind + -ing? (очень вежливо). О себе: Could I…? / Would you mind if I…? Ответы: Sure! Not at all! That's fine. Go ahead.",
        "Деньги: small bills, break a hundred, an ATM fee, in bulk, ten percent off, per pound, an entry fee, a receipt, That'll be…, Your change is…, Keep the change, Cash only.",
      ],
      examples: [
        { ru: "Would you mind taking a photo of us? — Not at all!", en: "Вы не могли бы нас сфотографировать? — Конечно!" },
        { ru: "Could I have a receipt, please?", en: "Можно чек, пожалуйста?" },
      ],
    },
  ],
  tasks: [
    listen("enau7-t1", "Аудиоистория: Рэй рассказывает о себе. Во сколько лет он сделал первое барбекю?", "I made my first brisket when I was fifteen. It was terrible — like an old boot. My grandpa laughed and said: \"Patience, boy.\" Now, forty years later, I've won this contest eleven times. But this year a cat and an English guy came in second. Next year I'll have to be careful!", [
      ["В пятнадцать.", true],
      ["В сорок.", false],
      ["В одиннадцать.", false],
    ]),
    listen("enau7-t2", "Послушай ещё раз. Что сказал Рэю дедушка?", "My grandpa laughed and said: \"Patience, boy.\"", [
      ["«Терпение, мальчик».", true],
      ["«Больше соли».", false],
      ["«Брось это».", false],
    ]),
    choice("enau7-t3", "Как вежливо сказать «Вы не против, если я сяду здесь?»", [
      ["Would you mind if I sit here?", true],
      ["Would you mind I sitting here?", false],
      ["Would you mind to sit me here?", false],
    ], { skill: "grammar" }),
    read("enau7-t4", "Прочитай табличку на мосту. Когда лучше смотреть на летучих мышей?", "CONGRESS AVENUE BRIDGE BATS\nBest time: March – October, at sunset\nDon't touch the bats!\nAbout 1.5 million bats live here", [
      ["С марта по октябрь, на закате.", true],
      ["Зимой, в полночь.", false],
      ["Утром, в любое время года.", false],
    ]),
    script("enau7-t5", "Попрощайся с Рэем и Ташей.", [
      { speaker: "Рэй", text: "Here's the recipe. Anything else?" },
      { speaker: "Ты", answer: "Could you write down the secret too, please?", options: ["Could you write down the secret too, please?", "Would you mind to write the secret?", "Cash only, sorry."] },
      { speaker: "Таша", text: "Y'all come back now!" },
      { speaker: "Ты", answer: "We will! Thank you for everything.", options: ["We will! Thank you for everything.", "We will! Keep the change.", "We will! Second place."] },
    ], { skill: "review" }),
    match("enau7-t6", "Повторяем Остин: соедини пары.", [
      ["small bills", "мелкие купюры"],
      ["an entry fee", "взнос"],
      ["a tip jar", "банка для чаевых"],
      ["brisket", "говяжья грудинка"],
    ], { skill: "review" }),
    speak("enau7-t7", "You're in a shop. Ask for three things very politely.", "Could you help me, please? Would you mind checking the price of this? And could I have a receipt?", "Не могли бы вы мне помочь? Вы не могли бы проверить цену вот этого? И можно мне чек?", {
      help: "Вежливо попроси вслух о трёх вещах.",
    }),
  ],
  reward: {
    itemId: "recipe-barbecue",
    itemName: "Рецепт «Texas barbecue»",
    itemNameRu: "Texas barbecue recipe card",
    ru: "Our fifteenth recipe — low and slow!",
    en: "Наш пятнадцатый рецепт — медленно и на слабом огне!",
    a11y: "Карточка с рецептом техасского барбекю вклеена на пятнадцатую страницу голубой тетради; в углу — маленькая звезда Техаса и слово PATIENCE.",
    image: p("recipe-barbecue"),
    steps: ["Мурзик вклеивает рецепт Рэя на пятнадцатую страницу.", "Внизу Рэй дописал одно слово: PATIENCE.", "В банке для чаевых уже сорок долларов — для фестиваля.", "Утром жёлтый фургон едет в Теннесси."],
  },
};

const story: CityStory = {
  home: {
    name: "Фургон у реки",
    nameRu: "The van by the river",
    image: p("home"),
    a11y: "Жёлтый фургон «Sunny» стоит на площадке у реки; рядом — большие чёрные смокеры других команд.",
  },
  keepsakeId: "recipe-barbecue",
  welcomeRu: "Hello, Austin!",
  welcomeEn: "Привет, Остин!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том в Остине: широкая река, мосты, живая музыка и дым от барбекю.",
  departureImage: p("departure"),
  departureA11y: "Рэй и Таша машут шляпами вслед жёлтому фургону; на борту — красная лента за второе место.",
  finale: [
    {
      image: p("finale-1"),
      a11y: "В фургоне уютно: касса с мелочью, длинный чек, номер 23, термометр для смокера, банка для чаевых, красная лента и рецепт барбекю.",
      lines: [
        { en: "Деньги посчитаны, мясо прокопчено, второе место — наше." },
        { en: "В книге дороги пятнадцатый рецепт: техасское барбекю Рэя." },
      ],
    },
    {
      image: p("finale-2"),
      a11y: "Мурзик, Том, Таша и Рэй на мосту на закате; над рекой поднимается облако летучих мышей.",
      lines: [
        { ru: "Austin complete!", en: "Остин пройден!" },
        { en: "7 / 7 уроков" },
        { ru: "Would you mind… Not at all! — We came in second!", en: "Вы не против… Нисколько! — Мы заняли второе место!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Рэй и Таша машут шляпами вслед жёлтому фургону; на борту — красная лента за второе место.",
      lines: [
        { ru: "Goodbye, Austin! Thank you, Ray and Tasha!", en: "До свидания, Остин! Спасибо, Рэй и Таша!" },
        { ru: "Next stop: Nashville!", en: "Следующая остановка: Нэшвилл!" },
      ],
    },
    {
      image: p("finale-4"),
      a11y: "Жёлтый фургон едет на северо-восток среди зелёных холмов; по радио играет кантри.",
      lines: [{ ru: "Austin → Nashville", en: "Остин → Нэшвилл" }],
    },
    {
      image: pic("en/nashville/arrival"),
      a11y: "Мурзик и Том в Нэшвилле: неоновые вывески, гитары в витринах и музыка из каждой двери.",
      lines: [{ ru: "Hello, Nashville!", en: "Привет, Нэшвилл!" }],
    },
  ],
};

export const enAustin = {
  id: "en-austin",
  name: "Остин",
  nameEn: "Austin",
  lessons: [austin1, austin2, austin3, austin4, austin5, austin6, austin7],
  story,
};
