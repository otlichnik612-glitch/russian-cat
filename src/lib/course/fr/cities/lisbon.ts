import type { CityPlan } from "../../types";

/** Lisbon in the French version of the Russian course (`ru` = Russian, `en` = French). Generated from the English version with French texts. */
export const lisbonFr: Pick<CityPlan, "lessons" | "story"> = {
  "lessons": [
    {
      "id": "a1-lisbon-1",
      "level": "A1",
      "cityId": "lisbon",
      "number": 1,
      "title": "Où travailles-tu ?",
      "minutes": 5,
      "goals": [
        "Demander où quelqu'un travaille",
        "Dire ton métier et où tu travailles",
        "Dire que tu cherches du travail"
      ],
      "vocabNote": "Tu connais Кем ты работаешь? depuis Rome (Tu fais quoi dans la vie ?). Где ты работаешь? demande où. Après в, les lieux finissent par -е : в журнале, в офисе, в банке.",
      "vocab": [
        {
          "id": "li1-1",
          "ru": "Где ты работаешь?",
          "en": "Où travailles-tu ?",
          "a11y": "Murzik pose la question à Tom dans un tramway jaune qui grimpe une rue en pente de Lisbonne.",
          "audioLabel": "Écouter Где ты работаешь",
          "image": "/art/lisbon/1-1.jpg"
        },
        {
          "id": "li1-2",
          "ru": "Я работаю в журнале.",
          "en": "Je travaille pour un magazine.",
          "a11y": "Dans un bureau, une femme montre un magazine de voyage sur papier glacé, avec la mer en couverture.",
          "audioLabel": "Écouter Я работаю в журнале",
          "image": "/art/lisbon/1-2.jpg"
        },
        {
          "id": "li1-3",
          "ru": "Я фотограф.",
          "en": "Je suis photographe.",
          "a11y": "Tom lève fièrement son appareil et prend une photo.",
          "audioLabel": "Écouter Я фотограф",
          "image": "/art/lisbon/1-3.jpg"
        },
        {
          "id": "li1-4",
          "ru": "Я ищу работу.",
          "en": "Je cherche du travail.",
          "a11y": "À une table de café, Tom parcourt des offres d'emploi sur son ordinateur portable.",
          "audioLabel": "Écouter Я ищу работу",
          "image": "/art/lisbon/1-4.jpg"
        },
        {
          "id": "li1-5",
          "ru": "Это интересная работа.",
          "en": "C'est un travail intéressant.",
          "a11y": "Tom photographie une rue colorée de Lisbonne, pleine d'azulejos et de fleurs.",
          "audioLabel": "Écouter Это интересная работа",
          "image": "/art/lisbon/1-5.jpg"
        },
        {
          "id": "li1-6",
          "ru": "Мне нравится моя работа.",
          "en": "J'aime mon travail.",
          "a11y": "Un boulanger heureux, en toque blanche, tient un plateau de pastéis de nata tout frais.",
          "audioLabel": "Écouter Мне нравится моя работа",
          "image": "/art/lisbon/1-6.jpg"
        },
        {
          "id": "li1-7",
          "ru": "У меня встреча.",
          "en": "J'ai un rendez-vous.",
          "a11y": "Tom montre une heure entourée dans son agenda, l'air nerveux.",
          "audioLabel": "Écouter У меня встреча",
          "image": "/art/lisbon/1-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Dans le tramway jaune",
        "note": "Пока нигде — nulle part pour l'instant. Не волнуйся!, tu le connais depuis Amsterdam.",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Том, а где ты работаешь?",
            "en": "Tom, où travailles-tu ?"
          },
          {
            "speaker": "tom",
            "ru": "Пока нигде. Я ищу работу.",
            "en": "Nulle part pour l'instant. Je cherche du travail."
          },
          {
            "speaker": "murzik",
            "ru": "А кем ты хочешь работать?",
            "en": "Et qu'est-ce que tu veux faire comme métier ?"
          },
          {
            "speaker": "tom",
            "ru": "Я фотограф! Это интересная работа.",
            "en": "Je suis photographe ! C'est un travail intéressant."
          },
          {
            "speaker": "tom",
            "ru": "Завтра у меня встреча. Здесь, в журнале.",
            "en": "Demain, j'ai un rendez-vous. Ici, au magazine."
          },
          {
            "speaker": "murzik",
            "ru": "Ого! Не волнуйся, Том!",
            "en": "Ouah ! Ne t'inquiète pas, Tom !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "li1-d1",
          "prompt": "Pourquoi Tom est-il à Lisbonne ?",
          "options": [
            {
              "label": "Il a un rendez-vous dans un magazine.",
              "correct": true
            },
            {
              "label": "Il travaille dans une banque ici.",
              "correct": false
            },
            {
              "label": "Il est en vacances.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Où ? — в + lieu en -е",
          "paragraphs": [
            "Pour dire où tu travailles, utilise в et change la terminaison en -е : журнал → в журнале, офис → в офисе, банк → в банке.",
            "Certains mots ne changent pas : в кафе, в метро."
          ],
          "examples": [
            {
              "ru": "Я работаю в офисе.",
              "en": "Je travaille dans un bureau."
            },
            {
              "ru": "Она работает в банке.",
              "en": "Elle travaille dans une banque."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "li1-t1",
          "prompt": "Écoute. Où travaille cette personne ?",
          "skill": "listening",
          "audio": "Я работаю в банке.",
          "options": [
            {
              "label": "Dans une banque.",
              "correct": true
            },
            {
              "label": "Dans un bureau.",
              "correct": false
            },
            {
              "label": "Dans un magazine.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "li1-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "Я ищу работу.",
              "right": "Je cherche du travail."
            },
            {
              "left": "У меня встреча.",
              "right": "J'ai un rendez-vous."
            },
            {
              "left": "Я фотограф.",
              "right": "Je suis photographe."
            }
          ]
        },
        {
          "kind": "fill",
          "id": "li1-t3",
          "prompt": "Complète : « Je travaille dans un bureau. »",
          "before": "Я работаю в",
          "after": ".",
          "answer": "офисе",
          "options": [
            "офисе",
            "офис",
            "офиса"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "li1-t4",
          "prompt": "Forme le mot « travail ».",
          "word": "работа",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "li1-t5",
          "prompt": "Где ты работаешь?",
          "model": "Я работаю в офисе.",
          "modelEn": "Je travaille dans un bureau.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Dis où tu travailles vraiment — ou que tu cherches du travail : Я ищу работу."
        },
        {
          "kind": "choice",
          "id": "li1-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Как ты себя чувствуешь?",
          "options": [
            {
              "label": "Мне уже лучше!",
              "correct": true
            },
            {
              "label": "Я ищу работу.",
              "correct": false
            },
            {
              "label": "У меня встреча.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "tram-model",
        "itemName": "Petit tramway",
        "itemNameRu": "Трамвайчик",
        "ru": "Ура! Маленький жёлтый трамвай!",
        "en": "Youpi ! Un petit tramway jaune !",
        "a11y": "Un petit tramway jaune en jouet est posé sur le rebord de la fenêtre de Murzik. Dehors, le vrai tramway jaune monte la colline.",
        "image": "/art/lisbon/reward-1.jpg",
        "steps": [
          "Leur chambre est dans une maison couverte d'azulejos bleus.",
          "Le tramway jaune passe juste devant la fenêtre.",
          "Dans une petite boutique, Murzik trouve un tramway en jouet, exactement pareil.",
          "Il le pose sur le rebord de la fenêtre."
        ],
        "bridge": "Le soir, ils rencontrent Katia, une étudiante russe qui habite à côté."
      }
    },
    {
      "id": "a1-lisbon-2",
      "level": "A1",
      "cityId": "lisbon",
      "number": 2,
      "title": "Je suis étudiante",
      "minutes": 5,
      "goals": [
        "Dire où tu étudies",
        "Demander ce que quelqu'un étudie",
        "Dire si c'est difficile ou facile"
      ],
      "vocabNote": "Учиться, c'est étudier (dans un lieu) : Я учусь в университете. Изучать, c'est étudier une matière : Я изучаю историю. Un étudiant se dit студент, une étudiante студентка.",
      "vocab": [
        {
          "id": "li2-1",
          "ru": "Я учусь в университете.",
          "en": "J'étudie à l'université.",
          "a11y": "Une jeune femme avec un sac à dos entre dans un vieux bâtiment universitaire.",
          "audioLabel": "Écouter Я учусь в университете",
          "image": "/art/lisbon/2-1.jpg"
        },
        {
          "id": "li2-2",
          "ru": "Что ты изучаешь?",
          "en": "Qu'est-ce que tu étudies ?",
          "a11y": "Murzik regarde une pile de gros livres, l'air curieux.",
          "audioLabel": "Écouter Что ты изучаешь",
          "image": "/art/lisbon/2-2.jpg"
        },
        {
          "id": "li2-3",
          "ru": "Я изучаю историю.",
          "en": "J'étudie l'histoire.",
          "a11y": "Un livre d'histoire ouvert sur une image de vieux navires quittant Lisbonne.",
          "audioLabel": "Écouter Я изучаю историю",
          "image": "/art/lisbon/2-3.jpg"
        },
        {
          "id": "li2-4",
          "ru": "студент / студентка",
          "en": "étudiant / étudiante",
          "a11y": "Un jeune homme et une jeune femme, tous deux avec des sacs à dos et des livres, sourient côte à côte.",
          "audioLabel": "Écouter студент / студентка",
          "image": "/art/lisbon/2-4.jpg"
        },
        {
          "id": "li2-5",
          "ru": "на первом курсе",
          "en": "en première année",
          "a11y": "Un grand chiffre 1 sur une porte de l'université.",
          "audioLabel": "Écouter на первом курсе",
          "image": "/art/lisbon/2-5.jpg"
        },
        {
          "id": "li2-6",
          "ru": "Это трудно?",
          "en": "C'est difficile ?",
          "a11y": "Murzik regarde un énorme livre avec de grands yeux inquiets.",
          "audioLabel": "Écouter Это трудно",
          "image": "/art/lisbon/2-6.jpg"
        },
        {
          "id": "li2-7",
          "ru": "Мне нравится учиться.",
          "en": "J'aime étudier.",
          "a11y": "Katia lit au soleil sur les marches de l'université, avec un sourire heureux.",
          "audioLabel": "Écouter Мне нравится учиться",
          "image": "/art/lisbon/2-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Katia, la voisine",
        "note": "Катя vient de Novossibirsk. Но интересно — mais c'est intéressant.",
        "lines": [
          {
            "speaker": "katya",
            "ru": "Привет! Я Катя. Я тоже из России.",
            "en": "Salut ! Je suis Katia. Moi aussi, je viens de Russie."
          },
          {
            "speaker": "murzik",
            "ru": "Привет! Ты здесь работаешь?",
            "en": "Salut ! Tu travailles ici ?"
          },
          {
            "speaker": "katya",
            "ru": "Нет, я студентка. Я учусь в университете.",
            "en": "Non, je suis étudiante. J'étudie à l'université."
          },
          {
            "speaker": "tom",
            "ru": "А что ты изучаешь?",
            "en": "Et qu'est-ce que tu étudies ?"
          },
          {
            "speaker": "katya",
            "ru": "Я изучаю историю. Я на первом курсе.",
            "en": "J'étudie l'histoire. Je suis en première année."
          },
          {
            "speaker": "murzik",
            "ru": "Это трудно?",
            "en": "C'est difficile ?"
          },
          {
            "speaker": "katya",
            "ru": "Немного. Но мне нравится учиться!",
            "en": "Un peu. Mais j'aime étudier !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "li2-d1",
          "prompt": "Qu'étudie Katia ?",
          "options": [
            {
              "label": "L'histoire.",
              "correct": true
            },
            {
              "label": "Le russe.",
              "correct": false
            },
            {
              "label": "La photographie.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Учусь et изучаю",
          "paragraphs": [
            "Учиться — étudier quelque part : я учусь, ты учишься. Я учусь в университете.",
            "Изучать — étudier une matière : я изучаю, ты изучаешь. Я изучаю русский язык."
          ],
          "examples": [
            {
              "ru": "Где ты учишься?",
              "en": "Où étudies-tu ?"
            },
            {
              "ru": "Я изучаю русский.",
              "en": "J'étudie le russe."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "li2-t1",
          "prompt": "Écoute. Qu'étudie cette personne ?",
          "skill": "listening",
          "audio": "Я изучаю русский язык.",
          "options": [
            {
              "label": "Le russe.",
              "correct": true
            },
            {
              "label": "L'histoire.",
              "correct": false
            },
            {
              "label": "L'anglais.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "li2-t2",
          "prompt": "Katia est une femme qui étudie à l'université. Qu'est-elle ?",
          "skill": "words",
          "options": [
            {
              "label": "студентка",
              "correct": true
            },
            {
              "label": "студент",
              "correct": false
            },
            {
              "label": "учительница",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "li2-t3",
          "prompt": "Complète : « J'étudie à l'université. »",
          "before": "Я",
          "after": "в университете.",
          "answer": "учусь",
          "options": [
            "учусь",
            "изучаю",
            "учишься"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "li2-t4",
          "prompt": "Quelle lettre manque ? (histoire)",
          "before": "ист",
          "after": "рия",
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
          "id": "li2-t5",
          "prompt": "Что ты изучаешь?",
          "model": "Я изучаю русский язык.",
          "modelEn": "J'étudie le russe.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Réponds honnêtement — tu es justement en train d'étudier le russe !"
        },
        {
          "kind": "choice",
          "id": "li2-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Где ты работаешь?",
          "options": [
            {
              "label": "Я работаю в офисе.",
              "correct": true
            },
            {
              "label": "Я изучаю историю.",
              "correct": false
            },
            {
              "label": "Это трудно?",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "desk-lamp",
        "itemName": "Lampe de bureau",
        "itemNameRu": "Настольная лампа",
        "ru": "Ура! Настольная лампа!",
        "en": "Youpi ! Une lampe de bureau !",
        "a11y": "Une petite lampe de bureau verte éclaire le carnet de croquis de Murzik sur une petite table près de la fenêtre.",
        "image": "/art/lisbon/reward-2.jpg",
        "steps": [
          "Katia a deux lampes de bureau.",
          "« Une pour toi », dit-elle.",
          "Elle est verte, comme le manteau de Tom.",
          "Maintenant, Murzik peut dessiner le soir."
        ],
        "bridge": "Tom veut savoir : comment se passe une journée de travail normale dans un magazine ?"
      }
    },
    {
      "id": "a1-lisbon-3",
      "level": "A1",
      "cityId": "lisbon",
      "number": 3,
      "title": "Ma journée de travail",
      "minutes": 6,
      "goals": [
        "Dire quand tu te lèves",
        "Dire quand tu commences et finis le travail",
        "Parler d'un jour de congé"
      ],
      "vocabNote": "Встаю est un peu irrégulier : я встаю, ты встаёшь. Выходной veut dire « un jour de congé ».",
      "vocab": [
        {
          "id": "li3-1",
          "ru": "Когда ты встаёшь?",
          "en": "Tu te lèves quand ?",
          "a11y": "En pyjama, Murzik bâille à côté d'un réveil.",
          "audioLabel": "Écouter Когда ты встаёшь",
          "image": "/art/lisbon/3-1.jpg"
        },
        {
          "id": "li3-2",
          "ru": "Я встаю в семь.",
          "en": "Je me lève à sept heures.",
          "a11y": "Katia s'étire près d'une fenêtre ; une horloge indique sept heures.",
          "audioLabel": "Écouter Я встаю в семь",
          "image": "/art/lisbon/3-2.jpg"
        },
        {
          "id": "li3-3",
          "ru": "Я начинаю в девять.",
          "en": "Je commence à neuf heures.",
          "a11y": "Katia noue son tablier de café ; l'horloge au mur indique neuf heures.",
          "audioLabel": "Écouter Я начинаю в девять",
          "image": "/art/lisbon/3-3.jpg"
        },
        {
          "id": "li3-4",
          "ru": "В час — обед.",
          "en": "Le déjeuner est à une heure.",
          "a11y": "Une assiette de sardines grillées et de salade sur une table de café ensoleillée.",
          "audioLabel": "Écouter В час — обед",
          "image": "/art/lisbon/3-4.jpg"
        },
        {
          "id": "li3-5",
          "ru": "Я заканчиваю в шесть.",
          "en": "Je finis à six heures.",
          "a11y": "Katia enlève son tablier et dit au revoir ; une horloge indique six heures.",
          "audioLabel": "Écouter Я заканчиваю в шесть",
          "image": "/art/lisbon/3-5.jpg"
        },
        {
          "id": "li3-6",
          "ru": "рабочий день",
          "en": "journée de travail",
          "a11y": "Une horloge, un ordinateur portable et une tasse de café sur un bureau très occupé.",
          "audioLabel": "Écouter рабочий день",
          "image": "/art/lisbon/3-6.jpg"
        },
        {
          "id": "li3-7",
          "ru": "Сегодня выходной!",
          "en": "Aujourd'hui, c'est congé !",
          "a11y": "Katia est allongée sur une serviette au bord de l'océan, avec des lunettes de soleil.",
          "audioLabel": "Écouter Сегодня выходной",
          "image": "/art/lisbon/3-7.jpg"
        }
      ],
      "dialogue": {
        "title": "La journée de Katia",
        "note": "Katia étudie le matin et travaille dans un café l'après-midi. Тяжело — dur, fatigant.",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Катя, когда ты встаёшь?",
            "en": "Katia, tu te lèves quand ?"
          },
          {
            "speaker": "katya",
            "ru": "Я встаю в семь. Утром я учусь.",
            "en": "Je me lève à sept heures. Le matin, j'étudie."
          },
          {
            "speaker": "murzik",
            "ru": "А потом?",
            "en": "Et ensuite ?"
          },
          {
            "speaker": "katya",
            "ru": "В час — обед. Потом я работаю в кафе. Я начинаю в два и заканчиваю в шесть.",
            "en": "Le déjeuner est à une heure. Ensuite, je travaille dans un café. Je commence à deux heures et je finis à six heures."
          },
          {
            "speaker": "tom",
            "ru": "Ого! Тяжело!",
            "en": "Ouah ! C'est dur !"
          },
          {
            "speaker": "katya",
            "ru": "Да. Но в воскресенье у меня выходной!",
            "en": "Oui. Mais le dimanche, j'ai congé !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "li3-d1",
          "prompt": "Quand Katia finit-elle le travail ?",
          "options": [
            {
              "label": "À six heures.",
              "correct": true
            },
            {
              "label": "À deux heures.",
              "correct": false
            },
            {
              "label": "À une heure.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Встаю, начинаю, заканчиваю",
          "paragraphs": [
            "я встаю, ты встаёшь. я начинаю, ты начинаешь. я заканчиваю, ты заканчиваешь.",
            "Ajoute l'heure avec в : Я встаю в семь. Я начинаю в девять."
          ],
          "examples": [
            {
              "ru": "Когда ты начинаешь работать?",
              "en": "Tu commences le travail quand ?"
            },
            {
              "ru": "Я заканчиваю в пять.",
              "en": "Je finis à cinq heures."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "li3-t1",
          "prompt": "Écoute. Quand cette personne se lève-t-elle ?",
          "skill": "listening",
          "audio": "Я встаю в шесть.",
          "options": [
            {
              "label": "À six heures.",
              "correct": true
            },
            {
              "label": "À sept heures.",
              "correct": false
            },
            {
              "label": "À neuf heures.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "li3-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "обед",
              "right": "déjeuner"
            },
            {
              "left": "выходной",
              "right": "jour de congé"
            },
            {
              "left": "рабочий день",
              "right": "journée de travail"
            }
          ]
        },
        {
          "kind": "fill",
          "id": "li3-t3",
          "prompt": "Complète : « Tu te lèves quand ? »",
          "before": "Когда ты",
          "after": "?",
          "answer": "встаёшь",
          "options": [
            "встаёшь",
            "встаю",
            "встаёт"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "li3-t4",
          "prompt": "Forme le mot « déjeuner ».",
          "word": "обед",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "li3-t5",
          "prompt": "Когда ты встаёшь?",
          "model": "Я встаю в семь.",
          "modelEn": "Je me lève à sept heures.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Dis à quelle heure tu te lèves vraiment."
        },
        {
          "kind": "choice",
          "id": "li3-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Что ты изучаешь?",
          "options": [
            {
              "label": "Я изучаю русский.",
              "correct": true
            },
            {
              "label": "Я встаю в семь.",
              "correct": false
            },
            {
              "label": "Сегодня выходной!",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "coffee-pot",
        "itemName": "Cafetière",
        "itemNameRu": "Кофеварка",
        "ru": "Ура! Кофеварка!",
        "en": "Youpi ! Une petite cafetière !",
        "a11y": "Une petite cafetière italienne argentée fume sur un minuscule réchaud dans la chambre de Murzik.",
        "image": "/art/lisbon/reward-3.jpg",
        "steps": [
          "Le rendez-vous de Tom est tôt le matin.",
          "Il lui faut du café !",
          "Katia leur prête sa petite cafetière.",
          "La chambre sent merveilleusement bon."
        ],
        "bridge": "Aujourd'hui, c'est le grand jour : l'entretien de Tom au magazine."
      }
    },
    {
      "id": "a1-lisbon-4",
      "level": "A1",
      "cityId": "lisbon",
      "number": 4,
      "title": "L'entretien",
      "minutes": 6,
      "goals": [
        "Répondre à « Parlez-moi de vous »",
        "Dire que tu as de l'expérience",
        "Dire pourquoi : потому что"
      ],
      "vocabNote": "Почему? veut dire « pourquoi ? ». On répond avec потому что — « parce que ».",
      "vocab": [
        {
          "id": "li4-1",
          "ru": "Расскажите о себе.",
          "en": "Parlez-moi de vous.",
          "a11y": "La rédactrice, une femme sûre d'elle aux cheveux courts et bruns, est assise en face de Tom, de l'autre côté du bureau.",
          "audioLabel": "Écouter Расскажите о себе",
          "image": "/art/lisbon/4-1.jpg"
        },
        {
          "id": "li4-2",
          "ru": "Я фотографирую путешествия.",
          "en": "Je photographie des voyages.",
          "a11y": "Un mur de photos de Tom : Paris, Londres, Madrid, Rome, Berlin, Amsterdam, Vienne, Prague.",
          "audioLabel": "Écouter Я фотографирую путешествия",
          "image": "/art/lisbon/4-2.jpg"
        },
        {
          "id": "li4-3",
          "ru": "У меня есть опыт.",
          "en": "J'ai de l'expérience.",
          "a11y": "Tom se tient bien droit et sourit avec assurance, les mains posées sur un book.",
          "audioLabel": "Écouter У меня есть опыт",
          "image": "/art/lisbon/4-3.jpg"
        },
        {
          "id": "li4-4",
          "ru": "Хороший ответ!",
          "en": "Bonne réponse !",
          "a11y": "La rédactrice sourit et hoche la tête en cochant son carnet.",
          "audioLabel": "Écouter Хороший ответ",
          "image": "/art/lisbon/4-4b.jpg"
        },
        {
          "id": "li4-5",
          "ru": "Почему вы хотите эту работу?",
          "en": "Pourquoi voulez-vous ce poste ?",
          "a11y": "La rédactrice se penche en avant, un stylo à la main, l'air curieux.",
          "audioLabel": "Écouter Почему вы хотите эту работу",
          "image": "/art/lisbon/4-5.jpg"
        },
        {
          "id": "li4-6",
          "ru": "Потому что я люблю путешествовать.",
          "en": "Parce que j'adore voyager.",
          "a11y": "Tom ouvre grand les bras devant une carte du monde.",
          "audioLabel": "Écouter Потому что я люблю путешествовать",
          "image": "/art/lisbon/4-6.jpg"
        },
        {
          "id": "li4-7",
          "ru": "Мы вам позвоним.",
          "en": "Nous vous appellerons.",
          "a11y": "La rédactrice serre la main de Tom à la porte du bureau.",
          "audioLabel": "Écouter Мы вам позвоним",
          "image": "/art/lisbon/4-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Au magazine",
        "note": "Tom répond à toutes les questions (отвечать — répondre). Он везде — il est partout.",
        "lines": [
          {
            "speaker": "editor",
            "ru": "Здравствуйте, Том! Расскажите о себе.",
            "en": "Bonjour, Tom ! Parlez-moi de vous."
          },
          {
            "speaker": "tom",
            "ru": "Я фотограф. Я фотографирую путешествия. Вот мои фотографии.",
            "en": "Je suis photographe. Je photographie des voyages. Voici mes photos."
          },
          {
            "speaker": "editor",
            "ru": "Очень красиво! А у вас есть опыт?",
            "en": "Très beau ! Et vous avez de l'expérience ?"
          },
          {
            "speaker": "tom",
            "ru": "Да, у меня есть опыт. Восемь городов!",
            "en": "Oui, j'ai de l'expérience. Huit villes !"
          },
          {
            "speaker": "editor",
            "ru": "А почему вы хотите эту работу?",
            "en": "Et pourquoi voulez-vous ce poste ?"
          },
          {
            "speaker": "tom",
            "ru": "Потому что я люблю путешествовать.",
            "en": "Parce que j'adore voyager."
          },
          {
            "speaker": "editor",
            "ru": "Хороший ответ! А кто этот рыжий кот? Он везде! Хорошо. Мы вам позвоним.",
            "en": "Et qui est ce chat roux ? Il est partout ! Bien. Nous vous appellerons."
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "li4-d1",
          "prompt": "Pourquoi Tom veut-il ce poste ?",
          "options": [
            {
              "label": "Parce qu'il adore voyager.",
              "correct": true
            },
            {
              "label": "Parce qu'il a besoin d'argent.",
              "correct": false
            },
            {
              "label": "Parce qu'il habite à Lisbonne.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Почему? — Потому что…",
          "paragraphs": [
            "Почему? — Pourquoi ? Потому что… — Parce que…",
            "Почему ты учишь русский? — Потому что я люблю Россию. / Потому что у меня русская семья."
          ],
          "examples": [
            {
              "ru": "Почему ты здесь? — Потому что у меня встреча.",
              "en": "Pourquoi es-tu ici ? — Parce que j'ai un rendez-vous."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "li4-t1",
          "prompt": "Écoute. Que demande la rédactrice ?",
          "skill": "listening",
          "audio": "Расскажите о себе.",
          "options": [
            {
              "label": "Parlez-moi de vous.",
              "correct": true
            },
            {
              "label": "Montrez-moi vos photos.",
              "correct": false
            },
            {
              "label": "Pourquoi voulez-vous ce poste ?",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "li4-t2",
          "prompt": "Que veut dire опыт ?",
          "skill": "words",
          "options": [
            {
              "label": "l'expérience",
              "correct": true
            },
            {
              "label": "une photo",
              "correct": false
            },
            {
              "label": "un voyage",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "li4-t3",
          "prompt": "Complète : « Parce que j'adore voyager. »",
          "before": "",
          "after": "я люблю путешествовать.",
          "answer": "Потому что",
          "options": [
            "Потому что",
            "Почему",
            "Что"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "li4-t4",
          "prompt": "Quelle lettre manque ? (expérience)",
          "before": "оп",
          "after": "т",
          "answer": "ы",
          "options": [
            "ы",
            "и",
            "е"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "li4-t5",
          "prompt": "Почему ты учишь русский?",
          "model": "Потому что я люблю русский язык.",
          "modelEn": "Parce que j'adore la langue russe.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Donne ta vraie raison, en commençant par Потому что…"
        },
        {
          "kind": "choice",
          "id": "li4-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Когда ты встаёшь?",
          "options": [
            {
              "label": "Я встаю в семь.",
              "correct": true
            },
            {
              "label": "Потому что я люблю путешествовать.",
              "correct": false
            },
            {
              "label": "Мы вам позвоним.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "photo-frame",
        "itemName": "Cadre photo",
        "itemNameRu": "Рамка",
        "ru": "Ура! Фото в рамке!",
        "en": "Youpi ! Une photo encadrée !",
        "a11y": "Au mur de Murzik est accrochée une photo encadrée prise par Tom : Murzik sur le pont Charles avec son bonnet bleu.",
        "image": "/art/lisbon/reward-4.jpg",
        "steps": [
          "Tom choisit sa photo préférée.",
          "Murzik sur le pont à Prague, avec son bonnet bleu.",
          "Il la met dans un cadre.",
          "Elle est accrochée au mur : la meilleure photo de Tom."
        ],
        "bridge": "Deux jours plus tard, le téléphone sonne. Tom regarde l'écran… C'est le magazine !"
      }
    },
    {
      "id": "a1-lisbon-5",
      "level": "A1",
      "cityId": "lisbon",
      "number": 5,
      "title": "Bonne nouvelle !",
      "minutes": 6,
      "goals": [
        "Annoncer une bonne nouvelle",
        "Féliciter un ami",
        "Demander quand quelque chose commence"
      ],
      "vocabNote": "Меня взяли! veut dire mot à mot « Ils m'ont pris ! » — c'est comme ça que les Russes disent « J'ai eu le poste ! ». C'est la même forme pour tout le monde.",
      "vocab": [
        {
          "id": "li5-1",
          "ru": "Хорошая новость!",
          "en": "Bonne nouvelle !",
          "a11y": "Tom entre en courant dans la chambre, son téléphone à la main et un immense sourire aux lèvres.",
          "audioLabel": "Écouter Хорошая новость",
          "image": "/art/lisbon/5-1.jpg"
        },
        {
          "id": "li5-2",
          "ru": "Меня взяли!",
          "en": "J'ai eu le poste !",
          "a11y": "Tom saute très haut, les deux bras en l'air.",
          "audioLabel": "Écouter Меня взяли",
          "image": "/art/lisbon/5-2.jpg"
        },
        {
          "id": "li5-3",
          "ru": "Поздравляю!",
          "en": "Félicitations !",
          "a11y": "Murzik serre Tom très fort dans ses bras.",
          "audioLabel": "Écouter Поздравляю",
          "image": "/art/lisbon/5-3.jpg"
        },
        {
          "id": "li5-4",
          "ru": "Получилось!",
          "en": "Ça a marché !",
          "a11y": "Murzik et Tom se tapent dans la main.",
          "audioLabel": "Écouter Получилось",
          "image": "/art/lisbon/5-4.jpg"
        },
        {
          "id": "li5-5",
          "ru": "Когда начинать?",
          "en": "Je commence quand ?",
          "a11y": "Au téléphone, Tom tient un calendrier, l'air curieux.",
          "audioLabel": "Écouter Когда начинать",
          "image": "/art/lisbon/5-5.jpg"
        },
        {
          "id": "li5-6",
          "ru": "С понедельника.",
          "en": "À partir de lundi.",
          "a11y": "Un calendrier mural avec le lundi entouré en vert.",
          "audioLabel": "Écouter С понедельника",
          "image": "/art/lisbon/5-6.jpg"
        },
        {
          "id": "li5-7",
          "ru": "Надо отметить!",
          "en": "Il faut fêter ça !",
          "a11y": "Katia montre une boîte à gâteau avec un grand sourire.",
          "audioLabel": "Écouter Надо отметить",
          "image": "/art/lisbon/5-7.jpg"
        }
      ],
      "dialogue": {
        "title": "L'appel",
        "note": "Tom est un homme, il dit donc Я так рад! (une femme dit рада — comme « content » et « contente »). Алло, c'est ainsi que les Russes répondent au téléphone.",
        "lines": [
          {
            "speaker": "editor",
            "ru": "Алло, Том? Это журнал. У нас хорошая новость!",
            "en": "Allô, Tom ? Ici le magazine. Nous avons une bonne nouvelle !"
          },
          {
            "speaker": "tom",
            "ru": "Правда? Меня взяли?",
            "en": "C'est vrai ? J'ai eu le poste ?"
          },
          {
            "speaker": "editor",
            "ru": "Да! Поздравляю!",
            "en": "Oui ! Félicitations !"
          },
          {
            "speaker": "tom",
            "ru": "Ура! Я так рад! А когда начинать?",
            "en": "Youpi ! Je suis si content ! Et je commence quand ?"
          },
          {
            "speaker": "editor",
            "ru": "С понедельника.",
            "en": "À partir de lundi."
          },
          {
            "speaker": "murzik",
            "ru": "Том! Получилось!",
            "en": "Tom ! Tu as réussi !"
          },
          {
            "speaker": "katya",
            "ru": "Поздравляю! Надо отметить!",
            "en": "Félicitations ! Il faut fêter ça !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "li5-d1",
          "prompt": "Quand Tom commence-t-il le travail ?",
          "options": [
            {
              "label": "Lundi.",
              "correct": true
            },
            {
              "label": "Demain.",
              "correct": false
            },
            {
              "label": "Le mois prochain.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "С понедельника — à partir de lundi",
          "paragraphs": [
            "С + un jour veut dire « à partir de » : с понедельника, с пятницы, с субботы. La terminaison change : понедельник → с понедельника, пятница → с пятницы.",
            "До veut dire « jusqu'à » : с понедельника до пятницы — du lundi au vendredi."
          ],
          "examples": [
            {
              "ru": "Я работаю с понедельника до пятницы.",
              "en": "Je travaille du lundi au vendredi."
            },
            {
              "ru": "С субботы у меня отпуск.",
              "en": "À partir de samedi, je suis en vacances."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "li5-t1",
          "prompt": "Écoute. Quand commence le travail ?",
          "skill": "listening",
          "audio": "Начинать с пятницы.",
          "options": [
            {
              "label": "À partir de vendredi.",
              "correct": true
            },
            {
              "label": "À partir de lundi.",
              "correct": false
            },
            {
              "label": "À partir de samedi.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "li5-t2",
          "prompt": "Ton ami a trouvé un nouveau travail. Que dis-tu ?",
          "skill": "words",
          "options": [
            {
              "label": "Поздравляю!",
              "correct": true
            },
            {
              "label": "Мы вам позвоним.",
              "correct": false
            },
            {
              "label": "Это трудно?",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "li5-t3",
          "prompt": "Comment dit-on « du lundi au vendredi » ?",
          "skill": "grammar",
          "options": [
            {
              "label": "с понедельника до пятницы",
              "correct": true
            },
            {
              "label": "в понедельник до пятница",
              "correct": false
            },
            {
              "label": "с понедельник в пятницу",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "li5-t4",
          "prompt": "Forme le mot « nouvelle ».",
          "word": "новость",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "li5-t5",
          "prompt": "Меня взяли!",
          "model": "Поздравляю! Надо отметить!",
          "modelEn": "Félicitations ! Il faut fêter ça !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Ton ami a eu le poste. Félicite-le à voix haute."
        },
        {
          "kind": "choice",
          "id": "li5-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Почему вы хотите эту работу?",
          "options": [
            {
              "label": "Потому что я люблю путешествовать.",
              "correct": true
            },
            {
              "label": "С понедельника.",
              "correct": false
            },
            {
              "label": "Поздравляю!",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "world-map",
        "itemName": "Carte du monde",
        "itemNameRu": "Карта мира",
        "ru": "Ура! Большая карта мира!",
        "en": "Youpi ! Une grande carte du monde !",
        "a11y": "Une grande carte du monde est accrochée au mur de Murzik. De petites punaises rouges marquent Paris, Londres, Madrid, Rome, Berlin, Amsterdam, Vienne, Prague et Lisbonne.",
        "image": "/art/lisbon/reward-5.jpg",
        "steps": [
          "Le magazine envoie un cadeau à Tom.",
          "Une grande carte du monde.",
          "Murzik plante une punaise rouge sur chaque ville où ils sont allés.",
          "Déjà neuf punaises !"
        ],
        "bridge": "Lundi : le premier jour de Tom au magazine. Murzik l'accompagne."
      }
    },
    {
      "id": "a1-lisbon-6",
      "level": "A1",
      "cityId": "lisbon",
      "number": 6,
      "title": "Premier jour de travail",
      "minutes": 6,
      "goals": [
        "Présenter un nouveau collègue",
        "Parler du bureau et du chef",
        "Souhaiter la bienvenue dans l'équipe"
      ],
      "vocabNote": "Знакомьтесь! est le « Je vous présente… ! » poli ou pluriel (tu connais Познакомься depuis Rome). Коллега peut être un homme ou une femme.",
      "vocab": [
        {
          "id": "li6-1",
          "ru": "Знакомьтесь, это наш новый фотограф.",
          "en": "Je vous présente notre nouveau photographe.",
          "a11y": "La rédactrice présente Tom à un groupe souriant dans un bureau lumineux.",
          "audioLabel": "Écouter Знакомьтесь, это наш новый фотограф",
          "image": "/art/lisbon/6-1.jpg"
        },
        {
          "id": "li6-2",
          "ru": "Это мой коллега.",
          "en": "C'est mon collègue.",
          "a11y": "Tom serre la main d'un jeune homme barbu avec un ordinateur portable.",
          "audioLabel": "Écouter Это мой коллега",
          "image": "/art/lisbon/6-2.jpg"
        },
        {
          "id": "li6-3",
          "ru": "начальник",
          "en": "chef",
          "a11y": "La rédactrice est assise à un grand bureau dans une pièce vitrée, au téléphone.",
          "audioLabel": "Écouter начальник",
          "image": "/art/lisbon/6-3.jpg"
        },
        {
          "id": "li6-4",
          "ru": "офис",
          "en": "bureau",
          "a11y": "Un bureau lumineux avec de grandes fenêtres, des tables, des plantes et une vue sur le fleuve.",
          "audioLabel": "Écouter офис",
          "image": "/art/lisbon/6-4.jpg"
        },
        {
          "id": "li6-5",
          "ru": "Где мой стол?",
          "en": "Où est ma table ?",
          "a11y": "Tom regarde autour de lui dans le bureau, un carton d'affaires dans les bras.",
          "audioLabel": "Écouter Где мой стол",
          "image": "/art/lisbon/6-5.jpg"
        },
        {
          "id": "li6-6",
          "ru": "Встреча в десять.",
          "en": "La réunion est à dix heures.",
          "a11y": "Une horloge indique dix heures ; des gens s'assoient autour d'une grande table.",
          "audioLabel": "Écouter Встреча в десять",
          "image": "/art/lisbon/6-6.jpg"
        },
        {
          "id": "li6-7",
          "ru": "Добро пожаловать в команду!",
          "en": "Bienvenue dans l'équipe !",
          "a11y": "Tout le bureau applaudit Tom ; Murzik, assis sur son épaule, applaudit aussi.",
          "audioLabel": "Écouter Добро пожаловать в команду",
          "image": "/art/lisbon/6-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Le bureau du magazine",
        "note": "Колонка — une rubrique (dans un magazine). Главный герой — le personnage principal.",
        "lines": [
          {
            "speaker": "editor",
            "ru": "Знакомьтесь, это наш новый фотограф, Том!",
            "en": "Je vous présente notre nouveau photographe, Tom !"
          },
          {
            "speaker": "tom",
            "ru": "Здравствуйте! Очень приятно. Где мой стол?",
            "en": "Bonjour ! Enchanté. Où est ma table ?"
          },
          {
            "speaker": "editor",
            "ru": "Вот здесь. Встреча в десять.",
            "en": "Juste ici. La réunion est à dix heures."
          },
          {
            "speaker": "editor",
            "ru": "Ваша первая работа — колонка о путешествиях. Город за городом.",
            "en": "Votre premier travail est une rubrique voyage. Ville après ville."
          },
          {
            "speaker": "murzik",
            "ru": "А я? Я тоже в команде?",
            "en": "Et moi ? Je fais partie de l'équipe aussi ?"
          },
          {
            "speaker": "editor",
            "ru": "Конечно! Ты — главный герой. Добро пожаловать в команду!",
            "en": "Bien sûr ! Tu es le personnage principal. Bienvenue dans l'équipe !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "li6-d1",
          "prompt": "Quel est le premier travail de Tom au magazine ?",
          "options": [
            {
              "label": "Une rubrique voyage, ville après ville.",
              "correct": true
            },
            {
              "label": "Des photos du bureau.",
              "correct": false
            },
            {
              "label": "Un article sur les tramways de Lisbonne.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Мой, моя, моё — mon, ma",
          "paragraphs": [
            "мой + mots masculins : мой стол, мой коллега. моя + mots féminins : моя работа. моё + mots neutres : моё фото.",
            "Наш (notre) fonctionne pareil : наш офис, наша команда, наше фото."
          ],
          "examples": [
            {
              "ru": "Это мой стол.",
              "en": "C'est ma table."
            },
            {
              "ru": "Это наша команда.",
              "en": "C'est notre équipe."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "li6-t1",
          "prompt": "Écoute. Quand est la réunion ?",
          "skill": "listening",
          "audio": "Встреча в одиннадцать.",
          "options": [
            {
              "label": "À onze heures.",
              "correct": true
            },
            {
              "label": "À dix heures.",
              "correct": false
            },
            {
              "label": "À une heure.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "li6-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "начальник",
              "right": "chef"
            },
            {
              "left": "коллега",
              "right": "collègue"
            },
            {
              "left": "офис",
              "right": "bureau"
            }
          ]
        },
        {
          "kind": "fill",
          "id": "li6-t3",
          "prompt": "Complète : « C'est notre équipe. »",
          "before": "Это",
          "after": "команда.",
          "answer": "наша",
          "options": [
            "наша",
            "наш",
            "наше"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "li6-t4",
          "prompt": "Quelle lettre manque ? (équipe)",
          "before": "ком",
          "after": "нда",
          "answer": "а",
          "options": [
            "а",
            "о",
            "у"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "li6-t5",
          "prompt": "Знакомьтесь, это наш новый фотограф.",
          "model": "Здравствуйте! Очень приятно!",
          "modelEn": "Bonjour ! Enchanté !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Tu es nouveau au travail. Salue tes nouveaux collègues."
        },
        {
          "kind": "choice",
          "id": "li6-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Хорошая новость! Меня взяли!",
          "options": [
            {
              "label": "Поздравляю!",
              "correct": true
            },
            {
              "label": "Мы вам позвоним.",
              "correct": false
            },
            {
              "label": "Где мой стол?",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "camera",
        "itemName": "Appareil photo",
        "itemNameRu": "Фотоаппарат",
        "ru": "Ура! У меня фотоаппарат!",
        "en": "Youpi ! J'ai un appareil photo !",
        "a11y": "Murzik tient le vieil appareil de Tom à deux pattes et prend sa toute première photo : le tramway jaune.",
        "image": "/art/lisbon/reward-6.jpg",
        "steps": [
          "Le magazine offre un nouvel appareil photo à Tom.",
          "Tom donne son vieil appareil à Murzik.",
          "« Maintenant, toi aussi, tu peux prendre des photos ! »",
          "La première photo de Murzik : le tramway jaune."
        ],
        "bridge": "Vendredi, après la première semaine, tout le monde va fêter ça au bord de l'océan."
      }
    },
    {
      "id": "a1-lisbon-7",
      "level": "A1",
      "cityId": "lisbon",
      "number": 7,
      "title": "Coucher de soleil sur l'océan",
      "minutes": 7,
      "goals": [
        "Porter un petit toast",
        "Dire à un ami que tu es fier de lui",
        "Comprendre une journée de travail à l'oral"
      ],
      "vocabNote": "Я горжусь тобой veut dire « Je suis fier de toi ». C'est la même forme pour tout le monde.",
      "vocab": [
        {
          "id": "li7-1",
          "ru": "За работу!",
          "en": "Au nouveau travail !",
          "a11y": "Tom, Murzik et Katia lèvent leurs verres de limonade au bord de l'océan.",
          "audioLabel": "Écouter За работу",
          "image": "/art/lisbon/7-1.jpg"
        },
        {
          "id": "li7-2",
          "ru": "Какой закат!",
          "en": "Quel coucher de soleil !",
          "a11y": "Un coucher de soleil orange et rose sur l'océan, avec un phare.",
          "audioLabel": "Écouter Какой закат",
          "image": "/art/lisbon/7-2.jpg"
        },
        {
          "id": "li7-3",
          "ru": "океан",
          "en": "océan",
          "a11y": "De grosses vagues bleues sur une plage de sable.",
          "audioLabel": "Écouter океан",
          "image": "/art/lisbon/7-3.jpg"
        },
        {
          "id": "li7-4",
          "ru": "Я горжусь тобой!",
          "en": "Je suis fier de toi !",
          "a11y": "Murzik lève vers Tom des yeux brillants de fierté.",
          "audioLabel": "Écouter Я горжусь тобой",
          "image": "/art/lisbon/7-4.jpg"
        },
        {
          "id": "li7-5",
          "ru": "Это только начало.",
          "en": "Ce n'est que le début.",
          "a11y": "Tom regarde une longue route qui longe la côte vers le coucher du soleil.",
          "audioLabel": "Écouter Это только начало",
          "image": "/art/lisbon/7-5.jpg"
        },
        {
          "id": "li7-6",
          "ru": "Спасибо, что ты рядом.",
          "en": "Merci d'être là avec moi.",
          "a11y": "Tom passe le bras autour de Murzik ; ils sont assis ensemble sur le sable.",
          "audioLabel": "Écouter Спасибо, что ты рядом",
          "image": "/art/lisbon/7-6.jpg"
        },
        {
          "id": "li7-7",
          "ru": "Вперёд!",
          "en": "En avant !",
          "a11y": "Murzik montre l'horizon droit devant lui, l'air courageux.",
          "audioLabel": "Écouter Вперёд",
          "image": "/art/lisbon/7-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Un toast au coucher du soleil",
        "note": "Без тебя — sans toi. Я бы не смог — je n'y serais pas arrivé (Tom est un homme : смог).",
        "lines": [
          {
            "speaker": "katya",
            "ru": "Ну что, за работу!",
            "en": "Alors, au nouveau travail !"
          },
          {
            "speaker": "murzik",
            "ru": "За работу! Том, я горжусь тобой!",
            "en": "Au nouveau travail ! Tom, je suis fier de toi !"
          },
          {
            "speaker": "tom",
            "ru": "Спасибо, Мурзик. Спасибо, что ты рядом. Без тебя я бы не смог.",
            "en": "Merci, Murzik. Merci d'être là avec moi. Sans toi, je n'y serais pas arrivé."
          },
          {
            "speaker": "katya",
            "ru": "Какой закат!",
            "en": "Quel coucher de soleil !"
          },
          {
            "speaker": "tom",
            "ru": "Это только начало. Город за городом!",
            "en": "Ce n'est que le début. Ville après ville !"
          },
          {
            "speaker": "murzik",
            "ru": "Вперёд!",
            "en": "En avant !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "li7-d1",
          "prompt": "Que fêtent-ils ?",
          "options": [
            {
              "label": "Le nouveau travail de Tom.",
              "correct": true
            },
            {
              "label": "L'anniversaire de Murzik.",
              "correct": false
            },
            {
              "label": "L'examen de Katia.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "За + chose : un toast",
          "paragraphs": [
            "Les Russes portent de petits toasts avec за, comme « à » : За семью! (Rome) За работу! За нас! (À nous !) За дружбу! (À l'amitié !)",
            "Même avec du jus, du thé ou de la limonade, un petit toast est normal pour fêter quelque chose."
          ],
          "examples": [
            {
              "ru": "За нас!",
              "en": "À nous !"
            },
            {
              "ru": "За дружбу!",
              "en": "À l'amitié !"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "li7-t1",
          "prompt": "Écoute. Quand cette personne finit-elle le travail ?",
          "skill": "listening",
          "help": "Voici ton test d'écoute de Lisbonne.",
          "audio": "Я встаю в семь. Я начинаю работать в девять. В час у меня обед. Я заканчиваю в пять, а в субботу у меня выходной.",
          "options": [
            {
              "label": "À cinq heures.",
              "correct": true
            },
            {
              "label": "À neuf heures.",
              "correct": false
            },
            {
              "label": "À une heure.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "li7-t2",
          "prompt": "Ton ami a fait quelque chose de formidable. Que dis-tu ?",
          "skill": "words",
          "options": [
            {
              "label": "Я горжусь тобой!",
              "correct": true
            },
            {
              "label": "Мы вам позвоним.",
              "correct": false
            },
            {
              "label": "Где мой стол?",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "li7-t3",
          "prompt": "Tu lèves ton verre à l'amitié. Que dis-tu ?",
          "skill": "grammar",
          "options": [
            {
              "label": "За дружбу!",
              "correct": true
            },
            {
              "label": "С дружбой!",
              "correct": false
            },
            {
              "label": "В дружбу!",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "li7-t4",
          "prompt": "Forme le mot « océan ».",
          "word": "океан",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "li7-t5",
          "prompt": "Расскажите о себе.",
          "model": "Я студент. Я изучаю русский язык.",
          "modelEn": "Je suis étudiant. J'étudie le russe.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Dis quelques mots sur toi : ce que tu fais et ce que tu étudies. (Une femme dit студентка.)"
        },
        {
          "kind": "choice",
          "id": "li7-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Где ты учишься?",
          "options": [
            {
              "label": "Я учусь в университете.",
              "correct": true
            },
            {
              "label": "Я работаю в журнале.",
              "correct": false
            },
            {
              "label": "С понедельника.",
              "correct": false
            }
          ]
        },
        {
          "kind": "truefalse",
          "id": "li7-t7",
          "prompt": "Vrai ou faux",
          "statement": "Выходной veut dire « un jour de congé ».",
          "correct": true,
          "skill": "review"
        }
      ],
      "reward": {
        "itemId": "azulejo",
        "itemName": "Azulejo bleu",
        "itemNameRu": "Плитка",
        "ru": "Ура! Бело-синяя плитка!",
        "en": "Youpi ! Un azulejo bleu et blanc !",
        "a11y": "Murzik tient un carreau peint carré bleu et blanc de Lisbonne, avec un petit bateau sur les vagues.",
        "image": "/art/lisbon/reward-7.jpg",
        "steps": [
          "Katia a un cadeau pour Murzik.",
          "Un carreau bleu et blanc, comme sur les maisons de Lisbonne.",
          "Dessus, il y a un petit bateau sur les vagues.",
          "« Pour ton voyage », dit-elle."
        ],
        "bridge": "L'azulejo va dans la valise. Et bientôt, ce sera un jour très spécial pour Murzik…"
      }
    }
  ],
  "story": {
    "home": {
      "name": "La chambre de Murzik à Lisbonne",
      "nameRu": "Комната в Лиссабоне",
      "image": "/art/lisbon/home.jpg",
      "a11y": "Une petite chambre vide dans une maison couverte d'azulejos bleus et blancs. La fenêtre donne sur une rue en pente avec des rails de tramway."
    },
    "keepsakeId": "azulejo",
    "welcomeRu": "Привет, Лиссабон!",
    "welcomeEn": "Bonjour, Lisbonne !",
    "welcomeImage": "/art/lisbon/arrival.jpg",
    "welcomeA11y": "Murzik et Tom arrivent à Lisbonne : un tramway jaune grimpe une rue en pente bordée de maisons couvertes d'azulejos colorés, avec l'océan qui brille en contrebas.",
    "departureImage": "/art/lisbon/departure.jpg",
    "departureA11y": "Katia dit au revoir à Murzik et Tom à l'aéroport de Lisbonne. Tom porte son nouvel appareil photo ; Murzik tient l'azulejo bleu.",
    "finale": [
      {
        "image": "/art/lisbon/finale-1.jpg",
        "a11y": "Murzik est dans sa chambre douillette à Lisbonne : un tramway jaune en jouet, une lampe de bureau verte, une petite cafetière, une photo encadrée, une grande carte du monde avec des punaises et le vieil appareil photo de Tom. Il tient l'azulejo bleu et blanc.",
        "lines": [
          {
            "en": "La chambre lisboète de Murzik est pleine de soleil et de nouveaux départs."
          },
          {
            "en": "Il emballe son objet préféré pour l'emporter : l'azulejo bleu et blanc."
          }
        ]
      },
      {
        "image": "/art/lisbon/finale-2.jpg",
        "a11y": "Murzik et Tom sont dans le tramway jaune et font signe par la fenêtre. Tom a son nouvel appareil autour du cou.",
        "lines": [
          {
            "ru": "Лиссабон завершён!",
            "en": "Lisbonne, c'est fait !"
          },
          {
            "en": "7 / 7 leçons"
          },
          {
            "ru": "Уже девять городов!",
            "en": "Déjà neuf villes !"
          }
        ]
      },
      {
        "image": "/art/lisbon/column.jpg",
        "a11y": "Une page de magazine avec une grande photo de Murzik dans le tramway jaune. Tom et Murzik la regardent ensemble, ravis.",
        "lines": [
          {
            "en": "La première rubrique voyage de Tom paraît. En première page : Murzik dans le tramway jaune."
          },
          {
            "ru": "Это я!",
            "en": "C'est moi !"
          },
          {
            "en": "« Nouvelle ville, nouvelle histoire, dit la rédactrice. Où allez-vous ? » Tom sourit : « Quelque part où il fait chaud et où c'est ancien. »"
          }
        ]
      },
      {
        "image": "/art/lisbon/departure.jpg",
        "a11y": "Katia dit au revoir à Murzik et Tom à l'aéroport de Lisbonne. Tom porte son nouvel appareil photo ; Murzik tient l'azulejo bleu.",
        "lines": [
          {
            "ru": "До свидания, Лиссабон! До свидания, Катя!",
            "en": "Au revoir, Lisbonne ! Au revoir, Katia !"
          },
          {
            "ru": "Следующая остановка: Афины!",
            "en": "Prochain arrêt : Athènes !"
          }
        ]
      },
      {
        "image": "/art/lisbon/finale-5.jpg",
        "a11y": "Un petit avion vole vers l'est au-dessus de la Méditerranée bleue, de Lisbonne vers Athènes.",
        "lines": [
          {
            "ru": "Лиссабон → Афины",
            "en": "Lisbonne → Athènes"
          }
        ]
      },
      {
        "image": "/art/athens/arrival.jpg",
        "a11y": "Murzik et Tom arrivent à Athènes sous le soleil et lèvent les yeux vers l'Acropole antique sur sa colline, avec des maisons blanches en contrebas.",
        "lines": [
          {
            "ru": "Привет, Афины!",
            "en": "Bonjour, Athènes !"
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
