import { pic } from "../art";
import { choice, fill, letter, line, listen, match, read, script, speak, tf, v } from "../make";
import type { Lesson } from "../types";

/*
 * Helsinki · «Здоровье» · A2 lessons 1–7.
 * Murzik and Tom rent a small wooden cabin on an island near the city, with a sauna by the sea.
 * On the first evening Tom goes from the hot sauna straight into the cold sea — and catches a cold.
 * Marina (about 45), a Russian nurse who has worked in Helsinki for twenty years, lives in the next cabin;
 * she helps: the clinic, the pharmacy, how to take medicine. Her mother ran this sauna thirty years ago,
 * and a ginger cat painted its sign — before she went west, to the fjords of Norway.
 * Grammar: надо / нужно / нельзя + dative, сколько раз в день, до / после + genitive, health phrases.
 */

const p = (name: string) => pic(`helsinki/${name}`);

export const helsinki1: Lesson = {
  id: "a2-helsinki-1",
  level: "A2",
  cityId: "helsinki",
  number: 1,
  title: "The Sauna",
  minutes: 8,
  goals: ["Talk about the sauna", "Say what's good or bad for you: полезно, вредно", "Give a warning: Осторожно! Не сиди так долго!"],
  vocabNote: "In Finland almost every home has a sauna. Полезно — it's good for you; вредно — it's bad for you.",
  vocab: [
    v("he1-1", "сауна", "sauna", "A small wooden sauna on the rocks by the sea, smoke from the chimney.", "Listen to сауна", p("1-1")),
    v("he1-2", "парилка", "steam room (the hot part of the sauna)", "Inside: wooden benches, a stove with hot stones.", "Listen to парилка", p("1-2")),
    v("he1-3", "жарко, как в Африке", "hot as Africa", "Tom red as a tomato on the top bench.", "Listen to жарко, как в Африке", p("1-3")),
    v("he1-4", "нырнуть в море", "to dive into the sea", "Tom jumps off a wooden pier into the grey sea.", "Listen to нырнуть в море", p("1-4")),
    v("he1-5", "ледяная вода", "ice-cold water", "Steam rising from Tom's head in the cold water.", "Listen to ледяная вода", p("1-5")),
    v("he1-6", "Это полезно.", "It's good for you.", "Marina smiles, wrapped in a towel.", "Listen to Это полезно", p("1-6")),
    v("he1-7", "Это вредно.", "It's bad for you.", "Marina frowns and wags a finger.", "Listen to Это вредно", p("1-7")),
    v("he1-8", "Не сиди так долго!", "Don't sit there so long!", "A sand timer on the sauna wall.", "Listen to Не сиди так долго", p("1-8")),
  ],
  letters: [
    letter("ледяная", "li-di-NA-ya: stress on НА.", "ледяная вода", "ice-cold water"),
    letter("вредно / полезно", "VRED-na, pa-LEZ-na: the final о sounds like а.", "Это полезно.", "It's good for you."),
  ],
  dialogue: {
    title: "By the sea",
    note: "Marina is a Russian nurse who has lived in Helsinki for twenty years. She lives in the next cabin.",
    lines: [
      line("marina", "Добро пожаловать! Я Марина, ваша соседка. Сауна уже горячая.", "Welcome! I'm Marina, your neighbour. The sauna is already hot."),
      line("tom", "Ух! В парилке жарко, как в Африке!", "Phew! In the steam room it's as hot as Africa!"),
      line("marina", "Не сиди так долго, Том. Десять минут — это полезно, а час — вредно.", "Don't sit there so long, Tom. Ten minutes is good for you, but an hour is bad."),
      line("tom", "А теперь — нырнуть в море!", "And now — dive into the sea!"),
      line("murzik", "Том, там ледяная вода! Осторожно!", "Tom, the water is ice-cold! Careful!"),
      line("tom", "Ааа! Холодно! Но как здорово!", "Aaah! Cold! But how great!"),
    ],
    gist: choice("he1-d1", "What does Tom do after the steam room?", [
      ["He dives into the cold sea.", true],
      ["He goes to bed.", false],
      ["He drinks hot tea.", false],
    ]),
  },
  grammar: [
    {
      title: "Полезно, вредно + infinitive",
      paragraphs: [
        "Полезно / вредно (good / bad for you) + infinitive: Полезно ходить в сауну. Вредно сидеть в парилке час.",
        "For someone — dative: Тебе полезно гулять. Детям вредно пить кофе.",
      ],
      examples: [
        { ru: "Плавать очень полезно.", en: "Swimming is very good for you." },
        { ru: "Вредно много сидеть за компьютером.", en: "It's bad for you to sit at the computer a lot." },
      ],
    },
  ],
  tasks: [
    listen("he1-t1", "Listen. How long is it good to stay in the steam room?", "Десять минут — это полезно, а час — вредно.", [
      ["About ten minutes.", true],
      ["An hour.", false],
      ["As long as you like.", false],
    ]),
    choice("he1-t2", "“Swimming is good for you.” Which is right?", [
      ["Плавать полезно.", true],
      ["Плавать полезный.", false],
      ["Плавание полезно есть.", false],
    ], { skill: "grammar" }),
    fill("he1-t3", "Choose the right form: “Coffee is bad for children.”", "", "вредно пить кофе.", "Детям", ["Детям", "Дети", "Детей"], { skill: "grammar" }),
    read("he1-t4", "Read the sign in the sauna. How long should you stay in the steam room?", "ПРАВИЛА САУНЫ\nВ парилке — не больше 10–15 минут.\nПосле парилки — душ или море.\nПейте воду!", [
      ["Not more than 10–15 minutes.", true],
      ["At least an hour.", false],
      ["Five minutes only on Sundays.", false],
    ]),
    match("he1-t5", "Match the Russian with the English.", [
      ["парилка", "steam room"],
      ["ледяная вода", "ice-cold water"],
      ["Это полезно.", "It's good for you."],
      ["Это вредно.", "It's bad for you."],
    ], { skill: "words" }),
    tf("he1-t6", "Marina says an hour in the steam room is good for you.", false, "True or false?", { skill: "listening" }),
    speak("he1-t7", "Что полезно для здоровья, а что вредно?", "Полезно гулять и плавать. А вредно много сидеть и поздно ложиться спать.", "It's good to walk and swim. And it's bad to sit a lot and go to bed late.", {
      help: "Say out loud what is good and bad for your health.",
    }),
  ],
  reward: {
    itemId: "bathtowel",
    itemName: "Big striped towel",
    itemNameRu: "Большое полотенце",
    ru: "Полотенце — для сауны!",
    en: "A towel — for the sauna!",
    a11y: "A big blue-and-white striped towel hangs on a wooden hook in a small cabin with pine walls and a window onto the sea.",
    image: p("reward-1"),
    steps: ["Their little wooden cabin stands on an island by the sea.", "Marina brings two big striped towels.", "“В Финляндии без полотенца — никуда!”", "One hangs by the door. The other is on Tom — he's shivering."],
    bridge: "In the morning Tom can't get up. His nose is running, his throat hurts. “Кажется, я простудился…”",
  },
};

export const helsinki2: Lesson = {
  id: "a2-helsinki-2",
  level: "A2",
  cityId: "helsinki",
  number: 2,
  title: "I've Caught a Cold",
  minutes: 8,
  goals: ["Describe a cold: насморк, кашель", "Say how long you've been ill", "Use уже + present: Я уже два дня болею"],
  vocabNote: "Простудиться — to catch a cold. Russian says “I've been ill for two days” with the present: Я болею уже два дня.",
  vocab: [
    v("he2-1", "Я простудился(-лась).", "I've caught a cold.", "Tom in bed with a red nose, under two blankets.", "Listen to Я простудился", p("2-1")),
    v("he2-2", "насморк", "runny nose", "A pile of used tissues next to the bed.", "Listen to насморк", p("2-2")),
    v("he2-3", "кашель", "cough", "Tom coughs into his elbow.", "Listen to кашель", p("2-3")),
    v("he2-4", "чихать", "to sneeze", "Tom sneezes — a tissue flies away.", "Listen to чихать", p("2-4")),
    v("he2-5", "Мне трудно глотать.", "It's hard for me to swallow.", "Tom touches his throat and winces.", "Listen to Мне трудно глотать", p("2-5")),
    v("he2-6", "градусник", "thermometer", "A thermometer showing 38.2.", "Listen to градусник", p("2-6")),
    v("he2-7", "уже второй день", "for the second day now", "A calendar: two days crossed out.", "Listen to уже второй день", p("2-7")),
    v("he2-8", "Будь здоров!", "Bless you! (to a man)", "Murzik holds out a tissue to sneezing Tom.", "Listen to Будь здоров", p("2-8")),
  ],
  letters: [
    letter("насморк", "NAS-mərk: stress on the first syllable; the unstressed о is weak (like the a in 'about').", "У меня насморк.", "I have a runny nose."),
    letter("Будь здоров!", "To a woman: Будь здорова! Polite or plural: Будьте здоровы! Say zda-ROF: the д is pronounced, and the final в sounds like ф.", "Будь здоров!", "Bless you!"),
  ],
  dialogue: {
    title: "Tom is ill",
    note: "Чихнуть — to sneeze once. Тридцать восемь и два — 38.2 °C.",
    lines: [
      line("tom", "Кажется, я простудился. Апчхи!", "I think I've caught a cold. Atchoo!"),
      line("murzik", "Будь здоров! Что у тебя болит?", "Bless you! What hurts?"),
      line("tom", "Горло. Мне трудно глотать. И насморк, и кашель.", "My throat. It's hard to swallow. And a runny nose, and a cough."),
      line("marina", "Давай измерим температуру. Вот градусник.", "Let's take your temperature. Here's the thermometer."),
      line("marina", "Тридцать восемь и два. Ты давно болеешь?", "Thirty-eight point two. Have you been ill long?"),
      line("tom", "Нет, только второй день… после той сауны.", "No, only the second day… since that sauna."),
    ],
    gist: choice("he2-d1", "What is Tom's temperature?", [
      ["38.2.", true],
      ["36.6.", false],
      ["40.", false],
    ]),
  },
  grammar: [
    {
      title: "How long: уже + present",
      paragraphs: [
        "Russian uses the present for something that started in the past and still goes on: Я болею уже два дня (I've been ill for two days). Мы живём здесь неделю.",
        "Ask: Как давно ты болеешь? / Сколько дней у тебя температура?",
      ],
      examples: [
        { ru: "У меня насморк уже три дня.", en: "I've had a runny nose for three days." },
        { ru: "Марина живёт в Хельсинки двадцать лет.", en: "Marina has lived in Helsinki for twenty years." },
      ],
    },
  ],
  tasks: [
    listen("he2-t1", "Listen. What hurts Tom?", "Горло. Мне трудно глотать. И насморк, и кашель.", [
      ["His throat; he also has a runny nose and a cough.", true],
      ["His stomach.", false],
      ["His leg.", false],
    ]),
    choice("he2-t2", "“I've been ill for three days.” Which is right?", [
      ["Я болею уже три дня.", true],
      ["Я болел уже три дня сейчас.", false],
      ["Я болею уже три дней.", false],
    ], { skill: "grammar" }),
    fill("he2-t3", "Choose the right word: “Bless you!” to a woman.", "Будь", "!", "здорова", ["здорова", "здоров", "здоровы"], { skill: "grammar" }),
    read("he2-t4", "Read Tom's text to Lena. How many days has he been ill?", "Лена, привет! Я простудился 😷\nТемпература 38, насморк, кашель.\nБолею уже второй день. Мурзик варит мне суп.", [
      ["Two days.", true],
      ["A week.", false],
      ["One hour.", false],
    ]),
    match("he2-t5", "Match the Russian with the English.", [
      ["насморк", "runny nose"],
      ["кашель", "cough"],
      ["градусник", "thermometer"],
      ["чихать", "to sneeze"],
    ], { skill: "words" }),
    script("he2-t6", "Your friend sneezes.", [
      { speaker: "Friend", text: "Апчхи!" },
      { speaker: "You", answer: "Будь здоров! Ты простудился?", options: ["Будь здоров! Ты простудился?", "Это полезно!", "Ледяная вода!"] },
      { speaker: "Friend", text: "Да, у меня насморк уже три дня." },
      { speaker: "You", answer: "Давай измерим температуру.", options: ["Давай измерим температуру.", "Давай нырнём в море.", "Давай чихать."] },
    ], { skill: "speaking" }),
    speak("he2-t7", "Как ты себя чувствуешь?", "Плохо. Я простудился(-лась). У меня насморк и кашель уже два дня.", "Not good. I've caught a cold. I've had a runny nose and a cough for two days.", {
      help: "Describe your cold out loud.",
    }),
  ],
  reward: {
    itemId: "thermometer",
    itemName: "Thermometer",
    itemNameRu: "Градусник",
    ru: "Градусник — чтобы следить за Томом!",
    en: "A thermometer — to keep an eye on Tom!",
    a11y: "A glass thermometer lies in a little case on the bedside table, next to a box of tissues.",
    image: p("reward-2"),
    steps: ["Marina leaves her spare thermometer.", "Murzik takes Tom's temperature every three hours.", "He writes it all down in a little notebook: 38.2… 38.0… 37.8…", "“Ты лучше любой медсестры,” Marina says."],
    bridge: "But the temperature doesn't go down by evening. Marina says: “Надо к врачу. Я тебя запишу.”",
  },
};

export const helsinki3: Lesson = {
  id: "a2-helsinki-3",
  level: "A2",
  cityId: "helsinki",
  number: 3,
  title: "At the Clinic",
  minutes: 8,
  goals: ["Make an appointment", "Understand the doctor's instructions", "Say how you feel now: лучше, хуже"],
  vocabNote: "Записаться к врачу — to make a doctor's appointment. На приём — for an appointment. Что вас беспокоит? — What's the problem? (literally “What's bothering you?”)",
  vocab: [
    v("he3-1", "записаться к врачу", "to make a doctor's appointment", "Marina on the phone, writing a time on a sticky note.", "Listen to записаться к врачу", p("3-1")),
    v("he3-2", "на приём", "for an appointment", "A clinic waiting room with numbered chairs.", "Listen to на приём", p("3-2")),
    v("he3-3", "Что вас беспокоит?", "What's the problem?", "A doctor in a white coat looks up from her desk.", "Listen to Что вас беспокоит", p("3-3")),
    v("he3-4", "Откройте рот.", "Open your mouth.", "Tom opens his mouth wide; the doctor holds a little light.", "Listen to Откройте рот", p("3-4")),
    v("he3-5", "Дышите глубже.", "Breathe deeply.", "The doctor listens with a stethoscope.", "Listen to Дышите глубже", p("3-5")),
    v("he3-6", "обычная простуда", "a common cold", "The doctor smiles and waves a hand.", "Listen to обычная простуда", p("3-6")),
    v("he3-7", "Мне стало хуже.", "I feel worse. (It got worse.)", "Tom slumps in his chair.", "Listen to Мне стало хуже", p("3-7")),
    v("he3-8", "Мне полегчало.", "I feel a bit better. (colloquial)", "Tom sits up and smiles a little.", "Listen to Мне полегчало", p("3-8")),
  ],
  letters: [
    letter("беспокоит", "bis-pa-KO-it: stress on КО.", "Что вас беспокоит?", "What's the problem?"),
    letter("простуда", "pras-TU-da: stress on ТУ.", "обычная простуда", "a common cold"),
  ],
  dialogue: {
    title: "The doctor",
    note: "The doctor is Finnish and doesn't speak Russian, so Marina translates.",
    lines: [
      line("marina", "Я записала тебя к врачу на приём, на два часа. Я пойду с тобой и переведу.", "I've made you an appointment with the doctor at two. I'll come with you and translate."),
      line("marina", "Доктор спрашивает: что вас беспокоит?", "The doctor asks: what's the problem?"),
      line("tom", "Горло и температура. Вчера мне стало хуже.", "My throat and a temperature. Yesterday I got worse."),
      line("marina", "Откройте рот… Дышите глубже… Не дышите…", "Open your mouth… Breathe deeply… Hold your breath…"),
      line("marina", "Доктор говорит: ничего страшного. Обычная простуда.", "The doctor says: nothing serious. Just a common cold."),
      line("tom", "Ну, тогда мне уже полегчало!", "Well, then I feel better already!"),
    ],
    gist: choice("he3-d1", "What does the doctor say?", [
      ["It's nothing serious, just a cold.", true],
      ["Tom must go to hospital.", false],
      ["Tom has no temperature.", false],
    ]),
  },
  grammar: [
    {
      title: "Мне лучше / хуже — the dative again",
      paragraphs: [
        "How you feel: Мне лучше (I'm better), Мне хуже (I'm worse), Мне стало лучше (I've got better).",
        "Записаться к + dative: к врачу, к зубному врачу. На + time: на два часа, на завтра.",
      ],
      examples: [
        { ru: "Маме стало лучше.", en: "Mum has got better." },
        { ru: "Я хочу записаться к врачу на понедельник.", en: "I'd like to make a doctor's appointment for Monday." },
      ],
    },
  ],
  tasks: [
    listen("he3-t1", "Listen. When is the appointment?", "Я записала тебя к врачу на приём, на два часа.", [
      ["At two o'clock.", true],
      ["At twelve.", false],
      ["Tomorrow morning.", false],
    ]),
    choice("he3-t2", "“Grandma has got better.” Which is right?", [
      ["Бабушке стало лучше.", true],
      ["Бабушки стало лучше.", false],
      ["Бабушку стало лучше.", false],
    ], { skill: "grammar" }),
    fill("he3-t3", "Choose the right form: “I'd like an appointment with the doctor.”", "Я хочу записаться к", ".", "врачу", ["врачу", "врача", "врач"], { skill: "grammar" }),
    read("he3-t4", "Read the appointment card. Which room is the doctor in?", "Поликлиника «Мери»\nПациент: Том\nВремя: 14:00\nКабинет 12, второй этаж", [
      ["Room 12, second floor.", true],
      ["Room 2, twelfth floor.", false],
      ["Room 14.", false],
    ]),
    match("he3-t5", "Match the Russian with the English.", [
      ["Откройте рот.", "Open your mouth."],
      ["Дышите глубже.", "Breathe deeply."],
      ["обычная простуда", "a common cold"],
      ["Мне полегчало.", "I feel a bit better."],
    ], { skill: "words" }),
    script("he3-t6", "Make an appointment by phone.", [
      { speaker: "Clinic", text: "Поликлиника, слушаю." },
      { speaker: "You", answer: "Здравствуйте! Я хочу записаться к врачу.", options: ["Здравствуйте! Я хочу записаться к врачу.", "Здравствуйте! Дышите глубже.", "Здравствуйте! Откройте рот."] },
      { speaker: "Clinic", text: "Что вас беспокоит?" },
      { speaker: "You", answer: "У меня температура и кашель.", options: ["У меня температура и кашель.", "Мне уже лучше, спасибо.", "Ничего страшного."] },
    ], { skill: "speaking" }),
    speak("he3-t7", "Как вы себя чувствуете сегодня?", "Спасибо, мне уже лучше. Вчера было хуже, но сегодня температуры нет.", "Thank you, I'm already better. Yesterday was worse, but today I have no temperature.", {
      help: "Tell the doctor out loud how you feel today.",
    }),
  ],
  reward: {
    itemId: "hotwaterbottle",
    itemName: "Hot water bottle",
    itemNameRu: "Грелка",
    ru: "Грелка — тёпленькая!",
    en: "A hot water bottle — nice and warm!",
    a11y: "A red rubber hot water bottle in a knitted cover with a reindeer on it lies on the bed.",
    image: p("reward-3"),
    steps: ["After the clinic Marina gives Tom a hot water bottle.", "It has a knitted cover with a reindeer on it.", "Murzik tries it first. Then he gives it to Tom. Reluctantly.", "“Только когда температура спадёт!” Marina says. Tom falls asleep holding it."],
    bridge: "The doctor wrote a prescription. Now — the pharmacy. And Murzik has to understand how to take everything.",
  },
};

export const helsinki4: Lesson = {
  id: "a2-helsinki-4",
  level: "A2",
  cityId: "helsinki",
  number: 4,
  title: "At the Pharmacy",
  minutes: 8,
  goals: ["Buy medicine", "Understand how to take it: три раза в день, после еды", "Use до / после + genitive"],
  vocabNote: "Как принимать? — How should I take it? По одной таблетке три раза в день — one tablet three times a day.",
  vocab: [
    v("he4-1", "сироп от кашля", "cough syrup", "A brown bottle of cough syrup with a spoon.", "Listen to сироп от кашля", p("4-1")),
    v("he4-2", "капли в нос", "nose drops", "A small bottle of nose drops.", "Listen to капли в нос", p("4-2")),
    v("he4-3", "Как принимать?", "How should I take it?", "Murzik holds up the box and looks puzzled.", "Listen to Как принимать", p("4-3")),
    v("he4-4", "на ночь", "at night, before bed", "A crescent moon over the cabin; the nose drops on the bedside table.", "Listen to на ночь", p("4-4")),
    v("he4-5", "натощак", "on an empty stomach", "An empty plate and a glass of water with a tablet.", "Listen to натощак", p("4-5")),
    v("he4-6", "до еды", "before meals", "A spoon of syrup, then a full plate.", "Listen to до еды", p("4-6")),
    v("he4-7", "по одной таблетке", "one tablet at a time", "One small white tablet on a paw.", "Listen to по одной таблетке", p("4-7")),
    v("he4-8", "без рецепта", "without a prescription", "A shelf in the pharmacy, “no prescription needed”.", "Listen to без рецепта", p("4-8")),
  ],
  letters: [
    letter("кашля", "KASH-lya: stress on КА; ш is always hard, and я makes the л soft.", "сироп от кашля", "cough syrup"),
    letter("еды", "yi-DY: stress on the end.", "после еды", "after meals"),
  ],
  dialogue: {
    title: "At the pharmacy",
    note: "The pharmacist speaks some Russian — after Finnish and Swedish, Russian is the most common native language in Helsinki.",
    lines: [
      line("murzik", "Здравствуйте! Вот рецепт. И ещё сироп от кашля, пожалуйста.", "Hello! Here's the prescription. And some cough syrup too, please."),
      line("pharmacist", "Сироп можно без рецепта. Вот, пожалуйста.", "You can buy the syrup without a prescription. Here you are."),
      line("murzik", "Как его принимать?", "How should he take it?"),
      line("pharmacist", "По одной ложке три раза в день, после еды.", "One spoon three times a day, after meals."),
      line("murzik", "А таблетки?", "And the tablets?"),
      line("pharmacist", "По одной таблетке два раза в день, до еды. И капли в нос — на ночь.", "One tablet twice a day, before meals. And nose drops — at night."),
    ],
    gist: choice("he4-d1", "How should Tom take the syrup?", [
      ["One spoon three times a day, after meals.", true],
      ["Two spoons before meals.", false],
      ["Only at night.", false],
    ]),
  },
  grammar: [
    {
      title: "How often and when",
      paragraphs: [
        "How often: раз в день (once a day), два / три раза в день, пять раз в день. По одной таблетке, по две таблетки — one / two tablets each time.",
        "When: до + genitive (before), после + genitive (after): до еды, после еды, после обеда, до сна.",
      ],
      examples: [
        { ru: "Принимайте по две таблетки два раза в день.", en: "Take two tablets twice a day." },
        { ru: "Не пейте кофе до сна.", en: "Don't drink coffee before going to sleep." },
      ],
    },
  ],
  tasks: [
    listen("he4-t1", "Listen. When should Tom use the nose drops?", "И капли в нос — на ночь.", [
      ["At night.", true],
      ["After meals.", false],
      ["In the morning.", false],
    ]),
    choice("he4-t2", "“Three times a day.” Which is right?", [
      ["три раза в день", true],
      ["три раз в день", false],
      ["трижды в дню", false],
    ], { skill: "grammar" }),
    fill("he4-t3", "Choose the right form: “after lunch”", "после", "", "обеда", ["обеда", "обед", "обедом"], { skill: "grammar" }),
    read("he4-t4", "Read the label. What's the maximum per day?", "СИРОП ОТ КАШЛЯ\nВзрослым: по 1 ложке 3 раза в день, после еды.\nНе больше 4 ложек в день.\nДетям до 6 лет — нельзя.", [
      ["Four spoons.", true],
      ["Three spoons.", false],
      ["Six spoons.", false],
    ]),
    match("he4-t5", "Match the Russian with the English.", [
      ["сироп от кашля", "cough syrup"],
      ["капли в нос", "nose drops"],
      ["до еды", "before meals"],
      ["без рецепта", "without a prescription"],
    ], { skill: "words" }),
    tf("he4-t6", "You need a prescription for the cough syrup.", false, "True or false?", { skill: "listening" }),
    speak("he4-t7", "Как принимать это лекарство?", "По одной таблетке три раза в день после еды. И не пейте кофе до сна.", "One tablet three times a day after meals. And don't drink coffee before bed.", {
      help: "Explain out loud how to take a medicine.",
    }),
  ],
  reward: {
    itemId: "pillbox",
    itemName: "Pill box",
    itemNameRu: "Таблетница",
    ru: "Таблетница — утро, день, вечер!",
    en: "A pill box — morning, afternoon, evening!",
    a11y: "A small plastic pill box with three coloured compartments marked Утро, День, Вечер sits on the windowsill.",
    image: p("reward-4"),
    steps: ["Murzik is worried he'll mix up the medicine.", "The pharmacist gives him a pill box with three compartments.", "He writes on it: Утро, День, Вечер.", "Tom's medicine is now perfectly organised."],
    bridge: "Marina gives the rules: what Tom needs to do — and what he mustn't do. Tom isn't happy.",
  },
};

export const helsinki5: Lesson = {
  id: "a2-helsinki-5",
  level: "A2",
  cityId: "helsinki",
  number: 5,
  title: "You Need to Rest!",
  minutes: 8,
  goals: ["Give health advice with надо, нужно, нельзя", "Use the dative: тебе надо, Тому нельзя", "Talk about home remedies"],
  vocabNote: "Надо and нужно both mean “need to, must”. Нельзя — mustn't, not allowed. The person is in the dative: Тому надо лежать.",
  vocab: [
    v("he5-1", "Тебе надо лежать.", "You need to stay in bed.", "Marina points firmly at the bed.", "Listen to Тебе надо лежать", p("5-1")),
    v("he5-2", "Тебе нельзя выходить.", "You mustn't go out.", "Tom at the door with his camera; Marina blocks the way.", "Listen to Тебе нельзя выходить", p("5-2")),
    v("he5-3", "пить больше воды", "to drink more water", "A big jug of water and a glass.", "Listen to пить больше воды", p("5-3")),
    v("he5-4", "чай с мёдом и лимоном", "tea with honey and lemon", "A steaming mug with a lemon slice and a honey jar.", "Listen to чай с мёдом и лимоном", p("5-4")),
    v("he5-5", "куриный бульон", "chicken soup (broth)", "A bowl of clear soup with carrots and herbs.", "Listen to куриный бульон", p("5-5")),
    v("he5-6", "Тебе надо отдохнуть.", "You need to rest.", "Tom in bed, eyes closed, a book on his chest.", "Listen to Тебе надо отдохнуть", p("5-6")),
    v("he5-7", "Выздоравливай!", "Get well!", "Murzik pats Tom's blanket.", "Listen to Выздоравливай", p("5-7")),
    v("he5-8", "Мне скучно лежать!", "I'm bored lying in bed!", "Tom stares at the ceiling.", "Listen to Мне скучно лежать", p("5-8")),
  ],
  letters: [
    letter("выздоравливай", "vyz-da-RAV-li-vay: a long word, stress on РАВ.", "Выздоравливай!", "Get well!"),
    letter("мёдом", "ё is always stressed: MYO-dam.", "чай с мёдом", "tea with honey"),
  ],
  dialogue: {
    title: "Marina's rules",
    note: "Ворчать — to grumble. Tom grumbles; Marina doesn't listen.",
    lines: [
      line("marina", "Так, Том. Тебе надо лежать три дня. И пить больше воды.", "Right, Tom. You need to stay in bed for three days. And drink more water."),
      line("tom", "Три дня? Но я хочу фотографировать город!", "Three days? But I want to photograph the city!"),
      line("marina", "Нельзя! Тебе нельзя выходить, пока есть температура.", "No! You mustn't go out while you have a temperature."),
      line("murzik", "Я сварю куриный бульон. И чай с мёдом и лимоном.", "I'll make chicken soup. And tea with honey and lemon."),
      line("tom", "Мне скучно лежать!", "I'm bored lying in bed!"),
      line("marina", "Тебе надо отдохнуть. Выздоравливай!", "You need to rest. Get well!"),
    ],
    gist: choice("he5-d1", "Why can't Tom go out?", [
      ["He still has a temperature.", true],
      ["It's raining.", false],
      ["The camera is broken.", false],
    ]),
  },
  grammar: [
    {
      title: "Надо, нужно, нельзя + dative",
      paragraphs: [
        "Dative + надо / нужно + infinitive: Тебе надо лежать. Маме нужно отдохнуть.",
        "Dative + нельзя + infinitive: Тому нельзя выходить. Детям нельзя пить кофе. Past: Мне надо было (I had to), future: Мне надо будет (I'll have to).",
      ],
      examples: [
        { ru: "Вам надо больше спать.", en: "You need to sleep more." },
        { ru: "Вчера мне надо было работать допоздна.", en: "Yesterday I had to work late." },
      ],
    },
  ],
  tasks: [
    listen("he5-t1", "Listen. How long must Tom stay in bed?", "Тебе надо лежать три дня. И пить больше воды.", [
      ["Three days.", true],
      ["Three hours.", false],
      ["A week.", false],
    ]),
    choice("he5-t2", "“Tom mustn't go out.” Which is right?", [
      ["Тому нельзя выходить.", true],
      ["Том нельзя выходить.", false],
      ["Тома нельзя выходит.", false],
    ], { skill: "grammar" }),
    fill("he5-t3", "Choose the right form: “You need to sleep more.” (polite)", "", "надо больше спать.", "Вам", ["Вам", "Вы", "Вас"], { skill: "grammar" }),
    read("he5-t4", "Read Murzik's list on the fridge. What can Tom eat?", "ТОМУ:\nНадо: лежать, пить воду, чай с мёдом.\nМожно: куриный бульон, кашу.\nНельзя: выходить, мороженое, сауну!", [
      ["Chicken soup and porridge.", true],
      ["Ice cream.", false],
      ["Anything he likes.", false],
    ]),
    match("he5-t5", "Match the Russian with the English.", [
      ["куриный бульон", "chicken soup"],
      ["пить больше воды", "to drink more water"],
      ["Выздоравливай!", "Get well!"],
      ["Тебе надо отдохнуть.", "You need to rest."],
    ], { skill: "words" }),
    script("he5-t6", "Your friend is ill and wants to go out.", [
      { speaker: "Friend", text: "Я хочу пойти гулять!" },
      { speaker: "You", answer: "Нельзя! Тебе надо лежать.", options: ["Нельзя! Тебе надо лежать.", "Нельзя! Ты надо лежать.", "Будь здоров!"] },
      { speaker: "Friend", text: "Мне скучно…" },
      { speaker: "You", answer: "Я сделаю тебе чай с мёдом. Выздоравливай!", options: ["Я сделаю тебе чай с мёдом. Выздоравливай!", "Я сделаю тебе сауну.", "Ледяная вода!"] },
    ], { skill: "speaking" }),
    speak("he5-t7", "Что надо делать, когда простудишься?", "Надо лежать, пить больше воды и чай с мёдом. Нельзя выходить, если есть температура.", "You need to stay in bed, drink more water and tea with honey. You mustn't go out if you have a temperature.", {
      help: "Give health advice out loud with надо and нельзя.",
    }),
  ],
  reward: {
    itemId: "honeyjar",
    itemName: "Jar of forest honey",
    itemNameRu: "Банка лесного мёда",
    ru: "Мёд — лучшее лекарство!",
    en: "Honey — the best medicine!",
    a11y: "A glass jar of dark forest honey with a wooden dipper stands on the little kitchen table next to a lemon.",
    image: p("reward-5"),
    steps: ["Marina brings a jar of dark forest honey.", "“Мамин рецепт: чай, мёд, лимон — и спать.”", "Tom drinks three cups a day.", "On the third day his temperature is 36.6!"],
    bridge: "Tom is better. To celebrate, Marina heats up the sauna again — carefully this time. And she tells them about the sign on its door.",
  },
};

export const helsinki6: Lesson = {
  id: "a2-helsinki-6",
  level: "A2",
  cityId: "helsinki",
  number: 6,
  title: "The Painted Sign",
  minutes: 8,
  goals: ["Understand a memory", "Talk about the past with надо было", "Learn about the northern lights and fjords"],
  vocabNote: "Вывеска — a shop or door sign. Фьорд — a long narrow sea bay between steep mountains, typical of Norway.",
  vocab: [
    v("he6-1", "вывеска", "sign (on a door or shop)", "An old wooden sign over the sauna door, painted with a cat and a steaming bucket.", "Listen to вывеска", p("6-1")),
    v("he6-2", "Её нарисовала Ася.", "Asya painted it.", "Close-up: a tiny letter «А.» in the corner of the sign.", "Listen to Её нарисовала Ася", p("6-2")),
    v("he6-3", "Мама держала сауну.", "My mother ran the sauna.", "An old photo: a smiling woman by this same sauna.", "Listen to Мама держала сауну", p("6-3")),
    v("he6-4", "Ей надо было где-то жить.", "She needed somewhere to live.", "A ginger cat seen from behind, carrying a small suitcase along the shore.", "Listen to Ей надо было где-то жить", p("6-4")),
    v("he6-5", "вместо денег", "instead of money", "Coins crossed out, a paintbrush instead.", "Listen to вместо денег", p("6-5")),
    v("he6-6", "фьорды", "fjords", "Steep mountains and a long narrow bay.", "Listen to фьорды", p("6-6")),
    v("he6-7", "северное сияние", "northern lights", "Green and purple lights waving across a night sky.", "Listen to северное сияние", p("6-7")),
    v("he6-8", "в Норвегию", "to Norway", "A map arrow from Helsinki west to Oslo.", "Listen to в Норвегию", p("6-8")),
  ],
  letters: [
    letter("сияние", "si-YA-ni-ye: stress on Я.", "северное сияние", "northern lights"),
    letter("фьорд", "One syllable: FYORT. The д at the end sounds like т.", "фьорды Норвегии", "the fjords of Norway"),
  ],
  dialogue: {
    title: "Marina remembers",
    note: "Marina's mother came to Finland from Karelia; she spoke Russian and Finnish.",
    lines: [
      line("marina", "Видите вывеску на двери сауны? Её нарисовала одна рыжая кошка.", "See the sign on the sauna door? A ginger cat painted it."),
      line("murzik", "Ася?! Там буква «А»!", "Asya?! There's the letter “A”!"),
      line("marina", "Да, Ася. Тридцать лет назад мама держала эту сауну. Асе надо было где-то жить.", "Yes, Asya. Thirty years ago my mother ran this sauna. Asya needed somewhere to live."),
      line("marina", "Она жила здесь месяц. И вместо денег нарисовала вывеску.", "She lived here for a month. And instead of money she painted the sign."),
      line("tom", "А куда она поехала потом?", "And where did she go after that?"),
      line("marina", "В Норвегию. Она говорила: «Мне надо увидеть фьорды и северное сияние».", "To Norway. She said: “I need to see the fjords and the northern lights.”"),
    ],
    gist: choice("he6-d1", "How did Asya pay for her stay?", [
      ["She painted the sauna sign.", true],
      ["She worked as a nurse.", false],
      ["She paid with amber.", false],
    ]),
  },
  grammar: [
    {
      title: "Надо было — had to",
      paragraphs: [
        "Past of надо / нужно: dative + надо было / нужно было + infinitive: Асе надо было где-то жить. Мне нужно было уехать.",
        "Future: dative + надо будет: Тебе надо будет взять тёплую куртку.",
      ],
      examples: [
        { ru: "Вчера Тому надо было лежать.", en: "Yesterday Tom had to stay in bed." },
        { ru: "В Норвегии вам надо будет взять тёплую одежду.", en: "In Norway you'll need to take warm clothes." },
      ],
    },
  ],
  tasks: [
    listen("he6-t1", "Listen. How long did Asya live at the sauna?", "Она жила здесь месяц. И вместо денег нарисовала вывеску.", [
      ["A month.", true],
      ["A year.", false],
      ["One night.", false],
    ]),
    choice("he6-t2", "Detective! Where did Asya go next?", [
      ["To Norway, to see the fjords.", true],
      ["Back to Tallinn.", false],
      ["To Lapland to work.", false],
    ], { skill: "listening" }),
    fill("he6-t3", "Choose the right form: “Yesterday Tom had to stay in bed.”", "Вчера Тому надо", "лежать.", "было", ["было", "был", "будет"], { skill: "grammar" }),
    read("he6-t4", "On the back of the sign there's writing. What does it say?", "Спасибо за тепло и пар!\nЕду на запад — к фьордам.\nА.", [
      ["She's going west, to the fjords.", true],
      ["She's going home.", false],
      ["She'll paint another sign next year.", false],
    ]),
    match("he6-t5", "Match the Russian with the English.", [
      ["вывеска", "sign"],
      ["вместо денег", "instead of money"],
      ["фьорды", "fjords"],
      ["северное сияние", "northern lights"],
    ], { skill: "words" }),
    tf("he6-t6", "Marina's mother ran the sauna thirty years ago.", true, "True or false?", { skill: "listening" }),
    speak("he6-t7", "Что тебе надо было сделать вчера?", "Вчера мне надо было работать, а потом нужно было купить продукты.", "Yesterday I had to work, and then I needed to buy groceries.", {
      help: "Say out loud what you had to do yesterday: надо было.",
    }),
  ],
  reward: {
    itemId: "saunasign",
    itemName: "Little painted sign",
    itemNameRu: "Маленькая вывеска",
    ru: "Вывеска — копия Асиной!",
    en: "A sign — a copy of Asya's!",
    a11y: "A small wooden sign with a painted ginger cat and a steaming bucket hangs above the cabin door.",
    image: p("reward-6"),
    steps: ["Murzik spends the evening copying Asya's sign.", "A cat, a bucket, steam — and a little «М.» in the corner.", "Marina hangs it above their cabin door.", "“Теперь у нас две вывески — бабушкина и внука.”"],
    bridge: "Tom is healthy again. Tomorrow — a train, a ferry and another train, all the way west to Norway. Marina has one more present.",
  },
};

export const helsinki7: Lesson = {
  id: "a2-helsinki-7",
  level: "A2",
  cityId: "helsinki",
  number: 7,
  title: "Helsinki Exam",
  minutes: 9,
  goals: ["Understand a longer story", "Give and follow health advice", "Review everything from Helsinki"],
  vocabNote: "Lesson 7 is the city exam: a longer listening story and a review of everything from Helsinki.",
  vocab: [
    v("he7-1", "деревянная кружка", "wooden mug", "A small mug carved from one piece of birch wood, with a leather loop.", "Listen to деревянная кружка", p("7-1")),
    v("he7-2", "из берёзы", "(made) of birch", "White birch trees with black marks on the bark.", "Listen to из берёзы", p("7-2")),
    v("he7-3", "Береги здоровье!", "Look after your health!", "Marina pats Tom on the shoulder.", "Listen to Береги здоровье", p("7-3")),
    v("he7-4", "Одевайся теплее!", "Dress more warmly!", "Marina wraps a scarf round Tom's neck.", "Listen to Одевайся теплее", p("7-4")),
    v("he7-5", "Больше никаких прыжков в море!", "No more jumping into the sea!", "Tom laughs and raises his hands.", "Listen to Больше никаких прыжков в море", p("7-5")),
    v("he7-6", "в горах холодно", "it's cold in the mountains", "Snowy mountain tops above a fjord.", "Listen to в горах холодно", p("7-6")),
    v("he7-7", "Берегите себя!", "Take care of yourselves!", "Marina waves from the platform.", "Listen to Берегите себя", p("7-7")),
    v("he7-8", "Как здоровье?", "How are you feeling? (How's your health?)", "Murzik asks Tom on the train; Tom gives a thumbs up.", "Listen to Как здоровье", p("7-8")),
  ],
  letters: [
    letter("берегите", "bi-ri-GEE-tye: stress on ГИ.", "Берегите себя!", "Take care of yourselves!"),
  ],
  dialogue: {
    title: "At the station",
    note: "Кукса — a traditional Finnish and Sámi wooden mug carved from a birch burl.",
    lines: [
      line("marina", "Это вам — деревянная кружка, кукса. Из берёзы. Чай в ней долго не остывает.", "This is for you — a wooden mug, a kuksa. Made of birch. Tea stays hot in it for a long time."),
      line("murzik", "Спасибо за всё, Марина!", "Thank you for everything, Marina!"),
      line("marina", "Том, береги здоровье! В Норвегии в горах холодно — одевайся теплее.", "Tom, look after your health! In Norway it's cold in the mountains — dress warmly."),
      line("tom", "Обещаю. И больше никаких прыжков в море!", "I promise. And no more jumping into the sea!"),
      line("marina", "Вот и хорошо. Берегите себя!", "That's good. Take care of yourselves!"),
      line("murzik", "Том, как здоровье?", "Tom, how are you feeling?"),
      line("tom", "Отлично! Поехали!", "Great! Let's go!"),
    ],
    gist: choice("he7-d1", "What's special about the wooden mug?", [
      ["It's made of birch and keeps tea hot.", true],
      ["It was painted by Asya.", false],
      ["It's for the sauna.", false],
    ]),
  },
  grammar: [
    {
      title: "Helsinki review",
      paragraphs: [
        "Health: простудиться, насморк, кашель, температура, записаться к врачу, сироп от кашля, три раза в день, до / после еды.",
        "Advice: dative + надо / нужно / нельзя + infinitive; надо было (past), надо будет (future); полезно / вредно.",
      ],
      examples: [
        { ru: "Тебе нельзя выходить — надо лежать и пить чай с мёдом.", en: "You mustn't go out — you need to stay in bed and drink tea with honey." },
        { ru: "Мне надо было записаться к врачу.", en: "I had to make a doctor's appointment." },
      ],
    },
  ],
  tasks: [
    listen("he7-t1", "Audio story: Marina talks about her work. Listen. Why did she come to Helsinki?", "Я медсестра. Двадцать лет назад я приехала в Хельсинки работать в больнице. Сначала мне было трудно: надо было учить финский. Теперь я говорю по-фински, а мои пациенты иногда учат русский. Моим больным я всегда говорю: надо много спать, пить воду и улыбаться.", [
      ["To work in a hospital.", true],
      ["To study Finnish at university.", false],
      ["To open a sauna.", false],
    ]),
    choice("he7-t2", "In Marina's story, what was hard at first?", [
      ["She had to learn Finnish.", true],
      ["She had to work at night.", false],
      ["She had no friends.", false],
    ], { skill: "listening" }),
    choice("he7-t3", "“You mustn't go out — you need to stay in bed.” Which is right?", [
      ["Тебе нельзя выходить — надо лежать.", true],
      ["Ты нельзя выходить — надо лежать.", false],
      ["Тебе нельзя выходишь — надо лежишь.", false],
    ], { skill: "grammar" }),
    read("he7-t4", "Read the ticket. Where do they change?", "БИЛЕТ\nПоезд Хельсинки — Турку: 07:00 – 09:00\nПаром Турку — Стокгольм: 10:00 – 18:00\nСтокгольм — Осло: поезд 19:30", [
      ["In Turku and Stockholm.", true],
      ["Only in Oslo.", false],
      ["They don't change.", false],
    ]),
    script("he7-t5", "Say goodbye to Marina.", [
      { speaker: "Marina", text: "Береги здоровье!" },
      { speaker: "You", answer: "Спасибо за всё, Марина!", options: ["Спасибо за всё, Марина!", "Спасибо! Апчхи!", "Спасибо! Откройте рот."] },
      { speaker: "Marina", text: "В горах холодно — одевайся теплее!" },
      { speaker: "You", answer: "Обязательно! Берегите себя!", options: ["Обязательно! Берегите себя!", "Обязательно! До еды!", "Обязательно! Ледяная вода!"] },
    ], { skill: "review" }),
    match("he7-t6", "Helsinki review: match the Russian with the English.", [
      ["парилка", "steam room"],
      ["насморк", "runny nose"],
      ["три раза в день", "three times a day"],
      ["Выздоравливай!", "Get well!"],
    ], { skill: "review" }),
    speak("he7-t7", "Твой друг простудился. Что ему надо делать?", "Ему надо записаться к врачу и принимать сироп три раза в день после еды. И ему нельзя выходить, пока есть температура.", "He needs to make a doctor's appointment and take the syrup three times a day after meals. And he mustn't go out while he has a temperature.", {
      help: "Give your sick friend advice out loud.",
    }),
  ],
  reward: {
    itemId: "kuksa",
    itemName: "Wooden birch mug",
    itemNameRu: "Деревянная кружка",
    ru: "Кукса — чай долго горячий!",
    en: "A kuksa — the tea stays hot!",
    a11y: "A small mug carved from pale birch wood, with a leather loop on the handle, hangs from Murzik's backpack.",
    image: p("reward-7"),
    steps: ["Marina's present is a kuksa — a mug carved from one piece of birch.", "“В ней чай долго не остывает. В горах пригодится.”", "Murzik ties it to his backpack.", "Tom pours his first cup of tea — no sauna, no sea."],
  },
};

export const helsinkiLessons: Lesson[] = [helsinki1, helsinki2, helsinki3, helsinki4, helsinki5, helsinki6, helsinki7];
