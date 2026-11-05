import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/**
 * La Nouvelle-Orléans · « Le temps libre » · lessons 1–7 — French version of ../neworleans.ts.
 * Same story, same English phrases and pictures; explanations, translations
 * and tasks are written for French speakers.
 * In lesson data `ru` = English text, `en` = French translation.
 */

const p = (name: string) => pic(`en/neworleans/${name}`);

const neworleans1: Lesson = {
  id: "en-a1-neworleans-1",
  level: "A1",
  cityId: "en-neworleans",
  number: 1,
  title: "I like music — J'aime la musique",
  minutes: 7,
  goals: ["Dire quelle musique tu aimes", "Demander : What kind of music do you like?", "Nommer ton chanteur préféré"],
  vocabNote: "What kind of…? — « Quel genre de… ? » What kind of music? — « Quelle musique ? » Favourite — « préféré » (en Amérique, on écrit favorite).",
  vocab: [
    v("enno1-1", "What kind of music do you like?", "Quel genre de musique tu aimes ?", "Une femme au foulard coloré, avec un micro, sourit à Murzik.", "Écouter What kind of music do you like", p("l1-1")),
    v("enno1-2", "I like jazz.", "J'aime le jazz.", "Une fanfare joue dans la rue.", "Écouter I like jazz", p("l1-2")),
    v("enno1-3", "I love rock music!", "J'adore le rock !", "Murzik avec une guitare jouet saute sur le lit.", "Écouter I love rock music", p("l1-3")),
    v("enno1-4", "classical music", "la musique classique", "Des violonistes en costume noir sur scène.", "Écouter classical music", p("l1-4")),
    v("enno1-5", "Who's your favourite singer?", "Qui est ton chanteur préféré ?", "Murzik tient un micro imaginaire.", "Écouter Who's your favourite singer", p("l1-5")),
    v("enno1-6", "She sings in a band.", "Elle chante dans un groupe.", "Une chanteuse et quatre musiciens sur une petite scène.", "Écouter She sings in a band", p("l1-6")),
    v("enno1-7", "It's my favourite song.", "C'est ma chanson préférée.", "Murzik, les yeux fermés, se balance en musique.", "Écouter It's my favourite song", p("l1-7")),
  ],
  dialogue: {
    title: "Bernadette",
    note: "Bernadette est chanteuse de jazz, une amie de Tony. Band — « groupe, orchestre ».",
    lines: [
      line("bernadette", "Welcome to New Orleans, sugar! I'm Bernadette. I sing jazz.", "Bienvenue à La Nouvelle-Orléans, mon chou ! Moi, c'est Bernadette. Je chante du jazz."),
      line("murzik", "Hello! I love music!", "Bonjour ! J'adore la musique !"),
      line("bernadette", "What kind of music do you like?", "Et quel genre de musique tu aimes ?"),
      line("murzik", "I like jazz… and I love rock music!", "J'aime le jazz… et j'adore le rock !"),
      line("tom", "I like classical music. My favourite singer is… you, Bernadette!", "Moi, j'aime la musique classique. Ma chanteuse préférée, c'est… vous, Bernadette !"),
      line("bernadette", "Ha! Sweet boy! Come to my concert on Saturday. I sing with my band.", "Ha ! Quel gentil garçon ! Venez à mon concert samedi. Je chante avec mon groupe."),
    ],
    gist: choice("enno1-d1", "Qui est Bernadette ?", [
      ["Une chanteuse de jazz.", true],
      ["Une cuisinière de snack.", false],
      ["Une chauffeuse de taxi.", false],
    ]),
  },
  grammar: [
    {
      title: "What kind of…? Favourite",
      paragraphs: [
        "What kind of music / films / books do you like? — Quel genre de musique / de films / de livres tu aimes ? En français, on demande « quel genre de… ? » — c'est presque mot à mot.",
        "Favourite — « préféré » : my favourite song, her favourite singer. Question : What's your favourite song? Who's your favourite singer?",
      ],
      examples: [
        { ru: "What kind of films do you like? — I like comedies.", en: "Quel genre de films tu aimes ? — Les comédies." },
        { ru: "My favourite band is from Liverpool.", en: "Mon groupe préféré vient de Liverpool." },
      ],
    },
  ],
  tasks: [
    choice("enno1-t1", "Comment demander « Quel genre de musique tu aimes ? »", [
      ["What kind of music do you like?", true],
      ["What music kind you like?", false],
      ["What kind music do you like?", false],
    ], { skill: "grammar" }),
    listen("enno1-t2", "Écoute. Quelle musique il aime ?", "I love classical music.", [
      ["La musique classique.", true],
      ["Le jazz.", false],
      ["Le rock.", false],
    ]),
    match("enno1-t3", "Relie les paires.", [
      ["song", "chanson"],
      ["singer", "chanteur"],
      ["band", "groupe"],
      ["favourite", "préféré"],
    ], { skill: "words" }),
    missing("enno1-t4", "Quelle lettre manque ? (« musique »)", "mus", "c", "i", ["i", "e", "y"]),
    speak("enno1-t5", "What kind of music do you like?", "I like rock music. My favourite band is Queen.", "J'aime le rock. Mon groupe préféré, c'est Queen.", { help: "Raconte à voix haute quelle musique tu aimes." }),
    choice("enno1-t6", "Comment dire « Il y a un parc ici » ?", [
      ["There's a park here.", true],
      ["It's a park here is.", false],
      ["There are a park here.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "rocking-chair",
    itemName: "Rocking-chair",
    itemNameRu: "Rocking chair",
    ru: "Hooray! A rocking chair!",
    en: "Hourra ! Un rocking-chair !",
    a11y: "Un rocking-chair en bois blanc posé sur la véranda à la rambarde en fer forgé.",
    image: p("rocking-chair"),
    steps: ["Bernadette montre à Murzik sa chambre avec véranda.", "Sur la véranda — un rocking-chair blanc.", "« For listening to music in the evening. » — « Pour écouter de la musique le soir. »", "Murzik se balance : d'avant en arrière, d'avant en arrière."],
    bridge: "Le soir, Bernadette demande : « What do you like doing, Murzik? »",
  },
};

const neworleans2: Lesson = {
  id: "en-a1-neworleans-2",
  level: "A1",
  cityId: "en-neworleans",
  number: 2,
  title: "I love dancing — J'adore danser",
  minutes: 7,
  goals: ["Dire ce que tu aimes faire : I like reading", "Dire ce que tu n'aimes pas faire", "Demander : What do you like doing?"],
  vocabNote: "Après like, love, hate, quand on parle d'activités, le verbe prend -ing : I like reading — j'aime lire. I hate getting up early — je déteste me lever tôt.",
  vocab: [
    v("enno2-1", "What do you like doing?", "Qu'est-ce que tu aimes faire ?", "Bernadette, assise dans un fauteuil avec une tasse, regarde Murzik.", "Écouter What do you like doing", p("l2-1")),
    v("enno2-2", "I love dancing.", "J'adore danser.", "Murzik tourbillonne en dansant.", "Écouter I love dancing", p("l2-2")),
    v("enno2-3", "I like reading.", "J'aime lire.", "Tom lit un livre sur la véranda.", "Écouter I like reading", p("l2-3")),
    v("enno2-4", "I like cooking.", "J'aime cuisiner.", "Murzik, en tablier, remue quelque chose dans une casserole.", "Écouter I like cooking", p("l2-4")),
    v("enno2-5", "I don't like swimming.", "Je n'aime pas nager.", "Murzik regarde la piscine avec horreur.", "Écouter I don't like swimming", p("l2-5")),
    v("enno2-6", "I hate getting up early.", "Je déteste me lever tôt.", "Tom avec un oreiller sur la tête, le réveil sonne.", "Écouter I hate getting up early", p("l2-6")),
    v("enno2-7", "She loves singing.", "Elle adore chanter.", "Bernadette chante en arrosant les fleurs.", "Écouter She loves singing", p("l2-7")),
  ],
  dialogue: {
    title: "Soirée sur la véranda",
    note: "Water — « eau », mais à propos des chats : cats hate water — les chats détestent l'eau.",
    lines: [
      line("bernadette", "Murzik, what do you like doing?", "Murzik, qu'est-ce que tu aimes faire ?"),
      line("murzik", "I love dancing and I like cooking!", "J'adore danser et j'aime cuisiner !"),
      line("bernadette", "Do you like swimming?", "Et tu aimes nager ?"),
      line("murzik", "No! I hate swimming. I'm a cat!", "Non ! Je déteste nager. Je suis un chat, moi !"),
      line("tom", "I like reading and taking photos. And I hate getting up early!", "Moi, j'aime lire et prendre des photos. Et je déteste me lever tôt !"),
      line("bernadette", "And I love singing — all day, every day!", "Et moi, j'adore chanter — toute la journée, tous les jours !"),
    ],
    gist: choice("enno2-d1", "Qu'est-ce que Murzik déteste ?", [
      ["Nager.", true],
      ["Danser.", false],
      ["Cuisiner.", false],
    ]),
  },
  grammar: [
    {
      title: "Like + -ing",
      paragraphs: [
        "Pour les activités préférées : like / love / hate + verbe en -ing : I like reading. She loves singing. They hate waiting. En français, on utilise l'infinitif : « j'aime lire » ; en anglais, c'est la forme en -ing, jamais l'infinitif après like.",
        "Orthographe : dance → dancing (sans e), swim → swimming (deux m), get → getting.",
      ],
      examples: [
        { ru: "I love cooking for my friends.", en: "J'adore cuisiner pour mes amis." },
        { ru: "Tom doesn't like waiting.", en: "Tom n'aime pas attendre." },
      ],
    },
  ],
  tasks: [
    choice("enno2-t1", "Comment dire « J'aime lire » ?", [
      ["I like reading.", true],
      ["I like read.", false],
      ["I like to reading.", false],
    ], { skill: "grammar" }),
    listen("enno2-t2", "Écoute. Qu'est-ce qu'elle aime ?", "She loves dancing, but she hates swimming.", [
      ["Danser, mais pas nager.", true],
      ["Nager, mais pas danser.", false],
      ["Chanter et danser.", false],
    ]),
    match("enno2-t3", "Relie les paires.", [
      ["dancing", "danser"],
      ["swimming", "nager"],
      ["cooking", "cuisiner"],
      ["reading", "lire"],
    ], { skill: "words" }),
    missing("enno2-t4", "Quelle lettre manque ? (« natation »)", "swi", "ming", "m", ["m", "n", "w"]),
    speak("enno2-t5", "What do you like doing?", "I like reading and I love walking in the park.", "J'aime lire et j'adore me promener au parc.", { help: "Raconte à voix haute ce que tu aimes faire." }),
    choice("enno2-t6", "Comment demander « Qui est ton chanteur préféré ? »", [
      ["Who's your favourite singer?", true],
      ["What's your favourite singer is?", false],
      ["Who your singer favourite?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "record",
    itemName: "Disque de jazz",
    itemNameRu: "Jazz record",
    ru: "Hooray! A jazz record!",
    en: "Hourra ! Un disque de jazz !",
    a11y: "Un vieux disque vinyle dans une pochette en carton décorée d'une trompette et d'une lune.",
    image: p("record"),
    steps: ["Bernadette sort un vieux disque.", "« My first record. I was nineteen! » — « Mon premier disque. J'avais dix-neuf ans ! »", "Elle dédicace la pochette pour Murzik.", "Le disque trône sur l'étagère."],
    bridge: "Murzik demande à Bernadette : « Do you sing every day? »",
  },
};

const neworleans3: Lesson = {
  id: "en-a1-neworleans-3",
  level: "A1",
  cityId: "en-neworleans",
  number: 3,
  title: "Always, sometimes, never — Toujours, parfois, jamais",
  minutes: 7,
  goals: ["Dire à quelle fréquence : always, usually, sometimes, never", "Placer ces mots au bon endroit", "Demander : How often?"],
  vocabNote: "Always, usually, often, sometimes, never se placent avant le verbe : I always drink tea. Mais après is / are : She's always late.",
  vocab: [
    v("enno3-1", "I always sing in the morning.", "Je chante toujours le matin.", "Bernadette chante à la fenêtre ouverte, le soleil se lève.", "Écouter I always sing in the morning", p("l3-1")),
    v("enno3-2", "I usually get up at nine.", "Je me lève d'habitude à neuf heures.", "Le réveil réglé sur neuf heures, Bernadette s'étire.", "Écouter I usually get up at nine", p("l3-2")),
    v("enno3-3", "We often go to the river.", "On va souvent au bord du fleuve.", "Murzik et Bernadette sur les quais du large fleuve.", "Écouter We often go to the river", p("l3-3")),
    v("enno3-4", "I sometimes cook gumbo.", "Parfois, je cuisine du gumbo.", "Une grande marmite de soupe épaisse.", "Écouter I sometimes cook gumbo", p("l3-4")),
    v("enno3-5", "I never drink coffee at night.", "Je ne bois jamais de café le soir.", "Une tasse de café barrée d'une croix, sous la lune.", "Écouter I never drink coffee at night", p("l3-5")),
    v("enno3-6", "How often do you sing?", "À quelle fréquence chantes-tu ?", "Murzik, carnet en patte, mène l'interview.", "Écouter How often do you sing", p("l3-6")),
    v("enno3-7", "Tom is always late!", "Tom est toujours en retard !", "Tom court en boutonnant sa chemise.", "Écouter Tom is always late", p("l3-7")),
  ],
  dialogue: {
    title: "L'interview",
    note: "Gumbo — une soupe épaisse, plat célèbre de La Nouvelle-Orléans. Never ne s'utilise pas avec do : I never drink, et non « I don't never ».",
    lines: [
      line("murzik", "Bernadette, how often do you sing?", "Bernadette, à quelle fréquence chantez-vous ?"),
      line("bernadette", "I always sing! In the morning, in the evening, in the shower!", "Je chante tout le temps ! Le matin, le soir, sous la douche !"),
      line("murzik", "Do you cook?", "Et vous cuisinez ?"),
      line("bernadette", "Sometimes. I sometimes cook gumbo. But I usually make beignets.", "Parfois. Je cuisine parfois du gumbo. Mais d'habitude, je fais des beignets."),
      line("murzik", "Do you drink coffee?", "Et vous buvez du café ?"),
      line("bernadette", "Yes, but I never drink coffee at night. I sing at night!", "Oui, mais je ne bois jamais de café le soir. Le soir, je chante !"),
      line("tom", "Sorry, sorry, I'm late!", "Pardon, pardon, je suis en retard !"),
      line("murzik", "Tom is always late!", "Tom est toujours en retard !"),
    ],
    gist: choice("enno3-d1", "Que fait Bernadette tout le temps ?", [
      ["Elle chante.", true],
      ["Elle cuisine du gumbo.", false],
      ["Elle boit du café le soir.", false],
    ]),
  },
  grammar: [
    {
      title: "La fréquence : la place dans la phrase",
      paragraphs: [
        "Always (toujours), usually (d'habitude), often (souvent), sometimes (parfois), never (jamais) se placent AVANT le verbe : I usually walk. She never eats meat. En français, on dit « je chante toujours » — après le verbe ; en anglais, c'est avant !",
        "Avec is / are — après : He's always happy. We're never late. Never contient déjà la négation : I never drink (pas de « I don't never drink »). En français, « ne… jamais » a deux morceaux ; en anglais, never suffit.",
      ],
      examples: [
        { ru: "I often read in the evening.", en: "Je lis souvent le soir." },
        { ru: "She's always kind.", en: "Elle est toujours gentille." },
      ],
    },
  ],
  tasks: [
    choice("enno3-t1", "Où usually est-il bien placé ?", [
      ["I usually drink tea.", true],
      ["I drink usually tea.", false],
      ["Usually I drink tea usually.", false],
    ], { skill: "grammar" }),
    listen("enno3-t2", "Écoute. À quelle fréquence va-t-il au cinéma ?", "I sometimes go to the cinema.", [
      ["Parfois.", true],
      ["Toujours.", false],
      ["Jamais.", false],
    ]),
    match("enno3-t3", "Relie les paires.", [
      ["always", "toujours"],
      ["often", "souvent"],
      ["sometimes", "parfois"],
      ["never", "jamais"],
    ], { skill: "words" }),
    missing("enno3-t4", "Quelle lettre manque ? (« jamais »)", "nev", "r", "e", ["e", "a", "i"]),
    speak("enno3-t5", "How often do you drink coffee?", "I usually drink coffee in the morning.", "D'habitude, je bois du café le matin.", { help: "Raconte à voix haute à quelle fréquence tu fais quelque chose." }),
    choice("enno3-t6", "Comment dire « J'adore danser » ?", [
      ["I love dancing.", true],
      ["I love dance.", false],
      ["I'm love dancing.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sieve",
    itemName: "Passoire à sucre glace",
    itemNameRu: "Sugar sieve",
    ru: "Hooray! A sugar sieve!",
    en: "Hourra ! Une passoire à sucre glace !",
    a11y: "Une petite passoire en métal avec un manche, sous laquelle tombe une neige de sucre glace.",
    image: p("sieve"),
    steps: ["Bernadette montre comment saupoudrer les beignets de sucre glace.", "Beaucoup de sucre ! Encore plus de sucre !", "Murzik est tout blanc, comme un bonhomme de neige.", "Bernadette rit et lui offre la passoire."],
    bridge: "Le week-end arrive. Que fait-on à La Nouvelle-Orléans le week-end ?",
  },
};

const neworleans4: Lesson = {
  id: "en-a1-neworleans-4",
  level: "A1",
  cityId: "en-neworleans",
  number: 4,
  title: "At the weekend — Le week-end",
  minutes: 7,
  goals: ["Raconter ton week-end", "Nommer des activités : cinema, shopping, friends", "Demander : What do you do at the weekend?"],
  vocabNote: "Go + -ing : go shopping (faire du shopping), go swimming, go dancing. Mais : go to the cinema, go to a concert.",
  vocab: [
    v("enno4-1", "What do you do at the weekend?", "Qu'est-ce que tu fais le week-end ?", "Murzik et Bernadette sur la véranda, un samedi matin.", "Écouter What do you do at the weekend", p("l4-1")),
    v("enno4-2", "I meet my friends.", "Je retrouve mes amis.", "Bernadette fait des câlins à ses amies dans la rue.", "Écouter I meet my friends", p("l4-2")),
    v("enno4-3", "We go to the cinema.", "On va au cinéma.", "Murzik et Tom avec du pop-corn au cinéma.", "Écouter We go to the cinema", p("l4-3")),
    v("enno4-4", "She goes shopping.", "Elle fait du shopping.", "Bernadette avec des sacs de courses.", "Écouter She goes shopping", p("l4-4")),
    v("enno4-5", "I watch films at home.", "Je regarde des films à la maison.", "Tom regarde un film sous un plaid.", "Écouter I watch films at home", p("l4-5")),
    v("enno4-6", "I just relax.", "Je me repose, tout simplement.", "Murzik sommeille dans le rocking-chair.", "Écouter I just relax", p("l4-6")),
    v("enno4-7", "We go to the market.", "On va au marché.", "Un marché coloré avec des fruits et des épices.", "Écouter We go to the market", p("l4-7")),
  ],
  dialogue: {
    title: "Les projets du samedi",
    note: "French Market — le vieux marché français de La Nouvelle-Orléans. Just — « simplement ».",
    lines: [
      line("murzik", "Bernadette, what do you do at the weekend?", "Bernadette, qu'est-ce que vous faites le week-end ?"),
      line("bernadette", "On Saturday I go to the French Market. Then I meet my friends.", "Le samedi, je vais au French Market. Ensuite, je retrouve mes amis."),
      line("murzik", "And on Sunday?", "Et le dimanche ?"),
      line("bernadette", "On Sunday I just relax. I watch films at home. And you?", "Le dimanche, je me repose. Je regarde des films à la maison. Et toi ?"),
      line("murzik", "In Russia I usually go to the park. Tom goes shopping!", "En Russie, d'habitude, je vais au parc. Et Tom fait du shopping !"),
      line("tom", "Only for cameras!", "Seulement pour les appareils photo !"),
    ],
    gist: choice("enno4-d1", "Que fait Bernadette le dimanche ?", [
      ["Elle se repose et regarde des films à la maison.", true],
      ["Elle va au marché.", false],
      ["Elle chante au club.", false],
    ]),
  },
  grammar: [
    {
      title: "Go shopping, go to the cinema",
      paragraphs: [
        "Les activités en -ing : go shopping, go swimming, go dancing, go running.",
        "Les lieux — avec to : go to the cinema, go to the park, go to a concert. Mais « à la maison » — tout simplement go home. En français aussi on distingue : « faire du shopping » mais « aller au cinéma ».",
      ],
      examples: [
        { ru: "At the weekend I go swimming.", en: "Le week-end, je vais nager." },
        { ru: "We go to the theatre on Fridays.", en: "Le vendredi, on va au théâtre." },
      ],
    },
  ],
  tasks: [
    choice("enno4-t1", "Comment dire « Je fais du shopping » ?", [
      ["I go shopping.", true],
      ["I go to shopping.", false],
      ["I go shop.", false],
    ], { skill: "grammar" }),
    listen("enno4-t2", "Écoute. Que font-ils le week-end ?", "At the weekend we go to the cinema and meet friends.", [
      ["Ils vont au cinéma et retrouvent des amis.", true],
      ["Ils vont au marché et cuisinent.", false],
      ["Ils se reposent à la maison.", false],
    ]),
    match("enno4-t3", "Relie les paires.", [
      ["cinema", "cinéma"],
      ["relax", "se reposer"],
      ["meet", "retrouver"],
      ["market", "marché"],
    ], { skill: "words" }),
    spell("enno4-t4", "Assemble les lettres du mot « film ».", "film"),
    speak("enno4-t5", "What do you do at the weekend?", "I meet my friends and go to the cinema.", "Je retrouve mes amis et je vais au cinéma.", { help: "Raconte ton week-end à voix haute." }),
    choice("enno4-t6", "Où never est-il bien placé ?", [
      ["I never drink coffee.", true],
      ["I drink never coffee.", false],
      ["I don't never drink coffee.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "iron-table",
    itemName: "Table en fer forgé",
    itemNameRu: "Iron table",
    ru: "Hooray! An iron table!",
    en: "Hourra ! Une table en fer forgé !",
    a11y: "Une petite table ronde avec un décor en fer forgé de volutes, posée sur la véranda.",
    image: p("iron-table"),
    steps: ["Au French Market, Murzik voit une table en fer forgé.", "Comme les balcons de La Nouvelle-Orléans !", "Bernadette marchande et l'achète.", "On peut maintenant boire le café à deux sur la véranda."],
    bridge: "Le soir — le concert de Bernadette au club !",
  },
};

const neworleans5: Lesson = {
  id: "en-a1-neworleans-5",
  level: "A1",
  cityId: "en-neworleans",
  number: 5,
  title: "At the concert — Au concert",
  minutes: 7,
  goals: ["Acheter des billets", "Demander à quelle heure ça commence : What time does it start?", "Féliciter pour le spectacle"],
  vocabNote: "What time does it start? — « À quelle heure ça commence ? » It starts at nine. Dans la question avec it — does, et dans la réponse, le -s revient : it starts.",
  vocab: [
    v("enno5-1", "Two tickets, please.", "Deux billets, s'il vous plaît.", "Murzik tend l'argent au guichet.", "Écouter Two tickets, please", p("l5-1")),
    v("enno5-2", "What time does it start?", "À quelle heure ça commence ?", "Murzik regarde l'affiche à l'entrée du club.", "Écouter What time does it start", p("l5-2")),
    v("enno5-3", "It starts at nine.", "Ça commence à neuf heures.", "L'horloge au-dessus de la scène indique neuf heures.", "Écouter It starts at nine", p("l5-3")),
    v("enno5-4", "in the front row", "au premier rang", "Murzik et Tom assis juste devant la scène.", "Écouter in the front row", p("l5-4")),
    v("enno5-5", "She's amazing!", "Elle est extraordinaire !", "Bernadette chante sous les projecteurs.", "Écouter She's amazing", p("l5-5")),
    v("enno5-6", "Everybody is clapping.", "Tout le monde applaudit.", "Le public applaudit debout.", "Écouter Everybody is clapping", p("l5-6")),
    v("enno5-7", "When does it finish?", "Quand est-ce que ça finit ?", "Tom demande en chuchotant, l'œil sur sa montre.", "Écouter When does it finish", p("l5-7")),
  ],
  dialogue: {
    title: "Le club de jazz",
    note: "Seat — « place (dans la salle) ». Wonderful — « merveilleux ».",
    lines: [
      line("murzik", "Two tickets, please. What time does it start?", "Deux billets, s'il vous plaît. À quelle heure ça commence ?"),
      line("cashier", "It starts at nine. Here are your tickets. Your seats are in the front row!", "À neuf heures. Voici vos billets. Vos places sont au premier rang !"),
      line("tom", "In the front row! Wonderful!", "Au premier rang ! Merveilleux !"),
      line("murzik", "Look! Everybody is clapping. She's amazing!", "Regarde ! Tout le monde applaudit. Elle est extraordinaire !"),
      line("tom", "When does it finish?", "Quand est-ce que ça finit ?"),
      line("murzik", "I don't know… I don't want it to finish!", "Je ne sais pas… Je ne veux pas que ça finisse !"),
    ],
    gist: choice("enno5-d1", "Où sont les places de Murzik et Tom ?", [
      ["Au premier rang.", true],
      ["Au dernier rang.", false],
      ["Au balcon.", false],
    ]),
  },
  grammar: [
    {
      title: "What time does it start?",
      paragraphs: [
        "Pour les horaires, on utilise le présent simple : The concert starts at nine. The film finishes at eleven.",
        "La question avec it / he / she — avec does : What time does it start? When does the shop open? Après does, le verbe perd son -s. En français : « À quelle heure ça commence ? ».",
      ],
      examples: [
        { ru: "The train leaves at six.", en: "Le train part à six heures." },
        { ru: "What time does the museum open?", en: "À quelle heure ouvre le musée ?" },
      ],
    },
  ],
  tasks: [
    choice("enno5-t1", "Comment demander « À quelle heure commence le film ? »", [
      ["What time does the film start?", true],
      ["What time do the film start?", false],
      ["What time does the film starts?", false],
    ], { skill: "grammar" }),
    listen("enno5-t2", "Écoute. À quelle heure est le concert ?", "The concert starts at half past eight.", [
      ["À 8 h 30.", true],
      ["À 9 h 30.", false],
      ["À 8 h.", false],
    ]),
    match("enno5-t3", "Relie les paires.", [
      ["ticket", "billet"],
      ["front row", "premier rang"],
      ["clap", "applaudir"],
      ["amazing", "extraordinaire"],
    ], { skill: "words" }),
    missing("enno5-t4", "Quelle lettre manque ? (« billet »)", "tick", "t", "e", ["e", "i", "a"]),
    speak("enno5-t5", "Can I help you?", "Two tickets, please. What time does it start?", "Deux billets, s'il vous plaît. À quelle heure ça commence ?", { help: "Achète des billets à voix haute." }),
    choice("enno5-t6", "Comment dire « Je vais au cinéma » ?", [
      ["I go to the cinema.", true],
      ["I go cinema.", false],
      ["I go to cinemaing.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "lanterns",
    itemName: "Guirlande de lampions",
    itemNameRu: "Lanterns",
    ru: "Hooray! Little lanterns!",
    en: "Hourra ! Des lampions !",
    a11y: "Une guirlande de petits lampions en papier de différentes couleurs, suspendue au-dessus de la véranda, brille doucement.",
    image: p("lanterns"),
    steps: ["Après le concert, le patron du club décroche la guirlande de la scène.", "« For the little fan in the front row! » — « Pour le petit fan du premier rang ! »", "Murzik accroche les lampions au-dessus de la véranda.", "Le soir, ils brillent comme des étoiles."],
    bridge: "Le matin, Bernadette fait frire des beignets. Murzik invite tous les voisins.",
  },
};

const neworleans6: Lesson = {
  id: "en-a1-neworleans-6",
  level: "A1",
  cityId: "en-neworleans",
  number: 6,
  title: "Would you like to come? — Tu veux venir ?",
  minutes: 7,
  goals: ["Inviter : Would you like to…?", "Accepter : I'd love to!", "Refuser poliment : Sorry, I can't"],
  vocabNote: "Would you like to come? — « Tu voudrais venir ? » La réponse polie « oui » — I'd love to! « Non » — Sorry, I can't, mais toujours avec une raison.",
  vocab: [
    v("enno6-1", "Would you like to come?", "Vous voulez venir ?", "Murzik, devant la porte d'une voisine, avec une assiette de beignets.", "Écouter Would you like to come", p("l6-1")),
    v("enno6-2", "I'd love to!", "Avec plaisir !", "La voisine applaudit de joie.", "Écouter I'd love to", p("l6-2")),
    v("enno6-3", "Sorry, I can't.", "Désolé, je ne peux pas.", "Le voisin, avec une valise, écarte les bras d'un air confus.", "Écouter Sorry, I can't", p("l6-3")),
    v("enno6-4", "I'm busy today.", "Je suis occupé aujourd'hui.", "Un homme en uniforme se dépêche d'aller au travail.", "Écouter I'm busy today", p("l6-4")),
    v("enno6-5", "Maybe next time.", "Peut-être une prochaine fois.", "Le voisin fait signe en souriant.", "Écouter Maybe next time", p("l6-5")),
    v("enno6-6", "beignets with sugar", "des beignets au sucre glace", "Une montagne de beignets carrés et gonflés, couverts de sucre glace.", "Écouter beignets with sugar", p("l6-6")),
    v("enno6-7", "Everybody is welcome!", "Tout le monde est le bienvenu !", "Les voisins rassemblés sur la véranda, tous couverts de sucre glace.", "Écouter Everybody is welcome", p("l6-7")),
  ],
  dialogue: {
    title: "Les voisins",
    note: "Beignets — un mot français ! Des beignets carrés saupoudrés de sucre glace, le symbole de La Nouvelle-Orléans.",
    lines: [
      line("murzik", "Hello! We've got beignets. Would you like to come?", "Bonjour ! On a des beignets. Vous voulez venir ?"),
      line("passerby", "Beignets? I'd love to!", "Des beignets ? Avec plaisir !"),
      line("murzik", "And your husband? Would he like to come?", "Et votre mari ? Il veut venir ?"),
      line("passerby", "Sorry, he can't. He's busy today. Maybe next time!", "Désolée, il ne peut pas. Il est occupé aujourd'hui. Une prochaine fois !"),
      line("bernadette", "Murzik, everybody is welcome! There are a hundred beignets!", "Murzik, tout le monde est le bienvenu ! Il y a cent beignets !"),
      line("murzik", "A hundred? Then I'll invite the whole street!", "Cent ? Alors j'invite toute la rue !"),
    ],
    gist: choice("enno6-d1", "Pourquoi le mari de la voisine ne vient-il pas ?", [
      ["Il est occupé aujourd'hui.", true],
      ["Il n'aime pas les beignets.", false],
      ["Il est malade.", false],
    ]),
  },
  grammar: [
    {
      title: "Inviter et répondre",
      paragraphs: [
        "Inviter : Would you like to come? Would you like to have dinner with us? C'est comme notre conditionnel poli : « tu voudrais venir ? ». Do you want to…? — plus simple, entre amis.",
        "Oui : I'd love to! Yes, please! Non : Sorry, I can't. I'm busy. Maybe next time. Un simple « No » serait impoli.",
      ],
      examples: [
        { ru: "Would you like to go to the cinema? — I'd love to!", en: "Tu veux aller au cinéma ? — Avec plaisir !" },
        { ru: "Sorry, I can't. I'm working tomorrow.", en: "Désolé, je ne peux pas. Je travaille demain." },
      ],
    },
  ],
  tasks: [
    choice("enno6-t1", "On t'invite à dîner. Comment accepter poliment ?", [
      ["I'd love to!", true],
      ["I love to!", false],
      ["Yes, I like.", false],
    ], { skill: "grammar" }),
    listen("enno6-t2", "Écoute. Que répond-on à l'invitation ?", "Sorry, I can't. I'm busy. Maybe next time.", [
      ["On refuse : la personne est occupée.", true],
      ["On accepte.", false],
      ["On demande à quelle heure.", false],
    ]),
    match("enno6-t3", "Relie les paires.", [
      ["busy", "occupé"],
      ["next time", "une prochaine fois"],
      ["I'd love to!", "Avec plaisir !"],
      ["Everybody is welcome!", "Tout le monde est le bienvenu !"],
    ], { skill: "words" }),
    spell("enno6-t4", "Assemble les lettres du mot « occupé » (busy).", "busy"),
    speak("enno6-t5", "Would you like to come to my party?", "I'd love to! Thank you!", "Avec plaisir ! Merci !", { help: "Réponds à voix haute à l'invitation." }),
    choice("enno6-t6", "Comment demander « À quelle heure ça commence ? »", [
      ["What time does it start?", true],
      ["What time it starts?", false],
      ["What time do it start?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fan",
    itemName: "Éventail peint",
    itemNameRu: "Fan",
    ru: "Hooray! A pretty fan!",
    en: "Hourra ! Un bel éventail !",
    a11y: "Un éventail en papier ouvert, décoré de magnolias peints, posé sur la table en fer forgé.",
    image: p("fan"),
    steps: ["La voisine arrive avec un cadeau.", "À La Nouvelle-Orléans, il fait chaud — impossible de se passer d'un éventail !", "« For hot days! » — « Pour les journées chaudes ! »", "Murzik s'évente sur la véranda."],
    bridge: "Pour le départ, Bernadette dit : « Sugar, I've got something for your book ».",
  },
};

const neworleans7: Lesson = {
  id: "en-a1-neworleans-7",
  level: "A1",
  cityId: "en-neworleans",
  number: 7,
  title: "Goodbye, New Orleans! — Au revoir, La Nouvelle-Orléans !",
  minutes: 8,
  goals: ["Raconter ton temps libre", "Inviter et répondre à une invitation", "Revoir tous les mots de La Nouvelle-Orléans"],
  vocabNote: "On révise : like / love / hate + -ing, always / sometimes / never, go shopping, Would you like to…? — I'd love to!",
  vocab: [
    v("enno7-1", "I've got something for your book.", "J'ai quelque chose pour ton livre.", "Bernadette sort d'un coffret une page pliée.", "Écouter I've got something for your book", p("l7-1")),
    v("enno7-2", "the recipe for beignets", "la recette des beignets", "Une page avec le dessin de beignets au sucre glace.", "Écouter the recipe for beignets", p("l7-2")),
    v("enno7-3", "a record player", "un tourne-disque", "Un vieux tourne-disque en valisette, avec un disque dessus.", "Écouter a record player", p("l7-3")),
    v("enno7-4", "Music makes people happy.", "La musique rend les gens heureux.", "Des gens dansent dans la rue au son de la fanfare.", "Écouter Music makes people happy", p("l7-4")),
    v("enno7-5", "We're flying to San Francisco.", "On s'envole pour San Francisco.", "Tom montre la côte ouest sur la carte.", "Écouter We're flying to San Francisco", p("l7-5")),
    v("enno7-6", "Don't stop singing!", "N'arrête pas de chanter !", "Murzik fait signe à Bernadette depuis la véranda.", "Écouter Don't stop singing", p("l7-6")),
    v("enno7-7", "See you later, alligator!", "À plus tard, alligator !", "Bernadette rit et fait signe avec son foulard.", "Écouter See you later, alligator", p("l7-7")),
  ],
  dialogue: {
    title: "La neuvième page",
    note: "See you later, alligator! — un au revoir en rimes. On répond : In a while, crocodile! (« Dans un moment, crocodile ! »).",
    lines: [
      line("bernadette", "Sugar, I've got something for your book.", "Mon chou, j'ai quelque chose pour ton livre."),
      line("murzik", "A page! The recipe for beignets!", "Une page ! La recette des beignets !"),
      line("bernadette", "And this record player is for your café. Music makes people happy.", "Et ce tourne-disque est pour ton café. La musique rend les gens heureux."),
      line("tom", "Thank you, Bernadette! Where's the next page?", "Merci, Bernadette ! Où est la page suivante ?"),
      line("bernadette", "In San Francisco. Ask Daniel. He's got a little coffee shop on a hill.", "À San Francisco. Demandez Daniel. Il a un petit coffee-shop sur une colline."),
      line("murzik", "Don't stop singing, Bernadette!", "N'arrêtez pas de chanter, Bernadette !"),
      line("bernadette", "Never! See you later, alligator!", "Jamais ! À plus tard, alligator !"),
      line("murzik", "In a while, crocodile!", "Dans un moment, crocodile !"),
    ],
    gist: choice("enno7-d1", "Où est la page suivante ?", [
      ["À San Francisco, chez Daniel.", true],
      ["À Chicago, chez Tony.", false],
      ["À La Nouvelle-Orléans, au club.", false],
    ]),
  },
  grammar: [
    {
      title: "Le temps libre : tout ensemble",
      paragraphs: [
        "Ce que tu aimes : I like reading. I love dancing. I hate swimming. À quelle fréquence : I always sing. I never drink coffee at night.",
        "Le week-end : I go shopping, I meet my friends. L'invitation : Would you like to come? — I'd love to! / Sorry, I can't.",
      ],
      examples: [
        { ru: "I usually go swimming at the weekend.", en: "Le week-end, je vais nager, d'habitude." },
        { ru: "Would you like to come to the concert? — I'd love to!", en: "Tu veux venir au concert ? — Avec plaisir !" },
      ],
    },
  ],
  tasks: [
    listen("enno7-t1", "Examen d'écoute. Que raconte Bernadette ?", "I always sing in the morning. I love cooking, but I never cook on Sunday. On Sunday I just relax.", [
      ["Elle chante toujours le matin, elle aime cuisiner, mais le dimanche elle ne cuisine pas, elle se repose.", true],
      ["Elle chante parfois, elle ne cuisine jamais, le dimanche elle fait du shopping.", false],
      ["Elle chante seulement le soir, elle cuisine tous les dimanches.", false],
    ]),
    choice("enno7-t2", "Choisis la bonne phrase.", [
      ["She often goes shopping at the weekend.", true],
      ["She goes often shopping at the weekend.", false],
      ["She often go shopping at the weekend.", false],
    ], { skill: "grammar" }),
    match("enno7-t3", "Relie les paires.", [
      ["record player", "tourne-disque"],
      ["happy", "heureux"],
      ["Don't stop!", "N'arrête pas !"],
      ["See you later!", "À plus tard !"],
    ], { skill: "words" }),
    spell("enno7-t4", "Assemble les lettres du mot « heureux ».", "happy"),
    speak("enno7-t5", "What do you like doing in your free time?", "I love reading and I sometimes go to concerts.", "J'adore lire et je vais parfois à des concerts.", { help: "Raconte ton temps libre à voix haute." }),
    script("enno7-t6", "Souviens-toi de toute La Nouvelle-Orléans. Termine les conversations.", [
      { speaker: "Bernadette", text: "What do you like doing?" },
      { speaker: "Toi", answer: "I like cooking and dancing.", options: ["I like cooking and dancing.", "I like cook and dance.", "I'm like cooking."] },
      { speaker: "Bernadette", text: "How often do you dance?" },
      { speaker: "Toi", answer: "I sometimes dance at the weekend.", options: ["I sometimes dance at the weekend.", "I dance sometimes at weekend.", "I am sometimes dance."] },
      { speaker: "Bernadette", text: "Would you like to come to my concert?" },
      { speaker: "Toi", answer: "I'd love to!", options: ["I'd love to!", "I love!", "I'd like!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "record-player",
    itemName: "Tourne-disque",
    itemNameRu: "Record player",
    ru: "Hooray! A record player!",
    en: "Hourra ! Un tourne-disque !",
    a11y: "Un vieux tourne-disque en valisette rouge, avec un disque de jazz qui tourne.",
    image: p("record-player"),
    steps: ["Bernadette met son disque sur le tourne-disque.", "La chambre se remplit de jazz.", "« For your café. Every café needs music! » — « Pour ton café. Tout café a besoin de musique ! »", "Murzik referme la valisette et l'emporte."],
    bridge: "La page suivante est à San Francisco, chez Daniel.",
  },
};

const story: CityStory = {
  home: {
    name: "Chambre avec véranda",
    nameRu: "Murzik's room in New Orleans",
    image: p("home"),
    a11y: "Une chambre vide avec des volets et une porte sur la véranda à la rambarde en fer forgé. Dehors, des magnolias en fleurs, une trompette joue au loin. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "record-player",
  welcomeRu: "Hello, New Orleans!",
  welcomeEn: "Bonjour, La Nouvelle-Orléans !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom à La Nouvelle-Orléans : de vieilles maisons aux balcons en fer forgé, des fleurs, une fanfare joue dans la rue.",
  departureImage: p("departure"),
  departureA11y: "Bernadette, au foulard coloré, fait un signe d'adieu depuis la véranda éclairée de lampions.",
  finale: [
    {
      image: p("page"),
      a11y: "En gros plan : la neuvième page du livre de recettes, la recette des beignets. En marge, un mot écrit à la main ; la page est légèrement saupoudrée de sucre glace.",
      lines: [
        { en: "Murzik colle la neuvième page. En marge — un mot de Mme Hope :" },
        { ru: "At my café, the music was quiet in the morning and loud in the evening.", en: "Dans mon café, la musique était douce le matin et forte le soir." },
        { en: "Murzik regarde le tourne-disque et pense : « Le matin — du jazz tout doux »." },
      ],
    },
    {
      image: p("record-player"),
      a11y: "Murzik fait le tour de sa chambre avec véranda, meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambre à La Nouvelle-Orléans. Tom la photographie pour son journal." },
        { en: "Pour son futur café, il emporte le tourne-disque de Bernadette." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, Tom fête ça avec lui.",
      lines: [
        { ru: "New Orleans complete!", en: "La Nouvelle-Orléans terminée !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Bernadette fait un signe d'adieu.",
      lines: [
        { ru: "Goodbye, Bernadette!", en: "Au revoir, Bernadette !" },
        { ru: "Next stop: San Francisco!", en: "Prochain arrêt : San Francisco !" },
      ],
    },
    {
      image: img.flight,
      a11y: "L'avion vole vers l'ouest, au-dessus des déserts et des montagnes.",
      lines: [{ ru: "New Orleans → San Francisco", en: "La Nouvelle-Orléans → San Francisco" }],
    },
    {
      image: pic("en/sanfrancisco/arrival"),
      a11y: "Murzik et Tom à San Francisco : le pont rouge dans la brume, des rues en pente raide, un vieux tramway gravit la colline.",
      lines: [
        { ru: "Hello, San Francisco!", en: "Bonjour, San Francisco !" },
        { ru: "So many hills!", en: "Tant de collines !" },
      ],
    },
  ],
};

export const enNewOrleansFr = {
  id: "en-neworleans",
  name: "La Nouvelle-Orléans",
  nameEn: "New Orleans",
  lessons: [neworleans1, neworleans2, neworleans3, neworleans4, neworleans5, neworleans6, neworleans7],
  story,
};
