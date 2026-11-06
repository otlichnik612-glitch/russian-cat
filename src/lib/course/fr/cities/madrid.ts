import type { CityPlan } from "../../types";

/** Madrid in the French version of the Russian course (`ru` = Russian, `en` = French). Generated from the English version with French texts. */
export const madridFr: Pick<CityPlan, "lessons" | "story"> = {
  "lessons": [
    {
      "id": "a1-madrid-1",
      "level": "A1",
      "cityId": "madrid",
      "number": 1,
      "title": "Au café",
      "minutes": 5,
      "goals": [
        "Commander une boisson poliment",
        "Dire avec du lait ou sans sucre",
        "Dire « C'est tout »"
      ],
      "vocabNote": "Le plus simple pour commander : Мне …, пожалуйста — mot à mot « À moi …, s'il vous plaît ». Les serveurs te vouvoient (вы).",
      "vocab": [
        {
          "id": "ma1-1",
          "ru": "Что вы хотите?",
          "en": "Que désirez-vous ?",
          "a11y": "Un serveur souriant, en tablier blanc, tient un petit carnet à une table de café madrilène.",
          "audioLabel": "Écouter Что вы хотите",
          "image": "/art/madrid/1-1.jpg"
        },
        {
          "id": "ma1-2",
          "ru": "Мне кофе, пожалуйста.",
          "en": "Un café pour moi, s'il vous plaît.",
          "a11y": "Tom montre une tasse de café sur la carte et sourit au serveur.",
          "audioLabel": "Écouter Мне кофе, пожалуйста",
          "image": "/art/madrid/1-2.jpg"
        },
        {
          "id": "ma1-3",
          "ru": "Можно чай?",
          "en": "Je peux avoir un thé ?",
          "a11y": "Murzik lève poliment la patte à une table de café.",
          "audioLabel": "Écouter Можно чай",
          "image": "/art/madrid/1-3.jpg"
        },
        {
          "id": "ma1-4",
          "ru": "С молоком?",
          "en": "Avec du lait ?",
          "a11y": "Le serveur tient un petit pot de lait au-dessus d'une tasse de café.",
          "audioLabel": "Écouter С молоком",
          "image": "/art/madrid/1-4.jpg"
        },
        {
          "id": "ma1-5",
          "ru": "Без сахара.",
          "en": "Sans sucre.",
          "a11y": "Tom repousse gentiment le sucrier en secouant la tête.",
          "audioLabel": "Écouter Без сахара",
          "image": "/art/madrid/1-5.jpg"
        },
        {
          "id": "ma1-6",
          "ru": "Что-нибудь ещё?",
          "en": "Autre chose ?",
          "a11y": "Le serveur lève son stylo et les sourcils, il attend.",
          "audioLabel": "Écouter Что-нибудь ещё",
          "image": "/art/madrid/1-8.jpg"
        },
        {
          "id": "ma1-7",
          "ru": "Это всё.",
          "en": "C'est tout.",
          "a11y": "Tom ferme la carte et la rend au serveur.",
          "audioLabel": "Écouter Это всё",
          "image": "/art/madrid/1-9.jpg"
        }
      ],
      "dialogue": {
        "title": "Petit-déjeuner à Madrid",
        "note": "Доброе утро! veut dire « Bonjour ! » le matin. Горячий шоколад, c'est le chocolat chaud.",
        "lines": [
          {
            "speaker": "waiter",
            "ru": "Доброе утро! Что вы хотите?",
            "en": "Bonjour ! Que désirez-vous ?"
          },
          {
            "speaker": "tom",
            "ru": "Мне кофе, пожалуйста.",
            "en": "Un café pour moi, s'il vous plaît."
          },
          {
            "speaker": "waiter",
            "ru": "С молоком?",
            "en": "Avec du lait ?"
          },
          {
            "speaker": "tom",
            "ru": "Да, с молоком. Без сахара.",
            "en": "Oui, avec du lait. Sans sucre."
          },
          {
            "speaker": "waiter",
            "ru": "А вы?",
            "en": "Et vous ?"
          },
          {
            "speaker": "murzik",
            "ru": "Можно чай? И горячий шоколад!",
            "en": "Je peux avoir un thé ? Et un chocolat chaud !"
          },
          {
            "speaker": "waiter",
            "ru": "Что-нибудь ещё?",
            "en": "Autre chose ?"
          },
          {
            "speaker": "tom",
            "ru": "Нет, это всё. Спасибо.",
            "en": "Non, c'est tout. Merci."
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "ma1-d1",
          "prompt": "Que commande Tom ?",
          "options": [
            {
              "label": "Un café au lait, sans sucre.",
              "correct": true
            },
            {
              "label": "Un thé avec du sucre.",
              "correct": false
            },
            {
              "label": "Un chocolat chaud.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Мне …, пожалуйста et Можно …?",
          "paragraphs": [
            "Мне + ce que tu veux + пожалуйста : Мне кофе, пожалуйста. Мне чай, пожалуйста.",
            "Можно + une chose, c'est une demande polie : Можно чай? Можно меню?",
            "с — avec, без — sans. Apprends les paires en entier : с молоком, без сахара."
          ],
          "examples": [
            {
              "ru": "Мне кофе, пожалуйста.",
              "en": "Un café pour moi, s'il vous plaît."
            },
            {
              "ru": "Можно меню?",
              "en": "Je peux avoir la carte ?"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "ma1-t1",
          "prompt": "Écoute. Qu'est-ce que ça veut dire ?",
          "skill": "listening",
          "audio": "Что-нибудь ещё?",
          "options": [
            {
              "label": "Autre chose ?",
              "correct": true
            },
            {
              "label": "C'est tout.",
              "correct": false
            },
            {
              "label": "Avec du lait ?",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ma1-t2",
          "prompt": "Quelle phrase veut dire « Sans sucre » ?",
          "skill": "words",
          "options": [
            {
              "label": "Без сахара.",
              "correct": true
            },
            {
              "label": "С молоком.",
              "correct": false
            },
            {
              "label": "Это всё.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ma1-t3",
          "prompt": "Trouve la phrase correcte.",
          "skill": "grammar",
          "options": [
            {
              "label": "Мне кофе, пожалуйста.",
              "correct": true
            },
            {
              "label": "Меня кофе, пожалуйста.",
              "correct": false
            },
            {
              "label": "Я кофе, пожалуйста.",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "ma1-t4",
          "prompt": "Forme le mot « lait ».",
          "word": "молоко",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "ma1-t5",
          "prompt": "Здравствуйте! Что вы хотите?",
          "model": "Мне кофе, пожалуйста. Без сахара.",
          "modelEn": "Un café pour moi, s'il vous plaît. Sans sucre.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Tu es dans un café. Commande à voix haute."
        },
        {
          "kind": "choice",
          "id": "ma1-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Добро пожаловать в Мадрид!",
          "options": [
            {
              "label": "Спасибо!",
              "correct": true
            },
            {
              "label": "Это всё.",
              "correct": false
            },
            {
              "label": "Мне холодно.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "balcony-table",
        "itemName": "Table de balcon",
        "itemNameRu": "Столик",
        "ru": "Ура! Столик на балкон!",
        "en": "Youpi ! Une table pour mon balcon !",
        "a11y": "Murzik est sur le petit balcon ensoleillé de son appartement madrilène, à côté d'une petite table ronde bleue.",
        "image": "/art/madrid/reward-1.jpg",
        "steps": [
          "Tom et Murzik louent un petit appartement avec balcon.",
          "Le patron du café a une vieille table ronde.",
          "Il la donne à Murzik.",
          "Maintenant, Murzik peut prendre son petit-déjeuner dehors."
        ],
        "bridge": "Sur le mur du café, Murzik remarque un petit tableau d'une chatte rousse. Dans le coin, un nom : Ася. Le soir, Tom et Murzik veulent un vrai dîner espagnol."
      }
    },
    {
      "id": "a1-madrid-2",
      "level": "A1",
      "cityId": "madrid",
      "number": 2,
      "title": "Au restaurant",
      "minutes": 5,
      "goals": [
        "Demander la carte et l'addition",
        "Commander un plat avec Я буду…",
        "Dire que c'est très bon"
      ],
      "vocabNote": "Я буду … veut dire mot à mot « Je serai … », mais au restaurant, ça veut dire « Je vais prendre … ». Приятного аппетита! veut dire « Bon appétit ! ».",
      "vocab": [
        {
          "id": "ma2-1",
          "ru": "Меню, пожалуйста.",
          "en": "La carte, s'il vous plaît.",
          "a11y": "Tom lève la main à une table de restaurant éclairée par une bougie.",
          "audioLabel": "Écouter Меню, пожалуйста",
          "image": "/art/madrid/2-1.jpg"
        },
        {
          "id": "ma2-2",
          "ru": "Я буду…",
          "en": "Je vais prendre…",
          "a11y": "Murzik montre un plat sur la carte avec un sourire assuré.",
          "audioLabel": "Écouter Я буду",
          "image": "/art/madrid/2-3.jpg"
        },
        {
          "id": "ma2-3",
          "ru": "суп",
          "en": "soupe",
          "a11y": "Un bol de soupe de légumes bien chaude qui fume.",
          "audioLabel": "Écouter суп",
          "image": "/art/madrid/2-4.jpg"
        },
        {
          "id": "ma2-4",
          "ru": "рыба или мясо",
          "en": "poisson ou viande",
          "a11y": "Une assiette de poisson grillé à côté d'une assiette de viande avec des pommes de terre.",
          "audioLabel": "Écouter рыба или мясо",
          "image": "/art/madrid/2-4b.jpg"
        },
        {
          "id": "ma2-5",
          "ru": "курица",
          "en": "poulet",
          "a11y": "Un poulet rôti avec des pommes de terre dans une assiette.",
          "audioLabel": "Écouter курица",
          "image": "/art/madrid/2-6.jpg"
        },
        {
          "id": "ma2-6",
          "ru": "И сок, пожалуйста.",
          "en": "Et un jus, s'il vous plaît.",
          "a11y": "Un grand verre de jus d'orange sur une table de restaurant.",
          "audioLabel": "Écouter И сок, пожалуйста",
          "image": "/art/madrid/2-6b.jpg"
        },
        {
          "id": "ma2-7",
          "ru": "Счёт, пожалуйста.",
          "en": "L'addition, s'il vous plaît.",
          "a11y": "Tom fait au serveur le geste d'écrire en l'air.",
          "audioLabel": "Écouter Счёт, пожалуйста",
          "image": "/art/madrid/2-10.jpg"
        }
      ],
      "dialogue": {
        "title": "Dîner à huit heures",
        "note": "Les Espagnols dînent tard, à neuf heures ou même à dix heures. Tom et Murzik sont en avance !",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Извините! Меню, пожалуйста.",
            "en": "Excusez-moi ! La carte, s'il vous plaît."
          },
          {
            "speaker": "waiter",
            "ru": "Вот, пожалуйста.",
            "en": "Voici."
          },
          {
            "speaker": "murzik",
            "ru": "Я буду рыбу.",
            "en": "Je vais prendre le poisson."
          },
          {
            "speaker": "tom",
            "ru": "А я буду суп и курицу.",
            "en": "Et moi, je vais prendre la soupe et le poulet."
          },
          {
            "speaker": "murzik",
            "ru": "И сок, пожалуйста.",
            "en": "Et un jus, s'il vous plaît."
          },
          {
            "speaker": "waiter",
            "ru": "Приятного аппетита!",
            "en": "Bon appétit !"
          },
          {
            "speaker": "murzik",
            "ru": "Ммм! Очень вкусно!",
            "en": "Mmm ! C'est très bon !"
          },
          {
            "speaker": "tom",
            "ru": "Извините, счёт, пожалуйста.",
            "en": "Excusez-moi, l'addition, s'il vous plaît."
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "ma2-d1",
          "prompt": "Que commande Murzik ?",
          "options": [
            {
              "label": "Du poisson.",
              "correct": true
            },
            {
              "label": "De la soupe.",
              "correct": false
            },
            {
              "label": "Du poulet.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Я буду рыбу",
          "paragraphs": [
            "Après Я буду, les mots féminins changent -а → -у : рыба → рыбу, курица → курицу.",
            "Les mots masculins ne changent pas : Я буду суп. Tu as déjà vu ce changement : И ещё воду (вода → воду)."
          ],
          "examples": [
            {
              "ru": "Я буду рыбу.",
              "en": "Je vais prendre le poisson."
            },
            {
              "ru": "Я буду суп и курицу.",
              "en": "Je vais prendre la soupe et le poulet."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "match",
          "id": "ma2-t1",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "суп",
              "right": "soupe"
            },
            {
              "left": "рыба",
              "right": "poisson"
            },
            {
              "left": "курица",
              "right": "poulet"
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ma2-t2",
          "prompt": "Écoute. Qu'as-tu entendu ?",
          "skill": "listening",
          "audio": "Я буду рыбу.",
          "options": [
            {
              "label": "Я буду рыбу.",
              "correct": true
            },
            {
              "label": "Я буду суп.",
              "correct": false
            },
            {
              "label": "Я люблю рыбу.",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "ma2-t3",
          "prompt": "Complète.",
          "before": "Я буду",
          "after": ".",
          "answer": "курицу",
          "options": [
            "курицу",
            "курица",
            "курицы"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "ma2-t4",
          "prompt": "Quelle lettre manque ? (l'addition)",
          "before": "Сч",
          "after": "т",
          "answer": "ё",
          "options": [
            "ё",
            "е",
            "о"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "ma2-t5",
          "prompt": "Что вы будете?",
          "model": "Я буду суп и рыбу.",
          "modelEn": "Je vais prendre la soupe et le poisson.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Commande ton dîner à voix haute."
        },
        {
          "kind": "choice",
          "id": "ma2-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "С молоком?",
          "options": [
            {
              "label": "Да, с молоком.",
              "correct": true
            },
            {
              "label": "Я буду рыбу.",
              "correct": false
            },
            {
              "label": "Счёт, пожалуйста.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "chairs",
        "itemName": "Chaises en osier",
        "itemNameRu": "Стулья",
        "ru": "Ура! Два стула для балкона!",
        "en": "Youpi ! Deux chaises pour le balcon !",
        "a11y": "Deux petites chaises en osier sont près de la table ronde bleue sur le balcon de Murzik. Murzik est assis sur l'une d'elles.",
        "image": "/art/madrid/reward-2.jpg",
        "steps": [
          "Le restaurant change ses chaises.",
          "Le serveur donne à Tom deux vieilles chaises en osier.",
          "Ils les portent jusqu'à la maison.",
          "Maintenant, il y a deux places sur le balcon."
        ],
        "bridge": "Demain matin : le grand marché de Madrid."
      }
    },
    {
      "id": "a1-madrid-3",
      "level": "A1",
      "cityId": "madrid",
      "number": 3,
      "title": "Au marché",
      "minutes": 5,
      "goals": [
        "Nommer des fruits et des légumes",
        "Demander quelque chose à un stand",
        "Demander si c'est frais"
      ],
      "vocabNote": "Дайте, пожалуйста … (« Donnez-moi, s'il vous plaît … ») est la façon habituelle de demander quelque chose dans un magasin ou au marché. C'est poli, pas brusque.",
      "vocab": [
        {
          "id": "ma3-1",
          "ru": "рынок",
          "en": "marché",
          "a11y": "Un grand marché couvert à Madrid, animé et coloré, avec beaucoup de stands.",
          "audioLabel": "Écouter рынок",
          "image": "/art/madrid/3-1.jpg"
        },
        {
          "id": "ma3-2",
          "ru": "помидоры",
          "en": "tomates",
          "a11y": "Une caisse en bois pleine de tomates rouges.",
          "audioLabel": "Écouter помидоры",
          "image": "/art/madrid/3-3.jpg"
        },
        {
          "id": "ma3-3",
          "ru": "апельсины и яблоки",
          "en": "oranges et pommes",
          "a11y": "Un stand avec une pile d'oranges à côté d'une pile de pommes rouges et vertes.",
          "audioLabel": "Écouter апельсины и яблоки",
          "image": "/art/madrid/3-3b.jpg"
        },
        {
          "id": "ma3-4",
          "ru": "клубника",
          "en": "fraises",
          "a11y": "Un petit panier de fraises rouges.",
          "audioLabel": "Écouter клубника",
          "image": "/art/madrid/3-5.jpg"
        },
        {
          "id": "ma3-5",
          "ru": "Дайте, пожалуйста…",
          "en": "Je voudrais…, s'il vous plaît.",
          "a11y": "À un stand, Murzik montre poliment les tomates.",
          "audioLabel": "Écouter Дайте, пожалуйста",
          "image": "/art/madrid/3-6.jpg"
        },
        {
          "id": "ma3-6",
          "ru": "Один килограмм.",
          "en": "Un kilo.",
          "a11y": "La vendeuse pose des tomates sur une vieille balance qui indique 1 kg.",
          "audioLabel": "Écouter Один килограмм",
          "image": "/art/madrid/3-7.jpg"
        },
        {
          "id": "ma3-7",
          "ru": "овощи и фрукты",
          "en": "légumes et fruits",
          "a11y": "Un stand coloré : des légumes d'un côté, des fruits de l'autre.",
          "audioLabel": "Écouter овощи и фрукты",
          "image": "/art/madrid/3-7b.jpg"
        }
      ],
      "dialogue": {
        "title": "Le grand marché",
        "note": "Клубника est un seul mot russe pour beaucoup de fraises. Они veut dire « ils / elles ».",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Том, смотри! Рынок! Какие овощи и фрукты!",
            "en": "Tom, regarde ! Un marché ! Que de légumes et de fruits !"
          },
          {
            "speaker": "seller",
            "ru": "Здравствуйте! Что вы хотите?",
            "en": "Bonjour ! Que désirez-vous ?"
          },
          {
            "speaker": "murzik",
            "ru": "Помидоры. Они свежие?",
            "en": "Des tomates. Elles sont fraîches ?"
          },
          {
            "speaker": "seller",
            "ru": "Очень свежие!",
            "en": "Très fraîches !"
          },
          {
            "speaker": "murzik",
            "ru": "Дайте, пожалуйста, один килограмм.",
            "en": "Un kilo, s'il vous plaît."
          },
          {
            "speaker": "seller",
            "ru": "Что-нибудь ещё?",
            "en": "Autre chose ?"
          },
          {
            "speaker": "murzik",
            "ru": "Дайте, пожалуйста, клубнику!",
            "en": "Les fraises, s'il vous plaît !"
          },
          {
            "speaker": "tom",
            "ru": "И апельсины и яблоки!",
            "en": "Et des oranges et des pommes !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "ma3-d1",
          "prompt": "Qu'achète Murzik en premier ?",
          "options": [
            {
              "label": "Des tomates.",
              "correct": true
            },
            {
              "label": "Des oranges.",
              "correct": false
            },
            {
              "label": "Des fraises.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Дайте, пожалуйста …",
          "paragraphs": [
            "Après дайте, les mots féminins changent -а → -у, comme après буду : клубника → Дайте клубнику.",
            "Les pluriels et les mots masculins ne changent pas : Дайте помидоры. Дайте один килограмм."
          ],
          "examples": [
            {
              "ru": "Дайте, пожалуйста, клубнику.",
              "en": "Les fraises, s'il vous plaît."
            },
            {
              "ru": "Дайте, пожалуйста, апельсины.",
              "en": "Des oranges, s'il vous plaît."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "ma3-t1",
          "prompt": "Trouve l'intrus.",
          "skill": "words",
          "help": "Trois d'entre eux s'achètent au marché.",
          "options": [
            {
              "label": "помидоры",
              "correct": false
            },
            {
              "label": "апельсины",
              "correct": false
            },
            {
              "label": "клубника",
              "correct": false
            },
            {
              "label": "чемодан",
              "correct": true
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ma3-t2",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "listening",
          "audio": "Что вы хотите?",
          "options": [
            {
              "label": "Дайте, пожалуйста, апельсины.",
              "correct": true
            },
            {
              "label": "Очень свежие!",
              "correct": false
            },
            {
              "label": "Вот ключ.",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "ma3-t3",
          "prompt": "Complète.",
          "before": "Дайте, пожалуйста,",
          "after": ".",
          "answer": "клубнику",
          "options": [
            "клубнику",
            "клубника",
            "клубники"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "ma3-t4",
          "prompt": "Forme le mot « marché ».",
          "word": "рынок",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "ma3-t5",
          "prompt": "Здравствуйте! Что вы хотите?",
          "model": "Дайте, пожалуйста, помидоры.",
          "modelEn": "Des tomates, s'il vous plaît.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Tu es à un stand du marché. Réponds à voix haute."
        },
        {
          "kind": "choice",
          "id": "ma3-t6",
          "prompt": "Écoute. Qu'as-tu entendu ?",
          "skill": "review",
          "audio": "Приятного аппетита!",
          "options": [
            {
              "label": "Приятного аппетита!",
              "correct": true
            },
            {
              "label": "Хорошего дня!",
              "correct": false
            },
            {
              "label": "Счастливого пути!",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "flowers",
        "itemName": "Fleurs en pots",
        "itemNameRu": "Цветы",
        "ru": "Ура! Цветы для балкона!",
        "en": "Youpi ! Des fleurs pour le balcon !",
        "a11y": "Trois pots en terre cuite avec des géraniums rouge vif sont alignés le long de la rambarde du balcon ensoleillé de Murzik.",
        "image": "/art/madrid/reward-3.jpg",
        "steps": [
          "À côté du stand de fruits, il y a des fleurs.",
          "Murzik choisit trois géraniums rouges.",
          "Il les porte jusqu'à la maison.",
          "Maintenant, le balcon est rouge, blanc et bleu."
        ],
        "bridge": "À côté du marché, il y a une boutique de souvenirs. Mais combien coûtent les choses ?"
      }
    },
    {
      "id": "a1-madrid-4",
      "level": "A1",
      "cityId": "madrid",
      "number": 4,
      "title": "C'est combien ?",
      "minutes": 5,
      "goals": [
        "Demander combien coûte quelque chose",
        "Comprendre les prix jusqu'à 100",
        "Dire que c'est cher ou bon marché"
      ],
      "vocabNote": "Евро ne change jamais : один евро, два евро, сто евро. Les prix à Madrid, c'est facile !",
      "vocab": [
        {
          "id": "ma4-1",
          "ru": "Сколько стоит?",
          "en": "Combien ça coûte ?",
          "a11y": "Dans une boutique de souvenirs, Murzik lève un petit éventail espagnol, l'air interrogateur.",
          "audioLabel": "Écouter Сколько стоит",
          "image": "/art/madrid/4-1.jpg"
        },
        {
          "id": "ma4-2",
          "ru": "евро",
          "en": "euro / euros",
          "a11y": "Quelques pièces d'un euro et un billet sur le comptoir d'une boutique.",
          "audioLabel": "Écouter евро",
          "image": "/art/madrid/4-3.jpg"
        },
        {
          "id": "ma4-3",
          "ru": "тридцать, сорок, пятьдесят",
          "en": "trente, quarante, cinquante",
          "a11y": "Trois étiquettes de prix : 30 €, 40 €, 50 €.",
          "audioLabel": "Écouter тридцать, сорок, пятьдесят",
          "image": "/art/madrid/4-3b.jpg"
        },
        {
          "id": "ma4-4",
          "ru": "шестьдесят, семьдесят, восемьдесят, девяносто",
          "en": "soixante, soixante-dix, quatre-vingts, quatre-vingt-dix",
          "a11y": "Quatre étiquettes de prix : 60 €, 70 €, 80 €, 90 €.",
          "audioLabel": "Écouter шестьдесят, семьдесят, восемьдесят, девяносто",
          "image": "/art/madrid/4-4b.jpg"
        },
        {
          "id": "ma4-5",
          "ru": "сто, двести, тысяча",
          "en": "cent, deux cents, mille",
          "a11y": "Trois étiquettes de prix : 100 €, 200 €, 1000 €.",
          "audioLabel": "Écouter сто, двести, тысяча",
          "image": "/art/madrid/4-5b.jpg"
        },
        {
          "id": "ma4-6",
          "ru": "Это дорого.",
          "en": "C'est cher.",
          "a11y": "Murzik regarde une étiquette de prix avec des yeux énormes, le poil hérissé.",
          "audioLabel": "Écouter Это дорого",
          "image": "/art/madrid/4-8.jpg"
        },
        {
          "id": "ma4-7",
          "ru": "Это дёшево.",
          "en": "C'est bon marché.",
          "a11y": "Murzik tient joyeusement un petit aimant avec une minuscule étiquette de prix.",
          "audioLabel": "Écouter Это дёшево",
          "image": "/art/madrid/4-9.jpg"
        }
      ],
      "dialogue": {
        "title": "La boutique de souvenirs",
        "note": "Веер, c'est un éventail. Этот veut dire « celui-ci ».",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Извините, сколько стоит веер?",
            "en": "Excusez-moi, combien coûte l'éventail ?"
          },
          {
            "speaker": "seller",
            "ru": "Пятьдесят евро.",
            "en": "Cinquante euros."
          },
          {
            "speaker": "murzik",
            "ru": "Пятьдесят? Это дорого!",
            "en": "Cinquante ? C'est cher !"
          },
          {
            "speaker": "seller",
            "ru": "А этот веер — двадцать евро.",
            "en": "Et cet éventail coûte vingt euros."
          },
          {
            "speaker": "murzik",
            "ru": "Двадцать? Хорошо!",
            "en": "Vingt ? Très bien !"
          },
          {
            "speaker": "tom",
            "ru": "А магнит?",
            "en": "Et l'aimant ?"
          },
          {
            "speaker": "seller",
            "ru": "Три евро.",
            "en": "Trois euros."
          },
          {
            "speaker": "tom",
            "ru": "Это дёшево!",
            "en": "C'est bon marché !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "ma4-d1",
          "prompt": "Combien coûte l'éventail qui plaît à Murzik ?",
          "options": [
            {
              "label": "20 €.",
              "correct": true
            },
            {
              "label": "50 €.",
              "correct": false
            },
            {
              "label": "3 €.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Les nombres jusqu'à 1000",
          "paragraphs": [
            "De 11 à 19 : un petit nombre + -надцать : одиннадцать, двенадцать … пятнадцать … девятнадцать.",
            "Les dizaines : 20 двадцать · 30 тридцать · 40 сорок · 50 пятьдесят · 60 шестьдесят · 70 семьдесят · 80 восемьдесят · 90 девяносто · 100 сто. Bonne nouvelle : pas de « soixante-dix » ni de « quatre-vingts » — chaque dizaine a son propre mot.",
            "Le reste se construit simplement, sans « et » : двадцать три (23), сорок пять (45).",
            "Les grands nombres : сто (100), двести (200), тысяча (1000)."
          ],
          "examples": [
            {
              "ru": "Двадцать три евро.",
              "en": "Vingt-trois euros."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "ma4-t1",
          "prompt": "Écoute. Quel est le prix ?",
          "skill": "listening",
          "audio": "Пятьдесят евро.",
          "options": [
            {
              "label": "50 €",
              "correct": true
            },
            {
              "label": "15 €",
              "correct": false
            },
            {
              "label": "5 €",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ma4-t2",
          "prompt": "Écoute. Quel est ce nombre ?",
          "skill": "listening",
          "audio": "тридцать",
          "options": [
            {
              "label": "30",
              "correct": true
            },
            {
              "label": "13",
              "correct": false
            },
            {
              "label": "3",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "ma4-t3",
          "prompt": "Associe les nombres.",
          "skill": "words",
          "pairs": [
            {
              "left": "двадцать",
              "right": "20"
            },
            {
              "left": "пятьдесят",
              "right": "50"
            },
            {
              "left": "сто",
              "right": "100"
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ma4-t4",
          "prompt": "Un café coûte 100 euros ! Que dis-tu ?",
          "skill": "grammar",
          "options": [
            {
              "label": "Это дорого!",
              "correct": true
            },
            {
              "label": "Это дёшево!",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "ma4-t5",
          "prompt": "Quelle lettre manque ? (bon marché)",
          "before": "дёш",
          "after": "во",
          "answer": "е",
          "options": [
            "е",
            "ё",
            "о"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "ma4-t6",
          "prompt": "Demande combien coûte l'éventail.",
          "model": "Извините, сколько стоит веер?",
          "modelEn": "Excusez-moi, combien coûte l'éventail ?",
          "skill": "speaking"
        },
        {
          "kind": "choice",
          "id": "ma4-t7",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Они свежие?",
          "options": [
            {
              "label": "Очень свежие!",
              "correct": true
            },
            {
              "label": "Один килограмм.",
              "correct": false
            },
            {
              "label": "Это всё.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "fan",
        "itemName": "Éventail espagnol",
        "itemNameRu": "Веер",
        "ru": "Ура! Красный веер!",
        "en": "Youpi ! Un éventail rouge !",
        "a11y": "Murzik accroche un éventail espagnol rouge à fleurs blanches, tout ouvert, sur le mur blanc de son appartement madrilène.",
        "image": "/art/madrid/reward-4.jpg",
        "steps": [
          "Murzik achète l'éventail à vingt euros.",
          "Il est rouge à fleurs blanches.",
          "Il s'évente dans la chaleur de Madrid.",
          "Puis il l'accroche au mur."
        ],
        "bridge": "Le sol de l'appartement est encore nu. Dans la boutique suivante, Murzik voit un tapis coloré — mais peut-il payer par carte ?"
      }
    },
    {
      "id": "a1-madrid-5",
      "level": "A1",
      "cityId": "madrid",
      "number": 5,
      "title": "Carte ou espèces ?",
      "minutes": 5,
      "goals": [
        "Demander combien on doit payer",
        "Demander si on peut payer par carte",
        "Répondre à « Il vous faut un sac ? »"
      ],
      "vocabNote": "Сколько с меня? veut dire mot à mot « Combien de moi ? ». C'est une façon très courante de demander combien on doit.",
      "vocab": [
        {
          "id": "ma5-1",
          "ru": "Сколько с меня?",
          "en": "Je vous dois combien ?",
          "a11y": "À la caisse d'une boutique, Murzik regarde le caissier.",
          "audioLabel": "Écouter Сколько с меня",
          "image": "/art/madrid/5-1.jpg"
        },
        {
          "id": "ma5-2",
          "ru": "Можно картой?",
          "en": "Je peux payer par carte ?",
          "a11y": "Murzik lève une carte bancaire, l'air plein d'espoir.",
          "audioLabel": "Écouter Можно картой",
          "image": "/art/madrid/5-2.jpg"
        },
        {
          "id": "ma5-3",
          "ru": "Только наличными.",
          "en": "En espèces seulement.",
          "a11y": "Un petit panneau sur la caisse montre des pièces et un billet. Le caissier le montre du doigt.",
          "audioLabel": "Écouter Только наличными",
          "image": "/art/madrid/5-4.jpg"
        },
        {
          "id": "ma5-4",
          "ru": "Пакет нужен?",
          "en": "Il vous faut un sac ?",
          "a11y": "Le caissier lève un sac en papier, l'air interrogateur.",
          "audioLabel": "Écouter Пакет нужен",
          "image": "/art/madrid/5-5.jpg"
        },
        {
          "id": "ma5-5",
          "ru": "Нет, не нужен.",
          "en": "Non, ce n'est pas la peine.",
          "a11y": "Murzik secoue la tête, un tapis roulé sous le bras.",
          "audioLabel": "Écouter Нет, не нужен",
          "image": "/art/madrid/5-6.jpg"
        },
        {
          "id": "ma5-6",
          "ru": "Вот ваша сдача.",
          "en": "Voici votre monnaie.",
          "a11y": "Le caissier pose quelques pièces dans la patte de Murzik.",
          "audioLabel": "Écouter Вот ваша сдача",
          "image": "/art/madrid/5-8.jpg"
        },
        {
          "id": "ma5-7",
          "ru": "Следующий!",
          "en": "Au suivant !",
          "a11y": "Le caissier fait signe à la personne suivante dans la file.",
          "audioLabel": "Écouter Следующий",
          "image": "/art/madrid/5-10.jpg"
        }
      ],
      "dialogue": {
        "title": "À la caisse",
        "lines": [
          {
            "speaker": "cashier",
            "ru": "Следующий!",
            "en": "Au suivant !"
          },
          {
            "speaker": "murzik",
            "ru": "Здравствуйте! Сколько с меня?",
            "en": "Bonjour ! Je vous dois combien ?"
          },
          {
            "speaker": "cashier",
            "ru": "Пятнадцать евро.",
            "en": "Quinze euros."
          },
          {
            "speaker": "murzik",
            "ru": "Можно картой?",
            "en": "Je peux payer par carte ?"
          },
          {
            "speaker": "cashier",
            "ru": "Извините, только наличными.",
            "en": "Désolé, en espèces seulement."
          },
          {
            "speaker": "tom",
            "ru": "Вот двадцать евро.",
            "en": "Voici vingt euros."
          },
          {
            "speaker": "cashier",
            "ru": "Пакет нужен?",
            "en": "Il vous faut un sac ?"
          },
          {
            "speaker": "murzik",
            "ru": "Нет, не нужен. Спасибо.",
            "en": "Non, ce n'est pas la peine. Merci."
          },
          {
            "speaker": "cashier",
            "ru": "Вот ваша сдача — пять евро.",
            "en": "Voici votre monnaie : cinq euros."
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "ma5-d1",
          "prompt": "Comment paient-ils ?",
          "options": [
            {
              "label": "Tom paie en espèces.",
              "correct": true
            },
            {
              "label": "Murzik paie par carte.",
              "correct": false
            },
            {
              "label": "Ils ne paient pas.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Картой ou наличными ? Нужен ou нужна ?",
          "paragraphs": [
            "картой — par carte · наличными — en espèces. Utilise-les comme des réponses toutes faites : Можно картой? — Только наличными.",
            "Нужен (nécessaire) change avec le nom, comme мой : Пакет нужен? — Нет, не нужен. Сумка нужна? — Нет, не нужна."
          ],
          "examples": [
            {
              "ru": "Можно картой? — Да, конечно.",
              "en": "Je peux payer par carte ? — Oui, bien sûr."
            },
            {
              "ru": "Пакет нужен? — Нет, не нужен.",
              "en": "Il vous faut un sac ? — Non, merci."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "ma5-t1",
          "prompt": "Écoute. Quel est le prix ?",
          "skill": "listening",
          "audio": "Пятнадцать евро.",
          "options": [
            {
              "label": "15 €",
              "correct": true
            },
            {
              "label": "50 €",
              "correct": false
            },
            {
              "label": "5 €",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ma5-t2",
          "prompt": "Que veut dire Следующий! ?",
          "skill": "words",
          "options": [
            {
              "label": "Au suivant !",
              "correct": true
            },
            {
              "label": "C'est tout !",
              "correct": false
            },
            {
              "label": "En espèces seulement !",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ma5-t3",
          "prompt": "Пакет нужен? Tu n'en as pas besoin. Choisis la réponse.",
          "skill": "grammar",
          "options": [
            {
              "label": "Нет, не нужен.",
              "correct": true
            },
            {
              "label": "Нет, не нужна.",
              "correct": false
            },
            {
              "label": "Да, нужен.",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "ma5-t4",
          "prompt": "Forme le mot « monnaie » (l'argent qu'on te rend).",
          "word": "сдача",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "ma5-t5",
          "prompt": "Следующий!",
          "model": "Здравствуйте! Сколько с меня?",
          "modelEn": "Bonjour ! Je vous dois combien ?",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "C'est ton tour à la caisse. Parle à voix haute."
        },
        {
          "kind": "choice",
          "id": "ma5-t6",
          "prompt": "Écoute. Qu'as-tu entendu ?",
          "skill": "review",
          "audio": "Это дёшево!",
          "options": [
            {
              "label": "Это дёшево!",
              "correct": true
            },
            {
              "label": "Это дорого!",
              "correct": false
            },
            {
              "label": "Это всё!",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "rug",
        "itemName": "Tapis coloré",
        "itemNameRu": "Ковёр",
        "ru": "Ура! Яркий ковёр!",
        "en": "Youpi ! Un tapis coloré !",
        "a11y": "Murzik déroule un tapis à rayures colorées sur le carrelage de son appartement madrilène et s'y allonge, tout content.",
        "image": "/art/madrid/reward-5.jpg",
        "steps": [
          "Tom paie le tapis en espèces.",
          "Murzik le porte à la maison sous le bras.",
          "Il le déroule par terre.",
          "Il s'allonge dessus et s'étire."
        ],
        "bridge": "Le soir, Tom veut faire goûter à Murzik de vraies tapas espagnoles."
      }
    },
    {
      "id": "a1-madrid-6",
      "level": "A1",
      "cityId": "madrid",
      "number": 6,
      "title": "Délicieux !",
      "minutes": 5,
      "goals": [
        "Dire que c'est bon",
        "Dire ce qu'on aime et ce qu'on n'aime pas",
        "Proposer à quelqu'un de goûter"
      ],
      "vocabNote": "Мне нравится … veut dire « J'aime … » — mot à mot « … me plaît ». Comme en français avec « plaire », ce qu'on aime est le sujet et ne change pas : Мне нравится паэлья.",
      "vocab": [
        {
          "id": "ma6-1",
          "ru": "Вкусно!",
          "en": "C'est bon ! / Délicieux !",
          "a11y": "Murzik se lèche les babines après une bouchée de tapas.",
          "audioLabel": "Écouter Вкусно",
          "image": "/art/madrid/6-1.jpg"
        },
        {
          "id": "ma6-2",
          "ru": "Мне нравится…",
          "en": "J'aime…",
          "a11y": "Murzik serre une assiette de tortilla dans ses pattes, l'air ravi.",
          "audioLabel": "Écouter Мне нравится",
          "image": "/art/madrid/6-3.jpg"
        },
        {
          "id": "ma6-3",
          "ru": "Мне не нравится…",
          "en": "Je n'aime pas…",
          "a11y": "Murzik fronce les sourcils devant une petite coupelle de sauce piquante et secoue la tête.",
          "audioLabel": "Écouter Мне не нравится",
          "image": "/art/madrid/6-4.jpg"
        },
        {
          "id": "ma6-4",
          "ru": "Тебе нравится?",
          "en": "Ça te plaît ?",
          "a11y": "Tom regarde Murzik goûter quelque chose et demande avec un sourire curieux.",
          "audioLabel": "Écouter Тебе нравится",
          "image": "/art/madrid/6-5.jpg"
        },
        {
          "id": "ma6-5",
          "ru": "сладкий",
          "en": "sucré",
          "a11y": "Des churros couverts de sucre dans une assiette.",
          "audioLabel": "Écouter сладкий",
          "image": "/art/madrid/6-6.jpg"
        },
        {
          "id": "ma6-6",
          "ru": "острый",
          "en": "piquant",
          "a11y": "Le visage de Murzik devient tout rouge après une bouchée de pommes de terre épicées. De petites flammes sortent de sa bouche.",
          "audioLabel": "Écouter острый",
          "image": "/art/madrid/6-7.jpg"
        },
        {
          "id": "ma6-7",
          "ru": "Попробуй!",
          "en": "Goûte !",
          "a11y": "Tom tend à Murzik une fourchette avec un morceau de tortilla.",
          "audioLabel": "Écouter Попробуй",
          "image": "/art/madrid/6-10.jpg"
        }
      ],
      "dialogue": {
        "title": "Une soirée tapas",
        "note": "En Espagne, la тортилья est une épaisse omelette aux pommes de terre. Соус, c'est une sauce.",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Мурзик, попробуй! Это тортилья.",
            "en": "Murzik, goûte ! C'est de la tortilla."
          },
          {
            "speaker": "murzik",
            "ru": "Ммм! Вкусно! Мне нравится.",
            "en": "Mmm ! Délicieux ! J'aime ça."
          },
          {
            "speaker": "tom",
            "ru": "А это острый соус.",
            "en": "Et ça, c'est une sauce piquante."
          },
          {
            "speaker": "murzik",
            "ru": "Ой! Очень острый! Мне не нравится.",
            "en": "Oh ! Très piquant ! Je n'aime pas."
          },
          {
            "speaker": "tom",
            "ru": "А вот горячий шоколад. Тебе нравится?",
            "en": "Et voici du chocolat chaud. Ça te plaît ?"
          },
          {
            "speaker": "murzik",
            "ru": "Сладкий! Очень нравится!",
            "en": "C'est sucré ! J'adore !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "ma6-d1",
          "prompt": "Qu'est-ce que Murzik n'aime pas ?",
          "options": [
            {
              "label": "La sauce piquante.",
              "correct": true
            },
            {
              "label": "La tortilla.",
              "correct": false
            },
            {
              "label": "Le chocolat chaud.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Мне нравится …",
          "paragraphs": [
            "Мне нравится + la chose. La chose ne change pas : Мне нравится паэлья. Мне нравится сыр.",
            "Compare : Я буду паэлью (je vais prendre) — mais Мне нравится паэлья (j'aime). Demande à un ami : Тебе нравится?",
            "Les adjectifs changent aussi : острый соус (masculin), острая паэлья (féminin)."
          ],
          "examples": [
            {
              "ru": "Мне нравится сыр.",
              "en": "J'aime le fromage."
            },
            {
              "ru": "Мне не нравится острый соус.",
              "en": "Je n'aime pas la sauce piquante."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "match",
          "id": "ma6-t1",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "сладкий",
              "right": "sucré"
            },
            {
              "left": "острый",
              "right": "piquant"
            },
            {
              "left": "Вкусно!",
              "right": "C'est bon !"
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ma6-t2",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "listening",
          "audio": "Тебе нравится?",
          "options": [
            {
              "label": "Да, очень вкусно!",
              "correct": true
            },
            {
              "label": "Я буду суп.",
              "correct": false
            },
            {
              "label": "Можно картой?",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ma6-t3",
          "prompt": "Trouve la phrase correcte.",
          "skill": "grammar",
          "options": [
            {
              "label": "Мне нравится паэлья.",
              "correct": true
            },
            {
              "label": "Мне нравится паэлью.",
              "correct": false
            },
            {
              "label": "Я нравится паэлья.",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "ma6-t4",
          "prompt": "Quelle lettre manque ? (piquant)",
          "before": "ост",
          "after": "ый",
          "answer": "р",
          "options": [
            "р",
            "л",
            "н"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "ma6-t5",
          "prompt": "Попробуй! Тебе нравится?",
          "model": "Да, вкусно! Мне нравится.",
          "modelEn": "Oui, c'est bon ! J'aime ça.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Goûte et réagis à voix haute."
        },
        {
          "kind": "choice",
          "id": "ma6-t6",
          "prompt": "Écoute. Qu'est-ce que ça veut dire ?",
          "skill": "review",
          "audio": "Только наличными.",
          "options": [
            {
              "label": "En espèces seulement.",
              "correct": true
            },
            {
              "label": "Par carte, s'il vous plaît.",
              "correct": false
            },
            {
              "label": "Voici votre monnaie.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "lantern",
        "itemName": "Lanterne",
        "itemNameRu": "Фонарь",
        "ru": "Ура! Фонарь для балкона!",
        "en": "Youpi ! Une lanterne pour le balcon !",
        "a11y": "Le soir, une petite lanterne en métal aux vitres colorées brille sur la table ronde du balcon de Murzik.",
        "image": "/art/madrid/reward-6.jpg",
        "steps": [
          "Le bar à tapas a des lanternes colorées.",
          "Le patron en donne une petite à Murzik.",
          "À la maison, il la pose sur la table du balcon.",
          "Le soir, elle brille en rouge, bleu et jaune."
        ],
        "bridge": "Demain, c'est le dernier jour à Madrid. Murzik a une idée : ils peuvent préparer le dîner eux-mêmes."
      }
    },
    {
      "id": "a1-madrid-7",
      "level": "A1",
      "cityId": "madrid",
      "number": 7,
      "title": "On cuisine à la maison",
      "minutes": 5,
      "goals": [
        "Proposer de cuisiner ensemble",
        "Dire ce qu'il faut",
        "Demander de l'aide et dire « C'est prêt ! »"
      ],
      "vocabNote": "Нужен, нужна, нужны veulent tous dire « nécessaire ». La terminaison dépend de la chose dont on a besoin.",
      "vocab": [
        {
          "id": "ma7-1",
          "ru": "Давай приготовим ужин!",
          "en": "Préparons le dîner !",
          "a11y": "Dans une cuisine madrilène ensoleillée, Murzik noue un petit tablier et lève une cuillère en bois.",
          "audioLabel": "Écouter Давай приготовим ужин",
          "image": "/art/madrid/7-1.jpg"
        },
        {
          "id": "ma7-2",
          "ru": "Что нам нужно?",
          "en": "De quoi avons-nous besoin ?",
          "a11y": "Tom et Murzik regardent dans un réfrigérateur presque vide.",
          "audioLabel": "Écouter Что нам нужно",
          "image": "/art/madrid/7-2.jpg"
        },
        {
          "id": "ma7-3",
          "ru": "Нужны яйца.",
          "en": "Il faut des œufs.",
          "a11y": "Une boîte de six œufs sur la table de la cuisine.",
          "audioLabel": "Écouter Нужны яйца",
          "image": "/art/madrid/7-3.jpg"
        },
        {
          "id": "ma7-4",
          "ru": "Нужна картошка.",
          "en": "Il faut des pommes de terre.",
          "a11y": "Un petit sac de pommes de terre par terre dans la cuisine.",
          "audioLabel": "Écouter Нужна картошка",
          "image": "/art/madrid/7-4.jpg"
        },
        {
          "id": "ma7-5",
          "ru": "Нужен лук.",
          "en": "Il faut un oignon.",
          "a11y": "Un oignon doré sur une planche à découper.",
          "audioLabel": "Écouter Нужен лук",
          "image": "/art/madrid/7-5.jpg"
        },
        {
          "id": "ma7-6",
          "ru": "Помоги мне!",
          "en": "Aide-moi !",
          "a11y": "Murzik a du mal à soulever une grande poêle et regarde Tom.",
          "audioLabel": "Écouter Помоги мне",
          "image": "/art/madrid/7-7.jpg"
        },
        {
          "id": "ma7-7",
          "ru": "Готово!",
          "en": "C'est prêt !",
          "a11y": "Murzik montre fièrement une tortilla espagnole bien dorée dans une assiette.",
          "audioLabel": "Écouter Готово",
          "image": "/art/madrid/7-9.jpg"
        }
      ],
      "dialogue": {
        "title": "Dîner pour deux",
        "note": "Садись за стол! veut dire « À table ! ». Масло, ici, c'est l'huile.",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Том, давай приготовим ужин!",
            "en": "Tom, préparons le dîner !"
          },
          {
            "speaker": "tom",
            "ru": "Давай! Тортилью? Что нам нужно?",
            "en": "D'accord ! Une tortilla ? De quoi avons-nous besoin ?"
          },
          {
            "speaker": "murzik",
            "ru": "Нужны яйца, нужна картошка и нужен лук.",
            "en": "Il faut des œufs, des pommes de terre et un oignon."
          },
          {
            "speaker": "tom",
            "ru": "И масло.",
            "en": "Et de l'huile."
          },
          {
            "speaker": "murzik",
            "ru": "Том, помоги мне!",
            "en": "Tom, aide-moi !"
          },
          {
            "speaker": "murzik",
            "ru": "Готово! Садись за стол!",
            "en": "C'est prêt ! À table !"
          },
          {
            "speaker": "tom",
            "ru": "Ммм! Очень вкусно! Приятного аппетита!",
            "en": "Mmm ! Très bon ! Bon appétit !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "ma7-d1",
          "prompt": "Que cuisinent Tom et Murzik ?",
          "options": [
            {
              "label": "Une tortilla espagnole.",
              "correct": true
            },
            {
              "label": "Une paella.",
              "correct": false
            },
            {
              "label": "De la soupe.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Нужен, нужна, нужно, нужны",
          "paragraphs": [
            "Le mot « nécessaire » s'accorde avec la chose : нужен лук (masculin), нужна картошка (féminin), нужно масло (neutre), нужны яйца (pluriel).",
            "Qui en a besoin ? мне (moi), тебе (toi), нам (nous) : Что нам нужно? — De quoi avons-nous besoin ?"
          ],
          "examples": [
            {
              "ru": "Нужен лук.",
              "en": "Il faut un oignon."
            },
            {
              "ru": "Нужны яйца.",
              "en": "Il faut des œufs."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "ma7-t1",
          "prompt": "Écoute la conversation au café. Combien ça coûte ?",
          "skill": "listening",
          "help": "Voici ton test d'écoute de Madrid.",
          "audio": "Здравствуйте! Что вы хотите? — Мне чай, пожалуйста. И суп. — Что-нибудь ещё? — Нет, это всё. Сколько с меня? — Восемь евро.",
          "options": [
            {
              "label": "8 €",
              "correct": true
            },
            {
              "label": "18 €",
              "correct": false
            },
            {
              "label": "80 €",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "ma7-t2",
          "prompt": "Complète.",
          "before": "",
          "after": "лук.",
          "answer": "Нужен",
          "options": [
            "Нужен",
            "Нужна",
            "Нужны"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "ma7-t3",
          "prompt": "Complète.",
          "before": "",
          "after": "яйца.",
          "answer": "Нужны",
          "options": [
            "Нужны",
            "Нужен",
            "Нужна"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "ma7-t4",
          "prompt": "Forme le mot « pommes de terre ».",
          "word": "картошка",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "ma7-t5",
          "prompt": "Что нам нужно?",
          "model": "Нужны яйца и нужна картошка.",
          "modelEn": "Il faut des œufs et des pommes de terre.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Tu cuisines avec un ami. Réponds à voix haute."
        },
        {
          "kind": "choice",
          "id": "ma7-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Приятного аппетита!",
          "options": [
            {
              "label": "Спасибо!",
              "correct": true
            },
            {
              "label": "Следующий!",
              "correct": false
            },
            {
              "label": "Это дорого.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ma7-t7",
          "prompt": "Écoute. Qu'as-tu entendu ?",
          "skill": "review",
          "audio": "Сколько с меня?",
          "options": [
            {
              "label": "Сколько с меня?",
              "correct": true
            },
            {
              "label": "Сколько стоит?",
              "correct": false
            },
            {
              "label": "Можно картой?",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "paella-pan",
        "itemName": "Poêle à paella",
        "itemNameRu": "Сковорода",
        "ru": "Ура! Сковорода для паэльи!",
        "en": "Youpi ! Une poêle à paella !",
        "a11y": "Une grande poêle à paella ronde, à deux poignées, est accrochée au mur de la cuisine de l'appartement madrilène. Murzik la montre fièrement.",
        "image": "/art/madrid/reward-7.jpg",
        "steps": [
          "Après le dîner, Tom offre un cadeau à Murzik.",
          "C'est une grande poêle à paella ronde.",
          "Murzik l'accroche au mur de la cuisine.",
          "La prochaine fois, ils feront une paella !"
        ],
        "bridge": "L'appartement madrilène est plein de couleurs. Tom dit : « Prochain arrêt : Rome ! »"
      }
    }
  ],
  "story": {
    "home": {
      "name": "L'appartement de Murzik à Madrid",
      "nameRu": "Квартира в Мадриде",
      "image": "/art/madrid/home.jpg",
      "a11y": "Un petit appartement vide et ensoleillé à Madrid, aux murs blancs, avec une porte ouverte sur un petit balcon."
    },
    "keepsakeId": "fan",
    "welcomeRu": "Привет, Мадрид!",
    "welcomeEn": "Bonjour, Madrid !",
    "welcomeImage": "/art/madrid/arrival.jpg",
    "welcomeA11y": "Murzik et Tom arrivent à Madrid sous le soleil, sur la grande Plaza Mayor avec ses bâtiments rouges et ses arcades. Murzik enlève son écharpe au soleil.",
    "departureImage": "/art/madrid/departure.jpg",
    "departureA11y": "Murzik et Tom avec leurs valises à l'aéroport de Madrid. Murzik tient son éventail rouge.",
    "finale": [
      {
        "image": "/art/madrid/asya-painting.jpg",
        "a11y": "Dans le petit café madrilène, le vieux patron montre une petite aquarelle au mur : une chatte rousse sur un balcon ensoleillé, signée « Ася » dans le coin. Murzik et Tom la regardent.",
        "lines": [
          {
            "en": "Le dernier matin, Murzik retourne au petit café et pose des questions sur le tableau."
          },
          {
            "ru": "Это нарисовала Ася.",
            "en": "C'est Assia qui l'a peint."
          },
          {
            "en": "« Elle s'asseyait ici tous les matins, dit le patron. Elle parlait tout le temps de sa famille. Elle lui manquait beaucoup. »"
          }
        ]
      },
      {
        "image": "/art/madrid/finale-1.jpg",
        "a11y": "Murzik est sur le balcon de son appartement madrilène lumineux, avec une petite table, des chaises en osier, des fleurs, un tapis, une lanterne, un éventail au mur et une poêle à paella. Il tient l'éventail.",
        "lines": [
          {
            "en": "L'appartement madrilène de Murzik est plein de soleil et de couleurs."
          },
          {
            "en": "Il emballe son objet préféré pour l'emporter : l'éventail rouge."
          }
        ]
      },
      {
        "image": "/art/madrid/finale-2.jpg",
        "a11y": "Murzik et Tom font la fête sur une place ensoleillée de Madrid.",
        "lines": [
          {
            "ru": "Мадрид завершён!",
            "en": "Madrid, c'est fait !"
          },
          {
            "en": "7 / 7 leçons"
          },
          {
            "ru": "Уже три города!",
            "en": "Déjà trois villes !"
          },
          {
            "en": "Sa famille manquait à Assia. Et Murzik sait où vit une partie de la famille : sa tante, la fille d'Assia."
          }
        ]
      },
      {
        "image": "/art/madrid/departure.jpg",
        "a11y": "Murzik et Tom avec leurs valises à l'aéroport de Madrid. Murzik tient son éventail rouge.",
        "lines": [
          {
            "ru": "До свидания, Мадрид!",
            "en": "Au revoir, Madrid !"
          },
          {
            "ru": "Следующая остановка: Рим!",
            "en": "Prochain arrêt : Rome !"
          }
        ]
      },
      {
        "image": "/art/madrid/finale-4.jpg",
        "a11y": "Un petit avion survole la mer, de Madrid vers Rome.",
        "lines": [
          {
            "ru": "Мадрид → Рим",
            "en": "Madrid → Rome"
          }
        ]
      },
      {
        "image": "/art/madrid/finale-5.jpg",
        "a11y": "Murzik et Tom arrivent à Rome et lèvent les yeux vers le Colisée.",
        "lines": [
          {
            "ru": "Привет, Рим!",
            "en": "Bonjour, Rome !"
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
