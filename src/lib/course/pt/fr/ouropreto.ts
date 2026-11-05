import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { PAIRS, YOU, build, choice, fill, g, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Ору-Прету · «Дорога» · Старинный город на холмах, гид дона Марта. Как пройти, глагол ir, крутые улочки, числа до 1000, мясная кухня Минаса, лавка камней. Пипока выучил «Siga em frente!». */

const p = (name: string) => pic(`pt/ouropreto/${name}`);
const MARTA = "Dona Marta";

const op1: Lesson = {
  id: "pt-a1-ouropreto-1",
  level: "A1",
  cityId: "pt-ouropreto",
  number: 1,
  title: "Onde fica? — Où c'est ?",
  minutes: 7,
  goals: [
    "Demander son chemin",
    "Comprendre : à droite, à gauche, la première rue",
    "Remercier quelqu'un de son aide",
  ],
  vocabNote:
    "Vire — « tournez ». À direita — « à droite », à esquerda — « à gauche ».",
  vocab: [
    v("ptop1-1", "Onde fica a igreja?", "Où est l'église ?",
      "Murzik se tient avec une carte au croisement de vieilles ruelles.",
      p("l1-1")),
    v("ptop1-2", "Fica na praça.", "Elle est sur la place.",
      "Une vieille place avec une fontaine, et au-dessus une église à deux tours.",
      p("l1-2")),
    v("ptop1-3", "Vire à direita.", "Tournez à droite.",
      "Une flèche vers la droite sur un vieux mur de pierre.",
      p("l1-3")),
    v("ptop1-4", "Vire à esquerda.", "Tournez à gauche.",
      "Une flèche vers la gauche sur un vieux mur de pierre.",
      p("l1-4")),
    v("ptop1-5", "É a primeira rua.", "C'est la première rue.",
      "Une dame âgée montre le premier tournant.",
      p("l1-5")),
    v("ptop1-6", "Fica perto do museu.", "C'est près du musée.",
      "Une église, avec le bâtiment blanc du musée juste à côté.",
      p("l1-6")),
    v("ptop1-7", "Obrigado pela ajuda!", "Merci pour ton aide !",
      "Murzik s'incline avec gratitude devant la dame âgée.",
      p("l1-7")),
  ],
  dialogue: {
    title: "Dona Marta",
    note:
      "Guia — « guide ». Conheço — « je connais » (un lieu, une personne). Cada pedra — « chaque pierre ».",
    lines: [
      line("murzik", "Com licença, senhora. Onde fica a igreja de São Francisco?", "Pardon, madame. Où est l'église de São Francisco ?"),
      line("marta", "Fica na praça. Vire à esquerda e depois à direita.", "Sur la place. Tournez à gauche, puis à droite."),
      line("bia", "À esquerda e à direita… É longe?", "À gauche puis à droite… C'est loin ?"),
      line("marta", "Não. É a primeira rua. Fica perto do museu.", "Non. C'est la première rue. Près du musée."),
      line("murzik", "Obrigado pela ajuda!", "Merci pour ton aide !"),
      line("marta", "De nada! Eu sou a Marta, guia da cidade. Eu conheço cada pedra daqui!", "De rien ! Je suis Marta, guide de la ville. Je connais chaque pierre d'ici !"),
    ],
    gist: choice("ptop1-d1", "Où est l'église ?", [
      ["Sur la place, près du musée.", true],
      ["Loin, en dehors de la ville.", false],
      ["De l'autre côté de la rivière.", false],
    ]),
  },
  grammar: [
    g(
      "« Dans, sur, à » : no, na, nos, nas",
      [
        "« Dans » se dit em. Devant l'article, il fusionne : em + o = no, em + a = na : no museu — « au musée », na praça — « sur la place ». Au pluriel : nos, nas. C'est exactement comme le français « à+le = au », « à+la = à la ».",
        "Les villes ne prennent généralement pas d'article, donc simplement em : em Ouro Preto, em Paris. Mais no Rio — parce qu'on dit o Rio (« le Rio »).",
      ],
      [
        ["Ele está no museu.", "Il est au musée."],
        ["Nós moramos na praça.", "Nous habitons sur la place."],
      ],
    ),
  ],
  tasks: [
    choice("ptop1-t1", "Comment dit-on « sur la place » ? (a praça)", [
      ["na praça", true],
      ["no praça", false],
      ["em a praça", false],
    ], { skill: "grammar" }),
    listen("ptop1-t2", "Écoute. De quel côté faut-il tourner ?", "Vire à direita.", [
      ["À droite.", true],
      ["À gauche.", false],
      ["Tout droit.", false],
    ]),
    match("ptop1-t3", PAIRS, [
      ["à direita", "à droite"],
      ["à esquerda", "à gauche"],
      ["a igreja", "l'église"],
      ["a praça", "la place"],
    ], { skill: "words" }),
    missing("ptop1-t4", "Quelle lettre manque ? (« à gauche »)", "es", "uerda", "q", ["q", "c", "k"]),
    speak("ptop1-t5", "Posso ajudar?", "Sim! Onde fica a igreja?", "Oui ! Où est l'église ?", {
      help: "Demande à voix haute où est l'église.",
    }),
    choice("ptop1-t6", "Comment dit-on « Je suis en retard ! » ?", [
      ["Estou atrasado!", true],
      ["Já é tarde!", false],
      ["Corre!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "key",
    itemName: "Vieille clé",
    itemNameRu: "Chave antiga",
    ru: "Oba! Uma chave antiga!",
    en: "Hourra ! Une vieille clé !",
    a11y: "Une grande vieille clé en fer forgé pend à un clou près de la porte.",
    image: p("key"),
    steps: [
      "Dona Marta loue une chambre dans sa vieille maison.",
      "Elle donne à Murzik une énorme clé ancienne.",
      "« Essa casa tem duzentos anos ! » — « Cette maison a deux cents ans ! »",
      "La clé pend à un clou près de la porte.",
    ],
    bridge: "Le matin, Dona Marta demande : « Aonde vocês vão hoje ? »",
  },
};

const op2: Lesson = {
  id: "pt-a1-ouropreto-2",
  level: "A1",
  cityId: "pt-ouropreto",
  number: 2,
  title: "Eu vou, você vai — Je vais, tu vas",
  minutes: 7,
  goals: [
    "Dire où tu vas",
    "Conjuguer le verbe ir",
    "Demander « où ça ? »",
  ],
  vocabNote:
    "Aonde ? — « où » (vers quel endroit), onde ? — « où » (dans quel endroit). Dans la conversation, les Brésiliens disent souvent simplement Onde você vai ? — et tout le monde comprend.",
  vocab: [
    v("ptop2-1", "Aonde você vai?", "Où vas-tu ?",
      "Dona Marta, un panier au bras, croise Murzik devant la porte.",
      p("l2-1")),
    v("ptop2-2", "Eu vou à igreja.", "Je vais à l'église.",
      "Murzik montre l'église sur la colline.",
      p("l2-2")),
    v("ptop2-3", "Nós vamos ao museu.", "Nous allons au musée.",
      "Murzik et Bia marchent vers un bâtiment blanc à colonnes.",
      p("l2-3")),
    v("ptop2-4", "Ela vai para casa.", "Elle rentre à la maison.",
      "Dona Marta gravit la rue vers sa maison avec son panier.",
      p("l2-4")),
    v("ptop2-5", "Eles vão ao mercado.", "Ils vont au marché.",
      "Deux enfants courent vers les étals du marché.",
      p("l2-5")),
    v("ptop2-6", "Para onde vamos agora?", "Où allons-nous maintenant ?",
      "Murzik et Bia se tiennent à un croisement avec une carte.",
      p("l2-6")),
    v("ptop2-7", "Já vou!", "J'arrive !",
      "Murzik sort en courant, en enfilant une botte.",
      p("l2-7")),
  ],
  dialogue: {
    title: "Les projets du matin",
    note:
      "Juntos — « ensemble ».",
    lines: [
      line("marta", "Bom dia! Aonde vocês vão hoje?", "Bonjour ! Où allez-vous aujourd'hui ?"),
      line("bia", "Nós vamos ao museu. E o Murzik vai à igreja.", "Nous allons au musée. Et Murzik va à l'église."),
      line("murzik", "Eu quero ver os anjos de madeira!", "Je veux voir les anges en bois !"),
      line("marta", "Eu vou ao mercado. Depois eu vou para casa.", "Moi, je vais au marché. Ensuite, je rentre à la maison."),
      line("murzik", "E depois? Para onde vamos?", "Et après ? Où va-t-on ?"),
      line("marta", "Depois nós vamos juntos. Eu mostro a cidade!", "Après, nous irons ensemble. Je vous montre la ville !"),
      line("bia", "Murzik! Vamos! — Já vou!", "Murzik ! Allons-y ! — J'arrive !"),
    ],
    gist: choice("ptop2-d1", "Où va Dona Marta ?", [
      ["Au marché, puis à la maison.", true],
      ["Au musée.", false],
      ["À l'église.", false],
    ]),
  },
  grammar: [
    g(
      "Le verbe ir — « aller »",
      [
        "Ir (« aller ») est irrégulier — tout comme le français « aller » : eu vou, você / ele vai, nós vamos, vocês / eles vão. Tu connais déjà Vamos ! — « allons-y ! ».",
        "« Vers » se dit a ou para, et ça fusionne avec l'article : a + o = ao (ao museu), a + a = à (à igreja) — exactement comme « à+le = au », « à+la = à la ». Para casa — « à la maison », sans article.",
      ],
      [
        ["Eu vou ao parque.", "Je vais au parc."],
        ["Vocês vão à praia?", "Vous allez à la plage ?"],
      ],
    ),
  ],
  tasks: [
    choice("ptop2-t1", "Comment dit-on « Nous allons au musée » ?", [
      ["Nós vamos ao museu.", true],
      ["Nós vai ao museu.", false],
      ["Nós vamos à museu.", false],
    ], { skill: "grammar" }),
    listen("ptop2-t2", "Écoute. Où va la personne ?", "Eu vou à igreja.", [
      ["À l'église.", true],
      ["Au marché.", false],
      ["À la maison.", false],
    ]),
    fill("ptop2-t3", "Insère le mot : « Ils vont au marché ».", "Eles", "ao mercado.", "vão", ["vão", "vai", "vamos"], { skill: "words" }),
    spell("ptop2-t4", "Reconstitue le mot « marché ».", "mercado"),
    speak("ptop2-t5", "Aonde você vai amanhã?", "Amanhã eu vou ao museu.", "Demain, je vais au musée.", {
      help: "Dis à voix haute où tu vas demain.",
    }),
    choice("ptop2-t6", "Comment dit-on « Tournez à gauche » ?", [
      ["Vire à esquerda.", true],
      ["Vire à direita.", false],
      ["Vire o museu.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "angel",
    itemName: "Petit ange en bois",
    itemNameRu: "Anjinho de madeira",
    ru: "Oba! Um anjinho de madeira!",
    en: "Hourra ! Un petit ange en bois !",
    a11y: "Un petit ange sculpté aux ailes dorées est posé sur l'étagère.",
    image: p("angel"),
    steps: [
      "Dans l'église, Murzik contemple longuement les anges sculptés.",
      "À la sortie, un sculpteur vend de petits anges.",
      "« Este é para você ! » — « Celui-ci est pour toi ! »",
      "L'ange trône sur l'étagère.",
    ],
    bridge: "L'après-midi, Dona Marta leur fait visiter la ville. En haut, en bas, en haut, en bas…",
  },
};

const op3: Lesson = {
  id: "pt-a1-ouropreto-3",
  level: "A1",
  cityId: "pt-ouropreto",
  number: 3,
  title: "Sobe e desce — En haut et en bas",
  minutes: 7,
  goals: [
    "Comprendre les indications : montez, descendez",
    "Dire que tu es fatigué(e)",
    "Encourager : on est presque arrivés !",
  ],
  vocabNote:
    "Ladeira — « rue en pente raide ». À Ouro Preto, presque toutes les rues sont comme ça !",
  vocab: [
    v("ptop3-1", "Que ladeira!", "Quelle montée raide !",
      "Murzik regarde d'en bas une rue pavée très raide.",
      p("l3-1")),
    v("ptop3-2", "Sobe a rua.", "Montez la rue.",
      "Une flèche qui grimpe une rue en pente.",
      p("l3-2")),
    v("ptop3-3", "Desce a escada.", "Descendez l'escalier.",
      "Un vieil escalier de pierre qui descend.",
      p("l3-3")),
    v("ptop3-4", "Estou morto de cansaço.", "Je suis mort de fatigue.",
      "Murzik est allongé sur les marches, la langue pendante.",
      p("l3-4")),
    v("ptop3-5", "Vamos parar um pouco?", "On s'arrête un peu ?",
      "Bia s'assoit sur un banc de pierre.",
      p("l3-5")),
    v("ptop3-6", "Falta pouco!", "On est presque arrivés !",
      "Dona Marta fait signe avec entrain depuis le sommet.",
      p("l3-6")),
    v("ptop3-7", "Que vista!", "Quelle vue !",
      "Du sommet de la colline : toits, églises et montagnes.",
      p("l3-7")),
  ],
  dialogue: {
    title: "Promenade sur les collines",
    note:
      "Morto de cansaço — littéralement « mort de fatigue ». Lá de cima — « de là-haut ».",
    lines: [
      line("marta", "Agora sobe a rua. E depois desce a escada.", "Maintenant, montez la rue. Et ensuite, descendez l'escalier."),
      line("murzik", "Sobe, desce, sobe, desce… Que ladeira!", "Ça monte, ça descend, ça monte, ça descend… Quelle montée !"),
      line("bia", "Estou morta de cansaço. Vamos parar um pouco?", "Je suis morte de fatigue. On s'arrête un peu ?"),
      line("marta", "Coragem! Falta pouco!", "Courage ! On est presque arrivés !"),
      line("murzik", "Ufa! Chegamos!", "Ouf ! On est arrivés !"),
      line("bia", "Nossa! Que vista! Olha as igrejas daqui de cima!", "Waouh ! Quelle vue ! Regarde les églises, vues d'ici !"),
    ],
    gist: choice("ptop3-d1", "Pourquoi Bia veut-elle s'arrêter ?", [
      ["Elle est très fatiguée.", true],
      ["Elle a faim.", false],
      ["Elle s'est perdue.", false],
    ]),
  },
  grammar: [
    g(
      "Les indications : sobe, desce, vire",
      [
        "Pour dire « montez, descendez, tournez », les Brésiliens utilisent le plus souvent ces formes : sobe, desce, vira — dans la conversation ; suba, desça, vire — plus poli. Les deux se comprennent.",
        "Morto / morta de cansaço — s'accorde avec la personne qui parle : Murzik dit morto, Bia dit morta. Comme en français : « mort / morte de fatigue » !",
      ],
      [
        ["Sobe a ladeira e vira à direita.", "Montez la pente et tournez à droite."],
        ["Estou morta de cansaço.", "Je suis morte de fatigue. (une femme)"],
      ],
    ),
  ],
  tasks: [
    choice("ptop3-t1", "Bia est épuisée. Que dit-elle ?", [
      ["Estou morta de cansaço.", true],
      ["Estou morto de cansaço.", false],
      ["Sou morta de cansaço.", false],
    ], { skill: "grammar" }),
    listen("ptop3-t2", "Écoute. Par où faut-il aller ?", "Desce a escada.", [
      ["En bas, par l'escalier.", true],
      ["En haut, par la rue.", false],
      ["À gauche.", false],
    ]),
    match("ptop3-t3", PAIRS, [
      ["Sobe.", "Montez."],
      ["Desce.", "Descendez."],
      ["Falta pouco!", "On est presque arrivés !"],
      ["Que vista!", "Quelle vue !"],
    ], { skill: "words" }),
    missing("ptop3-t4", "Quelle lettre manque ? (« l'escalier »)", "esc", "da", "a", ["a", "o", "e"]),
    speak("ptop3-t5", "Vamos subir mais?", "Vamos parar um pouco? Estou morto de cansaço!", "On s'arrête un peu ? Je suis mort de fatigue !", {
      help: "Demande à voix haute une pause. Une femme dira morta.",
    }),
    choice("ptop3-t6", "Comment demander « Où vas-tu ? »", [
      ["Aonde você vai?", true],
      ["Onde você é?", false],
      ["Que vista?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "stone",
    itemName: "Caillou du sommet",
    itemNameRu: "Pedrinha",
    ru: "Oba! Uma pedrinha!",
    en: "Hourra ! Un petit caillou !",
    a11y: "Un caillou sombre et lisse, avec des paillettes dorées, est posé sur le rebord de la fenêtre.",
    image: p("stone"),
    steps: [
      "Au sommet de la colline, Murzik trouve un petit caillou.",
      "Des paillettes dorées y scintillent.",
      "« Será que é ouro ? » — « Ce serait de l'or ? »",
      "Le caillou est posé sur le rebord de la fenêtre.",
    ],
    bridge: "Le soir, Dona Marta raconte l'histoire de la ville. Elle a plus de trois cents ans !",
  },
};

const op4: Lesson = {
  id: "pt-a1-ouropreto-4",
  level: "A1",
  cityId: "pt-ouropreto",
  number: 4,
  title: "Trezentos anos — Trois cents ans",
  minutes: 7,
  goals: [
    "Compter par centaines jusqu'à mille",
    "Dire quel âge a un bâtiment",
    "Parler du passé : antigamente",
  ],
  vocabNote:
    "En portugais, les centaines s'accordent avec le nom : duzentos anos, mais duzentas pessoas.",
  vocab: [
    v("ptop4-1", "Esta igreja é muito antiga.", "Cette église est très ancienne.",
      "Une vieille église aux pierres noircies par le temps.",
      p("l4-1")),
    v("ptop4-2", "Ela tem trezentos anos.", "Elle a trois cents ans.",
      "Des chiffres anciens gravés dans le mur de l'église.",
      p("l4-2")),
    v("ptop4-3", "duzentos, trezentos, quatrocentos", "deux cents, trois cents, quatre cents",
      "Trois petits sacs de pièces : 200, 300, 400.",
      p("l4-3")),
    v("ptop4-4", "quinhentos, mil", "cinq cents, mille",
      "Une énorme montagne de pièces avec une pancarte 1000.",
      p("l4-4")),
    v("ptop4-5", "o ouro", "l'or",
      "Des pépites d'or dans un vieux tamis de chercheur d'or.",
      p("l4-5")),
    v("ptop4-6", "Antigamente aqui tinha ouro.", "Autrefois, il y avait de l'or ici.",
      "Une image d'époque : des gens lavent de l'or dans la rivière.",
      p("l4-6")),
    v("ptop4-7", "Que história!", "Quelle histoire !",
      "Murzik écoute Dona Marta, bouche bée.",
      p("l4-7")),
  ],
  dialogue: {
    title: "L'histoire d'Ouro Preto",
    note:
      "Tinha — « il y avait » (au passé). Rica — « riche ». Antigamente — « autrefois, dans le temps ».",
    lines: [
      line("marta", "Esta igreja é muito antiga. Ela tem trezentos anos.", "Cette église est très ancienne. Elle a trois cents ans."),
      line("murzik", "Trezentos? E a cidade?", "Trois cents ? Et la ville ?"),
      line("marta", "A cidade tem mais de trezentos anos. Antigamente aqui tinha muito ouro.", "La ville a plus de trois cents ans. Autrefois, il y avait beaucoup d'or ici."),
      line("bia", "Por isso é Ouro Preto!", "C'est pour ça qu'elle s'appelle Ouro Preto !"),
      line("marta", "Isso! A cidade era muito rica. Tinha mil… dez mil pessoas!", "Exactement ! La ville était très riche. Il y avait mille… dix mille habitants !"),
      line("murzik", "Que história!", "Quelle histoire !"),
    ],
    gist: choice("ptop4-d1", "Quel âge a l'église ?", [
      ["Trois cents ans.", true],
      ["Cent ans.", false],
      ["Mille ans.", false],
    ]),
  },
  grammar: [
    g(
      "Les centaines et mille",
      [
        "100 — cem, mais 101 — cento e um. Ensuite : duzentos (200), trezentos (300), quatrocentos (400), quinhentos (500), seiscentos, setecentos, oitocentos, novecentos, mil (1000).",
        "Entre les parties du nombre, on met e : trezentos e cinquenta — 350. Mil ne change pas : mil, dois mil (« deux mille »).",
      ],
      [
        ["trezentos e cinquenta reais", "trois cent cinquante reais"],
        ["dois mil anos", "deux mille ans"],
      ],
    ),
  ],
  tasks: [
    choice("ptop4-t1", "Comment dit-on « deux cents personnes » ? (a pessoa)", [
      ["duzentas pessoas", true],
      ["duzentos pessoas", false],
      ["dois cem pessoas", false],
    ], { skill: "grammar" }),
    listen("ptop4-t2", "Écoute. Quel âge ?", "Ela tem quinhentos anos.", [
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
    spell("ptop4-t4", "Reconstitue le mot « or ».", "ouro"),
    speak("ptop4-t5", "Quantos anos tem a sua cidade?", "A minha cidade tem trezentos anos.", "Ma ville a trois cents ans. (Parle de ta propre ville.)", {
      help: "Dis à voix haute quel âge a ta ville, à peu près.",
    }),
    choice("ptop4-t6", "Comment dit-on « On est presque arrivés ! » ?", [
      ["Falta pouco!", true],
      ["Que vista!", false],
      ["Sobe a rua!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bell",
    itemName: "Petite clochette",
    itemNameRu: "Sininho",
    ru: "Oba! Um sininho!",
    en: "Hourra ! Une petite clochette !",
    a11y: "Une petite clochette en cuivre pend à un ruban près de la fenêtre.",
    image: p("bell"),
    steps: [
      "Dans la ville, les cloches de toutes les églises sonnent.",
      "Dona Marta offre une petite clochette à Murzik.",
      "« Para lembrar dos sinos de Ouro Preto ! » — « Pour te souvenir des cloches d'Ouro Preto ! »",
      "La clochette pend près de la fenêtre. Ding !",
    ],
    bridge: "Le soir, Dona Marta les emmène dans un restaurant de cuisine du Minas.",
  },
};

const op5: Lesson = {
  id: "pt-a1-ouropreto-5",
  level: "A1",
  cityId: "pt-ouropreto",
  number: 5,
  title: "No restaurante — Au restaurant",
  minutes: 7,
  goals: [
    "Demander le menu",
    "Demander ce qu'on recommande",
    "Commander : Eu vou querer…",
  ],
  vocabNote:
    "Comida mineira — la cuisine de l'État du Minas Gerais : généreuse, familiale, cuisinée dans des marmites en terre ou en pierre. Doce de leite — une confiture de lait, LE dessert par excellence.",
  vocab: [
    v("ptop5-1", "O cardápio, por favor.", "La carte, s'il vous plaît.",
      "Murzik tend la patte vers le serveur.",
      p("l5-1")),
    v("ptop5-2", "O que você recomenda?", "Qu'est-ce que vous recommandez ?",
      "Murzik étudie la carte, perplexe.",
      p("l5-2")),
    v("ptop5-3", "Eu vou querer o frango.", "Je vais prendre le poulet.",
      "Murzik montre l'image d'un poulet sur la carte.",
      p("l5-3")),
    v("ptop5-4", "a panela de pedra", "la marmite en pierre",
      "Une marmite en pierre brûlante, pleine de nourriture, sur une table en bois.",
      p("l5-4")),
    v("ptop5-5", "Está delicioso!", "C'est délicieux !",
      "Murzik ferme les yeux de plaisir.",
      p("l5-5")),
    v("ptop5-6", "E de sobremesa?", "Et en dessert ?",
      "Le serveur avec un plateau de douceurs.",
      p("l5-6")),
    v("ptop5-7", "doce de leite com queijo", "confiture de lait au fromage",
      "Une petite assiette de caramel et une tranche de fromage blanc.",
      p("l5-7")),
  ],
  dialogue: {
    title: "Un dîner du Minas",
    note:
      "Feijão tropeiro — des haricots à la farine de manioc et aux lardons grillés. Quiabo — le gombo.",
    lines: [
      line("murzik", "Boa noite! O cardápio, por favor.", "Bonsoir ! La carte, s'il vous plaît."),
      line("waiter", "Aqui está. Hoje tem frango com quiabo e feijão tropeiro.", "Voilà. Aujourd'hui, il y a poulet aux gombos et feijão tropeiro."),
      line("murzik", "O que você recomenda?", "Qu'est-ce que vous recommandez ?"),
      line("waiter", "O frango! Ele vem na panela de pedra.", "Le poulet ! On le sert en marmite de pierre."),
      line("murzik", "Então eu vou querer o frango.", "Alors je vais prendre le poulet."),
      line("bia", "Hmm, está delicioso! E de sobremesa?", "Mmm, c'est délicieux ! Et en dessert ?"),
      line("marta", "Doce de leite com queijo, claro! É de Minas!", "Confiture de lait au fromage, bien sûr ! C'est du Minas !"),
    ],
    gist: choice("ptop5-d1", "Que commande Murzik ?", [
      ["Du poulet en marmite de pierre.", true],
      ["Du poisson.", false],
      ["Seulement un dessert.", false],
    ]),
  },
  grammar: [
    g(
      "Eu vou querer… — « je vais prendre… »",
      [
        "Au restaurant, les Brésiliens commandent ainsi : Eu vou querer o frango — « je vais prendre le poulet », littéralement « je vais vouloir ». C'est le futur proche portugais, comme le français « je vais + infinitif » ! On peut aussi dire : Eu queria… (Paraty) ou Para mim… — « pour moi… ».",
        "O que você recomenda ? — « Qu'est-ce que vous recommandez ? » Recomendar est un verbe régulier en -ar.",
      ],
      [
        ["Eu vou querer um suco.", "Je vais prendre un jus."],
        ["Para mim, o peixe.", "Pour moi, le poisson."],
      ],
    ),
  ],
  tasks: [
    choice("ptop5-t1", "Comment commander : « Je vais prendre le poisson » ?", [
      ["Eu vou querer o peixe.", true],
      ["Eu vou o peixe.", false],
      ["Eu sou o peixe.", false],
    ], { skill: "grammar" }),
    listen("ptop5-t2", "Écoute. Que demande la personne ?", "O que você recomenda?", [
      ["Qu'est-ce que vous recommandez ?", true],
      ["Combien ça coûte ?", false],
      ["Où est la carte ?", false],
    ]),
    match("ptop5-t3", PAIRS, [
      ["o cardápio", "la carte"],
      ["a sobremesa", "le dessert"],
      ["o frango", "le poulet"],
      ["delicioso", "délicieux"],
    ], { skill: "words" }),
    missing("ptop5-t4", "Quelle lettre manque ? (« la carte »)", "card", "pio", "á", ["á", "a", "ã"]),
    speak("ptop5-t5", "Boa noite! O que você vai querer?", "Eu vou querer o frango, por favor.", "Je vais prendre le poulet, s'il vous plaît.", {
      help: "Commande à voix haute le plat de ton choix.",
    }),
    choice("ptop5-t6", "Comment dit-on « Cette église a trois cents ans » ?", [
      ["Esta igreja tem trezentos anos.", true],
      ["Esta igreja é trezentos anos.", false],
      ["Esta igreja tem três cem anos.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "pot",
    itemName: "Petite marmite en pierre",
    itemNameRu: "Panelinha de pedra",
    ru: "Oba! Uma panelinha de pedra!",
    en: "Hourra ! Une petite marmite en pierre !",
    a11y: "Une petite marmite grise en stéatite, avec son couvercle, trône sur l'étagère.",
    image: p("pot"),
    steps: [
      "Le cuisinier sort de la cuisine avec une petite marmite.",
      "« De pedra-sabão, de Minas ! » — « En stéatite, du Minas ! »",
      "Il l'offre à Murzik.",
      "La petite marmite trône sur l'étagère.",
    ],
    bridge: "Le matin, Bia se souvient qu'on vend de belles pierres à Ouro Preto. Encore un cadeau pour grand-mère ?",
  },
};

const op6: Lesson = {
  id: "pt-a1-ouropreto-6",
  level: "A1",
  cityId: "pt-ouropreto",
  number: 6,
  title: "Na loja — À la boutique",
  minutes: 7,
  goals: [
    "Demander à voir un article",
    "Marchander un peu",
    "Demander un emballage cadeau",
  ],
  vocabNote:
    "Faz um desconto ? — « Vous faites un rabais ? » Dans les petites boutiques, on peut le demander ; dans les grands magasins, en général non.",
  vocab: [
    v("ptop6-1", "Posso ver aquela pedra?", "Je peux voir cette pierre, là-bas ?",
      "Murzik montre une vitrine de pierres multicolores.",
      p("l6-1")),
    v("ptop6-2", "Qual é mais bonita?", "Laquelle est la plus jolie ?",
      "Bia tient deux pierres : une dorée et une rose.",
      p("l6-2")),
    v("ptop6-3", "Esta é mais barata.", "Celle-ci est moins chère.",
      "Le vendeur montre une petite pierre rose.",
      p("l6-3")),
    v("ptop6-4", "Faz um desconto?", "Vous faites un rabais ?",
      "Murzik sourit au vendeur d'un air malin.",
      p("l6-4")),
    v("ptop6-5", "Eu levo esta.", "Je prends celle-ci.",
      "Murzik pose la pierre dorée sur le comptoir.",
      p("l6-5")),
    v("ptop6-6", "É para presente.", "C'est pour offrir.",
      "Murzik montre une photo de Dona Lúcia.",
      p("l6-6")),
    v("ptop6-7", "Pode embrulhar?", "Vous pouvez l'emballer ?",
      "Le vendeur emballe une petite boîte dans du papier avec un nœud.",
      p("l6-7")),
  ],
  dialogue: {
    title: "La boutique de pierres",
    note:
      "Topázio — la topaze, la pierre célèbre du Minas. Para você — « pour vous » : le vendeur baisse le prix.",
    lines: [
      line("murzik", "Bom dia! Posso ver aquela pedra?", "Bonjour ! Je peux voir cette pierre, là-bas ?"),
      line("seller", "Claro! É um topázio. E esta é uma turmalina.", "Bien sûr ! C'est une topaze. Et celle-ci est une tourmaline."),
      line("bia", "Qual é mais bonita, Murzik?", "Laquelle est la plus jolie, Murzik ?"),
      line("murzik", "As duas! Quanto custa o topázio?", "Les deux ! Combien coûte la topaze ?"),
      line("seller", "Cem reais. A turmalina é mais barata: oitenta.", "Cent reais. La tourmaline est moins chère : quatre-vingts."),
      line("murzik", "Faz um desconto? É para presente.", "Vous faites un rabais ? C'est pour offrir."),
      line("seller", "Para você, noventa o topázio.", "Pour vous, quatre-vingt-dix la topaze."),
      line("murzik", "Eu levo! Pode embrulhar?", "Je la prends ! Vous pouvez l'emballer ?"),
    ],
    gist: choice("ptop6-d1", "Combien Murzik paie-t-il la topaze ?", [
      ["Quatre-vingt-dix reais.", true],
      ["Cent reais.", false],
      ["Quatre-vingts reais.", false],
    ]),
  },
  grammar: [
    g(
      "Levar — « prendre (en achetant) »",
      [
        "Au magasin, « je prends » se dit eu levo — littéralement « j'emporte » : Eu levo esta. Tu te souviens de Eu vou levar dois à la boulangerie de São Paulo ? C'est le même verbe.",
        "Mais barata, mais bonita — « moins chère, plus jolie » : mais + adjectif, comme à Brasília. Mais = « plus », mais aussi « moins » avec le contexte : mais barata est « moins chère » par comparaison de prix.",
      ],
      [
        ["Eu levo os dois.", "Je prends les deux."],
        ["Esta bolsa é mais cara.", "Ce sac est plus cher."],
      ],
    ),
  ],
  tasks: [
    choice("ptop6-t1", "Comment dit-on « Je prends celle-ci » ? (a pedra)", [
      ["Eu levo esta.", true],
      ["Eu levo este.", false],
      ["Eu sou esta.", false],
    ], { skill: "grammar" }),
    listen("ptop6-t2", "Écoute. Que demande le client ?", "Pode embrulhar? É para presente.", [
      ["Un emballage cadeau.", true],
      ["Un rabais.", false],
      ["Voir une autre pierre.", false],
    ]),
    match("ptop6-t3", PAIRS, [
      ["o desconto", "le rabais"],
      ["o presente", "le cadeau"],
      ["embrulhar", "emballer"],
      ["a pedra", "la pierre"],
    ], { skill: "words" }),
    spell("ptop6-t4", "Reconstitue le mot « rabais ».", "desconto"),
    speak("ptop6-t5", "São cem reais.", "Faz um desconto? É para presente.", "Vous faites un rabais ? C'est pour offrir.", {
      help: "Demande un rabais à voix haute.",
    }),
    choice("ptop6-t6", "Comment demander la carte ?", [
      ["O cardápio, por favor.", true],
      ["A conta, por favor.", false],
      ["O que você recomenda?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "topaz",
    itemName: "Topaze pour Dona Lúcia",
    itemNameRu: "Topázio",
    ru: "Oba! Um topázio!",
    en: "Hourra ! Une topaze !",
    a11y: "Une topaze dorée scintille sur du velours dans une petite boîte ouverte.",
    image: p("topaz"),
    steps: [
      "Le vendeur emballe la topaze dans une petite boîte.",
      "« Para a aniversariante ! » — « Pour celle qui fête son anniversaire ! »",
      "Dona Lúcia aura maintenant deux cadeaux : le châle et la pierre.",
      "La boîte se cache au fond de la valise.",
    ],
    bridge: "Dona Marta leur fait signe depuis la place : « Murzik ! Venha ! O papagaio ! »",
  },
};

const op7: Lesson = {
  id: "pt-a1-ouropreto-7",
  level: "A1",
  cityId: "pt-ouropreto",
  number: 7,
  title: "Siga em frente! — Continuez tout droit !",
  minutes: 8,
  goals: [
    "Comprendre ce qu'on raconte sur Pipoca",
    "Dire « vous allez adorer »",
    "Réviser tous les mots d'Ouro Preto",
  ],
  vocabNote:
    "Siga em frente ! — « Continuez tout droit ! » Siga — « suivez ». Voltem logo ! — « Revenez vite ! » (à plusieurs personnes).",
  vocab: [
    v("ptop7-1", "Siga em frente!", "Continuez tout droit !",
      "Le perroquet vert est perché sur un vieux panneau de la place et indique la direction de l'aile.",
      p("l7-1")),
    v("ptop7-2", "Ele ensinou o caminho.", "Il montrait le chemin.",
      "Des touristes avec des cartes écoutent le perroquet.",
      p("l7-2")),
    v("ptop7-3", "os turistas", "les touristes",
      "Un groupe de touristes avec des appareils photo sur la place.",
      p("l7-3")),
    v("ptop7-4", "Eles foram para Salvador.", "Ils sont partis pour Salvador.",
      "Une carte : une flèche vers le nord, vers une ville au bord de la mer.",
      p("l7-4")),
    v("ptop7-5", "a Bahia", "Bahia (l'État)",
      "Une petite image : des maisons colorées sur une colline au-dessus de la mer.",
      p("l7-5")),
    v("ptop7-6", "Vocês vão gostar!", "Vous allez adorer !",
      "Dona Marta sourit d'un air rêveur.",
      p("l7-6")),
    v("ptop7-7", "Voltem logo!", "Revenez vite !",
      "Dona Marta fait signe à la porte de sa vieille maison.",
      p("l7-7")),
  ],
  dialogue: {
    title: "Ce que le perroquet a dit",
    note:
      "Venha ! — « Viens ! ». Perdidos — « perdus ». Fez sucesso — « a eu un énorme succès ».",
    lines: [
      line("marta", "Murzik! Venha! O papagaio! Ele estava aqui na praça, ontem.", "Murzik ! Viens ! Le perroquet ! Il était ici, sur la place, hier."),
      line("murzik", "O Pipoca! O que ele fez?", "Pipoca ! Qu'est-ce qu'il a fait ?"),
      line("marta", "Ele ficou na placa e ensinou o caminho para os turistas perdidos: Siga em frente! Siga em frente!", "Il est resté sur le panneau et a montré le chemin aux touristes perdus : « Continuez tout droit ! Continuez tout droit ! »"),
      line("bia", "Ha! O Pipoca é guia agora!", "Ha ! Pipoca est guide maintenant !"),
      line("marta", "Ele fez sucesso! E a banda foi para Salvador, na Bahia. Vocês vão gostar!", "Il a eu un énorme succès ! Et le groupe est parti pour Salvador, à Bahia. Vous allez adorer !"),
      line("murzik", "Obrigado por tudo, Dona Marta!", "Merci pour tout, Dona Marta !"),
      line("marta", "Voltem logo!", "Revenez vite !"),
    ],
    gist: choice("ptop7-d1", "Quelle phrase Pipoca a-t-il apprise à Ouro Preto ?", [
      ["« Continuez tout droit ! »", true],
      ["« Tournez à gauche ! »", false],
      ["« Quelle vue ! »", false],
    ]),
  },
  grammar: [
    g(
      "Vocês vão gostar — « vous allez adorer »",
      [
        "Ir + verbe — c'est le futur de la conversation, l'équivalent exact du futur proche français : Vocês vão gostar — « vous allez aimer », Nós vamos ver — « nous allons voir ». Tu connais déjà vou sentir saudade.",
        "Vocês — « vous » (plusieurs personnes). Le verbe avec vocês se conjugue comme avec eles : vocês vão, vocês querem, voltem !",
      ],
      [
        ["Vocês vão gostar da Bahia.", "Vous allez adorer Bahia."],
        ["Amanhã nós vamos viajar.", "Demain, nous allons voyager."],
      ],
    ),
  ],
  tasks: [
    listen("ptop7-t1", "Examen audio. Que raconte Dona Marta ?", "O papagaio ensinou o caminho para os turistas: Siga em frente! A banda foi para Salvador.", [
      ["Le perroquet montrait le chemin aux touristes, et le groupe est parti pour Salvador.", true],
      ["Le perroquet s'est perdu dans la ville.", false],
      ["Le groupe a joué dans l'église.", false],
    ]),
    choice("ptop7-t2", "Comment dit-on « Vous allez adorer ! » ?", [
      ["Vocês vão gostar!", true],
      ["Vocês gostam de nada!", false],
      ["Vocês vão gostam!", false],
    ], { skill: "words" }),
    build("ptop7-t3", "Construis la phrase : « Ils sont partis pour Salvador ».", ["Eles", "foram", "para", "Salvador."]),
    missing("ptop7-t4", "Quelle lettre manque ? (« les touristes »)", "tur", "stas", "i", ["i", "e", "y"]),
    speak("ptop7-t5", "Voltem logo!", "Obrigado por tudo! Até breve!", "Merci pour tout ! À bientôt !", {
      help: "Dis au revoir à voix haute. Obrigado ou obrigada, les deux marchent.",
    }),
    script("ptop7-t6", "Souviens-toi de tout Ouro Preto. Termine la conversation avec Dona Marta.", [
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
    itemName: "Photo de Pipoca sur le panneau",
    itemNameRu: "Foto do Pipoca na placa",
    ru: "Oba! Mais uma foto do Pipoca!",
    en: "Hourra ! Encore une photo de Pipoca !",
    a11y:
      "Une photo : le perroquet vert sur un vieux panneau en bois, entouré de touristes avec des cartes qui rient.",
    image: p("photo"),
    steps: [
      "Un touriste a envoyé une photo à Dona Marta.",
      "Pipoca sur le panneau, entouré de touristes avec des cartes !",
      "« O guia mais famoso de Ouro Preto ! » — « Le guide le plus célèbre d'Ouro Preto ! »",
      "Légende : « Siga em frente ! » La photo rejoint l'album.",
    ],
    bridge: "Le bus de nuit roule vers le nord — vers la mer et les tambours de Bahia.",
  },
};

const story: CityStory = {
  home: {
    name: "Une chambre dans la vieille maison de Dona Marta",
    nameRu: "O quarto na casa da Dona Marta",
    image: p("home"),
    a11y:
      "Une chambre dans une vieille maison : murs blancs épais, plafond en bois, fenêtre bleue avec vue sur les toits et les églises. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "photo-ouropreto",
  welcomeRu: "Olá, Ouro Preto!",
  welcomeEn: "Bonjour, Ouro Preto !",
  welcomeImage: p("arrival"),
  welcomeA11y:
    "Une vieille ville sur les collines : maisons blanches aux fenêtres colorées, rues pavées qui montent et descendent raide, églises à petites tours.",
  departureImage: p("departure"),
  departureA11y: "Dona Marta fait signe à la porte de sa vieille maison.",
  finale: [
    {
      image: p("photo"),
      a11y: "Murzik colle dans l'album la photo de Pipoca sur le panneau.",
      lines: [
        { en: "Neuvième page de l'album : Pipoca, le guide d'Ouro Preto." },
        { ru: "Siga em frente!", en: "Continuez tout droit !" },
        { en: "Et au fond de la valise repose un deuxième cadeau pour Dona Lúcia." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie.",
      lines: [
        { ru: "Ouro Preto completo!", en: "Ouro Preto terminé !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Dona Marta fait signe au revoir.",
      lines: [
        { ru: "Tchau, Dona Marta!", en: "Au revoir, Dona Marta !" },
        { ru: "Próxima parada: Salvador!", en: "Prochain arrêt : Salvador !" },
      ],
    },
    {
      image: p("bus"),
      a11y: "Un bus roule vers le nord, l'aube se lève sur les collines par la fenêtre.",
      lines: [{ ru: "Ouro Preto → Salvador", en: "Ouro Preto → Salvador" }],
    },
    {
      image: pic("pt/salvador/arrival"),
      a11y:
        "La vieille place du Pelourinho : maisons roses, jaunes et bleues, rue pavée, percussionnistes en t-shirts colorés.",
      lines: [
        { ru: "Olá, Salvador!", en: "Bonjour, Salvador !" },
        { ru: "Que cores! Que tambores!", en: "Quelles couleurs ! Quels tambours !" },
      ],
    },
  ],
};

export const ptOuroPretoFr = {
  id: "pt-ouropreto",
  name: "Ouro Preto",
  namePt: "Ouro Preto",
  lessons: [op1, op2, op3, op4, op5, op6, op7],
  story,
};
