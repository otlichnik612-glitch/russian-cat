import { pic } from "../art";
import { read } from "../make";
import type { CityStory, Lesson } from "../types";
import { choice, fill, letter, line, listen, match, script, speak, tf, v } from "../tr/make";

/*
 * Кардифф · «Одежда и магазин» · A2, уроки 1–7.
 * Фургон «Hope on Wheels» стоит у старой торговой аркады в центре Кардиффа. Тому нужна куртка для
 * фестиваля. Меган держит маленький магазин одежды в аркаде и говорит по-валлийски; её бабушка Гленис
 * печёт валлийские кексы на чугунной сковороде.
 * Грамматика: сравнение (cheaper, warmer, more expensive, better than…), as … as, one / ones.
 */

const p = (name: string) => pic(`en/cardiff/${name}`);

const cardiff1: Lesson = {
  id: "en-a2-cardiff-1",
  level: "A2",
  cityId: "en-cardiff",
  number: 1,
  title: "Can I try it on? — Можно примерить?",
  minutes: 8,
  goals: ["Попросить примерить", "Сказать, что велико или мало", "Попросить другой размер"],
  vocabNote: "В британском магазине примерочная — changing room (в Америке — fitting room).",
  vocab: [
    v("encd1-1", "What size are you?", "Какой у вас размер?", "Меган с сантиметром на шее смотрит на Тома.", "Послушать What size are you", p("l1-1")),
    v("encd1-2", "the changing room", "примерочная", "Маленькая кабинка с бархатной шторкой.", "Послушать the changing room", p("l1-2")),
    v("encd1-3", "It's too tight.", "Тесно, жмёт.", "Том в куртке, которая не застёгивается.", "Послушать It's too tight", p("l1-3")),
    v("encd1-4", "It's too loose.", "Слишком свободно, болтается.", "Рукава куртки закрывают Тому руки.", "Послушать It's too loose", p("l1-4")),
    v("encd1-5", "a medium", "средний размер (M)", "Ярлычок с буквой M на воротнике куртки.", "Послушать a medium", p("l1-5")),
    v("encd1-6", "a smaller size", "размер поменьше", "Две одинаковые куртки: большая и поменьше.", "Послушать a smaller size", p("l1-6")),
    v("encd1-7", "It fits perfectly!", "Сидит идеально!", "Том крутится перед зеркалом и улыбается.", "Послушать It fits perfectly", p("l1-7")),
    v("encd1-8", "a waterproof jacket", "непромокаемая куртка", "По синей куртке стекают капли и не впитываются.", "Послушать a waterproof jacket", p("l1-8")),
  ],
  letters: [
    letter("tight = [тайт]", "Gh не читается: tight [тайт], как night и light.", "It's too tight.", "Тесно."),
    letter("loose ≠ lose", "Loose [лу:с] — свободный, с глухим [с]. Lose [лу:з] — терять, со звонким [з].", "It's too loose.", "Слишком свободно."),
  ],
  dialogue: {
    title: "В аркаде",
    note: "Try on — примерить. It (куртку) ставим в середину: try it on, а не try on it.",
    lines: [
      line("megan", "Hello! Can I help you?", "Здравствуйте! Вам помочь?"),
      line("tom", "Yes, I need a waterproof jacket for a festival in London. Can I try this one on?", "Да, мне нужна непромокаемая куртка для фестиваля в Лондоне. Можно примерить вот эту?"),
      line("megan", "Of course. What size are you?", "Конечно. Какой у вас размер?"),
      line("tom", "A medium, I think.", "Средний, кажется."),
      line("megan", "The changing room is over there.", "Примерочная вон там."),
      line("tom", "Hmm, it's too tight. Have you got a bigger size?", "Хм, тесновата. У вас есть размер побольше?"),
      line("megan", "Here you are. Try this one.", "Вот, пожалуйста. Примерьте эту."),
      line("murzik", "Tom, it fits perfectly!", "Том, сидит идеально!"),
    ],
    gist: choice("encd1-d1", "Почему Том просит другой размер?", [
      ["Первая куртка тесная.", true],
      ["Первая куртка слишком свободная.", false],
      ["Ему не нравится цвет.", false],
    ]),
  },
  grammar: [
    {
      title: "Try it on: где стоит it",
      paragraphs: [
        "Try on — примерить. Если вещь названа словом it или them, оно встаёт в середину: Can I try it on? Can I try them on? (не try on it).",
        "Too + прилагательное — «слишком»: too tight, too loose, too long, too expensive.",
      ],
      examples: [
        { ru: "These jeans are too long. Can I try them on in a smaller size?", en: "Эти джинсы слишком длинные. Можно примерить размер поменьше?" },
        { ru: "Can I try it on, please?", en: "Можно это примерить?" },
      ],
    },
  ],
  tasks: [
    listen("encd1-t1", "Послушай. Что не так с курткой?", "Hmm, it's too tight. Have you got a bigger size?", [
      ["Она тесная.", true],
      ["Она слишком длинная.", false],
      ["Она промокает.", false],
    ]),
    choice("encd1-t2", "Как спросить «Можно это примерить?»", [
      ["Can I try it on?", true],
      ["Can I try on it?", false],
      ["Can I it try on?", false],
    ], { skill: "grammar" }),
    fill("encd1-t3", "Выбери правильное слово: «Брюки слишком длинные».", "The trousers are", "long.", "too", ["too", "to", "two"], { skill: "grammar" }),
    read("encd1-t4", "Прочитай этикетку. Можно ли стирать эту куртку в машинке?", "WATERPROOF JACKET\nSize: M\nHand wash only. Do not tumble dry.", [
      ["Нет, только руками.", true],
      ["Да, при 40 градусах.", false],
      ["Да, и сушить в машинке.", false],
    ]),
    match("encd1-t5", "Соедини пары.", [
      ["the changing room", "примерочная"],
      ["It's too tight.", "Тесно."],
      ["It's too loose.", "Слишком свободно."],
      ["It fits perfectly!", "Сидит идеально!"],
    ], { skill: "words" }),
    script("encd1-t6", "Ты в магазине одежды.", [
      { speaker: "Меган", text: "Can I help you?" },
      { speaker: "Ты", answer: "Yes, can I try this jacket on?", options: ["Yes, can I try this jacket on?", "Yes, can I try on it?", "It fits perfectly yesterday."] },
      { speaker: "Меган", text: "Sure. How does it fit?" },
      { speaker: "Ты", answer: "It's too loose. Have you got a smaller size?", options: ["It's too loose. Have you got a smaller size?", "It's too loose. Have you got a bigger size?", "The changing room, please."] },
    ], { skill: "speaking" }),
    speak("encd1-t7", "How does the jacket fit?", "It's too tight. Have you got a bigger size?", "Тесновата. У вас есть размер побольше?", {
      help: "Куртка мала. Скажи это вслух и попроси другой размер.",
    }),
  ],
  reward: {
    itemId: "coat-hooks",
    itemName: "Крючки для курток",
    itemNameRu: "Coat hooks",
    ru: "A place for our jackets!",
    en: "Место для наших курток!",
    a11y: "На стенке фургона прибита деревянная планка с тремя медными крючками, на одном висит синяя непромокаемая куртка.",
    image: p("coat-hooks"),
    steps: ["Мокрые куртки всё время лежат на стульях.", "Меган дарит фургону старую планку с крючками из своего магазина.", "Том прибивает её у двери.", "Новая куртка висит на первом крючке."],
    bridge: "Куртка сидит идеально, но стоит дорого. Может, есть другая — подешевле?",
  },
};

const cardiff2: Lesson = {
  id: "en-a2-cardiff-2",
  level: "A2",
  cityId: "en-cardiff",
  number: 2,
  title: "Cheaper and warmer — Дешевле и теплее",
  minutes: 8,
  goals: ["Сравнить две вещи", "cheaper, warmer, more expensive", "Better than…, worse than…"],
  vocabNote: "Короткие слова получают -er: cheap → cheaper. Длинные — more: expensive → more expensive. Than — «чем».",
  vocab: [
    v("encd2-1", "cheaper", "дешевле", "Два ценника: £90 и £80, второй обведён.", "Послушать cheaper", p("l2-1")),
    v("encd2-2", "more expensive", "дороже", "Ценник £120, Мурзик хватается за голову.", "Послушать more expensive", p("l2-2")),
    v("encd2-3", "warmer", "теплее", "Толстая куртка с капюшоном на меху.", "Послушать warmer", p("l2-3")),
    v("encd2-4", "lighter", "легче", "Мурзик держит тонкую куртку одним пальцем.", "Послушать lighter", p("l2-4")),
    v("encd2-5", "better than", "лучше, чем", "Том показывает большой палец на синюю куртку.", "Послушать better than", p("l2-5")),
    v("encd2-6", "worse than", "хуже, чем", "Мурзик морщится, глядя на старую куртку с дыркой.", "Послушать worse than", p("l2-6")),
    v("encd2-7", "It's good value.", "Это выгодно, хорошая цена.", "Меган кивает на куртку с табличкой «SALE».", "Послушать It's good value", p("l2-7")),
    v("encd2-8", "I can't decide.", "Не могу решить.", "Том держит две куртки и смотрит то на одну, то на другую.", "Послушать I can't decide", p("l2-8")),
  ],
  letters: [
    letter("-er = [э]", "В британском английском r в конце не звучит: cheaper [чи:пэ], warmer [уо:мэ].", "cheaper", "дешевле"),
    letter("than = [ðэн]", "Than без ударения звучит коротко: [ðэн]. Не путай с then [ðен] — «потом».", "better than", "лучше, чем"),
  ],
  dialogue: {
    title: "Две куртки",
    note: "Good value — когда цена хорошая для такого качества. Good and bad — исключения: better, worse.",
    lines: [
      line("tom", "This jacket is great, but it's more expensive than the grey one.", "Эта куртка отличная, но она дороже серой."),
      line("megan", "Yes, but it's warmer and lighter.", "Да, но она теплее и легче."),
      line("murzik", "The grey one is cheaper. It's eighty pounds.", "Серая дешевле. Она стоит восемьдесят фунтов."),
      line("megan", "The blue one is in the sale today — only ninety pounds. It's good value!", "Синяя сегодня со скидкой — всего девяносто фунтов. Это выгодно!"),
      line("tom", "Hmm… I can't decide.", "Хм… Не могу решить."),
      line("murzik", "The blue one is better than the grey one. And it's waterproof!", "Синяя лучше серой. И она непромокаемая!"),
      line("tom", "You're right. I'll take the blue one!", "Ты прав. Беру синюю!"),
    ],
    gist: choice("encd2-d1", "Почему Мурзик советует синюю куртку?", [
      ["Она лучше и не промокает.", true],
      ["Она дешевле серой.", false],
      ["Она тяжелее.", false],
    ]),
  },
  grammar: [
    {
      title: "Сравнение: -er и more",
      paragraphs: [
        "Короткие прилагательные + -er: cheap → cheaper, warm → warmer, light → lighter. На -y: heavy → heavier. Big → bigger (согласная удваивается).",
        "Длинные — с more: expensive → more expensive, comfortable → more comfortable. Исключения: good → better, bad → worse. «Чем» — than.",
      ],
      examples: [
        { ru: "This jacket is warmer than that one.", en: "Эта куртка теплее той." },
        { ru: "The blue jumper is more comfortable than the red one.", en: "Синий свитер удобнее красного." },
      ],
    },
  ],
  tasks: [
    listen("encd2-t1", "Послушай. Сколько стоит синяя куртка со скидкой?", "The blue one is in the sale today — only ninety pounds.", [
      ["Девяносто фунтов.", true],
      ["Восемьдесят фунтов.", false],
      ["Девятнадцать фунтов.", false],
    ]),
    choice("encd2-t2", "Как сказать «Эта куртка дороже»?", [
      ["This jacket is more expensive.", true],
      ["This jacket is expensiver.", false],
      ["This jacket is more expensiver.", false],
    ], { skill: "grammar" }),
    fill("encd2-t3", "Выбери правильное слово: «Синяя лучше серой».", "The blue one is", "than the grey one.", "better", ["better", "gooder", "more good"], { skill: "grammar" }),
    read("encd2-t4", "Прочитай таблички. Какая куртка самая дешёвая?", "BLUE JACKET — waterproof — was £120, now £90 (SALE)\nGREY JACKET — £80\nRED JACKET — £75, not waterproof", [
      ["Красная.", true],
      ["Серая.", false],
      ["Синяя.", false],
    ]),
    match("encd2-t5", "Соедини пары.", [
      ["cheaper", "дешевле"],
      ["warmer", "теплее"],
      ["lighter", "легче"],
      ["worse than", "хуже, чем"],
    ], { skill: "words" }),
    tf("encd2-t6", "Big → bigger: последняя согласная удваивается.", true, "grammar"),
    speak("encd2-t7", "Which is better — the city or the countryside?", "The city is more interesting, but the countryside is quieter and cheaper.", "Город интереснее, а деревня тише и дешевле.", {
      help: "Сравни вслух город и деревню.",
    }),
  ],
  reward: {
    itemId: "lovespoon",
    itemName: "Резная ложка любви",
    itemNameRu: "Welsh lovespoon",
    ru: "A Welsh lovespoon — for luck!",
    en: "Валлийская ложка любви — на счастье!",
    a11y: "Над окошком фургона висит длинная деревянная ложка с резной ручкой: сердечко, ключ и маленький фургон.",
    image: p("lovespoon"),
    steps: ["В аркаде есть лавка резчика по дереву.", "В Уэльсе резные ложки дарят на счастье и в знак дружбы.", "Меган дарит фургону ложку с вырезанным сердечком и ключом.", "Мурзик вешает её над окошком."],
    bridge: "Куртка куплена! Теперь Мурзику нужны новые перчатки. Но какие — эти или те?",
  },
};

const cardiff3: Lesson = {
  id: "en-a2-cardiff-3",
  level: "A2",
  cityId: "en-cardiff",
  number: 3,
  title: "Which ones? — Какие?",
  minutes: 8,
  goals: ["Выбрать из нескольких вещей", "One и ones вместо повтора", "Which one do you prefer?"],
  vocabNote: "Чтобы не повторять слово, англичане говорят one (одна вещь) и ones (несколько): the blue one — синий (-ая), the red ones — красные.",
  vocab: [
    v("encd3-1", "Which one?", "Который? Какой (из них)?", "Мурзик показывает лапой на ряд перчаток.", "Послушать Which one", p("l3-1")),
    v("encd3-2", "the red ones", "красные (из этих)", "Пара красных перчаток на прилавке.", "Послушать the red ones", p("l3-2")),
    v("encd3-3", "gloves", "перчатки", "Мурзик натягивает перчатки на лапы, пальцы торчат.", "Послушать gloves", p("l3-3")),
    v("encd3-4", "a woolly hat", "вязаная шапка", "Шапка с помпоном и красным драконом.", "Послушать a woolly hat", p("l3-4")),
    v("encd3-5", "Which do you prefer?", "Что тебе больше нравится?", "Меган держит в одной руке зелёную шапку, в другой — красную.", "Послушать Which do you prefer", p("l3-5")),
    v("encd3-6", "I prefer this one.", "Мне больше нравится эта.", "Мурзик прижимает к себе красную шапку.", "Послушать I prefer this one", p("l3-6")),
    v("encd3-7", "They match!", "Они подходят друг к другу!", "Красные перчатки и красная шапка рядом.", "Послушать They match", p("l3-7")),
    v("encd3-8", "I'll take them.", "Я их возьму.", "Мурзик кладёт перчатки и шапку на прилавок.", "Послушать I'll take them", p("l3-8")),
  ],
  letters: [
    letter("one = [уан]", "One и ones начинаются со звука [у]: [уан], [уанз]. Не [он]!", "the blue one", "синяя"),
    letter("gloves = [главз]", "O здесь звучит как короткое [а]: gloves [главз], love [лав], glove [глав].", "gloves", "перчатки"),
  ],
  dialogue: {
    title: "Шапка с драконом",
    note: "Красный дракон — символ Уэльса, он есть на флаге.",
    lines: [
      line("murzik", "I need some gloves. Which ones are warmer?", "Мне нужны перчатки. Какие теплее?"),
      line("megan", "The red ones. They're wool.", "Красные. Они шерстяные."),
      line("megan", "And look — woolly hats with a dragon! Which do you prefer, the green one or the red one?", "А посмотрите — вязаные шапки с драконом! Какая больше нравится, зелёная или красная?"),
      line("murzik", "I prefer the red one. Look, Tom — they match!", "Мне больше нравится красная. Смотри, Том, — подходят друг к другу!"),
      line("tom", "Very Welsh!", "Очень по-валлийски!"),
      line("murzik", "I'll take them — the hat and the gloves.", "Я их возьму — и шапку, и перчатки."),
    ],
    gist: choice("encd3-d1", "Что покупает Мурзик?", [
      ["Красные перчатки и красную шапку.", true],
      ["Зелёную шапку.", false],
      ["Только перчатки.", false],
    ]),
  },
  grammar: [
    {
      title: "One и ones",
      paragraphs: [
        "One заменяет одну вещь, ones — несколько: I like this jacket, but I prefer the blue one. These gloves are nice, but the red ones are warmer.",
        "Вопрос: Which one? (какой из них?) / Which ones? (какие?). Ответ: This one. / Those ones. / The big one.",
      ],
      examples: [
        { ru: "Which cake would you like? — The small one, please.", en: "Какое пирожное хочешь? — Маленькое, пожалуйста." },
        { ru: "My shoes are old. I need new ones.", en: "Мои туфли старые. Мне нужны новые." },
      ],
    },
  ],
  tasks: [
    listen("encd3-t1", "Послушай. Почему красные перчатки теплее?", "The red ones. They're wool.", [
      ["Они шерстяные.", true],
      ["Они кожаные.", false],
      ["Они большие.", false],
    ]),
    choice("encd3-t2", "Как сказать «Мои туфли старые. Мне нужны новые»?", [
      ["My shoes are old. I need new ones.", true],
      ["My shoes are old. I need new one.", false],
      ["My shoes are old. I need news.", false],
    ], { skill: "grammar" }),
    fill("encd3-t3", "Выбери правильное слово.", "I don't like this hat. I prefer the green", ".", "one", ["one", "ones", "it"], { skill: "grammar" }),
    read("encd3-t4", "Прочитай ценники. Сколько стоят шапка и перчатки вместе?", "WOOLLY HAT (dragon) — £12\nWOOL GLOVES — £15\nHat + gloves together — £22", [
      ["22 фунта.", true],
      ["27 фунтов.", false],
      ["12 фунтов.", false],
    ]),
    match("encd3-t5", "Соедини пары.", [
      ["gloves", "перчатки"],
      ["a woolly hat", "вязаная шапка"],
      ["They match!", "Они подходят друг к другу!"],
      ["Which one?", "Который?"],
    ], { skill: "words" }),
    tf("encd3-t6", "The red ones значит «красные» (про несколько вещей).", true, "grammar"),
    speak("encd3-t7", "Which hat do you prefer?", "I prefer the red one. It matches my gloves. I'll take it.", "Мне больше нравится красная. Она подходит к моим перчаткам. Я её возьму.", {
      help: "Выбери шапку и скажи вслух, почему.",
    }),
  ],
  reward: {
    itemId: "dragon-flag",
    itemName: "Флажок с драконом",
    itemNameRu: "Welsh dragon flag",
    ru: "A red dragon for our van!",
    en: "Красный дракон для нашего фургона!",
    a11y: "Маленький бело-зелёный флажок с красным драконом торчит из держателя у окошка фургона.",
    image: p("dragon-flag"),
    steps: ["К шапке Меган дарит Мурзику маленький флажок с драконом.", "«Now your van is a little bit Welsh!» «Теперь твой фургон немножко валлийский!»", "Мурзик ставит его у окошка.", "Красный дракон машет на ветру."],
    bridge: "Вечером Мурзик примеряет всё в фургоне — и в одной перчатке дырка! Придётся вернуться в магазин.",
  },
};

const cardiff4: Lesson = {
  id: "en-a2-cardiff-4",
  level: "A2",
  cityId: "en-cardiff",
  number: 4,
  title: "Can I return this? — Можно это вернуть?",
  minutes: 8,
  goals: ["Вернуть или обменять вещь", "Объяснить, что не так", "As … as: такой же, как"],
  vocabNote: "Refund — вернуть деньги. Exchange — обменять. Receipt [рисИ:т] — чек, p не читается.",
  vocab: [
    v("encd4-1", "Can I return this?", "Можно это вернуть?", "Мурзик кладёт перчатки на прилавок.", "Послушать Can I return this", p("l4-1")),
    v("encd4-2", "There's a hole in it.", "Здесь дырка.", "Палец Мурзика торчит из дырки в перчатке.", "Послушать There's a hole in it", p("l4-2")),
    v("encd4-3", "the receipt", "чек", "Длинный бумажный чек.", "Послушать the receipt", p("l4-3")),
    v("encd4-4", "a refund", "возврат денег", "Деньги возвращаются из кассы.", "Послушать a refund", p("l4-4")),
    v("encd4-5", "Can I exchange it?", "Можно обменять?", "Две пары перчаток со стрелками между ними.", "Послушать Can I exchange it", p("l4-5")),
    v("encd4-6", "as good as new", "как новые", "Новые перчатки блестят на прилавке.", "Послушать as good as new", p("l4-6")),
    v("encd4-7", "not as warm as", "не такой тёплый, как", "Тонкие перчатки рядом с толстыми шерстяными.", "Послушать not as warm as", p("l4-7")),
    v("encd4-8", "I'm sorry about that.", "Извините, мне очень жаль.", "Меган виновато улыбается.", "Послушать I'm sorry about that", p("l4-8")),
  ],
  letters: [
    letter("receipt = [рисИ:т]", "В receipt буква p не читается: [рисИ:т]. Ударение на второй слог.", "the receipt", "чек"),
  ],
  dialogue: {
    title: "Перчатка с дыркой",
    note: "Here's the receipt — вот чек. Would you like… — Хотите…? (вежливо)",
    lines: [
      line("murzik", "Hello again! Can I return these gloves? There's a hole in one.", "Здравствуйте ещё раз! Можно вернуть эти перчатки? В одной дырка."),
      line("megan", "Oh no, I'm sorry about that! Have you got the receipt?", "Ой, мне очень жаль! У вас есть чек?"),
      line("murzik", "Yes, here it is.", "Да, вот он."),
      line("megan", "Would you like a refund or an exchange?", "Хотите вернуть деньги или обменять?"),
      line("murzik", "Can I exchange them? I really like the red ones.", "Можно обменять? Мне очень нравятся красные."),
      line("megan", "There's one more red pair, but they're not as warm as these. They're cotton.", "Есть ещё одна красная пара, но они не такие тёплые, как эти. Они хлопковые."),
      line("murzik", "Hmm… Then a refund, please. Tom will knit me new ones!", "Хм… Тогда верните деньги, пожалуйста. Том свяжет мне новые!"),
    ],
    gist: choice("encd4-d1", "Что решает Мурзик в конце?", [
      ["Вернуть деньги.", true],
      ["Взять хлопковые перчатки.", false],
      ["Оставить перчатки с дыркой.", false],
    ]),
  },
  grammar: [
    {
      title: "As … as: такой же, как",
      paragraphs: [
        "As + прилагательное + as — «такой же… как»: This jacket is as warm as that one.",
        "Not as … as — «не такой… как»: Cotton gloves are not as warm as wool ones. Устойчивое выражение: as good as new — как новый.",
      ],
      examples: [
        { ru: "Cardiff is not as big as London.", en: "Кардифф не такой большой, как Лондон." },
        { ru: "My brother is as tall as me.", en: "Мой брат такого же роста, как я." },
      ],
    },
  ],
  tasks: [
    listen("encd4-t1", "Послушай. Почему другие красные перчатки не подходят?", "There's one more red pair, but they're not as warm as these. They're cotton.", [
      ["Они не такие тёплые.", true],
      ["Они дороже.", false],
      ["Они другого цвета.", false],
    ]),
    choice("encd4-t2", "Как сказать «Кардифф не такой большой, как Лондон»?", [
      ["Cardiff is not as big as London.", true],
      ["Cardiff is not as big than London.", false],
      ["Cardiff is not so big that London.", false],
    ], { skill: "grammar" }),
    read("encd4-t3", "Прочитай правила магазина. Что нужно, чтобы вернуть вещь?", "RETURNS\nYou can return items within 28 days.\nPlease bring your receipt.\nSale items: exchange only.", [
      ["Чек и не позже 28 дней.", true],
      ["Только паспорт.", false],
      ["Ничего, можно в любое время.", false],
    ]),
    fill("encd4-t4", "Выбери правильное слово.", "My jacket is as warm", "yours.", "as", ["as", "than", "like"], { skill: "grammar" }),
    script("encd4-t5", "Верни вещь в магазин.", [
      { speaker: "Ты", answer: "Hello! Can I return this jumper? There's a hole in it.", options: ["Hello! Can I return this jumper? There's a hole in it.", "Hello! It fits perfectly.", "Hello! I'll take them."] },
      { speaker: "Меган", text: "I'm sorry about that. Have you got the receipt?" },
      { speaker: "Ты", answer: "Yes, here it is.", options: ["Yes, here it is.", "Yes, as good as new.", "Yes, the red ones."] },
      { speaker: "Меган", text: "Refund or exchange?" },
      { speaker: "Ты", answer: "A refund, please.", options: ["A refund, please.", "A receipt, please.", "A hole, please."] },
    ], { skill: "speaking" }),
    match("encd4-t6", "Соедини пары.", [
      ["the receipt", "чек"],
      ["a refund", "возврат денег"],
      ["as good as new", "как новые"],
      ["Can I exchange it?", "Можно обменять?"],
    ], { skill: "words" }),
    speak("encd4-t7", "Can I help you?", "Yes, I'd like to return this shirt. There's a hole in it. Here's the receipt.", "Да, я хотел(а) бы вернуть эту рубашку. В ней дырка. Вот чек.", {
      help: "Объясни вслух, что не так с вещью.",
    }),
  ],
  reward: {
    itemId: "knitting-basket",
    itemName: "Корзинка с вязанием",
    itemNameRu: "Knitting basket",
    ru: "Tom is knitting!",
    en: "Том вяжет!",
    a11y: "Плетёная корзинка с красными клубками шерсти и спицами стоит на полке фургона; из неё свисает начатая перчатка.",
    image: p("knitting-basket"),
    steps: ["Том правда умеет вязать — его научила бабушка.", "Меган приносит корзинку с красной шерстью.", "Вечерами Том вяжет у окошка фургона.", "Первая перчатка уже почти готова."],
    bridge: "В субботу у Меган выходной. «Let me show you my Cardiff», — говорит она. И начинает с замка.",
  },
};

const cardiff5: Lesson = {
  id: "en-a2-cardiff-5",
  level: "A2",
  cityId: "en-cardiff",
  number: 5,
  title: "Two languages — Два языка",
  minutes: 8,
  goals: ["Читать надписи на двух языках", "Сравнивать: older, more difficult, the same as", "Узнать немного валлийского"],
  vocabNote: "В Уэльсе все надписи на двух языках: на английском и на валлийском. Croeso [кройсо] — «добро пожаловать», diolch [диолх] — «спасибо».",
  vocab: [
    v("encd5-1", "a castle", "замок", "Старый замок с башнями прямо в центре города.", "Послушать a castle", p("l5-1")),
    v("encd5-2", "Welsh", "валлийский (язык); валлийцы", "Табличка на двух языках: «Croeso» и «Welcome».", "Послушать Welsh", p("l5-2")),
    v("encd5-3", "bilingual", "двуязычный", "Указатель с двумя надписями на столбе.", "Послушать bilingual", p("l5-3")),
    v("encd5-4", "older than", "старше, чем", "Старая стена замка рядом с новым домом.", "Послушать older than", p("l5-4")),
    v("encd5-5", "more difficult", "труднее", "Мурзик пытается прочитать длинное валлийское слово.", "Послушать more difficult", p("l5-5")),
    v("encd5-6", "the same as", "такой же, как", "Два одинаковых дракона на двух флагах.", "Послушать the same as", p("l5-6")),
    v("encd5-7", "different from", "отличается от", "Английская и валлийская надписи — совсем разные слова.", "Послушать different from", p("l5-7")),
    v("encd5-8", "How do you say… in Welsh?", "Как сказать… по-валлийски?", "Мурзик с блокнотом спрашивает Меган.", "Послушать How do you say in Welsh", p("l5-8")),
  ],
  letters: [
    letter("Welsh ll", "В валлийском ll — особый глухой звук, примерно [хл]: Llanelli [хланЭхли]. В английском такого звука нет.", "Llanelli", "Ланелли (город в Уэльсе)"),
    letter("castle = [ка:сл]", "В castle буква t не читается: [ка:сл]. Так же listen [лисн].", "a castle", "замок"),
  ],
  dialogue: {
    title: "У замка",
    note: "Both — оба. Bilingual — двуязычный.",
    lines: [
      line("megan", "This is Cardiff Castle. It's older than all the buildings around it.", "Это Кардиффский замок. Он старше всех зданий вокруг."),
      line("murzik", "Why are all the signs in two languages?", "Почему все таблички на двух языках?"),
      line("megan", "Because Wales is bilingual: English and Welsh. I speak both.", "Потому что Уэльс двуязычный: английский и валлийский. Я говорю на обоих."),
      line("murzik", "Is Welsh more difficult than English?", "Валлийский труднее английского?"),
      line("megan", "For you — maybe! It's very different from English.", "Для тебя — может быть! Он очень отличается от английского."),
      line("murzik", "How do you say “thank you” in Welsh?", "Как сказать «спасибо» по-валлийски?"),
      line("megan", "Diolch! And “welcome” is croeso.", "Диолх! А «добро пожаловать» — кройсо."),
    ],
    gist: choice("encd5-d1", "Почему таблички в Кардиффе на двух языках?", [
      ["В Уэльсе два языка: английский и валлийский.", true],
      ["Для туристов из Франции.", false],
      ["Потому что замок очень старый.", false],
    ]),
  },
  grammar: [
    {
      title: "The same as, different from",
      paragraphs: [
        "The same as — такой же, как: My hat is the same as yours. Different from — не такой, как, отличается от: Welsh is different from English.",
        "Повторяем сравнение: old → older than, difficult → more difficult than.",
      ],
      examples: [
        { ru: "This castle is older than my country!", en: "Этот замок старше моей страны!" },
        { ru: "His jacket is the same as mine.", en: "У него такая же куртка, как у меня." },
      ],
    },
  ],
  tasks: [
    listen("encd5-t1", "Послушай. Как по-валлийски «спасибо»?", "Diolch! And “welcome” is croeso.", [
      ["Diolch.", true],
      ["Croeso.", false],
      ["Cymru.", false],
    ]),
    choice("encd5-t2", "Как сказать «Валлийский отличается от английского»?", [
      ["Welsh is different from English.", true],
      ["Welsh is different as English.", false],
      ["Welsh is the different English.", false],
    ], { skill: "grammar" }),
    read("encd5-t3", "Прочитай табличку на двух языках. Во сколько закрывается замок?", "CASTELL CAERDYDD / CARDIFF CASTLE\nAr agor / Open: 9:00 – 17:00\nCroeso! / Welcome!", [
      ["В пять вечера.", true],
      ["В девять вечера.", false],
      ["Он не закрывается.", false],
    ]),
    fill("encd5-t4", "Выбери правильное слово: «У меня такая же шапка, как у тебя».", "My hat is the same", "yours.", "as", ["as", "than", "from"], { skill: "grammar" }),
    match("encd5-t5", "Соедини пары.", [
      ["a castle", "замок"],
      ["bilingual", "двуязычный"],
      ["older than", "старше, чем"],
      ["different from", "отличается от"],
    ], { skill: "words" }),
    tf("encd5-t6", "Castle читается [ка:стл], t звучит.", false, "words"),
    speak("encd5-t7", "Is your language different from English?", "Yes, Russian is very different from English. It's more difficult, but it's beautiful.", "Да, русский очень отличается от английского. Он труднее, но он красивый.", {
      help: "Сравни вслух свой язык и английский.",
    }),
  ],
  reward: {
    itemId: "daffodils",
    itemName: "Керамический нарцисс",
    itemNameRu: "Ceramic daffodil",
    ru: "A daffodil — the flower of Wales!",
    en: "Нарцисс — цветок Уэльса!",
    a11y: "На столике у фургона стоит расписной глиняный жёлтый нарцисс, рядом табличка «Croeso / Welcome».",
    image: p("daffodils"),
    steps: ["Нарцисс — символ Уэльса, как и дракон.", "Меган покупает на рынке расписной глиняный нарцисс.", "Мурзик пишет табличку на двух языках: «Croeso / Welcome».", "Теперь фургон встречает гостей по-валлийски."],
    bridge: "«Come to my nain's tomorrow», — говорит Меган. Nain — это «бабушка» по-валлийски. А бабушка печёт лучшие кексы в Уэльсе.",
  },
};

const cardiff6: Lesson = {
  id: "en-a2-cardiff-6",
  level: "A2",
  cityId: "en-cardiff",
  number: 6,
  title: "Nain's Welsh cakes — Кексы бабушки",
  minutes: 8,
  goals: ["Понять рецепт", "Сравнить: thinner, a bit longer, much easier", "a bit / much + сравнение"],
  vocabNote: "Welsh cakes — плоские валлийские кексы с изюмом. Их пекут не в духовке, а на чугунной сковороде — bakestone.",
  vocab: [
    v("encd6-1", "a bakestone", "чугунная сковорода без бортиков", "Плоская чёрная чугунная сковорода на огне.", "Послушать a bakestone", p("l6-1")),
    v("encd6-2", "flour and butter", "мука и масло", "Миска с мукой и кусочком масла.", "Послушать flour and butter", p("l6-2")),
    v("encd6-3", "raisins", "изюм", "Горсть изюма в лапе Мурзика.", "Послушать raisins", p("l6-3")),
    v("encd6-4", "Cut out circles.", "Вырежи кружочки.", "Мурзик вырезает из теста кружочки стаканом.", "Послушать Cut out circles", p("l6-4")),
    v("encd6-5", "a bit thinner", "немного тоньше", "Тонкий пласт теста, Гленис показывает пальцами толщину.", "Послушать a bit thinner", p("l6-5")),
    v("encd6-6", "Turn them over.", "Переверни их.", "Мурзик переворачивает кексы лопаткой.", "Послушать Turn them over", p("l6-6")),
    v("encd6-7", "Sprinkle with sugar.", "Посыпь сахаром.", "Сахар сыплется на тёплые кексы.", "Послушать Sprinkle with sugar", p("l6-7")),
    v("encd6-8", "much easier than", "гораздо проще, чем", "Мурзик довольный, рядом гора готовых кексов.", "Послушать much easier than", p("l6-8")),
  ],
  letters: [
    letter("flour = flower", "Flour (мука) и flower (цветок) звучат одинаково: [флауэ].", "flour and butter", "мука и масло"),
  ],
  dialogue: {
    title: "Кухня Гленис",
    note: "Nain [найн] — «бабушка» по-валлийски (так говорят на севере Уэльса, откуда родом Гленис). Glenys [гленис] — валлийское имя.",
    lines: [
      line("glenys", "Mix the flour, butter, sugar and raisins. Now roll it out.", "Смешай муку, масло, сахар и изюм. Теперь раскатай."),
      line("glenys", "A bit thinner, Murzik. Welsh cakes are thinner than scones. Now cut out circles.", "Немного тоньше, Мурзик. Валлийские кексы тоньше, чем сконы. Теперь вырежи кружочки."),
      line("murzik", "Do we put them in the oven?", "Мы ставим их в духовку?"),
      line("glenys", "No! On the bakestone. Three minutes, then turn them over.", "Нет! На чугунную сковороду. Три минуты, потом переверни."),
      line("tom", "That's much easier than Chelsea buns!", "Это гораздо проще, чем булочки «Челси»!"),
      line("glenys", "And faster. Now sprinkle them with sugar — and eat them warm!", "И быстрее. Теперь посыпь сахаром — и ешь тёплыми!"),
    ],
    gist: choice("encd6-d1", "Где пекут валлийские кексы?", [
      ["На чугунной сковороде.", true],
      ["В духовке.", false],
      ["В микроволновке.", false],
    ]),
  },
  grammar: [
    {
      title: "A bit и much со сравнением",
      paragraphs: [
        "A bit — «немного»: a bit thinner, a bit cheaper. Much — «гораздо, намного»: much easier, much more expensive.",
        "Нельзя very со сравнением: не very easier, а much easier.",
      ],
      examples: [
        { ru: "Can you roll it a bit thinner?", en: "Можешь раскатать немного тоньше?" },
        { ru: "The train is much faster than the bus.", en: "Поезд гораздо быстрее автобуса." },
      ],
    },
  ],
  tasks: [
    listen("encd6-t1", "Послушай Гленис. Через сколько минут переворачивать кексы?", "On the bakestone. Three minutes, then turn them over.", [
      ["Через три минуты.", true],
      ["Через тридцать минут.", false],
      ["Через час.", false],
    ]),
    choice("encd6-t2", "Как сказать «Это гораздо проще»?", [
      ["It's much easier.", true],
      ["It's very easier.", false],
      ["It's much more easier.", false],
    ], { skill: "grammar" }),
    read("encd6-t3", "Прочитай рецепт бабушки. Сколько изюма нужно?", "WELSH CAKES\n225 g flour\n100 g butter\n75 g sugar\n50 g raisins\n1 egg\nCook on a bakestone, 3 minutes each side.", [
      ["50 граммов.", true],
      ["75 граммов.", false],
      ["225 граммов.", false],
    ]),
    fill("encd6-t4", "Выбери правильное слово: «Немного тоньше, пожалуйста».", "A bit", ", please.", "thinner", ["thinner", "thin", "thinnest"], { skill: "grammar" }),
    match("encd6-t5", "Соедини пары.", [
      ["raisins", "изюм"],
      ["Turn them over.", "Переверни их."],
      ["Sprinkle with sugar.", "Посыпь сахаром."],
      ["a bakestone", "чугунная сковорода"],
    ], { skill: "words" }),
    tf("encd6-t6", "Flour и flower звучат одинаково.", true, "words"),
    speak("encd6-t7", "Is cooking difficult?", "No, it's much easier than I thought! But a bit slower.", "Нет, это гораздо проще, чем я думал(а)! Но немного дольше.", {
      help: "Скажи вслух, легко ли готовить: much, a bit.",
    }),
  ],
  reward: {
    itemId: "bakestone",
    itemName: "Чугунная сковорода",
    itemNameRu: "Bakestone",
    ru: "Our own bakestone!",
    en: "Своя чугунная сковорода!",
    a11y: "Круглая чёрная чугунная сковорода без бортиков стоит на плите фургона, на ней шесть золотистых кексов, посыпанных сахаром.",
    image: p("bakestone"),
    steps: ["Гленис достаёт из шкафа вторую, старую сковороду.", "«My mother's. Take it — I've got two.» «Мамина. Бери — у меня их две».", "Мурзик ставит её на плиту фургона.", "Утром у окошка уже очередь за валлийскими кексами."],
    bridge: "Пора ехать дальше, в Ливерпуль. Но сначала — подарок Гленис для книги дороги.",
  },
};

const cardiff7: Lesson = {
  id: "en-a2-cardiff-7",
  level: "A2",
  cityId: "en-cardiff",
  number: 7,
  title: "Cardiff exam — Экзамен: Кардифф",
  minutes: 9,
  goals: ["Понять длинный рассказ на слух", "Сравнить города", "Повторить всё из Кардиффа"],
  vocabNote: "Урок 7 — экзамен города: длинная аудиоистория и повторение всего из Кардиффа.",
  vocab: [
    v("encd7-1", "my favourite", "мой любимый", "Мурзик прижимает к себе красную шапку с драконом.", "Послушать my favourite", p("l7-1")),
    v("encd7-2", "noisier", "шумнее", "Шумная улица с музыкантами и толпой.", "Послушать noisier", p("l7-2")),
    v("encd7-3", "friendlier", "дружелюбнее", "Прохожие машут фургону.", "Послушать friendlier", p("l7-3")),
    v("encd7-4", "a long way", "далеко, долгий путь", "Длинная дорога на север через холмы.", "Послушать a long way", p("l7-4")),
    v("encd7-5", "Liverpool", "Ливерпуль", "Стрелка на карте от Кардиффа на север.", "Послушать Liverpool", p("l7-5")),
    v("encd7-6", "Send us a postcard!", "Пришлите нам открытку!", "Меган машет обеими руками.", "Послушать Send us a postcard", p("l7-6")),
    v("encd7-7", "You've been so kind.", "Вы были так добры.", "Том обнимает Гленис.", "Послушать You've been so kind", p("l7-7")),
    v("encd7-8", "I'll wear it at the festival.", "Я надену её на фестиваль.", "Том в новой синей куртке.", "Послушать I'll wear it at the festival", p("l7-8")),
  ],
  letters: [
    letter("Liverpool", "Ударение на первый слог: [ливэпу:л]. R в середине не звучит.", "Liverpool", "Ливерпуль"),
  ],
  dialogue: {
    title: "Прощание в аркаде",
    note: "Wear — носить, быть одетым во что-то. Hwyl fawr [хуил ваур] — «до свидания» по-валлийски.",
    lines: [
      line("glenys", "This is for your road book. My Welsh cake recipe.", "Это для вашей книги дороги. Мой рецепт валлийских кексов."),
      line("tom", "Thank you, Glenys! You've been so kind.", "Спасибо, Гленис! Вы были так добры."),
      line("megan", "So where are you going next?", "Ну, куда вы дальше?"),
      line("murzik", "To Liverpool. It's a long way!", "В Ливерпуль. Это далеко!"),
      line("megan", "Liverpool is bigger and noisier than Cardiff. But Cardiff is friendlier!", "Ливерпуль больше и шумнее Кардиффа. Зато Кардифф дружелюбнее!"),
      line("tom", "And I've got my favourite jacket. I'll wear it at the festival.", "А у меня есть моя любимая куртка. Я надену её на фестиваль."),
      line("megan", "Send us a postcard! Hwyl fawr!", "Пришлите нам открытку! До свидания!"),
    ],
    gist: choice("encd7-d1", "Что Меган говорит о Кардиффе?", [
      ["Он дружелюбнее Ливерпуля.", true],
      ["Он больше Ливерпуля.", false],
      ["Он шумнее Ливерпуля.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем Кардифф",
      paragraphs: [
        "Магазин: Can I try it on? It's too tight. Have you got a bigger size? Can I return / exchange it?",
        "Сравнение: cheaper, more expensive, better / worse than, as … as, the same as, different from, a bit / much + сравнение. One / ones: the red one, new ones.",
      ],
      examples: [
        { ru: "Liverpool is bigger than Cardiff, but it's not as friendly.", en: "Ливерпуль больше Кардиффа, но не такой дружелюбный." },
        { ru: "These boots are much better than the old ones.", en: "Эти ботинки гораздо лучше старых." },
      ],
    },
  ],
  tasks: [
    listen("encd7-t1", "Аудиоистория: Меган рассказывает о своём магазине. Послушай. Что было в этом магазине раньше?", "My shop is in the oldest arcade in Cardiff. Years ago, it was my grandfather's hat shop. Now I sell jackets, hats and gloves. My shop is smaller than the shops in the big shopping centre, but my customers are my friends. And everything here is made in Wales.", [
      ["Шляпный магазин её дедушки.", true],
      ["Пекарня бабушки.", false],
      ["Большой торговый центр.", false],
    ]),
    choice("encd7-t2", "Из рассказа Меган: чем её магазин лучше больших?", [
      ["Покупатели — её друзья, а вещи сделаны в Уэльсе.", true],
      ["Он больше.", false],
      ["Там всё дешевле.", false],
    ], { skill: "listening" }),
    choice("encd7-t3", "Как сказать «Эти ботинки гораздо лучше старых»?", [
      ["These boots are much better than the old ones.", true],
      ["These boots are very better than the old one.", false],
      ["These boots are much gooder than the old ones.", false],
    ], { skill: "grammar" }),
    read("encd7-t4", "Прочитай сообщение от Меган. Что она обещает?", "Hwyl fawr! I'll come to the festival in August. I'll bring Nain's Welsh cakes and a new hat for Murzik! Megan", [
      ["Приехать на фестиваль с кексами и шапкой.", true],
      ["Приехать в Ливерпуль.", false],
      ["Связать Тому перчатки.", false],
    ]),
    script("encd7-t5", "Попрощайся с Меган.", [
      { speaker: "Меган", text: "Where are you going next?" },
      { speaker: "Ты", answer: "To Liverpool. It's a long way!", options: ["To Liverpool. It's a long way!", "Can I try it on?", "Turn them over."] },
      { speaker: "Меган", text: "Send us a postcard!" },
      { speaker: "Ты", answer: "Thanks for everything!", options: ["Thanks for everything!", "It's too tight!", "The same as!"] },
    ], { skill: "review" }),
    match("encd7-t6", "Повторяем Кардифф: соедини пары.", [
      ["the changing room", "примерочная"],
      ["cheaper", "дешевле"],
      ["the receipt", "чек"],
      ["raisins", "изюм"],
    ], { skill: "review" }),
    speak("encd7-t7", "Compare two cities you know.", "London is bigger and more expensive than Cardiff. But Cardiff is friendlier and much quieter.", "Лондон больше и дороже Кардиффа. Зато Кардифф дружелюбнее и гораздо тише.", {
      help: "Сравни вслух два города, которые ты знаешь.",
    }),
  ],
  reward: {
    itemId: "recipe-welsh-cakes",
    itemName: "Рецепт «Welsh cakes»",
    itemNameRu: "Welsh cakes recipe card",
    ru: "Our fourth recipe!",
    en: "Наш четвёртый рецепт!",
    a11y: "Карточка с рецептом валлийских кексов на двух языках вклеена на четвёртую страницу голубой тетради; на полях нарисован красный дракон.",
    image: p("recipe-welsh-cakes"),
    steps: ["Мурзик вклеивает рецепт на четвёртую страницу книги дороги.", "Гленис написала его на двух языках — английском и валлийском.", "Меган рисует на полях красного дракона.", "Четыре рецепта есть. Впереди — Ливерпуль."],
  },
};

const story: CityStory = {
  home: {
    name: "Фургон у аркады",
    nameRu: "The van by the arcade",
    image: p("home"),
    a11y: "Голубой фургон «Hope on Wheels» стоит у входа в старую стеклянную торговую аркаду в центре Кардиффа.",
  },
  keepsakeId: "recipe-welsh-cakes",
  welcomeRu: "Hello, Cardiff!",
  welcomeEn: "Привет, Кардифф!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Голубой фургон в Кардиффе: замок в центре города, торговые аркады, красный дракон на флагах.",
  departureImage: p("departure"),
  departureA11y: "Меган и бабушка Гленис машут голубому фургону у аркады; у Мурзика на голове красная шапка с драконом.",
  finale: [
    {
      image: p("finale-1"),
      a11y: "У фургона уютно: крючки с курткой, резная ложка над окошком, флажок с драконом, корзинка с вязанием, глиняный нарцисс, чугунная сковорода с кексами.",
      lines: [
        { en: "У фургона теперь есть валлийский дракон и очередь за кексами." },
        { en: "В книге дороги четвёртый рецепт: валлийские кексы бабушки Гленис." },
      ],
    },
    {
      image: p("finale-2"),
      a11y: "Том в новой синей куртке и Мурзик в красной шапке с драконом у стен Кардиффского замка.",
      lines: [
        { ru: "Cardiff complete!", en: "Кардифф пройден!" },
        { en: "7 / 7 уроков" },
        { ru: "Diolch, Cardiff!", en: "Спасибо, Кардифф!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Меган и бабушка Гленис машут голубому фургону у аркады; у Мурзика на голове красная шапка с драконом.",
      lines: [
        { ru: "Goodbye, Megan! Goodbye, Glenys!", en: "До свидания, Меган! До свидания, Гленис!" },
        { ru: "Next stop: Liverpool!", en: "Следующая остановка: Ливерпуль!" },
      ],
    },
    {
      image: p("finale-4"),
      a11y: "Голубой фургон едет на север через зелёные валлийские холмы с овцами.",
      lines: [{ ru: "Cardiff → Liverpool", en: "Кардифф → Ливерпуль" }],
    },
    {
      image: pic("en/liverpool/arrival"),
      a11y: "Голубой фургон в Ливерпуле: набережная с тремя большими старинными зданиями, река и уличный музыкант с гитарой.",
      lines: [{ ru: "Hello, Liverpool!", en: "Привет, Ливерпуль!" }],
    },
  ],
};

export const enCardiff = {
  id: "en-cardiff",
  name: "Кардифф",
  nameEn: "Cardiff",
  lessons: [cardiff1, cardiff2, cardiff3, cardiff4, cardiff5, cardiff6, cardiff7],
  story,
};
