import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/**
 * Bath · « Combien ça coûte ? » · lessons 1–7 — French version of ../bath.ts.
 * Same story, same English phrases and pictures; explanations, translations
 * and tasks are written for French speakers.
 * In lesson data `ru` = English text, `en` = French translation.
 */

const p = (name: string) => pic(`en/bath/${name}`);

const bath1: Lesson = {
  id: "en-a1-bath-1",
  level: "A1",
  cityId: "en-bath",
  number: 1,
  title: "This or that? — Ceci ou cela ?",
  minutes: 7,
  goals: ["Demander « Qu'est-ce que c'est ? »", "Dire this (ici, tout près) et that (là, plus loin)", "Choisir a ou an"],
  vocabNote: "This, c'est ce qui est tout près, sous la main. That, c'est ce qui est plus loin. On met a devant une consonne (a bun) et an devant une voyelle (an apple).",
  vocab: [
    v("enba1-1", "What's this?", "Qu'est-ce que c'est ?", "Murzik tient dans ses pattes un petit pain rond et gonflé.", "Écouter What's this", p("l1-1")),
    v("enba1-2", "It's a bun.", "C'est un petit pain.", "Un gros petit pain bien gonflé sur une planche en bois.", "Écouter It's a bun", p("l1-2")),
    v("enba1-3", "This is a cake.", "Voici un gâteau.", "Mme Green tient un gâteau aux fruits rouges.", "Écouter This is a cake", p("l1-3")),
    v("enba1-4", "That is a pie.", "Et ça, c'est une tourte.", "Murzik montre de la patte une tourte sur l'étagère du fond.", "Écouter That is a pie", p("l1-4")),
    v("enba1-5", "an apple", "une pomme", "Une pomme rouge et brillante.", "Écouter an apple", p("l1-5")),
    v("enba1-6", "an egg", "un œuf", "Un œuf blanc dans un petit coquetier.", "Écouter an egg", p("l1-6")),
    v("enba1-7", "What's that?", "Et qu'est-ce que c'est, là-bas ?", "Murzik montre un énorme pain dans la vitrine.", "Écouter What's that", p("l1-7")),
  ],
  dialogue: {
    title: "La boulangerie de Mme Green",
    note: "Mme Green est boulangère, une vieille amie de Mme Hope. Sally Lunn bun — le fameux gros petit pain de Bath.",
    lines: [
      line("green", "Hello! You're Murzik! Come in, come in!", "Bonjour ! Tu es Murzik ! Entre, entre !"),
      line("murzik", "Hello, Mrs Green! What's this?", "Bonjour, Mme Green ! Qu'est-ce que c'est ?"),
      line("green", "It's a bun. A Sally Lunn bun.", "C'est un petit pain. Un Sally Lunn bun."),
      line("murzik", "It's very big! And what's that?", "Il est très gros ! Et qu'est-ce que c'est, là-bas ?"),
      line("green", "That's an apple pie.", "Ça, c'est une tourte aux pommes."),
      line("tom", "And this is a cake! Mmm!", "Et voilà un gâteau ! Mmm !"),
    ],
    gist: choice("enba1-d1", "Où est Murzik ?", [
      ["Dans une boulangerie.", true],
      ["Dans le café de Mme Hope.", false],
      ["Au marché.", false],
    ]),
  },
  grammar: [
    {
      title: "This et that, a et an",
      paragraphs: [
        "This — « ceci (ici) », that — « cela (là-bas) » : This is a cake. That is a pie. Le français utilise « ce » pour les deux — l'anglais distingue près et loin.",
        "Devant une chose au singulier, on met a : a bun, a cake. Si le mot commence par une voyelle, c'est an : an apple, an egg, an orange. C'est plus facile à prononcer — comme en français, on évite que deux voyelles se cognent.",
      ],
      examples: [
        { ru: "This is an apple.", en: "Ceci est une pomme." },
        { ru: "That's a pie.", en: "Ça, c'est une tourte." },
      ],
    },
  ],
  tasks: [
    choice("enba1-t1", "Choisis correctement : « un œuf »", [
      ["an egg", true],
      ["a egg", false],
      ["egg a", false],
    ], { skill: "grammar" }),
    listen("enba1-t2", "Écoute. Qu'est-ce que c'est ?", "It's an orange.", [
      ["Une orange.", true],
      ["Une pomme.", false],
      ["Un petit pain.", false],
    ]),
    match("enba1-t3", "Relie les paires.", [
      ["a bun", "un petit pain"],
      ["a cake", "un gâteau"],
      ["a pie", "une tourte"],
      ["an apple", "une pomme"],
    ], { skill: "words" }),
    missing("enba1-t4", "Quelle lettre manque ? (« gâteau »)", "ca", "e", "k", ["k", "c", "ck"]),
    speak("enba1-t5", "What's this?", "It's an apple.", "C'est une pomme.", { help: "Réponds à voix haute : qu'est-ce que c'est ?" }),
    choice("enba1-t6", "Comment dire « Il est photographe » ?", [
      ["He's a photographer.", true],
      ["He's photographer.", false],
      ["He photographer.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "jug",
    itemName: "Pot à lait",
    itemNameRu: "Milk jug",
    ru: "Hooray! A milk jug!",
    en: "Hourra ! Un pot à lait !",
    a11y: "Un petit pot à lait en porcelaine blanche en forme de vache, posé sur le rebord de la fenêtre.",
    image: p("jug"),
    steps: ["Mme Green montre à Murzik son petit appartement au-dessus de la boulangerie.", "Sur le rebord de la fenêtre — un pot à lait en forme de vache.", "« For your tea! » — « Pour ton thé ! »", "Murzik rit : quelle vache amusante !"],
    bridge: "Le matin, beaucoup de travail à la boulangerie : il faut compter toutes les tasses et les assiettes.",
  },
};

const bath2: Lesson = {
  id: "en-a1-bath-2",
  level: "A1",
  cityId: "en-bath",
  number: 2,
  title: "One cup, two cups — Une tasse, deux tasses",
  minutes: 7,
  goals: ["Parler de plusieurs choses : cups, glasses", "Dire these et those", "Retenir les mots spéciaux : people, children"],
  vocabNote: "En général, on ajoute -s : cup — cups. Après s, sh, ch, x — -es : glass — glasses. Certains mots changent complètement : child — children, person — people.",
  vocab: [
    v("enba2-1", "two cups", "deux tasses", "Deux tasses côte à côte sur leurs soucoupes.", "Écouter two cups", p("l2-1")),
    v("enba2-2", "three glasses", "trois verres", "Trois verres d'eau.", "Écouter three glasses", p("l2-2")),
    v("enba2-3", "These are plates.", "Ce sont des assiettes.", "Murzik tient une pile d'assiettes.", "Écouter These are plates", p("l2-3")),
    v("enba2-4", "Those are spoons.", "Et là-bas, ce sont des cuillères.", "Murzik montre les cuillères dans le pot du fond.", "Écouter Those are spoons", p("l2-4")),
    v("enba2-5", "children", "enfants", "Deux enfants collent leur nez à la vitrine de la boulangerie.", "Écouter children", p("l2-5")),
    v("enba2-6", "people", "gens", "Une file de gens devant la boulangerie.", "Écouter people", p("l2-6")),
    v("enba2-7", "How many people?", "Combien de personnes ?", "Mme Green regarde la file par la fenêtre.", "Écouter How many people", p("l2-7")),
  ],
  dialogue: {
    title: "Matin à la boulangerie",
    note: "Queue [kiou] — « la file d'attente ». Les Anglais adorent faire la queue, bien droit et calmement.",
    lines: [
      line("green", "Murzik, how many cups?", "Murzik, combien de tasses ?"),
      line("murzik", "Ten cups and ten plates.", "Dix tasses et dix assiettes."),
      line("green", "Good. And these glasses? And those spoons?", "Bien. Et ces verres-ci ? Et ces cuillères-là ?"),
      line("murzik", "Six glasses… and eight spoons.", "Six verres… et huit cuillères."),
      line("tom", "Look! A queue! How many people?", "Regardez ! Une file ! Combien de personnes ?"),
      line("green", "Twelve people and two children. Let's open!", "Douze personnes et deux enfants. On ouvre !"),
    ],
    gist: choice("enba2-d1", "Combien y a-t-il de gens dans la file ?", [
      ["Douze adultes et deux enfants.", true],
      ["Dix personnes.", false],
      ["Personne.", false],
    ]),
  },
  grammar: [
    {
      title: "Le pluriel : -s, -es, these, those",
      paragraphs: [
        "Pluriel : cup — cups, plate — plates, glass — glasses. Les mots spéciaux : child — children, person — people, man — men, woman — women.",
        "Pour plusieurs choses, this / that deviennent these (celles-ci, tout près) et those (celles-là, plus loin) : These are cups. Those are plates. Le verbe est are.",
      ],
      examples: [
        { ru: "These are my children.", en: "Ce sont mes enfants." },
        { ru: "Those are cakes.", en: "Là-bas, ce sont des gâteaux." },
      ],
    },
  ],
  tasks: [
    choice("enba2-t1", "Comment dire « Ce sont des tasses » (tout près) ?", [
      ["These are cups.", true],
      ["This is cups.", false],
      ["These is cups.", false],
    ], { skill: "grammar" }),
    listen("enba2-t2", "Écoute. Combien de verres ?", "Five glasses, please.", [
      ["Cinq.", true],
      ["Quatre.", false],
      ["Quinze.", false],
    ]),
    match("enba2-t3", "Relie les paires.", [
      ["child", "children"],
      ["person", "people"],
      ["glass", "glasses"],
      ["cup", "cups"],
    ], { skill: "words" }),
    missing("enba2-t4", "Quelle lettre manque ? (« cuillère »)", "sp", "on", "o", ["o", "u", "a"]),
    speak("enba2-t5", "How many cups?", "Two cups, please.", "Deux tasses, s'il vous plaît.", { help: "Réponds à voix haute." }),
    choice("enba2-t6", "Choisis correctement : « une pomme »", [
      ["an apple", true],
      ["a apple", false],
      ["apple an", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "vase",
    itemName: "Vase de fleurs",
    itemNameRu: "Vase",
    ru: "Hooray! A vase of flowers!",
    en: "Hourra ! Un vase de fleurs !",
    a11y: "Un vase en verre bleu avec un bouquet de fleurs du jardin, posé sur la table.",
    image: p("vase"),
    steps: ["Après le travail, les enfants de la file apportent des fleurs à Murzik.", "« Thank you for the buns! » — « Merci pour les petits pains ! »", "Mme Green trouve un vase bleu.", "Les fleurs sont sur la table près de la fenêtre."],
    bridge: "Dans la journée, Murzik apprend à compter l'argent à la caisse.",
  },
};

const bath3: Lesson = {
  id: "en-a1-bath-3",
  level: "A1",
  cityId: "en-bath",
  number: 3,
  title: "Les nombres jusqu'à 100",
  minutes: 7,
  goals: ["Compter par dizaines jusqu'à cent", "Dire n'importe quel nombre jusqu'à cent", "Ne pas confondre thirteen et thirty"],
  vocabNote: "Les dizaines finissent en -ty : thirty, forty, fifty. Vingt et un — twenty-one, avec un tiret. Cent — a hundred ou one hundred.",
  vocab: [
    v("enba3-1", "thirty, forty", "trente, quarante", "Quarante petits pains sur de grandes plaques.", "Écouter thirty, forty", p("l3-1")),
    v("enba3-2", "fifty, sixty", "cinquante, soixante", "Soixante biscuits dans de grands bocaux.", "Écouter fifty, sixty", p("l3-2")),
    v("enba3-3", "seventy, eighty, ninety", "soixante-dix, quatre-vingts, quatre-vingt-dix", "Une vieille dame avec un gâteau, sur le gâteau une bougie en forme de 90.", "Écouter seventy, eighty, ninety", p("l3-3")),
    v("enba3-4", "a hundred", "cent", "Une montagne énorme de cent petits pains.", "Écouter a hundred", p("l3-4")),
    v("enba3-5", "twenty-one", "vingt et un", "Vingt et une bougies sur un gâteau.", "Écouter twenty-one", p("l3-5")),
    v("enba3-6", "thirteen or thirty?", "treize ou trente ?", "Deux pancartes : 13 et 30, Murzik les regarde, perplexe.", "Écouter thirteen or thirty", p("l3-6")),
    v("enba3-7", "It's ninety-nine.", "C'est quatre-vingt-dix-neuf.", "Murzik montre une étiquette avec le nombre 99.", "Écouter It's ninety-nine", p("l3-7")),
  ],
  dialogue: {
    title: "Une commande pour une fête",
    note: "Order — « commande ». Party — « fête ».",
    lines: [
      line("green", "A big order! Forty buns for a party.", "Une grosse commande ! Quarante petits pains pour une fête."),
      line("murzik", "Fourteen or forty?", "Quatorze ou quarante ?"),
      line("green", "Forty! Four-zero.", "Quarante ! Quatre-zéro."),
      line("murzik", "And how many cakes?", "Et combien de gâteaux ?"),
      line("green", "Three cakes and sixty biscuits.", "Trois gâteaux et soixante biscuits."),
      line("tom", "That's a hundred and three things!", "Ça fait cent trois choses !"),
    ],
    gist: choice("enba3-d1", "Combien de petits pains dans la commande ?", [
      ["Quarante.", true],
      ["Quatorze.", false],
      ["Cent.", false],
    ]),
  },
  grammar: [
    {
      title: "Les nombres jusqu'à cent",
      paragraphs: [
        "Les dizaines : twenty, thirty, forty (sans u !), fifty, sixty, seventy, eighty, ninety. Cent — a hundred.",
        "Un nombre en deux parties s'écrit avec un tiret : twenty-five, forty-two, ninety-nine. -teen (13–19) — l'accent est à la fin, -ty (30, 40…) — l'accent est au début.",
      ],
      examples: [
        { ru: "forty-five", en: "quarante-cinq" },
        { ru: "I'm thirty-three.", en: "J'ai trente-trois ans." },
      ],
    },
  ],
  tasks: [
    choice("enba3-t1", "Comment écrire « quarante » correctement ?", [
      ["forty", true],
      ["fourty", false],
      ["fourteen", false],
    ], { skill: "grammar" }),
    listen("enba3-t2", "Écoute. Quel nombre ?", "sixty-two", [
      ["62", true],
      ["26", false],
      ["16", false],
    ]),
    match("enba3-t3", "Relie les paires.", [
      ["thirty", "30"],
      ["fifty", "50"],
      ["eighty", "80"],
      ["a hundred", "100"],
    ], { skill: "words" }),
    missing("enba3-t4", "Quelle lettre manque ? (« quatre-vingt-dix »)", "nin", "ty", "e", ["e", "i", "a"]),
    speak("enba3-t5", "How old is your grandmother?", "She's seventy-five.", "Elle a soixante-quinze ans.", { help: "Réponds à voix haute, dis le nombre." }),
    choice("enba3-t6", "Comment dire « Ce sont des gens » ?", [
      ["These are people.", true],
      ["This is peoples.", false],
      ["These is people.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "candle",
    itemName: "Bougie et bougeoir",
    itemNameRu: "Candle",
    ru: "Hooray! A candle!",
    en: "Hourra ! Une bougie !",
    a11y: "Une grande bougie crème dans un vieux bougeoir en laiton brûle sur la table.",
    image: p("candle"),
    steps: ["La commande est prête : quarante petits pains, trois gâteaux et soixante biscuits.", "L'organisatrice de la fête offre une bougie à Murzik.", "« Thank you, little baker! » — « Merci, petit boulanger ! »", "Le soir, Murzik l'allume près de la fenêtre."],
    bridge: "Demain, Murzik tiendra la caisse tout seul. Ça fait peur !",
  },
};

const bath4: Lesson = {
  id: "en-a1-bath-4",
  level: "A1",
  cityId: "en-bath",
  number: 4,
  title: "How much is it? — Combien ça coûte ?",
  minutes: 7,
  goals: ["Demander le prix", "Dire un prix en livres et en pences", "Dire « cher » et « pas cher »"],
  vocabNote: "En Grande-Bretagne, l'argent, ce sont les livres et les pences : £1 = 100p. Le prix se dit ainsi : £3.50 — three pounds fifty ou simplement three fifty.",
  vocab: [
    v("enba4-1", "How much is it?", "Combien ça coûte ?", "Une cliente montre un petit pain dans la vitrine.", "Écouter How much is it", p("l4-1")),
    v("enba4-2", "It's two pounds.", "Deux livres.", "Étiquette : £2.", "Écouter It's two pounds", p("l4-2")),
    v("enba4-3", "three pounds fifty", "trois livres cinquante", "Étiquette : £3.50.", "Écouter three pounds fifty", p("l4-3")),
    v("enba4-4", "Here you are.", "Voilà, je vous en prie.", "Murzik tend à la cliente un sachet avec un petit pain.", "Écouter Here you are", p("l4-4")),
    v("enba4-5", "Your change.", "Votre monnaie.", "Murzik pose des pièces dans la paume de la cliente.", "Écouter Your change", p("l4-5")),
    v("enba4-6", "It's expensive.", "C'est cher.", "La cliente lève les sourcils en voyant le prix du gâteau.", "Écouter It's expensive", p("l4-6")),
    v("enba4-7", "It's cheap.", "Ce n'est pas cher.", "Un petit biscuit avec une étiquette 50p.", "Écouter It's cheap", p("l4-7")),
  ],
  dialogue: {
    title: "À la caisse",
    note: "How much are they? — « Combien coûtent-ils ? » (pour plusieurs choses).",
    lines: [
      line("passerby", "Hello! How much is this bun?", "Bonjour ! Combien coûte ce petit pain ?"),
      line("murzik", "It's two pounds.", "Deux livres."),
      line("passerby", "And the biscuits? How much are they?", "Et les biscuits ? Combien coûtent-ils ?"),
      line("murzik", "Fifty pence each. They're cheap!", "Cinquante pences pièce. Ce n'est pas cher !"),
      line("passerby", "One bun and two biscuits, please. Here you are, five pounds.", "Un petit pain et deux biscuits, s'il vous plaît. Voilà, cinq livres."),
      line("murzik", "Thank you. Your change — two pounds.", "Merci. Votre monnaie — deux livres."),
    ],
    gist: choice("enba4-d1", "Combien coûte le petit pain ?", [
      ["Deux livres.", true],
      ["Cinquante pences.", false],
      ["Cinq livres.", false],
    ]),
  },
  grammar: [
    {
      title: "How much is it? How much are they?",
      paragraphs: [
        "Pour le prix, on demande How much…? : How much is it? — « Combien ça coûte ? » Pour plusieurs choses — How much are they?",
        "How much — pour l'argent et ce qui ne se compte pas. How many — pour ce qui se compte : How many buns? — « Combien de petits pains ? »",
      ],
      examples: [
        { ru: "How much is the cake? — It's twelve pounds.", en: "Combien coûte le gâteau ? — Douze livres." },
        { ru: "How many buns? — Four, please.", en: "Combien de petits pains ? — Quatre, s'il vous plaît." },
      ],
    },
  ],
  tasks: [
    choice("enba4-t1", "Comment demander le prix des biscuits ?", [
      ["How much are they?", true],
      ["How many is it?", false],
      ["How much is they?", false],
    ], { skill: "grammar" }),
    listen("enba4-t2", "Écoute. Combien ça coûte ?", "It's four pounds twenty.", [
      ["£4.20", true],
      ["£2.40", false],
      ["£14.20", false],
    ]),
    match("enba4-t3", "Relie les paires.", [
      ["expensive", "cher"],
      ["cheap", "pas cher"],
      ["change", "la monnaie"],
      ["Here you are.", "Voilà, je vous en prie."],
    ], { skill: "words" }),
    spell("enba4-t4", "Assemble le mot « pas cher ».", "cheap"),
    speak("enba4-t5", "How much is it?", "It's three pounds fifty.", "Trois livres cinquante.", { help: "Dis le prix à voix haute." }),
    choice("enba4-t6", "Comment écrire « quarante » correctement ?", [
      ["forty", true],
      ["fourty", false],
      ["forteen", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "basket",
    itemName: "Panier en osier",
    itemNameRu: "Basket",
    ru: "Hooray! A basket!",
    en: "Hourra ! Un panier !",
    a11y: "Un panier en osier avec une serviette à carreaux à l'intérieur, posé près de la porte.",
    image: p("basket"),
    steps: ["Le soir, la caisse tombe juste, au pence près !", "Mme Green est contente.", "Elle offre à Murzik un panier en osier.", "« For the market tomorrow! » — « Pour le marché, demain ! »"],
    bridge: "Le matin, Murzik va au marché avec son panier, chercher des pommes pour la tourte.",
  },
};

const bath5: Lesson = {
  id: "en-a1-bath-5",
  level: "A1",
  cityId: "en-bath",
  number: 5,
  title: "Au marché",
  minutes: 7,
  goals: ["Demander poliment : Can I have…?", "Dire combien il te faut", "Répondre à « Anything else? »"],
  vocabNote: "Can I have…, please? — la demande polie la plus pratique au magasin et au café. Littéralement : « Puis-je avoir… ? »",
  vocab: [
    v("enba5-1", "Can I have six apples, please?", "Je peux avoir six pommes, s'il vous plaît ?", "Murzik avec son panier devant l'étal de pommes.", "Écouter Can I have six apples, please", p("l5-1")),
    v("enba5-2", "a kilo of carrots", "un kilo de carottes", "Sur la balance, des carottes ; l'aiguille indique 1 kg.", "Écouter a kilo of carrots", p("l5-2")),
    v("enba5-3", "Anything else?", "Et avec ceci ?", "La vendeuse en tablier sourit d'un air interrogateur.", "Écouter Anything else", p("l5-3")),
    v("enba5-4", "That's all, thanks.", "Ce sera tout, merci.", "Murzik tapote joyeusement son panier bien rempli.", "Écouter That's all, thanks", p("l5-4")),
    v("enba5-5", "They're fresh.", "Elles sont fraîches.", "Des pommes brillantes avec des petites feuilles.", "Écouter They're fresh", p("l5-5")),
    v("enba5-6", "a bag", "un sac, un sachet", "La vendeuse tend un sachet en papier.", "Écouter a bag", p("l5-6")),
    v("enba5-7", "a bunch of flowers", "un bouquet de fleurs", "Un seau avec des bouquets de tulipes.", "Écouter a bunch of flowers", p("l5-7")),
  ],
  dialogue: {
    title: "Des pommes pour la tourte",
    note: "Do you need a bag? — « Vous avez besoin d'un sac ? » Need — « avoir besoin ».",
    lines: [
      line("seller", "Good morning! What can I get you?", "Bonjour ! Que puis-je vous servir ?"),
      line("murzik", "Can I have six apples, please?", "Je peux avoir six pommes, s'il vous plaît ?"),
      line("seller", "Here you are. They're fresh. Anything else?", "Voilà. Elles sont fraîches. Et avec ceci ?"),
      line("murzik", "A bunch of flowers, please. How much is it?", "Un bouquet de fleurs, s'il vous plaît. Combien ça coûte ?"),
      line("seller", "Six pounds, please. Do you need a bag?", "Six livres, s'il vous plaît. Vous avez besoin d'un sac ?"),
      line("murzik", "No, thanks. I have a basket. That's all!", "Non, merci. J'ai un panier. Ce sera tout !"),
    ],
    gist: choice("enba5-d1", "Pourquoi Murzik n'a-t-il pas besoin de sac ?", [
      ["Il a un panier.", true],
      ["Les sacs sont chers.", false],
      ["Il n'a rien acheté.", false],
    ]),
  },
  grammar: [
    {
      title: "Can I have…, please?",
      paragraphs: [
        "La demande polie : Can I have + chose + please? Can I have a cup of tea, please? — « Je peux avoir une tasse de thé, s'il vous plaît ? »",
        "Les quantités : a kilo of (un kilo de), a bag of (un sac de), a bunch of (un bouquet de), a cup of (une tasse de).",
      ],
      examples: [
        { ru: "Can I have a kilo of apples, please?", en: "Je peux avoir un kilo de pommes, s'il vous plaît ?" },
        { ru: "Can I have a bag, please?", en: "Je peux avoir un sac, s'il vous plaît ?" },
      ],
    },
  ],
  tasks: [
    choice("enba5-t1", "Comment demander poliment une tasse de thé ?", [
      ["Can I have a cup of tea, please?", true],
      ["Give tea.", false],
      ["I have tea, please?", false],
    ], { skill: "grammar" }),
    listen("enba5-t2", "Écoute. Qu'achète-t-on ?", "Can I have a kilo of carrots, please?", [
      ["Un kilo de carottes.", true],
      ["Six pommes.", false],
      ["Un bouquet de fleurs.", false],
    ]),
    match("enba5-t3", "Relie les paires.", [
      ["Anything else?", "Et avec ceci ?"],
      ["That's all.", "Ce sera tout."],
      ["fresh", "frais"],
      ["a bag", "un sac"],
    ], { skill: "words" }),
    missing("enba5-t4", "Quelle lettre manque ? (« carottes »)", "car", "ots", "r", ["r", "l", "w"]),
    speak("enba5-t5", "Anything else?", "No, that's all, thanks.", "Non, ce sera tout, merci.", { help: "Réponds à voix haute à la vendeuse." }),
    listen("enba5-t6", "Souviens-toi de la leçon précédente. Combien ça coûte ?", "It's five pounds fifty.", [
      ["£5.50", true],
      ["£15.50", false],
      ["£5.15", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "plate",
    itemName: "Plat en porcelaine",
    itemNameRu: "Plate",
    ru: "Hooray! A pretty plate!",
    en: "Hourra ! Un joli plat !",
    a11y: "Un grand plat rond en porcelaine avec un dessin bleu : un petit pont, une maisonnette et des arbres.",
    image: p("plate"),
    steps: ["Murzik et Mme Green cuisinent une tourte aux pommes.", "La tourte repose sur le vieux plat bleu.", "« Keep the plate, Murzik! » — « Garde le plat, Murzik ! »", "Le plat trouve sa place sur l'étagère."],
    bridge: "Le jour de repos, Tom emmène Murzik voir les bains romains.",
  },
};

const bath6: Lesson = {
  id: "en-a1-bath-6",
  level: "A1",
  cityId: "en-bath",
  number: 6,
  title: "Old and new — Vieux et nouveau",
  minutes: 7,
  goals: ["Décrire une chose : big, small, old, new", "Placer l'adjectif devant le nom", "Dire « très » : very"],
  vocabNote: "L'adjectif se place devant le nom et ne change jamais : an old city, old cities. Pas de « vieux / vieille / vieilles » en anglais — une seule forme !",
  vocab: [
    v("enba6-1", "It's an old city.", "C'est une vieille ville.", "Une rue avec des maisons couleur miel.", "Écouter It's an old city", p("l6-1")),
    v("enba6-2", "The water is hot.", "L'eau est chaude.", "De la vapeur s'élève au-dessus de l'eau verte des bains romains.", "Écouter The water is hot", p("l6-2")),
    v("enba6-3", "It's very beautiful.", "C'est très beau.", "Des colonnes autour du bassin, des reflets dans l'eau.", "Écouter It's very beautiful", p("l6-3")),
    v("enba6-4", "a big house", "une grande maison", "Une grande maison avec des colonnes.", "Écouter a big house", p("l6-4")),
    v("enba6-5", "a small shop", "une petite boutique", "Une minuscule boutique avec une seule vitrine.", "Écouter a small shop", p("l6-5")),
    v("enba6-6", "new or old?", "nouveau ou vieux ?", "Un vélo tout neuf à côté d'un vieux vélo rouillé.", "Écouter new or old", p("l6-6")),
    v("enba6-7", "two thousand years", "deux mille ans", "Une vieille pièce romaine dans une paume.", "Écouter two thousand years", p("l6-7")),
  ],
  dialogue: {
    title: "Les bains romains",
    note: "Roman — « romain ». The Romans — « les Romains ». Swim — « nager ».",
    lines: [
      line("tom", "This is the Roman Baths. It's very old!", "Voici les bains romains. C'est très vieux !"),
      line("murzik", "How old?", "Vieux comment ?"),
      line("tom", "Two thousand years!", "Deux mille ans !"),
      line("murzik", "Look! The water is green and hot!", "Regarde ! L'eau est verte et chaude !"),
      line("tom", "Yes, it's hot water from the ground. It's very beautiful.", "Oui, c'est de l'eau chaude qui vient du sol. C'est très beau."),
      line("murzik", "Bath is a small city, but it's a beautiful city!", "Bath est une petite ville, mais c'est une belle ville !"),
    ],
    gist: choice("enba6-d1", "Quel âge ont les bains romains ?", [
      ["Deux mille ans.", true],
      ["Deux cents ans.", false],
      ["Vingt ans.", false],
    ]),
  },
  grammar: [
    {
      title: "Les adjectifs : a big house",
      paragraphs: [
        "L'adjectif se place devant le nom : a big house, an old city, beautiful flowers. Il ne change ni en genre ni en nombre — plus simple qu'en français !",
        "Ou après is / are : The house is big. The flowers are beautiful. Very — « très » : very old, very beautiful.",
      ],
      examples: [
        { ru: "It's a very old house.", en: "C'est une très vieille maison." },
        { ru: "The cakes are small.", en: "Les gâteaux sont petits." },
      ],
    },
  ],
  tasks: [
    choice("enba6-t1", "Comment dire « une vieille ville » ?", [
      ["an old city", true],
      ["a city old", false],
      ["a old city", false],
    ], { skill: "grammar" }),
    listen("enba6-t2", "Écoute. Comment est la maison ?", "It's a small house, but it's very beautiful.", [
      ["Petite, mais très belle.", true],
      ["Grande et neuve.", false],
      ["Vieille et moche.", false],
    ]),
    match("enba6-t3", "Relie les paires.", [
      ["big", "grand"],
      ["small", "petit"],
      ["old", "vieux"],
      ["new", "nouveau"],
    ], { skill: "words" }),
    spell("enba6-t4", "Assemble le mot « chaud ».", "hot", ["a"]),
    speak("enba6-t5", "Tell me about your city.", "My city is big and very beautiful.", "Ma ville est grande et très belle.", { help: "Décris ta ville à voix haute." }),
    choice("enba6-t6", "Comment demander poliment six pommes ?", [
      ["Can I have six apples, please?", true],
      ["I have six apples?", false],
      ["Six apple, please.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "rug",
    itemName: "Tapis rond",
    itemNameRu: "Rug",
    ru: "Hooray! A rug!",
    en: "Hourra ! Un tapis !",
    a11y: "Un tapis rond en tricot fait de bandes multicolores, posé près du lit.",
    image: p("rug"),
    steps: ["Près des bains, une vieille dame vend des tapis en tricot.", "Murzik choisit le rond, multicolore.", "« It's old, but it's very warm. » — « Il est vieux, mais très chaud. »", "Le tapis repose près du lit."],
    bridge: "Dernier jour à Bath. Mme Green cherche quelque chose dans le vieux placard…",
  },
};

const bath7: Lesson = {
  id: "en-a1-bath-7",
  level: "A1",
  cityId: "en-bath",
  number: 7,
  title: "Goodbye, Bath! — Au revoir, Bath !",
  minutes: 8,
  goals: ["Acheter quelque chose de bout en bout : demander, demander le prix, payer", "Décrire une chose", "Revoir tous les mots de Bath"],
  vocabNote: "On revoit : a / an, this / that / these / those, how much / how many, Can I have…?",
  vocab: [
    v("enba7-1", "I'm looking for something.", "Je cherche quelque chose.", "Mme Green fouille dans le vieux placard.", "Écouter I'm looking for something", p("l7-1")),
    v("enba7-2", "Here it is!", "Le voilà !", "Mme Green brandit une feuille pliée au-dessus de sa tête.", "Écouter Here it is", p("l7-2")),
    v("enba7-3", "the recipe for Bath buns", "la recette des petits pains de Bath", "Une page jaunie avec le dessin d'un petit pain.", "Écouter the recipe for Bath buns", p("l7-3")),
    v("enba7-4", "a cake stand", "un présentoir à gâteaux", "Un présentoir en porcelaine à trois étages avec des petits gâteaux.", "Écouter a cake stand", p("l7-4")),
    v("enba7-5", "It's for you.", "C'est pour toi.", "Mme Green tend un cadeau à Murzik.", "Écouter It's for you", p("l7-5")),
    v("enba7-6", "You're very kind.", "Vous êtes très gentille.", "Murzik porte la patte à son cœur.", "Écouter You're very kind", p("l7-6")),
    v("enba7-7", "Where to next?", "Où allons-nous ensuite ?", "Tom déplie une carte de Grande-Bretagne.", "Écouter Where to next", p("l7-7")),
  ],
  dialogue: {
    title: "La troisième page",
    note: "Scotland — l'Écosse. Edinburgh [è-din-beu-reu] — la capitale de l'Écosse.",
    lines: [
      line("green", "I'm looking for something… Here it is!", "Je cherche quelque chose… Le voilà !"),
      line("murzik", "A page! The recipe for Bath buns!", "Une page ! La recette des petits pains de Bath !"),
      line("green", "And this cake stand is for you. It's for your café.", "Et ce présentoir à gâteaux est pour toi. Pour ton café."),
      line("murzik", "Thank you, Mrs Green! You're very kind.", "Merci, Mme Green ! Vous êtes très gentille."),
      line("tom", "Where to next?", "Où allons-nous ensuite ?"),
      line("green", "To Scotland! To the MacDonalds in Edinburgh. They're a big family!", "En Écosse ! Chez les MacDonald à Édimbourg. C'est une grande famille !"),
    ],
    gist: choice("enba7-d1", "Où iront Murzik et Tom ?", [
      ["À Édimbourg, chez la famille MacDonald.", true],
      ["À Londres, chez Mme Hope.", false],
      ["À Oxford, chez Priya.", false],
    ]),
  },
  grammar: [
    {
      title: "Au magasin : tout ensemble",
      paragraphs: [
        "Demander : Can I have…, please? Demander le prix : How much is it? / How much are they? Répondre au vendeur : That's all, thanks.",
        "Décrire : It's a big cake. They're very fresh. This is an old plate.",
      ],
      examples: [
        { ru: "Can I have two buns, please? How much are they?", en: "Je peux avoir deux petits pains, s'il vous plaît ? Combien coûtent-ils ?" },
        { ru: "This is a very old recipe.", en: "C'est une très vieille recette." },
      ],
    },
  ],
  tasks: [
    listen("enba7-t1", "Examen d'écoute. Qu'a acheté le client ?", "Can I have three buns and a cake, please? How much is it? — Fifteen pounds.", [
      ["Trois petits pains et un gâteau pour quinze livres.", true],
      ["Trois gâteaux et un petit pain pour cinquante livres.", false],
      ["Treize petits pains pour cinq livres.", false],
    ]),
    choice("enba7-t2", "Choisis correctement : « ces vieilles assiettes »", [
      ["these old plates", true],
      ["this old plates", false],
      ["these olds plates", false],
    ], { skill: "grammar" }),
    match("enba7-t3", "Relie les paires.", [
      ["recipe", "recette"],
      ["kind", "gentil"],
      ["a cake stand", "présentoir à gâteaux"],
      ["Here it is!", "Le voilà !"],
    ], { skill: "words" }),
    spell("enba7-t4", "Assemble le mot « recette ».", "recipe"),
    speak("enba7-t5", "This is for you.", "Thank you! You're very kind.", "Merci ! Vous êtes très gentille.", { help: "Remercie à voix haute pour le cadeau." }),
    script("enba7-t6", "Revois tout Bath. Termine la conversation à la boulangerie.", [
      { speaker: "Vendeuse", text: "Hello! What can I get you?" },
      { speaker: "Toi", answer: "Can I have two buns, please?", options: ["Can I have two buns, please?", "Can I have two bun, please?", "I have two buns?"] },
      { speaker: "Vendeuse", text: "Here you are. Anything else?" },
      { speaker: "Toi", answer: "No, that's all. How much is it?", options: ["No, that's all. How much is it?", "No, that's all. How many is it?", "Yes, that's all."] },
      { speaker: "Vendeuse", text: "Four pounds, please." },
      { speaker: "Toi", answer: "Here you are.", options: ["Here you are.", "You're welcome.", "It's cheap you."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cake-stand",
    itemName: "Présentoir à gâteaux",
    itemNameRu: "Cake stand",
    ru: "Hooray! A cake stand!",
    en: "Hourra ! Un présentoir à gâteaux !",
    a11y: "Un présentoir à gâteaux en porcelaine à trois étages avec une poignée dorée, des fleurettes roses sur chaque étage.",
    image: p("cake-stand"),
    steps: ["Mme Green emballe le présentoir dans du journal.", "Trois étages, une poignée dorée, des fleurettes roses.", "« Every café needs one! » — « Il en faut un dans chaque café ! »", "Murzik le pose délicatement dans sa valise."],
    bridge: "La page suivante est à Édimbourg, chez la grande famille MacDonald.",
  },
};

const story: CityStory = {
  home: {
    name: "Petit appartement au-dessus de la boulangerie",
    nameRu: "Murzik's flat in Bath",
    image: p("home"),
    a11y: "Un petit appartement vide au-dessus de la boulangerie de Mme Green : murs en pierre couleur miel, fenêtre sur une rue calme. Ça sent le pain. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "cake-stand",
  welcomeRu: "Hello, Bath!",
  welcomeEn: "Bonjour, Bath !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom à Bath : des maisons en pierre couleur miel en demi-cercle, de vieux bains romains avec de la vapeur au-dessus.",
  departureImage: p("departure"),
  departureA11y: "Mme Green, couverte de farine, fait signe au revoir devant la boulangerie.",
  finale: [
    {
      image: p("page"),
      a11y: "Gros plan : la troisième page du livre de recettes, la recette des petits pains de Bath. Dans la marge, un mot écrit à la main.",
      lines: [
        { en: "Murzik colle la troisième page. Dans la marge — un mot de Mme Hope :" },
        { ru: "At my café, every guest got a smile first and tea second.", en: "Dans mon café, chaque client recevait d'abord un sourire, et seulement ensuite le thé." },
        { en: "Murzik sourit — et comprend tout de suite comme c'est agréable." },
      ],
    },
    {
      image: p("cake-stand"),
      a11y: "Murzik fait le tour de son petit appartement au-dessus de la boulangerie, meublé leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de son petit appartement au-dessus de la boulangerie. Tom le photographie pour le journal." },
        { en: "Pour son futur café, il emporte le présentoir à gâteaux." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, Tom fête ça avec lui.",
      lines: [
        { ru: "Bath complete!", en: "Bath terminé !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Mme Green fait signe de la main pour dire au revoir.",
      lines: [
        { ru: "Goodbye, Mrs Green!", en: "Au revoir, Mme Green !" },
        { ru: "Next stop: Edinburgh!", en: "Prochain arrêt : Édimbourg !" },
      ],
    },
    {
      image: p("train"),
      a11y: "Le train roule vers le nord ; par la fenêtre, des collines, des moutons et la mer grise.",
      lines: [{ ru: "Bath → Edinburgh", en: "Bath → Édimbourg" }],
    },
    {
      image: pic("en/edinburgh/arrival"),
      a11y: "Murzik et Tom à Édimbourg : un château gris sur un haut rocher au-dessus de la vieille ville. Vent et petite pluie.",
      lines: [
        { ru: "Hello, Edinburgh!", en: "Bonjour, Édimbourg !" },
        { ru: "It's cold!", en: "Il fait froid !" },
      ],
    },
  ],
};

export const enBathFr = {
  id: "en-bath",
  name: "Bath",
  nameEn: "Bath",
  lessons: [bath1, bath2, bath3, bath4, bath5, bath6, bath7],
  story,
};
