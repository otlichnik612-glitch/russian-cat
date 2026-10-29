import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { PAIRS, YOU, build, choice, fill, g, line, listen, match, missing, script, speak, spell, t, v } from "./make";

/* Ору-Прету · «Дорога» · Старинный город на холмах, гид дона Марта. Как пройти, глагол ir, крутые улочки, числа до 1000, мясная кухня Минаса, лавка камней. Пипока выучил «Siga em frente!». */

const p = (name: string) => pic(`pt/ouropreto/${name}`);
const MARTA = t("Дона Марта", "Dona Marta");

const op1: Lesson = {
  id: "pt-a1-ouropreto-1",
  level: "A1",
  cityId: "pt-ouropreto",
  number: 1,
  title: t("Onde fica? — Где находится?", "Onde fica? — Where is it?"),
  minutes: 7,
  goals: [
    t("Спросить дорогу", "Ask the way"),
    t("Понять: направо, налево, первая улица", "Understand: right, left, the first street"),
    t("Поблагодарить за помощь", "Thank someone for their help"),
  ],
  vocabNote: t(
    "Vire — «поверните». À direita — «направо», à esquerda — «налево».",
    "Vire means “turn”. À direita is “to the right”, à esquerda “to the left”.",
  ),
  vocab: [
    v("ptop1-1", "Onde fica a igreja?", t("Где церковь?", "Where's the church?"),
      t("Мурзик с картой стоит на перекрёстке старых улочек.", "Murzik stands with a map where some old streets cross."),
      p("l1-1")),
    v("ptop1-2", "Fica na praça.", t("Она на площади.", "It's on the square."),
      t("Старинная площадь с фонтаном, а над ней церковь с двумя башнями.", "An old square with a fountain and a two-towered church above it."),
      p("l1-2")),
    v("ptop1-3", "Vire à direita.", t("Поверните направо.", "Turn right."),
      t("Стрелка направо на старой каменной стене.", "An arrow pointing right on an old stone wall."),
      p("l1-3")),
    v("ptop1-4", "Vire à esquerda.", t("Поверните налево.", "Turn left."),
      t("Стрелка налево на старой каменной стене.", "An arrow pointing left on an old stone wall."),
      p("l1-4")),
    v("ptop1-5", "É a primeira rua.", t("Это первая улица.", "It's the first street."),
      t("Пожилая женщина показывает на первый поворот.", "An elderly woman points to the first turning."),
      p("l1-5")),
    v("ptop1-6", "Fica perto do museu.", t("Это рядом с музеем.", "It's near the museum."),
      t("Церковь, а рядом белое здание музея.", "A church with a white museum building next to it."),
      p("l1-6")),
    v("ptop1-7", "Obrigado pela ajuda!", t("Спасибо за помощь!", "Thanks for your help!"),
      t("Мурзик благодарно кланяется пожилой даме.", "Murzik bows gratefully to the elderly lady."),
      p("l1-7")),
  ],
  dialogue: {
    title: t("Дона Марта", "Dona Marta"),
    note: t(
      "Guia — «гид». Conheço — «знаю (место, человека)». Cada pedra — «каждый камень».",
      "Guia means “guide”. Conheço means “I know” (a place or a person). Cada pedra means “every stone”.",
    ),
    lines: [
      line("murzik", "Com licença, senhora. Onde fica a igreja de São Francisco?", t("Простите, сеньора. Где церковь Святого Франциска?", "Excuse me, madam. Where's the church of São Francisco?")),
      line("marta", "Fica na praça. Vire à esquerda e depois à direita.", t("На площади. Поверните налево, а потом направо.", "It's on the square. Turn left and then right.")),
      line("bia", "À esquerda e à direita… É longe?", t("Налево и направо… Это далеко?", "Left and then right… Is it far?")),
      line("marta", "Não. É a primeira rua. Fica perto do museu.", t("Нет. Это первая улица. Рядом с музеем.", "No. It's the first street. Near the museum.")),
      line("murzik", "Obrigado pela ajuda!", t("Спасибо за помощь!", "Thanks for your help!")),
      line("marta", "De nada! Eu sou a Marta, guia da cidade. Eu conheço cada pedra daqui!", t("Не за что! Я Марта, городской гид. Я знаю здесь каждый камень!", "You're welcome! I'm Marta, a town guide. I know every stone here!")),
    ],
    gist: choice("ptop1-d1", t("Где церковь?", "Where's the church?"), [
      [t("На площади, рядом с музеем.", "On the square, near the museum."), true],
      [t("Далеко, за городом.", "Far away, outside town."), false],
      [t("За рекой.", "Across the river."), false],
    ]),
  },
  grammar: [
    g(
      t("В: no, na, nos, nas", "In, on, at: no, na, nos, nas"),
      [
        t(
          "«В» по-португальски — em. С артиклем оно сливается: em + o = no, em + a = na: no museu — «в музее», na praça — «на площади». Во множественном — nos, nas.",
          "“In, on, at” is em. It joins with “the”: em + o = no, em + a = na: no museu (in the museum), na praça (on the square). Plural: nos, nas.",
        ),
        t(
          "У городов артикля обычно нет, поэтому просто em: em Ouro Preto, em Paris. Но no Rio — потому что o Rio.",
          "Most cities take no article, so just em: em Ouro Preto, em Paris. But no Rio — because it's o Rio.",
        ),
      ],
      [
        ["Ele está no museu.", t("Он в музее.", "He's in the museum.")],
        ["Nós moramos na praça.", t("Мы живём на площади.", "We live on the square.")],
      ],
    ),
  ],
  tasks: [
    choice("ptop1-t1", t("Как сказать «на площади»? (a praça)", "How do you say “on the square”? (a praça)"), [
      ["na praça", true],
      ["no praça", false],
      ["em a praça", false],
    ], { skill: "grammar" }),
    listen("ptop1-t2", t("Послушай. Куда поворачивать?", "Listen. Which way should you turn?"), "Vire à direita.", [
      [t("Направо.", "Right."), true],
      [t("Налево.", "Left."), false],
      [t("Прямо.", "Straight on."), false],
    ]),
    match("ptop1-t3", PAIRS, [
      ["à direita", t("направо", "right")],
      ["à esquerda", t("налево", "left")],
      ["a igreja", t("церковь", "the church")],
      ["a praça", t("площадь", "the square")],
    ], { skill: "words" }),
    missing("ptop1-t4", t("Какой буквы не хватает? («налево»)", "Which letter is missing? (“left”)"), "es", "uerda", "q", ["q", "c", "k"]),
    speak("ptop1-t5", "Posso ajudar?", "Sim! Onde fica a igreja?", t("Да! Где церковь?", "Yes! Where's the church?"), {
      help: t("Спроси вслух, где церковь.", "Ask aloud where the church is."),
    }),
    choice("ptop1-t6", t("Как сказать «Я опаздываю!»?", "How do you say “I'm late!”?"), [
      ["Estou atrasado!", true],
      ["Já é tarde!", false],
      ["Corre!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "key",
    itemName: t("Старинный ключ", "Old key"),
    itemNameRu: "Chave antiga",
    ru: "Oba! Uma chave antiga!",
    en: t("Ура! Старинный ключ!", "Hooray! An old key!"),
    a11y: t("На гвоздике у двери висит большой старинный кованый ключ.", "A big old wrought-iron key hangs on a nail by the door."),
    image: p("key"),
    steps: [
      t("Дона Марта сдаёт комнату в своём старом доме.", "Dona Marta rents out a room in her old house."),
      t("Она даёт Мурзику огромный старинный ключ.", "She gives Murzik a huge old key."),
      t("«Essa casa tem duzentos anos!» — «Этому дому двести лет!»", "“Essa casa tem duzentos anos!” — “This house is two hundred years old!”"),
      t("Ключ висит на гвоздике у двери.", "The key hangs on a nail by the door."),
    ],
    bridge: t("Утром дона Марта спрашивает: «Aonde vocês vão hoje?»", "In the morning Dona Marta asks: “Aonde vocês vão hoje?”"),
  },
};

const op2: Lesson = {
  id: "pt-a1-ouropreto-2",
  level: "A1",
  cityId: "pt-ouropreto",
  number: 2,
  title: t("Eu vou, você vai — Я иду, ты идёшь", "Eu vou, você vai — I go, you go"),
  minutes: 7,
  goals: [
    t("Сказать, куда идёшь", "Say where you're going"),
    t("Изменять глагол ir", "Use the verb ir"),
    t("Спросить «Куда?»", "Ask “Where to?”"),
  ],
  vocabNote: t(
    "Aonde? — «куда?», Onde? — «где?». В разговоре бразильцы часто говорят Onde você vai? — и это тоже правильно понимают.",
    "Aonde? means “where to?” and onde? means “where?”. In speech Brazilians often just say Onde você vai? — and that's fine too.",
  ),
  vocab: [
    v("ptop2-1", "Aonde você vai?", t("Куда ты идёшь?", "Where are you going?"),
      t("Дона Марта с корзинкой встречает Мурзика у двери.", "Dona Marta with a basket meets Murzik at the door."),
      p("l2-1")),
    v("ptop2-2", "Eu vou à igreja.", t("Я иду в церковь.", "I'm going to the church."),
      t("Мурзик показывает на церковь на холме.", "Murzik points to a church on the hill."),
      p("l2-2")),
    v("ptop2-3", "Nós vamos ao museu.", t("Мы идём в музей.", "We're going to the museum."),
      t("Мурзик и Биа шагают к белому зданию с колоннами.", "Murzik and Bia walk towards a white building with columns."),
      p("l2-3")),
    v("ptop2-4", "Ela vai para casa.", t("Она идёт домой.", "She's going home."),
      t("Дона Марта с корзинкой поднимается по улице к своему дому.", "Dona Marta climbs the street towards her house with her basket."),
      p("l2-4")),
    v("ptop2-5", "Eles vão ao mercado.", t("Они идут на рынок.", "They're going to the market."),
      t("Двое детей бегут к рыночным прилавкам.", "Two children run towards the market stalls."),
      p("l2-5")),
    v("ptop2-6", "Para onde vamos agora?", t("Куда теперь пойдём?", "Where shall we go now?"),
      t("Мурзик и Биа стоят на развилке с картой.", "Murzik and Bia stand at a fork in the road with a map."),
      p("l2-6")),
    v("ptop2-7", "Já vou!", t("Иду!", "I'm coming!"),
      t("Мурзик выбегает из двери, натягивая сапожок.", "Murzik runs out of the door, pulling on a boot."),
      p("l2-7")),
  ],
  dialogue: {
    title: t("Планы на утро", "Plans for the morning"),
    note: t(
      "Juntos — «вместе».",
      "Juntos means “together”.",
    ),
    lines: [
      line("marta", "Bom dia! Aonde vocês vão hoje?", t("Доброе утро! Куда вы сегодня?", "Good morning! Where are you off to today?")),
      line("bia", "Nós vamos ao museu. E o Murzik vai à igreja.", t("Мы пойдём в музей. А Мурзик — в церковь.", "We're going to the museum. And Murzik's going to the church.")),
      line("murzik", "Eu quero ver os anjos de madeira!", t("Я хочу посмотреть на деревянных ангелов!", "I want to see the wooden angels!")),
      line("marta", "Eu vou ao mercado. Depois eu vou para casa.", t("А я иду на рынок. Потом домой.", "I'm going to the market. Then home.")),
      line("murzik", "E depois? Para onde vamos?", t("А потом? Куда пойдём?", "And then? Where shall we go?")),
      line("marta", "Depois nós vamos juntos. Eu mostro a cidade!", t("Потом пойдём вместе. Я покажу вам город!", "Then we'll all go together. I'll show you the town!")),
      line("bia", "Murzik! Vamos! — Já vou!", t("Мурзик! Пошли! — Иду!", "Murzik! Come on! — I'm coming!")),
    ],
    gist: choice("ptop2-d1", t("Куда идёт дона Марта?", "Where is Dona Marta going?"), [
      [t("На рынок, а потом домой.", "To the market, then home."), true],
      [t("В музей.", "To the museum."), false],
      [t("В церковь.", "To the church."), false],
    ]),
  },
  grammar: [
    g(
      t("Глагол ir — «идти, ехать»", "The verb ir — “to go”"),
      [
        t(
          "Ir — неправильный глагол, его формы надо запомнить: eu vou, você / ele vai, nós vamos, vocês / eles vão. Ты уже знаешь vamos! — «пойдём!».",
          "Ir (to go) is irregular — just learn it: eu vou, você / ele vai, nós vamos, vocês / eles vão. You already know Vamos! — Let's go!",
        ),
        t(
          "«Куда» — a или para, и они сливаются с артиклем: a + o = ao (ao museu), a + a = à (à igreja). Para casa — «домой», без артикля.",
          "“To” a place is a or para, which join with “the”: a + o = ao (ao museu), a + a = à (à igreja). “Home” is just para casa.",
        ),
      ],
      [
        ["Eu vou ao parque.", t("Я иду в парк.", "I'm going to the park.")],
        ["Vocês vão à praia?", t("Вы идёте на пляж?", "Are you going to the beach?")],
      ],
    ),
  ],
  tasks: [
    choice("ptop2-t1", t("Как сказать «Мы идём в музей»?", "How do you say “We're going to the museum”?"), [
      ["Nós vamos ao museu.", true],
      ["Nós vai ao museu.", false],
      ["Nós vamos à museu.", false],
    ], { skill: "grammar" }),
    listen("ptop2-t2", t("Послушай. Куда идёт человек?", "Listen. Where is the person going?"), "Eu vou à igreja.", [
      [t("В церковь.", "To the church."), true],
      [t("На рынок.", "To the market."), false],
      [t("Домой.", "Home."), false],
    ]),
    fill("ptop2-t3", t("Вставь слово: «Они идут на рынок».", "Fill in the word: “They're going to the market”."), "Eles", "ao mercado.", "vão", ["vão", "vai", "vamos"], { skill: "words" }),
    spell("ptop2-t4", t("Собери из букв слово «рынок».", "Spell the word for “market”."), "mercado"),
    speak("ptop2-t5", "Aonde você vai amanhã?", "Amanhã eu vou ao museu.", t("Завтра я иду в музей.", "Tomorrow I'm going to the museum."), {
      help: t("Скажи вслух, куда ты пойдёшь завтра.", "Say aloud where you're going tomorrow."),
    }),
    choice("ptop2-t6", t("Как сказать «Поверните налево»?", "How do you say “Turn left”?"), [
      ["Vire à esquerda.", true],
      ["Vire à direita.", false],
      ["Vire o museu.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "angel",
    itemName: t("Деревянный ангелочек", "Little wooden angel"),
    itemNameRu: "Anjinho de madeira",
    ru: "Oba! Um anjinho de madeira!",
    en: t("Ура! Деревянный ангелочек!", "Hooray! A little wooden angel!"),
    a11y: t("На полке стоит маленький резной ангелочек с золотыми крылышками.", "A small carved angel with golden wings stands on the shelf."),
    image: p("angel"),
    steps: [
      t("В церкви Мурзик долго смотрит на резных ангелов.", "In the church Murzik spends ages looking at the carved angels."),
      t("У выхода резчик продаёт маленьких ангелочков.", "By the door a woodcarver sells little angels."),
      t("«Este é para você!» — «Этот для тебя!»", "“Este é para você!” — “This one's for you!”"),
      t("Ангелочек стоит на полке.", "The angel stands on the shelf."),
    ],
    bridge: t("Днём дона Марта ведёт их по городу. Вверх — вниз, вверх — вниз…", "In the afternoon Dona Marta takes them round the town. Up and down, up and down…"),
  },
};

const op3: Lesson = {
  id: "pt-a1-ouropreto-3",
  level: "A1",
  cityId: "pt-ouropreto",
  number: 3,
  title: t("Sobe e desce — Вверх и вниз", "Sobe e desce — Up and down"),
  minutes: 7,
  goals: [
    t("Понять указания: поднимись, спустись", "Understand directions: go up, go down"),
    t("Сказать, что устал(а)", "Say you're tired"),
    t("Подбодрить: почти пришли!", "Encourage someone: almost there!"),
  ],
  vocabNote: t(
    "Ladeira — «крутая улица в гору». В Ору-Прету почти все улицы такие!",
    "A ladeira is a steep street. In Ouro Preto almost every street is one!",
  ),
  vocab: [
    v("ptop3-1", "Que ladeira!", t("Какой крутой подъём!", "What a steep street!"),
      t("Мурзик смотрит снизу на очень крутую мощёную улицу.", "Murzik looks up at a very steep cobbled street."),
      p("l3-1")),
    v("ptop3-2", "Sobe a rua.", t("Поднимитесь по улице.", "Go up the street."),
      t("Стрелка вверх по крутой улице.", "An arrow pointing up a steep street."),
      p("l3-2")),
    v("ptop3-3", "Desce a escada.", t("Спуститесь по лестнице.", "Go down the steps."),
      t("Старая каменная лестница вниз.", "Old stone steps leading down."),
      p("l3-3")),
    v("ptop3-4", "Estou morto de cansaço.", t("Сил больше нет!", "I'm dead tired."),
      t("Мурзик лежит на ступеньках, высунув язык.", "Murzik lies on the steps with his tongue hanging out."),
      p("l3-4")),
    v("ptop3-5", "Vamos parar um pouco?", t("Давай немного передохнём?", "Shall we stop for a bit?"),
      t("Биа садится на каменную скамейку.", "Bia sits down on a stone bench."),
      p("l3-5")),
    v("ptop3-6", "Falta pouco!", t("Почти пришли!", "Almost there!"),
      t("Дона Марта бодро машет сверху.", "Dona Marta waves cheerfully from the top."),
      p("l3-6")),
    v("ptop3-7", "Que vista!", t("Какой вид!", "What a view!"),
      t("С вершины холма видны крыши, церкви и горы.", "From the top of the hill: rooftops, churches and mountains."),
      p("l3-7")),
  ],
  dialogue: {
    title: t("Прогулка по холмам", "A walk over the hills"),
    note: t(
      "Morto de cansaço — буквально «мёртвый от усталости». Lá de cima — «оттуда, сверху».",
      "Morto de cansaço literally means “dead from tiredness”. Lá de cima means “from up there”.",
    ),
    lines: [
      line("marta", "Agora sobe a rua. E depois desce a escada.", t("Теперь поднимитесь по улице. А потом спуститесь по лестнице.", "Now go up the street. And then down the steps.")),
      line("murzik", "Sobe, desce, sobe, desce… Que ladeira!", t("Вверх, вниз, вверх, вниз… Какой крутой подъём!", "Up, down, up, down… What a steep street!")),
      line("bia", "Estou morta de cansaço. Vamos parar um pouco?", t("Я ужасно устала. Давай передохнём?", "I'm dead tired. Shall we stop for a bit?")),
      line("marta", "Coragem! Falta pouco!", t("Смелее! Почти пришли!", "Come on! Almost there!")),
      line("murzik", "Ufa! Chegamos!", t("Уф! Пришли!", "Phew! We made it!")),
      line("bia", "Nossa! Que vista! Olha as igrejas daqui de cima!", t("Ого! Какой вид! Смотри, церкви сверху!", "Wow! What a view! Look at the churches from up here!")),
    ],
    gist: choice("ptop3-d1", t("Почему Биа хочет остановиться?", "Why does Bia want to stop?"), [
      [t("Она очень устала.", "She's very tired."), true],
      [t("Она хочет есть.", "She's hungry."), false],
      [t("Она заблудилась.", "She's lost."), false],
    ]),
  },
  grammar: [
    g(
      t("Указания: sobe, desce, vire", "Directions: sobe, desce, vire"),
      [
        t(
          "Чтобы сказать «поднимитесь, спуститесь, поверните», бразильцы чаще всего используют такие формы: sobe, desce, vira — в разговоре; suba, desça, vire — вежливее. Обе понятны.",
          "To give directions, Brazilians use short command forms: sobe, desce, vira in relaxed speech, or suba, desça, vire when being more polite. Both are fine.",
        ),
        t(
          "Morto / morta de cansaço — меняется по роду: Мурзик morto, Биа morta.",
          "Morto / morta de cansaço agrees with the speaker: Murzik says morto, Bia says morta.",
        ),
      ],
      [
        ["Sobe a ladeira e vira à direita.", t("Поднимитесь в гору и поверните направо.", "Go up the hill and turn right.")],
        ["Estou morta de cansaço.", t("Я ужасно устала.", "I'm dead tired. (woman)")],
      ],
    ),
  ],
  tasks: [
    choice("ptop3-t1", t("Биа очень устала. Что она говорит?", "Bia is exhausted. What does she say?"), [
      ["Estou morta de cansaço.", true],
      ["Estou morto de cansaço.", false],
      ["Sou morta de cansaço.", false],
    ], { skill: "grammar" }),
    listen("ptop3-t2", t("Послушай. Куда идти?", "Listen. Which way should you go?"), "Desce a escada.", [
      [t("Вниз по лестнице.", "Down the steps."), true],
      [t("Вверх по улице.", "Up the street."), false],
      [t("Налево.", "Left."), false],
    ]),
    match("ptop3-t3", PAIRS, [
      ["Sobe.", t("Поднимитесь.", "Go up.")],
      ["Desce.", t("Спуститесь.", "Go down.")],
      ["Falta pouco!", t("Почти пришли!", "Almost there!")],
      ["Que vista!", t("Какой вид!", "What a view!")],
    ], { skill: "words" }),
    missing("ptop3-t4", t("Какой буквы не хватает? («лестница»)", "Which letter is missing? (“steps”)"), "esc", "da", "a", ["a", "o", "e"]),
    speak("ptop3-t5", "Vamos subir mais?", "Vamos parar um pouco? Estou morto de cansaço!", t("Давай передохнём? Сил больше нет!", "Shall we stop for a bit? I'm dead tired!"), {
      help: t("Попроси вслух передохнуть. Женщина скажет morta.", "Ask aloud for a rest. A woman says morta."),
    }),
    choice("ptop3-t6", t("Как спросить «Куда ты идёшь?»", "How do you ask “Where are you going?”"), [
      ["Aonde você vai?", true],
      ["Onde você é?", false],
      ["Que vista?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "stone",
    itemName: t("Камешек с вершины", "Stone from the hilltop"),
    itemNameRu: "Pedrinha",
    ru: "Oba! Uma pedrinha!",
    en: t("Ура! Камешек!", "Hooray! A little stone!"),
    a11y: t("На подоконнике лежит гладкий тёмный камешек с золотистыми искорками.", "A smooth dark stone with golden flecks lies on the windowsill."),
    image: p("stone"),
    steps: [
      t("На вершине холма Мурзик находит камешек.", "At the top of the hill Murzik finds a little stone."),
      t("В нём блестят золотистые искорки.", "Golden flecks sparkle in it."),
      t("«Será que é ouro?» — «Неужели золото?»", "“Será que é ouro?” — “Could it be gold?”"),
      t("Камешек лежит на подоконнике.", "The stone lies on the windowsill."),
    ],
    bridge: t("Вечером дона Марта рассказывает историю города. Ему больше трёхсот лет!", "In the evening Dona Marta tells them the town's story. It's more than three hundred years old!"),
  },
};

const op4: Lesson = {
  id: "pt-a1-ouropreto-4",
  level: "A1",
  cityId: "pt-ouropreto",
  number: 4,
  title: t("Trezentos anos — Триста лет", "Trezentos anos — Three hundred years"),
  minutes: 7,
  goals: [
    t("Считать сотнями до тысячи", "Count in hundreds to a thousand"),
    t("Сказать, сколько лет зданию", "Say how old a building is"),
    t("Рассказать о прошлом: antigamente", "Talk about the old days: antigamente"),
  ],
  vocabNote: t(
    "Сотни в португальском, в отличие от русского, меняются по роду: duzentos anos, но duzentas pessoas.",
    "Hundreds agree with the noun: duzentos anos (two hundred years), but duzentas pessoas (two hundred people).",
  ),
  vocab: [
    v("ptop4-1", "Esta igreja é muito antiga.", t("Эта церковь очень старая.", "This church is very old."),
      t("Старая церковь с потемневшими от времени камнями.", "An old church with stones darkened by time."),
      p("l4-1")),
    v("ptop4-2", "Ela tem trezentos anos.", t("Ей триста лет.", "It's three hundred years old."),
      t("На стене церкви высечены старинные цифры.", "Old numbers carved into the church wall."),
      p("l4-2")),
    v("ptop4-3", "duzentos, trezentos, quatrocentos", t("двести, триста, четыреста", "two hundred, three hundred, four hundred"),
      t("Три мешочка с монетами: 200, 300, 400.", "Three little bags of coins: 200, 300, 400."),
      p("l4-3")),
    v("ptop4-4", "quinhentos, mil", t("пятьсот, тысяча", "five hundred, a thousand"),
      t("Огромная гора монет с табличкой 1000.", "A huge heap of coins with a 1000 sign."),
      p("l4-4")),
    v("ptop4-5", "o ouro", t("золото", "gold"),
      t("Золотые самородки в старом лотке для промывки.", "Gold nuggets in an old prospector's pan."),
      p("l4-5")),
    v("ptop4-6", "Antigamente aqui tinha ouro.", t("Раньше здесь было золото.", "In the old days there was gold here."),
      t("Старинная картинка: люди моют золото в реке.", "An old picture: people panning for gold in a river."),
      p("l4-6")),
    v("ptop4-7", "Que história!", t("Вот это история!", "What a story!"),
      t("Мурзик слушает дону Марту, открыв рот.", "Murzik listens to Dona Marta, open-mouthed."),
      p("l4-7")),
  ],
  dialogue: {
    title: t("История Ору-Прету", "The story of Ouro Preto"),
    note: t(
      "Tinha — «было» (о прошлом). Rica — «богатая». Antigamente — «раньше, в старину».",
      "Tinha means “there was” (in the past). Rica means “rich”. Antigamente means “in the old days”.",
    ),
    lines: [
      line("marta", "Esta igreja é muito antiga. Ela tem trezentos anos.", t("Эта церковь очень старая. Ей триста лет.", "This church is very old. It's three hundred years old.")),
      line("murzik", "Trezentos? E a cidade?", t("Триста? А городу?", "Three hundred? And the town?")),
      line("marta", "A cidade tem mais de trezentos anos. Antigamente aqui tinha muito ouro.", t("Городу больше трёхсот лет. Раньше здесь было много золота.", "The town is more than three hundred years old. In the old days there was lots of gold here.")),
      line("bia", "Por isso é Ouro Preto!", t("Поэтому он и называется Ору-Прету!", "That's why it's called Ouro Preto!")),
      line("marta", "Isso! A cidade era muito rica. Tinha mil… dez mil pessoas!", t("Точно! Город был очень богатым. Тут жила тысяча… десять тысяч человек!", "Exactly! The town was very rich. There were a thousand… ten thousand people!")),
      line("murzik", "Que história!", t("Вот это история!", "What a story!")),
    ],
    gist: choice("ptop4-d1", t("Сколько лет церкви?", "How old is the church?"), [
      [t("Триста.", "Three hundred."), true],
      [t("Сто.", "A hundred."), false],
      [t("Тысяча.", "A thousand."), false],
    ]),
  },
  grammar: [
    g(
      t("Сотни и тысяча", "Hundreds and a thousand"),
      [
        t(
          "100 — cem, но 101 — cento e um. Дальше: duzentos (200), trezentos (300), quatrocentos (400), quinhentos (500), seiscentos, setecentos, oitocentos, novecentos, mil (1000).",
          "100 is cem, but 101 is cento e um. Then: duzentos (200), trezentos (300), quatrocentos (400), quinhentos (500), seiscentos, setecentos, oitocentos, novecentos, mil (1000).",
        ),
        t(
          "Между частями числа ставят e: trezentos e cinquenta — 350. Mil не меняется: mil, dois mil.",
          "Join the parts with e: trezentos e cinquenta — 350. Mil doesn't change: mil, dois mil (two thousand).",
        ),
      ],
      [
        ["trezentos e cinquenta reais", t("триста пятьдесят реалов", "three hundred and fifty reais")],
        ["dois mil anos", t("две тысячи лет", "two thousand years")],
      ],
    ),
  ],
  tasks: [
    choice("ptop4-t1", t("Как сказать «двести человек»? (a pessoa)", "How do you say “two hundred people”? (a pessoa)"), [
      ["duzentas pessoas", true],
      ["duzentos pessoas", false],
      ["dois cem pessoas", false],
    ], { skill: "grammar" }),
    listen("ptop4-t2", t("Послушай. Сколько лет?", "Listen. How many years?"), "Ela tem quinhentos anos.", [
      ["500", true],
      ["50", false],
      ["1000", false],
    ]),
    match("ptop4-t3", PAIRS, [
      ["cem", "100"],
      ["trezentos", "300"],
      ["quinhentos", "500"],
      ["mil", "1000"],
    ], { skill: "words" }),
    spell("ptop4-t4", t("Собери из букв слово «золото».", "Spell the word for “gold”."), "ouro"),
    speak("ptop4-t5", "Quantos anos tem a sua cidade?", "A minha cidade tem trezentos anos.", t("Моему городу триста лет. (Назови свой город.)", "My city is three hundred years old. (Talk about your own city.)"), {
      help: t("Скажи вслух, сколько примерно лет твоему городу.", "Say roughly how old your city is."),
    }),
    choice("ptop4-t6", t("Как сказать «Почти пришли!»?", "How do you say “Almost there!”?"), [
      ["Falta pouco!", true],
      ["Que vista!", false],
      ["Sobe a rua!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bell",
    itemName: t("Маленький колокольчик", "Little bell"),
    itemNameRu: "Sininho",
    ru: "Oba! Um sininho!",
    en: t("Ура! Колокольчик!", "Hooray! A little bell!"),
    a11y: t("На ленточке у окна висит маленький медный колокольчик.", "A small brass bell hangs on a ribbon by the window."),
    image: p("bell"),
    steps: [
      t("В городе звонят колокола всех церквей.", "Bells ring out from all the churches in town."),
      t("Дона Марта дарит Мурзику маленький колокольчик.", "Dona Marta gives Murzik a little bell."),
      t("«Para lembrar dos sinos de Ouro Preto!» — «На память о колоколах Ору-Прету!»", "“Para lembrar dos sinos de Ouro Preto!” — “To remember the bells of Ouro Preto!”"),
      t("Колокольчик висит у окна. Динь!", "The bell hangs by the window. Ding!"),
    ],
    bridge: t("Вечером дона Марта ведёт их в ресторан минасской кухни.", "In the evening Dona Marta takes them to a Minas Gerais restaurant."),
  },
};

const op5: Lesson = {
  id: "pt-a1-ouropreto-5",
  level: "A1",
  cityId: "pt-ouropreto",
  number: 5,
  title: t("No restaurante — В ресторане", "No restaurante — At the restaurant"),
  minutes: 7,
  goals: [
    t("Попросить меню", "Ask for the menu"),
    t("Спросить, что посоветуют", "Ask for a recommendation"),
    t("Заказать: Eu vou querer…", "Order: Eu vou querer…"),
  ],
  vocabNote: t(
    "Comida mineira — кухня штата Минас-Жерайс: сытная, домашняя, её готовят в глиняных и каменных горшках. Doce de leite — варёная сгущёнка, главный десерт.",
    "Comida mineira — the food of Minas Gerais — is hearty home cooking, often made in clay or stone pots. Doce de leite (milk caramel) is the classic dessert.",
  ),
  vocab: [
    v("ptop5-1", "O cardápio, por favor.", t("Меню, пожалуйста.", "The menu, please."),
      t("Мурзик протягивает лапу к официанту.", "Murzik reaches out a paw to the waiter."),
      p("l5-1")),
    v("ptop5-2", "O que você recomenda?", t("Что вы посоветуете?", "What do you recommend?"),
      t("Мурзик в задумчивости смотрит в меню.", "Murzik studies the menu, puzzled."),
      p("l5-2")),
    v("ptop5-3", "Eu vou querer o frango.", t("Я буду курицу.", "I'll have the chicken."),
      t("Мурзик показывает на картинку с курицей в меню.", "Murzik points at a picture of chicken on the menu."),
      p("l5-3")),
    v("ptop5-4", "a panela de pedra", t("каменный горшок", "the stone pot"),
      t("Горячий каменный горшок с едой на деревянном столе.", "A hot stone pot of food on a wooden table."),
      p("l5-4")),
    v("ptop5-5", "Está delicioso!", t("Очень вкусно!", "It's delicious!"),
      t("Мурзик закрыл глаза от удовольствия.", "Murzik closes his eyes in delight."),
      p("l5-5")),
    v("ptop5-6", "E de sobremesa?", t("А на десерт?", "And for dessert?"),
      t("Официант с подносом сладостей.", "The waiter with a tray of desserts."),
      p("l5-6")),
    v("ptop5-7", "doce de leite com queijo", t("варёная сгущёнка с сыром", "milk caramel with cheese"),
      t("Тарелочка с карамелью и ломтиком белого сыра.", "A little plate of caramel and a slice of white cheese."),
      p("l5-7")),
  ],
  dialogue: {
    title: t("Ужин по-минасски", "A Minas Gerais dinner"),
    note: t(
      "Feijão tropeiro — фасоль с мукой из маниоки и шкварками. Quiabo — бамия.",
      "Feijão tropeiro is beans with cassava flour and crackling. Quiabo is okra.",
    ),
    lines: [
      line("murzik", "Boa noite! O cardápio, por favor.", t("Добрый вечер! Меню, пожалуйста.", "Good evening! The menu, please.")),
      line("waiter", "Aqui está. Hoje tem frango com quiabo e feijão tropeiro.", t("Вот, пожалуйста. Сегодня курица с бамией и фасоль «тропейру».", "Here you are. Today there's chicken with okra and feijão tropeiro.")),
      line("murzik", "O que você recomenda?", t("Что вы посоветуете?", "What do you recommend?")),
      line("waiter", "O frango! Ele vem na panela de pedra.", t("Курицу! Её подают в каменном горшке.", "The chicken! It comes in a stone pot.")),
      line("murzik", "Então eu vou querer o frango.", t("Тогда я буду курицу.", "Then I'll have the chicken.")),
      line("bia", "Hmm, está delicioso! E de sobremesa?", t("М-м, очень вкусно! А на десерт?", "Mmm, it's delicious! And for dessert?")),
      line("marta", "Doce de leite com queijo, claro! É de Minas!", t("Сгущёнка с сыром, конечно! Это по-минасски!", "Milk caramel with cheese, of course! It's a Minas thing!")),
    ],
    gist: choice("ptop5-d1", t("Что заказывает Мурзик?", "What does Murzik order?"), [
      [t("Курицу в каменном горшке.", "Chicken in a stone pot."), true],
      [t("Рыбу.", "Fish."), false],
      [t("Только десерт.", "Just dessert."), false],
    ]),
  },
  grammar: [
    g(
      t("Eu vou querer… — «я буду…»", "Eu vou querer… — “I'll have…”"),
      [
        t(
          "В ресторане бразильцы заказывают так: Eu vou querer o frango — «я буду курицу», буквально «я собираюсь захотеть». Ещё можно: Eu queria… (Парати) и Para mim… — «мне…».",
          "In restaurants Brazilians often order with Eu vou querer… — literally “I'm going to want…”: Eu vou querer o frango (I'll have the chicken). You can also use Eu queria… (from Paraty) or Para mim… (For me…).",
        ),
        t(
          "O que você recomenda? — «Что посоветуете?» Recomendar — обычный глагол на -ar.",
          "O que você recomenda? — What do you recommend? Recomendar is a regular -ar verb.",
        ),
      ],
      [
        ["Eu vou querer um suco.", t("Я буду сок.", "I'll have a juice.")],
        ["Para mim, o peixe.", t("Мне рыбу.", "The fish for me.")],
      ],
    ),
  ],
  tasks: [
    choice("ptop5-t1", t("Как заказать: «Я буду рыбу»?", "How do you order: “I'll have the fish”?"), [
      ["Eu vou querer o peixe.", true],
      ["Eu vou o peixe.", false],
      ["Eu sou o peixe.", false],
    ], { skill: "grammar" }),
    listen("ptop5-t2", t("Послушай. Что спрашивает человек?", "Listen. What is the person asking?"), "O que você recomenda?", [
      [t("Что посоветуете?", "What do you recommend?"), true],
      [t("Сколько стоит?", "How much is it?"), false],
      [t("Где меню?", "Where's the menu?"), false],
    ]),
    match("ptop5-t3", PAIRS, [
      ["o cardápio", t("меню", "the menu")],
      ["a sobremesa", t("десерт", "dessert")],
      ["o frango", t("курица", "chicken")],
      ["delicioso", t("очень вкусный", "delicious")],
    ], { skill: "words" }),
    missing("ptop5-t4", t("Какой буквы не хватает? («меню»)", "Which letter is missing? (“menu”)"), "card", "pio", "á", ["á", "a", "ã"]),
    speak("ptop5-t5", "Boa noite! O que você vai querer?", "Eu vou querer o frango, por favor.", t("Я буду курицу, пожалуйста.", "I'll have the chicken, please."), {
      help: t("Закажи вслух любое блюдо.", "Order any dish aloud."),
    }),
    choice("ptop5-t6", t("Как сказать «Этой церкви триста лет»?", "How do you say “This church is three hundred years old”?"), [
      ["Esta igreja tem trezentos anos.", true],
      ["Esta igreja é trezentos anos.", false],
      ["Esta igreja tem três cem anos.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "pot",
    itemName: t("Каменный горшочек", "Little stone pot"),
    itemNameRu: "Panelinha de pedra",
    ru: "Oba! Uma panelinha de pedra!",
    en: t("Ура! Каменный горшочек!", "Hooray! A little stone pot!"),
    a11y: t("На полке стоит маленький серый горшочек из мыльного камня с крышкой.", "A small grey soapstone pot with a lid stands on the shelf."),
    image: p("pot"),
    steps: [
      t("Повар выходит из кухни с маленьким горшочком.", "The cook comes out of the kitchen with a little pot."),
      t("«De pedra-sabão, de Minas!» — «Из мыльного камня, минасский!»", "“De pedra-sabão, de Minas!” — “Soapstone, from Minas!”"),
      t("Он дарит его Мурзику.", "He gives it to Murzik."),
      t("Горшочек стоит на полке.", "The pot stands on the shelf."),
    ],
    bridge: t("Утром Биа вспоминает: в Ору-Прету продают красивые камни. Может, ещё подарок для бабушки?", "In the morning Bia remembers that Ouro Preto sells beautiful stones. Maybe another present for Grandma?"),
  },
};

const op6: Lesson = {
  id: "pt-a1-ouropreto-6",
  level: "A1",
  cityId: "pt-ouropreto",
  number: 6,
  title: t("Na loja — В лавке", "Na loja — In the shop"),
  minutes: 7,
  goals: [
    t("Попросить посмотреть товар", "Ask to see something"),
    t("Поторговаться", "Haggle a little"),
    t("Попросить завернуть подарок", "Ask for something to be gift-wrapped"),
  ],
  vocabNote: t(
    "Faz um desconto? — «Сделаете скидку?» В маленьких лавках так спросить можно, в больших магазинах обычно нет.",
    "Faz um desconto? means “Can you do a discount?” It's fine to ask in small shops and markets, less so in big stores.",
  ),
  vocab: [
    v("ptop6-1", "Posso ver aquela pedra?", t("Можно посмотреть вон тот камень?", "Can I see that stone?"),
      t("Мурзик показывает на витрину с разноцветными камнями.", "Murzik points to a display of colourful stones."),
      p("l6-1")),
    v("ptop6-2", "Qual é mais bonita?", t("Какой красивее?", "Which one is prettier?"),
      t("Биа держит два камня: золотистый и розовый.", "Bia holds two stones: a golden one and a pink one."),
      p("l6-2")),
    v("ptop6-3", "Esta é mais barata.", t("Этот дешевле.", "This one's cheaper."),
      t("Продавец показывает маленький розовый камень.", "The seller shows them a small pink stone."),
      p("l6-3")),
    v("ptop6-4", "Faz um desconto?", t("Сделаете скидку?", "Can you do a discount?"),
      t("Мурзик хитро улыбается продавцу.", "Murzik gives the seller a sly smile."),
      p("l6-4")),
    v("ptop6-5", "Eu levo esta.", t("Я беру этот.", "I'll take this one."),
      t("Мурзик кладёт на прилавок золотистый камень.", "Murzik puts the golden stone on the counter."),
      p("l6-5")),
    v("ptop6-6", "É para presente.", t("Это в подарок.", "It's a present."),
      t("Мурзик показывает фото доны Лусии.", "Murzik shows a photo of Dona Lúcia."),
      p("l6-6")),
    v("ptop6-7", "Pode embrulhar?", t("Можете завернуть?", "Could you wrap it?"),
      t("Продавец заворачивает коробочку в бумагу с бантом.", "The seller wraps a little box in paper with a bow."),
      p("l6-7")),
  ],
  dialogue: {
    title: t("Лавка самоцветов", "The gemstone shop"),
    note: t(
      "Topázio — «топаз», знаменитый камень Минаса. Para você — «для вас»: продавец сбавляет цену.",
      "Topázio is topaz, the famous stone of Minas. Para você here means “for you” — the seller is giving a special price.",
    ),
    lines: [
      line("murzik", "Bom dia! Posso ver aquela pedra?", t("Доброе утро! Можно посмотреть вон тот камень?", "Good morning! Can I see that stone?")),
      line("seller", "Claro! É um topázio. E esta é uma turmalina.", t("Конечно! Это топаз. А это турмалин.", "Of course! It's a topaz. And this one's a tourmaline.")),
      line("bia", "Qual é mais bonita, Murzik?", t("Какой красивее, Мурзик?", "Which one's prettier, Murzik?")),
      line("murzik", "As duas! Quanto custa o topázio?", t("Оба! Сколько стоит топаз?", "Both! How much is the topaz?")),
      line("seller", "Cem reais. A turmalina é mais barata: oitenta.", t("Сто реалов. Турмалин дешевле: восемьдесят.", "A hundred reais. The tourmaline's cheaper: eighty.")),
      line("murzik", "Faz um desconto? É para presente.", t("Сделаете скидку? Это в подарок.", "Can you do a discount? It's a present.")),
      line("seller", "Para você, noventa o topázio.", t("Для вас — девяносто за топаз.", "For you, ninety for the topaz.")),
      line("murzik", "Eu levo! Pode embrulhar?", t("Беру! Можете завернуть?", "I'll take it! Could you wrap it?")),
    ],
    gist: choice("ptop6-d1", t("За сколько Мурзик покупает топаз?", "How much does Murzik pay for the topaz?"), [
      [t("За девяносто реалов.", "Ninety reais."), true],
      [t("За сто реалов.", "A hundred reais."), false],
      [t("За восемьдесят реалов.", "Eighty reais."), false],
    ]),
  },
  grammar: [
    g(
      t("Levar — «брать (покупать)»", "Levar — “to take” when buying"),
      [
        t(
          "В магазине «беру» — eu levo, буквально «уношу»: Eu levo esta. Помнишь Eu vou levar dois в булочной Сан-Паулу? Это то же слово.",
          "When you buy something, “I'll take it” is eu levo — literally “I'll carry it away”: Eu levo esta. Remember Eu vou levar dois at the São Paulo bakery? Same verb.",
        ),
        t(
          "Mais barata, mais bonita — «дешевле, красивее»: mais + прилагательное, как в Бразилиа.",
          "Mais barata, mais bonita — cheaper, prettier: mais + adjective, as you saw in Brasília.",
        ),
      ],
      [
        ["Eu levo os dois.", t("Беру оба.", "I'll take both.")],
        ["Esta bolsa é mais cara.", t("Эта сумка дороже.", "This bag is more expensive.")],
      ],
    ),
  ],
  tasks: [
    choice("ptop6-t1", t("Как сказать «Я беру этот»? (a pedra)", "How do you say “I'll take this one”? (a pedra)"), [
      ["Eu levo esta.", true],
      ["Eu levo este.", false],
      ["Eu sou esta.", false],
    ], { skill: "grammar" }),
    listen("ptop6-t2", t("Послушай. О чём просит покупатель?", "Listen. What is the customer asking for?"), "Pode embrulhar? É para presente.", [
      [t("Завернуть подарок.", "To gift-wrap it."), true],
      [t("Скидку.", "A discount."), false],
      [t("Показать другой камень.", "To see another stone."), false],
    ]),
    match("ptop6-t3", PAIRS, [
      ["o desconto", t("скидка", "the discount")],
      ["o presente", t("подарок", "the present")],
      ["embrulhar", t("заворачивать", "to wrap")],
      ["a pedra", t("камень", "the stone")],
    ], { skill: "words" }),
    spell("ptop6-t4", t("Собери из букв слово «скидка».", "Spell the word for “discount”."), "desconto"),
    speak("ptop6-t5", "São cem reais.", "Faz um desconto? É para presente.", t("Сделаете скидку? Это в подарок.", "Can you do a discount? It's a present."), {
      help: t("Попроси вслух скидку.", "Ask aloud for a discount."),
    }),
    choice("ptop6-t6", t("Как попросить меню?", "How do you ask for the menu?"), [
      ["O cardápio, por favor.", true],
      ["A conta, por favor.", false],
      ["O que você recomenda?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "topaz",
    itemName: t("Топаз для доны Лусии", "Topaz for Dona Lúcia"),
    itemNameRu: "Topázio",
    ru: "Oba! Um topázio!",
    en: t("Ура! Топаз!", "Hooray! A topaz!"),
    a11y: t("В маленькой открытой коробочке на бархате сверкает золотистый топаз.", "A golden topaz sparkles on velvet in a small open box."),
    image: p("topaz"),
    steps: [
      t("Продавец заворачивает топаз в коробочку.", "The seller puts the topaz in a little box."),
      t("«Para a aniversariante!» — «Для именинницы!»", "“Para a aniversariante!” — “For the birthday girl!”"),
      t("Теперь у доны Лусии будет два подарка: шаль и камень.", "Now Dona Lúcia will have two presents: the shawl and the stone."),
      t("Коробочка прячется на дно чемодана.", "The box is hidden at the bottom of the suitcase."),
    ],
    bridge: t("Дона Марта машет им с площади: «Murzik! Venha! O papagaio!»", "Dona Marta waves from the square: “Murzik! Venha! O papagaio!”"),
  },
};

const op7: Lesson = {
  id: "pt-a1-ouropreto-7",
  level: "A1",
  cityId: "pt-ouropreto",
  number: 7,
  title: t("Siga em frente! — Идите прямо!", "Siga em frente! — Go straight on!"),
  minutes: 8,
  goals: [
    t("Понять, что рассказывают о Пипоке", "Understand what people say about Pipoca"),
    t("Сказать «вам понравится»", "Say “you'll love it”"),
    t("Вспомнить все слова Ору-Прету", "Review all the words from Ouro Preto"),
  ],
  vocabNote: t(
    "Siga em frente! — «Идите прямо!» Siga — «следуйте». Voltem logo! — «Возвращайтесь скорее!» (вам обоим).",
    "Siga em frente! means “Go straight on!” Voltem logo! means “Come back soon!” (to more than one person).",
  ),
  vocab: [
    v("ptop7-1", "Siga em frente!", t("Идите прямо!", "Go straight on!"),
      t("Зелёный попугай сидит на старом указателе на площади и машет крылом вперёд.", "The green parrot sits on an old signpost in the square, pointing ahead with his wing."),
      p("l7-1")),
    v("ptop7-2", "Ele ensinou o caminho.", t("Он показывал дорогу.", "He showed people the way."),
      t("Туристы с картами слушают попугая.", "Tourists with maps listen to the parrot."),
      p("l7-2")),
    v("ptop7-3", "os turistas", t("туристы", "the tourists"),
      t("Группа туристов с фотоаппаратами на площади.", "A group of tourists with cameras in the square."),
      p("l7-3")),
    v("ptop7-4", "Eles foram para Salvador.", t("Они уехали в Салвадор.", "They've gone to Salvador."),
      t("Карта: стрелка на север, к городу у моря.", "A map: an arrow north, to a city by the sea."),
      p("l7-4")),
    v("ptop7-5", "a Bahia", t("Баия (штат)", "Bahia (the state)"),
      t("Маленькая картинка: разноцветные дома на холме над морем.", "A little picture: colourful houses on a hill above the sea."),
      p("l7-5")),
    v("ptop7-6", "Vocês vão gostar!", t("Вам понравится!", "You'll love it!"),
      t("Дона Марта мечтательно улыбается.", "Dona Marta smiles dreamily."),
      p("l7-6")),
    v("ptop7-7", "Voltem logo!", t("Возвращайтесь скорее!", "Come back soon!"),
      t("Дона Марта машет у двери старого дома.", "Dona Marta waves at the door of her old house."),
      p("l7-7")),
  ],
  dialogue: {
    title: t("Что сказал попугай", "What the parrot said"),
    note: t(
      "Venha! — «Иди сюда!». Perdidos — «заблудившиеся». Fez sucesso — «имел успех, все были в восторге».",
      "Venha! means “Come here!”. Perdidos means “lost” (plural). Fez sucesso means “was a big hit”.",
    ),
    lines: [
      line("marta", "Murzik! Venha! O papagaio! Ele estava aqui na praça, ontem.", t("Мурзик! Иди сюда! Попугай! Он был здесь, на площади, вчера.", "Murzik! Come here! The parrot! He was here in the square yesterday.")),
      line("murzik", "O Pipoca! O que ele fez?", t("Пипока! Что он делал?", "Pipoca! What did he do?")),
      line("marta", "Ele ficou na placa e ensinou o caminho para os turistas perdidos: Siga em frente! Siga em frente!", t("Он сидел на указателе и показывал дорогу заблудившимся туристам: «Идите прямо! Идите прямо!»", "He sat on the signpost and showed lost tourists the way: Go straight on! Go straight on!")),
      line("bia", "Ha! O Pipoca é guia agora!", t("Ха! Пипока теперь гид!", "Ha! Pipoca's a tour guide now!")),
      line("marta", "Ele fez sucesso! E a banda foi para Salvador, na Bahia. Vocês vão gostar!", t("Он имел огромный успех! А группа уехала в Салвадор, в Баию. Вам понравится!", "He was a big hit! And the band went to Salvador, in Bahia. You'll love it!")),
      line("murzik", "Obrigado por tudo, Dona Marta!", t("Спасибо за всё, дона Марта!", "Thank you for everything, Dona Marta!")),
      line("marta", "Voltem logo!", t("Возвращайтесь скорее!", "Come back soon!")),
    ],
    gist: choice("ptop7-d1", t("Какую фразу выучил Пипока в Ору-Прету?", "What phrase did Pipoca learn in Ouro Preto?"), [
      [t("«Идите прямо!»", "“Go straight on!”"), true],
      [t("«Поверните налево!»", "“Turn left!”"), false],
      [t("«Какой вид!»", "“What a view!”"), false],
    ]),
  },
  grammar: [
    g(
      t("Vocês vão gostar — «вам понравится»", "Vocês vão gostar — “you'll love it”"),
      [
        t(
          "Ir + глагол — разговорное будущее: Vocês vão gostar — «вам понравится», Nós vamos ver — «увидим». Ты уже знаешь vou sentir saudade.",
          "Ir + verb is the everyday future: Vocês vão gostar (you're going to like it), Nós vamos ver (we'll see). You already know vou sentir saudade.",
        ),
        t(
          "Vocês — «вы» (несколько человек). Глагол с vocês — как с eles: vocês vão, vocês querem, voltem!",
          "Vocês is “you” for more than one person. Its verb forms are the same as eles: vocês vão, vocês querem.",
        ),
      ],
      [
        ["Vocês vão gostar da Bahia.", t("Вам понравится Баия.", "You'll love Bahia.")],
        ["Amanhã nós vamos viajar.", t("Завтра мы уезжаем.", "Tomorrow we're going travelling.")],
      ],
    ),
  ],
  tasks: [
    listen("ptop7-t1", t("Аудиоэкзамен. Что рассказывает дона Марта?", "Audio exam. What does Dona Marta tell them?"), "O papagaio ensinou o caminho para os turistas: Siga em frente! A banda foi para Salvador.", [
      [t("Попугай показывал туристам дорогу, а группа уехала в Салвадор.", "The parrot showed tourists the way, and the band went to Salvador."), true],
      [t("Попугай заблудился в городе.", "The parrot got lost in town."), false],
      [t("Группа выступала в церкви.", "The band played in the church."), false],
    ]),
    choice("ptop7-t2", t("Как сказать «Вам понравится!»?", "How do you say “You'll love it!”?"), [
      ["Vocês vão gostar!", true],
      ["Vocês gostam de nada!", false],
      ["Vocês vão gostam!", false],
    ], { skill: "words" }),
    build("ptop7-t3", t("Собери фразу: «Они уехали в Салвадор».", "Build the sentence: “They've gone to Salvador”."), ["Eles", "foram", "para", "Salvador."]),
    missing("ptop7-t4", t("Какой буквы не хватает? («туристы»)", "Which letter is missing? (“tourists”)"), "tur", "stas", "i", ["i", "e", "y"]),
    speak("ptop7-t5", "Voltem logo!", "Obrigado por tudo! Até breve!", t("Спасибо за всё! До скорого!", "Thanks for everything! See you soon!"), {
      help: t("Попрощайся вслух. Можно obrigado или obrigada.", "Say goodbye aloud — obrigado or obrigada."),
    }),
    script("ptop7-t6", t("Вспомни весь Ору-Прету. Закончи разговор с доной Мартой.", "Remember all of Ouro Preto. Finish the conversation with Dona Marta."), [
      { speaker: MARTA, text: "Bom dia! Aonde você vai?" },
      { speaker: YOU, answer: "Eu vou à igreja. Onde fica?", options: ["Eu vou à igreja. Onde fica?", "Eu vou ao igreja.", "Faz um desconto?"] },
      { speaker: MARTA, text: "Sobe a rua e vira à esquerda." },
      { speaker: YOU, answer: "É longe?", options: ["É longe?", "Eu levo esta.", "Que história!"] },
      { speaker: MARTA, text: "Não! Falta pouco!" },
      { speaker: YOU, answer: "Obrigado pela ajuda!", options: ["Obrigado pela ajuda!", "De sobremesa!", "Estou morto de nada."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-ouropreto",
    itemName: t("Фото Пипоки на указателе", "Photo of Pipoca on the signpost"),
    itemNameRu: "Foto do Pipoca na placa",
    ru: "Oba! Mais uma foto do Pipoca!",
    en: t("Ура! Ещё одно фото Пипоки!", "Hooray! Another photo of Pipoca!"),
    a11y: t(
      "Фото: зелёный попугай на старом деревянном указателе, вокруг туристы с картами смеются.",
      "A photo: the green parrot on an old wooden signpost, surrounded by laughing tourists with maps.",
    ),
    image: p("photo"),
    steps: [
      t("Один турист прислал доне Марте фото.", "A tourist sent Dona Marta a photo."),
      t("Пипока на указателе, вокруг туристы с картами!", "Pipoca on the signpost, surrounded by tourists with maps!"),
      t("«O guia mais famoso de Ouro Preto!» — «Самый знаменитый гид Ору-Прету!»", "“O guia mais famoso de Ouro Preto!” — “Ouro Preto's most famous guide!”"),
      t("Подпись: «Siga em frente!» Фото — в альбом.", "Caption: “Siga em frente!” Into the album it goes."),
    ],
    bridge: t("Ночной автобус едет на север — к морю и барабанам Баии.", "A night bus heads north — to the sea and the drums of Bahia."),
  },
};

const story: CityStory = {
  home: {
    name: t("Комната в старом доме доны Марты", "A room in Dona Marta's old house"),
    nameRu: "O quarto na casa da Dona Marta",
    image: p("home"),
    a11y: t(
      "Комната в старинном доме: толстые белые стены, деревянный потолок, синее окно с видом на крыши и церкви. Посередине чемодан Мурзика.",
      "A room in an old colonial house: thick white walls, a wooden ceiling and a blue-framed window overlooking roofs and churches. Murzik's suitcase in the middle.",
    ),
  },
  keepsakeId: "photo-ouropreto",
  welcomeRu: "Olá, Ouro Preto!",
  welcomeEn: t("Привет, Ору-Прету!", "Hello, Ouro Preto!"),
  welcomeImage: p("arrival"),
  welcomeA11y: t(
    "Старинный город на холмах: белые домики с цветными окнами, мощёные улицы круто идут вверх и вниз, церкви с башенками.",
    "An old town on the hills: white houses with colourful windows, steep cobbled streets and churches with little towers.",
  ),
  departureImage: p("departure"),
  departureA11y: t("Дона Марта машет у двери своего старого дома.", "Dona Marta waves at the door of her old house."),
  finale: [
    {
      image: p("photo"),
      a11y: t("Мурзик вклеивает в альбом фото Пипоки на указателе.", "Murzik sticks the photo of Pipoca on the signpost into the album."),
      lines: [
        { en: t("Девятая страница альбома: Пипока — гид Ору-Прету.", "Page nine of the album: Pipoca, tour guide of Ouro Preto.") },
        { ru: "Siga em frente!", en: t("Идите прямо!", "Go straight on!") },
        { en: t("А на дне чемодана — второй подарок для доны Лусии.", "And at the bottom of the suitcase lies a second present for Dona Lúcia.") },
      ],
    },
    {
      image: img.greet,
      a11y: t("Мурзик радостно подпрыгивает.", "Murzik jumps for joy."),
      lines: [
        { ru: "Ouro Preto completo!", en: t("Ору-Прету пройден!", "Ouro Preto complete!") },
        { en: t("7 / 7 уроков", "7 / 7 lessons") },
      ],
    },
    {
      image: p("departure"),
      a11y: t("Дона Марта машет на прощание.", "Dona Marta waves goodbye."),
      lines: [
        { ru: "Tchau, Dona Marta!", en: t("Пока, дона Марта!", "Bye, Dona Marta!") },
        { ru: "Próxima parada: Salvador!", en: t("Следующая остановка: Салвадор!", "Next stop: Salvador!") },
      ],
    },
    {
      image: p("bus"),
      a11y: t("Автобус едет на север, за окном рассвет над холмами.", "A bus heads north as dawn breaks over the hills."),
      lines: [{ ru: "Ouro Preto → Salvador", en: t("Ору-Прету → Салвадор", "Ouro Preto → Salvador") }],
    },
    {
      image: pic("pt/salvador/arrival"),
      a11y: t(
        "Старинная площадь Пелоуринью: розовые, жёлтые, голубые дома, мощёная улица, барабанщики в ярких футболках.",
        "The old Pelourinho square: pink, yellow and blue houses, a cobbled street and drummers in bright T-shirts.",
      ),
      lines: [
        { ru: "Olá, Salvador!", en: t("Привет, Салвадор!", "Hello, Salvador!") },
        { ru: "Que cores! Que tambores!", en: t("Какие краски! Какие барабаны!", "What colours! What drums!") },
      ],
    },
  ],
};

export const ptOuroPreto = {
  id: "pt-ouropreto",
  name: t("Ору-Прету", "Ouro Preto"),
  namePt: "Ouro Preto",
  lessons: [op1, op2, op3, op4, op5, op6, op7],
  story,
};
