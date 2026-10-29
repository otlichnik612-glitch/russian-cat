import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, fill, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Памуккале · «Время и планы» · который час, дни недели, автобус, опоздание, приглашение, вчера, планы. */

const p = (name: string) => pic(`tr/pamukkale/${name}`);

const pamukkale1: Lesson = {
  id: "tr-a1-pamukkale-1",
  level: "A1",
  cityId: "tr-pamukkale",
  number: 1,
  title: "Который час?",
  minutes: 7,
  goals: ["Спросить, который час", "Назвать время: три часа, половина четвёртого", "Назвать время суток"],
  vocabNote: "Buçuk — «с половиной». Турки говорят «три с половиной», а мы — «половина четвёртого».",
  vocab: [
    v("trpm1-1", "Saat kaç?", "Который час?", "Том смотрит на пустое запястье и вопросительно поднимает брови.", "Послушать Saat kaç", p("l1-1")),
    v("trpm1-2", "Saat üç.", "Три часа.", "Круглые часы на стене показывают ровно три.", "Послушать Saat üç", p("l1-2")),
    v("trpm1-3", "Saat üç buçuk.", "Половина четвёртого.", "Часы показывают половину четвёртого: большая стрелка внизу.", "Послушать Saat üç buçuk", p("l1-3")),
    v("trpm1-4", "sabah", "утро", "Белые террасы в мягком утреннем свете, над ними встаёт солнце.", "Послушать sabah", p("l1-4")),
    v("trpm1-5", "öğlen", "полдень", "Солнце в зените, короткие тени, Мурзик под зонтиком.", "Послушать öğlen", p("l1-5")),
    v("trpm1-6", "akşam", "вечер", "Розовое вечернее небо над белыми склонами.", "Послушать akşam", p("l1-6")),
    v("trpm1-7", "gece", "ночь", "Звёздная ночь над гостевым домом, в окне горит свет.", "Послушать gece", p("l1-7")),
  ],
  dialogue: {
    title: "Утро в гостевом доме",
    note: "Kahvaltı — «завтрак». Gün batımı — «закат». Güzelmiş — «говорят, красивый».",
    lines: [
      line("tom", "Selin, saat kaç?", "Селин, который час?"),
      line("selin", "Saat yedi buçuk. Kahvaltı hazır!", "Половина восьмого. Завтрак готов!"),
      line("murzik", "Sabah çok güzel! Teraslar ne zaman açık?", "Какое красивое утро! Когда открыты террасы?"),
      line("selin", "Sabah sekizde açılıyor.", "Открываются в восемь утра."),
      line("tom", "Akşam da gidelim mi? Gün batımı çok güzelmiş.", "А вечером тоже сходим? Говорят, закат очень красивый."),
      line("selin", "Evet! Akşam çok güzel. Gece de yıldızlar var.", "Да! Вечером очень красиво. А ночью — звёзды."),
    ],
    gist: choice("trpm1-d1", "Который сейчас час?", [
      ["Половина восьмого.", true],
      ["Восемь часов.", false],
      ["Семь часов.", false],
    ]),
  },
  grammar: [
    {
      title: "Saat kaç? — Saat + число",
      paragraphs: [
        "Время называют словом saat и числом: Saat üç. — Три часа. Saat on iki. — Двенадцать часов.",
        "Половина — buçuk: Saat üç buçuk — «три с половиной», то есть половина четвёртого (3:30).",
      ],
      examples: [
        { ru: "Saat kaç? — Saat dokuz.", en: "Который час? — Девять часов." },
        { ru: "Saat yedi buçuk.", en: "Половина восьмого." },
      ],
    },
  ],
  tasks: [
    listen("trpm1-t1", "Послушай. Который час?", "Saat dört buçuk.", [
      ["4:30", true],
      ["3:30", false],
      ["4:00", false],
    ]),
    match("trpm1-t2", "Соедини пары.", [
      ["sabah", "утро"],
      ["öğlen", "полдень"],
      ["akşam", "вечер"],
      ["gece", "ночь"],
    ], { skill: "words" }),
    choice("trpm1-t3", "Как сказать «половина третьего» (2:30)?", [
      ["Saat iki buçuk.", true],
      ["Saat üç buçuk.", false],
      ["Saat buçuk iki.", false],
    ], { skill: "grammar" }),
    missing("trpm1-t4", "Какой буквы не хватает? («с половиной»)", "bu", "uk", "ç", ["ç", "c", "ş"]),
    speak("trpm1-t5", "Saat kaç?", "Saat on bir.", "Одиннадцать часов.", { help: "Посмотри на часы и скажи вслух, который час." }),
    choice("trpm1-t6", "Как сказать «Мы все здесь»?", [
      ["Hepimiz buradayız.", true],
      ["Hepimiz buradasın.", false],
      ["Hepimiz buradayım.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "calar-saat",
    itemName: "Будильник",
    itemNameRu: "Çalar saat",
    ru: "Yaşasın! Bir çalar saat!",
    en: "Ура! Будильник!",
    a11y: "Круглый жестяной будильник с двумя звонками стоит на тумбочке у кровати.",
    image: p("calar-saat"),
    steps: ["Селин приносит старый будильник.", "«Sabah erken kalkın!» — «Вставайте пораньше!»", "Мурзик ставит его у кровати.", "Тик-так!"],
    bridge: "Селин спрашивает: «Сколько дней вы у нас пробудете?» А какой вообще сегодня день?",
  },
};

const pamukkale2: Lesson = {
  id: "tr-a1-pamukkale-2",
  level: "A1",
  cityId: "tr-pamukkale",
  number: 2,
  title: "Какой сегодня день?",
  minutes: 7,
  goals: ["Назвать дни недели", "Сказать «сегодня», «завтра», «вчера»", "Спросить, какой сегодня день"],
  vocabNote: "Помнишь pazar — «рынок»? Это и «воскресенье». Cumartesi — суббота, буквально «после пятницы» (cuma — пятница).",
  vocab: [
    v("trpm2-1", "Bugün günlerden ne?", "Какой сегодня день недели?", "Мурзик стоит перед календарём и чешет затылок.", "Послушать Bugün günlerden ne", p("l2-1")),
    v("trpm2-2", "pazartesi, salı, çarşamba", "понедельник, вторник, среда", "Три листка календаря подряд.", "Послушать pazartesi, salı, çarşamba", p("l2-2")),
    v("trpm2-3", "perşembe, cuma", "четверг, пятница", "Ещё два листка календаря, на пятнице звёздочка.", "Послушать perşembe, cuma", p("l2-3")),
    v("trpm2-4", "cumartesi, pazar", "суббота, воскресенье", "Два последних листка, на них солнышки — выходные.", "Послушать cumartesi, pazar", p("l2-4")),
    v("trpm2-5", "bugün", "сегодня", "Мурзик показывает лапой на сегодняшний листок календаря.", "Послушать bugün", p("l2-5")),
    v("trpm2-6", "yarın", "завтра", "Мурзик показывает на следующий листок.", "Послушать yarın", p("l2-6")),
    v("trpm2-7", "dün", "вчера", "Мурзик оглядывается на вчерашний листок.", "Послушать dün", p("l2-7")),
  ],
  dialogue: {
    title: "Сколько дней?",
    note: "Kalıyorsunuz — «вы остаётесь». Hierapolis — древний город прямо над террасами.",
    lines: [
      line("selin", "Kaç gün kalıyorsunuz?", "Сколько дней вы у нас пробудете?"),
      line("tom", "Üç gün. Bugün günlerden ne?", "Три дня. А какой сегодня день?"),
      line("selin", "Bugün perşembe.", "Сегодня четверг."),
      line("murzik", "Yani perşembe, cuma, cumartesi. Pazar günü gidiyoruz.", "Значит, четверг, пятница, суббота. В воскресенье уезжаем."),
      line("selin", "Cumartesi akşam teraslarda konser var!", "В субботу вечером на террасах концерт!"),
      line("tom", "Harika! Yarın ne yapalım?", "Отлично! А что будем делать завтра?"),
      line("selin", "Yarın Hierapolis'e gidin. Çok eski bir şehir.", "Завтра сходите в Иераполь. Это очень древний город."),
    ],
    gist: choice("trpm2-d1", "Какой сегодня день?", [
      ["Четверг.", true],
      ["Пятница.", false],
      ["Воскресенье.", false],
    ]),
  },
  grammar: [
    {
      title: "Сегодня, завтра, вчера",
      paragraphs: [
        "Bugün — сегодня, yarın — завтра, dün — вчера. Обычно их ставят в начало фразы: Yarın Hierapolis'e gidiyoruz.",
        "«В какой день» — просто название дня, можно со словом günü: Pazar (günü) gidiyoruz. — В воскресенье уезжаем.",
      ],
      examples: [
        { ru: "Bugün cuma.", en: "Сегодня пятница." },
        { ru: "Cumartesi günü konser var.", en: "В субботу концерт." },
      ],
    },
  ],
  tasks: [
    listen("trpm2-t1", "Послушай. Какой день?", "Bugün cumartesi.", [
      ["Суббота.", true],
      ["Среда.", false],
      ["Пятница.", false],
    ]),
    match("trpm2-t2", "Соедини пары.", [
      ["pazartesi", "понедельник"],
      ["çarşamba", "среда"],
      ["cuma", "пятница"],
      ["pazar", "воскресенье"],
    ], { skill: "words" }),
    fill("trpm2-t3", "Вставь слово: «Сегодня четверг».", "", "perşembe.", "Bugün", ["Bugün", "Yarın", "Dün"], { skill: "grammar" }),
    missing("trpm2-t4", "Какой буквы не хватает? («среда»)", "", "arşamba", "ç", ["ç", "c", "s"]),
    speak("trpm2-t5", "Bugün günlerden ne?", "Bugün pazartesi.", "Сегодня понедельник.", { help: "Скажи вслух, какой сегодня день." }),
    listen("trpm2-t6", "Вспомни время. Который час?", "Saat sekiz buçuk.", [
      ["8:30", true],
      ["9:30", false],
      ["8:00", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "takvim",
    itemName: "Календарь",
    itemNameRu: "Takvim",
    ru: "Yaşasın! Yeni bir takvim!",
    en: "Ура! Новый календарь!",
    a11y: "На стене висит календарь с фотографией белых террас. На четверге нарисован маленький котик.",
    image: p("takvim"),
    steps: ["Мурзик вешает календарь на стену.", "Рисует котика на четверге.", "А на субботе — ноту: концерт!", "Теперь видно, сколько дней осталось."],
    bridge: "Завтра — Иераполь. Но сначала нужно съездить в Денизли и узнать, когда идёт автобус обратно.",
  },
};

const pamukkale3: Lesson = {
  id: "tr-a1-pamukkale-3",
  level: "A1",
  cityId: "tr-pamukkale",
  number: 3,
  title: "Когда автобус?",
  minutes: 7,
  goals: ["Спросить, во сколько автобус", "Сказать «в два часа»: saat ikide", "Узнать платформу и время в пути"],
  vocabNote: "Otogar — автовокзал. Peron — платформа, откуда уходит автобус.",
  vocab: [
    v("trpm3-1", "Otobüs saat kaçta?", "Во сколько автобус?", "Мурзик у окошка кассы показывает на расписание.", "Послушать Otobüs saat kaçta", p("l3-1")),
    v("trpm3-2", "Saat ikide.", "В два часа.", "Кассир показывает на часы со стрелками на двух.", "Послушать Saat ikide", p("l3-2")),
    v("trpm3-3", "Ne zaman?", "Когда?", "Том вопросительно разводит руками у табло.", "Послушать Ne zaman", p("l3-3")),
    v("trpm3-4", "otogar", "автовокзал", "Большой автовокзал с рядами междугородних автобусов.", "Послушать otogar", p("l3-4")),
    v("trpm3-5", "peron", "платформа", "Табличка с номером платформы 12, рядом стоит автобус.", "Послушать peron", p("l3-5")),
    v("trpm3-6", "Kaç dakika?", "Сколько минут?", "Мурзик держит песочные часы и вопросительно смотрит.", "Послушать Kaç dakika", p("l3-6")),
    v("trpm3-7", "gidiş-dönüş", "туда и обратно", "Два билета: стрелка туда и стрелка обратно.", "Послушать gidiş-dönüş", p("l3-7")),
  ],
  dialogue: {
    title: "Автовокзал Денизли",
    note: "Sürüyor — «длится, едет». Kaç dakika sürüyor? — «Сколько минут ехать?»",
    lines: [
      line("murzik", "Pamukkale'ye otobüs saat kaçta?", "Во сколько автобус в Памуккале?"),
      line("cashier", "Saat ikide ve saat dörtte.", "В два и в четыре."),
      line("tom", "Şimdi saat kaç?", "А сейчас который час?"),
      line("cashier", "Bir buçuk.", "Половина второго."),
      line("murzik", "Saat ikide gidelim! İki bilet, lütfen.", "Поедем в два! Два билета, пожалуйста."),
      line("cashier", "Buyurun. Peron on iki.", "Пожалуйста. Платформа двенадцать."),
      line("tom", "Kaç dakika sürüyor?", "Сколько минут ехать?"),
      line("cashier", "Yirmi dakika.", "Двадцать минут."),
    ],
    gist: choice("trpm3-d1", "Во сколько они поедут?", [
      ["В два часа.", true],
      ["В четыре часа.", false],
      ["В половине второго.", false],
    ]),
  },
  grammar: [
    {
      title: "Во сколько: saat ikide",
      paragraphs: [
        "«Во сколько» — saat, число и окончание -de / -da: saat ikide (в два), saat altıda (в шесть).",
        "После глухих звуков ç, f, h, k, p, s, ş, t окончание звучит как -te / -ta: saat üçte (в три), saat beşte (в пять), saat dörtte (в четыре).",
      ],
      examples: [
        { ru: "Otobüs saat beşte.", en: "Автобус в пять." },
        { ru: "Saat kaçta? — Saat onda.", en: "Во сколько? — В десять." },
      ],
    },
  ],
  tasks: [
    choice("trpm3-t1", "Как сказать «в пять часов»?", [
      ["saat beşte", true],
      ["saat beşde", false],
      ["saat beş", false],
    ], { skill: "grammar" }),
    listen("trpm3-t2", "Послушай. Во сколько автобус?", "Otobüs saat dörtte.", [
      ["В четыре.", true],
      ["В два.", false],
      ["В пять.", false],
    ]),
    match("trpm3-t3", "Соедини пары.", [
      ["otogar", "автовокзал"],
      ["peron", "платформа"],
      ["ne zaman", "когда"],
      ["dakika", "минута"],
    ], { skill: "words" }),
    spell("trpm3-t4", "Собери из букв слово «автовокзал».", "otogar"),
    speak("trpm3-t5", "Otobüs saat kaçta?", "Saat üçte.", "В три часа.", { help: "Ответь вслух, во сколько автобус." }),
    choice("trpm3-t6", "Что значит dün?", [
      ["вчера", true],
      ["завтра", false],
      ["сегодня", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "canta",
    itemName: "Рюкзак",
    itemNameRu: "Sırt çantası",
    ru: "Yaşasın! Yeni bir sırt çantası!",
    en: "Ура! Новый рюкзак!",
    a11y: "Маленький оранжевый рюкзак с карманами и брелоком-котиком.",
    image: p("canta"),
    steps: ["На рынке в Денизли Мурзик видит оранжевый рюкзак.", "Он как раз его размера!", "Мурзик складывает в него воду и карту.", "Готов к походам!"],
    bridge: "На следующее утро будильник почему-то молчит…",
  },
};

const pamukkale4: Lesson = {
  id: "tr-a1-pamukkale-4",
  level: "A1",
  cityId: "tr-pamukkale",
  number: 4,
  title: "Мы опоздали!",
  minutes: 7,
  goals: ["Сказать «мы опоздали» и «автобус ушёл»", "Поторопить друга", "Спросить про следующий автобус"],
  vocabNote: "Kaçmak — «убегать». Otobüs kaçtı — «автобус убежал», то есть ушёл без нас.",
  vocab: [
    v("trpm4-1", "Geç kaldık!", "Мы опоздали!", "Мурзик и Том бегут по улице, на часах уже девять.", "Послушать Geç kaldık", p("l4-1")),
    v("trpm4-2", "Acele et!", "Поторопись!", "Мурзик тянет Тома за рукав, Том на ходу натягивает ботинок.", "Послушать Acele et", p("l4-2")),
    v("trpm4-3", "erken", "рано", "Раннее утро, солнце только встаёт, Мурзик зевает.", "Послушать erken", p("l4-3")),
    v("trpm4-4", "geç", "поздно", "Часы показывают далеко за девять, Мурзик хватается за голову.", "Послушать geç", p("l4-4")),
    v("trpm4-5", "Otobüs kaçtı!", "Автобус ушёл!", "Автобус уезжает, а Мурзик и Том машут ему вслед.", "Послушать Otobüs kaçtı", p("l4-5")),
    v("trpm4-6", "Sonraki otobüs ne zaman?", "Когда следующий автобус?", "Том читает расписание на остановке.", "Послушать Sonraki otobüs ne zaman", p("l4-6")),
    v("trpm4-7", "Bekleyelim.", "Подождём.", "Мурзик и Том сидят на скамейке на остановке.", "Послушать Bekleyelim", p("l4-7")),
  ],
  dialogue: {
    title: "Будильник не зазвонил",
    note: "Çalmadı — «не зазвонил». Şapkalı — «в шляпе». Gitti — «ушёл».",
    lines: [
      line("murzik", "Tom! Saat kaç? Saat dokuz! Geç kaldık!", "Том! Который час? Девять! Мы опоздали!"),
      line("tom", "Ne? Çalar saat çalmadı!", "Что? Будильник не зазвонил!"),
      line("murzik", "Acele et! Otobüs saat dokuzda!", "Скорее! Автобус в девять!"),
      line("tom", "Otobüs kaçtı!", "Автобус ушёл!"),
      line("murzik", "Pardon, sonraki otobüs ne zaman?", "Простите, когда следующий автобус?"),
      line("passerby", "Saat onda. Bekleyin.", "В десять. Подождите."),
      line("tom", "Tamam, bekleyelim. Murzik, bak… Şapkalı, beyaz bir kedi!", "Ладно, подождём. Мурзик, смотри… Белый кот в шляпе!"),
      line("murzik", "Nerede? Gitti…", "Где? Ушёл…"),
    ],
    gist: choice("trpm4-d1", "Почему они опоздали?", [
      ["Не зазвонил будильник.", true],
      ["Сломался автобус.", false],
      ["Они заблудились.", false],
    ]),
  },
  grammar: [
    {
      title: "Прошедшее время: -dı, -di, -du, -dü",
      paragraphs: [
        "Прошедшее время — основа глагола и -dı / -di / -du / -dü: Otobüs kaç-tı — автобус ушёл. После глухих звуков d превращается в t.",
        "«Мы» в прошедшем — -dık / -dik / -duk / -dük: geç kal-dık — мы опоздали, gel-dik — мы пришли.",
      ],
      examples: [
        { ru: "Geç kaldık!", en: "Мы опоздали!" },
        { ru: "Otobüs saat dokuzda geldi.", en: "Автобус пришёл в девять." },
      ],
    },
  ],
  tasks: [
    listen("trpm4-t1", "Послушай. Что случилось?", "Otobüs kaçtı!", [
      ["Автобус ушёл.", true],
      ["Автобус пришёл.", false],
      ["Автобус сломался.", false],
    ]),
    choice("trpm4-t2", "Как сказать «Мы опоздали»?", [
      ["Geç kaldık.", true],
      ["Geç kaldım.", false],
      ["Geç kalıyoruz mu.", false],
    ], { skill: "grammar" }),
    match("trpm4-t3", "Соедини пары.", [
      ["erken", "рано"],
      ["geç", "поздно"],
      ["Acele et!", "Поторопись!"],
      ["Bekleyelim.", "Подождём."],
    ], { skill: "words" }),
    missing("trpm4-t4", "Какой буквы не хватает? («ушёл, убежал»)", "ka", "tı", "ç", ["ç", "c", "ş"]),
    speak("trpm4-t5", "Sonraki otobüs ne zaman?", "Saat onda.", "В десять часов.", { help: "Ответь вслух." }),
    listen("trpm4-t6", "Вспомни прошлый урок. Во сколько?", "Saat ikide.", [
      ["В два часа.", true],
      ["В десять.", false],
      ["В двенадцать.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "terlik",
    itemName: "Тапочки",
    itemNameRu: "Terlik",
    ru: "Yaşasın! Yeni terlikler!",
    en: "Ура! Новые тапочки!",
    a11y: "Пара мягких вышитых тапочек у кровати — крошечные, как раз на лапы Мурзика.",
    image: p("terlik"),
    steps: ["Утром в спешке Мурзик бежит босиком.", "Селин даёт ему тапочки.", "«Acele etme!» — «Не торопись!»", "Теперь по утрам тепло и удобно."],
    bridge: "Вечером Селин зовёт на террасы: «Закат здесь — лучший в Турции!»",
  },
};

const pamukkale5: Lesson = {
  id: "tr-a1-pamukkale-5",
  level: "A1",
  cityId: "tr-pamukkale",
  number: 5,
  title: "Пойдём на закат!",
  minutes: 7,
  goals: ["Пригласить куда-нибудь", "Согласиться или вежливо отказаться", "Договориться, где встретиться"],
  vocabNote: "Maalesef — «к сожалению». Начни отказ с этого слова, и он прозвучит вежливо.",
  vocab: [
    v("trpm5-1", "Gün batımını izleyelim mi?", "Посмотрим на закат?", "Селин показывает на розовеющее небо над террасами.", "Послушать Gün batımını izleyelim mi", p("l5-1")),
    v("trpm5-2", "Bu akşam ne yapıyorsun?", "Что ты делаешь сегодня вечером?", "Селин заглядывает в дверь комнаты Мурзика.", "Послушать Bu akşam ne yapıyorsun", p("l5-2")),
    v("trpm5-3", "Benimle gelir misin?", "Пойдёшь со мной?", "Селин протягивает руку, приглашая с собой.", "Послушать Benimle gelir misin", p("l5-3")),
    v("trpm5-4", "Çok isterim!", "С удовольствием!", "Мурзик радостно подпрыгивает, хвост трубой.", "Послушать Çok isterim", p("l5-4")),
    v("trpm5-5", "Maalesef gelemem.", "К сожалению, не могу.", "Том виновато разводит руками, показывая на гору фотографий.", "Послушать Maalesef gelemem", p("l5-5")),
    v("trpm5-6", "Başka zaman.", "В другой раз.", "Том дружески машет рукой и улыбается.", "Послушать Başka zaman", p("l5-6")),
    v("trpm5-7", "Nerede buluşalım?", "Где встретимся?", "Мурзик с картой в лапах смотрит на Селин.", "Послушать Nerede buluşalım", p("l5-7")),
  ],
  dialogue: {
    title: "Приглашение",
    note: "Kapının önünde — «перед воротами».",
    lines: [
      line("selin", "Murzik, bu akşam ne yapıyorsun?", "Мурзик, что ты делаешь сегодня вечером?"),
      line("murzik", "Bilmiyorum. Neden?", "Не знаю. А что?"),
      line("selin", "Gün batımını izleyelim mi? Teraslarda çok güzel.", "Посмотрим на закат? На террасах очень красиво."),
      line("murzik", "Çok isterim!", "С удовольствием!"),
      line("tom", "Ben de! Nerede buluşalım?", "Я тоже! Где встретимся?"),
      line("selin", "Saat altıda, kapının önünde.", "В шесть, у ворот."),
      line("murzik", "Tamam, görüşürüz!", "Договорились, до встречи!"),
    ],
    gist: choice("trpm5-d1", "Когда и где они встретятся?", [
      ["В шесть у ворот.", true],
      ["В восемь у автобуса.", false],
      ["Утром на террасах.", false],
    ]),
  },
  grammar: [
    {
      title: "Давай: -elim, -alım",
      paragraphs: [
        "«Давай сделаем» — основа глагола и -elim / -alım: gid-elim — пойдём, izle-yelim — посмотрим, buluş-alım — встретимся.",
        "Вопрос-приглашение — с частицей mi: Gidelim mi? — Пойдём? İzleyelim mi? — Посмотрим?",
      ],
      examples: [
        { ru: "Saat altıda buluşalım.", en: "Давай встретимся в шесть." },
        { ru: "Sinemaya gidelim mi?", en: "Пойдём в кино?" },
      ],
    },
  ],
  tasks: [
    choice("trpm5-t1", "Как сказать «Давай встретимся»?", [
      ["Buluşalım.", true],
      ["Buluşelim.", false],
      ["Buluşuyoruz mu.", false],
    ], { skill: "grammar" }),
    listen("trpm5-t2", "Послушай. Что отвечают на приглашение?", "Maalesef gelemem. Başka zaman.", [
      ["Отказываются.", true],
      ["Соглашаются с радостью.", false],
      ["Спрашивают, где встретиться.", false],
    ]),
    match("trpm5-t3", "Соедини пары.", [
      ["Çok isterim!", "С удовольствием!"],
      ["Maalesef gelemem.", "К сожалению, не могу."],
      ["Başka zaman.", "В другой раз."],
      ["Nerede buluşalım?", "Где встретимся?"],
    ], { skill: "words" }),
    missing("trpm5-t4", "Какой буквы не хватает? («закат»)", "Gün bat", "mı", "ı", ["ı", "i", "a"]),
    speak("trpm5-t5", "Bu akşam sinemaya gidelim mi?", "Çok isterim! Saat kaçta?", "С удовольствием! Во сколько?", { help: "Прими приглашение вслух." }),
    choice("trpm5-t6", "Как сказать «Мы опоздали»?", [
      ["Geç kaldık.", true],
      ["Geç kaldınız.", false],
      ["Erken kaldık.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "afis",
    itemName: "Афиша",
    itemNameRu: "Afiş",
    ru: "Yaşasın! Bir afiş!",
    en: "Ура! Афиша!",
    a11y: "На стене афиша вечернего концерта на террасах: белые склоны в розовом закатном свете.",
    image: p("afis"),
    steps: ["У ворот висят афиши субботнего концерта.", "Селин отдаёт одну Мурзику.", "Мурзик вешает её над кроватью.", "Концерт уже завтра!"],
    bridge: "Утром Селин спрашивает: «Где вы были вчера днём? Я вас искала!»",
  },
};

const pamukkale6: Lesson = {
  id: "tr-a1-pamukkale-6",
  level: "A1",
  cityId: "tr-pamukkale",
  number: 6,
  title: "Где вы были вчера?",
  minutes: 7,
  goals: ["Спросить, где кто-то был", "Рассказать: мы были…, было красиво", "Описать прошлое: было жарко, было много народу"],
  vocabNote: "Kalabalık — «толпа» и «людно». Kalabalıktı — «было много народу».",
  vocab: [
    v("trpm6-1", "Dün neredeydiniz?", "Где вы были вчера?", "Селин с удивлением смотрит на загорелых Мурзика и Тома.", "Послушать Dün neredeydiniz", p("l6-1")),
    v("trpm6-2", "Termal havuzdaydık.", "Мы были в термальном бассейне.", "Мурзик и Том плавают в античном бассейне среди упавших колонн.", "Послушать Termal havuzdaydık", p("l6-2")),
    v("trpm6-3", "Evdeydik.", "Мы были дома.", "Мурзик и Том сидят дома на диване с чаем.", "Послушать Evdeydik", p("l6-3")),
    v("trpm6-4", "Hava nasıldı?", "Какая была погода?", "Селин показывает на небо и вопросительно поднимает брови.", "Послушать Hava nasıldı", p("l6-4")),
    v("trpm6-5", "Çok güzeldi!", "Было очень красиво!", "Мурзик мечтательно прикрывает глаза, вспоминая белые террасы.", "Послушать Çok güzeldi", p("l6-5")),
    v("trpm6-6", "Kalabalıktı.", "Было много народу.", "Толпа туристов с фотоаппаратами на террасах.", "Послушать Kalabalıktı", p("l6-6")),
    v("trpm6-7", "Su sıcaktı.", "Вода была тёплая.", "От голубой воды бассейна поднимается лёгкий пар.", "Послушать Su sıcaktı", p("l6-7")),
  ],
  dialogue: {
    title: "Античный бассейн",
    note: "Antik — «античный, древний». Yazın — «летом». Hep — «всегда».",
    lines: [
      line("selin", "Günaydın! Dün neredeydiniz?", "Доброе утро! Где вы были вчера?"),
      line("tom", "Dün Hierapolis'teydik. Sonra termal havuzdaydık.", "Вчера мы были в Иераполе. А потом в термальном бассейне."),
      line("selin", "Antik havuzda mı? Su nasıldı?", "В античном бассейне? Какая была вода?"),
      line("murzik", "Su sıcaktı! Çok güzeldi!", "Вода была тёплая! Было очень красиво!"),
      line("tom", "Ama çok kalabalıktı.", "Но было очень много народу."),
      line("selin", "Evet, yazın hep kalabalık.", "Да, летом там всегда людно."),
    ],
    gist: choice("trpm6-d1", "Где были Том и Мурзик вчера?", [
      ["В Иераполе и в термальном бассейне.", true],
      ["Дома.", false],
      ["В Денизли.", false],
    ]),
  },
  grammar: [
    {
      title: "Был, была, было: -dı",
      paragraphs: [
        "«Было» в прошлом — то же окончание -dı / -di / -du / -dü: güzel-di — было красиво, sıcak-tı — было жарко.",
        "«Мы были» — -dık, «вы были» — -dınız: havuzda-y-dık — мы были в бассейне, nerede-y-diniz — где вы были. После гласной добавляется y.",
      ],
      examples: [
        { ru: "Dün evdeydik.", en: "Вчера мы были дома." },
        { ru: "Hava çok sıcaktı.", en: "Было очень жарко." },
      ],
    },
  ],
  tasks: [
    choice("trpm6-t1", "Как спросить «Где вы были вчера?»", [
      ["Dün neredeydiniz?", true],
      ["Dün neredesiniz?", false],
      ["Dün nerede olacaksınız?", false],
    ], { skill: "grammar" }),
    listen("trpm6-t2", "Послушай. Какая была вода?", "Su çok sıcaktı.", [
      ["Очень тёплая.", true],
      ["Холодная.", false],
      ["Грязная.", false],
    ]),
    match("trpm6-t3", "Соедини пары.", [
      ["kalabalık", "много народу"],
      ["sıcak", "тёплый, жаркий"],
      ["havuz", "бассейн"],
      ["dün", "вчера"],
    ], { skill: "words" }),
    missing("trpm6-t4", "Какой буквы не хватает? («Было красиво»)", "Güzel", "i", "d", ["d", "t", "l"]),
    speak("trpm6-t5", "Dün neredeydiniz?", "Dün evdeydik.", "Вчера мы были дома.", { help: "Ответь вслух, где вы были вчера." }),
    choice("trpm6-t6", "Тебя приглашают в кино, а ты не можешь. Что сказать?", [
      ["Maalesef gelemem.", true],
      ["Çok isterim!", false],
      ["Buluşalım.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bornoz",
    itemName: "Халат",
    itemNameRu: "Bornoz",
    ru: "Yaşasın! Yumuşak bir bornoz!",
    en: "Ура! Мягкий халат!",
    a11y: "Белый пушистый халат с капюшоном висит на крючке. Мурзик утонул в нём — видны только уши.",
    image: p("bornoz"),
    steps: ["Селин приносит халат: «В следующий раз — в бассейн с ним!»", "Он огромный!", "Мурзик утопает в нём с головой.", "Тепло и мягко!"],
    bridge: "Последние дни в Памуккале. Селин спрашивает: «А что вы будете делать на выходных?»",
  },
};

const pamukkale7: Lesson = {
  id: "tr-a1-pamukkale-7",
  level: "A1",
  cityId: "tr-pamukkale",
  number: 7,
  title: "Планы на выходные",
  minutes: 8,
  goals: ["Рассказать о планах: будущее время", "Спросить о планах на выходные", "Вспомнить все слова Памуккале"],
  vocabNote: "Hafta — «неделя», sonu — «её конец». Hafta sonu — «выходные».",
  vocab: [
    v("trpm7-1", "Hafta sonu ne yapacaksın?", "Что ты будешь делать на выходных?", "Селин с любопытством смотрит на Мурзика.", "Послушать Hafta sonu ne yapacaksın", p("l7-1")),
    v("trpm7-2", "Pazar günü Bodrum'a gideceğiz.", "В воскресенье мы поедем в Бодрум.", "Том показывает на карте синюю бухту у моря.", "Послушать Pazar günü Bodrum'a gideceğiz", p("l7-2")),
    v("trpm7-3", "Fotoğraf çekeceğim.", "Я буду фотографировать.", "Том поднимает фотоаппарат к глазам.", "Послушать Fotoğraf çekeceğim", p("l7-3")),
    v("trpm7-4", "Dinleneceğim.", "Я буду отдыхать.", "Мурзик лежит на шезлонге с книжкой.", "Послушать Dinleneceğim", p("l7-4")),
    v("trpm7-5", "Belki yüzeceğiz.", "Может быть, будем плавать.", "Мурзик в маске для плавания мечтательно смотрит на воду.", "Послушать Belki yüzeceğiz", p("l7-5")),
    v("trpm7-6", "hafta sonu", "выходные", "Два листка календаря с солнышками.", "Послушать hafta sonu", p("l7-6")),
    v("trpm7-7", "Planın ne?", "Какие у тебя планы?", "Мурзик держит блокнот с нарисованными планами.", "Послушать Planın ne", p("l7-7")),
  ],
  dialogue: {
    title: "Последний день",
    note: "Tekneler — «лодки». Planımız — «наш план».",
    lines: [
      line("selin", "Hafta sonu ne yapacaksınız?", "Что вы будете делать на выходных?"),
      line("tom", "Cumartesi konsere gideceğiz. Ben fotoğraf çekeceğim.", "В субботу пойдём на концерт. Я буду фотографировать."),
      line("murzik", "Ben de dinleneceğim! Belki yüzeceğiz.", "А я буду отдыхать! Может быть, будем плавать."),
      line("selin", "Pazar günü?", "А в воскресенье?"),
      line("tom", "Pazar günü Bodrum'a gideceğiz.", "В воскресенье поедем в Бодрум."),
      line("selin", "Bodrum mu? Deniz, tekneler… Harika!", "В Бодрум? Море, лодки… Чудесно!"),
      line("murzik", "Planımız çok güzel!", "У нас отличный план!"),
    ],
    gist: choice("trpm7-d1", "Что они будут делать в воскресенье?", [
      ["Поедут в Бодрум.", true],
      ["Пойдут на концерт.", false],
      ["Будут отдыхать дома.", false],
    ]),
  },
  grammar: [
    {
      title: "Будущее время: -ecek, -acak",
      paragraphs: [
        "Будущее — основа глагола и -ecek / -acak: gid-ecek — пойдёт, çek-ecek — будет снимать, yap-acak — будет делать. После гласной добавляется y: oku-y-acak — будет читать, izle-y-ecek — будет смотреть.",
        "Перед гласной k становится ğ: gideceğ-im — я пойду, gideceğ-iz — мы пойдём. А «ты» — без изменений: yapacak-sın.",
      ],
      examples: [
        { ru: "Yarın Bodrum'a gideceğiz.", en: "Завтра мы поедем в Бодрум." },
        { ru: "Hafta sonu ne yapacaksın?", en: "Что ты будешь делать на выходных?" },
      ],
    },
  ],
  tasks: [
    listen("trpm7-t1", "Аудиоэкзамен. Что будет в субботу?", "Cumartesi akşam saat sekizde konser var. Sonra gece yüzeceğiz.", [
      ["Концерт в восемь, потом ночное купание.", true],
      ["Концерт в шесть, потом ужин.", false],
      ["Автобус в восемь.", false],
    ]),
    choice("trpm7-t2", "Как сказать «Мы поедем в Бодрум»?", [
      ["Bodrum'a gideceğiz.", true],
      ["Bodrum'a gittik.", false],
      ["Bodrum'a gidiyoruz mu.", false],
    ], { skill: "grammar" }),
    match("trpm7-t3", "Соедини пары.", [
      ["hafta sonu", "выходные"],
      ["plan", "план"],
      ["dinlenmek", "отдыхать"],
      ["yüzmek", "плавать"],
    ], { skill: "words" }),
    missing("trpm7-t4", "Какой буквы не хватает? («мы поедем»)", "gidece", "iz", "ğ", ["ğ", "k", "g"]),
    speak("trpm7-t5", "Hafta sonu ne yapacaksın?", "Dinleneceğim ve kitap okuyacağım.", "Буду отдыхать и читать книгу.", { help: "Расскажи вслух о своих планах на выходные." }),
    script("trpm7-t6", "Вспомни весь Памуккале. Закончи разговоры.", [
      { speaker: "Селин", text: "Saat kaç?" },
      { speaker: "Ты", answer: "Saat yedi buçuk.", options: ["Saat yedi buçuk.", "Bugün perşembe.", "Saat kaçta?"] },
      { speaker: "Кассир", text: "Otobüs saat ikide." },
      { speaker: "Ты", answer: "İki bilet, lütfen.", options: ["İki bilet, lütfen.", "Geç kaldık!", "Çok güzeldi!"] },
      { speaker: "Селин", text: "Dün neredeydiniz?" },
      { speaker: "Ты", answer: "Termal havuzdaydık.", options: ["Termal havuzdaydık.", "Yarın gideceğiz.", "Bekleyelim."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "pestamal",
    itemName: "Хлопковое полотенце",
    itemNameRu: "Peştamal",
    ru: "Yaşasın! Bir peştamal!",
    en: "Ура! Пештамал!",
    a11y: "Тонкое полосатое хлопковое полотенце-пештамал сложено на кровати. Оно из Денизли — края знаменитого хлопка.",
    image: p("pestamal"),
    steps: ["Селин дарит Мурзику полосатый пештамал.", "«Denizli'nin pamuğu!» — «Хлопок из Денизли!»", "Мурзик заворачивается в него после купания.", "Лёгкий и тёплый!"],
    bridge: "Субботний вечер, концерт на террасах. И снова в толпе мелькает белый кот в шляпе…",
  },
};

const story: CityStory = {
  home: {
    name: "Гостевой дом у террас",
    nameRu: "Pansiyon odası",
    image: p("home"),
    a11y: "Простая пустая комната в маленьком гостевом доме у подножия белых террас. В окне виден белоснежный склон. Посередине чемодан Мурзика.",
  },
  keepsakeId: "pestamal",
  welcomeRu: "Merhaba, Pamukkale!",
  welcomeEn: "Привет, Памуккале!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том у подножия белоснежных террас Памуккале. В голубых водоёмах отражается небо.",
  departureImage: p("departure"),
  departureA11y: "Мурзик и Том с чемоданами садятся в автобус, позади белые террасы.",
  finale: [
    {
      image: p("lev"),
      a11y: "Вечерний концерт на белых террасах в розовом свете заката. Вдали в толпе стоит старый белый кот в шляпе и смотрит в сторону Мурзика. Мурзик его не видит.",
      lines: [
        { en: "Субботний концерт на террасах. Том снимает закат для дневника путешествий." },
        { en: "В гостевом доме Том листает снимки. На одном, в самом углу, — старый белый кот в шляпе. Он смотрит прямо на Мурзика." },
        { ru: "Bu şapkalı kedi kim?", en: "Кто этот кот в шляпе?" },
      ],
    },
    {
      image: p("pestamal"),
      a11y: "Мурзик обходит комнату в гостевом доме, которую обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свою комнату у террас. Том фотографирует её." },
        { en: "С собой — полосатый пештамал из Денизли." },
        { en: "Снимок с котом в шляпе Том сохраняет. Так, на всякий случай." },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "Pamukkale tamamlandı!", en: "Памуккале пройден!" },
        { en: "7 / 7 уроков" },
        { en: "A1 — пройден пятый блок." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Мурзик и Том садятся в автобус.",
      lines: [
        { ru: "Hoşça kal, Pamukkale!", en: "Пока, Памуккале!" },
        { ru: "Sıradaki durak: Bodrum!", en: "Следующая остановка: Бодрум!" },
      ],
    },
    {
      image: p("road"),
      a11y: "Автобус спускается с гор к синему Эгейскому морю.",
      lines: [{ ru: "Pamukkale → Bodrum", en: "Памуккале → Бодрум" }],
    },
    {
      image: pic("tr/bodrum/arrival"),
      a11y: "Мурзик и Том на набережной Бодрума: белые домики, старая крепость и деревянные лодки в синей бухте.",
      lines: [
        { ru: "Merhaba, Bodrum!", en: "Привет, Бодрум!" },
        { ru: "Deniz! Güneş! Tekneler!", en: "Море! Солнце! Лодки!" },
      ],
    },
  ],
};

export const trPamukkale = {
  id: "tr-pamukkale",
  name: "Памуккале",
  nameTr: "Pamukkale",
  lessons: [pamukkale1, pamukkale2, pamukkale3, pamukkale4, pamukkale5, pamukkale6, pamukkale7],
  story,
};
