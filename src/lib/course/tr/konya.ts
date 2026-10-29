import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Конья · «Одежда и самочувствие» · тёплые вещи, цвета, примерка, «мне плохо», у врача, в аптеке, «мне лучше». */

const p = (name: string) => pic(`tr/konya/${name}`);

const konya1: Lesson = {
  id: "tr-a1-konya-1",
  level: "A1",
  cityId: "tr-konya",
  number: 1,
  title: "Тёплые вещи",
  minutes: 7,
  goals: ["Назвать зимнюю одежду", "Сказать, что нужно: lazım, gerek", "Купить тёплые вещи"],
  vocabNote: "Конья стоит на высоком плоскогорье. Зимой здесь снег и мороз — совсем не как у моря.",
  vocab: [
    v("trko1-1", "Hava çok soğuk.", "Очень холодно.", "Мурзик дрожит на заснеженной улице, изо рта идёт пар.", "Послушать Hava çok soğuk", p("l1-1")),
    v("trko1-2", "Kalın bir mont lazım.", "Нужна тёплая куртка.", "Том показывает на толстую куртку в витрине.", "Послушать Kalın bir mont lazım", p("l1-2")),
    v("trko1-3", "atkı", "шарф", "Длинный вязаный шарф.", "Послушать atkı", p("l1-3")),
    v("trko1-4", "bere", "шапка", "Вязаная шапка с помпоном.", "Послушать bere", p("l1-4")),
    v("trko1-5", "eldiven", "перчатки", "Пара тёплых перчаток.", "Послушать eldiven", p("l1-5")),
    v("trko1-6", "kazak", "свитер", "Толстый свитер с узором.", "Послушать kazak", p("l1-6")),
    v("trko1-7", "botlar", "ботинки, сапоги", "Пара тёплых ботинок на меху.", "Послушать botlar", p("l1-7")),
  ],
  dialogue: {
    title: "Магазин тёплых вещей",
    note: "Kış — «зима». Kalın — «толстый, тёплый» (о вещах).",
    lines: [
      line("murzik", "Brr! Hava çok soğuk!", "Брр! Очень холодно!"),
      line("tom", "Evet. Kalın bir mont lazım.", "Да. Нужна тёплая куртка."),
      line("seller", "Hoş geldiniz! Ne lazım?", "Добро пожаловать! Что вам нужно?"),
      line("murzik", "Bana bir atkı, bir bere ve eldiven lazım.", "Мне нужны шарф, шапка и перчатки."),
      line("seller", "Kazak da gerek mi?", "Свитер тоже нужен?"),
      line("tom", "Evet, bana kalın bir kazak lazım. Ve botlar!", "Да, мне нужен тёплый свитер. И ботинки!"),
      line("seller", "Buyurun. Konya'da kış çok soğuk!", "Пожалуйста. В Конье зима очень холодная!"),
    ],
    gist: choice("trko1-d1", "Что нужно Мурзику?", [
      ["Шарф, шапка и перчатки.", true],
      ["Свитер и ботинки.", false],
      ["Ничего.", false],
    ]),
  },
  grammar: [
    {
      title: "Нужно: lazım, gerek",
      paragraphs: [
        "«Мне нужно» — bana … lazım: Bana bir atkı lazım. — Мне нужен шарф. Bana — «мне», sana — «тебе».",
        "Gerek значит то же самое: Kazak gerek mi? — Свитер нужен? Рода нет, поэтому lazım подходит к любому слову.",
      ],
      examples: [
        { ru: "Bana sıcak bir kazak lazım.", en: "Мне нужен тёплый свитер." },
        { ru: "Sana eldiven gerek mi?", en: "Тебе нужны перчатки?" },
      ],
    },
  ],
  tasks: [
    choice("trko1-t1", "Как сказать «Мне нужна шапка»?", [
      ["Bana bir bere lazım.", true],
      ["Ben bir bere lazım.", false],
      ["Bana bir bere lazımım.", false],
    ], { skill: "grammar" }),
    listen("trko1-t2", "Послушай. Что нужно Тому?", "Bana kalın bir kazak lazım.", [
      ["Тёплый свитер.", true],
      ["Шарф.", false],
      ["Перчатки.", false],
    ]),
    match("trko1-t3", "Соедини пары.", [
      ["atkı", "шарф"],
      ["bere", "шапка"],
      ["eldiven", "перчатки"],
      ["kazak", "свитер"],
    ], { skill: "words" }),
    missing("trko1-t4", "Какой буквы не хватает? («шарф»)", "atk", "", "ı", ["ı", "i", "a"]),
    speak("trko1-t5", "Kışın ne lazım?", "Kışın kalın bir mont ve eldiven lazım.", "Зимой нужны тёплая куртка и перчатки.", { help: "Скажи вслух, что нужно зимой." }),
    choice("trko1-t6", "Как сказать «Я никогда не забуду»?", [
      ["Hiç unutmayacağım.", true],
      ["Hiç unutuyorum.", false],
      ["Hiç unuttum.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "corap",
    itemName: "Шерстяные носки",
    itemNameRu: "Yün çorap",
    ru: "Yaşasın! Yün çoraplar!",
    en: "Ура! Шерстяные носки!",
    a11y: "Пара толстых шерстяных носков с узором, крошечные — как раз для лап Мурзика.",
    image: p("corap"),
    steps: ["Продавец достаёт крошечные носки.", "«Hediye! Tam kedi boyu!» — «Подарок! Кошачий размер!»", "Мурзик надевает их.", "Тепло!"],
    bridge: "В шкафу столько разноцветных вещей! «Какой цвет выберешь?» — спрашивает Том.",
  },
};

const konya2: Lesson = {
  id: "tr-a1-konya-2",
  level: "A1",
  cityId: "tr-konya",
  number: 2,
  title: "Какого цвета?",
  minutes: 7,
  goals: ["Назвать основные цвета", "Спросить, какого цвета вещь", "Сказать, какой цвет любимый"],
  vocabNote: "Turkuaz — «бирюзовый». Слово пришло из французского turquoise — «турецкий» камень.",
  vocab: [
    v("trko2-1", "Ne renk?", "Какого цвета?", "Том держит в руке шарф и вопросительно смотрит.", "Послушать Ne renk", p("l2-1")),
    v("trko2-2", "kırmızı", "красный", "Красный шарф.", "Послушать kırmızı", p("l2-2")),
    v("trko2-3", "mavi", "синий, голубой", "Синяя шапка.", "Послушать mavi", p("l2-3")),
    v("trko2-4", "yeşil", "зелёный", "Зелёное пальто Тома.", "Послушать yeşil", p("l2-4")),
    v("trko2-5", "sarı", "жёлтый", "Жёлтые перчатки.", "Послушать sarı", p("l2-5")),
    v("trko2-6", "siyah, beyaz", "чёрный, белый", "Чёрная и белая перчатки рядом.", "Послушать siyah, beyaz", p("l2-6")),
    v("trko2-7", "turuncu", "оранжевый", "Мурзик в своём рыжем шарфе на фоне снега.", "Послушать turuncu", p("l2-7")),
  ],
  dialogue: {
    title: "Разноцветный шкаф",
    note: "Benim gibi — «как я». Senin montun gibi — «как твоя куртка». Kar — «снег».",
    lines: [
      line("tom", "Murzik, bu atkı ne renk?", "Мурзик, какого цвета этот шарф?"),
      line("murzik", "Turuncu! Benim gibi!", "Оранжевый! Как я!"),
      line("tom", "Hangi bere? Kırmızı mı, mavi mi?", "А какую шапку? Красную или синюю?"),
      line("murzik", "Mavi… Hayır, yeşil! Senin montun gibi.", "Синюю… Нет, зелёную! Как твоя куртка."),
      line("seller", "Sarı, siyah ve beyaz eldivenlerimiz var.", "Перчатки есть жёлтые, чёрные и белые."),
      line("murzik", "Beyaz eldiven, lütfen. Kar gibi!", "Белые перчатки, пожалуйста. Как снег!"),
      line("tom", "Mevlana'nın kubbesi turkuaz. Çok güzel!", "А купол музея Мевляны бирюзовый. Очень красиво!"),
    ],
    gist: choice("trko2-d1", "Какую шапку выбирает Мурзик?", [
      ["Зелёную.", true],
      ["Синюю.", false],
      ["Красную.", false],
    ]),
  },
  grammar: [
    {
      title: "Цвет перед словом",
      paragraphs: [
        "Цвет стоит перед словом и не меняется: kırmızı bir atkı — красный шарф, beyaz eldivenler — белые перчатки.",
        "Вопрос: Ne renk? или Hangi renk? — Какого цвета? Ответ — просто цвет: Mavi.",
      ],
      examples: [
        { ru: "Bu atkı ne renk? — Kırmızı.", en: "Какого цвета этот шарф? — Красный." },
        { ru: "Yeşil bir bere istiyorum.", en: "Я хочу зелёную шапку." },
      ],
    },
  ],
  tasks: [
    listen("trko2-t1", "Послушай. Какого цвета шарф?", "Atkım kırmızı.", [
      ["Красный.", true],
      ["Синий.", false],
      ["Жёлтый.", false],
    ]),
    match("trko2-t2", "Соедини пары.", [
      ["kırmızı", "красный"],
      ["mavi", "синий"],
      ["yeşil", "зелёный"],
      ["sarı", "жёлтый"],
    ], { skill: "words" }),
    choice("trko2-t3", "Как сказать «белые перчатки»?", [
      ["beyaz eldivenler", true],
      ["eldivenler beyaz bir", false],
      ["beyazlar eldiven", false],
    ], { skill: "grammar" }),
    spell("trko2-t4", "Собери из букв слово «оранжевый».", "turuncu"),
    speak("trko2-t5", "En sevdiğin renk ne?", "En sevdiğim renk mavi.", "Мой любимый цвет — синий.", { help: "Назови вслух свой любимый цвет." }),
    choice("trko2-t6", "Как сказать «Мне нужен шарф»?", [
      ["Bana bir atkı lazım.", true],
      ["Bana bir atkı var.", false],
      ["Ben atkı lazım.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "dolap",
    itemName: "Расписной шкаф",
    itemNameRu: "Dolap",
    ru: "Yaşasın! Renkli bir dolap!",
    en: "Ура! Расписной шкаф!",
    a11y: "Небольшой деревянный шкаф, расписанный бирюзовыми и красными цветами. На дверце висит оранжевый шарф.",
    image: p("dolap"),
    steps: ["Хозяйка дома показывает старый расписной шкаф.", "«Bu dolap senin olsun!» — «Пусть этот шкаф будет твоим!»", "Мурзик раскладывает в нём новые вещи.", "Все цвета на своих местах!"],
    bridge: "В соседней лавке Том замечает ещё один свитер: «А этот можно примерить?»",
  },
};

const konya3: Lesson = {
  id: "tr-a1-konya-3",
  level: "A1",
  cityId: "tr-konya",
  number: 3,
  title: "Мне идёт?",
  minutes: 7,
  goals: ["Попросить примерить", "Спросить, идёт ли вещь", "Попросить размер побольше или поменьше: daha"],
  vocabNote: "Beden — «размер одежды»: küçük (S), orta (M), büyük (L).",
  vocab: [
    v("trko3-1", "Deneyebilir miyim?", "Можно примерить?", "Том держит свитер и смотрит на продавца.", "Послушать Deneyebilir miyim", p("l3-1")),
    v("trko3-2", "Kabin nerede?", "Где примерочная?", "Том оглядывается в магазине, вдали кабинка со шторкой.", "Послушать Kabin nerede", p("l3-2")),
    v("trko3-3", "Yakıştı mı?", "Мне идёт?", "Том в новом свитере поворачивается перед зеркалом.", "Послушать Yakıştı mı", p("l3-3")),
    v("trko3-4", "Çok yakıştı!", "Тебе очень идёт!", "Мурзик показывает большой палец, глаза сияют.", "Послушать Çok yakıştı", p("l3-4")),
    v("trko3-5", "Biraz büyük.", "Немного великовато.", "Рукава свитера свисают ниже пальцев Тома.", "Послушать Biraz büyük", p("l3-5")),
    v("trko3-6", "Daha küçük var mı?", "Есть поменьше?", "Том показывает продавцу пальцами «поменьше».", "Послушать Daha küçük var mı", p("l3-6")),
    v("trko3-7", "Hangi beden?", "Какой размер?", "Продавец держит три свитера разных размеров.", "Послушать Hangi beden", p("l3-7")),
  ],
  dialogue: {
    title: "Примерка",
    note: "Orta — «средний». Oldu — «стало, получилось».",
    lines: [
      line("tom", "Bu kazağı deneyebilir miyim?", "Можно примерить этот свитер?"),
      line("seller", "Tabii. Kabin orada.", "Конечно. Примерочная там."),
      line("tom", "Murzik, yakıştı mı?", "Мурзик, мне идёт?"),
      line("murzik", "Renk çok yakıştı! Ama biraz büyük.", "Цвет тебе очень идёт! Но он великоват."),
      line("tom", "Daha küçük var mı?", "Есть поменьше?"),
      line("seller", "Hangi beden? Orta mı?", "Какой размер? Средний?"),
      line("tom", "Evet, orta lütfen.", "Да, средний, пожалуйста."),
      line("murzik", "Şimdi çok güzel oldu!", "Теперь отлично!"),
    ],
    gist: choice("trko3-d1", "Почему Тому не подошёл первый свитер?", [
      ["Он великоват.", true],
      ["Не тот цвет.", false],
      ["Слишком дорогой.", false],
    ]),
  },
  grammar: [
    {
      title: "Больше, меньше: daha",
      paragraphs: [
        "«Более» — daha перед словом: daha küçük — поменьше, daha büyük — побольше, daha güzel — красивее.",
        "«Чем» — окончание -den / -dan: Bu kazak o kazaktan daha güzel. — Этот свитер красивее того.",
      ],
      examples: [
        { ru: "Daha büyük var mı?", en: "Есть побольше?" },
        { ru: "Mavi kazak daha güzel.", en: "Синий свитер красивее." },
      ],
    },
  ],
  tasks: [
    choice("trko3-t1", "Как спросить «Есть поменьше?»", [
      ["Daha küçük var mı?", true],
      ["Çok küçük var mı?", false],
      ["Küçük daha mı?", false],
    ], { skill: "grammar" }),
    listen("trko3-t2", "Послушай. Что не так?", "Biraz küçük.", [
      ["Маловато.", true],
      ["Великовато.", false],
      ["Не тот цвет.", false],
    ]),
    match("trko3-t3", "Соедини пары.", [
      ["kabin", "примерочная"],
      ["beden", "размер"],
      ["denemek", "примерять"],
      ["orta", "средний"],
    ], { skill: "words" }),
    missing("trko3-t4", "Какой буквы не хватает? («Тебе очень идёт!»)", "Çok yakı", "tı!", "ş", ["ş", "s", "z"]),
    speak("trko3-t5", "Bu kazak yakıştı mı?", "Çok yakıştı! Ama biraz büyük.", "Очень идёт! Но немного великоват.", { help: "Ответь вслух другу." }),
    listen("trko3-t6", "Вспомни цвета. Какой это цвет?", "Turuncu.", [
      ["Оранжевый.", true],
      ["Жёлтый.", false],
      ["Красный.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "aski",
    itemName: "Вешалка",
    itemNameRu: "Askı",
    ru: "Yaşasın! Bir askı!",
    en: "Ура! Вешалка!",
    a11y: "Деревянная вешалка-стойка у двери. На ней новый свитер Тома, шарф и шапка Мурзика.",
    image: p("aski"),
    steps: ["Том ставит у двери деревянную вешалку.", "Вешает на неё новый свитер.", "Мурзик вешает шарф и шапку.", "Прихожая готова к зиме!"],
    bridge: "Ночью Мурзик просыпается: голова болит, нос горячий…",
  },
};

const konya4: Lesson = {
  id: "tr-a1-konya-4",
  level: "A1",
  cityId: "tr-konya",
  number: 4,
  title: "Мне плохо",
  minutes: 7,
  goals: ["Сказать, что тебе нехорошо", "Сказать, что болит", "Спросить «что у тебя болит?»"],
  vocabNote: "Ağrımak — «болеть». По-турецки «моя голова болит»: Başım ağrıyor.",
  vocab: [
    v("trko4-1", "Kendimi iyi hissetmiyorum.", "Мне нехорошо.", "Мурзик лежит в кровати, бледный, уши опущены.", "Послушать Kendimi iyi hissetmiyorum", p("l4-1")),
    v("trko4-2", "Başım ağrıyor.", "У меня болит голова.", "Мурзик держится лапами за голову, над ним звёздочки.", "Послушать Başım ağrıyor", p("l4-2")),
    v("trko4-3", "Boğazım ağrıyor.", "У меня болит горло.", "Мурзик держится за горло, вокруг шеи шарф.", "Послушать Boğazım ağrıyor", p("l4-3")),
    v("trko4-4", "Ateşim var.", "У меня температура.", "Градусник во рту у Мурзика, щёки красные.", "Послушать Ateşim var", p("l4-4")),
    v("trko4-5", "Öksürüyorum.", "Я кашляю.", "Мурзик кашляет в лапу.", "Послушать Öksürüyorum", p("l4-5")),
    v("trko4-6", "Burnum akıyor.", "У меня насморк.", "Мурзик с красным носом держит платок.", "Послушать Burnum akıyor", p("l4-6")),
    v("trko4-7", "Neren ağrıyor?", "Что у тебя болит?", "Том заботливо склоняется над кроватью Мурзика.", "Послушать Neren ağrıyor", p("l4-7")),
  ],
  dialogue: {
    title: "Ночью",
    note: "Ne oldu? — «Что случилось?». Doktora — «к врачу».",
    lines: [
      line("murzik", "Tom… Kendimi iyi hissetmiyorum.", "Том… Мне нехорошо."),
      line("tom", "Ne oldu? Neren ağrıyor?", "Что случилось? Что у тебя болит?"),
      line("murzik", "Başım ağrıyor. Boğazım da ağrıyor.", "Голова болит. И горло тоже."),
      line("tom", "Ateşin var mı? Ah, evet, ateşin var!", "У тебя температура? Ох, да, температура!"),
      line("murzik", "Öksürüyorum… ve burnum akıyor.", "Я кашляю… и у меня насморк."),
      line("tom", "Yarın sabah doktora gidelim.", "Завтра утром пойдём к врачу."),
    ],
    gist: choice("trko4-d1", "Что болит у Мурзика?", [
      ["Голова и горло.", true],
      ["Живот.", false],
      ["Лапа.", false],
    ]),
  },
  grammar: [
    {
      title: "Болит: Başım ağrıyor",
      paragraphs: [
        "«У меня болит…» — часть тела с окончанием «мой» и ağrıyor: baş-ım ağrıyor (голова), boğaz-ım ağrıyor (горло), karn-ım ağrıyor (живот).",
        "Вопрос другу: Neren ağrıyor? — Что у тебя болит? Вежливо, на «вы»: Nereniz ağrıyor?",
      ],
      examples: [
        { ru: "Karnım ağrıyor.", en: "У меня болит живот." },
        { ru: "Ateşin var mı?", en: "У тебя температура?" },
      ],
    },
  ],
  tasks: [
    listen("trko4-t1", "Послушай. Что болит?", "Karnım ağrıyor.", [
      ["Живот.", true],
      ["Голова.", false],
      ["Горло.", false],
    ]),
    choice("trko4-t2", "Как сказать «У меня болит горло»?", [
      ["Boğazım ağrıyor.", true],
      ["Boğaz ağrıyorum.", false],
      ["Benim boğaz ağrı.", false],
    ], { skill: "grammar" }),
    match("trko4-t3", "Соедини пары.", [
      ["baş", "голова"],
      ["boğaz", "горло"],
      ["karın", "живот"],
      ["ateş", "температура"],
    ], { skill: "words" }),
    missing("trko4-t4", "Какой буквы не хватает? («болит»)", "a", "rıyor", "ğ", ["ğ", "g", "y"]),
    speak("trko4-t5", "Neren ağrıyor?", "Başım ağrıyor ve ateşim var.", "У меня болит голова и температура.", { help: "Ответь вслух, как будто ты заболел(а)." }),
    choice("trko4-t6", "Как спросить «Можно примерить?»", [
      ["Deneyebilir miyim?", true],
      ["Deniyor muyum?", false],
      ["Denedim mi?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "termofor",
    itemName: "Грелка",
    itemNameRu: "Sıcak su torbası",
    ru: "Yaşasın! Bir sıcak su torbası!",
    en: "Ура! Грелка!",
    a11y: "Мурзик лежит в постели под одеялом и обнимает тёплую грелку в вязаном чехле.",
    image: p("termofor"),
    steps: ["Том наливает в грелку горячую воду.", "Надевает на неё вязаный чехол.", "Мурзик обнимает её.", "Стало чуть легче."],
    bridge: "Утром — к доктору Зехре.",
  },
};

const konya5: Lesson = {
  id: "tr-a1-konya-5",
  level: "A1",
  cityId: "tr-konya",
  number: 5,
  title: "У врача",
  minutes: 7,
  goals: ["Понять врача", "Понять вежливые просьбы: oturun, açın", "Узнать, что делать"],
  vocabNote: "Врача в Турции называют doktor hanım (женщину) или doktor bey (мужчину).",
  vocab: [
    v("trko5-1", "Randevum var.", "У меня запись на приём.", "Том у стойки регистрации в поликлинике.", "Послушать Randevum var", p("l5-1")),
    v("trko5-2", "Oturun, lütfen.", "Садитесь, пожалуйста.", "Доктор Зехра, спокойная женщина лет пятидесяти в белом халате, показывает на стул.", "Послушать Oturun, lütfen", p("l5-2")),
    v("trko5-3", "Ağzınızı açın.", "Откройте рот.", "Мурзик широко открывает рот, доктор светит фонариком.", "Послушать Ağzınızı açın", p("l5-3")),
    v("trko5-4", "Derin nefes alın.", "Глубоко вдохните.", "Доктор слушает Мурзика стетоскопом.", "Послушать Derin nefes alın", p("l5-4")),
    v("trko5-5", "Grip olmuşsunuz.", "У вас грипп.", "Доктор Зехра что-то записывает в карточку.", "Послушать Grip olmuşsunuz", p("l5-5")),
    v("trko5-6", "Dinlenin.", "Отдыхайте.", "Мурзик под одеялом с книжкой.", "Послушать Dinlenin", p("l5-6")),
    v("trko5-7", "Bol su için.", "Пейте много воды.", "Стакан воды и графин у кровати.", "Послушать Bol su için", p("l5-7")),
  ],
  dialogue: {
    title: "Доктор Зехра",
    note: "Ciddi — «серьёзный». Ciddi değil — «ничего серьёзного».",
    lines: [
      line("zehra", "Merhaba. Oturun, lütfen. Ne oldu?", "Здравствуйте. Садитесь, пожалуйста. Что случилось?"),
      line("murzik", "Başım ve boğazım ağrıyor. Ateşim de var.", "У меня болят голова и горло. И температура."),
      line("zehra", "Ağzınızı açın, lütfen. Şimdi derin nefes alın.", "Откройте, пожалуйста, рот. Теперь глубоко вдохните."),
      line("zehra", "Hmm… Grip olmuşsunuz.", "Хм… У вас грипп."),
      line("tom", "Ciddi mi?", "Это серьёзно?"),
      line("zehra", "Hayır, ciddi değil. Üç gün dinlenin ve bol su için.", "Нет, ничего серьёзного. Три дня отдыхайте и пейте много воды."),
      line("murzik", "Teşekkür ederim, doktor hanım.", "Спасибо, доктор."),
    ],
    gist: choice("trko5-d1", "Что у Мурзика?", [
      ["Грипп.", true],
      ["Ничего.", false],
      ["Сломана лапа.", false],
    ]),
  },
  grammar: [
    {
      title: "Врач говорит на «вы»",
      paragraphs: [
        "Вежливая просьба — основа глагола и -in / -ın / -un / -ün: otur → oturun (садитесь), aç → açın (откройте), al → alın (возьмите, вдохните).",
        "«Ваш» — окончание -ınız / -iniz: ağzınız — ваш рот, ateşiniz — ваша температура.",
      ],
      examples: [
        { ru: "Oturun, lütfen.", en: "Садитесь, пожалуйста." },
        { ru: "Ateşiniz var mı?", en: "У вас есть температура?" },
      ],
    },
  ],
  tasks: [
    choice("trko5-t1", "Врач вежливо говорит «Садитесь». Как?", [
      ["Oturun.", true],
      ["Otur.", false],
      ["Oturuyorum.", false],
    ], { skill: "grammar" }),
    listen("trko5-t2", "Послушай. Что советует врач?", "Üç gün dinlenin ve bol su için.", [
      ["Отдыхать три дня и пить много воды.", true],
      ["Пить лекарства неделю.", false],
      ["Ходить на работу.", false],
    ]),
    match("trko5-t3", "Соедини пары.", [
      ["Oturun.", "Садитесь."],
      ["Açın.", "Откройте."],
      ["Dinlenin.", "Отдыхайте."],
      ["Ciddi değil.", "Ничего серьёзного."],
    ], { skill: "words" }),
    spell("trko5-t4", "Собери из букв слово «врач».", "doktor"),
    speak("trko5-t5", "Ne oldu? Nereniz ağrıyor?", "Boğazım ağrıyor ve öksürüyorum.", "У меня болит горло, и я кашляю.", { help: "Расскажи вслух врачу, что болит." }),
    listen("trko5-t6", "Вспомни прошлый урок. Что болит?", "Başım ağrıyor.", [
      ["Голова.", true],
      ["Живот.", false],
      ["Горло.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "gece-lambasi",
    itemName: "Ночник",
    itemNameRu: "Gece lambası",
    ru: "Yaşasın! Bir gece lambası!",
    en: "Ура! Ночник!",
    a11y: "Маленький ночник в форме полумесяца мягко светится жёлтым светом у кровати.",
    image: p("gece-lambasi"),
    steps: ["Вечером Том ставит у кровати ночник.", "Он светится, как маленькая луна.", "Мурзику не страшно и тепло.", "Он засыпает."],
    bridge: "Доктор Зехра выписала лекарство. «Аптека прямо напротив», — сказала она.",
  },
};

const konya6: Lesson = {
  id: "tr-a1-konya-6",
  level: "A1",
  cityId: "tr-konya",
  number: 6,
  title: "В аптеке",
  minutes: 7,
  goals: ["Купить лекарство по рецепту", "Понять, как принимать: два раза в день, после еды", "Пожелать выздоровления: Geçmiş olsun!"],
  vocabNote: "Geçmiş olsun — «пусть пройдёт». Так говорят каждому, кто болеет, а ещё после любой неприятности.",
  vocab: [
    v("trko6-1", "eczane", "аптека", "Вывеска аптеки с красной буквой E.", "Послушать eczane", p("l6-1")),
    v("trko6-2", "ilaç", "лекарство", "Коробочки с лекарствами на полке.", "Послушать ilaç", p("l6-2")),
    v("trko6-3", "reçete", "рецепт", "Том протягивает фармацевту листок с рецептом.", "Послушать reçete", p("l6-3")),
    v("trko6-4", "Günde iki kez.", "Два раза в день.", "Две таблетки рядом с солнцем и луной.", "Послушать Günde iki kez", p("l6-4")),
    v("trko6-5", "Yemekten sonra.", "После еды.", "Пустая тарелка, а рядом таблетка.", "Послушать Yemekten sonra", p("l6-5")),
    v("trko6-6", "ağrı kesici", "обезболивающее", "Маленькая коробочка таблеток с нарисованной молнией боли, перечёркнутой.", "Послушать ağrı kesici", p("l6-6")),
    v("trko6-7", "Geçmiş olsun!", "Выздоравливай!", "Фармацевт с улыбкой протягивает пакет с лекарствами.", "Послушать Geçmiş olsun", p("l6-7")),
  ],
  dialogue: {
    title: "Аптека напротив",
    note: "Şurup — «сироп». Nasıl kullanılıyor? — «Как принимать?»",
    lines: [
      line("tom", "Merhaba. Bu reçete için ilaç alabilir miyim?", "Здравствуйте. Можно лекарство по этому рецепту?"),
      line("pharmacist", "Tabii. Buyurun: bu şurup ve bu tabletler.", "Конечно. Вот: этот сироп и эти таблетки."),
      line("tom", "Nasıl kullanılıyor?", "Как их принимать?"),
      line("pharmacist", "Şurup günde üç kez, yemekten sonra. Tablet günde iki kez.", "Сироп три раза в день, после еды. Таблетки два раза в день."),
      line("tom", "Ağrı kesici de var mı?", "А обезболивающее есть?"),
      line("pharmacist", "Var. Geçmiş olsun!", "Есть. Пусть ваш друг выздоравливает!"),
      line("tom", "Teşekkürler!", "Спасибо!"),
    ],
    gist: choice("trko6-d1", "Как принимать сироп?", [
      ["Три раза в день после еды.", true],
      ["Два раза в день до еды.", false],
      ["Один раз в день.", false],
    ]),
  },
  grammar: [
    {
      title: "До и после: -den önce, -den sonra",
      paragraphs: [
        "«После еды» — yemek-ten sonra, «до еды» — yemek-ten önce. Слово ставят с окончанием -den / -ten, а потом sonra или önce.",
        "«Сколько раз в день» — günde … kez: günde iki kez — два раза в день, günde bir kez — раз в день.",
      ],
      examples: [
        { ru: "Günde üç kez, yemekten sonra.", en: "Три раза в день, после еды." },
        { ru: "Uyumadan önce bir tablet.", en: "Одна таблетка перед сном." },
      ],
    },
  ],
  tasks: [
    listen("trko6-t1", "Послушай. Как принимать?", "Günde iki kez, yemekten önce.", [
      ["Два раза в день до еды.", true],
      ["Два раза в день после еды.", false],
      ["Три раза в день до еды.", false],
    ]),
    choice("trko6-t2", "Как сказать «после еды»?", [
      ["yemekten sonra", true],
      ["yemeğe sonra", false],
      ["yemekte sonra", false],
    ], { skill: "grammar" }),
    match("trko6-t3", "Соедини пары.", [
      ["eczane", "аптека"],
      ["ilaç", "лекарство"],
      ["reçete", "рецепт"],
      ["şurup", "сироп"],
    ], { skill: "words" }),
    missing("trko6-t4", "Какой буквы не хватает? («аптека»)", "ec", "ane", "z", ["z", "s", "c"]),
    speak("trko6-t5", "Bu ilaç nasıl kullanılıyor?", "Günde üç kez, yemekten sonra.", "Три раза в день, после еды.", { help: "Ответь вслух как фармацевт." }),
    choice("trko6-t6", "Врач говорит: Ağzınızı açın. Что нужно сделать?", [
      ["Открыть рот.", true],
      ["Сесть.", false],
      ["Глубоко вдохнуть.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "ihlamur",
    itemName: "Липовый чай",
    itemNameRu: "Ihlamur",
    ru: "Yaşasın! Bir kavanoz ıhlamur!",
    en: "Ура! Банка липового чая!",
    a11y: "Стеклянная банка с сушёными цветками липы и стаканчик горячего чая с мёдом.",
    image: p("ihlamur"),
    steps: ["Фармацевт добавляет в пакет банку сушёной липы.", "«Ihlamur için — en iyi ilaç!» — «Пейте липовый чай — лучшее лекарство!»", "Том заваривает чай с мёдом.", "Мурзик пьёт и жмурится."],
    bridge: "Через три дня Мурзику гораздо лучше. А Тому приходит письмо из журнала…",
  },
};

const konya7: Lesson = {
  id: "tr-a1-konya-7",
  level: "A1",
  cityId: "tr-konya",
  number: 7,
  title: "Мне лучше!",
  minutes: 8,
  goals: ["Сказать, что тебе лучше", "Сравнить: лучше, чем вчера", "Вспомнить все слова Коньи"],
  vocabNote: "Neyse ki — «к счастью». Dergi — «журнал». İş teklifi — «предложение работы».",
  vocab: [
    v("trko7-1", "Daha iyiyim.", "Мне лучше.", "Мурзик сидит в кровати, улыбается, щёки уже не красные.", "Послушать Daha iyiyim", p("l7-1")),
    v("trko7-2", "Nasılsın şimdi?", "Как ты теперь?", "Доктор Зехра заглядывает в дверь с улыбкой.", "Послушать Nasılsın şimdi", p("l7-2")),
    v("trko7-3", "Artık ateşim yok.", "Температуры больше нет.", "Мурзик показывает градусник с нормальной температурой.", "Послушать Artık ateşim yok", p("l7-3")),
    v("trko7-4", "sağlıklı", "здоровый", "Мурзик бодро делает зарядку у окна.", "Послушать sağlıklı", p("l7-4")),
    v("trko7-5", "Neyse ki!", "К счастью!", "Том облегчённо выдыхает и улыбается.", "Послушать Neyse ki", p("l7-5")),
    v("trko7-6", "Bir e-posta geldi!", "Пришло письмо!", "На экране ноутбука конверт с крылышками.", "Послушать Bir e-posta geldi", p("l7-6")),
    v("trko7-7", "Bir iş teklifi aldım!", "Мне предлагают работу!", "Том подпрыгивает с ноутбуком в руках.", "Послушать Bir iş teklifi aldım", p("l7-7")),
  ],
  dialogue: {
    title: "Хорошие новости",
    note: "Доктор Зехра теперь говорит Мурзику «ты»: они подружились. Dergiden — «из журнала». Balon fotoğrafları — «снимки воздушных шаров».",
    lines: [
      line("zehra", "Murzik, nasılsın şimdi?", "Мурзик, как ты теперь?"),
      line("murzik", "Daha iyiyim, teşekkürler! Artık ateşim yok.", "Мне лучше, спасибо! Температуры больше нет."),
      line("zehra", "Neyse ki! Geçmiş olsun.", "К счастью! Выздоравливай."),
      line("tom", "Murzik! Bir e-posta geldi! Dergiden!", "Мурзик! Пришло письмо! Из журнала!"),
      line("murzik", "Ne yazıyor?", "Что там пишут?"),
      line("tom", "Bir iş teklifi aldım! Kapadokya'da, balon fotoğrafları!", "Мне предлагают работу! В Каппадокии, снимать воздушные шары!"),
      line("murzik", "Harika! Kapadokya'ya gidelim!", "Здорово! Поехали в Каппадокию!"),
    ],
    gist: choice("trko7-d1", "Что пишут Тому из журнала?", [
      ["Предлагают работу в Каппадокии.", true],
      ["Просят вернуться в Лондон.", false],
      ["Поздравляют с днём рождения.", false],
    ]),
  },
  grammar: [
    {
      title: "Лучше, чем: -den daha",
      paragraphs: [
        "Daha iyi — «лучше», daha kötü — «хуже». Daha iyiyim — мне лучше.",
        "«Чем» — окончание -den / -dan: Bugün dünden daha iyiyim. — Сегодня мне лучше, чем вчера.",
      ],
      examples: [
        { ru: "Bugün dünden daha iyiyim.", en: "Сегодня мне лучше, чем вчера." },
        { ru: "Konya, Antalya'dan daha soğuk.", en: "В Конье холоднее, чем в Анталье." },
      ],
    },
  ],
  tasks: [
    listen("trko7-t1", "Аудиоэкзамен. Что говорит врач?", "Ateşiniz yok, boğazınız iyi. Yarın dışarı çıkabilirsiniz.", [
      ["Температуры нет, горло в порядке, завтра можно гулять.", true],
      ["Нужно лежать ещё неделю.", false],
      ["Надо пить лекарство три раза в день.", false],
    ]),
    choice("trko7-t2", "Как сказать «Сегодня мне лучше, чем вчера»?", [
      ["Bugün dünden daha iyiyim.", true],
      ["Bugün düne daha iyiyim.", false],
      ["Bugün dün daha iyi.", false],
    ], { skill: "grammar" }),
    match("trko7-t3", "Соедини пары.", [
      ["Daha iyiyim.", "Мне лучше."],
      ["Neyse ki!", "К счастью!"],
      ["iş teklifi", "предложение работы"],
      ["dergi", "журнал"],
    ], { skill: "words" }),
    missing("trko7-t4", "Какой буквы не хватает? («здоровый»)", "sa", "lıklı", "ğ", ["ğ", "g", "h"]),
    speak("trko7-t5", "Nasılsın şimdi?", "Daha iyiyim, teşekkürler!", "Мне лучше, спасибо!", { help: "Ответь вслух." }),
    script("trko7-t6", "Вспомни всю Конью. Закончи разговоры.", [
      { speaker: "Продавец", text: "Ne lazım?" },
      { speaker: "Ты", answer: "Bana bir atkı lazım.", options: ["Bana bir atkı lazım.", "Bana bir atkıyım.", "Kabin nerede."] },
      { speaker: "Доктор Зехра", text: "Nereniz ağrıyor?" },
      { speaker: "Ты", answer: "Başım ağrıyor.", options: ["Başım ağrıyor.", "Başım ağrı.", "Geçmiş olsun."] },
      { speaker: "Фармацевт", text: "Günde iki kez." },
      { speaker: "Ты", answer: "Yemekten önce mi, sonra mı?", options: ["Yemekten önce mi, sonra mı?", "Daha küçük var mı?", "Ne renk?"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "lamba",
    itemName: "Мозаичная лампа",
    itemNameRu: "Mozaik lamba",
    ru: "Yaşasın! Bir mozaik lamba!",
    en: "Ура! Мозаичная лампа!",
    a11y: "Подвесная лампа из разноцветной стеклянной мозаики светится бирюзовыми, красными и жёлтыми огоньками.",
    image: p("lamba"),
    steps: ["Доктор Зехра приносит подарок.", "Это мозаичная лампа — бирюзовая, как купол музея Мевляны.", "«Geçmiş olsun, Murzik!» — «Выздоравливай, Мурзик!»", "Комната вспыхивает цветными огоньками."],
    bridge: "Тома ждут в Каппадокии. Пора собирать чемоданы!",
  },
};

const story: CityStory = {
  home: {
    name: "Тёплая комната в старом доме",
    nameRu: "Eski evde sıcak bir oda",
    image: p("home"),
    a11y: "Пустая комната в старом доме с печкой и толстыми стенами. За окном снег и бирюзовый купол вдали. Посередине чемодан Мурзика.",
  },
  keepsakeId: "lamba",
  welcomeRu: "Merhaba, Konya!",
  welcomeEn: "Привет, Конья!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том в Конье у бирюзового купола. Холодно, идёт лёгкий снег.",
  departureImage: p("departure"),
  departureA11y: "Мурзик и Том в тёплых шапках и шарфах садятся в автобус.",
  finale: [
    {
      image: p("dome"),
      a11y: "Мурзик и Том в шарфах стоят у бирюзового купола под лёгким снегом. Рядом доктор Зехра смотрит на открытку. Вдали у ворот — силуэт белого кота в шляпе.",
      lines: [
        { en: "Перед отъездом они идут к бирюзовому куполу. Мурзик показывает доктору Зехре открытку бабушки." },
        { ru: "Annem bu kediyi anlatırdı: kubbeyi çizerdi.", en: "Мама рассказывала про эту кошку: она рисовала купол." },
        { en: "А у ворот, под снегом, снова стоит кот в шляпе. Мурзик моргает — и его уже нет." },
      ],
    },
    {
      image: p("lamba"),
      a11y: "Мурзик обходит свою тёплую комнату, которую обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свою тёплую комнату. Том фотографирует её для дневника путешествий." },
        { en: "С собой — мозаичная лампа доктора Зехры." },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "Konya tamamlandı!", en: "Конья пройдена!" },
        { en: "7 / 7 уроков" },
        { en: "A1 — пройден восьмой блок." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Мурзик и Том садятся в автобус.",
      lines: [
        { ru: "Hoşça kal, Konya!", en: "Пока, Конья!" },
        { ru: "Sıradaki durak: Kapadokya!", en: "Следующая остановка: Каппадокия!" },
      ],
    },
    {
      image: p("road"),
      a11y: "Автобус едет по заснеженной равнине к далёким горам.",
      lines: [{ ru: "Konya → Kapadokya", en: "Конья → Каппадокия" }],
    },
    {
      image: pic("tr/kapadokya/arrival"),
      a11y: "Мурзик и Том на рассвете среди «каменных грибов» Каппадокии. В небе десятки разноцветных воздушных шаров.",
      lines: [
        { ru: "Merhaba, Kapadokya!", en: "Привет, Каппадокия!" },
        { ru: "Balonlar!", en: "Воздушные шары!" },
      ],
    },
  ],
};

export const trKonya = {
  id: "tr-konya",
  name: "Конья",
  nameTr: "Konya",
  lessons: [konya1, konya2, konya3, konya4, konya5, konya6, konya7],
  story,
};
