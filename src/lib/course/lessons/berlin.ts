import { pic } from "../art";
import { choice, fill, line, listen, match, missing, speak, spell, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Berlin · «Время и планы» · lessons 1–7.
 * Murzik and Tom rent an attic room from Irina, a Russian woman who has lived in Berlin for years.
 * Story: they miss a train, and for the first time Murzik notices Lev — a kind old white cat in a hat.
 * The learner does not know yet who Lev is.
 * Past tense is taught only in the plural (мы были, мы гуляли), so the learner never needs a gendered form.
 */

export const berlin1: Lesson = {
  id: "a1-berlin-1",
  level: "A1",
  cityId: "berlin",
  number: 1,
  title: "What Time Is It?",
  minutes: 5,
  goals: ["Ask what time it is", "Say the time on the hour", "Say that it is early or late"],
  vocabNote:
    "Часы means both “a clock” and “a watch”. Который час? literally means “Which hour?”",
  vocab: [
    v("be1-1", "Извините, который час?", "Excuse me, what time is it?", "Tom politely asks a woman in the street, pointing at his wrist.", "Play Извините, который час", pic("berlin/1-1")),
    v("be1-2", "Сейчас два часа.", "It's two o'clock now.", "A big round clock face with the hands at two o'clock.", "Play Сейчас два часа", pic("berlin/1-2")),
    v("be1-3", "Пять часов.", "Five o'clock.", "A big round clock face with the hands at five o'clock.", "Play Пять часов", pic("berlin/1-3")),
    v("be1-4", "Уже поздно!", "It's late already!", "Murzik yawns under a dark night sky with stars.", "Play Уже поздно", pic("berlin/1-4")),
    v("be1-5", "Ещё рано.", "It's still early.", "Murzik peeks out of a window at a pink sunrise, the street still empty.", "Play Ещё рано", pic("berlin/1-5")),
    v("be1-6", "У тебя есть часы?", "Do you have a watch?", "Murzik looks at Tom's wrist with a questioning face.", "Play У тебя есть часы", pic("berlin/1-6")),
    v("be1-7", "Мои часы не работают.", "My watch doesn't work.", "Tom taps his wristwatch with a puzzled face. The hands do not move.", "Play Мои часы не работают", pic("berlin/1-7")),
  ],
  dialogue: {
    title: "Tom's watch",
    note: "Ирина ждёт нас в шесть means “Irina is expecting us at six”. Ирина is the woman who rents them a room.",
    lines: [
      line("tom", "Мурзик, который час? Мои часы не работают.", "Murzik, what time is it? My watch doesn't work."),
      line("murzik", "Не знаю… Извините, который час?", "I don't know… Excuse me, what time is it?"),
      line("passerby", "Сейчас пять часов.", "It's five o'clock now."),
      line("tom", "Пять часов? Уже поздно!", "Five o'clock? It's late already!"),
      line("murzik", "Нет, Том, ещё рано. Ирина ждёт нас в шесть.", "No, Tom, it's still early. Irina is expecting us at six."),
      line("tom", "Ой, правда! Спасибо!", "Oh, that's right! Thank you!"),
      line("passerby", "Пожалуйста!", "You're welcome!"),
    ],
    gist: choice("be1-d1", "What time is it?", [
      ["Five o'clock.", true],
      ["Six o'clock.", false],
      ["Two o'clock.", false],
    ]),
  },
  grammar: [
    {
      title: "Час, часа or часов?",
      paragraphs: [
        "It works like год, года, лет. One o'clock is just час: Сейчас час. 2, 3, 4 → часа: два часа. 5–12 → часов: пять часов.",
        "Сейчас means “now”. You can also leave it out: Три часа. — It's three o'clock.",
      ],
      examples: [
        { ru: "Сейчас час.", en: "It's one o'clock." },
        { ru: "Сейчас три часа.", en: "It's three o'clock." },
        { ru: "Сейчас восемь часов.", en: "It's eight o'clock." },
      ],
    },
  ],
  tasks: [
    listen("be1-t1", "Listen. What time is it?", "Сейчас четыре часа.", [
      ["4:00", true],
      ["7:00", false],
      ["2:00", false],
    ]),
    match("be1-t2", "Match the Russian with the English.", [
      ["Уже поздно!", "It's late already!"],
      ["Ещё рано.", "It's still early."],
      ["Который час?", "What time is it?"],
    ], { skill: "words" }),
    fill("be1-t3", "Complete.", "Сейчас пять", ".", "часов", ["часов", "часа", "час"], { skill: "grammar" }),
    spell("be1-t4", "Build the word for “a watch / a clock”.", "часы"),
    speak("be1-t5", "Извините, который час?", "Сейчас три часа.", "It's three o'clock now.", {
      help: "Look at your phone and say the real time — just the hour.",
    }),
    listen("be1-t6", "Listen and choose the best reply.", "Сколько тебе лет?", [
      ["Мне двадцать лет.", true],
      ["Сейчас два часа.", false],
      ["Это моя сестра.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bed",
    itemName: "Bed",
    itemNameRu: "Кровать",
    ru: "Ура! У меня кровать!",
    en: "Yay! I have a bed!",
    a11y: "Murzik lies happily on a small wooden bed with a white duvet under a round attic window in Berlin.",
    image: pic("berlin/reward-1"),
    steps: ["Irina takes them up to the attic.", "It has a round window over the courtyard.", "In the corner there is an old wooden bed.", "Murzik jumps on it and laughs."],
    bridge: "Irina says the best flea market in Berlin is open only on Sundays. But what day is it today?",
  },
};

export const berlin2: Lesson = {
  id: "a1-berlin-2",
  level: "A1",
  cityId: "berlin",
  number: 2,
  title: "What Day Is It?",
  minutes: 5,
  goals: ["Name the days of the week", "Say what day it is today", "Say “on Sunday”"],
  vocabNote:
    "Russian days of the week are written with a small letter. The week starts on Monday: понедельник.",
  vocab: [
    v("be2-1", "Какой сегодня день?", "What day is it today?", "Murzik looks at a wall calendar with a curious face, a paw on his chin.", "Play Какой сегодня день", pic("berlin/2-1")),
    v("be2-2", "Сегодня понедельник.", "Today is Monday.", "A row of seven squares for the week. The first square is circled in red.", "Play Сегодня понедельник", pic("berlin/2-2")),
    v("be2-3", "вторник и среда", "Tuesday and Wednesday", "A row of seven squares. The second and third squares are coloured blue.", "Play вторник и среда", pic("berlin/2-3")),
    v("be2-4", "четверг и пятница", "Thursday and Friday", "A row of seven squares. The fourth and fifth squares are coloured green.", "Play четверг и пятница", pic("berlin/2-4")),
    v("be2-5", "суббота и воскресенье", "Saturday and Sunday", "A row of seven squares. The last two squares are coloured yellow, with a little sun on them.", "Play суббота и воскресенье", pic("berlin/2-5")),
    v("be2-6", "неделя: семь дней", "a week: seven days", "A row of seven squares joined into one long bar, like a week planner.", "Play неделя: семь дней", pic("berlin/2-6b")),
    v("be2-7", "в воскресенье", "on Sunday", "Murzik dreams of a busy flea market full of old things, a little sun above it.", "Play в воскресенье", pic("berlin/2-7")),
  ],
  dialogue: {
    title: "When is the flea market?",
    note: "Блошиный рынок is a flea market. Долго! means “That's so long!”",
    lines: [
      line("murzik", "Ирина, какой сегодня день?", "Irina, what day is it today?"),
      line("irina", "Сегодня понедельник.", "Today is Monday."),
      line("murzik", "А когда блошиный рынок?", "And when is the flea market?"),
      line("irina", "В воскресенье.", "On Sunday."),
      line("murzik", "В воскресенье? Вторник, среда, четверг, пятница, суббота… Долго!", "On Sunday? Tuesday, Wednesday, Thursday, Friday, Saturday… That's so long!"),
      line("tom", "Ничего, Мурзик. Завтра вторник — это тоже хорошо!", "Never mind, Murzik. Tomorrow is Tuesday — that's good too!"),
    ],
    gist: choice("be2-d1", "When is the flea market?", [
      ["On Sunday.", true],
      ["On Monday.", false],
      ["On Tuesday.", false],
    ]),
  },
  grammar: [
    {
      title: "On Monday: в + day",
      paragraphs: [
        "To say “on” a day, use в: в понедельник, в четверг, в воскресенье. Before вторник it is во: во вторник.",
        "Days ending in -а change -а to -у: среда → в среду, пятница → в пятницу, суббота → в субботу.",
      ],
      examples: [
        { ru: "в понедельник", en: "on Monday" },
        { ru: "в субботу", en: "on Saturday" },
        { ru: "во вторник", en: "on Tuesday" },
      ],
    },
  ],
  tasks: [
    match("be2-t1", "Match the days.", [
      ["понедельник", "Monday"],
      ["среда", "Wednesday"],
      ["пятница", "Friday"],
      ["воскресенье", "Sunday"],
    ], { skill: "words" }),
    listen("be2-t2", "Listen. What day is it today?", "Сегодня четверг.", [
      ["Thursday", true],
      ["Tuesday", false],
      ["Saturday", false],
    ]),
    fill("be2-t3", "Complete: “on Saturday”.", "в", "", "субботу", ["субботу", "суббота", "субботе"], { skill: "grammar" }),
    spell("be2-t4", "Build the word for “Wednesday”.", "среда"),
    speak("be2-t5", "Какой сегодня день?", "Сегодня среда.", "Today is Wednesday.", {
      help: "Say what day it really is today.",
    }),
    listen("be2-t6", "Listen. What did you hear?", "Уже поздно!", [
      ["Уже поздно!", true],
      ["Ещё рано.", false],
      ["Пять часов.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "calendar",
    itemName: "Wall calendar",
    itemNameRu: "Календарь",
    ru: "Ура! Календарь на стену!",
    en: "Yay! A calendar for my wall!",
    a11y: "Murzik pins a big wall calendar with pictures of Berlin onto the attic wall. One square is circled in red.",
    image: pic("berlin/reward-2"),
    steps: ["Irina gives Murzik an old wall calendar.", "He pins it on the wall.", "He circles Sunday in red.", "Only six days to wait!"],
    bridge: "Before Sunday, Tom wants a day trip out of the city. They will need the train timetable.",
  },
};

export const berlin3: Lesson = {
  id: "a1-berlin-3",
  level: "A1",
  cityId: "berlin",
  number: 3,
  title: "What Time Is the Train?",
  minutes: 6,
  goals: ["Ask when a train leaves", "Understand a time like 9:30", "Ask which platform"],
  vocabNote:
    "In timetables Russians use the 24-hour clock and say times as numbers: девять тридцать (9:30), восемнадцать ноль-ноль (18:00).",
  vocab: [
    v("be3-1", "Во сколько поезд?", "What time is the train?", "Tom and Murzik look up at a big station clock with a curious face.", "Play Во сколько поезд", pic("berlin/3-1")),
    v("be3-2", "В девять тридцать.", "At nine thirty.", "A station clock with the hands at half past nine, next to a waiting train.", "Play В девять тридцать", pic("berlin/3-2")),
    v("be3-3", "утром", "in the morning", "Murzik stretches and drinks coffee at a window in bright morning sun.", "Play утром", pic("berlin/3-3")),
    v("be3-4", "вечером", "in the evening", "Murzik reads a book under a lamp; the window shows an orange evening sky.", "Play вечером", pic("berlin/3-4")),
    v("be3-5", "Какая платформа?", "Which platform?", "Murzik stands on a busy station and looks left and right, confused.", "Play Какая платформа", pic("berlin/3-5")),
    v("be3-6", "Платформа три.", "Platform three.", "A platform sign with a big number 3, and a train waiting beside it.", "Play Платформа три", pic("berlin/3-6")),
    v("be3-7", "Сколько ехать?", "How long is the ride?", "Tom looks at a train map with a long line between two stations.", "Play Сколько ехать", pic("berlin/3-7")),
  ],
  dialogue: {
    title: "At the ticket office",
    note: "Ехать час means “It's an hour's ride”. Потсдам is a small town near Berlin. Два билета — two tickets.",
    lines: [
      line("tom", "Здравствуйте! Во сколько поезд в Потсдам?", "Hello! What time is the train to Potsdam?"),
      line("cashier", "Утром, в девять тридцать. Или вечером, в шесть.", "In the morning, at nine thirty. Or in the evening, at six."),
      line("tom", "Утром, пожалуйста. Какая платформа?", "In the morning, please. Which platform?"),
      line("cashier", "Платформа три.", "Platform three."),
      line("murzik", "А сколько ехать?", "And how long is the ride?"),
      line("cashier", "Ехать час.", "It's an hour's ride."),
      line("tom", "Отлично! Два билета, пожалуйста.", "Great! Two tickets, please."),
    ],
    gist: choice("be3-d1", "When is their train?", [
      ["In the morning, at 9:30.", true],
      ["In the evening, at 6:00.", false],
      ["In the morning, at 3:00.", false],
    ]),
  },
  grammar: [
    {
      title: "At what time? — в + time",
      paragraphs: [
        "Который час? asks what time it is now. Во сколько? asks at what time something happens.",
        "Answer with в: в девять, в девять тридцать, в шесть часов.",
      ],
      examples: [
        { ru: "Поезд в восемь.", en: "The train is at eight." },
        { ru: "Поезд в десять тридцать.", en: "The train is at ten thirty." },
      ],
    },
  ],
  tasks: [
    listen("be3-t1", "Listen. What time is the train?", "Поезд в восемь тридцать.", [
      ["8:30", true],
      ["9:30", false],
      ["8:00", false],
    ]),
    choice("be3-t2", "What does вечером mean?", [
      ["in the evening", true],
      ["in the morning", false],
      ["tomorrow", false],
    ], { skill: "words" }),
    fill("be3-t3", "Complete: “The train is at ten.”", "Поезд", "десять.", "в", ["в", "на", "из"], { skill: "grammar" }),
    missing("be3-t4", "Which letter is missing? (platform)", "платф", "рма", "о", ["о", "а", "е"]),
    speak("be3-t5", "Во сколько поезд?", "В девять тридцать.", "At nine thirty.", {
      help: "You work at the station. Tell Tom the train is at 9:30.",
    }),
    listen("be3-t6", "Listen and choose the best reply.", "Какой сегодня день?", [
      ["Сегодня среда.", true],
      ["Сейчас пять часов.", false],
      ["Платформа три.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bookshelf",
    itemName: "Bookshelf",
    itemNameRu: "Книжная полка",
    ru: "Ура! Книжная полка!",
    en: "Yay! A bookshelf!",
    a11y: "Murzik puts a small travel guide onto a wooden bookshelf full of old books in the attic.",
    image: pic("berlin/reward-3"),
    steps: ["Irina has too many books.", "She gives Murzik a little bookshelf.", "It is full of old Russian books.", "Murzik adds his travel guide."],
    bridge: "The train leaves at 9:30. But nobody sets an alarm… What could go wrong?",
  },
};

export const berlin4: Lesson = {
  id: "a1-berlin-4",
  level: "A1",
  cityId: "berlin",
  number: 4,
  title: "We're Late!",
  minutes: 6,
  goals: ["Say that you are late", "Ask when the next train is", "Say “in an hour”"],
  vocabNote:
    "Мы опоздали and Мы проспали are past forms for “we”. They are the same for everyone, so you can use them about yourself and a friend.",
  vocab: [
    v("be4-1", "Быстрее!", "Hurry up!", "Murzik runs through the station, pulling Tom by the hand.", "Play Быстрее", pic("berlin/4-1")),
    v("be4-2", "Мы опоздали!", "We're late! (We missed it!)", "Tom and Murzik stop on the platform, out of breath, with shocked faces.", "Play Мы опоздали", pic("berlin/4-2")),
    v("be4-3", "Поезд ушёл.", "The train has left.", "The back of a train disappears from an empty platform.", "Play Поезд ушёл", pic("berlin/4-3")),
    v("be4-4", "Когда следующий поезд?", "When is the next train?", "Tom asks a ticket clerk at a window, pointing at the timetable.", "Play Когда следующий поезд", pic("berlin/4-4")),
    v("be4-5", "Через час.", "In an hour.", "A clock face with an arrow going one full hour forward.", "Play Через час", pic("berlin/4-5")),
    v("be4-6", "Мы проспали.", "We overslept.", "Murzik and Tom sleep deeply in the attic while the morning sun shines in.", "Play Мы проспали", pic("berlin/4-6")),
    v("be4-7", "Подождём.", "Let's wait.", "Murzik and Tom sit on a station bench with two cups of coffee, waiting calmly.", "Play Подождём", pic("berlin/4-7")),
  ],
  dialogue: {
    title: "The 9:30 train",
    note: "Девять сорок is 9:40. Есть кофе! means “There's coffee!”",
    lines: [
      line("murzik", "Том, быстрее! Который час?", "Tom, hurry up! What time is it?"),
      line("tom", "Девять сорок… Мы опоздали!", "Nine forty… We've missed it!"),
      line("murzik", "Извините, поезд ушёл?", "Excuse me, has the train left?"),
      line("cashier", "Да, поезд ушёл.", "Yes, the train has left."),
      line("tom", "А когда следующий поезд?", "And when is the next train?"),
      line("cashier", "Через час.", "In an hour."),
      line("tom", "Ох, Мурзик… Мы проспали. Извини.", "Oh, Murzik… We overslept. Sorry."),
      line("murzik", "Ничего страшного! Подождём. Есть кофе!", "It's no big deal! Let's wait. There's coffee!"),
    ],
    gist: choice("be4-d1", "What happened?", [
      ["They missed the train.", true],
      ["They lost their tickets.", false],
      ["The train is very late.", false],
    ]),
  },
  grammar: [
    {
      title: "In an hour: через + time",
      paragraphs: [
        "Через means “in” (after some time): через час — in an hour, через два часа — in two hours.",
        "Minutes work the same way: через пять минут — in five minutes.",
      ],
      examples: [
        { ru: "Поезд через час.", en: "The train is in an hour." },
        { ru: "Через пять минут!", en: "In five minutes!" },
      ],
    },
  ],
  tasks: [
    listen("be4-t1", "Listen. When is the next train?", "Следующий поезд через два часа.", [
      ["In two hours.", true],
      ["At two o'clock.", false],
      ["In one hour.", false],
    ]),
    match("be4-t2", "Match the Russian with the English.", [
      ["Быстрее!", "Hurry up!"],
      ["Поезд ушёл.", "The train has left."],
      ["Ничего страшного.", "It's no big deal."],
    ], { skill: "words" }),
    choice("be4-t3", "How do you say “The train is in an hour”?", [
      ["Поезд через час.", true],
      ["Поезд в час.", false],
      ["Поезд один час.", false],
    ], { skill: "grammar" }),
    spell("be4-t4", "Build the word for “train”.", "поезд"),
    speak("be4-t5", "Мы опоздали!", "Ничего страшного!", "It's no big deal!", {
      help: "Your friend is upset. Calm them down aloud.",
    }),
    listen("be4-t6", "Listen and choose the best reply.", "Какая платформа?", [
      ["Платформа три.", true],
      ["В девять тридцать.", false],
      ["Через час.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "alarm-clock",
    itemName: "Alarm clock",
    itemNameRu: "Будильник",
    ru: "Ура! У меня будильник!",
    en: "Yay! I have an alarm clock!",
    a11y: "Murzik holds a small round red alarm clock with two bells on top. Behind him, on the far end of the platform, a kind old white cat in a grey hat smiles.",
    image: pic("berlin/reward-4"),
    steps: ["Tom buys a little red alarm clock at the station.", "“Never again!” he laughs.", "On the platform, a kind old white cat in a hat smiles at Murzik.", "When Murzik looks again, he is gone."],
    bridge: "They take the next train and have a lovely day. In the evening, Tom has an idea: the cinema!",
  },
};

export const berlin5: Lesson = {
  id: "a1-berlin-5",
  level: "A1",
  cityId: "berlin",
  number: 5,
  title: "Let's Go to the Cinema!",
  minutes: 6,
  goals: ["Invite a friend", "Accept or say you can't", "Agree on a time and a place"],
  vocabNote:
    "Давай пойдём… means “Let's go…”. You know Давай! from Paris. У тебя есть время? literally means “Do you have time?”",
  vocab: [
    v("be5-1", "Давай пойдём в кино!", "Let's go to the cinema!", "Tom holds up two cinema tickets with a big smile.", "Play Давай пойдём в кино", pic("berlin/5-1")),
    v("be5-2", "У тебя есть время?", "Do you have time?", "Tom points at a calendar and looks at a friend with a hopeful face.", "Play У тебя есть время", pic("berlin/5-2")),
    v("be5-3", "Извини, я не могу.", "Sorry, I can't.", "A woman shakes her head kindly and puts a hand on her heart.", "Play Извини, я не могу", pic("berlin/5-3")),
    v("be5-4", "Во сколько встречаемся?", "What time shall we meet?", "Murzik taps his paw on a clock with a questioning look.", "Play Во сколько встречаемся", pic("berlin/5-4")),
    v("be5-5", "В семь часов.", "At seven o'clock.", "A clock face with the hands at seven, next to a glowing cinema entrance at dusk.", "Play В семь часов", pic("berlin/5-5")),
    v("be5-6", "У входа.", "At the entrance.", "Murzik waits by the doors of an old cinema, under bright lights.", "Play У входа", pic("berlin/5-6")),
    v("be5-7", "Договорились!", "Deal! / Agreed!", "Tom and a woman shake hands and smile; Murzik gives a thumbs up.", "Play Договорились", pic("berlin/5-7")),
  ],
  dialogue: {
    title: "An invitation",
    note: "А в пятницу? — And on Friday? Можно! here means “That works!”",
    lines: [
      line("tom", "Ирина, давай пойдём в кино!", "Irina, let's go to the cinema!"),
      line("irina", "Давай! А когда?", "Sure! And when?"),
      line("tom", "У тебя есть время в субботу?", "Do you have time on Saturday?"),
      line("irina", "Извини, в субботу я не могу. А в пятницу?", "Sorry, I can't on Saturday. And on Friday?"),
      line("tom", "Можно! Во сколько встречаемся?", "That works! What time shall we meet?"),
      line("irina", "В семь часов, у входа.", "At seven o'clock, at the entrance."),
      line("murzik", "Договорились!", "Deal!"),
    ],
    gist: choice("be5-d1", "When are they going to the cinema?", [
      ["On Friday at seven.", true],
      ["On Saturday at seven.", false],
      ["On Friday at six.", false],
    ]),
  },
  grammar: [
    {
      title: "Давай пойдём в …",
      paragraphs: [
        "To invite a friend, say Давай пойдём в … and the place: в кино, в музей, в парк, в кафе.",
        "To answer: Давай! (Sure!) or Извини, я не могу. (Sorry, I can't.)",
      ],
      examples: [
        { ru: "Давай пойдём в парк!", en: "Let's go to the park!" },
        { ru: "Давай пойдём в кафе!", en: "Let's go to a café!" },
      ],
    },
  ],
  tasks: [
    listen("be5-t1", "Listen and choose the best reply.", "Во сколько встречаемся?", [
      ["В семь часов.", true],
      ["Договорились!", false],
      ["Сегодня пятница.", false],
    ]),
    choice("be5-t2", "Your friend invites you, but you are busy. What do you say?", [
      ["Извини, я не могу.", true],
      ["Договорились!", false],
      ["Давай!", false],
    ], { skill: "words" }),
    fill("be5-t3", "Complete.", "Давай", "в кино!", "пойдём", ["пойдём", "поезд", "встречаемся"], { skill: "grammar" }),
    missing("be5-t4", "Which letter is missing? (Agreed!)", "Договор", "лись!", "и", ["и", "е", "ы"]),
    speak("be5-t5", "Давай пойдём в кино в субботу?", "Давай! Во сколько встречаемся?", "Sure! What time shall we meet?", {
      help: "Say yes and ask what time you are meeting.",
    }),
    listen("be5-t6", "Listen. What did you hear?", "Мы опоздали!", [
      ["Мы опоздали!", true],
      ["Мы проспали.", false],
      ["Поезд ушёл.", false],
    ], { skill: "review" }),
    tf("be5-t7", "Через час means “in an hour”.", true, "True or false", { skill: "review" }),
  ],
  reward: {
    itemId: "film-poster",
    itemName: "Film poster",
    itemNameRu: "Афиша",
    ru: "Ура! Афиша на стену!",
    en: "Yay! A film poster for my wall!",
    a11y: "Murzik hangs an old colourful film poster with a cat and the moon (no words on it) on the attic wall next to the calendar.",
    image: pic("berlin/reward-5"),
    steps: ["The film is old and very funny.", "After the film the cinema gives away old posters.", "Murzik gets one with a cat and the moon.", "Now it hangs on his wall."],
    bridge: "On Saturday morning Barsik calls from Rome. He wants to hear everything.",
  },
};

export const berlin6: Lesson = {
  id: "a1-berlin-6",
  level: "A1",
  cityId: "berlin",
  number: 6,
  title: "Where Were You Yesterday?",
  minutes: 6,
  goals: ["Say where you and a friend were yesterday", "Say what you did", "Say it was interesting"],
  vocabNote:
    "Past forms for мы and вы end in -ли: мы гуляли, мы смотрели. They are the same for men and women.",
  vocab: [
    v("be6-1", "вчера", "yesterday", "A small calendar page with yesterday's square crossed out, and an arrow pointing back.", "Play вчера", pic("berlin/6-1")),
    v("be6-2", "Где вы были?", "Where were you?", "Barsik on a phone screen leans forward with a curious face.", "Play Где вы были", pic("berlin/6-2")),
    v("be6-3", "Мы были в музее.", "We were at a museum.", "Murzik and Tom look up at a huge dinosaur skeleton in a museum.", "Play Мы были в музее", pic("berlin/6-3")),
    v("be6-4", "Что вы делали?", "What did you do?", "Barsik on a phone screen raises a paw with a questioning look.", "Play Что вы делали", pic("berlin/6-4")),
    v("be6-5", "Мы гуляли.", "We went for a walk.", "Murzik and Tom walk along a river in Berlin with trees and old bridges.", "Play Мы гуляли", pic("berlin/6-5")),
    v("be6-6", "Мы смотрели фильм.", "We watched a film.", "Murzik and Tom sit in a dark cinema with popcorn, their faces lit by the screen.", "Play Мы смотрели фильм", pic("berlin/6-6")),
    v("be6-7", "Было интересно!", "It was interesting!", "Murzik tells a story with wide eyes and both paws in the air.", "Play Было интересно", pic("berlin/6-7")),
  ],
  dialogue: {
    title: "A call from Rome",
    note: "Barsik and Murzik are boys, so they say ты делал, я спал. Спал means “slept” — Barsik is a bit lazy!",
    lines: [
      line("barsik", "Привет, Мурзик! Где вы были вчера?", "Hi, Murzik! Where were you yesterday?"),
      line("murzik", "Привет, Барсик! Мы были в музее.", "Hi, Barsik! We were at a museum."),
      line("barsik", "А что вы делали вечером?", "And what did you do in the evening?"),
      line("murzik", "Мы гуляли, а потом смотрели фильм.", "We went for a walk, and then we watched a film."),
      line("barsik", "Было интересно?", "Was it interesting?"),
      line("murzik", "Очень! А ты? Что ты делал?", "Very! And you? What did you do?"),
      line("barsik", "Я? Я спал!", "Me? I slept!"),
    ],
    gist: choice("be6-d1", "What did Barsik do yesterday?", [
      ["He slept.", true],
      ["He went to a museum.", false],
      ["He watched a film.", false],
    ]),
  },
  grammar: [
    {
      title: "The past for мы and вы: -ли",
      paragraphs: [
        "To talk about the past, take the verb, drop -ть and add -ли: гулять → мы гуляли, смотреть → мы смотрели, делать → вы делали.",
        "Быть (to be) → мы были, вы были. Было интересно — It was interesting.",
      ],
      examples: [
        { ru: "Вчера мы гуляли.", en: "Yesterday we went for a walk." },
        { ru: "Где вы были вчера?", en: "Where were you yesterday?" },
      ],
    },
  ],
  tasks: [
    listen("be6-t1", "Listen. What did they do?", "Мы гуляли в парке.", [
      ["They went for a walk in the park.", true],
      ["They watched a film.", false],
      ["They were at a museum.", false],
    ]),
    match("be6-t2", "Match the Russian with the English.", [
      ["вчера", "yesterday"],
      ["завтра", "tomorrow"],
      ["Было интересно!", "It was interesting!"],
    ], { skill: "words" }),
    fill("be6-t3", "Complete: “Yesterday we watched a film.”", "Вчера мы", "фильм.", "смотрели", ["смотрели", "смотреть", "смотрим"], { skill: "grammar" }),
    spell("be6-t4", "Build the word for “yesterday”.", "вчера"),
    speak("be6-t5", "Что вы делали вчера?", "Мы гуляли и смотрели фильм.", "We went for a walk and watched a film.", {
      help: "Talk about you and a friend (мы): where were you, what did you do?",
    }),
    listen("be6-t6", "Listen and choose the best reply.", "У тебя есть время в субботу?", [
      ["Да, есть.", true],
      ["Мы гуляли.", false],
      ["Через час.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "record-player",
    itemName: "Record player",
    itemNameRu: "Проигрыватель",
    ru: "Ура! Проигрыватель с пластинками!",
    en: "Yay! A record player with records!",
    a11y: "An old suitcase-style record player plays a record on a small table in the attic. Murzik dances next to it with his eyes closed.",
    image: pic("berlin/reward-6"),
    steps: ["Irina brings an old record player.", "It belonged to her mum.", "She has old Russian records too.", "Murzik puts one on and dances."],
    bridge: "Tomorrow is Sunday — flea market day! And their last day in Berlin.",
  },
};

export const berlin7: Lesson = {
  id: "a1-berlin-7",
  level: "A1",
  cityId: "berlin",
  number: 7,
  title: "Weekend Plans",
  minutes: 7,
  goals: ["Ask about plans", "Say what you will do", "Understand times and days by ear"],
  vocabNote:
    "To talk about the future, say буду + a verb: Я буду отдыхать — I will rest. В выходные means “at the weekend”.",
  vocab: [
    v("be7-1", "Какие планы?", "What are your plans?", "Irina sits with a cup of coffee and asks with a friendly smile.", "Play Какие планы", pic("berlin/7-1")),
    v("be7-2", "Что ты будешь делать?", "What will you do?", "Murzik looks at Tom and spreads his paws, asking.", "Play Что ты будешь делать", pic("berlin/7-2")),
    v("be7-3", "Я буду отдыхать.", "I will rest.", "Tom lies on the bed with his eyes closed and a happy, relaxed face.", "Play Я буду отдыхать", pic("berlin/7-3")),
    v("be7-4", "Мы будем гулять.", "We will go for a walk.", "Murzik and Tom put on their coats and scarves by the door.", "Play Мы будем гулять", pic("berlin/7-4")),
    v("be7-5", "потом", "then / later", "Two pictures joined by an arrow: first a cup of coffee, then a walk in the park.", "Play потом", pic("berlin/7-5")),
    v("be7-6", "в выходные", "at the weekend", "Murzik relaxes in the sun on a Saturday, with a little picnic.", "Play в выходные", pic("berlin/7-6")),
    v("be7-7", "Пока не знаю.", "I don't know yet.", "Tom shrugs with a smile and looks at a map full of roads.", "Play Пока не знаю", pic("berlin/7-7")),
  ],
  dialogue: {
    title: "The last day in Berlin",
    note: "Мы идём на рынок — We're going to the market. Фотографии — photos.",
    lines: [
      line("irina", "Ну что, какие планы?", "So, what are your plans?"),
      line("murzik", "Сегодня воскресенье! Мы идём на рынок.", "Today is Sunday! We're going to the market."),
      line("irina", "А потом?", "And then?"),
      line("tom", "Потом я буду отдыхать.", "Then I will rest."),
      line("murzik", "А я буду смотреть фотографии Тома.", "And I will look at Tom's photos."),
      line("irina", "А завтра?", "And tomorrow?"),
      line("tom", "Завтра… пока не знаю. Может быть, новый город!", "Tomorrow… I don't know yet. Maybe a new city!"),
    ],
    gist: choice("be7-d1", "Where are they going today?", [
      ["To the market.", true],
      ["To the cinema.", false],
      ["To the station.", false],
    ]),
  },
  grammar: [
    {
      title: "The future: буду + verb",
      paragraphs: [
        "я буду, ты будешь, мы будем — plus a verb in its dictionary form: Я буду отдыхать. Мы будем гулять.",
        "To ask a friend: Что ты будешь делать? — What will you do?",
      ],
      examples: [
        { ru: "Завтра я буду отдыхать.", en: "Tomorrow I will rest." },
        { ru: "В выходные мы будем гулять.", en: "At the weekend we will go for a walk." },
      ],
    },
  ],
  tasks: [
    listen("be7-t1", "Listen. When is the train?", "Сегодня суббота. Сейчас девять часов. Поезд в десять тридцать, платформа два.", [
      ["At 10:30.", true],
      ["At 9:00.", false],
      ["At 2:00.", false],
    ], { help: "This is your Berlin listening test." }),
    choice("be7-t2", "What day comes after пятница?", [
      ["суббота", true],
      ["четверг", false],
      ["воскресенье", false],
    ], { skill: "words" }),
    fill("be7-t3", "Complete: “I will rest.”", "Я", "отдыхать.", "буду", ["буду", "будешь", "будем"], { skill: "grammar" }),
    spell("be7-t4", "Build the word for “plans”.", "планы"),
    speak("be7-t5", "Что ты будешь делать в выходные?", "В выходные я буду отдыхать.", "At the weekend I will rest.", {
      help: "Tell Irina your real plans for the weekend.",
    }),
    listen("be7-t6", "Listen and choose the best reply.", "Мы опоздали!", [
      ["Ничего страшного!", true],
      ["Договорились!", false],
      ["Было интересно!", false],
    ], { skill: "review" }),
    listen("be7-t7", "Listen. What time are they meeting?", "Встречаемся в семь часов, у входа.", [
      ["At seven o'clock.", true],
      ["At six o'clock.", false],
      ["At eleven o'clock.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bicycle",
    itemName: "Bicycle",
    itemNameRu: "Велосипед",
    ru: "Ура! У меня велосипед!",
    en: "Yay! I have a bicycle!",
    a11y: "Murzik sits proudly on a small old blue bicycle with a basket at a busy Sunday flea market. Far behind the stalls, a kind old white cat in a grey hat smiles and waves.",
    image: pic("berlin/reward-7"),
    steps: ["At the flea market Murzik finds an old blue bicycle.", "It has a little basket for his scarf.", "Tom paints a small cat on it.", "Behind the stalls, the white cat in the hat smiles and disappears into the crowd."],
    bridge: "The bags are packed. The red alarm clock rings: time to go!",
  },
};
