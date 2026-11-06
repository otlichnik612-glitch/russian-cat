import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Konya · “Clothes and feeling unwell” · warm clothes, colours, trying things on, “I feel ill”, at the doctor's, at the chemist's, “I feel better”. French version. */

const p = (name: string) => pic(`tr/konya/${name}`);

const konya1: Lesson = {
  id: "tr-a1-konya-1",
  level: "A1",
  cityId: "tr-konya",
  number: 1,
  title: "Des vêtements chauds",
  minutes: 7,
  goals: ["Nommer les vêtements d'hiver", "Dire ce dont on a besoin : lazım, gerek", "Acheter des vêtements chauds"],
  vocabNote: "Konya se trouve sur un haut plateau. En hiver, il y a de la neige et du gel — rien à voir avec la côte.",
  vocab: [
    v("trko1-1", "Hava çok soğuk.", "Il fait très froid.", "Murzik grelotte dans une rue enneigée, son souffle fait de la buée.", "Écouter Hava çok soğuk", p("l1-1")),
    v("trko1-2", "Kalın bir mont lazım.", "J'ai besoin d'un manteau chaud.", "Tom montre un manteau épais dans une vitrine.", "Écouter Kalın bir mont lazım", p("l1-2")),
    v("trko1-3", "atkı", "écharpe", "Une longue écharpe tricotée.", "Écouter atkı", p("l1-3")),
    v("trko1-4", "bere", "bonnet", "Un bonnet tricoté à pompon.", "Écouter bere", p("l1-4")),
    v("trko1-5", "eldiven", "gants", "Une paire de gants chauds.", "Écouter eldiven", p("l1-5")),
    v("trko1-6", "kazak", "pull", "Un pull épais à motifs.", "Écouter kazak", p("l1-6")),
    v("trko1-7", "botlar", "bottes", "Une paire de bottes chaudes fourrées.", "Écouter botlar", p("l1-7")),
  ],
  dialogue: {
    title: "Le magasin de vêtements chauds",
    note: "Kış veut dire « hiver ». Kalın veut dire « épais, chaud » (pour les vêtements). En turc, on dit d'habitude eldiven au singulier, même pour une paire de gants.",
    lines: [
      line("murzik", "Brr! Hava çok soğuk!", "Brrr ! Qu'est-ce qu'il fait froid !"),
      line("tom", "Evet. Kalın bir mont lazım.", "Oui. J'ai besoin d'un manteau chaud."),
      line("seller", "Hoş geldiniz! Ne lazım?", "Bienvenue ! De quoi avez-vous besoin ?"),
      line("murzik", "Bana bir atkı, bir bere ve eldiven lazım.", "J'ai besoin d'une écharpe, d'un bonnet et de gants."),
      line("seller", "Kazak da gerek mi?", "Vous avez aussi besoin d'un pull ?"),
      line("tom", "Evet, bana kalın bir kazak lazım. Ve botlar!", "Oui, j'ai besoin d'un pull épais. Et de bottes !"),
      line("seller", "Buyurun. Konya'da kış çok soğuk!", "Voilà. L'hiver à Konya est très froid !"),
    ],
    gist: choice("trko1-d1", "De quoi Murzik a-t-il besoin ?", [
      ["D'une écharpe, d'un bonnet et de gants.", true],
      ["D'un pull et de bottes.", false],
      ["Rien.", false],
    ]),
  },
  grammar: [
    {
      title: "Avoir besoin : lazım, gerek",
      paragraphs: [
        "« J'ai besoin de », c'est bana … lazım — mot à mot « à moi … est nécessaire » : Bana bir atkı lazım. — J'ai besoin d'une écharpe. Bana veut dire « à moi », sana « à toi ».",
        "Gerek veut dire la même chose : Kazak gerek mi? — Tu as besoin d'un pull ? Lazım ne change jamais, quoi qu'il y ait devant.",
      ],
      examples: [
        { ru: "Bana sıcak bir kazak lazım.", en: "J'ai besoin d'un pull chaud." },
        { ru: "Sana eldiven gerek mi?", en: "Tu as besoin de gants ?" },
      ],
    },
  ],
  tasks: [
    choice("trko1-t1", "Comment dit-on « J'ai besoin d'un bonnet » ?", [
      ["Bana bir bere lazım.", true],
      ["Ben bir bere lazım.", false],
      ["Bana bir bere lazımım.", false],
    ], { skill: "grammar" }),
    listen("trko1-t2", "Écoute. De quoi Tom a-t-il besoin ?", "Bana kalın bir kazak lazım.", [
      ["D'un pull épais.", true],
      ["D'une écharpe.", false],
      ["De gants.", false],
    ]),
    match("trko1-t3", "Associe les paires.", [
      ["atkı", "écharpe"],
      ["bere", "bonnet"],
      ["eldiven", "gants"],
      ["kazak", "pull"],
    ], { skill: "words" }),
    missing("trko1-t4", "Quelle lettre manque ? (« écharpe »)", "atk", "", "ı", ["ı", "i", "a"]),
    speak("trko1-t5", "Kışın ne lazım?", "Kışın kalın bir mont ve eldiven lazım.", "En hiver, on a besoin d'un manteau chaud et de gants.", { help: "Dis à voix haute ce dont tu as besoin en hiver." }),
    choice("trko1-t6", "Comment dit-on « Je n'oublierai jamais » ?", [
      ["Hiç unutmayacağım.", true],
      ["Hiç unutuyorum.", false],
      ["Hiç unuttum.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "corap",
    itemName: "Chaussettes en laine",
    itemNameRu: "Yün çorap",
    ru: "Yaşasın! Yün çoraplar!",
    en: "Hourra ! Des chaussettes en laine !",
    a11y: "Une paire d'épaisses chaussettes en laine à motifs — minuscules, juste à la taille des pattes de Murzik.",
    image: p("corap"),
    steps: ["La vendeuse sort de toutes petites chaussettes.", "« Hediye! Tam kedi boyu! » — « Un cadeau ! Taille chat ! »", "Murzik les enfile.", "Bien au chaud !"],
    bridge: "Il y a tant de choses colorées sur les étagères ! « Quelle couleur tu vas choisir ? » demande Tom.",
  },
};

const konya2: Lesson = {
  id: "tr-a1-konya-2",
  level: "A1",
  cityId: "tr-konya",
  number: 2,
  title: "De quelle couleur ?",
  minutes: 7,
  goals: ["Nommer les couleurs principales", "Demander de quelle couleur est quelque chose", "Dire sa couleur préférée"],
  vocabNote: "Turkuaz veut dire « turquoise ». Et le mot français « turquoise » veut dire justement « la pierre turque » !",
  vocab: [
    v("trko2-1", "Ne renk?", "De quelle couleur ?", "Tom montre une écharpe d'un air interrogateur.", "Écouter Ne renk", p("l2-1")),
    v("trko2-2", "kırmızı", "rouge", "Une écharpe rouge.", "Écouter kırmızı", p("l2-2")),
    v("trko2-3", "mavi", "bleu", "Un bonnet bleu.", "Écouter mavi", p("l2-3")),
    v("trko2-4", "yeşil", "vert", "Le manteau vert de Tom.", "Écouter yeşil", p("l2-4")),
    v("trko2-5", "sarı", "jaune", "Des gants jaunes.", "Écouter sarı", p("l2-5")),
    v("trko2-6", "siyah, beyaz", "noir, blanc", "Un gant noir et un gant blanc côte à côte.", "Écouter siyah, beyaz", p("l2-6")),
    v("trko2-7", "turuncu", "orange", "Murzik avec son écharpe orange sur fond de neige.", "Écouter turuncu", p("l2-7")),
  ],
  dialogue: {
    title: "Un magasin plein de couleurs",
    note: "Benim gibi — « comme moi ». Senin montun gibi — « comme ton manteau ». Kar veut dire « neige ».",
    lines: [
      line("tom", "Murzik, bu atkı ne renk?", "Murzik, de quelle couleur est cette écharpe ?"),
      line("murzik", "Turuncu! Benim gibi!", "Orange ! Comme moi !"),
      line("tom", "Hangi bere? Kırmızı mı, mavi mi?", "Quel bonnet ? Rouge ou bleu ?"),
      line("murzik", "Mavi… Hayır, yeşil! Senin montun gibi.", "Bleu… Non, vert ! Comme ton manteau."),
      line("seller", "Sarı, siyah ve beyaz eldivenlerimiz var.", "On a des gants jaunes, noirs et blancs."),
      line("murzik", "Beyaz eldiven, lütfen. Kar gibi!", "Des gants blancs, s'il vous plaît. Comme la neige !"),
      line("tom", "Mevlana'nın kubbesi turkuaz. Çok güzel!", "Et la coupole du musée Mevlana est turquoise. Elle est magnifique !"),
    ],
    gist: choice("trko2-d1", "Quel bonnet Murzik choisit-il ?", [
      ["Le vert.", true],
      ["Le bleu.", false],
      ["Le rouge.", false],
    ]),
  },
  grammar: [
    {
      title: "La couleur d'abord",
      paragraphs: [
        "Contrairement au français, la couleur se met avant le nom et ne change jamais : kırmızı bir atkı — une écharpe rouge, beyaz eldivenler — des gants blancs.",
        "La question : Ne renk? ou Hangi renk? — De quelle couleur ? La réponse, c'est juste la couleur : Mavi.",
      ],
      examples: [
        { ru: "Bu atkı ne renk? — Kırmızı.", en: "De quelle couleur est cette écharpe ? — Rouge." },
        { ru: "Yeşil bir bere istiyorum.", en: "Je voudrais un bonnet vert." },
      ],
    },
  ],
  tasks: [
    listen("trko2-t1", "Écoute. De quelle couleur est l'écharpe ?", "Atkım kırmızı.", [
      ["Rouge.", true],
      ["Bleus.", false],
      ["Jaune.", false],
    ]),
    match("trko2-t2", "Associe les paires.", [
      ["kırmızı", "rouge"],
      ["mavi", "bleu"],
      ["yeşil", "vert"],
      ["sarı", "jaune"],
    ], { skill: "words" }),
    choice("trko2-t3", "Comment dit-on « des gants blancs » ?", [
      ["beyaz eldivenler", true],
      ["eldivenler beyaz bir", false],
      ["beyazlar eldiven", false],
    ], { skill: "grammar" }),
    spell("trko2-t4", "Épelle le mot « orange » (la couleur).", "turuncu"),
    speak("trko2-t5", "En sevdiğin renk ne?", "En sevdiğim renk mavi.", "Ma couleur préférée, c'est le bleu.", { help: "Dis ta couleur préférée à voix haute." }),
    choice("trko2-t6", "Comment dit-on « J'ai besoin d'une écharpe » ?", [
      ["Bana bir atkı lazım.", true],
      ["Bana bir atkı var.", false],
      ["Ben atkı lazım.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "dolap",
    itemName: "Armoire peinte",
    itemNameRu: "Dolap",
    ru: "Yaşasın! Renkli bir dolap!",
    en: "Hourra ! Une armoire peinte !",
    a11y: "Une petite armoire en bois peinte de fleurs turquoise et rouges. Une écharpe orange pend à sa porte.",
    image: p("dolap"),
    steps: ["La propriétaire leur montre une vieille armoire peinte.", "«Bu dolap senin olsun!» — « Que cette armoire soit à toi ! »", "Murzik y range ses nouvelles affaires.", "Chaque couleur à sa place !"],
    bridge: "Dans le magasin d'à côté, Tom repère un autre pull : « Je peux essayer celui-ci ? »",
  },
};

const konya3: Lesson = {
  id: "tr-a1-konya-3",
  level: "A1",
  cityId: "tr-konya",
  number: 3,
  title: "Ça me va ?",
  minutes: 7,
  goals: ["Demander à essayer quelque chose", "Demander si quelque chose nous va", "Demander une taille plus grande ou plus petite : daha"],
  vocabNote: "Beden veut dire « taille (de vêtement) » : küçük (S), orta (M), büyük (L).",
  vocab: [
    v("trko3-1", "Deneyebilir miyim?", "Je peux l'essayer ?", "Tom tient un pull et regarde la vendeuse.", "Écouter Deneyebilir miyim", p("l3-1")),
    v("trko3-2", "Kabin nerede?", "Où est la cabine d'essayage ?", "Tom regarde autour de lui dans le magasin ; au fond, une cabine avec un rideau.", "Écouter Kabin nerede", p("l3-2")),
    v("trko3-3", "Yakıştı mı?", "Ça me va ?", "Tom tourne devant le miroir avec son nouveau pull.", "Écouter Yakıştı mı", p("l3-3")),
    v("trko3-4", "Çok yakıştı!", "Ça te va très bien !", "Murzik lève le pouce, les yeux brillants.", "Écouter Çok yakıştı", p("l3-4")),
    v("trko3-5", "Biraz büyük.", "Il est un peu grand.", "Les manches du pull descendent plus bas que les doigts de Tom.", "Écouter Biraz büyük", p("l3-5")),
    v("trko3-6", "Daha küçük var mı?", "Vous avez plus petit ?", "Tom montre « plus petit » à la vendeuse avec ses doigts.", "Écouter Daha küçük var mı", p("l3-6")),
    v("trko3-7", "Hangi beden?", "Quelle taille ?", "La vendeuse tient trois pulls de tailles différentes.", "Écouter Hangi beden", p("l3-7")),
  ],
  dialogue: {
    title: "L'essayage",
    note: "Orta veut dire « moyen ». Oldu — « c'est devenu, ça va ».",
    lines: [
      line("tom", "Bu kazağı deneyebilir miyim?", "Je peux essayer ce pull ?"),
      line("seller", "Tabii. Kabin orada.", "Bien sûr. La cabine d'essayage est là-bas."),
      line("tom", "Murzik, yakıştı mı?", "Murzik, ça me va ?"),
      line("murzik", "Renk çok yakıştı! Ama biraz büyük.", "La couleur te va très bien ! Mais il est un peu grand."),
      line("tom", "Daha küçük var mı?", "Vous avez plus petit ?"),
      line("seller", "Hangi beden? Orta mı?", "Quelle taille ? M ?"),
      line("tom", "Evet, orta lütfen.", "Oui, M, s'il vous plaît."),
      line("murzik", "Şimdi çok güzel oldu!", "Maintenant, il est parfait !"),
    ],
    gist: choice("trko3-d1", "Pourquoi le premier pull n'allait-il pas à Tom ?", [
      ["Il était un peu grand.", true],
      ["Ce n'était pas la bonne couleur.", false],
      ["Il était trop cher.", false],
    ]),
  },
  grammar: [
    {
      title: "Plus grand, plus petit : daha",
      paragraphs: [
        "Le français met « plus » devant l'adjectif, et le turc aussi met daha devant le mot : daha küçük — plus petit, daha büyük — plus grand, daha güzel — plus beau.",
        "« Que » est la terminaison -den / -dan sur ce avec quoi on compare : Bu kazak o kazaktan daha güzel. — Ce pull est plus beau que celui-là.",
      ],
      examples: [
        { ru: "Daha büyük var mı?", en: "Vous avez plus grand ?" },
        { ru: "Mavi kazak daha güzel.", en: "Le pull bleu est plus beau." },
      ],
    },
  ],
  tasks: [
    choice("trko3-t1", "Comment demander « Vous avez plus petit ? »", [
      ["Daha küçük var mı?", true],
      ["Çok küçük var mı?", false],
      ["Küçük daha mı?", false],
    ], { skill: "grammar" }),
    listen("trko3-t2", "Écoute. Qu'est-ce qui ne va pas ?", "Biraz küçük.", [
      ["Il est un peu petit.", true],
      ["Il est un peu grand.", false],
      ["Ce n'est pas la bonne couleur.", false],
    ]),
    match("trko3-t3", "Associe les paires.", [
      ["kabin", "cabine d'essayage"],
      ["beden", "taille"],
      ["denemek", "essayer (un vêtement)"],
      ["orta", "moyen, M"],
    ], { skill: "words" }),
    missing("trko3-t4", "Quelle lettre manque ? (« Ça te va très bien ! »)", "Çok yakı", "tı!", "ş", ["ş", "s", "z"]),
    speak("trko3-t5", "Bu kazak yakıştı mı?", "Çok yakıştı! Ama biraz büyük.", "Ça te va très bien ! Mais il est un peu grand.", { help: "Réponds à voix haute à ton ami." }),
    listen("trko3-t6", "Souviens-toi des couleurs. De quelle couleur est-ce ?", "Turuncu.", [
      ["Orange.", true],
      ["Jaune.", false],
      ["Rouge.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "aski",
    itemName: "Portemanteau",
    itemNameRu: "Askı",
    ru: "Yaşasın! Bir askı!",
    en: "Hourra ! Un portemanteau !",
    a11y: "Un portemanteau en bois près de la porte, avec le nouveau pull de Tom, l'écharpe et le bonnet de Murzik.",
    image: p("aski"),
    steps: ["Tom installe un portemanteau en bois près de la porte.", "Il y accroche son nouveau pull.", "Murzik y accroche son écharpe et son bonnet.", "L'entrée est prête pour l'hiver !"],
    bridge: "Dans la nuit, Murzik se réveille : il a mal à la tête, son nez est chaud…",
  },
};

const konya4: Lesson = {
  id: "tr-a1-konya-4",
  level: "A1",
  cityId: "tr-konya",
  number: 4,
  title: "Je ne me sens pas bien",
  minutes: 7,
  goals: ["Dire qu'on ne se sent pas bien", "Dire où on a mal", "Demander « où as-tu mal ? »"],
  vocabNote: "Ağrımak veut dire « faire mal ». Le turc dit « ma tête fait mal » : Başım ağrıyor — j'ai mal à la tête.",
  vocab: [
    v("trko4-1", "Kendimi iyi hissetmiyorum.", "Je ne me sens pas bien.", "Murzik est couché dans son lit, tout pâle, les oreilles basses.", "Écouter Kendimi iyi hissetmiyorum", p("l4-1")),
    v("trko4-2", "Başım ağrıyor.", "J'ai mal à la tête.", "Murzik se tient la tête entre les pattes, de petites étoiles au-dessus de lui.", "Écouter Başım ağrıyor", p("l4-2")),
    v("trko4-3", "Boğazım ağrıyor.", "J'ai mal à la gorge.", "Murzik se tient la gorge, une écharpe autour du cou.", "Écouter Boğazım ağrıyor", p("l4-3")),
    v("trko4-4", "Ateşim var.", "J'ai de la fièvre.", "Un thermomètre dans la bouche de Murzik, les joues rouges.", "Écouter Ateşim var", p("l4-4")),
    v("trko4-5", "Öksürüyorum.", "Je tousse.", "Murzik tousse dans sa patte.", "Écouter Öksürüyorum", p("l4-5")),
    v("trko4-6", "Burnum akıyor.", "J'ai le nez qui coule.", "Murzik, le nez rouge, tient un mouchoir.", "Écouter Burnum akıyor", p("l4-6")),
    v("trko4-7", "Neren ağrıyor?", "Où as-tu mal ?", "Tom se penche, inquiet, sur le lit de Murzik.", "Écouter Neren ağrıyor", p("l4-7")),
  ],
  dialogue: {
    title: "Dans la nuit",
    note: "Ne oldu? — « Qu'est-ce qui se passe ? ». Doktora — « chez le médecin ».",
    lines: [
      line("murzik", "Tom… Kendimi iyi hissetmiyorum.", "Tom… Je ne me sens pas bien."),
      line("tom", "Ne oldu? Neren ağrıyor?", "Qu'est-ce qui se passe ? Où as-tu mal ?"),
      line("murzik", "Başım ağrıyor. Boğazım da ağrıyor.", "J'ai mal à la tête. Et à la gorge."),
      line("tom", "Ateşin var mı? Ah, evet, ateşin var!", "Tu as de la fièvre ? Oh oui, tu en as !"),
      line("murzik", "Öksürüyorum… ve burnum akıyor.", "Je tousse… et j'ai le nez qui coule."),
      line("tom", "Yarın sabah doktora gidelim.", "Allons chez le médecin demain matin."),
    ],
    gist: choice("trko4-d1", "Où a-t-il mal ?", [
      ["À la tête et à la gorge.", true],
      ["Au ventre.", false],
      ["À la patte.", false],
    ]),
  },
  grammar: [
    {
      title: "J'ai mal : Başım ağrıyor",
      paragraphs: [
        "« J'ai mal à … », c'est la partie du corps avec la terminaison « mon » + ağrıyor : baş-ım ağrıyor (ma tête — j'ai mal à la tête), boğaz-ım ağrıyor (ma gorge), karn-ım ağrıyor (mon ventre).",
        "Pour demander à un ami : Neren ağrıyor? — Où as-tu mal ? Poliment : Nereniz ağrıyor?",
      ],
      examples: [
        { ru: "Karnım ağrıyor.", en: "J'ai mal au ventre." },
        { ru: "Ateşin var mı?", en: "Tu as de la fièvre ?" },
      ],
    },
  ],
  tasks: [
    listen("trko4-t1", "Écoute. Où a-t-il mal ?", "Karnım ağrıyor.", [
      ["Au ventre.", true],
      ["À la tête.", false],
      ["À la gorge.", false],
    ]),
    choice("trko4-t2", "Comment dit-on « J'ai mal à la gorge » ?", [
      ["Boğazım ağrıyor.", true],
      ["Boğaz ağrıyorum.", false],
      ["Benim boğaz ağrı.", false],
    ], { skill: "grammar" }),
    match("trko4-t3", "Associe les paires.", [
      ["baş", "tête"],
      ["boğaz", "gorge"],
      ["karın", "ventre"],
      ["ateş", "fièvre"],
    ], { skill: "words" }),
    missing("trko4-t4", "Quelle lettre manque ? (« ça fait mal »)", "a", "rıyor", "ğ", ["ğ", "g", "y"]),
    speak("trko4-t5", "Neren ağrıyor?", "Başım ağrıyor ve ateşim var.", "J'ai mal à la tête et j'ai de la fièvre.", { help: "Réponds à voix haute comme si tu étais malade." }),
    choice("trko4-t6", "Comment demander « Je peux l'essayer ? »", [
      ["Deneyebilir miyim?", true],
      ["Deniyor muyum?", false],
      ["Denedim mi?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "termofor",
    itemName: "Bouillotte",
    itemNameRu: "Sıcak su torbası",
    ru: "Yaşasın! Bir sıcak su torbası!",
    en: "Hourra ! Une bouillotte !",
    a11y: "Murzik est couché sous une couverture, serrant une bouillotte chaude dans une housse tricotée.",
    image: p("termofor"),
    steps: ["Tom remplit une bouillotte d'eau chaude.", "Il lui met une housse tricotée.", "Murzik la serre contre lui.", "Il se sent un peu mieux."],
    bridge: "Le matin — direction le cabinet du docteur Zehra.",
  },
};

const konya5: Lesson = {
  id: "tr-a1-konya-5",
  level: "A1",
  cityId: "tr-konya",
  number: 5,
  title: "Chez le médecin",
  minutes: 7,
  goals: ["Comprendre le médecin", "Comprendre les consignes polies : oturun, açın", "Savoir ce qu'il faut faire"],
  vocabNote: "En Turquie, on s'adresse à un médecin en disant doktor hanım (une femme) ou doktor bey (un homme).",
  vocab: [
    v("trko5-1", "Randevum var.", "J'ai rendez-vous.", "Tom à l'accueil du cabinet médical.", "Écouter Randevum var", p("l5-1")),
    v("trko5-2", "Oturun, lütfen.", "Asseyez-vous, je vous prie.", "Le docteur Zehra, une femme calme d'une cinquantaine d'années en blouse blanche, montre une chaise.", "Écouter Oturun, lütfen", p("l5-2")),
    v("trko5-3", "Ağzınızı açın.", "Ouvrez la bouche.", "Murzik ouvre grand la bouche pendant que le médecin l'éclaire avec une lampe.", "Écouter Ağzınızı açın", p("l5-3")),
    v("trko5-4", "Derin nefes alın.", "Respirez profondément.", "Le médecin ausculte Murzik avec un stéthoscope.", "Écouter Derin nefes alın", p("l5-4")),
    v("trko5-5", "Grip olmuşsunuz.", "Vous avez la grippe.", "Le docteur Zehra écrit quelque chose sur une fiche de patient.", "Écouter Grip olmuşsunuz", p("l5-5")),
    v("trko5-6", "Dinlenin.", "Reposez-vous.", "Murzik sous une couverture avec un livre.", "Écouter Dinlenin", p("l5-6")),
    v("trko5-7", "Bol su için.", "Buvez beaucoup d'eau.", "Un verre d'eau et une carafe près du lit.", "Écouter Bol su için", p("l5-7")),
  ],
  dialogue: {
    title: "Le docteur Zehra",
    note: "Ciddi veut dire « grave ». Ciddi değil — « ce n'est pas grave ».",
    lines: [
      line("zehra", "Merhaba. Oturun, lütfen. Ne oldu?", "Bonjour. Asseyez-vous, je vous prie. Qu'est-ce qui ne va pas ?"),
      line("murzik", "Başım ve boğazım ağrıyor. Ateşim de var.", "J'ai mal à la tête et à la gorge. Et j'ai de la fièvre."),
      line("zehra", "Ağzınızı açın, lütfen. Şimdi derin nefes alın.", "Ouvrez la bouche, s'il vous plaît. Maintenant, respirez profondément."),
      line("zehra", "Hmm… Grip olmuşsunuz.", "Hmm… Vous avez la grippe."),
      line("tom", "Ciddi mi?", "C'est grave ?"),
      line("zehra", "Hayır, ciddi değil. Üç gün dinlenin ve bol su için.", "Non, ce n'est pas grave. Reposez-vous trois jours et buvez beaucoup d'eau."),
      line("murzik", "Teşekkür ederim, doktor hanım.", "Merci, docteur."),
    ],
    gist: choice("trko5-d1", "Qu'est-ce qu'a Murzik ?", [
      ["Il a la grippe.", true],
      ["Rien.", false],
      ["Il s'est cassé la patte.", false],
    ]),
  },
  grammar: [
    {
      title: "Le médecin vouvoie",
      paragraphs: [
        "Une consigne polie, c'est le verbe + -in / -ın / -un / -ün : otur → oturun (asseyez-vous), aç → açın (ouvrez), al → alın (prenez, inspirez).",
        "« Votre » (poli), c'est la terminaison -ınız / -iniz : ağzınız — votre bouche, ateşiniz — votre fièvre.",
      ],
      examples: [
        { ru: "Oturun, lütfen.", en: "Asseyez-vous, je vous prie." },
        { ru: "Ateşiniz var mı?", en: "Vous avez de la fièvre ?" },
      ],
    },
  ],
  tasks: [
    choice("trko5-t1", "Le médecin dit poliment « Asseyez-vous ». Comment ?", [
      ["Oturun.", true],
      ["Otur.", false],
      ["Oturuyorum.", false],
    ], { skill: "grammar" }),
    listen("trko5-t2", "Écoute. Que conseille le médecin ?", "Üç gün dinlenin ve bol su için.", [
      ["Se reposer trois jours et boire beaucoup d'eau.", true],
      ["Prendre des médicaments pendant une semaine.", false],
      ["Aller au travail.", false],
    ]),
    match("trko5-t3", "Associe les paires.", [
      ["Oturun.", "Asseyez-vous."],
      ["Açın.", "Ouvrez."],
      ["Dinlenin.", "Reposez-vous."],
      ["Ciddi değil.", "Ce n'est pas grave."],
    ], { skill: "words" }),
    spell("trko5-t4", "Épelle le mot « médecin ».", "doktor"),
    speak("trko5-t5", "Ne oldu? Nereniz ağrıyor?", "Boğazım ağrıyor ve öksürüyorum.", "J'ai mal à la gorge et je tousse.", { help: "Dis à voix haute au médecin où tu as mal." }),
    listen("trko5-t6", "Souviens-toi de la leçon précédente. Où a-t-il mal ?", "Başım ağrıyor.", [
      ["À la tête.", true],
      ["Au ventre.", false],
      ["À la gorge.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "gece-lambasi",
    itemName: "Veilleuse",
    itemNameRu: "Gece lambası",
    ru: "Yaşasın! Bir gece lambası!",
    en: "Hourra ! Une veilleuse !",
    a11y: "Une petite veilleuse en forme de croissant de lune brille d'une douce lumière jaune près du lit.",
    image: p("gece-lambasi"),
    steps: ["Le soir, Tom pose une veilleuse près du lit.", "Elle brille comme une petite lune.", "Murzik se sent en sécurité et au chaud.", "Il s'endort."],
    bridge: "Le docteur Zehra a fait une ordonnance. « La pharmacie est juste en face », a-t-elle dit.",
  },
};

const konya6: Lesson = {
  id: "tr-a1-konya-6",
  level: "A1",
  cityId: "tr-konya",
  number: 6,
  title: "À la pharmacie",
  minutes: 7,
  goals: ["Acheter des médicaments sur ordonnance", "Comprendre comment les prendre : deux fois par jour, après les repas", "Souhaiter un bon rétablissement : Geçmiş olsun!"],
  vocabNote: "Geçmiş olsun — « que ça passe » — se dit à toute personne malade, et après toute sorte d'ennui. C'est comme « bon rétablissement ».",
  vocab: [
    v("trko6-1", "eczane", "pharmacie", "Une enseigne de pharmacie avec une lettre E rouge.", "Écouter eczane", p("l6-1")),
    v("trko6-2", "ilaç", "médicament", "Des boîtes de médicaments sur une étagère.", "Écouter ilaç", p("l6-2")),
    v("trko6-3", "reçete", "ordonnance", "Tom tend une ordonnance au pharmacien.", "Écouter reçete", p("l6-3")),
    v("trko6-4", "Günde iki kez.", "Deux fois par jour.", "Deux comprimés à côté d'un soleil et d'une lune.", "Écouter Günde iki kez", p("l6-4")),
    v("trko6-5", "Yemekten sonra.", "Après les repas.", "Une assiette vide avec un comprimé à côté.", "Écouter Yemekten sonra", p("l6-5")),
    v("trko6-6", "ağrı kesici", "antidouleur", "Une petite boîte de comprimés avec un éclair de douleur barré.", "Écouter ağrı kesici", p("l6-6")),
    v("trko6-7", "Geçmiş olsun!", "Bon rétablissement !", "Le pharmacien sourit et tend un sac de médicaments.", "Écouter Geçmiş olsun", p("l6-7")),
  ],
  dialogue: {
    title: "La pharmacie d'en face",
    note: "Şurup veut dire « sirop ». Nasıl kullanılıyor? — « Comment ça se prend ? »",
    lines: [
      line("tom", "Merhaba. Bu reçete için ilaç alabilir miyim?", "Bonjour. Je peux avoir les médicaments de cette ordonnance ?"),
      line("pharmacist", "Tabii. Buyurun: bu şurup ve bu tabletler.", "Bien sûr. Voilà : ce sirop et ces comprimés."),
      line("tom", "Nasıl kullanılıyor?", "Comment ça se prend ?"),
      line("pharmacist", "Şurup günde üç kez, yemekten sonra. Tablet günde iki kez.", "Le sirop trois fois par jour, après les repas. Les comprimés deux fois par jour."),
      line("tom", "Ağrı kesici de var mı?", "Vous avez aussi un antidouleur ?"),
      line("pharmacist", "Var. Geçmiş olsun!", "Oui. Bon rétablissement à votre ami !"),
      line("tom", "Teşekkürler!", "Merci !"),
    ],
    gist: choice("trko6-d1", "Comment se prend le sirop ?", [
      ["Trois fois par jour après les repas.", true],
      ["Deux fois par jour avant les repas.", false],
      ["Une fois par jour.", false],
    ]),
  },
  grammar: [
    {
      title: "Avant et après : -den önce, -den sonra",
      paragraphs: [
        "« Après les repas », c'est yemek-ten sonra, « avant les repas », c'est yemek-ten önce. Le mot prend la terminaison -den / -ten, suivie de sonra (après) ou önce (avant) — dans l'ordre inverse du français.",
        "« Fois par jour », c'est günde … kez : günde iki kez — deux fois par jour, günde bir kez — une fois par jour.",
      ],
      examples: [
        { ru: "Günde üç kez, yemekten sonra.", en: "Trois fois par jour, après les repas." },
        { ru: "Uyumadan önce bir tablet.", en: "Un comprimé avant de dormir." },
      ],
    },
  ],
  tasks: [
    listen("trko6-t1", "Écoute. Comment faut-il le prendre ?", "Günde iki kez, yemekten önce.", [
      ["Deux fois par jour avant les repas.", true],
      ["Deux fois par jour après les repas.", false],
      ["Trois fois par jour avant les repas.", false],
    ]),
    choice("trko6-t2", "Comment dit-on « après les repas » ?", [
      ["yemekten sonra", true],
      ["yemeğe sonra", false],
      ["yemekte sonra", false],
    ], { skill: "grammar" }),
    match("trko6-t3", "Associe les paires.", [
      ["eczane", "pharmacie"],
      ["ilaç", "médicament"],
      ["reçete", "ordonnance"],
      ["şurup", "sirop"],
    ], { skill: "words" }),
    missing("trko6-t4", "Quelle lettre manque ? (« pharmacie »)", "ec", "ane", "z", ["z", "s", "c"]),
    speak("trko6-t5", "Bu ilaç nasıl kullanılıyor?", "Günde üç kez, yemekten sonra.", "Trois fois par jour, après les repas.", { help: "Réponds à voix haute comme le pharmacien." }),
    choice("trko6-t6", "Le médecin dit : Ağzınızı açın. Que fais-tu ?", [
      ["Ouvrez la bouche.", true],
      ["Asseyez-vous.", false],
      ["Respirez profondément.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "ihlamur",
    itemName: "Tisane de tilleul",
    itemNameRu: "Ihlamur",
    ru: "Yaşasın! Bir kavanoz ıhlamur!",
    en: "Hourra ! Un bocal de tilleul !",
    a11y: "Un bocal en verre de fleurs de tilleul séchées et un verre de tisane chaude au miel.",
    image: p("ihlamur"),
    steps: ["Le pharmacien ajoute un bocal de fleurs de tilleul séchées dans le sac.", "« Ihlamur için — en iyi ilaç! » — « Bois du tilleul — c'est le meilleur remède ! »", "Tom prépare la tisane avec du miel.", "Murzik la boit à petites gorgées, les yeux fermés."],
    bridge: "Trois jours plus tard, Murzik se sent beaucoup mieux. Et Tom reçoit un e-mail d'un magazine…",
  },
};

const konya7: Lesson = {
  id: "tr-a1-konya-7",
  level: "A1",
  cityId: "tr-konya",
  number: 7,
  title: "Je me sens mieux !",
  minutes: 8,
  goals: ["Dire qu'on se sent mieux", "Comparer : mieux qu'hier", "Réviser tous les mots de Konya"],
  vocabNote: "Neyse ki veut dire « heureusement ». Dergi veut dire « magazine ». İş teklifi — « une offre de travail ».",
  vocab: [
    v("trko7-1", "Daha iyiyim.", "Je me sens mieux.", "Murzik est assis dans son lit et sourit ; ses joues ne sont plus rouges.", "Écouter Daha iyiyim", p("l7-1")),
    v("trko7-2", "Nasılsın şimdi?", "Comment te sens-tu maintenant ?", "Le docteur Zehra passe la tête par la porte en souriant.", "Écouter Nasılsın şimdi", p("l7-2")),
    v("trko7-3", "Artık ateşim yok.", "Je n'ai plus de fièvre.", "Murzik montre un thermomètre à température normale.", "Écouter Artık ateşim yok", p("l7-3")),
    v("trko7-4", "sağlıklı", "en bonne santé", "Murzik fait de la gymnastique pleine d'énergie près de la fenêtre.", "Écouter sağlıklı", p("l7-4")),
    v("trko7-5", "Neyse ki!", "Heureusement ! Dieu merci !", "Tom pousse un soupir de soulagement et sourit.", "Écouter Neyse ki", p("l7-5")),
    v("trko7-6", "Bir e-posta geldi!", "Un e-mail est arrivé !", "Une enveloppe avec de petites ailes sur l'écran d'un ordinateur portable.", "Écouter Bir e-posta geldi", p("l7-6")),
    v("trko7-7", "Bir iş teklifi aldım!", "J'ai une offre de travail !", "Tom se lève d'un bond, l'ordinateur à la main.", "Écouter Bir iş teklifi aldım", p("l7-7")),
  ],
  dialogue: {
    title: "Une bonne nouvelle",
    note: "Le docteur Zehra tutoie maintenant Murzik (sen) : ils sont devenus amis. Dergiden — « du magazine ». Balon fotoğrafları — « des photos de montgolfières ».",
    lines: [
      line("zehra", "Murzik, nasılsın şimdi?", "Murzik, comment te sens-tu maintenant ?"),
      line("murzik", "Daha iyiyim, teşekkürler! Artık ateşim yok.", "Mieux, merci ! Je n'ai plus de fièvre."),
      line("zehra", "Neyse ki! Geçmiş olsun.", "Dieu merci ! Bon rétablissement."),
      line("tom", "Murzik! Bir e-posta geldi! Dergiden!", "Murzik ! Un e-mail est arrivé ! Du magazine !"),
      line("murzik", "Ne yazıyor?", "Qu'est-ce qu'il dit ?"),
      line("tom", "Bir iş teklifi aldım! Kapadokya'da, balon fotoğrafları!", "J'ai une offre de travail ! En Cappadoce — des photos de montgolfières !"),
      line("murzik", "Harika! Kapadokya'ya gidelim!", "Génial ! Allons en Cappadoce !"),
    ],
    gist: choice("trko7-d1", "Qu'écrit le magazine à Tom ?", [
      ["Ils lui proposent un travail en Cappadoce.", true],
      ["Ils lui demandent de revenir à Londres.", false],
      ["Ils lui souhaitent un bon anniversaire.", false],
    ]),
  },
  grammar: [
    {
      title: "Mieux que : -den daha",
      paragraphs: [
        "Daha iyi veut dire « mieux », daha kötü « moins bien, pire ». Daha iyiyim — je me sens mieux.",
        "« Que » est la terminaison -den / -dan : Bugün dünden daha iyiyim. — Aujourd'hui, je me sens mieux qu'hier (mot à mot « aujourd'hui d'hier plus bien je-suis »).",
      ],
      examples: [
        { ru: "Bugün dünden daha iyiyim.", en: "Aujourd'hui, je me sens mieux qu'hier." },
        { ru: "Konya, Antalya'dan daha soğuk.", en: "Konya est plus froide qu'Antalya." },
      ],
    },
  ],
  tasks: [
    listen("trko7-t1", "Examen audio. Que dit le médecin ?", "Ateşiniz yok, boğazınız iyi. Yarın dışarı çıkabilirsiniz.", [
      ["Plus de fièvre, la gorge va bien, tu peux sortir demain.", true],
      ["Il faut rester au lit encore une semaine.", false],
      ["Prends les médicaments trois fois par jour.", false],
    ]),
    choice("trko7-t2", "Comment dit-on « Aujourd'hui, je me sens mieux qu'hier » ?", [
      ["Bugün dünden daha iyiyim.", true],
      ["Bugün düne daha iyiyim.", false],
      ["Bugün dün daha iyi.", false],
    ], { skill: "grammar" }),
    match("trko7-t3", "Associe les paires.", [
      ["Daha iyiyim.", "Je me sens mieux."],
      ["Neyse ki!", "Heureusement !"],
      ["iş teklifi", "offre de travail"],
      ["dergi", "magazine"],
    ], { skill: "words" }),
    missing("trko7-t4", "Quelle lettre manque ? (« en bonne santé »)", "sa", "lıklı", "ğ", ["ğ", "g", "h"]),
    speak("trko7-t5", "Nasılsın şimdi?", "Daha iyiyim, teşekkürler!", "Je me sens mieux, merci !", { help: "Réponds à voix haute." }),
    script("trko7-t6", "Souviens-toi de tout Konya. Complète les conversations.", [
      { speaker: "Seller", text: "Ne lazım?" },
      { speaker: "You", answer: "Bana bir atkı lazım.", options: ["Bana bir atkı lazım.", "Bana bir atkıyım.", "Kabin nerede."] },
      { speaker: "Le docteur Zehra", text: "Nereniz ağrıyor?" },
      { speaker: "You", answer: "Başım ağrıyor.", options: ["Başım ağrıyor.", "Başım ağrı.", "Geçmiş olsun."] },
      { speaker: "Pharmacist", text: "Günde iki kez." },
      { speaker: "You", answer: "Yemekten önce mi, sonra mı?", options: ["Yemekten önce mi, sonra mı?", "Daha küçük var mı?", "Ne renk?"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "lamba",
    itemName: "Lampe en mosaïque",
    itemNameRu: "Mozaik lamba",
    ru: "Yaşasın! Bir mozaik lamba!",
    en: "Hourra ! Une lampe en mosaïque !",
    a11y: "Une lampe suspendue en mosaïque de verre coloré brille de lumières turquoise, rouges et jaunes.",
    image: p("lamba"),
    steps: ["Le docteur Zehra apporte un cadeau.", "C'est une lampe en mosaïque — turquoise, comme la coupole du musée Mevlana.", "«Geçmiş olsun, Murzik!» — « Bon rétablissement, Murzik ! »", "La chambre s'illumine de couleurs scintillantes."],
    bridge: "On attend Tom en Cappadoce. Il est temps de faire les valises !",
  },
};

const story: CityStory = {
  home: {
    name: "Une chambre chaude dans une vieille maison",
    nameRu: "Eski evde sıcak bir oda",
    image: p("home"),
    a11y: "Une chambre vide dans une vieille maison avec un poêle et des murs épais. Dehors, la neige, et au loin une coupole turquoise. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "lamba",
  welcomeRu: "Merhaba, Konya!",
  welcomeEn: "Bonjour, Konya !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom à Konya, près d'une coupole turquoise. Il fait froid, et une neige légère tombe.",
  departureImage: p("departure"),
  departureA11y: "Murzik et Tom, en bonnets et écharpes chaudes, montent dans un bus.",
  finale: [
    {
      image: p("dome"),
      a11y: "Murzik et Tom en écharpe devant la coupole turquoise, sous une neige légère. Le docteur Zehra est à côté d'eux et regarde la carte postale. Au loin, près du portail : la silhouette d'un chat blanc au chapeau.",
      lines: [
        { en: "Avant le départ, ils vont voir la coupole turquoise. Murzik montre au docteur Zehra la carte de grand-mère." },
        { ru: "Annem bu kediyi anlatırdı: kubbeyi çizerdi.", en: "Ma mère me parlait de cette chatte qui dessinait la coupole." },
        { en: "Et près du portail, dans la neige, le chat au chapeau est de nouveau là. Murzik cligne des yeux — et il a disparu." },
      ],
    },
    {
      image: p("lamba"),
      a11y: "Murzik fait le tour de sa chambre chaude, meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambre chaude. Tom la prend en photo pour son carnet de voyage." },
        { en: "Murzik emporte la lampe en mosaïque du docteur Zehra." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, et Tom fête ça avec lui.",
      lines: [
        { ru: "Konya tamamlandı!", en: "Konya, c'est fait !" },
        { en: "7 / 7 leçons" },
        { en: "A1 — huitième partie terminée." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Murzik et Tom montent dans le bus.",
      lines: [
        { ru: "Hoşça kal, Konya!", en: "Au revoir, Konya !" },
        { ru: "Sıradaki durak: Kapadokya!", en: "Prochain arrêt : la Cappadoce !" },
      ],
    },
    {
      image: p("road"),
      a11y: "Le bus traverse une plaine enneigée vers des montagnes lointaines.",
      lines: [{ ru: "Konya → Kapadokya", en: "Konya → Cappadoce" }],
    },
    {
      image: pic("tr/kapadokya/arrival"),
      a11y: "Murzik et Tom à l'aube parmi les « cheminées de fées » de Cappadoce. Des dizaines de montgolfières colorées dans le ciel.",
      lines: [
        { ru: "Merhaba, Kapadokya!", en: "Bonjour, la Cappadoce !" },
        { ru: "Balonlar!", en: "Des montgolfières !" },
      ],
    },
  ],
};

export const trKonyaFr = {
  id: "tr-konya",
  name: "Konya",
  nameTr: "Konya",
  lessons: [konya1, konya2, konya3, konya4, konya5, konya6, konya7],
  story,
};
