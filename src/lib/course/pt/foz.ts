import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { PAIRS, YOU, build, choice, fill, g, line, listen, match, missing, script, speak, spell, t, v } from "./make";

/* Фос-ду-Игуасу · «Природа» · Водопады, гид Жулиана, «можно / нельзя» (poder), «хочу» (querer), глаголы на -er и -ir, три страны на одной реке. Пипока выучил «Que lindo!». */

const p = (name: string) => pic(`pt/foz/${name}`);
const JULIANA = t("Жулиана", "Juliana");

const fz1: Lesson = {
  id: "pt-a1-foz-1",
  level: "A1",
  cityId: "pt-foz",
  number: 1,
  title: t("A cachoeira — Водопад", "A cachoeira — The waterfall"),
  minutes: 7,
  goals: [
    t("Описать водопад", "Describe a waterfall"),
    t("Сказать «вверху», «внизу», «там»", "Say “up there”, “down there”, “over there”"),
    t("Сказать, что промок(ла)", "Say you're soaked"),
  ],
  vocabNote: t(
    "Cachoeira и catarata — оба «водопад». Cataratas — огромные водопады, как здесь. Их тут почти триста!",
    "Cachoeira and catarata both mean “waterfall”; cataratas are huge ones like these. There are nearly three hundred of them here!",
  ),
  vocab: [
    v("ptfz1-1", "a cachoeira", t("водопад", "the waterfall"),
      t("Высокий водопад падает с зелёной скалы.", "A tall waterfall pours off a green cliff."),
      p("l1-1")),
    v("ptfz1-2", "Que barulho!", t("Какой шум!", "What a roar!"),
      t("Мурзик зажимает уши лапами у грохочущего водопада.", "Murzik covers his ears beside a thundering waterfall."),
      p("l1-2")),
    v("ptfz1-3", "o arco-íris", t("радуга", "the rainbow"),
      t("Над брызгами водопада — яркая радуга.", "A bright rainbow arches over the spray."),
      p("l1-3")),
    v("ptfz1-4", "Olha lá embaixo!", t("Смотри, там внизу!", "Look down there!"),
      t("Мурзик свешивается через перила и показывает вниз, на бурлящую воду.", "Murzik leans over the railing, pointing down at the churning water."),
      p("l1-4")),
    v("ptfz1-5", "a capa de chuva", t("дождевик", "the rain poncho"),
      t("Мурзик в жёлтом дождевике до самых лап.", "Murzik in a yellow poncho that reaches his paws."),
      p("l1-5")),
    v("ptfz1-6", "Estou todo molhado!", t("Я весь промок!", "I'm soaked!"),
      t("Мокрый Мурзик, с ушей капает вода.", "A dripping-wet Murzik, water running off his ears."),
      p("l1-6")),
    v("ptfz1-7", "lá em cima", t("там, наверху", "up there"),
      t("Биа показывает на верхний край водопада.", "Bia points to the top of the waterfall."),
      p("l1-7")),
  ],
  dialogue: {
    title: t("На мостике у водопадов", "On the walkway by the falls"),
    note: t(
      "Passarela — «мостик, дорожка». Pertinho — «совсем близко» (уменьшительное от perto).",
      "Passarela means “walkway”. Pertinho means “really close” — it's a little form of perto.",
    ),
    lines: [
      line("juliana", "Bem-vindos! Eu sou a Juliana, a guia do parque.", t("Добро пожаловать! Я Жулиана, гид парка.", "Welcome! I'm Juliana, the park guide.")),
      line("murzik", "Nossa! Que barulho!", t("Ого! Какой шум!", "Wow! What a roar!")),
      line("juliana", "Olha lá em cima: são mais de duzentas cachoeiras!", t("Посмотрите наверх: здесь больше двухсот водопадов!", "Look up there: there are more than two hundred waterfalls!")),
      line("bia", "E olha lá embaixo! E um arco-íris!", t("А посмотри вниз! И радуга!", "And look down there! And a rainbow!")),
      line("juliana", "Agora vamos na passarela. Pertinho da água!", t("Теперь пройдём по мостику. Совсем близко к воде!", "Now let's go along the walkway. Right next to the water!")),
      line("murzik", "Aaai! Estou todo molhado!", t("А-а-ай! Я весь промок!", "Aaargh! I'm soaked!")),
      line("juliana", "Por isso tem capa de chuva!", t("Вот для этого и нужен дождевик!", "That's what the rain ponchos are for!")),
    ],
    gist: choice("ptfz1-d1", t("Почему Мурзик промок?", "Why is Murzik soaked?"), [
      [t("Он подошёл по мостику к самому водопаду.", "He walked out on the walkway right next to the falls."), true],
      [t("Пошёл дождь.", "It started to rain."), false],
      [t("Он упал в реку.", "He fell into the river."), false],
    ]),
  },
  grammar: [
    g(
      t("Где: aqui, ali, lá, em cima, embaixo", "Where: aqui, ali, lá, em cima, embaixo"),
      [
        t(
          "Aqui — «здесь», ali — «вон там (рядом)», lá — «там (далеко)». Em cima — «наверху», embaixo — «внизу». Их часто соединяют: lá em cima — «там, наверху», lá embaixo — «там, внизу».",
          "Aqui (here), ali (there, nearby), lá (over there, further away). Em cima (above, on top) and embaixo (below). Brazilians often combine them: lá em cima (up there), lá embaixo (down there).",
        ),
        t(
          "Todo molhado — «весь мокрый». Todo тоже меняется по роду: a Bia está toda molhada.",
          "Todo molhado means “all wet”. Todo agrees too: a Bia está toda molhada.",
        ),
      ],
      [
        ["O hotel é lá em cima.", t("Гостиница там, наверху.", "The hotel is up there.")],
        ["A Bia está toda molhada.", t("Биа вся промокла.", "Bia is soaked.")],
      ],
    ),
  ],
  tasks: [
    choice("ptfz1-t1", t("Биа промокла. Что она говорит?", "Bia is soaked. What does she say?"), [
      ["Estou toda molhada!", true],
      ["Estou todo molhado!", false],
      ["Sou toda molhada!", false],
    ], { skill: "grammar" }),
    listen("ptfz1-t2", t("Послушай. Куда смотреть?", "Listen. Where should you look?"), "Olha lá em cima!", [
      [t("Наверх.", "Up."), true],
      [t("Вниз.", "Down."), false],
      [t("Назад.", "Behind you."), false],
    ]),
    match("ptfz1-t3", PAIRS, [
      ["a cachoeira", t("водопад", "the waterfall")],
      ["o arco-íris", t("радуга", "the rainbow")],
      ["lá embaixo", t("там, внизу", "down there")],
      ["lá em cima", t("там, наверху", "up there")],
    ], { skill: "words" }),
    spell("ptfz1-t4", t("Собери из букв слово «мокрый».", "Spell the word for “wet”."), "molhado"),
    speak("ptfz1-t5", "Olha a cachoeira! O que você acha?", "Que barulho! Estou todo molhado!", t("Какой шум! Я весь промок!", "What a roar! I'm soaked!"), {
      help: t("Ответь вслух. Женщина скажет toda molhada.", "Answer aloud. A woman says toda molhada."),
    }),
    choice("ptfz1-t6", t("Как сказать «Я обожаю это место»?", "How do you say “I love this place”?"), [
      ["Eu amo este lugar.", true],
      ["Eu gosto este lugar.", false],
      ["Eu sou este lugar.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "poncho",
    itemName: t("Жёлтый дождевик", "Yellow poncho"),
    itemNameRu: "Capa de chuva",
    ru: "Oba! Uma capa de chuva!",
    en: t("Ура! Дождевик!", "Hooray! A rain poncho!"),
    a11y: t("На крючке сохнет маленький жёлтый дождевик с капюшоном.", "A little yellow hooded poncho dries on a hook."),
    image: p("poncho"),
    steps: [
      t("Жулиана смеётся: дождевик Мурзику до самых лап.", "Juliana laughs: Murzik's poncho reaches right down to his paws."),
      t("«Pode ficar com ela!» — «Оставь его себе!»", "“Pode ficar com ela!” — “You can keep it!”"),
      t("В гостинице Мурзик вешает дождевик сушиться.", "Back at the hotel Murzik hangs it up to dry."),
      t("Кап-кап-кап…", "Drip, drip, drip…"),
    ],
    bridge: t("Утром Жулиана ведёт их по тропе в джунгли. Но в парке есть правила.", "In the morning Juliana leads them along a jungle trail. But the park has rules."),
  },
};

const fz2: Lesson = {
  id: "pt-a1-foz-2",
  level: "A1",
  cityId: "pt-foz",
  number: 2,
  title: t("Posso…? — Можно…?", "Posso…? — Can I…?"),
  minutes: 7,
  goals: [
    t("Спросить разрешения", "Ask for permission"),
    t("Сказать «можно» и «нельзя»", "Say what's allowed and what isn't"),
    t("Попросить о помощи", "Ask for help"),
  ],
  vocabNote: t(
    "Quati — носуха, зверёк с длинным полосатым хвостом. В парке их много, и они воруют еду у туристов!",
    "Quati (o quati) is a coati — a little animal with a long striped tail. The park is full of them, and they steal tourists' food!",
  ),
  vocab: [
    v("ptfz2-1", "Posso tirar uma foto?", t("Можно сфотографировать?", "Can I take a photo?"),
      t("Мурзик с телефоном в лапах вопросительно смотрит на гида.", "Murzik, phone in paw, looks questioningly at the guide."),
      p("l2-1")),
    v("ptfz2-2", "Pode, sim.", t("Да, можно.", "Yes, you can."),
      t("Жулиана кивает и улыбается.", "Juliana nods and smiles."),
      p("l2-2")),
    v("ptfz2-3", "Não pode.", t("Нельзя.", "You can't."),
      t("Жулиана строго качает пальцем.", "Juliana wags her finger sternly."),
      p("l2-3")),
    v("ptfz2-4", "É proibido dar comida aos animais.", t("Кормить животных запрещено.", "Feeding the animals is not allowed."),
      t("Знак: перечёркнутая рука с бананом и зверёк с полосатым хвостом.", "A sign: a crossed-out hand holding a banana, and a little animal with a striped tail."),
      p("l2-4")),
    v("ptfz2-5", "Pode entrar.", t("Можно войти.", "You can go in."),
      t("Открытые ворота на тропу в джунгли.", "An open gate to a jungle trail."),
      p("l2-5")),
    v("ptfz2-6", "Onde posso comprar água?", t("Где можно купить воды?", "Where can I buy water?"),
      t("Мурзик держит пустую бутылку.", "Murzik holds up an empty bottle."),
      p("l2-6")),
    v("ptfz2-7", "Você pode me ajudar?", t("Вы можете мне помочь?", "Can you help me?"),
      t("Мурзик тянет за ремень рюкзака, застрявший в ветках.", "Murzik tugs at a backpack strap caught in some branches."),
      p("l2-7")),
  ],
  dialogue: {
    title: t("Тропа в джунглях", "The jungle trail"),
    note: t(
      "Me — «мне, меня». Bonitinho — «миленький». Ladrão — «воришка».",
      "Me means “me”. Bonitinho means “cute”. Ladrão means “thief”.",
    ),
    lines: [
      line("murzik", "Juliana, posso tirar uma foto?", t("Жулиана, можно сфотографировать?", "Juliana, can I take a photo?")),
      line("juliana", "Pode, sim! Mas cuidado: é proibido dar comida aos animais.", t("Да, можно! Но осторожно: кормить животных запрещено.", "Yes, you can! But careful: feeding the animals is not allowed.")),
      line("murzik", "Olha um quati! Que bonitinho! Posso dar uma banana?", t("Смотри, носуха! Какая миленькая! Можно дать ей банан?", "Look, a coati! How cute! Can I give it a banana?")),
      line("juliana", "Não pode! Ele é um ladrão!", t("Нельзя! Она воришка!", "No, you can't! It's a thief!")),
      line("bia", "Ai! O quati pegou a minha mochila! Você pode me ajudar?", t("Ой! Носуха схватила мой рюкзак! Можешь помочь?", "Oh no! The coati's grabbed my backpack! Can you help me?")),
      line("murzik", "Ei! Solta! Essa mochila é da Bia!", t("Эй! Отдай! Это рюкзак Бии!", "Hey! Let go! That's Bia's backpack!")),
    ],
    gist: choice("ptfz2-d1", t("Что сделала носуха?", "What did the coati do?"), [
      [t("Схватила рюкзак Бии.", "It grabbed Bia's backpack."), true],
      [t("Съела банан Мурзика.", "It ate Murzik's banana."), false],
      [t("Испугалась и убежала.", "It got scared and ran away."), false],
    ]),
  },
  grammar: [
    g(
      t("Poder — «мочь, можно»", "Poder — “can, may”"),
      [
        t(
          "Poder + глагол — «можно, могу»: Posso tirar uma foto? — Можно сфотографировать? Формы: eu posso, você / ele pode, nós podemos, eles podem. Ответ: Pode! — Можно! Não pode! — Нельзя!",
          "Poder + verb means “can” or “may”: Posso tirar uma foto? — Can I take a photo? Forms: eu posso, você / ele pode, nós podemos, eles podem. Short answers: Pode! (Yes, you can!) Não pode! (No, you can't!)",
        ),
        t(
          "Не путай с saber: sei nadar — «умею плавать» (знаю как), posso nadar — «могу плавать» (разрешено или есть возможность).",
          "Don't mix it up with saber: sei nadar — I know how to swim; posso nadar — I'm allowed to swim, or I'm able to right now. English uses “can” for both!",
        ),
      ],
      [
        ["Posso entrar?", t("Можно войти?", "May I come in?")],
        ["Nós podemos nadar aqui?", t("Здесь можно плавать?", "Can we swim here?")],
      ],
    ),
  ],
  tasks: [
    choice("ptfz2-t1", t("Как спросить «Можно войти?»", "How do you ask “May I come in?”"), [
      ["Posso entrar?", true],
      ["Sei entrar?", false],
      ["Pode eu entrar?", false],
    ], { skill: "grammar" }),
    listen("ptfz2-t2", t("Послушай. Что запрещено?", "Listen. What's not allowed?"), "É proibido dar comida aos animais.", [
      [t("Кормить животных.", "Feeding the animals."), true],
      [t("Фотографировать.", "Taking photos."), false],
      [t("Купаться.", "Swimming."), false],
    ]),
    match("ptfz2-t3", PAIRS, [
      ["Pode, sim.", t("Да, можно.", "Yes, you can.")],
      ["Não pode.", t("Нельзя.", "You can't.")],
      ["É proibido.", t("Запрещено.", "It's not allowed.")],
      ["Pode entrar.", t("Можно войти.", "You can go in.")],
    ], { skill: "words" }),
    missing("ptfz2-t4", t("Какой буквы не хватает? («запрещено»)", "Which letter is missing? (“forbidden”)"), "proib", "do", "i", ["i", "e", "y"]),
    speak("ptfz2-t5", "Você precisa de alguma coisa?", "Sim! Onde posso comprar água?", t("Да! Где можно купить воды?", "Yes! Where can I buy water?"), {
      help: t("Спроси вслух, где можно купить воду.", "Ask aloud where you can buy water."),
    }),
    choice("ptfz2-t6", t("Как сказать «Смотри, там внизу!»?", "How do you say “Look down there!”?"), [
      ["Olha lá embaixo!", true],
      ["Olha lá em cima!", false],
      ["Olha aqui dentro!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "binoculars",
    itemName: t("Бинокль", "Binoculars"),
    itemNameRu: "Binóculo",
    ru: "Oba! Um binóculo!",
    en: t("Ура! Бинокль!", "Hooray! Binoculars!"),
    a11y: t("Маленький зелёный бинокль на ремешке лежит на кровати.", "A small green pair of binoculars on a strap lies on the bed."),
    image: p("binoculars"),
    steps: [
      t("Рюкзак спасён! Жулиана хвалит Мурзика.", "The backpack is saved! Juliana praises Murzik."),
      t("Она дарит ему маленький бинокль.", "She gives him a small pair of binoculars."),
      t("«Para ver os animais de longe!» — «Чтобы смотреть на животных издалека!»", "“Para ver os animais de longe!” — “To watch the animals from far away!”"),
      t("Бинокль лежит на кровати в гостинице.", "The binoculars lie on the hotel bed."),
    ],
    bridge: t("Жулиана спрашивает: «O que vocês querem fazer amanhã?»", "Juliana asks: “O que vocês querem fazer amanhã?”"),
  },
};

const fz3: Lesson = {
  id: "pt-a1-foz-3",
  level: "A1",
  cityId: "pt-foz",
  number: 3,
  title: t("Eu quero… — Я хочу…", "Eu quero… — I want…"),
  minutes: 7,
  goals: [
    t("Сказать, чего хочешь", "Say what you want"),
    t("Спросить, чего хотят другие", "Ask what others want"),
    t("Вежливо отказаться", "Say no politely"),
  ],
  vocabNote: t(
    "Quero sim! — «Да, хочу!» Бразильцы часто отвечают, просто повторяя глагол: Você quer? — Quero!",
    "Quero sim! means “Yes, I do!” Brazilians often answer by repeating the verb instead of saying yes: Você quer? — Quero!",
  ),
  vocab: [
    v("ptfz3-1", "O que vocês querem fazer?", t("Что вы хотите делать?", "What do you want to do?"),
      t("Жулиана раскладывает на столе карту парка.", "Juliana spreads a map of the park on the table."),
      p("l3-1")),
    v("ptfz3-2", "Eu quero ver os pássaros.", t("Я хочу посмотреть на птиц.", "I want to see the birds."),
      t("Мурзик смотрит в бинокль на яркого тукана.", "Murzik looks at a bright toucan through his binoculars."),
      p("l3-2")),
    v("ptfz3-3", "Você quer andar de barco?", t("Хочешь покататься на лодке?", "Do you want to go on a boat?"),
      t("Надувная лодка у подножия водопада.", "An inflatable boat at the foot of the falls."),
      p("l3-3")),
    v("ptfz3-4", "Quero sim!", t("Да, хочу!", "Yes, I do!"),
      t("Биа радостно поднимает руку.", "Bia raises her hand excitedly."),
      p("l3-4")),
    v("ptfz3-5", "Eu não quero ficar molhado de novo!", t("Я не хочу снова промокнуть!", "I don't want to get wet again!"),
      t("Мурзик в ужасе прячется за Биу.", "Murzik hides behind Bia in horror."),
      p("l3-5")),
    v("ptfz3-6", "Nós queremos ir agora.", t("Мы хотим пойти сейчас.", "We want to go now."),
      t("Мурзик и Биа в шляпах и с рюкзаками у двери.", "Murzik and Bia at the door in hats, with backpacks."),
      p("l3-6")),
    v("ptfz3-7", "Não, obrigado. Não quero.", t("Нет, спасибо. Не хочу.", "No, thanks. I don't want to."),
      t("Мурзик вежливо машет лапой: нет.", "Murzik waves a paw politely: no thanks."),
      p("l3-7")),
  ],
  dialogue: {
    title: t("Планы на завтра", "Plans for tomorrow"),
    note: t(
      "Tucano — тукан, птица с огромным ярким клювом. Primeiro… depois… — «сначала… потом…».",
      "Tucano (o tucano) is a toucan — a bird with a huge colourful beak. Primeiro… depois… means “first… then…”.",
    ),
    lines: [
      line("juliana", "O que vocês querem fazer amanhã?", t("Что вы хотите делать завтра?", "What do you want to do tomorrow?")),
      line("murzik", "Eu quero ver os pássaros! E os tucanos!", t("Я хочу посмотреть на птиц! И на туканов!", "I want to see the birds! And the toucans!")),
      line("juliana", "Ótimo! E você, Bia? Você quer andar de barco?", t("Отлично! А ты, Биа? Хочешь покататься на лодке?", "Great! And you, Bia? Do you want to go on a boat?")),
      line("bia", "Quero sim! Murzik, você quer?", t("Да, хочу! Мурзик, а ты?", "Yes! Murzik, do you want to?")),
      line("murzik", "Não, obrigado. Eu não quero ficar molhado de novo!", t("Нет, спасибо. Я не хочу снова промокнуть!", "No, thanks. I don't want to get wet again!")),
      line("juliana", "Então primeiro os pássaros, depois o barco.", t("Тогда сначала птицы, потом лодка.", "Then first the birds, then the boat.")),
    ],
    gist: choice("ptfz3-d1", t("Почему Мурзик не хочет на лодку?", "Why doesn't Murzik want to go on the boat?"), [
      [t("Не хочет снова промокнуть.", "He doesn't want to get wet again."), true],
      [t("Боится птиц.", "He's scared of the birds."), false],
      [t("Он устал.", "He's tired."), false],
    ]),
  },
  grammar: [
    g(
      t("Querer — «хотеть»", "Querer — “to want”"),
      [
        t(
          "Формы: eu quero, você / ele quer, nós queremos, vocês / eles querem. После querer — глагол в начальной форме: Eu quero ver, Nós queremos ir.",
          "Forms: eu quero, você / ele quer, nós queremos, vocês / eles querem. After querer comes the basic verb: Eu quero ver (I want to see), Nós queremos ir (We want to go). No “to” needed.",
        ),
        t(
          "Помнишь Парати? В кафе вежливее сказать Eu queria… А Eu quero — для друзей и для желаний вообще.",
          "Remember Paraty? When ordering, Eu queria… is more polite. Eu quero is fine for plans and wishes with friends.",
        ),
      ],
      [
        ["Você quer um suco?", t("Хочешь сок?", "Do you want a juice?")],
        ["Eles querem dançar.", t("Они хотят танцевать.", "They want to dance.")],
      ],
    ),
  ],
  tasks: [
    choice("ptfz3-t1", t("Как сказать «Мы хотим пойти сейчас»?", "How do you say “We want to go now”?"), [
      ["Nós queremos ir agora.", true],
      ["Nós quer ir agora.", false],
      ["Nós queremos vamos agora.", false],
    ], { skill: "grammar" }),
    listen("ptfz3-t2", t("Послушай. Что хочет человек?", "Listen. What does the person want?"), "Eu quero ver os pássaros.", [
      [t("Посмотреть на птиц.", "To see the birds."), true],
      [t("Покататься на лодке.", "To go on a boat."), false],
      [t("Пойти домой.", "To go home."), false],
    ]),
    fill("ptfz3-t3", t("Вставь слово: «Ты хочешь покататься на лодке?»", "Fill in the word: “Do you want to go on a boat?”"), "Você", "andar de barco?", "quer", ["quer", "quero", "querem"], { skill: "words" }),
    spell("ptfz3-t4", t("Собери из букв слово «птицы».", "Spell the word for “birds”."), "pássaros"),
    speak("ptfz3-t5", "O que você quer fazer amanhã?", "Eu quero ver as cachoeiras.", t("Я хочу посмотреть на водопады.", "I want to see the waterfalls."), {
      help: t("Скажи вслух, что ты хочешь делать завтра.", "Say aloud what you want to do tomorrow."),
    }),
    choice("ptfz3-t6", t("Как спросить «Можно сфотографировать?»", "How do you ask “Can I take a photo?”"), [
      ["Posso tirar uma foto?", true],
      ["Sei tirar uma foto?", false],
      ["Quero tirar a foto de mim.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "toucan",
    itemName: t("Плюшевый тукан", "Toy toucan"),
    itemNameRu: "Tucano de pelúcia",
    ru: "Oba! Um tucano de pelúcia!",
    en: t("Ура! Плюшевый тукан!", "Hooray! A toy toucan!"),
    a11y: t("На подушке сидит плюшевый тукан с огромным оранжевым клювом.", "A soft toy toucan with a huge orange beak sits on the pillow."),
    image: p("toucan"),
    steps: [
      t("Утром Мурзик видит в бинокль настоящего тукана!", "In the morning Murzik spots a real toucan through his binoculars!"),
      t("В лавке у тропы продаются плюшевые туканы.", "A shop by the trail sells soft-toy toucans."),
      t("«Eu quero este!» — «Хочу вот этого!»", "“Eu quero este!” — “I want this one!”"),
      t("Тукан сидит на подушке в гостинице.", "The toucan sits on the pillow at the hotel."),
    ],
    bridge: t("Днём они устраивают пикник у реки. Но кто-то рядом тоже голоден…", "At lunchtime they have a picnic by the river. But someone nearby is hungry too…"),
  },
};

const fz4: Lesson = {
  id: "pt-a1-foz-4",
  level: "A1",
  cityId: "pt-foz",
  number: 4,
  title: t("Comer e beber — Есть и пить", "Comer e beber — Eating and drinking"),
  minutes: 7,
  goals: [
    t("Говорить о еде на пикнике", "Talk about food at a picnic"),
    t("Изменять глаголы на -er", "Use -er verbs for different people"),
    t("Сказать «он съел всё!»", "Say “he ate everything!”"),
  ],
  vocabNote: t(
    "Sanduíche — «бутерброд, сэндвич». Пикник у бразильцев — это всегда фрукты: манго, банан, ананас.",
    "Sanduíche means “sandwich”. A Brazilian picnic always includes fruit: mango, banana, pineapple.",
  ),
  vocab: [
    v("ptfz4-1", "Você come banana?", t("Ты ешь бананы?", "Do you eat bananas?"),
      t("Биа протягивает Мурзику банан.", "Bia offers Murzik a banana."),
      p("l4-1")),
    v("ptfz4-2", "Eu bebo muita água.", t("Я пью много воды.", "I drink lots of water."),
      t("Мурзик пьёт из большой бутылки.", "Murzik drinks from a big bottle."),
      p("l4-2")),
    v("ptfz4-3", "Nós comemos aqui.", t("Мы едим здесь.", "We're eating here."),
      t("Плед с едой на траве у реки.", "A picnic blanket with food on the grass by the river."),
      p("l4-3")),
    v("ptfz4-4", "um sanduíche", t("бутерброд", "a sandwich"),
      t("Большой бутерброд с сыром и помидором.", "A big cheese and tomato sandwich."),
      p("l4-4")),
    v("ptfz4-5", "Os quatis comem frutas.", t("Носухи едят фрукты.", "Coatis eat fruit."),
      t("Две носухи с полосатыми хвостами грызут манго.", "Two coatis with striped tails nibble a mango."),
      p("l4-5")),
    v("ptfz4-6", "Ele comeu tudo!", t("Он всё съел!", "He ate everything!"),
      t("Носуха сидит на пустом пледе с довольной мордой.", "A coati sits on the empty picnic blanket, looking very pleased."),
      p("l4-6")),
    v("ptfz4-7", "Que fome!", t("Как есть хочется!", "I'm starving!"),
      t("Мурзик грустно смотрит на пустую тарелку.", "Murzik stares sadly at an empty plate."),
      p("l4-7")),
  ],
  dialogue: {
    title: t("Пикник у реки", "A picnic by the river"),
    note: t(
      "Abacaxi — «ананас». Sobrou — «осталось». Nada — «ничего».",
      "Abacaxi means “pineapple”. Sobrou means “was left over”. Nada means “nothing”.",
    ),
    lines: [
      line("bia", "Vamos comer aqui? Eu tenho sanduíches, banana e abacaxi.", t("Поедим здесь? У меня бутерброды, бананы и ананас.", "Shall we eat here? I've got sandwiches, bananas and pineapple.")),
      line("murzik", "Ótimo! Eu bebo muita água, e você?", t("Отлично! Я пью много воды, а ты?", "Great! I drink lots of water, how about you?")),
      line("bia", "Eu também. Você come banana?", t("Я тоже. Ты ешь бананы?", "Me too. Do you eat bananas?")),
      line("murzik", "Como! Mas… Bia! Olha os quatis!", t("Ем! Но… Биа! Смотри, носухи!", "I do! But… Bia! Look — coatis!")),
      line("juliana", "Cuidado! Os quatis comem tudo!", t("Осторожно! Носухи едят всё подряд!", "Careful! Coatis eat everything!")),
      line("murzik", "Ele comeu tudo! Não sobrou nada!", t("Он всё съел! Ничего не осталось!", "He ate it all! There's nothing left!")),
      line("bia", "Que fome!", t("Как есть хочется!", "I'm starving!")),
    ],
    gist: choice("ptfz4-d1", t("Что случилось с едой?", "What happened to the food?"), [
      [t("Её съела носуха.", "A coati ate it."), true],
      [t("Её унесло рекой.", "The river washed it away."), false],
      [t("Мурзик всё съел сам.", "Murzik ate it all himself."), false],
    ]),
  },
  grammar: [
    g(
      t("Глаголы на -er", "Verbs ending in -er"),
      [
        t(
          "Глаголы на -er (comer — есть, beber — пить) меняются почти как на -ar, только вместо a — e: eu como, você / ele come, nós comemos, vocês / eles comem.",
          "Verbs ending in -er (comer — to eat, beber — to drink) work like -ar verbs, but with e instead of a: eu como, você / ele come, nós comemos, vocês / eles comem.",
        ),
        t(
          "Ele comeu — «он съел» — прошедшее время. Окончание -eu у глаголов на -er: comeu, bebeu.",
          "Ele comeu (he ate) is past tense: -er verbs end in -eu: comeu, bebeu.",
        ),
      ],
      [
        ["Eu como peixe.", t("Я ем рыбу.", "I eat fish.")],
        ["Eles bebem suco.", t("Они пьют сок.", "They're drinking juice.")],
      ],
    ),
  ],
  tasks: [
    choice("ptfz4-t1", t("Как сказать «Они пьют воду»?", "How do you say “They drink water”?"), [
      ["Eles bebem água.", true],
      ["Eles bebe água.", false],
      ["Eles bebemos água.", false],
    ], { skill: "grammar" }),
    listen("ptfz4-t2", t("Послушай. Что случилось?", "Listen. What happened?"), "O quati comeu tudo!", [
      [t("Носуха всё съела.", "The coati ate everything."), true],
      [t("Носуха убежала.", "The coati ran away."), false],
      [t("Носуха спит.", "The coati is asleep."), false],
    ]),
    match("ptfz4-t3", PAIRS, [
      ["comer", t("есть", "to eat")],
      ["beber", t("пить", "to drink")],
      ["o abacaxi", t("ананас", "the pineapple")],
      ["o sanduíche", t("бутерброд", "the sandwich")],
    ], { skill: "words" }),
    missing("ptfz4-t4", t("Какой буквы не хватает? («пить»)", "Which letter is missing? (“to drink”)"), "be", "er", "b", ["b", "v", "p"]),
    speak("ptfz4-t5", "O que você come de manhã?", "De manhã eu como pão e bebo café.", t("Утром я ем хлеб и пью кофе.", "In the morning I eat bread and drink coffee."), {
      help: t("Расскажи вслух, что ты ешь и пьёшь утром.", "Say aloud what you eat and drink in the morning."),
    }),
    choice("ptfz4-t6", t("Тебе предлагают лодку, а ты не хочешь. Что сказать?", "Someone offers you a boat ride, but you don't want it. What do you say?"), [
      ["Não, obrigado. Não quero.", true],
      ["Quero sim!", false],
      ["Pode, sim.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bottle",
    itemName: t("Бутылка для воды", "Water bottle"),
    itemNameRu: "Garrafinha",
    ru: "Oba! Uma garrafinha!",
    en: t("Ура! Бутылочка для воды!", "Hooray! A water bottle!"),
    a11y: t("Синяя металлическая бутылочка с нарисованной носухой.", "A blue metal water bottle with a picture of a coati on it."),
    image: p("bottle"),
    steps: [
      t("Жулиана смеётся и делится своими бутербродами.", "Juliana laughs and shares her sandwiches."),
      t("Ещё она дарит Мурзику бутылочку для воды с носухой.", "She also gives Murzik a water bottle with a coati on it."),
      t("«Esta o quati não come!» — «Её носуха не съест!»", "“Esta o quati não come!” — “The coati can't eat this one!”"),
      t("Бутылочка стоит на тумбочке.", "The bottle stands on the bedside table."),
    ],
    bridge: t("После обеда — лодка по реке. Мурзик всё-таки соглашается.", "After lunch — a boat ride on the river. Murzik agrees after all."),
  },
};

const fz5: Lesson = {
  id: "pt-a1-foz-5",
  level: "A1",
  cityId: "pt-foz",
  number: 5,
  title: t("De barco no rio — На лодке по реке", "De barco no rio — A boat on the river"),
  minutes: 7,
  goals: [
    t("Понять команды на лодке", "Understand instructions on a boat"),
    t("Изменять глаголы на -ir", "Use -ir verbs for different people"),
    t("Сказать, что чувствуешь", "Say what you feel"),
  ],
  vocabNote: t(
    "Segura firme! — «Держись крепче!» Colete salva-vidas — «спасательный жилет».",
    "Segura firme! means “Hold on tight!” O colete salva-vidas is a life jacket.",
  ),
  vocab: [
    v("ptfz5-1", "O barco parte agora!", t("Лодка отправляется!", "The boat's leaving now!"),
      t("Капитан в кепке машет рукой с надувной лодки.", "A captain in a cap waves from an inflatable boat."),
      p("l5-1")),
    v("ptfz5-2", "Segura firme!", t("Держись крепче!", "Hold on tight!"),
      t("Мурзик вцепился в верёвку на борту.", "Murzik clings to the rope on the side of the boat."),
      p("l5-2")),
    v("ptfz5-3", "Nós subimos o rio.", t("Мы поднимаемся вверх по реке.", "We're going up the river."),
      t("Лодка мчится против течения к водопадам.", "The boat races upstream towards the falls."),
      p("l5-3")),
    v("ptfz5-4", "Abre a mochila!", t("Открой рюкзак!", "Open the backpack!"),
      t("Биа открывает рюкзак и достаёт дождевики.", "Bia opens her backpack and pulls out the rain ponchos."),
      p("l5-4")),
    v("ptfz5-5", "Eu sinto a água no rosto!", t("Я чувствую воду на лице!", "I can feel the water on my face!"),
      t("Брызги летят Мурзику в мордочку.", "Spray flies into Murzik's face."),
      p("l5-5")),
    v("ptfz5-6", "Eles dormem no barco.", t("Они спят в лодке.", "They're asleep in the boat."),
      t("На обратном пути двое туристов дремлют в лодке.", "On the way back, two tourists doze in the boat."),
      p("l5-6")),
    v("ptfz5-7", "Foi incrível!", t("Это было потрясающе!", "That was amazing!"),
      t("Мокрый, но счастливый Мурзик на причале.", "A soaked but very happy Murzik on the jetty."),
      p("l5-7")),
  ],
  dialogue: {
    title: t("К водопадам на лодке", "To the falls by boat"),
    note: t(
      "Incrível — «невероятный, потрясающий». Mais uma vez — «ещё раз».",
      "Incrível means “amazing, incredible”. Mais uma vez means “one more time”.",
    ),
    lines: [
      line("juliana", "O barco parte agora! Segurem firme!", t("Лодка отправляется! Держитесь крепче!", "The boat's leaving now! Hold on tight!")),
      line("bia", "Murzik, abre a mochila! As capas de chuva!", t("Мурзик, открой рюкзак! Дождевики!", "Murzik, open the backpack! The ponchos!")),
      line("juliana", "Nós subimos o rio até a cachoeira…", t("Мы поднимаемся по реке до водопада…", "We're going up the river to the waterfall…")),
      line("murzik", "Ahhh! Eu sinto a água no rosto!", t("А-а-а! Я чувствую воду на лице!", "Aaah! I can feel the water on my face!")),
      line("bia", "Que medo! Que legal!", t("Как страшно! Как здорово!", "So scary! So cool!")),
      line("murzik", "Foi incrível! Mais uma vez!", t("Это было потрясающе! Ещё раз!", "That was amazing! Again!")),
    ],
    gist: choice("ptfz5-d1", t("Понравилась ли Мурзику лодка?", "Did Murzik enjoy the boat ride?"), [
      [t("Да, он хочет ещё раз.", "Yes — he wants to go again."), true],
      [t("Нет, ему было страшно.", "No, he was scared."), false],
      [t("Он проспал всю поездку.", "He slept through the whole ride."), false],
    ]),
  },
  grammar: [
    g(
      t("Глаголы на -ir", "Verbs ending in -ir"),
      [
        t(
          "Глаголы на -ir (partir — отправляться, abrir — открывать, subir — подниматься) почти как на -er, отличается только nós: eu parto, você / ele parte, nós partimos, eles partem.",
          "Verbs ending in -ir (partir — to leave, abrir — to open, subir — to go up) work like -er verbs, except for nós: eu parto, você / ele parte, nós partimos, eles partem.",
        ),
        t(
          "Некоторые меняют гласную: dormir — eu durmo, ele dorme; sentir — eu sinto, ele sente. Их запоминаем по одному.",
          "Some change a vowel: dormir — eu durmo, ele dorme; sentir — eu sinto, ele sente. Learn these one at a time.",
        ),
      ],
      [
        ["O ônibus parte às dez.", t("Автобус отправляется в десять.", "The bus leaves at ten.")],
        ["Nós abrimos a janela.", t("Мы открываем окно.", "We open the window.")],
      ],
    ),
  ],
  tasks: [
    choice("ptfz5-t1", t("Как сказать «Мы открываем окно»?", "How do you say “We open the window”?"), [
      ["Nós abrimos a janela.", true],
      ["Nós abremos a janela.", false],
      ["Nós abre a janela.", false],
    ], { skill: "grammar" }),
    listen("ptfz5-t2", t("Послушай. Что говорит капитан?", "Listen. What does the captain say?"), "Segura firme!", [
      [t("Держись крепче!", "Hold on tight!"), true],
      [t("Открой рюкзак!", "Open the backpack!"), false],
      [t("Спи!", "Go to sleep!"), false],
    ]),
    match("ptfz5-t3", PAIRS, [
      ["partir", t("отправляться", "to leave")],
      ["abrir", t("открывать", "to open")],
      ["subir", t("подниматься", "to go up")],
      ["dormir", t("спать", "to sleep")],
    ], { skill: "words" }),
    spell("ptfz5-t4", t("Собери из букв слово «река».", "Spell the word for “river”."), "rio"),
    speak("ptfz5-t5", "Você gostou do barco?", "Foi incrível! Mais uma vez!", t("Это было потрясающе! Ещё раз!", "That was amazing! Again!"), {
      help: t("Скажи вслух, как тебе поездка.", "Say aloud how you liked the ride."),
    }),
    choice("ptfz5-t6", t("Как сказать «Он всё съел!»?", "How do you say “He ate everything!”?"), [
      ["Ele comeu tudo!", true],
      ["Ele come nada!", false],
      ["Ele bebe tudo!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "map",
    itemName: t("Карта парка", "Park map"),
    itemNameRu: "Mapa do parque",
    ru: "Oba! O mapa do parque!",
    en: t("Ура! Карта парка!", "Hooray! The park map!"),
    a11y: t("На стене висит нарисованная карта парка с водопадами, тропами и маленькими туканами.", "A hand-drawn map of the park with waterfalls, trails and little toucans hangs on the wall."),
    image: p("map"),
    steps: [
      t("Капитан лодки отдаёт Мурзику свою старую карту.", "The boat captain gives Murzik his old map."),
      t("На ней нарисованы все водопады и тропы.", "It shows all the waterfalls and trails."),
      t("«Para não ficar perdido!» — «Чтобы не заблудиться!»", "“Para não ficar perdido!” — “So you don't get lost!”"),
      t("Карта висит на стене в гостинице.", "The map hangs on the wall at the hotel."),
    ],
    bridge: t("Вечером Жулиана везёт их туда, где встречаются три страны.", "In the evening Juliana drives them to the place where three countries meet."),
  },
};

const fz6: Lesson = {
  id: "pt-a1-foz-6",
  level: "A1",
  cityId: "pt-foz",
  number: 6,
  title: t("Três países — Три страны", "Três países — Three countries"),
  minutes: 7,
  goals: [
    t("Назвать страны и языки", "Name countries and languages"),
    t("Спросить, на каком языке говорят", "Ask what language people speak"),
    t("Показать: здесь, там", "Point things out: here, over there"),
  ],
  vocabNote: t(
    "Здесь две реки сливаются в одну, и на трёх берегах — три страны: Бразилия, Аргентина и Парагвай.",
    "Here two rivers meet, and on the three banks are three countries: Brazil, Argentina and Paraguay.",
  ),
  vocab: [
    v("ptfz6-1", "Ali é a Argentina.", t("Вон там Аргентина.", "That's Argentina over there."),
      t("Жулиана показывает на другой берег реки.", "Juliana points to the opposite bank of the river."),
      p("l6-1")),
    v("ptfz6-2", "E ali é o Paraguai.", t("А там Парагвай.", "And over there is Paraguay."),
      t("Третий берег реки с городскими крышами.", "The third riverbank, with rooftops."),
      p("l6-2")),
    v("ptfz6-3", "a fronteira", t("граница", "the border"),
      t("Каменный столбик, раскрашенный в три разных цвета.", "A stone pillar painted in three different colours."),
      p("l6-3")),
    v("ptfz6-4", "Lá eles falam espanhol.", t("Там говорят по-испански.", "They speak Spanish there."),
      t("На другом берегу видны люди и вывески.", "People and shop signs on the far bank."),
      p("l6-4")),
    v("ptfz6-5", "Aqui nós falamos português.", t("А здесь мы говорим по-португальски.", "Here we speak Portuguese."),
      t("Биа гордо прикладывает руку к груди.", "Bia proudly puts her hand on her heart."),
      p("l6-5")),
    v("ptfz6-6", "Você fala espanhol?", t("Ты говоришь по-испански?", "Do you speak Spanish?"),
      t("Жулиана с интересом смотрит на Мурзика.", "Juliana looks at Murzik with interest."),
      p("l6-6")),
    v("ptfz6-7", "Que país grande!", t("Какая большая страна!", "What a big country!"),
      t("Мурзик раскидывает лапы перед огромной картой Бразилии.", "Murzik spreads his paws wide in front of a huge map of Brazil."),
      p("l6-7")),
  ],
  dialogue: {
    title: t("Где встречаются три страны", "Where three countries meet"),
    note: t(
      "Parecido — «похожий». Mais ou menos — тут «примерно, отчасти».",
      "Parecido means “similar”. Mais ou menos here means “sort of”.",
    ),
    lines: [
      line("juliana", "Olha: aqui é o Brasil. Ali é a Argentina. E ali é o Paraguai.", t("Смотрите: здесь Бразилия. Вон там Аргентина. А там Парагвай.", "Look: this is Brazil. That's Argentina over there. And over there is Paraguay.")),
      line("murzik", "Três países! E a fronteira é o rio?", t("Три страны! А граница — это река?", "Three countries! And the river is the border?")),
      line("juliana", "Isso! Lá eles falam espanhol. Aqui nós falamos português.", t("Да! Там говорят по-испански. А здесь мы говорим по-португальски.", "That's right! They speak Spanish there. Here we speak Portuguese.")),
      line("bia", "Murzik, você fala espanhol?", t("Мурзик, ты говоришь по-испански?", "Murzik, do you speak Spanish?")),
      line("murzik", "Não… Mas é parecido com português, não é?", t("Нет… Но он похож на португальский, правда?", "No… But it's like Portuguese, isn't it?")),
      line("juliana", "Mais ou menos! E o Brasil é muito maior.", t("Отчасти! А Бразилия гораздо больше.", "Sort of! And Brazil is much bigger.")),
      line("murzik", "Que país grande!", t("Какая большая страна!", "What a big country!")),
    ],
    gist: choice("ptfz6-d1", t("Какие страны видно отсюда?", "Which countries can you see from here?"), [
      [t("Бразилию, Аргентину и Парагвай.", "Brazil, Argentina and Paraguay."), true],
      [t("Бразилию, Португалию и Испанию.", "Brazil, Portugal and Spain."), false],
      [t("Только Бразилию.", "Only Brazil."), false],
    ]),
  },
  grammar: [
    g(
      t("Страны с артиклем, языки — с маленькой буквы", "Countries with “the”, languages in lower case"),
      [
        t(
          "У большинства стран есть артикль: o Brasil, a Argentina, o Paraguai, a Rússia. Но есть и без него: Portugal, Angola.",
          "Most countries take “the”: o Brasil, a Argentina, o Paraguai, a Inglaterra, os Estados Unidos. A few don't: Portugal, Angola.",
        ),
        t(
          "Языки пишут с маленькой буквы и без артикля после falar: Eu falo russo, ele fala espanhol.",
          "Languages are written with a small letter and need no article after falar: Eu falo inglês, ele fala espanhol.",
        ),
      ],
      [
        ["Eu falo russo e um pouco de português.", t("Я говорю по-русски и немного по-португальски.", "I speak Russian and a little Portuguese.")],
        ["Eu falo inglês e um pouco de português.", t("Я говорю по-английски и немного по-португальски.", "I speak English and a little Portuguese.")],
      ],
    ),
  ],
  tasks: [
    choice("ptfz6-t1", t("Как сказать «Я говорю по-испански»?", "How do you say “I speak Spanish”?"), [
      ["Eu falo espanhol.", true],
      ["Eu falo o Espanhol.", false],
      ["Eu sou espanhol falo.", false],
    ], { skill: "grammar" }),
    listen("ptfz6-t2", t("Послушай. Что там, за рекой?", "Listen. What's across the river?"), "Ali é a Argentina.", [
      [t("Аргентина.", "Argentina."), true],
      [t("Парагвай.", "Paraguay."), false],
      [t("Португалия.", "Portugal."), false],
    ]),
    match("ptfz6-t3", PAIRS, [
      ["o Brasil", t("Бразилия", "Brazil")],
      ["a Argentina", t("Аргентина", "Argentina")],
      ["a fronteira", t("граница", "the border")],
      ["o espanhol", t("испанский язык", "Spanish")],
    ], { skill: "words" }),
    missing("ptfz6-t4", t("Каких букв не хватает? («испанский»)", "Which letters are missing? (“Spanish”)"), "espa", "ol", "nh", ["nh", "lh", "n"]),
    speak("ptfz6-t5", "Que línguas você fala?", "Eu falo russo e um pouco de português.", t("Я говорю по-русски и немного по-португальски. (Назови свои языки.)", "I speak Russian and a little Portuguese. (Say your own languages.)"), {
      help: t("Скажи вслух, на каких языках ты говоришь.", "Say aloud which languages you speak."),
    }),
    choice("ptfz6-t6", t("Как сказать «Держись крепче!»?", "How do you say “Hold on tight!”?"), [
      ["Segura firme!", true],
      ["Abre a mochila!", false],
      ["Fica em pé!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "notebook",
    itemName: t("Дорожный блокнот", "Travel notebook"),
    itemNameRu: "Caderno de viagem",
    ru: "Oba! Um caderno de viagem!",
    en: t("Ура! Дорожный блокнот!", "Hooray! A travel notebook!"),
    a11y: t("Блокнот в обложке с картой мира, внутри наклеены билеты и нарисованы флажки на маршруте.", "A notebook with a world-map cover; inside, tickets are stuck in and the route is drawn."),
    image: p("notebook"),
    steps: [
      t("Биа дарит Мурзику блокнот для путешествий.", "Bia gives Murzik a travel notebook."),
      t("«Escreva tudo!» — «Записывай всё!»", "“Escreva tudo!” — “Write everything down!”"),
      t("Мурзик рисует на первой странице три страны и реку.", "On the first page Murzik draws the three countries and the river."),
      t("Блокнот лежит на тумбочке.", "The notebook lies on the bedside table."),
    ],
    bridge: t("Утром Жулиана вспоминает: «Esperem! Eu vi um papagaio verde no mirante!»", "In the morning Juliana remembers: “Esperem! Eu vi um papagaio verde no mirante!”"),
  },
};

const fz7: Lesson = {
  id: "pt-a1-foz-7",
  level: "A1",
  cityId: "pt-foz",
  number: 7,
  title: t("Que lindo! — Как красиво!", "Que lindo! — How beautiful!"),
  minutes: 8,
  goals: [
    t("Понять, что рассказывают о Пипоке", "Understand what people say about Pipoca"),
    t("Пожелать «будьте осторожны»", "Say “be careful”"),
    t("Вспомнить все слова Игуасу", "Review all the words from Iguaçu"),
  ],
  vocabNote: t(
    "Lindo — «прекрасный, чудесный», сильнее, чем bonito. Mirante — «смотровая площадка».",
    "Lindo means “beautiful, gorgeous” — stronger than bonito. O mirante is a viewpoint.",
  ),
  vocab: [
    v("ptfz7-1", "Que lindo!", t("Как красиво!", "How beautiful!"),
      t("Зелёный попугай на перилах смотровой площадки, за ним водопады и радуга.", "The green parrot on the railing of a viewpoint, with the falls and a rainbow behind him."),
      p("l7-1")),
    v("ptfz7-2", "o mirante", t("смотровая площадка", "the viewpoint"),
      t("Деревянная площадка над обрывом с видом на водопады.", "A wooden platform over a drop, looking out over the falls."),
      p("l7-2")),
    v("ptfz7-3", "Ele estava olhando as cataratas.", t("Он смотрел на водопады.", "He was looking at the falls."),
      t("Попугай, наклонив голову, зачарованно смотрит на воду.", "The parrot tilts his head, spellbound by the water."),
      p("l7-3")),
    v("ptfz7-4", "Eles foram para o Pantanal.", t("Они уехали в Пантанал.", "They've gone to the Pantanal."),
      t("Карта: стрелка на северо-запад, к огромным болотам.", "A map: an arrow pointing north-west to huge wetlands."),
      p("l7-4")),
    v("ptfz7-5", "Lá tem jacarés!", t("Там есть кайманы!", "There are caimans there!"),
      t("Маленькая картинка: кайман дремлет у воды.", "A little picture: a caiman dozing by the water."),
      p("l7-5")),
    v("ptfz7-6", "Tenham cuidado!", t("Будьте осторожны!", "Be careful!"),
      t("Жулиана поднимает палец, как строгая учительница.", "Juliana raises a finger like a strict teacher."),
      p("l7-6")),
    v("ptfz7-7", "Até breve!", t("До скорого!", "See you soon!"),
      t("Мурзик и Биа машут, садясь в маленький самолёт.", "Murzik and Bia wave as they board a small plane."),
      p("l7-7")),
  ],
  dialogue: {
    title: t("Что сказал попугай", "What the parrot said"),
    note: t(
      "Esperem! — «Подождите!» (вам обоим). Horas e horas — «часами».",
      "Esperem! means “Wait!” (to more than one person). Horas e horas means “for hours and hours”.",
    ),
    lines: [
      line("juliana", "Esperem! Ah, o papagaio! Eu vi um papagaio verde no mirante.", t("Подождите! А, попугай! Я видела зелёного попугая на смотровой площадке.", "Wait! Ah, the parrot! I saw a green parrot at the viewpoint.")),
      line("murzik", "O Pipoca! O que ele fez?", t("Пипока! А что он делал?", "Pipoca! What was he doing?")),
      line("juliana", "Ele estava olhando as cataratas, horas e horas. E ele disse: Que lindo! Que lindo!", t("Он часами смотрел на водопады. И говорил: «Как красиво! Как красиво!»", "He was looking at the falls for hours and hours. And he said: How beautiful! How beautiful!")),
      line("bia", "Ele tem razão! E a banda?", t("И он прав! А группа?", "He's right! And the band?")),
      line("juliana", "Eles foram para o Pantanal. Lá tem jacarés! Tenham cuidado!", t("Они уехали в Пантанал. Там кайманы! Будьте осторожны!", "They've gone to the Pantanal. There are caimans there! Be careful!")),
      line("murzik", "Obrigado, Juliana! Até breve!", t("Спасибо, Жулиана! До скорого!", "Thank you, Juliana! See you soon!")),
    ],
    gist: choice("ptfz7-d1", t("Какую фразу выучил Пипока у водопадов?", "What phrase did Pipoca learn at the falls?"), [
      [t("«Как красиво!»", "“How beautiful!”"), true],
      [t("«Какой шум!»", "“What a roar!”"), false],
      [t("«Держись крепче!»", "“Hold on tight!”"), false],
    ]),
  },
  grammar: [
    g(
      t("Estava olhando — «смотрел (какое-то время)»", "Estava olhando — “was looking”"),
      [
        t(
          "Estar + глагол на -ando, -endo, -indo — действие в процессе: está chovendo — «идёт дождь», estava olhando — «смотрел (долго)». Похоже на русский несовершенный вид: «смотрел», а не «посмотрел».",
          "Estar + a verb ending in -ando, -endo, -indo describes an action in progress, just like English -ing: está chovendo (it's raining), estava olhando (he was looking).",
        ),
        t(
          "Окончание зависит от глагола: olhar — olhando, comer — comendo, dormir — dormindo.",
          "The ending depends on the verb group: olhar — olhando, comer — comendo, dormir — dormindo.",
        ),
      ],
      [
        ["Ele está dormindo.", t("Он спит.", "He's sleeping.")],
        ["Nós estamos comendo.", t("Мы едим.", "We're eating.")],
      ],
    ),
  ],
  tasks: [
    listen("ptfz7-t1", t("Аудиоэкзамен. Что рассказывает Жулиана?", "Audio exam. What does Juliana tell them?"), "O papagaio estava no mirante, olhando as cataratas. Ele disse: Que lindo! A banda foi para o Pantanal.", [
      [t("Попугай смотрел на водопады, а группа уехала в Пантанал.", "The parrot was watching the falls, and the band went to the Pantanal."), true],
      [t("Попугай упал в водопад.", "The parrot fell into the waterfall."), false],
      [t("Группа ещё здесь, в парке.", "The band is still here in the park."), false],
    ]),
    choice("ptfz7-t2", t("Как сказать «Будьте осторожны!»?", "How do you say “Be careful!” (to several people)?"), [
      ["Tenham cuidado!", true],
      ["Tenho cuidado!", false],
      ["Que cuidado!", false],
    ], { skill: "words" }),
    build("ptfz7-t3", t("Собери фразу: «Он смотрел на водопады».", "Build the sentence: “He was looking at the falls”."), ["Ele", "estava", "olhando", "as", "cataratas."]),
    missing("ptfz7-t4", t("Какой буквы не хватает? («кайман»)", "Which letter is missing? (“caiman”)"), "jacar", "", "é", ["é", "e", "ê"]),
    speak("ptfz7-t5", "Tenham cuidado! Até breve!", "Obrigado! Até breve!", t("Спасибо! До скорого!", "Thank you! See you soon!"), {
      help: t("Попрощайся вслух. Можно obrigado или obrigada.", "Say goodbye aloud — obrigado or obrigada."),
    }),
    script("ptfz7-t6", t("Вспомни всё Игуасу. Закончи разговор с Жулианой.", "Remember all of Iguaçu. Finish the conversation with Juliana."), [
      { speaker: JULIANA, text: "Bem-vindo ao parque! O que você quer fazer?" },
      { speaker: YOU, answer: "Eu quero ver as cachoeiras.", options: ["Eu quero ver as cachoeiras.", "Eu comeu tudo.", "Que fome!"] },
      { speaker: JULIANA, text: "Ótimo! Olha lá embaixo!" },
      { speaker: YOU, answer: "Que lindo! Posso tirar uma foto?", options: ["Que lindo! Posso tirar uma foto?", "Não pode.", "Eles dormem no barco."] },
      { speaker: JULIANA, text: "Pode, sim! Mas cuidado: é proibido dar comida aos quatis." },
      { speaker: YOU, answer: "Tudo bem! Obrigado!", options: ["Tudo bem! Obrigado!", "Segura firme!", "Lá tem jacarés!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-foz",
    itemName: t("Фото Пипоки у водопадов", "Photo of Pipoca at the falls"),
    itemNameRu: "Foto do Pipoca nas cataratas",
    ru: "Oba! Mais uma foto do Pipoca!",
    en: t("Ура! Ещё одно фото Пипоки!", "Hooray! Another photo of Pipoca!"),
    a11y: t(
      "Фото: зелёный попугай на перилах смотровой площадки, за ним водопады и радуга.",
      "A photo: the green parrot on the viewpoint railing, with the waterfalls and a rainbow behind him.",
    ),
    image: p("photo"),
    steps: [
      t("Жулиана показывает фото, которое сделала у площадки.", "Juliana shows them a photo she took at the viewpoint."),
      t("Пипока на перилах, а за ним радуга!", "Pipoca on the railing, with a rainbow behind him!"),
      t("Самое красивое фото в альбоме.", "The most beautiful photo in the album."),
      t("Подпись: «Que lindo!» Фото — в альбом.", "Caption: “Que lindo!” Into the album it goes."),
    ],
    bridge: t("Маленький самолёт летит на северо-запад. Внизу — вода, трава и снова вода.", "A small plane flies north-west. Below: water, grass, and more water."),
  },
};

const story: CityStory = {
  home: {
    name: t("Номер в гостинице у парка", "A hotel room by the park"),
    nameRu: "O quarto no hotel do parque",
    image: p("home"),
    a11y: t(
      "Номер в старой розовой гостинице у самого парка. В окно видны джунгли и облако брызг над водопадами. Посередине чемодан Мурзика.",
      "A room in an old pink hotel right by the park. Through the window: jungle and a cloud of spray over the falls. Murzik's suitcase stands in the middle.",
    ),
  },
  keepsakeId: "photo-foz",
  welcomeRu: "Olá, Foz do Iguaçu!",
  welcomeEn: t("Привет, Фос-ду-Игуасу!", "Hello, Foz do Iguaçu!"),
  welcomeImage: p("arrival"),
  welcomeA11y: t(
    "Мурзик и Биа на смотровой площадке, перед ними десятки огромных водопадов в джунглях, над водой радуга.",
    "Murzik and Bia on a viewing platform facing dozens of huge waterfalls in the jungle, a rainbow over the spray.",
  ),
  departureImage: p("departure"),
  departureA11y: t("Жулиана машет у ворот парка.", "Juliana waves at the park gates."),
  finale: [
    {
      image: p("photo"),
      a11y: t("Мурзик вклеивает в альбом фото Пипоки с радугой.", "Murzik sticks the photo of Pipoca and the rainbow into the album."),
      lines: [
        { en: t("Шестая страница альбома: Пипока у водопадов.", "Page six of the album: Pipoca at the falls.") },
        { ru: "Que lindo!", en: t("Как красиво!", "How beautiful!") },
        { en: t("Кажется, Пипока путешествует с удовольствием.", "It looks as if Pipoca is enjoying his travels.") },
      ],
    },
    {
      image: img.greet,
      a11y: t("Мурзик радостно подпрыгивает.", "Murzik jumps for joy."),
      lines: [
        { ru: "Foz do Iguaçu completa!", en: t("Фос-ду-Игуасу пройден!", "Foz do Iguaçu complete!") },
        { en: t("7 / 7 уроков", "7 / 7 lessons") },
      ],
    },
    {
      image: p("departure"),
      a11y: t("Жулиана машет на прощание.", "Juliana waves goodbye."),
      lines: [
        { ru: "Tchau, Juliana!", en: t("Пока, Жулиана!", "Bye, Juliana!") },
        { ru: "Próxima parada: o Pantanal!", en: t("Следующая остановка: Пантанал!", "Next stop: the Pantanal!") },
      ],
    },
    {
      image: p("plane"),
      a11y: t("Маленький самолёт над бескрайней равниной с озёрами и реками.", "A small plane over endless plains full of lakes and rivers."),
      lines: [{ ru: "Foz do Iguaçu → Pantanal", en: t("Фос-ду-Игуасу → Пантанал", "Foz do Iguaçu → the Pantanal") }],
    },
    {
      image: pic("pt/pantanal/arrival"),
      a11y: t(
        "Деревянный дом на сваях посреди зелёной равнины и озёр. Над водой летят белые цапли, на берегу греется кайман.",
        "A wooden house on stilts in the middle of green plains and lakes. White egrets fly over the water; a caiman suns itself on the bank.",
      ),
      lines: [
        { ru: "Olá, Pantanal!", en: t("Привет, Пантанал!", "Hello, Pantanal!") },
        { ru: "Quantos animais!", en: t("Сколько животных!", "So many animals!") },
      ],
    },
  ],
};

export const ptFoz = {
  id: "pt-foz",
  name: t("Игуасу", "Iguaçu"),
  namePt: "Foz do Iguaçu",
  lessons: [fz1, fz2, fz3, fz4, fz5, fz6, fz7],
  story,
};
