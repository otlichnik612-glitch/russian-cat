import { pic } from "../art";
import { read } from "../make";
import type { CityStory, Lesson } from "../types";
import { choice, fill, letter, line, listen, match, script, speak, tf, v } from "../tr/make";

/*
 * Портленд · «Рынок и количество» · A2, уроки 1–7.
 * Город фургонов с едой: на парковках стоят «дворики» из десятков фудтраков. Мурзик и Том встают на свободное место
 * рядом с Кэндзи (около 30, лапша рамэн) и Лолой (около 45, пончики). Фермерский рынок, проверка запасов,
 * пончики Лолы, суматошная суббота, обмен продуктами между поварами. В конце Лола отдаёт им свой старый
 * фургончик «Sunny», а фургон из проката они сдают в Портленде.
 * Грамматика: much / many, a few / a little, a lot of, How much / How many, too much / too many, enough.
 */

const p = (name: string) => pic(`en/portland/${name}`);

const portland1: Lesson = {
  id: "en-a2-portland-1",
  level: "A2",
  cityId: "en-portland",
  number: 1,
  title: "The food cart pod — Дворик фудтраков",
  minutes: 8,
  goals: ["Спросить о месте и цене", "How much / How many", "Различать исчисляемое и неисчисляемое"],
  vocabNote: "A food cart — фургончик с едой. A pod — так в Портленде называют площадку, где стоят много таких фургонов. A spot — место.",
  vocab: [
    v("enpo1-1", "a food cart", "фургончик с едой", "Маленький яркий фургон с окошком и меню на доске.", "Послушать a food cart", p("l1-1")),
    v("enpo1-2", "How many carts are there?", "Сколько здесь фургонов?", "Ряды разноцветных фургонов вокруг парковки.", "Послушать How many carts are there", p("l1-2")),
    v("enpo1-3", "about thirty", "около тридцати", "Мурзик пытается сосчитать фургоны лапкой.", "Послушать about thirty", p("l1-3")),
    v("enpo1-4", "Is there a free spot?", "Есть свободное место?", "Пустое место между двумя фургонами.", "Послушать Is there a free spot", p("l1-4")),
    v("enpo1-5", "How much is the fee?", "Сколько стоит место (взнос)?", "Том достаёт кошелёк.", "Послушать How much is the fee", p("l1-5")),
    v("enpo1-6", "forty dollars a day", "сорок долларов в день", "Табличка с ценой на будке смотрителя.", "Послушать forty dollars a day", p("l1-6")),
    v("enpo1-7", "There isn't much space.", "Места немного.", "Фургон впритык встаёт между соседями.", "Послушать There isn't much space", p("l1-7")),
    v("enpo1-8", "neighbors", "соседи (в Америке пишут neighbors)", "Повар с лапшой и женщина с пончиками машут из соседних окошек.", "Послушать neighbors", p("l1-8")),
  ],
  letters: [
    letter("many = [мЭни]", "Many читается [мЭни], а не «мани». Так же any [Эни].", "How many carts?", "Сколько фургонов?"),
    letter("neighbor = [нЭйбэр]", "gh не читается. В Америке пишут neighbor, в Британии neighbour — звучит одинаково.", "my neighbors", "мои соседи"),
  ],
  dialogue: {
    title: "На парковке",
    note: "How many — для того, что можно посчитать (carts, people). How much — для того, что не считают поштучно (space, money, time).",
    lines: [
      line("murzik", "Wow! How many carts are there?", "Ого! Сколько здесь фургонов?"),
      line("kenji", "About thirty. Ramen, tacos, pies, doughnuts… I'm Kenji, by the way. I sell ramen.", "Около тридцати. Рамэн, тако, пироги, пончики… Я Кэндзи, кстати. Продаю рамэн."),
      line("tom", "Nice to meet you! Is there a free spot?", "Приятно познакомиться! Есть свободное место?"),
      line("kenji", "Right here, next to me and Lola. There isn't much space, but it's a good spot.", "Прямо здесь, рядом со мной и Лолой. Места немного, но место хорошее."),
      line("tom", "How much is the fee?", "Сколько стоит место?"),
      line("lola", "Forty dollars a day. Pay at the little booth. Welcome, neighbors!", "Сорок долларов в день. Платите в будке. Добро пожаловать, соседи!"),
    ],
    gist: choice("enpo1-d1", "Сколько фургонов на площадке?", [
      ["Около тридцати.", true],
      ["Около тринадцати.", false],
      ["Около сорока.", false],
    ]),
  },
  grammar: [
    {
      title: "How many или How much?",
      paragraphs: [
        "How many + то, что можно посчитать, во множественном числе: How many carts? How many people? How many eggs?",
        "How much + то, что не считают поштучно: How much space? How much money? How much time? И цена: How much is it?",
      ],
      examples: [
        { ru: "How many cups do we need?", en: "Сколько чашек нам нужно?" },
        { ru: "How much water do we need?", en: "Сколько воды нам нужно?" },
      ],
    },
  ],
  tasks: [
    listen("enpo1-t1", "Послушай. Сколько стоит место?", "Forty dollars a day. Pay at the little booth. Welcome, neighbors!", [
      ["Сорок долларов в день.", true],
      ["Четырнадцать долларов в день.", false],
      ["Сорок долларов в неделю.", false],
    ]),
    choice("enpo1-t2", "Как спросить «Сколько у нас времени?»", [
      ["How much time do we have?", true],
      ["How many time do we have?", false],
      ["How many times we have?", false],
    ], { skill: "grammar" }),
    fill("enpo1-t3", "Выбери правильное слово: «Сколько людей в очереди?»", "How", "people are in line?", "many", ["many", "much", "lot"], { skill: "grammar" }),
    read("enpo1-t4", "Прочитай табличку на будке. Когда площадка открыта в воскресенье?", "HAWTHORNE CART POD\nOpen: Mon–Sat 11 am – 10 pm, Sun 11 am – 6 pm\nSpot fee: $40/day\nTrash goes in the green bins!", [
      ["С 11 утра до 6 вечера.", true],
      ["С 11 утра до 10 вечера.", false],
      ["Закрыто.", false],
    ]),
    match("enpo1-t5", "Соедини пары.", [
      ["a food cart", "фургончик с едой"],
      ["Is there a free spot?", "Есть свободное место?"],
      ["How much is the fee?", "Сколько стоит место?"],
      ["neighbors", "соседи"],
    ], { skill: "words" }),
    tf("enpo1-t6", "Кэндзи продаёт пончики.", false, "listening"),
    speak("enpo1-t7", "What would you like to know about this cart pod?", "How many carts are there? Is there a free spot? And how much is the fee?", "Сколько здесь фургонов? Есть свободное место? И сколько стоит место?", {
      help: "Задай вслух вопросы: How many…? How much…?",
    }),
  ],
  reward: {
    itemId: "pod-sign",
    itemName: "Табличка с номером места",
    itemNameRu: "Spot number sign",
    ru: "Spot 17 — that's us!",
    en: "Место 17 — это мы!",
    a11y: "К окну белого фургона прикреплена зелёная табличка с номером 17 и маленьким нарисованным пончиком.",
    image: p("pod-sign"),
    steps: ["Смотритель выдаёт им табличку: SPOT 17.", "Лола рисует на ней пончик — «на удачу».", "Кэндзи рисует миску лапши.", "Мурзик дорисовывает рыбку."],
    bridge: "Утром Лола зовёт их на фермерский рынок: «Если хотите готовить — надо знать, сколько чего купить».",
  },
};

const portland2: Lesson = {
  id: "en-a2-portland-2",
  level: "A2",
  cityId: "en-portland",
  number: 2,
  title: "At the farmers market — На фермерском рынке",
  minutes: 8,
  goals: ["Купить продукты на рынке", "A few / a little", "Спросить, сколько нужно"],
  vocabNote: "A few — несколько (то, что считают: a few apples). A little — немного (то, что не считают: a little honey).",
  vocab: [
    v("enpo2-1", "a farmers market", "фермерский рынок", "Палатки с овощами, ягодами и цветами под деревьями.", "Послушать a farmers market", p("l2-1")),
    v("enpo2-2", "a few apples", "несколько яблок", "Три красных яблока в ладони.", "Послушать a few apples", p("l2-2")),
    v("enpo2-3", "a little honey", "немного мёда", "Ложка с каплей мёда над баночкой.", "Послушать a little honey", p("l2-3")),
    v("enpo2-4", "a basket of berries", "корзинка ягод", "Корзинка с малиной и черникой.", "Послушать a basket of berries", p("l2-4")),
    v("enpo2-5", "How many do you need?", "Сколько вам нужно (штук)?", "Фермер держит в руках два яблока.", "Послушать How many do you need", p("l2-5")),
    v("enpo2-6", "How much do you need?", "Сколько вам нужно? (про то, что не считают: мёд, сахар)", "Фермер держит банку мёда.", "Послушать How much do you need", p("l2-6")),
    v("enpo2-7", "Can I try one?", "Можно попробовать одну?", "Мурзик тянет лапку к ягоде.", "Послушать Can I try one", p("l2-7")),
    v("enpo2-8", "organic", "органический, без химии", "Табличка ORGANIC на ящике с морковью.", "Послушать organic", p("l2-8")),
  ],
  letters: [
    letter("honey = [хАни]", "o здесь звучит как короткое [а]: honey [хАни], money [мАни].", "a little honey", "немного мёда"),
    letter("berries = [бЭриз]", "Berry → berries: y меняется на ies.", "fresh berries", "свежие ягоды"),
  ],
  dialogue: {
    title: "Ягоды и мёд",
    note: "Лола продаёт пончики, поэтому ей нужны ягоды для начинки и мёд для глазури.",
    lines: [
      line("lola", "We need a few things for my doughnuts. Berries, apples and a little honey.", "Нам нужно несколько вещей для моих пончиков. Ягоды, яблоки и немного мёда."),
      line("seller", "Good morning! Everything's organic. How many apples do you need?", "Доброе утро! Всё органическое. Сколько яблок вам нужно?"),
      line("lola", "Just a few. Six, please. And two baskets of berries.", "Всего несколько. Шесть, пожалуйста. И две корзинки ягод."),
      line("murzik", "These berries look amazing. Can I try one?", "Ягоды выглядят потрясающе. Можно попробовать одну?"),
      line("seller", "Sure! And how much honey do you need?", "Конечно! А сколько вам мёда?"),
      line("lola", "Just a little. One small jar.", "Совсем немного. Одну маленькую баночку."),
    ],
    gist: choice("enpo2-d1", "Сколько яблок купила Лола?", [
      ["Шесть.", true],
      ["Шестнадцать.", false],
      ["Две.", false],
    ]),
  },
  grammar: [
    {
      title: "A few и a little",
      paragraphs: [
        "A few — несколько: с тем, что можно посчитать (apples, eggs, carts): a few apples, a few people.",
        "A little — немного: с тем, что не считают (honey, sugar, time, water): a little honey, a little time.",
      ],
      examples: [
        { ru: "Can I have a few napkins, please?", en: "Можно мне несколько салфеток?" },
        { ru: "Add a little milk.", en: "Добавь немного молока." },
      ],
    },
  ],
  tasks: [
    listen("enpo2-t1", "Послушай. Сколько корзинок ягод купила Лола?", "Just a few. Six, please. And two baskets of berries.", [
      ["Две.", true],
      ["Шесть.", false],
      ["Одну.", false],
    ]),
    choice("enpo2-t2", "Как сказать «Добавь немного молока»?", [
      ["Add a little milk.", true],
      ["Add a few milk.", false],
      ["Add a little milks.", false],
    ], { skill: "grammar" }),
    fill("enpo2-t3", "Выбери правильное слово: «Можно несколько салфеток?»", "Can I have a", "napkins, please?", "few", ["few", "little", "much"], { skill: "grammar" }),
    read("enpo2-t4", "Прочитай ценник. Сколько стоят две корзинки ягод?", "BERRY FARM\nRaspberries: $5 a basket\n2 baskets: $9\nHoney (small jar): $7\nApples: $1 each", [
      ["9 долларов.", true],
      ["10 долларов.", false],
      ["7 долларов.", false],
    ]),
    match("enpo2-t5", "Соедини пары.", [
      ["a few apples", "несколько яблок"],
      ["a little honey", "немного мёда"],
      ["a basket of berries", "корзинка ягод"],
      ["organic", "органический"],
    ], { skill: "words" }),
    tf("enpo2-t6", "Лоле нужно много мёда.", false, "listening"),
    speak("enpo2-t7", "Good morning! What can I get you?", "Good morning! A few apples, please, and a little honey. Can I try a berry?", "Доброе утро! Несколько яблок, пожалуйста, и немного мёда. Можно попробовать ягодку?", {
      help: "Купи вслух продукты на рынке: a few…, a little…",
    }),
  ],
  reward: {
    itemId: "tote-bag",
    itemName: "Сумка с рынка",
    itemNameRu: "Market tote bag",
    ru: "No plastic — just a good bag!",
    en: "Никакого пластика — только хорошая сумка!",
    a11y: "На крючке в фургоне висит холщовая сумка с нарисованными ягодами и пчелой.",
    image: p("tote-bag"),
    steps: ["Фермер дарит им холщовую сумку.", "На ней нарисованы ягоды и пчела.", "«В Портленде все ходят на рынок со своей сумкой».", "Мурзик складывает туда покупки — и немного себя."],
    bridge: "Вечером Кэндзи заглядывает к ним в фургон: «Ну что, проверим запасы? Сколько у вас муки?»",
  },
};

const portland3: Lesson = {
  id: "en-a2-portland-3",
  level: "A2",
  cityId: "en-portland",
  number: 3,
  title: "What have we got? — Что у нас есть?",
  minutes: 8,
  goals: ["Проверить запасы на кухне", "Not much / not many, a lot of", "Составить список покупок"],
  vocabNote: "В отрицаниях и вопросах much и many звучат естественно: We don't have much sugar. There aren't many eggs. В утверждениях чаще говорят a lot of.",
  vocab: [
    v("enpo3-1", "We don't have much sugar.", "У нас мало сахара.", "Почти пустая банка с сахаром.", "Послушать We don't have much sugar", p("l3-1")),
    v("enpo3-2", "There aren't many eggs left.", "Яиц осталось немного.", "В коробке всего два яйца.", "Послушать There aren't many eggs left", p("l3-2")),
    v("enpo3-3", "We have a lot of flour.", "У нас много муки.", "Огромный мешок муки в углу фургона.", "Послушать We have a lot of flour", p("l3-3")),
    v("enpo3-4", "Let's check.", "Давай проверим.", "Кэндзи открывает холодильник с фонариком.", "Послушать Let's check", p("l3-4")),
    v("enpo3-5", "a shopping list", "список покупок", "Мурзик пишет список на листке.", "Послушать a shopping list", p("l3-5")),
    v("enpo3-6", "We're out of butter.", "У нас кончилось масло.", "Пустая обёртка от масла.", "Послушать We're out of butter", p("l3-6")),
    v("enpo3-7", "Is that enough?", "Этого хватит?", "Том задумчиво держит пакет молока.", "Послушать Is that enough", p("l3-7")),
    v("enpo3-8", "Not nearly enough!", "Даже близко не хватит!", "Кэндзи смеётся и качает головой.", "Послушать Not nearly enough", p("l3-8")),
  ],
  letters: [
    letter("enough = [инАф]", "gh в конце звучит [ф]: enough [инАф], как tough [таф] в Сиэтле.", "Is that enough?", "Этого хватит?"),
    letter("flour = [флАуэр]", "Flour (мука) звучит так же, как flower (цветок).", "a lot of flour", "много муки"),
  ],
  dialogue: {
    title: "Проверка запасов",
    note: "Be out of… — «кончилось»: We're out of butter. Left — «осталось»: two eggs left.",
    lines: [
      line("kenji", "Tomorrow's Saturday — the busiest day. Let's check. How much sugar do you have?", "Завтра суббота — самый загруженный день. Давай проверим. Сколько у вас сахара?"),
      line("murzik", "Not much. Half a bag.", "Немного. Полпакета."),
      line("kenji", "And eggs?", "А яиц?"),
      line("tom", "There aren't many eggs left. Just two. But we have a lot of flour!", "Яиц осталось немного. Всего два. Зато у нас много муки!"),
      line("murzik", "Oh no, and we're out of butter.", "Ой, а масло у нас кончилось."),
      line("tom", "I'll buy two eggs and one pack of butter. Is that enough?", "Куплю два яйца и одну пачку масла. Этого хватит?"),
      line("kenji", "For a Saturday in Portland? Not nearly enough! Make a shopping list.", "На субботу в Портленде? Даже близко не хватит! Составь список покупок."),
    ],
    gist: choice("enpo3-d1", "Чего у них много?", [
      ["Муки.", true],
      ["Яиц.", false],
      ["Масла.", false],
    ]),
  },
  grammar: [
    {
      title: "Much, many, a lot of, enough",
      paragraphs: [
        "Not much / not many — мало, немного: We don't have much sugar. There aren't many eggs. A lot of — много (подходит ко всему): a lot of flour, a lot of eggs.",
        "Enough — достаточно, хватит: Is that enough? We don't have enough milk. Not enough — не хватит.",
      ],
      examples: [
        { ru: "We don't have enough chairs for everyone.", en: "Нам не хватит стульев на всех." },
        { ru: "There are a lot of people today.", en: "Сегодня много людей." },
      ],
    },
  ],
  tasks: [
    listen("enpo3-t1", "Послушай. Сколько яиц осталось?", "There aren't many eggs left. Just two. But we have a lot of flour!", [
      ["Два.", true],
      ["Двенадцать.", false],
      ["Ни одного.", false],
    ]),
    choice("enpo3-t2", "Как сказать «У нас мало сахара»?", [
      ["We don't have much sugar.", true],
      ["We don't have many sugar.", false],
      ["We don't have a few sugar.", false],
    ], { skill: "grammar" }),
    fill("enpo3-t3", "Выбери правильное слово: «Нам не хватит стульев на всех».", "We don't have", "chairs for everyone.", "enough", ["enough", "much", "a little"], { skill: "grammar" }),
    read("enpo3-t4", "Прочитай список покупок Мурзика. Сколько яиц он хочет купить?", "SHOPPING LIST\n— 3 dozen eggs (36!)\n— 4 packs of butter\n— 2 bags of sugar\n— milk (a lot!)\n— NO flour, we have a lot", [
      ["Тридцать шесть.", true],
      ["Три.", false],
      ["Двенадцать.", false],
    ]),
    match("enpo3-t5", "Соедини пары.", [
      ["We're out of butter.", "У нас кончилось масло."],
      ["Let's check.", "Давай проверим."],
      ["a shopping list", "список покупок"],
      ["Is that enough?", "Этого хватит?"],
    ], { skill: "words" }),
    tf("enpo3-t6", "Кэндзи считает, что двух яиц и одной пачки масла хватит.", false, "listening"),
    speak("enpo3-t7", "What do you have in your fridge right now?", "I have a lot of vegetables, but I don't have much milk. And there aren't many eggs left.", "У меня много овощей, но мало молока. И яиц осталось немного.", {
      help: "Расскажи вслух, что у тебя в холодильнике: a lot of…, not much…, not many…",
    }),
  ],
  reward: {
    itemId: "measuring-cups",
    itemName: "Мерные стаканчики",
    itemNameRu: "Measuring cups",
    ru: "One cup, half a cup, a quarter cup!",
    en: "Один стакан, полстакана, четверть стакана!",
    a11y: "На стене фургона висят на кольце четыре металлических мерных стаканчика разного размера.",
    image: p("measuring-cups"),
    steps: ["Американцы меряют муку стаканами — cups.", "Кэндзи дарит им набор мерных стаканчиков.", "Один, половина, треть, четверть.", "Мурзик пробует сесть в самый большой. Почти помещается."],
    bridge: "Рано утром в субботу, до открытия, Лола стучит в окошко: «Хотите научиться делать мои пончики? Мне не хватает рук».",
  },
};

const portland4: Lesson = {
  id: "en-a2-portland-4",
  level: "A2",
  cityId: "en-portland",
  number: 4,
  title: "Lola's doughnuts — Пончики Лолы",
  minutes: 8,
  goals: ["Понять рецепт с американскими мерами", "Too much / too many", "Предупредить, что чего-то слишком много"],
  vocabNote: "A cup — мерный стакан (около 240 мл). A teaspoon — чайная ложка. Too much / too many — слишком много.",
  vocab: [
    v("enpo4-1", "two cups of flour", "два стакана муки", "Два мерных стакана, полные муки.", "Послушать two cups of flour", p("l4-1")),
    v("enpo4-2", "a teaspoon of salt", "чайная ложка соли", "Маленькая ложка с горкой соли.", "Послушать a teaspoon of salt", p("l4-2")),
    v("enpo4-3", "Mix it with your hands.", "Перемешай руками.", "Лапки Мурзика в тесте.", "Послушать Mix it with your hands", p("l4-3")),
    v("enpo4-4", "That's too much sugar!", "Это слишком много сахара!", "Мурзик сыплет сахар горой, Лола хватается за голову.", "Послушать That's too much sugar", p("l4-4")),
    v("enpo4-5", "too many sprinkles", "слишком много посыпки", "Пончик, весь засыпанный цветной посыпкой.", "Послушать too many sprinkles", p("l4-5")),
    v("enpo4-6", "Let it rise for an hour.", "Пусть тесто поднимается час.", "Миска с тестом под полотенцем.", "Послушать Let it rise for an hour", p("l4-6")),
    v("enpo4-7", "Fry them until golden.", "Жарить до золотистого цвета.", "Золотистые пончики в масле.", "Послушать Fry them until golden", p("l4-7")),
    v("enpo4-8", "Be careful, the oil is hot!", "Осторожно, масло горячее!", "Лола выставляет руку, не подпуская Мурзика к плите.", "Послушать Be careful, the oil is hot", p("l4-8")),
  ],
  letters: [
    letter("doughnut = [дОунат]", "gh не читается: dough [доу] — тесто. В Америке часто пишут donut.", "Lola's doughnuts", "пончики Лолы"),
    letter("golden = [гОулдэн]", "o перед ld читается [оу]: gold [гоулд], cold [коулд].", "until golden", "до золотистого цвета"),
  ],
  dialogue: {
    title: "Фургон Лолы",
    note: "Горячее масло опасно: к плите подходят только взрослые, а Мурзик украшает пончики, когда они остынут.",
    lines: [
      line("lola", "Three cups of flour, a packet of yeast, a teaspoon of salt, milk and eggs. Mix it with your hands.", "Три стакана муки, пакетик дрожжей, чайная ложка соли, молоко и яйца. Перемешай руками."),
      line("murzik", "And sugar? I'll put in a lot!", "А сахар? Я положу много!"),
      line("lola", "Stop! That's too much sugar! Just a quarter cup.", "Стой! Это слишком много сахара! Всего четверть стакана."),
      line("lola", "Now let it rise for an hour. Then I'll fry them until golden. Be careful, the oil is hot — stay back!", "Теперь дай ему подняться час. Потом я пожарю их до золотистого цвета. Осторожно, масло горячее — отойди!"),
      line("tom", "Murzik, you've put too many sprinkles on that one.", "Мурзик, ты насыпал слишком много посыпки на этот."),
      line("murzik", "There's no such thing as too many sprinkles!", "Слишком много посыпки не бывает!"),
    ],
    gist: choice("enpo4-d1", "Сколько сахара нужно по рецепту Лолы?", [
      ["Четверть стакана.", true],
      ["Два стакана.", false],
      ["Чайную ложку.", false],
    ]),
  },
  grammar: [
    {
      title: "Too much и too many",
      paragraphs: [
        "Too much — слишком много (то, что не считают): too much sugar, too much salt, too much noise.",
        "Too many — слишком много (то, что считают): too many sprinkles, too many people, too many cars.",
      ],
      examples: [
        { ru: "There are too many people here.", en: "Здесь слишком много людей." },
        { ru: "Don't add too much salt.", en: "Не клади слишком много соли." },
      ],
    },
  ],
  tasks: [
    listen("enpo4-t1", "Послушай. Сколько тесто должно подниматься?", "Now let it rise for an hour. Then I'll fry them until golden.", [
      ["Час.", true],
      ["Полчаса.", false],
      ["Всю ночь.", false],
    ]),
    choice("enpo4-t2", "Как сказать «Здесь слишком много людей»?", [
      ["There are too many people here.", true],
      ["There are too much people here.", false],
      ["There is too many people here.", false],
    ], { skill: "grammar" }),
    fill("enpo4-t3", "Выбери правильное слово: «Не клади слишком много соли».", "Don't add too", "salt.", "much", ["much", "many", "few"], { skill: "grammar" }),
    read("enpo4-t4", "Прочитай рецепт Лолы. Что делать с тестом, когда оно замешано?", "LOLA'S DOUGHNUTS\n3 cups flour · 1 packet yeast · 1 tsp salt · ¼ cup sugar · 1 cup milk · 2 eggs\n1. Mix with your hands.\n2. Let it rise for 1 hour.\n3. Fry until golden (adults only!).\n4. Add sprinkles — not too many!", [
      ["Дать ему подняться час.", true],
      ["Сразу жарить.", false],
      ["Посыпать посыпкой.", false],
    ]),
    match("enpo4-t5", "Соедини пары.", [
      ["a teaspoon of salt", "чайная ложка соли"],
      ["Mix it with your hands.", "Перемешай руками."],
      ["Fry them until golden.", "Жарить до золотистого цвета."],
      ["Be careful, the oil is hot!", "Осторожно, масло горячее!"],
    ], { skill: "words" }),
    tf("enpo4-t6", "Мурзик сам жарит пончики в горячем масле.", false, "listening"),
    speak("enpo4-t7", "What's wrong with this soup?", "There's too much salt in it. And there are too many onions!", "В нём слишком много соли. И слишком много лука!", {
      help: "Скажи вслух, что не так с блюдом: too much…, too many…",
    }),
  ],
  reward: {
    itemId: "doughnut-box",
    itemName: "Коробка для пончиков",
    itemNameRu: "Doughnut box",
    ru: "A dozen doughnuts — and too many sprinkles!",
    en: "Дюжина пончиков — и слишком много посыпки!",
    a11y: "На прилавке фургона стоит розовая картонная коробка с двенадцатью пончиками; на одном — гора разноцветной посыпки.",
    image: p("doughnut-box"),
    steps: ["Первая партия пончиков готова.", "Лола складывает дюжину в розовую коробку.", "Один пончик — «Мурзик Особый»: посыпки больше, чем пончика.", "Его съедают первым."],
    bridge: "Суббота. Утром идёт дождь, но к обеду выглядывает солнце…",
  },
};

const portland5: Lesson = {
  id: "en-a2-portland-5",
  level: "A2",
  cityId: "en-portland",
  number: 5,
  title: "A busy Saturday — Суматошная суббота",
  minutes: 8,
  goals: ["Работать в час пик", "Сказать, что что-то заканчивается", "Only a few / only a little left"],
  vocabNote: "Only a few left — осталось всего несколько. Hardly any — почти нет. Sold out — всё продано.",
  vocab: [
    v("enpo5-1", "a long line", "длинная очередь", "Очередь тянется вдоль всех фургонов.", "Послушать a long line", p("l5-1")),
    v("enpo5-2", "We only have a few left!", "Осталось всего несколько!", "На подносе три пончика.", "Послушать We only have a few left", p("l5-2")),
    v("enpo5-3", "There's only a little soup left.", "Супа осталось совсем чуть-чуть.", "Половник скребёт по дну кастрюли.", "Послушать There's only a little soup left", p("l5-3")),
    v("enpo5-4", "There isn't much time.", "Времени мало.", "Часы показывают без пяти два.", "Послушать There isn't much time", p("l5-4")),
    v("enpo5-5", "We're almost sold out.", "Мы почти всё распродали.", "Том машет следующему покупателю, на подносе почти пусто.", "Послушать We're almost sold out", p("l5-5")),
    v("enpo5-6", "Sorry for the wait.", "Извините за ожидание.", "Том виновато улыбается.", "Послушать Sorry for the wait", p("l5-6")),
    v("enpo5-7", "Hardly any customers came.", "Покупателей почти не было.", "Пустая площадка в дождливое утро.", "Послушать Hardly any customers came", p("l5-7")),
    v("enpo5-8", "How many are left?", "Сколько осталось?", "Мурзик пересчитывает пончики лапкой.", "Послушать How many are left", p("l5-8")),
  ],
  letters: [
    letter("customer = [кАстэмэр]", "Ударение на первый слог: CUS-to-mer.", "a lot of customers", "много покупателей"),
    letter("wait = [уэйт]", "ai = [эй]: wait, rain, train.", "Sorry for the wait.", "Извините за ожидание."),
  ],
  dialogue: {
    title: "Час пик",
    note: "Утром шёл дождь и покупателей почти не было. А к обеду выглянуло солнце — и все пришли сразу.",
    lines: [
      line("tom", "This morning hardly any customers came. And now look at this long line!", "Утром покупателей почти не было. А теперь посмотри на эту длинную очередь!"),
      line("murzik", "Who's next? Sorry for the wait. We're almost sold out!", "Кто следующий? Извините за ожидание. Мы почти всё распродали!"),
      line("lola", "Murzik, how many doughnuts are left?", "Мурзик, сколько пончиков осталось?"),
      line("murzik", "We only have a few left! Five… four…", "Осталось всего несколько! Пять… четыре…"),
      line("kenji", "And there's only a little broth left. Ten more bowls, maybe.", "А бульона совсем чуть-чуть. Ещё мисок десять, может быть."),
      line("tom", "There isn't much time — the pod closes at two today for cleaning.", "Времени мало — сегодня площадка закрывается в два, на уборку."),
    ],
    gist: choice("enpo5-d1", "Почему утром было мало покупателей?", [
      ["Шёл дождь.", true],
      ["Площадка была закрыта.", false],
      ["Не было пончиков.", false],
    ]),
  },
  grammar: [
    {
      title: "Only a few, only a little, hardly any",
      paragraphs: [
        "Only a few — всего несколько (считаемое): only a few doughnuts left. Only a little — совсем немного (несчитаемое): only a little soup left.",
        "Hardly any — почти нет: hardly any customers, hardly any time. Left — «осталось»: How many are left? How much is left?",
      ],
      examples: [
        { ru: "There's hardly any milk left.", en: "Молока почти не осталось." },
        { ru: "How much coffee is left? — Only a little.", en: "Сколько кофе осталось? — Совсем чуть-чуть." },
      ],
    },
  ],
  tasks: [
    listen("enpo5-t1", "Послушай. Во сколько сегодня закрывается площадка?", "There isn't much time — the pod closes at two today for cleaning.", [
      ["В два.", true],
      ["В десять.", false],
      ["В шесть.", false],
    ]),
    choice("enpo5-t2", "Как сказать «Молока почти не осталось»?", [
      ["There's hardly any milk left.", true],
      ["There's hardly many milk left.", false],
      ["There are a few milk left.", false],
    ], { skill: "grammar" }),
    fill("enpo5-t3", "Выбери правильное слово: «Сколько осталось супа?»", "How", "soup is left?", "much", ["much", "many", "few"], { skill: "grammar" }),
    read("enpo5-t4", "Прочитай доску у фургона Кэндзи. Чего уже нет?", "KENJI'S RAMEN — TODAY\nPork ramen — SOLD OUT\nVeggie ramen — only a few bowls left!\nGreen tea — plenty!", [
      ["Рамэна со свининой.", true],
      ["Овощного рамэна.", false],
      ["Зелёного чая.", false],
    ]),
    match("enpo5-t5", "Соедини пары.", [
      ["a long line", "длинная очередь"],
      ["We're almost sold out.", "Мы почти всё распродали."],
      ["Sorry for the wait.", "Извините за ожидание."],
      ["How many are left?", "Сколько осталось?"],
    ], { skill: "words" }),
    tf("enpo5-t6", "Супа у Кэндзи ещё очень много.", false, "listening"),
    script("enpo5-t7", "Ты работаешь в фургоне. Ответь покупателю.", [
      { speaker: "Покупатель", text: "Two doughnuts, please! Do you have any left?" },
      { speaker: "Ты", answer: "Yes, but only a few! Sorry for the wait.", options: ["Yes, but only a few! Sorry for the wait.", "Yes, but only a little doughnuts!", "Yes, too much left!"] },
      { speaker: "Покупатель", text: "No problem. How much is that?" },
      { speaker: "Ты", answer: "Six dollars, please. Next, please!", options: ["Six dollars, please. Next, please!", "Six dollars, please. How many is it?", "Six dollars. Hardly any!"] },
    ], { skill: "speaking" }),
  ],
  reward: {
    itemId: "rose-sticker",
    itemName: "Наклейка «Город роз»",
    itemNameRu: "City of Roses sticker",
    ru: "Portland — the City of Roses!",
    en: "Портленд — город роз!",
    a11y: "На борту фургона — круглая наклейка с красной розой и надписью CITY OF ROSES.",
    image: p("rose-sticker"),
    steps: ["К двум часам всё продано.", "Последняя покупательница дарит Мурзику наклейку.", "Портленд называют городом роз.", "Наклейка встаёт рядом с вывеской «Hope on Wheels»."],
    bridge: "В воскресенье повара площадки устраивают обмен: у кого что лишнее — меняются.",
  },
};

const portland6: Lesson = {
  id: "en-a2-portland-6",
  level: "A2",
  cityId: "en-portland",
  number: 6,
  title: "Swap day — День обмена",
  minutes: 8,
  goals: ["Предложить обмен", "Сказать, чего у тебя много, а чего не хватает", "Повторить much / many / a lot of / enough"],
  vocabNote: "Swap — обмен, меняться. Spare — лишний, запасной: Do you have any spare eggs?",
  vocab: [
    v("enpo6-1", "Let's swap!", "Давай меняться!", "Повара с коробками собираются в кружок.", "Послушать Let's swap", p("l6-1")),
    v("enpo6-2", "Do you have any spare eggs?", "У тебя есть лишние яйца?", "Мурзик держит пустую коробку из-под яиц.", "Послушать Do you have any spare eggs", p("l6-2")),
    v("enpo6-3", "We have too much flour.", "У нас слишком много муки.", "Огромный мешок муки рядом с Томом.", "Послушать We have too much flour", p("l6-3")),
    v("enpo6-4", "I'll give you some flour for some eggs.", "Я дам тебе муки за яйца.", "Мешочек муки и коробка яиц на столе.", "Послушать I'll give you some flour for some eggs", p("l6-4")),
    v("enpo6-5", "What do you have too much of?", "Чего у вас слишком много?", "Кэндзи с блокнотом обходит фургоны.", "Послушать What do you have too much of", p("l6-5")),
    v("enpo6-6", "We don't have enough onions.", "Нам не хватает лука.", "Пустая корзинка для лука.", "Послушать We don't have enough onions", p("l6-6")),
    v("enpo6-7", "How about a few lemons?", "Как насчёт нескольких лимонов?", "Повариха протягивает три лимона.", "Послушать How about a few lemons", p("l6-7")),
    v("enpo6-8", "Everyone helps everyone.", "Все помогают всем.", "Повара смеются за общим столом.", "Послушать Everyone helps everyone", p("l6-8")),
  ],
  letters: [
    letter("swap = [суап]", "В американском английском a здесь звучит как открытое [а]: swap [суап], want [уант].", "Let's swap!", "Давай меняться!"),
    letter("deal = [ди:л]", "ea = долгое [и:]: deal, meal, eat.", "It's a deal!", "Договорились!"),
  ],
  dialogue: {
    title: "Воскресный обмен",
    note: "Такие обмены помогают маленьким фургонам: никто не выбрасывает лишнее.",
    lines: [
      line("kenji", "Swap day! What do you have too much of?", "День обмена! Чего у вас слишком много?"),
      line("tom", "We have too much flour. But we don't have enough eggs. Do you have any spare eggs?", "У нас слишком много муки. Но не хватает яиц. У тебя есть лишние яйца?"),
      line("kenji", "Sure, I have a lot. I'll give you a dozen eggs for some flour.", "Конечно, у меня много. Дам тебе дюжину яиц за муку."),
      line("tom", "It's a deal!", "Договорились!"),
      line("lola", "And I don't have enough onions for my dinner… Who has a lot of onions?", "А мне не хватает лука на ужин… У кого много лука?"),
      line("murzik", "We do! How about a few onions for a little honey?", "У нас! Как насчёт нескольких луковиц за немного мёда?"),
      line("lola", "Deal! See? Here everyone helps everyone.", "Договорились! Видишь? Здесь все помогают всем."),
    ],
    gist: choice("enpo6-d1", "Что Том отдаёт Кэндзи за яйца?", [
      ["Муку.", true],
      ["Лук.", false],
      ["Мёд.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем: сколько чего",
      paragraphs: [
        "Считаемое: How many…? many, a few, too many, not many. Несчитаемое: How much…? much, a little, too much, not much.",
        "Для всего: a lot of, enough, not enough, hardly any. Too much / too many — больше, чем нужно; not enough — меньше, чем нужно.",
      ],
      examples: [
        { ru: "We have a lot of onions but not enough lemons.", en: "У нас много лука, но не хватает лимонов." },
        { ru: "There's too much sugar and too many sprinkles.", en: "Слишком много сахара и слишком много посыпки." },
      ],
    },
  ],
  tasks: [
    listen("enpo6-t1", "Послушай. Сколько яиц даст Кэндзи?", "Sure, I have a lot. I'll give you a dozen eggs for some flour.", [
      ["Дюжину (двенадцать).", true],
      ["Десять.", false],
      ["Два.", false],
    ]),
    choice("enpo6-t2", "Как сказать «У нас много лука, но не хватает лимонов»?", [
      ["We have a lot of onions but not enough lemons.", true],
      ["We have much onions but not enough lemon.", false],
      ["We have a lot onions but enough not lemons.", false],
    ], { skill: "grammar" }),
    fill("enpo6-t3", "Выбери правильное слово: «У тебя есть лишние яйца?»", "Do you have any", "eggs?", "spare", ["spare", "enough", "much"], { skill: "words" }),
    read("enpo6-t4", "Прочитай доску обмена. Что нужно Лоле?", "SWAP BOARD\nKenji: HAVE eggs, green onions · NEED flour\nLola: HAVE honey, berries · NEED onions\nHope on Wheels: HAVE flour, onions · NEED eggs", [
      ["Лук.", true],
      ["Мёд.", false],
      ["Мука.", false],
    ]),
    match("enpo6-t5", "Соедини пары.", [
      ["Let's swap!", "Давай меняться!"],
      ["What do you have too much of?", "Чего у вас слишком много?"],
      ["We don't have enough onions.", "Нам не хватает лука."],
      ["Everyone helps everyone.", "Все помогают всем."],
    ], { skill: "words" }),
    tf("enpo6-t6", "У Лолы слишком много лука.", false, "listening"),
    speak("enpo6-t7", "What do you have too much of at home? What don't you have enough of?", "I have too many books and too much paper. But I don't have enough time to read!", "У меня слишком много книг и слишком много бумаги. Но не хватает времени, чтобы читать!", {
      help: "Скажи вслух: чего у тебя слишком много и чего не хватает.",
    }),
  ],
  reward: {
    itemId: "bike-bell2",
    itemName: "Велосипедный звонок",
    itemNameRu: "Bike bell",
    ru: "Ring-ring — Portland style!",
    en: "Дзынь-дзынь — по-портлендски!",
    a11y: "На шнурке у окошка висит блестящий велосипедный звонок в виде пончика.",
    image: p("bike-bell"),
    steps: ["Портленд — один из самых велосипедных городов Америки.", "Кэндзи дарит им звонок в виде пончика.", "Мурзик вешает его на шнурке у окошка.", "Теперь «Следующий, пожалуйста!» звучит как дзынь-дзынь."],
    bridge: "В последний вечер Лола долго молчит. Потом говорит: «У меня есть для вас кое-что. Небольшое, но на колёсах. И жёлтое».",
  },
};

const portland7: Lesson = {
  id: "en-a2-portland-7",
  level: "A2",
  cityId: "en-portland",
  number: 7,
  title: "Portland exam — Экзамен: Портленд",
  minutes: 9,
  goals: ["Понять длинный рассказ на слух", "Говорить о количестве", "Повторить всё из Портленда"],
  vocabNote: "Урок 7 — экзамен города: длинная аудиоистория и повторение всего из Портленда.",
  vocab: [
    v("enpo7-1", "Our thirteenth recipe!", "Наш тринадцатый рецепт!", "Мурзик держит карточку с рецептом пончиков.", "Послушать Our thirteenth recipe", p("l7-1")),
    v("enpo7-2", "my old truck", "мой старый фургон", "Маленький жёлтый фудтрак с надписью SUNNY.", "Послушать my old truck", p("l7-2")),
    v("enpo7-3", "I don't need it anymore.", "Он мне больше не нужен.", "Лола гладит жёлтый борт.", "Послушать I don't need it anymore", p("l7-3")),
    v("enpo7-4", "a lot of miles on it", "большой пробег (много миль)", "Старый спидометр с большими цифрами.", "Послушать a lot of miles on it", p("l7-4")),
    v("enpo7-5", "return the rental van", "сдать фургон из проката", "Том отдаёт ключи сотруднику проката.", "Послушать return the rental van", p("l7-5")),
    v("enpo7-6", "all the way to California", "до самой Калифорнии", "Карта: дорога вдоль океана на юг.", "Послушать all the way to California", p("l7-6")),
    v("enpo7-7", "Come back and visit!", "Приезжайте к нам в гости!", "Кэндзи и Лола машут у площадки.", "Послушать Come back and visit", p("l7-7")),
    v("enpo7-8", "Take the coast road.", "Поезжайте по дороге вдоль побережья.", "Кэндзи показывает на карте дорогу вдоль океана.", "Послушать Take the coast road", p("l7-8")),
  ],
  letters: [
    letter("thirteenth = [сёртИ:нс]", "Ударение на teen. th в начале и в конце — глухой: кончик языка между зубами.", "our thirteenth recipe", "наш тринадцатый рецепт"),
  ],
  dialogue: {
    title: "Жёлтый фургон",
    note: "В Сиэтле Джун сказала, что фургон из проката можно сдать в Портленде. Truck — так в Америке называют и грузовик, и фургон с едой.",
    lines: [
      line("lola", "This is Sunny, my old truck. I sell doughnuts from the cart now, so I don't need it anymore.", "Это «Sunny», мой старый фургон. Я теперь продаю пончики из фургончика здесь, на площадке, так что он мне больше не нужен."),
      line("tom", "Lola, we can't take it!", "Лола, мы не можем его взять!"),
      line("lola", "You can. It has a lot of miles on it, but it'll take you all the way to California. And you can return the rental van here.", "Можете. Он много проехал, но довезёт вас до самой Калифорнии. А фургон из проката можно сдать здесь."),
      line("kenji", "And here's Lola's recipe for your road book.", "А вот рецепт Лолы для вашей книги дороги."),
      line("murzik", "Our thirteenth recipe! And not too many sprinkles!", "Наш тринадцатый рецепт! И не слишком много посыпки."),
      line("lola", "We'll miss you. Come back and visit! And send us a postcard from Los Angeles!", "Мы будем по вам скучать. Приезжайте к нам в гости! И пришлите открытку из Лос-Анджелеса!"),
      line("kenji", "Take the coast road — it has a lot of curves, but the views are amazing.", "Поезжайте по дороге вдоль побережья — там много поворотов, но виды потрясающие."),
    ],
    gist: choice("enpo7-d1", "Что Лола дарит Мурзику и Тому?", [
      ["Свой старый жёлтый фургон.", true],
      ["Новый фургончик для пончиков.", false],
      ["Билеты на самолёт.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем Портленд",
      paragraphs: [
        "Считаемое: How many? many, a few, too many, not many, only a few left. Несчитаемое: How much? much, a little, too much, not much, only a little left.",
        "Для всего: a lot of, enough / not enough, hardly any. Рынок и кухня: a food cart, a spot, a fee, a cup of flour, a teaspoon, Let it rise, Fry until golden, Let's swap, It's a deal.",
      ],
      examples: [
        { ru: "We sold a lot of doughnuts, but we didn't make enough!", en: "Мы продали много пончиков, но приготовили недостаточно!" },
        { ru: "How many recipes do we have now? — Thirteen!", en: "Сколько у нас теперь рецептов? — Тринадцать!" },
      ],
    },
  ],
  tasks: [
    listen("enpo7-t1", "Аудиоистория: Лола рассказывает о себе. Сколько лет она продаёт пончики?", "I've sold doughnuts in Portland for fifteen years. In the first year I had only a few customers and a lot of time. Now I have a lot of customers and hardly any time! Every Saturday I make about five hundred doughnuts. My secret? A little honey, a little love — and not too many sprinkles.", [
      ["Пятнадцать лет.", true],
      ["Пять лет.", false],
      ["Пятьдесят лет.", false],
    ]),
    listen("enpo7-t2", "Послушай конец рассказа Лолы. Сколько пончиков она делает по субботам?", "Every Saturday I make about five hundred doughnuts. My secret? A little honey, a little love — and not too many sprinkles.", [
      ["Около пятисот.", true],
      ["Около пятидесяти.", false],
      ["Около пятнадцати.", false],
    ]),
    choice("enpo7-t3", "Как сказать «Мы продали много пончиков, но приготовили недостаточно»?", [
      ["We sold a lot of doughnuts, but we didn't make enough.", true],
      ["We sold much doughnuts, but we didn't make enough.", false],
      ["We sold a lot of doughnuts, but we didn't make too many enough.", false],
    ], { skill: "grammar" }),
    read("enpo7-t4", "Прочитай квитанцию проката. Сколько залога вернули Тому?", "RAINY DAY RENTALS — PORTLAND\nVan returned: full tank ✔\nNo damage ✔\nDeposit returned: $500\nThank you for choosing Rainy Day Rentals!", [
      ["500 долларов.", true],
      ["65 долларов.", false],
      ["Ничего.", false],
    ]),
    script("enpo7-t5", "Попрощайся с Лолой и Кэндзи.", [
      { speaker: "Лола", text: "We'll miss you!" },
      { speaker: "Ты", answer: "We'll miss you too! Thank you for everything.", options: ["We'll miss you too! Thank you for everything.", "We'll miss you too much many.", "Next, please!"] },
      { speaker: "Кэндзи", text: "Send us a postcard!" },
      { speaker: "Ты", answer: "We will — we'll send a lot of postcards!", options: ["We will — we'll send a lot of postcards!", "We will — we'll send a few postcard!", "We will — we'll send too much postcards!"] },
    ], { skill: "review" }),
    match("enpo7-t6", "Повторяем Портленд: соедини пары.", [
      ["a food cart", "фургончик с едой"],
      ["a few apples", "несколько яблок"],
      ["too much sugar", "слишком много сахара"],
      ["Let's swap!", "Давай меняться!"],
    ], { skill: "review" }),
    speak("enpo7-t7", "How much time do you have for English every day?", "I don't have much time — only a little in the evening. But I do a few exercises every day, and that's enough for me.", "Времени у меня немного — совсем чуть-чуть по вечерам. Но я делаю несколько упражнений каждый день, и мне этого хватает.", {
      help: "Ответь вслух: much, a little, a few, enough.",
    }),
  ],
  reward: {
    itemId: "recipe-doughnuts",
    itemName: "Рецепт «Doughnuts»",
    itemNameRu: "Doughnut recipe card",
    ru: "Our thirteenth recipe — with a little honey and a little love!",
    en: "Наш тринадцатый рецепт — с капелькой мёда и капелькой любви!",
    a11y: "Карточка с рецептом пончиков вклеена на тринадцатую страницу голубой тетради; в углу — розовое пятнышко глазури и рисунок посыпки.",
    image: p("recipe-doughnuts"),
    steps: ["Мурзик вклеивает рецепт Лолы на тринадцатую страницу.", "Фургон из проката сдан, залог вернули.", "На жёлтом «Sunny» теперь висит голубая вывеска «Hope on Wheels».", "Впереди — дорога вдоль океана до самой Калифорнии."],
  },
};

const story: CityStory = {
  home: {
    name: "Место 17 на площадке",
    nameRu: "Spot 17 at the cart pod",
    image: p("home"),
    a11y: "Белый фургон из проката стоит на месте 17 среди разноцветных фудтраков; над площадкой натянуты гирлянды.",
  },
  keepsakeId: "recipe-doughnuts",
  welcomeRu: "Hello, Portland!",
  welcomeEn: "Привет, Портленд!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том в Портленде: мосты над рекой, зелёные парки и ряды разноцветных фургонов с едой.",
  departureImage: p("departure"),
  departureA11y: "Жёлтый фургончик «Sunny» с голубой вывеской «Hope on Wheels» выезжает с площадки; Лола и Кэндзи машут вслед.",
  finale: [
    {
      image: p("finale-1"),
      a11y: "В жёлтом фургоне уютно: табличка «Spot 17», сумка с ягодами, мерные стаканчики, розовая коробка для пончиков, наклейка с розой, звонок-пончик и рецепт пончиков.",
      lines: [
        { en: "Новые друзья-повара — и новый, то есть старый, жёлтый фургон." },
        { en: "В книге дороги тринадцатый рецепт: пончики Лолы." },
      ],
    },
    {
      image: p("finale-2"),
      a11y: "Длинная очередь у фургонов; Мурзик раздаёт пончики, Кэндзи — миски рамэна, Лола смеётся.",
      lines: [
        { ru: "Portland complete!", en: "Портленд пройден!" },
        { en: "7 / 7 уроков" },
        { ru: "A little honey, a few friends — and not too many sprinkles!", en: "Немного мёда, несколько друзей — и не слишком много посыпки!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Жёлтый фургончик «Sunny» с голубой вывеской «Hope on Wheels» выезжает с площадки; Лола и Кэндзи машут вслед.",
      lines: [
        { ru: "Goodbye, Portland! Thank you, Lola and Kenji!", en: "До свидания, Портленд! Спасибо, Лола и Кэндзи!" },
        { ru: "Next stop: Los Angeles!", en: "Следующая остановка: Лос-Анджелес!" },
      ],
    },
    {
      image: p("finale-4"),
      a11y: "Жёлтый фургон едет на юг по дороге вдоль океана; справа — скалы и волны.",
      lines: [{ ru: "Portland → Los Angeles", en: "Портленд → Лос-Анджелес" }],
    },
    {
      image: pic("en/losangeles/arrival"),
      a11y: "Мурзик и Том в Лос-Анджелесе: пальмы, солнце, широкие улицы с пробками и холмы вдали.",
      lines: [{ ru: "Hello, Los Angeles!", en: "Привет, Лос-Анджелес!" }],
    },
  ],
};

export const enPortland = {
  id: "en-portland",
  name: "Портленд",
  nameEn: "Portland",
  lessons: [portland1, portland2, portland3, portland4, portland5, portland6, portland7],
  story,
};
