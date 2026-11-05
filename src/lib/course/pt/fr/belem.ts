import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { PAIRS, YOU, choice, fill, g, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Белен · «Последний концерт» · Повторение всего A1. Рынок Ver-o-Peso, асаи, дневной дождь, звонок бабушке, дорога на концерт, встреча с группой, день рождения доны Лусии в Рио. Пипока говорит все свои фразы и новую: «Parabéns, Dona Lúcia!» */

const p = (name: string) => pic(`pt/belem/${name}`);
const LUCIA = "Dona Lúcia";

const be1: Lesson = {
  id: "pt-a1-belem-1",
  level: "A1",
  cityId: "pt-belem",
  number: 1,
  title: "O cartaz — L'affiche",
  minutes: 7,
  goals: [
    "Savoir où et quand a lieu le concert",
    "Revoir l'heure et les jours de la semaine",
    "Revoir les questions onde, quando, a que horas",
  ],
  vocabNote:
    "Cartaz — « affiche ». Começar — « commencer » : O show começa às nove — « Le concert commence à neuf heures ».",
  vocab: [
    v("ptbe1-1", "Olha o cartaz!", "Regarde, l'affiche !",
      "Une affiche colorée du groupe « Maré Alta » sur un mur près du port.",
      p("l1-1")),
    v("ptbe1-2", "Onde é o show?", "Où est le concert ?",
      "Murzik parcourt l'affiche du doigt.",
      p("l1-2")),
    v("ptbe1-3", "É na praça, perto do rio.", "Sur la place, près du fleuve.",
      "Une place au bord du fleuve où l'on monte une scène.",
      p("l1-3")),
    v("ptbe1-4", "Quando é o show?", "Quand est le concert ?",
      "Bia consulte le calendrier de son téléphone.",
      p("l1-4")),
    v("ptbe1-5", "É amanhã, no sábado.", "Demain, samedi.",
      "Un calendrier : vendredi, et samedi entouré juste à côté.",
      p("l1-5")),
    v("ptbe1-6", "A que horas começa o show?", "À quelle heure commence le concert ?",
      "Murzik tapote sa montre.",
      p("l1-6")),
    v("ptbe1-7", "Começa às nove da noite.", "Il commence à neuf heures du soir.",
      "Une horloge sur neuf heures, des étoiles derrière la fenêtre.",
      p("l1-7")),
  ],
  dialogue: {
    title: "On est arrivés à temps !",
    note:
      "Finalmente — « enfin ». Último — « dernier ». A gente — le « nous » de tous les jours, comme le « on » français.",
    lines: [
      line("bia", "Finalmente, Belém! Murzik, olha o cartaz!", "Enfin, Belém ! Murzik, regarde l'affiche !"),
      line("murzik", "Maré Alta! Onde é o show?", "« Maré Alta » ! Où est le concert ?"),
      line("bia", "É na praça, perto do rio.", "Sur la place, près du fleuve."),
      line("murzik", "E quando é?", "Et c'est quand ?"),
      line("bia", "É amanhã, no sábado. É o último show!", "Demain, samedi. C'est le dernier concert !"),
      line("murzik", "A que horas começa o show?", "À quelle heure commence le concert ?"),
      line("bia", "Começa às nove da noite. A gente chegou a tempo!", "À neuf heures du soir. On est arrivés à temps !"),
    ],
    gist: choice("ptbe1-d1", "Quand est le dernier concert ?", [
      ["Demain, samedi, à neuf heures du soir.", true],
      ["Aujourd'hui à midi.", false],
      ["Dimanche matin.", false],
    ]),
  },
  grammar: [
    g(
      "Révision : les mots interrogatifs",
      [
        "Onde ? — « où ? », Quando ? — « quand ? », A que horas ? — « à quelle heure ? », Quanto ? — « combien ? », Quem ? — « qui ? », Por que ? — « pourquoi ? », Como ? — « comment ? », O que ? — « quoi ? ».",
        "L'heure : às nove — « à neuf heures », à uma — « à une heure ». Da manhã — « du matin », da tarde — « de l'après-midi », da noite — « du soir ».",
      ],
      [
        ["Quem é o cantor? — É o Zeca.", "Qui est le chanteur ? — Zeca."],
        ["A que horas sai o ônibus? — Às oito.", "À quelle heure part le bus ? — À huit heures."],
      ],
    ),
  ],
  tasks: [
    choice("ptbe1-t1", "Comment demander « À quelle heure commence le concert ? »", [
      ["A que horas começa o show?", true],
      ["Quantas horas é o show?", false],
      ["Onde começa o show?", false],
    ], { skill: "grammar" }),
    listen("ptbe1-t2", "Écoute. Où est le concert ?", "É na praça, perto do rio.", [
      ["Sur la place, près du fleuve.", true],
      ["Au théâtre.", false],
      ["À la plage.", false],
    ]),
    match("ptbe1-t3", PAIRS, [
      ["onde", "où"],
      ["quando", "quand"],
      ["quem", "qui"],
      ["como", "comment"],
    ], { skill: "words" }),
    spell("ptbe1-t4", "Reconstitue le mot « samedi ».", "sábado"),
    speak("ptbe1-t5", "A que horas começa o show?", "Começa às nove da noite.", "Il commence à neuf heures du soir.", {
      help: "Réponds à voix haute d'après l'affiche.",
    }),
    choice("ptbe1-t6", "Comment dire « Bon voyage ! » ?", [
      ["Boa viagem!", true],
      ["Bom proveito!", false],
      ["Boa noite!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "poster",
    itemName: "Affiche du concert",
    itemNameRu: "Cartaz do show",
    ru: "Oba! O cartaz do show!",
    en: "Hourra ! L'affiche du concert !",
    a11y: "Une affiche colorée « Maré Alta » avec un tambour et des notes de musique est accrochée au mur.",
    image: p("poster"),
    steps: [
      "La patronne de l'auberge donne à Murzik une affiche en trop.",
      "La même qu'à Rio, mais la dernière ville, c'est Belém.",
      "Murzik l'accroche au-dessus de son lit.",
      "« Amanhã ! » — « Demain ! »",
    ],
    bridge: "Le même matin, Bia emmène Murzik au plus grand marché de la ville — Ver-o-Peso.",
  },
};

const be2: Lesson = {
  id: "pt-a1-belem-2",
  level: "A1",
  cityId: "pt-belem",
  number: 2,
  title: "O Ver-o-Peso — Le marché Ver-o-Peso",
  minutes: 7,
  goals: [
    "Revoir les achats et les prix",
    "Commander un açaí",
    "Dire ce que tu préfères",
  ],
  vocabNote:
    "À Belém, l'açaí ne se mange pas sucré comme dans le sud : il est épais et non sucré — avec du poisson et de la farine de manioc.",
  vocab: [
    v("ptbe2-1", "Eu queria um açaí, por favor.", "Je voudrais un açaí, s'il vous plaît.",
      "Murzik devant un stand d'açaí violet foncé.",
      p("l2-1")),
    v("ptbe2-2", "Com açúcar ou sem açúcar?", "Avec du sucre ou sans ?",
      "La vendeuse tient un sucrier.",
      p("l2-2")),
    v("ptbe2-3", "Sem açúcar, por favor.", "Sans sucre, s'il vous plaît.",
      "Murzik fait signe de la patte : pas de sucre.",
      p("l2-3")),
    v("ptbe2-4", "Quanto custa o quilo de peixe?", "Combien coûte le kilo de poisson ?",
      "Un énorme poisson posé sur la glace.",
      p("l2-4")),
    v("ptbe2-5", "Custa trinta reais.", "Trente reais.",
      "Une pancarte de prix : « R$ 30 ».",
      p("l2-5")),
    v("ptbe2-6", "Eu prefiro o açaí com farinha.", "Je préfère l'açaí avec de la farine de manioc.",
      "Un bol d'açaí saupoudré de farine jaune.",
      p("l2-6")),
    v("ptbe2-7", "É diferente, mas é bom!", "C'est différent, mais c'est bon !",
      "Murzik, les moustaches violettes, se lèche les babines.",
      p("l2-7")),
  ],
  dialogue: {
    title: "L'açaí au marché",
    note:
      "Farinha — la farine de manioc, on en saupoudre presque tout. Diferente — « inhabituel, différent ».",
    lines: [
      line("seller", "Bom dia! O que vocês querem?", "Bonjour ! Vous désirez ?"),
      line("murzik", "Eu queria um açaí, por favor.", "Je voudrais un açaí, s'il vous plaît."),
      line("seller", "Com açúcar ou sem açúcar?", "Avec du sucre ou sans ?"),
      line("bia", "Aqui a gente come sem açúcar. Com farinha!", "Ici, on le mange sans sucre. Avec de la farine de manioc !"),
      line("murzik", "Então sem açúcar, por favor. Quanto custa?", "Alors sans sucre, s'il vous plaît. Combien ça coûte ?"),
      line("seller", "Dez reais.", "Dix reais."),
      line("murzik", "Hmm… É diferente, mas é bom!", "Hmm… C'est inhabituel, mais c'est bon !"),
    ],
    gist: choice("ptbe2-d1", "Comment mange-t-on l'açaí à Belém ?", [
      ["Sans sucre, avec de la farine de manioc.", true],
      ["Avec de la glace et du sucre.", false],
      ["Avec du lait et de la banane.", false],
    ]),
  },
  grammar: [
    g(
      "Révision : queria, prefiro, quanto custa",
      [
        "Pour demander poliment — Eu queria… (« je voudrais… », comme le conditionnel français de politesse !). Pour comparer — Eu prefiro… (« je préfère… »). Les prix : Quanto custa ? pour une chose, Quanto custam ? pour plusieurs.",
        "Com — « avec », sem — « sans » : com açúcar, sem açúcar, com gelo, sem gelo.",
      ],
      [
        ["Quanto custam as bananas?", "Combien coûtent les bananes ?"],
        ["Um suco sem gelo, por favor.", "Un jus sans glaçons, s'il vous plaît."],
      ],
    ),
  ],
  tasks: [
    fill("ptbe2-t1", "Ajoute le mot : « Combien coûtent les mangues ? »", "Quanto", "as mangas?", "custam", ["custam", "custa", "custo"], { skill: "grammar" }),
    listen("ptbe2-t2", "Écoute. Combien coûte le poisson ?", "Custa trinta reais.", [
      ["Trente reais.", true],
      ["Treize reais.", false],
      ["Trois reais.", false],
    ]),
    match("ptbe2-t3", PAIRS, [
      ["com", "avec"],
      ["sem", "sans"],
      ["o peixe", "le poisson"],
      ["o açúcar", "le sucre"],
    ], { skill: "words" }),
    missing("ptbe2-t4", "Quelle lettre manque-t-il ? (« sucre »)", "a", "úcar", "ç", ["ç", "s", "c"]),
    speak("ptbe2-t5", "Bom dia! O que você quer?", "Eu queria um açaí sem açúcar, por favor.", "Je voudrais un açaí sans sucre, s'il vous plaît.", {
      help: "Commande à voix haute.",
    }),
    choice("ptbe2-t6", "Comment dire « Je préfère le poisson » ?", [
      ["Eu prefiro peixe.", true],
      ["Eu prefere peixe.", false],
      ["Eu preferi peixe amanhã.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cuia",
    itemName: "Calebasse peinte",
    itemNameRu: "Cuia",
    ru: "Oba! Uma cuia!",
    en: "Hourra ! Une calebasse !",
    a11y: "Un bol rond noir en calebasse, peint de fleurs blanches, est posé sur la table.",
    image: p("cuia"),
    steps: [
      "Au marché, on vend des bols faits de calebasses séchées — des cuias.",
      "On y mange l'açaí et la soupe tacacá.",
      "Murzik choisit une noire, à fleurs blanches.",
      "« Para o meu café em Paris ! » — « Pour mon café à Paris ! »",
    ],
    bridge: "À midi, le ciel s'assombrit soudain. Les vendeurs couvrent calmement leurs étals.",
  },
};

const be3: Lesson = {
  id: "pt-a1-belem-3",
  level: "A1",
  cityId: "pt-belem",
  number: 3,
  title: "A chuva da tarde — La pluie de l'après-midi",
  minutes: 7,
  goals: [
    "Revoir la météo",
    "Dire ce qui va se passer : vai chover",
    "Se donner rendez-vous « après la pluie »",
  ],
  vocabNote:
    "À Belém, il pleut fort presque tous les après-midi. Les gens se donnent même rendez-vous « Encontro você depois da chuva » — « On se retrouve après la pluie ».",
  vocab: [
    v("ptbe3-1", "Vai chover.", "Il va pleuvoir.",
      "Des nuages noirs se rassemblent au-dessus du marché.",
      p("l3-1")),
    v("ptbe3-2", "Está chovendo muito!", "Il pleut des cordes !",
      "Un mur de pluie ; Murzik s'abrite sous un auvent.",
      p("l3-2")),
    v("ptbe3-3", "Chove todo dia à tarde.", "Il pleut tous les après-midi.",
      "La patronne de l'auberge boit calmement son café sous l'auvent.",
      p("l3-3")),
    v("ptbe3-4", "Está quente e úmido.", "Il fait chaud et humide.",
      "Murzik, le poil mouillé et plaqué, s'évente.",
      p("l3-4")),
    v("ptbe3-5", "Depois da chuva", "après la pluie",
      "Le soleil pointe son nez, les rues mouillées brillent.",
      p("l3-5")),
    v("ptbe3-6", "Antes do show", "avant le concert",
      "Une horloge à côté de l'affiche.",
      p("l3-6")),
    v("ptbe3-7", "Já parou!", "Ça s'est déjà arrêté !",
      "Murzik sort de sous l'auvent ; un arc-en-ciel au-dessus du fleuve.",
      p("l3-7")),
  ],
  dialogue: {
    title: "Sous l'auvent",
    note:
      "Parar — « s'arrêter » : já parou — « ça s'est déjà arrêté ». Meia hora — « une demi-heure ».",
    lines: [
      line("murzik", "Bia, olha o céu! Vai chover.", "Bia, regarde le ciel ! Il va pleuvoir."),
      line("bia", "Claro! Aqui chove todo dia à tarde.", "Bien sûr ! Ici, il pleut tous les après-midi."),
      line("murzik", "Nossa! Está chovendo muito!", "Ouh là ! Il pleut des cordes !"),
      line("bia", "Não se preocupe. A chuva dura meia hora.", "Ne t'inquiète pas. La pluie dure une demi-heure."),
      line("murzik", "Está quente e úmido… Eu prefiro o frio de Curitiba!", "Il fait chaud et humide… Je préfère le froid de Curitiba !"),
      line("bia", "Olha! Já parou!", "Regarde ! Ça s'est déjà arrêté !"),
      line("murzik", "E o show é amanhã. Antes do show, vamos ligar para a Dona Lúcia?", "Et le concert, c'est demain. On appelle Dona Lúcia avant le concert ?"),
    ],
    gist: choice("ptbe3-d1", "Combien de temps dure la pluie à Belém ?", [
      ["Une demi-heure.", true],
      ["Toute la journée.", false],
      ["Une semaine.", false],
    ]),
  },
  grammar: [
    g(
      "Révision : vai + verbe, estar + -ndo",
      [
        "Ce qui va arriver — ir + verbe : vai chover — « il va pleuvoir », vou ligar — « je vais téléphoner ». C'est exactement le futur proche français ! Ce qui se passe maintenant — estar + -ndo : está chovendo — « il est en train de pleuvoir ».",
        "Antes de — « avant », depois de — « après » : antes do show, depois da chuva.",
      ],
      [
        ["Amanhã vai fazer sol.", "Demain, il va faire beau."],
        ["Depois do almoço nós vamos ao rio.", "Après le déjeuner, nous allons au fleuve."],
      ],
    ),
  ],
  tasks: [
    choice("ptbe3-t1", "Comment dire « Il va pleuvoir » ?", [
      ["Vai chover.", true],
      ["Vai chove.", false],
      ["Chovi amanhã.", false],
    ], { skill: "grammar" }),
    listen("ptbe3-t2", "Écoute. Quand pleut-il à Belém ?", "Chove todo dia à tarde.", [
      ["Tous les après-midi.", true],
      ["Seulement la nuit.", false],
      ["Jamais.", false],
    ]),
    match("ptbe3-t3", PAIRS, [
      ["a chuva", "la pluie"],
      ["úmido", "humide"],
      ["antes de", "avant"],
      ["depois de", "après"],
    ], { skill: "words" }),
    spell("ptbe3-t4", "Reconstitue le mot « pluie ».", "chuva"),
    speak("ptbe3-t5", "Como está o tempo hoje?", "Está quente. Vai chover à tarde.", "Il fait chaud. Il va pleuvoir cet après-midi. (Tu peux aussi parler de ta météo à toi.)", {
      help: "Parle de la météo à voix haute.",
    }),
    choice("ptbe3-t6", "Comment dire « Quel froid ! » ?", [
      ["Que frio!", true],
      ["Que calor!", false],
      ["Que lindo!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "raincoat",
    itemName: "Imperméable",
    itemNameRu: "Capa de chuva",
    ru: "Oba! Uma capa de chuva!",
    en: "Hourra ! Un imperméable !",
    a11y: "Un imperméable jaune à capuche, dégoulinant, est accroché à un crochet.",
    image: p("raincoat"),
    steps: [
      "Un vendeur du marché tend à Murzik un imperméable jaune.",
      "« Para amanhã à tarde ! » — « Pour demain après-midi ! »",
      "Murzik l'essaie : la capuche couvre ses oreilles.",
      "L'imperméable sèche sur son crochet.",
    ],
    bridge: "Le soir, Bia téléphone à sa grand-mère à Rio.",
  },
};

const be4: Lesson = {
  id: "pt-a1-belem-4",
  level: "A1",
  cityId: "pt-belem",
  number: 4,
  title: "Alô, vovó! — Allô, mamie !",
  minutes: 7,
  goals: [
    "Parler au téléphone",
    "Raconter où on a été",
    "Revoir le passé",
  ],
  vocabNote:
    "Au téléphone, les Brésiliens répondent « Alô ? » — comme « allô » ! Saudade — le manque de quelqu'un qu'on aime : Estou com saudade — « tu me manques ».",
  vocab: [
    v("ptbe4-1", "Alô? Quem fala?", "Allô ? Qui est à l'appareil ?",
      "Dona Lúcia, avec ses lunettes, porte le téléphone à son oreille.",
      p("l4-1")),
    v("ptbe4-2", "Sou eu, vovó! A Bia!", "C'est moi, mamie ! Bia !",
      "Bia crie joyeusement dans le téléphone.",
      p("l4-2")),
    v("ptbe4-3", "Como foi a viagem?", "Comment s'est passé le voyage ?",
      "Lúcia lève les sourcils, surprise.",
      p("l4-3")),
    v("ptbe4-4", "Nós estamos em Belém.", "Nous sommes à Belém.",
      "Murzik se penche vers le téléphone, près d'une fenêtre avec vue sur le fleuve.",
      p("l4-4")),
    v("ptbe4-5", "Nós viajamos pelo Brasil todo!", "Nous avons voyagé dans tout le Brésil !",
      "Murzik brandit l'album de photos de Pipoca.",
      p("l4-5")),
    v("ptbe4-6", "Estou com saudade!", "Vous me manquez !",
      "Lúcia porte la main à son cœur.",
      p("l4-6")),
    v("ptbe4-7", "Até domingo!", "À dimanche !",
      "Bia fait un signe de la main en souriant, le téléphone à l'oreille.",
      p("l4-7")),
  ],
  dialogue: {
    title: "Un coup de fil à mamie",
    note:
      "A festa — « la fête ». Ainda não — « pas encore ». Domingo — « dimanche ».",
    lines: [
      line("lucia", "Alô? Quem fala?", "Allô ? Qui est à l'appareil ?"),
      line("bia", "Sou eu, vovó! A Bia! E o Murzik!", "C'est moi, mamie ! Bia ! Et Murzik !"),
      line("lucia", "Ai, que bom! Como foi a viagem? Onde vocês estão?", "Oh, quelle joie ! Comment s'est passé le voyage ? Où êtes-vous ?"),
      line("murzik", "Nós estamos em Belém. Nós viajamos pelo Brasil todo!", "Nous sommes à Belém. Nous avons voyagé dans tout le Brésil !"),
      line("lucia", "E o Pipoca? Vocês encontraram o Pipoca?", "Et Pipoca ? Vous avez retrouvé Pipoca ?"),
      line("bia", "Ainda não. Mas amanhã a banda faz o último show aqui!", "Pas encore. Mais demain, le groupe donne son dernier concert ici !"),
      line("lucia", "A minha festa é no domingo… Estou com saudade!", "Ma fête, c'est dimanche… Vous me manquez !"),
      line("murzik", "Nós também! Até domingo, Dona Lúcia!", "Vous aussi ! À dimanche, Dona Lúcia !"),
    ],
    gist: choice("ptbe4-d1", "Quand a lieu la fête de Dona Lúcia ?", [
      ["Dimanche.", true],
      ["Aujourd'hui.", false],
      ["Dans un mois.", false],
    ]),
  },
  grammar: [
    g(
      "Révision : le passé",
      [
        "-ar : eu viajei, ele viajou, nós viajamos. -er / -ir : eu comi, ele comeu, nós comemos ; eu abri, ele abriu. Pour les verbes réguliers, la forme nós est la même qu'au présent : viajamos, comemos, abrimos — « nous voyageons, mangeons, ouvrons » et « nous avons voyagé, mangé, ouvert ». Pas de participe passé à accorder, contrairement au français !",
        "Irréguliers : fui / foi / fomos (ir, ser), fiz / fez (fazer), tive / teve (ter), vi / viu (ver).",
      ],
      [
        ["Nós vimos os botos no rio.", "Nous avons vu les dauphins dans le fleuve."],
        ["Ontem eu comi açaí.", "Hier, j'ai mangé de l'açaí."],
      ],
    ),
  ],
  tasks: [
    choice("ptbe4-t1", "Comment dire « Hier, j'ai mangé du poisson » ?", [
      ["Ontem eu comi peixe.", true],
      ["Ontem eu como peixe.", false],
      ["Ontem eu comeu peixe.", false],
    ], { skill: "grammar" }),
    listen("ptbe4-t2", "Écoute. Que dit Dona Lúcia ?", "Estou com saudade!", [
      ["Vous me manquez !", true],
      ["Je suis fatiguée !", false],
      ["J'ai chaud !", false],
    ]),
    match("ptbe4-t3", PAIRS, [
      ["viajamos", "nous avons voyagé"],
      ["vimos", "nous avons vu"],
      ["fomos", "nous sommes allés"],
      ["fizemos", "nous avons fait"],
    ], { skill: "words" }),
    missing("ptbe4-t4", "Quelle lettre manque-t-il ? (« manque, nostalgie »)", "sauda", "e", "d", ["d", "t", "j"]),
    speak("ptbe4-t5", "Alô? Quem fala?", "Alô! Sou eu! Tudo bem?", "Allô ! C'est moi ! Ça va ?", {
      help: "Réponds au téléphone à voix haute.",
    }),
    choice("ptbe4-t6", "Comment dire « Nous sommes à Belém » ?", [
      ["Nós estamos em Belém.", true],
      ["Nós somos em Belém.", false],
      ["Nós está em Belém.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "candles",
    itemName: "Bougies d'anniversaire",
    itemNameRu: "Velas de aniversário",
    ru: "Oba! As velas!",
    en: "Hourra ! Les bougies !",
    a11y: "Dans une petite boîte, deux bougies-chiffres : un huit et un zéro.",
    image: p("candles"),
    steps: [
      "Après le coup de fil, Bia et Murzik vont au magasin.",
      "Ils achètent deux bougies-chiffres : 8 et 0.",
      "« Oitenta anos ! » — « Quatre-vingts ans ! »",
      "Les bougies rejoignent le châle et la topaze.",
    ],
    bridge: "Samedi. Après la pluie, Murzik et Bia partent pour le concert.",
  },
};

const be5: Lesson = {
  id: "pt-a1-belem-5",
  level: "A1",
  cityId: "pt-belem",
  number: 5,
  title: "A caminho do show — En route pour le concert",
  minutes: 7,
  goals: [
    "Revoir l'itinéraire et les transports",
    "Acheter les billets à l'entrée",
    "Revoir les nombres",
  ],
  vocabNote:
    "Ingresso — un billet de concert. Fila — « file d'attente ». Lotado — « bondé, plein de monde ».",
  vocab: [
    v("ptbe5-1", "Como a gente chega na praça?", "Comment est-ce qu'on arrive à la place ?",
      "Murzik et Bia demandent leur chemin à un chauffeur de taxi.",
      p("l5-1")),
    v("ptbe5-2", "Vocês podem ir a pé.", "Vous pouvez y aller à pied.",
      "Le chauffeur montre le chemin le long des quais.",
      p("l5-2")),
    v("ptbe5-3", "Siga em frente e vire à esquerda.", "Allez tout droit et tournez à gauche.",
      "Des flèches sur le pavé mouillé : tout droit, puis à gauche.",
      p("l5-3")),
    v("ptbe5-4", "Que fila enorme!", "Quelle file énorme !",
      "Une longue file d'attente à l'entrée de la place.",
      p("l5-4")),
    v("ptbe5-5", "Dois ingressos, por favor.", "Deux billets, s'il vous plaît.",
      "Murzik tend l'argent au guichet.",
      p("l5-5")),
    v("ptbe5-6", "São quarenta reais.", "Ça fait quarante reais.",
      "Le caissier lève quatre doigts.",
      p("l5-6")),
    v("ptbe5-7", "Está lotado!", "C'est bondé !",
      "La place est pleine à craquer ; des lumières au-dessus de la scène.",
      p("l5-7")),
  ],
  dialogue: {
    title: "À l'entrée",
    note:
      "Cada — « chacun » : vinte cada — « vingt chacun ». Pertinho — « tout près » (de perto).",
    lines: [
      line("murzik", "Com licença, como a gente chega na praça?", "Excusez-moi, comment on arrive à la place ?"),
      line("driver", "É pertinho! Vocês podem ir a pé. Siga em frente e vire à esquerda.", "C'est tout près ! Vous pouvez y aller à pied. Allez tout droit et tournez à gauche."),
      line("bia", "Obrigada!", "Merci !"),
      line("murzik", "Olha! Que fila enorme!", "Regarde ! Quelle file énorme !"),
      line("bia", "Dois ingressos, por favor.", "Deux billets, s'il vous plaît."),
      line("cashier", "Vinte cada. São quarenta reais.", "Vingt chacun. Ça fait quarante reais."),
      line("murzik", "Nossa, está lotado! Onde está o palco?", "Ouh là, c'est bondé ! Où est la scène ?"),
    ],
    gist: choice("ptbe5-d1", "Combien coûtent les deux billets ?", [
      ["Quarante reais.", true],
      ["Vingt reais.", false],
      ["Quatorze reais.", false],
    ]),
  },
  grammar: [
    g(
      "Révision : l'itinéraire et les transports",
      [
        "L'itinéraire : siga em frente — « allez tout droit », vire à direita / à esquerda — « tournez à droite / à gauche ». Les transports : de ônibus, de táxi, de barco, mais a pé — « à pied » — exactement comme en français : « à » + « pied » !",
        "Les dizaines : vinte, trinta, quarenta, cinquenta… cem.",
      ],
      [
        ["Eu vou de ônibus, e você?", "Moi, j'y vais en bus, et toi ?"],
        ["A praça fica à direita.", "La place est à droite."],
      ],
    ),
  ],
  tasks: [
    choice("ptbe5-t1", "Comment dire « à pied » ?", [
      ["a pé", true],
      ["de pé", false],
      ["no pé", false],
    ], { skill: "grammar" }),
    listen("ptbe5-t2", "Écoute. Par où aller ?", "Siga em frente e vire à esquerda.", [
      ["Tout droit, puis à gauche.", true],
      ["Tout droit, puis à droite.", false],
      ["En arrière.", false],
    ]),
    match("ptbe5-t3", PAIRS, [
      ["o ingresso", "le billet de concert"],
      ["a fila", "la file d'attente"],
      ["o palco", "la scène"],
      ["lotado", "bondé"],
    ], { skill: "words" }),
    spell("ptbe5-t4", "Reconstitue le mot « quarante ».", "quarenta"),
    speak("ptbe5-t5", "Boa noite! Quantos ingressos?", "Dois ingressos, por favor.", "Deux billets, s'il vous plaît.", {
      help: "Achète les billets à voix haute.",
    }),
    choice("ptbe5-t6", "Comment dire « Allez tout droit ! » ?", [
      ["Siga em frente!", true],
      ["Estou atrasado!", false],
      ["Vire à direita!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "wristband",
    itemName: "Bracelet du concert",
    itemNameRu: "Pulseira do show",
    ru: "Oba! A pulseira do show!",
    en: "Hourra ! Le bracelet du concert !",
    a11y: "Un bracelet en tissu bleu imprimé « Maré Alta — Belém ».",
    image: p("wristband"),
    steps: [
      "Le caissier leur passe des bracelets bleus aux pattes.",
      "« Maré Alta — Belém. O último show ! »",
      "Murzik se faufile au plus près de la scène.",
      "Les lumières s'éteignent. Ça commence !",
    ],
    bridge: "Zeca et Tiago montent sur scène. Tiago pose un grand tambour — celui-là même de Rio.",
  },
};

const be6: Lesson = {
  id: "pt-a1-belem-6",
  level: "A1",
  cityId: "pt-belem",
  number: 6,
  title: "O Pipoca! — Pipoca !",
  minutes: 8,
  goals: [
    "Reconnaître Pipoca à ses phrases",
    "Rencontrer le groupe",
    "Revoir les phrases de toutes les villes",
  ],
  vocabNote:
    "Tambor — « tambour ». Case — « étui, caisse » (les Brésiliens disent [kè-zie]). Microfone — « micro ».",
  vocab: [
    v("ptbe6-1", "Bom dia, Murzik!", "Bonjour, Murzik !",
      "Un perroquet vert jaillit du tambour et se pose sur le micro.",
      p("l6-1")),
    v("ptbe6-2", "É o Pipoca!", "C'est Pipoca !",
      "Murzik et Bia sautent de joie dans la foule.",
      p("l6-2")),
    v("ptbe6-3", "Ele viajou no case do tambor!", "Il a voyagé dans la caisse du tambour !",
      "Tiago ouvre la caisse vide — des plumes et des miettes à l'intérieur.",
      p("l6-3")),
    v("ptbe6-4", "Vocês conhecem esse papagaio?", "Vous connaissez ce perroquet ?",
      "Zeca, le chanteur, regarde la salle, surpris, micro à la main.",
      p("l6-4")),
    v("ptbe6-5", "Ele é nosso! Ele é da Dona Lúcia!", "Il est à nous ! Il est à Dona Lúcia !",
      "Murzik agite les pattes depuis la scène.",
      p("l6-5")),
    v("ptbe6-6", "Nós procuramos vocês em todo o Brasil!", "On vous a cherchés dans tout le Brésil !",
      "Bia déplie la vieille affiche de Rio.",
      p("l6-6")),
    v("ptbe6-7", "Inacreditável!", "Incroyable !",
      "Les musiciens rient, la salle applaudit.",
      p("l6-7")),
  ],
  dialogue: {
    title: "Le dernier concert",
    note:
      "Pipoca dit toutes les phrases qu'il a apprises en route. Tu te souviens où il les a entendues ? Sobe — « monte » (sur scène).",
    lines: [
      line("pipoca", "Bom dia, Murzik! Mais um café! Quanto custa? Que frio! Que gol!", "Bonjour, Murzik ! Encore un café ! Combien ça coûte ? Quel froid ! Quel but !"),
      line("murzik", "É o Pipoca!", "C'est Pipoca !"),
      line("pipoca", "Que lindo! Olha o jacaré! Estou atrasado! Siga em frente!", "Quelle beauté ! Regarde, le caïman ! Je suis en retard ! Allez tout droit !"),
      line("zeca", "Vocês conhecem esse papagaio?", "Vous connaissez ce perroquet ?"),
      line("bia", "Ele é nosso! Ele é da minha avó! Nós procuramos vocês em todo o Brasil!", "Il est à nous ! Il est à ma grand-mère ! On vous a cherchés dans tout le Brésil !"),
      line("pipoca", "Tá uma delícia! Vamos dançar! Estou com calor! Boa viagem!", "Un régal ! On danse ! J'ai trop chaud ! Bon voyage !"),
      line("tiago", "Ele viajou no case do tambor! Desde o Rio!", "Il a voyagé dans la caisse du tambour ! Depuis Rio !"),
      line("zeca", "Inacreditável! Sobe, Murzik!", "Incroyable ! Monte, Murzik !"),
    ],
    gist: choice("ptbe6-d1", "Comment Pipoca a-t-il voyagé avec le groupe depuis Rio ?", [
      ["Dans la caisse du tambour.", true],
      ["Dans une cage sur un siège de bus.", false],
      ["Sur l'épaule de Zeca.", false],
    ]),
  },
  grammar: [
    g(
      "Révision : ser, estar, ter",
      [
        "Ser — qui, quoi, à qui, d'où (le permanent) : Ele é da Dona Lúcia. Estar — où, comment (maintenant) : O Pipoca está no microfone — « Pipoca est sur le micro ». Mais pour les événements — ser : O show é na praça. Ter — « avoir » : A banda tem um tambor. Ser et estar = « être » en français : c'est le français qui n'en a qu'un !",
        "Ce sont les trois verbes les plus fréquents du portugais. Tu les connais déjà tous !",
      ],
      [
        ["O Zeca é cantor. Ele está no palco.", "Zeca est chanteur. Il est sur scène."],
        ["O Tiago tem um tambor grande.", "Tiago a un grand tambour."],
      ],
    ),
  ],
  tasks: [
    choice("ptbe6-t1", "Choisis la bonne phrase : « Pipoca est sur scène ».", [
      ["O Pipoca está no palco.", true],
      ["O Pipoca é no palco.", false],
      ["O Pipoca tem no palco.", false],
    ], { skill: "grammar" }),
    listen("ptbe6-t2", "Écoute Pipoca. Il a appris cette phrase dans le Pantanal. Que dit-il ?", "Olha o jacaré!", [
      ["Regarde, le caïman !", true],
      ["Regarde, le but !", false],
      ["Regarde, l'affiche !", false],
    ]),
    match("ptbe6-t3", PAIRS, [
      ["Que frio!", "Curitiba"],
      ["Que gol!", "Florianópolis"],
      ["Tá uma delícia!", "Salvador"],
      ["Boa viagem!", "Manaus"],
    ], { skill: "review" }),
    missing("ptbe6-t4", "Quelle lettre manque-t-il ? (« tambour »)", "ta", "bor", "m", ["m", "n", "nh"]),
    speak("ptbe6-t5", "Vocês conhecem esse papagaio?", "Sim! Ele é nosso! Ele é o Pipoca!", "Oui ! Il est à nous ! C'est Pipoca !", {
      help: "Réponds au chanteur à voix haute.",
    }),
    choice("ptbe6-t6", "Où Pipoca a-t-il appris « Estou atrasado ! » ?", [
      ["À Brasília, à la gare routière.", true],
      ["À la plage, à Florianópolis.", false],
      ["Sur le bateau, à Manaus.", false],
    ], { skill: "words" }),
  ],
  reward: {
    itemId: "drumstick",
    itemName: "Baguette de tambour",
    itemNameRu: "Baqueta",
    ru: "Oba! A baqueta do Tiago!",
    en: "Hourra ! La baguette de Tiago !",
    a11y: "Une baguette de tambour en bois, signée par tous les musiciens de « Maré Alta ».",
    image: p("drumstick"),
    steps: [
      "Après le concert, Tiago offre à Murzik une baguette de tambour.",
      "Tous les musiciens la signent.",
      "« Desculpa, Murzik ! O meu celular também estava no case ! » — « Pardon, Murzik ! Mon téléphone était aussi dans la caisse ! »",
      "Pipoca est posé sur l'épaule de Murzik et n'en bouge plus.",
    ],
    bridge: "Zeca dit : « Amanhã nós vamos ao Rio com vocês ! Para a festa ! » Au matin, tout le monde s'envole pour Rio.",
  },
};

const be7: Lesson = {
  id: "pt-a1-belem-7",
  level: "A1",
  cityId: "pt-belem",
  number: 7,
  title: "Parabéns, Dona Lúcia! — Joyeux anniversaire, Dona Lúcia !",
  minutes: 8,
  goals: [
    "Souhaiter un joyeux anniversaire",
    "Offrir un cadeau",
    "Revoir tout le niveau A1",
  ],
  vocabNote:
    "Parabéns ! — « Félicitations ! » et « Joyeux anniversaire ! ». Felicidades ! — « Tous mes vœux ! ». A senhora — le « vous » poli pour une dame âgée.",
  vocab: [
    v("ptbe7-1", "Parabéns, Dona Lúcia!", "Joyeux anniversaire, Dona Lúcia !",
      "Pipoca vole dans la pièce et se pose sur l'épaule de Dona Lúcia.",
      p("l7-1")),
    v("ptbe7-2", "Pipoca! Você voltou!", "Pipoca ! Tu es revenu !",
      "Dona Lúcia pleure de joie et caresse le perroquet.",
      p("l7-2")),
    v("ptbe7-3", "Este presente é para a senhora.", "Ce cadeau est pour vous.",
      "Murzik tend une boîte en papier vert.",
      p("l7-3")),
    v("ptbe7-4", "Que lindo! Muito obrigada!", "Quelle beauté ! Merci beaucoup !",
      "Lúcia passe le châle à perroquets sur ses épaules.",
      p("l7-4")),
    v("ptbe7-5", "É o álbum do Pipoca.", "C'est l'album de Pipoca.",
      "Lúcia feuillette l'album : Pipoca dans chaque ville.",
      p("l7-5")),
    v("ptbe7-6", "Felicidades!", "Tous mes vœux !",
      "Tout le monde lève son verre de jus devant un gâteau aux bougies « 80 ».",
      p("l7-6")),
    v("ptbe7-7", "Vamos sambar!", "Dansons la samba !",
      "Murzik danse la samba pour la première fois, avec Dona Lúcia.",
      p("l7-7")),
  ],
  dialogue: {
    title: "La fête",
    note:
      "Voltou — « est revenu ». Inteiro — « entier ». Vamos sambar — « dansons la samba ».",
    lines: [
      line("pipoca", "Parabéns, Dona Lúcia!", "Joyeux anniversaire, Dona Lúcia !"),
      line("lucia", "Pipoca! Você voltou! Ai, que alegria!", "Pipoca ! Tu es revenu ! Oh, quelle joie !"),
      line("murzik", "Parabéns, Dona Lúcia! Este presente é para a senhora.", "Joyeux anniversaire, Dona Lúcia ! Ce cadeau est pour vous."),
      line("lucia", "Que lindo! Um xale com papagaios! E um topázio! Muito obrigada!", "Quelle beauté ! Un châle à perroquets ! Et une topaze ! Merci beaucoup !"),
      line("bia", "E este é o álbum do Pipoca. Ele viajou pelo Brasil inteiro!", "Et voici l'album de Pipoca. Il a voyagé dans tout le Brésil !"),
      line("claudia", "Felicidades, mamãe!", "Tous mes vœux, maman !"),
      line("zeca", "E agora: música! Vamos sambar!", "Et maintenant : la musique ! Dansons la samba !"),
      line("murzik", "Dona Lúcia, a senhora quer dançar comigo?", "Dona Lúcia, voulez-vous danser avec moi ?"),
    ],
    gist: choice("ptbe7-d1", "Qu'offre-t-on à Dona Lúcia ?", [
      ["Un châle, une topaze et l'album de Pipoca.", true],
      ["Une nouvelle cage pour Pipoca.", false],
      ["Des billets pour Paris.", false],
    ]),
  },
  grammar: [
    g(
      "Le « vous » poli : o senhor, a senhora",
      [
        "Aux personnes âgées et aux aînés qu'on ne connaît pas, on s'adresse avec o senhor (à un homme) et a senhora (à une femme). Le verbe se conjugue comme avec você : A senhora quer dançar ? Para a senhora — « pour vous ». C'est le vouvoiement portugais !",
        "C'est pour ça qu'on dit « Seu Raimundo » et « Dona Lúcia » au Brésil : seu est le raccourci de senhor.",
      ],
      [
        ["O senhor fala inglês?", "Vous parlez anglais ?"],
        ["Obrigado, senhora!", "Merci, madame !"],
      ],
    ),
  ],
  tasks: [
    listen("ptbe7-t1", "Examen audio. Que se passe-t-il à la fête ?", "O Pipoca voltou e disse: Parabéns, Dona Lúcia! O Murzik deu um presente, e todo mundo dançou samba.", [
      ["Pipoca est revenu et a souhaité l'anniversaire de Dona Lúcia, et tout le monde a dansé la samba.", true],
      ["Pipoca s'est envolé de nouveau.", false],
      ["La fête a été annulée à cause de la pluie.", false],
    ]),
    choice("ptbe7-t2", "Comment demander poliment à une dame âgée « Voulez-vous un café ? »", [
      ["A senhora quer um café?", true],
      ["A senhora quero um café?", false],
      ["Você senhora quer café?", false],
    ], { skill: "grammar" }),
    match("ptbe7-t3", PAIRS, [
      ["Parabéns!", "Joyeux anniversaire !"],
      ["Felicidades!", "Tous mes vœux !"],
      ["o presente", "le cadeau"],
      ["o bolo", "le gâteau"],
    ], { skill: "words" }),
    missing("ptbe7-t4", "Quelle lettre manque-t-il ? (« Félicitations ! »)", "Parab", "ns!", "é", ["é", "e", "ê"]),
    speak("ptbe7-t5", "Hoje é o meu aniversário!", "Parabéns! Felicidades!", "Joyeux anniversaire ! Tous mes vœux !", {
      help: "Souhaite l'anniversaire à voix haute.",
    }),
    script("ptbe7-t6", "Souviens-toi de tout le A1. Parle avec Dona Lúcia à la fête.", [
      { speaker: LUCIA, text: "Oi! Tudo bem? Que bom ver você!" },
      { speaker: YOU, answer: "Tudo ótimo! Parabéns, Dona Lúcia!", options: ["Tudo ótimo! Parabéns, Dona Lúcia!", "Quanto custa?", "Estou atrasado!"] },
      { speaker: LUCIA, text: "Obrigada! E a viagem? Onde você foi?" },
      { speaker: YOU, answer: "Eu fui a muitas cidades. Foi uma aventura!", options: ["Eu fui a muitas cidades. Foi uma aventura!", "Eu vou amanhã cedo.", "Não toque nisso!"] },
      { speaker: LUCIA, text: "Você quer um pedaço de bolo?" },
      { speaker: YOU, answer: "Quero, sim! Obrigado! Tá uma delícia!", options: ["Quero, sim! Obrigado! Tá uma delícia!", "Que frio!", "Siga em frente!"] },
      { speaker: LUCIA, text: "E agora? Vamos sambar?" },
      { speaker: YOU, answer: "Vamos!", options: ["Vamos!", "Boa viagem!", "Por quê?"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-belem",
    itemName: "Photo de la fête",
    itemNameRu: "Foto da festa",
    ru: "Oba! A última foto do álbum!",
    en: "Hourra ! La dernière photo de l'album !",
    a11y:
      "Une photo : Dona Lúcia dans son châle à perroquets, Pipoca sur son épaule. Autour d'elle : Bia, Cláudia, Léo, Murzik et les musiciens de « Maré Alta ». Sur la table, un gâteau aux bougies « 80 ».",
    image: p("photo"),
    steps: [
      "Léo règle le minuteur de son téléphone.",
      "Tout le monde se rassemble autour de Dona Lúcia.",
      "« Todo mundo : Pipoca ! » — « Tous ensemble : Pipoca ! »",
      "Légende : « Parabéns, Dona Lúcia ! » La dernière page de l'album.",
    ],
    bridge: "La fête continue jusqu'au matin.",
  },
};

const story: CityStory = {
  home: {
    name: "Une chambre d'auberge au bord du fleuve",
    nameRu: "Um quarto numa pousada perto do rio",
    image: p("home"),
    a11y:
      "Une petite chambre avec un vieux lit en bois. Par la fenêtre : le fleuve, des barques et les tourelles bleues du marché. La valise de Murzik au milieu.",
  },
  keepsakeId: "photo-belem",
  welcomeRu: "Olá, Belém!",
  welcomeEn: "Bonjour, Belém !",
  welcomeImage: p("arrival"),
  welcomeA11y:
    "Une ville portuaire à l'embouchure du fleuve : un vieux marché aux tourelles bleues, des barques et des oiseaux au-dessus de l'eau. Sur un mur : l'affiche du concert de « Maré Alta ».",
  departureImage: p("departure"),
  departureA11y:
    "Murzik, Bia et les musiciens avec leurs instruments montent dans l'avion. Pipoca est sur l'épaule de Murzik.",
  finale: [
    {
      image: p("photo"),
      a11y: "Murzik colle la dernière photo dans l'album : la fête de Dona Lúcia.",
      lines: [
        { en: "La dernière page de l'album. Pipoca est à la maison." },
        { ru: "Parabéns, Dona Lúcia!", en: "Joyeux anniversaire, Dona Lúcia !" },
      ],
    },
    {
      image: p("suitcase"),
      a11y:
        "La valise ouverte de Murzik : l'album, la boussole, les petits pots d'eau de fleuve, le billet d'opéra, la calebasse, l'imperméable jaune, la baguette signée et plein d'autres choses du voyage.",
      lines: [
        { en: "Quatorze villes. Quatorze pages d'album. Pipoca a été retrouvé." },
        { ru: "Belém completa! Nível A1 completo!", en: "Belém terminé ! Niveau A1 terminé !" },
        { en: "7 / 7 leçons. Quatorze villes !" },
      ],
    },
    {
      image: pic("pt/rio/party"),
      a11y:
        "La cour de la maison de Dona Lúcia, la nuit : des guirlandes, les musiciens jouent la samba, Murzik danse avec Dona Lúcia. Pipoca est assis sur le tambour.",
      lines: [
        { en: "Murzik danse la samba pour la première fois. Un peu maladroitement — mais de tout son cœur." },
        { ru: "Eu sei sambar!", en: "Je sais danser la samba !" },
      ],
    },
    {
      image: pic("pt/rio/video"),
      a11y: "Léo, téléphone en main ; à l'écran, une vidéo de Pipoca sur le micro au concert de Belém.",
      lines: [
        { en: "Et le matin, Léo montre son téléphone. Tout le Brésil regarde la vidéo de Pipoca au concert." },
        { ru: "Murzik, Bia… vocês querem viajar com a gente?", en: "Murzik, Bia… vous voulez voyager avec nous ?" },
        { ru: "Começa o A2!", en: "Le niveau A2 commence !" },
      ],
    },
  ],
};

export const ptBelemFr = {
  id: "pt-belem",
  name: "Belém",
  namePt: "Belém",
  lessons: [be1, be2, be3, be4, be5, be6, be7],
  story,
};
