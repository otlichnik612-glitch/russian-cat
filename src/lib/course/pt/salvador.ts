import { images as img, pic } from "../art";
import type { CityStory, Lesson } from "../types";
import { PAIRS, YOU, build, choice, g, line, listen, match, missing, script, speak, spell, t, v } from "./make";

/* Салвадор · «Еда и рынок» · Старый центр Пелоуринью, дона Селести и её акараже. Рынок и количества, «предпочитаю», острое, капоэйра, «a gente», его и её, барабаны. Пипока выучил «Tá uma delícia!». */

const p = (name: string) => pic(`pt/salvador/${name}`);
const CELESTE = t("Дона Селести", "Dona Celeste");

const sa1: Lesson = {
  id: "pt-a1-salvador-1",
  level: "A1",
  cityId: "pt-salvador",
  number: 1,
  title: t("Na feira — На рынке", "Na feira — At the market"),
  minutes: 7,
  goals: [
    t("Купить фрукты на вес", "Buy fruit by weight"),
    t("Сказать «килограмм», «полкило», «дюжина»", "Say “a kilo”, “half a kilo”, “a dozen”"),
    t("Спросить, спелое ли", "Ask if something is ripe"),
  ],
  vocabNote: t(
    "Feira — уличный рынок под открытым небом. В Салвадоре на рынках продают фрукты, которых в Европе почти не увидишь: жака, кажу, питанга.",
    "A feira is an open-air street market. In Salvador you'll find fruit you rarely see in Europe: jackfruit, cashew fruit, pitanga.",
  ),
  vocab: [
    v("ptsa1-1", "Eu quero um quilo de manga.", t("Мне килограмм манго.", "I'd like a kilo of mangoes."),
      t("Мурзик показывает на гору спелых манго.", "Murzik points to a pile of ripe mangoes."),
      p("l1-1")),
    v("ptsa1-2", "meio quilo de tomate", t("полкило помидоров", "half a kilo of tomatoes"),
      t("На весах — пакет с помидорами, стрелка на 0,5.", "A bag of tomatoes on the scales, the needle at 0.5."),
      p("l1-2")),
    v("ptsa1-3", "uma dúzia de bananas", t("дюжина бананов", "a dozen bananas"),
      t("Большая связка бананов — двенадцать штук.", "A big bunch of twelve bananas."),
      p("l1-3")),
    v("ptsa1-4", "Quanto é o quilo?", t("Сколько стоит килограмм?", "How much is it a kilo?"),
      t("Продавщица в ярком платке за фруктовым прилавком.", "A stallholder in a bright headscarf behind a fruit stall."),
      p("l1-4")),
    v("ptsa1-5", "Esta manga está madura?", t("Это манго спелое?", "Is this mango ripe?"),
      t("Мурзик осторожно нюхает манго.", "Murzik carefully sniffs a mango."),
      p("l1-5")),
    v("ptsa1-6", "Que fruta é essa?", t("Что это за фрукт?", "What fruit is that?"),
      t("Мурзик с удивлением смотрит на огромный колючий плод жака.", "Murzik stares in surprise at a huge spiky jackfruit."),
      p("l1-6")),
    v("ptsa1-7", "Pode escolher!", t("Выбирайте!", "Help yourself — choose!"),
      t("Продавщица широким жестом показывает на прилавок.", "The stallholder waves a hand over the whole stall."),
      p("l1-7")),
  ],
  dialogue: {
    title: t("Утренний рынок", "The morning market"),
    note: t(
      "Jaca — жака, огромный тропический фрукт. Freguês — «покупатель, клиент» (так ласково обращаются продавцы).",
      "Jaca is jackfruit, a huge tropical fruit. Freguês means “customer” — stallholders use it as a friendly way to address you.",
    ),
    lines: [
      line("seller", "Bom dia, freguês! Pode escolher!", t("Доброе утро, дорогой покупатель! Выбирайте!", "Morning, my friend! Take your pick!")),
      line("murzik", "Bom dia! Quanto é o quilo da manga?", t("Доброе утро! Сколько стоит килограмм манго?", "Good morning! How much is a kilo of mangoes?")),
      line("seller", "Oito reais.", t("Восемь реалов.", "Eight reais.")),
      line("murzik", "Esta manga está madura?", t("Это манго спелое?", "Is this mango ripe?")),
      line("seller", "Está! Doce como mel!", t("Спелое! Сладкое, как мёд!", "It is! Sweet as honey!")),
      line("murzik", "Então eu quero um quilo de manga e uma dúzia de bananas.", t("Тогда мне килограмм манго и дюжину бананов.", "Then I'd like a kilo of mangoes and a dozen bananas.")),
      line("bia", "Murzik, olha! Que fruta é essa?", t("Мурзик, смотри! Что это за фрукт?", "Murzik, look! What fruit is that?")),
      line("seller", "É jaca! É a maior fruta de árvore do mundo!", t("Это жака! Самый большой фрукт, который растёт на дереве!", "That's jackfruit! The biggest tree fruit in the world!")),
    ],
    gist: choice("ptsa1-d1", t("Что покупает Мурзик?", "What does Murzik buy?"), [
      [t("Манго и бананы.", "Mangoes and bananas."), true],
      [t("Жаку.", "A jackfruit."), false],
      [t("Помидоры.", "Tomatoes."), false],
    ]),
  },
  grammar: [
    g(
      t("Сколько: um quilo de, uma dúzia de", "Quantities: um quilo de, uma dúzia de"),
      [
        t(
          "После слов количества ставят de: um quilo de manga, meio quilo de tomate, uma dúzia de bananas, um pouco de água. Артикль после de не нужен.",
          "Quantity words are followed by de (of): um quilo de manga, meio quilo de tomate, uma dúzia de bananas, um pouco de água. No “the” after de here.",
        ),
        t(
          "Meio — «пол-»: meio quilo, meia dúzia. Meio меняется по роду: o quilo — meio, a dúzia — meia.",
          "Meio means “half”: meio quilo, meia dúzia. It agrees with the noun: meio quilo (masculine), meia dúzia (feminine).",
        ),
      ],
      [
        ["dois quilos de batata", t("два килограмма картошки", "two kilos of potatoes")],
        ["meia dúzia de ovos", t("полдюжины яиц", "half a dozen eggs")],
      ],
    ),
  ],
  tasks: [
    choice("ptsa1-t1", t("Как сказать «полдюжины бананов»? (a dúzia)", "How do you say “half a dozen bananas”? (a dúzia)"), [
      ["meia dúzia de bananas", true],
      ["meio dúzia de bananas", false],
      ["meia dúzia bananas", false],
    ], { skill: "grammar" }),
    listen("ptsa1-t2", t("Послушай. Что хочет покупатель?", "Listen. What does the customer want?"), "Eu quero meio quilo de tomate.", [
      [t("Полкило помидоров.", "Half a kilo of tomatoes."), true],
      [t("Килограмм манго.", "A kilo of mangoes."), false],
      [t("Дюжину бананов.", "A dozen bananas."), false],
    ]),
    match("ptsa1-t3", PAIRS, [
      ["um quilo", t("килограмм", "a kilo")],
      ["meio quilo", t("полкило", "half a kilo")],
      ["uma dúzia", t("дюжина", "a dozen")],
      ["madura", t("спелая", "ripe")],
    ], { skill: "words" }),
    spell("ptsa1-t4", t("Собери из букв слово «фрукт».", "Spell the word for “fruit”."), "fruta"),
    speak("ptsa1-t5", "Bom dia! O que você quer?", "Eu quero um quilo de manga, por favor.", t("Мне килограмм манго, пожалуйста.", "A kilo of mangoes, please."), {
      help: t("Купи вслух любые фрукты.", "Buy some fruit aloud."),
    }),
    choice("ptsa1-t6", t("Как сказать «Вам понравится!»?", "How do you say “You'll love it!”?"), [
      ["Vocês vão gostar!", true],
      ["Vocês gostaram nada!", false],
      ["Siga em frente!", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "basket",
    itemName: t("Корзинка с фруктами", "Fruit basket"),
    itemNameRu: "Cesta de frutas",
    ru: "Oba! Uma cesta de frutas!",
    en: t("Ура! Корзинка с фруктами!", "Hooray! A fruit basket!"),
    a11y: t("Плетёная корзинка с манго, бананами и маленьким ананасом стоит на столе.", "A woven basket of mangoes, bananas and a small pineapple sits on the table."),
    image: p("basket"),
    steps: [
      t("Продавщица кладёт фрукты в плетёную корзинку.", "The stallholder puts the fruit in a woven basket."),
      t("И добавляет маленький ананас в подарок.", "And adds a little pineapple as a gift."),
      t("«É presente da feira!» — «Подарок от рынка!»", "“É presente da feira!” — “A present from the market!”"),
      t("Корзинка стоит на столе в комнате.", "The basket sits on the table in their room."),
    ],
    bridge: t("Биа спрашивает: «Murzik, você prefere manga ou abacaxi?»", "Bia asks: “Murzik, você prefere manga ou abacaxi?”"),
  },
};

const sa2: Lesson = {
  id: "pt-a1-salvador-2",
  level: "A1",
  cityId: "pt-salvador",
  number: 2,
  title: t("Eu prefiro… — Я предпочитаю…", "Eu prefiro… — I prefer…"),
  minutes: 7,
  goals: [
    t("Сказать, что тебе больше нравится", "Say what you prefer"),
    t("Спросить «Что ты выберешь?»", "Ask “Which do you prefer?”"),
    t("Ответить «мне всё равно»", "Say “I don't mind”"),
  ],
  vocabNote: t(
    "Tanto faz — «мне всё равно», очень частое выражение. Нейтральное, не грубое.",
    "Tanto faz means “I don't mind, either is fine” — a very common, perfectly polite phrase.",
  ),
  vocab: [
    v("ptsa2-1", "Você prefere manga ou abacaxi?", t("Тебе больше нравится манго или ананас?", "Do you prefer mango or pineapple?"),
      t("Биа держит в одной руке манго, в другой — ананас.", "Bia holds a mango in one hand and a pineapple in the other."),
      p("l2-1")),
    v("ptsa2-2", "Eu prefiro manga.", t("Мне больше нравится манго.", "I prefer mango."),
      t("Мурзик тянется лапой к манго.", "Murzik reaches a paw towards the mango."),
      p("l2-2")),
    v("ptsa2-3", "Qual você prefere?", t("Какой ты выберешь?", "Which one do you prefer?"),
      t("Два сока в стаканах: оранжевый и розовый.", "Two glasses of juice: one orange, one pink."),
      p("l2-3")),
    v("ptsa2-4", "Eu gosto mais de suco de caju.", t("Мне больше нравится сок кажу.", "I like cashew-fruit juice best."),
      t("Биа с удовольствием пьёт розоватый сок через трубочку.", "Bia happily sips a pinkish juice through a straw."),
      p("l2-4")),
    v("ptsa2-5", "Tanto faz.", t("Мне всё равно.", "I don't mind."),
      t("Мурзик пожимает плечами и улыбается.", "Murzik shrugs and smiles."),
      p("l2-5")),
    v("ptsa2-6", "Os dois!", t("Оба!", "Both!"),
      t("Мурзик хватает оба стакана сразу.", "Murzik grabs both glasses at once."),
      p("l2-6")),
    v("ptsa2-7", "Nenhum dos dois.", t("Ни тот, ни другой.", "Neither."),
      t("Мурзик качает головой над тарелкой с перцами.", "Murzik shakes his head at a plate of chillies."),
      p("l2-7")),
  ],
  dialogue: {
    title: t("Сок или сок?", "Juice or juice?"),
    note: t(
      "Caju — кажу, плод, на котором растёт орех кешью. Из него делают очень популярный сок.",
      "Caju is the cashew fruit — the cashew nut grows on it. Its juice is hugely popular in Brazil.",
    ),
    lines: [
      line("bia", "Murzik, você prefere manga ou abacaxi?", t("Мурзик, тебе больше нравится манго или ананас?", "Murzik, do you prefer mango or pineapple?")),
      line("murzik", "Eu prefiro manga. E você?", t("Мне — манго. А тебе?", "I prefer mango. What about you?")),
      line("bia", "Eu gosto mais de caju! Olha, tem suco de caju e de laranja. Qual você prefere?", t("Мне больше нравится кажу! Смотри, есть сок кажу и апельсиновый. Какой выберешь?", "I like cashew fruit best! Look, there's cashew juice and orange. Which do you prefer?")),
      line("murzik", "Tanto faz… Não, os dois!", t("Мне всё равно… Нет, оба!", "I don't mind… No — both!")),
      line("bia", "Ha! E pimenta? Você quer pimenta?", t("Ха! А перец? Хочешь острый перчик?", "Ha! And chilli? Do you want some chilli?")),
      line("murzik", "Pimenta? Nenhuma! Obrigado!", t("Перец? Ни за что! Спасибо!", "Chilli? None at all! Thanks!")),
    ],
    gist: choice("ptsa2-d1", t("Какой сок выбирает Мурзик?", "Which juice does Murzik choose?"), [
      [t("Оба.", "Both."), true],
      [t("Только апельсиновый.", "Only the orange."), false],
      [t("Никакой.", "Neither."), false],
    ]),
  },
  grammar: [
    g(
      t("Preferir и gostar mais de", "Preferir and gostar mais de"),
      [
        t(
          "Preferir — «предпочитать»: eu prefiro, você / ele prefere, nós preferimos, eles preferem. В форме «я» гласная меняется: prefiro, а не «prefero».",
          "Preferir (to prefer): eu prefiro, você / ele prefere, nós preferimos, eles preferem. Note the vowel change in “I”: prefiro.",
        ),
        t(
          "То же самое можно сказать через gostar: Eu gosto mais de caju — «мне больше нравится кажу».",
          "You can say the same with gostar: Eu gosto mais de caju — I like cashew fruit more.",
        ),
      ],
      [
        ["Eu prefiro o mar.", t("Я предпочитаю море.", "I prefer the sea.")],
        ["Ela gosta mais de café.", t("Ей больше нравится кофе.", "She likes coffee more.")],
      ],
    ),
  ],
  tasks: [
    choice("ptsa2-t1", t("Как сказать «Я предпочитаю ананас»?", "How do you say “I prefer pineapple”?"), [
      ["Eu prefiro abacaxi.", true],
      ["Eu prefero abacaxi.", false],
      ["Eu prefere abacaxi.", false],
    ], { skill: "grammar" }),
    listen("ptsa2-t2", t("Послушай. Что отвечает человек?", "Listen. What does the person answer?"), "Tanto faz.", [
      [t("Мне всё равно.", "I don't mind."), true],
      [t("Оба!", "Both!"), false],
      [t("Ни один.", "Neither."), false],
    ]),
    match("ptsa2-t3", PAIRS, [
      ["Eu prefiro.", t("Я предпочитаю.", "I prefer.")],
      ["Tanto faz.", t("Мне всё равно.", "I don't mind.")],
      ["Os dois!", t("Оба!", "Both!")],
      ["Nenhum dos dois.", t("ни тот, ни другой", "neither")],
    ], { skill: "words" }),
    missing("ptsa2-t4", t("Какой буквы не хватает? («ананас»)", "Which letter is missing? (“pineapple”)"), "abaca", "i", "x", ["x", "ch", "s"]),
    speak("ptsa2-t5", "Você prefere café ou chá?", "Eu prefiro café.", t("Я предпочитаю кофе. (Скажи, что выбираешь ты.)", "I prefer coffee. (Say what you'd choose.)"), {
      help: t("Скажи вслух, что тебе больше нравится.", "Say aloud which one you prefer."),
    }),
    choice("ptsa2-t6", t("Как спросить «Сколько стоит килограмм?»", "How do you ask “How much is it a kilo?”"), [
      ["Quanto é o quilo?", true],
      ["Quantos quilos?", false],
      ["Quanto custam?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "cocada",
    itemName: t("Коробочка кокады", "Box of cocada"),
    itemNameRu: "Cocada",
    ru: "Oba! Cocada!",
    en: t("Ура! Кокада!", "Hooray! Cocada!"),
    a11y: t("Коробочка с кокосовыми сладостями — белыми и коричневыми квадратиками.", "A little box of coconut sweets — white and brown squares."),
    image: p("cocada"),
    steps: [
      t("На рынке Мурзик пробует кокаду — сладость из кокоса.", "At the market Murzik tries cocada — a coconut sweet."),
      t("Белую или тёмную? «Tanto faz!»", "White or dark? “Tanto faz!”"),
      t("Продавщица кладёт ему в коробочку обе.", "The seller puts both kinds in a little box for him."),
      t("Коробочка стоит на полке. Если не съесть сразу…", "The box sits on the shelf. If he can resist…"),
    ],
    bridge: t("Вечером Биа ведёт Мурзика к знаменитой продавщице акараже.", "In the evening Bia takes Murzik to a famous acarajé seller."),
  },
};

const sa3: Lesson = {
  id: "pt-a1-salvador-3",
  level: "A1",
  cityId: "pt-salvador",
  number: 3,
  title: t("O acarajé — Акараже", "O acarajé — Acarajé"),
  minutes: 7,
  goals: [
    t("Заказать уличную еду", "Order street food"),
    t("Попросить без острого или чуть-чуть", "Ask for it mild or not spicy"),
    t("Попросить по-простому: Me dá…", "Ask casually: Me dá…"),
  ],
  vocabNote: t(
    "Acarajé — жареный пирожок из фасоли с начинкой из креветок, символ Баии. Его продают женщины в белых кружевных платьях, их зовут baianas.",
    "Acarajé is a fried bean fritter filled with shrimp — the symbol of Bahia. It's sold by women in white lace dresses called baianas.",
  ),
  vocab: [
    v("ptsa3-1", "Um acarajé, por favor.", t("Один акараже, пожалуйста.", "One acarajé, please."),
      t("Женщина в белом кружевном платье и тюрбане жарит пирожки.", "A woman in a white lace dress and turban fries fritters."),
      p("l3-1")),
    v("ptsa3-2", "Com pimenta ou sem?", t("С перцем или без?", "With chilli or without?"),
      t("Баиана держит ложку над миской с красным перцем.", "The baiana holds a spoon over a bowl of red chilli."),
      p("l3-2")),
    v("ptsa3-3", "Pouca pimenta, por favor.", t("Совсем немного перца, пожалуйста.", "Just a little chilli, please."),
      t("Мурзик показывает пальцами крошечное количество.", "Murzik shows a tiny amount with his fingers."),
      p("l3-3")),
    v("ptsa3-4", "Está muito apimentado!", t("Очень остро!", "It's really spicy!"),
      t("Мурзик с красным лицом, из ушей идёт пар.", "Murzik's face is bright red, steam puffing from his ears."),
      p("l3-4")),
    v("ptsa3-5", "Me dá uma água?", t("Дайте воды?", "Can I have some water?"),
      t("Мурзик в панике тянет лапы к бутылке воды.", "Murzik reaches desperately for a bottle of water."),
      p("l3-5")),
    v("ptsa3-6", "Quanto fica?", t("Сколько с меня?", "How much is that?"),
      t("Мурзик достаёт кошелёк из ракушек.", "Murzik takes out his shell purse."),
      p("l3-6")),
    v("ptsa3-7", "Pode ficar com o troco.", t("Сдачи не надо.", "Keep the change."),
      t("Мурзик с улыбкой отодвигает монетки.", "Murzik smiles and pushes the coins back."),
      p("l3-7")),
  ],
  dialogue: {
    title: t("У доны Селести", "At Dona Celeste's"),
    note: t(
      "Meu filho / minha filha — «сынок, дочка»: так ласково говорят с незнакомыми пожилые баиянки. Camarão — «креветка».",
      "Meu filho (my son) is how older Bahian women affectionately address people. Camarão means “shrimp”.",
    ),
    lines: [
      line("celeste", "Boa noite, meu filho! O que vai ser?", t("Добрый вечер, сынок! Что будешь?", "Good evening, my dear! What'll it be?")),
      line("murzik", "Um acarajé, por favor.", t("Один акараже, пожалуйста.", "One acarajé, please.")),
      line("celeste", "Com pimenta ou sem?", t("С перцем или без?", "With chilli or without?")),
      line("murzik", "Pouca pimenta, por favor.", t("Совсем немного перца, пожалуйста.", "Just a little chilli, please.")),
      line("murzik", "Ai! Está muito apimentado! Me dá uma água?", t("Ай! Очень остро! Дайте воды!", "Ow! It's really spicy! Can I have some water?")),
      line("celeste", "Ha ha! Pouca pimenta da Bahia é muita pimenta!", t("Ха-ха! Немного баиянского перца — это очень много перца!", "Ha ha! A little Bahian chilli is a lot of chilli!")),
      line("murzik", "Quanto fica? — Dez reais. — Pode ficar com o troco!", t("Сколько с меня? — Десять реалов. — Сдачи не надо!", "How much is that? — Ten reais. — Keep the change!")),
    ],
    gist: choice("ptsa3-d1", t("Почему Мурзик просит воды?", "Why does Murzik ask for water?"), [
      [t("Акараже оказался очень острым.", "The acarajé turned out to be very spicy."), true],
      [t("Он хотел вымыть лапы.", "He wanted to wash his paws."), false],
      [t("Он подавился.", "He choked."), false],
    ]),
  },
  grammar: [
    g(
      t("Me dá…? — «Дай(те) мне…?»", "Me dá…? — “Can I have…?”"),
      [
        t(
          "Me dá uma água? — разговорная просьба, буквально «мне даёшь воду?». Me — «мне, меня», и в разговоре бразильцы ставят его перед глаголом: me dá, me ajuda.",
          "Me dá uma água? is a casual way to ask for something — literally “(you) give me a water?”. Me means “me”, and in speech Brazilians put it before the verb: me dá, me ajuda (help me).",
        ),
        t(
          "Вежливее — Eu queria… или Você pode me dar…? А Me dá… — как «давай-ка», среди своих и на рынке.",
          "More polite options: Eu queria… or Você pode me dar…? Me dá… is fine at markets and among friends.",
        ),
      ],
      [
        ["Me dá um suco?", t("Дай(те) мне сок?", "Can I have a juice?")],
        ["Você pode me ajudar?", t("Вы можете мне помочь?", "Can you help me?")],
      ],
    ),
  ],
  tasks: [
    choice("ptsa3-t1", t("Как по-простому попросить воды?", "How do you casually ask for water?"), [
      ["Me dá uma água?", true],
      ["Dá me uma água?", false],
      ["Eu dá uma água?", false],
    ], { skill: "grammar" }),
    listen("ptsa3-t2", t("Послушай. Что спрашивает дона Селести?", "Listen. What does Dona Celeste ask?"), "Com pimenta ou sem?", [
      [t("С перцем или без?", "With chilli or without?"), true],
      [t("Сколько с вас?", "How much do you owe?"), false],
      [t("Хотите воды?", "Do you want water?"), false],
    ]),
    match("ptsa3-t3", PAIRS, [
      ["a pimenta", t("острый перец", "chilli")],
      ["apimentado", t("острый", "spicy")],
      ["o troco", t("сдача", "the change")],
      ["Quanto fica?", t("Сколько с меня?", "How much is that?")],
    ], { skill: "words" }),
    spell("ptsa3-t4", t("Собери из букв слово «перец».", "Spell the word for “chilli”."), "pimenta"),
    speak("ptsa3-t5", "Com pimenta ou sem?", "Sem pimenta, por favor!", t("Без перца, пожалуйста!", "No chilli, please!"), {
      help: t("Ответь вслух. Можно сказать и Pouca pimenta!", "Answer aloud. You could also say Pouca pimenta!"),
    }),
    choice("ptsa3-t6", t("Как сказать «Мне всё равно»?", "How do you say “I don't mind”?"), [
      ["Tanto faz.", true],
      ["Os dois!", false],
      ["Eu prefiro.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "ribbon",
    itemName: t("Ленточка на счастье", "Wish ribbon"),
    itemNameRu: "Fitinha",
    ru: "Oba! Uma fitinha!",
    en: t("Ура! Ленточка!", "Hooray! A wish ribbon!"),
    a11y: t("На лапе у Мурзика завязана тонкая жёлтая ленточка.", "A thin yellow ribbon is tied around Murzik's paw."),
    image: p("ribbon"),
    steps: [
      t("Дона Селести завязывает на лапе у Мурзика яркую ленточку.", "Dona Celeste ties a bright ribbon around Murzik's paw."),
      t("«Faça um desejo!» — «Загадай желание!»", "“Faça um desejo!” — “Make a wish!”"),
      t("Мурзик загадывает: найти Пипоку к дню рождения.", "Murzik wishes: to find Pipoca in time for the birthday."),
      t("Пока ленточка не порвётся сама, снимать нельзя.", "You mustn't take it off until it falls off by itself."),
    ],
    bridge: t("На площади звучит странная музыка: «бэн-бэн», барабан и хлопки. Что это?", "Strange music rings out across the square: a twanging sound, a drum and clapping. What is it?"),
  },
};

const sa4: Lesson = {
  id: "pt-a1-salvador-4",
  level: "A1",
  cityId: "pt-salvador",
  number: 4,
  title: t("A capoeira — Капоэйра", "A capoeira — Capoeira"),
  minutes: 7,
  goals: [
    t("Понять команды в капоэйре", "Understand instructions in capoeira"),
    t("Сказать «мы» по-разговорному: a gente", "Say “we” the casual way: a gente"),
    t("Восхититься: Que energia!", "React: Que energia!"),
  ],
  vocabNote: t(
    "Капоэйра — бразильское искусство: наполовину борьба, наполовину танец, под музыку беримбау. Её не «танцуют», а jogam — «играют».",
    "Capoeira is a Brazilian art — half martial art, half dance, played to the music of the berimbau. People don't “dance” capoeira, they jogam — “play” it.",
  ),
  vocab: [
    v("ptsa4-1", "Você quer jogar capoeira?", t("Хочешь поиграть в капоэйру?", "Do you want to play capoeira?"),
      t("Мастер капоэйры в белых брюках протягивает руку Мурзику.", "A capoeira teacher in white trousers holds out a hand to Murzik."),
      p("l4-1")),
    v("ptsa4-2", "a roda", t("круг", "the circle"),
      t("Люди стоят в кругу и хлопают, в центре двое.", "People stand in a circle clapping, with two players in the middle."),
      p("l4-2")),
    v("ptsa4-3", "o berimbau", t("беримбау", "the berimbau"),
      t("Музыкант играет на инструменте-луке с тыквой.", "A musician plays a bow-shaped instrument with a gourd."),
      p("l4-3")),
    v("ptsa4-4", "Bate palmas!", t("Хлопай!", "Clap!"),
      t("Биа хлопает в ладоши в кругу.", "Bia claps in the circle."),
      p("l4-4")),
    v("ptsa4-5", "Abaixa!", t("Пригнись!", "Duck!"),
      t("Мурзик ловко пригибается, над ним пролетает нога.", "Murzik nimbly ducks as a leg sweeps over him."),
      p("l4-5")),
    v("ptsa4-6", "A gente canta junto.", t("Мы поём все вместе.", "We all sing together."),
      t("Весь круг поёт, подняв руки.", "The whole circle sings, arms raised."),
      p("l4-6")),
    v("ptsa4-7", "Que energia!", t("Какая энергия!", "What energy!"),
      t("Мурзик в восторге прыгает в кругу.", "Murzik leaps about in the circle, thrilled."),
      p("l4-7")),
  ],
  dialogue: {
    title: t("Круг на площади", "The circle in the square"),
    note: t(
      "Mestre — «мастер, учитель». Entra! — «Заходи!». Ginga — основное движение капоэйры, «покачивание».",
      "Mestre means “master, teacher”. Entra! means “Come in!”. The ginga is capoeira's basic swaying step.",
    ),
    lines: [
      line("murzik", "Que música é essa?", t("Что это за музыка?", "What's this music?")),
      line("bia", "É o berimbau! É uma roda de capoeira.", t("Это беримбау! Это круг капоэйры.", "It's the berimbau! It's a capoeira circle.")),
      line("mestre", "Ei, gatinho! Você quer jogar capoeira? Entra na roda!", t("Эй, котик! Хочешь поиграть в капоэйру? Заходи в круг!", "Hey, kitty! Do you want to play capoeira? Come into the circle!")),
      line("murzik", "Eu? Eu não sei…", t("Я? Я не умею…", "Me? I don't know how…")),
      line("bia", "Vai, Murzik! A gente bate palmas!", t("Давай, Мурзик! Мы будем хлопать!", "Go on, Murzik! We'll clap!")),
      line("mestre", "Ginga… ginga… Abaixa!", t("Качайся… качайся… Пригнись!", "Sway… sway… Duck!")),
      line("murzik", "Uau! Que energia!", t("Ух ты! Какая энергия!", "Wow! What energy!")),
    ],
    gist: choice("ptsa4-d1", t("Что делает Мурзик?", "What does Murzik do?"), [
      [t("Пробует капоэйру в кругу.", "He tries capoeira in the circle."), true],
      [t("Играет на беримбау.", "He plays the berimbau."), false],
      [t("Уходит домой.", "He goes home."), false],
    ]),
  },
  grammar: [
    g(
      t("A gente — разговорное «мы»", "A gente — the casual “we”"),
      [
        t(
          "В разговоре бразильцы вместо nós часто говорят a gente — буквально «люди». Глагол при этом — как для «он»: a gente canta (= nós cantamos), a gente vai (= nós vamos).",
          "In everyday speech, Brazilians often say a gente (literally “the people”) instead of nós for “we”. The verb takes the he/she form: a gente canta (= nós cantamos), a gente vai (= nós vamos).",
        ),
        t(
          "Это проще, чем кажется: одна форма глагола на «он, она, ты и мы».",
          "It's actually easier: one verb form covers você, ele, ela and a gente.",
        ),
      ],
      [
        ["A gente vai à praia.", t("Мы идём на пляж.", "We're going to the beach.")],
        ["A gente gosta de música.", t("Мы любим музыку.", "We like music.")],
      ],
    ),
  ],
  tasks: [
    choice("ptsa4-t1", t("Как по-разговорному сказать «Мы поём»?", "How do you say “We sing” the casual way?"), [
      ["A gente canta.", true],
      ["A gente cantamos.", false],
      ["A gente cantam.", false],
    ], { skill: "grammar" }),
    listen("ptsa4-t2", t("Послушай. Что надо делать?", "Listen. What should you do?"), "Abaixa!", [
      [t("Пригнуться.", "Duck."), true],
      [t("Хлопать.", "Clap."), false],
      [t("Петь.", "Sing."), false],
    ]),
    match("ptsa4-t3", PAIRS, [
      ["a roda", t("круг", "the circle")],
      ["o berimbau", t("беримбау", "the berimbau")],
      ["Bate palmas!", t("Хлопай!", "Clap!")],
      ["Abaixa!", t("Пригнись!", "Duck!")],
    ], { skill: "words" }),
    missing("ptsa4-t4", t("Какой буквы не хватает? («энергия»)", "Which letter is missing? (“energy”)"), "ener", "ia", "g", ["g", "j", "x"]),
    speak("ptsa4-t5", "Você quer jogar capoeira?", "Quero! Mas eu não sei. Você me ensina?", t("Хочу! Но я не умею. Научишь меня?", "I'd love to! But I don't know how. Will you teach me?"), {
      help: t("Ответь вслух и попроси научить.", "Answer aloud and ask to be taught."),
    }),
    choice("ptsa4-t6", t("Как сказать «Сдачи не надо»?", "How do you say “Keep the change”?"), [
      ["Pode ficar com o troco.", true],
      ["Me dá o troco.", false],
      ["Quanto fica o troco?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "berimbau",
    itemName: t("Маленький беримбау", "Little berimbau"),
    itemNameRu: "Berimbau",
    ru: "Oba! Um berimbau!",
    en: t("Ура! Беримбау!", "Hooray! A berimbau!"),
    a11y: t("У стены стоит маленький беримбау: деревянный лук со струной и тыквой-резонатором.", "A little berimbau leans against the wall: a wooden bow with one string and a gourd."),
    image: p("berimbau"),
    steps: [
      t("После круга мастер дарит Мурзику маленький беримбау.", "After the circle the teacher gives Murzik a small berimbau."),
      t("«Você tem ginga!» — «У тебя есть ритм!»", "“Você tem ginga!” — “You've got rhythm!”"),
      t("Мурзик пробует: «бэн… бэн…»", "Murzik has a go: “twang… twang…”"),
      t("Беримбау стоит у стены.", "The berimbau leans against the wall."),
    ],
    bridge: t("Утром у прилавка доны Селести хлопочут её внуки.", "In the morning Dona Celeste's grandchildren are busy at her stall."),
  },
};

const sa5: Lesson = {
  id: "pt-a1-salvador-5",
  level: "A1",
  cityId: "pt-salvador",
  number: 5,
  title: t("A família da Celeste — Семья Селести", "A família da Celeste — Celeste's family"),
  minutes: 7,
  goals: [
    t("Сказать «его» и «её»: dele, dela", "Say “his” and “her”: dele, dela"),
    t("Рассказать о чужой семье", "Talk about someone else's family"),
    t("Сказать «это секрет»", "Say “it's a secret”"),
  ],
  vocabNote: t(
    "Neto — «внук», neta — «внучка», netos — «внуки» (и внуки, и внучки вместе).",
    "Neto means “grandson”, neta “granddaughter”, and netos “grandchildren”.",
  ),
  vocab: [
    v("ptsa5-1", "Esta é a neta dela.", t("Это её внучка.", "This is her granddaughter."),
      t("Девочка с косичками помогает доне Селести лепить пирожки.", "A girl with plaits helps Dona Celeste shape the fritters."),
      p("l5-1")),
    v("ptsa5-2", "O neto dela toca tambor.", t("Её внук играет на барабане.", "Her grandson plays the drum."),
      t("Мальчик стучит по маленькому барабану рядом с прилавком.", "A boy taps a small drum next to the stall."),
      p("l5-2")),
    v("ptsa5-3", "os netos", t("внуки", "the grandchildren"),
      t("Двое детей обнимают бабушку в белом платье.", "Two children hug their grandmother in her white dress."),
      p("l5-3")),
    v("ptsa5-4", "Eles ajudam a avó.", t("Они помогают бабушке.", "They help their grandmother."),
      t("Дети раскладывают салфетки и считают монеты.", "The children lay out napkins and count coins."),
      p("l5-4")),
    v("ptsa5-5", "A receita é da família.", t("Рецепт семейный.", "It's a family recipe."),
      t("Старая тетрадь с рецептами, исписанная от руки.", "An old handwritten recipe notebook."),
      p("l5-5")),
    v("ptsa5-6", "É segredo!", t("Это секрет!", "It's a secret!"),
      t("Дона Селести прикладывает палец к губам и подмигивает.", "Dona Celeste puts a finger to her lips and winks."),
      p("l5-6")),
    v("ptsa5-7", "Qual é o nome dele?", t("Как его зовут?", "What's his name?"),
      t("Мурзик показывает на мальчика с барабаном.", "Murzik points at the boy with the drum."),
      p("l5-7")),
  ],
  dialogue: {
    title: t("Внуки доны Селести", "Dona Celeste's grandchildren"),
    note: t(
      "Todo dia — «каждый день». Da avó dela — «от её бабушки».",
      "Todo dia means “every day”. A receita means “the recipe”.",
    ),
    lines: [
      line("murzik", "Dona Celeste, quem são eles?", t("Дона Селести, а кто это?", "Dona Celeste, who are they?")),
      line("celeste", "São os meus netos! Esta é a Ana, e este é o Davi.", t("Это мои внуки! Это Ана, а это Дави.", "These are my grandchildren! This is Ana, and this is Davi.")),
      line("bia", "O Davi toca tambor? Que legal!", t("Дави играет на барабане? Здорово!", "Davi plays the drum? Cool!")),
      line("celeste", "Toca! E eles ajudam a avó todo dia.", t("Играет! И они каждый день помогают бабушке.", "He does! And they help their grandma every day.")),
      line("murzik", "O acarajé da senhora é o melhor! Qual é a receita?", t("Ваш акараже — самый лучший! Какой рецепт?", "Your acarajé is the best! What's the recipe?")),
      line("celeste", "A receita é da família. Da minha avó, da avó dela… É segredo!", t("Рецепт семейный. От моей бабушки, от её бабушки… Это секрет!", "It's a family recipe. From my grandmother, and her grandmother… It's a secret!")),
    ],
    gist: choice("ptsa5-d1", t("Откуда рецепт доны Селести?", "Where does Dona Celeste's recipe come from?"), [
      [t("Он передаётся в семье от бабушек.", "It's been handed down by the grandmothers in her family."), true],
      [t("Из поваренной книги.", "From a cookbook."), false],
      [t("Его придумал внук.", "Her grandson made it up."), false],
    ]),
  },
  grammar: [
    g(
      t("Его и её: dele, dela", "His and her: dele, dela"),
      [
        t(
          "Seu / sua может значить «твой», «его» и «её» — легко запутаться. Поэтому для «его» и «её» бразильцы говорят dele (de + ele) и dela (de + ela), и ставят их после слова: o neto dela — «её внук», o nome dele — «его имя».",
          "Seu / sua can mean “your”, “his” or “her”, which is confusing. So for “his” and “her”, Brazilians use dele (de + ele) and dela (de + ela), placed after the noun: o neto dela (her grandson), o nome dele (his name).",
        ),
        t(
          "«Их» — deles, delas: a casa deles — «их дом».",
          "“Their” is deles / delas: a casa deles (their house).",
        ),
      ],
      [
        ["O tambor dele é grande.", t("Его барабан большой.", "His drum is big.")],
        ["A avó deles é a Celeste.", t("Их бабушка — Селести.", "Their grandmother is Celeste.")],
      ],
    ),
  ],
  tasks: [
    choice("ptsa5-t1", t("Как сказать «её внук»?", "How do you say “her grandson”?"), [
      ["o neto dela", true],
      ["o dela neto", false],
      ["a neta dele", false],
    ], { skill: "grammar" }),
    listen("ptsa5-t2", t("Послушай. Что говорит дона Селести о рецепте?", "Listen. What does Dona Celeste say about the recipe?"), "É segredo!", [
      [t("Это секрет.", "It's a secret."), true],
      [t("Это просто.", "It's easy."), false],
      [t("Это дорого.", "It's expensive."), false],
    ]),
    match("ptsa5-t3", PAIRS, [
      ["o neto", t("внук", "grandson")],
      ["a neta", t("внучка", "granddaughter")],
      ["dele", t("его", "his")],
      ["dela", t("её", "her")],
    ], { skill: "words" }),
    spell("ptsa5-t4", t("Собери из букв слово «секрет».", "Spell the word for “secret”."), "segredo"),
    speak("ptsa5-t5", "Como é a sua família?", "O meu irmão tem dois filhos. O nome dele é Ivan.", t("У моего брата двое детей. Его зовут Иван. (Расскажи о своей семье.)", "My brother has two children. His name is Ivan. (Talk about your family.)"), {
      help: t("Расскажи вслух о ком-то из семьи — с dele или dela.", "Talk aloud about someone in your family, using dele or dela."),
    }),
    choice("ptsa5-t6", t("Как по-разговорному сказать «Мы хлопаем»?", "How do you say “We clap” the casual way?"), [
      ["A gente bate palmas.", true],
      ["A gente batemos palmas.", false],
      ["Nós bate palmas.", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "drum",
    itemName: t("Маленький барабан", "Little drum"),
    itemNameRu: "Tamborzinho",
    ru: "Oba! Um tamborzinho!",
    en: t("Ура! Барабанчик!", "Hooray! A little drum!"),
    a11y: t("На полу стоит маленький барабан, раскрашенный в зелёный, жёлтый и красный.", "A small drum painted green, yellow and red stands on the floor."),
    image: p("drum"),
    steps: [
      t("Дави дарит Мурзику свой старый барабанчик.", "Davi gives Murzik his old little drum."),
      t("«Eu tenho um novo!» — «У меня новый!»", "“Eu tenho um novo!” — “I've got a new one!”"),
      t("Мурзик стучит: бум-бум-бум!", "Murzik beats it: boom-boom-boom!"),
      t("Барабанчик стоит у кровати.", "The drum stands by the bed."),
    ],
    bridge: t("Вечером Дави зовёт их на репетицию барабанщиков на площади.", "In the evening Davi invites them to a drummers' rehearsal in the square."),
  },
};

const sa6: Lesson = {
  id: "pt-a1-salvador-6",
  level: "A1",
  cityId: "pt-salvador",
  number: 6,
  title: t("Os tambores — Барабаны", "Os tambores — The drums"),
  minutes: 7,
  goals: [
    t("Попросить научить", "Ask someone to teach you"),
    t("Сказать «учиться» и «учить»: aprender, ensinar", "Say “learn” and “teach”: aprender, ensinar"),
    t("Подтвердить: Isso mesmo!", "Confirm: Isso mesmo!"),
  ],
  vocabNote: t(
    "Ensinar — «учить кого-то», aprender — «учиться самому». Ensina para mim? — «Научишь меня?»",
    "Ensinar means “to teach”, aprender means “to learn”. Ensina para mim? — “Will you teach me?”",
  ),
  vocab: [
    v("ptsa6-1", "Que ritmo!", t("Какой ритм!", "What a rhythm!"),
      t("Двадцать барабанщиков в ярких футболках играют на площади.", "Twenty drummers in bright T-shirts play in the square."),
      p("l6-1")),
    v("ptsa6-2", "Eu quero aprender.", t("Я хочу научиться.", "I want to learn."),
      t("Мурзик с горящими глазами смотрит на барабанщиков.", "Murzik watches the drummers, eyes shining."),
      p("l6-2")),
    v("ptsa6-3", "Ensina para mim?", t("Научишь меня?", "Will you teach me?"),
      t("Мурзик тянет Дави за рукав.", "Murzik tugs at Davi's sleeve."),
      p("l6-3")),
    v("ptsa6-4", "Assim?", t("Так?", "Like this?"),
      t("Мурзик неуверенно стучит палочкой по барабану.", "Murzik taps a drum hesitantly with a stick."),
      p("l6-4")),
    v("ptsa6-5", "Isso mesmo!", t("Вот именно!", "That's it!"),
      t("Дави показывает Мурзику большой палец.", "Davi gives Murzik a thumbs up."),
      p("l6-5")),
    v("ptsa6-6", "Mais alto!", t("Громче!", "Louder!"),
      t("Дави жестом показывает: сильнее!", "Davi signals: harder!"),
      p("l6-6")),
    v("ptsa6-7", "O tambor é pesado.", t("Барабан тяжёлый.", "The drum is heavy."),
      t("Мурзик пытается поднять огромный барабан.", "Murzik tries to lift an enormous drum."),
      p("l6-7")),
  ],
  dialogue: {
    title: t("Репетиция барабанщиков", "The drummers' rehearsal"),
    note: t(
      "Baqueta — «барабанная палочка». Batucada — «барабанная музыка».",
      "Baqueta means “drumstick”. A batucada is a drumming session.",
    ),
    lines: [
      line("murzik", "Nossa! Que ritmo! Davi, eu quero aprender!", t("Ого! Какой ритм! Дави, я хочу научиться!", "Wow! What a rhythm! Davi, I want to learn!")),
      line("bia", "Davi, você ensina para ele?", t("Дави, научишь его?", "Davi, will you teach him?")),
      line("davi", "Ensino! Pega a baqueta. Bate assim: bum, bum-bum.", t("Научу! Бери палочку. Бей вот так: бум, бум-бум.", "Sure! Take the drumstick. Hit it like this: boom, boom-boom.")),
      line("murzik", "Assim? Bum, bum-bum?", t("Так? Бум, бум-бум?", "Like this? Boom, boom-boom?")),
      line("davi", "Isso mesmo! Agora mais alto!", t("Вот именно! А теперь громче!", "That's it! Now louder!")),
      line("murzik", "Ufa! O tambor é pesado! Mas eu adoro batucada!", t("Уф! Барабан тяжёлый! Но я обожаю барабаны!", "Phew! The drum is heavy! But I love drumming!")),
    ],
    gist: choice("ptsa6-d1", t("Чему учится Мурзик?", "What is Murzik learning?"), [
      [t("Играть на барабане.", "To play the drum."), true],
      [t("Петь.", "To sing."), false],
      [t("Готовить акараже.", "To make acarajé."), false],
    ]),
  },
  grammar: [
    g(
      t("Aprender и ensinar", "Aprender and ensinar"),
      [
        t(
          "Aprender — «учиться», ensinar — «учить (кого-то)». В русском это похожие слова, в португальском — разные: Eu aprendo português. — Я учу португальский. A Bia me ensina. — Биа меня учит.",
          "Aprender is “to learn” and ensinar is “to teach”: Eu aprendo português (I'm learning Portuguese). A Bia me ensina (Bia teaches me).",
        ),
        t(
          "После aprender перед глаголом обычно ставят a: aprender a tocar — «научиться играть».",
          "Before another verb, aprender usually takes a: aprender a tocar — to learn to play.",
        ),
      ],
      [
        ["Eu quero aprender a tocar.", t("Я хочу научиться играть.", "I want to learn to play.")],
        ["Ele ensina capoeira.", t("Он преподаёт капоэйру.", "He teaches capoeira.")],
      ],
    ),
  ],
  tasks: [
    choice("ptsa6-t1", t("Как сказать «Я хочу научиться играть»?", "How do you say “I want to learn to play”?"), [
      ["Eu quero aprender a tocar.", true],
      ["Eu quero ensinar a tocar.", false],
      ["Eu quero aprender tocar a.", false],
    ], { skill: "grammar" }),
    listen("ptsa6-t2", t("Послушай. Что говорит Дави?", "Listen. What does Davi say?"), "Mais alto!", [
      [t("Громче!", "Louder!"), true],
      [t("Тише!", "Quieter!"), false],
      [t("Ещё раз!", "Again!"), false],
    ]),
    match("ptsa6-t3", PAIRS, [
      ["aprender", t("учиться", "to learn")],
      ["ensinar", t("учить кого-то", "to teach")],
      ["o tambor", t("барабан", "the drum")],
      ["Isso mesmo!", t("Вот именно!", "That's it!")],
    ], { skill: "words" }),
    missing("ptsa6-t4", t("Какой буквы не хватает? («барабан»)", "Which letter is missing? (“drum”)"), "tam", "or", "b", ["b", "p", "v"]),
    speak("ptsa6-t5", "O que você quer aprender?", "Eu quero aprender a tocar tambor!", t("Я хочу научиться играть на барабане!", "I want to learn to play the drum!"), {
      help: t("Скажи вслух, чему ты хочешь научиться.", "Say aloud what you'd like to learn."),
    }),
    choice("ptsa6-t6", t("Как сказать «Это секрет!»?", "How do you say “It's a secret!”?"), [
      ["É segredo!", true],
      ["É da família!", false],
      ["Que segredo é?", false],
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "pandeiro",
    itemName: t("Бубен", "Tambourine"),
    itemNameRu: "Pandeiro",
    ru: "Oba! Um pandeiro!",
    en: t("Ура! Пандейру!", "Hooray! A pandeiro!"),
    a11y: t("На стене висит маленький бубен-пандейру с металлическими тарелочками.", "A small pandeiro tambourine with metal jingles hangs on the wall."),
    image: p("pandeiro"),
    steps: [
      t("Один из барабанщиков дарит Биа и Мурзику пандейру.", "One of the drummers gives Bia and Murzik a pandeiro."),
      t("«Para o samba!» — «Для самбы!»", "“Para o samba!” — “For the samba!”"),
      t("Мурзик трясёт им: дзынь-дзынь!", "Murzik shakes it: jingle-jingle!"),
      t("Пандейру висит на стене.", "The pandeiro hangs on the wall."),
    ],
    bridge: t("Утром дона Селести машет им ложкой: «Meu filho! Vem cá! O papagaio!»", "In the morning Dona Celeste waves a spoon at them: “Meu filho! Vem cá! O papagaio!”"),
  },
};

const sa7: Lesson = {
  id: "pt-a1-salvador-7",
  level: "A1",
  cityId: "pt-salvador",
  number: 7,
  title: t("Tá uma delícia! — Объедение!", "Tá uma delícia! — It's delicious!"),
  minutes: 8,
  goals: [
    t("Понять, что рассказывают о Пипоке", "Understand what people say about Pipoca"),
    t("Узнать короткое tá = está", "Learn the short tá = está"),
    t("Вспомнить все слова Салвадора", "Review all the words from Salvador"),
  ],
  vocabNote: t(
    "Tá — разговорное está, его слышно повсюду: Tá bom! — «Ладно!», Tá uma delícia! — «Объедение!» В письменной речи лучше está.",
    "Tá is the spoken form of está — you'll hear it everywhere: Tá bom! (OK!), Tá uma delícia! (It's delicious!). In writing, use está.",
  ),
  vocab: [
    v("ptsa7-1", "Tá uma delícia!", t("Объедение!", "It's delicious!"),
      t("Зелёный попугай с крошками на клюве сидит на краю прилавка с акараже.", "The green parrot, crumbs on his beak, sits on the edge of the acarajé stall."),
      p("l7-1")),
    v("ptsa7-2", "Ele comeu um acarajé inteiro!", t("Он съел целый акараже!", "He ate a whole acarajé!"),
      t("Пустая тарелка, рядом довольный попугай.", "An empty plate next to a very satisfied parrot."),
      p("l7-2")),
    v("ptsa7-3", "sem pimenta, claro", t("без перца, конечно", "no chilli, of course"),
      t("Дона Селести смеётся и машет рукой.", "Dona Celeste laughs and waves her hand."),
      p("l7-3")),
    v("ptsa7-4", "Eles foram para Olinda.", t("Они уехали в Олинду.", "They've gone to Olinda."),
      t("Карта: стрелка на север, вдоль побережья.", "A map: an arrow north along the coast."),
      p("l7-4")),
    v("ptsa7-5", "o Carnaval", t("карнавал", "the Carnival"),
      t("Маленькая картинка: огромные куклы и танцоры с зонтиками.", "A little picture: giant puppets and dancers with umbrellas."),
      p("l7-5")),
    v("ptsa7-6", "Fica mais um pouco!", t("Останься ещё немножко!", "Stay a little longer!"),
      t("Ана держит Мурзика за лапу.", "Ana holds on to Murzik's paw."),
      p("l7-6")),
    v("ptsa7-7", "Que pena que vocês vão embora!", t("Как жаль, что вы уезжаете!", "Such a pity you're leaving!"),
      t("Дона Селести обнимает Биу и Мурзика.", "Dona Celeste hugs Bia and Murzik."),
      p("l7-7")),
  ],
  dialogue: {
    title: t("Что сказал попугай", "What the parrot said"),
    note: t(
      "Vem cá! — «Иди сюда!». Pousou — «сел, приземлился». Gulosinho — «маленький обжора».",
      "Vem cá! means “Come here!”. Pousou means “landed”. Gulosinho means “little greedy-guts”.",
    ),
    lines: [
      line("celeste", "Meu filho! Vem cá! O papagaio! Ele pousou aqui no meu tabuleiro.", t("Сынок! Иди сюда! Попугай! Он садился сюда, на мой прилавок.", "My dear! Come here! The parrot! He landed right here on my stall.")),
      line("murzik", "O Pipoca! E o que ele fez?", t("Пипока! И что он сделал?", "Pipoca! And what did he do?")),
      line("celeste", "Ele comeu um acarajé inteiro! Sem pimenta, claro. E gritou: Tá uma delícia! Tá uma delícia!", t("Съел целый акараже! Без перца, конечно. И кричал: «Объедение! Объедение!»", "He ate a whole acarajé! No chilli, of course. And he shouted: It's delicious! It's delicious!")),
      line("bia", "Que gulosinho! E a banda?", t("Вот обжора! А группа?", "What a greedy-guts! And the band?")),
      line("celeste", "Eles foram para Olinda. Lá tem Carnaval o ano todo!", t("Уехали в Олинду. Там карнавал круглый год!", "They've gone to Olinda. It's Carnival there all year round!")),
      line("ana", "Fica mais um pouco, Murzik!", t("Останься ещё немножко, Мурзик!", "Stay a bit longer, Murzik!")),
      line("celeste", "Que pena que vocês vão embora! Voltem!", t("Как жаль, что вы уезжаете! Приезжайте ещё!", "Such a pity you're leaving! Come back!")),
    ],
    gist: choice("ptsa7-d1", t("Какую фразу выучил Пипока в Салвадоре?", "What phrase did Pipoca learn in Salvador?"), [
      [t("«Объедение!»", "“It's delicious!”"), true],
      [t("«Очень остро!»", "“It's really spicy!”"), false],
      [t("«Какой ритм!»", "“What a rhythm!”"), false],
    ]),
  },
  grammar: [
    g(
      t("Tá, tô, tamo — так говорят на улице", "Tá, tô, tamo — how people really talk"),
      [
        t(
          "В живой речи estar часто «сокращают»: está → tá, estou → tô, estamos → tamo. Tô cansado — «я устал(а)», Tá bom — «ладно».",
          "In casual speech, estar gets shortened: está → tá, estou → tô, estamos → tamo. Tô cansado (I'm tired), Tá bom (OK).",
        ),
        t(
          "Понимать это нужно обязательно, а говорить можно и полностью — está, estou. Тебя поймут в любом случае.",
          "You need to understand these short forms, but it's fine to use the full ones yourself — está, estou. Everyone will understand you.",
        ),
      ],
      [
        ["Tá bom!", t("Ладно!", "OK!")],
        ["Tô com fome!", t("Есть хочу!", "I'm hungry!")],
      ],
    ),
  ],
  tasks: [
    listen("ptsa7-t1", t("Аудиоэкзамен. Что рассказывает дона Селести?", "Audio exam. What does Dona Celeste tell them?"), "O papagaio comeu um acarajé inteiro e gritou: Tá uma delícia! A banda foi para Olinda.", [
      [t("Попугай съел акараже, а группа уехала в Олинду.", "The parrot ate an acarajé, and the band went to Olinda."), true],
      [t("Попугай обжёгся перцем.", "The parrot got burned by the chilli."), false],
      [t("Группа осталась в Салвадоре.", "The band stayed in Salvador."), false],
    ]),
    choice("ptsa7-t2", t("Что значит Tá bom!?", "What does Tá bom! mean?"), [
      [t("Ладно! Хорошо!", "OK! Fine!"), true],
      [t("Очень вкусно!", "Very tasty!"), false],
      [t("Пока!", "Bye!"), false],
    ], { skill: "words" }),
    build("ptsa7-t3", t("Собери фразу: «Они уехали в Олинду».", "Build the sentence: “They've gone to Olinda”."), ["Eles", "foram", "para", "Olinda."]),
    missing("ptsa7-t4", t("Какой буквы не хватает? («вкуснятина»)", "Which letter is missing? (“delight”)"), "del", "cia", "í", ["í", "i", "e"]),
    speak("ptsa7-t5", "Fica mais um pouco!", "Que pena! Eu vou sentir saudade!", t("Как жаль! Я буду скучать!", "What a pity! I'm going to miss you!"), {
      help: t("Ответь вслух на прощание.", "Answer aloud as you say goodbye."),
    }),
    script("ptsa7-t6", t("Вспомни весь Салвадор. Закончи разговор с доной Селести.", "Remember all of Salvador. Finish the conversation with Dona Celeste."), [
      { speaker: CELESTE, text: "Boa noite! O que vai ser?" },
      { speaker: YOU, answer: "Um acarajé, por favor.", options: ["Um acarajé, por favor.", "Um quilo de acarajé.", "É segredo!"] },
      { speaker: CELESTE, text: "Com pimenta ou sem?" },
      { speaker: YOU, answer: "Pouca pimenta, por favor!", options: ["Pouca pimenta, por favor!", "Os dois!", "Mais alto!"] },
      { speaker: CELESTE, text: "Aqui está. Gostou?" },
      { speaker: YOU, answer: "Tá uma delícia! Quanto fica?", options: ["Tá uma delícia! Quanto fica?", "Tanto faz.", "Abaixa!"] },
    ], { skill: "review" }),
  ],
  reward: {
    itemId: "photo-salvador",
    itemName: t("Фото Пипоки с акараже", "Photo of Pipoca with an acarajé"),
    itemNameRu: "Foto do Pipoca com acarajé",
    ru: "Oba! Mais uma foto do Pipoca!",
    en: t("Ура! Ещё одно фото Пипоки!", "Hooray! Another photo of Pipoca!"),
    a11y: t(
      "Фото: зелёный попугай на краю прилавка держит в лапе кусочек акараже, рядом смеются Ана и Дави.",
      "A photo: the green parrot on the edge of the stall holding a piece of acarajé in his claw, with Ana and Davi laughing beside him.",
    ),
    image: p("photo"),
    steps: [
      t("Ана сфотографировала Пипоку на телефон.", "Ana took a photo of Pipoca on her phone."),
      t("Пипока с кусочком акараже в лапе!", "Pipoca holding a piece of acarajé in his claw!"),
      t("Все хохочут.", "Everyone bursts out laughing."),
      t("Подпись: «Tá uma delícia!» Фото — в альбом.", "Caption: “Tá uma delícia!” Into the album it goes."),
    ],
    bridge: t("Самолёт летит на север, в штат Пернамбуку.", "A plane heads north, to the state of Pernambuco."),
  },
};

const story: CityStory = {
  home: {
    name: t("Комната в гостинице в Пелоуринью", "A room at a guesthouse in Pelourinho"),
    nameRu: "O quarto na pousada do Pelourinho",
    image: p("home"),
    a11y: t(
      "Комната с высоким потолком в старом голубом доме. За окном — цветные дома и колокольня. Посередине чемодан Мурзика.",
      "A high-ceilinged room in an old blue house. Through the window: colourful houses and a bell tower. Murzik's suitcase in the middle.",
    ),
  },
  keepsakeId: "photo-salvador",
  welcomeRu: "Olá, Salvador!",
  welcomeEn: t("Привет, Салвадор!", "Hello, Salvador!"),
  welcomeImage: p("arrival"),
  welcomeA11y: t(
    "Старинная площадь Пелоуринью: розовые, жёлтые, голубые дома, мощёная улица, барабанщики в ярких футболках.",
    "The old Pelourinho square: pink, yellow and blue houses, a cobbled street and drummers in bright T-shirts.",
  ),
  departureImage: p("departure"),
  departureA11y: t("Дона Селести с внуками машут у прилавка.", "Dona Celeste and her grandchildren wave from the stall."),
  finale: [
    {
      image: p("photo"),
      a11y: t("Мурзик вклеивает в альбом фото Пипоки с акараже.", "Murzik sticks the photo of Pipoca with the acarajé into the album."),
      lines: [
        { en: t("Десятая страница альбома: Пипока у доны Селести.", "Page ten of the album: Pipoca at Dona Celeste's.") },
        { ru: "Tá uma delícia!", en: t("Объедение!", "It's delicious!") },
        { en: t("Ленточка на лапе Мурзика ещё держится. Желание сбудется?", "The ribbon on Murzik's paw is still holding. Will his wish come true?") },
      ],
    },
    {
      image: img.greet,
      a11y: t("Мурзик радостно подпрыгивает.", "Murzik jumps for joy."),
      lines: [
        { ru: "Salvador completo!", en: t("Салвадор пройден!", "Salvador complete!") },
        { en: t("7 / 7 уроков", "7 / 7 lessons") },
      ],
    },
    {
      image: p("departure"),
      a11y: t("Дона Селести машет на прощание.", "Dona Celeste waves goodbye."),
      lines: [
        { ru: "Tchau, Dona Celeste!", en: t("Пока, дона Селести!", "Bye, Dona Celeste!") },
        { ru: "Próxima parada: Olinda!", en: t("Следующая остановка: Олинда!", "Next stop: Olinda!") },
      ],
    },
    {
      image: p("plane"),
      a11y: t("Самолёт летит над длинным пляжем с пальмами.", "A plane flies over a long palm-fringed beach."),
      lines: [{ ru: "Salvador → Olinda", en: t("Салвадор → Олинда", "Salvador → Olinda") }],
    },
    {
      image: pic("pt/olinda/arrival"),
      a11y: t(
        "Старинный город на холме над морем: разноцветные домики, церкви, и огромные куклы карнавала на улице.",
        "An old hilltop town above the sea: colourful little houses, churches and giant Carnival puppets in the street.",
      ),
      lines: [
        { ru: "Olá, Olinda!", en: t("Привет, Олинда!", "Hello, Olinda!") },
        { ru: "Que alegria!", en: t("Какое веселье!", "What fun!") },
      ],
    },
  ],
};

export const ptSalvador = {
  id: "pt-salvador",
  name: t("Салвадор", "Salvador"),
  namePt: "Salvador",
  lessons: [sa1, sa2, sa3, sa4, sa5, sa6, sa7],
  story,
};
