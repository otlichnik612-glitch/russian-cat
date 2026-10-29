import { pic } from "../art";
import { choice, fill, line, listen, match, missing, speak, spell, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Athens · «Праздники и даты» · lessons 1–7.
 * Murzik and Tom stay in a small white room with a blue door on the roof terrace of a family
 * guesthouse. Nika, from a Greek-Russian family, helps Tom prepare a surprise party:
 * it is Murzik's birthday. On the day, a postcard arrives with no return address:
 * «С днём рождения, внук». The first big mystery of the course.
 */

export const athens1: Lesson = {
  id: "a1-athens-1",
  level: "A1",
  cityId: "athens",
  number: 1,
  title: "The Months",
  minutes: 5,
  goals: ["Name the months and seasons", "Say what month it is", "Say “in May”"],
  vocabNote:
    "Russian months are written with a small letter, like the days of the week. In Russia winter is December, January and February.",
  vocab: [
    v("at1-1", "Какой сейчас месяц?", "What month is it now?", "Murzik looks at a wall calendar on a sunny white terrace with a questioning face.", "Listen to Какой сейчас месяц", pic("athens/1-1")),
    v("at1-2", "Сейчас май.", "It's May now.", "A sunny Athens terrace with blooming flowers and a calendar page with spring flowers.", "Listen to Сейчас май", pic("athens/1-2")),
    v("at1-3", "зима: декабрь, январь, февраль", "winter: December, January, February", "Three small snowy pictures in a row: a snowman, a fir tree, a frozen pond.", "Listen to зима: декабрь, январь, февраль", pic("athens/1-3")),
    v("at1-4", "весна: март, апрель, май", "spring: March, April, May", "Three small spring pictures: melting snow, a bud, blooming flowers.", "Listen to весна: март, апрель, май", pic("athens/1-4")),
    v("at1-5", "лето: июнь, июль, август", "summer: June, July, August", "Three small summer pictures: a beach, a big sun, a watermelon.", "Listen to лето: июнь, июль, август", pic("athens/1-5")),
    v("at1-6", "осень: сентябрь, октябрь, ноябрь", "autumn: September, October, November", "Three small autumn pictures: a school bag, yellow leaves, rain.", "Listen to осень: сентябрь, октябрь, ноябрь", pic("athens/1-6")),
    v("at1-7", "в мае", "in May", "Murzik lies in the warm sun on the terrace with sunglasses on.", "Listen to в мае", pic("athens/1-7")),
  ],
  dialogue: {
    title: "Warm Athens",
    note: "Ника is from a Greek-Russian family: at home they speak both Greek and Russian. Уже — already.",
    lines: [
      line("nika", "Привет! Я Ника. Добро пожаловать в Афины!", "Hi! I'm Nika. Welcome to Athens!"),
      line("murzik", "Привет! Ой, здесь так тепло! Какой сейчас месяц?", "Hi! Oh, it's so warm here! What month is it now?"),
      line("nika", "Сейчас май. В мае в Афинах уже тепло.", "It's May now. In May it's already warm in Athens."),
      line("tom", "А в Праге было холодно!", "And in Prague it was cold!"),
      line("nika", "А летом, в июле и в августе, здесь очень жарко.", "And in summer, in July and August, it's very hot here."),
      line("murzik", "Мой любимый месяц — май!", "My favourite month is May!"),
    ],
    gist: choice("at1-d1", "What month is it?", [
      ["May.", true],
      ["July.", false],
      ["August.", false],
    ]),
  },
  grammar: [
    {
      title: "In May: в + month with -е",
      paragraphs: [
        "To say “in” a month, use в and the ending -е: май → в мае, январь → в январе, март → в марте.",
        "Seasons are different: зимой (in winter), весной, летом, осенью.",
      ],
      examples: [
        { ru: "в январе", en: "in January" },
        { ru: "Летом здесь жарко.", en: "In summer it's hot here." },
      ],
    },
  ],
  tasks: [
    listen("at1-t1", "Listen. What month is it?", "Сейчас октябрь.", [
      ["October.", true],
      ["August.", false],
      ["December.", false],
    ]),
    match("at1-t2", "Match the seasons.", [
      ["зима", "winter"],
      ["весна", "spring"],
      ["лето", "summer"],
      ["осень", "autumn"],
    ], { skill: "words" }),
    fill("at1-t3", "Complete: “in May”.", "в", "", "мае", ["мае", "май", "мая"], { skill: "grammar" }),
    spell("at1-t4", "Build the word for “spring”.", "весна"),
    speak("at1-t5", "Какой твой любимый месяц?", "Мой любимый месяц — июнь.", "My favourite month is June.", {
      help: "Say your real favourite month.",
    }),
    listen("at1-t6", "Listen and choose the best reply.", "Где ты работаешь?", [
      ["Я работаю в офисе.", true],
      ["Сейчас май.", false],
      ["В мае.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "vase",
    itemName: "Greek vase",
    itemNameRu: "Ваза",
    ru: "Ура! Греческая ваза!",
    en: "Yay! A Greek vase!",
    a11y: "A clay vase with a black and orange pattern stands on the windowsill of a small white room with a blue door.",
    image: pic("athens/reward-1"),
    steps: ["Nika's family has a little guesthouse.", "Murzik's room is on the roof: white walls and a blue door.", "Nika brings a clay vase with an old Greek pattern.", "Murzik puts a flower in it."],
    bridge: "Tom looks at the calendar and suddenly goes quiet. What's the date today?",
  },
};

export const athens2: Lesson = {
  id: "a1-athens-2",
  level: "A1",
  cityId: "athens",
  number: 2,
  title: "What's the Date?",
  minutes: 6,
  goals: ["Ask the date", "Say the date", "Understand first, second, third…"],
  vocabNote:
    "Dates use “first, second, third…” in the “it” form, because число (date) is an “it” word: первое, второе, третье.",
  vocab: [
    v("at2-1", "Какое сегодня число?", "What's the date today?", "Tom looks at his phone calendar with a thinking face.", "Listen to Какое сегодня число", pic("athens/2-1")),
    v("at2-2", "Сегодня первое мая.", "Today is the first of May.", "A calendar page with a big number 1 and a spring flower.", "Listen to Сегодня первое мая", pic("athens/2-2")),
    v("at2-3", "второе, третье", "second, third", "Two calendar pages with the numbers 2 and 3.", "Listen to второе, третье", pic("athens/2-3")),
    v("at2-4", "четвёртое, пятое", "fourth, fifth", "Two calendar pages with the numbers 4 and 5.", "Listen to четвёртое, пятое", pic("athens/2-4")),
    v("at2-5", "десятое", "tenth", "A calendar page with the number 10.", "Listen to десятое", pic("athens/2-5")),
    v("at2-6", "двадцатое", "twentieth", "A calendar page with the number 20.", "Listen to двадцатое", pic("athens/2-6")),
    v("at2-7", "Какое завтра число?", "What's the date tomorrow?", "Murzik flips a calendar page forward with a curious face.", "Listen to Какое завтра число", pic("athens/2-7")),
  ],
  dialogue: {
    title: "Tom remembers",
    note: "Что-то важное — something important. Ничего! — Nothing!",
    lines: [
      line("tom", "Ника, какое сегодня число?", "Nika, what's the date today?"),
      line("nika", "Сегодня третье мая.", "Today is the third of May."),
      line("tom", "Третье? А какое завтра число?", "The third? And what's the date tomorrow?"),
      line("nika", "Четвёртое. А что?", "The fourth. Why?"),
      line("tom", "Ой… Послезавтра — что-то важное!", "Oh… The day after tomorrow is something important!"),
      line("murzik", "Что? Что важное?", "What? What's important?"),
      line("tom", "Ничего, Мурзик! Ничего!", "Nothing, Murzik! Nothing!"),
    ],
    gist: choice("at2-d1", "What's the date today?", [
      ["The third of May.", true],
      ["The fourth of May.", false],
      ["The fifth of May.", false],
    ]),
  },
  grammar: [
    {
      title: "Dates: первое мая",
      paragraphs: [
        "Say the date with the “it” form: первое, второе, третье, четвёртое, пятое… десятое, двадцатое.",
        "The month comes in the “of” form: май → мая, январь → января. Сегодня первое января — Today is the first of January.",
      ],
      examples: [
        { ru: "Сегодня второе мая.", en: "Today is the second of May." },
        { ru: "Завтра десятое января.", en: "Tomorrow is the tenth of January." },
      ],
    },
  ],
  tasks: [
    listen("at2-t1", "Listen. What's the date?", "Сегодня пятое мая.", [
      ["The 5th of May.", true],
      ["The 4th of May.", false],
      ["The 15th of May.", false],
    ]),
    choice("at2-t2", "What does третье mean?", [
      ["third", true],
      ["second", false],
      ["thirty", false],
    ], { skill: "words" }),
    fill("at2-t3", "Complete: “Today is the first of May.”", "Сегодня первое", ".", "мая", ["мая", "май", "мае"], { skill: "grammar" }),
    missing("at2-t4", "Which letter is missing? (date)", "ч", "сло", "и", ["и", "е", "ы"]),
    speak("at2-t5", "Какое сегодня число?", "Сегодня десятое.", "Today is the tenth.", {
      help: "Look at today's date and say it aloud (just the day is fine).",
    }),
    listen("at2-t6", "Listen and choose the best reply.", "Какой сейчас месяц?", [
      ["Сейчас май.", true],
      ["Сегодня первое.", false],
      ["В мае.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "shells",
    itemName: "Seashells",
    itemNameRu: "Ракушки",
    ru: "Ура! Красивые ракушки!",
    en: "Yay! Pretty seashells!",
    a11y: "A little bowl full of white, pink and striped seashells on Murzik's windowsill, with the sea far away.",
    image: pic("athens/reward-2"),
    steps: ["In the afternoon they go to the sea.", "Murzik collects seashells.", "White, pink and striped ones.", "Tom keeps looking at his phone and smiling secretly."],
    bridge: "While Murzik is asleep, Tom whispers to Nika: he has a secret.",
  },
};

export const athens3: Lesson = {
  id: "a1-athens-3",
  level: "A1",
  cityId: "athens",
  number: 3,
  title: "When's the Birthday?",
  minutes: 6,
  goals: ["Ask when someone's birthday is", "Say “on the fifth of May”", "Plan a surprise"],
  vocabNote:
    "“On” a date uses the -ого ending: пятого мая — on the fifth of May. Послезавтра means “the day after tomorrow”.",
  vocab: [
    v("at3-1", "Когда у тебя день рождения?", "When is your birthday?", "Nika asks Tom with a curious smile on the terrace at night.", "Listen to Когда у тебя день рождения", pic("athens/3-1")),
    v("at3-2", "Пятого мая.", "On the fifth of May.", "A calendar page with a big number 5 and a little birthday cake drawn on it.", "Listen to Пятого мая", pic("athens/3-2")),
    v("at3-3", "послезавтра", "the day after tomorrow", "Two arrows jump forward over two calendar pages.", "Listen to послезавтра", pic("athens/3-3")),
    v("at3-4", "Уже скоро!", "It's soon!", "Tom looks at a clock with excited, wide eyes.", "Listen to Уже скоро", pic("athens/3-4")),
    v("at3-5", "Давай устроим праздник!", "Let's throw a party!", "Nika holds up colourful balloons and party hats with a big grin.", "Listen to Давай устроим праздник", pic("athens/3-5")),
    v("at3-6", "Это сюрприз!", "It's a surprise!", "Tom hides a present behind his back and winks.", "Listen to Это сюрприз", pic("athens/3-6")),
    v("at3-7", "Только никому не говори!", "Just don't tell anyone!", "Nika puts a finger to her lips; Tom nods.", "Listen to Только никому не говори", pic("athens/3-7")),
  ],
  dialogue: {
    title: "Tom's secret",
    note: "Мурзик спит — Murzik is asleep. Я знаю — I know.",
    lines: [
      line("tom", "Ника, тихо! Мурзик спит. У меня секрет.", "Nika, quiet! Murzik is asleep. I have a secret."),
      line("nika", "Какой секрет?", "What secret?"),
      line("tom", "У Мурзика день рождения! Пятого мая. Послезавтра!", "It's Murzik's birthday! On the fifth of May. The day after tomorrow!"),
      line("nika", "Уже скоро! Давай устроим праздник!", "That's soon! Let's throw a party!"),
      line("tom", "Да! Это сюрприз. Только никому не говори!", "Yes! It's a surprise. Just don't tell anyone!"),
      line("nika", "Я знаю! Никому!", "I know! Not a soul!"),
    ],
    gist: choice("at3-d1", "When is Murzik's birthday?", [
      ["On the fifth of May.", true],
      ["On the third of May.", false],
      ["Tomorrow.", false],
    ]),
  },
  grammar: [
    {
      title: "On a date: -ого",
      paragraphs: [
        "Сегодня пятое мая — Today is the fifth of May. But “on” the fifth: пятого мая.",
        "первое → первого, второе → второго, третье → третьего, десятое → десятого.",
      ],
      examples: [
        { ru: "У меня день рождения первого июня.", en: "My birthday is on the first of June." },
        { ru: "Концерт десятого мая.", en: "The concert is on the tenth of May." },
      ],
    },
  ],
  tasks: [
    listen("at3-t1", "Listen. When is the birthday?", "У меня день рождения десятого января.", [
      ["10 January.", true],
      ["1 January.", false],
      ["10 June.", false],
    ]),
    match("at3-t2", "Match the Russian with the English.", [
      ["послезавтра", "the day after tomorrow"],
      ["Это сюрприз!", "It's a surprise!"],
      ["Уже скоро!", "It's soon!"],
    ], { skill: "words" }),
    choice("at3-t3", "How do you say “on the second of May”?", [
      ["второго мая", true],
      ["второе мая", false],
      ["второй май", false],
    ], { skill: "grammar" }),
    spell("at3-t4", "Build the word for “party / holiday”.", "праздник"),
    speak("at3-t5", "Когда у тебя день рождения?", "У меня день рождения пятого мая.", "My birthday is on the fifth of May.", {
      help: "Say your real birthday. Use the -ого ending: пятого, десятого, двадцатого…",
    }),
    listen("at3-t6", "Listen and choose the best reply.", "Какое сегодня число?", [
      ["Сегодня третье.", true],
      ["Пятого мая.", false],
      ["Сейчас май.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "wind-chime",
    itemName: "Wind chime",
    itemNameRu: "Колокольчик",
    ru: "Ура! Колокольчик на ветру!",
    en: "Yay! A wind chime!",
    a11y: "A little blue and white wind chime with tiny bells hangs by the blue door of Murzik's room and sways in the breeze.",
    image: pic("athens/reward-3"),
    steps: ["In the morning there is a soft sound by the door.", "Ding… ding…", "Nika has hung up a little wind chime.", "Murzik has no idea what is coming."],
    bridge: "Tom and Nika go to the market. They need a present for Murzik!",
  },
};

export const athens4: Lesson = {
  id: "a1-athens-4",
  level: "A1",
  cityId: "athens",
  number: 4,
  title: "What Shall We Give Him?",
  minutes: 6,
  goals: ["Ask what to give someone", "Say what someone likes", "Ask to wrap a present"],
  vocabNote:
    "Подарить means “to give as a present”. Ему — to him, ей — to her, тебе — to you. You know them from Rome.",
  vocab: [
    v("at4-1", "Что ему подарить?", "What shall we give him?", "Tom and Nika stand at a market stall full of gifts, thinking.", "Listen to Что ему подарить", pic("athens/4-1")),
    v("at4-2", "подарок", "present", "A box wrapped in blue paper with a white ribbon.", "Listen to подарок", pic("athens/4-2")),
    v("at4-3", "Ему нравится рисовать.", "He likes drawing.", "Tom shows Nika a small drawing Murzik made of the Acropolis.", "Listen to Ему нравится рисовать", pic("athens/4-3")),
    v("at4-4", "альбом для рисования", "sketchbook", "A thick sketchbook with a leather cover and a pencil tied to it.", "Listen to альбом для рисования", pic("athens/4-4")),
    v("at4-5", "Это хорошая идея!", "That's a good idea!", "Nika snaps her fingers with a bright face.", "Listen to Это хорошая идея", pic("athens/4-5")),
    v("at4-6", "Упакуйте, пожалуйста.", "Please wrap it.", "The seller wraps the sketchbook in blue paper.", "Listen to Упакуйте, пожалуйста", pic("athens/4-6")),
    v("at4-7", "А что ты подаришь?", "And what will you give?", "Tom turns to Nika with a questioning look, holding the wrapped present.", "Listen to А что ты подаришь", pic("athens/4-7")),
  ],
  dialogue: {
    title: "At the market",
    note: "Это секрет! — It's a secret! Красивый — beautiful.",
    lines: [
      line("tom", "Ника, что ему подарить?", "Nika, what shall we give him?"),
      line("nika", "А что он любит?", "And what does he like?"),
      line("tom", "Ему нравится рисовать.", "He likes drawing."),
      line("nika", "Тогда альбом для рисования!", "Then a sketchbook!"),
      line("tom", "Это хорошая идея! Вот этот, красивый. Упакуйте, пожалуйста.", "That's a good idea! This one, the beautiful one. Please wrap it."),
      line("seller", "Конечно!", "Of course!"),
      line("tom", "А что ты подаришь?", "And what will you give him?"),
      line("nika", "Это секрет!", "It's a secret!"),
    ],
    gist: choice("at4-d1", "What does Tom buy for Murzik?", [
      ["A sketchbook.", true],
      ["A book about Athens.", false],
      ["A camera.", false],
    ]),
  },
  grammar: [
    {
      title: "Кому? Мне, тебе, ему, ей",
      paragraphs: [
        "To give something to someone, use these forms: мне (to me), тебе (to you), ему (to him), ей (to her).",
        "Что ей подарить? — What shall we give her? Ему нравится рисовать — He likes drawing (literally “To him it's pleasing to draw”).",
      ],
      examples: [
        { ru: "Что тебе подарить?", en: "What would you like as a present?" },
        { ru: "Ей нравится музыка.", en: "She likes music." },
      ],
    },
  ],
  tasks: [
    listen("at4-t1", "Listen. What does she like?", "Ей нравится музыка.", [
      ["Music.", true],
      ["Drawing.", false],
      ["Books.", false],
    ]),
    choice("at4-t2", "What is подарок?", [
      ["a present", true],
      ["a party", false],
      ["a surprise", false],
    ], { skill: "words" }),
    fill("at4-t3", "Complete: “What shall we give her?”", "Что", "подарить?", "ей", ["ей", "ему", "мне"], { skill: "grammar" }),
    missing("at4-t4", "Which letter is missing? (present)", "под", "рок", "а", ["а", "о", "е"]),
    speak("at4-t5", "Что тебе подарить?", "Мне нравится читать. Подари книгу!", "I like reading. Give me a book!", {
      help: "A friend wants to buy you a present. Say what you like.",
    }),
    listen("at4-t6", "Listen and choose the best reply.", "Когда у тебя день рождения?", [
      ["Пятого мая.", true],
      ["Это сюрприз!", false],
      ["Послезавтра пятое.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "balloons",
    itemName: "Balloons",
    itemNameRu: "Воздушные шары",
    ru: "Ура! Воздушные шары!",
    en: "Yay! Balloons!",
    a11y: "A bunch of blue, white and yellow balloons is tied to the railing of the roof terrace.",
    image: pic("athens/reward-4"),
    steps: ["On the way home Nika buys balloons.", "Blue, white and yellow.", "They hide them in the kitchen.", "Murzik still suspects nothing!"],
    bridge: "The fifth of May. Murzik wakes up… and the door opens.",
  },
};

export const athens5: Lesson = {
  id: "a1-athens-5",
  level: "A1",
  cityId: "athens",
  number: 5,
  title: "Happy Birthday!",
  minutes: 6,
  goals: ["Say Happy birthday!", "Give a present", "React to a present"],
  vocabNote:
    "Это тебе! means “This is for you!”. Не надо было! — “You shouldn't have!” — is a polite, happy reaction.",
  vocab: [
    v("at5-1", "С днём рождения!", "Happy birthday!", "Tom and Nika burst through the blue door with balloons, shouting happily.", "Listen to С днём рождения", pic("athens/5-1")),
    v("at5-2", "Это тебе!", "This is for you!", "Tom holds out a present wrapped in blue paper.", "Listen to Это тебе", pic("athens/5-2")),
    v("at5-3", "От всего сердца!", "From the bottom of my heart!", "Murzik presses both paws to his heart with shining eyes.", "Listen to От всего сердца", pic("athens/5-3b")),
    v("at5-4", "Какой красивый подарок!", "What a beautiful present!", "Murzik holds up a leather sketchbook with shining eyes.", "Listen to Какой красивый подарок", pic("athens/5-4")),
    v("at5-5", "Не надо было!", "You shouldn't have!", "Murzik puts his paws to his cheeks, touched and happy.", "Listen to Не надо было", pic("athens/5-5")),
    v("at5-6", "Мне очень нравится!", "I like it very much!", "Murzik hugs the sketchbook to his chest.", "Listen to Мне очень нравится", pic("athens/5-6")),
    v("at5-7", "Ты лучший друг!", "You're the best friend!", "Murzik hugs Tom tightly.", "Listen to Ты лучший друг", pic("athens/5-7")),
  ],
  dialogue: {
    title: "The fifth of May",
    note: "Ты помнишь? — You remember? Конечно помню! — Of course I remember!",
    lines: [
      line("tom", "Мурзик! С днём рождения!", "Murzik! Happy birthday!"),
      line("murzik", "Ой! Ты помнишь?", "Oh! You remember?"),
      line("tom", "Конечно помню! Это тебе. Открой!", "Of course I remember! This is for you. Open it!"),
      line("murzik", "Альбом для рисования! Какой красивый подарок! Не надо было!", "A sketchbook! What a beautiful present! You shouldn't have!"),
      line("nika", "Тебе нравится?", "Do you like it?"),
      line("murzik", "Мне очень нравится! От всего сердца спасибо! Том, ты лучший друг!", "I like it very much! Thank you from the bottom of my heart! Tom, you're the best friend!"),
    ],
    gist: choice("at5-d1", "Is Murzik happy with the present?", [
      ["Yes, very.", true],
      ["No, he wanted a camera.", false],
      ["He doesn't open it.", false],
    ]),
  },
  grammar: [
    {
      title: "Это тебе — for you",
      paragraphs: [
        "The same forms mean “for”: Это тебе — This is for you. Это ему — for him. Это ей — for her.",
        "With лучший (best): Ты лучший друг — about a man. Ты лучшая подруга — about a woman.",
      ],
      examples: [
        { ru: "Это тебе!", en: "This is for you!" },
        { ru: "А это ей.", en: "And this is for her." },
      ],
    },
  ],
  tasks: [
    listen("at5-t1", "Listen. Who is the present for?", "Это ей.", [
      ["For her.", true],
      ["For him.", false],
      ["For you.", false],
    ]),
    choice("at5-t2", "You get a present you love. What can you say?", [
      ["Не надо было! Мне очень нравится!", true],
      ["Упакуйте, пожалуйста.", false],
      ["Что ему подарить?", false],
    ], { skill: "words" }),
    fill("at5-t3", "Complete: “This is for you!”", "Это", "!", "тебе", ["тебе", "ты", "твой"], { skill: "grammar" }),
    spell("at5-t4", "Build the word for “friend”.", "друг"),
    speak("at5-t5", "Это тебе! С днём рождения!", "Спасибо! Какой красивый подарок!", "Thank you! What a beautiful present!", {
      help: "Your friend gives you a present. React aloud.",
    }),
    listen("at5-t6", "Listen and choose the best reply.", "Что ему подарить?", [
      ["Ему нравится рисовать.", true],
      ["Это тебе!", false],
      ["Открой!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sketchbook",
    itemName: "Sketchbook",
    itemNameRu: "Альбом",
    ru: "Ура! Альбом для рисования!",
    en: "Yay! A sketchbook!",
    a11y: "Murzik sits on the terrace drawing the Acropolis in his new leather sketchbook.",
    image: pic("athens/reward-5"),
    steps: ["Murzik opens the sketchbook.", "The pages are thick and white.", "He draws his first picture: the Acropolis.", "Then he draws Tom and Nika."],
    bridge: "In the evening there is a party on the roof. Nika's family brings a big cake.",
  },
};

export const athens6: Lesson = {
  id: "a1-athens-6",
  level: "A1",
  cityId: "athens",
  number: 6,
  title: "The Birthday Cake",
  minutes: 6,
  goals: ["Make birthday wishes", "Blow out the candles and make a wish", "Offer food to guests"],
  vocabNote:
    "Желаю… means “I wish (you)…”: Желаю счастья! — I wish you happiness! Угощайтесь! is the polite “Help yourselves!”",
  vocab: [
    v("at6-1", "Желаю счастья!", "I wish you happiness!", "Nika's grandmother kisses Murzik on the head and smiles warmly.", "Listen to Желаю счастья", pic("athens/6-1")),
    v("at6-2", "Желаю здоровья!", "I wish you good health!", "Nika's grandfather raises a glass of juice to Murzik.", "Listen to Желаю здоровья", pic("athens/6-2")),
    v("at6-3", "торт", "cake", "A big round birthday cake with white cream and blue flowers.", "Listen to торт", pic("athens/6-3")),
    v("at6-4", "Задуй свечи!", "Blow out the candles!", "Murzik takes a deep breath in front of a cake with lit candles.", "Listen to Задуй свечи", pic("athens/6-4")),
    v("at6-5", "Загадай желание!", "Make a wish!", "Murzik closes his eyes tightly and holds his paws together.", "Listen to Загадай желание", pic("athens/6-5")),
    v("at6-6", "Угощайтесь!", "Help yourselves!", "Nika's mother puts plates of food on a long table on the roof terrace.", "Listen to Угощайтесь", pic("athens/6-6")),
    v("at6-7", "Какой вкусный торт!", "What a tasty cake!", "Murzik has cream on his nose and a happy face.", "Listen to Какой вкусный торт", pic("athens/6-7")),
  ],
  dialogue: {
    title: "A party on the roof",
    note: "Загадал! — Done! (I've made a wish; Murzik is a boy, so загадал). Я не скажу — I won't tell. Иначе не сбудется — otherwise it won't come true.",
    lines: [
      line("nika", "Мурзик, с днём рождения! Желаю счастья и здоровья!", "Murzik, happy birthday! I wish you happiness and good health!"),
      line("tom", "Вот торт! Загадай желание!", "Here's the cake! Make a wish!"),
      line("murzik", "Хорошо… Загадал!", "OK… Done!"),
      line("nika", "Теперь задуй свечи!", "Now blow out the candles!"),
      line("tom", "Ура! Какое желание?", "Hooray! What was the wish?"),
      line("murzik", "Я не скажу. Иначе не сбудется!", "I won't tell. Otherwise it won't come true!"),
      line("nika", "Угощайтесь! Какой вкусный торт!", "Help yourselves! What a tasty cake!"),
    ],
    gist: choice("at6-d1", "Does Murzik tell them his wish?", [
      ["No, or it won't come true.", true],
      ["Yes, he wants a new camera.", false],
      ["Yes, he wants to go home.", false],
    ]),
  },
  grammar: [
    {
      title: "Желаю + wish",
      paragraphs: [
        "Желаю is followed by a special form. Learn the common wishes as whole phrases: Желаю счастья! Желаю здоровья! Желаю удачи! (good luck)",
        "You can join them: Желаю счастья и здоровья!",
      ],
      examples: [
        { ru: "Желаю удачи!", en: "Good luck!" },
        { ru: "Желаю счастья и здоровья!", en: "I wish you happiness and good health!" },
      ],
    },
  ],
  tasks: [
    listen("at6-t1", "Listen. What do they wish?", "Желаю здоровья!", [
      ["Good health.", true],
      ["Happiness.", false],
      ["Good luck.", false],
    ]),
    match("at6-t2", "Match the Russian with the English.", [
      ["торт", "cake"],
      ["Загадай желание!", "Make a wish!"],
      ["Угощайтесь!", "Help yourselves!"],
    ], { skill: "words" }),
    choice("at6-t3", "Your friend has an exam tomorrow. What do you wish?", [
      ["Желаю удачи!", true],
      ["Желаю здоровья!", false],
      ["Задуй свечи!", false],
    ], { skill: "grammar" }),
    spell("at6-t4", "Build the word for “cake”.", "торт"),
    speak("at6-t5", "У меня сегодня день рождения!", "С днём рождения! Желаю счастья!", "Happy birthday! I wish you happiness!", {
      help: "It's your friend's birthday. Congratulate them aloud.",
    }),
    listen("at6-t6", "Listen and choose the best reply.", "Это тебе!", [
      ["Спасибо! Какой красивый подарок!", true],
      ["Угощайтесь!", false],
      ["Желаю здоровья!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "evil-eye",
    itemName: "Blue eye charm",
    itemNameRu: "Оберег",
    ru: "Ура! Голубой оберег!",
    en: "Yay! A blue eye charm!",
    a11y: "A round blue glass charm shaped like an eye hangs on a string by Murzik's bed.",
    image: pic("athens/reward-6"),
    steps: ["Nika's secret present is a little blue charm.", "It looks like a blue eye.", "“In Greece it keeps you safe,” she says.", "Murzik hangs it by his bed."],
    bridge: "Late in the evening Nika's grandmother comes up. “Murzik, there was a postcard for you today…”",
  },
};

export const athens7: Lesson = {
  id: "a1-athens-7",
  level: "A1",
  cityId: "athens",
  number: 7,
  title: "A Postcard with No Address",
  minutes: 7,
  goals: ["Ask who something is from", "Say something is strange", "Understand dates by ear"],
  vocabNote:
    "От кого? means “From whom?”. Не может быть! — “It can't be!” — shows big surprise.",
  vocab: [
    v("at7-1", "Тебе открытка!", "There's a postcard for you!", "Nika's grandmother hands Murzik an old-looking postcard.", "Listen to Тебе открытка", pic("athens/7-1")),
    v("at7-2", "От кого?", "Who is it from?", "Murzik turns the postcard over and over with a puzzled face.", "Listen to От кого", pic("athens/7-2")),
    v("at7-3", "Здесь нет адреса.", "There's no address here.", "The back of a postcard: a few lines of handwriting and an empty space where the address should be.", "Listen to Здесь нет адреса", pic("athens/7-3")),
    v("at7-4", "Странно…", "Strange…", "Tom scratches his head and frowns at the postcard.", "Listen to Странно", pic("athens/7-4")),
    v("at7-5", "Кто это написал?", "Who wrote this?", "Murzik holds the postcard up to the lamp, looking closely at the writing.", "Listen to Кто это написал", pic("athens/7-5")),
    v("at7-6", "Может быть, бабушка?", "Maybe Grandma?", "Murzik looks up at the night sky with hope in his eyes.", "Listen to Может быть, бабушка", pic("athens/7-6")),
    v("at7-7", "Не может быть!", "It can't be!", "Tom's mouth falls open in surprise.", "Listen to Не может быть", pic("athens/7-7")),
  ],
  dialogue: {
    title: "«С днём рождения, внук»",
    note: "Внук — grandson. Такая же — the same. Рыжая кошка — a ginger cat.",
    lines: [
      line("nika", "Мурзик, тебе открытка!", "Murzik, there's a postcard for you!"),
      line("murzik", "Мне? От кого?", "For me? Who is it from?"),
      line("tom", "Здесь нет адреса. Странно…", "There's no address here. Strange…"),
      line("murzik", "«С днём рождения, внук». Кто это написал?", "“Happy birthday, grandson.” Who wrote this?"),
      line("tom", "Смотри! Здесь рыжая кошка. Такая же, как на открытке из Парижа!", "Look! There's a ginger cat here. The same as on the postcard from Paris!"),
      line("murzik", "Может быть, бабушка?", "Maybe Grandma?"),
      line("tom", "Не может быть!", "It can't be!"),
    ],
    gist: choice("at7-d1", "What is written on the postcard?", [
      ["“Happy birthday, grandson.”", true],
      ["“Come to Paris.”", false],
      ["“Good luck, Tom.”", false],
    ]),
  },
  grammar: [
    {
      title: "Question words",
      paragraphs: [
        "You now know many question words: кто? (who), что? (what), где? (where), куда? (where to), когда? (when), почему? (why), от кого? (from whom).",
        "In a Russian question the voice goes up on the question word: Кто это написал? ↗",
      ],
      examples: [
        { ru: "От кого подарок?", en: "Who is the present from?" },
        { ru: "Когда пришла открытка?", en: "When did the postcard come?" },
      ],
    },
  ],
  tasks: [
    listen("at7-t1", "Listen. When is the brother's birthday?", "Мой день рождения — двадцатого октября. А у брата — третьего марта. Сейчас март, значит, скоро праздник!", [
      ["3 March.", true],
      ["20 October.", false],
      ["20 March.", false],
    ], { help: "This is your Athens listening test." }),
    choice("at7-t2", "You get a letter, but you don't know the sender. What do you ask?", [
      ["От кого?", true],
      ["Не может быть!", false],
      ["Угощайтесь!", false],
    ], { skill: "words" }),
    choice("at7-t3", "Which question word means “when”?", [
      ["когда", true],
      ["кто", false],
      ["почему", false],
    ], { skill: "grammar" }),
    spell("at7-t4", "Build the word for “postcard”.", "открытка"),
    speak("at7-t5", "Тебе открытка!", "Мне? От кого?", "For me? Who is it from?", {
      help: "Someone gives you a postcard. Ask who it is from.",
    }),
    listen("at7-t6", "Listen and choose the best reply.", "Задуй свечи! Загадай желание!", [
      ["Хорошо!", true],
      ["Упакуйте, пожалуйста.", false],
      ["От кого?", false],
    ], { skill: "review" }),
    tf("at7-t7", "Пятого мая means “on the fifth of May”.", true, "True or false", { skill: "review" }),
  ],
  reward: {
    itemId: "birthday-postcard",
    itemName: "Birthday postcard",
    itemNameRu: "Открытка",
    ru: "Ура… Открытка без адреса.",
    en: "A postcard with no address.",
    a11y: "Murzik holds the mysterious birthday postcard. In the corner there is a small painted ginger cat — just like on the postcard from Paris.",
    image: pic("athens/reward-7"),
    steps: ["Murzik reads the postcard again and again.", "The handwriting is the same as on the Paris postcard.", "In the corner there is a little painted ginger cat.", "Someone knows where he is."],
    bridge: "Murzik cannot sleep. He looks at the stamp on the postcard…",
  },
};
