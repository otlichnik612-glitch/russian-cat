import type { CityPlan } from "../../types";

/** Berlin in the French version of the Russian course (`ru` = Russian, `en` = French). Generated from the English version with French texts. */
export const berlinFr: Pick<CityPlan, "lessons" | "story"> = {
  "lessons": [
    {
      "id": "a1-berlin-1",
      "level": "A1",
      "cityId": "berlin",
      "number": 1,
      "title": "Quelle heure est-il ?",
      "minutes": 5,
      "goals": [
        "Demander l'heure",
        "Dire l'heure pile",
        "Dire qu'il est tôt ou tard"
      ],
      "vocabNote": "Часы veut dire à la fois « une horloge » et « une montre ». Который час? veut dire mot à mot « Quelle heure ? ».",
      "vocab": [
        {
          "id": "be1-1",
          "ru": "Извините, который час?",
          "en": "Excusez-moi, quelle heure est-il ?",
          "a11y": "Tom demande poliment l'heure à une femme dans la rue en montrant son poignet.",
          "audioLabel": "Écouter Извините, который час",
          "image": "/art/berlin/1-1.jpg"
        },
        {
          "id": "be1-2",
          "ru": "Сейчас два часа.",
          "en": "Il est deux heures.",
          "a11y": "Un grand cadran rond, les aiguilles sur deux heures.",
          "audioLabel": "Écouter Сейчас два часа",
          "image": "/art/berlin/1-2.jpg"
        },
        {
          "id": "be1-3",
          "ru": "Пять часов.",
          "en": "Cinq heures.",
          "a11y": "Un grand cadran rond, les aiguilles sur cinq heures.",
          "audioLabel": "Écouter Пять часов",
          "image": "/art/berlin/1-3.jpg"
        },
        {
          "id": "be1-4",
          "ru": "Уже поздно!",
          "en": "Il est déjà tard !",
          "a11y": "Murzik bâille sous un ciel de nuit étoilé.",
          "audioLabel": "Écouter Уже поздно",
          "image": "/art/berlin/1-4.jpg"
        },
        {
          "id": "be1-5",
          "ru": "Ещё рано.",
          "en": "Il est encore tôt.",
          "a11y": "Murzik regarde par la fenêtre un lever de soleil rose ; la rue est encore vide.",
          "audioLabel": "Écouter Ещё рано",
          "image": "/art/berlin/1-5.jpg"
        },
        {
          "id": "be1-6",
          "ru": "У тебя есть часы?",
          "en": "Tu as une montre ?",
          "a11y": "Murzik regarde le poignet de Tom, l'air interrogateur.",
          "audioLabel": "Écouter У тебя есть часы",
          "image": "/art/berlin/1-6.jpg"
        },
        {
          "id": "be1-7",
          "ru": "Мои часы не работают.",
          "en": "Ma montre ne marche pas.",
          "a11y": "Tom tapote sa montre, perplexe. Les aiguilles ne bougent pas.",
          "audioLabel": "Écouter Мои часы не работают",
          "image": "/art/berlin/1-7.jpg"
        }
      ],
      "dialogue": {
        "title": "La montre de Tom",
        "note": "Ирина ждёт нас в шесть veut dire « Irina nous attend à six heures ». Ирина est la femme qui leur loue une chambre.",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Мурзик, который час? Мои часы не работают.",
            "en": "Murzik, quelle heure est-il ? Ma montre ne marche pas."
          },
          {
            "speaker": "murzik",
            "ru": "Не знаю… Извините, который час?",
            "en": "Je ne sais pas… Excusez-moi, quelle heure est-il ?"
          },
          {
            "speaker": "passerby",
            "ru": "Сейчас пять часов.",
            "en": "Il est cinq heures."
          },
          {
            "speaker": "tom",
            "ru": "Пять часов? Уже поздно!",
            "en": "Cinq heures ? Il est déjà tard !"
          },
          {
            "speaker": "murzik",
            "ru": "Нет, Том, ещё рано. Ирина ждёт нас в шесть.",
            "en": "Non, Tom, il est encore tôt. Irina nous attend à six heures."
          },
          {
            "speaker": "tom",
            "ru": "Ой, правда! Спасибо!",
            "en": "Ah, c'est vrai ! Merci !"
          },
          {
            "speaker": "passerby",
            "ru": "Пожалуйста!",
            "en": "Je vous en prie !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "be1-d1",
          "prompt": "Quelle heure est-il ?",
          "options": [
            {
              "label": "Cinq heures.",
              "correct": true
            },
            {
              "label": "Six heures.",
              "correct": false
            },
            {
              "label": "Deux heures.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Час, часа ou часов ?",
          "paragraphs": [
            "Ça marche comme год, года, лет. Une heure, c'est juste час : Сейчас час. 2, 3, 4 → часа : два часа. 5–12 → часов : пять часов.",
            "Сейчас veut dire « maintenant ». On peut aussi l'omettre : Три часа. — Il est trois heures."
          ],
          "examples": [
            {
              "ru": "Сейчас час.",
              "en": "Il est une heure."
            },
            {
              "ru": "Сейчас три часа.",
              "en": "Il est trois heures."
            },
            {
              "ru": "Сейчас восемь часов.",
              "en": "Il est huit heures."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "be1-t1",
          "prompt": "Écoute. Quelle heure est-il ?",
          "skill": "listening",
          "audio": "Сейчас четыре часа.",
          "options": [
            {
              "label": "4:00",
              "correct": true
            },
            {
              "label": "7:00",
              "correct": false
            },
            {
              "label": "2:00",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "be1-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "Уже поздно!",
              "right": "Il est déjà tard !"
            },
            {
              "left": "Ещё рано.",
              "right": "Il est encore tôt."
            },
            {
              "left": "Который час?",
              "right": "Quelle heure est-il ?"
            }
          ]
        },
        {
          "kind": "fill",
          "id": "be1-t3",
          "prompt": "Complète.",
          "before": "Сейчас пять",
          "after": ".",
          "answer": "часов",
          "options": [
            "часов",
            "часа",
            "час"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "be1-t4",
          "prompt": "Forme le mot « montre / horloge ».",
          "word": "часы",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "be1-t5",
          "prompt": "Извините, который час?",
          "model": "Сейчас три часа.",
          "modelEn": "Il est trois heures.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Regarde ton téléphone et dis l'heure qu'il est vraiment — juste l'heure."
        },
        {
          "kind": "choice",
          "id": "be1-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Сколько тебе лет?",
          "options": [
            {
              "label": "Мне двадцать лет.",
              "correct": true
            },
            {
              "label": "Сейчас два часа.",
              "correct": false
            },
            {
              "label": "Это моя сестра.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "bed",
        "itemName": "Lit",
        "itemNameRu": "Кровать",
        "ru": "Ура! У меня кровать!",
        "en": "Youpi ! J'ai un lit !",
        "a11y": "Murzik est allongé, tout content, sur un petit lit en bois avec une couette blanche, sous une fenêtre ronde de mansarde à Berlin.",
        "image": "/art/berlin/reward-1.jpg",
        "steps": [
          "Irina les fait monter au grenier.",
          "Il y a une fenêtre ronde qui donne sur la cour.",
          "Dans le coin, il y a un vieux lit en bois.",
          "Murzik saute dessus en riant."
        ],
        "bridge": "Irina dit que le meilleur marché aux puces de Berlin n'ouvre que le dimanche. Mais quel jour sommes-nous ?"
      }
    },
    {
      "id": "a1-berlin-2",
      "level": "A1",
      "cityId": "berlin",
      "number": 2,
      "title": "Quel jour sommes-nous ?",
      "minutes": 5,
      "goals": [
        "Nommer les jours de la semaine",
        "Dire quel jour on est",
        "Dire « dimanche »"
      ],
      "vocabNote": "Comme en français, les jours de la semaine s'écrivent avec une minuscule en russe. La semaine commence le lundi : понедельник.",
      "vocab": [
        {
          "id": "be2-1",
          "ru": "Какой сегодня день?",
          "en": "Quel jour sommes-nous ?",
          "a11y": "Murzik regarde un calendrier mural, l'air curieux, la patte sous le menton.",
          "audioLabel": "Écouter Какой сегодня день",
          "image": "/art/berlin/2-1.jpg"
        },
        {
          "id": "be2-2",
          "ru": "Сегодня понедельник.",
          "en": "Aujourd'hui, c'est lundi.",
          "a11y": "Une rangée de sept cases pour la semaine. La première est entourée de rouge.",
          "audioLabel": "Écouter Сегодня понедельник",
          "image": "/art/berlin/2-2.jpg"
        },
        {
          "id": "be2-3",
          "ru": "вторник и среда",
          "en": "mardi et mercredi",
          "a11y": "Une rangée de sept cases. La deuxième et la troisième sont coloriées en bleu.",
          "audioLabel": "Écouter вторник и среда",
          "image": "/art/berlin/2-3.jpg"
        },
        {
          "id": "be2-4",
          "ru": "четверг и пятница",
          "en": "jeudi et vendredi",
          "a11y": "Une rangée de sept cases. La quatrième et la cinquième sont coloriées en vert.",
          "audioLabel": "Écouter четверг и пятница",
          "image": "/art/berlin/2-4.jpg"
        },
        {
          "id": "be2-5",
          "ru": "суббота и воскресенье",
          "en": "samedi et dimanche",
          "a11y": "Une rangée de sept cases. Les deux dernières sont coloriées en jaune, avec un petit soleil.",
          "audioLabel": "Écouter суббота и воскресенье",
          "image": "/art/berlin/2-5.jpg"
        },
        {
          "id": "be2-6",
          "ru": "неделя: семь дней",
          "en": "une semaine : sept jours",
          "a11y": "Une rangée de sept cases réunies en une longue barre, comme un agenda de la semaine.",
          "audioLabel": "Écouter неделя: семь дней",
          "image": "/art/berlin/2-6b.jpg"
        },
        {
          "id": "be2-7",
          "ru": "в воскресенье",
          "en": "dimanche (ce dimanche-là)",
          "a11y": "Murzik rêve d'un marché aux puces animé, plein de vieux objets, avec un petit soleil au-dessus.",
          "audioLabel": "Écouter в воскресенье",
          "image": "/art/berlin/2-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Quand a lieu le marché aux puces ?",
        "note": "Блошиный рынок, c'est le marché aux puces. Долго! veut dire « C'est long ! ».",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Ирина, какой сегодня день?",
            "en": "Irina, quel jour sommes-nous ?"
          },
          {
            "speaker": "irina",
            "ru": "Сегодня понедельник.",
            "en": "Aujourd'hui, c'est lundi."
          },
          {
            "speaker": "murzik",
            "ru": "А когда блошиный рынок?",
            "en": "Et quand a lieu le marché aux puces ?"
          },
          {
            "speaker": "irina",
            "ru": "В воскресенье.",
            "en": "Dimanche."
          },
          {
            "speaker": "murzik",
            "ru": "В воскресенье? Вторник, среда, четверг, пятница, суббота… Долго!",
            "en": "Dimanche ? Mardi, mercredi, jeudi, vendredi, samedi… C'est long !"
          },
          {
            "speaker": "tom",
            "ru": "Ничего, Мурзик. Завтра вторник — это тоже хорошо!",
            "en": "Ce n'est pas grave, Murzik. Demain, c'est mardi — c'est bien aussi !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "be2-d1",
          "prompt": "Quand a lieu le marché aux puces ?",
          "options": [
            {
              "label": "Dimanche.",
              "correct": true
            },
            {
              "label": "Lundi.",
              "correct": false
            },
            {
              "label": "Mardi.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Lundi : в + jour",
          "paragraphs": [
            "Là où le français dit simplement « lundi », le russe ajoute в : в понедельник, в четверг, в воскресенье. Devant вторник, c'est во : во вторник.",
            "Les jours en -а changent -а en -у : среда → в среду, пятница → в пятницу, суббота → в субботу."
          ],
          "examples": [
            {
              "ru": "в понедельник",
              "en": "lundi"
            },
            {
              "ru": "в субботу",
              "en": "samedi"
            },
            {
              "ru": "во вторник",
              "en": "mardi"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "match",
          "id": "be2-t1",
          "prompt": "Associe les jours.",
          "skill": "words",
          "pairs": [
            {
              "left": "понедельник",
              "right": "lundi"
            },
            {
              "left": "среда",
              "right": "mercredi"
            },
            {
              "left": "пятница",
              "right": "vendredi"
            },
            {
              "left": "воскресенье",
              "right": "dimanche"
            }
          ]
        },
        {
          "kind": "choice",
          "id": "be2-t2",
          "prompt": "Écoute. Quel jour sommes-nous ?",
          "skill": "listening",
          "audio": "Сегодня четверг.",
          "options": [
            {
              "label": "jeudi",
              "correct": true
            },
            {
              "label": "mardi",
              "correct": false
            },
            {
              "label": "samedi",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "be2-t3",
          "prompt": "Complète : « samedi ».",
          "before": "в",
          "after": "",
          "answer": "субботу",
          "options": [
            "субботу",
            "суббота",
            "субботе"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "be2-t4",
          "prompt": "Forme le mot « mercredi ».",
          "word": "среда",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "be2-t5",
          "prompt": "Какой сегодня день?",
          "model": "Сегодня среда.",
          "modelEn": "Aujourd'hui, c'est mercredi.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Dis quel jour on est vraiment aujourd'hui."
        },
        {
          "kind": "choice",
          "id": "be2-t6",
          "prompt": "Écoute. Qu'as-tu entendu ?",
          "skill": "review",
          "audio": "Уже поздно!",
          "options": [
            {
              "label": "Уже поздно!",
              "correct": true
            },
            {
              "label": "Ещё рано.",
              "correct": false
            },
            {
              "label": "Пять часов.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "calendar",
        "itemName": "Calendrier mural",
        "itemNameRu": "Календарь",
        "ru": "Ура! Календарь на стену!",
        "en": "Youpi ! Un calendrier pour mon mur !",
        "a11y": "Murzik accroche au mur de la mansarde un grand calendrier avec des photos de Berlin. Une case est entourée de rouge.",
        "image": "/art/berlin/reward-2.jpg",
        "steps": [
          "Irina donne à Murzik un vieux calendrier mural.",
          "Il l'accroche au mur.",
          "Il entoure le dimanche en rouge.",
          "Plus que six jours à attendre !"
        ],
        "bridge": "Avant dimanche, Tom veut faire une excursion hors de la ville. Il leur faut les horaires des trains."
      }
    },
    {
      "id": "a1-berlin-3",
      "level": "A1",
      "cityId": "berlin",
      "number": 3,
      "title": "À quelle heure est le train ?",
      "minutes": 6,
      "goals": [
        "Demander quand part un train",
        "Comprendre une heure comme 9 h 30",
        "Demander quel quai"
      ],
      "vocabNote": "Dans les horaires, les Russes comptent sur 24 heures et disent l'heure en chiffres : девять тридцать (9 h 30), восемнадцать ноль-ноль (18 h 00) — comme « neuf heures trente » en français.",
      "vocab": [
        {
          "id": "be3-1",
          "ru": "Во сколько поезд?",
          "en": "À quelle heure est le train ?",
          "a11y": "Tom et Murzik lèvent les yeux vers une grande horloge de gare, l'air curieux.",
          "audioLabel": "Écouter Во сколько поезд",
          "image": "/art/berlin/3-1.jpg"
        },
        {
          "id": "be3-2",
          "ru": "В девять тридцать.",
          "en": "À neuf heures trente.",
          "a11y": "Une horloge de gare indique neuf heures et demie, à côté d'un train qui attend.",
          "audioLabel": "Écouter В девять тридцать",
          "image": "/art/berlin/3-2.jpg"
        },
        {
          "id": "be3-3",
          "ru": "утром",
          "en": "le matin",
          "a11y": "Murzik s'étire et boit un café à la fenêtre, au soleil du matin.",
          "audioLabel": "Écouter утром",
          "image": "/art/berlin/3-3.jpg"
        },
        {
          "id": "be3-4",
          "ru": "вечером",
          "en": "le soir",
          "a11y": "Murzik lit un livre sous une lampe ; par la fenêtre, le ciel du soir est orange.",
          "audioLabel": "Écouter вечером",
          "image": "/art/berlin/3-4.jpg"
        },
        {
          "id": "be3-5",
          "ru": "Какая платформа?",
          "en": "Quel quai ?",
          "a11y": "Murzik est dans une gare animée et regarde à gauche et à droite, perdu.",
          "audioLabel": "Écouter Какая платформа",
          "image": "/art/berlin/3-5.jpg"
        },
        {
          "id": "be3-6",
          "ru": "Платформа три.",
          "en": "Quai numéro trois.",
          "a11y": "Un panneau de quai avec un grand 3, et un train qui attend à côté.",
          "audioLabel": "Écouter Платформа три",
          "image": "/art/berlin/3-6.jpg"
        },
        {
          "id": "be3-7",
          "ru": "Сколько ехать?",
          "en": "Combien de temps dure le trajet ?",
          "a11y": "Tom regarde une carte ferroviaire avec une longue ligne entre deux gares.",
          "audioLabel": "Écouter Сколько ехать",
          "image": "/art/berlin/3-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Au guichet",
        "note": "Ехать час veut dire « Il y a une heure de trajet ». Потсдам est une petite ville près de Berlin. Два билета — deux billets.",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Здравствуйте! Во сколько поезд в Потсдам?",
            "en": "Bonjour ! À quelle heure est le train pour Potsdam ?"
          },
          {
            "speaker": "cashier",
            "ru": "Утром, в девять тридцать. Или вечером, в шесть.",
            "en": "Le matin, à neuf heures trente. Ou le soir, à six heures."
          },
          {
            "speaker": "tom",
            "ru": "Утром, пожалуйста. Какая платформа?",
            "en": "Le matin, s'il vous plaît. Quel quai ?"
          },
          {
            "speaker": "cashier",
            "ru": "Платформа три.",
            "en": "Quai numéro trois."
          },
          {
            "speaker": "murzik",
            "ru": "А сколько ехать?",
            "en": "Et combien de temps dure le trajet ?"
          },
          {
            "speaker": "cashier",
            "ru": "Ехать час.",
            "en": "Il y a une heure de trajet."
          },
          {
            "speaker": "tom",
            "ru": "Отлично! Два билета, пожалуйста.",
            "en": "Super ! Deux billets, s'il vous plaît."
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "be3-d1",
          "prompt": "Quand est leur train ?",
          "options": [
            {
              "label": "Le matin, à 9 h 30.",
              "correct": true
            },
            {
              "label": "Le soir, à 18 h 00.",
              "correct": false
            },
            {
              "label": "Le matin, à 3 h 00.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "À quelle heure ? — в + heure",
          "paragraphs": [
            "Который час? demande l'heure qu'il est maintenant. Во сколько? demande à quelle heure quelque chose se passe.",
            "On répond avec в, comme « à » : в девять, в девять тридцать, в шесть часов."
          ],
          "examples": [
            {
              "ru": "Поезд в восемь.",
              "en": "Le train est à huit heures."
            },
            {
              "ru": "Поезд в десять тридцать.",
              "en": "Le train est à dix heures trente."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "be3-t1",
          "prompt": "Écoute. À quelle heure est le train ?",
          "skill": "listening",
          "audio": "Поезд в восемь тридцать.",
          "options": [
            {
              "label": "8:30",
              "correct": true
            },
            {
              "label": "9:30",
              "correct": false
            },
            {
              "label": "8:00",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "be3-t2",
          "prompt": "Que veut dire вечером ?",
          "skill": "words",
          "options": [
            {
              "label": "le soir",
              "correct": true
            },
            {
              "label": "le matin",
              "correct": false
            },
            {
              "label": "demain",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "be3-t3",
          "prompt": "Complète : « Le train est à dix heures. »",
          "before": "Поезд",
          "after": "десять.",
          "answer": "в",
          "options": [
            "в",
            "на",
            "из"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "be3-t4",
          "prompt": "Quelle lettre manque ? (quai)",
          "before": "платф",
          "after": "рма",
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
          "id": "be3-t5",
          "prompt": "Во сколько поезд?",
          "model": "В девять тридцать.",
          "modelEn": "À neuf heures trente.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Tu travailles à la gare. Dis à Tom que le train est à 9 h 30."
        },
        {
          "kind": "choice",
          "id": "be3-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Какой сегодня день?",
          "options": [
            {
              "label": "Сегодня среда.",
              "correct": true
            },
            {
              "label": "Сейчас пять часов.",
              "correct": false
            },
            {
              "label": "Платформа три.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "bookshelf",
        "itemName": "Étagère à livres",
        "itemNameRu": "Книжная полка",
        "ru": "Ура! Книжная полка!",
        "en": "Youpi ! Une étagère à livres !",
        "a11y": "Murzik range un petit guide de voyage sur une étagère en bois pleine de vieux livres, dans la mansarde.",
        "image": "/art/berlin/reward-3.jpg",
        "steps": [
          "Irina a trop de livres.",
          "Elle donne une petite étagère à Murzik.",
          "Elle est pleine de vieux livres russes.",
          "Murzik y ajoute son guide de voyage."
        ],
        "bridge": "Le train part à 9 h 30. Mais personne ne met de réveil… Qu'est-ce qui pourrait mal tourner ?"
      }
    },
    {
      "id": "a1-berlin-4",
      "level": "A1",
      "cityId": "berlin",
      "number": 4,
      "title": "On est en retard !",
      "minutes": 6,
      "goals": [
        "Dire qu'on est en retard",
        "Demander quand est le prochain train",
        "Dire « dans une heure »"
      ],
      "vocabNote": "Мы опоздали et Мы проспали sont des formes du passé pour « nous ». Elles sont les mêmes pour tout le monde : tu peux les utiliser pour toi et un ami.",
      "vocab": [
        {
          "id": "be4-1",
          "ru": "Быстрее!",
          "en": "Plus vite !",
          "a11y": "Murzik court dans la gare en tirant Tom par la main.",
          "audioLabel": "Écouter Быстрее",
          "image": "/art/berlin/4-1.jpg"
        },
        {
          "id": "be4-2",
          "ru": "Мы опоздали!",
          "en": "On l'a raté !",
          "a11y": "Tom et Murzik s'arrêtent sur le quai, essoufflés, l'air choqué.",
          "audioLabel": "Écouter Мы опоздали",
          "image": "/art/berlin/4-2.jpg"
        },
        {
          "id": "be4-3",
          "ru": "Поезд ушёл.",
          "en": "Le train est parti.",
          "a11y": "L'arrière d'un train disparaît d'un quai vide.",
          "audioLabel": "Écouter Поезд ушёл",
          "image": "/art/berlin/4-3.jpg"
        },
        {
          "id": "be4-4",
          "ru": "Когда следующий поезд?",
          "en": "Quand est le prochain train ?",
          "a11y": "Tom pose la question à un employé au guichet en montrant les horaires.",
          "audioLabel": "Écouter Когда следующий поезд",
          "image": "/art/berlin/4-4.jpg"
        },
        {
          "id": "be4-5",
          "ru": "Через час.",
          "en": "Dans une heure.",
          "a11y": "Un cadran avec une flèche qui avance d'une heure entière.",
          "audioLabel": "Écouter Через час",
          "image": "/art/berlin/4-5.jpg"
        },
        {
          "id": "be4-6",
          "ru": "Мы проспали.",
          "en": "On ne s'est pas réveillés.",
          "a11y": "Murzik et Tom dorment profondément dans la mansarde, pendant que le soleil du matin entre.",
          "audioLabel": "Écouter Мы проспали",
          "image": "/art/berlin/4-6.jpg"
        },
        {
          "id": "be4-7",
          "ru": "Подождём.",
          "en": "Attendons.",
          "a11y": "Murzik et Tom sont assis sur un banc de la gare avec deux cafés et attendent tranquillement.",
          "audioLabel": "Écouter Подождём",
          "image": "/art/berlin/4-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Le train de 9 h 30",
        "note": "Девять сорок, c'est 9 h 40. Есть кофе! veut dire « Il y a du café ! ».",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Том, быстрее! Который час?",
            "en": "Tom, plus vite ! Quelle heure est-il ?"
          },
          {
            "speaker": "tom",
            "ru": "Девять сорок… Мы опоздали!",
            "en": "Neuf heures quarante… On l'a raté !"
          },
          {
            "speaker": "murzik",
            "ru": "Извините, поезд ушёл?",
            "en": "Excusez-moi, le train est parti ?"
          },
          {
            "speaker": "cashier",
            "ru": "Да, поезд ушёл.",
            "en": "Oui, le train est parti."
          },
          {
            "speaker": "tom",
            "ru": "А когда следующий поезд?",
            "en": "Et quand est le prochain train ?"
          },
          {
            "speaker": "cashier",
            "ru": "Через час.",
            "en": "Dans une heure."
          },
          {
            "speaker": "tom",
            "ru": "Ох, Мурзик… Мы проспали. Извини.",
            "en": "Oh, Murzik… On ne s'est pas réveillés. Pardon."
          },
          {
            "speaker": "murzik",
            "ru": "Ничего страшного! Подождём. Есть кофе!",
            "en": "Ce n'est pas grave ! Attendons. Il y a du café !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "be4-d1",
          "prompt": "Que s'est-il passé ?",
          "options": [
            {
              "label": "Ils ont raté le train.",
              "correct": true
            },
            {
              "label": "Ils ont perdu leurs billets.",
              "correct": false
            },
            {
              "label": "Le train a beaucoup de retard.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Dans une heure : через + durée",
          "paragraphs": [
            "Через veut dire « dans » (au bout d'un certain temps) : через час — dans une heure, через два часа — dans deux heures.",
            "Pour les minutes, c'est pareil : через пять минут — dans cinq minutes."
          ],
          "examples": [
            {
              "ru": "Поезд через час.",
              "en": "Le train est dans une heure."
            },
            {
              "ru": "Через пять минут!",
              "en": "Dans cinq minutes !"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "be4-t1",
          "prompt": "Écoute. Quand est le prochain train ?",
          "skill": "listening",
          "audio": "Следующий поезд через два часа.",
          "options": [
            {
              "label": "Dans deux heures.",
              "correct": true
            },
            {
              "label": "À deux heures.",
              "correct": false
            },
            {
              "label": "Dans une heure.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "be4-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "Быстрее!",
              "right": "Plus vite !"
            },
            {
              "left": "Поезд ушёл.",
              "right": "Le train est parti."
            },
            {
              "left": "Ничего страшного.",
              "right": "Ce n'est pas grave."
            }
          ]
        },
        {
          "kind": "choice",
          "id": "be4-t3",
          "prompt": "Comment dit-on « Le train est dans une heure » ?",
          "skill": "grammar",
          "options": [
            {
              "label": "Поезд через час.",
              "correct": true
            },
            {
              "label": "Поезд в час.",
              "correct": false
            },
            {
              "label": "Поезд один час.",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "be4-t4",
          "prompt": "Forme le mot « train ».",
          "word": "поезд",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "be4-t5",
          "prompt": "Мы опоздали!",
          "model": "Ничего страшного!",
          "modelEn": "Ce n'est pas grave !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Ton ami est contrarié. Rassure-le à voix haute."
        },
        {
          "kind": "choice",
          "id": "be4-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Какая платформа?",
          "options": [
            {
              "label": "Платформа три.",
              "correct": true
            },
            {
              "label": "В девять тридцать.",
              "correct": false
            },
            {
              "label": "Через час.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "alarm-clock",
        "itemName": "Réveil",
        "itemNameRu": "Будильник",
        "ru": "Ура! У меня будильник!",
        "en": "Youpi ! J'ai un réveil !",
        "a11y": "Murzik tient un petit réveil rond et rouge avec deux cloches. Derrière lui, tout au bout du quai, un gentil vieux chat blanc en chapeau gris sourit.",
        "image": "/art/berlin/reward-4.jpg",
        "steps": [
          "À la gare, Tom achète un petit réveil rouge.",
          "« Plus jamais ça ! » dit-il en riant.",
          "Sur le quai, un gentil vieux chat blanc en chapeau sourit à Murzik.",
          "Quand Murzik regarde à nouveau, il a disparu."
        ],
        "bridge": "Ils prennent le train suivant et passent une très belle journée. Le soir, Tom a une idée : le cinéma !"
      }
    },
    {
      "id": "a1-berlin-5",
      "level": "A1",
      "cityId": "berlin",
      "number": 5,
      "title": "Allons au cinéma !",
      "minutes": 6,
      "goals": [
        "Inviter un ami",
        "Accepter ou dire qu'on ne peut pas",
        "Se mettre d'accord sur une heure et un lieu"
      ],
      "vocabNote": "Давай пойдём… veut dire « Allons… ». Tu connais Давай! depuis Paris. У тебя есть время? veut dire mot à mot « Tu as du temps ? ».",
      "vocab": [
        {
          "id": "be5-1",
          "ru": "Давай пойдём в кино!",
          "en": "Allons au cinéma !",
          "a11y": "Tom montre deux billets de cinéma avec un grand sourire.",
          "audioLabel": "Écouter Давай пойдём в кино",
          "image": "/art/berlin/5-1.jpg"
        },
        {
          "id": "be5-2",
          "ru": "У тебя есть время?",
          "en": "Tu as le temps ?",
          "a11y": "Tom montre un calendrier et regarde une amie, plein d'espoir.",
          "audioLabel": "Écouter У тебя есть время",
          "image": "/art/berlin/5-2.jpg"
        },
        {
          "id": "be5-3",
          "ru": "Извини, я не могу.",
          "en": "Désolée, je ne peux pas.",
          "a11y": "Une femme secoue gentiment la tête, la main sur le cœur.",
          "audioLabel": "Écouter Извини, я не могу",
          "image": "/art/berlin/5-3.jpg"
        },
        {
          "id": "be5-4",
          "ru": "Во сколько встречаемся?",
          "en": "On se retrouve à quelle heure ?",
          "a11y": "Murzik tapote une horloge de la patte, l'air interrogateur.",
          "audioLabel": "Écouter Во сколько встречаемся",
          "image": "/art/berlin/5-4.jpg"
        },
        {
          "id": "be5-5",
          "ru": "В семь часов.",
          "en": "À sept heures.",
          "a11y": "Un cadran indique sept heures, à côté de l'entrée illuminée d'un cinéma au crépuscule.",
          "audioLabel": "Écouter В семь часов",
          "image": "/art/berlin/5-5.jpg"
        },
        {
          "id": "be5-6",
          "ru": "У входа.",
          "en": "À l'entrée.",
          "a11y": "Murzik attend devant les portes d'un vieux cinéma, sous les lumières vives.",
          "audioLabel": "Écouter У входа",
          "image": "/art/berlin/5-6.jpg"
        },
        {
          "id": "be5-7",
          "ru": "Договорились!",
          "en": "Marché conclu !",
          "a11y": "Tom et une femme se serrent la main en souriant ; Murzik lève le pouce.",
          "audioLabel": "Écouter Договорились",
          "image": "/art/berlin/5-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Une invitation",
        "note": "А в пятницу? — Et vendredi ? Можно! veut dire ici « Ça me va ! ».",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Ирина, давай пойдём в кино!",
            "en": "Irina, allons au cinéma !"
          },
          {
            "speaker": "irina",
            "ru": "Давай! А когда?",
            "en": "Volontiers ! Et quand ?"
          },
          {
            "speaker": "tom",
            "ru": "У тебя есть время в субботу?",
            "en": "Tu as le temps samedi ?"
          },
          {
            "speaker": "irina",
            "ru": "Извини, в субботу я не могу. А в пятницу?",
            "en": "Désolée, samedi je ne peux pas. Et vendredi ?"
          },
          {
            "speaker": "tom",
            "ru": "Можно! Во сколько встречаемся?",
            "en": "Ça me va ! On se retrouve à quelle heure ?"
          },
          {
            "speaker": "irina",
            "ru": "В семь часов, у входа.",
            "en": "À sept heures, à l'entrée."
          },
          {
            "speaker": "murzik",
            "ru": "Договорились!",
            "en": "Marché conclu !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "be5-d1",
          "prompt": "Quand vont-ils au cinéma ?",
          "options": [
            {
              "label": "Vendredi à sept heures.",
              "correct": true
            },
            {
              "label": "Samedi à sept heures.",
              "correct": false
            },
            {
              "label": "Vendredi à six heures.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Давай пойдём в …",
          "paragraphs": [
            "Pour inviter un ami, dis Давай пойдём в … et le lieu : в кино, в музей, в парк, в кафе.",
            "Pour répondre : Давай! (Volontiers !) ou Извини, я не могу. (Désolé, je ne peux pas.)"
          ],
          "examples": [
            {
              "ru": "Давай пойдём в парк!",
              "en": "Allons au parc !"
            },
            {
              "ru": "Давай пойдём в кафе!",
              "en": "Allons dans un café !"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "be5-t1",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "listening",
          "audio": "Во сколько встречаемся?",
          "options": [
            {
              "label": "В семь часов.",
              "correct": true
            },
            {
              "label": "Договорились!",
              "correct": false
            },
            {
              "label": "Сегодня пятница.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "be5-t2",
          "prompt": "Ton ami t'invite, mais tu es occupé. Que dis-tu ?",
          "skill": "words",
          "options": [
            {
              "label": "Извини, я не могу.",
              "correct": true
            },
            {
              "label": "Договорились!",
              "correct": false
            },
            {
              "label": "Давай!",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "be5-t3",
          "prompt": "Complète.",
          "before": "Давай",
          "after": "в кино!",
          "answer": "пойдём",
          "options": [
            "пойдём",
            "поезд",
            "встречаемся"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "be5-t4",
          "prompt": "Quelle lettre manque ? (Marché conclu !)",
          "before": "Договор",
          "after": "лись!",
          "answer": "и",
          "options": [
            "и",
            "е",
            "ы"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "be5-t5",
          "prompt": "Давай пойдём в кино в субботу?",
          "model": "Давай! Во сколько встречаемся?",
          "modelEn": "Volontiers ! On se retrouve à quelle heure ?",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Accepte et demande à quelle heure on se retrouve."
        },
        {
          "kind": "choice",
          "id": "be5-t6",
          "prompt": "Écoute. Qu'as-tu entendu ?",
          "skill": "review",
          "audio": "Мы опоздали!",
          "options": [
            {
              "label": "Мы опоздали!",
              "correct": true
            },
            {
              "label": "Мы проспали.",
              "correct": false
            },
            {
              "label": "Поезд ушёл.",
              "correct": false
            }
          ]
        },
        {
          "kind": "truefalse",
          "id": "be5-t7",
          "prompt": "Vrai ou faux",
          "statement": "Через час veut dire « dans une heure ».",
          "correct": true,
          "skill": "review"
        }
      ],
      "reward": {
        "itemId": "film-poster",
        "itemName": "Affiche de film",
        "itemNameRu": "Афиша",
        "ru": "Ура! Афиша на стену!",
        "en": "Youpi ! Une affiche de film pour mon mur !",
        "a11y": "Murzik accroche au mur de la mansarde, à côté du calendrier, une vieille affiche de film colorée avec un chat et la lune (sans aucun texte).",
        "image": "/art/berlin/reward-5.jpg",
        "steps": [
          "Le film est vieux et très drôle.",
          "Après la séance, le cinéma distribue de vieilles affiches.",
          "Murzik en reçoit une avec un chat et la lune.",
          "Maintenant, elle est accrochée à son mur."
        ],
        "bridge": "Samedi matin, Barsik appelle de Rome. Il veut tout savoir."
      }
    },
    {
      "id": "a1-berlin-6",
      "level": "A1",
      "cityId": "berlin",
      "number": 6,
      "title": "Où étiez-vous hier ?",
      "minutes": 6,
      "goals": [
        "Dire où toi et un ami étiez hier",
        "Dire ce que vous avez fait",
        "Dire que c'était intéressant"
      ],
      "vocabNote": "Au passé, les formes pour мы et вы finissent par -ли : мы гуляли, мы смотрели. Elles sont les mêmes pour les hommes et les femmes.",
      "vocab": [
        {
          "id": "be6-1",
          "ru": "вчера",
          "en": "hier",
          "a11y": "Une petite page de calendrier avec la case d'hier barrée, et une flèche vers l'arrière.",
          "audioLabel": "Écouter вчера",
          "image": "/art/berlin/6-1.jpg"
        },
        {
          "id": "be6-2",
          "ru": "Где вы были?",
          "en": "Où étiez-vous ?",
          "a11y": "Sur l'écran d'un téléphone, Barsik se penche en avant, l'air curieux.",
          "audioLabel": "Écouter Где вы были",
          "image": "/art/berlin/6-2.jpg"
        },
        {
          "id": "be6-3",
          "ru": "Мы были в музее.",
          "en": "Nous étions au musée.",
          "a11y": "Murzik et Tom lèvent les yeux vers un immense squelette de dinosaure dans un musée.",
          "audioLabel": "Écouter Мы были в музее",
          "image": "/art/berlin/6-3.jpg"
        },
        {
          "id": "be6-4",
          "ru": "Что вы делали?",
          "en": "Qu'avez-vous fait ?",
          "a11y": "Sur l'écran d'un téléphone, Barsik lève une patte, l'air interrogateur.",
          "audioLabel": "Écouter Что вы делали",
          "image": "/art/berlin/6-4.jpg"
        },
        {
          "id": "be6-5",
          "ru": "Мы гуляли.",
          "en": "Nous nous sommes promenés.",
          "a11y": "Murzik et Tom se promènent le long d'une rivière à Berlin, avec des arbres et de vieux ponts.",
          "audioLabel": "Écouter Мы гуляли",
          "image": "/art/berlin/6-5.jpg"
        },
        {
          "id": "be6-6",
          "ru": "Мы смотрели фильм.",
          "en": "Nous avons regardé un film.",
          "a11y": "Murzik et Tom sont assis dans un cinéma sombre avec du pop-corn, le visage éclairé par l'écran.",
          "audioLabel": "Écouter Мы смотрели фильм",
          "image": "/art/berlin/6-6.jpg"
        },
        {
          "id": "be6-7",
          "ru": "Было интересно!",
          "en": "C'était intéressant !",
          "a11y": "Murzik raconte une histoire, les yeux grands ouverts et les deux pattes en l'air.",
          "audioLabel": "Écouter Было интересно",
          "image": "/art/berlin/6-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Un appel de Rome",
        "note": "Barsik et Murzik sont des garçons, alors ils disent ты делал, я спал. Спал veut dire « j'ai dormi » — Barsik est un peu paresseux !",
        "lines": [
          {
            "speaker": "barsik",
            "ru": "Привет, Мурзик! Где вы были вчера?",
            "en": "Salut, Murzik ! Où étiez-vous hier ?"
          },
          {
            "speaker": "murzik",
            "ru": "Привет, Барсик! Мы были в музее.",
            "en": "Salut, Barsik ! Nous étions au musée."
          },
          {
            "speaker": "barsik",
            "ru": "А что вы делали вечером?",
            "en": "Et le soir, qu'avez-vous fait ?"
          },
          {
            "speaker": "murzik",
            "ru": "Мы гуляли, а потом смотрели фильм.",
            "en": "Nous nous sommes promenés, et puis nous avons regardé un film."
          },
          {
            "speaker": "barsik",
            "ru": "Было интересно?",
            "en": "C'était intéressant ?"
          },
          {
            "speaker": "murzik",
            "ru": "Очень! А ты? Что ты делал?",
            "en": "Très ! Et toi ? Qu'est-ce que tu as fait ?"
          },
          {
            "speaker": "barsik",
            "ru": "Я? Я спал!",
            "en": "Moi ? J'ai dormi !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "be6-d1",
          "prompt": "Qu'a fait Barsik hier ?",
          "options": [
            {
              "label": "Il a dormi.",
              "correct": true
            },
            {
              "label": "Il est allé au musée.",
              "correct": false
            },
            {
              "label": "Il a regardé un film.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Le passé pour мы et вы : -ли",
          "paragraphs": [
            "Pour parler du passé, prends le verbe, enlève -ть et ajoute -ли : гулять → мы гуляли, смотреть → мы смотрели, делать → вы делали. Un seul temps du passé, pas d'auxiliaire comme « avoir » ou « être » !",
            "Быть (être) → мы были, вы были. Было интересно — C'était intéressant."
          ],
          "examples": [
            {
              "ru": "Вчера мы гуляли.",
              "en": "Hier, nous nous sommes promenés."
            },
            {
              "ru": "Где вы были вчера?",
              "en": "Où étiez-vous hier ?"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "be6-t1",
          "prompt": "Écoute. Qu'ont-ils fait ?",
          "skill": "listening",
          "audio": "Мы гуляли в парке.",
          "options": [
            {
              "label": "Ils se sont promenés au parc.",
              "correct": true
            },
            {
              "label": "Ils ont regardé un film.",
              "correct": false
            },
            {
              "label": "Ils étaient au musée.",
              "correct": false
            }
          ]
        },
        {
          "kind": "match",
          "id": "be6-t2",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "вчера",
              "right": "hier"
            },
            {
              "left": "завтра",
              "right": "demain"
            },
            {
              "left": "Было интересно!",
              "right": "C'était intéressant !"
            }
          ]
        },
        {
          "kind": "fill",
          "id": "be6-t3",
          "prompt": "Complète : « Hier, nous avons regardé un film. »",
          "before": "Вчера мы",
          "after": "фильм.",
          "answer": "смотрели",
          "options": [
            "смотрели",
            "смотреть",
            "смотрим"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "be6-t4",
          "prompt": "Forme le mot « hier ».",
          "word": "вчера",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "be6-t5",
          "prompt": "Что вы делали вчера?",
          "model": "Мы гуляли и смотрели фильм.",
          "modelEn": "Nous nous sommes promenés et nous avons regardé un film.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Parle de toi et d'un ami (мы) : où étiez-vous, qu'avez-vous fait ?"
        },
        {
          "kind": "choice",
          "id": "be6-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "У тебя есть время в субботу?",
          "options": [
            {
              "label": "Да, есть.",
              "correct": true
            },
            {
              "label": "Мы гуляли.",
              "correct": false
            },
            {
              "label": "Через час.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "record-player",
        "itemName": "Tourne-disque",
        "itemNameRu": "Проигрыватель",
        "ru": "Ура! Проигрыватель с пластинками!",
        "en": "Youpi ! Un tourne-disque avec des disques !",
        "a11y": "Un vieux tourne-disque en forme de valise joue un disque sur une petite table de la mansarde. Murzik danse à côté, les yeux fermés.",
        "image": "/art/berlin/reward-6.jpg",
        "steps": [
          "Irina apporte un vieux tourne-disque.",
          "Il appartenait à sa maman.",
          "Elle a aussi de vieux disques russes.",
          "Murzik en met un et danse."
        ],
        "bridge": "Demain, c'est dimanche — le jour du marché aux puces ! Et leur dernier jour à Berlin."
      }
    },
    {
      "id": "a1-berlin-7",
      "level": "A1",
      "cityId": "berlin",
      "number": 7,
      "title": "Projets pour le week-end",
      "minutes": 7,
      "goals": [
        "Demander les projets de quelqu'un",
        "Dire ce que tu vas faire",
        "Comprendre les heures et les jours à l'oral"
      ],
      "vocabNote": "Pour parler du futur, dis буду + un verbe : Я буду отдыхать — Je vais me reposer. В выходные veut dire « ce week-end ».",
      "vocab": [
        {
          "id": "be7-1",
          "ru": "Какие планы?",
          "en": "Quels sont tes projets ?",
          "a11y": "Irina, une tasse de café à la main, demande avec un sourire amical.",
          "audioLabel": "Écouter Какие планы",
          "image": "/art/berlin/7-1.jpg"
        },
        {
          "id": "be7-2",
          "ru": "Что ты будешь делать?",
          "en": "Qu'est-ce que tu vas faire ?",
          "a11y": "Murzik regarde Tom et ouvre les pattes, interrogateur.",
          "audioLabel": "Écouter Что ты будешь делать",
          "image": "/art/berlin/7-2.jpg"
        },
        {
          "id": "be7-3",
          "ru": "Я буду отдыхать.",
          "en": "Je vais me reposer.",
          "a11y": "Tom est allongé sur le lit, les yeux fermés, l'air heureux et détendu.",
          "audioLabel": "Écouter Я буду отдыхать",
          "image": "/art/berlin/7-3.jpg"
        },
        {
          "id": "be7-4",
          "ru": "Мы будем гулять.",
          "en": "Nous allons nous promener.",
          "a11y": "Murzik et Tom mettent leurs manteaux et leurs écharpes près de la porte.",
          "audioLabel": "Écouter Мы будем гулять",
          "image": "/art/berlin/7-4.jpg"
        },
        {
          "id": "be7-5",
          "ru": "потом",
          "en": "ensuite / plus tard",
          "a11y": "Deux images reliées par une flèche : d'abord une tasse de café, ensuite une promenade au parc.",
          "audioLabel": "Écouter потом",
          "image": "/art/berlin/7-5.jpg"
        },
        {
          "id": "be7-6",
          "ru": "в выходные",
          "en": "ce week-end",
          "a11y": "Un samedi, Murzik se détend au soleil avec un petit pique-nique.",
          "audioLabel": "Écouter в выходные",
          "image": "/art/berlin/7-6.jpg"
        },
        {
          "id": "be7-7",
          "ru": "Пока не знаю.",
          "en": "Je ne sais pas encore.",
          "a11y": "Tom hausse les épaules en souriant et regarde une carte pleine de routes.",
          "audioLabel": "Écouter Пока не знаю",
          "image": "/art/berlin/7-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Le dernier jour à Berlin",
        "note": "Мы идём на рынок — Nous allons au marché. Фотографии — les photos.",
        "lines": [
          {
            "speaker": "irina",
            "ru": "Ну что, какие планы?",
            "en": "Alors, quels sont vos projets ?"
          },
          {
            "speaker": "murzik",
            "ru": "Сегодня воскресенье! Мы идём на рынок.",
            "en": "Aujourd'hui, c'est dimanche ! Nous allons au marché."
          },
          {
            "speaker": "irina",
            "ru": "А потом?",
            "en": "Et ensuite ?"
          },
          {
            "speaker": "tom",
            "ru": "Потом я буду отдыхать.",
            "en": "Ensuite, je vais me reposer."
          },
          {
            "speaker": "murzik",
            "ru": "А я буду смотреть фотографии Тома.",
            "en": "Et moi, je vais regarder les photos de Tom."
          },
          {
            "speaker": "irina",
            "ru": "А завтра?",
            "en": "Et demain ?"
          },
          {
            "speaker": "tom",
            "ru": "Завтра… пока не знаю. Может быть, новый город!",
            "en": "Demain… Je ne sais pas encore. Peut-être une nouvelle ville !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "be7-d1",
          "prompt": "Où vont-ils aujourd'hui ?",
          "options": [
            {
              "label": "Au marché.",
              "correct": true
            },
            {
              "label": "Au cinéma.",
              "correct": false
            },
            {
              "label": "À la gare.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Le futur : буду + verbe",
          "paragraphs": [
            "я буду, ты будешь, мы будем — plus le verbe à l'infinitif : Я буду отдыхать. Мы будем гулять. Un peu comme « je vais + infinitif ».",
            "Pour demander à un ami : Что ты будешь делать? — Qu'est-ce que tu vas faire ?"
          ],
          "examples": [
            {
              "ru": "Завтра я буду отдыхать.",
              "en": "Demain, je vais me reposer."
            },
            {
              "ru": "В выходные мы будем гулять.",
              "en": "Ce week-end, nous allons nous promener."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "be7-t1",
          "prompt": "Écoute. Quand est le train ?",
          "skill": "listening",
          "help": "Voici ton test d'écoute de Berlin.",
          "audio": "Сегодня суббота. Сейчас девять часов. Поезд в десять тридцать, платформа два.",
          "options": [
            {
              "label": "À 10 h 30.",
              "correct": true
            },
            {
              "label": "À 9 h 00.",
              "correct": false
            },
            {
              "label": "À 2 h 00.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "be7-t2",
          "prompt": "Quel jour vient après пятница ?",
          "skill": "words",
          "options": [
            {
              "label": "суббота",
              "correct": true
            },
            {
              "label": "четверг",
              "correct": false
            },
            {
              "label": "воскресенье",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "be7-t3",
          "prompt": "Complète : « Je vais me reposer. »",
          "before": "Я",
          "after": "отдыхать.",
          "answer": "буду",
          "options": [
            "буду",
            "будешь",
            "будем"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "be7-t4",
          "prompt": "Forme le mot « projets ».",
          "word": "планы",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "be7-t5",
          "prompt": "Что ты будешь делать в выходные?",
          "model": "В выходные я буду отдыхать.",
          "modelEn": "Ce week-end, je vais me reposer.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Dis à Irina tes vrais projets pour le week-end."
        },
        {
          "kind": "choice",
          "id": "be7-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Мы опоздали!",
          "options": [
            {
              "label": "Ничего страшного!",
              "correct": true
            },
            {
              "label": "Договорились!",
              "correct": false
            },
            {
              "label": "Было интересно!",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "be7-t7",
          "prompt": "Écoute. À quelle heure se retrouvent-ils ?",
          "skill": "review",
          "audio": "Встречаемся в семь часов, у входа.",
          "options": [
            {
              "label": "À sept heures.",
              "correct": true
            },
            {
              "label": "À six heures.",
              "correct": false
            },
            {
              "label": "À onze heures.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "bicycle",
        "itemName": "Vélo",
        "itemNameRu": "Велосипед",
        "ru": "Ура! У меня велосипед!",
        "en": "Youpi ! J'ai un vélo !",
        "a11y": "Murzik est assis fièrement sur un petit vieux vélo bleu avec un panier, dans un marché aux puces animé, un dimanche. Loin derrière les stands, un gentil vieux chat blanc en chapeau gris sourit et fait signe.",
        "image": "/art/berlin/reward-7.jpg",
        "steps": [
          "Au marché aux puces, Murzik trouve un vieux vélo bleu.",
          "Il a un petit panier pour son écharpe.",
          "Tom y peint un petit chat.",
          "Derrière les stands, le chat blanc au chapeau sourit et disparaît dans la foule."
        ],
        "bridge": "Les sacs sont prêts. Le réveil rouge sonne : c'est l'heure de partir !"
      }
    }
  ],
  "story": {
    "home": {
      "name": "La mansarde de Murzik à Berlin",
      "nameRu": "Мансарда в Берлине",
      "image": "/art/berlin/home.jpg",
      "a11y": "Une petite chambre vide sous un toit en pente, dans une vieille maison berlinoise. Une fenêtre ronde donne sur une cour verdoyante."
    },
    "keepsakeId": "alarm-clock",
    "welcomeRu": "Привет, Берлин!",
    "welcomeEn": "Bonjour, Berlin !",
    "welcomeImage": "/art/rome/finale-5.jpg",
    "welcomeA11y": "Murzik et Tom arrivent à Berlin le matin et lèvent les yeux vers la porte de Brandebourg.",
    "departureImage": "/art/berlin/departure.jpg",
    "departureA11y": "Irina dit au revoir à Murzik et Tom dans la grande gare vitrée de Berlin. Murzik tient le réveil rouge.",
    "finale": [
      {
        "image": "/art/berlin/finale-1.jpg",
        "a11y": "Murzik est dans sa mansarde berlinoise douillette : un lit en bois sous la fenêtre ronde, un calendrier mural, une étagère à livres, une affiche de film, un tourne-disque et un vélo bleu. Il tient le réveil rouge.",
        "lines": [
          {
            "en": "La mansarde de Murzik est douillette maintenant. Un des vieux disques d'Irina tourne."
          },
          {
            "en": "Il emballe son objet préféré pour l'emporter : le réveil rouge. Plus de trains ratés !"
          }
        ]
      },
      {
        "image": "/art/berlin/finale-2.jpg",
        "a11y": "Murzik et Tom passent à vélo devant la porte de Brandebourg et font de grands signes joyeux.",
        "lines": [
          {
            "ru": "Берлин завершён!",
            "en": "Berlin, c'est fait !"
          },
          {
            "en": "7 / 7 leçons"
          },
          {
            "ru": "Уже пять городов!",
            "en": "Déjà cinq villes !"
          }
        ]
      },
      {
        "image": "/art/berlin/lev.jpg",
        "a11y": "Sur un quai de gare animé, un gentil vieux chat blanc en chapeau gris et long manteau bleu marine sourit chaleureusement à Murzik et soulève son chapeau. Murzik le regarde, surpris.",
        "lines": [
          {
            "en": "À la gare, Murzik revoit le chat blanc au chapeau. Cette fois, le chat sourit et soulève son chapeau."
          },
          {
            "ru": "Кто это?",
            "en": "Qui est-ce ?"
          },
          {
            "en": "Puis le vieux chat monte dans un autre train. Tom ne l'a même pas vu."
          }
        ]
      },
      {
        "image": "/art/berlin/departure.jpg",
        "a11y": "Irina dit au revoir à Murzik et Tom dans la grande gare vitrée de Berlin. Murzik tient le réveil rouge.",
        "lines": [
          {
            "ru": "До свидания, Берлин! До свидания, Ирина!",
            "en": "Au revoir, Berlin ! Au revoir, Irina !"
          },
          {
            "ru": "Следующая остановка: Амстердам!",
            "en": "Prochain arrêt : Amsterdam !"
          }
        ]
      },
      {
        "image": "/art/berlin/finale-5.jpg",
        "a11y": "Un train roule vers l'ouest à travers des champs verts et plats avec des moulins, de Berlin vers Amsterdam.",
        "lines": [
          {
            "ru": "Берлин → Амстердам",
            "en": "Berlin → Amsterdam"
          }
        ]
      },
      {
        "image": "/art/amsterdam/arrival.jpg",
        "a11y": "Murzik et Tom arrivent à Amsterdam : un canal bordé de hautes maisons étroites, de petits ponts et beaucoup de vélos.",
        "lines": [
          {
            "ru": "Привет, Амстердам!",
            "en": "Bonjour, Amsterdam !"
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
