import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Трабзон · «В гостинице» · бронь, поломки, просьбы, пропавший чемодан, почта, выезд. */

const p = (name: string) => pic(`tr/trabzon/${name}`);

const trabzon1: Lesson = {
  id: "tr-a1-trabzon-1",
  level: "A1",
  cityId: "tr-trabzon",
  number: 1,
  title: "У меня бронь",
  minutes: 7,
  goals: ["Сказать, что у тебя бронь", "Сказать «на две ночи»: iki gece", "Спросить про завтрак и этаж"],
  vocabNote: "После числа множественного числа нет: iki gece — «две ночи», üç gün — «три дня», beş oda — «пять комнат».",
  vocab: [
    v("trtt1-1", "Rezervasyonum var.", "У меня бронь.", "Том у стойки администратора, с него капает дождевая вода.", "Послушать Rezervasyonum var", p("l1-1")),
    v("trtt1-2", "iki gece", "две ночи", "Две луны над Чёрным морем.", "Послушать iki gece", p("l1-2")),
    v("trtt1-3", "iki kişilik oda", "двухместный номер", "Номер с двумя кроватями и окном на море.", "Послушать iki kişilik oda", p("l1-3")),
    v("trtt1-4", "Anahtarınız burada.", "Вот ваш ключ.", "Старинный ключ с деревянным брелоком, на нём номер 305.", "Послушать Anahtarınız burada", p("l1-4")),
    v("trtt1-5", "Kahvaltı dahil mi?", "Завтрак включён?", "Том показывает на картинку с чаем и булочками.", "Послушать Kahvaltı dahil mi", p("l1-5")),
    v("trtt1-6", "Oda kaçıncı katta?", "На каком этаже номер?", "Мурзик смотрит вверх на лестницу.", "Послушать Oda kaçıncı katta", p("l1-6")),
    v("trtt1-7", "asansör", "лифт", "Старый лифт с решётчатой дверью.", "Послушать asansör", p("l1-7")),
  ],
  dialogue: {
    title: "У стойки",
    note: "Adınız? — «Ваше имя?» Buyurun — «пожалуйста, возьмите». Üçüncü kat — «третий этаж».",
    lines: [
      line("tom", "İyi akşamlar! Rezervasyonum var.", "Добрый вечер! У меня бронь."),
      line("receptionist", "Hoş geldiniz! Adınız?", "Добро пожаловать! Ваше имя?"),
      line("tom", "Tom Brown. İki gece.", "Том Браун. Две ночи."),
      line("receptionist", "Evet, iki kişilik oda. Buyurun, anahtarınız.", "Да, двухместный номер. Пожалуйста, ваш ключ."),
      line("murzik", "Kahvaltı dahil mi?", "Завтрак включён?"),
      line("receptionist", "Evet, dahil. Sabah yediden ona kadar.", "Да, включён. Утром с семи до десяти."),
      line("tom", "Oda kaçıncı katta?", "На каком этаже номер?"),
      line("receptionist", "Üçüncü katta. Asansör orada.", "На третьем. Лифт вон там."),
    ],
    gist: choice("trtt1-d1", "На сколько ночей бронь у Тома?", [
      ["На две.", true],
      ["На три.", false],
      ["На одну.", false],
    ]),
  },
  grammar: [
    {
      title: "После числа — без -ler",
      paragraphs: [
        "Множественное число -ler / -lar после числа не ставят: iki gece (две ночи), üç gün (три дня), dört kişi (четыре человека).",
        "И после слов «сколько» и «много» тоже: kaç gece? (сколько ночей?), çok oda (много комнат).",
      ],
      examples: [
        { ru: "Üç gece kalıyoruz.", en: "Мы остаёмся на три ночи." },
        { ru: "Otelde kırk oda var.", en: "В гостинице сорок номеров." },
      ],
    },
  ],
  tasks: [
    choice("trtt1-t1", "Как сказать «три ночи»?", [
      ["üç gece", true],
      ["üç geceler", false],
      ["üçler gece", false],
    ], { skill: "grammar" }),
    listen("trtt1-t2", "Послушай. На каком этаже номер?", "Odanız beşinci katta.", [
      ["На пятом.", true],
      ["На первом.", false],
      ["На третьем.", false],
    ]),
    match("trtt1-t3", "Соедини пары.", [
      ["anahtar", "ключ"],
      ["asansör", "лифт"],
      ["gece", "ночь"],
      ["oda", "комната, номер"],
    ], { skill: "words" }),
    missing("trtt1-t4", "Какой буквы не хватает? («лифт»)", "asans", "r", "ö", ["ö", "o", "ü"]),
    speak("trtt1-t5", "İyi akşamlar! Buyurun?", "Rezervasyonum var. İki gece.", "У меня бронь. Две ночи.", { help: "Скажи вслух, что у тебя бронь на две ночи." }),
    choice("trtt1-t6", "Как спросить «Какое сегодня число?»", [
      ["Bugün ayın kaçı?", true],
      ["Bugün kaçıncı kat?", false],
      ["Bugün kaç gece?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "yagmurluk",
    itemName: "Жёлтый дождевик",
    itemNameRu: "Yağmurluk",
    ru: "Yaşasın! Bir yağmurluk!",
    en: "Ура! Дождевик!",
    a11y: "Маленький ярко-жёлтый дождевик с капюшоном висит на крючке у двери номера.",
    image: p("yagmurluk"),
    steps: ["За окном снова дождь.", "Администратор протягивает маленький жёлтый дождевик.", "«Trabzon'da hep lazım!» — «В Трабзоне он всегда нужен!»", "Мурзик вешает его на крючок у двери."],
    bridge: "Мурзик включает свет в номере… а свет не горит!",
  },
};

const trabzon2: Lesson = {
  id: "tr-a1-trabzon-2",
  level: "A1",
  cityId: "tr-trabzon",
  number: 2,
  title: "Не работает!",
  minutes: 7,
  goals: ["Сказать, что что-то не работает", "Строить отрицание: çalışmıyor", "Попросить помощи по телефону"],
  vocabNote: "Çalışmak — «работать» (и про людей, и про технику). Bozuk — «сломанный».",
  vocab: [
    v("trtt2-1", "Işık yanmıyor.", "Свет не горит.", "Мурзик в тёмном номере щёлкает выключателем.", "Послушать Işık yanmıyor", p("l2-1")),
    v("trtt2-2", "Klima çalışmıyor.", "Кондиционер не работает.", "Том стучит по пульту кондиционера.", "Послушать Klima çalışmıyor", p("l2-2")),
    v("trtt2-3", "Sıcak su yok.", "Нет горячей воды.", "Мурзик вздрагивает под холодным душем.", "Послушать Sıcak su yok", p("l2-3")),
    v("trtt2-4", "Televizyon bozuk.", "Телевизор сломан.", "На экране телевизора только серая рябь.", "Послушать Televizyon bozuk", p("l2-4")),
    v("trtt2-5", "Yardım edebilir misiniz?", "Вы можете помочь?", "Том звонит по телефону в номере.", "Послушать Yardım edebilir misiniz", p("l2-5")),
    v("trtt2-6", "Hemen geliyorum.", "Сейчас приду.", "Администратор с ящиком инструментов спешит по коридору.", "Послушать Hemen geliyorum", p("l2-6")),
    v("trtt2-7", "Oldu!", "Получилось!", "В номере снова горит свет.", "Послушать Oldu", p("l2-7")),
  ],
  dialogue: {
    title: "Звонок на ресепшен",
    note: "Alo — «алло». Elektrik — «электричество».",
    lines: [
      line("tom", "Alo, iyi akşamlar. Oda üç yüz beş.", "Алло, добрый вечер. Номер триста пять."),
      line("receptionist", "Buyurun, efendim.", "Слушаю вас."),
      line("tom", "Işık yanmıyor. Klima da çalışmıyor.", "Свет не горит. И кондиционер не работает."),
      line("receptionist", "Çok özür dilerim. Elektrik yok, fırtına var.", "Прошу прощения. Электричества нет, буря."),
      line("murzik", "Sıcak su da yok!", "И горячей воды нет!"),
      line("receptionist", "Hemen geliyorum. Size bir el feneri getiriyorum.", "Сейчас приду. Несу вам фонарик."),
    ],
    gist: choice("trtt2-d1", "Почему не горит свет?", [
      ["Буря, нет электричества.", true],
      ["Сломалась лампочка.", false],
      ["Том не заплатил.", false],
    ]),
  },
  grammar: [
    {
      title: "Не делает: -mıyor, -miyor, -muyor, -müyor",
      paragraphs: [
        "Отрицание ставят перед -yor: çalış-mıyor (не работает), gel-miyor (не идёт), bul-muyor (не находит), gör-müyor (не видит).",
        "Гласная в отрицании подстраивается под слово: ı, i, u или ü. О себе: çalışmıyorum — я не работаю, anlamıyorum — я не понимаю.",
      ],
      examples: [
        { ru: "Asansör çalışmıyor.", en: "Лифт не работает." },
        { ru: "Murzik uyumuyor, kitap okuyor.", en: "Мурзик не спит, читает книгу." },
      ],
    },
  ],
  tasks: [
    choice("trtt2-t1", "Как сказать «Лифт не работает»?", [
      ["Asansör çalışmıyor.", true],
      ["Asansör çalışıyor.", false],
      ["Asansör çalışmak yok.", false],
    ], { skill: "grammar" }),
    listen("trtt2-t2", "Послушай. Что не работает?", "Televizyon çalışmıyor.", [
      ["Телевизор.", true],
      ["Телефон.", false],
      ["Лифт.", false],
    ]),
    match("trtt2-t3", "Соедини пары.", [
      ["bozuk", "сломанный"],
      ["ışık", "свет"],
      ["sıcak su", "горячая вода"],
      ["Oldu!", "Получилось!"],
    ], { skill: "words" }),
    missing("trtt2-t4", "Какой буквы не хватает? («свет»)", "", "şık", "I", ["I", "İ", "U"]),
    speak("trtt2-t5", "Resepsiyon, buyurun?", "Klima çalışmıyor. Yardım edebilir misiniz?", "Кондиционер не работает. Вы можете помочь?", { help: "Пожалуйся вслух на поломку и попроси помочь." }),
    listen("trtt2-t6", "Вспомни прошлый урок. Что спрашивают?", "Kahvaltı dahil mi?", [
      ["Завтрак включён?", true],
      ["Где лифт?", false],
      ["Сколько стоит номер?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "el-feneri",
    itemName: "Фонарик",
    itemNameRu: "El feneri",
    ru: "Yaşasın! Bir el feneri!",
    en: "Ура! Фонарик!",
    a11y: "Маленький металлический фонарик светит тёплым лучом на стену номера.",
    image: p("el-feneri"),
    steps: ["Администратор приносит фонарик.", "Мурзик рисует лучом на стене котов и звёзды.", "Через час свет снова горит.", "«Fener senin olsun!» — «Пусть фонарик будет твоим!»"],
    bridge: "Утром Мурзику нужно ещё одно полотенце. Как же попросить?",
  },
};

const trabzon3: Lesson = {
  id: "tr-a1-trabzon-3",
  level: "A1",
  cityId: "tr-trabzon",
  number: 3,
  title: "Можно мне…?",
  minutes: 7,
  goals: ["Вежливо попросить: alabilir miyim?", "Сказать «я хочу увидеть»: görmek istiyorum", "Спросить пароль от Wi-Fi"],
  vocabNote: "Alabilir miyim? — «Можно мне взять?» Это готовая вежливая формула: Bir çay alabilir miyim? — «Можно мне чаю?»",
  vocab: [
    v("trtt3-1", "Bir havlu daha alabilir miyim?", "Можно мне ещё одно полотенце?", "Мурзик выглядывает из-за двери, завёрнутый в крошечное полотенце.", "Послушать Bir havlu daha alabilir miyim", p("l3-1")),
    v("trtt3-2", "yastık", "подушка", "Мягкая белая подушка.", "Послушать yastık", p("l3-2")),
    v("trtt3-3", "Wi-Fi şifresi ne?", "Какой пароль от Wi-Fi?", "Том с ноутбуком у стойки.", "Послушать Wi-Fi şifresi ne", p("l3-3")),
    v("trtt3-4", "Ben denizi görmek istiyorum.", "Я хочу увидеть море.", "Мурзик прижался носом к окну, за окном туман.", "Послушать Ben denizi görmek istiyorum", p("l3-4")),
    v("trtt3-5", "Çay içmek istiyorum.", "Я хочу выпить чаю.", "Тюльпановидный стаканчик чая на блюдце.", "Послушать Çay içmek istiyorum", p("l3-5")),
    v("trtt3-6", "Tabii, buyurun.", "Конечно, пожалуйста.", "Администратор протягивает стопку полотенец.", "Послушать Tabii, buyurun", p("l3-6")),
    v("trtt3-7", "Uzungöl", "озеро Узунгёль", "Озеро в зелёных горах, у воды деревянная мечеть, над водой туман.", "Послушать Uzungöl", p("l3-7")),
  ],
  dialogue: {
    title: "Утренние просьбы",
    note: "Daha — «ещё». Dolapta — «в шкафу». Gezi — «экскурсия, поездка».",
    lines: [
      line("murzik", "Günaydın! Bir havlu daha alabilir miyim?", "Доброе утро! Можно мне ещё одно полотенце?"),
      line("receptionist", "Tabii, buyurun. Yastık da dolapta var.", "Конечно, пожалуйста. Подушка тоже есть в шкафу."),
      line("tom", "Wi-Fi şifresi ne?", "Какой пароль от Wi-Fi?"),
      line("receptionist", "Karadeniz, büyük harfle.", "«Karadeniz», с большой буквы."),
      line("murzik", "Bugün Uzungöl'ü görmek istiyorum!", "Сегодня я хочу увидеть Узунгёль!"),
      line("receptionist", "Çok güzel bir yer. Saat onda gezi var.", "Очень красивое место. В десять часов экскурсия."),
    ],
    gist: choice("trtt3-d1", "Что хочет увидеть Мурзик?", [
      ["Озеро Узунгёль.", true],
      ["Море.", false],
      ["Почту.", false],
    ]),
  },
  grammar: [
    {
      title: "Хочу сделать: -mek istiyorum",
      paragraphs: [
        "«Хочу что-то сделать» — глагол с -mek / -mak и istiyorum: görmek istiyorum (хочу увидеть), içmek istiyorum (хочу выпить), kalmak istiyorum (хочу остаться).",
        "Не хочу — istemiyorum: Uyumak istemiyorum! — Я не хочу спать!",
      ],
      examples: [
        { ru: "Akşam denize gitmek istiyorum.", en: "Вечером я хочу пойти к морю." },
        { ru: "Tom fotoğraf çekmek istiyor.", en: "Том хочет фотографировать." },
      ],
    },
  ],
  tasks: [
    choice("trtt3-t1", "Как сказать «Я хочу остаться»?", [
      ["Kalmak istiyorum.", true],
      ["Kalıyorum istiyorum.", false],
      ["Kal istiyorum.", false],
    ], { skill: "grammar" }),
    listen("trtt3-t2", "Послушай. Что просят?", "Bir yastık daha alabilir miyim?", [
      ["Ещё одну подушку.", true],
      ["Ещё одно полотенце.", false],
      ["Ещё чаю.", false],
    ]),
    match("trtt3-t3", "Соедини пары.", [
      ["havlu", "полотенце"],
      ["yastık", "подушка"],
      ["şifre", "пароль"],
      ["daha", "ещё"],
    ], { skill: "words" }),
    spell("trtt3-t4", "Собери из букв слово «полотенце».", "havlu"),
    speak("trtt3-t5", "Ne yapmak istiyorsun?", "Ben denizi görmek istiyorum.", "Я хочу увидеть море.", { help: "Скажи вслух, что ты хочешь сделать." }),
    choice("trtt3-t6", "Как сказать «Свет не горит»?", [
      ["Işık yanmıyor.", true],
      ["Işık yanıyor.", false],
      ["Işık yok yanıyor.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "findik",
    itemName: "Банка фундука",
    itemNameRu: "Fındık",
    ru: "Yaşasın! Bir kavanoz fındık!",
    en: "Ура! Банка фундука!",
    a11y: "Стеклянная банка с жареным фундуком, на крышке завязана зелёная ленточка.",
    image: p("findik"),
    steps: ["На Узунгёле старушка продаёт фундук.", "«Karadeniz'in fındığı en iyisi!» — «Черноморский фундук — самый лучший!»", "Она дарит Мурзику целую банку.", "Банка встаёт на полку в номере."],
    bridge: "После обеда Мурзик возвращается в номер… а чемодана нет!",
  },
};

const trabzon4: Lesson = {
  id: "tr-a1-trabzon-4",
  level: "A1",
  cityId: "tr-trabzon",
  number: 4,
  title: "Пропал чемодан",
  minutes: 7,
  goals: ["Сказать, что что-то пропало", "Говорить о прошлом: -dı, -di, -tı, -ti", "Описать вещь: цвет, что внутри"],
  vocabNote: "Kayboldu — «потерялся, пропал». Bıraktım — «я оставил». Endişelenme — «не волнуйся».",
  vocab: [
    v("trtt4-1", "Bavulum kayboldu!", "Мой чемодан пропал!", "Мурзик стоит посреди пустого номера, лапы у щёк.", "Послушать Bavulum kayboldu", p("l4-1")),
    v("trtt4-2", "Burada bıraktım.", "Я оставил его здесь.", "Мурзик показывает на пустое место у кровати.", "Послушать Burada bıraktım", p("l4-2")),
    v("trtt4-3", "Rengi ne?", "Какого он цвета?", "Администратор держит блокнот и ручку.", "Послушать Rengi ne", p("l4-3")),
    v("trtt4-4", "Kırmızı, küçük.", "Красный, маленький.", "Рисунок маленького красного чемоданчика.", "Послушать Kırmızı, küçük", p("l4-4")),
    v("trtt4-5", "İçinde ne var?", "Что внутри?", "Схема: чемодан, а в нём открытки и игрушки.", "Послушать İçinde ne var", p("l4-5")),
    v("trtt4-6", "Bulamıyorum.", "Не могу найти.", "Мурзик заглядывает под кровать.", "Послушать Bulamıyorum", p("l4-6")),
    v("trtt4-7", "Endişelenme!", "Не волнуйся!", "Том кладёт руку Мурзику на плечо.", "Послушать Endişelenme", p("l4-7")),
  ],
  dialogue: {
    title: "Пустой номер",
    note: "Sabah — «утром». Kartpostallarım — «мои открытки». Arıyoruz — «мы ищем».",
    lines: [
      line("murzik", "Tom! Bavulum kayboldu!", "Том! Мой чемодан пропал!"),
      line("tom", "Nerede bıraktın?", "Где ты его оставил?"),
      line("murzik", "Sabah burada bıraktım. Şimdi yok!", "Утром оставил здесь. А теперь его нет!"),
      line("receptionist", "Rengi ne?", "Какого он цвета?"),
      line("murzik", "Kırmızı, küçük. İçinde bütün kartpostallarım var!", "Красный, маленький. Внутри все мои открытки!"),
      line("receptionist", "Endişelenme, hemen arıyoruz.", "Не волнуйся, сейчас поищем."),
    ],
    gist: choice("trtt4-d1", "Что лежит в чемодане?", [
      ["Все открытки Мурзика.", true],
      ["Фотоаппарат Тома.", false],
      ["Ключ от номера.", false],
    ]),
  },
  grammar: [
    {
      title: "Прошлое: -dı, -di, -du, -dü",
      paragraphs: [
        "Прошедшее время — окончание -dı / -di / -du / -dü: geldi (пришёл), kaldı (остался), buldu (нашёл), gördü (увидел).",
        "После глухих звуков (ç, f, h, k, p, s, ş, t) — -tı / -ti / -tu / -tü: bıraktı (оставил), gitti (ушёл), içti (выпил). О себе — -m: geldim, bıraktım. О тебе — -n: geldin, bıraktın.",
      ],
      examples: [
        { ru: "Dün Trabzon'a geldik.", en: "Вчера мы приехали в Трабзон." },
        { ru: "Murzik çay içti.", en: "Мурзик выпил чаю." },
      ],
    },
  ],
  tasks: [
    choice("trtt4-t1", "Как сказать «Я оставил»?", [
      ["bıraktım", true],
      ["bırakdım", false],
      ["bırakıyorum", false],
    ], { skill: "grammar" }),
    listen("trtt4-t2", "Послушай. Какой чемодан?", "Bavulum büyük ve mavi.", [
      ["Большой и синий.", true],
      ["Маленький и красный.", false],
      ["Большой и красный.", false],
    ]),
    match("trtt4-t3", "Соедини пары.", [
      ["bavul", "чемодан"],
      ["kayboldu", "пропал"],
      ["içinde", "внутри"],
      ["Endişelenme!", "Не волнуйся!"],
    ], { skill: "words" }),
    missing("trtt4-t4", "Какой буквы не хватает? («я не могу найти»)", "Bula", "ıyorum", "m", ["m", "n", "y"]),
    speak("trtt4-t5", "Ne oldu?", "Bavulum kayboldu! Kırmızı, küçük.", "Мой чемодан пропал! Красный, маленький.", { help: "Скажи вслух, что пропало, и опиши вещь." }),
    choice("trtt4-t6", "Как вежливо попросить ещё подушку?", [
      ["Bir yastık daha alabilir miyim?", true],
      ["Bir yastık daha istemiyorum.", false],
      ["Yastık çalışmıyor.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bavul-etiketi",
    itemName: "Бирка для чемодана",
    itemNameRu: "Bavul etiketi",
    ru: "Yaşasın! Bir bavul etiketi!",
    en: "Ура! Бирка для чемодана!",
    a11y: "Кожаная бирка для чемодана в форме кошачьей головы, внутри карточка с надписью «Murzik».",
    image: p("bavul-etiketi"),
    steps: ["Администратор приносит кожаную бирку.", "«Bavul bulununca, bunu tak!» — «Когда чемодан найдётся, повесь её!»", "Мурзик пишет на карточке своё имя.", "Бирка ждёт на тумбочке."],
    bridge: "Пока ищут чемодан, Мурзик идёт на почту — спросить про открытку.",
  },
};

const trabzon5: Lesson = {
  id: "tr-a1-trabzon-5",
  level: "A1",
  cityId: "tr-trabzon",
  number: 5,
  title: "На почте",
  minutes: 7,
  goals: ["Купить марку и конверт", "Спросить, кто отправил открытку", "Сказать «не помню»"],
  vocabNote: "PTT — так в Турции называют почту. Göndermek — «отправлять», hatırlamak — «помнить».",
  vocab: [
    v("trtt5-1", "postane", "почта", "Здание почты с жёлтой вывеской PTT.", "Послушать postane", p("l5-1")),
    v("trtt5-2", "pul", "марка", "Марка с видом зелёных гор у моря.", "Послушать pul", p("l5-2")),
    v("trtt5-3", "zarf", "конверт", "Белый конверт.", "Послушать zarf", p("l5-3")),
    v("trtt5-4", "Mektup göndermek istiyorum.", "Я хочу отправить письмо.", "Мурзик протягивает письмо в окошко.", "Послушать Mektup göndermek istiyorum", p("l5-4")),
    v("trtt5-5", "Bu kartpostalı kim gönderdi?", "Кто отправил эту открытку?", "Мурзик кладёт открытку на стойку.", "Послушать Bu kartpostalı kim gönderdi", p("l5-5")),
    v("trtt5-6", "Hatırlamıyorum.", "Не помню.", "Служащий почты разводит руками.", "Послушать Hatırlamıyorum", p("l5-6")),
    v("trtt5-7", "Her gün çok mektup geliyor.", "Каждый день приходит много писем.", "За стойкой горы писем и посылок.", "Послушать Her gün çok mektup geliyor", p("l5-7")),
  ],
  dialogue: {
    title: "Окошко номер два",
    note: "Belki — «может быть». Yaşlı bir kedi — «пожилая кошка».",
    lines: [
      line("murzik", "Merhaba! Bir pul ve bir zarf, lütfen.", "Здравствуйте! Одну марку и один конверт, пожалуйста."),
      line("postman", "Buyurun. On beş lira.", "Пожалуйста. Пятнадцать лир."),
      line("murzik", "Bir sorum var. Bu kartpostalı kim gönderdi?", "У меня вопрос. Кто отправил эту открытку?"),
      line("postman", "Hmm… Hatırlamıyorum. Her gün çok mektup geliyor.", "Хм… Не помню. Каждый день приходит много писем."),
      line("murzik", "Yaşlı bir kedi… belki?", "Пожилая кошка… может быть?"),
      line("postman", "Bilmiyorum, özür dilerim.", "Не знаю, простите."),
    ],
    gist: choice("trtt5-d1", "Помнит ли служащий, кто отправил открытку?", [
      ["Нет, не помнит.", true],
      ["Да, это была пожилая кошка.", false],
      ["Да, это был Том.", false],
    ]),
  },
  grammar: [
    {
      title: "Не делает: повторяем",
      paragraphs: [
        "Отрицание: hatırla-mıyor-um (я не помню), bil-miyor-um (я не знаю), gör-müyor-um (я не вижу).",
        "Не путай: yok — «нет, отсутствует» (Adres yok. — Адреса нет), а -mıyor — «не делает» (Gelmiyor. — Не приходит).",
      ],
      examples: [
        { ru: "Postane bugün çalışmıyor.", en: "Почта сегодня не работает." },
        { ru: "Zarf yok.", en: "Конвертов нет." },
      ],
    },
  ],
  tasks: [
    choice("trtt5-t1", "Как сказать «Я не помню»?", [
      ["Hatırlamıyorum.", true],
      ["Hatırlıyorum.", false],
      ["Hatırlamak yok.", false],
    ], { skill: "grammar" }),
    listen("trtt5-t2", "Послушай. Сколько стоит?", "Yirmi lira.", [
      ["Двадцать лир.", true],
      ["Двенадцать лир.", false],
      ["Двести лир.", false],
    ]),
    match("trtt5-t3", "Соедини пары.", [
      ["postane", "почта"],
      ["pul", "марка"],
      ["zarf", "конверт"],
      ["mektup", "письмо"],
    ], { skill: "words" }),
    spell("trtt5-t4", "Собери из букв слово «конверт».", "zarf"),
    speak("trtt5-t5", "Buyurun, ne istiyorsunuz?", "Mektup göndermek istiyorum. Bir pul, lütfen.", "Я хочу отправить письмо. Одну марку, пожалуйста.", { help: "Скажи вслух, что хочешь отправить письмо." }),
    listen("trtt5-t6", "Вспомни прошлый урок. Что случилось?", "Bavulum kayboldu.", [
      ["Пропал чемодан.", true],
      ["Сломался телевизор.", false],
      ["Нет горячей воды.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "pul-albumu",
    itemName: "Альбом для марок",
    itemNameRu: "Pul albümü",
    ru: "Yaşasın! Bir pul albümü!",
    en: "Ура! Альбом для марок!",
    a11y: "Зелёный альбом для марок, в нём уже три марки: Стамбул, Каппадокия и Трабзон.",
    image: p("pul-albumu"),
    steps: ["Служащий почты достаёт из ящика альбом для марок.", "«Üzgünüm, hatırlamıyorum. Ama bu senin olsun.» — «Простите, не помню. Но пусть он будет твоим.»", "Мурзик вклеивает первые марки.", "А когда-нибудь — марку от бабушки Аси."],
    bridge: "У почты Мурзика ждёт Том: «Çabuk! Otelden telefon geldi!» — «Скорее! Из гостиницы звонили!»",
  },
};

const trabzon6: Lesson = {
  id: "tr-a1-trabzon-6",
  level: "A1",
  cityId: "tr-trabzon",
  number: 6,
  title: "Нашёлся!",
  minutes: 7,
  goals: ["Сказать, где нашлась вещь", "Сказать «не сделал»: -medi, -madı", "Порадоваться и поблагодарить"],
  vocabNote: "Bulundu — «нашёлся». Çamaşırhane — «прачечная». Eksik — «недостающий»: Hiçbir şey eksik değil — «Ничего не пропало».",
  vocab: [
    v("trtt6-1", "Bavulun bulundu!", "Твой чемодан нашёлся!", "Администратор бежит по коридору и машет рукой.", "Послушать Bavulun bulundu", p("l6-1")),
    v("trtt6-2", "çamaşırhanede", "в прачечной", "Прачечная: стиральные машины, стопки белья.", "Послушать çamaşırhanede", p("l6-2")),
    v("trtt6-3", "Üstünde bir kedi uyuyor.", "На нём спит кошка.", "На красном чемодане свернулась толстая серая кошка.", "Послушать Üstünde bir kedi uyuyor", p("l6-3")),
    v("trtt6-4", "Ne kadar tatlı!", "Какая милая!", "Мурзик умилённо смотрит на спящую кошку.", "Послушать Ne kadar tatlı", p("l6-4")),
    v("trtt6-5", "Hiçbir şey eksik değil.", "Ничего не пропало.", "Мурзик пересчитывает открытки в чемодане.", "Послушать Hiçbir şey eksik değil", p("l6-5")),
    v("trtt6-6", "Kimse almadı.", "Никто не брал.", "Администратор смеётся и пожимает плечами.", "Послушать Kimse almadı", p("l6-6")),
    v("trtt6-7", "Çok şükür!", "Слава богу!", "Мурзик обнимает свой чемодан.", "Послушать Çok şükür", p("l6-7")),
  ],
  dialogue: {
    title: "Прачечная",
    note: "Pamuk — «хлопок», так зовут гостиничную кошку. Taşıdı — «перенесла, перетащила». Herhalde — «наверное».",
    lines: [
      line("receptionist", "Murzik! Bavulun bulundu! Çamaşırhanede!", "Мурзик! Твой чемодан нашёлся! В прачечной!"),
      line("murzik", "Çamaşırhanede mi? Kim götürdü?", "В прачечной? Кто его отнёс?"),
      line("receptionist", "Kimse almadı. Temizlikçi taşıdı, herhalde.", "Никто не брал. Наверное, уборщица перенесла."),
      line("tom", "Bak! Üstünde bir kedi uyuyor!", "Смотри! На нём спит кошка!"),
      line("receptionist", "Bu Pamuk, otelin kedisi. Sıcak bavulları çok seviyor.", "Это Памук, гостиничная кошка. Очень любит тёплые чемоданы."),
      line("murzik", "Ne kadar tatlı! Hiçbir şey eksik değil. Çok şükür!", "Какая милая! Ничего не пропало. Слава богу!"),
    ],
    gist: choice("trtt6-d1", "Где нашёлся чемодан?", [
      ["В прачечной.", true],
      ["На почте.", false],
      ["В лифте.", false],
    ]),
  },
  grammar: [
    {
      title: "Не сделал: -madı, -medi",
      paragraphs: [
        "Прошлое с отрицанием — -ma / -me перед окончанием прошлого: al-madı (не взял), gel-medi (не пришёл), gör-medi (не увидел).",
        "О себе: almadım — я не брал, görmedim — я не видел. Kimse — «никто», с отрицательным глаголом: Kimse gelmedi. — Никто не пришёл.",
      ],
      examples: [
        { ru: "Ben bavulu görmedim.", en: "Я не видел чемодан." },
        { ru: "Kedi uyanmadı.", en: "Кошка не проснулась." },
      ],
    },
  ],
  tasks: [
    choice("trtt6-t1", "Как сказать «Никто не пришёл»?", [
      ["Kimse gelmedi.", true],
      ["Kimse geldi.", false],
      ["Kim gelmedi?", false],
    ], { skill: "grammar" }),
    listen("trtt6-t2", "Послушай. Кто спит на чемодане?", "Bavulun üstünde bir kedi uyuyor.", [
      ["Кошка.", true],
      ["Мурзик.", false],
      ["Том.", false],
    ]),
    match("trtt6-t3", "Соедини пары.", [
      ["bulundu", "нашёлся"],
      ["üstünde", "на нём, сверху"],
      ["kimse", "никто"],
      ["eksik", "недостающий"],
    ], { skill: "words" }),
    missing("trtt6-t4", "Какой буквы не хватает? («прачечная»)", "çama", "ırhane", "ş", ["ş", "s", "ç"]),
    speak("trtt6-t5", "Bavulu sen mi aldın?", "Hayır, ben almadım!", "Нет, я не брал!", { help: "Ответь вслух, что ты не брал(а)." }),
    choice("trtt6-t6", "Как сказать «Я хочу отправить письмо»?", [
      ["Mektup göndermek istiyorum.", true],
      ["Mektup gönderdi istiyorum.", false],
      ["Mektup göndermiyorum.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kemence",
    itemName: "Игрушечная кеманча",
    itemNameRu: "Kemençe",
    ru: "Yaşasın! Küçük bir kemençe!",
    en: "Ура! Маленькая кеманча!",
    a11y: "Маленькая деревянная кеманча — узкая скрипочка с тремя струнами и смычком.",
    image: p("kemence"),
    steps: ["Повар гостиницы празднует находку и играет на кеманче.", "Все в холле танцуют хорон, держась за руки.", "Повар дарит Мурзику маленькую кеманчу.", "Мурзик пробует сыграть: «Ииии!» Все смеются."],
    bridge: "Завтра выезд. Пора собирать чемодан — теперь с биркой!",
  },
};

const trabzon7: Lesson = {
  id: "tr-a1-trabzon-7",
  level: "A1",
  cityId: "tr-trabzon",
  number: 7,
  title: "Выезд",
  minutes: 8,
  goals: ["Выехать из гостиницы и оплатить", "Попросить вызвать такси", "Вспомнить все слова Трабзона"],
  vocabNote: "Çıkış — «выезд, выход». Hesap — «счёт». Yine bekleriz — «ждём вас снова» (так прощаются в гостиницах и кафе).",
  vocab: [
    v("trtt7-1", "Çıkış yapmak istiyorum.", "Я хочу выехать.", "Том с чемоданами у стойки.", "Послушать Çıkış yapmak istiyorum", p("l7-1")),
    v("trtt7-2", "Hesabı alabilir miyim?", "Можно счёт?", "Администратор протягивает Тому счёт.", "Послушать Hesabı alabilir miyim", p("l7-2")),
    v("trtt7-3", "Taksi çağırabilir misiniz?", "Вы можете вызвать такси?", "У входа в гостиницу останавливается жёлтое такси.", "Послушать Taksi çağırabilir misiniz", p("l7-3")),
    v("trtt7-4", "Havalimanına gidiyoruz.", "Мы едем в аэропорт.", "Табличка со значком самолёта.", "Послушать Havalimanına gidiyoruz", p("l7-4")),
    v("trtt7-5", "Her şey çok güzeldi.", "Всё было замечательно.", "Мурзик показывает лапкой «класс».", "Послушать Her şey çok güzeldi", p("l7-5")),
    v("trtt7-6", "Yine bekleriz!", "Ждём вас снова!", "Администратор машет у дверей.", "Послушать Yine bekleriz", p("l7-6")),
    v("trtt7-7", "Yolunuz açık olsun!", "Доброго пути!", "Такси уезжает по мокрой дороге вдоль моря.", "Послушать Yolunuz açık olsun", p("l7-7")),
  ],
  dialogue: {
    title: "До свидания, гостиница",
    note: "Güzeldi — «было красиво, было хорошо». Hediyemiz — «наш подарок».",
    lines: [
      line("tom", "Günaydın. Çıkış yapmak istiyorum. Hesabı alabilir miyim?", "Доброе утро. Я хочу выехать. Можно счёт?"),
      line("receptionist", "Tabii. Her şey yolunda mıydı?", "Конечно. Всё было в порядке?"),
      line("murzik", "Evet! Her şey çok güzeldi. Pamuk da!", "Да! Всё было замечательно. И Памук тоже!"),
      line("tom", "Taksi çağırabilir misiniz? Havalimanına gidiyoruz.", "Вы можете вызвать такси? Мы едем в аэропорт."),
      line("receptionist", "Hemen. Bu da hediyemiz, Murzik.", "Сейчас. А это наш подарок, Мурзик."),
      line("receptionist", "Yolunuz açık olsun! Yine bekleriz!", "Доброго пути! Ждём вас снова!"),
    ],
    gist: choice("trtt7-d1", "Куда едут Том и Мурзик?", [
      ["В аэропорт.", true],
      ["На почту.", false],
      ["На озеро.", false],
    ]),
  },
  grammar: [
    {
      title: "Было: -dı с прилагательным",
      paragraphs: [
        "«Было» — то же окончание прошлого, прямо к слову: güzel → güzeldi (было красиво), sıcak → sıcaktı (было жарко), yorgun → yorgundum (я был уставший).",
        "Вопрос: … mıydı? / miydi? — Her şey yolunda mıydı? — Всё было в порядке? Oda temiz miydi? — Номер был чистый?",
      ],
      examples: [
        { ru: "Hava çok soğuktu.", en: "Погода была очень холодная." },
        { ru: "Kahvaltı çok güzeldi.", en: "Завтрак был замечательный." },
      ],
    },
  ],
  tasks: [
    listen("trtt7-t1", "Аудиоэкзамен. Что говорит администратор?", "Odanız üçüncü katta. Kahvaltı sabah yediden ona kadar. Asansör orada.", [
      ["Номер на третьем этаже, завтрак с семи до десяти.", true],
      ["Номер на десятом этаже, завтрака нет.", false],
      ["Лифт не работает, номер на третьем этаже.", false],
    ]),
    choice("trtt7-t2", "Как сказать «Было холодно»?", [
      ["Soğuktu.", true],
      ["Soğukdu.", false],
      ["Soğuk değil.", false],
    ], { skill: "grammar" }),
    match("trtt7-t3", "Соедини пары.", [
      ["çıkış", "выезд"],
      ["hesap", "счёт"],
      ["havalimanı", "аэропорт"],
      ["Yine bekleriz!", "Ждём снова!"],
    ], { skill: "words" }),
    spell("trtt7-t4", "Собери из букв слово «такси».", "taksi"),
    speak("trtt7-t5", "Her şey yolunda mıydı?", "Evet, her şey çok güzeldi. Teşekkürler!", "Да, всё было замечательно. Спасибо!", { help: "Ответь вслух администратору." }),
    script("trtt7-t6", "Вспомни весь Трабзон. Закончи разговоры.", [
      { speaker: "Администратор", text: "Hoş geldiniz! Buyurun?" },
      { speaker: "Ты", answer: "Rezervasyonum var. İki gece.", options: ["Rezervasyonum var. İki gece.", "Rezervasyonum var. İki geceler.", "Bavulum kayboldu."] },
      { speaker: "Администратор", text: "Odanız nasıl?" },
      { speaker: "Ты", answer: "Evet, klima çalışmıyor.", options: ["Evet, klima çalışmıyor.", "Evet, klima çalışıyor.", "Hayır, klima yok değil."] },
      { speaker: "Администратор", text: "Yolunuz açık olsun!" },
      { speaker: "Ты", answer: "Teşekkürler! Her şey çok güzeldi.", options: ["Teşekkürler! Her şey çok güzeldi.", "Hatırlamıyorum.", "Hoş geldiniz!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "caydanlik",
    itemName: "Двойной чайник",
    itemNameRu: "Çaydanlık",
    ru: "Yaşasın! Bir çaydanlık!",
    en: "Ура! Чайник!",
    a11y: "Маленький двойной турецкий чайник: внизу кипяток, сверху заварка. На боку нарисованы чайные листья.",
    image: p("caydanlik"),
    steps: ["Администратор протягивает коробку.", "Внутри — двойной чайник: внизу вода, наверху заварка.", "«Karadeniz çayı için!» — «Для черноморского чая!»", "Мурзик бережно кладёт его в чемодан — тот самый, с новой биркой."],
    bridge: "Следующая остановка — Ван, город у огромного озера.",
  },
};

const story: CityStory = {
  home: {
    name: "Номер в гостинице",
    nameRu: "Otel odası",
    image: p("home"),
    a11y: "Пустой гостиничный номер с большим окном. За окном туман, мокрые зелёные горы и серое Чёрное море. Посередине чемодан Мурзика.",
  },
  keepsakeId: "caydanlik",
  welcomeRu: "Merhaba, Trabzon!",
  welcomeEn: "Привет, Трабзон!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том в Трабзоне: зелёные горы, чайные плантации на склонах, серое Чёрное море. Моросит дождь.",
  departureImage: p("departure"),
  departureA11y: "Администратор гостиницы машет на прощание у дверей, на ступеньках сидит серая кошка Памук.",
  finale: [
    {
      image: p("umbrella"),
      a11y: "Мокрая набережная Трабзона. Мурзик в жёлтом дождевике идёт к такси. Вдали, у фонаря, под чёрным зонтом стоит белый кот в шляпе и смотрит ему вслед. Мурзик его не замечает.",
      lines: [
        { en: "Мурзик спешит к такси и не оглядывается." },
        { en: "А на набережной, под чёрным зонтом, стоит белый кот в шляпе." },
        { en: "Он смотрит вслед такси и тихо улыбается." },
      ],
    },
    {
      image: p("caydanlik"),
      a11y: "Мурзик обходит гостиничный номер, который обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свой номер. Том фотографирует его для журнала." },
        { en: "С собой — двойной чайник для черноморского чая." },
        { en: "На чемодане теперь бирка: «Murzik». Больше он не потеряется." },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "Trabzon tamamlandı!", en: "Трабзон пройден!" },
        { en: "7 / 7 уроков" },
        { en: "A1 — пройден одиннадцатый блок." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Администратор гостиницы машет на прощание.",
      lines: [
        { ru: "Hoşça kal, Trabzon!", en: "До свидания, Трабзон!" },
        { ru: "Sıradaki durak: Van!", en: "Следующая остановка: Ван!" },
      ],
    },
    {
      image: p("flight"),
      a11y: "Самолёт летит на восток над заснеженными горами.",
      lines: [{ ru: "Trabzon → Van", en: "Трабзон → Ван" }],
    },
    {
      image: pic("tr/van/arrival"),
      a11y: "Мурзик и Том на берегу огромного синего озера Ван. Вдали заснеженная гора. Солнечно.",
      lines: [
        { ru: "Merhaba, Van!", en: "Привет, Ван!" },
        { ru: "Ne büyük bir göl!", en: "Какое огромное озеро!" },
      ],
    },
  ],
};

export const trTrabzon = {
  id: "tr-trabzon",
  name: "Трабзон",
  nameTr: "Trabzon",
  lessons: [trabzon1, trabzon2, trabzon3, trabzon4, trabzon5, trabzon6, trabzon7],
  story,
};
