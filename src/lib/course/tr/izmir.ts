import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, fill, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Измир · «Семья» · у тёти Лейлы: семья, возраст, внешность, характер, профессии, друзья, семейный ужин. */

const p = (name: string) => pic(`tr/izmir/${name}`);

const izmir1: Lesson = {
  id: "tr-a1-izmir-1",
  level: "A1",
  cityId: "tr-izmir",
  number: 1,
  title: "Моя семья",
  minutes: 7,
  goals: ["Назвать членов семьи", "Сказать «мой»: annem, babam", "Представить свою семью"],
  vocabNote: "В турецком тётя и дядя бывают разные: teyze — сестра мамы, hala — сестра папы, dayı — брат мамы, amca — брат папы. Муж тёти — enişte. Бабушка по маме — anneanne, по папе — babaanne.",
  vocab: [
    v("triz1-1", "Bu benim ailem.", "Это моя семья.", "Тётя Лейла обнимает за плечи мужа и двоих детей-котят на пороге дома.", "Послушать Bu benim ailem", p("l1-1")),
    v("triz1-2", "annem", "моя мама", "Мурзик держит маленькую фотографию мамы в рамке.", "Послушать annem", p("l1-2")),
    v("triz1-3", "babam", "мой папа", "Мурзик показывает фото папы — рыжего кота в очках.", "Послушать babam", p("l1-3")),
    v("triz1-4", "kardeşim", "мой брат или сестра", "Тарчын и Миннош стоят рядом и показывают друг на друга.", "Послушать kardeşim", p("l1-4")),
    v("triz1-5", "teyzem", "моя тётя (сестра мамы)", "Мурзик с радостью обнимает тётю Лейлу.", "Послушать teyzem", p("l1-5")),
    v("triz1-6", "kuzenim", "мой двоюродный брат или сестра", "Мурзик, Тарчын и Миннош сидят рядком на диване.", "Послушать kuzenim", p("l1-6")),
    v("triz1-7", "anneannem", "моя бабушка (мамина мама)", "На столе лежит открытка бабушки Аси с нарисованной рыжей кошечкой.", "Послушать anneannem", p("l1-7")),
  ],
  dialogue: {
    title: "У тёти Лейлы",
    note: "Eşim — мой муж или жена, oğlum — мой сын, kızım — моя дочь. Тётя Лейла — дочь бабушки Аси и сестра мамы Мурзика.",
    lines: [
      line("leyla", "Murzik! Hoş geldin, canım!", "Мурзик! Добро пожаловать, мой хороший!"),
      line("murzik", "Teyze! Bu Tom, benim arkadaşım.", "Тётя! Это Том, мой друг."),
      line("leyla", "Hoş geldin, Tom! Bu benim ailem: eşim Mehmet, oğlum Tarçın ve kızım Minnoş.", "Добро пожаловать, Том! Это моя семья: мой муж Мехмет, сын Тарчын и дочка Миннош."),
      line("tom", "Memnun oldum!", "Очень приятно!"),
      line("minnos", "Sen Murzik misin? Benim kuzenim misin?", "Ты Мурзик? Ты мой двоюродный брат?"),
      line("murzik", "Evet, senin kuzeninim!", "Да, я твой двоюродный брат!"),
      line("tarcin", "Hoş geldin, kuzen!", "Привет, кузен!"),
    ],
    gist: choice("triz1-d1", "Кто встречает Мурзика?", [
      ["Тётя Лейла и её семья.", true],
      ["Айше-тейзе.", false],
      ["Кемаль-бей.", false],
    ]),
  },
  grammar: [
    {
      title: "Мой: -m, -ım, -im",
      paragraphs: [
        "«Мой» — окончание у самого слова. После гласной — -m: anne → annem, baba → babam. После согласной — -ım, -im, -um, -üm: kardeş → kardeşim, kuzen → kuzenim.",
        "Слово benim можно добавить для выразительности: benim annem — моя мама.",
      ],
      examples: [
        { ru: "Bu benim teyzem.", en: "Это моя тётя." },
        { ru: "Kardeşim Paris'te yaşıyor.", en: "Мой брат живёт в Париже." },
      ],
    },
  ],
  tasks: [
    choice("triz1-t1", "Как сказать «мой папа»?", [
      ["babam", true],
      ["baban", false],
      ["babası", false],
    ], { skill: "grammar" }),
    listen("triz1-t2", "Послушай. Кто это?", "Bu benim teyzem.", [
      ["Тётя, сестра мамы.", true],
      ["Бабушка.", false],
      ["Двоюродная сестра.", false],
    ]),
    match("triz1-t3", "Соедини пары.", [
      ["annem", "моя мама"],
      ["babam", "мой папа"],
      ["kardeşim", "мой брат или сестра"],
      ["anneannem", "моя бабушка по маме"],
    ], { skill: "words" }),
    missing("triz1-t4", "Какой буквы не хватает? («моя семья»)", "ail", "m", "e", ["e", "a", "i"]),
    speak("triz1-t5", "Ailende kim var?", "Annem, babam ve bir kardeşim var.", "У меня есть мама, папа и брат (или сестра).", { help: "Расскажи вслух о своей семье." }),
    choice("triz1-t6", "Тебе предлагают добавку, а ты больше не можешь. Что сказать?", [
      ["Doydum, teşekkürler.", true],
      ["Çok açım!", false],
      ["Hazır!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "saksi",
    itemName: "Горшок с цветами",
    itemNameRu: "Saksı",
    ru: "Yaşasın! Çiçekli bir saksı!",
    en: "Ура! Горшок с цветами!",
    a11y: "На балконе с видом на море стоит горшок с ярко-розовой бугенвиллеей.",
    image: p("saksi"),
    steps: ["Тётя Лейла приносит горшок с цветами.", "Мурзик ставит его на балкон.", "Внизу шумит море.", "Теперь у него тоже есть сад!"],
    bridge: "Миннош тянет Мурзика за лапу: «Сколько тебе лет? А мне пять!»",
  },
};

const izmir2: Lesson = {
  id: "tr-a1-izmir-2",
  level: "A1",
  cityId: "tr-izmir",
  number: 2,
  title: "Сколько тебе лет?",
  minutes: 7,
  goals: ["Спросить и сказать возраст", "Сказать «старший» и «младший»", "Спросить, сколько братьев и сестёр"],
  vocabNote: "Yaş — «возраст». Kaç yaşındasın? буквально «в каком ты возрасте?».",
  vocab: [
    v("triz2-1", "Kaç yaşındasın?", "Сколько тебе лет?", "Миннош с любопытством смотрит на Мурзика снизу вверх.", "Послушать Kaç yaşındasın", p("l2-1")),
    v("triz2-2", "Beş yaşındayım.", "Мне пять лет.", "Миннош гордо показывает растопыренную лапку — пять пальчиков.", "Послушать Beş yaşındayım", p("l2-2")),
    v("triz2-3", "büyük", "старший, большой", "Тарчын стоит рядом с маленькой Миннош и важно выпячивает грудь.", "Послушать büyük", p("l2-3")),
    v("triz2-4", "küçük", "младший, маленький", "Крошечная Миннош тянется на цыпочках рядом с братом.", "Послушать küçük", p("l2-4")),
    v("triz2-5", "genç", "молодой", "Том бодро прыгает через лужу.", "Послушать genç", p("l2-5")),
    v("triz2-6", "yaşlı", "пожилой", "Пожилой седой человек с тростью улыбается на скамейке у моря.", "Послушать yaşlı", p("l2-6")),
    v("triz2-7", "Kaç kardeşin var?", "Сколько у тебя братьев и сестёр?", "Том держит в руке три пальца и вопросительно смотрит на Мурзика.", "Послушать Kaç kardeşin var", p("l2-7")),
  ],
  dialogue: {
    title: "Миннош считает",
    note: "Anneannemiz — «наша бабушка». Onu çok uzun zamandır görmedim — «я её очень давно не видела».",
    lines: [
      line("minnos", "Murzik, kaç yaşındasın?", "Мурзик, сколько тебе лет?"),
      line("murzik", "Altı yaşındayım. Ya sen?", "Мне шесть лет. А тебе?"),
      line("minnos", "Ben beş yaşındayım! Tarçın on iki yaşında.", "А мне пять! Тарчыну двенадцать."),
      line("tarcin", "Evet, ben büyüğüm!", "Да, я старший!"),
      line("murzik", "Tom kaç yaşında?", "А сколько лет Тому?"),
      line("tom", "Yirmi beş yaşındayım. Yaşlı değilim, gencim!", "Мне двадцать пять. Я не старый, я молодой!"),
      line("minnos", "Ya anneannemiz? Kaç yaşında?", "А наша бабушка? Сколько ей лет?"),
      line("leyla", "Bilmiyorum, canım… Onu çok uzun zamandır görmedim.", "Не знаю, милая… Я её очень давно не видела."),
    ],
    gist: choice("triz2-d1", "Кому пять лет?", [
      ["Миннош.", true],
      ["Тарчыну.", false],
      ["Мурзику.", false],
    ]),
  },
  grammar: [
    {
      title: "Сколько лет: yaşında",
      paragraphs: [
        "Возраст — число и yaşında: Minnoş beş yaşında. — Миннош пять лет.",
        "О себе — с окончанием «я»: beş yaşındayım (мне пять), yirmi yaşındayım (мне двадцать). Вопрос: Kaç yaşındasın? Вежливо: Kaç yaşındasınız?",
      ],
      examples: [
        { ru: "Tarçın on iki yaşında.", en: "Тарчыну двенадцать лет." },
        { ru: "Ben yirmi beş yaşındayım.", en: "Мне двадцать пять лет." },
      ],
    },
  ],
  tasks: [
    listen("triz2-t1", "Послушай. Сколько лет говорящему?", "On iki yaşındayım.", [
      ["12", true],
      ["20", false],
      ["2", false],
    ]),
    choice("triz2-t2", "Как сказать «Мне пять лет»?", [
      ["Beş yaşındayım.", true],
      ["Beş yaşım.", false],
      ["Ben beş yaş.", false],
    ], { skill: "grammar" }),
    match("triz2-t3", "Соедини пары.", [
      ["genç", "молодой"],
      ["yaşlı", "пожилой"],
      ["büyük", "старший, большой"],
      ["küçük", "младший, маленький"],
    ], { skill: "words" }),
    missing("triz2-t4", "Какой буквы не хватает? («Сколько тебе лет?»)", "Kaç ya", "ındasın?", "ş", ["ş", "s", "z"]),
    speak("triz2-t5", "Kaç yaşındasın?", "Yirmi yaşındayım.", "Мне двадцать лет.", { help: "Ответь вслух, сколько тебе лет." }),
    choice("triz2-t6", "Как сказать «моя мама»?", [
      ["annem", true],
      ["annen", false],
      ["annesi", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "resim",
    itemName: "Рисунок Миннош",
    itemNameRu: "Minnoş'un resmi",
    ru: "Yaşasın! Minnoş'un resmi!",
    en: "Ура! Рисунок Миннош!",
    a11y: "Детский рисунок фломастерами: рыжий котёнок, высокий человек в зелёном пальто и большое солнце.",
    image: p("resim"),
    steps: ["Миннош рисует фломастерами.", "«Bu sensin, bu da Tom!» — «Это ты, а это Том!»", "Мурзик вешает рисунок на стену.", "Самая дорогая картина в доме!"],
    bridge: "Миннош рисует всю семью: «Murzik, Tarçın nasıl görünüyor?»",
  },
};

const izmir3: Lesson = {
  id: "tr-a1-izmir-3",
  level: "A1",
  cityId: "tr-izmir",
  number: 3,
  title: "Как он выглядит?",
  minutes: 7,
  goals: ["Описать внешность", "Сказать, какие у человека глаза", "Поставить прилагательное перед словом"],
  vocabNote: "Boy — «рост». Uzun boylu — «высокого роста», kısa boylu — «невысокого роста».",
  vocab: [
    v("triz3-1", "Nasıl görünüyor?", "Как он выглядит?", "Миннош с фломастером в лапе смотрит на Мурзика и ждёт описания.", "Послушать Nasıl görünüyor", p("l3-1")),
    v("triz3-2", "uzun boylu", "высокий", "Высокий Том рядом с маленьким Мурзиком, мерный столбик с делениями.", "Послушать uzun boylu", p("l3-2")),
    v("triz3-3", "kısa boylu", "невысокий", "Тарчын стоит у того же столбика и не дотягивается до верхней отметки.", "Послушать kısa boylu", p("l3-3")),
    v("triz3-4", "sarışın", "светловолосый", "Том с золотистыми волосами на солнце.", "Послушать sarışın", p("l3-4")),
    v("triz3-5", "esmer", "темноволосый, смуглый", "Темноволосая смуглая женщина улыбается на набережной.", "Послушать esmer", p("l3-5")),
    v("triz3-6", "Gözleri mavi.", "У него голубые глаза.", "Крупно голубые глаза Тома.", "Послушать Gözleri mavi", p("l3-6")),
    v("triz3-7", "kıvırcık saçlı", "кудрявый", "Девочка с пышными кудряшками.", "Послушать kıvırcık saçlı", p("l3-7")),
  ],
  dialogue: {
    title: "Портрет для Миннош",
    note: "Tombul — «пухленький», это ласковое слово. Kızıldı — «была рыжей», yeşildi — «были зелёными»: окончание -di значит «был, была, были».",
    lines: [
      line("minnos", "Tom nasıl görünüyor? Çiziyorum!", "Как выглядит Том? Я рисую!"),
      line("murzik", "Tom uzun boylu ve sarışın. Gözleri mavi.", "Том высокий и светловолосый. Глаза голубые."),
      line("minnos", "Peki Tarçın?", "А Тарчын?"),
      line("murzik", "Tarçın kısa boylu… ve biraz tombul!", "Тарчын невысокий… и немножко пухленький!"),
      line("tarcin", "Tombul değilim! Sadece çok yemek yiyorum.", "Я не пухлый! Просто я много ем."),
      line("leyla", "Anneannenizin tüyleri kızıldı. Gözleri yeşildi.", "У вашей бабушки была рыжая шерсть. А глаза — зелёные."),
    ],
    gist: choice("triz3-d1", "Как выглядит Том?", [
      ["Высокий, светловолосый, глаза голубые.", true],
      ["Невысокий и кудрявый.", false],
      ["Темноволосый, глаза зелёные.", false],
    ]),
  },
  grammar: [
    {
      title: "Прилагательное — перед словом",
      paragraphs: [
        "Прилагательное стоит перед словом и никогда не меняется: uzun boylu bir adam (высокий мужчина), uzun boylu bir kadın (высокая женщина). Рода в турецком нет!",
        "Gözleri mavi — «его глаза голубые». Окончание -leri значит «его / её» для нескольких вещей.",
      ],
      examples: [
        { ru: "Uzun boylu bir kadın.", en: "Высокая женщина." },
        { ru: "Minnoş'un gözleri yeşil.", en: "У Миннош зелёные глаза." },
      ],
    },
  ],
  tasks: [
    match("triz3-t1", "Соедини пары.", [
      ["uzun boylu", "высокий"],
      ["kısa boylu", "невысокий"],
      ["sarışın", "светловолосый"],
      ["esmer", "темноволосый, смуглый"],
    ], { skill: "words" }),
    listen("triz3-t2", "Послушай. Какие у неё глаза?", "Gözleri yeşil.", [
      ["Зелёные.", true],
      ["Голубые.", false],
      ["Карие.", false],
    ]),
    choice("triz3-t3", "Как сказать «высокая женщина»?", [
      ["uzun boylu bir kadın", true],
      ["kadın uzun boylu bir", false],
      ["uzun boylular bir kadın", false],
    ], { skill: "grammar" }),
    missing("triz3-t4", "Какой буквы не хватает? («светловолосый»)", "sarı", "ın", "ş", ["ş", "s", "c"]),
    speak("triz3-t5", "Annen nasıl görünüyor?", "Annem kısa boylu ve esmer.", "Моя мама невысокая и темноволосая.", { help: "Опиши вслух кого-нибудь из своей семьи." }),
    listen("triz3-t6", "Вспомни прошлый урок. Сколько лет?", "Yirmi beş yaşında.", [
      ["25", true],
      ["52", false],
      ["15", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "ayna",
    itemName: "Зеркало",
    itemNameRu: "Ayna",
    ru: "Yaşasın! Yeni bir ayna!",
    en: "Ура! Новое зеркало!",
    a11y: "Круглое зеркало в синей мозаичной раме. Мурзик и Миннош корчат в нём рожицы.",
    image: p("ayna"),
    steps: ["Дядя Мехмет вешает на стену круглое зеркало.", "Мурзик смотрит: рыжий, глаза зелёные.", "«Gözlerin anneannen gibi!» — «Глаза у тебя как у бабушки!»", "Мурзик улыбается своему отражению."],
    bridge: "Тарчын растянулся на диване: «Я не ленивый, я просто отдыхаю!»",
  },
};

const izmir4: Lesson = {
  id: "tr-a1-izmir-4",
  level: "A1",
  cityId: "tr-izmir",
  number: 4,
  title: "Какой он?",
  minutes: 7,
  goals: ["Описать характер", "Сказать «очень», «немного» и «совсем не»", "Сделать комплимент"],
  vocabNote: "Tatlı — и «сладкий», и «милый». Çok tatlı! говорят о детях, котятах и обо всём симпатичном.",
  vocab: [
    v("triz4-1", "Nasıl biri?", "Какой он человек?", "Том вопросительно показывает на Тарчына, спящего в гамаке.", "Послушать Nasıl biri", p("l4-1")),
    v("triz4-2", "neşeli", "весёлый", "Миннош хохочет и кружится на месте.", "Послушать neşeli", p("l4-2")),
    v("triz4-3", "tembel", "ленивый", "Тарчын лениво свисает из гамака с недоеденным яблоком.", "Послушать tembel", p("l4-3")),
    v("triz4-4", "çalışkan", "трудолюбивый", "Миннош сосредоточенно рисует, вокруг гора готовых рисунков.", "Послушать çalışkan", p("l4-4")),
    v("triz4-5", "sakin", "спокойный", "Дядя Мехмет неторопливо пьёт чай, глядя на море.", "Послушать sakin", p("l4-5")),
    v("triz4-6", "komik", "смешной", "Тарчын корчит смешную рожицу, все смеются.", "Послушать komik", p("l4-6")),
    v("triz4-7", "Çok tatlı!", "Очень милый!", "Тётя Лейла умилённо смотрит на спящую Миннош.", "Послушать Çok tatlı", p("l4-7")),
  ],
  dialogue: {
    title: "Ленивый кузен",
    note: "Hamakta yatıyor — «лежит в гамаке». Neşeliydi — «была весёлой».",
    lines: [
      line("leyla", "Tarçın çok tembel! Bütün gün hamakta yatıyor.", "Тарчын такой ленивый! Целый день лежит в гамаке."),
      line("tarcin", "Tembel değilim, sakinim!", "Я не ленивый, я спокойный!"),
      line("murzik", "Ama çok komik!", "Зато очень смешной!"),
      line("leyla", "Evet, neşeli bir çocuk. Minnoş da çok çalışkan: her gün resim yapıyor.", "Да, весёлый мальчик. А Миннош очень трудолюбивая: каждый день рисует."),
      line("murzik", "Anneannem de resim yapardı, değil mi?", "Бабушка ведь тоже рисовала, правда?"),
      line("leyla", "Evet… Annem çok neşeliydi.", "Да… Мама была очень весёлой."),
    ],
    gist: choice("triz4-d1", "Какой Тарчын, по словам мамы?", [
      ["Ленивый.", true],
      ["Трудолюбивый.", false],
      ["Грустный.", false],
    ]),
  },
  grammar: [
    {
      title: "Очень, немного, совсем не",
      paragraphs: [
        "Çok — «очень», biraz — «немного»: çok neşeli — очень весёлый, biraz tembel — немного ленивый.",
        "«Совсем не» — hiç … değil: Minnoş hiç sakin değil! — Миннош совсем не спокойная! Değil ставят после слова, как в Fena değil.",
      ],
      examples: [
        { ru: "Tarçın biraz tembel ama çok komik.", en: "Тарчын немного ленивый, но очень смешной." },
        { ru: "Minnoş hiç sakin değil!", en: "Миннош совсем не спокойная!" },
      ],
    },
  ],
  tasks: [
    choice("triz4-t1", "Как сказать «Он совсем не спокойный»?", [
      ["Hiç sakin değil.", true],
      ["Hiç sakin.", false],
      ["Sakin hiç değil mi.", false],
    ], { skill: "grammar" }),
    listen("triz4-t2", "Послушай. Какая Миннош?", "Minnoş çok çalışkan.", [
      ["Трудолюбивая.", true],
      ["Ленивая.", false],
      ["Спокойная.", false],
    ]),
    match("triz4-t3", "Соедини пары.", [
      ["neşeli", "весёлый"],
      ["tembel", "ленивый"],
      ["sakin", "спокойный"],
      ["komik", "смешной"],
    ], { skill: "words" }),
    spell("triz4-t4", "Собери из букв слово «весёлый».", "neşeli"),
    speak("triz4-t5", "En iyi arkadaşın nasıl biri?", "Çok neşeli ve biraz tembel!", "Очень весёлый и немного ленивый!", { help: "Опиши вслух характер друга." }),
    choice("triz4-t6", "Как сказать «У него голубые глаза»?", [
      ["Gözleri mavi.", true],
      ["Gözler mavi.", false],
      ["Mavi gözleri.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "hamak",
    itemName: "Гамак",
    itemNameRu: "Hamak",
    ru: "Yaşasın! Bir hamak!",
    en: "Ура! Гамак!",
    a11y: "На террасе с видом на море висит полосатый гамак. В нём сладко спит Тарчын.",
    image: p("hamak"),
    steps: ["Тарчын дарит Мурзику свой старый гамак.", "«Bende iki tane var!» — «У меня их два!»", "Мурзик вешает гамак на террасе.", "Тарчын тут же в нём засыпает."],
    bridge: "Вечером дядя Мехмет приходит с работы. «Ну, кто кем работает?» — спрашивает Том.",
  },
};

const izmir5: Lesson = {
  id: "tr-a1-izmir-5",
  level: "A1",
  cityId: "tr-izmir",
  number: 5,
  title: "Кем ты работаешь?",
  minutes: 7,
  goals: ["Спросить, кем человек работает", "Назвать профессии", "Сказать «я учитель», «я повар»"],
  vocabNote: "-cı, -ci, -cu, -cü — окончание профессии, после глухих (ç, f, h, k, p, s, ş, t) — -çı, -çi, -çu, -çü: fotoğraf (фото) → fotoğrafçı (фотограф), simit → simitçi (продавец симитов).",
  vocab: [
    v("triz5-1", "Ne iş yapıyorsun?", "Кем ты работаешь?", "Том с блокнотом в руке спрашивает дядю Мехмета.", "Послушать Ne iş yapıyorsun", p("l5-1")),
    v("triz5-2", "öğretmen", "учитель", "Тётя Лейла у школьной доски с указкой.", "Послушать öğretmen", p("l5-2")),
    v("triz5-3", "aşçı", "повар", "Дядя Мехмет в белом колпаке у плиты.", "Послушать aşçı", p("l5-3")),
    v("triz5-4", "ressam", "художник", "Миннош у мольберта в берете, с кистью в лапе.", "Послушать ressam", p("l5-4")),
    v("triz5-5", "fotoğrafçı", "фотограф", "Том с фотоаппаратом на шее снимает набережную.", "Послушать fotoğrafçı", p("l5-5")),
    v("triz5-6", "doktor", "врач", "Врач в белом халате со стетоскопом.", "Послушать doktor", p("l5-6")),
    v("triz5-7", "Öğrenciyim.", "Я учусь.", "Тарчын с рюкзаком и книжками зевает у двери школы.", "Послушать Öğrenciyim", p("l5-7")),
  ],
  dialogue: {
    title: "Кто кем работает",
    note: "Lokantam var — «у меня есть ресторанчик». Uyuyorum — «я сплю».",
    lines: [
      line("mehmet", "Merhaba! Ben geldim!", "Привет! Я пришёл!"),
      line("murzik", "Mehmet Enişte, ne iş yapıyorsun?", "Дядя Мехмет, кем ты работаешь?"),
      line("mehmet", "Aşçıyım! Kordon'da küçük bir lokantam var.", "Я повар! У меня маленький ресторанчик на Кордоне."),
      line("tom", "Leyla Hanım, siz ne iş yapıyorsunuz?", "Лейла-ханым, а вы кем работаете?"),
      line("leyla", "Ben öğretmenim. Ya sen, Tom?", "Я учительница. А ты, Том?"),
      line("tom", "Ben fotoğrafçıyım.", "Я фотограф."),
      line("minnos", "Ben de ressamım!", "А я художница!"),
      line("tarcin", "Ben… öğrenciyim. Ve uyuyorum.", "А я… учусь. И сплю."),
    ],
    gist: choice("triz5-d1", "Кем работает дядя Мехмет?", [
      ["Поваром.", true],
      ["Учителем.", false],
      ["Фотографом.", false],
    ]),
  },
  grammar: [
    {
      title: "Я учитель: öğretmenim",
      paragraphs: [
        "Профессия о себе — с тем же окончанием «я», что и в iyiyim: öğretmen → öğretmenim (я учитель), aşçı → aşçıyım (я повар).",
        "О другом — без окончания: Leyla öğretmen. Mehmet aşçı. Вежливый вопрос: Ne iş yapıyorsunuz?",
      ],
      examples: [
        { ru: "Ben fotoğrafçıyım.", en: "Я фотограф." },
        { ru: "Siz doktor musunuz?", en: "Вы врач?" },
      ],
    },
  ],
  tasks: [
    choice("triz5-t1", "Как сказать «Я фотограф»?", [
      ["Fotoğrafçıyım.", true],
      ["Fotoğrafçım.", false],
      ["Fotoğrafçısın.", false],
    ], { skill: "grammar" }),
    listen("triz5-t2", "Послушай. Кем работает говорящий?", "Ben doktorum.", [
      ["Врачом.", true],
      ["Учителем.", false],
      ["Поваром.", false],
    ]),
    match("triz5-t3", "Соедини пары.", [
      ["öğretmen", "учитель"],
      ["aşçı", "повар"],
      ["ressam", "художник"],
      ["fotoğrafçı", "фотограф"],
    ], { skill: "words" }),
    missing("triz5-t4", "Какой буквы не хватает? («повар»)", "a", "çı", "ş", ["ş", "s", "ç"]),
    speak("triz5-t5", "Ne iş yapıyorsun?", "Öğrenciyim.", "Я учусь.", { help: "Ответь вслух, чем ты занимаешься." }),
    choice("triz5-t6", "Как сказать «Он очень весёлый»?", [
      ["Çok neşeli.", true],
      ["Hiç neşeli.", false],
      ["Neşeli çok.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "saat",
    itemName: "Часы как у часовой башни",
    itemNameRu: "Saat",
    ru: "Yaşasın! Küçük bir saat!",
    en: "Ура! Маленькие часы!",
    a11y: "Маленькие настольные часы — копия знаменитой часовой башни Измира, с узорами и арками.",
    image: p("saat"),
    steps: ["Дядя Мехмет приносит коробку.", "Внутри маленькие часы — копия часовой башни.", "«İzmir'in simgesi!» — «Символ Измира!»", "Часы тихо тикают на полке."],
    bridge: "Тётя Лейла говорит: «Завтра Тарчын познакомит тебя со своей подругой!»",
  },
};

const izmir6: Lesson = {
  id: "tr-a1-izmir-6",
  level: "A1",
  cityId: "tr-izmir",
  number: 6,
  title: "Мои друзья",
  minutes: 7,
  goals: ["Рассказать о друзьях", "Сказать «у меня есть» и «у меня нет»", "Познакомить друзей друг с другом"],
  vocabNote: "Tanıştırayım — «позволь познакомить». Так начинают, когда представляют одного человека другому.",
  vocab: [
    v("triz6-1", "arkadaş", "друг, подруга", "Мурзик и Том идут по набережной, обняв друг друга за плечи.", "Послушать arkadaş", p("l6-1")),
    v("triz6-2", "Benim bir arkadaşım var.", "У меня есть друг.", "Тарчын показывает фотографию на телефоне и улыбается.", "Послушать Benim bir arkadaşım var", p("l6-2")),
    v("triz6-3", "en iyi arkadaşım", "мой лучший друг", "Мурзик и Том дают друг другу пять.", "Послушать en iyi arkadaşım", p("l6-3")),
    v("triz6-4", "Onu tanıyor musun?", "Ты его знаешь?", "Тарчын показывает на девочку вдали и вопросительно смотрит на Мурзика.", "Послушать Onu tanıyor musun", p("l6-4")),
    v("triz6-5", "Tanıştırayım: …", "Познакомься, это…", "Том протягивает руку в сторону Мурзика, представляя его.", "Послушать Tanıştırayım", p("l6-5")),
    v("triz6-6", "komşu", "сосед", "Соседка машет с соседнего балкона, увитого цветами.", "Послушать komşu", p("l6-6")),
    v("triz6-7", "birlikte", "вместе", "Мурзик, Том и Тарчын втроём едят мороженое на скамейке.", "Послушать birlikte", p("l6-7")),
  ],
  dialogue: {
    title: "На набережной",
    note: "Seyahat ediyoruz — «мы путешествуем». Plaja — «на пляж».",
    lines: [
      line("tarcin", "Murzik, Türkiye'de arkadaşın var mı?", "Мурзик, у тебя есть друзья в Турции?"),
      line("murzik", "Evet! Ayşe Teyze var. Ve en iyi arkadaşım Tom!", "Да! Айше-тейзе. И мой лучший друг Том!"),
      line("tom", "Biz birlikte seyahat ediyoruz.", "Мы путешествуем вместе."),
      line("tarcin", "Benim de bir arkadaşım var: komşumuz Ece. Onu tanıyor musun?", "А у меня есть подруга — наша соседка Эдже. Ты её знаешь?"),
      line("murzik", "Hayır, tanımıyorum.", "Нет, не знаю."),
      line("tarcin", "Gel, tanıştırayım!", "Пойдём, познакомлю!"),
      line("leyla", "Ece çok tatlı bir kız. Plaja birlikte gidin!", "Эдже очень милая девочка. Сходите вместе на пляж!"),
    ],
    gist: choice("triz6-d1", "Кто лучший друг Мурзика?", [
      ["Том.", true],
      ["Тарчын.", false],
      ["Эдже.", false],
    ]),
  },
  grammar: [
    {
      title: "У меня есть: benim … var",
      paragraphs: [
        "«У меня есть» — benim + вещь с окончанием «мой» + var: Benim bir arkadaşım var. — У меня есть друг.",
        "«У меня нет» — то же с yok: Benim arabam yok. — У меня нет машины. Вопрос: Senin kardeşin var mı?",
      ],
      examples: [
        { ru: "Benim bir arkadaşım var.", en: "У меня есть друг." },
        { ru: "Senin kardeşin var mı? — Hayır, yok.", en: "У тебя есть брат или сестра? — Нет." },
      ],
    },
  ],
  tasks: [
    fill("triz6-t1", "Вставь слово: «У меня есть друг».", "Benim bir arkadaşım", ".", "var", ["var", "yok", "değil"], { skill: "grammar" }),
    listen("triz6-t2", "Послушай. Что говорит Тарчын?", "Benim bir kardeşim var.", [
      ["У него есть брат или сестра.", true],
      ["У него нет друзей.", false],
      ["У него есть собака.", false],
    ]),
    match("triz6-t3", "Соедини пары.", [
      ["arkadaş", "друг"],
      ["komşu", "сосед"],
      ["birlikte", "вместе"],
      ["en iyi", "самый лучший"],
    ], { skill: "words" }),
    missing("triz6-t4", "Какой буквы не хватает? («друг»)", "arkada", "", "ş", ["ş", "s", "z"]),
    speak("triz6-t5", "En iyi arkadaşın kim?", "En iyi arkadaşım Maks.", "Мой лучший друг — Макс.", { help: "Ответь вслух, кто твой лучший друг." }),
    choice("triz6-t6", "Как спросить «Кем ты работаешь?»", [
      ["Ne iş yapıyorsun?", true],
      ["Nasıl biri?", false],
      ["Kaç yaşındasın?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sezlong",
    itemName: "Шезлонг",
    itemNameRu: "Şezlong",
    ru: "Yaşasın! Bir şezlong!",
    en: "Ура! Шезлонг!",
    a11y: "Полосатый шезлонг стоит на балконе с видом на море. На нём сидит Мурзик в солнечных очках.",
    image: p("sezlong"),
    steps: ["С пляжа Мурзик и Тарчын тащат шезлонг.", "Ставят его на балкон.", "Мурзик надевает солнечные очки.", "Красота: море, солнце, друзья!"],
    bridge: "В субботу — большой семейный ужин. Мурзик решает показать тёте открытку бабушки.",
  },
};

const izmir7: Lesson = {
  id: "tr-a1-izmir-7",
  level: "A1",
  cityId: "tr-izmir",
  number: 7,
  title: "Семейный ужин",
  minutes: 8,
  goals: ["Сказать «мы все здесь»", "Сфотографироваться всей семьёй и сказать тост", "Вспомнить все слова Измира"],
  vocabNote: "Sağlığınıza! — «за ваше здоровье!». Этот тост говорят с любым напитком, хоть с чаем, хоть с айраном.",
  vocab: [
    v("triz7-1", "Hepimiz buradayız!", "Мы все здесь!", "Вся семья сидит за длинным столом на террасе.", "Послушать Hepimiz buradayız", p("l7-1")),
    v("triz7-2", "Bu kim?", "Кто это?", "Миннош показывает лапкой на фотографию на стене.", "Послушать Bu kim", p("l7-2")),
    v("triz7-3", "Fotoğraf çekelim!", "Давайте сфотографируемся!", "Том ставит фотоаппарат на штатив перед столом.", "Послушать Fotoğraf çekelim", p("l7-3")),
    v("triz7-4", "Gülümseyin!", "Улыбнитесь!", "Вся семья широко улыбается в объектив.", "Послушать Gülümseyin", p("l7-4")),
    v("triz7-5", "Aile çok önemli.", "Семья — это очень важно.", "Дядя Мехмет обнимает всех за столом.", "Послушать Aile çok önemli", p("l7-5")),
    v("triz7-6", "Seni özledim.", "Я по тебе скучаю.", "Тётя Лейла крепко обнимает Мурзика.", "Послушать Seni özledim", p("l7-6")),
    v("triz7-7", "Sağlığınıza!", "За ваше здоровье!", "Все поднимают стаканчики с чаем и айраном.", "Послушать Sağlığınıza", p("l7-7")),
  ],
  dialogue: {
    title: "Открытка",
    note: "Yazısı — «почерк». Bulacak — «найдёт». Asya Anneanne'nin sağlığına! — «За здоровье бабушки Аси!»",
    lines: [
      line("mehmet", "Hepimiz buradayız! Afiyet olsun!", "Мы все здесь! Приятного аппетита!"),
      line("tom", "Fotoğraf çekelim! Gülümseyin!", "Давайте сфотографируемся! Улыбнитесь!"),
      line("murzik", "Leyla Teyze, bak… Bu kartpostal anneannemden.", "Тётя Лейла, посмотри… Эта открытка от бабушки."),
      line("leyla", "Bu… annemin yazısı! Annem!", "Это… мамин почерк! Мама!"),
      line("leyla", "Onu çok özledim.", "Я так по ней скучаю."),
      line("minnos", "Anneanne nerede?", "А где бабушка?"),
      line("leyla", "Bilmiyoruz, canım. Ama Murzik onu bulacak.", "Мы не знаем, милая. Но Мурзик её найдёт."),
      line("mehmet", "Asya Anneanne'nin sağlığına!", "За здоровье бабушки Аси!"),
    ],
    gist: choice("triz7-d1", "Что узнаёт тётя Лейла?", [
      ["Почерк своей мамы.", true],
      ["Свою старую фотографию.", false],
      ["Адрес бабушки.", false],
    ]),
  },
  grammar: [
    {
      title: "Мы, вы, они",
      paragraphs: [
        "«Мы» — окончание -ız / -iz / -uz / -üz: buradayız — мы здесь, mutluyuz — мы счастливы. «Вы» — -sınız: Neredesiniz? — Где вы?",
        "«Они» — просто слово, иногда с -lar: Onlar burada. — Они здесь.",
      ],
      examples: [
        { ru: "Hepimiz buradayız!", en: "Мы все здесь!" },
        { ru: "Siz neredesiniz?", en: "Где вы?" },
      ],
    },
  ],
  tasks: [
    listen("triz7-t1", "Аудиоэкзамен. Послушай. Кто на фотографии?", "Bu benim annem. Gözleri yeşil, çok neşeli.", [
      ["Мама: зелёные глаза, очень весёлая.", true],
      ["Папа: высокий и спокойный.", false],
      ["Бабушка: светловолосая и строгая.", false],
    ]),
    choice("triz7-t2", "Что говорят, когда фотографируют?", [
      ["Gülümseyin!", true],
      ["Afiyet olsun!", false],
      ["Hoş geldiniz!", false],
    ], { skill: "words" }),
    choice("triz7-t3", "Как сказать «Мы все здесь»?", [
      ["Hepimiz buradayız.", true],
      ["Hepimiz buradasınız.", false],
      ["Hepimiz buradayım.", false],
    ], { skill: "grammar" }),
    spell("triz7-t4", "Собери из букв слово «семья».", "aile"),
    speak("triz7-t5", "Ailende en neşeli kim?", "Kardeşim çok neşeli!", "Мой брат очень весёлый!", { help: "Ответь вслух, кто в твоей семье самый весёлый." }),
    script("triz7-t6", "Вспомни весь Измир. Закончи разговоры.", [
      { speaker: "Миннош", text: "Kaç yaşındasın?" },
      { speaker: "Ты", answer: "Yirmi yaşındayım.", options: ["Yirmi yaşındayım.", "Öğretmenim.", "Uzun boylu."] },
      { speaker: "Тётя Лейла", text: "Ne iş yapıyorsun?" },
      { speaker: "Ты", answer: "Öğrenciyim.", options: ["Öğrenciyim.", "Çok tembel!", "Hepimiz buradayız!"] },
      { speaker: "Тарчын", text: "Benim bir arkadaşım var. Ya senin?" },
      { speaker: "Ты", answer: "Benim de bir arkadaşım var!", options: ["Benim de bir arkadaşım var!", "Onu tanıyor musun?", "Gülümseyin!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "aile-foto",
    itemName: "Семейное фото",
    itemNameRu: "Aile fotoğrafı",
    ru: "Yaşasın! Bir aile fotoğrafı!",
    en: "Ура! Семейная фотография!",
    a11y: "Фото в рамке: вся семья за столом на террасе — тётя Лейла, дядя Мехмет, Тарчын, Миннош, Мурзик и Том. Все улыбаются.",
    image: p("aile-foto"),
    steps: ["Том печатает снимок.", "Тётя Лейла вставляет его в рамку.", "Вся семья вместе!", "Мурзик ставит рамку рядом с часами."],
    bridge: "Тётя Лейла достаёт из шкатулки что-то старое и бережно завёрнутое…",
  },
};

const story: CityStory = {
  home: {
    name: "У тёти Лейлы",
    nameRu: "Leyla Teyze'nin evi",
    image: p("home"),
    a11y: "Светлая пустая комната с балконом в доме тёти Лейлы на набережной Кордон. За окном море и пальмы. Посередине чемодан Мурзика.",
  },
  keepsakeId: "saat",
  welcomeRu: "Merhaba, İzmir!",
  welcomeEn: "Привет, Измир!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том на набережной Кордон в Измире: пальмы, море и старая часовая башня с узорами.",
  departureImage: p("departure"),
  departureA11y: "Вся семья провожает Мурзика и Тома на автовокзале: Миннош машет, Тарчын зевает, тётя Лейла вытирает слезу.",
  finale: [
    {
      image: p("photo"),
      a11y: "После ужина тётя Лейла держит старую чёрно-белую фотографию молодой кошки с кисточкой — лица не разобрать. На столе открытка бабушки. Мурзик, Тарчын и Миннош смотрят на фото.",
      lines: [
        { en: "После ужина тётя Лейла долго смотрит на открытку. Потом достаёт из шкатулки старую фотографию молодой Аси." },
        { ru: "Bu annem. Onu bul, Murzik.", en: "Это мама. Найди её, Мурзик." },
        { en: "«Мама очень любила тёплые источники. Говорила: там белые горы, как из хлопка». Белые, как хлопок… Памуккале!" },
      ],
    },
    {
      image: p("saat"),
      a11y: "Мурзик обходит комнату у тёти Лейлы, которую обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свою комнату у тёти Лейлы. Том фотографирует её для дневника путешествий." },
        { en: "С собой — маленькие часы, копия часовой башни Измира." },
        { en: "Старая фотография бабушки ложится в кармашек чемодана, рядом с открытками." },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "İzmir tamamlandı!", en: "Измир пройден!" },
        { en: "7 / 7 уроков" },
        { ru: "Şimdiden dört şehir!", en: "Уже четыре города!" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Семья машет на прощание у автобуса.",
      lines: [
        { ru: "Hoşça kalın! Görüşürüz, Tarçın!", en: "До свидания! Увидимся, Тарчын!" },
        { ru: "Sıradaki durak: Pamukkale!", en: "Следующая остановка: Памуккале!" },
      ],
    },
    {
      image: p("road"),
      a11y: "Автобус едет вглубь страны мимо полей хлопка.",
      lines: [{ ru: "İzmir → Pamukkale", en: "Измир → Памуккале" }],
    },
    {
      image: pic("tr/pamukkale/arrival"),
      a11y: "Мурзик и Том у подножия белоснежных террас Памуккале. В голубых водоёмах отражается небо.",
      lines: [
        { ru: "Merhaba, Pamukkale!", en: "Привет, Памуккале!" },
        { ru: "Pamuk gibi beyaz!", en: "Белое, как хлопок!" },
      ],
    },
  ],
};

export const trIzmir = {
  id: "tr-izmir",
  name: "Измир",
  nameTr: "İzmir",
  lessons: [izmir1, izmir2, izmir3, izmir4, izmir5, izmir6, izmir7],
  story,
};
