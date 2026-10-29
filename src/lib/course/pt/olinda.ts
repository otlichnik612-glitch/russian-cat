import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { PAIRS, YOU, build, choice, fill, g, line, listen, match, missing, script, speak, spell, t, v } from "./make";

/* Олинда (и Ресифи) · «Музыка и свободное время» · Город художников и карнавала, танцовщица Лия. Свободное время, фреву, приглашения, будущее с ir, мосты Ресифи, мастерская художника. Пипока выучил «Vamos dançar!». */

const p = (name: string) => pic(`pt/olinda/${name}`);
const LIA = t("Лия", "Lia");

const ol1: Lesson = {
  id: "pt-a1-olinda-1",
  level: "A1",
  cityId: "pt-olinda",
  number: 1,
  title: t("Tempo livre — Свободное время", "Tempo livre — Free time"),
  minutes: 7,
  goals: [
    t("Рассказать, что делаешь в свободное время", "Say what you do in your free time"),
    t("Изменять глаголы: leio, vejo, saio", "Use leio, vejo, saio"),
    t("Спросить, есть ли у человека время", "Ask if someone has time"),
  ],
  vocabNote: t(
    "Tempo — и «время», и «погода» (помнишь Como está o tempo?). Tempo livre — «свободное время».",
    "Tempo means both “time” and “weather” (remember Como está o tempo?). Tempo livre means “free time”.",
  ),
  vocab: [
    v("ptol1-1", "No meu tempo livre eu leio.", t("В свободное время я читаю.", "In my free time I read."),
      t("Мурзик читает книжку в гамаке.", "Murzik reads a book in a hammock."),
      p("l1-1")),
    v("ptol1-2", "Eu vejo filmes.", t("Я смотрю фильмы.", "I watch films."),
      t("Мурзик с попкорном перед телевизором.", "Murzik with popcorn in front of the TV."),
      p("l1-2")),
    v("ptol1-3", "Eu saio com os amigos.", t("Я гуляю с друзьями.", "I go out with friends."),
      t("Компания друзей смеётся на улице вечером.", "A group of friends laughing in the street in the evening."),
      p("l1-3")),
    v("ptol1-4", "Eu fico em casa.", t("Я сижу дома.", "I stay at home."),
      t("Мурзик в пижаме под пледом с чашкой.", "Murzik in pyjamas under a blanket with a mug."),
      p("l1-4")),
    v("ptol1-5", "Eu faço esporte.", t("Я занимаюсь спортом.", "I do sport."),
      t("Мурзик бегает в кроссовках и с повязкой на лбу.", "Murzik jogging in trainers and a headband."),
      p("l1-5")),
    v("ptol1-6", "Você tem tempo livre?", t("У тебя есть свободное время?", "Do you have any free time?"),
      t("Молодая девушка с косичками и в цветастой юбке с интересом смотрит на Мурзика.", "A young woman with braids and a flowery skirt looks at Murzik with interest."),
      p("l1-6")),
    v("ptol1-7", "Eu danço frevo!", t("Я танцую фреву!", "I dance frevo!"),
      t("Девушка подпрыгивает с маленьким цветным зонтиком.", "The young woman leaps in the air holding a small colourful umbrella."),
      p("l1-7")),
  ],
  dialogue: {
    title: t("Знакомство с Лией", "Meeting Lia"),
    note: t(
      "Frevo — быстрый танец Пернамбуку с маленьким цветным зонтиком.",
      "Frevo is a fast dance from Pernambuco, done with a small colourful umbrella.",
    ),
    lines: [
      line("lia", "Oi! Eu sou a Lia. Vocês estão de férias?", t("Привет! Я Лия. Вы на каникулах?", "Hi! I'm Lia. Are you on holiday?")),
      line("bia", "Mais ou menos! E você? O que você faz?", t("Вроде того! А ты? Чем занимаешься?", "Sort of! And you? What do you do?")),
      line("lia", "Eu sou estudante. Mas no meu tempo livre eu danço frevo!", t("Я студентка. А в свободное время танцую фреву!", "I'm a student. But in my free time I dance frevo!")),
      line("murzik", "Que legal! No meu tempo livre eu leio e vejo filmes.", t("Здорово! А я в свободное время читаю и смотрю фильмы.", "Cool! In my free time I read and watch films.")),
      line("lia", "Só isso? Você não sai com os amigos?", t("И всё? Ты не гуляешь с друзьями?", "Is that all? Don't you go out with friends?")),
      line("murzik", "Saio! Agora eu viajo com a Bia.", t("Гуляю! Сейчас я путешествую с Бией.", "I do! At the moment I'm travelling with Bia.")),
      line("lia", "Vocês têm tempo livre hoje? Eu ensino frevo!", t("У вас есть сегодня свободное время? Я научу вас фреву!", "Have you got some free time today? I'll teach you frevo!")),
    ],
    gist: choice("ptol1-d1", t("Чем Лия занимается в свободное время?", "What does Lia do in her free time?"), [
      [t("Танцует фреву.", "She dances frevo."), true],
      [t("Читает книги.", "She reads books."), false],
      [t("Сидит дома.", "She stays at home."), false],
    ]),
  },
  grammar: [
    g(
      t("Неправильные «я»: leio, vejo, saio, faço", "Irregular “I” forms: leio, vejo, saio, faço"),
      [
        t(
          "У некоторых частых глаголов форма «я» особенная: ler — eu leio, ver — eu vejo, sair — eu saio, fazer — eu faço. Остальные формы почти обычные: ele lê, ele vê, ele sai, ele faz.",
          "Some common verbs have an irregular “I” form: ler — eu leio (I read), ver — eu vejo (I see), sair — eu saio (I go out), fazer — eu faço (I do). The others are close to normal: ele lê, ele vê, ele sai, ele faz.",
        ),
        t(
          "Fazer — «делать»: Eu faço esporte — «я занимаюсь спортом», O que você faz? — «чем занимаешься?»",
          "Fazer means “to do, to make”: Eu faço esporte (I do sport), O que você faz? (What do you do?).",
        ),
      ],
      [
        ["Ele lê muito.", t("Он много читает.", "He reads a lot.")],
        ["Eu faço o jantar.", t("Я готовлю ужин.", "I make dinner.")],
      ],
    ),
  ],
  tasks: [
    choice("ptol1-t1", t("Как сказать «Я смотрю фильмы»?", "How do you say “I watch films”?"), [
      ["Eu vejo filmes.", true],
      ["Eu vê filmes.", false],
      ["Eu vero filmes.", false],
    ], { skill: "grammar" }),
    listen("ptol1-t2", t("Послушай. Что делает человек в свободное время?", "Listen. What does the person do in their free time?"), "No meu tempo livre eu fico em casa.", [
      [t("Сидит дома.", "Stays at home."), true],
      [t("Гуляет с друзьями.", "Goes out with friends."), false],
      [t("Занимается спортом.", "Does sport."), false],
    ]),
    match("ptol1-t3", PAIRS, [
      ["ler", t("читать", "to read")],
      ["ver", t("смотреть, видеть", "to watch, to see")],
      ["sair", t("выходить, гулять", "to go out")],
      ["fazer", t("делать", "to do")],
    ], { skill: "words" }),
    spell("ptol1-t4", t("Собери из букв слово «свободный».", "Spell the word for “free”."), "livre"),
    speak("ptol1-t5", "O que você faz no seu tempo livre?", "No meu tempo livre eu leio e saio com os amigos.", t("В свободное время я читаю и гуляю с друзьями.", "In my free time I read and go out with friends."), {
      help: t("Расскажи вслух, что ты делаешь в свободное время.", "Say aloud what you do in your free time."),
    }),
    choice("ptol1-t6", t("Как сказать «Как жаль, что вы уезжаете!»?", "How do you say “Such a pity you're leaving!”?"), [
      ["Que pena que vocês vão embora!", true],
      ["Que pena que vocês ficam!", false],
      ["Tá uma delícia!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "painting",
    itemName: t("Картина с видом Олинды", "Painting of Olinda"),
    itemNameRu: "Quadro de Olinda",
    ru: "Oba! Um quadro!",
    en: t("Ура! Картина!", "Hooray! A painting!"),
    a11y: t("На стене висит маленькая яркая картина: разноцветные домики Олинды и море.", "A small bright painting hangs on the wall: Olinda's colourful houses and the sea."),
    image: p("painting"),
    steps: [
      t("Хозяйка гостиницы — художница.", "The guesthouse owner is a painter."),
      t("Она дарит Мурзику маленькую картину.", "She gives Murzik a small painting."),
      t("«Olinda é a cidade dos artistas!» — «Олинда — город художников!»", "“Olinda é a cidade dos artistas!” — “Olinda is a city of artists!”"),
      t("Картина висит над кроватью.", "The painting hangs above the bed."),
    ],
    bridge: t("Днём Лия приходит с маленькими цветными зонтиками.", "In the afternoon Lia arrives with some little colourful umbrellas."),
  },
};

const ol2: Lesson = {
  id: "pt-a1-olinda-2",
  level: "A1",
  cityId: "pt-olinda",
  number: 2,
  title: t("O frevo — Фреву", "O frevo — Frevo"),
  minutes: 7,
  goals: [
    t("Понять, как двигаться в танце", "Understand dance instructions"),
    t("Сказать «трудно» и «легко»", "Say “difficult” and “easy”"),
    t("Похвалить: Você dança muito bem!", "Praise someone: Você dança muito bem!"),
  ],
  vocabNote: t(
    "Sombrinha — маленький зонтик для фреву. Без него этот танец не танцуют!",
    "A sombrinha is the little umbrella used in frevo. You can't dance frevo without one!",
  ),
  vocab: [
    v("ptol2-1", "Esta é a sombrinha.", t("Это зонтик для фреву.", "This is the frevo umbrella."),
      t("Маленький зонтик в радужную полоску.", "A little rainbow-striped umbrella."),
      p("l2-1")),
    v("ptol2-2", "Pula!", t("Прыгай!", "Jump!"),
      t("Лия высоко подпрыгивает с зонтиком.", "Lia jumps high with her umbrella."),
      p("l2-2")),
    v("ptol2-3", "Mexe as pernas!", t("Двигай ногами!", "Move your legs!"),
      t("Мурзик быстро перебирает лапами.", "Murzik moves his legs very fast."),
      p("l2-3")),
    v("ptol2-4", "É difícil!", t("Это трудно!", "It's hard!"),
      t("Мурзик запутался в собственных лапах.", "Murzik gets his legs in a tangle."),
      p("l2-4")),
    v("ptol2-5", "Não, é fácil!", t("Нет, это легко!", "No, it's easy!"),
      t("Лия легко кружится на одной ноге.", "Lia twirls easily on one foot."),
      p("l2-5")),
    v("ptol2-6", "Mais rápido!", t("Быстрее!", "Faster!"),
      t("Музыканты играют всё быстрее, Мурзик старается не отстать.", "The musicians play faster and faster; Murzik tries to keep up."),
      p("l2-6")),
    v("ptol2-7", "Você dança muito bem!", t("Ты очень хорошо танцуешь!", "You dance really well!"),
      t("Лия аплодирует Мурзику.", "Lia applauds Murzik."),
      p("l2-7")),
  ],
  dialogue: {
    title: t("Урок фреву", "A frevo lesson"),
    note: t(
      "Pega — «бери». Pronto! — «Готово! Вот так!»",
      "Pega means “take it”. Pronto! means “There you go!”",
    ),
    lines: [
      line("lia", "Esta é a sombrinha. Pega! Agora pula!", t("Вот зонтик для фреву. Бери! А теперь прыгай!", "This is the frevo umbrella. Take it! Now jump!")),
      line("murzik", "Pula? Assim?", t("Прыгать? Так?", "Jump? Like this?")),
      line("lia", "Isso! E mexe as pernas! Mais rápido!", t("Да! И двигай ногами! Быстрее!", "That's it! And move your legs! Faster!")),
      line("murzik", "Ai! É difícil!", t("Ай! Это трудно!", "Ow! It's hard!")),
      line("lia", "Não, é fácil! Olha: um, dois, pula!", t("Нет, это легко! Смотри: раз, два, прыжок!", "No, it's easy! Look: one, two, jump!")),
      line("murzik", "Um, dois… pula! Pronto!", t("Раз, два… прыжок! Вот!", "One, two… jump! There!")),
      line("lia", "Muito bem! Você dança muito bem, Murzik!", t("Молодец! Ты очень хорошо танцуешь, Мурзик!", "Well done! You dance really well, Murzik!")),
    ],
    gist: choice("ptol2-d1", t("Чему учит Лия?", "What is Lia teaching?"), [
      [t("Танцевать фреву.", "How to dance frevo."), true],
      [t("Играть на барабане.", "How to play the drum."), false],
      [t("Петь.", "How to sing."), false],
    ]),
  },
  grammar: [
    g(
      t("Bom или bem?", "Bom or bem?"),
      [
        t(
          "Bom — «хороший» (о предмете): um bom dançarino. Bem — «хорошо» (о действии): Você dança bem. Как в русском «хороший» и «хорошо».",
          "Bom means “good” and describes a thing or person: um bom dançarino (a good dancer). Bem means “well” and describes an action: Você dança bem (You dance well) — just like good / well in English.",
        ),
        t(
          "Difícil — «трудный», fácil — «лёгкий». Ударение у них на предпоследний слог (fá-cil, di-fí-cil), а слово кончается на -l — поэтому нужен знак.",
          "Difícil (difficult) and fácil (easy) are stressed on an earlier syllable, which is why they carry an accent.",
        ),
      ],
      [
        ["Ele canta bem.", t("Он хорошо поёт.", "He sings well.")],
        ["O frevo é difícil, mas é bom!", t("Фреву трудный, но хороший!", "Frevo is hard, but it's good!")],
      ],
    ),
  ],
  tasks: [
    choice("ptol2-t1", t("Как сказать «Ты хорошо танцуешь»?", "How do you say “You dance well”?"), [
      ["Você dança bem.", true],
      ["Você dança bom.", false],
      ["Você é dança bem.", false],
    ], { skill: "grammar" }),
    listen("ptol2-t2", t("Послушай. Что говорит Лия?", "Listen. What does Lia say?"), "Mais rápido!", [
      [t("Быстрее!", "Faster!"), true],
      [t("Медленнее!", "Slower!"), false],
      [t("Прыгай!", "Jump!"), false],
    ]),
    match("ptol2-t3", PAIRS, [
      ["fácil", t("лёгкий", "easy")],
      ["difícil", t("трудный", "difficult")],
      ["Pula!", t("Прыгай!", "Jump!")],
      ["a sombrinha", t("зонтик", "the little umbrella")],
    ], { skill: "words" }),
    missing("ptol2-t4", t("Какой буквы не хватает? («лёгкий»)", "Which letter is missing? (“easy”)"), "f", "cil", "á", ["á", "a", "à"]),
    speak("ptol2-t5", "Você dança muito bem!", "Obrigado! Mas é difícil!", t("Спасибо! Но это трудно!", "Thank you! But it's hard!"), {
      help: t("Ответь вслух на комплимент. Можно obrigado или obrigada.", "Answer the compliment aloud — obrigado or obrigada."),
    }),
    choice("ptol2-t6", t("Как сказать «Я сижу дома»?", "How do you say “I stay at home”?"), [
      ["Eu fico em casa.", true],
      ["Eu saio de casa.", false],
      ["Eu faço casa.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sombrinha",
    itemName: t("Зонтик для фреву", "Frevo umbrella"),
    itemNameRu: "Sombrinha de frevo",
    ru: "Oba! Uma sombrinha!",
    en: t("Ура! Зонтик для фреву!", "Hooray! A frevo umbrella!"),
    a11y: t("В углу стоит маленький раскрытый зонтик в радужную полоску.", "A small open rainbow-striped umbrella stands in the corner."),
    image: p("sombrinha"),
    steps: [
      t("После урока Лия даёт Мурзику зонтик — потренироваться.", "After the lesson Lia lends Murzik the umbrella to practise with."),
      t("«Agora você é passista!» — «Теперь ты танцор фреву!»", "“Agora você é passista!” — “Now you're a frevo dancer!”"),
      t("Мурзик кружится с ним по комнате.", "Murzik twirls around the room with it."),
      t("Зонтик стоит в углу, раскрытый.", "The umbrella stands open in the corner."),
    ],
    bridge: t("Вечером Лия спрашивает: «Vocês querem ir a um show hoje?»", "In the evening Lia asks: “Vocês querem ir a um show hoje?”"),
  },
};

const ol3: Lesson = {
  id: "pt-a1-olinda-3",
  level: "A1",
  cityId: "pt-olinda",
  number: 3,
  title: t("Um convite — Приглашение", "Um convite — An invitation"),
  minutes: 7,
  goals: [
    t("Пригласить куда-нибудь", "Invite someone out"),
    t("Согласиться и отказаться", "Accept and turn down an invitation"),
    t("Спросить, во сколько начало", "Ask what time it starts"),
  ],
  vocabNote: t(
    "Topa? — «Ты в деле? Пойдёшь?», очень разговорное. Ответ: Topo! — «Я за!»",
    "Topa? is a casual “Are you in?” The answer is Topo! — “I'm in!”",
  ),
  vocab: [
    v("ptol3-1", "Você quer ir ao show?", t("Хочешь пойти на концерт?", "Do you want to go to the concert?"),
      t("Лия показывает афишу концерта на стене.", "Lia points to a concert poster on the wall."),
      p("l3-1")),
    v("ptol3-2", "Topa?", t("Пойдёшь? (ты в деле?)", "Are you in?"),
      t("Лия подмигивает и протягивает два билета.", "Lia winks, holding out two tickets."),
      p("l3-2")),
    v("ptol3-3", "Topo!", t("Я за!", "I'm in!"),
      t("Мурзик радостно хватает билет.", "Murzik grabs a ticket happily."),
      p("l3-3")),
    v("ptol3-4", "Hoje não posso.", t("Сегодня не могу.", "I can't today."),
      t("Биа с извиняющейся улыбкой показывает на ноутбук.", "Bia points at her laptop with an apologetic smile."),
      p("l3-4")),
    v("ptol3-5", "Fica para a próxima.", t("В другой раз.", "Next time, then."),
      t("Лия понимающе кивает.", "Lia nods understandingly."),
      p("l3-5")),
    v("ptol3-6", "A que horas começa?", t("Во сколько начало?", "What time does it start?"),
      t("Мурзик смотрит на часы-самолёт.", "Murzik looks at his aeroplane clock."),
      p("l3-6")),
    v("ptol3-7", "Começa às nove.", t("Начало в девять.", "It starts at nine."),
      t("На афише нарисованы часы на девяти.", "The poster shows a clock at nine."),
      p("l3-7")),
  ],
  dialogue: {
    title: t("Билеты на концерт", "Tickets for a concert"),
    note: t(
      "Matéria — «статья». Blog — «блог». Encontro você — «встречу тебя».",
      "Matéria means “article”. Encontro você means “I'll meet you”.",
    ),
    lines: [
      line("lia", "Vocês querem ir ao show hoje? É de frevo! Topam?", t("Хотите сегодня на концерт? Фреву! Пойдёте?", "Do you want to go to the concert tonight? It's frevo! Are you in?")),
      line("murzik", "Topo!", t("Я за!", "I'm in!")),
      line("bia", "Hoje não posso… Eu tenho que escrever uma matéria para o blog.", t("Сегодня не могу… Мне надо написать статью для блога.", "I can't tonight… I've got to write an article for my blog.")),
      line("lia", "Que pena! Fica para a próxima.", t("Как жаль! Тогда в другой раз.", "What a pity! Next time, then.")),
      line("murzik", "A que horas começa?", t("Во сколько начало?", "What time does it start?")),
      line("lia", "Começa às nove. Eu encontro você na praça às oito e meia.", t("В девять. Встречу тебя на площади в половине девятого.", "It starts at nine. I'll meet you in the square at half past eight.")),
    ],
    gist: choice("ptol3-d1", t("Почему Биа не идёт на концерт?", "Why isn't Bia going to the concert?"), [
      [t("Ей надо написать статью.", "She has to write an article."), true],
      [t("Она не любит фреву.", "She doesn't like frevo."), false],
      [t("Она заболела.", "She's ill."), false],
    ]),
  },
  grammar: [
    g(
      t("Ter que — «надо, приходится»", "Ter que — “have to”"),
      [
        t(
          "«Мне надо» — eu tenho que + глагол: Eu tenho que escrever — «мне надо писать». Буквально «я имею что писать». Так вежливо объясняют отказ.",
          "“I have to” is eu tenho que + verb: Eu tenho que escrever (I have to write). It's literally the same as English “have to”. Useful for turning down invitations politely.",
        ),
        t(
          "Не могу — não posso (от poder). Fica para a próxima — «перенесём на следующий раз».",
          "“I can't” is não posso (from poder). Fica para a próxima means “Let's leave it for next time”.",
        ),
      ],
      [
        ["Eu tenho que trabalhar.", t("Мне надо работать.", "I have to work.")],
        ["Hoje não posso, eu tenho que estudar.", t("Сегодня не могу, мне надо заниматься.", "I can't today, I have to study.")],
      ],
    ),
  ],
  tasks: [
    choice("ptol3-t1", t("Как сказать «Мне надо работать»?", "How do you say “I have to work”?"), [
      ["Eu tenho que trabalhar.", true],
      ["Eu tenho trabalhar.", false],
      ["Eu sou que trabalhar.", false],
    ], { skill: "grammar" }),
    listen("ptol3-t2", t("Послушай. Во сколько начало?", "Listen. What time does it start?"), "Começa às nove.", [
      [t("В девять.", "At nine."), true],
      [t("В восемь.", "At eight."), false],
      [t("В десять.", "At ten."), false],
    ]),
    match("ptol3-t3", PAIRS, [
      ["Topa?", t("Пойдёшь?", "Are you in?")],
      ["Topo!", t("Я за!", "I'm in!")],
      ["Não posso.", t("Не могу.", "I can't.")],
      ["o show", t("концерт", "the concert")],
    ], { skill: "words" }),
    spell("ptol3-t4", t("Собери из букв слово «приглашение».", "Spell the word for “invitation”."), "convite"),
    speak("ptol3-t5", "Você quer ir ao show hoje?", "Hoje não posso. Fica para a próxima!", t("Сегодня не могу. В другой раз!", "I can't today. Next time!"), {
      help: t("Вежливо откажись вслух. Если хочешь согласиться — Topo!", "Turn it down politely, aloud. To accept, say Topo!"),
    }),
    choice("ptol3-t6", t("Как сказать «Ты очень хорошо танцуешь!»?", "How do you say “You dance really well!”?"), [
      ["Você dança muito bem!", true],
      ["Você dança muito bom!", false],
      ["Você é muito dança!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "ticket",
    itemName: t("Билет на концерт", "Concert ticket"),
    itemNameRu: "Ingresso",
    ru: "Oba! Um ingresso!",
    en: t("Ура! Билет!", "Hooray! A ticket!"),
    a11y: t("К зеркалу приколот яркий билет на концерт фреву с нарисованным зонтиком.", "A bright frevo concert ticket with a little umbrella on it is pinned to the mirror."),
    image: p("ticket"),
    steps: [
      t("Концерт был громкий и весёлый.", "The concert was loud and joyful."),
      t("Мурзик танцевал до полуночи.", "Murzik danced until midnight."),
      t("Билет он оставил на память.", "He kept the ticket as a souvenir."),
      t("Билет приколот к зеркалу.", "The ticket is pinned to the mirror."),
    ],
    bridge: t("Утром Биа спрашивает: «O que você vai fazer amanhã, Murzik?»", "In the morning Bia asks: “O que você vai fazer amanhã, Murzik?”"),
  },
};

const ol4: Lesson = {
  id: "pt-a1-olinda-4",
  level: "A1",
  cityId: "pt-olinda",
  number: 4,
  title: t("Amanhã eu vou… — Завтра я буду…", "Amanhã eu vou… — Tomorrow I'm going to…"),
  minutes: 7,
  goals: [
    t("Рассказать о планах", "Talk about your plans"),
    t("Строить будущее: vou + глагол", "Talk about the future: vou + verb"),
    t("Спросить о погоде на завтра", "Ask about tomorrow's weather"),
  ],
  vocabNote: t(
    "Vamos ver — «посмотрим». Так бразильцы отвечают, когда ещё не решили.",
    "Vamos ver means “We'll see” — what Brazilians say when they haven't decided yet.",
  ),
  vocab: [
    v("ptol4-1", "O que você vai fazer amanhã?", t("Что ты будешь делать завтра?", "What are you going to do tomorrow?"),
      t("Биа с блокнотом за завтраком.", "Bia with her notebook at breakfast."),
      p("l4-1")),
    v("ptol4-2", "Amanhã eu vou visitar Recife.", t("Завтра я поеду в Ресифи.", "Tomorrow I'm going to visit Recife."),
      t("Мурзик показывает на карте большой город рядом с Олиндой.", "Murzik points on the map to a big city next to Olinda."),
      p("l4-2")),
    v("ptol4-3", "Ela vai escrever.", t("Она будет писать.", "She's going to write."),
      t("Биа печатает на ноутбуке.", "Bia types on her laptop."),
      p("l4-3")),
    v("ptol4-4", "Eu não vou trabalhar.", t("Я не буду работать.", "I'm not going to work."),
      t("Мурзик закрывает ноутбук и надевает соломенную шляпу.", "Murzik closes the laptop and puts on his straw hat."),
      p("l4-4")),
    v("ptol4-5", "Vai chover amanhã?", t("Завтра будет дождь?", "Is it going to rain tomorrow?"),
      t("Мурзик смотрит на тучку за окном.", "Murzik looks at a little cloud outside the window."),
      p("l4-5")),
    v("ptol4-6", "Não, vai fazer sol.", t("Нет, будет солнечно.", "No, it's going to be sunny."),
      t("В телефоне — прогноз с солнышком.", "A weather app on the phone shows a sun."),
      p("l4-6")),
    v("ptol4-7", "Vamos ver.", t("Посмотрим.", "We'll see."),
      t("Лия пожимает плечами и улыбается.", "Lia shrugs and smiles."),
      p("l4-7")),
  ],
  dialogue: {
    title: t("Планы на завтра", "Plans for tomorrow"),
    note: t(
      "Pontes — «мосты». Vamos ver — «посмотрим».",
      "Pontes means “bridges”. Vamos ver means “we'll see”.",
    ),
    lines: [
      line("bia", "Murzik, o que você vai fazer amanhã?", t("Мурзик, что ты будешь делать завтра?", "Murzik, what are you going to do tomorrow?")),
      line("murzik", "Amanhã eu vou visitar Recife! A Lia vai mostrar as pontes.", t("Завтра я поеду в Ресифи! Лия покажет мосты.", "Tomorrow I'm going to visit Recife! Lia's going to show me the bridges.")),
      line("bia", "Eu vou escrever a matéria. Eu não vou sair.", t("А я буду писать статью. Никуда не пойду.", "I'm going to write my article. I'm not going out.")),
      line("murzik", "Vai chover amanhã?", t("Завтра будет дождь?", "Is it going to rain tomorrow?")),
      line("lia", "Não, vai fazer sol! Mas Recife é Recife… vamos ver.", t("Нет, будет солнце! Но Ресифи есть Ресифи… посмотрим.", "No, it's going to be sunny! But Recife is Recife… we'll see.")),
    ],
    gist: choice("ptol4-d1", t("Что будет делать Биа завтра?", "What is Bia going to do tomorrow?"), [
      [t("Писать статью.", "Write her article."), true],
      [t("Поедет в Ресифи.", "Go to Recife."), false],
      [t("Танцевать фреву.", "Dance frevo."), false],
    ]),
  },
  grammar: [
    g(
      t("Будущее: vou + глагол", "The future: vou + verb"),
      [
        t(
          "Самый простой способ говорить о будущем: ir + глагол. Eu vou visitar, você vai escrever, nós vamos ver, eles vão sair. Это как русское «буду + глагол».",
          "The easiest way to talk about the future is ir + verb, just like English “going to”: eu vou visitar, você vai escrever, nós vamos ver, eles vão sair.",
        ),
        t(
          "«Не» ставят перед vou: Eu não vou trabalhar. Погода тоже: Vai chover, vai fazer sol.",
          "Put não before vou: Eu não vou trabalhar. Weather works too: Vai chover (It's going to rain), vai fazer sol (It's going to be sunny).",
        ),
      ],
      [
        ["Amanhã nós vamos à praia.", t("Завтра мы пойдём на пляж.", "Tomorrow we're going to the beach.")],
        ["Ele não vai trabalhar.", t("Он не будет работать.", "He's not going to work.")],
      ],
    ),
  ],
  tasks: [
    choice("ptol4-t1", t("Как сказать «Завтра я буду читать»?", "How do you say “Tomorrow I'm going to read”?"), [
      ["Amanhã eu vou ler.", true],
      ["Amanhã eu vou leio.", false],
      ["Amanhã eu ler vou.", false],
    ], { skill: "grammar" }),
    listen("ptol4-t2", t("Послушай. Какая будет погода?", "Listen. What's the weather going to be like?"), "Amanhã vai chover.", [
      [t("Будет дождь.", "It's going to rain."), true],
      [t("Будет солнечно.", "It's going to be sunny."), false],
      [t("Будет холодно.", "It's going to be cold."), false],
    ]),
    fill("ptol4-t3", t("Вставь слово: «Они будут танцевать».", "Fill in the word: “They're going to dance”."), "Eles", "dançar.", "vão", ["vão", "vai", "vamos"], { skill: "words" }),
    missing("ptol4-t4", t("Какой буквы не хватает? («завтра»)", "Which letter is missing? (“tomorrow”)"), "ama", "hã", "n", ["n", "m", "nh"]),
    speak("ptol4-t5", "O que você vai fazer amanhã?", "Amanhã eu vou estudar português.", t("Завтра я буду учить португальский.", "Tomorrow I'm going to study Portuguese."), {
      help: t("Расскажи вслух о своих планах на завтра.", "Talk about your plans for tomorrow, aloud."),
    }),
    choice("ptol4-t6", t("Как спросить «Во сколько начало?»", "How do you ask “What time does it start?”"), [
      ["A que horas começa?", true],
      ["Que horas são?", false],
      ["Começa às nove.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "mask",
    itemName: t("Карнавальная маска", "Carnival mask"),
    itemNameRu: "Máscara de carnaval",
    ru: "Oba! Uma máscara!",
    en: t("Ура! Маска!", "Hooray! A mask!"),
    a11y: t("На стене висит яркая карнавальная маска с перьями и блёстками.", "A bright Carnival mask with feathers and sequins hangs on the wall."),
    image: p("mask"),
    steps: [
      t("Лия приносит Мурзику карнавальную маску.", "Lia brings Murzik a Carnival mask."),
      t("«Em Olinda é Carnaval o ano todo!» — «В Олинде карнавал круглый год!»", "“Em Olinda é Carnaval o ano todo!” — “In Olinda it's Carnival all year round!”"),
      t("Мурзик примеряет её перед зеркалом.", "Murzik tries it on in front of the mirror."),
      t("Маска висит на стене.", "The mask hangs on the wall."),
    ],
    bridge: t("Утром Мурзик и Лия едут в Ресифи, соседний большой город.", "In the morning Murzik and Lia go to Recife, the big city next door."),
  },
};

const ol5: Lesson = {
  id: "pt-a1-olinda-5",
  level: "A1",
  cityId: "pt-olinda",
  number: 5,
  title: t("Recife — Ресифи", "Recife — Recife"),
  minutes: 7,
  goals: [
    t("Описать город с реками и мостами", "Describe a city of rivers and bridges"),
    t("Сравнить: parece…", "Make comparisons with parece…"),
    t("Прочитать предупреждение", "Understand a warning sign"),
  ],
  vocabNote: t(
    "Ресифи стоит на островах между реками, поэтому его зовут «бразильской Венецией». Пляж Боа-Вьяжен — главный пляж города.",
    "Recife is built on islands between rivers, so it's called “the Brazilian Venice”. Boa Viagem is the city's main beach.",
  ),
  vocab: [
    v("ptol5-1", "Recife tem muitas pontes.", t("В Ресифи много мостов.", "Recife has lots of bridges."),
      t("Река с несколькими мостами, вокруг старые здания.", "A river crossed by several bridges, with old buildings around it."),
      p("l5-1")),
    v("ptol5-2", "a ponte", t("мост", "the bridge"),
      t("Мурзик стоит на старом железном мосту.", "Murzik stands on an old iron bridge."),
      p("l5-2")),
    v("ptol5-3", "Parece Veneza!", t("Похоже на Венецию!", "It looks like Venice!"),
      t("Лодки на реке между старыми домами.", "Boats on the river between old houses."),
      p("l5-3")),
    v("ptol5-4", "Tem tubarão!", t("Здесь акулы!", "There are sharks!"),
      t("Знак на пляже: силуэт акулы в треугольнике.", "A sign on the beach: a shark silhouette in a triangle."),
      p("l5-4")),
    v("ptol5-5", "É perigoso nadar aqui.", t("Здесь опасно плавать.", "It's dangerous to swim here."),
      t("Спасатель на вышке показывает на знак.", "A lifeguard on a tower points to the sign."),
      p("l5-5")),
    v("ptol5-6", "Vamos tomar um sorvete?", t("Съедим мороженое?", "Shall we get an ice cream?"),
      t("Лия показывает на тележку с мороженым.", "Lia points to an ice-cream cart."),
      p("l5-6")),
    v("ptol5-7", "Eu quero de coco.", t("Мне кокосовое.", "I'd like coconut."),
      t("Мурзик держит рожок с белым мороженым.", "Murzik holds a cone of white ice cream."),
      p("l5-7")),
  ],
  dialogue: {
    title: t("Прогулка по Ресифи", "A walk around Recife"),
    note: t(
      "Só na areia — «только на песке». Sabores — «вкусы».",
      "Só na areia means “only on the sand”. Sabores means “flavours”.",
    ),
    lines: [
      line("lia", "Olha, Murzik: Recife tem muitas pontes!", t("Смотри, Мурзик: в Ресифи много мостов!", "Look, Murzik: Recife has lots of bridges!")),
      line("murzik", "Os rios, os barcos, as pontes… Parece Veneza!", t("Реки, лодки, мосты… Похоже на Венецию!", "The rivers, the boats, the bridges… It looks like Venice!")),
      line("lia", "Isso! E agora a praia de Boa Viagem.", t("Точно! А теперь пляж Боа-Вьяжен.", "Exactly! And now Boa Viagem beach.")),
      line("murzik", "Vamos nadar? Hmm… Lia, o que é isso? Tem tubarão?", t("Поплаваем? Хм… Лия, что это? Тут акулы?", "Shall we swim? Hmm… Lia, what's that? Are there sharks?")),
      line("lia", "Tem. É perigoso nadar aqui. Só na areia!", t("Есть. Здесь опасно плавать. Только на песке!", "There are. It's dangerous to swim here. Stay on the sand!")),
      line("lia", "Vamos tomar um sorvete? Tem muitos sabores.", t("Съедим мороженое? Тут много вкусов.", "Shall we get an ice cream? There are loads of flavours.")),
      line("murzik", "Eu quero de coco!", t("Мне кокосовое!", "I'd like coconut!")),
    ],
    gist: choice("ptol5-d1", t("Почему они не плавают?", "Why don't they go swimming?"), [
      [t("В море бывают акулы.", "There can be sharks in the sea."), true],
      [t("Вода холодная.", "The water's cold."), false],
      [t("Пошёл дождь.", "It started to rain."), false],
    ]),
  },
  grammar: [
    g(
      t("Parece… — «похоже на…»", "Parece… — “It looks like…”"),
      [
        t(
          "Parece + слово — «похоже на»: Parece Veneza — «похоже на Венецию». Parece + прилагательное — «кажется, выглядит»: Parece fácil — «кажется лёгким».",
          "Parece + noun means “it looks like”: Parece Veneza (It looks like Venice). Parece + adjective means “it seems”: Parece fácil (It looks easy).",
        ),
        t(
          "É perigoso + глагол — «опасно делать»: É perigoso nadar aqui. Так же é proibido (запрещено), é bom (хорошо), é difícil (трудно).",
          "É perigoso + verb — “It's dangerous to…”: É perigoso nadar aqui. The same pattern works with é proibido (it's forbidden), é bom (it's good), é difícil (it's hard).",
        ),
      ],
      [
        ["Parece um sonho!", t("Как во сне!", "It's like a dream!")],
        ["É difícil dançar frevo.", t("Танцевать фреву трудно.", "Dancing frevo is hard.")],
      ],
    ),
  ],
  tasks: [
    choice("ptol5-t1", t("Как сказать «Здесь опасно плавать»?", "How do you say “It's dangerous to swim here”?"), [
      ["É perigoso nadar aqui.", true],
      ["É perigoso de nadar aqui.", false],
      ["Está perigoso nada aqui.", false],
    ], { skill: "grammar" }),
    listen("ptol5-t2", t("Послушай. Какое мороженое хочет Мурзик?", "Listen. Which ice cream does Murzik want?"), "Eu quero de coco.", [
      [t("Кокосовое.", "Coconut."), true],
      [t("Шоколадное.", "Chocolate."), false],
      [t("Манговое.", "Mango."), false],
    ]),
    match("ptol5-t3", PAIRS, [
      ["a ponte", t("мост", "the bridge")],
      ["o tubarão", t("акула", "the shark")],
      ["o sorvete", t("мороженое", "ice cream")],
      ["Parece…", t("Похоже на…", "It looks like…")],
    ], { skill: "words" }),
    spell("ptol5-t4", t("Собери из букв слово «мост».", "Spell the word for “bridge”."), "ponte"),
    speak("ptol5-t5", "Vamos tomar um sorvete?", "Vamos! Eu quero de manga.", t("Давай! Мне манговое.", "Let's! I'd like mango."), {
      help: t("Согласись вслух и выбери вкус.", "Agree aloud and choose a flavour."),
    }),
    choice("ptol5-t6", t("Как сказать «Завтра будет солнечно»?", "How do you say “Tomorrow it's going to be sunny”?"), [
      ["Amanhã vai fazer sol.", true],
      ["Amanhã faz sol ontem.", false],
      ["Amanhã vou sol.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cake",
    itemName: t("Рулет «болу-ди-ролу»", "Bolo de rolo"),
    itemNameRu: "Bolo de rolo",
    ru: "Oba! Um bolo de rolo!",
    en: t("Ура! Болу-ди-ролу!", "Hooray! A bolo de rolo!"),
    a11y: t("На тарелке — тонкий рулет из множества слоёв с гуавой.", "A thin many-layered Swiss roll with guava filling on a plate."),
    image: p("cake"),
    steps: [
      t("В Ресифи Лия покупает знаменитый рулет из Пернамбуку.", "In Recife Lia buys a famous Pernambuco Swiss roll."),
      t("В нём больше двадцати тонких слоёв!", "It has more than twenty thin layers!"),
      t("«É Patrimônio de Pernambuco!» — «Это сокровище Пернамбуку!»", "“É Patrimônio de Pernambuco!” — “It's a Pernambuco treasure!”"),
      t("Рулет ждёт на тарелке. Недолго.", "The roll waits on a plate. Not for long."),
    ],
    bridge: t("Вечером в Олинде Лия ведёт Мурзика в мастерскую знакомого художника.", "Back in Olinda that evening, Lia takes Murzik to a painter friend's studio."),
  },
};

const ol6: Lesson = {
  id: "pt-a1-olinda-6",
  level: "A1",
  cityId: "pt-olinda",
  number: 6,
  title: t("No ateliê — В мастерской", "No ateliê — In the studio"),
  minutes: 7,
  goals: [
    t("Говорить о картинах", "Talk about paintings"),
    t("Спросить, кто это сделал", "Ask who made something"),
    t("Сказать «сделано вручную»", "Say something is handmade"),
  ],
  vocabNote: t(
    "Ateliê — «мастерская художника». Pintar — «рисовать красками». Eu pintei — «я нарисовал(а)».",
    "Ateliê means an artist's studio. Pintar means “to paint”. Eu pintei means “I painted”.",
  ),
  vocab: [
    v("ptol6-1", "Você pinta?", t("Ты рисуешь?", "Do you paint?"),
      t("Мурзик заглядывает в мастерскую, полную картин.", "Murzik peeks into a studio full of paintings."),
      p("l6-1")),
    v("ptol6-2", "Que quadro bonito!", t("Какая красивая картина!", "What a beautiful painting!"),
      t("Большая картина с разноцветными домами и карнавальными куклами.", "A large painting of colourful houses and Carnival puppets."),
      p("l6-2")),
    v("ptol6-3", "Quem pintou?", t("Кто нарисовал?", "Who painted it?"),
      t("Мурзик показывает на картину.", "Murzik points at the painting."),
      p("l6-3")),
    v("ptol6-4", "Eu pintei.", t("Я нарисовал.", "I painted it."),
      t("Пожилой художник с кистью за ухом скромно улыбается.", "An old painter with a brush behind his ear smiles modestly."),
      p("l6-4")),
    v("ptol6-5", "As cores são vivas.", t("Краски яркие.", "The colours are bright."),
      t("Банки с яркими красками на столе.", "Pots of bright paint on a table."),
      p("l6-5")),
    v("ptol6-6", "É feito à mão.", t("Это сделано вручную.", "It's handmade."),
      t("Художник расписывает деревянную фигурку.", "The painter decorates a small wooden figure."),
      p("l6-6")),
    v("ptol6-7", "Posso tentar?", t("Можно попробовать?", "Can I try?"),
      t("Мурзик держит кисть, на носу у него пятнышко краски.", "Murzik holds a paintbrush, a dab of paint on his nose."),
      p("l6-7")),
  ],
  dialogue: {
    title: t("Мастерская художника", "The painter's studio"),
    note: t(
      "Bonecos gigantes — «гигантские куклы», символ карнавала Олинды. Artista — «художник, артист».",
      "Bonecos gigantes — giant puppets — are the symbol of Olinda's Carnival. Artista means “artist”.",
    ),
    lines: [
      line("murzik", "Nossa! Que quadro bonito! Quem pintou?", t("Ого! Какая красивая картина! Кто нарисовал?", "Wow! What a beautiful painting! Who painted it?")),
      line("pintor", "Eu pintei. São os bonecos gigantes do Carnaval.", t("Я. Это гигантские куклы карнавала.", "I did. These are the Carnival's giant puppets.")),
      line("murzik", "As cores são tão vivas! Você pinta todo dia?", t("Какие яркие краски! Вы рисуете каждый день?", "The colours are so bright! Do you paint every day?")),
      line("pintor", "Todo dia! E isto é feito à mão: um boneco de madeira.", t("Каждый день! А это сделано вручную: деревянная кукла.", "Every day! And this is handmade: a wooden puppet.")),
      line("murzik", "Posso tentar?", t("Можно попробовать?", "Can I try?")),
      line("pintor", "Claro! Pega o pincel. Você é um artista!", t("Конечно! Бери кисть. Ты художник!", "Of course! Take the brush. You're an artist!")),
    ],
    gist: choice("ptol6-d1", t("Что нарисовано на картине?", "What's in the painting?"), [
      [t("Гигантские куклы карнавала.", "The Carnival's giant puppets."), true],
      [t("Море и лодки.", "The sea and boats."), false],
      [t("Пипока.", "Pipoca."), false],
    ]),
  },
  grammar: [
    g(
      t("Кто нарисовал? — Quem pintou? Eu pintei.", "Quem pintou? — Eu pintei."),
      [
        t(
          "Прошедшее у глаголов на -ar: eu pintei — «я нарисовал(а)», ele / ela / você pintou — «он, она нарисовал(а)». Вопрос «Кто сделал?» — Quem + форма «он»: Quem pintou?",
          "For -ar verbs, the past is eu pintei (I painted) and ele / ela / você pintou (he / she / you painted). “Who did it?” uses the he/she form: Quem pintou?",
        ),
        t(
          "Feito à mão — «сделано руками». Feito — от fazer, как русское «сделанный».",
          "Feito à mão means “made by hand”. Feito comes from fazer (to make).",
        ),
      ],
      [
        ["Quem fez o bolo? — Eu fiz.", t("Кто испёк торт? — Я.", "Who made the cake? — I did.")],
        ["Ela pintou a casa.", t("Она покрасила дом.", "She painted the house.")],
      ],
    ),
  ],
  tasks: [
    choice("ptol6-t1", t("Как ответить «Я нарисовал(а)»?", "How do you answer “I painted it”?"), [
      ["Eu pintei.", true],
      ["Eu pintou.", false],
      ["Eu pinto ontem.", false],
    ], { skill: "grammar" }),
    listen("ptol6-t2", t("Послушай. Как это сделано?", "Listen. How was it made?"), "É feito à mão.", [
      [t("Вручную.", "By hand."), true],
      [t("На фабрике.", "In a factory."), false],
      [t("Из стекла.", "From glass."), false],
    ]),
    match("ptol6-t3", PAIRS, [
      ["o quadro", t("картина", "the painting")],
      ["pintar", t("рисовать красками", "to paint")],
      ["o pincel", t("кисть", "the brush")],
      ["vivas", t("яркие", "bright")],
    ], { skill: "words" }),
    missing("ptol6-t4", t("Какой буквы не хватает? («кисть»)", "Which letter is missing? (“brush”)"), "pin", "el", "c", ["c", "s", "ç"]),
    speak("ptol6-t5", "Você gosta de pintar?", "Gosto! Posso tentar?", t("Нравится! Можно попробовать?", "I do! Can I try?"), {
      help: t("Ответь вслух и попроси попробовать.", "Answer aloud and ask if you can have a go."),
    }),
    choice("ptol6-t6", t("Как сказать «Похоже на Венецию!»?", "How do you say “It looks like Venice!”?"), [
      ["Parece Veneza!", true],
      ["É perigoso Veneza!", false],
      ["Tem Veneza!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "puppet",
    itemName: t("Маленькая карнавальная кукла", "Little Carnival puppet"),
    itemNameRu: "Boneco de Olinda",
    ru: "Oba! Um boneco de Olinda!",
    en: t("Ура! Кукла из Олинды!", "Hooray! An Olinda puppet!"),
    a11y: t("На полке стоит маленькая расписанная деревянная кукла с большой головой — как гигантские куклы карнавала.", "A small painted wooden puppet with a big head — like the Carnival giants — stands on the shelf."),
    image: p("puppet"),
    steps: [
      t("Мурзик сам раскрашивает деревянную куклу.", "Murzik paints a wooden puppet himself."),
      t("Художник смеётся: она похожа на Мурзика!", "The painter laughs: it looks like Murzik!"),
      t("«É um boneco do Murzik!» — «Это кукла-Мурзик!»", "“É um boneco do Murzik!” — “It's a Murzik puppet!”"),
      t("Кукла стоит на полке.", "The puppet stands on the shelf."),
    ],
    bridge: t("Утром Лия прибегает, запыхавшись: «Murzik! O papagaio! Eu lembrei!»", "In the morning Lia comes running, out of breath: “Murzik! O papagaio! Eu lembrei!”"),
  },
};

const ol7: Lesson = {
  id: "pt-a1-olinda-7",
  level: "A1",
  cityId: "pt-olinda",
  number: 7,
  title: t("Vamos dançar! — Давай танцевать!", "Vamos dançar! — Let's dance!"),
  minutes: 8,
  goals: [
    t("Понять, что рассказывают о Пипоке", "Understand what people say about Pipoca"),
    t("Сказать «было здорово»", "Say “it was great”"),
    t("Вспомнить все слова Олинды", "Review all the words from Olinda"),
  ],
  vocabNote: t(
    "Ele dançou — «он танцевал», todo mundo — «все». Foi muito bom — «было очень здорово».",
    "Ele dançou means “he danced”, todo mundo means “everybody”. Foi muito bom means “it was really great”.",
  ),
  vocab: [
    v("ptol7-1", "Vamos dançar!", t("Давай танцевать!", "Let's dance!"),
      t("Зелёный попугай сидит на маленьком зонтике для фреву и машет крыльями.", "The green parrot perches on a little frevo umbrella, flapping his wings."),
      p("l7-1")),
    v("ptol7-2", "Ele dançou com a gente.", t("Он танцевал с нами.", "He danced with us."),
      t("Попугай пляшет в кругу танцоров фреву.", "The parrot bobs about in a circle of frevo dancers."),
      p("l7-2")),
    v("ptol7-3", "Todo mundo dançou!", t("Все танцевали!", "Everybody danced!"),
      t("Вся улица танцует с зонтиками.", "The whole street dances with umbrellas."),
      p("l7-3")),
    v("ptol7-4", "Eles foram para Fortaleza.", t("Они уехали в Форталезу.", "They've gone to Fortaleza."),
      t("Карта: стрелка на север, вдоль побережья.", "A map: an arrow north along the coast."),
      p("l7-4")),
    v("ptol7-5", "o Ceará", t("Сеара (штат)", "Ceará (the state)"),
      t("Маленькая картинка: дюны, пальмы и парусные лодки.", "A little picture: dunes, palm trees and sailing boats."),
      p("l7-5")),
    v("ptol7-6", "Leva a sombrinha!", t("Возьми зонтик!", "Take the umbrella!"),
      t("Лия протягивает Мурзику зонтик для фреву.", "Lia holds out a frevo umbrella to Murzik."),
      p("l7-6")),
    v("ptol7-7", "Foi muito bom!", t("Было очень здорово!", "It was really great!"),
      t("Мурзик и Лия обнимаются на прощание.", "Murzik and Lia hug goodbye."),
      p("l7-7")),
  ],
  dialogue: {
    title: t("Что сказал попугай", "What the parrot said"),
    note: t(
      "Lembrei — «я вспомнила». Bloco — «группа уличного карнавала». Animado — «весёлый, заводной».",
      "Lembrei means “I remembered”. A bloco is a street-carnival group. Animado means “lively, full of fun”.",
    ),
    lines: [
      line("lia", "Murzik! O papagaio! Eu lembrei! Ele estava no bloco, na rua, no sábado.", t("Мурзик! Попугай! Я вспомнила! Он был с карнавальной группой, на улице, в субботу.", "Murzik! The parrot! I remembered! He was with the carnival group in the street on Saturday.")),
      line("murzik", "O Pipoca! O que ele fez?", t("Пипока! Что он сделал?", "Pipoca! What did he do?")),
      line("lia", "Ele dançou com a gente! E gritou: Vamos dançar! Vamos dançar!", t("Танцевал с нами! И кричал: «Давай танцевать! Давай танцевать!»", "He danced with us! And he shouted: Let's dance! Let's dance!")),
      line("bia", "Que animado! E a banda?", t("Вот заводной! А группа?", "What a party animal! And the band?")),
      line("lia", "Eles foram para Fortaleza, no Ceará.", t("Они уехали в Форталезу, в Сеару.", "They've gone to Fortaleza, in Ceará.")),
      line("lia", "Leva a sombrinha, Murzik! Para dançar lá também!", t("Возьми зонтик, Мурзик! Чтобы и там танцевать!", "Take the umbrella, Murzik! So you can dance there too!")),
      line("murzik", "Obrigado, Lia! Foi muito bom!", t("Спасибо, Лия! Было очень здорово!", "Thank you, Lia! It was really great!")),
    ],
    gist: choice("ptol7-d1", t("Какую фразу выучил Пипока в Олинде?", "What phrase did Pipoca learn in Olinda?"), [
      [t("«Давай танцевать!»", "“Let's dance!”"), true],
      [t("«Прыгай!»", "“Jump!”"), false],
      [t("«Я за!»", "“I'm in!”"), false],
    ]),
  },
  grammar: [
    g(
      t("Foi — «было»", "Foi — “it was”"),
      [
        t(
          "Foi — прошедшее от ser: Foi muito bom — «было очень здорово», Foi incrível — «было потрясающе» (помнишь Игуасу?). Удобно, чтобы поблагодарить.",
          "Foi is the past of ser: Foi muito bom (It was really great), Foi incrível (It was amazing — remember Iguaçu?). Handy for saying thank you.",
        ),
        t(
          "Интересно: foi — ещё и прошедшее от ir: Ele foi para Fortaleza — «он поехал в Форталезу». Ser и ir в прошедшем совпадают!",
          "Fun fact: foi is also the past of ir: Ele foi para Fortaleza (He went to Fortaleza). Ser and ir share the same past forms!",
        ),
      ],
      [
        ["Foi muito divertido!", t("Было очень весело!", "It was great fun!")],
        ["A banda foi para o Ceará.", t("Группа уехала в Сеару.", "The band went to Ceará.")],
      ],
    ),
  ],
  tasks: [
    listen("ptol7-t1", t("Аудиоэкзамен. Что рассказывает Лия?", "Audio exam. What does Lia tell them?"), "O papagaio dançou com a gente e gritou: Vamos dançar! A banda foi para Fortaleza.", [
      [t("Попугай танцевал с ними, а группа уехала в Форталезу.", "The parrot danced with them, and the band went to Fortaleza."), true],
      [t("Попугай остался в Олинде.", "The parrot stayed in Olinda."), false],
      [t("Группа поехала в Ресифи.", "The band went to Recife."), false],
    ]),
    choice("ptol7-t2", t("Как сказать «Было очень здорово!»?", "How do you say “It was really great!”?"), [
      ["Foi muito bom!", true],
      ["É muito bem!", false],
      ["Vai muito bom!", false],
    ], { skill: "words" }),
    build("ptol7-t3", t("Собери фразу: «Они уехали в Форталезу».", "Build the sentence: “They've gone to Fortaleza”."), ["Eles", "foram", "para", "Fortaleza."]),
    missing("ptol7-t4", t("Какой буквы не хватает? («танцевать»)", "Which letter is missing? (“to dance”)"), "dan", "ar", "ç", ["ç", "s", "c"]),
    speak("ptol7-t5", "Gostou de Olinda?", "Foi muito bom! Obrigado por tudo!", t("Было очень здорово! Спасибо за всё!", "It was really great! Thanks for everything!"), {
      help: t("Поблагодари вслух. Можно obrigado или obrigada.", "Say thank you aloud — obrigado or obrigada."),
    }),
    script("ptol7-t6", t("Вспомни всю Олинду. Закончи разговор с Лией.", "Remember all of Olinda. Finish the conversation with Lia."), [
      { speaker: LIA, text: "Oi! O que você faz no seu tempo livre?" },
      { speaker: YOU, answer: "Eu leio e vejo filmes.", options: ["Eu leio e vejo filmes.", "Eu lê e vê filmes.", "Começa às nove."] },
      { speaker: LIA, text: "Você quer ir ao show hoje? Topa?" },
      { speaker: YOU, answer: "Topo! A que horas começa?", options: ["Topo! A que horas começa?", "Foi muito bom!", "É feito à mão."] },
      { speaker: LIA, text: "Às nove. E amanhã?" },
      { speaker: YOU, answer: "Amanhã eu vou visitar Recife.", options: ["Amanhã eu vou visitar Recife.", "Amanhã eu fui a Recife.", "Parece Veneza!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-olinda",
    itemName: t("Фото Пипоки на зонтике", "Photo of Pipoca on an umbrella"),
    itemNameRu: "Foto do Pipoca no frevo",
    ru: "Oba! Mais uma foto do Pipoca!",
    en: t("Ура! Ещё одно фото Пипоки!", "Hooray! Another photo of Pipoca!"),
    a11y: t(
      "Фото: зелёный попугай сидит на радужном зонтике для фреву, вокруг танцоры в ярких костюмах.",
      "A photo: the green parrot perched on a rainbow frevo umbrella, surrounded by dancers in bright costumes.",
    ),
    image: p("photo"),
    steps: [
      t("У Лии есть фото с того дня.", "Lia has a photo from that day."),
      t("Пипока на зонтике в самом центре танца!", "Pipoca on an umbrella, right in the middle of the dance!"),
      t("«O papagaio mais animado de Olinda!» — «Самый заводной попугай Олинды!»", "“O papagaio mais animado de Olinda!” — “The liveliest parrot in Olinda!”"),
      t("Подпись: «Vamos dançar!» Фото — в альбом.", "Caption: “Vamos dançar!” Into the album it goes."),
    ],
    bridge: t("Автобус едет на север вдоль моря. Становится всё жарче.", "The bus heads north along the coast. It's getting hotter and hotter."),
  },
};

const story: CityStory = {
  home: {
    name: t("Комната в доме художницы", "A room in a painter's house"),
    nameRu: "O quarto na casa da artista",
    image: p("home"),
    a11y: t(
      "Комната в жёлтом домике на холме: окно с зелёными ставнями, вдали видно море и башни Ресифи. Посередине чемодан Мурзика.",
      "A room in a little yellow house on a hill: a window with green shutters, and the sea and Recife's towers in the distance. Murzik's suitcase in the middle.",
    ),
  },
  keepsakeId: "photo-olinda",
  welcomeRu: "Olá, Olinda!",
  welcomeEn: t("Привет, Олинда!", "Hello, Olinda!"),
  welcomeImage: p("arrival"),
  welcomeA11y: t(
    "Старинный город на холме над морем: разноцветные домики, церкви, и огромные куклы карнавала на улице.",
    "An old hilltop town above the sea: colourful little houses, churches and giant Carnival puppets in the street.",
  ),
  departureImage: p("departure"),
  departureA11y: t("Лия машет зонтиком для фреву на автобусной остановке.", "Lia waves her frevo umbrella at the bus stop."),
  finale: [
    {
      image: p("photo"),
      a11y: t("Мурзик вклеивает в альбом фото Пипоки на зонтике.", "Murzik sticks the photo of Pipoca on the umbrella into the album."),
      lines: [
        { en: t("Одиннадцатая страница альбома: Пипока танцует фреву.", "Page eleven of the album: Pipoca dancing frevo.") },
        { ru: "Vamos dançar!", en: t("Давай танцевать!", "Let's dance!") },
        { en: t("Осталось всего три города. Мурзик чувствует: они уже близко.", "Only three cities left. Murzik can feel it: they're getting close.") },
      ],
    },
    {
      image: img.greet,
      a11y: t("Мурзик радостно подпрыгивает.", "Murzik jumps for joy."),
      lines: [
        { ru: "Olinda completa!", en: t("Олинда пройдена!", "Olinda complete!") },
        { en: t("7 / 7 уроков", "7 / 7 lessons") },
      ],
    },
    {
      image: p("departure"),
      a11y: t("Лия машет на прощание.", "Lia waves goodbye."),
      lines: [
        { ru: "Tchau, Lia!", en: t("Пока, Лия!", "Bye, Lia!") },
        { ru: "Próxima parada: Fortaleza!", en: t("Следующая остановка: Форталеза!", "Next stop: Fortaleza!") },
      ],
    },
    {
      image: p("bus"),
      a11y: t("Автобус едет вдоль побережья мимо пальм и дюн.", "A bus drives along the coast past palm trees and dunes."),
      lines: [{ ru: "Olinda → Fortaleza", en: t("Олинда → Форталеза", "Olinda → Fortaleza") }],
    },
    {
      image: pic("pt/fortaleza/arrival"),
      a11y: t(
        "Длинный городской пляж под палящим солнцем, белые паруса рыбацких лодок, высокие дома вдоль набережной.",
        "A long city beach under a blazing sun, the white sails of fishing boats and tall buildings along the seafront.",
      ),
      lines: [
        { ru: "Olá, Fortaleza!", en: t("Привет, Форталеза!", "Hello, Fortaleza!") },
        { ru: "Que sol!", en: t("Вот это солнце!", "What sunshine!") },
      ],
    },
  ],
};

export const ptOlinda = {
  id: "pt-olinda",
  name: t("Олинда", "Olinda"),
  namePt: "Olinda",
  lessons: [ol1, ol2, ol3, ol4, ol5, ol6, ol7],
  story,
};
