import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Мардин · «Повторение A1» · встреча с Джаном, погода, завтрак, подъём в старый город, праздник, кот в шляпе, экзамен A1. */

const p = (name: string) => pic(`tr/mardin/${name}`);

const mardin1: Lesson = {
  id: "tr-a1-mardin-1",
  level: "A1",
  cityId: "tr-mardin",
  number: 1,
  title: "Сколько лет!",
  minutes: 7,
  goals: ["Поздороваться со старым другом", "Представить друга: Tanıştırayım", "Спросить, как идут дела"],
  vocabNote: "Повторяем приветствия и знакомство. Uzun zamandır görüşmedik — «давно не виделись». Tanıştırayım — «позволь представить».",
  vocab: [
    v("trma1-1", "Görüşmeyeli çok oldu!", "Сколько лет, сколько зим!", "Том и его друг Джан крепко обнимаются на автовокзале.", "Послушать Görüşmeyeli çok oldu", p("l1-1")),
    v("trma1-2", "Uzun zamandır görüşmedik.", "Мы давно не виделись.", "Джан с фотоаппаратом на шее хлопает Тома по плечу.", "Послушать Uzun zamandır görüşmedik", p("l1-2")),
    v("trma1-3", "Tanıştırayım: bu Murzik.", "Позволь представить: это Мурзик.", "Том показывает на Мурзика, Мурзик машет лапкой.", "Послушать Tanıştırayım: bu Murzik", p("l1-3")),
    v("trma1-4", "Nasıl gidiyor?", "Как идут дела?", "Джан улыбается, прищурившись на солнце.", "Послушать Nasıl gidiyor", p("l1-4")),
    v("trma1-5", "Her şey yolunda.", "Всё в порядке.", "Том показывает большой палец.", "Послушать Her şey yolunda", p("l1-5")),
    v("trma1-6", "Hâlâ fotoğrafçı mısın?", "Ты всё ещё фотограф?", "Том кивает на фотоаппарат Джана.", "Послушать Hâlâ fotoğrafçı mısın", p("l1-6")),
    v("trma1-7", "eski arkadaş", "старый друг", "Старая фотография: юные Том и Джан с фотоаппаратами.", "Послушать eski arkadaş", p("l1-7")),
  ],
  dialogue: {
    title: "Джан",
    note: "Джан — друг Тома, фотограф из того же журнала. Dergi — «журнал». Senden çok bahsetti — «много о тебе рассказывал».",
    lines: [
      line("can", "Tom! Görüşmeyeli çok oldu!", "Том! Сколько лет, сколько зим!"),
      line("tom", "Can! Uzun zamandır görüşmedik! Nasıl gidiyor?", "Джан! Давно не виделись! Как дела?"),
      line("can", "Her şey yolunda. Hâlâ dergide çalışıyorum.", "Всё в порядке. Всё ещё работаю в журнале."),
      line("tom", "Tanıştırayım: bu Murzik. Benim yol arkadaşım.", "Позволь представить: это Мурзик. Мой попутчик."),
      line("murzik", "Merhaba! Memnun oldum!", "Здравствуйте! Очень приятно!"),
      line("can", "Ben de! Tom senden çok bahsetti. Mardin'e hoş geldin!", "Мне тоже! Том много о тебе рассказывал. Добро пожаловать в Мардин!"),
    ],
    gist: choice("trma1-d1", "Кто такой Джан?", [
      ["Старый друг Тома, фотограф.", true],
      ["Брат Тома.", false],
      ["Хозяин гостиницы.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем: знакомство и «как дела»",
      paragraphs: [
        "Знакомство: Benim adım… (меня зовут…), Memnun oldum (очень приятно), Tanıştırayım: bu… (позволь представить: это…).",
        "Как дела: Nasılsın? Nasıl gidiyor? Ne haber? Ответы: İyiyim, teşekkürler. Her şey yolunda. Fena değil.",
      ],
      examples: [
        { ru: "Tanıştırayım: bu benim kardeşim.", en: "Позволь представить: это мой брат." },
        { ru: "Fena değil, sen nasılsın?", en: "Неплохо, а ты как?" },
      ],
    },
  ],
  tasks: [
    choice("trma1-t1", "Как сказать «Мы давно не виделись»?", [
      ["Uzun zamandır görüşmedik.", true],
      ["Uzun zamandır görüşüyoruz.", false],
      ["Uzun zaman görüşmek.", false],
    ], { skill: "grammar" }),
    listen("trma1-t2", "Послушай. Как у него дела?", "Fena değil, biraz yorgunum.", [
      ["Неплохо, немного устал.", true],
      ["Отлично, совсем не устал.", false],
      ["Плохо, он заболел.", false],
    ]),
    match("trma1-t3", "Соедини пары.", [
      ["Tanıştırayım", "Позволь представить"],
      ["Her şey yolunda.", "Всё в порядке."],
      ["hâlâ", "всё ещё"],
      ["eski arkadaş", "старый друг"],
    ], { skill: "words" }),
    missing("trma1-t4", "Какой буквы не хватает? («всё ещё»)", "h", "lâ", "â", ["â", "a", "e"]),
    speak("trma1-t5", "Merhaba! Ben Can. Sen kimsin?", "Merhaba! Benim adım Murzik. Memnun oldum!", "Привет! Меня зовут Мурзик. Очень приятно!", { help: "Представься вслух." }),
    choice("trma1-t6", "Как сказать «Я ещё не нашёл»?", [
      ["Henüz bulmadım.", true],
      ["Zaten bulmadım.", false],
      ["Henüz buldum.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kupa",
    itemName: "Кружка с котом",
    itemNameRu: "Kupa",
    ru: "Yaşasın! Bir kupa!",
    en: "Ура! Кружка!",
    a11y: "Большая керамическая кружка, на ней нарисован рыжий котёнок с фотоаппаратом.",
    image: p("kupa"),
    steps: ["Джан достаёт из рюкзака кружку.", "На ней нарисован рыжий котёнок с фотоаппаратом.", "«Tom fotoğrafını gönderdi, ben de yaptırdım!» — «Том прислал твоё фото, а я заказал кружку!»", "Кружка встаёт на подоконник."],
    bridge: "Джан смотрит на небо: «Dağda hava çabuk değişir.» — «В горах погода быстро меняется».",
  },
};

const mardin2: Lesson = {
  id: "tr-a1-mardin-2",
  level: "A1",
  cityId: "tr-mardin",
  number: 2,
  title: "Погода в горах",
  minutes: 7,
  goals: ["Повторить погоду", "Сказать про день и ночь: gündüz, gece", "Спросить о погоде завтра"],
  vocabNote: "Повторяем погоду. Gündüz — «днём», gece — «ночью». Serin — «прохладный». Ova — «равнина».",
  vocab: [
    v("trma2-1", "Gündüz sıcak, gece serin.", "Днём жарко, ночью прохладно.", "Половина картинки — солнце, половина — луна над каменным городом.", "Послушать Gündüz sıcak, gece serin", p("l2-1")),
    v("trma2-2", "Rüzgâr esiyor.", "Дует ветер.", "Шарф Мурзика развевается на ветру.", "Послушать Rüzgâr esiyor", p("l2-2")),
    v("trma2-3", "Yarın hava nasıl olacak?", "Какая погода будет завтра?", "Том смотрит на телефоне прогноз.", "Послушать Yarın hava nasıl olacak", p("l2-3")),
    v("trma2-4", "Bulutlu olacak.", "Будет облачно.", "Облака над равниной.", "Послушать Bulutlu olacak", p("l2-4")),
    v("trma2-5", "Ceketini al!", "Возьми куртку!", "Джан протягивает Мурзику маленькую курточку.", "Послушать Ceketini al", p("l2-5")),
    v("trma2-6", "ova", "равнина", "Бескрайняя жёлтая равнина до горизонта.", "Послушать ova", p("l2-6")),
    v("trma2-7", "Güneş batıyor.", "Солнце садится.", "Красное солнце опускается за равнину.", "Послушать Güneş batıyor", p("l2-7")),
  ],
  dialogue: {
    title: "На крыше",
    note: "Kıpkırmızı — «ярко-красный». Belki — «может быть». Hadi — «давай».",
    lines: [
      line("murzik", "Hava çok güzel! Ama rüzgâr esiyor.", "Погода чудесная! Но дует ветер."),
      line("can", "Mardin'de gündüz sıcak, gece serin. Ceketini al!", "В Мардине днём жарко, а ночью прохладно. Возьми куртку!"),
      line("tom", "Yarın hava nasıl olacak?", "А какая погода будет завтра?"),
      line("can", "Bulutlu olacak, belki biraz yağmur.", "Будет облачно, может быть, немного дождя."),
      line("murzik", "Bak! Güneş batıyor! Ova kıpkırmızı!", "Смотрите! Солнце садится! Равнина вся красная!"),
      line("can", "İşte Mardin'in en güzel fotoğrafı. Hadi, Tom!", "Вот самый красивый снимок Мардина. Давай, Том!"),
    ],
    gist: choice("trma2-d1", "Какая погода будет завтра?", [
      ["Облачно, может быть, дождь.", true],
      ["Жарко и солнечно.", false],
      ["Снег и ветер.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем: погода и будущее",
      paragraphs: [
        "Погода сейчас: Hava güzel / sıcak / soğuk. Yağmur yağıyor. Rüzgâr esiyor.",
        "Погода завтра — -acak / -ecek: Yarın güneşli olacak. Yarın yağmur yağacak. Вопрос: Yarın hava nasıl olacak?",
      ],
      examples: [
        { ru: "Yarın kar yağacak.", en: "Завтра пойдёт снег." },
        { ru: "Akşam hava serin olacak.", en: "Вечером будет прохладно." },
      ],
    },
  ],
  tasks: [
    choice("trma2-t1", "Как сказать «Завтра будет облачно»?", [
      ["Yarın bulutlu olacak.", true],
      ["Yarın bulutlu oldu.", false],
      ["Yarın bulutlu oluyor değil.", false],
    ], { skill: "grammar" }),
    listen("trma2-t2", "Послушай. Какая погода?", "Bugün rüzgâr esiyor ve hava serin.", [
      ["Ветрено и прохладно.", true],
      ["Жарко и тихо.", false],
      ["Идёт снег.", false],
    ]),
    match("trma2-t3", "Соедини пары.", [
      ["gündüz", "днём"],
      ["gece", "ночью"],
      ["serin", "прохладный"],
      ["ova", "равнина"],
    ], { skill: "words" }),
    missing("trma2-t4", "Какой буквы не хватает? («равнина»)", "o", "a", "v", ["v", "b", "f"]),
    speak("trma2-t5", "Bugün hava nasıl?", "Bugün hava güneşli ama biraz rüzgârlı.", "Сегодня солнечно, но немного ветрено.", { help: "Расскажи вслух, какая сегодня погода." }),
    listen("trma2-t6", "Вспомни прошлый урок. Как дела?", "Her şey yolunda.", [
      ["Всё в порядке.", true],
      ["Всё пропало.", false],
      ["Всё закрыто.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "durbun",
    itemName: "Подзорная труба",
    itemNameRu: "Dürbün",
    ru: "Yaşasın! Bir dürbün!",
    en: "Ура! Подзорная труба!",
    a11y: "Маленькая латунная подзорная труба на треноге у окна с видом на равнину.",
    image: p("durbun"),
    steps: ["Джан ставит у окна латунную подзорную трубу.", "«Bak, ovanın sonu yok!» — «Смотри, у равнины нет конца!»", "Мурзик смотрит вдаль до самого горизонта.", "Труба остаётся у окна."],
    bridge: "Утром — знаменитый мардинский завтрак на террасе.",
  },
};

const mardin3: Lesson = {
  id: "tr-a1-mardin-3",
  level: "A1",
  cityId: "tr-mardin",
  number: 3,
  title: "Мардинский завтрак",
  minutes: 7,
  goals: ["Повторить еду и заказ", "Сказать, что тебе нравится и что нет", "Предложить заплатить: Ben ısmarlıyorum"],
  vocabNote: "Повторяем еду. Ismarlamak — «угощать»: Ben ısmarlıyorum — «я угощаю». Acı — «острый».",
  vocab: [
    v("trma3-1", "Mardin kahvaltısı", "мардинский завтрак", "Каменная терраса, стол уставлен тарелочками с сыром, зеленью и пастами.", "Послушать Mardin kahvaltısı", p("l3-1")),
    v("trma3-2", "Bir menengiç kahvesi, lütfen.", "Один кофе из мененгича, пожалуйста.", "Чашечка густого светлого кофе с пенкой.", "Послушать Bir menengiç kahvesi, lütfen", p("l3-2")),
    v("trma3-3", "Bu acı mı?", "Это острое?", "Мурзик с подозрением нюхает красную пасту.", "Послушать Bu acı mı", p("l3-3")),
    v("trma3-4", "Biraz acı.", "Немного острое.", "Мурзик пробует, у него краснеют уши.", "Послушать Biraz acı", p("l3-4")),
    v("trma3-5", "Doydum!", "Я наелся!", "Мурзик откинулся на спинку стула и гладит животик.", "Послушать Doydum", p("l3-5")),
    v("trma3-6", "Zeytini sevmiyorum.", "Я не люблю оливки.", "Мурзик отодвигает лапой тарелочку с оливками.", "Послушать Zeytini sevmiyorum", p("l3-6")),
    v("trma3-7", "Bugün ben ısmarlıyorum!", "Сегодня я угощаю!", "Джан забирает у официанта счёт.", "Послушать Bugün ben ısmarlıyorum", p("l3-7")),
  ],
  dialogue: {
    title: "Терраса",
    note: "Menengiç — дикая фисташка: из её зёрен варят мягкий кофе без кофеина. Olmaz — «нельзя, ни в коем случае».",
    lines: [
      line("waiter", "Günaydın! Ne istersiniz?", "Доброе утро! Что желаете?"),
      line("can", "Mardin kahvaltısı ve üç menengiç kahvesi, lütfen.", "Мардинский завтрак и три кофе из мененгича, пожалуйста."),
      line("murzik", "Bu kırmızı ne? Acı mı?", "А это красное что такое? Острое?"),
      line("waiter", "Biraz acı. Ama çok lezzetli!", "Немного острое. Но очень вкусно!"),
      line("murzik", "Evet, çok lezzetli! Ama zeytini sevmiyorum.", "Да, очень вкусно! Но оливки я не люблю."),
      line("murzik", "Doydum! Çok teşekkürler!", "Я наелся! Большое спасибо!"),
      line("tom", "Hesap lütfen!", "Счёт, пожалуйста!"),
      line("can", "Olmaz! Bugün ben ısmarlıyorum!", "Ни в коем случае! Сегодня я угощаю!"),
    ],
    gist: choice("trma3-d1", "Кто платит за завтрак?", [
      ["Джан.", true],
      ["Том.", false],
      ["Мурзик.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем: нравится и не нравится",
      paragraphs: [
        "Seviyorum — люблю, sevmiyorum — не люблю. То, что любишь, — с окончанием -ı / -i / -u / -ü: zeytini sevmiyorum, çayı seviyorum.",
        "В кафе: Ne istersiniz? — Bir çay, lütfen. Hesap lütfen! Afiyet olsun!",
      ],
      examples: [
        { ru: "Kahveyi çok seviyorum.", en: "Я очень люблю кофе." },
        { ru: "Tom acıyı sevmiyor.", en: "Том не любит острое." },
      ],
    },
  ],
  tasks: [
    choice("trma3-t1", "Как сказать «Я не люблю оливки»?", [
      ["Zeytini sevmiyorum.", true],
      ["Zeytin sevmiyorum değil.", false],
      ["Zeytini seviyorum.", false],
    ], { skill: "grammar" }),
    listen("trma3-t2", "Послушай. Что заказали?", "İki çay ve bir simit, lütfen.", [
      ["Два чая и один симит.", true],
      ["Один чай и два симита.", false],
      ["Два кофе и один симит.", false],
    ]),
    match("trma3-t3", "Соедини пары.", [
      ["acı", "острый"],
      ["lezzetli", "вкусный"],
      ["zeytin", "оливка"],
      ["ısmarlamak", "угощать"],
    ], { skill: "words" }),
    spell("trma3-t4", "Собери из букв слово «оливка».", "zeytin"),
    speak("trma3-t5", "Ne istersiniz?", "Bir çay ve bir peynirli börek, lütfen.", "Один чай и один бёрек с сыром, пожалуйста.", { help: "Закажи вслух завтрак." }),
    choice("trma3-t6", "Как сказать «Днём жарко, ночью прохладно»?", [
      ["Gündüz sıcak, gece serin.", true],
      ["Gece sıcak, gündüz serin.", false],
      ["Gündüz soğuk, gece sıcak.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "menengic-kahvesi",
    itemName: "Банка кофе из мененгича",
    itemNameRu: "Menengiç kahvesi",
    ru: "Yaşasın! Menengiç kahvesi!",
    en: "Ура! Кофе из мененгича!",
    a11y: "Маленькая жестяная банка с узором, внутри молотые зёрна дикой фисташки.",
    image: p("menengic-kahvesi"),
    steps: ["Официант дарит Мурзику банку мененгича.", "«Kahve değil, ama kahve gibi!» — «Не кофе, но как кофе!»", "Мурзик нюхает: пахнет орехами.", "Банка встаёт на полку."],
    bridge: "После завтрака Джан ведёт всех наверх, в старый город.",
  },
};

const mardin4: Lesson = {
  id: "tr-a1-mardin-4",
  level: "A1",
  cityId: "tr-mardin",
  number: 4,
  title: "Наверх, в старый город",
  minutes: 7,
  goals: ["Повторить дорогу: вверх, вниз, налево", "Повторить покупки: сколько стоит, дорого", "Поторговаться"],
  vocabNote: "Yukarı — «вверх, наверх», aşağı — «вниз». Merdiven — «лестница». İndirim — «скидка».",
  vocab: [
    v("trma4-1", "Merdivenlerden yukarı çık.", "Поднимись по лестнице.", "Узкая каменная лестница между медовыми домами.", "Послушать Merdivenlerden yukarı çık", p("l4-1")),
    v("trma4-2", "aşağı", "вниз", "Мурзик смотрит вниз с высокой лестницы.", "Послушать aşağı", p("l4-2")),
    v("trma4-3", "dar sokak", "узкая улочка", "Улочка такая узкая, что ослик еле проходит.", "Послушать dar sokak", p("l4-3")),
    v("trma4-4", "Bu sabun kaç lira?", "Сколько стоит это мыло?", "Лавочка с горками зелёного мыла.", "Послушать Bu sabun kaç lira", p("l4-4")),
    v("trma4-5", "Biraz pahalı.", "Немного дорого.", "Мурзик заглядывает в свой кошелёк.", "Послушать Biraz pahalı", p("l4-5")),
    v("trma4-6", "Son fiyat ne?", "Какая последняя цена?", "Мурзик хитро улыбается продавцу.", "Послушать Son fiyat ne", p("l4-6")),
    v("trma4-7", "Tamam, alıyorum!", "Хорошо, беру!", "Мурзик протягивает монетки.", "Послушать Tamam, alıyorum", p("l4-7")),
  ],
  dialogue: {
    title: "Мыльная лавка",
    note: "Bıttım sabunu — мыло из масла дикой фисташки, его варят в Мардине. Senin için — «для тебя».",
    lines: [
      line("can", "Merdivenlerden yukarı çıkalım. Eski şehir yukarıda.", "Поднимемся по лестнице. Старый город наверху."),
      line("murzik", "Ne kadar dar sokaklar! Bak, bir sabun dükkânı!", "Какие узкие улочки! Смотрите, мыльная лавка!"),
      line("murzik", "Bu sabun kaç lira?", "Сколько стоит это мыло?"),
      line("seller", "Bu bıttım sabunu. Yüz lira.", "Это мыло из дикой фисташки. Сто лир."),
      line("murzik", "Biraz pahalı… Son fiyat ne?", "Немного дорого… Какая последняя цена?"),
      line("seller", "Senin için seksen lira!", "Для тебя — восемьдесят лир!"),
      line("murzik", "Tamam, alıyorum!", "Хорошо, беру!"),
    ],
    gist: choice("trma4-d1", "За сколько Мурзик купил мыло?", [
      ["За восемьдесят лир.", true],
      ["За сто лир.", false],
      ["За восемнадцать лир.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем: дорога и покупки",
      paragraphs: [
        "Дорога: düz git (иди прямо), sağa dön (поверни направо), sola dön (налево), yukarı çık (поднимись), aşağı in (спустись).",
        "Покупки: Bu kaç lira? Pahalı / ucuz. İndirim var mı? Tamam, alıyorum!",
      ],
      examples: [
        { ru: "Aşağı in, sonra sola dön.", en: "Спустись, потом поверни налево." },
        { ru: "Bu çok ucuz, iki tane alıyorum.", en: "Это очень дёшево, беру две штуки." },
      ],
    },
  ],
  tasks: [
    choice("trma4-t1", "Как сказать «Поднимись наверх»?", [
      ["Yukarı çık.", true],
      ["Aşağı in.", false],
      ["Yukarı in.", false],
    ], { skill: "grammar" }),
    listen("trma4-t2", "Послушай. Куда идти?", "Aşağı in, sonra sağa dön.", [
      ["Вниз, потом направо.", true],
      ["Наверх, потом налево.", false],
      ["Прямо, потом вниз.", false],
    ]),
    match("trma4-t3", "Соедини пары.", [
      ["yukarı", "наверх"],
      ["aşağı", "вниз"],
      ["merdiven", "лестница"],
      ["indirim", "скидка"],
    ], { skill: "words" }),
    missing("trma4-t4", "Какой буквы не хватает? («вниз»)", "a", "ağı", "ş", ["ş", "s", "z"]),
    speak("trma4-t5", "Bu şal iki yüz lira.", "Biraz pahalı. İndirim var mı?", "Немного дорого. Скидка есть?", { help: "Поторгуйся вслух." }),
    listen("trma4-t6", "Вспомни прошлый урок. Что говорит Джан?", "Bugün ben ısmarlıyorum!", [
      ["Сегодня я угощаю!", true],
      ["Сегодня я не ем!", false],
      ["Счёт, пожалуйста!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sabun",
    itemName: "Мардинское мыло",
    itemNameRu: "Sabun",
    ru: "Yaşasın! Mardin sabunu!",
    en: "Ура! Мардинское мыло!",
    a11y: "Брусок зелёного мыла с выдавленным узором, завёрнутый в бумагу и перевязанный ниткой.",
    image: p("sabun"),
    steps: ["Продавец заворачивает мыло в бумагу.", "Пахнет орехами и травами.", "«Hediye için mi?» — «Для подарка?» «Hayır, benim için!» — «Нет, для меня!»", "Мыло ложится у умывальника."],
    bridge: "Вечером на улицах музыка: в старом городе праздник!",
  },
};

const mardin5: Lesson = {
  id: "tr-a1-mardin-5",
  level: "A1",
  cityId: "tr-mardin",
  number: 5,
  title: "Праздник",
  minutes: 7,
  goals: ["Повторить приглашение: Gel! Hadi!", "Поздравить с праздником: İyi bayramlar!", "Повторить «давай сделаем»: -elim"],
  vocabNote: "Şenlik — «праздник, гулянье». Bayram — «праздник» (большой, общий). İyi bayramlar — «с праздником!»",
  vocab: [
    v("trma5-1", "Müzik çalıyor!", "Играет музыка!", "На площади играют барабан и зурна.", "Послушать Müzik çalıyor", p("l5-1")),
    v("trma5-2", "şenlik", "гулянье, праздник", "Площадь, увешанная фонариками.", "Послушать şenlik", p("l5-2")),
    v("trma5-3", "Hadi, gel!", "Ну же, иди сюда!", "Девушка из хоровода протягивает Мурзику руку.", "Послушать Hadi, gel", p("l5-3")),
    v("trma5-4", "Dans edelim!", "Давай потанцуем!", "Мурзик и Том в хороводе.", "Послушать Dans edelim", p("l5-4")),
    v("trma5-5", "İyi bayramlar!", "С праздником!", "Соседи обмениваются конфетами.", "Послушать İyi bayramlar", p("l5-5")),
    v("trma5-6", "Size de!", "И вас тоже!", "Старик-сосед кланяется в ответ.", "Послушать Size de", p("l5-6")),
    v("trma5-7", "Ne kadar eğlenceli!", "Как весело!", "Мурзик кружится, раскинув лапы.", "Послушать Ne kadar eğlenceli", p("l5-7")),
  ],
  dialogue: {
    title: "Хоровод",
    note: "Halay — хороводный танец, в нём держатся за руки или мизинцы. Kolay — «легко». Adım — здесь «шаг».",
    lines: [
      line("murzik", "Dinleyin! Müzik çalıyor!", "Слушайте! Играет музыка!"),
      line("can", "Bu akşam bayram şenliği var. Hadi, gel!", "Сегодня вечером праздничное гулянье. Ну же, пошли!"),
      line("tom", "Bu ne dansı?", "Что это за танец?"),
      line("can", "Halay! Çok kolay. Bir adım sağa, bir adım sola…", "Халай! Очень легко. Шаг вправо, шаг влево…"),
      line("murzik", "Dans edelim! Ne kadar eğlenceli!", "Давайте танцевать! Как весело!"),
      line("tom", "İyi bayramlar!", "С праздником!"),
      line("can", "Size de!", "И вас тоже!"),
    ],
    gist: choice("trma5-d1", "Что за танец танцуют на площади?", [
      ["Халай.", true],
      ["Хорон.", false],
      ["Вальс.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем: давай сделаем",
      paragraphs: [
        "«Давай…» — -elim / -alım: dans edelim (давай потанцуем), gidelim (пойдём), yiyelim (давай поедим), bakalım (посмотрим).",
        "Вопрос-предложение: … -elim mi? / -alım mı? — Çay içelim mi? — Выпьем чаю?",
      ],
      examples: [
        { ru: "Hadi, şenliğe gidelim!", en: "Ну же, пойдём на праздник!" },
        { ru: "Biraz dinlenelim mi?", en: "Может, немного отдохнём?" },
      ],
    },
  ],
  tasks: [
    choice("trma5-t1", "Как сказать «Давай пойдём»?", [
      ["Gidelim!", true],
      ["Gittik!", false],
      ["Gidiyorlar!", false],
    ], { skill: "grammar" }),
    listen("trma5-t2", "Послушай. Что предлагают?", "Çay içelim mi?", [
      ["Выпить чаю.", true],
      ["Потанцевать.", false],
      ["Пойти домой.", false],
    ]),
    match("trma5-t3", "Соедини пары.", [
      ["şenlik", "гулянье"],
      ["İyi bayramlar!", "С праздником!"],
      ["Size de!", "И вас тоже!"],
      ["eğlenceli", "весёлый"],
    ], { skill: "words" }),
    spell("trma5-t4", "Собери из букв слово «музыка».", "müzik"),
    speak("trma5-t5", "İyi bayramlar!", "Size de! İyi bayramlar!", "И вас тоже! С праздником!", { help: "Ответь вслух на поздравление." }),
    choice("trma5-t6", "Как спросить «Скидка есть?»", [
      ["İndirim var mı?", true],
      ["İndirim mi var değil?", false],
      ["İndirim nerede?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "telkari-kutu",
    itemName: "Серебряная шкатулочка",
    itemNameRu: "Telkari kutu",
    ru: "Yaşasın! Bir telkari kutu!",
    en: "Ура! Серебряная шкатулочка!",
    a11y: "Крошечная шкатулка из тонкой серебряной проволоки, сплетённой в кружево.",
    image: p("telkari-kutu"),
    steps: ["На празднике мастер показывает серебряное кружево — телькари.", "Он дарит Мурзику крошечную шкатулочку.", "«Küçük sırlar için.» — «Для маленьких секретов.»", "Мурзик кладёт в неё открытки бабушки Аси."],
    bridge: "Поздно вечером Мурзик выходит на террасу. А там кто-то сидит…",
  },
};

const mardin6: Lesson = {
  id: "tr-a1-mardin-6",
  level: "A1",
  cityId: "tr-mardin",
  number: 6,
  title: "Кот в шляпе",
  minutes: 7,
  goals: ["Понять короткий разговор с незнакомцем", "Сказать «подождите!», «не уходите!»", "Прочитать записку"],
  vocabNote: "Benziyorsun — «ты похож». Yakında — «скоро». Görüşeceğiz — «мы увидимся». Not — «записка».",
  vocab: [
    v("trma6-1", "Affedersiniz… Tanışıyor muyuz?", "Простите… Мы знакомы?", "На террасе в лунном свете сидит старый белый кот в шляпе.", "Послушать Affedersiniz… Tanışıyor muyuz", p("l6-1")),
    v("trma6-2", "Asya'nın torunu musun?", "Ты внук Аси?", "Кот в шляпе медленно поворачивает голову.", "Послушать Asya'nın torunu musun", p("l6-2")),
    v("trma6-3", "Ona çok benziyorsun.", "Ты очень на неё похож.", "Глаза кота в шляпе тепло светятся.", "Послушать Ona çok benziyorsun", p("l6-3")),
    v("trma6-4", "Yakında görüşeceğiz.", "Скоро увидимся.", "Кот в шляпе встаёт и приподнимает шляпу.", "Послушать Yakında görüşeceğiz", p("l6-4")),
    v("trma6-5", "Bekleyin! Gitmeyin!", "Подождите! Не уходите!", "Мурзик тянет лапу, но на террасе уже пусто.", "Послушать Bekleyin! Gitmeyin", p("l6-5")),
    v("trma6-6", "Bir not bıraktı.", "Он оставил записку.", "На тахте лежит сложенный листок.", "Послушать Bir not bıraktı", p("l6-6")),
    v("trma6-7", "Ben de onu arıyorum.", "Я тоже её ищу.", "Крупно: записка аккуратным старинным почерком.", "Послушать Ben de onu arıyorum", p("l6-7")),
  ],
  dialogue: {
    title: "Ночная терраса",
    note: "Nereden biliyorsunuz — «откуда вы знаете». Kayboldu — «исчез». Kim vardı burada? — «кто здесь был?»",
    lines: [
      line("murzik", "Affedersiniz… Tanışıyor muyuz?", "Простите… Мы знакомы?"),
      line("lev", "Asya'nın torunu musun?", "Ты внук Аси?"),
      line("murzik", "Evet! Nereden biliyorsunuz?", "Да! Откуда вы знаете?"),
      line("lev", "Ona çok benziyorsun… Yakında görüşeceğiz.", "Ты так на неё похож… Скоро увидимся."),
      line("murzik", "Bekleyin! Gitmeyin!", "Подождите! Не уходите!"),
      line("tom", "Murzik! Kim vardı burada?", "Мурзик! Кто здесь был?"),
      line("murzik", "Kayboldu! Ama bir not bıraktı…", "Исчез! Но оставил записку…"),
    ],
    gist: choice("trma6-d1", "Что сказал кот в шляпе?", [
      ["Что Мурзик похож на Асю и они скоро увидятся.", true],
      ["Что Ася живёт в Мардине.", false],
      ["Что он — дедушка Мурзика.", false],
    ]),
  },
  grammar: [
    {
      title: "Просьбы на «вы»: -in, -ın / -meyin",
      paragraphs: [
        "Просьба на «вы» — -in / -ın / -un / -ün: bekleyin (подождите), gelin (идите сюда), oturun (садитесь), dinleyin (послушайте).",
        "«Не делайте» — -meyin / -mayın: gitmeyin (не уходите), korkmayın (не бойтесь), unutmayın (не забудьте).",
      ],
      examples: [
        { ru: "Lütfen bekleyin!", en: "Пожалуйста, подождите!" },
        { ru: "Korkmayın, ben arkadaşım.", en: "Не бойтесь, я друг." },
      ],
    },
  ],
  tasks: [
    choice("trma6-t1", "Как сказать «Не уходите!»?", [
      ["Gitmeyin!", true],
      ["Gidin!", false],
      ["Gitmiyorum!", false],
    ], { skill: "grammar" }),
    listen("trma6-t2", "Послушай. Что говорит кот в шляпе?", "Yakında görüşeceğiz.", [
      ["Скоро увидимся.", true],
      ["Мы давно не виделись.", false],
      ["Мы больше не увидимся.", false],
    ]),
    match("trma6-t3", "Соедини пары.", [
      ["yakında", "скоро"],
      ["benziyorsun", "ты похож"],
      ["not", "записка"],
      ["Bekleyin!", "Подождите!"],
    ], { skill: "words" }),
    missing("trma6-t4", "Какой буквы не хватает? («внук»)", "tor", "n", "u", ["u", "ü", "o"]),
    speak("trma6-t5", "Kimsin sen?", "Ben Murzik. Asya'nın torunuyum.", "Я Мурзик. Я внук Аси.", { help: "Представься вслух коту в шляпе." }),
    listen("trma6-t6", "Вспомни прошлый урок. Что говорят на празднике?", "İyi bayramlar!", [
      ["С праздником!", true],
      ["Счастливого пути!", false],
      ["Приятного аппетита!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sedir",
    itemName: "Тахта с подушками",
    itemNameRu: "Sedir",
    ru: "Yaşasın! Bir sedir!",
    en: "Ура! Тахта!",
    a11y: "Низкая тахта у окна, покрытая ковром, с вышитыми подушками. На ней лежит белая шерстинка.",
    image: p("sedir"),
    steps: ["Мурзик и Том переносят тахту с террасы в комнату.", "На ней ещё лежит белая шерстинка.", "Мурзик садится туда, где сидел кот в шляпе.", "И долго смотрит на звёзды."],
    bridge: "Завтра — экзамен A1. Мурзик кладёт записку под подушку.",
  },
};

const mardin7: Lesson = {
  id: "tr-a1-mardin-7",
  level: "A1",
  cityId: "tr-mardin",
  number: 7,
  title: "Экзамен A1",
  minutes: 9,
  goals: ["Пройти экзамен A1", "Понять записку кота в шляпе", "Отпраздновать конец уровня"],
  vocabNote: "Sınav — «экзамен». Tebrikler — «поздравляю». Gurur duymak — «гордиться». Başardın — «у тебя получилось». Seviye — «уровень».",
  vocab: [
    v("trma7-1", "A1 sınavı", "экзамен A1", "Мурзик за столом с карандашом, на листе крупно: A1.", "Послушать A1 sınavı", p("l7-1")),
    v("trma7-2", "Seninle gurur duyuyoruz!", "Мы тобой гордимся!", "Том и Джан аплодируют.", "Послушать Seninle gurur duyuyoruz", p("l7-2")),
    v("trma7-3", "Başardın!", "У тебя получилось!", "Мурзик поднимает над головой лист с большой пятёркой.", "Послушать Başardın", p("l7-3")),
    v("trma7-4", "A1 seviyesi bitti.", "Уровень A1 закончен.", "Карта Турции, все города отмечены лапками.", "Послушать A1 seviyesi bitti", p("l7-4")),
    v("trma7-5", "Notta ne yazıyor?", "Что написано в записке?", "Мурзик разворачивает записку.", "Послушать Notta ne yazıyor", p("l7-5")),
    v("trma7-6", "Safranbolu", "Сафранболу", "Старый город с белыми деревянными домами в зелёной долине.", "Послушать Safranbolu", p("l7-6")),
    v("trma7-7", "Yeni bir yolculuk başlıyor!", "Начинается новое путешествие!", "Мурзик с чемоданом на пороге, впереди дорога.", "Послушать Yeni bir yolculuk başlıyor", p("l7-7")),
  ],
  dialogue: {
    title: "Записка",
    note: "Altında — «внизу, под ним». L. — первая буква имени кота в шляпе.",
    lines: [
      line("tom", "Tebrikler, Murzik! Sınavı geçtin! Başardın! Seninle gurur duyuyoruz!", "Поздравляю, Мурзик! Ты сдал экзамен! У тебя получилось! Мы тобой гордимся!"),
      line("can", "A1 seviyesi bitti! Şimdi ne yapacaksın?", "Уровень A1 закончен! Что теперь будешь делать?"),
      line("murzik", "Bakın, notu okuyorum: «Ben de onu arıyorum. — L.»", "Смотрите, читаю записку: «Я тоже её ищу. — Л.»"),
      line("tom", "Altında bir şey daha var…", "Внизу ещё что-то есть…"),
      line("murzik", "«Safranbolu.» Sıradaki şehrimiz!", "«Сафранболу». Наш следующий город!"),
      line("tom", "Yeni bir yolculuk başlıyor!", "Начинается новое путешествие!"),
    ],
    gist: choice("trma7-d1", "Какой город написан в записке?", [
      ["Сафранболу.", true],
      ["Стамбул.", false],
      ["Париж.", false],
    ]),
  },
  grammar: [
    {
      title: "Весь A1 одним взглядом",
      paragraphs: [
        "Настоящее: geliyorum (иду). Прошлое: geldim (пришёл). Будущее: geleceğim (приду). «Давай»: gelelim. Просьба: gel / gelin. Отрицание: gelmiyorum, gelmedim.",
        "Окончания места: -de (где), -e (куда), -den (откуда). Есть / нет: var / yok. Вопрос: mı, mi, mu, mü.",
      ],
      examples: [
        { ru: "İki gün önce Mardin'e geldik, yarın Safranbolu'ya gideceğiz.", en: "Два дня назад мы приехали в Мардин, а завтра поедем в Сафранболу." },
        { ru: "Türkçe öğreniyorum ve çok seviyorum!", en: "Я учу турецкий и очень его люблю!" },
      ],
    },
  ],
  tasks: [
    listen("trma7-t1", "Аудиоэкзамен. О чём рассказывает Мурзик?", "Önce Paris'teydim. Sonra Türkiye'ye geldim. Türkiye'de on dört şehir gördüm. Büyükannemi henüz bulmadım, ama yakında bulacağım!", [
      ["Он был в Париже, увидел четырнадцать городов Турции и скоро найдёт бабушку.", true],
      ["Он живёт в Мардине и не хочет никуда ехать.", false],
      ["Он нашёл бабушку в Париже.", false],
    ]),
    choice("trma7-t2", "Экзамен. Как сказать «Завтра мы поедем в Сафранболу»?", [
      ["Yarın Safranbolu'ya gideceğiz.", true],
      ["Yarın Safranbolu'da gittik.", false],
      ["Dün Safranbolu'ya gideceğiz.", false],
    ], { skill: "grammar" }),
    match("trma7-t3", "Экзамен. Соедини пары.", [
      ["geldim", "я пришёл"],
      ["geliyorum", "я иду"],
      ["geleceğim", "я приду"],
      ["gelmedim", "я не пришёл"],
    ], { skill: "words" }),
    spell("trma7-t4", "Экзамен. Собери из букв слово «экзамен».", "sınav"),
    speak("trma7-t5", "Türkçe öğreniyor musun?", "Evet, Türkçe öğreniyorum. A1 seviyesi bitti!", "Да, я учу турецкий. Уровень A1 закончен!", { help: "Скажи вслух, что уровень A1 пройден." }),
    script("trma7-t6", "Экзамен A1. Вспомни всё путешествие и закончи разговоры.", [
      { speaker: "Айше-тейзе", text: "Merhaba! Nasılsın?" },
      { speaker: "Ты", answer: "İyiyim, teşekkürler. Siz nasılsınız?", options: ["İyiyim, teşekkürler. Siz nasılsınız?", "Hoşça kal!", "Afiyet olsun!"] },
      { speaker: "Официант", text: "Ne istersiniz?" },
      { speaker: "Ты", answer: "Bir çay, lütfen.", options: ["Bir çay, lütfen.", "Bir çaylar, lütfen.", "Çay yok."] },
      { speaker: "Прохожая", text: "Nereye gidiyorsun?" },
      { speaker: "Ты", answer: "Müzeye gidiyorum.", options: ["Müzeye gidiyorum.", "Müzede gidiyorum.", "Müzeden gidiyorum."] },
      { speaker: "Элиф", text: "Dün ne yaptın?" },
      { speaker: "Ты", answer: "Çarşıya gittim.", options: ["Çarşıya gittim.", "Çarşıya gideceğim.", "Çarşı gitti."] },
      { speaker: "Джан", text: "Yarın ne yapacaksın?" },
      { speaker: "Ты", answer: "Yarın Safranbolu'ya gideceğim.", options: ["Yarın Safranbolu'ya gideceğim.", "Dün Safranbolu'ya gittim.", "Safranbolu yok."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fener",
    itemName: "Кованый фонарь",
    itemNameRu: "Fener",
    ru: "Yaşasın! Bir fener!",
    en: "Ура! Фонарь!",
    a11y: "Кованый медный фонарь с цветными стёклышками. Внутри горит свечка, на стенах — разноцветные узоры.",
    image: p("fener"),
    steps: ["Джан протягивает кованый фонарь с цветными стёклышками.", "«Yolunu aydınlatsın!» — «Пусть освещает твой путь!»", "Мурзик зажигает свечку — по стенам бегут цветные узоры.", "Фонарь — самая главная вещь Мардина."],
    bridge: "Уровень A1 пройден! Впереди — Сафранболу и уровень A2.",
  },
};

const story: CityStory = {
  home: {
    name: "Каменный дом с террасой",
    nameRu: "Taş ev",
    image: p("home"),
    a11y: "Пустая комната в каменном доме медового цвета: арки, высокий потолок, дверь на террасу. За террасой бескрайняя равнина. Посередине чемодан Мурзика.",
  },
  keepsakeId: "fener",
  welcomeRu: "Merhaba, Mardin!",
  welcomeEn: "Привет, Мардин!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том перед Мардином: медовые каменные дома ступенями поднимаются по склону горы, внизу бескрайняя равнина.",
  departureImage: p("departure"),
  departureA11y: "Джан с фотоаппаратом машет на прощание на автовокзале Мардина.",
  finale: [
    {
      image: p("finale-1"),
      a11y: "Мурзик стоит в своей мардинской комнате: тахта с подушками, подзорная труба у окна, кружка с котом, серебряная шкатулочка. В лапах — кованый фонарь с цветными стёклами.",
      lines: [
        { en: "В каменном доме тепло даже ночью." },
        { en: "Мурзик берёт с собой самое любимое: кованый фонарь." },
      ],
    },
    {
      image: p("finale-2"),
      a11y: "Мурзик и Том на террасе на закате подняли руки вверх. За ними — длинная дорога с четырнадцатью маленькими лапками-отметками.",
      lines: [
        { ru: "Mardin tamamlandı!", en: "Мардин пройден!" },
        { en: "7 / 7 уроков" },
        { ru: "A1 seviyesi tamamlandı! On dört şehir!", en: "Уровень A1 пройден! Четырнадцать городов!" },
      ],
    },
    {
      image: p("suitcase"),
      a11y: "Раскрытый чемодан Мурзика: медная джезва, стаканчики-тюльпаны, шёлковый платок, часы, хлопковое полотенце, назар, маленький саз, мозаичная лампа, глиняный кувшин, белый плед, двойной чайник, тарелка для завтрака, медный поднос и кованый фонарь. В серебряной шкатулочке — открытки бабушки Аси и записка с подписью «L.».",
      lines: [
        { en: "Четырнадцать городов. Четырнадцать любимых вещей. Открытки бабушки Аси. И записка от кота в шляпе." },
        { ru: "Ben de onu arıyorum.", en: "Я тоже её ищу." },
        { en: "Мурзик закрывает чемодан. «Safranbolu, — говорит он. — Поехали»." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Джан машет на прощание.",
      lines: [
        { ru: "Hoşça kal, Mardin! Hoşça kal, Can!", en: "До свидания, Мардин! Пока, Джан!" },
        { ru: "Sıradaki durak: Safranbolu!", en: "Следующая остановка: Сафранболу!" },
      ],
    },
    {
      image: p("flight"),
      a11y: "Самолёт летит на северо-запад через всю Турцию.",
      lines: [{ ru: "Mardin → Safranbolu", en: "Мардин → Сафранболу" }],
    },
    {
      image: pic("tr/safranbolu/arrival"),
      a11y: "Мурзик и Том в Сафранболу: белые деревянные дома с тёмными балками в зелёной долине, мощёные улочки.",
      lines: [
        { ru: "Merhaba, Safranbolu!", en: "Привет, Сафранболу!" },
        { ru: "A2 başlıyor!", en: "Начинается A2!" },
      ],
    },
  ],
};

export const trMardin = {
  id: "tr-mardin",
  name: "Мардин",
  nameTr: "Mardin",
  lessons: [mardin1, mardin2, mardin3, mardin4, mardin5, mardin6, mardin7],
  story,
};
