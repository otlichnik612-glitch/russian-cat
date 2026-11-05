import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { PAIRS, YOU, choice, fill, g, line, listen, match, missing, script, speak, spell, tf, v } from "./make";

/* Парати · «Кафе и числа» · Группа уехала вчера. Гостиница, кафе Сеу Антониу, деньги и числа до 100, ser во всех лицах, лодка по заливу. Пипока выучил «Mais um café!». */

const p = (name: string) => pic(`pt/paraty/${name}`);
const ANTONIO = "Seu Antônio";

const paraty1: Lesson = {
  id: "pt-a1-paraty-1",
  level: "A1",
  cityId: "pt-paraty",
  number: 1,
  title: "Na pousada — À l'auberge",
  minutes: 7,
  goals: [
    "Demander s'il y a une chambre libre",
    "Dire pour combien de nuits et combien de personnes",
    "Compter de 11 à 20",
  ],
  vocabNote:
    "Pousada — une petite auberge chaleureuse ; le Brésil en est plein. Que pena! — « Quel dommage ! »",
  vocab: [
    v("ptpa1-1", "Tem um quarto?", "Vous avez une chambre ?",
      "Murzik se tient devant le comptoir en bois de l'auberge avec sa valise.",
      p("l1-1")),
    v("ptpa1-2", "Para duas pessoas.", "Pour deux personnes.",
      "Murzik et Bia sont côte à côte et lèvent deux doigts.",
      p("l1-2")),
    v("ptpa1-3", "Quantas noites?", "Pour combien de nuits ?",
      "La réceptionniste, carnet à la main, regarde par-dessus ses lunettes d'un air interrogateur.",
      p("l1-3")),
    v("ptpa1-4", "Duas noites.", "Deux nuits.",
      "Deux petites lunes en carton sur le comptoir.",
      p("l1-4")),
    v("ptpa1-5", "O quarto é o número doze.", "Votre chambre est le numéro douze.",
      "Une porte bleue avec le numéro 12.",
      p("l1-5")),
    v("ptpa1-6", "Aqui está a chave.", "Voici la clé.",
      "La réceptionniste tend une vieille clé avec une étiquette en bois.",
      p("l1-6")),
    v("ptpa1-7", "Que pena!", "Quel dommage !",
      "Bia laisse tomber ses épaules, déçue.",
      p("l1-7")),
  ],
  dialogue: {
    title: "Dans une auberge au bord de la mer",
    note:
      "Ontem — « hier ». Foram embora — « ils sont partis ». A senhora — le « vous » poli pour une femme, o senhor — pour un homme.",
    lines: [
      line("bia", "Boa tarde! Tem um quarto?", "Bonjour ! Vous avez une chambre ?"),
      line("receptionist", "Tem, sim. Para quantas pessoas?", "Oui, nous en avons. Pour combien de personnes ?"),
      line("bia", "Para duas pessoas.", "Pour deux personnes."),
      line("receptionist", "Quantas noites?", "Pour combien de nuits ?"),
      line("bia", "Duas noites. A senhora conhece a banda Maré Alta?", "Deux nuits. Vous connaissez le groupe Maré Alta ?"),
      line("receptionist", "Conheço! Eles foram embora ontem.", "Oui ! Ils sont partis hier."),
      line("murzik", "Ontem? Que pena!", "Hier ? Quel dommage !"),
      line("receptionist", "O quarto é o número doze. Aqui está a chave.", "Votre chambre est le numéro douze. Voici la clé."),
    ],
    gist: choice("ptpa1-d1", "Quand le groupe est-il parti ?", [
      ["Hier.", true],
      ["Ce matin.", false],
      ["Ils sont encore là.", false],
    ]),
  },
  grammar: [
    g(
      "Les nombres de 11 à 20",
      [
        "Il faut simplement mémoriser 11–15 : onze, doze, treze, catorze, quinze. Ensuite, c'est « dix-et-six » : dezesseis (16), dezessete (17), dezoito (18), dezenove (19). Contrairement au français « seize », le portugais dit littéralement « dix-six » ! 20 — vinte.",
        "« Combien » s'accorde en genre : quantos quartos (o quarto, masculin), quantas noites (a noite, féminin). En français, « combien » ne change jamais — en portugais, si !",
      ],
      [
        ["doze, quinze, vinte", "douze, quinze, vingt"],
        ["Quantas pessoas? — Duas.", "Combien de personnes ? — Deux."],
      ],
    ),
  ],
  tasks: [
    listen("ptpa1-t1", "Écoute. Quel est le numéro de la chambre ?", "O quarto é o número quinze.", [
      ["15", true],
      ["13", false],
      ["50", false],
    ]),
    match("ptpa1-t2", PAIRS, [
      ["onze", "11"],
      ["doze", "12"],
      ["dezesseis", "16"],
      ["vinte", "20"],
    ], { skill: "words" }),
    choice("ptpa1-t3", "Comment demander « Pour combien de nuits ? » (a noite)", [
      ["Quantas noites?", true],
      ["Quantos noites?", false],
      ["Quanto noites?", false],
    ], { skill: "grammar" }),
    spell("ptpa1-t4", "Assemble le mot « clé ».", "chave"),
    speak("ptpa1-t5", "Boa tarde! Para quantas pessoas?", "Para duas pessoas, por favor.", "Pour deux personnes, s'il vous plaît.", {
      help: "Réponds à voix haute pour combien de personnes tu veux la chambre.",
    }),
    choice("ptpa1-t6", "C'est le soir. Comment dire « À demain » ?", [
      ["Até amanhã!", true],
      ["Bom dia!", false],
      ["Muito prazer!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "lantern",
    itemName: "Vieille lanterne",
    itemNameRu: "Lampião",
    ru: "Oba! Um lampião!",
    en: "Hourra ! Une lanterne !",
    a11y: "Une vieille lanterne en fer forgé avec une bougie à l'intérieur, posée sur le rebord de la fenêtre.",
    image: p("lantern"),
    steps: [
      "La chambre douze est un peu sombre.",
      "La réceptionniste apporte une vieille lanterne.",
      "« Como nas ruas de Paraty! » — « Comme dans les rues de Paraty ! »",
      "Murzik la pose sur le rebord de la fenêtre.",
    ],
    bridge: "Au matin, Murzik et Bia vont prendre le petit-déjeuner dans un petit café sur la place.",
  },
};

const paraty2: Lesson = {
  id: "pt-a1-paraty-2",
  level: "A1",
  cityId: "pt-paraty",
  number: 2,
  title: "No café — Au café",
  minutes: 7,
  goals: [
    "Commander poliment : Eu queria…",
    "Dire « avec » et « sans »",
    "Répondre « Ce sera tout »",
  ],
  vocabNote:
    "Pão de queijo — de petits pains au fromage, le petit-déjeuner brésilien préféré. Cafezinho — une petite tasse de café serré qu'on offre partout aux invités.",
  vocab: [
    v("ptpa2-1", "Eu queria um café, por favor.", "Je voudrais un café, s'il vous plaît.",
      "Murzik lève poliment la patte au comptoir.",
      p("l2-1")),
    v("ptpa2-2", "um pão de queijo", "un pain au fromage",
      "Un panier de petits pains dorés.",
      p("l2-2")),
    v("ptpa2-3", "Com açúcar?", "Avec du sucre ?",
      "Le vieux patron du café tient un sucrier.",
      p("l2-3")),
    v("ptpa2-4", "Sem açúcar.", "Sans sucre.",
      "Murzik secoue la tête et éloigne le sucrier.",
      p("l2-4")),
    v("ptpa2-5", "Mais alguma coisa?", "Autre chose ?",
      "Le patron du café, un crayon derrière l'oreille, se penche au-dessus du comptoir.",
      p("l2-5")),
    v("ptpa2-6", "Só isso, obrigado.", "Ce sera tout, merci.",
      "Murzik fait joyeusement signe que c'est assez.",
      p("l2-6")),
    v("ptpa2-7", "Aqui está.", "Voilà.",
      "Le patron pose une petite tasse de café sur le comptoir.",
      p("l2-7")),
  ],
  dialogue: {
    title: "Le café de Seu Antônio",
    note:
      "Seu — c'est ainsi qu'au Brésil on s'adresse respectueusement à un homme âgé : Seu Antônio. Para mim — « pour moi ».",
    lines: [
      line("antonio", "Bom dia! O que vocês querem?", "Bonjour ! Que désirez-vous ?"),
      line("murzik", "Eu queria um café, por favor.", "Je voudrais un café, s'il vous plaît."),
      line("antonio", "Com açúcar?", "Avec du sucre ?"),
      line("murzik", "Sem açúcar, obrigado.", "Sans sucre, merci."),
      line("bia", "E para mim, um suco de laranja e um pão de queijo.", "Et pour moi, un jus d'orange et un pain au fromage."),
      line("antonio", "Mais alguma coisa?", "Autre chose ?"),
      line("bia", "Só isso, obrigada.", "Ce sera tout, merci."),
      line("antonio", "Aqui está!", "Voilà !"),
    ],
    gist: choice("ptpa2-d1", "Que commande Bia ?", [
      ["Un jus d'orange et un pain au fromage.", true],
      ["Un café sans sucre.", false],
      ["Seulement de l'eau.", false],
    ]),
  },
  grammar: [
    g(
      "Eu queria — la commande polie",
      [
        "Eu queria signifie littéralement « je voulais », mais c'est l'équivalent de « je voudrais » : la façon polie de commander au café ou en boutique. Eu quero — « je veux » — sonne plus direct. Bonne nouvelle : queria ne change pas selon le genre, hommes et femmes disent la même chose.",
        "Com — « avec », sem — « sans » : café com açúcar, café sem açúcar.",
      ],
      [
        ["Eu queria um suco, por favor.", "Je voudrais un jus, s'il vous plaît."],
        ["Um café sem açúcar.", "Un café sans sucre."],
      ],
    ),
  ],
  tasks: [
    choice("ptpa2-t1", "Comment commander poliment un jus ?", [
      ["Eu queria um suco, por favor.", true],
      ["Suco!", false],
      ["Eu sou um suco.", false],
    ], { skill: "grammar" }),
    listen("ptpa2-t2", "Écoute. Quel café la personne veut-elle ?", "Um café sem açúcar, por favor.", [
      ["Sans sucre.", true],
      ["Avec du sucre.", false],
      ["Avec du lait.", false],
    ]),
    match("ptpa2-t3", PAIRS, [
      ["Mais alguma coisa?", "Autre chose ?"],
      ["Só isso.", "Ce sera tout."],
      ["Aqui está.", "Voilà."],
      ["com açúcar", "avec du sucre"],
    ], { skill: "words" }),
    missing("ptpa2-t4", "Quelle lettre manque-t-il ? (« sucre »)", "a", "úcar", "ç", ["ç", "s", "c"]),
    speak("ptpa2-t5", "Bom dia! O que você quer?", "Eu queria um café, por favor.", "Je voudrais un café, s'il vous plaît.", {
      help: "Commande quelque chose au café, à voix haute.",
    }),
    choice("ptpa2-t6", "Comment demander « Vous avez une chambre libre ? »", [
      ["Tem um quarto?", true],
      ["Quantas noites?", false],
      ["Aqui está a chave.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cup",
    itemName: "Petite tasse à café",
    itemNameRu: "Xícara",
    ru: "Oba! Uma xícara!",
    en: "Hourra ! Une petite tasse !",
    a11y: "Une petite tasse à café blanche au liseré bleu, avec sa soucoupe.",
    image: p("cup"),
    steps: [
      "Seu Antônio rit : « Você gosta de café! »",
      "« Tu aimes le café ! »",
      "Il offre une petite tasse à Murzik.",
      "La tasse rejoint l'étagère de la chambre douze.",
    ],
    bridge: "Il est temps de payer. Mais combien coûtent le café, le jus et le pain au fromage ?",
  },
};

const paraty3: Lesson = {
  id: "pt-a1-paraty-3",
  level: "A1",
  cityId: "pt-paraty",
  number: 3,
  title: "Quanto é? — C'est combien ?",
  minutes: 7,
  goals: [
    "Demander l'addition",
    "Compter par dizaines jusqu'à 100",
    "Demander si l'on peut payer par carte",
  ],
  vocabNote:
    "La monnaie brésilienne est le real : um real, dois reais. Le service est souvent déjà compris dans l'addition.",
  vocab: [
    v("ptpa3-1", "A conta, por favor.", "L'addition, s'il vous plaît.",
      "Murzik mime en l'air le geste d'écrire.",
      p("l3-1")),
    v("ptpa3-2", "Quanto é?", "C'est combien ?",
      "Murzik jette un œil dans son portefeuille.",
      p("l3-2")),
    v("ptpa3-3", "São vinte reais.", "Ça fait vingt reais.",
      "Un reçu avec le chiffre 20 sur une soucoupe.",
      p("l3-3")),
    v("ptpa3-4", "trinta, quarenta, cinquenta", "trente, quarante, cinquante",
      "Trois piles de pièces : trente, quarante, cinquante.",
      p("l3-4")),
    v("ptpa3-5", "cem", "cent",
      "Un billet de cent reais avec un mérou.",
      p("l3-5")),
    v("ptpa3-6", "Pode ser no cartão?", "Je peux payer par carte ?",
      "Murzik tend une carte bancaire.",
      p("l3-6")),
    v("ptpa3-7", "Em dinheiro.", "En espèces.",
      "Bia pose des billets sur le comptoir.",
      p("l3-7")),
  ],
  dialogue: {
    title: "L'addition",
    note:
      "Pode — « on peut ». Claro que pode! — « Bien sûr qu'on peut ! » Em dinheiro — « en espèces ».",
    lines: [
      line("murzik", "Seu Antônio, a conta, por favor.", "Seu Antônio, l'addition, s'il vous plaît."),
      line("antonio", "Um café, um suco e um pão de queijo…", "Un café, un jus et un pain au fromage…"),
      line("murzik", "Quanto é?", "C'est combien ?"),
      line("antonio", "São vinte reais.", "Ça fait vingt reais."),
      line("murzik", "Pode ser no cartão?", "Je peux payer par carte ?"),
      line("antonio", "Claro que pode!", "Bien sûr !"),
      line("bia", "Não, não! Eu pago. Em dinheiro!", "Non, non ! C'est moi qui paie. En espèces !"),
    ],
    gist: choice("ptpa3-d1", "Combien coûte le petit-déjeuner ?", [
      ["Vingt reais.", true],
      ["Douze reais.", false],
      ["Cent reais.", false],
    ]),
  },
  grammar: [
    g(
      "Le pluriel : -s et les dizaines",
      [
        "Le pluriel se forme le plus souvent simplement : ajoute -s, comme en français : um café — dois cafés, um suco — dois sucos. Mais les mots en -l ont leur propre forme : um real — dois reais.",
        "Les dizaines : vinte (20), trinta (30), quarenta (40), cinquenta (50), sessenta (60), setenta (70), oitenta (80), noventa (90), cem (100). Pas de soixante-dix ni de quatre-vingts : setenta et oitenta sont des mots simples ! Entre la dizaine et l'unité, on met e (« et ») : vinte e cinco — 25. En français on ne dit « et » que dans « vingt et un » ; en portugais, e se met partout.",
      ],
      [
        ["dois cafés, três sucos", "deux cafés, trois jus"],
        ["vinte e cinco reais", "vingt-cinq reais"],
      ],
    ),
  ],
  tasks: [
    listen("ptpa3-t1", "Écoute. Combien ça coûte ?", "São quarenta reais.", [
      ["40", true],
      ["14", false],
      ["4", false],
    ]),
    match("ptpa3-t2", PAIRS, [
      ["trinta", "30"],
      ["cinquenta", "50"],
      ["setenta", "70"],
      ["cem", "100"],
    ], { skill: "words" }),
    choice("ptpa3-t3", "Comment dire « deux reais » ?", [
      ["dois reais", true],
      ["dois reals", false],
      ["duas real", false],
    ], { skill: "grammar" }),
    spell("ptpa3-t4", "Assemble le mot « addition ».", "conta"),
    speak("ptpa3-t5", "São vinte reais.", "Pode ser no cartão?", "Je peux payer par carte ?", {
      help: "Demande à voix haute si tu peux payer par carte.",
    }),
    choice("ptpa3-t6", "Le patron demande : Mais alguma coisa? Que répondre si tu ne veux rien d'autre ?", [
      ["Só isso, obrigado.", true],
      ["Com açúcar.", false],
      ["Que pena!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "wallet",
    itemName: "Porte-monnaie en coquillages",
    itemNameRu: "Porta-moedas",
    ru: "Oba! Um porta-moedas!",
    en: "Hourra ! Un porte-monnaie !",
    a11y: "Un petit porte-monnaie en tissu brodé de coquillages.",
    image: p("wallet"),
    steps: [
      "Sur la place, Bia achète un petit porte-monnaie décoré de coquillages.",
      "« Para os seus reais! » — « Pour tes reais ! »",
      "Murzik y met la monnaie.",
      "Les pièces tintent.",
    ],
    bridge: "Seu Antônio s'assoit à leur table. Il connaît les musiciens !",
  },
};

const paraty4: Lesson = {
  id: "pt-a1-paraty-4",
  level: "A1",
  cityId: "pt-paraty",
  number: 4,
  title: "Eles são músicos — Ils sont musiciens",
  minutes: 7,
  goals: [
    "Dire « il, elle, nous, ils »",
    "Dire quel est le métier de quelqu'un",
    "Décrire une personne : sympathique, drôle",
  ],
  vocabNote:
    "Simpático veut dire « gentil, sympathique » — il parle du caractère, pas de l'apparence. Pour l'apparence, on dit bonito, bonita.",
  vocab: [
    v("ptpa4-1", "Quem é ele?", "Qui est-ce ?",
      "Murzik montre une photo accrochée au mur du café.",
      p("l4-1")),
    v("ptpa4-2", "Ele é o cantor.", "C'est le chanteur.",
      "Sur la photo, un chanteur avec un micro sourit à pleines dents.",
      p("l4-2")),
    v("ptpa4-3", "Ela é estudante.", "Elle est étudiante.",
      "Bia avec un sac à dos et des cahiers.",
      p("l4-3")),
    v("ptpa4-4", "Nós somos amigos.", "Nous sommes amis.",
      "Murzik et Bia se tiennent par les épaules.",
      p("l4-4")),
    v("ptpa4-5", "Eles são músicos.", "Ils sont musiciens.",
      "Un groupe sur scène : un chanteur, un batteur, une guitariste.",
      p("l4-5")),
    v("ptpa4-6", "Ele é muito simpático.", "Il est très sympathique.",
      "Seu Antônio rit de bon cœur.",
      p("l4-6")),
    v("ptpa4-7", "Eles são divertidos.", "Ils sont drôles.",
      "Les musiciens font les fous dans leur bus.",
      p("l4-7")),
  ],
  dialogue: {
    title: "La photo au mur",
    note:
      "Famosos — « célèbres ». Não muito — « pas vraiment ». Papagaio — « perroquet ».",
    lines: [
      line("murzik", "Seu Antônio, quem é ele?", "Seu Antônio, qui est-ce ?"),
      line("antonio", "Ele é o Zeca, o cantor da Maré Alta. E ele é o Tiago.", "C'est Zeca, le chanteur de Maré Alta. Et ça, c'est Tiago."),
      line("bia", "Eles são músicos famosos?", "Ce sont des musiciens célèbres ?"),
      line("antonio", "Não muito. Mas eles são muito simpáticos e divertidos!", "Pas vraiment. Mais ils sont très sympathiques et drôles !"),
      line("murzik", "Nós somos amigos do Pipoca. Ele está com a banda!", "Nous sommes des amis de Pipoca. Il est avec le groupe !"),
      line("antonio", "Pipoca? Um papagaio verde?", "Pipoca ? Un perroquet vert ?"),
    ],
    gist: choice("ptpa4-d1", "Qui est Zeca ?", [
      ["Le chanteur du groupe.", true],
      ["Le patron du café.", false],
      ["Le frère de Bia.", false],
    ]),
  },
  grammar: [
    g(
      "Ser : je, tu, il, nous, ils",
      [
        "Le verbe ser (« être ») change selon la personne : eu sou, você é, ele é, ela é, nós somos, vocês são, eles são, elas são. Note que vous de politesse n'existe pas : você prend la même forme que ele/ela. Comme en français, « être » ne se saute jamais.",
        "Pour les métiers, pas d'article : Ela é estudante. — « Elle est étudiante. » Exactement comme en français ! Mais o cantor da banda — « le chanteur de ce groupe précis » — prend l'article.",
      ],
      [
        ["Nós somos amigos.", "Nous sommes amis."],
        ["Eles são músicos.", "Ils sont musiciens."],
      ],
    ),
  ],
  tasks: [
    choice("ptpa4-t1", "Comment dire « Ils sont musiciens » ?", [
      ["Eles são músicos.", true],
      ["Eles é músicos.", false],
      ["Eles somos músicos.", false],
    ], { skill: "grammar" }),
    listen("ptpa4-t2", "Écoute. Qui est-elle ?", "Ela é estudante.", [
      ["Étudiante.", true],
      ["Chanteuse.", false],
      ["Patronne du café.", false],
    ]),
    fill("ptpa4-t3", "Complète : « Nous sommes amis ».", "Nós", "amigos.", "somos", ["somos", "são", "sou"], { skill: "words" }),
    missing("ptpa4-t4", "Quelle lettre manque-t-il ? (« musiciens »)", "m", "sicos", "ú", ["ú", "u", "o"]),
    speak("ptpa4-t5", "Quem é você?", "Eu sou estudante. Eu sou da Rússia.", "Je suis étudiant(e). Je viens de Russie. (Parle de toi.)", {
      help: "Dis à voix haute qui tu es et d'où tu viens.",
    }),
    choice("ptpa4-t6", "Comment demander l'addition ?", [
      ["A conta, por favor.", true],
      ["Quanto é o quarto?", false],
      ["Em dinheiro.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "boat",
    itemName: "Petit bateau en bois",
    itemNameRu: "Barquinho",
    ru: "Oba! Um barquinho!",
    en: "Hourra ! Un petit bateau !",
    a11y: "Un petit bateau en bois peint en jaune, bleu et rouge.",
    image: p("boat"),
    steps: [
      "Seu Antônio prend un petit bateau sur l'étagère.",
      "« Amanhã vocês vão de barco! » — « Demain, vous irez en bateau ! »",
      "Un de ses amis a un vrai bateau.",
      "Murzik pose le petit bateau à côté de la lanterne.",
    ],
    bridge: "Au matin, un bateau aux couleurs vives les attend au quai.",
  },
};

const paraty5: Lesson = {
  id: "pt-a1-paraty-5",
  level: "A1",
  cityId: "pt-paraty",
  number: 5,
  title: "De barco — En bateau",
  minutes: 7,
  goals: [
    "Parler de plusieurs choses : os, as",
    "Dire « beaucoup » et « peu »",
    "S'extasier : Que… !",
  ],
  vocabNote:
    "Muito devant un nom s'accorde : muitos barcos, muitas ilhas. Devant un adjectif, il ne change pas : muito bonito.",
  vocab: [
    v("ptpa5-1", "o barco", "le bateau",
      "Un bateau en bois aux couleurs vives au quai.",
      p("l5-1")),
    v("ptpa5-2", "Tem muitas ilhas.", "Il y a beaucoup d'îles.",
      "Une baie parsemée d'une dizaine de petites îles vertes.",
      p("l5-2")),
    v("ptpa5-3", "as praias", "les plages",
      "De petites plages de sable blanc entre les rochers.",
      p("l5-3")),
    v("ptpa5-4", "Olha os peixes!", "Regarde les poissons !",
      "Murzik se penche par-dessus le bord ; sous l'eau, des poissons multicolores.",
      p("l5-4")),
    v("ptpa5-5", "Que água azul!", "Quelle eau bleue !",
      "Une eau turquoise et transparente.",
      p("l5-5")),
    v("ptpa5-6", "Eu não sei nadar.", "Je ne sais pas nager.",
      "Murzik, dans une bouée, sourit d'un air penaud.",
      p("l5-6")),
    v("ptpa5-7", "Poucas pessoas.", "Peu de gens.",
      "Une plage presque vide : deux personnes sous un parasol.",
      p("l5-7")),
  ],
  dialogue: {
    title: "Un tour en bateau dans la baie",
    note:
      "Mergulhar — « plonger ». Não tem problema — « pas de problème ». Colete (o colete) — « gilet de sauvetage ».",
    lines: [
      line("bia", "Olha, Murzik! Tem muitas ilhas!", "Regarde, Murzik ! Il y a plein d'îles !"),
      line("murzik", "E as praias! Poucas pessoas… Que bonito!", "Et les plages ! Presque personne… Comme c'est beau !"),
      line("bia", "Que água azul! Vamos mergulhar?", "Quelle eau bleue ! On plonge ?"),
      line("murzik", "Eu não sei nadar…", "Je ne sais pas nager…"),
      line("bia", "Não tem problema! Aqui está o colete.", "Pas de problème ! Voici un gilet de sauvetage."),
      line("murzik", "Olha os peixes! Amarelos, azuis, vermelhos!", "Regarde les poissons ! Jaunes, bleus, rouges !"),
    ],
    gist: choice("ptpa5-d1", "Pourquoi Murzik ne plonge-t-il pas tout de suite ?", [
      ["Il ne sait pas nager.", true],
      ["L'eau est froide.", false],
      ["Il a peur des poissons.", false],
    ]),
  },
  grammar: [
    g(
      "Le pluriel : os, as et -s",
      [
        "Au pluriel, l'article prend lui aussi un -s : o barco — os barcos, a praia — as praias. Le nom, l'article et l'adjectif se mettent tous au pluriel : as praias bonitas. En français c'est pareil : « les belles plages » !",
        "Muito (« beaucoup ») et pouco (« peu ») s'accordent de la même façon : muitos barcos, muitas ilhas, poucas pessoas. En français, « beaucoup » ne s'accorde jamais — ici, attention !",
      ],
      [
        ["os barcos, as ilhas", "les bateaux, les îles"],
        ["Tem muitos peixes.", "Il y a beaucoup de poissons."],
      ],
    ),
  ],
  tasks: [
    choice("ptpa5-t1", "Comment dire « les plages » ? (a praia)", [
      ["as praias", true],
      ["os praias", false],
      ["a praias", false],
    ], { skill: "grammar" }),
    listen("ptpa5-t2", "Écoute. Que voit Bia ?", "Tem muitas ilhas!", [
      ["Beaucoup d'îles.", true],
      ["Beaucoup de poissons.", false],
      ["Peu de gens.", false],
    ]),
    match("ptpa5-t3", PAIRS, [
      ["o barco", "le bateau"],
      ["a ilha", "l'île"],
      ["o peixe", "le poisson"],
      ["a praia", "la plage"],
    ], { skill: "words" }),
    spell("ptpa5-t4", "Assemble le mot « bateau ».", "barco"),
    speak("ptpa5-t5", "Você sabe nadar?", "Não, eu não sei nadar.", "Non, je ne sais pas nager.", {
      help: "Réponds à voix haute pour toi : est-ce que tu sais nager ? Pour « oui », dis Sim, eu sei nadar.",
    }),
    choice("ptpa5-t6", "Qui est Zeca ?", [
      ["Ele é o cantor da banda.", true],
      ["Ele é estudante.", false],
      ["Ele é o dono do café.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "shells",
    itemName: "Bocal de coquillages",
    itemNameRu: "Conchas",
    ru: "Oba! Conchas!",
    en: "Hourra ! Des coquillages !",
    a11y: "Un bocal en verre rempli de petits coquillages roses et blancs.",
    image: p("shells"),
    steps: [
      "Sur la plage déserte, Murzik ramasse des coquillages.",
      "Un, deux, dix… vingt !",
      "Bia lui donne un bocal.",
      "Le bocal trouve sa place près de la fenêtre.",
    ],
    bridge: "Le soir, Seu Antônio les invite à dîner.",
  },
};

const paraty6: Lesson = {
  id: "pt-a1-paraty-6",
  level: "A1",
  cityId: "pt-paraty",
  number: 6,
  title: "O jantar — Le dîner",
  minutes: 7,
  goals: [
    "Nommer des plats simples",
    "Dire « et », « ou », « mais »",
    "Dire que c'est bon",
  ],
  vocabNote:
    "Arroz e feijão — riz et haricots, la base du repas brésilien. On en mange presque tous les jours.",
  vocab: [
    v("ptpa6-1", "arroz e feijão", "riz et haricots",
      "Une assiette de riz blanc et de haricots noirs.",
      p("l6-1")),
    v("ptpa6-2", "o peixe frito", "le poisson frit",
      "Un poisson frit doré avec du citron.",
      p("l6-2")),
    v("ptpa6-3", "uma salada", "une salade",
      "Un saladier avec des tomates.",
      p("l6-3")),
    v("ptpa6-4", "Uma água, por favor.", "De l'eau, s'il vous plaît.",
      "Murzik tend un verre vide.",
      p("l6-4")),
    v("ptpa6-5", "Peixe ou frango?", "Poisson ou poulet ?",
      "Seu Antônio tient deux assiettes — une avec du poisson, une avec du poulet.",
      p("l6-5")),
    v("ptpa6-6", "Eu não como carne.", "Je ne mange pas de viande.",
      "Bia refuse poliment l'assiette de viande.",
      p("l6-6")),
    v("ptpa6-7", "Que gostoso!", "Comme c'est bon !",
      "Murzik se lèche les babines avec bonheur.",
      p("l6-7")),
  ],
  dialogue: {
    title: "Le dîner chez Seu Antônio",
    note:
      "Bom apetite! — « Bon appétit ! » Então — « alors, dans ce cas ».",
    lines: [
      line("antonio", "O jantar está pronto! Peixe ou frango?", "Le dîner est prêt ! Poisson ou poulet ?"),
      line("murzik", "Peixe, por favor!", "Poisson, s'il vous plaît !"),
      line("bia", "Eu não como carne. Peixe também não.", "Je ne mange pas de viande. Ni de poisson."),
      line("antonio", "Então arroz, feijão e uma salada?", "Alors riz, haricots et une salade ?"),
      line("bia", "Perfeito! E uma água, por favor.", "Parfait ! Et de l'eau, s'il vous plaît."),
      line("antonio", "Bom apetite!", "Bon appétit !"),
      line("murzik", "Que gostoso! O peixe é ótimo, mas o arroz é melhor!", "Comme c'est bon ! Le poisson est excellent, mais le riz est encore meilleur !"),
    ],
    gist: choice("ptpa6-d1", "Que mange Bia ?", [
      ["Du riz, des haricots et une salade.", true],
      ["Du poisson frit.", false],
      ["Du poulet.", false],
    ]),
  },
  grammar: [
    g(
      "E, ou, mas — « et », « ou », « mais »",
      [
        "E — « et » : arroz e feijão. Ou — « ou » : peixe ou frango? Mas — « mais » : O peixe é ótimo, mas… Attention au piège : ne confonds pas e (« et ») et é (« est ») — un peu comme « et » et « est » en français !",
        "Também — « aussi », também não — « non plus » : Peixe também não. — « Ni le poisson non plus. »",
      ],
      [
        ["Peixe ou frango?", "Poisson ou poulet ?"],
        ["Eu como peixe, mas não como carne.", "Je mange du poisson, mais pas de viande."],
      ],
    ),
  ],
  tasks: [
    choice("ptpa6-t1", "Comment dire « riz ou salade » ?", [
      ["arroz ou salada", true],
      ["arroz é salada", false],
      ["arroz mas salada", false],
    ], { skill: "grammar" }),
    listen("ptpa6-t2", "Écoute. Qu'est-ce que la personne ne mange pas ?", "Eu não como carne.", [
      ["La viande.", true],
      ["Le poisson.", false],
      ["Le riz.", false],
    ]),
    match("ptpa6-t3", PAIRS, [
      ["o arroz", "le riz"],
      ["o feijão", "les haricots"],
      ["o frango", "le poulet"],
      ["a água", "l'eau"],
    ], { skill: "words" }),
    missing("ptpa6-t4", "Quelle lettre manque-t-il ? (« eau »)", "ág", "a", "u", ["u", "o", "w"]),
    speak("ptpa6-t5", "Peixe ou frango?", "Peixe, por favor!", "Poisson, s'il vous plaît !", {
      help: "Choisis à voix haute ce que tu veux. Tu peux aussi répondre Frango, por favor!",
    }),
    choice("ptpa6-t6", "Comment dire « Il y a beaucoup d'îles » ?", [
      ["Tem muitas ilhas.", true],
      ["Tem muitos ilhas.", false],
      ["É muitas ilhas.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "hat",
    itemName: "Chapeau de paille",
    itemNameRu: "Chapéu de palha",
    ru: "Oba! Um chapéu de palha!",
    en: "Hourra ! Un chapeau de paille !",
    a11y: "Un petit chapeau de paille à ruban bleu accroché à un crochet.",
    image: p("hat"),
    steps: [
      "Après le dîner, Seu Antônio apporte un chapeau de paille.",
      "« Para o sol do Brasil! » — « Contre le soleil du Brésil ! »",
      "Murzik l'essaie. Il va parfaitement !",
      "Le chapeau est accroché près de la porte.",
    ],
    bridge: "Au matin, Seu Antônio se souvient d'une chose importante à propos du perroquet…",
  },
};

const paraty7: Lesson = {
  id: "pt-a1-paraty-7",
  level: "A1",
  cityId: "pt-paraty",
  number: 7,
  title: "Mais um café! — Encore un café !",
  minutes: 8,
  goals: [
    "Dire « encore un »",
    "Dire au revoir et inviter à revenir",
    "Réviser tous les mots de Paraty",
  ],
  vocabNote:
    "Ele disse — « il a dit ». Dans chaque ville, nous découvrirons quelle nouvelle phrase Pipoca a apprise.",
  vocab: [
    v("ptpa7-1", "Mais um café!", "Encore un café !",
      "Un perroquet vert au comptoir du café lève la patte comme un client.",
      p("l7-1")),
    v("ptpa7-2", "O papagaio!", "Le perroquet !",
      "Murzik montre joyeusement la photo d'un perroquet sur un téléphone.",
      p("l7-2")),
    v("ptpa7-3", "Ele disse…", "Il a dit…",
      "Seu Antônio imite le perroquet de façon comique.",
      p("l7-3")),
    v("ptpa7-4", "Eles estão em São Paulo.", "Ils sont à São Paulo.",
      "Une carte avec une ligne de Paraty jusqu'à une grande ville.",
      p("l7-4")),
    v("ptpa7-5", "Foi um prazer!", "Ce fut un plaisir !",
      "Seu Antônio serre la patte de Murzik.",
      p("l7-5")),
    v("ptpa7-6", "Volte sempre!", "Revenez quand vous voulez !",
      "Le patron du café fait signe au pas de la porte.",
      p("l7-6")),
    v("ptpa7-7", "Até a próxima!", "À la prochaine !",
      "Murzik et Bia, avec leurs valises, font signe depuis l'arrêt de bus.",
      p("l7-7")),
  ],
  dialogue: {
    title: "Ce que le perroquet a dit",
    note:
      "Ficou — « il est resté ». O dia todo — « toute la journée ». Ah, o papagaio! Ele disse… — cette phrase reviendra dans chaque ville.",
    lines: [
      line("antonio", "Ah, o papagaio! Ele ficou aqui no café o dia todo.", "Ah, le perroquet ! Il est resté ici au café toute la journée."),
      line("murzik", "E o que ele disse?", "Et qu'est-ce qu'il a dit ?"),
      line("antonio", "Ele disse: Mais um café! Mais um café!", "Il disait : « Encore un café ! Encore un café ! »"),
      line("bia", "É o Pipoca! E agora? Onde eles estão?", "C'est Pipoca ! Et maintenant, où sont-ils ?"),
      line("antonio", "Eles estão em São Paulo.", "Ils sont à São Paulo."),
      line("murzik", "Obrigado, Seu Antônio! Foi um prazer!", "Merci, Seu Antônio ! Ce fut un plaisir !"),
      line("antonio", "Volte sempre! Até a próxima!", "Revenez quand vous voulez ! À la prochaine !"),
    ],
    gist: choice("ptpa7-d1", "Quelle phrase Pipoca a-t-il apprise à Paraty ?", [
      ["« Encore un café ! »", true],
      ["« L'addition, s'il vous plaît ! »", false],
      ["« Comme c'est bon ! »", false],
    ]),
  },
  grammar: [
    g(
      "Mais — « encore, plus »",
      [
        "Mais um café — « encore un café », mais uma água — « encore de l'eau ». Devant un nombre, mais veut dire « encore ».",
        "Mais sert aussi pour les comparaisons : mais devagar — « plus lentement » (tu te souviens de Rio ?), mais bonito — « plus beau ». Comme le « plus » français : « plus lent », « plus beau » !",
      ],
      [
        ["Mais um suco, por favor.", "Encore un jus, s'il vous plaît."],
        ["Mais devagar, por favor.", "Plus lentement, s'il vous plaît."],
      ],
    ),
  ],
  tasks: [
    listen("ptpa7-t1", "Examen audio. Que raconte Seu Antônio ?", "O papagaio ficou aqui no café. Ele disse: Mais um café! Agora eles estão em São Paulo.", [
      ["Le perroquet était au café, et maintenant le groupe est à São Paulo.", true],
      ["Le perroquet est resté à Paraty.", false],
      ["Le groupe est retourné à Rio.", false],
    ]),
    choice("ptpa7-t2", "Comment demander encore un jus ?", [
      ["Mais um suco, por favor.", true],
      ["Só isso, obrigado.", false],
      ["Um suco sem açúcar.", false],
    ], { skill: "grammar" }),
    tf("ptpa7-t3", "Volte sempre! — c'est ce qu'on dit à un invité qui s'en va.", true),
    missing("ptpa7-t4", "Quelle lettre manque-t-il ? (« perroquet »)", "papa", "aio", "g", ["g", "j", "c"]),
    speak("ptpa7-t5", "Foi um prazer! Volte sempre!", "Obrigado! Até a próxima!", "Merci ! À la prochaine !", {
      help: "Dis au revoir à voix haute — obrigado ou obrigada.",
    }),
    script("ptpa7-t6", "Souviens-toi de tout Paraty. Termine la conversation au café.", [
      { speaker: ANTONIO, text: "Bom dia! O que você quer?" },
      { speaker: YOU, answer: "Eu queria um café, por favor.", options: ["Eu queria um café, por favor.", "Eu sou um café.", "Que pena!"] },
      { speaker: ANTONIO, text: "Com açúcar?" },
      { speaker: YOU, answer: "Sem açúcar, obrigado.", options: ["Sem açúcar, obrigado.", "Duas noites.", "Eles são músicos."] },
      { speaker: ANTONIO, text: "Mais alguma coisa?" },
      { speaker: YOU, answer: "Não, obrigado. A conta, por favor.", options: ["Não, obrigado. A conta, por favor.", "Aqui está a chave.", "Tem muitas ilhas."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-paraty",
    itemName: "Photo de Pipoca au café",
    itemNameRu: "Foto do Pipoca no café",
    ru: "Oba! Uma foto do Pipoca!",
    en: "Hourra ! Une photo de Pipoca !",
    a11y: "Une photo : un perroquet vert perché sur la machine à café d'un petit café, Seu Antônio riant à côté.",
    image: p("photo"),
    steps: [
      "Seu Antônio sort son téléphone : « Olha! »",
      "Sur la photo — Pipoca sur la machine à café !",
      "Seu Antônio l'imprime pour l'album.",
      "Légende : « Mais um café! » Murzik range l'album dans sa valise.",
    ],
    bridge: "Le bus pour São Paulo part dans une heure.",
  },
};

const story: CityStory = {
  home: {
    name: "La chambre douze de l'auberge",
    nameRu: "O quarto doze da pousada",
    image: p("home"),
    a11y:
      "Une chambre blanche et simple dans une vieille auberge : volets en bois, et dehors une rue pavée avec des maisons blanches aux portes colorées.",
  },
  keepsakeId: "photo-paraty",
  welcomeRu: "Olá, Paraty!",
  welcomeEn: "Bonjour, Paraty !",
  welcomeImage: p("arrival"),
  welcomeA11y:
    "Murzik et Bia marchent avec leurs valises sur les vieux pavés de Paraty. Maisons blanches aux portes colorées, bateaux au quai au loin.",
  departureImage: p("departure"),
  departureA11y: "Seu Antônio fait signe au pas de la porte de son café.",
  finale: [
    {
      image: p("photo"),
      a11y:
        "Murzik colle dans l'album la photo de Pipoca sur la machine à café et ajoute une légende.",
      lines: [
        { en: "Deuxième page de l'album : Pipoca au café de Seu Antônio." },
        { ru: "Mais um café!", en: "Encore un café !" },
        { en: "Pipoca est sain et sauf — et il a l'air de bien s'amuser." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie.",
      lines: [
        { ru: "Paraty completo!", en: "Paraty terminé !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Seu Antônio fait un signe d'adieu.",
      lines: [
        { ru: "Tchau, Seu Antônio!", en: "Au revoir, Seu Antônio !" },
        { ru: "Próxima parada: São Paulo!", en: "Prochain arrêt : São Paulo !" },
      ],
    },
    {
      image: p("bus"),
      a11y: "Un bus gravit une route de montagne à travers la forêt tropicale.",
      lines: [{ ru: "Paraty → São Paulo", en: "Paraty → São Paulo" }],
    },
    {
      image: pic("pt/saopaulo/arrival"),
      a11y:
        "Murzik et Bia sur une large avenue de São Paulo, au milieu des gratte-ciel, avec des gens pressés tout autour.",
      lines: [
        { ru: "Olá, São Paulo!", en: "Bonjour, São Paulo !" },
        { ru: "Que cidade grande!", en: "Quelle ville immense !" },
      ],
    },
  ],
};

export const ptParatyFr = {
  id: "pt-paraty",
  name: "Paraty",
  namePt: "Paraty",
  lessons: [paraty1, paraty2, paraty3, paraty4, paraty5, paraty6, paraty7],
  story,
};
