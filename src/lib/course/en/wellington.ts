import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "../tr/make";

/* Веллингтон · «Повторение A1» · знакомство, погода, кафе, дорога, история Грейс в прошлом, планы, экзамен A1. Финал — кафе снова открыто. */

const p = (name: string) => pic(`en/wellington/${name}`);

const wellington1: Lesson = {
  id: "en-a1-wellington-1",
  level: "A1",
  cityId: "en-wellington",
  number: 1,
  title: "Nice to meet you, Grace — Приятно познакомиться, Грейс",
  minutes: 7,
  goals: ["Повторить знакомство и рассказ о себе", "Спросить о чужой жизни", "Сказать, как давно вы знакомы"],
  vocabNote: "Повторяем to be, have got и простое настоящее: I'm…, I've got…, I live…, I work… Best friend — «лучший друг, лучшая подруга».",
  vocab: [
    v("enwe1-1", "You must be Murzik!", "Ты, должно быть, Мурзик!", "Пожилая женщина с седыми кудрями и в ярком свитере открывает дверь.", "Послушать You must be Murzik", p("l1-1")),
    v("enwe1-2", "I've heard a lot about you.", "Я много о тебе слышала.", "Грейс держит письмо с лондонской маркой.", "Послушать I've heard a lot about you", p("l1-2")),
    v("enwe1-3", "Mrs Hope is my best friend.", "Миссис Хоуп — моя лучшая подруга.", "Старая фотография: две молодые девушки в фартуках смеются.", "Послушать Mrs Hope is my best friend", p("l1-3")),
    v("enwe1-4", "We met fifty years ago.", "Мы познакомились пятьдесят лет назад.", "Пожелтевшая фотография у моря.", "Послушать We met fifty years ago", p("l1-4")),
    v("enwe1-5", "I live by the sea.", "Я живу у моря.", "Деревянный домик на холме над гаванью.", "Послушать I live by the sea", p("l1-5")),
    v("enwe1-6", "I've got three grandchildren.", "У меня трое внуков.", "Фотографии трёх улыбающихся детей на холодильнике.", "Послушать I've got three grandchildren", p("l1-6")),
    v("enwe1-7", "Come in and sit down!", "Заходите и садитесь!", "Грейс показывает на диван с вязаными подушками.", "Послушать Come in and sit down", p("l1-7")),
  ],
  dialogue: {
    title: "Грейс",
    note: "Грейс — старейшая подруга миссис Хоуп. У неё последняя страница книги. Must be — «должно быть».",
    lines: [
      line("grace", "Hello! You must be Murzik! And you're Tom! I've heard a lot about you.", "Здравствуйте! Ты, должно быть, Мурзик! А ты — Том! Я много о вас слышала."),
      line("murzik", "Hello! Nice to meet you, Grace.", "Здравствуйте! Приятно познакомиться, Грейс."),
      line("grace", "Nice to meet you too. Mrs Hope is my best friend. We met fifty years ago!", "Мне тоже. Миссис Хоуп — моя лучшая подруга. Мы познакомились пятьдесят лет назад!"),
      line("tom", "Fifty years! Do you live here?", "Пятьдесят лет! Вы живёте здесь?"),
      line("grace", "Yes, I live by the sea. I've got three grandchildren. Come in and sit down!", "Да, я живу у моря. У меня трое внуков. Заходите и садитесь!"),
    ],
    gist: choice("enwe1-d1", "Сколько лет Грейс и миссис Хоуп дружат?", [
      ["Пятьдесят лет.", true],
      ["Пятнадцать лет.", false],
      ["Пять лет.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем: о себе и о других",
      paragraphs: [
        "To be: I'm Grace. She's my friend. Have got: I've got three grandchildren. Простое настоящее: I live by the sea. She lives in London.",
        "Вопросы: Where are you from? Have you got children? Do you live here? Does she work?",
      ],
      examples: [
        { ru: "I'm from Russia. I live in a big city. I've got a sister.", en: "Я из России. Живу в большом городе. У меня есть сестра." },
        { ru: "Does Grace live by the sea? — Yes, she does.", en: "Грейс живёт у моря? — Да." },
      ],
    },
  ],
  tasks: [
    choice("enwe1-t1", "Выбери правильное предложение.", [
      ["She lives by the sea.", true],
      ["She live by the sea.", false],
      ["She is live by the sea.", false],
    ], { skill: "grammar" }),
    listen("enwe1-t2", "Послушай. Что о себе рассказывает Грейс?", "I'm seventy-five. I've got three grandchildren. I live by the sea.", [
      ["Ей 75, у неё трое внуков, живёт у моря.", true],
      ["Ей 57, у неё три сына, живёт в Лондоне.", false],
      ["Ей 75, внуков нет, живёт в горах.", false],
    ]),
    match("enwe1-t3", "Соедини пары.", [
      ["best friend", "лучшая подруга"],
      ["grandchildren", "внуки"],
      ["by the sea", "у моря"],
      ["ago", "назад"],
    ], { skill: "words" }),
    missing("enwe1-t4", "Какой буквы не хватает? («лучший»)", "b", "st", "e", ["e", "u", "i"]),
    speak("enwe1-t5", "Tell me about yourself.", "My name is Alex. I'm from Russia. I live in a big city. I've got a brother.", "Меня зовут Алекс. Я из России. Живу в большом городе. У меня есть брат.", { help: "Расскажи вслух о себе: имя, страна, город, семья." }),
    choice("enwe1-t6", "Как сказать «Мы отлично провели время»?", [
      ["We had a great time.", true],
      ["We have a great time yesterday.", false],
      ["We haved a great time.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "chair-cushions",
    itemName: "Подушки для стульев",
    itemNameRu: "Chair cushions",
    ru: "Hooray! Chair cushions!",
    en: "Ура! Подушки для стульев!",
    a11y: "Стопка вязаных подушек для стульев всех цветов радуги лежит на кресле.",
    image: p("chair-cushions"),
    steps: ["Грейс показывает Мурзику его комнату.", "В углу — гора вязаных подушек.", "«I knit one every week. Take some for your café!» — «Я вяжу по одной каждую неделю. Возьми для своего кафе!»", "Мурзик выбирает самые яркие."],
    bridge: "Утром за окном так дует ветер, что дом скрипит.",
  },
};

const wellington2: Lesson = {
  id: "en-a1-wellington-2",
  level: "A1",
  cityId: "en-wellington",
  number: 2,
  title: "Windy Wellington — Ветреный Веллингтон",
  minutes: 7,
  goals: ["Повторить погоду", "Повторить одежду и Present Continuous", "Дать совет: You should…"],
  vocabNote: "Веллингтон называют самой ветреной столицей мира. Повторяем: It's windy. I'm wearing… You should take…",
  vocab: [
    v("enwe2-1", "It's so windy today!", "Сегодня такой ветер!", "Шарф Мурзика развевается, сам он держится за фонарный столб.", "Послушать It's so windy today", p("l2-1")),
    v("enwe2-2", "Hold on to your hat!", "Держи шляпу!", "Бейсболка Мурзика улетает в небо.", "Послушать Hold on to your hat", p("l2-2")),
    v("enwe2-3", "What are you wearing?", "Что на тебе надето?", "Грейс оглядывает Мурзика в дверях.", "Послушать What are you wearing today", p("l2-3")),
    v("enwe2-4", "You should take a warm jacket.", "Тебе стоит взять тёплую куртку.", "Грейс протягивает Мурзику куртку.", "Послушать You should take a warm jacket", p("l2-4")),
    v("enwe2-5", "It's raining and it's sunny!", "И дождь, и солнце!", "Над гаванью радуга, идёт солнечный дождик.", "Послушать It's raining and it's sunny", p("l2-5")),
    v("enwe2-6", "Four seasons in one day.", "Четыре времени года за один день.", "Небо разделено на четыре части: солнце, дождь, ветер, облака.", "Послушать Four seasons in one day", p("l2-6")),
    v("enwe2-7", "Look, a rainbow!", "Смотри, радуга!", "Яркая радуга над холмами и гаванью.", "Послушать Look, a rainbow", p("l2-7")),
  ],
  dialogue: {
    title: "Ветер",
    note: "Hold on to — «держаться за». Rainbow — «радуга».",
    lines: [
      line("murzik", "It's so windy today! My cap!", "Сегодня такой ветер! Моя кепка!"),
      line("grace", "Hold on to your hat, Murzik! What are you wearing? Only a scarf?", "Держи кепку, Мурзик! Что на тебе? Только шарф?"),
      line("murzik", "And my cap… but now it's flying away!", "И кепка… но она уже улетает!"),
      line("grace", "You should take a warm jacket. In Wellington we have four seasons in one day.", "Тебе стоит взять тёплую куртку. В Веллингтоне четыре времени года за один день."),
      line("tom", "Now it's raining and sunny! Look, a rainbow!", "А сейчас и дождь, и солнце! Смотрите, радуга!"),
    ],
    gist: choice("enwe2-d1", "Что Грейс советует Мурзику?", [
      ["Взять тёплую куртку.", true],
      ["Остаться дома.", false],
      ["Надеть сапоги.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем: погода, одежда, советы",
      paragraphs: [
        "Погода: It's windy. It's raining. Сейчас на мне: I'm wearing a coat. Совет: You should take an umbrella.",
        "Слишком и достаточно: It's too cold. Is your jacket warm enough?",
      ],
      examples: [
        { ru: "It's cold and windy. You should wear a hat.", en: "Холодно и ветрено. Надень шапку." },
        { ru: "Is it warm enough to swim? — No, it's too cold.", en: "Достаточно тепло, чтобы плавать? — Нет, слишком холодно." },
      ],
    },
  ],
  tasks: [
    choice("enwe2-t1", "Как сказать «Сейчас идёт дождь»?", [
      ["It's raining now.", true],
      ["It rains now.", false],
      ["It's rain now.", false],
    ], { skill: "grammar" }),
    listen("enwe2-t2", "Послушай. Какая погода?", "It's windy and cloudy, but it isn't raining.", [
      ["Ветрено и облачно, но без дождя.", true],
      ["Идёт дождь и снег.", false],
      ["Солнечно и тихо.", false],
    ]),
    match("enwe2-t3", "Соедини пары.", [
      ["windy", "ветрено"],
      ["rainbow", "радуга"],
      ["seasons", "времена года"],
      ["Hold on!", "Держись!"],
    ], { skill: "words" }),
    spell("enwe2-t4", "Собери из букв слово «радуга».", "rainbow"),
    speak("enwe2-t5", "What's the weather like and what are you wearing?", "It's cold and windy. I'm wearing a warm jacket.", "Холодно и ветрено. На мне тёплая куртка.", { help: "Расскажи вслух о погоде и о своей одежде." }),
    choice("enwe2-t6", "Как сказать «Мы познакомились пятьдесят лет назад»?", [
      ["We met fifty years ago.", true],
      ["We meet fifty years ago.", false],
      ["We met ago fifty years.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "windmill",
    itemName: "Вертушка-ветряк",
    itemNameRu: "Windmill",
    ru: "Hooray! A little windmill!",
    en: "Ура! Вертушка!",
    a11y: "Разноцветная бумажная вертушка на палочке быстро крутится на ветру у окна.",
    image: p("windmill"),
    steps: ["Внук Грейс дарит Мурзику бумажную вертушку.", "В Веллингтоне она крутится всегда!", "«It never stops here!» — «Здесь она никогда не останавливается!»", "Мурзик ставит её в горшок у окна."],
    bridge: "Грейс зовёт: «Let's have lunch at my café!»",
  },
};

const wellington3: Lesson = {
  id: "en-a1-wellington-3",
  level: "A1",
  cityId: "en-wellington",
  number: 3,
  title: "At Grace's café — В кафе у Грейс",
  minutes: 7,
  goals: ["Повторить заказ в кафе", "Повторить some / any, I'd like, Can I have…?", "Сказать, что любишь и что нет"],
  vocabNote: "Повторяем: What would you like? — I'd like… Can I have…? Have you got any…? Flat white — кофе с молоком, его придумали в Австралии и Новой Зеландии.",
  vocab: [
    v("enwe3-1", "I'd like a flat white, please.", "Мне флэт уайт, пожалуйста.", "Чашка кофе с бархатной молочной пенкой.", "Послушать I'd like a flat white, please", p("l3-1")),
    v("enwe3-2", "Have you got any cake?", "У вас есть торт?", "Мурзик заглядывает в витрину с пирожными.", "Послушать Have you got any cake", p("l3-2")),
    v("enwe3-3", "We've got pavlova.", "У нас есть павлова.", "Белый торт-безе со сливками и ягодами.", "Послушать We've got pavlova", p("l3-3")),
    v("enwe3-4", "Can I have a slice, please?", "Можно мне кусочек, пожалуйста?", "Грейс отрезает кусок павловы.", "Послушать Can I have a slice, please", p("l3-4")),
    v("enwe3-5", "I don't like coffee very much.", "Я не очень люблю кофе.", "Том отодвигает кофе и берёт чай.", "Послушать I don't like coffee very much", p("l3-5")),
    v("enwe3-6", "This is my café.", "Это моё кафе.", "Маленькое уютное кафе с видом на гавань.", "Послушать This is my café", p("l3-6")),
    v("enwe3-7", "It's just like Hope's Café.", "Оно совсем как кафе «Хоуп».", "Кафе Грейс: синяя дверь, колокольчик, столик у окна.", "Послушать It's just like Hope's Café", p("l3-7")),
  ],
  dialogue: {
    title: "Кафе Грейс",
    note: "Pavlova — торт из безе со сливками и фруктами, его любят в Новой Зеландии. Just like — «точно как».",
    lines: [
      line("grace", "Welcome to my café! What would you like?", "Добро пожаловать в моё кафе! Что будете?"),
      line("murzik", "I'd like a flat white, please. Have you got any cake?", "Мне флэт уайт, пожалуйста. У вас есть торт?"),
      line("grace", "We've got pavlova. It's Mrs Hope's recipe!", "Есть павлова. Это рецепт миссис Хоуп!"),
      line("murzik", "Can I have a slice, please?", "Можно мне кусочек, пожалуйста?"),
      line("tom", "And tea for me. I don't like coffee very much.", "А мне чай. Я не очень люблю кофе."),
      line("murzik", "Look, Tom! A blue door, a bell, a table by the window… It's just like Hope's Café!", "Смотри, Том! Синяя дверь, колокольчик, столик у окна… Совсем как кафе «Хоуп»!"),
    ],
    gist: choice("enwe3-d1", "На что похоже кафе Грейс?", [
      ["На кафе миссис Хоуп.", true],
      ["На закусочную Маркуса.", false],
      ["На кофейню Дэниела.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем: в кафе",
      paragraphs: [
        "Заказ: I'd like…, please. Can I have…? Вопросы: Have you got any…? Would you like…? Ответы: Yes, please. / No, thank you.",
        "Что любишь: I like tea. I don't like coffee very much. She loves cake.",
      ],
      examples: [
        { ru: "Can I have some water, please?", en: "Можно мне воды, пожалуйста?" },
        { ru: "Would you like some cake? — Yes, please!", en: "Хотите торта? — Да, пожалуйста!" },
      ],
    },
  ],
  tasks: [
    choice("enwe3-t1", "Как вежливо заказать чай?", [
      ["I'd like a tea, please.", true],
      ["I like a tea, please.", false],
      ["I want tea give.", false],
    ], { skill: "grammar" }),
    listen("enwe3-t2", "Послушай. Что заказывает посетитель?", "Can I have a coffee and a slice of pavlova, please?", [
      ["Кофе и кусочек павловы.", true],
      ["Чай и пирожок.", false],
      ["Только кофе.", false],
    ]),
    match("enwe3-t3", "Соедини пары.", [
      ["a slice", "кусочек"],
      ["just like", "точно как"],
      ["Have you got any…?", "У вас есть…?"],
      ["I'd like…", "Мне, пожалуйста…"],
    ], { skill: "words" }),
    missing("enwe3-t4", "Какой буквы не хватает? («кусочек»)", "sl", "ce", "i", ["i", "y", "ee"]),
    speak("enwe3-t5", "What would you like?", "I'd like a coffee and a cake, please.", "Мне кофе и пирожное, пожалуйста.", { help: "Закажи вслух в кафе." }),
    choice("enwe3-t6", "Как сказать «Держи шляпу!»?", [
      ["Hold on to your hat!", true],
      ["Hold your on hat!", false],
      ["You hold hat!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "chalkboard",
    itemName: "Грифельная доска для меню",
    itemNameRu: "Chalkboard",
    ru: "Hooray! A chalkboard!",
    en: "Ура! Грифельная доска!",
    a11y: "Маленькая грифельная доска в деревянной рамке, на ней мелом нарисованы чашка и торт.",
    image: p("chalkboard"),
    steps: ["Грейс показывает доску, где пишет меню.", "У неё в подсобке есть ещё одна.", "«For your menu!» — «Для твоего меню!»", "Мурзик рисует на ней мелом чашку и торт."],
    bridge: "После обеда Грейс зовёт: «Let's go up the hill. There's a cable car!»",
  },
};

const wellington4: Lesson = {
  id: "en-a1-wellington-4",
  level: "A1",
  cityId: "en-wellington",
  number: 4,
  title: "Up the hill — Наверх, на холм",
  minutes: 7,
  goals: ["Повторить дорогу и транспорт", "Повторить there is / there are", "Повторить предлоги места"],
  vocabNote: "Повторяем: How do we get to…? By cable car. Go straight on, turn left. There's a… Next to, opposite.",
  vocab: [
    v("enwe4-1", "How do we get to the top?", "Как нам подняться наверх?", "Мурзик смотрит на крутой холм над городом.", "Послушать How do we get to the top", p("l4-1")),
    v("enwe4-2", "by cable car", "на фуникулёре", "Красный вагончик фуникулёра едет в гору.", "Послушать by cable car", p("l4-2")),
    v("enwe4-3", "It takes five minutes.", "Это пять минут.", "Часы и вагончик на полпути вверх.", "Послушать It takes five minutes", p("l4-3")),
    v("enwe4-4", "There's a beautiful garden at the top.", "Наверху есть красивый сад.", "Ботанический сад с цветами и тропинками.", "Послушать There's a beautiful garden at the top", p("l4-4")),
    v("enwe4-5", "There are lots of flowers.", "Там много цветов.", "Розовые и белые розы на клумбах.", "Послушать There are lots of flowers", p("l4-5")),
    v("enwe4-6", "next to the old tree", "рядом со старым деревом", "Скамейка рядом с огромным старым деревом.", "Послушать next to the old tree", p("l4-6")),
    v("enwe4-7", "You can see the whole city!", "Отсюда виден весь город!", "Вид сверху на гавань, дома и корабли.", "Послушать You can see the whole city", p("l4-7")),
  ],
  dialogue: {
    title: "Фуникулёр",
    note: "Cable car в Веллингтоне — фуникулёр, вагончик на рельсах в гору. Bench — «скамейка».",
    lines: [
      line("murzik", "Grace, how do we get to the top of the hill?", "Грейс, как нам подняться на холм?"),
      line("grace", "By cable car! It takes five minutes. The station is opposite my café.", "На фуникулёре! Пять минут. Станция напротив моего кафе."),
      line("tom", "What's there at the top?", "А что там наверху?"),
      line("grace", "There's a beautiful garden. There are lots of flowers. And there's a bench next to the old tree.", "Там красивый сад. Много цветов. А рядом со старым деревом есть скамейка."),
      line("murzik", "Wow! You can see the whole city!", "Ого! Отсюда виден весь город!"),
      line("grace", "Yes. Mrs Hope and I sat on this bench fifty years ago.", "Да. Мы с миссис Хоуп сидели на этой скамейке пятьдесят лет назад."),
    ],
    gist: choice("enwe4-d1", "Где станция фуникулёра?", [
      ["Напротив кафе Грейс.", true],
      ["Рядом со старым деревом.", false],
      ["На вершине холма.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем: город и дорога",
      paragraphs: [
        "Что есть: There's a garden. There are lots of flowers. Где: next to, opposite, between, behind. Как добраться: by bus, by cable car, on foot. It takes five minutes.",
        "Можно: You can see the whole city. — Отсюда виден весь город.",
      ],
      examples: [
        { ru: "Is there a café at the top? — Yes, there is.", en: "Наверху есть кафе? — Да." },
        { ru: "Go straight on and turn right. It's opposite the station.", en: "Иди прямо и поверни направо. Это напротив станции." },
      ],
    },
  ],
  tasks: [
    choice("enwe4-t1", "Как сказать «Там много цветов»?", [
      ["There are lots of flowers.", true],
      ["There is lots of flowers.", false],
      ["It has lots of flower.", false],
    ], { skill: "grammar" }),
    listen("enwe4-t2", "Послушай. Как добраться до сада?", "Take the cable car. It takes five minutes. The garden is next to the station.", [
      ["На фуникулёре, пять минут, сад рядом со станцией.", true],
      ["Пешком, полчаса, сад за кафе.", false],
      ["На автобусе, пятнадцать минут.", false],
    ]),
    match("enwe4-t3", "Соедини пары.", [
      ["top", "вершина"],
      ["hill", "холм"],
      ["bench", "скамейка"],
      ["the whole city", "весь город"],
    ], { skill: "words" }),
    missing("enwe4-t4", "Какой буквы не хватает? («холм»)", "h", "ll", "i", ["i", "a", "y"]),
    speak("enwe4-t5", "How do you get to the centre of your city?", "I go by bus. It takes twenty minutes.", "На автобусе. Двадцать минут.", { help: "Расскажи вслух, как ты добираешься до центра." }),
    choice("enwe4-t6", "Как спросить «У вас есть торт?»", [
      ["Have you got any cake?", true],
      ["Have you got some cakes any?", false],
      ["You have cake any?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "hill-photo",
    itemName: "Фото с вершины холма",
    itemNameRu: "Photo from the hill",
    ru: "Hooray! A photo from the hill!",
    en: "Ура! Фото с холма!",
    a11y: "Фотография в рамке: Мурзик, Том и Грейс на скамейке под старым деревом, за ними гавань.",
    image: p("hill-photo"),
    steps: ["Том фотографирует всех на той самой скамейке.", "Мурзик, Том и Грейс, а за ними — весь город.", "«Like fifty years ago!» — смеётся Грейс. «Как пятьдесят лет назад!»", "Фото в рамке стоит на комоде."],
    bridge: "Вечером Грейс рассказывает историю, которую Мурзик ждал всё путешествие.",
  },
};

const wellington5: Lesson = {
  id: "en-a1-wellington-5",
  level: "A1",
  cityId: "en-wellington",
  number: 5,
  title: "Grace's story — История Грейс",
  minutes: 7,
  goals: ["Понять рассказ в прошлом", "Повторить was / were, -ed, went, met", "Узнать, почему закрылось кафе «Хоуп»"],
  vocabNote: "Повторяем прошедшее время: we met, we worked, she opened, he died, she closed, she sent. Sad — «грустный», alone — «один, одна».",
  vocab: [
    v("enwe5-1", "We were young cooks.", "Мы были молодыми поварами.", "Старое фото: две девушки в белых колпаках на кухне.", "Послушать We were young cooks", p("l5-1")),
    v("enwe5-2", "We worked in a big hotel.", "Мы работали в большом отеле.", "Старинная кухня большого отеля, много поваров.", "Послушать We worked in a big hotel", p("l5-2")),
    v("enwe5-3", "She opened a little café.", "Она открыла маленькое кафе.", "Молодая миссис Хоуп у новой синей двери.", "Послушать She opened a little café", p("l5-3")),
    v("enwe5-4", "Tom's grandfather died.", "Дедушка Тома умер.", "Фотография улыбающегося мужчины в рамке и цветок рядом.", "Послушать Tom's grandfather died", p("l5-4")),
    v("enwe5-5", "She was very sad and alone.", "Ей было очень грустно и одиноко.", "Миссис Хоуп одна за столиком в пустом кафе, за окном дождь.", "Послушать She was very sad and alone", p("l5-5")),
    v("enwe5-6", "She closed the café.", "Она закрыла кафе.", "Синяя дверь с табличкой, окна в пыли.", "Послушать She closed the café", p("l5-6")),
    v("enwe5-7", "She sent the pages to her friends.", "Она разослала страницы друзьям.", "Конверты с марками разных стран.", "Послушать She sent the pages to her friends", p("l5-7")),
  ],
  dialogue: {
    title: "Почему закрылось кафе",
    note: "Die — died (умер). Send — sent (отправил). Live — «жить» (здесь: «чтобы кафе жило»).",
    lines: [
      line("murzik", "Grace, why did Mrs Hope close her café?", "Грейс, почему миссис Хоуп закрыла своё кафе?"),
      line("grace", "We were young cooks. We worked in a big hotel. Then she opened a little café.", "Мы были молодыми поварами. Работали в большом отеле. Потом она открыла маленькое кафе."),
      line("grace", "It was a happy café. But then Tom's grandfather died. She was very sad and alone.", "Это было счастливое кафе. Но потом умер дедушка Тома. Ей было очень грустно и одиноко."),
      line("tom", "I was a little boy then. I remember.", "Я тогда был маленьким. Я помню."),
      line("grace", "She closed the café. And she sent the pages to her friends. She wanted the café to live in other places.", "Она закрыла кафе. И разослала страницы друзьям. Она хотела, чтобы кафе жило в других местах."),
      line("murzik", "And now the pages are coming back home…", "А теперь страницы возвращаются домой…"),
    ],
    gist: choice("enwe5-d1", "Почему миссис Хоуп закрыла кафе?", [
      ["Умер дедушка Тома, ей было грустно и одиноко.", true],
      ["Кафе было слишком маленьким.", false],
      ["Она переехала в Новую Зеландию.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем: прошедшее время",
      paragraphs: [
        "Was / were: We were young. She was sad. Правильные: worked, opened, closed, died, wanted. Неправильные: met, went, sent, had.",
        "Вопрос: Why did she close the café? Did she open it again? — No, she didn't.",
      ],
      examples: [
        { ru: "They met in London and worked together.", en: "Они познакомились в Лондоне и работали вместе." },
        { ru: "Why did you go to Sydney? — We wanted to find a page.", en: "Зачем вы поехали в Сидней? — Мы хотели найти страницу." },
      ],
    },
  ],
  tasks: [
    choice("enwe5-t1", "Как спросить «Почему она закрыла кафе?»", [
      ["Why did she close the café?", true],
      ["Why did she closed the café?", false],
      ["Why she closed the café?", false],
    ], { skill: "grammar" }),
    listen("enwe5-t2", "Послушай. Что сделала миссис Хоуп?", "She closed the café and sent the pages to her friends.", [
      ["Закрыла кафе и разослала страницы друзьям.", true],
      ["Открыла кафе и позвала друзей.", false],
      ["Продала кафе и уехала.", false],
    ]),
    match("enwe5-t3", "Соедини пары.", [
      ["open", "opened"],
      ["close", "closed"],
      ["send", "sent"],
      ["meet", "met"],
    ], { skill: "words" }),
    spell("enwe5-t4", "Собери из букв слово «грустный».", "sad", ["e"]),
    speak("enwe5-t5", "Tell me about your grandparents.", "My grandparents lived in a small town. They worked in a school.", "Мои бабушка и дедушка жили в маленьком городе. Работали в школе.", { help: "Расскажи вслух о бабушке и дедушке в прошедшем времени." }),
    choice("enwe5-t6", "Как сказать «Наверху есть красивый сад»?", [
      ["There's a beautiful garden at the top.", true],
      ["It's a garden beautiful at top.", false],
      ["There are a beautiful garden at the top.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "old-photo",
    itemName: "Старая фотография миссис Хоуп и Грейс",
    itemNameRu: "Old photo",
    ru: "Hooray! An old photo!",
    en: "Ура! Старая фотография!",
    a11y: "Чёрно-белая фотография: две молодые девушки в фартуках смеются у синей двери маленького кафе.",
    image: p("old-photo"),
    steps: ["Грейс достаёт старую чёрно-белую фотографию.", "Две девушки в фартуках у синей двери.", "«The first day of Hope's Café.» — «Первый день кафе „Хоуп“».", "Мурзик бережно кладёт фото в книгу рецептов."],
    bridge: "Грейс встаёт: «And now… the last page».",
  },
};

const wellington6: Lesson = {
  id: "en-a1-wellington-6",
  level: "A1",
  cityId: "en-wellington",
  number: 6,
  title: "The last page — Последняя страница",
  minutes: 7,
  goals: ["Понять короткую записку", "Повторить планы: going to", "Рассказать о своей мечте"],
  vocabNote: "Повторяем going to: I'm going to open a café. Name — «назвать», owner — «хозяин». Every café is like its owner — «Каждое кафе похоже на своего хозяина».",
  vocab: [
    v("enwe6-1", "There's no recipe.", "Здесь нет рецепта.", "Последняя страница: только несколько строчек от руки.", "Послушать There's no recipe", p("l6-1")),
    v("enwe6-2", "Name it yourself.", "Назови его сам.", "Крупно: строчка аккуратным почерком.", "Послушать Name it yourself", p("l6-2")),
    v("enwe6-3", "Every café is like its owner.", "Каждое кафе похоже на своего хозяина.", "Мурзик задумчиво смотрит на страницу.", "Послушать Every café is like its owner", p("l6-3")),
    v("enwe6-4", "I'm going to open a café.", "Я открою кафе.", "Мурзик в фартуке у синей двери.", "Послушать I'm going to open a café", p("l6-4")),
    v("enwe6-5", "What are you going to call it?", "Как ты его назовёшь?", "Грейс с любопытством наклоняется к Мурзику.", "Послушать What are you going to call it", p("l6-5")),
    v("enwe6-6", "I don't know yet.", "Пока не знаю.", "Мурзик пожимает плечами и улыбается.", "Послушать I don't know yet", p("l6-6")),
    v("enwe6-7", "Let's go home!", "Поехали домой!", "Мурзик и Том обнимаются с книгой в лапах.", "Послушать Let's go home", p("l6-7")),
  ],
  dialogue: {
    title: "Четырнадцатая страница",
    note: "Yet — «ещё, пока»: I don't know yet — «пока не знаю». Home — «дом», здесь — Лондон.",
    lines: [
      line("grace", "This is the last page. There's no recipe.", "Это последняя страница. На ней нет рецепта."),
      line("murzik", "No recipe? What does it say?", "Нет рецепта? А что там написано?"),
      line("grace", "Read it, Murzik.", "Прочитай, Мурзик."),
      line("murzik", "\"Name it yourself. Every café is like its owner.\"", "«Назови его сам. Каждое кафе похоже на своего хозяина»."),
      line("grace", "So, what are you going to call your café?", "Итак, как ты назовёшь своё кафе?"),
      line("murzik", "I don't know yet… But I know one thing. I'm going to open a café!", "Пока не знаю… Но одно я знаю точно. Я открою кафе!"),
      line("tom", "Then let's go home! To London!", "Тогда поехали домой! В Лондон!"),
    ],
    gist: choice("enwe6-d1", "Что написано на последней странице?", [
      ["Назови кафе сам: каждое кафе похоже на своего хозяина.", true],
      ["Рецепт торта павлова.", false],
      ["Адрес нового кафе.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем: планы и мечты",
      paragraphs: [
        "Планы: I'm going to open a café. We're going to fly to London. Вопрос: What are you going to do? What are you going to call it?",
        "Мечты: I want to be a cook. I'd like to have a café.",
      ],
      examples: [
        { ru: "I'm going to learn English next year.", en: "В следующем году я буду учить английский." },
        { ru: "What are you going to do tomorrow?", en: "Что ты будешь делать завтра?" },
      ],
    },
  ],
  tasks: [
    choice("enwe6-t1", "Как сказать «Мы полетим в Лондон»?", [
      ["We're going to fly to London.", true],
      ["We going to fly to London.", false],
      ["We're go to fly to London.", false],
    ], { skill: "grammar" }),
    listen("enwe6-t2", "Послушай. Что он собирается сделать?", "I'm going to open a little café by the sea.", [
      ["Открыть маленькое кафе у моря.", true],
      ["Поехать на море в отпуск.", false],
      ["Закрыть своё кафе.", false],
    ]),
    match("enwe6-t3", "Соедини пары.", [
      ["owner", "хозяин"],
      ["name", "назвать"],
      ["yet", "пока, ещё"],
      ["the last page", "последняя страница"],
    ], { skill: "words" }),
    missing("enwe6-t4", "Какой буквы не хватает? («хозяин»)", "own", "r", "e", ["e", "a", "o"]),
    speak("enwe6-t5", "What are you going to do next year?", "I'm going to travel and speak English!", "Я буду путешествовать и говорить по-английски!", { help: "Расскажи вслух о своих планах." }),
    choice("enwe6-t6", "Как спросить «Почему кафе закрылось?»", [
      ["Why did the café close?", true],
      ["Why did the café closed?", false],
      ["Why the café closed did?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fern",
    itemName: "Папоротник в горшке",
    itemNameRu: "Fern",
    ru: "Hooray! A fern!",
    en: "Ура! Папоротник!",
    a11y: "Пышный зелёный папоротник в глиняном горшке стоит на полу у окна.",
    image: p("fern"),
    steps: ["Грейс выкапывает в саду маленький папоротник.", "«The fern is the symbol of New Zealand.» — «Папоротник — символ Новой Зеландии».", "«For your new beginning!» — «Для твоего нового начала!»", "Мурзик ставит его у окна."],
    bridge: "Завтра — домой. Но сначала — экзамен A1!",
  },
};

const wellington7: Lesson = {
  id: "en-a1-wellington-7",
  level: "A1",
  cityId: "en-wellington",
  number: 7,
  title: "Экзамен A1",
  minutes: 9,
  goals: ["Пройти экзамен A1", "Вспомнить всё путешествие", "Отпраздновать конец уровня"],
  vocabNote: "Exam — «экзамен». Congratulations! — «Поздравляю!» You passed! — «Ты сдал!» Level — «уровень».",
  vocab: [
    v("enwe7-1", "the A1 exam", "экзамен A1", "Мурзик за столом с карандашом, на листе крупно: A1.", "Послушать the A1 exam", p("l7-1")),
    v("enwe7-2", "Congratulations!", "Поздравляю!", "Том и Грейс аплодируют.", "Послушать Congratulations", p("l7-2")),
    v("enwe7-3", "You passed!", "Ты сдал!", "Мурзик поднимает над головой лист с большой звездой.", "Послушать You passed", p("l7-3")),
    v("enwe7-4", "We're proud of you!", "Мы тобой гордимся!", "Грейс обнимает Мурзика.", "Послушать We're proud of you", p("l7-4")),
    v("enwe7-5", "an old clock", "старые часы", "Большие старые настенные часы в деревянном корпусе.", "Послушать an old clock", p("l7-5")),
    v("enwe7-6", "It's from Hope's Café.", "Они из кафе «Хоуп».", "Грейс снимает часы со стены.", "Послушать It's from Hope's Café", p("l7-6")),
    v("enwe7-7", "It's time to go home.", "Пора домой.", "Часы показывают ровно двенадцать, рядом стоит собранный чемодан.", "Послушать It's time to go home", p("l7-7")),
  ],
  dialogue: {
    title: "Часы",
    note: "Gave — «подарила» (прошлое от give). Stopped — «остановились». Again — «снова».",
    lines: [
      line("tom", "Congratulations, Murzik! You passed the A1 exam!", "Поздравляю, Мурзик! Ты сдал экзамен A1!"),
      line("grace", "We're proud of you! And this is for your café.", "Мы тобой гордимся! А это — для твоего кафе."),
      line("murzik", "An old clock!", "Старые часы!"),
      line("grace", "It's from Hope's Café. Mrs Hope gave it to me. It stopped many years ago.", "Они из кафе «Хоуп». Миссис Хоуп подарила их мне. Они остановились много лет назад."),
      line("murzik", "Look! It's working again! Tick-tock!", "Смотрите! Они снова идут! Тик-так!"),
      line("tom", "It's time to go home.", "Пора домой."),
    ],
    gist: choice("enwe7-d1", "Что случилось с часами?", [
      ["Они снова пошли.", true],
      ["Они разбились.", false],
      ["Их забыли в кафе.", false],
    ]),
  },
  grammar: [
    {
      title: "Весь A1 одним взглядом",
      paragraphs: [
        "To be: I'm, she's, they're; was, were. Have got: I've got. Настоящее: I work, she works, Do you…? Does he…? Сейчас: I'm working. Прошлое: I worked, I went, Did you…? Планы: I'm going to…",
        "Can — умею, можно. Should — стоит. There is / there are — есть. A / an / the, this / that, some / any.",
      ],
      examples: [
        { ru: "I'm Murzik. I'm from Russia. I went to fourteen cities. Now I'm going to open a café!", en: "Я Мурзик. Я из России. Я побывал в четырнадцати городах. Теперь я открою кафе!" },
        { ru: "I can speak English now!", en: "Теперь я говорю по-английски!" },
      ],
    },
  ],
  tasks: [
    listen("enwe7-t1", "Аудиоэкзамен. О чём рассказывает Мурзик?", "I started in London. I visited fourteen cities and met lots of friends. I found all the pages. Now I'm going to open a café!", [
      ["Он начал в Лондоне, побывал в 14 городах, нашёл все страницы и откроет кафе.", true],
      ["Он живёт в Веллингтоне и не хочет никуда ехать.", false],
      ["Он потерял книгу и вернулся в Париж.", false],
    ]),
    choice("enwe7-t2", "Экзамен. Выбери правильное предложение.", [
      ["Yesterday I went to the beach and saw a whale.", true],
      ["Yesterday I go to the beach and see a whale.", false],
      ["Yesterday I goed to the beach and seed a whale.", false],
    ], { skill: "grammar" }),
    match("enwe7-t3", "Экзамен. Соедини пары.", [
      ["I work", "я работаю"],
      ["I'm working", "я сейчас работаю"],
      ["I worked", "я работал"],
      ["I'm going to work", "я буду работать"],
    ], { skill: "words" }),
    spell("enwe7-t4", "Экзамен. Собери из букв слово «часы».", "clock"),
    speak("enwe7-t5", "Tell me about you and your English.", "My name is Alex. I'm from Russia. I can speak English now!", "Меня зовут Алекс. Я из России. Теперь я говорю по-английски!", { help: "Расскажи вслух о себе по-английски." }),
    script("enwe7-t6", "Экзамен A1. Вспомни всё путешествие и закончи разговоры.", [
      { speaker: "Миссис Хоуп", text: "Hello! What's your name?" },
      { speaker: "Ты", answer: "My name is Alex. Nice to meet you.", options: ["My name is Alex. Nice to meet you.", "I Alex. Nice meet you.", "My name Alex is."] },
      { speaker: "Маркус", text: "What would you like?" },
      { speaker: "Ты", answer: "I'd like a coffee, please.", options: ["I'd like a coffee, please.", "I like coffee give.", "I'd likes a coffee."] },
      { speaker: "Тони", text: "Where's the station?" },
      { speaker: "Ты", answer: "It's next to the bank.", options: ["It's next to the bank.", "It's next the bank.", "There is next bank."] },
      { speaker: "Хлоя", text: "What did you do yesterday?" },
      { speaker: "Ты", answer: "I went to the beach.", options: ["I went to the beach.", "I go to the beach yesterday.", "I goed to the beach."] },
      { speaker: "Грейс", text: "What are you going to do now?" },
      { speaker: "Ты", answer: "I'm going to open a café!", options: ["I'm going to open a café!", "I going open a café!", "I'm go to open a café!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "old-clock",
    itemName: "Старые часы из кафе «Хоуп»",
    itemNameRu: "Old clock",
    ru: "Hooray! The old clock!",
    en: "Ура! Старые часы!",
    a11y: "Большие старинные настенные часы в деревянном корпусе с маятником. Маятник снова качается.",
    image: p("old-clock"),
    steps: ["Грейс снимает со стены старые часы.", "Мурзик заводит их — и маятник начинает качаться.", "«They waited for you,» — говорит Грейс. «Они ждали тебя».", "Часы — самая главная вещь Веллингтона."],
    bridge: "Уровень A1 пройден! Пора домой — в Лондон, к синей двери.",
  },
};

const story: CityStory = {
  home: {
    name: "Комната в доме Грейс",
    nameRu: "Murzik's room in Wellington",
    image: p("home"),
    a11y: "Пустая комната в деревянном доме на холме. В окне гавань, корабли и зелёные холмы. Ветер стучит в стекло. Посередине чемодан Мурзика.",
  },
  keepsakeId: "old-clock",
  welcomeRu: "Hello, Wellington!",
  welcomeEn: "Привет, Веллингтон!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том в Веллингтоне: разноцветные деревянные дома на зелёных холмах над гаванью, сильный ветер.",
  departureImage: p("departure"),
  departureA11y: "Грейс в ярком свитере машет на прощание в аэропорту, ветер развевает её кудри.",
  finale: [
    {
      image: p("book"),
      a11y: "Крупно: книга рецептов миссис Хоуп. Все страницы на месте, между ними старая фотография двух девушек у синей двери.",
      lines: [
        { en: "Четырнадцать страниц. Книга миссис Хоуп снова целая." },
        { ru: "Name it yourself. Every café is like its owner.", en: "Назови его сам. Каждое кафе похоже на своего хозяина." },
      ],
    },
    {
      image: p("suitcase"),
      a11y: "Раскрытый чемодан Мурзика: колокольчик, чайник в цветочек, подставка для пирожных, клетчатый плед, глиняные кружки, неоновая вывеска-чашка, вешалка, форма для пиццы, проигрыватель, кофемашина, кленовый сироп, скатерть, зонт от солнца и старые часы.",
      lines: [
        { en: "Четырнадцать городов. Четырнадцать вещей для кафе. И книга рецептов." },
        { ru: "Wellington complete! Level A1 complete!", en: "Веллингтон пройден! Уровень A1 пройден!" },
        { en: "7 / 7 уроков. Четырнадцать городов!" },
      ],
    },
    {
      image: img.flight,
      a11y: "Самолёт летит через весь мир обратно в Лондон.",
      lines: [{ ru: "Wellington → London", en: "Веллингтон → Лондон" }],
    },
    {
      image: pic("en/london/key"),
      a11y: "Миссис Хоуп у синей двери своего старого кафе протягивает Мурзику старинный ключ. Том стоит рядом с фотоаппаратом.",
      lines: [
        { ru: "Welcome home, dear.", en: "С возвращением домой, дорогой." },
        { en: "Миссис Хоуп протягивает Мурзику старый ключ от синей двери." },
        { ru: "It's yours now.", en: "Теперь кафе твоё." },
      ],
    },
    {
      image: pic("en/london/opening"),
      a11y: "Кафе за синей дверью снова открыто: колокольчик над дверью, неоновая чашка в окне, часы на стене, клетчатый плед на кресле. Внутри Прия, миссис Грин, семья Макдональд, Шон со скрипкой, Маркус, Рози, Эмили, Тони, Бернадетт, Дэниел, доктор Ли и Сэм, семья Чен, Хлоя и Грейс. Миссис Хоуп сидит за столиком у окна.",
      lines: [
        { en: "Дзинь! — звенит колокольчик. Кафе за синей дверью снова открыто." },
        { en: "Приходят все: Прия, миссис Грин, Макдональды, Шон, Маркус, Рози, Эмили, Тони, Бернадетт, Дэниел, доктор Ли и Сэм, семья Чен, Хлоя и Грейс." },
        { en: "Мурзик пишет мелом на доске название. Он оставил старое — потому что это кафе всегда было про надежду." },
        { ru: "Hope's Café is open again!", en: "Кафе «Хоуп» снова открыто!" },
      ],
    },
    {
      image: pic("en/london/opening-hope"),
      a11y: "Миссис Хоуп сидит за столиком у окна с чашкой чая, улыбается и вытирает слезу. Мурзик в фартуке ставит перед ней тарелку со сконами.",
      lines: [
        { en: "Первую чашку чая Мурзик приносит миссис Хоуп. Сначала улыбка — потом чай." },
        { ru: "Welcome to Hope's Café! What would you like?", en: "Добро пожаловать в кафе «Хоуп»! Что вам принести?" },
        { ru: "A2 begins!", en: "Начинается A2!" },
      ],
    },
  ],
};

export const enWellington = {
  id: "en-wellington",
  name: "Веллингтон",
  nameEn: "Wellington",
  lessons: [wellington1, wellington2, wellington3, wellington4, wellington5, wellington6, wellington7],
  story,
};
