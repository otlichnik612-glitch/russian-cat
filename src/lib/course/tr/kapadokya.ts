import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { build, choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Каппадокия · «Работа и учёба» · где работаешь, учёба, рабочий день, собеседование, новость, первый день, праздник. */

const p = (name: string) => pic(`tr/kapadokya/${name}`);

const kapadokya1: Lesson = {
  id: "tr-a1-kapadokya-1",
  level: "A1",
  cityId: "tr-kapadokya",
  number: 1,
  title: "Где ты работаешь?",
  minutes: 7,
  goals: ["Спросить, где человек работает", "Сказать «я работаю в гостинице, в офисе»", "Сказать «я не работаю»"],
  vocabNote: "Peri bacası — «каменный гриб» Каппадокии, буквально «труба феи». В таких скалах устроены дома и даже гостиницы.",
  vocab: [
    v("trka1-1", "Nerede çalışıyorsun?", "Где ты работаешь?", "Дениз за стойкой пещерной гостиницы с любопытством смотрит на Тома.", "Послушать Nerede çalışıyorsun", p("l1-1")),
    v("trka1-2", "Bir otelde çalışıyorum.", "Я работаю в гостинице.", "Дениз, весёлая студентка, выдаёт ключи за стойкой.", "Послушать Bir otelde çalışıyorum", p("l1-2")),
    v("trka1-3", "Evden çalışıyorum.", "Я работаю из дома.", "Том с ноутбуком сидит на кровати в пещерном номере.", "Послушать Evden çalışıyorum", p("l1-3")),
    v("trka1-4", "iş", "работа", "Портфель и чашка кофе на столе.", "Послушать iş", p("l1-4")),
    v("trka1-5", "ofis", "офис", "Светлый офис со столами и компьютерами.", "Послушать ofis", p("l1-5")),
    v("trka1-6", "Çalışmıyorum.", "Я не работаю.", "Мурзик лениво лежит в гамаке, разводит лапами.", "Послушать Çalışmıyorum", p("l1-6")),
    v("trka1-7", "çömlekçi", "гончар", "Пожилой гончар лепит кувшин на гончарном круге.", "Послушать çömlekçi", p("l1-7")),
  ],
  dialogue: {
    title: "Пещерная гостиница",
    note: "İş görüşmesi — «собеседование». Babam — «мой папа».",
    lines: [
      line("deniz", "Hoş geldiniz! Ben Deniz. Bu otelde çalışıyorum.", "Добро пожаловать! Я Дениз. Я работаю в этой гостинице."),
      line("tom", "Memnun oldum! Ben Tom, fotoğrafçıyım.", "Очень приятно! Я Том, фотограф."),
      line("deniz", "Nerede çalışıyorsun?", "А где ты работаешь?"),
      line("tom", "Şimdi çalışmıyorum. Ama yarın bir iş görüşmem var! Bir dergide.", "Сейчас не работаю. Но завтра у меня собеседование! В журнале."),
      line("murzik", "Deniz, sen öğrenci misin?", "Дениз, а ты учишься?"),
      line("deniz", "Evet! Öğrenciyim ve bu otelde çalışıyorum.", "Да! Учусь и работаю в этой гостинице."),
      line("deniz", "Babam çömlekçi. Avanos'ta çalışıyor.", "А мой папа — гончар. Он работает в Аваносе."),
    ],
    gist: choice("trka1-d1", "Где работает Дениз?", [
      ["В гостинице.", true],
      ["В журнале.", false],
      ["В гончарной мастерской.", false],
    ]),
  },
  grammar: [
    {
      title: "Где работаю: -de çalışıyorum",
      paragraphs: [
        "«Где» — окончание -de / -da: bir otel-de çalışıyorum (в гостинице), bir okul-da (в школе), bir ofis-te (в офисе — после s звучит -te).",
        "«Откуда» — -den / -dan: ev-den çalışıyorum — работаю из дома. «Не работаю» — çalış-mı-yorum.",
      ],
      examples: [
        { ru: "Bir hastanede çalışıyorum.", en: "Я работаю в больнице." },
        { ru: "Babam Avanos'ta çalışıyor.", en: "Мой папа работает в Аваносе." },
      ],
    },
  ],
  tasks: [
    choice("trka1-t1", "Как сказать «Я работаю в школе»? (школа — okul)", [
      ["Okulda çalışıyorum.", true],
      ["Okula çalışıyorum.", false],
      ["Okulde çalışıyorum.", false],
    ], { skill: "grammar" }),
    listen("trka1-t2", "Послушай. Где работает говорящий?", "Bir hastanede çalışıyorum.", [
      ["В больнице.", true],
      ["В гостинице.", false],
      ["Дома.", false],
    ]),
    match("trka1-t3", "Соедини пары.", [
      ["iş", "работа"],
      ["ofis", "офис"],
      ["otel", "гостиница"],
      ["çömlekçi", "гончар"],
    ], { skill: "words" }),
    missing("trka1-t4", "Какой буквы не хватает? («я работаю»)", "Çal", "şıyorum", "ı", ["ı", "i", "u"]),
    speak("trka1-t5", "Nerede çalışıyorsun?", "Bir ofiste çalışıyorum.", "Я работаю в офисе.", { help: "Ответь вслух, где ты работаешь или учишься." }),
    choice("trka1-t6", "Как сказать «Мне лучше»?", [
      ["Daha iyiyim.", true],
      ["Daha iyisin.", false],
      ["İyi daha.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "masa-lambasi",
    itemName: "Настольная лампа",
    itemNameRu: "Masa lambası",
    ru: "Yaşasın! Bir masa lambası!",
    en: "Ура! Настольная лампа!",
    a11y: "Настольная лампа с тканевым абажуром стоит в каменной нише пещерного номера.",
    image: p("masa-lambasi"),
    steps: ["Дениз приносит в номер настольную лампу.", "«Akşam çalışmak için!» — «Чтобы работать вечером!»", "Мурзик ставит её в каменную нишу.", "Пещера становится уютной."],
    bridge: "Дениз рассказывает: днём она учится в университете, а вечером работает.",
  },
};

const kapadokya2: Lesson = {
  id: "tr-a1-kapadokya-2",
  level: "A1",
  cityId: "tr-kapadokya",
  number: 2,
  title: "Я учусь",
  minutes: 7,
  goals: ["Спросить, что человек изучает", "Сказать «я учусь в университете»", "Различать okumak и öğrenmek"],
  vocabNote: "Okumak — и «читать», и «учиться в вузе». Öğrenmek — «учить что-то»: Türkçe öğreniyorum.",
  vocab: [
    v("trka2-1", "Öğrenci misin?", "Ты учишься?", "Мурзик с любопытством смотрит на стопку учебников Дениз.", "Послушать Öğrenci misin", p("l2-1")),
    v("trka2-2", "Üniversitede okuyorum.", "Я учусь в университете.", "Дениз с рюкзаком у здания университета.", "Послушать Üniversitede okuyorum", p("l2-2")),
    v("trka2-3", "Ne okuyorsun?", "Что ты изучаешь?", "Том показывает на учебник Дениз.", "Послушать Ne okuyorsun", p("l2-3")),
    v("trka2-4", "Turizm okuyorum.", "Я изучаю туризм.", "Учебник с картой мира и самолётиком на обложке.", "Послушать Turizm okuyorum", p("l2-4")),
    v("trka2-5", "Türkçe öğreniyorum.", "Я учу турецкий.", "Мурзик пишет турецкие слова в тетрадке.", "Послушать Türkçe öğreniyorum", p("l2-5")),
    v("trka2-6", "ders", "урок, занятие", "Аудитория, преподаватель у доски.", "Послушать ders", p("l2-6")),
    v("trka2-7", "sınav", "экзамен", "Дениз волнуется над экзаменационным листом.", "Послушать sınav", p("l2-7")),
  ],
  dialogue: {
    title: "Учёба и работа",
    note: "Zor — «трудный». Türkçen iyi! — «Твой турецкий хороший!»",
    lines: [
      line("murzik", "Deniz, ne okuyorsun?", "Дениз, что ты изучаешь?"),
      line("deniz", "Turizm okuyorum. Üniversitede.", "Туризм. В университете."),
      line("tom", "Zor mu?", "Трудно?"),
      line("deniz", "Biraz. Yarın sınavım var!", "Немного. Завтра у меня экзамен!"),
      line("murzik", "Ben de Türkçe öğreniyorum! Her gün bir ders.", "А я учу турецкий! Каждый день по уроку."),
      line("deniz", "Çok güzel! Türkçen iyi!", "Здорово! У тебя хороший турецкий!"),
    ],
    gist: choice("trka2-d1", "Что изучает Дениз?", [
      ["Туризм.", true],
      ["Турецкий язык.", false],
      ["Фотографию.", false],
    ]),
  },
  grammar: [
    {
      title: "Okumak или öğrenmek?",
      paragraphs: [
        "Okumak — «читать» и «учиться» в школе или вузе: Üniversitede okuyorum. Turizm okuyorum — я изучаю туризм (это моя специальность).",
        "Öğrenmek — «учить, узнавать что-то новое»: Türkçe öğreniyorum. — Я учу турецкий.",
      ],
      examples: [
        { ru: "Deniz turizm okuyor.", en: "Дениз изучает туризм." },
        { ru: "Murzik Türkçe öğreniyor.", en: "Мурзик учит турецкий." },
      ],
    },
  ],
  tasks: [
    choice("trka2-t1", "Как сказать «Я учу турецкий»?", [
      ["Türkçe öğreniyorum.", true],
      ["Türkçe öğretiyorum.", false],
      ["Türkçe okuyor.", false],
    ], { skill: "grammar" }),
    listen("trka2-t2", "Послушай. Что будет завтра?", "Yarın sınavım var.", [
      ["Экзамен.", true],
      ["Праздник.", false],
      ["Урок рисования.", false],
    ]),
    match("trka2-t3", "Соедини пары.", [
      ["ders", "урок"],
      ["sınav", "экзамен"],
      ["üniversite", "университет"],
      ["öğrenmek", "учить, изучать"],
    ], { skill: "words" }),
    spell("trka2-t4", "Собери из букв слово «урок».", "ders"),
    speak("trka2-t5", "Ne öğreniyorsun?", "Türkçe öğreniyorum. Her gün bir ders!", "Я учу турецкий. Каждый день по уроку!", { help: "Ответь вслух, что ты учишь." }),
    listen("trka2-t6", "Вспомни прошлый урок. Где работает говорящий?", "Evden çalışıyorum.", [
      ["Из дома.", true],
      ["В офисе.", false],
      ["В гостинице.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "defter",
    itemName: "Тетрадь",
    itemNameRu: "Defter",
    ru: "Yaşasın! Yeni bir defter!",
    en: "Ура! Новая тетрадь!",
    a11y: "Тетрадь в обложке с узором из воздушных шаров. На первой странице написаны турецкие слова.",
    image: p("defter"),
    steps: ["Дениз дарит Мурзику тетрадь.", "«Türkçe kelimeler için!» — «Для турецких слов!»", "Мурзик записывает первое слово: balon.", "Скоро тетрадь будет полна!"],
    bridge: "Дениз зовёт их к папе в гончарную мастерскую: «Его день начинается в шесть утра!»",
  },
};

const kapadokya3: Lesson = {
  id: "tr-a1-kapadokya-3",
  level: "A1",
  cityId: "tr-kapadokya",
  number: 3,
  title: "Мой рабочий день",
  minutes: 7,
  goals: ["Рассказать о своём дне", "Сказать, во сколько встаёшь, начинаешь и заканчиваешь", "Сказать «каждое утро»"],
  vocabNote: "Avanos — городок на реке у Каппадокии, где из красной речной глины лепят кувшины уже тысячи лет.",
  vocab: [
    v("trka3-1", "Saat altıda kalkıyorum.", "Я встаю в шесть.", "Гончар потягивается у окна, за окном рассвет и часы на шести.", "Послушать Saat altıda kalkıyorum", p("l3-1")),
    v("trka3-2", "İşe saat yedide başlıyorum.", "Я начинаю работать в семь.", "Гончар садится за гончарный круг, часы на семи.", "Послушать İşe saat yedide başlıyorum", p("l3-2")),
    v("trka3-3", "Öğlen yemek yiyorum.", "В полдень я обедаю.", "Гончар ест лепёшку с сыром у мастерской.", "Послушать Öğlen yemek yiyorum", p("l3-3")),
    v("trka3-4", "Saat beşte bitiriyorum.", "Я заканчиваю в пять.", "Гончар вытирает руки, часы на пяти.", "Послушать Saat beşte bitiriyorum", p("l3-4")),
    v("trka3-5", "Akşam dinleniyorum.", "Вечером я отдыхаю.", "Гончар сидит с чаем на скамейке у реки.", "Послушать Akşam dinleniyorum", p("l3-5")),
    v("trka3-6", "her sabah", "каждое утро", "Семь маленьких солнышек над горизонтом.", "Послушать her sabah", p("l3-6")),
    v("trka3-7", "Çok yoğun bir gün.", "Очень насыщенный день.", "Гончар окружён десятками новых кувшинов.", "Послушать Çok yoğun bir gün", p("l3-7")),
  ],
  dialogue: {
    title: "В мастерской",
    note: "Yine — «снова». İşimi seviyorum — «я люблю свою работу».",
    lines: [
      line("potter", "Hoş geldiniz! Ben her sabah saat altıda kalkıyorum.", "Добро пожаловать! Я каждое утро встаю в шесть."),
      line("murzik", "Altıda mı? Çok erken!", "В шесть? Как рано!"),
      line("potter", "İşe saat yedide başlıyorum. Öğlen yemek yiyorum, sonra yine çalışıyorum.", "В семь начинаю работать. В полдень обедаю, потом снова работаю."),
      line("tom", "Saat kaçta bitiriyorsunuz?", "Во сколько вы заканчиваете?"),
      line("potter", "Saat beşte. Akşam dinleniyorum.", "В пять. Вечером отдыхаю."),
      line("deniz", "Babam çok çalışkan!", "Мой папа очень трудолюбивый!"),
      line("potter", "Çok yoğun bir gün, ama işimi seviyorum.", "День очень насыщенный, но я люблю свою работу."),
    ],
    gist: choice("trka3-d1", "Во сколько гончар начинает работать?", [
      ["В семь.", true],
      ["В шесть.", false],
      ["В пять.", false],
    ]),
  },
  grammar: [
    {
      title: "Мой день: -iyorum + время",
      paragraphs: [
        "О том, что ты делаешь каждый день, тоже говорят с -iyorum: kalk-ıyorum (встаю), başl-ıyorum (начинаю), bitir-iyorum (заканчиваю).",
        "Время — с окончанием -de / -da / -te / -ta: saat altıda, saat yedide, saat beşte. Порядок: önce, sonra.",
      ],
      examples: [
        { ru: "Önce kahvaltı yapıyorum, sonra işe gidiyorum.", en: "Сначала я завтракаю, потом иду на работу." },
        { ru: "Saat dokuzda başlıyorum.", en: "Я начинаю в девять." },
      ],
    },
  ],
  tasks: [
    listen("trka3-t1", "Послушай. Во сколько встаёт говорящий?", "Her sabah saat yedide kalkıyorum.", [
      ["В семь.", true],
      ["В шесть.", false],
      ["В восемь.", false],
    ]),
    build("trka3-t2", "Поставь слова по порядку: «Я начинаю работать в семь».", ["İşe", "saat", "yedide", "başlıyorum."]),
    match("trka3-t3", "Соедини пары.", [
      ["kalkmak", "вставать"],
      ["başlamak", "начинать"],
      ["bitirmek", "заканчивать"],
      ["dinlenmek", "отдыхать"],
    ], { skill: "words" }),
    missing("trka3-t4", "Какой буквы не хватает? («я заканчиваю»)", "bit", "riyorum", "i", ["i", "ı", "e"]),
    speak("trka3-t5", "Günün nasıl geçiyor?", "Saat yedide kalkıyorum, dokuzda işe başlıyorum.", "Я встаю в семь, в девять начинаю работать.", { help: "Расскажи вслух о своём обычном дне." }),
    choice("trka3-t6", "Как сказать «Я учусь в университете»?", [
      ["Üniversitede okuyorum.", true],
      ["Üniversiteye okuyorum.", false],
      ["Üniversiteden okuyorum.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kalemlik",
    itemName: "Стаканчик для карандашей",
    itemNameRu: "Kalemlik",
    ru: "Yaşasın! Bir kalemlik!",
    en: "Ура! Стаканчик для карандашей!",
    a11y: "Глиняный стаканчик ручной работы с карандашами и кисточками.",
    image: p("kalemlik"),
    steps: ["Гончар лепит на круге маленький стаканчик.", "«Bu senin için!» — «Это тебе!»", "Мурзик ставит в него карандаши.", "Рисовать стало ещё удобнее!"],
    bridge: "А вечером у Тома собеседование в журнале. Он очень волнуется.",
  },
};

const kapadokya4: Lesson = {
  id: "tr-a1-kapadokya-4",
  level: "A1",
  cityId: "tr-kapadokya",
  number: 4,
  title: "Собеседование",
  minutes: 7,
  goals: ["Ответить на вопрос «почему?»: çünkü", "Сказать, сколько лет ты чем-то занимаешься", "Понять вопросы на собеседовании"],
  vocabNote: "Üç yıldır — «уже три года». Окончание -dır после срока значит «уже столько времени».",
  vocab: [
    v("trka4-1", "iş görüşmesi", "собеседование", "Том в рубашке сидит перед ноутбуком с видеозвонком.", "Послушать iş görüşmesi", p("l4-1")),
    v("trka4-2", "Neden bu işi istiyorsunuz?", "Почему вы хотите эту работу?", "На экране ноутбука строгая, но доброжелательная женщина-редактор.", "Послушать Neden bu işi istiyorsunuz", p("l4-2")),
    v("trka4-3", "Çünkü fotoğraf çekmeyi seviyorum.", "Потому что я люблю фотографировать.", "Том увлечённо показывает в камеру свой фотоаппарат.", "Послушать Çünkü fotoğraf çekmeyi seviyorum", p("l4-3")),
    v("trka4-4", "Deneyiminiz var mı?", "У вас есть опыт?", "Редактор листает на экране папку со снимками Тома.", "Послушать Deneyiminiz var mı", p("l4-4")),
    v("trka4-5", "Üç yıldır fotoğrafçıyım.", "Я фотограф уже три года.", "Три фотоальбома стопкой рядом с Томом.", "Послушать Üç yıldır fotoğrafçıyım", p("l4-5")),
    v("trka4-6", "Ne zaman başlayabilirsiniz?", "Когда вы можете начать?", "Редактор с улыбкой смотрит на календарь.", "Послушать Ne zaman başlayabilirsiniz", p("l4-6")),
    v("trka4-7", "Hemen!", "Сразу!", "Том вскакивает со стула с горящими глазами.", "Послушать Hemen", p("l4-7")),
  ],
  dialogue: {
    title: "Видеозвонок",
    note: "Seyahat etmek — «путешествовать». Tom Bey — так вежливо обращаются к Тому.",
    lines: [
      line("editor", "Merhaba, Tom Bey. Neden bu işi istiyorsunuz?", "Здравствуйте, Том. Почему вы хотите эту работу?"),
      line("tom", "Çünkü fotoğraf çekmeyi çok seviyorum. Ve seyahat etmeyi!", "Потому что я очень люблю фотографировать. И путешествовать!"),
      line("editor", "Deneyiminiz var mı?", "У вас есть опыт?"),
      line("tom", "Evet. Üç yıldır fotoğrafçıyım.", "Да. Я фотограф уже три года."),
      line("editor", "Güzel. Fotoğraflarınızda hep bir kedi var. Neden?", "Хорошо. На ваших снимках всегда есть кот. Почему?"),
      line("tom", "Çünkü o benim en iyi arkadaşım: Murzik!", "Потому что это мой лучший друг — Мурзик!"),
      line("editor", "Harika. Ne zaman başlayabilirsiniz?", "Чудесно. Когда вы можете начать?"),
      line("tom", "Hemen!", "Сразу!"),
    ],
    gist: choice("trka4-d1", "Почему на всех снимках Тома кот?", [
      ["Потому что Мурзик — его лучший друг.", true],
      ["Потому что он любит всех кошек.", false],
      ["Потому что так велел журнал.", false],
    ]),
  },
  grammar: [
    {
      title: "Почему? — Потому что…",
      paragraphs: [
        "Neden? — «почему?». Ответ начинается с çünkü — «потому что»: Neden? — Çünkü seyahat etmeyi seviyorum.",
        "«Уже столько-то времени» — срок и -dır / -dir / -dur / -dür, после глухих -tır / -tir / -tur / -tür: üç yıldır (уже три года), iki aydır (уже два месяца).",
      ],
      examples: [
        { ru: "Neden Türkçe öğreniyorsun? — Çünkü Türkiye'yi seviyorum.", en: "Почему ты учишь турецкий? — Потому что люблю Турцию." },
        { ru: "Beş yıldır öğretmenim.", en: "Я учитель уже пять лет." },
      ],
    },
  ],
  tasks: [
    choice("trka4-t1", "Как ответить «Потому что я люблю море»?", [
      ["Çünkü denizi seviyorum.", true],
      ["Neden denizi seviyorum.", false],
      ["Çünkü deniz seviyor.", false],
    ], { skill: "grammar" }),
    listen("trka4-t2", "Послушай. Сколько лет опыта у говорящего?", "Beş yıldır öğretmenim.", [
      ["Пять лет.", true],
      ["Три года.", false],
      ["Один год.", false],
    ]),
    match("trka4-t3", "Соедини пары.", [
      ["iş görüşmesi", "собеседование"],
      ["deneyim", "опыт"],
      ["Hemen!", "Сразу!"],
      ["neden", "почему"],
    ], { skill: "words" }),
    missing("trka4-t4", "Какой буквы не хватает? («потому что»)", "Ç", "nkü", "ü", ["ü", "u", "i"]),
    speak("trka4-t5", "Neden Türkçe öğreniyorsun?", "Çünkü Türkiye'yi çok seviyorum!", "Потому что я очень люблю Турцию!", { help: "Ответь вслух, почему ты учишь турецкий." }),
    listen("trka4-t6", "Вспомни прошлый урок. Что говорит гончар?", "Saat beşte bitiriyorum.", [
      ["Заканчивает в пять.", true],
      ["Начинает в пять.", false],
      ["Встаёт в пять.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sandik",
    itemName: "Сундук",
    itemNameRu: "Sandık",
    ru: "Yaşasın! Eski bir sandık!",
    en: "Ура! Старый сундук!",
    a11y: "Деревянный сундук с резьбой и железными уголками стоит в нише пещерного номера.",
    image: p("sandik"),
    steps: ["Пока Том говорит с редакцией, Дениз приносит сундук.", "«Fotoğraflarınız için!» — «Для ваших фотографий!»", "Мурзик складывает в него снимки.", "Сундук пахнет старым деревом."],
    bridge: "Наутро Тому приходит ответ…",
  },
};

const kapadokya5: Lesson = {
  id: "tr-a1-kapadokya-5",
  level: "A1",
  cityId: "tr-kapadokya",
  number: 5,
  title: "Хорошая новость!",
  minutes: 7,
  goals: ["Сообщить новость", "Поздравить и пожелать успехов", "Сказать «с понедельника»: -den itibaren"],
  vocabNote: "Köşe — «уголок», а в журнале — «рубрика». Şehir şehir — «город за городом».",
  vocab: [
    v("trka5-1", "Bir haberim var!", "У меня новость!", "Том вбегает в номер, размахивая телефоном.", "Послушать Bir haberim var", p("l5-1")),
    v("trka5-2", "İyi haber!", "Хорошая новость!", "Над Томом сияет нарисованное солнышко.", "Послушать İyi haber", p("l5-2")),
    v("trka5-3", "İşe alındım!", "Меня взяли на работу!", "Том подпрыгивает от радости, Мурзик хлопает в ладоши.", "Послушать İşe alındım", p("l5-3")),
    v("trka5-4", "Pazartesiden itibaren", "с понедельника", "Календарь, понедельник обведён красным.", "Послушать Pazartesiden itibaren", p("l5-4")),
    v("trka5-5", "Tebrikler!", "Поздравляю!", "Дениз и Мурзик обнимают Тома.", "Послушать Tebrikler", p("l5-5")),
    v("trka5-6", "Çok sevindim!", "Какая радость!", "Мурзик кружится от счастья.", "Послушать Çok sevindim", p("l5-6")),
    v("trka5-7", "Başarılar!", "Успехов!", "Дениз показывает Тому большой палец.", "Послушать Başarılar", p("l5-7")),
  ],
  dialogue: {
    title: "Ответ из журнала",
    note: "Peki — «ну а…, хорошо». İlk — «первый».",
    lines: [
      line("tom", "Murzik! Deniz! Bir haberim var!", "Мурзик! Дениз! У меня новость!"),
      line("deniz", "Ne oldu? İyi haber mi?", "Что случилось? Хорошая новость?"),
      line("tom", "Çok iyi haber! İşe alındım!", "Очень хорошая! Меня взяли на работу!"),
      line("murzik", "Tebrikler, Tom! Çok sevindim!", "Поздравляю, Том! Какая радость!"),
      line("tom", "Pazartesiden itibaren dergide çalışıyorum. «Şehir Şehir» köşesi!", "С понедельника я работаю в журнале. Рубрика «Город за городом»!"),
      line("deniz", "Başarılar! Peki, ilk fotoğraf ne?", "Успехов! А какой будет первый снимок?"),
      line("tom", "Balonlar! Ve tabii Murzik!", "Воздушные шары! И конечно, Мурзик!"),
    ],
    gist: choice("trka5-d1", "С какого дня Том работает в журнале?", [
      ["С понедельника.", true],
      ["С завтрашнего дня.", false],
      ["Через месяц.", false],
    ]),
  },
  grammar: [
    {
      title: "Начиная с: -den itibaren",
      paragraphs: [
        "«Начиная с» — слово с окончанием -den / -dan и itibaren: pazartesi-den itibaren — с понедельника, yarın-dan itibaren — с завтрашнего дня.",
        "После глухих звуков — -ten / -tan: bugün-den, но saat beş-ten itibaren — начиная с пяти часов.",
      ],
      examples: [
        { ru: "Yarından itibaren çalışıyorum.", en: "С завтрашнего дня я работаю." },
        { ru: "Saat beşten itibaren evdeyim.", en: "С пяти часов я дома." },
      ],
    },
  ],
  tasks: [
    choice("trka5-t1", "Как сказать «с завтрашнего дня»?", [
      ["yarından itibaren", true],
      ["yarına itibaren", false],
      ["yarında itibaren", false],
    ], { skill: "grammar" }),
    listen("trka5-t2", "Послушай. Какая новость?", "İşe alındım!", [
      ["Взяли на работу.", true],
      ["Уволили с работы.", false],
      ["Опоздал на работу.", false],
    ]),
    match("trka5-t3", "Соедини пары.", [
      ["Tebrikler!", "Поздравляю!"],
      ["Başarılar!", "Успехов!"],
      ["haber", "новость"],
      ["köşe", "рубрика, уголок"],
    ], { skill: "words" }),
    missing("trka5-t4", "Какой буквы не хватает? («Поздравляю!»)", "Tebr", "kler!", "i", ["i", "ı", "e"]),
    speak("trka5-t5", "Bir haberim var: işe alındım!", "Tebrikler! Başarılar!", "Поздравляю! Успехов!", { help: "Поздравь друга вслух." }),
    choice("trka5-t6", "Как спросить «Почему?»", [
      ["Neden?", true],
      ["Çünkü?", false],
      ["Nerede?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "balon",
    itemName: "Игрушечный воздушный шар",
    itemNameRu: "Balon",
    ru: "Yaşasın! Küçük bir balon!",
    en: "Ура! Маленький воздушный шар!",
    a11y: "Под потолком пещерного номера висит игрушечный воздушный шар с полосатой корзинкой.",
    image: p("balon"),
    steps: ["Дениз дарит Тому игрушечный воздушный шар.", "«Yeni işine!» — «За новую работу!»", "Мурзик вешает его под потолок.", "Шар тихонько покачивается."],
    bridge: "Понедельник. Первый рабочий день Тома — на рассвете, в небе!",
  },
};

const kapadokya6: Lesson = {
  id: "tr-a1-kapadokya-6",
  level: "A1",
  cityId: "tr-kapadokya",
  number: 6,
  title: "Первый день",
  minutes: 7,
  goals: ["Сказать, что волнуешься", "Сказать «наш»: -ımız, -imiz", "Понять пилота в воздушном шаре"],
  vocabNote: "Heyecan — «волнение», и радостное, и тревожное. Heyecanlıyım — «я волнуюсь».",
  vocab: [
    v("trka6-1", "İlk günüm!", "Мой первый день!", "Том на рассвете с фотоаппаратом у огромного шара.", "Послушать İlk günüm", p("l6-1")),
    v("trka6-2", "Heyecanlıyım.", "Я волнуюсь.", "Том нервно поправляет ремень фотоаппарата.", "Послушать Heyecanlıyım", p("l6-2")),
    v("trka6-3", "Bu bizim balonumuz.", "Это наш шар.", "Пилот показывает на полосатый шар.", "Послушать Bu bizim balonumuz", p("l6-3")),
    v("trka6-4", "Sıkı tutunun!", "Держитесь крепче!", "Мурзик и Том вцепились в край корзины.", "Послушать Sıkı tutunun", p("l6-4")),
    v("trka6-5", "Yükseliyoruz!", "Мы поднимаемся!", "Шар отрывается от земли, внизу машут люди.", "Послушать Yükseliyoruz", p("l6-5")),
    v("trka6-6", "Manzara harika!", "Вид чудесный!", "Внизу «каменные грибы» и долины в розовом рассвете.", "Послушать Manzara harika", p("l6-6")),
    v("trka6-7", "peri bacaları", "«каменные грибы»", "Высокие скалы-«грибы» с маленькими окошками.", "Послушать peri bacaları", p("l6-7")),
  ],
  dialogue: {
    title: "Полёт на рассвете",
    note: "Gülümse! — «Улыбнись!». Ofisim — «мой офис».",
    lines: [
      line("tom", "Bugün ilk günüm! Çok heyecanlıyım.", "Сегодня мой первый день! Я очень волнуюсь."),
      line("pilot", "Günaydın! Ben Kerem, sizin pilotunuz. Bu bizim balonumuz.", "Доброе утро! Я Керем, ваш пилот. Это наш шар."),
      line("murzik", "Vay! Çok büyük!", "Ого! Какой большой!"),
      line("pilot", "Sıkı tutunun! Yükseliyoruz!", "Держитесь крепче! Поднимаемся!"),
      line("tom", "Manzara harika! Murzik, gülümse!", "Вид чудесный! Мурзик, улыбнись!"),
      line("murzik", "Bak, Tom! Peri bacaları!", "Смотри, Том! «Каменные грибы»!"),
      line("pilot", "Burası benim ofisim!", "А это мой офис!"),
    ],
    gist: choice("trka6-d1", "Где у Тома первый рабочий день?", [
      ["В воздушном шаре.", true],
      ["В офисе журнала.", false],
      ["В гостинице.", false],
    ]),
  },
  grammar: [
    {
      title: "Наш: -ımız, -imiz, -umuz, -ümüz",
      paragraphs: [
        "«Наш» — окончание -ımız / -imiz / -umuz / -ümüz: bizim balon-umuz — наш шар, bizim ev-imiz — наш дом. После гласной: oda-mız — наша комната.",
        "«Ваш» — -ınız / -iniz: sizin pilot-unuz — ваш пилот. Слова bizim и sizin можно не говорить.",
      ],
      examples: [
        { ru: "Bu bizim evimiz.", en: "Это наш дом." },
        { ru: "Pilotunuz kim?", en: "Кто ваш пилот?" },
      ],
    },
  ],
  tasks: [
    choice("trka6-t1", "Как сказать «наш шар»?", [
      ["bizim balonumuz", true],
      ["bizim balonum", false],
      ["biz balon", false],
    ], { skill: "grammar" }),
    listen("trka6-t2", "Послушай. Что говорит пилот?", "Sıkı tutunun! Yükseliyoruz!", [
      ["Держитесь, поднимаемся!", true],
      ["Мы садимся!", false],
      ["Мы опаздываем!", false],
    ]),
    match("trka6-t3", "Соедини пары.", [
      ["İlk günüm!", "Мой первый день!"],
      ["Heyecanlıyım.", "Я волнуюсь."],
      ["manzara", "вид, пейзаж"],
      ["pilot", "пилот"],
    ], { skill: "words" }),
    missing("trka6-t4", "Какой буквы не хватает? («вид, пейзаж»)", "manz", "ra", "a", ["a", "e", "ı"]),
    speak("trka6-t5", "Bugün ilk günün mü?", "Evet, ilk günüm! Çok heyecanlıyım.", "Да, мой первый день! Я очень волнуюсь.", { help: "Ответь вслух." }),
    choice("trka6-t6", "Как поздравить друга?", [
      ["Tebrikler!", true],
      ["Geçmiş olsun!", false],
      ["Afiyet olsun!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fotograf-makinesi",
    itemName: "Фотоаппарат",
    itemNameRu: "Fotoğraf makinesi",
    ru: "Yaşasın! Bir fotoğraf makinesi!",
    en: "Ура! Фотоаппарат!",
    a11y: "Старый плёночный фотоаппарат Тома в кожаном чехле — теперь он у Мурзика.",
    image: p("fotograf-makinesi"),
    steps: ["После полёта Том достаёт свой старый фотоаппарат.", "«Al, artık senin. Sen de çek!» — «Держи, теперь он твой. Снимай и ты!»", "Мурзик делает первый снимок.", "На нём — шары над скалами."],
    bridge: "Вечером у гончара праздник: Тома взяли на работу!",
  },
};

const kapadokya7: Lesson = {
  id: "tr-a1-kapadokya-7",
  level: "A1",
  cityId: "tr-kapadokya",
  number: 7,
  title: "Праздник у гончара",
  minutes: 8,
  goals: ["Сказать тост: «За твой успех!»", "Сказать «я горжусь» и «спасибо за всё»", "Вспомнить все слова Каппадокии"],
  vocabNote: "Тосты строятся с окончанием «куда»: Başarına! — «За твой успех!», Sağlığına! — «За твоё здоровье!». Их говорят с любым напитком.",
  vocab: [
    v("trka7-1", "Kutlayalım!", "Давайте отпразднуем!", "Во дворе мастерской накрыт стол, висят фонарики.", "Послушать Kutlayalım", p("l7-1")),
    v("trka7-2", "Başarına!", "За твой успех!", "Все поднимают стаканы с айраном и соком.", "Послушать Başarına", p("l7-2")),
    v("trka7-3", "Sağlığına!", "За твоё здоровье!", "Гончар поднимает стаканчик чая.", "Послушать Sağlığına", p("l7-3")),
    v("trka7-4", "Gurur duyuyorum.", "Я горжусь.", "Мурзик гордо смотрит на Тома, грудь колесом.", "Послушать Gurur duyuyorum", p("l7-4")),
    v("trka7-5", "Her şey için teşekkürler.", "Спасибо за всё.", "Том обнимает Дениз и гончара.", "Послушать Her şey için teşekkürler", p("l7-5")),
    v("trka7-6", "hatıra", "память, сувенир", "На полке стоят глиняные кувшинчики-сувениры.", "Послушать hatıra", p("l7-6")),
    v("trka7-7", "Kim bilir?", "Кто знает?", "Том хитро подмигивает и прячет за спиной конверт.", "Послушать Kim bilir", p("l7-7")),
  ],
  dialogue: {
    title: "Вечер в Аваносе",
    note: "Avanos'tan hatıra — «на память об Аваносе». Sıradaki — «следующий».",
    lines: [
      line("potter", "Kutlayalım! Tom'un yeni işine!", "Давайте отпразднуем! За новую работу Тома!"),
      line("deniz", "Başarına, Tom!", "За твой успех, Том!"),
      line("tom", "Her şey için teşekkürler!", "Спасибо за всё!"),
      line("murzik", "Seninle gurur duyuyorum, Tom!", "Я горжусь тобой, Том!"),
      line("potter", "Murzik, bu testi senin için. Avanos'tan hatıra.", "Мурзик, этот кувшин — тебе. На память об Аваносе."),
      line("deniz", "Sıradaki şehir neresi?", "А какой следующий город?"),
      line("tom", "Kim bilir?", "Кто знает?"),
    ],
    gist: choice("trka7-d1", "Что празднуют?", [
      ["Новую работу Тома.", true],
      ["День рождения Мурзика.", false],
      ["Экзамен Дениз.", false],
    ]),
  },
  grammar: [
    {
      title: "Тосты: -a, -e",
      paragraphs: [
        "Тост — слово с окончанием «куда» -a / -e: başarı-n-a — за твой успех, sağlığ-ın-a — за твоё здоровье, dostluğ-a — за дружбу.",
        "Обрати внимание: k на конце слова перед гласной становится ğ: sağlık → sağlığına, dostluk → dostluğa.",
      ],
      examples: [
        { ru: "Dostluğa!", en: "За дружбу!" },
        { ru: "Yeni işine!", en: "За твою новую работу!" },
      ],
    },
  ],
  tasks: [
    listen("trka7-t1", "Аудиоэкзамен. Когда и как долго полёт?", "Yarın sabah saat beşte sizi otelden alacağız. Uçuş bir saat sürüyor.", [
      ["Заберут из гостиницы в пять утра, полёт длится час.", true],
      ["Полёт в пять вечера.", false],
      ["Полёт длится три часа.", false],
    ]),
    choice("trka7-t2", "Как сказать тост «За дружбу!»? (дружба — dostluk)", [
      ["Dostluğa!", true],
      ["Dostluk!", false],
      ["Dostlukta!", false],
    ], { skill: "grammar" }),
    match("trka7-t3", "Соедини пары.", [
      ["Kutlayalım!", "Давайте отпразднуем!"],
      ["Başarılar!", "Успехов!"],
      ["Kim bilir?", "Кто знает?"],
      ["hatıra", "память, сувенир"],
    ], { skill: "words" }),
    missing("trka7-t4", "Какой буквы не хватает? («кувшин»)", "tes", "i", "t", ["t", "d", "s"]),
    speak("trka7-t5", "Neden gurur duyuyorsun?", "Çünkü arkadaşım işe alındı!", "Потому что моего друга взяли на работу!", { help: "Ответь вслух." }),
    script("trka7-t6", "Вспомни всю Каппадокию. Закончи разговоры.", [
      { speaker: "Дениз", text: "Nerede çalışıyorsun?" },
      { speaker: "Ты", answer: "Bir ofiste çalışıyorum.", options: ["Bir ofiste çalışıyorum.", "Bir ofise çalışıyorum.", "Hemen!"] },
      { speaker: "Редактор", text: "Neden bu işi istiyorsunuz?" },
      { speaker: "Ты", answer: "Çünkü fotoğraf çekmeyi seviyorum.", options: ["Çünkü fotoğraf çekmeyi seviyorum.", "Neden fotoğraf.", "İlk günüm!"] },
      { speaker: "Том", text: "İşe alındım!" },
      { speaker: "Ты", answer: "Tebrikler! Başarılar!", options: ["Tebrikler! Başarılar!", "Geçmiş olsun!", "Kim bilir?"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "testi",
    itemName: "Глиняный кувшин",
    itemNameRu: "Testi",
    ru: "Yaşasın! Bir testi!",
    en: "Ура! Глиняный кувшин!",
    a11y: "Красный глиняный кувшин из Аваноса с узором из воздушных шаров.",
    image: p("testi"),
    steps: ["Гончар ставит на стол красный кувшин.", "На нём нарисованы воздушные шары.", "«Avanos'tan hatıra!» — «На память об Аваносе!»", "Мурзик обнимает кувшин."],
    bridge: "Скоро в путь. А у Тома какой-то секрет…",
  },
};

const story: CityStory = {
  home: {
    name: "Номер в пещерной гостинице",
    nameRu: "Mağara otelinde bir oda",
    image: p("home"),
    a11y: "Пустой номер, вырубленный прямо в скале: сводчатый каменный потолок, ниши в стенах, маленькое окно на долину. Посередине чемодан Мурзика.",
  },
  keepsakeId: "testi",
  welcomeRu: "Merhaba, Kapadokya!",
  welcomeEn: "Привет, Каппадокия!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том на рассвете среди «каменных грибов» Каппадокии. В небе десятки разноцветных воздушных шаров.",
  departureImage: p("departure"),
  departureA11y: "Мурзик и Том с чемоданами у пещерной гостиницы. Дениз машет им рукой.",
  finale: [
    {
      image: p("magazine"),
      a11y: "Свежий номер журнала о путешествиях: на обложке рыжий котёнок на фоне воздушных шаров. Мурзик и Том смотрят на него с восторгом.",
      lines: [
        { en: "Через месяц, уже весной, выходит журнал с первой рубрикой «Город за городом». На обложке — Мурзик на фоне шаров." },
        { ru: "Murzik kapakta!", en: "Мурзик на обложке!" },
        { en: "А на одном снимке, в корзине соседнего шара, — белый кот в шляпе. Том хмурится: опять он?" },
      ],
    },
    {
      image: p("testi"),
      a11y: "Мурзик обходит свой пещерный номер, который обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свой пещерный номер. Том фотографирует его — теперь уже для журнала." },
        { en: "С собой — красный кувшин из Аваноса." },
        { en: "Журнал ложится в кармашек чемодана, рядом с открытками." },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "Kapadokya tamamlandı!", en: "Каппадокия пройдена!" },
        { en: "7 / 7 уроков" },
        { en: "A1 — пройден девятый блок." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Мурзик и Том прощаются с Дениз у гостиницы.",
      lines: [
        { ru: "Hoşça kal, Kapadokya! Hoşça kal, Deniz!", en: "Пока, Каппадокия! Пока, Дениз!" },
        { ru: "Sıradaki durak: Ankara!", en: "Следующая остановка: Анкара!" },
      ],
    },
    {
      image: p("train"),
      a11y: "Поезд идёт по весенней степи к столице.",
      lines: [{ ru: "Kapadokya → Ankara", en: "Каппадокия → Анкара" }],
    },
    {
      image: pic("tr/ankara/arrival"),
      a11y: "Мурзик и Том у старой крепости Анкары на холме. Внизу большой город. Тёплый весенний день.",
      lines: [
        { ru: "Merhaba, Ankara!", en: "Привет, Анкара!" },
        { ru: "Başkent!", en: "Столица!" },
      ],
    },
  ],
};

export const trKapadokya = {
  id: "tr-kapadokya",
  name: "Каппадокия",
  nameTr: "Kapadokya",
  lessons: [kapadokya1, kapadokya2, kapadokya3, kapadokya4, kapadokya5, kapadokya6, kapadokya7],
  story,
};
