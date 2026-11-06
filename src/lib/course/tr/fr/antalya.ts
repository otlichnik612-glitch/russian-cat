import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Antalya · “Free time” · what I like doing, what I can do, sport, a concert at Aspendos, the old musician, a quiet evening, a concert. French version. */

const p = (name: string) => pic(`tr/antalya/${name}`);

const antalya1: Lesson = {
  id: "tr-a1-antalya-1",
  level: "A1",
  cityId: "tr-antalya",
  number: 1,
  title: "Qu'est-ce que tu aimes faire ?",
  minutes: 7,
  goals: ["Demander à quelqu'un ce qu'il aime faire", "Dire « J'aime nager, dessiner »", "Dire ce qu'on n'aime pas"],
  vocabNote: "Boş zaman veut dire « temps libre » — mot à mot « temps vide ».",
  vocab: [
    v("tran1-1", "Boş zamanında ne yapıyorsun?", "Qu'est-ce que tu fais pendant ton temps libre ?", "Tom est assis dans une petite cour sous un oranger et regarde Murzik avec intérêt.", "Écouter Boş zamanında ne yapıyorsun", p("l1-1")),
    v("tran1-2", "Yüzmeyi seviyorum.", "J'aime nager.", "Murzik nage dans une eau claire près des rochers.", "Écouter Yüzmeyi seviyorum", p("l1-2")),
    v("tran1-3", "Resim yapmayı seviyorum.", "J'aime dessiner.", "Murzik dessine un oranger dans son carnet de croquis.", "Écouter Resim yapmayı seviyorum", p("l1-3")),
    v("tran1-4", "Kitap okumayı seviyorum.", "J'aime lire.", "Tom lit un livre dans un fauteuil en osier.", "Écouter Kitap okumayı seviyorum", p("l1-4")),
    v("tran1-5", "Müzik dinlemeyi seviyorum.", "J'aime écouter de la musique.", "Murzik, un casque sur les oreilles, hoche la tête en rythme.", "Écouter Müzik dinlemeyi seviyorum", p("l1-5")),
    v("tran1-6", "Dans etmeyi sevmiyorum.", "Je n'aime pas danser.", "Tom essaie maladroitement de danser en agitant les bras, gêné.", "Écouter Dans etmeyi sevmiyorum", p("l1-6")),
    v("tran1-7", "Ne yapmayı seviyorsun?", "Qu'est-ce que tu aimes faire ?", "Murzik, son carnet à la patte, regarde Tom d'un air interrogateur.", "Écouter Ne yapmayı seviyorsun", p("l1-7")),
  ],
  dialogue: {
    title: "Dans la cour",
    note: "Göster! veut dire « Montre ! ». Anneannen gibi — « comme ta grand-mère ».",
    lines: [
      line("tom", "Murzik, boş zamanında ne yapıyorsun?", "Murzik, qu'est-ce que tu fais pendant ton temps libre ?"),
      line("murzik", "Yüzmeyi seviyorum. Ve… resim yapmayı seviyorum!", "J'aime nager. Et… j'aime dessiner !"),
      line("tom", "Resim mi? Göster!", "Dessiner ? Montre !"),
      line("murzik", "Bak: portakal ağacı.", "Regarde : un oranger."),
      line("tom", "Çok güzel! Anneannen gibi!", "C'est magnifique ! Comme ta grand-mère !"),
      line("murzik", "Sen ne yapmayı seviyorsun?", "Qu'est-ce que tu aimes faire ?"),
      line("tom", "Fotoğraf çekmeyi ve müzik dinlemeyi seviyorum. Ama dans etmeyi sevmiyorum!", "Moi, j'aime prendre des photos et écouter de la musique. Mais je n'aime pas danser !"),
    ],
    gist: choice("tran1-d1", "Qu'est-ce que Murzik aime faire ?", [
      ["Nager et dessiner.", true],
      ["Danser.", false],
      ["Lire.", false],
    ]),
  },
  grammar: [
    {
      title: "J'aime faire : -meyi seviyorum",
      paragraphs: [
        "Là où le français dit « j'aime nager » avec un infinitif, le turc prend la forme en -mek / -mak du verbe, enlève le k final et ajoute -yi / -yı : yüzmek → yüzmeyi seviyorum (j'aime nager), okumak → okumayı seviyorum (j'aime lire).",
        "« Je n'aime pas », c'est sevmiyorum : Dans etmeyi sevmiyorum. La question : Ne yapmayı seviyorsun?",
      ],
      examples: [
        { ru: "Resim yapmayı seviyorum.", en: "J'aime dessiner." },
        { ru: "Tom dans etmeyi sevmiyor.", en: "Tom n'aime pas danser." },
      ],
    },
  ],
  tasks: [
    choice("tran1-t1", "Comment dit-on « J'aime nager » ?", [
      ["Yüzmeyi seviyorum.", true],
      ["Yüzmek seviyorum.", false],
      ["Yüzüyorum seviyorum.", false],
    ], { skill: "grammar" }),
    listen("tran1-t2", "Écoute. Qu'est-ce que la personne qui parle n'aime pas ?", "Dans etmeyi sevmiyorum.", [
      ["Danser.", true],
      ["Nager.", false],
      ["Lire.", false],
    ]),
    match("tran1-t3", "Associe les paires.", [
      ["yüzmek", "nager"],
      ["okumak", "lire"],
      ["dinlemek", "écouter"],
      ["dans etmek", "danser"],
    ], { skill: "words" }),
    missing("tran1-t4", "Quelle lettre manque ? (« j'aime »)", "sev", "yorum", "i", ["i", "ı", "e"]),
    speak("tran1-t5", "Boş zamanında ne yapıyorsun?", "Kitap okumayı ve yüzmeyi seviyorum.", "J'aime lire et nager.", { help: "Dis à voix haute ce que tu aimes faire." }),
    choice("tran1-t6", "Comment dit-on « On est perdus ! » ?", [
      ["Kaybolduk!", true],
      ["Kayboldum!", false],
      ["Kaybolacağız!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sandalye",
    itemName: "Fauteuil en osier",
    itemNameRu: "Hasır sandalye",
    ru: "Yaşasın! Hasır bir sandalye!",
    en: "Hourra ! Un fauteuil en osier !",
    a11y: "Un fauteuil en osier est posé dans la cour, sous l'oranger, avec un carnet de croquis et des crayons dessus.",
    image: p("sandalye"),
    steps: ["Murzik installe un fauteuil en osier sous l'oranger.", "Il pose son carnet de croquis dessus.", "Il s'assoit pour dessiner.", "De l'ombre, du calme et l'odeur des oranges."],
    bridge: "Le soir, de la musique arrive de la cour voisine. Quelqu'un joue du saz…",
  },
};

const antalya2: Lesson = {
  id: "tr-a1-antalya-2",
  level: "A1",
  cityId: "tr-antalya",
  number: 2,
  title: "Tu sais jouer du saz ?",
  minutes: 7,
  goals: ["Demander si quelqu'un sait faire quelque chose", "Dire « je sais » et « je ne sais pas »", "Demander à quelqu'un de t'apprendre"],
  vocabNote: "Le saz est un instrument à cordes turc à long manche. Le plus connu s'appelle le bağlama. Usta veut dire « maître » — un titre respectueux pour les musiciens et les artisans.",
  vocab: [
    v("tran2-1", "saz", "saz (un instrument à cordes)", "Un saz en bois à long manche est appuyé contre un mur de pierre.", "Écouter saz", p("l2-1")),
    v("tran2-2", "Saz çalabiliyor musun?", "Tu sais jouer du saz ?", "Un vieux musicien tend un saz à Murzik.", "Écouter Saz çalabiliyor musun", p("l2-2")),
    v("tran2-3", "Evet, çalabiliyorum.", "Oui, je sais.", "Hasan Usta pince les cordes avec assurance.", "Écouter Evet, çalabiliyorum", p("l2-3")),
    v("tran2-4", "Hayır, çalamıyorum.", "Non, je ne sais pas.", "Murzik tient le saz à l'envers et sourit d'un air penaud.", "Écouter Hayır, çalamıyorum", p("l2-4")),
    v("tran2-5", "Biraz şarkı söyleyebiliyorum.", "Je sais chanter un peu.", "Murzik chante les yeux fermés, des notes de musique au-dessus de la tête.", "Écouter Biraz şarkı söyleyebiliyorum", p("l2-5")),
    v("tran2-6", "Öğretir misiniz?", "Vous pourriez m'apprendre ?", "Tom joint les mains avec espoir devant Hasan Usta.", "Écouter Öğretir misiniz", p("l2-6")),
    v("tran2-7", "şarkı", "chanson", "Des notes de musique dessinées s'envolent d'une fenêtre.", "Écouter şarkı", p("l2-7")),
  ],
  dialogue: {
    title: "De la musique par-dessus le mur",
    note: "Evladım — « mon enfant » — est un mot affectueux qu'emploient les personnes âgées. Önce dinleyin — « écoutez d'abord ».",
    lines: [
      line("murzik", "Merhaba! Çok güzel çalıyorsunuz!", "Bonjour ! Vous jouez si bien !"),
      line("hasan", "Teşekkür ederim, evladım. Sen saz çalabiliyor musun?", "Merci, mon enfant. Tu sais jouer du saz ?"),
      line("murzik", "Hayır, çalamıyorum. Ama biraz şarkı söyleyebiliyorum.", "Non, je ne sais pas. Mais je sais chanter un peu."),
      line("hasan", "Gel, otur. Bu saz çok eski.", "Venez vous asseoir. Ce saz est très vieux."),
      line("tom", "Bize öğretir misiniz?", "Vous pourriez nous apprendre ?"),
      line("hasan", "Tabii! Önce dinleyin.", "Bien sûr ! D'abord, écoutez."),
    ],
    gist: choice("tran2-d1", "Que sait faire Murzik ?", [
      ["Chanter un peu.", true],
      ["Jouer du saz.", false],
      ["Rien.", false],
    ]),
  },
  grammar: [
    {
      title: "Je sais : -ebiliyorum",
      paragraphs: [
        "« Je sais, je peux », c'est le verbe + -abiliyorum / -ebiliyorum : çal-abiliyorum — je sais jouer, söyle-yebiliyorum — je sais chanter.",
        "« Je ne sais pas, je ne peux pas », c'est -amıyorum / -emiyorum : çal-amıyorum — je ne sais pas jouer, söyle-yemiyorum — je ne sais pas chanter.",
      ],
      examples: [
        { ru: "Hasan Usta saz çalabiliyor.", en: "Hasan Usta sait jouer du saz." },
        { ru: "Ben dans edemiyorum.", en: "Je ne sais pas danser." },
      ],
    },
  ],
  tasks: [
    choice("tran2-t1", "Comment dit-on « Je ne sais pas jouer » ?", [
      ["Çalamıyorum.", true],
      ["Çalmıyorum.", false],
      ["Çalabiliyorum.", false],
    ], { skill: "grammar" }),
    listen("tran2-t2", "Écoute. Que sait faire la personne qui parle ?", "Gitar çalabiliyorum ama şarkı söyleyemiyorum.", [
      ["Jouer de la guitare, mais pas chanter.", true],
      ["Chanter, mais pas jouer.", false],
      ["Ni chanter ni jouer.", false],
    ]),
    match("tran2-t3", "Associe les paires.", [
      ["şarkı", "chanson"],
      ["çalmak", "jouer (d'un instrument)"],
      ["söylemek", "chanter, dire"],
      ["öğretmek", "apprendre (à quelqu'un), enseigner"],
    ], { skill: "words" }),
    spell("tran2-t4", "Épelle le mot « chanson ».", "şarkı"),
    speak("tran2-t5", "Şarkı söyleyebiliyor musun?", "Evet, biraz söyleyebiliyorum.", "Oui, je sais chanter un peu.", { help: "Réponds à voix haute." }),
    choice("tran2-t6", "Comment dit-on « J'aime lire » ?", [
      ["Kitap okumayı seviyorum.", true],
      ["Kitap okumak seviyorum.", false],
      ["Kitap okuyorum seviyorum.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "radyo",
    itemName: "Vieille radio",
    itemNameRu: "Radyo",
    ru: "Yaşasın! Eski bir radyo!",
    en: "Hourra ! Une vieille radio !",
    a11y: "Une radio à lampes en bois avec des boutons ronds. De la musique en sort.",
    image: p("radyo"),
    steps: ["Hasan Usta apporte une vieille radio.", "« Türkü dinle! » — « Écoute des chansons populaires ! »", "Murzik tourne le bouton.", "Le son du saz remplit la chambre."],
    bridge: "Hasan Usta dit : « Le matin, je nage, et le soir, je joue. Tu fais du sport ? »",
  },
};

const antalya3: Lesson = {
  id: "tr-a1-antalya-3",
  level: "A1",
  cityId: "tr-antalya",
  number: 3,
  title: "Tu fais du sport ?",
  minutes: 7,
  goals: ["Parler de sport", "Dire à quelle fréquence : tous les jours, parfois, jamais", "Dire « deux fois par semaine »"],
  vocabNote: "Hiç avec un verbe à la forme négative veut dire « jamais, pas du tout » : Hiç koşmuyorum. — Je ne cours jamais.",
  vocab: [
    v("tran3-1", "Spor yapıyor musun?", "Tu fais du sport ?", "Tom, en tenue de sport, fait des exercices sur la plage.", "Écouter Spor yapıyor musun", p("l3-1")),
    v("tran3-2", "her gün", "tous les jours", "Sept pages de calendrier, avec un nageur dessiné sur chacune.", "Écouter her gün", p("l3-2")),
    v("tran3-3", "bazen", "parfois", "Seulement deux ou trois nageurs sur le calendrier, à des jours différents.", "Écouter bazen", p("l3-3")),
    v("tran3-4", "hiç", "pas du tout ; avec une négation — jamais", "Un calendrier vide et Murzik endormi sur un transat.", "Écouter hiç", p("l3-4")),
    v("tran3-5", "Haftada iki kez yüzüyorum.", "Je nage deux fois par semaine.", "Murzik montre deux doigts, la mer derrière lui.", "Écouter Haftada iki kez yüzüyorum", p("l3-5")),
    v("tran3-6", "futbol", "football", "Des garçons jouent au ballon sur la plage.", "Écouter futbol", p("l3-6")),
    v("tran3-7", "koşmak", "courir", "Tom court sur le front de mer, sous les palmiers.", "Écouter koşmak", p("l3-7")),
  ],
  dialogue: {
    title: "Le matin à la plage",
    note: "En français, on dit « jouer » pour les jeux comme pour les instruments (jouer au foot, jouer du saz), mais pas en turc : oynamak, c'est jouer à un jeu ou au ballon, et çalmak, c'est jouer d'un instrument.",
    lines: [
      line("hasan", "Günaydın! Ben her sabah yüzüyorum.", "Bonjour ! Je nage tous les matins."),
      line("murzik", "Her gün mü? Ben bazen yüzüyorum.", "Tous les jours ? Moi, je nage parfois."),
      line("tom", "Ben haftada iki kez koşuyorum.", "Moi, je cours deux fois par semaine."),
      line("hasan", "Ya futbol? Futbol oynuyor musunuz?", "Et le foot ? Tu joues au foot ?"),
      line("murzik", "Hayır, hiç oynamıyorum! Ama topla oynamayı seviyorum.", "Non, je n'y joue jamais ! Mais j'aime bien jouer avec un ballon."),
      line("hasan", "Al, bu top senin!", "Tiens, ce ballon est à toi !"),
    ],
    gist: choice("tran3-d1", "À quelle fréquence Hasan Usta nage-t-il ?", [
      ["Tous les jours.", true],
      ["Parfois.", false],
      ["Jamais.", false],
    ]),
  },
  grammar: [
    {
      title: "Combien de fois ?",
      paragraphs: [
        "Her gün — tous les jours, sık sık — souvent, bazen — parfois. « Jamais », c'est hiç avec un verbe à la forme négative : Hiç koşmuyorum. Comme le français « ne… jamais », le turc utilise ici une double négation.",
        "« Fois », c'est kez : haftada iki kez (deux fois par semaine), ayda bir kez (une fois par mois). Haftada — « par semaine » (mot à mot « dans une semaine »), ayda — « par mois ».",
      ],
      examples: [
        { ru: "Her gün yüzüyorum.", en: "Je nage tous les jours." },
        { ru: "Hiç futbol oynamıyorum.", en: "Je ne joue jamais au foot." },
      ],
    },
  ],
  tasks: [
    choice("tran3-t1", "Comment dit-on « Je ne cours jamais » ?", [
      ["Hiç koşmuyorum.", true],
      ["Hiç koşuyorum.", false],
      ["Her gün koşmuyorum.", false],
    ], { skill: "grammar" }),
    listen("tran3-t2", "Écoute. À quelle fréquence ?", "Haftada üç kez.", [
      ["Trois fois par semaine.", true],
      ["Tous les jours.", false],
      ["Une fois par mois.", false],
    ]),
    match("tran3-t3", "Associe les paires.", [
      ["her gün", "tous les jours"],
      ["bazen", "parfois"],
      ["futbol", "football"],
      ["koşmak", "courir"],
    ], { skill: "words" }),
    missing("tran3-t4", "Quelle lettre manque ? (« parfois »)", "baz", "n", "e", ["e", "a", "ı"]),
    speak("tran3-t5", "Spor yapıyor musun?", "Evet, haftada iki kez yüzüyorum.", "Oui, je nage deux fois par semaine.", { help: "Dis à voix haute si tu fais du sport." }),
    choice("tran3-t6", "Comment dit-on « Je sais chanter » ?", [
      ["Şarkı söyleyebiliyorum.", true],
      ["Şarkı söyleyemiyorum.", false],
      ["Şarkı söylemeyi.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "top",
    itemName: "Ballon",
    itemNameRu: "Top",
    ru: "Yaşasın! Bir top!",
    en: "Hourra ! Un ballon !",
    a11y: "Un ballon de plage rayé est posé à l'ombre de l'oranger.",
    image: p("top"),
    steps: ["Hasan Usta offre un ballon rayé à Murzik.", "Murzik le lance en l'air.", "Il le rattrape sur son nez !", "Le ballon se repose dans la cour, sous l'arbre."],
    bridge: "Ce soir, il y a un concert dans le théâtre antique d'Aspendos !",
  },
};

const antalya4: Lesson = {
  id: "tr-a1-antalya-4",
  level: "A1",
  cityId: "tr-antalya",
  number: 4,
  title: "Un concert à Aspendos",
  minutes: 7,
  goals: ["Demander si quelque chose a plu", "Dire « J'ai adoré » et « Je n'ai pas aimé du tout »", "Faire un compliment : « merveilleux ! »"],
  vocabNote: "Aspendos est un théâtre romain antique près d'Antalya. On y donne encore des concerts et des ballets en été.",
  vocab: [
    v("tran4-1", "antik tiyatro", "théâtre antique", "Un immense théâtre antique en pierre, avec des gradins en demi-cercle.", "Écouter antik tiyatro", p("l4-1")),
    v("tran4-2", "konser", "concert", "Un orchestre sur la scène antique, le public sur les gradins de pierre.", "Écouter konser", p("l4-2")),
    v("tran4-3", "sahne", "scène", "Une scène éclairée avec des colonnes, dans la lumière du soir.", "Écouter sahne", p("l4-3")),
    v("tran4-4", "Beğendin mi?", "Ça t'a plu ?", "Après le concert, Tom interroge Murzik en souriant.", "Écouter Beğendin mi", p("l4-4")),
    v("tran4-5", "Çok beğendim!", "J'ai adoré !", "Murzik rayonne et applaudit des pattes.", "Écouter Çok beğendim", p("l4-5")),
    v("tran4-6", "Hiç beğenmedim.", "Je n'ai pas aimé du tout.", "Tom grimace et fait un geste de la main.", "Écouter Hiç beğenmedim", p("l4-6")),
    v("tran4-7", "Harika!", "Merveilleux !", "Des feux d'artifice éclatent au-dessus du théâtre.", "Écouter Harika", p("l4-7")),
  ],
  dialogue: {
    title: "Sous les étoiles",
    note: "Dansları — « les danses » (comme complément du verbe). Çünkü veut dire « parce que ».",
    lines: [
      line("tom", "Vay! Bu antik tiyatro çok büyük!", "Ouah ! Ce théâtre antique est immense !"),
      line("murzik", "Ve çok eski. Sahne çok güzel!", "Et très vieux. La scène est magnifique !"),
      line("tom", "Murzik, konseri beğendin mi?", "Murzik, le concert t'a plu ?"),
      line("murzik", "Çok beğendim! Harika!", "J'ai adoré ! Merveilleux !"),
      line("tom", "Ben de. Ama dansları hiç beğenmedim.", "Moi aussi. Mais je n'ai pas du tout aimé les danses."),
      line("murzik", "Neden? Danslar çok güzeldi!", "Pourquoi ? Les danses étaient magnifiques !"),
      line("tom", "Çünkü ben dans etmeyi sevmiyorum!", "Parce que je n'aime pas danser !"),
    ],
    gist: choice("tran4-d1", "Le concert a-t-il plu à Murzik ?", [
      ["Il a adoré.", true],
      ["Il n'a pas aimé du tout.", false],
      ["Il n'est pas allé au concert.", false],
    ]),
  },
  grammar: [
    {
      title: "Ça m'a plu : beğendim",
      paragraphs: [
        "Beğenmek veut dire « aimer, apprécier » quelque chose qu'on a vu ou essayé. Ça m'a plu — beğendim ; ça t'a plu ? — beğendin mi?",
        "En turc, on dit « j'ai aimé le concert » : la chose qu'on a aimée est le complément : Konseri beğendim. — Le concert m'a plu. Ne m'a pas plu — beğenmedim.",
      ],
      examples: [
        { ru: "Konseri çok beğendim.", en: "Le concert m'a beaucoup plu." },
        { ru: "Filmi beğendin mi? — Hiç beğenmedim.", en: "Le film t'a plu ? — Il ne m'a pas plu du tout." },
      ],
    },
  ],
  tasks: [
    choice("tran4-t1", "Comment demander « Ça t'a plu ? »", [
      ["Beğendin mi?", true],
      ["Beğendim mi?", false],
      ["Beğeniyor mu musun?", false],
    ], { skill: "grammar" }),
    listen("tran4-t2", "Écoute. Ça leur a plu ?", "Hiç beğenmedim.", [
      ["Pas du tout.", true],
      ["Beaucoup.", false],
      ["Un peu.", false],
    ]),
    match("tran4-t3", "Associe les paires.", [
      ["sahne", "scène"],
      ["konser", "concert"],
      ["Harika!", "Merveilleux !"],
      ["antik", "antique"],
    ], { skill: "words" }),
    missing("tran4-t4", "Quelle lettre manque ? (« ça m'a plu »)", "Be", "endim", "ğ", ["ğ", "g", "y"]),
    speak("tran4-t5", "Konseri beğendin mi?", "Çok beğendim! Harika!", "J'ai adoré ! Merveilleux !", { help: "Réponds à voix haute." }),
    choice("tran4-t6", "Que veut dire bazen ?", [
      ["parfois", true],
      ["tous les jours", false],
      ["jamais", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "notalar",
    itemName: "Vieille partition",
    itemNameRu: "Notalar",
    ru: "Yaşasın! Eski notalar!",
    en: "Hourra ! Une vieille partition !",
    a11y: "Des feuilles de partition jaunies, nouées d'un ruban. Un minuscule chat roux est dessiné dans le coin de la première feuille.",
    image: p("notalar"),
    steps: ["Après le concert, Hasan Usta vient les voir.", "Il leur tend une vieille partition jaunie.", "Un minuscule chat roux est dessiné dans le coin !", "Murzik se fige : c'est le dessin de grand-mère."],
    bridge: "« Cette chanson a un nom, dit doucement Hasan Usta. Elle s'appelle Asya. »",
  },
};

const antalya5: Lesson = {
  id: "tr-a1-antalya-5",
  level: "A1",
  cityId: "tr-antalya",
  number: 5,
  title: "Le vieux musicien",
  minutes: 8,
  goals: ["Comprendre une histoire du passé", "Dire ce que quelqu'un faisait autrefois : -ardı", "Demander « et ensuite, que s'est-il passé ? »"],
  vocabNote: "Anlatır mısınız? — « Vous nous racontez ? ». Sonra ne oldu? — « Et ensuite, que s'est-il passé ? »",
  vocab: [
    v("tran5-1", "Onu tanıyordum.", "Je l'ai connue.", "Hasan Usta regarde pensivement la vieille carte postale entre les pattes de Murzik.", "Écouter Onu tanıyordum", p("l5-1")),
    v("tran5-2", "çok eskiden", "il y a très longtemps", "Une vieille photo pâlie de la même cour avec l'oranger.", "Écouter çok eskiden", p("l5-2")),
    v("tran5-3", "Burada resim yapardı.", "Elle peignait ici.", "Un vieux chevalet est posé sous l'oranger.", "Écouter Burada resim yapardı", p("l5-3")),
    v("tran5-4", "Ben saz çalardım.", "Et moi, je jouais du saz.", "Un jeune musicien joue du saz dans la même cour — un vieux tableau encadré.", "Écouter Ben saz çalardım", p("l5-4")),
    v("tran5-5", "Bu şarkının adı «Asya».", "Cette chanson s'appelle « Asya ».", "Hasan Usta montre la partition ; un seul nom est écrit sur la première feuille.", "Écouter Bu şarkının adı Asya", p("l5-5")),
    v("tran5-6", "Bir mektup bekliyordu.", "Elle attendait une lettre.", "Une boîte aux lettres vide sur une vieille porte.", "Écouter Bir mektup bekliyordu", p("l5-6")),
    v("tran5-7", "Gelmedi.", "Elle n'est jamais arrivée.", "Hasan Usta secoue tristement la tête.", "Écouter Gelmedi", p("l5-7")),
  ],
  dialogue: {
    title: "La chanson « Asya »",
    note: "Avlu veut dire « cour ». Yazdım — « j'ai écrit ». Galiba — « je crois, sans doute ».",
    lines: [
      line("hasan", "Asya'yı tanıyordum. Çok eskiden…", "J'ai connu Asya. Il y a très longtemps…"),
      line("murzik", "Gerçekten mi? Anlatır mısınız?", "Vraiment ? Vous nous racontez ?"),
      line("hasan", "Bu avluda resim yapardı. Ben de saz çalardım.", "Elle peignait dans cette cour. Et moi, je jouais du saz."),
      line("hasan", "Bu şarkıyı onun için yazdım. Şarkının adı «Asya».", "J'ai écrit cette chanson pour elle. La chanson s'appelle « Asya »."),
      line("tom", "Çok güzel bir şarkı.", "C'est une belle chanson."),
      line("hasan", "Hep Moskova'dan bir mektup bekliyordu. Ama mektup gelmedi.", "Elle attendait toujours une lettre de Moscou. Mais la lettre n'est jamais arrivée."),
      line("murzik", "Sonra ne oldu?", "Et ensuite, que s'est-il passé ?"),
      line("hasan", "Bir gün gitti. Galiba Konya'ya…", "Un jour, elle est partie. À Konya, je crois…"),
    ],
    gist: choice("tran5-d1", "Comment s'appelle la chanson de Hasan Usta ?", [
      ["« Asya ».", true],
      ["« Antalya ».", false],
      ["« La Mer ».", false],
    ]),
  },
  grammar: [
    {
      title: "Ce qu'on faisait : -ardı, -erdi",
      paragraphs: [
        "Pour ce qui se répétait dans le passé — comme l'imparfait français (« elle peignait ») — le turc utilise -ardı / -erdi (avec certains verbes -ırdı / -irdi / -urdu / -ürdü : gelirdi, okurdu) : resim yap-ardı — elle peignait, saz çal-ardım — je jouais du saz.",
        "Ce qui est arrivé une seule fois prend le -dı / -di qu'on connaît : Bir gün gitti. — Un jour, elle est partie.",
      ],
      examples: [
        { ru: "Asya her gün resim yapardı.", en: "Asya peignait tous les jours." },
        { ru: "Bir gün gitti.", en: "Un jour, elle est partie." },
      ],
    },
  ],
  tasks: [
    listen("tran5-t1", "Écoute. Que faisait Asya autrefois ?", "Burada resim yapardı.", [
      ["Elle peignait ici.", true],
      ["Elle jouait du saz.", false],
      ["Elle chantait des chansons.", false],
    ]),
    choice("tran5-t2", "Comment dit-on « Je jouais du saz » ?", [
      ["Saz çalardım.", true],
      ["Saz çalacağım.", false],
      ["Saz çalıyorum.", false],
    ], { skill: "grammar" }),
    match("tran5-t3", "Associe les paires.", [
      ["eskiden", "autrefois, il y a longtemps"],
      ["mektup", "lettre"],
      ["beklemek", "attendre"],
      ["tanımak", "connaître (quelqu'un)"],
    ], { skill: "words" }),
    missing("tran5-t4", "Quelle lettre manque ? (« lettre »)", "mekt", "p", "u", ["u", "ü", "o"]),
    speak("tran5-t5", "Çocukken ne yapardın?", "Her gün top oynardım.", "Je jouais au ballon tous les jours.", { help: "Dis à voix haute ce que tu faisais quand tu étais petit." }),
    choice("tran5-t6", "Comment dit-on « Ça m'a beaucoup plu » ?", [
      ["Çok beğendim.", true],
      ["Çok beğeneceğim.", false],
      ["Çok beğenmedim.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "portakal",
    itemName: "Panier d'oranges",
    itemNameRu: "Portakal sepeti",
    ru: "Yaşasın! Bir sepet portakal!",
    en: "Hourra ! Un panier d'oranges !",
    a11y: "Un panier en osier rempli d'oranges, encore avec leurs feuilles, est posé sur le rebord de la fenêtre.",
    image: p("portakal"),
    steps: ["Hasan Usta cueille des oranges sur l'arbre.", "« Asya bu ağacı çok severdi. » — « Asya aimait beaucoup cet arbre. »", "Il les met dans un panier.", "Ça sent le soleil !"],
    bridge: "Hasan Usta les invite le soir pour boire le thé et jouer au tavla.",
  },
};

const antalya6: Lesson = {
  id: "tr-a1-antalya-6",
  level: "A1",
  cityId: "tr-antalya",
  number: 6,
  title: "Une soirée tranquille",
  minutes: 7,
  goals: ["Dire qui fait quoi en ce moment", "Utiliser -iyor avec toutes les personnes", "Jouer au jacquet à la turque"],
  vocabNote: "Le tavla, c'est le jacquet turc. Le six aux dés a un nom persan, şeş, mais le cinq est turc, beş. Şeş beş! — « six-cinq ! »",
  vocab: [
    v("tran6-1", "Ne yapıyorsunuz?", "Qu'est-ce que vous faites ?", "Tom jette un œil dans la cour éclairée par une lanterne.", "Écouter Ne yapıyorsunuz", p("l6-1")),
    v("tran6-2", "Tavla oynuyoruz.", "On joue au tavla.", "Hasan Usta et Murzik sont penchés sur un plateau de tavla.", "Écouter Tavla oynuyoruz", p("l6-2")),
    v("tran6-3", "Çay içiyorum.", "Je bois du thé.", "Murzik tient un verre en forme de tulipe à deux pattes.", "Écouter Çay içiyorum", p("l6-3")),
    v("tran6-4", "Kitap okuyor.", "Il lit un livre.", "Tom lit un livre sous une lanterne.", "Écouter Kitap okuyor", p("l6-4")),
    v("tran6-5", "Sıra sende!", "À toi de jouer !", "Hasan Usta tend les dés à Murzik.", "Écouter Sıra sende", p("l6-5")),
    v("tran6-6", "Kim kazandı?", "Qui a gagné ?", "Tom regarde le plateau avec curiosité.", "Écouter Kim kazandı", p("l6-6")),
    v("tran6-7", "sakin bir akşam", "une soirée tranquille", "La cour la nuit : une lanterne, l'oranger, les étoiles.", "Écouter sakin bir akşam", p("l6-7")),
  ],
  dialogue: {
    title: "Le tavla sous la lanterne",
    note: "Les Turcs disent aussi Bravo!.",
    lines: [
      line("tom", "Ne yapıyorsunuz?", "Qu'est-ce que vous faites ?"),
      line("hasan", "Tavla oynuyoruz. Gel, otur!", "On joue au tavla. Viens t'asseoir !"),
      line("murzik", "Ben de geliyorum!", "J'arrive aussi !"),
      line("hasan", "Murzik, sıra sende!", "Murzik, à toi de jouer !"),
      line("murzik", "Tamam… Şeş beş!", "D'accord… Six-cinq !"),
      line("tom", "Bravo! Kim kazandı?", "Bravo ! Qui a gagné ?"),
      line("hasan", "Murzik kazandı! Ne güzel, sakin bir akşam…", "Murzik a gagné ! Quelle belle soirée tranquille…"),
    ],
    gist: choice("tran6-d1", "Qui a gagné au tavla ?", [
      ["Murzik.", true],
      ["Hasan Usta.", false],
      ["À Tom.", false],
    ]),
  },
  grammar: [
    {
      title: "-iyor : toutes les personnes",
      paragraphs: [
        "Je — oynuyorum, tu — oynuyorsun, il / elle — oynuyor, nous — oynuyoruz, vous (poli ou pluriel) — oynuyorsunuz, ils / elles — oynuyorlar.",
        "La partie -yor ne change jamais — seule la voyelle devant change : iç-iyor, oku-yor, oyn-uyor, gül-üyor.",
      ],
      examples: [
        { ru: "Biz tavla oynuyoruz, onlar çay içiyorlar.", en: "Nous jouons au tavla, et eux boivent du thé." },
        { ru: "Sen ne yapıyorsun?", en: "Et toi, qu'est-ce que tu fais ?" },
      ],
    },
  ],
  tasks: [
    choice("tran6-t1", "Comment dit-on « Ils jouent » ?", [
      ["Oynuyorlar.", true],
      ["Oynuyoruz.", false],
      ["Oynuyorsun.", false],
    ], { skill: "grammar" }),
    listen("tran6-t2", "Écoute. Que fait Tom ?", "Tom kitap okuyor.", [
      ["Il lit un livre.", true],
      ["Il boit du thé.", false],
      ["Il joue au tavla.", false],
    ]),
    match("tran6-t3", "Associe les paires.", [
      ["tavla", "tavla (jacquet)"],
      ["Sıra sende!", "À toi de jouer !"],
      ["kazanmak", "gagner"],
      ["sakin", "calme, tranquille"],
    ], { skill: "words" }),
    spell("tran6-t4", "Épelle le mot « tavla ».", "tavla"),
    speak("tran6-t5", "Şu an ne yapıyorsun?", "Türkçe öğreniyorum!", "J'apprends le turc !", { help: "Dis à voix haute ce que tu fais en ce moment." }),
    listen("tran6-t6", "Souviens-toi de l'histoire de Hasan Usta. Qu'attendait Asya ?", "Bir mektup bekliyordu.", [
      ["Une lettre.", true],
      ["Un bus.", false],
      ["Un concert.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tavla",
    itemName: "Jeu de tavla",
    itemNameRu: "Tavla",
    ru: "Yaşasın! Bir tavla!",
    en: "Hourra ! Un jeu de tavla !",
    a11y: "Un plateau de tavla en bois incrusté de nacre, avec deux dés à côté.",
    image: p("tavla"),
    steps: ["Hasan Usta replie le plateau.", "« Al, bu senin. Sen kazandın! » — « Tiens, il est à toi. Tu as gagné ! »", "Murzik rapporte le jeu de tavla à la maison avec précaution.", "Maintenant, il peut jouer avec Tom !"],
    bridge: "Demain soir, Hasan Usta donne un concert dans une vieille cour de Kaleiçi. Et l'une des chansons est spéciale.",
  },
};

const antalya7: Lesson = {
  id: "tr-a1-antalya-7",
  level: "A1",
  cityId: "tr-antalya",
  number: 7,
  title: "Le concert de Hasan Usta",
  minutes: 8,
  goals: ["Encourager un musicien : « bravo ! », « encore une chanson ! »", "Dire « Je n'oublierai jamais »", "Réviser tous les mots d'Antalya"],
  vocabNote: "Alkışlamak veut dire « applaudir ». Alkışlayalım! — « Applaudissons-le ! »",
  vocab: [
    v("tran7-1", "Konser nasıldı?", "Comment était le concert ?", "Après le concert, Tom range son appareil photo et interroge Murzik.", "Écouter Konser nasıldı", p("l7-1")),
    v("tran7-2", "Çok duygusaldı.", "C'était très émouvant.", "Murzik essuie une petite larme en écoutant la musique.", "Écouter Çok duygusaldı", p("l7-2")),
    v("tran7-3", "Alkışlayalım!", "Applaudissons-le !", "Le public dans la cour applaudit le musicien.", "Écouter Alkışlayalım", p("l7-3")),
    v("tran7-4", "Bravo!", "Bravo ! Super !", "Murzik se lève d'un bond et applaudit, les pattes en l'air.", "Écouter Bravo", p("l7-4")),
    v("tran7-5", "Bir şarkı daha!", "Encore une chanson !", "Le public lève un doigt : « Encore une ! »", "Écouter Bir şarkı daha", p("l7-5")),
    v("tran7-6", "Bu senin için.", "C'est pour toi.", "Hasan Usta tend un petit saz à Murzik.", "Écouter Bu senin için", p("l7-6")),
    v("tran7-7", "Hiç unutmayacağım.", "Je ne l'oublierai jamais.", "Murzik serre le saz contre lui et regarde Hasan Usta.", "Écouter Hiç unutmayacağım", p("l7-7")),
  ],
  dialogue: {
    title: "Une chanson pour Asya",
    note: "Sen de çal — « joue-la, toi aussi ». Unutmayacağım — « je n'oublierai pas » : -ma- (ne… pas) + -yacak (futur).",
    lines: [
      line("hasan", "Bu şarkı Asya için.", "Cette chanson est pour Asya."),
      line("tom", "Alkışlayalım! Bravo!", "Applaudissons-le ! Bravo !"),
      line("murzik", "Bir şarkı daha!", "Encore une chanson !"),
      line("hasan", "Murzik, bu saz senin için. Asya'nın şarkısını sen de çal.", "Murzik, ce saz est pour toi. Joue la chanson d'Asya, toi aussi."),
      line("murzik", "Teşekkür ederim, Hasan Usta. Hiç unutmayacağım.", "Merci, Hasan Usta. Je ne l'oublierai jamais."),
      line("tom", "Konser nasıldı, Murzik?", "Comment était le concert, Murzik ?"),
      line("murzik", "Çok duygusaldı…", "C'était très émouvant…"),
    ],
    gist: choice("tran7-d1", "Que donne Hasan Usta à Murzik ?", [
      ["Un petit saz.", true],
      ["Une partition.", false],
      ["Des oranges.", false],
    ]),
  },
  grammar: [
    {
      title: "Le futur négatif : -meyecek, -mayacak",
      paragraphs: [
        "Le futur à la forme négative — « je ne ferai pas » — c'est -mayacak / -meyecek : unut-mayacağ-ım — je n'oublierai pas, gel-meyeceğ-im — je ne viendrai pas.",
        "Avec hiç, ça devient « jamais » : Hiç unutmayacağım. — Je n'oublierai jamais.",
      ],
      examples: [
        { ru: "Seni hiç unutmayacağım.", en: "Je ne t'oublierai jamais." },
        { ru: "Yarın gelmeyeceğim.", en: "Je ne viendrai pas demain." },
      ],
    },
  ],
  tasks: [
    listen("tran7-t1", "Examen audio. Que se passe-t-il aujourd'hui ?", "Bu akşam saat dokuzda avluda konser var. Herkes gelsin!", [
      ["Un concert dans la cour à neuf heures — tout le monde est le bienvenu.", true],
      ["Un concert au théâtre à huit heures.", false],
      ["Un dîner à neuf heures.", false],
    ]),
    choice("tran7-t2", "Comment dit-on « Je n'oublierai jamais » ?", [
      ["Hiç unutmayacağım.", true],
      ["Hiç unutacağım.", false],
      ["Hiç unutmadım.", false],
    ], { skill: "grammar" }),
    match("tran7-t3", "Associe les paires.", [
      ["Bravo!", "Bravo !"],
      ["Bir şarkı daha!", "Encore une chanson !"],
      ["Alkışlayalım!", "Applaudissons-le !"],
      ["unutmak", "oublier"],
    ], { skill: "words" }),
    missing("tran7-t4", "Quelle lettre manque ? (« Applaudissons-le ! »)", "Alkı", "layalım!", "ş", ["ş", "s", "ç"]),
    speak("tran7-t5", "Konser nasıldı?", "Harikaydı! Çok beğendim.", "C'était merveilleux ! J'ai adoré.", { help: "Dis à voix haute comment tu as trouvé le concert." }),
    script("tran7-t6", "Souviens-toi de tout Antalya. Complète les conversations.", [
      { speaker: "Tom", text: "Ne yapmayı seviyorsun?" },
      { speaker: "You", answer: "Resim yapmayı seviyorum.", options: ["Resim yapmayı seviyorum.", "Resim yapıyorum seviyorum.", "Çalamıyorum."] },
      { speaker: "Hasan Usta", text: "Saz çalabiliyor musun?" },
      { speaker: "You", answer: "Hayır, çalamıyorum.", options: ["Hayır, çalamıyorum.", "Hayır, çalmayı.", "Her gün."] },
      { speaker: "Tom", text: "Konseri beğendin mi?" },
      { speaker: "You", answer: "Çok beğendim!", options: ["Çok beğendim!", "Çok beğeneceğim!", "Sıra sende!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "baglama",
    itemName: "Petit saz",
    itemNameRu: "Bağlama",
    ru: "Yaşasın! Küçük bir bağlama!",
    en: "Hourra ! Un petit bağlama !",
    a11y: "Un petit saz à long manche, à la caisse en bois clair. Un minuscule chat est sculpté sur la caisse.",
    image: p("baglama"),
    steps: ["Hasan Usta tend un petit saz à Murzik.", "« Bunu Asya için yapmıştım. » — « Je l'avais fabriqué pour Asya, il y a longtemps. »", "Un minuscule chat est sculpté sur la caisse.", "Murzik serre le saz contre lui."],
    bridge: "Il est temps de partir. Hasan Usta a dit qu'Asya était partie pour Konya.",
  },
};

const story: CityStory = {
  home: {
    name: "Une maison de pierre à Kaleiçi",
    nameRu: "Kaleiçi'nde taş ev",
    image: p("home"),
    a11y: "Une chambre vide aux murs de pierre et au plafond en bois. La fenêtre donne sur une cour avec un oranger. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "baglama",
  welcomeRu: "Merhaba, Antalya!",
  welcomeEn: "Bonjour, Antalya !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom devant l'antique porte d'Hadrien à Antalya. Derrière eux : les ruelles de Kaleiçi et des orangers.",
  departureImage: p("departure"),
  departureA11y: "Murzik et Tom avec leurs valises et le petit saz à la gare routière. Au loin, des montagnes enneigées.",
  finale: [
    {
      image: p("fenêtre"),
      a11y: "Le soir. Murzik joue doucement du petit saz près de la fenêtre. Dans la cour, à l'ombre de l'oranger, un chat blanc au chapeau écoute.",
      lines: [
        { en: "Le dernier soir, Murzik essaie de jouer la chanson « Asya ». Pour l'instant, il n'y arrive qu'un tout petit peu." },
        { en: "Dehors, à l'ombre de l'oranger, quelqu'un écoute. Un chat blanc au chapeau… Mais quand Murzik regarde par la fenêtre, la cour est vide." },
        { ru: "Yine o kedi…", en: "Encore ce chat…" },
      ],
    },
    {
      image: p("baglama"),
      a11y: "Murzik fait le tour de sa maison de pierre, meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa maison de pierre à Kaleiçi. Tom la prend en photo pour son carnet de voyage." },
        { en: "Murzik emporte le petit saz de Hasan Usta." },
        { en: "La partition de la chanson « Asya » va dans la poche de la valise, à côté des cartes postales." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, et Tom fête ça avec lui.",
      lines: [
        { ru: "Antalya tamamlandı!", en: "Antalya, c'est fait !" },
        { en: "7 / 7 leçons" },
        { ru: "Yolun yarısı!", en: "La moitié du chemin !" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Murzik et Tom disent au revoir à Hasan Usta près du bus.",
      lines: [
        { ru: "Hoşça kalın, Hasan Usta!", en: "Au revoir, Hasan Usta !" },
        { ru: "Sıradaki durak: Konya!", en: "Prochain arrêt : Konya !" },
      ],
    },
    {
      image: p("road"),
      a11y: "Le bus grimpe à travers les montagnes enneigées jusqu'à un haut plateau.",
      lines: [
        { en: "Murzik et Tom sont restés au bord de la mer chaude jusqu'à l'hiver. Là-haut, dans les montagnes, la neige est déjà là." },
        { ru: "Antalya → Konya", en: "Antalya → Konya" },
      ],
    },
    {
      image: pic("tr/konya/arrival"),
      a11y: "Murzik et Tom à Konya, près d'une coupole turquoise. Il fait froid, et une neige légère tombe.",
      lines: [
        { ru: "Merhaba, Konya!", en: "Bonjour, Konya !" },
        { ru: "Brr… Burası çok soğuk!", en: "Brrr… Qu'est-ce qu'il fait froid ici !" },
      ],
    },
  ],
};

export const trAntalyaFr = {
  id: "tr-antalya",
  name: "Antalya",
  nameTr: "Antalya",
  lessons: [antalya1, antalya2, antalya3, antalya4, antalya5, antalya6, antalya7],
  story,
};
