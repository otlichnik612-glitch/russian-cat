import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { PAIRS, YOU, build, choice, fill, g, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Форталеза · «Здоровье» · Жаркий север. Мурзик обгорел на солнце, доктор Паулу, части тела, аптека, прошедшее время: что было вчера. Пипока выучил «Estou com calor!». */

const p = (name: string) => pic(`pt/fortaleza/${name}`);
const PAULO = "Dr Paulo";

const fo1: Lesson = {
  id: "pt-a1-fortaleza-1",
  level: "A1",
  cityId: "pt-fortaleza",
  number: 1,
  title: "Estou com dor — J'ai mal",
  minutes: 7,
  goals: [
    "Dire ce qui te fait mal",
    "Demander « qu'est-ce que tu as ? »",
    "Souhaiter un bon rétablissement",
  ],
  vocabNote:
    "Estou com dor de cabeça — « j'ai mal à la tête », littéralement « je suis avec douleur de tête ». Comme estou com frio, c'est la même forme pour tout le monde.",
  vocab: [
    v("ptfo1-1", "O que você tem?", "Qu'est-ce que tu as ?",
      "Bia regarde Murzik, tout pâle, avec inquiétude.",
      p("l1-1")),
    v("ptfo1-2", "Estou com dor de cabeça.", "J'ai mal à la tête.",
      "Murzik se tient la tête à deux pattes.",
      p("l1-2")),
    v("ptfo1-3", "Estou com dor de barriga.", "J'ai mal au ventre.",
      "Murzik se tient le ventre.",
      p("l1-3")),
    v("ptfo1-4", "Dói aqui.", "Ça fait mal juste ici.",
      "Murzik montre son épaule de la patte.",
      p("l1-4")),
    v("ptfo1-5", "Estou com febre.", "J'ai de la fièvre.",
      "Un thermomètre qui affiche 38.",
      p("l1-5")),
    v("ptfo1-6", "Estou doente.", "Je suis malade.",
      "Murzik est couché sous une couverture, des mouchoirs à côté de lui.",
      p("l1-6")),
    v("ptfo1-7", "Melhoras!", "Guéris vite !",
      "Bia apporte un verre d'eau à Murzik en souriant.",
      p("l1-7")),
  ],
  dialogue: {
    title: "Une sale matinée",
    note:
      "Vermelho como um camarão — « rouge comme une crevette ». Queimado de sol — « brûlé par le soleil ».",
    lines: [
      line("bia", "Murzik, o que você tem? Você está vermelho como um camarão!", "Murzik, qu'est-ce que tu as ? Tu es rouge comme une crevette !"),
      line("murzik", "Estou com dor de cabeça… e dói aqui, e aqui.", "J'ai mal à la tête… et ça fait mal ici, et là."),
      line("bia", "Você está com febre?", "Tu as de la fièvre ?"),
      line("murzik", "Acho que sim. Estou doente…", "Je crois que oui. Je suis malade…"),
      line("bia", "Você está queimado de sol! Vamos ao médico.", "Tu as pris un coup de soleil ! On va chez le médecin."),
    ],
    gist: choice("ptfo1-d1", "Qu'est-il arrivé à Murzik ?", [
      ["Il a pris un coup de soleil.", true],
      ["Il est tombé.", false],
      ["Un chien l'a mordu.", false],
    ]),
  },
  grammar: [
    g(
      "Estou com dor de… et dói",
      [
        "« J'ai mal à… » — estou com dor de + partie du corps sans article : estou com dor de cabeça, estou com dor de barriga. En français, l'article reste — « mal À LA tête » ; en portugais, il tombe après de.",
        "Plus simple encore : Dói aqui — « ça fait mal ici », Dói a perna — « la jambe me fait mal ». Dói vient de doer, « faire mal ».",
      ],
      [
        ["Ela está com dor de cabeça.", "Elle a mal à la tête."],
        ["Dói muito!", "Ça fait très mal !"],
      ],
    ),
  ],
  tasks: [
    choice("ptfo1-t1", "Comment dit-on « J'ai mal au ventre » ?", [
      ["Estou com dor de barriga.", true],
      ["Sou dor de barriga.", false],
      ["Estou com a barriga dor.", false],
    ], { skill: "grammar" }),
    listen("ptfo1-t2", "Écoute. Qu'est-ce qui fait mal ?", "Estou com dor de cabeça.", [
      ["La tête.", true],
      ["Le ventre.", false],
      ["La jambe.", false],
    ]),
    match("ptfo1-t3", PAIRS, [
      ["a dor", "la douleur"],
      ["a febre", "la fièvre"],
      ["doente", "malade"],
      ["Melhoras!", "Guéris vite !"],
    ], { skill: "words" }),
    spell("ptfo1-t4", "Reconstitue le mot « tête ».", "cabeça"),
    speak("ptfo1-t5", "O que você tem?", "Estou com dor de cabeça e estou com febre.", "J'ai mal à la tête et j'ai de la fièvre.", {
      help: "Dis à voix haute ce qui te fait mal.",
    }),
    choice("ptfo1-t6", "Comment dit-on « C'était vraiment génial ! » ?", [
      ["Foi muito bom!", true],
      ["Vai muito bom!", false],
      ["Está muito bem!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "icepack",
    itemName: "Compresse froide",
    itemNameRu: "Bolsa de gelo",
    ru: "Oba! Uma bolsa de gelo!",
    en: "Hourra ! Une compresse froide !",
    a11y: "Une compresse froide bleue en forme de nuage est posée sur la table de nuit.",
    image: p("icepack"),
    steps: [
      "Le patron de l'auberge apporte une compresse froide.",
      "« Põe na cabeça ! » — « Pose-la sur ta tête ! »",
      "Murzik se sent tout de suite mieux.",
      "La compresse est posée sur la table de nuit.",
    ],
    bridge: "Bia emmène Murzik chez le médecin. Le médecin doit l'examiner.",
  },
};

const fo2: Lesson = {
  id: "pt-a1-fortaleza-2",
  level: "A1",
  cityId: "pt-fortaleza",
  number: 2,
  title: "O corpo — Le corps",
  minutes: 7,
  goals: [
    "Nommer les parties du corps",
    "Dire « les pieds me font mal »",
    "Montrer où ça fait mal",
  ],
  vocabNote:
    "Pour les parties du corps, on utilise l'article et non « mon » : Dói a perna — « la jambe me fait mal » (et non « ma jambe »). Exactement comme en français : « j'ai mal À LA jambe » !",
  vocab: [
    v("ptfo2-1", "a cabeça e o braço", "la tête et le bras",
      "Murzik montre sa tête et son bras.",
      p("l2-1")),
    v("ptfo2-2", "a mão", "la main",
      "La patte ouverte de Murzik.",
      p("l2-2")),
    v("ptfo2-3", "a perna e o pé", "la jambe et le pied",
      "Murzik tient sur une jambe et montre son pied.",
      p("l2-3")),
    v("ptfo2-4", "a barriga", "le ventre",
      "Murzik caresse son ventre tout rond.",
      p("l2-4")),
    v("ptfo2-5", "as costas", "le dos",
      "Murzik se tient le dos, comme un petit vieux.",
      p("l2-5")),
    v("ptfo2-6", "Doem os pés.", "Les pieds me font mal.",
      "Murzik enlève ses bottines ; ses pattes sont toutes rouges.",
      p("l2-6")),
    v("ptfo2-7", "Onde dói?", "Où est-ce que ça fait mal ?",
      "Un médecin en blouse blanche regarde Murzik avec gentillesse.",
      p("l2-7")),
  ],
  dialogue: {
    title: "Chez le médecin",
    note:
      "Areia quente — « sable brûlant ». Andou descalço — « a marché pieds nus ».",
    lines: [
      line("paulo", "Bom dia! Eu sou o doutor Paulo. Onde dói?", "Bonjour ! Je suis le docteur Paulo. Où est-ce que ça fait mal ?"),
      line("murzik", "Dói a cabeça, os braços, as costas…", "La tête me fait mal, les bras, le dos…"),
      line("paulo", "E as pernas?", "Et les jambes ?"),
      line("murzik", "As pernas não. Mas doem os pés!", "Les jambes, non. Mais les pieds me font mal !"),
      line("paulo", "Você andou descalço na areia quente?", "Vous avez marché pieds nus sur le sable brûlant ?"),
      line("murzik", "Andei… o dia todo.", "Oui… toute la journée."),
    ],
    gist: choice("ptfo2-d1", "Pourquoi les pieds de Murzik lui font-ils mal ?", [
      ["Il a marché pieds nus sur le sable brûlant.", true],
      ["Il a beaucoup couru.", false],
      ["Il est tombé d'une planche.", false],
    ]),
  },
  grammar: [
    g(
      "Dói et doem",
      [
        "Une seule chose fait mal → dói : dói a cabeça. Plusieurs → doem : doem os pés. Comme en français : « ça fait mal » / « ça font mal » (ça se dit, même si ça ne s'écrit pas !).",
        "Les mots en -ão ont des pluriels variés : a mão — as mãos, o irmão — os irmãos, mais o pão — os pães. Mieux vaut les mémoriser au fur et à mesure.",
      ],
      [
        ["Dói o braço.", "Le bras me fait mal."],
        ["Doem as mãos.", "Les mains me font mal."],
      ],
    ),
  ],
  tasks: [
    choice("ptfo2-t1", "Comment dit-on « Les jambes me font mal » ? (as pernas)", [
      ["Doem as pernas.", true],
      ["Dói as pernas.", false],
      ["Doem a perna.", false],
    ], { skill: "grammar" }),
    listen("ptfo2-t2", "Écoute. Que demande le médecin ?", "Onde dói?", [
      ["Où est-ce que ça fait mal ?", true],
      ["Qu'avez-vous mangé ?", false],
      ["Quel âge avez-vous ?", false],
    ]),
    match("ptfo2-t3", PAIRS, [
      ["a mão", "la main"],
      ["o pé", "le pied"],
      ["as costas", "le dos"],
      ["a barriga", "le ventre"],
    ], { skill: "words" }),
    missing("ptfo2-t4", "Quelle lettre manque ? (« jambe »)", "per", "a", "n", ["n", "m", "nh"]),
    speak("ptfo2-t5", "Onde dói?", "Dói a cabeça e doem os pés.", "La tête me fait mal et les pieds me font mal.", {
      help: "Montre et dis à voix haute où ça fait mal.",
    }),
    choice("ptfo2-t6", "Comment dit-on « J'ai de la fièvre » ?", [
      ["Estou com febre.", true],
      ["Sou febre.", false],
      ["Estou febre.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "handfan",
    itemName: "Éventail",
    itemNameRu: "Leque",
    ru: "Oba! Um leque!",
    en: "Hourra ! Un éventail !",
    a11y: "Un éventail de paille ouvert, décoré de voiliers dessinés, est posé sur le lit.",
    image: p("fan"),
    steps: [
      "Dans la salle d'attente du médecin, il fait très chaud.",
      "Une infirmière donne un éventail de paille à Murzik.",
      "« Aqui em Fortaleza é sempre verão ! » — « À Fortaleza, c'est toujours l'été ! »",
      "L'éventail est posé sur le lit.",
    ],
    bridge: "Le docteur Paulo note sur un papier ce qu'il faut faire.",
  },
};

const fo3: Lesson = {
  id: "pt-a1-fortaleza-3",
  level: "A1",
  cityId: "pt-fortaleza",
  number: 3,
  title: "O conselho do médico — Le conseil du médecin",
  minutes: 7,
  goals: [
    "Comprendre les conseils d'un médecin",
    "Dire à quelle fréquence prendre un médicament",
    "Demander si c'est grave",
  ],
  vocabNote:
    "Grave — « grave » (d'une maladie) — le même mot qu'en français ! Não é grave — « ce n'est pas grave ».",
  vocab: [
    v("ptfo3-1", "Abra a boca.", "Ouvrez la bouche.",
      "Murzik ouvre grand la bouche, le médecin l'éclaire avec une petite lampe.",
      p("l3-1")),
    v("ptfo3-2", "É grave?", "C'est grave ?",
      "Murzik regarde le médecin, inquiet.",
      p("l3-2")),
    v("ptfo3-3", "Não é grave.", "Ce n'est pas grave.",
      "Le médecin sourit pour le rassurer.",
      p("l3-3")),
    v("ptfo3-4", "Tome este remédio.", "Prenez ce médicament.",
      "Le médecin tend un petit flacon.",
      p("l3-4")),
    v("ptfo3-5", "Três vezes por dia.", "Trois fois par jour.",
      "Trois ronds sur une feuille : matin, midi, soir.",
      p("l3-5")),
    v("ptfo3-6", "Beba muita água.", "Buvez beaucoup d'eau.",
      "Une grande bouteille d'eau à côté de Murzik.",
      p("l3-6")),
    v("ptfo3-7", "Descanse e fique na sombra.", "Reposez-vous et restez à l'ombre.",
      "Murzik est allongé dans un hamac sous un palmier.",
      p("l3-7")),
  ],
  dialogue: {
    title: "Ce que le médecin a dit",
    note:
      "Insolação — « insolation, coup de chaleur ». Pomada — « pommade » — le même mot qu'en français !",
    lines: [
      line("paulo", "Abra a boca. Hmm… E a febre?", "Ouvrez la bouche. Hmm… Et la fièvre ?"),
      line("murzik", "Trinta e oito. Doutor, é grave?", "Trente-huit. Docteur, c'est grave ?"),
      line("paulo", "Não é grave. É uma insolação. Você tomou muito sol.", "Ce n'est pas grave. C'est une insolation. Vous avez pris trop de soleil."),
      line("paulo", "Tome este remédio três vezes por dia. E passe esta pomada.", "Prenez ce médicament trois fois par jour. Et appliquez cette pommade."),
      line("paulo", "Beba muita água. Descanse e fique na sombra!", "Buvez beaucoup d'eau. Reposez-vous et restez à l'ombre !"),
      line("murzik", "Obrigado, doutor!", "Merci, docteur !"),
    ],
    gist: choice("ptfo3-d1", "Qu'a Murzik ?", [
      ["Une insolation.", true],
      ["Un rhume.", false],
      ["Une fracture.", false],
    ]),
  },
  grammar: [
    g(
      "Les conseils : tome, beba, descanse",
      [
        "Les conseils et demandes polis : les verbes en -ar prennent -e (tome, descanse, passe), les verbes en -er et -ir prennent -a (beba, abra). C'est ainsi que parlent les médecins, les vendeurs, les guides.",
        "À quelle fréquence : uma vez por dia — « une fois par jour », duas vezes por dia — « deux fois par jour ». Vez = « fois », parfaitement identique au français !",
      ],
      [
        ["Tome o remédio duas vezes por dia.", "Prenez le médicament deux fois par jour."],
        ["Abra a janela, por favor.", "Ouvrez la fenêtre, s'il vous plaît."],
      ],
    ),
  ],
  tasks: [
    choice("ptfo3-t1", "Comment un médecin dit-il « Buvez de l'eau » ?", [
      ["Beba água.", true],
      ["Bebe água ontem.", false],
      ["Bebo água.", false],
    ], { skill: "grammar" }),
    listen("ptfo3-t2", "Écoute. Combien de fois par jour ?", "Três vezes por dia.", [
      ["Trois fois.", true],
      ["Une fois.", false],
      ["Deux fois.", false],
    ]),
    match("ptfo3-t3", PAIRS, [
      ["o remédio", "le médicament"],
      ["grave", "grave"],
      ["a sombra", "l'ombre"],
      ["descansar", "se reposer"],
    ], { skill: "words" }),
    spell("ptfo3-t4", "Reconstitue le mot « médicament ».", "remédio"),
    speak("ptfo3-t5", "Doutor, é grave?", "Não é grave. Beba muita água e descanse.", "Ce n'est pas grave. Buvez beaucoup d'eau et reposez-vous.", {
      help: "Réponds à voix haute, comme si tu étais le médecin.",
    }),
    choice("ptfo3-t6", "Comment demander « Où est-ce que ça fait mal ? »", [
      ["Onde dói?", true],
      ["Onde é?", false],
      ["Quem dói?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "firstaid",
    itemName: "Trousse de secours",
    itemNameRu: "Kit de primeiros socorros",
    ru: "Oba! Um kit de primeiros socorros!",
    en: "Hourra ! Une trousse de secours !",
    a11y: "Une petite boîte blanche à croix rouge sur l'étagère.",
    image: p("firstaid"),
    steps: [
      "Le docteur Paulo donne une petite trousse de secours à Murzik.",
      "« Para a viagem ! » — « Pour le voyage ! »",
      "Dedans : des pansements, de la crème solaire et une pommade.",
      "La trousse trône sur l'étagère.",
    ],
    bridge: "La pommade se termine. Bia va à la pharmacie.",
  },
};

const fo4: Lesson = {
  id: "pt-a1-fortaleza-4",
  level: "A1",
  cityId: "pt-fortaleza",
  number: 4,
  title: "Na farmácia — À la pharmacie",
  minutes: 7,
  goals: [
    "Demander un médicament à la pharmacie",
    "Dire « contre, pour… » : para",
    "Demander s'il faut une ordonnance",
  ],
  vocabNote:
    "Receita — à la fois « ordonnance » du médecin et « recette » de cuisine, comme le mot français ! Comprimido — « comprimé », encore le même mot.",
  vocab: [
    v("ptfo4-1", "Eu preciso de um remédio para dor de cabeça.", "Il me faut un médicament contre le mal de tête.",
      "Bia au comptoir de la pharmacie.",
      p("l4-1")),
    v("ptfo4-2", "Precisa de receita?", "Il faut une ordonnance ?",
      "Bia tient le papier du médecin.",
      p("l4-2")),
    v("ptfo4-3", "Não precisa.", "Non, pas besoin.",
      "La pharmacienne secoue la tête.",
      p("l4-3")),
    v("ptfo4-4", "Quantos comprimidos?", "Combien de comprimés ?",
      "Des comprimés dans la paume d'une main.",
      p("l4-4")),
    v("ptfo4-5", "um por dia", "un par jour",
      "Un comprimé et un petit soleil.",
      p("l4-5")),
    v("ptfo4-6", "um curativo", "un pansement",
      "Un pansement en forme d'étoile.",
      p("l4-6")),
    v("ptfo4-7", "Melhorou?", "Ça va mieux ?",
      "Bia interroge Murzik dans son hamac, pleine d'attention.",
      p("l4-7")),
  ],
  dialogue: {
    title: "À la pharmacie",
    note:
      "Queimadura — « brûlure ». Muito melhor — « beaucoup mieux ».",
    lines: [
      line("bia", "Boa tarde! Eu preciso de uma pomada para queimadura de sol.", "Bonjour ! Il me faut une pommade contre les coups de soleil."),
      line("pharmacist", "Aqui está. E mais alguma coisa?", "Voilà. Et avec ceci ?"),
      line("bia", "Um remédio para dor de cabeça. Precisa de receita?", "Un médicament contre le mal de tête. Il faut une ordonnance ?"),
      line("pharmacist", "Não precisa. Um comprimido por dia.", "Pas besoin. Un comprimé par jour."),
      line("bia", "E um curativo, por favor. Para o pé dele.", "Et un pansement, s'il vous plaît. Pour sa patte."),
      line("bia", "Murzik, melhorou?", "Murzik, ça va mieux ?"),
      line("murzik", "Melhorou! Muito melhor!", "Oui ! Beaucoup mieux !"),
    ],
    gist: choice("ptfo4-d1", "Qu'achète Bia ?", [
      ["Une pommade, des comprimés et un pansement.", true],
      ["Seulement de l'eau.", false],
      ["De la crème anti-moustiques.", false],
    ]),
  },
  grammar: [
    g(
      "Para — « pour, contre »",
      [
        "Para indique à quoi sert une chose : um remédio para dor de cabeça — « un médicament contre le mal de tête » (littéralement « pour »), uma pomada para queimadura — « une pommade contre les brûlures ».",
        "Et pour qui : para o Murzik, para mim — « pour moi », para você — « pour toi ». Para = « pour », tout simplement.",
      ],
      [
        ["Este remédio é para febre.", "Ce médicament est contre la fièvre."],
        ["O curativo é para mim.", "Le pansement est pour moi."],
      ],
    ),
  ],
  tasks: [
    choice("ptfo4-t1", "Comment dit-on « un médicament contre le mal de tête » ?", [
      ["um remédio para dor de cabeça", true],
      ["um remédio de dor para cabeça", false],
      ["um remédio com dor de cabeça", false],
    ], { skill: "grammar" }),
    listen("ptfo4-t2", "Écoute. Faut-il une ordonnance ?", "Não precisa de receita.", [
      ["Non.", true],
      ["Oui.", false],
      ["Ils ne savent pas.", false],
    ]),
    match("ptfo4-t3", PAIRS, [
      ["a farmácia", "la pharmacie"],
      ["a receita", "l'ordonnance"],
      ["o comprimido", "le comprimé"],
      ["o curativo", "le pansement"],
    ], { skill: "words" }),
    missing("ptfo4-t4", "Quelle lettre manque ? (« pharmacie »)", "farm", "cia", "á", ["á", "a", "â"]),
    speak("ptfo4-t5", "Boa tarde! Posso ajudar?", "Eu preciso de um remédio para dor de cabeça.", "Il me faut un médicament contre le mal de tête.", {
      help: "Demande un médicament à la pharmacie, à voix haute.",
    }),
    choice("ptfo4-t6", "Le médecin dit : Abra a boca. Que faut-il faire ?", [
      ["Ouvrir la bouche.", true],
      ["Fermer les yeux.", false],
      ["Boire de l'eau.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sandbottle",
    itemName: "Bouteille de sable coloré",
    itemNameRu: "Garrafinha de areia",
    ru: "Oba! Uma garrafinha de areia!",
    en: "Hourra ! Une bouteille de sable !",
    a11y: "Une petite bouteille en verre remplie de couches de sable coloré qui dessinent des dunes et un bateau.",
    image: p("sandbottle"),
    steps: [
      "À côté de la pharmacie, un artisan fait des tableaux de sable.",
      "Couche après couche, des dunes et un bateau apparaissent dans une bouteille.",
      "« Melhoras ! » dit-il en offrant la bouteille à Murzik.",
      "La bouteille trône sur le rebord de la fenêtre.",
    ],
    bridge: "Murzik va mieux. Le soir, Bia demande : « O que você fez ontem ? Conta tudo ! »",
  },
};

const fo5: Lesson = {
  id: "pt-a1-fortaleza-5",
  level: "A1",
  cityId: "pt-fortaleza",
  number: 5,
  title: "Ontem eu… — Hier, j'ai…",
  minutes: 7,
  goals: [
    "Raconter ce que tu as fait hier",
    "Le passé des verbes en -ar",
    "Avouer : Eu esqueci !",
  ],
  vocabNote:
    "Le passé portugais ne change pas selon le genre : fiquei — « je suis resté » comme « je suis restée ». Pratique !",
  vocab: [
    v("ptfo5-1", "Ontem eu fiquei na praia.", "Hier, je suis resté(e) à la plage.",
      "La journée d'hier : Murzik sur la plage sous un soleil de plomb.",
      p("l5-1")),
    v("ptfo5-2", "Eu tomei muito sol.", "J'ai pris trop de soleil.",
      "Murzik prend un bain de soleil, pattes écartées, sans parasol.",
      p("l5-2")),
    v("ptfo5-3", "Eu não passei protetor.", "Je n'ai pas mis de crème solaire.",
      "Le tube de crème reste fermé dans le sac.",
      p("l5-3")),
    v("ptfo5-4", "Eu esqueci!", "J'ai oublié !",
      "Murzik se tape le front avec la patte.",
      p("l5-4")),
    v("ptfo5-5", "Você comprou água?", "Tu as acheté de l'eau ?",
      "Bia brandit une bouteille vide.",
      p("l5-5")),
    v("ptfo5-6", "Nós andamos muito.", "Nous avons beaucoup marché.",
      "Deux rangées d'empreintes de pattes et de pieds le long d'une grande plage.",
      p("l5-6")),
    v("ptfo5-7", "Eles chegaram ontem.", "Ils sont arrivés hier.",
      "Des touristes avec des valises à l'entrée de l'auberge.",
      p("l5-7")),
  ],
  dialogue: {
    title: "Ce qui s'est passé hier",
    note:
      "Conta tudo ! — « Raconte tout ! ». Por isso — « c'est pour ça ».",
    lines: [
      line("bia", "Murzik, conta tudo! O que você fez ontem?", "Murzik, raconte tout ! Qu'est-ce que tu as fait hier ?"),
      line("murzik", "Ontem eu fiquei na praia. O dia todo.", "Hier, je suis resté à la plage. Toute la journée."),
      line("bia", "E você passou protetor?", "Et tu as mis de la crème solaire ?"),
      line("murzik", "Não… Eu esqueci! Eu tomei muito sol.", "Non… J'ai oublié ! J'ai pris trop de soleil."),
      line("bia", "E você comprou água?", "Et tu as acheté de l'eau ?"),
      line("murzik", "Não comprei. Nós andamos muito e eu esqueci de tudo!", "Non. Nous avons beaucoup marché et j'ai tout oublié !"),
      line("bia", "Por isso você está doente!", "C'est pour ça que tu es malade !"),
    ],
    gist: choice("ptfo5-d1", "Qu'est-ce que Murzik a oublié de faire hier ?", [
      ["Mettre de la crème et acheter de l'eau.", true],
      ["Appeler Dona Lúcia.", false],
      ["Déjeuner.", false],
    ]),
  },
  grammar: [
    g(
      "Le passé : les verbes en -ar",
      [
        "Les terminaisons : eu -ei (fiquei, tomei, comprei), você / ele -ou (ficou, tomou, comprou), nós -amos (ficamos), eles -aram (ficaram). Tu en as déjà rencontré : andei, gritou, salvou.",
        "Ce passé unique couvre à la fois « j'ai fait » et « je faisais (hier) » : Ontem eu fiquei na praia — « hier, je suis resté à la plage ». C'est le passé composé portugais : une seule forme, sans auxiliaire !",
      ],
      [
        ["Ontem eu comprei um chapéu.", "Hier, j'ai acheté un chapeau."],
        ["Eles chegaram de manhã.", "Ils sont arrivés le matin."],
      ],
    ),
  ],
  tasks: [
    choice("ptfo5-t1", "Comment dit-on « Hier, j'ai acheté de l'eau » ?", [
      ["Ontem eu comprei água.", true],
      ["Ontem eu comprou água.", false],
      ["Ontem eu compro água.", false],
    ], { skill: "grammar" }),
    listen("ptfo5-t2", "Écoute. Où était la personne hier ?", "Ontem eu fiquei em casa.", [
      ["À la maison.", true],
      ["À la plage.", false],
      ["Chez le médecin.", false],
    ]),
    match("ptfo5-t3", PAIRS, [
      ["fiquei", "je suis resté(e)"],
      ["comprei", "j'ai acheté"],
      ["esqueci", "j'ai oublié"],
      ["chegaram", "ils sont arrivés"],
    ], { skill: "words" }),
    spell("ptfo5-t4", "Reconstitue le mot « hier ».", "ontem"),
    speak("ptfo5-t5", "O que você fez ontem?", "Ontem eu fiquei em casa e estudei português.", "Hier, je suis resté(e) à la maison et j'ai étudié le portugais.", {
      help: "Raconte à voix haute ce que tu as fait hier.",
    }),
    choice("ptfo5-t6", "Comment demander à la pharmacie « Il faut une ordonnance ? »", [
      ["Precisa de receita?", true],
      ["Tem receita de bolo?", false],
      ["Quantos comprimidos?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "sunhat",
    itemName: "Chapeau de soleil",
    itemNameRu: "Chapéu de sol",
    ru: "Oba! Um chapéu de sol!",
    en: "Hourra ! Un chapeau de soleil !",
    a11y: "Un chapeau blanc à larges bords est accroché à une patère.",
    image: p("sunhat"),
    steps: [
      "Bia achète un chapeau à larges bords à Murzik.",
      "« Sem chapéu, nada de praia ! » — « Pas de chapeau, pas de plage ! »",
      "Murzik hoche docilement la tête.",
      "Le chapeau est accroché près de la porte.",
    ],
    bridge: "Le soir à l'auberge, tout le monde raconte ce qu'il a mangé et où il est allé.",
  },
};

const fo6: Lesson = {
  id: "pt-a1-fortaleza-6",
  level: "A1",
  cityId: "pt-fortaleza",
  number: 6,
  title: "Nós comemos, eu dormi — Nous avons mangé, j'ai dormi",
  minutes: 7,
  goals: [
    "Le passé des verbes en -er et -ir",
    "Demander si quelqu'un a bien dormi",
    "Raconter la soirée d'hier",
  ],
  vocabNote:
    "Jangada — un radeau à voile triangulaire, la barque des pêcheurs du Ceará. Água de coco — l'eau de coco, qu'on boit directement dans la noix.",
  vocab: [
    v("ptfo6-1", "Nós comemos peixe.", "Nous avons mangé du poisson.",
      "Une assiette de poisson frit avec du riz sur une table en bord de mer.",
      p("l6-1")),
    v("ptfo6-2", "Eu bebi água de coco.", "J'ai bu de l'eau de coco.",
      "Murzik boit à la paille directement dans une noix de coco verte.",
      p("l6-2")),
    v("ptfo6-3", "Você dormiu bem?", "Tu as bien dormi ?",
      "Bia passe la tête dans la chambre le matin.",
      p("l6-3")),
    v("ptfo6-4", "Eu dormi mal.", "J'ai mal dormi.",
      "Murzik décoiffé, avec des cernes sous les yeux.",
      p("l6-4")),
    v("ptfo6-5", "Ele abriu a janela.", "Il a ouvert la fenêtre.",
      "Murzik ouvre la fenêtre en grand, laissant entrer la brise marine.",
      p("l6-5")),
    v("ptfo6-6", "Eles saíram cedo.", "Ils sont partis tôt.",
      "Des pêcheurs poussent leurs radeaux vers la mer à l'aube.",
      p("l6-6")),
    v("ptfo6-7", "Eu vi as jangadas.", "J'ai vu les radeaux de pêche.",
      "Des voiles blanches triangulaires à l'horizon.",
      p("l6-7")),
  ],
  dialogue: {
    title: "Le lendemain de la maladie",
    note:
      "Calor — « la chaleur ». De madrugada — « à l'aube, très tôt le matin ». Pescadores — « les pêcheurs ».",
    lines: [
      line("bia", "Bom dia! Você dormiu bem?", "Bonjour ! Tu as bien dormi ?"),
      line("murzik", "Eu dormi mal. Calor! Eu abri a janela de madrugada.", "Mal. Il faisait chaud ! J'ai ouvert la fenêtre à l'aube."),
      line("murzik", "E eu vi as jangadas! Os pescadores saíram cedo.", "Et j'ai vu les radeaux de pêche ! Les pêcheurs sont partis tôt."),
      line("bia", "E ontem à noite? Você comeu?", "Et hier soir ? Tu as mangé ?"),
      line("murzik", "Comi! Nós comemos peixe com o Pipoca… não, com o pessoal do hostel.", "Oui ! Nous avons mangé du poisson avec Pipoca… enfin, avec les gens de l'auberge."),
      line("murzik", "E eu bebi muita água de coco, como o doutor falou.", "Et j'ai bu beaucoup d'eau de coco, comme l'a dit le docteur."),
    ],
    gist: choice("ptfo6-d1", "Pourquoi Murzik a-t-il mal dormi ?", [
      ["Il faisait chaud.", true],
      ["Il y avait du bruit.", false],
      ["Il avait mal à la tête.", false],
    ]),
  },
  grammar: [
    g(
      "Le passé : les verbes en -er et -ir",
      [
        "En -er : eu comi, você / ele comeu, nós comemos, eles comeram. En -ir : eu dormi, você / ele dormiu, nós dormimos, eles dormiram. Dans les deux cas, « je » prend -i.",
        "Les irréguliers : ver — eu vi, ele viu ; fazer — eu fiz, ele fez ; ir et ser — eu fui, ele foi. Tu les croises souvent, retiens-les petit à petit.",
      ],
      [
        ["Eu comi muito ontem.", "Hier, j'ai beaucoup mangé."],
        ["Ela abriu a porta.", "Elle a ouvert la porte."],
      ],
    ),
  ],
  tasks: [
    choice("ptfo6-t1", "Comment dit-on « Hier, j'ai mal dormi » ?", [
      ["Ontem eu dormi mal.", true],
      ["Ontem eu dormiu mal.", false],
      ["Ontem eu durmo mal.", false],
    ], { skill: "grammar" }),
    listen("ptfo6-t2", "Écoute. Qu'a bu la personne ?", "Eu bebi água de coco.", [
      ["De l'eau de coco.", true],
      ["Du jus de mangue.", false],
      ["Du café.", false],
    ]),
    match("ptfo6-t3", PAIRS, [
      ["comi", "j'ai mangé"],
      ["bebi", "j'ai bu"],
      ["dormi", "j'ai dormi"],
      ["vi", "j'ai vu"],
    ], { skill: "words" }),
    missing("ptfo6-t4", "Quelle lettre manque ? (« radeau »)", "jan", "ada", "g", ["g", "j", "c"]),
    speak("ptfo6-t5", "Você dormiu bem?", "Dormi bem, obrigado! E você?", "Bien dormi, merci ! Et toi ?", {
      help: "Réponds à voix haute. Obrigado ou obrigada, les deux marchent.",
    }),
    choice("ptfo6-t6", "Comment dit-on « J'ai oublié ! » ?", [
      ["Eu esqueci!", true],
      ["Eu esqueço ontem!", false],
      ["Eu esqueceu!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "jangada",
    itemName: "Petit radeau à voile",
    itemNameRu: "Jangadinha",
    ru: "Oba! Uma jangadinha!",
    en: "Hourra ! Un petit radeau !",
    a11y: "Un petit radeau en bois à voile triangulaire blanche trône sur l'étagère.",
    image: p("jangada"),
    steps: [
      "Le matin sur la plage, un vieux pêcheur répare ses filets.",
      "Il offre un petit radeau à Murzik.",
      "« Igual ao meu ! » — « Tout pareil que le mien ! »",
      "Le radeau trône sur l'étagère.",
    ],
    bridge: "Le docteur Paulo passe prendre des nouvelles de Murzik. Et il a quelque chose de très intéressant à raconter.",
  },
};

const fo7: Lesson = {
  id: "pt-a1-fortaleza-7",
  level: "A1",
  cityId: "pt-fortaleza",
  number: 7,
  title: "Estou com calor! — J'ai trop chaud !",
  minutes: 8,
  goals: [
    "Comprendre ce qu'on raconte sur Pipoca",
    "Dire « prends soin de toi »",
    "Réviser tous les mots de Fortaleza",
  ],
  vocabNote:
    "Estou com calor — « j'ai chaud » (comme estou com frio). En français aussi, on « a » chaud et on « a » froid — le portugais marche pareil ! Et faz calor — « il fait chaud (dehors) ».",
  vocab: [
    v("ptfo7-1", "Estou com calor!", "J'ai trop chaud !",
      "Le perroquet vert, bec ouvert, est assis devant le souffle d'un ventilateur.",
      p("l7-1")),
    v("ptfo7-2", "Ele tomou sol demais.", "Il a pris beaucoup trop de soleil.",
      "Le perroquet sur le toit d'un bus sous un soleil de plomb.",
      p("l7-2")),
    v("ptfo7-3", "Eu dei água para ele.", "Je lui ai donné de l'eau.",
      "Le docteur Paulo fait boire le perroquet à la petite cuillère.",
      p("l7-3")),
    v("ptfo7-4", "Agora ele está bem.", "Maintenant, il va bien.",
      "Un perroquet plein d'entrain qui bat des ailes.",
      p("l7-4")),
    v("ptfo7-5", "Eles foram para Manaus.", "Ils sont partis pour Manaus.",
      "Une carte : une flèche loin vers l'ouest, vers les forêts vertes d'Amazonie.",
      p("l7-5")),
    v("ptfo7-6", "a floresta amazônica", "la forêt amazonienne",
      "Une petite image : une forêt verte à perte de vue et un large fleuve.",
      p("l7-6")),
    v("ptfo7-7", "Cuide-se!", "Prends soin de toi !",
      "Le docteur Paulo serre la patte de Murzik à la porte.",
      p("l7-7")),
  ],
  dialogue: {
    title: "Ce que le perroquet a dit",
    note:
      "Paciente — « patient ». Igualzinho — « tout pareil, exactement le même ». Cuide-se — « prenez soin de vous ».",
    lines: [
      line("paulo", "Murzik, você não é o meu primeiro paciente queimado de sol!", "Murzik, tu n'es pas mon premier patient brûlé par le soleil !"),
      line("murzik", "Como assim?", "Comment ça ?"),
      line("paulo", "Ontem a banda trouxe um papagaio verde. Ele tomou sol demais!", "Hier, le groupe a amené un perroquet vert. Il avait pris beaucoup trop de soleil !"),
      line("bia", "O Pipoca! E o que ele disse?", "Pipoca ! Et qu'est-ce qu'il disait ?"),
      line("paulo", "Ele disse: Estou com calor! Estou com calor! Igualzinho a você, Murzik!", "Il disait : « J'ai chaud ! J'ai chaud ! » Tout pareil que toi, Murzik !"),
      line("paulo", "Eu dei água para ele. Agora ele está bem. Eles foram para Manaus.", "Je lui ai donné de l'eau. Maintenant il va bien. Ils sont partis pour Manaus."),
      line("murzik", "Obrigado, doutor! — Cuide-se, Murzik!", "Merci, docteur ! — Prends soin de toi, Murzik !"),
    ],
    gist: choice("ptfo7-d1", "Quelle phrase Pipoca a-t-il apprise à Fortaleza ?", [
      ["« J'ai trop chaud ! »", true],
      ["« Où est-ce que ça fait mal ? »", false],
      ["« Guéris vite ! »", false],
    ]),
  },
  grammar: [
    g(
      "« À moi, à lui, à elle » : para mim, para ele",
      [
        "« Donner à quelqu'un » — dar … para + personne : Eu dei água para ele — « je lui ai donné de l'eau ». Para mim — « à moi », para você — « à toi », para ela — « à elle ». En français, on dit « je LUI ai donné » sans dire « à lui » ; le portugais préfère para + la personne, c'est plus explicite.",
        "Eu dei — « j'ai donné », de dar. Irrégulier, mais très fréquent.",
      ],
      [
        ["Ela deu um presente para mim.", "Elle m'a offert un cadeau."],
        ["Eu dei o mapa para você.", "Je t'ai donné la carte."],
      ],
    ),
  ],
  tasks: [
    listen("ptfo7-t1", "Examen audio. Que raconte le docteur Paulo ?", "O papagaio tomou sol demais e disse: Estou com calor! Agora ele está bem. A banda foi para Manaus.", [
      ["Le perroquet a eu trop chaud mais s'est rétabli, et le groupe est parti pour Manaus.", true],
      ["Le perroquet est resté à l'hôpital.", false],
      ["Le groupe est retourné à Rio.", false],
    ]),
    choice("ptfo7-t2", "Comment dit-on « Prends soin de toi ! » ?", [
      ["Cuide-se!", true],
      ["Melhorou?", false],
      ["Descanse!", false],
    ], { skill: "words" }),
    build("ptfo7-t3", "Construis la phrase : « Je lui ai donné de l'eau ».", ["Eu", "dei", "água", "para", "ele."]),
    missing("ptfo7-t4", "Quelle lettre manque ? (« chaleur »)", "ca", "or", "l", ["l", "u", "r"]),
    speak("ptfo7-t5", "Cuide-se! Boa sorte!", "Obrigado, doutor! Tchau!", "Merci, docteur ! Salut !", {
      help: "Dis au revoir à voix haute. Obrigado ou obrigada, les deux marchent.",
    }),
    script("ptfo7-t6", "Souviens-toi de toute Fortaleza. Termine la conversation avec le docteur Paulo.", [
      { speaker: PAULO, text: "Bom dia! O que você tem?" },
      { speaker: YOU, answer: "Estou com dor de cabeça e com febre.", options: ["Estou com dor de cabeça e com febre.", "Sou dor de cabeça.", "Eu vi as jangadas."] },
      { speaker: PAULO, text: "O que você fez ontem?" },
      { speaker: YOU, answer: "Eu fiquei na praia o dia todo.", options: ["Eu fiquei na praia o dia todo.", "Eu fico na praia amanhã.", "Doem os pés."] },
      { speaker: PAULO, text: "Não é grave. Tome este remédio e beba muita água." },
      { speaker: YOU, answer: "Obrigado, doutor!", options: ["Obrigado, doutor!", "Precisa de receita?", "Eu esqueci!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-fortaleza",
    itemName: "Photo de Pipoca devant le ventilateur",
    itemNameRu: "Foto do Pipoca no consultório",
    ru: "Oba! Mais uma foto do Pipoca!",
    en: "Hourra ! Encore une photo de Pipoca !",
    a11y:
      "Une photo : le perroquet vert dans le cabinet du médecin, assis devant un ventilateur, plumes ébouriffées, le docteur Paulo souriant à côté.",
    image: p("photo"),
    steps: [
      "Le docteur Paulo a une photo de son patient hors du commun.",
      "Pipoca devant le ventilateur, les plumes au vent !",
      "« Um paciente muito falante ! » — « Un patient très bavard ! »",
      "Légende : « Estou com calor ! » La photo rejoint l'album.",
    ],
    bridge: "L'avion vole vers l'ouest, traverse tout le pays, vers le plus grand fleuve du monde.",
  },
};

const story: CityStory = {
  home: {
    name: "Un lit dans une auberge en bord de plage",
    nameRu: "A cama no hostel da praia",
    image: p("home"),
    a11y:
      "Une chambre lumineuse d'auberge au bord de la mer : murs blancs, hamac près de la fenêtre, plage et voiles dehors. La valise de Murzik est sur le lit.",
  },
  keepsakeId: "photo-fortaleza",
  welcomeRu: "Olá, Fortaleza!",
  welcomeEn: "Bonjour, Fortaleza !",
  welcomeImage: p("arrival"),
  welcomeA11y:
    "Une longue plage urbaine sous un soleil de plomb, les voiles blanches des bateaux de pêche et de grands immeubles le long du front de mer.",
  departureImage: p("departure"),
  departureA11y: "Le docteur Paulo fait signe depuis la porte de son cabinet.",
  finale: [
    {
      image: p("photo"),
      a11y: "Murzik colle dans l'album la photo de Pipoca devant le ventilateur.",
      lines: [
        { en: "Douzième page de l'album : Pipoca chez le médecin." },
        { ru: "Estou com calor!", en: "J'ai trop chaud !" },
        { en: "Heureusement, Pipoca va bien. Et Murzik aussi." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie.",
      lines: [
        { ru: "Fortaleza completa!", en: "Fortaleza terminée !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Le docteur Paulo fait signe au revoir.",
      lines: [
        { ru: "Tchau, doutor Paulo!", en: "Au revoir, docteur Paulo !" },
        { ru: "Próxima parada: Manaus!", en: "Prochain arrêt : Manaus !" },
      ],
    },
    {
      image: p("plane"),
      a11y: "Un avion survole une forêt verte à perte de vue et une rivière serpentine.",
      lines: [{ ru: "Fortaleza → Manaus", en: "Fortaleza → Manaus" }],
    },
    {
      image: pic("pt/manaus/arrival"),
      a11y:
        "Un large fleuve sombre ; sur la rive, une ville et un vieil opéra au dôme coloré. À quai, des bateaux fluviaux blancs à deux ponts.",
      lines: [
        { ru: "Olá, Manaus!", en: "Bonjour, Manaus !" },
        { ru: "Que rio enorme!", en: "Quel fleuve immense !" },
      ],
    },
  ],
};

export const ptFortalezaFr = {
  id: "pt-fortaleza",
  name: "Fortaleza",
  namePt: "Fortaleza",
  lessons: [fo1, fo2, fo3, fo4, fo5, fo6, fo7],
  story,
};
