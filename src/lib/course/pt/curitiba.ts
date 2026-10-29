import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { PAIRS, YOU, build, choice, g, line, listen, match, missing, script, speak, spell, t, tf, v } from "./make";

/* Куритиба · «Погода и одежда» · Холодный юг. Хостел Габриэла, погода, одежда и цвета, глагол estar, ботанический сад, уменьшительные -inho. Пипока выучил «Que frio!». */

const p = (name: string) => pic(`pt/curitiba/${name}`);
const GABRIEL = t("Габриэл", "Gabriel");

const cu1: Lesson = {
  id: "pt-a1-curitiba-1",
  level: "A1",
  cityId: "pt-curitiba",
  number: 1,
  title: t("O tempo — Погода", "O tempo — The weather"),
  minutes: 7,
  goals: [
    t("Спросить, какая погода", "Ask what the weather is like"),
    t("Сказать: холодно, жарко, дождь, солнце", "Say it's cold, hot, rainy or sunny"),
    t("Назвать температуру", "Say the temperature"),
  ],
  vocabNote: t(
    "Куритиба — один из самых холодных больших городов Бразилии. Зимой тут бывает +5, и бразильцы из Рио считают это настоящим морозом.",
    "Curitiba is one of Brazil's coldest big cities. In winter it can drop to 5 °C — which people from Rio consider a real freeze.",
  ),
  vocab: [
    v("ptcu1-1", "Como está o tempo?", t("Какая погода?", "What's the weather like?"),
      t("Мурзик выглядывает в окно, за окном серое небо.", "Murzik peers out of the window at a grey sky."),
      p("l1-1")),
    v("ptcu1-2", "Está frio.", t("Холодно.", "It's cold."),
      t("Мурзик дрожит, обхватив себя лапами.", "Murzik shivers, hugging himself."),
      p("l1-2")),
    v("ptcu1-3", "Faz calor.", t("Жарко.", "It's hot."),
      t("Мурзик на пляже обмахивается листом пальмы.", "Murzik on a beach, fanning himself with a palm leaf."),
      p("l1-3")),
    v("ptcu1-4", "Está chovendo.", t("Идёт дождь.", "It's raining."),
      t("Капли дождя стучат по стеклу.", "Raindrops patter against the window."),
      p("l1-4")),
    v("ptcu1-5", "Está nublado.", t("Облачно.", "It's cloudy."),
      t("Над городом тяжёлые серые тучи.", "Heavy grey clouds over the city."),
      p("l1-5")),
    v("ptcu1-6", "Faz sol.", t("Солнечно.", "It's sunny."),
      t("Из-за туч выглядывает солнце.", "The sun peeks out from behind the clouds."),
      p("l1-6")),
    v("ptcu1-7", "Hoje faz dez graus.", t("Сегодня десять градусов.", "It's ten degrees today."),
      t("Уличный термометр показывает +10.", "A street thermometer shows 10 °C."),
      p("l1-7")),
  ],
  dialogue: {
    title: t("Утро в хостеле", "Morning at the hostel"),
    note: t(
      "Só — «всего, только». Graus — «градусы». Calma! — «Спокойно, не волнуйся!»",
      "Só means “only, just”. Graus means “degrees”. Calma! means “Don't worry!”",
    ),
    lines: [
      line("gabriel", "Bom dia! Bem-vindos a Curitiba!", t("Доброе утро! Добро пожаловать в Куритибу!", "Good morning! Welcome to Curitiba!")),
      line("murzik", "Bom dia! Como está o tempo?", t("Доброе утро! Какая сегодня погода?", "Good morning! What's the weather like?")),
      line("gabriel", "Está frio e nublado. Hoje faz só dez graus.", t("Холодно и облачно. Сегодня всего десять градусов.", "It's cold and cloudy. Only ten degrees today.")),
      line("bia", "Dez graus? No Rio faz trinta!", t("Десять градусов? В Рио сейчас тридцать!", "Ten degrees? It's thirty in Rio!")),
      line("murzik", "E está chovendo…", t("И идёт дождь…", "And it's raining…")),
      line("gabriel", "Calma! À tarde faz sol.", t("Спокойно! После обеда будет солнце.", "Don't worry! It'll be sunny this afternoon.")),
    ],
    gist: choice("ptcu1-d1", t("Какая погода утром в Куритибе?", "What's the weather like in Curitiba this morning?"), [
      [t("Холодно, облачно и дождь.", "Cold, cloudy and rainy."), true],
      [t("Жарко и солнечно.", "Hot and sunny."), false],
      [t("Тридцать градусов.", "Thirty degrees."), false],
    ]),
  },
  grammar: [
    g(
      t("Погода: está и faz", "Weather: está and faz"),
      [
        t(
          "О погоде говорят двумя способами: está frio или faz frio — оба значат «холодно». Faz буквально — «делает». Для дождя — está chovendo, «идёт дождь» (прямо сейчас).",
          "Portuguese talks about weather with two verbs: está frio or faz frio — both mean “it's cold”. Faz literally means “makes”. For rain: está chovendo — “it's raining” (right now).",
        ),
        t(
          "Как в русском, «оно» не говорят: просто Está frio. — «Холодно».",
          "There's no word for “it”: just Está frio — “(It) is cold”. The verb does all the work.",
        ),
      ],
      [
        ["Hoje faz sol.", t("Сегодня солнечно.", "It's sunny today.")],
        ["Está chovendo no Rio.", t("В Рио идёт дождь.", "It's raining in Rio.")],
      ],
    ),
  ],
  tasks: [
    choice("ptcu1-t1", t("Как сказать «Идёт дождь»?", "How do you say “It's raining”?"), [
      ["Está chovendo.", true],
      ["É chovendo.", false],
      ["Faz chuva está.", false],
    ], { skill: "grammar" }),
    listen("ptcu1-t2", t("Послушай. Какая погода?", "Listen. What's the weather like?"), "Hoje faz sol e faz calor.", [
      [t("Солнечно и жарко.", "Sunny and hot."), true],
      [t("Холодно и облачно.", "Cold and cloudy."), false],
      [t("Идёт дождь.", "It's raining."), false],
    ]),
    match("ptcu1-t3", PAIRS, [
      ["Está frio.", t("Холодно.", "It's cold.")],
      ["Faz calor.", t("Жарко.", "It's hot.")],
      ["Está nublado.", t("Облачно.", "It's cloudy.")],
      ["Faz sol.", t("Солнечно.", "It's sunny.")],
    ], { skill: "words" }),
    spell("ptcu1-t4", t("Собери из букв слово «холодный».", "Spell the word for “cold”."), "frio"),
    speak("ptcu1-t5", "Como está o tempo hoje?", "Hoje está frio e está chovendo.", t("Сегодня холодно и идёт дождь.", "Today it's cold and raining."), {
      help: t("Расскажи вслух, какая погода у тебя за окном.", "Say aloud what the weather is like where you are."),
    }),
    choice("ptcu1-t6", t("Как сказать «Удачи!»?", "How do you say “Good luck!”?"), [
      ["Boa sorte!", true],
      ["Boa tarde!", false],
      ["Até logo!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "blanket",
    itemName: t("Шерстяное одеяло", "Wool blanket"),
    itemNameRu: "Cobertor",
    ru: "Oba! Um cobertor!",
    en: t("Ура! Одеяло!", "Hooray! A blanket!"),
    a11y: t("На верхней полке двухъярусной кровати — толстое клетчатое шерстяное одеяло.", "A thick checked wool blanket on the top bunk."),
    image: p("blanket"),
    steps: [
      t("Мурзик дрожит в своей кровати.", "Murzik is shivering in his bunk."),
      t("Габриэл приносит толстое одеяло.", "Gabriel brings a thick blanket."),
      t("«Aqui no Sul a gente precisa disso!» — «Здесь, на юге, без этого никак!»", "“Aqui no Sul a gente precisa disso!” — “Down here in the South, you need one of these!”"),
      t("Мурзик заворачивается в одеяло. Тепло!", "Murzik wraps himself up. Warm at last!"),
    ],
    bridge: t("В одном одеяле по городу не пойдёшь. Нужна тёплая одежда.", "You can't go out in a blanket. Murzik needs some warm clothes."),
  },
};

const cu2: Lesson = {
  id: "pt-a1-curitiba-2",
  level: "A1",
  cityId: "pt-curitiba",
  number: 2,
  title: t("As roupas — Одежда", "As roupas — Clothes"),
  minutes: 7,
  goals: [
    t("Назвать тёплую одежду", "Name warm clothes"),
    t("Сказать «мне нужно…»", "Say “I need…”"),
    t("Похвалить одежду", "Compliment someone's clothes"),
  ],
  vocabNote: t(
    "Blusa в Бразилии — это кофта или свитер, а не обязательно женская блузка. Cachecol — шарф.",
    "In Brazil a blusa is a jumper or sweater — not necessarily a blouse. Cachecol means “scarf”.",
  ),
  vocab: [
    v("ptcu2-1", "o casaco", t("куртка, пальто", "the coat"),
      t("На вешалке висит тёплая синяя куртка.", "A warm blue coat hangs on a peg."),
      p("l2-1")),
    v("ptcu2-2", "o cachecol", t("шарф", "the scarf"),
      t("Длинный полосатый шарф.", "A long striped scarf."),
      p("l2-2")),
    v("ptcu2-3", "o gorro", t("шапка", "the woolly hat"),
      t("Вязаная шапка с помпоном.", "A knitted hat with a bobble."),
      p("l2-3")),
    v("ptcu2-4", "as luvas", t("перчатки", "the gloves"),
      t("Пара маленьких вязаных перчаток.", "A pair of small knitted gloves."),
      p("l2-4")),
    v("ptcu2-5", "Eu preciso de uma blusa.", t("Мне нужна кофта.", "I need a jumper."),
      t("Мурзик в одной футболке ёжится у витрины магазина.", "Murzik, in just a T-shirt, huddles outside a shop window."),
      p("l2-5")),
    v("ptcu2-6", "Vista o casaco!", t("Надень куртку!", "Put your coat on!"),
      t("Биа строго протягивает Мурзику куртку.", "Bia sternly holds out a coat to Murzik."),
      p("l2-6")),
    v("ptcu2-7", "Que roupa bonita!", t("Какая красивая одежда!", "What lovely clothes!"),
      t("Мурзик красуется перед зеркалом в шапке и шарфе.", "Murzik shows off in front of the mirror in his hat and scarf."),
      p("l2-7")),
  ],
  dialogue: {
    title: t("Магазин тёплой одежды", "The warm-clothes shop"),
    note: t(
      "Tudo isso — «всё это». Agora sim! — «Вот теперь другое дело!»",
      "Tudo isso means “all of this”. Agora sim! means “Now that's more like it!”",
    ),
    lines: [
      line("bia", "Murzik, você está de camiseta? Vista o casaco!", t("Мурзик, ты в футболке? Надень куртку!", "Murzik, you're in a T-shirt? Put your coat on!")),
      line("murzik", "O casaco do Marcos é muito leve… Eu preciso de uma blusa.", t("Куртка Маркуса совсем лёгкая… Мне нужна кофта.", "Marcos's coat is really thin… I need a jumper.")),
      line("seller", "Bom dia! Temos casacos, gorros e luvas.", t("Доброе утро! У нас есть куртки, шапки и перчатки.", "Good morning! We have coats, hats and gloves.")),
      line("murzik", "Eu preciso de tudo isso!", t("Мне нужно всё это!", "I need all of it!")),
      line("seller", "E um cachecol?", t("И шарф?", "And a scarf?")),
      line("murzik", "Sim! Agora sim!", t("Да! Вот теперь другое дело!", "Yes! Now that's more like it!")),
      line("bia", "Que roupa bonita, Murzik!", t("Какой ты нарядный, Мурзик!", "Looking good, Murzik!")),
    ],
    gist: choice("ptcu2-d1", t("Почему Мурзику нужна одежда?", "Why does Murzik need clothes?"), [
      [t("Его куртка слишком лёгкая, а на улице холодно.", "His coat is too thin, and it's cold out."), true],
      [t("Он идёт на праздник.", "He's going to a party."), false],
      [t("Его одежда промокла.", "His clothes got wet."), false],
    ]),
  },
  grammar: [
    g(
      t("Мне нужно: preciso de", "“I need”: preciso de"),
      [
        t(
          "«Мне нужно» по-португальски — eu preciso de, буквально «я нуждаюсь в». После preciso обязательно de: Eu preciso de um casaco. А de + o, de + a, как всегда, сливаются: Eu preciso do bilhete.",
          "“I need” is eu preciso de — always with de after it: Eu preciso de um casaco. And as always, de joins with “the”: Eu preciso do bilhete (I need the ticket).",
        ),
        t(
          "Estar de — «быть в (одежде)»: Você está de camiseta? — Ты в футболке?",
          "Estar de means “to be wearing”: Você está de camiseta? — Are you in a T-shirt?",
        ),
      ],
      [
        ["Eu preciso de luvas.", t("Мне нужны перчатки.", "I need gloves.")],
        ["Você precisa de um gorro.", t("Тебе нужна шапка.", "You need a hat.")],
      ],
    ),
  ],
  tasks: [
    choice("ptcu2-t1", t("Как сказать «Мне нужен шарф»?", "How do you say “I need a scarf”?"), [
      ["Eu preciso de um cachecol.", true],
      ["Eu preciso um cachecol de.", false],
      ["Eu sou um cachecol.", false],
    ], { skill: "grammar" }),
    listen("ptcu2-t2", t("Послушай. Что нужно надеть?", "Listen. What should he put on?"), "Vista o casaco!", [
      [t("Куртку.", "A coat."), true],
      [t("Шапку.", "A hat."), false],
      [t("Перчатки.", "Gloves."), false],
    ]),
    match("ptcu2-t3", PAIRS, [
      ["o casaco", t("куртка", "the coat")],
      ["o gorro", t("шапка", "the hat")],
      ["as luvas", t("перчатки", "the gloves")],
      ["o cachecol", t("шарф", "the scarf")],
    ], { skill: "words" }),
    missing("ptcu2-t4", t("Какой буквы не хватает? («шарф»)", "Which letter is missing? (“scarf”)"), "cache", "ol", "c", ["c", "s", "q"]),
    speak("ptcu2-t5", "Está frio! Do que você precisa?", "Eu preciso de um casaco e de luvas.", t("Мне нужны куртка и перчатки.", "I need a coat and some gloves."), {
      help: t("Скажи вслух, какая тёплая одежда тебе нужна.", "Say aloud which warm clothes you need."),
    }),
    choice("ptcu2-t6", t("Как спросить «Какая погода?»", "How do you ask “What's the weather like?”"), [
      ["Como está o tempo?", true],
      ["Como está você?", false],
      ["Quanto custa o tempo?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "beanie",
    itemName: t("Вязаная шапка", "Woolly hat"),
    itemNameRu: "Gorro",
    ru: "Oba! Um gorro!",
    en: t("Ура! Шапка!", "Hooray! A woolly hat!"),
    a11y: t("Жёлтая вязаная шапка с зелёным помпоном лежит на подушке.", "A yellow knitted hat with a green bobble lies on the pillow."),
    image: p("beanie"),
    steps: [
      t("Продавщица дарит Мурзику шапку.", "The shop assistant gives Murzik a hat as a present."),
      t("Жёлтую, с зелёным помпоном.", "A yellow one, with a green bobble."),
      t("«As cores do Brasil!» — «Цвета Бразилии!»", "“As cores do Brasil!” — “The colours of Brazil!”"),
      t("Мурзик кладёт её на подушку.", "Murzik puts it on his pillow."),
    ],
    bridge: t("Но Биа хочет новую кофту. И ей важен цвет!", "But Bia wants a new jumper too. And the colour matters!"),
  },
};

const cu3: Lesson = {
  id: "pt-a1-curitiba-3",
  level: "A1",
  cityId: "pt-curitiba",
  number: 3,
  title: t("As cores — Цвета", "As cores — Colours"),
  minutes: 7,
  goals: [
    t("Назвать цвета", "Name colours"),
    t("Спросить, есть ли другой цвет", "Ask if something comes in another colour"),
    t("Сказать «тебе идёт»", "Say “it suits you”"),
  ],
  vocabNote: t(
    "Цвет согласуется со словом: casaco vermelho, blusa vermelha. Но azul и verde не меняются по роду: casaco azul, blusa azul.",
    "Colours agree with the noun: casaco vermelho, blusa vermelha. But azul and verde stay the same for both genders: casaco azul, blusa azul.",
  ),
  vocab: [
    v("ptcu3-1", "Qual é a sua cor favorita?", t("Какой твой любимый цвет?", "What's your favourite colour?"),
      t("Биа стоит у стенда со свитерами всех цветов.", "Bia stands by a rack of jumpers in every colour."),
      p("l3-1")),
    v("ptcu3-2", "azul", t("синий, голубой", "blue"),
      t("Синий свитер.", "A blue jumper."),
      p("l3-2")),
    v("ptcu3-3", "vermelho, vermelha", t("красный, красная", "red"),
      t("Красная кофта и красная шапка.", "A red jumper and a red hat."),
      p("l3-3")),
    v("ptcu3-4", "verde e amarelo", t("зелёный и жёлтый", "green and yellow"),
      t("Зелёно-жёлтый шарф.", "A green-and-yellow scarf."),
      p("l3-4")),
    v("ptcu3-5", "Tem em preto?", t("Есть такой же чёрный?", "Do you have it in black?"),
      t("Биа держит белую кофту и вопросительно смотрит на продавщицу.", "Bia holds up a white jumper and looks questioningly at the assistant."),
      p("l3-5")),
    v("ptcu3-6", "Fica bem em você!", t("Тебе идёт!", "It suits you!"),
      t("Мурзик показывает большой палец Бии у зеркала.", "Murzik gives Bia a thumbs up at the mirror."),
      p("l3-6")),
    v("ptcu3-7", "Eu prefiro a branca.", t("Мне больше нравится белая.", "I prefer the white one."),
      t("Биа прижимает к себе белую кофту.", "Bia hugs a white jumper to herself."),
      p("l3-7")),
  ],
  dialogue: {
    title: t("Кофта для Бии", "A jumper for Bia"),
    note: t(
      "Cor favorita — «любимый цвет». Vermelha — «красная». Branca — «белая» (о кофте: a blusa).",
      "Cor favorita means “favourite colour”. Vermelha means “red” and branca “white” — feminine, because a blusa is feminine.",
    ),
    lines: [
      line("murzik", "Bia, qual é a sua cor favorita?", t("Биа, какой твой любимый цвет?", "Bia, what's your favourite colour?")),
      line("bia", "Azul! Mas esta blusa é vermelha…", t("Синий! Но эта кофта красная…", "Blue! But this jumper is red…")),
      line("bia", "Com licença, tem em azul?", t("Простите, есть такая же синяя?", "Excuse me, do you have it in blue?")),
      line("seller", "Tem em azul, em preto e em branco.", t("Есть синяя, чёрная и белая.", "We have it in blue, black and white.")),
      line("murzik", "A azul fica bem em você!", t("Синяя тебе идёт!", "The blue one suits you!")),
      line("bia", "Hmm… Eu prefiro a branca. Não, a azul!", t("Хм… Мне больше нравится белая. Нет, синяя!", "Hmm… I prefer the white. No — the blue!")),
    ],
    gist: choice("ptcu3-d1", t("Какой любимый цвет Бии?", "What's Bia's favourite colour?"), [
      [t("Синий.", "Blue."), true],
      [t("Красный.", "Red."), false],
      [t("Белый.", "White."), false],
    ]),
  },
  grammar: [
    g(
      t("Цвета меняются по роду и числу", "Colours change with gender and number"),
      [
        t(
          "Цвета на -o меняются, как другие прилагательные: o casaco vermelho, a blusa vermelha, os gorros vermelhos. Так же preto / preta, branco / branca, amarelo / amarela.",
          "Colours ending in -o behave like other adjectives: o casaco vermelho, a blusa vermelha, os gorros vermelhos. The same goes for preto / preta, branco / branca, amarelo / amarela.",
        ),
        t(
          "Azul и verde по роду не меняются, только по числу: azuis, verdes. Цвет ставят после слова, а не перед ним, как в русском.",
          "Azul and verde don't change for gender, only for number: azuis, verdes. And unlike in English, the colour comes after the noun: a blusa azul — the blue jumper.",
        ),
      ],
      [
        ["a blusa vermelha", t("красная кофта", "the red jumper")],
        ["as luvas azuis", t("синие перчатки", "the blue gloves")],
      ],
    ),
  ],
  tasks: [
    choice("ptcu3-t1", t("Как сказать «белая кофта»? (a blusa)", "How do you say “the white jumper”? (a blusa)"), [
      ["a blusa branca", true],
      ["a blusa branco", false],
      ["a branca blusa", false],
    ], { skill: "grammar" }),
    listen("ptcu3-t2", t("Послушай. Какого цвета куртка?", "Listen. What colour is the coat?"), "O casaco é verde.", [
      [t("Зелёная.", "Green."), true],
      [t("Синяя.", "Blue."), false],
      [t("Жёлтая.", "Yellow."), false],
    ]),
    match("ptcu3-t3", PAIRS, [
      ["azul", t("синий", "blue")],
      ["vermelho", t("красный", "red")],
      ["preto", t("чёрный", "black")],
      ["branco", t("белый", "white")],
    ], { skill: "words" }),
    spell("ptcu3-t4", t("Собери из букв слово «синий».", "Spell the word for “blue”."), "azul"),
    speak("ptcu3-t5", "Qual é a sua cor favorita?", "A minha cor favorita é o verde.", t("Мой любимый цвет — зелёный. (Назови свой.)", "My favourite colour is green. (Say yours.)"), {
      help: t("Назови вслух свой любимый цвет.", "Say your favourite colour aloud."),
    }),
    choice("ptcu3-t6", t("Как сказать «Мне нужны перчатки»?", "How do you say “I need gloves”?"), [
      ["Eu preciso de luvas.", true],
      ["Eu tenho de luvas.", false],
      ["Eu sou luvas.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "pencils",
    itemName: t("Цветные карандаши", "Coloured pencils"),
    itemNameRu: "Lápis de cor",
    ru: "Oba! Lápis de cor!",
    en: t("Ура! Цветные карандаши!", "Hooray! Coloured pencils!"),
    a11y: t("Стакан с цветными карандашами на столике у кровати.", "A cup of coloured pencils on the table by the bed."),
    image: p("pencils"),
    steps: [
      t("Вечером Габриэл даёт Мурзику цветные карандаши.", "In the evening Gabriel gives Murzik some coloured pencils."),
      t("«Desenhe o Pipoca!» — «Нарисуй Пипоку!»", "“Desenhe o Pipoca!” — “Draw Pipoca!”"),
      t("Зелёный, жёлтый, немного синего…", "Green, yellow, a bit of blue…"),
      t("Рисунок висит над кроватью.", "The drawing hangs above the bed."),
    ],
    bridge: t("Утром Биа и Мурзик никак не могут согреться.", "In the morning Bia and Murzik just can't get warm."),
  },
};

const cu4: Lesson = {
  id: "pt-a1-curitiba-4",
  level: "A1",
  cityId: "pt-curitiba",
  number: 4,
  title: t("Estou com frio — Мне холодно", "Estou com frio — I'm cold"),
  minutes: 7,
  goals: [
    t("Сказать, как ты себя чувствуешь", "Say how you feel"),
    t("Сказать «мне холодно», «я устал(а)»", "Say “I'm cold”, “I'm tired”"),
    t("Спросить, где кто-то", "Ask where someone is"),
  ],
  vocabNote: t(
    "Está frio — «холодно (на улице)». Estou com frio — «мне холодно», буквально «я с холодом». Не путай!",
    "Está frio means “it's cold (outside)”. Estou com frio means “I feel cold” — literally “I am with cold”. Don't mix them up!",
  ),
  vocab: [
    v("ptcu4-1", "Estou com frio.", t("Мне холодно.", "I'm cold."),
      t("Мурзик стучит зубами, укутавшись в шарф.", "Murzik's teeth chatter as he huddles in his scarf."),
      p("l4-1")),
    v("ptcu4-2", "Estou bem.", t("Я в порядке.", "I'm fine."),
      t("Мурзик в тёплой куртке спокойно улыбается.", "Murzik, in his warm coat, smiles calmly."),
      p("l4-2")),
    v("ptcu4-3", "Você está cansado?", t("Ты устал?", "Are you tired?"),
      t("Биа заботливо смотрит на зевающего Мурзика.", "Bia looks with concern at Murzik, who's yawning."),
      p("l4-3")),
    v("ptcu4-4", "Ela está feliz.", t("Она счастлива.", "She's happy."),
      t("Биа сияет, держа телефон.", "Bia beams, holding her phone."),
      p("l4-4")),
    v("ptcu4-5", "Onde vocês estão?", t("Где вы?", "Where are you?"),
      t("Дона Лусия говорит по видеосвязи, её лицо на экране телефона.", "Dona Lúcia's face on a video call."),
      p("l4-5")),
    v("ptcu4-6", "Nós estamos em Curitiba.", t("Мы в Куритибе.", "We're in Curitiba."),
      t("Мурзик и Биа машут в камеру телефона.", "Murzik and Bia wave at the phone camera."),
      p("l4-6")),
    v("ptcu4-7", "Eles estão ocupados.", t("Они заняты.", "They're busy."),
      t("Музыканты на афише репетируют, все при деле.", "On a poster the musicians are busy rehearsing."),
      p("l4-7")),
  ],
  dialogue: {
    title: t("Звонок доне Лусии", "A call to Dona Lúcia"),
    note: t(
      "Saudade — особое бразильское слово: «тоска по кому-то, кто далеко». Estou com saudade — «я скучаю».",
      "Saudade is a very special Brazilian word: longing for someone or something far away. Estou com saudade means “I miss you”.",
    ),
    lines: [
      line("lucia", "Oi, Bia! Oi, Murzik! Onde vocês estão?", t("Привет, Биа! Привет, Мурзик! Где вы?", "Hi, Bia! Hi, Murzik! Where are you?")),
      line("bia", "Nós estamos em Curitiba, vovó!", t("Мы в Куритибе, бабуля!", "We're in Curitiba, Grandma!")),
      line("lucia", "Curitiba? Lá faz muito frio! Você está bem, Murzik?", t("В Куритибе? Там так холодно! Мурзик, ты в порядке?", "Curitiba? It's so cold there! Are you all right, Murzik?")),
      line("murzik", "Estou com frio… mas estou bem!", t("Мне холодно… но я в порядке!", "I'm cold… but I'm fine!")),
      line("lucia", "E o Pipoca? E a banda?", t("А Пипока? А группа?", "And Pipoca? And the band?")),
      line("bia", "Eles estão ocupados com os shows. Mas o Pipoca está bem!", t("Они заняты концертами. Но с Пипокой всё хорошо!", "They're busy with their shows. But Pipoca is fine!")),
      line("lucia", "Ai, que bom! Estou com saudade!", t("Ах, как хорошо! Я скучаю!", "Oh, that's good! I miss you all!")),
    ],
    gist: choice("ptcu4-d1", t("Как себя чувствует Мурзик?", "How is Murzik feeling?"), [
      [t("Ему холодно, но он в порядке.", "He's cold, but he's fine."), true],
      [t("Он заболел.", "He's ill."), false],
      [t("Ему жарко.", "He's hot."), false],
    ]),
  },
  grammar: [
    g(
      t("Глагол estar: estou, está, estamos, estão", "Estar: estou, está, estamos, estão"),
      [
        t(
          "Estar — второй глагол «быть», для того, что меняется: настроения, самочувствия, места. Формы: eu estou, você / ele / ela está, nós estamos, vocês / eles / elas estão.",
          "Estar is the second verb “to be”, for things that change: moods, how you feel, where you are. Forms: eu estou, você / ele / ela está, nós estamos, vocês / eles / elas estão.",
        ),
        t(
          "Ser — кто ты и какой ты всегда (Eu sou estudante). Estar — как ты сейчас и где (Eu estou cansado, Eu estou em Curitiba). Прилагательное после estar тоже меняется по роду: cansado / cansada.",
          "Ser is for what you are (Eu sou estudante). Estar is for how and where you are right now (Eu estou cansado, Eu estou em Curitiba). The adjective still agrees: cansado (man) / cansada (woman).",
        ),
      ],
      [
        ["Nós estamos no hostel.", t("Мы в хостеле.", "We're at the hostel.")],
        ["Eu estou cansado. / Eu estou cansada.", t("Я устал. / Я устала.", "I'm tired. (man / woman)")],
      ],
    ),
  ],
  tasks: [
    choice("ptcu4-t1", t("Как сказать «Мы в Куритибе»?", "How do you say “We're in Curitiba”?"), [
      ["Nós estamos em Curitiba.", true],
      ["Nós somos em Curitiba.", false],
      ["Nós está em Curitiba.", false],
    ], { skill: "grammar" }),
    listen("ptcu4-t2", t("Послушай. Как себя чувствует говорящий?", "Listen. How does the speaker feel?"), "Estou com frio.", [
      [t("Ему холодно.", "He's cold."), true],
      [t("Он устал.", "He's tired."), false],
      [t("Он счастлив.", "He's happy."), false],
    ]),
    tf("ptcu4-t3", t("Está frio и estou com frio значат одно и то же.", "Está frio and estou com frio mean exactly the same."), false, "words"),
    missing("ptcu4-t4", t("Какой буквы не хватает? («счастливый»)", "Which letter is missing? (“happy”)"), "fel", "z", "i", ["i", "e", "y"]),
    speak("ptcu4-t5", "Você está bem?", "Estou bem, obrigado! Mas estou com frio.", t("Я в порядке, спасибо! Но мне холодно.", "I'm fine, thanks! But I'm cold."), {
      help: t("Ответь вслух, как ты себя чувствуешь.", "Say aloud how you feel."),
    }),
    choice("ptcu4-t6", t("Как сказать «Тебе идёт!»?", "How do you say “It suits you!”?"), [
      ["Fica bem em você!", true],
      ["Eu prefiro a branca.", false],
      ["Tem em azul?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "slippers",
    itemName: t("Тёплые тапочки", "Warm slippers"),
    itemNameRu: "Pantufas",
    ru: "Oba! Pantufas!",
    en: t("Ура! Тапочки!", "Hooray! Slippers!"),
    a11y: t("У кровати стоят пушистые тапочки в виде маленьких попугаев.", "Fluffy slippers shaped like little parrots stand by the bed."),
    image: p("slippers"),
    steps: [
      t("После звонка Биа исчезает на полчаса.", "After the call Bia disappears for half an hour."),
      t("Она возвращается с пакетом.", "She comes back with a bag."),
      t("В нём пушистые тапочки — в виде попугаев!", "Inside: fluffy slippers — shaped like parrots!"),
      t("Мурзик ставит их у кровати.", "Murzik puts them by his bed."),
    ],
    bridge: t("Днём выглядывает солнце. Габриэл советует сходить в ботанический сад.", "In the afternoon the sun comes out. Gabriel suggests a visit to the botanical garden."),
  },
};

const cu5: Lesson = {
  id: "pt-a1-curitiba-5",
  level: "A1",
  cityId: "pt-curitiba",
  number: 5,
  title: t("O Jardim Botânico — Ботанический сад", "O Jardim Botânico — The botanical garden"),
  minutes: 7,
  goals: [
    t("Говорить о парке и цветах", "Talk about parks and flowers"),
    t("Попросить сфотографировать", "Ask someone to take your photo"),
    t("Сказать, чьё это: de", "Say whose something is with de"),
  ],
  vocabNote: t(
    "Araucária — высокая хвойная араукария, символ штата Парана. Её орешки, pinhão, здесь едят зимой.",
    "The araucária is a tall pine tree, the symbol of Paraná state. Its seeds, pinhão, are a favourite winter snack here.",
  ),
  vocab: [
    v("ptcu5-1", "o jardim", t("сад", "the garden"),
      t("Ухоженный сад с ровными клумбами.", "A neat garden with tidy flower beds."),
      p("l5-1")),
    v("ptcu5-2", "as flores", t("цветы", "the flowers"),
      t("Клумба с разноцветными цветами.", "A flower bed full of colourful flowers."),
      p("l5-2")),
    v("ptcu5-3", "a árvore", t("дерево", "the tree"),
      t("Высокая араукария с ветками, как у зонтика.", "A tall araucaria with umbrella-shaped branches."),
      p("l5-3")),
    v("ptcu5-4", "Que cheiro bom!", t("Как приятно пахнет!", "What a lovely smell!"),
      t("Мурзик с закрытыми глазами нюхает цветок.", "Murzik sniffs a flower with his eyes closed."),
      p("l5-4")),
    v("ptcu5-5", "Tira uma foto de mim?", t("Сфотографируешь меня?", "Could you take a photo of me?"),
      t("Мурзик протягивает Бии телефон и встаёт у оранжереи.", "Murzik hands Bia his phone and poses in front of the glasshouse."),
      p("l5-5")),
    v("ptcu5-6", "Sorria!", t("Улыбнись!", "Smile!"),
      t("Биа держит телефон и смеётся.", "Bia holds up the phone, laughing."),
      p("l5-6")),
    v("ptcu5-7", "Ficou ótima!", t("Отлично получилось!", "It came out great!"),
      t("На экране телефона — красивое фото Мурзика у оранжереи.", "On the phone screen: a lovely photo of Murzik by the glasshouse."),
      p("l5-7")),
  ],
  dialogue: {
    title: t("Стеклянная оранжерея", "The glass greenhouse"),
    note: t(
      "Estufa — «оранжерея». De vidro — «стеклянная», буквально «из стекла».",
      "Estufa means “greenhouse”. De vidro means “made of glass”.",
    ),
    lines: [
      line("murzik", "Nossa! Que jardim bonito! E as flores!", t("Ого! Какой красивый сад! А цветы!", "Wow! What a beautiful garden! And the flowers!")),
      line("bia", "E olha a estufa de vidro!", t("А посмотри на стеклянную оранжерею!", "And look at the glass greenhouse!")),
      line("murzik", "Que cheiro bom! Bia, tira uma foto de mim?", t("Как приятно пахнет! Биа, сфотографируешь меня?", "What a lovely smell! Bia, could you take a photo of me?")),
      line("bia", "Claro! Com o seu celular?", t("Конечно! На твой телефон?", "Of course! On your phone?")),
      line("bia", "Um, dois, três… Sorria!", t("Раз, два, три… Улыбнись!", "One, two, three… Smile!")),
      line("murzik", "Ficou ótima! Obrigado!", t("Отлично получилось! Спасибо!", "It came out great! Thanks!")),
    ],
    gist: choice("ptcu5-d1", t("О чём просит Мурзик?", "What does Murzik ask for?"), [
      [t("Сфотографировать его.", "A photo of himself."), true],
      [t("Купить цветы.", "To buy some flowers."), false],
      [t("Пойти домой.", "To go home."), false],
    ]),
  },
  grammar: [
    g(
      t("Чьё: o celular do Murzik", "Whose: o celular do Murzik"),
      [
        t(
          "Чтобы сказать «чей», используют de: o celular do Murzik — «телефон Мурзика», a casa da Bia — «дом Бии». Почти как русский родительный падеж, только слово стоит после.",
          "Portuguese has no 's. To say whose something is, use de: o celular do Murzik — “Murzik's phone”, a casa da Bia — “Bia's house”. The owner comes last.",
        ),
        t(
          "De + o = do, de + a = da — те же слияния, что в Eu sou do Brasil.",
          "De + o = do, de + a = da — the same joining you saw in Eu sou do Brasil.",
        ),
      ],
      [
        ["o casaco do Murzik", t("куртка Мурзика", "Murzik's coat")],
        ["a avó da Bia", t("бабушка Бии", "Bia's grandmother")],
      ],
    ),
  ],
  tasks: [
    choice("ptcu5-t1", t("Как сказать «дом Бии»?", "How do you say “Bia's house”?"), [
      ["a casa da Bia", true],
      ["a Bia casa", false],
      ["a casa do Bia", false],
    ], { skill: "grammar" }),
    listen("ptcu5-t2", t("Послушай. О чём просят?", "Listen. What is the person asking?"), "Tira uma foto de mim?", [
      [t("Сфотографировать.", "To take a photo."), true],
      [t("Улыбнуться.", "To smile."), false],
      [t("Понюхать цветок.", "To smell a flower."), false],
    ]),
    match("ptcu5-t3", PAIRS, [
      ["o jardim", t("сад", "the garden")],
      ["a árvore", t("дерево", "the tree")],
      ["as flores", t("цветы", "the flowers")],
      ["Sorria!", t("Улыбнись!", "Smile!")],
    ], { skill: "words" }),
    spell("ptcu5-t4", t("Собери из букв слово «сад».", "Spell the word for “garden”."), "jardim"),
    speak("ptcu5-t5", "Quer uma foto?", "Sim! Tira uma foto de mim?", t("Да! Сфотографируешь меня?", "Yes! Could you take a photo of me?"), {
      help: t("Попроси вслух тебя сфотографировать.", "Ask aloud for someone to take your photo."),
    }),
    choice("ptcu5-t6", t("Как сказать «Мне холодно»?", "How do you say “I'm cold”?"), [
      ["Estou com frio.", true],
      ["Está frio.", false],
      ["Sou frio.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "postcard",
    itemName: t("Открытка с оранжереей", "Greenhouse postcard"),
    itemNameRu: "Cartão-postal",
    ru: "Oba! Um cartão-postal!",
    en: t("Ура! Открытка!", "Hooray! A postcard!"),
    a11y: t("Открытка со стеклянной оранжереей ботанического сада, прислонённая к лампе.", "A postcard of the botanical garden's glass greenhouse, propped against the lamp."),
    image: p("postcard"),
    steps: [
      t("У выхода из сада продают открытки.", "Postcards are on sale at the garden exit."),
      t("Мурзик выбирает одну, со стеклянной оранжереей.", "Murzik chooses one with the glass greenhouse."),
      t("«Para a Dona Lúcia!» — «Для доны Лусии!»", "“Para a Dona Lúcia!” — “For Dona Lúcia!”"),
      t("Открытка стоит у лампы и ждёт, когда её подпишут.", "The postcard waits by the lamp for a message."),
    ],
    bridge: t("Вечером в хостеле Габриэл ставит чайник.", "In the evening at the hostel Gabriel puts the kettle on."),
  },
};

const cu6: Lesson = {
  id: "pt-a1-curitiba-6",
  level: "A1",
  cityId: "pt-curitiba",
  number: 6,
  title: t("Um chazinho — Чаёк", "Um chazinho — A nice cup of tea"),
  minutes: 7,
  goals: [
    t("Предложить и принять угощение", "Offer and accept food or drink"),
    t("Сказать «хочу есть», «хочу пить»", "Say you're hungry or thirsty"),
    t("Говорить ласково: -inho", "Use the friendly ending -inho"),
  ],
  vocabNote: t(
    "Бразильцы обожают уменьшительные слова: chazinho — «чаёк», pouquinho — «чуть-чуть», cafezinho — «кофеёк». Так речь звучит теплее.",
    "Brazilians love little endings: chazinho (a nice little tea), pouquinho (a tiny bit), cafezinho (a little coffee). It makes speech sound warm and friendly.",
  ),
  vocab: [
    v("ptcu6-1", "Aceita um chá?", t("Хочешь чаю?", "Would you like some tea?"),
      t("Габриэл держит заварочный чайник.", "Gabriel holds up a teapot."),
      p("l6-1")),
    v("ptcu6-2", "Aceito, obrigado!", t("С удовольствием, спасибо!", "Yes, please!"),
      t("Мурзик радостно протягивает кружку.", "Murzik happily holds out his mug."),
      p("l6-2")),
    v("ptcu6-3", "Está quentinho.", t("Тёпленький.", "It's nice and warm."),
      t("Мурзик греет лапы о горячую кружку.", "Murzik warms his paws on a hot mug."),
      p("l6-3")),
    v("ptcu6-4", "Só um pouquinho.", t("Совсем чуть-чуть.", "Just a little bit."),
      t("Мурзик показывает двумя пальцами крошечную щёлку.", "Murzik holds two fingers a tiny bit apart."),
      p("l6-4")),
    v("ptcu6-5", "Estou com fome.", t("Хочу есть.", "I'm hungry."),
      t("У Мурзика громко урчит живот.", "Murzik's tummy rumbles loudly."),
      p("l6-5")),
    v("ptcu6-6", "Estou com sede.", t("Хочу пить.", "I'm thirsty."),
      t("Мурзик смотрит на пустой стакан.", "Murzik looks at an empty glass."),
      p("l6-6")),
    v("ptcu6-7", "o pinhão", t("орешки араукарии", "araucaria pine nuts"),
      t("Миска с варёными орешками араукарии, похожими на большие каштаны.", "A bowl of boiled araucaria pine nuts that look like big chestnuts."),
      p("l6-7")),
  ],
  dialogue: {
    title: t("Вечер в хостеле", "Evening at the hostel"),
    note: t(
      "Aceita? — «Возьмёшь? Хочешь?» — вежливое предложение. Experimenta! — «Попробуй!»",
      "Aceita? (Will you accept?) is the polite way to offer something. Experimenta! means “Try it!”",
    ),
    lines: [
      line("gabriel", "Aceita um chá, Murzik?", t("Хочешь чаю, Мурзик?", "Would you like some tea, Murzik?")),
      line("murzik", "Aceito, obrigado! Estou com frio e com sede.", t("С удовольствием, спасибо! Мне холодно, и я хочу пить.", "Yes, please! I'm cold and thirsty.")),
      line("gabriel", "Aqui está. Está quentinho!", t("Вот, держи. Тёпленький!", "Here you go. It's nice and warm!")),
      line("bia", "Eu estou com fome… Tem alguma coisa?", t("А я голодная… Есть что-нибудь?", "I'm hungry… Is there anything to eat?")),
      line("gabriel", "Tem pinhão! Experimenta!", t("Есть пиньян! Попробуй!", "There's pinhão! Try some!")),
      line("murzik", "Só um pouquinho… Hmm, que gostoso!", t("Совсем чуть-чуть… М-м, как вкусно!", "Just a little bit… Mmm, delicious!")),
    ],
    gist: choice("ptcu6-d1", t("Чем угощает Габриэл?", "What does Gabriel offer them?"), [
      [t("Чаем и орешками араукарии.", "Tea and pine nuts."), true],
      [t("Кофе и пиццей.", "Coffee and pizza."), false],
      [t("Соком и булочками.", "Juice and bread rolls."), false],
    ]),
  },
  grammar: [
    g(
      t("Estou com fome: чувства со словом com", "Estou com fome: feelings with com"),
      [
        t(
          "Голод, жажду, холод бразильцы «имеют при себе»: estou com fome — «хочу есть», estou com sede — «хочу пить», estou com frio — «мне холодно». Хорошая новость: тут род не важен — так говорят и мужчины, и женщины.",
          "Hunger, thirst and cold are things you're “with” in Portuguese: estou com fome (I'm hungry), estou com sede (I'm thirsty), estou com frio (I'm cold). Good news: these don't change for men and women.",
        ),
        t(
          "Окончание -inho / -inha делает слово ласковым или маленьким: chá — chazinho, pouco — pouquinho, quente — quentinho.",
          "The ending -inho / -inha makes a word small or affectionate: chá — chazinho, pouco — pouquinho, quente — quentinho.",
        ),
      ],
      [
        ["Você está com fome?", t("Хочешь есть?", "Are you hungry?")],
        ["Um cafezinho, por favor.", t("Кофейку, пожалуйста.", "A little coffee, please.")],
      ],
    ),
  ],
  tasks: [
    choice("ptcu6-t1", t("Как сказать «Я хочу пить»?", "How do you say “I'm thirsty”?"), [
      ["Estou com sede.", true],
      ["Sou com sede.", false],
      ["Estou sede.", false],
    ], { skill: "grammar" }),
    listen("ptcu6-t2", t("Послушай. Что хочет человек?", "Listen. What does the person want?"), "Só um pouquinho, por favor.", [
      [t("Совсем немного.", "Just a little."), true],
      [t("Очень много.", "A lot."), false],
      [t("Ничего.", "Nothing."), false],
    ]),
    match("ptcu6-t3", PAIRS, [
      ["Estou com fome.", t("Хочу есть.", "I'm hungry.")],
      ["Estou com sede.", t("Хочу пить.", "I'm thirsty.")],
      ["Aceita um chá?", t("Хочешь чаю?", "Would you like some tea?")],
      ["um pouquinho", t("чуть-чуть", "a little bit")],
    ], { skill: "words" }),
    missing("ptcu6-t4", t("Какой буквы не хватает? («чаёк»)", "Which letter is missing? (“a little tea”)"), "cha", "inho", "z", ["z", "s", "ç"]),
    speak("ptcu6-t5", "Aceita um café?", "Aceito, obrigado! Só um pouquinho.", t("С удовольствием, спасибо! Совсем чуть-чуть.", "Yes, please! Just a little."), {
      help: t("Прими угощение вслух. Можно obrigado или obrigada.", "Accept the offer aloud — obrigado or obrigada."),
    }),
    choice("ptcu6-t6", t("Как попросить «Сфотографируешь меня?»", "How do you ask “Could you take a photo of me?”"), [
      ["Tira uma foto de mim?", true],
      ["Ficou ótima!", false],
      ["Sorria!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "thermos",
    itemName: t("Термос", "Thermos flask"),
    itemNameRu: "Garrafa térmica",
    ru: "Oba! Uma garrafa térmica!",
    en: t("Ура! Термос!", "Hooray! A thermos flask!"),
    a11y: t("Маленький красный термос на подоконнике.", "A small red thermos flask on the windowsill."),
    image: p("thermos"),
    steps: [
      t("Габриэл наливает горячий чай в маленький термос.", "Gabriel pours hot tea into a little thermos flask."),
      t("«Para a viagem!» — «В дорогу!»", "“Para a viagem!” — “For the journey!”"),
      t("Мурзик прижимает термос к себе.", "Murzik hugs the flask."),
      t("Тепло!", "So warm!"),
    ],
    bridge: t("Утром Габриэл вдруг хлопает себя по лбу: «O papagaio! Eu esqueci!»", "In the morning Gabriel suddenly slaps his forehead: “O papagaio! Eu esqueci!”"),
  },
};

const cu7: Lesson = {
  id: "pt-a1-curitiba-7",
  level: "A1",
  cityId: "pt-curitiba",
  number: 7,
  title: t("Que frio! — Какой холод!", "Que frio! — It's freezing!"),
  minutes: 8,
  goals: [
    t("Понять, что рассказывают о Пипоке", "Understand what people say about Pipoca"),
    t("Поблагодарить за всё и попрощаться", "Thank someone for everything and say goodbye"),
    t("Вспомнить все слова Куритибы", "Review all the words from Curitiba"),
  ],
  vocabNote: t(
    "Esqueci — «я забыл(а)». Manda notícias! — «Пиши, рассказывай, как дела!»",
    "Esqueci means “I forgot”. Manda notícias! means “Keep in touch!” (literally “Send news!”).",
  ),
  vocab: [
    v("ptcu7-1", "Que frio!", t("Какой холод!", "It's freezing!"),
      t("Зелёный попугай, нахохлившись, сидит под одеялом.", "The green parrot sits fluffed up under a blanket."),
      p("l7-1")),
    v("ptcu7-2", "Ele estava embaixo do cobertor.", t("Он сидел под одеялом.", "He was under the blanket."),
      t("Из-под клетчатого одеяла торчит зелёный хвост.", "A green tail sticks out from under a checked blanket."),
      p("l7-2")),
    v("ptcu7-3", "Eles foram para Florianópolis.", t("Они уехали во Флорианополис.", "They've gone to Florianópolis."),
      t("Карта: стрелка от Куритибы к острову у моря.", "A map: an arrow from Curitiba to an island by the sea."),
      p("l7-3")),
    v("ptcu7-4", "Lá faz calor!", t("Там жарко!", "It's hot there!"),
      t("Маленькая картинка: солнечный пляж и пальмы.", "A little picture: a sunny beach and palm trees."),
      p("l7-4")),
    v("ptcu7-5", "Obrigado por tudo!", t("Спасибо за всё!", "Thanks for everything!"),
      t("Мурзик обнимает Габриэла.", "Murzik gives Gabriel a hug."),
      p("l7-5")),
    v("ptcu7-6", "Manda notícias!", t("Пиши!", "Keep in touch!"),
      t("Габриэл показывает на телефон.", "Gabriel points at his phone."),
      p("l7-6")),
    v("ptcu7-7", "Até mais!", t("До встречи!", "See you!"),
      t("Мурзик и Биа машут, уходя с рюкзаками.", "Murzik and Bia wave as they walk off with their backpacks."),
      p("l7-7")),
  ],
  dialogue: {
    title: t("Что сказал попугай", "What the parrot said"),
    note: t(
      "Tremendo — «дрожа». Coitado! — «Бедняжка!»",
      "Tremendo means “shivering”. Coitado! means “Poor thing!”",
    ),
    lines: [
      line("gabriel", "Ah, o papagaio! Eu esqueci! A banda dormiu aqui no hostel.", t("А, попугай! Я забыл! Группа ночевала здесь, в хостеле.", "Ah, the parrot! I forgot! The band slept here at the hostel.")),
      line("bia", "E o Pipoca?", t("А Пипока?", "And Pipoca?")),
      line("gabriel", "Ele estava embaixo do cobertor, tremendo. E ele disse: Que frio! Que frio!", t("Он сидел под одеялом и дрожал. И говорил: «Какой холод! Какой холод!»", "He was under the blanket, shivering. And he said: It's freezing! It's freezing!")),
      line("murzik", "Coitado! E agora? Onde eles estão?", t("Бедняжка! А теперь они где?", "Poor thing! So where are they now?")),
      line("gabriel", "Eles foram para Florianópolis. Lá faz calor!", t("Уехали во Флорианополис. Там жарко!", "They've gone to Florianópolis. It's hot there!")),
      line("murzik", "Obrigado por tudo, Gabriel!", t("Спасибо за всё, Габриэл!", "Thanks for everything, Gabriel!")),
      line("gabriel", "De nada! Manda notícias! Até mais!", t("Не за что! Пишите! До встречи!", "You're welcome! Keep in touch! See you!")),
    ],
    gist: choice("ptcu7-d1", t("Какую фразу выучил Пипока в Куритибе?", "What phrase did Pipoca learn in Curitiba?"), [
      [t("«Какой холод!»", "“It's freezing!”"), true],
      [t("«Сколько стоит?»", "“How much is it?”"), false],
      [t("«Хочешь чаю?»", "“Would you like some tea?”"), false],
    ]),
  },
  grammar: [
    g(
      t("Que…! — «Какой…!»", "Que…! — “How…! What…!”"),
      [
        t(
          "Чтобы восхититься или пожаловаться, ставят que перед словом: Que frio! — «Какой холод!», Que bonito! — «Как красиво!», Que pena! — «Как жаль!».",
          "To react to something, put que in front of a word: Que frio! (It's so cold!), Que bonito! (How beautiful!), Que pena! (What a pity!).",
        ),
        t(
          "Ты уже знаешь много таких фраз: Que família grande!, Que água azul!, Que gostoso! Que работает с любым словом.",
          "You already know lots of these: Que família grande!, Que água azul!, Que gostoso! Que works with almost any word.",
        ),
      ],
      [
        ["Que frio!", t("Какой холод!", "It's freezing!")],
        ["Que jardim bonito!", t("Какой красивый сад!", "What a beautiful garden!")],
      ],
    ),
  ],
  tasks: [
    listen("ptcu7-t1", t("Аудиоэкзамен. Что рассказывает Габриэл?", "Audio exam. What does Gabriel tell them?"), "O papagaio estava embaixo do cobertor e disse: Que frio! Agora a banda está em Florianópolis.", [
      [t("Попугаю было холодно, а группа теперь во Флорианополисе.", "The parrot was cold, and the band is now in Florianópolis."), true],
      [t("Попугай заболел и остался в хостеле.", "The parrot got ill and stayed at the hostel."), false],
      [t("Группа вернулась в Сан-Паулу.", "The band went back to São Paulo."), false],
    ]),
    choice("ptcu7-t2", t("Как сказать «Спасибо за всё!»?", "How do you say “Thanks for everything!”?"), [
      ["Obrigado por tudo!", true],
      ["Obrigado de nada!", false],
      ["Tudo bem, obrigado!", false],
    ], { skill: "words" }),
    build("ptcu7-t3", t("Собери фразу: «Они уехали во Флорианополис».", "Build the sentence: “They've gone to Florianópolis”."), ["Eles", "foram", "para", "Florianópolis."]),
    missing("ptcu7-t4", t("Какой буквы не хватает? («одеяло»)", "Which letter is missing? (“blanket”)"), "cobert", "r", "o", ["o", "u", "a"]),
    speak("ptcu7-t5", "Manda notícias! Até mais!", "Obrigado por tudo! Até mais!", t("Спасибо за всё! До встречи!", "Thanks for everything! See you!"), {
      help: t("Попрощайся вслух. Можно obrigado или obrigada.", "Say goodbye aloud — obrigado or obrigada."),
    }),
    script("ptcu7-t6", t("Вспомни всю Куритибу. Закончи разговор с Габриэлом.", "Remember all of Curitiba. Finish the conversation with Gabriel."), [
      { speaker: GABRIEL, text: "Bom dia! Como você está?" },
      { speaker: YOU, answer: "Estou bem, mas estou com frio!", options: ["Estou bem, mas estou com frio!", "Sou frio.", "Tem em azul?"] },
      { speaker: GABRIEL, text: "Aceita um chá?" },
      { speaker: YOU, answer: "Aceito, obrigado!", options: ["Aceito, obrigado!", "Que pena!", "Ficou ótima!"] },
      { speaker: GABRIEL, text: "Lá fora está chovendo. Você precisa de um casaco!" },
      { speaker: YOU, answer: "Sim, e de um gorro também!", options: ["Sim, e de um gorro também!", "Sim, eu prefiro o calor.", "Não, estou com fome."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-curitiba",
    itemName: t("Фото Пипоки под одеялом", "Photo of Pipoca under the blanket"),
    itemNameRu: "Foto do Pipoca no hostel",
    ru: "Oba! Mais uma foto do Pipoca!",
    en: t("Ура! Ещё одно фото Пипоки!", "Hooray! Another photo of Pipoca!"),
    a11y: t(
      "Фото: зелёный попугай выглядывает из-под клетчатого одеяла, на голове у него крошечная вязаная шапочка.",
      "A photo: the green parrot peeking out from under a checked blanket, wearing a tiny knitted hat.",
    ),
    image: p("photo"),
    steps: [
      t("Габриэл показывает фото: Пипока под одеялом.", "Gabriel shows them a photo: Pipoca under the blanket."),
      t("На голове у него крошечная шапочка!", "He's wearing a tiny woolly hat!"),
      t("Мурзик смеётся до слёз.", "Murzik laughs until he cries."),
      t("Подпись: «Que frio!» Фото — в альбом.", "Caption: “Que frio!” The photo goes in the album."),
    ],
    bridge: t("Автобус спускается с гор к морю. Становится всё теплее.", "The bus winds down from the mountains to the sea. It gets warmer and warmer."),
  },
};

const story: CityStory = {
  home: {
    name: t("Кровать в хостеле Габриэла", "A bunk at Gabriel's hostel"),
    nameRu: "A cama no hostel do Gabriel",
    image: p("home"),
    a11y: t(
      "Комната в хостеле: двухъярусная деревянная кровать, маленькое окно с серым небом. На нижней полке — чемодан Мурзика.",
      "A hostel room: a wooden bunk bed and a small window with a grey sky. Murzik's suitcase sits on the bottom bunk.",
    ),
  },
  keepsakeId: "photo-curitiba",
  welcomeRu: "Olá, Curitiba!",
  welcomeEn: t("Привет, Куритиба!", "Hello, Curitiba!"),
  welcomeImage: p("arrival"),
  welcomeA11y: t(
    "Мурзик и Биа в футболках выходят из автобуса под мелкий дождь. Все вокруг в куртках и шарфах.",
    "Murzik and Bia step off the bus in T-shirts into a light drizzle. Everyone around them is in coats and scarves.",
  ),
  departureImage: p("departure"),
  departureA11y: t("Габриэл машет у двери хостела.", "Gabriel waves at the hostel door."),
  finale: [
    {
      image: p("photo"),
      a11y: t("Мурзик вклеивает в альбом фото Пипоки в шапочке.", "Murzik sticks the photo of Pipoca in his little hat into the album."),
      lines: [
        { en: t("Четвёртая страница альбома: Пипока под одеялом в хостеле.", "Page four of the album: Pipoca under the blanket at the hostel.") },
        { ru: "Que frio!", en: t("Какой холод!", "It's freezing!") },
        { en: t("Ничего, Пипока. Впереди море и солнце!", "Never mind, Pipoca. Sun and sea are coming!") },
      ],
    },
    {
      image: img.greet,
      a11y: t("Мурзик радостно подпрыгивает.", "Murzik jumps for joy."),
      lines: [
        { ru: "Curitiba completa!", en: t("Куритиба пройдена!", "Curitiba complete!") },
        { en: t("7 / 7 уроков", "7 / 7 lessons") },
      ],
    },
    {
      image: p("departure"),
      a11y: t("Габриэл машет на прощание.", "Gabriel waves goodbye."),
      lines: [
        { ru: "Tchau, Gabriel!", en: t("Пока, Габриэл!", "Bye, Gabriel!") },
        { ru: "Próxima parada: Florianópolis!", en: t("Следующая остановка: Флорианополис!", "Next stop: Florianópolis!") },
      ],
    },
    {
      image: p("bus"),
      a11y: t("Автобус спускается по серпантину, впереди показалось море.", "The bus winds down a mountain road; the sea comes into view ahead."),
      lines: [{ ru: "Curitiba → Florianópolis", en: t("Куритиба → Флорианополис", "Curitiba → Florianópolis") }],
    },
    {
      image: pic("pt/floripa/arrival"),
      a11y: t(
        "Мурзик снимает шапку и шарф: перед ним длинный мост на остров, синее море и солнце.",
        "Murzik takes off his hat and scarf: ahead, a long bridge to an island, the blue sea and sunshine.",
      ),
      lines: [
        { ru: "Olá, Florianópolis!", en: t("Привет, Флорианополис!", "Hello, Florianópolis!") },
        { ru: "Finalmente, sol!", en: t("Наконец-то солнце!", "Sunshine at last!") },
      ],
    },
  ],
};

export const ptCuritiba = {
  id: "pt-curitiba",
  name: t("Куритиба", "Curitiba"),
  namePt: "Curitiba",
  lessons: [cu1, cu2, cu3, cu4, cu5, cu6, cu7],
  story,
};
