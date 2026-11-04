import { pic } from "../art";
import { read } from "../make";
import type { CityStory, Lesson } from "../types";
import { choice, fill, letter, line, listen, match, script, speak, tf, v } from "../tr/make";

/*
 * Йорк · «Потерялась вещь» · A2, уроки 1–7.
 * Фургон «Hope on Wheels» стоит у старой городской стены. Белла (около 20) водит вечерние экскурсии
 * «по местам призраков». Артур (около 75) держит чайную и печёт йоркширский пудинг. На второй день
 * пропадает книга дороги с шестью рецептами! Её возвращает честная туристка из Японии, Юки.
 * Грамматика: местоимения — объектные (me, him, her, them), притяжательные (mine, yours, ours, theirs),
 * whose; something / anything / nothing, someone / anyone / no one; описание вещи.
 */

const p = (name: string) => pic(`en/york/${name}`);

const york1: Lesson = {
  id: "en-a2-york-1",
  level: "A2",
  cityId: "en-york",
  number: 1,
  title: "Is it yours? — Это ваше?",
  minutes: 8,
  goals: ["Спросить, чья вещь, и ответить", "Повторить mine, yours, ours, theirs", "Объектные местоимения: give it to him"],
  vocabNote: "Повторяем: mine — мой, yours — твой / ваш, his — его, hers — её, ours — наш, theirs — их. Их ставят без существительного: It's mine.",
  vocab: [
    v("enyk1-1", "Someone left this.", "Кто-то это оставил.", "На столике у фургона лежит забытый зонт.", "Послушать Someone left this", p("l1-1")),
    v("enyk1-2", "It isn't ours.", "Это не наше.", "Мурзик и Том качают головами.", "Послушать It isn't ours", p("l1-2")),
    v("enyk1-3", "Maybe it's theirs.", "Может, это их.", "Мурзик показывает на группу туристов вдалеке.", "Послушать Maybe it's theirs", p("l1-3")),
    v("enyk1-4", "Give it to them.", "Отдай это им.", "Том протягивает зонт туристам.", "Послушать Give it to them", p("l1-4")),
    v("enyk1-5", "a ghost walk", "экскурсия «по местам призраков»", "Девушка в длинном чёрном плаще с фонарём ведёт группу.", "Послушать a ghost walk", p("l1-5")),
    v("enyk1-6", "a lantern", "фонарь", "Старинный фонарь со свечой внутри.", "Послушать a lantern", p("l1-6")),
    v("enyk1-7", "the Shambles", "Шамблс (старая улочка в Йорке)", "Узкая средневековая улица, верхние этажи домов почти касаются друг друга.", "Послушать the Shambles", p("l1-7")),
    v("enyk1-8", "I'll show you.", "Я тебе покажу.", "Белла поднимает фонарь и улыбается.", "Послушать I'll show you", p("l1-8")),
  ],
  letters: [
    letter("ghost = [гоуст]", "В ghost буква h не читается: [гоуст].", "a ghost walk", "экскурсия «по местам призраков»"),
    letter("York = [йо:к]", "R не звучит, долгое [о:]: York [йо:к], walk [уо:к].", "a walk in York", "прогулка по Йорку"),
  ],
  dialogue: {
    title: "У городской стены",
    note: "Bella водит экскурсии вечером. Ghost — призрак. Spooky — жутковато.",
    lines: [
      line("murzik", "Tom, someone left this umbrella. Is it yours?", "Том, кто-то оставил этот зонт. Это твой?"),
      line("tom", "No, it isn't mine. And it isn't ours.", "Нет, не мой. И не наш."),
      line("bella", "Excuse me! That's my umbrella. Sorry — I'm Bella. I do ghost walks.", "Простите! Это мой зонт. Извините — я Белла. Я вожу экскурсии по местам призраков."),
      line("murzik", "Here you are. Ghosts? In York?", "Вот, держите. Призраки? В Йорке?"),
      line("bella", "York has more ghosts than any other city in England! Come tonight, I'll show you.", "В Йорке призраков больше, чем в любом городе Англии! Приходите вечером, я вам покажу."),
      line("tom", "Murzik isn't scared of anything. Are you, Murzik?", "Мурзик ничего не боится. Правда, Мурзик?"),
    ],
    gist: choice("enyk1-d1", "Чей был зонт?", [
      ["Беллы.", true],
      ["Тома.", false],
      ["Каких-то туристов.", false],
    ]),
  },
  grammar: [
    {
      title: "Объектные местоимения",
      paragraphs: [
        "После глагола или предлога: I → me, you → you, he → him, she → her, it → it, we → us, they → them. Give it to him. Show me. Come with us.",
        "Притяжательные без существительного: mine, yours, his, hers, ours, theirs. Is it yours? — No, it's hers.",
      ],
      examples: [
        { ru: "Can you help me? — Sure, I'll help you.", en: "Поможешь мне? — Конечно, помогу." },
        { ru: "These bags aren't ours. They're theirs.", en: "Эти сумки не наши, а их." },
      ],
    },
  ],
  tasks: [
    listen("enyk1-t1", "Послушай. Чем занимается Белла?", "Sorry — I'm Bella. I do ghost walks.", [
      ["Водит экскурсии по местам призраков.", true],
      ["Продаёт зонты.", false],
      ["Работает в фургоне.", false],
    ]),
    choice("enyk1-t2", "Как сказать «Отдай это ему»?", [
      ["Give it to him.", true],
      ["Give it to he.", false],
      ["Give him to it.", false],
    ], { skill: "grammar" }),
    fill("enyk1-t3", "Выбери правильное слово: «Эти сумки не наши».", "These bags aren't", ".", "ours", ["ours", "our", "us"], { skill: "grammar" }),
    read("enyk1-t4", "Прочитай афишу. Во сколько начинается экскурсия?", "YORK GHOST WALK\nEvery night at 7:30 pm\nMeet by the city walls\nBring a torch — or borrow our lantern!", [
      ["В 19:30.", true],
      ["В 17:30.", false],
      ["В полночь.", false],
    ]),
    match("enyk1-t5", "Соедини пары.", [
      ["a lantern", "фонарь"],
      ["a ghost walk", "экскурсия «по местам призраков»"],
      ["It isn't ours.", "Это не наше."],
      ["I'll show you.", "Я тебе покажу."],
    ], { skill: "words" }),
    tf("enyk1-t6", "В ghost буква h читается.", false, "words"),
    speak("enyk1-t7", "Is this phone yours?", "No, it isn't mine. Maybe it's theirs. I'll give it to them.", "Нет, не мой. Может, это их. Я им отдам.", {
      help: "Ответь вслух: это не твоё, и ты отдашь владельцам.",
    }),
  ],
  reward: {
    itemId: "lost-box",
    itemName: "Коробка для забытых вещей",
    itemNameRu: "Lost and found box",
    ru: "Our own lost and found!",
    en: "Наше собственное бюро находок!",
    a11y: "Под окошком фургона стоит деревянный ящик с надписью «Lost & Found», в нём перчатка, ключи и детская игрушка.",
    image: p("lost-box"),
    steps: ["Туристы часто забывают вещи у фургона.", "Том сколачивает деревянный ящик.", "Мурзик пишет на нём: «Lost & Found».", "Первой туда попадает одна перчатка."],
    bridge: "Вечером — экскурсия с Беллой. А утром случается настоящая беда: пропадает книга дороги!",
  },
};

const york2: Lesson = {
  id: "en-a2-york-2",
  level: "A2",
  cityId: "en-york",
  number: 2,
  title: "Our road book is gone! — Пропала книга дороги!",
  minutes: 8,
  goals: ["Сказать, что вещь пропала", "Something, anything, nothing", "Вспомнить, где видел(а) вещь в последний раз"],
  vocabNote: "Something — в утверждении, anything — в вопросе и отрицании, nothing — «ничего» (без not): I can't see anything = I can see nothing.",
  vocab: [
    v("enyk2-1", "It's gone!", "Пропала! Её нет!", "Мурзик в ужасе смотрит на пустую полку.", "Послушать It's gone", p("l2-1")),
    v("enyk2-2", "When did you last see it?", "Когда ты видел(а) её в последний раз?", "Том задумчиво чешет голову.", "Послушать When did you last see it", p("l2-2")),
    v("enyk2-3", "I had it last night.", "Вчера вечером она была у меня.", "Мурзик с книгой дороги на экскурсии, с фонарём.", "Послушать I had it last night", p("l2-3")),
    v("enyk2-4", "Did you see anything?", "Ты что-нибудь видел(а)?", "Том заглядывает под столики фургона.", "Послушать Did you see anything", p("l2-4")),
    v("enyk2-5", "I didn't see anything.", "Я ничего не видел(а).", "Белла разводит руками.", "Послушать I didn't see anything", p("l2-5")),
    v("enyk2-6", "something important", "что-то важное", "Шесть рецептов, вклеенных в голубую тетрадь.", "Послушать something important", p("l2-6")),
    v("enyk2-7", "Let's think.", "Давай подумаем.", "Мурзик садится и закрывает глаза.", "Послушать Let's think", p("l2-7")),
    v("enyk2-8", "Retrace your steps.", "Пройди тем же путём, вспомни, где был(а).", "Пунктирная линия по карте Йорка: стена, собор, Шамблс.", "Послушать Retrace your steps", p("l2-8")),
  ],
  letters: [
    letter("anything = [Энисиŋ]", "Any читается [Эни], а не [Ани]. Th — кончик языка между зубами, ближе к [с]: anything [Энисиŋ].", "Did you see anything?", "Ты что-нибудь видел(а)?"),
  ],
  dialogue: {
    title: "Утро без книги",
    note: "Gone — пропал, исчез. Last — в последний раз: When did you last see it?",
    lines: [
      line("murzik", "Tom! The road book — it's gone!", "Том! Книга дороги — её нет!"),
      line("tom", "What? Six recipes! When did you last see it?", "Что? Шесть рецептов! Когда ты видел её в последний раз?"),
      line("murzik", "I had it last night, on the ghost walk. I drew a ghost in it.", "Вчера вечером она была у меня, на экскурсии. Я нарисовал в ней призрака."),
      line("bella", "Oh no! I didn't see anything. But let's think.", "О нет! Я ничего не видела. Но давайте подумаем."),
      line("bella", "We went to the walls, then the cathedral, then the Shambles. Let's retrace our steps.", "Мы ходили к стене, потом к собору, потом на Шамблс. Давайте пройдём тем же путём."),
      line("tom", "The festival in London is in August. Without the book, we've got nothing!", "Фестиваль в Лондоне — в августе. Без книги у нас ничего нет!"),
    ],
    gist: choice("enyk2-d1", "Где Мурзик видел книгу в последний раз?", [
      ["Вчера вечером на экскурсии.", true],
      ["Утром в фургоне.", false],
      ["В Манчестере.", false],
    ]),
  },
  grammar: [
    {
      title: "Something, anything, nothing",
      paragraphs: [
        "Утверждение — something: I saw something. Вопрос и отрицание с not — anything: Did you see anything? I didn't see anything.",
        "Nothing — уже с «не»: I saw nothing. Нельзя I didn't see nothing. Так же: someone / anyone / no one, somewhere / anywhere / nowhere.",
      ],
      examples: [
        { ru: "Is there anything in the box? — No, there's nothing.", en: "В коробке что-нибудь есть? — Нет, ничего." },
        { ru: "Someone took my bag!", en: "Кто-то взял мою сумку!" },
      ],
    },
  ],
  tasks: [
    listen("enyk2-t1", "Послушай. Что Мурзик делал с книгой на экскурсии?", "I had it last night, on the ghost walk. I drew a ghost in it.", [
      ["Рисовал в ней призрака.", true],
      ["Читал рецепты.", false],
      ["Показывал Белле.", false],
    ]),
    choice("enyk2-t2", "Как сказать «Я ничего не видел(а)»?", [
      ["I didn't see anything.", true],
      ["I didn't see nothing.", false],
      ["I didn't see something.", false],
    ], { skill: "grammar" }),
    fill("enyk2-t3", "Выбери правильное слово.", "I didn't see", "last night.", "anything", ["anything", "nothing", "no one"], { skill: "grammar" }),
    read("enyk2-t4", "Прочитай записку Мурзика. Где они были вчера в восемь?", "Last night:\n7:30 — city walls\n8:00 — cathedral\n8:30 — the Shambles\n9:00 — back to the van. No book!", [
      ["У собора.", true],
      ["У городской стены.", false],
      ["На Шамблс.", false],
    ]),
    match("enyk2-t5", "Соедини пары.", [
      ["It's gone!", "Пропала!"],
      ["something important", "что-то важное"],
      ["Let's think.", "Давай подумаем."],
      ["Retrace your steps.", "Пройди тем же путём."],
    ], { skill: "words" }),
    tf("enyk2-t6", "I saw nothing и I didn't see anything значат одно и то же.", true, "grammar"),
    speak("enyk2-t7", "I've lost my keys!", "Don't worry. When did you last see them? Let's think and retrace your steps.", "Не волнуйся. Когда ты видел(а) их в последний раз? Давай подумаем и пройдём тем же путём.", {
      help: "Помоги другу вслух найти ключи.",
    }),
  ],
  reward: {
    itemId: "ghost-lantern",
    itemName: "Фонарь для экскурсий",
    itemNameRu: "Ghost walk lantern",
    ru: "A lantern to find things in the dark!",
    en: "Фонарь — искать в темноте!",
    a11y: "На крючке у двери фургона висит старинный чёрный фонарь со стеклянными стенками и свечой.",
    image: p("ghost-lantern"),
    steps: ["Белла даёт Мурзику свой запасной фонарь.", "«To help you look», — говорит она. «Чтобы легче было искать».", "Мурзик заглядывает с ним под каждый столик.", "Книги нигде нет."],
    bridge: "Белла предлагает: «Try the lost property office! People often hand things in there».",
  },
};

const york3: Lesson = {
  id: "en-a2-york-3",
  level: "A2",
  cityId: "en-york",
  number: 3,
  title: "The lost property office — Бюро находок",
  minutes: 8,
  goals: ["Описать потерянную вещь", "Заполнить анкету", "It's made of…, there's a … on the cover"],
  vocabNote: "Lost property office — бюро находок. Describe — описать. Made of — сделан из.",
  vocab: [
    v("enyk3-1", "the lost property office", "бюро находок", "Окошко с табличкой «Lost Property», за ним полки с вещами.", "Послушать the lost property office", p("l3-1")),
    v("enyk3-2", "Can you describe it?", "Вы можете её описать?", "Служащий с ручкой и бланком.", "Послушать Can you describe it", p("l3-2")),
    v("enyk3-3", "It's about this big.", "Она примерно вот такая.", "Мурзик показывает лапами размер.", "Послушать It's about this big", p("l3-3")),
    v("enyk3-4", "It's made of paper and cloth.", "Она из бумаги и ткани.", "Голубая тканевая обложка, бумажные страницы.", "Послушать It's made of paper and cloth", p("l3-4")),
    v("enyk3-5", "There's a van on the cover.", "На обложке нарисован фургон.", "Обложка с нарисованным голубым фургоном.", "Послушать There's a van on the cover", p("l3-5")),
    v("enyk3-6", "a form", "бланк, анкета", "Бланк с графами: Name, Item, Description.", "Послушать a form", p("l3-6")),
    v("enyk3-7", "Fill in the form.", "Заполните бланк.", "Том заполняет бланк.", "Послушать Fill in the form", p("l3-7")),
    v("enyk3-8", "We'll call you if it turns up.", "Мы позвоним, если она найдётся.", "Служащий кладёт бланк в папку.", "Послушать We'll call you if it turns up", p("l3-8")),
  ],
  letters: [
    letter("describe = [дискрАйб]", "Ударение на второй слог: [дискрАйб].", "Can you describe it?", "Можете описать?"),
  ],
  dialogue: {
    title: "У окошка",
    note: "Item — предмет, вещь. Turn up — найтись, объявиться.",
    lines: [
      line("clerk", "Good morning. What have you lost?", "Доброе утро. Что вы потеряли?"),
      line("murzik", "A notebook. Our road book. It's very important.", "Тетрадь. Нашу книгу дороги. Она очень важная."),
      line("clerk", "Can you describe it?", "Вы можете её описать?"),
      line("murzik", "It's about this big. It's blue, made of paper and cloth. There's a van on the cover.", "Она примерно вот такая. Голубая, из бумаги и ткани. На обложке нарисован фургон."),
      line("clerk", "Nothing like that today, I'm afraid. Please fill in the form.", "Боюсь, сегодня ничего такого нет. Заполните, пожалуйста, бланк."),
      line("clerk", "We'll call you if it turns up.", "Мы позвоним вам, если она найдётся."),
    ],
    gist: choice("enyk3-d1", "Нашли ли книгу в бюро находок?", [
      ["Нет, но обещали позвонить.", true],
      ["Да, она лежала на полке.", false],
      ["Да, но её уже кто-то забрал.", false],
    ]),
  },
  grammar: [
    {
      title: "Как описать вещь",
      paragraphs: [
        "Размер и цвет: It's small / about this big. It's blue. Материал: It's made of leather / paper / wood.",
        "Что на ней: There's a van on the cover. It's got a red strap. Внутри: There are six recipes inside.",
      ],
      examples: [
        { ru: "It's a small black bag made of leather.", en: "Это маленькая чёрная кожаная сумка." },
        { ru: "It's got my name inside.", en: "Внутри написано моё имя." },
      ],
    },
  ],
  tasks: [
    listen("enyk3-t1", "Послушай. Что нарисовано на обложке?", "It's blue, made of paper and cloth. There's a van on the cover.", [
      ["Фургон.", true],
      ["Призрак.", false],
      ["Кот.", false],
    ]),
    choice("enyk3-t2", "Как сказать «Она сделана из кожи»?", [
      ["It's made of leather.", true],
      ["It's made from leathers it.", false],
      ["It made of leather.", false],
    ], { skill: "grammar" }),
    fill("enyk3-t3", "Выбери правильное слово.", "There's a van on the", ".", "cover", ["cover", "covered", "cave"], { skill: "words" }),
    read("enyk3-t4", "Прочитай бланк Тома. Какой телефон для связи?", "LOST PROPERTY FORM\nName: Tom (Hope on Wheels)\nItem: notebook (blue, cloth cover, van picture)\nLost: last night, city centre\nPhone: 07700 900123", [
      ["07700 900123.", true],
      ["Его нет в бланке.", false],
      ["Номер Беллы.", false],
    ]),
    match("enyk3-t5", "Соедини пары.", [
      ["a form", "бланк"],
      ["Fill in the form.", "Заполните бланк."],
      ["Can you describe it?", "Можете описать?"],
      ["the lost property office", "бюро находок"],
    ], { skill: "words" }),
    script("enyk3-t6", "Ты в бюро находок.", [
      { speaker: "Служащий", text: "What have you lost?" },
      { speaker: "Ты", answer: "My bag. It's small and black.", options: ["My bag. It's small and black.", "My bag. It's made of black.", "Fill in the form."] },
      { speaker: "Служащий", text: "Anything inside?" },
      { speaker: "Ты", answer: "Yes, my phone and my keys.", options: ["Yes, my phone and my keys.", "No, nothing anything.", "Yes, it turns up."] },
    ], { skill: "speaking" }),
    speak("enyk3-t7", "Can you describe your bag?", "It's a small brown bag made of leather. It's got a red strap, and there's a book inside.", "Это маленькая коричневая кожаная сумка. У неё красный ремешок, внутри книга.", {
      help: "Опиши вслух свою сумку или рюкзак.",
    }),
  ],
  reward: {
    itemId: "book-strap",
    itemName: "Кожаный ремешок для книги",
    itemNameRu: "Leather book strap",
    ru: "When we find it — it'll stay with us!",
    en: "Когда найдём — больше никогда не выпадет!",
    a11y: "На полке фургона лежит коричневый кожаный ремешок с маленькой пряжкой, рядом — пустое место для книги.",
    image: p("book-strap"),
    steps: ["Рядом с бюро находок — лавка кожаных изделий.", "Том покупает ремешок для книги.", "«For when we find it», — говорит он. «На то время, когда найдём».", "Мурзик молчит. Он очень надеется."],
    bridge: "Мурзик пытается вспомнить вечер по минутам. Кому он показывал книгу? С кем говорил?",
  },
};

const york4: Lesson = {
  id: "en-a2-york-4",
  level: "A2",
  cityId: "en-york",
  number: 4,
  title: "I showed it to her — Я показал её ей",
  minutes: 8,
  goals: ["Рассказать, кому что показал(а) и дал(а)", "Объектные местоимения в рассказе", "Someone, anyone, no one"],
  vocabNote: "Show something to someone = show someone something: I showed it to her = I showed her the book.",
  vocab: [
    v("enyk4-1", "I showed it to her.", "Я показал(а) её ей.", "Мурзик показывает книгу девушке с рюкзаком.", "Послушать I showed it to her", p("l4-1")),
    v("enyk4-2", "She gave it back to me.", "Она вернула её мне.", "Женщина протягивает книгу обратно.", "Послушать She gave it back to me", p("l4-2")),
    v("enyk4-3", "a tourist", "турист(ка)", "Девушка с большим рюкзаком и картой.", "Послушать a tourist", p("l4-3")),
    v("enyk4-4", "Did anyone take it?", "Кто-нибудь её взял?", "Мурзик и Белла смотрят друг на друга.", "Послушать Did anyone take it", p("l4-4")),
    v("enyk4-5", "No one saw it.", "Никто её не видел.", "Пустая улица, фонарь качается.", "Послушать No one saw it", p("l4-5")),
    v("enyk4-6", "I put it down on a bench.", "Я положил(а) её на скамейку.", "Скамейка у собора, на ней что-то голубое.", "Послушать I put it down on a bench", p("l4-6")),
    v("enyk4-7", "I forgot it!", "Я её забыл(а)!", "Мурзик хватается за голову.", "Послушать I forgot it", p("l4-7")),
    v("enyk4-8", "the Minster", "Йоркский собор (Минстер)", "Огромный готический собор с тремя башнями.", "Послушать the Minster", p("l4-8")),
  ],
  letters: [
    letter("put = [пут]", "Put — неправильный глагол, во всех формах одинаковый: put — put — put.", "I put it down.", "Я положил(а) её."),
  ],
  dialogue: {
    title: "По минутам",
    note: "Put down — положить. Then — потом. Japanese [джэпэнИ:з] — японский / японка.",
    lines: [
      line("bella", "So, at the Minster — what did you do?", "Итак, у собора — что ты делал?"),
      line("murzik", "A Japanese tourist asked about the book. I showed it to her.", "Одна японская туристка спросила про книгу. Я показал её ей."),
      line("bella", "Did she take it?", "Она её взяла?"),
      line("murzik", "No, she gave it back to me. Then… I put it down on a bench to take a photo.", "Нет, она вернула её мне. Потом… я положил её на скамейку, чтобы сфотографировать."),
      line("tom", "And then?", "А потом?"),
      line("murzik", "Then you called me. And I… I forgot it! I left it on the bench by the Minster!", "Потом ты меня позвал. И я… я её забыл! Оставил на скамейке у собора!"),
    ],
    gist: choice("enyk4-d1", "Где Мурзик забыл книгу?", [
      ["На скамейке у собора.", true],
      ["В бюро находок.", false],
      ["У туристки в сумке.", false],
    ]),
  },
  grammar: [
    {
      title: "Give / show + местоимения",
      paragraphs: [
        "Два варианта: show her the book = show the book to her. Если вещь — it, говорим только с to: show it to her (не show her it).",
        "Someone / anyone / no one: Someone took it. Did anyone see it? No one saw it (= Nobody saw it).",
      ],
      examples: [
        { ru: "Can you give it to me, please?", en: "Дай мне это, пожалуйста." },
        { ru: "No one called us today.", en: "Сегодня нам никто не звонил." },
      ],
    },
  ],
  tasks: [
    listen("enyk4-t1", "Послушай. Что сделала туристка с книгой?", "No, she gave it back to me.", [
      ["Вернула её Мурзику.", true],
      ["Унесла с собой.", false],
      ["Положила на скамейку.", false],
    ]),
    choice("enyk4-t2", "Как правильно: «Я показал(а) её ей»?", [
      ["I showed it to her.", true],
      ["I showed her it to.", false],
      ["I showed to she it.", false],
    ], { skill: "grammar" }),
    fill("enyk4-t3", "Выбери правильное слово.", "", "saw it. The street was empty.", "No one", ["No one", "Anyone", "Someone not"], { skill: "grammar" }),
    read("enyk4-t4", "Прочитай табличку у собора. Когда собор открывается в воскресенье?", "YORK MINSTER\nOpen to visitors: Mon–Sat 9:30–16:30\nSunday: 12:45–15:00", [
      ["В 12:45.", true],
      ["В 9:30.", false],
      ["Он закрыт.", false],
    ]),
    match("enyk4-t5", "Соедини пары.", [
      ["a tourist", "турист(ка)"],
      ["I forgot it!", "Я её забыл(а)!"],
      ["No one saw it.", "Никто её не видел."],
      ["the Minster", "Йоркский собор"],
    ], { skill: "words" }),
    tf("enyk4-t6", "Put в прошедшем времени — тоже put.", true, "grammar"),
    speak("enyk4-t7", "What did you do with my pen?", "I borrowed it, and then I gave it to Tom. Ask him!", "Я её взял(а), а потом отдал(а) Тому. Спроси у него!", {
      help: "Объясни вслух, кому ты отдал(а) ручку.",
    }),
  ],
  reward: {
    itemId: "bench-sign",
    itemName: "Табличка «Скамейка Мурзика»",
    itemNameRu: "Murzik's bench sign",
    ru: "Murzik's Bench — never forget again!",
    en: "Скамейка Мурзика — больше никогда не забуду!",
    a11y: "На стенке фургона висит маленькая деревянная табличка «Murzik's Bench — remember your things!».",
    image: p("bench-sign"),
    steps: ["Белла смеётся: «That bench will be famous!»", "Она обещает вырезать маленькую табличку: «Murzik's Bench».", "Мурзик повесит её на фургон — для памяти.", "Но сначала надо бежать к скамейке…"],
    bridge: "Они бегут к собору. Скамейка пуста. Но вдруг кто-то зовёт: «Excuse me! Is this yours?»",
  },
};

const york5: Lesson = {
  id: "en-a2-york-5",
  level: "A2",
  cityId: "en-york",
  number: 5,
  title: "The honest tourist — Честная туристка",
  minutes: 8,
  goals: ["Поблагодарить и ответить на благодарность", "Whose…? в вопросах", "Предложить что-то в благодарность"],
  vocabNote: "Whose — чей. Whose handwriting is this? — Чей это почерк? How can we thank you? — Как нам вас отблагодарить?",
  vocab: [
    v("enyk5-1", "I found this on the bench.", "Я нашла это на скамейке.", "Девушка с рюкзаком держит голубую тетрадь.", "Послушать I found this on the bench", p("l5-1")),
    v("enyk5-2", "Whose handwriting is this?", "Чей это почерк?", "Страница с рецептом, написанным от руки.", "Послушать Whose handwriting is this", p("l5-2")),
    v("enyk5-3", "honest", "честный", "Юки улыбается, протягивая книгу.", "Послушать honest", p("l5-3")),
    v("enyk5-4", "You've saved us!", "Вы нас спасли!", "Мурзик обнимает книгу.", "Послушать You've saved us", p("l5-4")),
    v("enyk5-5", "How can we thank you?", "Как нам вас отблагодарить?", "Том показывает на фургон.", "Послушать How can we thank you", p("l5-5")),
    v("enyk5-6", "It was nothing.", "Пустяки, не за что.", "Юки скромно машет рукой.", "Послушать It was nothing", p("l5-6")),
    v("enyk5-7", "It's on the house.", "За счёт заведения.", "Том ставит перед Юки чай и пирог.", "Послушать It's on the house", p("l5-7")),
    v("enyk5-8", "a lucky cat", "манэки-нэко, кошка на удачу", "Белая фарфоровая кошка с поднятой лапкой.", "Послушать a lucky cat", p("l5-8")),
  ],
  letters: [
    letter("honest = [Онист]", "В honest буква h не читается: [Онист]. Поэтому an honest person.", "an honest tourist", "честная туристка"),
    letter("whose = [ху:з]", "Whose [ху:з] звучит так же, как who's (who is).", "Whose is it?", "Чьё это?"),
  ],
  dialogue: {
    title: "У собора",
    note: "Юки — туристка из Японии, она путешествует по Англии одна.",
    lines: [
      line("yuki", "Excuse me! Is this yours? I found this on the bench.", "Простите! Это ваше? Я нашла это на скамейке."),
      line("murzik", "Our road book! Yes, it's ours! Thank you so much — you've saved us!", "Наша книга дороги! Да, наша! Огромное спасибо — вы нас спасли!"),
      line("yuki", "I looked inside. Whose handwriting is this? It's beautiful.", "Я заглянула внутрь. Чей это почерк? Он красивый."),
      line("tom", "Lots of people's! Every recipe comes from a different city. How can we thank you?", "Разных людей! Каждый рецепт — из другого города. Как нам вас отблагодарить?"),
      line("yuki", "It was nothing. I'm Yuki. I'm travelling round England.", "Пустяки. Я Юки. Я путешествую по Англии."),
      line("tom", "Then have lunch at our van. It's on the house!", "Тогда пообедайте у нашего фургона. За счёт заведения!"),
    ],
    gist: choice("enyk5-d1", "Где Юки нашла книгу?", [
      ["На скамейке у собора.", true],
      ["В бюро находок.", false],
      ["На Шамблс.", false],
    ]),
  },
  grammar: [
    {
      title: "Whose",
      paragraphs: [
        "Whose + существительное: Whose bag is this? Whose handwriting is this? Или без существительного: Whose is this?",
        "Ответ: It's mine / hers / Tom's. Не путай whose (чей) и who's (= who is, кто).",
      ],
      examples: [
        { ru: "Whose phone is ringing? — It's Bella's.", en: "Чей телефон звонит? — Беллин." },
        { ru: "Who's that? — That's Yuki.", en: "Кто это? — Это Юки." },
      ],
    },
  ],
  tasks: [
    listen("enyk5-t1", "Послушай. Что говорит Юки про почерк?", "I looked inside. Whose handwriting is this? It's beautiful.", [
      ["Что он красивый.", true],
      ["Что он непонятный.", false],
      ["Что это её почерк.", false],
    ]),
    choice("enyk5-t2", "Как спросить «Чья это сумка?»", [
      ["Whose bag is this?", true],
      ["Who's bag is this?", false],
      ["Whose is bag this?", false],
    ], { skill: "grammar" }),
    fill("enyk5-t3", "Выбери правильное слово: «Кто это? — Это Юки».", "", "that? — That's Yuki.", "Who's", ["Who's", "Whose", "Who"], { skill: "grammar" }),
    read("enyk5-t4", "Прочитай записку Юки в книге дороги. Откуда она?", "Thank you for lunch! I'm from Osaka. Your van is the best in York. Good luck at the festival! Yuki", [
      ["Из Осаки.", true],
      ["Из Йорка.", false],
      ["Из Лондона.", false],
    ]),
    match("enyk5-t5", "Соедини пары.", [
      ["honest", "честный"],
      ["It was nothing.", "Пустяки."],
      ["It's on the house.", "За счёт заведения."],
      ["You've saved us!", "Вы нас спасли!"],
    ], { skill: "words" }),
    script("enyk5-t6", "Кто-то вернул тебе потерянную вещь.", [
      { speaker: "Юки", text: "Is this yours?" },
      { speaker: "Ты", answer: "Yes, it's mine! Thank you so much!", options: ["Yes, it's mine! Thank you so much!", "Yes, it's me! Thank you so much!", "Whose handwriting?"] },
      { speaker: "Юки", text: "It was nothing." },
      { speaker: "Ты", answer: "How can I thank you?", options: ["How can I thank you?", "How can I thank to you?", "It's on the bench."] },
    ], { skill: "speaking" }),
    speak("enyk5-t7", "I found your phone on the bus.", "Thank you so much! You're so honest. How can I thank you? Can I buy you a coffee?", "Огромное спасибо! Вы такой честный человек. Как вас отблагодарить? Можно угостить вас кофе?", {
      help: "Поблагодари вслух человека, который нашёл твой телефон.",
    }),
  ],
  reward: {
    itemId: "lucky-cat",
    itemName: "Кошка на удачу",
    itemNameRu: "Lucky cat",
    ru: "A lucky cat — she looks like me!",
    en: "Кошка на удачу — похожа на меня!",
    a11y: "На полке фургона сидит белая фарфоровая кошка манэки-нэко с поднятой лапкой и красным ошейником.",
    image: p("lucky-cat"),
    steps: ["После обеда Юки достаёт из рюкзака маленькую фарфоровую кошку.", "«In Japan, a lucky cat brings good luck to a shop».", "Она ставит её на полку фургона.", "Кошка машет лапкой каждому покупателю."],
    bridge: "Книга дороги снова дома. Вечером Артур из чайной зовёт всех к себе: «Proper Yorkshire food to celebrate!»",
  },
};

const york6: Lesson = {
  id: "en-a2-york-6",
  level: "A2",
  cityId: "en-york",
  number: 6,
  title: "Arthur's Yorkshire pudding — Йоркширский пудинг Артура",
  minutes: 8,
  goals: ["Понять рецепт", "Местоимения в рецепте: pour it in, leave them", "Сказать, как получилось: Mine rose! Yours didn't."],
  vocabNote: "Yorkshire pudding — не сладкий пудинг, а пышная запечённая «корзиночка» из жидкого теста. Его едят с мясом и подливкой.",
  vocab: [
    v("enyk6-1", "Whisk it well.", "Хорошо взбей.", "Миска с жидким тестом, венчик.", "Послушать Whisk it well", p("l6-1")),
    v("enyk6-2", "eggs, flour and milk", "яйца, мука и молоко", "Яйца, пакет муки и бутылка молока на столе.", "Послушать eggs, flour and milk", p("l6-2")),
    v("enyk6-3", "The oil must be very hot.", "Масло должно быть очень горячим.", "Форма с маслом в раскалённой духовке.", "Послушать The oil must be very hot", p("l6-3")),
    v("enyk6-4", "Pour it in quickly.", "Быстро влей.", "Тесто льётся в горячую форму, шипит.", "Послушать Pour it in quickly", p("l6-4")),
    v("enyk6-5", "Don't open the oven!", "Не открывай духовку!", "Артур загораживает дверцу духовки.", "Послушать Don't open the oven", p("l6-5")),
    v("enyk6-6", "They rise.", "Они поднимаются.", "Пудинги поднимаются в духовке, как короны.", "Послушать They rise", p("l6-6")),
    v("enyk6-7", "gravy", "мясная подливка", "Соусник с густой коричневой подливкой.", "Послушать gravy", p("l6-7")),
    v("enyk6-8", "Mine is flat!", "А мой плоский!", "Мурзик смотрит на свой плоский пудинг.", "Послушать Mine is flat", p("l6-8")),
  ],
  letters: [
    letter("Yorkshire = [йо:кшэ]", "Shire в конце звучит коротко: [йо:кшэ].", "Yorkshire pudding", "йоркширский пудинг"),
    letter("pour = [по:]", "Pour [по:] звучит как paw — лапа!", "Pour it in.", "Влей."),
  ],
  dialogue: {
    title: "Чайная Артура",
    note: "Proper — настоящий (разг.). Love — ласковое обращение на севере Англии.",
    lines: [
      line("arthur", "Whisk the eggs, flour and milk well. That's your batter. Now leave it for an hour.", "Хорошо взбей яйца, муку и молоко. Вот и тесто. Теперь оставь его на час."),
      line("arthur", "The oil must be very hot. Now pour the batter in — quickly!", "Масло должно быть очень горячим. Теперь быстро влей тесто!"),
      line("murzik", "Can I look at them?", "Можно на них посмотреть?"),
      line("arthur", "No! Don't open the oven, or they won't rise.", "Нет! Не открывай духовку, а то они не поднимутся."),
      line("tom", "Look — mine are huge!", "Смотри — мои огромные!"),
      line("murzik", "Mine is flat… I opened the oven.", "А мой плоский… Я открыл духовку."),
      line("arthur", "Never mind, love. With gravy, it's still delicious.", "Ничего, милый. С подливкой всё равно вкусно."),
    ],
    gist: choice("enyk6-d1", "Почему пудинг Мурзика плоский?", [
      ["Он открыл духовку.", true],
      ["Масло было слишком горячим.", false],
      ["Он забыл яйца.", false],
    ]),
  },
  grammar: [
    {
      title: "Местоимения в рецепте",
      paragraphs: [
        "Чтобы не повторять существительное: Mix the batter and leave it for an hour. Take the puddings out and eat them hot.",
        "Mine / yours вместо «мой пудинг / твой»: Mine is flat. Yours are huge!",
      ],
      examples: [
        { ru: "Heat the oil, then pour the batter into it.", en: "Разогрей масло, потом влей в него тесто." },
        { ru: "My cake is small, but yours is huge!", en: "Мой торт маленький, а твой огромный!" },
      ],
    },
  ],
  tasks: [
    listen("enyk6-t1", "Послушай. На сколько оставить тесто?", "That's your batter. Now leave it for an hour.", [
      ["На час.", true],
      ["На десять минут.", false],
      ["На ночь.", false],
    ]),
    choice("enyk6-t2", "Как сказать «Мой плоский, а твои огромные»?", [
      ["Mine is flat, but yours are huge.", true],
      ["My is flat, but your are huge.", false],
      ["Mine is flat, but your's are huge.", false],
    ], { skill: "grammar" }),
    read("enyk6-t3", "Прочитай рецепт Артура. Что нельзя делать 20 минут?", "YORKSHIRE PUDDINGS\n3 eggs, 100 g flour, 150 ml milk\n1. Mix. Leave for 1 hour.\n2. Heat oil in a tin at 230°.\n3. Pour in the batter. Bake 20 minutes.\nDON'T OPEN THE OVEN!", [
      ["Открывать духовку.", true],
      ["Смешивать тесто.", false],
      ["Греть масло.", false],
    ]),
    fill("enyk6-t4", "Выбери правильное слово.", "Take the puddings out and eat", "hot.", "them", ["them", "it", "they"], { skill: "grammar" }),
    match("enyk6-t5", "Соедини пары.", [
      ["Whisk it well.", "Хорошо взбей."],
      ["gravy", "подливка"],
      ["They rise.", "Они поднимаются."],
      ["Pour it in quickly.", "Быстро влей."],
    ], { skill: "words" }),
    tf("enyk6-t6", "Yorkshire pudding — это сладкий десерт.", false, "words"),
    speak("enyk6-t7", "How was your cooking today?", "My pancakes were flat, but my friend's were perfect. Next time, mine will be better!", "Мои блины вышли плоские, а у друга — идеальные. В следующий раз мои будут лучше!", {
      help: "Сравни вслух свою готовку с чужой: mine, yours, my friend's.",
    }),
  ],
  reward: {
    itemId: "pudding-tin",
    itemName: "Форма для пудингов",
    itemNameRu: "Yorkshire pudding tin",
    ru: "Twelve little puddings at once!",
    en: "Двенадцать пудингов сразу!",
    a11y: "На плите фургона стоит старая тёмная металлическая форма с двенадцатью круглыми ячейками.",
    image: p("pudding-tin"),
    steps: ["Артур дарит фургону свою старую форму.", "«Fifty years of Yorkshire puddings in that tin».", "Мурзик обещает больше никогда не открывать духовку.", "Почти обещает."],
    bridge: "Последний день в Йорке. Юки уезжает в Шотландию, Белла ведёт последнюю экскурсию, а Артур что-то пишет на карточке.",
  },
};

const york7: Lesson = {
  id: "en-a2-york-7",
  level: "A2",
  cityId: "en-york",
  number: 7,
  title: "York exam — Экзамен: Йорк",
  minutes: 9,
  goals: ["Понять длинный рассказ на слух", "Описать вещь и сказать, чья она", "Повторить всё из Йорка"],
  vocabNote: "Урок 7 — экзамен города: длинная аудиоистория и повторение всего из Йорка.",
  vocab: [
    v("enyk7-1", "Keep it with you.", "Держи её при себе.", "Мурзик застёгивает ремешок на книге дороги.", "Послушать Keep it with you", p("l7-1")),
    v("enyk7-2", "the Lake District", "Озёрный край", "Карта: стрелка из Йорка на северо-запад, к озёрам и горам.", "Послушать the Lake District", p("l7-2")),
    v("enyk7-3", "mountains and lakes", "горы и озёра", "Голубые озёра между зелёными горами.", "Послушать mountains and lakes", p("l7-3")),
    v("enyk7-4", "narrow roads", "узкие дороги", "Узкая дорога между каменными стенами, еле проходит машина.", "Послушать narrow roads", p("l7-4")),
    v("enyk7-5", "Take care of yourselves!", "Берегите себя!", "Артур машет полотенцем из двери чайной.", "Послушать Take care of yourselves", p("l7-5")),
    v("enyk7-6", "Give my love to…", "Передавай привет… (тёплый)", "Белла посылает воздушный поцелуй.", "Послушать Give my love to", p("l7-6")),
    v("enyk7-7", "Our seventh recipe!", "Наш седьмой рецепт!", "Мурзик держит новую карточку.", "Послушать Our seventh recipe", p("l7-7")),
    v("enyk7-8", "Nothing is lost.", "Ничего не потеряно.", "Книга дороги, крепко застёгнутая ремешком.", "Послушать Nothing is lost", p("l7-8")),
  ],
  letters: [
    letter("yourselves = [йо:сЭлвз]", "Yourselves — «себя» для «вы» во множественном числе: [йо:сЭлвз].", "Take care of yourselves!", "Берегите себя!"),
  ],
  dialogue: {
    title: "Прощание в чайной",
    note: "Seventh — седьмой. Give my love to — тёплое «передавай привет».",
    lines: [
      line("arthur", "Here's my Yorkshire pudding recipe. Put it in your road book — and keep the book with you!", "Вот мой рецепт йоркширского пудинга. Вклей его в книгу дороги — и держи книгу при себе!"),
      line("murzik", "Our seventh recipe! Don't worry, it's got a strap now.", "Наш седьмой рецепт! Не волнуйтесь, теперь у неё есть ремешок."),
      line("bella", "Where are you going next?", "Куда вы дальше?"),
      line("tom", "To the Lake District. Mountains and lakes!", "В Озёрный край. Горы и озёра!"),
      line("arthur", "The roads there are very narrow. Take care of yourselves!", "Дороги там очень узкие. Берегите себя!"),
      line("bella", "Give my love to Mrs Hope! See you at the festival in August.", "Передавайте привет миссис Хоуп! Увидимся на фестивале в августе."),
    ],
    gist: choice("enyk7-d1", "О чём предупреждает Артур?", [
      ["Дороги в Озёрном крае очень узкие.", true],
      ["В горах холодно.", false],
      ["Озёра опасны.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем Йорк",
      paragraphs: [
        "Местоимения: me, him, her, us, them; mine, yours, his, hers, ours, theirs; whose; show it to her, give it back to me.",
        "Something / anything / nothing, someone / anyone / no one. Описание вещи: It's blue, made of cloth, there's a van on the cover.",
      ],
      examples: [
        { ru: "Whose notebook is this? — It's ours. Someone found it and gave it back to us.", en: "Чья это тетрадь? — Наша. Кто-то нашёл её и вернул нам." },
        { ru: "I didn't lose anything today!", en: "Сегодня я ничего не потерял(а)!" },
      ],
    },
  ],
  tasks: [
    listen("enyk7-t1", "Аудиоистория: Белла рассказывает о самой странной находке. Послушай. Что она нашла?", "Last winter, after a ghost walk, I found something strange on the city walls — a big old key. No one knew whose it was. I took it to the lost property office. A week later an old man came for it. It was the key to his grandmother's house — the oldest house on the Shambles!", [
      ["Большой старый ключ.", true],
      ["Фонарь.", false],
      ["Тетрадь с рецептами.", false],
    ]),
    choice("enyk7-t2", "Из рассказа Беллы: чей это был ключ?", [
      ["Пожилого мужчины — от дома его бабушки.", true],
      ["Самой Беллы.", false],
      ["Служащего бюро находок.", false],
    ], { skill: "listening" }),
    choice("enyk7-t3", "Как сказать «Кто-то нашёл её и вернул нам»?", [
      ["Someone found it and gave it back to us.", true],
      ["Anyone found it and gave it back to we.", false],
      ["Someone found it and gave us it back to.", false],
    ], { skill: "grammar" }),
    read("enyk7-t4", "Прочитай сообщение Юки. Где она сейчас?", "Hi from Edinburgh! It's raining, but the castle is amazing. Is the book still with you? Keep it safe! Yuki", [
      ["В Эдинбурге.", true],
      ["В Йорке.", false],
      ["В Озёрном крае.", false],
    ]),
    script("enyk7-t5", "Попрощайся с Артуром.", [
      { speaker: "Артур", text: "Keep the book with you!" },
      { speaker: "Ты", answer: "Don't worry, it's got a strap now.", options: ["Don't worry, it's got a strap now.", "Don't worry, mine is flat.", "Whose is this?"] },
      { speaker: "Артур", text: "Take care of yourselves!" },
      { speaker: "Ты", answer: "Thank you for everything! See you in London!", options: ["Thank you for everything! See you in London!", "It's on the house!", "I didn't see nothing!"] },
    ], { skill: "review" }),
    match("enyk7-t6", "Повторяем Йорк: соедини пары.", [
      ["a lantern", "фонарь"],
      ["a form", "бланк"],
      ["honest", "честный"],
      ["gravy", "подливка"],
    ], { skill: "review" }),
    speak("enyk7-t7", "Tell me about a time you lost something.", "Last year I lost my bag on the train. I went to the lost property office and described it. Two days later someone found it!", "В прошлом году я потерял(а) сумку в поезде. Я пошёл (пошла) в бюро находок и описал(а) её. Через два дня её кто-то нашёл!", {
      help: "Расскажи вслух историю о потерянной вещи.",
    }),
  ],
  reward: {
    itemId: "recipe-yorkshire-pudding",
    itemName: "Рецепт «Yorkshire pudding»",
    itemNameRu: "Yorkshire pudding recipe card",
    ru: "Our seventh recipe!",
    en: "Наш седьмой рецепт!",
    a11y: "Карточка с рецептом йоркширского пудинга вклеена на седьмую страницу голубой тетради; на полях — маленький призрак и японская кошка с поднятой лапкой.",
    image: p("recipe-yorkshire-pudding"),
    steps: ["Мурзик вклеивает рецепт на седьмую страницу книги дороги.", "Белла рисует на полях маленького призрака.", "Юки прислала рисунок кошки на удачу — его тоже вклеивают.", "Книга застёгнута ремешком. Впереди — Озёрный край."],
  },
};

const story: CityStory = {
  home: {
    name: "Фургон у городской стены",
    nameRu: "The van by the city walls",
    image: p("home"),
    a11y: "Голубой фургон «Hope on Wheels» стоит у старинной каменной городской стены; за ней видны башни огромного готического собора.",
  },
  keepsakeId: "recipe-yorkshire-pudding",
  welcomeRu: "Hello, York!",
  welcomeEn: "Привет, Йорк!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Голубой фургон в Йорке: старинные городские стены, узкие средневековые улочки и большой готический собор.",
  departureImage: p("departure"),
  departureA11y: "Белла с фонарём и Артур в фартуке машут голубому фургону у городской стены.",
  finale: [
    {
      image: p("finale-1"),
      a11y: "У фургона уютно: ящик «Lost & Found», старинный фонарь, кожаный ремешок на книге дороги, табличка «Murzik's Bench», фарфоровая кошка на удачу и форма для пудингов.",
      lines: [
        { en: "Книга дороги чуть не потерялась — но честные люди есть везде." },
        { en: "В книге дороги седьмой рецепт: йоркширский пудинг Артура." },
      ],
    },
    {
      image: p("finale-2"),
      a11y: "Вечер, улочка Шамблс: Белла с фонарём, Мурзик с книгой, застёгнутой ремешком, Том и Юки смеются.",
      lines: [
        { ru: "York complete!", en: "Йорк пройден!" },
        { en: "7 / 7 уроков" },
        { ru: "Nothing is lost!", en: "Ничего не потеряно!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Белла с фонарём и Артур в фартуке машут голубому фургону у городской стены.",
      lines: [
        { ru: "Goodbye, Bella! Goodbye, Arthur!", en: "До свидания, Белла! До свидания, Артур!" },
        { ru: "Next stop: the Lake District!", en: "Следующая остановка: Озёрный край!" },
      ],
    },
    {
      image: p("finale-4"),
      a11y: "Голубой фургон едет на северо-запад через вересковые пустоши, впереди синеют горы.",
      lines: [{ ru: "York → the Lake District", en: "Йорк → Озёрный край" }],
    },
    {
      image: pic("en/lakes/arrival"),
      a11y: "Голубой фургон в Озёрном крае: синее озеро, зелёные горы, овцы и узкая дорога между каменными стенами.",
      lines: [{ ru: "Hello, the Lake District!", en: "Привет, Озёрный край!" }],
    },
  ],
};

export const enYork = {
  id: "en-york",
  name: "Йорк",
  nameEn: "York",
  lessons: [york1, york2, york3, york4, york5, york6, york7],
  story,
};
