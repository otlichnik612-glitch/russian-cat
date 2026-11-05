import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { PAIRS, YOU, build, choice, g, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Салвадор · «Еда и рынок» · Старый центр Пелоуринью, дона Селести и её акараже. Рынок и количества, «предпочитаю», острое, капоэйра, «a gente», его и её, барабаны. Пипока выучил «Tá uma delícia!». */

const p = (name: string) => pic(`pt/salvador/${name}`);
const CELESTE = "Dona Celeste";

const sa1: Lesson = {
  id: "pt-a1-salvador-1",
  level: "A1",
  cityId: "pt-salvador",
  number: 1,
  title: "Na feira — Au marché",
  minutes: 7,
  goals: [
    "Acheter des fruits au poids",
    "Dire « un kilo », « un demi-kilo », « une douzaine »",
    "Demander si c'est mûr",
  ],
  vocabNote:
    "Feira — un marché de rue en plein air. À Salvador, on y vend des fruits qu'on ne voit presque jamais en Europe : la jacque, le cajou, la pitanga.",
  vocab: [
    v("ptsa1-1", "Eu quero um quilo de manga.", "Je voudrais un kilo de mangues.",
      "Murzik montre un tas de mangues bien mûres.",
      p("l1-1")),
    v("ptsa1-2", "meio quilo de tomate", "un demi-kilo de tomates",
      "Sur la balance, un sachet de tomates, l'aiguille sur 0,5.",
      p("l1-2")),
    v("ptsa1-3", "uma dúzia de bananas", "une douzaine de bananes",
      "Une grosse grappe de bananes — douze en tout.",
      p("l1-3")),
    v("ptsa1-4", "Quanto é o quilo?", "Combien coûte le kilo ?",
      "Une vendeuse au foulard éclatant derrière son étal de fruits.",
      p("l1-4")),
    v("ptsa1-5", "Esta manga está madura?", "Cette mangue est mûre ?",
      "Murzik hume prudemment une mangue.",
      p("l1-5")),
    v("ptsa1-6", "Que fruta é essa?", "C'est quoi, ce fruit ?",
      "Murzik regarde avec étonnement un énorme fruit de jacquier épineux.",
      p("l1-6")),
    v("ptsa1-7", "Pode escolher!", "Choisissez !",
      "La vendeuse désigne tout l'étal d'un grand geste.",
      p("l1-7")),
  ],
  dialogue: {
    title: "Le marché du matin",
    note:
      "Jaca — la jacque, un énorme fruit tropical. Freguês — « client » : c'est ainsi que les vendeurs s'adressent affectueusement à toi.",
    lines: [
      line("seller", "Bom dia, freguês! Pode escolher!", "Bonjour, cher client ! Choisissez !"),
      line("murzik", "Bom dia! Quanto é o quilo da manga?", "Bonjour ! Combien coûte le kilo de mangues ?"),
      line("seller", "Oito reais.", "Huit reais."),
      line("murzik", "Esta manga está madura?", "Cette mangue est mûre ?"),
      line("seller", "Está! Doce como mel!", "Bien mûre ! Douce comme du miel !"),
      line("murzik", "Então eu quero um quilo de manga e uma dúzia de bananas.", "Alors je voudrais un kilo de mangues et une douzaine de bananes."),
      line("bia", "Murzik, olha! Que fruta é essa?", "Murzik, regarde ! C'est quoi, ce fruit ?"),
      line("seller", "É jaca! É a maior fruta de árvore do mundo!", "C'est de la jacque ! Le plus gros fruit qui pousse sur un arbre !"),
    ],
    gist: choice("ptsa1-d1", "Qu'achète Murzik ?", [
      ["Des mangues et des bananes.", true],
      ["Une jacque.", false],
      ["Des tomates.", false],
    ]),
  },
  grammar: [
    g(
      "Les quantités : um quilo de, uma dúzia de",
      [
        "Après les mots de quantité, on met de : um quilo de manga, meio quilo de tomate, uma dúzia de bananas, um pouco de água. Pas d'article après de ici — exactement comme en français « un kilo de mangues », « une douzaine de bananes ».",
        "Meio — « demi » : meio quilo, meia dúzia. Meio s'accorde avec le nom : o quilo → meio, a dúzia → meia. Comme en français « un demi / une demi-… ».",
      ],
      [
        ["dois quilos de batata", "deux kilos de pommes de terre"],
        ["meia dúzia de ovos", "une demi-douzaine d'œufs"],
      ],
    ),
  ],
  tasks: [
    choice("ptsa1-t1", "Comment dit-on « une demi-douzaine de bananes » ? (a dúzia)", [
      ["meia dúzia de bananas", true],
      ["meio dúzia de bananas", false],
      ["meia dúzia bananas", false],
    ], { skill: "grammar" }),
    listen("ptsa1-t2", "Écoute. Que veut le client ?", "Eu quero meio quilo de tomate.", [
      ["Un demi-kilo de tomates.", true],
      ["Un kilo de mangues.", false],
      ["Une douzaine de bananes.", false],
    ]),
    match("ptsa1-t3", PAIRS, [
      ["um quilo", "un kilo"],
      ["meio quilo", "un demi-kilo"],
      ["uma dúzia", "une douzaine"],
      ["madura", "mûre"],
    ], { skill: "words" }),
    spell("ptsa1-t4", "Reconstitue le mot « fruit ».", "fruta"),
    speak("ptsa1-t5", "Bom dia! O que você quer?", "Eu quero um quilo de manga, por favor.", "Un kilo de mangues, s'il vous plaît.", {
      help: "Achète à voix haute les fruits de ton choix.",
    }),
    choice("ptsa1-t6", "Comment dit-on « Vous allez adorer ! » ?", [
      ["Vocês vão gostar!", true],
      ["Vocês gostaram nada!", false],
      ["Siga em frente!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "basket",
    itemName: "Panier de fruits",
    itemNameRu: "Cesta de frutas",
    ru: "Oba! Uma cesta de frutas!",
    en: "Hourra ! Un panier de fruits !",
    a11y: "Un panier tressé avec des mangues, des bananes et un petit ananas est posé sur la table.",
    image: p("basket"),
    steps: [
      "La vendeuse met les fruits dans un panier tressé.",
      "Et elle ajoute un petit ananas en cadeau.",
      "« É presente da feira ! » — « Un cadeau du marché ! »",
      "Le panier est posé sur la table de la chambre.",
    ],
    bridge: "Bia demande : « Murzik, você prefere manga ou abacaxi ? »",
  },
};

const sa2: Lesson = {
  id: "pt-a1-salvador-2",
  level: "A1",
  cityId: "pt-salvador",
  number: 2,
  title: "Eu prefiro… — Je préfère…",
  minutes: 7,
  goals: [
    "Dire ce que tu préfères",
    "Demander « lequel tu préfères ? »",
    "Répondre « ça m'est égal »",
  ],
  vocabNote:
    "Tanto faz — « ça m'est égal », une expression très fréquente. Neutre, pas impolie.",
  vocab: [
    v("ptsa2-1", "Você prefere manga ou abacaxi?", "Tu préfères la mangue ou l'ananas ?",
      "Bia tient une mangue dans une main et un ananas dans l'autre.",
      p("l2-1")),
    v("ptsa2-2", "Eu prefiro manga.", "Je préfère la mangue.",
      "Murzik tend la patte vers la mangue.",
      p("l2-2")),
    v("ptsa2-3", "Qual você prefere?", "Lequel tu préfères ?",
      "Deux verres de jus : un orange, un rose.",
      p("l2-3")),
    v("ptsa2-4", "Eu gosto mais de suco de caju.", "Je préfère le jus de cajou.",
      "Bia boit avec plaisir un jus rosé à la paille.",
      p("l2-4")),
    v("ptsa2-5", "Tanto faz.", "Ça m'est égal.",
      "Murzik hausse les épaules en souriant.",
      p("l2-5")),
    v("ptsa2-6", "Os dois!", "Les deux !",
      "Murzik attrape les deux verres d'un coup.",
      p("l2-6")),
    v("ptsa2-7", "Nenhum dos dois.", "Ni l'un ni l'autre.",
      "Murzik secoue la tête devant une assiette de piments.",
      p("l2-7")),
  ],
  dialogue: {
    title: "Jus ou jus ?",
    note:
      "Caju — le fruit du cajou : c'est sur lui que pousse la noix de cajou. Son jus est très populaire au Brésil.",
    lines: [
      line("bia", "Murzik, você prefere manga ou abacaxi?", "Murzik, tu préfères la mangue ou l'ananas ?"),
      line("murzik", "Eu prefiro manga. E você?", "Moi, la mangue. Et toi ?"),
      line("bia", "Eu gosto mais de caju! Olha, tem suco de caju e de laranja. Qual você prefere?", "Moi je préfère le cajou ! Regarde, il y a du jus de cajou et du jus d'orange. Tu préfères lequel ?"),
      line("murzik", "Tanto faz… Não, os dois!", "Ça m'est égal… Non, les deux !"),
      line("bia", "Ha! E pimenta? Você quer pimenta?", "Ha ! Et le piment ? Tu veux du piment ?"),
      line("murzik", "Pimenta? Nenhuma! Obrigado!", "Du piment ? Aucun ! Merci !"),
    ],
    gist: choice("ptsa2-d1", "Quel jus choisit Murzik ?", [
      ["Les deux.", true],
      ["Seulement le jus d'orange.", false],
      ["Aucun.", false],
    ]),
  },
  grammar: [
    g(
      "Preferir et gostar mais de",
      [
        "Preferir — « préférer » : eu prefiro, você / ele prefere, nós preferimos, eles preferem. À la forme « je », la voyelle change : prefiro, et non « prefero » — exactement comme le français « je préfère » face à « nous préférons » !",
        "On peut dire la même chose avec gostar : Eu gosto mais de caju — « j'aime davantage le cajou », littéralement « j'aime plus de cajou ».",
      ],
      [
        ["Eu prefiro o mar.", "Je préfère la mer."],
        ["Ela gosta mais de café.", "Elle préfère le café."],
      ],
    ),
  ],
  tasks: [
    choice("ptsa2-t1", "Comment dit-on « Je préfère l'ananas » ?", [
      ["Eu prefiro abacaxi.", true],
      ["Eu prefero abacaxi.", false],
      ["Eu prefere abacaxi.", false],
    ], { skill: "grammar" }),
    listen("ptsa2-t2", "Écoute. Que répond la personne ?", "Tanto faz.", [
      ["Ça m'est égal.", true],
      ["Les deux !", false],
      ["Aucun.", false],
    ]),
    match("ptsa2-t3", PAIRS, [
      ["Eu prefiro.", "Je préfère."],
      ["Tanto faz.", "Ça m'est égal."],
      ["Os dois!", "Les deux !"],
      ["Nenhum dos dois.", "ni l'un ni l'autre"],
    ], { skill: "words" }),
    missing("ptsa2-t4", "Quelle lettre manque ? (« ananas »)", "abaca", "i", "x", ["x", "ch", "s"]),
    speak("ptsa2-t5", "Você prefere café ou chá?", "Eu prefiro café.", "Je préfère le café. (Dis ce que tu choisis, toi.)", {
      help: "Dis à voix haute lequel tu préfères.",
    }),
    choice("ptsa2-t6", "Comment demander « Combien coûte le kilo ? »", [
      ["Quanto é o quilo?", true],
      ["Quantos quilos?", false],
      ["Quanto custam?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cocada",
    itemName: "Boîte de cocada",
    itemNameRu: "Cocada",
    ru: "Oba! Cocada!",
    en: "Hourra ! De la cocada !",
    a11y: "Une petite boîte de douceurs à la noix de coco — des carrés blancs et bruns.",
    image: p("cocada"),
    steps: [
      "Au marché, Murzik goûte la cocada — une douceur à la noix de coco.",
      "Blanche ou brune ? « Tanto faz ! »",
      "La vendeuse lui met les deux sortes dans une boîte.",
      "La boîte trône sur l'étagère. S'il arrive à résister…",
    ],
    bridge: "Le soir, Bia emmène Murzik chez une célèbre vendeuse d'acarajé.",
  },
};

const sa3: Lesson = {
  id: "pt-a1-salvador-3",
  level: "A1",
  cityId: "pt-salvador",
  number: 3,
  title: "O acarajé — L'acarajé",
  minutes: 7,
  goals: [
    "Commander de la street-food",
    "Demander sans piment ou avec très peu",
    "Demander simplement : Me dá…",
  ],
  vocabNote:
    "Acarajé — une beignet de haricots farci aux crevettes, le symbole de Bahia. Ce sont des femmes en robes de dentelle blanche qui le vendent : on les appelle baianas.",
  vocab: [
    v("ptsa3-1", "Um acarajé, por favor.", "Un acarajé, s'il vous plaît.",
      "Une femme en robe de dentelle blanche et turban fait frire des beignets.",
      p("l3-1")),
    v("ptsa3-2", "Com pimenta ou sem?", "Avec du piment ou sans ?",
      "La baiana tient une cuillère au-dessus d'un bol de piment rouge.",
      p("l3-2")),
    v("ptsa3-3", "Pouca pimenta, por favor.", "Très peu de piment, s'il vous plaît.",
      "Murzik montre une toute petite quantité avec les doigts.",
      p("l3-3")),
    v("ptsa3-4", "Está muito apimentado!", "C'est très piquant !",
      "Murzik a le visage tout rouge, de la vapeur sort de ses oreilles.",
      p("l3-4")),
    v("ptsa3-5", "Me dá uma água?", "Tu me donnes de l'eau ?",
      "Murzik, paniqué, tend les pattes vers une bouteille d'eau.",
      p("l3-5")),
    v("ptsa3-6", "Quanto fica?", "C'est combien ?",
      "Murzik sort son porte-monnaie en coquillages.",
      p("l3-6")),
    v("ptsa3-7", "Pode ficar com o troco.", "Gardez la monnaie.",
      "Murzik sourit et repousse les pièces.",
      p("l3-7")),
  ],
  dialogue: {
    title: "Chez Dona Celeste",
    note:
      "Meu filho / minha filha — « mon petit, ma petite » : c'est ainsi que les vieilles dames de Bahia parlent affectueusement aux inconnus. Camarão — « crevette ».",
    lines: [
      line("celeste", "Boa noite, meu filho! O que vai ser?", "Bonsoir, mon petit ! Ce sera quoi ?"),
      line("murzik", "Um acarajé, por favor.", "Un acarajé, s'il vous plaît."),
      line("celeste", "Com pimenta ou sem?", "Avec du piment ou sans ?"),
      line("murzik", "Pouca pimenta, por favor.", "Très peu de piment, s'il vous plaît."),
      line("murzik", "Ai! Está muito apimentado! Me dá uma água?", "Aïe ! C'est très piquant ! Tu me donnes de l'eau ?"),
      line("celeste", "Ha ha! Pouca pimenta da Bahia é muita pimenta!", "Ha ha ! Un peu de piment de Bahia, c'est beaucoup de piment !"),
      line("murzik", "Quanto fica? — Dez reais. — Pode ficar com o troco!", "C'est combien ? — Dix reais. — Gardez la monnaie !"),
    ],
    gist: choice("ptsa3-d1", "Pourquoi Murzik demande-t-il de l'eau ?", [
      ["L'acarajé s'est révélé très piquant.", true],
      ["Il voulait se laver les pattes.", false],
      ["Il s'est étouffé.", false],
    ]),
  },
  grammar: [
    g(
      "Me dá…? — « Tu me donnes… ? »",
      [
        "Me dá uma água ? — une demande familière, littéralement « tu me donnes de l'eau ? ». Me — « me », et dans la conversation les Brésiliens le placent avant le verbe : me dá, me ajuda. Comme le français « donne-moi », sauf que me passe devant !",
        "Plus poli : Eu queria… ou Você pode me dar… ? Me dá…, c'est comme « tu me donnes ça ? » — entre amis et au marché.",
      ],
      [
        ["Me dá um suco?", "Tu me donnes un jus ?"],
        ["Você pode me ajudar?", "Vous pouvez m'aider ?"],
      ],
    ),
  ],
  tasks: [
    choice("ptsa3-t1", "Comment demander de l'eau simplement ?", [
      ["Me dá uma água?", true],
      ["Dá me uma água?", false],
      ["Eu dá uma água?", false],
    ], { skill: "grammar" }),
    listen("ptsa3-t2", "Écoute. Que demande Dona Celeste ?", "Com pimenta ou sem?", [
      ["Avec du piment ou sans ?", true],
      ["C'est combien ?", false],
      ["Vous voulez de l'eau ?", false],
    ]),
    match("ptsa3-t3", PAIRS, [
      ["a pimenta", "le piment"],
      ["apimentado", "piquant"],
      ["o troco", "la monnaie"],
      ["Quanto fica?", "C'est combien ?"],
    ], { skill: "words" }),
    spell("ptsa3-t4", "Reconstitue le mot « piment ».", "pimenta"),
    speak("ptsa3-t5", "Com pimenta ou sem?", "Sem pimenta, por favor!", "Sans piment, s'il vous plaît !", {
      help: "Réponds à voix haute. Tu peux aussi dire Pouca pimenta !",
    }),
    choice("ptsa3-t6", "Comment dit-on « Ça m'est égal » ?", [
      ["Tanto faz.", true],
      ["Os dois!", false],
      ["Eu prefiro.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "ribbon",
    itemName: "Ruban porte-bonheur",
    itemNameRu: "Fitinha",
    ru: "Oba! Uma fitinha!",
    en: "Hourra ! Un ruban porte-bonheur !",
    a11y: "Un fin ruban jaune est noué à la patte de Murzik.",
    image: p("ribbon"),
    steps: [
      "Dona Celeste noue un ruban vif à la patte de Murzik.",
      "« Faça um desejo ! » — « Fais un vœu ! »",
      "Murzik souhaite retrouver Pipoca avant l'anniversaire.",
      "Tant que le ruban ne tombe pas tout seul, interdiction de l'enlever.",
    ],
    bridge: "Sur la place résonne une musique étrange : un son métallique, un tambour et des claquements de mains. Qu'est-ce que c'est ?",
  },
};

const sa4: Lesson = {
  id: "pt-a1-salvador-4",
  level: "A1",
  cityId: "pt-salvador",
  number: 4,
  title: "A capoeira — La capoeira",
  minutes: 7,
  goals: [
    "Comprendre les commandes de la capoeira",
    "Dire « nous » en langage courant : a gente",
    "S'extasier : Que energia !",
  ],
  vocabNote:
    "La capoeira est un art brésilien : moitié combat, moitié danse, sur la musique du berimbau. On ne la « danse » pas, on la « joue » — jogam.",
  vocab: [
    v("ptsa4-1", "Você quer jogar capoeira?", "Tu veux jouer à la capoeira ?",
      "Un maître de capoeira en pantalon blanc tend la main vers Murzik.",
      p("l4-1")),
    v("ptsa4-2", "a roda", "le cercle",
      "Des gens forment un cercle en tapant des mains, deux joueurs au centre.",
      p("l4-2")),
    v("ptsa4-3", "o berimbau", "le berimbau",
      "Un musicien joue d'un instrument en forme d'arc avec une calebasse.",
      p("l4-3")),
    v("ptsa4-4", "Bate palmas!", "Tape des mains !",
      "Bia tape des mains dans le cercle.",
      p("l4-4")),
    v("ptsa4-5", "Abaixa!", "Baisse-toi !",
      "Murzik se baisse agilement pendant qu'une jambe passe au-dessus de lui.",
      p("l4-5")),
    v("ptsa4-6", "A gente canta junto.", "Nous chantons tous ensemble.",
      "Tout le cercle chante, bras levés.",
      p("l4-6")),
    v("ptsa4-7", "Que energia!", "Quelle énergie !",
      "Murzik, ravi, saute dans le cercle.",
      p("l4-7")),
  ],
  dialogue: {
    title: "Le cercle sur la place",
    note:
      "Mestre — « maître, professeur ». Entra ! — « Entre ! ». Ginga — le mouvement de base de la capoeira, un « balancement ».",
    lines: [
      line("murzik", "Que música é essa?", "C'est quoi, cette musique ?"),
      line("bia", "É o berimbau! É uma roda de capoeira.", "C'est le berimbau ! C'est un cercle de capoeira."),
      line("mestre", "Ei, gatinho! Você quer jogar capoeira? Entra na roda!", "Hé, petit chat ! Tu veux jouer à la capoeira ? Entre dans le cercle !"),
      line("murzik", "Eu? Eu não sei…", "Moi ? Je ne sais pas…"),
      line("bia", "Vai, Murzik! A gente bate palmas!", "Vas-y, Murzik ! Nous, on tape des mains !"),
      line("mestre", "Ginga… ginga… Abaixa!", "Balance… balance… Baisse-toi !"),
      line("murzik", "Uau! Que energia!", "Waouh ! Quelle énergie !"),
    ],
    gist: choice("ptsa4-d1", "Que fait Murzik ?", [
      ["Il essaie la capoeira dans le cercle.", true],
      ["Il joue du berimbau.", false],
      ["Il rentre à la maison.", false],
    ]),
  },
  grammar: [
    g(
      "A gente — le « nous » de la conversation",
      [
        "Dans la conversation, les Brésiliens disent souvent a gente — littéralement « les gens » — à la place de nós. Le verbe prend alors la forme de « il » : a gente canta (= nós cantamos), a gente vai (= nós vamos). Comme le « on » français : « on chante » = « nous chantons » !",
        "C'est plus simple qu'il n'y paraît : une seule forme de verbe pour « il, elle, tu et nous ».",
      ],
      [
        ["A gente vai à praia.", "On va à la plage."],
        ["A gente gosta de música.", "On aime la musique."],
      ],
    ),
  ],
  tasks: [
    choice("ptsa4-t1", "Comment dit-on « Nous chantons » en langage courant ?", [
      ["A gente canta.", true],
      ["A gente cantamos.", false],
      ["A gente cantam.", false],
    ], { skill: "grammar" }),
    listen("ptsa4-t2", "Écoute. Que faut-il faire ?", "Abaixa!", [
      ["Se baisser.", true],
      ["Taper des mains.", false],
      ["Chanter.", false],
    ]),
    match("ptsa4-t3", PAIRS, [
      ["a roda", "le cercle"],
      ["o berimbau", "le berimbau"],
      ["Bate palmas!", "Tape des mains !"],
      ["Abaixa!", "Baisse-toi !"],
    ], { skill: "words" }),
    missing("ptsa4-t4", "Quelle lettre manque ? (« énergie »)", "ener", "ia", "g", ["g", "j", "x"]),
    speak("ptsa4-t5", "Você quer jogar capoeira?", "Quero! Mas eu não sei. Você me ensina?", "Je veux bien ! Mais je ne sais pas. Tu m'apprends ?", {
      help: "Réponds à voix haute et demande qu'on t'apprenne.",
    }),
    choice("ptsa4-t6", "Comment dit-on « Gardez la monnaie » ?", [
      ["Pode ficar com o troco.", true],
      ["Me dá o troco.", false],
      ["Quanto fica o troco?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "berimbau",
    itemName: "Petit berimbau",
    itemNameRu: "Berimbau",
    ru: "Oba! Um berimbau!",
    en: "Hourra ! Un berimbau !",
    a11y: "Un petit berimbau contre le mur : un arc en bois avec une corde et une calebasse résonnante.",
    image: p("berimbau"),
    steps: [
      "Après le cercle, le maître offre un petit berimbau à Murzik.",
      "« Você tem ginga ! » — « Tu as le rythme ! »",
      "Murzik essaie : « bing… bing… »",
      "Le berimbau est posé contre le mur.",
    ],
    bridge: "Le matin, les petits-enfants de Dona Celeste s'affairent à l'étal.",
  },
};

const sa5: Lesson = {
  id: "pt-a1-salvador-5",
  level: "A1",
  cityId: "pt-salvador",
  number: 5,
  title: "A família da Celeste — La famille de Celeste",
  minutes: 7,
  goals: [
    "Dire « son » et « sa » : dele, dela",
    "Parler de la famille de quelqu'un",
    "Dire « c'est un secret »",
  ],
  vocabNote:
    "Neto — « petit-fils », neta — « petite-fille », netos — « les petits-enfants » (garçons et filles ensemble).",
  vocab: [
    v("ptsa5-1", "Esta é a neta dela.", "C'est sa petite-fille.",
      "Une fillette aux nattes aide Dona Celeste à façonner les beignets.",
      p("l5-1")),
    v("ptsa5-2", "O neto dela toca tambor.", "Son petit-fils joue du tambour.",
      "Un garçon tapote un petit tambour à côté de l'étal.",
      p("l5-2")),
    v("ptsa5-3", "os netos", "les petits-enfants",
      "Deux enfants enlacent leur grand-mère en robe blanche.",
      p("l5-3")),
    v("ptsa5-4", "Eles ajudam a avó.", "Ils aident leur grand-mère.",
      "Les enfants disposent des serviettes et comptent les pièces.",
      p("l5-4")),
    v("ptsa5-5", "A receita é da família.", "La recette est de famille.",
      "Un vieux cahier de recettes, écrit à la main.",
      p("l5-5")),
    v("ptsa5-6", "É segredo!", "C'est un secret !",
      "Dona Celeste porte un doigt à ses lèvres et fait un clin d'œil.",
      p("l5-6")),
    v("ptsa5-7", "Qual é o nome dele?", "Comment il s'appelle ?",
      "Murzik montre le garçon au tambour.",
      p("l5-7")),
  ],
  dialogue: {
    title: "Les petits-enfants de Dona Celeste",
    note:
      "Todo dia — « tous les jours ». Da avó dela — « de sa grand-mère ».",
    lines: [
      line("murzik", "Dona Celeste, quem são eles?", "Dona Celeste, c'est qui ?"),
      line("celeste", "São os meus netos! Esta é a Ana, e este é o Davi.", "Ce sont mes petits-enfants ! Voici Ana, et voici Davi."),
      line("bia", "O Davi toca tambor? Que legal!", "Davi joue du tambour ? Trop cool !"),
      line("celeste", "Toca! E eles ajudam a avó todo dia.", "Oui ! Et ils aident leur grand-mère tous les jours."),
      line("murzik", "O acarajé da senhora é o melhor! Qual é a receita?", "Votre acarajé est le meilleur ! C'est quoi, la recette ?"),
      line("celeste", "A receita é da família. Da minha avó, da avó dela… É segredo!", "La recette est de famille. De ma grand-mère, de sa grand-mère… C'est un secret !"),
    ],
    gist: choice("ptsa5-d1", "D'où vient la recette de Dona Celeste ?", [
      ["Elle se transmet en famille, de grand-mère en grand-mère.", true],
      ["D'un livre de cuisine.", false],
      ["C'est son petit-fils qui l'a inventée.", false],
    ]),
  },
  grammar: [
    g(
      "« Son » et « sa » : dele, dela",
      [
        "Seu / sua peut vouloir dire « ton », « son » et « sa » — facile de s'y perdre. Alors pour « de lui » et « d'elle », les Brésiliens disent dele (de + ele) et dela (de + ela), placés après le nom : o neto dela — « son petit-fils (à elle) », o nome dele — « son nom (à lui) ». Comme en français « le petit-fils d'elle » !",
        "« Leur » — deles, delas : a casa deles — « leur maison ».",
      ],
      [
        ["O tambor dele é grande.", "Son tambour est grand."],
        ["A avó deles é a Celeste.", "Leur grand-mère, c'est Celeste."],
      ],
    ),
  ],
  tasks: [
    choice("ptsa5-t1", "Comment dit-on « son petit-fils (à elle) » ?", [
      ["o neto dela", true],
      ["o dela neto", false],
      ["a neta dele", false],
    ], { skill: "grammar" }),
    listen("ptsa5-t2", "Écoute. Que dit Dona Celeste à propos de la recette ?", "É segredo!", [
      ["C'est un secret.", true],
      ["C'est simple.", false],
      ["C'est cher.", false],
    ]),
    match("ptsa5-t3", PAIRS, [
      ["o neto", "le petit-fils"],
      ["a neta", "la petite-fille"],
      ["dele", "de lui"],
      ["dela", "d'elle"],
    ], { skill: "words" }),
    spell("ptsa5-t4", "Reconstitue le mot « secret ».", "segredo"),
    speak("ptsa5-t5", "Como é a sua família?", "O meu irmão tem dois filhos. O nome dele é Ivan.", "Mon frère a deux enfants. Il s'appelle Ivan. (Parle de ta famille.)", {
      help: "Parle à voix haute d'un membre de ta famille — avec dele ou dela.",
    }),
    choice("ptsa5-t6", "Comment dit-on « Nous tapons des mains » en langage courant ?", [
      ["A gente bate palmas.", true],
      ["A gente batemos palmas.", false],
      ["Nós bate palmas.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "drum",
    itemName: "Petit tambour",
    itemNameRu: "Tamborzinho",
    ru: "Oba! Um tamborzinho!",
    en: "Hourra ! Un petit tambour !",
    a11y: "Un petit tambour peint en vert, jaune et rouge est posé par terre.",
    image: p("drum"),
    steps: [
      "Davi offre à Murzik son vieux petit tambour.",
      "« Eu tenho um novo ! » — « J'en ai un neuf ! »",
      "Murzik tape : boum-boum-boum !",
      "Le petit tambour est posé près du lit.",
    ],
    bridge: "Le soir, Davi les invite à une répétition de percussionnistes sur la place.",
  },
};

const sa6: Lesson = {
  id: "pt-a1-salvador-6",
  level: "A1",
  cityId: "pt-salvador",
  number: 6,
  title: "Os tambores — Les tambours",
  minutes: 7,
  goals: [
    "Demander qu'on t'apprenne",
    "Dire « apprendre » et « enseigner » : aprender, ensinar",
    "Confirmer : Isso mesmo !",
  ],
  vocabNote:
    "Ensinar — « enseigner à quelqu'un », aprender — « apprendre soi-même ». Ensina para mim ? — « Tu m'apprends ? »",
  vocab: [
    v("ptsa6-1", "Que ritmo!", "Quel rythme !",
      "Vingt percussionnistes en t-shirts colorés jouent sur la place.",
      p("l6-1")),
    v("ptsa6-2", "Eu quero aprender.", "Je veux apprendre.",
      "Murzik regarde les percussionnistes, les yeux brillants.",
      p("l6-2")),
    v("ptsa6-3", "Ensina para mim?", "Tu m'apprends ?",
      "Murzik tire Davi par la manche.",
      p("l6-3")),
    v("ptsa6-4", "Assim?", "Comme ça ?",
      "Murzik frappe le tambour d'un coup de baguette hésitant.",
      p("l6-4")),
    v("ptsa6-5", "Isso mesmo!", "C'est ça !",
      "Davi lève le pouce vers Murzik.",
      p("l6-5")),
    v("ptsa6-6", "Mais alto!", "Plus fort !",
      "Davi fait signe : plus fort !",
      p("l6-6")),
    v("ptsa6-7", "O tambor é pesado.", "Le tambour est lourd.",
      "Murzik essaie de soulever un énorme tambour.",
      p("l6-7")),
  ],
  dialogue: {
    title: "La répétition des percussionnistes",
    note:
      "Baqueta — « baguette de tambour ». Batucada — « musique de percussions ».",
    lines: [
      line("murzik", "Nossa! Que ritmo! Davi, eu quero aprender!", "Waouh ! Quel rythme ! Davi, je veux apprendre !"),
      line("bia", "Davi, você ensina para ele?", "Davi, tu lui apprends ?"),
      line("davi", "Ensino! Pega a baqueta. Bate assim: bum, bum-bum.", "Bien sûr ! Prends la baguette. Frappe comme ça : boum, boum-boum."),
      line("murzik", "Assim? Bum, bum-bum?", "Comme ça ? Boum, boum-boum ?"),
      line("davi", "Isso mesmo! Agora mais alto!", "C'est ça ! Maintenant plus fort !"),
      line("murzik", "Ufa! O tambor é pesado! Mas eu adoro batucada!", "Ouf ! Le tambour est lourd ! Mais j'adore la batucada !"),
    ],
    gist: choice("ptsa6-d1", "Qu'apprend Murzik ?", [
      ["Jouer du tambour.", true],
      ["Chanter.", false],
      ["Préparer l'acarajé.", false],
    ]),
  },
  grammar: [
    g(
      "Aprender et ensinar",
      [
        "Aprender — « apprendre », ensinar — « enseigner (à quelqu'un) ». En français aussi, ce sont deux verbes différents : Eu aprendo português. — J'apprends le portugais. A Bia me ensina. — Bia m'enseigne. Attention au faux ami : ensinar n'est pas « enseigner une matière » seulement, c'est aussi « montrer comment faire ».",
        "Après aprender, devant un verbe, on met généralement a : aprender a tocar — « apprendre à jouer ». Comme le français « apprendre à » !",
      ],
      [
        ["Eu quero aprender a tocar.", "Je veux apprendre à jouer."],
        ["Ele ensina capoeira.", "Il enseigne la capoeira."],
      ],
    ),
  ],
  tasks: [
    choice("ptsa6-t1", "Comment dit-on « Je veux apprendre à jouer » ?", [
      ["Eu quero aprender a tocar.", true],
      ["Eu quero ensinar a tocar.", false],
      ["Eu quero aprender tocar a.", false],
    ], { skill: "grammar" }),
    listen("ptsa6-t2", "Écoute. Que dit Davi ?", "Mais alto!", [
      ["Plus fort !", true],
      ["Plus doucement !", false],
      ["Encore une fois !", false],
    ]),
    match("ptsa6-t3", PAIRS, [
      ["aprender", "apprendre"],
      ["ensinar", "enseigner"],
      ["o tambor", "le tambour"],
      ["Isso mesmo!", "C'est ça !"],
    ], { skill: "words" }),
    missing("ptsa6-t4", "Quelle lettre manque ? (« tambour »)", "tam", "or", "b", ["b", "p", "v"]),
    speak("ptsa6-t5", "O que você quer aprender?", "Eu quero aprender a tocar tambor!", "Je veux apprendre à jouer du tambour !", {
      help: "Dis à voix haute ce que tu veux apprendre.",
    }),
    choice("ptsa6-t6", "Comment dit-on « C'est un secret ! » ?", [
      ["É segredo!", true],
      ["É da família!", false],
      ["Que segredo é?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "pandeiro",
    itemName: "Tambourin",
    itemNameRu: "Pandeiro",
    ru: "Oba! Um pandeiro!",
    en: "Hourra ! Un pandeiro !",
    a11y: "Un petit tambourin pandeiro avec des cymbalettes métalliques est accroché au mur.",
    image: p("pandeiro"),
    steps: [
      "Un des percussionnistes offre un pandeiro à Bia et Murzik.",
      "« Para o samba ! » — « Pour le samba ! »",
      "Murzik le secoue : cling-cling !",
      "Le pandeiro est accroché au mur.",
    ],
    bridge: "Le matin, Dona Celeste leur fait signe avec une cuillère : « Meu filho ! Vem cá ! O papagaio ! »",
  },
};

const sa7: Lesson = {
  id: "pt-a1-salvador-7",
  level: "A1",
  cityId: "pt-salvador",
  number: 7,
  title: "Tá uma delícia! — Un régal !",
  minutes: 8,
  goals: [
    "Comprendre ce qu'on raconte sur Pipoca",
    "Découvrir la forme courte tá = está",
    "Réviser tous les mots de Salvador",
  ],
  vocabNote:
    "Tá — la forme parlée de está, on l'entend partout : Tá bom ! — « D'accord ! », Tá uma delícia ! — « Un régal ! » À l'écrit, mieux vaut está.",
  vocab: [
    v("ptsa7-1", "Tá uma delícia!", "Un régal !",
      "Le perroquet vert, le bec couvert de miettes, est assis au bord de l'étal d'acarajé.",
      p("l7-1")),
    v("ptsa7-2", "Ele comeu um acarajé inteiro!", "Il a mangé un acarajé entier !",
      "Une assiette vide, et à côté un perroquet tout content.",
      p("l7-2")),
    v("ptsa7-3", "sem pimenta, claro", "sans piment, bien sûr",
      "Dona Celeste rit et agite la main.",
      p("l7-3")),
    v("ptsa7-4", "Eles foram para Olinda.", "Ils sont partis pour Olinda.",
      "Une carte : une flèche vers le nord, le long de la côte.",
      p("l7-4")),
    v("ptsa7-5", "o Carnaval", "le Carnaval",
      "Une petite image : des marionnettes géantes et des danseurs avec des parapluies.",
      p("l7-5")),
    v("ptsa7-6", "Fica mais um pouco!", "Reste encore un peu !",
      "Ana retient Murzik par la patte.",
      p("l7-6")),
    v("ptsa7-7", "Que pena que vocês vão embora!", "Quel dommage que vous partiez !",
      "Dona Celeste serre Bia et Murzik dans ses bras.",
      p("l7-7")),
  ],
  dialogue: {
    title: "Ce que le perroquet a dit",
    note:
      "Vem cá ! — « Viens ici ! ». Pousou — « s'est posé, a atterri ». Gulosinho — « petit gourmand ».",
    lines: [
      line("celeste", "Meu filho! Vem cá! O papagaio! Ele pousou aqui no meu tabuleiro.", "Mon petit ! Viens ici ! Le perroquet ! Il s'est posé ici, sur mon étal."),
      line("murzik", "O Pipoca! E o que ele fez?", "Pipoca ! Et qu'est-ce qu'il a fait ?"),
      line("celeste", "Ele comeu um acarajé inteiro! Sem pimenta, claro. E gritou: Tá uma delícia! Tá uma delícia!", "Il a mangé un acarajé entier ! Sans piment, bien sûr. Et il criait : « Un régal ! Un régal ! »"),
      line("bia", "Que gulosinho! E a banda?", "Quel gourmand ! Et le groupe ?"),
      line("celeste", "Eles foram para Olinda. Lá tem Carnaval o ano todo!", "Ils sont partis pour Olinda. Là-bas, c'est Carnaval toute l'année !"),
      line("ana", "Fica mais um pouco, Murzik!", "Reste encore un peu, Murzik !"),
      line("celeste", "Que pena que vocês vão embora! Voltem!", "Quel dommage que vous partiez ! Revenez !"),
    ],
    gist: choice("ptsa7-d1", "Quelle phrase Pipoca a-t-il apprise à Salvador ?", [
      ["« Un régal ! »", true],
      ["« C'est très piquant ! »", false],
      ["« Quel rythme ! »", false],
    ]),
  },
  grammar: [
    g(
      "Tá, tô, tamo — le portugais de la rue",
      [
        "À l'oral, on « raccourcit » souvent estar : está → tá, estou → tô, estamos → tamo. Tô cansado — « je suis fatigué(e) », Tá bom — « d'accord ». Comme en français, où « je suis » devient « chuis » dans la bouche des gens !",
        "Il faut absolument comprendre ces formes, mais toi, tu peux continuer à dire les formes complètes — está, estou. On te comprendra dans tous les cas.",
      ],
      [
        ["Tá bom!", "D'accord !"],
        ["Tô com fome!", "J'ai faim !"],
      ],
    ),
  ],
  tasks: [
    listen("ptsa7-t1", "Examen audio. Que raconte Dona Celeste ?", "O papagaio comeu um acarajé inteiro e gritou: Tá uma delícia! A banda foi para Olinda.", [
      ["Le perroquet a mangé un acarajé, et le groupe est parti pour Olinda.", true],
      ["Le perroquet s'est brûlé avec le piment.", false],
      ["Le groupe est resté à Salvador.", false],
    ]),
    choice("ptsa7-t2", "Que signifie Tá bom ! ?", [
      ["D'accord ! Ça marche !", true],
      ["Très bon !", false],
      ["Salut !", false],
    ], { skill: "words" }),
    build("ptsa7-t3", "Construis la phrase : « Ils sont partis pour Olinda ».", ["Eles", "foram", "para", "Olinda."]),
    missing("ptsa7-t4", "Quelle lettre manque ? (« régal »)", "del", "cia", "í", ["í", "i", "e"]),
    speak("ptsa7-t5", "Fica mais um pouco!", "Que pena! Eu vou sentir saudade!", "Quel dommage ! Vous allez me manquer !", {
      help: "Réponds à voix haute à cet au revoir.",
    }),
    script("ptsa7-t6", "Souviens-toi de tout Salvador. Termine la conversation avec Dona Celeste.", [
      { speaker: CELESTE, text: "Boa noite! O que vai ser?" },
      { speaker: YOU, answer: "Um acarajé, por favor.", options: ["Um acarajé, por favor.", "Um quilo de acarajé.", "É segredo!"] },
      { speaker: CELESTE, text: "Com pimenta ou sem?" },
      { speaker: YOU, answer: "Pouca pimenta, por favor!", options: ["Pouca pimenta, por favor!", "Os dois!", "Mais alto!"] },
      { speaker: CELESTE, text: "Aqui está. Gostou?" },
      { speaker: YOU, answer: "Tá uma delícia! Quanto fica?", options: ["Tá uma delícia! Quanto fica?", "Tanto faz.", "Abaixa!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-salvador",
    itemName: "Photo de Pipoca avec un acarajé",
    itemNameRu: "Foto do Pipoca com acarajé",
    ru: "Oba! Mais uma foto do Pipoca!",
    en: "Hourra ! Encore une photo de Pipoca !",
    a11y:
      "Une photo : le perroquet vert au bord de l'étal tient un morceau d'acarajé dans sa patte, Ana et Davi rient à côté.",
    image: p("photo"),
    steps: [
      "Ana a photographié Pipoca avec son téléphone.",
      "Pipoca avec un morceau d'acarajé dans la patte !",
      "Tout le monde éclate de rire.",
      "Légende : « Tá uma delícia ! » La photo rejoint l'album.",
    ],
    bridge: "L'avion vole vers le nord, vers l'État du Pernambouc.",
  },
};

const story: CityStory = {
  home: {
    name: "Une chambre d'auberge dans le Pelourinho",
    nameRu: "O quarto na pousada do Pelourinho",
    image: p("home"),
    a11y:
      "Une chambre aux hauts plafonds dans une vieille maison bleue. Par la fenêtre : des maisons colorées et un clocher. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "photo-salvador",
  welcomeRu: "Olá, Salvador!",
  welcomeEn: "Bonjour, Salvador !",
  welcomeImage: p("arrival"),
  welcomeA11y:
    "La vieille place du Pelourinho : maisons roses, jaunes et bleues, rue pavée, percussionnistes en t-shirts colorés.",
  departureImage: p("departure"),
  departureA11y: "Dona Celeste et ses petits-enfants font signe depuis l'étal.",
  finale: [
    {
      image: p("photo"),
      a11y: "Murzik colle dans l'album la photo de Pipoca avec l'acarajé.",
      lines: [
        { en: "Dixième page de l'album : Pipoca chez Dona Celeste." },
        { ru: "Tá uma delícia!", en: "Un régal !" },
        { en: "Le ruban à la patte de Murzik tient toujours. Son vœu se réalisera-t-il ?" },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie.",
      lines: [
        { ru: "Salvador completo!", en: "Salvador terminé !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Dona Celeste fait signe au revoir.",
      lines: [
        { ru: "Tchau, Dona Celeste!", en: "Au revoir, Dona Celeste !" },
        { ru: "Próxima parada: Olinda!", en: "Prochain arrêt : Olinda !" },
      ],
    },
    {
      image: p("plane"),
      a11y: "Un avion survole une longue plage bordée de palmiers.",
      lines: [{ ru: "Salvador → Olinda", en: "Salvador → Olinda" }],
    },
    {
      image: pic("pt/olinda/arrival"),
      a11y:
        "Une vieille ville sur une colline au-dessus de la mer : petites maisons colorées, églises, et d'énormes marionnettes de Carnaval dans la rue.",
      lines: [
        { ru: "Olá, Olinda!", en: "Bonjour, Olinda !" },
        { ru: "Que alegria!", en: "Quelle joie !" },
      ],
    },
  ],
};

export const ptSalvadorFr = {
  id: "pt-salvador",
  name: "Salvador",
  namePt: "Salvador",
  lessons: [sa1, sa2, sa3, sa4, sa5, sa6, sa7],
  story,
};
