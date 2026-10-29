import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "../tr/make";

/* Чикаго · «Как пройти?» · there is / there are, предлоги места, дорога, транспорт, in / on / under, повелительное наклонение. */

const p = (name: string) => pic(`en/chicago/${name}`);

const chicago1: Lesson = {
  id: "en-a1-chicago-1",
  level: "A1",
  cityId: "en-chicago",
  number: 1,
  title: "There's a park — Здесь есть парк",
  minutes: 7,
  goals: ["Сказать, что где-то есть: there is, there are", "Спросить: Is there a… near here?", "Сказать, чего нет: there isn't"],
  vocabNote: "There is (there's) — «есть, находится» об одной вещи, there are — о нескольких. Это главный способ сказать, что где-то что-то есть.",
  vocab: [
    v("ench1-1", "There's a park near here.", "Здесь рядом есть парк.", "Большой зелёный парк у озера.", "Послушать There's a park near here", p("l1-1")),
    v("ench1-2", "There are two cafés.", "Здесь два кафе.", "Два маленьких кафе на одной улице.", "Послушать There are two cafés", p("l1-2")),
    v("ench1-3", "Is there a bank near here?", "Здесь рядом есть банк?", "Мурзик с кошельком оглядывается на улице.", "Послушать Is there a bank near here", p("l1-3")),
    v("ench1-4", "Yes, there is.", "Да, есть.", "Таксист кивает и показывает рукой.", "Послушать Yes, there is", p("l1-4")),
    v("ench1-5", "There isn't a subway here.", "Здесь нет метро.", "Улица без входа в метро, только автобусная остановка.", "Послушать There isn't a subway here", p("l1-5")),
    v("ench1-6", "Are there any shops?", "Здесь есть магазины?", "Мурзик смотрит на длинную улицу.", "Послушать Are there any shops", p("l1-6")),
    v("ench1-7", "There's a big lake.", "Тут большое озеро.", "Огромное синее озеро, как море.", "Послушать There's a big lake", p("l1-7")),
  ],
  dialogue: {
    title: "Тони",
    note: "Тони — таксист, весёлый любитель пиццы. Neighborhood [нэ́йбэхуд] — «район» (американское написание).",
    lines: [
      line("tony", "Hey, Murzik! Welcome to Chicago! I'm Tony. Get in!", "Эй, Мурзик! Добро пожаловать в Чикаго! Я Тони. Садись!"),
      line("murzik", "Hello, Tony! What's in your neighborhood?", "Привет, Тони! Что есть в твоём районе?"),
      line("tony", "There's a big park and there are lots of cafés.", "Есть большой парк и много кафе."),
      line("tom", "Is there a bank near here?", "А банк рядом есть?"),
      line("tony", "Yes, there is. There's a bank on the corner.", "Да, есть. Банк на углу."),
      line("murzik", "And is there a lake?", "А озеро есть?"),
      line("tony", "Ha! There's a lake — like a sea! Lake Michigan!", "Ха! Есть озеро — как море! Озеро Мичиган!"),
    ],
    gist: choice("ench1-d1", "Что есть в районе Тони?", [
      ["Большой парк, много кафе и банк.", true],
      ["Только метро.", false],
      ["Ничего, только дома.", false],
    ]),
  },
  grammar: [
    {
      title: "There is / there are",
      paragraphs: [
        "Чтобы сказать, что где-то что-то есть: There's a park. (одно) There are two cafés. (много)",
        "Вопрос: Is there a bank? Are there any shops? Ответ: Yes, there is / are. No, there isn't / aren't.",
      ],
      examples: [
        { ru: "There's a café on the corner.", en: "На углу есть кафе." },
        { ru: "Are there any parks? — Yes, there are.", en: "Здесь есть парки? — Да, есть." },
      ],
    },
  ],
  tasks: [
    choice("ench1-t1", "Как сказать «Здесь три магазина»?", [
      ["There are three shops.", true],
      ["There is three shops.", false],
      ["It has three shops.", false],
    ], { skill: "grammar" }),
    listen("ench1-t2", "Послушай. Что есть рядом?", "There's a hospital near here.", [
      ["Больница.", true],
      ["Банк.", false],
      ["Парк.", false],
    ]),
    match("ench1-t3", "Соедини пары.", [
      ["park", "парк"],
      ["bank", "банк"],
      ["lake", "озеро"],
      ["near here", "рядом"],
    ], { skill: "words" }),
    missing("ench1-t4", "Какой буквы не хватает? («там есть»)", "T", "ere is", "h", ["h", "e", "r"]),
    speak("ench1-t5", "What's there near your home?", "There's a park and there are two shops.", "Есть парк и два магазина.", { help: "Расскажи вслух, что есть рядом с твоим домом." }),
    choice("ench1-t6", "Как сказать «Сейчас идёт дождь»?", [
      ["It's raining.", true],
      ["It rains.", false],
      ["There is rain.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "city-map",
    itemName: "Карта Чикаго",
    itemNameRu: "City map",
    ru: "Hooray! A city map!",
    en: "Ура! Карта города!",
    a11y: "Большая карта Чикаго висит на стене. Озеро Мичиган синее, парки зелёные, красным кружком обведён дом Мурзика.",
    image: p("city-map"),
    steps: ["Тони привозит Мурзика к дому с видом на озеро.", "Он достаёт из бардачка карту города.", "«Your first Chicago map!» — «Твоя первая карта Чикаго!»", "Мурзик обводит свой дом красным кружком."],
    bridge: "Утром Мурзик хочет сам найти вокзал. Но где он?",
  },
};

const chicago2: Lesson = {
  id: "en-a1-chicago-2",
  level: "A1",
  cityId: "en-chicago",
  number: 2,
  title: "Where is the station? — Где вокзал?",
  minutes: 7,
  goals: ["Сказать, где что находится", "Сказать «рядом», «напротив», «между»", "Сказать «на углу»"],
  vocabNote: "Next to — рядом с, opposite — напротив, between — между, behind — за, in front of — перед, on the corner — на углу.",
  vocab: [
    v("ench2-1", "Where is the station?", "Где вокзал?", "Мурзик с чемоданом стоит на перекрёстке.", "Послушать Where is the station", p("l2-1")),
    v("ench2-2", "It's next to the bank.", "Он рядом с банком.", "Вокзал и банк стоят рядом.", "Послушать It's next to the bank", p("l2-2")),
    v("ench2-3", "It's opposite the park.", "Он напротив парка.", "Вокзал через дорогу от парка.", "Послушать It's opposite the park", p("l2-3")),
    v("ench2-4", "between the hotel and the museum", "между отелем и музеем", "Маленький магазин между большим отелем и музеем.", "Послушать between the hotel and the museum", p("l2-4")),
    v("ench2-5", "behind the church", "за церковью", "Дом за старой церковью.", "Послушать behind the church", p("l2-5")),
    v("ench2-6", "in front of the hotel", "перед отелем", "Такси стоит перед отелем.", "Послушать in front of the hotel", p("l2-6")),
    v("ench2-7", "on the corner", "на углу", "Маленькое кафе на углу двух улиц.", "Послушать on the corner", p("l2-7")),
  ],
  dialogue: {
    title: "Где что",
    note: "Museum [мьюзи́эм] — «музей». Pizza place — «пиццерия».",
    lines: [
      line("murzik", "Excuse me, where is the station?", "Простите, где вокзал?"),
      line("passerby", "It's next to the bank, opposite the park.", "Рядом с банком, напротив парка."),
      line("murzik", "Thank you! And where is the museum?", "Спасибо! А где музей?"),
      line("passerby", "It's between the hotel and the church.", "Между отелем и церковью."),
      line("tony", "Murzik! I'm here, in front of the hotel! And my pizza place is on the corner!", "Мурзик! Я здесь, перед отелем! А моя любимая пиццерия — на углу!"),
    ],
    gist: choice("ench2-d1", "Где вокзал?", [
      ["Рядом с банком, напротив парка.", true],
      ["Между отелем и церковью.", false],
      ["На углу, у пиццерии.", false],
    ]),
  },
  grammar: [
    {
      title: "Где: предлоги места",
      paragraphs: [
        "Next to the bank — рядом с банком. Opposite the park — напротив парка. Between A and B — между A и B. Behind — за, in front of — перед.",
        "Обычно перед местом стоит the: the bank, the park — тот самый, который здесь есть.",
      ],
      examples: [
        { ru: "The café is opposite the station.", en: "Кафе напротив вокзала." },
        { ru: "The bank is between the hotel and the shop.", en: "Банк между отелем и магазином." },
      ],
    },
  ],
  tasks: [
    choice("ench2-t1", "Как сказать «напротив музея»?", [
      ["opposite the museum", true],
      ["opposite of museum", false],
      ["in opposite the museum", false],
    ], { skill: "grammar" }),
    listen("ench2-t2", "Послушай. Где кафе?", "The café is behind the hotel.", [
      ["За отелем.", true],
      ["Перед отелем.", false],
      ["Рядом с отелем.", false],
    ]),
    match("ench2-t3", "Соедини пары.", [
      ["next to", "рядом с"],
      ["opposite", "напротив"],
      ["between", "между"],
      ["behind", "за"],
    ], { skill: "words" }),
    missing("ench2-t4", "Какой буквы не хватает? («между»)", "betw", "en", "e", ["e", "i", "a"]),
    speak("ench2-t5", "Where is your favourite café?", "It's on the corner, opposite the park.", "На углу, напротив парка.", { help: "Скажи вслух, где находится твоё любимое место." }),
    choice("ench2-t6", "Как спросить «Здесь есть банк?»", [
      ["Is there a bank near here?", true],
      ["There is a bank near here?", false],
      ["Is a bank there here?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "pass",
    itemName: "Проездной",
    itemNameRu: "Travel card",
    ru: "Hooray! A travel card!",
    en: "Ура! Проездной!",
    a11y: "Синяя пластиковая карточка-проездной на шнурке висит на крючке у двери.",
    image: p("pass"),
    steps: ["На вокзале Тони покупает Мурзику проездной.", "«Buses, trains — everything!» — «Автобусы, поезда — всё!»", "Мурзик вешает его на шнурке на шею.", "Теперь он может ездить по всему городу."],
    bridge: "Мурзик хочет дойти до пиццерии Тони сам. Тони объясняет дорогу.",
  },
};

const chicago3: Lesson = {
  id: "en-a1-chicago-3",
  level: "A1",
  cityId: "en-chicago",
  number: 3,
  title: "Turn left! — Поверни налево!",
  minutes: 7,
  goals: ["Объяснить дорогу", "Понять: go straight on, turn left, turn right", "Сказать «слева», «справа»"],
  vocabNote: "Чтобы объяснить дорогу, глагол ставят в начало: Go straight on. Turn left. Это повелительное наклонение — так в английском дают указания.",
  vocab: [
    v("ench3-1", "Go straight on.", "Иди прямо.", "Стрелка прямо по длинной улице.", "Послушать Go straight on", p("l3-1")),
    v("ench3-2", "Turn left.", "Поверни налево.", "Стрелка поворачивает налево.", "Послушать Turn left", p("l3-2")),
    v("ench3-3", "Turn right.", "Поверни направо.", "Стрелка поворачивает направо.", "Послушать Turn right", p("l3-3")),
    v("ench3-4", "Cross the street.", "Перейди улицу.", "Мурзик переходит улицу по зебре.", "Послушать Cross the street", p("l3-4")),
    v("ench3-5", "It's on your left.", "Это слева от тебя.", "Пиццерия слева от Мурзика.", "Послушать It's on your left", p("l3-5")),
    v("ench3-6", "It's on your right.", "Это справа от тебя.", "Парк справа от Мурзика.", "Послушать It's on your right", p("l3-6")),
    v("ench3-7", "at the traffic lights", "на светофоре", "Светофор на перекрёстке, горит зелёный.", "Послушать at the traffic lights", p("l3-7")),
  ],
  dialogue: {
    title: "Дорога к пиццерии",
    note: "Then — «потом». Easy — «легко».",
    lines: [
      line("murzik", "Tony, how do I get to your pizza place?", "Тони, как дойти до твоей пиццерии?"),
      line("tony", "Easy! Go straight on. At the traffic lights, turn left.", "Легко! Иди прямо. На светофоре поверни налево."),
      line("murzik", "Turn left at the traffic lights. Then?", "На светофоре налево. А потом?"),
      line("tony", "Cross the street and turn right. It's on your left, next to the bank.", "Перейди улицу и поверни направо. Она будет слева, рядом с банком."),
      line("murzik", "Straight on, left, cross, right… on my left! Got it!", "Прямо, налево, перейти, направо… слева! Понял!"),
    ],
    gist: choice("ench3-d1", "Где пиццерия?", [
      ["Слева, рядом с банком.", true],
      ["Справа, напротив парка.", false],
      ["Прямо, у озера.", false],
    ]),
  },
  grammar: [
    {
      title: "Указания: Turn left!",
      paragraphs: [
        "Чтобы сказать, что делать, начинают прямо с глагола: Go! Turn left! Cross the street! Это вежливо, если добавить please или говорить дружелюбным тоном.",
        "«Не делай» — Don't + глагол: Don't turn right! Don't cross here!",
      ],
      examples: [
        { ru: "Go straight on and turn right.", en: "Иди прямо и поверни направо." },
        { ru: "Don't cross the street here!", en: "Не переходи улицу здесь!" },
      ],
    },
  ],
  tasks: [
    choice("ench3-t1", "Как сказать «Не поворачивай налево!»?", [
      ["Don't turn left!", true],
      ["No turn left!", false],
      ["Not turn left!", false],
    ], { skill: "grammar" }),
    listen("ench3-t2", "Послушай. Куда идти?", "Go straight on and turn right at the traffic lights.", [
      ["Прямо, на светофоре направо.", true],
      ["Прямо, на светофоре налево.", false],
      ["Направо, потом прямо.", false],
    ]),
    match("ench3-t3", "Соедини пары.", [
      ["left", "налево"],
      ["right", "направо"],
      ["straight on", "прямо"],
      ["traffic lights", "светофор"],
    ], { skill: "words" }),
    missing("ench3-t4", "Какой буквы не хватает? («направо»)", "ri", "ht", "g", ["g", "h", "k"]),
    speak("ench3-t5", "How do I get to the park?", "Go straight on and turn left. It's on your right.", "Иди прямо и поверни налево. Он будет справа.", { help: "Объясни вслух дорогу." }),
    choice("ench3-t6", "Как сказать «рядом с банком»?", [
      ["next to the bank", true],
      ["next the bank", false],
      ["near of the bank", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "lake-mug",
    itemName: "Кружка с видом озера",
    itemNameRu: "Lake mug",
    ru: "Hooray! A mug!",
    en: "Ура! Кружка!",
    a11y: "Большая белая кружка с нарисованным синим озером и маленьким парусником.",
    image: p("lake-mug"),
    steps: ["Мурзик сам находит пиццерию!", "Тони так рад, что дарит ему кружку с видом озера.", "«You found it! Good job!» — «Ты нашёл! Молодец!»", "Кружка стоит на полке у окна."],
    bridge: "На следующий день Мурзик хочет поехать к озеру. Но на чём?",
  },
};

const chicago4: Lesson = {
  id: "en-a1-chicago-4",
  level: "A1",
  cityId: "en-chicago",
  number: 4,
  title: "By bus or by train? — На автобусе или на поезде?",
  minutes: 7,
  goals: ["Назвать транспорт: by bus, by train", "Спросить, как добраться", "Сказать, сколько времени занимает дорога"],
  vocabNote: "На чём — by: by bus, by train, by taxi, by bike. Но пешком — on foot. It takes ten minutes — «это занимает десять минут».",
  vocab: [
    v("ench4-1", "by bus", "на автобусе", "Красный автобус у остановки.", "Послушать by bus", p("l4-1")),
    v("ench4-2", "by train", "на поезде", "Надземный поезд мчится по эстакаде между домами.", "Послушать by train", p("l4-2")),
    v("ench4-3", "by taxi", "на такси", "Жёлтое такси Тони.", "Послушать by taxi", p("l4-3")),
    v("ench4-4", "by bike", "на велосипеде", "Мурзик на маленьком велосипеде вдоль озера.", "Послушать by bike", p("l4-4")),
    v("ench4-5", "on foot", "пешком", "Следы лапок на дорожке.", "Послушать on foot", p("l4-5")),
    v("ench4-6", "How do you get to work?", "Как ты добираешься на работу?", "Мурзик с любопытством спрашивает Тони.", "Послушать How do you get to work", p("l4-6")),
    v("ench4-7", "It takes twenty minutes.", "Это занимает двадцать минут.", "Часы, стрелка проходит двадцать минут.", "Послушать It takes twenty minutes", p("l4-7")),
  ],
  dialogue: {
    title: "На чём поедем?",
    note: "The L — надземное метро Чикаго (от слова elevated — «поднятый»). Beach — «пляж».",
    lines: [
      line("murzik", "Tony, how do I get to the beach? By bus?", "Тони, как добраться до пляжа? На автобусе?"),
      line("tony", "By bus or by train. The train is fast. It takes ten minutes.", "На автобусе или на поезде. Поезд быстрый. Десять минут."),
      line("murzik", "And how do you get to work?", "А ты как добираешься на работу?"),
      line("tony", "By taxi, of course! I'm a taxi driver!", "На такси, конечно! Я же таксист!"),
      line("tom", "I go everywhere on foot. It's good for photos.", "А я везде хожу пешком. Это хорошо для фотографий."),
      line("murzik", "And I go by bike! Look!", "А я на велосипеде! Смотрите!"),
    ],
    gist: choice("ench4-d1", "Сколько ехать до пляжа на поезде?", [
      ["Десять минут.", true],
      ["Двадцать минут.", false],
      ["Час.", false],
    ]),
  },
  grammar: [
    {
      title: "By bus, on foot, It takes…",
      paragraphs: [
        "Транспорт — by + слово без a и the: by bus, by car, by plane. Исключение: on foot — пешком.",
        "Сколько времени: It takes + время: It takes five minutes. It takes an hour. Вопрос: How long does it take?",
      ],
      examples: [
        { ru: "I go to work by bus. It takes half an hour.", en: "Я езжу на работу на автобусе. Это занимает полчаса." },
        { ru: "How long does it take by train?", en: "Сколько ехать на поезде?" },
      ],
    },
  ],
  tasks: [
    choice("ench4-t1", "Как сказать «на машине»?", [
      ["by car", true],
      ["by a car", false],
      ["on car", false],
    ], { skill: "grammar" }),
    listen("ench4-t2", "Послушай. Как он добирается на работу?", "I go to work on foot. It takes fifteen minutes.", [
      ["Пешком, пятнадцать минут.", true],
      ["На автобусе, пятьдесят минут.", false],
      ["На велосипеде, пять минут.", false],
    ]),
    match("ench4-t3", "Соедини пары.", [
      ["by bus", "на автобусе"],
      ["by train", "на поезде"],
      ["by bike", "на велосипеде"],
      ["on foot", "пешком"],
    ], { skill: "words" }),
    spell("ench4-t4", "Собери из букв слово «поезд».", "train"),
    speak("ench4-t5", "How do you get to work?", "I go by bus. It takes twenty minutes.", "На автобусе. Двадцать минут.", { help: "Расскажи вслух, как ты добираешься на работу или учёбу." }),
    choice("ench4-t6", "Как сказать «Поверни направо»?", [
      ["Turn right.", true],
      ["You right turn.", false],
      ["Turning right.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "shelf",
    itemName: "Полка из старой доски",
    itemNameRu: "Shelf",
    ru: "Hooray! A shelf!",
    en: "Ура! Полка!",
    a11y: "Простая деревянная полка из старой доски, на ней кружка, проездной и камешки с пляжа.",
    image: p("shelf"),
    steps: ["На пляже Мурзик находит красивую старую доску, гладкую от воды.", "Тони помогает сделать из неё полку.", "«Made in Chicago!» — «Сделано в Чикаго!»", "Мурзик ставит на неё камешки с пляжа."],
    bridge: "Утром Мурзик не может найти ключи. Где же они?",
  },
};

const chicago5: Lesson = {
  id: "en-a1-chicago-5",
  level: "A1",
  cityId: "en-chicago",
  number: 5,
  title: "In, on, under — В, на, под",
  minutes: 7,
  goals: ["Сказать, где вещь: in, on, under", "Спросить: Where are my keys?", "Найти потерянную вещь"],
  vocabNote: "In — в (внутри), on — на (сверху), under — под. Where is…? — об одной вещи, Where are…? — о нескольких.",
  vocab: [
    v("ench5-1", "Where are my keys?", "Где мои ключи?", "Мурзик растерянно стоит посреди комнаты, вокруг всё перевёрнуто.", "Послушать Where are my keys", p("l5-1")),
    v("ench5-2", "They're on the table.", "Они на столе.", "Ключи лежат на столе.", "Послушать They're on the table", p("l5-2")),
    v("ench5-3", "It's in the bag.", "Он в сумке.", "Телефон выглядывает из сумки.", "Послушать It's in the bag", p("l5-3")),
    v("ench5-4", "under the bed", "под кроватью", "Под кроватью лежит потерянный носок.", "Послушать under the bed", p("l5-4")),
    v("ench5-5", "on the shelf", "на полке", "На полке стоит кружка.", "Послушать on the shelf", p("l5-5")),
    v("ench5-6", "in my pocket", "в моём кармане", "Из кармана пальто торчат ключи.", "Послушать in my pocket", p("l5-6")),
    v("ench5-7", "Here they are!", "Вот они!", "Мурзик радостно поднимает ключи.", "Послушать Here they are", p("l5-7")),
  ],
  dialogue: {
    title: "Где ключи?",
    note: "Look! — «Смотри!» Silly — «глупенький».",
    lines: [
      line("murzik", "Tom! Where are my keys?", "Том! Где мои ключи?"),
      line("tom", "Are they on the table?", "На столе?"),
      line("murzik", "No, they aren't. Are they under the bed? No…", "Нет. Под кроватью? Нет…"),
      line("tom", "In your bag?", "В сумке?"),
      line("murzik", "No! Only my phone is in the bag.", "Нет! В сумке только телефон."),
      line("tom", "Look! They're in your pocket, silly!", "Смотри! Они у тебя в кармане, глупенький!"),
      line("murzik", "Here they are!", "Вот они!"),
    ],
    gist: choice("ench5-d1", "Где были ключи?", [
      ["В кармане у Мурзика.", true],
      ["Под кроватью.", false],
      ["В сумке.", false],
    ]),
  },
  grammar: [
    {
      title: "In, on, under",
      paragraphs: [
        "In — внутри: in the bag, in the box, in my pocket. On — на поверхности: on the table, on the shelf. Under — под: under the bed.",
        "Where is the phone? — It's in the bag. Where are the keys? — They're on the table.",
      ],
      examples: [
        { ru: "The cat is under the table.", en: "Кот под столом." },
        { ru: "My glasses are on my head!", en: "Мои очки у меня на голове!" },
      ],
    },
  ],
  tasks: [
    choice("ench5-t1", "Как сказать «Книги на полке»?", [
      ["The books are on the shelf.", true],
      ["The books is on the shelf.", false],
      ["The books are in the shelf under.", false],
    ], { skill: "grammar" }),
    listen("ench5-t2", "Послушай. Где телефон?", "Your phone is under the sofa.", [
      ["Под диваном.", true],
      ["На диване.", false],
      ["В сумке.", false],
    ]),
    match("ench5-t3", "Соедини пары.", [
      ["in", "в"],
      ["on", "на"],
      ["under", "под"],
      ["pocket", "карман"],
    ], { skill: "words" }),
    missing("ench5-t4", "Какой буквы не хватает? («ключи»)", "k", "ys", "e", ["e", "i", "a"]),
    speak("ench5-t5", "Where is your phone?", "It's on the table.", "На столе.", { help: "Скажи вслух, где сейчас твой телефон." }),
    choice("ench5-t6", "Как сказать «на автобусе»?", [
      ["by bus", true],
      ["on bus", false],
      ["by the bus", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "key-holder",
    itemName: "Ключница",
    itemNameRu: "Key holder",
    ru: "Hooray! A key holder!",
    en: "Ура! Ключница!",
    a11y: "Маленькая деревянная ключница в форме домика с крючками висит у двери, на одном крючке ключи Мурзика.",
    image: p("key-holder"),
    steps: ["Том дарит Мурзику ключницу-домик.", "«For your keys. Not in your pocket!» — «Для ключей. Не в кармане!»", "Мурзик вешает её у двери.", "Теперь ключи всегда на месте."],
    bridge: "Вечером Тони зовёт всех к себе: «Pizza night!»",
  },
};

const chicago6: Lesson = {
  id: "en-a1-chicago-6",
  level: "A1",
  cityId: "en-chicago",
  number: 6,
  title: "Pizza night — Вечер пиццы",
  minutes: 7,
  goals: ["Пригласить и предложить: How about…?", "Угостить: Help yourself!", "Сказать, как пахнет и какой вкус"],
  vocabNote: "How about…? — «Как насчёт…?» Help yourself! — «Угощайся!» It smells good — «вкусно пахнет».",
  vocab: [
    v("ench6-1", "How about pizza?", "Как насчёт пиццы?", "Тони держит над головой огромную коробку пиццы.", "Послушать How about pizza", p("l6-1")),
    v("ench6-2", "I'm hungry!", "Я голоден!", "Живот Мурзика громко урчит.", "Послушать I'm hungry", p("l6-2")),
    v("ench6-3", "It smells good!", "Вкусно пахнет!", "Мурзик принюхивается к пицце, глаза закрыты.", "Послушать It smells good", p("l6-3")),
    v("ench6-4", "a slice of pizza", "кусок пиццы", "Толстый кусок чикагской пиццы, сыр тянется.", "Послушать a slice of pizza", p("l6-4")),
    v("ench6-5", "Help yourself!", "Угощайся!", "Тони широко улыбается и пододвигает тарелку.", "Послушать Help yourself", p("l6-5")),
    v("ench6-6", "It's very thick!", "Она очень толстая!", "Пицца высокая, как пирог.", "Послушать It's very thick", p("l6-6")),
    v("ench6-7", "Can I have another slice?", "Можно ещё кусочек?", "Мурзик протягивает пустую тарелку.", "Послушать Can I have another slice", p("l6-7")),
  ],
  dialogue: {
    title: "У Тони дома",
    note: "Deep-dish pizza — чикагская пицца, высокая, как пирог. Another — «ещё один».",
    lines: [
      line("tony", "Pizza night! How about deep-dish pizza?", "Вечер пиццы! Как насчёт чикагской пиццы?"),
      line("murzik", "Yes, please! I'm hungry! It smells good!", "Да, пожалуйста! Я голоден! Вкусно пахнет!"),
      line("tony", "Help yourself! Take a slice.", "Угощайтесь! Берите по кусочку."),
      line("murzik", "Wow! It's very thick! It's like a pie!", "Ого! Она такая толстая! Как пирог!"),
      line("tony", "That's Chicago pizza! My grandma's recipe… and Mrs Hope's!", "Это чикагская пицца! Рецепт моей бабушки… и миссис Хоуп!"),
      line("murzik", "Can I have another slice?", "Можно мне ещё кусочек?"),
    ],
    gist: choice("ench6-d1", "Какая пицца в Чикаго?", [
      ["Высокая и толстая, как пирог.", true],
      ["Тонкая и хрустящая.", false],
      ["Маленькая и сладкая.", false],
    ]),
  },
  grammar: [
    {
      title: "Предложения и угощение",
      paragraphs: [
        "Предложить: How about pizza? Would you like a slice? Let's eat! Угостить: Help yourself! Here you are.",
        "Ощущения: It smells good. It tastes great. Another — «ещё один (такой же)»: another slice, another cup.",
      ],
      examples: [
        { ru: "How about a cup of tea?", en: "Как насчёт чашки чая?" },
        { ru: "Can I have another cookie?", en: "Можно ещё печенье?" },
      ],
    },
  ],
  tasks: [
    choice("ench6-t1", "Как попросить ещё кусочек?", [
      ["Can I have another slice?", true],
      ["Can I have other slice?", false],
      ["I have more slice?", false],
    ], { skill: "grammar" }),
    listen("ench6-t2", "Послушай. Что предлагают?", "How about a cup of coffee?", [
      ["Чашку кофе.", true],
      ["Кусок пиццы.", false],
      ["Пойти в кино.", false],
    ]),
    match("ench6-t3", "Соедини пары.", [
      ["hungry", "голодный"],
      ["a slice", "кусок"],
      ["thick", "толстый"],
      ["Help yourself!", "Угощайся!"],
    ], { skill: "words" }),
    spell("ench6-t4", "Собери из букв слово «пицца».", "pizza"),
    speak("ench6-t5", "How about pizza?", "Yes, please! I'm hungry!", "Да, пожалуйста! Я голоден (голодна)!", { help: "Ответь вслух на предложение." }),
    choice("ench6-t6", "Как сказать «Ключи под кроватью»?", [
      ["The keys are under the bed.", true],
      ["The keys is under the bed.", false],
      ["The keys are on under the bed.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "plant",
    itemName: "Зелёное растение",
    itemNameRu: "Green plant",
    ru: "Hooray! A green plant!",
    en: "Ура! Зелёное растение!",
    a11y: "Высокое зелёное растение с большими листьями в белом горшке стоит у окна.",
    image: p("plant"),
    steps: ["У Тони дома много растений.", "Он отдаёт Мурзику одно, с большими листьями.", "«Water it every week!» — «Поливай каждую неделю!»", "Растение стоит у окна с видом на озеро."],
    bridge: "В последний день Тони везёт Мурзика и Тома на вокзал. По дороге — сюрприз.",
  },
};

const chicago7: Lesson = {
  id: "en-a1-chicago-7",
  level: "A1",
  cityId: "en-chicago",
  number: 7,
  title: "Goodbye, Chicago! — Пока, Чикаго!",
  minutes: 8,
  goals: ["Спросить и объяснить дорогу", "Описать район: there is, there are", "Вспомнить все слова Чикаго"],
  vocabNote: "Повторяем: there is / there are, next to / opposite / between, turn left / right, by bus / on foot, in / on / under.",
  vocab: [
    v("ench7-1", "There's something in the glove box.", "В бардачке кое-что есть.", "Тони открывает бардачок такси.", "Послушать There's something in the glove box", p("l7-1")),
    v("ench7-2", "the recipe for deep-dish pizza", "рецепт чикагской пиццы", "Страница с рисунком высокой пиццы.", "Послушать the recipe for deep-dish pizza", p("l7-2")),
    v("ench7-3", "a pizza pan", "форма для пиццы", "Глубокая круглая чугунная форма для пиццы.", "Послушать a pizza pan", p("l7-3")),
    v("ench7-4", "We're going south.", "Мы едем на юг.", "Том показывает на карте стрелку вниз, к югу.", "Послушать We're going south", p("l7-4")),
    v("ench7-5", "Drive safely!", "Осторожно на дороге!", "Мурзик машет Тони у вокзала.", "Послушать Drive safely", p("l7-5")),
    v("ench7-6", "Thanks for everything!", "Спасибо за всё!", "Мурзик обнимает Тони.", "Послушать Thanks for everything", p("l7-6")),
    v("ench7-7", "Have fun in New Orleans!", "Повеселитесь в Новом Орлеане!", "Тони машет из окна такси.", "Послушать Have fun in New Orleans", p("l7-7")),
  ],
  dialogue: {
    title: "Восьмая страница",
    note: "Glove box — «бардачок» в машине. Jazz — джаз, музыка Нового Орлеана.",
    lines: [
      line("tony", "Murzik, there's something in the glove box. It's for you.", "Мурзик, в бардачке кое-что есть. Это тебе."),
      line("murzik", "A page! The recipe for deep-dish pizza!", "Страница! Рецепт чикагской пиццы!"),
      line("tony", "And there's a pizza pan in the back. For your café!", "А сзади лежит форма для пиццы. Для твоего кафе!"),
      line("tom", "Thanks for everything, Tony! Where's the next page?", "Спасибо за всё, Тони! Где следующая страница?"),
      line("tony", "In New Orleans. My friend Bernadette sings jazz there. Go south!", "В Новом Орлеане. Там поёт джаз моя подруга Бернадетт. На юг!"),
      line("murzik", "Drive safely, Tony!", "Осторожно на дороге, Тони!"),
      line("tony", "Have fun in New Orleans!", "Повеселитесь в Новом Орлеане!"),
    ],
    gist: choice("ench7-d1", "Где следующая страница?", [
      ["В Новом Орлеане, у певицы Бернадетт.", true],
      ["В Бостоне, у Эмили.", false],
      ["В Чикаго, у озера.", false],
    ]),
  },
  grammar: [
    {
      title: "Город и дорога: всё вместе",
      paragraphs: [
        "Что есть: There's a park. There are two cafés. Где: It's next to the bank, opposite the park.",
        "Как пройти: Go straight on, turn left, it's on your right. На чём: by bus, by train, on foot. It takes ten minutes.",
      ],
      examples: [
        { ru: "There's a café opposite the station. Go straight on, it's on your left.", en: "Напротив вокзала есть кафе. Иди прямо, оно будет слева." },
        { ru: "I go to work by train. It takes twenty minutes.", en: "Я езжу на работу на поезде. Двадцать минут." },
      ],
    },
  ],
  tasks: [
    listen("ench7-t1", "Аудиоэкзамен. Как дойти до музея?", "Go straight on. Turn right at the traffic lights. The museum is on your left, opposite the park.", [
      ["Прямо, на светофоре направо, музей слева напротив парка.", true],
      ["Прямо, на светофоре налево, музей справа рядом с парком.", false],
      ["Направо, потом прямо, музей за парком.", false],
    ]),
    choice("ench7-t2", "Выбери правильное предложение.", [
      ["There are two banks near here.", true],
      ["There is two banks near here.", false],
      ["It are two banks near here.", false],
    ], { skill: "grammar" }),
    match("ench7-t3", "Соедини пары.", [
      ["Drive safely!", "Осторожно на дороге!"],
      ["Thanks for everything!", "Спасибо за всё!"],
      ["south", "юг"],
      ["glove box", "бардачок"],
    ], { skill: "words" }),
    spell("ench7-t4", "Собери из букв слово «юг».", "south"),
    speak("ench7-t5", "How do I get to the station?", "Go straight on and turn left. It's next to the bank.", "Иди прямо и поверни налево. Вокзал рядом с банком.", { help: "Объясни вслух дорогу до вокзала." }),
    script("ench7-t6", "Вспомни весь Чикаго. Закончи разговор на улице.", [
      { speaker: "Прохожая", text: "Can I help you?" },
      { speaker: "Ты", answer: "Yes, please. Is there a bank near here?", options: ["Yes, please. Is there a bank near here?", "Yes, please. There is a bank near here?", "Yes, please. Are there a bank?"] },
      { speaker: "Прохожая", text: "Yes, there is. Go straight on and turn left." },
      { speaker: "Ты", answer: "Is it far?", options: ["Is it far?", "It's far is?", "Are it far?"] },
      { speaker: "Прохожая", text: "No, it takes five minutes on foot." },
      { speaker: "Ты", answer: "Thank you very much!", options: ["Thank you very much!", "Help yourself!", "Drive safely!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "pizza-pan",
    itemName: "Форма для пиццы",
    itemNameRu: "Pizza pan",
    ru: "Hooray! A pizza pan!",
    en: "Ура! Форма для пиццы!",
    a11y: "Глубокая круглая чугунная форма для пиццы, тёмная от многих лет готовки.",
    image: p("pizza-pan"),
    steps: ["Тони достаёт с заднего сиденья тяжёлую форму.", "«My grandma's pan. Forty years of pizza!» — «Бабушкина форма. Сорок лет пиццы!»", "Мурзик едва поднимает её.", "Он бережно кладёт форму в чемодан."],
    bridge: "Следующая страница — на юге, в Новом Орлеане.",
  },
};

const story: CityStory = {
  home: {
    name: "Квартира с видом на озеро",
    nameRu: "Murzik's flat in Chicago",
    image: p("home"),
    a11y: "Пустая светлая квартира высоко в доме. В большом окне синее озеро Мичиган до горизонта. Посередине чемодан Мурзика.",
  },
  keepsakeId: "pizza-pan",
  welcomeRu: "Hello, Chicago!",
  welcomeEn: "Привет, Чикаго!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том в Чикаго: высокие стеклянные дома у огромного синего озера, ветер развевает шарф Мурзика.",
  departureImage: p("departure"),
  departureA11y: "Тони машет из окна жёлтого такси у вокзала.",
  finale: [
    {
      image: p("page"),
      a11y: "Крупно: восьмая страница книги рецептов, рецепт чикагской пиццы. На полях записка от руки.",
      lines: [
        { en: "Мурзик вклеивает восьмую страницу. На полях — записка миссис Хоуп:" },
        { ru: "At my café, there was always a map for lost guests.", en: "В моём кафе всегда висела карта для заблудившихся гостей." },
        { en: "Мурзик смотрит на свою карту Чикаго и улыбается." },
      ],
    },
    {
      image: p("pizza-pan"),
      a11y: "Мурзик обходит свою квартиру с видом на озеро, которую обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свою квартиру в Чикаго. Том фотографирует её для журнала." },
        { en: "Для будущего кафе он берёт с собой бабушкину форму для пиццы." },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "Chicago complete!", en: "Чикаго пройден!" },
        { en: "7 / 7 уроков" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Тони машет на прощание.",
      lines: [
        { ru: "Goodbye, Tony!", en: "Пока, Тони!" },
        { ru: "Next stop: New Orleans!", en: "Следующая остановка: Новый Орлеан!" },
      ],
    },
    {
      image: p("train"),
      a11y: "Поезд едет на юг вдоль широкой реки, становится всё теплее.",
      lines: [{ ru: "Chicago → New Orleans", en: "Чикаго → Новый Орлеан" }],
    },
    {
      image: pic("en/neworleans/arrival"),
      a11y: "Мурзик и Том в Новом Орлеане: старые дома с коваными балконами, цветы, на улице играет духовой оркестр.",
      lines: [
        { ru: "Hello, New Orleans!", en: "Привет, Новый Орлеан!" },
        { ru: "It's hot and there's music everywhere!", en: "Жарко, и музыка повсюду!" },
      ],
    },
  ],
};

export const enChicago = {
  id: "en-chicago",
  name: "Чикаго",
  nameEn: "Chicago",
  lessons: [chicago1, chicago2, chicago3, chicago4, chicago5, chicago6, chicago7],
  story,
};
