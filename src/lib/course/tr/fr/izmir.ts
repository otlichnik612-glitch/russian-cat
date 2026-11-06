import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, fill, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Izmir · “Family” · at Aunt Leyla's: family, age, looks, character, jobs, friends, a family dinner. French version. */

const p = (name: string) => pic(`tr/izmir/${name}`);

const izmir1: Lesson = {
  id: "tr-a1-izmir-1",
  level: "A1",
  cityId: "tr-izmir",
  number: 1,
  title: "Ma famille",
  minutes: 7,
  goals: ["Nommer les membres d'une famille", "Dire « mon, ma » : annem, babam", "Présenter sa famille"],
  vocabNote: "En français, on dit simplement « tante » et « oncle », mais le turc a des mots différents : teyze, c'est la sœur de ta mère, hala, la sœur de ton père, dayı, le frère de ta mère, amca, le frère de ton père. Le mari d'une tante, c'est enişte. La mère de ta mère, c'est anneanne, la mère de ton père, babaanne.",
  vocab: [
    v("triz1-1", "Bu benim ailem.", "Voici ma famille.", "Tante Leyla serre dans ses bras son mari et leurs deux chatons, sur le pas de la porte.", "Écouter Bu benim ailem", p("l1-1")),
    v("triz1-2", "annem", "ma maman", "Murzik tient une petite photo encadrée de sa maman.", "Écouter annem", p("l1-2")),
    v("triz1-3", "babam", "mon papa", "Murzik montre une photo de son papa — un chat roux à lunettes.", "Écouter babam", p("l1-3")),
    v("triz1-4", "kardeşim", "mon frère ou ma sœur", "Tarçın et Minnoş sont côte à côte et se montrent l'un l'autre.", "Écouter kardeşim", p("l1-4")),
    v("triz1-5", "teyzem", "ma tante (la sœur de maman)", "Murzik serre joyeusement tante Leyla dans ses bras.", "Écouter teyzem", p("l1-5")),
    v("triz1-6", "kuzenim", "mon cousin, ma cousine", "Murzik, Tarçın et Minnoş sont assis en rang sur le canapé.", "Écouter kuzenim", p("l1-6")),
    v("triz1-7", "anneannem", "ma grand-mère (la maman de maman)", "La carte postale de grand-mère Asya, avec le petit chat roux peint, est posée sur la table.", "Écouter anneannem", p("l1-7")),
  ],
  dialogue: {
    title: "Chez tante Leyla",
    note: "Eşim — mon mari ou ma femme, oğlum — mon fils, kızım — ma fille. Tante Leyla est la fille de grand-mère Asya et la sœur de la maman de Murzik.",
    lines: [
      line("leyla", "Murzik! Hoş geldin, canım!", "Murzik ! Bienvenue, mon chéri !"),
      line("murzik", "Teyze! Bu Tom, benim arkadaşım.", "Tata ! Voici Tom, mon ami."),
      line("leyla", "Hoş geldin, Tom! Bu benim ailem: eşim Mehmet, oğlum Tarçın ve kızım Minnoş.", "Bienvenue, Tom ! Voici ma famille : mon mari Mehmet, mon fils Tarçın et ma fille Minnoş."),
      line("tom", "Memnun oldum!", "Enchanté !"),
      line("minnos", "Sen Murzik misin? Benim kuzenim misin?", "Tu es Murzik ? Tu es mon cousin ?"),
      line("murzik", "Evet, senin kuzeninim!", "Oui, je suis ton cousin !"),
      line("tarcin", "Hoş geldin, kuzen!", "Bienvenue, cousin !"),
    ],
    gist: choice("triz1-d1", "Qui accueille Murzik ?", [
      ["Tante Leyla et sa famille.", true],
      ["Ayşe Teyze.", false],
      ["Kemal Bey.", false],
    ]),
  },
  grammar: [
    {
      title: "Mon, ma : -m, -ım, -im",
      paragraphs: [
        "En turc, « mon, ma » est une terminaison sur le mot lui-même. Après une voyelle, c'est -m : anne → annem, baba → babam. Après une consonne, c'est -ım, -im, -um ou -üm : kardeş → kardeşim, kuzen → kuzenim.",
        "On peut ajouter benim pour insister : benim annem — ma maman à moi.",
      ],
      examples: [
        { ru: "Bu benim teyzem.", en: "Voici ma tante." },
        { ru: "Kardeşim Paris'te yaşıyor.", en: "Mon frère habite à Paris." },
      ],
    },
  ],
  tasks: [
    choice("triz1-t1", "Comment dit-on « mon papa » ?", [
      ["babam", true],
      ["baban", false],
      ["babası", false],
    ], { skill: "grammar" }),
    listen("triz1-t2", "Écoute. Qui est-ce ?", "Bu benim teyzem.", [
      ["Une tante — la sœur de maman.", true],
      ["Une grand-mère.", false],
      ["Un cousin.", false],
    ]),
    match("triz1-t3", "Associe les paires.", [
      ["annem", "ma maman"],
      ["babam", "mon papa"],
      ["kardeşim", "mon frère ou ma sœur"],
      ["anneannem", "ma grand-mère du côté de maman"],
    ], { skill: "words" }),
    missing("triz1-t4", "Quelle lettre manque ? (« ma famille »)", "ail", "m", "e", ["e", "a", "i"]),
    speak("triz1-t5", "Ailende kim var?", "Annem, babam ve bir kardeşim var.", "J'ai une maman, un papa et un frère (ou une sœur).", { help: "Parle de ta famille à voix haute." }),
    choice("triz1-t6", "On te propose de te resservir, mais tu as assez mangé. Que dis-tu ?", [
      ["Doydum, teşekkürler.", true],
      ["Çok açım!", false],
      ["Hazır!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "saksi",
    itemName: "Pot de fleurs",
    itemNameRu: "Saksı",
    ru: "Yaşasın! Çiçekli bir saksı!",
    en: "Hourra ! Un pot de fleurs !",
    a11y: "Un pot de bougainvillée rose vif est posé sur un balcon qui donne sur la mer.",
    image: p("saksi"),
    steps: ["Tante Leyla apporte un pot de fleurs.", "Murzik le pose sur le balcon.", "En bas, la mer murmure.", "Maintenant, il a aussi un jardin !"],
    bridge: "Minnoş tire Murzik par la patte : « Tu as quel âge ? Moi, j'ai cinq ans ! »",
  },
};

const izmir2: Lesson = {
  id: "tr-a1-izmir-2",
  level: "A1",
  cityId: "tr-izmir",
  number: 2,
  title: "Tu as quel âge ?",
  minutes: 7,
  goals: ["Demander et dire l'âge de quelqu'un", "Dire « plus grand » et « plus petit »", "Demander combien de frères et sœurs on a"],
  vocabNote: "Yaş veut dire « âge ». Kaç yaşındasın? veut dire mot à mot « à quel âge es-tu ? ».",
  vocab: [
    v("triz2-1", "Kaç yaşındasın?", "Tu as quel âge ?", "Minnoş lève les yeux vers Murzik avec curiosité.", "Écouter Kaç yaşındasın", p("l2-1")),
    v("triz2-2", "Beş yaşındayım.", "J'ai cinq ans.", "Minnoş montre fièrement sa patte ouverte — cinq petits doigts.", "Écouter Beş yaşındayım", p("l2-2")),
    v("triz2-3", "büyük", "plus grand, aîné", "Tarçın est à côté de la petite Minnoş et bombe le torse d'un air important.", "Écouter büyük", p("l2-3")),
    v("triz2-4", "küçük", "plus petit, cadet", "La toute petite Minnoş se met sur la pointe des pieds à côté de son frère.", "Écouter küçük", p("l2-4")),
    v("triz2-5", "genç", "jeune", "Tom saute par-dessus une flaque d'un pas léger.", "Écouter genç", p("l2-5")),
    v("triz2-6", "yaşlı", "vieux, âgé", "Un vieil homme aux cheveux gris avec une canne sourit sur un banc au bord de la mer.", "Écouter yaşlı", p("l2-6")),
    v("triz2-7", "Kaç kardeşin var?", "Tu as combien de frères et sœurs ?", "Tom lève trois doigts et regarde Murzik d'un air interrogateur.", "Écouter Kaç kardeşin var", p("l2-7")),
  ],
  dialogue: {
    title: "Minnoş fait les comptes",
    note: "Anneannemiz veut dire « notre grand-mère ». Onu çok uzun zamandır görmedim — « Je ne l'ai pas vue depuis très longtemps ».",
    lines: [
      line("minnos", "Murzik, kaç yaşındasın?", "Murzik, tu as quel âge ?"),
      line("murzik", "Altı yaşındayım. Ya sen?", "J'ai six ans. Et toi ?"),
      line("minnos", "Ben beş yaşındayım! Tarçın on iki yaşında.", "J'ai cinq ans ! Tarçın a douze ans."),
      line("tarcin", "Evet, ben büyüğüm!", "Oui, c'est moi le plus grand !"),
      line("murzik", "Tom kaç yaşında?", "Tom a quel âge ?"),
      line("tom", "Yirmi beş yaşındayım. Yaşlı değilim, gencim!", "J'ai vingt-cinq ans. Je ne suis pas vieux, je suis jeune !"),
      line("minnos", "Ya anneannemiz? Kaç yaşında?", "Et notre grand-mère ? Elle a quel âge ?"),
      line("leyla", "Bilmiyorum, canım… Onu çok uzun zamandır görmedim.", "Je ne sais pas, ma chérie… Je ne l'ai pas vue depuis très longtemps."),
    ],
    gist: choice("triz2-d1", "Qui a cinq ans ?", [
      ["Minnoş.", true],
      ["Tarçın.", false],
      ["Murzik.", false],
    ]),
  },
  grammar: [
    {
      title: "Quel âge : yaşında",
      paragraphs: [
        "Pour dire un âge, on utilise un nombre et yaşında : Minnoş beş yaşında. — Minnoş a cinq ans (mot à mot « est à cinq ans »).",
        "Pour parler de soi, on ajoute la terminaison « je suis » : beş yaşındayım (j'ai cinq ans), yirmi yaşındayım (j'ai vingt ans). La question : Kaç yaşındasın? Poliment : Kaç yaşındasınız?",
      ],
      examples: [
        { ru: "Tarçın on iki yaşında.", en: "Tarçın a douze ans." },
        { ru: "Ben yirmi beş yaşındayım.", en: "J'ai vingt-cinq ans." },
      ],
    },
  ],
  tasks: [
    listen("triz2-t1", "Écoute. Quel âge a la personne qui parle ?", "On iki yaşındayım.", [
      ["12", true],
      ["20", false],
      ["2", false],
    ]),
    choice("triz2-t2", "Comment dit-on « J'ai cinq ans » ?", [
      ["Beş yaşındayım.", true],
      ["Beş yaşım.", false],
      ["Ben beş yaş.", false],
    ], { skill: "grammar" }),
    match("triz2-t3", "Associe les paires.", [
      ["genç", "jeune"],
      ["yaşlı", "âgé"],
      ["büyük", "plus grand, aîné"],
      ["küçük", "plus petit, cadet"],
    ], { skill: "words" }),
    missing("triz2-t4", "Quelle lettre manque ? (« Tu as quel âge ? »)", "Kaç ya", "ındasın?", "ş", ["ş", "s", "z"]),
    speak("triz2-t5", "Kaç yaşındasın?", "Yirmi yaşındayım.", "J'ai vingt ans.", { help: "Dis ton âge à voix haute." }),
    choice("triz2-t6", "Comment dit-on « ma maman » ?", [
      ["annem", true],
      ["annen", false],
      ["annesi", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "resim",
    itemName: "Le dessin de Minnoş",
    itemNameRu: "Minnoş'un resmi",
    ru: "Yaşasın! Minnoş'un resmi!",
    en: "Hourra ! Le dessin de Minnoş !",
    a11y: "Un dessin d'enfant au feutre : un chaton roux, un grand homme en manteau vert et un gros soleil.",
    image: p("resim"),
    steps: ["Minnoş dessine au feutre.", "« Bu sensin, bu da Tom! » — « Ça, c'est toi, et ça, c'est Tom ! »", "Murzik accroche le dessin au mur.", "Le tableau le plus précieux de la maison !"],
    bridge: "Minnoş dessine toute la famille : « Murzik, Tarçın nasıl görünüyor? »",
  },
};

const izmir3: Lesson = {
  id: "tr-a1-izmir-3",
  level: "A1",
  cityId: "tr-izmir",
  number: 3,
  title: "Comment il est ?",
  minutes: 7,
  goals: ["Décrire l'apparence de quelqu'un", "Dire de quelle couleur sont les yeux de quelqu'un", "Placer l'adjectif avant le nom"],
  vocabNote: "Boy veut dire « taille ». Uzun boylu — « grand », kısa boylu — « petit » (pour une personne).",
  vocab: [
    v("triz3-1", "Nasıl görünüyor?", "Comment il est ?", "Minnoş, un feutre à la patte, regarde Murzik et attend une description.", "Écouter Nasıl görünüyor", p("l3-1")),
    v("triz3-2", "uzun boylu", "grand", "Le grand Tom à côté du petit Murzik, près d'une toise.", "Écouter uzun boylu", p("l3-2")),
    v("triz3-3", "kısa boylu", "petit", "Tarçın est près de la même toise et n'atteint pas la marque du haut.", "Écouter kısa boylu", p("l3-3")),
    v("triz3-4", "sarışın", "blond", "Tom aux cheveux dorés au soleil.", "Écouter sarışın", p("l3-4")),
    v("triz3-5", "esmer", "brun, à la peau mate", "Une femme brune à la peau mate sourit sur le front de mer.", "Écouter esmer", p("l3-5")),
    v("triz3-6", "Gözleri mavi.", "Il a les yeux bleus.", "Gros plan sur les yeux bleus de Tom.", "Écouter Gözleri mavi", p("l3-6")),
    v("triz3-7", "kıvırcık saçlı", "frisé", "Une petite fille avec une tignasse de boucles.", "Écouter kıvırcık saçlı", p("l3-7")),
  ],
  dialogue: {
    title: "Un portrait pour Minnoş",
    note: "Tombul veut dire « potelé » — un mot affectueux. Kızıldı — « était roux », yeşildi — « étaient verts » : la terminaison -di veut dire « était / étaient ».",
    lines: [
      line("minnos", "Tom nasıl görünüyor? Çiziyorum!", "Comment il est, Tom ? Je dessine !"),
      line("murzik", "Tom uzun boylu ve sarışın. Gözleri mavi.", "Tom est grand et blond. Il a les yeux bleus."),
      line("minnos", "Peki Tarçın?", "Et Tarçın ?"),
      line("murzik", "Tarçın kısa boylu… ve biraz tombul!", "Tarçın est petit… et un peu potelé !"),
      line("tarcin", "Tombul değilim! Sadece çok yemek yiyorum.", "Je ne suis pas potelé ! Je mange juste beaucoup."),
      line("leyla", "Anneannenizin tüyleri kızıldı. Gözleri yeşildi.", "Votre grand-mère avait le pelage roux. Et ses yeux étaient verts."),
    ],
    gist: choice("triz3-d1", "Comment est Tom ?", [
      ["Grand et blond, avec les yeux bleus.", true],
      ["Petit et frisé.", false],
      ["Brun, avec les yeux verts.", false],
    ]),
  },
  grammar: [
    {
      title: "L'adjectif d'abord",
      paragraphs: [
        "Contrairement au français, l'adjectif se met avant le nom — et il ne change jamais : uzun boylu bir adam (un homme grand), uzun boylu bir kadın (une femme grande). Le turc n'a pas du tout de genre grammatical : même « il » et « elle » se disent pareil, o.",
        "Gözleri mavi — « ses yeux sont bleus ». La terminaison -leri veut dire « ses » pour plusieurs choses.",
      ],
      examples: [
        { ru: "Uzun boylu bir kadın.", en: "Une grande femme." },
        { ru: "Minnoş'un gözleri yeşil.", en: "Minnoş a les yeux verts." },
      ],
    },
  ],
  tasks: [
    match("triz3-t1", "Associe les paires.", [
      ["uzun boylu", "grand"],
      ["kısa boylu", "petit"],
      ["sarışın", "blond"],
      ["esmer", "brun"],
    ], { skill: "words" }),
    listen("triz3-t2", "Écoute. De quelle couleur sont ses yeux ?", "Gözleri yeşil.", [
      ["Verts.", true],
      ["Bleus.", false],
      ["Marron.", false],
    ]),
    choice("triz3-t3", "Comment dit-on « une grande femme » ?", [
      ["uzun boylu bir kadın", true],
      ["kadın uzun boylu bir", false],
      ["uzun boylular bir kadın", false],
    ], { skill: "grammar" }),
    missing("triz3-t4", "Quelle lettre manque ? (« blond »)", "sarı", "ın", "ş", ["ş", "s", "c"]),
    speak("triz3-t5", "Annen nasıl görünüyor?", "Annem kısa boylu ve esmer.", "Ma maman est petite et brune.", { help: "Décris à voix haute quelqu'un de ta famille." }),
    listen("triz3-t6", "Souviens-toi de la leçon précédente. Quel âge ?", "Yirmi beş yaşında.", [
      ["25", true],
      ["52", false],
      ["15", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "ayna",
    itemName: "Miroir",
    itemNameRu: "Ayna",
    ru: "Yaşasın! Yeni bir ayna!",
    en: "Hourra ! Un nouveau miroir !",
    a11y: "Un miroir rond au cadre en mosaïque bleue. Murzik et Minnoş y font des grimaces.",
    image: p("ayna"),
    steps: ["Oncle Mehmet accroche un miroir rond au mur.", "Murzik se regarde : pelage roux, yeux verts.", "« Gözlerin anneannen gibi! » — « Tu as les yeux de ta grand-mère ! »", "Murzik sourit à son reflet."],
    bridge: "Tarçın est affalé sur le canapé : « Je ne suis pas paresseux, je me repose ! »",
  },
};

const izmir4: Lesson = {
  id: "tr-a1-izmir-4",
  level: "A1",
  cityId: "tr-izmir",
  number: 4,
  title: "Il est comment ?",
  minutes: 7,
  goals: ["Décrire le caractère de quelqu'un", "Dire « très », « un peu » et « pas du tout »", "Faire un compliment"],
  vocabNote: "Tatlı veut dire à la fois « sucré » et « mignon ». Çok tatlı!, c'est ce qu'on dit des enfants, des chatons et de tout ce qui est adorable.",
  vocab: [
    v("triz4-1", "Nasıl biri?", "Il est comment ?", "Tom montre d'un air interrogateur Tarçın, endormi dans un hamac.", "Écouter Nasıl biri", p("l4-1")),
    v("triz4-2", "neşeli", "joyeux", "Minnoş rit et tourne sur elle-même.", "Écouter neşeli", p("l4-2")),
    v("triz4-3", "tembel", "paresseux", "Tarçın pend mollement du hamac avec une pomme à moitié mangée.", "Écouter tembel", p("l4-3")),
    v("triz4-4", "çalışkan", "travailleur", "Minnoş dessine très concentrée, entourée d'une pile de dessins finis.", "Écouter çalışkan", p("l4-4")),
    v("triz4-5", "sakin", "calme", "Oncle Mehmet boit lentement son thé en regardant la mer.", "Écouter sakin", p("l4-5")),
    v("triz4-6", "komik", "drôle", "Tarçın fait une grimace rigolote, et tout le monde rit.", "Écouter komik", p("l4-6")),
    v("triz4-7", "Çok tatlı!", "Trop mignon !", "Tante Leyla regarde tendrement Minnoş, profondément endormie.", "Écouter Çok tatlı", p("l4-7")),
  ],
  dialogue: {
    title: "Le cousin paresseux",
    note: "Hamakta yatıyor — « il est allongé dans le hamac ». Neşeliydi — « elle était joyeuse ».",
    lines: [
      line("leyla", "Tarçın çok tembel! Bütün gün hamakta yatıyor.", "Tarçın est tellement paresseux ! Il reste allongé dans le hamac toute la journée."),
      line("tarcin", "Tembel değilim, sakinim!", "Je ne suis pas paresseux, je suis calme !"),
      line("murzik", "Ama çok komik!", "Mais il est vraiment drôle !"),
      line("leyla", "Evet, neşeli bir çocuk. Minnoş da çok çalışkan: her gün resim yapıyor.", "Oui, c'est un garçon joyeux. Et Minnoş est très travailleuse : elle dessine tous les jours."),
      line("murzik", "Anneannem de resim yapardı, değil mi?", "Grand-mère peignait aussi, non ?"),
      line("leyla", "Evet… Annem çok neşeliydi.", "Oui… Ma mère était très joyeuse."),
    ],
    gist: choice("triz4-d1", "Comment est Tarçın, d'après sa maman ?", [
      ["Paresseux.", true],
      ["Travailleur.", false],
      ["Triste.", false],
    ]),
  },
  grammar: [
    {
      title: "Très, un peu, pas du tout",
      paragraphs: [
        "Çok veut dire « très », biraz veut dire « un peu » : çok neşeli — très joyeux, biraz tembel — un peu paresseux.",
        "« Pas du tout », c'est hiç … değil : Minnoş hiç sakin değil! — Minnoş n'est pas calme du tout ! Değil (pas) se met après le mot, comme dans Fena değil.",
      ],
      examples: [
        { ru: "Tarçın biraz tembel ama çok komik.", en: "Tarçın est un peu paresseux, mais très drôle." },
        { ru: "Minnoş hiç sakin değil!", en: "Minnoş n'est pas calme du tout !" },
      ],
    },
  ],
  tasks: [
    choice("triz4-t1", "Comment dit-on « Il n'est pas calme du tout » ?", [
      ["Hiç sakin değil.", true],
      ["Hiç sakin.", false],
      ["Sakin hiç değil mi.", false],
    ], { skill: "grammar" }),
    listen("triz4-t2", "Écoute. Comment est Minnoş ?", "Minnoş çok çalışkan.", [
      ["Travailleur.", true],
      ["Paresseux.", false],
      ["Calme.", false],
    ]),
    match("triz4-t3", "Associe les paires.", [
      ["neşeli", "joyeux"],
      ["tembel", "paresseux"],
      ["sakin", "calme"],
      ["komik", "drôle"],
    ], { skill: "words" }),
    spell("triz4-t4", "Épelle le mot « joyeux ».", "neşeli"),
    speak("triz4-t5", "En iyi arkadaşın nasıl biri?", "Çok neşeli ve biraz tembel!", "Très joyeux et un peu paresseux !", { help: "Décris à voix haute le caractère d'un ami." }),
    choice("triz4-t6", "Comment dit-on « Il a les yeux bleus » ?", [
      ["Gözleri mavi.", true],
      ["Gözler mavi.", false],
      ["Mavi gözleri.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "hamak",
    itemName: "Hamac",
    itemNameRu: "Hamak",
    ru: "Yaşasın! Bir hamak!",
    en: "Hourra ! Un hamac !",
    a11y: "Un hamac rayé est accroché sur une terrasse qui donne sur la mer. Tarçın y dort profondément.",
    image: p("hamak"),
    steps: ["Tarçın donne son vieux hamac à Murzik.", "« Bende iki tane var! » — « J'en ai deux ! »", "Murzik accroche le hamac sur la terrasse.", "Tarçın s'y endort aussitôt."],
    bridge: "Le soir, oncle Mehmet rentre du travail. « Alors, qui fait quoi ? » demande Tom.",
  },
};

const izmir5: Lesson = {
  id: "tr-a1-izmir-5",
  level: "A1",
  cityId: "tr-izmir",
  number: 5,
  title: "Qu'est-ce que tu fais dans la vie ?",
  minutes: 7,
  goals: ["Demander le métier de quelqu'un", "Nommer des métiers", "Dire « je suis professeur », « je suis cuisinier »"],
  vocabNote: "-cı, -ci, -cu, -cü est une terminaison pour les métiers, un peu comme -ier ou -eur en français ; après les sons ç, f, h, k, p, s, ş, t, elle devient -çı, -çi, -çu, -çü : fotoğraf (photo) → fotoğrafçı (photographe), simit → simitçi (vendeur de simits).",
  vocab: [
    v("triz5-1", "Ne iş yapıyorsun?", "Qu'est-ce que tu fais dans la vie ?", "Tom, un carnet à la main, interroge oncle Mehmet.", "Écouter Ne iş yapıyorsun", p("l5-1")),
    v("triz5-2", "öğretmen", "professeur", "Tante Leyla au tableau d'une école, avec une baguette.", "Écouter öğretmen", p("l5-2")),
    v("triz5-3", "aşçı", "cuisinier, chef", "Oncle Mehmet devant la cuisinière, avec une toque blanche.", "Écouter aşçı", p("l5-3")),
    v("triz5-4", "ressam", "peintre, artiste", "Minnoş devant un chevalet, en béret, un pinceau à la patte.", "Écouter ressam", p("l5-4")),
    v("triz5-5", "fotoğrafçı", "photographe", "Tom, un appareil photo autour du cou, photographie le front de mer.", "Écouter fotoğrafçı", p("l5-5")),
    v("triz5-6", "doktor", "médecin", "Un médecin en blouse blanche avec un stéthoscope.", "Écouter doktor", p("l5-6")),
    v("triz5-7", "Öğrenciyim.", "Je suis élève.", "Tarçın, avec un sac à dos et des livres, bâille à la porte de l'école.", "Écouter Öğrenciyim", p("l5-7")),
  ],
  dialogue: {
    title: "Qui fait quoi",
    note: "Lokantam var — « j'ai un petit restaurant ». Uyuyorum — « je dors ».",
    lines: [
      line("mehmet", "Merhaba! Ben geldim!", "Bonjour ! Je suis rentré !"),
      line("murzik", "Mehmet Enişte, ne iş yapıyorsun?", "Oncle Mehmet, qu'est-ce que tu fais dans la vie ?"),
      line("mehmet", "Aşçıyım! Kordon'da küçük bir lokantam var.", "Je suis cuisinier ! J'ai un petit restaurant sur le Kordon."),
      line("tom", "Leyla Hanım, siz ne iş yapıyorsunuz?", "Leyla Hanım, et vous, que faites-vous ?"),
      line("leyla", "Ben öğretmenim. Ya sen, Tom?", "Je suis professeure. Et toi, Tom ?"),
      line("tom", "Ben fotoğrafçıyım.", "Je suis photographe."),
      line("minnos", "Ben de ressamım!", "Et moi, je suis peintre !"),
      line("tarcin", "Ben… öğrenciyim. Ve uyuyorum.", "Moi, je suis… élève. Et je dors."),
    ],
    gist: choice("triz5-d1", "Que fait oncle Mehmet ?", [
      ["Il est cuisinier.", true],
      ["Il est professeur.", false],
      ["Il est photographe.", false],
    ]),
  },
  grammar: [
    {
      title: "Je suis professeur : öğretmenim",
      paragraphs: [
        "Ton propre métier prend la même terminaison « je suis » que iyiyim : öğretmen → öğretmenim (je suis professeur), aşçı → aşçıyım (je suis cuisinier). Comme en français, pas d'article ici.",
        "Pour quelqu'un d'autre, pas besoin de terminaison : Leyla öğretmen. Mehmet aşçı. La question polie : Ne iş yapıyorsunuz?",
      ],
      examples: [
        { ru: "Ben fotoğrafçıyım.", en: "Je suis photographe." },
        { ru: "Siz doktor musunuz?", en: "Tu es médecin ?" },
      ],
    },
  ],
  tasks: [
    choice("triz5-t1", "Comment dit-on « Je suis photographe » ?", [
      ["Fotoğrafçıyım.", true],
      ["Fotoğrafçım.", false],
      ["Fotoğrafçısın.", false],
    ], { skill: "grammar" }),
    listen("triz5-t2", "Écoute. Que fait la personne qui parle ?", "Ben doktorum.", [
      ["Médecin.", true],
      ["Professeur.", false],
      ["Cuisinier.", false],
    ]),
    match("triz5-t3", "Associe les paires.", [
      ["öğretmen", "professeur"],
      ["aşçı", "cuisinier"],
      ["ressam", "peintre"],
      ["fotoğrafçı", "photographe"],
    ], { skill: "words" }),
    missing("triz5-t4", "Quelle lettre manque ? (« cuisinier »)", "a", "çı", "ş", ["ş", "s", "ç"]),
    speak("triz5-t5", "Ne iş yapıyorsun?", "Öğrenciyim.", "Je suis élève.", { help: "Dis à voix haute ce que tu fais dans la vie." }),
    choice("triz5-t6", "Comment dit-on « Il est très joyeux » ?", [
      ["Çok neşeli.", true],
      ["Hiç neşeli.", false],
      ["Neşeli çok.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "saat",
    itemName: "Horloge de la tour",
    itemNameRu: "Saat",
    ru: "Yaşasın! Küçük bir saat!",
    en: "Hourra ! Une petite horloge !",
    a11y: "Une petite pendule de table — une copie de la célèbre tour de l'horloge d'Izmir, avec des motifs et des arcades.",
    image: p("saat"),
    steps: ["Oncle Mehmet apporte une boîte.", "Dedans, une petite horloge — une copie de la tour de l'horloge.", "« İzmir'in simgesi! » — « Le symbole d'Izmir ! »", "L'horloge tic-taque doucement sur l'étagère."],
    bridge: "Tante Leyla dit : « Demain, Tarçın va vous présenter son amie ! »",
  },
};

const izmir6: Lesson = {
  id: "tr-a1-izmir-6",
  level: "A1",
  cityId: "tr-izmir",
  number: 6,
  title: "Mes amis",
  minutes: 7,
  goals: ["Parler de ses amis", "Dire « j'ai » et « je n'ai pas »", "Présenter des amis les uns aux autres"],
  vocabNote: "Tanıştırayım — « laisse-moi te présenter ». C'est comme ça qu'on commence quand on présente quelqu'un à quelqu'un.",
  vocab: [
    v("triz6-1", "arkadaş", "ami, amie", "Murzik et Tom se promènent sur le front de mer, bras dessus, bras dessous.", "Écouter arkadaş", p("l6-1")),
    v("triz6-2", "Benim bir arkadaşım var.", "J'ai un ami.", "Tarçın montre une photo sur son téléphone en souriant.", "Écouter Benim bir arkadaşım var", p("l6-2")),
    v("triz6-3", "en iyi arkadaşım", "mon meilleur ami", "Murzik et Tom se tapent dans la main.", "Écouter en iyi arkadaşım", p("l6-3")),
    v("triz6-4", "Onu tanıyor musun?", "Tu la connais ?", "Tarçın montre une fille au loin et regarde Murzik d'un air interrogateur.", "Écouter Onu tanıyor musun", p("l6-4")),
    v("triz6-5", "Tanıştırayım: …", "Laisse-moi te présenter…", "Tom tend la main vers Murzik pour le présenter.", "Écouter Tanıştırayım", p("l6-5")),
    v("triz6-6", "komşu", "voisin, voisine", "Une voisine fait signe depuis le balcon d'à côté, couvert de fleurs.", "Écouter komşu", p("l6-6")),
    v("triz6-7", "birlikte", "ensemble", "Murzik, Tom et Tarçın mangent une glace ensemble sur un banc.", "Écouter birlikte", p("l6-7")),
  ],
  dialogue: {
    title: "Sur le front de mer",
    note: "Seyahat ediyoruz — « nous voyageons ». Plaja — « à la plage ». Le mot onu veut dire à la fois « le » et « la ».",
    lines: [
      line("tarcin", "Murzik, Türkiye'de arkadaşın var mı?", "Murzik, tu as des amis en Turquie ?"),
      line("murzik", "Evet! Ayşe Teyze var. Ve en iyi arkadaşım Tom!", "Oui ! Il y a Ayşe Teyze. Et mon meilleur ami Tom !"),
      line("tom", "Biz birlikte seyahat ediyoruz.", "Nous voyageons ensemble."),
      line("tarcin", "Benim de bir arkadaşım var: komşumuz Ece. Onu tanıyor musun?", "Moi aussi, j'ai une amie : notre voisine Ece. Tu la connais ?"),
      line("murzik", "Hayır, tanımıyorum.", "Non, je ne la connais pas."),
      line("tarcin", "Gel, tanıştırayım!", "Viens, je vais te présenter !"),
      line("leyla", "Ece çok tatlı bir kız. Plaja birlikte gidin!", "Ece est une fille vraiment adorable. Allez à la plage ensemble !"),
    ],
    gist: choice("triz6-d1", "Qui est le meilleur ami de Murzik ?", [
      ["À Tom.", true],
      ["Tarçın.", false],
      ["Ece.", false],
    ]),
  },
  grammar: [
    {
      title: "J'ai : benim … var",
      paragraphs: [
        "Le turc n'a pas de verbe « avoir ». À la place, il dit « ma chose il y a » : benim + la chose avec la terminaison « mon » + var : Benim bir arkadaşım var. — J'ai un ami.",
        "« Je n'ai pas », c'est pareil avec yok : Benim arabam yok. — Je n'ai pas de voiture. La question : Senin kardeşin var mı?",
      ],
      examples: [
        { ru: "Benim bir arkadaşım var.", en: "J'ai un ami." },
        { ru: "Senin kardeşin var mı? — Hayır, yok.", en: "Tu as un frère ou une sœur ? — Non, je n'en ai pas." },
      ],
    },
  ],
  tasks: [
    fill("triz6-t1", "Complète avec le bon mot : « J'ai un ami ».", "Benim bir arkadaşım", ".", "var", ["var", "yok", "değil"], { skill: "grammar" }),
    listen("triz6-t2", "Écoute. Que dit Tarçın ?", "Benim bir kardeşim var.", [
      ["Il a un frère ou une sœur.", true],
      ["Il n'a pas d'amis.", false],
      ["Il a un chien.", false],
    ]),
    match("triz6-t3", "Associe les paires.", [
      ["arkadaş", "ami, amie"],
      ["komşu", "voisin, voisine"],
      ["birlikte", "ensemble"],
      ["en iyi", "le meilleur"],
    ], { skill: "words" }),
    missing("triz6-t4", "Quelle lettre manque ? (« ami »)", "arkada", "", "ş", ["ş", "s", "z"]),
    speak("triz6-t5", "En iyi arkadaşın kim?", "En iyi arkadaşım Maks.", "Mon meilleur ami, c'est Max.", { help: "Dis à voix haute qui est ton meilleur ami." }),
    choice("triz6-t6", "Comment demander « Qu'est-ce que tu fais dans la vie ? »", [
      ["Ne iş yapıyorsun?", true],
      ["Nasıl biri?", false],
      ["Kaç yaşındasın?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sezlong",
    itemName: "Transat",
    itemNameRu: "Şezlong",
    ru: "Yaşasın! Bir şezlong!",
    en: "Hourra ! Un transat !",
    a11y: "Un transat rayé est posé sur un balcon qui donne sur la mer. Murzik y est assis avec des lunettes de soleil.",
    image: p("sezlong"),
    steps: ["Murzik et Tarçın rapportent un transat de la plage.", "Ils le posent sur le balcon.", "Murzik met ses lunettes de soleil.", "Parfait : la mer, le soleil et les amis !"],
    bridge: "Samedi, il y a un grand dîner de famille. Murzik décide de montrer à sa tante la carte de grand-mère.",
  },
};

const izmir7: Lesson = {
  id: "tr-a1-izmir-7",
  level: "A1",
  cityId: "tr-izmir",
  number: 7,
  title: "Le dîner de famille",
  minutes: 8,
  goals: ["Dire « nous sommes tous là »", "Prendre une photo de famille et porter un toast", "Réviser tous les mots d'Izmir"],
  vocabNote: "Sağlığınıza! — « à votre santé ! ». Les Turcs portent ce toast avec n'importe quelle boisson — même du thé ou de l'ayran.",
  vocab: [
    v("triz7-1", "Hepimiz buradayız!", "Nous sommes tous là !", "Toute la famille est assise à une longue table sur la terrasse.", "Écouter Hepimiz buradayız", p("l7-1")),
    v("triz7-2", "Bu kim?", "Qui est-ce ?", "Minnoş montre de la patte une photo au mur.", "Écouter Bu kim", p("l7-2")),
    v("triz7-3", "Fotoğraf çekelim!", "Prenons une photo !", "Tom installe son appareil photo sur un trépied devant la table.", "Écouter Fotoğraf çekelim", p("l7-3")),
    v("triz7-4", "Gülümseyin!", "Souriez !", "Toute la famille fait un grand sourire à l'objectif.", "Écouter Gülümseyin", p("l7-4")),
    v("triz7-5", "Aile çok önemli.", "La famille, c'est très important.", "Oncle Mehmet prend tout le monde à table dans ses bras.", "Écouter Aile çok önemli", p("l7-5")),
    v("triz7-6", "Seni özledim.", "Tu m'as manqué.", "Tante Leyla serre Murzik très fort dans ses bras.", "Écouter Seni özledim", p("l7-6")),
    v("triz7-7", "Sağlığınıza!", "À votre santé !", "Tout le monde lève son verre de thé ou d'ayran.", "Écouter Sağlığınıza", p("l7-7")),
  ],
  dialogue: {
    title: "La carte postale",
    note: "Yazısı — « son écriture ». Bulacak — « trouvera ». Asya Anneanne'nin sağlığına! — « À la santé de grand-mère Asya ! »",
    lines: [
      line("mehmet", "Hepimiz buradayız! Afiyet olsun!", "Nous sommes tous là ! Bon appétit !"),
      line("tom", "Fotoğraf çekelim! Gülümseyin!", "Prenons une photo ! Souriez !"),
      line("murzik", "Leyla Teyze, bak… Bu kartpostal anneannemden.", "Tante Leyla, regarde… Cette carte vient de grand-mère."),
      line("leyla", "Bu… annemin yazısı! Annem!", "C'est… l'écriture de ma mère ! Maman !"),
      line("leyla", "Onu çok özledim.", "Elle me manque tellement."),
      line("minnos", "Anneanne nerede?", "Où est grand-mère ?"),
      line("leyla", "Bilmiyoruz, canım. Ama Murzik onu bulacak.", "On ne sait pas, ma chérie. Mais Murzik la retrouvera."),
      line("mehmet", "Asya Anneanne'nin sağlığına!", "À la santé de grand-mère Asya !"),
    ],
    gist: choice("triz7-d1", "Que reconnaît tante Leyla ?", [
      ["L'écriture de sa mère.", true],
      ["Une vieille photo d'elle.", false],
      ["L'adresse de grand-mère.", false],
    ]),
  },
  grammar: [
    {
      title: "Nous, vous, ils",
      paragraphs: [
        "« Nous sommes », c'est la terminaison -ız / -iz / -uz / -üz : buradayız — nous sommes ici, mutluyuz — nous sommes heureux. « Vous êtes » (poli ou pluriel), c'est -sınız : Neredesiniz? — Où êtes-vous ?",
        "« Ils », c'est simplement le mot onlar, parfois avec -lar sur le verbe : Onlar burada. — Ils sont ici.",
      ],
      examples: [
        { ru: "Hepimiz buradayız!", en: "Nous sommes tous là !" },
        { ru: "Siz neredesiniz?", en: "Où êtes-vous ?" },
      ],
    },
  ],
  tasks: [
    listen("triz7-t1", "Examen audio. Écoute. Qui est sur la photo ?", "Bu benim annem. Gözleri yeşil, çok neşeli.", [
      ["Maman : les yeux verts, très joyeuse.", true],
      ["Papa : grand et calme.", false],
      ["Grand-mère : blonde et sévère.", false],
    ]),
    choice("triz7-t2", "Que dit-on quand on prend une photo ?", [
      ["Gülümseyin!", true],
      ["Afiyet olsun!", false],
      ["Hoş geldiniz!", false],
    ], { skill: "words" }),
    choice("triz7-t3", "Comment dit-on « Nous sommes tous là » ?", [
      ["Hepimiz buradayız.", true],
      ["Hepimiz buradasınız.", false],
      ["Hepimiz buradayım.", false],
    ], { skill: "grammar" }),
    spell("triz7-t4", "Épelle le mot « famille ».", "aile"),
    speak("triz7-t5", "Ailende en neşeli kim?", "Kardeşim çok neşeli!", "Mon frère est très joyeux !", { help: "Dis à voix haute qui est la personne la plus joyeuse de ta famille." }),
    script("triz7-t6", "Souviens-toi de tout Izmir. Complète les conversations.", [
      { speaker: "Minnoş", text: "Kaç yaşındasın?" },
      { speaker: "You", answer: "Yirmi yaşındayım.", options: ["Yirmi yaşındayım.", "Öğretmenim.", "Uzun boylu."] },
      { speaker: "Aunt Leyla", text: "Ne iş yapıyorsun?" },
      { speaker: "You", answer: "Öğrenciyim.", options: ["Öğrenciyim.", "Çok tembel!", "Hepimiz buradayız!"] },
      { speaker: "Tarçın", text: "Benim bir arkadaşım var. Ya senin?" },
      { speaker: "You", answer: "Benim de bir arkadaşım var!", options: ["Benim de bir arkadaşım var!", "Onu tanıyor musun?", "Gülümseyin!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "aile-foto",
    itemName: "Photo de famille",
    itemNameRu: "Aile fotoğrafı",
    ru: "Yaşasın! Bir aile fotoğrafı!",
    en: "Hourra ! Une photo de famille !",
    a11y: "Une photo encadrée : toute la famille à table sur la terrasse — tante Leyla, oncle Mehmet, Tarçın, Minnoş, Murzik et Tom. Tout le monde sourit.",
    image: p("aile-foto"),
    steps: ["Tom imprime la photo.", "Tante Leyla la met dans un cadre.", "Toute la famille réunie !", "Murzik pose le cadre à côté de l'horloge."],
    bridge: "Tante Leyla sort d'une petite boîte quelque chose de vieux, soigneusement emballé…",
  },
};

const story: CityStory = {
  home: {
    name: "Chez tante Leyla",
    nameRu: "Leyla Teyze'nin evi",
    image: p("home"),
    a11y: "Une chambre claire et vide avec un balcon, dans la maison de tante Leyla sur le front de mer du Kordon. Dehors, la mer et des palmiers. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "saat",
  welcomeRu: "Merhaba, İzmir!",
  welcomeEn: "Bonjour, Izmir !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom sur le front de mer du Kordon à Izmir : des palmiers, la mer et la vieille tour de l'horloge ouvragée.",
  departureImage: p("departure"),
  departureA11y: "Toute la famille accompagne Murzik et Tom à la gare routière : Minnoş fait signe, Tarçın bâille, tante Leyla essuie une larme.",
  finale: [
    {
      image: p("photo"),
      a11y: "Après le dîner, tante Leyla tient une vieille photo en noir et blanc d'une jeune chatte avec un pinceau — on ne distingue pas son visage. La carte de grand-mère est sur la table. Murzik, Tarçın et Minnoş regardent la photo.",
      lines: [
        { en: "Après le dîner, tante Leyla regarde longtemps la carte. Puis elle sort d'une petite boîte une vieille photo d'Asya jeune." },
        { ru: "Bu annem. Onu bul, Murzik.", en: "C'est ma mère. Retrouve-la, Murzik." },
        { en: "« Maman adorait les sources chaudes. Elle disait : là-bas, il y a des montagnes blanches, comme du coton. » Blanches comme du coton… Pamukkale !" },
      ],
    },
    {
      image: p("saat"),
      a11y: "Murzik fait le tour de sa chambre chez tante Leyla, meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambre chez tante Leyla. Tom la prend en photo pour son carnet de voyage." },
        { en: "Murzik emporte la petite horloge — une copie de la tour de l'horloge d'Izmir." },
        { en: "La vieille photo de grand-mère va dans la poche de la valise, à côté des cartes postales." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, et Tom fête ça avec lui.",
      lines: [
        { ru: "İzmir tamamlandı!", en: "Izmir, c'est fait !" },
        { en: "7 / 7 leçons" },
        { ru: "Şimdiden dört şehir!", en: "Déjà quatre villes !" },
      ],
    },
    {
      image: p("departure"),
      a11y: "La famille dit au revoir de la main près du bus.",
      lines: [
        { ru: "Hoşça kalın! Görüşürüz, Tarçın!", en: "Au revoir ! À bientôt, Tarçın !" },
        { ru: "Sıradaki durak: Pamukkale!", en: "Prochain arrêt : Pamukkale !" },
      ],
    },
    {
      image: p("road"),
      a11y: "Le bus s'enfonce dans les terres, entre les champs de coton.",
      lines: [{ ru: "İzmir → Pamukkale", en: "Izmir → Pamukkale" }],
    },
    {
      image: pic("tr/pamukkale/arrival"),
      a11y: "Murzik et Tom au pied des terrasses blanches comme neige de Pamukkale. Le ciel se reflète dans les bassins bleus.",
      lines: [
        { ru: "Merhaba, Pamukkale!", en: "Bonjour, Pamukkale !" },
        { ru: "Pamuk gibi beyaz!", en: "Blanc comme du coton !" },
      ],
    },
  ],
};

export const trIzmirFr = {
  id: "tr-izmir",
  name: "Izmir",
  nameTr: "İzmir",
  lessons: [izmir1, izmir2, izmir3, izmir4, izmir5, izmir6, izmir7],
  story,
};
