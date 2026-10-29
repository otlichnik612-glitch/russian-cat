import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Бодрум · «Как передвигаться» · пешком и на велосипеде, прокат, куда, музей, карта, «мы заблудились», последний вечер. */

const p = (name: string) => pic(`tr/bodrum/${name}`);

const bodrum1: Lesson = {
  id: "tr-a1-bodrum-1",
  level: "A1",
  cityId: "tr-bodrum",
  number: 1,
  title: "Пешком или на велосипеде?",
  minutes: 7,
  goals: ["Сказать, как ты добираешься", "Спросить, сколько времени займёт дорога", "Говорить о том, что происходит сейчас: -iyor"],
  vocabNote: "Kaptan — «капитан». В Турции его ставят после имени: Ali Kaptan, как Kemal Bey или Ayşe Teyze.",
  vocab: [
    v("trbo1-1", "yürüyerek", "пешком", "Мурзик бодро шагает по белой улочке с синими дверями.", "Послушать yürüyerek", p("l1-1")),
    v("trbo1-2", "bisiklet", "велосипед", "Голубой велосипед с корзинкой у белой стены.", "Послушать bisiklet", p("l1-2")),
    v("trbo1-3", "taksi", "такси", "Жёлтое такси на набережной.", "Послушать taksi", p("l1-3")),
    v("trbo1-4", "tekne", "лодка", "Деревянная лодка покачивается в синей бухте.", "Послушать tekne", p("l1-4")),
    v("trbo1-5", "Yürüyorum.", "Я иду пешком.", "Мурзик идёт, размахивая лапами, с рюкзачком за спиной.", "Послушать Yürüyorum", p("l1-5")),
    v("trbo1-6", "Bisiklete biniyorum.", "Я еду на велосипеде.", "Том едет на велосипеде, его зелёное пальто развевается.", "Послушать Bisiklete biniyorum", p("l1-6")),
    v("trbo1-7", "Ne kadar sürer?", "Сколько времени займёт?", "Мурзик держит песочные часы и вопросительно смотрит.", "Послушать Ne kadar sürer", p("l1-7")),
  ],
  dialogue: {
    title: "На гулете",
    note: "Gulet — деревянная парусная яхта, на них в Бодруме живут и путешествуют. Dikkat — «осторожно». Dar — «узкий».",
    lines: [
      line("captain", "Hoş geldiniz! Benim adım Ali. Bu teknenin kaptanıyım.", "Добро пожаловать! Меня зовут Али. Я капитан этой лодки."),
      line("tom", "Merhaba, Ali Kaptan! Kaleye nasıl gidebiliriz?", "Здравствуйте, капитан Али! Как нам добраться до крепости?"),
      line("captain", "Yürüyerek gidin. Yakın.", "Идите пешком. Это близко."),
      line("murzik", "Ne kadar sürer?", "Сколько времени займёт?"),
      line("captain", "On dakika. Ama bisikletle beş dakika!", "Десять минут. А на велосипеде — пять!"),
      line("tom", "Bisiklet var mı?", "А велосипед есть?"),
      line("captain", "Var! Ama dikkat: sokaklar çok dar.", "Есть! Но осторожно: улицы очень узкие."),
      line("murzik", "Ben yürüyorum. Tom bisiklete biniyor!", "Я иду пешком. А Том едет на велосипеде!"),
    ],
    gist: choice("trbo1-d1", "Как они доберутся до крепости?", [
      ["Мурзик пешком, Том на велосипеде.", true],
      ["Оба на такси.", false],
      ["На лодке.", false],
    ]),
  },
  grammar: [
    {
      title: "Сейчас: -iyor",
      paragraphs: [
        "То, что происходит сейчас, — основа глагола и -ıyor / -iyor / -uyor / -üyor: bin-iyor — едет, садится. Если основа кончается на гласную, она сливается с -yor: yürü-yor — идёт.",
        "Дальше — окончание лица: yürüyor-um — я иду, yürüyor-sun — ты идёшь, yürüyor — он идёт, yürüyor-uz — мы идём.",
      ],
      examples: [
        { ru: "Ben yürüyorum, sen bisiklete biniyorsun.", en: "Я иду пешком, а ты едешь на велосипеде." },
        { ru: "Tom taksiyle gidiyor.", en: "Том едет на такси." },
      ],
    },
  ],
  tasks: [
    choice("trbo1-t1", "Как сказать «Я иду пешком»?", [
      ["Yürüyorum.", true],
      ["Yürüyorsun.", false],
      ["Yürüdüm.", false],
    ], { skill: "grammar" }),
    listen("trbo1-t2", "Послушай. На чём едет говорящий?", "Taksiyle gidiyorum.", [
      ["На такси.", true],
      ["На велосипеде.", false],
      ["Пешком.", false],
    ]),
    match("trbo1-t3", "Соедини пары.", [
      ["yürüyerek", "пешком"],
      ["bisiklet", "велосипед"],
      ["tekne", "лодка"],
      ["taksi", "такси"],
    ], { skill: "words" }),
    missing("trbo1-t4", "Какой буквы не хватает? («пешком»)", "y", "rüyerek", "ü", ["ü", "u", "ı"]),
    speak("trbo1-t5", "Okula nasıl gidiyorsun?", "Otobüsle gidiyorum.", "Я езжу на автобусе.", { help: "Расскажи вслух, как ты добираешься до учёбы или работы." }),
    choice("trbo1-t6", "Как спросить «Что ты будешь делать на выходных?»", [
      ["Hafta sonu ne yapacaksın?", true],
      ["Hafta sonu ne yaptın?", false],
      ["Hafta sonu nerede?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bisiklet",
    itemName: "Велосипед",
    itemNameRu: "Bisiklet",
    ru: "Yaşasın! Küçük bir bisiklet!",
    en: "Ура! Маленький велосипед!",
    a11y: "Маленький голубой велосипед с корзинкой стоит на причале у гулета.",
    image: p("bisiklet"),
    steps: ["У гулета стоит старый детский велосипед.", "«Bu senin olsun!» — говорит капитан.", "Мурзик звонит в звоночек.", "Дзинь-дзинь!"],
    bridge: "Тому нужен велосипед побольше, и он идёт в прокат.",
  },
};

const bodrum2: Lesson = {
  id: "tr-a1-bodrum-2",
  level: "A1",
  cityId: "tr-bodrum",
  number: 2,
  title: "Прокат на день",
  minutes: 7,
  goals: ["Взять что-нибудь напрокат", "Сказать, на сколько: на час, на день", "Сказать «с … до …»"],
  vocabNote: "-liğine / -lığına / -luğuna / -lüğüne — «на (срок)»: bir saatliğine — на час, bir günlüğüne — на день.",
  vocab: [
    v("trbo2-1", "kiralamak", "брать напрокат", "Вывеска проката: ряды велосипедов и скутеров.", "Послушать kiralamak", p("l2-1")),
    v("trbo2-2", "Bir bisiklet kiralamak istiyorum.", "Я хочу взять напрокат велосипед.", "Том стоит у стойки проката и показывает на велосипед.", "Послушать Bir bisiklet kiralamak istiyorum", p("l2-2")),
    v("trbo2-3", "Kaç saatliğine?", "На сколько часов?", "Продавец в прокате держит часы и вопросительно смотрит.", "Послушать Kaç saatliğine", p("l2-3")),
    v("trbo2-4", "Bir günlüğüne.", "На один день.", "Том показывает один палец и солнышко на календаре.", "Послушать Bir günlüğüne", p("l2-4")),
    v("trbo2-5", "Saat ikiden beşe kadar.", "С двух до пяти.", "Двое часов: на одних два, на других пять, между ними стрелка.", "Послушать Saat ikiden beşe kadar", p("l2-5")),
    v("trbo2-6", "kask", "шлем", "Мурзик в великоватом синем шлеме.", "Послушать kask", p("l2-6")),
    v("trbo2-7", "depozito", "залог", "Том кладёт на стойку паспорт и деньги.", "Послушать depozito", p("l2-7")),
  ],
  dialogue: {
    title: "В прокате",
    note: "İki yüz — «двести». Alalım — «давай возьмём».",
    lines: [
      line("tom", "Merhaba! Bir bisiklet kiralamak istiyorum.", "Здравствуйте! Я хочу взять напрокат велосипед."),
      line("seller", "Tabii. Kaç saatliğine?", "Конечно. На сколько часов?"),
      line("tom", "Saat ikiden beşe kadar.", "С двух до пяти."),
      line("seller", "Üç saat. Altmış lira. Kask da var.", "Три часа. Шестьдесят лир. Шлем тоже есть."),
      line("murzik", "Bir günlüğüne ne kadar?", "А сколько на целый день?"),
      line("seller", "Yüz lira. Depozito iki yüz lira.", "Сто лир. Залог двести лир."),
      line("tom", "Tamam, bir günlüğüne alalım!", "Хорошо, давайте на день!"),
    ],
    gist: choice("trbo2-d1", "На сколько Том берёт велосипед?", [
      ["На один день.", true],
      ["На три часа.", false],
      ["На неделю.", false],
    ]),
  },
  grammar: [
    {
      title: "С … до …: -den … -e kadar",
      paragraphs: [
        "«Откуда, с какого момента» — окончание -den / -dan: saat iki-den — с двух. После глухих звуков — -ten / -tan: beş-ten — с пяти.",
        "«До» — -e / -a kadar: beş-e kadar — до пяти, akşam-a kadar — до вечера. Вместе: sabahtan akşama kadar — с утра до вечера.",
      ],
      examples: [
        { ru: "Saat ikiden beşe kadar.", en: "С двух до пяти." },
        { ru: "Sabahtan akşama kadar plajdayız.", en: "Мы на пляже с утра до вечера." },
      ],
    },
  ],
  tasks: [
    listen("trbo2-t1", "Послушай. С какого до какого часа?", "Saat üçten altıya kadar.", [
      ["С трёх до шести.", true],
      ["С двух до пяти.", false],
      ["С шести до трёх.", false],
    ]),
    choice("trbo2-t2", "Как сказать «с утра до вечера»?", [
      ["sabahtan akşama kadar", true],
      ["sabaha akşamdan kadar", false],
      ["sabahta akşamda kadar", false],
    ], { skill: "grammar" }),
    match("trbo2-t3", "Соедини пары.", [
      ["kask", "шлем"],
      ["kiralamak", "брать напрокат"],
      ["bir günlüğüne", "на один день"],
      ["depozito", "залог"],
    ], { skill: "words" }),
    spell("trbo2-t4", "Собери из букв слово «шлем».", "kask"),
    speak("trbo2-t5", "Kaç saatliğine?", "İki saatliğine.", "На два часа.", { help: "Ответь вслух, на сколько берёшь велосипед." }),
    listen("trbo2-t6", "Вспомни прошлый урок. Как добирается говорящий?", "Yürüyorum.", [
      ["Идёт пешком.", true],
      ["Едет на велосипеде.", false],
      ["Плывёт на лодке.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kum-saati",
    itemName: "Песочные часы",
    itemNameRu: "Kum saati",
    ru: "Yaşasın! Bir kum saati!",
    en: "Ура! Песочные часы!",
    a11y: "Песочные часы с голубым песком стоят на полке в каюте.",
    image: p("kum-saati"),
    steps: ["Продавец в прокате дарит Мурзику песочные часы.", "«Zamanı unutmayın!» — «Не забывайте о времени!»", "Мурзик переворачивает их.", "Голубой песок бежит вниз."],
    bridge: "Звонит Тарчын: «Я еду к вам из Измира! Куда мне идти?»",
  },
};

const bodrum3: Lesson = {
  id: "tr-a1-bodrum-3",
  level: "A1",
  cityId: "tr-bodrum",
  number: 3,
  title: "Куда?",
  minutes: 7,
  goals: ["Спросить, куда кто-то идёт", "Сказать «на пляж», «в порт», «в крепость»", "Предложить искупаться"],
  vocabNote: "Denize girmek — «войти в море», то есть искупаться. Hadi, denize girelim! — «Пойдём купаться!»",
  vocab: [
    v("trbo3-1", "Nereye gidiyorsun?", "Куда ты идёшь?", "Тарчын с чемоданчиком стоит на причале и машет.", "Послушать Nereye gidiyorsun", p("l3-1")),
    v("trbo3-2", "Plaja gidiyorum.", "Я иду на пляж.", "Мурзик с полотенцем и зонтиком шагает к морю.", "Послушать Plaja gidiyorum", p("l3-2")),
    v("trbo3-3", "kaleye", "в крепость", "Дорожка ведёт вверх к старой каменной крепости над бухтой.", "Послушать kaleye", p("l3-3")),
    v("trbo3-4", "limana", "в порт", "Указатель со стрелкой к порту с лодками.", "Послушать limana", p("l3-4")),
    v("trbo3-5", "denize", "в море, к морю", "Мурзик с разбегу прыгает в синюю воду.", "Послушать denize", p("l3-5")),
    v("trbo3-6", "Hadi, denize girelim!", "Пойдём купаться!", "Мурзик в надувном круге тянет Тарчына к воде.", "Послушать Hadi, denize girelim", p("l3-6")),
    v("trbo3-7", "Geliyorum!", "Иду!", "Тарчын нехотя поднимается с шезлонга.", "Послушать Geliyorum", p("l3-7")),
  ],
  dialogue: {
    title: "Тарчын приехал",
    note: "Hamağa — «в гамак». Yorucu — «утомительный».",
    lines: [
      line("tarcin", "Merhaba! Ben geldim! Nereye gidiyorsunuz?", "Привет! Я приехал! Куда вы идёте?"),
      line("murzik", "Tarçın! Plaja gidiyoruz. Sen de gel!", "Тарчын! Мы идём на пляж. Пойдём с нами!"),
      line("tarcin", "Plaja mı? Ben hamağa gitmek istiyorum.", "На пляж? А я хочу в гамак."),
      line("tom", "Hamak yok! Önce kaleye, sonra limana, sonra denize!", "Гамака нет! Сначала в крепость, потом в порт, потом в море!"),
      line("tarcin", "Çok yorucu!", "Как утомительно!"),
      line("murzik", "Hadi, denize girelim!", "Пойдём купаться!"),
      line("tarcin", "Tamam, tamam… Geliyorum!", "Ладно, ладно… Иду!"),
    ],
    gist: choice("trbo3-d1", "Куда хочет Тарчын?", [
      ["В гамак.", true],
      ["В крепость.", false],
      ["В порт.", false],
    ]),
  },
  grammar: [
    {
      title: "Куда: -e, -a",
      paragraphs: [
        "«Куда» — окончание -e или -a: plaj → plaja (на пляж), liman → limana (в порт), deniz → denize (в море).",
        "После гласной добавляется y: kale → kaleye (в крепость), Antalya → Antalya'ya. Вопрос: Nereye? — Куда?",
      ],
      examples: [
        { ru: "Önce kaleye, sonra limana gidiyoruz.", en: "Сначала мы идём в крепость, потом в порт." },
        { ru: "Nereye gidiyorsun? — Plaja.", en: "Куда ты идёшь? — На пляж." },
      ],
    },
  ],
  tasks: [
    choice("trbo3-t1", "Как сказать «в крепость»? (крепость — kale)", [
      ["kaleye", true],
      ["kalea", false],
      ["kalede", false],
    ], { skill: "grammar" }),
    listen("trbo3-t2", "Послушай. Куда идёт говорящий?", "Limana gidiyorum.", [
      ["В порт.", true],
      ["На пляж.", false],
      ["В крепость.", false],
    ]),
    match("trbo3-t3", "Соедини пары.", [
      ["plaj", "пляж"],
      ["kale", "крепость"],
      ["liman", "порт"],
      ["deniz", "море"],
    ], { skill: "words" }),
    missing("trbo3-t4", "Какой буквы не хватает? («пляж»)", "pla", "", "j", ["j", "c", "ş"]),
    speak("trbo3-t5", "Nereye gidiyorsun?", "Plaja gidiyorum.", "Я иду на пляж.", { help: "Ответь вслух, куда ты идёшь." }),
    choice("trbo3-t6", "Как сказать «с двух до пяти»?", [
      ["Saat ikiden beşe kadar.", true],
      ["Saat ikiye beşten kadar.", false],
      ["Saat iki beş kadar.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "can-simidi",
    itemName: "Спасательный круг",
    itemNameRu: "Can simidi",
    ru: "Yaşasın! Bir can simidi!",
    en: "Ура! Спасательный круг!",
    a11y: "Красно-белый спасательный круг висит на стене каюты.",
    image: p("can-simidi"),
    steps: ["Капитан Али даёт Тарчыну спасательный круг.", "Тарчын тут же засыпает в нём прямо на воде.", "Том смеётся: can simidi — буквально «бублик жизни»!", "Теперь круг висит в каюте."],
    bridge: "Завтра — музей в крепости. Там хранят сокровища, найденные под водой!",
  },
};

const bodrum4: Lesson = {
  id: "tr-a1-bodrum-4",
  level: "A1",
  cityId: "tr-bodrum",
  number: 4,
  title: "Музей в крепости",
  minutes: 7,
  goals: ["Спросить, открыто ли и сколько стоит вход", "Спросить, можно ли фотографировать", "Понять, что запрещено: yasak"],
  vocabNote: "В крепости Бодрума — музей подводной археологии: там старинные корабли и амфоры со дна моря.",
  vocab: [
    v("trbo4-1", "müze", "музей", "Ворота старой крепости, над ними флажки с якорями.", "Послушать müze", p("l4-1")),
    v("trbo4-2", "Giriş ne kadar?", "Сколько стоит вход?", "Том у кассы музея показывает на табличку с ценами.", "Послушать Giriş ne kadar", p("l4-2")),
    v("trbo4-3", "Fotoğraf çekebilir miyim?", "Можно фотографировать?", "Том вежливо показывает на свой фотоаппарат.", "Послушать Fotoğraf çekebilir miyim", p("l4-3")),
    v("trbo4-4", "Yasak.", "Нельзя. Запрещено.", "Знак: перечёркнутая вспышка фотоаппарата.", "Послушать Yasak", p("l4-4")),
    v("trbo4-5", "Dokunmak yasak!", "Трогать нельзя!", "Знак: перечёркнутая ладонь у старинной амфоры.", "Послушать Dokunmak yasak", p("l4-5")),
    v("trbo4-6", "Açık mı?", "Открыто?", "Мурзик заглядывает в приоткрытые деревянные ворота.", "Послушать Açık mı", p("l4-6")),
    v("trbo4-7", "eski", "старый, древний", "Древний деревянный корабль под стеклом в музее.", "Послушать eski", p("l4-7")),
  ],
  dialogue: {
    title: "Сокровища со дна моря",
    note: "Kişi başı — «с человека». Flaş — «вспышка». Gemi — «корабль».",
    lines: [
      line("murzik", "Merhaba! Müze açık mı?", "Здравствуйте! Музей открыт?"),
      line("cashier", "Evet, açık. Hoş geldiniz.", "Да, открыт. Добро пожаловать."),
      line("tom", "Giriş ne kadar?", "Сколько стоит вход?"),
      line("cashier", "Kişi başı yüz lira.", "Сто лир с человека."),
      line("tom", "Fotoğraf çekebilir miyim?", "Можно фотографировать?"),
      line("cashier", "Evet, ama flaş yasak.", "Да, но без вспышки."),
      line("tarcin", "Bu eski bir gemi mi?", "Это старинный корабль?"),
      line("cashier", "Evet, çok eski! Ama lütfen, dokunmak yasak!", "Да, очень древний! Но, пожалуйста, трогать нельзя!"),
    ],
    gist: choice("trbo4-d1", "Что нельзя делать в музее?", [
      ["Трогать экспонаты и снимать со вспышкой.", true],
      ["Фотографировать вообще.", false],
      ["Разговаривать.", false],
    ]),
  },
  grammar: [
    {
      title: "Нельзя: -mek yasak",
      paragraphs: [
        "«Делать что-то нельзя» — глагол на -mek / -mak и слово yasak: Dokunmak yasak. — Трогать нельзя. Burada yüzmek yasak. — Здесь нельзя плавать.",
        "«Можно мне?» — -ebilir miyim? / -abilir miyim? (ты помнишь это из Бурсы): Girebilir miyim? — Можно войти?",
      ],
      examples: [
        { ru: "Burada fotoğraf çekmek yasak.", en: "Здесь нельзя фотографировать." },
        { ru: "Girebilir miyim?", en: "Можно войти?" },
      ],
    },
  ],
  tasks: [
    choice("trbo4-t1", "Как сказать «Здесь нельзя плавать»? (плавать — yüzmek)", [
      ["Burada yüzmek yasak.", true],
      ["Burada yüzmek yasaklar.", false],
      ["Burada yüzüyor yasak.", false],
    ], { skill: "grammar" }),
    listen("trbo4-t2", "Послушай. Что разрешают?", "Fotoğraf çekebilirsiniz, ama flaş yasak.", [
      ["Снимать без вспышки.", true],
      ["Снимать со вспышкой.", false],
      ["Ничего не снимать.", false],
    ]),
    match("trbo4-t3", "Соедини пары.", [
      ["müze", "музей"],
      ["giriş", "вход"],
      ["yasak", "нельзя"],
      ["eski", "старый"],
    ], { skill: "words" }),
    missing("trbo4-t4", "Какой буквы не хватает? («трогать»)", "Dok", "nmak", "u", ["u", "ü", "o"]),
    speak("trbo4-t5", "Fotoğraf çekebilir miyim?", "Evet, ama flaş yasak.", "Да, но без вспышки.", { help: "Ответь вслух как сотрудник музея." }),
    choice("trbo4-t6", "Как сказать «Я иду на пляж»?", [
      ["Plaja gidiyorum.", true],
      ["Plajda gidiyorum.", false],
      ["Plajdan gidiyorum.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tablo",
    itemName: "Картина с белыми домиками",
    itemNameRu: "Tablo",
    ru: "Yaşasın! Güzel bir tablo!",
    en: "Ура! Красивая картина!",
    a11y: "Маленькая картина маслом: белые домики Бодрума, синие двери и лодки в бухте.",
    image: p("tablo"),
    steps: ["В лавке у музея висят картины.", "На одной — белые домики и синие двери.", "Мурзик покупает её на память.", "Картина висит над койкой."],
    bridge: "Капитан Али достаёт карту: «Вот лучшие бухты для ныряния. Показать?»",
  },
};

const bodrum5: Lesson = {
  id: "tr-a1-bodrum-5",
  level: "A1",
  cityId: "tr-bodrum",
  number: 5,
  title: "Покажи на карте",
  minutes: 7,
  goals: ["Попросить показать на карте", "Сказать «здесь», «вон там», «там»", "Спросить, далеко ли отсюда"],
  vocabNote: "Bu — «это, этот» (рядом), şu — «вот тот» (можно показать пальцем), o — «тот» (далеко). Так же burada, şurada, orada.",
  vocab: [
    v("trbo5-1", "Haritada gösterir misiniz?", "Покажите на карте, пожалуйста.", "Том разворачивает морскую карту перед капитаном Али.", "Послушать Haritada gösterir misiniz", p("l5-1")),
    v("trbo5-2", "şurada", "вон там", "Капитан показывает пальцем на соседнюю бухту.", "Послушать şurada", p("l5-2")),
    v("trbo5-3", "orada", "там, далеко", "Капитан показывает на остров на горизонте.", "Послушать orada", p("l5-3")),
    v("trbo5-4", "koy", "бухта", "Маленькая бирюзовая бухта среди сосен.", "Послушать koy", p("l5-4")),
    v("trbo5-5", "ada", "остров", "Скалистый остров посреди синего моря.", "Послушать ada", p("l5-5")),
    v("trbo5-6", "Buradan ne kadar uzak?", "Это далеко отсюда?", "Мурзик меряет лапой расстояние на карте.", "Послушать Buradan ne kadar uzak", p("l5-6")),
    v("trbo5-7", "Burada dalabilir miyiz?", "Здесь можно нырять?", "Мурзик в маске стоит на борту и показывает на воду.", "Послушать Burada dalabilir miyiz", p("l5-7")),
  ],
  dialogue: {
    title: "Морская карта",
    note: "Kara Ada — «Чёрный остров» у Бодрума, там есть тёплые источники. Yarım saat — «полчаса».",
    lines: [
      line("tom", "Ali Kaptan, en güzel koy nerede? Haritada gösterir misiniz?", "Капитан Али, где самая красивая бухта? Покажете на карте?"),
      line("captain", "Tabii. Bakın: biz buradayız. Şu koy çok güzel.", "Конечно. Смотрите: мы здесь. Вон та бухта очень красивая."),
      line("murzik", "O ada ne?", "А что это за остров?"),
      line("captain", "O, Kara Ada. Orada sıcak su kaynağı var!", "Это Кара-Ада. Там есть тёплые источники!"),
      line("tarcin", "Buradan ne kadar uzak?", "Далеко отсюда?"),
      line("captain", "Tekneyle yarım saat.", "Полчаса на лодке."),
      line("tom", "Burada dalabilir miyiz?", "Здесь можно нырять?"),
      line("captain", "Evet! Maskeniz var mı?", "Да! У вас есть маски?"),
    ],
    gist: choice("trbo5-d1", "Что есть на острове Кара-Ада?", [
      ["Тёплые источники.", true],
      ["Музей.", false],
      ["Ресторан.", false],
    ]),
  },
  grammar: [
    {
      title: "Bu, şu, o",
      paragraphs: [
        "Bu — «этот» (рядом со мной), şu — «вон тот» (рядом, можно показать), o — «тот» (далеко).",
        "Так же «где»: burada — здесь, şurada — вон там, orada — там. А «отсюда» — buradan, с окончанием -dan.",
      ],
      examples: [
        { ru: "Bu koy çok güzel, ama o ada daha güzel.", en: "Эта бухта очень красивая, но тот остров ещё красивее." },
        { ru: "Biz buradayız, plaj şurada.", en: "Мы здесь, а пляж вон там." },
      ],
    },
  ],
  tasks: [
    choice("trbo5-t1", "Как сказать «тот остров» (далеко)?", [
      ["o ada", true],
      ["bu ada", false],
      ["orada ada", false],
    ], { skill: "grammar" }),
    listen("trbo5-t2", "Послушай. Сколько плыть до острова?", "Tekneyle yarım saat.", [
      ["Полчаса на лодке.", true],
      ["Час пешком.", false],
      ["Пять минут на такси.", false],
    ]),
    match("trbo5-t3", "Соедини пары.", [
      ["koy", "бухта"],
      ["ada", "остров"],
      ["şurada", "вон там"],
      ["harita", "карта"],
    ], { skill: "words" }),
    spell("trbo5-t4", "Собери из букв слово «остров».", "ada", ["e"]),
    speak("trbo5-t5", "Haritada gösterir misiniz?", "Tabii. Biz buradayız.", "Конечно. Мы вот здесь.", { help: "Ответь вслух и покажи место на карте." }),
    choice("trbo5-t6", "В музее говорят: Dokunmak yasak! Что это значит?", [
      ["Трогать нельзя!", true],
      ["Фотографировать можно.", false],
      ["Вход бесплатный.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "maske",
    itemName: "Маска для ныряния",
    itemNameRu: "Maske",
    ru: "Yaşasın! Bir dalış maskesi!",
    en: "Ура! Маска для ныряния!",
    a11y: "Мурзик в маске и с трубкой высовывается из воды, вокруг плавают рыбки.",
    image: p("maske"),
    steps: ["Капитан Али достаёт из ящика маски.", "Мурзик надевает самую маленькую.", "Ныряет — а там рыбки!", "Маску он оставляет себе."],
    bridge: "Вечером Мурзик и Тарчын идут гулять по белым улочкам… и теряются.",
  },
};

const bodrum6: Lesson = {
  id: "tr-a1-bodrum-6",
  level: "A1",
  cityId: "tr-bodrum",
  number: 6,
  title: "Мы заблудились!",
  minutes: 7,
  goals: ["Сказать «мы заблудились»", "Вежливо попросить о помощи", "Спросить, в какой стороне нужное место"],
  vocabNote: "Çıkmaz sokak — «тупик», буквально «улица, которая не выходит».",
  vocab: [
    v("trbo6-1", "Kaybolduk!", "Мы заблудились!", "Мурзик и Тарчын растерянно стоят среди одинаковых белых улочек ночью.", "Послушать Kaybolduk", p("l6-1")),
    v("trbo6-2", "Yardım eder misiniz?", "Вы не поможете?", "Мурзик вежливо машет кому-то в темноте.", "Послушать Yardım eder misiniz", p("l6-2")),
    v("trbo6-3", "Liman hangi tarafta?", "В какой стороне порт?", "Мурзик поворачивается то вправо, то влево на перекрёстке.", "Послушать Liman hangi tarafta", p("l6-3")),
    v("trbo6-4", "Bu sokak çıkmaz.", "Это тупик.", "Белая улочка упирается в стену с синей дверью.", "Послушать Bu sokak çıkmaz", p("l6-4")),
    v("trbo6-5", "Geri dönelim.", "Давай вернёмся.", "Тарчын разворачивается и тянет Мурзика назад.", "Послушать Geri dönelim", p("l6-5")),
    v("trbo6-6", "Onu takip edelim!", "Пойдём за ним!", "Мурзик показывает на тень кота в шляпе впереди.", "Послушать Onu takip edelim", p("l6-6")),
    v("trbo6-7", "Kurtulduk!", "Выбрались!", "Мурзик и Тарчын радостно выбегают к огням порта.", "Послушать Kurtulduk", p("l6-7")),
  ],
  dialogue: {
    title: "Ночные улочки",
    note: "Burası neresi? — «Где это мы?». Yine — «опять». İkinci kez — «второй раз».",
    lines: [
      line("murzik", "Tarçın, burası neresi? Kaybolduk!", "Тарчын, где это мы? Мы заблудились!"),
      line("tarcin", "Bu sokak çıkmaz! Geri dönelim.", "Это тупик! Давай вернёмся."),
      line("murzik", "Pardon! Yardım eder misiniz? Liman hangi tarafta?", "Простите! Вы не поможете? В какой стороне порт?"),
      line("tarcin", "Bak! Şapkalı bir kedi… Bize yolu gösteriyor!", "Смотри! Кот в шляпе… Он показывает нам дорогу!"),
      line("murzik", "Hadi, onu takip edelim!", "Давай, пойдём за ним!"),
      line("tarcin", "İşte liman! Kurtulduk!", "Вот и порт! Выбрались!"),
      line("murzik", "Kedi nerede? Yine gitti… İkinci kez!", "А где кот? Опять ушёл… Уже второй раз!"),
    ],
    gist: choice("trbo6-d1", "Кто помогает им найти дорогу?", [
      ["Белый кот в шляпе.", true],
      ["Капитан Али.", false],
      ["Том.", false],
    ]),
  },
  grammar: [
    {
      title: "Вежливая просьба: -er misiniz?",
      paragraphs: [
        "Самая вежливая просьба — вопрос: Yardım eder misiniz? — «Вы не поможете?». Ты уже знаешь такие: Tekrar eder misiniz? Gösterir misiniz?",
        "Так звучит мягче, чем приказ Yardım edin! — «Помогите!». Его оставь для настоящей беды.",
      ],
      examples: [
        { ru: "Yardım eder misiniz?", en: "Вы не поможете?" },
        { ru: "Haritada gösterir misiniz?", en: "Не покажете на карте?" },
      ],
    },
  ],
  tasks: [
    listen("trbo6-t1", "Послушай. Что случилось?", "Kaybolduk! Bu sokak çıkmaz.", [
      ["Заблудились, это тупик.", true],
      ["Нашли порт.", false],
      ["Опоздали на лодку.", false],
    ]),
    choice("trbo6-t2", "Как вежливо спросить «Вы не поможете?»", [
      ["Yardım eder misiniz?", true],
      ["Yardım et!", false],
      ["Yardım ediyor musun?", false],
    ], { skill: "grammar" }),
    match("trbo6-t3", "Соедини пары.", [
      ["Kaybolduk!", "Мы заблудились!"],
      ["Geri dönelim.", "Давай вернёмся."],
      ["çıkmaz sokak", "тупик"],
      ["taraf", "сторона"],
    ], { skill: "words" }),
    missing("trbo6-t4", "Какой буквы не хватает? («Мы заблудились!»)", "Kaybol", "uk!", "d", ["d", "t", "n"]),
    speak("trbo6-t5", "Kayboldunuz mu?", "Evet! Yardım eder misiniz?", "Да! Вы не поможете?", { help: "Ответь вслух и попроси о помощи." }),
    choice("trbo6-t6", "Как спросить «Здесь можно нырять?»", [
      ["Burada dalabilir miyiz?", true],
      ["Burada dalış var.", false],
      ["Orada dalmak.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "nazar",
    itemName: "Назар — синий глазик",
    itemNameRu: "Nazar boncuğu",
    ru: "Yaşasın! Bir nazar boncuğu!",
    en: "Ура! Назар!",
    a11y: "Синий стеклянный «глазик»-назар висит над дверью каюты и блестит на солнце.",
    image: p("nazar"),
    steps: ["Утром капитан Али вешает над дверью синий глазик.", "«Nazar değmesin!» — «Чтобы не сглазили!»", "Мурзик трогает его лапой.", "Теперь они больше не потеряются!"],
    bridge: "Последний вечер в Бодруме. Капитан Али зовёт всех на рыбалку.",
  },
};

const bodrum7: Lesson = {
  id: "tr-a1-bodrum-7",
  level: "A1",
  cityId: "tr-bodrum",
  number: 7,
  title: "Последний вечер",
  minutes: 8,
  goals: ["Сказать, что было весело", "Сказать, что будешь скучать", "Вспомнить все слова Бодрума"],
  vocabNote: "Görüşmek üzere — «до встречи». Это чуть торжественнее, чем Görüşürüz.",
  vocab: [
    v("trbo7-1", "Çok eğlenceliydi!", "Было очень весело!", "Мурзик, Том и Тарчын хохочут на палубе гулета.", "Послушать Çok eğlenceliydi", p("l7-1")),
    v("trbo7-2", "Seni özleyeceğim.", "Я буду по тебе скучать.", "Мурзик обнимает Тарчына на причале.", "Послушать Seni özleyeceğim", p("l7-2")),
    v("trbo7-3", "Bir daha gel!", "Приезжай ещё!", "Капитан Али машет с гулета и улыбается.", "Послушать Bir daha gel", p("l7-3")),
    v("trbo7-4", "Balık tutalım!", "Давай ловить рыбу!", "Мурзик закидывает удочку с борта.", "Послушать Balık tutalım", p("l7-4")),
    v("trbo7-5", "Ne güzel bir akşam!", "Какой чудесный вечер!", "Закат над бухтой, в воде отражаются огни крепости.", "Послушать Ne güzel bir akşam", p("l7-5")),
    v("trbo7-6", "İyi ki geldik.", "Как хорошо, что мы приехали.", "Мурзик и Том сидят на палубе и смотрят на закат.", "Послушать İyi ki geldik", p("l7-6")),
    v("trbo7-7", "Görüşmek üzere!", "До встречи!", "Тарчын с рюкзаком машет с трапа автобуса.", "Послушать Görüşmek üzere", p("l7-7")),
  ],
  dialogue: {
    title: "Рыбалка на закате",
    note: "Son akşam — «последний вечер». Uyuyacağım — «я буду спать».",
    lines: [
      line("captain", "Son akşam! Balık tutalım mı?", "Последний вечер! Половим рыбу?"),
      line("tarcin", "Ben uyuyacağım…", "А я буду спать…"),
      line("murzik", "Tarçın! Hadi, balık tutalım!", "Тарчын! Давай ловить рыбу!"),
      line("tom", "Ne güzel bir akşam!", "Какой чудесный вечер!"),
      line("murzik", "Ali Kaptan, çok eğlenceliydi. Sizi özleyeceğim.", "Капитан Али, было очень весело. Я буду по вам скучать."),
      line("captain", "Ben de. Bir daha gelin!", "Я тоже. Приезжайте ещё!"),
      line("tarcin", "İyi ki geldim. Görüşmek üzere, kuzen!", "Как хорошо, что я приехал. До встречи, кузен!"),
    ],
    gist: choice("trbo7-d1", "Что они делают в последний вечер?", [
      ["Ловят рыбу на лодке.", true],
      ["Идут в музей.", false],
      ["Собирают чемоданы.", false],
    ]),
  },
  grammar: [
    {
      title: "Было и будет",
      paragraphs: [
        "О прошлом — -dı / -di: Çok eğlenceli-ydi. — Было очень весело. О будущем — -ecek / -acak: Seni özle-yeceğ-im. — Я буду скучать.",
        "На «вы» — sizi: Sizi özleyeceğim. — Я буду по вам скучать. Приглашение вежливо: Bir daha gelin!",
      ],
      examples: [
        { ru: "Dün çok eğlenceliydi.", en: "Вчера было очень весело." },
        { ru: "Seni çok özleyeceğim.", en: "Я буду очень по тебе скучать." },
      ],
    },
  ],
  tasks: [
    listen("trbo7-t1", "Аудиоэкзамен. Что говорит капитан?", "Yarın sabah saat yedide limana gideceğiz. Kaybolmayın!", [
      ["Завтра в семь утра в порт, и не потеряйтесь.", true],
      ["Сегодня вечером идём на пляж.", false],
      ["Завтра идём в музей.", false],
    ]),
    choice("trbo7-t2", "Как сказать «Было очень весело»?", [
      ["Çok eğlenceliydi.", true],
      ["Çok eğlenceli olacak.", false],
      ["Çok eğlenceliyim.", false],
    ], { skill: "grammar" }),
    match("trbo7-t3", "Соедини пары.", [
      ["Bir daha gel!", "Приезжай ещё!"],
      ["Görüşmek üzere!", "До встречи!"],
      ["balık", "рыба"],
      ["son akşam", "последний вечер"],
    ], { skill: "words" }),
    missing("trbo7-t4", "Какой буквы не хватает? («Я буду скучать»)", "Özleyece", "im.", "ğ", ["ğ", "k", "g"]),
    speak("trbo7-t5", "Bodrum nasıldı?", "Çok eğlenceliydi!", "Было очень весело!", { help: "Ответь вслух, как тебе Бодрум." }),
    script("trbo7-t6", "Вспомни весь Бодрум. Закончи разговоры.", [
      { speaker: "Продавец", text: "Kaç saatliğine?" },
      { speaker: "Ты", answer: "Bir günlüğüne.", options: ["Bir günlüğüne.", "Plaja.", "Yasak."] },
      { speaker: "Тарчын", text: "Nereye gidiyorsun?" },
      { speaker: "Ты", answer: "Plaja gidiyorum.", options: ["Plaja gidiyorum.", "Plajda gidiyorum.", "Kaybolduk!"] },
      { speaker: "Кассир", text: "Flaş yasak." },
      { speaker: "Ты", answer: "Tamam, teşekkürler.", options: ["Tamam, teşekkürler.", "Bir daha gel!", "Kurtulduk!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "olta",
    itemName: "Удочка",
    itemNameRu: "Olta",
    ru: "Yaşasın! Bir olta!",
    en: "Ура! Удочка!",
    a11y: "Деревянная удочка с красным поплавком прислонена к борту гулета на закате.",
    image: p("olta"),
    steps: ["Капитан Али даёт Мурзику удочку.", "Мурзик ловит маленькую рыбку…", "…и отпускает её обратно в море.", "Удочку он оставляет на память."],
    bridge: "Утром — в путь. Тарчын едет домой в Измир, а Мурзик и Том — дальше на восток, вдоль моря.",
  },
};

const story: CityStory = {
  home: {
    name: "Каюта на гулете",
    nameRu: "Guletteki kamara",
    image: p("home"),
    a11y: "Маленькая пустая деревянная каюта на старом гулете: круглый иллюминатор, койка, за окном синяя бухта. Посередине чемодан Мурзика.",
  },
  keepsakeId: "nazar",
  welcomeRu: "Merhaba, Bodrum!",
  welcomeEn: "Привет, Бодрум!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том на набережной Бодрума: белые домики, старая крепость и деревянные лодки в синей бухте.",
  departureImage: p("departure"),
  departureA11y: "Мурзик и Том с чемоданами на причале. Капитан Али машет с гулета, Тарчын с рюкзаком зевает.",
  finale: [
    {
      image: p("alley"),
      a11y: "Ночная белая улочка Бодрума. Вдали, в свете фонаря, силуэт кота в шляпе.",
      lines: [
        { en: "Ночью Мурзик не спит. Кот в шляпе был на снимке в Памуккале, а теперь — здесь, в Бодруме." },
        { ru: "Kim bu kedi? Neden bize yardım ediyor?", en: "Кто этот кот? Почему он нам помогает?" },
        { en: "Мурзик решает: если они встретятся снова, он обязательно с ним заговорит." },
      ],
    },
    {
      image: p("nazar"),
      a11y: "Мурзик обходит каюту на гулете, которую обставлял урок за уроком.",
      lines: [
        { en: "Мурзик обходит свою каюту. Том фотографирует её для дневника путешествий." },
        { en: "С собой — синий назар капитана Али. Чтобы в пути не сглазили." },
      ],
    },
    {
      image: img.greet,
      a11y: "Мурзик радостно подпрыгивает, Том празднует вместе с ним.",
      lines: [
        { ru: "Bodrum tamamlandı!", en: "Бодрум пройден!" },
        { en: "7 / 7 уроков" },
        { en: "A1 — пройден шестой блок." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Мурзик и Том с чемоданами на причале прощаются с капитаном Али и Тарчыном.",
      lines: [
        { ru: "Hoşça kal, Bodrum! Hoşça kal, Tarçın!", en: "Пока, Бодрум! Пока, Тарчын!" },
        { ru: "Sıradaki durak: Antalya!", en: "Следующая остановка: Анталья!" },
      ],
    },
    {
      image: p("road"),
      a11y: "Автобус едет на восток по горной дороге вдоль моря.",
      lines: [{ ru: "Bodrum → Antalya", en: "Бодрум → Анталья" }],
    },
    {
      image: pic("tr/antalya/arrival"),
      a11y: "Мурзик и Том у старинных ворот Адриана в Анталье. За ними узкие улочки Калеичи и апельсиновые деревья.",
      lines: [
        { ru: "Merhaba, Antalya!", en: "Привет, Анталья!" },
        { ru: "Portakal kokusu!", en: "Пахнет апельсинами!" },
      ],
    },
  ],
};

export const trBodrum = {
  id: "tr-bodrum",
  name: "Бодрум",
  nameTr: "Bodrum",
  lessons: [bodrum1, bodrum2, bodrum3, bodrum4, bodrum5, bodrum6, bodrum7],
  story,
};
