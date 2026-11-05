import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { PAIRS, YOU, build, choice, fill, g, line, listen, match, missing, script, speak, spell, v } from "./make";

/* Фос-ду-Игуасу · «Природа» · Водопады, гид Жулиана, «можно / нельзя» (poder), «хочу» (querer), глаголы на -er и -ir, три страны на одной реке. Пипока выучил «Que lindo!». */

const p = (name: string) => pic(`pt/foz/${name}`);
const JULIANA = "Juliana";

const fz1: Lesson = {
  id: "pt-a1-foz-1",
  level: "A1",
  cityId: "pt-foz",
  number: 1,
  title: "A cachoeira — La cascade",
  minutes: 7,
  goals: [
    "Décrire une cascade",
    "Dire « là-haut », « là en bas », « là-bas »",
    "Dire que tu es trempé(e)",
  ],
  vocabNote:
    "Cachoeira et catarata veulent tous les deux dire « cascade ». Cataratas, ce sont les énormes, comme ici. Il y en a presque trois cents !",
  vocab: [
    v("ptfz1-1", "a cachoeira", "la cascade",
      "Une haute cascade dévale une falaise verte.",
      p("l1-1")),
    v("ptfz1-2", "Que barulho!", "Quel vacarme !",
      "Murzik se bouche les oreilles avec les pattes devant une cascade grondante.",
      p("l1-2")),
    v("ptfz1-3", "o arco-íris", "l'arc-en-ciel",
      "Un arc-en-ciel lumineux au-dessus des embruns.",
      p("l1-3")),
    v("ptfz1-4", "Olha lá embaixo!", "Regarde, là en bas !",
      "Murzik se penche par-dessus la rambarde et montre l'eau bouillonnante en bas.",
      p("l1-4")),
    v("ptfz1-5", "a capa de chuva", "le poncho de pluie",
      "Murzik dans un poncho jaune qui lui arrive aux pattes.",
      p("l1-5")),
    v("ptfz1-6", "Estou todo molhado!", "Je suis trempé !",
      "Murzik trempé, l'eau dégouline de ses oreilles.",
      p("l1-6")),
    v("ptfz1-7", "lá em cima", "là-haut",
      "Bia montre le haut de la cascade.",
      p("l1-7")),
  ],
  dialogue: {
    title: "Sur la passerelle des chutes",
    note:
      "Passarela — « passerelle ». Pertinho — « tout près » (le diminutif de perto).",
    lines: [
      line("juliana", "Bem-vindos! Eu sou a Juliana, a guia do parque.", "Bienvenue ! Je suis Juliana, la guide du parc."),
      line("murzik", "Nossa! Que barulho!", "Waouh ! Quel vacarme !"),
      line("juliana", "Olha lá em cima: são mais de duzentas cachoeiras!", "Regardez là-haut : il y a plus de deux cents cascades !"),
      line("bia", "E olha lá embaixo! E um arco-íris!", "Et regarde en bas ! Et un arc-en-ciel !"),
      line("juliana", "Agora vamos na passarela. Pertinho da água!", "Maintenant, on passe par la passerelle. Tout près de l'eau !"),
      line("murzik", "Aaai! Estou todo molhado!", "Aïïïe ! Je suis trempé !"),
      line("juliana", "Por isso tem capa de chuva!", "C'est pour ça qu'il y a des ponchos !"),
    ],
    gist: choice("ptfz1-d1", "Pourquoi Murzik est-il trempé ?", [
      ["Il est allé sur la passerelle, juste à côté des chutes.", true],
      ["Il s'est mis à pleuvoir.", false],
      ["Il est tombé dans la rivière.", false],
    ]),
  },
  grammar: [
    g(
      "Où : aqui, ali, lá, em cima, embaixo",
      [
        "Aqui — « ici », ali — « là-bas (tout près) », lá — « là-bas (plus loin) ». Le français ne fait pas la différence entre ali et lá : les deux se disent « là-bas ». Em cima — « en haut », embaixo — « en bas ». On les combine souvent : lá em cima — « là-haut », lá embaixo — « là en bas ».",
        "Todo molhado — « tout mouillé ». Todo s'accorde aussi, comme « tout/toute » en français : a Bia está toda molhada.",
      ],
      [
        ["O hotel é lá em cima.", "L'hôtel est là-haut."],
        ["A Bia está toda molhada.", "Bia est trempée."],
      ],
    ),
  ],
  tasks: [
    choice("ptfz1-t1", "Bia est trempée. Que dit-elle ?", [
      ["Estou toda molhada!", true],
      ["Estou todo molhado!", false],
      ["Sou toda molhada!", false],
    ], { skill: "grammar" }),
    listen("ptfz1-t2", "Écoute. Où faut-il regarder ?", "Olha lá em cima!", [
      ["En haut.", true],
      ["En bas.", false],
      ["Derrière toi.", false],
    ]),
    match("ptfz1-t3", PAIRS, [
      ["a cachoeira", "la cascade"],
      ["o arco-íris", "l'arc-en-ciel"],
      ["lá embaixo", "là en bas"],
      ["lá em cima", "là-haut"],
    ], { skill: "words" }),
    spell("ptfz1-t4", "Assemble le mot « mouillé ».", "molhado"),
    speak("ptfz1-t5", "Olha a cachoeira! O que você acha?", "Que barulho! Estou todo molhado!", "Quel vacarme ! Je suis trempé(e) !", {
      help: "Réponds à voix haute. Une femme dira toda molhada.",
    }),
    choice("ptfz1-t6", "Comment dire « J'adore cet endroit » ?", [
      ["Eu amo este lugar.", true],
      ["Eu gosto este lugar.", false],
      ["Eu sou este lugar.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "poncho",
    itemName: "Poncho jaune",
    itemNameRu: "Capa de chuva",
    ru: "Oba! Uma capa de chuva!",
    en: "Hourra ! Un poncho de pluie !",
    a11y: "Un petit poncho jaune à capuche sèche sur un crochet.",
    image: p("poncho"),
    steps: [
      "Juliana rit : le poncho de Murzik lui arrive jusqu'aux pattes.",
      "« Pode ficar com ela! » — « Garde-le ! »",
      "À l'hôtel, Murzik accroche le poncho pour le faire sécher.",
      "Plic, ploc, plic…",
    ],
    bridge: "Le matin, Juliana les emmène sur un sentier dans la jungle. Mais le parc a des règles.",
  },
};

const fz2: Lesson = {
  id: "pt-a1-foz-2",
  level: "A1",
  cityId: "pt-foz",
  number: 2,
  title: "Posso…? — Je peux… ?",
  minutes: 7,
  goals: [
    "Demander la permission",
    "Dire ce qui est permis et ce qui est interdit",
    "Demander de l'aide",
  ],
  vocabNote:
    "Quati — le coati, une petite bête à longue queue rayée. Le parc en est plein, et ils volent la nourriture des touristes !",
  vocab: [
    v("ptfz2-1", "Posso tirar uma foto?", "Je peux prendre une photo ?",
      "Murzik, téléphone en patte, interroge la guide du regard.",
      p("l2-1")),
    v("ptfz2-2", "Pode, sim.", "Oui, tu peux.",
      "Juliana hoche la tête en souriant.",
      p("l2-2")),
    v("ptfz2-3", "Não pode.", "Non, interdit.",
      "Juliana remue le doigt d'un air sévère.",
      p("l2-3")),
    v("ptfz2-4", "É proibido dar comida aos animais.", "Il est interdit de nourrir les animaux.",
      "Un panneau : une main barrée avec une banane, et une petite bête à queue rayée.",
      p("l2-4")),
    v("ptfz2-5", "Pode entrar.", "Tu peux entrer.",
      "Un portail ouvert sur un sentier de jungle.",
      p("l2-5")),
    v("ptfz2-6", "Onde posso comprar água?", "Où est-ce que je peux acheter de l'eau ?",
      "Murzik tient une bouteille vide.",
      p("l2-6")),
    v("ptfz2-7", "Você pode me ajudar?", "Tu peux m'aider ?",
      "Murzik tire sur la sangle d'un sac à dos coincé dans les branches.",
      p("l2-7")),
  ],
  dialogue: {
    title: "Le sentier de la jungle",
    note:
      "Me — « me, moi ». Bonitinho — « trop mignon ». Ladrão — « petit voleur ».",
    lines: [
      line("murzik", "Juliana, posso tirar uma foto?", "Juliana, je peux prendre une photo ?"),
      line("juliana", "Pode, sim! Mas cuidado: é proibido dar comida aos animais.", "Oui, tu peux ! Mais attention : il est interdit de nourrir les animaux."),
      line("murzik", "Olha um quati! Que bonitinho! Posso dar uma banana?", "Regarde, un coati ! Trop mignon ! Je peux lui donner une banane ?"),
      line("juliana", "Não pode! Ele é um ladrão!", "Interdit ! C'est un voleur !"),
      line("bia", "Ai! O quati pegou a minha mochila! Você pode me ajudar?", "Oh non ! Le coati a attrapé mon sac à dos ! Tu peux m'aider ?"),
      line("murzik", "Ei! Solta! Essa mochila é da Bia!", "Hé ! Lâche ça ! C'est le sac de Bia !"),
    ],
    gist: choice("ptfz2-d1", "Qu'a fait le coati ?", [
      ["Il a attrapé le sac à dos de Bia.", true],
      ["Il a mangé la banane de Murzik.", false],
      ["Il a eu peur et il s'est enfui.", false],
    ]),
  },
  grammar: [
    g(
      "Poder — « pouvoir »",
      [
        "Poder + verbe — « pouvoir » : Posso tirar uma foto? — Je peux prendre une photo ? Les formes : eu posso, você / ele pode, nós podemos, eles podem. La réponse courte : Pode! — « Oui, tu peux ! » Não pode! — « Non, interdit ! »",
        "Ne confonds pas avec saber : sei nadar — « je sais nager », posso nadar — « je peux nager » (c'est permis, ou j'en suis capable). Bonne nouvelle : le français fait exactement la même différence entre « savoir » et « pouvoir » !",
      ],
      [
        ["Posso entrar?", "Je peux entrer ?"],
        ["Nós podemos nadar aqui?", "On peut nager ici ?"],
      ],
    ),
  ],
  tasks: [
    choice("ptfz2-t1", "Comment demander « Je peux entrer ? »", [
      ["Posso entrar?", true],
      ["Sei entrar?", false],
      ["Pode eu entrar?", false],
    ], { skill: "grammar" }),
    listen("ptfz2-t2", "Écoute. Qu'est-ce qui est interdit ?", "É proibido dar comida aos animais.", [
      ["Nourrir les animaux.", true],
      ["Prendre des photos.", false],
      ["Se baigner.", false],
    ]),
    match("ptfz2-t3", PAIRS, [
      ["Pode, sim.", "Oui, tu peux."],
      ["Não pode.", "Non, interdit."],
      ["É proibido.", "C'est interdit."],
      ["Pode entrar.", "Tu peux entrer."],
    ], { skill: "words" }),
    missing("ptfz2-t4", "Quelle lettre manque-t-il ? (« interdit »)", "proib", "do", "i", ["i", "e", "y"]),
    speak("ptfz2-t5", "Você precisa de alguma coisa?", "Sim! Onde posso comprar água?", "Oui ! Où est-ce que je peux acheter de l'eau ?", {
      help: "Demande à voix haute où tu peux acheter de l'eau.",
    }),
    choice("ptfz2-t6", "Comment dire « Regarde, là en bas ! » ?", [
      ["Olha lá embaixo!", true],
      ["Olha lá em cima!", false],
      ["Olha aqui dentro!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "binoculars",
    itemName: "Jumelles",
    itemNameRu: "Binóculo",
    ru: "Oba! Um binóculo!",
    en: "Hourra ! Des jumelles !",
    a11y: "De petites jumelles vertes avec une lanière, posées sur le lit.",
    image: p("binoculars"),
    steps: [
      "Le sac à dos est sauvé ! Juliana félicite Murzik.",
      "Elle lui offre de petites jumelles.",
      "« Para ver os animais de longe! » — « Pour observer les animaux de loin ! »",
      "Les jumelles sont posées sur le lit de l'hôtel.",
    ],
    bridge: "Juliana demande : « O que vocês querem fazer amanhã? »",
  },
};

const fz3: Lesson = {
  id: "pt-a1-foz-3",
  level: "A1",
  cityId: "pt-foz",
  number: 3,
  title: "Eu quero… — Je veux…",
  minutes: 7,
  goals: [
    "Dire ce que tu veux",
    "Demander ce que les autres veulent",
    "Refuser poliment",
  ],
  vocabNote:
    "Quero sim! — « Oui, je veux ! » Les Brésiliens répondent souvent en répétant simplement le verbe : Você quer? — Quero! En français, on dirait juste « oui ».",
  vocab: [
    v("ptfz3-1", "O que vocês querem fazer?", "Qu'est-ce que vous voulez faire ?",
      "Juliana déplie une carte du parc sur la table.",
      p("l3-1")),
    v("ptfz3-2", "Eu quero ver os pássaros.", "Je veux voir les oiseaux.",
      "Murzik observe un toucan coloré avec ses jumelles.",
      p("l3-2")),
    v("ptfz3-3", "Você quer andar de barco?", "Tu veux faire un tour en bateau ?",
      "Un bateau pneumatique au pied des chutes.",
      p("l3-3")),
    v("ptfz3-4", "Quero sim!", "Oui, je veux !",
      "Bia lève la main, ravie.",
      p("l3-4")),
    v("ptfz3-5", "Eu não quero ficar molhado de novo!", "Je ne veux pas être mouillé encore une fois !",
      "Murzik se cache derrière Bia, horrifié.",
      p("l3-5")),
    v("ptfz3-6", "Nós queremos ir agora.", "Nous voulons y aller maintenant.",
      "Murzik et Bia devant la porte, avec chapeaux et sacs à dos.",
      p("l3-6")),
    v("ptfz3-7", "Não, obrigado. Não quero.", "Non, merci. Je ne veux pas.",
      "Murzik fait poliment non de la patte.",
      p("l3-7")),
  ],
  dialogue: {
    title: "Les projets pour demain",
    note:
      "Tucano — le toucan, un oiseau à l'énorme bec coloré. Primeiro… depois… — « d'abord… ensuite… ».",
    lines: [
      line("juliana", "O que vocês querem fazer amanhã?", "Qu'est-ce que vous voulez faire demain ?"),
      line("murzik", "Eu quero ver os pássaros! E os tucanos!", "Je veux voir les oiseaux ! Et les toucans !"),
      line("juliana", "Ótimo! E você, Bia? Você quer andar de barco?", "Super ! Et toi, Bia ? Tu veux faire un tour en bateau ?"),
      line("bia", "Quero sim! Murzik, você quer?", "Oui, je veux ! Murzik, et toi ?"),
      line("murzik", "Não, obrigado. Eu não quero ficar molhado de novo!", "Non, merci. Je ne veux pas être mouillé encore une fois !"),
      line("juliana", "Então primeiro os pássaros, depois o barco.", "Alors d'abord les oiseaux, ensuite le bateau."),
    ],
    gist: choice("ptfz3-d1", "Pourquoi Murzik ne veut-il pas monter dans le bateau ?", [
      ["Il ne veut pas être mouillé encore une fois.", true],
      ["Il a peur des oiseaux.", false],
      ["Il est fatigué.", false],
    ]),
  },
  grammar: [
    g(
      "Querer — « vouloir »",
      [
        "Les formes : eu quero, você / ele quer, nós queremos, vocês / eles querem. Après querer, le verbe reste à l'infinitif, comme en français : Eu quero ver (« je veux voir »), Nós queremos ir (« nous voulons y aller »).",
        "Tu te souviens de Paraty ? Au café, il est plus poli de dire Eu queria… — exactement comme « je voudrais » en français. Eu quero convient entre amis et pour parler de ses envies.",
      ],
      [
        ["Você quer um suco?", "Tu veux un jus ?"],
        ["Eles querem dançar.", "Ils veulent danser."],
      ],
    ),
  ],
  tasks: [
    choice("ptfz3-t1", "Comment dire « Nous voulons y aller maintenant » ?", [
      ["Nós queremos ir agora.", true],
      ["Nós quer ir agora.", false],
      ["Nós queremos vamos agora.", false],
    ], { skill: "grammar" }),
    listen("ptfz3-t2", "Écoute. Que veut la personne ?", "Eu quero ver os pássaros.", [
      ["Voir les oiseaux.", true],
      ["Faire un tour en bateau.", false],
      ["Rentrer à la maison.", false],
    ]),
    fill("ptfz3-t3", "Complète : « Tu veux faire un tour en bateau ? »", "Você", "andar de barco?", "quer", ["quer", "quero", "querem"], { skill: "words" }),
    spell("ptfz3-t4", "Assemble le mot « oiseaux ».", "pássaros"),
    speak("ptfz3-t5", "O que você quer fazer amanhã?", "Eu quero ver as cachoeiras.", "Je veux voir les cascades.", {
      help: "Dis à voix haute ce que tu veux faire demain.",
    }),
    choice("ptfz3-t6", "Comment demander « Je peux prendre une photo ? »", [
      ["Posso tirar uma foto?", true],
      ["Sei tirar uma foto?", false],
      ["Quero tirar a foto de mim.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "toucan",
    itemName: "Toucan en peluche",
    itemNameRu: "Tucano de pelúcia",
    ru: "Oba! Um tucano de pelúcia!",
    en: "Hourra ! Un toucan en peluche !",
    a11y: "Un toucan en peluche à l'énorme bec orange, assis sur l'oreiller.",
    image: p("toucan"),
    steps: [
      "Le matin, Murzik aperçoit un vrai toucan dans ses jumelles !",
      "Une boutique près du sentier vend des toucans en peluche.",
      "« Eu quero este! » — « Je veux celui-ci ! »",
      "Le toucan est assis sur l'oreiller de l'hôtel.",
    ],
    bridge: "À midi, pique-nique au bord de la rivière. Mais quelqu'un d'autre a faim dans les parages…",
  },
};

const fz4: Lesson = {
  id: "pt-a1-foz-4",
  level: "A1",
  cityId: "pt-foz",
  number: 4,
  title: "Comer e beber — Manger et boire",
  minutes: 7,
  goals: [
    "Parler de nourriture au pique-nique",
    "Conjuguer les verbes en -er",
    "Dire « il a tout mangé ! »",
  ],
  vocabNote:
    "Sanduíche — « sandwich » (ça se prononce presque pareil !). Le pique-nique brésilien, c'est toujours des fruits : mangue, banane, ananas.",
  vocab: [
    v("ptfz4-1", "Você come banana?", "Tu manges des bananes ?",
      "Bia tend une banane à Murzik.",
      p("l4-1")),
    v("ptfz4-2", "Eu bebo muita água.", "Je bois beaucoup d'eau.",
      "Murzik boit dans une grande bouteille.",
      p("l4-2")),
    v("ptfz4-3", "Nós comemos aqui.", "On mange ici.",
      "Une nappe garnie sur l'herbe, au bord de la rivière.",
      p("l4-3")),
    v("ptfz4-4", "um sanduíche", "un sandwich",
      "Un grand sandwich au fromage et à la tomate.",
      p("l4-4")),
    v("ptfz4-5", "Os quatis comem frutas.", "Les coatis mangent des fruits.",
      "Deux coatis à queue rayée grignotent une mangue.",
      p("l4-5")),
    v("ptfz4-6", "Ele comeu tudo!", "Il a tout mangé !",
      "Un coati assis sur la nappe vide, l'air très content.",
      p("l4-6")),
    v("ptfz4-7", "Que fome!", "Quelle faim !",
      "Murzik regarde tristement une assiette vide.",
      p("l4-7")),
  ],
  dialogue: {
    title: "Pique-nique au bord de la rivière",
    note:
      "Abacaxi — « ananas ». Sobrou — « il est resté ». Nada — « rien ».",
    lines: [
      line("bia", "Vamos comer aqui? Eu tenho sanduíches, banana e abacaxi.", "On mange ici ? J'ai des sandwichs, des bananes et un ananas."),
      line("murzik", "Ótimo! Eu bebo muita água, e você?", "Super ! Moi, je bois beaucoup d'eau, et toi ?"),
      line("bia", "Eu também. Você come banana?", "Moi aussi. Tu manges des bananes ?"),
      line("murzik", "Como! Mas… Bia! Olha os quatis!", "Oui ! Mais… Bia ! Regarde les coatis !"),
      line("juliana", "Cuidado! Os quatis comem tudo!", "Attention ! Les coatis mangent tout !"),
      line("murzik", "Ele comeu tudo! Não sobrou nada!", "Il a tout mangé ! Il ne reste rien !"),
      line("bia", "Que fome!", "Quelle faim !"),
    ],
    gist: choice("ptfz4-d1", "Qu'est-il arrivé à la nourriture ?", [
      ["Un coati l'a mangée.", true],
      ["La rivière l'a emportée.", false],
      ["Murzik a tout mangé tout seul.", false],
    ]),
  },
  grammar: [
    g(
      "Les verbes en -er",
      [
        "Les verbes en -er (comer — « manger », beber — « boire ») se conjuguent presque comme ceux en -ar, avec e à la place de a : eu como, você / ele come, nós comemos, vocês / eles comem. Comme en français, la forme avec nós garde tout le radical : « nous mangeons » — nós comemos.",
        "Ele comeu — « il a mangé », c'est le passé. Les verbes en -er finissent en -eu : comeu, bebeu. Comme en français, une seule forme : « il a mangé », sans accord visible.",
      ],
      [
        ["Eu como peixe.", "Je mange du poisson."],
        ["Eles bebem suco.", "Ils boivent du jus."],
      ],
    ),
  ],
  tasks: [
    choice("ptfz4-t1", "Comment dire « Ils boivent de l'eau » ?", [
      ["Eles bebem água.", true],
      ["Eles bebe água.", false],
      ["Eles bebemos água.", false],
    ], { skill: "grammar" }),
    listen("ptfz4-t2", "Écoute. Que s'est-il passé ?", "O quati comeu tudo!", [
      ["Le coati a tout mangé.", true],
      ["Le coati s'est enfui.", false],
      ["Le coati dort.", false],
    ]),
    match("ptfz4-t3", PAIRS, [
      ["comer", "manger"],
      ["beber", "boire"],
      ["o abacaxi", "l'ananas"],
      ["o sanduíche", "le sandwich"],
    ], { skill: "words" }),
    missing("ptfz4-t4", "Quelle lettre manque-t-il ? (« boire »)", "be", "er", "b", ["b", "v", "p"]),
    speak("ptfz4-t5", "O que você come de manhã?", "De manhã eu como pão e bebo café.", "Le matin, je mange du pain et je bois un café.", {
      help: "Raconte à voix haute ce que tu manges et bois le matin.",
    }),
    choice("ptfz4-t6", "On te propose un tour en bateau, mais tu n'en as pas envie. Que dis-tu ?", [
      ["Não, obrigado. Não quero.", true],
      ["Quero sim!", false],
      ["Pode, sim.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "bottle",
    itemName: "Gourde",
    itemNameRu: "Garrafinha",
    ru: "Oba! Uma garrafinha!",
    en: "Hourra ! Une gourde !",
    a11y: "Une gourde métallique bleue avec un coati dessiné dessus.",
    image: p("bottle"),
    steps: [
      "Juliana rit et partage ses sandwichs.",
      "Elle offre aussi à Murzik une gourde avec un coati.",
      "« Esta o quati não come! » — « Ça, le coati ne peut pas le manger ! »",
      "La gourde trône sur la table de nuit.",
    ],
    bridge: "Après le déjeuner — un tour en bateau sur la rivière. Murzik finit par accepter.",
  },
};

const fz5: Lesson = {
  id: "pt-a1-foz-5",
  level: "A1",
  cityId: "pt-foz",
  number: 5,
  title: "De barco no rio — En bateau sur la rivière",
  minutes: 7,
  goals: [
    "Comprendre les consignes dans le bateau",
    "Conjuguer les verbes en -ir",
    "Dire ce que tu ressens",
  ],
  vocabNote:
    "Segura firme! — « Accroche-toi bien ! » Colete salva-vidas — « gilet de sauvetage ».",
  vocab: [
    v("ptfz5-1", "O barco parte agora!", "Le bateau part maintenant !",
      "Un capitaine en casquette fait signe depuis un bateau pneumatique.",
      p("l5-1")),
    v("ptfz5-2", "Segura firme!", "Accroche-toi bien !",
      "Murzik s'agrippe à la corde du bord.",
      p("l5-2")),
    v("ptfz5-3", "Nós subimos o rio.", "Nous remontons la rivière.",
      "Le bateau fonce à contre-courant vers les chutes.",
      p("l5-3")),
    v("ptfz5-4", "Abre a mochila!", "Ouvre le sac à dos !",
      "Bia ouvre son sac à dos et sort les ponchos.",
      p("l5-4")),
    v("ptfz5-5", "Eu sinto a água no rosto!", "Je sens l'eau sur mon visage !",
      "Les embruns arrivent en pleine figure de Murzik.",
      p("l5-5")),
    v("ptfz5-6", "Eles dormem no barco.", "Ils dorment dans le bateau.",
      "Au retour, deux touristes somnolent dans le bateau.",
      p("l5-6")),
    v("ptfz5-7", "Foi incrível!", "C'était incroyable !",
      "Murzik trempé mais ravi sur le ponton.",
      p("l5-7")),
  ],
  dialogue: {
    title: "Vers les chutes en bateau",
    note:
      "Incrível — « incroyable ». Mais uma vez — « encore une fois ».",
    lines: [
      line("juliana", "O barco parte agora! Segurem firme!", "Le bateau part maintenant ! Accrochez-vous bien !"),
      line("bia", "Murzik, abre a mochila! As capas de chuva!", "Murzik, ouvre le sac à dos ! Les ponchos !"),
      line("juliana", "Nós subimos o rio até a cachoeira…", "Nous remontons la rivière jusqu'à la cascade…"),
      line("murzik", "Ahhh! Eu sinto a água no rosto!", "Aaaah ! Je sens l'eau sur mon visage !"),
      line("bia", "Que medo! Que legal!", "Quelle peur ! C'est trop bien !"),
      line("murzik", "Foi incrível! Mais uma vez!", "C'était incroyable ! Encore une fois !"),
    ],
    gist: choice("ptfz5-d1", "Le tour en bateau a-t-il plu à Murzik ?", [
      ["Oui, il veut y retourner.", true],
      ["Non, il a eu peur.", false],
      ["Il a dormi pendant tout le trajet.", false],
    ]),
  },
  grammar: [
    g(
      "Les verbes en -ir",
      [
        "Les verbes en -ir (partir — « partir », abrir — « ouvrir », subir — « monter ») fonctionnent comme ceux en -er, seul nós change : eu parto, você / ele parte, nós partimos, eles partem.",
        "Certains changent de voyelle, exactement comme en français : dormir — eu durmo, ele dorme (« je dors, il dort », mais « nous dormons » — nós dormimos) ; sentir — eu sinto, ele sente (« je sens »). Apprends-les un par un.",
      ],
      [
        ["O ônibus parte às dez.", "Le bus part à dix heures."],
        ["Nós abrimos a janela.", "Nous ouvrons la fenêtre."],
      ],
    ),
  ],
  tasks: [
    choice("ptfz5-t1", "Comment dire « Nous ouvrons la fenêtre » ?", [
      ["Nós abrimos a janela.", true],
      ["Nós abremos a janela.", false],
      ["Nós abre a janela.", false],
    ], { skill: "grammar" }),
    listen("ptfz5-t2", "Écoute. Que dit le capitaine ?", "Segura firme!", [
      ["Accroche-toi bien !", true],
      ["Ouvre le sac à dos !", false],
      ["Dors !", false],
    ]),
    match("ptfz5-t3", PAIRS, [
      ["partir", "partir"],
      ["abrir", "ouvrir"],
      ["subir", "monter"],
      ["dormir", "dormir"],
    ], { skill: "words" }),
    spell("ptfz5-t4", "Assemble le mot « rivière ».", "rio"),
    speak("ptfz5-t5", "Você gostou do barco?", "Foi incrível! Mais uma vez!", "C'était incroyable ! Encore une fois !", {
      help: "Dis à voix haute comment tu as trouvé la balade.",
    }),
    choice("ptfz5-t6", "Comment dire « Il a tout mangé ! » ?", [
      ["Ele comeu tudo!", true],
      ["Ele come nada!", false],
      ["Ele bebe tudo!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "map",
    itemName: "Carte du parc",
    itemNameRu: "Mapa do parque",
    ru: "Oba! O mapa do parque!",
    en: "Hourra ! La carte du parc !",
    a11y: "Une carte dessinée du parc, avec chutes, sentiers et petits toucans, accrochée au mur.",
    image: p("map"),
    steps: [
      "Le capitaine du bateau donne sa vieille carte à Murzik.",
      "Toutes les cascades et tous les sentiers y sont dessinés.",
      "« Para não ficar perdido! » — « Pour ne pas te perdre ! »",
      "La carte est accrochée au mur de l'hôtel.",
    ],
    bridge: "Le soir, Juliana les emmène là où trois pays se rencontrent.",
  },
};

const fz6: Lesson = {
  id: "pt-a1-foz-6",
  level: "A1",
  cityId: "pt-foz",
  number: 6,
  title: "Três países — Trois pays",
  minutes: 7,
  goals: [
    "Nommer les pays et les langues",
    "Demander quelle langue on parle",
    "Montrer : ici, là-bas",
  ],
  vocabNote:
    "Ici, deux rivières se rejoignent, et sur les trois rives — trois pays : le Brésil, l'Argentine et le Paraguay.",
  vocab: [
    v("ptfz6-1", "Ali é a Argentina.", "Là-bas, c'est l'Argentine.",
      "Juliana montre l'autre rive de la rivière.",
      p("l6-1")),
    v("ptfz6-2", "E ali é o Paraguai.", "Et là-bas, c'est le Paraguay.",
      "La troisième rive, avec des toits de ville.",
      p("l6-2")),
    v("ptfz6-3", "a fronteira", "la frontière",
      "Une borne en pierre peinte en trois couleurs.",
      p("l6-3")),
    v("ptfz6-4", "Lá eles falam espanhol.", "Là-bas, on parle espagnol.",
      "Sur l'autre rive, on voit des gens et des enseignes.",
      p("l6-4")),
    v("ptfz6-5", "Aqui nós falamos português.", "Ici, nous parlons portugais.",
      "Bia pose fièrement la main sur son cœur.",
      p("l6-5")),
    v("ptfz6-6", "Você fala espanhol?", "Tu parles espagnol ?",
      "Juliana regarde Murzik avec curiosité.",
      p("l6-6")),
    v("ptfz6-7", "Que país grande!", "Quel grand pays !",
      "Murzik écarte les pattes devant une immense carte du Brésil.",
      p("l6-7")),
  ],
  dialogue: {
    title: "Là où trois pays se rencontrent",
    note:
      "Parecido — « pareil, semblable ». Mais ou menos — ici « à peu près ».",
    lines: [
      line("juliana", "Olha: aqui é o Brasil. Ali é a Argentina. E ali é o Paraguai.", "Regardez : ici, c'est le Brésil. Là-bas, l'Argentine. Et là-bas, le Paraguay."),
      line("murzik", "Três países! E a fronteira é o rio?", "Trois pays ! Et la frontière, c'est la rivière ?"),
      line("juliana", "Isso! Lá eles falam espanhol. Aqui nós falamos português.", "C'est ça ! Là-bas, on parle espagnol. Ici, nous parlons portugais."),
      line("bia", "Murzik, você fala espanhol?", "Murzik, tu parles espagnol ?"),
      line("murzik", "Não… Mas é parecido com português, não é?", "Non… Mais ça ressemble au portugais, non ?"),
      line("juliana", "Mais ou menos! E o Brasil é muito maior.", "À peu près ! Et le Brésil est bien plus grand."),
      line("murzik", "Que país grande!", "Quel grand pays !"),
    ],
    gist: choice("ptfz6-d1", "Quels pays voit-on d'ici ?", [
      ["Le Brésil, l'Argentine et le Paraguay.", true],
      ["Le Brésil, le Portugal et l'Espagne.", false],
      ["Seulement le Brésil.", false],
    ]),
  },
  grammar: [
    g(
      "Les pays avec l'article, les langues sans majuscule",
      [
        "La plupart des pays prennent l'article, comme en français : o Brasil (« le Brésil »), a Argentina (« l'Argentine »), o Paraguai (« le Paraguay »). Quelques-uns n'en prennent pas : Portugal, Angola.",
        "Les langues s'écrivent sans majuscule, comme en français, et sans article après falar : Eu falo francês, ele fala espanhol.",
      ],
      [
        ["Eu falo russo e um pouco de português.", "Je parle russe et un peu le portugais."],
        ["Eu falo inglês e um pouco de português.", "Je parle anglais et un peu le portugais."],
      ],
    ),
  ],
  tasks: [
    choice("ptfz6-t1", "Comment dire « Je parle espagnol » ?", [
      ["Eu falo espanhol.", true],
      ["Eu falo o Espanhol.", false],
      ["Eu sou espanhol falo.", false],
    ], { skill: "grammar" }),
    listen("ptfz6-t2", "Écoute. Qu'y a-t-il de l'autre côté de la rivière ?", "Ali é a Argentina.", [
      ["L'Argentine.", true],
      ["Le Paraguay.", false],
      ["Le Portugal.", false],
    ]),
    match("ptfz6-t3", PAIRS, [
      ["o Brasil", "le Brésil"],
      ["a Argentina", "l'Argentine"],
      ["a fronteira", "la frontière"],
      ["o espanhol", "l'espagnol"],
    ], { skill: "words" }),
    missing("ptfz6-t4", "Quelles lettres manquent-elles ? (« espagnol »)", "espa", "ol", "nh", ["nh", "lh", "n"]),
    speak("ptfz6-t5", "Que línguas você fala?", "Eu falo russo e um pouco de português.", "Je parle russe et un peu le portugais. (Dis tes langues à toi.)", {
      help: "Dis à voix haute quelles langues tu parles.",
    }),
    choice("ptfz6-t6", "Comment dire « Accroche-toi bien ! » ?", [
      ["Segura firme!", true],
      ["Abre a mochila!", false],
      ["Fica em pé!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "notebook",
    itemName: "Carnet de voyage",
    itemNameRu: "Caderno de viagem",
    ru: "Oba! Um caderno de viagem!",
    en: "Hourra ! Un carnet de voyage !",
    a11y: "Un carnet à la couverture décorée d'une carte du monde ; à l'intérieur, des billets collés et l'itinéraire dessiné.",
    image: p("notebook"),
    steps: [
      "Bia offre un carnet de voyage à Murzik.",
      "« Escreva tudo! » — « Note tout ! »",
      "Sur la première page, Murzik dessine les trois pays et la rivière.",
      "Le carnet est posé sur la table de nuit.",
    ],
    bridge: "Le matin, Juliana se souvient : « Esperem! Eu vi um papagaio verde no mirante! »",
  },
};

const fz7: Lesson = {
  id: "pt-a1-foz-7",
  level: "A1",
  cityId: "pt-foz",
  number: 7,
  title: "Que lindo! — Comme c'est beau !",
  minutes: 8,
  goals: [
    "Comprendre ce qu'on raconte sur Pipoca",
    "Souhaiter « soyez prudents »",
    "Revoir tous les mots d'Iguaçu",
  ],
  vocabNote:
    "Lindo — « magnifique, superbe », plus fort que bonito. Mirante — « belvédère, plate-forme d'observation ».",
  vocab: [
    v("ptfz7-1", "Que lindo!", "Comme c'est beau !",
      "Le perroquet vert sur la rambarde d'un belvédère, les chutes et un arc-en-ciel derrière lui.",
      p("l7-1")),
    v("ptfz7-2", "o mirante", "le belvédère",
      "Une plate-forme en bois au-dessus du vide, face aux chutes.",
      p("l7-2")),
    v("ptfz7-3", "Ele estava olhando as cataratas.", "Il regardait les chutes.",
      "Le perroquet, tête penchée, contemple l'eau, fasciné.",
      p("l7-3")),
    v("ptfz7-4", "Eles foram para o Pantanal.", "Ils sont partis pour le Pantanal.",
      "Une carte : une flèche vers le nord-ouest, en direction d'immenses marécages.",
      p("l7-4")),
    v("ptfz7-5", "Lá tem jacarés!", "Là-bas, il y a des caïmans !",
      "Une petite image : un caïman sommeille au bord de l'eau.",
      p("l7-5")),
    v("ptfz7-6", "Tenham cuidado!", "Soyez prudents !",
      "Juliana lève le doigt comme une maîtresse sévère.",
      p("l7-6")),
    v("ptfz7-7", "Até breve!", "À bientôt !",
      "Murzik et Bia font signe en montant dans un petit avion.",
      p("l7-7")),
  ],
  dialogue: {
    title: "Ce qu'a dit le perroquet",
    note:
      "Esperem! — « Attendez ! » (à plusieurs). Horas e horas — « des heures et des heures ».",
    lines: [
      line("juliana", "Esperem! Ah, o papagaio! Eu vi um papagaio verde no mirante.", "Attendez ! Ah, le perroquet ! J'ai vu un perroquet vert au belvédère."),
      line("murzik", "O Pipoca! O que ele fez?", "Pipoca ! Et qu'est-ce qu'il faisait ?"),
      line("juliana", "Ele estava olhando as cataratas, horas e horas. E ele disse: Que lindo! Que lindo!", "Il regardait les chutes, des heures et des heures. Et il disait : « Comme c'est beau ! Comme c'est beau ! »"),
      line("bia", "Ele tem razão! E a banda?", "Il a raison ! Et le groupe ?"),
      line("juliana", "Eles foram para o Pantanal. Lá tem jacarés! Tenham cuidado!", "Ils sont partis pour le Pantanal. Là-bas, il y a des caïmans ! Soyez prudents !"),
      line("murzik", "Obrigado, Juliana! Até breve!", "Merci, Juliana ! À bientôt !"),
    ],
    gist: choice("ptfz7-d1", "Quelle phrase Pipoca a-t-il apprise aux chutes ?", [
      ["« Comme c'est beau ! »", true],
      ["« Quel vacarme ! »", false],
      ["« Accroche-toi bien ! »", false],
    ]),
  },
  grammar: [
    g(
      "Estava olhando — « il était en train de regarder »",
      [
        "Estar + verbe en -ando, -endo, -indo — une action en cours : está chovendo — « il est en train de pleuvoir », estava olhando — « il était en train de regarder ». Exactement comme « être en train de » en français !",
        "La terminaison dépend du groupe : olhar — olhando, comer — comendo, dormir — dormindo.",
      ],
      [
        ["Ele está dormindo.", "Il est en train de dormir."],
        ["Nós estamos comendo.", "Nous sommes en train de manger."],
      ],
    ),
  ],
  tasks: [
    listen("ptfz7-t1", "Examen audio. Que raconte Juliana ?", "O papagaio estava no mirante, olhando as cataratas. Ele disse: Que lindo! A banda foi para o Pantanal.", [
      ["Le perroquet regardait les chutes, et le groupe est parti pour le Pantanal.", true],
      ["Le perroquet est tombé dans la cascade.", false],
      ["Le groupe est encore ici, dans le parc.", false],
    ]),
    choice("ptfz7-t2", "Comment dire « Soyez prudents ! » (à plusieurs) ?", [
      ["Tenham cuidado!", true],
      ["Tenho cuidado!", false],
      ["Que cuidado!", false],
    ], { skill: "words" }),
    build("ptfz7-t3", "Assemble la phrase : « Il regardait les chutes ».", ["Ele", "estava", "olhando", "as", "cataratas."]),
    missing("ptfz7-t4", "Quelle lettre manque-t-il ? (« caïman »)", "jacar", "", "é", ["é", "e", "ê"]),
    speak("ptfz7-t5", "Tenham cuidado! Até breve!", "Obrigado! Até breve!", "Merci ! À bientôt !", {
      help: "Dis au revoir à voix haute. On peut dire obrigado ou obrigada.",
    }),
    script("ptfz7-t6", "Souviens-toi de tout Iguaçu. Termine la conversation avec Juliana.", [
      { speaker: JULIANA, text: "Bem-vindo ao parque! O que você quer fazer?" },
      { speaker: YOU, answer: "Eu quero ver as cachoeiras.", options: ["Eu quero ver as cachoeiras.", "Eu comeu tudo.", "Que fome!"] },
      { speaker: JULIANA, text: "Ótimo! Olha lá embaixo!" },
      { speaker: YOU, answer: "Que lindo! Posso tirar uma foto?", options: ["Que lindo! Posso tirar uma foto?", "Não pode.", "Eles dormem no barco."] },
      { speaker: JULIANA, text: "Pode, sim! Mas cuidado: é proibido dar comida aos quatis." },
      { speaker: YOU, answer: "Tudo bem! Obrigado!", options: ["Tudo bem! Obrigado!", "Segura firme!", "Lá tem jacarés!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-foz",
    itemName: "Photo de Pipoca aux chutes",
    itemNameRu: "Foto do Pipoca nas cataratas",
    ru: "Oba! Mais uma foto do Pipoca!",
    en: "Hourra ! Encore une photo de Pipoca !",
    a11y:
      "Une photo : le perroquet vert sur la rambarde du belvédère, les chutes et un arc-en-ciel derrière lui.",
    image: p("photo"),
    steps: [
      "Juliana montre une photo prise près du belvédère.",
      "Pipoca sur la rambarde, avec un arc-en-ciel derrière lui !",
      "La plus belle photo de l'album.",
      "Légende : « Que lindo! » Et hop, dans l'album.",
    ],
    bridge: "Le petit avion vole vers le nord-ouest. En bas : de l'eau, de l'herbe, et encore de l'eau.",
  },
};

const story: CityStory = {
  home: {
    name: "Une chambre d'hôtel près du parc",
    nameRu: "O quarto no hotel do parque",
    image: p("home"),
    a11y:
      "Une chambre dans un vieil hôtel rose juste à côté du parc. Par la fenêtre : la jungle et un nuage d'embruns au-dessus des chutes. La valise de Murzik au milieu.",
  },
  keepsakeId: "photo-foz",
  welcomeRu: "Olá, Foz do Iguaçu!",
  welcomeEn: "Bonjour, Foz do Iguaçu !",
  welcomeImage: p("arrival"),
  welcomeA11y:
    "Murzik et Bia sur une plate-forme d'observation ; devant eux, des dizaines d'immenses cascades dans la jungle, un arc-en-ciel au-dessus de l'eau.",
  departureImage: p("departure"),
  departureA11y: "Juliana fait signe devant les grilles du parc.",
  finale: [
    {
      image: p("photo"),
      a11y: "Murzik colle dans l'album la photo de Pipoca et l'arc-en-ciel.",
      lines: [
        { en: "Sixième page de l'album : Pipoca aux chutes." },
        { ru: "Que lindo!", en: "Comme c'est beau !" },
        { en: "On dirait que Pipoca voyage avec plaisir." },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie.",
      lines: [
        { ru: "Foz do Iguaçu completa!", en: "Foz do Iguaçu terminée !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Juliana fait un signe d'adieu.",
      lines: [
        { ru: "Tchau, Juliana!", en: "Au revoir, Juliana !" },
        { ru: "Próxima parada: o Pantanal!", en: "Prochain arrêt : le Pantanal !" },
      ],
    },
    {
      image: p("plane"),
      a11y: "Un petit avion au-dessus d'une plaine infinie pleine de lacs et de rivières.",
      lines: [{ ru: "Foz do Iguaçu → Pantanal", en: "Foz do Iguaçu → le Pantanal" }],
    },
    {
      image: pic("pt/pantanal/arrival"),
      a11y:
        "Une maison en bois sur pilotis au milieu de plaines vertes et de lacs. Des aigrettes blanches volent au-dessus de l'eau ; un caïman se chauffe sur la rive.",
      lines: [
        { ru: "Olá, Pantanal!", en: "Bonjour, Pantanal !" },
        { ru: "Quantos animais!", en: "Que d'animaux !" },
      ],
    },
  ],
};

export const ptFozFr = {
  id: "pt-foz",
  name: "Foz do Iguaçu",
  namePt: "Foz do Iguaçu",
  lessons: [fz1, fz2, fz3, fz4, fz5, fz6, fz7],
  story,
};
