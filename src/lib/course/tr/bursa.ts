import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { build, choice, line, listen, match, missing, script, speak, spell, tf, v } from "./make";

/* Бурса · «Еда и покупки» · чайная, закусочная, рынок, цены, оплата, ужин, готовим дома. */

const p = (name: string) => pic(`tr/bursa/${name}`);

const bursa1: Lesson = {
  id: "tr-a1-bursa-1",
  level: "A1",
  cityId: "tr-bursa",
  number: 1,
  title: "В чайной",
  minutes: 7,
  goals: ["Заказать чай или кофе", "Сказать «с сахаром» и «без сахара»", "Попросить счёт"],
  vocabNote: "Турецкий кофе варят прямо с сахаром, поэтому официант спрашивает заранее: şekerli mi, şekersiz mi?",
  vocab: [
    v("trbu1-1", "Ne istersiniz?", "Что желаете?", "Официант с подносом вежливо склоняется над столиком.", "Послушать Ne istersiniz", p("l1-1")),
    v("trbu1-2", "Bir çay, lütfen.", "Чай, пожалуйста.", "Том показывает один палец, рядом стаканчик-тюльпан с чаем.", "Послушать Bir çay, lütfen", p("l1-2")),
    v("trbu1-3", "Bir Türk kahvesi, lütfen.", "Турецкий кофе, пожалуйста.", "Маленькая чашечка густого кофе с пенкой и стакан воды.", "Послушать Bir Türk kahvesi, lütfen", p("l1-3")),
    v("trbu1-4", "Şekerli mi, şekersiz mi?", "С сахаром или без?", "Официант держит в одной руке сахарницу, а другую разводит вопросительно.", "Послушать Şekerli mi, şekersiz mi", p("l1-4")),
    v("trbu1-5", "Az şekerli.", "С небольшим количеством сахара.", "Мурзик показывает лапой крошечный кусочек сахара.", "Послушать Az şekerli", p("l1-5")),
    v("trbu1-6", "Başka bir şey?", "Что-нибудь ещё?", "Официант с блокнотом ждёт, приподняв брови.", "Послушать Başka bir şey", p("l1-6")),
    v("trbu1-7", "Hesap, lütfen.", "Счёт, пожалуйста.", "Том поднимает руку, будто пишет в воздухе, — просит счёт.", "Послушать Hesap, lütfen", p("l1-7")),
  ],
  dialogue: {
    title: "Чайная у Коза-хана",
    note: "Altında — «под ним». Турки любят слово resim: это и картина, и рисунок.",
    lines: [
      line("waiter", "Hoş geldiniz! Ne istersiniz?", "Добро пожаловать! Что желаете?"),
      line("tom", "Bir çay, lütfen.", "Чай, пожалуйста."),
      line("murzik", "Bir Türk kahvesi, lütfen.", "Турецкий кофе, пожалуйста."),
      line("waiter", "Şekerli mi, şekersiz mi?", "С сахаром или без?"),
      line("murzik", "Az şekerli.", "С небольшим количеством сахара."),
      line("waiter", "Başka bir şey?", "Что-нибудь ещё?"),
      line("tom", "Hayır, teşekkürler. Murzik, bak! Duvarda bir resim var.", "Нет, спасибо. Мурзик, смотри! На стене рисунок."),
      line("murzik", "Bir kedi resmi! Altında bir isim var: Asya!", "Рисунок кошки! А под ним имя: Ася!"),
    ],
    gist: choice("trbu1-d1", "Что Мурзик видит на стене?", [
      ["Рисунок кошки с подписью «Ася».", true],
      ["Карту Бурсы.", false],
      ["Меню.", false],
    ]),
  },
  grammar: [
    {
      title: "С и без: -lı и -sız",
      paragraphs: [
        "«С чем-то» — окончание -lı, -li, -lu, -lü: şeker-li — с сахаром, süt-lü — с молоком.",
        "«Без чего-то» — -sız, -siz, -suz, -süz: şeker-siz — без сахара, süt-süz — без молока. Гласная, как всегда, подстраивается под слово.",
      ],
      examples: [
        { ru: "Şekersiz bir kahve, lütfen.", en: "Кофе без сахара, пожалуйста." },
        { ru: "Sütlü çay var mı?", en: "Есть чай с молоком?" },
      ],
    },
  ],
  tasks: [
    listen("trbu1-t1", "Послушай. Какой кофе хочет гость?", "Bir Türk kahvesi, az şekerli.", [
      ["Турецкий, чуть-чуть сладкий.", true],
      ["Чай без сахара.", false],
      ["Кофе без сахара.", false],
    ]),
    match("trbu1-t2", "Соедини пары.", [
      ["Hesap, lütfen.", "Счёт, пожалуйста."],
      ["Başka bir şey?", "Что-нибудь ещё?"],
      ["şekerli", "с сахаром"],
      ["şekersiz", "без сахара"],
    ], { skill: "words" }),
    choice("trbu1-t3", "Как сказать «без молока»? (молоко — süt)", [
      ["sütsüz", true],
      ["sütsız", false],
      ["sütlü", false],
    ], { skill: "grammar" }),
    missing("trbu1-t4", "Какой буквы не хватает? («кофе»)", "kahv", "", "e", ["e", "a", "ı"]),
    speak("trbu1-t5", "Ne istersiniz?", "Bir çay, lütfen.", "Чай, пожалуйста.", { help: "Закажи вслух, что хочешь." }),
    choice("trbu1-t6", "Как спросить «Где остановка?»", [
      ["Durak nerede?", true],
      ["Durak ne kadar?", false],
      ["Durak var mı?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fincan",
    itemName: "Кофейная чашечка",
    itemNameRu: "Fincan",
    ru: "Yaşasın! Küçük bir fincan!",
    en: "Ура! Маленькая чашечка!",
    a11y: "Маленькая фарфоровая чашечка для турецкого кофе с красным узором и блюдцем. Рядом стакан воды и кусочек лукума.",
    image: p("fincan"),
    steps: ["Официант приносит кофе в красивой чашечке.", "«Bu fincan sizin olsun!» — «Пусть эта чашечка будет вашей!»", "Мурзик бережно заворачивает её.", "Первая вещь для дома в Бурсе!"],
    bridge: "Официант говорит: рисунок оставила одна гостья, давно. Хозяйка закусочной напротив знает больше.",
  },
};

const bursa2: Lesson = {
  id: "tr-a1-bursa-2",
  level: "A1",
  cityId: "tr-bursa",
  number: 2,
  title: "В закусочной",
  minutes: 7,
  goals: ["Попросить меню и совет", "Заказать еду и напиток", "Сказать «я хочу есть»"],
  vocabNote: "Lokanta — простая турецкая закусочная с домашней едой. Искендер — знаменитое блюдо Бурсы: мясо, хлеб, томатный соус и йогурт.",
  vocab: [
    v("trbu2-1", "Menü var mı?", "Есть меню?", "Том вопросительно показывает на пустой стол.", "Послушать Menü var mı", p("l2-1")),
    v("trbu2-2", "Ne tavsiye edersiniz?", "Что вы посоветуете?", "Мурзик с меню в лапах смотрит на хозяйку закусочной.", "Послушать Ne tavsiye edersiniz", p("l2-2")),
    v("trbu2-3", "Bir İskender, lütfen.", "Один искендер, пожалуйста.", "Тарелка искендера: мясо на хлебе с томатным соусом и йогуртом.", "Послушать Bir İskender, lütfen", p("l2-3")),
    v("trbu2-4", "Çok açım!", "Я очень хочу есть!", "Мурзик держится за пустой животик, а в мечтах у него тарелка еды.", "Послушать Çok açım", p("l2-4")),
    v("trbu2-5", "Bir de ayran.", "И ещё айран.", "Высокий стакан белого айрана с пенкой.", "Послушать Bir de ayran", p("l2-5")),
    v("trbu2-6", "Vejetaryen yemek var mı?", "Есть вегетарианская еда?", "Том показывает на картинку с овощами в меню.", "Послушать Vejetaryen yemek var mı", p("l2-6")),
    v("trbu2-7", "Bir dakika, lütfen.", "Минутку, пожалуйста.", "Хозяйка закусочной поднимает палец: «Сейчас!»", "Послушать Bir dakika, lütfen", p("l2-7")),
  ],
  dialogue: {
    title: "У Зейнеп-ханым",
    note: "Oturun — «садитесь». Bursa'nın en meşhur yemeği — «самое знаменитое блюдо Бурсы».",
    lines: [
      line("zeynep", "Hoş geldiniz! Buyurun, oturun.", "Добро пожаловать! Проходите, садитесь."),
      line("tom", "Teşekkürler. Menü var mı?", "Спасибо. Есть меню?"),
      line("zeynep", "Tabii, buyurun.", "Конечно, пожалуйста."),
      line("murzik", "Ne tavsiye edersiniz?", "Что вы посоветуете?"),
      line("zeynep", "İskender! Bursa'nın en meşhur yemeği.", "Искендер! Самое знаменитое блюдо Бурсы."),
      line("murzik", "Çok açım! Bir İskender, lütfen. Bir de ayran.", "Я очень хочу есть! Один искендер, пожалуйста. И ещё айран."),
      line("tom", "Ben de İskender istiyorum!", "Я тоже хочу искендер!"),
      line("zeynep", "Bir dakika!", "Минутку!"),
    ],
    gist: choice("trbu2-d1", "Что заказывает Мурзик?", [
      ["Искендер и айран.", true],
      ["Чай и симит.", false],
      ["Только воду.", false],
    ]),
  },
  grammar: [
    {
      title: "Я голодный: -ım, -im, -um, -üm",
      paragraphs: [
        "Чтобы сказать «я + какой», к слову добавляют -ım, -im, -um или -üm: aç → açım — я голодный, хочу есть.",
        "После гласной добавляется y: mutlu → mutlu-y-um — я счастлив. Ты уже знаешь такое слово: iyi → iyiyim — у меня всё хорошо.",
      ],
      examples: [
        { ru: "Açım!", en: "Хочу есть!" },
        { ru: "Murzik çok mutlu. — Ben de mutluyum!", en: "Мурзик очень счастлив. — Я тоже счастлив!" },
      ],
    },
  ],
  tasks: [
    choice("trbu2-t1", "Как сказать «Я хочу есть»?", [
      ["Açım.", true],
      ["Aç.", false],
      ["Açsın.", false],
    ], { skill: "grammar" }),
    listen("trbu2-t2", "Послушай. Что советует хозяйка?", "İskender tavsiye ederim.", [
      ["Искендер.", true],
      ["Айран.", false],
      ["Симит.", false],
    ]),
    match("trbu2-t3", "Соедини пары.", [
      ["menü", "меню"],
      ["ayran", "айран"],
      ["yemek", "еда"],
      ["vejetaryen", "вегетарианский"],
    ], { skill: "words" }),
    missing("trbu2-t4", "Какой буквы не хватает? («Есть меню?»)", "Men", " var mı?", "ü", ["ü", "u", "i"]),
    speak("trbu2-t5", "Ne istersiniz?", "Bir İskender, lütfen. Bir de ayran.", "Один искендер, пожалуйста. И ещё айран.", { help: "Закажи вслух обед." }),
    choice("trbu2-t6", "Официант спрашивает: Şekerli mi? Ты хочешь без сахара. Что ответить?", [
      ["Şekersiz, lütfen.", true],
      ["Şekerli, lütfen.", false],
      ["Hesap, lütfen.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tabak",
    itemName: "Расписная тарелка",
    itemNameRu: "Tabak",
    ru: "Yaşasın! Güzel bir tabak!",
    en: "Ура! Красивая тарелка!",
    a11y: "Большая керамическая тарелка с синими тюльпанами стоит на полке у Мурзика.",
    image: p("tabak"),
    steps: ["Зейнеп-ханым дарит Мурзику тарелку с тюльпанами.", "«Bursa'dan hatıra!» — «На память о Бурсе!»", "Мурзик ставит её на полку.", "Красота!"],
    bridge: "Зейнеп-ханым говорит: «Завтра базарный день. Пойдём вместе — я покажу самые свежие помидоры!»",
  },
};

const bursa3: Lesson = {
  id: "tr-a1-bursa-3",
  level: "A1",
  cityId: "tr-bursa",
  number: 3,
  title: "На рынке",
  minutes: 7,
  goals: ["Назвать продукты", "Купить килограмм чего-нибудь", "Сказать «много»: -lar / -ler"],
  vocabNote: "Pazar — и «рынок», и «воскресенье». В каждом районе Турции свой базарный день.",
  vocab: [
    v("trbu3-1", "pazar", "рынок", "Шумный рынок под тентами: горы овощей и фруктов.", "Послушать pazar", p("l3-1")),
    v("trbu3-2", "domates", "помидор", "Ящик красных блестящих помидоров.", "Послушать domates", p("l3-2")),
    v("trbu3-3", "elma", "яблоко", "Корзинка красных и зелёных яблок.", "Послушать elma", p("l3-3")),
    v("trbu3-4", "ekmek", "хлеб", "Круглый румяный хлеб на деревянной доске.", "Послушать ekmek", p("l3-4")),
    v("trbu3-5", "peynir", "сыр", "Белый турецкий сыр кусками в миске.", "Послушать peynir", p("l3-5")),
    v("trbu3-6", "Bir kilo elma, lütfen.", "Килограмм яблок, пожалуйста.", "Мурзик показывает на весы, где лежат яблоки.", "Послушать Bir kilo elma, lütfen", p("l3-6")),
    v("trbu3-7", "Taze mi?", "Свежие?", "Зейнеп-ханым придирчиво нюхает помидор.", "Послушать Taze mi", p("l3-7")),
  ],
  dialogue: {
    title: "Базарный день",
    note: "Bakalım — «посмотрим». Alalım — «давай купим».",
    lines: [
      line("seller", "Buyurun! Domatesler çok taze!", "Подходите! Помидоры очень свежие!"),
      line("zeynep", "Taze mi? Bakalım…", "Свежие? Посмотрим…"),
      line("seller", "Tabii taze! Bugün geldi.", "Конечно свежие! Сегодня привезли."),
      line("murzik", "Bir kilo domates, lütfen. Bir de elma.", "Килограмм помидоров, пожалуйста. И ещё яблоки."),
      line("seller", "Kaç kilo elma?", "Сколько килограммов яблок?"),
      line("murzik", "İki kilo.", "Два килограмма."),
      line("zeynep", "Peynir de alalım. Ve ekmek!", "Купим ещё сыра. И хлеба!"),
    ],
    gist: choice("trbu3-d1", "Что покупает Мурзик?", [
      ["Помидоры и яблоки.", true],
      ["Только хлеб.", false],
      ["Рыбу.", false],
    ]),
  },
  grammar: [
    {
      title: "Много: -lar и -ler",
      paragraphs: [
        "Множественное число — окончание -lar или -ler. После a, ı, o, u — -lar, после e, i, ö, ü — -ler: elma → elmalar, ekmek → ekmekler.",
        "Помни: после числа и после kilo множественное число не нужно — iki kilo domates, beş elma.",
      ],
      examples: [
        { ru: "Domatesler çok taze.", en: "Помидоры очень свежие." },
        { ru: "İki kilo elma, lütfen.", en: "Два килограмма яблок, пожалуйста." },
      ],
    },
  ],
  tasks: [
    choice("trbu3-t1", "Как сказать «яблоки»?", [
      ["elmalar", true],
      ["elmaler", false],
      ["elmalır", false],
    ], { skill: "grammar" }),
    listen("trbu3-t2", "Послушай. Сколько килограммов яблок?", "İki kilo elma, lütfen.", [
      ["Два.", true],
      ["Один.", false],
      ["Три.", false],
    ]),
    match("trbu3-t3", "Соедини пары.", [
      ["ekmek", "хлеб"],
      ["peynir", "сыр"],
      ["elma", "яблоко"],
      ["domates", "помидор"],
    ], { skill: "words" }),
    spell("trbu3-t4", "Собери из букв слово «сыр».", "peynir"),
    speak("trbu3-t5", "Ne istiyorsunuz?", "Bir kilo domates, lütfen.", "Килограмм помидоров, пожалуйста.", { help: "Попроси вслух что-нибудь на рынке." }),
    listen("trbu3-t6", "Вспомни чайную. Что просит гость?", "Hesap, lütfen.", [
      ["Счёт.", true],
      ["Меню.", false],
      ["Чай.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sepet",
    itemName: "Корзина",
    itemNameRu: "Sepet",
    ru: "Yaşasın! Büyük bir sepet!",
    en: "Ура! Большая корзина!",
    a11y: "Мурзик несёт плетёную корзину, полную помидоров, яблок и хлеба. Рядом идёт Зейнеп-ханым.",
    image: p("sepet"),
    steps: ["Продавец даёт им плетёную корзину.", "Мурзик складывает в неё покупки.", "Корзина тяжёлая, но Мурзик гордо несёт её сам.", "Теперь она будет стоять на кухне!"],
    bridge: "На рынке столько всего! А в лавке со сладостями — знаменитые каштаны Бурсы. Но сколько они стоят?",
  },
};

const bursa4: Lesson = {
  id: "tr-a1-bursa-4",
  level: "A1",
  cityId: "tr-bursa",
  number: 4,
  title: "Сколько стоит?",
  minutes: 7,
  goals: ["Спросить цену", "Понимать числа до 100", "Сказать «дорого», «дёшево» и спросить про скидку"],
  vocabNote: "Десятки легко запомнить парами: yirmi (20), otuz (30), kırk (40), elli (50). 25 — yirmi beş, буквально «двадцать пять».",
  vocab: [
    v("trbu4-1", "Ne kadar?", "Сколько стоит?", "Мурзик держит коробку сладостей и вопросительно смотрит на продавца.", "Послушать Ne kadar", p("l4-1")),
    v("trbu4-2", "yirmi, otuz, kırk, elli", "двадцать, тридцать, сорок, пятьдесят", "На прилавке четыре ценника: 20, 30, 40 и 50.", "Послушать yirmi, otuz, kırk, elli", p("l4-2")),
    v("trbu4-3", "altmış, yetmiş, seksen, doksan, yüz", "шестьдесят, семьдесят, восемьдесят, девяносто, сто", "Пять ценников по порядку: 60, 70, 80, 90 и 100.", "Послушать altmış, yetmiş, seksen, doksan, yüz", p("l4-3")),
    v("trbu4-4", "lira", "лира", "Несколько турецких монет и купюр на ладони.", "Послушать lira", p("l4-4")),
    v("trbu4-5", "Çok pahalı!", "Очень дорого!", "Мурзик с ужасом смотрит на огромный ценник, уши торчком.", "Послушать Çok pahalı", p("l4-5")),
    v("trbu4-6", "Ucuz.", "Дёшево.", "Мурзик довольно показывает на маленький ценник.", "Послушать Ucuz", p("l4-6")),
    v("trbu4-7", "İndirim var mı?", "Есть скидка?", "Том хитро улыбается продавцу и показывает пальцами «чуть-чуть».", "Послушать İndirim var mı", p("l4-7")),
  ],
  dialogue: {
    title: "Каштаны в сахаре",
    note: "Kestane şekeri — каштаны в сахаре, знаменитая сладость Бурсы. Peki — «ладно».",
    lines: [
      line("murzik", "Bu kestane şekeri ne kadar?", "Сколько стоят эти каштаны в сахаре?"),
      line("seller", "Yüz lira.", "Сто лир."),
      line("murzik", "Yüz lira mı? Çok pahalı!", "Сто лир? Очень дорого!"),
      line("seller", "Ama çok güzel! Tamam, doksan lira.", "Зато какие хорошие! Ладно, девяносто лир."),
      line("tom", "İndirim var mı? Seksen?", "А скидка есть? Восемьдесят?"),
      line("seller", "Peki, seksen beş lira.", "Ладно, восемьдесят пять лир."),
      line("murzik", "Tamam! Teşekkürler!", "Договорились! Спасибо!"),
    ],
    gist: choice("trbu4-d1", "За сколько в итоге купили каштаны?", [
      ["За 85 лир.", true],
      ["За 100 лир.", false],
      ["За 80 лир.", false],
    ]),
  },
  grammar: [
    {
      title: "Числа до 100",
      paragraphs: [
        "Составные числа строятся просто: десятки + единицы. yirmi beş — 25, kırk iki — 42, doksan dokuz — 99. Слово «и» не нужно.",
        "Цену спрашивают Ne kadar? или Kaç lira? Отвечают числом и словом lira: Elli lira.",
      ],
      examples: [
        { ru: "Bu ne kadar? — Otuz beş lira.", en: "Сколько это стоит? — Тридцать пять лир." },
        { ru: "Kaç lira? — Yetmiş.", en: "Сколько лир? — Семьдесят." },
      ],
    },
  ],
  tasks: [
    listen("trbu4-t1", "Послушай цену.", "Kırk beş lira.", [
      ["45 лир", true],
      ["54 лиры", false],
      ["40 лир", false],
    ]),
    match("trbu4-t2", "Соедини числа.", [
      ["otuz", "30"],
      ["elli", "50"],
      ["seksen", "80"],
      ["yüz", "100"],
    ], { skill: "words" }),
    choice("trbu4-t3", "Как сказать «семьдесят два»?", [
      ["yetmiş iki", true],
      ["iki yetmiş", false],
      ["yetmiş ve iki", false],
    ], { skill: "grammar" }),
    missing("trbu4-t4", "Какой буквы не хватает? («шестьдесят»)", "altm", "ş", "ı", ["ı", "i", "u"]),
    speak("trbu4-t5", "Bu ne kadar?", "Elli lira.", "Пятьдесят лир.", { help: "Назови цену вслух." }),
    choice("trbu4-t6", "Как сказать «помидоры»?", [
      ["domatesler", true],
      ["domateslar", false],
      ["domatesiler", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kestane",
    itemName: "Каштаны в сахаре",
    itemNameRu: "Kestane şekeri",
    ru: "Yaşasın! Kestane şekeri!",
    en: "Ура! Каштаны в сахаре!",
    a11y: "Красивая коробка с глазированными каштанами — сладостью Бурсы. Мурзик пробует один и жмурится от удовольствия.",
    image: p("kestane"),
    steps: ["Продавец заворачивает коробку в бумагу.", "Мурзик пробует один каштан.", "Жмурится от удовольствия.", "Коробка занимает почётное место на полке."],
    bridge: "В шёлковом ряду Коза-хана Мурзик видит платок, как на рисунке бабушки. Но как за него заплатить?",
  },
};

const bursa5: Lesson = {
  id: "tr-a1-bursa-5",
  level: "A1",
  cityId: "tr-bursa",
  number: 5,
  title: "Картой или наличными?",
  minutes: 7,
  goals: ["Спросить, можно ли заплатить картой", "Понять кассира", "Попросить чек и сдачу"],
  vocabNote: "Koza Han — старинный шёлковый рынок Бурсы. Koza — «кокон шелкопряда».",
  vocab: [
    v("trbu5-1", "Kartla mı, nakit mi?", "Картой или наличными?", "Кассир показывает на терминал и на ящик с деньгами.", "Послушать Kartla mı, nakit mi", p("l5-1")),
    v("trbu5-2", "Kartla ödeyebilir miyim?", "Можно оплатить картой?", "Мурзик протягивает банковскую карту и вопросительно смотрит.", "Послушать Kartla ödeyebilir miyim", p("l5-2")),
    v("trbu5-3", "Nakit.", "Наличными.", "Том кладёт на прилавок купюры.", "Послушать Nakit", p("l5-3")),
    v("trbu5-4", "fiş", "чек", "Длинный бумажный чек выползает из кассы.", "Послушать fiş", p("l5-4")),
    v("trbu5-5", "para üstü", "сдача", "Кассир отсчитывает монетки в лапу Мурзика.", "Послушать para üstü", p("l5-5")),
    v("trbu5-6", "Bozuk param yok.", "У меня нет мелочи.", "Мурзик выворачивает пустой кошелёк, из него вылетает моль.", "Послушать Bozuk param yok", p("l5-6")),
    v("trbu5-7", "Kasa nerede?", "Где касса?", "Мурзик с платком в лапах оглядывается в большом магазине.", "Послушать Kasa nerede", p("l5-7")),
  ],
  dialogue: {
    title: "Шёлковый ряд",
    note: "Değil mi? — «не так ли?», «правда?». Его ставят в конце фразы, как русское «правда?».",
    lines: [
      line("seller", "Bu ipek eşarp çok güzel, değil mi?", "Этот шёлковый платок очень красивый, правда?"),
      line("murzik", "Evet! Ne kadar?", "Да! Сколько стоит?"),
      line("seller", "Seksen lira.", "Восемьдесят лир."),
      line("murzik", "Kartla ödeyebilir miyim?", "Можно оплатить картой?"),
      line("seller", "Tabii. Kasa orada.", "Конечно. Касса там."),
      line("cashier", "Kartla mı, nakit mi?", "Картой или наличными?"),
      line("murzik", "Kartla. Fiş, lütfen.", "Картой. Чек, пожалуйста."),
      line("cashier", "Buyurun, fişiniz.", "Пожалуйста, ваш чек."),
    ],
    gist: choice("trbu5-d1", "Как платит Мурзик?", [
      ["Картой.", true],
      ["Наличными.", false],
      ["Он не платит.", false],
    ]),
  },
  grammar: [
    {
      title: "Можно? — -ebilir miyim?",
      paragraphs: [
        "«Можно мне…? / Могу я…?» — основа глагола + -ebilir miyim? или -abilir miyim?: öde-yebilir miyim? — можно заплатить?, al-abilir miyim? — можно взять?",
        "После a, ı, o, u — -abilir, после e, i, ö, ü — -ebilir. Если основа кончается на гласную, добавляется y: öde-y-ebilir.",
      ],
      examples: [
        { ru: "Kartla ödeyebilir miyim?", en: "Можно оплатить картой?" },
        { ru: "Bir fiş alabilir miyim?", en: "Можно мне чек?" },
      ],
    },
  ],
  tasks: [
    choice("trbu5-t1", "Как спросить «Можно оплатить картой?»", [
      ["Kartla ödeyebilir miyim?", true],
      ["Kartla ödeyebilir misin?", false],
      ["Kartla öde mi?", false],
    ], { skill: "grammar" }),
    listen("trbu5-t2", "Послушай. Чего нет у покупателя?", "Bozuk param yok.", [
      ["Мелочи.", true],
      ["Карты.", false],
      ["Чека.", false],
    ]),
    match("trbu5-t3", "Соедини пары.", [
      ["fiş", "чек"],
      ["kasa", "касса"],
      ["nakit", "наличные"],
      ["para üstü", "сдача"],
    ], { skill: "words" }),
    missing("trbu5-t4", "Какой буквы не хватает? («чек»)", "fi", "", "ş", ["ş", "s", "ç"]),
    speak("trbu5-t5", "Kartla mı, nakit mi?", "Nakit, lütfen.", "Наличными, пожалуйста.", { help: "Ответь вслух, как будешь платить." }),
    listen("trbu5-t6", "Вспомни числа. Какая цена?", "Doksan lira.", [
      ["90 лир", true],
      ["19 лир", false],
      ["60 лир", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "esarp",
    itemName: "Шёлковый платок",
    itemNameRu: "İpek eşarp",
    ru: "Yaşasın! Bir ipek eşarp!",
    en: "Ура! Шёлковый платок!",
    a11y: "Мурзик примеряет лёгкий шёлковый платок с узором из тюльпанов, рядом в зеркале отражается Том.",
    image: p("esarp"),
    steps: ["Мурзик разворачивает шёлковый платок.", "Он лёгкий, как облако.", "Узор — тюльпаны, как на рисунке бабушки.", "Мурзик повязывает его на шею рядом со своим шарфом."],
    bridge: "Вечером Зейнеп-ханым зовёт их на ужин.",
  },
};

const bursa6: Lesson = {
  id: "tr-a1-bursa-6",
  level: "A1",
  cityId: "tr-bursa",
  number: 6,
  title: "Afiyet olsun! — Приятного аппетита!",
  minutes: 7,
  goals: ["Пригласить к столу и пожелать приятного аппетита", "Похвалить еду и поблагодарить хозяйку", "Вежливо отказаться от добавки"],
  vocabNote: "Eline sağlık — буквально «здоровья твоей руке». Так благодарят того, кто приготовил еду. Ответ: Afiyet olsun!",
  vocab: [
    v("trbu6-1", "Masaya buyurun!", "Прошу к столу!", "Зейнеп-ханым ставит на стол большое блюдо и приглашающе машет рукой.", "Послушать Masaya buyurun", p("l6-1")),
    v("trbu6-2", "Afiyet olsun!", "Приятного аппетита!", "За накрытым столом все улыбаются и берут ложки.", "Послушать Afiyet olsun", p("l6-2")),
    v("trbu6-3", "Çok lezzetli!", "Очень вкусно!", "Мурзик жмурится от удовольствия с полной ложкой.", "Послушать Çok lezzetli", p("l6-3")),
    v("trbu6-4", "Eline sağlık!", "Спасибо, очень вкусно! (хозяйке)", "Мурзик благодарно прикладывает лапу к груди и кланяется Зейнеп-ханым.", "Послушать Eline sağlık", p("l6-4")),
    v("trbu6-5", "Biraz daha ister misin?", "Хочешь ещё немного?", "Зейнеп-ханым держит половник над тарелкой Мурзика.", "Послушать Biraz daha ister misin", p("l6-5")),
    v("trbu6-6", "Doydum, teşekkürler.", "Спасибо, больше не могу.", "Мурзик откинулся на спинку стула и гладит круглый животик.", "Послушать Doydum, teşekkürler", p("l6-6")),
    v("trbu6-7", "tatlı", "десерт, сладкое", "Блюдо с маленькими сладостями в сиропе.", "Послушать tatlı", p("l6-7")),
  ],
  dialogue: {
    title: "Ужин у Зейнеп-ханым",
    note: "Canım — «дорогой мой». Kestane tatlısı — десерт из каштанов. Ellerinize sağlık — вежливая форма Eline sağlık (на «вы»).",
    lines: [
      line("zeynep", "Masaya buyurun! Afiyet olsun!", "Прошу к столу! Приятного аппетита!"),
      line("tom", "Teşekkürler! Mmm, çok lezzetli!", "Спасибо! М-м, очень вкусно!"),
      line("murzik", "Evet! Ellerinize sağlık, Zeynep Hanım!", "Да! Спасибо, очень вкусно, Зейнеп-ханым!"),
      line("zeynep", "Afiyet olsun, canım. Biraz daha ister misin?", "На здоровье, мой хороший. Хочешь ещё немного?"),
      line("murzik", "Hayır, doydum, teşekkürler. Ama tatlı var mı?", "Нет, спасибо, больше не могу. А сладкое есть?"),
      line("zeynep", "Tabii! Kestane tatlısı!", "Конечно! Десерт из каштанов!"),
    ],
    gist: choice("trbu6-d1", "Что Мурзик говорит хозяйке после еды?", [
      ["Благодарит за вкусный ужин.", true],
      ["Просит счёт.", false],
      ["Говорит, что невкусно.", false],
    ]),
  },
  grammar: [
    {
      title: "Слова за столом",
      paragraphs: [
        "Перед едой и когда видят, что кто-то ест, говорят Afiyet olsun! — «приятного аппетита!».",
        "После еды хозяйку благодарят: Eline sağlık! Она отвечает: Afiyet olsun! Без этих слов турецкий ужин не обходится.",
      ],
      examples: [
        { ru: "Eline sağlık! — Afiyet olsun!", en: "Спасибо, очень вкусно! — На здоровье!" },
        { ru: "Biraz daha ister misin? — Doydum, teşekkürler.", en: "Хочешь ещё? — Спасибо, больше не могу." },
      ],
    },
  ],
  tasks: [
    choice("trbu6-t1", "Что сказать хозяйке, которая вкусно приготовила?", [
      ["Eline sağlık!", true],
      ["Afiyet olsun!", false],
      ["Hesap, lütfen!", false],
    ], { skill: "words" }),
    listen("trbu6-t2", "Послушай. Что тебе предлагают?", "Biraz daha ister misin?", [
      ["Ещё немного еды.", true],
      ["Чай.", false],
      ["Счёт.", false],
    ]),
    tf("trbu6-t3", "Afiyet olsun! говорят перед едой или когда кто-то ест.", true, "grammar"),
    missing("trbu6-t4", "Какой буквы не хватает? («вкусный»)", "lezzetl", "", "i", ["i", "ı", "e"]),
    speak("trbu6-t5", "Biraz daha ister misin?", "Hayır, doydum, teşekkürler.", "Нет, спасибо, больше не могу.", { help: "Вежливо откажись вслух." }),
    choice("trbu6-t6", "Ты хочешь заплатить наличными. Что сказать?", [
      ["Nakit, lütfen.", true],
      ["Kartla, lütfen.", false],
      ["Fiş, lütfen.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tencere",
    itemName: "Медная кастрюля",
    itemNameRu: "Tencere",
    ru: "Yaşasın! Bakır bir tencere!",
    en: "Ура! Медная кастрюля!",
    a11y: "Блестящая медная кастрюля с крышкой стоит на плите. Мурзик видит в ней своё отражение.",
    image: p("tencere"),
    steps: ["После ужина Зейнеп-ханым приносит медную кастрюлю.", "«Al, bu senin. Yemek yaparsın!» — «Держи, она твоя. Будешь готовить!»", "Мурзик смотрит в неё, как в зеркало.", "Завтра — урок кулинарии!"],
    bridge: "Зейнеп-ханым обещает научить Мурзика готовить настоящий менемен.",
  },
};

const bursa7: Lesson = {
  id: "tr-a1-bursa-7",
  level: "A1",
  cityId: "tr-bursa",
  number: 7,
  title: "Готовим дома",
  minutes: 8,
  goals: ["Понять простой рецепт", "Сказать «сначала… потом…»", "Вспомнить все слова Бурсы"],
  vocabNote: "Menemen — турецкая яичница с помидорами и перцем. Её готовят на завтрак в каждом доме.",
  vocab: [
    v("trbu7-1", "Önce soğanı doğra.", "Сначала нарежь лук.", "Мурзик в фартуке режет лук и плачет смешными слезинками.", "Послушать Önce soğanı doğra", p("l7-1")),
    v("trbu7-2", "Domatesleri ekle.", "Добавь помидоры.", "Лапа Мурзика высыпает нарезанные помидоры в сковороду.", "Послушать Domatesleri ekle", p("l7-2")),
    v("trbu7-3", "Karıştır.", "Помешай.", "Мурзик мешает в сковороде деревянной ложкой.", "Послушать Karıştır", p("l7-3")),
    v("trbu7-4", "tuz", "соль", "Маленькая солонка и щепотка соли.", "Послушать tuz", p("l7-4")),
    v("trbu7-5", "ocak", "плита", "Газовая плита с голубым огоньком.", "Послушать ocak", p("l7-5")),
    v("trbu7-6", "Hazır!", "Готово!", "Мурзик гордо поднимает сковороду с горячим менеменом.", "Послушать Hazır", p("l7-6")),
    v("trbu7-7", "Tadına bak!", "Попробуй!", "Мурзик протягивает Тому ложку: «Попробуй!»", "Послушать Tadına bak", p("l7-7")),
  ],
  dialogue: {
    title: "Урок кулинарии",
    note: "Yapıyoruz — «мы готовим, делаем». Yumurta — «яйцо».",
    lines: [
      line("zeynep", "Bugün menemen yapıyoruz! Önce soğanı doğra.", "Сегодня готовим менемен! Сначала нарежь лук."),
      line("murzik", "Tamam. Sonra?", "Хорошо. А потом?"),
      line("zeynep", "Sonra domatesleri ekle. Karıştır!", "Потом добавь помидоры. Помешай!"),
      line("tom", "Tuz var mı?", "А соль есть?"),
      line("zeynep", "Biraz tuz. Şimdi yumurta.", "Немного соли. А теперь яйца."),
      line("murzik", "Hazır mı?", "Готово?"),
      line("zeynep", "Hazır! Tadına bak!", "Готово! Попробуй!"),
      line("murzik", "Çok lezzetli! Eline sağlık!", "Очень вкусно! Спасибо!"),
    ],
    gist: choice("trbu7-d1", "Что они готовят?", [
      ["Менемен — яичницу с помидорами.", true],
      ["Искендер.", false],
      ["Суп.", false],
    ]),
  },
  grammar: [
    {
      title: "Сначала… потом…",
      paragraphs: [
        "Önce — «сначала», sonra — «потом». С ними рецепт звучит понятно: Önce soğanı doğra, sonra domatesleri ekle.",
        "Просьба «на ты» — просто основа глагола: doğra! — нарежь!, ekle! — добавь!, karıştır! — помешай! Ты уже знаешь bak! и ara!.",
      ],
      examples: [
        { ru: "Önce soğanı doğra, sonra karıştır.", en: "Сначала нарежь лук, потом помешай." },
        { ru: "Biraz tuz ekle.", en: "Добавь немного соли." },
      ],
    },
  ],
  tasks: [
    listen("trbu7-t1", "Аудиоэкзамен. Что нужно сделать сначала?", "Önce soğanı doğra, sonra domatesleri ekle.", [
      ["Нарезать лук.", true],
      ["Добавить помидоры.", false],
      ["Посолить.", false],
    ]),
    match("trbu7-t2", "Соедини пары.", [
      ["tuz", "соль"],
      ["ocak", "плита"],
      ["soğan", "лук"],
      ["yumurta", "яйцо"],
    ], { skill: "words" }),
    build("trbu7-t3", "Поставь слова по порядку: «Сначала нарежь лук, потом добавь помидоры».", ["Önce", "soğanı", "doğra,", "sonra", "domatesleri", "ekle."]),
    missing("trbu7-t4", "Какой буквы не хватает? («помешай»)", "Karışt", "r", "ı", ["ı", "i", "u"]),
    speak("trbu7-t5", "Hazır mı?", "Hazır! Tadına bak!", "Готово! Попробуй!", { help: "Ответь вслух и предложи попробовать." }),
    script("trbu7-t6", "Вспомни всю Бурсу. Закончи разговоры.", [
      { speaker: "Официант", text: "Ne istersiniz?" },
      { speaker: "Ты", answer: "Bir çay, lütfen.", options: ["Bir çay, lütfen.", "Doydum.", "Kasa nerede?"] },
      { speaker: "Продавец", text: "Yüz lira." },
      { speaker: "Ты", answer: "Çok pahalı! İndirim var mı?", options: ["Çok pahalı! İndirim var mı?", "Çok lezzetli!", "Afiyet olsun!"] },
      { speaker: "Зейнеп-ханым", text: "Afiyet olsun!" },
      { speaker: "Ты", answer: "Teşekkürler! Eline sağlık!", options: ["Teşekkürler! Eline sağlık!", "Hesap, lütfen.", "Taze mi?"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "onluk",
    itemName: "Фартук",
    itemNameRu: "Önlük",
    ru: "Yaşasın! Yeni bir önlük!",
    en: "Ура! Новый фартук!",
    a11y: "Мурзик в маленьком фартуке с вышитым тюльпаном стоит у плиты с деревянной ложкой.",
    image: p("onluk"),
    steps: ["Зейнеп-ханым завязывает на Мурзике фартук.", "На нём вышит тюльпан.", "«Artık sen bir aşçısın!» — «Теперь ты настоящий повар!»", "Мурзик гордо поднимает ложку."],
    bridge: "Перед отъездом Зейнеп-ханым хочет рассказать о рисунке рыжей кошки.",
  },
};

const story: CityStory = {
  home: {
    name: "Комната с эркером",
    nameRu: "Cumbalı oda",
    image: p("home"),
    a11y: "Комната в старом доме с деревянным эркером над улицей. Внизу виден шёлковый рынок Коза-хан. Посередине чемодан Мурзика.",
  },
  keepsakeId: "esarp",
  welcomeRu: "Merhaba, Bursa!",
  welcomeEn: "Привет, Бурса!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том приехали в Бурсу. За ними зелёная гора Улудаг и старинные купола, вокруг деревья.",
  departureImage: p("departure"),
  departureA11y: "Мурзик и Том с чемоданами на автовокзале Бурсы, рядом междугородний автобус.",
  finale: [
    {
      image: p("zeynep"),
      a11y: "Зейнеп-ханым снимает со стены в чайной рисунок рыжей кошки и протягивает его Мурзику. Том стоит рядом.",
      lines: [
        { en: "В последний вечер Зейнеп-ханым приносит из чайной напротив рисунок рыжей кошки и отдаёт его Мурзику." },
        { ru: "Çok güzel resim yapardı. Ama hep kızını özlüyordu.", en: "Она прекрасно рисовала. Но всё время скучала по дочке." },
        { en: "По дочке? Мурзик вспоминает: его тётя Лейла, дочь бабушки Аси, живёт в Измире!" },
      ],
    },
    {
      image: p("esarp"),
      a11y: "Мурзик обходит комнату с эркером, которую обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит комнату с эркером. Том фотографирует её для дневника путешествий." },
        { en: "С собой — шёлковый платок из Коза-хана." },
        { en: "Рисунок бабушки ложится в кармашек чемодана, рядом с открытками." },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "Bursa tamamlandı!", en: "Бурса пройдена!" },
        { en: "7 / 7 уроков" },
        { en: "A1 — пройден третий блок." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Мурзик и Том с чемоданами у междугороднего автобуса.",
      lines: [
        { ru: "Hoşça kal, Bursa!", en: "Пока, Бурса!" },
        { ru: "Sıradaki durak: İzmir!", en: "Следующая остановка: Измир!" },
      ],
    },
    {
      image: p("road"),
      a11y: "Автобус едет по дороге среди оливковых рощ к морю.",
      lines: [{ ru: "Bursa → İzmir", en: "Бурса → Измир" }],
    },
    {
      image: pic("tr/izmir/arrival"),
      a11y: "Мурзик и Том на набережной Кордон в Измире: пальмы, море и старая часовая башня с узорами.",
      lines: [
        { ru: "Merhaba, İzmir!", en: "Привет, Измир!" },
        { ru: "Burada teyzem yaşıyor!", en: "Здесь живёт моя тётя!" },
      ],
    },
  ],
};

export const trBursa = {
  id: "tr-bursa",
  name: "Бурса",
  nameTr: "Bursa",
  lessons: [bursa1, bursa2, bursa3, bursa4, bursa5, bursa6, bursa7],
  story,
};
