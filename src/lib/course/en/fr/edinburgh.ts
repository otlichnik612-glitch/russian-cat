import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/**
 * Édimbourg · « La famille » · lessons 1–7 — French version of ../edinburgh.ts.
 * Same story, same English phrases and pictures; explanations, translations
 * and tasks are written for French speakers.
 * In lesson data `ru` = English text, `en` = French translation.
 */

const p = (name: string) => pic(`en/edinburgh/${name}`);

const edinburgh1: Lesson = {
  id: "en-a1-edinburgh-1",
  level: "A1",
  cityId: "en-edinburgh",
  number: 1,
  title: "This is my family — Voici ma famille",
  minutes: 7,
  goals: ["Nommer les membres de la famille", "Présenter sa famille : This is my…", "Dire mum, dad et mother, father"],
  vocabNote: "Mum et dad — « maman » et « papa », en famille. Mother et father — « mère » et « père », un peu plus officiel. En Amérique, on dit mom au lieu de mum.",
  vocab: [
    v("ened1-1", "This is my family.", "Voici ma famille.", "Une grande famille devant la porte d'une maison en pierre grise.", "Écouter This is my family", p("l1-1")),
    v("ened1-2", "my mum and dad", "mes maman et papa", "Une maman aux cheveux courts et un papa roux à barbe se serrent dans les bras.", "Écouter my mum and dad", p("l1-2")),
    v("ened1-3", "my brother", "mon frère", "Un garçon d'une dizaine d'années, avec des taches de rousseur, fait une grimace.", "Écouter my brother", p("l1-3")),
    v("ened1-4", "my sister", "ma sœur", "Une fillette aux nattes rousses avec un livre à la main.", "Écouter my sister", p("l1-4")),
    v("ened1-5", "They're twins.", "Ils sont jumeaux.", "Un garçon et une fille de même taille, avec les mêmes taches de rousseur.", "Écouter They're twins", p("l1-5")),
    v("ened1-6", "my granny", "ma mamie", "Une dame âgée à lunettes tricote près de la cheminée.", "Écouter my granny", p("l1-6")),
    v("ened1-7", "my parents", "mes parents", "La maman et le papa font signe depuis le perron.", "Écouter my parents", p("l1-7")),
  ],
  dialogue: {
    title: "La famille MacDonald",
    note: "Granny — « mamie » (on dit souvent ainsi en Écosse). Twins — « jumeaux ».",
    lines: [
      line("fiona", "Hello! Welcome to Edinburgh! I'm Fiona.", "Bonjour ! Bienvenue à Édimbourg ! Je suis Fiona."),
      line("fiona", "This is my family. This is my husband, Ian.", "Voici ma famille. Voici mon mari, Ian."),
      line("ian", "Hello! And these are our twins, Rory and Isla.", "Bonjour ! Et voici nos jumeaux, Rory et Isla."),
      line("rory", "Hi! Isla is my sister. She's very clever.", "Salut ! Isla est ma sœur. Elle est très intelligente."),
      line("isla", "And Rory is my brother. He's very funny!", "Et Rory est mon frère. Il est très drôle !"),
      line("fiona", "And that's Granny. She's in the kitchen.", "Et voilà Mamie. Elle est à la cuisine."),
    ],
    gist: choice("ened1-d1", "Qui sont Rory et Isla ?", [
      ["Frère et sœur, des jumeaux.", true],
      ["Les parents de Fiona.", false],
      ["Les amis de Tom.", false],
    ]),
  },
  grammar: [
    {
      title: "My, your, our",
      paragraphs: [
        "My — « mon, ma, mes », your — « ton, ta, tes / votre », our — « notre, nos ». Ils ne changent jamais : my brother, my sister, my parents. Une seule forme pour tout — plus simple qu'en français !",
        "Pour présenter quelqu'un : This is my brother. Pour plusieurs personnes : These are my parents.",
      ],
      examples: [
        { ru: "This is my mum.", en: "Voici ma maman." },
        { ru: "These are our children.", en: "Voici nos enfants." },
      ],
    },
  ],
  tasks: [
    choice("ened1-t1", "Comment dire « Voici mes parents » ?", [
      ["These are my parents.", true],
      ["This is my parents.", false],
      ["These is my parents.", false],
    ], { skill: "grammar" }),
    listen("ened1-t2", "Écoute. Qui est-ce ?", "This is my sister.", [
      ["Sa sœur.", true],
      ["Son frère.", false],
      ["Sa maman.", false],
    ]),
    match("ened1-t3", "Relie les paires.", [
      ["mum", "maman"],
      ["dad", "papa"],
      ["brother", "frère"],
      ["sister", "sœur"],
    ], { skill: "words" }),
    missing("ened1-t4", "Quelle lettre manque ? (« famille »)", "fam", "ly", "i", ["i", "e", "y"]),
    speak("ened1-t5", "Tell me about your family.", "This is my family. This is my mum and this is my dad.", "Voici ma famille. Voici ma maman et voici mon papa.", { help: "Présente ta famille à voix haute." }),
    choice("ened1-t6", "Comment remercier poliment pour un cadeau ?", [
      ["Thank you! You're very kind.", true],
      ["You're welcome!", false],
      ["Here you are.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "hot-water-bottle",
    itemName: "Bouillotte en tricot",
    itemNameRu: "Hot-water bottle",
    ru: "Hooray! A hot-water bottle!",
    en: "Hourra ! Une bouillotte !",
    a11y: "Une bouillotte en caoutchouc dans une housse en tricot à carreaux rouges et verts, posée sur l'oreiller.",
    image: p("hot-water-bottle"),
    steps: ["À Édimbourg, il fait froid même l'été.", "Fiona apporte une bouillotte en housse tricotée.", "« For cold Scottish nights! » — « Pour les nuits froides d'Écosse ! »", "Murzik la glisse sous la couverture."],
    bridge: "Au dîner, Rory pose cent questions à Murzik.",
  },
};

const edinburgh2: Lesson = {
  id: "en-a1-edinburgh-2",
  level: "A1",
  cityId: "en-edinburgh",
  number: 2,
  title: "I've got a brother — J'ai un frère",
  minutes: 7,
  goals: ["Dire « j'ai » : I've got", "Dire « il a » : he's got", "Demander : Have you got…?"],
  vocabNote: "« J'ai » se dit I have got = I've got. Pour il ou elle — has got : he's got, she's got.",
  vocab: [
    v("ened2-1", "Have you got a brother?", "Tu as un frère ?", "Rory se penche vers Murzik par-dessus la table, curieux.", "Écouter Have you got a brother", p("l2-1")),
    v("ened2-2", "No, I haven't.", "Non.", "Murzik secoue la tête.", "Écouter No, I haven't", p("l2-2")),
    v("ened2-3", "I've got two cousins.", "J'ai deux cousins.", "Une photo : deux jeunes chats gris, un rayé et un tacheté.", "Écouter I've got two cousins", p("l2-3")),
    v("ened2-4", "Have you got a pet?", "Tu as un animal de compagnie ?", "Isla tient un cochon d'Inde dans les bras.", "Écouter Have you got a pet", p("l2-4")),
    v("ened2-5", "Yes, I have. I've got a guinea pig.", "Oui. J'ai un cochon d'Inde.", "Un cochon d'Inde roux grignote une carotte.", "Écouter Yes, I have. I've got a guinea pig", p("l2-5")),
    v("ened2-6", "She's got a dog.", "Elle a un chien.", "Mamie avec un petit chien poilu sur les genoux.", "Écouter She's got a dog", p("l2-6")),
    v("ened2-7", "We haven't got a car.", "Nous n'avons pas de voiture.", "Toute la famille roule à vélo dans la rue.", "Écouter We haven't got a car", p("l2-7")),
  ],
  dialogue: {
    title: "Cent questions",
    note: "Cousin — « cousin » ou « cousine ». Guinea pig — « cochon d'Inde ».",
    lines: [
      line("rory", "Murzik, have you got a brother?", "Murzik, tu as un frère ?"),
      line("murzik", "No, I haven't. But I've got two cousins.", "Non. Mais j'ai deux cousins."),
      line("isla", "Have you got a pet?", "Et tu as un animal de compagnie ?"),
      line("murzik", "I'm a cat! Cats haven't got pets!", "Je suis un chat ! Les chats n'ont pas d'animaux de compagnie !"),
      line("isla", "I've got a guinea pig. And Granny has got a dog.", "J'ai un cochon d'Inde. Et Mamie a un chien."),
      line("rory", "And Dad has got red hair!", "Et Papa a les cheveux roux !"),
    ],
    gist: choice("ened2-d1", "Qu'a Isla ?", [
      ["Un cochon d'Inde.", true],
      ["Un chien.", false],
      ["Un chat.", false],
    ]),
  },
  grammar: [
    {
      title: "Have got / has got",
      paragraphs: [
        "I / you / we / they have got (I've got, you've got). He / she / it has got (he's got, she's got).",
        "La question : Have you got…? Has she got…? La réponse : Yes, I have. / No, I haven't. Yes, she has. / No, she hasn't. La négation : I haven't got, she hasn't got.",
      ],
      examples: [
        { ru: "I've got a sister.", en: "J'ai une sœur." },
        { ru: "Has he got a car? — No, he hasn't.", en: "Il a une voiture ? — Non." },
      ],
    },
  ],
  tasks: [
    choice("ened2-t1", "Comment dire « Elle a un chien » ?", [
      ["She's got a dog.", true],
      ["She have got a dog.", false],
      ["She is a dog.", false],
    ], { skill: "grammar" }),
    listen("ened2-t2", "Écoute. Qu'a la personne qui parle ?", "I've got two sisters.", [
      ["Deux sœurs.", true],
      ["Deux frères.", false],
      ["Une sœur.", false],
    ]),
    match("ened2-t3", "Relie les paires.", [
      ["cousin", "cousin"],
      ["pet", "animal de compagnie"],
      ["dog", "chien"],
      ["car", "voiture"],
    ], { skill: "words" }),
    missing("ened2-t4", "Quelle lettre manque ? (« je n'ai pas »)", "I have", "'t got", "n", ["n", "m", "t"]),
    speak("ened2-t5", "Have you got a brother or a sister?", "Yes, I have. I've got a sister.", "Oui. J'ai une sœur.", { help: "Réponds à voix haute à propos de ta famille." }),
    choice("ened2-t6", "Comment dire « Voici mes parents » ?", [
      ["These are my parents.", true],
      ["This are my parents.", false],
      ["These is my parents.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "heather",
    itemName: "Bruyère en pot",
    itemNameRu: "Heather",
    ru: "Hooray! Heather!",
    en: "Hourra ! De la bruyère !",
    a11y: "Un petit pot en terre cuite avec un plant de bruyère mauve, posé sur le rebord de la fenêtre.",
    image: p("heather"),
    steps: ["Isla déterre un plant de bruyère dans le jardin.", "« Heather is from Scotland, like me! » — « La bruyère vient d'Écosse, comme moi ! »", "Elle la plante dans un pot.", "La bruyère mauve trône sur le rebord de la fenêtre."],
    bridge: "Le matin, Murzik n'arrive pas à retenir qui s'appelle comment. Isla l'aide.",
  },
};

const edinburgh3: Lesson = {
  id: "en-a1-edinburgh-3",
  level: "A1",
  cityId: "en-edinburgh",
  number: 3,
  title: "His name is Rory — Il s'appelle Rory",
  minutes: 7,
  goals: ["Dire « son, sa, leur » : his, her, their", "Dire le nom d'une autre personne", "Ne pas confondre his et her"],
  vocabNote: "His — « son/sa » (pour un homme), her — « son/sa » (pour une femme), their — « leur ». Attention : en français, « son » ou « sa » dépend de la chose possédée ; en anglais, his ou her dépend de la personne qui possède !",
  vocab: [
    v("ened3-1", "His name is Rory.", "Il s'appelle Rory.", "Isla montre son frère, suspendu la tête en bas dans un arbre.", "Écouter His name is Rory", p("l3-1")),
    v("ened3-2", "Her name is Isla.", "Elle s'appelle Isla.", "Rory montre sa sœur avec un livre.", "Écouter Her name is Isla", p("l3-2")),
    v("ened3-3", "Her dog is called Biscuit.", "Son chien s'appelle Biscuit.", "Un petit chien poilu avec un nœud.", "Écouter Her dog is called Biscuit", p("l3-3")),
    v("ened3-4", "What's her name?", "Comment elle s'appelle ?", "Murzik demande à voix basse à Tom comment s'appelle la mamie.", "Écouter What's her name", p("l3-4")),
    v("ened3-5", "Her name is Morag.", "Elle s'appelle Morag.", "Mamie à lunettes fait signe depuis son fauteuil.", "Écouter Her name is Morag", p("l3-5")),
    v("ened3-6", "Our house is old.", "Notre maison est vieille.", "Une maison en pierre grise avec un toit pointu et des cheminées.", "Écouter Our house is old", p("l3-6")),
    v("ened3-7", "Their garden is big.", "Leur jardin est grand.", "Le jardin derrière la maison : pommiers, balançoire, massifs de fleurs.", "Écouter Their garden is big", p("l3-7")),
  ],
  dialogue: {
    title: "Qui est qui",
    note: "Biscuit — « biscuit ». C'est le nom du chien de mamie Morag. Pour leurs animaux, les Anglais disent souvent he ou she, et non it.",
    lines: [
      line("murzik", "Isla, what's your granny's name?", "Isla, comment s'appelle ta mamie ?"),
      line("isla", "Her name is Morag.", "Elle s'appelle Morag."),
      line("murzik", "And what's her dog's name?", "Et comment s'appelle son chien ?"),
      line("isla", "His name is Biscuit!", "Il s'appelle Biscuit !"),
      line("murzik", "Biscuit! That's a funny name.", "Biscuit ! C'est un nom rigolo."),
      line("isla", "And this is our house. Our garden is big!", "Et voici notre maison. Notre jardin est grand !"),
    ],
    gist: choice("ened3-d1", "Comment s'appelle le chien de la mamie ?", [
      ["Biscuit.", true],
      ["Morag.", false],
      ["Rory.", false],
    ]),
  },
  grammar: [
    {
      title: "My, your, his, her, our, their",
      paragraphs: [
        "I → my, you → your, he → his, she → her, it → its, we → our, they → their.",
        "His — si le propriétaire est un homme ou un garçon, her — si c'est une femme ou une fille : Rory and his sister. Isla and her brother. En français, c'est l'inverse : « sa sœur » dépend de « sœur », pas du propriétaire !",
      ],
      examples: [
        { ru: "This is Ian. His hair is red.", en: "Voici Ian. Il a les cheveux roux." },
        { ru: "This is Fiona and her house.", en: "Voici Fiona et sa maison." },
      ],
    },
  ],
  tasks: [
    choice("ened3-t1", "Isla parle de sa mamie : « Son chien est petit ». Comment le dire ?", [
      ["Her dog is small.", true],
      ["His dog is small.", false],
      ["She dog is small.", false],
    ], { skill: "grammar" }),
    listen("ened3-t2", "Écoute. Comment s'appelle-t-il ?", "His name is Ian.", [
      ["Ian.", true],
      ["Rory.", false],
      ["Tom.", false],
    ]),
    match("ened3-t3", "Relie les paires.", [
      ["his", "son/sa (à lui)"],
      ["her", "son/sa (à elle)"],
      ["our", "notre"],
      ["their", "leur"],
    ], { skill: "words" }),
    missing("ened3-t4", "Quelle lettre manque ? (« leur »)", "th", "ir", "e", ["e", "a", "i"]),
    speak("ened3-t5", "What's your friend's name?", "His name is Max.", "Il s'appelle Max.", { help: "Dis à voix haute le nom d'un ami ou d'une amie : his name ou her name." }),
    choice("ened3-t6", "Comment demander « Tu as un frère ? »", [
      ["Have you got a brother?", true],
      ["Are you got a brother?", false],
      ["You have got brother?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo",
    itemName: "Photo de la famille MacDonald",
    itemNameRu: "Family photo",
    ru: "Hooray! A family photo!",
    en: "Hourra ! Une photo de famille !",
    a11y: "Dans un cadre en bois, une photo : toute la famille MacDonald, mamie avec le chien, Murzik et Tom devant la porte de la maison.",
    image: p("photo"),
    steps: ["Tom photographie toute la famille devant la porte.", "Murzik est au milieu, à côté de Biscuit.", "Tom imprime la photo et la met dans un cadre.", "Maintenant Murzik a une famille écossaise !"],
    bridge: "Rory veut jouer avec l'appareil photo de Tom. Mais à qui est cet appareil photo ?",
  },
};

const edinburgh4: Lesson = {
  id: "en-a1-edinburgh-4",
  level: "A1",
  cityId: "en-edinburgh",
  number: 4,
  title: "Tom's camera — L'appareil photo de Tom",
  minutes: 7,
  goals: ["Dire à qui est une chose : Tom's camera", "Demander « à qui ? » : Whose is this?", "Répondre : It's mine, it's yours"],
  vocabNote: "'s après un nom veut dire « à qui » : Tom's camera — l'appareil photo de Tom, Isla's book — le livre d'Isla.",
  vocab: [
    v("ened4-1", "Whose is this?", "À qui est-ce ?", "Rory tient un appareil photo et regarde autour de lui.", "Écouter Whose is this", p("l4-1")),
    v("ened4-2", "It's Tom's camera.", "C'est l'appareil photo de Tom.", "L'appareil photo de Tom avec sa dragonne.", "Écouter It's Tom's camera", p("l4-2")),
    v("ened4-3", "It's mine!", "C'est à moi !", "Tom reprend l'appareil photo en riant.", "Écouter It's mine", p("l4-3")),
    v("ened4-4", "Is it yours?", "C'est à toi ?", "Isla tend une écharpe à Murzik.", "Écouter Is it yours", p("l4-4")),
    v("ened4-5", "Isla's book", "le livre d'Isla", "Un gros livre sur les dragons avec un marque-page.", "Écouter Isla's book", p("l4-5")),
    v("ened4-6", "Granny's glasses", "les lunettes de Mamie", "Des lunettes posées sur le tricot.", "Écouter Granny's glasses", p("l4-6")),
    v("ened4-7", "the children's room", "la chambre des enfants", "Une chambre avec deux lits, des jouets et des livres.", "Écouter the children's room", p("l4-7")),
  ],
  dialogue: {
    title: "À qui est l'appareil photo ?",
    note: "Careful! — « Attention ! » Glasses — « lunettes » (et aussi « verres »).",
    lines: [
      line("rory", "Whose is this? Is it yours, Murzik?", "À qui est-ce ? C'est à toi, Murzik ?"),
      line("murzik", "No, it isn't mine. It's Tom's camera.", "Non, ce n'est pas à moi. C'est l'appareil photo de Tom."),
      line("tom", "Yes, it's mine! Careful, Rory!", "Oui, c'est à moi ! Attention, Rory !"),
      line("isla", "And whose glasses are these?", "Et à qui sont ces lunettes ?"),
      line("fiona", "They're Granny's glasses. Again!", "Ce sont les lunettes de Mamie. Encore !"),
      line("rory", "Granny! Your glasses!", "Mamie ! Tes lunettes !"),
    ],
    gist: choice("ened4-d1", "À qui est l'appareil photo ?", [
      ["À Tom.", true],
      ["À Murzik.", false],
      ["À Rory.", false],
    ]),
  },
  grammar: [
    {
      title: "À qui ? 's et mine, yours",
      paragraphs: [
        "'s après le nom — « de, à » : Tom's camera, Granny's glasses. Le propriétaire vient en premier.",
        "Sans nommer la chose : mine (à moi), yours (à toi), his (à lui), hers (à elle), ours (à nous), theirs (à eux). Whose is this? — It's mine.",
      ],
      examples: [
        { ru: "Whose book is this? — It's Isla's.", en: "À qui est ce livre ? — À Isla." },
        { ru: "Is this yours? — Yes, it's mine.", en: "C'est à toi ? — Oui, c'est à moi." },
      ],
    },
  ],
  tasks: [
    choice("ened4-t1", "Comment dire « le livre d'Isla » ?", [
      ["Isla's book", true],
      ["book Isla", false],
      ["Isla book's", false],
    ], { skill: "grammar" }),
    listen("ened4-t2", "Écoute. À qui est cette chose ?", "It's Fiona's bag.", [
      ["Le sac de Fiona.", true],
      ["Le sac d'Isla.", false],
      ["Le livre de Fiona.", false],
    ]),
    match("ened4-t3", "Relie les paires.", [
      ["mine", "à moi"],
      ["yours", "à toi"],
      ["Whose?", "À qui ?"],
      ["glasses", "lunettes"],
    ], { skill: "words" }),
    spell("ened4-t4", "Assemble le mot « à moi ».", "mine"),
    speak("ened4-t5", "Whose is this phone?", "It's mine!", "C'est à moi !", { help: "Réponds à voix haute que la chose est à toi." }),
    choice("ened4-t6", "Comment dire « Il s'appelle Rory » ?", [
      ["His name is Rory.", true],
      ["Her name is Rory.", false],
      ["He name is Rory.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tray",
    itemName: "Plateau en bois",
    itemNameRu: "Wooden tray",
    ru: "Hooray! A wooden tray!",
    en: "Hourra ! Un plateau en bois !",
    a11y: "Un vieux plateau en bois avec des poignées, dessus une tasse de thé et une assiette de shortbread.",
    image: p("tray"),
    steps: ["Mamie Morag retrouve ses lunettes — sur sa propre tête !", "Tout le monde rit.", "Elle offre à Murzik un vieux plateau en bois.", "« For breakfast in bed! » — « Pour le petit-déjeuner au lit ! »"],
    bridge: "Le soir, Rory et Isla dessinent les portraits de toute la famille — et de Murzik aussi.",
  },
};

const edinburgh5: Lesson = {
  id: "en-a1-edinburgh-5",
  level: "A1",
  cityId: "en-edinburgh",
  number: 5,
  title: "Tall and kind — Grand et gentil",
  minutes: 7,
  goals: ["Décrire l'apparence", "Décrire le caractère", "Dire « il a les yeux bleus »"],
  vocabNote: "Pour l'apparence, on utilise souvent have got : She's got blue eyes. — Elle a les yeux bleus. He's got red hair. — Il a les cheveux roux.",
  vocab: [
    v("ened5-1", "He's tall.", "Il est grand.", "Ian est debout dans l'embrasure de la porte et touche presque le linteau de la tête.", "Écouter He's tall", p("l5-1")),
    v("ened5-2", "She's short.", "Elle est petite.", "Mamie Morag se met sur la pointe des pieds pour atteindre l'étagère.", "Écouter She's short", p("l5-2")),
    v("ened5-3", "He's got red hair.", "Il a les cheveux roux.", "Un portrait au crayon d'Ian, roux et barbu.", "Écouter He's got red hair", p("l5-3")),
    v("ened5-4", "She's got blue eyes.", "Elle a les yeux bleus.", "Un portrait de Fiona avec de grands yeux bleus.", "Écouter She's got blue eyes", p("l5-4")),
    v("ened5-5", "She's kind.", "Elle est gentille.", "Mamie Morag recouvre Biscuit endormi d'un plaid.", "Écouter She's kind", p("l5-5")),
    v("ened5-6", "He's funny.", "Il est drôle.", "Rory, chaussé des énormes bottes de son père, fait le géant.", "Écouter He's funny", p("l5-6")),
    v("ened5-7", "What does he look like?", "À quoi il ressemble ?", "Isla tient une feuille et un crayon, prête à dessiner.", "Écouter What does he look like", p("l5-7")),
  ],
  dialogue: {
    title: "Les portraits",
    note: "Drawing — « dessin ». Whiskers — « moustaches » (du chat).",
    lines: [
      line("isla", "This is my drawing of Dad. He's tall and he's got red hair.", "Voici mon dessin de Papa. Il est grand et il a les cheveux roux."),
      line("murzik", "It's very good! And this is your mum?", "Il est très bien ! Et ça, c'est ta maman ?"),
      line("isla", "Yes. She's got blue eyes. She's kind.", "Oui. Elle a les yeux bleus. Elle est gentille."),
      line("rory", "And this is Murzik! He's small, he's got orange fur and long whiskers!", "Et voici Murzik ! Il est petit, il a un pelage roux et de longues moustaches !"),
      line("murzik", "Ha-ha! And this is Rory. He's very funny!", "Ha-ha ! Et voici Rory. Il est très drôle !"),
    ],
    gist: choice("ened5-d1", "À quoi ressemble le papa sur le dessin ?", [
      ["Grand, avec les cheveux roux.", true],
      ["Petit, avec les yeux bleus.", false],
      ["Tout petit, avec de longues moustaches.", false],
    ]),
  },
  grammar: [
    {
      title: "Décrire : is et has got",
      paragraphs: [
        "Comment est la personne — is : He's tall. She's kind. They're funny.",
        "Ce qu'elle a — has got : He's got red hair. She's got blue eyes. Attention : he's peut vouloir dire he is ou he has — le contexte décide.",
      ],
      examples: [
        { ru: "She's tall and she's got long hair.", en: "Elle est grande et elle a les cheveux longs." },
        { ru: "My brother is funny.", en: "Mon frère est drôle." },
      ],
    },
  ],
  tasks: [
    choice("ened5-t1", "Comment dire « Elle a les yeux bleus » ?", [
      ["She's got blue eyes.", true],
      ["She's blue eyes.", false],
      ["She have blue eyes.", false],
    ], { skill: "grammar" }),
    listen("ened5-t2", "Écoute. Comment est-il ?", "He's short and very funny.", [
      ["Petit et très drôle.", true],
      ["Grand et gentil.", false],
      ["Petit et triste.", false],
    ]),
    match("ened5-t3", "Relie les paires.", [
      ["tall", "grand"],
      ["short", "petit"],
      ["kind", "gentil"],
      ["funny", "drôle"],
    ], { skill: "words" }),
    missing("ened5-t4", "Quelle lettre manque ? (« cheveux »)", "ha", "r", "i", ["i", "e", "a"]),
    speak("ened5-t5", "What does your friend look like?", "She's tall and she's got brown hair.", "Elle est grande et elle a les cheveux châtains.", { help: "Décris un ami ou une amie à voix haute." }),
    choice("ened5-t6", "Comment dire « C'est l'appareil photo de Tom » ?", [
      ["It's Tom's camera.", true],
      ["It's camera Tom.", false],
      ["It's Tom camera's.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "socks",
    itemName: "Chaussettes en laine",
    itemNameRu: "Woolly socks",
    ru: "Hooray! Woolly socks!",
    en: "Hourra ! Des chaussettes en laine !",
    a11y: "Des petites chaussettes en laine à rayures vertes et bleues, accrochées au dossier d'une chaise.",
    image: p("socks"),
    steps: ["Mamie Morag a tricoté toute la soirée.", "Le matin — surprise : des petites chaussettes rayées.", "« Small socks for a small cat! » — « Des petites chaussettes pour un petit chat ! »", "Murzik les enfile aussitôt."],
    bridge: "Pour la première fois, Murzik cherche la salle de bain la nuit — et se perd dans la grande vieille maison.",
  },
};

const edinburgh6: Lesson = {
  id: "en-a1-edinburgh-6",
  level: "A1",
  cityId: "en-edinburgh",
  number: 6,
  title: "Where is the bathroom? — Où est la salle de bain ?",
  minutes: 7,
  goals: ["Nommer les pièces de la maison", "Demander où est une pièce", "Dire upstairs et downstairs"],
  vocabNote: "Upstairs — « en haut », downstairs — « en bas ». The — quand on sait de quoi on parle : the kitchen — la cuisine, celle de la maison.",
  vocab: [
    v("ened6-1", "Where is the bathroom?", "Où est la salle de bain ?", "Murzik en pyjama est dans le couloir sombre avec une bougie.", "Écouter Where is the bathroom", p("l6-1")),
    v("ened6-2", "It's upstairs.", "En haut.", "Une flèche monte l'escalier en bois.", "Écouter It's upstairs", p("l6-2")),
    v("ened6-3", "the kitchen", "la cuisine", "Une cuisine chaleureuse avec une cuisinière et des herbes séchées.", "Écouter the kitchen", p("l6-3")),
    v("ened6-4", "the living room", "le salon", "Un salon avec une cheminée et un grand canapé.", "Écouter the living room", p("l6-4")),
    v("ened6-5", "my bedroom", "ma chambre", "La petite chambre de Murzik avec la bouillotte sur le lit.", "Écouter my bedroom", p("l6-5")),
    v("ened6-6", "It's downstairs.", "En bas.", "Une flèche descend l'escalier.", "Écouter It's downstairs", p("l6-6")),
    v("ened6-7", "next to the kitchen", "à côté de la cuisine", "Une petite porte à côté de celle de la cuisine.", "Écouter next to the kitchen", p("l6-7")),
  ],
  dialogue: {
    title: "La nuit, dans la vieille maison",
    note: "Go back to bed — « retourne au lit ». Tin — « boîte en fer ».",
    lines: [
      line("murzik", "Excuse me… Where is the bathroom?", "Pardon… Où est la salle de bain ?"),
      line("ian", "It's upstairs, next to your bedroom.", "En haut, à côté de ta chambre."),
      line("murzik", "Thank you! And… where is the kitchen?", "Merci ! Et… où est la cuisine ?"),
      line("ian", "The kitchen? It's downstairs. Why?", "La cuisine ? En bas. Pourquoi ?"),
      line("murzik", "I'm hungry…", "J'ai faim…"),
      line("ian", "Ha-ha! Come on. There's shortbread in the tin.", "Ha-ha ! Viens. Il y a du shortbread dans la boîte."),
    ],
    gist: choice("ened6-d1", "Pourquoi Murzik demande-t-il où est la cuisine ?", [
      ["Il a faim.", true],
      ["Il cherche Tom.", false],
      ["Il veut prendre le thé avec Mamie.", false],
    ]),
  },
  grammar: [
    {
      title: "A ou the ?",
      paragraphs: [
        "A — « un, une, n'importe lequel » : a house, a room. The — « le, la, celui dont on parle » : the kitchen in our house, the bathroom upstairs. C'est un peu comme la différence entre « un » et « le » en français !",
        "Si la maison a une seule cuisine, c'est the kitchen. Si tu parles d'une cuisine en général, pour la première fois — a kitchen.",
      ],
      examples: [
        { ru: "It's a big house. The kitchen is downstairs.", en: "C'est une grande maison. La cuisine est en bas." },
        { ru: "Where is the bathroom?", en: "Où est la salle de bain ?" },
      ],
    },
  ],
  tasks: [
    choice("ened6-t1", "La maison a une seule salle de bain. Comment demander où elle est ?", [
      ["Where is the bathroom?", true],
      ["Where is a bathroom?", false],
      ["Where bathroom?", false],
    ], { skill: "grammar" }),
    listen("ened6-t2", "Écoute. Où est la cuisine ?", "The kitchen is downstairs.", [
      ["En bas.", true],
      ["En haut.", false],
      ["À côté de la chambre.", false],
    ]),
    match("ened6-t3", "Relie les paires.", [
      ["kitchen", "cuisine"],
      ["bathroom", "salle de bain"],
      ["bedroom", "chambre"],
      ["living room", "salon"],
    ], { skill: "words" }),
    spell("ened6-t4", "Assemble le mot « cuisine ».", "kitchen"),
    speak("ened6-t5", "Where is your bedroom?", "My bedroom is upstairs.", "Ma chambre est en haut.", { help: "Réponds à voix haute : où est ta chambre ?" }),
    choice("ened6-t6", "Comment dire « Il a les cheveux roux » ?", [
      ["He's got red hair.", true],
      ["He's red hair.", false],
      ["He have red hair.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "shortbread",
    itemName: "Boîte de shortbread",
    itemNameRu: "Shortbread tin",
    ru: "Hooray! A tin of shortbread!",
    en: "Hourra ! Une boîte de shortbread !",
    a11y: "Une boîte ronde en fer à carreaux, remplie de bâtonnets de shortbread.",
    image: p("shortbread"),
    steps: ["Ian et Murzik mangent des biscuits en douce dans la cuisine.", "« Our secret! » — chuchote Ian. « Notre secret ! »", "Le matin, Murzik trouve une boîte entière près de son lit.", "Secret découvert : mamie Morag avait tout entendu !"],
    bridge: "Dernière soirée à Édimbourg. Mamie Morag appelle Murzik : « I've got something for you ».",
  },
};

const edinburgh7: Lesson = {
  id: "en-a1-edinburgh-7",
  level: "A1",
  cityId: "en-edinburgh",
  number: 7,
  title: "Goodbye, Edinburgh! — Au revoir, Édimbourg !",
  minutes: 8,
  goals: ["Parler de ta famille", "Décrire une personne", "Revoir tous les mots d'Édimbourg"],
  vocabNote: "On revoit : have got / has got, my / his / her / our / their, 's, the.",
  vocab: [
    v("ened7-1", "I've got something for you.", "J'ai quelque chose pour toi.", "Mamie Morag sort un paquet d'une malle.", "Écouter I've got something for you", p("l7-1")),
    v("ened7-2", "It's from your book.", "Ça vient de ton livre.", "Une page jaunie et pliée dans les mains de la mamie.", "Écouter It's from your book", p("l7-2")),
    v("ened7-3", "Mrs Hope is my old friend.", "Mme Hope est ma vieille amie.", "Une vieille photo : deux jeunes filles rient au bord de la mer.", "Écouter Mrs Hope is my old friend", p("l7-3")),
    v("ened7-4", "a tartan blanket", "un plaid écossais", "Un plaid en laine chaude à carreaux rouges et verts.", "Écouter a tartan blanket", p("l7-4")),
    v("ened7-5", "You're part of our family now.", "Tu fais partie de la famille maintenant.", "Toute la famille serre Murzik dans ses bras.", "Écouter You're part of our family now", p("l7-5")),
    v("ened7-6", "Don't forget us!", "Ne nous oublie pas !", "Isla tend son dessin à Murzik.", "Écouter Don't forget us", p("l7-6")),
    v("ened7-7", "Write to us!", "Écris-nous !", "Rory agite une enveloppe.", "Écouter Write to us", p("l7-7")),
  ],
  dialogue: {
    title: "La quatrième page",
    note: "Ireland — l'Irlande. Dublin — la capitale de l'Irlande.",
    lines: [
      line("murzik", "Granny Morag, is this a page from Mrs Hope's book?", "Mamie Morag, c'est une page du livre de Mme Hope ?"),
      line("ian", "Yes, it is. Granny and Mrs Hope are old friends.", "Oui. Mamie et Mme Hope sont de vieilles amies."),
      line("fiona", "And this tartan blanket is for your café.", "Et ce plaid écossais est pour ton café."),
      line("isla", "You're part of our family now, Murzik!", "Tu fais partie de la famille maintenant, Murzik !"),
      line("rory", "Don't forget us! Write to us!", "Ne nous oublie pas ! Écris-nous !"),
      line("murzik", "I won't forget you! Where's the next page?", "Je ne vous oublierai pas ! Où est la page suivante ?"),
      line("ian", "In Dublin. Seán works in a café there. His gran is Mrs Hope's friend.", "À Dublin. Seán travaille dans un café là-bas. Sa mamie est une amie de Mme Hope."),
    ],
    gist: choice("ened7-d1", "Où vont Murzik et Tom ?", [
      ["À Dublin, chez Seán.", true],
      ["À Londres, chez Mme Hope.", false],
      ["À Bath, chez Mme Green.", false],
    ]),
  },
  grammar: [
    {
      title: "La famille : tout ensemble",
      paragraphs: [
        "Qui est dans la famille : I've got a brother and a sister. Comment ils s'appellent : His name is… Her name is… Comment ils sont : He's tall. She's got blue eyes.",
        "À qui : Granny's dog, Tom's camera. Où : The kitchen is downstairs.",
      ],
      examples: [
        { ru: "I've got a sister. Her name is Anna. She's very kind.", en: "J'ai une sœur. Elle s'appelle Anna. Elle est très gentille." },
        { ru: "Our house is old, but our kitchen is new.", en: "Notre maison est vieille, mais notre cuisine est neuve." },
      ],
    },
  ],
  tasks: [
    listen("ened7-t1", "Examen d'écoute. Que raconte Isla ?", "I've got a brother. His name is Rory. He's funny. We've got a big house and a small dog.", [
      ["Elle a un frère, Rory, il est drôle ; ils ont une grande maison et un petit chien.", true],
      ["Elle a une sœur, Rory ; ils ont une petite maison et un grand chien.", false],
      ["Elle a un frère, Ian ; ils n'ont pas de chien.", false],
    ]),
    choice("ened7-t2", "Choisis la phrase correcte.", [
      ["She's got a brother. His name is Tom.", true],
      ["She have got a brother. Her name is Tom.", false],
      ["She's got a brother. She name is Tom.", false],
    ], { skill: "grammar" }),
    match("ened7-t3", "Relie les paires.", [
      ["Don't forget us!", "Ne nous oublie pas !"],
      ["Write to us!", "Écris-nous !"],
      ["blanket", "plaid"],
      ["part of our family", "membre de notre famille"],
    ], { skill: "words" }),
    spell("ened7-t4", "Assemble le mot « plaid ».", "blanket"),
    speak("ened7-t5", "Tell me about your family.", "I've got a mum, a dad and a brother. My brother is tall.", "J'ai une maman, un papa et un frère. Mon frère est grand.", { help: "Parle de ta famille à voix haute." }),
    script("ened7-t6", "Revois tout Édimbourg. Termine les conversations.", [
      { speaker: "Rory", text: "Have you got a sister?" },
      { speaker: "Toi", answer: "Yes, I have. Her name is Anna.", options: ["Yes, I have. Her name is Anna.", "Yes, I have. His name is Anna.", "Yes, I am. Her name is Anna."] },
      { speaker: "Isla", text: "What does she look like?" },
      { speaker: "Toi", answer: "She's tall and she's got brown hair.", options: ["She's tall and she's got brown hair.", "She tall and she brown hair.", "She's got tall."] },
      { speaker: "Ian", text: "Whose is this bag?" },
      { speaker: "Toi", answer: "It's mine!", options: ["It's mine!", "It's my!", "It's me!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tartan",
    itemName: "Plaid écossais",
    itemNameRu: "Tartan blanket",
    ru: "Hooray! A tartan blanket!",
    en: "Hourra ! Un plaid écossais !",
    a11y: "Un plaid en laine chaude à carreaux écossais rouges et verts, plié sur le fauteuil.",
    image: p("tartan"),
    steps: ["Fiona offre à Murzik un plaid à carreaux écossais.", "« For cold days in your café. » — « Pour les jours froids dans ton café. »", "Murzik s'y enveloppe jusqu'aux oreilles.", "Il fait chaud, comme dans la famille MacDonald."],
    bridge: "La page suivante est à Dublin, chez Seán.",
  },
};

const story: CityStory = {
  home: {
    name: "Chambre dans la maison des MacDonald",
    nameRu: "Murzik's room in Edinburgh",
    image: p("home"),
    a11y: "Une petite chambre vide sous le toit de la maison en pierre grise. Par la fenêtre, on voit le rocher avec le château. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "tartan",
  welcomeRu: "Hello, Edinburgh!",
  welcomeEn: "Bonjour, Édimbourg !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom à Édimbourg : un château gris sur un haut rocher au-dessus de la vieille ville. Vent et petite pluie.",
  departureImage: p("departure"),
  departureA11y: "Toute la famille MacDonald fait signe au revoir à la gare ; mamie Morag tient le petit chien Biscuit dans ses bras.",
  finale: [
    {
      image: p("page"),
      a11y: "Gros plan : la quatrième page du livre de recettes, la recette du shortbread. Dans la marge, un mot écrit à la main.",
      lines: [
        { en: "Murzik colle la quatrième page. Dans la marge — un mot de Mme Hope :" },
        { ru: "At my café, children always got a biscuit for free.", en: "Dans mon café, les enfants recevaient toujours un biscuit gratuit." },
        { en: "Murzik pense à Rory et Isla et décide : « Oui. Chez moi aussi »." },
      ],
    },
    {
      image: p("tartan"),
      a11y: "Murzik fait le tour de sa chambre dans la maison des MacDonald, meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambre à Édimbourg. Tom la photographie pour le journal." },
        { en: "Pour son futur café, il emporte le plaid écossais." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, Tom fête ça avec lui.",
      lines: [
        { ru: "Edinburgh complete!", en: "Édimbourg terminé !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "La famille MacDonald fait signe de la main pour dire au revoir.",
      lines: [
        { ru: "Goodbye, MacDonalds!", en: "Au revoir, les MacDonald !" },
        { ru: "Next stop: Dublin!", en: "Prochain arrêt : Dublin !" },
      ],
    },
    {
      image: p("ferry"),
      a11y: "Un grand ferry traverse la mer d'Irlande grise, des mouettes volent au-dessus.",
      lines: [{ ru: "Edinburgh → Dublin", en: "Édimbourg → Dublin" }],
    },
    {
      image: pic("en/dublin/arrival"),
      a11y: "Murzik et Tom à Dublin : des portes de maisons multicolores, un pont sur la rivière, un violon joue quelque part.",
      lines: [
        { ru: "Hello, Dublin!", en: "Bonjour, Dublin !" },
        { ru: "Listen — music!", en: "Écoute — de la musique !" },
      ],
    },
  ],
};

export const enEdinburghFr = {
  id: "en-edinburgh",
  name: "Édimbourg",
  nameEn: "Edinburgh",
  lessons: [edinburgh1, edinburgh2, edinburgh3, edinburgh4, edinburgh5, edinburgh6, edinburgh7],
  story,
};
