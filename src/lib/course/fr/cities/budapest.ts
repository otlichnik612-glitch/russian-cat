import type { CityPlan } from "../../types";

/** Budapest in the French version of the Russian course (`ru` = Russian, `en` = French). Generated from the English version with French texts. */
export const budapestFr: Pick<CityPlan, "lessons" | "story"> = {
  "lessons": [
    {
      "id": "a1-budapest-1",
      "level": "A1",
      "cityId": "budapest",
      "number": 1,
      "title": "Qu'as-tu fait hier ?",
      "minutes": 6,
      "goals": [
        "Demander ce que quelqu'un a fait",
        "Dire ce que tu as fait hier",
        "Utiliser le passé : homme -л, femme -ла"
      ],
      "vocabNote": "Au passé, « je » change selon qui tu es : un homme dit я гулял, une femme dit я гуляла. Un peu comme « je suis allé / allée » en français. Choisis ta forme !",
      "vocab": [
        {
          "id": "bu1-1",
          "ru": "Что ты делал вчера?",
          "en": "Qu'as-tu fait hier ? (à un homme)",
          "a11y": "Dora, une fillette d'une dizaine d'années avec deux tresses, pose la question à Murzik avec de grands yeux curieux.",
          "audioLabel": "Écouter Что ты делал вчера",
          "image": "/art/budapest/1-1.jpg"
        },
        {
          "id": "bu1-2",
          "ru": "Я гулял. / Я гуляла.",
          "en": "Je me suis promené. Je me suis promenée.",
          "a11y": "Murzik se promène au soleil sur les quais du Danube.",
          "audioLabel": "Écouter Я гулял. Я гуляла",
          "image": "/art/budapest/1-2.jpg"
        },
        {
          "id": "bu1-3",
          "ru": "Я читал. / Я читала.",
          "en": "J'ai lu. (homme / femme)",
          "a11y": "Murzik lit un livre sur un banc au bord du fleuve.",
          "audioLabel": "Écouter Я читал. Я читала",
          "image": "/art/budapest/1-3.jpg"
        },
        {
          "id": "bu1-4",
          "ru": "Я работал. / Я работала.",
          "en": "J'ai travaillé. (homme / femme)",
          "a11y": "Tom travaille sur un ordinateur portable dans un café, son appareil photo à côté de lui.",
          "audioLabel": "Écouter Я работал. Я работала",
          "image": "/art/budapest/1-4.jpg"
        },
        {
          "id": "bu1-5",
          "ru": "весь день",
          "en": "toute la journée",
          "a11y": "Un soleil se lève, traverse le ciel et se couche — un arc complet.",
          "audioLabel": "Écouter весь день",
          "image": "/art/budapest/1-5.jpg"
        },
        {
          "id": "bu1-6",
          "ru": "Я весь день отдыхал.",
          "en": "Je me suis reposé toute la journée. (homme)",
          "a11y": "Murzik est allongé dans un fauteuil-hamac, les yeux fermés, du matin au soir.",
          "audioLabel": "Écouter Я весь день отдыхал",
          "image": "/art/budapest/1-6.jpg"
        },
        {
          "id": "bu1-7",
          "ru": "Сначала… потом…",
          "en": "D'abord… ensuite…",
          "a11y": "Deux petites images reliées par une flèche : d'abord une tasse de café, ensuite une promenade.",
          "audioLabel": "Écouter Сначала… потом",
          "image": "/art/budapest/1-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Les questions de Dora",
        "note": "Dora est une fille, donc elle dit я гуляла. Murzik et Tom sont des garçons : я гулял, я работал.",
        "lines": [
          {
            "speaker": "dora",
            "ru": "Мурзик, что ты делал вчера?",
            "en": "Murzik, qu'as-tu fait hier ?"
          },
          {
            "speaker": "murzik",
            "ru": "Вчера? Сначала я гулял, потом читал.",
            "en": "Hier ? D'abord, je me suis promené, ensuite j'ai lu."
          },
          {
            "speaker": "dora",
            "ru": "А Том?",
            "en": "Et Tom ?"
          },
          {
            "speaker": "tom",
            "ru": "Я работал. Весь день!",
            "en": "J'ai travaillé. Toute la journée !"
          },
          {
            "speaker": "murzik",
            "ru": "А ты, Дора? Что ты делала?",
            "en": "Et toi, Dora ? Qu'as-tu fait ?"
          },
          {
            "speaker": "dora",
            "ru": "Я? Я гуляла с собакой и рисовала кота. Тебя!",
            "en": "Moi ? J'ai promené le chien et j'ai dessiné un chat. Toi !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "bu1-d1",
          "prompt": "Qu'a fait Tom hier ?",
          "options": [
            {
              "label": "Il a travaillé toute la journée.",
              "correct": true
            },
            {
              "label": "Il s'est promené.",
              "correct": false
            },
            {
              "label": "Il a dessiné un chat.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Le passé : -л (homme), -ла (femme)",
          "paragraphs": [
            "Prends le verbe, enlève -ть, ajoute -л pour un homme ou -ла pour une femme : гулять → я гулял / я гуляла ; читать → я читал / я читала.",
            "Pour мы, вы et они, c'est -ли pour tout le monde : мы гуляли (tu le connais depuis Berlin)."
          ],
          "examples": [
            {
              "ru": "Он читал, а она работала.",
              "en": "Il lisait, et elle travaillait."
            },
            {
              "ru": "Что ты делала вчера?",
              "en": "Qu'as-tu fait hier ? (à une femme)"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "bu1-t1",
          "prompt": "Écoute. Qui parle — un homme ou une femme ?",
          "skill": "listening",
          "audio": "Вчера я весь день работала.",
          "options": [
            {
              "label": "Une femme (работала).",
              "correct": true
            },
            {
              "label": "Un homme.",
              "correct": false
            },
            {
              "label": "Plusieurs personnes.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "bu1-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "весь день",
              "right": "toute la journée"
            },
            {
              "left": "сначала",
              "right": "d'abord"
            },
            {
              "left": "потом",
              "right": "ensuite"
            }
          ]
        },
        {
          "kind": "choice",
          "id": "bu1-t3",
          "prompt": "Anna dit : « Hier, j'ai lu. » Laquelle est juste ?",
          "skill": "grammar",
          "options": [
            {
              "label": "Вчера я читала.",
              "correct": true
            },
            {
              "label": "Вчера я читал.",
              "correct": false
            },
            {
              "label": "Вчера я читали.",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "bu1-t4",
          "prompt": "Forme le mot « hier » — tu le connais depuis Berlin.",
          "word": "вчера",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "bu1-t5",
          "prompt": "Что ты делал вчера?",
          "model": "Вчера я работал, а потом отдыхал.",
          "modelEn": "Hier, j'ai travaillé, et ensuite je me suis reposé.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Dis ce que tu as vraiment fait hier. Une femme dit работала, отдыхала."
        },
        {
          "kind": "choice",
          "id": "bu1-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Где находится банк?",
          "options": [
            {
              "label": "Рядом с почтой.",
              "correct": true
            },
            {
              "label": "Я весь день отдыхал.",
              "correct": false
            },
            {
              "label": "Сначала я гулял.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "paprika",
        "itemName": "Guirlande de paprika",
        "itemNameRu": "Паприка",
        "ru": "Ура! Связка красной паприки!",
        "en": "Youpi ! Une guirlande de piments rouges !",
        "a11y": "Une guirlande de piments rouges séchés est accrochée près de la fenêtre d'une vieille chambre avec vue sur le Danube.",
        "image": "/art/budapest/reward-1.jpg",
        "steps": [
          "Leur chambre est dans une vieille maison d'hôtes au bord du Danube.",
          "Elle appartient à la grand-mère de Dora.",
          "Près de la fenêtre est accrochée une guirlande de piments rouges.",
          "« Ça porte bonheur », dit Dora."
        ],
        "bridge": "Dora voit la carte avec les punaises rouges. « Vous êtes allés dans tant de villes ! Où êtes-vous allés ? »"
      }
    },
    {
      "id": "a1-budapest-2",
      "level": "A1",
      "cityId": "budapest",
      "number": 2,
      "title": "Où es-tu allé ?",
      "minutes": 6,
      "goals": [
        "Demander où quelqu'un est allé",
        "Dire où tu es allé",
        "Dire récemment, il y a longtemps, l'année dernière"
      ],
      "vocabNote": "Я был в… / Я была в… veut dire « Je suis allé(e) à… » (mot à mot « j'étais à… »). On utilise в + la ville en -е, comme à Varsovie : в Париже, в Риме.",
      "vocab": [
        {
          "id": "bu2-1",
          "ru": "Где ты был?",
          "en": "Où es-tu allé ? (à un homme)",
          "a11y": "Dora montre la carte du monde pleine de punaises rouges.",
          "audioLabel": "Écouter Где ты был",
          "image": "/art/budapest/2-1.jpg"
        },
        {
          "id": "bu2-2",
          "ru": "Я был в Париже. / Я была в Париже.",
          "en": "Je suis allé à Paris. Je suis allée à Paris.",
          "a11y": "Un petit dessin de la tour Eiffel dans un cadre rond.",
          "audioLabel": "Écouter Я был в Париже. Я была в Париже",
          "image": "/art/budapest/2-2.jpg"
        },
        {
          "id": "bu2-3",
          "ru": "недавно",
          "en": "récemment",
          "a11y": "Une page de calendrier d'il y a quelques jours, avec une petite étoile.",
          "audioLabel": "Écouter недавно",
          "image": "/art/budapest/2-3.jpg"
        },
        {
          "id": "bu2-4",
          "ru": "давно",
          "en": "il y a longtemps",
          "a11y": "Une vieille page de calendrier délavée, avec des toiles d'araignée.",
          "audioLabel": "Écouter давно",
          "image": "/art/budapest/2-4.jpg"
        },
        {
          "id": "bu2-5",
          "ru": "в прошлом году",
          "en": "l'année dernière",
          "a11y": "Deux calendriers : celui de l'année dernière en gris, celui de cette année en couleur ; une flèche vers l'arrière.",
          "audioLabel": "Écouter в прошлом году",
          "image": "/art/budapest/2-5.jpg"
        },
        {
          "id": "bu2-6",
          "ru": "Ты был в Москве?",
          "en": "Tu es déjà allé à Moscou ? (à un homme)",
          "a11y": "Dora montre un petit dessin des coupoles colorées de Moscou.",
          "audioLabel": "Écouter Ты был в Москве",
          "image": "/art/budapest/2-6.jpg"
        },
        {
          "id": "bu2-7",
          "ru": "Я никогда не был в…",
          "en": "Je ne suis jamais allé à… (homme)",
          "a11y": "Murzik secoue la tête et montre un endroit vide sur la carte.",
          "audioLabel": "Écouter Я никогда не был в",
          "image": "/art/budapest/2-7.jpg"
        }
      ],
      "dialogue": {
        "title": "La carte aux punaises",
        "note": "Murzik vient de Moscou, alors bien sûr qu'il y est allé ! Конечно — bien sûr.",
        "lines": [
          {
            "speaker": "dora",
            "ru": "Мурзик, где ты был?",
            "en": "Murzik, où es-tu allé ?"
          },
          {
            "speaker": "murzik",
            "ru": "Я был в Париже, в Лондоне, в Мадриде, в Риме…",
            "en": "Je suis allé à Paris, à Londres, à Madrid, à Rome…"
          },
          {
            "speaker": "dora",
            "ru": "Ого! А когда ты был в Париже?",
            "en": "Ouah ! Et quand es-tu allé à Paris ?"
          },
          {
            "speaker": "murzik",
            "ru": "Давно. А в Варшаве — недавно.",
            "en": "Il y a longtemps. Et à Varsovie — récemment."
          },
          {
            "speaker": "dora",
            "ru": "А ты был в Москве?",
            "en": "Et tu es déjà allé à Moscou ?"
          },
          {
            "speaker": "murzik",
            "ru": "Конечно! Я из Москвы. А ты?",
            "en": "Bien sûr ! Je viens de Moscou. Et toi ?"
          },
          {
            "speaker": "dora",
            "ru": "Я никогда не была в Москве. Только в Вене, в прошлом году.",
            "en": "Je ne suis jamais allée à Moscou. Seulement à Vienne, l'année dernière."
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "bu2-d1",
          "prompt": "Où Dora est-elle allée ?",
          "options": [
            {
              "label": "À Vienne, l'année dernière.",
              "correct": true
            },
            {
              "label": "À Moscou.",
              "correct": false
            },
            {
              "label": "À Paris et à Londres.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Был / была в …",
          "paragraphs": [
            "Я был в Риме (homme). Я была в Риме (femme). Мы были в Риме (tout le monde).",
            "Jamais : Я никогда не был в… / Я никогда не была в… — souviens-toi du не à Vienne."
          ],
          "examples": [
            {
              "ru": "Ты была в Лондоне?",
              "en": "Tu es déjà allée à Londres ? (à une femme)"
            },
            {
              "ru": "Я никогда не была в Риме.",
              "en": "Je ne suis jamais allée à Rome. (femme)"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "bu2-t1",
          "prompt": "Écoute. Où cette personne est-elle allée ?",
          "skill": "listening",
          "audio": "Я была в Праге в прошлом году.",
          "options": [
            {
              "label": "À Prague, l'année dernière.",
              "correct": true
            },
            {
              "label": "À Prague, récemment.",
              "correct": false
            },
            {
              "label": "À Vienne, l'année dernière.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "bu2-t2",
          "prompt": "Que veut dire недавно ?",
          "skill": "words",
          "options": [
            {
              "label": "récemment",
              "correct": true
            },
            {
              "label": "il y a longtemps",
              "correct": false
            },
            {
              "label": "jamais",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "bu2-t3",
          "prompt": "Complète (une femme parle) : « Je suis allée à Paris. »",
          "before": "Я",
          "after": "в Париже.",
          "answer": "была",
          "options": [
            "была",
            "был",
            "были"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "bu2-t4",
          "prompt": "Quelle lettre manque ? (récemment)",
          "before": "н",
          "after": "давно",
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
          "id": "bu2-t5",
          "prompt": "Где ты был?",
          "model": "Я был в Лондоне и в Риме.",
          "modelEn": "Je suis allé à Londres et à Rome.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Dis dans quelles villes tu es vraiment allé. Une femme dit Я была в…"
        },
        {
          "kind": "choice",
          "id": "bu2-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Что ты делал вчера?",
          "options": [
            {
              "label": "Я весь день работал.",
              "correct": true
            },
            {
              "label": "Я был в Париже.",
              "correct": false
            },
            {
              "label": "Давно.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "tablecloth",
        "itemName": "Nappe brodée",
        "itemNameRu": "Скатерть",
        "ru": "Ура! Вышитая скатерть!",
        "en": "Youpi ! Une nappe brodée !",
        "a11y": "Une nappe blanche brodée de fleurs rouges, bleues et vertes vives recouvre une petite table ronde dans la chambre de Murzik.",
        "image": "/art/budapest/reward-2.jpg",
        "steps": [
          "La grand-mère de Dora apporte une nappe.",
          "Elle a brodé les fleurs elle-même.",
          "Rouges, bleues et vertes.",
          "La petite table ressemble maintenant à un jardin."
        ],
        "bridge": "Le soir, Dora s'assoit par terre. « Maintenant, raconte-moi toute l'histoire. Depuis le tout début ! »"
      }
    },
    {
      "id": "a1-budapest-3",
      "level": "A1",
      "cityId": "budapest",
      "number": 3,
      "title": "Comment tout a commencé",
      "minutes": 6,
      "goals": [
        "Raconter une histoire dans l'ordre",
        "Utiliser les mots du récit : soudain, à la fin",
        "Demander « Que s'est-il passé ? »"
      ],
      "vocabNote": "Les mots du récit aident à suivre : сначала (d'abord), потом (ensuite), вдруг (soudain), в конце (à la fin).",
      "vocab": [
        {
          "id": "bu3-1",
          "ru": "Что случилось?",
          "en": "Que s'est-il passé ?",
          "a11y": "Dora est assise par terre, les genoux serrés dans ses bras, penchée pour écouter.",
          "audioLabel": "Écouter Что случилось",
          "image": "/art/budapest/3-1.jpg"
        },
        {
          "id": "bu3-2",
          "ru": "Всё началось в Париже.",
          "en": "Tout a commencé à Paris.",
          "a11y": "Une image douce et rêveuse de l'appartement parisien de Murzik, avec la tour Eiffel par la fenêtre.",
          "audioLabel": "Écouter Всё началось в Париже",
          "image": "/art/budapest/3-2.jpg"
        },
        {
          "id": "bu3-3",
          "ru": "Я нашёл открытку. / Я нашла открытку.",
          "en": "J'ai trouvé une carte postale. (homme / femme)",
          "a11y": "Murzik ouvre un tiroir de bureau et trouve une vieille carte postale.",
          "audioLabel": "Écouter Я нашёл открытку. Я нашла открытку",
          "image": "/art/budapest/3-3.jpg"
        },
        {
          "id": "bu3-4",
          "ru": "вдруг",
          "en": "soudain",
          "a11y": "Un grand « ! » de surprise au-dessus de la tête de Murzik.",
          "audioLabel": "Écouter вдруг",
          "image": "/art/budapest/3-4.jpg"
        },
        {
          "id": "bu3-5",
          "ru": "в конце",
          "en": "à la fin",
          "a11y": "La dernière page d'un livre avec une petite étoile en bas.",
          "audioLabel": "Écouter в конце",
          "image": "/art/budapest/3-5.jpg"
        },
        {
          "id": "bu3-6",
          "ru": "Мы решили поехать.",
          "en": "Nous avons décidé de partir.",
          "a11y": "Murzik et Tom se serrent fermement la main devant une valise.",
          "audioLabel": "Écouter Мы решили поехать",
          "image": "/art/budapest/3-6.jpg"
        },
        {
          "id": "bu3-7",
          "ru": "Вот так!",
          "en": "Voilà comment ça s'est passé !",
          "a11y": "Murzik ouvre les pattes comme pour finir une histoire.",
          "audioLabel": "Écouter Вот так",
          "image": "/art/budapest/3-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Depuis le tout début",
        "note": "Нашёл (j'ai trouvé) est un peu irrégulier : он нашёл, она нашла. Ящик — tiroir.",
        "lines": [
          {
            "speaker": "dora",
            "ru": "Что случилось? Почему ты путешествуешь?",
            "en": "Que s'est-il passé ? Pourquoi vous voyagez ?"
          },
          {
            "speaker": "murzik",
            "ru": "Всё началось в Париже. Сначала я купил старый стол.",
            "en": "Tout a commencé à Paris. D'abord, j'ai acheté un vieux bureau."
          },
          {
            "speaker": "murzik",
            "ru": "Потом я открыл ящик и вдруг нашёл открытку.",
            "en": "Ensuite, j'ai ouvert le tiroir et soudain, j'ai trouvé une carte postale."
          },
          {
            "speaker": "dora",
            "ru": "От кого?",
            "en": "De qui ?"
          },
          {
            "speaker": "murzik",
            "ru": "От бабушки Аси! А в конце: «Иди по моим следам».",
            "en": "De grand-mère Assia ! Et à la fin : « Suis mes pas. »"
          },
          {
            "speaker": "tom",
            "ru": "И мы решили поехать. Вот так!",
            "en": "Et nous avons décidé de partir. Voilà comment ça s'est passé !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "bu3-d1",
          "prompt": "Où Murzik a-t-il trouvé la carte postale ?",
          "options": [
            {
              "label": "Dans le tiroir d'un vieux bureau.",
              "correct": true
            },
            {
              "label": "Dans sa valise.",
              "correct": false
            },
            {
              "label": "À la poste.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Raconter une histoire",
          "paragraphs": [
            "Mets les événements dans l'ordre avec сначала → потом → вдруг → в конце.",
            "Сначала я купил стол. Потом открыл ящик. Вдруг нашёл открытку. (Une femme : купила, открыла, нашла.)"
          ],
          "examples": [
            {
              "ru": "Сначала мы были в Лондоне, потом в Мадриде.",
              "en": "D'abord nous étions à Londres, ensuite à Madrid."
            },
            {
              "ru": "Вдруг пошёл дождь.",
              "en": "Soudain, il s'est mis à pleuvoir."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "bu3-t1",
          "prompt": "Écoute. Qu'est-ce qui s'est passé soudain ?",
          "skill": "listening",
          "audio": "Мы гуляли, и вдруг пошёл дождь.",
          "options": [
            {
              "label": "Il s'est mis à pleuvoir.",
              "correct": true
            },
            {
              "label": "Ils se sont perdus.",
              "correct": false
            },
            {
              "label": "Le téléphone s'est éteint.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "bu3-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "вдруг",
              "right": "soudain"
            },
            {
              "left": "в конце",
              "right": "à la fin"
            },
            {
              "left": "Что случилось?",
              "right": "Que s'est-il passé ?"
            }
          ]
        },
        {
          "kind": "choice",
          "id": "bu3-t3",
          "prompt": "Mets les mots du récit dans un ordre naturel.",
          "skill": "grammar",
          "options": [
            {
              "label": "сначала → потом → в конце",
              "correct": true
            },
            {
              "label": "в конце → сначала → потом",
              "correct": false
            },
            {
              "label": "потом → в конце → сначала",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "bu3-t4",
          "prompt": "Forme le mot « soudain ».",
          "word": "вдруг",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "bu3-t5",
          "prompt": "Что случилось?",
          "model": "Сначала я гулял, а потом вдруг пошёл дождь.",
          "modelEn": "D'abord je me promenais, et ensuite, soudain, il s'est mis à pleuvoir.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Raconte une toute petite histoire avec сначала et вдруг. Une femme dit гуляла."
        },
        {
          "kind": "choice",
          "id": "bu3-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Ты был в Москве?",
          "options": [
            {
              "label": "Да, я был в Москве.",
              "correct": true
            },
            {
              "label": "Что случилось?",
              "correct": false
            },
            {
              "label": "Вдруг.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "rubiks-cube",
        "itemName": "Rubik's cube",
        "itemNameRu": "Кубик Рубика",
        "ru": "Ура! Кубик Рубика!",
        "en": "Youpi ! Un Rubik's cube !",
        "a11y": "Murzik tourne un cube coloré dans ses pattes, l'air concentré.",
        "image": "/art/budapest/reward-3.jpg",
        "steps": [
          "Dora montre un cube coloré à Murzik.",
          "« Il a été inventé ici, en Hongrie ! »",
          "Murzik le tourne encore et encore.",
          "Les couleurs ne veulent pas se remettre ensemble !"
        ],
        "bridge": "« Et tu as déjà eu peur ? » demande Dora le lendemain matin."
      }
    },
    {
      "id": "a1-budapest-4",
      "level": "A1",
      "cityId": "budapest",
      "number": 4,
      "title": "Comment te sentais-tu ?",
      "minutes": 6,
      "goals": [
        "Dire comment tu te sentais",
        "Dire que c'était effrayant, triste ou drôle",
        "Dire « le plus beau jour »"
      ],
      "vocabNote": "Мне было… est le passé de Мне холодно, Мне скучно. Bonne nouvelle : c'est pareil pour les hommes et les femmes !",
      "vocab": [
        {
          "id": "bu4-1",
          "ru": "Тебе было страшно?",
          "en": "Tu as eu peur ?",
          "a11y": "Dora pose la question avec de grands yeux, à moitié cachée derrière un coussin.",
          "audioLabel": "Écouter Тебе было страшно",
          "image": "/art/budapest/4-1.jpg"
        },
        {
          "id": "bu4-2",
          "ru": "Мне было страшно.",
          "en": "J'ai eu peur.",
          "a11y": "Souvenir : Murzik à l'hôtel d'Istanbul, devant l'endroit vide où était la valise.",
          "audioLabel": "Écouter Мне было страшно",
          "image": "/art/budapest/4-2.jpg"
        },
        {
          "id": "bu4-3",
          "ru": "Мне было грустно.",
          "en": "J'étais triste.",
          "a11y": "Souvenir : Murzik fait au revoir à Barsik à la fenêtre d'un train.",
          "audioLabel": "Écouter Мне было грустно",
          "image": "/art/budapest/4-3.jpg"
        },
        {
          "id": "bu4-4",
          "ru": "Мне было смешно.",
          "en": "C'était drôle.",
          "a11y": "Souvenir : Barsik qui vacille sur un vélo à Amsterdam.",
          "audioLabel": "Écouter Мне было смешно",
          "image": "/art/budapest/4-4.jpg"
        },
        {
          "id": "bu4-5",
          "ru": "Мне было одиноко.",
          "en": "Je me sentais seul.",
          "a11y": "Souvenir : Murzik seul dans un appartement parisien vide, avant de rencontrer Tom.",
          "audioLabel": "Écouter Мне было одиноко",
          "image": "/art/budapest/4-5.jpg"
        },
        {
          "id": "bu4-6",
          "ru": "Но потом всё было хорошо.",
          "en": "Mais ensuite, tout s'est bien passé.",
          "a11y": "Souvenir : Murzik serre dans ses bras sa valise retrouvée.",
          "audioLabel": "Écouter Но потом всё было хорошо",
          "image": "/art/budapest/4-6.jpg"
        },
        {
          "id": "bu4-7",
          "ru": "Это был лучший день!",
          "en": "C'était le plus beau jour !",
          "a11y": "Souvenir : l'anniversaire de Murzik sur le toit à Athènes, avec des ballons et un gâteau.",
          "audioLabel": "Écouter Это был лучший день",
          "image": "/art/budapest/4-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Effrayant, triste et drôle",
        "note": "Когда пропал чемодан — quand la valise a disparu. День рождения — anniversaire.",
        "lines": [
          {
            "speaker": "dora",
            "ru": "Мурзик, тебе было страшно?",
            "en": "Murzik, tu as eu peur ?"
          },
          {
            "speaker": "murzik",
            "ru": "Да. В Стамбуле. Когда пропал чемодан, мне было очень страшно.",
            "en": "Oui. À Istanbul. Quand la valise a disparu, j'ai eu très peur."
          },
          {
            "speaker": "dora",
            "ru": "А грустно?",
            "en": "Et tu as été triste ?"
          },
          {
            "speaker": "murzik",
            "ru": "Мне было грустно, когда уехал Барсик. Но потом всё было хорошо.",
            "en": "J'étais triste quand Barsik est parti. Mais ensuite, tout s'est bien passé."
          },
          {
            "speaker": "tom",
            "ru": "А в Амстердаме Барсик ехал на велосипеде. Нам было так смешно!",
            "en": "Et à Amsterdam, Barsik a fait du vélo. C'était tellement drôle !"
          },
          {
            "speaker": "murzik",
            "ru": "А день рождения в Афинах — это был лучший день!",
            "en": "Et mon anniversaire à Athènes — c'était le plus beau jour !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "bu4-d1",
          "prompt": "Quand Murzik a-t-il eu peur ?",
          "options": [
            {
              "label": "Quand la valise a disparu.",
              "correct": true
            },
            {
              "label": "Le jour de son anniversaire.",
              "correct": false
            },
            {
              "label": "À vélo, à Amsterdam.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Мне было + sentiment",
          "paragraphs": [
            "Мне страшно (maintenant) → Мне было страшно (dans le passé). Ça marche avec tous les mots en « мне » : холодно, скучно, весело, грустно.",
            "Тебе было…? — Tu as eu… ? / Tu étais… ? Нам было смешно — On a bien ri."
          ],
          "examples": [
            {
              "ru": "Мне было холодно.",
              "en": "J'avais froid."
            },
            {
              "ru": "Нам было весело.",
              "en": "On s'est bien amusés."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "bu4-t1",
          "prompt": "Écoute. Comment se sentait cette personne ?",
          "skill": "listening",
          "audio": "Мне было грустно.",
          "options": [
            {
              "label": "Triste.",
              "correct": true
            },
            {
              "label": "Effrayée.",
              "correct": false
            },
            {
              "label": "Seule.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "bu4-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "страшно",
              "right": "effrayant"
            },
            {
              "left": "смешно",
              "right": "drôle"
            },
            {
              "left": "одиноко",
              "right": "seul"
            }
          ]
        },
        {
          "kind": "fill",
          "id": "bu4-t3",
          "prompt": "Complète : « J'avais froid. »",
          "before": "Мне",
          "after": "холодно.",
          "answer": "было",
          "options": [
            "было",
            "был",
            "была"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "bu4-t4",
          "prompt": "Quelle lettre manque ? (drôle)",
          "before": "см",
          "after": "шно",
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
          "id": "bu4-t5",
          "prompt": "Какой был твой лучший день?",
          "model": "Это был мой день рождения. Мне было очень весело!",
          "modelEn": "C'était mon anniversaire. Je me suis beaucoup amusé !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Parle de ton plus beau jour. Мне было… est pareil pour tout le monde."
        },
        {
          "kind": "choice",
          "id": "bu4-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Что случилось?",
          "options": [
            {
              "label": "Мы потеряли чемодан!",
              "correct": true
            },
            {
              "label": "Это был лучший день!",
              "correct": false
            },
            {
              "label": "Мне было смешно.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "doras-drawing",
        "itemName": "Le dessin de Dora",
        "itemNameRu": "Рисунок Доры",
        "ru": "Ура! Рисунок Доры!",
        "en": "Youpi ! Le dessin de Dora !",
        "a11y": "Un dessin d'enfant colorié aux crayons, avec Murzik et Tom, une grande valise et plein de petites maisons, est accroché au mur.",
        "image": "/art/budapest/reward-4.jpg",
        "steps": [
          "Dora a écouté chaque histoire.",
          "Maintenant, elle les dessine.",
          "Murzik, Tom, la valise et plein de petites villes.",
          "Murzik accroche le dessin au mur."
        ],
        "bridge": "« Aujourd'hui, pas d'histoires, dit Tom. Aujourd'hui, on va aux célèbres bains thermaux ! »"
      }
    },
    {
      "id": "a1-budapest-5",
      "level": "A1",
      "cityId": "budapest",
      "number": 5,
      "title": "Déjà ou pas encore ?",
      "minutes": 6,
      "goals": [
        "Demander « Tu as déjà… ? »",
        "Répondre : déjà / pas encore",
        "Décrire une expérience agréable"
      ],
      "vocabNote": "Уже veut dire « déjà », ещё не veut dire « pas encore » : Я уже был там. — Я ещё не был там. Купальня, c'est un bain thermal.",
      "vocab": [
        {
          "id": "bu5-1",
          "ru": "Ты уже был в купальне?",
          "en": "Tu es déjà allé aux bains thermaux ? (à un homme)",
          "a11y": "Un grand bâtiment jaune avec de grandes piscines en plein air pleines d'eau fumante.",
          "audioLabel": "Écouter Ты уже был в купальне",
          "image": "/art/budapest/5-1.jpg"
        },
        {
          "id": "bu5-2",
          "ru": "Ещё нет.",
          "en": "Pas encore.",
          "a11y": "Murzik secoue la tête avec un sourire curieux.",
          "audioLabel": "Écouter Ещё нет",
          "image": "/art/budapest/5-2.jpg"
        },
        {
          "id": "bu5-3",
          "ru": "Уже!",
          "en": "Déjà !",
          "a11y": "Tom hoche fièrement la tête, une serviette à la main.",
          "audioLabel": "Écouter Уже",
          "image": "/art/budapest/5-3.jpg"
        },
        {
          "id": "bu5-4",
          "ru": "Я уже купил билеты.",
          "en": "J'ai déjà acheté les billets. (homme)",
          "a11y": "Tom agite deux billets devant l'entrée des bains.",
          "audioLabel": "Écouter Я уже купил билеты",
          "image": "/art/budapest/5-4.jpg"
        },
        {
          "id": "bu5-5",
          "ru": "Вода очень тёплая!",
          "en": "L'eau est très chaude !",
          "a11y": "Murzik est assis dans une piscine fumante, de l'eau jusqu'au menton, les yeux fermés de bonheur.",
          "audioLabel": "Écouter Вода очень тёплая",
          "image": "/art/budapest/5-5.jpg"
        },
        {
          "id": "bu5-6",
          "ru": "Как приятно!",
          "en": "Que c'est agréable !",
          "a11y": "Murzik flotte sur le dos dans l'eau chaude, l'air aux anges.",
          "audioLabel": "Écouter Как приятно",
          "image": "/art/budapest/5-6.jpg"
        },
        {
          "id": "bu5-7",
          "ru": "Ты ещё не ел лангош?",
          "en": "Tu n'as pas encore goûté le lángos ? (à un homme)",
          "a11y": "Un grand pain rond frit, avec de la crème aigre et du fromage, sur une assiette en carton.",
          "audioLabel": "Écouter Ты ещё не ел лангош",
          "image": "/art/budapest/5-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Aux bains thermaux",
        "note": "Лангош — un pain frit hongrois. Ел — a mangé (un homme ; une femme dit ела). Тогда — alors, dans ce cas.",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Мурзик, ты уже был в купальне?",
            "en": "Murzik, tu es déjà allé aux bains thermaux ?"
          },
          {
            "speaker": "murzik",
            "ru": "Ещё нет. А ты?",
            "en": "Pas encore. Et toi ?"
          },
          {
            "speaker": "tom",
            "ru": "Тоже нет. Но я уже купил билеты!",
            "en": "Moi non plus. Mais j'ai déjà acheté les billets !"
          },
          {
            "speaker": "murzik",
            "ru": "Ой… Вода очень тёплая! Как приятно!",
            "en": "Oh… L'eau est très chaude ! Que c'est agréable !"
          },
          {
            "speaker": "dora",
            "ru": "А потом — лангош! Ты ещё не ел лангош?",
            "en": "Et après — un lángos ! Tu n'as pas encore goûté le lángos ?"
          },
          {
            "speaker": "murzik",
            "ru": "Ещё нет!",
            "en": "Pas encore !"
          },
          {
            "speaker": "dora",
            "ru": "Тогда идём!",
            "en": "Alors, allons-y !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "bu5-d1",
          "prompt": "Qui a acheté les billets ?",
          "options": [
            {
              "label": "Tom.",
              "correct": true
            },
            {
              "label": "Dora.",
              "correct": false
            },
            {
              "label": "Murzik.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Уже / ещё не",
          "paragraphs": [
            "Уже + passé : Я уже купил билеты. — J'ai déjà acheté les billets. (Une femme : купила.)",
            "Ещё не + passé : Я ещё не был там. — Je n'y suis pas encore allé. Réponses courtes : Уже! — Ещё нет."
          ],
          "examples": [
            {
              "ru": "Ты уже обедала? — Ещё нет.",
              "en": "Tu as déjà déjeuné ? (à une femme) — Pas encore."
            },
            {
              "ru": "Мы уже были в Вене.",
              "en": "Nous sommes déjà allés à Vienne."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "bu5-t1",
          "prompt": "Écoute. Cette personne a-t-elle acheté les billets ?",
          "skill": "listening",
          "audio": "Я ещё не купила билеты.",
          "options": [
            {
              "label": "Pas encore.",
              "correct": true
            },
            {
              "label": "Oui, déjà.",
              "correct": false
            },
            {
              "label": "Elle n'en a pas besoin.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "bu5-t2",
          "prompt": "Ton ami demande : Ты уже был в Будапеште? Tu n'y es pas allé. Que dis-tu ?",
          "skill": "words",
          "options": [
            {
              "label": "Ещё нет.",
              "correct": true
            },
            {
              "label": "Уже!",
              "correct": false
            },
            {
              "label": "Как приятно!",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "bu5-t3",
          "prompt": "Complète : « Je n'y suis pas encore allé. » (un homme)",
          "before": "Я ещё",
          "after": "был там.",
          "answer": "не",
          "options": [
            "не",
            "уже",
            "нет"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "bu5-t4",
          "prompt": "Forme le mot « eau ».",
          "word": "вода",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "bu5-t5",
          "prompt": "Ты уже был в Будапеште?",
          "model": "Ещё нет. Но очень хочу!",
          "modelEn": "Pas encore. Mais j'en ai très envie !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Réponds honnêtement. Si tu y es allé, dis Уже! Я был… (une femme : была)."
        },
        {
          "kind": "choice",
          "id": "bu5-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Тебе было страшно?",
          "options": [
            {
              "label": "Да, мне было очень страшно.",
              "correct": true
            },
            {
              "label": "Ещё нет.",
              "correct": false
            },
            {
              "label": "Вода очень тёплая!",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "bathrobe",
        "itemName": "Peignoir",
        "itemNameRu": "Халат",
        "ru": "Ура! Мягкий халат!",
        "en": "Youpi ! Un peignoir tout doux !",
        "a11y": "Un petit peignoir blanc tout moelleux avec une capuche est accroché à la porte de la chambre de Murzik.",
        "image": "/art/budapest/reward-5.jpg",
        "steps": [
          "Après les bains, Murzik a chaud et sommeil.",
          "À la boutique, il y a de petits peignoirs tout moelleux.",
          "L'un d'eux est juste à sa taille — avec une capuche !",
          "Il le porte toute la soirée."
        ],
        "bridge": "Le soir, Tom ouvre son ordinateur : toutes les photos de toutes les villes."
      }
    },
    {
      "id": "a1-budapest-6",
      "level": "A1",
      "cityId": "budapest",
      "number": 6,
      "title": "Tu te souviens ?",
      "minutes": 6,
      "goals": [
        "Demander à un ami « Tu te souviens… ? »",
        "Parler de souvenirs communs",
        "Dire que c'était le bon temps"
      ],
      "vocabNote": "Помнишь, как…? — « Tu te souviens quand… ? » est une jolie façon de commencer un souvenir commun.",
      "vocab": [
        {
          "id": "bu6-1",
          "ru": "Помнишь, как…?",
          "en": "Tu te souviens quand… ?",
          "a11y": "Tom et Murzik sont assis ensemble et regardent des photos sur un ordinateur en souriant.",
          "audioLabel": "Écouter Помнишь, как",
          "image": "/art/budapest/6-1.jpg"
        },
        {
          "id": "bu6-2",
          "ru": "Конечно, помню!",
          "en": "Bien sûr que je m'en souviens !",
          "a11y": "Murzik rit et pose une patte sur son cœur.",
          "audioLabel": "Écouter Конечно, помню",
          "image": "/art/budapest/6-2.jpg"
        },
        {
          "id": "bu6-3",
          "ru": "Как мы опоздали на поезд!",
          "en": "Quand on a raté le train !",
          "a11y": "Souvenir en photo : Tom et Murzik sur un quai vide à Berlin.",
          "audioLabel": "Écouter Как мы опоздали на поезд",
          "image": "/art/budapest/6-3.jpg"
        },
        {
          "id": "bu6-4",
          "ru": "Как мы заблудились!",
          "en": "Quand on s'est perdus !",
          "a11y": "Souvenir en photo : trois vélos dans un labyrinthe de canaux à Amsterdam.",
          "audioLabel": "Écouter Как мы заблудились",
          "image": "/art/budapest/6-4.jpg"
        },
        {
          "id": "bu6-5",
          "ru": "Это было так смешно!",
          "en": "C'était tellement drôle !",
          "a11y": "Tom et Murzik rient tellement qu'ils se tiennent le ventre.",
          "audioLabel": "Écouter Это было так смешно",
          "image": "/art/budapest/6-5.jpg"
        },
        {
          "id": "bu6-6",
          "ru": "Хорошее было время.",
          "en": "C'était le bon temps.",
          "a11y": "Une rangée de petites photos encadrées de nombreuses villes sur une étagère.",
          "audioLabel": "Écouter Хорошее было время",
          "image": "/art/budapest/6-6.jpg"
        },
        {
          "id": "bu6-7",
          "ru": "Я часто думаю об этом.",
          "en": "J'y pense souvent.",
          "a11y": "Murzik est assis près de la fenêtre, le menton sur la patte, pensif, l'album photo sur les genoux.",
          "audioLabel": "Écouter Я часто думаю об этом",
          "image": "/art/budapest/6-7b.jpg"
        }
      ],
      "dialogue": {
        "title": "Vieilles photos",
        "note": "Тот кот в шляпе — ce chat en chapeau. На каждой фотографии — sur chaque photo.",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Мурзик, помнишь, как мы опоздали на поезд в Берлине?",
            "en": "Murzik, tu te souviens quand on a raté le train à Berlin ?"
          },
          {
            "speaker": "murzik",
            "ru": "Конечно, помню! А как мы заблудились в Амстердаме!",
            "en": "Bien sûr que je m'en souviens ! Et quand on s'est perdus à Amsterdam !"
          },
          {
            "speaker": "tom",
            "ru": "Это было так смешно! Столько всего!",
            "en": "C'était tellement drôle ! Il s'en est passé, des choses !"
          },
          {
            "speaker": "murzik",
            "ru": "Хорошее было время… Я часто думаю об этом. Ой! Том, смотри!",
            "en": "C'était le bon temps… J'y pense souvent. Oh ! Tom, regarde !"
          },
          {
            "speaker": "murzik",
            "ru": "Вот здесь, и здесь… Тот кот в шляпе! На каждой фотографии!",
            "en": "Ici, et ici… Ce chat en chapeau ! Sur chaque photo !"
          },
          {
            "speaker": "tom",
            "ru": "Не может быть…",
            "en": "Ce n'est pas possible…"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "bu6-d1",
          "prompt": "Que trouve Murzik sur les photos ?",
          "options": [
            {
              "label": "Le chat en chapeau — sur chaque photo.",
              "correct": true
            },
            {
              "label": "Une photo de grand-mère Assia.",
              "correct": false
            },
            {
              "label": "Une photo de Dora.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Помню, помнишь",
          "paragraphs": [
            "я помню, ты помнишь: Ты помнишь Лондон? — Конечно, помню!",
            "Помнишь, как…? + une histoire au passé : Помнишь, как мы гуляли в Праге?"
          ],
          "examples": [
            {
              "ru": "Ты помнишь Карла?",
              "en": "Tu te souviens de Karl ?"
            },
            {
              "ru": "Я не помню.",
              "en": "Je ne m'en souviens pas."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "bu6-t1",
          "prompt": "Écoute. De quoi Tom se souvient-il ?",
          "skill": "listening",
          "audio": "Помнишь, как мы ели паэлью в Мадриде?",
          "options": [
            {
              "label": "De la paella à Madrid.",
              "correct": true
            },
            {
              "label": "De s'être perdus à Amsterdam.",
              "correct": false
            },
            {
              "label": "D'avoir raté le train à Berlin.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "bu6-t2",
          "prompt": "Que veut dire Хорошее было время ?",
          "skill": "words",
          "options": [
            {
              "label": "C'était le bon temps.",
              "correct": true
            },
            {
              "label": "C'est le bon temps maintenant.",
              "correct": false
            },
            {
              "label": "Il faisait beau.",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "bu6-t3",
          "prompt": "Complète : « Tu te souviens de Karl ? »",
          "before": "Ты",
          "after": "Карла?",
          "answer": "помнишь",
          "options": [
            "помнишь",
            "помню",
            "помнит"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "bu6-t4",
          "prompt": "Quelle lettre manque ? (temps)",
          "before": "вр",
          "after": "мя",
          "answer": "е",
          "options": [
            "е",
            "и",
            "я"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "bu6-t5",
          "prompt": "Помнишь, как мы опоздали на поезд?",
          "model": "Конечно, помню! Это было так смешно!",
          "modelEn": "Bien sûr que je m'en souviens ! C'était tellement drôle !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Ton ami se souvient d'une journée drôle. Réponds à voix haute."
        },
        {
          "kind": "choice",
          "id": "bu6-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Ты уже был в купальне?",
          "options": [
            {
              "label": "Уже! Как приятно!",
              "correct": true
            },
            {
              "label": "Конечно, помню!",
              "correct": false
            },
            {
              "label": "Столько всего!",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "photo-album",
        "itemName": "Album photo",
        "itemNameRu": "Фотоальбом",
        "ru": "Ура! Фотоальбом путешествия!",
        "en": "Youpi ! Un album photo du voyage !",
        "a11y": "Murzik ouvre un gros album photo plein d'images de chaque ville. À l'arrière-plan de beaucoup de photos, on voit un minuscule chat blanc en chapeau.",
        "image": "/art/budapest/reward-6.jpg",
        "steps": [
          "Tom imprime ses meilleures photos.",
          "Une pour chaque ville.",
          "Ils font un grand album ensemble.",
          "Et sur beaucoup d'entre elles — un minuscule chat en chapeau."
        ],
        "bridge": "Le dernier soir, Dora demande : « Tu me racontes toute l'histoire encore une fois ? Toute ? »"
      }
    },
    {
      "id": "a1-budapest-7",
      "level": "A1",
      "cityId": "budapest",
      "number": 7,
      "title": "Toute l'histoire",
      "minutes": 7,
      "goals": [
        "Raconter une petite histoire de voyage",
        "Dire ce que tu fais maintenant et ce qui va se passer",
        "Comprendre une histoire à l'oral"
      ],
      "vocabNote": "Cette leçon réunit le passé, le présent et le futur : мы были (passé), мы ищем (maintenant), мы найдём (futur).",
      "vocab": [
        {
          "id": "bu7-1",
          "ru": "Расскажи всё с начала!",
          "en": "Raconte-moi tout depuis le début !",
          "a11y": "Dora, en pyjama avec une tasse de chocolat chaud, est prête à écouter.",
          "audioLabel": "Écouter Расскажи всё с начала",
          "image": "/art/budapest/7-1.jpg"
        },
        {
          "id": "bu7-2",
          "ru": "Мы ищем бабушку.",
          "en": "Nous cherchons grand-mère.",
          "a11y": "Murzik tient côte à côte la carte de Paris et la carte d'anniversaire.",
          "audioLabel": "Écouter Мы ищем бабушку",
          "image": "/art/budapest/7-2.jpg"
        },
        {
          "id": "bu7-3",
          "ru": "Мы были в двенадцати городах.",
          "en": "Nous sommes allés dans douze villes.",
          "a11y": "La carte du monde au mur, avec douze punaises rouges et une treizième à Budapest.",
          "audioLabel": "Écouter Мы были в двенадцати городах",
          "image": "/art/budapest/7-3.jpg"
        },
        {
          "id": "bu7-4",
          "ru": "Мы ещё не нашли её.",
          "en": "Nous ne l'avons pas encore trouvée.",
          "a11y": "Murzik regarde le ciel nocturne par la fenêtre, pensif.",
          "audioLabel": "Écouter Мы ещё не нашли её",
          "image": "/art/budapest/7-4.jpg"
        },
        {
          "id": "bu7-5",
          "ru": "Но мы найдём!",
          "en": "Mais nous la trouverons !",
          "a11y": "Murzik serre la patte, l'air courageux et déterminé.",
          "audioLabel": "Écouter Но мы найдём",
          "image": "/art/budapest/7-5.jpg"
        },
        {
          "id": "bu7-6",
          "ru": "Это ещё не конец.",
          "en": "Ce n'est pas encore la fin.",
          "a11y": "Une route continue par-dessus les collines vers un lever de soleil lointain.",
          "audioLabel": "Écouter Это ещё не конец",
          "image": "/art/budapest/7-6.jpg"
        },
        {
          "id": "bu7-7",
          "ru": "Спокойной ночи, Дора!",
          "en": "Bonne nuit, Dora !",
          "a11y": "Murzik borde Dora, toute endormie.",
          "audioLabel": "Écouter Спокойной ночи, Дора",
          "image": "/art/budapest/7-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Une histoire pour s'endormir",
        "note": "Murzik raconte l'histoire avec le passé, le présent et le futur. Ищем — nous cherchons. Найдём — nous trouverons.",
        "lines": [
          {
            "speaker": "dora",
            "ru": "Мурзик, расскажи всё с начала!",
            "en": "Murzik, raconte-moi tout depuis le début !"
          },
          {
            "speaker": "murzik",
            "ru": "Хорошо. Всё началось в Париже. Я нашёл открытку от бабушки Аси.",
            "en": "D'accord. Tout a commencé à Paris. J'ai trouvé une carte postale de grand-mère Assia."
          },
          {
            "speaker": "murzik",
            "ru": "Потом мы были в двенадцати городах. Сейчас мы в Будапеште.",
            "en": "Ensuite, nous sommes allés dans douze villes. Maintenant, nous sommes à Budapest."
          },
          {
            "speaker": "dora",
            "ru": "А бабушка?",
            "en": "Et grand-mère ?"
          },
          {
            "speaker": "murzik",
            "ru": "Мы ещё не нашли её. Но мы найдём! Это ещё не конец.",
            "en": "Nous ne l'avons pas encore trouvée. Mais nous la trouverons ! Ce n'est pas encore la fin."
          },
          {
            "speaker": "dora",
            "ru": "А кот в шляпе?",
            "en": "Et le chat en chapeau ?"
          },
          {
            "speaker": "murzik",
            "ru": "Это тайна. Спокойной ночи, Дора!",
            "en": "C'est un mystère. Bonne nuit, Dora !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "bu7-d1",
          "prompt": "Ont-ils retrouvé grand-mère Assia ?",
          "options": [
            {
              "label": "Pas encore.",
              "correct": true
            },
            {
              "label": "Oui, à Budapest.",
              "correct": false
            },
            {
              "label": "Oui, à Paris.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Passé, présent, futur",
          "paragraphs": [
            "Passé : мы были, я нашёл / нашла. Présent : мы ищем, я ищу. Futur : мы найдём, я найду.",
            "De petits mots montrent le temps : вчера, сейчас, завтра."
          ],
          "examples": [
            {
              "ru": "Вчера мы были в Варшаве. Сейчас мы в Будапеште. Завтра мы будем в новом городе.",
              "en": "Hier, nous étions à Varsovie. Maintenant, nous sommes à Budapest. Demain, nous serons dans une nouvelle ville."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "bu7-t1",
          "prompt": "Écoute. Qu'a fait cette personne samedi ?",
          "skill": "listening",
          "help": "Voici ton test d'écoute de Budapest.",
          "audio": "В субботу я была в купальне. Сначала я плавала, потом обедала, а вечером гуляла у реки. Было очень приятно!",
          "options": [
            {
              "label": "Elle est allée aux bains thermaux.",
              "correct": true
            },
            {
              "label": "Elle a travaillé toute la journée.",
              "correct": false
            },
            {
              "label": "Elle est allée au cinéma.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "bu7-t2",
          "prompt": "Quel mot indique le futur ?",
          "skill": "words",
          "options": [
            {
              "label": "найдём",
              "correct": true
            },
            {
              "label": "нашли",
              "correct": false
            },
            {
              "label": "ищем",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "bu7-t3",
          "prompt": "Quelle phrase parle de MAINTENANT ?",
          "skill": "grammar",
          "options": [
            {
              "label": "Сейчас мы в Будапеште.",
              "correct": true
            },
            {
              "label": "Вчера мы были в Варшаве.",
              "correct": false
            },
            {
              "label": "Завтра мы будем в новом городе.",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "bu7-t4",
          "prompt": "Forme le mot « histoire » — tu le connais depuis Lisbonne.",
          "word": "история",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "bu7-t5",
          "prompt": "Расскажи о себе. Где ты был?",
          "model": "Я был в Лондоне. Сейчас я дома. Завтра я буду учить русский!",
          "modelEn": "Je suis allé à Londres. Maintenant, je suis à la maison. Demain, j'étudierai le russe !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Dis trois phrases : passé, maintenant, futur. Une femme dit Я была."
        },
        {
          "kind": "choice",
          "id": "bu7-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Помнишь, как мы заблудились?",
          "options": [
            {
              "label": "Конечно, помню!",
              "correct": true
            },
            {
              "label": "Мы ещё не нашли её.",
              "correct": false
            },
            {
              "label": "Уже!",
              "correct": false
            }
          ]
        },
        {
          "kind": "truefalse",
          "id": "bu7-t7",
          "prompt": "Vrai ou faux",
          "statement": "Une femme dit : Вчера я гулял.",
          "correct": false,
          "skill": "review"
        }
      ],
      "reward": {
        "itemId": "travel-diary",
        "itemName": "Carnet de voyage",
        "itemNameRu": "Дневник",
        "ru": "Ура! Дневник путешествий!",
        "en": "Youpi ! Un carnet de voyage !",
        "a11y": "Murzik écrit dans un gros carnet avec un ruban rouge. Sur la page ouverte, un petit dessin de chaque ville qu'ils ont visitée.",
        "image": "/art/budapest/reward-7.jpg",
        "steps": [
          "Dora donne à Murzik un gros carnet.",
          "« Écris toute l'histoire », dit-elle.",
          "Sur la première page, Murzik dessine chaque ville.",
          "Son carnet de voyage a commencé."
        ],
        "bridge": "Le carnet va dans la valise. Encore une ville — et le niveau A1 sera terminé !"
      }
    }
  ],
  "story": {
    "home": {
      "name": "La chambre de Murzik au bord du Danube",
      "nameRu": "Комната у Дуная",
      "image": "/art/budapest/home.jpg",
      "a11y": "Une petite chambre vide aux hauts plafonds dans une vieille maison d'hôtes. La fenêtre donne sur le large Danube et un pont à chaînes."
    },
    "keepsakeId": "travel-diary",
    "welcomeRu": "Привет, Будапешт!",
    "welcomeEn": "Bonjour, Budapest !",
    "welcomeImage": "/art/budapest/arrival.jpg",
    "welcomeA11y": "Murzik et Tom arrivent à Budapest : le grand bâtiment du Parlement et un pont à chaînes sur le large Danube.",
    "departureImage": "/art/budapest/departure.jpg",
    "departureA11y": "Dora et sa grand-mère disent au revoir à Murzik et Tom dans la grande gare ancienne de Budapest. Murzik tient son carnet de voyage.",
    "finale": [
      {
        "image": "/art/budapest/finale-1.jpg",
        "a11y": "Murzik est dans sa chambre douillette au bord du Danube : une guirlande de piments rouges, une nappe brodée, un Rubik's cube, le dessin de Dora au mur, un peignoir tout moelleux et un gros album photo. Il tient son carnet de voyage.",
        "lines": [
          {
            "en": "La chambre de Murzik au bord du Danube est maintenant pleine d'histoires."
          },
          {
            "en": "Il emballe son objet préféré pour l'emporter : son carnet de voyage."
          }
        ]
      },
      {
        "image": "/art/budapest/finale-2.jpg",
        "a11y": "Murzik, Tom et Dora font la fête la nuit sur le pont à chaînes, avec le Parlement illuminé derrière eux.",
        "lines": [
          {
            "ru": "Будапешт завершён!",
            "en": "Budapest, c'est fait !"
          },
          {
            "en": "7 / 7 leçons"
          },
          {
            "ru": "Уже тринадцать городов!",
            "en": "Déjà treize villes !"
          }
        ]
      },
      {
        "image": "/art/budapest/diary.jpg",
        "a11y": "Tard dans la nuit, Murzik écrit dans son carnet à la lumière d'une lampe. À côté : la carte de Paris, la carte d'anniversaire et une photo où un minuscule chat en chapeau est entouré.",
        "lines": [
          {
            "en": "Tard dans la nuit, Murzik écrit dans son carnet. Première page : Paris. Dernière page : Budapest."
          },
          {
            "ru": "Кто ты, кот в шляпе?",
            "en": "Qui es-tu, chat au chapeau ?"
          },
          {
            "en": "Il entoure le chat sur chaque photo. Encore une ville, et le niveau A1 sera terminé."
          }
        ]
      },
      {
        "image": "/art/budapest/departure.jpg",
        "a11y": "Dora et sa grand-mère disent au revoir à Murzik et Tom dans la grande gare ancienne de Budapest. Murzik tient son carnet de voyage.",
        "lines": [
          {
            "ru": "До свидания, Будапешт! До свидания, Дора!",
            "en": "Au revoir, Budapest ! Au revoir, Dora !"
          },
          {
            "ru": "Следующая остановка: Эдинбург!",
            "en": "Prochain arrêt : Édimbourg !"
          }
        ]
      },
      {
        "image": "/art/budapest/finale-5.jpg",
        "a11y": "Un petit avion vole vers le nord-ouest au-dessus des nuages, de Budapest vers les collines vertes d'Écosse.",
        "lines": [
          {
            "ru": "Будапешт → Эдинбург",
            "en": "Budapest → Édimbourg"
          }
        ]
      },
      {
        "image": "/art/edinburgh/arrival.jpg",
        "a11y": "Murzik et Tom arrivent à Édimbourg : un château de pierre grise sur un haut rocher au-dessus de la vieille ville ; il bruine.",
        "lines": [
          {
            "ru": "Привет, Эдинбург!",
            "en": "Bonjour, Édimbourg !"
          },
          {
            "ru": "Последний город A1!",
            "en": "La dernière ville du niveau A1 !"
          }
        ]
      }
    ]
  }
};
