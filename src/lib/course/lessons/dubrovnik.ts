import { pic } from "../art";
import { choice, fill, letter, line, listen, match, read, script, speak, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Dubrovnik · «Гостиница и жалобы» · A2 lessons 1–7.
 * The night ferry brings Murzik and Tom to Dubrovnik. A small family hotel inside the old walls: Mara (about 60)
 * runs it and learned Russian at school long ago; her son Ivo (about 30) fixes everything. The booking is lost,
 * the room is noisy, the air conditioning breaks, polite requests at reception, a walk along the walls.
 * In the guestbook Murzik finds Asya's drawing — she stayed here a week ago, asked about a ginger kitten and left
 * a shell for him. She said she was going «к большой реке». Next: Bratislava, on the Danube.
 * Grammar: хотел бы / хотела бы, мог бы / могли бы — polite requests and wishes.
 */

const p = (name: string) => pic(`dubrovnik/${name}`);

export const dubrovnik1: Lesson = {
  id: "a2-dubrovnik-1",
  level: "A2",
  cityId: "dubrovnik",
  number: 1,
  title: "Checking In",
  minutes: 8,
  goals: ["Check in at a hotel", "Sort out a booking problem", "Use хотел бы (would like)"],
  vocabNote: "Я хотел бы / хотела бы — I would like. It's softer and more polite than я хочу.",
  vocab: [
    v("dv1-1", "Я бронировал(а) номер.", "I booked a room.", "Tom shows his phone at a small wooden reception desk.", "Listen to Я бронировал номер", p("1-1")),
    v("dv1-2", "на имя Том Хоуп", "under the name Tom Hope", "A guest list with a finger running down it.", "Listen to на имя Том Хоуп", p("1-2")),
    v("dv1-3", "Я не вижу вашу бронь.", "I can't see your booking.", "Mara frowns at an old computer screen.", "Listen to Я не вижу вашу бронь", p("1-3")),
    v("dv1-4", "Вот подтверждение.", "Here's the confirmation.", "A booking email on Tom's phone screen.", "Listen to Вот подтверждение", p("1-4")),
    v("dv1-5", "Я хотел(а) бы номер с видом на море.", "I'd like a room with a sea view.", "A window with blue sea and a small island.", "Listen to Я хотел бы номер с видом на море", p("1-5")),
    v("dv1-6", "Номер ещё не готов.", "The room isn't ready yet.", "A cleaner with fresh sheets in the corridor.", "Listen to Номер ещё не готов", p("1-6")),
    v("dv1-7", "Можно оставить у вас вещи?", "Can we leave our things with you?", "Suitcases lined up behind the desk.", "Listen to Можно оставить у вас вещи", p("1-7")),
    v("dv1-8", "Заселение с двух часов.", "Check-in is from two o'clock.", "A small sign: CHECK-IN 14:00.", "Listen to Заселение с двух часов", p("1-8")),
  ],
  letters: [
    letter("бронь", "BRON': one syllable, soft н at the end.", "Где ваша бронь?", "Where's your booking?"),
    letter("подтверждение", "pat-tvir-ZHDYE-ni-ye: stress on ЖДЕ; д before т sounds like т.", "Вот подтверждение.", "Here's the confirmation."),
  ],
  dialogue: {
    title: "At reception, nine in the morning",
    note: "Mara learned Russian at school many years ago and is happy to practise. Her son Ivo helps in the hotel.",
    lines: [
      line("tom", "Доброе утро! Я бронировал номер на имя Том Хоуп.", "Good morning! I booked a room under the name Tom Hope."),
      line("mara", "Том Хоуп… Хм. Я не вижу вашу бронь.", "Tom Hope… Hmm. I can't see your booking."),
      line("tom", "Вот подтверждение, на телефоне.", "Here's the confirmation, on my phone."),
      line("mara", "А, вижу! Компьютер старый, как наши стены. Простите. Какой номер вы хотели бы?", "Ah, I see it! The computer is as old as our walls. Sorry. What kind of room would you like?"),
      line("murzik", "Я хотел бы номер с видом на море!", "I'd like a room with a sea view!"),
      line("mara", "Будет вам вид на море. Но номер ещё не готов — заселение с двух часов.", "You'll have a sea view. But the room isn't ready yet — check-in is from two o'clock."),
      line("tom", "Можно оставить у вас вещи? Мы погуляем.", "Can we leave our things with you? We'll go for a walk."),
    ],
    gist: choice("dv1-d1", "Why couldn't Mara find the booking at first?", [
      ["Her computer is very old.", true],
      ["Tom booked another hotel.", false],
      ["The hotel is full.", false],
    ]),
  },
  grammar: [
    {
      title: "Хотел бы, хотела бы",
      paragraphs: [
        "Past tense + бы = would: я хотел бы (man), я хотела бы (woman), мы хотели бы. It sounds politer than хочу.",
        "Вы хотели бы…? — Would you like…? Какой номер вы хотели бы? — What kind of room would you like?",
      ],
      examples: [
        { ru: "Мы хотели бы номер на двоих.", en: "We'd like a room for two." },
        { ru: "Что вы хотели бы на завтрак?", en: "What would you like for breakfast?" },
      ],
    },
  ],
  tasks: [
    listen("dv1-t1", "Listen. When is check-in?", "Будет вам вид на море. Но номер ещё не готов — заселение с двух часов.", [
      ["From two o'clock.", true],
      ["From twelve o'clock.", false],
      ["Right now.", false],
    ]),
    choice("dv1-t2", "“We'd like a room for two.” Which is right?", [
      ["Мы хотели бы номер на двоих.", true],
      ["Мы хотели бы номер на два.", false],
      ["Мы хочем бы номер на двоих.", false],
    ], { skill: "grammar" }),
    fill("dv1-t3", "Choose the right word: “What would you like for breakfast?”", "Что вы хотели", "на завтрак?", "бы", ["бы", "ли", "же"], { skill: "grammar" }),
    read("dv1-t4", "Read the booking confirmation. How many nights did Tom book?", "ПОДТВЕРЖДЕНИЕ БРОНИ\nГостиница «У стены»\nГость: Том Хоуп + 1 кот\nЗаезд: 14:00, пятница\nНочей: 4\nНомер: двухместный, вид на море", [
      ["Four.", true],
      ["Two.", false],
      ["Fourteen.", false],
    ]),
    match("dv1-t5", "Match the Russian with the English.", [
      ["Я не вижу вашу бронь.", "I can't see your booking."],
      ["Вот подтверждение.", "Here's the confirmation."],
      ["Номер ещё не готов.", "The room isn't ready yet."],
      ["Заселение с двух часов.", "Check-in is from two o'clock."],
    ], { skill: "words" }),
    tf("dv1-t6", "Murzik would like a room with a sea view.", true, "True or false?", { skill: "listening" }),
    speak("dv1-t7", "Здравствуйте! Чем могу помочь?", "Здравствуйте! Я бронировал(а) номер на имя Алекс Смит. Я хотел(а) бы номер с видом на море.", "Hello! I booked a room under the name Alex Smith. I'd like a room with a sea view.", {
      help: "Check in at a hotel out loud.",
    }),
  ],
  reward: {
    itemId: "roomkey",
    itemName: "Old room key",
    itemNameRu: "Ключ от номера",
    ru: "Ключ — как от старой крепости!",
    en: "A key — like for an old fortress!",
    a11y: "A big old iron key with a wooden tag marked «7» lies on the bedside table.",
    image: p("reward-1"),
    steps: ["At two o'clock Mara gives them the key to room 7.", "It's big and iron, with a wooden tag.", "“Ему сто лет, как и этому дому,” Mara laughs.", "The room has a window onto the sea."],
    bridge: "At midnight Murzik is still awake: music and voices under the window. And at six — bells. Very loud bells.",
  },
};

export const dubrovnik2: Lesson = {
  id: "a2-dubrovnik-2",
  level: "A2",
  cityId: "dubrovnik",
  number: 2,
  title: "It's Too Noisy!",
  minutes: 8,
  goals: ["Complain politely about noise", "Ask to change rooms", "Use Вы не могли бы…? (Could you…?)"],
  vocabNote: "Вы не могли бы…? — Could you…? This is the politest way to ask for something in Russian.",
  vocab: [
    v("dv2-1", "В номере очень шумно.", "It's very noisy in the room.", "Murzik with a pillow over his head.", "Listen to В номере очень шумно", p("2-1")),
    v("dv2-2", "Я не мог(ла) уснуть.", "I couldn't get to sleep.", "Murzik with red, sleepy eyes at reception.", "Listen to Я не мог уснуть", p("2-2")),
    v("dv2-3", "Окно выходит на улицу.", "The window faces the street.", "A window above a lively street café.", "Listen to Окно выходит на улицу", p("2-3")),
    v("dv2-4", "Вы не могли бы дать нам другой номер?", "Could you give us another room?", "Tom leans politely over the desk.", "Listen to Вы не могли бы дать нам другой номер", p("2-4")),
    v("dv2-5", "тихий номер во дворе", "a quiet room on the courtyard side", "A small courtyard with a lemon tree and silence.", "Listen to тихий номер во дворе", p("2-5")),
    v("dv2-6", "Простите за беспокойство.", "Sorry for the trouble.", "Tom bows his head slightly.", "Listen to Простите за беспокойство", p("2-6")),
    v("dv2-7", "беруши", "earplugs", "Two small orange earplugs on a saucer.", "Listen to беруши", p("2-7")),
    v("dv2-8", "Я мог(ла) бы переехать прямо сейчас.", "I could move right now.", "Murzik already holding his suitcase.", "Listen to Я мог бы переехать прямо сейчас", p("2-8")),
  ],
  letters: [
    letter("шумно", "SHUM-na: stress on ШУМ; the final о sounds like а.", "Здесь шумно.", "It's noisy here."),
    letter("беруши", "bi-RU-shy: stress on РУ; ш is hard, so и sounds like ы.", "Дайте беруши.", "Give me some earplugs."),
  ],
  dialogue: {
    title: "The next morning",
    note: "In summer the old town is lively until late. The church bells ring early in the morning.",
    lines: [
      line("murzik", "Доброе утро… Я не мог уснуть. В номере очень шумно.", "Good morning… I couldn't get to sleep. It's very noisy in the room."),
      line("mara", "Ой. Окно выходит на улицу — там кафе и музыка до часу ночи.", "Oh. The window faces the street — there's a café and music until one in the morning."),
      line("tom", "А в шесть утра — колокола. Вы не могли бы дать нам другой номер?", "And at six in the morning — bells. Could you give us another room?"),
      line("mara", "Конечно. Есть тихий номер во дворе. Но там нет вида на море.", "Of course. There's a quiet room facing the courtyard. But it has no sea view."),
      line("murzik", "Тишина лучше вида. Я мог бы переехать прямо сейчас!", "Silence is better than a view. I could move right now!"),
      line("tom", "Простите за беспокойство.", "Sorry for the trouble."),
      line("mara", "Ничего. И вот вам беруши — на всякий случай.", "No problem. And here are some earplugs — just in case."),
    ],
    gist: choice("dv2-d1", "What's the problem with the new room?", [
      ["It's quiet, but it has no sea view.", true],
      ["It's even noisier.", false],
      ["It's not ready.", false],
    ]),
  },
  grammar: [
    {
      title: "Мог бы, могла бы, могли бы",
      paragraphs: [
        "мочь + бы = could: я мог бы (man), я могла бы (woman), вы могли бы (you, polite or plural).",
        "Вы не могли бы + infinitive? — Could you…? Вы не могли бы помочь? Вы не могли бы говорить медленнее?",
      ],
      examples: [
        { ru: "Вы не могли бы вызвать такси?", en: "Could you call a taxi?" },
        { ru: "Мы могли бы встретиться завтра.", en: "We could meet tomorrow." },
      ],
    },
  ],
  tasks: [
    listen("dv2-t1", "Listen. Until what time is there music in the café?", "Окно выходит на улицу — там кафе и музыка до часу ночи.", [
      ["Until one in the morning.", true],
      ["Until eleven in the evening.", false],
      ["Until six in the morning.", false],
    ]),
    choice("dv2-t2", "“Could you call a taxi?” Which is right?", [
      ["Вы не могли бы вызвать такси?", true],
      ["Вы не можете бы вызвать такси?", false],
      ["Вы не могли бы вызвали такси?", false],
    ], { skill: "grammar" }),
    fill("dv2-t3", "Choose the right word: “We could meet tomorrow.”", "Мы", "бы встретиться завтра.", "могли", ["могли", "можем", "мог"], { skill: "grammar" }),
    read("dv2-t4", "Read the note from Ivo. What has he done?", "Уважаемые гости!\nВаш новый номер — 3, во дворе.\nЯ уже перенёс туда ваши вещи.\nХорошего отдыха! Иво", [
      ["He has moved their things to room 3.", true],
      ["He has fixed the bells.", false],
      ["He has closed the café.", false],
    ]),
    match("dv2-t5", "Match the Russian with the English.", [
      ["В номере очень шумно.", "It's very noisy in the room."],
      ["Окно выходит на улицу.", "The window faces the street."],
      ["беруши", "earplugs"],
      ["Простите за беспокойство.", "Sorry for the trouble."],
    ], { skill: "words" }),
    tf("dv2-t6", "The bells ring at six in the morning.", true, "True or false?", { skill: "listening" }),
    script("dv2-t7", "Complain politely at reception.", [
      { speaker: "Mara", text: "Доброе утро! Как спалось?" },
      { speaker: "You", answer: "Плохо. В номере очень шумно.", options: ["Плохо. В номере очень шумно.", "Плохо. Номер выходит на завтрак.", "Плохо. Вот подтверждение."] },
      { speaker: "Mara", text: "Ой, простите!" },
      { speaker: "You", answer: "Вы не могли бы дать нам другой номер?", options: ["Вы не могли бы дать нам другой номер?", "Вы не можете бы дать номер?", "Вы не могли бы давать нам беруши вчера?"] },
    ], { skill: "speaking" }),
  ],
  reward: {
    itemId: "earplugs",
    itemName: "Tin of earplugs",
    itemNameRu: "Беруши в коробочке",
    ru: "Беруши — для Тома, который храпит!",
    en: "Earplugs — for when Tom snores!",
    a11y: "A tiny round tin with a lemon on the lid stands on the bedside table; inside, two orange earplugs.",
    image: p("reward-2"),
    steps: ["The new room faces a quiet courtyard with a lemon tree.", "Murzik sleeps all afternoon.", "Mara's earplugs come in a little tin with a lemon on it.", "“Пригодятся,” says Murzik. “Том иногда храпит.”"],
    bridge: "The courtyard room is quiet. But in the evening it's hot — and the air conditioning makes a strange noise and stops.",
  },
};

export const dubrovnik3: Lesson = {
  id: "a2-dubrovnik-3",
  level: "A2",
  cityId: "dubrovnik",
  number: 3,
  title: "Something's Broken",
  minutes: 8,
  goals: ["Report that something doesn't work", "Ask for a repair", "Use мог бы and хотел бы in requests"],
  vocabNote: "Не работает — doesn't work. Сломался / сломалась / сломалось — has broken. Течёт — is leaking (dripping).",
  vocab: [
    v("dv3-1", "Кондиционер не работает.", "The air conditioning doesn't work.", "A silent air conditioner with a little drip.", "Listen to Кондиционер не работает", p("3-1")),
    v("dv3-2", "Кран течёт.", "The tap is dripping.", "A tap with a drop of water hanging from it.", "Listen to Кран течёт", p("3-2")),
    v("dv3-3", "Свет в ванной не включается.", "The bathroom light won't turn on.", "A dark bathroom; Tom flicks the switch.", "Listen to Свет в ванной не включается", p("3-3")),
    v("dv3-4", "Вы не могли бы прислать мастера?", "Could you send someone to fix it?", "Tom on the room phone.", "Listen to Вы не могли бы прислать мастера", p("3-4")),
    v("dv3-5", "Я сейчас поднимусь.", "I'll come up right away.", "Ivo with a toolbox on the stairs.", "Listen to Я сейчас поднимусь", p("3-5")),
    v("dv3-6", "Сейчас посмотрим.", "Let's have a look.", "Ivo kneels down and opens the toolbox.", "Listen to Сейчас посмотрим", p("3-6")),
    v("dv3-7", "Готово, всё работает.", "Done, everything works.", "Cool air blows; the light is on.", "Listen to Готово, всё работает", p("3-7")),
    v("dv3-8", "Мы были бы очень благодарны.", "We'd be very grateful.", "Tom presses his hands together.", "Listen to Мы были бы очень благодарны", p("3-8")),
  ],
  letters: [
    letter("течёт", "ti-CHOT: ё is always stressed.", "Кран течёт.", "The tap is dripping."),
    letter("благодарны", "bla-ga-DAR-ny: stress on ДАР.", "Мы благодарны.", "We're grateful."),
  ],
  dialogue: {
    title: "The room phone",
    note: "Ivo, Mara's son, can fix almost anything. He also speaks some Russian — from his mother.",
    lines: [
      line("tom", "Алло, ресепшен? Это номер три. Кондиционер не работает, и кран в ванной течёт.", "Hello, reception? This is room three. The air conditioning doesn't work, and the bathroom tap is dripping."),
      line("ivo", "Ой. Что-нибудь ещё?", "Oh. Anything else?"),
      line("murzik", "Свет в ванной не включается!", "The bathroom light won't turn on!"),
      line("tom", "Вы не могли бы прислать мастера? Мы были бы очень благодарны.", "Could you send someone to fix it? We'd be very grateful."),
      line("ivo", "Я и есть мастер. Сейчас поднимусь.", "That's me — I'm the fixer. I'll come up right away."),
      line("ivo", "Так, сейчас посмотрим… Лампочка, фильтр, прокладка… Готово, всё работает!", "Right, let's have a look… A bulb, a filter, a washer… Done, everything works!"),
    ],
    gist: choice("dv3-d1", "Who fixes everything?", [
      ["Ivo, Mara's son.", true],
      ["A plumber from the city.", false],
      ["Tom himself.", false],
    ]),
  },
  grammar: [
    {
      title: "Polite requests with бы",
      paragraphs: [
        "Вы не могли бы + infinitive? — Could you…? Я хотел(а) бы + infinitive / noun — I'd like… Мы были бы благодарны — We'd be grateful.",
        "Not working: кондиционер не работает, свет не включается, кран течёт, телевизор сломался.",
      ],
      examples: [
        { ru: "Я хотел(а) бы поменять полотенца.", en: "I'd like to change the towels." },
        { ru: "Вы не могли бы посмотреть душ? Он не работает.", en: "Could you have a look at the shower? It doesn't work." },
      ],
    },
  ],
  tasks: [
    listen("dv3-t1", "Listen. What is dripping?", "Кондиционер не работает, и кран в ванной течёт.", [
      ["The bathroom tap.", true],
      ["The air conditioning.", false],
      ["The window.", false],
    ]),
    choice("dv3-t2", "“I'd like to change the towels.” Which is right?", [
      ["Я хотел(а) бы поменять полотенца.", true],
      ["Я хочу бы поменять полотенца.", false],
      ["Я хотел(а) бы поменяю полотенца.", false],
    ], { skill: "grammar" }),
    fill("dv3-t3", "Choose the right word: “We'd be very grateful.”", "Мы", "бы очень благодарны.", "были", ["были", "будем", "есть"], { skill: "grammar" }),
    read("dv3-t4", "Read the card by the phone. Which number do you call for repairs?", "ГОСТИНИЦА «У СТЕНЫ»\nРесепшен — 0\nРемонт (Иво) — 9\nЗавтрак — 5\nТакси — через ресепшен", [
      ["9.", true],
      ["0.", false],
      ["5.", false],
    ]),
    match("dv3-t5", "Match the Russian with the English.", [
      ["Кран течёт.", "The tap is dripping."],
      ["Я сейчас поднимусь.", "I'll come up right away."],
      ["Сейчас посмотрим.", "Let's have a look."],
      ["Готово, всё работает.", "Done, everything works."],
    ], { skill: "words" }),
    tf("dv3-t6", "The light in the bedroom doesn't work.", false, "True or false?", { skill: "listening" }),
    speak("dv3-t7", "Ресепшен, слушаю вас.", "Здравствуйте! Это номер пять. Душ не работает. Вы не могли бы прислать мастера?", "Hello! This is room five. The shower doesn't work. Could you send someone to fix it?", {
      help: "Report a problem in your room out loud.",
    }),
  ],
  reward: {
    itemId: "toolbox",
    itemName: "Ivo's little toolbox",
    itemNameRu: "Ящик с инструментами",
    ru: "Теперь я тоже мастер!",
    en: "Now I'm a fixer too!",
    a11y: "A small red metal toolbox with a screwdriver, a little hammer and spare bulbs stands under the desk.",
    image: p("reward-3"),
    steps: ["Ivo leaves a small red toolbox in the room.", "“На всякий случай. Тут всё старое.”", "Murzik checks every tool.", "He tightens one loose screw on the chair. Very proudly."],
    bridge: "Two days left. Tom has a list of questions for reception — and Murzik wants to walk along the city walls.",
  },
};

export const dubrovnik4: Lesson = {
  id: "a2-dubrovnik-4",
  level: "A2",
  cityId: "dubrovnik",
  number: 4,
  title: "At Reception",
  minutes: 8,
  goals: ["Ask for hotel services politely", "Ask about late check-out and luggage", "Use Можно было бы…? and хотел бы"],
  vocabNote: "Поздний выезд — late check-out. Камера хранения — luggage storage. Можно было бы…? — Would it be possible to…?",
  vocab: [
    v("dv4-1", "поздний выезд", "late check-out", "A clock on the wall pointing to twelve.", "Listen to поздний выезд", p("4-1")),
    v("dv4-2", "Можно было бы выехать в два?", "Would it be possible to check out at two?", "Tom asks Mara with a hopeful smile.", "Listen to Можно было бы выехать в два", p("4-2")),
    v("dv4-3", "камера хранения", "luggage storage", "A small room with suitcases on shelves.", "Listen to камера хранения", p("4-3")),
    v("dv4-4", "Я хотел(а) бы заказать такси.", "I'd like to book a taxi.", "A taxi sign on the reception desk.", "Listen to Я хотел бы заказать такси", p("4-4")),
    v("dv4-5", "в аэропорт", "to the airport", "A small plane over the sea.", "Listen to в аэропорт", p("4-5")),
    v("dv4-6", "Завтрак входит в стоимость?", "Is breakfast included?", "A breakfast table with figs, bread and coffee.", "Listen to Завтрак входит в стоимость", p("4-6")),
    v("dv4-7", "Счёт можно оплатить картой.", "You can pay the bill by card.", "A card machine on the desk.", "Listen to Счёт можно оплатить картой", p("4-7")),
    v("dv4-8", "Записал(а).", "I've written it down.", "Mara writes in a notebook and nods.", "Listen to Записал(а)", p("4-8")),
  ],
  letters: [
    letter("хранения", "khra-NYE-ni-ya: stress on НЕ.", "камера хранения", "luggage storage"),
    letter("стоимость", "STO-i-mast': stress on the first syllable.", "в стоимость", "in the price"),
  ],
  dialogue: {
    title: "Tom's list",
    note: "Their flight to Vienna is in the evening; from there it's about an hour by bus to Bratislava.",
    lines: [
      line("tom", "Мара, у меня несколько вопросов. Завтрак входит в стоимость?", "Mara, I have a few questions. Is breakfast included?"),
      line("mara", "Да, с семи до десяти, во дворе.", "Yes, from seven to ten, in the courtyard."),
      line("tom", "В последний день можно было бы выехать в два? У нас вечерний рейс.", "On our last day, would it be possible to check out at two? We have an evening flight."),
      line("mara", "Поздний выезд — без проблем. А потом вещи можно оставить в камере хранения.", "Late check-out — no problem. And after that you can leave your things in the luggage storage."),
      line("murzik", "И я хотел бы заказать такси в аэропорт. На пять часов.", "And I'd like to book a taxi to the airport. For five o'clock."),
      line("mara", "Хорошо, записала. Счёт можно оплатить картой или наличными.", "OK, I've written it down. You can pay the bill by card or in cash."),
    ],
    gist: choice("dv4-d1", "When will they check out on the last day?", [
      ["At two o'clock.", true],
      ["At ten o'clock.", false],
      ["At five o'clock.", false],
    ]),
  },
  grammar: [
    {
      title: "Можно было бы…?",
      paragraphs: [
        "Можно…? — Can I…? Можно было бы…? — Would it be possible…? It's even more polite.",
        "Я хотел(а) бы + infinitive: Я хотел(а) бы заказать такси. Мы хотели бы оставить вещи.",
      ],
      examples: [
        { ru: "Можно было бы поменять номер?", en: "Would it be possible to change rooms?" },
        { ru: "Мы хотели бы оставить вещи до вечера.", en: "We'd like to leave our things until the evening." },
      ],
    },
  ],
  tasks: [
    listen("dv4-t1", "Listen. When is breakfast?", "Да, с семи до десяти, во дворе.", [
      ["From seven to ten.", true],
      ["From eight to eleven.", false],
      ["From six to nine.", false],
    ]),
    choice("dv4-t2", "“Would it be possible to change rooms?” Which is right?", [
      ["Можно было бы поменять номер?", true],
      ["Можно будет бы поменять номер?", false],
      ["Можно было бы поменял номер?", false],
    ], { skill: "grammar" }),
    fill("dv4-t3", "Choose the right word: “I'd like to book a taxi.”", "Я хотел(а) бы", "такси.", "заказать", ["заказать", "заказал", "заказываю"], { skill: "grammar" }),
    read("dv4-t4", "Read the hotel information. How much is late check-out until two?", "ГОСТИНИЦА «У СТЕНЫ»\nЗавтрак: 7:00–10:00 (входит в стоимость)\nВыезд: до 11:00\nПоздний выезд до 14:00 — бесплатно\nКамера хранения — бесплатно", [
      ["It's free.", true],
      ["10 euros.", false],
      ["It isn't possible.", false],
    ]),
    match("dv4-t5", "Match the Russian with the English.", [
      ["поздний выезд", "late check-out"],
      ["камера хранения", "luggage storage"],
      ["Завтрак входит в стоимость?", "Is breakfast included?"],
      ["Записал(а).", "I've written it down."],
    ], { skill: "words" }),
    tf("dv4-t6", "Murzik books a taxi for eight o'clock.", false, "True or false?", { skill: "listening" }),
    speak("dv4-t7", "Чем могу помочь?", "Я хотел(а) бы заказать такси в аэропорт на завтра. И можно было бы оставить вещи в камере хранения?", "I'd like to book a taxi to the airport for tomorrow. And would it be possible to leave our things in the luggage storage?", {
      help: "Make two polite requests at reception out loud.",
    }),
  ],
  reward: {
    itemId: "figjam",
    itemName: "Jar of Mara's fig jam",
    itemNameRu: "Инжирное варенье",
    ru: "Варенье Мары — к завтраку!",
    en: "Mara's jam — for breakfast!",
    a11y: "A small jar of dark fig jam with a checked cloth lid stands on the windowsill.",
    image: p("reward-4"),
    steps: ["At breakfast there's fig jam from Mara's garden.", "Murzik eats half the jar.", "Mara gives him a whole new one.", "“С собой. На дорогу.”"],
    bridge: "“Пойдёмте на стены,” says Ivo. “Лучше утром, пока не жарко.”",
  },
};

export const dubrovnik5: Lesson = {
  id: "a2-dubrovnik-5",
  level: "A2",
  cityId: "dubrovnik",
  number: 5,
  title: "Along the Walls",
  minutes: 8,
  goals: ["Talk about wishes: я бы хотел(а)…", "Say what you would do", "Use бы for wishes and suggestions"],
  vocabNote: "Я бы хотел(а) — I'd like (бы can come before хотел). Я бы ещё погулял(а) — I'd walk a bit longer. Если бы умел(а) плавать — if I could swim (learn it as a phrase).",
  vocab: [
    v("dv5-1", "городские стены", "the city walls", "Thick stone walls around orange roofs, above the sea.", "Listen to городские стены", p("5-1")),
    v("dv5-2", "Я бы хотел(а) жить здесь.", "I'd like to live here.", "Murzik dreamily looks at the roofs.", "Listen to Я бы хотел жить здесь", p("5-2")),
    v("dv5-3", "черепичные крыши", "tiled roofs", "A sea of orange tiled roofs.", "Listen to черепичные крыши", p("5-3")),
    v("dv5-4", "Я бы отдохнул(а) в тени.", "I'd rest in the shade.", "Tom points at a shady tower.", "Listen to Я бы отдохнул в тени", p("5-4")),
    v("dv5-5", "Я бы искупался (искупалась).", "I'd go for a swim.", "Swimmers jump from rocks into the sea below the walls.", "Listen to Я бы искупался", p("5-5")),
    v("dv5-6", "Тебе бы понравилось.", "You'd like it.", "Ivo points to a small island across the water.", "Listen to Тебе бы понравилось", p("5-6")),
    v("dv5-7", "на лодке до острова", "by boat to the island", "A small boat heading to a green island.", "Listen to на лодке до острова", p("5-7")),
    v("dv5-8", "Было бы здорово!", "That would be great!", "Murzik jumps with both paws up.", "Listen to Было бы здорово", p("5-8")),
  ],
  letters: [
    letter("черепичные", "chi-ri-PICH-ny-ye: stress on ПИЧ.", "черепичные крыши", "tiled roofs"),
    letter("здорово", "ZDO-ra-va: stress on the first syllable when it means “great!”.", "Было бы здорово!", "That would be great!"),
  ],
  dialogue: {
    title: "On the walls",
    note: "A walk around Dubrovnik's walls is about two kilometres. In summer it's best in the early morning.",
    lines: [
      line("ivo", "Смотрите: черепичные крыши, море, остров. Это мой город.", "Look: tiled roofs, the sea, the island. This is my city."),
      line("murzik", "Я бы хотел жить здесь! Каждый день — такой вид.", "I'd like to live here! A view like this every day."),
      line("tom", "А я бы отдохнул в тени. Уже жарко.", "And I'd rest in the shade. It's already hot."),
      line("murzik", "Смотрите, люди прыгают в море со скал! Я бы искупался… если бы умел плавать.", "Look, people are jumping into the sea from the rocks! I'd go for a swim… if I could swim."),
      line("ivo", "Тогда на лодке до острова. Тебе бы понравилось — там павлины.", "Then by boat to the island. You'd like it — there are peacocks."),
      line("murzik", "Павлины? Было бы здорово!", "Peacocks? That would be great!"),
    ],
    gist: choice("dv5-d1", "What is there on the island?", [
      ["Peacocks.", true],
      ["A big hotel.", false],
      ["A swimming pool.", false],
    ]),
  },
  grammar: [
    {
      title: "Бы for wishes and imagining",
      paragraphs: [
        "Past tense + бы: я бы хотел(а), я бы отдохнул(а), тебе бы понравилось, было бы здорово. Бы can stand after the verb or before it.",
        "It describes what you'd like or what would happen — not what is happening: Я бы искупался — I'd go for a swim (but I'm not swimming).",
      ],
      examples: [
        { ru: "Я бы выпил(а) холодной воды.", en: "I'd have some cold water." },
        { ru: "В субботу было бы здорово поехать на море.", en: "It would be great to go to the sea on Saturday." },
      ],
    },
  ],
  tasks: [
    listen("dv5-t1", "Listen. Why doesn't Murzik go for a swim?", "Я бы искупался… если бы умел плавать.", [
      ["He can't swim.", true],
      ["The water is cold.", false],
      ["It's not allowed.", false],
    ]),
    choice("dv5-t2", "“I'd have some cold water.” Which is right?", [
      ["Я бы выпил(а) холодной воды.", true],
      ["Я бы пью холодной воды.", false],
      ["Я бы выпью холодной воды.", false],
    ], { skill: "grammar" }),
    fill("dv5-t3", "Choose the right form: “That would be great!”", "", "бы здорово!", "Было", ["Было", "Будет", "Есть"], { skill: "grammar" }),
    read("dv5-t4", "Read the sign at the entrance to the walls. When are the walls open in summer?", "ГОРОДСКИЕ СТЕНЫ\nЛетом: 8:00–19:30\nЗимой: 9:00–15:00\nВозьмите воду и шляпу!\nПрогулка — около 2 км", [
      ["From 8:00 to 19:30.", true],
      ["From 9:00 to 15:00.", false],
      ["All night.", false],
    ]),
    match("dv5-t5", "Match the Russian with the English.", [
      ["городские стены", "the city walls"],
      ["черепичные крыши", "tiled roofs"],
      ["на лодке до острова", "by boat to the island"],
      ["Было бы здорово!", "That would be great!"],
    ], { skill: "words" }),
    tf("dv5-t6", "Tom would like to rest in the shade.", true, "True or false?", { skill: "listening" }),
    speak("dv5-t7", "Что бы ты хотел(а) сделать в отпуске?", "Я бы хотел(а) жить у моря. Я бы купался (купалась) каждое утро, а вечером гулял(а) по старому городу.", "I'd like to live by the sea. I'd swim every morning and walk around the old town in the evening.", {
      help: "Say out loud what you'd like to do on holiday. Use бы.",
    }),
  ],
  reward: {
    itemId: "wallticket",
    itemName: "City walls ticket",
    itemNameRu: "Билет на стены",
    ru: "Два километра по стенам — я прошёл!",
    en: "Two kilometres of walls — I did it!",
    a11y: "A ticket with a drawing of the city walls and the sea is tucked into the mirror frame.",
    image: p("reward-5"),
    steps: ["They walk all the way round the walls.", "In the afternoon — a boat to the island with peacocks.", "A peacock opens its tail right in front of Murzik.", "Murzik keeps the walls ticket — proof he did it."],
    bridge: "On the last evening Mara brings out a big old book. “Это наша гостевая книга. Напишите что-нибудь?”",
  },
};

export const dubrovnik6: Lesson = {
  id: "a2-dubrovnik-6",
  level: "A2",
  cityId: "dubrovnik",
  number: 6,
  title: "The Guestbook",
  minutes: 8,
  goals: ["Read short handwritten notes", "Understand news about someone", "Write a thank-you note"],
  vocabNote: "Гостевая книга — a guestbook. Неделю назад — a week ago. Оставила для тебя — left for you.",
  vocab: [
    v("dv6-1", "гостевая книга", "a guestbook", "A thick old book with a leather cover.", "Listen to гостевая книга", p("6-1")),
    v("dv6-2", "Напишите нам пару слов.", "Write us a few words.", "Mara holds out a pen.", "Listen to Напишите нам пару слов", p("6-2")),
    v("dv6-3", "Это её почерк!", "That's her handwriting!", "Curly handwriting and a little drawing of a boat.", "Listen to Это её почерк", p("6-3")),
    v("dv6-4", "Ася была здесь неделю назад.", "Asya was here a week ago.", "A page dated a week ago, signed «А.».", "Listen to Ася была здесь неделю назад", p("6-4")),
    v("dv6-5", "Она спрашивала про рыжего котёнка.", "She asked about a ginger kitten.", "Mara remembers, a hand on her cheek.", "Listen to Она спрашивала про рыжего котёнка", p("6-5")),
    v("dv6-6", "Она оставила для тебя ракушку.", "She left a shell for you.", "A spiral shell wrapped in a napkin.", "Listen to Она оставила для тебя ракушку", p("6-6")),
    v("dv6-7", "к большой реке", "to a big river", "A drawing in the book: a wide river and a castle on a hill.", "Listen to к большой реке", p("6-7")),
    v("dv6-8", "Спасибо за гостеприимство!", "Thank you for your hospitality!", "Murzik writes carefully in the guestbook.", "Listen to Спасибо за гостеприимство", p("6-8")),
  ],
  letters: [
    letter("почерк", "PO-chirk: stress on ПО.", "Это её почерк!", "That's her handwriting!"),
    letter("гостеприимство", "ga-sti-pri-IM-stva: stress on ИМ.", "Спасибо за гостеприимство!", "Thank you for your hospitality!"),
  ],
  dialogue: {
    title: "The old book",
    note: "Mara has kept a guestbook for thirty years. Guests write and draw in it.",
    lines: [
      line("mara", "Это наша гостевая книга. Напишите нам пару слов.", "This is our guestbook. Write us a few words."),
      line("murzik", "Смотри, Том, рисунок — лодка и кот… Это её почерк!", "Look, Tom, a drawing — a boat and a cat… That's her handwriting!"),
      line("mara", "Рыжая кошка в соломенной шляпе? Да, она была здесь неделю назад. Жила в вашем первом номере, седьмом, с видом на море.", "A ginger cat in a straw hat? Yes, she was here a week ago. She stayed in your first room, number seven, with the sea view."),
      line("tom", "Она что-нибудь говорила?", "Did she say anything?"),
      line("mara", "Она спрашивала про рыжего котёнка. И оставила для тебя ракушку. Сказала, что едет к большой реке.", "She asked about a ginger kitten. And she left a shell for you. She said she was going to a big river."),
      line("murzik", "К большой реке… Под рисунком — река и замок на холме.", "To a big river… Under the drawing — a river and a castle on a hill."),
      line("tom", "Дунай. Братислава! Наш рейс в Вену, а оттуда час до Братиславы.", "The Danube. Bratislava! Our flight is to Vienna, and from there it's an hour to Bratislava."),
    ],
    gist: choice("dv6-d1", "Where did Asya say she was going?", [
      ["To a big river.", true],
      ["Back to Paris.", false],
      ["To the island with peacocks.", false],
    ]),
  },
  grammar: [
    {
      title: "Reporting what someone said",
      paragraphs: [
        "Она сказала, что едет к большой реке. — She said (that) she was going to a big river. Russian keeps the tense the speaker used: едет (present).",
        "Она спрашивала про… / о… — She asked about… Она оставила для тебя… — She left … for you.",
      ],
      examples: [
        { ru: "Мара сказала, что Ася жила в седьмом номере.", en: "Mara said that Asya had stayed in room seven." },
        { ru: "Он сказал, что приедет завтра.", en: "He said he would come tomorrow." },
      ],
    },
  ],
  tasks: [
    listen("dv6-t1", "Listen. When was Asya here?", "Да, она была здесь неделю назад. Жила в вашем первом номере, седьмом, с видом на море.", [
      ["A week ago.", true],
      ["A year ago.", false],
      ["Yesterday.", false],
    ]),
    choice("dv6-t2", "Detective! What did Asya leave for Murzik?", [
      ["A shell.", true],
      ["A key.", false],
      ["A postcard.", false],
    ], { skill: "listening" }),
    fill("dv6-t3", "Choose the right word: “She said that she was going to a big river.”", "Она сказала,", "едет к большой реке.", "что", ["что", "чтобы", "ли"], { skill: "grammar" }),
    read("dv6-t4", "Read Asya's note in the guestbook. Where is she going?", "Спасибо за вид на море и за инжир!\nЗавтра еду к большой реке —\nтуда, где замок на холме.\nЕсли придёт рыжий котёнок — отдайте ему ракушку.\nА.", [
      ["To a big river with a castle on a hill.", true],
      ["To an island with peacocks.", false],
      ["Home to Paris.", false],
    ]),
    match("dv6-t5", "Match the Russian with the English.", [
      ["гостевая книга", "a guestbook"],
      ["Это её почерк!", "That's her handwriting!"],
      ["к большой реке", "to a big river"],
      ["Спасибо за гостеприимство!", "Thank you for your hospitality!"],
    ], { skill: "words" }),
    tf("dv6-t6", "Asya stayed in the quiet room in the courtyard.", false, "True or false?", { skill: "listening" }),
    speak("dv6-t7", "Напишите нам пару слов в гостевую книгу!", "Спасибо за гостеприимство! Здесь было очень красиво. Мы бы хотели вернуться!", "Thank you for your hospitality! It was very beautiful here. We'd like to come back!", {
      help: "Write a thank-you note in the guestbook — say it out loud.",
    }),
  ],
  reward: {
    itemId: "guestbookpage",
    itemName: "Copy of the guestbook page",
    itemNameRu: "Страница из книги",
    ru: "Бабушкин почерк — снова!",
    en: "Grandma's handwriting — again!",
    a11y: "A photo of a guestbook page: curly handwriting, a little boat, a cat seen from behind, and a river with a castle on a hill.",
    image: p("reward-6"),
    steps: ["Tom photographs Asya's page in the guestbook.", "A boat, a cat seen from behind, a river and a castle.", "Underneath, Murzik writes his own page.", "He draws a little ginger kitten — looking at the river."],
    bridge: "Last morning. Late check-out at two, a taxi at five — and a shell wrapped in a napkin.",
  },
};

export const dubrovnik7: Lesson = {
  id: "a2-dubrovnik-7",
  level: "A2",
  cityId: "dubrovnik",
  number: 7,
  title: "Dubrovnik Exam",
  minutes: 9,
  goals: ["Understand a longer story", "Make polite requests and complaints", "Review everything from Dubrovnik"],
  vocabNote: "Lesson 7 is the city exam: a longer listening story and a review of everything from Dubrovnik.",
  vocab: [
    v("dv7-1", "ракушка", "a shell", "A spiral shell, pink inside, in Murzik's paw.", "Listen to ракушка", p("7-1")),
    v("dv7-2", "Приложи её к уху.", "Put it to your ear.", "Murzik holds the shell to his ear, eyes closed.", "Listen to Приложи её к уху", p("7-2")),
    v("dv7-3", "Слышно море.", "You can hear the sea.", "Soft waves drawn around the shell.", "Listen to Слышно море", p("7-3")),
    v("dv7-4", "Вы нам очень помогли.", "You've helped us a lot.", "Tom shakes Mara's hand at the door.", "Listen to Вы нам очень помогли", p("7-4")),
    v("dv7-5", "Мы бы очень хотели вернуться.", "We'd love to come back.", "Murzik looks back at the walls.", "Listen to Мы бы очень хотели вернуться", p("7-5")),
    v("dv7-6", "рейс в Вену", "the flight to Vienna", "A small plane taking off over the sea.", "Listen to рейс в Вену", p("7-6")),
    v("dv7-7", "Она тебя ждёт.", "She's waiting for you.", "Mara puts a hand on Murzik's shoulder.", "Listen to Она тебя ждёт", p("7-7")),
    v("dv7-8", "Передай ей наш инжир.", "Give her our figs.", "A paper bag of fresh figs.", "Listen to Передай ей наш инжир", p("7-8")),
  ],
  letters: [
    letter("ракушка", "ra-KUSH-ka: stress on КУШ.", "ракушка с моря", "a shell from the sea"),
  ],
  dialogue: {
    title: "The taxi is waiting",
    note: "There's a saying: put a shell to your ear and you'll hear the sea.",
    lines: [
      line("mara", "Вот, это ракушка от Аси. Приложи её к уху.", "Here, this is the shell from Asya. Put it to your ear."),
      line("murzik", "Слышно море… И ещё что-то. Как будто она смеётся.", "You can hear the sea… And something else. As if she's laughing."),
      line("tom", "Мара, Иво, спасибо! Вы нам очень помогли.", "Mara, Ivo, thank you! You've helped us a lot."),
      line("murzik", "Мы бы очень хотели вернуться!", "We'd love to come back!"),
      line("mara", "Найди её. Она тебя ждёт, я уверена. И передай ей наш инжир — он ей очень понравился.", "Find her. She's waiting for you, I'm sure. And give her our figs — she really liked them."),
      line("ivo", "Такси ждёт! Ваш рейс в Вену почти через три часа.", "The taxi's waiting! Your flight to Vienna is in almost three hours."),
    ],
    gist: choice("dv7-d1", "What does Mara ask Murzik to give Asya?", [
      ["Figs.", true],
      ["The guestbook.", false],
      ["The room key.", false],
    ]),
  },
  grammar: [
    {
      title: "Dubrovnik review",
      paragraphs: [
        "бы: я хотел(а) бы, мы хотели бы, вы не могли бы…?, можно было бы…?, мы были бы благодарны, было бы здорово, я бы искупался (искупалась).",
        "Hotel: бронь, подтверждение, заселение, поздний выезд, камера хранения, шумно, кондиционер не работает, кран течёт, прислать мастера.",
      ],
      examples: [
        { ru: "Вы не могли бы помочь нам с вещами? Мы были бы очень благодарны.", en: "Could you help us with our things? We'd be very grateful." },
        { ru: "Я бы хотел(а) вернуться сюда летом.", en: "I'd like to come back here in the summer." },
      ],
    },
  ],
  tasks: [
    listen("dv7-t1", "Audio story: Mara talks about her hotel. How many rooms does it have?", "Нашей гостинице сорок лет. Её открыли мои родители. У нас всего семь номеров: три с видом на море и четыре во дворе. Гости часто жалуются на колокола. А я говорю: «Колокола — это голос города». Иво может починить всё — кроме колоколов.", [
      ["Seven.", true],
      ["Forty.", false],
      ["Three.", false],
    ]),
    listen("dv7-t2", "Listen to the end of Mara's story. What can't Ivo fix?", "Гости часто жалуются на колокола. А я говорю: «Колокола — это голос города». Иво может починить всё — кроме колоколов.", [
      ["The bells.", true],
      ["The air conditioning.", false],
      ["The computer.", false],
    ]),
    choice("dv7-t3", "“Could you help us with our things? We'd be very grateful.” Which is right?", [
      ["Вы не могли бы помочь нам с вещами? Мы были бы очень благодарны.", true],
      ["Вы не можете бы помочь нам с вещами? Мы будем бы благодарны.", false],
      ["Вы не могли бы помогли нам с вещами? Мы были очень бы благодарен.", false],
    ], { skill: "grammar" }),
    read("dv7-t4", "Read the flight details. Where does the flight go?", "ДУБРОВНИК — ВЕНА\nРейс 1427\nВылет: 19:40\nПрибытие: 21:05\nПотом: автобус до Братиславы, ~1 час", [
      ["To Vienna, then a bus to Bratislava.", true],
      ["Straight to Bratislava.", false],
      ["To Naples.", false],
    ]),
    script("dv7-t5", "Say goodbye to Mara.", [
      { speaker: "Mara", text: "Вам у нас понравилось?" },
      { speaker: "You", answer: "Очень! Вы нам очень помогли. Спасибо за гостеприимство!", options: ["Очень! Вы нам очень помогли. Спасибо за гостеприимство!", "Очень! Кран течёт.", "Очень! В номере очень шумно."] },
      { speaker: "Mara", text: "Приезжайте ещё!" },
      { speaker: "You", answer: "Мы бы очень хотели вернуться!", options: ["Мы бы очень хотели вернуться!", "Мы бы очень хотим вернуться!", "Мы бы очень хотеть вернуться!"] },
    ], { skill: "review" }),
    match("dv7-t6", "Dubrovnik review: match the Russian with the English.", [
      ["бронь", "a booking"],
      ["беруши", "earplugs"],
      ["поздний выезд", "late check-out"],
      ["ракушка", "a shell"],
    ], { skill: "review" }),
    speak("dv7-t7", "Расскажи, какой была бы твоя идеальная гостиница.", "Я бы хотел(а) тихий номер с видом на море и вкусным завтраком. И чтобы всё работало!", "I'd like a quiet room with a sea view and a tasty breakfast. And for everything to work!", {
      help: "Describe your ideal hotel out loud. Use бы.",
    }),
  ],
  reward: {
    itemId: "asyashell",
    itemName: "Asya's shell",
    itemNameRu: "Ракушка Аси",
    ru: "Ракушка — в ней слышно море!",
    en: "A shell — you can hear the sea in it!",
    a11y: "A spiral shell, pink inside, lies on top of Murzik's suitcase next to a paper bag of figs.",
    image: p("reward-7"),
    steps: ["Mara gives Murzik the shell Asya left for him.", "Put it to your ear — and you can hear the sea.", "And a bag of figs: “Передай ей.”", "Murzik holds the shell all the way to the airport."],
  },
};

export const dubrovnikLessons: Lesson[] = [dubrovnik1, dubrovnik2, dubrovnik3, dubrovnik4, dubrovnik5, dubrovnik6, dubrovnik7];
