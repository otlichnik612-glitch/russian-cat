import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/**
 * French version of ../sydney.ts.
 * Same story, same English phrases and pictures, but grammar, explanations
 * and translations are written for French-speaking learners.
 * In lesson data `ru` = English text, `en` = French translation.
 */

const p = (name: string) => pic(`en/sydney/${name}`);

const sydney1: Lesson = {
  id: "en-a1-sydney-1",
  level: "A1",
  cityId: "en-sydney",
  number: 1,
  title: "Where were you? — Où étais-tu ?",
  minutes: 7,
  goals: ["Dire « étais / étiez » : was, were", "Demander : Where were you?", "Dire « n'était pas » : wasn't, weren't"],
  vocabNote: "Le passé de am / is est was, celui de are est were : I was, he was, she was, it was; we were, you were, they were.",
  vocab: [
    v("ensy1-1", "Where were you yesterday?", "Où étais-tu hier ?", "Une jeune fille avec une planche de surf fait signe à Murzik.", "Écouter Where were you yesterday", p("l1-1")),
    v("ensy1-2", "I was at the beach.", "J'étais à la plage.", "Murzik avec un chapeau de paille sur le sable doré.", "Écouter I was at the beach", p("l1-2")),
    v("ensy1-3", "It was warm and sunny.", "Il faisait chaud et il y avait du soleil.", "Le soleil brille, Murzik plisse les yeux sous son chapeau de paille.", "Écouter It was warm and sunny", p("l1-3")),
    v("ensy1-4", "We were tired.", "Nous étions fatigués.", "Murzik et Tom dorment dans des transats.", "Écouter We were tired", p("l1-4")),
    v("ensy1-5", "The flight was long.", "Le vol était long.", "Murzik bâille devant le hublot de l'avion.", "Écouter The flight was long", p("l1-5")),
    v("ensy1-6", "It wasn't cold.", "Il ne faisait pas froid.", "Un thermomètre au soleil indique vingt-cinq.", "Écouter It wasn't cold", p("l1-6")),
    v("ensy1-7", "Were you in the water?", "Tu étais dans l'eau ?", "Chloé est trempée, sa planche sous le bras.", "Écouter Were you in the water", p("l1-7")),
  ],
  dialogue: {
    title: "Chloé",
    note: "Chloé est surfeuse et reine des tartes, une amie de Mme Hope. G'day! — le « salut » australien. Mate — « l'ami, le copain ».",
    lines: [
      line("chloe", "G'day, mate! I'm Chloe. Where were you yesterday? I waited for you!", "Salut, les amis ! Moi, c'est Chloé. Où étiez-vous hier ? Je vous ai attendus !"),
      line("murzik", "Sorry! We were on the plane. The flight was very long!", "Pardon ! On était dans l'avion. Le vol était très long !"),
      line("chloe", "And this morning?", "Et ce matin ?"),
      line("tom", "We were at the beach. We were very tired.", "On était à la plage. On était très fatigués."),
      line("chloe", "Were you in the water?", "Vous étiez dans l'eau ?"),
      line("murzik", "Me? No! I was on the sand. It was sunny. It wasn't bad!", "Moi ? Non ! J'étais sur le sable. Il y avait du soleil. C'était pas mal !"),
    ],
    gist: choice("ensy1-d1", "Où étaient Murzik et Tom hier ?", [
      ["Dans l'avion.", true],
      ["À la plage.", false],
      ["Chez Chloé.", false],
    ]),
  },
  grammar: [
    {
      title: "Was / were",
      paragraphs: [
        "Le passé de to be : I / he / she / it was, you / we / they were. En français, c'est l'imparfait : « j'étais », « nous étions ».",
        "Question : Where were you? Was it hot? Négation : It wasn't cold. We weren't at home. Attention : en anglais, UNE seule forme au passé là où le français hésite entre « j'étais » et « j'ai été ».",
      ],
      examples: [
        { ru: "I was in Toronto last week.", en: "La semaine dernière, j'étais à Toronto." },
        { ru: "Were they at the party? — Yes, they were.", en: "Ils étaient à la fête ? — Oui." },
      ],
    },
  ],
  tasks: [
    choice("ensy1-t1", "Comment dire « Nous étions à la plage » ?", [
      ["We were at the beach.", true],
      ["We was at the beach.", false],
      ["We are at the beach yesterday.", false],
    ], { skill: "grammar" }),
    listen("ensy1-t2", "Écoute. Où était-elle ?", "I was at home yesterday.", [
      ["À la maison.", true],
      ["À la plage.", false],
      ["Dans l'avion.", false],
    ]),
    match("ensy1-t3", "Relie les paires.", [
      ["I was", "j'étais"],
      ["we were", "nous étions"],
      ["it wasn't", "ce n'était pas"],
      ["yesterday", "hier"],
    ], { skill: "words" }),
    missing("ensy1-t4", "Quelle lettre manque ? (« hier »)", "yest", "rday", "e", ["e", "a", "i"]),
    speak("ensy1-t5", "Where were you yesterday?", "I was at work. It was a long day.", "J'étais au travail. La journée était longue.", { help: "Raconte à voix haute ta journée d'hier." }),
    choice("ensy1-t6", "Comment dire « Je vais avoir sept ans » ?", [
      ["I'm going to be seven.", true],
      ["I going to be seven.", false],
      ["I'm going be seven.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "deckchair",
    itemName: "Transat",
    itemNameRu: "Deckchair",
    ru: "Hooray! A deckchair!",
    en: "Hourra ! Un transat !",
    a11y: "Un transat en bois à rayures bleues et blanches, devant une fenêtre avec vue sur la mer.",
    image: p("deckchair"),
    steps: ["Chloé montre à Murzik la chambre près de la mer.", "Devant la fenêtre, un transat à rayures.", "« For watching the sea! » — « Pour regarder la mer ! »", "Murzik s'endort aussitôt dedans."],
    bridge: "Le soir, Chloé demande : « So what did you do today? »",
  },
};

const sydney2: Lesson = {
  id: "en-a1-sydney-2",
  level: "A1",
  cityId: "en-sydney",
  number: 2,
  title: "I visited… — J'ai visité…",
  minutes: 7,
  goals: ["Raconter le passé : les verbes réguliers en -ed", "Dire : yesterday, last week, ago", "Bien prononcer le -ed"],
  vocabNote: "Pour la plupart des verbes, le passé se fait avec -ed : walk → walked, visit → visited, watch → watched. Une seule forme pour tout le monde : I walked, she walked, they walked.",
  vocab: [
    v("ensy2-1", "We visited the Opera House.", "Nous avons visité l'Opéra.", "Murzik et Tom devant l'opéra blanc qui ressemble à des voiles.", "Écouter We visited the Opera House", p("l2-1")),
    v("ensy2-2", "I walked to the harbour.", "Je suis allé au port à pied.", "Murzik marche sur la promenade vers le port.", "Écouter I walked to the harbour", p("l2-2")),
    v("ensy2-3", "Tom watched the surfers.", "Tom a regardé les surfeurs.", "Tom, sur le sable, regarde les vagues et les surfeurs.", "Écouter Tom watched the surfers", p("l2-3")),
    v("ensy2-4", "We stayed there all day.", "On y est restés toute la journée.", "Le soleil se couche sur le port.", "Écouter We stayed there all day", p("l2-4")),
    v("ensy2-5", "I liked the koalas.", "J'ai aimé les koalas.", "Un koala serre une branche d'eucalyptus.", "Écouter I liked the koalas", p("l2-5")),
    v("ensy2-6", "last week", "la semaine dernière", "Une flèche sur le calendrier recule d'une semaine.", "Écouter last week", p("l2-6")),
    v("ensy2-7", "two days ago", "il y a deux jours", "Deux pages de calendrier en arrière.", "Écouter two days ago", p("l2-7")),
  ],
  dialogue: {
    title: "Premier jour à Sydney",
    note: "Opera House — le célèbre opéra de Sydney. Zoo — « le zoo ». Cute — « mignon ».",
    lines: [
      line("chloe", "So what did you do today?", "Alors, vous avez fait quoi aujourd'hui ?"),
      line("murzik", "We visited the Opera House! Then I walked to the harbour.", "On a visité l'Opéra ! Ensuite, je suis allé au port à pied."),
      line("tom", "And I watched the surfers at the beach. You were amazing, Chloe!", "Et moi, j'ai regardé les surfeurs à la plage. Tu étais incroyable, Chloé !"),
      line("chloe", "Thanks! Did you visit the zoo?", "Merci ! Et vous avez visité le zoo ?"),
      line("murzik", "Yes! We stayed there all afternoon. I liked the koalas! They're so cute!", "Oui ! On y est restés tout l'après-midi. J'ai adoré les koalas ! Ils sont trop mignons !"),
    ],
    gist: choice("ensy2-d1", "Qu'est-ce que Murzik a aimé au zoo ?", [
      ["Les koalas.", true],
      ["Les kangourous.", false],
      ["Les surfeurs.", false],
    ]),
  },
  grammar: [
    {
      title: "Le passé : -ed",
      paragraphs: [
        "Les verbes réguliers prennent -ed au passé : play → played, cook → cooked, like → liked (juste -d), stop → stopped. En français, c'est le passé composé : « j'ai joué », « tu as cuisiné ».",
        "Prononciation : après t et d, on prononce [id] : visited, wanted. Sinon, c'est juste [t] ou [d] : walked finit par [t], played par [d]. N'ajoute pas de syllabe partout !",
      ],
      examples: [
        { ru: "I cooked dinner last night.", en: "Hier soir, j'ai fait le dîner." },
        { ru: "She played tennis two days ago.", en: "Elle a joué au tennis il y a deux jours." },
      ],
    },
  ],
  tasks: [
    choice("ensy2-t1", "Comment dire « J'ai regardé un film » ?", [
      ["I watched a film.", true],
      ["I watch a film yesterday.", false],
      ["I watching a film.", false],
    ], { skill: "grammar" }),
    listen("ensy2-t2", "Écoute. Qu'a-t-il fait hier ?", "Yesterday I cooked dinner and watched TV.", [
      ["Il a fait le dîner et regardé la télé.", true],
      ["Il s'est promené sur la plage.", false],
      ["Il était au zoo.", false],
    ]),
    match("ensy2-t3", "Relie les paires.", [
      ["visit", "visited"],
      ["walk", "walked"],
      ["like", "liked"],
      ["stay", "stayed"],
    ], { skill: "words" }),
    missing("ensy2-t4", "Quelle lettre manque ? (« il y a »)", "a", "o", "g", ["g", "k", "q"]),
    speak("ensy2-t5", "What did you do last week?", "I visited my friends and watched a film.", "J'ai rendu visite à mes amis et j'ai regardé un film.", { help: "Raconte à voix haute ta semaine dernière." }),
    choice("ensy2-t6", "Comment dire « Il faisait très chaud » ?", [
      ["It was very hot.", true],
      ["It were very hot.", false],
      ["It is very hot yesterday.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "shells",
    itemName: "Coquillages",
    itemNameRu: "Shells",
    ru: "Hooray! Sea shells!",
    en: "Hourra ! Des coquillages !",
    a11y: "Un bocal en verre rempli de coquillages roses, blancs et rayés, sur le rebord de la fenêtre.",
    image: p("shells"),
    steps: ["Sur la plage, Murzik a ramassé des coquillages toute la soirée.", "Roses, blancs, rayés.", "Chloé lui a donné un bocal en verre.", "Il a maintenant un petit bout de mer chez lui."],
    bridge: "Le matin, Chloé demande à Tom : « Did you sleep well? »",
  },
};

const sydney3: Lesson = {
  id: "en-a1-sydney-3",
  level: "A1",
  cityId: "en-sydney",
  number: 3,
  title: "Did you…? — Est-ce que tu as… ?",
  minutes: 7,
  goals: ["Poser une question au passé : Did you…?", "Répondre : Yes, I did / No, I didn't", "Dire « je n'ai pas fait » : I didn't…"],
  vocabNote: "La question au passé se fait avec did, et le verbe reste SANS -ed : Did you sleep well? La négation — didn't : I didn't swim.",
  vocab: [
    v("ensy3-1", "Did you sleep well?", "Tu as bien dormi ?", "Chloé, un café à la main dans la cuisine, regarde Tom tout endormi.", "Écouter Did you sleep well", p("l3-1")),
    v("ensy3-2", "Yes, I did.", "Oui.", "Murzik s'étire, en pleine forme.", "Écouter Yes, I did", p("l3-2")),
    v("ensy3-3", "No, I didn't.", "Non.", "Tom avec des cernes sous les yeux.", "Écouter No, I didn't", p("l3-3")),
    v("ensy3-4", "I didn't sleep at all.", "Je n'ai pas dormi du tout.", "Tom devant la fenêtre, la nuit ; dehors, la lune.", "Écouter I didn't sleep at all", p("l3-4")),
    v("ensy3-5", "Did you hear the birds?", "Tu as entendu les oiseaux ?", "Sur une branche, un grand oiseau rieur : un kookaburra.", "Écouter Did you hear the birds", p("l3-5")),
    v("ensy3-6", "They laughed all night!", "Ils ont ri toute la nuit !", "Deux kookaburras sur une branche, le bec grand ouvert.", "Écouter They laughed all night", p("l3-6")),
    v("ensy3-7", "Did you have breakfast?", "Tu as pris ton petit-déjeuner ?", "Sur la table, des toasts avec de la pâte à tartiner et du thé.", "Écouter Did you have breakfast", p("l3-7")),
  ],
  dialogue: {
    title: "Les oiseaux qui rient",
    note: "Kookaburra — un oiseau australien dont le cri ressemble à un grand éclat de rire. Jet lag — le décalage horaire.",
    lines: [
      line("chloe", "Good morning! Did you sleep well?", "Bonjour ! Vous avez bien dormi ?"),
      line("murzik", "Yes, I did!", "Oui !"),
      line("tom", "No, I didn't. I didn't sleep at all. Jet lag!", "Non. Je n'ai pas dormi du tout. Le décalage horaire !"),
      line("chloe", "Did you hear the birds?", "Vous avez entendu les oiseaux ?"),
      line("tom", "Yes! They laughed all night! What are they?", "Oui ! Ils ont ri toute la nuit ! C'est quoi, ces oiseaux ?"),
      line("chloe", "Kookaburras! Did you have breakfast?", "Des kookaburras ! Et vous avez pris votre petit-déjeuner ?"),
      line("murzik", "No, we didn't. We're hungry!", "Non. On a faim !"),
    ],
    gist: choice("ensy3-d1", "Pourquoi Tom n'a-t-il pas dormi ?", [
      ["Les oiseaux riaient, et il souffre du décalage horaire.", true],
      ["Il faisait trop chaud.", false],
      ["Murzik faisait du bruit.", false],
    ]),
  },
  grammar: [
    {
      title: "Did / didn't",
      paragraphs: [
        "Question : Did + qui + verbe (sans -ed) : Did you sleep? Did she call? C'est le rôle de « est-ce que » en français. Réponse : Yes, I did. / No, I didn't.",
        "Négation : didn't + verbe : I didn't sleep. They didn't come. Did et didn't sont pareils pour tout le monde. Et surtout : avec did, le verbe revient à sa forme de base — jamais « Did you slept? » !",
      ],
      examples: [
        { ru: "Did you like the film? — Yes, I did.", en: "Tu as aimé le film ? — Oui." },
        { ru: "We didn't watch TV yesterday.", en: "Hier, on n'a pas regardé la télé." },
      ],
    },
  ],
  tasks: [
    choice("ensy3-t1", "Comment demander « Tu as appelé ta maman ? »", [
      ["Did you call your mum?", true],
      ["Did you called your mum?", false],
      ["You did call your mum?", false],
    ], { skill: "grammar" }),
    listen("ensy3-t2", "Écoute. A-t-elle pris son petit-déjeuner ?", "No, I didn't have breakfast.", [
      ["Non.", true],
      ["Oui.", false],
      ["Elle a pris son petit-déjeuner tard.", false],
    ]),
    match("ensy3-t3", "Relie les paires.", [
      ["Yes, I did.", "Oui. (au passé)"],
      ["No, I didn't.", "Non. (au passé)"],
      ["hear", "entendre"],
      ["laugh", "rire"],
    ], { skill: "words" }),
    missing("ensy3-t4", "Quelle lettre manque ? (« n'a pas fait »)", "did", "'t", "n", ["n", "m", "t"]),
    speak("ensy3-t5", "Did you sleep well?", "Yes, I did. Thank you!", "Oui, merci !", { help: "Réponds à voix haute." }),
    choice("ensy3-t6", "Comment dire « Nous avons visité le musée » ?", [
      ["We visited the museum.", true],
      ["We visit the museum yesterday.", false],
      ["We visiting the museum.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "surfboard",
    itemName: "Petite planche de surf",
    itemNameRu: "Little surfboard",
    ru: "Hooray! A little surfboard!",
    en: "Hourra ! Une petite planche de surf !",
    a11y: "Une petite planche de surf décorée de vagues et de soleils, contre le mur.",
    image: p("surfboard"),
    steps: ["Chloé sort une petite planche du garage.", "« My first board! I was six. » — « Ma première planche ! J'avais six ans. »", "Elle l'offre à Murzik.", "Murzik ne surfera pas avec. Mais elle est tellement belle !"],
    bridge: "Chloé invite tout le monde à un pique-nique et promet de raconter sa journée d'hier.",
  },
};

const sydney4: Lesson = {
  id: "en-a1-sydney-4",
  level: "A1",
  cityId: "en-sydney",
  number: 4,
  title: "I went to the beach — Je suis allé à la plage",
  minutes: 7,
  goals: ["Utiliser les verbes irréguliers : went, had, saw, made", "Raconter sa journée d'hier", "Retenir ate, got up, came"],
  vocabNote: "Certains verbes ont un passé irrégulier, il faut les apprendre par cœur : go → went, have → had, see → saw, make → made, eat → ate, get up → got up, come → came.",
  vocab: [
    v("ensy4-1", "I went to the beach.", "Je suis allé à la plage.", "Murzik court sur le sable vers la mer.", "Écouter I went to the beach", p("l4-1")),
    v("ensy4-2", "We had a picnic.", "On a fait un pique-nique.", "Un plaid sur l'herbe, un panier de provisions, vue sur le port.", "Écouter We had a picnic", p("l4-2")),
    v("ensy4-3", "I saw a whale!", "J'ai vu une baleine !", "Une énorme queue de baleine sort de l'eau.", "Écouter I saw a whale", p("l4-3")),
    v("ensy4-4", "Chloe made pies.", "Chloé a fait des tartes.", "Chloé sort du four des petites tartes dorées.", "Écouter Chloe made pies", p("l4-4")),
    v("ensy4-5", "We ate a lot.", "On a beaucoup mangé.", "Des assiettes vides et des miettes sur le plaid.", "Écouter We ate a lot", p("l4-5")),
    v("ensy4-6", "I got up at six.", "Je me suis levé à six heures.", "Un réveil sur six heures, l'aube derrière la fenêtre.", "Écouter I got up at six", p("l4-6")),
    v("ensy4-7", "My friends came too.", "Mes amis sont venus aussi.", "Les amis de Chloé s'approchent du plaid avec leurs planches.", "Écouter My friends came too", p("l4-7")),
  ],
  dialogue: {
    title: "Le pique-nique",
    note: "Meat pie — un petit pâté à la viande australien. Waves — « les vagues ».",
    lines: [
      line("chloe", "Yesterday I got up at six and went to the beach. The waves were great!", "Hier, je me suis levée à six heures et je suis allée à la plage. Les vagues étaient super !"),
      line("murzik", "Did you see a whale?", "Tu as vu une baleine ?"),
      line("chloe", "Yes, I did! I saw a whale near the beach!", "Oui ! J'ai vu une baleine tout près de la plage !"),
      line("tom", "Wow! And then?", "Waouh ! Et ensuite ?"),
      line("chloe", "Then I made meat pies. My friends came and we had a picnic.", "Ensuite, j'ai fait des petits pâtés à la viande. Mes amis sont venus et on a fait un pique-nique."),
      line("murzik", "Did you eat all the pies?", "Vous avez tout mangé ?"),
      line("chloe", "No! We ate a lot, but these are for you!", "Non ! On en a mangé beaucoup, mais ceux-là sont pour vous !"),
    ],
    gist: choice("ensy4-d1", "Qu'est-ce que Chloé a vu près de la plage ?", [
      ["Une baleine.", true],
      ["Un requin.", false],
      ["Un koala.", false],
    ]),
  },
  grammar: [
    {
      title: "Les verbes irréguliers",
      paragraphs: [
        "Les plus fréquents : go — went, have — had, see — saw, make — made, eat — ate, come — came, get — got, do — did, take — took, buy — bought. Comme les participes passés français irréguliers (« j'ai fait », « j'ai pris »), il faut les mémoriser.",
        "Dans les questions et les négations, c'est toujours did + forme de base : Did you go? — Yes, I did. I went to the beach. I didn't see a whale. Le -ed ou la forme irrégulière n'apparaît qu'une fois !",
      ],
      examples: [
        { ru: "We went to the zoo and saw koalas.", en: "On est allés au zoo et on a vu des koalas." },
        { ru: "Did you buy a present? — Yes, I bought a book.", en: "Tu as acheté un cadeau ? — Oui, j'ai acheté un livre." },
      ],
    },
  ],
  tasks: [
    choice("ensy4-t1", "Comment dire « Je suis allé au magasin » ?", [
      ["I went to the shop.", true],
      ["I goed to the shop.", false],
      ["I go to the shop yesterday.", false],
    ], { skill: "grammar" }),
    listen("ensy4-t2", "Écoute. Qu'a-t-elle fait ?", "I had breakfast and went to work.", [
      ["Elle a pris son petit-déjeuner et est allée au travail.", true],
      ["Elle a vu une baleine.", false],
      ["Elle a fait des tartes.", false],
    ]),
    match("ensy4-t3", "Relie les paires.", [
      ["go", "went"],
      ["see", "saw"],
      ["eat", "ate"],
      ["make", "made"],
    ], { skill: "words" }),
    spell("ensy4-t4", "Assemble les lettres du mot « baleine ».", "whale"),
    speak("ensy4-t5", "What did you do yesterday?", "I got up at seven, had breakfast and went to work.", "Je me suis levé à sept heures, j'ai pris mon petit-déjeuner et je suis allé au travail.", { help: "Raconte à voix haute ta journée d'hier." }),
    choice("ensy4-t6", "Comment répondre « Non » à la question Did you sleep well?", [
      ["No, I didn't.", true],
      ["No, I don't.", false],
      ["No, I wasn't sleep.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "picnic-basket",
    itemName: "Panier de pique-nique",
    itemNameRu: "Picnic basket",
    ru: "Hooray! A picnic basket!",
    en: "Hourra ! Un panier de pique-nique !",
    a11y: "Un grand panier de pique-nique en osier à doublure à carreaux, avec des assiettes et des tasses sanglées à l'intérieur.",
    image: p("picnic-basket"),
    steps: ["Après le pique-nique, Chloé donne son panier à Murzik.", "À l'intérieur : des assiettes et des tasses sanglées.", "« For picnics with your guests! » — « Pour les pique-niques avec tes invités ! »", "Murzik le pose près de la porte."],
    bridge: "Le soir, Murzik écrit sa journée dans son journal — dans l'ordre.",
  },
};

const sydney5: Lesson = {
  id: "en-a1-sydney-5",
  level: "A1",
  cityId: "en-sydney",
  number: 5,
  title: "First, then, finally — D'abord, ensuite, enfin",
  minutes: 7,
  goals: ["Raconter dans l'ordre : first, then, after that, finally", "Relier les événements : and, but", "Écrire un petit récit de sa journée"],
  vocabNote: "First — d'abord, then — ensuite, after that — après ça, finally — enfin. Ces mots se placent au début de la phrase.",
  vocab: [
    v("ensy5-1", "First, I got up.", "D'abord, je me suis levé.", "Murzik sort du lit.", "Écouter First, I got up", p("l5-1")),
    v("ensy5-2", "Then I had a shower.", "Ensuite, j'ai pris une douche.", "Murzik, à contrecœur, sous la douche, les poils en bataille.", "Écouter Then I had a shower", p("l5-2")),
    v("ensy5-3", "After that, we went to the market.", "Après ça, on est allés au marché.", "Murzik et Chloé au marché aux fruits.", "Écouter After that, we went to the market", p("l5-3")),
    v("ensy5-4", "Finally, we came home.", "Enfin, on est rentrés à la maison.", "Murzik avec des sacs devant la porte de la maison.", "Écouter Finally, we came home", p("l5-4")),
    v("ensy5-5", "It was a great day.", "C'était une super journée.", "Murzik écrit dans son journal en souriant.", "Écouter It was a great day", p("l5-5")),
    v("ensy5-6", "my diary", "mon journal", "Un gros journal de voyage avec des autocollants de villes.", "Écouter my diary", p("l5-6")),
    v("ensy5-7", "I wrote in my diary.", "J'ai écrit dans mon journal.", "Murzik écrit avec un stylo-plume.", "Écouter I wrote in my diary", p("l5-7")),
  ],
  dialogue: {
    title: "Le journal de Murzik",
    note: "Write — wrote (au passé). Mango — la mangue.",
    lines: [
      line("chloe", "Murzik, what are you writing?", "Murzik, qu'est-ce que tu écris ?"),
      line("murzik", "My diary. Listen: \"First, I got up at seven. Then I had a shower.\"", "Mon journal. Écoute : « D'abord, je me suis levé à sept heures. Ensuite, j'ai pris une douche. »"),
      line("chloe", "A shower? A cat?", "Une douche ? Un chat ?"),
      line("murzik", "Yes, but I didn't like it! \"After that, we went to the market and bought mangoes.\"", "Oui, mais je n'ai pas aimé ! « Après ça, on est allés au marché et on a acheté des mangues. »"),
      line("tom", "And finally?", "Et pour finir ?"),
      line("murzik", "\"Finally, we came home. It was a great day!\"", "« Enfin, on est rentrés à la maison. C'était une super journée ! »"),
    ],
    gist: choice("ensy5-d1", "Qu'ont-ils acheté au marché ?", [
      ["Des mangues.", true],
      ["Des petits pâtés.", false],
      ["Des coquillages.", false],
    ]),
  },
  grammar: [
    {
      title: "Raconter dans l'ordre",
      paragraphs: [
        "First, … Then … After that, … Finally, … — avec ces mots, n'importe quel récit devient clair et agréable. Comme en français : « d'abord… ensuite… après ça… enfin… ».",
        "And — « et », but — « mais », so — « donc » : It was hot, so we went to the beach. I liked the market, but I didn't like the shower.",
      ],
      examples: [
        { ru: "First, we had lunch. Then we went to the beach.", en: "D'abord, on a déjeuné. Ensuite, on est allés à la plage." },
        { ru: "It was cold, so we stayed at home.", en: "Il faisait froid, alors on est restés à la maison." },
      ],
    },
  ],
  tasks: [
    choice("ensy5-t1", "Quel mot veut dire « enfin, pour finir » ?", [
      ["finally", true],
      ["first", false],
      ["then", false],
    ], { skill: "grammar" }),
    listen("ensy5-t2", "Écoute. Qu'y a-t-il eu d'abord ?", "First, we had breakfast. Then we went to the zoo.", [
      ["Le petit-déjeuner.", true],
      ["Le zoo.", false],
      ["La plage.", false],
    ]),
    match("ensy5-t3", "Relie les paires.", [
      ["first", "d'abord"],
      ["then", "ensuite"],
      ["after that", "après ça"],
      ["finally", "enfin"],
    ], { skill: "words" }),
    missing("ensy5-t4", "Quelle lettre manque ? (« journal »)", "dia", "y", "r", ["r", "l", "w"]),
    speak("ensy5-t5", "Tell me about your morning.", "First, I got up. Then I had breakfast. After that, I went to work.", "D'abord, je me suis levé. Ensuite, j'ai pris mon petit-déjeuner. Après ça, je suis allé au travail.", { help: "Raconte à voix haute ta matinée, dans l'ordre." }),
    choice("ensy5-t6", "Comment dire « J'ai vu une baleine » ?", [
      ["I saw a whale.", true],
      ["I seed a whale.", false],
      ["I see a whale yesterday.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "beach-towel",
    itemName: "Serviette de plage",
    itemNameRu: "Beach towel",
    ru: "Hooray! A beach towel!",
    en: "Hourra ! Une serviette de plage !",
    a11y: "Une grande serviette de plage à rayures jaunes et bleues sèche sur la rampe du balcon.",
    image: p("beach-towel"),
    steps: ["Après la douche, Murzik est trempé et malheureux.", "Chloé l'enveloppe dans une énorme serviette de plage.", "« It's yours now! » — « Elle est à toi, maintenant ! »", "Murzik sort le nez de la serviette comme d'un terrier."],
    bridge: "Le soir, Chloé demande : « Tell me your whole journey, Murzik! »",
  },
};

const sydney6: Lesson = {
  id: "en-a1-sydney-6",
  level: "A1",
  cityId: "en-sydney",
  number: 6,
  title: "My journey — Mon voyage",
  minutes: 7,
  goals: ["Raconter un voyage au passé", "Dire qui on a rencontré et ce qu'on a appris", "Dire ce qu'on a préféré"],
  vocabNote: "Meet → met (rencontrer), learn → learned (apprendre), take → took (prendre), find → found (trouver). The best — « le meilleur », best — « le plus » : I liked it best.",
  vocab: [
    v("ensy6-1", "I started in London.", "J'ai commencé à Londres.", "Souvenir : la gare de Londres, Mme Hope fait signe.", "Écouter I started in London", p("l6-1")),
    v("ensy6-2", "I met lots of people.", "J'ai rencontré plein de gens.", "Un collage : Priya, la famille McDonald, Seán, Marcus…", "Écouter I met lots of people", p("l6-2")),
    v("ensy6-3", "I learned to make coffee.", "J'ai appris à faire le café.", "Souvenir : Murzik dessine un cœur sur un café à San Francisco.", "Écouter I learned to make coffee", p("l6-3")),
    v("ensy6-4", "I found twelve pages.", "J'ai trouvé douze pages.", "Le livre de recettes, les pages collées l'une après l'autre.", "Écouter I found twelve pages", p("l6-4")),
    v("ensy6-5", "Tom took a thousand photos.", "Tom a pris mille photos.", "Une montagne de photos sur la table.", "Écouter Tom took a thousand photos", p("l6-5")),
    v("ensy6-6", "What did you like best?", "Qu'est-ce que tu as préféré ?", "Chloé, la joue appuyée sur la main, écoute.", "Écouter What did you like best", p("l6-6")),
    v("ensy6-7", "I liked the people best.", "Ce que j'ai préféré, ce sont les gens.", "Murzik met une patte sur son cœur.", "Écouter I liked the people best", p("l6-7")),
  ],
  dialogue: {
    title: "Toute l'histoire",
    note: "Journey — « le voyage ». Thousand — « mille ».",
    lines: [
      line("chloe", "Tell me your whole journey, Murzik!", "Raconte-moi tout ton voyage, Murzik !"),
      line("murzik", "I started in London. Mrs Hope gave me her old recipe book.", "J'ai commencé à Londres. Mme Hope m'a donné son vieux livre de recettes."),
      line("murzik", "Then we went to Oxford, Bath, Edinburgh, Dublin… I met lots of people!", "Ensuite, on est allés à Oxford, Bath, Édimbourg, Dublin… J'ai rencontré tellement de gens !"),
      line("tom", "And I took a thousand photos!", "Et moi, j'ai pris mille photos !"),
      line("murzik", "In America I learned to make coffee. And I found twelve pages!", "En Amérique, j'ai appris à faire le café. Et j'ai trouvé douze pages !"),
      line("chloe", "What did you like best?", "Et qu'est-ce que tu as préféré ?"),
      line("murzik", "I liked the people best.", "Ce que j'ai préféré, ce sont les gens."),
    ],
    gist: choice("ensy6-d1", "Qu'est-ce que Murzik a préféré ?", [
      ["Les gens.", true],
      ["Le café.", false],
      ["La plage.", false],
    ]),
  },
  grammar: [
    {
      title: "Raconter un voyage",
      paragraphs: [
        "Le passé : I went, I saw, I met, I learned, I found, I took. Pour les autres : Tom took photos. Mrs Hope gave me a book (give → gave).",
        "Ce qu'on a préféré : What did you like best? — I liked … best. The best day was… — « Le meilleur jour, c'était… ». Attention : « mille » en anglais — a thousand, et il ne prend jamais de -s : two thousand.",
      ],
      examples: [
        { ru: "Last year I went to Spain. I saw the sea and made new friends.", en: "L'année dernière, je suis allé en Espagne. J'ai vu la mer et je me suis fait de nouveaux amis." },
        { ru: "The best day was my birthday.", en: "Le meilleur jour, c'était mon anniversaire." },
      ],
    },
  ],
  tasks: [
    choice("ensy6-t1", "Comment dire « J'ai rencontré un ami » ?", [
      ["I met a friend.", true],
      ["I meeted a friend.", false],
      ["I meet a friend yesterday.", false],
    ], { skill: "grammar" }),
    listen("ensy6-t2", "Écoute. Qu'a-t-il trouvé ?", "I found a little cat in the park.", [
      ["Un chaton dans le parc.", true],
      ["Des clés sur la plage.", false],
      ["Un livre dans un café.", false],
    ]),
    match("ensy6-t3", "Relie les paires.", [
      ["meet", "met"],
      ["find", "found"],
      ["take", "took"],
      ["give", "gave"],
    ], { skill: "words" }),
    spell("ensy6-t4", "Assemble les lettres du mot « voyage ».", "journey"),
    speak("ensy6-t5", "Tell me about a trip.", "Last summer I went to the sea. I swam and I made new friends.", "L'été dernier, je suis allé à la mer. J'ai nagé et je me suis fait de nouveaux amis.", { help: "Raconte à voix haute un voyage." }),
    choice("ensy6-t6", "Quel mot veut dire « d'abord » ?", [
      ["first", true],
      ["finally", false],
      ["after that", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "boomerang",
    itemName: "Boomerang décoré",
    itemNameRu: "Boomerang",
    ru: "Hooray! A boomerang!",
    en: "Hourra ! Un boomerang !",
    a11y: "Un boomerang en bois décoré de points et de motifs, accroché au mur.",
    image: p("boomerang"),
    steps: ["Chloé offre à Murzik un boomerang décoré.", "« A boomerang always comes back. Like you, one day! » — « Un boomerang revient toujours. Comme toi, un jour ! »", "Murzik l'accroche au mur.", "Il reviendra, c'est sûr."],
    bridge: "Avant le départ, Chloé ouvre le four : « And now — the most important thing ».",
  },
};

const sydney7: Lesson = {
  id: "en-a1-sydney-7",
  level: "A1",
  cityId: "en-sydney",
  number: 7,
  title: "Goodbye, Sydney! — Au revoir, Sydney !",
  minutes: 8,
  goals: ["Raconter le passé avec was / were et -ed", "Poser des questions sur le passé", "Revoir tous les mots de Sydney"],
  vocabNote: "On révise : was / were, -ed, went / saw / had / made, Did you…?, first / then / finally.",
  vocab: [
    v("ensy7-1", "the most important thing", "la chose la plus importante", "Chloé ouvre le four, une odeur de tartes s'en échappe.", "Écouter the most important thing", p("l7-1")),
    v("ensy7-2", "the recipe for meat pies", "la recette des petits pâtés à la viande", "Une page avec le dessin d'un pâté doré.", "Écouter the recipe for meat pies", p("l7-2")),
    v("ensy7-3", "a sun umbrella", "un parasol", "Un grand parasol à rayures pour la terrasse.", "Écouter a sun umbrella", p("l7-3")),
    v("ensy7-4", "for your terrace", "pour ta terrasse", "Une petite table sous un parasol sur la terrasse d'un café.", "Écouter for your terrace", p("l7-4")),
    v("ensy7-5", "The last page is in New Zealand.", "La dernière page est en Nouvelle-Zélande.", "Chloé montre sur la carte les îles à côté de l'Australie.", "Écouter The last page is in New Zealand", p("l7-5")),
    v("ensy7-6", "We had a great time.", "On a passé un super moment.", "Murzik et Tom font signe à Chloé sur la plage.", "Écouter We had a great time", p("l7-6")),
    v("ensy7-7", "Catch you later!", "À plus !", "Chloé, sur sa planche, fait signe depuis une vague.", "Écouter Catch you later", p("l7-7")),
  ],
  dialogue: {
    title: "La treizième page",
    note: "Catch you later! — le « à plus ! » australien. Grace — la plus vieille amie de Mme Hope.",
    lines: [
      line("chloe", "And now — the most important thing. This is from Mrs Hope's book.", "Et maintenant — le plus important. Ceci vient du livre de Mme Hope."),
      line("murzik", "The recipe for meat pies! Page thirteen!", "La recette des petits pâtés à la viande ! La treizième page !"),
      line("chloe", "And this sun umbrella is for your terrace. Cafés need sun!", "Et ce parasol est pour ta terrasse. Un café a besoin de soleil !"),
      line("tom", "Thank you, Chloe! We had a great time. Where is the last page?", "Merci, Chloé ! On a passé un super moment. Et où est la dernière page ?"),
      line("chloe", "The last page is in New Zealand. In Wellington, with Grace. She's Mrs Hope's best friend.", "La dernière page est en Nouvelle-Zélande. À Wellington, chez Grace. C'est la meilleure amie de Mme Hope."),
      line("murzik", "The last page! Goodbye, Chloe!", "La dernière page ! Au revoir, Chloé !"),
      line("chloe", "Catch you later, mate!", "À plus, les amis !"),
    ],
    gist: choice("ensy7-d1", "Où est la dernière page ?", [
      ["À Wellington, chez Grace.", true],
      ["À Sydney, chez Chloé.", false],
      ["À Londres, chez Mme Hope.", false],
    ]),
  },
  grammar: [
    {
      title: "Le passé : tout ensemble",
      paragraphs: [
        "Était : I was, we were. A fait : I walked, I visited (-ed), I went, I saw, I had (formes irrégulières).",
        "Question : Did you…? — Yes, I did. / No, I didn't. L'ordre du récit : First… Then… After that… Finally…",
      ],
      examples: [
        { ru: "Yesterday was great. First, we went to the beach. Then we had a picnic.", en: "Hier, c'était super. D'abord, on est allés à la plage. Ensuite, on a fait un pique-nique." },
        { ru: "Did you see the Opera House? — Yes, we did. It was beautiful.", en: "Vous avez vu l'Opéra ? — Oui. C'était magnifique." },
      ],
    },
  ],
  tasks: [
    listen("ensy7-t1", "Examen d'écoute. Que raconte Murzik ?", "Yesterday was great. First, I went to the beach. Then I saw the surfers. Finally, I had a picnic with Chloe.", [
      ["D'abord la plage, ensuite les surfeurs, et pour finir un pique-nique avec Chloé.", true],
      ["D'abord un pique-nique, ensuite le zoo, et pour finir la plage.", false],
      ["Il est resté à la maison toute la journée.", false],
    ]),
    choice("ensy7-t2", "Choisis la bonne phrase.", [
      ["We went to the zoo and saw koalas.", true],
      ["We goed to the zoo and seed koalas.", false],
      ["We go to the zoo and see koalas yesterday.", false],
    ], { skill: "grammar" }),
    match("ensy7-t3", "Relie les paires.", [
      ["terrace", "terrasse"],
      ["the last page", "la dernière page"],
      ["We had a great time.", "On a passé un super moment."],
      ["Catch you later!", "À plus !"],
    ], { skill: "words" }),
    spell("ensy7-t4", "Assemble les lettres du mot « dernier ».", "last"),
    speak("ensy7-t5", "What did you do last weekend?", "First, I went to the park. Then I met my friends. It was a great day!", "D'abord, je suis allé au parc. Ensuite, j'ai retrouvé mes amis. C'était une super journée !", { help: "Raconte à voix haute ton week-end dernier, dans l'ordre." }),
    script("ensy7-t6", "Souviens-toi de tout Sydney. Termine les conversations.", [
      { speaker: "Chloé", text: "Where were you yesterday?" },
      { speaker: "Toi", answer: "I was at the beach.", options: ["I was at the beach.", "I were at the beach.", "I am at the beach yesterday."] },
      { speaker: "Chloé", text: "Did you swim?" },
      { speaker: "Toi", answer: "No, I didn't. It was too cold.", options: ["No, I didn't. It was too cold.", "No, I don't. It is too cold.", "No, I didn't swam."] },
      { speaker: "Chloé", text: "What did you do?" },
      { speaker: "Toi", answer: "I had a picnic and saw the surfers!", options: ["I had a picnic and saw the surfers!", "I have a picnic and see the surfers!", "I haved a picnic and seed the surfers!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "parasol",
    itemName: "Parasol pour la terrasse",
    itemNameRu: "Sun umbrella",
    ru: "Hooray! A sun umbrella!",
    en: "Hourra ! Un parasol !",
    a11y: "Un grand parasol plié à rayures jaunes et blanches, avec un manche en bois.",
    image: p("parasol"),
    steps: ["Chloé apporte un grand parasol à rayures.", "« For sunny days on your terrace! » — « Pour les jours de soleil sur ta terrasse ! »", "Murzik l'ouvre — et tout un coin d'ombre apparaît.", "Il le replie soigneusement et l'emporte."],
    bridge: "La dernière page est à Wellington, chez Grace.",
  },
};

const story: CityStory = {
  home: {
    name: "Chambre près de la mer",
    nameRu: "Murzik's room in Sydney",
    image: p("home"),
    a11y: "Une chambre claire et vide avec un balcon. Derrière la fenêtre, la mer bleue, la plage et des surfeurs sur les vagues. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "parasol",
  welcomeRu: "Hello, Sydney!",
  welcomeEn: "Salut, Sydney !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom à Sydney : l'opéra blanc qui ressemble à des voiles, la baie bleue, un grand pont.",
  departureImage: p("departure"),
  departureA11y: "Chloé, avec sa planche de surf, fait des signes d'au revoir sur la plage.",
  finale: [
    {
      image: p("page"),
      a11y: "Gros plan : la treizième page du livre de recettes, la recette des petits pâtés à la viande. Dans la marge, un mot écrit à la main.",
      lines: [
        { en: "Murzik colle la treizième page. Dans la marge, un mot de Mme Hope :" },
        { ru: "At my café, I always had time to listen to a story.", en: "Dans mon café, j'avais toujours le temps d'écouter une histoire." },
        { en: "Murzik se souvient comme Chloé a écouté toute son histoire jusqu'au bout." },
      ],
    },
    {
      image: p("parasol"),
      a11y: "Murzik fait le tour de sa chambre près de la mer, qu'il a meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambre à Sydney. Tom la photographie pour son magazine." },
        { en: "Pour son futur café, il emporte le parasol." },
        { en: "Plus qu'une page. La toute dernière." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, Tom fête ça avec lui.",
      lines: [
        { ru: "Sydney complete!", en: "Sydney terminé !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Chloé fait des signes d'au revoir.",
      lines: [
        { ru: "Goodbye, Chloe!", en: "Au revoir, Chloé !" },
        { ru: "Next stop: Wellington!", en: "Prochain arrêt : Wellington !" },
      ],
    },
    {
      image: img.flight,
      a11y: "Un petit avion survole la mer vers les montagnes vertes de Nouvelle-Zélande.",
      lines: [{ ru: "Sydney → Wellington", en: "Sydney → Wellington" }],
    },
    {
      image: pic("en/wellington/arrival"),
      a11y: "Murzik et Tom à Wellington : des maisons en bois colorées sur des collines vertes au-dessus du port, beaucoup de vent.",
      lines: [
        { ru: "Hello, Wellington!", en: "Salut, Wellington !" },
        { ru: "The last city!", en: "La dernière ville !" },
      ],
    },
  ],
};

export const enSydneyFr = {
  id: "en-sydney",
  name: "Sydney",
  nameEn: "Sydney",
  lessons: [sydney1, sydney2, sydney3, sydney4, sydney5, sydney6, sydney7],
  story,
};
