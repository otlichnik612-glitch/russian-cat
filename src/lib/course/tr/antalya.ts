import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Анталья · «Свободное время» · люблю делать, умею, спорт, концерт в Аспендосе, старый музыкант, тихий вечер, концерт. */

const p = (name: string) => pic(`tr/antalya/${name}`);

const antalya1: Lesson = {
  id: "tr-a1-antalya-1",
  level: "A1",
  cityId: "tr-antalya",
  number: 1,
  title: "Что ты любишь делать?",
  minutes: 7,
  goals: ["Спросить, что человек любит делать", "Сказать «я люблю плавать, рисовать»", "Сказать, что не любишь"],
  vocabNote: "Boş zaman — «свободное время», буквально «пустое время».",
  vocab: [
    v("tran1-1", "Boş zamanında ne yapıyorsun?", "Что ты делаешь в свободное время?", "Том сидит во дворике под апельсиновым деревом и с интересом смотрит на Мурзика.", "Послушать Boş zamanında ne yapıyorsun", p("l1-1")),
    v("tran1-2", "Yüzmeyi seviyorum.", "Я люблю плавать.", "Мурзик плывёт в прозрачном море у скал.", "Послушать Yüzmeyi seviyorum", p("l1-2")),
    v("tran1-3", "Resim yapmayı seviyorum.", "Я люблю рисовать.", "Мурзик рисует апельсиновое дерево в альбоме.", "Послушать Resim yapmayı seviyorum", p("l1-3")),
    v("tran1-4", "Kitap okumayı seviyorum.", "Я люблю читать.", "Том читает книгу в плетёном кресле.", "Послушать Kitap okumayı seviyorum", p("l1-4")),
    v("tran1-5", "Müzik dinlemeyi seviyorum.", "Я люблю слушать музыку.", "Мурзик в наушниках покачивает головой в такт.", "Послушать Müzik dinlemeyi seviyorum", p("l1-5")),
    v("tran1-6", "Dans etmeyi sevmiyorum.", "Я не люблю танцевать.", "Том неуклюже пытается танцевать и смущённо машет руками.", "Послушать Dans etmeyi sevmiyorum", p("l1-6")),
    v("tran1-7", "Ne yapmayı seviyorsun?", "Что ты любишь делать?", "Мурзик с альбомом в лапах вопросительно смотрит на Тома.", "Послушать Ne yapmayı seviyorsun", p("l1-7")),
  ],
  dialogue: {
    title: "Во дворике",
    note: "Göster! — «Покажи!». Anneannen gibi — «как твоя бабушка».",
    lines: [
      line("tom", "Murzik, boş zamanında ne yapıyorsun?", "Мурзик, что ты делаешь в свободное время?"),
      line("murzik", "Yüzmeyi seviyorum. Ve… resim yapmayı seviyorum!", "Люблю плавать. И… люблю рисовать!"),
      line("tom", "Resim mi? Göster!", "Рисовать? Покажи!"),
      line("murzik", "Bak: portakal ağacı.", "Смотри: апельсиновое дерево."),
      line("tom", "Çok güzel! Anneannen gibi!", "Очень красиво! Как у твоей бабушки!"),
      line("murzik", "Sen ne yapmayı seviyorsun?", "А ты что любишь делать?"),
      line("tom", "Fotoğraf çekmeyi ve müzik dinlemeyi seviyorum. Ama dans etmeyi sevmiyorum!", "Люблю фотографировать и слушать музыку. А вот танцевать не люблю!"),
    ],
    gist: choice("tran1-d1", "Что любит делать Мурзик?", [
      ["Плавать и рисовать.", true],
      ["Танцевать.", false],
      ["Читать.", false],
    ]),
  },
  grammar: [
    {
      title: "Люблю делать: -meyi seviyorum",
      paragraphs: [
        "«Люблю + действие» — глагол на -mek / -mak с окончанием -i: yüzmek → yüzmeyi seviyorum (люблю плавать), okumak → okumayı seviyorum (люблю читать).",
        "«Не люблю» — sevmiyorum: Dans etmeyi sevmiyorum. Вопрос: Ne yapmayı seviyorsun?",
      ],
      examples: [
        { ru: "Resim yapmayı seviyorum.", en: "Я люблю рисовать." },
        { ru: "Tom dans etmeyi sevmiyor.", en: "Том не любит танцевать." },
      ],
    },
  ],
  tasks: [
    choice("tran1-t1", "Как сказать «Я люблю плавать»?", [
      ["Yüzmeyi seviyorum.", true],
      ["Yüzmek seviyorum.", false],
      ["Yüzüyorum seviyorum.", false],
    ], { skill: "grammar" }),
    listen("tran1-t2", "Послушай. Что не любит говорящий?", "Dans etmeyi sevmiyorum.", [
      ["Танцевать.", true],
      ["Плавать.", false],
      ["Читать.", false],
    ]),
    match("tran1-t3", "Соедини пары.", [
      ["yüzmek", "плавать"],
      ["okumak", "читать"],
      ["dinlemek", "слушать"],
      ["dans etmek", "танцевать"],
    ], { skill: "words" }),
    missing("tran1-t4", "Какой буквы не хватает? («я люблю»)", "sev", "yorum", "i", ["i", "ı", "e"]),
    speak("tran1-t5", "Boş zamanında ne yapıyorsun?", "Kitap okumayı ve yüzmeyi seviyorum.", "Я люблю читать и плавать.", { help: "Расскажи вслух, что любишь делать." }),
    choice("tran1-t6", "Как сказать «Мы заблудились!»?", [
      ["Kaybolduk!", true],
      ["Kayboldum!", false],
      ["Kaybolacağız!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sandalye",
    itemName: "Плетёный стул",
    itemNameRu: "Hasır sandalye",
    ru: "Yaşasın! Hasır bir sandalye!",
    en: "Ура! Плетёный стул!",
    a11y: "Плетёный стул стоит во дворике под апельсиновым деревом, на нём альбом и карандаши.",
    image: p("sandalye"),
    steps: ["Мурзик ставит плетёный стул под апельсиновым деревом.", "Кладёт на него альбом.", "Садится рисовать.", "Тень, тишина и запах апельсинов."],
    bridge: "Вечером из соседнего двора доносится музыка. Кто-то играет на сазе…",
  },
};

const antalya2: Lesson = {
  id: "tr-a1-antalya-2",
  level: "A1",
  cityId: "tr-antalya",
  number: 2,
  title: "Ты умеешь играть на сазе?",
  minutes: 7,
  goals: ["Спросить, умеет ли человек что-то делать", "Сказать «умею» и «не умею»", "Попросить научить"],
  vocabNote: "Saz — турецкий струнный инструмент с длинным грифом. Самый известный саз называется bağlama. Usta — «мастер»: так уважительно называют музыкантов и ремесленников.",
  vocab: [
    v("tran2-1", "saz", "саз", "Деревянный саз с длинным грифом прислонён к каменной стене.", "Послушать saz", p("l2-1")),
    v("tran2-2", "Saz çalabiliyor musun?", "Ты умеешь играть на сазе?", "Пожилой музыкант протягивает Мурзику саз.", "Послушать Saz çalabiliyor musun", p("l2-2")),
    v("tran2-3", "Evet, çalabiliyorum.", "Да, умею.", "Хасан-уста уверенно перебирает струны.", "Послушать Evet, çalabiliyorum", p("l2-3")),
    v("tran2-4", "Hayır, çalamıyorum.", "Нет, не умею.", "Мурзик держит саз вверх ногами и смущённо улыбается.", "Послушать Hayır, çalamıyorum", p("l2-4")),
    v("tran2-5", "Biraz şarkı söyleyebiliyorum.", "Я немного умею петь.", "Мурзик поёт, закрыв глаза, у него над головой ноты.", "Послушать Biraz şarkı söyleyebiliyorum", p("l2-5")),
    v("tran2-6", "Öğretir misiniz?", "Научите?", "Том с надеждой складывает руки перед Хасаном-устой.", "Послушать Öğretir misiniz", p("l2-6")),
    v("tran2-7", "şarkı", "песня", "Из окна дома вылетают нарисованные ноты.", "Послушать şarkı", p("l2-7")),
  ],
  dialogue: {
    title: "Музыка за стеной",
    note: "Evladım — «дитя моё», так ласково говорят пожилые люди. Önce dinleyin — «сначала послушайте».",
    lines: [
      line("murzik", "Merhaba! Çok güzel çalıyorsunuz!", "Здравствуйте! Вы так красиво играете!"),
      line("hasan", "Teşekkür ederim, evladım. Sen saz çalabiliyor musun?", "Спасибо, дитя моё. А ты умеешь играть на сазе?"),
      line("murzik", "Hayır, çalamıyorum. Ama biraz şarkı söyleyebiliyorum.", "Нет, не умею. Но немного умею петь."),
      line("hasan", "Gel, otur. Bu saz çok eski.", "Иди, садись. Этот саз очень старый."),
      line("tom", "Bize öğretir misiniz?", "Научите нас?"),
      line("hasan", "Tabii! Önce dinleyin.", "Конечно! Сначала послушайте."),
    ],
    gist: choice("tran2-d1", "Что умеет Мурзик?", [
      ["Немного петь.", true],
      ["Играть на сазе.", false],
      ["Ничего.", false],
    ]),
  },
  grammar: [
    {
      title: "Умею: -ebiliyorum",
      paragraphs: [
        "«Умею, могу» — основа глагола и -abiliyorum / -ebiliyorum: çal-abiliyorum — умею играть, söyle-yebiliyorum — умею петь.",
        "«Не умею» — -amıyorum / -emiyorum: çal-amıyorum — не умею играть, söyle-yemiyorum — не умею петь.",
      ],
      examples: [
        { ru: "Hasan Usta saz çalabiliyor.", en: "Хасан-уста умеет играть на сазе." },
        { ru: "Ben dans edemiyorum.", en: "Я не умею танцевать." },
      ],
    },
  ],
  tasks: [
    choice("tran2-t1", "Как сказать «Я не умею играть»?", [
      ["Çalamıyorum.", true],
      ["Çalmıyorum.", false],
      ["Çalabiliyorum.", false],
    ], { skill: "grammar" }),
    listen("tran2-t2", "Послушай. Что умеет говорящий?", "Gitar çalabiliyorum ama şarkı söyleyemiyorum.", [
      ["Играть на гитаре, но не петь.", true],
      ["Петь, но не играть.", false],
      ["Ни петь, ни играть.", false],
    ]),
    match("tran2-t3", "Соедини пары.", [
      ["şarkı", "песня"],
      ["çalmak", "играть на инструменте"],
      ["söylemek", "петь, говорить"],
      ["öğretmek", "учить кого-то"],
    ], { skill: "words" }),
    spell("tran2-t4", "Собери из букв слово «песня».", "şarkı"),
    speak("tran2-t5", "Şarkı söyleyebiliyor musun?", "Evet, biraz söyleyebiliyorum.", "Да, немного умею.", { help: "Ответь вслух." }),
    choice("tran2-t6", "Как сказать «Я люблю читать»?", [
      ["Kitap okumayı seviyorum.", true],
      ["Kitap okumak seviyorum.", false],
      ["Kitap okuyorum seviyorum.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "radyo",
    itemName: "Старое радио",
    itemNameRu: "Radyo",
    ru: "Yaşasın! Eski bir radyo!",
    en: "Ура! Старое радио!",
    a11y: "Деревянный ламповый радиоприёмник с круглыми ручками. Из него льётся музыка.",
    image: p("radyo"),
    steps: ["Хасан-уста приносит старое радио.", "«Türkü dinle!» — «Слушай народные песни!»", "Мурзик крутит ручку.", "В комнате звучит саз."],
    bridge: "Хасан-уста говорит: «Утром я плаваю, а вечером играю. А вы занимаетесь спортом?»",
  },
};

const antalya3: Lesson = {
  id: "tr-a1-antalya-3",
  level: "A1",
  cityId: "tr-antalya",
  number: 3,
  title: "Ты занимаешься спортом?",
  minutes: 7,
  goals: ["Спросить про спорт", "Сказать, как часто: каждый день, иногда, никогда", "Сказать «два раза в неделю»"],
  vocabNote: "Hiç с отрицанием значит «никогда, совсем»: Hiç koşmuyorum. — Я никогда не бегаю.",
  vocab: [
    v("tran3-1", "Spor yapıyor musun?", "Ты занимаешься спортом?", "Том в спортивной форме делает зарядку на пляже.", "Послушать Spor yapıyor musun", p("l3-1")),
    v("tran3-2", "her gün", "каждый день", "Семь листков календаря, на каждом нарисован пловец.", "Послушать her gün", p("l3-2")),
    v("tran3-3", "bazen", "иногда", "На календаре только два-три пловца в разные дни.", "Послушать bazen", p("l3-3")),
    v("tran3-4", "hiç", "совсем; с отрицанием — никогда", "Пустой календарь и Мурзик, спящий на шезлонге.", "Послушать hiç", p("l3-4")),
    v("tran3-5", "Haftada iki kez yüzüyorum.", "Я плаваю два раза в неделю.", "Мурзик показывает два пальца на фоне моря.", "Послушать Haftada iki kez yüzüyorum", p("l3-5")),
    v("tran3-6", "futbol", "футбол", "Мальчишки гоняют мяч на пляже.", "Послушать futbol", p("l3-6")),
    v("tran3-7", "koşmak", "бегать", "Том бежит по набережной под пальмами.", "Послушать koşmak", p("l3-7")),
  ],
  dialogue: {
    title: "Утро на пляже",
    note: "Oynamak — «играть» (в игру, в мяч). Çalmak — «играть» на инструменте.",
    lines: [
      line("hasan", "Günaydın! Ben her sabah yüzüyorum.", "Доброе утро! Я плаваю каждый день по утрам."),
      line("murzik", "Her gün mü? Ben bazen yüzüyorum.", "Каждый день? А я иногда."),
      line("tom", "Ben haftada iki kez koşuyorum.", "А я бегаю два раза в неделю."),
      line("hasan", "Ya futbol? Futbol oynuyor musunuz?", "А футбол? В футбол играете?"),
      line("murzik", "Hayır, hiç oynamıyorum! Ama topla oynamayı seviyorum.", "Нет, никогда не играю! Но с мячом поиграть люблю."),
      line("hasan", "Al, bu top senin!", "Держи, этот мяч твой!"),
    ],
    gist: choice("tran3-d1", "Как часто плавает Хасан-уста?", [
      ["Каждый день.", true],
      ["Иногда.", false],
      ["Никогда.", false],
    ]),
  },
  grammar: [
    {
      title: "Как часто?",
      paragraphs: [
        "Her gün — каждый день, sık sık — часто, bazen — иногда. «Никогда» — hiç и глагол с отрицанием: Hiç koşmuyorum.",
        "«Сколько раз» — kez: haftada iki kez (два раза в неделю), ayda bir kez (раз в месяц). Haftada — «в неделю», ayda — «в месяц».",
      ],
      examples: [
        { ru: "Her gün yüzüyorum.", en: "Я плаваю каждый день." },
        { ru: "Hiç futbol oynamıyorum.", en: "Я никогда не играю в футбол." },
      ],
    },
  ],
  tasks: [
    choice("tran3-t1", "Как сказать «Я никогда не бегаю»?", [
      ["Hiç koşmuyorum.", true],
      ["Hiç koşuyorum.", false],
      ["Her gün koşmuyorum.", false],
    ], { skill: "grammar" }),
    listen("tran3-t2", "Послушай. Как часто?", "Haftada üç kez.", [
      ["Три раза в неделю.", true],
      ["Каждый день.", false],
      ["Раз в месяц.", false],
    ]),
    match("tran3-t3", "Соедини пары.", [
      ["her gün", "каждый день"],
      ["bazen", "иногда"],
      ["futbol", "футбол"],
      ["koşmak", "бегать"],
    ], { skill: "words" }),
    missing("tran3-t4", "Какой буквы не хватает? («иногда»)", "baz", "n", "e", ["e", "a", "ı"]),
    speak("tran3-t5", "Spor yapıyor musun?", "Evet, haftada iki kez yüzüyorum.", "Да, плаваю два раза в неделю.", { help: "Ответь вслух, занимаешься ли ты спортом." }),
    choice("tran3-t6", "Как сказать «Я умею петь»?", [
      ["Şarkı söyleyebiliyorum.", true],
      ["Şarkı söyleyemiyorum.", false],
      ["Şarkı söylemeyi.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "top",
    itemName: "Мяч",
    itemNameRu: "Top",
    ru: "Yaşasın! Bir top!",
    en: "Ура! Мяч!",
    a11y: "Полосатый пляжный мяч лежит в тени апельсинового дерева.",
    image: p("top"),
    steps: ["Хасан-уста дарит Мурзику полосатый мяч.", "Мурзик подбрасывает его.", "Ловит носом!", "Мяч отдыхает во дворике под деревом."],
    bridge: "Вечером в древнем театре Аспендоса — концерт!",
  },
};

const antalya4: Lesson = {
  id: "tr-a1-antalya-4",
  level: "A1",
  cityId: "tr-antalya",
  number: 4,
  title: "Концерт в Аспендосе",
  minutes: 7,
  goals: ["Спросить, понравилось ли", "Сказать «мне очень понравилось» и «совсем не понравилось»", "Похвалить: «чудесно!»"],
  vocabNote: "Аспендос — древний римский театр под Антальей. Летом там до сих пор проходят концерты и балет.",
  vocab: [
    v("tran4-1", "antik tiyatro", "античный театр", "Огромный каменный античный театр с рядами ступеней полукругом.", "Послушать antik tiyatro", p("l4-1")),
    v("tran4-2", "konser", "концерт", "На древней сцене оркестр, зрители на каменных ступенях.", "Послушать konser", p("l4-2")),
    v("tran4-3", "sahne", "сцена", "Освещённая сцена с колоннами в вечернем свете.", "Послушать sahne", p("l4-3")),
    v("tran4-4", "Beğendin mi?", "Тебе понравилось?", "Том после концерта с улыбкой спрашивает Мурзика.", "Послушать Beğendin mi", p("l4-4")),
    v("tran4-5", "Çok beğendim!", "Мне очень понравилось!", "Мурзик сияет и хлопает в ладоши.", "Послушать Çok beğendim", p("l4-5")),
    v("tran4-6", "Hiç beğenmedim.", "Мне совсем не понравилось.", "Том морщится и машет рукой.", "Послушать Hiç beğenmedim", p("l4-6")),
    v("tran4-7", "Harika!", "Чудесно!", "Над театром взлетает салют.", "Послушать Harika", p("l4-7")),
  ],
  dialogue: {
    title: "Под звёздами",
    note: "Dansları — «танцы» (кого? что?). Çünkü — «потому что».",
    lines: [
      line("tom", "Vay! Bu antik tiyatro çok büyük!", "Ого! Какой огромный этот античный театр!"),
      line("murzik", "Ve çok eski. Sahne çok güzel!", "И очень древний. А сцена какая красивая!"),
      line("tom", "Murzik, konseri beğendin mi?", "Мурзик, тебе понравился концерт?"),
      line("murzik", "Çok beğendim! Harika!", "Очень понравился! Чудесно!"),
      line("tom", "Ben de. Ama dansları hiç beğenmedim.", "Мне тоже. А вот танцы мне совсем не понравились."),
      line("murzik", "Neden? Danslar çok güzeldi!", "Почему? Танцы были такие красивые!"),
      line("tom", "Çünkü ben dans etmeyi sevmiyorum!", "Потому что я не люблю танцевать!"),
    ],
    gist: choice("tran4-d1", "Понравился ли Мурзику концерт?", [
      ["Очень понравился.", true],
      ["Совсем не понравился.", false],
      ["Он не ходил на концерт.", false],
    ]),
  },
  grammar: [
    {
      title: "Понравилось: beğendim",
      paragraphs: [
        "Beğenmek — «нравиться, одобрять». Мне понравилось — beğendim, тебе понравилось? — beğendin mi?",
        "Обрати внимание: по-турецки «я одобрил концерт» — Konseri beğendim. Не понравилось — beğenmedim.",
      ],
      examples: [
        { ru: "Konseri çok beğendim.", en: "Мне очень понравился концерт." },
        { ru: "Filmi beğendin mi? — Hiç beğenmedim.", en: "Тебе понравился фильм? — Совсем не понравился." },
      ],
    },
  ],
  tasks: [
    choice("tran4-t1", "Как спросить «Тебе понравилось?»", [
      ["Beğendin mi?", true],
      ["Beğendim mi?", false],
      ["Beğeniyor mu musun?", false],
    ], { skill: "grammar" }),
    listen("tran4-t2", "Послушай. Понравилось ли?", "Hiç beğenmedim.", [
      ["Совсем не понравилось.", true],
      ["Очень понравилось.", false],
      ["Немного понравилось.", false],
    ]),
    match("tran4-t3", "Соедини пары.", [
      ["sahne", "сцена"],
      ["konser", "концерт"],
      ["Harika!", "Чудесно!"],
      ["antik", "древний"],
    ], { skill: "words" }),
    missing("tran4-t4", "Какой буквы не хватает? («понравилось»)", "Be", "endim", "ğ", ["ğ", "g", "y"]),
    speak("tran4-t5", "Konseri beğendin mi?", "Çok beğendim! Harika!", "Очень понравился! Чудесно!", { help: "Ответь вслух." }),
    choice("tran4-t6", "Что значит bazen?", [
      ["иногда", true],
      ["каждый день", false],
      ["никогда", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "notalar",
    itemName: "Старые ноты",
    itemNameRu: "Notalar",
    ru: "Yaşasın! Eski notalar!",
    en: "Ура! Старые ноты!",
    a11y: "Пожелтевшие листы с нотами, перевязанные лентой. В уголке верхнего листа нарисован крошечный рыжий котик.",
    image: p("notalar"),
    steps: ["После концерта к ним подходит Хасан-уста.", "Он протягивает пожелтевшие ноты.", "В уголке нарисован крошечный рыжий котик!", "Мурзик замирает: это рисунок бабушки."],
    bridge: "«У этой песни есть имя, — тихо говорит Хасан-уста. — Её зовут Ася.»",
  },
};

const antalya5: Lesson = {
  id: "tr-a1-antalya-5",
  level: "A1",
  cityId: "tr-antalya",
  number: 5,
  title: "Старый музыкант",
  minutes: 8,
  goals: ["Понять рассказ о прошлом", "Сказать, что человек делал раньше: -ardı", "Задать вопрос «а что было потом?»"],
  vocabNote: "Anlatır mısınız? — «Расскажете?». Sonra ne oldu? — «А что было потом?»",
  vocab: [
    v("tran5-1", "Onu tanıyordum.", "Я её знал.", "Хасан-уста задумчиво смотрит на старую открытку в лапах Мурзика.", "Послушать Onu tanıyordum", p("l5-1")),
    v("tran5-2", "çok eskiden", "очень давно", "Старая выцветшая фотография того же дворика с апельсиновым деревом.", "Послушать çok eskiden", p("l5-2")),
    v("tran5-3", "Burada resim yapardı.", "Она здесь рисовала.", "Под апельсиновым деревом стоит старый мольберт.", "Послушать Burada resim yapardı", p("l5-3")),
    v("tran5-4", "Ben saz çalardım.", "А я играл на сазе.", "Молодой музыкант играет на сазе в том же дворике — давняя картинка в рамке.", "Послушать Ben saz çalardım", p("l5-4")),
    v("tran5-5", "Bu şarkının adı «Asya».", "Эта песня называется «Ася».", "Хасан-уста показывает на ноты, на первом листе написано одно имя.", "Послушать Bu şarkının adı Asya", p("l5-5")),
    v("tran5-6", "Bir mektup bekliyordu.", "Она ждала письмо.", "Пустой почтовый ящик на старой двери.", "Послушать Bir mektup bekliyordu", p("l5-6")),
    v("tran5-7", "Gelmedi.", "Оно не пришло.", "Хасан-уста грустно качает головой.", "Послушать Gelmedi", p("l5-7")),
  ],
  dialogue: {
    title: "Песня «Ася»",
    note: "Avlu — «дворик». Yazdım — «я написал». Galiba — «кажется».",
    lines: [
      line("hasan", "Asya'yı tanıyordum. Çok eskiden…", "Я знал Асю. Очень давно…"),
      line("murzik", "Gerçekten mi? Anlatır mısınız?", "Правда? Расскажете?"),
      line("hasan", "Bu avluda resim yapardı. Ben de saz çalardım.", "Она рисовала в этом дворике. А я играл на сазе."),
      line("hasan", "Bu şarkıyı onun için yazdım. Şarkının adı «Asya».", "Эту песню я написал для неё. Песня называется «Ася»."),
      line("tom", "Çok güzel bir şarkı.", "Очень красивая песня."),
      line("hasan", "Hep Moskova'dan bir mektup bekliyordu. Ama mektup gelmedi.", "Она всё ждала письмо из Москвы. Но письмо не пришло."),
      line("murzik", "Sonra ne oldu?", "А что было потом?"),
      line("hasan", "Bir gün gitti. Galiba Konya'ya…", "Однажды уехала. Кажется, в Конью…"),
    ],
    gist: choice("tran5-d1", "Как называется песня Хасана-усты?", [
      ["«Ася».", true],
      ["«Анталья».", false],
      ["«Море».", false],
    ]),
  },
  grammar: [
    {
      title: "Бывало, раньше: -ardı, -erdi",
      paragraphs: [
        "О том, что повторялось в прошлом, говорят с -ardı / -erdi (а у других глаголов -ırdı / -irdi / -urdu / -ürdü: gelirdi, okurdu): resim yap-ardı — (она) рисовала, saz çal-ardım — (я) играл. По-русски это прошедшее время несовершенного вида.",
        "А то, что случилось один раз, — уже знакомое -dı / -di: Bir gün gitti. — Однажды уехала.",
      ],
      examples: [
        { ru: "Asya her gün resim yapardı.", en: "Ася каждый день рисовала." },
        { ru: "Bir gün gitti.", en: "Однажды она уехала." },
      ],
    },
  ],
  tasks: [
    listen("tran5-t1", "Послушай. Что делала Ася?", "Burada resim yapardı.", [
      ["Рисовала здесь.", true],
      ["Играла на сазе.", false],
      ["Пела песни.", false],
    ]),
    choice("tran5-t2", "Как сказать «Я, бывало, играл на сазе»?", [
      ["Saz çalardım.", true],
      ["Saz çalacağım.", false],
      ["Saz çalıyorum.", false],
    ], { skill: "grammar" }),
    match("tran5-t3", "Соедини пары.", [
      ["eskiden", "раньше, давно"],
      ["mektup", "письмо"],
      ["beklemek", "ждать"],
      ["tanımak", "знать (кого-то)"],
    ], { skill: "words" }),
    missing("tran5-t4", "Какой буквы не хватает? («письмо»)", "mekt", "p", "u", ["u", "ü", "o"]),
    speak("tran5-t5", "Çocukken ne yapardın?", "Her gün top oynardım.", "Каждый день играл в мяч.", { help: "Расскажи вслух, что ты делал(а) в детстве." }),
    choice("tran5-t6", "Как сказать «Мне очень понравилось»?", [
      ["Çok beğendim.", true],
      ["Çok beğeneceğim.", false],
      ["Çok beğenmedim.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "portakal",
    itemName: "Корзина апельсинов",
    itemNameRu: "Portakal sepeti",
    ru: "Yaşasın! Bir sepet portakal!",
    en: "Ура! Корзина апельсинов!",
    a11y: "Плетёная корзинка, полная апельсинов с листиками, стоит на подоконнике.",
    image: p("portakal"),
    steps: ["Хасан-уста срывает апельсины с дерева.", "«Asya bu ağacı çok severdi.» — «Ася очень любила это дерево.»", "Он складывает их в корзинку.", "Пахнет солнцем!"],
    bridge: "Хасан-уста приглашает их вечером к себе на чай и нарды.",
  },
};

const antalya6: Lesson = {
  id: "tr-a1-antalya-6",
  level: "A1",
  cityId: "tr-antalya",
  number: 6,
  title: "Тихий вечер",
  minutes: 7,
  goals: ["Сказать, кто что делает сейчас", "Использовать -iyor со всеми лицами", "Поиграть в нарды по-турецки"],
  vocabNote: "Tavla — турецкие нарды. Шесть на кубике называют по-персидски — şeş, а пять по-турецки — beş. Şeş beş! — «шесть-пять!»",
  vocab: [
    v("tran6-1", "Ne yapıyorsunuz?", "Что вы делаете?", "Том заглядывает в освещённый фонарём дворик.", "Послушать Ne yapıyorsunuz", p("l6-1")),
    v("tran6-2", "Tavla oynuyoruz.", "Мы играем в нарды.", "Хасан-уста и Мурзик склонились над доской для нардов.", "Послушать Tavla oynuyoruz", p("l6-2")),
    v("tran6-3", "Çay içiyorum.", "Я пью чай.", "Мурзик держит стаканчик-тюльпан обеими лапами.", "Послушать Çay içiyorum", p("l6-3")),
    v("tran6-4", "Kitap okuyor.", "Он читает книгу.", "Том читает книгу под фонарём.", "Послушать Kitap okuyor", p("l6-4")),
    v("tran6-5", "Sıra sende!", "Твой ход!", "Хасан-уста протягивает Мурзику кубики.", "Послушать Sıra sende", p("l6-5")),
    v("tran6-6", "Kim kazandı?", "Кто выиграл?", "Том с любопытством смотрит на доску.", "Послушать Kim kazandı", p("l6-6")),
    v("tran6-7", "sakin bir akşam", "тихий вечер", "Дворик ночью: фонарь, апельсиновое дерево, звёзды.", "Послушать sakin bir akşam", p("l6-7")),
  ],
  dialogue: {
    title: "Нарды под фонарём",
    note: "Bravo! — «браво!», так говорят и в Турции.",
    lines: [
      line("tom", "Ne yapıyorsunuz?", "Что вы делаете?"),
      line("hasan", "Tavla oynuyoruz. Gel, otur!", "Играем в нарды. Иди, садись!"),
      line("murzik", "Ben de geliyorum!", "Я тоже иду!"),
      line("hasan", "Murzik, sıra sende!", "Мурзик, твой ход!"),
      line("murzik", "Tamam… Şeş beş!", "Сейчас… Шесть-пять!"),
      line("tom", "Bravo! Kim kazandı?", "Браво! Кто выиграл?"),
      line("hasan", "Murzik kazandı! Ne güzel, sakin bir akşam…", "Мурзик выиграл! Какой хороший, тихий вечер…"),
    ],
    gist: choice("tran6-d1", "Кто выиграл в нарды?", [
      ["Мурзик.", true],
      ["Хасан-уста.", false],
      ["Том.", false],
    ]),
  },
  grammar: [
    {
      title: "-iyor: все лица",
      paragraphs: [
        "Я — oynuyorum, ты — oynuyorsun, он, она — oynuyor, мы — oynuyoruz, вы — oynuyorsunuz, они — oynuyorlar.",
        "Часть -yor не меняется никогда, меняется только гласная перед ней: iç-iyor, oku-yor, oyn-uyor, gül-üyor.",
      ],
      examples: [
        { ru: "Biz tavla oynuyoruz, onlar çay içiyorlar.", en: "Мы играем в нарды, а они пьют чай." },
        { ru: "Sen ne yapıyorsun?", en: "А ты что делаешь?" },
      ],
    },
  ],
  tasks: [
    choice("tran6-t1", "Как сказать «Они играют»?", [
      ["Oynuyorlar.", true],
      ["Oynuyoruz.", false],
      ["Oynuyorsun.", false],
    ], { skill: "grammar" }),
    listen("tran6-t2", "Послушай. Что делает Том?", "Tom kitap okuyor.", [
      ["Читает книгу.", true],
      ["Пьёт чай.", false],
      ["Играет в нарды.", false],
    ]),
    match("tran6-t3", "Соедини пары.", [
      ["tavla", "нарды"],
      ["Sıra sende!", "Твой ход!"],
      ["kazanmak", "выигрывать"],
      ["sakin", "тихий, спокойный"],
    ], { skill: "words" }),
    spell("tran6-t4", "Собери из букв слово «нарды».", "tavla"),
    speak("tran6-t5", "Şu an ne yapıyorsun?", "Türkçe öğreniyorum!", "Я учу турецкий!", { help: "Скажи вслух, что ты делаешь прямо сейчас." }),
    listen("tran6-t6", "Вспомни рассказ Хасана-усты. Чего ждала Ася?", "Bir mektup bekliyordu.", [
      ["Письма.", true],
      ["Автобуса.", false],
      ["Концерта.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tavla",
    itemName: "Нарды",
    itemNameRu: "Tavla",
    ru: "Yaşasın! Bir tavla!",
    en: "Ура! Нарды!",
    a11y: "Деревянная доска для нардов с перламутровым узором, рядом два кубика.",
    image: p("tavla"),
    steps: ["Хасан-уста складывает доску.", "«Al, bu senin. Sen kazandın!» — «Держи, она твоя. Ты же выиграл!»", "Мурзик бережно несёт нарды домой.", "Теперь можно играть с Томом!"],
    bridge: "Завтра вечером Хасан-уста играет концерт в старом дворе Калеичи. И одна песня там — особая.",
  },
};

const antalya7: Lesson = {
  id: "tr-a1-antalya-7",
  level: "A1",
  cityId: "tr-antalya",
  number: 7,
  title: "Концерт Хасана-усты",
  minutes: 8,
  goals: ["Поддержать музыканта: «браво!», «ещё песню!»", "Сказать «я никогда не забуду»", "Вспомнить все слова Антальи"],
  vocabNote: "Alkışlamak — «аплодировать». Alkışlayalım! — «Давайте похлопаем!»",
  vocab: [
    v("tran7-1", "Konser nasıldı?", "Как прошёл концерт?", "Том после концерта убирает фотоаппарат и спрашивает Мурзика.", "Послушать Konser nasıldı", p("l7-1")),
    v("tran7-2", "Çok duygusaldı.", "Было очень трогательно.", "Мурзик вытирает слезинку, слушая музыку.", "Послушать Çok duygusaldı", p("l7-2")),
    v("tran7-3", "Alkışlayalım!", "Давайте похлопаем!", "Зрители во дворике аплодируют музыканту.", "Послушать Alkışlayalım", p("l7-3")),
    v("tran7-4", "Bravo!", "Браво!", "Мурзик вскакивает и хлопает высоко подняв лапы.", "Послушать Bravo", p("l7-4")),
    v("tran7-5", "Bir şarkı daha!", "Ещё одну песню!", "Зрители поднимают по одному пальцу: «Ещё одну!»", "Послушать Bir şarkı daha", p("l7-5")),
    v("tran7-6", "Bu senin için.", "Это тебе.", "Хасан-уста протягивает Мурзику маленький саз.", "Послушать Bu senin için", p("l7-6")),
    v("tran7-7", "Hiç unutmayacağım.", "Я никогда не забуду.", "Мурзик прижимает саз к груди и смотрит на Хасана-усту.", "Послушать Hiç unutmayacağım", p("l7-7")),
  ],
  dialogue: {
    title: "Песня для Аси",
    note: "Sen de çal — «играй и ты». Unutmayacağım — «не забуду»: -ma- (не) + -yacak (буду).",
    lines: [
      line("hasan", "Bu şarkı Asya için.", "Эта песня — для Аси."),
      line("tom", "Alkışlayalım! Bravo!", "Давайте похлопаем! Браво!"),
      line("murzik", "Bir şarkı daha!", "Ещё одну песню!"),
      line("hasan", "Murzik, bu saz senin için. Asya'nın şarkısını sen de çal.", "Мурзик, этот саз — тебе. Играй и ты песню Аси."),
      line("murzik", "Teşekkür ederim, Hasan Usta. Hiç unutmayacağım.", "Спасибо, Хасан-уста. Я никогда не забуду."),
      line("tom", "Konser nasıldı, Murzik?", "Как тебе концерт, Мурзик?"),
      line("murzik", "Çok duygusaldı…", "Было очень трогательно…"),
    ],
    gist: choice("tran7-d1", "Что Хасан-уста дарит Мурзику?", [
      ["Маленький саз.", true],
      ["Ноты.", false],
      ["Апельсины.", false],
    ]),
  },
  grammar: [
    {
      title: "Не буду: -meyecek, -mayacak",
      paragraphs: [
        "Будущее с отрицанием — -mayacak / -meyecek: unut-mayacağ-ım — я не забуду, gel-meyeceğ-im — я не приду.",
        "С hiç получается «никогда»: Hiç unutmayacağım. — Я никогда не забуду.",
      ],
      examples: [
        { ru: "Seni hiç unutmayacağım.", en: "Я тебя никогда не забуду." },
        { ru: "Yarın gelmeyeceğim.", en: "Завтра я не приду." },
      ],
    },
  ],
  tasks: [
    listen("tran7-t1", "Аудиоэкзамен. Что будет сегодня?", "Bu akşam saat dokuzda avluda konser var. Herkes gelsin!", [
      ["Концерт во дворе в девять, приходите все.", true],
      ["Концерт в театре в восемь.", false],
      ["Ужин в девять.", false],
    ]),
    choice("tran7-t2", "Как сказать «Я никогда не забуду»?", [
      ["Hiç unutmayacağım.", true],
      ["Hiç unutacağım.", false],
      ["Hiç unutmadım.", false],
    ], { skill: "grammar" }),
    match("tran7-t3", "Соедини пары.", [
      ["Bravo!", "Браво!"],
      ["Bir şarkı daha!", "Ещё одну песню!"],
      ["Alkışlayalım!", "Давайте похлопаем!"],
      ["unutmak", "забывать"],
    ], { skill: "words" }),
    missing("tran7-t4", "Какой буквы не хватает? («Давайте похлопаем!»)", "Alkı", "layalım!", "ş", ["ş", "s", "ç"]),
    speak("tran7-t5", "Konser nasıldı?", "Harikaydı! Çok beğendim.", "Было чудесно! Мне очень понравилось.", { help: "Ответь вслух, как тебе концерт." }),
    script("tran7-t6", "Вспомни всю Анталью. Закончи разговоры.", [
      { speaker: "Том", text: "Ne yapmayı seviyorsun?" },
      { speaker: "Ты", answer: "Resim yapmayı seviyorum.", options: ["Resim yapmayı seviyorum.", "Resim yapıyorum seviyorum.", "Çalamıyorum."] },
      { speaker: "Хасан-уста", text: "Saz çalabiliyor musun?" },
      { speaker: "Ты", answer: "Hayır, çalamıyorum.", options: ["Hayır, çalamıyorum.", "Hayır, çalmayı.", "Her gün."] },
      { speaker: "Том", text: "Konseri beğendin mi?" },
      { speaker: "Ты", answer: "Çok beğendim!", options: ["Çok beğendim!", "Çok beğeneceğim!", "Sıra sende!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "baglama",
    itemName: "Маленький саз",
    itemNameRu: "Bağlama",
    ru: "Yaşasın! Küçük bir bağlama!",
    en: "Ура! Маленький саз!",
    a11y: "Маленький саз с длинным грифом и корпусом из светлого дерева. На корпусе вырезана крошечная кошка.",
    image: p("baglama"),
    steps: ["Хасан-уста протягивает Мурзику маленький саз.", "«Bunu Asya için yapmıştım.» — «Когда-то я сделал его для Аси.»", "На корпусе вырезана крошечная кошка.", "Мурзик прижимает саз к груди."],
    bridge: "Пора в путь. Хасан-уста сказал: Ася уехала в Конью.",
  },
};

const story: CityStory = {
  home: {
    name: "Каменный дом в Калеичи",
    nameRu: "Kaleiçi'nde taş ev",
    image: p("home"),
    a11y: "Пустая комната с каменными стенами и деревянным потолком. Окно выходит во дворик с апельсиновым деревом. Посередине чемодан Мурзика.",
  },
  keepsakeId: "baglama",
  welcomeRu: "Merhaba, Antalya!",
  welcomeEn: "Привет, Анталья!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том у старинных ворот Адриана в Анталье. За ними узкие улочки Калеичи и апельсиновые деревья.",
  departureImage: p("departure"),
  departureA11y: "Мурзик и Том с чемоданами и маленьким сазом у автовокзала. Вдали горы со снежными вершинами.",
  finale: [
    {
      image: p("window"),
      a11y: "Вечер. Мурзик тихонько играет на маленьком сазе у окна. Во дворике, в тени апельсинового дерева, стоит белый кот в шляпе и слушает.",
      lines: [
        { en: "В последний вечер Мурзик пробует сыграть песню «Ася». Получается пока совсем чуть-чуть." },
        { en: "За окном, в тени апельсинового дерева, кто-то слушает. Белый кот в шляпе… Но когда Мурзик выглядывает, во дворике уже никого." },
        { ru: "Yine o kedi…", en: "Опять этот кот…" },
      ],
    },
    {
      image: p("baglama"),
      a11y: "Мурзик обходит свой каменный дом, который обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свой каменный дом в Калеичи. Том фотографирует его для дневника путешествий." },
        { en: "С собой — маленький саз Хасана-усты." },
        { en: "Ноты песни «Ася» ложатся в кармашек чемодана, рядом с открытками." },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "Antalya tamamlandı!", en: "Анталья пройдена!" },
        { en: "7 / 7 уроков" },
        { ru: "Yolun yarısı!", en: "Половина пути!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Мурзик и Том прощаются с Хасаном-устой у автобуса.",
      lines: [
        { ru: "Hoşça kalın, Hasan Usta!", en: "До свидания, Хасан-уста!" },
        { ru: "Sıradaki durak: Konya!", en: "Следующая остановка: Конья!" },
      ],
    },
    {
      image: p("road"),
      a11y: "Автобус поднимается через заснеженные горы на высокое плоскогорье.",
      lines: [
        { en: "Мурзик и Том задержались у тёплого моря до самой зимы. А в горах уже лежит снег." },
        { ru: "Antalya → Konya", en: "Анталья → Конья" },
      ],
    },
    {
      image: pic("tr/konya/arrival"),
      a11y: "Мурзик и Том в Конье у бирюзового купола. Холодно, идёт лёгкий снег.",
      lines: [
        { ru: "Merhaba, Konya!", en: "Привет, Конья!" },
        { ru: "Brr… Burası çok soğuk!", en: "Брр… Как здесь холодно!" },
      ],
    },
  ],
};

export const trAntalya = {
  id: "tr-antalya",
  name: "Анталья",
  nameTr: "Antalya",
  lessons: [antalya1, antalya2, antalya3, antalya4, antalya5, antalya6, antalya7],
  story,
};
