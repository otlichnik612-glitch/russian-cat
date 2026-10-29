import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "../tr/make";

/* Сидней · «Что было» · was / were, прошедшее время (-ed и неправильные глаголы), Did you…?, рассказ по порядку. */

const p = (name: string) => pic(`en/sydney/${name}`);

const sydney1: Lesson = {
  id: "en-a1-sydney-1",
  level: "A1",
  cityId: "en-sydney",
  number: 1,
  title: "Where were you? — Где ты был?",
  minutes: 7,
  goals: ["Сказать «был, была»: was, were", "Спросить: Where were you?", "Сказать «не был»: wasn't, weren't"],
  vocabNote: "Прошлое от am / is — was, от are — were: I was, he was, she was, it was; we were, you were, they were.",
  vocab: [
    v("ensy1-1", "Where were you yesterday?", "Где ты был вчера?", "Девушка с доской для сёрфинга машет Мурзику.", "Послушать Where were you yesterday", p("l1-1")),
    v("ensy1-2", "I was at the beach.", "Я был на пляже.", "Мурзик в соломенной шляпе на золотом песке.", "Послушать I was at the beach", p("l1-2")),
    v("ensy1-3", "It was warm and sunny.", "Было тепло и солнечно.", "Светит солнце, Мурзик в соломенной шляпе жмурится.", "Послушать It was warm and sunny", p("l1-3")),
    v("ensy1-4", "We were tired.", "Мы устали.", "Мурзик и Том спят в шезлонгах.", "Послушать We were tired", p("l1-4")),
    v("ensy1-5", "The flight was long.", "Перелёт был долгим.", "Мурзик зевает у иллюминатора самолёта.", "Послушать The flight was long", p("l1-5")),
    v("ensy1-6", "It wasn't cold.", "Было не холодно.", "Термометр на солнце показывает двадцать пять.", "Послушать It wasn't cold", p("l1-6")),
    v("ensy1-7", "Were you in the water?", "Ты был в воде?", "Хлоя мокрая, с доской под мышкой.", "Послушать Were you in the water", p("l1-7")),
  ],
  dialogue: {
    title: "Хлоя",
    note: "Хлоя — серфингистка и мастер пирогов, подруга миссис Хоуп. G'day! — австралийское «привет». Mate — «приятель».",
    lines: [
      line("chloe", "G'day, mate! I'm Chloe. Where were you yesterday? I waited for you!", "Привет, приятель! Я Хлоя. Где вы были вчера? Я вас ждала!"),
      line("murzik", "Sorry! We were on the plane. The flight was very long!", "Простите! Мы были в самолёте. Перелёт был очень долгим!"),
      line("chloe", "And this morning?", "А сегодня утром?"),
      line("tom", "We were at the beach. We were very tired.", "Мы были на пляже. Мы очень устали."),
      line("chloe", "Were you in the water?", "Вы были в воде?"),
      line("murzik", "Me? No! I was on the sand. It was sunny. It wasn't bad!", "Я? Нет! Я был на песке. Было солнечно. Неплохо!"),
    ],
    gist: choice("ensy1-d1", "Где были Мурзик и Том вчера?", [
      ["В самолёте.", true],
      ["На пляже.", false],
      ["У Хлои дома.", false],
    ]),
  },
  grammar: [
    {
      title: "Was / were",
      paragraphs: [
        "Прошлое от to be: I / he / she / it was, you / we / they were.",
        "Вопрос: Where were you? Was it hot? Отрицание: It wasn't cold. We weren't at home.",
      ],
      examples: [
        { ru: "I was in Toronto last week.", en: "На прошлой неделе я был в Торонто." },
        { ru: "Were they at the party? — Yes, they were.", en: "Они были на празднике? — Да." },
      ],
    },
  ],
  tasks: [
    choice("ensy1-t1", "Как сказать «Мы были на пляже»?", [
      ["We were at the beach.", true],
      ["We was at the beach.", false],
      ["We are at the beach yesterday.", false],
    ], { skill: "grammar" }),
    listen("ensy1-t2", "Послушай. Где она была?", "I was at home yesterday.", [
      ["Дома.", true],
      ["На пляже.", false],
      ["В самолёте.", false],
    ]),
    match("ensy1-t3", "Соедини пары.", [
      ["I was", "я был"],
      ["we were", "мы были"],
      ["it wasn't", "не было"],
      ["yesterday", "вчера"],
    ], { skill: "words" }),
    missing("ensy1-t4", "Какой буквы не хватает? («вчера»)", "yest", "rday", "e", ["e", "a", "i"]),
    speak("ensy1-t5", "Where were you yesterday?", "I was at work. It was a long day.", "Я был на работе. Это был длинный день.", { help: "Расскажи вслух о вчерашнем дне." }),
    choice("ensy1-t6", "Как сказать «Мне исполнится семь»?", [
      ["I'm going to be seven.", true],
      ["I going to be seven.", false],
      ["I'm going be seven.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "deckchair",
    itemName: "Шезлонг",
    itemNameRu: "Deckchair",
    ru: "Hooray! A deckchair!",
    en: "Ура! Шезлонг!",
    a11y: "Деревянный шезлонг с полосатой тканью в синюю и белую полоску стоит у окна с видом на море.",
    image: p("deckchair"),
    steps: ["Хлоя показывает Мурзику комнату у моря.", "У окна стоит полосатый шезлонг.", "«For watching the sea!» — «Чтобы смотреть на море!»", "Мурзик сразу засыпает в нём."],
    bridge: "Вечером Хлоя спрашивает: «So what did you do today?»",
  },
};

const sydney2: Lesson = {
  id: "en-a1-sydney-2",
  level: "A1",
  cityId: "en-sydney",
  number: 2,
  title: "I visited… — Я побывал…",
  minutes: 7,
  goals: ["Рассказать о прошлом: правильные глаголы на -ed", "Сказать: yesterday, last week, ago", "Произносить -ed правильно"],
  vocabNote: "У большинства глаголов прошлое — это -ed: walk → walked, visit → visited, watch → watched. Форма одна для всех: I walked, she walked, they walked.",
  vocab: [
    v("ensy2-1", "We visited the Opera House.", "Мы побывали в здании оперы.", "Мурзик и Том перед белым зданием оперы, похожим на паруса.", "Послушать We visited the Opera House", p("l2-1")),
    v("ensy2-2", "I walked to the harbour.", "Я дошёл пешком до гавани.", "Мурзик идёт по набережной к гавани.", "Послушать I walked to the harbour", p("l2-2")),
    v("ensy2-3", "Tom watched the surfers.", "Том смотрел на сёрфингистов.", "Том на песке смотрит на волны с сёрфингистами.", "Послушать Tom watched the surfers", p("l2-3")),
    v("ensy2-4", "We stayed there all day.", "Мы пробыли там весь день.", "Солнце садится над гаванью.", "Послушать We stayed there all day", p("l2-4")),
    v("ensy2-5", "I liked the koalas.", "Мне понравились коалы.", "Коала обнимает ветку эвкалипта.", "Послушать I liked the koalas", p("l2-5")),
    v("ensy2-6", "last week", "на прошлой неделе", "Стрелка на календаре показывает назад на неделю.", "Послушать last week", p("l2-6")),
    v("ensy2-7", "two days ago", "два дня назад", "Два листка календаря назад.", "Послушать two days ago", p("l2-7")),
  ],
  dialogue: {
    title: "Первый день в Сиднее",
    note: "Opera House — знаменитое здание оперы в Сиднее. Zoo — «зоопарк». Cute — «милый».",
    lines: [
      line("chloe", "So what did you do today?", "Ну, что вы сегодня делали?"),
      line("murzik", "We visited the Opera House! Then I walked to the harbour.", "Мы побывали в опере! Потом я дошёл пешком до гавани."),
      line("tom", "And I watched the surfers at the beach. You were amazing, Chloe!", "А я смотрел на сёрфингистов на пляже. Хлоя, ты была потрясающей!"),
      line("chloe", "Thanks! Did you visit the zoo?", "Спасибо! А в зоопарке были?"),
      line("murzik", "Yes! We stayed there all afternoon. I liked the koalas! They're so cute!", "Да! Мы пробыли там до вечера. Мне понравились коалы! Они такие милые!"),
    ],
    gist: choice("ensy2-d1", "Что понравилось Мурзику в зоопарке?", [
      ["Коалы.", true],
      ["Кенгуру.", false],
      ["Сёрфингисты.", false],
    ]),
  },
  grammar: [
    {
      title: "Прошлое: -ed",
      paragraphs: [
        "Правильные глаголы в прошлом получают -ed: play → played, cook → cooked, like → liked (только -d), stop → stopped.",
        "Произношение: после t, d — [ид]: visited, wanted. В остальных случаях — [т] или [д]: walked [уокт], played [плэйд].",
      ],
      examples: [
        { ru: "I cooked dinner last night.", en: "Вчера вечером я готовил ужин." },
        { ru: "She played tennis two days ago.", en: "Она играла в теннис два дня назад." },
      ],
    },
  ],
  tasks: [
    choice("ensy2-t1", "Как сказать «Я смотрел фильм»?", [
      ["I watched a film.", true],
      ["I watch a film yesterday.", false],
      ["I watching a film.", false],
    ], { skill: "grammar" }),
    listen("ensy2-t2", "Послушай. Что он делал вчера?", "Yesterday I cooked dinner and watched TV.", [
      ["Готовил ужин и смотрел телевизор.", true],
      ["Гулял по пляжу.", false],
      ["Был в зоопарке.", false],
    ]),
    match("ensy2-t3", "Соедини пары.", [
      ["visit", "visited"],
      ["walk", "walked"],
      ["like", "liked"],
      ["stay", "stayed"],
    ], { skill: "words" }),
    missing("ensy2-t4", "Какой буквы не хватает? («назад»)", "a", "o", "g", ["g", "k", "q"]),
    speak("ensy2-t5", "What did you do last week?", "I visited my friends and watched a film.", "Я ходил в гости к друзьям и смотрел фильм.", { help: "Расскажи вслух о своей прошлой неделе." }),
    choice("ensy2-t6", "Как сказать «Было очень жарко»?", [
      ["It was very hot.", true],
      ["It were very hot.", false],
      ["It is very hot yesterday.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "shells",
    itemName: "Ракушки",
    itemNameRu: "Shells",
    ru: "Hooray! Sea shells!",
    en: "Ура! Ракушки!",
    a11y: "Стеклянная банка с розовыми, белыми и полосатыми ракушками стоит на подоконнике.",
    image: p("shells"),
    steps: ["На пляже Мурзик собирал ракушки весь вечер.", "Розовые, белые, полосатые.", "Хлоя дала ему стеклянную банку.", "Теперь у него маленький кусочек моря."],
    bridge: "Утром Хлоя спрашивает Тома: «Did you sleep well?»",
  },
};

const sydney3: Lesson = {
  id: "en-a1-sydney-3",
  level: "A1",
  cityId: "en-sydney",
  number: 3,
  title: "Did you…? — Ты…?",
  minutes: 7,
  goals: ["Спросить о прошлом: Did you…?", "Ответить: Yes, I did / No, I didn't", "Сказать «не делал»: I didn't…"],
  vocabNote: "Вопрос в прошлом — с did, и тогда глагол без -ed: Did you sleep well? Отрицание — didn't: I didn't swim.",
  vocab: [
    v("ensy3-1", "Did you sleep well?", "Ты хорошо спал?", "Хлоя с чашкой кофе на кухне смотрит на сонного Тома.", "Послушать Did you sleep well", p("l3-1")),
    v("ensy3-2", "Yes, I did.", "Да.", "Мурзик бодро потягивается.", "Послушать Yes, I did", p("l3-2")),
    v("ensy3-3", "No, I didn't.", "Нет.", "Том с кругами под глазами.", "Послушать No, I didn't", p("l3-3")),
    v("ensy3-4", "I didn't sleep at all.", "Я совсем не спал.", "Том ночью у окна, за окном луна.", "Послушать I didn't sleep at all", p("l3-4")),
    v("ensy3-5", "Did you hear the birds?", "Ты слышал птиц?", "На ветке сидит большая смеющаяся птица кукабарра.", "Послушать Did you hear the birds", p("l3-5")),
    v("ensy3-6", "They laughed all night!", "Они смеялись всю ночь!", "Две кукабарры на ветке широко раскрыли клювы.", "Послушать They laughed all night", p("l3-6")),
    v("ensy3-7", "Did you have breakfast?", "Ты позавтракал?", "На столе тосты с пастой и чай.", "Послушать Did you have breakfast", p("l3-7")),
  ],
  dialogue: {
    title: "Смеющиеся птицы",
    note: "Kookaburra [ку́кэбара] — австралийская птица, её крик похож на громкий смех. Jet lag — усталость после долгого перелёта.",
    lines: [
      line("chloe", "Good morning! Did you sleep well?", "Доброе утро! Хорошо спали?"),
      line("murzik", "Yes, I did!", "Да!"),
      line("tom", "No, I didn't. I didn't sleep at all. Jet lag!", "Нет. Я совсем не спал. Смена часовых поясов!"),
      line("chloe", "Did you hear the birds?", "А птиц слышали?"),
      line("tom", "Yes! They laughed all night! What are they?", "Да! Они смеялись всю ночь! Кто это?"),
      line("chloe", "Kookaburras! Did you have breakfast?", "Кукабарры! А вы позавтракали?"),
      line("murzik", "No, we didn't. We're hungry!", "Нет. Мы голодные!"),
    ],
    gist: choice("ensy3-d1", "Почему Том не спал?", [
      ["Птицы смеялись, и у него смена часовых поясов.", true],
      ["Было слишком жарко.", false],
      ["Мурзик шумел.", false],
    ]),
  },
  grammar: [
    {
      title: "Did / didn't",
      paragraphs: [
        "Вопрос: Did + кто + глагол (без -ed): Did you sleep? Did she call? Ответ: Yes, I did. / No, I didn't.",
        "Отрицание: didn't + глагол: I didn't sleep. They didn't come. Did и didn't одинаковы для всех.",
      ],
      examples: [
        { ru: "Did you like the film? — Yes, I did.", en: "Тебе понравился фильм? — Да." },
        { ru: "We didn't watch TV yesterday.", en: "Вчера мы не смотрели телевизор." },
      ],
    },
  ],
  tasks: [
    choice("ensy3-t1", "Как спросить «Ты позвонил маме?»", [
      ["Did you call your mum?", true],
      ["Did you called your mum?", false],
      ["You did call your mum?", false],
    ], { skill: "grammar" }),
    listen("ensy3-t2", "Послушай. Она позавтракала?", "No, I didn't have breakfast.", [
      ["Нет.", true],
      ["Да.", false],
      ["Позавтракала поздно.", false],
    ]),
    match("ensy3-t3", "Соедини пары.", [
      ["Yes, I did.", "Да. (о прошлом)"],
      ["No, I didn't.", "Нет. (о прошлом)"],
      ["hear", "слышать"],
      ["laugh", "смеяться"],
    ], { skill: "words" }),
    missing("ensy3-t4", "Какой буквы не хватает? («не делал»)", "did", "'t", "n", ["n", "m", "t"]),
    speak("ensy3-t5", "Did you sleep well?", "Yes, I did. Thank you!", "Да, спасибо!", { help: "Ответь вслух." }),
    choice("ensy3-t6", "Как сказать «Мы побывали в музее»?", [
      ["We visited the museum.", true],
      ["We visit the museum yesterday.", false],
      ["We visiting the museum.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "surfboard",
    itemName: "Маленькая доска для сёрфинга",
    itemNameRu: "Little surfboard",
    ru: "Hooray! A little surfboard!",
    en: "Ура! Маленькая доска для сёрфинга!",
    a11y: "Маленькая доска для сёрфинга, расписанная волнами и солнцем, стоит у стены.",
    image: p("surfboard"),
    steps: ["Хлоя достаёт из гаража маленькую доску.", "«My first board! I was six.» — «Моя первая доска! Мне было шесть».", "Она дарит её Мурзику.", "Мурзик не будет на ней кататься. Но она такая красивая!"],
    bridge: "Хлоя зовёт всех на пикник и обещает рассказать, что было вчера.",
  },
};

const sydney4: Lesson = {
  id: "en-a1-sydney-4",
  level: "A1",
  cityId: "en-sydney",
  number: 4,
  title: "I went to the beach — Я ходил на пляж",
  minutes: 7,
  goals: ["Использовать неправильные глаголы: went, had, saw, made", "Рассказать о вчерашнем дне", "Запомнить ate, got up, came"],
  vocabNote: "У некоторых глаголов прошлое особое, их нужно запомнить: go → went, have → had, see → saw, make → made, eat → ate, get up → got up, come → came.",
  vocab: [
    v("ensy4-1", "I went to the beach.", "Я ходил на пляж.", "Мурзик бежит по песку к морю.", "Послушать I went to the beach", p("l4-1")),
    v("ensy4-2", "We had a picnic.", "Мы устроили пикник.", "Плед на траве, корзина с едой, вид на гавань.", "Послушать We had a picnic", p("l4-2")),
    v("ensy4-3", "I saw a whale!", "Я видел кита!", "Из воды показывается огромный хвост кита.", "Послушать I saw a whale", p("l4-3")),
    v("ensy4-4", "Chloe made pies.", "Хлоя испекла пироги.", "Хлоя достаёт из духовки румяные пирожки.", "Послушать Chloe made pies", p("l4-4")),
    v("ensy4-5", "We ate a lot.", "Мы много съели.", "Пустые тарелки и крошки на пледе.", "Послушать We ate a lot", p("l4-5")),
    v("ensy4-6", "I got up at six.", "Я встал в шесть.", "Будильник на шести, за окном рассвет.", "Послушать I got up at six", p("l4-6")),
    v("ensy4-7", "My friends came too.", "Мои друзья тоже пришли.", "К пледу подходят друзья Хлои с досками.", "Послушать My friends came too", p("l4-7")),
  ],
  dialogue: {
    title: "Пикник",
    note: "Meat pie — австралийский пирожок с мясом. Waves — «волны».",
    lines: [
      line("chloe", "Yesterday I got up at six and went to the beach. The waves were great!", "Вчера я встала в шесть и пошла на пляж. Волны были отличные!"),
      line("murzik", "Did you see a whale?", "Ты видела кита?"),
      line("chloe", "Yes, I did! I saw a whale near the beach!", "Да! Я видела кита у самого пляжа!"),
      line("tom", "Wow! And then?", "Ого! А потом?"),
      line("chloe", "Then I made meat pies. My friends came and we had a picnic.", "Потом я испекла пирожки с мясом. Пришли мои друзья, и мы устроили пикник."),
      line("murzik", "Did you eat all the pies?", "Вы съели все пирожки?"),
      line("chloe", "No! We ate a lot, but these are for you!", "Нет! Мы съели много, но эти — для вас!"),
    ],
    gist: choice("ensy4-d1", "Что видела Хлоя у пляжа?", [
      ["Кита.", true],
      ["Акулу.", false],
      ["Коалу.", false],
    ]),
  },
  grammar: [
    {
      title: "Неправильные глаголы",
      paragraphs: [
        "Самые частые: go — went, have — had, see — saw, make — made, eat — ate, come — came, get — got, do — did, take — took, buy — bought.",
        "В вопросах и отрицаниях всё равно did + обычная форма: Did you go? — Yes, I did. I went to the beach. I didn't see a whale.",
      ],
      examples: [
        { ru: "We went to the zoo and saw koalas.", en: "Мы ходили в зоопарк и видели коал." },
        { ru: "Did you buy a present? — Yes, I bought a book.", en: "Ты купил подарок? — Да, я купил книгу." },
      ],
    },
  ],
  tasks: [
    choice("ensy4-t1", "Как сказать «Я ходил в магазин»?", [
      ["I went to the shop.", true],
      ["I goed to the shop.", false],
      ["I go to the shop yesterday.", false],
    ], { skill: "grammar" }),
    listen("ensy4-t2", "Послушай. Что она делала?", "I had breakfast and went to work.", [
      ["Позавтракала и пошла на работу.", true],
      ["Видела кита.", false],
      ["Испекла пироги.", false],
    ]),
    match("ensy4-t3", "Соедини пары.", [
      ["go", "went"],
      ["see", "saw"],
      ["eat", "ate"],
      ["make", "made"],
    ], { skill: "words" }),
    spell("ensy4-t4", "Собери из букв слово «кит».", "whale"),
    speak("ensy4-t5", "What did you do yesterday?", "I got up at seven, had breakfast and went to work.", "Я встал в семь, позавтракал и пошёл на работу.", { help: "Расскажи вслух про вчерашний день." }),
    choice("ensy4-t6", "Как ответить «Нет» на вопрос Did you sleep well?", [
      ["No, I didn't.", true],
      ["No, I don't.", false],
      ["No, I wasn't sleep.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "picnic-basket",
    itemName: "Корзина для пикника",
    itemNameRu: "Picnic basket",
    ru: "Hooray! A picnic basket!",
    en: "Ура! Корзина для пикника!",
    a11y: "Большая плетёная корзина для пикника с клетчатой подкладкой, внутри тарелки и чашки на ремешках.",
    image: p("picnic-basket"),
    steps: ["После пикника Хлоя отдаёт Мурзику свою корзину.", "Внутри — тарелки и чашки на ремешках.", "«For picnics with your guests!» — «Для пикников с гостями!»", "Мурзик ставит её у двери."],
    bridge: "Вечером Мурзик пишет в дневнике о своём дне — по порядку.",
  },
};

const sydney5: Lesson = {
  id: "en-a1-sydney-5",
  level: "A1",
  cityId: "en-sydney",
  number: 5,
  title: "First, then, finally — Сначала, потом, наконец",
  minutes: 7,
  goals: ["Рассказывать по порядку: first, then, after that, finally", "Связать события: and, but", "Написать маленький рассказ о дне"],
  vocabNote: "First — сначала, then — потом, after that — после этого, finally — в конце, наконец. Эти слова ставят в начало предложения.",
  vocab: [
    v("ensy5-1", "First, I got up.", "Сначала я встал.", "Мурзик выбирается из кровати.", "Послушать First, I got up", p("l5-1")),
    v("ensy5-2", "Then I had a shower.", "Потом я принял душ.", "Мурзик неохотно стоит под душем, шерсть торчит.", "Послушать Then I had a shower", p("l5-2")),
    v("ensy5-3", "After that, we went to the market.", "После этого мы пошли на рынок.", "Мурзик и Хлоя на рынке с фруктами.", "Послушать After that, we went to the market", p("l5-3")),
    v("ensy5-4", "Finally, we came home.", "Наконец, мы вернулись домой.", "Мурзик с пакетами у двери дома.", "Послушать Finally, we came home", p("l5-4")),
    v("ensy5-5", "It was a great day.", "Это был отличный день.", "Мурзик пишет в дневнике и улыбается.", "Послушать It was a great day", p("l5-5")),
    v("ensy5-6", "my diary", "мой дневник", "Толстый дневник путешествий с наклейками городов.", "Послушать my diary", p("l5-6")),
    v("ensy5-7", "I wrote in my diary.", "Я написал в дневнике.", "Мурзик пишет перьевой ручкой.", "Послушать I wrote in my diary", p("l5-7")),
  ],
  dialogue: {
    title: "Дневник Мурзика",
    note: "Write — wrote (прошлое). Mango — манго.",
    lines: [
      line("chloe", "Murzik, what are you writing?", "Мурзик, что ты пишешь?"),
      line("murzik", "My diary. Listen: \"First, I got up at seven. Then I had a shower.\"", "Свой дневник. Послушай: «Сначала я встал в семь. Потом принял душ»."),
      line("chloe", "A shower? A cat?", "Душ? Кот?"),
      line("murzik", "Yes, but I didn't like it! \"After that, we went to the market and bought mangoes.\"", "Да, но мне не понравилось! «После этого мы пошли на рынок и купили манго»."),
      line("tom", "And finally?", "А в конце?"),
      line("murzik", "\"Finally, we came home. It was a great day!\"", "«Наконец, мы вернулись домой. Это был отличный день!»"),
    ],
    gist: choice("ensy5-d1", "Что купили на рынке?", [
      ["Манго.", true],
      ["Пирожки.", false],
      ["Ракушки.", false],
    ]),
  },
  grammar: [
    {
      title: "Рассказ по порядку",
      paragraphs: [
        "First, … Then … After that, … Finally, … — с этими словами любой рассказ звучит понятно и красиво.",
        "And — «и», but — «но», so — «поэтому»: It was hot, so we went to the beach. I liked the market, but I didn't like the shower.",
      ],
      examples: [
        { ru: "First, we had lunch. Then we went to the beach.", en: "Сначала мы пообедали. Потом пошли на пляж." },
        { ru: "It was cold, so we stayed at home.", en: "Было холодно, поэтому мы остались дома." },
      ],
    },
  ],
  tasks: [
    choice("ensy5-t1", "Какое слово значит «наконец, в конце»?", [
      ["finally", true],
      ["first", false],
      ["then", false],
    ], { skill: "grammar" }),
    listen("ensy5-t2", "Послушай. Что было сначала?", "First, we had breakfast. Then we went to the zoo.", [
      ["Завтрак.", true],
      ["Зоопарк.", false],
      ["Пляж.", false],
    ]),
    match("ensy5-t3", "Соедини пары.", [
      ["first", "сначала"],
      ["then", "потом"],
      ["after that", "после этого"],
      ["finally", "наконец"],
    ], { skill: "words" }),
    missing("ensy5-t4", "Какой буквы не хватает? («дневник»)", "dia", "y", "r", ["r", "l", "w"]),
    speak("ensy5-t5", "Tell me about your morning.", "First, I got up. Then I had breakfast. After that, I went to work.", "Сначала я встал. Потом позавтракал. После этого пошёл на работу.", { help: "Расскажи вслух о своём утре по порядку." }),
    choice("ensy5-t6", "Как сказать «Я видел кита»?", [
      ["I saw a whale.", true],
      ["I seed a whale.", false],
      ["I see a whale yesterday.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "beach-towel",
    itemName: "Пляжное полотенце",
    itemNameRu: "Beach towel",
    ru: "Hooray! A beach towel!",
    en: "Ура! Пляжное полотенце!",
    a11y: "Большое пляжное полотенце в жёлтую и голубую полоску сушится на перилах балкона.",
    image: p("beach-towel"),
    steps: ["После душа Мурзик мокрый и несчастный.", "Хлоя заворачивает его в огромное пляжное полотенце.", "«It's yours now!» — «Теперь оно твоё!»", "Мурзик выглядывает из полотенца, как из норки."],
    bridge: "Вечером Хлоя просит: «Tell me your whole journey, Murzik!»",
  },
};

const sydney6: Lesson = {
  id: "en-a1-sydney-6",
  level: "A1",
  cityId: "en-sydney",
  number: 6,
  title: "My journey — Моё путешествие",
  minutes: 7,
  goals: ["Рассказать о путешествии в прошлом", "Сказать, кого встретил и чему научился", "Сказать, что понравилось больше всего"],
  vocabNote: "Meet → met (встретил), learn → learned (научился), take → took (взял), find → found (нашёл). The best — «лучший», best — «больше всего»: I liked it best.",
  vocab: [
    v("ensy6-1", "I started in London.", "Я начал в Лондоне.", "Воспоминание: вокзал в Лондоне, миссис Хоуп машет.", "Послушать I started in London", p("l6-1")),
    v("ensy6-2", "I met lots of people.", "Я встретил много людей.", "Коллаж: Прия, семья Макдональд, Шон, Маркус…", "Послушать I met lots of people", p("l6-2")),
    v("ensy6-3", "I learned to make coffee.", "Я научился варить кофе.", "Воспоминание: Мурзик рисует сердечко на кофе в Сан-Франциско.", "Послушать I learned to make coffee", p("l6-3")),
    v("ensy6-4", "I found twelve pages.", "Я нашёл двенадцать страниц.", "Книга рецептов, страницы вклеены одна за другой.", "Послушать I found twelve pages", p("l6-4")),
    v("ensy6-5", "Tom took a thousand photos.", "Том сделал тысячу фотографий.", "Гора фотографий на столе.", "Послушать Tom took a thousand photos", p("l6-5")),
    v("ensy6-6", "What did you like best?", "Что тебе понравилось больше всего?", "Хлоя подпирает щёку рукой и слушает.", "Послушать What did you like best", p("l6-6")),
    v("ensy6-7", "I liked the people best.", "Больше всего мне понравились люди.", "Мурзик прижимает лапку к сердцу.", "Послушать I liked the people best", p("l6-7")),
  ],
  dialogue: {
    title: "Вся история",
    note: "Journey — «путешествие». Thousand — «тысяча».",
    lines: [
      line("chloe", "Tell me your whole journey, Murzik!", "Расскажи всё своё путешествие, Мурзик!"),
      line("murzik", "I started in London. Mrs Hope gave me her old recipe book.", "Я начал в Лондоне. Миссис Хоуп дала мне свою старую книгу рецептов."),
      line("murzik", "Then we went to Oxford, Bath, Edinburgh, Dublin… I met lots of people!", "Потом мы поехали в Оксфорд, Бат, Эдинбург, Дублин… Я встретил столько людей!"),
      line("tom", "And I took a thousand photos!", "А я сделал тысячу фотографий!"),
      line("murzik", "In America I learned to make coffee. And I found twelve pages!", "В Америке я научился варить кофе. И нашёл двенадцать страниц!"),
      line("chloe", "What did you like best?", "А что тебе понравилось больше всего?"),
      line("murzik", "I liked the people best.", "Больше всего мне понравились люди."),
    ],
    gist: choice("ensy6-d1", "Что Мурзику понравилось больше всего?", [
      ["Люди.", true],
      ["Кофе.", false],
      ["Пляж.", false],
    ]),
  },
  grammar: [
    {
      title: "Рассказ о путешествии",
      paragraphs: [
        "Прошлое: I went, I saw, I met, I learned, I found, I took. О других: Tom took photos. Mrs Hope gave me a book (give → gave).",
        "Что понравилось: What did you like best? — I liked … best. The best day was… — Лучшим днём был…",
      ],
      examples: [
        { ru: "Last year I went to Spain. I saw the sea and made new friends.", en: "В прошлом году я ездил в Испанию. Видел море и завёл новых друзей." },
        { ru: "The best day was my birthday.", en: "Лучшим днём был мой день рождения." },
      ],
    },
  ],
  tasks: [
    choice("ensy6-t1", "Как сказать «Я встретил друга»?", [
      ["I met a friend.", true],
      ["I meeted a friend.", false],
      ["I meet a friend yesterday.", false],
    ], { skill: "grammar" }),
    listen("ensy6-t2", "Послушай. Что он нашёл?", "I found a little cat in the park.", [
      ["Котёнка в парке.", true],
      ["Ключи на пляже.", false],
      ["Книгу в кафе.", false],
    ]),
    match("ensy6-t3", "Соедини пары.", [
      ["meet", "met"],
      ["find", "found"],
      ["take", "took"],
      ["give", "gave"],
    ], { skill: "words" }),
    spell("ensy6-t4", "Собери из букв слово «путешествие».", "journey"),
    speak("ensy6-t5", "Tell me about a trip.", "Last summer I went to the sea. I swam and I made new friends.", "Прошлым летом я ездил на море. Я плавал и нашёл новых друзей.", { help: "Расскажи вслух о какой-нибудь поездке." }),
    choice("ensy6-t6", "Какое слово значит «сначала»?", [
      ["first", true],
      ["finally", false],
      ["after that", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "boomerang",
    itemName: "Расписной бумеранг",
    itemNameRu: "Boomerang",
    ru: "Hooray! A boomerang!",
    en: "Ура! Бумеранг!",
    a11y: "Деревянный бумеранг, расписанный точками и узорами, висит на стене.",
    image: p("boomerang"),
    steps: ["Хлоя дарит Мурзику расписной бумеранг.", "«A boomerang always comes back. Like you, one day!» — «Бумеранг всегда возвращается. Как и ты когда-нибудь!»", "Мурзик вешает его на стену.", "Он обязательно вернётся."],
    bridge: "Перед отъездом Хлоя открывает духовку: «And now — the most important thing».",
  },
};

const sydney7: Lesson = {
  id: "en-a1-sydney-7",
  level: "A1",
  cityId: "en-sydney",
  number: 7,
  title: "Goodbye, Sydney! — Пока, Сидней!",
  minutes: 8,
  goals: ["Рассказать о прошлом с was / were и -ed", "Задать вопросы о прошлом", "Вспомнить все слова Сиднея"],
  vocabNote: "Повторяем: was / were, -ed, went / saw / had / made, Did you…?, first / then / finally.",
  vocab: [
    v("ensy7-1", "the most important thing", "самое важное", "Хлоя открывает духовку, оттуда пахнет пирогами.", "Послушать the most important thing", p("l7-1")),
    v("ensy7-2", "the recipe for meat pies", "рецепт пирожков с мясом", "Страница с рисунком румяного пирожка.", "Послушать the recipe for meat pies", p("l7-2")),
    v("ensy7-3", "a sun umbrella", "зонт от солнца", "Большой полосатый зонт от солнца для террасы.", "Послушать a sun umbrella", p("l7-3")),
    v("ensy7-4", "for your terrace", "для твоей террасы", "Столик под зонтом на маленькой террасе кафе.", "Послушать for your terrace", p("l7-4")),
    v("ensy7-5", "The last page is in New Zealand.", "Последняя страница в Новой Зеландии.", "Хлоя показывает на карте острова рядом с Австралией.", "Послушать The last page is in New Zealand", p("l7-5")),
    v("ensy7-6", "We had a great time.", "Мы отлично провели время.", "Мурзик и Том машут Хлое на пляже.", "Послушать We had a great time", p("l7-6")),
    v("ensy7-7", "Catch you later!", "Ещё увидимся!", "Хлоя на доске машет с волны.", "Послушать Catch you later", p("l7-7")),
  ],
  dialogue: {
    title: "Тринадцатая страница",
    note: "Catch you later! — австралийское «ещё увидимся!». Grace — старейшая подруга миссис Хоуп.",
    lines: [
      line("chloe", "And now — the most important thing. This is from Mrs Hope's book.", "А теперь — самое важное. Это из книги миссис Хоуп."),
      line("murzik", "The recipe for meat pies! Page thirteen!", "Рецепт пирожков с мясом! Тринадцатая страница!"),
      line("chloe", "And this sun umbrella is for your terrace. Cafés need sun!", "А этот зонт от солнца — для твоей террасы. Кафе нужно солнце!"),
      line("tom", "Thank you, Chloe! We had a great time. Where is the last page?", "Спасибо, Хлоя! Мы отлично провели время. А где последняя страница?"),
      line("chloe", "The last page is in New Zealand. In Wellington, with Grace. She's Mrs Hope's best friend.", "Последняя страница — в Новой Зеландии. В Веллингтоне, у Грейс. Она лучшая подруга миссис Хоуп."),
      line("murzik", "The last page! Goodbye, Chloe!", "Последняя страница! Пока, Хлоя!"),
      line("chloe", "Catch you later, mate!", "Ещё увидимся, приятель!"),
    ],
    gist: choice("ensy7-d1", "Где последняя страница?", [
      ["В Веллингтоне, у Грейс.", true],
      ["В Сиднее, у Хлои.", false],
      ["В Лондоне, у миссис Хоуп.", false],
    ]),
  },
  grammar: [
    {
      title: "Прошлое: всё вместе",
      paragraphs: [
        "Был: I was, we were. Делал: I walked, I visited (-ed), I went, I saw, I had (особые формы).",
        "Вопрос: Did you…? — Yes, I did. / No, I didn't. Порядок: First… Then… After that… Finally…",
      ],
      examples: [
        { ru: "Yesterday was great. First, we went to the beach. Then we had a picnic.", en: "Вчера было здорово. Сначала мы пошли на пляж. Потом устроили пикник." },
        { ru: "Did you see the Opera House? — Yes, we did. It was beautiful.", en: "Вы видели здание оперы? — Да. Оно прекрасно." },
      ],
    },
  ],
  tasks: [
    listen("ensy7-t1", "Аудиоэкзамен. Что рассказывает Мурзик?", "Yesterday was great. First, I went to the beach. Then I saw the surfers. Finally, I had a picnic with Chloe.", [
      ["Сначала пляж, потом кит, в конце пикник с Хлоей.", true],
      ["Сначала пикник, потом зоопарк, в конце пляж.", false],
      ["Он весь день был дома.", false],
    ]),
    choice("ensy7-t2", "Выбери правильное предложение.", [
      ["We went to the zoo and saw koalas.", true],
      ["We goed to the zoo and seed koalas.", false],
      ["We go to the zoo and see koalas yesterday.", false],
    ], { skill: "grammar" }),
    match("ensy7-t3", "Соедини пары.", [
      ["terrace", "терраса"],
      ["the last page", "последняя страница"],
      ["We had a great time.", "Мы отлично провели время."],
      ["Catch you later!", "Ещё увидимся!"],
    ], { skill: "words" }),
    spell("ensy7-t4", "Собери из букв слово «последний».", "last"),
    speak("ensy7-t5", "What did you do last weekend?", "First, I went to the park. Then I met my friends. It was a great day!", "Сначала я пошёл в парк. Потом встретился с друзьями. Отличный был день!", { help: "Расскажи вслух о прошлых выходных по порядку." }),
    script("ensy7-t6", "Вспомни весь Сидней. Закончи разговоры.", [
      { speaker: "Хлоя", text: "Where were you yesterday?" },
      { speaker: "Ты", answer: "I was at the beach.", options: ["I was at the beach.", "I were at the beach.", "I am at the beach yesterday."] },
      { speaker: "Хлоя", text: "Did you swim?" },
      { speaker: "Ты", answer: "No, I didn't. It was too cold.", options: ["No, I didn't. It was too cold.", "No, I don't. It is too cold.", "No, I didn't swam."] },
      { speaker: "Хлоя", text: "What did you do?" },
      { speaker: "Ты", answer: "I had a picnic and saw the surfers!", options: ["I had a picnic and saw the surfers!", "I have a picnic and see the surfers!", "I haved a picnic and seed the surfers!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "parasol",
    itemName: "Зонт от солнца для террасы",
    itemNameRu: "Sun umbrella",
    ru: "Hooray! A sun umbrella!",
    en: "Ура! Зонт от солнца!",
    a11y: "Большой сложенный зонт от солнца в жёлтую и белую полоску с деревянной ручкой.",
    image: p("parasol"),
    steps: ["Хлоя приносит большой полосатый зонт.", "«For sunny days on your terrace!» — «Для солнечных дней на твоей террасе!»", "Мурзик раскрывает его — и под ним целая тень.", "Он бережно складывает зонт и берёт с собой."],
    bridge: "Последняя страница — в Веллингтоне, у Грейс.",
  },
};

const story: CityStory = {
  home: {
    name: "Комната у моря",
    nameRu: "Murzik's room in Sydney",
    image: p("home"),
    a11y: "Пустая светлая комната с балконом. За окном синее море, пляж и сёрфингисты на волнах. Посередине чемодан Мурзика.",
  },
  keepsakeId: "parasol",
  welcomeRu: "Hello, Sydney!",
  welcomeEn: "Привет, Сидней!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том в Сиднее: белое здание оперы, похожее на паруса, синяя гавань, большой мост.",
  departureImage: p("departure"),
  departureA11y: "Хлоя с доской для сёрфинга машет на прощание на пляже.",
  finale: [
    {
      image: p("page"),
      a11y: "Крупно: тринадцатая страница книги рецептов, рецепт пирожков с мясом. На полях записка от руки.",
      lines: [
        { en: "Мурзик вклеивает тринадцатую страницу. На полях — записка миссис Хоуп:" },
        { ru: "At my café, I always had time to listen to a story.", en: "В моём кафе у меня всегда было время послушать чью-то историю." },
        { en: "Мурзик вспоминает, как Хлоя слушала всю его историю до самого конца." },
      ],
    },
    {
      image: p("parasol"),
      a11y: "Мурзик обходит свою комнату у моря, которую обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свою комнату в Сиднее. Том фотографирует её для журнала." },
        { en: "Для будущего кафе он берёт с собой зонт от солнца." },
        { en: "Осталась одна страница. Самая последняя." },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "Sydney complete!", en: "Сидней пройден!" },
        { en: "7 / 7 уроков" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Хлоя машет на прощание.",
      lines: [
        { ru: "Goodbye, Chloe!", en: "Пока, Хлоя!" },
        { ru: "Next stop: Wellington!", en: "Следующая остановка: Веллингтон!" },
      ],
    },
    {
      image: img.flight,
      a11y: "Маленький самолёт летит над морем к зелёным горам Новой Зеландии.",
      lines: [{ ru: "Sydney → Wellington", en: "Сидней → Веллингтон" }],
    },
    {
      image: pic("en/wellington/arrival"),
      a11y: "Мурзик и Том в Веллингтоне: разноцветные деревянные дома на зелёных холмах над гаванью, сильный ветер.",
      lines: [
        { ru: "Hello, Wellington!", en: "Привет, Веллингтон!" },
        { ru: "The last city!", en: "Последний город!" },
      ],
    },
  ],
};

export const enSydney = {
  id: "en-sydney",
  name: "Сидней",
  nameEn: "Sydney",
  lessons: [sydney1, sydney2, sydney3, sydney4, sydney5, sydney6, sydney7],
  story,
};
