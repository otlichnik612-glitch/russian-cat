import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { PAIRS, YOU, build, choice, fill, g, line, listen, match, missing, script, speak, spell, t, v } from "./make";

/* Манаус · «В дороге по Амазонке» · Речной теплоход Сеу Раймунду. Билеты, гамак на палубе, встреча вод, неправильное прошедшее (fui, fiz, tive), театр Амазонас, лес. Пипока выучил «Boa viagem!». */

const p = (name: string) => pic(`pt/manaus/${name}`);
const RAIMUNDO = t("Сеу Раймунду", "Seu Raimundo");

const ma1: Lesson = {
  id: "pt-a1-manaus-1",
  level: "A1",
  cityId: "pt-manaus",
  number: 1,
  title: t("A passagem — Билет", "A passagem — The ticket"),
  minutes: 7,
  goals: [
    t("Купить билет на теплоход", "Buy a ticket for a riverboat"),
    t("Спросить, когда отправление", "Ask when it leaves"),
    t("Спросить, сколько длится дорога", "Ask how long the trip takes"),
  ],
  vocabNote: t(
    "Passagem — «билет» на поезд, автобус, самолёт или теплоход. Bilhete — чаще на метро, ingresso — на концерт.",
    "Passagem is a ticket for a journey (bus, plane, boat). Bilhete is more for the metro, ingresso for a show.",
  ),
  vocab: [
    v("ptma1-1", "Uma passagem para Belém, por favor.", t("Один билет до Белена, пожалуйста.", "One ticket to Belém, please."),
      t("Мурзик у кассы в речном порту.", "Murzik at the ticket office in the river port."),
      p("l1-1")),
    v("ptma1-2", "Quando sai o barco?", t("Когда отправляется теплоход?", "When does the boat leave?"),
      t("У причала стоит белый двухпалубный теплоход.", "A white two-deck riverboat at the quay."),
      p("l1-2")),
    v("ptma1-3", "O barco sai amanhã cedo.", t("Теплоход уходит завтра рано утром.", "The boat leaves early tomorrow."),
      t("Расписание: солнышко встаёт, часы на шести.", "A timetable: a rising sun and a clock at six."),
      p("l1-3")),
    v("ptma1-4", "Quanto tempo dura a viagem?", t("Сколько длится поездка?", "How long does the trip take?"),
      t("Мурзик загибает пальцы, считая дни.", "Murzik counts the days on his fingers."),
      p("l1-4")),
    v("ptma1-5", "Dura cinco dias.", t("Пять дней.", "It takes five days."),
      t("Календарь с пятью отмеченными днями.", "A calendar with five days marked."),
      p("l1-5")),
    v("ptma1-6", "Ida e volta?", t("Туда и обратно?", "Return?"),
      t("Две стрелки: туда и обратно.", "Two arrows: there and back."),
      p("l1-6")),
    v("ptma1-7", "Só ida.", t("Только в одну сторону.", "Just one way."),
      t("Одна стрелка, указывающая вперёд.", "One arrow pointing forward."),
      p("l1-7")),
  ],
  dialogue: {
    title: t("В речном порту", "At the river port"),
    note: t(
      "Às seis — «в шесть». Rede — «гамак»: на амазонских теплоходах все спят в гамаках на палубе.",
      "Às seis means “at six”. Rede means “hammock” — on Amazon riverboats everyone sleeps in hammocks on deck.",
    ),
    lines: [
      line("bia", "Bom dia! Duas passagens para Belém, por favor.", t("Доброе утро! Два билета до Белена, пожалуйста.", "Good morning! Two tickets to Belém, please.")),
      line("cashier", "Ida e volta?", t("Туда и обратно?", "Return?")),
      line("bia", "Só ida.", t("Только туда.", "Just one way.")),
      line("murzik", "Quando sai o barco?", t("Когда отправляется теплоход?", "When does the boat leave?")),
      line("cashier", "O barco sai amanhã cedo, às seis.", t("Завтра рано утром, в шесть.", "Early tomorrow, at six.")),
      line("murzik", "E quanto tempo dura a viagem?", t("А сколько длится поездка?", "And how long does the trip take?")),
      line("cashier", "Dura cinco dias. Vocês têm rede?", t("Пять дней. У вас есть гамаки?", "Five days. Have you got hammocks?")),
      line("bia", "Cinco dias? Nossa! Mas eu adoro barco!", t("Пять дней? Ого! Но я обожаю теплоходы!", "Five days? Wow! But I love boats!")),
    ],
    gist: choice("ptma1-d1", t("Сколько длится поездка до Белена?", "How long is the trip to Belém?"), [
      [t("Пять дней.", "Five days."), true],
      [t("Один день.", "One day."), false],
      [t("Два часа.", "Two hours."), false],
    ]),
  },
  grammar: [
    g(
      t("Когда и сколько времени: quando, quanto tempo", "When and how long: quando, quanto tempo"),
      [
        t(
          "Quando? — «когда?»: Quando sai o barco? Quanto tempo? — «сколько времени?»: Quanto tempo dura a viagem? Ответ: Dura cinco dias — «длится пять дней».",
          "Quando? means “when?”: Quando sai o barco? Quanto tempo? means “how long?”: Quanto tempo dura a viagem? The answer: Dura cinco dias — it lasts five days.",
        ),
        t(
          "Sai — «отправляется, выходит», от sair (помнишь eu saio?).",
          "Sai (leaves) comes from sair — remember eu saio?",
        ),
      ],
      [
        ["Quando sai o ônibus?", t("Когда отходит автобус?", "When does the bus leave?")],
        ["A viagem dura duas horas.", t("Поездка длится два часа.", "The trip takes two hours.")],
      ],
    ),
  ],
  tasks: [
    choice("ptma1-t1", t("Как спросить «Сколько длится поездка?»", "How do you ask “How long does the trip take?”"), [
      ["Quanto tempo dura a viagem?", true],
      ["Quantos anos dura a viagem?", false],
      ["Quando dura a viagem?", false],
    ], { skill: "grammar" }),
    listen("ptma1-t2", t("Послушай. Когда отправляется теплоход?", "Listen. When does the boat leave?"), "O barco sai amanhã cedo.", [
      [t("Завтра рано утром.", "Early tomorrow morning."), true],
      [t("Сегодня вечером.", "This evening."), false],
      [t("Через неделю.", "In a week."), false],
    ]),
    match("ptma1-t3", PAIRS, [
      ["a passagem", t("билет", "the ticket")],
      ["ida e volta", t("туда и обратно", "return")],
      ["só ida", t("в одну сторону", "one way")],
      ["a viagem", t("поездка", "the trip")],
    ], { skill: "words" }),
    spell("ptma1-t4", t("Собери из букв слово «поездка».", "Spell the word for “trip”."), "viagem"),
    speak("ptma1-t5", "Bom dia! Para onde?", "Uma passagem para Belém, por favor. Só ida.", t("Один билет до Белена, пожалуйста. В одну сторону.", "One ticket to Belém, please. One way."), {
      help: t("Купи вслух билет.", "Buy a ticket aloud."),
    }),
    choice("ptma1-t6", t("Как сказать «Береги себя!»?", "How do you say “Take care!”?"), [
      ["Cuide-se!", true],
      ["Melhoras!", false],
      ["Descanse!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "compass",
    itemName: t("Компас", "Compass"),
    itemNameRu: "Bússola",
    ru: "Oba! Uma bússola!",
    en: t("Ура! Компас!", "Hooray! A compass!"),
    a11y: t("На столике лежит старый латунный компас с откидной крышкой.", "An old brass compass with a hinged lid lies on the little table."),
    image: p("compass"),
    steps: [
      t("В порту старик продаёт морские безделушки.", "An old man at the port sells seafaring knick-knacks."),
      t("Мурзик покупает старый компас.", "Murzik buys an old compass."),
      t("«Para não se perder no rio!» — «Чтобы не заблудиться на реке!»", "“Para não se perder no rio!” — “So you don't get lost on the river!”"),
      t("Стрелка показывает на север. А им — на восток, вниз по реке к океану!", "The needle points north. Their way is east — down the river to the ocean!"),
    ],
    bridge: t("На рассвете они поднимаются на теплоход. Палуба полна гамаков.", "At dawn they climb aboard. The deck is full of hammocks."),
  },
};

const ma2: Lesson = {
  id: "pt-a1-manaus-2",
  level: "A1",
  cityId: "pt-manaus",
  number: 2,
  title: t("No barco — На теплоходе", "No barco — On the boat"),
  minutes: 7,
  goals: [
    t("Устроиться на палубе", "Settle in on deck"),
    t("Сказать «рядом с», «между»", "Say “next to” and “between”"),
    t("Познакомиться с соседями", "Meet your neighbours"),
  ],
  vocabNote: t(
    "Convés — «палуба». Pendurar — «вешать»: Onde eu penduro a rede? — «Куда повесить гамак?»",
    "Convés means “deck”. Pendurar means “to hang”: Onde eu penduro a rede? — Where do I hang my hammock?",
  ),
  vocab: [
    v("ptma2-1", "Onde eu penduro a rede?", t("Куда повесить гамак?", "Where do I hang my hammock?"),
      t("Мурзик держит свёрнутый гамак на палубе, полной гамаков.", "Murzik holds a rolled-up hammock on a deck full of hammocks."),
      p("l2-1")),
    v("ptma2-2", "Pode pendurar aqui.", t("Можно повесить здесь.", "You can hang it here."),
      t("Пожилой капитан в фуражке показывает на свободное место.", "An old captain in a peaked cap points to a free spot."),
      p("l2-2")),
    v("ptma2-3", "ao lado da Bia", t("рядом с Бией", "next to Bia"),
      t("Два гамака рядом: Мурзика и Бии.", "Two hammocks side by side: Murzik's and Bia's."),
      p("l2-3")),
    v("ptma2-4", "entre duas famílias", t("между двумя семьями", "between two families"),
      t("Гамаки Мурзика и Бии между двумя большими семьями.", "Murzik and Bia's hammocks between two big families."),
      p("l2-4")),
    v("ptma2-5", "Bom dia, vizinho!", t("Доброе утро, сосед!", "Morning, neighbour!"),
      t("Мальчик из соседнего гамака машет Мурзику.", "A boy in the next hammock waves to Murzik."),
      p("l2-5")),
    v("ptma2-6", "Que vento bom!", t("Какой приятный ветерок!", "What a lovely breeze!"),
      t("Мурзик стоит у борта, ветер раздувает усы.", "Murzik stands at the rail, the breeze ruffling his whiskers."),
      p("l2-6")),
    v("ptma2-7", "O barco está partindo!", t("Теплоход отходит!", "The boat's leaving!"),
      t("Теплоход отходит от причала, гудит гудок.", "The boat pulls away from the quay, its horn sounding."),
      p("l2-7")),
  ],
  dialogue: {
    title: t("Капитан Раймунду", "Captain Raimundo"),
    note: t(
      "Capitão — «капитан». Todo mundo — «все». Bem-vindos — «добро пожаловать».",
      "Capitão means “captain”. Todo mundo means “everybody”. Bem-vindos means “welcome”.",
    ),
    lines: [
      line("raimundo", "Bem-vindos ao meu barco! Eu sou o Raimundo, o capitão.", t("Добро пожаловать на мой теплоход! Я Раймунду, капитан.", "Welcome aboard my boat! I'm Raimundo, the captain.")),
      line("murzik", "Capitão, onde eu penduro a rede?", t("Капитан, куда повесить гамак?", "Captain, where do I hang my hammock?")),
      line("raimundo", "Pode pendurar aqui, ao lado da Bia. Entre duas famílias.", t("Можно здесь, рядом с Бией. Между двумя семьями.", "You can hang it here, next to Bia. Between two families.")),
      line("joao", "Bom dia, vizinho!", t("Доброе утро, сосед!", "Morning, neighbour!")),
      line("murzik", "Bom dia! Que vento bom!", t("Доброе утро! Какой приятный ветерок!", "Morning! What a lovely breeze!")),
      line("raimundo", "Atenção, todo mundo! O barco está partindo!", t("Внимание всем! Теплоход отходит!", "Attention, everybody! The boat's leaving!")),
    ],
    gist: choice("ptma2-d1", t("Где Мурзик вешает гамак?", "Where does Murzik hang his hammock?"), [
      [t("Рядом с Бией, между двумя семьями.", "Next to Bia, between two families."), true],
      [t("В каюте капитана.", "In the captain's cabin."), false],
      [t("На берегу.", "On the bank."), false],
    ]),
  },
  grammar: [
    g(
      t("Где: ao lado de, entre, na frente de, atrás de", "Where: ao lado de, entre, na frente de, atrás de"),
      [
        t(
          "Ao lado de — «рядом с»: ao lado da Bia (de + a). Entre — «между»: entre duas famílias. Na frente de — «перед», atrás de — «за, позади».",
          "Ao lado de means “next to”: ao lado da Bia (de + a). Entre means “between”: entre duas famílias. Na frente de means “in front of”, atrás de “behind”.",
        ),
        t(
          "Не забывай про слияния: ao lado do capitão, atrás da cozinha.",
          "Remember the joining: ao lado do capitão, atrás da cozinha.",
        ),
      ],
      [
        ["O banheiro é atrás da cozinha.", t("Туалет за кухней.", "The toilet is behind the kitchen.")],
        ["Eu durmo ao lado do Murzik.", t("Я сплю рядом с Мурзиком.", "I sleep next to Murzik.")],
      ],
    ),
  ],
  tasks: [
    choice("ptma2-t1", t("Как сказать «рядом с капитаном»? (o capitão)", "How do you say “next to the captain”? (o capitão)"), [
      ["ao lado do capitão", true],
      ["ao lado da capitão", false],
      ["ao lado o capitão", false],
    ], { skill: "grammar" }),
    listen("ptma2-t2", t("Послушай. Что говорит капитан?", "Listen. What does the captain say?"), "O barco está partindo!", [
      [t("Теплоход отходит!", "The boat's leaving!"), true],
      [t("Теплоход приплыл!", "The boat has arrived!"), false],
      [t("Теплоход сломался!", "The boat has broken down!"), false],
    ]),
    match("ptma2-t3", PAIRS, [
      ["ao lado de", t("рядом с", "next to")],
      ["entre", t("между", "between")],
      ["atrás de", t("за, позади", "behind")],
      ["na frente de", t("перед", "in front of")],
    ], { skill: "words" }),
    missing("ptma2-t4", t("Какой буквы не хватает? («сосед»)", "Which letter is missing? (“neighbour”)"), "vi", "inho", "z", ["z", "s", "ç"]),
    speak("ptma2-t5", "Bom dia, vizinho!", "Bom dia! Que vento bom!", t("Доброе утро! Какой приятный ветерок!", "Morning! What a lovely breeze!"), {
      help: t("Поздоровайся вслух с соседом.", "Say good morning to your neighbour, aloud."),
    }),
    choice("ptma2-t6", t("Как спросить «Когда отправляется теплоход?»", "How do you ask “When does the boat leave?”"), [
      ["Quando sai o barco?", true],
      ["Quanto custa o barco?", false],
      ["Onde é o barco?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "boat-hammock",
    itemName: t("Гамак для теплохода", "Riverboat hammock"),
    itemNameRu: "Rede de barco",
    ru: "Oba! Uma rede de barco!",
    en: t("Ура! Гамак для теплохода!", "Hooray! A riverboat hammock!"),
    a11y: t("На палубе висит ярко-синий гамак с бахромой.", "A bright blue fringed hammock hangs on the deck."),
    image: p("hammock"),
    steps: [
      t("Мурзик вешает новый синий гамак.", "Murzik hangs up a new blue hammock."),
      t("Он качается, глядя на реку.", "He sways gently, watching the river."),
      t("«Aqui é a minha casa por cinco dias!» — «Это мой дом на пять дней!»", "“Aqui é a minha casa por cinco dias!” — “This is my home for five days!”"),
      t("Гамак качается в такт волнам.", "The hammock rocks with the waves."),
    ],
    bridge: t("Днём капитан зовёт всех к борту: «Olhem! O encontro das águas!»", "In the afternoon the captain calls everyone to the rail: “Olhem! O encontro das águas!”"),
  },
};

const ma3: Lesson = {
  id: "pt-a1-manaus-3",
  level: "A1",
  cityId: "pt-manaus",
  number: 3,
  title: t("O encontro das águas — Встреча вод", "O encontro das águas — The meeting of the waters"),
  minutes: 7,
  goals: [
    t("Описать реку", "Describe a river"),
    t("Спросить «почему?» и ответить «потому что»", "Ask “why?” and answer “because”"),
    t("Удивиться: Que incrível!", "React: Que incrível!"),
  ],
  vocabNote: t(
    "Por que…? — «почему?» (раздельно; в конце фразы — por quê?). Porque — «потому что» (слитно). Звучат одинаково!",
    "Por que…? (two words; at the end of a sentence, por quê?) means “why?”. Porque (one word) means “because”. They sound exactly the same!",
  ),
  vocab: [
    v("ptma3-1", "O rio é escuro.", t("Река тёмная.", "The river is dark."),
      t("Тёмная, почти чёрная вода реки Риу-Негру.", "The dark, almost black water of the Rio Negro."),
      p("l3-1")),
    v("ptma3-2", "O outro rio é claro.", t("Другая река светлая.", "The other river is light."),
      t("Светлая, песочного цвета вода Солимойнс.", "The light, sandy-coloured water of the Solimões."),
      p("l3-2")),
    v("ptma3-3", "As águas não se misturam.", t("Воды не смешиваются.", "The waters don't mix."),
      t("Тёмная и светлая вода текут рядом, граница видна.", "Dark and light water flow side by side with a clear line between them."),
      p("l3-3")),
    v("ptma3-4", "Por quê?", t("Почему?", "Why?"),
      t("Мурзик вопросительно наклоняет голову.", "Murzik tilts his head questioningly."),
      p("l3-4")),
    v("ptma3-5", "Porque a água é diferente.", t("Потому что вода разная.", "Because the water is different."),
      t("Капитан показывает два стакана: с тёмной и светлой водой.", "The captain holds up two glasses: one of dark water, one of light."),
      p("l3-5")),
    v("ptma3-6", "Que incrível!", t("Невероятно!", "Incredible!"),
      t("Мурзик в изумлении свешивается через борт.", "Murzik leans over the rail in amazement."),
      p("l3-6")),
    v("ptma3-7", "Olha os botos!", t("Смотри, речные дельфины!", "Look, river dolphins!"),
      t("Из воды выпрыгивают розовые дельфины.", "Pink dolphins leap out of the water."),
      p("l3-7")),
  ],
  dialogue: {
    title: t("Две реки", "Two rivers"),
    note: t(
      "Encontro — «встреча». Quilômetros — «километры». Boto — розовый речной дельфин Амазонки.",
      "Encontro means “meeting”. Quilômetros means “kilometres”. A boto is the pink river dolphin of the Amazon.",
    ),
    lines: [
      line("raimundo", "Olhem! O encontro das águas!", t("Смотрите! Встреча вод!", "Look! The meeting of the waters!")),
      line("murzik", "Este rio é escuro, e o outro rio é claro!", t("Эта река тёмная, а другая — светлая!", "This river is dark, and the other one is light!")),
      line("raimundo", "Isso. E as águas não se misturam por muitos quilômetros.", t("Да. И воды не смешиваются много километров.", "That's right. And the waters don't mix for many kilometres.")),
      line("murzik", "Por quê?", t("Почему?", "Why?")),
      line("raimundo", "Porque a água é diferente: uma é quente, a outra é fria.", t("Потому что вода разная: одна тёплая, другая холодная.", "Because the water is different: one's warm, the other's cold.")),
      line("murzik", "Que incrível!", t("Невероятно!", "Incredible!")),
      line("bia", "E olha os botos! Eles são cor-de-rosa!", t("А смотри, дельфины! Они розовые!", "And look at the dolphins! They're pink!")),
    ],
    gist: choice("ptma3-d1", t("Почему воды не смешиваются?", "Why don't the waters mix?"), [
      [t("Потому что вода разная.", "Because the water is different."), true],
      [t("Потому что между ними стена.", "Because there's a wall between them."), false],
      [t("Потому что одна река стоит.", "Because one river doesn't move."), false],
    ]),
  },
  grammar: [
    g(
      t("Почему и потому что: por que и porque", "Why and because: por que and porque"),
      [
        t(
          "Вопрос «почему?» — por que? (раздельно; в конце фразы — por quê?). Ответ «потому что» — porque (слитно). На слух не отличишь, только на письме.",
          "The question “why?” is por que? (two words; at the very end of a sentence, por quê?). The answer “because” is porque (one word). You can only tell them apart in writing.",
        ),
        t(
          "Diferente — «разный, другой». Cor-de-rosa — «розовый», не меняется по роду.",
          "Diferente means “different”. Cor-de-rosa means “pink” — it doesn't change for gender.",
        ),
      ],
      [
        ["Por que você está feliz? — Porque eu vi os botos!", t("Почему ты счастлив(а)? — Потому что я видел(а) дельфинов!", "Why are you happy? — Because I saw the dolphins!")],
        ["Por que o rio é escuro?", t("Почему река тёмная?", "Why is the river dark?")],
      ],
    ),
  ],
  tasks: [
    choice("ptma3-t1", t("Как ответить «Потому что вода разная»?", "How do you answer “Because the water is different”?"), [
      ["Porque a água é diferente.", true],
      ["Por que a água é diferente.", false],
      ["Por quê a água diferente.", false],
    ], { skill: "grammar" }),
    listen("ptma3-t2", t("Послушай. Что видит Биа?", "Listen. What does Bia see?"), "Olha os botos!", [
      [t("Речных дельфинов.", "River dolphins."), true],
      [t("Кайманов.", "Caimans."), false],
      [t("Рыбаков.", "Fishermen."), false],
    ]),
    match("ptma3-t3", PAIRS, [
      ["escuro", t("тёмный", "dark")],
      ["claro", t("светлый", "light")],
      ["diferente", t("разный", "different")],
      ["o boto", t("речной дельфин", "the river dolphin")],
    ], { skill: "words" }),
    spell("ptma3-t4", t("Собери из букв слово «тёмный».", "Spell the word for “dark”."), "escuro"),
    speak("ptma3-t5", "Por que você estuda português?", "Porque eu gosto do Brasil!", t("Потому что мне нравится Бразилия! (Назови свою причину.)", "Because I like Brazil! (Give your own reason.)"), {
      help: t("Ответь вслух, почему ты учишь португальский.", "Say aloud why you're learning Portuguese."),
    }),
    choice("ptma3-t6", t("Как сказать «рядом с Бией»?", "How do you say “next to Bia”?"), [
      ["ao lado da Bia", true],
      ["entre a Bia", false],
      ["ao lado do Bia", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "jar",
    itemName: t("Две баночки с водой", "Two jars of river water"),
    itemNameRu: "Potinhos de água",
    ru: "Oba! Dois potinhos!",
    en: t("Ура! Две баночки!", "Hooray! Two little jars!"),
    a11y: t("На полке рядом стоят две маленькие баночки: с тёмной и со светлой водой.", "Two small jars stand side by side on the shelf: one of dark water and one of light."),
    image: p("jar"),
    steps: [
      t("Капитан набирает воду из двух рек в две баночки.", "The captain fills two little jars with water from each river."),
      t("«Uma escura, uma clara!» — «Одна тёмная, одна светлая!»", "“Uma escura, uma clara!” — “One dark, one light!”"),
      t("Мурзик бережно ставит их рядом.", "Murzik carefully stands them side by side."),
      t("Как две реки.", "Just like the two rivers."),
    ],
    bridge: t("Вечером на палубе все рассказывают истории. Мурзик рассказывает о своём путешествии.", "In the evening everyone on deck tells stories. Murzik tells them about his journey."),
  },
};

const ma4: Lesson = {
  id: "pt-a1-manaus-4",
  level: "A1",
  cityId: "pt-manaus",
  number: 4,
  title: t("Eu fui, eu fiz — Я ездил, я делал", "Eu fui, eu fiz — I went, I did"),
  minutes: 7,
  goals: [
    t("Рассказать о путешествии в прошедшем", "Tell the story of a trip in the past"),
    t("Неправильные формы: fui, fiz, tive", "Irregular forms: fui, fiz, tive"),
    t("Спросить «Где ты был(а)?»", "Ask “Where have you been?”"),
  ],
  vocabNote: t(
    "Fui — «я был(а)» и «я ездил(а)»: у ser и ir в прошедшем одни и те же формы. Понятно по смыслу.",
    "Fui means both “I was” and “I went” — ser and ir share their past forms. The context tells you which.",
  ),
  vocab: [
    v("ptma4-1", "Eu fui ao Rio.", t("Я ездил(а) в Рио.", "I went to Rio."),
      t("Мурзик показывает на карте Рио.", "Murzik points to Rio on the map."),
      p("l4-1")),
    v("ptma4-2", "Nós fomos a muitas cidades.", t("Мы побывали во многих городах.", "We've been to lots of cities."),
      t("Карта Бразилии, вся в точках и стрелках.", "A map of Brazil covered in dots and arrows."),
      p("l4-2")),
    v("ptma4-3", "Eu fiz muitos amigos.", t("Я нашёл (нашла) много друзей.", "I made lots of friends."),
      t("Альбом раскрыт: фото Мурзика с Каю, Жулианой, доной Мартой.", "The album lies open: photos of Murzik with Caio, Juliana, Dona Marta."),
      p("l4-3")),
    v("ptma4-4", "Eu tive um problema.", t("У меня была проблема.", "I had a problem."),
      t("Мурзик красный от солнца, с холодным компрессом на голове.", "A sunburnt Murzik with an ice pack on his head."),
      p("l4-4")),
    v("ptma4-5", "Onde você foi?", t("Где ты был(а)?", "Where did you go?"),
      t("Мальчик-сосед с интересом слушает Мурзика.", "The boy from the next hammock listens to Murzik eagerly."),
      p("l4-5")),
    v("ptma4-6", "O que vocês fizeram?", t("Что вы делали?", "What did you do?"),
      t("Пассажиры собрались вокруг гамаков.", "Passengers gather round the hammocks."),
      p("l4-6")),
    v("ptma4-7", "Foi uma aventura!", t("Это было настоящее приключение!", "It was an adventure!"),
      t("Мурзик широко разводит лапами.", "Murzik spreads his paws wide."),
      p("l4-7")),
  ],
  dialogue: {
    title: t("Истории на палубе", "Stories on deck"),
    note: t(
      "Atrás de — «вслед за». Desde — «с (какого-то момента)».",
      "Atrás de means “after, chasing”. Desde means “since”.",
    ),
    lines: [
      line("joao", "Murzik, onde você foi?", t("Мурзик, где ты был?", "Murzik, where have you been?")),
      line("murzik", "Eu fui ao Rio, a Paraty, a São Paulo… Nós fomos a muitas cidades!", t("Я был в Рио, в Парати, в Сан-Паулу… Мы побывали во многих городах!", "I went to Rio, Paraty, São Paulo… We've been to lots of cities!")),
      line("joao", "E o que vocês fizeram?", t("А что вы делали?", "And what did you do?")),
      line("bia", "Nós fomos atrás de um papagaio! Desde o Rio!", t("Мы ехали за попугаем! От самого Рио!", "We've been chasing a parrot! All the way from Rio!")),
      line("murzik", "Eu fiz muitos amigos. E eu tive um problema em Fortaleza: muito sol!", t("Я нашёл много друзей. А в Форталезе у меня была проблема: слишком много солнца!", "I made lots of friends. And I had a problem in Fortaleza: too much sun!")),
      line("joao", "Que legal!", t("Как здорово!", "Cool!")),
      line("murzik", "Foi uma aventura!", t("Это было настоящее приключение!", "It's been an adventure!")),
    ],
    gist: choice("ptma4-d1", t("Какая проблема была у Мурзика в Форталезе?", "What problem did Murzik have in Fortaleza?"), [
      [t("Слишком много солнца.", "Too much sun."), true],
      [t("Он потерял билет.", "He lost his ticket."), false],
      [t("Он опоздал на автобус.", "He missed the bus."), false],
    ]),
  },
  grammar: [
    g(
      t("Неправильные: ir, fazer, ter в прошедшем", "Irregular pasts: ir, fazer, ter"),
      [
        t(
          "Ir и ser («ехать», «быть»): eu fui, você / ele foi, nós fomos, eles foram. Fazer («делать»): eu fiz, ele fez, nós fizemos, eles fizeram. Ter («иметь»): eu tive, ele teve, nós tivemos, eles tiveram.",
          "Ir / ser: eu fui, você / ele foi, nós fomos, eles foram. Fazer: eu fiz, ele fez, nós fizemos, eles fizeram. Ter: eu tive, ele teve, nós tivemos, eles tiveram.",
        ),
        t(
          "Fazer amigos — «заводить друзей», буквально «делать друзей».",
          "Fazer amigos means “to make friends” — just like in English.",
        ),
      ],
      [
        ["Ontem nós fomos à praia.", t("Вчера мы ходили на пляж.", "Yesterday we went to the beach.")],
        ["Ele fez o jantar.", t("Он приготовил ужин.", "He made dinner.")],
      ],
    ),
  ],
  tasks: [
    choice("ptma4-t1", t("Как сказать «Мы ездили в Бразилию»?", "How do you say “We went to Brazil”?"), [
      ["Nós fomos ao Brasil.", true],
      ["Nós foram ao Brasil.", false],
      ["Nós vamos ao Brasil ontem.", false],
    ], { skill: "grammar" }),
    listen("ptma4-t2", t("Послушай. Что было у человека?", "Listen. What did the person have?"), "Eu tive um problema.", [
      [t("Проблема.", "A problem."), true],
      [t("Друг.", "A friend."), false],
      [t("Билет.", "A ticket."), false],
    ]),
    match("ptma4-t3", PAIRS, [
      ["fui", t("я ездил(а), я был(а)", "I went, I was")],
      ["fiz", t("я сделал(а)", "I did, I made")],
      ["tive", t("у меня был(а)", "I had")],
      ["fomos", t("мы ездили", "we went")],
    ], { skill: "words" }),
    missing("ptma4-t4", t("Какой буквы не хватает? («приключение»)", "Which letter is missing? (“adventure”)"), "aven", "ura", "t", ["t", "d", "ch"]),
    speak("ptma4-t5", "Onde você foi nas férias?", "Eu fui à praia e fiz muitos amigos.", t("Я ездил(а) на море и нашёл (нашла) много друзей.", "I went to the seaside and made lots of friends."), {
      help: t("Расскажи вслух о своей поездке.", "Talk about a trip you've taken, aloud."),
    }),
    choice("ptma4-t6", t("Как ответить «Потому что я люблю Бразилию»?", "How do you answer “Because I love Brazil”?"), [
      ["Porque eu amo o Brasil.", true],
      ["Por que eu amo o Brasil?", false],
      ["Por quê, eu amo o Brasil.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "guarana",
    itemName: t("Бутылочка гуараны", "Bottle of guaraná"),
    itemNameRu: "Guaraná",
    ru: "Oba! Um guaraná!",
    en: t("Ура! Гуарана!", "Hooray! A guaraná!"),
    a11y: t("На полке стоит маленькая бутылочка гуараны, рядом — красная ягода с чёрным «глазком».", "A small bottle of guaraná stands on the shelf, next to a red berry with a little black “eye”."),
    image: p("guarana"),
    steps: [
      t("Мальчик-сосед угощает Мурзика гуараной.", "The boy in the next hammock treats Murzik to a guaraná."),
      t("«É da Amazônia!» — «Это из Амазонии!»", "“É da Amazônia!” — “It comes from the Amazon!”"),
      t("Ягода гуараны похожа на маленький глаз.", "The guaraná berry looks like a little eye."),
      t("Бутылочка стоит на полке.", "The bottle stands on the shelf."),
    ],
    bridge: t("Вечером теплоход возвращается в порт Манауса за грузом и стоит там до утра. Капитан ведёт их в знаменитый театр.", "In the evening the boat goes back to the port of Manaus for cargo and stays there until morning. The captain takes them to a famous theatre."),
  },
};

const ma5: Lesson = {
  id: "pt-a1-manaus-5",
  level: "A1",
  cityId: "pt-manaus",
  number: 5,
  title: t("O Teatro Amazonas — Театр Амазонас", "O Teatro Amazonas — The Amazon Theatre"),
  minutes: 7,
  goals: [
    t("Спросить «Ты когда-нибудь…?»", "Ask “Have you ever…?”"),
    t("Сказать «я никогда не был(а)»", "Say “I've never been”"),
    t("Вести себя в театре", "Behave at the theatre"),
  ],
  vocabNote: t(
    "Театр Амазонас построили больше ста лет назад посреди джунглей, когда Манаус был очень богатым городом.",
    "The Teatro Amazonas was built more than a hundred years ago in the middle of the jungle, when Manaus was a very rich city.",
  ),
  vocab: [
    v("ptma5-1", "Você já foi à ópera?", t("Ты когда-нибудь был(а) в опере?", "Have you ever been to the opera?"),
      t("Мурзик и Биа перед розовым театром с разноцветным куполом.", "Murzik and Bia in front of a pink theatre with a colourful dome."),
      p("l5-1")),
    v("ptma5-2", "Eu nunca fui.", t("Я никогда не был(а).", "I've never been."),
      t("Мурзик смущённо качает головой.", "Murzik shakes his head shyly."),
      p("l5-2")),
    v("ptma5-3", "Tem uma ópera hoje à noite.", t("Сегодня вечером опера.", "There's an opera tonight."),
      t("Афиша оперы у входа в театр.", "An opera poster at the theatre entrance."),
      p("l5-3")),
    v("ptma5-4", "Que luxo!", t("Какая роскошь!", "How luxurious!"),
      t("Золотой зал с красными креслами и огромной люстрой.", "A golden auditorium with red seats and a huge chandelier."),
      p("l5-4")),
    v("ptma5-5", "Silêncio, por favor.", t("Тише, пожалуйста.", "Quiet, please."),
      t("Билетёрша прикладывает палец к губам.", "An usher puts a finger to her lips."),
      p("l5-5")),
    v("ptma5-6", "Bravo!", t("Браво!", "Well done!"),
      t("Зал аплодирует певице на сцене.", "The audience applauds a singer on stage."),
      p("l5-6")),
    v("ptma5-7", "Eu já vi muitas coisas.", t("Я уже многое повидал(а).", "I've already seen lots of things."),
      t("Мурзик задумчиво листает альбом с фотографиями.", "Murzik thoughtfully leafs through his photo album."),
      p("l5-7")),
  ],
  dialogue: {
    title: t("Вечер в опере", "An evening at the opera"),
    note: t(
      "Cúpula — «купол». Lustre — «люстра». Primeira vez — «в первый раз».",
      "Cúpula means “dome”. Lustre means “chandelier”. Primeira vez means “first time”.",
    ),
    lines: [
      line("raimundo", "Este é o Teatro Amazonas! Olhem a cúpula!", t("Это театр Амазонас! Посмотрите на купол!", "This is the Teatro Amazonas! Look at the dome!")),
      line("bia", "Murzik, você já foi à ópera?", t("Мурзик, ты когда-нибудь был в опере?", "Murzik, have you ever been to the opera?")),
      line("murzik", "Não, eu nunca fui. É a primeira vez!", t("Нет, никогда. Это в первый раз!", "No, I've never been. It's my first time!")),
      line("raimundo", "Tem uma ópera hoje à noite. Vamos?", t("Сегодня вечером опера. Пойдём?", "There's an opera tonight. Shall we go?")),
      line("murzik", "Nossa! Que luxo! E o lustre!", t("Ого! Какая роскошь! А люстра!", "Wow! How luxurious! And the chandelier!")),
      line("bia", "Shhh! Silêncio, por favor.", t("Тсс! Тише, пожалуйста.", "Shhh! Quiet, please.")),
      line("murzik", "Bravo! Bravo!", t("Браво! Браво!", "Well done! Well done!")),
    ],
    gist: choice("ptma5-d1", t("Был ли Мурзик раньше в опере?", "Had Murzik ever been to the opera before?"), [
      [t("Нет, это в первый раз.", "No, it's his first time."), true],
      [t("Да, много раз.", "Yes, many times."), false],
      [t("Да, в Париже.", "Yes, in Paris."), false],
    ]),
  },
  grammar: [
    g(
      t("Já и nunca с прошедшим", "Já and nunca with the past"),
      [
        t(
          "Já + прошедшее — «уже, когда-нибудь»: Você já foi à ópera? — «Ты когда-нибудь был(а) в опере?», Eu já vi — «я уже видел(а)». Nunca + прошедшее — «никогда не»: Eu nunca fui.",
          "Já + past means “already” or “ever”: Você já foi à ópera? — Have you ever been to the opera? Eu já vi — I've already seen it. Nunca + past means “never”: Eu nunca fui — I've never been.",
        ),
        t(
          "Это то же прошедшее время, что и раньше, — отдельного «опыта» в португальском нет.",
          "Portuguese has no separate present perfect here — it simply uses the past tense with já or nunca.",
        ),
      ],
      [
        ["Você já comeu açaí?", t("Ты когда-нибудь ел(а) асаи?", "Have you ever eaten açaí?")],
        ["Eu nunca vi neve.", t("Я никогда не видел(а) снег.", "I've never seen snow.")],
      ],
    ),
  ],
  tasks: [
    choice("ptma5-t1", t("Как спросить «Ты когда-нибудь был(а) в Бразилии?»", "How do you ask “Have you ever been to Brazil?”"), [
      ["Você já foi ao Brasil?", true],
      ["Você nunca vai ao Brasil?", false],
      ["Você é já Brasil?", false],
    ], { skill: "grammar" }),
    listen("ptma5-t2", t("Послушай. Что говорит билетёрша?", "Listen. What does the usher say?"), "Silêncio, por favor.", [
      [t("Тише, пожалуйста.", "Quiet, please."), true],
      [t("Браво!", "Well done!"), false],
      [t("Ваш билет, пожалуйста.", "Your ticket, please."), false],
    ]),
    match("ptma5-t3", PAIRS, [
      ["já", t("уже, когда-нибудь", "already, ever")],
      ["nunca", t("никогда", "never")],
      ["a ópera", t("опера", "the opera")],
      ["o luxo", t("роскошь", "luxury")],
    ], { skill: "words" }),
    spell("ptma5-t4", t("Собери из букв слово «тишина».", "Spell the word for “silence”."), "silêncio"),
    speak("ptma5-t5", "Você já foi à ópera?", "Não, eu nunca fui. Mas eu quero ir!", t("Нет, никогда. Но я хочу пойти!", "No, I've never been. But I'd like to go!"), {
      help: t("Ответь вслух про себя.", "Answer aloud about yourself."),
    }),
    choice("ptma5-t6", t("Как сказать «Я нашёл (нашла) много друзей»?", "How do you say “I made lots of friends”?"), [
      ["Eu fiz muitos amigos.", true],
      ["Eu fez muitos amigos.", false],
      ["Eu faço amigos ontem.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "opera-ticket",
    itemName: t("Билет в оперу", "Opera ticket"),
    itemNameRu: "Ingresso da ópera",
    ru: "Oba! O ingresso da ópera!",
    en: t("Ура! Билет в оперу!", "Hooray! The opera ticket!"),
    a11y: t("Старинный на вид золотистый билет с рисунком купола театра.", "An old-fashioned golden ticket with a drawing of the theatre's dome."),
    image: p("opera-ticket"),
    steps: [
      t("После оперы Мурзик бережно хранит билет.", "After the opera Murzik carefully keeps his ticket."),
      t("«A minha primeira ópera!» — «Моя первая опера!»", "“A minha primeira ópera!” — “My first opera!”"),
      t("Он кладёт его в альбом между фото.", "He tucks it into the album between the photos."),
      t("А утром снова на палубу — в путь!", "And the next morning — on board, and onwards!"),
    ],
    bridge: t("Утром теплоход пристаёт у лесной деревни. Капитан зовёт на прогулку в лес.", "In the morning the boat stops at a forest village. The captain invites them for a walk in the jungle."),
  },
};

const ma6: Lesson = {
  id: "pt-a1-manaus-6",
  level: "A1",
  cityId: "pt-manaus",
  number: 6,
  title: t("Na floresta — В лесу", "Na floresta — In the forest"),
  minutes: 7,
  goals: [
    t("Понять предупреждения в лесу", "Understand warnings in the forest"),
    t("Сказать «не трогай!», «не ешь!»", "Say “don't touch!”, “don't eat!”"),
    t("Сказать, чего боишься", "Say what you're afraid of"),
  ],
  vocabNote: t(
    "Estou com medo de… — «я боюсь…»: Estou com medo de cobra — «я боюсь змей».",
    "Estou com medo de… means “I'm afraid of…”: Estou com medo de cobra — I'm afraid of snakes.",
  ),
  vocab: [
    v("ptma6-1", "Não toque nisso!", t("Не трогай это!", "Don't touch that!"),
      t("Капитан резко останавливает лапу Мурзика у яркой гусеницы.", "The captain stops Murzik's paw just short of a brightly coloured caterpillar."),
      p("l6-1")),
    v("ptma6-2", "É venenoso?", t("Это ядовитое?", "Is it poisonous?"),
      t("Мурзик испуганно смотрит на гусеницу.", "Murzik looks at the caterpillar in alarm."),
      p("l6-2")),
    v("ptma6-3", "Não coma essa fruta!", t("Не ешь этот фрукт!", "Don't eat that fruit!"),
      t("Капитан отводит руку Мурзика от незнакомой ягоды.", "The captain pulls Murzik's paw away from an unknown berry."),
      p("l6-3")),
    v("ptma6-4", "Escuta os macacos!", t("Послушай обезьян!", "Listen to the monkeys!"),
      t("Обезьяны-ревуны кричат на верхушке дерева.", "Howler monkeys shout from a treetop."),
      p("l6-4")),
    v("ptma6-5", "Que árvore enorme!", t("Какое огромное дерево!", "What an enormous tree!"),
      t("Мурзик у подножия огромного дерева с корнями выше него.", "Murzik at the foot of a giant tree whose roots are taller than he is."),
      p("l6-5")),
    v("ptma6-6", "Estou com medo de cobra.", t("Я боюсь змей.", "I'm scared of snakes."),
      t("Мурзик прячется за Биу, на ветке висит змея.", "Murzik hides behind Bia; a snake hangs from a branch."),
      p("l6-6")),
    v("ptma6-7", "Não se preocupe.", t("Не волнуйся.", "Don't worry."),
      t("Капитан спокойно кладёт руку Мурзику на плечо.", "The captain calmly puts a hand on Murzik's shoulder."),
      p("l6-7")),
  ],
  dialogue: {
    title: t("Тропа в джунглях", "A jungle trail"),
    note: t(
      "Lagarta — «гусеница». Está dormindo — «спит (сейчас)». Fica perto de mim — «держись рядом со мной».",
      "Lagarta means “caterpillar”. Está dormindo means “it's asleep”. Fica perto de mim means “stay close to me”.",
    ),
    lines: [
      line("raimundo", "Fica perto de mim. E não toque nisso!", t("Держись рядом со мной. И не трогай это!", "Stay close to me. And don't touch that!")),
      line("murzik", "A lagarta? É venenosa?", t("Гусеницу? Она ядовитая?", "The caterpillar? Is it poisonous?")),
      line("raimundo", "É! E não coma essa fruta também.", t("Да! И этот фрукт тоже не ешь.", "It is! And don't eat that fruit either.")),
      line("bia", "Escuta os macacos! Que barulho!", t("Послушай обезьян! Какой шум!", "Listen to the monkeys! What a racket!")),
      line("murzik", "Ai! Uma cobra! Estou com medo de cobra!", t("Ай! Змея! Я боюсь змей!", "Eek! A snake! I'm scared of snakes!")),
      line("raimundo", "Não se preocupe. Ela não é venenosa. E ela está dormindo.", t("Не волнуйся. Она не ядовитая. И она спит.", "Don't worry. It's not poisonous. And it's asleep.")),
    ],
    gist: choice("ptma6-d1", t("Чего боится Мурзик?", "What is Murzik afraid of?"), [
      [t("Змей.", "Snakes."), true],
      [t("Обезьян.", "Monkeys."), false],
      [t("Деревьев.", "Trees."), false],
    ]),
  },
  grammar: [
    g(
      t("Не делай: não toque, não coma", "Don't: não toque, não coma"),
      [
        t(
          "Чтобы запретить, ставят não перед вежливой формой: não toque — «не трогай», não coma — «не ешь», não se preocupe — «не волнуйся». Как tome, beba у врача, только с não.",
          "To tell someone not to do something, put não before the polite command form: não toque (don't touch), não coma (don't eat), não se preocupe (don't worry). Same forms as the doctor's tome, beba — just with não.",
        ),
        t(
          "Nisso — «в это, это» (em + isso): Não toque nisso! — «Не трогай это!»",
          "Nisso is em + isso (“in/on that”): Não toque nisso! — Don't touch that!",
        ),
      ],
      [
        ["Não beba essa água!", t("Не пей эту воду!", "Don't drink that water!")],
        ["Não se preocupe, está tudo bem.", t("Не волнуйся, всё хорошо.", "Don't worry, everything's fine.")],
      ],
    ),
  ],
  tasks: [
    choice("ptma6-t1", t("Как сказать «Не пей эту воду!»?", "How do you say “Don't drink that water!”?"), [
      ["Não beba essa água!", true],
      ["Não bebe essa água ontem!", false],
      ["Beba não essa água!", false],
    ], { skill: "grammar" }),
    listen("ptma6-t2", t("Послушай. Что говорит капитан?", "Listen. What does the captain say?"), "Não toque nisso!", [
      [t("Не трогай это!", "Don't touch that!"), true],
      [t("Не ешь это!", "Don't eat that!"), false],
      [t("Не волнуйся!", "Don't worry!"), false],
    ]),
    match("ptma6-t3", PAIRS, [
      ["a cobra", t("змея", "the snake")],
      ["o macaco", t("обезьяна", "the monkey")],
      ["venenoso", t("ядовитый", "poisonous")],
      ["a floresta", t("лес", "the forest")],
    ], { skill: "words" }),
    missing("ptma6-t4", t("Какой буквы не хватает? («змея»)", "Which letter is missing? (“snake”)"), "co", "ra", "b", ["b", "v", "p"]),
    speak("ptma6-t5", "Você tem medo de quê?", "Eu estou com medo de cobra!", t("Я боюсь змей! (Скажи, чего боишься ты.)", "I'm scared of snakes! (Say what you're afraid of.)"), {
      help: t("Скажи вслух, чего ты боишься.", "Say aloud what you're afraid of."),
    }),
    choice("ptma6-t6", t("Как спросить «Ты когда-нибудь был(а) в опере?»", "How do you ask “Have you ever been to the opera?”"), [
      ["Você já foi à ópera?", true],
      ["Você vai à ópera ontem?", false],
      ["Você nunca ópera?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "lily",
    itemName: t("Засушенный цветок кувшинки", "Pressed water-lily flower"),
    itemNameRu: "Flor de vitória-régia",
    ru: "Oba! Uma flor de vitória-régia!",
    en: t("Ура! Цветок кувшинки!", "Hooray! A water-lily flower!"),
    a11y: t("В рамке засушенный бело-розовый цветок огромной амазонской кувшинки.", "A pressed white-and-pink flower from a giant Amazon water lily, in a frame."),
    image: p("lily"),
    steps: [
      t("У деревни на воде растут огромные круглые листья кувшинок.", "By the village, enormous round water-lily leaves float on the water."),
      t("«Uma criança pode sentar nela!» — «На такой лист может сесть ребёнок!»", "“Uma criança pode sentar nela!” — “A child could sit on one!”"),
      t("Девочка из деревни дарит Мурзику засушенный цветок.", "A girl from the village gives Murzik a pressed flower."),
      t("Цветок в рамке стоит у гамака.", "The framed flower stands by the hammock."),
    ],
    bridge: t("Вечером капитан садится рядом с Мурзиком: «Sabe, eu conheço o seu papagaio…»", "In the evening the captain sits down beside Murzik: “Sabe, eu conheço o seu papagaio…”"),
  },
};

const ma7: Lesson = {
  id: "pt-a1-manaus-7",
  level: "A1",
  cityId: "pt-manaus",
  number: 7,
  title: t("Boa viagem! — Счастливого пути!", "Boa viagem! — Have a good trip!"),
  minutes: 8,
  goals: [
    t("Понять, что рассказывают о Пипоке", "Understand what people say about Pipoca"),
    t("Сказать «успеем вовремя»", "Say “we'll make it in time”"),
    t("Вспомнить все слова Манауса", "Review all the words from Manaus"),
  ],
  vocabNote: t(
    "Boa viagem! — «Счастливого пути!» Último — «последний»: o último show — «последний концерт».",
    "Boa viagem! means “Have a good trip!” Último means “last”: o último show — the last concert.",
  ),
  vocab: [
    v("ptma7-1", "Boa viagem!", t("Счастливого пути!", "Have a good trip!"),
      t("Зелёный попугай на перилах теплохода машет крылом пассажирам на причале.", "The green parrot on the riverboat's rail waves a wing at passengers on the quay."),
      p("l7-1")),
    v("ptma7-2", "Ele viajou no meu barco.", t("Он плыл на моём теплоходе.", "He travelled on my boat."),
      t("Капитан гордо показывает на свой теплоход.", "The captain points proudly at his boat."),
      p("l7-2")),
    v("ptma7-3", "Ele falava com todo mundo.", t("Он со всеми разговаривал.", "He talked to everybody."),
      t("Попугай болтает с пассажирами в гамаках.", "The parrot chats with passengers in their hammocks."),
      p("l7-3")),
    v("ptma7-4", "Eles foram para Belém.", t("Они уехали в Белен.", "They've gone to Belém."),
      t("Карта: река впадает в океан, на берегу город.", "A map: the river meets the ocean, with a city on the shore."),
      p("l7-4")),
    v("ptma7-5", "O último show é no sábado!", t("Последний концерт в субботу!", "The last concert is on Saturday!"),
      t("Афиша с надписью-лентой и большой цифрой в календаре.", "A poster with a ribbon and a big date on the calendar."),
      p("l7-5")),
    v("ptma7-6", "Vocês vão chegar a tempo!", t("Вы успеете вовремя!", "You'll get there in time!"),
      t("Капитан у штурвала, теплоход идёт полным ходом.", "The captain at the wheel, the boat at full speed."),
      p("l7-6")),
    v("ptma7-7", "Muito obrigada, capitão!", t("Большое спасибо, капитан! (говорит Биа)", "Thank you so much, captain! (Bia speaking)"),
      t("Биа обнимает капитана на причале.", "Bia hugs the captain on the quay."),
      p("l7-7")),
  ],
  dialogue: {
    title: t("Что сказал попугай", "What the parrot said"),
    note: t(
      "Passageiro — «пассажир». Desembarcava — «сходил на берег». Fofo — «милый, прелесть».",
      "Passageiro means “passenger”. Desembarcava means “got off the boat”. Fofo means “sweet, cute”.",
    ),
    lines: [
      line("raimundo", "Sabe, eu conheço o seu papagaio. Ele viajou no meu barco, com a banda!", t("Знаешь, я знаю твоего попугая. Он плыл на моём теплоходе, с группой!", "You know, I know your parrot. He travelled on my boat, with the band!")),
      line("murzik", "O Pipoca! E o que ele fazia?", t("Пипока! И что он делал?", "Pipoca! And what was he up to?")),
      line("raimundo", "Ele falava com todo mundo. E quando um passageiro desembarcava, ele dizia: Boa viagem! Boa viagem!", t("Он со всеми разговаривал. А когда пассажир сходил на берег, он говорил: «Счастливого пути! Счастливого пути!»", "He talked to everybody. And whenever a passenger got off, he said: Have a good trip! Have a good trip!")),
      line("bia", "Que fofo! E a banda?", t("Какая прелесть! А группа?", "How sweet! And the band?")),
      line("raimundo", "Eles foram para Belém. O último show é no sábado!", t("Они уехали в Белен. Последний концерт — в субботу!", "They've gone to Belém. The last concert is on Saturday!")),
      line("murzik", "No sábado? E o barco chega na sexta…", t("В субботу? А теплоход приходит в пятницу…", "On Saturday? And the boat gets in on Friday…")),
      line("raimundo", "Então vocês vão chegar a tempo! Boa viagem!", t("Значит, вы успеете! Счастливого пути!", "Then you'll get there in time! Have a good trip!")),
      line("bia", "Muito obrigada, capitão!", t("Большое спасибо, капитан!", "Thank you so much, captain!")),
    ],
    gist: choice("ptma7-d1", t("Когда последний концерт группы?", "When is the band's last concert?"), [
      [t("В субботу.", "On Saturday."), true],
      [t("В пятницу.", "On Friday."), false],
      [t("Он уже прошёл.", "It's already happened."), false],
    ]),
  },
  grammar: [
    g(
      t("Falava, dizia — «говорил (часто)»", "Falava, dizia — “used to talk, kept saying”"),
      [
        t(
          "Ele falava com todo mundo — «он (всё время) со всеми разговаривал». Это другое прошедшее: для того, что повторялось или длилось. -ar → -ava (falava), -er / -ir → -ia (dizia, fazia).",
          "Ele falava com todo mundo means “he kept talking to everybody”. This is a second past tense, for things that happened regularly or went on for a while: -ar → -ava (falava), -er / -ir → -ia (dizia, fazia).",
        ),
        t(
          "Сравни: Ele disse — «он сказал (один раз)», Ele dizia — «он говорил (много раз)». Подробно это время будет на уровне A2.",
          "Compare: Ele disse (he said, once) and Ele dizia (he used to say, again and again). You'll learn this tense properly in A2.",
        ),
      ],
      [
        ["Ele dizia: Boa viagem!", t("Он всё время говорил: «Счастливого пути!»", "He kept saying: Have a good trip!")],
        ["Eu morava no Rio.", t("Я жил(а) в Рио (раньше).", "I used to live in Rio.")],
      ],
    ),
  ],
  tasks: [
    listen("ptma7-t1", t("Аудиоэкзамен. Что рассказывает капитан?", "Audio exam. What does the captain tell them?"), "O papagaio viajou no meu barco e dizia: Boa viagem! A banda foi para Belém. O último show é no sábado.", [
      [t("Попугай плыл с группой, а последний концерт — в субботу в Белене.", "The parrot travelled with the band, and the last concert is on Saturday in Belém."), true],
      [t("Попугай остался в Манаусе.", "The parrot stayed in Manaus."), false],
      [t("Концерт отменили.", "The concert has been cancelled."), false],
    ]),
    choice("ptma7-t2", t("Как сказать «Счастливого пути!»?", "How do you say “Have a good trip!”?"), [
      ["Boa viagem!", true],
      ["Boa sorte!", false],
      ["Bom apetite!", false],
    ], { skill: "words" }),
    build("ptma7-t3", t("Собери фразу: «Последний концерт в субботу».", "Build the sentence: “The last concert is on Saturday”."), ["O", "último", "show", "é", "no", "sábado."]),
    missing("ptma7-t4", t("Какой буквы не хватает? («последний»)", "Which letter is missing? (“last”)"), "", "ltimo", "ú", ["ú", "u", "o"]),
    speak("ptma7-t5", "Boa viagem!", "Muito obrigado! Até a próxima viagem!", t("Большое спасибо! До следующей поездки!", "Thank you so much! Until the next trip!"), {
      help: t("Поблагодари вслух. Можно obrigado или obrigada.", "Say thank you aloud — obrigado or obrigada."),
    }),
    script("ptma7-t6", t("Вспомни весь Манаус. Закончи разговор с капитаном.", "Remember all of Manaus. Finish the conversation with the captain."), [
      { speaker: RAIMUNDO, text: "Bem-vindo ao barco! Para onde você vai?" },
      { speaker: YOU, answer: "Eu vou para Belém. Quanto tempo dura a viagem?", options: ["Eu vou para Belém. Quanto tempo dura a viagem?", "Eu fui ontem.", "Não toque nisso!"] },
      { speaker: RAIMUNDO, text: "Cinco dias. Você já viajou de barco?" },
      { speaker: YOU, answer: "Não, eu nunca viajei de barco.", options: ["Não, eu nunca viajei de barco.", "Sim, eu viajo amanhã.", "Por quê?"] },
      { speaker: RAIMUNDO, text: "Pode pendurar a rede aqui." },
      { speaker: YOU, answer: "Obrigado! Que vento bom!", options: ["Obrigado! Que vento bom!", "Estou com medo de rede!", "Bravo!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-manaus",
    itemName: t("Фото Пипоки на теплоходе", "Photo of Pipoca on the riverboat"),
    itemNameRu: "Foto do Pipoca no barco",
    ru: "Oba! Mais uma foto do Pipoca!",
    en: t("Ура! Ещё одно фото Пипоки!", "Hooray! Another photo of Pipoca!"),
    a11y: t(
      "Фото: зелёный попугай на перилах речного теплохода, позади широкая река и лес, рядом капитан в фуражке.",
      "A photo: the green parrot on the rail of a riverboat, with the wide river and forest behind, and the captain in his cap beside him.",
    ),
    image: p("photo"),
    steps: [
      t("Капитан достаёт из кармана старое фото.", "The captain pulls an old photo from his pocket."),
      t("Пипока на перилах, а рядом капитан!", "Pipoca on the rail, with the captain next to him!"),
      t("«O melhor marinheiro do Amazonas!» — «Лучший матрос Амазонки!»", "“O melhor marinheiro do Amazonas!” — “The best sailor on the Amazon!”"),
      t("Подпись: «Boa viagem!» Фото — в альбом.", "Caption: “Boa viagem!” Into the album it goes."),
    ],
    bridge: t("Пять дней по реке. А в пятницу вдали показался большой город у океана.", "Five days on the river. And on Friday a big city by the ocean appeared in the distance."),
  },
};

const story: CityStory = {
  home: {
    name: t("Гамак на палубе теплохода", "A hammock on the riverboat's deck"),
    nameRu: "A rede no convés do barco",
    image: p("home"),
    a11y: t(
      "Палуба речного теплохода: ряды разноцветных гамаков, за бортом широкая река и стена леса. На палубе — чемодан Мурзика.",
      "The deck of a riverboat: rows of colourful hammocks, the wide river and a wall of forest beyond the rail. Murzik's suitcase on the deck.",
    ),
  },
  keepsakeId: "photo-manaus",
  welcomeRu: "Olá, Manaus!",
  welcomeEn: t("Привет, Манаус!", "Hello, Manaus!"),
  welcomeImage: p("arrival"),
  welcomeA11y: t(
    "Широкая тёмная река, на берегу город и старинный оперный театр с цветным куполом. У причала — белые двухпалубные речные теплоходы.",
    "A wide dark river; on the bank a city and an old opera house with a colourful dome. White two-deck riverboats at the quay.",
  ),
  departureImage: p("departure"),
  departureA11y: t("Капитан Раймунду машет с мостика теплохода.", "Captain Raimundo waves from the bridge of his boat."),
  finale: [
    {
      image: p("photo"),
      a11y: t("Мурзик вклеивает в альбом фото Пипоки на теплоходе.", "Murzik sticks the photo of Pipoca on the riverboat into the album."),
      lines: [
        { en: t("Тринадцатая страница альбома: Пипока — матрос Амазонки.", "Page thirteen of the album: Pipoca, sailor of the Amazon.") },
        { ru: "Boa viagem!", en: t("Счастливого пути!", "Have a good trip!") },
        { en: t("Последний город. Последний концерт. Только бы успеть!", "The last city. The last concert. If only they make it in time!") },
      ],
    },
    {
      image: img.greet,
      a11y: t("Мурзик радостно подпрыгивает.", "Murzik jumps for joy."),
      lines: [
        { ru: "Manaus completa!", en: t("Манаус пройден!", "Manaus complete!") },
        { en: t("7 / 7 уроков", "7 / 7 lessons") },
      ],
    },
    {
      image: p("departure"),
      a11y: t("Капитан машет на прощание.", "The captain waves goodbye."),
      lines: [
        { ru: "Tchau, capitão Raimundo!", en: t("Пока, капитан Раймунду!", "Bye, Captain Raimundo!") },
        { ru: "Última parada: Belém!", en: t("Последняя остановка: Белен!", "Last stop: Belém!") },
      ],
    },
    {
      image: p("boat"),
      a11y: t("Теплоход плывёт по широкой реке на закате.", "The riverboat sails down the wide river at sunset."),
      lines: [{ ru: "Manaus → Belém", en: t("Манаус → Белен", "Manaus → Belém") }],
    },
    {
      image: pic("pt/belem/arrival"),
      a11y: t(
        "Портовый город у устья реки: старинный рынок с синими башенками, лодки, птицы над водой. На стене — афиша концерта «Maré Alta».",
        "A port city at the mouth of the river: an old market with blue turrets, boats and birds over the water. On a wall: a poster for the Maré Alta concert.",
      ),
      lines: [
        { ru: "Olá, Belém!", en: t("Привет, Белен!", "Hello, Belém!") },
        { ru: "Olha! O cartaz do show!", en: t("Смотри! Афиша концерта!", "Look! The concert poster!") },
      ],
    },
  ],
};

export const ptManaus = {
  id: "pt-manaus",
  name: t("Манаус", "Manaus"),
  namePt: "Manaus",
  lessons: [ma1, ma2, ma3, ma4, ma5, ma6, ma7],
  story,
};
