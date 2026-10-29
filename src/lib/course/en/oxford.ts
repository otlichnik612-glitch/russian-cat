import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "../tr/make";

/* Оксфорд · «Кто ты и откуда» · глагол to be целиком, страны и национальности, числа 11–20, вопросы Are you…? */

const p = (name: string) => pic(`en/oxford/${name}`);

const oxford1: Lesson = {
  id: "en-a1-oxford-1",
  level: "A1",
  cityId: "en-oxford",
  number: 1,
  title: "Where are you from? — Откуда ты?",
  minutes: 7,
  goals: ["Спросить, откуда человек", "Сказать, откуда ты", "Сказать, откуда он или она"],
  vocabNote: "Названия стран пишут с большой буквы: Russia, England, India. From — «из».",
  vocab: [
    v("enox1-1", "Where are you from?", "Откуда ты?", "Девушка с рюкзаком и длинной косой с любопытством смотрит на Мурзика.", "Послушать Where are you from", p("l1-1"), "[уэ́а а ю фром]"),
    v("enox1-2", "I'm from Russia.", "Я из России.", "Мурзик показывает на маленький глобус.", "Послушать I'm from Russia", p("l1-2"), "[айм фром ра́ша]"),
    v("enox1-3", "Tom is from England.", "Том из Англии.", "Том стоит под старинной каменной аркой и машет.", "Послушать Tom is from England", p("l1-3"), "[том из фром и́нглэнд]"),
    v("enox1-4", "He's from London.", "Он из Лондона.", "Мурзик показывает лапой на Тома.", "Послушать He's from London", p("l1-4"), "[хиз фром ла́ндэн]"),
    v("enox1-5", "She's from Oxford.", "Она из Оксфорда.", "Мурзик показывает лапой на девушку с косой.", "Послушать She's from Oxford", p("l1-5"), "[шиз фром о́ксфэд]"),
    v("enox1-6", "Her family is from India.", "Её семья из Индии.", "Фотография большой весёлой семьи на фоне цветущего сада.", "Послушать Her family is from India", p("l1-6"), "[хё фэ́мили из фром и́ндиэ]"),
    v("enox1-7", "Welcome to Oxford!", "Добро пожаловать в Оксфорд!", "Девушка с косой раскидывает руки у ворот старого колледжа.", "Послушать Welcome to Oxford", p("l1-7"), "[уэ́лкам ту о́ксфэд]"),
  ],
  dialogue: {
    title: "Прия",
    note: "Прия — студентка, внучка старой подруги миссис Хоуп. Granddaughter — «внучка».",
    lines: [
      line("priya", "Hi! You're Tom and Murzik! Welcome to Oxford!", "Привет! Вы Том и Мурзик! Добро пожаловать в Оксфорд!"),
      line("tom", "Hi, Priya! Nice to meet you.", "Привет, Прия! Очень приятно."),
      line("priya", "Murzik, where are you from?", "Мурзик, ты откуда?"),
      line("murzik", "I'm from Russia. And you?", "Я из России. А ты?"),
      line("priya", "I'm from Oxford. But my family is from India.", "Я из Оксфорда. Но моя семья из Индии."),
      line("murzik", "And Tom is from London!", "А Том из Лондона!"),
      line("priya", "I know! He's Mrs Hope's grandson!", "Знаю! Он внук миссис Хоуп!"),
    ],
    gist: choice("enox1-d1", "Откуда Прия?", [
      ["Из Оксфорда, а её семья из Индии.", true],
      ["Из Лондона.", false],
      ["Из России.", false],
    ]),
  },
  grammar: [
    {
      title: "To be: I am, you are, he is",
      paragraphs: [
        "Глагол to be — «быть, являться». В настоящем времени у него три формы: I am, you are, he / she / it is.",
        "Коротко: I'm, you're, he's, she's, it's. Без этого глагола английское предложение «разваливается»: She's from Oxford, а не «She from Oxford».",
      ],
      examples: [
        { ru: "I'm from Russia.", en: "Я из России." },
        { ru: "She's from Oxford. He's from London.", en: "Она из Оксфорда. Он из Лондона." },
      ],
    },
  ],
  tasks: [
    choice("enox1-t1", "Как сказать «Она из Индии»?", [
      ["She's from India.", true],
      ["She from India.", false],
      ["She are from India.", false],
    ], { skill: "grammar" }),
    listen("enox1-t2", "Послушай. Откуда говорящий?", "I'm from England.", [
      ["Из Англии.", true],
      ["Из Индии.", false],
      ["Из России.", false],
    ]),
    match("enox1-t3", "Соедини пары.", [
      ["I'm", "я (есть)"],
      ["you're", "ты (есть)"],
      ["he's", "он (есть)"],
      ["she's", "она (есть)"],
    ], { skill: "words" }),
    missing("enox1-t4", "Какой буквы не хватает? («Россия»)", "Ru", "sia", "s", ["s", "c", "z"]),
    speak("enox1-t5", "Where are you from?", "I'm from Russia.", "Я из России.", { help: "Ответь вслух, откуда ты." }),
    choice("enox1-t6", "Как попрощаться до завтра?", [
      ["See you tomorrow!", true],
      ["Have a good trip!", false],
      ["Nice to meet you!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "lamp",
    itemName: "Настольная лампа",
    itemNameRu: "Desk lamp",
    ru: "Hooray! A desk lamp!",
    en: "Ура! Настольная лампа!",
    a11y: "На письменном столе стоит старая зелёная лампа с латунной ножкой. Она мягко светит на раскрытую книгу.",
    image: p("lamp"),
    steps: ["Прия показывает Мурзику его комнату в студенческом доме.", "На столе — зелёная лампа.", "«For reading. Students read a lot here!» — «Для чтения. Студенты здесь много читают!»", "Мурзик включает её: тёплый свет."],
    bridge: "Вечером к Прие приходят друзья — из самых разных стран.",
  },
};

const oxford2: Lesson = {
  id: "en-a1-oxford-2",
  level: "A1",
  cityId: "en-oxford",
  number: 2,
  title: "I'm Russian — Я русский",
  minutes: 7,
  goals: ["Назвать свою национальность", "Сказать, на каком языке говоришь", "Спросить, говорит ли человек по-английски"],
  vocabNote: "Национальность и язык часто звучат одинаково: Russian — «русский» и «русский язык», English — «английский». Их тоже пишут с большой буквы.",
  vocab: [
    v("enox2-1", "I'm Russian.", "Я русский.", "Мурзик гордо стоит с матрёшкой в лапах.", "Послушать I'm Russian", p("l2-1"), "[айм ра́шн]"),
    v("enox2-2", "Tom is English.", "Том — англичанин.", "Том с чашкой чая и зонтом под мышкой.", "Послушать Tom is English", p("l2-2"), "[том из и́нглиш]"),
    v("enox2-3", "Hiroshi is Japanese.", "Хироси — японец.", "Студент в очках вежливо кланяется.", "Послушать Hiroshi is Japanese", p("l2-3"), "[хиро́ши из джэпэни́з]"),
    v("enox2-4", "Ana is Spanish.", "Ана — испанка.", "Девушка с тёмными кудрями смеётся и машет.", "Послушать Ana is Spanish", p("l2-4"), "[а́на из спэ́ниш]"),
    v("enox2-5", "I speak Russian.", "Я говорю по-русски.", "Мурзик говорит, у него над головой облачко с буквами А, Б, В.", "Послушать I speak Russian", p("l2-5"), "[ай спик ра́шн]"),
    v("enox2-6", "Do you speak English?", "Ты говоришь по-английски?", "Прия с улыбкой наклоняется к Мурзику.", "Послушать Do you speak English", p("l2-6"), "[ду ю спик и́нглиш]"),
    v("enox2-7", "A little.", "Немного.", "Мурзик показывает маленький зазор между лапками и смущённо улыбается.", "Послушать A little", p("l2-7"), "[э литл]"),
  ],
  dialogue: {
    title: "Вечер у Прии",
    note: "Friends — «друзья». Everybody — «все». Your English is good! — «У тебя хороший английский!»",
    lines: [
      line("priya", "Everybody, this is Murzik. He's Russian.", "Все, это Мурзик. Он русский."),
      line("murzik", "Hello! Do you speak Russian?", "Привет! Вы говорите по-русски?"),
      line("priya", "No! Hiroshi is Japanese, he speaks Japanese. Ana is Spanish.", "Нет! Хироси японец, он говорит по-японски. Ана — испанка."),
      line("priya", "Murzik, do you speak English?", "Мурзик, а ты говоришь по-английски?"),
      line("murzik", "A little.", "Немного."),
      line("priya", "Your English is good!", "У тебя хороший английский!"),
      line("tom", "He's a good student!", "Он хороший ученик!"),
    ],
    gist: choice("enox2-d1", "Как Мурзик говорит по-английски?", [
      ["Немного.", true],
      ["Совсем не говорит.", false],
      ["Очень хорошо, как Том.", false],
    ]),
  },
  grammar: [
    {
      title: "Страна, национальность, язык",
      paragraphs: [
        "Страна: Russia, England, Japan, Spain. Национальность и язык: Russian, English, Japanese, Spanish. Все эти слова пишут с большой буквы.",
        "О себе: I'm Russian. — Я русский. Язык: I speak Russian. — Я говорю по-русски. Слово «по-русски» — просто Russian.",
      ],
      examples: [
        { ru: "Ana is from Spain. She's Spanish.", en: "Ана из Испании. Она испанка." },
        { ru: "I speak English and Russian.", en: "Я говорю по-английски и по-русски." },
      ],
    },
  ],
  tasks: [
    choice("enox2-t1", "Как правильно написать «русский»?", [
      ["Russian", true],
      ["russian", false],
      ["Russia", false],
    ], { skill: "grammar" }),
    listen("enox2-t2", "Послушай. Какой у неё язык?", "She speaks Spanish.", [
      ["Испанский.", true],
      ["Японский.", false],
      ["Английский.", false],
    ]),
    match("enox2-t3", "Соедини пары.", [
      ["Russia", "Россия"],
      ["Russian", "русский"],
      ["England", "Англия"],
      ["English", "английский"],
    ], { skill: "words" }),
    spell("enox2-t4", "Собери из букв слово «маленький, немного».", "little"),
    speak("enox2-t5", "Do you speak English?", "A little. I speak Russian.", "Немного. Я говорю по-русски.", { help: "Ответь вслух." }),
    choice("enox2-t6", "Как спросить «Откуда ты?»", [
      ["Where are you from?", true],
      ["How are you?", false],
      ["What's your name?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "map",
    itemName: "Карта мира",
    itemNameRu: "World map",
    ru: "Hooray! A map of the world!",
    en: "Ура! Карта мира!",
    a11y: "На стене висит большая старая карта мира. Друзья Прии воткнули маленькие булавки в свои страны.",
    image: p("map"),
    steps: ["Друзья Прии вешают на стену карту мира.", "Каждый втыкает булавку в свою страну.", "Мурзик втыкает булавку в Россию.", "«And soon — the whole world!» — смеётся Том. «А скоро — весь мир!»"],
    bridge: "Утром Прия ведёт всех гулять по колледжам.",
  },
};

const oxford3: Lesson = {
  id: "en-a1-oxford-3",
  level: "A1",
  cityId: "en-oxford",
  number: 3,
  title: "We are friends — Мы друзья",
  minutes: 7,
  goals: ["Сказать «мы», «вы», «они»", "Сказать, кто вы друг другу", "Спросить: Are they…?"],
  vocabNote: "We are = we're, you are = you're, they are = they're. You — это и «ты», и «вы» (несколько человек).",
  vocab: [
    v("enox3-1", "We're friends.", "Мы друзья.", "Мурзик и Том стоят в обнимку.", "Послушать We're friends", p("l3-1"), "[уи́э фрэндз]"),
    v("enox3-2", "They're students.", "Они студенты.", "Группа студентов в мантиях у старинного здания.", "Послушать They're students", p("l3-2"), "[зэ́а стью́дэнтс]"),
    v("enox3-3", "Are they your friends?", "Это твои друзья?", "Мурзик показывает на компанию студентов на лужайке.", "Послушать Are they your friends", p("l3-3"), "[а зэй ё фрэндз]"),
    v("enox3-4", "Yes, they are.", "Да.", "Прия кивает и машет друзьям.", "Послушать Yes, they are", p("l3-4"), "[йес, зэй а]"),
    v("enox3-5", "This is my college.", "Это мой колледж.", "Прия показывает на ворота старинного колледжа с башенкой.", "Послушать This is my college", p("l3-5"), "[зис из май ко́лидж]"),
    v("enox3-6", "It's very old.", "Он очень старый.", "Старинные каменные стены, покрытые плющом.", "Послушать It's very old", p("l3-6"), "[итс вэ́ри оулд]"),
    v("enox3-7", "You're lucky!", "Вам повезло!", "Мурзик восхищённо смотрит на башни колледжа.", "Послушать You're lucky", p("l3-7"), "[ё ла́ки]"),
  ],
  dialogue: {
    title: "Прогулка по колледжам",
    note: "Hundred years — «сто лет». Library — «библиотека».",
    lines: [
      line("priya", "This is my college. It's very old!", "Это мой колледж. Он очень старый!"),
      line("murzik", "How old?", "Насколько старый?"),
      line("priya", "Seven hundred years!", "Семьсот лет!"),
      line("murzik", "Wow! Are they students?", "Ого! Это студенты?"),
      line("priya", "Yes, they are. They're my friends. We're in the same year.", "Да. Это мои друзья. Мы на одном курсе."),
      line("murzik", "You're lucky!", "Тебе повезло!"),
    ],
    gist: choice("enox3-d1", "Сколько лет колледжу Прии?", [
      ["Семьсот лет.", true],
      ["Семьдесят лет.", false],
      ["Семь лет.", false],
    ]),
  },
  grammar: [
    {
      title: "To be: we are, you are, they are",
      paragraphs: [
        "Полная таблица: I am, you are, he / she / it is, we are, you are, they are.",
        "Вопрос — глагол в начало: They are students. → Are they students? Ответ: Yes, they are. / No, they aren't.",
      ],
      examples: [
        { ru: "We're friends.", en: "Мы друзья." },
        { ru: "Are you students? — Yes, we are.", en: "Вы студенты? — Да." },
      ],
    },
  ],
  tasks: [
    choice("enox3-t1", "Как сказать «Они студенты»?", [
      ["They're students.", true],
      ["They is students.", false],
      ["They students.", false],
    ], { skill: "grammar" }),
    listen("enox3-t2", "Послушай. Кто они?", "We're friends.", [
      ["Друзья.", true],
      ["Студенты.", false],
      ["Учителя.", false],
    ]),
    match("enox3-t3", "Соедини пары.", [
      ["we're", "мы (есть)"],
      ["they're", "они (есть)"],
      ["friends", "друзья"],
      ["students", "студенты"],
    ], { skill: "words" }),
    missing("enox3-t4", "Какой буквы не хватает? («друг»)", "fr", "end", "i", ["i", "e", "y"]),
    speak("enox3-t5", "Are you and Tom friends?", "Yes, we are. We're friends.", "Да. Мы друзья.", { help: "Ответь вслух." }),
    choice("enox3-t6", "Как сказать «Я говорю по-русски»?", [
      ["I speak Russian.", true],
      ["I am Russia.", false],
      ["I speak Russia.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "scarf",
    itemName: "Полосатый шарф колледжа",
    itemNameRu: "College scarf",
    ru: "Hooray! A college scarf!",
    en: "Ура! Шарф колледжа!",
    a11y: "Длинный вязаный шарф в тёмно-синюю и жёлтую полоску висит на спинке стула.",
    image: p("scarf"),
    steps: ["Друзья Прии дарят Мурзику полосатый шарф.", "«Now you're one of us!» — «Теперь ты один из нас!»", "Мурзик повязывает его поверх своего.", "Теперь у него два шарфа!"],
    bridge: "Вечером на лужайке игра: кто быстрее посчитает до двадцати по-английски?",
  },
};

const oxford4: Lesson = {
  id: "en-a1-oxford-4",
  level: "A1",
  cityId: "en-oxford",
  number: 4,
  title: "Числа 11–20",
  minutes: 7,
  goals: ["Считать до двадцати", "Спросить, сколько лет", "Сказать свой возраст"],
  vocabNote: "Числа 13–19 кончаются на -teen [-тин]: thirteen, fourteen. Не путай thirteen (13) и thirty (30) — ударение в -teen падает на конец.",
  vocab: [
    v("enox4-1", "eleven, twelve", "одиннадцать, двенадцать", "Двенадцать уток плывут по реке.", "Послушать eleven, twelve", p("l4-1"), "[иле́вн, туэлв]"),
    v("enox4-2", "thirteen, fourteen, fifteen", "тринадцать, четырнадцать, пятнадцать", "Пятнадцать лодок у причала.", "Послушать thirteen, fourteen, fifteen", p("l4-2"), "[сё:ти́н, фо:ти́н, фифти́н]"),
    v("enox4-3", "sixteen, seventeen", "шестнадцать, семнадцать", "Семнадцать велосипедов у стены колледжа.", "Послушать sixteen, seventeen", p("l4-3"), "[сиксти́н, сэвнти́н]"),
    v("enox4-4", "eighteen, nineteen, twenty", "восемнадцать, девятнадцать, двадцать", "Двадцать свечей на торте.", "Послушать eighteen, nineteen, twenty", p("l4-4"), "[эйти́н, найнти́н, туэ́нти]"),
    v("enox4-5", "How old are you?", "Сколько тебе лет?", "Мурзик с любопытством смотрит на Прию.", "Послушать How old are you", p("l4-5"), "[хау оулд а ю]"),
    v("enox4-6", "I'm twenty.", "Мне двадцать.", "Прия показывает два раза по десять пальцев.", "Послушать I'm twenty", p("l4-6"), "[айм туэ́нти]"),
    v("enox4-7", "He's twenty-five.", "Ему двадцать пять.", "Мурзик показывает лапой на Тома.", "Послушать He's twenty-five", p("l4-7"), "[хиз туэ́нти-файв]"),
  ],
  dialogue: {
    title: "Лодка на реке",
    note: "Punt [пант] — плоская лодка, её толкают длинным шестом. На них катаются по реке в Оксфорде.",
    lines: [
      line("priya", "How old are you, Murzik?", "Сколько тебе лет, Мурзик?"),
      line("murzik", "I'm six! And you?", "Мне шесть! А тебе?"),
      line("priya", "I'm twenty. And Tom?", "Мне двадцать. А Тому?"),
      line("tom", "I'm twenty-five.", "Мне двадцать пять."),
      line("priya", "Look, the punts! One, two… fifteen!", "Смотрите, лодки! Одна, две… пятнадцать!"),
      line("murzik", "Sixteen! There's one more!", "Шестнадцать! Вон ещё одна!"),
    ],
    gist: choice("enox4-d1", "Сколько лет Прие?", [
      ["Двадцать.", true],
      ["Двадцать пять.", false],
      ["Шесть.", false],
    ]),
  },
  grammar: [
    {
      title: "Возраст: I'm twenty",
      paragraphs: [
        "Возраст говорят через to be: I'm twenty. — Мне двадцать. He's six. — Ему шесть. Слово years (лет) можно не говорить.",
        "Вопрос: How old are you? — Сколько тебе лет? (буквально «Насколько ты старый?»)",
      ],
      examples: [
        { ru: "How old is Tom? — He's twenty-five.", en: "Сколько лет Тому? — Двадцать пять." },
        { ru: "I'm eighteen.", en: "Мне восемнадцать." },
      ],
    },
  ],
  tasks: [
    choice("enox4-t1", "Как сказать «Мне восемнадцать»?", [
      ["I'm eighteen.", true],
      ["I have eighteen.", false],
      ["Me eighteen.", false],
    ], { skill: "grammar" }),
    listen("enox4-t2", "Послушай. Какое число?", "fourteen", [
      ["14", true],
      ["40", false],
      ["4", false],
    ]),
    match("enox4-t3", "Соедини пары.", [
      ["eleven", "11"],
      ["thirteen", "13"],
      ["seventeen", "17"],
      ["twenty", "20"],
    ], { skill: "words" }),
    missing("enox4-t4", "Какой буквы не хватает? («двенадцать»)", "twel", "e", "v", ["v", "f", "w"]),
    speak("enox4-t5", "How old are you?", "I'm thirty.", "Мне тридцать.", { help: "Ответь вслух, сколько тебе лет." }),
    choice("enox4-t6", "Как спросить «Это твои друзья?»", [
      ["Are they your friends?", true],
      ["They are your friends?", false],
      ["Is they your friends?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bike-bell",
    itemName: "Велосипедный звонок",
    itemNameRu: "Bike bell",
    ru: "Hooray! A bike bell!",
    en: "Ура! Велосипедный звонок!",
    a11y: "Маленький блестящий велосипедный звонок лежит на подоконнике.",
    image: p("bike-bell"),
    steps: ["В Оксфорде все ездят на велосипедах.", "Сосед Прии дарит Мурзику старый звонок.", "Дзынь-дзынь!", "Мурзик звенит им каждое утро."],
    bridge: "Мурзик хочет сам найти библиотеку. Но далеко ли она?",
  },
};

const oxford5: Lesson = {
  id: "en-a1-oxford-5",
  level: "A1",
  cityId: "en-oxford",
  number: 5,
  title: "Is it far? — Это далеко?",
  minutes: 7,
  goals: ["Спросить, где находится место", "Сказать «здесь», «там», «близко», «далеко»", "Сказать «не»: isn't, aren't, I'm not"],
  vocabNote: "Отрицание с to be — просто not: is not = isn't, are not = aren't, I am not = I'm not.",
  vocab: [
    v("enox5-1", "Where is the library?", "Где библиотека?", "Мурзик стоит на перекрёстке со стопкой книг.", "Послушать Where is the library", p("l5-1"), "[уэ́а из зэ ла́йбрэри]"),
    v("enox5-2", "Is it far?", "Это далеко?", "Мурзик смотрит вдаль на длинную улицу.", "Послушать Is it far", p("l5-2"), "[из ит фа]"),
    v("enox5-3", "It isn't far.", "Это недалеко.", "Прохожая показывает рукой на соседнюю улицу.", "Послушать It isn't far", p("l5-3"), "[ит изнт фа]"),
    v("enox5-4", "It's near.", "Это близко.", "Круглое здание с куполом совсем рядом.", "Послушать It's near", p("l5-4"), "[итс ни́э]"),
    v("enox5-5", "It's over there.", "Вон там.", "Прохожая показывает пальцем на здание за углом.", "Послушать It's over there", p("l5-5"), "[итс о́увэ зэ́а]"),
    v("enox5-6", "I'm not a student.", "Я не студент.", "Мурзик качает головой у входа, где охранник проверяет студенческие билеты.", "Послушать I'm not a student", p("l5-6"), "[айм нот э стью́дэнт]"),
    v("enox5-7", "They aren't open today.", "Сегодня они не работают.", "На двери табличка с перечёркнутым солнцем.", "Послушать They aren't open today", p("l5-7"), "[зэй а́нт о́упэн тэдэ́й]"),
  ],
  dialogue: {
    title: "Где библиотека?",
    note: "Open — «открыт», closed — «закрыт». Shop — «магазин».",
    lines: [
      line("murzik", "Excuse me. Where is the library?", "Простите. Где библиотека?"),
      line("passerby", "It's over there. It isn't far.", "Вон там. Это недалеко."),
      line("murzik", "Thank you! Is it open?", "Спасибо! Она открыта?"),
      line("passerby", "Yes, but only for students. Are you a student?", "Да, но только для студентов. Ты студент?"),
      line("murzik", "No, I'm not a student.", "Нет, я не студент."),
      line("passerby", "The bookshops are near. And they're for everybody!", "Книжные магазины рядом. И они для всех!"),
    ],
    gist: choice("enox5-d1", "Почему Мурзик не может пойти в библиотеку?", [
      ["Она только для студентов.", true],
      ["Она закрыта.", false],
      ["Она очень далеко.", false],
    ]),
  },
  grammar: [
    {
      title: "Не: isn't, aren't, I'm not",
      paragraphs: [
        "Чтобы сказать «не», после am / is / are ставят not: It is not far = It isn't far. They are not open = They aren't open. I am not = I'm not.",
        "Короткие ответы: Is it far? — No, it isn't. Are you a student? — No, I'm not.",
      ],
      examples: [
        { ru: "It isn't far. It's near.", en: "Это недалеко. Это близко." },
        { ru: "Are you a student? — No, I'm not.", en: "Ты студент? — Нет." },
      ],
    },
  ],
  tasks: [
    choice("enox5-t1", "Как сказать «Это недалеко»?", [
      ["It isn't far.", true],
      ["It not far.", false],
      ["It don't far.", false],
    ], { skill: "grammar" }),
    listen("enox5-t2", "Послушай. Где это?", "It's over there. It's near.", [
      ["Вон там, близко.", true],
      ["Очень далеко.", false],
      ["Здесь, за дверью.", false],
    ]),
    match("enox5-t3", "Соедини пары.", [
      ["far", "далеко"],
      ["near", "близко"],
      ["open", "открыто"],
      ["over there", "вон там"],
    ], { skill: "words" }),
    spell("enox5-t4", "Собери из букв слово «далеко».", "far", ["o"]),
    speak("enox5-t5", "Are you a teacher?", "No, I'm not. I'm a student.", "Нет. Я студент.", { help: "Ответь вслух, используя I'm not." }),
    choice("enox5-t6", "Как сказать «Мне двадцать»?", [
      ["I'm twenty.", true],
      ["I have twenty.", false],
      ["I twenty years.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "books",
    itemName: "Стопка старых книг",
    itemNameRu: "Old books",
    ru: "Hooray! Old books!",
    en: "Ура! Старые книги!",
    a11y: "На полке стоит стопка старых книг в кожаных переплётах, сверху маленькая книжка английских стихов.",
    image: p("books"),
    steps: ["В книжном магазине продавец дарит Мурзику три старые книги.", "«For a new reader!» — «Новому читателю!»", "Мурзик ставит их на полку.", "Он пока не может их прочитать. Пока!"],
    bridge: "Вечером Прия спрашивает: «Murzik, what do you do? You're not a student…»",
  },
};

const oxford6: Lesson = {
  id: "en-a1-oxford-6",
  level: "A1",
  cityId: "en-oxford",
  number: 6,
  title: "Are you a student? — Ты студент?",
  minutes: 7,
  goals: ["Назвать профессию", "Сказать a student, a cook", "Спросить о чужой профессии"],
  vocabNote: "Перед профессией в английском обязательно a: I'm a student, she's a teacher. По-русски этого слова нет.",
  vocab: [
    v("enox6-1", "I'm a student.", "Я студентка.", "Прия с рюкзаком и стопкой тетрадей.", "Послушать I'm a student", p("l6-1"), "[айм э стью́дэнт]"),
    v("enox6-2", "Tom is a photographer.", "Том — фотограф.", "Том фотографирует башни колледжа.", "Послушать Tom is a photographer", p("l6-2"), "[том из э фэто́грэфэ]"),
    v("enox6-3", "She's a teacher.", "Она учительница.", "Женщина в очках у доски с мелом.", "Послушать She's a teacher", p("l6-3"), "[шиз э ти́чэ]"),
    v("enox6-4", "Mrs Hope was a cook.", "Миссис Хоуп была поваром.", "Старая фотография: молодая миссис Хоуп в белом колпаке у плиты.", "Послушать Mrs Hope was a cook", p("l6-4"), "[ми́сиз хоуп уоз э кук]"),
    v("enox6-5", "What's your job?", "Кем ты работаешь?", "Прия с любопытством наклоняется к Мурзику.", "Послушать What's your job", p("l6-5"), "[уотс ё джоб]"),
    v("enox6-6", "I want to be a cook.", "Я хочу быть поваром.", "Мурзик в маленьком поварском колпаке мечтательно улыбается.", "Послушать I want to be a cook", p("l6-6"), "[ай уонт ту би э кук]"),
    v("enox6-7", "Good idea!", "Хорошая идея!", "Прия хлопает в ладоши.", "Послушать Good idea", p("l6-7"), "[гуд айди́э]"),
  ],
  dialogue: {
    title: "Страница из книги",
    note: "Was — «был, была» (прошлое от is). Marmalade — апельсиновый джем: его делают в Оксфорде больше ста лет.",
    lines: [
      line("priya", "Murzik, what's your job? You're not a student.", "Мурзик, кем ты работаешь? Ты же не студент."),
      line("murzik", "I'm not a cook yet… but I want to be a cook!", "Я пока не повар… но я хочу быть поваром!"),
      line("priya", "Good idea! Mrs Hope was a cook. My gran was a cook too.", "Хорошая идея! Миссис Хоуп была поваром. Моя бабушка тоже была поваром."),
      line("priya", "And look — this is from Mrs Hope's book.", "И смотри — это из книги миссис Хоуп."),
      line("murzik", "A page! The recipe for marmalade!", "Страница! Рецепт апельсинового джема!"),
      line("tom", "Murzik, it's your second page!", "Мурзик, это твоя вторая страница!"),
    ],
    gist: choice("enox6-d1", "Что дарит Прия?", [
      ["Страницу из книги миссис Хоуп.", true],
      ["Поварской колпак.", false],
      ["Свою фотографию.", false],
    ]),
  },
  grammar: [
    {
      title: "A перед профессией",
      paragraphs: [
        "Перед словом об одном человеке или одной вещи ставят a: a student, a cook, a page. По-русски такого слова нет, поэтому его легко забыть.",
        "Если слово начинается с гласного звука, вместо a говорят an: an artist, an engineer. Подробнее — в следующем городе.",
      ],
      examples: [
        { ru: "Tom is a photographer.", en: "Том — фотограф." },
        { ru: "I'm not a teacher. I'm a student.", en: "Я не учитель. Я студент." },
      ],
    },
  ],
  tasks: [
    choice("enox6-t1", "Как сказать «Она учительница»?", [
      ["She's a teacher.", true],
      ["She's teacher.", false],
      ["She teacher.", false],
    ], { skill: "grammar" }),
    listen("enox6-t2", "Послушай. Кто он?", "He's a cook.", [
      ["Повар.", true],
      ["Студент.", false],
      ["Фотограф.", false],
    ]),
    match("enox6-t3", "Соедини пары.", [
      ["a student", "студент"],
      ["a teacher", "учитель"],
      ["a cook", "повар"],
      ["a photographer", "фотограф"],
    ], { skill: "words" }),
    missing("enox6-t4", "Какой буквы не хватает? («повар»)", "co", "k", "o", ["o", "u", "a"]),
    speak("enox6-t5", "What's your job?", "I'm a teacher.", "Я учитель.", { help: "Ответь вслух, кем ты работаешь." }),
    choice("enox6-t6", "Тебя спрашивают: Is it far? Как сказать «Нет»?", [
      ["No, it isn't.", true],
      ["No, it is.", false],
      ["No, I'm not.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "marmalade",
    itemName: "Банка оксфордского джема",
    itemNameRu: "Marmalade",
    ru: "Hooray! A jar of marmalade!",
    en: "Ура! Банка апельсинового джема!",
    a11y: "Стеклянная банка густого оранжевого апельсинового джема с полосками корочки, на крышке клетчатая ткань.",
    image: p("marmalade"),
    steps: ["Мурзик и Прия варят джем по рецепту со страницы.", "Пахнет апельсинами на весь дом.", "Получается целая банка!", "На полях страницы — записка миссис Хоуп."],
    bridge: "Завтра Том и Мурзик уезжают. Прия грустит: «Already?» — «Уже?»",
  },
};

const oxford7: Lesson = {
  id: "en-a1-oxford-7",
  level: "A1",
  cityId: "en-oxford",
  number: 7,
  title: "Goodbye, Oxford! — Пока, Оксфорд!",
  minutes: 8,
  goals: ["Рассказать о себе: имя, страна, возраст, профессия", "Спросить то же у собеседника", "Вспомнить все слова Оксфорда"],
  vocabNote: "Повторяем to be: I'm, you're, he's, she's, we're, they're. И отрицание: I'm not, isn't, aren't.",
  vocab: [
    v("enox7-1", "Tell me about yourself.", "Расскажи о себе.", "Прия садится напротив Мурзика с чашкой чая.", "Послушать Tell me about yourself", p("l7-1"), "[тэл ми эба́ут ёсэ́лф]"),
    v("enox7-2", "I'm six and I'm from Russia.", "Мне шесть, и я из России.", "Мурзик показывает шесть пальцев и маленький глобус.", "Послушать I'm six and I'm from Russia", p("l7-2"), "[айм сикс энд айм фром ра́ша]"),
    v("enox7-3", "Where is the next page?", "Где следующая страница?", "Мурзик листает книгу рецептов с пустыми местами.", "Послушать Where is the next page", p("l7-3"), "[уэ́а из зэ нэкст пэйдж]"),
    v("enox7-4", "It's in Bath.", "Она в Бате.", "Прия показывает на карте маленький город к западу от Лондона.", "Послушать It's in Bath", p("l7-4"), "[итс ин ба:с]"),
    v("enox7-5", "Come back soon!", "Возвращайся скорее!", "Прия машет с перрона.", "Послушать Come back soon", p("l7-5"), "[кам бэк сун]"),
    v("enox7-6", "We'll miss you.", "Мы будем скучать.", "Друзья Прии грустно машут.", "Послушать We'll miss you", p("l7-6"), "[уил мис ю]"),
    v("enox7-7", "Take care!", "Береги себя!", "Прия обнимает Мурзика на прощание.", "Послушать Take care", p("l7-7"), "[тэйк кэ́а]"),
  ],
  dialogue: {
    title: "На перроне",
    note: "Next — «следующий». Bath [ба:с] — старинный город с римскими банями и чайными.",
    lines: [
      line("murzik", "Priya, where is the next page?", "Прия, где следующая страница?"),
      line("priya", "Mrs Hope's list says: Mrs Green, Bath. She's a baker.", "В списке миссис Хоуп написано: миссис Грин, Бат. Она пекарь."),
      line("tom", "Bath isn't far. It's near!", "Бат недалеко. Он близко!"),
      line("priya", "This teapot is for your café, Murzik.", "Этот чайник — для твоего кафе, Мурзик."),
      line("murzik", "Thank you, Priya! We'll miss you.", "Спасибо, Прия! Мы будем скучать."),
      line("priya", "Come back soon! Take care!", "Приезжайте скорее снова! Берегите себя!"),
    ],
    gist: choice("enox7-d1", "Куда едут Мурзик и Том?", [
      ["В Бат, к миссис Грин.", true],
      ["В Лондон, к миссис Хоуп.", false],
      ["В Индию.", false],
    ]),
  },
  grammar: [
    {
      title: "Рассказ о себе",
      paragraphs: [
        "Всё, что нужно, чтобы рассказать о себе, — глагол to be: My name is… I'm from… I'm … (возраст). I'm a … (профессия).",
        "И о других: He's from London. She's twenty. They're students. We're friends.",
      ],
      examples: [
        { ru: "My name is Priya. I'm twenty. I'm a student.", en: "Меня зовут Прия. Мне двадцать. Я студентка." },
        { ru: "Tom is from London. He's a photographer.", en: "Том из Лондона. Он фотограф." },
      ],
    },
  ],
  tasks: [
    listen("enox7-t1", "Аудиоэкзамен. Что рассказывает девушка?", "My name is Ana. I'm from Spain. I'm nineteen. I'm a student.", [
      ["Ана из Испании, ей девятнадцать, она студентка.", true],
      ["Ана из Англии, ей девяносто, она учительница.", false],
      ["Ана из Индии, ей девять, она повар.", false],
    ]),
    choice("enox7-t2", "Выбери предложение без ошибки.", [
      ["He's a photographer.", true],
      ["He photographer.", false],
      ["He are a photographer.", false],
    ], { skill: "grammar" }),
    match("enox7-t3", "Соедини пары.", [
      ["next", "следующий"],
      ["Take care!", "Береги себя!"],
      ["Come back soon!", "Приезжай снова!"],
      ["We'll miss you.", "Мы будем скучать."],
    ], { skill: "words" }),
    spell("enox7-t4", "Собери из букв слово «страница».", "page"),
    speak("enox7-t5", "Tell me about yourself.", "My name is Alex. I'm from Russia. I'm a teacher.", "Меня зовут Алекс. Я из России. Я учитель.", { help: "Расскажи вслух о себе: имя, страна, профессия." }),
    script("enox7-t6", "Вспомни весь Оксфорд. Закончи разговоры.", [
      { speaker: "Прия", text: "Where are you from?" },
      { speaker: "Ты", answer: "I'm from Russia.", options: ["I'm from Russia.", "I'm Russia.", "I from Russia."] },
      { speaker: "Прия", text: "How old are you?" },
      { speaker: "Ты", answer: "I'm thirty.", options: ["I'm thirty.", "I have thirty.", "I thirty."] },
      { speaker: "Прия", text: "Are you a student?" },
      { speaker: "Ты", answer: "No, I'm not. I'm a teacher.", options: ["No, I'm not. I'm a teacher.", "No, I'm not. I'm teacher.", "No, it isn't."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "teapot",
    itemName: "Заварочный чайник в цветочек",
    itemNameRu: "Teapot",
    ru: "Hooray! A teapot!",
    en: "Ура! Заварочный чайник!",
    a11y: "Пузатый фарфоровый заварочный чайник в мелкие розовые цветочки с золотой каёмкой.",
    image: p("teapot"),
    steps: ["Прия дарит Мурзику бабушкин чайник.", "«My gran's. For your café.» — «Бабушкин. Для твоего кафе».", "Он пузатый, в мелкий цветочек.", "Мурзик бережно заворачивает его в шарф."],
    bridge: "Следующая страница — в Бате, у миссис Грин.",
  },
};

const story: CityStory = {
  home: {
    name: "Комната в студенческом доме",
    nameRu: "Murzik's room in Oxford",
    image: p("home"),
    a11y: "Маленькая пустая комната со скошенным потолком в старом студенческом доме. За окном каменные башенки колледжей. Посередине чемодан Мурзика.",
  },
  keepsakeId: "teapot",
  welcomeRu: "Hello, Oxford!",
  welcomeEn: "Привет, Оксфорд!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том в Оксфорде: старинные каменные здания с башенками, студенты на велосипедах.",
  departureImage: p("departure"),
  departureA11y: "Прия и её друзья машут на прощание на оксфордском вокзале.",
  finale: [
    {
      image: p("page"),
      a11y: "Крупно: вторая страница книги рецептов, рецепт апельсинового джема. На полях записка от руки.",
      lines: [
        { en: "Вечером Мурзик вклеивает страницу в книгу. На полях — записка миссис Хоуп:" },
        { ru: "At my café, the window table was for people who were alone.", en: "В моём кафе столик у окна был для тех, кто пришёл один." },
        { en: "Мурзик думает: «Хорошее правило. У меня тоже так будет»." },
      ],
    },
    {
      image: p("teapot"),
      a11y: "Мурзик обходит свою оксфордскую комнату, которую обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свою комнату в Оксфорде. Том фотографирует её для журнала." },
        { en: "Для будущего кафе он берёт с собой чайник в цветочек." },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "Oxford complete!", en: "Оксфорд пройден!" },
        { en: "7 / 7 уроков" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Прия машет на прощание.",
      lines: [
        { ru: "Goodbye, Priya!", en: "Пока, Прия!" },
        { ru: "Next stop: Bath!", en: "Следующая остановка: Бат!" },
      ],
    },
    {
      image: p("train"),
      a11y: "Поезд едет на запад мимо зелёных холмов и маленьких деревень.",
      lines: [{ ru: "Oxford → Bath", en: "Оксфорд → Бат" }],
    },
    {
      image: pic("en/bath/arrival"),
      a11y: "Мурзик и Том в Бате: дома из медового камня полукругом, старинные римские бани, над ними пар.",
      lines: [
        { ru: "Hello, Bath!", en: "Привет, Бат!" },
        { ru: "It smells of bread!", en: "Пахнет хлебом!" },
      ],
    },
  ],
};

export const enOxford = {
  id: "en-oxford",
  name: "Оксфорд",
  nameEn: "Oxford",
  lessons: [oxford1, oxford2, oxford3, oxford4, oxford5, oxford6, oxford7],
  story,
};
