import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { PAIRS, YOU, build, choice, fill, g, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Сан-Паулу · «Магазин и метро» · Мурзик и Биа живут у её папы Маркуса. Метро, булочная доны Нейди, покупки и подарок для доны Лусии, глаголы на -ar, пицца. Пипока выучил «Quanto custa?». */

const p = (name: string) => pic(`pt/saopaulo/${name}`);
const NEIDE = "Dona Neide";

const sp1: Lesson = {
  id: "pt-a1-saopaulo-1",
  level: "A1",
  cityId: "pt-saopaulo",
  number: 1,
  title: "O metrô — Le métro",
  minutes: 7,
  goals: [
    "Acheter un ticket et demander son chemin dans le métro",
    "Demander si c'est loin",
    "Dire que tu es perdu(e)",
  ],
  vocabNote:
    "Estou perdido — « je suis perdu » (pour un homme), estou perdida — pour une femme. L'accord se fait comme en français : « perdu / perdue ».",
  vocab: [
    v("ptsp1-1", "Onde fica o metrô?", "Où est le métro ?",
      "Murzik avec sa valise au milieu d'une immense gare.",
      p("l1-1")),
    v("ptsp1-2", "Um bilhete, por favor.", "Un ticket, s'il vous plaît.",
      "Murzik tend de l'argent à travers le guichet.",
      p("l1-2")),
    v("ptsp1-3", "Este trem vai para a Sé?", "Ce train va à Sé ?",
      "Murzik montre une rame de métro et regarde une passagère d'un air interrogateur.",
      p("l1-3")),
    v("ptsp1-4", "Sim, vai.", "Oui, il y va.",
      "La passagère hoche la tête en souriant.",
      p("l1-4")),
    v("ptsp1-5", "Estou perdido.", "Je suis perdu.",
      "Murzik, déboussolé, tourne le plan du métro à l'envers.",
      p("l1-5")),
    v("ptsp1-6", "É longe?", "C'est loin ?",
      "Murzik regarde une rue très, très longue.",
      p("l1-6")),
    v("ptsp1-7", "Não, é perto.", "Non, c'est près.",
      "Une passante montre avec ses doigts : tout petit.",
      p("l1-7")),
  ],
  dialogue: {
    title: "À la gare routière",
    note:
      "Trem — « train ». Estação — « station ». Desça — « descendez ». Sé — une station en plein centre de São Paulo.",
    lines: [
      line("murzik", "Bia, onde fica o metrô?", "Bia, où est le métro ?"),
      line("bia", "Ali! O meu pai mora perto da estação Sé.", "Là-bas ! Mon père habite près de la station Sé."),
      line("murzik", "Um bilhete, por favor. Não, dois bilhetes!", "Un ticket, s'il vous plaît. Non — deux tickets !"),
      line("murzik", "Com licença, este trem vai para a Sé?", "Excusez-moi, ce train va à Sé ?"),
      line("passerby", "Sim, vai. Desça na quinta estação.", "Oui, il y va. Descendez à la cinquième station."),
      line("murzik", "Bia… estou perdido. É longe?", "Bia… je suis perdu. C'est loin ?"),
      line("bia", "Não, é perto! Olha, é aqui.", "Non, c'est près ! Regarde, c'est ici."),
    ],
    gist: choice("ptsp1-d1", "Où vont Murzik et Bia ?", [
      ["Chez le père de Bia, près de la station Sé.", true],
      ["À l'aéroport.", false],
      ["Au concert du groupe.", false],
    ]),
  },
  grammar: [
    g(
      "Onde fica…? Perto et longe",
      [
        "Onde fica…? — « où se trouve… ? » C'est la question pour les lieux qui ne bougent pas : Onde fica o metrô? Onde fica a praia? (Fica veut littéralement dire « reste ».)",
        "Perto — « près », longe — « loin ». « Près de… » — perto de : perto da estação (de + a = da — tu te souviens ? Comme le français « du » !).",
      ],
      [
        ["Onde fica a estação?", "Où est la station ?"],
        ["A praia é perto do hotel.", "La plage est près de l'hôtel."],
      ],
    ),
  ],
  tasks: [
    choice("ptsp1-t1", "Comment demander « Où est le métro ? »", [
      ["Onde fica o metrô?", true],
      ["Quanto é o metrô?", false],
      ["Quem é o metrô?", false],
    ], { skill: "grammar" }),
    listen("ptsp1-t2", "Écoute. C'est loin ?", "Não, é perto.", [
      ["Non, c'est près.", true],
      ["Oui, très loin.", false],
      ["Je ne sais pas.", false],
    ]),
    match("ptsp1-t3", PAIRS, [
      ["o trem", "le train"],
      ["a estação", "la station"],
      ["o bilhete", "le ticket"],
      ["longe", "loin"],
    ], { skill: "words" }),
    missing("ptsp1-t4", "Quelles lettres manquent-elles ? (« ticket »)", "bi", "ete", "lh", ["lh", "l", "nh"]),
    speak("ptsp1-t5", "Oi! Tudo bem?", "Tudo bem, obrigado. Onde fica o metrô?", "Ça va, merci. Où est le métro ?", {
      help: "Demande de l'aide à voix haute. Une femme dira perdida.",
    }),
    choice("ptsp1-t6", "Comment dire « Encore un café ! » ?", [
      ["Mais um café!", true],
      ["Só isso, obrigado.", false],
      ["Sem açúcar.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "metro-card",
    itemName: "Ticket de métro",
    itemNameRu: "Bilhete do metrô",
    ru: "Oba! Um bilhete do metrô!",
    en: "Hourra ! Un ticket de métro !",
    a11y: "Un petit ticket de métro bleu de São Paulo posé sur la table.",
    image: p("metro-card"),
    steps: [
      "Le père de Bia, Marcos, les accueille à la porte.",
      "Murzik lui montre son tout premier ticket de métro.",
      "« Guarde! É uma lembrança! » — « Garde-le ! C'est un souvenir ! »",
      "Le ticket trouve sa place sur la table de la chambre de Murzik.",
    ],
    bridge: "Au matin, Marcos les emmène dans sa boulangerie préférée.",
  },
};

const sp2: Lesson = {
  id: "pt-a1-saopaulo-2",
  level: "A1",
  cityId: "pt-saopaulo",
  number: 2,
  title: "Na padaria — À la boulangerie",
  minutes: 7,
  goals: [
    "Demander combien ça coûte",
    "Dire « cher » et « pas cher »",
    "Dire ce que tu prends",
  ],
  vocabNote:
    "Padaria — une boulangerie-café. À São Paulo, il y en a à chaque coin de rue : on y prend le petit-déjeuner, on y boit un café et on bavarde avec le caissier.",
  vocab: [
    v("ptsp2-1", "Quanto custa?", "Combien ça coûte ?",
      "Murzik montre un petit pain en vitrine.",
      p("l2-1")),
    v("ptsp2-2", "Custa um real.", "Ça coûte un real.",
      "Une étiquette avec le chiffre 1 au-dessus des petits pains.",
      p("l2-2")),
    v("ptsp2-3", "Quanto custam os bolos?", "Combien coûtent les gâteaux ?",
      "Une vitrine de petits gâteaux colorés.",
      p("l2-3")),
    v("ptsp2-4", "É caro!", "C'est cher !",
      "Murzik regarde avec horreur un gros gâteau et son étiquette de prix.",
      p("l2-4")),
    v("ptsp2-5", "É barato.", "C'est pas cher.",
      "Murzik tient joyeusement un sachet de petits pains.",
      p("l2-5")),
    v("ptsp2-6", "Eu vou levar dois.", "J'en prends deux.",
      "Murzik lève deux doigts devant le caissier.",
      p("l2-6")),
    v("ptsp2-7", "Aqui está o troco.", "Voici votre monnaie.",
      "Une caissière âgée à lunettes tend des pièces.",
      p("l2-7")),
  ],
  dialogue: {
    title: "La boulangerie de Dona Neide",
    note:
      "Pão francês — le « pain français », le petit pain brésilien ordinaire du petit-déjeuner… même si on ne le trouve pas en France ! Pão — « pain », pães — le pluriel.",
    lines: [
      line("neide", "Bom dia, Marcos! E quem são esses?", "Bonjour, Marcos ! Et qui sont ces deux-là ?"),
      line("marcos", "A minha filha, a Bia, e o amigo dela, o Murzik.", "Ma fille, Bia, et son ami Murzik."),
      line("murzik", "Bom dia! Quanto custa o pão francês?", "Bonjour ! Combien coûte le petit pain ?"),
      line("neide", "Custa um real.", "Un real."),
      line("murzik", "É barato! E quanto custam os bolos?", "C'est pas cher ! Et combien coûtent les gâteaux ?"),
      line("neide", "Os bolos custam dez reais.", "Les gâteaux coûtent dix reais."),
      line("murzik", "É caro… Eu vou levar dois pães, por favor.", "C'est cher… Je prends deux petits pains, s'il vous plaît."),
      line("neide", "Aqui está. E aqui está o troco.", "Voilà. Et voici votre monnaie."),
    ],
    gist: choice("ptsp2-d1", "Qu'achète Murzik ?", [
      ["Deux petits pains.", true],
      ["Deux gâteaux.", false],
      ["Un gros gâteau.", false],
    ]),
  },
  grammar: [
    g(
      "Custa ou custam ?",
      [
        "Une seule chose : custa. Plusieurs choses : custam. Quanto custa o pão? — Quanto custam os bolos? C'est comme « ça coûte » et « ça coûtent » en français : « combien coûte le pain ? » / « combien coûtent les gâteaux ? ».",
        "Caro et barato s'accordent avec le nom, comme « cher / chère » en français : o bolo é caro, a pizza é cara, os pães são baratos.",
      ],
      [
        ["Quanto custa o suco?", "Combien coûte le jus ?"],
        ["Quanto custam os bilhetes?", "Combien coûtent les tickets ?"],
      ],
    ),
  ],
  tasks: [
    choice("ptsp2-t1", "Comment demander « Combien coûtent les tickets ? »", [
      ["Quanto custam os bilhetes?", true],
      ["Quanto custa os bilhetes?", false],
      ["Quantos custam os bilhetes?", false],
    ], { skill: "grammar" }),
    listen("ptsp2-t2", "Écoute. Combien ça coûte ?", "Custa dez reais.", [
      ["10", true],
      ["2", false],
      ["12", false],
    ]),
    match("ptsp2-t3", PAIRS, [
      ["É caro.", "C'est cher."],
      ["É barato.", "C'est pas cher."],
      ["o troco", "la monnaie"],
      ["Eu vou levar.", "Je le prends."],
    ], { skill: "words" }),
    spell("ptsp2-t4", "Assemble le mot « cher ».", "caro"),
    speak("ptsp2-t5", "Bom dia! O que você quer?", "Quanto custa o pão? Eu vou levar dois.", "Combien coûte le pain ? J'en prends deux.", {
      help: "Demande le prix à voix haute et dis combien tu en prends.",
    }),
    choice("ptsp2-t6", "Comment dire « C'est loin ? »", [
      ["É longe?", true],
      ["É perto.", false],
      ["É caro?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "mug",
    itemName: "Mug de la boulangerie",
    itemNameRu: "Caneca",
    ru: "Oba! Uma caneca!",
    en: "Hourra ! Un mug !",
    a11y: "Un mug blanc avec un petit pain et une tasse de café dessinés dessus.",
    image: p("mug"),
    steps: [
      "Dona Neide sort un mug de dessous le comptoir.",
      "« Um presente da padaria! » — « Un cadeau de la boulangerie ! »",
      "Murzik y boit son café du matin.",
      "Le mug rejoint l'étagère.",
    ],
    bridge: "Bia se souvient : l'anniversaire de sa grand-mère approche. Il faut un cadeau !",
  },
};

const sp3: Lesson = {
  id: "pt-a1-saopaulo-3",
  level: "A1",
  cityId: "pt-saopaulo",
  number: 3,
  title: "Um presente — Un cadeau",
  minutes: 7,
  goals: [
    "Répondre au vendeur « Je regarde seulement »",
    "Dire que tu cherches un cadeau",
    "Montrer : celui-ci et celui-là",
  ],
  vocabNote:
    "La Rua 25 de Março (rue du 25-Mars) est un immense marché à ciel ouvert au centre de São Paulo. On y trouve de tout.",
  vocab: [
    v("ptsp3-1", "Posso ajudar?", "Je peux vous aider ?",
      "Un vendeur se penche vers Murzik avec un sourire amical.",
      p("l3-1")),
    v("ptsp3-2", "Só estou olhando.", "Je regarde seulement.",
      "Murzik examine les étagères avec intérêt.",
      p("l3-2")),
    v("ptsp3-3", "Estou procurando um presente.", "Je cherche un cadeau.",
      "Murzik tient dans ses pattes une boîte cadeau vide avec un nœud.",
      p("l3-3")),
    v("ptsp3-4", "Para quem?", "Pour qui ?",
      "La vendeuse hausse les sourcils d'un air interrogateur.",
      p("l3-4")),
    v("ptsp3-5", "Para a minha avó.", "Pour ma grand-mère.",
      "Bia montre une photo de Dona Lúcia sur son téléphone.",
      p("l3-5")),
    v("ptsp3-6", "Esta aqui?", "Celle-ci ?",
      "La vendeuse tient un joli sac à main.",
      p("l3-6")),
    v("ptsp3-7", "Não, aquele ali.", "Non, celui-là, là-bas.",
      "Murzik montre une étagère en hauteur où est posé un châle couvert de perroquets peints.",
      p("l3-7")),
  ],
  dialogue: {
    title: "Dans la rue du 25-Mars",
    note:
      "Xale — « châle ». Perfeito — « parfait ». Vou levar — « je le prends » (littéralement « je vais l'emporter »).",
    lines: [
      line("seller", "Boa tarde! Posso ajudar?", "Bonjour ! Je peux vous aider ?"),
      line("murzik", "Só estou olhando, obrigado.", "Je regarde seulement, merci."),
      line("bia", "Murzik! Nós estamos procurando um presente!", "Murzik ! On cherche un cadeau !"),
      line("seller", "Um presente? Para quem?", "Un cadeau ? Pour qui ?"),
      line("bia", "Para a minha avó.", "Pour ma grand-mère."),
      line("seller", "Esta aqui? Uma bolsa bonita.", "Celui-ci ? Un joli sac."),
      line("murzik", "Não… aquele ali! O xale com papagaios!", "Non… celui-là ! Le châle avec les perroquets !"),
      line("bia", "É perfeito! A vovó adora papagaios.", "Il est parfait ! Mamie adore les perroquets."),
    ],
    gist: choice("ptsp3-d1", "Que choisissent-ils pour Dona Lúcia ?", [
      ["Un châle avec des perroquets.", true],
      ["Un joli sac.", false],
      ["Une écharpe à fleurs.", false],
    ]),
  },
  grammar: [
    g(
      "Celui-ci et celui-là : este, aquele",
      [
        "Este / esta — « celui-ci / celle-ci » (près de moi, aqui). Aquele / aquela — « celui-là / celle-là » (loin, ali, lá). Les deux s'accordent en genre, comme « ce » et « cette » en français : esta bolsa, aquele xale.",
        "Dans la langue parlée, les Brésiliens disent souvent esse au lieu de este — le sens est presque le même. L'important, c'est de ne pas oublier le genre.",
      ],
      [
        ["Este presente é para você.", "Ce cadeau est pour toi."],
        ["Aquela bolsa é cara.", "Ce sac-là est cher."],
      ],
    ),
  ],
  tasks: [
    choice("ptsp3-t1", "Comment dire « ce sac-là » ? (a bolsa)", [
      ["aquela bolsa", true],
      ["aquele bolsa", false],
      ["aquela bolso", false],
    ], { skill: "grammar" }),
    listen("ptsp3-t2", "Écoute. Que répond le client ?", "Só estou olhando, obrigado.", [
      ["Il regarde seulement.", true],
      ["Il cherche un cadeau.", false],
      ["Il veut payer.", false],
    ]),
    match("ptsp3-t3", PAIRS, [
      ["Posso ajudar?", "Je peux vous aider ?"],
      ["Para quem?", "Pour qui ?"],
      ["o presente", "le cadeau"],
      ["aquela ali", "celle-là, là-bas"],
    ], { skill: "words" }),
    missing("ptsp3-t4", "Quelle lettre manque-t-il ? (« cadeau »)", "pre", "ente", "s", ["s", "z", "ç"]),
    speak("ptsp3-t5", "Boa tarde! Posso ajudar?", "Só estou olhando, obrigado.", "Je regarde seulement, merci.", {
      help: "Réponds au vendeur à voix haute — obrigado ou obrigada.",
    }),
    choice("ptsp3-t6", "Comment dire « C'est cher ! » ?", [
      ["É caro!", true],
      ["É barato.", false],
      ["É perto.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "gift-box",
    itemName: "Boîte cadeau",
    itemNameRu: "Caixa de presente",
    ru: "Oba! O presente da vovó!",
    en: "Hourra ! Le cadeau de mamie !",
    a11y: "Une boîte emballée de papier vert avec un nœud jaune. Un châle à perroquets dépasse sous le couvercle.",
    image: p("gift-box"),
    steps: [
      "La vendeuse emballe le châle dans du papier vert.",
      "Un nœud jaune par-dessus.",
      "« É segredo! » — « C'est un secret ! » chuchote Bia.",
      "Murzik cache la boîte dans l'armoire.",
    ],
    bridge: "Le soir, Marcos rentre du travail et raconte sa journée.",
  },
};

const sp4: Lesson = {
  id: "pt-a1-saopaulo-4",
  level: "A1",
  cityId: "pt-saopaulo",
  number: 4,
  title: "Eu trabalho, você estuda — Je travaille, tu étudies",
  minutes: 7,
  goals: [
    "Parler de travail et d'études",
    "Conjuguer les verbes en -ar",
    "Demander à quelqu'un de quel instrument il joue",
  ],
  vocabNote:
    "Tocar — « jouer d'un instrument », jogar — « jouer à un jeu » : tocar violão, jogar futebol. Violão — la guitare.",
  vocab: [
    v("ptsp4-1", "Eu trabalho muito.", "Je travaille beaucoup.",
      "Marcos, avec un ordinateur portable et une pile de papiers, sourit fatigué.",
      p("l4-1")),
    v("ptsp4-2", "Você estuda?", "Tu étudies ?",
      "Marcos regarde Murzik avec intérêt.",
      p("l4-2")),
    v("ptsp4-3", "Eu estudo português.", "J'étudie le portugais.",
      "Murzik penché sur un manuel, entouré de cartes de vocabulaire.",
      p("l4-3")),
    v("ptsp4-4", "Nós moramos aqui.", "Nous habitons ici.",
      "La fenêtre d'un appartement au quinzième étage, avec les lumières de la grande ville derrière.",
      p("l4-4")),
    v("ptsp4-5", "Ela fala muito!", "Elle parle tellement !",
      "Bia raconte avec animation, en gesticulant.",
      p("l4-5")),
    v("ptsp4-6", "Você toca violão?", "Tu joues de la guitare ?",
      "Une vieille guitare est accrochée au mur.",
      p("l4-6")),
    v("ptsp4-7", "Eles cantam juntos.", "Ils chantent ensemble.",
      "Marcos joue de la guitare pendant que Bia et Murzik chantent.",
      p("l4-7")),
  ],
  dialogue: {
    title: "Une soirée chez Marcos",
    note:
      "Num banco — « dans une banque » (em + um). Jornalismo — « journalisme ». Bem — « bien » : Você canta bem! — « Tu chantes bien ! »",
    lines: [
      line("marcos", "Ufa! Eu trabalho muito.", "Ouf ! Je travaille tellement."),
      line("murzik", "Onde você trabalha?", "Et vous travaillez où ?"),
      line("marcos", "Eu trabalho num banco. E você, Murzik? Você estuda?", "Dans une banque. Et toi, Murzik ? Tu étudies ?"),
      line("murzik", "Eu estudo português! E a Bia estuda jornalismo.", "J'étudie le portugais ! Et Bia fait du journalisme."),
      line("marcos", "Eu sei! Ela fala muito!", "Je sais ! Elle parle tellement !"),
      line("bia", "Pai! Você toca violão hoje?", "Papa ! Tu joues de la guitare ce soir ?"),
      line("marcos", "Toco! E vocês cantam.", "Oui ! Et vous, vous chantez."),
    ],
    gist: choice("ptsp4-d1", "Où travaille Marcos ?", [
      ["Dans une banque.", true],
      ["Dans une boulangerie.", false],
      ["À l'université.", false],
    ]),
  },
  grammar: [
    g(
      "Les verbes en -ar",
      [
        "Les verbes en -ar (falar — parler, morar — habiter, trabalhar — travailler) se conjuguent comme les verbes français en -er : eu falo, você / ele / ela fala, nós falamos, vocês / eles / elas falam.",
        "Comme dans « je parle, tu parles, il parle » : en français, « tu » et « il » ne se distinguent qu'à l'écrit ; en portugais, você, ele et ela partagent une seule forme — c'est plus simple !",
      ],
      [
        ["Eu moro em Paris. Ela mora no Rio.", "J'habite à Paris. Elle habite à Rio."],
        ["Nós falamos português.", "Nous parlons portugais."],
      ],
    ),
  ],
  tasks: [
    choice("ptsp4-t1", "Comment dire « Nous habitons ici » ?", [
      ["Nós moramos aqui.", true],
      ["Nós mora aqui.", false],
      ["Nós moram aqui.", false],
    ], { skill: "grammar" }),
    listen("ptsp4-t2", "Écoute. Que fait Bia ?", "A Bia estuda jornalismo.", [
      ["Elle fait du journalisme.", true],
      ["Elle travaille dans une banque.", false],
      ["Elle joue de la guitare.", false],
    ]),
    fill("ptsp4-t3", "Complète : « Ils chantent ensemble ».", "Eles", "juntos.", "cantam", ["cantam", "canta", "cantamos"], { skill: "words" }),
    spell("ptsp4-t4", "Assemble le mot « guitare ».", "violão"),
    speak("ptsp4-t5", "Você trabalha ou estuda?", "Eu trabalho. E eu estudo português.", "Je travaille. Et j'étudie le portugais.", {
      help: "Réponds à voix haute pour toi.",
    }),
    choice("ptsp4-t6", "Le vendeur demande : Posso ajudar? Comment dire que tu regardes seulement ?", [
      ["Só estou olhando.", true],
      ["Para quem?", false],
      ["Aquela ali.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "guitar-pick",
    itemName: "Médiator",
    itemNameRu: "Palheta",
    ru: "Oba! Uma palheta!",
    en: "Hourra ! Un médiator !",
    a11y: "Un petit médiator jaune sur le rebord de la fenêtre.",
    image: p("pick"),
    steps: [
      "Après les chansons, Marcos donne un médiator à Murzik.",
      "« Um dia você vai tocar! » — « Un jour, toi aussi tu joueras ! »",
      "Murzik le pose soigneusement sur le rebord de la fenêtre.",
      "Dehors, les lumières de la ville scintillent.",
    ],
    bridge: "Au matin, Bia fait visiter São Paulo à Murzik.",
  },
};

const sp5: Lesson = {
  id: "pt-a1-saopaulo-5",
  level: "A1",
  cityId: "pt-saopaulo",
  number: 5,
  title: "A cidade grande — La grande ville",
  minutes: 7,
  goals: [
    "Nommer les lieux de la ville",
    "Dire si c'est ouvert ou fermé",
    "Dire comment tu te déplaces",
  ],
  vocabNote:
    "Gente — « les gens », mais le mot est féminin singulier : muita gente — « beaucoup de monde ». Avenida Paulista — l'avenue principale de São Paulo.",
  vocab: [
    v("ptsp5-1", "Tem muita gente!", "Il y a foule !",
      "Une large avenue pleine de monde.",
      p("l5-1")),
    v("ptsp5-2", "o prédio alto", "l'immeuble haut",
      "Murzik renverse la tête en arrière pour regarder un gratte-ciel.",
      p("l5-2")),
    v("ptsp5-3", "o museu", "le musée",
      "Un musée rouge posé sur quatre piliers.",
      p("l5-3")),
    v("ptsp5-4", "o parque", "le parc",
      "Un grand parc vert avec un lac.",
      p("l5-4")),
    v("ptsp5-5", "Está aberto.", "C'est ouvert.",
      "Une pancarte avec une porte ouverte et un point vert.",
      p("l5-5")),
    v("ptsp5-6", "Está fechado.", "C'est fermé.",
      "Une pancarte avec une porte fermée et un point rouge.",
      p("l5-6")),
    v("ptsp5-7", "Vamos a pé?", "On y va à pied ?",
      "Murzik montre ses pattes, puis la route.",
      p("l5-7")),
  ],
  dialogue: {
    title: "Une promenade sur l'avenue Paulista",
    note:
      "MASP — le célèbre musée d'art de l'Avenida Paulista. Segunda-feira — « lundi » (les jours de la semaine seront à Brasília).",
    lines: [
      line("murzik", "Nossa! Tem muita gente! E os prédios são muito altos!", "Waouh ! Il y a foule ! Et les immeubles sont si hauts !"),
      line("bia", "Olha, ali é o museu, o MASP.", "Regarde, là-bas c'est le musée, le MASP."),
      line("murzik", "O museu está aberto?", "Le musée est ouvert ?"),
      line("bia", "Hoje não. Hoje é segunda-feira. Está fechado.", "Pas aujourd'hui. On est lundi. C'est fermé."),
      line("murzik", "Que pena! E o parque?", "Quel dommage ! Et le parc ?"),
      line("bia", "O parque está aberto. Vamos de metrô ou a pé?", "Le parc est ouvert. On y va en métro ou à pied ?"),
      line("murzik", "Vamos a pé!", "À pied !"),
    ],
    gist: choice("ptsp5-d1", "Pourquoi ne vont-ils pas au musée ?", [
      ["Il est fermé aujourd'hui.", true],
      ["Il est très cher.", false],
      ["Il est loin.", false],
    ]),
  },
  grammar: [
    g(
      "Se déplacer : a pé, de metrô",
      [
        "Pour dire comment tu voyages, utilise de : de metrô, de ônibus, de táxi, de carro. En français on dit « en métro, en bus, en taxi, en voiture » — en portugais, c'est de partout. Et « à pied » — a pé : exactement le même mot, pé = « pied » !",
        "Nossa! — « Waouh ! » Les Brésiliens le disent tout le temps quand quelque chose les surprend.",
      ],
      [
        ["Eu vou de ônibus.", "J'y vais en bus."],
        ["Nós vamos a pé.", "Nous y allons à pied."],
      ],
    ),
  ],
  tasks: [
    choice("ptsp5-t1", "Comment dire « en métro » ?", [
      ["de metrô", true],
      ["a metrô", false],
      ["com metrô", false],
    ], { skill: "grammar" }),
    listen("ptsp5-t2", "Écoute. Le musée est-il ouvert ?", "O museu está fechado.", [
      ["Non, il est fermé.", true],
      ["Oui, il est ouvert.", false],
      ["Il n'y a pas de musée.", false],
    ]),
    match("ptsp5-t3", PAIRS, [
      ["o museu", "le musée"],
      ["o parque", "le parc"],
      ["aberto", "ouvert"],
      ["fechado", "fermé"],
    ], { skill: "words" }),
    missing("ptsp5-t4", "Quelle lettre manque-t-il ? (« musée »)", "mus", "u", "e", ["e", "i", "a"]),
    speak("ptsp5-t5", "Vamos de metrô ou a pé?", "Vamos a pé!", "À pied !", {
      help: "Choisis à voix haute. Tu peux aussi dire Vamos de metrô!",
    }),
    choice("ptsp5-t6", "Comment demander « Tu joues de la guitare ? »", [
      ["Você toca violão?", true],
      ["Você joga violão?", false],
      ["Você estuda violão?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "umbrella",
    itemName: "Parapluie pliant",
    itemNameRu: "Guarda-chuva",
    ru: "Oba! Um guarda-chuva!",
    en: "Hourra ! Un parapluie !",
    a11y: "Un petit parapluie pliant bleu, encore trempé, près de la porte.",
    image: p("umbrella"),
    steps: [
      "Dans le parc, une petite pluie fine se met soudain à tomber.",
      "« É a garoa de São Paulo! » — « C'est la bruine de São Paulo ! »",
      "Bia achète un petit parapluie à Murzik.",
      "À la maison, le parapluie sèche près de la porte.",
    ],
    bridge: "Le soir, Marcos annonce : « Ce soir — la vraie pizza de São Paulo ! »",
  },
};

const sp6: Lesson = {
  id: "pt-a1-saopaulo-6",
  level: "A1",
  cityId: "pt-saopaulo",
  number: 6,
  title: "A pizza — La pizza",
  minutes: 7,
  goals: [
    "Commander une pizza",
    "Dire ce que tu adores",
    "Dire « Je n'ai plus faim »",
  ],
  vocabNote:
    "À São Paulo, beaucoup de gens mangent une pizza presque chaque dimanche. Sabor — « parfum, goût » : c'est le mot pour demander la garniture.",
  vocab: [
    v("ptsp6-1", "Eu adoro pizza!", "J'adore la pizza !",
      "Murzik regarde une énorme pizza, les yeux brillants.",
      p("l6-1")),
    v("ptsp6-2", "Qual sabor?", "Quel parfum ?",
      "Un serveur avec un carnet se tient près de la table.",
      p("l6-2")),
    v("ptsp6-3", "De queijo, por favor.", "Au fromage, s'il vous plaît.",
      "Une pizza au fromage fondant qui file.",
      p("l6-3")),
    v("ptsp6-4", "Cuidado, está quente!", "Attention, c'est chaud !",
      "De la vapeur s'élève de la pizza ; Murzik souffle sur sa part.",
      p("l6-4")),
    v("ptsp6-5", "Mais um pedaço?", "Encore une part ?",
      "Marcos tend une part de pizza à Murzik.",
      p("l6-5")),
    v("ptsp6-6", "Estou cheio!", "Je n'ai plus faim !",
      "Murzik se renverse sur sa chaise en se caressant le ventre rond.",
      p("l6-6")),
    v("ptsp6-7", "Estava ótimo!", "C'était délicieux !",
      "Une boîte à pizza vide et trois visages ravis.",
      p("l6-7")),
  ],
  dialogue: {
    title: "À la pizzeria",
    note:
      "Grande — « grande ». Calabresa — une pizza à la saucisse épicée. Também — « aussi ».",
    lines: [
      line("waiter", "Boa noite! Qual sabor?", "Bonsoir ! Quel parfum ?"),
      line("murzik", "Eu adoro pizza! De queijo, por favor.", "J'adore la pizza ! Au fromage, s'il vous plaît."),
      line("marcos", "E uma de calabresa. Duas pizzas grandes.", "Et une calabresa. Deux grandes pizzas."),
      line("bia", "Cuidado, Murzik, está quente!", "Attention, Murzik, c'est chaud !"),
      line("marcos", "Mais um pedaço, Murzik?", "Encore une part, Murzik ?"),
      line("murzik", "Não, obrigado. Estou cheio!", "Non, merci. Je n'ai plus faim !"),
      line("bia", "Eu também estou cheia. Estava ótimo, pai!", "Moi non plus je n'ai plus faim. C'était délicieux, papa !"),
    ],
    gist: choice("ptsp6-d1", "Quelle pizza veut Murzik ?", [
      ["Au fromage.", true],
      ["À la saucisse.", false],
      ["Au poisson.", false],
    ]),
  },
  grammar: [
    g(
      "Estou cheio, estou cheia",
      [
        "Estou — « je suis », du verbe estar. On l'utilise pour les états qui vont passer : estou cheio — « je n'ai plus faim », estou perdido — « je suis perdu ». Un homme dit cheio, une femme cheia — comme « plein / pleine » en français !",
        "Está quente — « c'est chaud » (la pizza, maintenant). Estava ótimo — « c'était délicieux » (pour ce qu'on vient de manger).",
      ],
      [
        ["Estou cheio. / Estou cheia.", "Je n'ai plus faim. (homme / femme)"],
        ["A pizza está quente.", "La pizza est chaude."],
      ],
    ),
  ],
  tasks: [
    choice("ptsp6-t1", "Bia n'a plus faim. Que dit-elle ?", [
      ["Estou cheia!", true],
      ["Estou cheio!", false],
      ["Sou cheia!", false],
    ], { skill: "grammar" }),
    listen("ptsp6-t2", "Écoute. Quel est l'avertissement ?", "Cuidado, está quente!", [
      ["C'est chaud !", true],
      ["C'est cher !", false],
      ["C'est fermé !", false],
    ]),
    match("ptsp6-t3", PAIRS, [
      ["Qual sabor?", "Quel parfum ?"],
      ["de queijo", "au fromage"],
      ["um pedaço", "une part"],
      ["Eu adoro…", "J'adore…"],
    ], { skill: "words" }),
    spell("ptsp6-t4", "Assemble le mot « fromage ».", "queijo"),
    speak("ptsp6-t5", "Mais um pedaço?", "Não, obrigado. Estou cheio!", "Non, merci. Je n'ai plus faim !", {
      help: "Refuse à voix haute. Une femme dira cheia et obrigada.",
    }),
    choice("ptsp6-t6", "Comment dire « On y va à pied ? »", [
      ["Vamos a pé?", true],
      ["Vamos de metrô?", false],
      ["Está fechado?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "apron",
    itemName: "Tablier de pizzaiolo",
    itemNameRu: "Avental",
    ru: "Oba! Um avental!",
    en: "Hourra ! Un tablier !",
    a11y: "Un petit tablier rouge avec une pizza imprimée, accroché à un crochet.",
    image: p("apron"),
    steps: [
      "Le chef de la pizzeria vient à leur table.",
      "Il offre à Murzik un tablier minuscule.",
      "« Para o futuro pizzaiolo! » — « Pour le futur pizzaiolo ! »",
      "Le tablier est accroché à un crochet dans la chambre.",
    ],
    bridge: "Au matin, Bia repasse à la boulangerie. Dona Neide lui fait signe : « Bia! Espera! O papagaio! »",
  },
};

const sp7: Lesson = {
  id: "pt-a1-saopaulo-7",
  level: "A1",
  cityId: "pt-saopaulo",
  number: 7,
  title: "Quanto custa? — Pipoca à la boulangerie",
  minutes: 8,
  goals: [
    "Comprendre ce qu'on raconte sur Pipoca",
    "Souhaiter bonne chance et dire au revoir à la famille",
    "Réviser tous les mots de São Paulo",
  ],
  vocabNote:
    "Um beijo — littéralement « un baiser » : les Brésiliens terminent leurs appels et messages à la famille et aux amis par Beijo! Tchau! — « Bisous ! Salut ! »",
  vocab: [
    v("ptsp7-1", "Ele estava no caixa.", "Il était sur la caisse.",
      "Un perroquet vert perché sur la caisse enregistreuse de la boulangerie.",
      p("l7-1")),
    v("ptsp7-2", "Ele repete tudo!", "Il répète tout !",
      "Dona Neide rit, la main devant la bouche.",
      p("l7-2")),
    v("ptsp7-3", "Eles foram para Curitiba.", "Ils sont partis à Curitiba.",
      "Une carte : une flèche de São Paulo vers le sud.",
      p("l7-3")),
    v("ptsp7-4", "Lá faz frio.", "Là-bas, il fait froid.",
      "Une petite image : une ville sous un ciel gris, des gens en écharpe.",
      p("l7-4")),
    v("ptsp7-5", "Leve um casaco!", "Prends un manteau !",
      "Marcos tend une petite veste chaude à Murzik.",
      p("l7-5")),
    v("ptsp7-6", "Boa sorte!", "Bonne chance !",
      "Marcos lève les deux pouces.",
      p("l7-6")),
    v("ptsp7-7", "Um beijo para a vovó!", "Fais un bisou à mamie de ma part !",
      "Marcos serre Bia dans ses bras pour lui dire au revoir.",
      p("l7-7")),
  ],
  dialogue: {
    title: "Ce que le perroquet a dit",
    note:
      "Cada cliente — « chaque client ». Espera! — « Attends ! »",
    lines: [
      line("neide", "Bia! Espera! Ah, o papagaio! Ele estava no caixa ontem.", "Bia ! Attends ! Ah, le perroquet ! Hier, il était sur ma caisse."),
      line("bia", "O Pipoca! E o que ele disse?", "Pipoca ! Et qu'est-ce qu'il disait ?"),
      line("neide", "Ele repete tudo! Cada cliente: Quanto custa? Quanto custa?", "Il répète tout ! À chaque client : « Combien ça coûte ? Combien ça coûte ? »"),
      line("pipoca", "Quanto custa? Quanto custa?", "Combien ça coûte ? Combien ça coûte ?"),
      line("murzik", "E a banda? Onde eles estão?", "Et le groupe ? Où ils sont ?"),
      line("neide", "Eles foram para Curitiba. Lá faz frio!", "Ils sont partis à Curitiba. Là-bas, il fait froid !"),
      line("marcos", "Leve um casaco, Murzik! Boa sorte! Um beijo para a vovó!", "Prends un manteau, Murzik ! Bonne chance ! Un bisou à mamie de ma part !"),
    ],
    gist: choice("ptsp7-d1", "Quelle phrase Pipoca a-t-il apprise à São Paulo ?", [
      ["« Combien ça coûte ? »", true],
      ["« Encore un café ! »", false],
      ["« Je n'ai plus faim ! »", false],
    ]),
  },
  grammar: [
    g(
      "Donner un conseil : Leve!, Espera!",
      [
        "Pour demander ou conseiller, on utilise souvent cette forme : Leve um casaco! — « Prends un manteau ! », Fique à vontade! — « Mets-toi à l'aise ! » (tu te souviens de Rio ?). C'est l'impératif, comme « prends ! » en français.",
        "Dans la conversation, on entend aussi une forme qui ressemble à « il fait » : Espera! — « Attends ! », Olha! — « Regarde ! ». Pour l'instant, apprends simplement ces phrases par cœur.",
      ],
      [
        ["Leve um guarda-chuva!", "Prends un parapluie !"],
        ["Olha o museu!", "Regarde, le musée !"],
      ],
    ),
  ],
  tasks: [
    listen("ptsp7-t1", "Examen audio. Que raconte Dona Neide ?", "O papagaio estava no caixa. Ele disse: Quanto custa? Agora a banda está em Curitiba.", [
      ["Le perroquet était sur la caisse, et le groupe est maintenant à Curitiba.", true],
      ["Le perroquet a acheté un gâteau.", false],
      ["Le groupe est retourné à Paraty.", false],
    ]),
    choice("ptsp7-t2", "Comment dire « Bonne chance ! » ?", [
      ["Boa sorte!", true],
      ["Boa noite!", false],
      ["Bom apetite!", false],
    ], { skill: "words" }),
    build("ptsp7-t3", "Assemble la phrase : « Ils sont partis à Curitiba ».", ["Eles", "foram", "para", "Curitiba."]),
    missing("ptsp7-t4", "Quelle lettre manque-t-il ? (« manteau »)", "casa", "o", "c", ["c", "q", "s"]),
    speak("ptsp7-t5", "Boa sorte! Um beijo para a vovó!", "Obrigado! Tchau, até logo!", "Merci ! Salut, à bientôt !", {
      help: "Dis au revoir à voix haute — obrigado ou obrigada.",
    }),
    script("ptsp7-t6", "Souviens-toi de tout São Paulo. Termine la conversation à la boulangerie.", [
      { speaker: NEIDE, text: "Bom dia! Posso ajudar?" },
      { speaker: YOU, answer: "Bom dia! Quanto custa o pão?", options: ["Bom dia! Quanto custa o pão?", "Estou cheio!", "Vamos a pé?"] },
      { speaker: NEIDE, text: "Custa um real." },
      { speaker: YOU, answer: "É barato! Eu vou levar dois.", options: ["É barato! Eu vou levar dois.", "Está fechado.", "Eu trabalho muito."] },
      { speaker: NEIDE, text: "Aqui está o troco." },
      { speaker: YOU, answer: "Obrigado! Tchau!", options: ["Obrigado! Tchau!", "Para quem?", "Mais um pedaço?"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-saopaulo",
    itemName: "Photo de Pipoca sur la caisse",
    itemNameRu: "Foto do Pipoca na padaria",
    ru: "Oba! Mais uma foto do Pipoca!",
    en: "Hourra ! Encore une photo de Pipoca !",
    a11y: "Une photo : le perroquet vert assis sur la caisse de la boulangerie, Dona Neide riant à côté.",
    image: p("photo"),
    steps: [
      "Dona Neide montre une photo de la caméra près de la caisse.",
      "Pipoca trône fièrement sur la caisse !",
      "Elle l'imprime pour l'album.",
      "Légende : « Quanto custa? » L'album repart dans la valise.",
    ],
    bridge: "Le bus de nuit pour Curitiba. Murzik enfile la veste offerte par Marcos.",
  },
};

const story: CityStory = {
  home: {
    name: "Une chambre dans l'appartement de Marcos",
    nameRu: "O quarto no apartamento do Marcos",
    image: p("home"),
    a11y:
      "Une petite chambre dans un appartement au quinzième étage. Une grande fenêtre donne sur les gratte-ciel de São Paulo. La valise de Murzik est au milieu.",
  },
  keepsakeId: "photo-saopaulo",
  welcomeRu: "Olá, São Paulo!",
  welcomeEn: "Bonjour, São Paulo !",
  welcomeImage: p("arrival"),
  welcomeA11y:
    "Murzik et Bia descendent du bus dans une immense gare. Des foules tout autour, des gratte-ciel au loin.",
  departureImage: p("departure"),
  departureA11y: "Marcos et Dona Neide font signe au pas de la boulangerie.",
  finale: [
    {
      image: p("photo"),
      a11y: "Murzik colle dans l'album la photo de Pipoca sur la caisse.",
      lines: [
        { en: "Troisième page de l'album : Pipoca à la boulangerie de Dona Neide." },
        { ru: "Quanto custa?", en: "Combien ça coûte ?" },
        { en: "Et dans la valise de Murzik, le cadeau de Dona Lúcia attend son heure." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie.",
      lines: [
        { ru: "São Paulo completo!", en: "São Paulo terminé !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Marcos fait un signe d'adieu.",
      lines: [
        { ru: "Tchau, pai! Tchau, Dona Neide!", en: "Salut, papa ! Salut, Dona Neide !" },
        { ru: "Próxima parada: Curitiba!", en: "Prochain arrêt : Curitiba !" },
      ],
    },
    {
      image: p("bus"),
      a11y: "Un bus de nuit roule vers le sud, il pleut sur les vitres.",
      lines: [{ ru: "São Paulo → Curitiba", en: "São Paulo → Curitiba" }],
    },
    {
      image: pic("pt/curitiba/arrival"),
      a11y:
        "Matin à Curitiba : ciel gris, gens en veste et en écharpe, une immense serre de verre dans un parc.",
      lines: [
        { ru: "Olá, Curitiba!", en: "Bonjour, Curitiba !" },
        { ru: "Brrr! Que frio!", en: "Brrr ! Quel froid !" },
      ],
    },
  ],
};

export const ptSaoPauloFr = {
  id: "pt-saopaulo",
  name: "São Paulo",
  namePt: "São Paulo",
  lessons: [sp1, sp2, sp3, sp4, sp5, sp6, sp7],
  story,
};
