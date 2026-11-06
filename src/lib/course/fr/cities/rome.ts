import type { CityPlan } from "../../types";

/** Rome in the French version of the Russian course (`ru` = Russian, `en` = French). Generated from the English version with French texts. */
export const romeFr: Pick<CityPlan, "lessons" | "story"> = {
  "lessons": [
    {
      "id": "a1-rome-1",
      "level": "A1",
      "cityId": "rome",
      "number": 1,
      "title": "Ma famille",
      "minutes": 5,
      "goals": [
        "Présenter ta famille",
        "Dire que tu as un frère ou une sœur",
        "Demander « Tu as… ? »"
      ],
      "vocabNote": "У меня есть … veut dire « J'ai … », mot à mot « Chez moi, il y a … ». Pour demander à un ami : У тебя есть …? La réponse courte : Да, есть.",
      "vocab": [
        {
          "id": "ro1-1",
          "ru": "Это моя семья.",
          "en": "Voici ma famille.",
          "a11y": "Barsik, un chat gris tout rond, montre fièrement une photo de famille encadrée : quatre chats.",
          "audioLabel": "Écouter Это моя семья",
          "image": "/art/rome/1-1.jpg"
        },
        {
          "id": "ro1-2",
          "ru": "мама и папа (мать и отец)",
          "en": "maman et papa (mère et père)",
          "a11y": "Deux chats gris adultes, tante Olia et oncle Petia, sourient côte à côte.",
          "audioLabel": "Écouter мама и папа (мать и отец)",
          "image": "/art/rome/1-2b.jpg"
        },
        {
          "id": "ro1-3",
          "ru": "брат и сестра",
          "en": "frère et sœur",
          "a11y": "Barsik et la petite Moussia, côte à côte, sourient.",
          "audioLabel": "Écouter брат и сестра",
          "image": "/art/rome/1-3b.jpg"
        },
        {
          "id": "ro1-4",
          "ru": "муж и жена",
          "en": "mari et femme",
          "a11y": "Sur une vieille photo de mariage, tante Olia et oncle Petia se tiennent la patte, alliance au doigt.",
          "audioLabel": "Écouter муж и жена",
          "image": "/art/rome/1-4b.jpg"
        },
        {
          "id": "ro1-5",
          "ru": "дети: сын и дочь",
          "en": "les enfants : un fils et une fille",
          "a11y": "Tante Olia serre dans ses bras ses deux enfants : Barsik (son fils) et Moussia (sa fille).",
          "audioLabel": "Écouter дети: сын и дочь",
          "image": "/art/rome/1-5b.jpg"
        },
        {
          "id": "ro1-6",
          "ru": "У меня есть…",
          "en": "J'ai…",
          "a11y": "Moussia lève fièrement une souris en peluche à deux pattes.",
          "audioLabel": "Écouter У меня есть",
          "image": "/art/rome/1-6b.jpg"
        },
        {
          "id": "ro1-7",
          "ru": "У тебя есть…? — Да, есть.",
          "en": "Tu as… ? — Oui.",
          "a11y": "Barsik pose une question à Murzik ; Murzik hoche la tête, une photo de son frère à la main.",
          "audioLabel": "Écouter У тебя есть? — Да, есть",
          "image": "/art/rome/1-7b.jpg"
        }
      ],
      "dialogue": {
        "title": "La famille de Barsik",
        "note": "Barsik est le cousin de Murzik. Проходите! est le « Entrez ! » poli ou pluriel. Только veut dire « seulement ».",
        "lines": [
          {
            "speaker": "barsik",
            "ru": "Мурзик, Том, привет! Проходите!",
            "en": "Murzik, Tom, salut ! Entrez !"
          },
          {
            "speaker": "barsik",
            "ru": "Смотрите, это моя семья. Это мама и папа.",
            "en": "Regardez, voici ma famille. Voici maman et papa."
          },
          {
            "speaker": "tom",
            "ru": "А это кто?",
            "en": "Et qui est-ce ?"
          },
          {
            "speaker": "barsik",
            "ru": "Это моя сестра Муся. Мы их дети.",
            "en": "C'est ma sœur Moussia. Nous sommes leurs enfants."
          },
          {
            "speaker": "murzik",
            "ru": "У тебя есть брат?",
            "en": "Tu as un frère ?"
          },
          {
            "speaker": "barsik",
            "ru": "Нет, только сестра. А у тебя есть брат?",
            "en": "Non, seulement une sœur. Et toi, tu as un frère ?"
          },
          {
            "speaker": "murzik",
            "ru": "Да, есть. Он в Москве.",
            "en": "Oui. Il est à Moscou."
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "ro1-d1",
          "prompt": "Qui fait partie de la famille de Barsik ?",
          "options": [
            {
              "label": "Maman, papa et une petite sœur.",
              "correct": true
            },
            {
              "label": "Maman, papa et un frère.",
              "correct": false
            },
            {
              "label": "Seulement une sœur.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "У меня есть …",
          "paragraphs": [
            "У меня есть брат — J'ai un frère. У тебя есть сестра? — Tu as une sœur ?",
            "On répond avec есть : Да, есть. Pour demander qui est quelqu'un : Кто это? — Это моя сестра."
          ],
          "examples": [
            {
              "ru": "У меня есть сестра.",
              "en": "J'ai une sœur."
            },
            {
              "ru": "У тебя есть брат? — Да, есть.",
              "en": "Tu as un frère ? — Oui."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "match",
          "id": "ro1-t1",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "мама",
              "right": "maman"
            },
            {
              "left": "папа",
              "right": "papa"
            },
            {
              "left": "брат",
              "right": "frère"
            },
            {
              "left": "сестра",
              "right": "sœur"
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ro1-t2",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "listening",
          "audio": "У тебя есть сестра?",
          "options": [
            {
              "label": "Да, есть.",
              "correct": true
            },
            {
              "label": "Это моя мама.",
              "correct": false
            },
            {
              "label": "Мне тоже.",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "ro1-t3",
          "prompt": "Complète.",
          "before": "У",
          "after": "есть брат.",
          "answer": "меня",
          "options": [
            "меня",
            "мне",
            "я"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "ro1-t4",
          "prompt": "Forme le mot « sœur ».",
          "word": "сестра",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "ro1-t5",
          "prompt": "У тебя есть брат или сестра?",
          "model": "Да, у меня есть брат.",
          "modelEn": "Oui, j'ai un frère.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Réponds à voix haute sur ta vraie famille."
        },
        {
          "kind": "choice",
          "id": "ro1-t6",
          "prompt": "Écoute. Qu'as-tu entendu ?",
          "skill": "review",
          "audio": "Нужны яйца.",
          "options": [
            {
              "label": "Нужны яйца.",
              "correct": true
            },
            {
              "label": "Нужен лук.",
              "correct": false
            },
            {
              "label": "Нужна картошка.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "olive-tree",
        "itemName": "Petit olivier",
        "itemNameRu": "Оливковое дерево",
        "ru": "Ура! Маленькое оливковое дерево!",
        "en": "Youpi ! Un petit olivier !",
        "a11y": "Un petit olivier en pot de terre cuite est posé sur la terrasse ensoleillée de la chambre romaine de Murzik. Murzik l'arrose.",
        "image": "/art/rome/reward-1.jpg",
        "steps": [
          "Barsik montre sa chambre à Murzik.",
          "Elle a une petite terrasse.",
          "Tante Olia apporte un petit olivier.",
          "Murzik le met au soleil."
        ],
        "bridge": "Le matin, Moussia réveille Murzik. Elle a une question importante."
      }
    },
    {
      "id": "a1-rome-2",
      "level": "A1",
      "cityId": "rome",
      "number": 2,
      "title": "Quel âge as-tu ?",
      "minutes": 5,
      "goals": [
        "Demander l'âge de quelqu'un",
        "Dire ton âge",
        "Parler d'un grand frère ou d'une petite sœur"
      ],
      "vocabNote": "En russe, l'âge se dit avec « à moi » : Мне двадцать лет — mot à mot « À moi vingt ans ». Ему, c'est « à lui », ей, c'est « à elle ».",
      "vocab": [
        {
          "id": "ro2-1",
          "ru": "Сколько тебе лет?",
          "en": "Quel âge as-tu ?",
          "a11y": "Moussia lève vers Tom de grands yeux curieux.",
          "audioLabel": "Écouter Сколько тебе лет",
          "image": "/art/rome/2-1.jpg"
        },
        {
          "id": "ro2-2",
          "ru": "Мне двадцать лет.",
          "en": "J'ai vingt ans.",
          "a11y": "Un gâteau d'anniversaire avec le chiffre 20.",
          "audioLabel": "Écouter Мне двадцать лет",
          "image": "/art/rome/2-2.jpg"
        },
        {
          "id": "ro2-3",
          "ru": "Сколько ему лет? — Ему три года.",
          "en": "Quel âge a-t-il ? — Il a trois ans.",
          "a11y": "Murzik montre la photo d'un petit chaton à côté d'un gâteau à trois bougies.",
          "audioLabel": "Écouter Сколько ему лет? — Ему три года",
          "image": "/art/rome/2-3b.jpg"
        },
        {
          "id": "ro2-4",
          "ru": "мальчик и девочка",
          "en": "un garçon et une fille",
          "a11y": "Un petit garçon et une petite fille jouent au ballon sur une place de Rome.",
          "audioLabel": "Écouter мальчик и девочка",
          "image": "/art/rome/2-4b.jpg"
        },
        {
          "id": "ro2-5",
          "ru": "Ей сорок лет.",
          "en": "Elle a quarante ans.",
          "a11y": "Tante Olia sourit à côté d'un gâteau avec le chiffre 40.",
          "audioLabel": "Écouter Ей сорок лет",
          "image": "/art/rome/2-5.jpg"
        },
        {
          "id": "ro2-6",
          "ru": "старший брат, младшая сестра",
          "en": "grand frère, petite sœur",
          "a11y": "Barsik se tient bien droit à côté de la petite Moussia, la patte sur sa tête.",
          "audioLabel": "Écouter старший брат, младшая сестра",
          "image": "/art/rome/2-6b.jpg"
        },
        {
          "id": "ro2-7",
          "ru": "мужчина и женщина",
          "en": "un homme et une femme",
          "a11y": "Un homme et une femme se promènent ensemble devant une fontaine romaine.",
          "audioLabel": "Écouter мужчина и женщина",
          "image": "/art/rome/2-7b.jpg"
        }
      ],
      "dialogue": {
        "title": "La question de Moussia",
        "note": "Тому veut dire « à Tom » : les prénoms changent aussi après cette question. Секрет veut dire « secret ». Moussia est encore une enfant : ребёнок (un enfant), дети (des enfants).",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Муся, сколько тебе лет?",
            "en": "Moussia, quel âge as-tu ?"
          },
          {
            "speaker": "musya",
            "ru": "Мне пять лет! А тебе?",
            "en": "J'ai cinq ans ! Et toi ?"
          },
          {
            "speaker": "murzik",
            "ru": "Это секрет!",
            "en": "C'est un secret !"
          },
          {
            "speaker": "musya",
            "ru": "А Тому сколько лет?",
            "en": "Et Tom, quel âge a-t-il ?"
          },
          {
            "speaker": "tom",
            "ru": "Мне двадцать пять лет.",
            "en": "J'ai vingt-cinq ans."
          },
          {
            "speaker": "musya",
            "ru": "Ого! Ты старый!",
            "en": "Ouah ! Tu es vieux !"
          },
          {
            "speaker": "barsik",
            "ru": "Муся! Том молодой! А ты — моя младшая сестра.",
            "en": "Moussia ! Tom est jeune ! Et toi, tu es ma petite sœur."
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "ro2-d1",
          "prompt": "Quel âge a Moussia ?",
          "options": [
            {
              "label": "Cinq ans.",
              "correct": true
            },
            {
              "label": "Vingt-cinq ans.",
              "correct": false
            },
            {
              "label": "Trois ans.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Год, года ou лет ?",
          "paragraphs": [
            "Le mot « ans » change avec le nombre. 1, 21, 31 → год. 2–4, 22–24 → года. 5–20, 25–30 → лет.",
            "À qui ? Мне (à moi), тебе (à toi), ему (à lui), ей (à elle) : Ему три года. Ей сорок лет."
          ],
          "examples": [
            {
              "ru": "Ему один год.",
              "en": "Il a un an."
            },
            {
              "ru": "Ей три года.",
              "en": "Elle a trois ans."
            },
            {
              "ru": "Мне двадцать пять лет.",
              "en": "J'ai vingt-cinq ans."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "ro2-t1",
          "prompt": "Écoute. Quel âge a cette personne ?",
          "skill": "listening",
          "audio": "Мне двадцать пять лет.",
          "options": [
            {
              "label": "25",
              "correct": true
            },
            {
              "label": "35",
              "correct": false
            },
            {
              "label": "20",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ro2-t2",
          "prompt": "Que veut dire младшая сестра ?",
          "skill": "words",
          "options": [
            {
              "label": "petite sœur",
              "correct": true
            },
            {
              "label": "grande sœur",
              "correct": false
            },
            {
              "label": "petit frère",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "ro2-t3",
          "prompt": "Complète.",
          "before": "Ему три",
          "after": ".",
          "answer": "года",
          "options": [
            "года",
            "лет",
            "год"
          ],
          "skill": "grammar"
        },
        {
          "kind": "fill",
          "id": "ro2-t4",
          "prompt": "Quelle lettre manque ? (plus jeune)",
          "before": "мл",
          "after": "дшая",
          "answer": "а",
          "options": [
            "а",
            "о",
            "е"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "ro2-t5",
          "prompt": "Сколько тебе лет?",
          "model": "Мне двадцать лет.",
          "modelEn": "J'ai vingt ans.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Dis ton vrai âge à voix haute — ou garde le secret : « Это секрет! »"
        },
        {
          "kind": "choice",
          "id": "ro2-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Кто это?",
          "options": [
            {
              "label": "Это моя мама.",
              "correct": true
            },
            {
              "label": "Мне пять лет.",
              "correct": false
            },
            {
              "label": "Да, есть.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "rocking-chair",
        "itemName": "Fauteuil à bascule",
        "itemNameRu": "Кресло-качалка",
        "ru": "Ура! Кресло-качалка!",
        "en": "Youpi ! Un fauteuil à bascule !",
        "a11y": "Murzik se balance joyeusement dans un vieux fauteuil à bascule en bois, avec un coussin tricoté, à côté de l'olivier sur sa terrasse.",
        "image": "/art/rome/reward-2.jpg",
        "steps": [
          "Oncle Petia apporte un vieux fauteuil à bascule.",
          "C'était le fauteuil de grand-père.",
          "Il est vieux, mais très confortable.",
          "Murzik se balance et sourit."
        ],
        "bridge": "Le papa et la maman de Barsik rentrent à la maison. Murzik ne les a jamais rencontrés."
      }
    },
    {
      "id": "a1-rome-3",
      "level": "A1",
      "cityId": "rome",
      "number": 3,
      "title": "Comment est-il ?",
      "minutes": 5,
      "goals": [
        "Demander à quoi ressemble quelqu'un",
        "Dire grand, petit, jeune, âgé, beau",
        "Dire à qui quelqu'un ressemble"
      ],
      "vocabNote": "Какой он? demande « Comment est-il ? ». Pour une femme : Какая она? La réponse change de la même façon, comme grand / grande en français : высокий — высокая.",
      "vocab": [
        {
          "id": "ro3-1",
          "ru": "Какой он?",
          "en": "Comment est-il ?",
          "a11y": "Tom regarde une photo de famille et montre l'un des chats, l'air curieux.",
          "audioLabel": "Écouter Какой он",
          "image": "/art/rome/3-1.jpg"
        },
        {
          "id": "ro3-2",
          "ru": "высокий / невысокий",
          "en": "grand / petit",
          "a11y": "Un grand chat gris et un petit chat gris côte à côte.",
          "audioLabel": "Écouter высокий / невысокий",
          "image": "/art/rome/3-2b.jpg"
        },
        {
          "id": "ro3-3",
          "ru": "лицо: глаза, нос, рот",
          "en": "le visage : les yeux, le nez, la bouche",
          "a11y": "Le visage de Murzik en gros plan, tout sympathique : ses yeux ambrés, son nez rose et sa bouche souriante.",
          "audioLabel": "Écouter лицо: глаза, нос, рот",
          "image": "/art/rome/3-3b.jpg"
        },
        {
          "id": "ro3-4",
          "ru": "молодой / пожилой",
          "en": "jeune / âgé",
          "a11y": "Un jeune chat et un vieux chat à lunettes sont assis sur un banc.",
          "audioLabel": "Écouter молодой / пожилой",
          "image": "/art/rome/3-4b.jpg"
        },
        {
          "id": "ro3-5",
          "ru": "У него тёмные волосы.",
          "en": "Il a les cheveux bruns.",
          "a11y": "Marco, un jeune homme aux cheveux bruns et bouclés, sourit.",
          "audioLabel": "Écouter У него тёмные волосы",
          "image": "/art/rome/3-5b.jpg"
        },
        {
          "id": "ro3-6",
          "ru": "красивый",
          "en": "beau / belle",
          "a11y": "Devant un miroir, oncle Petia ajuste son nœud papillon ; il a fière allure.",
          "audioLabel": "Écouter красивый",
          "image": "/art/rome/3-6.jpg"
        },
        {
          "id": "ro3-7",
          "ru": "Он похож на папу.",
          "en": "Il ressemble à son papa.",
          "a11y": "Barsik et oncle Petia, côte à côte, prennent la même pose et ont la même tête.",
          "audioLabel": "Écouter Он похож на папу",
          "image": "/art/rome/3-7.jpg"
        }
      ],
      "dialogue": {
        "title": "La photo de famille",
        "note": "Дедушка veut dire « papi ». Но veut dire « mais ». Pour une fille : Она похожа на маму.",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Барсик, а какой твой папа?",
            "en": "Barsik, et ton papa, il est comment ?"
          },
          {
            "speaker": "barsik",
            "ru": "Папа высокий и красивый.",
            "en": "Papa est grand et beau."
          },
          {
            "speaker": "murzik",
            "ru": "А мама?",
            "en": "Et maman ?"
          },
          {
            "speaker": "barsik",
            "ru": "Мама невысокая.",
            "en": "Maman est petite."
          },
          {
            "speaker": "tom",
            "ru": "А дедушка?",
            "en": "Et papi ?"
          },
          {
            "speaker": "barsik",
            "ru": "Дедушка пожилой, но очень красивый!",
            "en": "Papi est âgé, mais très beau !"
          },
          {
            "speaker": "murzik",
            "ru": "Смотри, Муся похожа на маму!",
            "en": "Regarde, Moussia ressemble à sa maman !"
          },
          {
            "speaker": "barsik",
            "ru": "Да! А я похож на папу.",
            "en": "Oui ! Et moi, je ressemble à mon papa."
          },
          {
            "speaker": "murzik",
            "ru": "У Муси большие зелёные глаза, как у мамы!",
            "en": "Moussia a de grands yeux verts, comme sa maman !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "ro3-d1",
          "prompt": "Comment est le papa de Barsik ?",
          "options": [
            {
              "label": "Grand et beau.",
              "correct": true
            },
            {
              "label": "Petit.",
              "correct": false
            },
            {
              "label": "Âgé.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Высокий ou высокая ?",
          "paragraphs": [
            "Comme en français, les adjectifs changent avec la personne : он высокий, она высокая. Il est grand, elle est grande.",
            "Pareil avec похож : он похож на папу, она похожа на маму.",
            "Pour décrire les yeux ou les cheveux, on utilise у + lui / elle : У него тёмные волосы. У неё зелёные глаза."
          ],
          "examples": [
            {
              "ru": "Папа высокий.",
              "en": "Papa est grand."
            },
            {
              "ru": "Мама невысокая.",
              "en": "Maman est petite."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "truefalse",
          "id": "ro3-t1",
          "prompt": "Vrai ou faux : la maman de Barsik est grande.",
          "statement": "Мама Барсика высокая.",
          "correct": false,
          "skill": "words"
        },
        {
          "kind": "choice",
          "id": "ro3-t2",
          "prompt": "Écoute. Qu'as-tu entendu ?",
          "skill": "listening",
          "audio": "Она высокая.",
          "options": [
            {
              "label": "Она высокая.",
              "correct": true
            },
            {
              "label": "Он высокий.",
              "correct": false
            },
            {
              "label": "Она невысокая.",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "ro3-t3",
          "prompt": "Complète.",
          "before": "Мама",
          "after": ".",
          "answer": "невысокая",
          "options": [
            "невысокая",
            "невысокий",
            "невысокое"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "ro3-t4",
          "prompt": "Forme le mot « jeune ».",
          "word": "молодой",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "ro3-t5",
          "prompt": "Какая твоя мама?",
          "model": "Моя мама невысокая и красивая.",
          "modelEn": "Ma maman est petite et belle.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Décris à voix haute une vraie personne : ta maman, un ami, n'importe qui."
        },
        {
          "kind": "choice",
          "id": "ro3-t6",
          "prompt": "Écoute. Quel âge a-t-elle ?",
          "skill": "review",
          "audio": "Ей сорок лет.",
          "options": [
            {
              "label": "40",
              "correct": true
            },
            {
              "label": "14",
              "correct": false
            },
            {
              "label": "4",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "mirror",
        "itemName": "Miroir rond",
        "itemNameRu": "Зеркало",
        "ru": "Ура! У меня зеркало!",
        "en": "Youpi ! J'ai un miroir !",
        "a11y": "Murzik s'admire dans un miroir rond au cadre doré, accroché au mur de sa chambre, et ajuste son écharpe.",
        "image": "/art/rome/reward-3.jpg",
        "steps": [
          "Oncle Petia donne à Murzik un vieux miroir rond.",
          "Murzik l'accroche au mur.",
          "Il se regarde.",
          "« Très beau ! » dit-il."
        ],
        "bridge": "Maintenant, Murzik sait à quoi ressemble la famille. Mais quel est leur caractère ?"
      }
    },
    {
      "id": "a1-rome-4",
      "level": "A1",
      "cityId": "rome",
      "number": 4,
      "title": "Quel caractère a-t-il ?",
      "minutes": 5,
      "goals": [
        "Demander le caractère de quelqu'un",
        "Dire gentil, joyeux, intelligent, sérieux, paresseux",
        "Dire « très »"
      ],
      "vocabNote": "Quand elle parle d'elle-même, une femme utilise la forme en -ая : Я весёлая. Un homme dit Я весёлый. C'est comme « je suis joyeux / joyeuse ».",
      "vocab": [
        {
          "id": "ro4-1",
          "ru": "Какой у него характер?",
          "en": "Quel caractère a-t-il ?",
          "a11y": "Tom et Murzik chuchotent en regardant Barsik endormi sur un canapé.",
          "audioLabel": "Écouter Какой у него характер",
          "image": "/art/rome/4-1.jpg"
        },
        {
          "id": "ro4-2",
          "ru": "добрый",
          "en": "gentil",
          "a11y": "Tante Olia donne une couverture chaude à Moussia.",
          "audioLabel": "Écouter добрый",
          "image": "/art/rome/4-2.jpg"
        },
        {
          "id": "ro4-3",
          "ru": "весёлый",
          "en": "joyeux / drôle",
          "a11y": "Barsik danse et rit, une cuillère en guise de micro.",
          "audioLabel": "Écouter весёлый",
          "image": "/art/rome/4-3.jpg"
        },
        {
          "id": "ro4-4",
          "ru": "умный",
          "en": "intelligent",
          "a11y": "Moussia porte de grandes lunettes et lit un gros livre.",
          "audioLabel": "Écouter умный",
          "image": "/art/rome/4-4.jpg"
        },
        {
          "id": "ro4-5",
          "ru": "серьёзный",
          "en": "sérieux",
          "a11y": "Oncle Petia lit le journal, l'air sérieux, les sourcils levés.",
          "audioLabel": "Écouter серьёзный",
          "image": "/art/rome/4-5.jpg"
        },
        {
          "id": "ro4-6",
          "ru": "ленивый",
          "en": "paresseux",
          "a11y": "Barsik est allongé sur le canapé, les yeux fermés. L'horloge indique midi.",
          "audioLabel": "Écouter ленивый",
          "image": "/art/rome/4-6.jpg"
        },
        {
          "id": "ro4-7",
          "ru": "Он очень добрый.",
          "en": "Il est très gentil.",
          "a11y": "Oncle Petia sourit et partage son journal et son thé avec Murzik.",
          "audioLabel": "Écouter Он очень добрый",
          "image": "/art/rome/4-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Qui est paresseux ?",
        "note": "Весь день veut dire « toute la journée ». Неправда! veut dire « C'est faux ! ».",
        "lines": [
          {
            "speaker": "tom",
            "ru": "Барсик, какой у тебя характер?",
            "en": "Barsik, tu as quel caractère ?"
          },
          {
            "speaker": "barsik",
            "ru": "Я весёлый и добрый.",
            "en": "Je suis joyeux et gentil."
          },
          {
            "speaker": "musya",
            "ru": "И ленивый! Он спит весь день!",
            "en": "Et paresseux ! Il dort toute la journée !"
          },
          {
            "speaker": "barsik",
            "ru": "Неправда! Я… умный!",
            "en": "C'est faux ! Je suis… intelligent !"
          },
          {
            "speaker": "murzik",
            "ru": "А папа?",
            "en": "Et ton papa ?"
          },
          {
            "speaker": "barsik",
            "ru": "Папа серьёзный, но очень добрый.",
            "en": "Papa est sérieux, mais très gentil."
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "ro4-d1",
          "prompt": "Que dit Moussia de Barsik ?",
          "options": [
            {
              "label": "Il est paresseux.",
              "correct": true
            },
            {
              "label": "Il est sérieux.",
              "correct": false
            },
            {
              "label": "Il est triste.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Очень et les adjectifs",
          "paragraphs": [
            "Очень (très) se place devant l'adjectif : очень добрый, очень весёлая.",
            "Pour un homme : Какой у него характер? Pour une femme : Какой у неё характер?"
          ],
          "examples": [
            {
              "ru": "Он очень добрый.",
              "en": "Il est très gentil."
            },
            {
              "ru": "Она очень весёлая.",
              "en": "Elle est très joyeuse."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "match",
          "id": "ro4-t1",
          "prompt": "Associe le russe et le français.",
          "skill": "words",
          "pairs": [
            {
              "left": "добрый",
              "right": "gentil"
            },
            {
              "left": "весёлый",
              "right": "joyeux"
            },
            {
              "left": "умный",
              "right": "intelligent"
            },
            {
              "left": "ленивый",
              "right": "paresseux"
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ro4-t2",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "listening",
          "audio": "Какой у него характер?",
          "options": [
            {
              "label": "Он очень добрый.",
              "correct": true
            },
            {
              "label": "Ему пять лет.",
              "correct": false
            },
            {
              "label": "Он высокий.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ro4-t3",
          "prompt": "Trouve la phrase correcte.",
          "skill": "grammar",
          "options": [
            {
              "label": "Она очень весёлая.",
              "correct": true
            },
            {
              "label": "Она очень весёлый.",
              "correct": false
            },
            {
              "label": "Она очень весело.",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "ro4-t4",
          "prompt": "Quelle lettre manque ? (joyeux)",
          "before": "в",
          "after": "сёлый",
          "answer": "е",
          "options": [
            "е",
            "ё",
            "и"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "ro4-t5",
          "prompt": "Какой у тебя характер?",
          "model": "Я весёлый и добрый.",
          "modelEn": "Je suis joyeux et gentil.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Décris-toi à voix haute. Une femme dit : Я весёлая и добрая."
        },
        {
          "kind": "choice",
          "id": "ro4-t6",
          "prompt": "Écoute. Qu'as-tu entendu ?",
          "skill": "review",
          "audio": "Он похож на папу.",
          "options": [
            {
              "label": "Он похож на папу.",
              "correct": true
            },
            {
              "label": "Она похожа на маму.",
              "correct": false
            },
            {
              "label": "Он высокий, как папа.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "hammock",
        "itemName": "Hamac",
        "itemNameRu": "Гамак",
        "ru": "Ура! Гамак на террасе!",
        "en": "Youpi ! Un hamac sur la terrasse !",
        "a11y": "Murzik et Barsik sont allongés ensemble dans un hamac rayé sur la terrasse ensoleillée, les yeux mi-clos.",
        "image": "/art/rome/reward-4.jpg",
        "steps": [
          "Barsik a un vieux hamac.",
          "Il l'accroche sur la terrasse de Murzik.",
          "Murzik l'essaie.",
          "Maintenant, ils sont tous les deux un peu paresseux."
        ],
        "bridge": "Le soir, les parents de Barsik rentrent du travail. Que font-ils ?"
      }
    },
    {
      "id": "a1-rome-5",
      "level": "A1",
      "cityId": "rome",
      "number": 5,
      "title": "Tu fais quoi dans la vie ?",
      "minutes": 5,
      "goals": [
        "Demander le métier de quelqu'un",
        "Nommer quelques métiers",
        "Dire où quelqu'un travaille"
      ],
      "vocabNote": "Кем ты работаешь? veut dire mot à mot « En tant que qui travailles-tu ? ». Beaucoup de métiers ont une forme féminine, comme en français : учитель — учительница, студент — студентка.",
      "vocab": [
        {
          "id": "ro5-1",
          "ru": "Кем ты работаешь?",
          "en": "Tu fais quoi dans la vie ?",
          "a11y": "À la porte de la cuisine, Murzik pose une question à oncle Petia.",
          "audioLabel": "Écouter Кем ты работаешь",
          "image": "/art/rome/5-1.jpg"
        },
        {
          "id": "ro5-2",
          "ru": "Я врач.",
          "en": "Je suis médecin.",
          "a11y": "Un chat médecin en blouse blanche, avec un stéthoscope.",
          "audioLabel": "Écouter Я врач",
          "image": "/art/rome/5-2.jpg"
        },
        {
          "id": "ro5-3",
          "ru": "Он повар.",
          "en": "Il est cuisinier.",
          "a11y": "Oncle Petia, coiffé d'une grande toque blanche, remue une grande marmite.",
          "audioLabel": "Écouter Он повар",
          "image": "/art/rome/5-3.jpg"
        },
        {
          "id": "ro5-4",
          "ru": "Она учительница.",
          "en": "Elle est professeure.",
          "a11y": "Tante Olia est devant un tableau noir, une craie à la patte.",
          "audioLabel": "Écouter Она учительница",
          "image": "/art/rome/5-4.jpg"
        },
        {
          "id": "ro5-5",
          "ru": "Я студент.",
          "en": "Je suis étudiant.",
          "a11y": "Barsik porte un sac à dos et une pile de livres, l'air endormi.",
          "audioLabel": "Écouter Я студент",
          "image": "/art/rome/5-5.jpg"
        },
        {
          "id": "ro5-6",
          "ru": "Я работаю в…",
          "en": "Je travaille dans / à…",
          "a11y": "Tom est assis devant un ordinateur portable dans un petit bureau avec une fenêtre.",
          "audioLabel": "Écouter Я работаю в",
          "image": "/art/rome/5-6.jpg"
        },
        {
          "id": "ro5-7",
          "ru": "Она инженер.",
          "en": "Elle est ingénieure.",
          "a11y": "Une jeune femme en casque de chantier tient des plans devant un pont en construction.",
          "audioLabel": "Écouter Она инженер",
          "image": "/art/rome/5-7b.jpg"
        }
      ],
      "dialogue": {
        "title": "La cuisine d'oncle Petia",
        "note": "Murzik vouvoie oncle Petia : Кем вы работаете? В ресторане — dans un restaurant. В школе — dans une école. Художница veut dire « artiste » (une femme).",
        "lines": [
          {
            "speaker": "murzik",
            "ru": "Дядя Петя, кем вы работаете?",
            "en": "Oncle Petia, que faites-vous dans la vie ?"
          },
          {
            "speaker": "uncle",
            "ru": "Я повар. Я работаю в ресторане.",
            "en": "Je suis cuisinier. Je travaille dans un restaurant."
          },
          {
            "speaker": "murzik",
            "ru": "А тётя Оля?",
            "en": "Et tante Olia ?"
          },
          {
            "speaker": "uncle",
            "ru": "Она учительница. Она работает в школе.",
            "en": "Elle est professeure. Elle travaille dans une école."
          },
          {
            "speaker": "barsik",
            "ru": "А я студент!",
            "en": "Et moi, je suis étudiant !"
          },
          {
            "speaker": "musya",
            "ru": "А я работаю дома! Я художница!",
            "en": "Et moi, je travaille à la maison ! Je suis artiste !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "ro5-d1",
          "prompt": "Quel est le métier d'oncle Petia ?",
          "options": [
            {
              "label": "Il est cuisinier.",
              "correct": true
            },
            {
              "label": "Il est médecin.",
              "correct": false
            },
            {
              "label": "Il est professeur.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Я работаю — он работает",
          "paragraphs": [
            "La terminaison du verbe change avec la personne : я работаю, ты работаешь, он / она работает.",
            "Avec un métier, pas de verbe, et pas d'article non plus — comme « je suis médecin » : Я врач. Он повар. Она учительница."
          ],
          "examples": [
            {
              "ru": "Я работаю в школе.",
              "en": "Je travaille dans une école."
            },
            {
              "ru": "Он работает дома.",
              "en": "Il travaille à la maison."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "ro5-t1",
          "prompt": "Que veut dire врач ?",
          "skill": "words",
          "options": [
            {
              "label": "médecin",
              "correct": true
            },
            {
              "label": "cuisinier",
              "correct": false
            },
            {
              "label": "étudiant",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ro5-t2",
          "prompt": "Écoute. Qu'est-ce que ça veut dire ?",
          "skill": "listening",
          "audio": "Она работает в школе.",
          "options": [
            {
              "label": "Elle travaille dans une école.",
              "correct": true
            },
            {
              "label": "Elle va à l'école.",
              "correct": false
            },
            {
              "label": "Elle est cuisinière.",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "ro5-t3",
          "prompt": "Complète.",
          "before": "Он",
          "after": "в ресторане.",
          "answer": "работает",
          "options": [
            "работает",
            "работаю",
            "работаешь"
          ],
          "skill": "grammar"
        },
        {
          "kind": "spell",
          "id": "ro5-t4",
          "prompt": "Forme le mot « cuisinier ».",
          "word": "повар",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "ro5-t5",
          "prompt": "Кем ты работаешь?",
          "model": "Я студент.",
          "modelEn": "Je suis étudiant.",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Réponds à voix haute sur toi : Я врач, Я учитель, Я работаю в… Une étudiante dit Я студентка."
        },
        {
          "kind": "choice",
          "id": "ro5-t6",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Какой у него характер?",
          "options": [
            {
              "label": "Он весёлый.",
              "correct": true
            },
            {
              "label": "Он повар.",
              "correct": false
            },
            {
              "label": "Ему три года.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "jug",
        "itemName": "Cruche en terre cuite",
        "itemNameRu": "Кувшин",
        "ru": "Ура! Глиняный кувшин!",
        "en": "Youpi ! Une cruche en terre cuite !",
        "a11y": "Une cruche en terre cuite peinte de citrons est posée sur une petite étagère dans la chambre de Murzik, avec quelques fleurs dedans.",
        "image": "/art/rome/reward-5.jpg",
        "steps": [
          "Le restaurant d'oncle Petia a de vieilles cruches en terre cuite.",
          "Il en rapporte une pour Murzik.",
          "Elle est peinte de citrons.",
          "Murzik y met des fleurs."
        ],
        "bridge": "Barsik veut que Murzik rencontre son meilleur ami."
      }
    },
    {
      "id": "a1-rome-6",
      "level": "A1",
      "cityId": "rome",
      "number": 6,
      "title": "Mes amis",
      "minutes": 5,
      "goals": [
        "Présenter un ami",
        "Dire « ami » et « amie »",
        "Dire « nous » et « ils »"
      ],
      "vocabNote": "Друг, c'est un ami, подруга, une amie. Познакомься! (Je te présente…) s'utilise avec un ami ; poliment : Познакомьтесь!",
      "vocab": [
        {
          "id": "ro6-1",
          "ru": "Это мой друг.",
          "en": "C'est mon ami.",
          "a11y": "Barsik pose sa patte sur l'épaule de Marco, un jeune homme aux cheveux bruns et bouclés.",
          "audioLabel": "Écouter Это мой друг",
          "image": "/art/rome/6-1.jpg"
        },
        {
          "id": "ro6-2",
          "ru": "Это моя подруга.",
          "en": "C'est mon amie.",
          "a11y": "Marco présente Giulia, une jeune femme avec une écharpe rouge et un carnet de croquis.",
          "audioLabel": "Écouter Это моя подруга",
          "image": "/art/rome/6-2.jpg"
        },
        {
          "id": "ro6-3",
          "ru": "Познакомься, это…",
          "en": "Je te présente…",
          "a11y": "Barsik fait un geste entre Murzik et Marco pour les présenter.",
          "audioLabel": "Écouter Познакомься, это",
          "image": "/art/rome/6-3.jpg"
        },
        {
          "id": "ro6-4",
          "ru": "Мы друзья.",
          "en": "Nous sommes amis.",
          "a11y": "Murzik, Barsik, Tom et Marco se tiennent bras dessus bras dessous, en souriant.",
          "audioLabel": "Écouter Мы друзья",
          "image": "/art/rome/6-4.jpg"
        },
        {
          "id": "ro6-5",
          "ru": "Они из Италии.",
          "en": "Ils viennent d'Italie.",
          "a11y": "Marco et Giulia font coucou devant le Colisée avec un petit drapeau italien.",
          "audioLabel": "Écouter Они из Италии",
          "image": "/art/rome/6-5.jpg"
        },
        {
          "id": "ro6-6",
          "ru": "Он хороший человек.",
          "en": "C'est quelqu'un de bien.",
          "a11y": "Marco aide une vieille dame à porter ses sacs de courses.",
          "audioLabel": "Écouter Он хороший человек",
          "image": "/art/rome/6-6b.jpg"
        },
        {
          "id": "ro6-7",
          "ru": "Давай дружить!",
          "en": "Soyons amis !",
          "a11y": "Murzik tend la patte à Marco, qui la serre avec joie.",
          "audioLabel": "Écouter Давай дружить",
          "image": "/art/rome/6-7.jpg"
        }
      ],
      "dialogue": {
        "title": "Voici Marco",
        "lines": [
          {
            "speaker": "barsik",
            "ru": "Мурзик, познакомься, это мой друг Марко.",
            "en": "Murzik, je te présente mon ami Marco."
          },
          {
            "speaker": "marco",
            "ru": "Привет! Очень приятно!",
            "en": "Salut ! Enchanté !"
          },
          {
            "speaker": "murzik",
            "ru": "Мне тоже! Ты говоришь по-русски?",
            "en": "Moi aussi ! Tu parles russe ?"
          },
          {
            "speaker": "marco",
            "ru": "Немного. А это моя подруга Джулия.",
            "en": "Un peu. Et voici mon amie Giulia."
          },
          {
            "speaker": "barsik",
            "ru": "Они из Италии. Мы друзья!",
            "en": "Ils viennent d'Italie. Nous sommes amis !"
          },
          {
            "speaker": "murzik",
            "ru": "Давай дружить!",
            "en": "Soyons amis !"
          },
          {
            "speaker": "marco",
            "ru": "Давай!",
            "en": "D'accord !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "ro6-d1",
          "prompt": "Qui est Marco ?",
          "options": [
            {
              "label": "L'ami de Barsik.",
              "correct": true
            },
            {
              "label": "Le frère de Barsik.",
              "correct": false
            },
            {
              "label": "Un serveur.",
              "correct": false
            }
          ]
        }
      },
      "grammar": [
        {
          "title": "Мы et они",
          "paragraphs": [
            "мы — nous, они — ils / elles. Avec eux, le nom est au pluriel : Мы друзья. Они из Италии.",
            "Au pluriel, друг devient друзья. C'est irrégulier : apprends-le tel quel."
          ],
          "examples": [
            {
              "ru": "Мы друзья.",
              "en": "Nous sommes amis."
            },
            {
              "ru": "Они вместе.",
              "en": "Ils sont ensemble."
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "truefalse",
          "id": "ro6-t1",
          "prompt": "Vrai ou faux : Marco est le frère de Barsik.",
          "statement": "Марко — брат Барсика.",
          "correct": false,
          "skill": "words"
        },
        {
          "kind": "choice",
          "id": "ro6-t2",
          "prompt": "Écoute. Qu'as-tu entendu ?",
          "skill": "listening",
          "audio": "Это моя подруга.",
          "options": [
            {
              "label": "Это моя подруга.",
              "correct": true
            },
            {
              "label": "Это мой друг.",
              "correct": false
            },
            {
              "label": "Это моя сестра.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ro6-t3",
          "prompt": "Trouve la phrase correcte.",
          "skill": "grammar",
          "options": [
            {
              "label": "Мы друзья.",
              "correct": true
            },
            {
              "label": "Мы друг.",
              "correct": false
            },
            {
              "label": "Мы подруга.",
              "correct": false
            }
          ]
        },
        {
          "kind": "fill",
          "id": "ro6-t4",
          "prompt": "Quelle lettre manque ? (amis)",
          "before": "др",
          "after": "зья",
          "answer": "у",
          "options": [
            "у",
            "о",
            "а"
          ],
          "tight": true,
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "ro6-t5",
          "prompt": "Познакомься, это Марко.",
          "model": "Привет! Очень приятно!",
          "modelEn": "Salut ! Enchanté !",
          "promptLang": "ru",
          "skill": "speaking",
          "help": "Barsik présente son ami. Réponds à voix haute."
        },
        {
          "kind": "choice",
          "id": "ro6-t6",
          "prompt": "Écoute. Qu'est-ce que ça veut dire ?",
          "skill": "review",
          "audio": "Он работает дома.",
          "options": [
            {
              "label": "Il travaille à la maison.",
              "correct": true
            },
            {
              "label": "Il habite à la maison.",
              "correct": false
            },
            {
              "label": "Il est à la maison en ce moment.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "mosaic",
        "itemName": "Mosaïque",
        "itemNameRu": "Мозаика",
        "ru": "Ура! Мозаика с котом!",
        "en": "Youpi ! Une mosaïque avec un chat !",
        "a11y": "Une petite mosaïque carrée représentant un chat roux, en pierres colorées, est accrochée au mur jaune de la chambre de Murzik.",
        "image": "/art/rome/reward-6.jpg",
        "steps": [
          "Marco fait des mosaïques.",
          "Il en fait une petite pour son nouvel ami.",
          "Elle montre un chat roux avec une écharpe.",
          "Murzik l'accroche au mur."
        ],
        "bridge": "Demain, c'est la dernière soirée à Rome. Tante Olia prépare un grand dîner de famille."
      }
    },
    {
      "id": "a1-rome-7",
      "level": "A1",
      "cityId": "rome",
      "number": 7,
      "title": "Dîner de famille",
      "minutes": 5,
      "goals": [
        "Inviter les invités à table",
        "Demander à quelqu'un de passer quelque chose",
        "Remercier l'hôte après le repas"
      ],
      "vocabNote": "За семью! (À la famille !) est un toast. Les Russes portent souvent un petit toast lors d'un dîner de famille, même avec du jus ou du thé.",
      "vocab": [
        {
          "id": "ro7-1",
          "ru": "Садитесь, пожалуйста!",
          "en": "Asseyez-vous, je vous en prie !",
          "a11y": "Tante Olia invite tout le monde à une longue table garnie de pâtes et de pain.",
          "audioLabel": "Écouter Садитесь, пожалуйста",
          "image": "/art/rome/7-1.jpg"
        },
        {
          "id": "ro7-2",
          "ru": "Передай, пожалуйста, хлеб.",
          "en": "Passe-moi le pain, s'il te plaît.",
          "a11y": "Moussia passe une corbeille de pain à Murzik par-dessus la table.",
          "audioLabel": "Écouter Передай, пожалуйста, хлеб",
          "image": "/art/rome/7-2.jpg"
        },
        {
          "id": "ro7-3",
          "ru": "Ещё немного?",
          "en": "Encore un peu ?",
          "a11y": "Tante Olia tient une grande cuillère au-dessus de l'assiette de Murzik, avec un sourire interrogateur.",
          "audioLabel": "Écouter Ещё немного",
          "image": "/art/rome/7-3.jpg"
        },
        {
          "id": "ro7-4",
          "ru": "Спасибо, больше не надо.",
          "en": "Merci, ça ira pour moi.",
          "a11y": "Murzik lève poliment la patte au-dessus de son assiette pleine et tapote son ventre tout rond.",
          "audioLabel": "Écouter Спасибо, больше не надо",
          "image": "/art/rome/7-4.jpg"
        },
        {
          "id": "ro7-5",
          "ru": "Было очень вкусно!",
          "en": "C'était délicieux !",
          "a11y": "Murzik et Tom sourient à tante Olia devant des assiettes vides.",
          "audioLabel": "Écouter Было очень вкусно",
          "image": "/art/rome/7-5.jpg"
        },
        {
          "id": "ro7-6",
          "ru": "За семью!",
          "en": "À la famille !",
          "a11y": "Tout le monde à table lève son verre de jus pour trinquer.",
          "audioLabel": "Écouter За семью",
          "image": "/art/rome/7-6.jpg"
        },
        {
          "id": "ro7-7",
          "ru": "Приезжайте ещё!",
          "en": "Revenez nous voir !",
          "a11y": "Toute la famille dit au revoir à la porte.",
          "audioLabel": "Écouter Приезжайте ещё",
          "image": "/art/rome/7-7.jpg"
        }
      ],
      "dialogue": {
        "title": "La dernière soirée à Rome",
        "note": "Ужин готов veut dire « Le dîner est prêt ». Паста, ce sont les pâtes.",
        "lines": [
          {
            "speaker": "aunt",
            "ru": "Садитесь, пожалуйста! Ужин готов.",
            "en": "Asseyez-vous, je vous en prie ! Le dîner est prêt."
          },
          {
            "speaker": "tom",
            "ru": "Спасибо! Ммм, паста!",
            "en": "Merci ! Mmm, des pâtes !"
          },
          {
            "speaker": "murzik",
            "ru": "Муся, передай, пожалуйста, хлеб.",
            "en": "Moussia, passe-moi le pain, s'il te plaît."
          },
          {
            "speaker": "uncle",
            "ru": "За семью!",
            "en": "À la famille !"
          },
          {
            "speaker": "aunt",
            "ru": "Мурзик, ещё немного?",
            "en": "Murzik, encore un peu ?"
          },
          {
            "speaker": "murzik",
            "ru": "Спасибо, больше не надо. Было очень вкусно!",
            "en": "Merci, ça ira pour moi. C'était délicieux !"
          },
          {
            "speaker": "aunt",
            "ru": "Приезжайте ещё!",
            "en": "Revenez nous voir !"
          }
        ],
        "gist": {
          "kind": "choice",
          "id": "ro7-d1",
          "prompt": "Que mangent-ils ?",
          "options": [
            {
              "label": "Des pâtes.",
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
          "title": "Передай et Садитесь",
          "paragraphs": [
            "Encore la règle du -те : à un ami Передай! Садись! À un invité, ou à plusieurs personnes : Передайте! Садитесь!",
            "Было вкусно veut dire « C'était bon ». Было est le passé de « c'est » : apprends-le dans cette phrase."
          ],
          "examples": [
            {
              "ru": "Передайте, пожалуйста, хлеб.",
              "en": "Passez-moi le pain, s'il vous plaît."
            },
            {
              "ru": "Садись, Мурзик!",
              "en": "Assieds-toi, Murzik !"
            }
          ]
        }
      ],
      "tasks": [
        {
          "kind": "choice",
          "id": "ro7-t1",
          "prompt": "Écoute Barsik. Quel âge a sa sœur ?",
          "skill": "listening",
          "help": "Voici ton test d'écoute de Rome.",
          "audio": "Это моя семья. Мама — учительница, папа — повар. У меня есть сестра. Ей пять лет.",
          "options": [
            {
              "label": "5",
              "correct": true
            },
            {
              "label": "15",
              "correct": false
            },
            {
              "label": "50",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ro7-t2",
          "prompt": "Tu invites la mère de ton ami à s'asseoir à table. Que dis-tu ?",
          "skill": "grammar",
          "options": [
            {
              "label": "Садитесь, пожалуйста!",
              "correct": true
            },
            {
              "label": "Садись!",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ro7-t3",
          "prompt": "Ещё немного? Tu n'as plus faim. Que dis-tu ?",
          "skill": "words",
          "options": [
            {
              "label": "Спасибо, больше не надо.",
              "correct": true
            },
            {
              "label": "Передай, пожалуйста, хлеб.",
              "correct": false
            },
            {
              "label": "За семью!",
              "correct": false
            }
          ]
        },
        {
          "kind": "spell",
          "id": "ro7-t4",
          "prompt": "Forme le mot « famille ».",
          "word": "семья",
          "skill": "letters"
        },
        {
          "kind": "speak",
          "id": "ro7-t5",
          "prompt": "Remercie l'hôte après le dîner.",
          "model": "Спасибо! Было очень вкусно!",
          "modelEn": "Merci ! C'était délicieux !",
          "skill": "speaking"
        },
        {
          "kind": "choice",
          "id": "ro7-t6",
          "prompt": "Écoute. Qu'as-tu entendu ?",
          "skill": "review",
          "audio": "Мне пять лет.",
          "options": [
            {
              "label": "Мне пять лет.",
              "correct": true
            },
            {
              "label": "Ей пять лет.",
              "correct": false
            },
            {
              "label": "Ему пять лет.",
              "correct": false
            }
          ]
        },
        {
          "kind": "choice",
          "id": "ro7-t7",
          "prompt": "Écoute et choisis la meilleure réponse.",
          "skill": "review",
          "audio": "Кем ты работаешь?",
          "options": [
            {
              "label": "Я студент.",
              "correct": true
            },
            {
              "label": "Мне двадцать лет.",
              "correct": false
            },
            {
              "label": "Это мой друг.",
              "correct": false
            }
          ]
        }
      ],
      "reward": {
        "itemId": "family-photo",
        "itemName": "Photo de famille",
        "itemNameRu": "Семейное фото",
        "ru": "Ура! Наше семейное фото!",
        "en": "Youpi ! Notre photo de famille !",
        "a11y": "Une photo encadrée de toute la famille à table : tante Olia, oncle Petia, Barsik, Moussia, Murzik et Tom, tous souriants.",
        "image": "/art/rome/reward-7.jpg",
        "steps": [
          "Après le dîner, oncle Petia prend une photo.",
          "Tout le monde est dessus, même Tom.",
          "Tante Olia la met dans un cadre.",
          "Murzik la serre dans ses pattes."
        ],
        "bridge": "Les sacs sont prêts. Barsik chuchote : « Écris-moi depuis la prochaine ville ! »"
      }
    }
  ],
  "story": {
    "home": {
      "name": "La chambre de Murzik à Rome",
      "nameRu": "Комната в Риме",
      "image": "/art/rome/home.jpg",
      "a11y": "Une petite chambre vide aux murs jaune chaud dans l'appartement de Barsik. Une porte vitrée s'ouvre sur une terrasse ensoleillée avec vue sur les toits de Rome."
    },
    "keepsakeId": "family-photo",
    "welcomeRu": "Привет, Рим!",
    "welcomeEn": "Bonjour, Rome !",
    "welcomeImage": "/art/madrid/finale-5.jpg",
    "welcomeA11y": "Murzik et Tom arrivent à Rome et lèvent les yeux vers le Colisée.",
    "departureImage": "/art/rome/departure.jpg",
    "departureA11y": "Toute la famille dit au revoir à Murzik et Tom à la gare de Rome. Murzik tient la photo de famille encadrée.",
    "finale": [
      {
        "image": "/art/rome/asya-photo.jpg",
        "a11y": "À table après le dîner, tante Olia tient une vieille photo en noir et blanc d'une jeune chatte avec un pinceau. La carte d'Assia est posée sur la table. Murzik, Barsik et Moussia regardent la photo.",
        "lines": [
          {
            "en": "Après le dîner, Murzik montre la carte postale de grand-mère Assia. Tante Olia regarde le petit chat peint et se tait."
          },
          {
            "ru": "Это мама!",
            "en": "C'est maman !"
          },
          {
            "en": "Tante Olia est la fille d'Assia. Elle n'a pas eu de nouvelles de sa mère depuis de nombreuses années. Elle donne à Murzik une vieille photo d'Assia jeune et dit : « Retrouve-la. »"
          }
        ]
      },
      {
        "image": "/art/rome/finale-1.jpg",
        "a11y": "Murzik est dans sa chambre romaine douillette : un olivier et un hamac sur la terrasse, un fauteuil à bascule, un miroir rond, une cruche en terre cuite et une mosaïque de chat sur le mur jaune. Il tient la photo de famille.",
        "lines": [
          {
            "en": "La chambre romaine de Murzik est chaleureuse et pleine de souvenirs de famille."
          },
          {
            "en": "Il emballe son objet préféré pour l'emporter : la photo de famille."
          },
          {
            "en": "La vieille photo d'Assia jeune va dans la poche de la valise, à côté de sa carte postale."
          }
        ]
      },
      {
        "image": "/art/rome/finale-2.jpg",
        "a11y": "Murzik, Tom, Barsik et Moussia font la fête sur les marches de la Trinité-des-Monts.",
        "lines": [
          {
            "ru": "Рим завершён!",
            "en": "Rome, c'est fait !"
          },
          {
            "en": "7 / 7 leçons"
          },
          {
            "ru": "Уже четыре города!",
            "en": "Déjà quatre villes !"
          }
        ]
      },
      {
        "image": "/art/rome/departure.jpg",
        "a11y": "Toute la famille dit au revoir à Murzik et Tom à la gare de Rome. Murzik tient la photo de famille encadrée.",
        "lines": [
          {
            "ru": "До свидания, Рим! До свидания, Барсик!",
            "en": "Au revoir, Rome ! Au revoir, Barsik !"
          },
          {
            "ru": "Следующая остановка: Берлин!",
            "en": "Prochain arrêt : Berlin !"
          }
        ]
      },
      {
        "image": "/art/rome/finale-4.jpg",
        "a11y": "Un train de nuit roule vers le nord, de Rome à Berlin, à travers les Alpes.",
        "lines": [
          {
            "ru": "Рим → Берлин",
            "en": "Rome → Berlin"
          }
        ]
      },
      {
        "image": "/art/rome/finale-5.jpg",
        "a11y": "Murzik et Tom arrivent à Berlin le matin et lèvent les yeux vers la porte de Brandebourg.",
        "lines": [
          {
            "ru": "Привет, Берлин!",
            "en": "Bonjour, Berlin !"
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
