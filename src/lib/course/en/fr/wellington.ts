import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/**
 * French version of ../wellington.ts.
 * Same story, same English phrases and pictures, but grammar, explanations
 * and translations are written for French-speaking learners.
 * In lesson data `ru` = English text, `en` = French translation.
 */

const p = (name: string) => pic(`en/wellington/${name}`);

const wellington1: Lesson = {
  id: "en-a1-wellington-1",
  level: "A1",
  cityId: "en-wellington",
  number: 1,
  title: "Nice to meet you, Grace — Ravi de te connaître, Grace",
  minutes: 7,
  goals: ["Revoir la présentation et parler de soi", "Poser des questions sur la vie des autres", "Dire depuis quand on se connaît"],
  vocabNote: "On révise to be, have got et le présent simple : I'm…, I've got…, I live…, I work… Best friend — « meilleur ami / meilleure amie ».",
  vocab: [
    v("enwe1-1", "You must be Murzik!", "Tu dois être Murzik !", "Une dame âgée aux boucles grises et au pull vif ouvre la porte.", "Écouter You must be Murzik", p("l1-1")),
    v("enwe1-2", "I've heard a lot about you.", "J'ai beaucoup entendu parler de toi.", "Grace tient une lettre avec un timbre de Londres.", "Écouter I've heard a lot about you", p("l1-2")),
    v("enwe1-3", "Mrs Hope is my best friend.", "Mme Hope est ma meilleure amie.", "Une vieille photo : deux jeunes filles en tablier qui rient.", "Écouter Mrs Hope is my best friend", p("l1-3")),
    v("enwe1-4", "We met fifty years ago.", "On s'est connues il y a cinquante ans.", "Une photo jaunie au bord de la mer.", "Écouter We met fifty years ago", p("l1-4")),
    v("enwe1-5", "I live by the sea.", "J'habite au bord de la mer.", "Une maison en bois sur une colline au-dessus du port.", "Écouter I live by the sea", p("l1-5")),
    v("enwe1-6", "I've got three grandchildren.", "J'ai trois petits-enfants.", "Des photos de trois enfants souriants sur le frigo.", "Écouter I've got three grandchildren", p("l1-6")),
    v("enwe1-7", "Come in and sit down!", "Entrez et asseyez-vous !", "Grace montre un canapé avec des coussins en tricot.", "Écouter Come in and sit down", p("l1-7")),
  ],
  dialogue: {
    title: "Grace",
    note: "Grace est la plus vieille amie de Mme Hope. C'est elle qui a la dernière page du livre. Must be — « doit être, sans doute ».",
    lines: [
      line("grace", "Hello! You must be Murzik! And you're Tom! I've heard a lot about you.", "Bonjour ! Tu dois être Murzik ! Et toi, Tom ! J'ai beaucoup entendu parler de vous."),
      line("murzik", "Hello! Nice to meet you, Grace.", "Bonjour ! Ravi de vous connaître, Grace."),
      line("grace", "Nice to meet you too. Mrs Hope is my best friend. We met fifty years ago!", "Moi aussi, ravie. Mme Hope est ma meilleure amie. On s'est connues il y a cinquante ans !"),
      line("tom", "Fifty years! Do you live here?", "Cinquante ans ! Vous habitez ici ?"),
      line("grace", "Yes, I live by the sea. I've got three grandchildren. Come in and sit down!", "Oui, j'habite au bord de la mer. J'ai trois petits-enfants. Entrez et asseyez-vous !"),
    ],
    gist: choice("enwe1-d1", "Depuis combien de temps Grace et Mme Hope sont-elles amies ?", [
      ["Cinquante ans.", true],
      ["Quinze ans.", false],
      ["Cinq ans.", false],
    ]),
  },
  grammar: [
    {
      title: "Révision : parler de soi et des autres",
      paragraphs: [
        "To be : I'm Grace. She's my friend. Have got : I've got three grandchildren. Présent simple : I live by the sea. She lives in London.",
        "Questions : Where are you from? Have you got children? Do you live here? Does she work? Rappel : « j'habite » se dit I live (sans to be !), et avec he/she le verbe prend -s : she lives.",
      ],
      examples: [
        { ru: "I'm from Russia. I live in a big city. I've got a sister.", en: "Je viens de Russie. J'habite dans une grande ville. J'ai une sœur." },
        { ru: "Does Grace live by the sea? — Yes, she does.", en: "Grace habite au bord de la mer ? — Oui." },
      ],
    },
  ],
  tasks: [
    choice("enwe1-t1", "Choisis la bonne phrase.", [
      ["She lives by the sea.", true],
      ["She live by the sea.", false],
      ["She is live by the sea.", false],
    ], { skill: "grammar" }),
    listen("enwe1-t2", "Écoute. Que raconte Grace sur elle ?", "I'm seventy-five. I've got three grandchildren. I live by the sea.", [
      ["Elle a 75 ans, trois petits-enfants, elle habite au bord de la mer.", true],
      ["Elle a 57 ans, trois fils, elle habite à Londres.", false],
      ["Elle a 75 ans, pas de petits-enfants, elle habite à la montagne.", false],
    ]),
    match("enwe1-t3", "Relie les paires.", [
      ["best friend", "meilleure amie"],
      ["grandchildren", "petits-enfants"],
      ["by the sea", "au bord de la mer"],
      ["ago", "il y a"],
    ], { skill: "words" }),
    missing("enwe1-t4", "Quelle lettre manque ? (« meilleur »)", "b", "st", "e", ["e", "u", "i"]),
    speak("enwe1-t5", "Tell me about yourself.", "My name is Alex. I'm from Russia. I live in a big city. I've got a brother.", "Je m'appelle Alex. Je viens de Russie. J'habite dans une grande ville. J'ai un frère.", { help: "Présente-toi à voix haute : nom, pays, ville, famille." }),
    choice("enwe1-t6", "Comment dire « On a passé un super moment » ?", [
      ["We had a great time.", true],
      ["We have a great time yesterday.", false],
      ["We haved a great time.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "chair-cushions",
    itemName: "Coussins de chaise",
    itemNameRu: "Chair cushions",
    ru: "Hooray! Chair cushions!",
    en: "Hourra ! Des coussins de chaise !",
    a11y: "Une pile de coussins de chaise en tricot, de toutes les couleurs de l'arc-en-ciel, sur un fauteuil.",
    image: p("chair-cushions"),
    steps: ["Grace montre sa chambre à Murzik.", "Dans un coin, une montagne de coussins en tricot.", "« I knit one every week. Take some for your café! » — « J'en tricote un par semaine. Prends-en pour ton café ! »", "Murzik choisit les plus colorés."],
    bridge: "Le matin, le vent souffle si fort dehors que la maison grince.",
  },
};

const wellington2: Lesson = {
  id: "en-a1-wellington-2",
  level: "A1",
  cityId: "en-wellington",
  number: 2,
  title: "Windy Wellington — Wellington la venteuse",
  minutes: 7,
  goals: ["Revoir la météo", "Revoir les vêtements et le present continuous", "Donner un conseil : You should…"],
  vocabNote: "On dit que Wellington est la capitale la plus venteuse du monde. On révise : It's windy. I'm wearing… You should take…",
  vocab: [
    v("enwe2-1", "It's so windy today!", "Il y a tellement de vent aujourd'hui !", "Le foulard de Murzik flotte, lui se tient à un lampadaire.", "Écouter It's so windy today", p("l2-1")),
    v("enwe2-2", "Hold on to your hat!", "Tiens ton chapeau !", "La casquette de Murzik s'envole dans le ciel.", "Écouter Hold on to your hat", p("l2-2")),
    v("enwe2-3", "What are you wearing?", "Qu'est-ce que tu portes ?", "Grace inspecte Murzik sur le pas de la porte.", "Écouter What are you wearing", p("l2-3")),
    v("enwe2-4", "You should take a warm jacket.", "Tu devrais prendre une veste chaude.", "Grace tend une veste à Murzik.", "Écouter You should take a warm jacket", p("l2-4")),
    v("enwe2-5", "It's raining and it's sunny!", "Il pleut et il fait soleil !", "Un arc-en-ciel au-dessus du port, une pluie de soleil.", "Écouter It's raining and it's sunny", p("l2-5")),
    v("enwe2-6", "Four seasons in one day.", "Quatre saisons en un jour.", "Le ciel divisé en quatre : soleil, pluie, vent, nuages.", "Écouter Four seasons in one day", p("l2-6")),
    v("enwe2-7", "Look, a rainbow!", "Regarde, un arc-en-ciel !", "Un arc-en-ciel lumineux au-dessus des collines et du port.", "Écouter Look, a rainbow", p("l2-7")),
  ],
  dialogue: {
    title: "Le vent",
    note: "Hold on to — « tenir, s'accrocher à ». Rainbow — « l'arc-en-ciel ».",
    lines: [
      line("murzik", "It's so windy today! My cap!", "Il y a tellement de vent aujourd'hui ! Ma casquette !"),
      line("grace", "Hold on to your hat, Murzik! What are you wearing? Only a scarf?", "Tiens ton chapeau, Murzik ! Qu'est-ce que tu portes ? Juste un foulard ?"),
      line("murzik", "And my cap… but now it's flying away!", "Et ma casquette… mais elle s'envole déjà !"),
      line("grace", "You should take a warm jacket. In Wellington we have four seasons in one day.", "Tu devrais prendre une veste chaude. À Wellington, on a quatre saisons en un jour."),
      line("tom", "Now it's raining and sunny! Look, a rainbow!", "Et là, il pleut et il fait soleil ! Regardez, un arc-en-ciel !"),
    ],
    gist: choice("enwe2-d1", "Que conseille Grace à Murzik ?", [
      ["De prendre une veste chaude.", true],
      ["De rester à la maison.", false],
      ["De mettre des bottes.", false],
    ]),
  },
  grammar: [
    {
      title: "Révision : météo, vêtements, conseils",
      paragraphs: [
        "Météo : It's windy. It's raining. Ce qu'on porte en ce moment : I'm wearing a coat. Conseil : You should take an umbrella.",
        "Trop et assez : It's too cold. Is your jacket warm enough? Rappel : enough se met après l'adjectif en anglais — « assez chaude », mais warm enough.",
      ],
      examples: [
        { ru: "It's cold and windy. You should wear a hat.", en: "Il fait froid et il y a du vent. Mets un bonnet." },
        { ru: "Is it warm enough to swim? — No, it's too cold.", en: "Il fait assez chaud pour nager ? — Non, il fait trop froid." },
      ],
    },
  ],
  tasks: [
    choice("enwe2-t1", "Comment dire « Il pleut en ce moment » ?", [
      ["It's raining now.", true],
      ["It rains now.", false],
      ["It's rain now.", false],
    ], { skill: "grammar" }),
    listen("enwe2-t2", "Écoute. Quel temps fait-il ?", "It's windy and cloudy, but it isn't raining.", [
      ["Venteux et nuageux, mais sans pluie.", true],
      ["Il pleut et il neige.", false],
      ["Ensoleillé et calme.", false],
    ]),
    match("enwe2-t3", "Relie les paires.", [
      ["windy", "venteux"],
      ["rainbow", "arc-en-ciel"],
      ["seasons", "saisons"],
      ["Hold on!", "Accroche-toi !"],
    ], { skill: "words" }),
    spell("enwe2-t4", "Assemble les lettres du mot « arc-en-ciel ».", "rainbow"),
    speak("enwe2-t5", "What's the weather like and what are you wearing?", "It's cold and windy. I'm wearing a warm jacket.", "Il fait froid et il y a du vent. Je porte une veste chaude.", { help: "Raconte à voix haute la météo et ce que tu portes." }),
    choice("enwe2-t6", "Comment dire « On s'est connus il y a cinquante ans » ?", [
      ["We met fifty years ago.", true],
      ["We meet fifty years ago.", false],
      ["We met ago fifty years.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "windmill",
    itemName: "Moulin à vent en papier",
    itemNameRu: "Windmill",
    ru: "Hooray! A little windmill!",
    en: "Hourra ! Un moulin à vent !",
    a11y: "Un moulin à vent en papier multicolore tourne vite au vent, près de la fenêtre.",
    image: p("windmill"),
    steps: ["Le petit-fils de Grace offre un moulin en papier à Murzik.", "À Wellington, il tourne tout le temps !", "« It never stops here! » — « Ici, il ne s'arrête jamais ! »", "Murzik le plante dans un pot près de la fenêtre."],
    bridge: "Grace appelle : « Let's have lunch at my café! »",
  },
};

const wellington3: Lesson = {
  id: "en-a1-wellington-3",
  level: "A1",
  cityId: "en-wellington",
  number: 3,
  title: "At Grace's café — Au café de Grace",
  minutes: 7,
  goals: ["Revoir la commande au café", "Revoir some / any, I'd like, Can I have…?", "Dire ce qu'on aime et ce qu'on n'aime pas"],
  vocabNote: "On révise : What would you like? — I'd like… Can I have…? Have you got any…? Flat white — un café au lait inventé en Australie et en Nouvelle-Zélande.",
  vocab: [
    v("enwe3-1", "I'd like a flat white, please.", "Je voudrais un flat white, s'il vous plaît.", "Une tasse de café avec une mousse de lait veloutée.", "Écouter I'd like a flat white, please", p("l3-1")),
    v("enwe3-2", "Have you got any cake?", "Vous avez du gâteau ?", "Murzik se penche sur la vitrine à pâtisseries.", "Écouter Have you got any cake", p("l3-2")),
    v("enwe3-3", "We've got pavlova.", "On a de la pavlova.", "Un gâteau meringué blanc avec de la crème et des fruits rouges.", "Écouter We've got pavlova", p("l3-3")),
    v("enwe3-4", "Can I have a slice, please?", "Je peux avoir une part, s'il vous plaît ?", "Grace coupe une part de pavlova.", "Écouter Can I have a slice, please", p("l3-4")),
    v("enwe3-5", "I don't like coffee very much.", "Je n'aime pas beaucoup le café.", "Tom pousse son café et prend un thé.", "Écouter I don't like coffee very much", p("l3-5")),
    v("enwe3-6", "This is my café.", "Voici mon café.", "Un petit café douillet avec vue sur le port.", "Écouter This is my café", p("l3-6")),
    v("enwe3-7", "It's just like Hope's Café.", "Il ressemble tout à fait au café « Hope ».", "Le café de Grace : porte bleue, sonnette, une table près de la fenêtre.", "Écouter It's just like Hope's Café", p("l3-7")),
  ],
  dialogue: {
    title: "Le café de Grace",
    note: "Pavlova — un gâteau meringué à la crème et aux fruits, adoré en Nouvelle-Zélande. Just like — « tout à fait comme ».",
    lines: [
      line("grace", "Welcome to my café! What would you like?", "Bienvenue dans mon café ! Qu'est-ce que je vous sers ?"),
      line("murzik", "I'd like a flat white, please. Have you got any cake?", "Je voudrais un flat white, s'il vous plaît. Vous avez du gâteau ?"),
      line("grace", "We've got pavlova. It's Mrs Hope's recipe!", "On a de la pavlova. C'est la recette de Mme Hope !"),
      line("murzik", "Can I have a slice, please?", "Je peux avoir une part, s'il vous plaît ?"),
      line("tom", "And tea for me. I don't like coffee very much.", "Et pour moi, un thé. Je n'aime pas beaucoup le café."),
      line("murzik", "Look, Tom! A blue door, a bell, a table by the window… It's just like Hope's Café!", "Regarde, Tom ! Une porte bleue, une sonnette, une table près de la fenêtre… Tout à fait comme le café « Hope » !"),
    ],
    gist: choice("enwe3-d1", "À quoi ressemble le café de Grace ?", [
      ["Au café de Mme Hope.", true],
      ["Au snack de Marcus.", false],
      ["Au coffee shop de Daniel.", false],
    ]),
  },
  grammar: [
    {
      title: "Révision : au café",
      paragraphs: [
        "Commander : I'd like…, please. Can I have…? Questions : Have you got any…? Would you like…? Réponses : Yes, please. / No, thank you.",
        "Ce qu'on aime : I like tea. I don't like coffee very much. She loves cake. Rappel : « j'aime » se dit I like — I like a tea veut dire « j'aime un thé », pas « je voudrais un thé » !",
      ],
      examples: [
        { ru: "Can I have some water, please?", en: "Je peux avoir de l'eau, s'il vous plaît ?" },
        { ru: "Would you like some cake? — Yes, please!", en: "Vous voulez du gâteau ? — Oui, s'il vous plaît !" },
      ],
    },
  ],
  tasks: [
    choice("enwe3-t1", "Comment commander un thé poliment ?", [
      ["I'd like a tea, please.", true],
      ["I like a tea, please.", false],
      ["I want tea give.", false],
    ], { skill: "grammar" }),
    listen("enwe3-t2", "Écoute. Que commande le client ?", "Can I have a coffee and a slice of pavlova, please?", [
      ["Un café et une part de pavlova.", true],
      ["Un thé et un petit pâté.", false],
      ["Juste un café.", false],
    ]),
    match("enwe3-t3", "Relie les paires.", [
      ["a slice", "une part"],
      ["just like", "tout à fait comme"],
      ["Have you got any…?", "Vous avez… ?"],
      ["I'd like…", "Je voudrais…"],
    ], { skill: "words" }),
    missing("enwe3-t4", "Quelle lettre manque ? (« part, tranche »)", "sl", "ce", "i", ["i", "y", "ee"]),
    speak("enwe3-t5", "What would you like?", "I'd like a coffee and a cake, please.", "Je voudrais un café et un gâteau, s'il vous plaît.", { help: "Commande à voix haute au café." }),
    choice("enwe3-t6", "Comment dire « Tiens ton chapeau ! » ?", [
      ["Hold on to your hat!", true],
      ["Hold your on hat!", false],
      ["You hold hat!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "chalkboard",
    itemName: "Ardoise pour le menu",
    itemNameRu: "Chalkboard",
    ru: "Hooray! A chalkboard!",
    en: "Hourra ! Une ardoise !",
    a11y: "Une petite ardoise dans un cadre en bois, avec une tasse et un gâteau dessinés à la craie.",
    image: p("chalkboard"),
    steps: ["Grace montre l'ardoise où elle écrit le menu.", "Elle en a une autre dans sa réserve.", "« For your menu! » — « Pour ton menu ! »", "Murzik y dessine une tasse et un gâteau à la craie."],
    bridge: "Après le déjeuner, Grace propose : « Let's go up the hill. There's a cable car! »",
  },
};

const wellington4: Lesson = {
  id: "en-a1-wellington-4",
  level: "A1",
  cityId: "en-wellington",
  number: 4,
  title: "Up the hill — En haut de la colline",
  minutes: 7,
  goals: ["Revoir l'itinéraire et les transports", "Revoir there is / there are", "Revoir les prépositions de lieu"],
  vocabNote: "On révise : How do we get to…? By cable car. Go straight on, turn left. There's a… Next to, opposite.",
  vocab: [
    v("enwe4-1", "How do we get to the top?", "Comment on monte là-haut ?", "Murzik regarde la colline abrupte au-dessus de la ville.", "Écouter How do we get to the top", p("l4-1")),
    v("enwe4-2", "by cable car", "en funiculaire", "Le wagonnet rouge du funiculaire grimpe la pente.", "Écouter by cable car", p("l4-2")),
    v("enwe4-3", "It takes five minutes.", "Ça prend cinq minutes.", "Une horloge et le wagonnet à mi-chemin.", "Écouter It takes five minutes", p("l4-3")),
    v("enwe4-4", "There's a beautiful garden at the top.", "Il y a un beau jardin là-haut.", "Un jardin botanique avec des fleurs et des allées.", "Écouter There's a beautiful garden at the top", p("l4-4")),
    v("enwe4-5", "There are lots of flowers.", "Il y a plein de fleurs.", "Des roses roses et blanches dans les parterres.", "Écouter There are lots of flowers", p("l4-5")),
    v("enwe4-6", "next to the old tree", "à côté du vieil arbre", "Un banc à côté d'un immense vieil arbre.", "Écouter next to the old tree", p("l4-6")),
    v("enwe4-7", "You can see the whole city!", "On voit toute la ville d'ici !", "Vue d'en haut sur le port, les maisons et les bateaux.", "Écouter You can see the whole city", p("l4-7")),
  ],
  dialogue: {
    title: "Le funiculaire",
    note: "Le cable car de Wellington est un funiculaire, un wagonnet sur rails qui grimpe la colline. Bench — « le banc ».",
    lines: [
      line("murzik", "Grace, how do we get to the top of the hill?", "Grace, comment on monte en haut de la colline ?"),
      line("grace", "By cable car! It takes five minutes. The station is opposite my café.", "En funiculaire ! Cinq minutes. La station est en face de mon café."),
      line("tom", "What's there at the top?", "Et qu'est-ce qu'il y a là-haut ?"),
      line("grace", "There's a beautiful garden. There are lots of flowers. And there's a bench next to the old tree.", "Il y a un beau jardin. Plein de fleurs. Et un banc à côté du vieil arbre."),
      line("murzik", "Wow! You can see the whole city!", "Waouh ! On voit toute la ville d'ici !"),
      line("grace", "Yes. Mrs Hope and I sat on this bench fifty years ago.", "Oui. Mme Hope et moi étions assises sur ce banc il y a cinquante ans."),
    ],
    gist: choice("enwe4-d1", "Où est la station du funiculaire ?", [
      ["En face du café de Grace.", true],
      ["À côté du vieil arbre.", false],
      ["Au sommet de la colline.", false],
    ]),
  },
  grammar: [
    {
      title: "Révision : la ville et les itinéraires",
      paragraphs: [
        "Ce qu'il y a : There's a garden. There are lots of flowers. Rappel : en français, « il y a » sert pour les deux ; en anglais, il faut choisir — is au singulier, are au pluriel. Où : next to, opposite, between, behind. Comment y aller : by bus, by cable car, on foot. It takes five minutes.",
        "On peut : You can see the whole city. — On voit toute la ville d'ici.",
      ],
      examples: [
        { ru: "Is there a café at the top? — Yes, there is.", en: "Il y a un café là-haut ? — Oui." },
        { ru: "Go straight on and turn right. It's opposite the station.", en: "Allez tout droit et tournez à droite. C'est en face de la gare." },
      ],
    },
  ],
  tasks: [
    choice("enwe4-t1", "Comment dire « Il y a plein de fleurs » ?", [
      ["There are lots of flowers.", true],
      ["There is lots of flowers.", false],
      ["It has lots of flower.", false],
    ], { skill: "grammar" }),
    listen("enwe4-t2", "Écoute. Comment aller au jardin ?", "Take the cable car. It takes five minutes. The garden is next to the station.", [
      ["En funiculaire, cinq minutes, le jardin est à côté de la station.", true],
      ["À pied, une demi-heure, le jardin est derrière le café.", false],
      ["En bus, quinze minutes.", false],
    ]),
    match("enwe4-t3", "Relie les paires.", [
      ["top", "sommet"],
      ["hill", "colline"],
      ["bench", "banc"],
      ["the whole city", "toute la ville"],
    ], { skill: "words" }),
    missing("enwe4-t4", "Quelle lettre manque ? (« colline »)", "h", "ll", "i", ["i", "a", "y"]),
    speak("enwe4-t5", "How do you get to the centre of your city?", "I go by bus. It takes twenty minutes.", "En bus. Vingt minutes.", { help: "Raconte à voix haute comment tu vas au centre-ville." }),
    choice("enwe4-t6", "Comment demander « Vous avez du gâteau ? »", [
      ["Have you got any cake?", true],
      ["Have you got some cakes any?", false],
      ["You have cake any?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "hill-photo",
    itemName: "Photo du sommet de la colline",
    itemNameRu: "Photo from the hill",
    ru: "Hooray! A photo from the hill!",
    en: "Hourra ! Une photo de la colline !",
    a11y: "Une photo encadrée : Murzik, Tom et Grace sur le banc sous le vieil arbre, le port derrière eux.",
    image: p("hill-photo"),
    steps: ["Tom photographie tout le monde sur ce fameux banc.", "Murzik, Tom et Grace, et derrière eux, toute la ville.", "« Like fifty years ago! » — rit Grace. « Comme il y a cinquante ans ! »", "La photo encadrée trône sur la commode."],
    bridge: "Le soir, Grace raconte l'histoire que Murzik attendait depuis le début du voyage.",
  },
};

const wellington5: Lesson = {
  id: "en-a1-wellington-5",
  level: "A1",
  cityId: "en-wellington",
  number: 5,
  title: "Grace's story — L'histoire de Grace",
  minutes: 7,
  goals: ["Comprendre un récit au passé", "Revoir was / were, -ed, went, met", "Découvrir pourquoi le café « Hope » a fermé"],
  vocabNote: "On révise le passé : we met, we worked, she opened, he died, she closed, she sent. Sad — « triste », alone — « seul, seule ».",
  vocab: [
    v("enwe5-1", "We were young cooks.", "On était de jeunes cuisinières.", "Une vieille photo : deux jeunes filles en toque blanche dans une cuisine.", "Écouter We were young cooks", p("l5-1")),
    v("enwe5-2", "We worked in a big hotel.", "On travaillait dans un grand hôtel.", "La cuisine à l'ancienne d'un grand hôtel, plein de cuisiniers.", "Écouter We worked in a big hotel", p("l5-2")),
    v("enwe5-3", "She opened a little café.", "Elle a ouvert un petit café.", "Mme Hope jeune devant une porte bleue toute neuve.", "Écouter She opened a little café", p("l5-3")),
    v("enwe5-4", "Tom's grandfather died.", "Le grand-père de Tom est mort.", "Une photo d'un homme souriant dans un cadre, une fleur à côté.", "Écouter Tom's grandfather died", p("l5-4")),
    v("enwe5-5", "She was very sad and alone.", "Elle était très triste et seule.", "Mme Hope seule à une table du café vide, il pleut dehors.", "Écouter She was very sad and alone", p("l5-5")),
    v("enwe5-6", "She closed the café.", "Elle a fermé le café.", "La porte bleue avec un panneau, les vitres pleines de poussière.", "Écouter She closed the café", p("l5-6")),
    v("enwe5-7", "She sent the pages to her friends.", "Elle a envoyé les pages à ses amis.", "Des enveloppes avec des timbres de différents pays.", "Écouter She sent the pages to her friends", p("l5-7")),
  ],
  dialogue: {
    title: "Pourquoi le café a fermé",
    note: "Die — died (mourir). Send — sent (envoyer). Live — « vivre » (ici : « pour que le café continue de vivre »).",
    lines: [
      line("murzik", "Grace, why did Mrs Hope close her café?", "Grace, pourquoi Mme Hope a-t-elle fermé son café ?"),
      line("grace", "We were young cooks. We worked in a big hotel. Then she opened a little café.", "On était de jeunes cuisinières. On travaillait dans un grand hôtel. Puis elle a ouvert un petit café."),
      line("grace", "It was a happy café. But then Tom's grandfather died. She was very sad and alone.", "C'était un café heureux. Mais ensuite, le grand-père de Tom est mort. Elle était très triste et seule."),
      line("tom", "I was a little boy then. I remember.", "J'étais un petit garçon, à l'époque. Je m'en souviens."),
      line("grace", "She closed the café. And she sent the pages to her friends. She wanted the café to live in other places.", "Elle a fermé le café. Et elle a envoyé les pages à ses amis. Elle voulait que le café continue de vivre ailleurs."),
      line("murzik", "And now the pages are coming back home…", "Et maintenant, les pages rentrent à la maison…"),
    ],
    gist: choice("enwe5-d1", "Pourquoi Mme Hope a-t-elle fermé le café ?", [
      ["Le grand-père de Tom est mort, elle était triste et seule.", true],
      ["Le café était trop petit.", false],
      ["Elle a déménagé en Nouvelle-Zélande.", false],
    ]),
  },
  grammar: [
    {
      title: "Révision : le passé",
      paragraphs: [
        "Was / were : We were young. She was sad. Réguliers : worked, opened, closed, died, wanted. Irréguliers : met, went, sent, had.",
        "Question : Why did she close the café? Did she open it again? — No, she didn't. Rappel : avec did, le verbe revient à sa forme de base — jamais « did she closed » !",
      ],
      examples: [
        { ru: "They met in London and worked together.", en: "Elles se sont connues à Londres et ont travaillé ensemble." },
        { ru: "Why did you go to Sydney? — We wanted to find a page.", en: "Pourquoi êtes-vous allés à Sydney ? — On voulait trouver une page." },
      ],
    },
  ],
  tasks: [
    choice("enwe5-t1", "Comment demander « Pourquoi a-t-elle fermé le café ? »", [
      ["Why did she close the café?", true],
      ["Why did she closed the café?", false],
      ["Why she closed the café?", false],
    ], { skill: "grammar" }),
    listen("enwe5-t2", "Écoute. Qu'a fait Mme Hope ?", "She closed the café and sent the pages to her friends.", [
      ["Elle a fermé le café et envoyé les pages à ses amis.", true],
      ["Elle a ouvert le café et invité ses amis.", false],
      ["Elle a vendu le café et elle est partie.", false],
    ]),
    match("enwe5-t3", "Relie les paires.", [
      ["open", "opened"],
      ["close", "closed"],
      ["send", "sent"],
      ["meet", "met"],
    ], { skill: "words" }),
    spell("enwe5-t4", "Assemble les lettres du mot « triste ».", "sad", ["e"]),
    speak("enwe5-t5", "Tell me about your grandparents.", "My grandparents lived in a small town. They worked in a school.", "Mes grands-parents vivaient dans une petite ville. Ils travaillaient dans une école.", { help: "Raconte à voix haute un souvenir de tes grands-parents, au passé." }),
    choice("enwe5-t6", "Comment dire « Il y a un beau jardin là-haut » ?", [
      ["There's a beautiful garden at the top.", true],
      ["It's a garden beautiful at top.", false],
      ["There are a beautiful garden at the top.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "old-photo",
    itemName: "Vieille photo de Mme Hope et Grace",
    itemNameRu: "Old photo",
    ru: "Hooray! An old photo!",
    en: "Hourra ! Une vieille photo !",
    a11y: "Une photo en noir et blanc : deux jeunes filles en tablier rient devant la porte bleue d'un petit café.",
    image: p("old-photo"),
    steps: ["Grace sort une vieille photo en noir et blanc.", "Deux jeunes filles en tablier devant la porte bleue.", "« The first day of Hope's Café. » — « Le premier jour du café “Hope”. »", "Murzik glisse la photo dans le livre de recettes, avec précaution."],
    bridge: "Grace se lève : « And now… the last page ».",
  },
};

const wellington6: Lesson = {
  id: "en-a1-wellington-6",
  level: "A1",
  cityId: "en-wellington",
  number: 6,
  title: "The last page — La dernière page",
  minutes: 7,
  goals: ["Comprendre un petit mot", "Revoir les projets : going to", "Parler de son rêve"],
  vocabNote: "On révise going to : I'm going to open a café. Name — « appeler, nommer », owner — « le propriétaire ». Every café is like its owner — « Chaque café ressemble à son propriétaire ».",
  vocab: [
    v("enwe6-1", "There's no recipe.", "Il n'y a pas de recette.", "La dernière page : juste quelques lignes écrites à la main.", "Écouter There's no recipe", p("l6-1")),
    v("enwe6-2", "Name it yourself.", "Nomme-le toi-même.", "Gros plan : une ligne d'une écriture soignée.", "Écouter Name it yourself", p("l6-2")),
    v("enwe6-3", "Every café is like its owner.", "Chaque café ressemble à son propriétaire.", "Murzik regarde la page, pensif.", "Écouter Every café is like its owner", p("l6-3")),
    v("enwe6-4", "I'm going to open a café.", "Je vais ouvrir un café.", "Murzik en tablier devant la porte bleue.", "Écouter I'm going to open a café", p("l6-4")),
    v("enwe6-5", "What are you going to call it?", "Comment tu vas l'appeler ?", "Grace se penche vers Murzik, curieuse.", "Écouter What are you going to call it", p("l6-5")),
    v("enwe6-6", "I don't know yet.", "Je ne sais pas encore.", "Murzik hausse les épaules en souriant.", "Écouter I don't know yet", p("l6-6")),
    v("enwe6-7", "Let's go home!", "Rentrons à la maison !", "Murzik et Tom se serrent dans les bras, le livre dans les pattes.", "Écouter Let's go home", p("l6-7")),
  ],
  dialogue: {
    title: "La quatorzième page",
    note: "Yet — « encore » : I don't know yet — « je ne sais pas encore ». Home — « la maison », ici Londres.",
    lines: [
      line("grace", "This is the last page. There's no recipe.", "Voici la dernière page. Il n'y a pas de recette dessus."),
      line("murzik", "No recipe? What does it say?", "Pas de recette ? Qu'est-ce qu'il y a d'écrit ?"),
      line("grace", "Read it, Murzik.", "Lis-la, Murzik."),
      line("murzik", "\"Name it yourself. Every café is like its owner.\"", "« Nomme-le toi-même. Chaque café ressemble à son propriétaire. »"),
      line("grace", "So, what are you going to call your café?", "Alors, comment vas-tu appeler ton café ?"),
      line("murzik", "I don't know yet… But I know one thing. I'm going to open a café!", "Je ne sais pas encore… Mais je sais une chose. Je vais ouvrir un café !"),
      line("tom", "Then let's go home! To London!", "Alors rentrons à la maison ! À Londres !"),
    ],
    gist: choice("enwe6-d1", "Qu'y a-t-il d'écrit sur la dernière page ?", [
      ["Nomme le café toi-même : chaque café ressemble à son propriétaire.", true],
      ["La recette de la pavlova.", false],
      ["L'adresse du nouveau café.", false],
    ]),
  },
  grammar: [
    {
      title: "Révision : projets et rêves",
      paragraphs: [
        "Les projets : I'm going to open a café. We're going to fly to London. Questions : What are you going to do? What are you going to call it? Rappel : ça marche comme le futur proche français — « je VAIS ouvrir ».",
        "Les rêves : I want to be a cook. I'd like to have a café. Attention : I'd like = « je voudrais » (poli), I like = « j'aime » — ne les confonds pas !",
      ],
      examples: [
        { ru: "I'm going to learn English next year.", en: "L'année prochaine, je vais apprendre l'anglais." },
        { ru: "What are you going to do tomorrow?", en: "Qu'est-ce que tu vas faire demain ?" },
      ],
    },
  ],
  tasks: [
    choice("enwe6-t1", "Comment dire « On va prendre l'avion pour Londres » ?", [
      ["We're going to fly to London.", true],
      ["We going to fly to London.", false],
      ["We're go to fly to London.", false],
    ], { skill: "grammar" }),
    listen("enwe6-t2", "Écoute. Que va-t-il faire ?", "I'm going to open a little café by the sea.", [
      ["Ouvrir un petit café au bord de la mer.", true],
      ["Partir à la mer en vacances.", false],
      ["Fermer son café.", false],
    ]),
    match("enwe6-t3", "Relie les paires.", [
      ["owner", "propriétaire"],
      ["name", "nommer"],
      ["yet", "encore"],
      ["the last page", "la dernière page"],
    ], { skill: "words" }),
    missing("enwe6-t4", "Quelle lettre manque ? (« propriétaire »)", "own", "r", "e", ["e", "a", "o"]),
    speak("enwe6-t5", "What are you going to do next year?", "I'm going to travel and speak English!", "Je vais voyager et parler anglais !", { help: "Raconte à voix haute tes projets." }),
    choice("enwe6-t6", "Comment demander « Pourquoi le café a-t-il fermé ? »", [
      ["Why did the café close?", true],
      ["Why did the café closed?", false],
      ["Why the café closed did?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fern",
    itemName: "Fougère en pot",
    itemNameRu: "Fern",
    ru: "Hooray! A fern!",
    en: "Hourra ! Une fougère !",
    a11y: "Une fougère verte et touffue dans un pot en terre cuite, posée par terre près de la fenêtre.",
    image: p("fern"),
    steps: ["Grace déterre une petite fougère dans le jardin.", "« The fern is the symbol of New Zealand. » — « La fougère est le symbole de la Nouvelle-Zélande. »", "« For your new beginning! » — « Pour ton nouveau départ ! »", "Murzik la pose près de la fenêtre."],
    bridge: "Demain, retour à la maison. Mais d'abord — l'examen A1 !",
  },
};

const wellington7: Lesson = {
  id: "en-a1-wellington-7",
  level: "A1",
  cityId: "en-wellington",
  number: 7,
  title: "Examen A1",
  minutes: 9,
  goals: ["Passer l'examen A1", "Se souvenir de tout le voyage", "Fêter la fin du niveau"],
  vocabNote: "Exam — « l'examen ». Congratulations! — « Félicitations ! » You passed! — « Tu as réussi ! » Level — « le niveau ».",
  vocab: [
    v("enwe7-1", "the A1 exam", "l'examen A1", "Murzik à une table avec un crayon, sur sa feuille en gros : A1.", "Écouter the A1 exam", p("l7-1")),
    v("enwe7-2", "Congratulations!", "Félicitations !", "Tom et Grace applaudissent.", "Écouter Congratulations", p("l7-2")),
    v("enwe7-3", "You passed!", "Tu as réussi !", "Murzik lève au-dessus de sa tête une feuille avec une grande étoile.", "Écouter You passed", p("l7-3")),
    v("enwe7-4", "We're proud of you!", "On est fiers de toi !", "Grace prend Murzik dans ses bras.", "Écouter We're proud of you", p("l7-4")),
    v("enwe7-5", "an old clock", "une vieille horloge", "Une grande vieille horloge murale dans un boîtier en bois.", "Écouter an old clock", p("l7-5")),
    v("enwe7-6", "It's from Hope's Café.", "Elle vient du café « Hope ».", "Grace décroche l'horloge du mur.", "Écouter It's from Hope's Café", p("l7-6")),
    v("enwe7-7", "It's time to go home.", "Il est temps de rentrer.", "L'horloge indique midi pile, une valise bouclée est posée à côté.", "Écouter It's time to go home", p("l7-7")),
  ],
  dialogue: {
    title: "L'horloge",
    note: "Gave — « a offert » (passé de give). Stopped — « s'est arrêtée ». Again — « de nouveau ».",
    lines: [
      line("tom", "Congratulations, Murzik! You passed the A1 exam!", "Félicitations, Murzik ! Tu as réussi l'examen A1 !"),
      line("grace", "We're proud of you! And this is for your café.", "On est fiers de toi ! Et ça, c'est pour ton café."),
      line("murzik", "An old clock!", "Une vieille horloge !"),
      line("grace", "It's from Hope's Café. Mrs Hope gave it to me. It stopped many years ago.", "Elle vient du café « Hope ». Mme Hope me l'a offerte. Elle s'est arrêtée il y a bien des années."),
      line("murzik", "Look! It's working again! Tick-tock!", "Regardez ! Elle remarche ! Tic-tac !"),
      line("tom", "It's time to go home.", "Il est temps de rentrer à la maison."),
    ],
    gist: choice("enwe7-d1", "Qu'est-il arrivé à l'horloge ?", [
      ["Elle s'est remise en marche.", true],
      ["Elle s'est cassée.", false],
      ["On l'a oubliée au café.", false],
    ]),
  },
  grammar: [
    {
      title: "Tout le niveau A1 d'un coup d'œil",
      paragraphs: [
        "To be : I'm, she's, they're ; was, were. Have got : I've got. Présent : I work, she works, Do you…? Does he…? En ce moment : I'm working. Passé : I worked, I went, Did you…? Projets : I'm going to…",
        "Can — « savoir / pouvoir ». Should — « devrais ». There is / there are — « il y a ». A / an / the, this / that, some / any. Tu as tout vu : félicitations !",
      ],
      examples: [
        { ru: "I'm Murzik. I'm from Russia. I went to fourteen cities. Now I'm going to open a café!", en: "Je suis Murzik. Je viens de Russie. J'ai visité quatorze villes. Maintenant, je vais ouvrir un café !" },
        { ru: "I can speak English now!", en: "Maintenant, je sais parler anglais !" },
      ],
    },
  ],
  tasks: [
    listen("enwe7-t1", "Examen d'écoute. Que raconte Murzik ?", "I started in London. I visited fourteen cities and met lots of friends. I found all the pages. Now I'm going to open a café!", [
      ["Il a commencé à Londres, visité 14 villes, trouvé toutes les pages et il va ouvrir un café.", true],
      ["Il habite à Wellington et ne veut partir nulle part.", false],
      ["Il a perdu le livre et il est rentré à Paris.", false],
    ]),
    choice("enwe7-t2", "Examen. Choisis la bonne phrase.", [
      ["Yesterday I went to the beach and saw a whale.", true],
      ["Yesterday I go to the beach and see a whale.", false],
      ["Yesterday I goed to the beach and seed a whale.", false],
    ], { skill: "grammar" }),
    match("enwe7-t3", "Examen. Relie les paires.", [
      ["I work", "je travaille"],
      ["I'm working", "je suis en train de travailler"],
      ["I worked", "j'ai travaillé"],
      ["I'm going to work", "je vais travailler"],
    ], { skill: "words" }),
    spell("enwe7-t4", "Examen. Assemble les lettres du mot « horloge ».", "clock"),
    speak("enwe7-t5", "Tell me about you and your English.", "My name is Alex. I'm from Russia. I can speak English now!", "Je m'appelle Alex. Je viens de Russie. Maintenant, je sais parler anglais !", { help: "Présente-toi à voix haute en anglais." }),
    script("enwe7-t6", "Examen A1. Souviens-toi de tout le voyage et termine les conversations.", [
      { speaker: "Mme Hope", text: "Hello! What's your name?" },
      { speaker: "Toi", answer: "My name is Alex. Nice to meet you.", options: ["My name is Alex. Nice to meet you.", "I Alex. Nice meet you.", "My name Alex is."] },
      { speaker: "Marcus", text: "What would you like?" },
      { speaker: "Toi", answer: "I'd like a coffee, please.", options: ["I'd like a coffee, please.", "I like coffee give.", "I'd likes a coffee."] },
      { speaker: "Tony", text: "Where's the station?" },
      { speaker: "Toi", answer: "It's next to the bank.", options: ["It's next to the bank.", "It's next the bank.", "There is next bank."] },
      { speaker: "Chloé", text: "What did you do yesterday?" },
      { speaker: "Toi", answer: "I went to the beach.", options: ["I went to the beach.", "I go to the beach yesterday.", "I goed to the beach."] },
      { speaker: "Grace", text: "What are you going to do now?" },
      { speaker: "Toi", answer: "I'm going to open a café!", options: ["I'm going to open a café!", "I going open a café!", "I'm go to open a café!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "old-clock",
    itemName: "Vieille horloge du café « Hope »",
    itemNameRu: "Old clock",
    ru: "Hooray! The old clock!",
    en: "Hourra ! La vieille horloge !",
    a11y: "Une grande horloge murale ancienne dans un boîtier en bois, avec un pendule. Le pendule s'est remis à bouger.",
    image: p("old-clock"),
    steps: ["Grace décroche la vieille horloge du mur.", "Murzik la remonte — et le pendule se met à bouger.", "« They waited for you, » — dit Grace. « Elle t'attendait. »", "L'horloge est l'objet le plus précieux de Wellington."],
    bridge: "Niveau A1 terminé ! Il est temps de rentrer — à Londres, vers la porte bleue.",
  },
};

const story: CityStory = {
  home: {
    name: "Chambre dans la maison de Grace",
    nameRu: "Murzik's room in Wellington",
    image: p("home"),
    a11y: "Une chambre vide dans une maison en bois sur une colline. Par la fenêtre, le port, les bateaux et des collines vertes. Le vent frappe à la vitre. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "old-clock",
  welcomeRu: "Hello, Wellington!",
  welcomeEn: "Salut, Wellington !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom à Wellington : des maisons en bois colorées sur des collines vertes au-dessus du port, beaucoup de vent.",
  departureImage: p("departure"),
  departureA11y: "Grace, en pull vif, fait des signes d'au revoir à l'aéroport, le vent fait voler ses boucles.",
  finale: [
    {
      image: p("book"),
      a11y: "Gros plan : le livre de recettes de Mme Hope. Toutes les pages sont à leur place, avec entre elles la vieille photo des deux jeunes filles devant la porte bleue.",
      lines: [
        { en: "Quatorze pages. Le livre de Mme Hope est de nouveau entier." },
        { ru: "Name it yourself. Every café is like its owner.", en: "Nomme-le toi-même. Chaque café ressemble à son propriétaire." },
      ],
    },
    {
      image: p("suitcase"),
      a11y: "La valise ouverte de Murzik : la sonnette, la théière à fleurs, le présentoir à gâteaux, le plaid à carreaux, les tasses en terre cuite, l'enseigne au néon en forme de tasse, le portemanteau, le moule à pizza, le tourne-disque, la machine à expresso, le sirop d'érable, la nappe, le parasol et la vieille horloge.",
      lines: [
        { en: "Quatorze villes. Quatorze objets pour le café. Et le livre de recettes." },
        { ru: "Wellington complete! Level A1 complete!", en: "Wellington terminé ! Niveau A1 terminé !" },
        { en: "7 / 7 leçons. Quatorze villes !" },
      ],
    },
    {
      image: img.flight,
      a11y: "Un avion traverse le monde entier pour retourner à Londres.",
      lines: [{ ru: "Wellington → London", en: "Wellington → Londres" }],
    },
    {
      image: pic("en/london/key"),
      a11y: "Mme Hope, devant la porte bleue de son vieux café, tend une vieille clé à Murzik. Tom se tient à côté avec son appareil photo.",
      lines: [
        { ru: "Welcome home, dear.", en: "Bon retour à la maison, mon petit." },
        { en: "Mme Hope tend à Murzik la vieille clé de la porte bleue." },
        { ru: "It's yours now.", en: "Le café est à toi, maintenant." },
      ],
    },
    {
      image: pic("en/london/opening"),
      a11y: "Le café derrière la porte bleue est rouvert : la sonnette au-dessus de la porte, la tasse au néon dans la vitrine, l'horloge au mur, le plaid à carreaux sur le fauteuil. À l'intérieur : Priya, Mme Green, la famille McDonald, Seán avec son violon, Marcus, Rosie, Emily, Tony, Bernadette, Daniel, Dr Lee et Sam, la famille Chen, Chloé et Grace. Mme Hope est assise à la table près de la fenêtre.",
      lines: [
        { en: "Dring ! — sonne la clochette. Le café derrière la porte bleue est de nouveau ouvert." },
        { en: "Tout le monde vient : Priya, Mme Green, les McDonald, Seán, Marcus, Rosie, Emily, Tony, Bernadette, Daniel, Dr Lee et Sam, la famille Chen, Chloé et Grace." },
        { en: "Murzik écrit le nom à la craie sur l'ardoise. Il a gardé l'ancien — parce que ce café a toujours été une histoire d'espoir (« hope »)." },
        { ru: "Hope's Café is open again!", en: "Le café « Hope » est de nouveau ouvert !" },
      ],
    },
    {
      image: pic("en/london/opening-hope"),
      a11y: "Mme Hope est assise à la table près de la fenêtre avec une tasse de thé, elle sourit et essuie une larme. Murzik, en tablier, pose devant elle une assiette de scones.",
      lines: [
        { en: "Murzik apporte la première tasse de thé à Mme Hope. D'abord un sourire — ensuite le thé." },
        { ru: "Welcome to Hope's Café! What would you like?", en: "Bienvenue au café « Hope » ! Qu'est-ce que je vous sers ?" },
        { ru: "A2 begins!", en: "A2 commence !" },
      ],
    },
  ],
};

export const enWellingtonFr = {
  id: "en-wellington",
  name: "Wellington",
  nameEn: "Wellington",
  lessons: [wellington1, wellington2, wellington3, wellington4, wellington5, wellington6, wellington7],
  story,
};
