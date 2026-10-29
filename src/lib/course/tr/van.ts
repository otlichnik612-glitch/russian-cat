import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Ван · «Мой город» · что есть в городе, где это, какой он, письмо из Стамбула, ответ, открыто или закрыто, Мурзик-экскурсовод. */

const p = (name: string) => pic(`tr/van/${name}`);

const van1: Lesson = {
  id: "tr-a1-van-1",
  level: "A1",
  cityId: "tr-van",
  number: 1,
  title: "Что есть в городе?",
  minutes: 7,
  goals: ["Сказать, что есть в городе: … var", "Спросить: … var mı?", "Ответить «нет»: yok"],
  vocabNote: "Var — «есть», yok — «нет». Где — с окончанием -da / -de: Şehirde bir kale var. — В городе есть крепость.",
  vocab: [
    v("trva1-1", "Şehirde bir kale var.", "В городе есть крепость.", "Древняя крепость на высокой скале у озера.", "Послушать Şehirde bir kale var", p("l1-1")),
    v("trva1-2", "kahvaltı evi", "дом завтраков", "Уютное кафе с длинными столами, уставленными тарелочками.", "Послушать kahvaltı evi", p("l1-2")),
    v("trva1-3", "Burada müze var mı?", "Здесь есть музей?", "Том держит карту города и оглядывается.", "Послушать Burada müze var mı", p("l1-3")),
    v("trva1-4", "Evet, var.", "Да, есть.", "Гюльсум-тейзе кивает и показывает рукой.", "Послушать Evet, var", p("l1-4")),
    v("trva1-5", "Hayır, yok.", "Нет, здесь нет.", "Гюльсум-тейзе качает головой.", "Послушать Hayır, yok", p("l1-5")),
    v("trva1-6", "çarşı", "рынок, торговые ряды", "Крытые торговые ряды с лавочками.", "Послушать çarşı", p("l1-6")),
    v("trva1-7", "iskele", "пристань", "Деревянная пристань, у неё лодка.", "Послушать iskele", p("l1-7")),
  ],
  dialogue: {
    title: "Гюльсум-тейзе",
    note: "Гюльсум-тейзе держит дом завтраков у озера. Ada — «остров». Kilise — «церковь». Tekne — «лодка». Dünyanın en güzel kahvaltısı — «самый лучший завтрак в мире».",
    lines: [
      line("gulsum", "Hoş geldiniz! Ben Gülsüm. Burası benim kahvaltı evim.", "Добро пожаловать! Я Гюльсум. Это мой дом завтраков."),
      line("tom", "Merhaba! Van'da ne var?", "Здравствуйте! Что есть в Ване?"),
      line("gulsum", "Şehirde eski bir kale var. Gölde de bir ada var, adada eski bir kilise var.", "В городе есть старая крепость. А на озере есть остров, на острове старая церковь."),
      line("murzik", "Adaya tekne var mı?", "На остров есть лодка?"),
      line("gulsum", "Evet, var. İskeleden her saat bir tekne var.", "Да, есть. С пристани каждый час ходит лодка."),
      line("tom", "Burada metro var mı?", "А метро здесь есть?"),
      line("gulsum", "Hayır, yok! Ama dünyanın en güzel kahvaltısı var!", "Нет, метро нет! Зато есть самый лучший завтрак в мире!"),
    ],
    gist: choice("trva1-d1", "Чего нет в Ване?", [
      ["Метро.", true],
      ["Крепости.", false],
      ["Лодки на остров.", false],
    ]),
  },
  grammar: [
    {
      title: "Есть / нет: var, yok",
      paragraphs: [
        "Var — «есть»: Burada bir müze var. — Здесь есть музей. Yok — «нет»: Burada metro yok. — Здесь нет метро.",
        "Вопрос — var mı? / yok mu?: Yakında eczane var mı? — Поблизости есть аптека?",
      ],
      examples: [
        { ru: "Otelde havuz var mı?", en: "В гостинице есть бассейн?" },
        { ru: "Köyde market yok.", en: "В деревне нет магазина." },
      ],
    },
  ],
  tasks: [
    choice("trva1-t1", "Как спросить «Здесь есть аптека?»", [
      ["Burada eczane var mı?", true],
      ["Burada eczane var.", false],
      ["Burada eczane nerede var?", false],
    ], { skill: "grammar" }),
    listen("trva1-t2", "Послушай. Что есть в деревне?", "Köyde bir okul var, ama hastane yok.", [
      ["Школа есть, больницы нет.", true],
      ["Больница есть, школы нет.", false],
      ["Нет ни школы, ни больницы.", false],
    ]),
    match("trva1-t3", "Соедини пары.", [
      ["kale", "крепость"],
      ["ada", "остров"],
      ["çarşı", "рынок"],
      ["iskele", "пристань"],
    ], { skill: "words" }),
    missing("trva1-t4", "Какой буквы не хватает? («рынок»)", "", "arşı", "ç", ["ç", "c", "ş"]),
    speak("trva1-t5", "Senin şehrinde ne var?", "Şehrimde bir park ve bir müze var.", "В моём городе есть парк и музей.", { help: "Скажи вслух, что есть в твоём городе." }),
    choice("trva1-t6", "Как сказать «Я хочу выехать» в гостинице?", [
      ["Çıkış yapmak istiyorum.", true],
      ["Çıkış yapıyorum istiyorum.", false],
      ["Çıkış yok.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "puf",
    itemName: "Пуф",
    itemNameRu: "Puf",
    ru: "Yaşasın! Bir puf!",
    en: "Ура! Пуф!",
    a11y: "Круглый мягкий пуф, обтянутый ковровой тканью с красно-синим узором.",
    image: p("puf"),
    steps: ["Гюльсум-тейзе катит по полу круглый пуф.", "«Odana, canım!» — «В твою комнату, милый!»", "Мурзик плюхается на него.", "С пуфа видно озеро."],
    bridge: "Мурзик хочет сам найти крепость. Но где она?",
  },
};

const van2: Lesson = {
  id: "tr-a1-van-2",
  level: "A1",
  cityId: "tr-van",
  number: 2,
  title: "Где это?",
  minutes: 7,
  goals: ["Сказать «рядом с», «напротив», «между»", "Спросить, где находится место", "Понять ответ прохожего"],
  vocabNote: "Yanında — «рядом с», karşısında — «напротив», arasında — «между». Слово перед ними — с окончанием «чей»: parkın yanında — рядом с парком.",
  vocab: [
    v("trva2-1", "Kale nerede?", "Где крепость?", "Мурзик стоит на перекрёстке с картой.", "Послушать Kale nerede", p("l2-1")),
    v("trva2-2", "gölün yanında", "рядом с озером", "Крепость, а рядом — синяя гладь озера.", "Послушать gölün yanında", p("l2-2")),
    v("trva2-3", "parkın karşısında", "напротив парка", "Кафе через дорогу от парка.", "Послушать parkın karşısında", p("l2-3")),
    v("trva2-4", "banka ile postane arasında", "между банком и почтой", "Маленький магазинчик между банком и почтой.", "Послушать banka ile postane arasında", p("l2-4")),
    v("trva2-5", "Uzak mı?", "Далеко?", "Мурзик смотрит на длинную дорогу.", "Послушать Uzak mı", p("l2-5")),
    v("trva2-6", "Yürüyerek on dakika.", "Десять минут пешком.", "Следы лапок на дорожке и часы.", "Послушать Yürüyerek on dakika", p("l2-6")),
    v("trva2-7", "Sağ olun!", "Спасибо!", "Мурзик кланяется прохожей.", "Послушать Sağ olun", p("l2-7")),
  ],
  dialogue: {
    title: "На перекрёстке",
    note: "Sağ olun — тёплое «спасибо».",
    lines: [
      line("murzik", "Affedersiniz, kale nerede?", "Простите, где крепость?"),
      line("passerby", "Kale gölün yanında.", "Крепость рядом с озером."),
      line("murzik", "Uzak mı?", "Далеко?"),
      line("passerby", "Hayır, yürüyerek on dakika. Postaneyi biliyor musun?", "Нет, десять минут пешком. Ты знаешь почту?"),
      line("murzik", "Evet, parkın karşısında.", "Да, напротив парка."),
      line("passerby", "Tamam. Kale yolu postane ile banka arasında.", "Хорошо. Дорога к крепости — между почтой и банком."),
      line("murzik", "Sağ olun!", "Спасибо!"),
    ],
    gist: choice("trva2-d1", "Где начинается дорога к крепости?", [
      ["Между почтой и банком.", true],
      ["Напротив парка.", false],
      ["Рядом с гостиницей.", false],
    ]),
  },
  grammar: [
    {
      title: "Рядом, напротив, между",
      paragraphs: [
        "Схема: чей + yanında / karşısında / arkasında / önünde. Parkın yanında (рядом с парком), otelin karşısında (напротив гостиницы), evin arkasında (за домом), caminin önünde (перед мечетью).",
        "«Между» — A ile B arasında: banka ile postane arasında (между банком и почтой).",
      ],
      examples: [
        { ru: "Eczane otelin karşısında.", en: "Аптека напротив гостиницы." },
        { ru: "Kedi evin arkasında.", en: "Кошка за домом." },
      ],
    },
  ],
  tasks: [
    choice("trva2-t1", "Как сказать «рядом с гостиницей»?", [
      ["otelin yanında", true],
      ["otel yanında", false],
      ["otelde yanında", false],
    ], { skill: "grammar" }),
    listen("trva2-t2", "Послушай. Где аптека?", "Eczane parkın karşısında.", [
      ["Напротив парка.", true],
      ["Рядом с парком.", false],
      ["За парком.", false],
    ]),
    match("trva2-t3", "Соедини пары.", [
      ["yanında", "рядом с"],
      ["karşısında", "напротив"],
      ["arasında", "между"],
      ["arkasında", "за, позади"],
    ], { skill: "words" }),
    missing("trva2-t4", "Какой буквы не хватает? («напротив»)", "kar", "ısında", "ş", ["ş", "s", "ç"]),
    speak("trva2-t5", "Senin evin nerede?", "Evim parkın yanında.", "Мой дом рядом с парком.", { help: "Скажи вслух, рядом с чем твой дом." }),
    listen("trva2-t6", "Вспомни прошлый урок. Есть метро?", "Burada metro yok.", [
      ["Нет, метро нет.", true],
      ["Да, метро есть.", false],
      ["Метро далеко.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "yastik",
    itemName: "Вышитая подушка",
    itemNameRu: "Yastık",
    ru: "Yaşasın! İşlemeli bir yastık!",
    en: "Ура! Вышитая подушка!",
    a11y: "Маленькая подушка с вышитым белым котом, у которого один глаз голубой, а другой зелёный.",
    image: p("yastik"),
    steps: ["По дороге к крепости — лавочка с вышивкой.", "Продавщица дарит Мурзику маленькую подушку.", "На ней вышит белый кот с разными глазами.", "«Bu bir Van kedisi!» — «Это ванская кошка!»"],
    bridge: "Вернувшись, Мурзик видит на пристани белую кошку. Она… плывёт?!",
  },
};

const van3: Lesson = {
  id: "tr-a1-van-3",
  level: "A1",
  cityId: "tr-van",
  number: 3,
  title: "Какой он?",
  minutes: 7,
  goals: ["Описать город и животное", "Ставить прилагательное перед словом", "Сказать «очень», «немного», «совсем не»"],
  vocabNote: "Прилагательное стоит перед словом и не меняется: büyük göl — большое озеро, büyük göller — большие озёра.",
  vocab: [
    v("trva3-1", "Van kedisi", "ванская кошка", "Белоснежная пушистая кошка сидит на пристани.", "Послушать Van kedisi", p("l3-1")),
    v("trva3-2", "Bir gözü mavi, bir gözü yeşil.", "Один глаз голубой, другой зелёный.", "Крупно: морда кошки, один глаз голубой, другой зелёный.", "Послушать Bir gözü mavi, bir gözü yeşil", p("l3-2")),
    v("trva3-3", "Yüzmeyi seviyor.", "Она любит плавать.", "Белая кошка плывёт у пристани, вытянув шею.", "Послушать Yüzmeyi seviyor", p("l3-3")),
    v("trva3-4", "sessiz", "тихий", "Тихая улица, на скамейке дремлет старик.", "Послушать sessiz", p("l3-4")),
    v("trva3-5", "kalabalık", "людный", "Людный базар, много покупателей.", "Послушать kalabalık", p("l3-5")),
    v("trva3-6", "biraz soğuk", "немного холодно", "Мурзик поёживается на ветру у озера.", "Послушать biraz soğuk", p("l3-6")),
    v("trva3-7", "hiç sıcak değil", "совсем не жарко", "Ледяная вода у берега, Мурзик трогает её лапкой.", "Послушать hiç sıcak değil", p("l3-7")),
  ],
  dialogue: {
    title: "Бончук",
    note: "Бончук — обычная ванская кошка, она не разговаривает. Boncuk — «бусинка». Islak — «мокрый».",
    lines: [
      line("murzik", "Bak, Tom! Beyaz bir kedi yüzüyor!", "Смотри, Том! Белая кошка плавает!"),
      line("gulsum", "Bu Boncuk, bizim kedimiz. O bir Van kedisi.", "Это Бончук, наша кошка. Она ванская."),
      line("tom", "Bir gözü mavi, bir gözü yeşil! Çok güzel!", "Один глаз голубой, другой зелёный! Очень красивая!"),
      line("gulsum", "Evet. Van kedileri yüzmeyi seviyor.", "Да. Ванские кошки любят плавать."),
      line("murzik", "Ben yüzmeyi hiç sevmiyorum! Su biraz soğuk…", "А я совсем не люблю плавать! Вода холодноватая…"),
      line("gulsum", "Boncuk için soğuk değil! Bak, şimdi ıslak ve mutlu.", "Для Бончук не холодная! Смотри, теперь она мокрая и счастливая."),
    ],
    gist: choice("trva3-d1", "Что любит Бончук?", [
      ["Плавать.", true],
      ["Спать на чемоданах.", false],
      ["Пить чай.", false],
    ]),
  },
  grammar: [
    {
      title: "Прилагательные и «очень»",
      paragraphs: [
        "Прилагательное — перед словом: eski bir kale (старая крепость), sessiz bir sokak (тихая улица). Bir стоит между прилагательным и словом.",
        "Çok — очень, biraz — немного, hiç … değil — совсем не: çok kalabalık (очень людно), biraz soğuk (немного холодно), hiç sıcak değil (совсем не жарко).",
      ],
      examples: [
        { ru: "Van sessiz bir şehir.", en: "Ван — тихий город." },
        { ru: "Göl çok büyük ve çok mavi.", en: "Озеро очень большое и очень синее." },
      ],
    },
  ],
  tasks: [
    choice("trva3-t1", "Как сказать «тихий город»?", [
      ["sessiz bir şehir", true],
      ["bir şehir sessiz", false],
      ["şehir bir sessiz", false],
    ], { skill: "grammar" }),
    listen("trva3-t2", "Послушай. Какая погода?", "Bugün hava biraz soğuk.", [
      ["Немного холодно.", true],
      ["Очень жарко.", false],
      ["Совсем не холодно.", false],
    ]),
    match("trva3-t3", "Соедини пары.", [
      ["sessiz", "тихий"],
      ["kalabalık", "людный"],
      ["ıslak", "мокрый"],
      ["biraz", "немного"],
    ], { skill: "words" }),
    spell("trva3-t4", "Собери из букв слово «тихий».", "sessiz"),
    speak("trva3-t5", "Şehrin nasıl?", "Şehrim büyük ve biraz kalabalık.", "Мой город большой и немного людный.", { help: "Опиши вслух свой город." }),
    choice("trva3-t6", "Как сказать «напротив парка»?", [
      ["parkın karşısında", true],
      ["parkta karşı", false],
      ["park karşıdan", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "oyuncak-kedi",
    itemName: "Игрушечная ванская кошка",
    itemNameRu: "Oyuncak kedi",
    ru: "Yaşasın! Bir oyuncak kedi!",
    en: "Ура! Игрушечная кошка!",
    a11y: "Мягкая игрушка — белая кошечка с бусинками-глазами: одна голубая, другая зелёная.",
    image: p("oyuncak-kedi"),
    steps: ["Гюльсум-тейзе шьёт по вечерам игрушки.", "Она дарит Мурзику маленькую белую кошечку.", "Глаза-бусинки: голубая и зелёная.", "«Küçük bir Boncuk!» — «Маленькая Бончук!»"],
    bridge: "Утром почтальон приносит письмо. Из Стамбула!",
  },
};

const van4: Lesson = {
  id: "tr-a1-van-4",
  level: "A1",
  cityId: "tr-van",
  number: 4,
  title: "Письмо из Стамбула",
  minutes: 7,
  goals: ["Понять короткое письмо", "Узнать, как начинают и заканчивают письмо", "Понять «он сказал…»: dedi"],
  vocabNote: "Sevgili — «дорогой, дорогая». Sevgiler — «с любовью» (в конце письма). Dedi — «сказал».",
  vocab: [
    v("trva4-1", "Sevgili Murzik,", "Дорогой Мурзик,", "Конверт с турецкой маркой, внутри письмо на голубой бумаге.", "Послушать Sevgili Murzik", p("l4-1")),
    v("trva4-2", "Umarım iyisindir.", "Надеюсь, у тебя всё хорошо.", "Начало письма аккуратным почерком.", "Послушать Umarım iyisindir", p("l4-2")),
    v("trva4-3", "Kafeye yaşlı bir kedi geldi.", "В кафе пришёл старый кот.", "Рисунок на полях письма: кот у двери кафе.", "Послушать Kafeye yaşlı bir kedi geldi", p("l4-3")),
    v("trva4-4", "Başında bir şapka vardı.", "На голове у него была шляпа.", "Рисунок на полях: шляпа.", "Послушать Başında bir şapka vardı", p("l4-4")),
    v("trva4-5", "«Asya'yı tanıyorum» dedi.", "«Я знаю Асю», — сказал он.", "Мурзик читает письмо, широко раскрыв глаза.", "Послушать Asya'yı tanıyorum dedi", p("l4-5")),
    v("trva4-6", "Seni sordu.", "Он спрашивал о тебе.", "Мурзик смотрит на Тома поверх письма.", "Послушать Seni sordu", p("l4-6")),
    v("trva4-7", "Sevgiler, Ayşe Teyze", "С любовью, Айше-тейзе", "Подпись внизу письма и нарисованный стаканчик чая.", "Послушать Sevgiler, Ayşe Teyze", p("l4-7")),
  ],
  dialogue: {
    title: "Голубой конверт",
    note: "Tanımak — «знать (кого-то)», «быть знакомым». Her yerde — «везде». Gördüm — «я видел».",
    lines: [
      line("murzik", "Tom! Ayşe Teyze'den mektup!", "Том! Письмо от Айше-тейзе!"),
      line("tom", "Oku, oku! Ne yazıyor?", "Читай, читай! Что она пишет?"),
      line("ayse", "Sevgili Murzik, nasılsın? Umarım iyisindir. Dün kafeye yaşlı, beyaz bir kedi geldi. Başında bir şapka vardı.", "Дорогой Мурзик, как ты? Надеюсь, у тебя всё хорошо. Вчера в кафе пришёл старый белый кот. На голове у него была шляпа."),
      line("ayse", "«Asya'yı tanıyorum» dedi. Seni sordu. Sevgiler, Ayşe Teyze.", "«Я знаю Асю», — сказал он. Спрашивал о тебе. С любовью, Айше-тейзе."),
      line("murzik", "Şapkalı kedi! Onu her yerde gördüm, Tom!", "Кот в шляпе! Я видел его везде, Том!"),
      line("tom", "Pamukkale'de, Bodrum'da, Konya'da… Evet!", "В Памуккале, в Бодруме, в Конье… Да!"),
    ],
    gist: choice("trva4-d1", "Что сказал кот в шляпе Айше-тейзе?", [
      ["Что он знает Асю.", true],
      ["Что он живёт в Ване.", false],
      ["Что он ищет Тома.", false],
    ]),
  },
  grammar: [
    {
      title: "Было: vardı, yoktu",
      paragraphs: [
        "Var и yok в прошлом: vardı — «был, была, было», yoktu — «не было». Başında bir şapka vardı. — На голове у него была шляпа. Kafede kimse yoktu. — В кафе никого не было.",
        "«Он сказал» — dedi, после слов в кавычках: «Merhaba» dedi. — «Привет», — сказал он.",
      ],
      examples: [
        { ru: "Dün parkta çok kedi vardı.", en: "Вчера в парке было много кошек." },
        { ru: "Mektupta adres yoktu.", en: "В письме не было адреса." },
      ],
    },
  ],
  tasks: [
    listen("trva4-t1", "Послушай. Что было на голове у почтальона?", "Başında siyah bir şapka vardı.", [
      ["Чёрная шляпа.", true],
      ["Белая шляпа.", false],
      ["Ничего не было.", false],
    ]),
    choice("trva4-t2", "Как сказать «Адреса не было»?", [
      ["Adres yoktu.", true],
      ["Adres vardı.", false],
      ["Adres yokdu.", false],
    ], { skill: "grammar" }),
    match("trva4-t3", "Соедини пары.", [
      ["Sevgili…", "Дорогой…"],
      ["Sevgiler", "С любовью"],
      ["dedi", "сказал"],
      ["şapka", "шляпа"],
    ], { skill: "words" }),
    missing("trva4-t4", "Какой буквы не хватает? («дорогой»)", "Sev", "ili", "g", ["g", "ğ", "k"]),
    speak("trva4-t5", "Mektupta ne yazıyor?", "Kafeye şapkalı bir kedi geldi.", "В кафе пришёл кот в шляпе.", { help: "Перескажи вслух главное из письма." }),
    choice("trva4-t6", "Как сказать «тихий город»?", [
      ["sessiz bir şehir", true],
      ["şehir sessiz bir", false],
      ["bir sessiz şehirler", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "mektup-kagidi",
    itemName: "Бумага для писем",
    itemNameRu: "Mektup kâğıdı",
    ru: "Yaşasın! Mektup kâğıdı!",
    en: "Ура! Бумага для писем!",
    a11y: "Стопка голубой бумаги для писем с тонкой рамкой из цветочков, рядом конверты.",
    image: p("mektup-kagidi"),
    steps: ["Мурзик хочет сразу ответить Айше-тейзе.", "Гюльсум-тейзе приносит голубую бумагу для писем.", "«Cevap yaz, canım!» — «Напиши ответ, милый!»", "Бумага ложится на столик у окна."],
    bridge: "А чем писать? Мурзик ищет ручку…",
  },
};

const van5: Lesson = {
  id: "tr-a1-van-5",
  level: "A1",
  cityId: "tr-van",
  number: 5,
  title: "Пишем ответ",
  minutes: 7,
  goals: ["Написать короткое письмо", "Сказать «я в Ване», «я скучаю»", "Закончить письмо: «до встречи»"],
  vocabNote: "Özledim — «я соскучился». Sizi özledim — «я по вам соскучился» (вежливо). Görüşmek üzere — «до встречи». Ellerinizden öperim — «целую ваши руки»: так тепло и уважительно заканчивают письмо старшему.",
  vocab: [
    v("trva5-1", "Sevgili Ayşe Teyze,", "Дорогая Айше-тейзе,", "Мурзик начинает письмо, высунув кончик языка.", "Послушать Sevgili Ayşe Teyze", p("l5-1")),
    v("trva5-2", "Ben iyiyim.", "У меня всё хорошо.", "Мурзик рисует на полях улыбку.", "Послушать Ben iyiyim", p("l5-2")),
    v("trva5-3", "Şimdi Van'dayım.", "Сейчас я в Ване.", "Мурзик рисует озеро и гору.", "Послушать Şimdi Van'dayım", p("l5-3")),
    v("trva5-4", "Burası çok güzel.", "Здесь очень красиво.", "Вид из окна на синее озеро.", "Послушать Burası çok güzel", p("l5-4")),
    v("trva5-5", "Sizi çok özledim.", "Я очень по вам соскучился.", "Мурзик прижимает лапку к сердцу.", "Послушать Sizi çok özledim", p("l5-5")),
    v("trva5-6", "Mektubunuz için teşekkür ederim.", "Спасибо за ваше письмо.", "Мурзик бережно складывает письмо Айше-тейзе.", "Послушать Mektubunuz için teşekkür ederim", p("l5-6")),
    v("trva5-7", "Ellerinizden öperim.", "Целую ваши руки.", "Мурзик дописывает последнюю строчку и ставит подпись-лапку.", "Послушать Ellerinizden öperim", p("l5-7")),
  ],
  dialogue: {
    title: "Письмо в Стамбул",
    note: "Мурзик читает письмо вслух, Том помогает. Gelirse — «если придёт». Diye sorun — «спросите так». Kimsin — «кто ты».",
    lines: [
      line("murzik", "Sevgili Ayşe Teyze, nasılsınız? Ben iyiyim.", "Дорогая Айше-тейзе, как вы? У меня всё хорошо."),
      line("murzik", "Şimdi Van'dayım. Burası çok güzel. Bir Van kedisi var, yüzüyor!", "Сейчас я в Ване. Здесь очень красиво. Тут есть ванская кошка, она плавает!"),
      line("tom", "Şapkalı kediyi de yaz.", "Про кота в шляпе тоже напиши."),
      line("murzik", "Şapkalı kedi tekrar gelirse, ona «Sen kimsin?» diye sorun, lütfen.", "Если кот в шляпе снова придёт, спросите его, пожалуйста: «Кто ты?»"),
      line("murzik", "Sizi çok özledim. Görüşmek üzere! Ellerinizden öperim. Murzik.", "Я очень по вам соскучился. До встречи! Целую ваши руки. Мурзик."),
      line("tom", "Harika bir mektup!", "Чудесное письмо!"),
    ],
    gist: choice("trva5-d1", "О чём Мурзик просит Айше-тейзе?", [
      ["Спросить кота в шляпе, кто он.", true],
      ["Прислать ему чай.", false],
      ["Приехать в Ван.", false],
    ]),
  },
  grammar: [
    {
      title: "Я здесь: -dayım, -deyim",
      paragraphs: [
        "«Я в…» — окончание «где» + «я»: Van'dayım (я в Ване), evdeyim (я дома), oteldeyim (я в гостинице), İstanbul'dayım (я в Стамбуле).",
        "После глухих — -tayım / -teyim: Paris'teyim (я в Париже), parktayım (я в парке).",
      ],
      examples: [
        { ru: "Şimdi Trabzon'dayım.", en: "Сейчас я в Трабзоне." },
        { ru: "Tom şimdi parkta.", en: "Том сейчас в парке." },
      ],
    },
  ],
  tasks: [
    choice("trva5-t1", "Как сказать «Я в Париже»?", [
      ["Paris'teyim.", true],
      ["Paris'deyim.", false],
      ["Paris'e im.", false],
    ], { skill: "grammar" }),
    listen("trva5-t2", "Послушай. Где сейчас пишущий?", "Şimdi oteldeyim. Burası çok sessiz.", [
      ["В гостинице, там тихо.", true],
      ["Дома, там шумно.", false],
      ["В парке, там людно.", false],
    ]),
    match("trva5-t3", "Соедини пары.", [
      ["özledim", "я соскучился"],
      ["Görüşmek üzere!", "До встречи!"],
      ["burası", "здесь, это место"],
      ["mektup", "письмо"],
    ], { skill: "words" }),
    spell("trva5-t4", "Собери из букв слово «письмо».", "mektup"),
    speak("trva5-t5", "Neredesin? Nasılsın?", "Şimdi evdeyim. Ben iyiyim.", "Сейчас я дома. У меня всё хорошо.", { help: "Скажи вслух, где ты и как у тебя дела." }),
    listen("trva5-t6", "Вспомни прошлый урок. Что сказал кот?", "«Asya'yı tanıyorum» dedi.", [
      ["«Я знаю Асю».", true],
      ["«Я ищу Тома».", false],
      ["«Я живу в Париже».", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "dolma-kalem",
    itemName: "Перьевая ручка",
    itemNameRu: "Dolma kalem",
    ru: "Yaşasın! Bir dolma kalem!",
    en: "Ура! Перьевая ручка!",
    a11y: "Старинная перьевая ручка тёмно-синего цвета с золотым пером лежит на голубом письме.",
    image: p("dolma-kalem"),
    steps: ["Гюльсум-тейзе достаёт из ящика старую перьевую ручку.", "«Bu babamındı.» — «Это ручка моего папы.»", "Мурзик переписывает ею письмо начисто.", "Буквы получаются красивые и ровные."],
    bridge: "Письмо готово! Но открыта ли сейчас почта?",
  },
};

const van6: Lesson = {
  id: "tr-a1-van-6",
  level: "A1",
  cityId: "tr-van",
  number: 6,
  title: "Открыто или закрыто?",
  minutes: 7,
  goals: ["Спросить, открыто ли место", "Сказать «до пяти часов»: saat beşe kadar", "Назвать дни, когда закрыто"],
  vocabNote: "-e kadar — «до»: akşama kadar — до вечера, yarına kadar — до завтра, saat beşe kadar — до пяти часов.",
  vocab: [
    v("trva6-1", "Postane açık mı?", "Почта открыта?", "Мурзик с письмом спешит по улице.", "Послушать Postane açık mı", p("l6-1")),
    v("trva6-2", "Saat beşe kadar açık.", "Открыто до пяти часов.", "Табличка с часами работы на двери почты.", "Послушать Saat beşe kadar açık", p("l6-2")),
    v("trva6-3", "kapalı", "закрыто", "Табличка KAPALI на двери магазина.", "Послушать kapalı", p("l6-3")),
    v("trva6-4", "Pazartesi kapalı.", "В понедельник закрыто.", "Календарь, понедельник перечёркнут.", "Послушать Pazartesi kapalı", p("l6-4")),
    v("trva6-5", "Saat kaçta açılıyor?", "Во сколько открывается?", "Мурзик стоит перед закрытой дверью музея.", "Послушать Saat kaçta açılıyor", p("l6-5")),
    v("trva6-6", "akşama kadar", "до вечера", "Солнце опускается к озеру.", "Послушать akşama kadar", p("l6-6")),
    v("trva6-7", "Yetiştik!", "Успели!", "Мурзик и Том вбегают в дверь почты за пять минут до закрытия.", "Послушать Yetiştik", p("l6-7")),
  ],
  dialogue: {
    title: "Бегом на почту",
    note: "Koş — «беги». Kapanıyor — «закрывается». Hâlâ — «всё ещё».",
    lines: [
      line("murzik", "Gülsüm Teyze, postane açık mı?", "Гюльсум-тейзе, почта открыта?"),
      line("gulsum", "Saat beşe kadar açık. Şimdi saat dört buçuk. Koş!", "До пяти часов. Сейчас половина пятого. Беги!"),
      line("tom", "Müze de açık mı?", "А музей тоже открыт?"),
      line("gulsum", "Hayır, müze bugün kapalı. Pazartesi kapalı.", "Нет, музей сегодня закрыт. По понедельникам закрыт."),
      line("murzik", "Yetiştik! Postane hâlâ açık!", "Успели! Почта ещё открыта!"),
      line("postman", "Evet, ama beş dakika sonra kapanıyor!", "Да, но через пять минут закрывается!"),
    ],
    gist: choice("trva6-d1", "Почему музей закрыт?", [
      ["Сегодня понедельник.", true],
      ["Уже вечер.", false],
      ["Там ремонт.", false],
    ]),
  },
  grammar: [
    {
      title: "До: -e kadar",
      paragraphs: [
        "«До» — слово с окончанием -e / -a и kadar: saat beşe kadar (до пяти), akşama kadar (до вечера), göle kadar (до озера), Ankara'ya kadar (до Анкары).",
        "«С … до …» — -den … -e kadar: dokuzdan beşe kadar — с девяти до пяти.",
      ],
      examples: [
        { ru: "Müze dokuzdan beşe kadar açık.", en: "Музей открыт с девяти до пяти." },
        { ru: "Göle kadar yürüyelim.", en: "Давай дойдём пешком до озера." },
      ],
    },
  ],
  tasks: [
    choice("trva6-t1", "Как сказать «до вечера»?", [
      ["akşama kadar", true],
      ["akşamda kadar", false],
      ["akşamdan kadar", false],
    ], { skill: "grammar" }),
    listen("trva6-t2", "Послушай. Когда открыт магазин?", "Dükkân dokuzdan yediye kadar açık.", [
      ["С девяти до семи.", true],
      ["С семи до девяти.", false],
      ["До девяти.", false],
    ]),
    match("trva6-t3", "Соедини пары.", [
      ["açık", "открыто"],
      ["kapalı", "закрыто"],
      ["Pazartesi", "понедельник"],
      ["Yetiştik!", "Успели!"],
    ], { skill: "words" }),
    missing("trva6-t4", "Какой буквы не хватает? («закрыто»)", "kap", "lı", "a", ["a", "ı", "e"]),
    speak("trva6-t5", "Okul saat kaça kadar açık?", "Okul saat üçe kadar açık.", "Школа открыта до трёх часов.", { help: "Скажи вслух, до скольки работает место." }),
    choice("trva6-t6", "Как начать письмо подруге?", [
      ["Sevgili Selin,", true],
      ["Sevgiler Selin,", false],
      ["Görüşmek üzere Selin,", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kar-kuresi",
    itemName: "Снежный шар",
    itemNameRu: "Kar küresi",
    ru: "Yaşasın! Bir kar küresi!",
    en: "Ура! Снежный шар!",
    a11y: "Стеклянный снежный шар: внутри крепость на скале и синее озеро, а вокруг кружится снег.",
    image: p("kar-kuresi"),
    steps: ["Рядом с почтой — сувенирная лавка.", "Она открыта до шести!", "Том покупает Мурзику снежный шар с крепостью и озером.", "Мурзик трясёт его — и над крепостью кружится снег."],
    bridge: "Завтра Мурзик сам покажет Тому город. Он теперь экскурсовод!",
  },
};

const van7: Lesson = {
  id: "tr-a1-van-7",
  level: "A1",
  cityId: "tr-van",
  number: 7,
  title: "Экскурсовод Мурзик",
  minutes: 8,
  goals: ["Рассказать о городе", "Показать, где что находится", "Вспомнить все слова Вана"],
  vocabNote: "Rehber — «экскурсовод, гид». Burası — «это место, здесь». Şurası — «вон то место». Ünlü — «знаменитый».",
  vocab: [
    v("trva7-1", "Ben bugün rehberim!", "Сегодня я экскурсовод!", "Мурзик в кепке с флажком-лапкой, за ним Том.", "Послушать Ben bugün rehberim", p("l7-1")),
    v("trva7-2", "Burası Van Kalesi.", "Это Ванская крепость.", "Мурзик показывает лапкой на крепость.", "Послушать Burası Van Kalesi", p("l7-2")),
    v("trva7-3", "Çok eski ve çok ünlü.", "Очень старая и очень знаменитая.", "Древние камни крепостной стены.", "Послушать Çok eski ve çok ünlü", p("l7-3")),
    v("trva7-4", "Şurası bizim kahvaltı evimiz.", "Вон там наш дом завтраков.", "Вдали у озера — домик Гюльсум-тейзе.", "Послушать Şurası bizim kahvaltı evimiz", p("l7-4")),
    v("trva7-5", "Soru var mı?", "Есть вопросы?", "Мурзик поворачивается к Тому, подняв лапку.", "Послушать Soru var mı", p("l7-5")),
    v("trva7-6", "otlu peynir", "сыр с травами", "Кусок белого сыра с зелёными травами.", "Послушать otlu peynir", p("l7-6")),
    v("trva7-7", "Harika bir rehbersin!", "Ты отличный экскурсовод!", "Том аплодирует, Мурзик кланяется.", "Послушать Harika bir rehbersin", p("l7-7")),
  ],
  dialogue: {
    title: "Экскурсия",
    note: "Soru var! — «у меня вопрос!» (буквально «есть вопрос»). Hadi — «давай, пошли».",
    lines: [
      line("murzik", "Hoş geldiniz! Ben bugün rehberim!", "Добро пожаловать! Сегодня я экскурсовод!"),
      line("murzik", "Burası Van Kalesi. Çok eski ve çok ünlü. Gölün yanında.", "Это Ванская крепость. Очень старая и очень знаменитая. Рядом с озером."),
      line("tom", "Soru var! Müze açık mı?", "У меня вопрос! Музей открыт?"),
      line("murzik", "Evet, bugün akşama kadar açık.", "Да, сегодня до вечера."),
      line("murzik", "Şurası bizim kahvaltı evimiz. Orada otlu peynir var!", "А вон там наш дом завтраков. Там есть сыр с травами!"),
      line("tom", "Harika bir rehbersin! Hadi, kahvaltıya!", "Ты отличный экскурсовод! Пошли завтракать!"),
    ],
    gist: choice("trva7-d1", "Где находится крепость?", [
      ["Рядом с озером.", true],
      ["Напротив почты.", false],
      ["За домом завтраков.", false],
    ]),
  },
  grammar: [
    {
      title: "Burası, şurası, orası",
      paragraphs: [
        "Burası — «это место (здесь)», şurası — «вон то место (недалеко, показываю)», orası — «то место (там)».",
        "Так удобно знакомить с городом: Burası müze. — Здесь музей. Şurası postane. — Вон там почта.",
      ],
      examples: [
        { ru: "Burası çok sessiz.", en: "Здесь очень тихо." },
        { ru: "Orası çok kalabalık.", en: "Там очень людно." },
      ],
    },
  ],
  tasks: [
    listen("trva7-t1", "Аудиоэкзамен. Что говорит экскурсовод?", "Burası eski bir kale. Gölün yanında. Müze saat beşe kadar açık.", [
      ["Это старая крепость у озера, музей открыт до пяти.", true],
      ["Это новый музей у почты, он закрыт.", false],
      ["Это остров, лодка ходит каждый час.", false],
    ]),
    choice("trva7-t2", "Как сказать «Здесь очень тихо»?", [
      ["Burası çok sessiz.", true],
      ["Orası çok kalabalık.", false],
      ["Burada sessiz yok.", false],
    ], { skill: "grammar" }),
    match("trva7-t3", "Соедини пары.", [
      ["rehber", "экскурсовод"],
      ["ünlü", "знаменитый"],
      ["burası", "это место, здесь"],
      ["otlu peynir", "сыр с травами"],
    ], { skill: "words" }),
    spell("trva7-t4", "Собери из букв слово «экскурсовод».", "rehber"),
    speak("trva7-t5", "Şehrinde ne var? Anlat!", "Burası benim şehrim. Burada eski bir park var.", "Это мой город. Здесь есть старый парк.", { help: "Проведи вслух маленькую экскурсию по своему городу." }),
    script("trva7-t6", "Вспомни весь Ван. Закончи разговоры.", [
      { speaker: "Том", text: "Burada müze var mı?" },
      { speaker: "Ты", answer: "Evet, var. Kalenin yanında.", options: ["Evet, var. Kalenin yanında.", "Evet, var. Kale yanında.", "Hayır, var."] },
      { speaker: "Том", text: "Müze açık mı?" },
      { speaker: "Ты", answer: "Evet, saat beşe kadar açık.", options: ["Evet, saat beşe kadar açık.", "Evet, saat beşte kadar açık.", "Hayır, açık."] },
      { speaker: "Гюльсум-тейзе", text: "Van nasıl bir şehir?" },
      { speaker: "Ты", answer: "Sessiz ve çok güzel bir şehir.", options: ["Sessiz ve çok güzel bir şehir.", "Bir şehir sessiz güzel.", "Görüşmek üzere!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kahvalti-tabagi",
    itemName: "Тарелка для завтрака",
    itemNameRu: "Kahvaltı tabağı",
    ru: "Yaşasın! Bir kahvaltı tabağı!",
    en: "Ура! Тарелка для завтрака!",
    a11y: "Большая расписная тарелка с маленькими круглыми ячейками для сыра, мёда, оливок и варенья.",
    image: p("kahvalti-tabagi"),
    steps: ["После экскурсии — знаменитый ванский завтрак.", "Сыр с травами, мёд, сливки, оливки, горячий хлеб…", "Гюльсум-тейзе дарит Мурзику расписную тарелку.", "«Her sabah bizi hatırla!» — «Вспоминай нас каждое утро!»"],
    bridge: "Пора в путь. Следующая остановка — Газиантеп, город меди и фисташек.",
  },
};

const story: CityStory = {
  home: {
    name: "Комната у озера",
    nameRu: "Göl kenarında bir oda",
    image: p("home"),
    a11y: "Пустая светлая комната в доме у озера. В окне синее озеро Ван и заснеженная гора. Посередине чемодан Мурзика.",
  },
  keepsakeId: "kahvalti-tabagi",
  welcomeRu: "Merhaba, Van!",
  welcomeEn: "Привет, Ван!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том на берегу огромного синего озера Ван. Вдали заснеженная гора. Солнечно.",
  departureImage: p("departure"),
  departureA11y: "Гюльсум-тейзе машет на прощание у дома завтраков, рядом сидит мокрая белая кошка Бончук.",
  finale: [
    {
      image: p("letter"),
      a11y: "Вечер. Мурзик сидит на пуфе у окна и смотрит на тёмное озеро. Над ним, как облачка, воспоминания: белые террасы, ночная улочка, апельсиновый дворик, бирюзовый купол под снегом. В каждом — маленький белый кот в шляпе.",
      lines: [
        { en: "Вечером Мурзик долго смотрит на озеро и вспоминает." },
        { en: "Памуккале. Бодрум. Анталья. Конья. Каппадокия. И везде — он, белый кот в шляпе." },
        { ru: "Asya'yı tanıyor… Peki, o kim?", en: "Он знает Асю… Но кто же он?" },
      ],
    },
    {
      image: p("kahvalti-tabagi"),
      a11y: "Мурзик обходит свою комнату у озера, которую обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свою комнату у озера. Том фотографирует её для журнала." },
        { en: "С собой — расписная тарелка для завтрака." },
        { en: "Письмо Айше-тейзе ложится в кармашек чемодана, рядом с открытками." },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "Van tamamlandı!", en: "Ван пройден!" },
        { en: "7 / 7 уроков" },
        { en: "A1 — пройден двенадцатый блок." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Гюльсум-тейзе машет на прощание.",
      lines: [
        { ru: "Hoşça kalın, Gülsüm Teyze!", en: "До свидания, Гюльсум-тейзе!" },
        { ru: "Sıradaki durak: Gaziantep!", en: "Следующая остановка: Газиантеп!" },
      ],
    },
    {
      image: p("road"),
      a11y: "Автобус едет на юго-запад по горной дороге, внизу сверкает озеро.",
      lines: [{ ru: "Van → Gaziantep", en: "Ван → Газиантеп" }],
    },
    {
      image: pic("tr/gaziantep/arrival"),
      a11y: "Мурзик и Том в Газиантепе на медном базаре: блестящие медные кувшины и подносы, мастер стучит молоточком.",
      lines: [
        { ru: "Merhaba, Gaziantep!", en: "Привет, Газиантеп!" },
        { ru: "Ne güzel kokuyor!", en: "Как вкусно пахнет!" },
      ],
    },
  ],
};

export const trVan = {
  id: "tr-van",
  name: "Ван",
  nameTr: "Van",
  lessons: [van1, van2, van3, van4, van5, van6, van7],
  story,
};
