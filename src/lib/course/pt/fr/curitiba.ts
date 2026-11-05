import { images as img, pic } from "../../art";
import type { CityStory, Lesson } from "../../types";
import { PAIRS, YOU, build, choice, g, line, listen, match, missing, script, speak, spell, tf, v } from "./make";

/* Куритиба · «Погода и одежда» · Холодный юг. Хостел Габриэла, погода, одежда и цвета, глагол estar, ботанический сад, уменьшительные -inho. Пипока выучил «Que frio!». */

const p = (name: string) => pic(`pt/curitiba/${name}`);
const GABRIEL = "Gabriel";

const cu1: Lesson = {
  id: "pt-a1-curitiba-1",
  level: "A1",
  cityId: "pt-curitiba",
  number: 1,
  title: "O tempo — Le temps",
  minutes: 7,
  goals: [
    "Demander quel temps il fait",
    "Dire : froid, chaud, pluie, soleil",
    "Donner la température",
  ],
  vocabNote:
    "Curitiba est l'une des grandes villes les plus froides du Brésil. En hiver, il peut y faire 5 °C — et pour les gens de Rio, c'est la vraie glaciation.",
  vocab: [
    v("ptcu1-1", "Como está o tempo?", "Quel temps fait-il ?",
      "Murzik regarde par la fenêtre un ciel gris.",
      p("l1-1")),
    v("ptcu1-2", "Está frio.", "Il fait froid.",
      "Murzik grelotte en s'enveloppant de ses pattes.",
      p("l1-2")),
    v("ptcu1-3", "Faz calor.", "Il fait chaud.",
      "Murzik sur une plage, s'éventant avec une feuille de palmier.",
      p("l1-3")),
    v("ptcu1-4", "Está chovendo.", "Il pleut.",
      "Des gouttes de pluie tapent contre la vitre.",
      p("l1-4")),
    v("ptcu1-5", "Está nublado.", "Le ciel est couvert.",
      "De lourds nuages gris au-dessus de la ville.",
      p("l1-5")),
    v("ptcu1-6", "Faz sol.", "Il fait soleil.",
      "Le soleil perce derrière les nuages.",
      p("l1-6")),
    v("ptcu1-7", "Hoje faz dez graus.", "Aujourd'hui, il fait dix degrés.",
      "Un thermomètre de rue affiche 10 °C.",
      p("l1-7")),
  ],
  dialogue: {
    title: "Le matin à l'auberge de jeunesse",
    note:
      "Só — « seulement ». Graus — « degrés ». Calma! — « Pas de panique ! »",
    lines: [
      line("gabriel", "Bom dia! Bem-vindos a Curitiba!", "Bonjour ! Bienvenue à Curitiba !"),
      line("murzik", "Bom dia! Como está o tempo?", "Bonjour ! Quel temps il fait ?"),
      line("gabriel", "Está frio e nublado. Hoje faz só dez graus.", "Il fait froid et le ciel est couvert. Aujourd'hui, seulement dix degrés."),
      line("bia", "Dez graus? No Rio faz trinta!", "Dix degrés ? À Rio, il en fait trente !"),
      line("murzik", "E está chovendo…", "Et il pleut…"),
      line("gabriel", "Calma! À tarde faz sol.", "Pas de panique ! Cet après-midi, il fera soleil."),
    ],
    gist: choice("ptcu1-d1", "Quel temps fait-il à Curitiba ce matin-là ?", [
      ["Froid, couvert et pluvieux.", true],
      ["Chaud et ensoleillé.", false],
      ["Trente degrés.", false],
    ]),
  },
  grammar: [
    g(
      "Le temps : está et faz",
      [
        "Pour parler du temps, il y a deux façons : está frio ou faz frio — les deux veulent dire « il fait froid ». Faz veut littéralement dire « fait » — comme en français : « il FAIT froid » ! Pour la pluie : está chovendo — « il pleut » (en ce moment même).",
        "Pas besoin de « il » : juste Está frio. Le verbe fait tout le travail. Et bonne nouvelle : en portugais comme en français, on peut dire « il fait froid » des deux côtés.",
      ],
      [
        ["Hoje faz sol.", "Il fait soleil aujourd'hui."],
        ["Está chovendo no Rio.", "Il pleut à Rio."],
      ],
    ),
  ],
  tasks: [
    choice("ptcu1-t1", "Comment dire « Il pleut » ?", [
      ["Está chovendo.", true],
      ["É chovendo.", false],
      ["Faz chuva está.", false],
    ], { skill: "grammar" }),
    listen("ptcu1-t2", "Écoute. Quel temps fait-il ?", "Hoje faz sol e faz calor.", [
      ["Ensoleillé et chaud.", true],
      ["Froid et couvert.", false],
      ["Il pleut.", false],
    ]),
    match("ptcu1-t3", PAIRS, [
      ["Está frio.", "Il fait froid."],
      ["Faz calor.", "Il fait chaud."],
      ["Está nublado.", "Le ciel est couvert."],
      ["Faz sol.", "Il fait soleil."],
    ], { skill: "words" }),
    spell("ptcu1-t4", "Assemble le mot « froid ».", "frio"),
    speak("ptcu1-t5", "Como está o tempo hoje?", "Hoje está frio e está chovendo.", "Aujourd'hui, il fait froid et il pleut.", {
      help: "Raconte à voix haute quel temps il fait chez toi.",
    }),
    choice("ptcu1-t6", "Comment dire « Bonne chance ! » ?", [
      ["Boa sorte!", true],
      ["Boa tarde!", false],
      ["Até logo!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "blanket",
    itemName: "Couverture en laine",
    itemNameRu: "Cobertor",
    ru: "Oba! Um cobertor!",
    en: "Hourra ! Une couverture !",
    a11y: "Une épaisse couverture en laine à carreaux sur le lit superposé du haut.",
    image: p("blanket"),
    steps: [
      "Murzik grelotte dans son lit.",
      "Gabriel apporte une épaisse couverture.",
      "« Aqui no Sul a gente precisa disso! » — « Ici, dans le Sud, on en a besoin ! »",
      "Murzik s'enroule dedans. Enfin au chaud !",
    ],
    bridge: "On ne va pas se promener en ville avec une couverture. Il faut des vêtements chauds.",
  },
};

const cu2: Lesson = {
  id: "pt-a1-curitiba-2",
  level: "A1",
  cityId: "pt-curitiba",
  number: 2,
  title: "As roupas — Les vêtements",
  minutes: 7,
  goals: [
    "Nommer les vêtements chauds",
    "Dire « j'ai besoin de… »",
    "Complimenter un vêtement",
  ],
  vocabNote:
    "Blusa au Brésil, c'est un pull ou un gilet — pas forcément un chemisier. Cachecol — l'écharpe.",
  vocab: [
    v("ptcu2-1", "o casaco", "le manteau",
      "Un manteau bleu bien chaud est accroché à un portemanteau.",
      p("l2-1")),
    v("ptcu2-2", "o cachecol", "l'écharpe",
      "Une longue écharpe à rayures.",
      p("l2-2")),
    v("ptcu2-3", "o gorro", "le bonnet",
      "Un bonnet tricoté à pompon.",
      p("l2-3")),
    v("ptcu2-4", "as luvas", "les gants",
      "Une paire de petits gants en tricot.",
      p("l2-4")),
    v("ptcu2-5", "Eu preciso de uma blusa.", "J'ai besoin d'un pull.",
      "Murzik, en simple t-shirt, grelotte devant une vitrine.",
      p("l2-5")),
    v("ptcu2-6", "Vista o casaco!", "Mets ton manteau !",
      "Bia tend le manteau à Murzik d'un air sévère.",
      p("l2-6")),
    v("ptcu2-7", "Que roupa bonita!", "Quels beaux vêtements !",
      "Murzik se pavane devant le miroir avec son bonnet et son écharpe.",
      p("l2-7")),
  ],
  dialogue: {
    title: "Le magasin de vêtements chauds",
    note:
      "Tudo isso — « tout ça ». Agora sim! — « Voilà, on y est ! »",
    lines: [
      line("bia", "Murzik, você está de camiseta? Vista o casaco!", "Murzik, tu es en t-shirt ? Mets ton manteau !"),
      line("murzik", "O casaco do Marcos é muito leve… Eu preciso de uma blusa.", "Le manteau de Marcos est trop léger… J'ai besoin d'un pull."),
      line("seller", "Bom dia! Temos casacos, gorros e luvas.", "Bonjour ! Nous avons des manteaux, des bonnets et des gants."),
      line("murzik", "Eu preciso de tudo isso!", "J'ai besoin de tout ça !"),
      line("seller", "E um cachecol?", "Et d'une écharpe ?"),
      line("murzik", "Sim! Agora sim!", "Oui ! Voilà, on y est !"),
      line("bia", "Que roupa bonita, Murzik!", "Comme tu es chic, Murzik !"),
    ],
    gist: choice("ptcu2-d1", "Pourquoi Murzik a-t-il besoin de vêtements ?", [
      ["Son manteau est trop léger, et il fait froid dehors.", true],
      ["Il va à une fête.", false],
      ["Ses vêtements sont trempés.", false],
    ]),
  },
  grammar: [
    g(
      "« J'ai besoin » : preciso de",
      [
        "« J'ai besoin de » se dit eu preciso de — littéralement « j'ai besoin DE » : le de est obligatoire, exactement comme en français ! Eu preciso de um casaco. Et comme toujours, de + o et de + a fusionnent : Eu preciso do bilhete (« j'ai besoin DU billet »).",
        "Estar de — « être en (vêtement) » : Você está de camiseta? — « Tu es en t-shirt ? »",
      ],
      [
        ["Eu preciso de luvas.", "J'ai besoin de gants."],
        ["Você precisa de um gorro.", "Tu as besoin d'un bonnet."],
      ],
    ),
  ],
  tasks: [
    choice("ptcu2-t1", "Comment dire « J'ai besoin d'une écharpe » ?", [
      ["Eu preciso de um cachecol.", true],
      ["Eu preciso um cachecol de.", false],
      ["Eu sou um cachecol.", false],
    ], { skill: "grammar" }),
    listen("ptcu2-t2", "Écoute. Que doit-il mettre ?", "Vista o casaco!", [
      ["Le manteau.", true],
      ["Le bonnet.", false],
      ["Les gants.", false],
    ]),
    match("ptcu2-t3", PAIRS, [
      ["o casaco", "le manteau"],
      ["o gorro", "le bonnet"],
      ["as luvas", "les gants"],
      ["o cachecol", "l'écharpe"],
    ], { skill: "words" }),
    missing("ptcu2-t4", "Quelle lettre manque-t-il ? (« écharpe »)", "cache", "ol", "c", ["c", "s", "q"]),
    speak("ptcu2-t5", "Está frio! Do que você precisa?", "Eu preciso de um casaco e de luvas.", "J'ai besoin d'un manteau et de gants.", {
      help: "Dis à voix haute de quels vêtements chauds tu as besoin.",
    }),
    choice("ptcu2-t6", "Comment demander « Quel temps fait-il ? »", [
      ["Como está o tempo?", true],
      ["Como está você?", false],
      ["Quanto custa o tempo?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "beanie",
    itemName: "Bonnet en tricot",
    itemNameRu: "Gorro",
    ru: "Oba! Um gorro!",
    en: "Hourra ! Un bonnet !",
    a11y: "Un bonnet jaune à pompon vert posé sur l'oreiller.",
    image: p("beanie"),
    steps: [
      "La vendeuse offre un bonnet à Murzik.",
      "Jaune, avec un pompon vert.",
      "« As cores do Brasil! » — « Les couleurs du Brésil ! »",
      "Murzik le pose sur son oreiller.",
    ],
    bridge: "Mais Bia veut un nouveau pull, elle aussi. Et la couleur compte !",
  },
};

const cu3: Lesson = {
  id: "pt-a1-curitiba-3",
  level: "A1",
  cityId: "pt-curitiba",
  number: 3,
  title: "As cores — Les couleurs",
  minutes: 7,
  goals: [
    "Nommer les couleurs",
    "Demander si ça existe dans une autre couleur",
    "Dire « ça te va bien »",
  ],
  vocabNote:
    "La couleur s'accorde avec le nom : casaco vermelho, blusa vermelha. Mais azul et verde ne changent pas selon le genre : casaco azul, blusa azul.",
  vocab: [
    v("ptcu3-1", "Qual é a sua cor favorita?", "Quelle est ta couleur préférée ?",
      "Bia se tient devant un présentoir de pulls de toutes les couleurs.",
      p("l3-1")),
    v("ptcu3-2", "azul", "bleu",
      "Un pull bleu.",
      p("l3-2")),
    v("ptcu3-3", "vermelho, vermelha", "rouge",
      "Un pull rouge et un bonnet rouge.",
      p("l3-3")),
    v("ptcu3-4", "verde e amarelo", "vert et jaune",
      "Une écharpe verte et jaune.",
      p("l3-4")),
    v("ptcu3-5", "Tem em preto?", "Vous l'avez en noir ?",
      "Bia tient un pull blanc et regarde la vendeuse d'un air interrogateur.",
      p("l3-5")),
    v("ptcu3-6", "Fica bem em você!", "Ça te va bien !",
      "Murzik lève le pouce devant Bia, près du miroir.",
      p("l3-6")),
    v("ptcu3-7", "Eu prefiro a branca.", "Je préfère le blanc.",
      "Bia serre un pull blanc contre elle.",
      p("l3-7")),
  ],
  dialogue: {
    title: "Un pull pour Bia",
    note:
      "Cor favorita — « couleur préférée ». Vermelha — « rouge ». Branca — « blanche » (au féminin, parce que a blusa est féminin).",
    lines: [
      line("murzik", "Bia, qual é a sua cor favorita?", "Bia, quelle est ta couleur préférée ?"),
      line("bia", "Azul! Mas esta blusa é vermelha…", "Le bleu ! Mais ce pull est rouge…"),
      line("bia", "Com licença, tem em azul?", "Excusez-moi, vous l'avez en bleu ?"),
      line("seller", "Tem em azul, em preto e em branco.", "Nous l'avons en bleu, en noir et en blanc."),
      line("murzik", "A azul fica bem em você!", "Le bleu te va bien !"),
      line("bia", "Hmm… Eu prefiro a branca. Não, a azul!", "Hmm… Je préfère le blanc. Non, le bleu !"),
    ],
    gist: choice("ptcu3-d1", "Quelle est la couleur préférée de Bia ?", [
      ["Le bleu.", true],
      ["Le rouge.", false],
      ["Le blanc.", false],
    ]),
  },
  grammar: [
    g(
      "Les couleurs s'accordent en genre et en nombre",
      [
        "Les couleurs en -o s'accordent comme les autres adjectifs, exactement comme en français « rouge / rouges » : o casaco vermelho, a blusa vermelha, os gorros vermelhos. Pareil pour preto / preta, branco / branca, amarelo / amarela.",
        "Azul et verde ne changent pas selon le genre — comme « marron » ou « orange » en français ! — seulement selon le nombre : azuis, verdes. Et la couleur se met après le nom : a blusa azul — « le pull bleu ».",
      ],
      [
        ["a blusa vermelha", "le pull rouge"],
        ["as luvas azuis", "les gants bleus"],
      ],
    ),
  ],
  tasks: [
    choice("ptcu3-t1", "Comment dire « le pull blanc » ? (a blusa)", [
      ["a blusa branca", true],
      ["a blusa branco", false],
      ["a branca blusa", false],
    ], { skill: "grammar" }),
    listen("ptcu3-t2", "Écoute. De quelle couleur est le manteau ?", "O casaco é verde.", [
      ["Vert.", true],
      ["Bleu.", false],
      ["Jaune.", false],
    ]),
    match("ptcu3-t3", PAIRS, [
      ["azul", "bleu"],
      ["vermelho", "rouge"],
      ["preto", "noir"],
      ["branco", "blanc"],
    ], { skill: "words" }),
    spell("ptcu3-t4", "Assemble le mot « bleu ».", "azul"),
    speak("ptcu3-t5", "Qual é a sua cor favorita?", "A minha cor favorita é o verde.", "Ma couleur préférée, c'est le vert. (Dis la tienne.)", {
      help: "Dis ta couleur préférée à voix haute.",
    }),
    choice("ptcu3-t6", "Comment dire « J'ai besoin de gants » ?", [
      ["Eu preciso de luvas.", true],
      ["Eu tenho de luvas.", false],
      ["Eu sou luvas.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "pencils",
    itemName: "Crayons de couleur",
    itemNameRu: "Lápis de cor",
    ru: "Oba! Lápis de cor!",
    en: "Hourra ! Des crayons de couleur !",
    a11y: "Un gobelet de crayons de couleur sur la table de nuit.",
    image: p("pencils"),
    steps: [
      "Le soir, Gabriel donne des crayons de couleur à Murzik.",
      "« Desenhe o Pipoca! » — « Dessine Pipoca ! »",
      "Du vert, du jaune, un peu de bleu…",
      "Le dessin est accroché au-dessus du lit.",
    ],
    bridge: "Au matin, Bia et Murzik n'arrivent pas à se réchauffer.",
  },
};

const cu4: Lesson = {
  id: "pt-a1-curitiba-4",
  level: "A1",
  cityId: "pt-curitiba",
  number: 4,
  title: "Estou com frio — J'ai froid",
  minutes: 7,
  goals: [
    "Dire comment tu te sens",
    "Dire « j'ai froid », « je suis fatigué(e) »",
    "Demander où est quelqu'un",
  ],
  vocabNote:
    "Está frio — « il fait froid (dehors) ». Estou com frio — « j'ai froid », littéralement « je suis avec le froid ». Ne les confonds pas !",
  vocab: [
    v("ptcu4-1", "Estou com frio.", "J'ai froid.",
      "Murzik claque des dents, emmitouflé dans son écharpe.",
      p("l4-1")),
    v("ptcu4-2", "Estou bem.", "Je vais bien.",
      "Murzik, dans son manteau chaud, sourit tranquillement.",
      p("l4-2")),
    v("ptcu4-3", "Você está cansado?", "Tu es fatigué ?",
      "Bia regarde Murzik, qui bâille, avec inquiétude.",
      p("l4-3")),
    v("ptcu4-4", "Ela está feliz.", "Elle est heureuse.",
      "Bia rayonne, téléphone à la main.",
      p("l4-4")),
    v("ptcu4-5", "Onde vocês estão?", "Où êtes-vous ?",
      "Le visage de Dona Lúcia à l'écran du téléphone, en visio.",
      p("l4-5")),
    v("ptcu4-6", "Nós estamos em Curitiba.", "Nous sommes à Curitiba.",
      "Murzik et Bia font signe à la caméra du téléphone.",
      p("l4-6")),
    v("ptcu4-7", "Eles estão ocupados.", "Ils sont occupés.",
      "Sur une affiche, les musiciens répètent, tous affairés.",
      p("l4-7")),
  ],
  dialogue: {
    title: "Un appel à Dona Lúcia",
    note:
      "Saudade — un mot brésilien très spécial : le manque de quelqu'un ou de quelque chose de lointain. Estou com saudade — « tu me manques ».",
    lines: [
      line("lucia", "Oi, Bia! Oi, Murzik! Onde vocês estão?", "Salut, Bia ! Salut, Murzik ! Où êtes-vous ?"),
      line("bia", "Nós estamos em Curitiba, vovó!", "Nous sommes à Curitiba, mamie !"),
      line("lucia", "Curitiba? Lá faz muito frio! Você está bem, Murzik?", "À Curitiba ? Il y fait si froid ! Tu vas bien, Murzik ?"),
      line("murzik", "Estou com frio… mas estou bem!", "J'ai froid… mais je vais bien !"),
      line("lucia", "E o Pipoca? E a banda?", "Et Pipoca ? Et le groupe ?"),
      line("bia", "Eles estão ocupados com os shows. Mas o Pipoca está bem!", "Ils sont occupés avec leurs concerts. Mais Pipoca va bien !"),
      line("lucia", "Ai, que bom! Estou com saudade!", "Ah, tant mieux ! Vous me manquez !"),
    ],
    gist: choice("ptcu4-d1", "Comment se sent Murzik ?", [
      ["Il a froid, mais il va bien.", true],
      ["Il est malade.", false],
      ["Il a chaud.", false],
    ]),
  },
  grammar: [
    g(
      "Le verbe estar : estou, está, estamos, estão",
      [
        "Estar — le deuxième verbe « être », pour ce qui change : l'humeur, la forme, le lieu. Les formes : eu estou, você / ele / ela está, nós estamos, vocês / eles / elas estão.",
        "Ser — ce que tu es (Eu sou estudante). Estar — comment tu es et où tu es maintenant (Eu estou cansado, Eu estou em Curitiba). L'adjectif s'accorde quand même : cansado / cansada, comme « fatigué / fatiguée ».",
      ],
      [
        ["Nós estamos no hostel.", "Nous sommes à l'auberge."],
        ["Eu estou cansado. / Eu estou cansada.", "Je suis fatigué. / Je suis fatiguée."],
      ],
    ),
  ],
  tasks: [
    choice("ptcu4-t1", "Comment dire « Nous sommes à Curitiba » ?", [
      ["Nós estamos em Curitiba.", true],
      ["Nós somos em Curitiba.", false],
      ["Nós está em Curitiba.", false],
    ], { skill: "grammar" }),
    listen("ptcu4-t2", "Écoute. Comment se sent la personne ?", "Estou com frio.", [
      ["Elle a froid.", true],
      ["Elle est fatiguée.", false],
      ["Elle est heureuse.", false],
    ]),
    tf("ptcu4-t3", "Está frio et estou com frio veulent dire exactement la même chose.", false, "words"),
    missing("ptcu4-t4", "Quelle lettre manque-t-il ? (« heureux »)", "fel", "z", "i", ["i", "e", "y"]),
    speak("ptcu4-t5", "Você está bem?", "Estou bem, obrigado! Mas estou com frio.", "Je vais bien, merci ! Mais j'ai froid.", {
      help: "Dis à voix haute comment tu te sens.",
    }),
    choice("ptcu4-t6", "Comment dire « Ça te va bien ! » ?", [
      ["Fica bem em você!", true],
      ["Eu prefiro a branca.", false],
      ["Tem em azul?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "slippers",
    itemName: "Chaussons chauds",
    itemNameRu: "Pantufas",
    ru: "Oba! Pantufas!",
    en: "Hourra ! Des chaussons !",
    a11y: "Des chaussons moelleux en forme de petits perroquets, près du lit.",
    image: p("slippers"),
    steps: [
      "Après l'appel, Bia disparaît une demi-heure.",
      "Elle revient avec un sachet.",
      "Dedans : des chaussons moelleux — en forme de perroquets !",
      "Murzik les pose près de son lit.",
    ],
    bridge: "Dans l'après-midi, le soleil se montre. Gabriel conseille d'aller au jardin botanique.",
  },
};

const cu5: Lesson = {
  id: "pt-a1-curitiba-5",
  level: "A1",
  cityId: "pt-curitiba",
  number: 5,
  title: "O Jardim Botânico — Le jardin botanique",
  minutes: 7,
  goals: [
    "Parler du parc et des fleurs",
    "Demander à quelqu'un de te prendre en photo",
    "Dire à qui c'est : de",
  ],
  vocabNote:
    "Araucária — un grand conifère, le symbole de l'État du Paraná. Ses graines, le pinhão, se mangent ici en hiver.",
  vocab: [
    v("ptcu5-1", "o jardim", "le jardin",
      "Un jardin soigné avec des parterres bien réguliers.",
      p("l5-1")),
    v("ptcu5-2", "as flores", "les fleurs",
      "Un parterre plein de fleurs multicolores.",
      p("l5-2")),
    v("ptcu5-3", "a árvore", "l'arbre",
      "Un haut araucaria aux branches en forme de parapluie.",
      p("l5-3")),
    v("ptcu5-4", "Que cheiro bom!", "Quelle bonne odeur !",
      "Murzik hume une fleur les yeux fermés.",
      p("l5-4")),
    v("ptcu5-5", "Tira uma foto de mim?", "Tu peux me prendre en photo ?",
      "Murzik tend son téléphone à Bia et prend la pose devant la serre.",
      p("l5-5")),
    v("ptcu5-6", "Sorria!", "Souris !",
      "Bia tient le téléphone en riant.",
      p("l5-6")),
    v("ptcu5-7", "Ficou ótima!", "Elle est super réussie !",
      "Sur l'écran du téléphone : une belle photo de Murzik devant la serre.",
      p("l5-7")),
  ],
  dialogue: {
    title: "La serre de verre",
    note:
      "Estufa — « serre ». De vidro — « en verre », littéralement « de verre ».",
    lines: [
      line("murzik", "Nossa! Que jardim bonito! E as flores!", "Waouh ! Quel beau jardin ! Et les fleurs !"),
      line("bia", "E olha a estufa de vidro!", "Et regarde la serre de verre !"),
      line("murzik", "Que cheiro bom! Bia, tira uma foto de mim?", "Quelle bonne odeur ! Bia, tu peux me prendre en photo ?"),
      line("bia", "Claro! Com o seu celular?", "Bien sûr ! Avec ton téléphone ?"),
      line("bia", "Um, dois, três… Sorria!", "Un, deux, trois… Souris !"),
      line("murzik", "Ficou ótima! Obrigado!", "Elle est super réussie ! Merci !"),
    ],
    gist: choice("ptcu5-d1", "Que demande Murzik ?", [
      ["Qu'on le prenne en photo.", true],
      ["Qu'on achète des fleurs.", false],
      ["Qu'on rentre à la maison.", false],
    ]),
  },
  grammar: [
    g(
      "À qui : o celular do Murzik",
      [
        "Pour dire « à qui », on utilise de : o celular do Murzik — « le téléphone DE Murzik », a casa da Bia — « la maison DE Bia ». Exactement comme en français : le propriétaire vient après !",
        "De + o = do, de + a = da — les mêmes fusions que dans Eu sou do Brasil, et le même mécanisme que « du / de la » en français.",
      ],
      [
        ["o casaco do Murzik", "le manteau de Murzik"],
        ["a avó da Bia", "la grand-mère de Bia"],
      ],
    ),
  ],
  tasks: [
    choice("ptcu5-t1", "Comment dire « la maison de Bia » ?", [
      ["a casa da Bia", true],
      ["a Bia casa", false],
      ["a casa do Bia", false],
    ], { skill: "grammar" }),
    listen("ptcu5-t2", "Écoute. Que demande-t-on ?", "Tira uma foto de mim?", [
      ["Prendre une photo.", true],
      ["Sourire.", false],
      ["Sentir une fleur.", false],
    ]),
    match("ptcu5-t3", PAIRS, [
      ["o jardim", "le jardin"],
      ["a árvore", "l'arbre"],
      ["as flores", "les fleurs"],
      ["Sorria!", "Souris !"],
    ], { skill: "words" }),
    spell("ptcu5-t4", "Assemble le mot « jardin ».", "jardim"),
    speak("ptcu5-t5", "Quer uma foto?", "Sim! Tira uma foto de mim?", "Oui ! Tu peux me prendre en photo ?", {
      help: "Demande à voix haute qu'on te prenne en photo.",
    }),
    choice("ptcu5-t6", "Comment dire « J'ai froid » ?", [
      ["Estou com frio.", true],
      ["Está frio.", false],
      ["Sou frio.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "postcard",
    itemName: "Carte postale de la serre",
    itemNameRu: "Cartão-postal",
    ru: "Oba! Um cartão-postal!",
    en: "Hourra ! Une carte postale !",
    a11y: "Une carte postale de la serre de verre du jardin botanique, appuyée contre la lampe.",
    image: p("postcard"),
    steps: [
      "À la sortie du jardin, on vend des cartes postales.",
      "Murzik en choisit une avec la serre de verre.",
      "« Para a Dona Lúcia! » — « Pour Dona Lúcia ! »",
      "La carte attend près de la lampe qu'on lui écrive un mot.",
    ],
    bridge: "Le soir, à l'auberge, Gabriel met la bouilloire sur le feu.",
  },
};

const cu6: Lesson = {
  id: "pt-a1-curitiba-6",
  level: "A1",
  cityId: "pt-curitiba",
  number: 6,
  title: "Um chazinho — Un petit thé",
  minutes: 7,
  goals: [
    "Proposer et accepter à boire ou à manger",
    "Dire « j'ai faim », « j'ai soif »",
    "Parler tendrement : -inho",
  ],
  vocabNote:
    "Les Brésiliens adorent les diminutifs : chazinho — « petit thé », pouquinho — « tout petit peu », cafezinho — « petit café ». Ça rend la parole plus chaleureuse.",
  vocab: [
    v("ptcu6-1", "Aceita um chá?", "Tu veux un thé ?",
      "Gabriel tient une théière.",
      p("l6-1")),
    v("ptcu6-2", "Aceito, obrigado!", "Avec plaisir, merci !",
      "Murzik tend joyeusement son mug.",
      p("l6-2")),
    v("ptcu6-3", "Está quentinho.", "Il est tout chaud.",
      "Murzik réchauffe ses pattes sur un mug brûlant.",
      p("l6-3")),
    v("ptcu6-4", "Só um pouquinho.", "Juste un tout petit peu.",
      "Murzik écarte deux doigts d'un tout petit espace.",
      p("l6-4")),
    v("ptcu6-5", "Estou com fome.", "J'ai faim.",
      "Le ventre de Murzik gargouille bruyamment.",
      p("l6-5")),
    v("ptcu6-6", "Estou com sede.", "J'ai soif.",
      "Murzik regarde un verre vide.",
      p("l6-6")),
    v("ptcu6-7", "o pinhão", "les graines d'araucaria",
      "Un bol de graines d'araucaria bouillies, qui ressemblent à de grosses châtaignes.",
      p("l6-7")),
  ],
  dialogue: {
    title: "Le soir à l'auberge",
    note:
      "Aceita? — « Tu veux ? » — la façon polie de proposer. Experimenta! — « Goûte ! »",
    lines: [
      line("gabriel", "Aceita um chá, Murzik?", "Tu veux un thé, Murzik ?"),
      line("murzik", "Aceito, obrigado! Estou com frio e com sede.", "Avec plaisir, merci ! J'ai froid et j'ai soif."),
      line("gabriel", "Aqui está. Está quentinho!", "Voilà. Il est tout chaud !"),
      line("bia", "Eu estou com fome… Tem alguma coisa?", "Moi, j'ai faim… Il y a quelque chose à manger ?"),
      line("gabriel", "Tem pinhão! Experimenta!", "Il y a du pinhão ! Goûte !"),
      line("murzik", "Só um pouquinho… Hmm, que gostoso!", "Juste un tout petit peu… Mmm, comme c'est bon !"),
    ],
    gist: choice("ptcu6-d1", "Que leur offre Gabriel ?", [
      ["Du thé et des graines d'araucaria.", true],
      ["Du café et de la pizza.", false],
      ["Du jus et des petits pains.", false],
    ]),
  },
  grammar: [
    g(
      "Estou com fome : les sensations avec com",
      [
        "La faim, la soif et le froid, les Brésiliens les « portent avec eux » : estou com fome — « j'ai faim », estou com sede — « j'ai soif », estou com frio — « j'ai froid ». Comme en français, on n'utilise pas « être » mais une construction spéciale ! Bonne nouvelle : ici, le genre ne compte pas — hommes et femmes disent la même chose.",
        "Le suffixe -inho / -inha rend un mot petit ou affectueux : chá — chazinho, pouco — pouquinho, quente — quentinho. Un peu comme « un petit thé » en français, mais en un seul mot.",
      ],
      [
        ["Você está com fome?", "Tu as faim ?"],
        ["Um cafezinho, por favor.", "Un petit café, s'il vous plaît."],
      ],
    ),
  ],
  tasks: [
    choice("ptcu6-t1", "Comment dire « J'ai soif » ?", [
      ["Estou com sede.", true],
      ["Sou com sede.", false],
      ["Estou sede.", false],
    ], { skill: "grammar" }),
    listen("ptcu6-t2", "Écoute. Que veut la personne ?", "Só um pouquinho, por favor.", [
      ["Un tout petit peu.", true],
      ["Beaucoup.", false],
      ["Rien.", false],
    ]),
    match("ptcu6-t3", PAIRS, [
      ["Estou com fome.", "J'ai faim."],
      ["Estou com sede.", "J'ai soif."],
      ["Aceita um chá?", "Tu veux un thé ?"],
      ["um pouquinho", "un tout petit peu"],
    ], { skill: "words" }),
    missing("ptcu6-t4", "Quelle lettre manque-t-il ? (« petit thé »)", "cha", "inho", "z", ["z", "s", "ç"]),
    speak("ptcu6-t5", "Aceita um café?", "Aceito, obrigado! Só um pouquinho.", "Avec plaisir, merci ! Juste un tout petit peu.", {
      help: "Accepte à voix haute — obrigado ou obrigada.",
    }),
    choice("ptcu6-t6", "Comment demander « Tu peux me prendre en photo ? »", [
      ["Tira uma foto de mim?", true],
      ["Ficou ótima!", false],
      ["Sorria!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "thermos",
    itemName: "Thermos",
    itemNameRu: "Garrafa térmica",
    ru: "Oba! Uma garrafa térmica!",
    en: "Hourra ! Un thermos !",
    a11y: "Un petit thermos rouge sur le rebord de la fenêtre.",
    image: p("thermos"),
    steps: [
      "Gabriel verse du thé chaud dans un petit thermos.",
      "« Para a viagem! » — « Pour le voyage ! »",
      "Murzik serre le thermos contre lui.",
      "Quelle chaleur !",
    ],
    bridge: "Au matin, Gabriel se frappe soudain le front : « O papagaio! Eu esqueci! »",
  },
};

const cu7: Lesson = {
  id: "pt-a1-curitiba-7",
  level: "A1",
  cityId: "pt-curitiba",
  number: 7,
  title: "Que frio! — Quel froid !",
  minutes: 8,
  goals: [
    "Comprendre ce qu'on raconte sur Pipoca",
    "Remercier pour tout et dire au revoir",
    "Réviser tous les mots de Curitiba",
  ],
  vocabNote:
    "Esqueci — « j'ai oublié ». Manda notícias! — « Donne de tes nouvelles ! » (littéralement « Envoie des nouvelles ! »).",
  vocab: [
    v("ptcu7-1", "Que frio!", "Quel froid !",
      "Le perroquet vert, tout ébouriffé, est assis sous une couverture.",
      p("l7-1")),
    v("ptcu7-2", "Ele estava embaixo do cobertor.", "Il était sous la couverture.",
      "Une queue verte dépasse de sous une couverture à carreaux.",
      p("l7-2")),
    v("ptcu7-3", "Eles foram para Florianópolis.", "Ils sont partis à Florianópolis.",
      "Une carte : une flèche de Curitiba vers une île au bord de la mer.",
      p("l7-3")),
    v("ptcu7-4", "Lá faz calor!", "Là-bas, il fait chaud !",
      "Une petite image : une plage ensoleillée et des palmiers.",
      p("l7-4")),
    v("ptcu7-5", "Obrigado por tudo!", "Merci pour tout !",
      "Murzik serre Gabriel dans ses bras.",
      p("l7-5")),
    v("ptcu7-6", "Manda notícias!", "Donne de tes nouvelles !",
      "Gabriel montre son téléphone.",
      p("l7-6")),
    v("ptcu7-7", "Até mais!", "À bientôt !",
      "Murzik et Bia font signe en partant avec leurs sacs à dos.",
      p("l7-7")),
  ],
  dialogue: {
    title: "Ce que le perroquet a dit",
    note:
      "Tremendo — « en tremblant ». Coitado! — « Le pauvre ! »",
    lines: [
      line("gabriel", "Ah, o papagaio! Eu esqueci! A banda dormiu aqui no hostel.", "Ah, le perroquet ! J'avais oublié ! Le groupe a dormi ici, à l'auberge."),
      line("bia", "E o Pipoca?", "Et Pipoca ?"),
      line("gabriel", "Ele estava embaixo do cobertor, tremendo. E ele disse: Que frio! Que frio!", "Il était sous la couverture, en tremblant. Et il disait : « Quel froid ! Quel froid ! »"),
      line("murzik", "Coitado! E agora? Onde eles estão?", "Le pauvre ! Et maintenant, ils sont où ?"),
      line("gabriel", "Eles foram para Florianópolis. Lá faz calor!", "Ils sont partis à Florianópolis. Là-bas, il fait chaud !"),
      line("murzik", "Obrigado por tudo, Gabriel!", "Merci pour tout, Gabriel !"),
      line("gabriel", "De nada! Manda notícias! Até mais!", "De rien ! Donnez de vos nouvelles ! À bientôt !"),
    ],
    gist: choice("ptcu7-d1", "Quelle phrase Pipoca a-t-il apprise à Curitiba ?", [
      ["« Quel froid ! »", true],
      ["« Combien ça coûte ? »", false],
      ["« Tu veux un thé ? »", false],
    ]),
  },
  grammar: [
    g(
      "Que…! — « Quel… ! »",
      [
        "Pour s'extasier ou se plaindre, on met que devant le mot : Que frio! — « Quel froid ! », Que bonito! — « Comme c'est beau ! », Que pena! — « Quel dommage ! ». C'est le « quel / quelle » français : « Quel froid ! », « Quelle belle eau ! » !",
        "Tu connais déjà plein de ces phrases : Que família grande!, Que água azul!, Que gostoso! Que marche avec presque tous les mots.",
      ],
      [
        ["Que frio!", "Quel froid !"],
        ["Que jardim bonito!", "Quel beau jardin !"],
      ],
    ),
  ],
  tasks: [
    listen("ptcu7-t1", "Examen audio. Que raconte Gabriel ?", "O papagaio estava embaixo do cobertor e disse: Que frio! Agora a banda está em Florianópolis.", [
      ["Le perroquet avait froid, et le groupe est maintenant à Florianópolis.", true],
      ["Le perroquet est tombé malade et est resté à l'auberge.", false],
      ["Le groupe est retourné à São Paulo.", false],
    ]),
    choice("ptcu7-t2", "Comment dire « Merci pour tout ! » ?", [
      ["Obrigado por tudo!", true],
      ["Obrigado de nada!", false],
      ["Tudo bem, obrigado!", false],
    ], { skill: "words" }),
    build("ptcu7-t3", "Assemble la phrase : « Ils sont partis à Florianópolis ».", ["Eles", "foram", "para", "Florianópolis."]),
    missing("ptcu7-t4", "Quelle lettre manque-t-il ? (« couverture »)", "cobert", "r", "o", ["o", "u", "a"]),
    speak("ptcu7-t5", "Manda notícias! Até mais!", "Obrigado por tudo! Até mais!", "Merci pour tout ! À bientôt !", {
      help: "Dis au revoir à voix haute — obrigado ou obrigada.",
    }),
    script("ptcu7-t6", "Souviens-toi de toute Curitiba. Termine la conversation avec Gabriel.", [
      { speaker: GABRIEL, text: "Bom dia! Como você está?" },
      { speaker: YOU, answer: "Estou bem, mas estou com frio!", options: ["Estou bem, mas estou com frio!", "Sou frio.", "Tem em azul?"] },
      { speaker: GABRIEL, text: "Aceita um chá?" },
      { speaker: YOU, answer: "Aceito, obrigado!", options: ["Aceito, obrigado!", "Que pena!", "Ficou ótima!"] },
      { speaker: GABRIEL, text: "Lá fora está chovendo. Você precisa de um casaco!" },
      { speaker: YOU, answer: "Sim, e de um gorro também!", options: ["Sim, e de um gorro também!", "Sim, eu prefiro o calor.", "Não, estou com fome."] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-curitiba",
    itemName: "Photo de Pipoca sous la couverture",
    itemNameRu: "Foto do Pipoca no hostel",
    ru: "Oba! Mais uma foto do Pipoca!",
    en: "Hourra ! Encore une photo de Pipoca !",
    a11y: "Une photo : le perroquet vert regarde de sous une couverture à carreaux, avec un bonnet minuscule sur la tête.",
    image: p("photo"),
    steps: [
      "Gabriel montre une photo : Pipoca sous la couverture.",
      "Sur sa tête, un bonnet minuscule !",
      "Murzik rit aux larmes.",
      "Légende : « Que frio! » La photo rejoint l'album.",
    ],
    bridge: "Le bus descend des montagnes vers la mer. Il fait de plus en plus chaud.",
  },
};

const story: CityStory = {
  home: {
    name: "Un lit à l'auberge de Gabriel",
    nameRu: "A cama no hostel do Gabriel",
    image: p("home"),
    a11y:
      "Une chambre d'auberge de jeunesse : un lit superposé en bois, une petite fenêtre au ciel gris. La valise de Murzik est sur le lit du bas.",
  },
  keepsakeId: "photo-curitiba",
  welcomeRu: "Olá, Curitiba!",
  welcomeEn: "Bonjour, Curitiba !",
  welcomeImage: p("arrival"),
  welcomeA11y:
    "Murzik et Bia descendent du bus en t-shirt sous une pluie fine. Tout le monde autour porte manteau et écharpe.",
  departureImage: p("departure"),
  departureA11y: "Gabriel fait signe au pas de la porte de l'auberge.",
  finale: [
    {
      image: p("photo"),
      a11y: "Murzik colle dans l'album la photo de Pipoca avec son petit bonnet.",
      lines: [
        { en: "Quatrième page de l'album : Pipoca sous la couverture, à l'auberge." },
        { ru: "Que frio!", en: "Quel froid !" },
        { en: "Courage, Pipoca. La mer et le soleil arrivent !" },
      ],
    },
    {
      image: img.greet,
      a11y: "Murzik saute de joie.",
      lines: [
        { ru: "Curitiba completa!", en: "Curitiba terminée !" },
        { en: "7 / 7 leçons" },
      ],
    },
    {
      image: p("departure"),
      a11y: "Gabriel fait un signe d'adieu.",
      lines: [
        { ru: "Tchau, Gabriel!", en: "Au revoir, Gabriel !" },
        { ru: "Próxima parada: Florianópolis!", en: "Prochain arrêt : Florianópolis !" },
      ],
    },
    {
      image: p("bus"),
      a11y: "Le bus descend une route en lacets ; devant, la mer apparaît.",
      lines: [{ ru: "Curitiba → Florianópolis", en: "Curitiba → Florianópolis" }],
    },
    {
      image: pic("pt/floripa/arrival"),
      a11y:
        "Murzik enlève bonnet et écharpe : devant lui, un long pont vers une île, la mer bleue et le soleil.",
      lines: [
        { ru: "Olá, Florianópolis!", en: "Bonjour, Florianópolis !" },
        { ru: "Finalmente, sol!", en: "Enfin le soleil !" },
      ],
    },
  ],
};

export const ptCuritibaFr = {
  id: "pt-curitiba",
  name: "Curitiba",
  namePt: "Curitiba",
  lessons: [cu1, cu2, cu3, cu4, cu5, cu6, cu7],
  story,
};
