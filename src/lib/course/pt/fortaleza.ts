import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { PAIRS, YOU, build, choice, fill, g, line, listen, match, missing, script, speak, spell, t, v } from "./make";

/* Форталеза · «Здоровье» · Жаркий север. Мурзик обгорел на солнце, доктор Паулу, части тела, аптека, прошедшее время: что было вчера. Пипока выучил «Estou com calor!». */

const p = (name: string) => pic(`pt/fortaleza/${name}`);
const PAULO = t("Доктор Паулу", "Dr Paulo");

const fo1: Lesson = {
  id: "pt-a1-fortaleza-1",
  level: "A1",
  cityId: "pt-fortaleza",
  number: 1,
  title: t("Estou com dor — У меня болит", "Estou com dor — It hurts"),
  minutes: 7,
  goals: [
    t("Сказать, что болит", "Say what hurts"),
    t("Спросить «Что с тобой?»", "Ask “What's wrong?”"),
    t("Пожелать выздоровления", "Wish someone a quick recovery"),
  ],
  vocabNote: t(
    "Estou com dor de cabeça — «у меня болит голова», буквально «я с болью головы». Так же, как estou com frio, род тут не важен.",
    "Estou com dor de cabeça means “I've got a headache” — literally “I'm with pain of head”. Like estou com frio, it's the same for everyone.",
  ),
  vocab: [
    v("ptfo1-1", "O que você tem?", t("Что с тобой?", "What's wrong?"),
      t("Биа встревоженно смотрит на бледного Мурзика.", "Bia looks anxiously at a pale-looking Murzik."),
      p("l1-1")),
    v("ptfo1-2", "Estou com dor de cabeça.", t("У меня болит голова.", "I've got a headache."),
      t("Мурзик держится лапами за голову.", "Murzik holds his head in his paws."),
      p("l1-2")),
    v("ptfo1-3", "Estou com dor de barriga.", t("У меня болит живот.", "I've got a stomach ache."),
      t("Мурзик держится за живот.", "Murzik clutches his tummy."),
      p("l1-3")),
    v("ptfo1-4", "Dói aqui.", t("Болит вот здесь.", "It hurts here."),
      t("Мурзик показывает лапой на плечо.", "Murzik points to his shoulder."),
      p("l1-4")),
    v("ptfo1-5", "Estou com febre.", t("У меня температура.", "I've got a fever."),
      t("Градусник показывает 38.", "A thermometer showing 38 °C."),
      p("l1-5")),
    v("ptfo1-6", "Estou doente.", t("Я болею.", "I'm ill."),
      t("Мурзик лежит в кровати под одеялом, рядом носовые платки.", "Murzik lies in bed under a sheet, tissues beside him."),
      p("l1-6")),
    v("ptfo1-7", "Melhoras!", t("Выздоравливай!", "Get well soon!"),
      t("Биа приносит Мурзику стакан воды и улыбается.", "Bia brings Murzik a glass of water and smiles."),
      p("l1-7")),
  ],
  dialogue: {
    title: t("Тяжёлое утро", "A bad morning"),
    note: t(
      "Vermelho como um camarão — «красный, как креветка». Queimado de sol — «обгоревший на солнце».",
      "Vermelho como um camarão means “as red as a prawn”. Queimado de sol means “sunburnt”.",
    ),
    lines: [
      line("bia", "Murzik, o que você tem? Você está vermelho como um camarão!", t("Мурзик, что с тобой? Ты красный, как креветка!", "Murzik, what's wrong? You're as red as a prawn!")),
      line("murzik", "Estou com dor de cabeça… e dói aqui, e aqui.", t("У меня болит голова… и болит вот здесь, и здесь.", "I've got a headache… and it hurts here, and here.")),
      line("bia", "Você está com febre?", t("У тебя температура?", "Have you got a fever?")),
      line("murzik", "Acho que sim. Estou doente…", t("Кажется, да. Я заболел…", "I think so. I'm ill…")),
      line("bia", "Você está queimado de sol! Vamos ao médico.", t("Ты обгорел на солнце! Пойдём к врачу.", "You're sunburnt! Let's go to the doctor.")),
    ],
    gist: choice("ptfo1-d1", t("Что случилось с Мурзиком?", "What's happened to Murzik?"), [
      [t("Он обгорел на солнце.", "He's got sunburnt."), true],
      [t("Он упал.", "He fell over."), false],
      [t("Его укусила собака.", "A dog bit him."), false],
    ]),
  },
  grammar: [
    g(
      t("Estou com dor de… и dói", "Estou com dor de… and dói"),
      [
        t(
          "«У меня болит…» — estou com dor de + часть тела без артикля: estou com dor de cabeça, estou com dor de barriga.",
          "“I've got a … ache” is estou com dor de + body part, with no article: estou com dor de cabeça (headache), estou com dor de barriga (stomach ache).",
        ),
        t(
          "Можно и проще: Dói aqui — «болит здесь», Dói a perna — «болит нога». Dói — от doer, «болеть».",
          "Or more simply: Dói aqui (It hurts here), Dói a perna (My leg hurts). Dói comes from doer, to hurt.",
        ),
      ],
      [
        ["Ela está com dor de cabeça.", t("У неё болит голова.", "She's got a headache.")],
        ["Dói muito!", t("Очень больно!", "It really hurts!")],
      ],
    ),
  ],
  tasks: [
    choice("ptfo1-t1", t("Как сказать «У меня болит живот»?", "How do you say “I've got a stomach ache”?"), [
      ["Estou com dor de barriga.", true],
      ["Sou dor de barriga.", false],
      ["Estou com a barriga dor.", false],
    ], { skill: "grammar" }),
    listen("ptfo1-t2", t("Послушай. Что болит?", "Listen. What hurts?"), "Estou com dor de cabeça.", [
      [t("Голова.", "The head."), true],
      [t("Живот.", "The stomach."), false],
      [t("Нога.", "The leg."), false],
    ]),
    match("ptfo1-t3", PAIRS, [
      ["a dor", t("боль", "pain")],
      ["a febre", t("температура, жар", "fever")],
      ["doente", t("больной", "ill")],
      ["Melhoras!", t("Выздоравливай!", "Get well soon!")],
    ], { skill: "words" }),
    spell("ptfo1-t4", t("Собери из букв слово «голова».", "Spell the word for “head”."), "cabeça"),
    speak("ptfo1-t5", "O que você tem?", "Estou com dor de cabeça e estou com febre.", t("У меня болит голова и температура.", "I've got a headache and a fever."), {
      help: t("Скажи вслух, что у тебя болит.", "Say aloud what's wrong with you."),
    }),
    choice("ptfo1-t6", t("Как сказать «Было очень здорово!»?", "How do you say “It was really great!”?"), [
      ["Foi muito bom!", true],
      ["Vai muito bom!", false],
      ["Está muito bem!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "icepack",
    itemName: t("Холодный компресс", "Ice pack"),
    itemNameRu: "Bolsa de gelo",
    ru: "Oba! Uma bolsa de gelo!",
    en: t("Ура! Холодный компресс!", "Hooray! An ice pack!"),
    a11y: t("На тумбочке лежит голубой холодный компресс в виде облачка.", "A blue cloud-shaped ice pack lies on the bedside table."),
    image: p("icepack"),
    steps: [
      t("Хозяин хостела приносит холодный компресс.", "The hostel owner brings an ice pack."),
      t("«Põe na cabeça!» — «Положи на голову!»", "“Põe na cabeça!” — “Put it on your head!”"),
      t("Мурзику сразу становится легче.", "Murzik feels better straight away."),
      t("Компресс лежит на тумбочке.", "The ice pack lies on the bedside table."),
    ],
    bridge: t("Биа ведёт Мурзика к врачу. Врач должен его осмотреть.", "Bia takes Murzik to the doctor for a check-up."),
  },
};

const fo2: Lesson = {
  id: "pt-a1-fortaleza-2",
  level: "A1",
  cityId: "pt-fortaleza",
  number: 2,
  title: t("O corpo — Тело", "O corpo — The body"),
  minutes: 7,
  goals: [
    t("Назвать части тела", "Name parts of the body"),
    t("Сказать «болят ноги»", "Say “my feet hurt”"),
    t("Показать, где болит", "Show where it hurts"),
  ],
  vocabNote: t(
    "О частях тела говорят с артиклем, а не с «мой»: Dói a perna — «болит нога» (а не «моя нога»).",
    "Portuguese uses “the”, not “my”, with body parts: Dói a perna — literally “the leg hurts”, meaning “my leg hurts”.",
  ),
  vocab: [
    v("ptfo2-1", "a cabeça e o braço", t("голова и рука (от плеча)", "the head and the arm"),
      t("Мурзик показывает на голову и на руку.", "Murzik points to his head and his arm."),
      p("l2-1")),
    v("ptfo2-2", "a mão", t("кисть руки", "the hand"),
      t("Раскрытая лапа Мурзика.", "Murzik's open paw."),
      p("l2-2")),
    v("ptfo2-3", "a perna e o pé", t("нога и ступня", "the leg and the foot"),
      t("Мурзик стоит на одной ноге и показывает на ступню.", "Murzik stands on one leg and points to his foot."),
      p("l2-3")),
    v("ptfo2-4", "a barriga", t("живот", "the stomach"),
      t("Мурзик гладит круглый животик.", "Murzik pats his round tummy."),
      p("l2-4")),
    v("ptfo2-5", "as costas", t("спина", "the back"),
      t("Мурзик держится за спину, как старичок.", "Murzik holds his back like a little old man."),
      p("l2-5")),
    v("ptfo2-6", "Doem os pés.", t("Болят ступни.", "My feet hurt."),
      t("Мурзик снимает сапожки, лапы красные.", "Murzik takes off his boots; his feet are red."),
      p("l2-6")),
    v("ptfo2-7", "Onde dói?", t("Где болит?", "Where does it hurt?"),
      t("Врач в белом халате ласково смотрит на Мурзика.", "A doctor in a white coat looks kindly at Murzik."),
      p("l2-7")),
  ],
  dialogue: {
    title: t("У врача", "At the doctor's"),
    note: t(
      "Areia quente — «горячий песок». Andou descalço — «ходил босиком».",
      "Areia quente means “hot sand”. Andou descalço means “walked barefoot”.",
    ),
    lines: [
      line("paulo", "Bom dia! Eu sou o doutor Paulo. Onde dói?", t("Доброе утро! Я доктор Паулу. Где болит?", "Good morning! I'm Dr Paulo. Where does it hurt?")),
      line("murzik", "Dói a cabeça, os braços, as costas…", t("Болит голова, руки, спина…", "My head hurts, my arms, my back…")),
      line("paulo", "E as pernas?", t("А ноги?", "And your legs?")),
      line("murzik", "As pernas não. Mas doem os pés!", t("Ноги нет. Но болят ступни!", "Not my legs. But my feet hurt!")),
      line("paulo", "Você andou descalço na areia quente?", t("Вы ходили босиком по горячему песку?", "Did you walk barefoot on the hot sand?")),
      line("murzik", "Andei… o dia todo.", t("Ходил… весь день.", "I did… all day.")),
    ],
    gist: choice("ptfo2-d1", t("Почему у Мурзика болят ступни?", "Why do Murzik's feet hurt?"), [
      [t("Он ходил босиком по горячему песку.", "He walked barefoot on the hot sand."), true],
      [t("Он долго бегал.", "He ran a lot."), false],
      [t("Он упал с доски.", "He fell off a surfboard."), false],
    ]),
  },
  grammar: [
    g(
      t("Dói и doem", "Dói and doem"),
      [
        t(
          "Если болит одно — dói: dói a cabeça. Если много — doem: doem os pés. Как «болит» и «болят».",
          "One thing hurting: dói (dói a cabeça). Several things: doem (doem os pés). It's like “hurts” and “hurt”.",
        ),
        t(
          "Слова на -ão во множественном бывают разными: a mão — as mãos, o irmão — os irmãos, но o pão — os pães. Их лучше запоминать.",
          "Words ending in -ão have different plurals: a mão — as mãos, o irmão — os irmãos, but o pão — os pães. Learn them as you meet them.",
        ),
      ],
      [
        ["Dói o braço.", t("Болит рука.", "My arm hurts.")],
        ["Doem as mãos.", t("Болят руки (кисти).", "My hands hurt.")],
      ],
    ),
  ],
  tasks: [
    choice("ptfo2-t1", t("Как сказать «Болят ноги»? (as pernas)", "How do you say “My legs hurt”? (as pernas)"), [
      ["Doem as pernas.", true],
      ["Dói as pernas.", false],
      ["Doem a perna.", false],
    ], { skill: "grammar" }),
    listen("ptfo2-t2", t("Послушай. Что спрашивает врач?", "Listen. What does the doctor ask?"), "Onde dói?", [
      [t("Где болит?", "Where does it hurt?"), true],
      [t("Что вы ели?", "What did you eat?"), false],
      [t("Сколько вам лет?", "How old are you?"), false],
    ]),
    match("ptfo2-t3", PAIRS, [
      ["a mão", t("кисть руки", "the hand")],
      ["o pé", t("ступня", "the foot")],
      ["as costas", t("спина", "the back")],
      ["a barriga", t("живот", "the stomach")],
    ], { skill: "words" }),
    missing("ptfo2-t4", t("Какой буквы не хватает? («нога»)", "Which letter is missing? (“leg”)"), "per", "a", "n", ["n", "m", "nh"]),
    speak("ptfo2-t5", "Onde dói?", "Dói a cabeça e doem os pés.", t("Болит голова и болят ступни.", "My head hurts and my feet hurt."), {
      help: t("Покажи и скажи вслух, где болит.", "Point and say aloud where it hurts."),
    }),
    choice("ptfo2-t6", t("Как сказать «У меня температура»?", "How do you say “I've got a fever”?"), [
      ["Estou com febre.", true],
      ["Sou febre.", false],
      ["Estou febre.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "handfan",
    itemName: t("Веер", "Hand fan"),
    itemNameRu: "Leque",
    ru: "Oba! Um leque!",
    en: t("Ура! Веер!", "Hooray! A hand fan!"),
    a11y: t("На кровати лежит раскрытый соломенный веер с нарисованными парусными лодками.", "An open straw fan painted with sailing boats lies on the bed."),
    image: p("fan"),
    steps: [
      t("В приёмной у врача очень жарко.", "It's very hot in the doctor's waiting room."),
      t("Медсестра даёт Мурзику соломенный веер.", "A nurse gives Murzik a straw fan."),
      t("«Aqui em Fortaleza é sempre verão!» — «В Форталезе всегда лето!»", "“Aqui em Fortaleza é sempre verão!” — “It's always summer here in Fortaleza!”"),
      t("Веер лежит на кровати.", "The fan lies on the bed."),
    ],
    bridge: t("Доктор Паулу пишет на листочке, что делать.", "Dr Paulo writes down what to do."),
  },
};

const fo3: Lesson = {
  id: "pt-a1-fortaleza-3",
  level: "A1",
  cityId: "pt-fortaleza",
  number: 3,
  title: t("O conselho do médico — Совет врача", "O conselho do médico — The doctor's advice"),
  minutes: 7,
  goals: [
    t("Понять советы врача", "Understand a doctor's advice"),
    t("Сказать, как часто принимать лекарство", "Say how often to take medicine"),
    t("Спросить, серьёзно ли это", "Ask if it's serious"),
  ],
  vocabNote: t(
    "Grave — «серьёзный, тяжёлый» (о болезни). Não é grave — «ничего серьёзного».",
    "Grave means “serious” (about illness). Não é grave means “it's nothing serious”.",
  ),
  vocab: [
    v("ptfo3-1", "Abra a boca.", t("Откройте рот.", "Open your mouth."),
      t("Мурзик широко открывает рот, врач светит фонариком.", "Murzik opens his mouth wide as the doctor shines a little light."),
      p("l3-1")),
    v("ptfo3-2", "É grave?", t("Это серьёзно?", "Is it serious?"),
      t("Мурзик испуганно смотрит на врача.", "Murzik looks at the doctor, worried."),
      p("l3-2")),
    v("ptfo3-3", "Não é grave.", t("Ничего серьёзного.", "It's nothing serious."),
      t("Врач успокаивающе улыбается.", "The doctor smiles reassuringly."),
      p("l3-3")),
    v("ptfo3-4", "Tome este remédio.", t("Принимайте это лекарство.", "Take this medicine."),
      t("Врач протягивает маленький пузырёк.", "The doctor hands over a small bottle."),
      p("l3-4")),
    v("ptfo3-5", "Três vezes por dia.", t("Три раза в день.", "Three times a day."),
      t("Три кружочка на листке: утро, день, вечер.", "Three circles on a note: morning, afternoon, evening."),
      p("l3-5")),
    v("ptfo3-6", "Beba muita água.", t("Пейте много воды.", "Drink plenty of water."),
      t("Большая бутылка воды рядом с Мурзиком.", "A big bottle of water next to Murzik."),
      p("l3-6")),
    v("ptfo3-7", "Descanse e fique na sombra.", t("Отдыхайте и будьте в тени.", "Rest and stay in the shade."),
      t("Мурзик лежит в гамаке под пальмой.", "Murzik lies in a hammock under a palm tree."),
      p("l3-7")),
  ],
  dialogue: {
    title: t("Что сказал врач", "What the doctor said"),
    note: t(
      "Insolação — «солнечный удар». Pomada — «мазь».",
      "Insolação means “sunstroke”. Pomada means “cream, ointment”.",
    ),
    lines: [
      line("paulo", "Abra a boca. Hmm… E a febre?", t("Откройте рот. Хм… А температура?", "Open your mouth. Hmm… And the fever?")),
      line("murzik", "Trinta e oito. Doutor, é grave?", t("Тридцать восемь. Доктор, это серьёзно?", "Thirty-eight. Doctor, is it serious?")),
      line("paulo", "Não é grave. É uma insolação. Você tomou muito sol.", t("Ничего серьёзного. Это солнечный удар. Вы перегрелись на солнце.", "It's nothing serious. It's sunstroke. You've had too much sun.")),
      line("paulo", "Tome este remédio três vezes por dia. E passe esta pomada.", t("Принимайте это лекарство три раза в день. И мажьте этой мазью.", "Take this medicine three times a day. And put on this cream.")),
      line("paulo", "Beba muita água. Descanse e fique na sombra!", t("Пейте много воды. Отдыхайте и сидите в тени!", "Drink plenty of water. Rest and stay in the shade!")),
      line("murzik", "Obrigado, doutor!", t("Спасибо, доктор!", "Thank you, doctor!")),
    ],
    gist: choice("ptfo3-d1", t("Что у Мурзика?", "What's wrong with Murzik?"), [
      [t("Солнечный удар.", "Sunstroke."), true],
      [t("Простуда.", "A cold."), false],
      [t("Перелом.", "A broken bone."), false],
    ]),
  },
  grammar: [
    g(
      t("Советы: tome, beba, descanse", "Advice: tome, beba, descanse"),
      [
        t(
          "Вежливые советы и просьбы: у глаголов на -ar окончание -e (tome, descanse, passe), у глаголов на -er и -ir — -a (beba, abra). Такие формы говорят врачи, продавцы, гиды.",
          "Polite instructions swap the vowel: -ar verbs end in -e (tome, descanse, passe), -er and -ir verbs end in -a (beba, abra). Doctors, shop staff and guides talk like this.",
        ),
        t(
          "Как часто: uma vez por dia — «раз в день», duas vezes por dia — «два раза в день».",
          "How often: uma vez por dia (once a day), duas vezes por dia (twice a day).",
        ),
      ],
      [
        ["Tome o remédio duas vezes por dia.", t("Принимайте лекарство два раза в день.", "Take the medicine twice a day.")],
        ["Abra a janela, por favor.", t("Откройте окно, пожалуйста.", "Open the window, please.")],
      ],
    ),
  ],
  tasks: [
    choice("ptfo3-t1", t("Как врач скажет «Пейте воду»?", "How does a doctor say “Drink water”?"), [
      ["Beba água.", true],
      ["Bebe água ontem.", false],
      ["Bebo água.", false],
    ], { skill: "grammar" }),
    listen("ptfo3-t2", t("Послушай. Сколько раз в день?", "Listen. How many times a day?"), "Três vezes por dia.", [
      [t("Три раза.", "Three times."), true],
      [t("Один раз.", "Once."), false],
      [t("Два раза.", "Twice."), false],
    ]),
    match("ptfo3-t3", PAIRS, [
      ["o remédio", t("лекарство", "the medicine")],
      ["grave", t("серьёзный", "serious")],
      ["a sombra", t("тень", "the shade")],
      ["descansar", t("отдыхать", "to rest")],
    ], { skill: "words" }),
    spell("ptfo3-t4", t("Собери из букв слово «лекарство».", "Spell the word for “medicine”."), "remédio"),
    speak("ptfo3-t5", "Doutor, é grave?", "Não é grave. Beba muita água e descanse.", t("Ничего серьёзного. Пейте много воды и отдыхайте.", "It's nothing serious. Drink plenty of water and rest."), {
      help: t("Ответь вслух как врач.", "Answer aloud, as if you were the doctor."),
    }),
    choice("ptfo3-t6", t("Как спросить «Где болит?»", "How do you ask “Where does it hurt?”"), [
      ["Onde dói?", true],
      ["Onde é?", false],
      ["Quem dói?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "firstaid",
    itemName: t("Аптечка", "First-aid kit"),
    itemNameRu: "Kit de primeiros socorros",
    ru: "Oba! Um kit de primeiros socorros!",
    en: t("Ура! Аптечка!", "Hooray! A first-aid kit!"),
    a11y: t("Маленькая белая коробочка с красным крестиком на полке.", "A small white box with a red cross on the shelf."),
    image: p("firstaid"),
    steps: [
      t("Доктор Паулу даёт Мурзику маленькую аптечку.", "Dr Paulo gives Murzik a little first-aid kit."),
      t("«Para a viagem!» — «В дорогу!»", "“Para a viagem!” — “For your travels!”"),
      t("Внутри пластыри, крем от солнца и мазь.", "Inside: plasters, sun cream and some ointment."),
      t("Аптечка стоит на полке.", "The kit stands on the shelf."),
    ],
    bridge: t("Мазь заканчивается. Биа идёт в аптеку.", "The cream is running out. Bia goes to the pharmacy."),
  },
};

const fo4: Lesson = {
  id: "pt-a1-fortaleza-4",
  level: "A1",
  cityId: "pt-fortaleza",
  number: 4,
  title: t("Na farmácia — В аптеке", "Na farmácia — At the pharmacy"),
  minutes: 7,
  goals: [
    t("Попросить лекарство в аптеке", "Ask for medicine at the pharmacy"),
    t("Сказать «для…»: para", "Say what something is for: para"),
    t("Спросить, нужен ли рецепт", "Ask if you need a prescription"),
  ],
  vocabNote: t(
    "Receita — и «рецепт врача», и «рецепт блюда». Comprimido — «таблетка».",
    "Receita means both a doctor's prescription and a cooking recipe. Comprimido means “tablet”.",
  ),
  vocab: [
    v("ptfo4-1", "Eu preciso de um remédio para dor de cabeça.", t("Мне нужно лекарство от головной боли.", "I need something for a headache."),
      t("Биа у прилавка аптеки.", "Bia at the pharmacy counter."),
      p("l4-1")),
    v("ptfo4-2", "Precisa de receita?", t("Нужен рецепт?", "Do I need a prescription?"),
      t("Биа держит листок от врача.", "Bia holds the doctor's note."),
      p("l4-2")),
    v("ptfo4-3", "Não precisa.", t("Не нужен.", "No, you don't."),
      t("Фармацевт качает головой.", "The pharmacist shakes her head."),
      p("l4-3")),
    v("ptfo4-4", "Quantos comprimidos?", t("Сколько таблеток?", "How many tablets?"),
      t("Таблетки на ладони.", "Tablets in the palm of a hand."),
      p("l4-4")),
    v("ptfo4-5", "um por dia", t("по одной в день", "one a day"),
      t("Одна таблетка и солнышко.", "One tablet and a little sun."),
      p("l4-5")),
    v("ptfo4-6", "um curativo", t("пластырь", "a plaster"),
      t("Пластырь в виде звёздочки.", "A star-shaped plaster."),
      p("l4-6")),
    v("ptfo4-7", "Melhorou?", t("Полегчало?", "Feeling better?"),
      t("Биа заботливо спрашивает Мурзика в гамаке.", "Bia asks Murzik in his hammock, with concern."),
      p("l4-7")),
  ],
  dialogue: {
    title: t("В аптеке", "At the pharmacy"),
    note: t(
      "Queimadura — «ожог». Muito melhor — «гораздо лучше».",
      "Queimadura means “burn”. Muito melhor means “much better”.",
    ),
    lines: [
      line("bia", "Boa tarde! Eu preciso de uma pomada para queimadura de sol.", t("Добрый день! Мне нужна мазь от солнечного ожога.", "Good afternoon! I need a cream for sunburn.")),
      line("pharmacist", "Aqui está. E mais alguma coisa?", t("Вот, пожалуйста. Что-нибудь ещё?", "Here you are. Anything else?")),
      line("bia", "Um remédio para dor de cabeça. Precisa de receita?", t("Лекарство от головной боли. Нужен рецепт?", "Something for a headache. Do I need a prescription?")),
      line("pharmacist", "Não precisa. Um comprimido por dia.", t("Не нужен. По одной таблетке в день.", "No, you don't. One tablet a day.")),
      line("bia", "E um curativo, por favor. Para o pé dele.", t("И пластырь, пожалуйста. Для его лапы.", "And a plaster, please. For his foot.")),
      line("bia", "Murzik, melhorou?", t("Мурзик, полегчало?", "Murzik, feeling better?")),
      line("murzik", "Melhorou! Muito melhor!", t("Полегчало! Гораздо лучше!", "Yes! Much better!")),
    ],
    gist: choice("ptfo4-d1", t("Что покупает Биа?", "What does Bia buy?"), [
      [t("Мазь, таблетки и пластырь.", "Cream, tablets and a plaster."), true],
      [t("Только воду.", "Just water."), false],
      [t("Крем от комаров.", "Insect repellent."), false],
    ]),
  },
  grammar: [
    g(
      t("Para — «для, от»", "Para — “for”"),
      [
        t(
          "Para показывает, для чего вещь: um remédio para dor de cabeça — «лекарство от головной боли» (буквально «для головной боли»), uma pomada para queimadura — «мазь от ожога».",
          "Para shows what something is for: um remédio para dor de cabeça (medicine for a headache), uma pomada para queimadura (cream for a burn).",
        ),
        t(
          "И для кого: para o Murzik, para mim — «для меня», para você — «для тебя».",
          "And who it's for: para o Murzik, para mim (for me), para você (for you).",
        ),
      ],
      [
        ["Este remédio é para febre.", t("Это лекарство от температуры.", "This medicine is for fever.")],
        ["O curativo é para mim.", t("Пластырь — для меня.", "The plaster's for me.")],
      ],
    ),
  ],
  tasks: [
    choice("ptfo4-t1", t("Как сказать «лекарство от головной боли»?", "How do you say “medicine for a headache”?"), [
      ["um remédio para dor de cabeça", true],
      ["um remédio de dor para cabeça", false],
      ["um remédio com dor de cabeça", false],
    ], { skill: "grammar" }),
    listen("ptfo4-t2", t("Послушай. Нужен ли рецепт?", "Listen. Is a prescription needed?"), "Não precisa de receita.", [
      [t("Не нужен.", "No."), true],
      [t("Нужен.", "Yes."), false],
      [t("Не знают.", "They don't know."), false],
    ]),
    match("ptfo4-t3", PAIRS, [
      ["a farmácia", t("аптека", "the pharmacy")],
      ["a receita", t("рецепт", "the prescription")],
      ["o comprimido", t("таблетка", "the tablet")],
      ["o curativo", t("пластырь", "the plaster")],
    ], { skill: "words" }),
    missing("ptfo4-t4", t("Какой буквы не хватает? («аптека»)", "Which letter is missing? (“pharmacy”)"), "farm", "cia", "á", ["á", "a", "â"]),
    speak("ptfo4-t5", "Boa tarde! Posso ajudar?", "Eu preciso de um remédio para dor de cabeça.", t("Мне нужно лекарство от головной боли.", "I need something for a headache."), {
      help: t("Попроси вслух лекарство в аптеке.", "Ask for medicine at the pharmacy, aloud."),
    }),
    choice("ptfo4-t6", t("Врач говорит: Abra a boca. Что делать?", "The doctor says: Abra a boca. What should you do?"), [
      [t("Открыть рот.", "Open your mouth."), true],
      [t("Закрыть глаза.", "Close your eyes."), false],
      [t("Выпить воды.", "Drink some water."), false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sandbottle",
    itemName: t("Бутылочка с цветным песком", "Bottle of coloured sand"),
    itemNameRu: "Garrafinha de areia",
    ru: "Oba! Uma garrafinha de areia!",
    en: t("Ура! Бутылочка с песком!", "Hooray! A sand bottle!"),
    a11y: t("Маленькая стеклянная бутылочка, внутри разноцветным песком нарисованы дюны и лодка.", "A small glass bottle filled with layers of coloured sand that form a picture of dunes and a boat."),
    image: p("sandbottle"),
    steps: [
      t("Рядом с аптекой мастер делает картины из песка.", "Next to the pharmacy a craftsman makes pictures out of sand."),
      t("Слой за слоем — внутри бутылочки появляются дюны и лодка.", "Layer by layer, dunes and a boat appear inside a bottle."),
      t("«Melhoras!» — говорит он и дарит бутылочку Мурзику.", "“Melhoras!” he says, and gives Murzik the bottle."),
      t("Бутылочка стоит на подоконнике.", "The bottle stands on the windowsill."),
    ],
    bridge: t("Мурзику лучше. Вечером Биа спрашивает: «O que você fez ontem? Conta tudo!»", "Murzik feels better. In the evening Bia asks: “O que você fez ontem? Conta tudo!”"),
  },
};

const fo5: Lesson = {
  id: "pt-a1-fortaleza-5",
  level: "A1",
  cityId: "pt-fortaleza",
  number: 5,
  title: t("Ontem eu… — Вчера я…", "Ontem eu… — Yesterday I…"),
  minutes: 7,
  goals: [
    t("Рассказать, что делал(а) вчера", "Say what you did yesterday"),
    t("Прошедшее время глаголов на -ar", "The past tense of -ar verbs"),
    t("Признаться: Eu esqueci!", "Admit: Eu esqueci! (I forgot!)"),
  ],
  vocabNote: t(
    "Прошедшее время в португальском не меняется по роду: fiquei — и «остался», и «осталась». Удобно!",
    "Past-tense forms don't change for gender: fiquei means “I stayed” whether a man or a woman says it.",
  ),
  vocab: [
    v("ptfo5-1", "Ontem eu fiquei na praia.", t("Вчера я был(а) на пляже.", "Yesterday I spent the day on the beach."),
      t("Вчерашний день: Мурзик на пляже под палящим солнцем.", "Yesterday: Murzik on the beach under a blazing sun."),
      p("l5-1")),
    v("ptfo5-2", "Eu tomei muito sol.", t("Я слишком долго был(а) на солнце.", "I got too much sun."),
      t("Мурзик загорает, раскинув лапы, без зонтика.", "Murzik sunbathing with paws outstretched, no umbrella."),
      p("l5-2")),
    v("ptfo5-3", "Eu não passei protetor.", t("Я не намазался (не намазалась) кремом.", "I didn't put on sun cream."),
      t("Тюбик крема лежит в сумке закрытым.", "The tube of sun cream lies unopened in the bag."),
      p("l5-3")),
    v("ptfo5-4", "Eu esqueci!", t("Я забыл(а)!", "I forgot!"),
      t("Мурзик хлопает себя лапой по лбу.", "Murzik slaps his forehead with a paw."),
      p("l5-4")),
    v("ptfo5-5", "Você comprou água?", t("Ты купил(а) воды?", "Did you buy water?"),
      t("Биа держит пустую бутылку.", "Bia holds up an empty bottle."),
      p("l5-5")),
    v("ptfo5-6", "Nós andamos muito.", t("Мы много гуляли.", "We walked a lot."),
      t("Следы двух пар лап и ног на длинном пляже.", "Two sets of footprints along a long beach."),
      p("l5-6")),
    v("ptfo5-7", "Eles chegaram ontem.", t("Они приехали вчера.", "They arrived yesterday."),
      t("Туристы с чемоданами у входа в хостел.", "Tourists with suitcases at the hostel entrance."),
      p("l5-7")),
  ],
  dialogue: {
    title: t("Что было вчера", "What happened yesterday"),
    note: t(
      "Conta tudo! — «Рассказывай всё!». Por isso — «вот поэтому».",
      "Conta tudo! means “Tell me everything!”. Por isso means “that's why”.",
    ),
    lines: [
      line("bia", "Murzik, conta tudo! O que você fez ontem?", t("Мурзик, рассказывай всё! Что ты вчера делал?", "Murzik, tell me everything! What did you do yesterday?")),
      line("murzik", "Ontem eu fiquei na praia. O dia todo.", t("Вчера я был на пляже. Весь день.", "Yesterday I stayed on the beach. All day.")),
      line("bia", "E você passou protetor?", t("А кремом ты намазался?", "And did you put on sun cream?")),
      line("murzik", "Não… Eu esqueci! Eu tomei muito sol.", t("Нет… Я забыл! Я перегрелся на солнце.", "No… I forgot! I got too much sun.")),
      line("bia", "E você comprou água?", t("А воды ты купил?", "And did you buy water?")),
      line("murzik", "Não comprei. Nós andamos muito e eu esqueci de tudo!", t("Не купил. Мы много гуляли, и я обо всём забыл!", "No, I didn't. We walked a lot and I forgot everything!")),
      line("bia", "Por isso você está doente!", t("Вот поэтому ты и заболел!", "That's why you're ill!")),
    ],
    gist: choice("ptfo5-d1", t("Что Мурзик забыл сделать вчера?", "What did Murzik forget to do yesterday?"), [
      [t("Намазаться кремом и купить воды.", "Put on sun cream and buy water."), true],
      [t("Позвонить доне Лусии.", "Call Dona Lúcia."), false],
      [t("Пообедать.", "Have lunch."), false],
    ]),
  },
  grammar: [
    g(
      t("Прошедшее время: глаголы на -ar", "The past: -ar verbs"),
      [
        t(
          "Окончания: eu -ei (fiquei, tomei, comprei), você / ele -ou (ficou, tomou, comprou), nós -amos (ficamos), eles -aram (ficaram). Ты уже встречал(а) их: andei, gritou, salvou.",
          "Endings: eu -ei (fiquei, tomei, comprei), você / ele -ou (ficou, tomou, comprou), nós -amos (ficamos), eles -aram (ficaram). You've already met some: andei, gritou, salvou.",
        ),
        t(
          "Это время отвечает и на «что сделал?», и на «что делал?»: Ontem eu fiquei na praia — «вчера я был на пляже».",
          "This one past tense covers both “I did” and “I've done”: Ontem eu fiquei na praia — Yesterday I stayed on the beach.",
        ),
      ],
      [
        ["Ontem eu comprei um chapéu.", t("Вчера я купил(а) шляпу.", "Yesterday I bought a hat.")],
        ["Eles chegaram de manhã.", t("Они приехали утром.", "They arrived in the morning.")],
      ],
    ),
  ],
  tasks: [
    choice("ptfo5-t1", t("Как сказать «Вчера я купил(а) воду»?", "How do you say “Yesterday I bought water”?"), [
      ["Ontem eu comprei água.", true],
      ["Ontem eu comprou água.", false],
      ["Ontem eu compro água.", false],
    ], { skill: "grammar" }),
    listen("ptfo5-t2", t("Послушай. Где был человек вчера?", "Listen. Where was the person yesterday?"), "Ontem eu fiquei em casa.", [
      [t("Дома.", "At home."), true],
      [t("На пляже.", "On the beach."), false],
      [t("У врача.", "At the doctor's."), false],
    ]),
    match("ptfo5-t3", PAIRS, [
      ["fiquei", t("я остался / осталась", "I stayed")],
      ["comprei", t("я купил(а)", "I bought")],
      ["esqueci", t("я забыл(а)", "I forgot")],
      ["chegaram", t("они приехали", "they arrived")],
    ], { skill: "words" }),
    spell("ptfo5-t4", t("Собери из букв слово «вчера».", "Spell the word for “yesterday”."), "ontem"),
    speak("ptfo5-t5", "O que você fez ontem?", "Ontem eu fiquei em casa e estudei português.", t("Вчера я был(а) дома и занимался(-лась) португальским.", "Yesterday I stayed at home and studied Portuguese."), {
      help: t("Расскажи вслух, что ты делал(а) вчера.", "Say aloud what you did yesterday."),
    }),
    choice("ptfo5-t6", t("Как спросить в аптеке «Нужен рецепт?»", "How do you ask at the pharmacy “Do I need a prescription?”"), [
      ["Precisa de receita?", true],
      ["Tem receita de bolo?", false],
      ["Quantos comprimidos?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sunhat",
    itemName: t("Панама от солнца", "Sun hat"),
    itemNameRu: "Chapéu de sol",
    ru: "Oba! Um chapéu de sol!",
    en: t("Ура! Панама!", "Hooray! A sun hat!"),
    a11y: t("На крючке висит белая панама с широкими полями.", "A white wide-brimmed sun hat hangs on a hook."),
    image: p("sunhat"),
    steps: [
      t("Биа покупает Мурзику панаму с широкими полями.", "Bia buys Murzik a wide-brimmed sun hat."),
      t("«Sem chapéu, nada de praia!» — «Без панамы — никакого пляжа!»", "“Sem chapéu, nada de praia!” — “No hat, no beach!”"),
      t("Мурзик послушно кивает.", "Murzik nods obediently."),
      t("Панама висит у двери.", "The hat hangs by the door."),
    ],
    bridge: t("Вечером в хостеле все рассказывают, кто что ел и где был.", "In the evening at the hostel everyone swaps stories about what they ate and where they went."),
  },
};

const fo6: Lesson = {
  id: "pt-a1-fortaleza-6",
  level: "A1",
  cityId: "pt-fortaleza",
  number: 6,
  title: t("Nós comemos, eu dormi — Мы ели, я спал", "Nós comemos, eu dormi — We ate, I slept"),
  minutes: 7,
  goals: [
    t("Прошедшее время глаголов на -er и -ir", "The past tense of -er and -ir verbs"),
    t("Спросить, как спалось", "Ask how someone slept"),
    t("Рассказать о вчерашнем вечере", "Talk about last night"),
  ],
  vocabNote: t(
    "Jangada — плот с треугольным парусом, лодка рыбаков Сеары. Água de coco — кокосовая вода, её пьют прямо из ореха.",
    "A jangada is a raft with a triangular sail — the traditional fishing boat of Ceará. Água de coco is coconut water, drunk straight from the nut.",
  ),
  vocab: [
    v("ptfo6-1", "Nós comemos peixe.", t("Мы ели рыбу.", "We ate fish."),
      t("Тарелка с жареной рыбой и рисом на столике у моря.", "A plate of fried fish and rice on a table by the sea."),
      p("l6-1")),
    v("ptfo6-2", "Eu bebi água de coco.", t("Я пил(а) кокосовую воду.", "I drank coconut water."),
      t("Мурзик пьёт через трубочку прямо из зелёного кокоса.", "Murzik sips through a straw straight from a green coconut."),
      p("l6-2")),
    v("ptfo6-3", "Você dormiu bem?", t("Ты хорошо спал(а)?", "Did you sleep well?"),
      t("Биа утром заглядывает в комнату.", "Bia peeks into the room in the morning."),
      p("l6-3")),
    v("ptfo6-4", "Eu dormi mal.", t("Я плохо спал(а).", "I slept badly."),
      t("Растрёпанный Мурзик с кругами под глазами.", "A rumpled Murzik with rings under his eyes."),
      p("l6-4")),
    v("ptfo6-5", "Ele abriu a janela.", t("Он открыл окно.", "He opened the window."),
      t("Мурзик распахивает окно, впуская морской ветер.", "Murzik throws open the window, letting in the sea breeze."),
      p("l6-5")),
    v("ptfo6-6", "Eles saíram cedo.", t("Они ушли рано.", "They left early."),
      t("Рыбаки на рассвете выталкивают плоты в море.", "Fishermen push their rafts out to sea at dawn."),
      p("l6-6")),
    v("ptfo6-7", "Eu vi as jangadas.", t("Я видел(а) рыбацкие плоты.", "I saw the fishing rafts."),
      t("На горизонте белые треугольные паруса.", "White triangular sails on the horizon."),
      p("l6-7")),
  ],
  dialogue: {
    title: t("Утро после болезни", "The morning after"),
    note: t(
      "Calor — «жара». De madrugada — «на рассвете, рано-рано утром». Pescadores — «рыбаки».",
      "Calor means “heat”. De madrugada means “in the early hours”. Pescadores means “fishermen”.",
    ),
    lines: [
      line("bia", "Bom dia! Você dormiu bem?", t("Доброе утро! Хорошо спал?", "Good morning! Did you sleep well?")),
      line("murzik", "Eu dormi mal. Calor! Eu abri a janela de madrugada.", t("Плохо. Жарко! Я открыл окно на рассвете.", "Badly. It was so hot! I opened the window in the early hours.")),
      line("murzik", "E eu vi as jangadas! Os pescadores saíram cedo.", t("И я видел рыбацкие плоты! Рыбаки вышли рано.", "And I saw the fishing rafts! The fishermen went out early.")),
      line("bia", "E ontem à noite? Você comeu?", t("А вчера вечером? Ты поел?", "And last night? Did you eat?")),
      line("murzik", "Comi! Nós comemos peixe com o Pipoca… não, com o pessoal do hostel.", t("Поел! Мы ели рыбу с Пипокой… то есть с ребятами из хостела.", "I did! We ate fish with Pipoca… I mean, with the people at the hostel.")),
      line("murzik", "E eu bebi muita água de coco, como o doutor falou.", t("И я пил много кокосовой воды, как сказал доктор.", "And I drank lots of coconut water, like the doctor said.")),
    ],
    gist: choice("ptfo6-d1", t("Почему Мурзик плохо спал?", "Why did Murzik sleep badly?"), [
      [t("Было жарко.", "It was hot."), true],
      [t("Было шумно.", "It was noisy."), false],
      [t("Болела голова.", "He had a headache."), false],
    ]),
  },
  grammar: [
    g(
      t("Прошедшее время: глаголы на -er и -ir", "The past: -er and -ir verbs"),
      [
        t(
          "На -er: eu comi, você / ele comeu, nós comemos, eles comeram. На -ir: eu dormi, você / ele dormiu, nós dormimos, eles dormiram. У «я» в обоих случаях -i.",
          "-er verbs: eu comi, você / ele comeu, nós comemos, eles comeram. -ir verbs: eu dormi, você / ele dormiu, nós dormimos, eles dormiram. Both have -i for “I”.",
        ),
        t(
          "Неправильные: ver — eu vi, ele viu; fazer — eu fiz, ele fez; ir и ser — eu fui, ele foi. Их встречаем часто, запоминаем постепенно.",
          "Some common ones are irregular: ver — eu vi, ele viu; fazer — eu fiz, ele fez; ir and ser — eu fui, ele foi. Learn them gradually.",
        ),
      ],
      [
        ["Eu comi muito ontem.", t("Вчера я много съел(а).", "I ate a lot yesterday.")],
        ["Ela abriu a porta.", t("Она открыла дверь.", "She opened the door.")],
      ],
    ),
  ],
  tasks: [
    choice("ptfo6-t1", t("Как сказать «Вчера я плохо спал(а)»?", "How do you say “Yesterday I slept badly”?"), [
      ["Ontem eu dormi mal.", true],
      ["Ontem eu dormiu mal.", false],
      ["Ontem eu durmo mal.", false],
    ], { skill: "grammar" }),
    listen("ptfo6-t2", t("Послушай. Что пил человек?", "Listen. What did the person drink?"), "Eu bebi água de coco.", [
      [t("Кокосовую воду.", "Coconut water."), true],
      [t("Сок манго.", "Mango juice."), false],
      [t("Кофе.", "Coffee."), false],
    ]),
    match("ptfo6-t3", PAIRS, [
      ["comi", t("я поел(а)", "I ate")],
      ["bebi", t("я выпил(а)", "I drank")],
      ["dormi", t("я спал(а)", "I slept")],
      ["vi", t("я видел(а)", "I saw")],
    ], { skill: "words" }),
    missing("ptfo6-t4", t("Какой буквы не хватает? («плот»)", "Which letter is missing? (“raft”)"), "jan", "ada", "g", ["g", "j", "c"]),
    speak("ptfo6-t5", "Você dormiu bem?", "Dormi bem, obrigado! E você?", t("Хорошо, спасибо! А ты?", "Yes, thanks! And you?"), {
      help: t("Ответь вслух. Можно obrigado или obrigada.", "Answer aloud — obrigado or obrigada."),
    }),
    choice("ptfo6-t6", t("Как сказать «Я забыл(а)!»?", "How do you say “I forgot!”?"), [
      ["Eu esqueci!", true],
      ["Eu esqueço ontem!", false],
      ["Eu esqueceu!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "jangada",
    itemName: t("Деревянный плот с парусом", "Little wooden raft"),
    itemNameRu: "Jangadinha",
    ru: "Oba! Uma jangadinha!",
    en: t("Ура! Плотик!", "Hooray! A little raft!"),
    a11y: t("На полке стоит маленький деревянный плот с белым треугольным парусом.", "A small wooden raft with a white triangular sail stands on the shelf."),
    image: p("jangada"),
    steps: [
      t("Утром на пляже старый рыбак чинит сети.", "In the morning an old fisherman is mending nets on the beach."),
      t("Он дарит Мурзику маленький плотик.", "He gives Murzik a little model raft."),
      t("«Igual ao meu!» — «Точь-в-точь как мой!»", "“Igual ao meu!” — “Just like mine!”"),
      t("Плотик стоит на полке.", "The raft stands on the shelf."),
    ],
    bridge: t("Доктор Паулу заходит проведать Мурзика. И рассказывает кое-что очень интересное.", "Dr Paulo drops in to see how Murzik is. And he has something very interesting to tell them."),
  },
};

const fo7: Lesson = {
  id: "pt-a1-fortaleza-7",
  level: "A1",
  cityId: "pt-fortaleza",
  number: 7,
  title: t("Estou com calor! — Мне жарко!", "Estou com calor! — I'm so hot!"),
  minutes: 8,
  goals: [
    t("Понять, что рассказывают о Пипоке", "Understand what people say about Pipoca"),
    t("Сказать «береги себя»", "Say “take care”"),
    t("Вспомнить все слова Форталезы", "Review all the words from Fortaleza"),
  ],
  vocabNote: t(
    "Estou com calor — «мне жарко» (как estou com frio). А faz calor — «на улице жарко».",
    "Estou com calor means “I feel hot” (like estou com frio). Faz calor means “it's hot (outside)”.",
  ),
  vocab: [
    v("ptfo7-1", "Estou com calor!", t("Мне жарко!", "I'm so hot!"),
      t("Зелёный попугай с раскрытым клювом сидит под струёй вентилятора.", "The green parrot sits beak open in front of a fan."),
      p("l7-1")),
    v("ptfo7-2", "Ele tomou sol demais.", t("Он перегрелся на солнце.", "He got far too much sun."),
      t("Попугай на крыше автобуса под палящим солнцем.", "The parrot on the roof of a bus under the blazing sun."),
      p("l7-2")),
    v("ptfo7-3", "Eu dei água para ele.", t("Я дал ему воды.", "I gave him some water."),
      t("Доктор Паулу поит попугая из ложечки.", "Dr Paulo gives the parrot water from a little spoon."),
      p("l7-3")),
    v("ptfo7-4", "Agora ele está bem.", t("Теперь с ним всё хорошо.", "He's fine now."),
      t("Бодрый попугай машет крыльями.", "A lively parrot flapping his wings."),
      p("l7-4")),
    v("ptfo7-5", "Eles foram para Manaus.", t("Они уехали в Манаус.", "They've gone to Manaus."),
      t("Карта: стрелка далеко на запад, в зелёные леса Амазонии.", "A map: an arrow far to the west, into the green Amazon forest."),
      p("l7-5")),
    v("ptfo7-6", "a floresta amazônica", t("амазонские леса", "the Amazon rainforest"),
      t("Маленькая картинка: бескрайний зелёный лес и широкая река.", "A little picture: endless green forest and a wide river."),
      p("l7-6")),
    v("ptfo7-7", "Cuide-se!", t("Береги себя!", "Take care!"),
      t("Доктор Паулу пожимает Мурзику лапу у двери.", "Dr Paulo shakes Murzik's paw at the door."),
      p("l7-7")),
  ],
  dialogue: {
    title: t("Что сказал попугай", "What the parrot said"),
    note: t(
      "Paciente — «пациент». Igualzinho — «точь-в-точь такой же». Cuide-se — «берегите себя».",
      "Paciente means “patient”. Igualzinho means “exactly the same”. Cuide-se means “take care of yourself”.",
    ),
    lines: [
      line("paulo", "Murzik, você não é o meu primeiro paciente queimado de sol!", t("Мурзик, ты не первый мой пациент, который обгорел на солнце!", "Murzik, you're not my first sunburnt patient!")),
      line("murzik", "Como assim?", t("Как это?", "What do you mean?")),
      line("paulo", "Ontem a banda trouxe um papagaio verde. Ele tomou sol demais!", t("Вчера группа принесла зелёного попугая. Он перегрелся на солнце!", "Yesterday the band brought in a green parrot. He'd had far too much sun!")),
      line("bia", "O Pipoca! E o que ele disse?", t("Пипока! И что он говорил?", "Pipoca! And what did he say?")),
      line("paulo", "Ele disse: Estou com calor! Estou com calor! Igualzinho a você, Murzik!", t("Он говорил: «Мне жарко! Мне жарко!» Точь-в-точь как ты, Мурзик!", "He said: I'm so hot! I'm so hot! Exactly like you, Murzik!")),
      line("paulo", "Eu dei água para ele. Agora ele está bem. Eles foram para Manaus.", t("Я дал ему воды. Теперь с ним всё хорошо. Они уехали в Манаус.", "I gave him water. He's fine now. They've gone to Manaus.")),
      line("murzik", "Obrigado, doutor! — Cuide-se, Murzik!", t("Спасибо, доктор! — Береги себя, Мурзик!", "Thank you, doctor! — Take care, Murzik!")),
    ],
    gist: choice("ptfo7-d1", t("Какую фразу выучил Пипока в Форталезе?", "What phrase did Pipoca learn in Fortaleza?"), [
      [t("«Мне жарко!»", "“I'm so hot!”"), true],
      [t("«Где болит?»", "“Where does it hurt?”"), false],
      [t("«Выздоравливай!»", "“Get well soon!”"), false],
    ]),
  },
  grammar: [
    g(
      t("Мне, ему, ей: para mim, para ele", "To me, to him: para mim, para ele"),
      [
        t(
          "«Дать кому-то» — dar para + человек: Eu dei água para ele — «я дал ему воды». Para mim — «мне», para você — «тебе», para ela — «ей».",
          "“Give something to someone” is dar … para + person: Eu dei água para ele (I gave him water). Para mim (to me), para você (to you), para ela (to her).",
        ),
        t(
          "Eu dei — «я дал(а)», от dar. Неправильная, но очень частая форма.",
          "Eu dei (I gave) is from dar — irregular, but very common.",
        ),
      ],
      [
        ["Ela deu um presente para mim.", t("Она подарила мне подарок.", "She gave me a present.")],
        ["Eu dei o mapa para você.", t("Я дал(а) тебе карту.", "I gave you the map.")],
      ],
    ),
  ],
  tasks: [
    listen("ptfo7-t1", t("Аудиоэкзамен. Что рассказывает доктор Паулу?", "Audio exam. What does Dr Paulo tell them?"), "O papagaio tomou sol demais e disse: Estou com calor! Agora ele está bem. A banda foi para Manaus.", [
      [t("Попугай перегрелся, но поправился, а группа уехала в Манаус.", "The parrot overheated but recovered, and the band went to Manaus."), true],
      [t("Попугай остался в больнице.", "The parrot stayed in hospital."), false],
      [t("Группа вернулась в Рио.", "The band went back to Rio."), false],
    ]),
    choice("ptfo7-t2", t("Как сказать «Береги себя!»?", "How do you say “Take care!”?"), [
      ["Cuide-se!", true],
      ["Melhorou?", false],
      ["Descanse!", false],
    ], { skill: "words" }),
    build("ptfo7-t3", t("Собери фразу: «Я дал ему воды».", "Build the sentence: “I gave him some water”."), ["Eu", "dei", "água", "para", "ele."]),
    missing("ptfo7-t4", t("Какой буквы не хватает? («жара»)", "Which letter is missing? (“heat”)"), "ca", "or", "l", ["l", "u", "r"]),
    speak("ptfo7-t5", "Cuide-se! Boa sorte!", "Obrigado, doutor! Tchau!", t("Спасибо, доктор! Пока!", "Thank you, doctor! Bye!"), {
      help: t("Попрощайся вслух. Можно obrigado или obrigada.", "Say goodbye aloud — obrigado or obrigada."),
    }),
    script("ptfo7-t6", t("Вспомни всю Форталезу. Закончи разговор с доктором Паулу.", "Remember all of Fortaleza. Finish the conversation with Dr Paulo."), [
      { speaker: PAULO, text: "Bom dia! O que você tem?" },
      { speaker: YOU, answer: "Estou com dor de cabeça e com febre.", options: ["Estou com dor de cabeça e com febre.", "Sou dor de cabeça.", "Eu vi as jangadas."] },
      { speaker: PAULO, text: "O que você fez ontem?" },
      { speaker: YOU, answer: "Eu fiquei na praia o dia todo.", options: ["Eu fiquei na praia o dia todo.", "Eu fico na praia amanhã.", "Doem os pés."] },
      { speaker: PAULO, text: "Não é grave. Tome este remédio e beba muita água." },
      { speaker: YOU, answer: "Obrigado, doutor!", options: ["Obrigado, doutor!", "Precisa de receita?", "Eu esqueci!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-fortaleza",
    itemName: t("Фото Пипоки у вентилятора", "Photo of Pipoca by the fan"),
    itemNameRu: "Foto do Pipoca no consultório",
    ru: "Oba! Mais uma foto do Pipoca!",
    en: t("Ура! Ещё одно фото Пипоки!", "Hooray! Another photo of Pipoca!"),
    a11y: t(
      "Фото: зелёный попугай в кабинете врача сидит перед вентилятором, перья раздуваются, рядом улыбается доктор Паулу.",
      "A photo: the green parrot in the doctor's office in front of a fan, feathers ruffled, with Dr Paulo smiling beside him.",
    ),
    image: p("photo"),
    steps: [
      t("У доктора Паулу есть фото его необычного пациента.", "Dr Paulo has a photo of his unusual patient."),
      t("Пипока у вентилятора, перья дыбом!", "Pipoca in front of the fan, feathers flying!"),
      t("«Um paciente muito falante!» — «Очень разговорчивый пациент!»", "“Um paciente muito falante!” — “A very chatty patient!”"),
      t("Подпись: «Estou com calor!» Фото — в альбом.", "Caption: “Estou com calor!” Into the album it goes."),
    ],
    bridge: t("Самолёт летит на запад, через всю страну, к самой большой реке в мире.", "A plane flies west, right across the country, to the biggest river in the world."),
  },
};

const story: CityStory = {
  home: {
    name: t("Кровать в хостеле у пляжа", "A bed at a beach hostel"),
    nameRu: "A cama no hostel da praia",
    image: p("home"),
    a11y: t(
      "Светлая комната в хостеле у моря: белые стены, гамак у окна, за окном пляж и паруса. На кровати — чемодан Мурзика.",
      "A bright hostel room by the sea: white walls, a hammock by the window, and the beach and sails outside. Murzik's suitcase is on the bed.",
    ),
  },
  keepsakeId: "photo-fortaleza",
  welcomeRu: "Olá, Fortaleza!",
  welcomeEn: t("Привет, Форталеза!", "Hello, Fortaleza!"),
  welcomeImage: p("arrival"),
  welcomeA11y: t(
    "Длинный городской пляж под палящим солнцем, белые паруса рыбацких лодок, высокие дома вдоль набережной.",
    "A long city beach under a blazing sun, the white sails of fishing boats and tall buildings along the seafront.",
  ),
  departureImage: p("departure"),
  departureA11y: t("Доктор Паулу машет у дверей своего кабинета.", "Dr Paulo waves from the door of his surgery."),
  finale: [
    {
      image: p("photo"),
      a11y: t("Мурзик вклеивает в альбом фото Пипоки у вентилятора.", "Murzik sticks the photo of Pipoca by the fan into the album."),
      lines: [
        { en: t("Двенадцатая страница альбома: Пипока у доктора.", "Page twelve of the album: Pipoca at the doctor's.") },
        { ru: "Estou com calor!", en: t("Мне жарко!", "I'm so hot!") },
        { en: t("Хорошо, что с Пипокой всё в порядке. И с Мурзиком тоже.", "Thank goodness Pipoca is all right. And so is Murzik.") },
      ],
    },
    {
      image: img.greet,
      a11y: t("Мурзик радостно подпрыгивает.", "Murzik jumps for joy."),
      lines: [
        { ru: "Fortaleza completa!", en: t("Форталеза пройдена!", "Fortaleza complete!") },
        { en: t("7 / 7 уроков", "7 / 7 lessons") },
      ],
    },
    {
      image: p("departure"),
      a11y: t("Доктор Паулу машет на прощание.", "Dr Paulo waves goodbye."),
      lines: [
        { ru: "Tchau, doutor Paulo!", en: t("Пока, доктор Паулу!", "Bye, Dr Paulo!") },
        { ru: "Próxima parada: Manaus!", en: t("Следующая остановка: Манаус!", "Next stop: Manaus!") },
      ],
    },
    {
      image: p("plane"),
      a11y: t("Самолёт летит над бескрайним зелёным лесом и петляющей рекой.", "A plane flies over endless green forest and a winding river."),
      lines: [{ ru: "Fortaleza → Manaus", en: t("Форталеза → Манаус", "Fortaleza → Manaus") }],
    },
    {
      image: pic("pt/manaus/arrival"),
      a11y: t(
        "Широкая тёмная река, на берегу город и старинный оперный театр с цветным куполом. У причала — белые двухпалубные речные теплоходы.",
        "A wide dark river; on the bank a city and an old opera house with a colourful dome. White two-deck riverboats at the quay.",
      ),
      lines: [
        { ru: "Olá, Manaus!", en: t("Привет, Манаус!", "Hello, Manaus!") },
        { ru: "Que rio enorme!", en: t("Какая огромная река!", "What a huge river!") },
      ],
    },
  ],
};

export const ptFortaleza = {
  id: "pt-fortaleza",
  name: t("Форталеза", "Fortaleza"),
  namePt: "Fortaleza",
  lessons: [fo1, fo2, fo3, fo4, fo5, fo6, fo7],
  story,
};
