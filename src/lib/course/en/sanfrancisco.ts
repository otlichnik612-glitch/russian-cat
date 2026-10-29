import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "../tr/make";

/* Сан-Франциско · «Работа» · профессии, What do you do?, can / can't (умею, можно), просьбы, первый рабочий день. */

const p = (name: string) => pic(`en/sanfrancisco/${name}`);

const sanfrancisco1: Lesson = {
  id: "en-a1-sanfrancisco-1",
  level: "A1",
  cityId: "en-sanfrancisco",
  number: 1,
  title: "What do you do? — Кем ты работаешь?",
  minutes: 7,
  goals: ["Спросить о работе: What do you do?", "Назвать профессии", "Сказать, где работаешь"],
  vocabNote: "What do you do? — так спрашивают о работе (буквально «Что ты делаешь?»). Перед профессией — a или an: a doctor, an engineer.",
  vocab: [
    v("ensf1-1", "What do you do?", "Кем ты работаешь?", "Мурзик с чашкой кофе спрашивает хозяина кофейни.", "Послушать What do you do", p("l1-1")),
    v("ensf1-2", "I was a programmer.", "Я был программистом.", "Старое фото: Дэниел за компьютером с тремя мониторами.", "Послушать I was a programmer", p("l1-2")),
    v("ensf1-3", "Now I'm a barista.", "Теперь я бариста.", "Дэниел в фартуке рисует сердечко на кофе.", "Послушать Now I'm a barista", p("l1-3")),
    v("ensf1-4", "She's a doctor.", "Она врач.", "Женщина в белом халате со стетоскопом.", "Послушать She's a doctor", p("l1-4")),
    v("ensf1-5", "He's an engineer.", "Он инженер.", "Мужчина в каске смотрит на чертёж большого моста.", "Послушать He's an engineer", p("l1-5")),
    v("ensf1-6", "I work in an office.", "Я работаю в офисе.", "Светлый офис с компьютерами.", "Послушать I work in an office", p("l1-6")),
    v("ensf1-7", "I work from home.", "Я работаю из дома.", "Женщина с ноутбуком на диване, рядом кошка.", "Послушать I work from home", p("l1-7")),
  ],
  dialogue: {
    title: "Дэниел",
    note: "Дэниел — хозяин маленькой кофейни на холме. Раньше он был программистом. Happier — «счастливее».",
    lines: [
      line("daniel", "Welcome to my coffee shop! I'm Daniel.", "Добро пожаловать в мою кофейню! Я Дэниел."),
      line("murzik", "Hello, Daniel! What do you do? Are you a barista?", "Здравствуйте, Дэниел! Кем вы работаете? Вы бариста?"),
      line("daniel", "Now I'm a barista. But I was a programmer. I worked in an office.", "Теперь да, бариста. А был программистом. Работал в офисе."),
      line("tom", "Why a coffee shop?", "А почему кофейня?"),
      line("daniel", "I'm happier here! People come, we talk… And what do you do, Tom?", "Здесь я счастливее! Люди приходят, мы разговариваем… А ты кем работаешь, Том?"),
      line("tom", "I'm a photographer. I work for a magazine.", "Я фотограф. Работаю в журнале."),
    ],
    gist: choice("ensf1-d1", "Кем раньше работал Дэниел?", [
      ["Программистом.", true],
      ["Врачом.", false],
      ["Фотографом.", false],
    ]),
  },
  grammar: [
    {
      title: "Работа: a / an и What do you do?",
      paragraphs: [
        "О профессии: I'm a teacher. She's a doctor. He's an engineer (an — перед гласным звуком).",
        "Где работаешь: I work in an office / in a shop / in a hospital / from home. Работаю на кого-то: I work for a magazine.",
      ],
      examples: [
        { ru: "What do you do? — I'm a nurse. I work in a hospital.", en: "Кем ты работаешь? — Медсестрой. В больнице." },
        { ru: "My brother is an artist.", en: "Мой брат — художник." },
      ],
    },
  ],
  tasks: [
    choice("ensf1-t1", "Как сказать «Он инженер»?", [
      ["He's an engineer.", true],
      ["He's a engineer.", false],
      ["He engineer.", false],
    ], { skill: "grammar" }),
    listen("ensf1-t2", "Послушай. Где она работает?", "She's a teacher. She works in a school.", [
      ["В школе.", true],
      ["В больнице.", false],
      ["В офисе.", false],
    ]),
    match("ensf1-t3", "Соедини пары.", [
      ["doctor", "врач"],
      ["engineer", "инженер"],
      ["programmer", "программист"],
      ["office", "офис"],
    ], { skill: "words" }),
    missing("ensf1-t4", "Какой буквы не хватает? («врач»)", "doct", "r", "o", ["o", "e", "a"]),
    speak("ensf1-t5", "What do you do?", "I'm a teacher. I work in a school.", "Я учитель. Работаю в школе.", { help: "Расскажи вслух, кем ты работаешь и где." }),
    choice("ensf1-t6", "Тебя пригласили на концерт. Как вежливо согласиться?", [
      ["I'd love to!", true],
      ["I love to!", false],
      ["Sorry, I can't.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "grinder",
    itemName: "Кофемолка",
    itemNameRu: "Coffee grinder",
    ru: "Hooray! A coffee grinder!",
    en: "Ура! Кофемолка!",
    a11y: "Старинная деревянная кофемолка с медной ручкой и маленьким ящичком внизу.",
    image: p("grinder"),
    steps: ["Дэниел показывает Мурзику комнату над кофейней.", "На полке — старая ручная кофемолка.", "«My first one! From my programmer days.» — «Моя первая! Ещё со времён программирования».", "Мурзик крутит ручку: хрум-хрум, пахнет кофе."],
    bridge: "Дэниел спрашивает: «Murzik, can you make coffee?»",
  },
};

const sanfrancisco2: Lesson = {
  id: "en-a1-sanfrancisco-2",
  level: "A1",
  cityId: "en-sanfrancisco",
  number: 2,
  title: "I can cook — Я умею готовить",
  minutes: 7,
  goals: ["Сказать, что умеешь: I can", "Сказать, что не умеешь: I can't", "Спросить: Can you…?"],
  vocabNote: "Can — «могу, умею». После can глагол без to и без -s: I can swim, she can swim (не «she cans swims»). Не умею — can't.",
  vocab: [
    v("ensf2-1", "Can you make coffee?", "Ты умеешь варить кофе?", "Дэниел показывает на большую кофемашину.", "Послушать Can you make coffee", p("l2-1")),
    v("ensf2-2", "Yes, I can.", "Да, умею.", "Мурзик уверенно кивает.", "Послушать Yes, I can", p("l2-2")),
    v("ensf2-3", "No, I can't.", "Нет, не умею.", "Мурзик смущённо качает головой.", "Послушать No, I can't", p("l2-3")),
    v("ensf2-4", "I can cook.", "Я умею готовить.", "Мурзик в колпаке переворачивает блинчик.", "Послушать I can cook", p("l2-4")),
    v("ensf2-5", "I can't drive.", "Я не умею водить машину.", "Мурзик за рулём игрушечной машинки разводит лапами.", "Послушать I can't drive", p("l2-5")),
    v("ensf2-6", "She can speak three languages.", "Она говорит на трёх языках.", "Девушка, над ней облачка со словами на трёх языках.", "Послушать She can speak three languages", p("l2-6")),
    v("ensf2-7", "I can draw a heart.", "Я умею рисовать сердечко.", "На пенке капучино нарисовано сердечко.", "Послушать I can draw a heart", p("l2-7")),
  ],
  dialogue: {
    title: "Уроки кофе",
    note: "Latte art — рисунки на молочной пенке кофе. Teach — «учить, научить».",
    lines: [
      line("daniel", "Murzik, can you make coffee?", "Мурзик, ты умеешь варить кофе?"),
      line("murzik", "No, I can't. But I can make tea! And I can cook.", "Нет, не умею. Зато умею заваривать чай! И готовить умею."),
      line("daniel", "Good! I can teach you. Can you draw?", "Хорошо! Я тебя научу. А рисовать умеешь?"),
      line("murzik", "A little. Why?", "Немного. А что?"),
      line("daniel", "Look — latte art! I can draw a heart on coffee.", "Смотри — латте-арт! Я умею рисовать сердечко на кофе."),
      line("murzik", "Wow! Can I try?", "Ого! Можно попробовать?"),
    ],
    gist: choice("ensf2-d1", "Что Мурзик пока не умеет?", [
      ["Варить кофе.", true],
      ["Заваривать чай.", false],
      ["Готовить.", false],
    ]),
  },
  grammar: [
    {
      title: "Can / can't",
      paragraphs: [
        "Can — для всех одинаково: I can, you can, he can, they can. После can — глагол в простой форме: She can swim.",
        "Вопрос — can в начало: Can you drive? Ответ: Yes, I can. / No, I can't.",
      ],
      examples: [
        { ru: "My mum can play the piano.", en: "Моя мама умеет играть на пианино." },
        { ru: "Can he swim? — No, he can't.", en: "Он умеет плавать? — Нет." },
      ],
    },
  ],
  tasks: [
    choice("ensf2-t1", "Как сказать «Она умеет плавать»?", [
      ["She can swim.", true],
      ["She cans swim.", false],
      ["She can swims.", false],
    ], { skill: "grammar" }),
    listen("ensf2-t2", "Послушай. Что он не умеет?", "I can cook, but I can't drive.", [
      ["Водить машину.", true],
      ["Готовить.", false],
      ["Плавать.", false],
    ]),
    match("ensf2-t3", "Соедини пары.", [
      ["drive", "водить машину"],
      ["draw", "рисовать"],
      ["swim", "плавать"],
      ["teach", "учить"],
    ], { skill: "words" }),
    missing("ensf2-t4", "Какой буквы не хватает? («не могу»)", "ca", "'t", "n", ["n", "m", "t"]),
    speak("ensf2-t5", "What can you do?", "I can cook and I can speak English. I can't drive.", "Я умею готовить и говорю по-английски. Водить не умею.", { help: "Расскажи вслух, что ты умеешь и что нет." }),
    choice("ensf2-t6", "Как спросить «Кем ты работаешь?»", [
      ["What do you do?", true],
      ["What are you do?", false],
      ["What is your do?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "beans",
    itemName: "Мешочек кофейных зёрен",
    itemNameRu: "Coffee beans",
    ru: "Hooray! A bag of coffee beans!",
    en: "Ура! Мешочек кофейных зёрен!",
    a11y: "Холщовый мешочек, полный блестящих тёмных кофейных зёрен, перевязан бечёвкой.",
    image: p("beans"),
    steps: ["Весь вечер Мурзик учится варить кофе.", "Первая чашка — горькая. Вторая — лучше!", "Десятая — идеальная!", "Дэниел дарит ему мешочек свежих зёрен."],
    bridge: "Утром у Мурзика много просьб к Дэниелу — и у Дэниела к Мурзику.",
  },
};

const sanfrancisco3: Lesson = {
  id: "en-a1-sanfrancisco-3",
  level: "A1",
  cityId: "en-sanfrancisco",
  number: 3,
  title: "Can you help me? — Можешь помочь?",
  minutes: 7,
  goals: ["Попросить: Can you…?", "Спросить разрешения: Can I…?", "Ответить: Sure! / Sorry, no."],
  vocabNote: "Can you…? — просьба: «Можешь…?» Can I…? — разрешение: «Можно мне…?» Ответ: Sure! Of course! или Sorry, you can't.",
  vocab: [
    v("ensf3-1", "Can you help me?", "Можешь мне помочь?", "Дэниел держит огромную коробку с чашками.", "Послушать Can you help me", p("l3-1")),
    v("ensf3-2", "Sure!", "Конечно!", "Мурзик подбегает и подхватывает коробку снизу.", "Послушать Sure", p("l3-2")),
    v("ensf3-3", "Can I sit here?", "Можно здесь сесть?", "Посетитель показывает на свободный стул у окна.", "Послушать Can I sit here", p("l3-3")),
    v("ensf3-4", "Can you open the window?", "Можешь открыть окно?", "Мурзик тянется к окну на цыпочках.", "Послушать Can you open the window", p("l3-4")),
    v("ensf3-5", "Can I use your phone?", "Можно воспользоваться твоим телефоном?", "Девушка показывает на телефон Тома.", "Послушать Can I use your phone", p("l3-5")),
    v("ensf3-6", "Sorry, you can't.", "Извините, нельзя.", "Табличка «не входить» на двери кухни.", "Послушать Sorry, you can't", p("l3-6")),
    v("ensf3-7", "No problem!", "Без проблем!", "Мурзик показывает большой палец.", "Послушать No problem", p("l3-7")),
  ],
  dialogue: {
    title: "Утро в кофейне",
    note: "Fog — «туман», знаменитый туман Сан-Франциско.",
    lines: [
      line("daniel", "Murzik, can you help me with this box?", "Мурзик, поможешь мне с коробкой?"),
      line("murzik", "Sure!", "Конечно!"),
      line("passerby", "Excuse me, can I sit here?", "Простите, можно здесь сесть?"),
      line("murzik", "Of course! Can I get you a coffee?", "Конечно! Принести вам кофе?"),
      line("passerby", "Yes, please. And can you open the window? It's warm.", "Да, пожалуйста. И можете открыть окно? Тепло."),
      line("murzik", "No problem! Oh… the fog is coming in!", "Без проблем! Ой… туман заходит!"),
      line("passerby", "Ha-ha! Can you close it again, please?", "Ха-ха! Можете снова закрыть, пожалуйста?"),
    ],
    gist: choice("ensf3-d1", "Почему окно снова закрывают?", [
      ["В кофейню заходит туман.", true],
      ["Стало жарко.", false],
      ["Шумно на улице.", false],
    ]),
  },
  grammar: [
    {
      title: "Can you…? Can I…?",
      paragraphs: [
        "Просьба: Can you help me? Can you open the window, please? Разрешение: Can I sit here? Can I use your phone?",
        "Ответы: Sure! Of course! No problem! Или вежливо отказать: Sorry, you can't.",
      ],
      examples: [
        { ru: "Can you pass the sugar, please? — Sure!", en: "Передашь сахар, пожалуйста? — Конечно!" },
        { ru: "Can I take a photo? — Of course!", en: "Можно сфотографировать? — Конечно!" },
      ],
    },
  ],
  tasks: [
    choice("ensf3-t1", "Как спросить разрешения сесть?", [
      ["Can I sit here?", true],
      ["Can you sit here?", false],
      ["I can sit here?", false],
    ], { skill: "grammar" }),
    listen("ensf3-t2", "Послушай. О чём просят?", "Can you close the door, please?", [
      ["Закрыть дверь.", true],
      ["Открыть окно.", false],
      ["Сесть здесь.", false],
    ]),
    match("ensf3-t3", "Соедини пары.", [
      ["Sure!", "Конечно!"],
      ["No problem!", "Без проблем!"],
      ["open", "открыть"],
      ["close", "закрыть"],
    ], { skill: "words" }),
    spell("ensf3-t4", "Собери из букв слово «окно».", "window"),
    speak("ensf3-t5", "Can you help me?", "Sure! No problem!", "Конечно! Без проблем!", { help: "Ответь вслух на просьбу." }),
    choice("ensf3-t6", "Как сказать «Я не умею водить»?", [
      ["I can't drive.", true],
      ["I don't can drive.", false],
      ["I can't to drive.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "ficus",
    itemName: "Фикус в кадке",
    itemNameRu: "Ficus",
    ru: "Hooray! A ficus!",
    en: "Ура! Фикус!",
    a11y: "Большой фикус с блестящими листьями в деревянной кадке стоит в углу.",
    image: p("ficus"),
    steps: ["Посетительница приходит снова — с подарком.", "«For the helpful cat!» — «Для услужливого кота!»", "Это фикус в деревянной кадке.", "Мурзик ставит его в угол у окна."],
    bridge: "Дэниел говорит: «Tomorrow is your first day at work!»",
  },
};

const sanfrancisco4: Lesson = {
  id: "en-a1-sanfrancisco-4",
  level: "A1",
  cityId: "en-sanfrancisco",
  number: 4,
  title: "My first day — Мой первый день",
  minutes: 7,
  goals: ["Понять указания на работе", "Сказать «не волнуйся», «осторожно»", "Назвать вещи на работе"],
  vocabNote: "Указания — глагол в начале: Wash the cups. Be careful! Don't worry! — «Не волнуйся!» Customer — «посетитель, клиент».",
  vocab: [
    v("ensf4-1", "Here's your apron.", "Вот твой фартук.", "Дэниел протягивает Мурзику маленький зелёный фартук.", "Послушать Here's your apron", p("l4-1")),
    v("ensf4-2", "Wash the cups, please.", "Помой чашки, пожалуйста.", "Мурзик у раковины с горой чашек.", "Послушать Wash the cups, please", p("l4-2")),
    v("ensf4-3", "Be careful! It's hot!", "Осторожно! Горячо!", "Из кофемашины идёт пар.", "Послушать Be careful! It's hot", p("l4-3")),
    v("ensf4-4", "Don't worry!", "Не волнуйся!", "Дэниел добродушно хлопает Мурзика по плечу.", "Послушать Don't worry", p("l4-4")),
    v("ensf4-5", "a customer", "посетитель", "Женщина с ноутбуком заходит в кофейню.", "Послушать a customer", p("l4-5")),
    v("ensf4-6", "the coffee machine", "кофемашина", "Большая блестящая кофемашина с рычагами.", "Послушать the coffee machine", p("l4-6")),
    v("ensf4-7", "Smile and say hello.", "Улыбнись и поздоровайся.", "Мурзик широко улыбается посетителю.", "Послушать Smile and say hello", p("l4-7")),
  ],
  dialogue: {
    title: "Первый рабочий день",
    note: "Broke — «разбил» (прошлое от break). Happens — «бывает».",
    lines: [
      line("daniel", "Good morning! Here's your apron. First, wash the cups, please.", "Доброе утро! Вот твой фартук. Сначала помой чашки, пожалуйста."),
      line("murzik", "OK! And then?", "Хорошо! А потом?"),
      line("daniel", "Then help me with the coffee machine. Be careful! It's hot!", "Потом помоги мне с кофемашиной. Осторожно! Горячо!"),
      line("daniel", "And when a customer comes in — smile and say hello.", "А когда заходит посетитель — улыбнись и поздоровайся."),
      line("murzik", "Oh no! I broke a cup!", "Ой! Я разбил чашку!"),
      line("daniel", "Don't worry! It happens. It's your first day!", "Не волнуйся! Бывает. Это же твой первый день!"),
    ],
    gist: choice("ensf4-d1", "Что случилось в первый день?", [
      ["Мурзик разбил чашку.", true],
      ["Мурзик обжёгся.", false],
      ["Сломалась кофемашина.", false],
    ]),
  },
  grammar: [
    {
      title: "Указания: Wash! Be careful! Don't worry!",
      paragraphs: [
        "Указание — глагол в начале: Wash the cups. Help me. Smile! С be: Be careful! Be quiet!",
        "Запрет или утешение — Don't + глагол: Don't worry! Don't touch! Don't run!",
      ],
      examples: [
        { ru: "Please close the door.", en: "Закрой, пожалуйста, дверь." },
        { ru: "Don't touch! It's hot!", en: "Не трогай! Горячо!" },
      ],
    },
  ],
  tasks: [
    choice("ensf4-t1", "Как сказать «Не волнуйся!»?", [
      ["Don't worry!", true],
      ["No worry!", false],
      ["Not worry!", false],
    ], { skill: "grammar" }),
    listen("ensf4-t2", "Послушай. Что нужно сделать?", "Please wash the cups and clean the tables.", [
      ["Помыть чашки и протереть столы.", true],
      ["Сварить кофе.", false],
      ["Встретить посетителя.", false],
    ]),
    match("ensf4-t3", "Соедини пары.", [
      ["apron", "фартук"],
      ["customer", "посетитель"],
      ["careful", "осторожный"],
      ["wash", "мыть"],
    ], { skill: "words" }),
    missing("ensf4-t4", "Какой буквы не хватает? («фартук»)", "apr", "n", "o", ["o", "a", "u"]),
    speak("ensf4-t5", "I broke a cup! Sorry!", "Don't worry! It happens.", "Не волнуйся! Бывает.", { help: "Успокой вслух." }),
    choice("ensf4-t6", "Как попросить «Можешь открыть окно?»", [
      ["Can you open the window?", true],
      ["Can I open you the window?", false],
      ["You can open window?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "apron",
    itemName: "Зелёный фартук",
    itemNameRu: "Apron",
    ru: "Hooray! My own apron!",
    en: "Ура! Мой собственный фартук!",
    a11y: "Маленький тёмно-зелёный фартук с кармашком висит на крючке, из кармашка торчит карандаш.",
    image: p("apron"),
    steps: ["Вечером Дэниел говорит: «Good job! The apron is yours».", "«Хорошая работа! Фартук твой».", "Мурзик вешает его на крючок.", "Его первая настоящая рабочая форма!"],
    bridge: "На второй день работы у Мурзика очень много дел.",
  },
};

const sanfrancisco5: Lesson = {
  id: "en-a1-sanfrancisco-5",
  level: "A1",
  cityId: "en-sanfrancisco",
  number: 5,
  title: "At work — На работе",
  minutes: 7,
  goals: ["Сказать: I'm busy, I'm tired", "Предложить перерыв", "Похвалить: Good job!"],
  vocabNote: "Take a break — «сделать перерыв». Good job! / Well done! — «Молодец! Хорошая работа!»",
  vocab: [
    v("ensf5-1", "I'm busy right now.", "Я сейчас занят.", "Мурзик держит по чашке в каждой лапе, ещё одна на голове.", "Послушать I'm busy right now", p("l5-1")),
    v("ensf5-2", "I'm tired.", "Я устал.", "Мурзик сидит на ступеньке, уши опущены.", "Послушать I'm tired", p("l5-2")),
    v("ensf5-3", "Let's take a break.", "Давай сделаем перерыв.", "Дэниел ставит на стол две чашки и тарелку печенья.", "Послушать Let's take a break", p("l5-3")),
    v("ensf5-4", "Good job!", "Молодец!", "Дэниел показывает Мурзику большой палец.", "Послушать Good job", p("l5-4")),
    v("ensf5-5", "What time do you finish?", "Во сколько ты заканчиваешь?", "Том заглядывает в кофейню.", "Послушать What time do you finish", p("l5-5")),
    v("ensf5-6", "I finish at four.", "Я заканчиваю в четыре.", "Часы на стене показывают почти четыре.", "Послушать I finish at four", p("l5-6")),
    v("ensf5-7", "I love my job!", "Я люблю свою работу!", "Мурзик в фартуке сияет за стойкой.", "Послушать I love my job", p("l5-7")),
  ],
  dialogue: {
    title: "Перерыв",
    note: "Right now — «прямо сейчас». Cable car — старый трамвайчик на канате, символ Сан-Франциско.",
    lines: [
      line("tom", "Murzik! Can you talk?", "Мурзик! Можешь поговорить?"),
      line("murzik", "Sorry, I'm busy right now!", "Прости, я сейчас занят!"),
      line("daniel", "Murzik, you're tired. Let's take a break.", "Мурзик, ты устал. Давай сделаем перерыв."),
      line("tom", "What time do you finish?", "Во сколько заканчиваешь?"),
      line("murzik", "I finish at four. Then let's ride the cable car!", "В четыре. Потом поедем на канатном трамвайчике!"),
      line("daniel", "Good job today, Murzik!", "Ты сегодня молодец, Мурзик!"),
      line("murzik", "Thank you! I love my job!", "Спасибо! Я люблю свою работу!"),
    ],
    gist: choice("ensf5-d1", "Во сколько Мурзик заканчивает работу?", [
      ["В четыре.", true],
      ["В шесть.", false],
      ["В два.", false],
    ]),
  },
  grammar: [
    {
      title: "На работе: обычно и сейчас",
      paragraphs: [
        "Обычно: I start at eight. I finish at four. Сейчас: I'm working. I'm busy right now.",
        "Let's — предложить что-то вместе: Let's take a break. Let's have lunch.",
      ],
      examples: [
        { ru: "I usually finish at five, but today I'm working late.", en: "Обычно я заканчиваю в пять, но сегодня работаю допоздна." },
        { ru: "Let's have a coffee!", en: "Давай выпьем кофе!" },
      ],
    },
  ],
  tasks: [
    choice("ensf5-t1", "Как предложить сделать перерыв?", [
      ["Let's take a break.", true],
      ["Let's to take a break.", false],
      ["Let take a break.", false],
    ], { skill: "grammar" }),
    listen("ensf5-t2", "Послушай. Почему он не может говорить?", "Sorry, I'm busy right now.", [
      ["Он сейчас занят.", true],
      ["Он устал.", false],
      ["Он уже закончил работу.", false],
    ]),
    match("ensf5-t3", "Соедини пары.", [
      ["busy", "занят"],
      ["tired", "уставший"],
      ["break", "перерыв"],
      ["Good job!", "Молодец!"],
    ], { skill: "words" }),
    spell("ensf5-t4", "Собери из букв слово «работа».", "job"),
    speak("ensf5-t5", "What time do you finish work?", "I finish at six.", "Я заканчиваю в шесть.", { help: "Скажи вслух, во сколько ты заканчиваешь работу или учёбу." }),
    choice("ensf5-t6", "Как сказать «Осторожно! Горячо!»?", [
      ["Be careful! It's hot!", true],
      ["Careful you! Hot!", false],
      ["Are careful! It's hot!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cable-car",
    itemName: "Открытка с трамвайчиком",
    itemNameRu: "Cable car postcard",
    ru: "Hooray! A cable car postcard!",
    en: "Ура! Открытка с трамвайчиком!",
    a11y: "Открытка: старый красно-коричневый трамвайчик едет в крутую гору, вдали синий залив.",
    image: p("cable-car"),
    steps: ["Вечером Мурзик и Том едут на канатном трамвайчике.", "Вверх, вниз, снова вверх!", "Водитель трамвая дарит Мурзику открытку.", "Открытка стоит на полке."],
    bridge: "Вечером Мурзик спрашивает Тома о его работе.",
  },
};

const sanfrancisco6: Lesson = {
  id: "en-a1-sanfrancisco-6",
  level: "A1",
  cityId: "en-sanfrancisco",
  number: 6,
  title: "Tom's job — Работа Тома",
  minutes: 7,
  goals: ["Рассказать о чужой работе", "Спросить: What does he do?", "Сказать об учёбе: I study"],
  vocabNote: "О ком-то: What does she do? — She's a nurse. She works in a hospital. Study — «учиться»: I study at university.",
  vocab: [
    v("ensf6-1", "What does Tom do?", "Кем работает Том?", "Мурзик показывает на Тома с фотоаппаратом.", "Послушать What does Tom do", p("l6-1")),
    v("ensf6-2", "He takes photos for a magazine.", "Он фотографирует для журнала.", "Обложка журнала с фотографией красного моста.", "Послушать He takes photos for a magazine", p("l6-2")),
    v("ensf6-3", "He travels a lot.", "Он много путешествует.", "Чемодан Тома весь в наклейках городов.", "Послушать He travels a lot", p("l6-3")),
    v("ensf6-4", "Does he like his job?", "Ему нравится его работа?", "Дэниел с любопытством смотрит на Тома.", "Послушать Does he like his job", p("l6-4")),
    v("ensf6-5", "I study at university.", "Я учусь в университете.", "Студентка с рюкзаком у старого университета.", "Послушать I study at university", p("l6-5")),
    v("ensf6-6", "What do you study?", "Что ты изучаешь?", "Дэниел наклоняется к студентке за стойкой.", "Послушать What do you study", p("l6-6")),
    v("ensf6-7", "It's my dream.", "Это моя мечта.", "Мурзик в фартуке мечтательно смотрит вдаль.", "Послушать It's my dream", p("l6-7")),
  ],
  dialogue: {
    title: "Разговор о работе",
    note: "Art — «искусство». Dream — «мечта».",
    lines: [
      line("daniel", "Murzik, what does Tom do?", "Мурзик, а Том кем работает?"),
      line("murzik", "He's a photographer. He takes photos for a magazine. He travels a lot.", "Он фотограф. Снимает для журнала. Много путешествует."),
      line("daniel", "Does he like his job?", "Ему нравится его работа?"),
      line("tom", "Yes, I do! I love it.", "Да! Очень."),
      line("daniel", "And my new assistant, Lily, studies art at university.", "А моя новая помощница, Лили, учится в университете на художника."),
      line("murzik", "And I want to be a cook. It's my dream!", "А я хочу стать поваром. Это моя мечта!"),
    ],
    gist: choice("ensf6-d1", "Что изучает Лили?", [
      ["Искусство.", true],
      ["Программирование.", false],
      ["Кулинарию.", false],
    ]),
  },
  grammar: [
    {
      title: "Работа другого человека",
      paragraphs: [
        "What does he / she do? — He's a photographer. He works for a magazine. She studies at university.",
        "Помни -s: he takes, he travels, she studies (y → ies). Вопрос: Does he like his job? — Yes, he does.",
      ],
      examples: [
        { ru: "What does your sister do? — She's a doctor.", en: "Кем работает твоя сестра? — Врачом." },
        { ru: "My brother studies music.", en: "Мой брат учится музыке." },
      ],
    },
  ],
  tasks: [
    choice("ensf6-t1", "Как спросить «Кем работает твой папа?»", [
      ["What does your dad do?", true],
      ["What do your dad do?", false],
      ["What does your dad does?", false],
    ], { skill: "grammar" }),
    listen("ensf6-t2", "Послушай. Кем работает её мама?", "My mum is a nurse. She works in a hospital.", [
      ["Медсестрой в больнице.", true],
      ["Учителем в школе.", false],
      ["Врачом в офисе.", false],
    ]),
    match("ensf6-t3", "Соедини пары.", [
      ["study", "учиться"],
      ["university", "университет"],
      ["travel", "путешествовать"],
      ["dream", "мечта"],
    ], { skill: "words" }),
    missing("ensf6-t4", "Какой буквы не хватает? («она учится»)", "she stud", "es", "i", ["i", "y", "e"]),
    speak("ensf6-t5", "What does your friend do?", "She's an engineer. She works in an office.", "Она инженер. Работает в офисе.", { help: "Расскажи вслух о работе друга или подруги." }),
    choice("ensf6-t6", "Как сказать «Я устал(а)»?", [
      ["I'm tired.", true],
      ["I tired.", false],
      ["I have tired.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "guest-books",
    itemName: "Полка с книгами для гостей",
    itemNameRu: "Guest bookshelf",
    ru: "Hooray! A bookshelf for guests!",
    en: "Ура! Полка с книгами для гостей!",
    a11y: "Маленькая полка, на ней разноцветные книги, оставленные посетителями кофейни.",
    image: p("guest-books"),
    steps: ["В кофейне Дэниела есть полка: гости оставляют книги, другие берут.", "«Take a book, leave a book!» — «Возьми книгу, оставь книгу!»", "Дэниел дарит Мурзику такую же маленькую полку.", "Мурзик ставит туда свою первую английскую книжку."],
    bridge: "Последний день. Дэниел зовёт Мурзика: «Come here. I've got something for you».",
  },
};

const sanfrancisco7: Lesson = {
  id: "en-a1-sanfrancisco-7",
  level: "A1",
  cityId: "en-sanfrancisco",
  number: 7,
  title: "Goodbye, San Francisco! — Пока, Сан-Франциско!",
  minutes: 8,
  goals: ["Рассказать о своей работе и умениях", "Попросить о помощи", "Вспомнить все слова Сан-Франциско"],
  vocabNote: "Повторяем: What do you do?, can / can't, Can you…? / Can I…?, указания: Be careful! Don't worry!",
  vocab: [
    v("ensf7-1", "Come here!", "Иди сюда!", "Дэниел машет Мурзику из-за стойки.", "Послушать Come here", p("l7-1")),
    v("ensf7-2", "the recipe for sourdough bread", "рецепт хлеба на закваске", "Страница с рисунком круглого хлеба с хрустящей корочкой.", "Послушать the recipe for sourdough bread", p("l7-2")),
    v("ensf7-3", "an espresso machine", "кофемашина для эспрессо", "Маленькая блестящая кофемашина с двумя рычагами.", "Послушать an espresso machine", p("l7-3")),
    v("ensf7-4", "You can make great coffee now.", "Теперь ты умеешь варить отличный кофе.", "Мурзик гордо держит чашку с сердечком на пенке.", "Послушать You can make great coffee now", p("l7-4")),
    v("ensf7-5", "We're going to Canada.", "Мы едем в Канаду.", "Том показывает на карте север.", "Послушать We're going to Canada", p("l7-5")),
    v("ensf7-6", "I'm proud of you!", "Я тобой горжусь!", "Дэниел обнимает Мурзика.", "Послушать I'm proud of you", p("l7-6")),
    v("ensf7-7", "Take care, buddy!", "Береги себя, дружище!", "Дэниел машет у дверей кофейни в тумане.", "Послушать Take care, buddy", p("l7-7")),
  ],
  dialogue: {
    title: "Десятая страница",
    note: "Sourdough — хлеб на закваске, знаменитый хлеб Сан-Франциско. Buddy — «дружище» (по-американски).",
    lines: [
      line("daniel", "Come here, Murzik! This page is from Mrs Hope's book.", "Иди сюда, Мурзик! Эта страница — из книги миссис Хоуп."),
      line("murzik", "The recipe for sourdough bread!", "Рецепт хлеба на закваске!"),
      line("daniel", "And this espresso machine is for your café. You can make great coffee now!", "А эта кофемашина — для твоего кафе. Теперь ты умеешь варить отличный кофе!"),
      line("murzik", "Thank you, Daniel! I can't believe it!", "Спасибо, Дэниел! Не могу поверить!"),
      line("tom", "Where's the next page?", "Где следующая страница?"),
      line("daniel", "In Vancouver, in Canada. Ask Dr Lee. I'm proud of you, buddy!", "В Ванкувере, в Канаде. Спросите доктора Ли. Я тобой горжусь, дружище!"),
    ],
    gist: choice("ensf7-d1", "Что дарит Дэниел для кафе?", [
      ["Кофемашину.", true],
      ["Фартук.", false],
      ["Кофемолку.", false],
    ]),
  },
  grammar: [
    {
      title: "Работа и умения: всё вместе",
      paragraphs: [
        "О работе: What do you do? — I'm a cook. I work in a café. О других: What does she do? — She studies at university.",
        "Умения и просьбы: I can make coffee. I can't drive. Can you help me? Can I sit here? Указания: Be careful! Don't worry!",
      ],
      examples: [
        { ru: "I'm a barista. I can make great coffee.", en: "Я бариста. Я умею варить отличный кофе." },
        { ru: "Can you help me, please? — Sure!", en: "Поможешь мне? — Конечно!" },
      ],
    },
  ],
  tasks: [
    listen("ensf7-t1", "Аудиоэкзамен. Что рассказывает Дэниел?", "I was a programmer. Now I'm a barista. I can make coffee, but I can't cook. I love my job.", [
      ["Был программистом, теперь бариста, варит кофе, но не готовит.", true],
      ["Был поваром, теперь программист, умеет готовить.", false],
      ["Всегда был бариста, не любит свою работу.", false],
    ]),
    choice("ensf7-t2", "Выбери правильное предложение.", [
      ["She can speak French.", true],
      ["She can speaks French.", false],
      ["She cans speak French.", false],
    ], { skill: "grammar" }),
    match("ensf7-t3", "Соедини пары.", [
      ["proud", "гордый"],
      ["buddy", "дружище"],
      ["believe", "верить"],
      ["Come here!", "Иди сюда!"],
    ], { skill: "words" }),
    spell("ensf7-t4", "Собери из букв слово «кофе».", "coffee"),
    speak("ensf7-t5", "What do you do and what can you do?", "I'm a student. I can speak English and I can cook.", "Я студент(ка). Говорю по-английски и умею готовить.", { help: "Расскажи вслух о своей работе и умениях." }),
    script("ensf7-t6", "Вспомни весь Сан-Франциско. Закончи разговоры.", [
      { speaker: "Дэниел", text: "What do you do?" },
      { speaker: "Ты", answer: "I'm a teacher.", options: ["I'm a teacher.", "I'm teacher.", "I do a teacher."] },
      { speaker: "Дэниел", text: "Can you make coffee?" },
      { speaker: "Ты", answer: "Yes, I can.", options: ["Yes, I can.", "Yes, I do.", "Yes, I make."] },
      { speaker: "Дэниел", text: "Can you help me with this box?" },
      { speaker: "Ты", answer: "Sure! No problem!", options: ["Sure! No problem!", "Sorry, you can't.", "Don't worry!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "espresso",
    itemName: "Кофемашина",
    itemNameRu: "Espresso machine",
    ru: "Hooray! An espresso machine!",
    en: "Ура! Кофемашина!",
    a11y: "Маленькая блестящая кофемашина для эспрессо с двумя рычагами и медными деталями.",
    image: p("espresso"),
    steps: ["Дэниел ставит на стойку маленькую кофемашину.", "Она блестит, как новая.", "«Your first coffee machine. Make people happy!» — «Твоя первая кофемашина. Делай людей счастливыми!»", "Мурзик бережно упаковывает её в чемодан."],
    bridge: "Следующая страница — на севере, в Ванкувере, у доктора Ли.",
  },
};

const story: CityStory = {
  home: {
    name: "Комната над кофейней на холме",
    nameRu: "Murzik's room in San Francisco",
    image: p("home"),
    a11y: "Пустая комната с эркером над кофейней на крутой улице. В окне — залив и красный мост в тумане. Посередине чемодан Мурзика.",
  },
  keepsakeId: "espresso",
  welcomeRu: "Hello, San Francisco!",
  welcomeEn: "Привет, Сан-Франциско!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том в Сан-Франциско: красный мост в тумане, крутые улицы, старый трамвайчик едет в гору.",
  departureImage: p("departure"),
  departureA11y: "Дэниел в фартуке машет на прощание у дверей кофейни, вокруг клубится туман.",
  finale: [
    {
      image: p("page"),
      a11y: "Крупно: десятая страница книги рецептов, рецепт хлеба на закваске. На полях записка от руки.",
      lines: [
        { en: "Мурзик вклеивает десятую страницу. На полях — записка миссис Хоуп:" },
        { ru: "At my café, I learned something new every day.", en: "В моём кафе я каждый день училась чему-то новому." },
        { en: "Мурзик вспоминает свою первую разбитую чашку и десятую идеальную чашку кофе." },
      ],
    },
    {
      image: p("espresso"),
      a11y: "Мурзик обходит свою комнату над кофейней, которую обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свою комнату в Сан-Франциско. Том фотографирует её для журнала." },
        { en: "Для будущего кафе он берёт с собой кофемашину Дэниела." },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "San Francisco complete!", en: "Сан-Франциско пройден!" },
        { en: "7 / 7 уроков" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Дэниел машет на прощание.",
      lines: [
        { ru: "Goodbye, Daniel!", en: "Пока, Дэниел!" },
        { ru: "Next stop: Vancouver!", en: "Следующая остановка: Ванкувер!" },
      ],
    },
    {
      image: p("train"),
      a11y: "Поезд едет на север вдоль побережья, за окном леса и горы.",
      lines: [{ ru: "San Francisco → Vancouver", en: "Сан-Франциско → Ванкувер" }],
    },
    {
      image: pic("en/vancouver/arrival"),
      a11y: "Мурзик и Том в Ванкувере: высокие ели, заснеженные горы над морем, стеклянные дома у воды.",
      lines: [
        { ru: "Hello, Vancouver!", en: "Привет, Ванкувер!" },
        { ru: "Look at the mountains!", en: "Смотри, какие горы!" },
      ],
    },
  ],
};

export const enSanFrancisco = {
  id: "en-sanfrancisco",
  name: "Сан-Франциско",
  nameEn: "San Francisco",
  lessons: [sanfrancisco1, sanfrancisco2, sanfrancisco3, sanfrancisco4, sanfrancisco5, sanfrancisco6, sanfrancisco7],
  story,
};
