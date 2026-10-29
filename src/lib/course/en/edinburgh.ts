import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "../tr/make";

/* Эдинбург · «Семья» · семья Макдональд: члены семьи, have got / has got, my / his / her / our / their, 's, внешность, комнаты. */

const p = (name: string) => pic(`en/edinburgh/${name}`);

const edinburgh1: Lesson = {
  id: "en-a1-edinburgh-1",
  level: "A1",
  cityId: "en-edinburgh",
  number: 1,
  title: "This is my family — Это моя семья",
  minutes: 7,
  goals: ["Назвать членов семьи", "Представить семью: This is my…", "Сказать mum, dad и mother, father"],
  vocabNote: "Mum и dad — «мама» и «папа», по-домашнему. Mother и father — «мать» и «отец», чуть официальнее. В Америке говорят mom вместо mum.",
  vocab: [
    v("ened1-1", "This is my family.", "Это моя семья.", "Большая семья стоит у дверей серого каменного дома.", "Послушать This is my family", p("l1-1")),
    v("ened1-2", "my mum and dad", "мои мама и папа", "Мама с короткой стрижкой и рыжий бородатый папа обнимаются.", "Послушать my mum and dad", p("l1-2")),
    v("ened1-3", "my brother", "мой брат", "Мальчик лет десяти с веснушками корчит смешную рожицу.", "Послушать my brother", p("l1-3")),
    v("ened1-4", "my sister", "моя сестра", "Девочка с рыжими косичками и книгой в руках.", "Послушать my sister", p("l1-4")),
    v("ened1-5", "They're twins.", "Они близнецы.", "Мальчик и девочка одного роста с одинаковыми веснушками.", "Послушать They're twins", p("l1-5")),
    v("ened1-6", "my granny", "моя бабушка", "Пожилая женщина в очках вяжет у камина.", "Послушать my granny", p("l1-6")),
    v("ened1-7", "my parents", "мои родители", "Мама и папа машут с крыльца.", "Послушать my parents", p("l1-7")),
  ],
  dialogue: {
    title: "Семья Макдональд",
    note: "Granny — «бабуля» (так часто говорят в Шотландии). Twins — «близнецы».",
    lines: [
      line("fiona", "Hello! Welcome to Edinburgh! I'm Fiona.", "Здравствуйте! Добро пожаловать в Эдинбург! Я Фиона."),
      line("fiona", "This is my family. This is my husband, Ian.", "Это моя семья. Это мой муж, Иэн."),
      line("ian", "Hello! And these are our twins, Rory and Isla.", "Здравствуйте! А это наши близнецы, Рори и Айла."),
      line("rory", "Hi! Isla is my sister. She's very clever.", "Привет! Айла — моя сестра. Она очень умная."),
      line("isla", "And Rory is my brother. He's very funny!", "А Рори — мой брат. Он очень смешной!"),
      line("fiona", "And that's Granny. She's in the kitchen.", "А это бабуля. Она на кухне."),
    ],
    gist: choice("ened1-d1", "Кто Рори и Айла?", [
      ["Брат и сестра, близнецы.", true],
      ["Родители Фионы.", false],
      ["Друзья Тома.", false],
    ]),
  },
  grammar: [
    {
      title: "My, your, our",
      paragraphs: [
        "My — «мой, моя, мои», your — «твой, ваш», our — «наш». Они не меняются: my brother, my sister, my parents.",
        "Представить кого-то: This is my brother. Несколько человек: These are my parents.",
      ],
      examples: [
        { ru: "This is my mum.", en: "Это моя мама." },
        { ru: "These are our children.", en: "Это наши дети." },
      ],
    },
  ],
  tasks: [
    choice("ened1-t1", "Как сказать «Это мои родители»?", [
      ["These are my parents.", true],
      ["This is my parents.", false],
      ["These is my parents.", false],
    ], { skill: "grammar" }),
    listen("ened1-t2", "Послушай. Кто это?", "This is my sister.", [
      ["Сестра.", true],
      ["Брат.", false],
      ["Мама.", false],
    ]),
    match("ened1-t3", "Соедини пары.", [
      ["mum", "мама"],
      ["dad", "папа"],
      ["brother", "брат"],
      ["sister", "сестра"],
    ], { skill: "words" }),
    missing("ened1-t4", "Какой буквы не хватает? («семья»)", "fam", "ly", "i", ["i", "e", "y"]),
    speak("ened1-t5", "Tell me about your family.", "This is my family. This is my mum and this is my dad.", "Это моя семья. Это моя мама, а это мой папа.", { help: "Представь вслух свою семью." }),
    choice("ened1-t6", "Как вежливо поблагодарить за подарок?", [
      ["Thank you! You're very kind.", true],
      ["You're welcome!", false],
      ["Here you are.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "hot-water-bottle",
    itemName: "Грелка в вязаном чехле",
    itemNameRu: "Hot-water bottle",
    ru: "Hooray! A hot-water bottle!",
    en: "Ура! Грелка!",
    a11y: "Резиновая грелка в вязаном чехле в красно-зелёную клетку лежит на подушке.",
    image: p("hot-water-bottle"),
    steps: ["В Эдинбурге холодно даже летом.", "Фиона приносит грелку в вязаном чехле.", "«For cold Scottish nights!» — «Для холодных шотландских ночей!»", "Мурзик кладёт её под одеяло."],
    bridge: "За ужином Рори задаёт Мурзику сто вопросов.",
  },
};

const edinburgh2: Lesson = {
  id: "en-a1-edinburgh-2",
  level: "A1",
  cityId: "en-edinburgh",
  number: 2,
  title: "I've got a brother — У меня есть брат",
  minutes: 7,
  goals: ["Сказать «у меня есть»: I've got", "Сказать «у него есть»: he's got", "Спросить: Have you got…?"],
  vocabNote: "«У меня есть» по-английски — «я имею»: I have got = I've got. Про него или неё — has got: he's got, she's got.",
  vocab: [
    v("ened2-1", "Have you got a brother?", "У тебя есть брат?", "Рори с любопытством наклоняется к Мурзику через стол.", "Послушать Have you got a brother", p("l2-1")),
    v("ened2-2", "No, I haven't.", "Нет.", "Мурзик качает головой.", "Послушать No, I haven't", p("l2-2")),
    v("ened2-3", "I've got two cousins.", "У меня два двоюродных брата.", "Фотография: два серых кота-подростка, полосатый и пятнистый.", "Послушать I've got two cousins", p("l2-3")),
    v("ened2-4", "Have you got a pet?", "У тебя есть домашнее животное?", "Айла держит на руках морскую свинку.", "Послушать Have you got a pet", p("l2-4")),
    v("ened2-5", "Yes, I have. I've got a guinea pig.", "Да. У меня морская свинка.", "Рыжая морская свинка жуёт морковку.", "Послушать Yes, I have. I've got a guinea pig", p("l2-5")),
    v("ened2-6", "She's got a dog.", "У неё есть собака.", "Бабушка с маленькой лохматой собачкой на коленях.", "Послушать She's got a dog", p("l2-6")),
    v("ened2-7", "We haven't got a car.", "У нас нет машины.", "Вся семья едет по улице на велосипедах.", "Послушать We haven't got a car", p("l2-7")),
  ],
  dialogue: {
    title: "Сто вопросов",
    note: "Cousin — «двоюродный брат» или «двоюродная сестра». Guinea pig — «морская свинка».",
    lines: [
      line("rory", "Murzik, have you got a brother?", "Мурзик, у тебя есть брат?"),
      line("murzik", "No, I haven't. But I've got two cousins.", "Нет. Но у меня два двоюродных брата."),
      line("isla", "Have you got a pet?", "А у тебя есть домашнее животное?"),
      line("murzik", "I'm a cat! Cats haven't got pets!", "Я же кот! У котов не бывает питомцев!"),
      line("isla", "I've got a guinea pig. And Granny has got a dog.", "У меня морская свинка. А у бабули есть собака."),
      line("rory", "And Dad has got red hair!", "А у папы рыжие волосы!"),
    ],
    gist: choice("ened2-d1", "Что есть у Айлы?", [
      ["Морская свинка.", true],
      ["Собака.", false],
      ["Кот.", false],
    ]),
  },
  grammar: [
    {
      title: "Have got / has got",
      paragraphs: [
        "I / you / we / they have got (I've got, you've got). He / she / it has got (he's got, she's got).",
        "Вопрос: Have you got…? Has she got…? Ответ: Yes, I have. / No, I haven't. Yes, she has. / No, she hasn't. Отрицание: I haven't got, she hasn't got.",
      ],
      examples: [
        { ru: "I've got a sister.", en: "У меня есть сестра." },
        { ru: "Has he got a car? — No, he hasn't.", en: "У него есть машина? — Нет." },
      ],
    },
  ],
  tasks: [
    choice("ened2-t1", "Как сказать «У неё есть собака»?", [
      ["She's got a dog.", true],
      ["She have got a dog.", false],
      ["She is a dog.", false],
    ], { skill: "grammar" }),
    listen("ened2-t2", "Послушай. Что есть у говорящего?", "I've got two sisters.", [
      ["Две сестры.", true],
      ["Два брата.", false],
      ["Одна сестра.", false],
    ]),
    match("ened2-t3", "Соедини пары.", [
      ["cousin", "двоюродный брат"],
      ["pet", "домашнее животное"],
      ["dog", "собака"],
      ["car", "машина"],
    ], { skill: "words" }),
    missing("ened2-t4", "Какой буквы не хватает? («у меня нет»)", "I have", "'t got", "n", ["n", "m", "t"]),
    speak("ened2-t5", "Have you got a brother or a sister?", "Yes, I have. I've got a sister.", "Да. У меня есть сестра.", { help: "Ответь вслух про свою семью." }),
    choice("ened2-t6", "Как сказать «Это мои родители»?", [
      ["These are my parents.", true],
      ["This are my parents.", false],
      ["These is my parents.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "heather",
    itemName: "Вереск в горшке",
    itemNameRu: "Heather",
    ru: "Hooray! Heather!",
    en: "Ура! Вереск!",
    a11y: "Маленький глиняный горшок с кустиком лилового вереска стоит на подоконнике.",
    image: p("heather"),
    steps: ["Айла выкапывает кустик вереска в саду.", "«Heather is from Scotland, like me!» — «Вереск из Шотландии, как и я!»", "Она сажает его в горшок.", "Лиловый вереск стоит на подоконнике."],
    bridge: "Утром Мурзик никак не запомнит, как кого зовут. Айла помогает.",
  },
};

const edinburgh3: Lesson = {
  id: "en-a1-edinburgh-3",
  level: "A1",
  cityId: "en-edinburgh",
  number: 3,
  title: "His name is Rory — Его зовут Рори",
  minutes: 7,
  goals: ["Сказать «его», «её», «их»: his, her, their", "Назвать имя другого человека", "Не путать his и her"],
  vocabNote: "His — «его» (о мужчине), her — «её» (о женщине), their — «их». В русском «его» и «её» похожи, в английском — совсем разные слова.",
  vocab: [
    v("ened3-1", "His name is Rory.", "Его зовут Рори.", "Айла показывает на брата, который висит вниз головой на дереве.", "Послушать His name is Rory", p("l3-1")),
    v("ened3-2", "Her name is Isla.", "Её зовут Айла.", "Рори показывает на сестру с книгой.", "Послушать Her name is Isla", p("l3-2")),
    v("ened3-3", "Her dog is called Biscuit.", "Её собаку зовут Бискит.", "Маленькая лохматая собачка с бантиком.", "Послушать Her dog is called Biscuit", p("l3-3")),
    v("ened3-4", "What's her name?", "Как её зовут?", "Мурзик шёпотом спрашивает Тома про бабушку.", "Послушать What's her name", p("l3-4")),
    v("ened3-5", "Her name is Morag.", "Её зовут Мораг.", "Бабушка в очках машет из кресла.", "Послушать Her name is Morag", p("l3-5")),
    v("ened3-6", "Our house is old.", "Наш дом старый.", "Серый каменный дом с острой крышей и трубами.", "Послушать Our house is old", p("l3-6")),
    v("ened3-7", "Their garden is big.", "У них большой сад.", "Сад за домом: яблони, качели, клумбы.", "Послушать Their garden is big", p("l3-7")),
  ],
  dialogue: {
    title: "Кто есть кто",
    note: "Biscuit — «печенье». Так зовут собаку бабушки Мораг. О своих питомцах англичане часто говорят he или she, а не it.",
    lines: [
      line("murzik", "Isla, what's your granny's name?", "Айла, как зовут твою бабушку?"),
      line("isla", "Her name is Morag.", "Её зовут Мораг."),
      line("murzik", "And what's her dog's name?", "А как зовут её собаку?"),
      line("isla", "His name is Biscuit!", "Его зовут Бискит!"),
      line("murzik", "Biscuit! That's a funny name.", "Бискит! Смешное имя."),
      line("isla", "And this is our house. Our garden is big!", "А это наш дом. У нас большой сад!"),
    ],
    gist: choice("ened3-d1", "Как зовут собаку бабушки?", [
      ["Бискит.", true],
      ["Мораг.", false],
      ["Рори.", false],
    ]),
  },
  grammar: [
    {
      title: "My, your, his, her, our, their",
      paragraphs: [
        "I → my, you → your, he → his, she → her, it → its, we → our, they → their.",
        "His — если хозяин мужчина или мальчик, her — если женщина или девочка: Rory and his sister. Isla and her brother.",
      ],
      examples: [
        { ru: "This is Ian. His hair is red.", en: "Это Иэн. У него рыжие волосы." },
        { ru: "This is Fiona and her house.", en: "Это Фиона и её дом." },
      ],
    },
  ],
  tasks: [
    choice("ened3-t1", "Айла говорит о бабушке: «Её собака маленькая». Как это сказать?", [
      ["Her dog is small.", true],
      ["His dog is small.", false],
      ["She dog is small.", false],
    ], { skill: "grammar" }),
    listen("ened3-t2", "Послушай. Как его зовут?", "His name is Ian.", [
      ["Иэн.", true],
      ["Рори.", false],
      ["Том.", false],
    ]),
    match("ened3-t3", "Соедини пары.", [
      ["his", "его"],
      ["her", "её"],
      ["our", "наш"],
      ["their", "их"],
    ], { skill: "words" }),
    missing("ened3-t4", "Какой буквы не хватает? («их»)", "th", "ir", "e", ["e", "a", "i"]),
    speak("ened3-t5", "What's your friend's name?", "His name is Max.", "Его зовут Макс.", { help: "Назови вслух имя друга или подруги: his name или her name." }),
    choice("ened3-t6", "Как спросить «У тебя есть брат?»", [
      ["Have you got a brother?", true],
      ["Are you got a brother?", false],
      ["You have got brother?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo",
    itemName: "Фото семьи Макдональд",
    itemNameRu: "Family photo",
    ru: "Hooray! A family photo!",
    en: "Ура! Семейная фотография!",
    a11y: "В деревянной рамке фотография: вся семья Макдональд, бабушка с собачкой, Мурзик и Том у дверей дома.",
    image: p("photo"),
    steps: ["Том фотографирует всю семью у дверей.", "Мурзик стоит в середине, рядом с Бискитом.", "Том печатает фото и вставляет его в рамку.", "Теперь у Мурзика есть шотландская семья!"],
    bridge: "Рори хочет поиграть с фотоаппаратом Тома. Но чей это фотоаппарат?",
  },
};

const edinburgh4: Lesson = {
  id: "en-a1-edinburgh-4",
  level: "A1",
  cityId: "en-edinburgh",
  number: 4,
  title: "Tom's camera — Фотоаппарат Тома",
  minutes: 7,
  goals: ["Сказать, чья вещь: Tom's camera", "Спросить «чей?»: Whose is this?", "Ответить: It's mine, it's yours"],
  vocabNote: "'s после имени значит «чей»: Tom's camera — фотоаппарат Тома, Isla's book — книга Айлы.",
  vocab: [
    v("ened4-1", "Whose is this?", "Чьё это?", "Рори держит в руках фотоаппарат и оглядывается.", "Послушать Whose is this", p("l4-1")),
    v("ened4-2", "It's Tom's camera.", "Это фотоаппарат Тома.", "Фотоаппарат Тома на ремешке.", "Послушать It's Tom's camera", p("l4-2")),
    v("ened4-3", "It's mine!", "Это моё!", "Том забирает фотоаппарат и смеётся.", "Послушать It's mine", p("l4-3")),
    v("ened4-4", "Is it yours?", "Это твоё?", "Айла протягивает Мурзику шарф.", "Послушать Is it yours", p("l4-4")),
    v("ened4-5", "Isla's book", "книга Айлы", "Толстая книга о драконах с закладкой.", "Послушать Isla's book", p("l4-5")),
    v("ened4-6", "Granny's glasses", "очки бабушки", "Очки лежат на вязанье.", "Послушать Granny's glasses", p("l4-6")),
    v("ened4-7", "the children's room", "детская комната", "Комната с двумя кроватями, игрушками и книгами.", "Послушать the children's room", p("l4-7")),
  ],
  dialogue: {
    title: "Чей фотоаппарат?",
    note: "Careful! — «Осторожно!» Glasses — «очки» (а ещё «стаканы»).",
    lines: [
      line("rory", "Whose is this? Is it yours, Murzik?", "Чьё это? Это твоё, Мурзик?"),
      line("murzik", "No, it isn't mine. It's Tom's camera.", "Нет, не моё. Это фотоаппарат Тома."),
      line("tom", "Yes, it's mine! Careful, Rory!", "Да, моё! Осторожно, Рори!"),
      line("isla", "And whose glasses are these?", "А чьи это очки?"),
      line("fiona", "They're Granny's glasses. Again!", "Это бабулины очки. Опять!"),
      line("rory", "Granny! Your glasses!", "Бабуля! Твои очки!"),
    ],
    gist: choice("ened4-d1", "Чей фотоаппарат?", [
      ["Тома.", true],
      ["Мурзика.", false],
      ["Рори.", false],
    ]),
  },
  grammar: [
    {
      title: "Чьё? 's и mine, yours",
      paragraphs: [
        "'s после имени — «чей»: Tom's camera, Granny's glasses. Хозяин стоит первым.",
        "Без вещи: mine (моё), yours (твоё), his (его), hers (её), ours (наше), theirs (их). Whose is this? — It's mine.",
      ],
      examples: [
        { ru: "Whose book is this? — It's Isla's.", en: "Чья это книга? — Айлы." },
        { ru: "Is this yours? — Yes, it's mine.", en: "Это твоё? — Да, моё." },
      ],
    },
  ],
  tasks: [
    choice("ened4-t1", "Как сказать «книга Айлы»?", [
      ["Isla's book", true],
      ["book Isla", false],
      ["Isla book's", false],
    ], { skill: "grammar" }),
    listen("ened4-t2", "Послушай. Чья это вещь?", "It's Fiona's bag.", [
      ["Сумка Фионы.", true],
      ["Сумка Айлы.", false],
      ["Книга Фионы.", false],
    ]),
    match("ened4-t3", "Соедини пары.", [
      ["mine", "моё"],
      ["yours", "твоё"],
      ["Whose?", "Чей?"],
      ["glasses", "очки"],
    ], { skill: "words" }),
    spell("ened4-t4", "Собери из букв слово «моё».", "mine"),
    speak("ened4-t5", "Whose is this phone?", "It's mine!", "Это мой!", { help: "Ответь вслух, что вещь твоя." }),
    choice("ened4-t6", "Как сказать «Его зовут Рори»?", [
      ["His name is Rory.", true],
      ["Her name is Rory.", false],
      ["He name is Rory.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tray",
    itemName: "Деревянный поднос",
    itemNameRu: "Wooden tray",
    ru: "Hooray! A wooden tray!",
    en: "Ура! Деревянный поднос!",
    a11y: "Старый деревянный поднос с ручками, на нём чашка чая и тарелка песочного печенья.",
    image: p("tray"),
    steps: ["Бабушка Мораг находит свои очки — на собственной голове!", "Все смеются.", "Она дарит Мурзику старый деревянный поднос.", "«For breakfast in bed!» — «Для завтрака в постели!»"],
    bridge: "Вечером Рори и Айла рисуют портреты всей семьи — и Мурзика тоже.",
  },
};

const edinburgh5: Lesson = {
  id: "en-a1-edinburgh-5",
  level: "A1",
  cityId: "en-edinburgh",
  number: 5,
  title: "Tall and kind — Высокий и добрый",
  minutes: 7,
  goals: ["Описать внешность", "Описать характер", "Сказать «у него голубые глаза»"],
  vocabNote: "Про внешность часто говорят через have got: She's got blue eyes. — У неё голубые глаза. He's got red hair. — У него рыжие волосы.",
  vocab: [
    v("ened5-1", "He's tall.", "Он высокий.", "Иэн стоит у двери и почти касается головой притолоки.", "Послушать He's tall", p("l5-1")),
    v("ened5-2", "She's short.", "Она невысокая.", "Бабушка Мораг встаёт на цыпочки, чтобы достать до полки.", "Послушать She's short", p("l5-2")),
    v("ened5-3", "He's got red hair.", "У него рыжие волосы.", "Портрет рыжего бородатого Иэна, нарисованный карандашами.", "Послушать He's got red hair", p("l5-3")),
    v("ened5-4", "She's got blue eyes.", "У неё голубые глаза.", "Портрет Фионы с большими голубыми глазами.", "Послушать She's got blue eyes", p("l5-4")),
    v("ened5-5", "She's kind.", "Она добрая.", "Бабушка Мораг укрывает спящего Бискита пледом.", "Послушать She's kind", p("l5-5")),
    v("ened5-6", "He's funny.", "Он смешной.", "Рори в огромных папиных ботинках изображает великана.", "Послушать He's funny", p("l5-6")),
    v("ened5-7", "What does he look like?", "Как он выглядит?", "Айла держит лист бумаги и карандаш, готовая рисовать.", "Послушать What does he look like", p("l5-7")),
  ],
  dialogue: {
    title: "Портреты",
    note: "Drawing — «рисунок». Whiskers — «усы» (у кота).",
    lines: [
      line("isla", "This is my drawing of Dad. He's tall and he's got red hair.", "Это мой рисунок папы. Он высокий, и у него рыжие волосы."),
      line("murzik", "It's very good! And this is your mum?", "Очень хорошо! А это твоя мама?"),
      line("isla", "Yes. She's got blue eyes. She's kind.", "Да. У неё голубые глаза. Она добрая."),
      line("rory", "And this is Murzik! He's small, he's got orange fur and long whiskers!", "А это Мурзик! Он маленький, у него рыжая шерсть и длинные усы!"),
      line("murzik", "Ha-ha! And this is Rory. He's very funny!", "Ха-ха! А это Рори. Он очень смешной!"),
    ],
    gist: choice("ened5-d1", "Как выглядит папа на рисунке?", [
      ["Высокий, с рыжими волосами.", true],
      ["Невысокий, с голубыми глазами.", false],
      ["Маленький, с длинными усами.", false],
    ]),
  },
  grammar: [
    {
      title: "Описание: is и has got",
      paragraphs: [
        "Каков человек — is: He's tall. She's kind. They're funny.",
        "Что у него есть — has got: He's got red hair. She's got blue eyes. Осторожно: he's может значить и he is, и he has.",
      ],
      examples: [
        { ru: "She's tall and she's got long hair.", en: "Она высокая, у неё длинные волосы." },
        { ru: "My brother is funny.", en: "Мой брат смешной." },
      ],
    },
  ],
  tasks: [
    choice("ened5-t1", "Как сказать «У неё голубые глаза»?", [
      ["She's got blue eyes.", true],
      ["She's blue eyes.", false],
      ["She have blue eyes.", false],
    ], { skill: "grammar" }),
    listen("ened5-t2", "Послушай. Какой он?", "He's short and very funny.", [
      ["Невысокий и очень смешной.", true],
      ["Высокий и добрый.", false],
      ["Невысокий и грустный.", false],
    ]),
    match("ened5-t3", "Соедини пары.", [
      ["tall", "высокий"],
      ["short", "невысокий"],
      ["kind", "добрый"],
      ["funny", "смешной"],
    ], { skill: "words" }),
    missing("ened5-t4", "Какой буквы не хватает? («волосы»)", "ha", "r", "i", ["i", "e", "a"]),
    speak("ened5-t5", "What does your friend look like?", "She's tall and she's got brown hair.", "Она высокая, у неё каштановые волосы.", { help: "Опиши вслух друга или подругу." }),
    choice("ened5-t6", "Как сказать «Это фотоаппарат Тома»?", [
      ["It's Tom's camera.", true],
      ["It's camera Tom.", false],
      ["It's Tom camera's.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "socks",
    itemName: "Вязаные носки",
    itemNameRu: "Woolly socks",
    ru: "Hooray! Woolly socks!",
    en: "Ура! Шерстяные носки!",
    a11y: "Маленькие шерстяные носки в зелёную и синюю полоску висят на спинке стула.",
    image: p("socks"),
    steps: ["Бабушка Мораг вязала весь вечер.", "Утром — сюрприз: маленькие полосатые носки.", "«Small socks for a small cat!» — «Маленькие носки для маленького кота!»", "Мурзик сразу надевает их."],
    bridge: "Мурзик впервые ночью ищет ванную — и теряется в большом старом доме.",
  },
};

const edinburgh6: Lesson = {
  id: "en-a1-edinburgh-6",
  level: "A1",
  cityId: "en-edinburgh",
  number: 6,
  title: "Where is the bathroom? — Где ванная?",
  minutes: 7,
  goals: ["Назвать комнаты в доме", "Спросить, где комната", "Сказать upstairs и downstairs"],
  vocabNote: "Upstairs — «наверху, наверх», downstairs — «внизу, вниз». The — когда понятно, о какой именно вещи речь: the kitchen — та самая, наша кухня.",
  vocab: [
    v("ened6-1", "Where is the bathroom?", "Где ванная?", "Мурзик в пижаме стоит в тёмном коридоре со свечой.", "Послушать Where is the bathroom", p("l6-1")),
    v("ened6-2", "It's upstairs.", "Наверху.", "Стрелка вверх по деревянной лестнице.", "Послушать It's upstairs", p("l6-2")),
    v("ened6-3", "the kitchen", "кухня", "Тёплая кухня с плитой и сушёными травами.", "Послушать the kitchen", p("l6-3")),
    v("ened6-4", "the living room", "гостиная", "Гостиная с камином и большим диваном.", "Послушать the living room", p("l6-4")),
    v("ened6-5", "my bedroom", "моя спальня", "Маленькая спальня Мурзика с грелкой на кровати.", "Послушать my bedroom", p("l6-5")),
    v("ened6-6", "It's downstairs.", "Внизу.", "Стрелка вниз по лестнице.", "Послушать It's downstairs", p("l6-6")),
    v("ened6-7", "next to the kitchen", "рядом с кухней", "Маленькая дверь рядом с кухонной.", "Послушать next to the kitchen", p("l6-7")),
  ],
  dialogue: {
    title: "Ночью в старом доме",
    note: "Go back to bed — «возвращайся в кровать». Tin — «жестяная коробка».",
    lines: [
      line("murzik", "Excuse me… Where is the bathroom?", "Простите… Где ванная?"),
      line("ian", "It's upstairs, next to your bedroom.", "Наверху, рядом с твоей спальней."),
      line("murzik", "Thank you! And… where is the kitchen?", "Спасибо! А… где кухня?"),
      line("ian", "The kitchen? It's downstairs. Why?", "Кухня? Внизу. А что?"),
      line("murzik", "I'm hungry…", "Я голодный…"),
      line("ian", "Ha-ha! Come on. There's shortbread in the tin.", "Ха-ха! Пойдём. В коробке есть песочное печенье."),
    ],
    gist: choice("ened6-d1", "Почему Мурзик спрашивает про кухню?", [
      ["Он голодный.", true],
      ["Он ищет Тома.", false],
      ["Он хочет пить чай с бабушкой.", false],
    ]),
  },
  grammar: [
    {
      title: "A или the?",
      paragraphs: [
        "A — «какой-то, один из»: a house, a room. The — «тот самый, понятно какой»: the kitchen in our house, the bathroom upstairs.",
        "Если в доме одна кухня, это the kitchen. Если говоришь о кухне вообще, впервые — a kitchen.",
      ],
      examples: [
        { ru: "It's a big house. The kitchen is downstairs.", en: "Это большой дом. Кухня внизу." },
        { ru: "Where is the bathroom?", en: "Где ванная?" },
      ],
    },
  ],
  tasks: [
    choice("ened6-t1", "В доме одна ванная. Как спросить, где она?", [
      ["Where is the bathroom?", true],
      ["Where is a bathroom?", false],
      ["Where bathroom?", false],
    ], { skill: "grammar" }),
    listen("ened6-t2", "Послушай. Где кухня?", "The kitchen is downstairs.", [
      ["Внизу.", true],
      ["Наверху.", false],
      ["Рядом со спальней.", false],
    ]),
    match("ened6-t3", "Соедини пары.", [
      ["kitchen", "кухня"],
      ["bathroom", "ванная"],
      ["bedroom", "спальня"],
      ["living room", "гостиная"],
    ], { skill: "words" }),
    spell("ened6-t4", "Собери из букв слово «кухня».", "kitchen"),
    speak("ened6-t5", "Where is your bedroom?", "My bedroom is upstairs.", "Моя спальня наверху.", { help: "Ответь вслух, где твоя спальня." }),
    choice("ened6-t6", "Как сказать «У него рыжие волосы»?", [
      ["He's got red hair.", true],
      ["He's red hair.", false],
      ["He have red hair.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "shortbread",
    itemName: "Жестяная коробка с печеньем",
    itemNameRu: "Shortbread tin",
    ru: "Hooray! A tin of shortbread!",
    en: "Ура! Коробка песочного печенья!",
    a11y: "Круглая жестяная коробка в клетку, внутри пальчики песочного печенья.",
    image: p("shortbread"),
    steps: ["Иэн и Мурзик тихо едят печенье на кухне.", "«Our secret!» — «Наш секрет!» — шепчет Иэн.", "Утром Мурзик находит у кровати целую коробку.", "Секрет раскрыт: бабушка Мораг всё слышала!"],
    bridge: "Последний вечер в Эдинбурге. Бабушка Мораг зовёт Мурзика: «I've got something for you».",
  },
};

const edinburgh7: Lesson = {
  id: "en-a1-edinburgh-7",
  level: "A1",
  cityId: "en-edinburgh",
  number: 7,
  title: "Goodbye, Edinburgh! — Пока, Эдинбург!",
  minutes: 8,
  goals: ["Рассказать о своей семье", "Описать человека", "Вспомнить все слова Эдинбурга"],
  vocabNote: "Повторяем: have got / has got, my / his / her / our / their, 's, the.",
  vocab: [
    v("ened7-1", "I've got something for you.", "У меня для тебя кое-что есть.", "Бабушка Мораг достаёт из сундука свёрток.", "Послушать I've got something for you", p("l7-1")),
    v("ened7-2", "It's from your book.", "Это из твоей книги.", "Сложенная пожелтевшая страница в руках бабушки.", "Послушать It's from your book", p("l7-2")),
    v("ened7-3", "Mrs Hope is my old friend.", "Миссис Хоуп — моя старая подруга.", "Старая фотография: две молодые девушки смеются у моря.", "Послушать Mrs Hope is my old friend", p("l7-3")),
    v("ened7-4", "a tartan blanket", "клетчатый плед", "Тёплый шерстяной плед в красно-зелёную клетку.", "Послушать a tartan blanket", p("l7-4")),
    v("ened7-5", "You're part of our family now.", "Теперь ты часть нашей семьи.", "Вся семья обнимает Мурзика.", "Послушать You're part of our family now", p("l7-5")),
    v("ened7-6", "Don't forget us!", "Не забывай нас!", "Айла протягивает Мурзику свой рисунок.", "Послушать Don't forget us", p("l7-6")),
    v("ened7-7", "Write to us!", "Пиши нам!", "Рори машет конвертом.", "Послушать Write to us", p("l7-7")),
  ],
  dialogue: {
    title: "Четвёртая страница",
    note: "Ireland — Ирландия. Dublin — столица Ирландии.",
    lines: [
      line("murzik", "Granny Morag, is this a page from Mrs Hope's book?", "Бабушка Мораг, это страница из книги миссис Хоуп?"),
      line("ian", "Yes, it is. Granny and Mrs Hope are old friends.", "Да. Бабуля и миссис Хоуп — старые подруги."),
      line("fiona", "And this tartan blanket is for your café.", "А этот клетчатый плед — для твоего кафе."),
      line("isla", "You're part of our family now, Murzik!", "Теперь ты часть нашей семьи, Мурзик!"),
      line("rory", "Don't forget us! Write to us!", "Не забывай нас! Пиши нам!"),
      line("murzik", "I won't forget you! Where's the next page?", "Я вас не забуду! А где следующая страница?"),
      line("ian", "In Dublin. Seán works in a café there. His gran is Mrs Hope's friend.", "В Дублине. Шон работает там в кафе. Его бабушка — подруга миссис Хоуп."),
    ],
    gist: choice("ened7-d1", "Куда едут Мурзик и Том?", [
      ["В Дублин, к Шону.", true],
      ["В Лондон, к миссис Хоуп.", false],
      ["В Бат, к миссис Грин.", false],
    ]),
  },
  grammar: [
    {
      title: "О семье: всё вместе",
      paragraphs: [
        "Кто есть в семье: I've got a brother and a sister. Как их зовут: His name is… Her name is… Какие они: He's tall. She's got blue eyes.",
        "Чьё: Granny's dog, Tom's camera. Где: The kitchen is downstairs.",
      ],
      examples: [
        { ru: "I've got a sister. Her name is Anna. She's very kind.", en: "У меня есть сестра. Её зовут Анна. Она очень добрая." },
        { ru: "Our house is old, but our kitchen is new.", en: "Наш дом старый, но кухня новая." },
      ],
    },
  ],
  tasks: [
    listen("ened7-t1", "Аудиоэкзамен. Что рассказывает Айла?", "I've got a brother. His name is Rory. He's funny. We've got a big house and a small dog.", [
      ["У неё брат Рори, он смешной; у них большой дом и маленькая собака.", true],
      ["У неё сестра Рори; у них маленький дом и большая собака.", false],
      ["У неё брат Иэн; у них нет собаки.", false],
    ]),
    choice("ened7-t2", "Выбери правильное предложение.", [
      ["She's got a brother. His name is Tom.", true],
      ["She have got a brother. Her name is Tom.", false],
      ["She's got a brother. She name is Tom.", false],
    ], { skill: "grammar" }),
    match("ened7-t3", "Соедини пары.", [
      ["Don't forget us!", "Не забывай нас!"],
      ["Write to us!", "Пиши нам!"],
      ["blanket", "плед"],
      ["part of our family", "часть нашей семьи"],
    ], { skill: "words" }),
    spell("ened7-t4", "Собери из букв слово «плед».", "blanket"),
    speak("ened7-t5", "Tell me about your family.", "I've got a mum, a dad and a brother. My brother is tall.", "У меня есть мама, папа и брат. Мой брат высокий.", { help: "Расскажи вслух о своей семье." }),
    script("ened7-t6", "Вспомни весь Эдинбург. Закончи разговоры.", [
      { speaker: "Рори", text: "Have you got a sister?" },
      { speaker: "Ты", answer: "Yes, I have. Her name is Anna.", options: ["Yes, I have. Her name is Anna.", "Yes, I have. His name is Anna.", "Yes, I am. Her name is Anna."] },
      { speaker: "Айла", text: "What does she look like?" },
      { speaker: "Ты", answer: "She's tall and she's got brown hair.", options: ["She's tall and she's got brown hair.", "She tall and she brown hair.", "She's got tall."] },
      { speaker: "Иэн", text: "Whose is this bag?" },
      { speaker: "Ты", answer: "It's mine!", options: ["It's mine!", "It's my!", "It's me!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tartan",
    itemName: "Клетчатый плед",
    itemNameRu: "Tartan blanket",
    ru: "Hooray! A tartan blanket!",
    en: "Ура! Клетчатый плед!",
    a11y: "Тёплый шерстяной плед в красно-зелёную шотландскую клетку сложен на кресле.",
    image: p("tartan"),
    steps: ["Фиона дарит Мурзику плед в шотландскую клетку.", "«For cold days in your café.» — «Для холодных дней в твоём кафе».", "Мурзик заворачивается в него с головой.", "Тепло, как в семье Макдональд."],
    bridge: "Следующая страница — в Дублине, у Шона.",
  },
};

const story: CityStory = {
  home: {
    name: "Комната в доме Макдональдов",
    nameRu: "Murzik's room in Edinburgh",
    image: p("home"),
    a11y: "Пустая комнатка под крышей серого каменного дома. В окне видна скала с замком. Посередине чемодан Мурзика.",
  },
  keepsakeId: "tartan",
  welcomeRu: "Hello, Edinburgh!",
  welcomeEn: "Привет, Эдинбург!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том в Эдинбурге: серый замок на высокой скале над старым городом. Ветер и мелкий дождь.",
  departureImage: p("departure"),
  departureA11y: "Вся семья Макдональд машет на прощание на вокзале, бабушка Мораг держит на руках собачку Бискит.",
  finale: [
    {
      image: p("page"),
      a11y: "Крупно: четвёртая страница книги рецептов, рецепт песочного печенья. На полях записка от руки.",
      lines: [
        { en: "Мурзик вклеивает четвёртую страницу. На полях — записка миссис Хоуп:" },
        { ru: "At my café, children always got a biscuit for free.", en: "В моём кафе дети всегда получали печенье бесплатно." },
        { en: "Мурзик вспоминает Рори и Айлу и решает: «Да. У меня тоже»." },
      ],
    },
    {
      image: p("tartan"),
      a11y: "Мурзик обходит свою комнату в доме Макдональдов, которую обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свою комнату в Эдинбурге. Том фотографирует её для журнала." },
        { en: "Для будущего кафе он берёт с собой клетчатый плед." },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "Edinburgh complete!", en: "Эдинбург пройден!" },
        { en: "7 / 7 уроков" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Семья Макдональд машет на прощание.",
      lines: [
        { ru: "Goodbye, MacDonalds!", en: "До свидания, Макдональды!" },
        { ru: "Next stop: Dublin!", en: "Следующая остановка: Дублин!" },
      ],
    },
    {
      image: p("ferry"),
      a11y: "Большой паром плывёт через серое Ирландское море, над ним чайки.",
      lines: [{ ru: "Edinburgh → Dublin", en: "Эдинбург → Дублин" }],
    },
    {
      image: pic("en/dublin/arrival"),
      a11y: "Мурзик и Том в Дублине: разноцветные двери домов, мост над рекой, где-то играет скрипка.",
      lines: [
        { ru: "Hello, Dublin!", en: "Привет, Дублин!" },
        { ru: "Listen — music!", en: "Слышишь? Музыка!" },
      ],
    },
  ],
};

export const enEdinburgh = {
  id: "en-edinburgh",
  name: "Эдинбург",
  nameEn: "Edinburgh",
  lessons: [edinburgh1, edinburgh2, edinburgh3, edinburgh4, edinburgh5, edinburgh6, edinburgh7],
  story,
};
