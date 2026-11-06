import type { CityPlan } from "../../types";

/** Edinburgh in the French version of the Russian course (`ru` = Russian, `en` = French). Generated from the English version with French texts. */
export const edinburghFr: Pick<CityPlan, "lessons" | "story"> = {
  "lessons": [
    {
      "id": "a1-edinburgh-1",
      "level": "A1",
      "cityId": "edinburgh",
      "number": 1,
      "title": "Ça fait longtemps !",
      "minutes": 5,
      "goals": [
        "Saluer un vieil ami",
        "Demander quoi de neuf",
        "Répondre : rien de spécial"
      ],
      "vocabNote": "Cette ville révise tout le niveau A1 — avec de nouvelles phrases. Сколько лет, сколько зим! veut dire mot à mot « Tant d'étés, tant d'hivers ! ».",
      "vocab": [
        {
          "id": "ed1-1",
          "ru": "Давно не виделись!",
          "en": "Ça fait longtemps !",
          "a11y": "Jamie, un grand jeune homme roux en pull tricoté, serre Tom dans ses bras à la porte d'une maison en pierre.",
          "audioLabel": "Écouter Давно не виделись",
          "image": "/art/edinburgh/1-1.jpg"
        },
        {
          "id": "ed1-2",
          "ru": "Сколько лет, сколько зим!",
          "en": "Ça fait une éternité !",
          "a11y": "Tom et Jamie rient et se serrent chaleureusement la main.",
          "audioLabel": "Écouter Сколько лет, сколько зим",
          "image": "/art/edinburgh/1-2.jpg"
        },
        {
          "id": "ed1-3",
          "ru": "Как жизнь?",
          "en": "Comment va la vie ?",
          "a11y": "Jamie s'appuie contre le chambranle de la porte avec un sourire amical.",
          "audioLabel": "Écouter Как жизнь",
          "image": "/art/edinburgh/1-3.jpg"
        },
        {
          "id": "ed1-4",
          "ru": "Что нового?",
          "en": "Quoi de neuf ?",
          "a11y": "Jamie verse le thé et regarde Tom avec curiosité.",
          "audioLabel": "Écouter Что нового",
          "image": "/art/edinburgh/1-4.jpg"
        },
        {
          "id": "ed1-5",
          "ru": "Ничего особенного.",
          "en": "Rien de spécial.",
          "a11y": "Jamie hausse les épaules et sourit.",
          "audioLabel": "Écouter Ничего особенного",
          "image": "/art/edinburgh/1-5.jpg"
        },
        {
          "id": "ed1-6",
          "ru": "Всё по-старому.",
          "en": "Comme d'habitude.",
          "a11y": "La chambre douillette et un peu en désordre de Jamie, avec une guitare et des livres — rien n'a changé.",
          "audioLabel": "Écouter Всё по-старому",
          "image": "/art/edinburgh/1-6.jpg"
        },
        {
          "id": "ed1-7",
          "ru": "Знакомься, это Мурзик!",
          "en": "Je te présente Murzik !",
          "a11y": "Tom présente Murzik à Jamie ; Murzik fait coucou de la patte.",
          "audioLabel": "Écouter Знакомься, это Мурзик",
          "image": "/art/edinburgh/1-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Un vieil ami",
        "note": "Jamie était à l'école avec Tom et a appris le russe à l'université. А у тебя? — Et toi ?",
        "lines": [
          {
            "speaker": "jamie",
            "ru": "Том! Давно не виделись! Сколько лет, сколько зим!",
            "en": "Tom ! Ça fait longtemps ! Ça fait une éternité !"
          },
          {
            "speaker": "tom",
            "ru": "Джейми! Привет! Как жизнь?",
            "en": "Jamie ! Salut ! Comment va la vie ?"
          },
          {
            "speaker": "jamie",
            "ru": "Всё по-старому. А у тебя? Что нового?",
            "en": "Comme d'habitude. Et toi ? Quoi de neuf ?"
          },
          {
            "speaker": "tom",
            "ru": "У меня? Столько всего! Знакомься, это Мурзик!",
            "en": "Moi ? Plein de choses ! Je te présente Murzik !"
          },
          {
            "speaker": "murzik",
            "ru": "Здравствуйте! Очень приятно.",
            "en": "Bonjour ! Enchanté."
          },
          {
            "speaker": "jamie",
            "ru": "Мне тоже! Проходите!",
            "en": "Moi aussi, enchanté ! Entrez !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "ed1-d1",
          "prompt": "Qui est Jamie ?",
          "options": [
            {
              "label": "Un vieil ami d'école de Tom.",
              "correct": true
            },
            {
              "label": "Le cousin de Murzik.",
              "correct": false
            },
            {
              "label": "Un réceptionniste d'hôtel.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Révision A1 : les salutations",
          "paragraphs": [
            "À un ami : Привет! Как дела? Пока! Poliment : Здравствуйте! Как у вас дела? До свидания!",
            "Nouveau et amical : Давно не виделись! Как жизнь? Что нового?"
          ],
          "examples": [
            {
              "ru": "Привет! Что нового?",
              "en": "Salut ! Quoi de neuf ?"
            },
            {
              "ru": "Здравствуйте! Очень приятно.",
              "en": "Bonjour ! Enchanté."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "ed1-t1",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "listening",
          "audio": "Что нового?",
          "options": [
            {
              "label": "Ничего особенного.",
              "correct": true
            },
            {
              "label": "Сколько лет, сколько зим!",
              "correct": false
            },
            {
              "label": "Мне тоже.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "ed1-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "Давно не виделись!",
              "right": "Ça fait longtemps !"
            },
            {
              "left": "Как жизнь?",
              "right": "Comment va la vie ?"
            },
            {
              "left": "Всё по-старому.",
              "right": "Comme d'habitude."
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ed1-t3",
          "prompt": "Tu rencontres la grand-mère de ton ami. Que dis-tu ?",
          "skill": "grammar",
          "options": [
            {
              "label": "Здравствуйте! Очень приятно.",
              "correct": true
            },
            {
              "label": "Привет! Как жизнь?",
              "correct": false
            },
            {
              "label": "Пока!",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "ed1-t4",
          "prompt": "Forme le mot « vie ».",
          "word": "жизнь",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "ed1-t5",
          "prompt": "Давно не виделись! Что нового?",
          "model": "Ничего особенного. Всё по-старому!",
          "modelEn": "Rien de spécial. Comme d'habitude !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Un vieil ami te salue. Réponds à voix haute."
        },
        {
          "kind": "choice",
          "id": "ed1-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Расскажи всё с начала!",
          "options": [
            {
              "label": "Всё началось в Париже.",
              "correct": true
            },
            {
              "label": "Ничего особенного.",
              "correct": false
            },
            {
              "label": "Как жизнь?",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "fireplace",
        "itemName": "Cheminée",
        "itemNameRu": "Камин",
        "ru": "Ура! Тёплый камин!",
        "en": "Youpi ! Une cheminée bien chaude !",
        "a11y": "Une petite cheminée en pierre où crépite un feu, dans la chambre de Murzik, dans une vieille maison d'Édimbourg. La pluie coule sur la vitre.",
        "image": "/art/edinburgh/reward-1.jpg",
        "steps": [
          "La maison de Jamie est ancienne, en pierre grise.",
          "La chambre de Murzik a une petite cheminée.",
          "Jamie allume le feu.",
          "Dehors, il pleut. Dedans, il fait chaud."
        ],
        "bridge": "Le matin : du soleil. Dix minutes plus tard : de la pluie. Dix minutes plus tard : de nouveau du soleil !"
      }
    },
    {
      "id": "a1-edinburgh-2",
      "level": "A1",
      "cityId": "edinburgh",
      "number": 2,
      "title": "Quatre saisons en une journée",
      "minutes": 6,
      "goals": [
        "Parler d'un temps changeant",
        "Dire à quelqu'un quoi mettre",
        "Dire « mais que c'est beau ! »"
      ],
      "vocabNote": "То дождь, то солнце veut dire « tantôt la pluie, tantôt le soleil ». Плащ, c'est un imperméable.",
      "vocab": [
        {
          "id": "ed2-1",
          "ru": "То дождь, то солнце.",
          "en": "Tantôt la pluie, tantôt le soleil.",
          "a11y": "Un ciel moitié plein de nuages de pluie, moitié ensoleillé, avec un arc-en-ciel entre les deux.",
          "audioLabel": "Écouter То дождь, то солнце",
          "image": "/art/edinburgh/2-1.jpg"
        },
        {
          "id": "ed2-2",
          "ru": "Какой сильный ветер!",
          "en": "Quel vent fort !",
          "a11y": "Murzik s'accroche à un réverbère pendant que le vent tend son écharpe à l'horizontale.",
          "audioLabel": "Écouter Какой сильный ветер",
          "image": "/art/edinburgh/2-2.jpg"
        },
        {
          "id": "ed2-3",
          "ru": "плащ",
          "en": "imperméable",
          "a11y": "Un imperméable jaune à capuche accroché près de la porte.",
          "audioLabel": "Écouter плащ",
          "image": "/art/edinburgh/2-3.jpg"
        },
        {
          "id": "ed2-4",
          "ru": "Надень плащ!",
          "en": "Mets un imperméable !",
          "a11y": "Jamie tend à Murzik un petit imperméable jaune.",
          "audioLabel": "Écouter Надень плащ",
          "image": "/art/edinburgh/2-4.jpg"
        },
        {
          "id": "ed2-5",
          "ru": "Здесь всегда так?",
          "en": "C'est toujours comme ça ici ?",
          "a11y": "Murzik lève les yeux vers le ciel changeant, perplexe.",
          "audioLabel": "Écouter Здесь всегда так",
          "image": "/art/edinburgh/2-5.jpg"
        },
        {
          "id": "ed2-6",
          "ru": "Иногда идёт снег.",
          "en": "Parfois, il neige.",
          "a11y": "Des flocons tombent sur les maisons de pierre grise d'Édimbourg.",
          "audioLabel": "Écouter Иногда идёт снег",
          "image": "/art/edinburgh/2-6b.jpg"
        },
        {
          "id": "ed2-7",
          "ru": "Зато какая красота!",
          "en": "Mais que c'est beau !",
          "a11y": "Une vue de la vieille ville d'Édimbourg et du château sur son rocher après la pluie, avec un arc-en-ciel.",
          "audioLabel": "Écouter Зато какая красота",
          "image": "/art/edinburgh/2-7.jpg"
        }
      ],
      "dialogue": {
        "title": "La météo écossaise",
        "note": "Ой, опять дождь! — Oh, encore la pluie ! Tu connais Зато depuis Varsovie : « en revanche ».",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Ой! Солнце… Ой, опять дождь! Здесь всегда так?",
            "en": "Oh ! Du soleil… Oh, encore la pluie ! C'est toujours comme ça ici ?"
          },
          {
            "speaker": "jamie",
            "ru": "Почти всегда. То дождь, то солнце. А иногда идёт снег!",
            "en": "Presque toujours. Tantôt la pluie, tantôt le soleil. Et parfois, il neige !"
          },
          {
            "speaker": "tom",
            "ru": "И какой сильный ветер!",
            "en": "Et quel vent fort !"
          },
          {
            "speaker": "jamie",
            "ru": "Мурзик, надень плащ!",
            "en": "Murzik, mets un imperméable !"
          },
          {
            "speaker": "murzik",
            "ru": "Спасибо. Брр! Здесь холодно, как в Праге.",
            "en": "Merci. Brr ! Il fait froid ici, comme à Prague."
          },
          {
            "speaker": "jamie",
            "ru": "Зато какая красота! Смотри — радуга!",
            "en": "Mais que c'est beau ! Regarde — un arc-en-ciel !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "ed2-d1",
          "prompt": "Quel temps fait-il à Édimbourg ?",
          "options": [
            {
              "label": "Il change sans arrêt : la pluie, puis le soleil.",
              "correct": true
            },
            {
              "label": "Chaud et ensoleillé toute la journée.",
              "correct": false
            },
            {
              "label": "Il neige tout le temps.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Révision A1 : la météo et les vêtements",
          "paragraphs": [
            "La météo : Холодно. Тепло. Идёт дождь. Светит солнце. Какой сильный ветер!",
            "Les vêtements : Мне нужна куртка. Надень шапку! Надень плащ! (Londres et Prague.)"
          ],
          "examples": [
            {
              "ru": "Идёт дождь. Надень плащ!",
              "en": "Il pleut. Mets un imperméable !"
            },
            {
              "ru": "Сегодня тепло и светит солнце.",
              "en": "Aujourd'hui, il fait doux et le soleil brille."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "ed2-t1",
          "prompt": "Écoute. Quel temps fait-il ?",
          "skill": "listening",
          "audio": "Сегодня холодно и сильный ветер.",
          "options": [
            {
              "label": "Froid et venteux.",
              "correct": true
            },
            {
              "label": "Doux et ensoleillé.",
              "correct": false
            },
            {
              "label": "Pluvieux et doux.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ed2-t2",
          "prompt": "Qu'est-ce que плащ ?",
          "skill": "words",
          "options": [
            {
              "label": "un imperméable",
              "correct": true
            },
            {
              "label": "un parapluie",
              "correct": false
            },
            {
              "label": "un bonnet",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "ed2-t3",
          "prompt": "Complète : « Mets un bonnet ! »",
          "before": "Надень",
          "after": "!",
          "answer": "шапку",
          "options": [
            "шапку",
            "шапка",
            "шапки"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "ed2-t4",
          "prompt": "Quelle lettre manque ? (vent)",
          "before": "в",
          "after": "тер",
          "answer": "е",
          "options": [
            "е",
            "и",
            "ё"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "ed2-t5",
          "prompt": "Какая сегодня погода?",
          "model": "Сегодня то дождь, то солнце.",
          "modelEn": "Aujourd'hui, c'est tantôt la pluie, tantôt le soleil.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Décris le temps qu'il fait vraiment aujourd'hui."
        },
        {
          "kind": "choice",
          "id": "ed2-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Мне холодно!",
          "options": [
            {
              "label": "Надень плащ!",
              "correct": true
            },
            {
              "label": "Почти всегда.",
              "correct": false
            },
            {
              "label": "Зато какая красота!",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "wellies",
        "itemName": "Bottes de pluie",
        "itemNameRu": "Резиновые сапоги",
        "ru": "Ура! Резиновые сапоги!",
        "en": "Youpi ! Des bottes de pluie !",
        "a11y": "Une petite paire de bottes de pluie jaune vif sèche près de la cheminée, à côté de l'imperméable jaune.",
        "image": "/art/edinburgh/reward-2.jpg",
        "steps": [
          "Murzik saute dans chaque flaque.",
          "Il a les pattes mouillées !",
          "Jamie trouve de vieilles bottes de pluie jaunes — juste à sa taille.",
          "Maintenant, chaque flaque est une joie."
        ],
        "bridge": "Le matin, Jamie prépare un vrai petit-déjeuner écossais."
      }
    },
    {
      "id": "a1-edinburgh-3",
      "level": "A1",
      "cityId": "edinburgh",
      "number": 3,
      "title": "Un petit-déjeuner écossais",
      "minutes": 6,
      "goals": [
        "Parler du petit-déjeuner",
        "Souhaiter bon appétit",
        "Demander une recette"
      ],
      "vocabNote": "Приятного аппетита! se dit avant le repas, comme « Bon appétit ! ». Добавки? — « Tu en reprends ? »",
      "vocab": [
        {
          "id": "ed3-1",
          "ru": "Что на завтрак?",
          "en": "Qu'est-ce qu'il y a pour le petit-déjeuner ?",
          "a11y": "Murzik renifle l'air dans une cuisine douillette avec une grande cuisinière.",
          "audioLabel": "Écouter Что на завтрак",
          "image": "/art/edinburgh/3-1.jpg"
        },
        {
          "id": "ed3-2",
          "ru": "овсянка",
          "en": "porridge",
          "a11y": "Un bol de porridge chaud avec du miel et des baies.",
          "audioLabel": "Écouter овсянка",
          "image": "/art/edinburgh/3-2.jpg"
        },
        {
          "id": "ed3-3",
          "ru": "яичница",
          "en": "œufs au plat",
          "a11y": "Deux œufs au plat dans une poêle.",
          "audioLabel": "Écouter яичница",
          "image": "/art/edinburgh/3-3.jpg"
        },
        {
          "id": "ed3-4",
          "ru": "Приятного аппетита!",
          "en": "Bon appétit !",
          "a11y": "Jamie pose les assiettes sur la table avec un grand sourire.",
          "audioLabel": "Écouter Приятного аппетита",
          "image": "/art/edinburgh/3-4.jpg"
        },
        {
          "id": "ed3-5",
          "ru": "Добавки?",
          "en": "Tu en reprends ?",
          "a11y": "Jamie tient une casserole de porridge au-dessus du bol vide de Murzik.",
          "audioLabel": "Écouter Добавки",
          "image": "/art/edinburgh/3-5.jpg"
        },
        {
          "id": "ed3-6",
          "ru": "Очень сытно!",
          "en": "C'est très copieux !",
          "a11y": "Murzik s'adosse à sa chaise en tapotant son ventre tout rond.",
          "audioLabel": "Écouter Очень сытно",
          "image": "/art/edinburgh/3-6.jpg"
        },
        {
          "id": "ed3-7",
          "ru": "Можно рецепт?",
          "en": "Je peux avoir la recette ?",
          "a11y": "Murzik tient son carnet de croquis et un crayon, prêt à écrire.",
          "audioLabel": "Écouter Можно рецепт",
          "image": "/art/edinburgh/3-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Petit-déjeuner chez Jamie",
        "note": "Без сахара, tu le connais depuis Madrid. Секрет — с солью! — Le secret : avec du sel !",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Джейми, что на завтрак?",
            "en": "Jamie, qu'est-ce qu'il y a pour le petit-déjeuner ?"
          },
          {
            "speaker": "jamie",
            "ru": "Овсянка и яичница! Приятного аппетита!",
            "en": "Du porridge et des œufs au plat ! Bon appétit !"
          },
          {
            "speaker": "tom",
            "ru": "Спасибо! Ммм, очень вкусно.",
            "en": "Merci ! Mmm, très bon."
          },
          {
            "speaker": "jamie",
            "ru": "Мурзик, добавки?",
            "en": "Murzik, tu en reprends ?"
          },
          {
            "speaker": "murzik",
            "ru": "Нет, спасибо. Очень сытно! Можно рецепт?",
            "en": "Non, merci. C'est très copieux ! Je peux avoir la recette ?"
          },
          {
            "speaker": "jamie",
            "ru": "Конечно. Секрет — с солью, без сахара!",
            "en": "Bien sûr. Le secret : avec du sel, sans sucre !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "ed3-d1",
          "prompt": "Quel est le secret du porridge de Jamie ?",
          "options": [
            {
              "label": "Du sel, sans sucre.",
              "correct": true
            },
            {
              "label": "Beaucoup de sucre.",
              "correct": false
            },
            {
              "label": "Du chocolat.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Révision A1 : la nourriture et les cafés",
          "paragraphs": [
            "Au café : Мне кофе, пожалуйста. Можно чай? С молоком? Без сахара. Счёт, пожалуйста. (Madrid.)",
            "À table : Приятного аппетита! Очень вкусно! Спасибо, больше не надо. (Rome.)"
          ],
          "examples": [
            {
              "ru": "Мне чай с молоком, пожалуйста.",
              "en": "Un thé au lait pour moi, s'il vous plaît."
            },
            {
              "ru": "Спасибо, больше не надо. Очень сытно!",
              "en": "Merci, ça ira pour moi. C'est très copieux !"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "ed3-t1",
          "prompt": "Écoute. Qu'est-ce qu'il y a pour le petit-déjeuner ?",
          "skill": "listening",
          "audio": "На завтрак овсянка и чай.",
          "options": [
            {
              "label": "Du porridge et du thé.",
              "correct": true
            },
            {
              "label": "Des œufs au plat et du café.",
              "correct": false
            },
            {
              "label": "Du porridge et du café.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ed3-t2",
          "prompt": "Tout le monde s'assoit pour manger. Que dis-tu ?",
          "skill": "words",
          "options": [
            {
              "label": "Приятного аппетита!",
              "correct": true
            },
            {
              "label": "Добавки?",
              "correct": false
            },
            {
              "label": "Можно рецепт?",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "ed3-t3",
          "prompt": "Complète : « Du thé sans sucre. »",
          "before": "Чай без",
          "after": ".",
          "answer": "сахара",
          "options": [
            "сахара",
            "сахар",
            "сахаром"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "ed3-t4",
          "prompt": "Forme le mot « porridge ».",
          "word": "овсянка",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "ed3-t5",
          "prompt": "Добавки?",
          "model": "Нет, спасибо. Очень сытно!",
          "modelEn": "Non, merci. C'est très copieux !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Tu n'as plus faim. Dis non poliment."
        },
        {
          "kind": "choice",
          "id": "ed3-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Какой сильный ветер!",
          "options": [
            {
              "label": "Надень плащ!",
              "correct": true
            },
            {
              "label": "Приятного аппетита!",
              "correct": false
            },
            {
              "label": "Очень сытно!",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "mug",
        "itemName": "Grande tasse",
        "itemNameRu": "Кружка",
        "ru": "Ура! Большая кружка!",
        "en": "Youpi ! Une grande tasse !",
        "a11y": "Une grande tasse verte avec un petit chardon peint, pleine de chocolat chaud, est posée sur le rebord de la fenêtre.",
        "image": "/art/edinburgh/reward-3.jpg",
        "steps": [
          "Jamie a un placard plein de tasses.",
          "« Choisis-en une », dit-il.",
          "Murzik choisit une grande tasse verte avec un chardon.",
          "On peut y mettre beaucoup de chocolat chaud !"
        ],
        "bridge": "Aujourd'hui, ils veulent voir le célèbre château sur le rocher. Mais comment monter là-haut ?"
      }
    },
    {
      "id": "a1-edinburgh-4",
      "level": "A1",
      "cityId": "edinburgh",
      "number": 4,
      "title": "Montée au château",
      "minutes": 6,
      "goals": [
        "Demander comment aller quelque part à pied",
        "Comprendre « en haut de la colline » et « dix minutes »",
        "Dire « Quelle vue ! »"
      ],
      "vocabNote": "Как дойти до…? veut dire « Comment aller à … à pied ? » (дойти — aller jusqu'à, à pied). Tu connais Как пройти к…? depuis Londres — les deux sont justes.",
      "vocab": [
        {
          "id": "ed4-1",
          "ru": "Как дойти до замка?",
          "en": "Comment aller au château à pied ?",
          "a11y": "Dans une rue pavée en pente, Tom demande son chemin à un passant en montrant le haut.",
          "audioLabel": "Écouter Как дойти до замка",
          "image": "/art/edinburgh/4-1.jpg"
        },
        {
          "id": "ed4-2",
          "ru": "Это наверху.",
          "en": "C'est tout en haut.",
          "a11y": "Un château de pierre grise au sommet d'un haut rocher sombre.",
          "audioLabel": "Écouter Это наверху",
          "image": "/art/edinburgh/4-2.jpg"
        },
        {
          "id": "ed4-3",
          "ru": "Идти минут десять.",
          "en": "C'est à une dizaine de minutes à pied.",
          "a11y": "Un petit cadran avec une flèche qui fait dix minutes.",
          "audioLabel": "Écouter Идти минут десять",
          "image": "/art/edinburgh/4-3.jpg"
        },
        {
          "id": "ed4-4",
          "ru": "лестница",
          "en": "escalier",
          "a11y": "Un long escalier de pierre étroit qui monte en pente raide entre de vieilles maisons.",
          "audioLabel": "Écouter лестница",
          "image": "/art/edinburgh/4-4.jpg"
        },
        {
          "id": "ed4-5",
          "ru": "Я устал. / Я устала.",
          "en": "Je suis fatigué. Je suis fatiguée.",
          "a11y": "Murzik s'assoit sur une marche, essoufflé.",
          "audioLabel": "Écouter Я устал. Я устала",
          "image": "/art/edinburgh/4-5.jpg"
        },
        {
          "id": "ed4-6",
          "ru": "Мы почти пришли!",
          "en": "On y est presque !",
          "a11y": "Tom montre la porte du château, à quelques pas seulement.",
          "audioLabel": "Écouter Мы почти пришли",
          "image": "/art/edinburgh/4-6.jpg"
        },
        {
          "id": "ed4-7",
          "ru": "Какой вид!",
          "en": "Quelle vue !",
          "a11y": "Depuis les remparts du château : toute la ville, la mer et les collines.",
          "audioLabel": "Écouter Какой вид",
          "image": "/art/edinburgh/4-7.jpg"
        }
      ],
      "dialogue": {
        "title": "La longue montée",
        "note": "Ещё немного! — Encore un petit effort ! Наверху — tout en haut.",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Извините, как дойти до замка?",
            "en": "Excusez-moi, comment aller au château ?"
          },
          {
            "speaker": "passerby",
            "ru": "Это наверху. Идите прямо, потом по лестнице. Идти минут десять.",
            "en": "C'est tout en haut. Allez tout droit, puis montez l'escalier. C'est à une dizaine de minutes."
          },
          {
            "speaker": "murzik",
            "ru": "Ох… Лестница… Том, я устал!",
            "en": "Oh… Un escalier… Tom, je suis fatigué !"
          },
          {
            "speaker": "tom",
            "ru": "Ещё немного! Мы почти пришли!",
            "en": "Encore un petit effort ! On y est presque !"
          },
          {
            "speaker": "murzik",
            "ru": "Ура! Мы на месте!",
            "en": "Youpi ! On y est !"
          },
          {
            "speaker": "tom",
            "ru": "Смотри! Какой вид!",
            "en": "Regarde ! Quelle vue !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "ed4-d1",
          "prompt": "Combien de temps faut-il pour aller au château à pied ?",
          "options": [
            {
              "label": "Une dizaine de minutes.",
              "correct": true
            },
            {
              "label": "Environ une heure.",
              "correct": false
            },
            {
              "label": "Deux minutes.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Révision A1 : indiquer le chemin",
          "paragraphs": [
            "Идите прямо. Поверните направо / налево. Это далеко? — Нет, это близко. (Londres.)",
            "Где? здесь, там, рядом, напротив, за углом. Куда? туда, сюда. (Amsterdam et Varsovie.)"
          ],
          "examples": [
            {
              "ru": "Идите прямо, потом налево.",
              "en": "Allez tout droit, puis à gauche."
            },
            {
              "ru": "Замок там, наверху.",
              "en": "Le château est là-haut."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "ed4-t1",
          "prompt": "Écoute. Par où ?",
          "skill": "listening",
          "audio": "Идите прямо, потом направо.",
          "options": [
            {
              "label": "Tout droit, puis à droite.",
              "correct": true
            },
            {
              "label": "Tout droit, puis à gauche.",
              "correct": false
            },
            {
              "label": "À gauche, puis tout droit.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "ed4-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "наверху",
              "right": "tout en haut"
            },
            {
              "left": "лестница",
              "right": "escalier"
            },
            {
              "left": "Какой вид!",
              "right": "Quelle vue !"
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ed4-t3",
          "prompt": "Une femme a monté beaucoup de marches. Que dit-elle ?",
          "skill": "grammar",
          "options": [
            {
              "label": "Я устала!",
              "correct": true
            },
            {
              "label": "Я устал!",
              "correct": false
            },
            {
              "label": "Мы устали!",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "ed4-t4",
          "prompt": "Forme le mot « château ».",
          "word": "замок",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "ed4-t5",
          "prompt": "Как дойти до музея?",
          "model": "Идите прямо, потом налево. Это близко.",
          "modelEn": "Allez tout droit, puis à gauche. C'est tout près.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Un touriste te demande son chemin. Donne-lui des indications simples."
        },
        {
          "kind": "choice",
          "id": "ed4-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Что на завтрак?",
          "options": [
            {
              "label": "Овсянка и яичница.",
              "correct": true
            },
            {
              "label": "Это наверху.",
              "correct": false
            },
            {
              "label": "Лестница.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "telescope",
        "itemName": "Petite longue-vue",
        "itemNameRu": "Подзорная труба",
        "ru": "Ура! Подзорная труба!",
        "en": "Youpi ! Une petite longue-vue !",
        "a11y": "Murzik regarde par sa fenêtre le château sur le rocher avec une petite longue-vue en laiton.",
        "image": "/art/edinburgh/reward-4.jpg",
        "steps": [
          "Dans la boutique du château, il y a une petite longue-vue en laiton.",
          "Tom l'achète pour Murzik.",
          "De la fenêtre, Murzik peut voir le château.",
          "Et la mer. Et très, très loin…"
        ],
        "bridge": "Ce soir, il y a un festival dans la vieille ville. De la musique partout !"
      }
    },
    {
      "id": "a1-edinburgh-5",
      "level": "A1",
      "cityId": "edinburgh",
      "number": 5,
      "title": "Le festival",
      "minutes": 6,
      "goals": [
        "Parler d'une sortie le soir",
        "Réagir à la musique",
        "Demander un bis"
      ],
      "vocabNote": "Пойдём послушаем! veut dire « Allons écouter ! ». Волынка, c'est la cornemuse, le célèbre instrument écossais.",
      "vocab": [
        {
          "id": "ed5-1",
          "ru": "Что сегодня вечером?",
          "en": "Qu'est-ce qu'il y a ce soir ?",
          "a11y": "Murzik regarde une rue colorée pleine de lumières de festival et de monde.",
          "audioLabel": "Écouter Что сегодня вечером",
          "image": "/art/edinburgh/5-1.jpg"
        },
        {
          "id": "ed5-2",
          "ru": "фестиваль",
          "en": "festival",
          "a11y": "Une rue animée la nuit, avec des musiciens, des jongleurs et des lumières.",
          "audioLabel": "Écouter фестиваль",
          "image": "/art/edinburgh/5-2.jpg"
        },
        {
          "id": "ed5-3",
          "ru": "волынка",
          "en": "cornemuse",
          "a11y": "Un homme en kilt joue de la cornemuse dans la rue.",
          "audioLabel": "Écouter волынка",
          "image": "/art/edinburgh/5-3.jpg"
        },
        {
          "id": "ed5-4",
          "ru": "Пойдём послушаем!",
          "en": "Allons écouter !",
          "a11y": "Murzik tire Tom par la main vers la musique.",
          "audioLabel": "Écouter Пойдём послушаем",
          "image": "/art/edinburgh/5-4.jpg"
        },
        {
          "id": "ed5-5",
          "ru": "Как громко!",
          "en": "Que c'est fort !",
          "a11y": "Murzik se bouche les oreilles mais rit.",
          "audioLabel": "Écouter Как громко",
          "image": "/art/edinburgh/5-5.jpg"
        },
        {
          "id": "ed5-6",
          "ru": "Мне нравится эта мелодия.",
          "en": "J'aime cette mélodie.",
          "a11y": "Murzik se balance joyeusement, les yeux fermés ; des notes de musique flottent autour de lui.",
          "audioLabel": "Écouter Мне нравится эта мелодия",
          "image": "/art/edinburgh/5-6.jpg"
        },
        {
          "id": "ed5-7",
          "ru": "Ещё раз, пожалуйста!",
          "en": "Encore une fois, s'il vous plaît !",
          "a11y": "La foule applaudit ; Murzik saute sur place.",
          "audioLabel": "Écouter Ещё раз, пожалуйста",
          "image": "/art/edinburgh/5-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Musique dans la vieille ville",
        "note": "Эта мелодия… похожа на вальс «Ася»! — Cette mélodie… ressemble à la valse « Assia » !",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Джейми, что сегодня вечером?",
            "en": "Jamie, qu'est-ce qu'il y a ce soir ?"
          },
          {
            "speaker": "jamie",
            "ru": "Фестиваль! Музыка, театр… И волынка!",
            "en": "Un festival ! De la musique, du théâtre… Et des cornemuses !"
          },
          {
            "speaker": "tom",
            "ru": "Пойдём послушаем!",
            "en": "Allons écouter !"
          },
          {
            "speaker": "murzik",
            "ru": "Ой, как громко! Но мне нравится эта мелодия.",
            "en": "Oh, que c'est fort ! Mais j'aime cette mélodie."
          },
          {
            "speaker": "murzik",
            "ru": "Том… Эта мелодия похожа на вальс «Ася»!",
            "en": "Tom… Cette mélodie ressemble à la valse « Assia » !"
          },
          {
            "speaker": "tom",
            "ru": "Правда? Ещё раз, пожалуйста!",
            "en": "C'est vrai ? Encore une fois, s'il vous plaît !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "ed5-d1",
          "prompt": "À quoi ressemble la mélodie ?",
          "options": [
            {
              "label": "À la valse « Assia ».",
              "correct": true
            },
            {
              "label": "À une chanson russe de Moscou.",
              "correct": false
            },
            {
              "label": "À la chanson préférée de Tom.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Révision A1 : les loisirs",
          "paragraphs": [
            "Я люблю музыку. Я умею играть на гитаре. Иногда я бегаю. (Vienne.)",
            "Les invitations : Давай пойдём в кино! У тебя есть время? Договорились! (Berlin.)"
          ],
          "examples": [
            {
              "ru": "Давай пойдём на концерт!",
              "en": "Allons à un concert !"
            },
            {
              "ru": "Мне очень понравилось!",
              "en": "Ça m'a vraiment plu !"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "ed5-t1",
          "prompt": "Écoute. Qu'est-ce qu'il y a ce soir ?",
          "skill": "listening",
          "audio": "Сегодня вечером концерт и фестиваль.",
          "options": [
            {
              "label": "Un concert et un festival.",
              "correct": true
            },
            {
              "label": "Un film.",
              "correct": false
            },
            {
              "label": "Un match de football.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ed5-t2",
          "prompt": "Qu'est-ce que волынка ?",
          "skill": "words",
          "options": [
            {
              "label": "cornemuse",
              "correct": true
            },
            {
              "label": "un violon",
              "correct": false
            },
            {
              "label": "un festival",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "ed5-t3",
          "prompt": "Complète : « Allons au cinéma ! »",
          "before": "Давай",
          "after": "в кино!",
          "answer": "пойдём",
          "options": [
            "пойдём",
            "послушаем",
            "мелодия"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "ed5-t4",
          "prompt": "Quelle lettre manque ? (mélodie)",
          "before": "мел",
          "after": "дия",
          "answer": "о",
          "options": [
            "о",
            "а",
            "е"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "ed5-t5",
          "prompt": "Что ты любишь делать вечером?",
          "model": "Я люблю слушать музыку.",
          "modelEn": "J'adore écouter de la musique.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Dis ce que tu aimes vraiment faire le soir."
        },
        {
          "kind": "choice",
          "id": "ed5-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Как дойти до замка?",
          "options": [
            {
              "label": "Это наверху. Идти минут десять.",
              "correct": true
            },
            {
              "label": "Как громко!",
              "correct": false
            },
            {
              "label": "Ещё раз, пожалуйста!",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "toy-bagpipes",
        "itemName": "Cornemuse jouet",
        "itemNameRu": "Волынка",
        "ru": "Ура! Маленькая волынка!",
        "en": "Youpi ! Une petite cornemuse !",
        "a11y": "Murzik gonfle les joues en soufflant dans une minuscule cornemuse jouet en tartan ; Tom se bouche les oreilles en riant.",
        "image": "/art/edinburgh/reward-5.jpg",
        "steps": [
          "Au festival, il y a un stand de jouets.",
          "Murzik voit de minuscules cornemuses en tartan.",
          "Il souffle dedans : un bruit épouvantable !",
          "Tout le monde rit."
        ],
        "bridge": "En rentrant, la musique encore dans la tête, Murzik voit quelqu'un sous un réverbère. Un chapeau…"
      }
    },
    {
      "id": "a1-edinburgh-6",
      "level": "A1",
      "cityId": "edinburgh",
      "number": 6,
      "title": "Le chat au chapeau",
      "minutes": 6,
      "goals": [
        "Parler poliment à un inconnu",
        "Demander « Nous nous connaissons ? »",
        "Demander à quelqu'un d'attendre"
      ],
      "vocabNote": "Простите est un autre « Excusez-moi / Pardon » poli. Подождите! et Не уходите! sont polis : Attendez ! Ne partez pas !",
      "vocab": [
        {
          "id": "ed6-1",
          "ru": "Простите…",
          "en": "Excusez-moi…",
          "a11y": "Par une nuit brumeuse, Murzik s'avance prudemment vers une silhouette sous un réverbère.",
          "audioLabel": "Écouter Простите",
          "image": "/art/edinburgh/6-1.jpg"
        },
        {
          "id": "ed6-2",
          "ru": "Мы знакомы?",
          "en": "Nous nous connaissons ?",
          "a11y": "Murzik lève les yeux, l'air plein d'espoir et interrogateur.",
          "audioLabel": "Écouter Мы знакомы",
          "image": "/art/edinburgh/6-2.jpg"
        },
        {
          "id": "ed6-3",
          "ru": "Ты внук Аси?",
          "en": "Tu es le petit-fils d'Assia ?",
          "a11y": "Un gentil vieux chat blanc en chapeau gris se penche et regarde Murzik avec chaleur.",
          "audioLabel": "Écouter Ты внук Аси",
          "image": "/art/edinburgh/6-3.jpg"
        },
        {
          "id": "ed6-4",
          "ru": "Откуда вы знаете?",
          "en": "Comment le savez-vous ?",
          "a11y": "Murzik écarquille les yeux de surprise.",
          "audioLabel": "Écouter Откуда вы знаете",
          "image": "/art/edinburgh/6-4.jpg"
        },
        {
          "id": "ed6-5",
          "ru": "Подождите!",
          "en": "Attendez !",
          "a11y": "Murzik tend la patte pendant que le vieux chat se détourne.",
          "audioLabel": "Écouter Подождите",
          "image": "/art/edinburgh/6-5.jpg"
        },
        {
          "id": "ed6-6",
          "ru": "Не уходите!",
          "en": "Ne partez pas !",
          "a11y": "Murzik court après le vieux chat dans la brume.",
          "audioLabel": "Écouter Не уходите",
          "image": "/art/edinburgh/6-6.jpg"
        },
        {
          "id": "ed6-7",
          "ru": "Он исчез!",
          "en": "Il a disparu !",
          "a11y": "Murzik est seul sous le réverbère dans la brume. Seule une plume grise est posée sur les pavés.",
          "audioLabel": "Écouter Он исчез",
          "image": "/art/edinburgh/6-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Sous le réverbère",
        "note": "Ты так похож на неё — tu lui ressembles tellement. Скоро — bientôt.",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Простите… Мы знакомы?",
            "en": "Excusez-moi… Nous nous connaissons ?"
          },
          {
            "speaker": "lev",
            "ru": "Ты внук Аси?",
            "en": "Tu es le petit-fils d'Assia ?"
          },
          {
            "speaker": "murzik",
            "ru": "Да! Откуда вы знаете?",
            "en": "Oui ! Comment le savez-vous ?"
          },
          {
            "speaker": "lev",
            "ru": "Ты так похож на неё… Мы ещё встретимся. Скоро.",
            "en": "Tu lui ressembles tellement… Nous nous reverrons. Bientôt."
          },
          {
            "speaker": "murzik",
            "ru": "Подождите! Не уходите!",
            "en": "Attendez ! Ne partez pas !"
          },
          {
            "speaker": "tom",
            "ru": "Мурзик! Кто это был?",
            "en": "Murzik ! Qui était-ce ?"
          },
          {
            "speaker": "murzik",
            "ru": "Он исчез!",
            "en": "Il a disparu !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "ed6-d1",
          "prompt": "Que demande le chat au chapeau ?",
          "options": [
            {
              "label": "Si Murzik est le petit-fils d'Assia.",
              "correct": true
            },
            {
              "label": "Si Murzik s'est perdu.",
              "correct": false
            },
            {
              "label": "Quelle heure il est.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Révision A1 : ты et вы",
          "paragraphs": [
            "À un ami ou à un enfant : ты, Подожди! Не уходи! À un inconnu ou à une personne plus âgée : вы, Подождите! Не уходите! (Rome et Amsterdam.) Exactement comme le tutoiement et le vouvoiement en français.",
            "Le vieux chat tutoie Murzik — les personnes âgées le font souvent avec les enfants."
          ],
          "examples": [
            {
              "ru": "Подожди, Том!",
              "en": "Attends, Tom !"
            },
            {
              "ru": "Простите, вы не знаете, где вокзал?",
              "en": "Excusez-moi, vous savez où est la gare ?"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "ed6-t1",
          "prompt": "Écoute. Que crie Murzik ?",
          "skill": "listening",
          "audio": "Подождите! Не уходите!",
          "options": [
            {
              "label": "Attendez ! Ne partez pas !",
              "correct": true
            },
            {
              "label": "Au secours ! Je me suis perdu !",
              "correct": false
            },
            {
              "label": "Bonjour ! Enchanté !",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "ed6-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "Простите…",
              "right": "Excusez-moi…"
            },
            {
              "left": "Мы знакомы?",
              "right": "Nous nous connaissons ?"
            },
            {
              "left": "Он исчез!",
              "right": "Il a disparu !"
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ed6-t3",
          "prompt": "Tu demandes à un vieil homme que tu ne connais pas d'attendre. Que dis-tu ?",
          "skill": "grammar",
          "options": [
            {
              "label": "Подождите!",
              "correct": true
            },
            {
              "label": "Подожди!",
              "correct": false
            },
            {
              "label": "Не уходи!",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "ed6-t4",
          "prompt": "Forme le mot « petit-fils ».",
          "word": "внук",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "ed6-t5",
          "prompt": "Простите, мы знакомы?",
          "model": "Нет, но очень приятно!",
          "modelEn": "Non, mais enchanté !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Un inconnu croit te connaître. Réponds poliment."
        },
        {
          "kind": "choice",
          "id": "ed6-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Что сегодня вечером?",
          "options": [
            {
              "label": "Фестиваль!",
              "correct": true
            },
            {
              "label": "Он исчез!",
              "correct": false
            },
            {
              "label": "Мы знакомы?",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "flat-cap",
        "itemName": "Casquette en tweed",
        "itemNameRu": "Кепка",
        "ru": "Кепка… как у него.",
        "en": "Une casquette… comme la sienne.",
        "a11y": "Devant le miroir, Murzik essaie une petite casquette en tweed gris, en pensant très fort au chat au chapeau.",
        "image": "/art/edinburgh/reward-6.jpg",
        "steps": [
          "Murzik n'arrive pas à dormir.",
          "Le matin, il achète une petite casquette grise.",
          "Il se regarde dans le miroir.",
          "« Nous nous reverrons », chuchote-t-il."
        ],
        "bridge": "Le dernier jour à Édimbourg. Et le grand jour : l'examen A1 !"
      }
    },
    {
      "id": "a1-edinburgh-7",
      "level": "A1",
      "cityId": "edinburgh",
      "number": 7,
      "title": "L'examen A1",
      "minutes": 8,
      "goals": [
        "Montrer tout ce que tu as appris au niveau A1",
        "Comprendre un russe plus long à l'oral",
        "Fêter la fin du niveau A1"
      ],
      "vocabNote": "Voici ton examen A1 : des exercices des quatorze villes. Prends ton temps — tu vas y arriver !",
      "vocab": [
        {
          "id": "ed7-1",
          "ru": "Экзамен сдан!",
          "en": "L'examen est réussi !",
          "a11y": "Murzik montre un diplôme avec une grande étoile dorée (sans aucun texte).",
          "audioLabel": "Écouter Экзамен сдан",
          "image": "/art/edinburgh/7-1.jpg"
        },
        {
          "id": "ed7-2",
          "ru": "Молодец!",
          "en": "Bravo !",
          "a11y": "Tom tape très fort dans la patte de Murzik.",
          "audioLabel": "Écouter Молодец",
          "image": "/art/edinburgh/7-2.jpg"
        },
        {
          "id": "ed7-3",
          "ru": "Уровень A1 пройден!",
          "en": "Le niveau A1 est terminé !",
          "a11y": "Un chemin de quatorze petites icônes de villes se termine par un drapeau doré.",
          "audioLabel": "Écouter Уровень A1 пройден",
          "image": "/art/edinburgh/7-3.jpg"
        },
        {
          "id": "ed7-4",
          "ru": "Это было нелегко.",
          "en": "Ce n'était pas facile.",
          "a11y": "Murzik s'essuie le front avec un sourire soulagé.",
          "audioLabel": "Écouter Это было нелегко",
          "image": "/art/edinburgh/7-4.jpg"
        },
        {
          "id": "ed7-5",
          "ru": "Что дальше?",
          "en": "Et maintenant ?",
          "a11y": "Murzik regarde une route qui se divise en de nombreux chemins vers de nouvelles villes.",
          "audioLabel": "Écouter Что дальше",
          "image": "/art/edinburgh/7-5.jpg"
        },
        {
          "id": "ed7-6",
          "ru": "Новый уровень!",
          "en": "Un nouveau niveau !",
          "a11y": "Une porte s'ouvre sur un nouveau paysage lumineux.",
          "audioLabel": "Écouter Новый уровень",
          "image": "/art/edinburgh/7-6.jpg"
        },
        {
          "id": "ed7-7",
          "ru": "До встречи на A2!",
          "en": "Rendez-vous au niveau A2 !",
          "a11y": "Murzik et Tom disent au revoir avec leurs valises.",
          "audioLabel": "Écouter До встречи на A2",
          "image": "/art/edinburgh/7-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Un mot sur la table",
        "note": "Записка — un mot. Я тоже её ищу — moi aussi, je la cherche. Л. — la lettre L.",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Мурзик, ты молодец! Экзамен сдан! Уровень A1 пройден!",
            "en": "Murzik, bravo ! L'examen est réussi ! Le niveau A1 est terminé !"
          },
          {
            "speaker": "murzik",
            "ru": "Ура! Это было нелегко.",
            "en": "Youpi ! Ce n'était pas facile."
          },
          {
            "speaker": "jamie",
            "ru": "Мурзик, тебе записка. Её принесли утром.",
            "en": "Murzik, il y a un mot pour toi. Quelqu'un l'a apporté ce matin."
          },
          {
            "speaker": "murzik",
            "ru": "«Я тоже её ищу. Лион. — Л.»",
            "en": "« Moi aussi, je la cherche. Lyon. — L. »"
          },
          {
            "speaker": "tom",
            "ru": "Лион? Это во Франции!",
            "en": "Lyon ? C'est en France !"
          },
          {
            "speaker": "murzik",
            "ru": "Что дальше? Новый уровень! До встречи на A2!",
            "en": "Et maintenant ? Un nouveau niveau ! Rendez-vous au niveau A2 !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "ed7-d1",
          "prompt": "Que dit le mot ?",
          "options": [
            {
              "label": "« Moi aussi, je la cherche. Lyon. »",
              "correct": true
            },
            {
              "label": "« Joyeux anniversaire, mon petit-fils. »",
              "correct": false
            },
            {
              "label": "« Rentre à Moscou. »",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "A1 : ce que tu sais faire maintenant",
          "paragraphs": [
            "Tu sais saluer, te présenter, commander à manger, faire des achats, demander ton chemin, parler de ta famille, de l'heure, de tes projets, de tes loisirs, de ta santé, de ton travail, des dates et de ta ville.",
            "Tu sais parler du passé (я был / была), du présent (я живу) et du futur (я буду). C'est ça, le niveau A1 !"
          ],
          "examples": [
            {
              "ru": "Меня зовут Мурзик. Я из Москвы.",
              "en": "Je m'appelle Murzik. Je viens de Moscou."
            },
            {
              "ru": "Я изучаю русский язык.",
              "en": "J'étudie le russe."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "ed7-t1",
          "prompt": "Examen 1 · Écoute. D'où vient cette personne et où habite-t-elle maintenant ?",
          "skill": "listening",
          "help": "Voici ton examen A1. Écoute autant de fois que tu veux.",
          "audio": "Привет! Меня зовут Анна. Я из Лондона, но сейчас я живу в Риме. Я работаю в кафе.",
          "options": [
            {
              "label": "De Londres, habite à Rome.",
              "correct": true
            },
            {
              "label": "De Rome, habite à Londres.",
              "correct": false
            },
            {
              "label": "De Londres, habite à Paris.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ed7-t2",
          "prompt": "Examen 2 · Écoute. Combien coûte le tout ?",
          "skill": "listening",
          "audio": "Два кофе и один чай. С вас двадцать пять евро.",
          "options": [
            {
              "label": "25 euros.",
              "correct": true
            },
            {
              "label": "20 euros.",
              "correct": false
            },
            {
              "label": "5 euros.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ed7-t3",
          "prompt": "Examen 3 · Écoute. Quand et où se retrouvent-ils ?",
          "skill": "listening",
          "audio": "Давай встретимся в субботу в семь часов, у входа в кино.",
          "options": [
            {
              "label": "Samedi à sept heures, à l'entrée du cinéma.",
              "correct": true
            },
            {
              "label": "Dimanche à sept heures, à la gare.",
              "correct": false
            },
            {
              "label": "Samedi à onze heures, au musée.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ed7-t4",
          "prompt": "Examen 4 · Tu rencontres la grand-mère de ton ami. Que dis-tu ?",
          "skill": "words",
          "options": [
            {
              "label": "Здравствуйте! Очень приятно.",
              "correct": true
            },
            {
              "label": "Привет! Как жизнь?",
              "correct": false
            },
            {
              "label": "Пока!",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "ed7-t5",
          "prompt": "Examen 5 · Complète : « J'ai mal à la tête. »",
          "before": "У меня болит",
          "after": ".",
          "answer": "голова",
          "options": [
            "голова",
            "голову",
            "головы"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "ed7-t6",
          "prompt": "Examen 6 · Complète : « Nous allons au musée. »",
          "before": "Мы едем в",
          "after": ".",
          "answer": "музей",
          "options": [
            "музей",
            "музее",
            "музея"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "ed7-t7",
          "prompt": "Examen 7 · Forme le mot « voyage ».",
          "word": "путешествие",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "ed7-t8",
          "prompt": "Расскажи о себе.",
          "model": "Меня зовут Том. Я из Лондона. Я фотограф. Я люблю путешествовать.",
          "modelEn": "Je m'appelle Tom. Je viens de Londres. Je suis photographe. J'adore voyager.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Examen 8 · Dis quatre phrases sur toi : ton prénom, d'où tu viens, ce que tu fais, ce que tu adores."
        },
        {
          "kind": "truefalse",
          "id": "ed7-t9",
          "prompt": "Vrai ou faux",
          "statement": "Examen 9 · Я была в Париже est dit par une femme.",
          "correct": true,
          "skill": "review"
        }
      ],
      "reward": {
        "itemId": "thistle",
        "itemName": "Broche en forme de chardon",
        "itemNameRu": "Чертополох",
        "ru": "Ура! Брошь-чертополох!",
        "en": "Youpi ! Une broche en forme de chardon !",
        "a11y": "Murzik épingle une petite broche argentée et violette en forme de chardon sur son écharpe couleur rouille.",
        "image": "/art/edinburgh/reward-7.jpg",
        "steps": [
          "Jamie offre un cadeau à Murzik pour l'examen.",
          "Une petite broche : un chardon violet, la fleur de l'Écosse.",
          "« Elle est petite, mais très solide — comme toi », dit Jamie.",
          "Murzik l'épingle sur son écharpe."
        ],
        "bridge": "Le niveau A1 est terminé. Le mot de L. est dans la poche de la valise, à côté des cartes postales de grand-mère Assia."
      }
    }
  ],
  "story": {
    "home": {
      "name": "La chambre de Murzik à Édimbourg",
      "nameRu": "Комната в Эдинбурге",
      "image": "/art/edinburgh/home.jpg",
      "a11y": "Une petite chambre vide dans la vieille maison de pierre grise de Jamie, avec une banquette dans l'embrasure de la fenêtre et une vue sur le château sur son rocher."
    },
    "keepsakeId": "thistle",
    "welcomeRu": "Привет, Эдинбург!",
    "welcomeEn": "Bonjour, Édimbourg !",
    "welcomeImage": "/art/edinburgh/arrival.jpg",
    "welcomeA11y": "Murzik et Tom arrivent à Édimbourg : un château de pierre grise sur un haut rocher au-dessus de la vieille ville ; il bruine.",
    "departureImage": "/art/edinburgh/departure.jpg",
    "departureA11y": "Jamie dit au revoir à Murzik et Tom à la gare d'Édimbourg. Murzik porte une broche en forme de chardon sur son écharpe.",
    "finale": [
      {
        "image": "/art/edinburgh/finale-1.jpg",
        "a11y": "Murzik est dans sa chambre douillette à Édimbourg : une cheminée en pierre, des bottes de pluie jaunes, une grande tasse verte, une longue-vue en laiton, une cornemuse jouet et une casquette en tweed gris. Il porte la broche en forme de chardon sur son écharpe.",
        "lines": [
          {
            "en": "La chambre de Murzik à Édimbourg est chaleureuse, même sous la pluie."
          },
          {
            "en": "Il emballe son objet préféré pour l'emporter : la broche en forme de chardon."
          }
        ]
      },
      {
        "image": "/art/edinburgh/finale-2.jpg",
        "a11y": "Murzik et Tom sont sur les remparts du château au coucher du soleil, les bras levés. Derrière eux, un long chemin avec quatorze petits drapeaux de villes.",
        "lines": [
          {
            "ru": "Эдинбург завершён!",
            "en": "Édimbourg, c'est fait !"
          },
          {
            "en": "7 / 7 leçons"
          },
          {
            "ru": "Уровень A1 завершён! Четырнадцать городов!",
            "en": "Le niveau A1 est terminé ! Quatorze villes !"
          }
        ]
      },
      {
        "image": "/art/edinburgh/suitcase.jpg",
        "a11y": "La valise ouverte de Murzik : la gamelle, la théière, l'éventail, la photo de famille, le réveil, les sabots, la boîte à musique, la marionnette, l'azulejo, la carte postale, l'étiquette à bagage, la sirène, le carnet de voyage et le chardon. Dans la poche : les cartes d'Assia et un petit mot signé « Л. ».",
        "lines": [
          {
            "en": "Quatorze villes. Quatorze objets préférés. Deux cartes postales de grand-mère Assia. Et un mot du chat au chapeau."
          },
          {
            "ru": "Я тоже её ищу.",
            "en": "Moi aussi, je la cherche."
          },
          {
            "en": "Murzik ferme la valise. « Lyon, dit-il. On y va. »"
          }
        ]
      },
      {
        "image": "/art/edinburgh/departure.jpg",
        "a11y": "Jamie dit au revoir à Murzik et Tom à la gare d'Édimbourg. Murzik porte une broche en forme de chardon sur son écharpe.",
        "lines": [
          {
            "ru": "До свидания, Эдинбург! До свидания, Джейми!",
            "en": "Au revoir, Édimbourg ! Au revoir, Jamie !"
          },
          {
            "ru": "Следующая остановка: Лион!",
            "en": "Prochain arrêt : Lyon !"
          }
        ]
      },
      {
        "image": "/art/edinburgh/finale-5.jpg",
        "a11y": "Un petit avion vole vers le sud au-dessus de la mer, de l'Écosse vers la France.",
        "lines": [
          {
            "ru": "Эдинбург → Лион",
            "en": "Édimbourg → Lyon"
          }
        ]
      },
      {
        "image": "/art/lyon/arrival.jpg",
        "a11y": "Murzik et Tom arrivent à Lyon, là où deux rivières se rejoignent, avec des maisons colorées sur la colline et une vieille basilique tout en haut.",
        "lines": [
          {
            "ru": "Привет, Лион!",
            "en": "Bonjour, Lyon !"
          },
          {
            "ru": "Начинается A2!",
            "en": "Le niveau A2 commence !"
          }
        ]
      }
    ]
  }
};
