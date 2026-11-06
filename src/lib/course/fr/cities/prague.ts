import type { CityPlan } from "../../types";

/** Prague in the French version of the Russian course (`ru` = Russian, `en` = French). Generated from the English version with French texts. */
export const pragueFr: Pick<CityPlan, "lessons" | "story"> = {
  "lessons": [
    {
      "id": "a1-prague-1",
      "level": "A1",
      "cityId": "prague",
      "number": 1,
      "title": "Des vêtements chauds",
      "minutes": 5,
      "goals": [
        "Nommer les vêtements chauds",
        "Dire ce dont tu as besoin",
        "Dire à un ami de mettre un bonnet"
      ],
      "vocabNote": "Tu connais нужен, нужна, нужны depuis Madrid. Ça marche aussi avec les vêtements : Мне нужна шапка. Мне нужен шарф. Мне нужны ботинки.",
      "vocab": [
        {
          "id": "pr1-1",
          "ru": "Мне нужна куртка.",
          "en": "Il me faut une veste.",
          "a11y": "Murzik grelotte dans le vent froid d'une rue de Prague, les pattes serrées autour de lui.",
          "audioLabel": "Écouter Мне нужна куртка",
          "image": "/art/prague/1-1.jpg"
        },
        {
          "id": "pr1-2",
          "ru": "шапка",
          "en": "bonnet",
          "a11y": "Un bonnet chaud tricoté avec un pompon.",
          "audioLabel": "Écouter шапка",
          "image": "/art/prague/1-2.jpg"
        },
        {
          "id": "pr1-3",
          "ru": "свитер",
          "en": "pull",
          "a11y": "Un gros pull douillet plié sur une chaise.",
          "audioLabel": "Écouter свитер",
          "image": "/art/prague/1-3.jpg"
        },
        {
          "id": "pr1-4",
          "ru": "шарф",
          "en": "écharpe",
          "a11y": "Murzik touche fièrement son écharpe tricotée couleur rouille.",
          "audioLabel": "Écouter шарф",
          "image": "/art/prague/1-4.jpg"
        },
        {
          "id": "pr1-5",
          "ru": "ботинки",
          "en": "chaussures montantes",
          "a11y": "Une paire de chaussures montantes marron bien chaudes près de la porte.",
          "audioLabel": "Écouter ботинки",
          "image": "/art/prague/1-5.jpg"
        },
        {
          "id": "pr1-6",
          "ru": "Надень шапку!",
          "en": "Mets un bonnet !",
          "a11y": "Tom enfonce un bonnet chaud sur les oreilles de Murzik.",
          "audioLabel": "Écouter Надень шапку",
          "image": "/art/prague/1-6.jpg"
        },
        {
          "id": "pr1-7",
          "ru": "Тебе тепло?",
          "en": "Tu as chaud ?",
          "a11y": "Tom pose la question à Murzik, emmitouflé dans un bonnet, une écharpe et un pull : on ne voit que ses yeux.",
          "audioLabel": "Écouter Тебе тепло",
          "image": "/art/prague/1-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Un matin froid",
        "note": "Брр! est le bruit qu'on fait quand on a froid. У меня нет шапки — Je n'ai pas de bonnet. Пойдём в магазин — allons au magasin.",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Брр! Том, мне холодно!",
            "en": "Brr ! Tom, j'ai froid !"
          },
          {
            "speaker": "tom",
            "ru": "Конечно! Здесь не Мадрид. Надень шапку!",
            "en": "Évidemment ! Ce n'est pas Madrid. Mets un bonnet !"
          },
          {
            "speaker": "murzik",
            "ru": "У меня нет шапки. Только шарф.",
            "en": "Je n'ai pas de bonnet. Seulement une écharpe."
          },
          {
            "speaker": "tom",
            "ru": "Тебе нужна шапка. И куртка.",
            "en": "Il te faut un bonnet. Et une veste."
          },
          {
            "speaker": "murzik",
            "ru": "И свитер! И ботинки!",
            "en": "Et un pull ! Et des chaussures chaudes !"
          },
          {
            "speaker": "tom",
            "ru": "Пойдём в магазин!",
            "en": "Allons au magasin !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "pr1-d1",
          "prompt": "Qu'est-ce que Murzik a déjà ?",
          "options": [
            {
              "label": "Seulement une écharpe.",
              "correct": true
            },
            {
              "label": "Un bonnet et une veste.",
              "correct": false
            },
            {
              "label": "Des chaussures chaudes.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Нужен, нужна, нужны",
          "paragraphs": [
            "Мне нужен + un mot masculin : шарф, свитер. Мне нужна + un mot féminin : шапка, куртка. Мне нужны + plusieurs choses : ботинки.",
            "Тебе нужна куртка — Il te faut une veste."
          ],
          "examples": [
            {
              "ru": "Мне нужен свитер.",
              "en": "Il me faut un pull."
            },
            {
              "ru": "Мне нужны ботинки.",
              "en": "Il me faut des chaussures chaudes."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "pr1-t1",
          "prompt": "Écoute. De quoi cette personne a-t-elle besoin ?",
          "skill": "listening",
          "audio": "Мне нужна шапка.",
          "options": [
            {
              "label": "D'un bonnet.",
              "correct": true
            },
            {
              "label": "D'une écharpe.",
              "correct": false
            },
            {
              "label": "De chaussures chaudes.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "pr1-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "куртка",
              "right": "veste"
            },
            {
              "left": "свитер",
              "right": "pull"
            },
            {
              "left": "ботинки",
              "right": "chaussures montantes"
            }
          ]
        },
        {
          "kind": "fill",
          "id": "pr1-t3",
          "prompt": "Complète : « Il me faut un pull. »",
          "before": "Мне",
          "after": "свитер.",
          "answer": "нужен",
          "options": [
            "нужен",
            "нужна",
            "нужны"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "pr1-t4",
          "prompt": "Forme le mot « écharpe ».",
          "word": "шарф",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "pr1-t5",
          "prompt": "Тебе тепло?",
          "model": "Нет, мне холодно! Мне нужна куртка.",
          "modelEn": "Non, j'ai froid ! Il me faut une veste.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Il fait froid dehors. Dis à Tom comment tu te sens et ce qu'il te faut."
        },
        {
          "kind": "choice",
          "id": "pr1-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Как тебе концерт?",
          "options": [
            {
              "label": "Это было чудесно!",
              "correct": true
            },
            {
              "label": "Мне нужна шапка.",
              "correct": false
            },
            {
              "label": "Тебе тепло?",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "coat-stand",
        "itemName": "Portemanteau",
        "itemNameRu": "Вешалка",
        "ru": "Ура! Вешалка для одежды!",
        "en": "Youpi ! Un portemanteau !",
        "a11y": "Un vieux portemanteau en bois près de la porte de la chambre de Murzik à Prague, avec son écharpe accrochée dessus. Par la fenêtre, des toits rouges.",
        "image": "/art/prague/reward-1.jpg",
        "steps": [
          "Leur chambre est dans une vieille maison près de la rivière.",
          "De la fenêtre, on voit des toits rouges.",
          "Près de la porte, il y a un vieux portemanteau en bois.",
          "Murzik y accroche son écharpe."
        ],
        "bridge": "Dans le magasin, il y a tant de couleurs ! Laquelle Murzik va-t-il choisir ?"
      }
    },
    {
      "id": "a1-prague-2",
      "level": "A1",
      "cityId": "prague",
      "number": 2,
      "title": "De quelle couleur ?",
      "minutes": 5,
      "goals": [
        "Nommer les couleurs",
        "Demander de quelle couleur est quelque chose",
        "Dire ta couleur préférée"
      ],
      "vocabNote": "Les couleurs sont des adjectifs, alors elles changent de terminaison, comme en français : красный шарф, красная шапка.",
      "vocab": [
        {
          "id": "pr2-1",
          "ru": "Какого цвета?",
          "en": "De quelle couleur ?",
          "a11y": "Murzik lève un bonnet et le regarde, l'air interrogateur.",
          "audioLabel": "Écouter Какого цвета",
          "image": "/art/prague/2-1.jpg"
        },
        {
          "id": "pr2-2",
          "ru": "красный",
          "en": "rouge",
          "a11y": "Une pomme rouge vif et un bonnet rouge.",
          "audioLabel": "Écouter красный",
          "image": "/art/prague/2-2.jpg"
        },
        {
          "id": "pr2-3",
          "ru": "синий и голубой",
          "en": "bleu foncé et bleu clair",
          "a11y": "Deux taches de peinture : un bleu foncé et profond comme la mer la nuit, et un bleu ciel clair.",
          "audioLabel": "Écouter синий и голубой",
          "image": "/art/prague/2-3b.jpg"
        },
        {
          "id": "pr2-4",
          "ru": "зелёный и жёлтый",
          "en": "vert et jaune",
          "a11y": "Une feuille verte et un soleil jaune côte à côte.",
          "audioLabel": "Écouter зелёный и жёлтый",
          "image": "/art/prague/2-4b.jpg"
        },
        {
          "id": "pr2-5",
          "ru": "розовый и коричневый",
          "en": "rose et marron",
          "a11y": "Une fleur rose et un ours en peluche marron côte à côte.",
          "audioLabel": "Écouter розовый и коричневый",
          "image": "/art/prague/2-5b.jpg"
        },
        {
          "id": "pr2-6",
          "ru": "чёрный и белый",
          "en": "noir et blanc",
          "a11y": "Un chat noir et un chat blanc assis côte à côte.",
          "audioLabel": "Écouter чёрный и белый",
          "image": "/art/prague/2-6.jpg"
        },
        {
          "id": "pr2-7",
          "ru": "Мой любимый цвет — синий.",
          "en": "Ma couleur préférée, c'est le bleu.",
          "a11y": "Murzik serre contre lui un bonnet bleu foncé, l'air ravi.",
          "audioLabel": "Écouter Мой любимый цвет — синий",
          "image": "/art/prague/2-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Au magasin",
        "note": "Или — ou. Как море — comme la mer.",
        "lines": [
          {
            "speaker": "seller",
            "ru": "Здравствуйте! Вам нужна шапка?",
            "en": "Bonjour ! Il vous faut un bonnet ?"
          },
          {
            "speaker": "murzik",
            "ru": "Да. А какие есть цвета?",
            "en": "Oui. Et quelles couleurs avez-vous ?"
          },
          {
            "speaker": "seller",
            "ru": "Красная, зелёная, жёлтая или синяя.",
            "en": "Rouge, vert, jaune ou bleu."
          },
          {
            "speaker": "tom",
            "ru": "Мурзик, может быть, зелёная? Как моё пальто!",
            "en": "Murzik, peut-être vert ? Comme mon manteau !"
          },
          {
            "speaker": "murzik",
            "ru": "Нет. Мой любимый цвет — синий. Как море!",
            "en": "Non. Ma couleur préférée, c'est le bleu. Comme la mer !"
          },
          {
            "speaker": "seller",
            "ru": "Вот синяя шапка.",
            "en": "Voici un bonnet bleu."
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "pr2-d1",
          "prompt": "Quel bonnet Murzik veut-il ?",
          "options": [
            {
              "label": "Le bleu.",
              "correct": true
            },
            {
              "label": "Le vert.",
              "correct": false
            },
            {
              "label": "Le rouge.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Les couleurs s'accordent",
          "paragraphs": [
            "Mots masculins : красный шарф. Mots féminins : красная шапка. Mots neutres : красное пальто. Plusieurs choses : красные ботинки.",
            "Синий est un peu différent : синий шарф, синяя шапка, синее пальто, синие ботинки.",
            "Le russe a deux bleus : синий (bleu foncé) et голубой (bleu clair, comme le ciel). Pour un Russe, ce sont deux couleurs différentes !"
          ],
          "examples": [
            {
              "ru": "зелёная куртка",
              "en": "une veste verte"
            },
            {
              "ru": "чёрные ботинки",
              "en": "des chaussures noires"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "pr2-t1",
          "prompt": "Écoute. De quelle couleur est l'écharpe ?",
          "skill": "listening",
          "audio": "У меня жёлтый шарф.",
          "options": [
            {
              "label": "Jaune.",
              "correct": true
            },
            {
              "label": "Verte.",
              "correct": false
            },
            {
              "label": "Rouge.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "pr2-t2",
          "prompt": "Associe les couleurs.",
          "skill": "words",
          "pairs": [
            {
              "left": "красный",
              "right": "rouge"
            },
            {
              "left": "зелёный",
              "right": "vert"
            },
            {
              "left": "чёрный",
              "right": "noir"
            },
            {
              "left": "белый",
              "right": "blanc"
            }
          ]
        },
        {
          "kind": "fill",
          "id": "pr2-t3",
          "prompt": "Complète : « un bonnet rouge ».",
          "before": "",
          "after": "шапка",
          "answer": "красная",
          "options": [
            "красная",
            "красный",
            "красные"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "pr2-t4",
          "prompt": "Quelle lettre manque ? (vert)",
          "before": "зел",
          "after": "ный",
          "answer": "ё",
          "options": [
            "ё",
            "о",
            "е"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "pr2-t5",
          "prompt": "Какой твой любимый цвет?",
          "model": "Мой любимый цвет — зелёный.",
          "modelEn": "Ma couleur préférée, c'est le vert.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Dis ta vraie couleur préférée."
        },
        {
          "kind": "choice",
          "id": "pr2-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Ты занимаешься спортом?",
          "options": [
            {
              "label": "Да, я бегаю каждый день.",
              "correct": true
            },
            {
              "label": "Мой любимый цвет — синий.",
              "correct": false
            },
            {
              "label": "Мне нужна куртка.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "paints",
        "itemName": "Peintures à l'aquarelle",
        "itemNameRu": "Акварельные краски",
        "ru": "Ура! Акварельные краски!",
        "en": "Youpi ! Des peintures à l'aquarelle !",
        "a11y": "Une boîte d'aquarelles ouverte, avec plein de couleurs vives et un pinceau, sur le rebord de la fenêtre de Murzik, au-dessus des toits rouges de Prague.",
        "image": "/art/prague/reward-2.jpg",
        "steps": [
          "À côté du magasin de vêtements, il y a un magasin de beaux-arts.",
          "Murzik voit une boîte d'aquarelles.",
          "Tant de couleurs !",
          "Maintenant, il peut peindre comme Assia."
        ],
        "bridge": "Demain, Tom veut acheter une nouvelle veste. Mais lui ira-t-elle ?"
      }
    },
    {
      "id": "a1-prague-3",
      "level": "A1",
      "cityId": "prague",
      "number": 3,
      "title": "Ça me va ?",
      "minutes": 6,
      "goals": [
        "Demander à essayer quelque chose",
        "Demander la taille",
        "Dire que quelque chose va bien à quelqu'un"
      ],
      "vocabNote": "Мне идёт? veut dire mot à mot « Ça me va ? » — exactement comme en français ! Le verbe идти (aller) sert aussi ici.",
      "vocab": [
        {
          "id": "pr3-1",
          "ru": "Можно примерить?",
          "en": "Je peux l'essayer ?",
          "a11y": "Tom tient une veste et montre une cabine d'essayage.",
          "audioLabel": "Écouter Можно примерить",
          "image": "/art/prague/3-1.jpg"
        },
        {
          "id": "pr3-2",
          "ru": "Какой размер? — Это мой размер.",
          "en": "Quelle taille ? — C'est ma taille.",
          "a11y": "Une vendeuse avec un mètre ruban ; Tom porte une veste qui lui va parfaitement.",
          "audioLabel": "Écouter Какой размер? — Это мой размер",
          "image": "/art/prague/3-2b.jpg"
        },
        {
          "id": "pr3-3",
          "ru": "рубашка и брюки",
          "en": "une chemise et un pantalon",
          "a11y": "Une chemise blanche et un pantalon gris sur des cintres.",
          "audioLabel": "Écouter рубашка и брюки",
          "image": "/art/prague/3-3b.jpg"
        },
        {
          "id": "pr3-4",
          "ru": "Слишком большая.",
          "en": "Trop grande.",
          "a11y": "Murzik est perdu dans une énorme veste ; on ne voit que ses oreilles.",
          "audioLabel": "Écouter Слишком большая",
          "image": "/art/prague/3-4.jpg"
        },
        {
          "id": "pr3-5",
          "ru": "Мне идёт? — Тебе очень идёт!",
          "en": "Ça me va ? — Ça te va très bien !",
          "a11y": "Tom tourne devant un miroir dans sa nouvelle veste ; Murzik lève les deux pouces.",
          "audioLabel": "Écouter Мне идёт? — Тебе очень идёт",
          "image": "/art/prague/3-5b.jpg"
        },
        {
          "id": "pr3-6",
          "ru": "джинсы, юбка, туфли",
          "en": "un jean, une jupe, des chaussures",
          "a11y": "Un jean bleu, une jupe rouge et une paire de chaussures sur une étagère du magasin.",
          "audioLabel": "Écouter джинсы, юбка, туфли",
          "image": "/art/prague/3-6b.jpg"
        },
        {
          "id": "pr3-7",
          "ru": "Беру!",
          "en": "Je la prends !",
          "a11y": "Tom tend la veste au caissier, l'air content.",
          "audioLabel": "Écouter Беру",
          "image": "/art/prague/3-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Une nouvelle veste",
        "note": "Куртка est un mot féminin, donc : большая куртка, она мне идёт. Вот эта — celle-ci.",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Здравствуйте! Можно примерить куртку?",
            "en": "Bonjour ! Je peux essayer une veste ?"
          },
          {
            "speaker": "seller",
            "ru": "Конечно. Какой размер?",
            "en": "Bien sûr. Quelle taille ?"
          },
          {
            "speaker": "tom",
            "ru": "Не знаю… Ой, эта слишком большая.",
            "en": "Je ne sais pas… Oh, celle-ci est trop grande."
          },
          {
            "speaker": "seller",
            "ru": "А вот эта?",
            "en": "Et celle-ci ?"
          },
          {
            "speaker": "tom",
            "ru": "Это мой размер! Мурзик, мне идёт?",
            "en": "C'est ma taille ! Murzik, ça me va ?"
          },
          {
            "speaker": "murzik",
            "ru": "Тебе очень идёт!",
            "en": "Ça te va très bien !"
          },
          {
            "speaker": "tom",
            "ru": "Беру!",
            "en": "Je la prends !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "pr3-d1",
          "prompt": "Quel était le problème avec la première veste ?",
          "options": [
            {
              "label": "Elle était trop grande.",
              "correct": true
            },
            {
              "label": "Elle n'était pas de la bonne couleur.",
              "correct": false
            },
            {
              "label": "Elle était trop chère.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Идёт et идут",
          "paragraphs": [
            "Тебе идёт + une seule chose : Тебе идёт эта шапка. Тебе идут + plusieurs choses : Тебе идут эти ботинки.",
            "Слишком veut dire « trop » : слишком большой, слишком маленький."
          ],
          "examples": [
            {
              "ru": "Мне идёт этот свитер?",
              "en": "Ce pull me va ?"
            },
            {
              "ru": "Тебе идут эти ботинки.",
              "en": "Ces chaussures te vont bien."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "pr3-t1",
          "prompt": "Écoute. Quel est le problème ?",
          "skill": "listening",
          "audio": "Этот свитер слишком маленький.",
          "options": [
            {
              "label": "Le pull est trop petit.",
              "correct": true
            },
            {
              "label": "Le pull est trop grand.",
              "correct": false
            },
            {
              "label": "Le pull n'est pas de la bonne couleur.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "pr3-t2",
          "prompt": "Ça te plaît beaucoup et tu veux l'acheter. Que dis-tu ?",
          "skill": "words",
          "options": [
            {
              "label": "Беру!",
              "correct": true
            },
            {
              "label": "Слишком большая.",
              "correct": false
            },
            {
              "label": "Какой размер?",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "pr3-t3",
          "prompt": "Comment dit-on « Ces chaussures te vont bien » ?",
          "skill": "grammar",
          "options": [
            {
              "label": "Тебе идут эти ботинки.",
              "correct": true
            },
            {
              "label": "Тебе идёт эти ботинки.",
              "correct": false
            },
            {
              "label": "Ты идёшь эти ботинки.",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "pr3-t4",
          "prompt": "Forme le mot « taille ».",
          "word": "размер",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "pr3-t5",
          "prompt": "Мне идёт?",
          "model": "Тебе очень идёт!",
          "modelEn": "Ça te va très bien !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Ton ami essaie un nouveau bonnet. Dis-lui qu'il lui va bien."
        },
        {
          "kind": "choice",
          "id": "pr3-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Какого цвета?",
          "options": [
            {
              "label": "Синего.",
              "correct": true
            },
            {
              "label": "Слишком большая.",
              "correct": false
            },
            {
              "label": "Беру!",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "wardrobe",
        "itemName": "Armoire",
        "itemNameRu": "Шкаф",
        "ru": "Ура! Шкаф для одежды!",
        "en": "Youpi ! Une armoire !",
        "a11y": "Une petite armoire en bois peint, avec des fleurs sur les portes. Dedans sont accrochés le nouveau bonnet bleu de Murzik et la nouvelle veste de Tom.",
        "image": "/art/prague/reward-3.jpg",
        "steps": [
          "Tant de nouveaux vêtements !",
          "Il leur faut un endroit pour les ranger.",
          "La vieille dame du rez-de-chaussée leur donne une petite armoire peinte.",
          "Tout rentre dedans."
        ],
        "bridge": "Cette nuit-là, il pleut sans arrêt. Le matin, Murzik se réveille en se sentant bizarre…"
      }
    },
    {
      "id": "a1-prague-4",
      "level": "A1",
      "cityId": "prague",
      "number": 4,
      "title": "Je ne me sens pas bien",
      "minutes": 6,
      "goals": [
        "Demander à quelqu'un comment il se sent",
        "Dire où tu as mal",
        "Souhaiter un prompt rétablissement"
      ],
      "vocabNote": "У меня болит… veut dire « J'ai mal à … », mot à mot « Chez moi fait mal … » : У меня болит голова — J'ai mal à la tête.",
      "vocab": [
        {
          "id": "pr4-1",
          "ru": "Как ты себя чувствуешь?",
          "en": "Comment tu te sens ?",
          "a11y": "Tom est assis au bord du lit de Murzik, l'air inquiet.",
          "audioLabel": "Écouter Как ты себя чувствуешь",
          "image": "/art/prague/4-1.jpg"
        },
        {
          "id": "pr4-2",
          "ru": "Мне плохо. У меня температура.",
          "en": "Je ne me sens pas bien. J'ai de la fièvre.",
          "a11y": "Murzik est au lit, les joues rouges et un thermomètre dans la bouche.",
          "audioLabel": "Écouter Мне плохо. У меня температура",
          "image": "/art/prague/4-2b.jpg"
        },
        {
          "id": "pr4-3",
          "ru": "У меня болит голова. И горло.",
          "en": "J'ai mal à la tête. Et à la gorge.",
          "a11y": "Murzik se tient la tête d'une patte et la gorge de l'autre.",
          "audioLabel": "Écouter У меня болит голова. И горло",
          "image": "/art/prague/4-3b.jpg"
        },
        {
          "id": "pr4-4",
          "ru": "У меня болит живот.",
          "en": "J'ai mal au ventre.",
          "a11y": "Murzik se tient le ventre à deux pattes, l'air triste.",
          "audioLabel": "Écouter У меня болит живот",
          "image": "/art/prague/4-4b.jpg"
        },
        {
          "id": "pr4-5",
          "ru": "У меня болит зуб.",
          "en": "J'ai mal à une dent.",
          "a11y": "Murzik se tient la joue ; un côté de son visage est un peu enflé.",
          "audioLabel": "Écouter У меня болит зуб",
          "image": "/art/prague/4-5b.jpg"
        },
        {
          "id": "pr4-6",
          "ru": "рука, нога, спина",
          "en": "le bras, la jambe, le dos",
          "a11y": "Un dessin simple et sympathique de Tom, avec des flèches vers son bras, sa jambe et son dos.",
          "audioLabel": "Écouter рука, нога, спина",
          "image": "/art/prague/4-6b.jpg"
        },
        {
          "id": "pr4-7",
          "ru": "Отдыхай! Выздоравливай!",
          "en": "Repose-toi ! Guéris vite !",
          "a11y": "Tom borde Murzik et pose une tasse de thé près du lit.",
          "audioLabel": "Écouter Отдыхай! Выздоравливай",
          "image": "/art/prague/4-7b.jpg"
        }
      ],
      "dialogue": {
        "title": "Un mauvais matin",
        "note": "Врач — un médecin. Внизу — en bas.",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Мурзик, как ты себя чувствуешь?",
            "en": "Murzik, comment tu te sens ?"
          },
          {
            "speaker": "murzik",
            "ru": "Мне плохо…",
            "en": "Je ne me sens pas bien…"
          },
          {
            "speaker": "tom",
            "ru": "Что болит?",
            "en": "Où as-tu mal ?"
          },
          {
            "speaker": "murzik",
            "ru": "У меня болит голова. И горло.",
            "en": "J'ai mal à la tête. Et à la gorge."
          },
          {
            "speaker": "tom",
            "ru": "Ой, у тебя температура! Отдыхай.",
            "en": "Oh, tu as de la fièvre ! Repose-toi."
          },
          {
            "speaker": "tom",
            "ru": "Внизу живёт врач, Анна Петровна. Я её позову.",
            "en": "Une médecin habite en bas, Anna Petrovna. Je vais l'appeler."
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "pr4-d1",
          "prompt": "Où as-tu mal ?",
          "options": [
            {
              "label": "À la tête et à la gorge.",
              "correct": true
            },
            {
              "label": "À la patte.",
              "correct": false
            },
            {
              "label": "Au ventre.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "У меня болит …",
          "paragraphs": [
            "У меня болит + une seule chose : голова, горло, нога. Pour plusieurs choses : У меня болят уши (j'ai mal aux oreilles).",
            "Pour demander à un ami : Что у тебя болит? — Où as-tu mal ?"
          ],
          "examples": [
            {
              "ru": "У меня болит нога.",
              "en": "J'ai mal à la jambe."
            },
            {
              "ru": "Что у тебя болит?",
              "en": "Où as-tu mal ?"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "pr4-t1",
          "prompt": "Écoute. Où a-t-il mal ?",
          "skill": "listening",
          "audio": "У меня болит горло.",
          "options": [
            {
              "label": "À la gorge.",
              "correct": true
            },
            {
              "label": "À la tête.",
              "correct": false
            },
            {
              "label": "À la jambe.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "pr4-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "Мне плохо.",
              "right": "Je ne me sens pas bien."
            },
            {
              "left": "Отдыхай!",
              "right": "Repose-toi !"
            },
            {
              "left": "Выздоравливай!",
              "right": "Guéris vite !"
            }
          ]
        },
        {
          "kind": "fill",
          "id": "pr4-t3",
          "prompt": "Complète : « J'ai mal à la tête. »",
          "before": "У меня",
          "after": "голова.",
          "answer": "болит",
          "options": [
            "болит",
            "болят",
            "больно"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "pr4-t4",
          "prompt": "Quelle lettre manque ? (tête)",
          "before": "гол",
          "after": "ва",
          "answer": "о",
          "options": [
            "о",
            "а",
            "ы"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "pr4-t5",
          "prompt": "Как ты себя чувствуешь?",
          "model": "Мне плохо. У меня болит голова.",
          "modelEn": "Je ne me sens pas bien. J'ai mal à la tête.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Imagine que tu es malade. Dis à Tom comment tu te sens et où tu as mal."
        },
        {
          "kind": "choice",
          "id": "pr4-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Мне идёт?",
          "options": [
            {
              "label": "Тебе очень идёт!",
              "correct": true
            },
            {
              "label": "Мне плохо.",
              "correct": false
            },
            {
              "label": "Это мой размер.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "hot-water-bottle",
        "itemName": "Bouillotte",
        "itemNameRu": "Грелка",
        "ru": "Ура! Тёплая грелка!",
        "en": "Youpi ! Une bouillotte bien chaude !",
        "a11y": "Bien bordé dans son lit, Murzik serre une bouillotte toute douce dans une housse tricotée en forme de chat.",
        "image": "/art/prague/reward-4.jpg",
        "steps": [
          "Tom remplit une bouillotte.",
          "Elle a une housse tricotée en forme de chat.",
          "Murzik la serre contre lui.",
          "Elle est chaude, et il se sent un peu mieux."
        ],
        "bridge": "On frappe à la porte. C'est Anna Petrovna, avec sa sacoche de médecin."
      }
    },
    {
      "id": "a1-prague-5",
      "level": "A1",
      "cityId": "prague",
      "number": 5,
      "title": "Chez le médecin",
      "minutes": 6,
      "goals": [
        "Comprendre les questions du médecin",
        "Comprendre des consignes simples",
        "Remercier le médecin"
      ],
      "vocabNote": "Les médecins vouvoient, avec -те : Откройте! Пейте! Лежите! Tu as appris cette règle du -те à Rome.",
      "vocab": [
        {
          "id": "pr5-1",
          "ru": "Что у вас болит?",
          "en": "Où avez-vous mal ?",
          "a11y": "Anna Petrovna, une gentille médecin âgée à lunettes, est assise près du lit de Murzik.",
          "audioLabel": "Écouter Что у вас болит",
          "image": "/art/prague/5-1.jpg"
        },
        {
          "id": "pr5-2",
          "ru": "Откройте рот, пожалуйста.",
          "en": "Ouvrez la bouche, s'il vous plaît.",
          "a11y": "Murzik ouvre grand la bouche pendant que la médecin regarde avec une petite lampe.",
          "audioLabel": "Écouter Откройте рот, пожалуйста",
          "image": "/art/prague/5-2.jpg"
        },
        {
          "id": "pr5-3",
          "ru": "Это простуда.",
          "en": "C'est un rhume.",
          "a11y": "La médecin sourit calmement et referme sa sacoche.",
          "audioLabel": "Écouter Это простуда",
          "image": "/art/prague/5-3.jpg"
        },
        {
          "id": "pr5-4",
          "ru": "Пейте много чая.",
          "en": "Buvez beaucoup de thé.",
          "a11y": "Une grande théière et une tasse de thé au citron sur la table de chevet.",
          "audioLabel": "Écouter Пейте много чая",
          "image": "/art/prague/5-4.jpg"
        },
        {
          "id": "pr5-5",
          "ru": "Лежите три дня.",
          "en": "Restez au lit trois jours.",
          "a11y": "Murzik au lit, à côté d'un petit calendrier avec trois jours entourés.",
          "audioLabel": "Écouter Лежите три дня",
          "image": "/art/prague/5-5.jpg"
        },
        {
          "id": "pr5-6",
          "ru": "Вот рецепт на лекарство.",
          "en": "Voici une ordonnance pour le médicament.",
          "a11y": "La médecin tend à Tom une petite ordonnance en papier et montre un flacon de médicament.",
          "audioLabel": "Écouter Вот рецепт на лекарство",
          "image": "/art/prague/5-6b.jpg"
        },
        {
          "id": "pr5-7",
          "ru": "Мне нужно в больницу?",
          "en": "Je dois aller à l'hôpital ?",
          "a11y": "Murzik a l'air inquiet ; dans une bulle de pensée, un petit hôpital.",
          "audioLabel": "Écouter Мне нужно в больницу",
          "image": "/art/prague/5-7b.jpg"
        }
      ],
      "dialogue": {
        "title": "Docteur Anna Petrovna",
        "note": "С мёдом — avec du miel. Не волнуйтесь — ne vous inquiétez pas (poli).",
        "lines": [
          {
            "speaker": "doctor",
            "ru": "Здравствуйте! Что у вас болит?",
            "en": "Bonjour ! Où avez-vous mal ?"
          },
          {
            "speaker": "murzik",
            "ru": "Голова и горло.",
            "en": "À la tête et à la gorge."
          },
          {
            "speaker": "doctor",
            "ru": "Откройте рот, пожалуйста. Скажите «а-а-а».",
            "en": "Ouvrez la bouche, s'il vous plaît. Dites « a-a-a »."
          },
          {
            "speaker": "murzik",
            "ru": "А-а-а…",
            "en": "A-a-a…"
          },
          {
            "speaker": "doctor",
            "ru": "Не волнуйтесь, это простуда. Пейте много чая с мёдом. И лежите три дня.",
            "en": "Ne vous inquiétez pas, c'est un rhume. Buvez beaucoup de thé au miel. Et restez au lit trois jours."
          },
          {
            "speaker": "doctor",
            "ru": "Вот рецепт на лекарство.",
            "en": "Voici une ordonnance pour le médicament."
          },
          {
            "speaker": "murzik",
            "ru": "Спасибо, доктор! Мне нужно в больницу?",
            "en": "Merci, docteur ! Je dois aller à l'hôpital ?"
          },
          {
            "speaker": "doctor",
            "ru": "Нет, не нужно. Лежите дома.",
            "en": "Non, ce n'est pas la peine. Restez au lit à la maison."
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "pr5-d1",
          "prompt": "Qu'est-ce qu'a Murzik ?",
          "options": [
            {
              "label": "Il a un rhume.",
              "correct": true
            },
            {
              "label": "Il s'est cassé la patte.",
              "correct": false
            },
            {
              "label": "Rien du tout.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Les consignes polies avec -те",
          "paragraphs": [
            "À un ami : Открой! Пей! Лежи! À un inconnu ou à un patient : Откройте! Пейте! Лежите!",
            "Les médecins, les vendeurs et les professeurs te parlent généralement de cette façon polie."
          ],
          "examples": [
            {
              "ru": "Пейте чай.",
              "en": "Buvez du thé. (poli)"
            },
            {
              "ru": "Открой окно!",
              "en": "Ouvre la fenêtre ! (à un ami)"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "pr5-t1",
          "prompt": "Écoute. Que dit la médecin ?",
          "skill": "listening",
          "audio": "Лежите дома три дня.",
          "options": [
            {
              "label": "Restez à la maison trois jours.",
              "correct": true
            },
            {
              "label": "Buvez du thé trois fois par jour.",
              "correct": false
            },
            {
              "label": "Revenez dans trois jours.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "pr5-t2",
          "prompt": "Qu'est-ce que простуда ?",
          "skill": "words",
          "options": [
            {
              "label": "un rhume",
              "correct": true
            },
            {
              "label": "une ordonnance",
              "correct": false
            },
            {
              "label": "de la fièvre",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "pr5-t3",
          "prompt": "Une médecin parle à un patient. Que dit-elle ?",
          "skill": "grammar",
          "options": [
            {
              "label": "Откройте рот, пожалуйста.",
              "correct": true
            },
            {
              "label": "Открой рот, пожалуйста.",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "pr5-t4",
          "prompt": "Forme le mot « ordonnance ».",
          "word": "рецепт",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "pr5-t5",
          "prompt": "Что у вас болит?",
          "model": "У меня болит горло.",
          "modelEn": "J'ai mal à la gorge.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Tu es chez le médecin. Dis où tu as mal."
        },
        {
          "kind": "choice",
          "id": "pr5-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Как ты себя чувствуешь?",
          "options": [
            {
              "label": "Мне плохо.",
              "correct": true
            },
            {
              "label": "Беру!",
              "correct": false
            },
            {
              "label": "Это мой размер.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "honey",
        "itemName": "Pot de miel",
        "itemNameRu": "Мёд",
        "ru": "Ура! Банка мёда!",
        "en": "Youpi ! Un pot de miel !",
        "a11y": "Un grand pot de miel doré, couvert d'un tissu noué avec une ficelle, sur la table à côté d'une tasse de thé.",
        "image": "/art/prague/reward-5.jpg",
        "steps": [
          "Anna Petrovna revient le soir.",
          "Elle apporte un grand pot de miel.",
          "« De ma datcha », dit-elle.",
          "Le thé au miel, c'est le meilleur des remèdes."
        ],
        "bridge": "Tom doit aller à la pharmacie avec l'ordonnance."
      }
    },
    {
      "id": "a1-prague-6",
      "level": "A1",
      "cityId": "prague",
      "number": 6,
      "title": "À la pharmacie",
      "minutes": 6,
      "goals": [
        "Demander quelque chose à la pharmacie",
        "Comprendre combien de fois prendre un médicament",
        "Dire « À tes souhaits ! »"
      ],
      "vocabNote": "Раз veut dire « fois » : один раз — une fois. Il change comme час : два раза, пять раз.",
      "vocab": [
        {
          "id": "pr6-1",
          "ru": "Где аптека?",
          "en": "Où est la pharmacie ?",
          "a11y": "Dans une rue pluvieuse de Prague, Tom regarde autour de lui, une ordonnance à la main.",
          "audioLabel": "Écouter Где аптека",
          "image": "/art/prague/6-1.jpg"
        },
        {
          "id": "pr6-2",
          "ru": "У вас есть что-нибудь от горла?",
          "en": "Vous avez quelque chose pour le mal de gorge ?",
          "a11y": "Au comptoir, Tom demande au pharmacien en montrant sa gorge.",
          "audioLabel": "Écouter У вас есть что-нибудь от горла",
          "image": "/art/prague/6-2.jpg"
        },
        {
          "id": "pr6-3",
          "ru": "таблетки",
          "en": "comprimés",
          "a11y": "Une petite boîte de comprimés sur le comptoir de la pharmacie.",
          "audioLabel": "Écouter таблетки",
          "image": "/art/prague/6-3.jpg"
        },
        {
          "id": "pr6-4",
          "ru": "Сколько раз в день?",
          "en": "Combien de fois par jour ?",
          "a11y": "Tom tient la boîte de comprimés et regarde le pharmacien d'un air interrogateur.",
          "audioLabel": "Écouter Сколько раз в день",
          "image": "/art/prague/6-4.jpg"
        },
        {
          "id": "pr6-5",
          "ru": "Три раза в день.",
          "en": "Trois fois par jour.",
          "a11y": "Trois petits soleils : matin, midi et soir, chacun avec un comprimé.",
          "audioLabel": "Écouter Три раза в день",
          "image": "/art/prague/6-5.jpg"
        },
        {
          "id": "pr6-6",
          "ru": "после еды",
          "en": "après les repas",
          "a11y": "Une assiette vide, puis une flèche, puis un comprimé avec un verre d'eau.",
          "audioLabel": "Écouter после еды",
          "image": "/art/prague/6-6.jpg"
        },
        {
          "id": "pr6-7",
          "ru": "Будьте здоровы!",
          "en": "À vos souhaits ! / Portez-vous bien !",
          "a11y": "Tom éternue ; le pharmacien sourit gentiment.",
          "audioLabel": "Écouter Будьте здоровы",
          "image": "/art/prague/6-7.jpg"
        }
      ],
      "dialogue": {
        "title": "La pharmacie",
        "note": "Апчхи! est le bruit d'un éternuement, comme « Atchoum ! ». Для друга — pour un ami.",
        "lines": [
          {
            "speaker": "pharmacist",
            "ru": "Здравствуйте! Что вам нужно?",
            "en": "Bonjour ! Que vous faut-il ?"
          },
          {
            "speaker": "tom",
            "ru": "Вот рецепт. И у вас есть что-нибудь от горла?",
            "en": "Voici l'ordonnance. Et vous avez quelque chose pour le mal de gorge ?"
          },
          {
            "speaker": "pharmacist",
            "ru": "Да. Вот таблетки.",
            "en": "Oui. Voici des comprimés."
          },
          {
            "speaker": "tom",
            "ru": "Сколько раз в день?",
            "en": "Combien de fois par jour ?"
          },
          {
            "speaker": "pharmacist",
            "ru": "Три раза в день, после еды.",
            "en": "Trois fois par jour, après les repas."
          },
          {
            "speaker": "tom",
            "ru": "Спасибо! Апчхи!",
            "en": "Merci ! Atchoum !"
          },
          {
            "speaker": "pharmacist",
            "ru": "Будьте здоровы!",
            "en": "À vos souhaits !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "pr6-d1",
          "prompt": "À quelle fréquence Murzik doit-il prendre les comprimés ?",
          "options": [
            {
              "label": "Trois fois par jour.",
              "correct": true
            },
            {
              "label": "Une fois par jour.",
              "correct": false
            },
            {
              "label": "Deux fois par jour.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Раз, раза, раз",
          "paragraphs": [
            "Ça marche comme час : один раз (une fois), два, три, четыре раза, пять раз.",
            "В день veut dire « par jour » : три раза в день — trois fois par jour."
          ],
          "examples": [
            {
              "ru": "Один раз в день.",
              "en": "Une fois par jour."
            },
            {
              "ru": "Два раза в день.",
              "en": "Deux fois par jour."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "pr6-t1",
          "prompt": "Écoute. Combien de fois ?",
          "skill": "listening",
          "audio": "Два раза в день, после еды.",
          "options": [
            {
              "label": "Deux fois par jour, après les repas.",
              "correct": true
            },
            {
              "label": "Trois fois par jour, avant les repas.",
              "correct": false
            },
            {
              "label": "Une fois par jour, après les repas.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "pr6-t2",
          "prompt": "Quelqu'un éternue. Que dis-tu ?",
          "skill": "words",
          "options": [
            {
              "label": "Будьте здоровы!",
              "correct": true
            },
            {
              "label": "Выздоравливай!",
              "correct": false
            },
            {
              "label": "После еды.",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "pr6-t3",
          "prompt": "Complète : « trois fois par jour ».",
          "before": "три",
          "after": "в день",
          "answer": "раза",
          "options": [
            "раза",
            "раз",
            "разы"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "pr6-t4",
          "prompt": "Quelle lettre manque ? (pharmacie)",
          "before": "апт",
          "after": "ка",
          "answer": "е",
          "options": [
            "е",
            "и",
            "а"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "pr6-t5",
          "prompt": "Что вам нужно?",
          "model": "У вас есть что-нибудь от горла?",
          "modelEn": "Vous avez quelque chose pour le mal de gorge ?",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Tu es à la pharmacie avec un mal de gorge. Demande quelque chose."
        },
        {
          "kind": "choice",
          "id": "pr6-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Что у вас болит?",
          "options": [
            {
              "label": "У меня болит голова.",
              "correct": true
            },
            {
              "label": "Три раза в день.",
              "correct": false
            },
            {
              "label": "Вот рецепт.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "night-light",
        "itemName": "Veilleuse",
        "itemNameRu": "Ночник",
        "ru": "Ура! Ночник в виде луны!",
        "en": "Youpi ! Une veilleuse en forme de lune !",
        "a11y": "Une petite veilleuse ronde en forme de lune brille doucement près du lit de Murzik dans la chambre sombre.",
        "image": "/art/prague/reward-6.jpg",
        "steps": [
          "À côté de la pharmacie, il y a une toute petite boutique.",
          "Tom voit une veilleuse en forme de lune.",
          "Il l'achète pour Murzik.",
          "Maintenant, la chambre brille doucement la nuit."
        ],
        "bridge": "Trois jours plus tard, Murzik ouvre les yeux. Il se sent… beaucoup mieux !"
      }
    },
    {
      "id": "a1-prague-7",
      "level": "A1",
      "cityId": "prague",
      "number": 7,
      "title": "Beaucoup mieux !",
      "minutes": 7,
      "goals": [
        "Dire que tu te sens mieux",
        "Remercier quelqu'un de s'être occupé de toi",
        "Dire à un ami de prendre soin de lui"
      ],
      "vocabNote": "Мне лучше veut dire « Je me sens mieux » — ça marche comme Мне холодно et Мне скучно.",
      "vocab": [
        {
          "id": "pr7-1",
          "ru": "Мне уже лучше!",
          "en": "Je me sens déjà mieux !",
          "a11y": "Murzik s'assoit dans son lit et s'étire avec un grand sourire.",
          "audioLabel": "Écouter Мне уже лучше",
          "image": "/art/prague/7-1.jpg"
        },
        {
          "id": "pr7-2",
          "ru": "Как хорошо!",
          "en": "Quelle bonne nouvelle !",
          "a11y": "Tom tape dans ses mains, soulagé.",
          "audioLabel": "Écouter Как хорошо",
          "image": "/art/prague/7-2.jpg"
        },
        {
          "id": "pr7-3",
          "ru": "Я снова на ногах!",
          "en": "Je suis de nouveau sur pied !",
          "a11y": "Murzik saute du lit et se tient fièrement sur ses deux pattes.",
          "audioLabel": "Écouter Я снова на ногах",
          "image": "/art/prague/7-3.jpg"
        },
        {
          "id": "pr7-4",
          "ru": "Спасибо за заботу!",
          "en": "Merci de t'être occupé de moi !",
          "a11y": "Murzik serre Anna Petrovna dans ses bras à sa porte.",
          "audioLabel": "Écouter Спасибо за заботу",
          "image": "/art/prague/7-4.jpg"
        },
        {
          "id": "pr7-5",
          "ru": "Береги себя!",
          "en": "Prends soin de toi !",
          "a11y": "Anna Petrovna resserre un peu l'écharpe de Murzik autour de son cou.",
          "audioLabel": "Écouter Береги себя",
          "image": "/art/prague/7-5.jpg"
        },
        {
          "id": "pr7-6",
          "ru": "Не болей!",
          "en": "Ne retombe pas malade !",
          "a11y": "Anna Petrovna agite gentiment le doigt vers Murzik en souriant.",
          "audioLabel": "Écouter Не болей",
          "image": "/art/prague/7-6.jpg"
        },
        {
          "id": "pr7-7",
          "ru": "Ты как?",
          "en": "Ça va ? (familier)",
          "a11y": "Tom passe la tête par la porte et demande avec un grand sourire.",
          "audioLabel": "Écouter Ты как",
          "image": "/art/prague/7-7.jpg"
        }
      ],
      "dialogue": {
        "title": "De nouveau sur pied",
        "note": "Подарок — un cadeau. На память — en souvenir.",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Мурзик, ты как?",
            "en": "Murzik, ça va ?"
          },
          {
            "speaker": "murzik",
            "ru": "Мне уже лучше! Я снова на ногах!",
            "en": "Je me sens déjà mieux ! Je suis de nouveau sur pied !"
          },
          {
            "speaker": "tom",
            "ru": "Как хорошо!",
            "en": "Quelle bonne nouvelle !"
          },
          {
            "speaker": "murzik",
            "ru": "Анна Петровна, спасибо за заботу!",
            "en": "Anna Petrovna, merci de vous être occupée de moi !"
          },
          {
            "speaker": "doctor",
            "ru": "Пожалуйста. Береги себя! Не болей!",
            "en": "Je t'en prie. Prends soin de toi ! Ne retombe pas malade !"
          },
          {
            "speaker": "doctor",
            "ru": "А это тебе — подарок на память.",
            "en": "Et voici pour toi — un cadeau en souvenir."
          },
          {
            "speaker": "murzik",
            "ru": "Ой! Спасибо большое!",
            "en": "Oh ! Merci beaucoup !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "pr7-d1",
          "prompt": "Comment Murzik se sent-il maintenant ?",
          "options": [
            {
              "label": "Beaucoup mieux.",
              "correct": true
            },
            {
              "label": "Toujours malade.",
              "correct": false
            },
            {
              "label": "Très fatigué.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Мне + mot : comment je me sens",
          "paragraphs": [
            "Le russe dit souvent comment on se sent avec мне : Мне лучше (je me sens mieux), Мне плохо (je ne me sens pas bien), Мне холодно, Мне скучно.",
            "Pour demander à un ami : Тебе лучше? — Tu te sens mieux ?"
          ],
          "examples": [
            {
              "ru": "Тебе лучше?",
              "en": "Tu te sens mieux ?"
            },
            {
              "ru": "Мне уже хорошо.",
              "en": "Je vais bien maintenant."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "pr7-t1",
          "prompt": "Écoute. Qu'achètent-ils, et de quelle couleur ?",
          "skill": "listening",
          "help": "Voici ton test d'écoute de Prague.",
          "audio": "Мне холодно. Мне нужна шапка. Вот эта, синяя. Можно примерить? Ой, слишком большая.",
          "options": [
            {
              "label": "Un bonnet bleu.",
              "correct": true
            },
            {
              "label": "Une veste bleue.",
              "correct": false
            },
            {
              "label": "Un bonnet vert.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "pr7-t2",
          "prompt": "Un ami sort dans le froid après avoir été malade. Que lui dis-tu ?",
          "skill": "words",
          "options": [
            {
              "label": "Береги себя!",
              "correct": true
            },
            {
              "label": "Будьте здоровы!",
              "correct": false
            },
            {
              "label": "Беру!",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "pr7-t3",
          "prompt": "Complète : « Tu te sens mieux ? »",
          "before": "",
          "after": "лучше?",
          "answer": "Тебе",
          "options": [
            "Тебе",
            "Ты",
            "Твой"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "pr7-t4",
          "prompt": "Forme le mot « médecin ».",
          "word": "врач",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "pr7-t5",
          "prompt": "Ты как?",
          "model": "Мне уже лучше! Спасибо за заботу!",
          "modelEn": "Je me sens déjà mieux ! Merci de t'être occupé de moi !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Tu as été malade, et maintenant tu vas mieux. Réponds à ton ami."
        },
        {
          "kind": "choice",
          "id": "pr7-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Сколько раз в день?",
          "options": [
            {
              "label": "Три раза в день.",
              "correct": true
            },
            {
              "label": "Ряд пять.",
              "correct": false
            },
            {
              "label": "Каждый день.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "pr7-t7",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Тебе тепло?",
          "options": [
            {
              "label": "Да, мне тепло.",
              "correct": true
            },
            {
              "label": "Да, мне скучно.",
              "correct": false
            },
            {
              "label": "Да, у меня температура.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "puppet",
        "itemName": "Marionnette de chat",
        "itemNameRu": "Марионетка",
        "ru": "Ура! Кот-марионетка!",
        "en": "Youpi ! Une marionnette de chat !",
        "a11y": "Murzik tient une marionnette à fils en bois : un chat roux avec une petite écharpe — tout son portrait. Il la fait danser.",
        "image": "/art/prague/reward-7.jpg",
        "steps": [
          "Le cadeau d'Anna Petrovna est une marionnette en bois.",
          "Prague est célèbre pour ses marionnettes.",
          "La marionnette est un chat roux avec une petite écharpe.",
          "Elle ressemble trait pour trait à Murzik !"
        ],
        "bridge": "Murzik est de nouveau en bonne santé, et la valise est prête. Tom a une nouvelle : un e-mail d'un magazine…"
      }
    }
  ],
  "story": {
    "home": {
      "name": "La chambre de Murzik à Prague",
      "nameRu": "Комната в Праге",
      "image": "/art/prague/home.jpg",
      "a11y": "Une petite chambre vide dans une vieille maison de Prague. Par la fenêtre, plein de toits rouges et de clochers."
    },
    "keepsakeId": "puppet",
    "welcomeRu": "Привет, Прага!",
    "welcomeEn": "Bonjour, Prague !",
    "welcomeImage": "/art/prague/arrival.jpg",
    "welcomeA11y": "Murzik et Tom arrivent à Prague par une froide journée d'automne venteuse : le vieux pont Charles en pierre, des tours et des toits rouges. Murzik grelotte.",
    "departureImage": "/art/prague/departure.jpg",
    "departureA11y": "Anna Petrovna dit au revoir à Murzik et Tom à la gare de Prague. Murzik porte son nouveau bonnet bleu et tient la marionnette de chat.",
    "finale": [
      {
        "image": "/art/prague/finale-1.jpg",
        "a11y": "Murzik est dans sa chambre douillette à Prague : un portemanteau, des aquarelles sur le rebord de la fenêtre, une armoire peinte, une bouillotte sur le lit, un pot de miel et une veilleuse en forme de lune. Il tient la marionnette de chat roux.",
        "lines": [
          {
            "en": "La chambre pragoise de Murzik est chaude et douillette. Et Murzik est de nouveau en bonne santé !"
          },
          {
            "en": "Il emballe son objet préféré pour l'emporter : la marionnette de chat."
          }
        ]
      },
      {
        "image": "/art/prague/finale-2.jpg",
        "a11y": "Murzik et Tom font la fête sur le pont Charles dans leurs nouveaux vêtements chauds. Loin derrière eux, parmi les passants sur le pont, un gentil vieux chat blanc en chapeau gris sourit.",
        "lines": [
          {
            "ru": "Прага завершена!",
            "en": "Prague, c'est fait !"
          },
          {
            "en": "7 / 7 leçons"
          },
          {
            "ru": "Уже восемь городов!",
            "en": "Déjà huit villes !"
          }
        ]
      },
      {
        "image": "/art/prague/tom-email.jpg",
        "a11y": "Tom lit un e-mail sur son téléphone avec un immense sourire étonné. Murzik saute pour voir l'écran.",
        "lines": [
          {
            "en": "Tom relit l'e-mail encore et encore. Un magazine de voyage a vu ses photos !"
          },
          {
            "ru": "Том, что там?",
            "en": "Tom, qu'est-ce que c'est ?"
          },
          {
            "en": "« Ils veulent me rencontrer, dit Tom. Dans une ville au bord de l'océan. »"
          }
        ]
      },
      {
        "image": "/art/prague/departure.jpg",
        "a11y": "Anna Petrovna dit au revoir à Murzik et Tom à la gare de Prague. Murzik porte son nouveau bonnet bleu et tient la marionnette de chat.",
        "lines": [
          {
            "ru": "До свидания, Прага! До свидания, Анна Петровна!",
            "en": "Au revoir, Prague ! Au revoir, Anna Petrovna !"
          },
          {
            "ru": "Следующая остановка: Лиссабон!",
            "en": "Prochain arrêt : Lisbonne !"
          }
        ]
      },
      {
        "image": "/art/prague/finale-5.jpg",
        "a11y": "Un petit avion vole vers le sud-ouest au-dessus des nuages, de Prague froide et grise vers une côte ensoleillée au bord de l'océan.",
        "lines": [
          {
            "ru": "Прага → Лиссабон",
            "en": "Prague → Lisbonne"
          }
        ]
      },
      {
        "image": "/art/lisbon/arrival.jpg",
        "a11y": "Murzik et Tom arrivent à Lisbonne : un tramway jaune grimpe une rue en pente bordée de maisons couvertes d'azulejos colorés, avec l'océan qui brille en contrebas.",
        "lines": [
          {
            "ru": "Привет, Лиссабон!",
            "en": "Bonjour, Lisbonne !"
          },
          {
            "ru": "Новый город. Новые слова. Новые приключения.",
            "en": "Une nouvelle ville. De nouveaux mots. De nouvelles aventures."
          }
        ]
      }
    ]
  }
};
