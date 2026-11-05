import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/**
 * New York · « La nourriture et la grande ville » · lessons 1–7 — French version of ../newyork.ts.
 * Same story, same English phrases and pictures; explanations, translations
 * and tasks are written for French speakers.
 * In lesson data `ru` = English text, `en` = French translation.
 */

const p = (name: string) => pic(`en/newyork/${name}`);

const newyork1: Lesson = {
  id: "en-a1-newyork-1",
  level: "A1",
  cityId: "en-newyork",
  number: 1,
  title: "She lives in Brooklyn — Elle habite à Brooklyn",
  minutes: 7,
  goals: ["Parler d'une autre personne : he works, she lives", "Ajouter -s au verbe après he et she", "Retenir he has et he goes"],
  vocabNote: "La règle d'or : après he, she, it, le verbe prend -s : I live → she lives, I work → he works. Les formes spéciales : have → has, go → goes, watch → watches.",
  vocab: [
    v("enny1-1", "Marcus works in a diner.", "Marcus travaille dans un petit restaurant.", "Un grand cuisinier souriant en tablier blanc devant les fourneaux.", "Écouter Marcus works in a diner", p("l1-1")),
    v("enny1-2", "He lives in Manhattan.", "Il habite à Manhattan.", "Les hauts immeubles de Manhattan par la fenêtre.", "Écouter He lives in Manhattan", p("l1-2")),
    v("enny1-3", "Rosie lives in Brooklyn.", "Rosie habite à Brooklyn.", "Une femme joyeuse aux boucles fait signe depuis le perron d'une maison en briques.", "Écouter Rosie lives in Brooklyn", p("l1-3")),
    v("enny1-4", "She goes to work by subway.", "Elle va au travail en métro.", "Rosie dans une rame de métro avec un journal.", "Écouter She goes to work by subway", p("l1-4")),
    v("enny1-5", "He has a big family.", "Il a une grande famille.", "Une photo : Marcus entouré de plein d'enfants.", "Écouter He has a big family", p("l1-5")),
    v("enny1-6", "She watches TV in the evening.", "Elle regarde la télé le soir.", "Rosie avec du pop-corn devant la télé.", "Écouter She watches TV in the evening", p("l1-6")),
    v("enny1-7", "He cooks every day.", "Il cuisine tous les jours.", "Marcus fait sauter habilement des pancakes dans la poêle.", "Écouter He cooks every day", p("l1-7")),
  ],
  dialogue: {
    title: "Le restaurant de Marcus",
    note: "Diner [daï-neu] — un petit restaurant américain. Subway — « métro » en Amérique (à Londres — the Underground).",
    lines: [
      line("marcus", "Hey! Welcome to New York! I'm Marcus. Seán's cousin!", "Hé ! Bienvenue à New York ! Je suis Marcus. Le cousin de Seán !"),
      line("murzik", "Hello, Marcus! Do you live here?", "Bonjour, Marcus ! Vous habitez ici ?"),
      line("marcus", "No, I live in Manhattan. I work here every day.", "Non, j'habite à Manhattan. Mais je travaille ici tous les jours."),
      line("marcus", "And this is Rosie. She lives next door. She comes here every morning!", "Et voici Rosie. Elle habite à côté. Elle vient ici tous les matins !"),
      line("rosie", "Every morning! Marcus cooks the best pancakes in New York.", "Tous les matins ! Marcus fait les meilleurs pancakes de New York."),
    ],
    gist: choice("enny1-d1", "Qui est Marcus ?", [
      ["Le cuisinier du restaurant, le cousin de Seán.", true],
      ["Le voisin de Rosie, chauffeur de taxi.", false],
      ["Un ami de Tom, de Londres.", false],
    ]),
  },
  grammar: [
    {
      title: "He works, she lives : le -s",
      paragraphs: [
        "I / you / we / they live, work, go. He / she / it lives, works, goes. C'est la faute la plus fréquente chez les débutants : n'oublie pas le -s après he et she !",
        "Après s, sh, ch, x, o — -es : watch → watches, go → goes. Have → has.",
      ],
      examples: [
        { ru: "I work in a café. Marcus works in a diner.", en: "Je travaille dans un café. Marcus travaille dans un petit restaurant." },
        { ru: "She has a cat.", en: "Elle a un chat." },
      ],
    },
  ],
  tasks: [
    choice("enny1-t1", "Comment dire « Elle habite à Brooklyn » ?", [
      ["She lives in Brooklyn.", true],
      ["She live in Brooklyn.", false],
      ["She is live in Brooklyn.", false],
    ], { skill: "grammar" }),
    listen("enny1-t2", "Écoute. Où travaille Rosie ?", "Rosie works in a hospital.", [
      ["À l'hôpital.", true],
      ["Dans un restaurant.", false],
      ["Dans le métro.", false],
    ]),
    match("enny1-t3", "Relie les paires.", [
      ["I go", "he goes"],
      ["I have", "she has"],
      ["I watch", "he watches"],
      ["I live", "she lives"],
    ], { skill: "words" }),
    missing("enny1-t4", "Quelle lettre manque ? (« il travaille »)", "he work", "", "s", ["s", "es", "z"]),
    speak("enny1-t5", "Tell me about your friend.", "My friend lives in Kazan. She works in a school.", "Mon amie habite à Kazan. Elle travaille dans une école.", { help: "Parle à voix haute d'un ami : où il habite et où il travaille. N'oublie pas le -s !" }),
    choice("enny1-t6", "Comment dire « Je ne travaille pas le dimanche » ?", [
      ["I don't work on Sunday.", true],
      ["I not work on Sunday.", false],
      ["I doesn't work on Sunday.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "stool",
    itemName: "Tabouret haut",
    itemNameRu: "Bar stool",
    ru: "Hooray! A tall stool!",
    en: "Hourra ! Un tabouret haut !",
    a11y: "Un tabouret haut avec un siège rond rouge et un pied brillant, posé près de la fenêtre.",
    image: p("stool"),
    steps: ["Marcus montre à Murzik le petit appartement au-dessus du restaurant.", "Il est minuscule, mais avec vue sur la rue.", "Marcus monte du restaurant un haut tabouret rouge.", "Murzik tournoie dessus : vroum !"],
    bridge: "Le matin, un nouveau client entre au restaurant. Murzik veut tout savoir de lui.",
  },
};

const newyork2: Lesson = {
  id: "en-a1-newyork-2",
  level: "A1",
  cityId: "en-newyork",
  number: 2,
  title: "Does he work here? — Il travaille ici ?",
  minutes: 7,
  goals: ["Demander à propos de quelqu'un : Does he…?", "Répondre : Yes, he does / No, he doesn't", "Dire « il ne… pas » : he doesn't"],
  vocabNote: "La question sur lui ou elle — avec does, et alors le -s du verbe disparaît : He works. → Does he work? La négation — doesn't : She doesn't work here.",
  vocab: [
    v("enny2-1", "Does he work here?", "Il travaille ici ?", "Murzik demande à voix basse à propos du serveur à casquette.", "Écouter Does he work here", p("l2-1")),
    v("enny2-2", "Yes, he does.", "Oui.", "Marcus hoche la tête.", "Écouter Yes, he does", p("l2-2")),
    v("enny2-3", "No, she doesn't.", "Non.", "Rosie secoue la tête.", "Écouter No, she doesn't", p("l2-3")),
    v("enny2-4", "Does she like coffee?", "Elle aime le café ?", "Murzik tient deux tasses et regarde Rosie.", "Écouter Does she like coffee", p("l2-4")),
    v("enny2-5", "She doesn't drink coffee.", "Elle ne boit pas de café.", "Rosie pousse la tasse de café et prend un thé.", "Écouter She doesn't drink coffee", p("l2-5")),
    v("enny2-6", "He doesn't speak Russian.", "Il ne parle pas russe.", "Marcus lève les mains, un point d'interrogation au-dessus de sa tête.", "Écouter He doesn't speak Russian", p("l2-6")),
    v("enny2-7", "What does she do?", "Qu'est-ce qu'elle fait dans la vie ?", "Murzik regarde Rosie avec curiosité.", "Écouter What does she do", p("l2-7")),
  ],
  dialogue: {
    title: "Les clients du matin",
    note: "What does she do? — « Qu'est-ce qu'elle fait dans la vie ? » Nurse — « infirmière ».",
    lines: [
      line("murzik", "Marcus, does Rosie work here?", "Marcus, Rosie travaille ici ?"),
      line("marcus", "No, she doesn't. She's a nurse.", "Non. Elle est infirmière."),
      line("murzik", "Does she like coffee?", "Elle aime le café ?"),
      line("marcus", "No, she doesn't drink coffee. She drinks tea with milk.", "Non, elle ne boit pas de café. Elle boit du thé au lait."),
      line("tom", "Tea with milk! Like an English lady!", "Du thé au lait ! Comme une vraie Anglaise !"),
      line("rosie", "My grandma is English! Does Tom live in London?", "Ma grand-mère est anglaise ! Et Tom habite à Londres ?"),
      line("marcus", "Yes, he does!", "Oui !"),
    ],
    gist: choice("enny2-d1", "Que boit Rosie ?", [
      ["Du thé au lait.", true],
      ["Du café noir.", false],
      ["Du jus d'orange.", false],
    ]),
  },
  grammar: [
    {
      title: "Does / doesn't",
      paragraphs: [
        "Avec he / she / it, questions et négations se construisent avec does : Does he work here? — Yes, he does. / No, he doesn't.",
        "Après does et doesn't, le verbe est sans -s : Does she drink? (pas drinks !). She doesn't drink coffee.",
      ],
      examples: [
        { ru: "Does Marcus cook? — Yes, he does.", en: "Marcus cuisine ? — Oui." },
        { ru: "Rosie doesn't drink coffee.", en: "Rosie ne boit pas de café." },
      ],
    },
  ],
  tasks: [
    choice("enny2-t1", "Comment demander « Elle parle anglais ? »", [
      ["Does she speak English?", true],
      ["Does she speaks English?", false],
      ["Do she speak English?", false],
    ], { skill: "grammar" }),
    listen("enny2-t2", "Écoute. Travaille-t-il ici ?", "No, he doesn't work here.", [
      ["Non, il ne travaille pas ici.", true],
      ["Oui, il travaille ici.", false],
      ["Il travaille le week-end.", false],
    ]),
    match("enny2-t3", "Relie les paires.", [
      ["Yes, he does.", "Oui. (pour lui)"],
      ["No, she doesn't.", "Non. (pour elle)"],
      ["nurse", "infirmière"],
      ["drink", "boire"],
    ], { skill: "words" }),
    missing("enny2-t4", "Quelle lettre manque ? (« ne… pas »)", "does", "'t", "n", ["n", "m", "t"]),
    speak("enny2-t5", "Does your friend like tea?", "Yes, he does. He drinks tea every day.", "Oui. Il boit du thé tous les jours.", { help: "Réponds à voix haute à propos d'un ami." }),
    choice("enny2-t6", "Comment dire « Il cuisine tous les jours » ?", [
      ["He cooks every day.", true],
      ["He cook every day.", false],
      ["He is cook every day.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "waffle-iron",
    itemName: "Gaufrier",
    itemNameRu: "Waffle iron",
    ru: "Hooray! A waffle iron!",
    en: "Hourra ! Un gaufrier !",
    a11y: "Un vieux gaufrier en fonte à longs manches, à côté une assiette de gaufres dorées.",
    image: p("waffle-iron"),
    steps: ["Rosie apporte de chez elle un vieux gaufrier.", "« My grandma's. She doesn't use it now. » — « Celui de ma grand-mère. Elle ne s'en sert plus. »", "Marcus montre comment faire des gaufres.", "Le gaufrier est maintenant à Murzik."],
    bridge: "Dans la journée, Marcus met Murzik au comptoir : « Today you take the orders! »",
  },
};

const newyork3: Lesson = {
  id: "en-a1-newyork-3",
  level: "A1",
  cityId: "en-newyork",
  number: 3,
  title: "I'd like a bagel — Je voudrais un bagel",
  minutes: 7,
  goals: ["Commander à manger : I'd like…", "Demander au client : Would you like…?", "Demander : sur place ou à emporter ?"],
  vocabNote: "I'd like — la forme courte de I would like, « je voudrais ». C'est plus poli que I want. To go — « à emporter » (en Grande-Bretagne — to take away).",
  vocab: [
    v("enny3-1", "What would you like?", "Vous désirez ?", "Murzik au comptoir avec un carnet et un crayon.", "Écouter What would you like", p("l3-1")),
    v("enny3-2", "I'd like a bagel, please.", "Je voudrais un bagel, s'il vous plaît.", "Un client montre un bagel au sésame.", "Écouter I'd like a bagel, please", p("l3-2")),
    v("enny3-3", "Would you like a drink?", "Vous voulez quelque chose à boire ?", "Murzik montre la cafetière et le pichet de jus.", "Écouter Would you like a drink", p("l3-3")),
    v("enny3-4", "An orange juice, please.", "Un jus d'orange, s'il vous plaît.", "Un grand verre de jus d'orange.", "Écouter An orange juice, please", p("l3-4")),
    v("enny3-5", "For here or to go?", "Sur place ou à emporter ?", "Murzik tient une assiette dans une patte et un sachet en papier dans l'autre.", "Écouter For here or to go", p("l3-5")),
    v("enny3-6", "To go, please.", "À emporter, s'il vous plaît.", "Le client prend le sachet en papier et le gobelet.", "Écouter To go, please", p("l3-6")),
    v("enny3-7", "Coming right up!", "Ça arrive !", "Marcus met déjà le bagel dans le grille-pain.", "Écouter Coming right up", p("l3-7")),
  ],
  dialogue: {
    title: "Murzik prend la commande",
    note: "Cream cheese — « fromage frais ». À New York, le bagel au fromage frais, c'est le petit-déjeuner classique.",
    lines: [
      line("murzik", "Good morning! What would you like?", "Bonjour ! Vous désirez ?"),
      line("passerby", "I'd like a bagel with cream cheese, please.", "Je voudrais un bagel au fromage frais, s'il vous plaît."),
      line("murzik", "Would you like a drink?", "Vous voulez quelque chose à boire ?"),
      line("passerby", "Yes, an orange juice, please.", "Oui, un jus d'orange, s'il vous plaît."),
      line("murzik", "For here or to go?", "Sur place ou à emporter ?"),
      line("passerby", "To go, please. I'm late!", "À emporter, s'il vous plaît. Je suis en retard !"),
      line("marcus", "Coming right up!", "Ça arrive !"),
    ],
    gist: choice("enny3-d1", "Qu'a commandé la cliente ?", [
      ["Un bagel et un jus d'orange, à emporter.", true],
      ["Des pancakes et un café, sur place.", false],
      ["Juste un café.", false],
    ]),
  },
  grammar: [
    {
      title: "I'd like / Would you like…?",
      paragraphs: [
        "Pour commander : I'd like + la chose : I'd like a coffee, please. C'est plus poli que I want — comme « je voudrais » face à « je veux ».",
        "Pour proposer : Would you like + la chose ? Would you like some tea? La réponse : Yes, please. / No, thank you.",
      ],
      examples: [
        { ru: "I'd like a sandwich, please.", en: "Je voudrais un sandwich, s'il vous plaît." },
        { ru: "Would you like a drink? — Yes, please.", en: "Vous voulez quelque chose à boire ? — Oui, s'il vous plaît." },
      ],
    },
  ],
  tasks: [
    choice("enny3-t1", "Comment commander poliment un café ?", [
      ["I'd like a coffee, please.", true],
      ["I like a coffee, please.", false],
      ["Give me coffee.", false],
    ], { skill: "grammar" }),
    listen("enny3-t2", "Écoute. Que commande-t-on ?", "I'd like a sandwich and a tea, please. For here.", [
      ["Un sandwich et un thé, sur place.", true],
      ["Un sandwich et un jus, à emporter.", false],
      ["Un bagel et un thé, sur place.", false],
    ]),
    match("enny3-t3", "Relie les paires.", [
      ["to go", "à emporter"],
      ["for here", "sur place"],
      ["juice", "jus"],
      ["Coming right up!", "Ça arrive !"],
    ], { skill: "words" }),
    spell("enny3-t4", "Assemble le mot « jus ».", "juice"),
    speak("enny3-t5", "What would you like?", "I'd like a tea and a bagel, please.", "Je voudrais un thé et un bagel, s'il vous plaît.", { help: "Commande à voix haute." }),
    choice("enny3-t6", "Comment demander « Elle aime le café ? »", [
      ["Does she like coffee?", true],
      ["Do she like coffee?", false],
      ["Does she likes coffee?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cookie-jar",
    itemName: "Bocal à biscuits",
    itemNameRu: "Cookie jar",
    ru: "Hooray! A cookie jar!",
    en: "Hourra ! Un bocal à biscuits !",
    a11y: "Un grand bocal en verre avec un couvercle, plein de cookies ronds aux pépites de chocolat.",
    image: p("cookie-jar"),
    steps: ["Murzik a pris vingt commandes !", "Marcus lui tape fièrement sur l'épaule.", "« You're a natural! » — « Tu es un serveur né ! »", "Il offre à Murzik le bocal à biscuits."],
    bridge: "Le soir, Marcus prépare quelque chose de nouveau, mais il n'a plus de lait.",
  },
};

const newyork4: Lesson = {
  id: "en-a1-newyork-4",
  level: "A1",
  cityId: "en-newyork",
  number: 4,
  title: "Some milk, any sugar? — Du lait, du sucre ?",
  minutes: 7,
  goals: ["Dire « du, un peu de » : some milk", "Demander « y a-t-il » : any sugar?", "Dire « pas du tout de » : not any"],
  vocabNote: "Some — « du, de la, des » dans l'affirmation : some milk. Any — dans la question et la négation : Have we got any sugar? We haven't got any eggs.",
  vocab: [
    v("enny4-1", "some milk", "du lait", "Marcus verse un peu de lait dans un saladier.", "Écouter some milk", p("l4-1")),
    v("enny4-2", "Have we got any sugar?", "On a du sucre ?", "Marcus regarde dans le sucrier vide.", "Écouter Have we got any sugar", p("l4-2")),
    v("enny4-3", "We haven't got any eggs.", "On n'a pas d'œufs.", "Une boîte à œufs vide.", "Écouter We haven't got any eggs", p("l4-3")),
    v("enny4-4", "some flour", "de la farine", "Murzik tout couvert de farine, un nuage de farine vole.", "Écouter some flour", p("l4-4")),
    v("enny4-5", "Can you buy some eggs?", "Tu peux acheter des œufs ?", "Marcus tend à Murzik un sac et de l'argent.", "Écouter Can you buy some eggs", p("l4-5")),
    v("enny4-6", "a bottle of milk", "une bouteille de lait", "Une bouteille de lait en verre.", "Écouter a bottle of milk", p("l4-6")),
    v("enny4-7", "a box of eggs", "une boîte d'œufs", "Une boîte d'une dizaine d'œufs.", "Écouter a box of eggs", p("l4-7")),
  ],
  dialogue: {
    title: "Le frigo vide",
    note: "Fridge — « frigo ». Store — « magasin » (le mot américain ; le mot britannique est shop).",
    lines: [
      line("marcus", "Pancakes! We need some milk, some flour and some eggs.", "Des pancakes ! Il nous faut du lait, de la farine et des œufs."),
      line("murzik", "Have we got any eggs?", "On a des œufs ?"),
      line("marcus", "Let me see… No, we haven't got any eggs. And we haven't got any milk!", "Laisse-moi voir… Non, on n'a pas d'œufs. Et on n'a pas de lait !"),
      line("marcus", "Murzik, can you buy some eggs and a bottle of milk?", "Murzik, tu peux acheter des œufs et une bouteille de lait ?"),
      line("murzik", "Of course! Where is the store?", "Bien sûr ! Où est le magasin ?"),
      line("marcus", "On the corner. Thanks, partner!", "Au coin de la rue. Merci, partenaire !"),
    ],
    gist: choice("enny4-d1", "Que n'a pas Marcus ?", [
      ["Des œufs et du lait.", true],
      ["De la farine et du sucre.", false],
      ["Il a tout.", false],
    ]),
  },
  grammar: [
    {
      title: "Some et any",
      paragraphs: [
        "Some — dans l'affirmation : I need some milk. We've got some eggs. Any — dans la question et la négation : Have you got any milk? We haven't got any eggs. C'est l'équivalent de nos « du / de la / des » et « pas de ».",
        "Quand on propose quelque chose, on dit some aussi : Would you like some tea?",
      ],
      examples: [
        { ru: "Can I have some water, please?", en: "Je peux avoir de l'eau, s'il vous plaît ?" },
        { ru: "Have you got any apples? — No, I haven't got any.", en: "Tu as des pommes ? — Non, je n'en ai pas." },
      ],
    },
  ],
  tasks: [
    choice("enny4-t1", "Comment demander « Tu as du sucre ? »", [
      ["Have you got any sugar?", true],
      ["Has you got any sugar?", false],
      ["You got any sugar have?", false],
    ], { skill: "grammar" }),
    listen("enny4-t2", "Écoute. Que faut-il acheter ?", "We need some bread and a bottle of milk.", [
      ["Du pain et une bouteille de lait.", true],
      ["Des œufs et de la farine.", false],
      ["Du sucre et du lait.", false],
    ]),
    match("enny4-t3", "Relie les paires.", [
      ["milk", "lait"],
      ["eggs", "œufs"],
      ["flour", "farine"],
      ["sugar", "sucre"],
    ], { skill: "words" }),
    missing("enny4-t4", "Quelle lettre manque ? (« sucre »)", "su", "ar", "g", ["g", "k", "j"]),
    speak("enny4-t5", "Would you like some tea?", "Yes, please. With some milk.", "Oui, s'il vous plaît. Avec du lait.", { help: "Réponds à voix haute." }),
    choice("enny4-t6", "Comment commander poliment un bagel ?", [
      ["I'd like a bagel, please.", true],
      ["I like bagel.", false],
      ["Bagel give, please.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "napkin-holder",
    itemName: "Porte-serviettes",
    itemNameRu: "Napkin holder",
    ru: "Hooray! A napkin holder!",
    en: "Hourra ! Un porte-serviettes !",
    a11y: "Un porte-serviettes en métal brillant, comme dans les diners américains, plein de serviettes blanches.",
    image: p("napkin-holder"),
    steps: ["Murzik rapporte les œufs et le lait.", "Marcus fait toute une montagne de pancakes.", "Murzik est couvert de farine et de sirop !", "Marcus rit et lui offre le porte-serviettes."],
    bridge: "Le jour de repos, Rosie invite tout le monde à un grand petit-déjeuner américain.",
  },
};

const newyork5: Lesson = {
  id: "en-a1-newyork-5",
  level: "A1",
  cityId: "en-newyork",
  number: 5,
  title: "Big portions! — Des portions énormes !",
  minutes: 7,
  goals: ["Nommer les plats du petit-déjeuner et du déjeuner", "Dire ce que tu manges au petit-déjeuner", "Dire « je n'ai plus faim »"],
  vocabNote: "Les portions américaines sont grandes. I'm full — « je n'ai plus faim, je suis rassasié ». Delicious — « délicieux ».",
  vocab: [
    v("enny5-1", "pancakes with syrup", "pancakes au sirop", "Une pile de pancakes épais nappés de sirop d'érable.", "Écouter pancakes with syrup", p("l5-1")),
    v("enny5-2", "eggs and bacon", "œufs au bacon", "Une assiette avec des œufs et des tranches de bacon.", "Écouter eggs and bacon", p("l5-2")),
    v("enny5-3", "a burger and fries", "un burger avec des frites", "Un haut burger et une montagne de frites.", "Écouter a burger and fries", p("l5-3")),
    v("enny5-4", "a salad", "une salade", "Un bol de salade verte avec des tomates.", "Écouter a salad", p("l5-4")),
    v("enny5-5", "It's huge!", "C'est énorme !", "Murzik dépasse de derrière un énorme burger.", "Écouter It's huge", p("l5-5")),
    v("enny5-6", "It's delicious!", "C'est délicieux !", "Murzik ferme les yeux de plaisir.", "Écouter It's delicious", p("l5-6")),
    v("enny5-7", "I'm full.", "Je n'ai plus faim.", "Murzik se renverse sur le dossier de sa chaise en se caressant le ventre rond.", "Écouter I'm full", p("l5-7")),
  ],
  dialogue: {
    title: "Petit-déjeuner chez Rosie",
    note: "Usually — « d'habitude ». Toast — « toast, pain grillé ».",
    lines: [
      line("rosie", "Breakfast! Pancakes, eggs and bacon!", "Petit-déjeuner ! Pancakes, œufs et bacon !"),
      line("murzik", "Wow! It's huge! In Russia I usually have porridge for breakfast.", "Ouah ! C'est énorme ! En Russie, au petit-déjeuner, je mange d'habitude du porridge."),
      line("tom", "In England we have eggs and toast.", "Et en Angleterre, on mange des œufs et des toasts."),
      line("rosie", "Here in America we have a big breakfast! Do you like pancakes?", "Et ici, en Amérique, on a un grand petit-déjeuner ! Tu aimes les pancakes ?"),
      line("murzik", "Yes! It's delicious!", "Oui ! C'est délicieux !"),
      line("murzik", "But now… I'm full!", "Mais maintenant… je n'ai plus faim !"),
    ],
    gist: choice("enny5-d1", "Que mange Murzik d'habitude au petit-déjeuner en Russie ?", [
      ["Du porridge.", true],
      ["Des pancakes au sirop.", false],
      ["Des œufs et des toasts.", false],
    ]),
  },
  grammar: [
    {
      title: "Have breakfast, have pancakes",
      paragraphs: [
        "Avec la nourriture, le verbe have veut dire « manger, boire, prendre » : I have breakfast at eight. I have eggs for breakfast. We have tea.",
        "For breakfast — « au petit-déjeuner », for lunch — « au déjeuner », for dinner — « au dîner ».",
      ],
      examples: [
        { ru: "I have porridge for breakfast.", en: "Au petit-déjeuner, je mange du porridge." },
        { ru: "She has a salad for lunch.", en: "Au déjeuner, elle mange une salade." },
      ],
    },
  ],
  tasks: [
    choice("enny5-t1", "Comment dire « Au déjeuner, il mange de la soupe » ?", [
      ["He has soup for lunch.", true],
      ["He have soup for lunch.", false],
      ["He has soup on lunch.", false],
    ], { skill: "grammar" }),
    listen("enny5-t2", "Écoute. Qu'y a-t-il au petit-déjeuner ?", "I have eggs and toast for breakfast.", [
      ["Des œufs et des toasts.", true],
      ["Des pancakes au sirop.", false],
      ["Du porridge et du jus.", false],
    ]),
    match("enny5-t3", "Relie les paires.", [
      ["pancakes", "pancakes"],
      ["fries", "frites"],
      ["huge", "énorme"],
      ["delicious", "délicieux"],
    ], { skill: "words" }),
    missing("enny5-t4", "Quelle lettre manque ? (« salade »)", "sal", "d", "a", ["a", "o", "e"]),
    speak("enny5-t5", "What do you have for breakfast?", "I have coffee and a sandwich for breakfast.", "Au petit-déjeuner, je bois un café et je mange un sandwich.", { help: "Raconte à voix haute ce que tu manges au petit-déjeuner." }),
    choice("enny5-t6", "Comment dire « On n'a pas d'œufs » ?", [
      ["We haven't got any eggs.", true],
      ["We haven't got some eggs.", false],
      ["We not got eggs.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "register",
    itemName: "Tirelire-caisse",
    itemNameRu: "Cash register",
    ru: "Hooray! A little cash register!",
    en: "Hourra ! Une petite caisse !",
    a11y: "Une vieille tirelire-caisse jouet avec des boutons et un tiroir à monnaie coulissant.",
    image: p("register"),
    steps: ["Rosie trouve au grenier une vieille tirelire-caisse.", "Tching ! — le tiroir s'ouvre.", "« For your tips! » — « Pour tes pourboires ! »", "Murzik y dépose sa première pièce."],
    bridge: "Au petit-déjeuner, on découvre : Rosie adore un plat, et Marcus ne peut pas le supporter.",
  },
};

const newyork6: Lesson = {
  id: "en-a1-newyork-6",
  level: "A1",
  cityId: "en-newyork",
  number: 6,
  title: "I don't like… — Je n'aime pas…",
  minutes: 7,
  goals: ["Dire ce que tu aimes et ce que tu n'aimes pas", "Parler d'un autre : she likes, he doesn't like", "Demander : Do you like…?"],
  vocabNote: "Like — « aimer » (la nourriture, les choses). Love — « adorer ». Hate — « détester ».",
  vocab: [
    v("enny6-1", "I like pizza.", "J'aime la pizza.", "Murzik avec une part de pizza, le fromage file.", "Écouter I like pizza", p("l6-1")),
    v("enny6-2", "I love chocolate!", "J'adore le chocolat !", "Murzik serre une tablette de chocolat dans ses bras.", "Écouter I love chocolate", p("l6-2")),
    v("enny6-3", "I don't like onions.", "Je n'aime pas les oignons.", "Murzik grimace et pousse les oignons au bord de l'assiette.", "Écouter I don't like onions", p("l6-3")),
    v("enny6-4", "She likes hot dogs.", "Elle aime les hot-dogs.", "Rosie avec un hot-dog près d'un chariot dans la rue.", "Écouter She likes hot dogs", p("l6-4")),
    v("enny6-5", "He doesn't like hot dogs.", "Il n'aime pas les hot-dogs.", "Marcus secoue la tête en regardant un hot-dog.", "Écouter He doesn't like hot dogs", p("l6-5")),
    v("enny6-6", "Do you like cheesecake?", "Tu aimes le cheesecake ?", "Une part de cheesecake new-yorkais à la fraise.", "Écouter Do you like cheesecake", p("l6-6")),
    v("enny6-7", "I hate mushrooms.", "Je déteste les champignons.", "Tom regarde avec horreur une assiette de champignons.", "Écouter I hate mushrooms", p("l6-7")),
  ],
  dialogue: {
    title: "La dispute des hot-dogs",
    note: "Cheesecake — le gâteau au fromage frais ; le cheesecake new-yorkais est mondialement célèbre. Crazy — « fou, incroyable ».",
    lines: [
      line("rosie", "I love hot dogs! Marcus, do you like hot dogs?", "J'adore les hot-dogs ! Marcus, tu aimes les hot-dogs ?"),
      line("marcus", "No, I don't. I hate hot dogs!", "Non. Je déteste les hot-dogs !"),
      line("rosie", "A cook in New York, and he doesn't like hot dogs! Crazy!", "Un cuisinier à New York qui n'aime pas les hot-dogs ! Incroyable !"),
      line("marcus", "I like cheesecake. Murzik, do you like cheesecake?", "Moi, j'aime le cheesecake. Murzik, tu aimes le cheesecake ?"),
      line("murzik", "I don't know! But I love cheese!", "Je ne sais pas ! Mais j'adore le fromage !"),
      line("marcus", "Then you'll love it! It's my recipe… no, it's Mrs Hope's recipe!", "Alors tu vas adorer ! C'est ma recette… non, c'est la recette de Mme Hope !"),
    ],
    gist: choice("enny6-d1", "Que déteste Marcus ?", [
      ["Les hot-dogs.", true],
      ["Le cheesecake.", false],
      ["Le fromage.", false],
    ]),
  },
  grammar: [
    {
      title: "Like / doesn't like",
      paragraphs: [
        "I like, you like, we like. Mais : he likes, she likes. La négation : I don't like, she doesn't like.",
        "La question : Do you like pizza? Does he like pizza? Après like, pour la nourriture en général — sans a ni the : ce qui se compte se met au pluriel (I like apples), le reste ne change pas (I like cheese). Comme en français : « j'aime les pommes », « j'aime le fromage ».",
      ],
      examples: [
        { ru: "Rosie likes hot dogs, but Marcus doesn't.", en: "Rosie aime les hot-dogs, mais pas Marcus." },
        { ru: "Do you like fish? — No, I don't.", en: "Tu aimes le poisson ? — Non." },
      ],
    },
  ],
  tasks: [
    choice("enny6-t1", "Comment dire « Il n'aime pas les oignons » ?", [
      ["He doesn't like onions.", true],
      ["He don't like onions.", false],
      ["He doesn't likes onions.", false],
    ], { skill: "grammar" }),
    listen("enny6-t2", "Écoute. Qu'aime-t-elle ?", "She loves chocolate, but she doesn't like cake.", [
      ["Le chocolat, mais pas le gâteau.", true],
      ["Le gâteau, mais pas le chocolat.", false],
      ["Le chocolat et le gâteau.", false],
    ]),
    match("enny6-t3", "Relie les paires.", [
      ["love", "adorer"],
      ["like", "aimer"],
      ["hate", "détester"],
      ["onions", "oignons"],
    ], { skill: "words" }),
    spell("enny6-t4", "Assemble le mot « fromage ».", "cheese"),
    speak("enny6-t5", "Do you like pizza?", "Yes, I do. I love pizza!", "Oui. J'adore la pizza !", { help: "Dis à voix haute ce que tu aimes et ce que tu n'aimes pas." }),
    choice("enny6-t6", "Comment dire « Je n'ai plus faim » ?", [
      ["I'm full.", true],
      ["I'm huge.", false],
      ["I'm delicious.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "poster",
    itemName: "Affiche du pont de Brooklyn",
    itemNameRu: "Bridge poster",
    ru: "Hooray! A poster!",
    en: "Hourra ! Une affiche !",
    a11y: "Une grande affiche du pont de Brooklyn au coucher du soleil, accrochée au mur au-dessus du lit.",
    image: p("poster"),
    steps: ["Tom photographie le pont de Brooklyn au coucher du soleil.", "Il imprime le cliché en grande affiche.", "« For your wall! » — « Pour ton mur ! »", "Maintenant, New York est toujours avec Murzik."],
    bridge: "Marcus sort une enveloppe d'un tiroir : « Murzik, this is yours ».",
  },
};

const newyork7: Lesson = {
  id: "en-a1-newyork-7",
  level: "A1",
  cityId: "en-newyork",
  number: 7,
  title: "Goodbye, New York! — Au revoir, New York !",
  minutes: 8,
  goals: ["Parler de quelqu'un : où il habite, ce qu'il fait, ce qu'il aime", "Commander à manger", "Revoir tous les mots de New York"],
  vocabNote: "On revoit : he works / she lives, does / doesn't, I'd like, some / any, like / don't like.",
  vocab: [
    v("enny7-1", "This is yours.", "C'est pour toi.", "Marcus tend une enveloppe à Murzik.", "Écouter This is yours", p("l7-1")),
    v("enny7-2", "the recipe for cheesecake", "la recette du cheesecake", "Une page avec le dessin d'un cheesecake.", "Écouter the recipe for cheesecake", p("l7-2")),
    v("enny7-3", "She sends me a card every year.", "Elle m'envoie une carte chaque année.", "Une pile de vieilles cartes venues de Londres.", "Écouter She sends me a card every year", p("l7-3")),
    v("enny7-4", "a neon sign", "une enseigne au néon", "Une enseigne au néon en forme de tasse de café fumante.", "Écouter a neon sign", p("l7-4")),
    v("enny7-5", "It's from my diner.", "Elle vient de mon restaurant.", "Marcus décroche l'enseigne de la fenêtre.", "Écouter It's from my diner", p("l7-5")),
    v("enny7-6", "Good luck!", "Bonne chance !", "Marcus et Rosie font signe devant la porte du restaurant.", "Écouter Good luck", p("l7-6")),
    v("enny7-7", "Keep in touch!", "Reste en contact !", "Rosie montre son téléphone et fait un clin d'œil.", "Écouter Keep in touch", p("l7-7")),
  ],
  dialogue: {
    title: "La sixième page",
    note: "Boston — une vieille ville du nord-est des États-Unis.",
    lines: [
      line("marcus", "Murzik, this is yours. It's from Mrs Hope's book.", "Murzik, c'est pour toi. Ça vient du livre de Mme Hope."),
      line("murzik", "The recipe for cheesecake! Does Mrs Hope know you?", "La recette du cheesecake ! Mme Hope vous connaît ?"),
      line("marcus", "Yes, she does. She sends me a card every year.", "Oui. Elle m'envoie une carte chaque année."),
      line("marcus", "And this neon sign is for your café. It's from my diner.", "Et cette enseigne au néon est pour ton café. Elle vient de mon restaurant."),
      line("tom", "Thank you, Marcus! Where's the next page?", "Merci, Marcus ! Où est la page suivante ?"),
      line("rosie", "In Boston! My friend Emily works in a shop there. Good luck!", "À Boston ! Mon amie Emily travaille dans un magasin là-bas. Bonne chance !"),
      line("marcus", "Keep in touch, partner!", "Reste en contact, partenaire !"),
    ],
    gist: choice("enny7-d1", "Où est la page suivante ?", [
      ["À Boston, chez Emily.", true],
      ["À Londres, chez Mme Hope.", false],
      ["À Brooklyn, chez Rosie.", false],
    ]),
  },
  grammar: [
    {
      title: "Parler de quelqu'un",
      paragraphs: [
        "Où il habite et travaille : Marcus lives in Manhattan. He works in a diner. Ce qu'il fait : He cooks every day. Ce qu'il aime : He likes cheesecake, but he doesn't like hot dogs.",
        "Les questions : Does he live here? What does he do? Does she like tea?",
      ],
      examples: [
        { ru: "Rosie is a nurse. She lives in Brooklyn. She likes hot dogs.", en: "Rosie est infirmière. Elle habite à Brooklyn. Elle aime les hot-dogs." },
        { ru: "Does Marcus like hot dogs? — No, he doesn't.", en: "Marcus aime les hot-dogs ? — Non." },
      ],
    },
  ],
  tasks: [
    listen("enny7-t1", "Examen d'écoute. Que raconte-t-on sur Marcus ?", "Marcus is a cook. He lives in Manhattan. He works every day. He likes cheesecake, but he doesn't like hot dogs.", [
      ["Cuisinier, il habite à Manhattan, il aime le cheesecake, il n'aime pas les hot-dogs.", true],
      ["Infirmier, il habite à Brooklyn, il aime les hot-dogs.", false],
      ["Cuisinier, il habite à Boston, il n'aime pas le cheesecake.", false],
    ]),
    choice("enny7-t2", "Choisis la phrase correcte.", [
      ["She doesn't drink coffee.", true],
      ["She don't drink coffee.", false],
      ["She doesn't drinks coffee.", false],
    ], { skill: "grammar" }),
    match("enny7-t3", "Relie les paires.", [
      ["Good luck!", "Bonne chance !"],
      ["Keep in touch!", "Reste en contact !"],
      ["yours", "à toi"],
      ["a neon sign", "enseigne au néon"],
    ], { skill: "words" }),
    spell("enny7-t4", "Assemble le mot « chance ».", "luck"),
    speak("enny7-t5", "Tell me about your friend.", "My friend is a teacher. She lives in Kazan. She likes books.", "Mon amie est professeure. Elle habite à Kazan. Elle aime les livres.", { help: "Parle à voix haute d'un ami ou d'une amie. N'oublie pas le -s !" }),
    script("enny7-t6", "Revois tout New York. Termine les conversations au restaurant.", [
      { speaker: "Serveur", text: "What would you like?" },
      { speaker: "Toi", answer: "I'd like pancakes, please.", options: ["I'd like pancakes, please.", "I like pancakes, please.", "I'd likes pancakes."] },
      { speaker: "Serveur", text: "Would you like a drink?" },
      { speaker: "Toi", answer: "Yes, an orange juice, please.", options: ["Yes, an orange juice, please.", "Yes, a orange juice, please.", "No, I'm full."] },
      { speaker: "Serveur", text: "For here or to go?" },
      { speaker: "Toi", answer: "For here, please.", options: ["For here, please.", "For go, please.", "To here, please."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "neon",
    itemName: "Enseigne au néon",
    itemNameRu: "Neon sign",
    ru: "Hooray! A neon sign!",
    en: "Hourra ! Une enseigne au néon !",
    a11y: "Une enseigne au néon en forme de tasse de café avec des volutes de vapeur, qui brille d'une lumière chaude rose et orange.",
    image: p("neon"),
    steps: ["Marcus décroche de la fenêtre l'enseigne-tasse au néon.", "Elle brille en rose et orange.", "« Every café needs a light! » — « Chaque café a besoin d'une lumière ! »", "Murzik l'enveloppe soigneusement dans le plaid."],
    bridge: "La page suivante est à Boston, chez Emily.",
  },
};

const story: CityStory = {
  home: {
    name: "Petit appartement au-dessus du restaurant",
    nameRu: "Murzik's flat in New York",
    image: p("home"),
    a11y: "Un minuscule appartement vide avec un mur en briques et une fenêtre sur l'escalier de secours. Dehors, une rue new-yorkaise bruyante. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "neon",
  welcomeRu: "Hello, New York!",
  welcomeEn: "Bonjour, New York !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom à New York : d'immenses immeubles qui touchent le ciel, des taxis jaunes, le bruit des rues.",
  departureImage: p("departure"),
  departureA11y: "Marcus en tablier et Rosie font signe au revoir devant la porte du restaurant.",
  finale: [
    {
      image: p("page"),
      a11y: "Gros plan : la sixième page du livre de recettes, la recette du cheesecake. Dans la marge, un mot écrit à la main.",
      lines: [
        { en: "Murzik colle la sixième page. Dans la marge — un mot de Mme Hope :" },
        { ru: "At my café, I remembered every guest's favourite drink.", en: "Dans mon café, je me souvenais de la boisson préférée de chaque client." },
        { en: "Murzik pense à Rosie : du thé au lait. Lui aussi s'en souviendra." },
      ],
    },
    {
      image: p("neon"),
      a11y: "Murzik fait le tour de son petit appartement au-dessus du restaurant, meublé leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de son appartement new-yorkais. Tom le photographie pour le journal." },
        { en: "Pour son futur café, il emporte l'enseigne-tasse au néon." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, Tom fête ça avec lui.",
      lines: [
        { ru: "New York complete!", en: "New York terminé !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Marcus et Rosie font signe de la main pour dire au revoir.",
      lines: [
        { ru: "Goodbye, Marcus! Goodbye, Rosie!", en: "Au revoir, Marcus ! Au revoir, Rosie !" },
        { ru: "Next stop: Boston!", en: "Prochain arrêt : Boston !" },
      ],
    },
    {
      image: p("train"),
      a11y: "Le train roule vers le nord le long de la mer ; par la fenêtre, des arbres d'automne.",
      lines: [{ ru: "New York → Boston", en: "New York → Boston" }],
    },
    {
      image: pic("en/boston/arrival"),
      a11y: "Murzik et Tom à Boston : de vieilles maisons en briques, des feuilles d'automne jaunes et rouges, il pleut.",
      lines: [
        { ru: "Hello, Boston!", en: "Bonjour, Boston !" },
        { ru: "It's raining again!", en: "Il pleut encore !" },
      ],
    },
  ],
};

export const enNewYorkFr = {
  id: "en-newyork",
  name: "New York",
  nameEn: "New York",
  lessons: [newyork1, newyork2, newyork3, newyork4, newyork5, newyork6, newyork7],
  story,
};
