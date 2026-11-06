import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Mardin · “A1 review” · meeting Can, mountain weather, breakfast, up to the old town, a festival, the cat in the hat, the A1 exam. French version. */

const p = (name: string) => pic(`tr/mardin/${name}`);

const mardin1: Lesson = {
  id: "tr-a1-mardin-1",
  level: "A1",
  cityId: "tr-mardin",
  number: 1,
  title: "Ça fait longtemps !",
  minutes: 7,
  goals: ["Saluer un vieil ami", "Présenter un ami : Tanıştırayım", "Demander comment ça va"],
  vocabNote: "Révision des salutations et des présentations. Uzun zamandır görüşmedik — « ça fait une éternité qu'on ne s'est pas vus ». Tanıştırayım — « laisse-moi te présenter… ».",
  vocab: [
    v("trma1-1", "Görüşmeyeli çok oldu!", "Ça fait longtemps !", "Tom et son ami Can se serrent dans les bras à la gare routière.", "Écouter Görüşmeyeli çok oldu", p("l1-1")),
    v("trma1-2", "Uzun zamandır görüşmedik.", "Ça fait une éternité qu'on ne s'est pas vus.", "Can, un appareil photo autour du cou, tape sur l'épaule de Tom.", "Écouter Uzun zamandır görüşmedik", p("l1-2")),
    v("trma1-3", "Tanıştırayım: bu Murzik.", "Je te présente : voici Murzik.", "Tom montre Murzik, qui fait signe de la patte.", "Écouter Tanıştırayım: bu Murzik", p("l1-3")),
    v("trma1-4", "Nasıl gidiyor?", "Comment ça va ?", "Can sourit en plissant les yeux au soleil.", "Écouter Nasıl gidiyor", p("l1-4")),
    v("trma1-5", "Her şey yolunda.", "Tout va bien.", "Tom lève le pouce.", "Écouter Her şey yolunda", p("l1-5")),
    v("trma1-6", "Hâlâ fotoğrafçı mısın?", "Tu es toujours photographe ?", "Tom désigne l'appareil photo de Can d'un signe de tête.", "Écouter Hâlâ fotoğrafçı mısın", p("l1-6")),
    v("trma1-7", "eski arkadaş", "vieil ami", "Une vieille photo : Tom et Can jeunes, avec leurs appareils photo.", "Écouter eski arkadaş", p("l1-7")),
  ],
  dialogue: {
    title: "Can",
    note: "Can (prononcé « djann ») est un ami de Tom, photographe au même magazine. Dergi — « magazine ». Yol arkadaşı — « compagnon de voyage ». Bahsetmek — « parler de ».",
    lines: [
      line("can", "Tom! Görüşmeyeli çok oldu!", "Tom ! Ça fait longtemps !"),
      line("tom", "Can! Uzun zamandır görüşmedik! Nasıl gidiyor?", "Can ! Ça fait une éternité ! Comment ça va ?"),
      line("can", "Her şey yolunda. Hâlâ dergide çalışıyorum.", "Tout va bien. Je travaille toujours au magazine."),
      line("tom", "Tanıştırayım: bu Murzik. Benim yol arkadaşım.", "Je te présente : voici Murzik. Mon compagnon de voyage."),
      line("murzik", "Merhaba! Memnun oldum!", "Bonjour ! Enchanté !"),
      line("can", "Ben de! Tom senden çok bahsetti. Mardin'e hoş geldin!", "Moi aussi ! Tom m'a beaucoup parlé de toi. Bienvenue à Mardin !"),
    ],
    gist: choice("trma1-d1", "Qui est Can ?", [
      ["Un vieil ami de Tom, photographe.", true],
      ["Le frère de Tom.", false],
      ["Le patron de l'hôtel.", false],
    ]),
  },
  grammar: [
    {
      title: "Révision : les présentations et « comment ça va ? »",
      paragraphs: [
        "Les présentations : Benim adım… (je m'appelle…), Memnun oldum (enchanté), Tanıştırayım: bu… (je te présente : voici…).",
        "Comment ça va : Nasılsın? Nasıl gidiyor? Ne haber? Réponses : İyiyim, teşekkürler. Her şey yolunda. Fena değil.",
      ],
      examples: [
        { ru: "Tanıştırayım: bu benim kardeşim.", en: "Je te présente mon frère." },
        { ru: "Fena değil, sen nasılsın?", en: "Pas mal, et toi ?" },
      ],
    },
  ],
  tasks: [
    choice("trma1-t1", "Comment dit-on « Ça fait une éternité qu'on ne s'est pas vus » ?", [
      ["Uzun zamandır görüşmedik.", true],
      ["Uzun zamandır görüşüyoruz.", false],
      ["Uzun zaman görüşmek.", false],
    ], { skill: "grammar" }),
    listen("trma1-t2", "Écoute. Comment va-t-il ?", "Fena değil, biraz yorgunum.", [
      ["Pas mal, un peu fatigué.", true],
      ["Super, pas fatigué du tout.", false],
      ["Mal, il est malade.", false],
    ]),
    match("trma1-t3", "Associe les paires.", [
      ["Tanıştırayım", "Je te présente"],
      ["Her şey yolunda.", "Tout va bien."],
      ["hâlâ", "toujours, encore"],
      ["eski arkadaş", "vieil ami"],
    ], { skill: "words" }),
    missing("trma1-t4", "Quelle lettre manque ? (« toujours »)", "h", "lâ", "â", ["â", "a", "e"]),
    speak("trma1-t5", "Merhaba! Ben Can. Sen kimsin?", "Merhaba! Benim adım Murzik. Memnun oldum!", "Salut ! Je m'appelle Murzik. Enchanté !", { help: "Présente-toi à voix haute." }),
    choice("trma1-t6", "Comment dit-on « Je ne l'ai pas encore trouvé » ?", [
      ["Henüz bulmadım.", true],
      ["Zaten bulmadım.", false],
      ["Henüz buldum.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kupa",
    itemName: "Mug chat",
    itemNameRu: "Kupa",
    ru: "Yaşasın! Bir kupa!",
    en: "Hourra ! Un mug !",
    a11y: "Un grand mug en céramique avec un dessin de chaton roux tenant un appareil photo.",
    image: p("kupa"),
    steps: ["Can sort un mug de son sac à dos.", "Dessus, un chaton roux avec un appareil photo.", "« Tom fotoğrafını gönderdi, ben de yaptırdım! » — « Tom m'a envoyé ta photo, alors je l'ai fait faire ! »", "Le mug va sur le rebord de la fenêtre."],
    bridge: "Can regarde le ciel : « Dağda hava çabuk değişir. » — « En montagne, le temps change vite. »",
  },
};

const mardin2: Lesson = {
  id: "tr-a1-mardin-2",
  level: "A1",
  cityId: "tr-mardin",
  number: 2,
  title: "Le temps à la montagne",
  minutes: 7,
  goals: ["Réviser le temps qu'il fait", "Parler du jour et de la nuit : gündüz, gece", "Demander le temps de demain"],
  vocabNote: "Révision du temps qu'il fait. Gündüz — « le jour, dans la journée », gece — « la nuit ». Serin — « frais ». Ova — « plaine ».",
  vocab: [
    v("trma2-1", "Gündüz sıcak, gece serin.", "Le jour, il fait chaud, et la nuit, il fait frais.", "Une moitié de l'image, c'est le soleil, l'autre, la lune au-dessus de la ville de pierre.", "Écouter Gündüz sıcak, gece serin", p("l2-1")),
    v("trma2-2", "Rüzgâr esiyor.", "Le vent souffle.", "L'écharpe de Murzik flotte au vent.", "Écouter Rüzgâr esiyor", p("l2-2")),
    v("trma2-3", "Yarın hava nasıl olacak?", "Quel temps fera-t-il demain ?", "Tom regarde la météo sur son téléphone.", "Écouter Yarın hava nasıl olacak", p("l2-3")),
    v("trma2-4", "Bulutlu olacak.", "Ce sera nuageux.", "Des nuages au-dessus de la plaine.", "Écouter Bulutlu olacak", p("l2-4")),
    v("trma2-5", "Ceketini al!", "Prends ta veste !", "Can tend une petite veste à Murzik.", "Écouter Ceketini al", p("l2-5")),
    v("trma2-6", "ova", "plaine", "Une plaine jaune infinie qui s'étend jusqu'à l'horizon.", "Écouter ova", p("l2-6")),
    v("trma2-7", "Güneş batıyor.", "Le soleil se couche.", "Un soleil rouge descend sous la plaine.", "Écouter Güneş batıyor", p("l2-7")),
  ],
  dialogue: {
    title: "Sur le toit",
    note: "Belki — « peut-être ». Kıpkırmızı — « tout rouge ». La Syrie est très proche, juste de l'autre côté de la plaine.",
    lines: [
      line("murzik", "Hava çok güzel! Ama rüzgâr esiyor.", "Il fait beau ! Mais le vent souffle."),
      line("can", "Mardin'de gündüz sıcak, gece serin. Ceketini al!", "À Mardin, il fait chaud le jour et frais la nuit. Prends ta veste !"),
      line("tom", "Yarın hava nasıl olacak?", "Quel temps fera-t-il demain ?"),
      line("can", "Bulutlu olacak, belki biraz yağmur.", "Ce sera nuageux, peut-être un peu de pluie."),
      line("murzik", "Bak! Güneş batıyor! Ova kıpkırmızı!", "Regardez ! Le soleil se couche ! La plaine est devenue toute rouge !"),
      line("can", "İşte Mardin'in en güzel fotoğrafı. Hadi, Tom!", "C'est la plus belle photo de Mardin. Vas-y, Tom !"),
    ],
    gist: choice("trma2-d1", "Quel temps fera-t-il demain ?", [
      ["Nuageux, peut-être de la pluie.", true],
      ["Il fait chaud et il y a du soleil.", false],
      ["De la neige et du vent.", false],
    ]),
  },
  grammar: [
    {
      title: "Révision : le temps et le futur",
      paragraphs: [
        "Le temps maintenant : Hava güzel / sıcak / soğuk. Yağmur yağıyor. Rüzgâr esiyor.",
        "Le temps demain utilise -acak / -ecek : Yarın güneşli olacak. Yarın yağmur yağacak. La question : Yarın hava nasıl olacak?",
      ],
      examples: [
        { ru: "Yarın kar yağacak.", en: "Demain, il va neiger." },
        { ru: "Akşam hava serin olacak.", en: "Le soir, il fera frais." },
      ],
    },
  ],
  tasks: [
    choice("trma2-t1", "Comment dit-on « Demain, ce sera nuageux » ?", [
      ["Yarın bulutlu olacak.", true],
      ["Yarın bulutlu oldu.", false],
      ["Yarın bulutlu oluyor değil.", false],
    ], { skill: "grammar" }),
    listen("trma2-t2", "Écoute. Quel temps fait-il ?", "Bugün rüzgâr esiyor ve hava serin.", [
      ["Du vent et de la fraîcheur.", true],
      ["Chaud et sans vent.", false],
      ["Il neige.", false],
    ]),
    match("trma2-t3", "Associe les paires.", [
      ["gündüz", "le jour, dans la journée"],
      ["gece", "la nuit"],
      ["serin", "frais"],
      ["ova", "plaine"],
    ], { skill: "words" }),
    missing("trma2-t4", "Quelle lettre manque ? (« plaine »)", "o", "a", "v", ["v", "b", "f"]),
    speak("trma2-t5", "Bugün hava nasıl?", "Bugün hava güneşli ama biraz rüzgârlı.", "Aujourd'hui, il y a du soleil, mais un peu de vent.", { help: "Dis à voix haute quel temps il fait aujourd'hui." }),
    listen("trma2-t6", "Souviens-toi de la leçon précédente. Comment ça va ?", "Her şey yolunda.", [
      ["Tout va bien.", true],
      ["Tout est perdu.", false],
      ["Tout est fermé.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "durbun",
    itemName: "Longue-vue",
    itemNameRu: "Dürbün",
    ru: "Yaşasın! Bir dürbün!",
    en: "Hourra ! Une longue-vue !",
    a11y: "Une petite longue-vue en laiton sur un trépied, près d'une fenêtre qui donne sur la plaine.",
    image: p("durbun"),
    steps: ["Can installe une longue-vue en laiton près de la fenêtre.", "« Bak, ovanın sonu yok! » — « Regarde, la plaine n'a pas de fin ! »", "Murzik regarde très loin, jusqu'à l'horizon.", "La longue-vue reste près de la fenêtre."],
    bridge: "Le matin — le célèbre petit-déjeuner de Mardin, sur la terrasse.",
  },
};

const mardin3: Lesson = {
  id: "tr-a1-mardin-3",
  level: "A1",
  cityId: "tr-mardin",
  number: 3,
  title: "Un petit-déjeuner à Mardin",
  minutes: 7,
  goals: ["Réviser la nourriture et la commande", "Dire ce qu'on aime et ce qu'on n'aime pas", "Proposer de payer : Ben ısmarlıyorum"],
  vocabNote: "Révision de la nourriture. Ismarlamak — « offrir, inviter (quelqu'un) » : Ben ısmarlıyorum — « c'est moi qui invite ». Acı — « piquant, épicé ».",
  vocab: [
    v("trma3-1", "Mardin kahvaltısı", "petit-déjeuner de Mardin", "Une terrasse en pierre avec une table couverte de petites assiettes de fromage, d'herbes et de pâtes à tartiner.", "Écouter Mardin kahvaltısı", p("l3-1")),
    v("trma3-2", "Bir menengiç kahvesi, lütfen.", "Un café menengiç, s'il vous plaît.", "Une petite tasse de café épais, clair et mousseux.", "Écouter Bir menengiç kahvesi, lütfen", p("l3-2")),
    v("trma3-3", "Bu acı mı?", "C'est piquant ?", "Murzik renifle une pâte rouge d'un air méfiant.", "Écouter Bu acı mı", p("l3-3")),
    v("trma3-4", "Biraz acı.", "Un peu piquant.", "Murzik goûte et ses oreilles deviennent rouges.", "Écouter Biraz acı", p("l3-4")),
    v("trma3-5", "Doydum!", "J'ai assez mangé !", "Murzik se cale dans sa chaise en tapotant son ventre.", "Écouter Doydum", p("l3-5")),
    v("trma3-6", "Zeytini sevmiyorum.", "Je n'aime pas les olives.", "Murzik repousse l'assiette d'olives de la patte.", "Écouter Zeytini sevmiyorum", p("l3-6")),
    v("trma3-7", "Bugün ben ısmarlıyorum!", "Aujourd'hui, c'est moi qui invite !", "Can prend l'addition des mains du serveur.", "Écouter Bugün ben ısmarlıyorum", p("l3-7")),
  ],
  dialogue: {
    title: "La terrasse",
    note: "Le menengiç est un pistachier sauvage : ses graines grillées donnent un « café » doux et sans caféine. Olmaz — « pas question ». Doydum — mot à mot « je me suis rempli » — encore un sentiment au passé.",
    lines: [
      line("waiter", "Günaydın! Ne istersiniz?", "Bonjour ! Qu'est-ce que vous prenez ?"),
      line("can", "Mardin kahvaltısı ve üç menengiç kahvesi, lütfen.", "Un petit-déjeuner de Mardin et trois cafés menengiç, s'il vous plaît."),
      line("murzik", "Bu kırmızı ne? Acı mı?", "C'est quoi, ce truc rouge ? C'est piquant ?"),
      line("waiter", "Biraz acı. Ama çok lezzetli!", "Un peu piquant. Mais c'est délicieux !"),
      line("murzik", "Evet, çok lezzetli! Ama zeytini sevmiyorum.", "Oui, c'est délicieux ! Mais je n'aime pas les olives."),
      line("murzik", "Doydum! Çok teşekkürler!", "J'ai assez mangé ! Merci beaucoup !"),
      line("tom", "Hesap lütfen!", "L'addition, s'il vous plaît !"),
      line("can", "Olmaz! Bugün ben ısmarlıyorum!", "Pas question ! Aujourd'hui, c'est moi qui invite !"),
    ],
    gist: choice("trma3-d1", "Qui paie le petit-déjeuner ?", [
      ["Can.", true],
      ["À Tom.", false],
      ["Murzik.", false],
    ]),
  },
  grammar: [
    {
      title: "Révision : ce qu'on aime et ce qu'on n'aime pas",
      paragraphs: [
        "Seviyorum — j'aime, sevmiyorum — je n'aime pas. Ce qu'on aime prend -ı / -i / -u / -ü : zeytini sevmiyorum, çayı seviyorum.",
        "Au café : Ne istersiniz? — Bir çay, lütfen. Hesap lütfen! Afiyet olsun!",
      ],
      examples: [
        { ru: "Kahveyi çok seviyorum.", en: "J'adore le café." },
        { ru: "Tom acıyı sevmiyor.", en: "Tom n'aime pas la nourriture épicée." },
      ],
    },
  ],
  tasks: [
    choice("trma3-t1", "Comment dit-on « Je n'aime pas les olives » ?", [
      ["Zeytini sevmiyorum.", true],
      ["Zeytin sevmiyorum değil.", false],
      ["Zeytini seviyorum.", false],
    ], { skill: "grammar" }),
    listen("trma3-t2", "Écoute. Qu'ont-ils commandé ?", "İki çay ve bir simit, lütfen.", [
      ["Deux thés et un simit.", true],
      ["Un thé et deux simits.", false],
      ["Deux cafés et un simit.", false],
    ]),
    match("trma3-t3", "Associe les paires.", [
      ["acı", "piquant, épicé"],
      ["lezzetli", "délicieux"],
      ["zeytin", "olive"],
      ["ısmarlamak", "offrir, inviter (quelqu'un)"],
    ], { skill: "words" }),
    spell("trma3-t4", "Épelle le mot « olive ».", "zeytin"),
    speak("trma3-t5", "Ne istersiniz?", "Bir çay ve bir peynirli börek, lütfen.", "Un thé et un börek au fromage, s'il vous plaît.", { help: "Commande ton petit-déjeuner à voix haute." }),
    choice("trma3-t6", "Comment dit-on « Le jour, il fait chaud, et la nuit, il fait frais » ?", [
      ["Gündüz sıcak, gece serin.", true],
      ["Gece sıcak, gündüz serin.", false],
      ["Gündüz soğuk, gece sıcak.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "menengic-kahvesi",
    itemName: "Boîte de café menengiç",
    itemNameRu: "Menengiç kahvesi",
    ru: "Yaşasın! Menengiç kahvesi!",
    en: "Hourra ! Du café menengiç !",
    a11y: "Une petite boîte à motifs remplie de graines de pistachier sauvage moulues.",
    image: p("menengic-kahvesi"),
    steps: ["Le serveur offre une boîte de menengiç à Murzik.", "« Kahve değil, ama kahve gibi! » — « Ce n'est pas du café, mais c'est comme du café ! »", "Murzik la renifle : ça sent la noisette.", "La boîte va sur l'étagère."],
    bridge: "Après le petit-déjeuner, Can emmène tout le monde en haut, dans la vieille ville.",
  },
};

const mardin4: Lesson = {
  id: "tr-a1-mardin-4",
  level: "A1",
  cityId: "tr-mardin",
  number: 4,
  title: "Vers la vieille ville",
  minutes: 7,
  goals: ["Réviser les directions : en haut, en bas, à gauche, à droite", "Réviser les achats : combien, cher", "Marchander"],
  vocabNote: "Yukarı — « en haut », aşağı — « en bas ». Merdiven — « escalier, marches ». İndirim — « réduction ».",
  vocab: [
    v("trma4-1", "Merdivenlerden yukarı çık.", "Montez l'escalier.", "Un étroit escalier de pierre entre des maisons couleur miel.", "Écouter Merdivenlerden yukarı çık", p("l4-1")),
    v("trma4-2", "aşağı", "en bas", "Murzik regarde en bas depuis un haut escalier.", "Écouter aşağı", p("l4-2")),
    v("trma4-3", "dar sokak", "ruelle étroite", "Une rue si étroite qu'un âne y passe à peine.", "Écouter dar sokak", p("l4-3")),
    v("trma4-4", "Bu sabun kaç lira?", "Combien coûte ce savon ?", "Une petite boutique remplie de savons verts.", "Écouter Bu sabun kaç lira", p("l4-4")),
    v("trma4-5", "Biraz pahalı.", "C'est un peu cher.", "Murzik jette un œil dans son porte-monnaie.", "Écouter Biraz pahalı", p("l4-5")),
    v("trma4-6", "Son fiyat ne?", "C'est quoi, votre meilleur prix ?", "Murzik fait un sourire malin au commerçant.", "Écouter Son fiyat ne", p("l4-6")),
    v("trma4-7", "Tamam, alıyorum!", "D'accord, je le prends !", "Murzik tend quelques pièces.", "Écouter Tamam, alıyorum", p("l4-7")),
  ],
  dialogue: {
    title: "La boutique de savons",
    note: "Le bıttım sabunu est un savon à l'huile de pistachier sauvage ; on le fabrique à Mardin. Son fiyat — mot à mot « dernier prix ». Senin için — « pour toi ».",
    lines: [
      line("can", "Merdivenlerden yukarı çıkalım. Eski şehir yukarıda.", "Montons l'escalier. La vieille ville est tout en haut."),
      line("murzik", "Ne kadar dar sokaklar! Bak, bir sabun dükkânı!", "Quelles ruelles étroites ! Regarde, une boutique de savons !"),
      line("murzik", "Bu sabun kaç lira?", "Combien coûte ce savon ?"),
      line("seller", "Bu bıttım sabunu. Yüz lira.", "C'est du savon au pistachier sauvage. Cent livres."),
      line("murzik", "Biraz pahalı… Son fiyat ne?", "C'est un peu cher… C'est quoi, votre meilleur prix ?"),
      line("seller", "Senin için seksen lira!", "Pour toi, quatre-vingts livres !"),
      line("murzik", "Tamam, alıyorum!", "D'accord, je le prends !"),
    ],
    gist: choice("trma4-d1", "Combien Murzik a-t-il payé le savon ?", [
      ["Quatre-vingts livres.", true],
      ["Cent livres.", false],
      ["Dix-huit livres.", false],
    ]),
  },
  grammar: [
    {
      title: "Révision : les directions et les achats",
      paragraphs: [
        "Les directions : düz git (va tout droit), sağa dön (tourne à droite), sola dön (tourne à gauche), yukarı çık (monte), aşağı in (descends).",
        "Les achats : Bu kaç lira? Pahalı / ucuz. İndirim var mı? Tamam, alıyorum!",
      ],
      examples: [
        { ru: "Aşağı in, sonra sola dön.", en: "Descends, puis tourne à gauche." },
        { ru: "Bu çok ucuz, iki tane alıyorum.", en: "C'est vraiment pas cher — j'en prends deux." },
      ],
    },
  ],
  tasks: [
    choice("trma4-t1", "Comment dit-on « Monte » ?", [
      ["Yukarı çık.", true],
      ["Aşağı in.", false],
      ["Yukarı in.", false],
    ], { skill: "grammar" }),
    listen("trma4-t2", "Écoute. Par où ?", "Aşağı in, sonra sağa dön.", [
      ["En bas, puis à droite.", true],
      ["En haut, puis à gauche.", false],
      ["Tout droit, puis en bas.", false],
    ]),
    match("trma4-t3", "Associe les paires.", [
      ["yukarı", "en haut"],
      ["aşağı", "en bas"],
      ["merdiven", "escalier"],
      ["indirim", "réduction"],
    ], { skill: "words" }),
    missing("trma4-t4", "Quelle lettre manque ? (« en bas »)", "a", "ağı", "ş", ["ş", "s", "z"]),
    speak("trma4-t5", "Bu şal iki yüz lira.", "Biraz pahalı. İndirim var mı?", "C'est un peu cher. Il y a une réduction ?", { help: "Marchande à voix haute." }),
    listen("trma4-t6", "Souviens-toi de la leçon précédente. Que dit Can ?", "Bugün ben ısmarlıyorum!", [
      ["Aujourd'hui, c'est moi qui invite !", true],
      ["Aujourd'hui, je ne mange pas !", false],
      ["L'addition, s'il vous plaît !", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sabun",
    itemName: "Savon de Mardin",
    itemNameRu: "Sabun",
    ru: "Yaşasın! Mardin sabunu!",
    en: "Hourra ! Du savon de Mardin !",
    a11y: "Un pain de savon vert avec un motif en relief, enveloppé dans du papier et noué d'un fil.",
    image: p("sabun"),
    steps: ["Le commerçant emballe le savon dans du papier.", "Il sent la noisette et les herbes.", "« Hediye için mi? » — « C'est pour offrir ? » « Hayır, benim için! » — « Non, c'est pour moi ! »", "Le savon va près du lavabo."],
    bridge: "Le soir, il y a de la musique dans les rues : c'est la fête dans la vieille ville !",
  },
};

const mardin5: Lesson = {
  id: "tr-a1-mardin-5",
  level: "A1",
  cityId: "tr-mardin",
  number: 5,
  title: "La fête",
  minutes: 7,
  goals: ["Réviser les invitations : Gel! Hadi!", "Souhaiter de bonnes fêtes : İyi bayramlar!", "Réviser « allons… » : -elim"],
  vocabNote: "Şenlik — « fête, festival ». Bayram — « fête » (une grande fête que tout le monde célèbre). İyi bayramlar — « bonnes fêtes ! »",
  vocab: [
    v("trma5-1", "Müzik çalıyor!", "Il y a de la musique !", "Un tambour et une zurna jouent sur la place.", "Écouter Müzik çalıyor", p("l5-1")),
    v("trma5-2", "şenlik", "fête", "Une place décorée de petites lanternes.", "Écouter şenlik", p("l5-2")),
    v("trma5-3", "Hadi, gel!", "Allez, viens ici !", "Une fille de la ronde des danseurs tend la main à Murzik.", "Écouter Hadi, gel", p("l5-3")),
    v("trma5-4", "Dans edelim!", "Dansons !", "Murzik et Tom dans la ronde des danseurs.", "Écouter Dans edelim", p("l5-4")),
    v("trma5-5", "İyi bayramlar!", "Bonnes fêtes !", "Les voisins s'échangent des douceurs.", "Écouter İyi bayramlar", p("l5-5")),
    v("trma5-6", "Size de!", "À vous aussi !", "Un vieux voisin s'incline pour répondre.", "Écouter Size de", p("l5-6")),
    v("trma5-7", "Ne kadar eğlenceli!", "Qu'est-ce qu'on s'amuse !", "Murzik tourne sur lui-même, les pattes grandes ouvertes.", "Écouter Ne kadar eğlenceli", p("l5-7")),
  ],
  dialogue: {
    title: "La danse en ligne",
    note: "Le halay est une danse en ligne où l'on se tient par la main ou par le petit doigt. Kolay — « facile ». Adım — ici, « un pas ».",
    lines: [
      line("murzik", "Dinleyin! Müzik çalıyor!", "Écoutez ! Il y a de la musique !"),
      line("can", "Bu akşam bayram şenliği var. Hadi, gel!", "Ce soir, c'est la fête. Allez, on y va !"),
      line("tom", "Bu ne dansı?", "C'est quoi, cette danse ?"),
      line("can", "Halay! Çok kolay. Bir adım sağa, bir adım sola…", "Le halay ! C'est très facile. Un pas à droite, un pas à gauche…"),
      line("murzik", "Dans edelim! Ne kadar eğlenceli!", "Dansons ! Qu'est-ce qu'on s'amuse !"),
      line("tom", "İyi bayramlar!", "Bonnes fêtes !"),
      line("can", "Size de!", "À vous aussi !"),
    ],
    gist: choice("trma5-d1", "Quelle danse font-ils sur la place ?", [
      ["Le halay.", true],
      ["Le horon.", false],
      ["Une valse.", false],
    ]),
  },
  grammar: [
    {
      title: "Révision : allons…",
      paragraphs: [
        "« Allons… », c'est -elim / -alım : dans edelim (dansons), gidelim (allons-y), yiyelim (mangeons), bakalım (voyons).",
        "Pour proposer : … -elim mi? / -alım mı? — Çay içelim mi? — On prend un thé ?",
      ],
      examples: [
        { ru: "Hadi, şenliğe gidelim!", en: "Allez, allons à la fête !" },
        { ru: "Biraz dinlenelim mi?", en: "On se repose un peu ?" },
      ],
    },
  ],
  tasks: [
    choice("trma5-t1", "Comment dit-on « Allons-y ! » ?", [
      ["Gidelim!", true],
      ["Gittik!", false],
      ["Gidiyorlar!", false],
    ], { skill: "grammar" }),
    listen("trma5-t2", "Écoute. Que propose-t-on ?", "Çay içelim mi?", [
      ["Prendre un thé.", true],
      ["Danser.", false],
      ["Rentrer à la maison.", false],
    ]),
    match("trma5-t3", "Associe les paires.", [
      ["şenlik", "fête"],
      ["İyi bayramlar!", "Bonnes fêtes !"],
      ["Size de!", "À vous aussi !"],
      ["eğlenceli", "amusant"],
    ], { skill: "words" }),
    spell("trma5-t4", "Épelle le mot « musique ».", "müzik"),
    speak("trma5-t5", "İyi bayramlar!", "Size de! İyi bayramlar!", "À vous aussi ! Bonnes fêtes !", { help: "Réponds à voix haute aux vœux de fête." }),
    choice("trma5-t6", "Comment demander « Il y a une réduction ? »", [
      ["İndirim var mı?", true],
      ["İndirim mi var değil?", false],
      ["İndirim nerede?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "telkari-kutu",
    itemName: "Boîte en filigrane d'argent",
    itemNameRu: "Telkari kutu",
    ru: "Yaşasın! Bir telkari kutu!",
    en: "Hourra ! Une boîte en filigrane !",
    a11y: "Une toute petite boîte en fil d'argent tressé comme de la dentelle.",
    image: p("telkari-kutu"),
    steps: ["À la fête, un artisan montre sa dentelle d'argent — le telkari.", "Il offre une toute petite boîte à Murzik.", "« Küçük sırlar için. » — « Pour les petits secrets. »", "Murzik y met les cartes postales de grand-mère Asya."],
    bridge: "Tard le soir, Murzik sort sur la terrasse. Quelqu'un y est assis…",
  },
};

const mardin6: Lesson = {
  id: "tr-a1-mardin-6",
  level: "A1",
  cityId: "tr-mardin",
  number: 6,
  title: "Le chat au chapeau",
  minutes: 7,
  goals: ["Comprendre une courte conversation avec un inconnu", "Dire « attendez ! », « ne partez pas ! »", "Lire un mot"],
  vocabNote: "Benziyorsun — « tu ressembles ». Yakında — « bientôt ». Görüşeceğiz — « nous nous reverrons ». Not — « petit mot, note ».",
  vocab: [
    v("trma6-1", "Affedersiniz… Tanışıyor muyuz?", "Excusez-moi… On se connaît ?", "Un vieux chat blanc au chapeau est assis sur la terrasse, au clair de lune.", "Écouter Affedersiniz… Tanışıyor muyuz", p("l6-1")),
    v("trma6-2", "Asya'nın torunu musun?", "Tu es le petit-fils d'Asya ?", "Le chat au chapeau tourne lentement la tête.", "Écouter Asya'nın torunu musun", p("l6-2")),
    v("trma6-3", "Ona çok benziyorsun.", "Tu lui ressembles beaucoup.", "Les yeux du chat au chapeau brillent chaleureusement.", "Écouter Ona çok benziyorsun", p("l6-3")),
    v("trma6-4", "Yakında görüşeceğiz.", "Nous nous reverrons bientôt.", "Le chat au chapeau se lève et soulève son chapeau.", "Écouter Yakında görüşeceğiz", p("l6-4")),
    v("trma6-5", "Bekleyin! Gitmeyin!", "Attendez ! Ne partez pas !", "Murzik tend la patte, mais la terrasse est déjà vide.", "Écouter Bekleyin! Gitmeyin", p("l6-5")),
    v("trma6-6", "Bir not bıraktı.", "Il a laissé un mot.", "Une feuille pliée est posée sur le divan.", "Écouter Bir not bıraktı", p("l6-6")),
    v("trma6-7", "Ben de onu arıyorum.", "Moi aussi, je la cherche.", "Gros plan : le mot, d'une écriture soignée et ancienne.", "Écouter Ben de onu arıyorum", p("l6-7")),
  ],
  dialogue: {
    title: "La terrasse la nuit",
    note: "Torun — « petit-enfant ». Nereden biliyorsunuz — « comment le savez-vous ». Kayboldu — « il a disparu ». Murzik vouvoie le vieux chat (-siniz).",
    lines: [
      line("murzik", "Affedersiniz… Tanışıyor muyuz?", "Excusez-moi… On se connaît ?"),
      line("lev", "Asya'nın torunu musun?", "Tu es le petit-fils d'Asya ?"),
      line("murzik", "Evet! Nereden biliyorsunuz?", "Oui ! Comment le savez-vous ?"),
      line("lev", "Ona çok benziyorsun… Yakında görüşeceğiz.", "Tu lui ressembles tellement… Nous nous reverrons bientôt."),
      line("murzik", "Bekleyin! Gitmeyin!", "Attendez ! Ne partez pas !"),
      line("tom", "Murzik! Kim vardı burada?", "Murzik ! Qui était là ?"),
      line("murzik", "Kayboldu! Ama bir not bıraktı…", "Il a disparu ! Mais il a laissé un mot…"),
    ],
    gist: choice("trma6-d1", "Qu'a dit le chat au chapeau ?", [
      ["Que Murzik ressemble à Asya et qu'ils se reverront bientôt.", true],
      ["Qu'Asya habite à Mardin.", false],
      ["Qu'il est le grand-père de Murzik.", false],
    ]),
  },
  grammar: [
    {
      title: "Les demandes polies : -in, -ın / -meyin",
      paragraphs: [
        "Une demande polie ou au pluriel se termine par -in / -ın / -un / -ün : bekleyin (attendez), gelin (venez ici), oturun (asseyez-vous), dinleyin (écoutez).",
        "« Ne… pas », c'est -meyin / -mayın : gitmeyin (ne partez pas), korkmayın (n'ayez pas peur), unutmayın (n'oubliez pas).",
      ],
      examples: [
        { ru: "Lütfen bekleyin!", en: "Attendez, s'il vous plaît !" },
        { ru: "Korkmayın, ben arkadaşım.", en: "N'ayez pas peur, je suis un ami." },
      ],
    },
  ],
  tasks: [
    choice("trma6-t1", "Comment dit-on poliment « Ne partez pas ! » ?", [
      ["Gitmeyin!", true],
      ["Gidin!", false],
      ["Gitmiyorum!", false],
    ], { skill: "grammar" }),
    listen("trma6-t2", "Écoute. Que dit le chat au chapeau ?", "Yakında görüşeceğiz.", [
      ["Nous nous reverrons bientôt.", true],
      ["Ça fait une éternité qu'on ne s'est pas vus.", false],
      ["Nous ne nous reverrons jamais.", false],
    ]),
    match("trma6-t3", "Associe les paires.", [
      ["yakında", "bientôt"],
      ["benziyorsun", "tu ressembles"],
      ["not", "petit mot"],
      ["Bekleyin!", "Attendez !"],
    ], { skill: "words" }),
    missing("trma6-t4", "Quelle lettre manque ? (« petit-enfant »)", "tor", "n", "u", ["u", "ü", "o"]),
    speak("trma6-t5", "Kimsin sen?", "Ben Murzik. Asya'nın torunuyum.", "Je suis Murzik. Je suis le petit-fils d'Asya.", { help: "Présente-toi à voix haute au chat au chapeau." }),
    listen("trma6-t6", "Souviens-toi de la leçon précédente. Que dit-on à la fête ?", "İyi bayramlar!", [
      ["Bonnes fêtes !", true],
      ["Bon voyage !", false],
      ["Bon appétit !", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sedir",
    itemName: "Divan avec coussins",
    itemNameRu: "Sedir",
    ru: "Yaşasın! Bir sedir!",
    en: "Hourra ! Un divan !",
    a11y: "Un divan bas près de la fenêtre, couvert d'un tapis et de coussins brodés. Un seul poil blanc est posé dessus.",
    image: p("sedir"),
    steps: ["Murzik et Tom rentrent le divan depuis la terrasse.", "Un seul poil blanc y est encore posé.", "Murzik s'assoit à la place du chat au chapeau.", "Et regarde longtemps les étoiles."],
    bridge: "Demain, c'est l'examen A1. Murzik glisse le petit mot sous son oreiller.",
  },
};

const mardin7: Lesson = {
  id: "tr-a1-mardin-7",
  level: "A1",
  cityId: "tr-mardin",
  number: 7,
  title: "L'examen A1",
  minutes: 9,
  goals: ["Réussir l'examen A1", "Comprendre le mot du chat au chapeau", "Fêter la fin du niveau"],
  vocabNote: "Sınav — « examen ». Tebrikler — « félicitations ». Gurur duymak — « être fier ». Başardın — « tu as réussi ». Seviye — « niveau ».",
  vocab: [
    v("trma7-1", "A1 sınavı", "l'examen A1", "Murzik à un bureau avec un crayon ; sur la feuille, en grosses lettres : A1.", "Écouter A1 sınavı", p("l7-1")),
    v("trma7-2", "Seninle gurur duyuyoruz!", "Nous sommes fiers de toi !", "Tom et Can applaudissent.", "Écouter Seninle gurur duyuyoruz", p("l7-2")),
    v("trma7-3", "Başardın!", "Tu as réussi !", "Murzik brandit sa copie avec la meilleure note au-dessus de sa tête.", "Écouter Başardın", p("l7-3")),
    v("trma7-4", "A1 seviyesi bitti.", "Le niveau A1 est terminé.", "Une carte de la Turquie avec une empreinte de patte sur chaque ville.", "Écouter A1 seviyesi bitti", p("l7-4")),
    v("trma7-5", "Notta ne yazıyor?", "Que dit le petit mot ?", "Murzik déplie le petit mot.", "Écouter Notta ne yazıyor", p("l7-5")),
    v("trma7-6", "Safranbolu", "Safranbolu (une ville)", "Une vieille ville aux maisons de bois blanches dans une vallée verte.", "Écouter Safranbolu", p("l7-6")),
    v("trma7-7", "Yeni bir yolculuk başlıyor!", "Un nouveau voyage commence !", "Murzik avec sa valise sur le pas de la porte, la route devant lui.", "Écouter Yeni bir yolculuk başlıyor", p("l7-7")),
  ],
  dialogue: {
    title: "Le petit mot",
    note: "Altında — « en dessous ». L. est la première lettre du nom du chat au chapeau. Sıradaki — « le prochain ».",
    lines: [
      line("tom", "Tebrikler, Murzik! Sınavı geçtin! Başardın! Seninle gurur duyuyoruz!", "Félicitations, Murzik ! Tu as réussi l'examen ! Tu as réussi ! Nous sommes fiers de toi !"),
      line("can", "A1 seviyesi bitti! Şimdi ne yapacaksın?", "Le niveau A1 est terminé ! Qu'est-ce que tu vas faire maintenant ?"),
      line("murzik", "Bakın, notu okuyorum: «Ben de onu arıyorum. — L.»", "Regardez, je lis le petit mot : « Moi aussi, je la cherche. — L. »"),
      line("tom", "Altında bir şey daha var…", "Il y a encore quelque chose en dessous…"),
      line("murzik", "«Safranbolu.» Sıradaki şehrimiz!", "« Safranbolu. » Notre prochaine ville !"),
      line("tom", "Yeni bir yolculuk başlıyor!", "Un nouveau voyage commence !"),
    ],
    gist: choice("trma7-d1", "Quelle ville est écrite sur le petit mot ?", [
      ["Safranbolu.", true],
      ["D'Istanbul.", false],
      ["De Paris.", false],
    ]),
  },
  grammar: [
    {
      title: "Tout le niveau A1 en un coup d'œil",
      paragraphs: [
        "Présent : geliyorum (je viens). Passé : geldim (je suis venu). Futur : geleceğim (je viendrai). « Allons » : gelelim. Demande : gel / gelin. Négation : gelmiyorum, gelmedim.",
        "Terminaisons de lieu : -de (où), -e (vers où), -den (d'où). Il y a / il n'y a pas : var / yok. Questions : mı, mi, mu, mü.",
      ],
      examples: [
        { ru: "İki gün önce Mardin'e geldik, yarın Safranbolu'ya gideceğiz.", en: "Nous sommes arrivés à Mardin il y a deux jours ; demain, nous allons à Safranbolu." },
        { ru: "Türkçe öğreniyorum ve çok seviyorum!", en: "J'apprends le turc et j'adore ça !" },
      ],
    },
  ],
  tasks: [
    listen("trma7-t1", "Examen audio. De quoi parle Murzik ?", "Önce Paris'teydim. Sonra Türkiye'ye geldim. Türkiye'de on dört şehir gördüm. Büyükannemi henüz bulmadım, ama yakında bulacağım!", [
      ["Il était à Paris, il a vu quatorze villes turques et il va bientôt retrouver sa grand-mère.", true],
      ["Il habite à Mardin et ne veut aller nulle part.", false],
      ["Il a retrouvé sa grand-mère à Paris.", false],
    ]),
    choice("trma7-t2", "Examen. Comment dit-on « Demain, nous allons à Safranbolu » ?", [
      ["Yarın Safranbolu'ya gideceğiz.", true],
      ["Yarın Safranbolu'da gittik.", false],
      ["Dün Safranbolu'ya gideceğiz.", false],
    ], { skill: "grammar" }),
    match("trma7-t3", "Examen. Associe les paires.", [
      ["geldim", "je suis venu"],
      ["geliyorum", "je viens"],
      ["geleceğim", "je viendrai"],
      ["gelmedim", "je ne suis pas venu"],
    ], { skill: "words" }),
    spell("trma7-t4", "Examen. Épelle le mot « examen ».", "sınav"),
    speak("trma7-t5", "Türkçe öğreniyor musun?", "Evet, Türkçe öğreniyorum. A1 seviyesi bitti!", "Oui, j'apprends le turc. J'ai terminé le niveau A1 !", { help: "Dis à voix haute que tu as terminé le niveau A1." }),
    script("trma7-t6", "L'examen A1. Souviens-toi de tout le voyage et complète les conversations.", [
      { speaker: "Ayşe Teyze", text: "Merhaba! Nasılsın?" },
      { speaker: "You", answer: "İyiyim, teşekkürler. Siz nasılsınız?", options: ["İyiyim, teşekkürler. Siz nasılsınız?", "Hoşça kal!", "Afiyet olsun!"] },
      { speaker: "Waiter", text: "Ne istersiniz?" },
      { speaker: "You", answer: "Bir çay, lütfen.", options: ["Bir çay, lütfen.", "Bir çaylar, lütfen.", "Çay yok."] },
      { speaker: "Passer-by", text: "Nereye gidiyorsun?" },
      { speaker: "You", answer: "Müzeye gidiyorum.", options: ["Müzeye gidiyorum.", "Müzede gidiyorum.", "Müzeden gidiyorum."] },
      { speaker: "Elif", text: "Dün ne yaptın?" },
      { speaker: "You", answer: "Çarşıya gittim.", options: ["Çarşıya gittim.", "Çarşıya gideceğim.", "Çarşı gitti."] },
      { speaker: "Can", text: "Yarın ne yapacaksın?" },
      { speaker: "You", answer: "Yarın Safranbolu'ya gideceğim.", options: ["Yarın Safranbolu'ya gideceğim.", "Dün Safranbolu'ya gittim.", "Safranbolu yok."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fener",
    itemName: "Lanterne en cuivre",
    itemNameRu: "Fener",
    ru: "Yaşasın! Bir fener!",
    en: "Hourra ! Une lanterne !",
    a11y: "Une lanterne en cuivre faite main, aux vitres de verre coloré. Une bougie brûle dedans et projette des motifs colorés sur les murs.",
    image: p("fener"),
    steps: ["Can offre une lanterne en cuivre au verre coloré.", "« Yolunu aydınlatsın! » — « Qu'elle éclaire ta route ! »", "Murzik allume la bougie, et des motifs colorés dansent sur les murs.", "La lanterne est l'objet le plus précieux de Mardin."],
    bridge: "Niveau A1 terminé ! Ensuite : Safranbolu et le niveau A2.",
  },
};

const story: CityStory = {
  home: {
    name: "Une maison de pierre avec une terrasse",
    nameRu: "Taş ev",
    image: p("home"),
    a11y: "Une chambre vide dans une maison de pierre couleur miel : des arcades, un haut plafond et une porte qui donne sur la terrasse. Au-delà de la terrasse, une plaine infinie. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "fener",
  welcomeRu: "Merhaba, Mardin!",
  welcomeEn: "Bonjour, Mardin !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom devant Mardin : des maisons de pierre couleur miel montent en gradins à flanc de montagne, au-dessus d'une plaine infinie.",
  departureImage: p("departure"),
  departureA11y: "Can, avec son appareil photo, dit au revoir à la gare routière de Mardin.",
  finale: [
    {
      image: p("finale-1"),
      a11y: "Murzik est dans sa chambre de Mardin : le divan avec les coussins, la longue-vue près de la fenêtre, le mug chat, la boîte en argent. Entre ses pattes, la lanterne en cuivre au verre coloré.",
      lines: [
        { en: "La maison de pierre reste chaude même la nuit." },
        { en: "Murzik emporte son objet préféré : la lanterne en cuivre." },
      ],
    },
    {
      image: p("finale-2"),
      a11y: "Murzik et Tom sur la terrasse au coucher du soleil, les bras levés. Derrière eux, une longue route marquée de quatorze petites empreintes de pattes.",
      lines: [
        { ru: "Mardin tamamlandı!", en: "Mardin, c'est fait !" },
        { en: "7 / 7 leçons" },
        { ru: "A1 seviyesi tamamlandı! On dört şehir!", en: "Niveau A1 terminé ! Quatorze villes !" },
      ],
    },
    {
      image: p("valise"),
      a11y: "La valise ouverte de Murzik : une cafetière en cuivre, des verres à thé en forme de tulipe, un foulard en soie, une horloge, une serviette en coton, une perle contre le mauvais œil, un petit saz, une lampe en mosaïque, une cruche en argile, une couverture blanche, une théière double, une assiette du petit-déjeuner, un plateau en cuivre et la lanterne en cuivre. Dans la boîte en argent, les cartes postales de grand-mère Asya et un petit mot signé « L. ».",
      lines: [
        { en: "Quatorze villes. Quatorze objets préférés. Les cartes postales de grand-mère Asya. Et un petit mot du chat au chapeau." },
        { ru: "Ben de onu arıyorum.", en: "Moi aussi, je la cherche." },
        { en: "Murzik ferme sa valise. « Safranbolu, dit-il. On y va. »" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Can dit au revoir de la main.",
      lines: [
        { ru: "Hoşça kal, Mardin! Hoşça kal, Can!", en: "Au revoir, Mardin ! Au revoir, Can !" },
        { ru: "Sıradaki durak: Safranbolu!", en: "Prochain arrêt : Safranbolu !" },
      ],
    },
    {
      image: p("flight"),
      a11y: "Un avion traverse toute la Turquie vers le nord-ouest.",
      lines: [{ ru: "Mardin → Safranbolu", en: "Mardin → Safranbolu" }],
    },
    {
      image: pic("tr/safranbolu/arrival"),
      a11y: "Murzik et Tom à Safranbolu : des maisons de bois blanches aux poutres sombres dans une vallée verte, et des rues pavées.",
      lines: [
        { ru: "Merhaba, Safranbolu!", en: "Bonjour, Safranbolu !" },
        { ru: "A2 başlıyor!", en: "Le niveau A2 commence !" },
      ],
    },
  ],
};

export const trMardinFr = {
  id: "tr-mardin",
  name: "Mardin",
  nameTr: "Mardin",
  lessons: [mardin1, mardin2, mardin3, mardin4, mardin5, mardin6, mardin7],
  story,
};
