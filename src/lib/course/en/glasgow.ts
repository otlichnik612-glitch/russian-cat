import { pic } from "../art";
import { read } from "../make";
import type { CityStory, Lesson } from "../types";
import { choice, fill, letter, line, listen, match, script, speak, tf, v } from "../tr/make";

/*
 * Глазго · «Здоровье» · A2, уроки 1–7.
 * Фургон «Hope on Wheels» стоит на улице с яркими настенными росписями. В первый же вечер Мурзик
 * обжигает лапу у плиты. Кирсти (около 35) работает в аптеке напротив и помогает с первой помощью,
 * аптекой и записью к врачу. Её бабушка Эффи печёт песочное печенье — shortbread.
 * Грамматика: наречия (quickly, carefully, badly, well), feel / look / sound / taste + прилагательное,
 * прилагательное или наречие.
 */

const p = (name: string) => pic(`en/glasgow/${name}`);

const glasgow1: Lesson = {
  id: "en-a2-glasgow-1",
  level: "A2",
  cityId: "en-glasgow",
  number: 1,
  title: "Ouch! — Ой!",
  minutes: 8,
  goals: ["Понять первую помощь при ожоге", "Наречия: quickly, carefully, badly", "Спросить: Does it hurt?"],
  vocabNote: "Наречие отвечает на вопрос «как?» и чаще всего образуется с -ly: quick → quickly, careful → carefully.",
  vocab: [
    v("engl1-1", "I've burnt my paw!", "Я обжёг лапу!", "Мурзик трясёт лапой у плиты фургона, над сковородкой пар.", "Послушать I've burnt my paw", p("l1-1")),
    v("engl1-2", "Hold it under cool running water.", "Подержи под прохладной проточной водой.", "Лапа Мурзика под струёй холодной воды.", "Послушать Hold it under cool running water", p("l1-2")),
    v("engl1-3", "for twenty minutes", "двадцать минут", "Кухонный таймер показывает 20:00.", "Послушать for twenty minutes", p("l1-3")),
    v("engl1-4", "Does it hurt badly?", "Сильно болит?", "Кирсти осторожно смотрит на лапу.", "Послушать Does it hurt badly", p("l1-4")),
    v("engl1-5", "quickly", "быстро", "Кирсти бежит через улицу из аптеки.", "Послушать quickly", p("l1-5")),
    v("engl1-6", "carefully", "осторожно", "Кирсти аккуратно рассматривает ожог.", "Послушать carefully", p("l1-6")),
    v("engl1-7", "Don't put ice on it.", "Не прикладывай лёд.", "Перечёркнутый кубик льда.", "Послушать Don't put ice on it", p("l1-7")),
    v("engl1-8", "first aid", "первая помощь", "Зелёная аптечка с белым крестом.", "Послушать first aid", p("l1-8")),
  ],
  letters: [
    letter("burnt = [бё:нт]", "Ur звучит как долгое [ё:]: burn [бё:н], burnt [бё:нт]. В британском есть обе формы: burnt и burned.", "I've burnt my paw!", "Я обжёг лапу!"),
    letter("-ly = [ли]", "Окончание наречий -ly звучит [ли]: quickly [квИкли], carefully [кЭэфэли].", "carefully", "осторожно"),
  ],
  dialogue: {
    title: "У плиты",
    note: "I've burnt — так говорят о том, что только что случилось. Эту форму (Present Perfect) мы разберём в Голуэе, а пока просто запомни фразу.",
    lines: [
      line("murzik", "Ouch! I've burnt my paw!", "Ой! Я обжёг лапу!"),
      line("tom", "Kirsty! You're a pharmacist — can you help?", "Кирсти! Вы же фармацевт — можете помочь?"),
      line("kirsty", "Coming! … Hold it under cool running water. Quickly!", "Иду! … Подержи под прохладной проточной водой. Быстро!"),
      line("kirsty", "Does it hurt badly?", "Сильно болит?"),
      line("murzik", "Yes… Can I put ice on it?", "Да… Можно приложить лёд?"),
      line("kirsty", "No, don't put ice on it. Just cool water, for twenty minutes. Then I'll look at it carefully.", "Нет, лёд не прикладывай. Только прохладная вода, двадцать минут. Потом я внимательно посмотрю."),
    ],
    gist: choice("engl1-d1", "Сколько держать ожог под водой?", [
      ["Двадцать минут.", true],
      ["Две минуты.", false],
      ["Пока не станет холодно.", false],
    ]),
  },
  grammar: [
    {
      title: "Наречия на -ly",
      paragraphs: [
        "Прилагательное говорит, какой предмет: a quick answer. Наречие говорит, как делают: answer quickly. Обычно + -ly: slow → slowly, careful → carefully, bad → badly.",
        "Исключения: good → well (He cooks well), fast → fast, hard → hard (She works hard).",
      ],
      examples: [
        { ru: "Please drive slowly.", en: "Пожалуйста, езжай медленно." },
        { ru: "Tom cooks well, but he cuts badly.", en: "Том хорошо готовит, но плохо режет." },
      ],
    },
  ],
  tasks: [
    listen("engl1-t1", "Послушай. Что нельзя делать при ожоге?", "No, don't put ice on it. Just cool water, for twenty minutes.", [
      ["Прикладывать лёд.", true],
      ["Держать под водой.", false],
      ["Показывать фармацевту.", false],
    ]),
    choice("engl1-t2", "Как сказать «Езжай медленно»?", [
      ["Drive slowly.", true],
      ["Drive slowlier.", false],
      ["Drive slowness.", false],
    ], { skill: "grammar" }),
    fill("engl1-t3", "Выбери правильное слово.", "Tom cooks very", ".", "well", ["well", "good", "goodly"], { skill: "grammar" }),
    read("engl1-t4", "Прочитай плакат в аптеке. Что делать сначала?", "BURNS — FIRST AID\n1. Cool with running water for 20 minutes.\n2. Don't use ice or butter.\n3. Cover loosely with cling film.\n4. Big burn? Call 111 or go to A&E.", [
      ["Охлаждать проточной водой 20 минут.", true],
      ["Намазать маслом.", false],
      ["Сразу звонить 111.", false],
    ]),
    match("engl1-t5", "Соедини пары.", [
      ["quickly", "быстро"],
      ["carefully", "осторожно"],
      ["first aid", "первая помощь"],
      ["Does it hurt badly?", "Сильно болит?"],
    ], { skill: "words" }),
    tf("engl1-t6", "Good как наречие — well.", true, "grammar"),
    speak("engl1-t7", "My friend has burnt his hand. What should he do?", "He should hold it under cool running water for twenty minutes. He shouldn't put ice on it.", "Ему нужно подержать руку под прохладной проточной водой двадцать минут. Лёд прикладывать не стоит.", {
      help: "Объясни вслух, что делать при ожоге.",
    }),
  ],
  reward: {
    itemId: "first-aid-kit",
    itemName: "Аптечка",
    itemNameRu: "First aid kit",
    ru: "Every van needs one!",
    en: "Она нужна каждому фургону!",
    a11y: "На стенке фургона у плиты висит зелёная аптечка с белым крестом.",
    image: p("first-aid-kit"),
    steps: ["Кирсти удивляется: в фургоне нет аптечки!", "Она приносит из аптеки зелёную аптечку.", "Том вешает её у самой плиты.", "Мурзик смотрит на плиту очень осторожно."],
    bridge: "Утром лапа ещё болит. Кирсти зовёт Мурзика в аптеку: «I've got something for that burn».",
  },
};

const glasgow2: Lesson = {
  id: "en-a2-glasgow-2",
  level: "A2",
  cityId: "en-glasgow",
  number: 2,
  title: "At the pharmacy — В аптеке",
  minutes: 8,
  goals: ["Попросить средство в аптеке", "Понять, как пользоваться", "Наречия: gently, twice a day"],
  vocabNote: "Pharmacy [фА:мэси] — аптека, в Британии её часто называют chemist's. Pharmacist — фармацевт.",
  vocab: [
    v("engl2-1", "Have you got anything for a burn?", "У вас есть что-нибудь от ожога?", "Мурзик показывает лапу через прилавок.", "Послушать Have you got anything for a burn", p("l2-1")),
    v("engl2-2", "a cream", "крем, мазь", "Тюбик с кремом.", "Послушать a cream", p("l2-2")),
    v("engl2-3", "Put it on gently.", "Наноси бережно.", "Кирсти мягко мажет лапу кремом.", "Послушать Put it on gently", p("l2-3")),
    v("engl2-4", "twice a day", "два раза в день", "Два солнышка: утро и вечер.", "Послушать twice a day", p("l2-4")),
    v("engl2-5", "a bandage", "бинт, повязка", "Лапа Мурзика в белой повязке.", "Послушать a bandage", p("l2-5")),
    v("engl2-6", "Keep it clean and dry.", "Держи в чистоте и сухости.", "Лапа в повязке, рядом зонт.", "Послушать Keep it clean and dry", p("l2-6")),
    v("engl2-7", "It'll heal quickly.", "Быстро заживёт.", "Кирсти улыбается и поднимает большой палец.", "Послушать It'll heal quickly", p("l2-7")),
    v("engl2-8", "the chemist's", "аптека (брит.)", "Вывеска «Chemist» над дверью.", "Послушать the chemist's", p("l2-8")),
  ],
  letters: [
    letter("pharmacy = [фА:мэси]", "Ph читается как [ф]: pharmacy [фА:мэси], photo [фОутоу].", "the pharmacy", "аптека"),
    letter("twice = [туайс]", "Once [уанс] — один раз, twice [туайс] — два раза, дальше three times.", "twice a day", "два раза в день"),
  ],
  dialogue: {
    title: "За прилавком",
    note: "Heal [хи:л] — заживать. Gently — бережно, мягко.",
    lines: [
      line("murzik", "Hello, Kirsty! Have you got anything for a burn?", "Здравствуйте, Кирсти! У вас есть что-нибудь от ожога?"),
      line("kirsty", "Yes, this cream. Put it on gently, twice a day.", "Да, вот этот крем. Наноси бережно, два раза в день."),
      line("murzik", "And can I cook?", "А готовить мне можно?"),
      line("kirsty", "Not for a few days! Keep a bandage on it and keep it clean and dry.", "Несколько дней — нет! Носи повязку, держи в чистоте и сухости."),
      line("tom", "Don't worry, I'll cook. Slowly and carefully!", "Не волнуйся, я буду готовить. Медленно и осторожно!"),
      line("kirsty", "Good. It'll heal quickly.", "Хорошо. Быстро заживёт."),
    ],
    gist: choice("engl2-d1", "Как часто мазать крем?", [
      ["Два раза в день.", true],
      ["Раз в неделю.", false],
      ["Каждый час.", false],
    ]),
  },
  grammar: [
    {
      title: "Как часто и как",
      paragraphs: [
        "Как часто: once a day, twice a day, three times a day, every four hours.",
        "Как: put it on gently, take it slowly, drink it quickly. Наречие обычно стоит после глагола и дополнения: Put the cream on gently.",
      ],
      examples: [
        { ru: "Take one tablet three times a day.", en: "Принимай по одной таблетке три раза в день." },
        { ru: "Open the bottle carefully.", en: "Открой бутылочку осторожно." },
      ],
    },
  ],
  tasks: [
    listen("engl2-t1", "Послушай. Почему Мурзику нельзя готовить?", "Not for a few days! Keep a bandage on it and keep it clean and dry.", [
      ["Нужно несколько дней беречь лапу.", true],
      ["Плита сломалась.", false],
      ["Том не разрешает.", false],
    ]),
    choice("engl2-t2", "Как сказать «Два раза в день»?", [
      ["twice a day", true],
      ["two times in day", false],
      ["twice in a days", false],
    ], { skill: "grammar" }),
    fill("engl2-t3", "Выбери правильное слово.", "Put the cream on", ".", "gently", ["gently", "gentle", "gentleness"], { skill: "grammar" }),
    read("engl2-t4", "Прочитай инструкцию. Когда нужно идти к врачу?", "BURN CREAM\nApply gently twice a day.\nFor small burns only.\nSee a doctor if it isn't better in 5 days.", [
      ["Если через 5 дней не лучше.", true],
      ["Сразу после ожога.", false],
      ["Через два дня.", false],
    ]),
    match("engl2-t5", "Соедини пары.", [
      ["a cream", "крем, мазь"],
      ["a bandage", "повязка"],
      ["twice a day", "два раза в день"],
      ["It'll heal quickly.", "Быстро заживёт."],
    ], { skill: "words" }),
    script("engl2-t6", "Ты в аптеке.", [
      { speaker: "Кирсти", text: "Hello! Can I help you?" },
      { speaker: "Ты", answer: "Have you got anything for a headache?", options: ["Have you got anything for a headache?", "Have you got anything badly?", "Keep it clean and dry."] },
      { speaker: "Кирсти", text: "These tablets. Take one twice a day." },
      { speaker: "Ты", answer: "Thank you. After meals?", options: ["Thank you. After meals?", "Thank you. Gently meals?", "Twice a bandage?"] },
    ], { skill: "speaking" }),
    speak("engl2-t7", "How do you use this cream?", "You put it on gently twice a day, in the morning and in the evening.", "Наносить бережно два раза в день, утром и вечером.", {
      help: "Объясни вслух, как пользоваться кремом.",
    }),
  ],
  reward: {
    itemId: "kitchen-timer",
    itemName: "Кухонный таймер",
    itemNameRu: "Kitchen timer",
    ru: "No more rushing at the cooker!",
    en: "Больше никакой спешки у плиты!",
    a11y: "У плиты фургона стоит красный кухонный таймер в форме помидора.",
    image: p("kitchen-timer"),
    steps: ["Кирсти говорит: «You burnt yourself because you cooked too quickly».", "Она дарит фургону таймер-помидор.", "Теперь Том готовит медленно — по таймеру.", "Мурзик пока только пробует."],
    bridge: "Вечером Том пробует знаменитый шотландский жареный батончик в кляре. А утром ему нехорошо…",
  },
};

const glasgow3: Lesson = {
  id: "en-a2-glasgow-3",
  level: "A2",
  cityId: "en-glasgow",
  number: 3,
  title: "I feel sick — Меня тошнит",
  minutes: 8,
  goals: ["Описать самочувствие: feel + прилагательное", "You look tired / pale", "Прилагательное или наречие?"],
  vocabNote: "После feel, look, sound, taste, smell — прилагательное, а не наречие: I feel bad (не badly), you look tired, it tastes good.",
  vocab: [
    v("engl3-1", "I feel sick.", "Меня тошнит.", "Том держится за живот, лицо зелёное.", "Послушать I feel sick", p("l3-1")),
    v("engl3-2", "I feel dizzy.", "У меня кружится голова.", "Вокруг головы Тома кружатся звёздочки.", "Послушать I feel dizzy", p("l3-2")),
    v("engl3-3", "You look pale.", "Ты бледный(-ая).", "Мурзик с тревогой смотрит на бледного Тома.", "Послушать You look pale", p("l3-3")),
    v("engl3-4", "a deep-fried chocolate bar", "шоколадный батончик в кляре", "Батончик в золотистом кляре на бумажке.", "Послушать a deep-fried chocolate bar", p("l3-4")),
    v("engl3-5", "It sounds terrible!", "Звучит ужасно!", "Кирсти морщится.", "Послушать It sounds terrible", p("l3-5")),
    v("engl3-6", "Lie down for a while.", "Полежи немного.", "Том на диванчике фургона под пледом.", "Послушать Lie down for a while", p("l3-6")),
    v("engl3-7", "I feel much better now.", "Мне уже гораздо лучше.", "Том садится и улыбается.", "Послушать I feel much better now", p("l3-7")),
    v("engl3-8", "never again", "больше никогда", "Том отодвигает тарелку.", "Послушать never again", p("l3-8")),
  ],
  letters: [
    letter("dizzy = [дИзи]", "Двойная z читается как одна: [дИзи].", "I feel dizzy.", "Голова кружится."),
  ],
  dialogue: {
    title: "Утро после батончика",
    note: "Deep-fried — жаренный во фритюре. В Шотландии так жарят даже шоколадные батончики.",
    lines: [
      line("murzik", "Tom, you look pale. Are you OK?", "Том, ты бледный. Ты в порядке?"),
      line("tom", "I feel sick. And I feel a bit dizzy.", "Меня тошнит. И немного кружится голова."),
      line("kirsty", "What did you eat last night?", "Что ты ел вчера вечером?"),
      line("tom", "A deep-fried chocolate bar. And chips. And another chocolate bar…", "Шоколадный батончик в кляре. И картошку фри. И ещё один батончик…"),
      line("kirsty", "It sounds terrible! Drink some water and lie down for a while.", "Звучит ужасно! Выпей воды и полежи немного."),
      line("tom", "OK… Never again.", "Ладно… Больше никогда."),
    ],
    gist: choice("engl3-d1", "Почему Тому плохо?", [
      ["Он съел слишком много жареных батончиков.", true],
      ["Он обжёгся.", false],
      ["Он простудился.", false],
    ]),
  },
  grammar: [
    {
      title: "Feel / look / sound / taste + прилагательное",
      paragraphs: [
        "Эти глаголы описывают состояние, поэтому после них прилагательное: I feel tired. You look happy. That sounds great. It tastes sweet.",
        "Сравни: He looks sad (выглядит грустным) — He looked sadly at the plate (грустно посмотрел).",
      ],
      examples: [
        { ru: "You look great today!", en: "Ты сегодня отлично выглядишь!" },
        { ru: "This soup tastes strange.", en: "У этого супа странный вкус." },
      ],
    },
  ],
  tasks: [
    listen("engl3-t1", "Послушай. Что советует Кирсти?", "Drink some water and lie down for a while.", [
      ["Выпить воды и полежать.", true],
      ["Съесть ещё батончик.", false],
      ["Пойти погулять.", false],
    ]),
    choice("engl3-t2", "Как правильно: «Мне плохо»?", [
      ["I feel bad.", true],
      ["I feel badly.", false],
      ["I'm feel bad.", false],
    ], { skill: "grammar" }),
    fill("engl3-t3", "Выбери правильное слово.", "You look", "today!", "great", ["great", "greatly", "greatness"], { skill: "grammar" }),
    read("engl3-t4", "Прочитай сообщение Тома Фрейе. Как он себя чувствует вечером?", "Hi Freya! This morning I felt terrible — too many deep-fried chocolate bars. Now I feel much better. Never again! Tom", [
      ["Гораздо лучше.", true],
      ["Ужасно.", false],
      ["Хочет ещё батончик.", false],
    ]),
    match("engl3-t5", "Соедини пары.", [
      ["I feel sick.", "Меня тошнит."],
      ["I feel dizzy.", "Кружится голова."],
      ["You look pale.", "Ты бледный(-ая)."],
      ["never again", "больше никогда"],
    ], { skill: "words" }),
    tf("engl3-t6", "После look правильно говорить прилагательное: you look tired.", true, "grammar"),
    speak("engl3-t7", "How do you feel today?", "I feel a bit tired, but I'm OK. Yesterday I felt terrible, but now I feel much better.", "Я немного устал(а), но в порядке. Вчера мне было ужасно, а сейчас гораздо лучше.", {
      help: "Расскажи вслух, как ты себя чувствуешь: I feel…",
    }),
  ],
  reward: {
    itemId: "water-bottle",
    itemName: "Бутылка для воды",
    itemNameRu: "Water bottle",
    ru: "Water, not chocolate bars!",
    en: "Вода, а не батончики!",
    a11y: "На полке фургона стоит голубая многоразовая бутылка для воды с наклейкой в виде шотландского флага.",
    image: p("water-bottle"),
    steps: ["Кирсти приносит Тому голубую бутылку для воды.", "«Drink plenty of water every day!»", "Том пьёт воду весь день.", "Жареные батончики он больше не покупает. Почти."],
    bridge: "Лапа у Мурзика заживает медленно. Кирсти советует: «You should see a GP — a family doctor. Let's book an appointment».",
  },
};

const glasgow4: Lesson = {
  id: "en-a2-glasgow-4",
  level: "A2",
  cityId: "en-glasgow",
  number: 4,
  title: "Booking a GP appointment — Запись к врачу",
  minutes: 8,
  goals: ["Записаться к врачу по телефону", "Понять вопросы регистратора", "Сказать, срочно ли"],
  vocabNote: "GP [джи: пи:] — семейный врач, терапевт. Surgery — в Британии так называют и кабинет врача, и маленькую поликлинику.",
  vocab: [
    v("engl4-1", "a GP", "семейный врач, терапевт", "Добрый врач в свитере за столом.", "Послушать a GP", p("l4-1")),
    v("engl4-2", "the surgery", "поликлиника, кабинет врача", "Маленькое здание с табличкой «Medical Practice».", "Послушать the surgery", p("l4-2")),
    v("engl4-3", "I'd like to book an appointment.", "Я хотел(а) бы записаться на приём.", "Том звонит, держа лапу Мурзика.", "Послушать I'd like to book an appointment", p("l4-3")),
    v("engl4-4", "Is it urgent?", "Это срочно?", "Регистратор с телефоном у компьютера.", "Послушать Is it urgent", p("l4-4")),
    v("engl4-5", "the earliest appointment", "самая ранняя запись", "Календарь, обведено завтрашнее число.", "Послушать the earliest appointment", p("l4-5")),
    v("engl4-6", "Are you registered here?", "Вы прикреплены к нашей поликлинике?", "Анкета на столе регистратуры.", "Послушать Are you registered here", p("l4-6")),
    v("engl4-7", "a visitor", "приезжий, гость", "Мурзик с чемоданом.", "Послушать a visitor", p("l4-7")),
    v("engl4-8", "Please arrive ten minutes early.", "Приходите, пожалуйста, на десять минут раньше.", "Часы показывают без десяти девять.", "Послушать Please arrive ten minutes early", p("l4-8")),
  ],
  letters: [
    letter("urgent = [Ё:джэнт]", "Ur — долгое [ё:], g — [дж]: [Ё:джэнт].", "Is it urgent?", "Это срочно?"),
  ],
  dialogue: {
    title: "Звонок в поликлинику",
    note: "Receptionist — регистратор. Temporary resident — временно проживающий.",
    lines: [
      line("receptionist", "Good morning, Riverside surgery.", "Доброе утро, поликлиника «Риверсайд»."),
      line("tom", "Hello. I'd like to book an appointment with a GP for my friend. He's burnt his paw.", "Здравствуйте. Я хотел бы записать друга к терапевту. Он обжёг лапу."),
      line("receptionist", "Is it urgent?", "Это срочно?"),
      line("tom", "Not very. But it's healing slowly.", "Не очень. Но заживает медленно."),
      line("receptionist", "Are you registered here? … A visitor? That's fine. The earliest appointment is tomorrow at nine.", "Вы к нам прикреплены? … Приезжие? Ничего страшного. Самая ранняя запись — завтра в девять."),
      line("receptionist", "Please arrive ten minutes early.", "Приходите, пожалуйста, на десять минут раньше."),
    ],
    gist: choice("engl4-d1", "Когда приём у врача?", [
      ["Завтра в девять.", true],
      ["Сегодня в девять вечера.", false],
      ["Через неделю.", false],
    ]),
  },
  grammar: [
    {
      title: "Вежливые просьбы по телефону",
      paragraphs: [
        "I'd like to… (= I would like to) — вежливое «я хотел(а) бы»: I'd like to book an appointment. I'd like to speak to a doctor.",
        "Could I…? — «Можно мне…?»: Could I come today? Could you call me back?",
      ],
      examples: [
        { ru: "I'd like to see a doctor today, please.", en: "Я хотел(а) бы попасть к врачу сегодня." },
        { ru: "Could I have an earlier appointment?", en: "Можно записаться пораньше?" },
      ],
    },
  ],
  tasks: [
    listen("engl4-t1", "Послушай. Как заживает лапа?", "Not very. But it's healing slowly.", [
      ["Медленно.", true],
      ["Быстро.", false],
      ["Совсем не болит.", false],
    ]),
    choice("engl4-t2", "Как вежливо сказать «Я хотел(а) бы записаться на приём»?", [
      ["I'd like to book an appointment.", true],
      ["I like book appointment.", false],
      ["I'd like booking to appointment.", false],
    ], { skill: "grammar" }),
    fill("engl4-t3", "Выбери правильное слово.", "Please arrive ten minutes", ".", "early", ["early", "earlily", "earlier than"], { skill: "words" }),
    read("engl4-t4", "Прочитай карточку записи. Что нужно взять с собой?", "RIVERSIDE SURGERY\nAppointment: Thursday, 9:00 am, Dr Wilson\nPlease bring: your passport (for visitors)\nArrive 10 minutes early.", [
      ["Паспорт.", true],
      ["Рецепт.", false],
      ["Крем от ожога.", false],
    ]),
    match("engl4-t5", "Соедини пары.", [
      ["a GP", "семейный врач"],
      ["the surgery", "поликлиника"],
      ["Is it urgent?", "Это срочно?"],
      ["a visitor", "приезжий"],
    ], { skill: "words" }),
    script("engl4-t6", "Запишись к врачу.", [
      { speaker: "Регистратор", text: "Good morning, how can I help?" },
      { speaker: "Ты", answer: "I'd like to book an appointment with a GP.", options: ["I'd like to book an appointment with a GP.", "I'd like urgent a GP.", "I feel badly appointment."] },
      { speaker: "Регистратор", text: "Is it urgent?" },
      { speaker: "Ты", answer: "Not very. Could I come tomorrow?", options: ["Not very. Could I come tomorrow?", "Not very. I'm registered visitor early.", "Yes, very slowly."] },
    ], { skill: "speaking" }),
    speak("engl4-t7", "Good morning, surgery. How can I help?", "Good morning. I'd like to book an appointment, please. I've got a bad cough. Could I come today?", "Доброе утро. Я хотел(а) бы записаться на приём. У меня сильный кашель. Можно прийти сегодня?", {
      help: "Запишись вслух к врачу по телефону.",
    }),
  ],
  reward: {
    itemId: "mural-calendar",
    itemName: "Календарь с росписями Глазго",
    itemNameRu: "Glasgow murals calendar",
    ru: "A calendar — so we never miss an appointment!",
    en: "Календарь — чтобы не пропускать запись!",
    a11y: "На стенке фургона висит календарь с яркими уличными росписями Глазго; четверг обведён красным.",
    image: p("mural-calendar"),
    steps: ["По дороге к врачу они проходят мимо огромных росписей на стенах.", "В магазинчике продаётся календарь с ними.", "Том вешает его в фургоне и обводит четверг.", "Каждый месяц — новая картинка."],
    bridge: "Врач говорит, что всё в порядке. А бабушка Кирсти, Эффи, говорит: «Healthy living, that's the secret!»",
  },
};

const glasgow5: Lesson = {
  id: "en-a2-glasgow-5",
  level: "A2",
  cityId: "en-glasgow",
  number: 5,
  title: "Healthy habits — Полезные привычки",
  minutes: 8,
  goals: ["Говорить о здоровом образе жизни", "Наречия частоты и образа действия", "Дать совет: You should eat properly"],
  vocabNote: "Properly — как следует, правильно. Regularly — регулярно. Early — рано (и прилагательное, и наречие).",
  vocab: [
    v("engl5-1", "eat properly", "нормально питаться", "Тарелка с овощами, рыбой и хлебом.", "Послушать eat properly", p("l5-1")),
    v("engl5-2", "sleep well", "хорошо спать", "Мурзик спит, свернувшись клубочком.", "Послушать sleep well", p("l5-2")),
    v("engl5-3", "go to bed early", "рано ложиться", "Часы показывают десять вечера, свет выключен.", "Послушать go to bed early", p("l5-3")),
    v("engl5-4", "walk regularly", "регулярно гулять", "Эффи с палочкой бодро шагает по парку.", "Послушать walk regularly", p("l5-4")),
    v("engl5-5", "fresh air", "свежий воздух", "Зелёный парк, ветерок качает деревья.", "Послушать fresh air", p("l5-5")),
    v("engl5-6", "junk food", "вредная еда, фастфуд", "Гора жареной еды на подносе.", "Послушать junk food", p("l5-6")),
    v("engl5-7", "I'm ninety and I feel great!", "Мне девяносто, и я прекрасно себя чувствую!", "Эффи улыбается во весь рот.", "Послушать I'm ninety and I feel great", p("l5-7")),
    v("engl5-8", "a little bit of what you fancy", "понемножку того, что любишь", "Эффи держит одно печенье.", "Послушать a little bit of what you fancy", p("l5-8")),
  ],
  letters: [
    letter("properly = [прОпэли]", "Ударение на первый слог, r в середине почти не слышно: [прОпэли].", "eat properly", "нормально питаться"),
  ],
  dialogue: {
    title: "В парке с Эффи",
    note: "Fancy — разговорное «хотеть, нравиться»: Do you fancy a cup of tea? — Хочешь чаю?",
    lines: [
      line("effie", "I'm ninety and I feel great! Do you know my secret?", "Мне девяносто, и я прекрасно себя чувствую! Знаете мой секрет?"),
      line("tom", "You eat properly?", "Вы правильно питаетесь?"),
      line("effie", "Yes. And I walk regularly — every day, rain or shine. Fresh air!", "Да. И регулярно гуляю — каждый день, в любую погоду. Свежий воздух!"),
      line("murzik", "And you sleep well?", "И хорошо спите?"),
      line("effie", "I go to bed early. And no junk food — well, hardly ever.", "Рано ложусь. И никакой вредной еды — ну, почти никогда."),
      line("effie", "And a little bit of what you fancy. For me — shortbread!", "И понемножку того, что любишь. Для меня — песочное печенье!"),
    ],
    gist: choice("engl5-d1", "В чём секрет Эффи?", [
      ["Правильная еда, прогулки, ранний сон — и немного любимого.", true],
      ["Много жареной еды.", false],
      ["Она никогда не выходит из дома.", false],
    ]),
  },
  grammar: [
    {
      title: "Наречия: как часто и как",
      paragraphs: [
        "Как часто (перед глаголом): always, usually, often, sometimes, hardly ever, never. I hardly ever eat junk food.",
        "Как (после глагола): She walks quickly. I sleep well. They eat properly. Hardly ever — почти никогда.",
      ],
      examples: [
        { ru: "I usually go to bed early, but I sometimes stay up late.", en: "Я обычно рано ложусь, но иногда засиживаюсь допоздна." },
        { ru: "Effie walks regularly and eats properly.", en: "Эффи регулярно гуляет и правильно питается." },
      ],
    },
  ],
  tasks: [
    listen("engl5-t1", "Послушай. Сколько лет Эффи?", "I'm ninety and I feel great!", [
      ["Девяносто.", true],
      ["Девятнадцать.", false],
      ["Семьдесят.", false],
    ]),
    choice("engl5-t2", "Как сказать «Я почти никогда не ем фастфуд»?", [
      ["I hardly ever eat junk food.", true],
      ["I eat hardly junk food ever.", false],
      ["I hard eat junk food.", false],
    ], { skill: "grammar" }),
    fill("engl5-t3", "Выбери правильное слово.", "Effie walks", "in the park.", "regularly", ["regularly", "regular", "regularity"], { skill: "grammar" }),
    read("engl5-t4", "Прочитай плакат у врача. Сколько нужно гулять?", "STAY HEALTHY\n• Walk 30 minutes a day\n• Eat 5 portions of fruit and veg\n• Sleep 7–8 hours\n• Drink water, not fizzy drinks", [
      ["30 минут в день.", true],
      ["5 часов в день.", false],
      ["8 часов в неделю.", false],
    ]),
    match("engl5-t5", "Соедини пары.", [
      ["eat properly", "нормально питаться"],
      ["fresh air", "свежий воздух"],
      ["junk food", "вредная еда"],
      ["go to bed early", "рано ложиться"],
    ], { skill: "words" }),
    tf("engl5-t6", "Hardly ever значит «очень часто».", false, "words"),
    speak("engl5-t7", "What do you do to stay healthy?", "I usually walk to work and I eat properly. I sometimes go to bed late, but I'm trying to sleep well.", "Я обычно хожу на работу пешком и нормально питаюсь. Иногда поздно ложусь, но стараюсь высыпаться.", {
      help: "Расскажи вслух о своих привычках: usually, sometimes, well, properly.",
    }),
  ],
  reward: {
    itemId: "skipping-rope",
    itemName: "Скакалка",
    itemNameRu: "Skipping rope",
    ru: "Exercise in the morning!",
    en: "Зарядка по утрам!",
    a11y: "На крючке у двери фургона висит скакалка с деревянными ручками.",
    image: p("skipping-rope"),
    steps: ["Эффи каждое утро прыгает через скакалку — в девяносто лет!", "Она дарит Мурзику свою старую скакалку.", "Мурзик прыгает десять раз и падает на траву.", "«Regularly, laddie, regularly!» — смеётся Эффи."],
    bridge: "«And now — a little bit of what you fancy», — говорит Эффи и ведёт всех на кухню. Масло, сахар, мука.",
  },
};

const glasgow6: Lesson = {
  id: "en-a2-glasgow-6",
  level: "A2",
  cityId: "en-glasgow",
  number: 6,
  title: "Effie's shortbread — Песочное печенье Эффи",
  minutes: 8,
  goals: ["Понять рецепт", "Наречия в рецепте: gently, slowly", "It tastes / smells + прилагательное"],
  vocabNote: "Shortbread — шотландское песочное печенье: всего три продукта — масло, сахар и мука.",
  vocab: [
    v("engl6-1", "soft butter", "мягкое масло", "Кусок мягкого масла в миске.", "Послушать soft butter", p("l6-1")),
    v("engl6-2", "Rub it in with your fingers.", "Перетри пальцами.", "Пальцы перетирают масло с мукой в крошку.", "Послушать Rub it in with your fingers", p("l6-2")),
    v("engl6-3", "Press it gently into the tin.", "Бережно вдави в форму.", "Тесто в круглой форме.", "Послушать Press it gently into the tin", p("l6-3")),
    v("engl6-4", "Prick it with a fork.", "Наколи вилкой.", "Ряды дырочек от вилки на тесте.", "Послушать Prick it with a fork", p("l6-4")),
    v("engl6-5", "Bake it slowly.", "Пеки медленно.", "Духовка на маленьком огне.", "Послушать Bake it slowly", p("l6-5")),
    v("engl6-6", "It smells wonderful!", "Пахнет чудесно!", "Мурзик принюхивается у духовки.", "Послушать It smells wonderful", p("l6-6")),
    v("engl6-7", "It tastes buttery.", "Вкус сливочный.", "Мурзик откусывает печенье, крошки летят.", "Послушать It tastes buttery", p("l6-7")),
    v("engl6-8", "pale gold", "светло-золотистый", "Печенье бледно-золотого цвета на решётке.", "Послушать pale gold", p("l6-8")),
  ],
  letters: [
    letter("shortbread = [шО:тбрэд]", "Ударение на первый слог: [шО:тбрэд].", "shortbread", "песочное печенье"),
  ],
  dialogue: {
    title: "Кухня Эффи",
    note: "Laddie — шотландское ласковое «паренёк». Never rush — никогда не торопись.",
    lines: [
      line("effie", "Mix the flour and sugar. Then add the soft butter and rub it in with your fingers.", "Смешай муку и сахар. Потом добавь мягкое масло и перетри пальцами."),
      line("effie", "Press it gently into the tin. Prick it with a fork.", "Бережно вдави в форму. Наколи вилкой."),
      line("murzik", "How long do we bake it?", "Сколько его печь?"),
      line("effie", "Bake it slowly, about an hour. Never rush shortbread, laddie! It must be pale gold, not brown.", "Пеки медленно, около часа. С песочным печеньем никогда не торопись, паренёк! Оно должно быть светло-золотистым, а не коричневым."),
      line("tom", "Mmm, it smells wonderful!", "М-м, пахнет чудесно!"),
      line("murzik", "And it tastes buttery and sweet! The best shortbread in Scotland!", "А на вкус — сливочное и сладкое! Лучшее печенье в Шотландии!"),
    ],
    gist: choice("engl6-d1", "Каким должно быть готовое печенье?", [
      ["Светло-золотистым.", true],
      ["Коричневым.", false],
      ["Белым.", false],
    ]),
  },
  grammar: [
    {
      title: "Рецепт: наречия и вкус",
      paragraphs: [
        "Как делать — наречие: press it gently, bake it slowly, mix it well.",
        "Какое на вкус / запах — прилагательное: it smells wonderful, it tastes buttery, it looks perfect.",
      ],
      examples: [
        { ru: "Stir it slowly — the soup smells delicious!", en: "Мешай медленно — суп пахнет восхитительно!" },
        { ru: "These biscuits look perfect.", en: "Это печенье выглядит идеально." },
      ],
    },
  ],
  tasks: [
    listen("engl6-t1", "Послушай. Сколько печь shortbread?", "Bake it slowly, about an hour.", [
      ["Около часа.", true],
      ["Десять минут.", false],
      ["Всю ночь.", false],
    ]),
    choice("engl6-t2", "Как сказать «Пахнет чудесно»?", [
      ["It smells wonderful.", true],
      ["It smells wonderfully.", false],
      ["It's smell wonderful.", false],
    ], { skill: "grammar" }),
    fill("engl6-t3", "Выбери правильное слово.", "Press it", "into the tin.", "gently", ["gently", "gentle", "gentler"], { skill: "grammar" }),
    read("engl6-t4", "Прочитай рецепт Эффи. Сколько сахара?", "MORAG'S SHORTBREAD\n225 g butter (soft)\n110 g sugar\n335 g flour\nBake slowly at 150°C for about an hour.", [
      ["110 г.", true],
      ["225 г.", false],
      ["335 г.", false],
    ]),
    match("engl6-t5", "Соедини пары.", [
      ["soft butter", "мягкое масло"],
      ["Prick it with a fork.", "Наколи вилкой."],
      ["Bake it slowly.", "Пеки медленно."],
      ["pale gold", "светло-золотистый"],
    ], { skill: "words" }),
    tf("engl6-t6", "Эффи говорит, что с shortbread нельзя торопиться.", true, "listening"),
    speak("engl6-t7", "Describe your favourite food.", "My favourite food is fresh bread. It smells wonderful, it looks golden, and it tastes delicious with butter.", "Моя любимая еда — свежий хлеб. Он чудесно пахнет, выглядит золотистым и очень вкусный с маслом.", {
      help: "Опиши вслух любимую еду: smells, looks, tastes + прилагательное.",
    }),
  ],
  reward: {
    itemId: "shortbread-tin",
    itemName: "Клетчатая коробка для печенья",
    itemNameRu: "Tartan shortbread tin",
    ru: "A tartan tin full of shortbread!",
    en: "Клетчатая коробка, полная печенья!",
    a11y: "На полке фургона стоит жестяная коробка в красно-зелёную шотландскую клетку, полная песочного печенья.",
    image: p("shortbread-tin"),
    steps: ["Эффи складывает печенье в старую клетчатую коробку.", "«For the road — and for Mrs Hope», — говорит она.", "Том ставит коробку на самую высокую полку.", "Мурзик знает, где она стоит."],
    bridge: "Лапа зажила. Пора в Северную Ирландию — на пароме в Белфаст. Но сначала Эффи хочет что-то написать для книги дороги.",
  },
};

const glasgow7: Lesson = {
  id: "en-a2-glasgow-7",
  level: "A2",
  cityId: "en-glasgow",
  number: 7,
  title: "Glasgow exam — Экзамен: Глазго",
  minutes: 9,
  goals: ["Понять длинный рассказ на слух", "Рассказать о самочувствии и дать совет", "Повторить всё из Глазго"],
  vocabNote: "Урок 7 — экзамен города: длинная аудиоистория и повторение всего из Глазго.",
  vocab: [
    v("engl7-1", "Northern Ireland", "Северная Ирландия", "Карта: стрелка через море в Белфаст.", "Послушать Northern Ireland", p("l7-1")),
    v("engl7-2", "the ferry to Belfast", "паром в Белфаст", "Большой белый паром у причала.", "Послушать the ferry to Belfast", p("l7-2")),
    v("engl7-3", "My paw is fine now.", "Лапа уже в порядке.", "Мурзик показывает чистую лапу без повязки.", "Послушать My paw is fine now", p("l7-3")),
    v("engl7-4", "Mind your paw!", "Береги лапу!", "Кирсти машет из двери аптеки.", "Послушать Mind your paw", p("l7-4")),
    v("engl7-5", "Cook carefully!", "Готовь осторожно!", "Эффи грозит пальцем, улыбаясь.", "Послушать Cook carefully", p("l7-5")),
    v("engl7-6", "Our ninth recipe!", "Наш девятый рецепт!", "Мурзик держит карточку с рецептом.", "Послушать Our ninth recipe", p("l7-6")),
    v("engl7-7", "the sea is rough", "на море волнение", "Волны бьются о борт парома.", "Послушать the sea is rough", p("l7-7")),
    v("engl7-8", "If you feel seasick…", "Если тебя укачает…", "Том держится за перила парома.", "Послушать If you feel seasick", p("l7-8")),
  ],
  letters: [
    letter("ninth = [найнθ]", "В ninth нет e: nine → ninth. В конце глухой th [θ], как в eighth: язык между зубами.", "our ninth recipe", "наш девятый рецепт"),
  ],
  dialogue: {
    title: "Прощание в аптеке",
    note: "Seasick — укачивает на море. Ginger — имбирь (помогает от тошноты).",
    lines: [
      line("effie", "Here's my shortbread recipe for your book, laddie.", "Вот мой рецепт печенья для твоей книги, паренёк."),
      line("murzik", "Our ninth recipe! And look — my paw is fine now!", "Наш девятый рецепт! И смотрите — лапа уже в порядке!"),
      line("effie", "Good. Now cook carefully!", "Хорошо. Теперь готовь осторожно!"),
      line("kirsty", "You're taking the ferry to Belfast? The sea is rough today.", "Вы плывёте на пароме в Белфаст? Сегодня на море волнение."),
      line("tom", "Oh no. I always feel seasick.", "О нет. Меня всегда укачивает."),
      line("kirsty", "If you feel seasick, look at the horizon and eat some ginger biscuits. And Murzik — mind your paw!", "Если укачает, смотри на горизонт и съешь имбирного печенья. А ты, Мурзик, береги лапу!"),
    ],
    gist: choice("engl7-d1", "Что советует Кирсти от морской болезни?", [
      ["Смотреть на горизонт и съесть имбирное печенье.", true],
      ["Лечь спать в каюте.", false],
      ["Не есть весь день.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем Глазго",
      paragraphs: [
        "Наречия: quickly, slowly, carefully, gently, badly, well, properly, regularly; hardly ever, always, usually.",
        "Feel / look / sound / taste / smell + прилагательное: I feel sick, you look pale, it sounds terrible, it smells wonderful. Вежливо: I'd like to…, Could I…?",
      ],
      examples: [
        { ru: "I feel much better — the cream worked quickly.", en: "Мне гораздо лучше — крем быстро помог." },
        { ru: "You look tired. You should go to bed early.", en: "Ты выглядишь усталым(-ой). Тебе стоит рано лечь." },
      ],
    },
  ],
  tasks: [
    listen("engl7-t1", "Аудиоистория: Кирсти рассказывает о своей работе. Послушай. Что ей нравится больше всего?", "I work in a small pharmacy on a street full of murals. People come in every day with colds, burns and headaches. I listen carefully and give advice. Sometimes I just say: go home, drink water and sleep well! The best part of my job is when people come back and say: I feel much better now.", [
      ["Когда люди возвращаются и говорят, что им лучше.", true],
      ["Росписи на улице.", false],
      ["Продавать кремы.", false],
    ]),
    choice("engl7-t2", "Из рассказа Кирсти: что она иногда советует?", [
      ["Пойти домой, пить воду и хорошо выспаться.", true],
      ["Сразу ехать в больницу.", false],
      ["Есть больше печенья.", false],
    ], { skill: "listening" }),
    choice("engl7-t3", "Как сказать «Ты выглядишь усталым(-ой)»?", [
      ["You look tired.", true],
      ["You look tiredly.", false],
      ["You are look tired.", false],
    ], { skill: "grammar" }),
    read("engl7-t4", "Прочитай билет на паром. Сколько плыть?", "CAIRNRYAN — BELFAST\nDeparts: 11:30\nArrives: 13:45\nPassengers: 2 + 1 van (blue)", [
      ["Чуть больше двух часов.", true],
      ["Полчаса.", false],
      ["Весь день.", false],
    ]),
    script("engl7-t5", "Попрощайся с Кирсти.", [
      { speaker: "Кирсти", text: "How's your paw?" },
      { speaker: "Ты", answer: "It's fine now! Thank you for everything.", options: ["It's fine now! Thank you for everything.", "It's healing badly urgent.", "I feel dizzily."] },
      { speaker: "Кирсти", text: "Look after yourself — and see you at the festival in London in August!" },
      { speaker: "Ты", answer: "See you there! And I'll cook carefully!", options: ["See you there! And I'll cook carefully!", "See you there! And I'll cook careful!", "Bake it fast!"] },
    ], { skill: "review" }),
    match("engl7-t6", "Повторяем Глазго: соедини пары.", [
      ["first aid", "первая помощь"],
      ["a bandage", "повязка"],
      ["I feel dizzy.", "Кружится голова."],
      ["a GP", "семейный врач"],
    ], { skill: "review" }),
    speak("engl7-t7", "Your friend looks pale and feels sick. What do you say?", "You look pale. Do you feel sick? Sit down and drink some water slowly. If you don't feel better, you should see a doctor.", "Ты бледный(-ая). Тебя тошнит? Сядь и медленно выпей воды. Если не станет лучше, тебе стоит сходить к врачу.", {
      help: "Помоги другу вслух: look, feel, наречия, should.",
    }),
  ],
  reward: {
    itemId: "recipe-shortbread",
    itemName: "Рецепт «Shortbread»",
    itemNameRu: "Shortbread recipe card",
    ru: "Our ninth recipe!",
    en: "Наш девятый рецепт!",
    a11y: "Карточка с рецептом песочного печенья вклеена на девятую страницу голубой тетради; рамка нарисована в красно-зелёную шотландскую клетку.",
    image: p("recipe-shortbread"),
    steps: ["Мурзик вклеивает рецепт на девятую страницу книги дороги.", "Эффи нарисовала вокруг рамку в шотландскую клетку.", "Внизу её почерком: «Never rush shortbread».", "Девять рецептов есть. Впереди — Северная Ирландия."],
  },
};

const story: CityStory = {
  home: {
    name: "Фургон у росписи",
    nameRu: "The van by the mural",
    image: p("home"),
    a11y: "Голубой фургон «Hope on Wheels» стоит на улице под огромной яркой росписью на стене дома; напротив — маленькая аптека.",
  },
  keepsakeId: "recipe-shortbread",
  welcomeRu: "Hello, Glasgow!",
  welcomeEn: "Привет, Глазго!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Голубой фургон в Глазго: широкая река, мосты, старые здания из красного песчаника и уличные росписи на стенах.",
  departureImage: p("departure"),
  departureA11y: "Кирсти в белом халате и бабушка Эффи со скакалкой на плече машут голубому фургону у аптеки.",
  finale: [
    {
      image: p("finale-1"),
      a11y: "У фургона уютно: зелёная аптечка у плиты, таймер-помидор, голубая бутылка для воды, календарь с росписями, скакалка и клетчатая коробка с печеньем.",
      lines: [
        { en: "Лапа зажила, Том больше не ест батончики в кляре, а в фургоне теперь все следят за здоровьем." },
        { en: "В книге дороги девятый рецепт: песочное печенье Эффи." },
      ],
    },
    {
      image: p("finale-2"),
      a11y: "Мурзик прыгает через скакалку на фоне яркой росписи, Эффи хлопает в ладоши, Кирсти и Том смеются.",
      lines: [
        { ru: "Glasgow complete!", en: "Глазго пройден!" },
        { en: "7 / 7 уроков" },
        { ru: "I feel great!", en: "Я прекрасно себя чувствую!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Кирсти в белом халате и бабушка Эффи со скакалкой на плече машут голубому фургону у аптеки.",
      lines: [
        { ru: "Goodbye, Kirsty! Goodbye, Effie!", en: "До свидания, Кирсти! До свидания, Эффи!" },
        { ru: "Next stop: Belfast!", en: "Следующая остановка: Белфаст!" },
      ],
    },
    {
      image: p("finale-4"),
      a11y: "Голубой фургон въезжает в трюм большого белого парома; впереди серое море и далёкий ирландский берег.",
      lines: [{ ru: "Glasgow → Belfast", en: "Глазго → Белфаст" }],
    },
    {
      image: pic("en/belfast/arrival"),
      a11y: "Голубой фургон в Белфасте: порт с огромными жёлтыми кранами, ратуша с зелёным куполом и цветные дома.",
      lines: [{ ru: "Hello, Belfast!", en: "Привет, Белфаст!" }],
    },
  ],
};

export const enGlasgow = {
  id: "en-glasgow",
  name: "Глазго",
  nameEn: "Glasgow",
  lessons: [glasgow1, glasgow2, glasgow3, glasgow4, glasgow5, glasgow6, glasgow7],
  story,
};
