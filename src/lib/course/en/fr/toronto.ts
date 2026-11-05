import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/**
 * French version of ../toronto.ts.
 * Same story, same English phrases and pictures, but grammar, explanations
 * and translations are written for French-speaking learners.
 * In lesson data `ru` = English text, `en` = French translation.
 */

const p = (name: string) => pic(`en/toronto/${name}`);

const toronto1: Lesson = {
  id: "en-a1-toronto-1",
  level: "A1",
  cityId: "en-toronto",
  number: 1,
  title: "January, February… — Les mois",
  minutes: 7,
  goals: ["Nommer les mois", "Dire « en mai » : in May", "Nommer les saisons"],
  vocabNote: "En anglais, les mois prennent une majuscule : May, June. En français, non : « mai, juin » ! « En quel mois » — in : in May, in December. Les saisons : spring, summer, autumn (en Amérique et au Canada — fall), winter.",
  vocab: [
    v("ento1-1", "January, February, March", "janvier, février, mars", "Trois pages de calendrier : de la neige, de la neige et les premières perce-neige.", "Écouter January, February, March", p("l1-1")),
    v("ento1-2", "April, May, June", "avril, mai, juin", "Trois pages de calendrier : une pluie fine, des tulipes, du soleil.", "Écouter April, May, June", p("l1-2")),
    v("ento1-3", "July, August, September", "juillet, août, septembre", "Trois pages de calendrier : un lac, une pastèque, les premières feuilles jaunes.", "Écouter July, August, September", p("l1-3")),
    v("ento1-4", "October, November, December", "octobre, novembre, décembre", "Trois pages de calendrier : des feuilles d'érable, de la pluie, un bonhomme de neige.", "Écouter October, November, December", p("l1-4")),
    v("ento1-5", "in May", "en mai", "Des tulipes en fleurs au bord du lac.", "Écouter in May", p("l1-5")),
    v("ento1-6", "spring and summer", "le printemps et l'été", "Une moitié de l'image : des fleurs de printemps ; l'autre : une plage en été.", "Écouter spring and summer", p("l1-6")),
    v("ento1-7", "autumn and winter", "l'automne et l'hiver", "Une moitié de l'image : des feuilles d'érable ; l'autre : de la neige.", "Écouter autumn and winter", p("l1-7")),
  ],
  dialogue: {
    title: "La famille Chen",
    note: "La famille Chen tient un petit café de famille. Michael et Lucy sont les propriétaires, Mamie May est la maman de Michael. Gorgeous — « magnifique ».",
    lines: [
      line("lucy", "Welcome to Toronto! I'm Lucy, and this is my husband, Michael.", "Bienvenue à Toronto ! Moi, c'est Lucy, et voici mon mari, Michael."),
      line("michael", "And this is my mother, Grandma May. Welcome to our family café!", "Et voici ma mère, Mamie May. Bienvenue dans notre café de famille !"),
      line("murzik", "Hello! Toronto is beautiful in May!", "Bonjour ! Toronto est si belle en mai !"),
      line("may", "Yes, spring is gorgeous here. But winter is very cold!", "Oui, le printemps est magnifique ici. Mais l'hiver est très froid !"),
      line("tom", "What's your favourite month, Grandma May?", "Quel est votre mois préféré, Mamie May ?"),
      line("may", "October. The maple trees are red and gold.", "Octobre. Les érables sont rouges et dorés."),
    ],
    gist: choice("ento1-d1", "Quel est le mois préféré de Mamie May ?", [
      ["Octobre.", true],
      ["Mai.", false],
      ["Janvier.", false],
    ]),
  },
  grammar: [
    {
      title: "Mois et saisons : in",
      paragraphs: [
        "Avec les mois et les saisons — in : in May, in winter, in the summer. En français : « en mai », « en hiver », « en été ».",
        "Attention aux majuscules : en anglais, les mois en prennent toujours une (January, February…), en français jamais (janvier, février…). Les saisons, en revanche, sont en minuscules dans les deux langues : spring, summer — « le printemps, l'été ».",
      ],
      examples: [
        { ru: "It's very cold in January.", en: "Il fait très froid en janvier." },
        { ru: "We go to the lake in summer.", en: "En été, on va au lac." },
      ],
    },
  ],
  tasks: [
    choice("ento1-t1", "Comment dire « en décembre » ?", [
      ["in December", true],
      ["on December", false],
      ["at December", false],
    ], { skill: "grammar" }),
    listen("ento1-t2", "Écoute. Quel mois ?", "My favourite month is September.", [
      ["Septembre.", true],
      ["Novembre.", false],
      ["Décembre.", false],
    ]),
    match("ento1-t3", "Relie les paires.", [
      ["spring", "le printemps"],
      ["summer", "l'été"],
      ["autumn", "l'automne"],
      ["winter", "l'hiver"],
    ], { skill: "words" }),
    missing("ento1-t4", "Quelle lettre manque ? (« février »)", "Febr", "ary", "u", ["u", "o", "a"]),
    speak("ento1-t5", "What's your favourite month?", "My favourite month is June. It's summer!", "Mon mois préféré, c'est juin. C'est l'été !", { help: "Dis à voix haute ton mois préféré." }),
    choice("ento1-t6", "Comment dire « Tu devrais te reposer » ?", [
      ["You should rest.", true],
      ["You should to rest.", false],
      ["You rest should.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tulips",
    itemName: "Vase de tulipes",
    itemNameRu: "Tulips",
    ru: "Hooray! Tulips!",
    en: "Hourra ! Des tulipes !",
    a11y: "Un vase blanc avec un bouquet de tulipes rouges et jaunes sur le rebord de la fenêtre.",
    image: p("tulips"),
    steps: ["Lucy montre à Murzik l'appartement au-dessus du café.", "Sur le rebord de la fenêtre, un vase de tulipes.", "« In May, Toronto is full of tulips! » — « En mai, Toronto est pleine de tulipes ! »", "La chambre sent le printemps."],
    bridge: "Mamie May regarde le calendrier : « What's the date today? »",
  },
};

const toronto2: Lesson = {
  id: "en-a1-toronto-2",
  level: "A1",
  cityId: "en-toronto",
  number: 2,
  title: "The fifth of May — Le cinq mai",
  minutes: 7,
  goals: ["Nommer les ordinaux : first, second, third", "Dire la date : the fifth of May", "Demander : What's the date today?"],
  vocabNote: "Ordinaux : first (1st), second (2nd), third (3rd), puis -th : fourth, fifth, sixth… La date se dit : the fifth of May ou May fifth.",
  vocab: [
    v("ento2-1", "What's the date today?", "Quelle est la date aujourd'hui ?", "Mamie May met ses lunettes et regarde le calendrier.", "Écouter What's the date today", p("l2-1")),
    v("ento2-2", "It's the second of May.", "On est le deux mai.", "Une page de calendrier avec le chiffre 2.", "Écouter It's the second of May", p("l2-2")),
    v("ento2-3", "first, second, third", "premier, deuxième, troisième", "Trois chatons sur un podium : première, deuxième et troisième place.", "Écouter first, second, third", p("l2-3")),
    v("ento2-4", "fourth, fifth, sixth", "quatrième, cinquième, sixième", "Une rangée de chaises avec les numéros 4, 5, 6 sur le dossier.", "Écouter fourth, fifth, sixth", p("l2-4")),
    v("ento2-5", "the fifth of May", "le cinq mai", "Une page de calendrier, le cinq mai entouré d'un cœur.", "Écouter the fifth of May", p("l2-5")),
    v("ento2-6", "in three days", "dans trois jours", "Trois pages de calendrier, un gâteau dessiné sur la troisième.", "Écouter in three days", p("l2-6")),
    v("ento2-7", "next week", "la semaine prochaine", "Une flèche sur le calendrier pointe vers l'avant.", "Écouter next week", p("l2-7")),
  ],
  dialogue: {
    title: "Tom le suspect",
    note: "Why? — « Pourquoi ? » Nothing! — « Rien ! » Just asking — « je demande, c'est tout ».",
    lines: [
      line("tom", "Grandma May, what's the date today?", "Mamie May, quelle est la date aujourd'hui ?"),
      line("may", "It's the second of May.", "Le deux mai."),
      line("tom", "The second… So in three days it's the fifth of May!", "Le deux… Alors, dans trois jours, on sera le cinq mai !"),
      line("murzik", "The fifth of May? Why?", "Le cinq mai ? Pourquoi ?"),
      line("tom", "Nothing! Just asking.", "Rien ! Je demande, c'est tout."),
      line("may", "Tom, you're a bad actor!", "Tom, tu es un bien mauvais acteur !"),
    ],
    gist: choice("ento2-d1", "Quelle est la date aujourd'hui ?", [
      ["Le deux mai.", true],
      ["Le cinq mai.", false],
      ["Le trois mai.", false],
    ]),
  },
  grammar: [
    {
      title: "Ordinaux et dates",
      paragraphs: [
        "1st first, 2nd second, 3rd third, 4th fourth, 5th fifth, 6th sixth… 20th twentieth, 21st twenty-first.",
        "Grande différence avec le français : en français, on dit la date avec un nombre cardinal — « le CINQ mai » (seul le 1er fait exception : « le premier mai »). En anglais, c'est toujours l'ordinal : It's the fifth of May. En Amérique et au Canada, on dit souvent : It's May fifth.",
      ],
      examples: [
        { ru: "Today is the twenty-first of June.", en: "On est le vingt et un juin." },
        { ru: "It's the first day of spring!", en: "C'est le premier jour du printemps !" },
      ],
    },
  ],
  tasks: [
    choice("ento2-t1", "Comment dire « le trois mai » ?", [
      ["the third of May", true],
      ["the three of May", false],
      ["third May of", false],
    ], { skill: "grammar" }),
    listen("ento2-t2", "Écoute. Quelle date ?", "It's the fifteenth of August.", [
      ["Le 15 août", true],
      ["Le 5 août", false],
      ["Le 15 avril", false],
    ]),
    match("ento2-t3", "Relie les paires.", [
      ["first", "premier"],
      ["second", "deuxième"],
      ["third", "troisième"],
      ["fifth", "cinquième"],
    ], { skill: "words" }),
    missing("ento2-t4", "Quelle lettre manque ? (« cinquième »)", "fi", "th", "f", ["f", "v", "s"]),
    speak("ento2-t5", "What's the date today?", "It's the tenth of March.", "On est le dix mars.", { help: "Dis à voix haute la date d'aujourd'hui." }),
    choice("ento2-t6", "Comment dire « en mai » ?", [
      ["in May", true],
      ["on May", false],
      ["at May", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "frame",
    itemName: "Cadre photo",
    itemNameRu: "Photo frame",
    ru: "Hooray! A photo frame!",
    en: "Hourra ! Un cadre photo !",
    a11y: "Un cadre photo argenté, vide pour l'instant, posé sur une commode.",
    image: p("frame"),
    steps: ["Mamie May sort un cadre argenté de l'armoire.", "« It's empty now, but soon… » — « Il est vide pour l'instant, mais bientôt… »", "Elle fait un clin d'œil complice à Tom.", "Murzik pose le cadre sur la commode. Quelle photo mettra-t-il dedans ?"],
    bridge: "Murzik demande à Mamie May : « When's your birthday? »",
  },
};

const toronto3: Lesson = {
  id: "en-a1-toronto-3",
  level: "A1",
  cityId: "en-toronto",
  number: 3,
  title: "When's your birthday? — C'est quand, ton anniversaire ?",
  minutes: 7,
  goals: ["Demander quand est l'anniversaire", "Dire la date avec on : on the fifth of May", "Dire quel âge on va avoir"],
  vocabNote: "Avec une date précise — on : My birthday is on the fifth of May. Avec un mois — in : My birthday is in May.",
  vocab: [
    v("ento3-1", "When's your birthday?", "C'est quand, ton anniversaire ?", "Mamie May interroge Murzik en souriant autour d'un thé.", "Écouter When's your birthday", p("l3-1")),
    v("ento3-2", "My birthday is on the fifth of May.", "Mon anniversaire est le cinq mai.", "Murzik montre le cinq mai sur le calendrier.", "Écouter My birthday is on the fifth of May", p("l3-2")),
    v("ento3-3", "How old are you going to be?", "Tu vas avoir quel âge ?", "Mamie May se penche vers Murzik, curieuse.", "Écouter How old are you going to be", p("l3-3")),
    v("ento3-4", "I'm going to be seven.", "Je vais avoir sept ans.", "Murzik montre fièrement sept doigts sur ses deux pattes.", "Écouter I'm going to be seven", p("l3-4")),
    v("ento3-5", "a party", "une fête", "Une salle avec des guirlandes et des ballons.", "Écouter a party", p("l3-5")),
    v("ento3-6", "an invitation", "une invitation", "Une jolie carte d'invitation avec des ballons.", "Écouter an invitation", p("l3-6")),
    v("ento3-7", "Can you come?", "Tu peux venir ?", "Tom tend une invitation au voisin.", "Écouter Can you come", p("l3-7")),
  ],
  dialogue: {
    title: "Le secret est découvert",
    note: "So — « alors, donc ». Kitchen — « la cuisine ». Et Lucy, on dirait, a un plan…",
    lines: [
      line("murzik", "Grandma May, when's your birthday?", "Mamie May, c'est quand votre anniversaire ?"),
      line("may", "My birthday is in October, on the tenth. And yours?", "Mon anniversaire est en octobre, le dix. Et le tien ?"),
      line("murzik", "My birthday is on the fifth of May!", "Mon anniversaire est le cinq mai !"),
      line("may", "The fifth of May? So it's in three days! How old are you going to be?", "Le cinq mai ? Alors c'est dans trois jours ! Tu vas avoir quel âge ?"),
      line("murzik", "I'm going to be seven.", "Je vais avoir sept ans."),
      line("lucy", "In three days? Hmm… Tom, can you come to the kitchen, please?", "Dans trois jours ? Hmm… Tom, tu peux venir à la cuisine, s'il te plaît ?"),
    ],
    gist: choice("ento3-d1", "Quand est l'anniversaire de Murzik ?", [
      ["Le cinq mai.", true],
      ["Le dix octobre.", false],
      ["Le deux mai.", false],
    ]),
  },
  grammar: [
    {
      title: "On the fifth / in May",
      paragraphs: [
        "Avec une date ou un jour précis — on : on the fifth of May, on Monday, on my birthday. Avec un mois, une année, une saison — in : in May, in 2026, in summer.",
        "Avec l'heure — at : at seven o'clock. Résumé : on le cinq mai, en mai, à sept heures. Et pour l'âge, n'oublie pas : en anglais « je vais avoir sept ans » se dit avec to be — I'm going to be seven — pas avec have !",
      ],
      examples: [
        { ru: "The party is on Saturday at six.", en: "La fête est samedi à six heures." },
        { ru: "My mum's birthday is in July.", en: "L'anniversaire de ma maman est en juillet." },
      ],
    },
  ],
  tasks: [
    choice("ento3-t1", "Comment dire « le douze juin » ?", [
      ["on the twelfth of June", true],
      ["in the twelfth of June", false],
      ["at the twelfth of June", false],
    ], { skill: "grammar" }),
    listen("ento3-t2", "Écoute. Quand est l'anniversaire ?", "My birthday is on the third of March.", [
      ["Le trois mars.", true],
      ["Le treize mars.", false],
      ["Le trois mai.", false],
    ]),
    match("ento3-t3", "Relie les paires.", [
      ["birthday", "anniversaire"],
      ["party", "fête"],
      ["invitation", "invitation"],
      ["neighbours", "voisins"],
    ], { skill: "words" }),
    spell("ento3-t4", "Assemble les lettres du mot « fête ».", "party"),
    speak("ento3-t5", "When's your birthday?", "My birthday is on the twelfth of June.", "Mon anniversaire est le douze juin.", { help: "Dis à voix haute la date de ton anniversaire." }),
    choice("ento3-t6", "Comment demander « Quelle est la date aujourd'hui ? »", [
      ["What's the date today?", true],
      ["What day is date?", false],
      ["How date is it?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "party-hats",
    itemName: "Chapeaux de fête",
    itemNameRu: "Party hats",
    ru: "Hooray! Party hats!",
    en: "Hourra ! Des chapeaux de fête !",
    a11y: "Une pile de chapeaux de fête en papier, à pois et à rayures, avec des élastiques et des pompons.",
    image: p("party-hats"),
    steps: ["Lucy apporte une pile de chapeaux de fête.", "« For your party! » — « Pour ta fête ! »", "Il y en a un tout petit, avec des trous pour les oreilles.", "Murzik l'essaie devant le miroir."],
    bridge: "Pendant ce temps, Tom et la famille Chen font des plans secrets.",
  },
};

const toronto4: Lesson = {
  id: "en-a1-toronto-4",
  level: "A1",
  cityId: "en-toronto",
  number: 4,
  title: "We're going to… — On va…",
  minutes: 7,
  goals: ["Raconter ses projets : I'm going to", "Demander : What are you going to do?", "Dire ce qu'on ne va pas faire"],
  vocabNote: "Going to — « aller (faire) » : I'm going to bake a cake. Ce sont des projets déjà décidés — comme le futur proche français « je vais faire » !",
  vocab: [
    v("ento4-1", "What are you going to do?", "Qu'est-ce que vous allez faire ?", "Tom et Michael chuchotent dans la cuisine.", "Écouter What are you going to do", p("l4-1")),
    v("ento4-2", "I'm going to bake a cake.", "Je vais faire un gâteau.", "Lucy sort la farine et les œufs.", "Écouter I'm going to bake a cake", p("l4-2")),
    v("ento4-3", "We're going to have a party.", "On va faire une fête.", "Michael dessine le plan de la fête sur une ardoise.", "Écouter We're going to have a party", p("l4-3")),
    v("ento4-4", "He's going to buy a present.", "Il va acheter un cadeau.", "Tom regarde la vitrine d'un magasin.", "Écouter He's going to buy a present", p("l4-4")),
    v("ento4-5", "We're going to invite our friends.", "On va inviter nos amis.", "Une pile d'invitations et des enveloppes.", "Écouter We're going to invite our friends", p("l4-5")),
    v("ento4-6", "Don't tell him!", "Ne lui dites pas !", "Mamie May met un doigt sur ses lèvres.", "Écouter Don't tell him", p("l4-6")),
    v("ento4-7", "It's a surprise!", "C'est une surprise !", "Des confettis jaillissent d'une boîte.", "Écouter It's a surprise", p("l4-7")),
  ],
  dialogue: {
    title: "Conseil secret",
    note: "Sketchbook — « un carnet de croquis ». Draw — « dessiner ».",
    lines: [
      line("tom", "So, what are we going to do for Murzik's birthday?", "Alors, qu'est-ce qu'on va faire pour l'anniversaire de Murzik ?"),
      line("lucy", "I'm going to bake a cake. A big chocolate cake!", "Je vais faire un gâteau. Un gros gâteau au chocolat !"),
      line("michael", "We're going to have a party in the café and invite the neighbours.", "On va faire une fête au café et inviter les voisins."),
      line("tom", "And I'm going to buy a present. Murzik loves drawing. A sketchbook!", "Et moi, je vais acheter un cadeau. Murzik adore dessiner. Un carnet de croquis !"),
      line("may", "Good idea. But don't tell him! It's a surprise!", "Bonne idée. Mais ne lui dites rien ! C'est une surprise !"),
    ],
    gist: choice("ento4-d1", "Que va offrir Tom ?", [
      ["Un carnet de croquis.", true],
      ["Un gâteau.", false],
      ["Un appareil photo.", false],
    ]),
  },
  grammar: [
    {
      title: "Going to : les projets",
      paragraphs: [
        "Les projets : am / is / are + going to + verbe : I'm going to bake. She's going to buy. We're going to have a party. C'est presque comme le futur proche français : « je vais cuisiner », « elle va acheter » — going to joue le rôle de « aller » !",
        "Question : What are you going to do? Are you going to come? Négation : I'm not going to tell him. Attention : il faut TOUJOURS le verbe to be — jamais « I going to… ».",
      ],
      examples: [
        { ru: "I'm going to visit my grandma on Sunday.", en: "Dimanche, je vais rendre visite à ma mamie." },
        { ru: "Are you going to buy a present? — Yes, I am.", en: "Tu vas acheter un cadeau ? — Oui." },
      ],
    },
  ],
  tasks: [
    choice("ento4-t1", "Comment dire « Je vais faire un gâteau » ?", [
      ["I'm going to bake a cake.", true],
      ["I going to bake a cake.", false],
      ["I'm going bake a cake.", false],
    ], { skill: "grammar" }),
    listen("ento4-t2", "Écoute. Que vont-ils faire ?", "We're going to watch a film tonight.", [
      ["Regarder un film ce soir.", true],
      ["Faire un gâteau demain.", false],
      ["Aller au parc.", false],
    ]),
    match("ento4-t3", "Relie les paires.", [
      ["bake", "faire (un gâteau)"],
      ["buy", "acheter"],
      ["invite", "inviter"],
      ["surprise", "surprise"],
    ], { skill: "words" }),
    missing("ento4-t4", "Quelle lettre manque ? (« cadeau »)", "pres", "nt", "e", ["e", "a", "i"]),
    speak("ento4-t5", "What are you going to do at the weekend?", "I'm going to meet my friends.", "Je vais retrouver mes amis.", { help: "Raconte à voix haute tes projets." }),
    choice("ento4-t6", "Comment dire « samedi » (ce jour-là) ?", [
      ["on Saturday", true],
      ["in Saturday", false],
      ["at Saturday", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "balloons",
    itemName: "Ballons",
    itemNameRu: "Balloons",
    ru: "Hooray! Balloons!",
    en: "Hourra ! Des ballons !",
    a11y: "Une grappe de ballons multicolores attachée au dossier d'une chaise.",
    image: p("balloons"),
    steps: ["Tom rentre à la maison avec une grappe de ballons.", "« What are they for? » — demande Murzik. « C'est pour quoi ? »", "« Nothing! They're just nice! » — « Pour rien ! C'est joli, c'est tout ! »", "Murzik ne se doute de rien."],
    bridge: "Le matin du cinq mai. Murzik descend au café — et là, silence suspect…",
  },
};

const toronto5: Lesson = {
  id: "en-a1-toronto-5",
  level: "A1",
  cityId: "en-toronto",
  number: 5,
  title: "Happy birthday! — Joyeux anniversaire !",
  minutes: 7,
  goals: ["Souhaiter un anniversaire", "Offrir un cadeau et demander de l'ouvrir", "Se réjouir d'une surprise"],
  vocabNote: "Happy birthday! — « Joyeux anniversaire ! » Many happy returns! — vœu traditionnel en Grande-Bretagne. What a…! — « Quel… ! »",
  vocab: [
    v("ento5-1", "Surprise! Happy birthday!", "Surprise ! Joyeux anniversaire !", "Tout le monde surgit de derrière le comptoir du café avec des cotillons.", "Écouter Surprise! Happy birthday", p("l5-1")),
    v("ento5-2", "Here's your present.", "Voici ton cadeau.", "Tom tend une boîte avec un nœud à Murzik.", "Écouter Here's your present", p("l5-2")),
    v("ento5-3", "Open it!", "Ouvre-le !", "Murzik défait le nœud.", "Écouter Open it", p("l5-3")),
    v("ento5-4", "What a lovely surprise!", "Quelle belle surprise !", "Murzik plaque ses pattes sur ses joues, ravi.", "Écouter What a lovely surprise", p("l5-4")),
    v("ento5-5", "Thank you so much!", "Merci mille fois !", "Murzik serre Tom dans ses bras.", "Écouter Thank you so much", p("l5-5")),
    v("ento5-6", "How old are you now?", "Tu as quel âge, maintenant ?", "Mamie May caresse doucement la tête de Murzik.", "Écouter How old are you now", p("l5-6")),
    v("ento5-7", "We love you!", "On t'aime !", "Toute la famille Chen et Tom prennent Murzik dans leurs bras.", "Écouter We love you", p("l5-7")),
  ],
  dialogue: {
    title: "Le matin du cinq mai",
    note: "Sketchbook — « le carnet de croquis ». Watercolours — « l'aquarelle ».",
    lines: [
      line("tom", "Surprise! Happy birthday, Murzik!", "Surprise ! Joyeux anniversaire, Murzik !"),
      line("may", "Happy birthday, dear!", "Joyeux anniversaire, mon petit !"),
      line("murzik", "What a lovely surprise! Thank you!", "Quelle belle surprise ! Merci !"),
      line("tom", "Here's your present. Open it!", "Voici ton cadeau. Ouvre-le !"),
      line("murzik", "A sketchbook! And watercolours! Thank you so much!", "Un carnet de croquis ! Et une aquarelle ! Merci mille fois !"),
      line("may", "How old are you now?", "Tu as quel âge, maintenant ?"),
      line("murzik", "Seven!", "Sept ans !"),
    ],
    gist: choice("ento5-d1", "Qu'a offert Tom ?", [
      ["Un carnet de croquis et une aquarelle.", true],
      ["Un gâteau.", false],
      ["Des ballons.", false],
    ]),
  },
  grammar: [
    {
      title: "Exclamations : What a…! How…!",
      paragraphs: [
        "What a + adjectif + nom (pour une chose qu'on peut compter) : What a lovely surprise! What a beautiful cake! En français : « Quelle belle surprise ! » — pas de mot « a » chez nous, mais en anglais il est obligatoire !",
        "How + adjectif : How nice! How kind! Pour un cadeau, on répond : Thank you so much! It's beautiful! I love it!",
      ],
      examples: [
        { ru: "What a big cake!", en: "Quel gros gâteau !" },
        { ru: "How kind of you!", en: "Comme c'est gentil de ta part !" },
      ],
    },
  ],
  tasks: [
    choice("ento5-t1", "Comment dire « Quel beau gâteau ! » ?", [
      ["What a beautiful cake!", true],
      ["How a beautiful cake!", false],
      ["What beautiful a cake!", false],
    ], { skill: "grammar" }),
    listen("ento5-t2", "Écoute. Que dit-on ?", "Happy birthday! This is for you!", [
      ["Joyeux anniversaire ! C'est pour toi !", true],
      ["Bonne année !", false],
      ["Guéris vite !", false],
    ]),
    match("ento5-t3", "Relie les paires.", [
      ["Happy birthday!", "Joyeux anniversaire !"],
      ["Open it!", "Ouvre-le !"],
      ["lovely", "adorable"],
      ["How kind!", "Comme c'est gentil !"],
    ], { skill: "words" }),
    missing("ento5-t4", "Quelle lettre manque ? (« anniversaire »)", "birthd", "y", "a", ["a", "e", "i"]),
    speak("ento5-t5", "Happy birthday! This is for you.", "Thank you so much! What a lovely surprise!", "Merci mille fois ! Quelle belle surprise !", { help: "Remercie à voix haute pour le cadeau." }),
    choice("ento5-t6", "Comment dire « C'est une surprise ! » ?", [
      ["It's a surprise!", true],
      ["It's surprise!", false],
      ["Is a surprise!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sketchbook",
    itemName: "Carnet de croquis",
    itemNameRu: "Sketchbook",
    ru: "Hooray! A sketchbook!",
    en: "Hourra ! Un carnet de croquis !",
    a11y: "Un grand carnet de croquis et une boîte d'aquarelle. Sur la couverture, Tom a dessiné un petit chat roux en tablier.",
    image: p("sketchbook"),
    steps: ["Murzik ouvre le carnet.", "Sur la première page, Tom l'a dessiné — en tablier, derrière le comptoir d'un café !", "En bas, une inscription : « Murzik's Café — one day! » — « Le café de Murzik — un jour ! »", "Murzik dessine tout de suite sa première image."],
    bridge: "Et au café, un gâteau au chocolat avec des bougies attend !",
  },
};

const toronto6: Lesson = {
  id: "en-a1-toronto-6",
  level: "A1",
  cityId: "en-toronto",
  number: 6,
  title: "Make a wish! — Fais un vœu !",
  minutes: 7,
  goals: ["Faire un vœu et souffler les bougies", "Souhaiter quelque chose : I wish you…", "Signer une carte"],
  vocabNote: "Make a wish! — « Fais un vœu ! » Blow out the candles! — « Souffle les bougies ! » Sur une carte, on écrit : Best wishes! — « Meilleurs vœux ! »",
  vocab: [
    v("ento6-1", "Make a wish!", "Fais un vœu !", "Murzik ferme les yeux et joint les pattes au-dessus du gâteau.", "Écouter Make a wish", p("l6-1")),
    v("ento6-2", "Blow out the candles!", "Souffle les bougies !", "Murzik gonfle les joues au-dessus des sept bougies.", "Écouter Blow out the candles", p("l6-2")),
    v("ento6-3", "What's your wish?", "C'est quoi, ton vœu ?", "Mamie May se penche vers Murzik, curieuse.", "Écouter What's your wish", p("l6-3")),
    v("ento6-4", "It's a secret!", "C'est un secret !", "Murzik met une patte sur ses lèvres.", "Écouter It's a secret", p("l6-4")),
    v("ento6-5", "Have a very happy year!", "Passe une très belle année !", "Mamie May lève sa tasse de thé.", "Écouter Have a very happy year", p("l6-5")),
    v("ento6-6", "Best wishes!", "Meilleurs vœux !", "Une carte signée, avec un petit cœur.", "Écouter Best wishes", p("l6-6")),
    v("ento6-7", "Cheers!", "Santé !", "Tout le monde lève son verre de limonade.", "Écouter Cheers", p("l6-7")),
  ],
  dialogue: {
    title: "Sept bougies",
    note: "Secret — « un secret ».",
    lines: [
      line("lucy", "Here's the cake! Seven candles!", "Voici le gâteau ! Sept bougies !"),
      line("michael", "Make a wish, Murzik!", "Fais un vœu, Murzik !"),
      line("tom", "And blow out the candles!", "Et souffle les bougies !"),
      line("may", "What's your wish?", "C'est quoi, ton vœu ?"),
      line("murzik", "It's a secret!", "C'est un secret !"),
      line("tom", "I know your wish… A café!", "Moi, je connais ton vœu… Un café !"),
      line("may", "Have a very happy year, dear. Cheers!", "Passe une très belle année, mon petit. Santé !"),
    ],
    gist: choice("ento6-d1", "Selon Tom, quel vœu a fait Murzik ?", [
      ["Un café.", true],
      ["Un nouveau carnet.", false],
      ["Une part de gâteau en plus.", false],
    ]),
  },
  grammar: [
    {
      title: "Les souhaits",
      paragraphs: [
        "I wish you + quelque chose : I wish you a happy birthday. I wish you good luck. Sur une carte, on signe : Best wishes, Love, With love.",
        "Make a wish — faire un vœu. My wish is… — Mon vœu, c'est… Attention : « une bougie » se dit a candle, pas « a chandle » !",
      ],
      examples: [
        { ru: "I wish you lots of happiness!", en: "Je te souhaite beaucoup de bonheur !" },
        { ru: "Happy birthday! Best wishes, Anna.", en: "Joyeux anniversaire ! Meilleurs vœux, Anna." },
      ],
    },
  ],
  tasks: [
    choice("ento6-t1", "Comment souhaiter bonne chance ?", [
      ["I wish you good luck!", true],
      ["I wish to you luck good!", false],
      ["I'm wish you luck!", false],
    ], { skill: "grammar" }),
    listen("ento6-t2", "Écoute. Que dit-on ?", "Make a wish and blow out the candles!", [
      ["Fais un vœu et souffle les bougies !", true],
      ["Ouvre le cadeau !", false],
      ["Coupe une part de gâteau !", false],
    ]),
    match("ento6-t3", "Relie les paires.", [
      ["wish", "vœu"],
      ["candles", "bougies"],
      ["secret", "secret"],
      ["Cheers!", "Santé !"],
    ], { skill: "words" }),
    spell("ento6-t4", "Assemble les lettres du mot « bougie ».", "candle"),
    speak("ento6-t5", "It's my birthday today!", "Happy birthday! I wish you a very happy birthday!", "Joyeux anniversaire ! Je te souhaite un très joyeux anniversaire !", { help: "Félicite à voix haute." }),
    choice("ento6-t6", "Comment dire « Quelle belle surprise ! » ?", [
      ["What a lovely surprise!", true],
      ["How a lovely surprise!", false],
      ["What lovely surprise!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "seven-candle",
    itemName: "Bougie chiffre sept",
    itemNameRu: "Number candle",
    ru: "Hooray! A number seven candle!",
    en: "Hourra ! Une bougie chiffre sept !",
    a11y: "Une petite bougie bleue en forme de chiffre sept, plantée sur une part de gâteau au chocolat.",
    image: p("seven-candle"),
    steps: ["Après le gâteau, Mamie May retire la bougie en forme de sept.", "« Keep it. To remember! » — « Garde-la. En souvenir ! »", "Murzik la pose sur l'étagère.", "Et à côté, le cadre. Il y a maintenant une photo de la fête dedans !"],
    bridge: "Le soir, Michael dit : « Murzik, Mrs Hope's page is in our café. It's in the old recipe box ».",
  },
};

const toronto7: Lesson = {
  id: "en-a1-toronto-7",
  level: "A1",
  cityId: "en-toronto",
  number: 7,
  title: "Goodbye, Toronto! — Au revoir, Toronto !",
  minutes: 8,
  goals: ["Parler de dates et de projets", "Féliciter et souhaiter", "Revoir tous les mots de Toronto"],
  vocabNote: "On révise : les mois et les dates, on / in / at, going to, Happy birthday!, I wish you…",
  vocab: [
    v("ento7-1", "the old recipe box", "la vieille boîte à recettes", "Une boîte en bois avec des fiches de recettes sur l'étagère du café.", "Écouter the old recipe box", p("l7-1")),
    v("ento7-2", "the recipe for butter tarts", "la recette des butter tarts", "Une page avec le dessin de petites tartelettes au caramel.", "Écouter the recipe for butter tarts", p("l7-2")),
    v("ento7-3", "a tablecloth", "une nappe", "Une nappe blanche brodée de feuilles d'érable rouges.", "Écouter a tablecloth", p("l7-3")),
    v("ento7-4", "I made it many years ago.", "Je l'ai brodée il y a bien des années.", "Mamie May caresse la broderie.", "Écouter I made it many years ago", p("l7-4")),
    v("ento7-5", "We're going to fly to Australia.", "On va prendre l'avion pour l'Australie.", "Tom montre l'autre côté du globe.", "Écouter We're going to fly to Australia", p("l7-5")),
    v("ento7-6", "It's autumn there now!", "Là-bas, c'est l'automne en ce moment !", "Une moitié du globe au printemps, l'autre en automne.", "Écouter It's autumn there now", p("l7-6")),
    v("ento7-7", "Have a wonderful trip!", "Bon voyage !", "La famille Chen fait signe devant la porte du café.", "Écouter Have a wonderful trip", p("l7-7")),
  ],
  dialogue: {
    title: "La douzième page",
    note: "Butter tarts — des petites tartelettes au caramel, le dessert préféré des Canadiens. Other side — « l'autre côté ».",
    lines: [
      line("michael", "Murzik, look in the old recipe box. Mrs Hope's page is there.", "Murzik, regarde dans la vieille boîte à recettes. La page de Mme Hope est là."),
      line("murzik", "Here it is! The recipe for butter tarts!", "La voici ! La recette des butter tarts !"),
      line("may", "And this tablecloth is for your café. I made it many years ago.", "Et cette nappe est pour ton café. Je l'ai brodée il y a bien des années."),
      line("tom", "Thank you! The next page is in Sydney. We're going to fly to Australia!", "Merci ! La page suivante est à Sydney. On va prendre l'avion pour l'Australie !"),
      line("lucy", "Australia! It's autumn there now!", "L'Australie ! Là-bas, c'est l'automne en ce moment !"),
      line("murzik", "Autumn in May? The other side of the world!", "L'automne en mai ? L'autre bout du monde !"),
      line("michael", "Have a wonderful trip!", "Bon voyage !"),
    ],
    gist: choice("ento7-d1", "Où vont Murzik et Tom ?", [
      ["En Australie, à Sydney.", true],
      ["À Londres.", false],
      ["À Vancouver.", false],
    ]),
  },
  grammar: [
    {
      title: "Dates et projets : tout ensemble",
      paragraphs: [
        "Quand : in May, on the fifth of May, at six o'clock. Projets : We're going to have a party. I'm going to fly to Sydney.",
        "Fête : Happy birthday! Make a wish! Have a very happy year! What a lovely surprise!",
      ],
      examples: [
        { ru: "My birthday is on the fifth of May. We're going to have a party.", en: "Mon anniversaire est le cinq mai. On va faire une fête." },
        { ru: "I'm going to visit Australia in December.", en: "En décembre, je vais visiter l'Australie." },
      ],
    },
  ],
  tasks: [
    listen("ento7-t1", "Examen d'écoute. Que raconte Lucy ?", "My birthday is on the tenth of June. I'm going to have a party in the café. I'm going to bake a big cake.", [
      ["Anniversaire le 10 juin, fête au café, elle va faire un gros gâteau.", true],
      ["Anniversaire en mai, fête à la maison, le gâteau sera acheté.", false],
      ["Anniversaire le 10 janvier, pas de fête.", false],
    ]),
    choice("ento7-t2", "Choisis la bonne phrase.", [
      ["We're going to fly on Monday.", true],
      ["We going to fly on Monday.", false],
      ["We're going fly in Monday.", false],
    ], { skill: "grammar" }),
    match("ento7-t3", "Relie les paires.", [
      ["tablecloth", "nappe"],
      ["years ago", "il y a des années"],
      ["the other side", "l'autre côté"],
      ["Have a wonderful trip!", "Bon voyage !"],
    ], { skill: "words" }),
    spell("ento7-t4", "Assemble les lettres du mot « mai ».", "May", ["e"]),
    speak("ento7-t5", "What are you going to do next month?", "I'm going to visit my friends.", "Je vais rendre visite à mes amis.", { help: "Raconte à voix haute tes projets pour le mois prochain." }),
    script("ento7-t6", "Souviens-toi de tout Toronto. Termine les conversations.", [
      { speaker: "Mamie May", text: "When's your birthday?" },
      { speaker: "Toi", answer: "It's on the fifth of May.", options: ["It's on the fifth of May.", "It's in the fifth of May.", "It's on five May."] },
      { speaker: "Lucy", text: "What are you going to do on your birthday?" },
      { speaker: "Toi", answer: "I'm going to have a party.", options: ["I'm going to have a party.", "I going to have a party.", "I'm go to have a party."] },
      { speaker: "Michael", text: "Happy birthday! This is for you." },
      { speaker: "Toi", answer: "Thank you so much! What a lovely surprise!", options: ["Thank you so much! What a lovely surprise!", "You're welcome!", "Make a wish!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tablecloth",
    itemName: "Nappe aux feuilles d'érable",
    itemNameRu: "Tablecloth",
    ru: "Hooray! A tablecloth!",
    en: "Hourra ! Une nappe !",
    a11y: "Une nappe en lin blanc brodée de feuilles d'érable rouges sur les bords.",
    image: p("tablecloth"),
    steps: ["Mamie May plie soigneusement la nappe.", "Les bords sont brodés de feuilles d'érable rouges.", "« For the first table in your café. » — « Pour la première table de ton café. »", "Murzik la range dans la valise, à côté du plaid."],
    bridge: "La page suivante est à l'autre bout du monde, à Sydney.",
  },
};

const story: CityStory = {
  home: {
    name: "Appartement au-dessus du café de famille",
    nameRu: "Murzik's flat in Toronto",
    image: p("home"),
    a11y: "Un appartement lumineux et vide au-dessus du café de famille. Par la fenêtre, une haute tour et le lac. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "tablecloth",
  welcomeRu: "Hello, Toronto!",
  welcomeEn: "Salut, Toronto !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom à Toronto : une haute tour au-dessus du lac, des maisons colorées, des fleurs de printemps.",
  departureImage: p("departure"),
  departureA11y: "La famille Chen — Michael, Lucy et Mamie May — fait des signes d'au revoir devant la porte du café.",
  finale: [
    {
      image: p("page"),
      a11y: "Gros plan : la douzième page du livre de recettes, la recette des butter tarts. Dans la marge, un mot écrit à la main.",
      lines: [
        { en: "Murzik colle la douzième page. Dans la marge, un mot de Mme Hope :" },
        { ru: "At my café, everyone got a birthday candle — even strangers.", en: "Dans mon café, tout le monde avait une bougie d'anniversaire — même les inconnus." },
        { en: "Murzik regarde sa bougie chiffre sept et pense : « Promis. »" },
      ],
    },
    {
      image: p("tablecloth"),
      a11y: "Murzik fait le tour de son appartement au-dessus du café, qu'il a meublé leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de son appartement à Toronto. Tom le photographie pour son magazine." },
        { en: "Pour son futur café, il emporte la nappe de Mamie May." },
        { en: "Plus que deux pages !" },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, Tom fête ça avec lui.",
      lines: [
        { ru: "Toronto complete!", en: "Toronto terminé !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "La famille Chen fait des signes d'au revoir.",
      lines: [
        { ru: "Goodbye, Chen family!", en: "Au revoir, famille Chen !" },
        { ru: "Next stop: Sydney!", en: "Prochain arrêt : Sydney !" },
      ],
    },
    {
      image: img.flight,
      a11y: "Un avion survole l'immense océan vers l'autre côté de la Terre.",
      lines: [{ ru: "Toronto → Sydney", en: "Toronto → Sydney" }],
    },
    {
      image: pic("en/sydney/arrival"),
      a11y: "Murzik et Tom à Sydney : l'opéra blanc qui ressemble à des voiles, la baie bleue, un grand pont.",
      lines: [
        { ru: "Hello, Sydney!", en: "Salut, Sydney !" },
        { ru: "We're on the other side of the world!", en: "On est à l'autre bout du monde !" },
      ],
    },
  ],
};

export const enTorontoFr = {
  id: "en-toronto",
  name: "Toronto",
  nameEn: "Toronto",
  lessons: [toronto1, toronto2, toronto3, toronto4, toronto5, toronto6, toronto7],
  story,
};
