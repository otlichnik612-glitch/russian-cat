import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Газиантеп · «Что я делал» · прошедшее время во всех лицах, рассказ по порядку, чувства, zaten / henüz, снимки Тома. */

const p = (name: string) => pic(`tr/gaziantep/${name}`);

const gaziantep1: Lesson = {
  id: "tr-a1-gaziantep-1",
  level: "A1",
  cityId: "tr-gaziantep",
  number: 1,
  title: "Что ты делал вчера?",
  minutes: 7,
  goals: ["Спросить, что человек делал", "Рассказать о вчерашнем дне", "Сказать «ничего не делал»"],
  vocabNote: "Yaptın — «ты сделал», yaptım — «я сделал». Dün — «вчера», dün akşam — «вчера вечером».",
  vocab: [
    v("trga1-1", "Dün ne yaptın?", "Что ты делал вчера?", "Элиф с косичками сидит на ступеньках медной лавки.", "Послушать Dün ne yaptın", p("l1-1")),
    v("trga1-2", "Çarşıya gittim.", "Я ходил на базар.", "Мурзик идёт по медному базару с корзинкой.", "Послушать Çarşıya gittim", p("l1-2")),
    v("trga1-3", "Baklava yedim.", "Я ел пахлаву.", "Мурзик с крошками пахлавы на усах.", "Послушать Baklava yedim", p("l1-3")),
    v("trga1-4", "Ne aldın?", "Что ты купил?", "Элиф заглядывает в корзинку Мурзика.", "Послушать Ne aldın", p("l1-4")),
    v("trga1-5", "Hiçbir şey yapmadım.", "Я ничего не делал.", "Том лежит на диване с закрытыми глазами.", "Послушать Hiçbir şey yapmadım", p("l1-5")),
    v("trga1-6", "dün akşam", "вчера вечером", "Вечерний базар, горят фонари.", "Послушать dün akşam", p("l1-6")),
    v("trga1-7", "bütün gün", "весь день", "Часы, стрелки бегут по кругу от утра до вечера.", "Послушать bütün gün", p("l1-7")),
  ],
  dialogue: {
    title: "Элиф",
    note: "Элиф десять лет, она внучка медника. Dedem — «мой дедушка». Bakırcı — «медник». Çalıştım — «я работал, занимался».",
    lines: [
      line("elif", "Merhaba! Ben Elif. Dedem bakırcı. Sen dün ne yaptın?", "Привет! Я Элиф. Мой дедушка медник. А ты что делал вчера?"),
      line("murzik", "Dün çarşıya gittim. Baklava yedim!", "Вчера я ходил на базар. Ел пахлаву!"),
      line("elif", "Ne aldın?", "Что ты купил?"),
      line("murzik", "Biraz pul biber aldım. Sen ne yaptın?", "Купил немного красного перца. А ты что делала?"),
      line("elif", "Ben bütün gün ders çalıştım. Tom ne yaptı?", "А я весь день делала уроки. А Том что делал?"),
      line("tom", "Ben mi? Hiçbir şey yapmadım. Uyudum!", "Я? Ничего не делал. Спал!"),
    ],
    gist: choice("trga1-d1", "Что делала Элиф вчера?", [
      ["Весь день делала уроки.", true],
      ["Ходила на базар.", false],
      ["Спала.", false],
    ]),
  },
  grammar: [
    {
      title: "Прошлое: я, ты, он",
      paragraphs: [
        "Прошедшее время: gittim (я ходил), gittin (ты ходил), gitti (он ходил). Обрати внимание: окончание -dı / -tı, а потом -m (я) или -n (ты).",
        "Вопрос с вопросительным словом — без mı: Ne yaptın? Nereye gittin? Вопрос «да или нет» — с mı: Baklava yedin mi? — Ты ел пахлаву?",
      ],
      examples: [
        { ru: "Dün akşam film izledim.", en: "Вчера вечером я смотрел фильм." },
        { ru: "Elif okula gitti.", en: "Элиф пошла в школу." },
      ],
    },
  ],
  tasks: [
    choice("trga1-t1", "Как сказать «Я ел пахлаву»?", [
      ["Baklava yedim.", true],
      ["Baklava yedin.", false],
      ["Baklava yiyorum.", false],
    ], { skill: "grammar" }),
    listen("trga1-t2", "Послушай. Что делал говорящий вчера?", "Dün akşam arkadaşımla yemek yaptım.", [
      ["Готовил еду с другом.", true],
      ["Ходил с другом в кино.", false],
      ["Весь день спал.", false],
    ]),
    match("trga1-t3", "Соедини пары.", [
      ["gittim", "я ходил"],
      ["yedim", "я ел"],
      ["aldın", "ты купил"],
      ["yaptı", "он сделал"],
    ], { skill: "words" }),
    missing("trga1-t4", "Какой буквы не хватает? («пахлава»)", "bak", "ava", "l", ["l", "r", "n"]),
    speak("trga1-t5", "Dün ne yaptın?", "Dün çarşıya gittim ve baklava yedim.", "Вчера я ходил на базар и ел пахлаву.", { help: "Расскажи вслух, что ты делал(а) вчера." }),
    choice("trga1-t6", "Как спросить «Здесь есть музей?»", [
      ["Burada müze var mı?", true],
      ["Burada müze mi?", false],
      ["Müze burada yok mu var?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "pul-biber",
    itemName: "Мешочек красного перца",
    itemNameRu: "Pul biber",
    ru: "Yaşasın! Pul biber!",
    en: "Ура! Красный перец!",
    a11y: "Холщовый мешочек с хлопьями красного перца, завязанный бечёвкой.",
    image: p("pul-biber"),
    steps: ["Мурзик приносит с базара мешочек перца.", "Он пахнет солнцем и дымом.", "«Az koy, çok acı!» — смеётся Элиф. «Клади поменьше, он острый!»", "Мешочек висит на крючке в комнате."],
    bridge: "Назавтра Элиф стучит в дверь: «Neredeydin? Seni bekledim!» — «Где ты был? Я тебя ждала!»",
  },
};

const gaziantep2: Lesson = {
  id: "tr-a1-gaziantep-2",
  level: "A1",
  cityId: "tr-gaziantep",
  number: 2,
  title: "Где ты был?",
  minutes: 7,
  goals: ["Спросить: Neredeydin?", "Сказать, где ты был(а) и с кем", "Знать все формы прошлого: мы, вы, они"],
  vocabNote: "Neredeydin? — «Где ты был?» Evdeydim — «я был дома». Kiminle? — «с кем?» Tom'la — «с Томом».",
  vocab: [
    v("trga2-1", "Neredeydin?", "Где ты был?", "Элиф стоит, уперев руки в бока.", "Послушать Neredeydin", p("l2-1")),
    v("trga2-2", "Müzedeydim.", "Я был в музее.", "Мурзик перед огромной древней мозаикой.", "Послушать Müzedeydim", p("l2-2")),
    v("trga2-3", "Kiminle?", "С кем?", "Элиф с любопытством наклоняет голову.", "Послушать Kiminle", p("l2-3")),
    v("trga2-4", "Tom'la gittik.", "Мы ходили с Томом.", "Мурзик и Том идут рядом по старой улице.", "Послушать Tom'la gittik", p("l2-4")),
    v("trga2-5", "Siz ne gördünüz?", "А что вы видели?", "Элиф садится рядом, готовая слушать.", "Послушать Siz ne gördünüz", p("l2-5")),
    v("trga2-6", "Çingene Kızı", "«Цыганская девочка» (мозаика)", "Знаменитая мозаика: лицо девочки с большими грустными глазами.", "Послушать Çingene Kızı", p("l2-6")),
    v("trga2-7", "Seni bekledim!", "Я тебя ждала!", "Элиф показывает на часы.", "Послушать Seni bekledim", p("l2-7")),
  ],
  dialogue: {
    title: "Мозаика",
    note: "Çingene Kızı — знаменитая древняя мозаика из музея Зевгмы в Газиантепе. Gözleri — «её глаза». Takip ediyor — «следят».",
    lines: [
      line("elif", "Murzik! Neredeydin? Seni bekledim!", "Мурзик! Где ты был? Я тебя ждала!"),
      line("murzik", "Müzedeydim. Özür dilerim!", "Я был в музее. Прости!"),
      line("elif", "Kiminle?", "С кем?"),
      line("murzik", "Tom'la gittik. Mozaikleri gördük.", "Мы ходили с Томом. Видели мозаики."),
      line("elif", "Çingene Kızı'nı gördünüz mü?", "А «Цыганскую девочку» видели?"),
      line("tom", "Evet, gördük! Gözleri insanı takip ediyor!", "Да, видели! Её глаза следят за тобой!"),
      line("elif", "Evet! Ben de geçen yıl sınıfımla gittim.", "Да! Я тоже ходила в прошлом году со своим классом."),
    ],
    gist: choice("trga2-d1", "Где был Мурзик?", [
      ["В музее с Томом.", true],
      ["На базаре с Элиф.", false],
      ["Дома один.", false],
    ]),
  },
  grammar: [
    {
      title: "Прошлое: все лица",
      paragraphs: [
        "Gitmek в прошлом: gittim (я), gittin (ты), gitti (он, она), gittik (мы), gittiniz (вы), gittiler (они).",
        "«Был» в месте — -daydım, -deydin…: evdeydim (я был дома), neredeydin? (где ты был?), müzedeydik (мы были в музее).",
      ],
      examples: [
        { ru: "Dün Tom'la parktaydık.", en: "Вчера мы с Томом были в парке." },
        { ru: "Onlar dün akşam geldiler.", en: "Они приехали вчера вечером." },
      ],
    },
  ],
  tasks: [
    choice("trga2-t1", "Как сказать «Мы видели»?", [
      ["gördük", true],
      ["gördünüz", false],
      ["gördüler", false],
    ], { skill: "grammar" }),
    listen("trga2-t2", "Послушай. Где были вчера?", "Dün sinemadaydık.", [
      ["В кино.", true],
      ["В музее.", false],
      ["Дома.", false],
    ]),
    match("trga2-t3", "Соедини пары.", [
      ["gittik", "мы ходили"],
      ["gittiniz", "вы ходили"],
      ["gittiler", "они ходили"],
      ["Kiminle?", "С кем?"],
    ], { skill: "words" }),
    missing("trga2-t4", "Какой буквы не хватает? («Где ты был?»)", "Nered", "ydin?", "e", ["e", "a", "i"]),
    speak("trga2-t5", "Dün neredeydin?", "Dün evdeydim. Annemle yemek yaptık.", "Вчера я был дома. Мы с мамой готовили.", { help: "Скажи вслух, где ты был(а) вчера и с кем." }),
    listen("trga2-t6", "Вспомни прошлый урок. Что спрашивают?", "Dün ne yaptın?", [
      ["Что ты делал вчера?", true],
      ["Где ты был вчера?", false],
      ["Что ты будешь делать завтра?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "masa-ortusu",
    itemName: "Вышитая скатерть",
    itemNameRu: "Masa örtüsü",
    ru: "Yaşasın! İşlemeli bir masa örtüsü!",
    en: "Ура! Вышитая скатерть!",
    a11y: "Белая скатерть с вышитыми по краю гранатами и фисташковыми веточками.",
    image: p("masa-ortusu"),
    steps: ["Бабушка Элиф вышивает скатерти.", "Она дарит одну Мурзику: по краю — гранаты и фисташки.", "Мурзик стелет её на свой столик.", "Комната сразу становится праздничной."],
    bridge: "Элиф просит: «Bana her şeyi anlat! Nasıl başladı?» — «Расскажи мне всё! Как это началось?»",
  },
};

const gaziantep3: Lesson = {
  id: "tr-a1-gaziantep-3",
  level: "A1",
  cityId: "tr-gaziantep",
  number: 3,
  title: "Как всё началось",
  minutes: 7,
  goals: ["Рассказывать по порядку: önce, sonra, sonunda", "Сказать «вдруг»: birden", "Пересказать начало путешествия"],
  vocabNote: "Önce — «сначала», sonra — «потом», birden — «вдруг», sonunda — «в конце концов, наконец».",
  vocab: [
    v("trga3-1", "Önce Paris'teydim.", "Сначала я был в Париже.", "Воспоминание: Мурзик на крыше в Париже, вдали Эйфелева башня.", "Послушать Önce Paris'teydim", p("l3-1")),
    v("trga3-2", "Birden bir kartpostal geldi.", "Вдруг пришла открытка.", "Открытка влетает в окно, Мурзик ловит её лапами.", "Послушать Birden bir kartpostal geldi", p("l3-2")),
    v("trga3-3", "Sonra İstanbul'a geldim.", "Потом я приехал в Стамбул.", "Воспоминание: паром на Босфоре, чайки.", "Послушать Sonra İstanbul'a geldim", p("l3-3")),
    v("trga3-4", "Orada Tom'la tanıştım.", "Там я познакомился с Томом.", "Воспоминание: Том с фотоаппаратом протягивает Мурзику руку на набережной Кадыкёя.", "Послушать Orada Tom'la tanıştım", p("l3-4")),
    v("trga3-5", "Sonunda buraya geldik.", "И наконец мы приехали сюда.", "Мурзик и Элиф сидят на ступеньках медной лавки.", "Послушать Sonunda buraya geldik", p("l3-5")),
    v("trga3-6", "büyükannem", "моя бабушка", "Старая открытка с подписью «Asya».", "Послушать büyükannem", p("l3-6")),
    v("trga3-7", "Vay be!", "Ничего себе!", "Элиф широко раскрыла глаза и рот.", "Послушать Vay be", p("l3-7")),
  ],
  dialogue: {
    title: "Рассказ на ступеньках",
    note: "Kayboldu — «пропала». Arıyorum — «ищу».",
    lines: [
      line("elif", "Anlat! Her şey nasıl başladı?", "Рассказывай! Как всё началось?"),
      line("murzik", "Önce Paris'teydim. Büyükannem Asya yıllar önce kayboldu.", "Сначала я был в Париже. Моя бабушка Ася пропала много лет назад."),
      line("murzik", "Birden bir kartpostal geldi: «İzimi takip et. — Asya»", "Вдруг пришла открытка: «Иди по моим следам. — Ася»"),
      line("elif", "Vay be! Sonra?", "Ничего себе! А потом?"),
      line("murzik", "Sonra İstanbul'a geldim. Orada Tom'la tanıştım. Sonra Bursa'ya, İzmir'e gittik…", "Потом я приехал в Стамбул. Там я познакомился с Томом. Потом мы поехали в Бурсу, в Измир…"),
      line("murzik", "Sonunda buraya geldik. Ve hâlâ onu arıyorum.", "И наконец приехали сюда. И я всё ещё её ищу."),
    ],
    gist: choice("trga3-d1", "Что было на первой открытке?", [
      ["«Иди по моим следам. — Ася»", true],
      ["«С днём рождения, внучек»", false],
      ["«Приезжай в Конью. — Ася»", false],
    ]),
  },
  grammar: [
    {
      title: "Рассказ по порядку",
      paragraphs: [
        "Önce — сначала, sonra — потом, birden — вдруг, sonunda — наконец. Эти слова обычно стоят в начале предложения.",
        "«После чего-то» — -den sonra: kahvaltıdan sonra (после завтрака). «До чего-то» — -den önce: yemekten önce (перед едой).",
      ],
      examples: [
        { ru: "Önce kahvaltı yaptık, sonra müzeye gittik.", en: "Сначала мы позавтракали, потом пошли в музей." },
        { ru: "Okuldan sonra Elif dedesine gidiyor.", en: "После школы Элиф идёт к дедушке." },
      ],
    },
  ],
  tasks: [
    choice("trga3-t1", "Как сказать «после завтрака»?", [
      ["kahvaltıdan sonra", true],
      ["kahvaltı sonra", false],
      ["kahvaltıda sonra", false],
    ], { skill: "grammar" }),
    listen("trga3-t2", "Послушай. Что было сначала?", "Önce çay içtik, sonra çarşıya gittik.", [
      ["Пили чай.", true],
      ["Ходили на базар.", false],
      ["Ходили в музей.", false],
    ]),
    match("trga3-t3", "Соедини пары.", [
      ["önce", "сначала"],
      ["sonra", "потом"],
      ["birden", "вдруг"],
      ["sonunda", "наконец"],
    ], { skill: "words" }),
    spell("trga3-t4", "Собери из букв слово «вдруг».", "birden"),
    speak("trga3-t5", "Bugün sabah ne yaptın?", "Önce kahvaltı yaptım, sonra işe gittim.", "Сначала я позавтракал, потом пошёл на работу.", { help: "Расскажи вслух по порядку, что ты делал(а) утром." }),
    choice("trga3-t6", "Как спросить «Где ты был?»", [
      ["Neredeydin?", true],
      ["Nereye gittin mi?", false],
      ["Nerede misin?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fistik",
    itemName: "Мешочек фисташек",
    itemNameRu: "Fıstık",
    ru: "Yaşasın! Antep fıstığı!",
    en: "Ура! Фисташки!",
    a11y: "Полотняный мешочек с ярко-зелёными фисташками.",
    image: p("fistik"),
    steps: ["Элиф слушает историю и грызёт фисташки.", "«Antep fıstığı dünyanın en iyisi!» — «Антепские фисташки — лучшие в мире!»", "Она отсыпает Мурзику целый мешочек.", "Мешочек ложится на скатерть."],
    bridge: "Элиф спрашивает: «Kartpostal gelince ne hissettin?» — «А что ты почувствовал, когда пришла открытка?»",
  },
};

const gaziantep4: Lesson = {
  id: "tr-a1-gaziantep-4",
  level: "A1",
  cityId: "tr-gaziantep",
  number: 4,
  title: "Как ты себя чувствовал?",
  minutes: 7,
  goals: ["Рассказать о чувствах в прошлом", "Сказать «я испугался», «я обрадовался»", "Спросить: Ne hissettin?"],
  vocabNote: "Чувства в прошлом звучат как действия: korktum — «я испугался», sevindim — «я обрадовался», şaşırdım — «я удивился».",
  vocab: [
    v("trga4-1", "Ne hissettin?", "Что ты почувствовал?", "Элиф подпирает щёку кулачком и слушает.", "Послушать Ne hissettin", p("l4-1")),
    v("trga4-2", "Çok şaşırdım.", "Я очень удивился.", "Воспоминание: Мурзик с открыткой, глаза-блюдца.", "Послушать Çok şaşırdım", p("l4-2")),
    v("trga4-3", "Çok mutlu oldum.", "Я был очень счастлив.", "Воспоминание: Мурзик прыгает от радости.", "Послушать Çok mutlu oldum", p("l4-3")),
    v("trga4-4", "Biraz korktum.", "Я немного испугался.", "Воспоминание: Мурзик у самолёта, ушки прижаты.", "Послушать Biraz korktum", p("l4-4")),
    v("trga4-5", "Üzüldüm.", "Мне стало грустно.", "Воспоминание: Мурзик один у окна под дождём.", "Послушать Üzüldüm", p("l4-5")),
    v("trga4-6", "Heyecanlandım.", "Я разволновался.", "Воспоминание: Мурзик с чемоданом на пороге.", "Послушать Heyecanlandım", p("l4-6")),
    v("trga4-7", "Çok cesursun!", "Ты очень смелый!", "Элиф с восхищением смотрит на Мурзика.", "Послушать Çok cesursun", p("l4-7")),
  ],
  dialogue: {
    title: "Что было на душе",
    note: "Uçak — «самолёт». İlk defa — «в первый раз». Cesur — «смелый».",
    lines: [
      line("elif", "Kartpostal gelince ne hissettin?", "Что ты почувствовал, когда пришла открытка?"),
      line("murzik", "Önce çok şaşırdım. Sonra çok sevindim!", "Сначала очень удивился. Потом очень обрадовался!"),
      line("elif", "Korktun mu?", "А ты испугался?"),
      line("murzik", "Biraz korktum. İlk defa uçağa bindim!", "Немного испугался. Я в первый раз сел в самолёт!"),
      line("murzik", "Bavulum kayboldu, çok üzüldüm. Ama sonra bulundu.", "Мой чемодан пропал, мне стало очень грустно. Но потом он нашёлся."),
      line("elif", "Çok cesursun, Murzik!", "Ты очень смелый, Мурзик!"),
    ],
    gist: choice("trga4-d1", "Что Мурзик почувствовал, когда пришла открытка?", [
      ["Сначала удивился, потом обрадовался.", true],
      ["Сначала испугался, потом загрустил.", false],
      ["Ничего не почувствовал.", false],
    ]),
  },
  grammar: [
    {
      title: "Чувства: прошлое вместо настоящего",
      paragraphs: [
        "По-турецки о чувстве, которое уже пришло, часто говорят в прошлом: Acıktım — «я проголодался» (то есть «я голоден»), Yoruldum — «я устал», Anladım — «понял».",
        "Поэтому и «очень рад» — тоже в прошлом: Çok sevindim! Memnun oldum!",
      ],
      examples: [
        { ru: "Acıktım! Yemek var mı?", en: "Я проголодался! Еда есть?" },
        { ru: "Seni gördüğüme çok sevindim.", en: "Очень рад тебя видеть." },
      ],
    },
  ],
  tasks: [
    choice("trga4-t1", "Как сказать «Я устал»?", [
      ["Yoruldum.", true],
      ["Yoruluyorum.", false],
      ["Yorgunum değil.", false],
    ], { skill: "grammar" }),
    listen("trga4-t2", "Послушай. Что почувствовал говорящий?", "Sınavı geçtim, çok sevindim!", [
      ["Обрадовался.", true],
      ["Испугался.", false],
      ["Загрустил.", false],
    ]),
    match("trga4-t3", "Соедини пары.", [
      ["korktum", "я испугался"],
      ["sevindim", "я обрадовался"],
      ["şaşırdım", "я удивился"],
      ["üzüldüm", "мне стало грустно"],
    ], { skill: "words" }),
    missing("trga4-t4", "Какой буквы не хватает? («я удивился»)", "Şa", "ırdım", "ş", ["ş", "s", "z"]),
    speak("trga4-t5", "İlk defa uçağa bindin. Ne hissettin?", "Biraz korktum, ama çok heyecanlandım.", "Немного испугался, но было очень интересно.", { help: "Расскажи вслух, что ты почувствовал(а)." }),
    choice("trga4-t6", "Как сказать «Сначала мы пили чай, потом пошли на базар»?", [
      ["Önce çay içtik, sonra çarşıya gittik.", true],
      ["Sonra çay içtik, önce çarşıya gittik.", false],
      ["Önce çay içiyoruz, sonra çarşı.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "elifin-resmi",
    itemName: "Рисунок Элиф",
    itemNameRu: "Elif'in resmi",
    ru: "Yaşasın! Elif'in resmi!",
    en: "Ура! Рисунок Элиф!",
    a11y: "Детский рисунок цветными карандашами: рыжий котёнок с чемоданом идёт по дорожке из открыток, впереди — силуэт кошки.",
    image: p("elifin-resmi"),
    steps: ["Элиф рисует, пока Мурзик рассказывает.", "На рисунке рыжий котёнок с чемоданом идёт по дорожке из открыток.", "«Bu sensin!» — «Это ты!»", "Мурзик вешает рисунок на стену."],
    bridge: "Элиф спрашивает: «Büyükanneni buldun mu?» — «Ты нашёл бабушку?» Мурзик вздыхает: «Henüz değil…» — «Ещё нет…»",
  },
};

const gaziantep5: Lesson = {
  id: "tr-a1-gaziantep-5",
  level: "A1",
  cityId: "tr-gaziantep",
  number: 5,
  title: "Уже или ещё нет?",
  minutes: 7,
  goals: ["Сказать «уже»: zaten", "Сказать «ещё не»: henüz … -medi", "Спросить: … bitti mi?"],
  vocabNote: "Zaten — «уже (и так)»: Zaten biliyorum — «я и так знаю». Henüz — «ещё (не)», обычно с отрицанием: Henüz bitmedi — «ещё не закончилось».",
  vocab: [
    v("trga5-1", "Büyükanneni buldun mu?", "Ты нашёл бабушку?", "Элиф осторожно трогает Мурзика за лапку.", "Послушать Büyükanneni buldun mu", p("l5-1")),
    v("trga5-2", "Henüz bulmadım.", "Ещё не нашёл.", "Мурзик смотрит вдаль, на закат над базаром.", "Послушать Henüz bulmadım", p("l5-2")),
    v("trga5-3", "Zaten biliyorum.", "Я и так знаю.", "Элиф машет рукой: «Знаю-знаю!»", "Послушать Zaten biliyorum", p("l5-3")),
    v("trga5-4", "Ödevin bitti mi?", "Уроки закончила?", "Дедушка-медник заглядывает в тетрадь Элиф.", "Послушать Ödevin bitti mi", p("l5-4")),
    v("trga5-5", "Henüz bitmedi.", "Ещё не закончилось.", "В тетради Элиф ещё много пустых строчек.", "Послушать Henüz bitmedi", p("l5-5")),
    v("trga5-6", "Zaten yedim.", "Я уже поел.", "Мурзик гладит круглый животик.", "Послушать Zaten yedim", p("l5-6")),
    v("trga5-7", "Hikâye henüz bitmedi!", "История ещё не закончилась!", "Мурзик решительно сжимает лапку.", "Послушать Hikâye henüz bitmedi", p("l5-7")),
  ],
  dialogue: {
    title: "Ещё не конец",
    note: "Dede — «дедушка». Ödev — «домашнее задание». Kebap — «кебаб».",
    lines: [
      line("elif", "Büyükanneni buldun mu?", "А бабушку ты нашёл?"),
      line("murzik", "Henüz bulmadım… Ama hikâye henüz bitmedi!", "Ещё не нашёл… Но история ещё не закончилась!"),
      line("tom", "Elif, ödevin bitti mi? Deden soruyor.", "Элиф, ты закончила уроки? Дедушка спрашивает."),
      line("elif", "Henüz bitmedi. Ama matematiği zaten biliyorum!", "Ещё нет. Но математику я и так знаю!"),
      line("tom", "Kebap yiyelim mi?", "Давайте поедим кебаб?"),
      line("murzik", "Ben zaten yedim! Baklava…", "А я уже поел! Пахлаву…"),
    ],
    gist: choice("trga5-d1", "Нашёл ли Мурзик бабушку?", [
      ["Ещё нет.", true],
      ["Да, в Ване.", false],
      ["Да, в Газиантепе.", false],
    ]),
  },
  grammar: [
    {
      title: "Zaten и henüz",
      paragraphs: [
        "Zaten — «уже, и так»: Zaten yedim. — Я уже поел. Zaten biliyorum. — Я и так знаю.",
        "Henüz — «ещё не»: обычно с отрицательным глаголом. Henüz yemedim. — Я ещё не ел. Henüz gelmedi. — Он ещё не пришёл. Короткий ответ: Henüz değil. — Ещё нет.",
      ],
      examples: [
        { ru: "Tom henüz uyanmadı.", en: "Том ещё не проснулся." },
        { ru: "Bu filmi zaten izledim.", en: "Этот фильм я уже смотрел." },
      ],
    },
  ],
  tasks: [
    choice("trga5-t1", "Как сказать «Я ещё не ел»?", [
      ["Henüz yemedim.", true],
      ["Henüz yedim.", false],
      ["Zaten yemedim.", false],
    ], { skill: "grammar" }),
    listen("trga5-t2", "Послушай. Пришёл ли автобус?", "Otobüs henüz gelmedi.", [
      ["Ещё не пришёл.", true],
      ["Уже пришёл.", false],
      ["Он не придёт.", false],
    ]),
    match("trga5-t3", "Соедини пары.", [
      ["zaten", "уже, и так"],
      ["henüz değil", "ещё нет"],
      ["bitti", "закончилось"],
      ["ödev", "домашнее задание"],
    ], { skill: "words" }),
    spell("trga5-t4", "Собери из букв слово «домашнее задание».", "ödev"),
    speak("trga5-t5", "Kahvaltı yaptın mı?", "Evet, zaten yaptım.", "Да, уже позавтракал.", { help: "Ответь вслух со словом zaten или henüz." }),
    listen("trga5-t6", "Вспомни прошлый урок. Что он почувствовал?", "Çok şaşırdım.", [
      ["Очень удивился.", true],
      ["Очень устал.", false],
      ["Очень испугался.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "gezi-gunlugu",
    itemName: "Дневник путешествий",
    itemNameRu: "Gezi günlüğü",
    ru: "Yaşasın! Bir gezi günlüğü!",
    en: "Ура! Дневник путешествий!",
    a11y: "Толстый дневник в кожаной обложке с тиснёным компасом, внутри чистые страницы.",
    image: p("gezi-gunlugu"),
    steps: ["Том протягивает Мурзику толстый дневник.", "«Hikâyeni yaz. Henüz bitmedi!» — «Записывай свою историю. Она ещё не закончилась!»", "Мурзик пишет на первой странице: «Paris».", "Дневник ложится рядом с рисунком Элиф."],
    bridge: "Вечером Элиф просит: «Fotoğraflarını göster!» — «Покажи свои фотографии!»",
  },
};

const gaziantep6: Lesson = {
  id: "tr-a1-gaziantep-6",
  level: "A1",
  cityId: "tr-gaziantep",
  number: 6,
  title: "Помнишь?",
  minutes: 7,
  goals: ["Спросить: Hatırlıyor musun?", "Показать и описать фотографию", "Сказать «не заметил»"],
  vocabNote: "Fark etmek — «заметить». Fark etmedim — «я не заметил». Tesadüf — «случайность, совпадение».",
  vocab: [
    v("trga6-1", "Hatırlıyor musun?", "Помнишь?", "Том держит на экране фотоаппарата снимок с моря.", "Послушать Hatırlıyor musun", p("l6-1")),
    v("trga6-2", "Bu fotoğrafı İzmir'de çektim.", "Эту фотографию я снял в Измире.", "Снимок набережной Измира на закате.", "Послушать Bu fotoğrafı İzmir'de çektim", p("l6-2")),
    v("trga6-3", "Bak, yine o!", "Смотри, опять он!", "Элиф тычет пальчиком в уголок снимка.", "Послушать Bak, yine o", p("l6-3")),
    v("trga6-4", "Her fotoğrafta var!", "Он на каждой фотографии!", "Веер снимков на столе, на каждом крошечный белый кот в шляпе.", "Послушать Her fotoğrafta var", p("l6-4")),
    v("trga6-5", "Hiç fark etmedim.", "Я совсем не заметил.", "Том хватается за голову.", "Послушать Hiç fark etmedim", p("l6-5")),
    v("trga6-6", "Bu tesadüf değil.", "Это не случайность.", "Мурзик серьёзно смотрит на снимки.", "Послушать Bu tesadüf değil", p("l6-6")),
    v("trga6-7", "Bizi takip ediyor.", "Он идёт за нами.", "Тень кота в шляпе на стене.", "Послушать Bizi takip ediyor", p("l6-7")),
  ],
  dialogue: {
    title: "Снимки Тома",
    note: "Çektim — «я снял (фото)». Köşede — «в углу». Yine — «опять».",
    lines: [
      line("tom", "Murzik, bu fotoğrafı hatırlıyor musun? İzmir'de çektim.", "Мурзик, помнишь этот снимок? Я снял его в Измире."),
      line("elif", "Bak! Köşede bir kedi var. Şapkalı!", "Смотрите! В углу кот. В шляпе!"),
      line("tom", "Bu da İstanbul… Bak, yine o!", "А это Стамбул… Смотрите, опять он!"),
      line("murzik", "Bursa, Kapadokya, Trabzon… Her fotoğrafta var!", "Бурса, Каппадокия, Трабзон… Он на каждой фотографии!"),
      line("tom", "Hiç fark etmedim!", "А тогда, на этих снимках, я его совсем не заметил!"),
      line("murzik", "Bu tesadüf değil, Tom. Bizi takip ediyor.", "Это не случайность, Том. Он идёт за нами."),
    ],
    gist: choice("trga6-d1", "Что нашла Элиф на снимках Тома?", [
      ["Кота в шляпе на каждом снимке.", true],
      ["Бабушку Асю.", false],
      ["Пропавший чемодан.", false],
    ]),
  },
  grammar: [
    {
      title: "Не сделал: повторяем",
      paragraphs: [
        "Отрицание в прошлом: fark et-me-di-m (я не заметил), gör-me-di-k (мы не видели), gel-me-di-ler (они не пришли).",
        "Hiç с отрицанием — «совсем, ни разу»: Hiç görmedim. — Я ни разу не видел. Hiç fark etmedik. — Мы совсем не заметили.",
      ],
      examples: [
        { ru: "Onu hiç görmedik.", en: "Мы его ни разу не видели." },
        { ru: "Elif ödevini unutmadı.", en: "Элиф не забыла уроки." },
      ],
    },
  ],
  tasks: [
    choice("trga6-t1", "Как сказать «Мы ни разу не видели»?", [
      ["Hiç görmedik.", true],
      ["Hiç gördük.", false],
      ["Hiç görmüyoruz değil.", false],
    ], { skill: "grammar" }),
    listen("trga6-t2", "Послушай. Где снята фотография?", "Bu fotoğrafı Antalya'da çektim.", [
      ["В Анталье.", true],
      ["В Анкаре.", false],
      ["В Измире.", false],
    ]),
    match("trga6-t3", "Соедини пары.", [
      ["fark etmek", "заметить"],
      ["tesadüf", "случайность"],
      ["köşede", "в углу"],
      ["yine", "опять"],
    ], { skill: "words" }),
    missing("trga6-t4", "Какой буквы не хватает? («фотография»)", "fo", "oğraf", "t", ["t", "d", "f"]),
    speak("trga6-t5", "Bu fotoğrafı nerede çektin?", "Bu fotoğrafı İstanbul'da çektim.", "Эту фотографию я снял в Стамбуле.", { help: "Скажи вслух, где сделана фотография." }),
    choice("trga6-t6", "Как сказать «Ещё нет»?", [
      ["Henüz değil.", true],
      ["Zaten değil.", false],
      ["Henüz var.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fotograf-albumu",
    itemName: "Фотоальбом",
    itemNameRu: "Fotoğraf albümü",
    ru: "Yaşasın! Bir fotoğraf albümü!",
    en: "Ура! Фотоальбом!",
    a11y: "Большой фотоальбом с картонными страницами, в нём снимки из всех турецких городов.",
    image: p("fotograf-albumu"),
    steps: ["Том печатает снимки в фотоателье на базаре.", "Мурзик вклеивает их в большой альбом.", "Под каждым снимком — название города.", "И на каждом, в уголке, — он. Кот в шляпе."],
    bridge: "Завтра Мурзик расскажет всю историю целиком — дедушке Элиф.",
  },
};

const gaziantep7: Lesson = {
  id: "tr-a1-gaziantep-7",
  level: "A1",
  cityId: "tr-gaziantep",
  number: 7,
  title: "Вся история",
  minutes: 8,
  goals: ["Рассказать историю по порядку в прошлом", "Ответить на вопросы о путешествии", "Вспомнить все слова Газиантепа"],
  vocabNote: "Yolculuk — «путешествие, поездка». Şimdiye kadar — «до сих пор».",
  vocab: [
    v("trga7-1", "Şimdiye kadar on üç şehir gördüm.", "Я уже увидел тринадцать городов.", "Карта Турции, на ней флажки-лапки по всем городам.", "Послушать Şimdiye kadar on üç şehir gördüm", p("l7-1")),
    v("trga7-2", "En çok hangi şehri sevdin?", "Какой город тебе понравился больше всего?", "Дедушка Элиф в кожаном фартуке спрашивает у Мурзика.", "Послушать En çok hangi şehri sevdin", p("l7-2")),
    v("trga7-3", "Hepsini sevdim!", "Мне понравились все!", "Мурзик раскидывает лапы, как будто обнимает весь мир.", "Послушать Hepsini sevdim", p("l7-3")),
    v("trga7-4", "yolculuk", "путешествие", "Чемодан Мурзика, весь в наклейках городов.", "Послушать yolculuk", p("l7-4")),
    v("trga7-5", "Çok şey öğrendim.", "Я многому научился.", "Мурзик листает свой дневник путешествий.", "Послушать Çok şey öğrendim", p("l7-5")),
    v("trga7-6", "bakır tepsi", "медный поднос", "Сияющий медный поднос с узором из гранатов.", "Послушать bakır tepsi", p("l7-6")),
    v("trga7-7", "Yolun açık olsun!", "Счастливого тебе пути!", "Дедушка Элиф кладёт ладонь на голову Мурзику.", "Послушать Yolun açık olsun", p("l7-7")),
  ],
  dialogue: {
    title: "Дедушка-медник",
    note: "Дедушка Элиф — медник, он говорит в рассказе через Элиф. Sabahtan akşama kadar — «с утра до вечера». Yaptı — «сделал».",
    lines: [
      line("elif", "Dedem soruyor: En çok hangi şehri sevdin?", "Дедушка спрашивает: какой город тебе понравился больше всего?"),
      line("murzik", "Hepsini sevdim! Önce İstanbul'u gördüm, sonra denizi, sonra dağları…", "Мне понравились все! Сначала я увидел Стамбул, потом море, потом горы…"),
      line("murzik", "Çok şey öğrendim. Ama büyükannemi henüz bulmadım.", "Я многому научился. Но бабушку ещё не нашёл."),
      line("elif", "Dedem bunu senin için yaptı. Sabahtan akşama kadar çalıştı!", "Дедушка сделал это для тебя. Работал с утра до вечера!"),
      line("murzik", "Bir bakır tepsi! Çok teşekkür ederim!", "Медный поднос! Большое спасибо!"),
      line("elif", "Dedem diyor ki: Yolun açık olsun!", "Дедушка говорит: счастливого тебе пути!"),
    ],
    gist: choice("trga7-d1", "Что сделал дедушка Элиф для Мурзика?", [
      ["Медный поднос.", true],
      ["Медный чайник.", false],
      ["Фотоальбом.", false],
    ]),
  },
  grammar: [
    {
      title: "Рассказ в прошлом: всё вместе",
      paragraphs: [
        "Чтобы рассказать историю: прошедшее время (gittim, gördük), слова порядка (önce, sonra, birden, sonunda) и чувства (sevindim, korktum).",
        "Önce Paris'teydim. Birden bir kartpostal geldi. Çok şaşırdım. Sonra Tom'la yola çıktık. Sonunda buraya geldik.",
      ],
      examples: [
        { ru: "Önce Ankara'ya gittik, sonra Trabzon'a.", en: "Сначала мы поехали в Анкару, потом в Трабзон." },
        { ru: "Birden yağmur başladı ve çok üzüldük.", en: "Вдруг начался дождь, и мы очень расстроились." },
      ],
    },
  ],
  tasks: [
    listen("trga7-t1", "Аудиоэкзамен. О чём рассказ?", "Önce Van'daydık. Sonra otobüsle buraya geldik. Birden Elif'le tanıştık. Çok sevindim!", [
      ["Были в Ване, приехали на автобусе, познакомились с Элиф.", true],
      ["Были в Трабзоне, прилетели на самолёте, потеряли чемодан.", false],
      ["Были в Ване, пошли в музей, видели мозаику.", false],
    ]),
    choice("trga7-t2", "Как сказать «Они пришли вчера»?", [
      ["Dün geldiler.", true],
      ["Dün geldik.", false],
      ["Dün geliyorlar.", false],
    ], { skill: "grammar" }),
    match("trga7-t3", "Соедини пары.", [
      ["yolculuk", "путешествие"],
      ["bakır", "медь"],
      ["öğrendim", "я научился"],
      ["hepsini", "всех, всё"],
    ], { skill: "words" }),
    spell("trga7-t4", "Собери из букв слово «поднос».", "tepsi"),
    speak("trga7-t5", "Geçen yıl nereye gittin?", "Geçen yıl denize gittim. Çok güzeldi!", "В прошлом году я ездил на море. Было очень здорово!", { help: "Расскажи вслух о своей поездке." }),
    script("trga7-t6", "Вспомни весь Газиантеп. Закончи разговоры.", [
      { speaker: "Элиф", text: "Dün ne yaptın?" },
      { speaker: "Ты", answer: "Önce müzeye gittim, sonra baklava yedim.", options: ["Önce müzeye gittim, sonra baklava yedim.", "Önce müzeye gidiyorum, sonra baklava.", "Henüz değil."] },
      { speaker: "Элиф", text: "Kiminle gittin?" },
      { speaker: "Ты", answer: "Tom'la gittik.", options: ["Tom'la gittik.", "Tom gittik.", "Tom'la gittiler."] },
      { speaker: "Элиф", text: "Büyükanneni buldun mu?" },
      { speaker: "Ты", answer: "Henüz bulmadım.", options: ["Henüz bulmadım.", "Henüz buldum.", "Zaten bulmadım."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bakir-tepsi",
    itemName: "Медный поднос",
    itemNameRu: "Bakır tepsi",
    ru: "Yaşasın! Bir bakır tepsi!",
    en: "Ура! Медный поднос!",
    a11y: "Сияющий медный поднос ручной работы. По краю отчеканены гранаты, а в центре — маленький рыжий котёнок.",
    image: p("bakir-tepsi"),
    steps: ["Дедушка Элиф весь день стучал молоточком.", "По краю подноса — гранаты.", "А в центре — маленький рыжий котёнок!", "Мурзик кладёт поднос в чемодан, завернув в скатерть."],
    bridge: "Последний город уровня A1 — Мардин. Там ждёт друг Тома… и, может быть, ответ.",
  },
};

const story: CityStory = {
  home: {
    name: "Комната над медным базаром",
    nameRu: "Bakırcılar Çarşısı'nın üstünde bir oda",
    image: p("home"),
    a11y: "Пустая комната с каменными стенами над медным базаром. Снизу доносится стук молоточков. Посередине чемодан Мурзика.",
  },
  keepsakeId: "bakir-tepsi",
  welcomeRu: "Merhaba, Gaziantep!",
  welcomeEn: "Привет, Газиантеп!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том в Газиантепе на медном базаре: блестящие медные кувшины и подносы, мастер стучит молоточком.",
  departureImage: p("departure"),
  departureA11y: "Элиф и её дедушка в кожаном фартуке машут на прощание у медной лавки.",
  finale: [
    {
      image: p("photos"),
      a11y: "Ночь. Мурзик сидит над раскрытым фотоальбомом. На каждом снимке в уголке — белый кот в шляпе. На последней странице пустое место.",
      lines: [
        { en: "Ночью Мурзик снова листает альбом." },
        { en: "Стамбул, Бурса, Измир, Каппадокия, Трабзон… На каждом снимке — он." },
        { ru: "Kimsin sen?", en: "Кто же ты?" },
      ],
    },
    {
      image: p("bakir-tepsi"),
      a11y: "Мурзик обходит свою комнату над медным базаром, которую обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свою комнату над базаром. Том фотографирует её для журнала." },
        { en: "С собой — медный поднос с рыжим котёнком." },
        { en: "Рисунок Элиф ложится в дневник путешествий." },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "Gaziantep tamamlandı!", en: "Газиантеп пройден!" },
        { en: "7 / 7 уроков" },
        { en: "A1 — пройден тринадцатый блок." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Элиф машет на прощание.",
      lines: [
        { ru: "Hoşça kal, Elif!", en: "Пока, Элиф!" },
        { ru: "Sıradaki durak: Mardin!", en: "Следующая остановка: Мардин!" },
      ],
    },
    {
      image: p("road"),
      a11y: "Автобус едет на восток по жёлтой равнине к городу на горе.",
      lines: [{ ru: "Gaziantep → Mardin", en: "Газиантеп → Мардин" }],
    },
    {
      image: pic("tr/mardin/arrival"),
      a11y: "Мурзик и Том перед Мардином: медовые каменные дома ступенями поднимаются по склону горы, внизу бескрайняя равнина.",
      lines: [
        { ru: "Merhaba, Mardin!", en: "Привет, Мардин!" },
        { ru: "Bütün şehir taştan!", en: "Весь город из камня!" },
      ],
    },
  ],
};

export const trGaziantep = {
  id: "tr-gaziantep",
  name: "Газиантеп",
  nameTr: "Gaziantep",
  lessons: [gaziantep1, gaziantep2, gaziantep3, gaziantep4, gaziantep5, gaziantep6, gaziantep7],
  story,
};
