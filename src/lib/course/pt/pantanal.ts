import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { PAIRS, YOU, build, choice, g, line, listen, match, missing, script, speak, spell, t, tf, v } from "./make";

/* Пантанал · «Животные» · Ранчо Сеу Бенедиту. Животные и описание, ser и estar, лошади, рыбалка, ночные звуки. Пипока выучил «Olha o jacaré!». */

const p = (name: string) => pic(`pt/pantanal/${name}`);
const BENEDITO = t("Сеу Бенедиту", "Seu Benedito");

const pn1: Lesson = {
  id: "pt-a1-pantanal-1",
  level: "A1",
  cityId: "pt-pantanal",
  number: 1,
  title: t("Os animais — Животные", "Os animais — Animals"),
  minutes: 7,
  goals: [
    t("Назвать животных Пантанала", "Name the animals of the Pantanal"),
    t("Спросить «Что это за животное?»", "Ask “What animal is that?”"),
    t("Ответить «Это…»", "Answer “It's a…”"),
  ],
  vocabNote: t(
    "Пантанал — самая большая в мире заболоченная равнина. Здесь кайманов больше, чем людей! Capivara — капибара, самый большой грызун на свете.",
    "The Pantanal is the world's largest wetland — there are more caimans here than people! A capivara is a capybara, the biggest rodent in the world.",
  ),
  vocab: [
    v("ptpn1-1", "Que animal é esse?", t("Что это за животное?", "What animal is that?"),
      t("Мурзик с биноклем показывает на что-то в траве.", "Murzik, holding his binoculars, points at something in the grass."),
      p("l1-1")),
    v("ptpn1-2", "É uma capivara.", t("Это капибара.", "It's a capybara."),
      t("Большая спокойная капибара сидит у воды.", "A big, calm capybara sits by the water."),
      p("l1-2")),
    v("ptpn1-3", "o jacaré", t("кайман", "the caiman"),
      t("Кайман лежит на берегу с открытой пастью.", "A caiman lies on the bank with its mouth open."),
      p("l1-3")),
    v("ptpn1-4", "a arara-azul", t("синий ара", "the hyacinth macaw"),
      t("Ярко-синий попугай ара на ветке.", "A bright blue macaw on a branch."),
      p("l1-4")),
    v("ptpn1-5", "a onça-pintada", t("ягуар", "the jaguar"),
      t("Пятнистый ягуар отдыхает в тени дерева.", "A spotted jaguar rests in the shade of a tree."),
      p("l1-5")),
    v("ptpn1-6", "o tuiuiú", t("ябиру (большой аист)", "the jabiru stork"),
      t("Огромный аист с чёрной шеей и красным воротником.", "A huge stork with a black neck and a red collar."),
      p("l1-6")),
    v("ptpn1-7", "os pássaros", t("птицы", "the birds"),
      t("Стая белых цапель летит над водой.", "A flock of white egrets flies over the water."),
      p("l1-7")),
  ],
  dialogue: {
    title: t("Первая прогулка", "The first walk"),
    note: t(
      "Pantaneiro — местный житель Пантанала, ковбой. Não se mexe — «не шевелись».",
      "Pantaneiro means a local of the Pantanal, a cowboy. Não se mexe means “don't move”.",
    ),
    lines: [
      line("benedito", "Bem-vindos à fazenda! Eu sou o Benedito, pantaneiro.", t("Добро пожаловать на ранчо! Я Бенедиту, пантанейру.", "Welcome to the ranch! I'm Benedito, a pantaneiro.")),
      line("murzik", "Seu Benedito, que animal é esse?", t("Сеу Бенедиту, что это за животное?", "Seu Benedito, what animal is that?")),
      line("benedito", "É uma capivara. E ali tem um jacaré.", t("Это капибара. А вон там кайман.", "It's a capybara. And there's a caiman over there.")),
      line("bia", "Olha! Uma arara-azul!", t("Смотри! Синий ара!", "Look! A hyacinth macaw!")),
      line("murzik", "É azul como o mar! E aquele pássaro grande?", t("Синий, как море! А та большая птица?", "It's as blue as the sea! And that big bird?")),
      line("benedito", "É o tuiuiú. E ali… shhh, não se mexe… uma onça-pintada!", t("Это ябиру. А там… тсс, не шевелись… ягуар!", "That's a jabiru. And over there… shhh, don't move… a jaguar!")),
    ],
    gist: choice("ptpn1-d1", t("Какое животное видят последним?", "Which animal do they see last?"), [
      [t("Ягуара.", "A jaguar."), true],
      [t("Капибару.", "A capybara."), false],
      [t("Каймана.", "A caiman."), false],
    ]),
  },
  grammar: [
    g(
      t("Что это? — É um / uma…", "Que animal é esse? — É um / uma…"),
      [
        t(
          "Esse — «этот» (рядом с тобой или о чём речь): Que animal é esse? — Что это за животное? Ответ: É um jacaré. É uma capivara. Артикль um / uma — по роду слова.",
          "Esse means “that” (near you, or what we're talking about): Que animal é esse? — What animal is that? Answer with É um… or É uma… depending on the noun's gender: É um jacaré. É uma capivara. (In everyday speech esse also often means “this” — remember São Paulo.)",
        ),
        t(
          "Отдельное слово «это» здесь не нужно: просто É uma capivara — «Это капибара».",
          "There's no word for “it” here: É uma capivara simply means “It's a capybara”.",
        ),
      ],
      [
        ["Que pássaro é esse? — É uma arara.", t("Что это за птица? — Это ара.", "What bird is that? — It's a macaw.")],
        ["É um jacaré grande.", t("Это большой кайман.", "It's a big caiman.")],
      ],
    ),
  ],
  tasks: [
    choice("ptpn1-t1", t("Как ответить «Это капибара»? (a capivara)", "How do you say “It's a capybara”? (a capivara)"), [
      ["É uma capivara.", true],
      ["É um capivara.", false],
      ["Esse uma capivara.", false],
    ], { skill: "grammar" }),
    listen("ptpn1-t2", t("Послушай. Какое животное?", "Listen. Which animal is it?"), "É um jacaré.", [
      [t("Кайман.", "A caiman."), true],
      [t("Ягуар.", "A jaguar."), false],
      [t("Аист.", "A stork."), false],
    ]),
    match("ptpn1-t3", PAIRS, [
      ["o jacaré", t("кайман", "the caiman")],
      ["a capivara", t("капибара", "the capybara")],
      ["a onça-pintada", t("ягуар", "the jaguar")],
      ["a arara-azul", t("синий ара", "the hyacinth macaw")],
    ], { skill: "words" }),
    spell("ptpn1-t4", t("Собери из букв слово «животное».", "Spell the word for “animal”."), "animal"),
    speak("ptpn1-t5", "Qual é o seu animal favorito?", "O meu animal favorito é a capivara.", t("Моё любимое животное — капибара. (Назови своё.)", "My favourite animal is the capybara. (Say yours.)"), {
      help: t("Назови вслух своё любимое животное.", "Say your favourite animal aloud."),
    }),
    choice("ptpn1-t6", t("Как сказать «Как красиво!»?", "How do you say “How beautiful!”?"), [
      ["Que lindo!", true],
      ["Que fome!", false],
      ["Que barulho!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "net",
    itemName: t("Москитная сетка", "Mosquito net"),
    itemNameRu: "Mosquiteiro",
    ru: "Oba! Um mosquiteiro!",
    en: t("Ура! Москитная сетка!", "Hooray! A mosquito net!"),
    a11y: t("Над кроватью висит белая москитная сетка, как маленький шатёр.", "A white mosquito net hangs over the bed like a little tent."),
    image: p("net"),
    steps: [
      t("Вечером вокруг лампы кружат комары.", "In the evening mosquitoes buzz around the lamp."),
      t("Сеу Бенедиту вешает над кроватью Мурзика сетку.", "Seu Benedito hangs a net over Murzik's bed."),
      t("«Aqui tem muito mosquito!» — «Здесь полно комаров!»", "“Aqui tem muito mosquito!” — “There are loads of mosquitoes here!”"),
      t("Мурзик спит как в маленьком шатре.", "Murzik sleeps as if in a little tent."),
    ],
    bridge: t("Утром Мурзик хочет рассмотреть всех животных поближе.", "In the morning Murzik wants a closer look at all the animals."),
  },
};

const pn2: Lesson = {
  id: "pt-a1-pantanal-2",
  level: "A1",
  cityId: "pt-pantanal",
  number: 2,
  title: t("Grande ou pequeno? — Большой или маленький?", "Grande ou pequeno? — Big or small?"),
  minutes: 7,
  goals: [
    t("Описать животное", "Describe an animal"),
    t("Спросить, опасно ли", "Ask if something is dangerous"),
    t("Согласовать прилагательные во множественном", "Make adjectives plural"),
  ],
  vocabNote: t(
    "Colorido — «разноцветный», perigoso — «опасный», calmo — «спокойный». Все они меняются по роду и числу.",
    "Colorido means “colourful”, perigoso “dangerous”, calmo “calm”. They all agree in gender and number.",
  ),
  vocab: [
    v("ptpn2-1", "A capivara é grande.", t("Капибара большая.", "The capybara is big."),
      t("Мурзик рядом с капибарой — она в три раза больше.", "Murzik next to a capybara — it's three times his size."),
      p("l2-1")),
    v("ptpn2-2", "O passarinho é pequeno.", t("Птичка маленькая.", "The little bird is small."),
      t("Крошечная птичка сидит на лапе у Мурзика.", "A tiny bird perches on Murzik's paw."),
      p("l2-2")),
    v("ptpn2-3", "Ele é perigoso?", t("Он опасный?", "Is it dangerous?"),
      t("Мурзик опасливо выглядывает из-за дерева на каймана.", "Murzik peers nervously at a caiman from behind a tree."),
      p("l2-3")),
    v("ptpn2-4", "Não, ele é calmo.", t("Нет, он спокойный.", "No, it's calm."),
      t("Кайман неподвижно лежит на солнце, на спине у него сидит птичка.", "A caiman lies motionless in the sun with a bird sitting on its back."),
      p("l2-4")),
    v("ptpn2-5", "As araras são coloridas.", t("Ара разноцветные.", "The macaws are colourful."),
      t("Красные, синие и жёлтые ара на ветке.", "Red, blue and yellow macaws on a branch."),
      p("l2-5")),
    v("ptpn2-6", "Ela é muito rápida!", t("Она очень быстрая!", "It's really fast!"),
      t("Ящерица молнией убегает по камню.", "A lizard darts across a rock like lightning."),
      p("l2-6")),
    v("ptpn2-7", "Os jacarés são lentos.", t("Кайманы медлительные.", "The caimans are slow."),
      t("Кайман лениво ползёт к воде.", "A caiman lazily crawls towards the water."),
      p("l2-7")),
  ],
  dialogue: {
    title: t("Капибара и её друзья", "The capybara and her friends"),
    note: t(
      "Amiga de todos — «подружка всем». Na água — «в воде».",
      "Amiga de todos means “everyone's friend”. Na água means “in the water”.",
    ),
    lines: [
      line("murzik", "Seu Benedito, a capivara é grande! Ela é perigosa?", t("Сеу Бенедиту, капибара большая! Она опасная?", "Seu Benedito, the capybara is big! Is she dangerous?")),
      line("benedito", "Não, ela é calma. Ela é amiga de todos!", t("Нет, она спокойная. Она со всеми дружит!", "No, she's calm. She's everyone's friend!")),
      line("bia", "E o jacaré? Ele é perigoso?", t("А кайман? Он опасный?", "And the caiman? Is he dangerous?")),
      line("benedito", "Um pouco. Mas os jacarés são lentos… na terra.", t("Немножко. Но кайманы медлительные… на суше.", "A little. But caimans are slow… on land.")),
      line("murzik", "E na água?", t("А в воде?", "And in the water?")),
      line("benedito", "Na água eles são muito rápidos!", t("В воде они очень быстрые!", "In the water they're very fast!")),
      line("bia", "Olha as araras! Elas são tão coloridas!", t("Смотри на ара! Какие они разноцветные!", "Look at the macaws! They're so colourful!")),
    ],
    gist: choice("ptpn2-d1", t("Какие кайманы в воде?", "What are caimans like in the water?"), [
      [t("Очень быстрые.", "Very fast."), true],
      [t("Медлительные.", "Slow."), false],
      [t("Спокойные.", "Calm."), false],
    ]),
  },
  grammar: [
    g(
      t("Прилагательные во множественном", "Plural adjectives"),
      [
        t(
          "Прилагательное повторяет за словом и род, и число: o jacaré lento — os jacarés lentos, a arara colorida — as araras coloridas.",
          "Adjectives copy both the gender and the number of the noun: o jacaré lento — os jacarés lentos, a arara colorida — as araras coloridas.",
        ),
        t(
          "Ser для «каким бывает всегда»: A capivara é grande. Ela é calma. Os jacarés são lentos.",
          "Use ser for what something is like by nature: A capivara é grande. Ela é calma. Os jacarés são lentos.",
        ),
      ],
      [
        ["Os pássaros são pequenos.", t("Птицы маленькие.", "The birds are small.")],
        ["As onças são rápidas.", t("Ягуары быстрые.", "Jaguars are fast.")],
      ],
    ),
  ],
  tasks: [
    choice("ptpn2-t1", t("Как сказать «Ара разноцветные»?", "How do you say “The macaws are colourful”?"), [
      ["As araras são coloridas.", true],
      ["As araras é colorida.", false],
      ["As araras são colorido.", false],
    ], { skill: "grammar" }),
    listen("ptpn2-t2", t("Послушай. Какой кайман?", "Listen. What is the caiman like?"), "O jacaré é lento.", [
      [t("Медлительный.", "Slow."), true],
      [t("Быстрый.", "Fast."), false],
      [t("Маленький.", "Small."), false],
    ]),
    match("ptpn2-t3", PAIRS, [
      ["grande", t("большой", "big")],
      ["pequeno", t("маленький", "small")],
      ["rápido", t("быстрый", "fast")],
      ["perigoso", t("опасный", "dangerous")],
    ], { skill: "words" }),
    missing("ptpn2-t4", t("Какой буквы не хватает? («опасный»)", "Which letter is missing? (“dangerous”)"), "perigo", "o", "s", ["s", "z", "ss"]),
    speak("ptpn2-t5", "Como é o seu animal favorito?", "Ele é pequeno e muito rápido.", t("Он маленький и очень быстрый.", "It's small and really fast."), {
      help: t("Опиши вслух своё любимое животное.", "Describe your favourite animal aloud."),
    }),
    choice("ptpn2-t6", t("Как спросить «Что это за животное?»", "How do you ask “What animal is that?”"), [
      ["Que animal é esse?", true],
      ["Quem é esse animal?", false],
      ["Quanto é esse animal?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "boots",
    itemName: t("Резиновые сапожки", "Rubber boots"),
    itemNameRu: "Botas de borracha",
    ru: "Oba! Botas de borracha!",
    en: t("Ура! Резиновые сапожки!", "Hooray! Rubber boots!"),
    a11y: t("У двери стоят маленькие зелёные резиновые сапожки, все в грязи.", "A pair of small green rubber boots, caked in mud, stands by the door."),
    image: p("boots"),
    steps: [
      t("Лапы Мурзика все в грязи.", "Murzik's paws are covered in mud."),
      t("Сеу Бенедиту находит в сарае крошечные сапожки.", "Seu Benedito finds some tiny boots in the shed."),
      t("«Eram do meu neto!» — «Это сапожки моего внука!»", "“Eram do meu neto!” — “They were my grandson's!”"),
      t("Сапожки стоят у двери.", "The boots stand by the door."),
    ],
    bridge: t("Днём Мурзик снова идёт к реке. Кайман спит. Или нет?", "In the afternoon Murzik goes back to the river. The caiman is asleep. Or is it?"),
  },
};

const pn3: Lesson = {
  id: "pt-a1-pantanal-3",
  level: "A1",
  cityId: "pt-pantanal",
  number: 3,
  title: t("Ser ou estar? — Какой всегда и какой сейчас", "Ser ou estar? — Always or right now?"),
  minutes: 7,
  goals: [
    t("Различать ser и estar", "Tell ser and estar apart"),
    t("Сказать, что страшно", "Say you're scared"),
    t("Описать, что происходит сейчас", "Describe what's happening right now"),
  ],
  vocabNote: t(
    "Estou com medo — «мне страшно», буквально «я со страхом», как estou com frio. Род тут не важен.",
    "Estou com medo means “I'm scared” — literally “I'm with fear”, like estou com frio. It doesn't change for men and women.",
  ),
  vocab: [
    v("ptpn3-1", "Ele está dormindo.", t("Он спит.", "It's sleeping."),
      t("Кайман лежит с закрытыми глазами.", "A caiman lies with its eyes closed."),
      p("l3-1")),
    v("ptpn3-2", "Estou com medo!", t("Мне страшно!", "I'm scared!"),
      t("Мурзик прячется за ногами Сеу Бенедиту.", "Murzik hides behind Seu Benedito's legs."),
      p("l3-2")),
    v("ptpn3-3", "O rio está cheio.", t("Река разлилась.", "The river is high."),
      t("Река вышла из берегов, деревья стоят в воде.", "The river has burst its banks; trees stand in the water."),
      p("l3-3")),
    v("ptpn3-4", "Eu sou curioso.", t("Я любопытный.", "I'm curious."),
      t("Мурзик с любопытством наклонился к норке.", "Murzik bends curiously over a burrow."),
      p("l3-4")),
    v("ptpn3-5", "Ele está acordado!", t("Он проснулся!", "It's awake!"),
      t("Кайман открыл один глаз.", "The caiman has opened one eye."),
      p("l3-5")),
    v("ptpn3-6", "Calma, não tem perigo.", t("Спокойно, это не опасно.", "Don't worry, there's no danger."),
      t("Сеу Бенедиту спокойно поднимает руку.", "Seu Benedito calmly raises his hand."),
      p("l3-6")),
    v("ptpn3-7", "Ufa! Que alívio!", t("Уф! Какое облегчение!", "Phew! What a relief!"),
      t("Мурзик вытирает лоб лапой.", "Murzik wipes his brow with a paw."),
      p("l3-7")),
  ],
  dialogue: {
    title: t("Спящий кайман", "The sleeping caiman"),
    note: t(
      "Só — «просто, всего лишь». Bocejando — «зевает». Longe — «далеко».",
      "Só means “only, just”. Bocejando means “yawning”. Longe means “far away”.",
    ),
    lines: [
      line("murzik", "Olha, o jacaré está dormindo.", t("Смотри, кайман спит.", "Look, the caiman's asleep.")),
      line("bia", "Murzik, você é muito curioso! Não chega perto!", t("Мурзик, ты слишком любопытный! Не подходи близко!", "Murzik, you're too curious! Don't get close!")),
      line("murzik", "Ai! Ele está acordado! Estou com medo!", t("Ай! Он проснулся! Мне страшно!", "Eek! It's awake! I'm scared!")),
      line("benedito", "Calma, não tem perigo. Ele só está bocejando.", t("Спокойно, это не опасно. Он просто зевает.", "Don't worry, there's no danger. It's just yawning.")),
      line("murzik", "Ufa! Que alívio!", t("Уф! Какое облегчение!", "Phew! What a relief!")),
      line("benedito", "Mas os jacarés são perigosos. Fique longe, tá?", t("Но кайманы опасные. Держись подальше, ладно?", "But caimans are dangerous. Keep your distance, OK?")),
    ],
    gist: choice("ptpn3-d1", t("Что на самом деле делает кайман?", "What is the caiman actually doing?"), [
      [t("Зевает.", "Yawning."), true],
      [t("Нападает.", "Attacking."), false],
      [t("Ест рыбу.", "Eating a fish."), false],
    ]),
  },
  grammar: [
    g(
      t("Ser и estar: «какой» и «как сейчас»", "Ser and estar: what it is vs how it is now"),
      [
        t(
          "Ser — то, что постоянно: характер, кто ты, какой предмет: Eu sou curioso, Os jacarés são perigosos. Estar — то, что сейчас и может измениться: состояние, место, процесс: O jacaré está dormindo, O rio está cheio.",
          "Ser is for what's permanent: character, identity, what something is like: Eu sou curioso, Os jacarés são perigosos. Estar is for what's true right now and may change: states, places, actions in progress: O jacaré está dormindo, O rio está cheio.",
        ),
        t(
          "Проверь себя вопросом: это навсегда или только сейчас? Ele é calmo — он по характеру спокойный. Ele está calmo — сейчас спокоен.",
          "Ask yourself: is this permanent or just for now? Ele é calmo — he's a calm person. Ele está calmo — he's calm at the moment.",
        ),
      ],
      [
        ["A Bia é alegre.", t("Биа весёлая (по характеру).", "Bia is a cheerful person.")],
        ["A Bia está cansada.", t("Биа устала (сейчас).", "Bia is tired (right now).")],
      ],
    ),
  ],
  tasks: [
    choice("ptpn3-t1", t("Кайман сейчас спит. Как сказать?", "The caiman is asleep right now. How do you say it?"), [
      ["O jacaré está dormindo.", true],
      ["O jacaré é dormindo.", false],
      ["O jacaré dormindo.", false],
    ], { skill: "grammar" }),
    listen("ptpn3-t2", t("Послушай. Как себя чувствует говорящий?", "Listen. How does the speaker feel?"), "Estou com medo!", [
      [t("Ему страшно.", "He's scared."), true],
      [t("Ему весело.", "He's happy."), false],
      [t("Ему холодно.", "He's cold."), false],
    ]),
    tf("ptpn3-t3", t("O rio está cheio — «река разлилась» (сейчас).", "O rio está cheio means the river is high right now."), true, "words"),
    spell("ptpn3-t4", t("Собери из букв слово «страх».", "Spell the word for “fear”."), "medo"),
    speak("ptpn3-t5", "Você está com medo?", "Não, não tem perigo. Estou calmo.", t("Нет, это не опасно. Я спокоен (спокойна).", "No, there's no danger. I'm calm."), {
      help: t("Ответь вслух. Женщина скажет calma.", "Answer aloud. A woman says calma."),
    }),
    choice("ptpn3-t6", t("Как сказать «Капибара большая»?", "How do you say “The capybara is big”?"), [
      ["A capivara é grande.", true],
      ["A capivara está grande.", false],
      ["A capivara são grandes.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "horn",
    itemName: t("Пастуший рог", "Cowboy's horn"),
    itemNameRu: "Berrante",
    ru: "Oba! Um berrante!",
    en: t("Ура! Пастуший рог!", "Hooray! A cowboy's horn!"),
    a11y: t("На стене висит длинный рог, украшенный кожаным ремешком.", "A long horn with a leather strap hangs on the wall."),
    image: p("horn"),
    steps: [
      t("Сеу Бенедиту дует в длинный рог: «Бууу!»", "Seu Benedito blows into a long horn: “Boooo!”"),
      t("Коровы со всего поля идут к дому.", "Cows come towards the house from all over the field."),
      t("Он дарит Мурзику маленький рог.", "He gives Murzik a little horn of his own."),
      t("Рог висит на стене. Бууу!", "The horn hangs on the wall. Boooo!"),
    ],
    bridge: t("Утром Сеу Бенедиту выводит из конюшни двух лошадей.", "In the morning Seu Benedito leads two horses out of the stable."),
  },
};

const pn4: Lesson = {
  id: "pt-a1-pantanal-4",
  level: "A1",
  cityId: "pt-pantanal",
  number: 4,
  title: t("A cavalo — Верхом", "A cavalo — On horseback"),
  minutes: 7,
  goals: [
    t("Поговорить о жизни на ранчо", "Talk about life on the ranch"),
    t("Сказать «я никогда не…»", "Say “I've never…”"),
    t("Понять, как ехать верхом", "Understand riding instructions"),
  ],
  vocabNote: t(
    "Andar a cavalo — «ездить верхом», andar de bicicleta — «кататься на велосипеде». С лошадью — a, с транспортом — de.",
    "Andar a cavalo means “to ride a horse”; andar de bicicleta, “to ride a bike”. With a horse it's a, with vehicles it's de.",
  ),
  vocab: [
    v("ptpn4-1", "o cavalo", t("лошадь", "the horse"),
      t("Гнедая лошадь с белым пятном на лбу.", "A bay horse with a white star on its forehead."),
      p("l4-1")),
    v("ptpn4-2", "a vaca", t("корова", "the cow"),
      t("Белая корова с большими рогами в поле.", "A white cow with big horns in a field."),
      p("l4-2")),
    v("ptpn4-3", "Vamos andar a cavalo?", t("Поедем верхом?", "Shall we go riding?"),
      t("Сеу Бенедиту держит двух лошадей под уздцы.", "Seu Benedito holds two horses by their bridles."),
      p("l4-3")),
    v("ptpn4-4", "Eu nunca andei a cavalo.", t("Я никогда не ездил верхом.", "I've never ridden a horse."),
      t("Мурзик растерянно смотрит снизу вверх на огромную лошадь.", "Murzik looks up, bewildered, at an enormous horse."),
      p("l4-4")),
    v("ptpn4-5", "Sobe aqui!", t("Забирайся сюда!", "Climb up here!"),
      t("Сеу Бенедиту подсаживает Мурзика в седло.", "Seu Benedito lifts Murzik into the saddle."),
      p("l4-5")),
    v("ptpn4-6", "Segura as rédeas!", t("Держи поводья!", "Hold the reins!"),
      t("Мурзик в седле крепко держит поводья.", "Murzik in the saddle, gripping the reins."),
      p("l4-6")),
    v("ptpn4-7", "Devagar, cavalinho!", t("Потише, лошадка!", "Easy, horsey!"),
      t("Лошадь идёт шагом, Мурзик гладит её по шее.", "The horse walks slowly as Murzik strokes its neck."),
      p("l4-7")),
  ],
  dialogue: {
    title: t("Утро на ранчо", "Morning on the ranch"),
    note: t(
      "Primeira vez — «первый раз». Égua — «кобыла». Mansa — «смирная».",
      "Primeira vez means “first time”. Égua means “mare”. Mansa means “gentle”.",
    ),
    lines: [
      line("benedito", "Bom dia! Vamos andar a cavalo? Hoje nós levamos as vacas para o rio.", t("Доброе утро! Поедем верхом? Сегодня гоним коров к реке.", "Good morning! Shall we go riding? Today we're taking the cows down to the river.")),
      line("murzik", "Eu nunca andei a cavalo. É a primeira vez!", t("Я никогда не ездил верхом. Первый раз!", "I've never ridden a horse. It's my first time!")),
      line("benedito", "Não tem problema. Esta égua é mansa. Sobe aqui!", t("Не беда. Эта кобыла смирная. Забирайся!", "No problem. This mare is gentle. Climb up here!")),
      line("benedito", "Segura as rédeas!", t("Держи поводья!", "Hold the reins!")),
      line("murzik", "Ai! Ela está andando! Devagar, cavalinho!", t("Ай! Она пошла! Потише, лошадка!", "Whoa! She's moving! Easy, horsey!")),
      line("bia", "Muito bem, Murzik! Você é um pantaneiro!", t("Молодец, Мурзик! Ты настоящий пантанейру!", "Well done, Murzik! You're a real pantaneiro!")),
    ],
    gist: choice("ptpn4-d1", t("Что Мурзик делает впервые?", "What is Murzik doing for the first time?"), [
      [t("Едет верхом.", "Riding a horse."), true],
      [t("Доит корову.", "Milking a cow."), false],
      [t("Ловит рыбу.", "Fishing."), false],
    ]),
  },
  grammar: [
    g(
      t("Andei — «ездил(а)»: первое прошедшее", "Andei — “I rode”: a first look at the past"),
      [
        t(
          "Eu nunca andei — «я никогда не ездил(а)». У глаголов на -ar прошедшее время для «я» оканчивается на -ei: andei, falei, comprei. Род в прошедшем не меняется — andei говорят и мужчины, и женщины.",
          "Eu nunca andei means “I've never ridden”. For -ar verbs, “I” in the past ends in -ei: andei, falei, comprei. Portuguese uses this simple past where English often says “I have…”.",
        ),
        t(
          "Подробно прошедшее время будем учить в Форталезе. Пока запомни Eu nunca… — «я никогда не…».",
          "We'll learn the past tense properly in Fortaleza. For now remember Eu nunca… + -ei: “I've never…”.",
        ),
      ],
      [
        ["Eu nunca andei de barco.", t("Я никогда не плавал(а) на лодке.", "I've never been on a boat.")],
        ["Eu nunca falei português!", t("Я никогда не говорил(а) по-португальски!", "I've never spoken Portuguese!")],
      ],
    ),
  ],
  tasks: [
    choice("ptpn4-t1", t("Как сказать «кататься на велосипеде»?", "How do you say “ride a bike”?"), [
      ["andar de bicicleta", true],
      ["andar a bicicleta", false],
      ["jogar bicicleta", false],
    ], { skill: "grammar" }),
    listen("ptpn4-t2", t("Послушай. Что говорит Сеу Бенедиту?", "Listen. What does Seu Benedito say?"), "Segura as rédeas!", [
      [t("Держи поводья!", "Hold the reins!"), true],
      [t("Забирайся сюда!", "Climb up here!"), false],
      [t("Потише!", "Easy!"), false],
    ]),
    match("ptpn4-t3", PAIRS, [
      ["o cavalo", t("лошадь", "the horse")],
      ["a vaca", t("корова", "the cow")],
      ["Sobe aqui!", t("Забирайся сюда!", "Climb up here!")],
      ["devagar", t("медленно", "slowly")],
    ], { skill: "words" }),
    missing("ptpn4-t4", t("Какой буквы не хватает? («лошадь»)", "Which letter is missing? (“horse”)"), "ca", "alo", "v", ["v", "b", "f"]),
    speak("ptpn4-t5", "Você já andou a cavalo?", "Não, eu nunca andei a cavalo.", t("Нет, я никогда не ездил(а) верхом.", "No, I've never ridden a horse."), {
      help: t("Ответь вслух про себя. Для «да» скажи Sim, já andei.", "Answer aloud about yourself. For “yes”, say Sim, já andei."),
    }),
    choice("ptpn4-t6", t("Кайман сейчас спит. Как сказать?", "The caiman is asleep now. How do you say it?"), [
      ["Ele está dormindo.", true],
      ["Ele é dormindo.", false],
      ["Ele dorme agora sempre.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "jaguar",
    itemName: t("Деревянный ягуар", "Wooden jaguar"),
    itemNameRu: "Onça de madeira",
    ru: "Oba! Uma onça de madeira!",
    en: t("Ура! Деревянный ягуар!", "Hooray! A wooden jaguar!"),
    a11y: t("На полке стоит маленькая резная фигурка ягуара с нарисованными пятнами.", "A small carved jaguar figure with painted spots stands on the shelf."),
    image: p("jaguar"),
    steps: [
      t("Вечером Сеу Бенедиту строгает что-то ножом.", "In the evening Seu Benedito whittles something with his knife."),
      t("Это маленький деревянный ягуар!", "It's a little wooden jaguar!"),
      t("«Para o pantaneiro corajoso!» — «Смелому пантанейру!»", "“Para o pantaneiro corajoso!” — “For a brave pantaneiro!”"),
      t("Ягуар стоит на полке.", "The jaguar stands on the shelf."),
    ],
    bridge: t("На следующий день — рыбалка. Сеу Бенедиту обещает пираний!", "The next day — fishing. Seu Benedito promises piranhas!"),
  },
};

const pn5: Lesson = {
  id: "pt-a1-pantanal-5",
  level: "A1",
  cityId: "pt-pantanal",
  number: 5,
  title: t("A pescaria — Рыбалка", "A pescaria — Fishing"),
  minutes: 7,
  goals: [
    t("Говорить о рыбалке", "Talk about fishing"),
    t("Изменять глагол ter: tenho, tem, temos, têm", "Use ter for different people"),
    t("Порадоваться удаче", "Celebrate some good luck"),
  ],
  vocabNote: t(
    "Têm (они имеют) пишется с «шляпкой», а tem (он имеет) — без. Звучат почти одинаково.",
    "Têm (they have) has a little hat on the e; tem (he/she has) doesn't. They sound almost the same.",
  ),
  vocab: [
    v("ptpn5-1", "Vamos pescar?", t("Пойдём рыбачить?", "Shall we go fishing?"),
      t("Сеу Бенедиту с удочкой на плече.", "Seu Benedito with a fishing rod over his shoulder."),
      p("l5-1")),
    v("ptpn5-2", "a vara de pescar", t("удочка", "the fishing rod"),
      t("Мурзик держит маленькую бамбуковую удочку.", "Murzik holds a little bamboo fishing rod."),
      p("l5-2")),
    v("ptpn5-3", "a piranha", t("пиранья", "the piranha"),
      t("Серебристая рыбка с острыми зубами.", "A silvery little fish with sharp teeth."),
      p("l5-3")),
    v("ptpn5-4", "Peguei um peixe!", t("Я поймал рыбу!", "I caught a fish!"),
      t("Мурзик держит на леске бьющуюся рыбку.", "Murzik holds up a wriggling fish on his line."),
      p("l5-4")),
    v("ptpn5-5", "Ela tem dentes grandes!", t("У неё большие зубы!", "It's got big teeth!"),
      t("Крупно: пиранья с раскрытой пастью.", "Close-up: a piranha with its mouth open."),
      p("l5-5")),
    v("ptpn5-6", "Joga de volta!", t("Отпусти обратно!", "Throw it back!"),
      t("Мурзик бережно отпускает рыбку в реку.", "Murzik gently lets the fish go in the river."),
      p("l5-6")),
    v("ptpn5-7", "Que sorte!", t("Вот повезло!", "What luck!"),
      t("Биа хлопает Мурзика по плечу.", "Bia pats Murzik on the shoulder."),
      p("l5-7")),
  ],
  dialogue: {
    title: t("На берегу реки", "On the riverbank"),
    note: t(
      "Isca — «наживка». Que sorte! — «Вот повезло!»",
      "Isca means “bait”. Que sorte! means “What luck!”",
    ),
    lines: [
      line("benedito", "Vamos pescar? Vocês têm a vara de pescar?", t("Пойдём рыбачить? У вас есть удочки?", "Shall we go fishing? Have you got your rods?")),
      line("bia", "Eu tenho. E o Murzik?", t("У меня есть. А у Мурзика?", "I have. What about Murzik?")),
      line("benedito", "Esta vara é para você, Murzik. E nós temos isca. Agora… silêncio.", t("Эта удочка — тебе, Мурзик. И наживка у нас есть. А теперь… тишина.", "This rod is for you, Murzik. And we've got bait. Now… quiet.")),
      line("murzik", "Peguei! Peguei um peixe!", t("Поймал! Я поймал рыбу!", "Got one! I caught a fish!")),
      line("benedito", "É uma piranha! Que sorte!", t("Это пиранья! Вот повезло!", "It's a piranha! What luck!")),
      line("murzik", "Nossa! Ela tem dentes grandes!", t("Ого! У неё большие зубы!", "Wow! It's got big teeth!")),
      line("bia", "Joga de volta, Murzik!", t("Отпусти её, Мурзик!", "Throw it back, Murzik!")),
    ],
    gist: choice("ptpn5-d1", t("Кого поймал Мурзик?", "What did Murzik catch?"), [
      [t("Пиранью.", "A piranha."), true],
      [t("Каймана.", "A caiman."), false],
      [t("Старый ботинок.", "An old boot."), false],
    ]),
  },
  grammar: [
    g(
      t("Ter — «иметь»", "Ter — “to have”"),
      [
        t(
          "«У меня есть» в португальском — «я имею»: eu tenho, você / ele tem, nós temos, vocês / eles têm. Ela tem dentes grandes — «у неё большие зубы».",
          "Ter (to have): eu tenho, você / ele tem, nós temos, vocês / eles têm. Ela tem dentes grandes — It has big teeth.",
        ),
        t(
          "Помнишь, tem значит и «есть, имеется»: Tem piranha no rio? — В реке есть пираньи?",
          "Remember, tem also means “there is”: Tem piranha no rio? — Are there piranhas in the river?",
        ),
      ],
      [
        ["Nós temos duas varas.", t("У нас две удочки.", "We have two fishing rods.")],
        ["Eles têm um barco.", t("У них есть лодка.", "They have a boat.")],
      ],
    ),
  ],
  tasks: [
    choice("ptpn5-t1", t("Как сказать «У нас есть наживка»?", "How do you say “We have bait”?"), [
      ["Nós temos isca.", true],
      ["Nós tem isca.", false],
      ["Nós somos isca.", false],
    ], { skill: "grammar" }),
    listen("ptpn5-t2", t("Послушай. Что случилось?", "Listen. What happened?"), "Peguei um peixe!", [
      [t("Он поймал рыбу.", "He caught a fish."), true],
      [t("Он упал в воду.", "He fell in the water."), false],
      [t("Рыба убежала.", "The fish got away."), false],
    ]),
    match("ptpn5-t3", PAIRS, [
      ["pescar", t("рыбачить", "to fish")],
      ["a vara", t("удочка", "the rod")],
      ["os dentes", t("зубы", "the teeth")],
      ["Que sorte!", t("Вот повезло!", "What luck!")],
    ], { skill: "words" }),
    spell("ptpn5-t4", t("Собери из букв слово «пиранья».", "Spell the word for “piranha”."), "piranha"),
    speak("ptpn5-t5", "Você tem irmãos?", "Tenho. Eu tenho uma irmã. Ela tem dez anos.", t("Есть. У меня есть сестра. Ей десять лет.", "I do. I have a sister. She's ten."), {
      help: t("Расскажи вслух про свою семью — с tenho и tem.", "Talk about your family aloud, using tenho and tem."),
    }),
    choice("ptpn5-t6", t("Как сказать «Я никогда не ездил(а) верхом»?", "How do you say “I've never ridden a horse”?"), [
      ["Eu nunca andei a cavalo.", true],
      ["Eu nunca ando de cavalo.", false],
      ["Eu não nunca cavalo.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "rod",
    itemName: t("Бамбуковая удочка", "Bamboo fishing rod"),
    itemNameRu: "Vara de pescar",
    ru: "Oba! Uma vara de pescar!",
    en: t("Ура! Удочка!", "Hooray! A fishing rod!"),
    a11y: t("В углу стоит маленькая бамбуковая удочка с красным поплавком.", "A little bamboo fishing rod with a red float stands in the corner."),
    image: p("rod"),
    steps: [
      t("Сеу Бенедиту говорит, что бамбуковую удочку Мурзик может оставить себе.", "Seu Benedito says Murzik can keep the bamboo rod."),
      t("«Você é sortudo!» — «Ты везунчик!»", "“Você é sortudo!” — “You're a lucky one!”"),
      t("Мурзик ставит её в угол.", "Murzik stands it in the corner."),
      t("На поплавке нарисована рыбка.", "There's a little fish painted on the float."),
    ],
    bridge: t("Ночью в Пантанале очень шумно. Кто это там квакает, ухает и шуршит?", "At night the Pantanal is very noisy. Who's that croaking, hooting and rustling out there?"),
  },
};

const pn6: Lesson = {
  id: "pt-a1-pantanal-6",
  level: "A1",
  cityId: "pt-pantanal",
  number: 6,
  title: t("A noite — Ночь", "A noite — Night"),
  minutes: 7,
  goals: [
    t("Спросить, что это за звук", "Ask what a noise is"),
    t("Успокоить: «ничего нет»", "Reassure someone: “there's nothing there”"),
    t("Пожелать спокойной ночи", "Say good night"),
  ],
  vocabNote: t(
    "В португальском двойное отрицание — норма, как в русском: Não tem nada — «Ничего нет», Não tem ninguém — «Никого нет».",
    "Portuguese uses double negatives: Não tem nada (literally “there isn't nothing”) means “There's nothing”. Não tem ninguém — “There's nobody”.",
  ),
  vocab: [
    v("ptpn6-1", "Que barulho é esse?", t("Что это за шум?", "What's that noise?"),
      t("Мурзик в темноте настороженно поднял уши.", "Murzik pricks up his ears in the dark."),
      p("l6-1")),
    v("ptpn6-2", "Não tem nada.", t("Там ничего нет.", "There's nothing there."),
      t("Биа светит фонариком в пустую траву.", "Bia shines a torch at the empty grass."),
      p("l6-2")),
    v("ptpn6-3", "É só um sapo.", t("Это просто лягушка.", "It's just a frog."),
      t("На листе сидит маленькая зелёная лягушка и квакает.", "A little green frog sits on a leaf, croaking."),
      p("l6-3")),
    v("ptpn6-4", "Não tem ninguém.", t("Никого нет.", "There's nobody there."),
      t("Пустая веранда ранчо под луной.", "The empty ranch veranda under the moon."),
      p("l6-4")),
    v("ptpn6-5", "Os olhos brilham no escuro.", t("Глаза светятся в темноте.", "Eyes are shining in the dark."),
      t("В темноте у воды горят десятки красных огоньков.", "Dozens of red dots glow in the dark by the water."),
      p("l6-5")),
    v("ptpn6-6", "Vamos dormir?", t("Пойдём спать?", "Shall we go to bed?"),
      t("Биа зевает и показывает на дом.", "Bia yawns and points towards the house."),
      p("l6-6")),
    v("ptpn6-7", "Durma bem!", t("Спокойной ночи!", "Sleep well!"),
      t("Мурзик под москитной сеткой обнимает плюшевого тукана.", "Under the mosquito net, Murzik hugs his toy toucan."),
      p("l6-7")),
  ],
  dialogue: {
    title: t("Ночные звуки", "Night noises"),
    note: t(
      "Lanterna — «фонарик». São jacarés — «это кайманы». Eles não saem da água — «они не выходят из воды».",
      "Lanterna means “torch”. São jacarés means “they're caimans”. Eles não saem da água means “they don't come out of the water”.",
    ),
    lines: [
      line("murzik", "Bia! Que barulho é esse?", t("Биа! Что это за шум?", "Bia! What's that noise?")),
      line("bia", "Calma… Não tem nada. É só um sapo.", t("Спокойно… Ничего нет. Это просто лягушка.", "Relax… There's nothing there. It's just a frog.")),
      line("murzik", "E lá? Os olhos brilham no escuro!", t("А там? Глаза светятся в темноте!", "And over there? Eyes are shining in the dark!")),
      line("benedito", "São jacarés. Mas eles não saem da água à noite.", t("Это кайманы. Но ночью они из воды не выходят.", "They're caimans. But they don't come out of the water at night.")),
      line("murzik", "Tem certeza?", t("Вы уверены?", "Are you sure?")),
      line("benedito", "Tenho! Vamos dormir? Durma bem, Murzik!", t("Уверен! Пойдём спать? Спокойной ночи, Мурзик!", "I am! Shall we go to bed? Sleep well, Murzik!")),
    ],
    gist: choice("ptpn6-d1", t("Чьи глаза светятся в темноте?", "Whose eyes are shining in the dark?"), [
      [t("Кайманов.", "The caimans'."), true],
      [t("Лягушек.", "The frogs'."), false],
      [t("Ягуара.", "A jaguar's."), false],
    ]),
  },
  grammar: [
    g(
      t("Не… ничего, не… никого", "Double negatives: nada, ninguém"),
      [
        t(
          "Как и в русском, отрицаний может быть два: Não tem nada — «Ничего нет», Não tem ninguém — «Никого нет», Eu não vejo nada — «Я ничего не вижу».",
          "In Portuguese, two negatives don't cancel out — they're required: Não tem nada (There's nothing), Não tem ninguém (There's nobody), Eu não vejo nada (I can't see anything).",
        ),
        t(
          "Tem certeza? — «Ты уверен(а)?», буквально «Есть уверенность?». Отвечают Tenho! — «Уверен(а)!»",
          "Tem certeza? means “Are you sure?” — literally “Do you have certainty?” The answer is Tenho! (I am!)",
        ),
      ],
      [
        ["Eu não vejo nada.", t("Я ничего не вижу.", "I can't see anything.")],
        ["Não tem ninguém aqui.", t("Здесь никого нет.", "There's nobody here.")],
      ],
    ),
  ],
  tasks: [
    choice("ptpn6-t1", t("Как сказать «Здесь никого нет»?", "How do you say “There's nobody here”?"), [
      ["Não tem ninguém aqui.", true],
      ["Tem ninguém não aqui.", false],
      ["Não tem alguém aqui.", false],
    ], { skill: "grammar" }),
    listen("ptpn6-t2", t("Послушай. Что это за шум?", "Listen. What's the noise?"), "É só um sapo.", [
      [t("Просто лягушка.", "Just a frog."), true],
      [t("Кайман.", "A caiman."), false],
      [t("Лошадь.", "A horse."), false],
    ]),
    match("ptpn6-t3", PAIRS, [
      ["nada", t("ничего", "nothing")],
      ["ninguém", t("никто", "nobody")],
      ["o escuro", t("темнота", "the dark")],
      ["o sapo", t("лягушка", "the frog")],
    ], { skill: "words" }),
    missing("ptpn6-t4", t("Какой буквы не хватает? («никто»)", "Which letter is missing? (“nobody”)"), "ningu", "m", "é", ["é", "e", "ê"]),
    speak("ptpn6-t5", "Boa noite! Vamos dormir?", "Vamos! Boa noite, durma bem!", t("Пойдём! Спокойной ночи, спи спокойно!", "Let's go! Good night, sleep well!"), {
      help: t("Пожелай вслух спокойной ночи.", "Say good night aloud."),
    }),
    choice("ptpn6-t6", t("Как сказать «Вот повезло!»?", "How do you say “What luck!”?"), [
      ["Que sorte!", true],
      ["Que medo!", false],
      ["Que barulho!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "terere",
    itemName: t("Чашка для терере", "Tereré cup"),
    itemNameRu: "Guampa de tereré",
    ru: "Oba! Uma guampa de tereré!",
    en: t("Ура! Чашка для терере!", "Hooray! A tereré cup!"),
    a11y: t("Чашка из рога с металлической трубочкой стоит на подоконнике.", "A cup made from horn with a metal straw stands on the windowsill."),
    image: p("terere"),
    steps: [
      t("Утром Сеу Бенедиту пьёт холодный чай-матэ, терере.", "In the morning Seu Benedito drinks cold maté tea — tereré."),
      t("Его пьют через металлическую трубочку из чашки из рога.", "You drink it through a metal straw from a cup made of horn."),
      t("«Experimenta!» — «Попробуй!» Горько, но освежает.", "“Experimenta!” — “Try it!” It's bitter, but refreshing."),
      t("Сеу Бенедиту дарит Мурзику такую чашку.", "Seu Benedito gives Murzik a cup of his own."),
    ],
    bridge: t("За завтраком Сеу Бенедиту вдруг смеётся: «Agora eu lembro! O papagaio!»", "At breakfast Seu Benedito suddenly laughs: “Agora eu lembro! O papagaio!”"),
  },
};

const pn7: Lesson = {
  id: "pt-a1-pantanal-7",
  level: "A1",
  cityId: "pt-pantanal",
  number: 7,
  title: t("Olha o jacaré! — Смотри, кайман!", "Olha o jacaré! — Look out, a caiman!"),
  minutes: 8,
  goals: [
    t("Понять, что рассказывают о Пипоке", "Understand what people say about Pipoca"),
    t("Сказать, что кто-то кого-то спас", "Say someone saved someone"),
    t("Вспомнить все слова Пантанала", "Review all the words from the Pantanal"),
  ],
  vocabNote: t(
    "Olha o jacaré! — и «смотри, кайман!», и «осторожно, кайман!» Olha часто значит «осторожно».",
    "Olha o jacaré! means both “Look, a caiman!” and “Watch out, a caiman!” Olha often works as a warning.",
  ),
  vocab: [
    v("ptpn7-1", "Olha o jacaré!", t("Смотри, кайман!", "Look out, a caiman!"),
      t("Зелёный попугай кричит, хлопая крыльями, на носу лодки.", "The green parrot shrieks and flaps on the bow of a boat."),
      p("l7-1")),
    v("ptpn7-2", "Ele avisou todo mundo.", t("Он всех предупредил.", "He warned everyone."),
      t("Музыканты в лодке в испуге оглядываются.", "The musicians in the boat look round in alarm."),
      p("l7-2")),
    v("ptpn7-3", "Ele salvou o Zeca!", t("Он спас Зеку!", "He saved Zeca!"),
      t("Певец группы отпрыгивает от воды, а кайман уплывает.", "The band's singer jumps back from the water as a caiman swims away."),
      p("l7-3")),
    v("ptpn7-4", "Eles foram para Brasília.", t("Они уехали в Бразилиа.", "They've gone to Brasília."),
      t("Карта: стрелка к городу в форме самолёта в самом центре страны.", "A map: an arrow to a plane-shaped city in the very middle of the country."),
      p("l7-4")),
    v("ptpn7-5", "a capital", t("столица", "the capital"),
      t("Маленькая картинка: белые здания необычной формы.", "A little picture: unusual white buildings."),
      p("l7-5")),
    v("ptpn7-6", "Que aventura!", t("Вот это приключение!", "What an adventure!"),
      t("Мурзик в сапожках, с удочкой и рогом машет на прощание.", "Murzik in his boots, with his fishing rod and horn, waves goodbye."),
      p("l7-6")),
    v("ptpn7-7", "Vão com cuidado!", t("Поезжайте осторожно!", "Take care on the way!"),
      t("Сеу Бенедиту машет шляпой у ворот ранчо.", "Seu Benedito waves his hat at the ranch gate."),
      p("l7-7")),
  ],
  dialogue: {
    title: t("Что сказал попугай", "What the parrot said"),
    note: t(
      "Lembro — «вспоминаю». Na beira do rio — «на берегу реки». Herói — «герой».",
      "Lembro means “I remember”. Na beira do rio means “on the riverbank”. Herói means “hero”.",
    ),
    lines: [
      line("benedito", "Agora eu lembro! O papagaio! A banda passou aqui ontem.", t("Теперь вспомнил! Попугай! Группа была здесь вчера.", "Now I remember! The parrot! The band came through here yesterday.")),
      line("bia", "E o Pipoca? O que ele fez?", t("А Пипока? Что он сделал?", "And Pipoca? What did he do?")),
      line("benedito", "O Zeca estava na beira do rio. E tinha um jacaré! O papagaio gritou: Olha o jacaré! Olha o jacaré!", t("Зека стоял на берегу реки. А там был кайман! Попугай закричал: «Смотри, кайман! Смотри, кайман!»", "Zeca was on the riverbank. And there was a caiman! The parrot shouted: Look out, a caiman! Look out, a caiman!")),
      line("murzik", "Ele avisou todo mundo? Ele salvou o Zeca!", t("Он всех предупредил? Он спас Зеку!", "He warned everyone? He saved Zeca!")),
      line("benedito", "Salvou! O Pipoca é um herói. Agora eles estão em Brasília, a capital.", t("Спас! Пипока — герой. Теперь они в Бразилиа, в столице.", "He did! Pipoca's a hero. Now they're in Brasília, the capital.")),
      line("murzik", "Que aventura! Obrigado por tudo, Seu Benedito!", t("Вот это приключение! Спасибо за всё, Сеу Бенедиту!", "What an adventure! Thank you for everything, Seu Benedito!")),
      line("benedito", "Vão com cuidado!", t("Поезжайте осторожно!", "Take care on the way!")),
    ],
    gist: choice("ptpn7-d1", t("Что сделал Пипока в Пантанале?", "What did Pipoca do in the Pantanal?"), [
      [t("Предупредил Зеку о каймане.", "He warned Zeca about a caiman."), true],
      [t("Поймал пиранью.", "He caught a piranha."), false],
      [t("Улетел с синими ара.", "He flew off with the macaws."), false],
    ]),
  },
  grammar: [
    g(
      t("Прошедшее: avisou, salvou, gritou", "The past: avisou, salvou, gritou"),
      [
        t(
          "Ele avisou — «он предупредил», ele salvou — «он спас», ele gritou — «он закричал». У глаголов на -ar «он, она» в прошедшем оканчивается на -ou.",
          "Ele avisou (he warned), ele salvou (he saved), ele gritou (he shouted). In the past, -ar verbs end in -ou for he and she.",
        ),
        t(
          "А «я» — на -ei (помнишь andei?). Eu gritei — «я закричал(а)». Всё подробно — в Форталезе.",
          "For “I” it's -ei (remember andei?): eu gritei — I shouted. More on this in Fortaleza.",
        ),
      ],
      [
        ["O papagaio gritou.", t("Попугай закричал.", "The parrot shouted.")],
        ["Ele salvou o Zeca.", t("Он спас Зеку.", "He saved Zeca.")],
      ],
    ),
  ],
  tasks: [
    listen("ptpn7-t1", t("Аудиоэкзамен. Что рассказывает Сеу Бенедиту?", "Audio exam. What does Seu Benedito tell them?"), "O papagaio gritou: Olha o jacaré! Ele salvou o Zeca. Agora a banda está em Brasília.", [
      [t("Попугай спас Зеку, а группа теперь в Бразилиа.", "The parrot saved Zeca, and the band is now in Brasília."), true],
      [t("Кайман утащил барабан.", "A caiman stole the drum."), false],
      [t("Группа осталась на ранчо.", "The band stayed at the ranch."), false],
    ]),
    choice("ptpn7-t2", t("Как сказать «Вот это приключение!»?", "How do you say “What an adventure!”?"), [
      ["Que aventura!", true],
      ["Que alívio!", false],
      ["Que perigo!", false],
    ], { skill: "words" }),
    build("ptpn7-t3", t("Собери фразу: «Он спас Зеку».", "Build the sentence: “He saved Zeca”."), ["Ele", "salvou", "o", "Zeca."]),
    missing("ptpn7-t4", t("Какой буквы не хватает? («столица»)", "Which letter is missing? (“capital”)"), "capi", "al", "t", ["t", "d", "ch"]),
    speak("ptpn7-t5", "Vão com cuidado!", "Obrigado por tudo! Que aventura!", t("Спасибо за всё! Вот это приключение!", "Thanks for everything! What an adventure!"), {
      help: t("Попрощайся вслух. Можно obrigado или obrigada.", "Say goodbye aloud — obrigado or obrigada."),
    }),
    script("ptpn7-t6", t("Вспомни весь Пантанал. Закончи разговор с Сеу Бенедиту.", "Remember all of the Pantanal. Finish the conversation with Seu Benedito."), [
      { speaker: BENEDITO, text: "Olha ali! Que animal é esse?" },
      { speaker: YOU, answer: "É uma capivara!", options: ["É uma capivara!", "É um capivara!", "Está capivara!"] },
      { speaker: BENEDITO, text: "E o jacaré? Ele é perigoso?" },
      { speaker: YOU, answer: "Um pouco. Mas agora ele está dormindo.", options: ["Um pouco. Mas agora ele está dormindo.", "Ele é dormindo.", "Peguei um peixe!"] },
      { speaker: BENEDITO, text: "Vamos andar a cavalo?" },
      { speaker: YOU, answer: "Vamos! Eu nunca andei a cavalo.", options: ["Vamos! Eu nunca andei a cavalo.", "Não tem ninguém.", "Joga de volta!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-pantanal",
    itemName: t("Фото Пипоки-героя", "Photo of Pipoca the hero"),
    itemNameRu: "Foto do Pipoca herói",
    ru: "Oba! Mais uma foto do Pipoca!",
    en: t("Ура! Ещё одно фото Пипоки!", "Hooray! Another photo of Pipoca!"),
    a11y: t(
      "Фото: зелёный попугай гордо сидит на плече у певца группы, позади река и кайман вдалеке.",
      "A photo: the green parrot sits proudly on the band singer's shoulder, with the river and a distant caiman behind them.",
    ),
    image: p("photo"),
    steps: [
      t("У Сеу Бенедиту есть фото с того дня.", "Seu Benedito has a photo from that day."),
      t("Пипока гордо сидит на плече у Зеки!", "Pipoca is sitting proudly on Zeca's shoulder!"),
      t("«O herói do Pantanal!» — «Герой Пантанала!»", "“O herói do Pantanal!” — “The hero of the Pantanal!”"),
      t("Подпись: «Olha o jacaré!» Фото — в альбом.", "Caption: “Olha o jacaré!” Into the album it goes."),
    ],
    bridge: t("Самолёт летит в самое сердце Бразилии — в её столицу.", "A plane flies to the very heart of Brazil — its capital."),
  },
};

const story: CityStory = {
  home: {
    name: t("Комната на ранчо", "A room at the ranch"),
    nameRu: "O quarto na fazenda",
    image: p("home"),
    a11y: t(
      "Простая деревянная комната в доме на сваях. В окно видны озёра, трава и белые цапли. Посередине чемодан Мурзика.",
      "A simple wooden room in a house on stilts. Through the window: lakes, grass and white egrets. Murzik's suitcase in the middle.",
    ),
  },
  keepsakeId: "photo-pantanal",
  welcomeRu: "Olá, Pantanal!",
  welcomeEn: t("Привет, Пантанал!", "Hello, Pantanal!"),
  welcomeImage: p("arrival"),
  welcomeA11y: t(
    "Деревянный дом на сваях посреди зелёной равнины и озёр. Над водой летят белые цапли, на берегу греется кайман.",
    "A wooden house on stilts in the middle of green plains and lakes. White egrets fly over the water; a caiman suns itself on the bank.",
  ),
  departureImage: p("departure"),
  departureA11y: t("Сеу Бенедиту машет шляпой у ворот ранчо.", "Seu Benedito waves his hat at the ranch gate."),
  finale: [
    {
      image: p("photo"),
      a11y: t("Мурзик вклеивает в альбом фото Пипоки на плече у Зеки.", "Murzik sticks the photo of Pipoca on Zeca's shoulder into the album."),
      lines: [
        { en: t("Седьмая страница альбома: Пипока — герой Пантанала.", "Page seven of the album: Pipoca, hero of the Pantanal.") },
        { ru: "Olha o jacaré!", en: t("Смотри, кайман!", "Look out, a caiman!") },
        { en: t("Половина пути позади.", "Halfway there.") },
      ],
    },
    {
      image: img.greet,
      a11y: t("Мурзик радостно подпрыгивает.", "Murzik jumps for joy."),
      lines: [
        { ru: "Pantanal completo!", en: t("Пантанал пройден!", "The Pantanal complete!") },
        { en: t("7 / 7 уроков", "7 / 7 lessons") },
      ],
    },
    {
      image: p("departure"),
      a11y: t("Сеу Бенедиту машет на прощание.", "Seu Benedito waves goodbye."),
      lines: [
        { ru: "Tchau, Seu Benedito!", en: t("Пока, Сеу Бенедиту!", "Bye, Seu Benedito!") },
        { ru: "Próxima parada: Brasília!", en: t("Следующая остановка: Бразилиа!", "Next stop: Brasília!") },
      ],
    },
    {
      image: p("plane"),
      a11y: t("Самолёт летит над красной землёй и ровными полями.", "A plane flies over red earth and neat fields."),
      lines: [{ ru: "Pantanal → Brasília", en: t("Пантанал → Бразилиа", "The Pantanal → Brasília") }],
    },
    {
      image: pic("pt/brasilia/arrival"),
      a11y: t(
        "Широкая площадь с белыми зданиями необычной формы: две высокие башни и купола, как перевёрнутые чаши.",
        "A wide square with strikingly shaped white buildings: two tall towers and domes like upturned bowls.",
      ),
      lines: [
        { ru: "Olá, Brasília!", en: t("Привет, Бразилиа!", "Hello, Brasília!") },
        { ru: "Que cidade diferente!", en: t("Какой необычный город!", "What an unusual city!") },
      ],
    },
  ],
};

export const ptPantanal = {
  id: "pt-pantanal",
  name: t("Пантанал", "Pantanal"),
  namePt: "Pantanal",
  lessons: [pn1, pn2, pn3, pn4, pn5, pn6, pn7],
  story,
};
