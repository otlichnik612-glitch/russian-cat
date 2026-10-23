import { pic } from "../art";
import { choice, fill, line, listen, match, missing, speak, spell, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Lisbon · «Работа и учёба» · lessons 1–7.
 * A travel magazine wants to meet Tom. Murzik and Tom rent a room in a house with blue tiles
 * near the tram line. Katya, a Russian student in Lisbon, becomes their friend.
 * Tom has an interview, gets the job, and starts working as the magazine's travel photographer.
 */

export const lisbon1: Lesson = {
  id: "a1-lisbon-1",
  level: "A1",
  cityId: "lisbon",
  number: 1,
  title: "Where Do You Work?",
  minutes: 5,
  goals: ["Ask where someone works", "Say your job and where you work", "Say you are looking for a job"],
  vocabNote:
    "You know Кем ты работаешь? from Rome (What do you do?). Где ты работаешь? asks where. After в, places end in -е: в журнале, в офисе, в банке.",
  vocab: [
    v("li1-1", "Где ты работаешь?", "Where do you work?", "Murzik asks Tom on a yellow tram climbing a steep Lisbon street.", "Play Где ты работаешь", pic("lisbon/1-1")),
    v("li1-2", "Я работаю в журнале.", "I work for a magazine.", "A woman in an office holds up a glossy travel magazine with a photo of the sea on the cover.", "Play Я работаю в журнале", pic("lisbon/1-2")),
    v("li1-3", "Я фотограф.", "I'm a photographer.", "Tom proudly lifts his camera and takes a photo.", "Play Я фотограф", pic("lisbon/1-3")),
    v("li1-4", "Я ищу работу.", "I'm looking for a job.", "Tom looks through job ads on his laptop at a café table.", "Play Я ищу работу", pic("lisbon/1-4")),
    v("li1-5", "Это интересная работа.", "It's an interesting job.", "Tom photographs a colourful Lisbon street full of tiles and flowers.", "Play Это интересная работа", pic("lisbon/1-5")),
    v("li1-6", "Мне нравится моя работа.", "I like my job.", "A happy baker in a white hat holds a tray of fresh custard tarts.", "Play Мне нравится моя работа", pic("lisbon/1-6")),
    v("li1-7", "У меня встреча.", "I have a meeting.", "Tom points at a circled time in his diary and looks nervous.", "Play У меня встреча", pic("lisbon/1-7")),
  ],
  dialogue: {
    title: "On the yellow tram",
    note: "Пока нигде — nowhere yet. Не волнуйся! you know from Amsterdam.",
    lines: [
      line("murzik", "Том, а где ты работаешь?", "Tom, where do you work?"),
      line("tom", "Пока нигде. Я ищу работу.", "Nowhere yet. I'm looking for a job."),
      line("murzik", "А кем ты хочешь работать?", "And what do you want to work as?"),
      line("tom", "Я фотограф! Это интересная работа.", "I'm a photographer! It's an interesting job."),
      line("tom", "Завтра у меня встреча. Здесь, в журнале.", "Tomorrow I have a meeting. Here, at the magazine."),
      line("murzik", "Ого! Не волнуйся, Том!", "Wow! Don't worry, Tom!"),
    ],
    gist: choice("li1-d1", "Why is Tom in Lisbon?", [
      ["He has a meeting at a magazine.", true],
      ["He works in a bank here.", false],
      ["He is on holiday.", false],
    ]),
  },
  grammar: [
    {
      title: "Where? — в + place with -е",
      paragraphs: [
        "To say where you work, use в and change the ending to -е: журнал → в журнале, офис → в офисе, банк → в банке.",
        "Some words don't change: в кафе, в метро.",
      ],
      examples: [
        { ru: "Я работаю в офисе.", en: "I work in an office." },
        { ru: "Она работает в банке.", en: "She works in a bank." },
      ],
    },
  ],
  tasks: [
    listen("li1-t1", "Listen. Where does the person work?", "Я работаю в банке.", [
      ["In a bank.", true],
      ["In an office.", false],
      ["At a magazine.", false],
    ]),
    match("li1-t2", "Match the Russian with the English.", [
      ["Я ищу работу.", "I'm looking for a job."],
      ["У меня встреча.", "I have a meeting."],
      ["Я фотограф.", "I'm a photographer."],
    ], { skill: "words" }),
    fill("li1-t3", "Complete: “I work in an office.”", "Я работаю в", ".", "офисе", ["офисе", "офис", "офиса"], { skill: "grammar" }),
    spell("li1-t4", "Build the word for “job / work”.", "работа"),
    speak("li1-t5", "Где ты работаешь?", "Я работаю в офисе.", "I work in an office.", {
      help: "Say where you really work — or that you are looking for a job: Я ищу работу.",
    }),
    listen("li1-t6", "Listen and choose the best reply.", "Как ты себя чувствуешь?", [
      ["Мне уже лучше!", true],
      ["Я ищу работу.", false],
      ["У меня встреча.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tram-model",
    itemName: "Little tram",
    itemNameRu: "Трамвайчик",
    ru: "Ура! Маленький жёлтый трамвай!",
    en: "Yay! A little yellow tram!",
    a11y: "A small yellow toy tram stands on the windowsill of Murzik's room. Outside, the real yellow tram goes up the hill.",
    image: pic("lisbon/reward-1"),
    steps: ["Their room is in a house with blue tiles.", "The yellow tram goes right past the window.", "In a little shop Murzik finds a toy tram, just the same.", "He puts it on the windowsill."],
    bridge: "In the evening they meet Katya, a Russian student who lives next door.",
  },
};

export const lisbon2: Lesson = {
  id: "a1-lisbon-2",
  level: "A1",
  cityId: "lisbon",
  number: 2,
  title: "I'm a Student",
  minutes: 5,
  goals: ["Say where you study", "Ask what someone studies", "Say if it is hard or easy"],
  vocabNote:
    "Учиться is to study (at a place): Я учусь в университете. Изучать is to study a subject: Я изучаю историю. A male student is студент, a female student is студентка.",
  vocab: [
    v("li2-1", "Я учусь в университете.", "I study at university.", "A young woman with a backpack walks into an old university building.", "Play Я учусь в университете", pic("lisbon/2-1")),
    v("li2-2", "Что ты изучаешь?", "What do you study?", "Murzik looks at a pile of thick books with a curious face.", "Play Что ты изучаешь", pic("lisbon/2-2")),
    v("li2-3", "Я изучаю историю.", "I study history.", "A history book open at a picture of old ships sailing from Lisbon.", "Play Я изучаю историю", pic("lisbon/2-3")),
    v("li2-4", "студент / студентка", "student (man / woman)", "A young man and a young woman, both with backpacks and books, smile side by side.", "Play студент / студентка", pic("lisbon/2-4")),
    v("li2-5", "на первом курсе", "in the first year", "A big number 1 on a university door.", "Play на первом курсе", pic("lisbon/2-5")),
    v("li2-6", "Это трудно?", "Is it hard?", "Murzik looks at a huge book with worried, wide eyes.", "Play Это трудно", pic("lisbon/2-6")),
    v("li2-7", "Мне нравится учиться.", "I like studying.", "Katya reads in the sun on the university steps with a happy smile.", "Play Мне нравится учиться", pic("lisbon/2-7")),
  ],
  dialogue: {
    title: "Katya next door",
    note: "Катя is from Novosibirsk. Но интересно — but it's interesting.",
    lines: [
      line("katya", "Привет! Я Катя. Я тоже из России.", "Hi! I'm Katya. I'm from Russia too."),
      line("murzik", "Привет! Ты здесь работаешь?", "Hi! Do you work here?"),
      line("katya", "Нет, я студентка. Я учусь в университете.", "No, I'm a student. I study at the university."),
      line("tom", "А что ты изучаешь?", "And what do you study?"),
      line("katya", "Я изучаю историю. Я на первом курсе.", "I study history. I'm in my first year."),
      line("murzik", "Это трудно?", "Is it hard?"),
      line("katya", "Немного. Но мне нравится учиться!", "A little. But I like studying!"),
    ],
    gist: choice("li2-d1", "What does Katya study?", [
      ["History.", true],
      ["Russian.", false],
      ["Photography.", false],
    ]),
  },
  grammar: [
    {
      title: "Учусь and изучаю",
      paragraphs: [
        "Учиться — to study somewhere: я учусь, ты учишься. Я учусь в университете.",
        "Изучать — to study a subject: я изучаю, ты изучаешь. Я изучаю русский язык.",
      ],
      examples: [
        { ru: "Где ты учишься?", en: "Where do you study?" },
        { ru: "Я изучаю русский.", en: "I'm studying Russian." },
      ],
    },
  ],
  tasks: [
    listen("li2-t1", "Listen. What does the person study?", "Я изучаю русский язык.", [
      ["Russian.", true],
      ["History.", false],
      ["English.", false],
    ]),
    choice("li2-t2", "Katya is a woman who studies at university. What is she?", [
      ["студентка", true],
      ["студент", false],
      ["учительница", false],
    ], { skill: "words" }),
    fill("li2-t3", "Complete: “I study at university.”", "Я", "в университете.", "учусь", ["учусь", "изучаю", "учишься"], { skill: "grammar" }),
    missing("li2-t4", "Which letter is missing? (history)", "ист", "рия", "о", ["о", "а", "е"]),
    speak("li2-t5", "Что ты изучаешь?", "Я изучаю русский язык.", "I'm studying Russian.", {
      help: "Answer truthfully — you are studying Russian right now!",
    }),
    listen("li2-t6", "Listen and choose the best reply.", "Где ты работаешь?", [
      ["Я работаю в офисе.", true],
      ["Я изучаю историю.", false],
      ["Это трудно?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "desk-lamp",
    itemName: "Desk lamp",
    itemNameRu: "Настольная лампа",
    ru: "Ура! Настольная лампа!",
    en: "Yay! A desk lamp!",
    a11y: "A small green desk lamp shines on Murzik's sketchbook on a little table by the window.",
    image: pic("lisbon/reward-2"),
    steps: ["Katya has two desk lamps.", "“One is for you,” she says.", "It is green, like Tom's coat.", "Now Murzik can draw in the evening."],
    bridge: "Tom wants to know: what is a normal working day like at a magazine?",
  },
};

export const lisbon3: Lesson = {
  id: "a1-lisbon-3",
  level: "A1",
  cityId: "lisbon",
  number: 3,
  title: "My Working Day",
  minutes: 6,
  goals: ["Say when you get up", "Say when you start and finish work", "Talk about a day off"],
  vocabNote:
    "Встаю is a little irregular: я встаю, ты встаёшь. Выходной means “a day off”.",
  vocab: [
    v("li3-1", "Когда ты встаёшь?", "When do you get up?", "Murzik in pyjamas yawns next to an alarm clock.", "Play Когда ты встаёшь", pic("lisbon/3-1")),
    v("li3-2", "Я встаю в семь.", "I get up at seven.", "Katya stretches by a window; a clock shows seven.", "Play Я встаю в семь", pic("lisbon/3-2")),
    v("li3-3", "Я начинаю в девять.", "I start at nine.", "Katya ties her café apron; a clock on the wall shows nine.", "Play Я начинаю в девять", pic("lisbon/3-3")),
    v("li3-4", "В час — обед.", "Lunch is at one.", "A plate of grilled sardines and salad on a sunny café table.", "Play В час — обед", pic("lisbon/3-4")),
    v("li3-5", "Я заканчиваю в шесть.", "I finish at six.", "Katya takes off her apron and waves goodbye; a clock shows six.", "Play Я заканчиваю в шесть", pic("lisbon/3-5")),
    v("li3-6", "рабочий день", "working day", "A clock, a laptop and a cup of coffee on a busy office desk.", "Play рабочий день", pic("lisbon/3-6")),
    v("li3-7", "Сегодня выходной!", "Today is a day off!", "Katya lies on a beach towel by the ocean with sunglasses on.", "Play Сегодня выходной", pic("lisbon/3-7")),
  ],
  dialogue: {
    title: "Katya's day",
    note: "Katya studies in the morning and works in a café in the afternoon. Тяжело — hard, tiring.",
    lines: [
      line("tom", "Катя, когда ты встаёшь?", "Katya, when do you get up?"),
      line("katya", "Я встаю в семь. Утром я учусь.", "I get up at seven. In the morning I study."),
      line("murzik", "А потом?", "And then?"),
      line("katya", "В час — обед. Потом я работаю в кафе. Я начинаю в два и заканчиваю в шесть.", "Lunch is at one. Then I work in a café. I start at two and finish at six."),
      line("tom", "Ого! Тяжело!", "Wow! That's hard!"),
      line("katya", "Да. Но в воскресенье у меня выходной!", "Yes. But on Sunday I have a day off!"),
    ],
    gist: choice("li3-d1", "When does Katya finish work?", [
      ["At six.", true],
      ["At two.", false],
      ["At one.", false],
    ]),
  },
  grammar: [
    {
      title: "Встаю, начинаю, заканчиваю",
      paragraphs: [
        "я встаю, ты встаёшь. я начинаю, ты начинаешь. я заканчиваю, ты заканчиваешь.",
        "Add the time with в: Я встаю в семь. Я начинаю в девять.",
      ],
      examples: [
        { ru: "Когда ты начинаешь работать?", en: "When do you start work?" },
        { ru: "Я заканчиваю в пять.", en: "I finish at five." },
      ],
    },
  ],
  tasks: [
    listen("li3-t1", "Listen. When does the person get up?", "Я встаю в шесть.", [
      ["At six.", true],
      ["At seven.", false],
      ["At nine.", false],
    ]),
    match("li3-t2", "Match the Russian with the English.", [
      ["обед", "lunch"],
      ["выходной", "day off"],
      ["рабочий день", "working day"],
    ], { skill: "words" }),
    fill("li3-t3", "Complete: “When do you get up?”", "Когда ты", "?", "встаёшь", ["встаёшь", "встаю", "встаёт"], { skill: "grammar" }),
    spell("li3-t4", "Build the word for “lunch”.", "обед"),
    speak("li3-t5", "Когда ты встаёшь?", "Я встаю в семь.", "I get up at seven.", {
      help: "Say when you really get up.",
    }),
    listen("li3-t6", "Listen and choose the best reply.", "Что ты изучаешь?", [
      ["Я изучаю русский.", true],
      ["Я встаю в семь.", false],
      ["Сегодня выходной!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "coffee-pot",
    itemName: "Coffee pot",
    itemNameRu: "Кофеварка",
    ru: "Ура! Кофеварка!",
    en: "Yay! A little coffee pot!",
    a11y: "A small silver stovetop coffee pot steams on a tiny stove in Murzik's room.",
    image: pic("lisbon/reward-3"),
    steps: ["Tom's meeting is early in the morning.", "He needs coffee!", "Katya lends them her little coffee pot.", "The room smells wonderful."],
    bridge: "Today is the big day: Tom's interview at the magazine.",
  },
};

export const lisbon4: Lesson = {
  id: "a1-lisbon-4",
  level: "A1",
  cityId: "lisbon",
  number: 4,
  title: "The Interview",
  minutes: 6,
  goals: ["Answer “Tell me about yourself”", "Say you have experience", "Say why: потому что"],
  vocabNote:
    "Почему? means “why?”. Answer with потому что — “because”.",
  vocab: [
    v("li4-1", "Расскажите о себе.", "Tell me about yourself.", "The editor, a confident woman with short dark hair, sits across a desk from Tom.", "Play Расскажите о себе", pic("lisbon/4-1")),
    v("li4-2", "Я фотографирую путешествия.", "I photograph journeys.", "A wall of Tom's photos: Paris, London, Madrid, Rome, Berlin, Amsterdam, Vienna, Prague.", "Play Я фотографирую путешествия", pic("lisbon/4-2")),
    v("li4-3", "У меня есть опыт.", "I have experience.", "Tom sits up straight and smiles confidently, his hands on a portfolio.", "Play У меня есть опыт", pic("lisbon/4-3")),
    v("li4-4", "Хороший ответ!", "Good answer!", "The editor smiles and nods, writing a tick in her notebook.", "Play Хороший ответ", pic("lisbon/4-4b")),
    v("li4-5", "Почему вы хотите эту работу?", "Why do you want this job?", "The editor leans forward with a pen and a curious look.", "Play Почему вы хотите эту работу", pic("lisbon/4-5")),
    v("li4-6", "Потому что я люблю путешествовать.", "Because I love travelling.", "Tom spreads his arms wide in front of a map of the world.", "Play Потому что я люблю путешествовать", pic("lisbon/4-6")),
    v("li4-7", "Мы вам позвоним.", "We'll call you.", "The editor shakes Tom's hand at the office door.", "Play Мы вам позвоним", pic("lisbon/4-7")),
  ],
  dialogue: {
    title: "At the magazine",
    note: "Tom answers every question (отвечать — to answer). Он везде — he's everywhere.",
    lines: [
      line("editor", "Здравствуйте, Том! Расскажите о себе.", "Hello, Tom! Tell me about yourself."),
      line("tom", "Я фотограф. Я фотографирую путешествия. Вот мои фотографии.", "I'm a photographer. I photograph journeys. Here are my photos."),
      line("editor", "Очень красиво! А у вас есть опыт?", "Very beautiful! And do you have experience?"),
      line("tom", "Да, у меня есть опыт. Восемь городов!", "Yes, I have experience. Eight cities!"),
      line("editor", "А почему вы хотите эту работу?", "And why do you want this job?"),
      line("tom", "Потому что я люблю путешествовать.", "Because I love travelling."),
      line("editor", "Хороший ответ! А кто этот рыжий кот? Он везде! Хорошо. Мы вам позвоним.", "And who is this ginger cat? He's everywhere! Good. We'll call you."),
    ],
    gist: choice("li4-d1", "Why does Tom want the job?", [
      ["Because he loves travelling.", true],
      ["Because he needs money.", false],
      ["Because he lives in Lisbon.", false],
    ]),
  },
  grammar: [
    {
      title: "Почему? — Потому что…",
      paragraphs: [
        "Почему? — Why? Потому что… — Because…",
        "Почему ты учишь русский? — Потому что я люблю Россию. / Потому что у меня русская семья.",
      ],
      examples: [
        { ru: "Почему ты здесь? — Потому что у меня встреча.", en: "Why are you here? — Because I have a meeting." },
      ],
    },
  ],
  tasks: [
    listen("li4-t1", "Listen. What does the editor ask?", "Расскажите о себе.", [
      ["Tell me about yourself.", true],
      ["Show me your photos.", false],
      ["Why do you want this job?", false],
    ]),
    choice("li4-t2", "What does опыт mean?", [
      ["experience", true],
      ["a photo", false],
      ["a journey", false],
    ], { skill: "words" }),
    fill("li4-t3", "Complete: “Because I love travelling.”", "", "я люблю путешествовать.", "Потому что", ["Потому что", "Почему", "Что"], { skill: "grammar" }),
    missing("li4-t4", "Which letter is missing? (experience)", "оп", "т", "ы", ["ы", "и", "е"]),
    speak("li4-t5", "Почему ты учишь русский?", "Потому что я люблю русский язык.", "Because I love the Russian language.", {
      help: "Give your real reason, starting with Потому что…",
    }),
    listen("li4-t6", "Listen and choose the best reply.", "Когда ты встаёшь?", [
      ["Я встаю в семь.", true],
      ["Потому что я люблю путешествовать.", false],
      ["Мы вам позвоним.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-frame",
    itemName: "Photo frame",
    itemNameRu: "Рамка",
    ru: "Ура! Фото в рамке!",
    en: "Yay! A framed photo!",
    a11y: "On Murzik's wall hangs a framed photo by Tom: Murzik on the Charles Bridge in his blue hat.",
    image: pic("lisbon/reward-4"),
    steps: ["Tom chooses his favourite photo.", "Murzik on the bridge in Prague, in his blue hat.", "He puts it in a frame.", "It hangs on the wall: Tom's best photo."],
    bridge: "Two days later, the phone rings. Tom looks at the screen… It's the magazine!",
  },
};

export const lisbon5: Lesson = {
  id: "a1-lisbon-5",
  level: "A1",
  cityId: "lisbon",
  number: 5,
  title: "Good News!",
  minutes: 6,
  goals: ["Share good news", "Congratulate a friend", "Ask when something starts"],
  vocabNote:
    "Меня взяли! literally means “They took me!” — it is how Russians say “I got the job!”. It is the same for everyone.",
  vocab: [
    v("li5-1", "Хорошая новость!", "Good news!", "Tom runs into the room with his phone in his hand and a huge smile.", "Play Хорошая новость", pic("lisbon/5-1")),
    v("li5-2", "Меня взяли!", "I got the job!", "Tom jumps high in the air with both arms up.", "Play Меня взяли", pic("lisbon/5-2")),
    v("li5-3", "Поздравляю!", "Congratulations!", "Murzik hugs Tom tightly.", "Play Поздравляю", pic("lisbon/5-3")),
    v("li5-4", "Получилось!", "It worked! / We did it!", "Murzik and Tom give each other a high five.", "Play Получилось", pic("lisbon/5-4")),
    v("li5-5", "Когда начинать?", "When do I start?", "Tom on the phone, holding up a calendar with a curious face.", "Play Когда начинать", pic("lisbon/5-5")),
    v("li5-6", "С понедельника.", "From Monday.", "A wall calendar with Monday circled in green.", "Play С понедельника", pic("lisbon/5-6")),
    v("li5-7", "Надо отметить!", "We must celebrate!", "Katya holds up a cake box with a big grin.", "Play Надо отметить", pic("lisbon/5-7")),
  ],
  dialogue: {
    title: "The phone call",
    note: "Tom is a man, so he says Я так рад! (a woman says рада). Алло is how Russians answer the phone.",
    lines: [
      line("editor", "Алло, Том? Это журнал. У нас хорошая новость!", "Hello, Tom? This is the magazine. We have good news!"),
      line("tom", "Правда? Меня взяли?", "Really? Did I get the job?"),
      line("editor", "Да! Поздравляю!", "Yes! Congratulations!"),
      line("tom", "Ура! Я так рад! А когда начинать?", "Hooray! I'm so happy! And when do I start?"),
      line("editor", "С понедельника.", "From Monday."),
      line("murzik", "Том! Получилось!", "Tom! You did it!"),
      line("katya", "Поздравляю! Надо отметить!", "Congratulations! We must celebrate!"),
    ],
    gist: choice("li5-d1", "When does Tom start work?", [
      ["On Monday.", true],
      ["Tomorrow.", false],
      ["Next month.", false],
    ]),
  },
  grammar: [
    {
      title: "С понедельника — from Monday",
      paragraphs: [
        "С + a day means “from”: с понедельника, с пятницы, с субботы. The ending changes: понедельник → с понедельника, пятница → с пятницы.",
        "До means “until”: с понедельника до пятницы — from Monday to Friday.",
      ],
      examples: [
        { ru: "Я работаю с понедельника до пятницы.", en: "I work from Monday to Friday." },
        { ru: "С субботы у меня отпуск.", en: "From Saturday I'm on holiday." },
      ],
    },
  ],
  tasks: [
    listen("li5-t1", "Listen. When does the job start?", "Начинать с пятницы.", [
      ["From Friday.", true],
      ["From Monday.", false],
      ["From Saturday.", false],
    ]),
    choice("li5-t2", "Your friend got a new job. What do you say?", [
      ["Поздравляю!", true],
      ["Мы вам позвоним.", false],
      ["Это трудно?", false],
    ], { skill: "words" }),
    choice("li5-t3", "How do you say “from Monday to Friday”?", [
      ["с понедельника до пятницы", true],
      ["в понедельник до пятница", false],
      ["с понедельник в пятницу", false],
    ], { skill: "grammar" }),
    spell("li5-t4", "Build the word for “news”.", "новость"),
    speak("li5-t5", "Меня взяли!", "Поздравляю! Надо отметить!", "Congratulations! We must celebrate!", {
      help: "Your friend got the job. Congratulate them aloud.",
    }),
    listen("li5-t6", "Listen and choose the best reply.", "Почему вы хотите эту работу?", [
      ["Потому что я люблю путешествовать.", true],
      ["С понедельника.", false],
      ["Поздравляю!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "world-map",
    itemName: "World map",
    itemNameRu: "Карта мира",
    ru: "Ура! Большая карта мира!",
    en: "Yay! A big map of the world!",
    a11y: "A big world map hangs on Murzik's wall. Little red pins mark Paris, London, Madrid, Rome, Berlin, Amsterdam, Vienna, Prague and Lisbon.",
    image: pic("lisbon/reward-5"),
    steps: ["The magazine sends Tom a present.", "A big map of the world.", "Murzik puts a red pin in every city they have visited.", "Nine pins already!"],
    bridge: "Monday: Tom's first day at the magazine. Murzik goes with him.",
  },
};

export const lisbon6: Lesson = {
  id: "a1-lisbon-6",
  level: "A1",
  cityId: "lisbon",
  number: 6,
  title: "First Day at Work",
  minutes: 6,
  goals: ["Introduce a new colleague", "Talk about the office and the boss", "Welcome someone to the team"],
  vocabNote:
    "Знакомьтесь! is the polite or plural “Meet…!” (you know Познакомься from Rome). Коллега can be a man or a woman.",
  vocab: [
    v("li6-1", "Знакомьтесь, это наш новый фотограф.", "Everyone, meet our new photographer.", "The editor introduces Tom to a smiling group in a bright office.", "Play Знакомьтесь, это наш новый фотограф", pic("lisbon/6-1")),
    v("li6-2", "Это мой коллега.", "This is my colleague.", "Tom shakes hands with a young man with a beard and a laptop.", "Play Это мой коллега", pic("lisbon/6-2")),
    v("li6-3", "начальник", "boss", "The editor sits at a big desk in a glass office, on the phone.", "Play начальник", pic("lisbon/6-3")),
    v("li6-4", "офис", "office", "A bright office with big windows, desks, plants and a view of the river.", "Play офис", pic("lisbon/6-4")),
    v("li6-5", "Где мой стол?", "Where is my desk?", "Tom looks around the office holding a box of his things.", "Play Где мой стол", pic("lisbon/6-5")),
    v("li6-6", "Встреча в десять.", "The meeting is at ten.", "A clock shows ten; people sit down around a big table.", "Play Встреча в десять", pic("lisbon/6-6")),
    v("li6-7", "Добро пожаловать в команду!", "Welcome to the team!", "The whole office claps for Tom; Murzik claps too, sitting on his shoulder.", "Play Добро пожаловать в команду", pic("lisbon/6-7")),
  ],
  dialogue: {
    title: "The magazine office",
    note: "Колонка — a column (in a magazine). Главный герой — the main character.",
    lines: [
      line("editor", "Знакомьтесь, это наш новый фотограф, Том!", "Everyone, meet our new photographer, Tom!"),
      line("tom", "Здравствуйте! Очень приятно. Где мой стол?", "Hello! Nice to meet you. Where is my desk?"),
      line("editor", "Вот здесь. Встреча в десять.", "Right here. The meeting is at ten."),
      line("editor", "Ваша первая работа — колонка о путешествиях. Город за городом.", "Your first job is a travel column. City by city."),
      line("murzik", "А я? Я тоже в команде?", "And me? Am I in the team too?"),
      line("editor", "Конечно! Ты — главный герой. Добро пожаловать в команду!", "Of course! You are the main character. Welcome to the team!"),
    ],
    gist: choice("li6-d1", "What is Tom's first job at the magazine?", [
      ["A travel column, city by city.", true],
      ["Photos of the office.", false],
      ["A story about Lisbon trams.", false],
    ]),
  },
  grammar: [
    {
      title: "Мой, моя, моё — my",
      paragraphs: [
        "мой + “he” words: мой стол, мой коллега. моя + “she” words: моя работа. моё + “it” words: моё фото.",
        "Наш (our) works the same way: наш офис, наша команда, наше фото.",
      ],
      examples: [
        { ru: "Это мой стол.", en: "This is my desk." },
        { ru: "Это наша команда.", en: "This is our team." },
      ],
    },
  ],
  tasks: [
    listen("li6-t1", "Listen. When is the meeting?", "Встреча в одиннадцать.", [
      ["At eleven.", true],
      ["At ten.", false],
      ["At one.", false],
    ]),
    match("li6-t2", "Match the Russian with the English.", [
      ["начальник", "boss"],
      ["коллега", "colleague"],
      ["офис", "office"],
    ], { skill: "words" }),
    fill("li6-t3", "Complete: “This is our team.”", "Это", "команда.", "наша", ["наша", "наш", "наше"], { skill: "grammar" }),
    missing("li6-t4", "Which letter is missing? (team)", "ком", "нда", "а", ["а", "о", "у"]),
    speak("li6-t5", "Знакомьтесь, это наш новый фотограф.", "Здравствуйте! Очень приятно!", "Hello! Nice to meet you!", {
      help: "You are new at work. Greet your new colleagues.",
    }),
    listen("li6-t6", "Listen and choose the best reply.", "Хорошая новость! Меня взяли!", [
      ["Поздравляю!", true],
      ["Мы вам позвоним.", false],
      ["Где мой стол?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "camera",
    itemName: "Camera",
    itemNameRu: "Фотоаппарат",
    ru: "Ура! У меня фотоаппарат!",
    en: "Yay! I have a camera!",
    a11y: "Murzik holds Tom's old camera with both paws and takes his very first photo of the yellow tram.",
    image: pic("lisbon/reward-6"),
    steps: ["The magazine gives Tom a new camera.", "Tom gives his old camera to Murzik.", "“Now you can take photos too!”", "Murzik's first photo: the yellow tram."],
    bridge: "On Friday, after the first week, everyone goes to the ocean to celebrate.",
  },
};

export const lisbon7: Lesson = {
  id: "a1-lisbon-7",
  level: "A1",
  cityId: "lisbon",
  number: 7,
  title: "Sunset by the Ocean",
  minutes: 7,
  goals: ["Make a short toast", "Tell a friend you are proud of them", "Understand a working day by ear"],
  vocabNote:
    "Я горжусь тобой means “I'm proud of you”. It is the same for everyone.",
  vocab: [
    v("li7-1", "За работу!", "To the new job!", "Tom, Murzik and Katya raise glasses of lemonade by the ocean.", "Play За работу", pic("lisbon/7-1")),
    v("li7-2", "Какой закат!", "What a sunset!", "An orange and pink sunset over the ocean, with a lighthouse.", "Play Какой закат", pic("lisbon/7-2")),
    v("li7-3", "океан", "ocean", "Big blue ocean waves on a sandy beach.", "Play океан", pic("lisbon/7-3")),
    v("li7-4", "Я горжусь тобой!", "I'm proud of you!", "Murzik looks up at Tom with shining, proud eyes.", "Play Я горжусь тобой", pic("lisbon/7-4")),
    v("li7-5", "Это только начало.", "This is only the beginning.", "Tom looks at a long road leading along the coast into the sunset.", "Play Это только начало", pic("lisbon/7-5")),
    v("li7-6", "Спасибо, что ты рядом.", "Thank you for being with me.", "Tom puts his arm around Murzik; they sit together on the sand.", "Play Спасибо, что ты рядом", pic("lisbon/7-6")),
    v("li7-7", "Вперёд!", "Onwards!", "Murzik points ahead towards the horizon with a brave face.", "Play Вперёд", pic("lisbon/7-7")),
  ],
  dialogue: {
    title: "A toast at sunset",
    note: "Без тебя — without you. Я бы не смог — I couldn't have done it (Tom is a man: смог).",
    lines: [
      line("katya", "Ну что, за работу!", "Well then, to the new job!"),
      line("murzik", "За работу! Том, я горжусь тобой!", "To the new job! Tom, I'm proud of you!"),
      line("tom", "Спасибо, Мурзик. Спасибо, что ты рядом. Без тебя я бы не смог.", "Thank you, Murzik. Thank you for being with me. I couldn't have done it without you."),
      line("katya", "Какой закат!", "What a sunset!"),
      line("tom", "Это только начало. Город за городом!", "This is only the beginning. City by city!"),
      line("murzik", "Вперёд!", "Onwards!"),
    ],
    gist: choice("li7-d1", "What are they celebrating?", [
      ["Tom's new job.", true],
      ["Murzik's birthday.", false],
      ["Katya's exam.", false],
    ]),
  },
  grammar: [
    {
      title: "За + thing: a toast",
      paragraphs: [
        "Russians make short toasts with за: За семью! (Rome) За работу! За нас! (To us!) За дружбу! (To friendship!)",
        "Even with juice, tea or lemonade, a short toast is normal at a celebration.",
      ],
      examples: [
        { ru: "За нас!", en: "To us!" },
        { ru: "За дружбу!", en: "To friendship!" },
      ],
    },
  ],
  tasks: [
    listen("li7-t1", "Listen. When does the person finish work?", "Я встаю в семь. Я начинаю работать в девять. В час у меня обед. Я заканчиваю в пять, а в субботу у меня выходной.", [
      ["At five.", true],
      ["At nine.", false],
      ["At one.", false],
    ], { help: "This is your Lisbon listening test." }),
    choice("li7-t2", "Your friend did something great. What do you say?", [
      ["Я горжусь тобой!", true],
      ["Мы вам позвоним.", false],
      ["Где мой стол?", false],
    ], { skill: "words" }),
    choice("li7-t3", "You raise your glass to friendship. What do you say?", [
      ["За дружбу!", true],
      ["С дружбой!", false],
      ["В дружбу!", false],
    ], { skill: "grammar" }),
    spell("li7-t4", "Build the word for “ocean”.", "океан"),
    speak("li7-t5", "Расскажите о себе.", "Я студент. Я изучаю русский язык.", "I'm a student. I'm studying Russian.", {
      help: "Say a few words about yourself: what you do and what you study. (A woman says студентка.)",
    }),
    listen("li7-t6", "Listen and choose the best reply.", "Где ты учишься?", [
      ["Я учусь в университете.", true],
      ["Я работаю в журнале.", false],
      ["С понедельника.", false],
    ], { skill: "review" }),
    tf("li7-t7", "Выходной means “a day off”.", true, "True or false", { skill: "review" }),
  ],
  reward: {
    itemId: "azulejo",
    itemName: "Blue tile",
    itemNameRu: "Плитка",
    ru: "Ура! Бело-синяя плитка!",
    en: "Yay! A blue and white tile!",
    a11y: "Murzik holds a square blue and white painted Lisbon tile showing a little ship on the waves.",
    image: pic("lisbon/reward-7"),
    steps: ["Katya has a present for Murzik.", "A blue and white tile, like on the houses of Lisbon.", "On it there is a little ship on the waves.", "“For your journey,” she says."],
    bridge: "The tile goes into the suitcase. And soon it will be a very special day for Murzik…",
  },
};
