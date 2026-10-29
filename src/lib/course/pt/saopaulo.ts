import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { PAIRS, YOU, build, choice, fill, g, line, listen, match, missing, script, speak, spell, t, v } from "./make";

/* Сан-Паулу · «Магазин и метро» · Мурзик и Биа живут у её папы Маркуса. Метро, булочная доны Нейди, покупки и подарок для доны Лусии, глаголы на -ar, пицца. Пипока выучил «Quanto custa?». */

const p = (name: string) => pic(`pt/saopaulo/${name}`);
const NEIDE = t("Дона Нейди", "Dona Neide");

const sp1: Lesson = {
  id: "pt-a1-saopaulo-1",
  level: "A1",
  cityId: "pt-saopaulo",
  number: 1,
  title: t("O metrô — Метро", "O metrô — The metro"),
  minutes: 7,
  goals: [
    t("Купить билет и спросить дорогу в метро", "Buy a ticket and ask the way on the metro"),
    t("Спросить, далеко ли", "Ask if somewhere is far"),
    t("Сказать, что заблудился", "Say you're lost"),
  ],
  vocabNote: t(
    "Estou perdido — «я заблудился» (о мужчине), estou perdida — о женщине. Опять форма зависит от того, кто говорит.",
    "Estou perdido means “I'm lost” — a woman says estou perdida. Once again, the word agrees with the speaker.",
  ),
  vocab: [
    v("ptsp1-1", "Onde fica o metrô?", t("Где метро?", "Where's the metro?"),
      t("Мурзик с чемоданом стоит посреди огромного вокзала.", "Murzik stands with his suitcase in the middle of a huge station."),
      p("l1-1")),
    v("ptsp1-2", "Um bilhete, por favor.", t("Один билет, пожалуйста.", "One ticket, please."),
      t("Мурзик протягивает деньги в окошко кассы.", "Murzik passes money through the ticket window."),
      p("l1-2")),
    v("ptsp1-3", "Este trem vai para a Sé?", t("Этот поезд идёт до станции Се?", "Does this train go to Sé?"),
      t("Мурзик показывает на поезд метро и вопросительно смотрит на пассажирку.", "Murzik points at a metro train and looks questioningly at a passenger."),
      p("l1-3")),
    v("ptsp1-4", "Sim, vai.", t("Да, идёт.", "Yes, it does."),
      t("Пассажирка кивает и улыбается.", "The passenger nods and smiles."),
      p("l1-4")),
    v("ptsp1-5", "Estou perdido.", t("Я заблудился.", "I'm lost."),
      t("Мурзик растерянно вертит карту метро вверх ногами.", "Murzik, confused, turns the metro map upside down."),
      p("l1-5")),
    v("ptsp1-6", "É longe?", t("Это далеко?", "Is it far?"),
      t("Мурзик смотрит на длинную-длинную улицу.", "Murzik looks down a very, very long street."),
      p("l1-6")),
    v("ptsp1-7", "Não, é perto.", t("Нет, близко.", "No, it's close."),
      t("Прохожая показывает пальцами: совсем чуть-чуть.", "A passer-by shows with her fingers: just a little way."),
      p("l1-7")),
  ],
  dialogue: {
    title: t("На вокзале", "At the bus station"),
    note: t(
      "Trem — «поезд». Estação — «станция». Desça — «выходите». Sé — станция в самом центре Сан-Паулу.",
      "Trem means “train”. Estação means “station”. Desça means “get off”. Sé is a station right in the centre of São Paulo.",
    ),
    lines: [
      line("murzik", "Bia, onde fica o metrô?", t("Биа, где метро?", "Bia, where's the metro?")),
      line("bia", "Ali! O meu pai mora perto da estação Sé.", t("Вон там! Папа живёт рядом со станцией Се.", "Over there! My dad lives near Sé station.")),
      line("murzik", "Um bilhete, por favor. Não, dois bilhetes!", t("Один билет, пожалуйста. Нет, два билета!", "One ticket, please. No — two tickets!")),
      line("murzik", "Com licença, este trem vai para a Sé?", t("Простите, этот поезд идёт до Се?", "Excuse me, does this train go to Sé?")),
      line("passerby", "Sim, vai. Desça na quinta estação.", t("Да, идёт. Выходите на пятой станции.", "Yes, it does. Get off at the fifth station.")),
      line("murzik", "Bia… estou perdido. É longe?", t("Биа… я запутался. Это далеко?", "Bia… I'm lost. Is it far?")),
      line("bia", "Não, é perto! Olha, é aqui.", t("Нет, близко! Смотри, нам сюда.", "No, it's close! Look, this is it.")),
    ],
    gist: choice("ptsp1-d1", t("Куда едут Мурзик и Биа?", "Where are Murzik and Bia going?"), [
      [t("К папе Бии, рядом со станцией Се.", "To Bia's dad's, near Sé station."), true],
      [t("В аэропорт.", "To the airport."), false],
      [t("На концерт группы.", "To the band's concert."), false],
    ]),
  },
  grammar: [
    g(
      t("Onde fica…? Perto и longe", "Onde fica…? Perto and longe"),
      [
        t(
          "Onde fica…? — «где находится…?» Так спрашивают про места, которые никуда не денутся: Onde fica o metrô? Onde fica a praia?",
          "Onde fica…? means “Where is…?” for places that don't move: Onde fica o metrô? Onde fica a praia? (Fica literally means “stays”.)",
        ),
        t(
          "Perto — «близко», longe — «далеко». «Близко от…» — perto de: perto da estação (de + a = da, помнишь?).",
          "Perto means “near” and longe means “far”. “Near something” is perto de: perto da estação (de + a = da — remember?).",
        ),
      ],
      [
        ["Onde fica a estação?", t("Где станция?", "Where's the station?")],
        ["A praia é perto do hotel.", t("Пляж рядом с гостиницей.", "The beach is near the hotel.")],
      ],
    ),
  ],
  tasks: [
    choice("ptsp1-t1", t("Как спросить «Где метро?»", "How do you ask “Where's the metro?”"), [
      ["Onde fica o metrô?", true],
      ["Quanto é o metrô?", false],
      ["Quem é o metrô?", false],
    ], { skill: "grammar" }),
    listen("ptsp1-t2", t("Послушай. Это далеко?", "Listen. Is it far?"), "Não, é perto.", [
      [t("Нет, близко.", "No, it's close."), true],
      [t("Да, очень далеко.", "Yes, very far."), false],
      [t("Не знаю.", "I don't know."), false],
    ]),
    match("ptsp1-t3", PAIRS, [
      ["o trem", t("поезд", "the train")],
      ["a estação", t("станция", "the station")],
      ["o bilhete", t("билет", "the ticket")],
      ["longe", t("далеко", "far")],
    ], { skill: "words" }),
    missing("ptsp1-t4", t("Каких букв не хватает? («билет»)", "Which letters are missing? (“ticket”)"), "bi", "ete", "lh", ["lh", "l", "nh"]),
    speak("ptsp1-t5", "Oi! Tudo bem?", "Tudo bem, obrigado. Onde fica o metrô?", t("Всё хорошо, спасибо. Где метро?", "Fine, thanks. Where's the metro?"), {
      help: t("Попроси о помощи вслух. Женщина скажет perdida.", "Ask for help aloud. A woman says perdida."),
    }),
    choice("ptsp1-t6", t("Как сказать «Ещё один кофе!»?", "How do you say “Another coffee!”?"), [
      ["Mais um café!", true],
      ["Só isso, obrigado.", false],
      ["Sem açúcar.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "metro-card",
    itemName: t("Карточка метро", "Metro card"),
    itemNameRu: "Bilhete do metrô",
    ru: "Oba! Um bilhete do metrô!",
    en: t("Ура! Билет на метро!", "Hooray! A metro ticket!"),
    a11y: t("На столе лежит синий билетик метро Сан-Паулу.", "A little blue São Paulo metro ticket lies on the table."),
    image: p("metro-card"),
    steps: [
      t("Папа Бии, Маркус, встречает их у двери.", "Bia's dad, Marcos, meets them at the door."),
      t("Мурзик показывает свой первый билет на метро.", "Murzik shows him his very first metro ticket."),
      t("«Guarde! É uma lembrança!» — «Сохрани! Это на память!»", "“Guarde! É uma lembrança!” — “Keep it! It's a souvenir!”"),
      t("Билетик ложится на стол в комнате Мурзика.", "The ticket goes on the table in Murzik's room."),
    ],
    bridge: t("Утром Маркус ведёт их в свою любимую булочную.", "In the morning Marcos takes them to his favourite bakery."),
  },
};

const sp2: Lesson = {
  id: "pt-a1-saopaulo-2",
  level: "A1",
  cityId: "pt-saopaulo",
  number: 2,
  title: t("Na padaria — В булочной", "Na padaria — At the bakery"),
  minutes: 7,
  goals: [
    t("Спросить, сколько стоит", "Ask how much something costs"),
    t("Сказать «дорого» и «дёшево»", "Say “expensive” and “cheap”"),
    t("Сказать, что берёшь", "Say what you'll take"),
  ],
  vocabNote: t(
    "Padaria — булочная-кафе. В Сан-Паулу их на каждом углу: там завтракают, пьют кофе и болтают с кассиром.",
    "A padaria is a bakery-café. In São Paulo there's one on every corner: people have breakfast there, drink coffee and chat with the cashier.",
  ),
  vocab: [
    v("ptsp2-1", "Quanto custa?", t("Сколько стоит?", "How much is it?"),
      t("Мурзик показывает на булочку в витрине.", "Murzik points at a roll in the shop window."),
      p("l2-1")),
    v("ptsp2-2", "Custa um real.", t("Стоит один реал.", "It's one real."),
      t("Над булочками ценник с цифрой 1.", "A price tag with the number 1 above the rolls."),
      p("l2-2")),
    v("ptsp2-3", "Quanto custam os bolos?", t("Сколько стоят пирожные?", "How much are the cakes?"),
      t("Витрина с маленькими разноцветными пирожными.", "A display of little colourful cakes."),
      p("l2-3")),
    v("ptsp2-4", "É caro!", t("Дорого!", "That's expensive!"),
      t("Мурзик в ужасе смотрит на большой торт с ценником.", "Murzik stares in horror at a big cake with its price tag."),
      p("l2-4")),
    v("ptsp2-5", "É barato.", t("Дёшево.", "That's cheap."),
      t("Мурзик довольно держит пакет с булочками.", "Murzik happily holds a bag of bread rolls."),
      p("l2-5")),
    v("ptsp2-6", "Eu vou levar dois.", t("Я возьму два.", "I'll take two."),
      t("Мурзик показывает два пальца кассиру.", "Murzik holds up two fingers to the cashier."),
      p("l2-6")),
    v("ptsp2-7", "Aqui está o troco.", t("Вот ваша сдача.", "Here's your change."),
      t("Пожилая кассирша в очках протягивает монетки.", "An older cashier in glasses hands over some coins."),
      p("l2-7")),
  ],
  dialogue: {
    title: t("Булочная доны Нейди", "Dona Neide's bakery"),
    note: t(
      "Pão francês — «французская булочка», обычная бразильская булочка к завтраку, хотя во Франции такой нет. Pão — «хлеб», pães — «булочки, хлеба».",
      "Pão francês — “French bread” — is the ordinary Brazilian breakfast roll, though you won't find it in France. Pão means bread, pães is the plural.",
    ),
    lines: [
      line("neide", "Bom dia, Marcos! E quem são esses?", t("Доброе утро, Маркус! А это кто с тобой?", "Good morning, Marcos! And who are these two?")),
      line("marcos", "A minha filha, a Bia, e o amigo dela, o Murzik.", t("Моя дочь Биа и её друг Мурзик.", "My daughter, Bia, and her friend Murzik.")),
      line("murzik", "Bom dia! Quanto custa o pão francês?", t("Доброе утро! Сколько стоит булочка?", "Good morning! How much is a bread roll?")),
      line("neide", "Custa um real.", t("Один реал.", "One real.")),
      line("murzik", "É barato! E quanto custam os bolos?", t("Дёшево! А сколько стоят пирожные?", "That's cheap! And how much are the cakes?")),
      line("neide", "Os bolos custam dez reais.", t("Пирожные — по десять реалов.", "The cakes are ten reais.")),
      line("murzik", "É caro… Eu vou levar dois pães, por favor.", t("Дороговато… Я возьму две булочки, пожалуйста.", "That's expensive… I'll take two rolls, please.")),
      line("neide", "Aqui está. E aqui está o troco.", t("Вот, пожалуйста. И ваша сдача.", "Here you are. And here's your change.")),
    ],
    gist: choice("ptsp2-d1", t("Что покупает Мурзик?", "What does Murzik buy?"), [
      [t("Две булочки.", "Two bread rolls."), true],
      [t("Два пирожных.", "Two cakes."), false],
      [t("Большой торт.", "A big cake."), false],
    ]),
  },
  grammar: [
    g(
      t("Custa или custam?", "Custa or custam?"),
      [
        t(
          "Если вещь одна — custa: Quanto custa o pão? Если вещей много — custam: Quanto custam os bolos? Как «стоит» и «стоят» в русском.",
          "One thing: custa. Several things: custam. Quanto custa o pão? (How much is the bread?) — Quanto custam os bolos? (How much are the cakes?) It's like “is” and “are”.",
        ),
        t(
          "Caro и barato согласуются со словом: o bolo é caro, a pizza é cara, os pães são baratos.",
          "Caro (expensive) and barato (cheap) agree with the noun: o bolo é caro, a pizza é cara, os pães são baratos.",
        ),
      ],
      [
        ["Quanto custa o suco?", t("Сколько стоит сок?", "How much is the juice?")],
        ["Quanto custam os bilhetes?", t("Сколько стоят билеты?", "How much are the tickets?")],
      ],
    ),
  ],
  tasks: [
    choice("ptsp2-t1", t("Как спросить «Сколько стоят билеты?»", "How do you ask “How much are the tickets?”"), [
      ["Quanto custam os bilhetes?", true],
      ["Quanto custa os bilhetes?", false],
      ["Quantos custam os bilhetes?", false],
    ], { skill: "grammar" }),
    listen("ptsp2-t2", t("Послушай. Сколько стоит?", "Listen. How much is it?"), "Custa dez reais.", [
      ["10", true],
      ["2", false],
      ["12", false],
    ]),
    match("ptsp2-t3", PAIRS, [
      ["É caro.", t("Дорого.", "It's expensive.")],
      ["É barato.", t("Дёшево.", "It's cheap.")],
      ["o troco", t("сдача", "the change")],
      ["Eu vou levar.", t("Я возьму.", "I'll take it.")],
    ], { skill: "words" }),
    spell("ptsp2-t4", t("Собери из букв слово «дорогой».", "Spell the word for “expensive”."), "caro"),
    speak("ptsp2-t5", "Bom dia! O que você quer?", "Quanto custa o pão? Eu vou levar dois.", t("Сколько стоит хлеб? Я возьму два.", "How much is the bread? I'll take two."), {
      help: t("Спроси вслух цену и скажи, сколько возьмёшь.", "Ask the price aloud and say how many you'll take."),
    }),
    choice("ptsp2-t6", t("Как сказать «Это далеко?»", "How do you say “Is it far?”"), [
      ["É longe?", true],
      ["É perto.", false],
      ["É caro?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "mug",
    itemName: t("Кружка из булочной", "Bakery mug"),
    itemNameRu: "Caneca",
    ru: "Oba! Uma caneca!",
    en: t("Ура! Кружка!", "Hooray! A mug!"),
    a11y: t("Белая кружка с нарисованной булочкой и чашкой кофе.", "A white mug with a little bread roll and a cup of coffee painted on it."),
    image: p("mug"),
    steps: [
      t("Дона Нейди достаёт из-под прилавка кружку.", "Dona Neide takes a mug out from under the counter."),
      t("«Um presente da padaria!» — «Подарок от булочной!»", "“Um presente da padaria!” — “A present from the bakery!”"),
      t("Мурзик пьёт из неё утренний кофе.", "Murzik drinks his morning coffee from it."),
      t("Кружка встаёт на полку.", "The mug goes on the shelf."),
    ],
    bridge: t("Биа вспоминает: день рождения бабушки всё ближе. Нужен подарок!", "Bia remembers: Grandma's birthday is getting closer. They need a present!"),
  },
};

const sp3: Lesson = {
  id: "pt-a1-saopaulo-3",
  level: "A1",
  cityId: "pt-saopaulo",
  number: 3,
  title: t("Um presente — Подарок", "Um presente — A present"),
  minutes: 7,
  goals: [
    t("Ответить продавцу «Я только смотрю»", "Tell a shop assistant you're just looking"),
    t("Сказать, что ищешь подарок", "Say you're looking for a present"),
    t("Показать: этот и вон тот", "Point: this one and that one"),
  ],
  vocabNote: t(
    "Улица 25 Марта (Rua 25 de Março) — огромный уличный рынок в центре Сан-Паулу. Там продаётся всё на свете.",
    "Rua 25 de Março is a huge street market in the centre of São Paulo. You can buy just about anything there.",
  ),
  vocab: [
    v("ptsp3-1", "Posso ajudar?", t("Вам помочь?", "Can I help you?"),
      t("Продавец в магазинчике приветливо наклоняется к Мурзику.", "A shop assistant leans towards Murzik with a friendly smile."),
      p("l3-1")),
    v("ptsp3-2", "Só estou olhando.", t("Я просто смотрю.", "I'm just looking."),
      t("Мурзик с интересом разглядывает полки.", "Murzik browses the shelves with interest."),
      p("l3-2")),
    v("ptsp3-3", "Estou procurando um presente.", t("Я ищу подарок.", "I'm looking for a present."),
      t("Мурзик держит в лапах пустую подарочную коробку с бантом.", "Murzik holds an empty gift box with a bow."),
      p("l3-3")),
    v("ptsp3-4", "Para quem?", t("Для кого?", "Who's it for?"),
      t("Продавец вопросительно поднимает брови.", "The assistant raises her eyebrows questioningly."),
      p("l3-4")),
    v("ptsp3-5", "Para a minha avó.", t("Для моей бабушки.", "For my grandmother."),
      t("Биа показывает фото доны Лусии в телефоне.", "Bia shows a photo of Dona Lúcia on her phone."),
      p("l3-5")),
    v("ptsp3-6", "Esta aqui?", t("Вот эту?", "This one here?"),
      t("Продавец держит в руке яркую сумочку.", "The assistant holds up a pretty bag."),
      p("l3-6")),
    v("ptsp3-7", "Não, aquele ali.", t("Нет, вон ту.", "No, that one over there."),
      t("Мурзик показывает на высокую полку, где лежит шаль с нарисованными попугаями.", "Murzik points to a high shelf with a shawl covered in painted parrots."),
      p("l3-7")),
  ],
  dialogue: {
    title: t("На улице 25 Марта", "On Rua 25 de Março"),
    note: t(
      "Xale — «шаль». Perfeito — «идеально, то что надо». Vou levar — «возьму» (буквально «понесу»).",
      "Xale means “shawl”. Perfeito means “perfect”. Vou levar means “I'll take it” (literally “I'll carry it”).",
    ),
    lines: [
      line("seller", "Boa tarde! Posso ajudar?", t("Добрый день! Вам помочь?", "Good afternoon! Can I help you?")),
      line("murzik", "Só estou olhando, obrigado.", t("Я просто смотрю, спасибо.", "I'm just looking, thanks.")),
      line("bia", "Murzik! Nós estamos procurando um presente!", t("Мурзик! Мы же ищем подарок!", "Murzik! We're looking for a present!")),
      line("seller", "Um presente? Para quem?", t("Подарок? Для кого?", "A present? Who's it for?")),
      line("bia", "Para a minha avó.", t("Для моей бабушки.", "For my grandmother.")),
      line("seller", "Esta aqui? Uma bolsa bonita.", t("Вот эту? Красивая сумочка.", "This one here? It's a lovely bag.")),
      line("murzik", "Não… aquele ali! O xale com papagaios!", t("Нет… вон ту! Шаль с попугаями!", "No… that one over there! The shawl with parrots!")),
      line("bia", "É perfeito! A vovó adora papagaios.", t("Идеально! Бабушка обожает попугаев.", "It's perfect! Grandma loves parrots.")),
    ],
    gist: choice("ptsp3-d1", t("Что выбирают для доны Лусии?", "What do they choose for Dona Lúcia?"), [
      [t("Шаль с попугаями.", "A shawl with parrots on it."), true],
      [t("Красивую сумочку.", "A pretty bag."), false],
      [t("Шарф с цветами.", "A scarf with flowers."), false],
    ]),
  },
  grammar: [
    g(
      t("Этот и вон тот: este, aquele", "This and that: este, aquele"),
      [
        t(
          "Este / esta — «этот / эта» (рядом со мной, aqui). Aquele / aquela — «вон тот / вон та» (далеко, ali, lá). Оба меняются по роду: esta bolsa, aquele xale.",
          "Este / esta means “this” (near me, aqui). Aquele / aquela means “that” (over there, ali, lá). Both change with gender: esta bolsa (this bag), aquele xale (that shawl).",
        ),
        t(
          "В живой речи вместо este бразильцы часто говорят esse — по смыслу разницы почти нет. Главное — не забыть про род.",
          "In everyday speech Brazilians often say esse instead of este — you can treat them as the same. What matters is the gender.",
        ),
      ],
      [
        ["Este presente é para você.", t("Этот подарок — тебе.", "This present is for you.")],
        ["Aquela bolsa é cara.", t("Вон та сумка дорогая.", "That bag over there is expensive.")],
      ],
    ),
  ],
  tasks: [
    choice("ptsp3-t1", t("Как сказать «вон та сумка»? (a bolsa)", "How do you say “that bag over there”? (a bolsa)"), [
      ["aquela bolsa", true],
      ["aquele bolsa", false],
      ["aquela bolso", false],
    ], { skill: "grammar" }),
    listen("ptsp3-t2", t("Послушай. Что отвечает покупатель?", "Listen. What does the customer say?"), "Só estou olhando, obrigado.", [
      [t("Он просто смотрит.", "He's just looking."), true],
      [t("Он ищет подарок.", "He's looking for a present."), false],
      [t("Он хочет заплатить.", "He wants to pay."), false],
    ]),
    match("ptsp3-t3", PAIRS, [
      ["Posso ajudar?", t("Вам помочь?", "Can I help you?")],
      ["Para quem?", t("Для кого?", "Who's it for?")],
      ["o presente", t("подарок", "the present")],
      ["aquela ali", t("вон та", "that one over there")],
    ], { skill: "words" }),
    missing("ptsp3-t4", t("Какой буквы не хватает? («подарок»)", "Which letter is missing? (“present”)"), "pre", "ente", "s", ["s", "z", "ç"]),
    speak("ptsp3-t5", "Boa tarde! Posso ajudar?", "Só estou olhando, obrigado.", t("Я просто смотрю, спасибо.", "I'm just looking, thanks."), {
      help: t("Ответь вслух продавцу. Можно obrigado или obrigada.", "Answer the shop assistant aloud — obrigado or obrigada."),
    }),
    choice("ptsp3-t6", t("Как сказать «Дорого!»?", "How do you say “That's expensive!”?"), [
      ["É caro!", true],
      ["É barato.", false],
      ["É perto.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "gift-box",
    itemName: t("Подарочная коробка", "Gift box"),
    itemNameRu: "Caixa de presente",
    ru: "Oba! O presente da vovó!",
    en: t("Ура! Подарок для бабушки!", "Hooray! Grandma's present!"),
    a11y: t("Коробка в зелёной бумаге с жёлтым бантом. Под крышкой видна шаль с попугаями.", "A box wrapped in green paper with a yellow bow. A parrot-patterned shawl peeks out from under the lid."),
    image: p("gift-box"),
    steps: [
      t("Продавец заворачивает шаль в зелёную бумагу.", "The shop assistant wraps the shawl in green paper."),
      t("Сверху — жёлтый бант.", "A yellow bow goes on top."),
      t("«É segredo!» — «Это секрет!» — шепчет Биа.", "“É segredo!” — “It's a secret!” Bia whispers."),
      t("Мурзик прячет коробку в шкаф.", "Murzik hides the box in the wardrobe."),
    ],
    bridge: t("Вечером Маркус приходит с работы и рассказывает о своём дне.", "In the evening Marcos comes home from work and talks about his day."),
  },
};

const sp4: Lesson = {
  id: "pt-a1-saopaulo-4",
  level: "A1",
  cityId: "pt-saopaulo",
  number: 4,
  title: t("Eu trabalho, você estuda — Я работаю, ты учишься", "Eu trabalho, você estuda — I work, you study"),
  minutes: 7,
  goals: [
    t("Говорить о работе и учёбе", "Talk about work and study"),
    t("Изменять глаголы на -ar", "Use -ar verbs for different people"),
    t("Спросить, на чём человек играет", "Ask what instrument someone plays"),
  ],
  vocabNote: t(
    "Tocar — «играть на инструменте», jogar — «играть в игру»: tocar violão, jogar futebol. Violão — гитара.",
    "Tocar means “to play an instrument”, jogar “to play a game”: tocar violão (guitar), jogar futebol.",
  ),
  vocab: [
    v("ptsp4-1", "Eu trabalho muito.", t("Я много работаю.", "I work a lot."),
      t("Маркус с ноутбуком и горой бумаг устало улыбается.", "Marcos, with a laptop and a pile of papers, smiles wearily."),
      p("l4-1")),
    v("ptsp4-2", "Você estuda?", t("Ты учишься?", "Do you study?"),
      t("Маркус с интересом смотрит на Мурзика.", "Marcos looks at Murzik with interest."),
      p("l4-2")),
    v("ptsp4-3", "Eu estudo português.", t("Я учу португальский.", "I'm studying Portuguese."),
      t("Мурзик над учебником, вокруг карточки со словами.", "Murzik bent over a textbook, surrounded by word cards."),
      p("l4-3")),
    v("ptsp4-4", "Nós moramos aqui.", t("Мы живём здесь.", "We live here."),
      t("Окно квартиры на пятнадцатом этаже, за ним огни большого города.", "The window of a fifteenth-floor flat, with the city lights beyond."),
      p("l4-4")),
    v("ptsp4-5", "Ela fala muito!", t("Она так много говорит!", "She talks a lot!"),
      t("Биа оживлённо рассказывает, размахивая руками.", "Bia chatters away, waving her hands."),
      p("l4-5")),
    v("ptsp4-6", "Você toca violão?", t("Ты играешь на гитаре?", "Do you play the guitar?"),
      t("На стене висит старая гитара.", "An old guitar hangs on the wall."),
      p("l4-6")),
    v("ptsp4-7", "Eles cantam juntos.", t("Они поют вместе.", "They sing together."),
      t("Маркус играет на гитаре, Биа и Мурзик поют.", "Marcos plays the guitar while Bia and Murzik sing."),
      p("l4-7")),
  ],
  dialogue: {
    title: t("Вечер у Маркуса", "An evening at Marcos's"),
    note: t(
      "Num banco — «в банке» (em + um). Jornalismo — «журналистика». Bem — «хорошо»: Você canta bem!",
      "Num banco means “in a bank” (em + um). Jornalismo is journalism. Bem means “well”: Você canta bem! (You sing well!)",
    ),
    lines: [
      line("marcos", "Ufa! Eu trabalho muito.", t("Уф! Я так много работаю.", "Phew! I work so hard.")),
      line("murzik", "Onde você trabalha?", t("А где вы работаете?", "Where do you work?")),
      line("marcos", "Eu trabalho num banco. E você, Murzik? Você estuda?", t("В банке. А ты, Мурзик? Учишься?", "In a bank. And you, Murzik? Do you study?")),
      line("murzik", "Eu estudo português! E a Bia estuda jornalismo.", t("Я учу португальский! А Биа учится на журналиста.", "I'm studying Portuguese! And Bia studies journalism.")),
      line("marcos", "Eu sei! Ela fala muito!", t("Знаю! Она так много говорит!", "I know! She talks a lot!")),
      line("bia", "Pai! Você toca violão hoje?", t("Пап! Сыграешь сегодня на гитаре?", "Dad! Will you play the guitar tonight?")),
      line("marcos", "Toco! E vocês cantam.", t("Сыграю! А вы пойте.", "I will! And you two sing.")),
    ],
    gist: choice("ptsp4-d1", t("Где работает Маркус?", "Where does Marcos work?"), [
      [t("В банке.", "In a bank."), true],
      [t("В булочной.", "In a bakery."), false],
      [t("В университете.", "At a university."), false],
    ]),
  },
  grammar: [
    g(
      t("Глаголы на -ar", "Verbs ending in -ar"),
      [
        t(
          "У глаголов на -ar (falar — говорить, morar — жить, trabalhar — работать) окончания такие: eu falo, você / ele / ela fala, nós falamos, vocês / eles / elas falam.",
          "Regular -ar verbs (falar — to speak, morar — to live, trabalhar — to work) go like this: eu falo, você / ele / ela fala, nós falamos, vocês / eles / elas falam.",
        ),
        t(
          "Это как русские «говорю, говорит, говорим, говорят» — только форм меньше: «ты» и «он» звучат одинаково.",
          "In English only “he/she” changes (works). In Portuguese every person has its own ending — but você, ele and ela share one, which makes life easier.",
        ),
      ],
      [
        ["Eu moro em Paris. Ela mora no Rio.", t("Я живу в Париже. Она живёт в Рио.", "I live in Paris. She lives in Rio.")],
        ["Nós falamos português.", t("Мы говорим по-португальски.", "We speak Portuguese.")],
      ],
    ),
  ],
  tasks: [
    choice("ptsp4-t1", t("Как сказать «Мы живём здесь»?", "How do you say “We live here”?"), [
      ["Nós moramos aqui.", true],
      ["Nós mora aqui.", false],
      ["Nós moram aqui.", false],
    ], { skill: "grammar" }),
    listen("ptsp4-t2", t("Послушай. Что делает Биа?", "Listen. What does Bia do?"), "A Bia estuda jornalismo.", [
      [t("Учится на журналиста.", "She studies journalism."), true],
      [t("Работает в банке.", "She works in a bank."), false],
      [t("Играет на гитаре.", "She plays the guitar."), false],
    ]),
    fill("ptsp4-t3", t("Вставь слово: «Они поют вместе».", "Fill in the word: “They sing together”."), "Eles", "juntos.", "cantam", ["cantam", "canta", "cantamos"], { skill: "words" }),
    spell("ptsp4-t4", t("Собери из букв слово «гитара».", "Spell the word for “guitar”."), "violão"),
    speak("ptsp4-t5", "Você trabalha ou estuda?", "Eu trabalho. E eu estudo português.", t("Я работаю. И учу португальский.", "I work. And I'm studying Portuguese."), {
      help: t("Ответь вслух про себя.", "Answer aloud about yourself."),
    }),
    choice("ptsp4-t6", t("Продавец спрашивает: Posso ajudar? Как сказать, что ты просто смотришь?", "The shop assistant asks: Posso ajudar? How do you say you're just looking?"), [
      ["Só estou olhando.", true],
      ["Para quem?", false],
      ["Aquela ali.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "guitar-pick",
    itemName: t("Медиатор", "Guitar pick"),
    itemNameRu: "Palheta",
    ru: "Oba! Uma palheta!",
    en: t("Ура! Медиатор!", "Hooray! A guitar pick!"),
    a11y: t("Маленький жёлтый медиатор для гитары на подоконнике.", "A small yellow guitar pick on the windowsill."),
    image: p("pick"),
    steps: [
      t("После песен Маркус даёт Мурзику медиатор.", "After the songs, Marcos gives Murzik a guitar pick."),
      t("«Um dia você vai tocar!» — «Когда-нибудь и ты будешь играть!»", "“Um dia você vai tocar!” — “One day you'll play too!”"),
      t("Мурзик бережно кладёт его на подоконник.", "Murzik carefully puts it on the windowsill."),
      t("За окном мерцают огни города.", "The city lights twinkle outside."),
    ],
    bridge: t("Утром Биа показывает Мурзику Сан-Паулу.", "In the morning Bia shows Murzik around São Paulo."),
  },
};

const sp5: Lesson = {
  id: "pt-a1-saopaulo-5",
  level: "A1",
  cityId: "pt-saopaulo",
  number: 5,
  title: t("A cidade grande — Большой город", "A cidade grande — The big city"),
  minutes: 7,
  goals: [
    t("Назвать места в городе", "Name places in a city"),
    t("Сказать, открыто или закрыто", "Say if something is open or closed"),
    t("Сказать, на чём едешь", "Say how you get somewhere"),
  ],
  vocabNote: t(
    "Gente — «люди», но слово женского рода и единственного числа: muita gente — «много народу». Avenida Paulista — главная улица Сан-Паулу.",
    "Gente means “people”, but it's a singular, feminine word: muita gente means “lots of people”. Avenida Paulista is São Paulo's main avenue.",
  ),
  vocab: [
    v("ptsp5-1", "Tem muita gente!", t("Сколько народу!", "There are so many people!"),
      t("Широкий проспект, полный людей.", "A wide avenue full of people."),
      p("l5-1")),
    v("ptsp5-2", "o prédio alto", t("высокое здание", "the tall building"),
      t("Мурзик запрокинул голову, глядя на небоскрёб.", "Murzik tips his head right back to look up at a skyscraper."),
      p("l5-2")),
    v("ptsp5-3", "o museu", t("музей", "the museum"),
      t("Красное здание музея на четырёх опорах.", "A red museum building raised on four pillars."),
      p("l5-3")),
    v("ptsp5-4", "o parque", t("парк", "the park"),
      t("Большой зелёный парк с озером.", "A big green park with a lake."),
      p("l5-4")),
    v("ptsp5-5", "Está aberto.", t("Открыто.", "It's open."),
      t("Табличка с открытой дверью и зелёным кружком.", "A sign with an open door and a green dot."),
      p("l5-5")),
    v("ptsp5-6", "Está fechado.", t("Закрыто.", "It's closed."),
      t("Табличка с закрытой дверью и красным кружком.", "A sign with a closed door and a red dot."),
      p("l5-6")),
    v("ptsp5-7", "Vamos a pé?", t("Пойдём пешком?", "Shall we walk?"),
      t("Мурзик показывает на свои лапы и на дорогу.", "Murzik points at his paws, then at the road."),
      p("l5-7")),
  ],
  dialogue: {
    title: t("Прогулка по Паулисте", "A walk along Paulista"),
    note: t(
      "MASP — знаменитый музей искусства на Avenida Paulista. Segunda-feira — «понедельник» (дни недели будут в Бразилиа).",
      "MASP is a famous art museum on Avenida Paulista. Segunda-feira means Monday — we'll learn the days of the week in Brasília.",
    ),
    lines: [
      line("murzik", "Nossa! Tem muita gente! E os prédios são muito altos!", t("Ого! Сколько народу! И какие высокие дома!", "Wow! So many people! And the buildings are so tall!")),
      line("bia", "Olha, ali é o museu, o MASP.", t("Смотри, вон там музей, МАСП.", "Look, that's the museum over there, the MASP.")),
      line("murzik", "O museu está aberto?", t("Музей открыт?", "Is the museum open?")),
      line("bia", "Hoje não. Hoje é segunda-feira. Está fechado.", t("Сегодня нет. Сегодня понедельник. Закрыто.", "Not today. It's Monday. It's closed.")),
      line("murzik", "Que pena! E o parque?", t("Как жаль! А парк?", "What a pity! And the park?")),
      line("bia", "O parque está aberto. Vamos de metrô ou a pé?", t("Парк открыт. Поедем на метро или пешком?", "The park's open. Shall we take the metro or walk?")),
      line("murzik", "Vamos a pé!", t("Пошли пешком!", "Let's walk!")),
    ],
    gist: choice("ptsp5-d1", t("Почему они не идут в музей?", "Why don't they go to the museum?"), [
      [t("Он сегодня закрыт.", "It's closed today."), true],
      [t("Он очень дорогой.", "It's very expensive."), false],
      [t("Он далеко.", "It's far away."), false],
    ]),
  },
  grammar: [
    g(
      t("На чём едем: a pé, de metrô", "Getting around: a pé, de metrô"),
      [
        t(
          "«На чём едешь» — de: de metrô, de ônibus, de táxi, de carro. А «пешком» — a pé.",
          "To say how you travel, use de: de metrô (by metro), de ônibus, de táxi, de carro. “On foot” is a pé.",
        ),
        t(
          "Nossa! — «Ого! Вот это да!» Бразильцы говорят это постоянно, когда чему-то удивляются.",
          "Nossa! means “Wow!” — Brazilians say it all the time when something surprises them.",
        ),
      ],
      [
        ["Eu vou de ônibus.", t("Я поеду на автобусе.", "I'll go by bus.")],
        ["Nós vamos a pé.", t("Мы пойдём пешком.", "We'll walk.")],
      ],
    ),
  ],
  tasks: [
    choice("ptsp5-t1", t("Как сказать «на метро»?", "How do you say “by metro”?"), [
      ["de metrô", true],
      ["a metrô", false],
      ["com metrô", false],
    ], { skill: "grammar" }),
    listen("ptsp5-t2", t("Послушай. Музей открыт?", "Listen. Is the museum open?"), "O museu está fechado.", [
      [t("Нет, закрыт.", "No, it's closed."), true],
      [t("Да, открыт.", "Yes, it's open."), false],
      [t("Музея нет.", "There's no museum."), false],
    ]),
    match("ptsp5-t3", PAIRS, [
      ["o museu", t("музей", "the museum")],
      ["o parque", t("парк", "the park")],
      ["aberto", t("открыто", "open")],
      ["fechado", t("закрыто", "closed")],
    ], { skill: "words" }),
    missing("ptsp5-t4", t("Какой буквы не хватает? («музей»)", "Which letter is missing? (“museum”)"), "mus", "u", "e", ["e", "i", "a"]),
    speak("ptsp5-t5", "Vamos de metrô ou a pé?", "Vamos a pé!", t("Пошли пешком!", "Let's walk!"), {
      help: t("Выбери вслух. Можно сказать и Vamos de metrô!", "Choose aloud. You can also say Vamos de metrô!"),
    }),
    choice("ptsp5-t6", t("Как спросить «Ты играешь на гитаре?»", "How do you ask “Do you play the guitar?”"), [
      ["Você toca violão?", true],
      ["Você joga violão?", false],
      ["Você estuda violão?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "umbrella",
    itemName: t("Складной зонтик", "Folding umbrella"),
    itemNameRu: "Guarda-chuva",
    ru: "Oba! Um guarda-chuva!",
    en: t("Ура! Зонтик!", "Hooray! An umbrella!"),
    a11y: t("У двери стоит маленький синий складной зонтик с каплями.", "A small blue folding umbrella, still dripping, stands by the door."),
    image: p("umbrella"),
    steps: [
      t("В парке вдруг начинается мелкий дождик.", "In the park a fine drizzle suddenly starts."),
      t("«É a garoa de São Paulo!» — «Это паулистанская морось!»", "“É a garoa de São Paulo!” — “That's São Paulo drizzle!”"),
      t("Биа покупает Мурзику маленький зонтик.", "Bia buys Murzik a little umbrella."),
      t("Дома зонтик сохнет у двери.", "At home the umbrella dries by the door."),
    ],
    bridge: t("Вечером Маркус говорит: «Сегодня — настоящая паулистанская пицца!»", "In the evening Marcos says: “Tonight — real São Paulo pizza!”"),
  },
};

const sp6: Lesson = {
  id: "pt-a1-saopaulo-6",
  level: "A1",
  cityId: "pt-saopaulo",
  number: 6,
  title: t("A pizza — Пицца", "A pizza — Pizza"),
  minutes: 7,
  goals: [
    t("Заказать пиццу", "Order a pizza"),
    t("Сказать, что любишь", "Say what you love"),
    t("Сказать «Я наелся / наелась»", "Say “I'm full”"),
  ],
  vocabNote: t(
    "В Сан-Паулу пиццу едят почти каждое воскресенье. Sabor — «вкус», так спрашивают, с чем будет пицца.",
    "In São Paulo lots of people eat pizza almost every Sunday. Sabor means “flavour” — that's how you ask about toppings.",
  ),
  vocab: [
    v("ptsp6-1", "Eu adoro pizza!", t("Я обожаю пиццу!", "I love pizza!"),
      t("Мурзик с горящими глазами смотрит на огромную пиццу.", "Murzik gazes at a huge pizza with shining eyes."),
      p("l6-1")),
    v("ptsp6-2", "Qual sabor?", t("С чем? (какой вкус?)", "Which flavour?"),
      t("Официант с блокнотом стоит у стола.", "A waiter with a notepad stands by the table."),
      p("l6-2")),
    v("ptsp6-3", "De queijo, por favor.", t("С сыром, пожалуйста.", "Cheese, please."),
      t("Пицца с тянущимся сыром.", "A pizza with stretchy, melted cheese."),
      p("l6-3")),
    v("ptsp6-4", "Cuidado, está quente!", t("Осторожно, горячо!", "Careful, it's hot!"),
      t("От пиццы идёт пар, Мурзик дует на кусочек.", "Steam rises from the pizza; Murzik blows on his slice."),
      p("l6-4")),
    v("ptsp6-5", "Mais um pedaço?", t("Ещё кусочек?", "Another slice?"),
      t("Маркус протягивает Мурзику кусок пиццы.", "Marcos offers Murzik another slice."),
      p("l6-5")),
    v("ptsp6-6", "Estou cheio!", t("Я наелся!", "I'm full!"),
      t("Мурзик откинулся на спинку стула и гладит круглый живот.", "Murzik leans back in his chair and pats his round tummy."),
      p("l6-6")),
    v("ptsp6-7", "Estava ótimo!", t("Было очень вкусно!", "It was great!"),
      t("Пустая коробка из-под пиццы и довольные лица.", "An empty pizza box and three happy faces."),
      p("l6-7")),
  ],
  dialogue: {
    title: t("В пиццерии", "At the pizzeria"),
    note: t(
      "Grande — «большая». Calabresa — пицца с острой колбасой. Também — «тоже».",
      "Grande means “large”. Calabresa is a pizza with spicy sausage. Também means “too”.",
    ),
    lines: [
      line("waiter", "Boa noite! Qual sabor?", t("Добрый вечер! Какую пиццу?", "Good evening! Which flavour?")),
      line("murzik", "Eu adoro pizza! De queijo, por favor.", t("Я обожаю пиццу! С сыром, пожалуйста.", "I love pizza! Cheese, please.")),
      line("marcos", "E uma de calabresa. Duas pizzas grandes.", t("И одну с колбасой. Две большие пиццы.", "And one calabresa. Two large pizzas.")),
      line("bia", "Cuidado, Murzik, está quente!", t("Осторожно, Мурзик, горячо!", "Careful, Murzik, it's hot!")),
      line("marcos", "Mais um pedaço, Murzik?", t("Ещё кусочек, Мурзик?", "Another slice, Murzik?")),
      line("murzik", "Não, obrigado. Estou cheio!", t("Нет, спасибо. Я наелся!", "No, thanks. I'm full!")),
      line("bia", "Eu também estou cheia. Estava ótimo, pai!", t("Я тоже наелась. Было очень вкусно, пап!", "I'm full too. That was great, Dad!")),
    ],
    gist: choice("ptsp6-d1", t("Какую пиццу хочет Мурзик?", "Which pizza does Murzik want?"), [
      [t("С сыром.", "Cheese."), true],
      [t("С колбасой.", "Calabresa."), false],
      [t("С рыбой.", "Fish."), false],
    ]),
  },
  grammar: [
    g(
      t("Я наелся / наелась: estou cheio, estou cheia", "Estou cheio / estou cheia"),
      [
        t(
          "Estou — «я (сейчас)», от глагола estar. Так говорят о состоянии, которое пройдёт: estou cheio — «я наелся», estou perdido — «я заблудился». Мужчина говорит cheio, женщина — cheia.",
          "Estou is “I am” from the verb estar. It's used for states that won't last: estou cheio (I'm full), estou perdido (I'm lost). A man says cheio, a woman says cheia.",
        ),
        t(
          "Está quente — «горячо» (пицца сейчас горячая). Estava ótimo — «было отлично» (о том, что уже съели).",
          "Está quente — “it's hot” (right now). Estava ótimo — “it was great” (about what you've just eaten).",
        ),
      ],
      [
        ["Estou cheio. / Estou cheia.", t("Я наелся. / Я наелась.", "I'm full. (man / woman)")],
        ["A pizza está quente.", t("Пицца горячая.", "The pizza is hot.")],
      ],
    ),
  ],
  tasks: [
    choice("ptsp6-t1", t("Биа наелась. Что она говорит?", "Bia has had enough. What does she say?"), [
      ["Estou cheia!", true],
      ["Estou cheio!", false],
      ["Sou cheia!", false],
    ], { skill: "grammar" }),
    listen("ptsp6-t2", t("Послушай. О чём предупреждают?", "Listen. What's the warning?"), "Cuidado, está quente!", [
      [t("Горячо!", "It's hot!"), true],
      [t("Дорого!", "It's expensive!"), false],
      [t("Закрыто!", "It's closed!"), false],
    ]),
    match("ptsp6-t3", PAIRS, [
      ["Qual sabor?", t("С чем?", "Which flavour?")],
      ["de queijo", t("с сыром", "cheese")],
      ["um pedaço", t("кусочек", "a slice")],
      ["Eu adoro…", t("Я обожаю…", "I love…")],
    ], { skill: "words" }),
    spell("ptsp6-t4", t("Собери из букв слово «сыр».", "Spell the word for “cheese”."), "queijo"),
    speak("ptsp6-t5", "Mais um pedaço?", "Não, obrigado. Estou cheio!", t("Нет, спасибо. Я наелся!", "No, thanks. I'm full!"), {
      help: t("Откажись вслух. Женщина скажет cheia и obrigada.", "Say no aloud. A woman says cheia and obrigada."),
    }),
    choice("ptsp6-t6", t("Как сказать «Пойдём пешком?»", "How do you say “Shall we walk?”"), [
      ["Vamos a pé?", true],
      ["Vamos de metrô?", false],
      ["Está fechado?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "apron",
    itemName: t("Фартук пиццайоло", "Pizza chef's apron"),
    itemNameRu: "Avental",
    ru: "Oba! Um avental!",
    en: t("Ура! Фартук!", "Hooray! An apron!"),
    a11y: t("На крючке висит маленький красный фартук с нарисованной пиццей.", "A small red apron with a pizza printed on it hangs on a hook."),
    image: p("apron"),
    steps: [
      t("Повар пиццерии выходит к их столу.", "The pizza chef comes out to their table."),
      t("Он дарит Мурзику крошечный фартук.", "He gives Murzik a tiny apron."),
      t("«Para o futuro pizzaiolo!» — «Будущему пиццайоло!»", "“Para o futuro pizzaiolo!” — “For a future pizza chef!”"),
      t("Фартук висит на крючке в комнате.", "The apron hangs on a hook in Murzik's room."),
    ],
    bridge: t("Утром Биа снова заходит в булочную. Дона Нейди машет ей: «Bia! Espera! O papagaio!»", "In the morning Bia stops by the bakery again. Dona Neide waves: “Bia! Espera! O papagaio!”"),
  },
};

const sp7: Lesson = {
  id: "pt-a1-saopaulo-7",
  level: "A1",
  cityId: "pt-saopaulo",
  number: 7,
  title: t("Quanto custa? — Пипока в булочной", "Quanto custa? — Pipoca at the bakery"),
  minutes: 8,
  goals: [
    t("Понять, что рассказывают о Пипоке", "Understand what people say about Pipoca"),
    t("Пожелать удачи и попрощаться с семьёй", "Wish someone luck and say goodbye to family"),
    t("Вспомнить все слова Сан-Паулу", "Review all the words from São Paulo"),
  ],
  vocabNote: t(
    "Um beijo — «целую» (буквально «поцелуй»). Так бразильцы заканчивают разговор с родными и друзьями: Beijo! Tchau!",
    "Um beijo means “a kiss” — Brazilians end calls and messages to family and friends with Beijo! Tchau! (Love you, bye!)",
  ),
  vocab: [
    v("ptsp7-1", "Ele estava no caixa.", t("Он сидел на кассе.", "He was at the till."),
      t("Зелёный попугай сидит на кассовом аппарате в булочной.", "A green parrot perches on the cash register at the bakery."),
      p("l7-1")),
    v("ptsp7-2", "Ele repete tudo!", t("Он всё повторяет!", "He repeats everything!"),
      t("Дона Нейди смеётся, прикрыв рот рукой.", "Dona Neide laughs, hand over her mouth."),
      p("l7-2")),
    v("ptsp7-3", "Eles foram para Curitiba.", t("Они уехали в Куритибу.", "They've gone to Curitiba."),
      t("Карта: стрелка от Сан-Паулу на юг.", "A map with an arrow from São Paulo heading south."),
      p("l7-3")),
    v("ptsp7-4", "Lá faz frio.", t("Там холодно.", "It's cold there."),
      t("Маленькая картинка: город под серым небом, люди в шарфах.", "A little picture: a city under a grey sky, people in scarves."),
      p("l7-4")),
    v("ptsp7-5", "Leve um casaco!", t("Возьми куртку!", "Take a coat!"),
      t("Маркус протягивает Мурзику тёплую курточку.", "Marcos hands Murzik a warm little jacket."),
      p("l7-5")),
    v("ptsp7-6", "Boa sorte!", t("Удачи!", "Good luck!"),
      t("Маркус показывает большие пальцы.", "Marcos gives two thumbs up."),
      p("l7-6")),
    v("ptsp7-7", "Um beijo para a vovó!", t("Поцелуй за меня бабушку!", "Give Grandma a kiss from me!"),
      t("Маркус обнимает Биу на прощание.", "Marcos hugs Bia goodbye."),
      p("l7-7")),
  ],
  dialogue: {
    title: t("Что сказал попугай", "What the parrot said"),
    note: t(
      "Cada cliente — «каждый покупатель». Espera! — «Подожди!»",
      "Cada cliente means “every customer”. Espera! means “Wait!”",
    ),
    lines: [
      line("neide", "Bia! Espera! Ah, o papagaio! Ele estava no caixa ontem.", t("Биа! Подожди! А, попугай! Вчера он сидел у меня на кассе.", "Bia! Wait! Ah, the parrot! He was sitting on my till yesterday.")),
      line("bia", "O Pipoca! E o que ele disse?", t("Пипока! И что он говорил?", "Pipoca! And what did he say?")),
      line("neide", "Ele repete tudo! Cada cliente: Quanto custa? Quanto custa?", t("Он всё повторяет! Каждому покупателю: «Сколько стоит? Сколько стоит?»", "He repeats everything! To every customer: How much is it? How much is it?")),
      line("pipoca", "Quanto custa? Quanto custa?", t("Сколько стоит? Сколько стоит?", "How much is it? How much is it?")),
      line("murzik", "E a banda? Onde eles estão?", t("А группа? Где они?", "And the band? Where are they?")),
      line("neide", "Eles foram para Curitiba. Lá faz frio!", t("Уехали в Куритибу. Там холодно!", "They've gone to Curitiba. It's cold there!")),
      line("marcos", "Leve um casaco, Murzik! Boa sorte! Um beijo para a vovó!", t("Возьми куртку, Мурзик! Удачи! Поцелуйте за меня бабушку!", "Take a coat, Murzik! Good luck! Give Grandma a kiss from me!")),
    ],
    gist: choice("ptsp7-d1", t("Какую фразу выучил Пипока в Сан-Паулу?", "What phrase did Pipoca learn in São Paulo?"), [
      [t("«Сколько стоит?»", "“How much is it?”"), true],
      [t("«Ещё кофе!»", "“Another coffee!”"), false],
      [t("«Я наелся!»", "“I'm full!”"), false],
    ]),
  },
  grammar: [
    g(
      t("Повелительное: Leve!, Espera!", "Telling people what to do: Leve!, Espera!"),
      [
        t(
          "Чтобы попросить или посоветовать, часто используют такую форму: Leve um casaco! — «Возьми куртку!», Fique à vontade! — «Будь как дома!» (помнишь Рио?).",
          "To give advice or instructions Brazilians use forms like Leve um casaco! (Take a coat!) or Fique à vontade! (Make yourself at home! — remember Rio?).",
        ),
        t(
          "В разговоре часто звучит и форма, похожая на «он делает»: Espera! — «Подожди!», Olha! — «Смотри!». Пока просто запоминай эти фразы целиком.",
          "In casual speech you'll also hear forms that look like “he does”: Espera! (Wait!), Olha! (Look!). For now just learn these as set phrases.",
        ),
      ],
      [
        ["Leve um guarda-chuva!", t("Возьми зонтик!", "Take an umbrella!")],
        ["Olha o museu!", t("Смотри, музей!", "Look, the museum!")],
      ],
    ),
  ],
  tasks: [
    listen("ptsp7-t1", t("Аудиоэкзамен. Что рассказывает дона Нейди?", "Audio exam. What does Dona Neide tell them?"), "O papagaio estava no caixa. Ele disse: Quanto custa? Agora a banda está em Curitiba.", [
      [t("Попугай сидел на кассе, а группа теперь в Куритибе.", "The parrot sat on the till, and the band is now in Curitiba."), true],
      [t("Попугай купил пирожное.", "The parrot bought a cake."), false],
      [t("Группа вернулась в Парати.", "The band went back to Paraty."), false],
    ]),
    choice("ptsp7-t2", t("Как сказать «Удачи!»?", "How do you say “Good luck!”?"), [
      ["Boa sorte!", true],
      ["Boa noite!", false],
      ["Bom apetite!", false],
    ], { skill: "words" }),
    build("ptsp7-t3", t("Собери фразу: «Они уехали в Куритибу».", "Build the sentence: “They've gone to Curitiba”."), ["Eles", "foram", "para", "Curitiba."]),
    missing("ptsp7-t4", t("Какой буквы не хватает? («куртка»)", "Which letter is missing? (“coat”)"), "casa", "o", "c", ["c", "q", "s"]),
    speak("ptsp7-t5", "Boa sorte! Um beijo para a vovó!", "Obrigado! Tchau, até logo!", t("Спасибо! Пока, до скорого!", "Thanks! Bye, see you soon!"), {
      help: t("Попрощайся вслух. Можно obrigado или obrigada.", "Say goodbye aloud — obrigado or obrigada."),
    }),
    script("ptsp7-t6", t("Вспомни весь Сан-Паулу. Закончи разговор в булочной.", "Remember all of São Paulo. Finish the conversation at the bakery."), [
      { speaker: NEIDE, text: "Bom dia! Posso ajudar?" },
      { speaker: YOU, answer: "Bom dia! Quanto custa o pão?", options: ["Bom dia! Quanto custa o pão?", "Estou cheio!", "Vamos a pé?"] },
      { speaker: NEIDE, text: "Custa um real." },
      { speaker: YOU, answer: "É barato! Eu vou levar dois.", options: ["É barato! Eu vou levar dois.", "Está fechado.", "Eu trabalho muito."] },
      { speaker: NEIDE, text: "Aqui está o troco." },
      { speaker: YOU, answer: "Obrigado! Tchau!", options: ["Obrigado! Tchau!", "Para quem?", "Mais um pedaço?"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-saopaulo",
    itemName: t("Фото Пипоки на кассе", "Photo of Pipoca at the till"),
    itemNameRu: "Foto do Pipoca na padaria",
    ru: "Oba! Mais uma foto do Pipoca!",
    en: t("Ура! Ещё одно фото Пипоки!", "Hooray! Another photo of Pipoca!"),
    a11y: t(
      "Фото: зелёный попугай сидит на кассе в булочной, рядом смеётся дона Нейди.",
      "A photo: the green parrot sitting on the bakery till, with Dona Neide laughing next to him.",
    ),
    image: p("photo"),
    steps: [
      t("Дона Нейди показывает фото с камеры у кассы.", "Dona Neide shows them a picture from the camera by the till."),
      t("Пипока важно сидит на кассе!", "There's Pipoca, sitting proudly on the till!"),
      t("Она печатает его для альбома.", "She prints it for the album."),
      t("Подпись: «Quanto custa?» Альбом — в чемодан.", "Caption: “Quanto custa?” The album goes in the suitcase."),
    ],
    bridge: t("Вечерний автобус в Куритибу. Мурзик надевает курточку от Маркуса.", "The evening bus to Curitiba. Murzik puts on the jacket from Marcos."),
  },
};

const story: CityStory = {
  home: {
    name: t("Комната в квартире Маркуса", "A room in Marcos's flat"),
    nameRu: "O quarto no apartamento do Marcos",
    image: p("home"),
    a11y: t(
      "Маленькая комната в квартире на пятнадцатом этаже. Большое окно, за ним небоскрёбы Сан-Паулу. Посередине чемодан Мурзика.",
      "A small room in a fifteenth-floor flat. A big window looks out on São Paulo's skyscrapers. Murzik's suitcase stands in the middle.",
    ),
  },
  keepsakeId: "photo-saopaulo",
  welcomeRu: "Olá, São Paulo!",
  welcomeEn: t("Привет, Сан-Паулу!", "Hello, São Paulo!"),
  welcomeImage: p("arrival"),
  welcomeA11y: t(
    "Мурзик и Биа выходят из автобуса на огромном вокзале. Вокруг толпы людей, вдали небоскрёбы.",
    "Murzik and Bia get off the bus at a huge station. Crowds all around, skyscrapers in the distance.",
  ),
  departureImage: p("departure"),
  departureA11y: t("Маркус и дона Нейди машут у дверей булочной.", "Marcos and Dona Neide wave at the bakery door."),
  finale: [
    {
      image: p("photo"),
      a11y: t("Мурзик вклеивает в альбом фото Пипоки на кассе.", "Murzik sticks the photo of Pipoca on the till into the album."),
      lines: [
        { en: t("Третья страница альбома: Пипока в булочной доны Нейди.", "Page three of the album: Pipoca at Dona Neide's bakery.") },
        { ru: "Quanto custa?", en: t("Сколько стоит?", "How much is it?") },
        { en: t("А в чемодане Мурзика ждёт своего часа подарок для доны Лусии.", "And in Murzik's suitcase, Dona Lúcia's present is waiting for its big day.") },
      ],
    },
    {
      image: img.greet,
      a11y: t("Мурзик радостно подпрыгивает.", "Murzik jumps for joy."),
      lines: [
        { ru: "São Paulo completo!", en: t("Сан-Паулу пройден!", "São Paulo complete!") },
        { en: t("7 / 7 уроков", "7 / 7 lessons") },
      ],
    },
    {
      image: p("departure"),
      a11y: t("Маркус машет на прощание.", "Marcos waves goodbye."),
      lines: [
        { ru: "Tchau, pai! Tchau, Dona Neide!", en: t("Пока, папа! Пока, дона Нейди!", "Bye, Dad! Bye, Dona Neide!") },
        { ru: "Próxima parada: Curitiba!", en: t("Следующая остановка: Куритиба!", "Next stop: Curitiba!") },
      ],
    },
    {
      image: p("bus"),
      a11y: t("Ночной автобус едет на юг, за окном дождь.", "A night bus heads south, rain on the windows."),
      lines: [{ ru: "São Paulo → Curitiba", en: t("Сан-Паулу → Куритиба", "São Paulo → Curitiba") }],
    },
    {
      image: pic("pt/curitiba/arrival"),
      a11y: t(
        "Утро в Куритибе: серое небо, люди в куртках и шарфах, огромная стеклянная оранжерея в парке.",
        "Morning in Curitiba: grey sky, people in coats and scarves, a huge glass greenhouse in a park.",
      ),
      lines: [
        { ru: "Olá, Curitiba!", en: t("Привет, Куритиба!", "Hello, Curitiba!") },
        { ru: "Brrr! Que frio!", en: t("Брр! Как холодно!", "Brrr! It's cold!") },
      ],
    },
  ],
};

export const ptSaoPaulo = {
  id: "pt-saopaulo",
  name: t("Сан-Паулу", "São Paulo"),
  namePt: "São Paulo",
  lessons: [sp1, sp2, sp3, sp4, sp5, sp6, sp7],
  story,
};
