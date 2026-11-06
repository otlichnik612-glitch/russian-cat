import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, fill, letter, line, listen, match, missing, script, speak, spell, tf, v } from "./make";

/* Kadıköy (the Asian side of Istanbul) · “First conversation” · Murzik and Tom learn their first Turkish words from Ayşe Teyze, who runs the coffee house. French version. */

const p = (name: string) => pic(`tr/kadikoy/${name}`);

const kadikoy1: Lesson = {
  id: "tr-a1-kadikoy-1",
  level: "A1",
  cityId: "tr-kadikoy",
  number: 1,
  title: "Merhaba! — Bonjour !",
  minutes: 6,
  goals: ["Saluer un ami et quelqu'un qu'on ne connaît pas", "Demander le prénom de quelqu'un et dire le sien", "Dire « Enchanté »"],
  vocabNote: "Merhaba marche avec tout le monde, à tout moment. Selam est plus familier — c'est comme ça que les amis se disent salut. Dans le doute, dis Merhaba.",
  vocab: [
    v("trpa1-1", "Merhaba!", "Bonjour ! / Salut !", "Murzik sourit et fait signe de la patte.", "Écouter Merhaba", img.murzik, "[mèrhaba]"),
    v("trpa1-2", "Selam!", "Salut ! (à un ami)", "Murzik fait joyeusement signe à Tom depuis la fenêtre.", "Écouter Selam", p("l1-2"), "[sélamm]"),
    v("trpa1-3", "Adın ne?", "Comment tu t'appelles ?", "Tom se penche vers Murzik d'un air curieux, comme pour poser une question.", "Écouter Adın ne", pic("paris/l1-4"), "[adeunn né]"),
    v("trpa1-4", "Benim adım…", "Je m'appelle…", "Murzik pose la patte sur sa poitrine et dit fièrement son prénom.", "Écouter Benim adım", pic("paris/l1-5"), "[bénimm adeumm]"),
    v("trpa1-5", "Ya senin?", "Et toi ? (ton prénom ?)", "Murzik montre Tom de la patte d'un air interrogateur.", "Écouter Ya senin", pic("paris/l1-6"), "[ya séninn]"),
    v("trpa1-6", "Memnun oldum.", "Enchanté.", "Murzik et Tom se rencontrent sur le quai de Kadıköy ; derrière eux, des ferries et des mouettes.", "Écouter Memnun oldum", p("l1-6"), "[mèmnounn oldoumm]"),
    v("trpa1-7", "Ben de.", "Moi aussi.", "Murzik hoche joyeusement la tête, la patte sur la poitrine, en souriant à Tom.", "Écouter Ben de", pic("paris/l1-8"), "[bèn dé]"),
  ],
  letters: [
    letter("A a", "comme le « a » de « papa », mais bref", "Adın ne?", "Comment tu t'appelles ?"),
    letter("E e", "comme le « è » de « mère »", "Memnun oldum.", "Enchanté."),
    letter("M m", "comme le « m » français", "Merhaba!", "Bonjour !"),
    letter("N n", "comme le « n » français", "Ben de.", "Moi aussi."),
    letter("I ı", "un « eu » bref et sourd, proche du « e » de « le »", "Adın ne?", "Comment tu t'appelles ?", "La lettre sans point n'est pas un « i » : adın se prononce [adeunn] !"),
  ],
  dialogue: {
    title: "Un nouvel ami à Kadıköy",
    note: "Ben Tom veut dire « Je suis Tom » — mot à mot « Moi Tom ». Ici, le turc n'a pas besoin d'un mot séparé pour « suis ».",
    lines: [
      line("tom", "Merhaba!", "Salut !"),
      line("murzik", "Merhaba!", "Salut !"),
      line("tom", "Ben Tom. Adın ne?", "Je suis Tom. Comment tu t'appelles ?"),
      line("murzik", "Benim adım Murzik.", "Je m'appelle Murzik."),
      line("tom", "Memnun oldum!", "Enchanté !"),
      line("murzik", "Ben de! Tom, bu benim evim.", "Moi aussi ! Tom, voici ma maison."),
      line("tom", "Vay! Çok güzel!", "Ouah ! Elle est jolie !"),
    ],
    gist: choice("trpa1-d1", "Que se passe-t-il ?", [
      ["Tom et Murzik se rencontrent pour la première fois.", true],
      ["Tom et Murzik se disent au revoir.", false],
      ["Tom commande un café.", false],
    ]),
  },
  grammar: [
    {
      title: "Merhaba ou Selam ? Deux sortes de « tu »",
      paragraphs: [
        "Merhaba est une salutation pour toutes les situations : un ami ou un adulte qu'on ne connaît pas. Selam est plus familier, pour les amis.",
        "Comme le français avec « tu » et « vous », le turc a deux façons de s'adresser à quelqu'un. À un ami : Adın ne? À un adulte qu'on ne connaît pas : Adınız ne?",
      ],
      examples: [
        { ru: "Selam! Adın ne?", en: "Salut ! Comment tu t'appelles ? (à un ami)" },
        { ru: "Merhaba! Adınız ne?", en: "Bonjour ! Comment vous appelez-vous ? (poli)" },
      ],
    },
  ],
  tasks: [
    choice("trpa1-t1", "Que veut dire Memnun oldum ?", [
      ["Enchanté.", true],
      ["Moi aussi.", false],
      ["Bonjour.", false],
    ], { skill: "words" }),
    listen("trpa1-t2", "Écoute. Qu'est-ce que ça veut dire ?", "Adın ne?", [
      ["Comment tu t'appelles ?", true],
      ["Comment ça va ?", false],
      ["Qui est-ce ?", false],
    ]),
    choice("trpa1-t3", "Tu rencontres ton nouveau professeur, un adulte. Que dis-tu ?", [
      ["Selam! Adın ne?", false],
      ["Merhaba! Adınız ne?", true],
    ], { skill: "grammar" }),
    spell("trpa1-t4", "Épelle le prénom de Tom.", "Tom"),
    speak("trpa1-t5", "Merhaba! Adın ne?", "Merhaba! Benim adım Aleks.", "Salut ! Je m'appelle Alex.", {
      help: "Réponds à voix haute et dis ton propre prénom.",
    }),
    script("trpa1-t6", "Complète le mini-dialogue.", [
      { speaker: "Tom", text: "Benim adım Tom. Ya senin?" },
      { speaker: "You", answer: "Benim adım Aleks.", options: ["Benim adım Aleks.", "Ben de.", "Adın ne?"] },
      { speaker: "Tom", text: "Memnun oldum!" },
      { speaker: "You", answer: "Ben de!", options: ["Ben de!", "Merhaba!", "Ya senin?"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kase",
    itemName: "Bol peint",
    itemNameRu: "Kâse",
    ru: "Yaşasın! Bu benim kâsem!",
    en: "Hourra ! C'est mon bol !",
    a11y: "Dans sa nouvelle chambre au-dessus du café, Murzik serre joyeusement un nouveau bol à motif turc turquoise. Tom sourit à côté de lui.",
    image: p("kase"),
    steps: ["Murzik remarque un bol à motifs.", "Il court vers lui.", "Il serre le bol dans ses bras.", "Tom sourit."],
    bridge: "Tom habite à côté et promet de passer demain. Et en bas, dans le petit café, la patronne attend déjà Murzik.",
  },
};

const kadikoy2: Lesson = {
  id: "tr-a1-kadikoy-2",
  level: "A1",
  cityId: "tr-kadikoy",
  number: 2,
  title: "Nasılsın? — Comment ça va ?",
  minutes: 6,
  goals: ["Demander à quelqu'un comment il va", "Répondre : super, bien, pas mal, comme ci comme ça, mal", "Retourner la question : « Et toi ? »"],
  vocabNote: "À Nasılsın?, les Turcs répondent le plus souvent İyiyim, sen? — « Bien, et toi ? ». À un adulte, on dit poliment Nasılsınız?",
  vocab: [
    v("trpa2-1", "Nasılsın?", "Comment ça va ?", "Tom fait signe à Murzik depuis la porte avec un sourire chaleureux.", "Écouter Nasılsın", pic("paris/l2-1"), "[nasseulseunn]"),
    v("trpa2-2", "İyiyim, teşekkürler.", "Bien, merci.", "Murzik sourit tranquillement et lève le pouce.", "Écouter İyiyim, teşekkürler", pic("paris/l2-3"), "[iyiyimm, téchèkkurlèr]"),
    v("trpa2-3", "Çok iyiyim!", "Je vais super bien !", "Murzik saute de joie, les deux pattes en l'air.", "Écouter Çok iyiyim", pic("paris/l2-4"), "[tchok iyiyimm]"),
    v("trpa2-4", "Fena değil.", "Pas mal.", "Murzik hausse calmement les épaules.", "Écouter Fena değil", pic("paris/l2-5"), "[féna déil]"),
    v("trpa2-5", "Şöyle böyle.", "Comme ci comme ça.", "Murzik balance la patte de gauche à droite, l'air hésitant.", "Écouter Şöyle böyle", pic("paris/l2-6"), "[cheuylé beuylé]"),
    v("trpa2-6", "Kötüyüm.", "Je ne vais pas bien.", "Murzik est assis sous un petit nuage gris, les oreilles basses.", "Écouter Kötüyüm", pic("paris/l2-7"), "[keutuyumm]"),
    v("trpa2-7", "Sen nasılsın?", "Et vous, comment allez-vous ?", "Murzik montre Tom de la patte d'un air amical, comme pour lui retourner la question.", "Écouter Sen nasılsın", pic("paris/l2-8"), "[sèn nasseulseunn]"),
  ],
  letters: [
    letter("İ i", "comme le « i » de « ici », mais bref", "İyiyim.", "Je vais bien.", "Avec un point, c'est « i » ; sans point, c'est « eu ». Même le I majuscule (İ) garde son point."),
    letter("Y y", "comme le « y » de « yaourt »", "İyiyim.", "Je vais bien.", "Le Y est toujours une consonne, jamais une voyelle comme dans « stylo »."),
    letter("S s", "comme le « s » de « sac » — jamais comme « z »", "Sen nasılsın?", "Et vous, comment allez-vous ?"),
    letter("Ş ş", "comme le « ch » de « chat »", "Şöyle böyle.", "Comme ci comme ça.", "La petite queue sous le S le transforme en « ch »."),
    letter("L l", "comme le « l » français ; à côté de e et i, il est plus léger", "Nasılsın?", "Comment ça va ?"),
  ],
  dialogue: {
    title: "Le matin au café",
    note: "Ayşe Teyze tient le café du rez-de-chaussée, et Murzik lui loue une chambre. Teyze veut dire « tata » : une façon chaleureuse et respectueuse de s'adresser à une femme plus âgée. Murzik la vouvoie : Nasılsınız?",
    lines: [
      line("ayse", "Günaydın! Sen yeni komşu musun?", "Bonjour ! Vous êtes le nouveau voisin ?"),
      line("murzik", "Günaydın! Evet. Benim adım Murzik.", "Bonjour ! Oui. Je m'appelle Murzik."),
      line("ayse", "Ben Ayşe. Memnun oldum!", "Je suis Ayşe. Enchantée !"),
      line("murzik", "Ben de! Nasılsınız?", "Moi aussi ! Comment allez-vous ?"),
      line("ayse", "İyiyim, teşekkürler. Sen nasılsın?", "Bien, merci. Et vous, comment allez-vous ?"),
      line("murzik", "Çok iyiyim!", "Je vais super bien !"),
      line("ayse", "Çay ister misin?", "Vous voulez du thé ?"),
    ],
    gist: choice("trpa2-d1", "À qui parle Murzik ?", [
      ["À la patronne du café.", true],
      ["À Tom.", false],
      ["À un vendeur du marché.", false],
    ]),
  },
  grammar: [
    {
      title: "Nasılsın ou Nasılsınız ?",
      paragraphs: [
        "« Tu », c'est sen ; « vous » (poli ou pluriel), c'est siz. À un ami : Nasılsın? À un adulte qu'on ne connaît pas : Nasılsınız?",
        "La terminaison -sın veut dire « tu », et -sınız veut dire « vous ». C'est pour ça qu'on omet souvent le mot sen : Nasılsın? veut déjà dire « Comment ça va ? ».",
      ],
      examples: [
        { ru: "Nasılsın, Tom?", en: "Comment ça va, Tom ?" },
        { ru: "Nasılsınız, Ayşe Teyze?", en: "Comment allez-vous, tata Ayşe ?" },
      ],
    },
  ],
  tasks: [
    listen("trpa2-t1", "Écoute. Comment va la personne qui parle ?", "Kötüyüm.", [
      ["Pas bien.", true],
      ["Super bien.", false],
      ["Bien.", false],
    ]),
    match("trpa2-t2", "Associe les paires.", [
      ["İyiyim.", "Je vais bien."],
      ["Çok iyiyim!", "Je vais super bien !"],
      ["Şöyle böyle.", "Comme ci comme ça."],
      ["Kötüyüm.", "Je ne vais pas bien."],
    ], { skill: "words" }),
    choice("trpa2-t3", "Tu demandes à ta vieille voisine comment elle va. Que dis-tu ?", [
      ["Nasılsın?", false],
      ["Nasılsınız?", true],
    ], { skill: "grammar" }),
    missing("trpa2-t4", "Quelle lettre manque ? (« Comme ci comme ça »)", "", "öyle böyle.", "Ş", ["Ş", "S", "Ç"]),
    speak("trpa2-t5", "Nasılsın?", "İyiyim, teşekkürler. Sen nasılsın?", "Bien, merci. Et vous, comment allez-vous ?", {
      help: "Réponds à voix haute et retourne la question.",
    }),
    choice("trpa2-t6", "Tom dit : Memnun oldum! Que réponds-tu ?", [
      ["Ben de!", true],
      ["Adın ne?", false],
      ["Kötüyüm.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "minder",
    itemName: "Coussin de sol",
    itemNameRu: "Minder",
    ru: "Yaşasın! Yeni bir minder!",
    en: "Hourra ! Un nouveau coussin de sol !",
    a11y: "Murzik est confortablement roulé en boule sur un grand coussin à motif turc, posé par terre près de la fenêtre.",
    image: p("minder"),
    steps: ["Ayşe Teyze apporte un grand coussin.", "Murzik le pose près de la fenêtre.", "Il s'assoit dessus.", "Qu'est-ce qu'on est bien !"],
    bridge: "Demain, Tom vient avec un cadeau. Il est temps d'apprendre à bien dire « merci » !",
  },
};

const kadikoy3: Lesson = {
  id: "tr-a1-kadikoy-3",
  level: "A1",
  cityId: "tr-kadikoy",
  number: 3,
  title: "Merci et pardon",
  minutes: 6,
  goals: ["Dire merci et y répondre", "Demander poliment", "S'excuser et dire « ce n'est pas grave »"],
  vocabNote: "Sağ ol est un « merci » court et amical. Teşekkür ederim marche avec tout le monde — amis comme inconnus.",
  vocab: [
    v("trpa3-1", "Teşekkür ederim.", "Merci.", "Murzik tient un petit paquet cadeau et sourit à Tom avec reconnaissance.", "Écouter Teşekkür ederim", pic("paris/l3-1"), "[téchèkkur édérimm]"),
    v("trpa3-2", "Sağ ol!", "Merci ! (amical)", "Murzik lève joyeusement le pouce vers Tom.", "Écouter Sağ ol", p("l3-2"), "[sa ol]"),
    v("trpa3-3", "Rica ederim.", "De rien.", "Tom sourit chaleureusement avec un petit geste modeste de la main.", "Écouter Rica ederim", pic("paris/l3-3"), "[ridja édérimm]"),
    v("trpa3-4", "Lütfen.", "S'il te plaît. / S'il vous plaît.", "Murzik joint poliment les pattes et montre une tasse de thé.", "Écouter Lütfen", p("l3-4"), "[lutfèn]"),
    v("trpa3-5", "Özür dilerim!", "Pardon ! Je suis désolé !", "Tom a marché par accident sur la queue de Murzik et lève le pied, l'air coupable.", "Écouter Özür dilerim", pic("paris/l3-6"), "[euzur dilérimm]"),
    v("trpa3-6", "Pardon!", "Pardon ! (pour passer)", "Murzik lève poliment la patte pour se faufiler devant une vieille dame dans l'étroite porte du café.", "Écouter Pardon", p("l3-6"), "[pardonn]"),
    v("trpa3-7", "Önemli değil.", "Ce n'est pas grave. / Pas de problème.", "Murzik sourit et remue gentiment la queue : tout va bien.", "Écouter Önemli değil", pic("paris/l3-8"), "[eunèmli déil]"),
  ],
  letters: [
    letter("Ğ ğ", "le « g doux » : il ne se prononce pas, il allonge seulement la voyelle d'avant", "Sağ ol!", "Merci !", "Sağ ol se prononce [sa ol]."),
    letter("Ö ö", "comme le « eu » de « peu »", "Özür dilerim.", "Pardon, je suis désolé."),
    letter("C c", "comme le « dj » de « djembé »", "Rica ederim.", "De rien.", "Jamais comme « k » ou « s » : le C se prononce toujours « dj »."),
    letter("P p", "comme le « p » français", "Pardon!", "Pardon !"),
    letter("F f", "comme le « f » français", "Lütfen.", "S'il te plaît. / S'il vous plaît."),
  ],
  dialogue: {
    title: "Un cadeau",
    note: "Lütfen et rica ederim correspondent bien au français : lütfen, c'est « s'il te plaît » quand on demande quelque chose, et rica ederim, c'est « de rien » après un « merci ».",
    lines: [
      line("tom", "Murzik, bu senin için.", "Murzik, c'est pour toi."),
      line("murzik", "Vay! Teşekkür ederim!", "Ouah ! Merci !"),
      line("tom", "Rica ederim.", "De rien."),
      line("tom", "Ah! Özür dilerim!", "Oups ! Pardon !"),
      line("murzik", "Önemli değil.", "Ce n'est pas grave."),
      line("ayse", "Pardon… Bu bir raf mı? Çok güzel!", "Excuse-moi… C'est une étagère ? Elle est magnifique !"),
      line("murzik", "Evet! Sağ ol, Tom!", "Oui ! Merci, Tom !"),
    ],
    gist: choice("trpa3-d1", "Pourquoi Tom dit-il « Özür dilerim! » ?", [
      ["Il a fait quelque chose par accident.", true],
      ["Il dit merci.", false],
      ["Il dit au revoir.", false],
    ]),
  },
  grammar: [
    {
      title: "Lütfen ou rica ederim ?",
      paragraphs: [
        "Lütfen, c'est ce qu'on dit quand on demande quelque chose : Bir çay, lütfen. — Un thé, s'il vous plaît.",
        "Rica ederim, c'est la réponse à « merci » : Teşekkür ederim! — Rica ederim.",
      ],
      examples: [
        { ru: "Bir çay, lütfen.", en: "Un thé, s'il vous plaît." },
        { ru: "Teşekkür ederim! — Rica ederim.", en: "Merci ! — De rien." },
      ],
    },
  ],
  tasks: [
    choice("trpa3-t1", "Quelqu'un te dit : Teşekkür ederim! Que réponds-tu ?", [
      ["Rica ederim.", true],
      ["Lütfen.", false],
      ["Pardon!", false],
    ], { skill: "grammar" }),
    listen("trpa3-t2", "Écoute. Qu'est-ce qu'on dit ?", "Özür dilerim.", [
      ["Pardon, je suis désolé.", true],
      ["Merci.", false],
      ["S'il te plaît. / S'il vous plaît.", false],
    ]),
    tf("trpa3-t3", "Sağ ol veut dire « merci ».", true),
    missing("trpa3-t4", "Quelle lettre manque ? (« De rien »)", "Ri", "a ederim.", "c", ["c", "ç", "j"]),
    speak("trpa3-t5", "Özür dilerim!", "Önemli değil.", "Ce n'est pas grave.", { help: "Réponds à voix haute." }),
    choice("trpa3-t6", "Comment dit-on « Enchanté » ?", [
      ["Memnun oldum.", true],
      ["Ben de.", false],
      ["Nasılsın?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "raf",
    itemName: "Étagère sculptée",
    itemNameRu: "Raf",
    ru: "Yaşasın! Yeni bir raf!",
    en: "Hourra ! Une nouvelle étagère !",
    a11y: "Une petite étagère en bois sculpté à motifs est accrochée au mur de Murzik. Murzik y pose son bol.",
    image: p("raf"),
    steps: ["Tom accroche l'étagère au mur.", "Murzik y pose son bol.", "Il recule pour l'admirer.", "C'est joli !"],
    bridge: "Le lendemain, Tom va au café avec Murzik. Mais Ayşe Teyze parle si vite…",
  },
};

const kadikoy4: Lesson = {
  id: "tr-a1-kadikoy-4",
  level: "A1",
  cityId: "tr-kadikoy",
  number: 4,
  title: "Je ne comprends pas",
  minutes: 7,
  goals: ["Dire qu'on ne comprend pas", "Demander de répéter et de parler plus lentement", "Demander comment on dit quelque chose en turc et ce que veut dire un mot"],
  vocabNote: "Anlamadım veut dire mot à mot « je n'ai pas compris », mais les Turcs l'utilisent pour dire « je ne comprends pas ». N'hésite pas à demander de répéter : les Turcs aiment aider.",
  vocab: [
    v("trpa4-1", "Anlamadım.", "Je ne comprends pas.", "Tom se gratte la tête, perplexe. Un point d'interrogation flotte au-dessus de lui.", "Écouter Anlamadım", pic("paris/l4-1"), "[annlamadeumm]"),
    v("trpa4-2", "Tekrar eder misin?", "Tu peux répéter ?", "Tom se penche vers Murzik, la main en cornet derrière l'oreille.", "Écouter Tekrar eder misin", pic("paris/l4-3"), "[tèkrar édèr missinn]"),
    v("trpa4-3", "Tekrar eder misiniz?", "Vous pouvez répéter ? (poli)", "Murzik met poliment la patte en cornet derrière l'oreille pendant qu'Ayşe Teyze parle.", "Écouter Tekrar eder misiniz", p("l4-3"), "[tèkrar édèr missiniz]"),
    v("trpa4-4", "Daha yavaş, lütfen.", "Plus lentement, s'il vous plaît.", "Tom fait un petit geste « doucement ». Un petit escargot est posé sur la table.", "Écouter Daha yavaş, lütfen", pic("paris/l4-5"), "[daha yavach, lutfèn]"),
    v("trpa4-5", "Türkçesi ne?", "Comment dit-on ça en turc ?", "Tom tient une tasse et regarde Murzik d'un air interrogateur.", "Écouter Türkçesi ne", pic("paris/l4-8"), "[turktchéssi né]"),
    v("trpa4-6", "… ne demek?", "Que veut dire … ?", "Tom tient un cahier ouvert avec un mot souligné, l'air perplexe.", "Écouter ne demek", pic("paris/l4-9"), "[né démèk]"),
    v("trpa4-7", "Bilmiyorum.", "Je ne sais pas.", "Murzik écarte les pattes avec une drôle de mine perplexe.", "Écouter Bilmiyorum", pic("paris/l4-10"), "[bilmiyoroumm]"),
  ],
  letters: [
    letter("Ç ç", "comme le « tch » de « tchèque »", "Türkçesi ne?", "Comment dit-on ça en turc ?", "Avec une queue, c'est « tch » ; sans queue (C), c'est « dj »."),
    letter("Ü ü", "comme le « u » de « tu » — facile pour toi !", "Türkçesi ne?", "Comment dit-on ça en turc ?"),
    letter("R r", "un « r » roulé léger, du bout de la langue, comme en espagnol", "Tekrar eder misin?", "Tu peux répéter ?"),
    letter("K k", "comme le « k » français", "Tekrar eder misin?", "Tu peux répéter ?"),
    letter("D d", "comme le « d » français", "Anlamadım.", "Je ne comprends pas."),
  ],
  dialogue: {
    title: "Au café",
    note: "Ayşe Teyze parle vite. Pas de problème : Tekrar eder misiniz? Daha yavaş, lütfen.",
    lines: [
      line("ayse", "Hoş geldin, Tom! Ne alırsın? Çay mı, kahve mi?", "Bienvenue, Tom ! Qu'est-ce que tu prends ? Du thé ou du café ?"),
      line("tom", "Pardon… Anlamadım.", "Pardon… Je ne comprends pas."),
      line("murzik", "Tekrar eder misiniz? Daha yavaş, lütfen.", "Vous pouvez répéter ? Plus lentement, s'il vous plaît."),
      line("ayse", "Çay mı? Kahve mi?", "Du thé ? Du café ?"),
      line("tom", "Aa! Çay, lütfen. Murzik, «cup» Türkçesi ne?", "Ah ! Du thé, s'il vous plaît. Murzik, comment dit-on « tasse » en turc ?"),
      line("murzik", "Bilmiyorum!", "Je ne sais pas !"),
      line("ayse", "Bardak! Bu bir bardak.", "Bardak ! C'est un verre."),
    ],
    gist: choice("trpa4-d1", "Pourquoi Tom ne répond-il pas tout de suite ?", [
      ["Il ne comprend pas Ayşe Teyze.", true],
      ["Il ne veut pas de thé.", false],
      ["Il est pressé.", false],
    ]),
  },
  grammar: [
    {
      title: "Comment dire « ne… pas »",
      paragraphs: [
        "En turc, « ne… pas » n'est pas un mot séparé comme en français — c'est un petit morceau à l'intérieur du verbe : -ma- ou -me-. anla-dım — « j'ai compris », anla-ma-dım — « je n'ai pas compris ». bil-iyorum — « je sais », bil-mi-yorum — « je ne sais pas » (devant -yor, la voyelle change : bil-me- → bil-mi-yorum).",
        "Pour demander « que veut dire… ? », on met la question après le mot : Bardak ne demek? — Que veut dire bardak ?",
      ],
      examples: [
        { ru: "Bardak ne demek?", en: "Que veut dire bardak ?" },
        { ru: "Anlamadım. Tekrar eder misiniz?", en: "Je ne comprends pas. Vous pouvez répéter ?" },
      ],
    },
  ],
  tasks: [
    choice("trpa4-t1", "Que veut dire Bilmiyorum ?", [
      ["Je ne sais pas.", true],
      ["Je ne comprends pas.", false],
      ["Plus lentement, s'il vous plaît.", false],
    ], { skill: "words" }),
    listen("trpa4-t2", "Écoute. Que demande la personne ?", "Daha yavaş, lütfen.", [
      ["De parler plus lentement.", true],
      ["De répéter.", false],
      ["De dire un mot en turc.", false],
    ]),
    choice("trpa4-t3", "Tu ne comprends pas une vieille commerçante. Comment lui demander poliment de répéter ?", [
      ["Tekrar eder misin?", false],
      ["Tekrar eder misiniz?", true],
    ], { skill: "grammar" }),
    missing("trpa4-t4", "Quelle lettre manque ? (« en turc »)", "Türk", "e", "ç", ["ç", "c", "s"]),
    speak("trpa4-t5", "Kitap ne demek?", "Bilmiyorum. Tekrar eder misin?", "Je ne sais pas. Vous pouvez répéter ?", {
      help: "Quelqu'un te demande un mot que tu ne connais pas. Dis à voix haute que tu ne sais pas et demande de répéter.",
    }),
    match("trpa4-t6", "Souviens-toi de la leçon précédente. Associe les paires.", [
      ["Teşekkür ederim.", "Merci."],
      ["Rica ederim.", "De rien."],
      ["Özür dilerim.", "Pardon, je suis désolé."],
      ["Önemli değil.", "Ce n'est pas grave."],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kilim",
    itemName: "Tapis kilim",
    itemNameRu: "Kilim",
    ru: "Yaşasın! Yeni bir kilim!",
    en: "Hourra ! Un nouveau kilim !",
    a11y: "Un kilim aux couleurs vives, à motif rouge et bleu, est posé par terre dans la chambre de Murzik. Murzik s'y roule de joie.",
    image: p("kilim"),
    steps: ["Ayşe Teyze déroule un vieux kilim.", "Murzik l'aide à l'étaler.", "Il se roule dessus.", "Doux et magnifique !"],
    bridge: "Le soir, Tom demande : « Murzik, au fait, tu viens d'où ? »",
  },
};

const kadikoy5: Lesson = {
  id: "tr-a1-kadikoy-5",
  level: "A1",
  cityId: "tr-kadikoy",
  number: 5,
  title: "Tu viens d'où ?",
  minutes: 7,
  goals: ["Demander à quelqu'un d'où il vient", "Dire d'où on vient et où on habite", "Demander si quelqu'un parle turc"],
  vocabNote: "Nereli veut dire « d'où ». La terminaison -lı / -li / -lu / -lü veut dire « de » (originaire de) : Moskovalı — de Moscou, Londralı — de Londres.",
  vocab: [
    v("trpa5-1", "Nerelisin?", "Tu viens d'où ?", "Tom et Murzik sont assis à la table de la cuisine avec du thé. Tom pose la question avec curiosité.", "Écouter Nerelisin", pic("paris/l5-1"), "[nérélissinn]"),
    v("trpa5-2", "Moskovalıyım.", "Je suis de Moscou.", "Murzik tient une carte postale de Moscou aux coupoles colorées.", "Écouter Moskovalıyım", pic("paris/l5-2"), "[moskovaleuyeumm]"),
    v("trpa5-3", "Londralıyım.", "Je suis de Londres.", "Tom tient une carte postale de Big Ben et d'un bus rouge.", "Écouter Londralıyım", pic("paris/l5-3"), "[lonndraleuyeumm]"),
    v("trpa5-4", "Nerede yaşıyorsun?", "Où habites-tu ?", "Tom montre une petite carte de l'Europe au mur d'un air interrogateur.", "Écouter Nerede yaşıyorsun", pic("paris/l5-4"), "[nérédé yacheuyorsounn]"),
    v("trpa5-5", "Paris'te yaşıyorum.", "J'habite à Paris.", "Murzik montre à Tom une photo de son appartement parisien, avec la tour Eiffel à la fenêtre.", "Écouter Paris'te yaşıyorum", p("l5-5"), "[paristé yacheuyoroumm]"),
    v("trpa5-6", "Türkçe biliyor musun?", "Tu parles turc ?", "Murzik regarde Tom en haussant les sourcils, avec un sourire encourageant.", "Écouter Türkçe biliyor musun", pic("paris/l5-6"), "[turktché biliyor moussounn]"),
    v("trpa5-7", "Evet, biraz.", "Oui, un peu.", "Tom montre un tout petit espace entre son pouce et son index et sourit timidement.", "Écouter Evet, biraz", pic("paris/l5-7"), "[évèt, biraz]"),
  ],
  letters: [
    letter("B b", "comme le « b » français", "Evet, biraz.", "Oui, un peu."),
    letter("V v", "comme le « v » français, mais plus doux", "Evet.", "Oui."),
    letter("Z z", "comme le « z » français", "Evet, biraz.", "Oui, un peu."),
    letter("O o", "comme le « o » de « pomme », mais bref", "Londralıyım.", "Je suis de Londres.", "Le O est toujours un « o » net — il ne change jamais de son."),
    letter("U u", "comme le « ou » de « tout »", "Türkçe biliyor musun?", "Tu parles turc ?"),
  ],
  dialogue: {
    title: "Un soir dans la cuisine",
    note: "Paris'te veut dire « à Paris ». Les noms de personnes et de lieux prennent une apostrophe devant la terminaison : Paris'te, Tom'a.",
    lines: [
      line("tom", "Murzik, nerelisin?", "Murzik, tu viens d'où ?"),
      line("murzik", "Moskovalıyım. Ya sen?", "Je suis de Moscou. Et toi ?"),
      line("tom", "Londralıyım. Nerede yaşıyorsun?", "Je suis de Londres. Et où habites-tu ?"),
      line("murzik", "Paris'te yaşıyorum. Türkçe biliyor musun?", "J'habite à Paris. Tu parles turc ?"),
      line("tom", "Evet, biraz. Sen?", "Oui, un peu. Et toi ?"),
      line("murzik", "Ben de biraz. Ama Ayşe Teyze çok iyi biliyor!", "Moi aussi, un peu. Mais tata Ayşe le parle vraiment bien !"),
      line("tom", "Tabii, o İstanbullu!", "Bien sûr — elle est d'Istanbul !"),
    ],
    gist: choice("trpa5-d1", "D'où vient Tom ?", [
      ["De Londres.", true],
      ["De Moscou.", false],
      ["D'Istanbul.", false],
    ]),
  },
  grammar: [
    {
      title: "D'où : -lı, -li, -lu, -lü",
      paragraphs: [
        "Pour dire d'où vient quelqu'un, on ajoute -lı, -li, -lu ou -lü au nom de la ville : Moskova → Moskovalı, Londra → Londralı, İstanbul → İstanbullu.",
        "Laquelle ? C'est la dernière voyelle du mot qui décide. Après a ou ı — -lı ; après e ou i — -li ; après o ou u — -lu ; après ö ou ü — -lü. C'est l'harmonie vocalique, une des idées clés du turc : les terminaisons changent de voyelle pour s'accorder avec le mot.",
      ],
      examples: [
        { ru: "Ben Moskovalıyım.", en: "Je suis de Moscou." },
        { ru: "Ayşe Teyze İstanbullu.", en: "Tata Ayşe est d'Istanbul." },
      ],
    },
  ],
  tasks: [
    listen("trpa5-t1", "Écoute. Où habite la personne qui parle ?", "Paris'te yaşıyorum.", [
      ["À Paris.", true],
      ["À Moscou.", false],
      ["À Londres.", false],
    ]),
    choice("trpa5-t2", "Comment dit-on « Je suis de Londres » ?", [
      ["Londralıyım.", true],
      ["Londraliyim.", false],
      ["Londraluyum.", false],
    ], { skill: "grammar" }),
    match("trpa5-t3", "Associe les paires.", [
      ["Nerelisin?", "Tu viens d'où ?"],
      ["Nerede yaşıyorsun?", "Où habites-tu ?"],
      ["Evet, biraz.", "Oui, un peu."],
      ["Türkçe biliyor musun?", "Tu parles turc ?"],
    ], { skill: "words" }),
    spell("trpa5-t4", "Épelle le mot « oui ».", "Evet", ["a"]),
    speak("trpa5-t5", "Nerelisin?", "Moskovalıyım.", "Je suis de Moscou.", {
      help: "Dis à voix haute d'où tu viens. Par exemple : New Yorkluyum — Je suis de New York.",
    }),
    choice("trpa5-t6", "Ayşe Teyze parle très vite. Que lui dis-tu ?", [
      ["Daha yavaş, lütfen.", true],
      ["Memnun oldum.", false],
      ["Fena değil.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sehpa",
    itemName: "Table basse sculptée",
    itemNameRu: "Sehpa",
    ru: "Yaşasın! Yeni bir sehpa!",
    en: "Hourra ! Une nouvelle table basse !",
    a11y: "Une table basse en bois sculpté est posée sur le kilim, avec deux verres de thé. Murzik et Tom sont assis à côté, sur des coussins.",
    image: p("sehpa"),
    steps: ["Tom apporte une table basse sculptée.", "Il la pose sur le kilim.", "Murzik sert le thé.", "Maintenant, ils peuvent boire le thé à la turque !"],
    bridge: "Demain, c'est jour de repos. Tom veut montrer quelque chose d'intéressant à Murzik.",
  },
};

const kadikoy6: Lesson = {
  id: "tr-a1-kadikoy-6",
  level: "A1",
  cityId: "tr-kadikoy",
  number: 6,
  title: "Oui, non, peut-être",
  minutes: 7,
  goals: ["Proposer quelque chose et répondre « oui » ou « non »", "Dire « bien sûr », « peut-être », « allons-y »", "Poser une question avec le petit mot mi"],
  vocabNote: "Tabii s'écrit avec deux i, mais se prononce simplement [tabi]. Hadi! — « allez ! on y va ! » — les Turcs le disent tout le temps.",
  vocab: [
    v("trpa6-1", "Çay ister misin?", "Vous voulez du thé ?", "Tom tient une théière au-dessus d'un verre et regarde Murzik.", "Écouter Çay ister misin", pic("paris/l6-2"), "[tchay istèr missinn]"),
    v("trpa6-2", "Evet, isterim.", "Oui, s'il te plaît.", "Murzik hoche joyeusement la tête et tend son verre à deux pattes.", "Écouter Evet, isterim", pic("paris/l6-3"), "[évèt, istérimm]"),
    v("trpa6-3", "Hayır, teşekkürler.", "Non, merci.", "Murzik lève poliment la patte et refuse avec un sourire.", "Écouter Hayır, teşekkürler", pic("paris/l6-5"), "[hayeur, téchèkkurlèr]"),
    v("trpa6-4", "Tabii!", "Bien sûr !", "Murzik hoche la tête avec enthousiasme, la queue bien droite.", "Écouter Tabii", pic("paris/l6-6"), "[tabii]"),
    v("trpa6-5", "Belki.", "Peut-être.", "Murzik se tapote le menton de la patte et lève un sourcil, pensif.", "Écouter Belki", pic("paris/l6-7"), "[bèlki]"),
    v("trpa6-6", "Hadi!", "Allons-y ! / Allez !", "Murzik et Tom se tapent dans la main.", "Écouter Hadi", pic("paris/l6-8"), "[hadi]"),
    v("trpa6-7", "Yürüyüşe çıkalım mı?", "On va se promener ?", "Tom est à la porte en manteau et appelle Murzik à sortir.", "Écouter Yürüyüşe çıkalım mı", pic("paris/l6-9"), "[yuruyuché tcheukaleumm meu]"),
  ],
  letters: [
    letter("H h", "un « h » soufflé, comme dans l'anglais « hello » — il se prononce toujours", "Hayır.", "Non."),
    letter("I ı / İ i", "révision : sans point — « eu », avec un point — « i »", "Yürüyüşe çıkalım mı?", "On va se promener ?", "çıkalım se prononce [tcheukaleumm]."),
    letter("Ş ş", "révision : « ch »", "Yürüyüşe çıkalım mı?", "On va se promener ?"),
  ],
  dialogue: {
    title: "Le marché aux puces",
    note: "Bit pazarı veut dire « marché aux puces » — exactement comme en français : bit, c'est « puce », pazar, c'est « marché ».",
    lines: [
      line("tom", "Murzik, yürüyüşe çıkalım mı?", "Murzik, on va se promener ?"),
      line("murzik", "Belki… Nereye?", "Peut-être… Où ça ?"),
      line("tom", "Bit pazarına! Kadıköy'de çok güzel bir bit pazarı var.", "Au marché aux puces ! Il y a un super marché aux puces à Kadıköy."),
      line("murzik", "Tabii! Hadi!", "Bien sûr ! Allons-y !"),
      line("tom", "Bak, eski bir masa! Çok güzel.", "Regarde, une vieille table ! Elle est magnifique."),
      line("tom", "Çay ister misin? Burada bir kafe var.", "Tu veux du thé ? Il y a un café ici."),
      line("murzik", "Hayır, teşekkürler. Masa istiyorum!", "Non, merci. Je veux la table !"),
    ],
    gist: choice("trpa6-d1", "Que veut Murzik ?", [
      ["La vieille table.", true],
      ["Du thé.", false],
      ["Rentrer à la maison.", false],
    ]),
  },
  grammar: [
    {
      title: "Les questions avec mi",
      paragraphs: [
        "En français, on pose souvent une question avec « est-ce que ». Le turc garde l'ordre des mots et ajoute un petit mot, mi, après le mot sur lequel porte la question : Çay ister misin? — Tu veux du thé ?",
        "La voyelle de mi suit l'harmonie vocalique : mı, mi, mu, mü. çıkalım mı, ister misin, var mı, güzel mi.",
      ],
      examples: [
        { ru: "Çay ister misin? — Evet, isterim.", en: "Tu veux du thé ? — Oui, s'il te plaît." },
        { ru: "Kahve ister misin? — Hayır, teşekkürler.", en: "Tu veux un café ? — Non, merci." },
      ],
    },
  ],
  tasks: [
    choice("trpa6-t1", "Choisis la bonne question : « Tu veux un café ? »", [
      ["Kahve ister misin?", true],
      ["Kahve ister mısın?", false],
      ["Kahve istersin mi?", false],
    ], { skill: "grammar" }),
    listen("trpa6-t2", "Écoute. Que fait Murzik ?", "Hayır, teşekkürler.", [
      ["Il refuse poliment.", true],
      ["Il dit oui.", false],
      ["Il dit qu'il ne sait pas.", false],
    ]),
    match("trpa6-t3", "Associe les paires.", [
      ["Evet", "Oui"],
      ["Hayır", "Non"],
      ["Belki", "Peut-être"],
      ["Tabii!", "Bien sûr !"],
    ], { skill: "words" }),
    spell("trpa6-t4", "Épelle le mot « allez ! ».", "Hadi", ["e"]),
    speak("trpa6-t5", "Yürüyüşe çıkalım mı?", "Tabii! Hadi!", "Bien sûr ! Allons-y !", { help: "Dis oui, à voix haute." }),
    choice("trpa6-t6", "Que veut dire Nerelisin ?", [
      ["Tu viens d'où ?", true],
      ["Où habites-tu ?", false],
      ["Comment tu t'appelles ?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "masa",
    itemName: "Table ancienne",
    itemNameRu: "Masa",
    ru: "Yaşasın! Eski bir masa!",
    en: "Hourra ! Une vieille table !",
    a11y: "Une petite table ancienne incrustée de nacre est posée près de la fenêtre. Le tiroir est ouvert, et Murzik tient une vieille carte postale entre ses pattes.",
    image: p("masa"),
    steps: [
      "Murzik ouvre le tiroir de la vieille table.",
      "Il y a une autre carte postale dedans !",
      "La même écriture. Le même petit chat roux peint. Grand-mère Asya !",
      "La carte montre la tour de Galata et les maisons colorées de Balat, de l'autre côté de l'eau.",
    ],
    bridge: "Grand-mère Asya était à Balat, sur la rive européenne ! La piste mène là-bas…",
  },
};

const kadikoy7: Lesson = {
  id: "tr-a1-kadikoy-7",
  level: "A1",
  cityId: "tr-kadikoy",
  number: 7,
  title: "Görüşürüz! — À plus !",
  minutes: 8,
  goals: ["Dire au revoir à un ami et à quelqu'un qu'on ne connaît pas", "Souhaiter une bonne journée et un bon voyage", "Réviser tous les mots de Kadıköy"],
  vocabNote: "Hoşça kal, c'est ce que dit la personne qui part. Güle güle, c'est la réponse de celle qui reste. Görüşürüz! — « à plus ! » — marche dans les deux cas.",
  vocab: [
    v("trpa7-1", "Hoşça kal!", "Au revoir ! (dit par celui qui part)", "Murzik dit joyeusement au revoir à Tom depuis la porte.", "Écouter Hoşça kal", pic("paris/l7-1"), "[hochtcha kal]"),
    v("trpa7-2", "Güle güle!", "Au revoir ! (dit par celui qui reste)", "Ayşe Teyze fait signe depuis la porte du café.", "Écouter Güle güle", p("l7-2"), "[gulé gulé]"),
    v("trpa7-3", "Görüşürüz!", "À plus !", "Murzik et Tom se font signe de chaque côté de la rue.", "Écouter Görüşürüz", p("l7-3"), "[gueuruchuruz]"),
    v("trpa7-4", "Yarın görüşürüz!", "À demain !", "Tom fait signe depuis la rue, le soir. Un croissant de lune est dans le ciel.", "Écouter Yarın görüşürüz", pic("paris/l7-3"), "[yareunn gueuruchuruz]"),
    v("trpa7-5", "İyi günler!", "Bonne journée !", "Par un matin ensoleillé, Ayşe Teyze sourit et fait signe à Murzik.", "Écouter İyi günler", p("l7-5"), "[iyi gunnlèr]"),
    v("trpa7-6", "Sana da!", "Toi aussi !", "Murzik répond à Tom d'un signe avec un grand sourire.", "Écouter Sana da", pic("paris/l7-7"), "[sana da]"),
    v("trpa7-7", "İyi yolculuklar!", "Bon voyage !", "Ayşe Teyze agite un mouchoir pendant que Murzik porte une petite valise.", "Écouter İyi yolculuklar", p("l7-7"), "[iyi yoldjoulouklar]"),
  ],
  letters: [
    letter("G g", "toujours dur, comme le « g » de « gare » — jamais comme dans « girafe »", "Görüşürüz!", "À plus !"),
    letter("J j", "comme le « j » de « jour » ; il est rare", "plaj", "plage", "L'alphabet turc a 29 lettres, et il n'a ni Q, ni W, ni X."),
  ],
  dialogue: {
    title: "Au revoir",
    note: "Hoşça kalın est la forme polie de Hoşça kal, pour les adultes. Canım — « mon chéri, ma chérie » — est un mot affectueux pour les proches.",
    lines: [
      line("murzik", "Ayşe Teyze, yarın Balat'a gidiyorum!", "Tata Ayşe, demain je déménage à Balat !"),
      line("ayse", "Balat'a mı? Ne güzel! Ben orada doğdum!", "À Balat ? Comme c'est bien ! J'y suis née !"),
      line("ayse", "Al, bu cezve senin. Balat'ta kahve yaparsın.", "Tiens, ce cezve est à toi. Tu pourras faire du café à Balat."),
      line("murzik", "Çok teşekkür ederim!", "Merci beaucoup !"),
      line("ayse", "Rica ederim. İyi yolculuklar!", "De rien. Bon voyage !"),
      line("murzik", "Hoşça kalın, Ayşe Teyze!", "Au revoir, tata Ayşe !"),
      line("ayse", "Güle güle, canım!", "Au revoir, mon chéri !"),
    ],
    gist: choice("trpa7-d1", "Que donne Ayşe Teyze à Murzik ?", [
      ["Un cezve, une petite cafetière.", true],
      ["Un verre à thé.", false],
      ["Une carte postale.", false],
    ]),
  },
  grammar: [
    {
      title: "Qui part, et qui reste",
      paragraphs: [
        "En français, on dit « au revoir » dans les deux cas, mais le turc a deux mots différents. Si tu pars, dis Hoşça kal! (aux adultes : Hoşça kalın!). Si tu restes, réponds Güle güle!",
        "Görüşürüz! — « à plus ! » — marche dans les deux cas. Tu peux ajouter quand : Yarın görüşürüz! — À demain !",
      ],
      examples: [
        { ru: "Hoşça kal, Tom! — Güle güle!", en: "Au revoir, Tom ! — Salut, à plus !" },
        { ru: "Yarın görüşürüz!", en: "À demain !" },
      ],
    },
  ],
  tasks: [
    listen("trpa7-t1", "Écoute. Qui part ?", "Hoşça kal, Tom! — Güle güle, Murzik!", [
      ["Murzik.", true],
      ["À Tom.", false],
      ["Ayşe Teyze.", false],
    ]),
    choice("trpa7-t2", "Ton ami rentre chez lui et toi, tu restes. Que dis-tu ?", [
      ["Güle güle!", true],
      ["Hoşça kal!", false],
      ["Merhaba!", false],
    ], { skill: "words" }),
    fill("trpa7-t3", "Complète avec le bon mot : « À demain ! »", "", "görüşürüz!", "Yarın", ["Yarın", "İyi", "Güle"], { skill: "grammar" }),
    missing("trpa7-t4", "Quelle lettre manque ? (« À plus ! »)", "Görüşürü", "!", "z", ["z", "s", "ş"]),
    speak("trpa7-t5", "İyi günler!", "Sana da!", "Toi aussi !", { help: "Réponds à voix haute." }),
    script("trpa7-t6", "Souviens-toi de tout Kadıköy. Termine la conversation avec Ayşe Teyze.", [
      { speaker: "Ayşe Teyze", text: "Merhaba! Nasılsın?" },
      { speaker: "You", answer: "İyiyim, teşekkürler.", options: ["İyiyim, teşekkürler.", "Bilmiyorum.", "Güle güle!"] },
      { speaker: "Ayşe Teyze", text: "Çay ister misin?" },
      { speaker: "You", answer: "Evet, isterim!", options: ["Evet, isterim!", "Özür dilerim.", "Nerelisin?"] },
      { speaker: "Ayşe Teyze", text: "İyi yolculuklar!" },
      { speaker: "You", answer: "Teşekkür ederim! Hoşça kalın!", options: ["Teşekkür ederim! Hoşça kalın!", "Rica ederim!", "Memnun oldum."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cezve",
    itemName: "Cezve en cuivre",
    itemNameRu: "Cezve",
    ru: "Yaşasın! Bir cezve!",
    en: "Hourra ! Un cezve !",
    a11y: "Murzik tient un petit cezve en cuivre, une cafetière à long manche. Ayşe Teyze sourit à la porte du café.",
    image: p("cezve"),
    steps: ["Ayşe Teyze tend un petit paquet à Murzik.", "Dedans, il y a un cezve en cuivre.", "« Pour un vrai café turc ! »", "Murzik le serre fort contre lui."],
    bridge: "La valise est prête. Demain — en ferry à travers le Bosphore, jusqu'à Balat !",
  },
};

const story: CityStory = {
  home: {
    name: "Une chambre au-dessus du café à Kadıköy",
    nameRu: "Murzik'in Kadıköy'deki odası",
    image: p("home"),
    a11y: "Une petite chambre vide au-dessus du café d'Ayşe Teyze : un plancher en bois, une fenêtre sur une rue animée de Kadıköy et la mer au loin. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "cezve",
  welcomeRu: "Merhaba, İstanbul!",
  welcomeEn: "Bonjour, Istanbul !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik avec sa valise sur le quai de Kadıköy, sur la rive asiatique d'Istanbul. Des ferries blancs, des mouettes et de petits cafés le long du rivage.",
  departureImage: p("departure"),
  departureA11y: "Ayşe Teyze dit au revoir de la main à la porte du café pendant que Murzik et Tom marchent vers le quai avec leurs valises.",
  finale: [
    {
      image: p("postcards"),
      a11y: "Gros plan : les pattes de Murzik tiennent deux vieilles cartes postales de la même écriture, chacune avec le même petit chat roux peint. La première montre Istanbul et un timbre turc, la seconde la tour de Galata et les maisons colorées de Balat. On ne peut pas lire les mots.",
      lines: [
        { en: "Avant de faire sa valise, Murzik regarde les deux cartes de grand-mère Asya : celle qui est arrivée à Paris, et celle de la vieille table." },
        { ru: "İzimi takip et. — Asya", en: "Suis mes traces. — Asya" },
        { en: "Quelqu'un veut qu'il la retrouve. La prochaine étape, c'est Balat, de l'autre côté du Bosphore." },
      ],
    },
    {
      image: p("cezve"),
      a11y: "Murzik fait le tour de sa chambre au-dessus du café, meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambre à Kadıköy. Tom la prend en photo pour son carnet de voyage." },
        { en: "Murzik emporte son objet préféré : le cezve d'Ayşe Teyze." },
        { en: "Les cartes postales vont dans la poche de sa valise." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, et Tom fête ça avec lui.",
      lines: [
        { ru: "Kadıköy tamamlandı!", en: "Kadıköy, c'est fait !" },
        { en: "7 / 7 leçons" },
        { ru: "İlk şehir tamam!", en: "Première ville terminée !" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Ayşe Teyze dit au revoir de la main à la porte du café.",
      lines: [
        { ru: "Hoşça kalın, Ayşe Teyze!", en: "Au revoir, tata Ayşe !" },
        { ru: "Sıradaki durak: Balat!", en: "Prochain arrêt : Balat !" },
      ],
    },
    {
      image: p("ferry"),
      a11y: "Un ferry blanc traverse le Bosphore de la rive asiatique à la rive européenne. Murzik et Tom sont sur le pont, entourés de mouettes.",
      lines: [{ ru: "Kadıköy → Balat", en: "Kadıköy → Balat" }],
    },
    {
      image: pic("tr/istanbul/arrival"),
      a11y: "Murzik et Tom avec leurs valises sur le quai de la rive européenne. Derrière eux : la tour de Galata, des ferries sur le Bosphore et des mouettes.",
      lines: [
        { ru: "İşte Avrupa yakası!", en: "Voici la rive européenne !" },
        { ru: "Yeni bir semt. Yeni kelimeler. Yeni maceralar.", en: "Un nouveau quartier. De nouveaux mots. De nouvelles aventures." },
      ],
    },
  ],
};

export const trKadikoyFr = {
  id: "tr-kadikoy",
  name: "Kadıköy",
  nameTr: "Kadıköy",
  lessons: [kadikoy1, kadikoy2, kadikoy3, kadikoy4, kadikoy5, kadikoy6, kadikoy7],
  story,
};
