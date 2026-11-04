import { pic } from "../art";
import { read } from "../make";
import type { CityStory, Lesson } from "../types";
import { choice, fill, letter, line, listen, match, script, speak, tf, v } from "../tr/make";

/*
 * Белфаст · «Телефон и сообщения» · A2, уроки 1–7.
 * Фургон «Hope on Wheels» стоит у старого порта. Звонит миссис Хоуп, бабушка Тома, и открывает секрет:
 * она родилась в Белфасте, и у неё есть сестра Мэгги. Пятьдесят лет назад они поссорились из-за рецепта
 * содового хлеба и больше не разговаривали. Мэгги держит маленькую пекарню; её внук Конор водит чёрное такси.
 * Мурзик и Том находят Мэгги и мирят сестёр по видеосвязи.
 * Грамматика: will для обещаний, предложений и решений (I'll call you back, I won't tell anyone),
 * телефонные фразы, сообщения.
 */

const p = (name: string) => pic(`en/belfast/${name}`);

const belfast1: Lesson = {
  id: "en-a2-belfast-1",
  level: "A2",
  cityId: "en-belfast",
  number: 1,
  title: "A call from Mrs Hope — Звонок миссис Хоуп",
  minutes: 8,
  goals: ["Понять телефонный разговор", "Hold on, you're breaking up, I'll call you back", "Will для обещаний: I'll tell you everything"],
  vocabNote: "You're breaking up — «тебя плохо слышно, связь прерывается». Hold on — «подожди минутку».",
  vocab: [
    v("enbf1-1", "Hold on a second.", "Подожди секунду.", "Том прикрывает телефон рукой и машет Мурзику.", "Послушать Hold on a second", p("l1-1")),
    v("enbf1-2", "I'll put you on speaker.", "Я включу громкую связь.", "Том нажимает кнопку динамика.", "Послушать I'll put you on speaker", p("l1-2")),
    v("enbf1-3", "You're breaking up.", "Тебя плохо слышно, связь прерывается.", "На экране телефона одна палочка сети.", "Послушать You're breaking up", p("l1-3")),
    v("enbf1-4", "I'll call you back.", "Я тебе перезвоню.", "Том кладёт телефон и выходит на улицу.", "Послушать I'll call you back", p("l1-4")),
    v("enbf1-5", "a secret", "секрет, тайна", "Миссис Хоуп на экране прикладывает палец к губам.", "Послушать a secret", p("l1-5")),
    v("enbf1-6", "I was born here.", "Я здесь родился (родилась).", "Старая фотография: маленькая девочка у порта.", "Послушать I was born here", p("l1-6")),
    v("enbf1-7", "Promise you won't be angry.", "Обещай, что не будешь сердиться.", "Миссис Хоуп с виноватой улыбкой.", "Послушать Promise you won't be angry", p("l1-7")),
    v("enbf1-8", "I'll tell you everything.", "Я всё тебе расскажу.", "Миссис Хоуп в кресле с чашкой чая.", "Послушать I'll tell you everything", p("l1-8")),
  ],
  letters: [
    letter("won't = [уоунт]", "Won't (will not) звучит [уоунт]. Не путай с want [уонт] — хотеть.", "I won't be angry.", "Я не буду сердиться."),
    letter("Belfast = [бэлфА:ст]", "Ударение на второй слог: [бэлфА:ст].", "in Belfast", "в Белфасте"),
  ],
  dialogue: {
    title: "Звонок",
    note: "Миссис Хоуп — бабушка Тома. Gran — «бабуля».",
    lines: [
      line("hope", "Tom, dear? Are you in Belfast? I need to tell you something.", "Том, дорогой? Вы в Белфасте? Мне нужно тебе кое-что сказать."),
      line("tom", "Hold on a second, Gran. I'll put you on speaker. Murzik's here too.", "Подожди секунду, бабуля. Я включу громкую связь. Мурзик тоже здесь."),
      line("hope", "I was born in Belfast. And I've got a… a sister. Maggie.", "Я родилась в Белфасте. И у меня есть… сестра. Мэгги."),
      line("tom", "A sister?! Gran, you're breaking up!", "Сестра?! Бабуля, тебя плохо слышно!"),
      line("hope", "Promise you won't be angry. I'll tell you everything.", "Обещай, что не будешь сердиться. Я всё тебе расскажу."),
      line("tom", "I promise. I'll call you back from outside!", "Обещаю. Я перезвоню тебе с улицы!"),
    ],
    gist: choice("enbf1-d1", "Какой секрет у миссис Хоуп?", [
      ["У неё есть сестра в Белфасте.", true],
      ["Она выиграла фестиваль.", false],
      ["Она продала кафе.", false],
    ]),
  },
  grammar: [
    {
      title: "Will: обещания и решения",
      paragraphs: [
        "Обещание: I'll tell you everything. I won't tell anyone. Решение прямо сейчас: I'll call you back. I'll put you on speaker.",
        "Просьба пообещать: Promise you won't be angry. — I promise I won't.",
      ],
      examples: [
        { ru: "I'll text you when I get there.", en: "Напишу тебе, когда доберусь." },
        { ru: "Don't worry, I won't forget.", en: "Не волнуйся, я не забуду." },
      ],
    },
  ],
  tasks: [
    listen("enbf1-t1", "Послушай. Где родилась миссис Хоуп?", "I was born in Belfast. And I've got a… a sister. Maggie.", [
      ["В Белфасте.", true],
      ["В Лондоне.", false],
      ["В Глазго.", false],
    ]),
    choice("enbf1-t2", "Как сказать «Я тебе перезвоню»?", [
      ["I'll call you back.", true],
      ["I call you back tomorrow yesterday.", false],
      ["I'm call you back.", false],
    ], { skill: "grammar" }),
    fill("enbf1-t3", "Выбери правильное слово: «Не волнуйся, я не забуду».", "Don't worry, I", "forget.", "won't", ["won't", "don't", "want"], { skill: "grammar" }),
    read("enbf1-t4", "Прочитай сообщение миссис Хоуп. Когда она хочет поговорить?", "Tom, dear, call me this evening after 7. It's important. Gran x", [
      ["Вечером после семи.", true],
      ["Утром в семь.", false],
      ["Прямо сейчас.", false],
    ]),
    match("enbf1-t5", "Соедини пары.", [
      ["Hold on a second.", "Подожди секунду."],
      ["You're breaking up.", "Тебя плохо слышно."],
      ["a secret", "секрет"],
      ["I'll tell you everything.", "Я всё тебе расскажу."],
    ], { skill: "words" }),
    tf("enbf1-t6", "Won't и want звучат одинаково.", false, "words"),
    speak("enbf1-t7", "Hello? Can you hear me? You're breaking up!", "Sorry, the signal is bad here. Hold on — I'll call you back in a minute.", "Извини, здесь плохая связь. Подожди — я перезвоню через минуту.", {
      help: "Ответь вслух на звонок с плохой связью.",
    }),
  ],
  reward: {
    itemId: "phone-holder",
    itemName: "Держатель для телефона",
    itemNameRu: "Phone holder",
    ru: "Hands-free for important calls!",
    en: "Руки свободны для важных звонков!",
    a11y: "На приборной панели фургона закреплён держатель для телефона рядом с вязаной овечкой.",
    image: p("phone-holder"),
    steps: ["Тому теперь часто звонят, а руки заняты.", "Он покупает держатель для телефона.", "Теперь бабушку можно слушать по громкой связи.", "Мурзик слушает тоже — очень внимательно."],
    bridge: "Вечером бабушка рассказывает всё. Пятьдесят лет назад сёстры поссорились. Мэгги осталась в Белфасте и открыла пекарню. А номер её телефона — вот он.",
  },
};

const belfast2: Lesson = {
  id: "en-a2-belfast-2",
  level: "A2",
  cityId: "en-belfast",
  number: 2,
  title: "Can I leave a message? — Можно оставить сообщение?",
  minutes: 8,
  goals: ["Позвонить в незнакомое место", "Оставить сообщение", "Попросить перезвонить"],
  vocabNote: "Can I speak to…? — Можно поговорить с…? She's not in — Её нет на месте. I'll pass it on — Я передам.",
  vocab: [
    v("enbf2-1", "Can I speak to Maggie, please?", "Можно поговорить с Мэгги?", "Том звонит, держа бумажку с номером.", "Послушать Can I speak to Maggie, please", p("l2-1")),
    v("enbf2-2", "Who's calling, please?", "Кто её спрашивает?", "Молодой человек в фартуке отвечает в пекарне.", "Послушать Who's calling, please", p("l2-2")),
    v("enbf2-3", "She's not in at the moment.", "Её сейчас нет.", "Пустой стул за прилавком пекарни.", "Послушать She's not in at the moment", p("l2-3")),
    v("enbf2-4", "Can I leave a message?", "Можно оставить сообщение?", "Том что-то быстро записывает.", "Послушать Can I leave a message", p("l2-4")),
    v("enbf2-5", "Could you ask her to call me back?", "Попросите её мне перезвонить, пожалуйста.", "Том диктует номер.", "Послушать Could you ask her to call me back", p("l2-5")),
    v("enbf2-6", "I'll pass it on.", "Я передам.", "Конор пишет записку и прикрепляет к кассе.", "Послушать I'll pass it on", p("l2-6")),
    v("enbf2-7", "Can you spell that?", "Продиктуйте по буквам.", "Буквы H-O-P-E на записке.", "Послушать Can you spell that", p("l2-7")),
    v("enbf2-8", "a bakery", "пекарня", "Маленькая пекарня с хлебом в витрине.", "Послушать a bakery", p("l2-8")),
  ],
  letters: [
    letter("message = [мЭсидж]", "Ударение на первый слог, -age читается [-идж]: message [мЭсидж].", "Can I leave a message?", "Можно оставить сообщение?"),
  ],
  dialogue: {
    title: "Звонок в пекарню",
    note: "Conor [кОнэр] — ирландское имя. Gran — бабуля.",
    lines: [
      line("conor", "Maggie's Bakery, good morning!", "Пекарня Мэгги, доброе утро!"),
      line("tom", "Hello. Can I speak to Maggie, please?", "Здравствуйте. Можно поговорить с Мэгги?"),
      line("conor", "She's not in at the moment. Who's calling, please?", "Её сейчас нет. Кто её спрашивает?"),
      line("tom", "My name's Tom Hope. Can I leave a message? Could you ask her to call me back?", "Меня зовут Том Хоуп. Можно оставить сообщение? Попросите её мне перезвонить, пожалуйста."),
      line("conor", "Hope? Can you spell that?", "Хоуп? Продиктуйте по буквам."),
      line("conor", "H-O-P-E… Wait. That's my gran's sister's name! … OK, I'll pass it on.", "H-O-P-E… Подождите. Это же фамилия сестры моей бабушки! … Хорошо, я передам."),
    ],
    gist: choice("enbf2-d1", "Кто такой Конор?", [
      ["Внук Мэгги.", true],
      ["Брат Тома.", false],
      ["Почтальон.", false],
    ]),
  },
  grammar: [
    {
      title: "Вежливые фразы по телефону",
      paragraphs: [
        "Попросить: Can I speak to…? Could you ask her to call me back? Can I leave a message?",
        "Ответить: Who's calling, please? She's not in. Hold on, I'll get her. I'll pass it on.",
      ],
      examples: [
        { ru: "Could you ask him to call me after six?", en: "Попросите его, пожалуйста, перезвонить мне после шести." },
        { ru: "Sorry, he's not in. Can I take a message?", en: "Извините, его нет. Что ему передать?" },
      ],
    },
  ],
  tasks: [
    listen("enbf2-t1", "Послушай. Где сейчас Мэгги?", "She's not in at the moment. Who's calling, please?", [
      ["Её нет на месте.", true],
      ["Она у телефона.", false],
      ["Она уехала в Лондон.", false],
    ]),
    choice("enbf2-t2", "Как вежливо попросить, чтобы человек перезвонил?", [
      ["Could you ask her to call me back?", true],
      ["Could you ask her call back me?", false],
      ["Can she calls me back?", false],
    ], { skill: "grammar" }),
    fill("enbf2-t3", "Выбери правильное слово.", "Can I", "a message?", "leave", ["leave", "live", "let"], { skill: "words" }),
    read("enbf2-t4", "Прочитай записку Конора. Что нужно сделать Мэгги?", "GRAN — a man called Tom HOPE phoned. Please call him back: 07700 900456. He says it's about your sister!! C.", [
      ["Перезвонить Тому.", true],
      ["Позвонить сестре.", false],
      ["Испечь хлеб.", false],
    ]),
    match("enbf2-t5", "Соедини пары.", [
      ["a bakery", "пекарня"],
      ["Who's calling, please?", "Кто спрашивает?"],
      ["I'll pass it on.", "Я передам."],
      ["Can you spell that?", "Продиктуйте по буквам."],
    ], { skill: "words" }),
    script("enbf2-t6", "Позвони в офис.", [
      { speaker: "Офис", text: "Good morning, how can I help?" },
      { speaker: "Ты", answer: "Can I speak to Mr Brown, please?", options: ["Can I speak to Mr Brown, please?", "Can I spell Mr Brown?", "I'll pass it on."] },
      { speaker: "Офис", text: "Sorry, he's not in at the moment." },
      { speaker: "Ты", answer: "Can I leave a message?", options: ["Can I leave a message?", "Can I live a message?", "Who's calling, please?"] },
    ], { skill: "speaking" }),
    speak("enbf2-t7", "Sorry, she's not in at the moment.", "That's OK. Can I leave a message? Could you ask her to call me back after five?", "Ничего. Можно оставить сообщение? Попросите её перезвонить мне после пяти.", {
      help: "Оставь вслух сообщение по телефону.",
    }),
  ],
  reward: {
    itemId: "notepad",
    itemName: "Блокнот для звонков",
    itemNameRu: "Phone notepad",
    ru: "Every number in one place!",
    en: "Все номера в одном месте!",
    a11y: "На полке у окошка фургона лежит маленький жёлтый блокнот с привязанным карандашом; на первой странице номер пекарни.",
    image: p("notepad"),
    steps: ["Мурзик записывает номер пекарни в маленький блокнот.", "К блокноту он привязывает карандаш.", "Теперь все номера — в одном месте.", "Первый номер — «Maggie's Bakery»."],
    bridge: "Мэгги не перезванивает. Ни вечером, ни утром. Мурзик решает: «I'll find her myself!»",
  },
};

const belfast3: Lesson = {
  id: "en-a2-belfast-3",
  level: "A2",
  cityId: "en-belfast",
  number: 3,
  title: "I'll find her! — Я её найду!",
  minutes: 8,
  goals: ["Предложить помощь: I'll take you", "Пообещать: I won't give up", "Понять таксиста: It's just round the corner"],
  vocabNote: "В Белфасте знаменитые чёрные такси — black cabs. Таксисты знают всё и всех.",
  vocab: [
    v("enbf3-1", "a black cab", "чёрное такси", "Старое чёрное такси у тротуара.", "Послушать a black cab", p("l3-1")),
    v("enbf3-2", "I'll take you there.", "Я вас туда отвезу.", "Таксист открывает дверь.", "Послушать I'll take you there", p("l3-2")),
    v("enbf3-3", "I won't give up.", "Я не сдамся.", "Мурзик сжимает лапы в кулаки.", "Послушать I won't give up", p("l3-3")),
    v("enbf3-4", "It's just round the corner.", "Это совсем рядом, за углом.", "Таксист показывает за угол.", "Послушать It's just round the corner", p("l3-4")),
    v("enbf3-5", "the City Hall", "ратуша (Сити-холл)", "Белое здание с большим зелёным куполом.", "Послушать the City Hall", p("l3-5")),
    v("enbf3-6", "the shipyard", "верфь", "Огромные жёлтые краны над портом.", "Послушать the shipyard", p("l3-6")),
    v("enbf3-7", "the Titanic", "«Титаник»", "Здание в форме носа корабля, сверкающее серебром.", "Послушать the Titanic", p("l3-7")),
    v("enbf3-8", "Keep the change.", "Сдачи не надо.", "Том протягивает таксисту купюру.", "Послушать Keep the change", p("l3-8")),
  ],
  letters: [
    letter("Titanic = [тайтЭник]", "По-английски «Титаник» звучит [тайтЭник].", "the Titanic", "«Титаник»"),
  ],
  dialogue: {
    title: "В чёрном такси",
    note: "The Titanic was built here — «Титаник» строили здесь, на верфи Белфаста.",
    lines: [
      line("murzik", "Maggie didn't call back. I won't give up. I'll find her!", "Мэгги не перезвонила. Я не сдамся. Я её найду!"),
      line("conor", "Need a taxi? … Wait — Hope on Wheels? You must be Tom Hope! I'm Conor. I answered the phone yesterday.", "Нужно такси? … Подождите — «Hope on Wheels»? Вы, наверное, Том Хоуп! Я Конор. Это я вчера отвечал по телефону."),
      line("tom", "Conor! Is Maggie angry?", "Конор! Мэгги сердится?"),
      line("conor", "She's… surprised. Get in. I'll take you there. It's just round the corner from the City Hall.", "Она… удивлена. Садитесь. Я вас отвезу. Это совсем рядом с ратушей."),
      line("conor", "On the way I'll show you the shipyard. They built the Titanic there!", "По дороге покажу вам верфь. Там построили «Титаник»!"),
      line("tom", "Thanks, Conor. Keep the change!", "Спасибо, Конор. Сдачи не надо!"),
    ],
    gist: choice("enbf3-d1", "Кто водит чёрное такси?", [
      ["Конор, внук Мэгги.", true],
      ["Сама Мэгги.", false],
      ["Незнакомый таксист.", false],
    ]),
  },
  grammar: [
    {
      title: "Will: предложения помощи",
      paragraphs: [
        "Предлагаем помощь: I'll take you there. I'll show you. I'll carry that for you.",
        "Обещаем: I won't give up. I'll be there at six. Отказ / нежелание: She won't answer the phone — «Она никак не берёт трубку».",
      ],
      examples: [
        { ru: "Your bag looks heavy. I'll help you.", en: "Сумка, кажется, тяжёлая. Я помогу." },
        { ru: "The door won't open!", en: "Дверь никак не открывается!" },
      ],
    },
  ],
  tasks: [
    listen("enbf3-t1", "Послушай. Что построили на верфи?", "They built the Titanic there!", [
      ["«Титаник».", true],
      ["Ратушу.", false],
      ["Пекарню.", false],
    ]),
    choice("enbf3-t2", "Предложи помощь: «Я вас туда отвезу».", [
      ["I'll take you there.", true],
      ["I take you there yesterday.", false],
      ["I'm take you there.", false],
    ], { skill: "grammar" }),
    fill("enbf3-t3", "Выбери правильное слово: «Я не сдамся».", "I", "give up.", "won't", ["won't", "don't will", "not"], { skill: "grammar" }),
    read("enbf3-t4", "Прочитай вывеску. Когда пекарня открыта в воскресенье?", "MAGGIE'S BAKERY\nSince 1962\nMon–Sat 7 am – 5 pm\nSun 8 am – 12 noon\nSoda bread fresh every morning!", [
      ["С 8 до 12.", true],
      ["С 7 до 5.", false],
      ["Закрыта.", false],
    ]),
    match("enbf3-t5", "Соедини пары.", [
      ["a black cab", "чёрное такси"],
      ["the City Hall", "ратуша"],
      ["the shipyard", "верфь"],
      ["Keep the change.", "Сдачи не надо."],
    ], { skill: "words" }),
    tf("enbf3-t6", "Пекарня Мэгги работает с 1962 года.", true, "reading"),
    speak("enbf3-t7", "I'm lost. I'm looking for the station.", "Don't worry, it's just round the corner. I'll take you there.", "Не волнуйтесь, это совсем рядом. Я вас провожу.", {
      help: "Предложи помощь вслух: I'll…",
    }),
  ],
  reward: {
    itemId: "taxi-model",
    itemName: "Модель чёрного такси",
    itemNameRu: "Black cab model",
    ru: "A little black cab!",
    en: "Маленькое чёрное такси!",
    a11y: "На полке фургона рядом с игрушечным трамваем стоит маленькая модель чёрного такси.",
    image: p("taxi-model"),
    steps: ["Конор дарит Мурзику маленькую модель чёрного такси.", "«So you won't forget your first Belfast taxi».", "Мурзик ставит её рядом с трамваем из Манчестера.", "Полка становится похожа на маленький город."],
    bridge: "Пекарня Мэгги. Колокольчик над дверью. За прилавком — пожилая женщина, очень похожая на миссис Хоуп.",
  },
};

const belfast4: Lesson = {
  id: "en-a2-belfast-4",
  level: "A2",
  cityId: "en-belfast",
  number: 4,
  title: "Maggie — Мэгги",
  minutes: 8,
  goals: ["Понять трудный разговор", "Will для отказа и сомнения: She won't…, I'll think about it", "Обещать: I promise"],
  vocabNote: "I'll think about it — «я подумаю». Это часто вежливое «пока нет».",
  vocab: [
    v("enbf4-1", "You look just like her.", "Вы так похожи на неё.", "Мэгги за прилавком, очень похожая на миссис Хоуп.", "Послушать You look just like her", p("l4-1")),
    v("enbf4-2", "We fell out.", "Мы поссорились.", "Старое фото: две девушки отвернулись друг от друга.", "Послушать We fell out", p("l4-2")),
    v("enbf4-3", "fifty years ago", "пятьдесят лет назад", "Чёрно-белая фотография пекарни.", "Послушать fifty years ago", p("l4-3")),
    v("enbf4-4", "She won't talk to me.", "Она не захочет со мной говорить.", "Мэгги грустно качает головой.", "Послушать She won't talk to me", p("l4-4")),
    v("enbf4-5", "She misses you.", "Она скучает по вам.", "Том показывает фото миссис Хоуп на телефоне.", "Послушать She misses you", p("l4-5")),
    v("enbf4-6", "I'll think about it.", "Я подумаю.", "Мэгги смотрит в окно.", "Послушать I'll think about it", p("l4-6")),
    v("enbf4-7", "I promise.", "Обещаю.", "Мурзик прижимает лапу к сердцу.", "Послушать I promise", p("l4-7")),
    v("enbf4-8", "It was a silly argument.", "Это была глупая ссора.", "Мэгги грустно улыбается.", "Послушать It was a silly argument", p("l4-8")),
  ],
  letters: [
    letter("argument = [А:гьюмэнт]", "Ударение на первый слог: [А:гьюмэнт]. Значит не только «аргумент», но и «спор, ссора».", "a silly argument", "глупая ссора"),
  ],
  dialogue: {
    title: "В пекарне",
    note: "Fall out (fell out) — поссориться. Over a recipe — из-за рецепта.",
    lines: [
      line("tom", "Hello… You must be Maggie. You look just like Gran.", "Здравствуйте… Вы, наверное, Мэгги. Вы так похожи на бабушку."),
      line("maggie", "And you've got her eyes. Yes, I'm Maggie. We fell out fifty years ago.", "А у тебя её глаза. Да, я Мэгги. Мы поссорились пятьдесят лет назад."),
      line("murzik", "Why?", "Почему?"),
      line("maggie", "Over our mother's soda bread recipe. It was a silly argument. But she won't talk to me now.", "Из-за маминого рецепта содового хлеба. Это была глупая ссора. Но теперь она не захочет со мной говорить."),
      line("tom", "She will! She misses you. Will you talk to her? I promise she won't be angry.", "Захочет! Она скучает по вам. Вы поговорите с ней? Обещаю, она не будет сердиться."),
      line("maggie", "I'll think about it.", "Я подумаю."),
    ],
    gist: choice("enbf4-d1", "Из-за чего поссорились сёстры?", [
      ["Из-за маминого рецепта содового хлеба.", true],
      ["Из-за пекарни.", false],
      ["Из-за Тома.", false],
    ]),
  },
  grammar: [
    {
      title: "Will you…? и won't",
      paragraphs: [
        "Will you…? — просьба: Will you talk to her? Will you help me? Ответ: Yes, I will. / I'll think about it.",
        "Won't — иногда «не хочет, отказывается»: She won't talk to me. The car won't start (никак не заводится).",
      ],
      examples: [
        { ru: "Will you come to the festival? — Yes, I will!", en: "Ты приедешь на фестиваль? — Да!" },
        { ru: "My phone won't turn on.", en: "Телефон никак не включается." },
      ],
    },
  ],
  tasks: [
    listen("enbf4-t1", "Послушай. Когда сёстры поссорились?", "We fell out fifty years ago.", [
      ["Пятьдесят лет назад.", true],
      ["Пятнадцать лет назад.", false],
      ["Вчера.", false],
    ]),
    choice("enbf4-t2", "Как спросить «Ты поговоришь с ней?» (просьба)", [
      ["Will you talk to her?", true],
      ["Do you will talk to her?", false],
      ["Will you to talk to her?", false],
    ], { skill: "grammar" }),
    fill("enbf4-t3", "Выбери правильное слово: «Телефон никак не включается».", "My phone", "turn on.", "won't", ["won't", "isn't", "doesn't will"], { skill: "grammar" }),
    read("enbf4-t4", "Мэгги показывает старую открытку. Кто её написал?", "Maggie, I'm sorry. I'm leaving for London tomorrow. I'll write. Your sister, Rose", [
      ["Сестра Мэгги, Роуз (миссис Хоуп).", true],
      ["Мама Мэгги.", false],
      ["Конор.", false],
    ]),
    match("enbf4-t5", "Соедини пары.", [
      ["We fell out.", "Мы поссорились."],
      ["She misses you.", "Она скучает по вам."],
      ["I'll think about it.", "Я подумаю."],
      ["I promise.", "Обещаю."],
    ], { skill: "words" }),
    tf("enbf4-t6", "Мэгги сразу соглашается поговорить с сестрой.", false, "listening"),
    speak("enbf4-t7", "Will you help me with my homework?", "Yes, I will. I'll come after dinner. I promise I won't be late.", "Да, помогу. Приду после ужина. Обещаю, не опоздаю.", {
      help: "Пообещай вслух помочь: I will, I'll, I won't.",
    }),
  ],
  reward: {
    itemId: "old-postcard",
    itemName: "Старая открытка",
    itemNameRu: "Old postcard",
    ru: "A postcard from fifty years ago!",
    en: "Открытка пятидесятилетней давности!",
    a11y: "На доске в фургоне приколота пожелтевшая открытка с видом старого Белфаста и надписью «Your sister, Rose».",
    image: p("old-postcard"),
    steps: ["Мэгги отдаёт Тому старую открытку от сестры.", "«Rose wrote: I'll write. She never did. And I never wrote back».", "Том прикалывает открытку в фургоне.", "Миссис Хоуп зовут Роуз — Том почти забыл."],
    bridge: "На следующий день Мэгги звонит сама: «All right. I'll talk to her. But how? I don't know how to make a video call!»",
  },
};

const belfast5: Lesson = {
  id: "en-a2-belfast-5",
  level: "A2",
  cityId: "en-belfast",
  number: 5,
  title: "The video call — Видеозвонок",
  minutes: 8,
  goals: ["Помочь с видеозвонком", "Can you hear me? You're frozen. You're on mute.", "Объяснить, что нажать"],
  vocabNote: "You're on mute — «у тебя выключен микрофон». You're frozen — «у тебя картинка зависла».",
  vocab: [
    v("enbf5-1", "a video call", "видеозвонок", "Планшет с двумя лицами на экране.", "Послушать a video call", p("l5-1")),
    v("enbf5-2", "Can you hear me?", "Ты меня слышишь?", "Миссис Хоуп на экране прикладывает ладонь к уху.", "Послушать Can you hear me", p("l5-2")),
    v("enbf5-3", "You're on mute.", "У тебя выключен звук.", "Значок перечёркнутого микрофона.", "Послушать You're on mute", p("l5-3")),
    v("enbf5-4", "Turn your camera on.", "Включи камеру.", "Мурзик показывает на кнопку камеры.", "Послушать Turn your camera on", p("l5-4")),
    v("enbf5-5", "You're frozen.", "У тебя зависла картинка.", "Лицо миссис Хоуп застыло на экране со смешной гримасой.", "Послушать You're frozen", p("l5-5")),
    v("enbf5-6", "Press the green button.", "Нажми зелёную кнопку.", "Палец Мэгги над зелёной кнопкой.", "Послушать Press the green button", p("l5-6")),
    v("enbf5-7", "It's so good to see you.", "Как хорошо тебя видеть!", "Сёстры улыбаются друг другу через экран.", "Послушать It's so good to see you", p("l5-7")),
    v("enbf5-8", "I'm sorry.", "Прости меня.", "Мэгги вытирает глаза.", "Послушать I'm sorry", p("l5-8")),
  ],
  letters: [
    letter("mute = [мьют]", "Mute [мьют] — без звука. U здесь читается [ью], как в music [мьЮзик].", "You're on mute.", "У тебя выключен звук."),
  ],
  dialogue: {
    title: "Сёстры",
    note: "Rose — настоящее имя миссис Хоуп. Maggie — сокращённое от Margaret.",
    lines: [
      line("murzik", "Press the green button, Maggie. … Now turn your camera on.", "Нажмите зелёную кнопку, Мэгги. … Теперь включите камеру."),
      line("tom", "Gran, you're on mute! We can't hear you.", "Бабуля, у тебя выключен звук! Мы тебя не слышим."),
      line("hope", "Maggie? Can you hear me now?", "Мэгги? Теперь ты меня слышишь?"),
      line("maggie", "Rose… It's so good to see you. I'm sorry.", "Роуз… Как хорошо тебя видеть! Прости меня."),
      line("hope", "No, I'm sorry. Fifty years, Maggie! Over a silly recipe!", "Нет, это ты меня прости. Пятьдесят лет, Мэгги! Из-за глупого рецепта!"),
      line("murzik", "Oh no — you're frozen! … It's OK, it's back!", "Ой — у вас зависла картинка! … Всё, вернулась!"),
    ],
    gist: choice("enbf5-d1", "Что говорят друг другу сёстры?", [
      ["Просят прощения и радуются встрече.", true],
      ["Снова ссорятся.", false],
      ["Говорят только о погоде.", false],
    ]),
  },
  grammar: [
    {
      title: "Объяснить, что делать",
      paragraphs: [
        "Короткие указания: Press the green button. Turn your camera on. Turn the sound up. Click here.",
        "Turn on / turn off, turn up / turn down: Turn it on. Turn the music down. It с такими глаголами — в середину: turn it on.",
      ],
      examples: [
        { ru: "Can you turn the volume up? I can't hear you.", en: "Можешь сделать погромче? Я тебя не слышу." },
        { ru: "Turn your microphone off when you're not speaking.", en: "Выключай микрофон, когда не говоришь." },
      ],
    },
  ],
  tasks: [
    listen("enbf5-t1", "Послушай. Почему не было слышно миссис Хоуп?", "Gran, you're on mute! … OK, now we can hear you.", [
      ["У неё был выключен звук.", true],
      ["Сломался телефон.", false],
      ["Она молчала.", false],
    ]),
    choice("enbf5-t2", "Как сказать «Включи камеру»?", [
      ["Turn your camera on.", true],
      ["Turn on it your camera.", false],
      ["Open your camera on.", false],
    ], { skill: "grammar" }),
    fill("enbf5-t3", "Выбери правильное слово: «Сделай погромче».", "Turn the volume", ", please.", "up", ["up", "on", "in"], { skill: "grammar" }),
    read("enbf5-t4", "Прочитай записку Мурзика для Мэгги. Что сделать вторым?", "VIDEO CALL — HOW TO:\n1. Press the green button.\n2. Turn your camera on.\n3. Can't hear? Check the microphone.\n4. Smile!", [
      ["Включить камеру.", true],
      ["Нажать зелёную кнопку.", false],
      ["Улыбнуться.", false],
    ]),
    match("enbf5-t5", "Соедини пары.", [
      ["You're on mute.", "У тебя выключен звук."],
      ["You're frozen.", "У тебя зависла картинка."],
      ["a video call", "видеозвонок"],
      ["I'm sorry.", "Прости меня."],
    ], { skill: "words" }),
    script("enbf5-t6", "Помоги другу с видеозвонком.", [
      { speaker: "Друг", text: "I can't see you!" },
      { speaker: "Ты", answer: "Turn your camera on. It's the button at the bottom.", options: ["Turn your camera on. It's the button at the bottom.", "You're frozen on mute.", "Turn on it camera."] },
      { speaker: "Друг", text: "Now? Can you hear me?" },
      { speaker: "Ты", answer: "Yes, I can! It's so good to see you!", options: ["Yes, I can! It's so good to see you!", "No, I promise.", "Press the silly argument."] },
    ], { skill: "speaking" }),
    speak("enbf5-t7", "Explain to your grandmother how to make a video call.", "Press the green button. Then turn your camera on. If I can't hear you, check the microphone.", "Нажми зелёную кнопку. Потом включи камеру. Если я тебя не слышу, проверь микрофон.", {
      help: "Объясни вслух, как сделать видеозвонок.",
    }),
  ],
  reward: {
    itemId: "tablet-stand",
    itemName: "Подставка для планшета",
    itemNameRu: "Tablet stand",
    ru: "For family video calls!",
    en: "Для семейных видеозвонков!",
    a11y: "На столике у фургона стоит деревянная подставка для планшета; на экране — две улыбающиеся бабушки.",
    image: p("tablet-stand"),
    steps: ["После звонка Конор приносит деревянную подставку для планшета.", "«Gran will call Rose every Sunday now».", "Мурзик ставит подставку на столик.", "Теперь у фургона есть «семейный экран»."],
    bridge: "Мэгги улыбается впервые за весь день. «Now come to the kitchen. I'll show you that famous recipe — both versions!»",
  },
};

const belfast6: Lesson = {
  id: "en-a2-belfast-6",
  level: "A2",
  cityId: "en-belfast",
  number: 6,
  title: "Maggie's soda bread — Содовый хлеб Мэгги",
  minutes: 8,
  goals: ["Понять рецепт", "Will в рецепте: it'll rise, it'll sound hollow", "Узнать, из-за чего была ссора"],
  vocabNote: "Soda bread — ирландский хлеб без дрожжей: тесто поднимается от соды и пахты (buttermilk, она похожа на кефир).",
  vocab: [
    v("enbf6-1", "buttermilk", "пахта (как кефир)", "Кувшин с белой пахтой.", "Послушать buttermilk", p("l6-1")),
    v("enbf6-2", "bicarbonate of soda", "пищевая сода", "Маленькая коробочка с содой.", "Послушать bicarbonate of soda", p("l6-2")),
    v("enbf6-3", "no yeast", "без дрожжей", "Перечёркнутый пакетик дрожжей.", "Послушать no yeast", p("l6-3")),
    v("enbf6-4", "Cut a cross on top.", "Надрежь крест сверху.", "Нож рисует крест на круглом тесте.", "Послушать Cut a cross on top", p("l6-4")),
    v("enbf6-5", "Tap the bottom.", "Постучи по донышку.", "Мэгги стучит пальцем по дну хлеба.", "Послушать Tap the bottom", p("l6-5")),
    v("enbf6-6", "It'll sound hollow.", "Звук будет глухой, пустой.", "Звуковые волны от хлеба.", "Послушать It'll sound hollow", p("l6-6")),
    v("enbf6-7", "a handful of raisins", "горсть изюма", "Горсть изюма над миской.", "Послушать a handful of raisins", p("l6-7")),
    v("enbf6-8", "Both are right!", "Обе правы!", "Две буханки рядом: одна с изюмом, другая без.", "Послушать Both are right", p("l6-8")),
  ],
  letters: [
    letter("yeast = [йи:ст]", "Yeast [йи:ст] — дрожжи. Не путай с east [и:ст] — восток.", "no yeast", "без дрожжей"),
    letter("hollow = [хОлоу]", "Ударение на первый слог: [хОлоу].", "It'll sound hollow.", "Звук будет глухой."),
  ],
  dialogue: {
    title: "Два рецепта",
    note: "Fruit soda — содовый хлеб с изюмом. Plain — простой, без добавок.",
    lines: [
      line("maggie", "Flour, a little salt, bicarbonate of soda and buttermilk. No yeast!", "Мука, немного соли, сода и пахта. Без дрожжей!"),
      line("maggie", "Mix it quickly, make a round loaf and cut a cross on top.", "Быстро замеси, сделай круглую буханку и надрежь крест сверху."),
      line("murzik", "And the raisins?", "А изюм?"),
      line("maggie", "Ha! That was the argument. Rose said: a handful of raisins. I said: never, plain is best!", "Ха! Вот из-за этого и была ссора. Роуз говорила: горсть изюма. А я: ни за что, простой лучше!"),
      line("tom", "How will we know it's ready?", "А как мы узнаем, что готово?"),
      line("maggie", "Tap the bottom. It'll sound hollow. … So today we'll bake both. Both are right!", "Постучи по донышку. Звук будет глухой. … Так что сегодня испечём оба. Обе правы!"),
    ],
    gist: choice("enbf6-d1", "Из-за чего на самом деле была ссора?", [
      ["Класть ли изюм в хлеб.", true],
      ["Сколько печь хлеб.", false],
      ["Кто будет печь в пекарне.", false],
    ]),
  },
  grammar: [
    {
      title: "Will в рецептах и прогнозах",
      paragraphs: [
        "Что случится, если всё сделать правильно: It'll rise. It'll be golden. It'll sound hollow.",
        "How will we know…? — Как мы узнаем…? You'll see — увидишь.",
      ],
      examples: [
        { ru: "Bake it for 40 minutes and it'll be perfect.", en: "Пеки 40 минут — и будет идеально." },
        { ru: "Don't open the oven or it won't rise.", en: "Не открывай духовку, а то не поднимется." },
      ],
    },
  ],
  tasks: [
    listen("enbf6-t1", "Послушай. Как узнать, что хлеб готов?", "Tap the bottom. It'll sound hollow.", [
      ["Постучать по донышку — звук будет глухой.", true],
      ["Посмотреть на часы.", false],
      ["Попробовать кусочек.", false],
    ]),
    choice("enbf6-t2", "Как сказать «Пеки 40 минут — и будет идеально»?", [
      ["Bake it for 40 minutes and it'll be perfect.", true],
      ["Bake it 40 minutes and it be perfect.", false],
      ["Bake it for 40 minutes and it's will perfect.", false],
    ], { skill: "grammar" }),
    read("enbf6-t3", "Прочитай рецепт Мэгги. При какой температуре печь?", "SODA BREAD\n450 g flour, 1 tsp salt, 1 tsp bicarbonate of soda, 400 ml buttermilk\nMix quickly, cut a cross.\nBake at 200°C for 40 minutes.\n(Rose: + a handful of raisins!)", [
      ["200 градусов.", true],
      ["400 градусов.", false],
      ["40 градусов.", false],
    ]),
    fill("enbf6-t4", "Выбери правильное слово.", "There's no", "in soda bread.", "yeast", ["yeast", "east", "yes"], { skill: "words" }),
    match("enbf6-t5", "Соедини пары.", [
      ["buttermilk", "пахта"],
      ["no yeast", "без дрожжей"],
      ["Cut a cross on top.", "Надрежь крест сверху."],
      ["Both are right!", "Обе правы!"],
    ], { skill: "words" }),
    tf("enbf6-t6", "Роуз (миссис Хоуп) хотела класть в хлеб изюм.", true, "listening"),
    speak("enbf6-t7", "How will I know the cake is ready?", "Put a knife in the middle. It'll come out clean when it's ready.", "Воткни нож в середину. Когда пирог готов, нож выйдет чистым.", {
      help: "Объясни вслух, как узнать, что пирог готов: it'll…",
    }),
  ],
  reward: {
    itemId: "bread-board",
    itemName: "Доска для хлеба",
    itemNameRu: "Bread board",
    ru: "Two loaves — no more arguments!",
    en: "Две буханки — и никаких ссор!",
    a11y: "На столике фургона деревянная доска, на ней две круглые буханки с крестом сверху: одна с изюмом, другая без.",
    image: p("bread-board"),
    steps: ["Мэгги дарит фургону старую доску для хлеба.", "На ней — две буханки: «Rose's» и «Maggie's».", "Мурзик пробует обе.", "Он дипломатично говорит: «Both are delicious!»"],
    bridge: "Последний вечер в Белфасте. Мэгги пишет рецепт — оба варианта — для книги дороги. И у неё есть новость.",
  },
};

const belfast7: Lesson = {
  id: "en-a2-belfast-7",
  level: "A2",
  cityId: "en-belfast",
  number: 7,
  title: "Belfast exam — Экзамен: Белфаст",
  minutes: 9,
  goals: ["Понять длинный рассказ на слух", "Пообещать и предложить помощь", "Повторить всё из Белфаста"],
  vocabNote: "Урок 7 — экзамен города: длинная аудиоистория и повторение всего из Белфаста.",
  vocab: [
    v("enbf7-1", "Our tenth recipe!", "Наш десятый рецепт!", "Мурзик держит карточку с двумя рецептами.", "Послушать Our tenth recipe", p("l7-1")),
    v("enbf7-2", "two versions", "два варианта", "Карточка разделена пополам: «Rose» и «Maggie».", "Послушать two versions", p("l7-2")),
    v("enbf7-3", "I'll come to the festival.", "Я приеду на фестиваль.", "Мэгги показывает билет на паром до Англии.", "Послушать I'll come to the festival", p("l7-3")),
    v("enbf7-4", "I'll drive you.", "Я тебя отвезу.", "Конор у своего чёрного такси.", "Послушать I'll drive you", p("l7-4")),
    v("enbf7-5", "the Republic of Ireland", "Республика Ирландия", "Карта: стрелка из Белфаста на юго-запад, в Голуэй.", "Послушать the Republic of Ireland", p("l7-5")),
    v("enbf7-6", "Galway", "Голуэй", "Цветной городок у моря.", "Послушать Galway", p("l7-6")),
    v("enbf7-7", "Ring me when you get there!", "Позвони, когда доберётесь!", "Мэгги машет телефоном.", "Послушать Ring me when you get there", p("l7-7")),
    v("enbf7-8", "Thank you for bringing us together.", "Спасибо, что помирили нас.", "Мэгги обнимает Тома.", "Послушать Thank you for bringing us together", p("l7-8")),
  ],
  letters: [
    letter("tenth = [тэнθ]", "Ten → tenth [тэнθ]: в конце глухой th.", "our tenth recipe", "наш десятый рецепт"),
  ],
  dialogue: {
    title: "Прощание у пекарни",
    note: "Bring together — свести вместе, помирить.",
    lines: [
      line("maggie", "Here's the recipe for your road book. Two versions — Rose's and mine.", "Вот рецепт для вашей книги дороги. Два варианта — Роуз и мой."),
      line("murzik", "Our tenth recipe! And the best story.", "Наш десятый рецепт! И лучшая история."),
      line("maggie", "And I've got news. I'll come to the festival in London. I want to see Rose.", "И у меня новость. Я приеду на фестиваль в Лондон. Хочу увидеть Роуз."),
      line("conor", "And I'll drive you, Gran. Ferry and car — door to door.", "А я тебя отвезу, бабуля. Паром и машина — от двери до двери."),
      line("maggie", "Thank you for bringing us together, Tom. Ring me when you get there!", "Спасибо, что помирил нас, Том. Позвони, когда доберётесь!"),
      line("tom", "We will! Next stop — Galway, in the Republic of Ireland.", "Обязательно! Следующая остановка — Голуэй, в Республике Ирландия."),
    ],
    gist: choice("enbf7-d1", "Что обещает Мэгги?", [
      ["Приехать на фестиваль в Лондон.", true],
      ["Открыть пекарню в Лондоне.", false],
      ["Поехать с ними в Голуэй.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем Белфаст",
      paragraphs: [
        "Телефон: Can I speak to…? Hold on. She's not in. Can I leave a message? Could you ask her to call me back? You're breaking up. I'll call you back.",
        "Will: обещание (I'll come, I won't give up), предложение (I'll drive you), решение (I'll put you on speaker), отказ (She won't talk). Видео: You're on mute, turn your camera on.",
      ],
      examples: [
        { ru: "I promise I'll call you every Sunday.", en: "Обещаю звонить тебе каждое воскресенье." },
        { ru: "My laptop won't start! — Don't worry, I'll fix it.", en: "Ноутбук никак не включается! — Не волнуйся, я починю." },
      ],
    },
  ],
  tasks: [
    listen("enbf7-t1", "Аудиоистория: Мэгги рассказывает о своей пекарне. Послушай. Кто открыл пекарню?", "My mother opened this bakery in 1962. Rose and I worked here every morning before school. When Rose left for London, I stayed. For fifty years I baked plain soda bread — no raisins! But tomorrow I'll put a handful of raisins in, for Rose.", [
      ["Мама Мэгги и Роуз.", true],
      ["Сама Мэгги.", false],
      ["Конор.", false],
    ]),
    choice("enbf7-t2", "Из рассказа Мэгги: что она сделает завтра?", [
      ["Положит в хлеб горсть изюма — для Роуз.", true],
      ["Закроет пекарню.", false],
      ["Уедет в Лондон.", false],
    ], { skill: "listening" }),
    choice("enbf7-t3", "Как сказать «Обещаю звонить тебе каждое воскресенье»?", [
      ["I promise I'll call you every Sunday.", true],
      ["I promise I call you every Sundays.", false],
      ["I promise I'm calling you every Sunday ago.", false],
    ], { skill: "grammar" }),
    read("enbf7-t4", "Прочитай сообщение миссис Хоуп. Что она будет делать?", "Tom, dear! Maggie is coming to the festival! I'll bake soda bread — with raisins, of course. Thank you, both of you. Gran x", [
      ["Испечёт содовый хлеб с изюмом.", true],
      ["Поедет в Белфаст.", false],
      ["Позвонит Конору.", false],
    ]),
    script("enbf7-t5", "Попрощайся с Мэгги.", [
      { speaker: "Мэгги", text: "Thank you for bringing us together!" },
      { speaker: "Ты", answer: "You're welcome! Will you come to the festival?", options: ["You're welcome! Will you come to the festival?", "You're on mute!", "Cut a cross on top."] },
      { speaker: "Мэгги", text: "Yes, I will! Keep in touch!" },
      { speaker: "Ты", answer: "We will. I'll call you from Galway!", options: ["We will. I'll call you from Galway!", "We won't give up the yeast.", "Hold on a hollow."] },
    ], { skill: "review" }),
    match("enbf7-t6", "Повторяем Белфаст: соедини пары.", [
      ["a black cab", "чёрное такси"],
      ["a bakery", "пекарня"],
      ["You're frozen.", "Картинка зависла."],
      ["buttermilk", "пахта"],
    ], { skill: "review" }),
    speak("enbf7-t7", "Your friend is moving to another city. What do you promise?", "I'll miss you! I promise I'll call you every week. And I'll visit you in the summer.", "Я буду скучать! Обещаю звонить тебе каждую неделю. И летом приеду в гости.", {
      help: "Пообещай другу вслух несколько вещей: I'll…, I promise…",
    }),
  ],
  reward: {
    itemId: "recipe-soda-bread",
    itemName: "Рецепт «Soda bread»",
    itemNameRu: "Soda bread recipe card",
    ru: "Our tenth recipe — in two versions!",
    en: "Наш десятый рецепт — в двух вариантах!",
    a11y: "Карточка с рецептом содового хлеба вклеена на десятую страницу голубой тетради; она разделена пополам: «Rose — with raisins» и «Maggie — plain».",
    image: p("recipe-soda-bread"),
    steps: ["Мурзик вклеивает рецепт на десятую страницу книги дороги.", "Слева — «Rose — with raisins», справа — «Maggie — plain».", "Посередине Мэгги нарисовала два маленьких сердечка.", "Десять рецептов есть. Впереди — Голуэй."],
  },
};

const story: CityStory = {
  home: {
    name: "Фургон у порта",
    nameRu: "The van by the harbour",
    image: p("home"),
    a11y: "Голубой фургон «Hope on Wheels» стоит у старого порта Белфаста; над водой — два огромных жёлтых крана.",
  },
  keepsakeId: "recipe-soda-bread",
  welcomeRu: "Hello, Belfast!",
  welcomeEn: "Привет, Белфаст!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Голубой фургон в Белфасте: порт с огромными жёлтыми кранами, ратуша с зелёным куполом и цветные дома.",
  departureImage: p("departure"),
  departureA11y: "Мэгги в фартуке и Конор у чёрного такси машут голубому фургону у пекарни; в окне пекарни — две круглые буханки.",
  finale: [
    {
      image: p("finale-1"),
      a11y: "У фургона уютно: держатель для телефона, жёлтый блокнот, модель чёрного такси, старая открытка «Your sister, Rose», подставка для планшета и доска с двумя буханками.",
      lines: [
        { en: "Фургон помог двум сёстрам снова найти друг друга." },
        { en: "В книге дороги десятый рецепт: содовый хлеб — в двух вариантах." },
      ],
    },
    {
      image: p("finale-2"),
      a11y: "На экране планшета миссис Хоуп в Лондоне, в пекарне Мэгги в Белфасте; обе держат по буханке и смеются.",
      lines: [
        { ru: "Belfast complete!", en: "Белфаст пройден!" },
        { en: "7 / 7 уроков" },
        { ru: "I'll call you every Sunday!", en: "Буду звонить тебе каждое воскресенье!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Мэгги в фартуке и Конор у чёрного такси машут голубому фургону у пекарни; в окне пекарни — две круглые буханки.",
      lines: [
        { ru: "Goodbye, Maggie! Goodbye, Conor!", en: "До свидания, Мэгги! До свидания, Конор!" },
        { ru: "Next stop: Galway!", en: "Следующая остановка: Голуэй!" },
      ],
    },
    {
      image: p("finale-4"),
      a11y: "Голубой фургон едет на юго-запад через зелёные ирландские поля с каменными оградами.",
      lines: [{ ru: "Belfast → Galway", en: "Белфаст → Голуэй" }],
    },
    {
      image: pic("en/galway/arrival"),
      a11y: "Голубой фургон в Голуэе: разноцветные домики, уличные музыканты и залив с лодками.",
      lines: [{ ru: "Hello, Galway!", en: "Привет, Голуэй!" }],
    },
  ],
};

export const enBelfast = {
  id: "en-belfast",
  name: "Белфаст",
  nameEn: "Belfast",
  lessons: [belfast1, belfast2, belfast3, belfast4, belfast5, belfast6, belfast7],
  story,
};
