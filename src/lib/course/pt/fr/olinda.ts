import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { PAIRS, YOU, build, choice, fill, g, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Олинда (и Ресифи) · «Музыка и свободное время» · Город художников и карнавала, танцовщица Лия. Свободное время, фреву, приглашения, будущее с ir, мосты Ресифи, мастерская художника. Пипока выучил «Vamos dançar!». */

const p = (name: string) => pic(`pt/olinda/${name}`);
const LIA = "Lia";

const ol1: Lesson = {
  id: "pt-a1-olinda-1",
  level: "A1",
  cityId: "pt-olinda",
  number: 1,
  title: "Tempo livre — Le temps libre",
  minutes: 7,
  goals: [
    "Dire ce que tu fais pendant ton temps libre",
    "Conjuguer : leio, vejo, saio",
    "Demander si quelqu'un a du temps",
  ],
  vocabNote:
    "Tempo veut dire « temps » et aussi « temps qu'il fait » (tu te souviens de Como está o tempo ?). Tempo livre — « le temps libre ».",
  vocab: [
    v("ptol1-1", "No meu tempo livre eu leio.", "Pendant mon temps libre, je lis.",
      "Murzik lit un livre dans un hamac.",
      p("l1-1")),
    v("ptol1-2", "Eu vejo filmes.", "Je regarde des films.",
      "Murzik avec du pop-corn devant la télé.",
      p("l1-2")),
    v("ptol1-3", "Eu saio com os amigos.", "Je sors avec des amis.",
      "Une bande d'amis rit dans la rue le soir.",
      p("l1-3")),
    v("ptol1-4", "Eu fico em casa.", "Je reste à la maison.",
      "Murzik en pyjama sous un plaid avec une tasse.",
      p("l1-4")),
    v("ptol1-5", "Eu faço esporte.", "Je fais du sport.",
      "Murzik court en baskets avec un bandeau sur le front.",
      p("l1-5")),
    v("ptol1-6", "Você tem tempo livre?", "Tu as du temps libre ?",
      "Une jeune femme aux nattes et à la jupe fleurie regarde Murzik avec intérêt.",
      p("l1-6")),
    v("ptol1-7", "Eu danço frevo!", "Je danse le frevo !",
      "La jeune femme saute en l'air avec un petit parapluie coloré.",
      p("l1-7")),
  ],
  dialogue: {
    title: "Rencontre avec Lia",
    note:
      "Frevo — une danse rapide du Pernambouc, qui se danse avec un petit parapluie coloré.",
    lines: [
      line("lia", "Oi! Eu sou a Lia. Vocês estão de férias?", "Salut ! Moi c'est Lia. Vous êtes en vacances ?"),
      line("bia", "Mais ou menos! E você? O que você faz?", "On peut dire ça ! Et toi ? Tu fais quoi dans la vie ?"),
      line("lia", "Eu sou estudante. Mas no meu tempo livre eu danço frevo!", "Je suis étudiante. Mais pendant mon temps libre, je danse le frevo !"),
      line("murzik", "Que legal! No meu tempo livre eu leio e vejo filmes.", "Cool ! Moi, pendant mon temps libre, je lis et je regarde des films."),
      line("lia", "Só isso? Você não sai com os amigos?", "C'est tout ? Tu ne sors pas avec des amis ?"),
      line("murzik", "Saio! Agora eu viajo com a Bia.", "Si ! En ce moment, je voyage avec Bia."),
      line("lia", "Vocês têm tempo livre hoje? Eu ensino frevo!", "Vous avez du temps libre aujourd'hui ? Je vous apprends le frevo !"),
    ],
    gist: choice("ptol1-d1", "Que fait Lia pendant son temps libre ?", [
      ["Elle danse le frevo.", true],
      ["Elle lit des livres.", false],
      ["Elle reste à la maison.", false],
    ]),
  },
  grammar: [
    g(
      "Les formes irrégulières de « je » : leio, vejo, saio, faço",
      [
        "Certains verbes très fréquents ont une forme de « je » spéciale : ler — eu leio, ver — eu vejo, sair — eu saio, fazer — eu faço. Les autres formes sont presque régulières : ele lê, ele vê, ele sai, ele faz. Bonne nouvelle : en français aussi, ce sont des verbes irréguliers — « je lis, je vois, je sors, je fais » !",
        "Fazer — « faire » : Eu faço esporte — « je fais du sport », O que você faz ? — « tu fais quoi ? ».",
      ],
      [
        ["Ele lê muito.", "Il lit beaucoup."],
        ["Eu faço o jantar.", "Je fais le dîner."],
      ],
    ),
  ],
  tasks: [
    choice("ptol1-t1", "Comment dit-on « Je regarde des films » ?", [
      ["Eu vejo filmes.", true],
      ["Eu vê filmes.", false],
      ["Eu vero filmes.", false],
    ], { skill: "grammar" }),
    listen("ptol1-t2", "Écoute. Que fait la personne pendant son temps libre ?", "No meu tempo livre eu fico em casa.", [
      ["Elle reste à la maison.", true],
      ["Elle sort avec des amis.", false],
      ["Elle fait du sport.", false],
    ]),
    match("ptol1-t3", PAIRS, [
      ["ler", "lire"],
      ["ver", "regarder, voir"],
      ["sair", "sortir"],
      ["fazer", "faire"],
    ], { skill: "words" }),
    spell("ptol1-t4", "Reconstitue le mot « libre ».", "livre"),
    speak("ptol1-t5", "O que você faz no seu tempo livre?", "No meu tempo livre eu leio e saio com os amigos.", "Pendant mon temps libre, je lis et je sors avec des amis.", {
      help: "Raconte à voix haute ce que tu fais pendant ton temps libre.",
    }),
    choice("ptol1-t6", "Comment dit-on « Quel dommage que vous partiez ! » ?", [
      ["Que pena que vocês vão embora!", true],
      ["Que pena que vocês ficam!", false],
      ["Tá uma delícia!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "painting",
    itemName: "Tableau d'Olinda",
    itemNameRu: "Quadro de Olinda",
    ru: "Oba! Um quadro!",
    en: "Hourra ! Un tableau !",
    a11y: "Un petit tableau lumineux est accroché au mur : les maisons colorées d'Olinda et la mer.",
    image: p("painting"),
    steps: [
      "La patronne de l'auberge est artiste-peintre.",
      "Elle offre un petit tableau à Murzik.",
      "« Olinda é a cidade dos artistas ! » — « Olinda est la ville des artistes ! »",
      "Le tableau est accroché au-dessus du lit.",
    ],
    bridge: "L'après-midi, Lia arrive avec de petits parapluies colorés.",
  },
};

const ol2: Lesson = {
  id: "pt-a1-olinda-2",
  level: "A1",
  cityId: "pt-olinda",
  number: 2,
  title: "O frevo — Le frevo",
  minutes: 7,
  goals: [
    "Comprendre les indications de danse",
    "Dire « difficile » et « facile »",
    "Féliciter : Você dança muito bem !",
  ],
  vocabNote:
    "Sombrinha — le petit parapluie du frevo. Sans lui, on ne danse pas ce frevo !",
  vocab: [
    v("ptol2-1", "Esta é a sombrinha.", "Voici le parapluie de frevo.",
      "Un petit parapluie rayé arc-en-ciel.",
      p("l2-1")),
    v("ptol2-2", "Pula!", "Saute !",
      "Lia saute très haut avec son parapluie.",
      p("l2-2")),
    v("ptol2-3", "Mexe as pernas!", "Bouge les jambes !",
      "Murzik remue les pattes très vite.",
      p("l2-3")),
    v("ptol2-4", "É difícil!", "C'est difficile !",
      "Murzik s'emmêle dans ses propres pattes.",
      p("l2-4")),
    v("ptol2-5", "Não, é fácil!", "Non, c'est facile !",
      "Lia pirouette sans effort sur une jambe.",
      p("l2-5")),
    v("ptol2-6", "Mais rápido!", "Plus vite !",
      "Les musiciens jouent de plus en plus vite, Murzik essaie de suivre.",
      p("l2-6")),
    v("ptol2-7", "Você dança muito bem!", "Tu danses très bien !",
      "Lia applaudit Murzik.",
      p("l2-7")),
  ],
  dialogue: {
    title: "Leçon de frevo",
    note:
      "Pega — « prends ». Pronto ! — « Et voilà ! »",
    lines: [
      line("lia", "Esta é a sombrinha. Pega! Agora pula!", "Voici le parapluie de frevo. Prends ! Maintenant, saute !"),
      line("murzik", "Pula? Assim?", "Sauter ? Comme ça ?"),
      line("lia", "Isso! E mexe as pernas! Mais rápido!", "C'est ça ! Et bouge les jambes ! Plus vite !"),
      line("murzik", "Ai! É difícil!", "Aïe ! C'est difficile !"),
      line("lia", "Não, é fácil! Olha: um, dois, pula!", "Non, c'est facile ! Regarde : un, deux, saute !"),
      line("murzik", "Um, dois… pula! Pronto!", "Un, deux… saute ! Et voilà !"),
      line("lia", "Muito bem! Você dança muito bem, Murzik!", "Bravo ! Tu danses très bien, Murzik !"),
    ],
    gist: choice("ptol2-d1", "Qu'apprend Lia à Murzik ?", [
      ["À danser le frevo.", true],
      ["À jouer du tambour.", false],
      ["À chanter.", false],
    ]),
  },
  grammar: [
    g(
      "Bom ou bem ?",
      [
        "Bom — « bon » (devant un nom) : um bom dançarino. Bem — « bien » (devant une action) : Você dança bem. Exactement comme en français : « un bon danseur » / « tu danses bien » !",
        "Difícil — « difficile », fácil — « facile ». L'accent tombe sur l'avant-dernière syllabe (fá-cil, di-fí-cil) et le mot finit par -l — d'où l'accent écrit. Même orthographe qu'en français, prononciation différente : fassil, difissil.",
      ],
      [
        ["Ele canta bem.", "Il chante bien."],
        ["O frevo é difícil, mas é bom!", "Le frevo est difficile, mais il est bon !"],
      ],
    ),
  ],
  tasks: [
    choice("ptol2-t1", "Comment dit-on « Tu danses bien » ?", [
      ["Você dança bem.", true],
      ["Você dança bom.", false],
      ["Você é dança bem.", false],
    ], { skill: "grammar" }),
    listen("ptol2-t2", "Écoute. Que dit Lia ?", "Mais rápido!", [
      ["Plus vite !", true],
      ["Plus lentement !", false],
      ["Saute !", false],
    ]),
    match("ptol2-t3", PAIRS, [
      ["fácil", "facile"],
      ["difícil", "difficile"],
      ["Pula!", "Saute !"],
      ["a sombrinha", "le petit parapluie"],
    ], { skill: "words" }),
    missing("ptol2-t4", "Quelle lettre manque ? (« facile »)", "f", "cil", "á", ["á", "a", "à"]),
    speak("ptol2-t5", "Você dança muito bem!", "Obrigado! Mas é difícil!", "Merci ! Mais c'est difficile !", {
      help: "Réponds au compliment à voix haute. Obrigado ou obrigada, les deux marchent.",
    }),
    choice("ptol2-t6", "Comment dit-on « Je reste à la maison » ?", [
      ["Eu fico em casa.", true],
      ["Eu saio de casa.", false],
      ["Eu faço casa.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sombrinha",
    itemName: "Parapluie de frevo",
    itemNameRu: "Sombrinha de frevo",
    ru: "Oba! Uma sombrinha!",
    en: "Hourra ! Un parapluie de frevo !",
    a11y: "Un petit parapluie ouvert, rayé arc-en-ciel, se tient dans le coin.",
    image: p("sombrinha"),
    steps: [
      "Après la leçon, Lia prête le parapluie à Murzik pour s'entraîner.",
      "« Agora você é passista ! » — « Maintenant, tu es danseur de frevo ! »",
      "Murzik virevolte avec dans la chambre.",
      "Le parapluie se tient ouvert dans le coin.",
    ],
    bridge: "Le soir, Lia demande : « Vocês querem ir a um show hoje ? »",
  },
};

const ol3: Lesson = {
  id: "pt-a1-olinda-3",
  level: "A1",
  cityId: "pt-olinda",
  number: 3,
  title: "Um convite — Une invitation",
  minutes: 7,
  goals: [
    "Inviter quelqu'un quelque part",
    "Accepter et décliner une invitation",
    "Demander à quelle heure ça commence",
  ],
  vocabNote:
    "Topa ? — « T'es partant ? », très familier. La réponse : Topo ! — « Partant ! »",
  vocab: [
    v("ptol3-1", "Você quer ir ao show?", "Tu veux aller au concert ?",
      "Lia montre une affiche de concert sur le mur.",
      p("l3-1")),
    v("ptol3-2", "Topa?", "T'es partant ?",
      "Lia fait un clin d'œil en tendant deux billets.",
      p("l3-2")),
    v("ptol3-3", "Topo!", "Partant !",
      "Murzik attrape un billet avec joie.",
      p("l3-3")),
    v("ptol3-4", "Hoje não posso.", "Aujourd'hui, je ne peux pas.",
      "Bia montre son ordinateur portable avec un sourire d'excuse.",
      p("l3-4")),
    v("ptol3-5", "Fica para a próxima.", "Ce sera pour une prochaine fois.",
      "Lia hoche la tête, compréhensive.",
      p("l3-5")),
    v("ptol3-6", "A que horas começa?", "Ça commence à quelle heure ?",
      "Murzik regarde sa pendule-avion.",
      p("l3-6")),
    v("ptol3-7", "Começa às nove.", "Ça commence à neuf heures.",
      "Sur l'affiche, une horloge dessinée sur neuf heures.",
      p("l3-7")),
  ],
  dialogue: {
    title: "Des billets pour un concert",
    note:
      "Matéria — « article ». Blog — « blog ». Encontro você — « je te retrouve ».",
    lines: [
      line("lia", "Vocês querem ir ao show hoje? É de frevo! Topam?", "Vous voulez aller au concert ce soir ? C'est du frevo ! Partants ?"),
      line("murzik", "Topo!", "Partant !"),
      line("bia", "Hoje não posso… Eu tenho que escrever uma matéria para o blog.", "Ce soir, je ne peux pas… Je dois écrire un article pour le blog."),
      line("lia", "Que pena! Fica para a próxima.", "Quel dommage ! Ce sera pour une prochaine fois."),
      line("murzik", "A que horas começa?", "Ça commence à quelle heure ?"),
      line("lia", "Começa às nove. Eu encontro você na praça às oito e meia.", "À neuf heures. Je te retrouve sur la place à huit heures et demie."),
    ],
    gist: choice("ptol3-d1", "Pourquoi Bia ne va-t-elle pas au concert ?", [
      ["Elle doit écrire un article.", true],
      ["Elle n'aime pas le frevo.", false],
      ["Elle est malade.", false],
    ]),
  },
  grammar: [
    g(
      "Ter que — « devoir, il faut »",
      [
        "« Je dois » — eu tenho que + verbe : Eu tenho que escrever — « je dois écrire ». C'est exactement la construction française « j'ai à écrire » — ter = « avoir », que = « à/que ». Pratique pour décliner poliment une invitation.",
        "« Je ne peux pas » — não posso (de poder). Fica para a próxima — « ce sera pour la prochaine fois ».",
      ],
      [
        ["Eu tenho que trabalhar.", "Je dois travailler."],
        ["Hoje não posso, eu tenho que estudar.", "Aujourd'hui, je ne peux pas, je dois étudier."],
      ],
    ),
  ],
  tasks: [
    choice("ptol3-t1", "Comment dit-on « Je dois travailler » ?", [
      ["Eu tenho que trabalhar.", true],
      ["Eu tenho trabalhar.", false],
      ["Eu sou que trabalhar.", false],
    ], { skill: "grammar" }),
    listen("ptol3-t2", "Écoute. À quelle heure ça commence ?", "Começa às nove.", [
      ["À neuf heures.", true],
      ["À huit heures.", false],
      ["À dix heures.", false],
    ]),
    match("ptol3-t3", PAIRS, [
      ["Topa?", "T'es partant ?"],
      ["Topo!", "Partant !"],
      ["Não posso.", "Je ne peux pas."],
      ["o show", "le concert"],
    ], { skill: "words" }),
    spell("ptol3-t4", "Reconstitue le mot « invitation ».", "convite"),
    speak("ptol3-t5", "Você quer ir ao show hoje?", "Hoje não posso. Fica para a próxima!", "Aujourd'hui, je ne peux pas. Ce sera pour une prochaine fois !", {
      help: "Décline poliment, à voix haute. Pour accepter, dis Topo !",
    }),
    choice("ptol3-t6", "Comment dit-on « Tu danses très bien ! » ?", [
      ["Você dança muito bem!", true],
      ["Você dança muito bom!", false],
      ["Você é muito dança!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "ticket",
    itemName: "Billet de concert",
    itemNameRu: "Ingresso",
    ru: "Oba! Um ingresso!",
    en: "Hourra ! Un billet !",
    a11y: "Un billet de concert de frevo éclatant, avec un petit parapluie dessiné, est épinglé au miroir.",
    image: p("ticket"),
    steps: [
      "Le concert était bruyant et joyeux.",
      "Murzik a dansé jusqu'à minuit.",
      "Il a gardé le billet en souvenir.",
      "Le billet est épinglé au miroir.",
    ],
    bridge: "Le matin, Bia demande : « O que você vai fazer amanhã, Murzik ? »",
  },
};

const ol4: Lesson = {
  id: "pt-a1-olinda-4",
  level: "A1",
  cityId: "pt-olinda",
  number: 4,
  title: "Amanhã eu vou… — Demain, je vais…",
  minutes: 7,
  goals: [
    "Parler de tes projets",
    "Construire le futur : vou + verbe",
    "Demander la météo de demain",
  ],
  vocabNote:
    "Vamos ver — « on verra ». C'est ce que répondent les Brésiliens quand ils n'ont pas encore décidé.",
  vocab: [
    v("ptol4-1", "O que você vai fazer amanhã?", "Qu'est-ce que tu vas faire demain ?",
      "Bia avec son carnet au petit-déjeuner.",
      p("l4-1")),
    v("ptol4-2", "Amanhã eu vou visitar Recife.", "Demain, je vais visiter Recife.",
      "Murzik montre sur la carte une grande ville juste à côté d'Olinda.",
      p("l4-2")),
    v("ptol4-3", "Ela vai escrever.", "Elle va écrire.",
      "Bia tape sur son ordinateur portable.",
      p("l4-3")),
    v("ptol4-4", "Eu não vou trabalhar.", "Je ne vais pas travailler.",
      "Murzik ferme l'ordinateur et met son chapeau de paille.",
      p("l4-4")),
    v("ptol4-5", "Vai chover amanhã?", "Il va pleuvoir demain ?",
      "Murzik regarde un petit nuage par la fenêtre.",
      p("l4-5")),
    v("ptol4-6", "Não, vai fazer sol.", "Non, il va faire beau.",
      "Sur le téléphone, une météo avec un soleil.",
      p("l4-6")),
    v("ptol4-7", "Vamos ver.", "On verra.",
      "Lia hausse les épaules en souriant.",
      p("l4-7")),
  ],
  dialogue: {
    title: "Les projets de demain",
    note:
      "Pontes — « ponts ». Vamos ver — « on verra ».",
    lines: [
      line("bia", "Murzik, o que você vai fazer amanhã?", "Murzik, qu'est-ce que tu vas faire demain ?"),
      line("murzik", "Amanhã eu vou visitar Recife! A Lia vai mostrar as pontes.", "Demain, je vais visiter Recife ! Lia va montrer les ponts."),
      line("bia", "Eu vou escrever a matéria. Eu não vou sair.", "Moi, je vais écrire mon article. Je ne vais pas sortir."),
      line("murzik", "Vai chover amanhã?", "Il va pleuvoir demain ?"),
      line("lia", "Não, vai fazer sol! Mas Recife é Recife… vamos ver.", "Non, il va faire beau ! Mais Recife est Recife… on verra."),
    ],
    gist: choice("ptol4-d1", "Que va faire Bia demain ?", [
      ["Écrire son article.", true],
      ["Aller à Recife.", false],
      ["Danser le frevo.", false],
    ]),
  },
  grammar: [
    g(
      "Le futur : vou + verbe",
      [
        "La façon la plus simple de parler du futur : ir + verbe. Eu vou visitar, você vai escrever, nós vamos ver, eles vão sair. C'est exactement le futur proche français : « je vais visiter, elle va écrire » !",
        "La négation se place avant vou : Eu não vou trabalhar. La météo aussi : Vai chover — « il va pleuvoir », vai fazer sol — « il va faire beau ».",
      ],
      [
        ["Amanhã nós vamos à praia.", "Demain, nous allons à la plage."],
        ["Ele não vai trabalhar.", "Il ne va pas travailler."],
      ],
    ),
  ],
  tasks: [
    choice("ptol4-t1", "Comment dit-on « Demain, je vais lire » ?", [
      ["Amanhã eu vou ler.", true],
      ["Amanhã eu vou leio.", false],
      ["Amanhã eu ler vou.", false],
    ], { skill: "grammar" }),
    listen("ptol4-t2", "Écoute. Quel temps va-t-il faire ?", "Amanhã vai chover.", [
      ["Il va pleuvoir.", true],
      ["Il va faire beau.", false],
      ["Il va faire froid.", false],
    ]),
    fill("ptol4-t3", "Insère le mot : « Ils vont danser ».", "Eles", "dançar.", "vão", ["vão", "vai", "vamos"], { skill: "words" }),
    missing("ptol4-t4", "Quelle lettre manque ? (« demain »)", "ama", "hã", "n", ["n", "m", "nh"]),
    speak("ptol4-t5", "O que você vai fazer amanhã?", "Amanhã eu vou estudar português.", "Demain, je vais étudier le portugais.", {
      help: "Raconte à voix haute tes projets pour demain.",
    }),
    choice("ptol4-t6", "Comment demander « Ça commence à quelle heure ? »", [
      ["A que horas começa?", true],
      ["Que horas são?", false],
      ["Começa às nove.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "mask",
    itemName: "Masque de Carnaval",
    itemNameRu: "Máscara de carnaval",
    ru: "Oba! Uma máscara!",
    en: "Hourra ! Un masque !",
    a11y: "Un masque de Carnaval éclatant, à plumes et paillettes, est accroché au mur.",
    image: p("mask"),
    steps: [
      "Lia apporte un masque de Carnaval à Murzik.",
      "« Em Olinda é Carnaval o ano todo ! » — « À Olinda, c'est Carnaval toute l'année ! »",
      "Murzik l'essaie devant le miroir.",
      "Le masque est accroché au mur.",
    ],
    bridge: "Le matin, Murzik et Lia partent à Recife, la grande ville voisine.",
  },
};

const ol5: Lesson = {
  id: "pt-a1-olinda-5",
  level: "A1",
  cityId: "pt-olinda",
  number: 5,
  title: "Recife — Recife",
  minutes: 7,
  goals: [
    "Décrire une ville de rivières et de ponts",
    "Comparer : parece…",
    "Comprendre un panneau d'avertissement",
  ],
  vocabNote:
    "Recife est bâtie sur des îles entre des rivières, c'est pourquoi on l'appelle « la Venise brésilienne ». La plage de Boa Viagem est la principale plage de la ville.",
  vocab: [
    v("ptol5-1", "Recife tem muitas pontes.", "Recife a beaucoup de ponts.",
      "Une rivière franchie par plusieurs ponts, entourée de vieux bâtiments.",
      p("l5-1")),
    v("ptol5-2", "a ponte", "le pont",
      "Murzik se tient sur un vieux pont de fer.",
      p("l5-2")),
    v("ptol5-3", "Parece Veneza!", "On dirait Venise !",
      "Des barques sur la rivière entre de vieilles maisons.",
      p("l5-3")),
    v("ptol5-4", "Tem tubarão!", "Il y a des requins !",
      "Un panneau sur la plage : la silhouette d'un requin dans un triangle.",
      p("l5-4")),
    v("ptol5-5", "É perigoso nadar aqui.", "C'est dangereux de nager ici.",
      "Un sauveteur sur sa tour montre le panneau.",
      p("l5-5")),
    v("ptol5-6", "Vamos tomar um sorvete?", "On prend une glace ?",
      "Lia montre un chariot de glaces.",
      p("l5-6")),
    v("ptol5-7", "Eu quero de coco.", "Moi, coco.",
      "Murzik tient un cornet de glace blanche.",
      p("l5-7")),
  ],
  dialogue: {
    title: "Promenade à Recife",
    note:
      "Só na areia — « seulement sur le sable ». Sabores — « parfums ».",
    lines: [
      line("lia", "Olha, Murzik: Recife tem muitas pontes!", "Regarde, Murzik : Recife a beaucoup de ponts !"),
      line("murzik", "Os rios, os barcos, as pontes… Parece Veneza!", "Les rivières, les barques, les ponts… On dirait Venise !"),
      line("lia", "Isso! E agora a praia de Boa Viagem.", "Exactement ! Et maintenant, la plage de Boa Viagem."),
      line("murzik", "Vamos nadar? Hmm… Lia, o que é isso? Tem tubarão?", "On se baigne ? Hmm… Lia, c'est quoi, ça ? Il y a des requins ?"),
      line("lia", "Tem. É perigoso nadar aqui. Só na areia!", "Oui. C'est dangereux de nager ici. Seulement sur le sable !"),
      line("lia", "Vamos tomar um sorvete? Tem muitos sabores.", "On prend une glace ? Il y a plein de parfums."),
      line("murzik", "Eu quero de coco!", "Moi, coco !"),
    ],
    gist: choice("ptol5-d1", "Pourquoi ne se baignent-ils pas ?", [
      ["Il peut y avoir des requins dans la mer.", true],
      ["L'eau est froide.", false],
      ["Il s'est mis à pleuvoir.", false],
    ]),
  },
  grammar: [
    g(
      "Parece… — « on dirait… »",
      [
        "Parece + nom — « on dirait » : Parece Veneza — « on dirait Venise ». Parece + adjectif — « ça a l'air » : Parece fácil — « ça a l'air facile ». Attention, faux ami partiel : parecer n'est pas « paraître » au sens de « publier » — c'est « sembler, avoir l'air ».",
        "É perigoso + verbe — « il est dangereux de… » : É perigoso nadar aqui. Même construction avec é proibido (« c'est interdit »), é bom (« c'est bon »), é difícil (« c'est difficile »).",
      ],
      [
        ["Parece um sonho!", "On dirait un rêve !"],
        ["É difícil dançar frevo.", "C'est difficile de danser le frevo."],
      ],
    ),
  ],
  tasks: [
    choice("ptol5-t1", "Comment dit-on « C'est dangereux de nager ici » ?", [
      ["É perigoso nadar aqui.", true],
      ["É perigoso de nadar aqui.", false],
      ["Está perigoso nada aqui.", false],
    ], { skill: "grammar" }),
    listen("ptol5-t2", "Écoute. Quelle glace veut Murzik ?", "Eu quero de coco.", [
      ["Coco.", true],
      ["Chocolat.", false],
      ["Mangue.", false],
    ]),
    match("ptol5-t3", PAIRS, [
      ["a ponte", "le pont"],
      ["o tubarão", "le requin"],
      ["o sorvete", "la glace"],
      ["Parece…", "On dirait…"],
    ], { skill: "words" }),
    spell("ptol5-t4", "Reconstitue le mot « pont ».", "ponte"),
    speak("ptol5-t5", "Vamos tomar um sorvete?", "Vamos! Eu quero de manga.", "Allons-y ! Moi, mangue.", {
      help: "Accepte à voix haute et choisis un parfum.",
    }),
    choice("ptol5-t6", "Comment dit-on « Demain, il va faire beau » ?", [
      ["Amanhã vai fazer sol.", true],
      ["Amanhã faz sol ontem.", false],
      ["Amanhã vou sol.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cake",
    itemName: "Gâteau roulé « bolo de rolo »",
    itemNameRu: "Bolo de rolo",
    ru: "Oba! Um bolo de rolo!",
    en: "Hourra ! Un bolo de rolo !",
    a11y: "Sur une assiette, un fin gâteau roulé aux nombreuses couches, fourré à la goyave.",
    image: p("cake"),
    steps: [
      "À Recife, Lia achète le fameux gâteau roulé du Pernambouc.",
      "Il a plus de vingt couches fines !",
      "« É Patrimônio de Pernambuco ! » — « C'est un trésor du Pernambouc ! »",
      "Le roulé attend dans l'assiette. Pas pour longtemps.",
    ],
    bridge: "Le soir, de retour à Olinda, Lia emmène Murzik dans l'atelier d'un peintre de ses amis.",
  },
};

const ol6: Lesson = {
  id: "pt-a1-olinda-6",
  level: "A1",
  cityId: "pt-olinda",
  number: 6,
  title: "No ateliê — Dans l'atelier",
  minutes: 7,
  goals: [
    "Parler de tableaux",
    "Demander qui a fait quelque chose",
    "Dire « fait à la main »",
  ],
  vocabNote:
    "Ateliê — « l'atelier d'artiste ». Pintar — « peindre ». Eu pintei — « j'ai peint ».",
  vocab: [
    v("ptol6-1", "Você pinta?", "Tu peins ?",
      "Murzik jette un œil dans un atelier plein de tableaux.",
      p("l6-1")),
    v("ptol6-2", "Que quadro bonito!", "Quel beau tableau !",
      "Un grand tableau de maisons colorées et de marionnettes de Carnaval.",
      p("l6-2")),
    v("ptol6-3", "Quem pintou?", "Qui l'a peint ?",
      "Murzik montre le tableau.",
      p("l6-3")),
    v("ptol6-4", "Eu pintei.", "C'est moi qui l'ai peint.",
      "Un vieux peintre, un pinceau derrière l'oreille, sourit modestement.",
      p("l6-4")),
    v("ptol6-5", "As cores são vivas.", "Les couleurs sont vives.",
      "Des pots de peinture vive sur une table.",
      p("l6-5")),
    v("ptol6-6", "É feito à mão.", "C'est fait à la main.",
      "Le peintre décore une petite figurine en bois.",
      p("l6-6")),
    v("ptol6-7", "Posso tentar?", "Je peux essayer ?",
      "Murzik tient un pinceau, une tache de peinture sur le nez.",
      p("l6-7")),
  ],
  dialogue: {
    title: "L'atelier du peintre",
    note:
      "Bonecos gigantes — « marionnettes géantes », le symbole du Carnaval d'Olinda. Artista — « artiste ».",
    lines: [
      line("murzik", "Nossa! Que quadro bonito! Quem pintou?", "Waouh ! Quel beau tableau ! Qui l'a peint ?"),
      line("pintor", "Eu pintei. São os bonecos gigantes do Carnaval.", "C'est moi. Ce sont les marionnettes géantes du Carnaval."),
      line("murzik", "As cores são tão vivas! Você pinta todo dia?", "Les couleurs sont tellement vives ! Vous peignez tous les jours ?"),
      line("pintor", "Todo dia! E isto é feito à mão: um boneco de madeira.", "Tous les jours ! Et ça, c'est fait à la main : une marionnette en bois."),
      line("murzik", "Posso tentar?", "Je peux essayer ?"),
      line("pintor", "Claro! Pega o pincel. Você é um artista!", "Bien sûr ! Prends le pinceau. Tu es un artiste !"),
    ],
    gist: choice("ptol6-d1", "Que voit-on sur le tableau ?", [
      ["Les marionnettes géantes du Carnaval.", true],
      ["La mer et des barques.", false],
      ["Pipoca.", false],
    ]),
  },
  grammar: [
    g(
      "Qui l'a peint ? — Quem pintou ? Eu pintei.",
      [
        "Le passé des verbes en -ar : eu pintei — « j'ai peint », ele / ela / você pintou — « il, elle a peint ». La question « Qui a fait ? » — Quem + forme de « il » : Quem pintou ? C'est le passé composé portugais : une seule forme, comme « j'ai peint / il a peint ».",
        "Feito à mão — « fait à la main ». Feito vient de fazer — exactement comme le français « fait » vient de « faire » !",
      ],
      [
        ["Quem fez o bolo? — Eu fiz.", "Qui a fait le gâteau ? — C'est moi."],
        ["Ela pintou a casa.", "Elle a peint la maison."],
      ],
    ),
  ],
  tasks: [
    choice("ptol6-t1", "Comment répondre « C'est moi qui l'ai peint » ?", [
      ["Eu pintei.", true],
      ["Eu pintou.", false],
      ["Eu pinto ontem.", false],
    ], { skill: "grammar" }),
    listen("ptol6-t2", "Écoute. Comment c'est fait ?", "É feito à mão.", [
      ["À la main.", true],
      ["En usine.", false],
      ["En verre.", false],
    ]),
    match("ptol6-t3", PAIRS, [
      ["o quadro", "le tableau"],
      ["pintar", "peindre"],
      ["o pincel", "le pinceau"],
      ["vivas", "vives"],
    ], { skill: "words" }),
    missing("ptol6-t4", "Quelle lettre manque ? (« pinceau »)", "pin", "el", "c", ["c", "s", "ç"]),
    speak("ptol6-t5", "Você gosta de pintar?", "Gosto! Posso tentar?", "Oui ! Je peux essayer ?", {
      help: "Réponds à voix haute et demande à essayer.",
    }),
    choice("ptol6-t6", "Comment dit-on « On dirait Venise ! » ?", [
      ["Parece Veneza!", true],
      ["É perigoso Veneza!", false],
      ["Tem Veneza!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "puppet",
    itemName: "Petite marionnette de Carnaval",
    itemNameRu: "Boneco de Olinda",
    ru: "Oba! Um boneco de Olinda!",
    en: "Hourra ! Une marionnette d'Olinda !",
    a11y: "Une petite marionnette en bois peinte, à grande tête — comme les géantes du Carnaval — est posée sur l'étagère.",
    image: p("puppet"),
    steps: [
      "Murzik peint lui-même une marionnette en bois.",
      "Le peintre rit : elle ressemble à Murzik !",
      "« É um boneco do Murzik ! » — « C'est une marionnette-Murzik ! »",
      "La marionnette trône sur l'étagère.",
    ],
    bridge: "Le matin, Lia arrive en courant, essoufflée : « Murzik ! O papagaio ! Eu lembrei ! »",
  },
};

const ol7: Lesson = {
  id: "pt-a1-olinda-7",
  level: "A1",
  cityId: "pt-olinda",
  number: 7,
  title: "Vamos dançar! — Allons danser !",
  minutes: 8,
  goals: [
    "Comprendre ce qu'on raconte sur Pipoca",
    "Dire « c'était génial »",
    "Réviser tous les mots d'Olinda",
  ],
  vocabNote:
    "Ele dançou — « il a dansé », todo mundo — « tout le monde ». Foi muito bom — « c'était vraiment génial ».",
  vocab: [
    v("ptol7-1", "Vamos dançar!", "Allons danser !",
      "Le perroquet vert est perché sur un petit parapluie de frevo et bat des ailes.",
      p("l7-1")),
    v("ptol7-2", "Ele dançou com a gente.", "Il a dansé avec nous.",
      "Le perroquet gigote dans un cercle de danseurs de frevo.",
      p("l7-2")),
    v("ptol7-3", "Todo mundo dançou!", "Tout le monde a dansé !",
      "Toute la rue danse avec des parapluies.",
      p("l7-3")),
    v("ptol7-4", "Eles foram para Fortaleza.", "Ils sont partis pour Fortaleza.",
      "Une carte : une flèche vers le nord, le long de la côte.",
      p("l7-4")),
    v("ptol7-5", "o Ceará", "le Ceará (l'État)",
      "Une petite image : dunes, palmiers et voiliers.",
      p("l7-5")),
    v("ptol7-6", "Leva a sombrinha!", "Prends le parapluie !",
      "Lia tend le parapluie de frevo à Murzik.",
      p("l7-6")),
    v("ptol7-7", "Foi muito bom!", "C'était vraiment génial !",
      "Murzik et Lia se serrent dans les bras pour se dire au revoir.",
      p("l7-7")),
  ],
  dialogue: {
    title: "Ce que le perroquet a dit",
    note:
      "Lembrei — « je me suis souvenue ». Bloco — « groupe de Carnaval de rue ». Animado — « joyeux, déchaîné ».",
    lines: [
      line("lia", "Murzik! O papagaio! Eu lembrei! Ele estava no bloco, na rua, no sábado.", "Murzik ! Le perroquet ! Je me souviens ! Il était avec le groupe de Carnaval, dans la rue, samedi."),
      line("murzik", "O Pipoca! O que ele fez?", "Pipoca ! Qu'est-ce qu'il a fait ?"),
      line("lia", "Ele dançou com a gente! E gritou: Vamos dançar! Vamos dançar!", "Il a dansé avec nous ! Et il criait : « Allons danser ! Allons danser ! »"),
      line("bia", "Que animado! E a banda?", "Quel déchaîné ! Et le groupe ?"),
      line("lia", "Eles foram para Fortaleza, no Ceará.", "Ils sont partis pour Fortaleza, au Ceará."),
      line("lia", "Leva a sombrinha, Murzik! Para dançar lá também!", "Prends le parapluie, Murzik ! Pour danser là-bas aussi !"),
      line("murzik", "Obrigado, Lia! Foi muito bom!", "Merci, Lia ! C'était vraiment génial !"),
    ],
    gist: choice("ptol7-d1", "Quelle phrase Pipoca a-t-il apprise à Olinda ?", [
      ["« Allons danser ! »", true],
      ["« Saute ! »", false],
      ["« Partant ! »", false],
    ]),
  },
  grammar: [
    g(
      "Foi — « c'était »",
      [
        "Foi — le passé de ser : Foi muito bom — « c'était vraiment génial », Foi incrível — « c'était incroyable » (tu te souviens d'Iguaçu ?). Pratique pour remercier.",
        "Chose curieuse : foi est aussi le passé de ir : Ele foi para Fortaleza — « il est allé à Fortaleza ». Ser et ir ont les mêmes formes au passé ! En français, « fut » ne vient que d'« être » — en portugais, il vient des deux verbes.",
      ],
      [
        ["Foi muito divertido!", "C'était très amusant !"],
        ["A banda foi para o Ceará.", "Le groupe est parti au Ceará."],
      ],
    ),
  ],
  tasks: [
    listen("ptol7-t1", "Examen audio. Que raconte Lia ?", "O papagaio dançou com a gente e gritou: Vamos dançar! A banda foi para Fortaleza.", [
      ["Le perroquet a dansé avec eux, et le groupe est parti pour Fortaleza.", true],
      ["Le perroquet est resté à Olinda.", false],
      ["Le groupe est allé à Recife.", false],
    ]),
    choice("ptol7-t2", "Comment dit-on « C'était vraiment génial ! » ?", [
      ["Foi muito bom!", true],
      ["É muito bem!", false],
      ["Vai muito bom!", false],
    ], { skill: "words" }),
    build("ptol7-t3", "Construis la phrase : « Ils sont partis pour Fortaleza ».", ["Eles", "foram", "para", "Fortaleza."]),
    missing("ptol7-t4", "Quelle lettre manque ? (« danser »)", "dan", "ar", "ç", ["ç", "s", "c"]),
    speak("ptol7-t5", "Gostou de Olinda?", "Foi muito bom! Obrigado por tudo!", "C'était vraiment génial ! Merci pour tout !", {
      help: "Remercie à voix haute. Obrigado ou obrigada, les deux marchent.",
    }),
    script("ptol7-t6", "Souviens-toi de toute Olinda. Termine la conversation avec Lia.", [
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
    itemName: "Photo de Pipoca sur le parapluie",
    itemNameRu: "Foto do Pipoca no frevo",
    ru: "Oba! Mais uma foto do Pipoca!",
    en: "Hourra ! Encore une photo de Pipoca !",
    a11y:
      "Une photo : le perroquet vert perché sur un parapluie de frevo arc-en-ciel, entouré de danseurs en costumes éclatants.",
    image: p("photo"),
    steps: [
      "Lia a une photo de ce jour-là.",
      "Pipoca sur un parapluie, en plein milieu de la danse !",
      "« O papagaio mais animado de Olinda ! » — « Le perroquet le plus déchaîné d'Olinda ! »",
      "Légende : « Vamos dançar ! » La photo rejoint l'album.",
    ],
    bridge: "Le bus roule vers le nord le long de la mer. Il fait de plus en plus chaud.",
  },
};

const story: CityStory = {
  home: {
    name: "Une chambre dans la maison de l'artiste",
    nameRu: "O quarto na casa da artista",
    image: p("home"),
    a11y:
      "Une chambre dans une petite maison jaune sur la colline : une fenêtre aux volets verts, au loin la mer et les tours de Recife. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "photo-olinda",
  welcomeRu: "Olá, Olinda!",
  welcomeEn: "Bonjour, Olinda !",
  welcomeImage: p("arrival"),
  welcomeA11y:
    "Une vieille ville sur une colline au-dessus de la mer : petites maisons colorées, églises, et d'énormes marionnettes de Carnaval dans la rue.",
  departureImage: p("departure"),
  departureA11y: "Lia fait signe avec son parapluie de frevo à l'arrêt de bus.",
  finale: [
    {
      image: p("photo"),
      a11y: "Murzik colle dans l'album la photo de Pipoca sur le parapluie.",
      lines: [
        { en: "Onzième page de l'album : Pipoca danse le frevo." },
        { ru: "Vamos dançar!", en: "Allons danser !" },
        { en: "Il ne reste que trois villes. Murzik le sent : ils approchent." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie.",
      lines: [
        { ru: "Olinda completa!", en: "Olinda terminée !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Lia fait signe au revoir.",
      lines: [
        { ru: "Tchau, Lia!", en: "Au revoir, Lia !" },
        { ru: "Próxima parada: Fortaleza!", en: "Prochain arrêt : Fortaleza !" },
      ],
    },
    {
      image: p("bus"),
      a11y: "Un bus longe la côte, entre palmiers et dunes.",
      lines: [{ ru: "Olinda → Fortaleza", en: "Olinda → Fortaleza" }],
    },
    {
      image: pic("pt/fortaleza/arrival"),
      a11y:
        "Une longue plage urbaine sous un soleil de plomb, les voiles blanches des bateaux de pêche et de grands immeubles le long du front de mer.",
      lines: [
        { ru: "Olá, Fortaleza!", en: "Bonjour, Fortaleza !" },
        { ru: "Que sol!", en: "Quel soleil !" },
      ],
    },
  ],
};

export const ptOlindaFr = {
  id: "pt-olinda",
  name: "Olinda",
  namePt: "Olinda",
  lessons: [ol1, ol2, ol3, ol4, ol5, ol6, ol7],
  story,
};
