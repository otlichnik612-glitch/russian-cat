import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Анкара · «Праздники и даты» · у бабушки Нур: месяцы, числа, день рождения, подарок, праздник, торт, открытка без адреса. */

const p = (name: string) => pic(`tr/ankara/${name}`);

const ankara1: Lesson = {
  id: "tr-a1-ankara-1",
  level: "A1",
  cityId: "tr-ankara",
  number: 1,
  title: "Месяцы",
  minutes: 7,
  goals: ["Назвать месяцы", "Сказать «в мае»: mayısta", "Спросить, какой сейчас месяц"],
  vocabNote: "Месяцы пишут с маленькой буквы, если это не дата: mayısta — «в мае». С числом — с большой: 5 Mayıs.",
  vocab: [
    v("trak1-1", "ocak, şubat, mart", "январь, февраль, март", "Три листка календаря: снег, снег и первые подснежники.", "Послушать ocak, şubat, mart", p("l1-1")),
    v("trak1-2", "nisan, mayıs, haziran", "апрель, май, июнь", "Три листка календаря: тюльпаны, сирень, солнце.", "Послушать nisan, mayıs, haziran", p("l1-2")),
    v("trak1-3", "temmuz, ağustos, eylül", "июль, август, сентябрь", "Три листка календаря: море, арбуз, первые жёлтые листья.", "Послушать temmuz, ağustos, eylül", p("l1-3")),
    v("trak1-4", "ekim, kasım, aralık", "октябрь, ноябрь, декабрь", "Три листка календаря: листопад, дождь, снеговик.", "Послушать ekim, kasım, aralık", p("l1-4")),
    v("trak1-5", "Hangi aydayız?", "Какой сейчас месяц?", "Мурзик стоит перед календарём, приподняв бровь.", "Послушать Hangi aydayız", p("l1-5")),
    v("trak1-6", "mayısta", "в мае", "Цветущая сирень у окна.", "Послушать mayısta", p("l1-6")),
    v("trak1-7", "ilkbahar", "весна", "Весенний парк, цветут деревья.", "Послушать ilkbahar", p("l1-7")),
  ],
  dialogue: {
    title: "Бабушка Нур",
    note: "Бабушка Нур — младшая сестра бабушки Аси, белая ангорская кошка. Nine — «бабушка», ласковое обращение. Mevsim — «время года». Doğdu — «родилась».",
    lines: [
      line("nur", "Murzik! Sen Asya'nın torunu musun?", "Мурзик! Ты внук Аси?"),
      line("murzik", "Evet! Merhaba, Nur Nine!", "Да! Здравствуйте, бабушка Нур!"),
      line("nur", "Hoş geldin, canım! Hangi aydayız? Mayıs! İlkbahar en güzel mevsim.", "Добро пожаловать, милый! Какой сейчас месяц? Май! Весна — самое красивое время года."),
      line("tom", "Mayısta Ankara çok güzel.", "В мае Анкара очень красивая."),
      line("nur", "Asya da mayısta doğdu… Ya sen?", "Ася тоже родилась в мае… А ты?"),
      line("murzik", "Ben de mayısta doğdum!", "Я тоже родился в мае!"),
    ],
    gist: choice("trak1-d1", "В каком месяце родилась бабушка Ася?", [
      ["В мае.", true],
      ["В апреле.", false],
      ["В июне.", false],
    ]),
  },
  grammar: [
    {
      title: "В мае: -da, -de, -ta, -te",
      paragraphs: [
        "«В каком месяце» — окончание «где»: mayıs-ta (в мае), haziran-da (в июне), eylül-de (в сентябре), ağustos-ta (в августе).",
        "После глухих звуков s, ş, t, k… — -ta / -te. Вопрос: Hangi aydayız? — Какой сейчас месяц? (буквально «в каком месяце мы?»)",
      ],
      examples: [
        { ru: "Haziranda deniz sıcak.", en: "В июне море тёплое." },
        { ru: "Ben martta doğdum.", en: "Я родился в марте." },
      ],
    },
  ],
  tasks: [
    choice("trak1-t1", "Как сказать «в августе»?", [
      ["ağustosta", true],
      ["ağustosda", false],
      ["ağustos", false],
    ], { skill: "grammar" }),
    listen("trak1-t2", "Послушай. Какой месяц?", "Şimdi haziran.", [
      ["Июнь.", true],
      ["Январь.", false],
      ["Май.", false],
    ]),
    match("trak1-t3", "Соедини пары.", [
      ["ocak", "январь"],
      ["mayıs", "май"],
      ["eylül", "сентябрь"],
      ["aralık", "декабрь"],
    ], { skill: "words" }),
    missing("trak1-t4", "Какой буквы не хватает? («август»)", "a", "ustos", "ğ", ["ğ", "g", "v"]),
    speak("trak1-t5", "Hangi ayı seviyorsun?", "Haziranı seviyorum, çünkü yaz başlıyor.", "Я люблю июнь, потому что начинается лето.", { help: "Скажи вслух, какой месяц тебе нравится и почему." }),
    choice("trak1-t6", "Как сказать тост «За твой успех!»?", [
      ["Başarına!", true],
      ["Başarın!", false],
      ["Başarıda!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "vazo",
    itemName: "Ваза с тюльпанами",
    itemNameRu: "Vazo",
    ru: "Yaşasın! Bir vazo!",
    en: "Ура! Ваза!",
    a11y: "Белая ваза с весенними тюльпанами стоит на подоконнике в доме бабушки Нур.",
    image: p("vazo"),
    steps: ["Бабушка Нур ставит в вазу весенние тюльпаны.", "«Odana!» — «В твою комнату!»", "Мурзик несёт вазу на подоконник.", "В комнате пахнет весной."],
    bridge: "Бабушка Нур смотрит на календарь: «А какое сегодня число?»",
  },
};

const ankara2: Lesson = {
  id: "tr-a1-ankara-2",
  level: "A1",
  cityId: "tr-ankara",
  number: 2,
  title: "Какое сегодня число?",
  minutes: 7,
  goals: ["Спросить и назвать дату", "Сказать «первый, второй, третий»", "Сказать «через три дня», «на следующей неделе»"],
  vocabNote: "В дате число простое: Bugün iki Mayıs — «сегодня два мая». Порядковые (birinci, ikinci) нужны для другого: «первый день», «второй этаж».",
  vocab: [
    v("trak2-1", "Bugün ayın kaçı?", "Какое сегодня число?", "Том украдкой смотрит на календарь, прикрывая его рукой.", "Послушать Bugün ayın kaçı", p("l2-1")),
    v("trak2-2", "Bugün iki Mayıs.", "Сегодня второе мая.", "На листке календаря крупная цифра два.", "Послушать Bugün iki Mayıs", p("l2-2")),
    v("trak2-3", "birinci, ikinci, üçüncü", "первый, второй, третий", "Три котёнка на пьедестале: первое, второе и третье место.", "Послушать birinci, ikinci, üçüncü", p("l2-3")),
    v("trak2-4", "tarih", "дата", "Ручка подчёркивает дату на письме.", "Послушать tarih", p("l2-4")),
    v("trak2-5", "üç gün sonra", "через три дня", "Три листка календаря, на третьем нарисован торт.", "Послушать üç gün sonra", p("l2-5")),
    v("trak2-6", "geçen hafta", "на прошлой неделе", "Стрелка на календаре показывает назад.", "Послушать geçen hafta", p("l2-6")),
    v("trak2-7", "gelecek hafta", "на следующей неделе", "Стрелка на календаре показывает вперёд.", "Послушать gelecek hafta", p("l2-7")),
  ],
  dialogue: {
    title: "Подозрительный Том",
    note: "Hiç! Sadece soruyorum — «Ничего! Просто спрашиваю».",
    lines: [
      line("tom", "Nur Nine, bugün ayın kaçı?", "Бабушка Нур, какое сегодня число?"),
      line("nur", "Bugün iki Mayıs.", "Сегодня второе мая."),
      line("tom", "Üç gün sonra… beş Mayıs!", "Через три дня… пятое мая!"),
      line("murzik", "Beş Mayıs mı? Neden?", "Пятое мая? А что?"),
      line("tom", "Hiç! Sadece soruyorum.", "Ничего! Просто спрашиваю."),
      line("nur", "Bu hafta çok güzel bir gün var, değil mi Tom?", "А на этой неделе будет очень хороший день, правда, Том?"),
    ],
    gist: choice("trak2-d1", "Какое сегодня число?", [
      ["Второе мая.", true],
      ["Пятое мая.", false],
      ["Третье мая.", false],
    ]),
  },
  grammar: [
    {
      title: "Даты и порядковые числа",
      paragraphs: [
        "Дата — число и месяц: Bugün iki Mayıs. — Сегодня второе мая. Bugün on beş Ağustos. — Сегодня пятнадцатое августа.",
        "Порядковые числа — с окончанием -inci / -ıncı / -uncu / -üncü: bir → birinci, iki → ikinci, üç → üçüncü, dört → dördüncü.",
      ],
      examples: [
        { ru: "Bugün on Mart.", en: "Сегодня десятое марта." },
        { ru: "Bu benim birinci dersim.", en: "Это мой первый урок." },
      ],
    },
  ],
  tasks: [
    listen("trak2-t1", "Послушай. Какая дата?", "Bugün on beş Ağustos.", [
      ["15 августа", true],
      ["5 августа", false],
      ["15 апреля", false],
    ]),
    choice("trak2-t2", "Как сказать «Сегодня третье мая»?", [
      ["Bugün üç Mayıs.", true],
      ["Bugün üçüncü Mayıs.", false],
      ["Bugün Mayıs üç.", false],
    ], { skill: "grammar" }),
    match("trak2-t3", "Соедини пары.", [
      ["birinci", "первый"],
      ["ikinci", "второй"],
      ["geçen hafta", "на прошлой неделе"],
      ["gelecek hafta", "на следующей неделе"],
    ], { skill: "words" }),
    missing("trak2-t4", "Какой буквы не хватает? («третий»)", "üç", "ncü", "ü", ["ü", "u", "i"]),
    speak("trak2-t5", "Bugün ayın kaçı?", "Bugün on Mart.", "Сегодня десятое марта.", { help: "Назови вслух сегодняшнюю дату." }),
    listen("trak2-t6", "Вспомни прошлый урок. Когда?", "Mayısta.", [
      ["В мае.", true],
      ["В марте.", false],
      ["В июле.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cerceve",
    itemName: "Рамка для фото",
    itemNameRu: "Çerçeve",
    ru: "Yaşasın! Bir çerçeve!",
    en: "Ура! Рамка!",
    a11y: "Серебряная рамка для фотографии, пока пустая, стоит на комоде.",
    image: p("cerceve"),
    steps: ["Бабушка Нур достаёт из шкафа серебряную рамку.", "«Şimdi boş, ama yakında dolu olacak!» — «Пустая, но скоро в ней будет фото!»", "Мурзик ставит её на комод.", "Какое фото здесь будет?"],
    bridge: "Мурзик спрашивает бабушку Нур: «А когда у вас день рождения?»",
  },
};

const ankara3: Lesson = {
  id: "tr-a1-ankara-3",
  level: "A1",
  cityId: "tr-ankara",
  number: 3,
  title: "Когда день рождения?",
  minutes: 7,
  goals: ["Спросить, когда день рождения", "Сказать дату: beş Mayıs'ta", "Сказать, сколько исполняется"],
  vocabNote: "К дате окончание пишут через апостроф: 5 Mayıs'ta, 10 Ekim'de. Kaç yaşına giriyorsun? — буквально «в какой возраст входишь?».",
  vocab: [
    v("trak3-1", "Doğum günün ne zaman?", "Когда у тебя день рождения?", "Бабушка Нур с улыбкой спрашивает Мурзика за чаем.", "Послушать Doğum günün ne zaman", p("l3-1")),
    v("trak3-2", "Doğum günüm beş Mayıs'ta.", "Мой день рождения пятого мая.", "Мурзик показывает на календаре пятое мая.", "Послушать Doğum günüm beş Mayıs'ta", p("l3-2")),
    v("trak3-3", "Kaç yaşına giriyorsun?", "Сколько тебе исполняется?", "Бабушка Нур с любопытством наклоняется к Мурзику.", "Послушать Kaç yaşına giriyorsun", p("l3-3")),
    v("trak3-4", "Yedi yaşına giriyorum.", "Мне исполняется семь.", "Мурзик гордо показывает семь пальцев на двух лапах.", "Послушать Yedi yaşına giriyorum", p("l3-4")),
    v("trak3-5", "parti", "вечеринка", "Комната с гирляндами и шариками.", "Послушать parti", p("l3-5")),
    v("trak3-6", "davet", "приглашение", "Красивая открытка-приглашение с шариками.", "Послушать davet", p("l3-6")),
    v("trak3-7", "Gelir misin?", "Придёшь?", "Том протягивает соседу приглашение.", "Послушать Gelir misin", p("l3-7")),
  ],
  dialogue: {
    title: "Секрет раскрыт",
    note: "Yani — «то есть, значит». Davet edelim — «давай пригласим». Komşular — «соседи».",
    lines: [
      line("murzik", "Nur Nine, doğum gününüz ne zaman?", "Бабушка Нур, когда у вас день рождения?"),
      line("nur", "Benim doğum günüm on Ekim'de. Ya senin?", "Мой день рождения десятого октября. А твой?"),
      line("murzik", "Benim doğum günüm beş Mayıs'ta!", "Мой — пятого мая!"),
      line("nur", "Beş Mayıs mı? Yani üç gün sonra! Kaç yaşına giriyorsun?", "Пятого мая? Значит, через три дня! Сколько тебе исполняется?"),
      line("murzik", "Yedi yaşına giriyorum.", "Мне исполняется семь."),
      line("tom", "Parti yapalım mı?", "Устроим вечеринку?"),
      line("nur", "Tabii! Komşuları da davet edelim.", "Конечно! И соседей пригласим."),
    ],
    gist: choice("trak3-d1", "Когда день рождения у Мурзика?", [
      ["Пятого мая.", true],
      ["Десятого октября.", false],
      ["Второго мая.", false],
    ]),
  },
  grammar: [
    {
      title: "Когда: 5 Mayıs'ta",
      paragraphs: [
        "«Какого числа» — дата и окончание «где» через апостроф: beş Mayıs'ta (пятого мая), on Ekim'de (десятого октября), on iki Haziran'da (двенадцатого июня).",
        "«Мне исполняется…» — число и yaşına giriyorum: yedi yaşına giriyorum — мне исполняется семь.",
      ],
      examples: [
        { ru: "Doğum günüm on iki Haziran'da.", en: "Мой день рождения двенадцатого июня." },
        { ru: "Tom yirmi altı yaşına giriyor.", en: "Тому исполняется двадцать шесть." },
      ],
    },
  ],
  tasks: [
    choice("trak3-t1", "Как сказать «десятого октября» (когда)?", [
      ["on Ekim'de", true],
      ["on Ekim'e", false],
      ["on Ekim'den", false],
    ], { skill: "grammar" }),
    listen("trak3-t2", "Послушай. Сколько исполняется?", "Otuz yaşına giriyorum.", [
      ["Тридцать.", true],
      ["Тринадцать.", false],
      ["Три.", false],
    ]),
    match("trak3-t3", "Соедини пары.", [
      ["doğum günü", "день рождения"],
      ["davet", "приглашение"],
      ["parti", "вечеринка"],
      ["Gelir misin?", "Придёшь?"],
    ], { skill: "words" }),
    spell("trak3-t4", "Собери из букв слово «вечеринка».", "parti"),
    speak("trak3-t5", "Doğum günün ne zaman?", "Doğum günüm on iki Haziran'da.", "Мой день рождения двенадцатого июня.", { help: "Назови вслух дату своего дня рождения." }),
    choice("trak3-t6", "Как спросить «Какое сегодня число?»", [
      ["Bugün ayın kaçı?", true],
      ["Bugün kaç yaşında?", false],
      ["Bugün hangi saat?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kitap",
    itemName: "Старая книга сказок",
    itemNameRu: "Kitap",
    ru: "Yaşasın! Eski bir kitap!",
    en: "Ура! Старая книга!",
    a11y: "Старая книга турецких сказок с рисунками на полях. На форзаце от руки написаны два имени.",
    image: p("kitap"),
    steps: ["Бабушка Нур достаёт с полки старую книгу.", "«Asya ile çocukken okurduk.» — «Мы с Асей читали её в детстве.»", "На форзаце два имени: Нур и Ася.", "Мурзик бережно гладит страницы."],
    bridge: "Том тайком спрашивает бабушку Нур: «Что подарить Мурзику?»",
  },
};

const ankara4: Lesson = {
  id: "tr-a1-ankara-4",
  level: "A1",
  cityId: "tr-ankara",
  number: 4,
  title: "Что ему подарить?",
  minutes: 7,
  goals: ["Посоветоваться о подарке", "Сказать «ему, ей, тебе, мне»: ona, sana, bana", "Попросить не выдавать секрет"],
  vocabNote: "Ne dersin? — «Что скажешь? Как думаешь?» Вежливо: Ne dersiniz?",
  vocab: [
    v("trak4-1", "Ona ne alalım?", "Что ему купим?", "Том и бабушка Нур шепчутся на кухне.", "Послушать Ona ne alalım", p("l4-1")),
    v("trak4-2", "hediye", "подарок", "Коробка в цветной бумаге с бантом.", "Послушать hediye", p("l4-2")),
    v("trak4-3", "Ona bir resim defteri alalım.", "Давай купим ему альбом для рисования.", "Том показывает на альбом в витрине магазина.", "Послушать Ona bir resim defteri alalım", p("l4-3")),
    v("trak4-4", "Ne dersin?", "Как думаешь?", "Том вопросительно смотрит на бабушку Нур.", "Послушать Ne dersin", p("l4-4")),
    v("trak4-5", "İyi fikir!", "Хорошая идея!", "Над головой бабушки Нур загорается лампочка.", "Послушать İyi fikir", p("l4-5")),
    v("trak4-6", "Sürpriz!", "Сюрприз!", "Из коробки выпрыгивают конфетти.", "Послушать Sürpriz", p("l4-6")),
    v("trak4-7", "Ona söyleme!", "Не говори ему!", "Бабушка Нур прикладывает палец к губам.", "Послушать Ona söyleme", p("l4-7")),
  ],
  dialogue: {
    title: "Тайный совет",
    note: "Vereceğim — «я подарю, дам». Söylemem — «не скажу».",
    lines: [
      line("tom", "Nur Nine, Murzik'e ne alalım?", "Бабушка Нур, что купим Мурзику?"),
      line("nur", "Hmm… Murzik resim yapmayı seviyor, değil mi?", "Хм… Мурзик любит рисовать, правда?"),
      line("tom", "Evet! Ona bir resim defteri alalım. Ne dersiniz?", "Да! Давайте купим ему альбом для рисования. Как вы думаете?"),
      line("nur", "İyi fikir! Ben de ona bir şey vereceğim…", "Хорошая идея! А я ему тоже кое-что подарю…"),
      line("tom", "Ne?", "Что?"),
      line("nur", "Sürpriz! Ama ona söyleme!", "Сюрприз! Только ему не говори!"),
      line("tom", "Tamam, söylemem!", "Хорошо, не скажу!"),
    ],
    gist: choice("trak4-d1", "Что Том хочет подарить Мурзику?", [
      ["Альбом для рисования.", true],
      ["Саз.", false],
      ["Фотоаппарат.", false],
    ]),
  },
  grammar: [
    {
      title: "Кому: bana, sana, ona",
      paragraphs: [
        "«Кому» — окончание -a / -e: Murzik'e (Мурзику), anneme (моей маме). Местоимения: bana — мне, sana — тебе, ona — ему или ей, bize — нам, size — вам.",
        "Ona значит и «ему», и «ей»: рода в турецком нет.",
      ],
      examples: [
        { ru: "Ona bir kitap alalım.", en: "Давай купим ему книгу." },
        { ru: "Bana bir hediye mi aldın?", en: "Ты купил мне подарок?" },
      ],
    },
  ],
  tasks: [
    choice("trak4-t1", "Как сказать «Давай купим ему подарок»?", [
      ["Ona bir hediye alalım.", true],
      ["Onu bir hediye alalım.", false],
      ["O bir hediye alalım.", false],
    ], { skill: "grammar" }),
    listen("trak4-t2", "Послушай. Что предлагают подарить?", "Ona bir kitap alalım.", [
      ["Книгу.", true],
      ["Цветы.", false],
      ["Торт.", false],
    ]),
    match("trak4-t3", "Соедини пары.", [
      ["hediye", "подарок"],
      ["Sürpriz!", "Сюрприз!"],
      ["İyi fikir!", "Хорошая идея!"],
      ["Ne dersin?", "Как думаешь?"],
    ], { skill: "words" }),
    missing("trak4-t4", "Какой буквы не хватает? («подарок»)", "hed", "ye", "i", ["i", "ı", "e"]),
    speak("trak4-t5", "Annene ne alıyorsun?", "Ona çiçek alıyorum.", "Я покупаю ей цветы.", { help: "Скажи вслух, что подаришь маме." }),
    choice("trak4-t6", "Как спросить «Когда у тебя день рождения?»", [
      ["Doğum günün ne zaman?", true],
      ["Doğum günü nerede?", false],
      ["Kaç doğum günü?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "balonlar",
    itemName: "Воздушные шарики",
    itemNameRu: "Balonlar",
    ru: "Yaşasın! Renkli balonlar!",
    en: "Ура! Разноцветные шарики!",
    a11y: "Связка разноцветных воздушных шариков привязана к спинке стула.",
    image: p("balonlar"),
    steps: ["Том приходит домой со связкой шариков.", "«Bunlar ne için?» — спрашивает Мурзик. «Это для чего?»", "«Hiç! Güzel, değil mi?» — «Просто так! Красиво же?»", "Мурзик делает вид, что ничего не замечает."],
    bridge: "Утро пятого мая. Мурзик просыпается — а в доме подозрительно тихо…",
  },
};

const ankara5: Lesson = {
  id: "tr-a1-ankara-5",
  level: "A1",
  cityId: "tr-ankara",
  number: 5,
  title: "İyi ki doğdun! — С днём рождения!",
  minutes: 7,
  goals: ["Поздравить с днём рождения", "Попросить открыть подарок", "Сказать, как ты рад(а) сюрпризу"],
  vocabNote: "İyi ki doğdun — буквально «как хорошо, что ты родился». Это самое тёплое поздравление.",
  vocab: [
    v("trak5-1", "Doğum günün kutlu olsun!", "С днём рождения!", "Бабушка Нур протягивает Мурзику подарок с бантом.", "Послушать Doğum günün kutlu olsun", p("l5-1")),
    v("trak5-2", "İyi ki doğdun!", "С днём рождения! (как хорошо, что ты родился)", "Том и бабушка Нур выпрыгивают из-за двери с хлопушками.", "Послушать İyi ki doğdun", p("l5-2")),
    v("trak5-3", "Hediyeni aç!", "Открой подарок!", "Мурзик развязывает бант на коробке.", "Послушать Hediyeni aç", p("l5-3")),
    v("trak5-4", "Ne güzel bir sürpriz!", "Какой чудесный сюрприз!", "Мурзик прижимает лапы к щекам от восторга.", "Послушать Ne güzel bir sürpriz", p("l5-4")),
    v("trak5-5", "Ne kadar güzel!", "Как красиво!", "Мурзик держит новый альбом и сияет.", "Послушать Ne kadar güzel", p("l5-5")),
    v("trak5-6", "Kaç yaşına girdin?", "Сколько тебе исполнилось?", "Бабушка Нур ласково гладит Мурзика по голове.", "Послушать Kaç yaşına girdin", p("l5-6")),
    v("trak5-7", "Seni seviyoruz!", "Мы тебя любим!", "Том и бабушка Нур обнимают Мурзика с двух сторон.", "Послушать Seni seviyoruz", p("l5-7")),
  ],
  dialogue: {
    title: "Утро пятого мая",
    note: "Hediyeni — «твой подарок». Girdin — «ты вошёл (в возраст)», то есть «тебе исполнилось».",
    lines: [
      line("tom", "Sürpriz! İyi ki doğdun, Murzik!", "Сюрприз! С днём рождения, Мурзик!"),
      line("nur", "Doğum günün kutlu olsun, canım!", "С днём рождения, мой хороший!"),
      line("murzik", "Ne güzel bir sürpriz! Teşekkürler!", "Какой чудесный сюрприз! Спасибо!"),
      line("tom", "Hediyeni aç!", "Открой подарок!"),
      line("murzik", "Bir resim defteri! Ne kadar güzel!", "Альбом для рисования! Как красиво!"),
      line("nur", "Kaç yaşına girdin?", "Сколько тебе исполнилось?"),
      line("murzik", "Yedi!", "Семь!"),
      line("tom", "Seni seviyoruz, Murzik!", "Мы тебя любим, Мурзик!"),
    ],
    gist: choice("trak5-d1", "Что подарил Том?", [
      ["Альбом для рисования.", true],
      ["Книгу.", false],
      ["Шарики.", false],
    ]),
  },
  grammar: [
    {
      title: "Поздравления",
      paragraphs: [
        "Doğum günün kutlu olsun! — «С днём рождения!» (чуть официальнее). İyi ki doğdun! — то же, но теплее.",
        "На «вы»: Doğum gününüz kutlu olsun! İyi ki doğdunuz! Так поздравляют пожилых и незнакомых.",
      ],
      examples: [
        { ru: "İyi ki doğdun, Tom!", en: "С днём рождения, Том!" },
        { ru: "Doğum gününüz kutlu olsun, Nur Nine!", en: "С днём рождения, бабушка Нур!" },
      ],
    },
  ],
  tasks: [
    choice("trak5-t1", "Как тепло поздравить друга с днём рождения?", [
      ["İyi ki doğdun!", true],
      ["Geçmiş olsun!", false],
      ["Afiyet olsun!", false],
    ], { skill: "words" }),
    listen("trak5-t2", "Послушай. Сколько исполнилось?", "Kırk yaşına girdim.", [
      ["Сорок.", true],
      ["Четырнадцать.", false],
      ["Четыре.", false],
    ]),
    choice("trak5-t3", "Как поздравить пожилую соседку (на «вы»)?", [
      ["Doğum gününüz kutlu olsun!", true],
      ["Doğum günün kutlu olsun!", false],
      ["Doğum günüm kutlu olsun!", false],
    ], { skill: "grammar" }),
    missing("trak5-t4", "Какой буквы не хватает? («Как хорошо, что ты родился!»)", "İyi ki do", "dun!", "ğ", ["ğ", "g", "y"]),
    speak("trak5-t5", "Bugün benim doğum günüm!", "İyi ki doğdun! Doğum günün kutlu olsun!", "С днём рождения!", { help: "Поздравь вслух." }),
    choice("trak5-t6", "Как сказать «Давай купим ему книгу»?", [
      ["Ona bir kitap alalım.", true],
      ["Onu bir kitap alalım.", false],
      ["Ben kitap alalım.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "resim-defteri",
    itemName: "Альбом для рисования",
    itemNameRu: "Resim defteri",
    ru: "Yaşasın! Bir resim defteri!",
    en: "Ура! Альбом для рисования!",
    a11y: "Большой альбом для рисования и коробка акварели. На обложке Том нарисовал рыжего котёнка.",
    image: p("resim-defteri"),
    steps: ["Мурзик открывает альбом.", "А внутри — коробка акварели от бабушки Нур!", "На обложке Том нарисовал рыжего котёнка.", "Мурзик тут же рисует первую картинку."],
    bridge: "А на кухне ждёт торт со свечками!",
  },
};

const ankara6: Lesson = {
  id: "tr-a1-ankara-6",
  level: "A1",
  cityId: "tr-ankara",
  number: 6,
  title: "Торт и пожелания",
  minutes: 7,
  goals: ["Загадать желание и задуть свечи", "Пожелать здоровья и счастья: dilerim", "Сказать «долгих лет!»"],
  vocabNote: "Nice yıllara! — «Ещё многих лет!» Так говорят в день рождения и в праздники.",
  vocab: [
    v("trak6-1", "pasta", "торт", "Шоколадный торт со свечками на столе.", "Послушать pasta", p("l6-1")),
    v("trak6-2", "Mumları üfle!", "Задуй свечи!", "Мурзик надувает щёки над свечками.", "Послушать Mumları üfle", p("l6-2")),
    v("trak6-3", "Bir dilek tut!", "Загадай желание!", "Мурзик зажмурился и сложил лапки.", "Послушать Bir dilek tut", p("l6-3")),
    v("trak6-4", "Sana sağlık ve mutluluk dilerim.", "Желаю тебе здоровья и счастья.", "Бабушка Нур поднимает стаканчик чая.", "Послушать Sana sağlık ve mutluluk dilerim", p("l6-4")),
    v("trak6-5", "Nice yıllara!", "Долгих лет!", "Все за столом поднимают стаканы.", "Послушать Nice yıllara", p("l6-5")),
    v("trak6-6", "Bir dilim daha?", "Ещё кусочек?", "Том держит нож над тортом.", "Послушать Bir dilim daha", p("l6-6")),
    v("trak6-7", "Dileğin ne?", "Какое у тебя желание?", "Бабушка Нур с любопытством наклоняется к Мурзику.", "Послушать Dileğin ne", p("l6-7")),
  ],
  dialogue: {
    title: "Семь свечек",
    note: "Söyleyemem — «не могу сказать». Sır — «секрет».",
    lines: [
      line("nur", "İşte pasta! Mumları üfle!", "Вот торт! Задувай свечи!"),
      line("tom", "Önce bir dilek tut!", "Сначала загадай желание!"),
      line("murzik", "Tamam… Hazır!", "Так… Готово!"),
      line("nur", "Dileğin ne?", "Какое у тебя желание?"),
      line("murzik", "Söyleyemem! Sır!", "Не могу сказать! Секрет!"),
      line("tom", "Sana sağlık ve mutluluk dilerim!", "Желаю тебе здоровья и счастья!"),
      line("nur", "Nice yıllara, Murzik!", "Долгих лет, Мурзик!"),
    ],
    gist: choice("trak6-d1", "Почему Мурзик не говорит своё желание?", [
      ["Это секрет.", true],
      ["Он его забыл.", false],
      ["Он не загадывал.", false],
    ]),
  },
  grammar: [
    {
      title: "Желаю: … dilerim",
      paragraphs: [
        "«Желаю» — dilerim. Кому — с окончанием -a / -e: sana (тебе), size (вам). Что — просто слово: Sana sağlık dilerim. — Желаю тебе здоровья.",
        "Можно перечислить: Sana sağlık, mutluluk ve başarı dilerim. — Желаю тебе здоровья, счастья и успехов.",
      ],
      examples: [
        { ru: "Size mutluluk dilerim.", en: "Желаю вам счастья." },
        { ru: "Sana iyi yolculuklar dilerim.", en: "Желаю тебе счастливого пути." },
      ],
    },
  ],
  tasks: [
    choice("trak6-t1", "Как сказать «Желаю тебе счастья»?", [
      ["Sana mutluluk dilerim.", true],
      ["Seni mutluluk dilerim.", false],
      ["Sen mutluluk dilerim.", false],
    ], { skill: "grammar" }),
    listen("trak6-t2", "Послушай. Что желают?", "Sana sağlık ve başarı dilerim.", [
      ["Здоровья и успехов.", true],
      ["Счастья и любви.", false],
      ["Хорошей дороги.", false],
    ]),
    match("trak6-t3", "Соедини пары.", [
      ["pasta", "торт"],
      ["mum", "свеча"],
      ["dilek", "желание"],
      ["Nice yıllara!", "Долгих лет!"],
    ], { skill: "words" }),
    missing("trak6-t4", "Какой буквы не хватает? («Задуй!»)", "Ü", "le!", "f", ["f", "v", "p"]),
    speak("trak6-t5", "Bana ne dilersin?", "Sana sağlık ve mutluluk dilerim!", "Желаю тебе здоровья и счастья!", { help: "Пожелай вслух что-нибудь хорошее." }),
    listen("trak6-t6", "Вспомни прошлый урок. Что говорят?", "İyi ki doğdun!", [
      ["С днём рождения!", true],
      ["Выздоравливай!", false],
      ["Приятного аппетита!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "mum",
    itemName: "Свечка-котик",
    itemNameRu: "Mum",
    ru: "Yaşasın! Bir mum!",
    en: "Ура! Свечка!",
    a11y: "Маленькая свечка в форме котика с цифрой семь на боку стоит на кусочке торта.",
    image: p("mum"),
    steps: ["Бабушка Нур достаёт свечку-котика.", "На ней цифра семь.", "«Hatıra olsun!» — «На память!»", "Мурзик ставит её на полку."],
    bridge: "Вечером почтальон приносит открытку. На ней нет обратного адреса…",
  },
};

const ankara7: Lesson = {
  id: "tr-a1-ankara-7",
  level: "A1",
  cityId: "tr-ankara",
  number: 7,
  title: "Открытка без адреса",
  minutes: 8,
  goals: ["Задавать вопросы: кто, откуда, почему, какой", "Понять короткую открытку", "Вспомнить все слова Анкары"],
  vocabNote: "Torun — «внук» или «внучка». Torunum — «мой внук, моя внучка». Pul — «почтовая марка». Posta damgası — «почтовый штемпель»: по нему видно, из какого города письмо.",
  vocab: [
    v("trak7-1", "Kim gönderdi?", "Кто прислал?", "Мурзик держит открытку и растерянно оглядывается.", "Послушать Kim gönderdi", p("l7-1")),
    v("trak7-2", "Nereden geldi?", "Откуда пришла?", "Том рассматривает марку на открытке через лупу.", "Послушать Nereden geldi", p("l7-2")),
    v("trak7-3", "Ne yazıyor?", "Что там написано?", "Бабушка Нур надевает очки.", "Послушать Ne yazıyor", p("l7-3")),
    v("trak7-4", "Neden adres yok?", "Почему нет обратного адреса?", "Крупно: пустое место для обратного адреса на открытке.", "Послушать Neden adres yok", p("l7-4")),
    v("trak7-5", "Hangi şehirden?", "Из какого города?", "Синяя марка с видом зелёных гор у моря и круглый почтовый штемпель.", "Послушать Hangi şehirden", p("l7-5")),
    v("trak7-6", "torunum", "мой внук, моя внучка", "В углу открытки нарисована маленькая рыжая кошечка.", "Послушать torunum", p("l7-6")),
    v("trak7-7", "Bu onun yazısı!", "Это её почерк!", "Бабушка Нур прижимает открытку к груди, на глазах слёзы.", "Послушать Bu onun yazısı", p("l7-7")),
  ],
  dialogue: {
    title: "Вечерняя почта",
    note: "Kartpostal — «открытка». Yazı — «почерк, надпись».",
    lines: [
      line("murzik", "Bir kartpostal! Kim gönderdi?", "Открытка! Кто прислал?"),
      line("tom", "Bilmiyorum. Adres yok.", "Не знаю. Адреса нет."),
      line("murzik", "Neden adres yok? Ne yazıyor… «İyi ki doğdun, torunum.»", "Почему нет обратного адреса? Что там написано… «С днём рождения, внучек»"),
      line("nur", "Bu… Asya'nın yazısı! Bu onun yazısı!", "Это… почерк Аси! Это её почерк!"),
      line("tom", "Nereden geldi? Bak, posta damgası: Trabzon!", "Откуда она? Смотри, почтовый штемпель: Трабзон!"),
      line("murzik", "Hangi şehirden? Trabzon'dan! Trabzon'a gidelim!", "Из какого города? Из Трабзона! Едем в Трабзон!"),
    ],
    gist: choice("trak7-d1", "Откуда пришла открытка?", [
      ["Из Трабзона.", true],
      ["Из Анкары.", false],
      ["Из Парижа.", false],
    ]),
  },
  grammar: [
    {
      title: "Вопросительные слова",
      paragraphs: [
        "Kim? — кто? Ne? — что? Nerede? — где? Nereden? — откуда? Nereye? — куда? Ne zaman? — когда? Neden? — почему? Hangi? — какой (из)? Kaç? — сколько?",
        "Вопросительное слово обычно стоит прямо перед глаголом: Kartpostalı kim gönderdi? — Кто прислал открытку?",
      ],
      examples: [
        { ru: "Kartpostal nereden geldi?", en: "Откуда пришла открытка?" },
        { ru: "Asya şimdi nerede?", en: "Где сейчас Ася?" },
      ],
    },
  ],
  tasks: [
    listen("trak7-t1", "Аудиоэкзамен. Что написано в открытке?", "İyi ki doğdun, torunum. Seni çok seviyorum.", [
      ["С днём рождения, внучек. Я тебя очень люблю.", true],
      ["Приезжай ко мне в гости.", false],
      ["Где ты сейчас живёшь?", false],
    ]),
    choice("trak7-t2", "Как спросить «Откуда пришло письмо?»", [
      ["Mektup nereden geldi?", true],
      ["Mektup nereye geldi?", false],
      ["Mektup nerede geldi?", false],
    ], { skill: "grammar" }),
    match("trak7-t3", "Соедини пары.", [
      ["kim", "кто"],
      ["neden", "почему"],
      ["nereden", "откуда"],
      ["hangi", "какой (из)"],
    ], { skill: "words" }),
    spell("trak7-t4", "Собери из букв слово «внук».", "torun"),
    speak("trak7-t5", "Kartpostalı kim gönderdi?", "Bilmiyorum! Adres yok.", "Не знаю! Адреса нет.", { help: "Ответь вслух." }),
    script("trak7-t6", "Вспомни всю Анкару. Закончи разговоры.", [
      { speaker: "Бабушка Нур", text: "Bugün ayın kaçı?" },
      { speaker: "Ты", answer: "Bugün beş Mayıs.", options: ["Bugün beş Mayıs.", "Bugün Mayıs.", "Beş yaşında."] },
      { speaker: "Том", text: "Doğum günün ne zaman?" },
      { speaker: "Ты", answer: "Beş Mayıs'ta.", options: ["Beş Mayıs'ta.", "Beş Mayıs'tan.", "Hemen!"] },
      { speaker: "Бабушка Нур", text: "İyi ki doğdun!" },
      { speaker: "Ты", answer: "Teşekkür ederim!", options: ["Teşekkür ederim!", "Geçmiş olsun!", "Sürpriz!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "battaniye",
    itemName: "Плед из ангорской шерсти",
    itemNameRu: "Battaniye",
    ru: "Yaşasın! Yumuşak bir battaniye!",
    en: "Ура! Мягкий плед!",
    a11y: "Белый пушистый плед из ангорской шерсти сложен на кресле.",
    image: p("battaniye"),
    steps: ["Бабушка Нур достаёт из сундука белый плед.", "«Bunu Asya ile birlikte ördük.» — «Мы связали его вместе с Асей.»", "Плед мягкий, как облако.", "Мурзик заворачивается в него и улыбается."],
    bridge: "Завтра — Трабзон. Может быть, там, на почте, кто-то видел отправителя.",
  },
};

const story: CityStory = {
  home: {
    name: "У бабушки Нур",
    nameRu: "Nur Nine'nin evi",
    image: p("home"),
    a11y: "Уютная пустая комната в доме бабушки Нур: кружевные занавески, старое кресло, на стене вышивка. Посередине чемодан Мурзика.",
  },
  keepsakeId: "battaniye",
  welcomeRu: "Merhaba, Ankara!",
  welcomeEn: "Привет, Анкара!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том у старой крепости Анкары на холме. Внизу большой город. Тёплый весенний день.",
  departureImage: p("departure"),
  departureA11y: "Бабушка Нур, белая ангорская кошка в шали, провожает Мурзика и Тома в аэропорту и машет белым платком.",
  finale: [
    {
      image: p("postcard"),
      a11y: "Крупно: открытка с маленькой рыжей кошечкой в углу и синей маркой с видом зелёных гор у моря, на ней круглый почтовый штемпель. Обратного адреса нет. Открытку держит белая лапа бабушки Нур.",
      lines: [
        { en: "Бабушка Нур долго держит открытку в лапах." },
        { ru: "Asya yaşıyor. Biliyorum.", en: "Ася жива. Я это знаю." },
        { en: "Почерк свежий. Штемпель — Трабзон, город на берегу Чёрного моря." },
      ],
    },
    {
      image: p("battaniye"),
      a11y: "Мурзик обходит свою комнату у бабушки Нур, которую обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свою комнату у бабушки Нур. Том фотографирует её для журнала." },
        { en: "С собой — белый плед, который связали две сестры." },
        { en: "Открытку ко дню рождения Мурзик кладёт в рюкзак — пусть всегда будет с ним." },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "Ankara tamamlandı!", en: "Анкара пройдена!" },
        { en: "7 / 7 уроков" },
        { en: "A1 — пройден десятый блок." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Бабушка Нур машет на прощание белым платком.",
      lines: [
        { ru: "Hoşça kal, Nur Nine!", en: "До свидания, бабушка Нур!" },
        { ru: "Sıradaki durak: Trabzon!", en: "Следующая остановка: Трабзон!" },
      ],
    },
    {
      image: p("flight"),
      a11y: "Самолёт летит на север над горами к Чёрному морю.",
      lines: [{ ru: "Ankara → Trabzon", en: "Анкара → Трабзон" }],
    },
    {
      image: pic("tr/trabzon/arrival"),
      a11y: "Мурзик и Том в Трабзоне: зелёные горы, чайные плантации на склонах, серое Чёрное море. Моросит дождь.",
      lines: [
        { ru: "Merhaba, Trabzon!", en: "Привет, Трабзон!" },
        { ru: "Yine yağmur!", en: "Опять дождь!" },
      ],
    },
  ],
};

export const trAnkara = {
  id: "tr-ankara",
  name: "Анкара",
  nameTr: "Ankara",
  lessons: [ankara1, ankara2, ankara3, ankara4, ankara5, ankara6, ankara7],
  story,
};
