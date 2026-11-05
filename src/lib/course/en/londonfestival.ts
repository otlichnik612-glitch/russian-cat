import { pic } from "../art";
import { read } from "../make";
import type { CityStory, Lesson } from "../types";
import { choice, fill, letter, line, listen, match, script, speak, tf, v } from "../tr/make";

/*
 * Лондон · «Фестиваль» · A2, уроки 1–7. Финал уровня A2.
 * Мурзик и Том возвращаются домой, в кафе «Хоуп». Голубой фургон «Hope on Wheels» уже здесь — его пригнал Конор,
 * а Мэгги всё лето живёт у сестры. Подготовка к Лондонскому фестивалю уличной еды, приезжают друзья из дороги
 * (Лили и Дейв из Брайтона, Йоланда и Габи из Майами), сёстры вместе пекут мамин яблочный крамбл.
 * Фестиваль, песня «Blue Door», золотая ложка — пятьдесят лет спустя. Восемнадцатый рецепт — рецепт миссис Хоуп и Мэгги.
 * Грамматика: повторение A2 — Present Perfect и Past Simple, going to / will, much / many, first conditional,
 * сравнения, Could you / Would you mind, глагол + to / -ing.
 */

const p = (name: string) => pic(`en/london-festival/${name}`);

const fest1: Lesson = {
  id: "en-a2-london-festival-1",
  level: "A2",
  cityId: "en-london-festival",
  number: 1,
  title: "Home again — Снова дома",
  minutes: 8,
  goals: ["Рассказать о путешествии", "Повторить Present Perfect и Past Simple", "Встреча после долгой разлуки"],
  vocabNote: "Present Perfect — опыт и результат без точного времени: We've been to seventeen places. Past Simple — когда точно: Conor drove the van to London in July.",
  vocab: [
    v("enlf1-1", "Welcome home!", "С возвращением домой!", "Миссис Хоуп в дверях кафе с синей дверью раскрывает объятия.", "Послушать Welcome home", p("l1-1")),
    v("enlf1-2", "It's good to be back.", "Как хорошо вернуться.", "Мурзик трётся щекой о синюю дверь.", "Послушать It's good to be back", p("l1-2")),
    v("enlf1-3", "We've been to seventeen places.", "Мы побывали в семнадцати местах.", "Голубая тетрадь с семнадцатью вклеенными рецептами.", "Послушать We've been to seventeen places", p("l1-3")),
    v("enlf1-4", "The café hasn't changed a bit.", "Кафе ничуть не изменилось.", "Те же столики, те же чашки, тот же запах сконов.", "Послушать The café hasn't changed a bit", p("l1-4")),
    v("enlf1-5", "Conor drove the van to London in July.", "Конор пригнал фургон в июле.", "Голубой фургон «Hope on Wheels» у кафе.", "Послушать Conor drove the van to London in July", p("l1-5")),
    v("enlf1-6", "I've been here all summer.", "Я здесь всё лето.", "Мэгги за прилавком в фартуке миссис Хоуп.", "Послушать I've been here all summer", p("l1-6")),
    v("enlf1-7", "I've got jet lag.", "У меня джетлаг (сбился режим после перелёта).", "Том зевает, на часах три часа дня.", "Послушать I've got jet lag", p("l1-7")),
    v("enlf1-8", "We've missed you so much!", "Мы так по вам скучали!", "Все обнимаются посреди кафе.", "Послушать We've missed you so much", p("l1-8")),
  ],
  letters: [
    letter("been = [би:н]", "В британском английском been — с долгим [и:]; американцы часто говорят короче: [бин].", "We've been to Miami.", "Мы были в Майами."),
    letter("changed = [чейнджд]", "-ed после [дж] звучит как [д], а не [ид]: changed — один слог.", "It hasn't changed.", "Оно не изменилось."),
  ],
  dialogue: {
    title: "Синяя дверь",
    note: "Мэгги, сестра миссис Хоуп из Белфаста, приехала с Конором в июле и всё лето живёт у сестры.",
    lines: [
      line("hope", "Welcome home, you two!", "С возвращением домой, вы оба!"),
      line("murzik", "It's good to be back! The café hasn't changed a bit.", "Как хорошо вернуться! Кафе ничуть не изменилось."),
      line("tom", "We've been to seventeen places, Gran. And we've got seventeen recipes!", "Мы побывали в семнадцати местах, бабушка. И у нас семнадцать рецептов!"),
      line("maggie", "And I've been here all summer! Conor drove the van to London in July — with me in it!", "А я здесь всё лето! Конор пригнал фургон в июле — вместе со мной!"),
      line("hope", "We've missed you so much! Have you eaten?", "Мы так по вам скучали! Вы ели?"),
      line("tom", "Not since the plane. And I've got jet lag — it feels like ten in the morning!", "С самолёта нет. И у меня джетлаг — такое чувство, что сейчас десять утра!"),
    ],
    gist: choice("enlf1-d1", "Когда Конор пригнал фургон в Лондон?", [
      ["В июле.", true],
      ["Вчера.", false],
      ["Ещё не пригнал.", false],
    ]),
  },
  grammar: [
    {
      title: "Present Perfect или Past Simple?",
      paragraphs: [
        "Present Perfect (have / has + 3-я форма) — опыт и результат к сейчас, без точного времени: We've been to seventeen places. The café hasn't changed. Have you eaten?",
        "Past Simple — когда есть точное время или законченный период: Conor drove the van to London in July. We flew home yesterday. С since, for и периодом, который ещё не закончился, — Present Perfect: I've been here all summer.",
      ],
      examples: [
        { ru: "I've never been to Miami, but my sister went there last year.", en: "Я никогда не был(а) в Майами, а моя сестра ездила туда в прошлом году." },
        { ru: "Have you finished? — Yes, I finished an hour ago.", en: "Ты закончил(а)? — Да, я закончил(а) час назад." },
      ],
    },
  ],
  tasks: [
    listen("enlf1-t1", "Послушай. Сколько мест они посетили?", "We've been to seventeen places, Gran. And we've got seventeen recipes!", [
      ["Семнадцать.", true],
      ["Семь.", false],
      ["Семьдесят.", false],
    ]),
    choice("enlf1-t2", "Как сказать «Я никогда не был(а) в Майами»?", [
      ["I've never been to Miami.", true],
      ["I never was to Miami.", false],
      ["I haven't never been to Miami.", false],
    ], { skill: "grammar" }),
    fill("enlf1-t3", "Выбери правильную форму: «Конор пригнал фургон в июле».", "Conor", "the van to London in July.", "drove", ["drove", "has driven", "drives"], { skill: "grammar" }),
    read("enlf1-t4", "Прочитай записку на двери кафе. Когда кафе снова откроется?", "HOPE'S CAFÉ\nClosed today — family news!\nOur travellers are home!\nOpen again tomorrow at 8 am.", [
      ["Завтра в 8 утра.", true],
      ["Сегодня вечером.", false],
      ["Через неделю.", false],
    ]),
    match("enlf1-t5", "Соедини пары.", [
      ["Welcome home!", "С возвращением домой!"],
      ["It's good to be back.", "Как хорошо вернуться."],
      ["I've got jet lag.", "У меня джетлаг."],
      ["We've missed you so much!", "Мы так по вам скучали!"],
    ], { skill: "words" }),
    tf("enlf1-t6", "Мэгги приехала в Лондон только сегодня.", false, "listening"),
    speak("enlf1-t7", "Welcome back! Where have you been?", "I've been to the seaside. I went there last week, and I've just come back. It's good to be back!", "Я был(а) на море. Я поехал(а) туда на прошлой неделе и только что вернулся (вернулась). Как хорошо вернуться!", {
      help: "Расскажи вслух о поездке: I've been to…, I went…, I've just come back.",
    }),
  ],
  reward: {
    itemId: "fest-doormat",
    itemName: "Коврик «Welcome home»",
    itemNameRu: "Welcome home doormat",
    ru: "Welcome home — that's us!",
    en: "«С возвращением домой» — это про нас!",
    a11y: "У синей двери кафе лежит новый коврик с надписью WELCOME HOME и нарисованным рыжим котом.",
    image: p("doormat"),
    steps: ["У синей двери лежит новый коврик.", "На нём — WELCOME HOME и рыжий кот.", "Его заказала Мэгги ещё в июле.", "Мурзик вытирает лапы — и он дома."],
    bridge: "До фестиваля десять дней. Миссис Хоуп кладёт на стол большой лист бумаги: «Right. Let's make a plan»."
  },
};

const fest2: Lesson = {
  id: "en-a2-london-festival-2",
  level: "A2",
  cityId: "en-london-festival",
  number: 2,
  title: "Making a plan — Составляем план",
  minutes: 8,
  goals: ["Составить план", "Going to и will", "How much / How many"],
  vocabNote: "Going to — заранее решённый план: We're going to cook three dishes. Will — решение прямо сейчас: I'll write the list!",
  vocab: [
    v("enlf2-1", "Ten days to go!", "Осталось десять дней!", "Календарь, дата фестиваля обведена красным.", "Послушать Ten days to go", p("l2-1")),
    v("enlf2-2", "We're going to cook three dishes.", "Мы приготовим три блюда.", "Три карточки рецептов на столе.", "Послушать We're going to cook three dishes", p("l2-2")),
    v("enlf2-3", "Which ones should we choose?", "Какие нам выбрать?", "Мурзик листает голубую тетрадь.", "Послушать Which ones should we choose", p("l2-3")),
    v("enlf2-4", "How many portions do we need?", "Сколько порций нам нужно?", "Том считает на калькуляторе.", "Послушать How many portions do we need", p("l2-4")),
    v("enlf2-5", "How much cheese should we buy?", "Сколько сыра купить?", "Большая головка сыра.", "Послушать How much cheese should we buy", p("l2-5")),
    v("enlf2-6", "I'll write the list.", "Я напишу список.", "Мэгги берёт ручку.", "Послушать I'll write the list", p("l2-6")),
    v("enlf2-7", "a menu board", "доска с меню", "Чёрная доска и цветные мелки.", "Послушать a menu board", p("l2-7")),
    v("enlf2-8", "A taste of the road", "Вкус дороги", "Надпись мелом на доске: A TASTE OF THE ROAD.", "Послушать A taste of the road", p("l2-8")),
  ],
  letters: [
    letter("should = [шуд]", "l не читается: should, could, would.", "Which ones should we choose?", "Какие нам выбрать?"),
    letter("portion = [пО:шн]", "-tion читается как [шн]: portion, station.", "How many portions?", "Сколько порций?"),
  ],
  dialogue: {
    title: "Большой лист бумаги",
    note: "Исчисляемое (portions, tacos) — how many; неисчисляемое (cheese, milk) — how much.",
    lines: [
      line("hope", "Ten days to go! What are you going to cook?", "Осталось десять дней! Что вы будете готовить?"),
      line("murzik", "We're going to cook three dishes from the road book. But which ones should we choose?", "Мы приготовим три блюда из книги дороги. Но какие нам выбрать?"),
      line("tom", "Clam chowder from Seattle, tacos from L.A. and Cuban sandwiches from Miami.", "Суп с моллюсками из Сиэтла, тако из Лос-Анджелеса и кубинские сэндвичи из Майами."),
      line("maggie", "How many portions do you need? And how much cheese should we buy?", "Сколько порций вам нужно? И сколько сыра купить?"),
      line("tom", "About three hundred portions a day. And a lot of cheese!", "Около трёхсот порций в день. И много сыра!"),
      line("maggie", "Right. I'll write the list.", "Так. Я напишу список."),
      line("murzik", "And I'll do the menu board: \"A taste of the road\"!", "А я сделаю доску с меню: «Вкус дороги»!"),
    ],
    gist: choice("enlf2-d1", "Что Мурзик напишет на доске с меню?", [
      ["«Вкус дороги».", true],
      ["«Кафе „Хоуп“».", false],
      ["«Золотая ложка».", false],
    ]),
  },
  grammar: [
    {
      title: "Going to, will, much / many",
      paragraphs: [
        "Going to — план, решённый заранее: We're going to cook three dishes. Will — решение в момент речи, обещание: I'll write the list. I'll help you!",
        "How many + исчисляемые (portions, tacos, people), how much + неисчисляемые (cheese, milk, time): How many portions? How much cheese? A lot of — с теми и другими.",
      ],
      examples: [
        { ru: "We're going to open at ten. — OK, I'll come at nine.", en: "Мы откроемся в десять. — Хорошо, я приду в девять." },
        { ru: "How much time have we got? Not much!", en: "Сколько у нас времени? Немного!" },
      ],
    },
  ],
  tasks: [
    listen("enlf2-t1", "Послушай. Сколько порций в день им нужно?", "About three hundred portions a day. And a lot of cheese!", [
      ["Около трёхсот.", true],
      ["Около тридцати.", false],
      ["Около трёх тысяч.", false],
    ]),
    choice("enlf2-t2", "Телефон звонит. Как сказать «Я отвечу!»?", [
      ["I'll get it!", true],
      ["I'm going to get it next week!", false],
      ["I get it yesterday!", false],
    ], { skill: "grammar" }),
    fill("enlf2-t3", "Выбери правильное слово: «Сколько молока нам нужно?»", "How", "milk do we need?", "much", ["much", "many", "lot"], { skill: "grammar" }),
    read("enlf2-t4", "Прочитай список Мэгги. Сколько лаймов купить?", "SHOPPING LIST (Maggie)\nSwiss cheese — 20 kg\nClams — 15 kg\nTortillas — 900\nLimes — 60\nPickles — 10 jars\nCuban bread — ask the baker!", [
      ["60.", true],
      ["20.", false],
      ["900.", false],
    ]),
    match("enlf2-t5", "Соедини пары.", [
      ["Ten days to go!", "Осталось десять дней!"],
      ["I'll write the list.", "Я напишу список."],
      ["a menu board", "доска с меню"],
      ["A taste of the road", "Вкус дороги"],
    ], { skill: "words" }),
    tf("enlf2-t6", "Мэгги будет рисовать доску с меню.", false, "listening"),
    speak("enlf2-t7", "You're having a party next week. What's your plan?", "I'm going to invite ten friends. I'm going to make pizza. How much cheese do I need? I'll buy two kilos!", "Я приглашу десять друзей. Я сделаю пиццу. Сколько сыра мне нужно? Куплю два килограмма!", {
      help: "Расскажи вслух план вечеринки: I'm going to…, How much / How many…?, I'll…",
    }),
  ],
  reward: {
    itemId: "fest-menu-board",
    itemName: "Доска «A taste of the road»",
    itemNameRu: "A taste of the road menu board",
    ru: "Our festival menu!",
    en: "Наше фестивальное меню!",
    a11y: "Чёрная доска с меню, разрисованная мелом: суп с моллюсками, тако и кубинский сэндвич; в углу — жёлтый фургон, голубой фургон и рыжий кот.",
    image: p("menu-board"),
    steps: ["Мурзик рисует мелом всю ночь.", "Три блюда — и три маленьких картинки: Сиэтл, Лос-Анджелес, Майами.", "В углу — оба фургона: голубой и жёлтый.", "Миссис Хоуп ставит доску у двери: «Perfect»."],
    bridge: "За неделю до фестиваля звенит колокольчик над дверью. На пороге — Лили с банками краски. А за ней — гости издалека.",
  },
};

const fest3: Lesson = {
  id: "en-a2-london-festival-3",
  level: "A2",
  cityId: "en-london-festival",
  number: 3,
  title: "Friends arrive — Приезжают друзья",
  minutes: 8,
  goals: ["Познакомить людей друг с другом", "Past Continuous + Past Simple: рассказ о дороге", "Принять гостей"],
  vocabNote: "Let me introduce… — позвольте представить. Who — который (о людях): This is Lily, who painted our van.",
  vocab: [
    v("enlf3-1", "Long time no see!", "Сто лет не виделись!", "Лили обнимает Тома.", "Послушать Long time no see", p("l3-1")),
    v("enlf3-2", "Let me introduce you to…", "Позвольте вас познакомить с…", "Том показывает на Йоланду и Габи.", "Послушать Let me introduce you to", p("l3-2")),
    v("enlf3-3", "She's the one who painted our van.", "Это она покрасила наш фургон.", "Лили с кистью в руке.", "Послушать She's the one who painted our van", p("l3-3")),
    v("enlf3-4", "How was your flight?", "Как долетели?", "Йоланда с чемоданом в цветочек.", "Послушать How was your flight", p("l3-4")),
    v("enlf3-5", "We were landing when the sun came out.", "Мы садились, когда выглянуло солнце.", "Самолёт над Лондоном, сквозь облака пробивается солнце.", "Послушать We were landing when the sun came out", p("l3-5")),
    v("enlf3-6", "Make yourselves at home.", "Чувствуйте себя как дома.", "Миссис Хоуп ставит на стол чайник и сконы.", "Послушать Make yourselves at home", p("l3-6")),
    v("enlf3-7", "There isn't enough room!", "Здесь не хватает места!", "В маленьком кафе тесно от гостей.", "Послушать There isn't enough room", p("l3-7")),
    v("enlf3-8", "The more, the merrier!", "Чем больше, тем веселее!", "Мэгги приносит ещё стулья.", "Послушать The more, the merrier", p("l3-8")),
  ],
  letters: [
    letter("introduce = [интрэдьЮ:с]", "Ударение на последний слог: in-tro-DUCE.", "Let me introduce you.", "Позвольте вас познакомить."),
    letter("merrier = [мЭриэ]", "Merry → merrier: y меняется на i перед -er.", "The more, the merrier!", "Чем больше, тем веселее!"),
  ],
  dialogue: {
    title: "Колокольчик над дверью",
    note: "Лили приехала из Брайтона (Дейв задержался в гараже), Йоланда и Габи прилетели из Майами. Фургон «Sunny Cubano» Габи оставила дома — в Майами.",
    lines: [
      line("lily", "Long time no see! I've brought paint — your van needs a little help.", "Сто лет не виделись! Я привезла краску — вашему фургону нужна небольшая помощь."),
      line("tom", "Lily! Gran, let me introduce you to Yolanda and Gabi from Miami. And this is Lily — she's the one who painted our van.", "Лили! Бабушка, позволь познакомить тебя с Йоландой и Габи из Майами. А это Лили — это она покрасила наш фургон."),
      line("hope", "Welcome, welcome! How was your flight?", "Добро пожаловать! Как долетели?"),
      line("yolanda", "Long and cold! But we were landing when the sun came out. A good sign!", "Долго и холодно! Но мы садились, когда выглянуло солнце. Хороший знак!"),
      line("hope", "Make yourselves at home. Tea? Scones?", "Чувствуйте себя как дома. Чаю? Сконов?"),
      line("murzik", "There isn't enough room!", "Здесь не хватает места!"),
      line("maggie", "The more, the merrier! I'll get more chairs.", "Чем больше, тем веселее! Принесу ещё стулья."),
    ],
    gist: choice("enlf3-d1", "Что привезла Лили?", [
      ["Краску для фургона.", true],
      ["Новые стулья.", false],
      ["Сконы.", false],
    ]),
  },
  grammar: [
    {
      title: "Рассказ о дороге и who",
      paragraphs: [
        "Past Continuous (фон) + Past Simple (событие): We were landing when the sun came out. While we were waiting for our bags, Gabi called her mum.",
        "Who — «который» о людях: She's the one who painted our van. This is Yolanda, who taught us to make the Cuban sandwich.",
      ],
      examples: [
        { ru: "We were having tea when the doorbell rang.", en: "Мы пили чай, когда зазвенел звонок." },
        { ru: "Dave is the man who sold us the van.", en: "Дейв — тот человек, который продал нам фургон." },
      ],
    },
  ],
  tasks: [
    listen("enlf3-t1", "Послушай. Что случилось, когда самолёт садился?", "Long and cold! But we were landing when the sun came out. A good sign!", [
      ["Выглянуло солнце.", true],
      ["Пошёл дождь.", false],
      ["Габи заснула.", false],
    ]),
    choice("enlf3-t2", "Как сказать «Дейв — тот человек, который продал нам фургон»?", [
      ["Dave is the man who sold us the van.", true],
      ["Dave is the man which sold us the van.", false],
      ["Dave is the man who sell us the van yesterday.", false],
    ], { skill: "grammar" }),
    fill("enlf3-t3", "Выбери правильную форму: «Мы пили чай, когда зазвенел звонок».", "We were having tea when the doorbell", ".", "rang", ["rang", "was ringing", "rings"], { skill: "grammar" }),
    read("enlf3-t4", "Прочитай сообщение Дейва. Когда он приедет?", "Hi Tom! Sorry — I'm stuck at the garage. A customer's car broke down. I'll come on Friday, in time for the festival. Save me a Cuban sandwich! Dave", [
      ["В пятницу.", true],
      ["Сегодня вечером.", false],
      ["После фестиваля.", false],
    ]),
    match("enlf3-t5", "Соедини пары.", [
      ["Long time no see!", "Сто лет не виделись!"],
      ["How was your flight?", "Как долетели?"],
      ["Make yourselves at home.", "Чувствуйте себя как дома."],
      ["The more, the merrier!", "Чем больше, тем веселее!"],
    ], { skill: "words" }),
    tf("enlf3-t6", "Йоланде полёт показался коротким и тёплым.", false, "listening"),
    speak("enlf3-t7", "Introduce a friend to your family.", "Mum, let me introduce you to Anna. She's the one who helped me with English. Anna, make yourself at home!", "Мама, познакомься, это Анна. Это она помогала мне с английским. Анна, чувствуй себя как дома!", {
      help: "Познакомь вслух друга с семьёй: let me introduce…, she's the one who…",
    }),
  ],
  reward: {
    itemId: "fest-guest-photo",
    itemName: "Фото: все за одним столом",
    itemNameRu: "Photo: everyone at one table",
    ru: "Brighton, Belfast, Miami — at one table!",
    en: "Брайтон, Белфаст, Майами — за одним столом!",
    a11y: "Фотография: в маленьком кафе за сдвинутыми столами сидят миссис Хоуп, Мэгги, Лили, Йоланда, Габи, Том и Мурзик; на столе сконы и чайник.",
    image: p("guest-photo"),
    steps: ["Столики сдвигают в один длинный стол.", "Йоланда пробует скон: «¡Qué rico!»", "Габи и Лили сразу находят общий язык — обе обожают фургоны.", "Мэгги делает фото на телефон — уже сама, без помощи."],
    bridge: "Вечером миссис Хоуп и Мэгги шепчутся на кухне. «Ты помнишь мамин крамбл?» — «Конечно. Только я всегда хотела добавить овсянку».",
  },
};

const fest4: Lesson = {
  id: "en-a2-london-festival-4",
  level: "A2",
  cityId: "en-london-festival",
  number: 4,
  title: "Mum's apple crumble — Мамин яблочный крамбл",
  minutes: 8,
  goals: ["Понять рецепт", "First conditional: If…, …will…", "Договориться и уступить"],
  vocabNote: "Crumble — запечённые фрукты под сладкой крошкой из муки, масла и сахара. Custard — сладкий заварной соус.",
  vocab: [
    v("enlf4-1", "Mum's apple crumble", "мамин яблочный крамбл", "Старая форма для запекания с отбитым краем.", "Послушать Mum's apple crumble", p("l4-1")),
    v("enlf4-2", "Rub the butter into the flour.", "Разотри масло с мукой.", "Пальцы растирают масло с мукой в крошку.", "Послушать Rub the butter into the flour", p("l4-2")),
    v("enlf4-3", "If we add oats, it'll be crunchier.", "Если добавим овсянку, получится более хрустящим.", "Мэгги держит пакет овсяных хлопьев.", "Послушать If we add oats, it'll be crunchier", p("l4-3")),
    v("enlf4-4", "a pinch of cinnamon", "щепотка корицы", "Мурзик держит щепотку корицы над яблоками.", "Послушать a pinch of cinnamon", p("l4-4")),
    v("enlf4-5", "Let's do it your way this time.", "Давай в этот раз по-твоему.", "Миссис Хоуп улыбается сестре.", "Послушать Let's do it your way this time", p("l4-5")),
    v("enlf4-6", "Bake it until it's golden.", "Пеки, пока не станет золотистым.", "Форма в духовке, сверху золотая корочка.", "Послушать Bake it until it's golden", p("l4-6")),
    v("enlf4-7", "with hot custard", "с горячим заварным соусом", "Жёлтый соус льётся на крамбл.", "Послушать with hot custard", p("l4-7")),
    v("enlf4-8", "It tastes just like Mum's.", "На вкус точно как у мамы.", "Сёстры пробуют с одной ложки и смеются.", "Послушать It tastes just like Mum's", p("l4-8")),
  ],
  letters: [
    letter("crumble = [крамбл]", "u = короткое [а]: crumble, butter, crust.", "apple crumble", "яблочный крамбл"),
    letter("cinnamon = [сИнэмэн]", "c перед i читается как [с]. Ударение на первый слог.", "a pinch of cinnamon", "щепотка корицы"),
  ],
  dialogue: {
    title: "Две сестры на одной кухне",
    note: "Духовкой занимаются миссис Хоуп и Мэгги. Мурзик чистит яблоки и отвечает за корицу.",
    lines: [
      line("hope", "Mum's apple crumble. First, rub the butter into the flour.", "Мамин яблочный крамбл. Сначала разотри масло с мукой."),
      line("maggie", "And oats! If we add oats, it'll be crunchier.", "И овсянку! Если добавим овсянку, получится более хрустящим."),
      line("hope", "Mum never added oats! … Oh, all right. Let's do it your way this time.", "Мама никогда не добавляла овсянку! … Ладно. Давай в этот раз по-твоему."),
      line("murzik", "And a pinch of cinnamon?", "А щепотку корицы?"),
      line("maggie", "Just a pinch! If you add too much, Rose will complain for a week.", "Только щепотку! Если положишь слишком много, Роуз будет ворчать неделю."),
      line("hope", "Bake it until it's golden. Then serve it with hot custard.", "Пеки, пока не станет золотистым. Потом подавай с горячим заварным соусом."),
      line("maggie", "Mmm… It tastes just like Mum's.", "Ммм… На вкус точно как у мамы."),
      line("hope", "Better. Don't tell anyone I said that.", "Лучше. Только никому не говори, что я так сказала."),
    ],
    gist: choice("enlf4-d1", "Что предложила добавить Мэгги?", [
      ["Овсянку.", true],
      ["Изюм.", false],
      ["Много корицы.", false],
    ]),
  },
  grammar: [
    {
      title: "If + Present Simple, … will …",
      paragraphs: [
        "Реальное условие в будущем: If we add oats, it'll be crunchier. If you add too much, Rose will complain. После if — Present Simple, не will!",
        "Можно поменять части местами (тогда без запятой): It'll be crunchier if we add oats.",
      ],
      examples: [
        { ru: "If it rains, we'll put up the awning.", en: "Если пойдёт дождь, мы поставим навес." },
        { ru: "We'll sell everything if the weather is good.", en: "Мы всё продадим, если будет хорошая погода." },
      ],
    },
  ],
  tasks: [
    listen("enlf4-t1", "Послушай. С чем подают крамбл?", "Bake it until it's golden. Then serve it with hot custard.", [
      ["С горячим заварным соусом.", true],
      ["С мороженым.", false],
      ["С чаем без сахара.", false],
    ]),
    choice("enlf4-t2", "Как сказать «Если пойдёт дождь, мы поставим навес»?", [
      ["If it rains, we'll put up the awning.", true],
      ["If it will rain, we put up the awning.", false],
      ["If it rains, we put up the awning yesterday.", false],
    ], { skill: "grammar" }),
    fill("enlf4-t3", "Выбери правильную форму: «Если добавим овсянку, получится более хрустящим».", "If we", "oats, it'll be crunchier.", "add", ["add", "will add", "added"], { skill: "grammar" }),
    read("enlf4-t4", "Прочитай рецепт сестёр. Сколько минут печь крамбл?", "MUM'S APPLE CRUMBLE (Rose & Maggie)\n6 apples, a pinch of cinnamon\n150 g flour, 100 g butter, 75 g sugar, a handful of oats (Maggie's way!)\nBake 40 minutes until golden.\nServe with hot custard.", [
      ["40 минут.", true],
      ["15 минут.", false],
      ["75 минут.", false],
    ]),
    match("enlf4-t5", "Соедини пары.", [
      ["a pinch of cinnamon", "щепотка корицы"],
      ["Let's do it your way this time.", "Давай в этот раз по-твоему."],
      ["with hot custard", "с горячим заварным соусом"],
      ["It tastes just like Mum's.", "На вкус точно как у мамы."],
    ], { skill: "words" }),
    tf("enlf4-t6", "Миссис Хоуп сразу согласилась добавить овсянку.", false, "listening"),
    speak("enlf4-t7", "Your friend wants to change your favourite recipe. What do you say?", "If you add more sugar, it'll be too sweet. But OK — let's do it your way this time!", "Если добавишь больше сахара, будет слишком сладко. Но ладно — давай в этот раз по-твоему!", {
      help: "Поспорь и уступи вслух: If you…, it'll…, Let's do it your way this time.",
    }),
  ],
  reward: {
    itemId: "fest-crumble-dish",
    itemName: "Мамина форма для крамбла",
    itemNameRu: "Mum's crumble dish",
    ru: "Mum's old dish — still the best!",
    en: "Старая мамина форма — всё ещё лучшая!",
    a11y: "На полке кафе стоит старая белая форма для запекания с синим ободком и маленьким сколом на краю.",
    image: p("crumble-dish"),
    steps: ["Мэгги привезла из Белфаста мамину старую форму.", "С синим ободком и сколом на краю.", "«Это ты её уронила в шестьдесят восьмом!» — «Нет, ты!»", "Они спорят — и обе смеются."],
    bridge: "Пятница. Ночью Лили перекрашивает фургон. Утром — фестиваль.",
  },
};

const fest5: Lesson = {
  id: "en-a2-london-festival-5",
  level: "A2",
  cityId: "en-london-festival",
  number: 5,
  title: "Festival day — День фестиваля",
  minutes: 8,
  goals: ["Работать с очередью", "Сравнения: busier than, the longest", "Вежливые просьбы: Could you…? Would you mind…?"],
  vocabNote: "Сравнения: busy → busier than, long → the longest, good → better → the best. Would you mind + -ing — вы не против…?",
  vocab: [
    v("enlf5-1", "It's busier than Galway!", "Здесь больше народу, чем в Голуэе!", "Огромная толпа между палатками.", "Послушать It's busier than Galway", p("l5-1")),
    v("enlf5-2", "the longest queue at the festival", "самая длинная очередь на фестивале", "Очередь к голубому фургону заворачивает за угол.", "Послушать the longest queue at the festival", p("l5-2")),
    v("enlf5-3", "Could you wait five minutes?", "Не могли бы вы подождать пять минут?", "Том показывает пять пальцев.", "Послушать Could you wait five minutes", p("l5-3")),
    v("enlf5-4", "Would you mind moving a bit?", "Вы не могли бы немного подвинуться?", "Мурзик вежливо просит людей посторониться.", "Послушать Would you mind moving a bit", p("l5-4")),
    v("enlf5-5", "We've sold out of tacos!", "Тако закончились!", "Пустой лоток, табличка SOLD OUT.", "Послушать We've sold out of tacos", p("l5-5")),
    v("enlf5-6", "Play our song!", "Включи нашу песню!", "Мурзик протягивает Тому телефон.", "Послушать Play our song", p("l5-6")),
    v("enlf5-7", "Everyone joined in.", "Все подхватили.", "Люди в очереди поют и хлопают.", "Послушать Everyone joined in", p("l5-7")),
    v("enlf5-8", "the happiest day of my life", "самый счастливый день в моей жизни", "Миссис Хоуп вытирает слёзы фартуком.", "Послушать the happiest day of my life", p("l5-8")),
  ],
  letters: [
    letter("queue = [кью:]", "Пять букв, а звук один: queue = [кью:]. В Америке говорят line.", "the longest queue", "самая длинная очередь"),
    letter("happiest = [хЭпиист]", "Happy → happier → the happiest: y меняется на i.", "the happiest day", "самый счастливый день"),
  ],
  dialogue: {
    title: "Самая длинная очередь",
    note: "Queue — очередь по-британски (в Америке — line). Песню «Blue Door» записала Рэн в Нэшвилле.",
    lines: [
      line("tom", "Look at all these people! It's busier than Galway!", "Посмотри, сколько людей! Здесь больше народу, чем в Голуэе!"),
      line("lily", "And you've got the longest queue at the festival!", "И у вас самая длинная очередь на фестивале!"),
      line("gabi", "Tom, we've sold out of tacos!", "Том, тако закончились!"),
      line("tom", "Sorry, everyone! Could you wait five minutes? More tacos are coming.", "Простите, все! Не могли бы вы подождать пять минут? Сейчас будут ещё тако."),
      line("murzik", "Excuse me, would you mind moving a bit? The queue is blocking the stage. … Tom, play our song!", "Простите, вы не могли бы немного подвинуться? Очередь загораживает сцену. … Том, включи нашу песню!"),
      line("hope", "\"Blue door, blue door — we always come back for more…\" Oh, look — everyone's joining in!", "«Синяя дверь, синяя дверь — мы всегда возвращаемся за добавкой…» Ой, смотри — все подхватывают!"),
      line("hope", "This is the happiest day of my life.", "Это самый счастливый день в моей жизни."),
    ],
    gist: choice("enlf5-d1", "Что закончилось?", [
      ["Тако.", true],
      ["Кубинские сэндвичи.", false],
      ["Суп с моллюсками.", false],
    ]),
  },
  grammar: [
    {
      title: "Сравнения и вежливые просьбы",
      paragraphs: [
        "Короткие слова: busy → busier than → the busiest; long → longer → the longest. Длинные: more popular → the most popular. Неправильные: good → better → the best, bad → worse → the worst.",
        "Could you + глагол? — Не могли бы вы…? Would you mind + -ing? — Вы не против…? Ответ «нет, не против»: Not at all!",
      ],
      examples: [
        { ru: "Our chowder is more popular than our tacos.", en: "Наш суп популярнее, чем наши тако." },
        { ru: "Would you mind waiting a minute? — Not at all!", en: "Вы не против подождать минутку? — Нисколько!" },
      ],
    },
  ],
  tasks: [
    listen("enlf5-t1", "Послушай. Сколько минут просит подождать Том?", "Sorry, everyone! Could you wait five minutes? More tacos are coming.", [
      ["Пять минут.", true],
      ["Пятнадцать минут.", false],
      ["Час.", false],
    ]),
    choice("enlf5-t2", "Как сказать «Вы не против подождать минутку?»", [
      ["Would you mind waiting a minute?", true],
      ["Would you mind to wait a minute?", false],
      ["Would you mind wait a minute?", false],
    ], { skill: "grammar" }),
    fill("enlf5-t3", "Выбери правильную форму: «Это самый счастливый день в моей жизни».", "This is the", "day of my life.", "happiest", ["happiest", "happier", "more happy"], { skill: "grammar" }),
    read("enlf5-t4", "Прочитай табло фестиваля. Сколько порций продал «Hope on Wheels»?", "LONDON STREET FOOD FESTIVAL — SATURDAY\nMost portions sold today:\n1. Hope on Wheels — 412\n2. Seoul Street — 365\n3. Pizza Piccola — 340", [
      ["412.", true],
      ["365.", false],
      ["340.", false],
    ]),
    match("enlf5-t5", "Соедини пары.", [
      ["the longest queue at the festival", "самая длинная очередь на фестивале"],
      ["We've sold out of tacos!", "Тако закончились!"],
      ["Everyone joined in.", "Все подхватили."],
      ["the happiest day of my life", "самый счастливый день в моей жизни"],
    ], { skill: "words" }),
    tf("enlf5-t6", "На фестивале в Лондоне меньше народу, чем в Голуэе.", false, "listening"),
    speak("enlf5-t7", "You're selling ice cream and the queue is very long. What do you say?", "Sorry, everyone! Could you wait two minutes? Would you mind moving a bit? Thank you — you're the best customers ever!", "Простите, все! Не могли бы вы подождать две минуты? Вы не могли бы немного подвинуться? Спасибо — вы лучшие покупатели на свете!", {
      help: "Вежливо поговори вслух с очередью: Could you…? Would you mind…-ing?",
    }),
  ],
  reward: {
    itemId: "fest-wristband",
    itemName: "Браслет участника",
    itemNameRu: "Festival wristband",
    ru: "Stallholder — London Street Food Festival!",
    en: "Участник — Лондонский фестиваль уличной еды!",
    a11y: "На лапе Мурзика — ярко-оранжевый тканевый браслет с надписью STALLHOLDER и логотипом фестиваля.",
    image: p("wristband"),
    steps: ["Каждому участнику дают оранжевый браслет.", "Мурзику он велик — его завязывают дважды.", "Габи и Лили весь день помогают с очередью.", "Вечером Мурзик засыпает прямо в фургоне, не снимая браслета."],
    bridge: "Воскресенье. Последний день фестиваля. В шесть вечера — объявление победителей. Миссис Хоуп делает вид, что ей всё равно.",
  },
};

const fest6: Lesson = {
  id: "en-a2-london-festival-6",
  level: "A2",
  cityId: "en-london-festival",
  number: 6,
  title: "The golden spoon — Золотая ложка",
  minutes: 8,
  goals: ["Понять объявление", "Сказать короткую речь и поблагодарить", "Повторить глагол + to / -ing"],
  vocabNote: "And the golden spoon goes to… — И золотая ложка достаётся… I'd like to thank… — Я хотел(а) бы поблагодарить…",
  vocab: [
    v("enlf6-1", "And the golden spoon goes to…", "И золотая ложка достаётся…", "Судья с конвертом на сцене.", "Послушать And the golden spoon goes to", p("l6-1")),
    v("enlf6-2", "the golden spoon", "золотая ложка", "Золотая ложка на бархатной подушке.", "Послушать the golden spoon", p("l6-2")),
    v("enlf6-3", "We didn't expect to win.", "Мы не ожидали выиграть.", "Том и Мурзик с открытыми ртами.", "Послушать We didn't expect to win", p("l6-3")),
    v("enlf6-4", "Say a few words!", "Скажите пару слов!", "Судья протягивает микрофон.", "Послушать Say a few words", p("l6-4")),
    v("enlf6-5", "I'd like to thank everyone who helped us.", "Я хочу поблагодарить всех, кто нам помогал.", "Мурзик у микрофона, все друзья у сцены.", "Послушать I'd like to thank everyone who helped us", p("l6-5")),
    v("enlf6-6", "Every recipe has a story.", "У каждого рецепта своя история.", "Голубая тетрадь, открытая на середине.", "Послушать Every recipe has a story", p("l6-6")),
    v("enlf6-7", "Fifty years ago, I didn't win.", "Пятьдесят лет назад я не выиграла.", "Старая фотография: молодая миссис Хоуп у палатки.", "Послушать Fifty years ago, I didn't win", p("l6-7")),
    v("enlf6-8", "It was worth waiting for.", "Ради этого стоило подождать.", "Миссис Хоуп держит золотую ложку.", "Послушать It was worth waiting for", p("l6-8")),
  ],
  letters: [
    letter("thank = [θэнк]", "th глухой: кончик языка между зубами, выдыхаем — не [с] и не [ф].", "I'd like to thank…", "Я хотел(а) бы поблагодарить…"),
    letter("expect = [икспЭкт]", "Ударение на второй слог: ex-PECT. x = [кс].", "We didn't expect to win.", "Мы не ожидали выиграть."),
  ],
  dialogue: {
    title: "Шесть часов вечера",
    note: "Золотая ложка — главный приз фестиваля. Миссис Хоуп участвовала в нём однажды, пятьдесят лет назад.",
    lines: [
      line("judge", "And the golden spoon goes to… Hope on Wheels — \"A taste of the road\"!", "И золотая ложка достаётся… «Hope on Wheels» — «Вкус дороги»!"),
      line("tom", "What? We didn't expect to win!", "Что? Мы не ожидали выиграть!"),
      line("judge", "Come up! Say a few words!", "Поднимайтесь! Скажите пару слов!"),
      line("murzik", "I'd like to thank everyone who helped us. Lily, Dave, Conor, Yolanda, Gabi, Lola, Wren, Miss Dot… Every recipe has a story — and every story has a friend in it.", "Я хочу поблагодарить всех, кто нам помогал. Лили, Дейва, Конора, Йоланду, Габи, Лолу, Рэн, мисс Дот… У каждого рецепта своя история — и в каждой истории есть друг."),
      line("tom", "But this spoon is for Gran.", "Но эта ложка — для бабушки."),
      line("hope", "Fifty years ago, I didn't win. I stopped hoping. But it was worth waiting for.", "Пятьдесят лет назад я не выиграла. Я перестала надеяться. Но ради этого стоило подождать."),
      line("maggie", "Rose Hope, you've never stopped hoping in your life. It's in your name!", "Роуз Хоуп, ты никогда в жизни не переставала надеяться. Это же в твоей фамилии!"),
    ],
    gist: choice("enlf6-d1", "Кому Том отдаёт золотую ложку?", [
      ["Бабушке.", true],
      ["Мурзику.", false],
      ["Судье.", false],
    ]),
  },
  grammar: [
    {
      title: "Повторяем: to или -ing?",
      paragraphs: [
        "to + глагол: want, would like, decide, hope, expect, plan, need, promise: We didn't expect to win. I'd like to thank everyone.",
        "-ing после: enjoy, mind, finish, keep, stop, give up, can't stand, look forward to; и после be worth: I stopped hoping. It was worth waiting for.",
      ],
      examples: [
        { ru: "We decided to enter the festival in May.", en: "Мы решили участвовать в фестивале в мае." },
        { ru: "Never stop dreaming!", en: "Никогда не переставай мечтать!" },
      ],
    },
  ],
  tasks: [
    listen("enlf6-t1", "Послушай. Что случилось с миссис Хоуп пятьдесят лет назад?", "Fifty years ago, I didn't win. I stopped hoping. But it was worth waiting for.", [
      ["Она не выиграла.", true],
      ["Она выиграла золотую ложку.", false],
      ["Она открыла кафе.", false],
    ]),
    choice("enlf6-t2", "Как сказать «Мы не ожидали выиграть»?", [
      ["We didn't expect to win.", true],
      ["We didn't expect winning.", false],
      ["We didn't expected to win.", false],
    ], { skill: "grammar" }),
    fill("enlf6-t3", "Выбери правильную форму: «Никогда не переставай мечтать!»", "Never stop", "!", "dreaming", ["dreaming", "dreamed", "dream"], { skill: "grammar" }),
    read("enlf6-t4", "Прочитай записку судьи. Что больше всего понравилось судьям?", "JUDGES' NOTES — Hope on Wheels\nFood: excellent — the Cuban sandwich was perfect.\nService: fast and friendly.\nBest of all: the story behind every dish!", [
      ["История каждого блюда.", true],
      ["Быстрое обслуживание.", false],
      ["Низкие цены.", false],
    ]),
    match("enlf6-t5", "Соедини пары.", [
      ["And the golden spoon goes to…", "И золотая ложка достаётся…"],
      ["the golden spoon", "золотая ложка"],
      ["Say a few words!", "Скажите пару слов!"],
      ["Every recipe has a story.", "У каждого рецепта своя история."],
    ], { skill: "words" }),
    tf("enlf6-t6", "Мурзик благодарит в своей речи только Тома.", false, "listening"),
    speak("enlf6-t7", "You've just won a prize. Say a few words!", "Thank you so much! We didn't expect to win. I'd like to thank my family and my friends. Never stop dreaming!", "Огромное спасибо! Мы не ожидали выиграть. Я хочу поблагодарить семью и друзей. Никогда не переставайте мечтать!", {
      help: "Скажи вслух короткую речь победителя: We didn't expect to…, I'd like to thank…",
    }),
  ],
  reward: {
    itemId: "golden-spoon",
    itemName: "Золотая ложка",
    itemNameRu: "The golden spoon",
    ru: "The golden spoon — fifty years later!",
    en: "Золотая ложка — пятьдесят лет спустя!",
    a11y: "На полке за прилавком кафе «Хоуп», рядом со старой фотографией молодой миссис Хоуп, лежит блестящая золотая ложка.",
    image: p("golden-spoon"),
    steps: ["Миссис Хоуп кладёт ложку на полку за прилавком.", "Рядом — её фото с фестиваля пятьдесят лет назад.", "Йоланда обнимает Габи: «Recuerda: never stop dreaming».", "Том отправляет фото Лоле, Рэн и мисс Дот. Ответы приходят до утра."],
    bridge: "Ночью, когда все уходят, Мурзик открывает голубую тетрадь. В ней осталась одна пустая страница.",
  },
};

const fest7: Lesson = {
  id: "en-a2-london-festival-7",
  level: "A2",
  cityId: "en-london-festival",
  number: 7,
  title: "London exam — Экзамен: Лондон и весь A2",
  minutes: 9,
  goals: ["Понять длинный рассказ на слух", "Рассказать о своём пути", "Повторить весь уровень A2"],
  vocabNote: "Урок 7 — экзамен города и всего уровня A2: длинная аудиоистория, повторение всех тем — от Брайтона до Лондона.",
  vocab: [
    v("enlf7-1", "Our eighteenth recipe!", "Наш восемнадцатый рецепт!", "Мурзик держит карточку с рецептом крамбла.", "Послушать Our eighteenth recipe", p("l7-1")),
    v("enlf7-2", "The road book is full.", "Книга дороги заполнена.", "Голубая тетрадь, толстая от вклеенных карточек.", "Послушать The road book is full", p("l7-2")),
    v("enlf7-3", "We've learned so much.", "Мы столькому научились.", "Мурзик и Том листают тетрадь.", "Послушать We've learned so much", p("l7-3")),
    v("enlf7-4", "What's next?", "Что дальше?", "Мурзик смотрит в окно на ночной Лондон.", "Послушать What's next", p("l7-4")),
    v("enlf7-5", "a new adventure", "новое приключение", "Карта мира на стене кафе.", "Послушать a new adventure", p("l7-5")),
    v("enlf7-6", "I'm proud of you both.", "Я горжусь вами обоими.", "Миссис Хоуп обнимает Тома и Мурзика.", "Послушать I'm proud of you both", p("l7-6")),
    v("enlf7-7", "Wherever you go…", "Куда бы вы ни поехали…", "Синяя дверь кафе приоткрыта.", "Послушать Wherever you go", p("l7-7")),
    v("enlf7-8", "…the blue door will be open.", "…синяя дверь будет открыта.", "Свет из синей двери падает на мостовую.", "Послушать the blue door will be open", p("l7-8")),
  ],
  letters: [
    letter("eighteenth = [эйтИ:нθ]", "gh не читается; ударение на teen; th в конце глухой.", "our eighteenth recipe", "наш восемнадцатый рецепт"),
    letter("proud = [прауд]", "ou = [ау]: proud, out, sound.", "I'm proud of you.", "Я горжусь тобой."),
  ],
  dialogue: {
    title: "Последняя страница",
    note: "Восемнадцатая страница — для рецепта миссис Хоуп и Мэгги. Это последний рецепт уровня A2.",
    lines: [
      line("hope", "Here. Mum's apple crumble — Maggie's way. For your book.", "Вот. Мамин яблочный крамбл — по рецепту Мэгги. Для вашей книги."),
      line("murzik", "Our eighteenth recipe! The road book is full.", "Наш восемнадцатый рецепт! Книга дороги заполнена."),
      line("tom", "We've learned so much, Gran. Seventeen places, eighteen recipes, and so many friends.", "Мы столькому научились, бабушка. Семнадцать мест, восемнадцать рецептов и столько друзей."),
      line("hope", "I'm proud of you both. So — what's next?", "Я горжусь вами обоими. Ну — что дальше?"),
      line("murzik", "A new adventure! A new notebook — and a bigger world.", "Новое приключение! Новая тетрадь — и мир побольше."),
      line("hope", "Then go. Wherever you go, the blue door will be open.", "Тогда езжайте. Куда бы вы ни поехали, синяя дверь будет открыта."),
    ],
    gist: choice("enlf7-d1", "Чей рецепт стал восемнадцатым?", [
      ["Мамин крамбл миссис Хоуп и Мэгги.", true],
      ["Кубинский сэндвич Йоланды.", false],
      ["Рыба с картошкой Дейва.", false],
    ]),
  },
  grammar: [
    {
      title: "Весь A2 в одном рассказе",
      paragraphs: [
        "Времена: Present Perfect (We've learned so much), Past Simple и Past Continuous (We were landing when the sun came out), going to и will (We're going to cook… I'll write the list), If + Present, … will …",
        "Слова и формы: much / many, сравнения (busier than, the happiest), Could you…? / Would you mind…-ing?, глагол + to / -ing (We didn't expect to win. Never stop dreaming).",
      ],
      examples: [
        { ru: "We've been to seventeen places, and next year we're going to see even more.", en: "Мы побывали в семнадцати местах, а в следующем году увидим ещё больше." },
        { ru: "If you come to London, we'll cook for you.", en: "Если приедешь в Лондон, мы для тебя приготовим." },
      ],
    },
  ],
  tasks: [
    listen("enlf7-t1", "Аудиоистория: миссис Хоуп рассказывает о своей жизни. Сколько ей было лет, когда она приехала в Лондон?", "I came to London from Belfast fifty years ago, when I was eighteen. Maggie and I had a silly argument, and I was angry with her. That summer I entered the festival, baked alone and didn't win. Then I worked in a big hotel kitchen and saved every penny. Years later I opened this little café with a blue door. This year Maggie and I baked together — and my grandson and a ginger cat brought the golden spoon home.", [
      ["Восемнадцать.", true],
      ["Двадцать пять.", false],
      ["Пятьдесят.", false],
    ]),
    listen("enlf7-t2", "Послушай конец рассказа. Что изменилось в этом году?", "That summer I entered the festival, baked alone and didn't win. This year Maggie and I baked together.", [
      ["Сёстры пекли вместе.", true],
      ["Миссис Хоуп пекла одна.", false],
      ["Миссис Хоуп не участвовала.", false],
    ]),
    choice("enlf7-t3", "Повторяем A2: как сказать «Если приедешь в Лондон, мы для тебя приготовим»?", [
      ["If you come to London, we'll cook for you.", true],
      ["If you will come to London, we cook for you.", false],
      ["If you came to London, we cook for you yesterday.", false],
    ], { skill: "grammar" }),
    read("enlf7-t4", "Прочитай оглавление книги дороги. Какой рецепт на странице 1?", "THE ROAD BOOK — CONTENTS\n1. Fish and chips (Brighton)\n…\n16. Hot chicken (Nashville)\n17. Cuban sandwich (Miami)\n18. Mum's apple crumble (London)", [
      ["Рыба с картошкой фри из Брайтона.", true],
      ["Кубинский сэндвич из Майами.", false],
      ["Мамин крамбл из Лондона.", false],
    ]),
    script("enlf7-t5", "Поговори с миссис Хоуп.", [
      { speaker: "Миссис Хоуп", text: "I'm proud of you both. What have you learned?" },
      { speaker: "Ты", answer: "We've learned so much! We've been to seventeen places.", options: ["We've learned so much! We've been to seventeen places.", "We learned so much tomorrow! We go to seventeen places.", "We've learned so much! We've went to seventeen places."] },
      { speaker: "Миссис Хоуп", text: "So — what's next?" },
      { speaker: "Ты", answer: "We're going to start a new adventure!", options: ["We're going to start a new adventure!", "We're going start a new adventure!", "We going to starting a new adventure!"] },
    ], { skill: "review" }),
    match("enlf7-t6", "Повторяем весь A2: соедини пары.", [
      ["the golden spoon", "золотая ложка"],
      ["a pinch of cinnamon", "щепотка корицы"],
      ["Long time no see!", "Сто лет не виделись!"],
      ["The road book is full.", "Книга дороги заполнена."],
    ], { skill: "review" }),
    speak("enlf7-t7", "Tell me about your A2 journey. What have you learned?", "I've been to eighteen places. I've learned to talk about my plans, my experience and my feelings. I'm proud of myself — and I'm going to keep learning!", "Я побывал(а) в восемнадцати местах. Я научился (научилась) говорить о планах, опыте и чувствах. Я горжусь собой — и буду учиться дальше!", {
      help: "Расскажи вслух о своём пути по A2: I've been…, I've learned…, I'm going to…",
    }),
  ],
  reward: {
    itemId: "recipe-apple-crumble",
    itemName: "Рецепт «Apple crumble»",
    itemNameRu: "Apple crumble recipe card",
    ru: "Our eighteenth recipe — the road book is full!",
    en: "Наш восемнадцатый рецепт — книга дороги заполнена!",
    a11y: "Карточка с рецептом яблочного крамбла, написанная двумя почерками, вклеена на последнюю, восемнадцатую страницу голубой тетради.",
    image: p("recipe-apple-crumble"),
    steps: ["Рецепт написан двумя почерками: Роуз и Мэгги.", "«Овсянка — по-моему!» — дописала Мэгги на полях.", "Мурзик вклеивает его на последнюю страницу.", "Голубая тетрадь заполнена. На полке ждёт новая — зелёная."],
  },
};

const story: CityStory = {
  home: {
    name: "Кафе «Хоуп»",
    nameRu: "Hope's Café",
    image: p("home"),
    a11y: "Маленькое лондонское кафе с синей дверью; у входа стоит голубой фургон «Hope on Wheels», на окне — фестивальные флажки.",
  },
  keepsakeId: "recipe-apple-crumble",
  welcomeRu: "Hello again, London!",
  welcomeEn: "Снова привет, Лондон!",
  welcomeImage: p("arrival"),
  welcomeA11y: "Мурзик и Том снова в Лондоне: голубой фургон «Hope on Wheels» ждёт у кафе с синей дверью, улицу украшают флажки фестиваля.",
  departureImage: p("departure"),
  departureA11y: "Мурзик и Том выходят из синей двери с новой зелёной тетрадью; миссис Хоуп и Мэгги машут им с порога.",
  finale: [
    {
      image: p("finale-1"),
      a11y: "В кафе «Хоуп» уютно: коврик WELCOME HOME, доска с меню, фото гостей, мамина форма для крамбла, браслет участника, золотая ложка и рецепт крамбла.",
      lines: [
        { en: "Дом, друзья со всего света и золотая ложка — пятьдесят лет спустя." },
        { en: "В книге дороги восемнадцатый, последний рецепт: мамин крамбл Роуз и Мэгги." },
      ],
    },
    {
      image: p("finale-2"),
      a11y: "Все друзья у голубого фургона на фестивале: миссис Хоуп с золотой ложкой, Мэгги, Лили, Дейв, Конор, Йоланда, Габи, Том и Мурзик.",
      lines: [
        { ru: "London complete!", en: "Лондон пройден!" },
        { en: "7 / 7 уроков" },
        { ru: "We didn't expect to win — but we never stopped hoping!", en: "Мы не ожидали выиграть — но никогда не переставали надеяться!" },
      ],
    },
    {
      image: p("finale-3"),
      a11y: "Голубая тетрадь лежит на прилавке, заполненная восемнадцатью рецептами; рядом — новая зелёная тетрадь.",
      lines: [
        { ru: "A2 complete! Eighteen places, eighteen recipes.", en: "Уровень A2 пройден! Восемнадцать мест, восемнадцать рецептов." },
        { en: "Ты умеешь рассказать о прошлом, о планах, об опыте и о чувствах." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Мурзик и Том выходят из синей двери с новой зелёной тетрадью; миссис Хоуп и Мэгги машут им с порога.",
      lines: [
        { ru: "Wherever you go, the blue door will be open.", en: "Куда бы вы ни поехали, синяя дверь будет открыта." },
        { en: "Начинается B1!" },
      ],
    },
  ],
};

export const enLondonFestival = {
  id: "en-london-festival",
  name: "Лондон",
  nameEn: "London",
  lessons: [fest1, fest2, fest3, fest4, fest5, fest6, fest7],
  story,
};
