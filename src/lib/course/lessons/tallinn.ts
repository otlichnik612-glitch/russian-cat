import { pic } from "../art";
import { choice, fill, letter, line, listen, match, read, script, speak, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Tallinn · «Телефон и сообщения» · A2 lessons 1–7.
 * Lena comes from Riga with Murzik and Tom; her grandmother Vera (about 85) lives in a little wooden house
 * near the old town wall, and Murzik and Tom stay in her spare room. Phone calls, messages, a lost phone.
 * In lesson 6 Vera remembers: during the white nights thirty years ago a ginger cat drew patterns for
 * her knitting. Then she took the ferry to Helsinki.
 * Grammar: the imperative and aspect — позвони (once) / звони (always, go ahead), не звони (negative →
 * imperfective), не забудь (warning); перезвонить, написать, ответить кому.
 */

const p = (name: string) => pic(`tallinn/${name}`);

export const tallinn1: Lesson = {
  id: "a2-tallinn-1",
  level: "A2",
  cityId: "tallinn",
  number: 1,
  title: "On the Phone",
  minutes: 8,
  goals: ["Answer and make a phone call", "Say you can't hear well", "Ask someone to call back: перезвоните"],
  vocabNote: "Перезвонить — to call back. Позвони мне! — Call me! Вас плохо слышно — I can't hear you well (literally “you are badly heard”).",
  vocab: [
    v("ta1-1", "Слушаю!", "Hello? (answering the phone; literally “I'm listening”)", "Vera picks up an old phone receiver.", "Listen to Слушаю", p("1-1")),
    v("ta1-2", "Кто говорит?", "Who's calling? Who's speaking?", "An old lady holds a big old phone receiver.", "Listen to Кто говорит", p("1-2")),
    v("ta1-3", "Вас плохо слышно.", "I can't hear you well.", "Wind blows; Lena covers her other ear.", "Listen to Вас плохо слышно", p("1-3")),
    v("ta1-4", "Перезвоните, пожалуйста.", "Please call back.", "A phone screen: a call ending with a red button.", "Listen to Перезвоните, пожалуйста", p("1-4")),
    v("ta1-5", "Она не берёт трубку.", "She isn't answering (the phone).", "A phone ringing on a table, no one near it.", "Listen to Она не берёт трубку", p("1-5")),
    v("ta1-6", "номер телефона", "phone number", "A number written on a paper napkin.", "Listen to номер телефона", p("1-6")),
    v("ta1-7", "Я тебе позвоню.", "I'll call you.", "Murzik makes a phone sign with his paw.", "Listen to Я тебе позвоню", p("1-7")),
    v("ta1-8", "Связь пропала.", "The line went dead. (lost signal)", "A phone screen showing no bars of signal.", "Listen to Связь пропала", p("1-8")),
  ],
  letters: [
    letter("Алло", "a-LLO: stress on the end; the double л is not long. Many people say алё (a-LYO).", "Алло, кто говорит?", "Hello, who's calling?"),
    letter("слышно", "SLYSH-na: stress on ы; the final unstressed о sounds like а.", "Вас плохо слышно.", "I can't hear you well."),
  ],
  dialogue: {
    title: "Calling Grandma",
    note: "The bus has just arrived in Tallinn. Lena calls her grandmother Vera.",
    lines: [
      line("lena", "Бабушка не берёт трубку… Позвоню ещё раз.", "Grandma isn't answering… I'll call again."),
      line("vera", "Слушаю! Кто говорит?", "Hello? Who's calling?"),
      line("lena", "Бабушка, это Лена! Мы приехали!", "Grandma, it's Lena! We've arrived!"),
      line("vera", "Леночка? Тебя плохо слышно!", "Lenochka? I can't hear you well!"),
      line("lena", "Я на автовокзале, тут шумно. Ой, связь пропала…", "I'm at the bus station, it's noisy here. Oh, the line went dead…"),
      line("murzik", "Лена, скинь бабушке номер Тома. Пусть перезвонит ему.", "Lena, send Grandma Tom's number. She can call him back."),
    ],
    gist: choice("ta1-d1", "Why can't Vera hear Lena well?", [
      ["Lena is at a noisy bus station.", true],
      ["Vera's phone is broken.", false],
      ["Lena is whispering.", false],
    ]),
  },
  grammar: [
    {
      title: "Phone phrases with кому",
      paragraphs: [
        "Звонить / позвонить кому (dative): позвоню маме, позвони мне. Перезвонить — to call back: Перезвоните мне, пожалуйста.",
        "Тебя / вас плохо слышно — I can't hear you well (accusative). Брать трубку — to pick up the phone.",
      ],
      examples: [
        { ru: "Я позвоню тебе вечером.", en: "I'll call you in the evening." },
        { ru: "Перезвоните, пожалуйста, через пять минут.", en: "Please call back in five minutes." },
      ],
    },
  ],
  tasks: [
    listen("ta1-t1", "Listen. Where is Lena?", "Я на автовокзале, тут шумно.", [
      ["At the bus station.", true],
      ["At home.", false],
      ["In a café.", false],
    ]),
    choice("ta1-t2", "“Call me in the evening!” Which is right?", [
      ["Позвони мне вечером!", true],
      ["Позвони меня вечером!", false],
      ["Позвони я вечером!", false],
    ], { skill: "grammar" }),
    fill("ta1-t3", "Choose the right form: “I'll call Grandma.”", "Я позвоню", ".", "бабушке", ["бабушке", "бабушку", "бабушка"], { skill: "grammar" }),
    read("ta1-t4", "Read the message on Tom's phone. When will Vera call back?", "Это Вера, бабушка Лены.\nУ Лены плохая связь.\nПерезвоню через 10 минут!", [
      ["In ten minutes.", true],
      ["Tomorrow.", false],
      ["Never.", false],
    ]),
    match("ta1-t5", "Match the Russian with the English.", [
      ["Слушаю!", "Hello? (answering)"],
      ["Кто говорит?", "Who's calling?"],
      ["Связь пропала.", "The line went dead."],
      ["номер телефона", "phone number"],
    ], { skill: "words" }),
    script("ta1-t6", "Answer the phone.", [
      { speaker: "Caller", text: "Алло! Это Том?" },
      { speaker: "You", answer: "Нет, это не Том. А кто говорит?", options: ["Нет, это не Том. А кто говорит?", "Нет, кто берёт трубку?", "Связь Том."] },
      { speaker: "Caller", text: "Это Вера. Вас плохо слышно!" },
      { speaker: "You", answer: "Перезвоните, пожалуйста!", options: ["Перезвоните, пожалуйста!", "Перезвоните меня!", "Номер телефона!"] },
    ], { skill: "speaking" }),
    speak("ta1-t7", "Алло! Вас плохо слышно!", "Извините, я в автобусе. Я вам перезвоню через пять минут.", "Sorry, I'm on the bus. I'll call you back in five minutes.", {
      help: "Answer out loud and promise to call back.",
    }),
  ],
  reward: {
    itemId: "phonestand",
    itemName: "Wooden phone stand",
    itemNameRu: "Подставка для телефона",
    ru: "Подставка — чтобы телефон не терялся!",
    en: "A stand — so the phone doesn't get lost!",
    a11y: "A little wooden phone stand shaped like a red-roofed tower stands on a bedside table in a small room with a wooden ceiling.",
    image: p("reward-1"),
    steps: ["Grandma Vera lives in a little wooden house by the old town wall.", "Murzik and Tom stay in her spare room.", "There's a wooden phone stand by the bed, shaped like a tower.", "“Это чтобы телефон всегда был на месте,” Vera says."],
    bridge: "In the morning Lena goes to see old friends. Before she leaves, she says: “Пишите мне, если что!”",
  },
};

export const tallinn2: Lesson = {
  id: "a2-tallinn-2",
  level: "A2",
  cityId: "tallinn",
  number: 2,
  title: "Write to Me!",
  minutes: 8,
  goals: ["Talk about messages", "Use the imperative for one request: напиши, ответь", "Read a short chat"],
  vocabNote: "Сообщение — message. Голосовое (сообщение) — voice message. Напиши мне! — Write to me (once)!",
  vocab: [
    v("ta2-1", "сообщение", "message", "A phone with a new message notification.", "Listen to сообщение", p("2-1")),
    v("ta2-2", "Скинь мне фото!", "Send me a photo! (colloquial)", "Lena waves and points at her phone.", "Listen to Скинь мне фото", p("2-2")),
    v("ta2-3", "Ответь, пожалуйста!", "Answer, please! Reply!", "Murzik stares at his phone, waiting.", "Listen to Ответь, пожалуйста", p("2-3")),
    v("ta2-4", "голосовое", "voice message", "A waveform on a phone screen.", "Listen to голосовое", p("2-4")),
    v("ta2-5", "Пришли адрес!", "Send the address!", "A map pin appears in a chat.", "Listen to Пришли адрес", p("2-5")),
    v("ta2-6", "смайлик", "emoji, smiley", "A phone screen full of little smiling cats.", "Listen to смайлик", p("2-6")),
    v("ta2-7", "Я не видел(а) сообщение.", "I didn't see the message.", "Tom slaps his forehead, looking at the phone.", "Listen to Я не видел сообщение", p("2-7")),
    v("ta2-8", "Сообщи, когда приедешь.", "Let me know when you arrive.", "Vera at the window, phone in hand.", "Listen to Сообщи, когда приедешь", p("2-8")),
  ],
  letters: [
    letter("голосовое", "ga-la-sa-VO-ye: stress on the last о of -вое; the unstressed о's before it sound like а.", "Пришли голосовое!", "Send a voice message!"),
    letter("пришли", "Stress on the end: pri-SHLEE. Пришли! (send!) sounds exactly like пришли (they came) — context tells you which.", "Пришли фото!", "Send a photo!"),
  ],
  dialogue: {
    title: "A chat with Lena",
    note: "In messages people write short: ок, спс (спасибо), пж (пожалуйста). In the app, the chat is shown as dialogue.",
    lines: [
      line("lena", "Мурзик, вы где? Скинь мне фото!", "Murzik, where are you? Send me a photo!"),
      line("murzik", "Я в старом городе. Смотри — уже скинул!", "I'm in the old town. Look — I've sent it!"),
      line("lena", "Красиво! Это Ратушная площадь. Ответь: ты обедал?", "Beautiful! That's Town Hall Square. Reply: have you had lunch?"),
      line("murzik", "Нет ещё. Пришли адрес хорошего кафе, пж!", "Not yet. Send the address of a good café!"),
      line("lena", "Лучше я пришлю голосовое — так быстрее.", "I'd better send a voice message — it's quicker."),
      line("tom", "Мурзик, ты опять не видел моё сообщение! Я жду тебя у башни!", "Murzik, you didn't see my message again! I'm waiting for you by the tower!"),
    ],
    gist: choice("ta2-d1", "What does Murzik ask Lena to send?", [
      ["The address of a good café.", true],
      ["A photo of Town Hall Square.", false],
      ["Her grandmother's number.", false],
    ]),
  },
  grammar: [
    {
      title: "The imperative: one-time requests",
      paragraphs: [
        "For one concrete request, use the perfective: напиши (write), ответь (answer), пришли (send), позвони (call), сообщи (let me know).",
        "Polite or to several people: add -те: напишите, ответьте, пришлите, позвоните.",
      ],
      examples: [
        { ru: "Пришлите, пожалуйста, адрес.", en: "Please send the address." },
        { ru: "Напиши, когда будешь дома.", en: "Text me when you're home." },
      ],
    },
  ],
  tasks: [
    listen("ta2-t1", "Listen. Why does Lena send a voice message?", "Лучше я пришлю голосовое — так быстрее.", [
      ["It's quicker.", true],
      ["It's cheaper.", false],
      ["Her keyboard is broken.", false],
    ]),
    choice("ta2-t2", "Politely: “Please send the address.” Which is right?", [
      ["Пришлите, пожалуйста, адрес.", true],
      ["Присылайте адрес вчера.", false],
      ["Пришли, пожалуйста, адресом.", false],
    ], { skill: "grammar" }),
    fill("ta2-t3", "Choose the right form: “Text me when you're home.”", "", "мне, когда будешь дома.", "Напиши", ["Напиши", "Писать", "Написал"], { skill: "grammar" }),
    read("ta2-t4", "Read Lena's message. Where should they meet?", "Встречаемся в 13:00 у кафе «Майасмокк», улица Пикк, 16.\nСообщите, если опоздаете!", [
      ["At the café on Pikk Street at one.", true],
      ["At the bus station at three.", false],
      ["At Vera's house.", false],
    ]),
    match("ta2-t5", "Match the Russian with the English.", [
      ["сообщение", "message"],
      ["голосовое", "voice message"],
      ["смайлик", "emoji"],
      ["Пришли адрес!", "Send the address!"],
    ], { skill: "words" }),
    tf("ta2-t6", "In «Пришли адрес!», пришли means “Send!”.", true, "True or false?", { skill: "words" }),
    speak("ta2-t7", "Что ты напишешь другу, если вы встречаетесь в кафе?", "Привет! Напиши, когда выйдешь из дома. И пришли адрес кафе, пожалуйста!", "Hi! Text me when you leave home. And send the café address, please!", {
      help: "Say out loud the message you'd send a friend.",
    }),
  ],
  reward: {
    itemId: "noteboard",
    itemName: "Message board",
    itemNameRu: "Доска для записок",
    ru: "Доска для записок — для тех, кто не читает сообщения!",
    en: "A message board — for those who don't read their messages!",
    a11y: "A small cork board with colourful pins hangs on the wall; a note on it says «Мурзик, ответь Тому!».",
    image: p("reward-2"),
    steps: ["Murzik misses Tom's messages all the time.", "Vera hangs a cork board in their room.", "Tom pins a note: «Мурзик, ответь Тому!»", "Murzik draws a smiley next to it."],
    bridge: "Vera has her own rules about phones. “Звони когда хочешь — но не звони после десяти!”",
  },
};

export const tallinn3: Lesson = {
  id: "a2-tallinn-3",
  level: "A2",
  cityId: "tallinn",
  number: 3,
  title: "Call Any Time — But Not After Ten!",
  minutes: 8,
  goals: ["Choose the aspect in commands", "Say “don't”: не звони, не опаздывай", "Warn: Не забудь! Не потеряй!"],
  vocabNote: "Не + imperfective = don't do it (in general): Не звони после десяти. Не + perfective = careful, don't do it by accident: Не забудь! Не потеряй!",
  vocab: [
    v("ta3-1", "Звони когда хочешь!", "Call whenever you like!", "Vera smiles, phone in hand.", "Listen to Звони когда хочешь", p("3-1")),
    v("ta3-2", "Не звони после десяти.", "Don't call after ten.", "A clock at 22:00; Vera in a nightcap, asleep.", "Listen to Не звони после десяти", p("3-2")),
    v("ta3-3", "Не опаздывай!", "Don't be late!", "Vera taps her watch.", "Listen to Не опаздывай", p("3-3")),
    v("ta3-4", "Не забудь ключ!", "Don't forget the key!", "A big old key on a ribbon.", "Listen to Не забудь ключ", p("3-4")),
    v("ta3-5", "Не потеряй!", "Don't lose it!", "Murzik clutches the key to his chest.", "Listen to Не потеряй", p("3-5")),
    v("ta3-6", "Заходите в любое время!", "Drop in any time!", "Vera opens the door wide.", "Listen to Заходите в любое время", p("3-6")),
    v("ta3-7", "Говори громче!", "Speak louder!", "Vera holds the phone away, frowning.", "Listen to Говори громче", p("3-7")),
    v("ta3-8", "тише / громче", "more quietly / louder", "A volume button: − and +.", "Listen to тише, громче", p("3-8")),
  ],
  letters: [
    letter("опаздывай", "a-PAZ-dy-vay: stress on ПАЗ.", "Не опаздывай!", "Don't be late!"),
    letter("громче", "GROM-che: the ч is soft.", "Говори громче!", "Speak louder!"),
  ],
  dialogue: {
    title: "Vera's rules",
    note: "Vera's house is very old; the door closes with a big key.",
    lines: [
      line("vera", "Вот ключ от дома. Не забудь его! И не потеряй!", "Here's the house key. Don't forget it! And don't lose it!"),
      line("murzik", "Не потеряю! А можно вам звонить?", "I won't lose it! And may I call you?"),
      line("vera", "Конечно, звони когда хочешь. Но не звони после десяти — я сплю.", "Of course, call whenever you like. But don't call after ten — I'm asleep."),
      line("tom", "А ужин во сколько?", "And what time is dinner?"),
      line("vera", "В семь. Не опаздывайте! И заходите в любое время — дверь открыта.", "At seven. Don't be late! And come in any time — the door's open."),
      line("murzik", "Тогда зачем ключ?", "Then why the key?"),
    ],
    gist: choice("ta3-d1", "Why shouldn't they call Vera after ten?", [
      ["She goes to sleep.", true],
      ["Her phone is off.", false],
      ["She's at work.", false],
    ]),
  },
  grammar: [
    {
      title: "Aspect in the imperative",
      paragraphs: [
        "Perfective — one concrete action: Позвони мне завтра. Imperfective — a general rule, an invitation, or “go ahead”: Звони когда хочешь. Заходи!",
        "With не: usually imperfective (Не звони, не опаздывай). But a warning about an accident takes perfective: Не забудь! Не потеряй! Не упади!",
      ],
      examples: [
        { ru: "Не кури здесь, пожалуйста.", en: "Please don't smoke here." },
        { ru: "Не урони телефон!", en: "Don't drop the phone!" },
      ],
    },
  ],
  tasks: [
    listen("ta3-t1", "Listen. What time is dinner?", "В семь. Не опаздывайте!", [
      ["At seven.", true],
      ["At ten.", false],
      ["At eight.", false],
    ]),
    choice("ta3-t2", "A general rule: “Don't call after ten.” Which is right?", [
      ["Не звони после десяти.", true],
      ["Не позвони после десяти.", false],
      ["Не звонить после десять.", false],
    ], { skill: "grammar" }),
    choice("ta3-t3", "A warning: “Don't forget the key!” Which is right?", [
      ["Не забудь ключ!", true],
      ["Не забывай ключом!", false],
      ["Не забудь ключа!", false],
    ], { skill: "grammar" }),
    read("ta3-t4", "Read Vera's note on the fridge. What mustn't they do?", "ПРАВИЛА:\nЗаходите в любое время!\nНе звоните после 22:00.\nНе кормите соседского кота — он на диете!", [
      ["Feed the neighbour's cat.", true],
      ["Come in at any time.", false],
      ["Call before ten.", false],
    ]),
    match("ta3-t5", "Match the Russian with the English.", [
      ["Не опаздывай!", "Don't be late!"],
      ["Не потеряй!", "Don't lose it!"],
      ["Заходите в любое время!", "Drop in any time!"],
      ["Говори громче!", "Speak louder!"],
    ], { skill: "words" }),
    fill("ta3-t6", "A warning — careful!: “Don't drop the phone!”", "Не", "телефон!", "урони", ["урони", "уронил", "уронить"], { skill: "grammar" }),
    speak("ta3-t7", "Твой друг уезжает. Что ты ему скажешь?", "Не опаздывай на поезд! И не забудь паспорт. Позвони, когда приедешь!", "Don't miss the train! And don't forget your passport. Call when you get there!", {
      help: "Give your friend two warnings and one request out loud.",
    }),
  ],
  reward: {
    itemId: "oldkey",
    itemName: "Big old key",
    itemNameRu: "Большой старый ключ",
    ru: "Ключ от старого дома!",
    en: "The key to the old house!",
    a11y: "A big black iron key on a red ribbon hangs on a nail by the door of the little wooden room.",
    image: p("reward-3"),
    steps: ["Vera's key is as big as Murzik's paw.", "He ties a red ribbon on it — so he won't lose it.", "The door is always open anyway.", "But the key hangs by the door, very proud."],
    bridge: "Tom wants to take everyone to a medieval restaurant in the old town. He has to call and book — in Russian.",
  },
};

export const tallinn4: Lesson = {
  id: "a2-tallinn-4",
  level: "A2",
  cityId: "tallinn",
  number: 4,
  title: "Leave a Message",
  minutes: 8,
  goals: ["Book by phone", "Understand an answering machine", "Leave a message"],
  vocabNote: "Оставьте сообщение после сигнала — Leave a message after the tone. Забронировать столик — to book a table.",
  vocab: [
    v("ta4-1", "забронировать столик", "to book a table", "A table with candles and a «Reserved» sign.", "Listen to забронировать столик", p("4-1")),
    v("ta4-2", "на четверых", "for four people", "Four chairs around a wooden table.", "Listen to на четверых", p("4-2")),
    v("ta4-3", "автоответчик", "answering machine", "A phone playing a recorded message.", "Listen to автоответчик", p("4-3")),
    v("ta4-4", "после сигнала", "after the tone (beep)", "A little beep sound wave.", "Listen to после сигнала", p("4-4")),
    v("ta4-5", "Оставьте сообщение.", "Leave a message.", "Tom records a message, speaking slowly.", "Listen to Оставьте сообщение", p("4-5")),
    v("ta4-6", "Мы работаем с двенадцати до полуночи.", "We're open from twelve until midnight.", "A sign on a heavy wooden door: 12:00–00:00.", "Listen to Мы работаем с двенадцати до полуночи", p("4-6")),
    v("ta4-7", "Как пишется ваше имя?", "How do you spell your name?", "Tom presses the phone to his ear.", "Listen to Как пишется ваше имя", p("4-7")),
    v("ta4-8", "по буквам", "letter by letter (spell it)", "Letters Т-О-М floating in the air.", "Listen to по буквам", p("4-8")),
  ],
  letters: [
    letter("забронировать", "za-bra-NEE-ra-vat': stress on НИ.", "забронировать столик", "to book a table"),
    letter("на четверых", "na-chi-tvi-RYKH: stress on ы; х as in Scottish loch.", "Столик на четверых.", "A table for four."),
  ],
  dialogue: {
    title: "Booking a table",
    note: "The restaurant staff wear medieval costumes, but the phone is modern.",
    lines: [
      line("tom", "Алло… Ой, автоответчик.", "Hello… Oh, an answering machine."),
      line("waiter", "Здравствуйте! Мы работаем с двенадцати до полуночи. Оставьте сообщение после сигнала.", "Hello! We're open from twelve until midnight. Leave a message after the tone."),
      line("tom", "Здравствуйте, это Том. Я хочу забронировать столик на четверых на сегодня, на семь вечера. Мой номер…", "Hello, this is Tom. I'd like to book a table for four for today, at seven in the evening. My number is…"),
      line("waiter", "Алло, Том? Это ресторан. Как пишется ваше имя?", "Hello, Tom? This is the restaurant. How do you spell your name?"),
      line("tom", "Том. По буквам: Т-О-М.", "Tom. Spelling it: T-O-M."),
      line("waiter", "Отлично, столик на четверых, в семь. Ждём вас!", "Great, a table for four at seven. We look forward to seeing you!"),
    ],
    gist: choice("ta4-d1", "What does Tom book?", [
      ["A table for four at seven.", true],
      ["A table for two at twelve.", false],
      ["A room for the night.", false],
    ]),
  },
  grammar: [
    {
      title: "Booking and time",
      paragraphs: [
        "На + accusative for how many people and when: столик на четверых, на двоих; на сегодня, на семь вечера.",
        "С … до … + genitive: с двенадцати до полуночи, с девяти до шести.",
      ],
      examples: [
        { ru: "Я хочу забронировать столик на двоих на субботу.", en: "I'd like to book a table for two for Saturday." },
        { ru: "Музей работает с десяти до шести.", en: "The museum is open from ten to six." },
      ],
    },
  ],
  tasks: [
    listen("ta4-t1", "Listen. When is the restaurant open?", "Мы работаем с двенадцати до полуночи.", [
      ["From twelve until midnight.", true],
      ["From ten until six.", false],
      ["Twenty-four hours.", false],
    ]),
    choice("ta4-t2", "“A table for two for Saturday.” Which is right?", [
      ["Столик на двоих на субботу.", true],
      ["Столик для два в субботу.", false],
      ["Столик на двое на суббота.", false],
    ], { skill: "grammar" }),
    fill("ta4-t3", "Choose the right word: “Leave a message after the tone.”", "Оставьте сообщение после", ".", "сигнала", ["сигнала", "сигнал", "сигналом"], { skill: "grammar" }),
    read("ta4-t4", "Read the confirmation text. How many people is the table for?", "Ресторан «Старый Таллин»\nВаш столик: сегодня, 19:00, 4 человека.\nИмя: Том.\nЖдём вас!", [
      ["Four.", true],
      ["Two.", false],
      ["Seven.", false],
    ]),
    match("ta4-t5", "Match the Russian with the English.", [
      ["автоответчик", "answering machine"],
      ["забронировать столик", "to book a table"],
      ["по буквам", "letter by letter"],
      ["Как пишется ваше имя?", "How do you spell your name?"],
    ], { skill: "words" }),
    script("ta4-t6", "Book a table by phone.", [
      { speaker: "Restaurant", text: "Ресторан, добрый вечер!" },
      { speaker: "You", answer: "Добрый вечер! Я хочу забронировать столик на двоих.", options: ["Добрый вечер! Я хочу забронировать столик на двоих.", "Добрый вечер! Оставьте сообщение.", "Добрый вечер! Автоответчик."] },
      { speaker: "Restaurant", text: "На какое время?" },
      { speaker: "You", answer: "На восемь вечера, пожалуйста.", options: ["На восемь вечера, пожалуйста.", "С восьми до полуночи.", "По буквам, пожалуйста."] },
    ], { skill: "speaking" }),
    speak("ta4-t7", "Оставьте сообщение после сигнала.", "Здравствуйте! Меня зовут Мурзик. Я хочу забронировать столик на троих на завтра. Перезвоните мне, пожалуйста.", "Hello! My name is Murzik. I'd like to book a table for three for tomorrow. Please call me back.", {
      help: "Leave a message on an answering machine out loud.",
    }),
  ],
  reward: {
    itemId: "rotaryphone",
    itemName: "Old dial telephone",
    itemNameRu: "Старый телефон с диском",
    ru: "Настоящий телефон с диском!",
    en: "A real dial telephone!",
    a11y: "An old green telephone with a round dial and a curly cord stands on a lace cloth on the chest of drawers.",
    image: p("reward-4"),
    steps: ["Vera has an old dial telephone in the hall.", "“Он старше Лены!” she laughs.", "She puts it in Murzik's room.", "It doesn't work. But Murzik loves the sound of the dial."],
    bridge: "After dinner, in the narrow streets of the old town, Tom puts his hand in his pocket. His phone is gone.",
  },
};

export const tallinn5: Lesson = {
  id: "a2-tallinn-5",
  level: "A2",
  cityId: "tallinn",
  number: 5,
  title: "Where's My Phone?",
  minutes: 8,
  goals: ["Talk about a lost phone", "Say the battery is dead, it's on silent", "Give quick commands: позвони на него, посмотри"],
  vocabNote: "Позвонить на телефон — to ring a phone (to find it). Сел аккумулятор / телефон сел — the battery died.",
  vocab: [
    v("ta5-1", "Где мой телефон?", "Where's my phone?", "Tom pats all his pockets, panicking.", "Listen to Где мой телефон", p("5-1")),
    v("ta5-2", "Позвони на него!", "Ring it!", "Murzik dials Tom's number.", "Listen to Позвони на него", p("5-2")),
    v("ta5-3", "без звука", "on silent", "A phone screen with a crossed-out bell.", "Listen to без звука", p("5-3")),
    v("ta5-4", "Сел аккумулятор.", "The battery died.", "A phone screen showing an empty red battery.", "Listen to Сел аккумулятор", p("5-4")),
    v("ta5-5", "зарядка", "charger", "A charger with a long white cable.", "Listen to зарядка", p("5-5")),
    v("ta5-6", "Посмотри под столом!", "Look under the table!", "Lena crouches and looks under a wooden table.", "Listen to Посмотри под столом", p("5-6")),
    v("ta5-7", "Нашёлся!", "Found it! (it turned up)", "Murzik holds up the phone triumphantly.", "Listen to Нашёлся", p("5-7")),
    v("ta5-8", "Слава богу!", "Thank goodness!", "Tom hugs his phone.", "Listen to Слава богу", p("5-8")),
  ],
  letters: [
    letter("зарядка", "za-RYAT-ka: д before к sounds like т.", "Где зарядка?", "Where's the charger?"),
    letter("Слава богу", "SLA-va BO-gu; in this old phrase г is often a voiced h (like Ukrainian г): BO-ɣu.", "Слава богу!", "Thank goodness!"),
  ],
  dialogue: {
    title: "The lost phone",
    note: "Ресторан закрывается — the restaurant is closing.",
    lines: [
      line("tom", "Где мой телефон?! Его нет!", "Where's my phone?! It's gone!"),
      line("lena", "Не паникуй. Мурзик, позвони на него!", "Don't panic. Murzik, ring it!"),
      line("murzik", "Звоню… Тишина. Наверное, он без звука.", "Ringing… Silence. It must be on silent."),
      line("tom", "Или сел аккумулятор. Там было десять процентов…", "Or the battery died. It was on ten per cent…"),
      line("lena", "Вернёмся в ресторан. Посмотри под столом!", "Let's go back to the restaurant. Look under the table!"),
      line("murzik", "Нашёлся! Под скамейкой!", "Found it! Under the bench!"),
      line("tom", "Слава богу! Спасибо! Теперь — зарядка.", "Thank goodness! Thanks! Now — the charger."),
    ],
    gist: choice("ta5-d1", "Where was Tom's phone?", [
      ["Under the bench in the restaurant.", true],
      ["In Vera's house.", false],
      ["In his pocket all the time.", false],
    ]),
  },
  grammar: [
    {
      title: "Quick commands in a hurry",
      paragraphs: [
        "In a concrete situation — perfective: Позвони на него! Посмотри под столом! Подожди! Дай фонарик!",
        "Не + imperfective to calm someone down: Не паникуй! Не волнуйся! Не спеши!",
      ],
      examples: [
        { ru: "Не волнуйся, мы его найдём.", en: "Don't worry, we'll find it." },
        { ru: "Дай, пожалуйста, зарядку.", en: "Give me the charger, please." },
      ],
    },
  ],
  tasks: [
    listen("ta5-t1", "Listen. Why is there no ringing?", "Звоню… Тишина. Наверное, он без звука.", [
      ["The phone is probably on silent.", true],
      ["Murzik dialled the wrong number.", false],
      ["The phone is in the sea.", false],
    ]),
    choice("ta5-t2", "Calm someone down: “Don't worry!” Which is right?", [
      ["Не волнуйся!", true],
      ["Не взволнуйся!", false],
      ["Не волноваться ты!", false],
    ], { skill: "grammar" }),
    fill("ta5-t3", "Choose the right form: “Look under the table!”", "Посмотри под", "!", "столом", ["столом", "стола", "столе"], { skill: "grammar" }),
    read("ta5-t4", "Read the restaurant's message. Where is the lost-and-found?", "Вы что-то забыли у нас?\nВсе вещи — у администратора, на первом этаже.\nМы работаем до полуночи.", [
      ["With the manager on the ground floor.", true],
      ["At the police station.", false],
      ["At the bus station.", false],
    ]),
    match("ta5-t5", "Match the Russian with the English.", [
      ["зарядка", "charger"],
      ["без звука", "on silent"],
      ["Сел аккумулятор.", "The battery died."],
      ["Нашёлся!", "Found it!"],
    ], { skill: "words" }),
    tf("ta5-t6", "Tom's phone had ten per cent battery.", true, "True or false?", { skill: "listening" }),
    speak("ta5-t7", "Я не могу найти телефон!", "Не волнуйся! Я позвоню на него. Посмотри в сумке и под столом.", "Don't worry! I'll ring it. Look in your bag and under the table.", {
      help: "Help your friend find their phone out loud.",
    }),
  ],
  reward: {
    itemId: "powerbank",
    itemName: "Power bank",
    itemNameRu: "Пауэрбанк",
    ru: "Пауэрбанк — для Тома!",
    en: "A power bank — for Tom!",
    a11y: "A small orange power bank with a cat sticker and a coiled cable lies on the bedside table next to the wooden phone stand.",
    image: p("reward-5"),
    steps: ["The next day Lena brings a little orange power bank.", "She puts a cat sticker on it.", "“Чтобы телефон Тома больше никогда не садился.”", "Tom charges his phone. Murzik charges his patience."],
    bridge: "On Sunday evening it's still light at eleven — the white nights. Vera brings out her knitting and an old photo.",
  },
};

export const tallinn6: Lesson = {
  id: "a2-tallinn-6",
  level: "A2",
  cityId: "tallinn",
  number: 6,
  title: "Grandma Vera Remembers",
  minutes: 8,
  goals: ["Understand a memory", "Talk about knitting and patterns", "Notice aspect in a story: вязала / связала"],
  vocabNote: "Белые ночи — white nights: in June it hardly gets dark here. Вязать / связать — to knit.",
  vocab: [
    v("ta6-1", "белые ночи", "white nights", "The old town at midnight, the sky still light pink.", "Listen to белые ночи", p("6-1")),
    v("ta6-2", "вязать", "to knit", "Vera's hands with knitting needles and red wool.", "Listen to вязать", p("6-2")),
    v("ta6-3", "варежки", "mittens", "A pair of red-and-white patterned mittens.", "Listen to варежки", p("6-3")),
    v("ta6-4", "узор", "pattern", "A drawing of a snowflake-and-star knitting pattern.", "Listen to узор", p("6-4")),
    v("ta6-5", "Она придумывала узоры.", "She made up patterns.", "A ginger cat seen from behind drawing on squared paper.", "Listen to Она придумывала узоры", p("6-5")),
    v("ta6-6", "А я вязала.", "And I knitted.", "Young Vera knitting by a window at night.", "Listen to А я вязала", p("6-6")),
    v("ta6-7", "паром", "ferry", "A big white ferry leaving the harbour.", "Listen to паром", p("6-7")),
    v("ta6-8", "на другой берег", "to the other shore", "The sea, and far away another city's lights.", "Listen to на другой берег", p("6-8")),
  ],
  letters: [
    letter("варежки", "VA-rish-ki: stress on the first syllable; ж before к sounds like ш.", "варежки", "mittens"),
  ],
  dialogue: {
    title: "The old photo",
    note: "Придумывать — to make up, invent. Сесть на паром — to get on the ferry.",
    lines: [
      line("vera", "Лена говорит, ты ищешь бабушку. Посмотри на это фото.", "Lena says you're looking for your grandmother. Look at this photo."),
      line("murzik", "Это вы? А рядом… рыжая кошка! Ася!", "Is that you? And next to you… a ginger cat! Asya!"),
      line("vera", "Да. Тридцать лет назад, в белые ночи. Она придумывала узоры, а я вязала.", "Yes. Thirty years ago, during the white nights. She made up the patterns, and I knitted."),
      line("vera", "Мы не спали до утра. Я связала ей варежки с её узором.", "We stayed up till morning. I knitted her mittens with her pattern."),
      line("lena", "Бабушка, ты мне никогда не рассказывала!", "Grandma, you never told me!"),
      line("vera", "А потом она села на паром — на другой берег, в Хельсинки.", "And then she got on the ferry — to the other shore, to Helsinki."),
    ],
    gist: choice("ta6-d1", "What did Asya and Vera do together?", [
      ["Asya made up patterns, Vera knitted.", true],
      ["They sold amber.", false],
      ["They worked on the ferry.", false],
    ]),
  },
  grammar: [
    {
      title: "Aspect in a story",
      paragraphs: [
        "Imperfective for what went on, often or for a long time: Она придумывала узоры, а я вязала. Мы не спали до утра.",
        "Perfective for a finished result: Я связала ей варежки. Она села на паром.",
      ],
      examples: [
        { ru: "Каждый вечер бабушка вязала.", en: "Every evening Grandma knitted." },
        { ru: "За неделю она связала свитер.", en: "In a week she knitted a jumper." },
      ],
    },
  ],
  tasks: [
    listen("ta6-t1", "Listen. When did Vera meet Asya?", "Тридцать лет назад, в белые ночи.", [
      ["Thirty years ago, during the white nights.", true],
      ["Last winter.", false],
      ["Ten years ago.", false],
    ]),
    choice("ta6-t2", "Detective! Where did Asya go next?", [
      ["By ferry to Helsinki.", true],
      ["Back to Riga by bus.", false],
      ["She stayed in Tallinn.", false],
    ], { skill: "listening" }),
    choice("ta6-t3", "A finished result: “She knitted (and finished) mittens.” Which is right?", [
      ["Она связала варежки.", true],
      ["Она вязала варежками.", false],
      ["Она связывала варежек.", false],
    ], { skill: "grammar" }),
    read("ta6-t4", "On the back of the photo there's a note. What does Asya promise?", "Вера, спасибо за варежки!\nВ Хельсинки они мне понадобятся.\nПришлю тебе новый узор. А.", [
      ["To send a new pattern.", true],
      ["To come back next summer.", false],
      ["To knit mittens for Lena.", false],
    ]),
    match("ta6-t5", "Match the Russian with the English.", [
      ["белые ночи", "white nights"],
      ["варежки", "mittens"],
      ["узор", "pattern"],
      ["паром", "ferry"],
    ], { skill: "words" }),
    tf("ta6-t6", "Lena knew that her grandmother had met Asya.", false, "True or false?", { skill: "listening" }),
    speak("ta6-t7", "Что ты умеешь делать руками?", "Я умею немного вязать. В детстве бабушка связала мне шарф, и я тоже хотел(а) научиться.", "I can knit a little. When I was a child, my grandmother knitted me a scarf, and I wanted to learn too.", {
      help: "Say out loud what you can make with your hands. A woman says хотела.",
    }),
  ],
  reward: {
    itemId: "woolball",
    itemName: "Ball of red wool",
    itemNameRu: "Клубок красной шерсти",
    ru: "Клубок — как у бабушки Веры!",
    en: "A ball of wool — like Grandma Vera's!",
    a11y: "A ball of red wool with two knitting needles stuck in it sits in a little wicker basket on the windowsill; outside, the white night.",
    image: p("reward-6"),
    steps: ["Vera gives Murzik a ball of red wool and two needles.", "“Попробуй. У меня тоже сначала не получалось.”", "Murzik knits three rows. Then the cat in him wins and he plays with the ball.", "Vera laughs until midnight — and it's still light."],
    bridge: "Tomorrow the ferry to Helsinki leaves at half past ten. Vera is knitting all night. Lena smiles: “Это сюрприз.”",
  },
};

export const tallinn7: Lesson = {
  id: "a2-tallinn-7",
  level: "A2",
  cityId: "tallinn",
  number: 7,
  title: "Tallinn Exam",
  minutes: 9,
  goals: ["Understand a longer story", "Say goodbye and promise to keep in touch", "Review everything from Tallinn"],
  vocabNote: "Lesson 7 is the city exam: a longer listening story and a review of everything from Tallinn.",
  vocab: [
    v("ta7-1", "с тем же узором", "with the same pattern", "Two pairs of mittens with the same star pattern: one old, one new.", "Listen to с тем же узором", p("7-1")),
    v("ta7-2", "Носи на здоровье!", "Wear it in good health!", "Vera puts the mittens on Murzik's paws.", "Listen to Носи на здоровье", p("7-2")),
    v("ta7-3", "Не пропадай!", "Don't disappear! (keep in touch)", "Lena and Murzik both hold up their phones.", "Listen to Не пропадай", p("7-3")),
    v("ta7-4", "Звони почаще!", "Call more often!", "Vera wags her finger, smiling.", "Listen to Звони почаще", p("7-4")),
    v("ta7-5", "порт", "port, harbour", "A big white ferry at the port.", "Listen to порт", p("7-5")),
    v("ta7-6", "Я провожу вас.", "I'll see you off.", "Lena walks with them to the ferry.", "Listen to Я провожу вас", p("7-6")),
    v("ta7-7", "Не забудьте отписаться!", "Don't forget to text when you get there!", "Lena types on her phone.", "Listen to Не забудьте отписаться", p("7-7")),
    v("ta7-8", "два часа на пароме", "two hours on the ferry", "The ferry on the sea, a clock showing two hours.", "Listen to два часа на пароме", p("7-8")),
  ],
  letters: [
    letter("почаще", "pa-CHA-shche: щ is a long soft ш.", "Звони почаще!", "Call more often!"),
  ],
  dialogue: {
    title: "At the port",
    note: "Отписаться (colloquial) — to send a short message (“I'm here”).",
    lines: [
      line("vera", "Это тебе. Варежки — с тем же узором, что у Аси. Носи на здоровье!", "These are for you. Mittens — with the same pattern as Asya's. Wear them in good health!"),
      line("murzik", "Спасибо, бабушка Вера! Я буду их беречь.", "Thank you, Grandma Vera! I'll take good care of them."),
      line("vera", "И звони почаще! Только не после десяти.", "And call more often! Just not after ten."),
      line("lena", "Я провожу вас до парома. Мурзик, не пропадай!", "I'll see you to the ferry. Murzik, don't disappear!"),
      line("tom", "Лена… а ты приедешь к нам в Хельсинки?", "Lena… will you come to see us in Helsinki?"),
      line("lena", "Посмотрим. Не забудьте отписаться, когда доберётесь!", "We'll see. Don't forget to text when you arrive!"),
    ],
    gist: choice("ta7-d1", "What's special about Vera's mittens?", [
      ["They have Asya's pattern.", true],
      ["They're blue and white.", false],
      ["They were made in Helsinki.", false],
    ]),
  },
  grammar: [
    {
      title: "Tallinn review",
      paragraphs: [
        "Phone: Алло! Кто говорит? Вас плохо слышно. Перезвоните. Связь пропала. Телефон сел. Оставьте сообщение после сигнала.",
        "Imperative: one request — позвони, напиши, пришли; a rule or invitation — звони когда хочешь, заходи; не + imperfective — не звони, не опаздывай; warnings — не забудь, не потеряй.",
      ],
      examples: [
        { ru: "Не звони мне утром — напиши сообщение.", en: "Don't call me in the morning — send a message." },
        { ru: "Не потеряй ключ и позвони, когда будешь дома!", en: "Don't lose the key, and call when you're home!" },
      ],
    },
  ],
  tasks: [
    listen("ta7-t1", "Audio story: Lena talks about her grandmother. Listen. Why does Vera live in Tallinn?", "Моя бабушка родилась в Таллине. Мама переехала в Ригу, а бабушка осталась здесь, в своём старом доме. Она не любит телефоны, но каждое воскресенье звонит мне. Мы говорим целый час. И каждую зиму она вяжет мне новые варежки.", [
      ["She was born there and stayed in her old house.", true],
      ["She moved there from Riga for work.", false],
      ["She lives there only in summer.", false],
    ]),
    choice("ta7-t2", "In Lena's story, when does Vera call her?", [
      ["Every Sunday.", true],
      ["Every evening after ten.", false],
      ["Only on her birthday.", false],
    ], { skill: "listening" }),
    choice("ta7-t3", "“Don't call me in the morning — send a message.” Which is right?", [
      ["Не звони мне утром — напиши сообщение.", true],
      ["Не позвони мне утром — пиши сообщение вчера.", false],
      ["Не звонить мне утро — написал сообщение.", false],
    ], { skill: "grammar" }),
    read("ta7-t4", "Read the ferry ticket. When does the ferry arrive in Helsinki?", "ТАЛЛИН — ХЕЛЬСИНКИ\nОтправление: 10:30\nПрибытие: 12:30\nПассажиры: Том, Мурзик (кот)", [
      ["At half past twelve.", true],
      ["At half past ten.", false],
      ["At two.", false],
    ]),
    script("ta7-t5", "Say goodbye to Vera.", [
      { speaker: "Vera", text: "Звони почаще!" },
      { speaker: "You", answer: "Обязательно! Но не после десяти.", options: ["Обязательно! Но не после десяти.", "Обязательно! Не позвони.", "Телефон сел."] },
      { speaker: "Vera", text: "И не забудь варежки!" },
      { speaker: "You", answer: "Не забуду! Спасибо за всё!", options: ["Не забуду! Спасибо за всё!", "Не забываю вчера!", "Оставьте сообщение."] },
    ], { skill: "review" }),
    match("ta7-t6", "Tallinn review: match the Russian with the English.", [
      ["Перезвоните.", "Call back."],
      ["голосовое", "voice message"],
      ["забронировать столик", "to book a table"],
      ["зарядка", "charger"],
    ], { skill: "review" }),
    speak("ta7-t7", "Друг уезжает. Что ты ему скажешь на прощание?", "Счастливого пути! Не забудь паспорт. Напиши, когда приедешь, и звони почаще!", "Have a good trip! Don't forget your passport. Text me when you arrive, and call more often!", {
      help: "Say goodbye to a friend out loud with a few requests and warnings.",
    }),
  ],
  reward: {
    itemId: "mittens",
    itemName: "Knitted mittens",
    itemNameRu: "Вязаные варежки",
    ru: "Варежки с узором Аси!",
    en: "Mittens with Asya's pattern!",
    a11y: "A pair of red-and-white knitted mittens with a star-and-snowflake pattern lies on top of Murzik's suitcase.",
    image: p("reward-7"),
    steps: ["Vera knitted all night.", "The mittens have the same pattern Asya drew thirty years ago.", "They're a bit big — Vera knitted them “на вырост”.", "Murzik puts them in his suitcase. The amber pendant is round his neck."],
  },
};

export const tallinnLessons: Lesson[] = [tallinn1, tallinn2, tallinn3, tallinn4, tallinn5, tallinn6, tallinn7];
