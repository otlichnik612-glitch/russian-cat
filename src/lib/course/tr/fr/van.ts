import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { choice, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Van · “My town” · what there is in town, where it is, what it's like, a letter from Istanbul, the reply, open or closed, Murzik the tour guide. French version. */

const p = (name: string) => pic(`tr/van/${name}`);

const van1: Lesson = {
  id: "tr-a1-van-1",
  level: "A1",
  cityId: "tr-van",
  number: 1,
  title: "Qu'y a-t-il en ville ?",
  minutes: 7,
  goals: ["Dire ce qu'il y a en ville : … var", "Demander : … var mı?", "Dire « il n'y a pas » : yok"],
  vocabNote: "Var — « il y a », yok — « il n'y a pas ». Le lieu prend la terminaison -da / -de : Şehirde bir kale var. — Il y a un château dans la ville.",
  vocab: [
    v("trva1-1", "Şehirde bir kale var.", "Il y a un château dans la ville.", "Un château antique sur un haut rocher au bord du lac.", "Écouter Şehirde bir kale var", p("l1-1")),
    v("trva1-2", "kahvaltı evi", "maison du petit-déjeuner", "Un café douillet avec de longues tables couvertes de petites assiettes.", "Écouter kahvaltı evi", p("l1-2")),
    v("trva1-3", "Burada müze var mı?", "Il y a un musée ici ?", "Tom tient un plan de la ville et regarde autour de lui.", "Écouter Burada müze var mı", p("l1-3")),
    v("trva1-4", "Evet, var.", "Oui, il y en a un.", "Gülsüm Teyze hoche la tête et montre la direction.", "Écouter Evet, var", p("l1-4")),
    v("trva1-5", "Hayır, yok.", "Non, il n'y en a pas.", "Gülsüm Teyze secoue la tête.", "Écouter Hayır, yok", p("l1-5")),
    v("trva1-6", "çarşı", "bazar, rues marchandes", "Des rues marchandes couvertes, bordées de petites boutiques.", "Écouter çarşı", p("l1-6")),
    v("trva1-7", "iskele", "ponton, jetée", "Un ponton en bois avec un bateau amarré à côté.", "Écouter iskele", p("l1-7")),
  ],
  dialogue: {
    title: "Gülsüm Teyze",
    note: "Gülsüm Teyze tient une maison du petit-déjeuner au bord du lac. Ada — « île ». Kilise — « église ». Tekne — « bateau ». Dünyanın en güzel kahvaltısı — « le meilleur petit-déjeuner du monde ».",
    lines: [
      line("gulsum", "Hoş geldiniz! Ben Gülsüm. Burası benim kahvaltı evim.", "Bienvenue ! Je suis Gülsüm. Voici ma maison du petit-déjeuner."),
      line("tom", "Merhaba! Van'da ne var?", "Bonjour ! Qu'y a-t-il à Van ?"),
      line("gulsum", "Şehirde eski bir kale var. Gölde de bir ada var, adada eski bir kilise var.", "Il y a un vieux château dans la ville. Et il y a une île sur le lac, avec une vieille église dessus."),
      line("murzik", "Adaya tekne var mı?", "Il y a un bateau pour l'île ?"),
      line("gulsum", "Evet, var. İskeleden her saat bir tekne var.", "Oui, il y en a un. Un bateau part du ponton toutes les heures."),
      line("tom", "Burada metro var mı?", "Il y a un métro ici ?"),
      line("gulsum", "Hayır, yok! Ama dünyanın en güzel kahvaltısı var!", "Non, il n'y en a pas ! Mais il y a le meilleur petit-déjeuner du monde !"),
    ],
    gist: choice("trva1-d1", "Qu'est-ce qu'il n'y a pas à Van ?", [
      ["Un métro.", true],
      ["Un château.", false],
      ["Un bateau pour l'île.", false],
    ]),
  },
  grammar: [
    {
      title: "Il y a / il n'y a pas : var, yok",
      paragraphs: [
        "Var veut dire « il y a » : Burada bir müze var. — Il y a un musée ici. Yok veut dire « il n'y a pas » : Burada metro yok. — Il n'y a pas de métro ici.",
        "La question, c'est var mı? / yok mu? : Yakında eczane var mı? — Il y a une pharmacie près d'ici ?",
      ],
      examples: [
        { ru: "Otelde havuz var mı?", en: "Il y a une piscine à l'hôtel ?" },
        { ru: "Köyde market yok.", en: "Il n'y a pas de magasin au village." },
      ],
    },
  ],
  tasks: [
    choice("trva1-t1", "Comment demander « Il y a une pharmacie ici ? »", [
      ["Burada eczane var mı?", true],
      ["Burada eczane var.", false],
      ["Burada eczane nerede var?", false],
    ], { skill: "grammar" }),
    listen("trva1-t2", "Écoute. Qu'y a-t-il au village ?", "Köyde bir okul var, ama hastane yok.", [
      ["Il y a une école, mais pas d'hôpital.", true],
      ["Il y a un hôpital, mais pas d'école.", false],
      ["Il n'y a ni école ni hôpital.", false],
    ]),
    match("trva1-t3", "Associe les paires.", [
      ["kale", "château"],
      ["ada", "île"],
      ["çarşı", "bazar"],
      ["iskele", "ponton"],
    ], { skill: "words" }),
    missing("trva1-t4", "Quelle lettre manque ? (« bazar »)", "", "arşı", "ç", ["ç", "c", "ş"]),
    speak("trva1-t5", "Senin şehrinde ne var?", "Şehrimde bir park ve bir müze var.", "Dans ma ville, il y a un parc et un musée.", { help: "Dis à voix haute ce qu'il y a dans ta ville." }),
    choice("trva1-t6", "À l'hôtel, comment dit-on « Je voudrais libérer la chambre » ?", [
      ["Çıkış yapmak istiyorum.", true],
      ["Çıkış yapıyorum istiyorum.", false],
      ["Çıkış yok.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "puf",
    itemName: "Pouf",
    itemNameRu: "Puf",
    ru: "Yaşasın! Bir puf!",
    en: "Hourra ! Un pouf !",
    a11y: "Un pouf rond et moelleux recouvert d'un tissu de tapis à motif rouge et bleu.",
    image: p("puf"),
    steps: ["Gülsüm Teyze fait rouler un pouf rond sur le sol.", "« Odana, canım! » — « Pour ta chambre, mon chéri ! »", "Murzik se laisse tomber dessus.", "Depuis le pouf, il voit le lac."],
    bridge: "Murzik veut trouver le château tout seul. Mais où est-il ?",
  },
};

const van2: Lesson = {
  id: "tr-a1-van-2",
  level: "A1",
  cityId: "tr-van",
  number: 2,
  title: "Où est-ce ?",
  minutes: 7,
  goals: ["Dire « à côté de », « en face de », « entre »", "Demander où se trouve un endroit", "Comprendre la réponse d'un passant"],
  vocabNote: "Yanında — « à côté de », karşısında — « en face de », arasında — « entre ». Ils se mettent après le lieu, qui prend une terminaison « de qui » : parkın yanında — à côté du parc (mot à mot « du parc à côté »).",
  vocab: [
    v("trva2-1", "Kale nerede?", "Où est le château ?", "Murzik est à un carrefour avec un plan.", "Écouter Kale nerede", p("l2-1")),
    v("trva2-2", "gölün yanında", "à côté du lac", "Le château, avec le lac bleu et lisse à côté.", "Écouter gölün yanında", p("l2-2")),
    v("trva2-3", "parkın karşısında", "en face du parc", "Un café de l'autre côté de la rue, en face d'un parc.", "Écouter parkın karşısında", p("l2-3")),
    v("trva2-4", "banka ile postane arasında", "entre la banque et la poste", "Une petite boutique entre une banque et une poste.", "Écouter banka ile postane arasında", p("l2-4")),
    v("trva2-5", "Uzak mı?", "C'est loin ?", "Murzik regarde une longue route.", "Écouter Uzak mı", p("l2-5")),
    v("trva2-6", "Yürüyerek on dakika.", "Dix minutes à pied.", "De petites empreintes de pattes le long d'un chemin, et une horloge.", "Écouter Yürüyerek on dakika", p("l2-6")),
    v("trva2-7", "Sağ olun!", "Merci !", "Murzik s'incline devant le passant.", "Écouter Sağ olun", p("l2-7")),
  ],
  dialogue: {
    title: "Au carrefour",
    note: "Sağ olun est un « merci » chaleureux (la forme polie de Sağ ol). Affedersiniz — « excusez-moi ».",
    lines: [
      line("murzik", "Affedersiniz, kale nerede?", "Excusez-moi, où est le château ?"),
      line("passerby", "Kale gölün yanında.", "Le château est à côté du lac."),
      line("murzik", "Uzak mı?", "C'est loin ?"),
      line("passerby", "Hayır, yürüyerek on dakika. Postaneyi biliyor musun?", "Non, dix minutes à pied. Tu connais la poste ?"),
      line("murzik", "Evet, parkın karşısında.", "Oui, elle est en face du parc."),
      line("passerby", "Tamam. Kale yolu postane ile banka arasında.", "Bien. Le chemin du château est entre la poste et la banque."),
      line("murzik", "Sağ olun!", "Merci !"),
    ],
    gist: choice("trva2-d1", "Où commence le chemin du château ?", [
      ["Entre la poste et la banque.", true],
      ["En face du parc.", false],
      ["À côté de l'hôtel.", false],
    ]),
  },
  grammar: [
    {
      title: "À côté de, en face de, entre",
      paragraphs: [
        "Le schéma : lieu + terminaison « de qui » + yanında / karşısında / arkasında / önünde. Parkın yanında (à côté du parc), otelin karşısında (en face de l'hôtel), evin arkasında (derrière la maison), caminin önünde (devant la mosquée).",
        "« Entre », c'est A ile B arasında : banka ile postane arasında (entre la banque et la poste).",
      ],
      examples: [
        { ru: "Eczane otelin karşısında.", en: "La pharmacie est en face de l'hôtel." },
        { ru: "Kedi evin arkasında.", en: "Le chat est derrière la maison." },
      ],
    },
  ],
  tasks: [
    choice("trva2-t1", "Comment dit-on « à côté de l'hôtel » ?", [
      ["otelin yanında", true],
      ["otel yanında", false],
      ["otelde yanında", false],
    ], { skill: "grammar" }),
    listen("trva2-t2", "Écoute. Où est la pharmacie ?", "Eczane parkın karşısında.", [
      ["En face du parc.", true],
      ["À côté du parc.", false],
      ["Derrière le parc.", false],
    ]),
    match("trva2-t3", "Associe les paires.", [
      ["yanında", "à côté de"],
      ["karşısında", "en face de"],
      ["arasında", "entre"],
      ["arkasında", "derrière"],
    ], { skill: "words" }),
    missing("trva2-t4", "Quelle lettre manque ? (« en face de »)", "kar", "ısında", "ş", ["ş", "s", "ç"]),
    speak("trva2-t5", "Senin evin nerede?", "Evim parkın yanında.", "Ma maison est à côté du parc.", { help: "Dis à voix haute ce qu'il y a à côté de chez toi." }),
    listen("trva2-t6", "Souviens-toi de la leçon précédente. Il y a un métro ?", "Burada metro yok.", [
      ["Non, il n'y a pas de métro.", true],
      ["Oui, il y a un métro.", false],
      ["Le métro est loin.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "yastik",
    itemName: "Coussin brodé",
    itemNameRu: "Yastık",
    ru: "Yaşasın! İşlemeli bir yastık!",
    en: "Hourra ! Un coussin brodé !",
    a11y: "Un petit coussin brodé d'une chatte blanche aux yeux vairons, l'un bleu et l'autre vert.",
    image: p("yastik"),
    steps: ["Sur le chemin du château, il y a une petite boutique de broderie.", "La commerçante offre à Murzik un petit coussin.", "Il est brodé d'une chatte blanche aux yeux vairons.", "« Bu bir Van kedisi! » — « C'est un chat de Van ! »"],
    bridge: "En rentrant, Murzik voit une chatte blanche près du ponton. Est-ce qu'elle… nage ?!",
  },
};

const van3: Lesson = {
  id: "tr-a1-van-3",
  level: "A1",
  cityId: "tr-van",
  number: 3,
  title: "Comment c'est ?",
  minutes: 7,
  goals: ["Décrire une ville et un animal", "Placer l'adjectif avant le nom", "Dire « très », « un peu », « pas du tout »"],
  vocabNote: "L'adjectif se met avant le nom et ne change jamais : büyük göl — un grand lac, büyük göller — de grands lacs.",
  vocab: [
    v("trva3-1", "Van kedisi", "chat de Van", "Une chatte blanche comme neige, toute duveteuse, est assise sur le ponton.", "Écouter Van kedisi", p("l3-1")),
    v("trva3-2", "Bir gözü mavi, bir gözü yeşil.", "Un œil est bleu, l'autre est vert.", "Gros plan : le museau de la chatte, avec un œil bleu et un œil vert.", "Écouter Bir gözü mavi, bir gözü yeşil", p("l3-2")),
    v("trva3-3", "Yüzmeyi seviyor.", "Elle aime nager.", "La chatte blanche nage près du ponton, le cou tendu.", "Écouter Yüzmeyi seviyor", p("l3-3")),
    v("trva3-4", "sessiz", "calme", "Une rue calme ; un vieil homme somnole sur un banc.", "Écouter sessiz", p("l3-4")),
    v("trva3-5", "kalabalık", "bondé, plein de monde", "Un bazar bondé, plein d'acheteurs.", "Écouter kalabalık", p("l3-5")),
    v("trva3-6", "biraz soğuk", "un peu froid", "Murzik grelotte dans le vent, au bord du lac.", "Écouter biraz soğuk", p("l3-6")),
    v("trva3-7", "hiç sıcak değil", "pas chaud du tout", "De l'eau glacée au bord ; Murzik y trempe une patte.", "Écouter hiç sıcak değil", p("l3-7")),
  ],
  dialogue: {
    title: "Boncuk",
    note: "Boncuk est une chatte de Van ordinaire — elle ne parle pas. Boncuk veut dire « perle ». Islak veut dire « mouillé ».",
    lines: [
      line("murzik", "Bak, Tom! Beyaz bir kedi yüzüyor!", "Regarde, Tom ! Une chatte blanche qui nage !"),
      line("gulsum", "Bu Boncuk, bizim kedimiz. O bir Van kedisi.", "C'est Boncuk, notre chatte. C'est une chatte de Van."),
      line("tom", "Bir gözü mavi, bir gözü yeşil! Çok güzel!", "Un œil est bleu et l'autre est vert ! Elle est magnifique !"),
      line("gulsum", "Evet. Van kedileri yüzmeyi seviyor.", "Oui. Les chats de Van adorent nager."),
      line("murzik", "Ben yüzmeyi hiç sevmiyorum! Su biraz soğuk…", "Moi, je n'aime pas du tout nager ! L'eau est un peu froide…"),
      line("gulsum", "Boncuk için soğuk değil! Bak, şimdi ıslak ve mutlu.", "Pour Boncuk, elle n'est pas froide ! Regarde, maintenant elle est mouillée et heureuse."),
    ],
    gist: choice("trva3-d1", "Qu'adore Boncuk ?", [
      ["Nager.", true],
      ["Dormir sur les valises.", false],
      ["Il boit du thé.", false],
    ]),
  },
  grammar: [
    {
      title: "Les adjectifs et « très »",
      paragraphs: [
        "L'adjectif se met avant le nom : eski bir kale (un vieux château), sessiz bir sokak (une rue calme). Remarque que bir (un) se met entre l'adjectif et le nom — contrairement au français (« un vieux château »).",
        "Çok — très, biraz — un peu, hiç … değil — pas du tout : çok kalabalık (très bondé), biraz soğuk (un peu froid), hiç sıcak değil (pas chaud du tout).",
      ],
      examples: [
        { ru: "Van sessiz bir şehir.", en: "Van est une ville calme." },
        { ru: "Göl çok büyük ve çok mavi.", en: "Le lac est très grand et très bleu." },
      ],
    },
  ],
  tasks: [
    choice("trva3-t1", "Comment dit-on « une ville calme » ?", [
      ["sessiz bir şehir", true],
      ["bir şehir sessiz", false],
      ["şehir bir sessiz", false],
    ], { skill: "grammar" }),
    listen("trva3-t2", "Écoute. Quel temps fait-il ?", "Bugün hava biraz soğuk.", [
      ["Un peu froid.", true],
      ["Très chaud.", false],
      ["Pas froid du tout.", false],
    ]),
    match("trva3-t3", "Associe les paires.", [
      ["sessiz", "calme"],
      ["kalabalık", "bondé, plein de monde"],
      ["ıslak", "mouillé"],
      ["biraz", "un peu"],
    ], { skill: "words" }),
    spell("trva3-t4", "Épelle le mot « calme ».", "sessiz"),
    speak("trva3-t5", "Şehrin nasıl?", "Şehrim büyük ve biraz kalabalık.", "Ma ville est grande et un peu bondée.", { help: "Décris ta ville à voix haute." }),
    choice("trva3-t6", "Comment dit-on « en face du parc » ?", [
      ["parkın karşısında", true],
      ["parkta karşı", false],
      ["park karşıdan", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "oyuncak-kedi",
    itemName: "Chat de Van en peluche",
    itemNameRu: "Oyuncak kedi",
    ru: "Yaşasın! Bir oyuncak kedi!",
    en: "Hourra ! Un chat en peluche !",
    a11y: "Une peluche toute douce — une petite chatte blanche aux yeux en perles, l'un bleu et l'autre vert.",
    image: p("oyuncak-kedi"),
    steps: ["Le soir, Gülsüm Teyze coud des jouets.", "Elle offre une petite chatte blanche à Murzik.", "Ses yeux en perles sont bleu et vert.", "« Küçük bir Boncuk! » — « Une petite Boncuk ! »"],
    bridge: "Le matin, le facteur apporte une lettre. D'Istanbul !",
  },
};

const van4: Lesson = {
  id: "tr-a1-van-4",
  level: "A1",
  cityId: "tr-van",
  number: 4,
  title: "Une lettre d'Istanbul",
  minutes: 7,
  goals: ["Comprendre une courte lettre", "Apprendre à commencer et à finir une lettre", "Comprendre « il a dit… » : dedi"],
  vocabNote: "Sevgili — « cher, chère ». Sevgiler — « bises, affectueusement » (à la fin d'une lettre). Dedi — « il a dit, elle a dit ».",
  vocab: [
    v("trva4-1", "Sevgili Murzik,", "Cher Murzik,", "Une enveloppe avec un timbre turc ; dedans, une lettre sur papier bleu.", "Écouter Sevgili Murzik", p("l4-1")),
    v("trva4-2", "Umarım iyisindir.", "J'espère que tu vas bien.", "Le début de la lettre, d'une écriture soignée.", "Écouter Umarım iyisindir", p("l4-2")),
    v("trva4-3", "Kafeye yaşlı bir kedi geldi.", "Un vieux chat est venu au café.", "Un dessin dans la marge de la lettre : un chat à la porte d'un café.", "Écouter Kafeye yaşlı bir kedi geldi", p("l4-3")),
    v("trva4-4", "Başında bir şapka vardı.", "Il avait un chapeau sur la tête.", "Un dessin dans la marge : un chapeau.", "Écouter Başında bir şapka vardı", p("l4-4")),
    v("trva4-5", "«Asya'yı tanıyorum» dedi.", "« Je connais Asya », a-t-il dit.", "Murzik lit la lettre, les yeux écarquillés.", "Écouter Asya'yı tanıyorum dedi", p("l4-5")),
    v("trva4-6", "Seni sordu.", "Il a demandé de tes nouvelles.", "Murzik regarde Tom par-dessus la lettre.", "Écouter Seni sordu", p("l4-6")),
    v("trva4-7", "Sevgiler, Ayşe Teyze", "Affectueusement, Ayşe Teyze", "La signature en bas de la lettre et le dessin d'un verre de thé.", "Écouter Sevgiler, Ayşe Teyze", p("l4-7")),
  ],
  dialogue: {
    title: "L'enveloppe bleue",
    note: "Tanımak veut dire « connaître (quelqu'un) ». Her yerde — « partout ». Gördüm — « j'ai vu ».",
    lines: [
      line("murzik", "Tom! Ayşe Teyze'den mektup!", "Tom ! Une lettre d'Ayşe Teyze !"),
      line("tom", "Oku, oku! Ne yazıyor?", "Lis-la, lis-la ! Qu'est-ce qu'elle dit ?"),
      line("ayse", "Sevgili Murzik, nasılsın? Umarım iyisindir. Dün kafeye yaşlı, beyaz bir kedi geldi. Başında bir şapka vardı.", "Cher Murzik, comment vas-tu ? J'espère que tu vas bien. Hier, un vieux chat blanc est venu au café. Il avait un chapeau sur la tête."),
      line("ayse", "«Asya'yı tanıyorum» dedi. Seni sordu. Sevgiler, Ayşe Teyze.", "« Je connais Asya », a-t-il dit. Il a demandé de tes nouvelles. Affectueusement, Ayşe Teyze."),
      line("murzik", "Şapkalı kedi! Onu her yerde gördüm, Tom!", "Le chat au chapeau ! Je l'ai vu partout, Tom !"),
      line("tom", "Pamukkale'de, Bodrum'da, Konya'da… Evet!", "À Pamukkale, à Bodrum, à Konya… Oui !"),
    ],
    gist: choice("trva4-d1", "Qu'a dit le chat au chapeau à Ayşe Teyze ?", [
      ["Qu'il connaît Asya.", true],
      ["Qu'il habite à Van.", false],
      ["Qu'il cherche Tom.", false],
    ]),
  },
  grammar: [
    {
      title: "Il y avait : vardı, yoktu",
      paragraphs: [
        "Var et yok au passé : vardı — « il y avait, avait », yoktu — « il n'y avait pas ». Başında bir şapka vardı. — Il avait un chapeau sur la tête (mot à mot « sur sa tête, il y avait un chapeau »). Kafede kimse yoktu. — Il n'y avait personne au café.",
        "« Il a dit », c'est dedi, après les mots entre guillemets : «Merhaba» dedi. — « Bonjour », a-t-il dit.",
      ],
      examples: [
        { ru: "Dün parkta çok kedi vardı.", en: "Hier, il y avait beaucoup de chats dans le parc." },
        { ru: "Mektupta adres yoktu.", en: "Il n'y avait pas d'adresse sur la lettre." },
      ],
    },
  ],
  tasks: [
    listen("trva4-t1", "Écoute. Qu'est-ce que le facteur avait sur la tête ?", "Başında siyah bir şapka vardı.", [
      ["Un chapeau noir.", true],
      ["Un chapeau blanc.", false],
      ["Rien.", false],
    ]),
    choice("trva4-t2", "Comment dit-on « Il n'y avait pas d'adresse » ?", [
      ["Adres yoktu.", true],
      ["Adres vardı.", false],
      ["Adres yokdu.", false],
    ], { skill: "grammar" }),
    match("trva4-t3", "Associe les paires.", [
      ["Sevgili…", "Cher…"],
      ["Sevgiler", "Affectueusement (fin d'une lettre)"],
      ["dedi", "il a dit"],
      ["şapka", "chapeau"],
    ], { skill: "words" }),
    missing("trva4-t4", "Quelle lettre manque ? (« cher »)", "Sev", "ili", "g", ["g", "ğ", "k"]),
    speak("trva4-t5", "Mektupta ne yazıyor?", "Kafeye şapkalı bir kedi geldi.", "Un chat au chapeau est venu au café.", { help: "Dis à voix haute la nouvelle principale de la lettre." }),
    choice("trva4-t6", "Comment dit-on « une ville calme » ?", [
      ["sessiz bir şehir", true],
      ["şehir sessiz bir", false],
      ["bir sessiz şehirler", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "mektup-kagidi",
    itemName: "Papier à lettres",
    itemNameRu: "Mektup kâğıdı",
    ru: "Yaşasın! Mektup kâğıdı!",
    en: "Hourra ! Du papier à lettres !",
    a11y: "Une pile de papier à lettres bleu avec une fine bordure de petites fleurs, et des enveloppes à côté.",
    image: p("mektup-kagidi"),
    steps: ["Murzik veut répondre tout de suite à Ayşe Teyze.", "Gülsüm Teyze apporte du papier à lettres bleu.", "« Cevap yaz, canım! » — « Écris une réponse, mon chéri ! »", "Le papier va sur la petite table près de la fenêtre."],
    bridge: "Mais avec quoi écrire ? Murzik cherche un stylo…",
  },
};

const van5: Lesson = {
  id: "tr-a1-van-5",
  level: "A1",
  cityId: "tr-van",
  number: 5,
  title: "La réponse",
  minutes: 7,
  goals: ["Écrire une courte lettre", "Dire « je suis à Van », « tu me manques »", "Finir une lettre : « à bientôt »"],
  vocabNote: "Özledim — « tu me manques » (mot à mot « je t'ai regretté »). Sizi özledim — « vous me manquez » (poli). Görüşmek üzere — « à bientôt ». Ellerinizden öperim — « je vous baise les mains » : une façon chaleureuse et respectueuse de finir une lettre à une personne plus âgée.",
  vocab: [
    v("trva5-1", "Sevgili Ayşe Teyze,", "Chère Ayşe Teyze,", "Murzik commence la lettre, le bout de la langue qui dépasse.", "Écouter Sevgili Ayşe Teyze", p("l5-1")),
    v("trva5-2", "Ben iyiyim.", "Je vais bien.", "Murzik dessine un sourire dans la marge.", "Écouter Ben iyiyim", p("l5-2")),
    v("trva5-3", "Şimdi Van'dayım.", "Je suis à Van maintenant.", "Murzik dessine un lac et une montagne.", "Écouter Şimdi Van'dayım", p("l5-3")),
    v("trva5-4", "Burası çok güzel.", "C'est très beau ici.", "La vue de la fenêtre sur le lac bleu.", "Écouter Burası çok güzel", p("l5-4")),
    v("trva5-5", "Sizi çok özledim.", "Vous me manquez beaucoup.", "Murzik pose une patte sur son cœur.", "Écouter Sizi çok özledim", p("l5-5")),
    v("trva5-6", "Mektubunuz için teşekkür ederim.", "Merci pour votre lettre.", "Murzik plie soigneusement la lettre d'Ayşe Teyze.", "Écouter Mektubunuz için teşekkür ederim", p("l5-6")),
    v("trva5-7", "Ellerinizden öperim.", "Je vous embrasse les mains.", "Murzik écrit la dernière ligne et signe d'une empreinte de patte.", "Écouter Ellerinizden öperim", p("l5-7")),
  ],
  dialogue: {
    title: "Une lettre pour Istanbul",
    note: "Murzik lit sa lettre à voix haute, et Tom l'aide. Gelirse — « s'il vient ». Diye sorun — « demandez-lui ceci ». Kimsin — « qui es-tu ».",
    lines: [
      line("murzik", "Sevgili Ayşe Teyze, nasılsınız? Ben iyiyim.", "Chère Ayşe Teyze, comment allez-vous ? Je vais bien."),
      line("murzik", "Şimdi Van'dayım. Burası çok güzel. Bir Van kedisi var, yüzüyor!", "Je suis à Van maintenant. C'est très beau ici. Il y a une chatte de Van, et elle nage !"),
      line("tom", "Şapkalı kediyi de yaz.", "Écris aussi pour le chat au chapeau."),
      line("murzik", "Şapkalı kedi tekrar gelirse, ona «Sen kimsin?» diye sorun, lütfen.", "Si le chat au chapeau revient, demandez-lui, s'il vous plaît : « Qui es-tu ? »"),
      line("murzik", "Sizi çok özledim. Görüşmek üzere! Ellerinizden öperim. Murzik.", "Vous me manquez beaucoup. À bientôt ! Avec affection et respect, Murzik."),
      line("tom", "Harika bir mektup!", "Quelle belle lettre !"),
    ],
    gist: choice("trva5-d1", "Que demande Murzik à Ayşe Teyze ?", [
      ["De demander au chat au chapeau qui il est.", true],
      ["De lui envoyer du thé.", false],
      ["De venir à Van.", false],
    ]),
  },
  grammar: [
    {
      title: "Je suis ici : -dayım, -deyim",
      paragraphs: [
        "« Je suis à… », c'est la terminaison « dans, à » + la terminaison « je suis » : Van'dayım (je suis à Van), evdeyim (je suis à la maison), oteldeyim (je suis à l'hôtel), İstanbul'dayım (je suis à Istanbul).",
        "Après ç, f, h, k, p, s, ş, t, le d devient t : -tayım / -teyim : Paris'teyim (je suis à Paris), parktayım (je suis au parc).",
      ],
      examples: [
        { ru: "Şimdi Trabzon'dayım.", en: "Je suis à Trabzon maintenant." },
        { ru: "Tom şimdi parkta.", en: "Tom est au parc maintenant." },
      ],
    },
  ],
  tasks: [
    choice("trva5-t1", "Comment dit-on « Je suis à Paris » ?", [
      ["Paris'teyim.", true],
      ["Paris'deyim.", false],
      ["Paris'e im.", false],
    ], { skill: "grammar" }),
    listen("trva5-t2", "Écoute. Où est la personne qui écrit, maintenant ?", "Şimdi oteldeyim. Burası çok sessiz.", [
      ["À l'hôtel, et c'est calme.", true],
      ["À la maison, et c'est bruyant.", false],
      ["Au parc, et il y a du monde.", false],
    ]),
    match("trva5-t3", "Associe les paires.", [
      ["özledim", "tu me manques"],
      ["Görüşmek üzere!", "À bientôt !"],
      ["burası", "ici, cet endroit"],
      ["mektup", "lettre"],
    ], { skill: "words" }),
    spell("trva5-t4", "Épelle le mot « lettre ».", "mektup"),
    speak("trva5-t5", "Neredesin? Nasılsın?", "Şimdi evdeyim. Ben iyiyim.", "Je suis à la maison maintenant. Je vais bien.", { help: "Dis à voix haute où tu es et comment tu vas." }),
    listen("trva5-t6", "Souviens-toi de la leçon précédente. Qu'a dit le chat ?", "«Asya'yı tanıyorum» dedi.", [
      ["« Je connais Asya. »", true],
      ["« Je cherche Tom. »", false],
      ["« J'habite à Paris. »", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "dolma-kalem",
    itemName: "Stylo plume",
    itemNameRu: "Dolma kalem",
    ru: "Yaşasın! Bir dolma kalem!",
    en: "Hourra ! Un stylo plume !",
    a11y: "Un vieux stylo plume bleu foncé à plume dorée est posé sur la lettre bleue.",
    image: p("dolma-kalem"),
    steps: ["Gülsüm Teyze sort un vieux stylo plume d'un tiroir.", "« Bu babamındı. » — « Il était à mon père. »", "Murzik recopie sa lettre au propre avec.", "Les lettres sont nettes et jolies."],
    bridge: "La lettre est prête ! Mais la poste est-elle ouverte en ce moment ?",
  },
};

const van6: Lesson = {
  id: "tr-a1-van-6",
  level: "A1",
  cityId: "tr-van",
  number: 6,
  title: "Ouvert ou fermé ?",
  minutes: 7,
  goals: ["Demander si un endroit est ouvert", "Dire « jusqu'à cinq heures » : saat beşe kadar", "Dire quels jours un endroit est fermé"],
  vocabNote: "-e kadar veut dire « jusqu'à » : akşama kadar — jusqu'au soir, yarına kadar — jusqu'à demain, saat beşe kadar — jusqu'à cinq heures.",
  vocab: [
    v("trva6-1", "Postane açık mı?", "La poste est ouverte ?", "Murzik se dépêche dans la rue avec sa lettre.", "Écouter Postane açık mı", p("l6-1")),
    v("trva6-2", "Saat beşe kadar açık.", "Elle est ouverte jusqu'à cinq heures.", "Un panneau avec les horaires d'ouverture sur la porte de la poste.", "Écouter Saat beşe kadar açık", p("l6-2")),
    v("trva6-3", "kapalı", "fermé", "Un panneau KAPALI sur la porte d'un magasin.", "Écouter kapalı", p("l6-3")),
    v("trva6-4", "Pazartesi kapalı.", "C'est fermé le lundi.", "Un calendrier avec le lundi barré.", "Écouter Pazartesi kapalı", p("l6-4")),
    v("trva6-5", "Saat kaçta açılıyor?", "Ça ouvre à quelle heure ?", "Murzik est devant la porte fermée du musée.", "Écouter Saat kaçta açılıyor", p("l6-5")),
    v("trva6-6", "akşama kadar", "jusqu'au soir", "Le soleil descend vers le lac.", "Écouter akşama kadar", p("l6-6")),
    v("trva6-7", "Yetiştik!", "On est arrivés à temps !", "Murzik et Tom se précipitent dans la poste cinq minutes avant la fermeture.", "Écouter Yetiştik", p("l6-7")),
  ],
  dialogue: {
    title: "Une course jusqu'à la poste",
    note: "Koş — « cours ». Kapanıyor — « ça ferme ». Hâlâ — « encore, toujours ».",
    lines: [
      line("murzik", "Gülsüm Teyze, postane açık mı?", "Gülsüm Teyze, la poste est ouverte ?"),
      line("gulsum", "Saat beşe kadar açık. Şimdi saat dört buçuk. Koş!", "Elle est ouverte jusqu'à cinq heures. Il est quatre heures et demie. Cours !"),
      line("tom", "Müze de açık mı?", "Et le musée, il est ouvert aussi ?"),
      line("gulsum", "Hayır, müze bugün kapalı. Pazartesi kapalı.", "Non, le musée est fermé aujourd'hui. Il est fermé le lundi."),
      line("murzik", "Yetiştik! Postane hâlâ açık!", "On est arrivés à temps ! La poste est encore ouverte !"),
      line("postman", "Evet, ama beş dakika sonra kapanıyor!", "Oui, mais elle ferme dans cinq minutes !"),
    ],
    gist: choice("trva6-d1", "Pourquoi le musée est-il fermé ?", [
      ["Parce que c'est lundi.", true],
      ["Parce que c'est le soir.", false],
      ["Parce qu'il est en travaux.", false],
    ]),
  },
  grammar: [
    {
      title: "Jusqu'à : -e kadar",
      paragraphs: [
        "« Jusqu'à », pour le temps comme pour la distance, c'est un mot avec la terminaison -e / -a + kadar : saat beşe kadar (jusqu'à cinq heures), akşama kadar (jusqu'au soir), göle kadar (jusqu'au lac), Ankara'ya kadar (jusqu'à Ankara).",
        "« De … à … », c'est -den … -e kadar : dokuzdan beşe kadar — de neuf heures à cinq heures.",
      ],
      examples: [
        { ru: "Müze dokuzdan beşe kadar açık.", en: "Le musée est ouvert de neuf heures à cinq heures." },
        { ru: "Göle kadar yürüyelim.", en: "Marchons jusqu'au lac." },
      ],
    },
  ],
  tasks: [
    choice("trva6-t1", "Comment dit-on « jusqu'au soir » ?", [
      ["akşama kadar", true],
      ["akşamda kadar", false],
      ["akşamdan kadar", false],
    ], { skill: "grammar" }),
    listen("trva6-t2", "Écoute. Quand le magasin est-il ouvert ?", "Dükkân dokuzdan yediye kadar açık.", [
      ["De neuf heures à sept heures.", true],
      ["De sept heures à neuf heures.", false],
      ["Jusqu'à neuf heures.", false],
    ]),
    match("trva6-t3", "Associe les paires.", [
      ["açık", "ouvert"],
      ["kapalı", "fermé"],
      ["Pazartesi", "lundi"],
      ["Yetiştik!", "On est arrivés à temps !"],
    ], { skill: "words" }),
    missing("trva6-t4", "Quelle lettre manque ? (« fermé »)", "kap", "lı", "a", ["a", "ı", "e"]),
    speak("trva6-t5", "Okul saat kaça kadar açık?", "Okul saat üçe kadar açık.", "L'école est ouverte jusqu'à trois heures.", { help: "Dis à voix haute jusqu'à quelle heure un endroit est ouvert." }),
    choice("trva6-t6", "Comment commencer une lettre à un ami ?", [
      ["Sevgili Selin,", true],
      ["Sevgiler Selin,", false],
      ["Görüşmek üzere Selin,", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kar-kuresi",
    itemName: "Boule à neige",
    itemNameRu: "Kar küresi",
    ru: "Yaşasın! Bir kar küresi!",
    en: "Hourra ! Une boule à neige !",
    a11y: "Une boule à neige en verre : dedans, un château sur un rocher et un lac bleu, avec de la neige qui tourbillonne.",
    image: p("kar-kuresi"),
    steps: ["À côté de la poste, il y a une boutique de souvenirs.", "Elle est ouverte jusqu'à six heures !", "Tom achète à Murzik une boule à neige avec le château et le lac.", "Murzik la secoue — et la neige tourbillonne au-dessus du château."],
    bridge: "Demain, Murzik fera lui-même visiter la ville à Tom. Maintenant, il est guide !",
  },
};

const van7: Lesson = {
  id: "tr-a1-van-7",
  level: "A1",
  cityId: "tr-van",
  number: 7,
  title: "Murzik guide touristique",
  minutes: 8,
  goals: ["Parler d'une ville", "Montrer où sont les choses", "Réviser tous les mots de Van"],
  vocabNote: "Rehber — « guide ». Burası — « cet endroit, ici ». Şurası — « cet endroit-là ». Ünlü — « célèbre ».",
  vocab: [
    v("trva7-1", "Ben bugün rehberim!", "Aujourd'hui, c'est moi le guide !", "Murzik avec une casquette et un drapeau à empreinte de patte, Tom derrière lui.", "Écouter Ben bugün rehberim", p("l7-1")),
    v("trva7-2", "Burası Van Kalesi.", "Voici le château de Van.", "Murzik montre le château de la patte.", "Écouter Burası Van Kalesi", p("l7-2")),
    v("trva7-3", "Çok eski ve çok ünlü.", "Il est très vieux et très célèbre.", "Les pierres antiques du mur du château.", "Écouter Çok eski ve çok ünlü", p("l7-3")),
    v("trva7-4", "Şurası bizim kahvaltı evimiz.", "Et là-bas, c'est notre maison du petit-déjeuner.", "Au loin, au bord du lac : la petite maison de Gülsüm Teyze.", "Écouter Şurası bizim kahvaltı evimiz", p("l7-4")),
    v("trva7-5", "Soru var mı?", "Des questions ?", "Murzik se tourne vers Tom, une patte levée.", "Écouter Soru var mı", p("l7-5")),
    v("trva7-6", "otlu peynir", "fromage aux herbes", "Un morceau de fromage blanc avec des herbes vertes dedans.", "Écouter otlu peynir", p("l7-6")),
    v("trva7-7", "Harika bir rehbersin!", "Tu es un guide génial !", "Tom applaudit et Murzik s'incline.", "Écouter Harika bir rehbersin", p("l7-7")),
  ],
  dialogue: {
    title: "La visite",
    note: "Soru var — « j'ai une question » (mot à mot « il y a une question »). Hadi veut dire « allez, on y va ».",
    lines: [
      line("murzik", "Hoş geldiniz! Ben bugün rehberim!", "Bienvenue ! Aujourd'hui, c'est moi le guide !"),
      line("murzik", "Burası Van Kalesi. Çok eski ve çok ünlü. Gölün yanında.", "Voici le château de Van. Il est très vieux et très célèbre. Il est à côté du lac."),
      line("tom", "Soru var! Müze açık mı?", "Question ! Le musée est ouvert ?"),
      line("murzik", "Evet, bugün akşama kadar açık.", "Oui, aujourd'hui, il est ouvert jusqu'au soir."),
      line("murzik", "Şurası bizim kahvaltı evimiz. Orada otlu peynir var!", "Et là-bas, c'est notre maison du petit-déjeuner. Il y a du fromage aux herbes !"),
      line("tom", "Harika bir rehbersin! Hadi, kahvaltıya!", "Tu es un guide génial ! Allez, on va prendre le petit-déjeuner !"),
    ],
    gist: choice("trva7-d1", "Où est le château ?", [
      ["À côté du lac.", true],
      ["En face de la poste.", false],
      ["Derrière la maison du petit-déjeuner.", false],
    ]),
  },
  grammar: [
    {
      title: "Burası, şurası, orası",
      paragraphs: [
        "Burası — « cet endroit (ici) », şurası — « cet endroit-là (pas loin, je le montre) », orası — « cet endroit (là-bas) ».",
        "C'est pratique pour faire visiter une ville : Burası müze. — Ici, c'est le musée. Şurası postane. — Là, c'est la poste.",
      ],
      examples: [
        { ru: "Burası çok sessiz.", en: "C'est très calme ici." },
        { ru: "Orası çok kalabalık.", en: "Là-bas, il y a beaucoup de monde." },
      ],
    },
  ],
  tasks: [
    listen("trva7-t1", "Examen audio. Que dit le guide ?", "Burası eski bir kale. Gölün yanında. Müze saat beşe kadar açık.", [
      ["Voici un vieux château au bord du lac ; le musée est ouvert jusqu'à cinq heures.", true],
      ["Voici un nouveau musée près de la poste, et il est fermé.", false],
      ["Voici une île, et le bateau part toutes les heures.", false],
    ]),
    choice("trva7-t2", "Comment dit-on « C'est très calme ici » ?", [
      ["Burası çok sessiz.", true],
      ["Orası çok kalabalık.", false],
      ["Burada sessiz yok.", false],
    ], { skill: "grammar" }),
    match("trva7-t3", "Associe les paires.", [
      ["rehber", "guide"],
      ["ünlü", "célèbre"],
      ["burası", "cet endroit, ici"],
      ["otlu peynir", "fromage aux herbes"],
    ], { skill: "words" }),
    spell("trva7-t4", "Épelle le mot « guide ».", "rehber"),
    speak("trva7-t5", "Şehrinde ne var? Anlat!", "Burası benim şehrim. Burada eski bir park var.", "Voici ma ville. Il y a un vieux parc ici.", { help: "Fais une petite visite de ta ville, à voix haute." }),
    script("trva7-t6", "Souviens-toi de tout Van. Complète les conversations.", [
      { speaker: "Tom", text: "Burada müze var mı?" },
      { speaker: "You", answer: "Evet, var. Kalenin yanında.", options: ["Evet, var. Kalenin yanında.", "Evet, var. Kale yanında.", "Hayır, var."] },
      { speaker: "Tom", text: "Müze açık mı?" },
      { speaker: "You", answer: "Evet, saat beşe kadar açık.", options: ["Evet, saat beşe kadar açık.", "Evet, saat beşte kadar açık.", "Hayır, açık."] },
      { speaker: "Gülsüm Teyze", text: "Van nasıl bir şehir?" },
      { speaker: "You", answer: "Sessiz ve çok güzel bir şehir.", options: ["Sessiz ve çok güzel bir şehir.", "Bir şehir sessiz güzel.", "Görüşmek üzere!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kahvalti-tabagi",
    itemName: "Assiette du petit-déjeuner",
    itemNameRu: "Kahvaltı tabağı",
    ru: "Yaşasın! Bir kahvaltı tabağı!",
    en: "Hourra ! Une assiette du petit-déjeuner !",
    a11y: "Une grande assiette peinte avec de petits creux ronds pour le fromage, le miel, les olives et la confiture.",
    image: p("kahvalti-tabagi"),
    steps: ["Après la visite — le célèbre petit-déjeuner de Van.", "Fromage aux herbes, miel, crème épaisse, olives, pain chaud…", "Gülsüm Teyze offre une assiette peinte à Murzik.", "« Her sabah bizi hatırla! » — « Pense à nous chaque matin ! »"],
    bridge: "Il est temps de partir. Le prochain arrêt est Gaziantep, la ville du cuivre et des pistaches.",
  },
};

const story: CityStory = {
  home: {
    name: "Une chambre au bord du lac",
    nameRu: "Göl kenarında bir oda",
    image: p("home"),
    a11y: "Une chambre claire et vide dans une maison au bord du lac. Par la fenêtre : le lac de Van tout bleu et une montagne enneigée. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "kahvalti-tabagi",
  welcomeRu: "Merhaba, Van!",
  welcomeEn: "Bonjour, Van !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom au bord de l'immense lac de Van, tout bleu. Une montagne enneigée au loin. Il fait beau.",
  departureImage: p("departure"),
  departureA11y: "Gülsüm Teyze dit au revoir devant la maison du petit-déjeuner ; Boncuk, la chatte blanche toute mouillée, est assise à côté d'elle.",
  finale: [
    {
      image: p("lettre"),
      a11y: "Le soir. Murzik est assis sur le pouf près de la fenêtre et regarde le lac sombre. Au-dessus de lui, comme de petits nuages, des souvenirs : les terrasses blanches, une rue la nuit, la cour à l'oranger, la coupole turquoise sous la neige. Dans chacun, il y a un petit chat blanc au chapeau.",
      lines: [
        { en: "Le soir, Murzik regarde longtemps le lac en se souvenant." },
        { en: "Pamukkale. Bodrum. Antalya. Konya. La Cappadoce. Et partout — lui, le chat blanc au chapeau." },
        { ru: "Asya'yı tanıyor… Peki, o kim?", en: "Il connaît Asya… Mais qui est-il ?" },
      ],
    },
    {
      image: p("kahvalti-tabagi"),
      a11y: "Murzik fait le tour de sa chambre au bord du lac, meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de sa chambre au bord du lac. Tom la prend en photo pour le magazine." },
        { en: "Murzik emporte l'assiette peinte du petit-déjeuner." },
        { en: "La lettre d'Ayşe Teyze va dans la poche de la valise, à côté des cartes postales." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, et Tom fête ça avec lui.",
      lines: [
        { ru: "Van tamamlandı!", en: "Van, c'est fait !" },
        { en: "7 / 7 leçons" },
        { en: "A1 — douzième partie terminée." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Gülsüm Teyze dit au revoir de la main.",
      lines: [
        { ru: "Hoşça kalın, Gülsüm Teyze!", en: "Au revoir, Gülsüm Teyze !" },
        { ru: "Sıradaki durak: Gaziantep!", en: "Prochain arrêt : Gaziantep !" },
      ],
    },
    {
      image: p("road"),
      a11y: "Le bus part vers le sud-ouest sur une route de montagne ; en bas, le lac scintille.",
      lines: [{ ru: "Van → Gaziantep", en: "Van → Gaziantep" }],
    },
    {
      image: pic("tr/gaziantep/arrival"),
      a11y: "Murzik et Tom dans le bazar du cuivre de Gaziantep : des cruches et des plateaux en cuivre brillants, et un artisan qui tape avec un petit marteau.",
      lines: [
        { ru: "Merhaba, Gaziantep!", en: "Bonjour, Gaziantep !" },
        { ru: "Ne güzel kokuyor!", en: "Quelle bonne odeur !" },
      ],
    },
  ],
};

export const trVanFr = {
  id: "tr-van",
  name: "Van",
  nameTr: "Van",
  lessons: [van1, van2, van3, van4, van5, van6, van7],
  story,
};
