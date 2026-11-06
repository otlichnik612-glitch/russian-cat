import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { build, choice, line, listen, match, missing, script, speak, spell, tf, v } from "./make";

/* Bursa · “Food and shopping” · the tea house, the lokanta, the market, prices, paying, dinner, cooking at home. French version. */

const p = (name: string) => pic(`tr/bursa/${name}`);

const bursa1: Lesson = {
  id: "tr-a1-bursa-1",
  level: "A1",
  cityId: "tr-bursa",
  number: 1,
  title: "Au salon de thé",
  minutes: 7,
  goals: ["Commander un thé ou un café", "Dire « avec sucre » et « sans sucre »", "Demander l'addition"],
  vocabNote: "Le café turc se prépare avec le sucre dedans, alors le serveur demande à l'avance : şekerli mi, şekersiz mi?",
  vocab: [
    v("trbu1-1", "Ne istersiniz?", "Qu'est-ce que vous prenez ?", "Un serveur avec un plateau se penche poliment vers la table.", "Écouter Ne istersiniz", p("l1-1")),
    v("trbu1-2", "Bir çay, lütfen.", "Un thé, s'il vous plaît.", "Tom lève un doigt à côté d'un verre de thé en forme de tulipe.", "Écouter Bir çay, lütfen", p("l1-2")),
    v("trbu1-3", "Bir Türk kahvesi, lütfen.", "Un café turc, s'il vous plaît.", "Une toute petite tasse de café épais et mousseux, et un verre d'eau.", "Écouter Bir Türk kahvesi, lütfen", p("l1-3")),
    v("trbu1-4", "Şekerli mi, şekersiz mi?", "Avec ou sans sucre ?", "Le serveur tient un sucrier d'une main et fait un geste interrogateur de l'autre.", "Écouter Şekerli mi, şekersiz mi", p("l1-4")),
    v("trbu1-5", "Az şekerli.", "Avec un peu de sucre.", "Murzik montre de la patte un tout petit morceau de sucre.", "Écouter Az şekerli", p("l1-5")),
    v("trbu1-6", "Başka bir şey?", "Autre chose ?", "Le serveur attend avec un carnet, les sourcils levés.", "Écouter Başka bir şey", p("l1-6")),
    v("trbu1-7", "Hesap, lütfen.", "L'addition, s'il vous plaît.", "Tom lève la main comme s'il écrivait en l'air — il demande l'addition.", "Écouter Hesap, lütfen", p("l1-7")),
  ],
  dialogue: {
    title: "Le salon de thé près du Koza Han",
    note: "Altında veut dire « en dessous ». Les Turcs utilisent le mot resim aussi bien pour un tableau que pour un dessin.",
    lines: [
      line("waiter", "Hoş geldiniz! Ne istersiniz?", "Bienvenue ! Qu'est-ce que vous prenez ?"),
      line("tom", "Bir çay, lütfen.", "Un thé, s'il vous plaît."),
      line("murzik", "Bir Türk kahvesi, lütfen.", "Un café turc, s'il vous plaît."),
      line("waiter", "Şekerli mi, şekersiz mi?", "Avec ou sans sucre ?"),
      line("murzik", "Az şekerli.", "Avec un peu de sucre."),
      line("waiter", "Başka bir şey?", "Autre chose ?"),
      line("tom", "Hayır, teşekkürler. Murzik, bak! Duvarda bir resim var.", "Non, merci. Murzik, regarde ! Il y a un tableau au mur."),
      line("murzik", "Bir kedi resmi! Altında bir isim var: Asya!", "Un dessin de chat ! Et il y a un nom en dessous : Asya !"),
    ],
    gist: choice("trbu1-d1", "Que voit Murzik au mur ?", [
      ["Un dessin de chat signé « Asya ».", true],
      ["Un plan de Bursa.", false],
      ["Le menu.", false],
    ]),
  },
  grammar: [
    {
      title: "Avec et sans : -lı et -sız",
      paragraphs: [
        "« Avec quelque chose », c'est la terminaison -lı, -li, -lu ou -lü : şeker-li — avec sucre, süt-lü — avec du lait.",
        "« Sans quelque chose », c'est -sız, -siz, -suz ou -süz : şeker-siz — sans sucre, süt-süz — sans lait. Comme toujours, la voyelle s'accorde avec le mot.",
      ],
      examples: [
        { ru: "Şekersiz bir kahve, lütfen.", en: "Un café sans sucre, s'il vous plaît." },
        { ru: "Sütlü çay var mı?", en: "Vous avez du thé au lait ?" },
      ],
    },
  ],
  tasks: [
    listen("trbu1-t1", "Écoute. Quel café veut le client ?", "Bir Türk kahvesi, az şekerli.", [
      ["Turc, un peu sucré.", true],
      ["Un thé sans sucre.", false],
      ["Un café sans sucre.", false],
    ]),
    match("trbu1-t2", "Associe les paires.", [
      ["Hesap, lütfen.", "L'addition, s'il vous plaît."],
      ["Başka bir şey?", "Autre chose ?"],
      ["şekerli", "avec sucre"],
      ["şekersiz", "sans sucre"],
    ], { skill: "words" }),
    choice("trbu1-t3", "Comment dit-on « sans lait » ? (lait — süt)", [
      ["sütsüz", true],
      ["sütsız", false],
      ["sütlü", false],
    ], { skill: "grammar" }),
    missing("trbu1-t4", "Quelle lettre manque ? (« café »)", "kahv", "", "e", ["e", "a", "ı"]),
    speak("trbu1-t5", "Ne istersiniz?", "Bir çay, lütfen.", "Un thé, s'il vous plaît.", { help: "Commande à voix haute ce que tu veux." }),
    choice("trbu1-t6", "Comment demander « Où est l'arrêt ? »", [
      ["Durak nerede?", true],
      ["Durak ne kadar?", false],
      ["Durak var mı?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "fincan",
    itemName: "Petite tasse à café",
    itemNameRu: "Fincan",
    ru: "Yaşasın! Küçük bir fincan!",
    en: "Hourra ! Une petite tasse à café !",
    a11y: "Une petite tasse à café turc en porcelaine à motif rouge, sur sa soucoupe. À côté : un verre d'eau et un loukoum.",
    image: p("fincan"),
    steps: ["Le serveur apporte le café dans une jolie petite tasse.", "« Bu fincan sizin olsun! » — « Que cette tasse soit à vous ! »", "Murzik l'emballe avec soin.", "Le premier objet pour sa maison à Bursa !"],
    bridge: "Le serveur dit qu'une cliente a laissé ce dessin ici, il y a longtemps. La patronne de la lokanta d'en face en sait plus.",
  },
};

const bursa2: Lesson = {
  id: "tr-a1-bursa-2",
  level: "A1",
  cityId: "tr-bursa",
  number: 2,
  title: "À la lokanta",
  minutes: 7,
  goals: ["Demander le menu et un conseil", "Commander un plat et une boisson", "Dire « J'ai faim »"],
  vocabNote: "Une lokanta est un restaurant turc simple, à la cuisine familiale. L'İskender est le plat célèbre de Bursa : de la viande sur du pain, avec une sauce tomate et du yaourt.",
  vocab: [
    v("trbu2-1", "Menü var mı?", "Il y a un menu ?", "Tom montre la table vide d'un air interrogateur.", "Écouter Menü var mı", p("l2-1")),
    v("trbu2-2", "Ne tavsiye edersiniz?", "Qu'est-ce que vous me conseillez ?", "Murzik, le menu entre les pattes, regarde la patronne de la lokanta.", "Écouter Ne tavsiye edersiniz", p("l2-2")),
    v("trbu2-3", "Bir İskender, lütfen.", "Un İskender, s'il vous plaît.", "Une assiette d'İskender : de la viande sur du pain, avec une sauce tomate et du yaourt.", "Écouter Bir İskender, lütfen", p("l2-3")),
    v("trbu2-4", "Çok açım!", "J'ai très faim !", "Murzik se tient le ventre vide en rêvant d'une assiette bien pleine.", "Écouter Çok açım", p("l2-4")),
    v("trbu2-5", "Bir de ayran.", "Et un ayran aussi.", "Un grand verre d'ayran blanc et mousseux.", "Écouter Bir de ayran", p("l2-5")),
    v("trbu2-6", "Vejetaryen yemek var mı?", "Vous avez des plats végétariens ?", "Tom montre une image de légumes sur le menu.", "Écouter Vejetaryen yemek var mı", p("l2-6")),
    v("trbu2-7", "Bir dakika, lütfen.", "Une minute, s'il vous plaît.", "La patronne lève un doigt : « J'arrive ! »", "Écouter Bir dakika, lütfen", p("l2-7")),
  ],
  dialogue: {
    title: "Chez Zeynep Hanım",
    note: "Oturun veut dire « asseyez-vous » (poli). Bursa'nın en meşhur yemeği — « le plat le plus célèbre de Bursa ». L'ayran est une boisson salée au yaourt.",
    lines: [
      line("zeynep", "Hoş geldiniz! Buyurun, oturun.", "Bienvenue ! Entrez, asseyez-vous."),
      line("tom", "Teşekkürler. Menü var mı?", "Merci. Il y a un menu ?"),
      line("zeynep", "Tabii, buyurun.", "Bien sûr, voilà."),
      line("murzik", "Ne tavsiye edersiniz?", "Qu'est-ce que vous me conseillez ?"),
      line("zeynep", "İskender! Bursa'nın en meşhur yemeği.", "L'İskender ! Le plat le plus célèbre de Bursa."),
      line("murzik", "Çok açım! Bir İskender, lütfen. Bir de ayran.", "J'ai très faim ! Un İskender, s'il vous plaît. Et un ayran aussi."),
      line("tom", "Ben de İskender istiyorum!", "Moi aussi, je veux un İskender !"),
      line("zeynep", "Bir dakika!", "Une minute !"),
    ],
    gist: choice("trbu2-d1", "Que commande Murzik ?", [
      ["Un İskender et un ayran.", true],
      ["Un thé et un simit.", false],
      ["Juste de l'eau.", false],
    ]),
  },
  grammar: [
    {
      title: "J'ai faim : -ım, -im, -um, -üm",
      paragraphs: [
        "En français, on dit « j'ai faim » ; le turc dit « je suis affamé », et « je suis » n'est qu'une terminaison sur le mot : aç (affamé) → açım — j'ai faim. La terminaison est -ım, -im, -um ou -üm, selon l'harmonie vocalique.",
        "Après une voyelle, on ajoute un y : mutlu → mutlu-y-um — je suis heureux. Tu connais déjà un mot comme ça : iyi → iyiyim — je vais bien.",
      ],
      examples: [
        { ru: "Açım!", en: "J'ai faim !" },
        { ru: "Murzik çok mutlu. — Ben de mutluyum!", en: "Murzik est très heureux. — Moi aussi, je suis heureux !" },
      ],
    },
  ],
  tasks: [
    choice("trbu2-t1", "Comment dit-on « J'ai faim » ?", [
      ["Açım.", true],
      ["Aç.", false],
      ["Açsın.", false],
    ], { skill: "grammar" }),
    listen("trbu2-t2", "Écoute. Que conseille la patronne ?", "İskender tavsiye ederim.", [
      ["L'İskender.", true],
      ["L'ayran.", false],
      ["Un simit.", false],
    ]),
    match("trbu2-t3", "Associe les paires.", [
      ["menü", "menu"],
      ["ayran", "ayran (boisson au yaourt)"],
      ["yemek", "plat, nourriture"],
      ["vejetaryen", "végétarien"],
    ], { skill: "words" }),
    missing("trbu2-t4", "Quelle lettre manque ? (« Il y a un menu ? »)", "Men", " var mı?", "ü", ["ü", "u", "i"]),
    speak("trbu2-t5", "Ne istersiniz?", "Bir İskender, lütfen. Bir de ayran.", "Un İskender, s'il vous plaît. Et un ayran aussi.", { help: "Commande ton déjeuner à voix haute." }),
    choice("trbu2-t6", "Le serveur demande : Şekerli mi? Tu le veux sans sucre. Que dis-tu ?", [
      ["Şekersiz, lütfen.", true],
      ["Şekerli, lütfen.", false],
      ["Hesap, lütfen.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tabak",
    itemName: "Assiette peinte",
    itemNameRu: "Tabak",
    ru: "Yaşasın! Güzel bir tabak!",
    en: "Hourra ! Une belle assiette !",
    a11y: "Une grande assiette en céramique peinte de tulipes bleues est posée sur l'étagère de Murzik.",
    image: p("tabak"),
    steps: ["Zeynep Hanım offre à Murzik une assiette aux tulipes.", "« Bursa'dan hatıra! » — « Un souvenir de Bursa ! »", "Murzik la pose sur son étagère.", "C'est beau !"],
    bridge: "Zeynep Hanım dit : « Demain, c'est jour de marché. Allons-y ensemble — je vous montrerai les tomates les plus fraîches ! »",
  },
};

const bursa3: Lesson = {
  id: "tr-a1-bursa-3",
  level: "A1",
  cityId: "tr-bursa",
  number: 3,
  title: "Au marché",
  minutes: 7,
  goals: ["Nommer des aliments", "Acheter un kilo de quelque chose", "Former le pluriel : -lar / -ler"],
  vocabNote: "Pazar veut dire à la fois « marché » et « dimanche ». En Turquie, chaque quartier a son jour de marché.",
  vocab: [
    v("trbu3-1", "pazar", "marché", "Un marché animé sous des bâches : des montagnes de légumes et de fruits.", "Écouter pazar", p("l3-1")),
    v("trbu3-2", "domates", "tomate", "Une cagette de tomates rouges et brillantes.", "Écouter domates", p("l3-2")),
    v("trbu3-3", "elma", "pomme", "Un panier de pommes rouges et vertes.", "Écouter elma", p("l3-3")),
    v("trbu3-4", "ekmek", "pain", "Une miche ronde et dorée sur une planche en bois.", "Écouter ekmek", p("l3-4")),
    v("trbu3-5", "peynir", "fromage", "Des morceaux de fromage blanc turc dans un bol.", "Écouter peynir", p("l3-5")),
    v("trbu3-6", "Bir kilo elma, lütfen.", "Un kilo de pommes, s'il vous plaît.", "Murzik montre la balance avec des pommes dessus.", "Écouter Bir kilo elma, lütfen", p("l3-6")),
    v("trbu3-7", "Taze mi?", "Elles sont fraîches ?", "Zeynep Hanım renifle une tomate d'un air critique.", "Écouter Taze mi", p("l3-7")),
  ],
  dialogue: {
    title: "Jour de marché",
    note: "Bakalım veut dire « voyons voir ». Alalım veut dire « achetons ».",
    lines: [
      line("seller", "Buyurun! Domatesler çok taze!", "Venez voir ! Les tomates sont super fraîches !"),
      line("zeynep", "Taze mi? Bakalım…", "Fraîches, vraiment ? Voyons voir…"),
      line("seller", "Tabii taze! Bugün geldi.", "Bien sûr qu'elles sont fraîches ! Elles sont arrivées aujourd'hui."),
      line("murzik", "Bir kilo domates, lütfen. Bir de elma.", "Un kilo de tomates, s'il vous plaît. Et des pommes aussi."),
      line("seller", "Kaç kilo elma?", "Combien de kilos de pommes ?"),
      line("murzik", "İki kilo.", "Deux kilos."),
      line("zeynep", "Peynir de alalım. Ve ekmek!", "Prenons aussi du fromage. Et du pain !"),
    ],
    gist: choice("trbu3-d1", "Qu'achète Murzik ?", [
      ["Des tomates et des pommes.", true],
      ["Juste du pain.", false],
      ["Du poisson.", false],
    ]),
  },
  grammar: [
    {
      title: "Le pluriel : -lar et -ler",
      paragraphs: [
        "La terminaison du pluriel est -lar ou -ler — comme le -s français. Après a, ı, o, u, on met -lar ; après e, i, ö, ü, on met -ler : elma → elmalar, ekmek → ekmekler.",
        "Souviens-toi : après un nombre ou kilo, pas besoin de pluriel — iki kilo domates (mot à mot « deux kilo tomate »), beş elma.",
      ],
      examples: [
        { ru: "Domatesler çok taze.", en: "Les tomates sont très fraîches." },
        { ru: "İki kilo elma, lütfen.", en: "Deux kilos de pommes, s'il vous plaît." },
      ],
    },
  ],
  tasks: [
    choice("trbu3-t1", "Comment dit-on « des pommes » ?", [
      ["elmalar", true],
      ["elmaler", false],
      ["elmalır", false],
    ], { skill: "grammar" }),
    listen("trbu3-t2", "Écoute. Combien de kilos de pommes ?", "İki kilo elma, lütfen.", [
      ["Deux.", true],
      ["Un.", false],
      ["Trois.", false],
    ]),
    match("trbu3-t3", "Associe les paires.", [
      ["ekmek", "pain"],
      ["peynir", "fromage"],
      ["elma", "pomme"],
      ["domates", "tomate"],
    ], { skill: "words" }),
    spell("trbu3-t4", "Épelle le mot « fromage ».", "peynir"),
    speak("trbu3-t5", "Ne istiyorsunuz?", "Bir kilo domates, lütfen.", "Un kilo de tomates, s'il vous plaît.", { help: "Demande quelque chose au marché, à voix haute." }),
    listen("trbu3-t6", "Souviens-toi du salon de thé. Que demande le client ?", "Hesap, lütfen.", [
      ["L'addition.", true],
      ["Le menu.", false],
      ["Du thé.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sepet",
    itemName: "Panier",
    itemNameRu: "Sepet",
    ru: "Yaşasın! Büyük bir sepet!",
    en: "Hourra ! Un grand panier !",
    a11y: "Murzik porte un panier en osier plein de tomates, de pommes et de pain. Zeynep Hanım marche à côté de lui.",
    image: p("sepet"),
    steps: ["Le vendeur leur donne un panier en osier.", "Murzik y met les courses.", "Le panier est lourd, mais Murzik le porte fièrement lui-même.", "Maintenant, il vivra dans la cuisine !"],
    bridge: "Il y a tant de choses au marché ! Et la confiserie vend les célèbres marrons glacés de Bursa. Mais combien ça coûte ?",
  },
};

const bursa4: Lesson = {
  id: "tr-a1-bursa-4",
  level: "A1",
  cityId: "tr-bursa",
  number: 4,
  title: "Combien ça coûte ?",
  minutes: 7,
  goals: ["Demander le prix", "Comprendre les nombres jusqu'à 100", "Dire « cher », « pas cher » et demander une réduction"],
  vocabNote: "Les dizaines s'apprennent facilement par paires : yirmi (20), otuz (30), kırk (40), elli (50). 25, c'est yirmi beş — mot à mot « vingt cinq », comme en français.",
  vocab: [
    v("trbu4-1", "Ne kadar?", "Combien ça coûte ?", "Murzik tient une boîte de confiseries et regarde le vendeur d'un air interrogateur.", "Écouter Ne kadar", p("l4-1")),
    v("trbu4-2", "yirmi, otuz, kırk, elli", "vingt, trente, quarante, cinquante", "Quatre étiquettes de prix sur le comptoir : 20, 30, 40 et 50.", "Écouter yirmi, otuz, kırk, elli", p("l4-2")),
    v("trbu4-3", "altmış, yetmiş, seksen, doksan, yüz", "soixante, soixante-dix, quatre-vingts, quatre-vingt-dix, cent", "Cinq étiquettes de prix alignées : 60, 70, 80, 90 et 100.", "Écouter altmış, yetmiş, seksen, doksan, yüz", p("l4-3")),
    v("trbu4-4", "lira", "livre (monnaie turque)", "Quelques pièces et billets turcs dans une paume.", "Écouter lira", p("l4-4")),
    v("trbu4-5", "Çok pahalı!", "C'est très cher !", "Murzik fixe une énorme étiquette avec horreur, les oreilles dressées.", "Écouter Çok pahalı", p("l4-5")),
    v("trbu4-6", "Ucuz.", "Ce n'est pas cher.", "Murzik montre joyeusement une petite étiquette.", "Écouter Ucuz", p("l4-6")),
    v("trbu4-7", "İndirim var mı?", "Il y a une réduction ?", "Tom fait un sourire malin au vendeur et montre « un petit peu » avec ses doigts.", "Écouter İndirim var mı", p("l4-7")),
  ],
  dialogue: {
    title: "Les marrons glacés",
    note: "Kestane şekeri — les marrons glacés, la confiserie célèbre de Bursa. Peki veut dire « d'accord ».",
    lines: [
      line("murzik", "Bu kestane şekeri ne kadar?", "Combien coûtent ces marrons glacés ?"),
      line("seller", "Yüz lira.", "Cent livres."),
      line("murzik", "Yüz lira mı? Çok pahalı!", "Cent livres ? C'est très cher !"),
      line("seller", "Ama çok güzel! Tamam, doksan lira.", "Mais ils sont délicieux ! Bon, quatre-vingt-dix livres."),
      line("tom", "İndirim var mı? Seksen?", "Il y a une réduction ? Quatre-vingts ?"),
      line("seller", "Peki, seksen beş lira.", "D'accord, quatre-vingt-cinq livres."),
      line("murzik", "Tamam! Teşekkürler!", "Marché conclu ! Merci !"),
    ],
    gist: choice("trbu4-d1", "À quel prix achètent-ils finalement les marrons ?", [
      ["85 livres.", true],
      ["100 livres.", false],
      ["80 livres.", false],
    ]),
  },
  grammar: [
    {
      title: "Les nombres jusqu'à 100",
      paragraphs: [
        "Les grands nombres sont simples : les dizaines + les unités. yirmi beş — 25, kırk iki — 42, doksan dokuz — 99. Pas besoin de « et ». Et en turc, pas de « soixante-dix » ni de « quatre-vingts » : 70, c'est yetmiş, 80, c'est seksen — un seul mot !",
        "Pour demander un prix, dis Ne kadar? ou Kaç lira? Réponds avec un nombre et lira : Elli lira. Comme les « sept mouettes » d'Istanbul, lira reste au singulier après un nombre.",
      ],
      examples: [
        { ru: "Bu ne kadar? — Otuz beş lira.", en: "Combien ça coûte ? — Trente-cinq livres." },
        { ru: "Kaç lira? — Yetmiş.", en: "Combien de livres ? — Soixante-dix." },
      ],
    },
  ],
  tasks: [
    listen("trbu4-t1", "Écoute le prix.", "Kırk beş lira.", [
      ["45 livres", true],
      ["54 livres", false],
      ["40 livres", false],
    ]),
    match("trbu4-t2", "Associe les nombres.", [
      ["otuz", "30"],
      ["elli", "50"],
      ["seksen", "80"],
      ["yüz", "100"],
    ], { skill: "words" }),
    choice("trbu4-t3", "Comment dit-on « soixante-douze » ?", [
      ["yetmiş iki", true],
      ["iki yetmiş", false],
      ["yetmiş ve iki", false],
    ], { skill: "grammar" }),
    missing("trbu4-t4", "Quelle lettre manque ? (« soixante »)", "altm", "ş", "ı", ["ı", "i", "u"]),
    speak("trbu4-t5", "Bu ne kadar?", "Elli lira.", "Cinquante livres.", { help: "Dis un prix à voix haute." }),
    choice("trbu4-t6", "Comment dit-on « des tomates » ?", [
      ["domatesler", true],
      ["domateslar", false],
      ["domatesiler", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "kestane",
    itemName: "Les marrons glacés",
    itemNameRu: "Kestane şekeri",
    ru: "Yaşasın! Kestane şekeri!",
    en: "Hourra ! Des marrons glacés !",
    a11y: "Une jolie boîte de marrons glacés, la confiserie célèbre de Bursa. Murzik en goûte un et ferme les yeux de plaisir.",
    image: p("kestane"),
    steps: ["Le vendeur emballe la boîte dans du papier.", "Murzik goûte un marron.", "Il ferme les yeux de plaisir.", "La boîte trouve une place d'honneur sur l'étagère."],
    bridge: "Dans l'allée de la soie du Koza Han, Murzik voit un foulard exactement comme celui du dessin de grand-mère. Mais comment payer ?",
  },
};

const bursa5: Lesson = {
  id: "tr-a1-bursa-5",
  level: "A1",
  cityId: "tr-bursa",
  number: 5,
  title: "Carte ou espèces ?",
  minutes: 7,
  goals: ["Demander si on peut payer par carte", "Comprendre le caissier", "Demander un ticket de caisse et sa monnaie"],
  vocabNote: "Le Koza Han est le vieux marché de la soie de Bursa. Koza veut dire « cocon de ver à soie ».",
  vocab: [
    v("trbu5-1", "Kartla mı, nakit mi?", "Carte ou espèces ?", "Le caissier montre le terminal de paiement et le tiroir-caisse.", "Écouter Kartla mı, nakit mi", p("l5-1")),
    v("trbu5-2", "Kartla ödeyebilir miyim?", "Je peux payer par carte ?", "Murzik tend une carte bancaire d'un air interrogateur.", "Écouter Kartla ödeyebilir miyim", p("l5-2")),
    v("trbu5-3", "Nakit.", "En espèces.", "Tom pose des billets sur le comptoir.", "Écouter Nakit", p("l5-3")),
    v("trbu5-4", "fiş", "ticket de caisse", "Un long ticket de caisse en papier sort de la caisse en s'enroulant.", "Écouter fiş", p("l5-4")),
    v("trbu5-5", "para üstü", "monnaie", "Le caissier compte des pièces dans la patte de Murzik.", "Écouter para üstü", p("l5-5")),
    v("trbu5-6", "Bozuk param yok.", "Je n'ai pas de monnaie.", "Murzik retourne son porte-monnaie vide, et une mite s'en envole.", "Écouter Bozuk param yok", p("l5-6")),
    v("trbu5-7", "Kasa nerede?", "Où est la caisse ?", "Murzik, un foulard entre les pattes, regarde autour de lui dans un grand magasin.", "Écouter Kasa nerede", p("l5-7")),
  ],
  dialogue: {
    title: "L'allée de la soie",
    note: "Değil mi? se met à la fin d'une phrase, comme le français « n'est-ce pas ? », « hein ? ».",
    lines: [
      line("seller", "Bu ipek eşarp çok güzel, değil mi?", "Ce foulard en soie est magnifique, n'est-ce pas ?"),
      line("murzik", "Evet! Ne kadar?", "Oui ! Combien il coûte ?"),
      line("seller", "Seksen lira.", "Quatre-vingts livres."),
      line("murzik", "Kartla ödeyebilir miyim?", "Je peux payer par carte ?"),
      line("seller", "Tabii. Kasa orada.", "Bien sûr. La caisse est là-bas."),
      line("cashier", "Kartla mı, nakit mi?", "Carte ou espèces ?"),
      line("murzik", "Kartla. Fiş, lütfen.", "Par carte. Un ticket, s'il vous plaît."),
      line("cashier", "Buyurun, fişiniz.", "Voici votre ticket."),
    ],
    gist: choice("trbu5-d1", "Comment Murzik paie-t-il ?", [
      ["Par carte.", true],
      ["En espèces.", false],
      ["Il ne paie pas.", false],
    ]),
  },
  grammar: [
    {
      title: "Je peux… ? — -ebilir miyim?",
      paragraphs: [
        "« Je peux… ? / Puis-je… ? », c'est le verbe + -ebilir miyim? ou -abilir miyim? : öde-yebilir miyim? — je peux payer ?, al-abilir miyim? — je peux avoir / prendre ?",
        "Après a, ı, o, u, on met -abilir ; après e, i, ö, ü, on met -ebilir. Si le verbe finit par une voyelle, on ajoute un y : öde-y-ebilir.",
      ],
      examples: [
        { ru: "Kartla ödeyebilir miyim?", en: "Je peux payer par carte ?" },
        { ru: "Bir fiş alabilir miyim?", en: "Je peux avoir un ticket ?" },
      ],
    },
  ],
  tasks: [
    choice("trbu5-t1", "Comment demander « Je peux payer par carte ? »", [
      ["Kartla ödeyebilir miyim?", true],
      ["Kartla ödeyebilir misin?", false],
      ["Kartla öde mi?", false],
    ], { skill: "grammar" }),
    listen("trbu5-t2", "Écoute. Qu'est-ce que le client n'a pas ?", "Bozuk param yok.", [
      ["De la monnaie (des pièces).", true],
      ["Une carte.", false],
      ["Un ticket.", false],
    ]),
    match("trbu5-t3", "Associe les paires.", [
      ["fiş", "ticket de caisse"],
      ["kasa", "caisse"],
      ["nakit", "espèces"],
      ["para üstü", "monnaie"],
    ], { skill: "words" }),
    missing("trbu5-t4", "Quelle lettre manque ? (« ticket de caisse »)", "fi", "", "ş", ["ş", "s", "ç"]),
    speak("trbu5-t5", "Kartla mı, nakit mi?", "Nakit, lütfen.", "En espèces, s'il vous plaît.", { help: "Dis à voix haute comment tu vas payer." }),
    listen("trbu5-t6", "Souviens-toi des nombres. Quel est le prix ?", "Doksan lira.", [
      ["90 livres", true],
      ["19 livres", false],
      ["60 livres", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "esarp",
    itemName: "Foulard en soie",
    itemNameRu: "İpek eşarp",
    ru: "Yaşasın! Bir ipek eşarp!",
    en: "Hourra ! Un foulard en soie !",
    a11y: "Murzik essaie un léger foulard en soie à motif de tulipes ; Tom se reflète dans le miroir à côté de lui.",
    image: p("esarp"),
    steps: ["Murzik déplie le foulard en soie.", "Il est léger comme un nuage.", "Le motif, ce sont des tulipes, exactement comme sur le dessin de grand-mère.", "Murzik le noue autour de son cou, à côté de sa propre écharpe."],
    bridge: "Le soir, Zeynep Hanım les invite à dîner.",
  },
};

const bursa6: Lesson = {
  id: "tr-a1-bursa-6",
  level: "A1",
  cityId: "tr-bursa",
  number: 6,
  title: "Afiyet olsun! — Bon appétit !",
  minutes: 7,
  goals: ["Inviter à table et souhaiter bon appétit", "Complimenter le plat et remercier la cuisinière", "Refuser poliment de se resservir"],
  vocabNote: "Eline sağlık veut dire mot à mot « santé à ta main ». C'est comme ça qu'on remercie la personne qui a cuisiné. Elle répond : Afiyet olsun!",
  vocab: [
    v("trbu6-1", "Masaya buyurun!", "À table, s'il vous plaît !", "Zeynep Hanım pose un grand plat sur la table et invite tout le monde d'un geste.", "Écouter Masaya buyurun", p("l6-1")),
    v("trbu6-2", "Afiyet olsun!", "Bon appétit !", "Autour de la table dressée, tout le monde sourit et prend sa cuillère.", "Écouter Afiyet olsun", p("l6-2")),
    v("trbu6-3", "Çok lezzetli!", "C'est délicieux !", "Murzik ferme les yeux de plaisir, la cuillère pleine.", "Écouter Çok lezzetli", p("l6-3")),
    v("trbu6-4", "Eline sağlık!", "Merci, c'était délicieux ! (à la cuisinière)", "Murzik pose la patte sur sa poitrine avec gratitude et s'incline devant Zeynep Hanım.", "Écouter Eline sağlık", p("l6-4")),
    v("trbu6-5", "Biraz daha ister misin?", "Tu en veux encore un peu ?", "Zeynep Hanım tient une louche au-dessus de l'assiette de Murzik.", "Écouter Biraz daha ister misin", p("l6-5")),
    v("trbu6-6", "Doydum, teşekkürler.", "J'ai assez mangé, merci.", "Murzik se cale dans sa chaise en tapotant son ventre bien rond.", "Écouter Doydum, teşekkürler", p("l6-6")),
    v("trbu6-7", "tatlı", "dessert, quelque chose de sucré", "Un plat de petites douceurs au sirop.", "Écouter tatlı", p("l6-7")),
  ],
  dialogue: {
    title: "Dîner chez Zeynep Hanım",
    note: "Canım veut dire « mon chéri, ma chérie ». Kestane tatlısı est un dessert aux marrons. Ellerinize sağlık est la forme polie d'Eline sağlık.",
    lines: [
      line("zeynep", "Masaya buyurun! Afiyet olsun!", "À table ! Bon appétit !"),
      line("tom", "Teşekkürler! Mmm, çok lezzetli!", "Merci ! Mmm, c'est délicieux !"),
      line("murzik", "Evet! Ellerinize sağlık, Zeynep Hanım!", "Oui ! Merci, c'est délicieux, Zeynep Hanım !"),
      line("zeynep", "Afiyet olsun, canım. Biraz daha ister misin?", "Bon appétit, mon chéri. Tu en veux encore un peu ?"),
      line("murzik", "Hayır, doydum, teşekkürler. Ama tatlı var mı?", "Non, j'ai assez mangé, merci. Mais il y a un dessert ?"),
      line("zeynep", "Tabii! Kestane tatlısı!", "Bien sûr ! Un dessert aux marrons !"),
    ],
    gist: choice("trbu6-d1", "Que dit Murzik à la cuisinière après le repas ?", [
      ["Il la remercie pour le délicieux dîner.", true],
      ["Il demande l'addition.", false],
      ["Il dit que ce n'était pas bon.", false],
    ]),
  },
  grammar: [
    {
      title: "Les mots de la table",
      paragraphs: [
        "Avant un repas, et chaque fois qu'ils voient quelqu'un manger, les Turcs disent Afiyet olsun! — « bon appétit ! ». C'est comme le français, mais les Turcs le disent encore plus souvent — même à quelqu'un qui a déjà commencé.",
        "Après le repas, on remercie la cuisinière : Eline sağlık! Elle répond : Afiyet olsun! Un dîner turc ne se passe jamais sans ces mots.",
      ],
      examples: [
        { ru: "Eline sağlık! — Afiyet olsun!", en: "Merci, c'était délicieux ! — Bon appétit !" },
        { ru: "Biraz daha ister misin? — Doydum, teşekkürler.", en: "Tu en veux encore ? — J'ai assez mangé, merci." },
      ],
    },
  ],
  tasks: [
    choice("trbu6-t1", "Que dit-on à quelqu'un qui a préparé un délicieux repas ?", [
      ["Eline sağlık!", true],
      ["Afiyet olsun!", false],
      ["Hesap, lütfen!", false],
    ], { skill: "words" }),
    listen("trbu6-t2", "Écoute. Que te propose-t-on ?", "Biraz daha ister misin?", [
      ["Encore un peu à manger.", true],
      ["Du thé.", false],
      ["L'addition.", false],
    ]),
    tf("trbu6-t3", "On dit Afiyet olsun! avant un repas ou quand quelqu'un mange.", true, "grammar"),
    missing("trbu6-t4", "Quelle lettre manque ? (« délicieux »)", "lezzetl", "", "i", ["i", "ı", "e"]),
    speak("trbu6-t5", "Biraz daha ister misin?", "Hayır, doydum, teşekkürler.", "Non, j'ai assez mangé, merci.", { help: "Refuse poliment, à voix haute." }),
    choice("trbu6-t6", "Tu veux payer en espèces. Que dis-tu ?", [
      ["Nakit, lütfen.", true],
      ["Kartla, lütfen.", false],
      ["Fiş, lütfen.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "tencere",
    itemName: "Marmite en cuivre",
    itemNameRu: "Tencere",
    ru: "Yaşasın! Bakır bir tencere!",
    en: "Hourra ! Une marmite en cuivre !",
    a11y: "Une marmite en cuivre brillante avec un couvercle est posée sur la cuisinière. Murzik y voit son reflet.",
    image: p("tencere"),
    steps: ["Après le dîner, Zeynep Hanım sort une marmite en cuivre.", "« Al, bu senin. Yemek yaparsın! » — « Tiens, elle est à toi. Tu y feras la cuisine ! »", "Murzik s'y regarde comme dans un miroir.", "Demain — cours de cuisine !"],
    bridge: "Zeynep Hanım promet d'apprendre à Murzik à faire un vrai menemen.",
  },
};

const bursa7: Lesson = {
  id: "tr-a1-bursa-7",
  level: "A1",
  cityId: "tr-bursa",
  number: 7,
  title: "On cuisine à la maison",
  minutes: 8,
  goals: ["Comprendre une recette simple", "Dire « d'abord… ensuite… »", "Réviser tous les mots de Bursa"],
  vocabNote: "Le menemen, ce sont des œufs brouillés à la turque avec des tomates et des poivrons. Chaque famille en fait au petit-déjeuner.",
  vocab: [
    v("trbu7-1", "Önce soğanı doğra.", "D'abord, coupe l'oignon.", "Murzik, en tablier, coupe un oignon en versant de drôles de petites larmes.", "Écouter Önce soğanı doğra", p("l7-1")),
    v("trbu7-2", "Domatesleri ekle.", "Ajoute les tomates.", "La patte de Murzik verse les tomates coupées dans la poêle.", "Écouter Domatesleri ekle", p("l7-2")),
    v("trbu7-3", "Karıştır.", "Remue.", "Murzik remue la poêle avec une cuillère en bois.", "Écouter Karıştır", p("l7-3")),
    v("trbu7-4", "tuz", "sel", "Une petite salière et une pincée de sel.", "Écouter tuz", p("l7-4")),
    v("trbu7-5", "ocak", "cuisinière", "Une cuisinière à gaz avec une flamme bleue.", "Écouter ocak", p("l7-5")),
    v("trbu7-6", "Hazır!", "C'est prêt !", "Murzik soulève fièrement une poêle de menemen bien chaud.", "Écouter Hazır", p("l7-6")),
    v("trbu7-7", "Tadına bak!", "Goûte !", "Murzik tend une cuillère à Tom : « Goûte ! »", "Écouter Tadına bak", p("l7-7")),
  ],
  dialogue: {
    title: "Un cours de cuisine",
    note: "Yapıyoruz veut dire « nous faisons, nous préparons ». Yumurta veut dire « œuf ».",
    lines: [
      line("zeynep", "Bugün menemen yapıyoruz! Önce soğanı doğra.", "Aujourd'hui, on fait du menemen ! D'abord, coupe l'oignon."),
      line("murzik", "Tamam. Sonra?", "D'accord. Et ensuite ?"),
      line("zeynep", "Sonra domatesleri ekle. Karıştır!", "Ensuite, ajoute les tomates. Remue !"),
      line("tom", "Tuz var mı?", "Il y a du sel ?"),
      line("zeynep", "Biraz tuz. Şimdi yumurta.", "Un peu de sel. Maintenant, les œufs."),
      line("murzik", "Hazır mı?", "C'est prêt ?"),
      line("zeynep", "Hazır! Tadına bak!", "C'est prêt ! Goûte !"),
      line("murzik", "Çok lezzetli! Eline sağlık!", "C'est délicieux ! Merci !"),
    ],
    gist: choice("trbu7-d1", "Que cuisinent-ils ?", [
      ["Du menemen — des œufs aux tomates.", true],
      ["L'İskender.", false],
      ["Une soupe.", false],
    ]),
  },
  grammar: [
    {
      title: "D'abord… ensuite…",
      paragraphs: [
        "Önce veut dire « d'abord », sonra veut dire « ensuite ». Avec eux, une recette est facile à suivre : Önce soğanı doğra, sonra domatesleri ekle.",
        "Une consigne amicale, c'est juste le verbe nu, comme l'impératif en français : doğra! — coupe !, ekle! — ajoute !, karıştır! — remue ! Tu connais déjà bak! et ara!.",
      ],
      examples: [
        { ru: "Önce soğanı doğra, sonra karıştır.", en: "D'abord coupe l'oignon, ensuite remue." },
        { ru: "Biraz tuz ekle.", en: "Ajoute un peu de sel." },
      ],
    },
  ],
  tasks: [
    listen("trbu7-t1", "Examen audio. Que faut-il faire d'abord ?", "Önce soğanı doğra, sonra domatesleri ekle.", [
      ["Couper l'oignon.", true],
      ["Ajoute les tomates.", false],
      ["Ajouter du sel.", false],
    ]),
    match("trbu7-t2", "Associe les paires.", [
      ["tuz", "sel"],
      ["ocak", "cuisinière"],
      ["soğan", "oignon"],
      ["yumurta", "œuf"],
    ], { skill: "words" }),
    build("trbu7-t3", "Mets les mots dans l'ordre : « D'abord coupe l'oignon, ensuite ajoute les tomates ».", ["Önce", "soğanı", "doğra,", "sonra", "domatesleri", "ekle."]),
    missing("trbu7-t4", "Quelle lettre manque ? (« remue »)", "Karışt", "r", "ı", ["ı", "i", "u"]),
    speak("trbu7-t5", "Hazır mı?", "Hazır! Tadına bak!", "C'est prêt ! Goûte !", { help: "Réponds à voix haute et propose de goûter." }),
    script("trbu7-t6", "Souviens-toi de tout Bursa. Complète les conversations.", [
      { speaker: "Waiter", text: "Ne istersiniz?" },
      { speaker: "You", answer: "Bir çay, lütfen.", options: ["Bir çay, lütfen.", "Doydum.", "Kasa nerede?"] },
      { speaker: "Seller", text: "Yüz lira." },
      { speaker: "You", answer: "Çok pahalı! İndirim var mı?", options: ["Çok pahalı! İndirim var mı?", "Çok lezzetli!", "Afiyet olsun!"] },
      { speaker: "Zeynep Hanım", text: "Afiyet olsun!" },
      { speaker: "You", answer: "Teşekkürler! Eline sağlık!", options: ["Teşekkürler! Eline sağlık!", "Hesap, lütfen.", "Taze mi?"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "onluk",
    itemName: "Tablier",
    itemNameRu: "Önlük",
    ru: "Yaşasın! Yeni bir önlük!",
    en: "Hourra ! Un nouveau tablier !",
    a11y: "Murzik, dans un petit tablier brodé d'une tulipe, est devant la cuisinière avec une cuillère en bois.",
    image: p("onluk"),
    steps: ["Zeynep Hanım noue un tablier à Murzik.", "Une tulipe est brodée dessus.", "« Artık sen bir aşçısın! » — « Maintenant, tu es un vrai cuisinier ! »", "Murzik lève fièrement sa cuillère."],
    bridge: "Avant leur départ, Zeynep Hanım veut leur parler du dessin du chat roux.",
  },
};

const story: CityStory = {
  home: {
    name: "Une chambre avec un oriel",
    nameRu: "Cumbalı oda",
    image: p("home"),
    a11y: "Une chambre dans une vieille maison avec un oriel en bois qui donne sur la rue. En bas, on voit le marché de la soie du Koza Han. Au milieu, la valise de Murzik.",
  },
  keepsakeId: "esarp",
  welcomeRu: "Merhaba, Bursa!",
  welcomeEn: "Bonjour, Bursa !",
  welcomeImage: p("arrival"),
  welcomeA11y: "Murzik et Tom sont arrivés à Bursa. Derrière eux : le mont Uludağ tout vert et de vieilles coupoles, entourées d'arbres.",
  departureImage: p("departure"),
  departureA11y: "Murzik et Tom avec leurs valises à la gare routière de Bursa, à côté d'un autocar.",
  finale: [
    {
      image: p("zeynep"),
      a11y: "Zeynep Hanım décroche le dessin du chat roux du mur du salon de thé et le tend à Murzik. Tom est à côté d'eux.",
      lines: [
        { en: "Le dernier soir, Zeynep Hanım rapporte le dessin du chat roux du salon de thé d'en face et le donne à Murzik." },
        { ru: "Çok güzel resim yapardı. Ama hep kızını özlüyordu.", en: "Elle peignait magnifiquement. Mais sa fille lui manquait toujours." },
        { en: "Sa fille ? Murzik se souvient : sa tante Leyla, la fille de grand-mère Asya, habite à Izmir !" },
      ],
    },
    {
      image: p("esarp"),
      a11y: "Murzik fait le tour de la chambre à l'oriel, meublée leçon après leçon.",
      lines: [
        { en: "Murzik fait le tour de la chambre à l'oriel. Tom la prend en photo pour son carnet de voyage." },
        { en: "Murzik emporte le foulard en soie du Koza Han." },
        { en: "Le dessin de grand-mère va dans la poche de la valise, à côté des cartes postales." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie, et Tom fête ça avec lui.",
      lines: [
        { ru: "Bursa tamamlandı!", en: "Bursa, c'est fait !" },
        { en: "7 / 7 leçons" },
        { en: "A1 — troisième partie terminée." },
      ],
    },
    {
      image: p("departure"),
      a11y: "Murzik et Tom avec leurs valises près de l'autocar.",
      lines: [
        { ru: "Hoşça kal, Bursa!", en: "Au revoir, Bursa !" },
        { ru: "Sıradaki durak: İzmir!", en: "Prochain arrêt : Izmir !" },
      ],
    },
    {
      image: p("road"),
      a11y: "L'autocar roule sur une route à travers les oliveraies, vers la mer.",
      lines: [{ ru: "Bursa → İzmir", en: "Bursa → Izmir" }],
    },
    {
      image: pic("tr/izmir/arrival"),
      a11y: "Murzik et Tom sur le front de mer du Kordon à Izmir : des palmiers, la mer et la vieille tour de l'horloge ouvragée.",
      lines: [
        { ru: "Merhaba, İzmir!", en: "Bonjour, İzmir !" },
        { ru: "Burada teyzem yaşıyor!", en: "Ma tante habite ici !" },
      ],
    },
  ],
};

export const trBursaFr = {
  id: "tr-bursa",
  name: "Bursa",
  nameTr: "Bursa",
  lessons: [bursa1, bursa2, bursa3, bursa4, bursa5, bursa6, bursa7],
  story,
};
