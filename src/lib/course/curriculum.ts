import { images, pic } from "./art";
import { lesson1, lesson2, lesson3 } from "./lessons/early";
import { lesson4, lesson5, lesson6, lesson7 } from "./lessons/late";
import { london1, london2, london3, london4, london5, london6, london7 } from "./lessons/london";
import { madrid1, madrid2, madrid3, madrid4, madrid5, madrid6, madrid7 } from "./lessons/madrid";
import { rome1, rome2, rome3, rome4, rome5, rome6, rome7 } from "./lessons/rome";
import { berlin1, berlin2, berlin3, berlin4, berlin5, berlin6, berlin7 } from "./lessons/berlin";
import {
  amsterdam1,
  amsterdam2,
  amsterdam3,
  amsterdam4,
  amsterdam5,
  amsterdam6,
  amsterdam7,
} from "./lessons/amsterdam";
import { vienna1, vienna2, vienna3, vienna4, vienna5, vienna6, vienna7 } from "./lessons/vienna";
import { prague1, prague2, prague3, prague4, prague5, prague6, prague7 } from "./lessons/prague";
import { lisbon1, lisbon2, lisbon3, lisbon4, lisbon5, lisbon6, lisbon7 } from "./lessons/lisbon";
import { athens1, athens2, athens3, athens4, athens5, athens6, athens7 } from "./lessons/athens";
import { istanbul1, istanbul2, istanbul3, istanbul4, istanbul5, istanbul6, istanbul7 } from "./lessons/istanbul";
import { warsaw1, warsaw2, warsaw3, warsaw4, warsaw5, warsaw6, warsaw7 } from "./lessons/warsaw";
import { budapest1, budapest2, budapest3, budapest4, budapest5, budapest6, budapest7 } from "./lessons/budapest";
import {
  edinburgh1,
  edinburgh2,
  edinburgh3,
  edinburgh4,
  edinburgh5,
  edinburgh6,
  edinburgh7,
} from "./lessons/edinburgh";
import { lyonLessons } from "./lessons/lyon";
import { barcelonaLessons } from "./lessons/barcelona";
import { milanLessons } from "./lessons/milan";
import { munichLessons } from "./lessons/munich";
import { portoLessons } from "./lessons/porto";
import { krakowLessons } from "./lessons/krakow";
import { rigaLessons } from "./lessons/riga";
import { tallinnLessons } from "./lessons/tallinn";
import { helsinkiLessons } from "./lessons/helsinki";
import { osloLessons } from "./lessons/oslo";
import { zurichLessons } from "./lessons/zurich";
import type { CityPlan, CityStory, Lesson, LevelPlan } from "./types";

/**
 * Add a city by giving it 7 lessons and a story. Each lesson teaches
 * exactly 7 new phrases. The player, downloads, rewards and
 * progress all read this data. Do not add placeholder lessons.
 */
import { LESSONS_PER_CITY, makeCourse } from "./model";
export { LESSONS_PER_CITY };

export const parisLessons: Lesson[] = [
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
];
export const londonLessons: Lesson[] = [
  london1,
  london2,
  london3,
  london4,
  london5,
  london6,
  london7,
];
export const madridLessons: Lesson[] = [
  madrid1,
  madrid2,
  madrid3,
  madrid4,
  madrid5,
  madrid6,
  madrid7,
];
export const romeLessons: Lesson[] = [rome1, rome2, rome3, rome4, rome5, rome6, rome7];
export const berlinLessons: Lesson[] = [berlin1, berlin2, berlin3, berlin4, berlin5, berlin6, berlin7];
export const amsterdamLessons: Lesson[] = [
  amsterdam1,
  amsterdam2,
  amsterdam3,
  amsterdam4,
  amsterdam5,
  amsterdam6,
  amsterdam7,
];
export const viennaLessons: Lesson[] = [vienna1, vienna2, vienna3, vienna4, vienna5, vienna6, vienna7];
export const pragueLessons: Lesson[] = [prague1, prague2, prague3, prague4, prague5, prague6, prague7];
export const lisbonLessons: Lesson[] = [lisbon1, lisbon2, lisbon3, lisbon4, lisbon5, lisbon6, lisbon7];
export const athensLessons: Lesson[] = [athens1, athens2, athens3, athens4, athens5, athens6, athens7];
export const istanbulLessons: Lesson[] = [istanbul1, istanbul2, istanbul3, istanbul4, istanbul5, istanbul6, istanbul7];
export const warsawLessons: Lesson[] = [warsaw1, warsaw2, warsaw3, warsaw4, warsaw5, warsaw6, warsaw7];
export const budapestLessons: Lesson[] = [budapest1, budapest2, budapest3, budapest4, budapest5, budapest6, budapest7];
export const edinburghLessons: Lesson[] = [
  edinburgh1,
  edinburgh2,
  edinburgh3,
  edinburgh4,
  edinburgh5,
  edinburgh6,
  edinburgh7,
];

const parisStory: CityStory = {
  home: {
    name: "Murzik's apartment in Paris",
    nameRu: "Квартира Мурзика в Париже",
    image: images.apartment,
    a11y: "Murzik's Paris apartment is still almost empty, with a tall window and afternoon light.",
  },
  keepsakeId: "bowl",
  welcomeRu: "Привет, Париж!",
  welcomeEn: "Hello, Paris!",
  welcomeImage: images.opening,
  welcomeA11y:
    "Murzik the cat waves hello in a Paris garden. The Eiffel Tower is visible beyond the trees.",
  departureImage: images.airport,
  departureA11y: "Murzik and Tom with suitcases in a Paris airport.",
  finale: [
    {
      image: pic("paris/postcards"),
      a11y: "Close-up: Murzik's paws hold two old, slightly yellow postcards with the same handwriting and the same small painted ginger cat in the corner. One has no stamp; the other has a London stamp. No readable words.",
      lines: [
        { en: "Before he packs, Murzik looks at Grandma Asya's two postcards: the one from under his door, and the one from the old desk." },
        { ru: "Иди по моим следам. — Ася", en: "Follow my steps. — Asya" },
        { en: "Someone wants him to find her. And the first step is London." },
      ],
    },
    {
      image: images.rewardBowl,
      a11y: "Murzik walks through the Paris apartment he has been filling, lesson by lesson.",
      lines: [
        { en: "Murzik walks through his Paris home. Tom takes a photo of it for his travel diary." },
        { en: "He packs his favourite thing to take with him: his bowl." },
        { en: "The postcard goes into the little pocket of his suitcase." },
      ],
    },
    {
      image: images.greet,
      a11y: "Murzik jumps happily and Tom celebrates with him.",
      lines: [
        { ru: "Париж завершён!", en: "Paris complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Первый город позади!", en: "Your first city is behind you!" },
        { en: "A1 — Block 1 of A1 complete. A1 itself is not finished." },
      ],
    },
    {
      image: images.apartment,
      a11y: "Murzik looks around the apartment, picks up a suitcase, and waves goodbye.",
      lines: [{ ru: "До свидания, Париж!", en: "Goodbye, Paris!" }],
    },
    {
      image: images.airport,
      a11y: "Murzik and Tom walk through the Paris airport with suitcases.",
      lines: [
        {
          ru: "До свидания, Париж! Время отправляться дальше!",
          en: "Goodbye, Paris! It’s time for my next adventure!",
        },
        { ru: "Следующая остановка: Лондон!", en: "Next stop: London!" },
      ],
    },
    {
      image: images.flight,
      a11y: "A small plane flies above the clouds from Paris toward London.",
      lines: [{ ru: "Париж → Лондон", en: "Paris → London" }],
    },
    {
      image: pic("london/arrival"),
      a11y: "Murzik and Tom arrive in London with their suitcases. Behind them are Big Ben and a red double-decker bus. It is drizzling.",
      lines: [
        { ru: "Привет, Лондон!", en: "Hello, London!" },
        {
          ru: "Новый город. Новые слова. Новые приключения.",
          en: "A new city. New words. New adventures.",
        },
      ],
    },
  ],
};

const londonStory: CityStory = {
  home: {
    name: "Murzik's room in London",
    nameRu: "Комната в Лондоне",
    image: pic("london/home"),
    a11y: "A small empty room in Tom's London flat with a big window and a grey sky. Murzik's suitcase stands in the middle.",
  },
  keepsakeId: "teapot",
  welcomeRu: "Привет, Лондон!",
  welcomeEn: "Hello, London!",
  welcomeImage: pic("london/arrival"),
  welcomeA11y:
    "Murzik and Tom arrive in London with their suitcases. Behind them are Big Ben and a red double-decker bus. It is drizzling.",
  departureImage: pic("london/departure"),
  departureA11y:
    "Murzik and Tom with their suitcases at a London airport. Murzik carries a red umbrella.",
  finale: [
    {
      image: pic("london/tea-shop"),
      a11y: "A tiny old London tea shop with shelves full of teapots and tins. A kind old lady behind the counter looks at Asya's postcard in Murzik's paws and smiles. Tom stands next to Murzik.",
      lines: [
        { en: "In the tiny tea shop, the old lady looks at the postcard. Then she smiles." },
        { ru: "Ася? Я её помню!", en: "Asya? I remember her!" },
        { en: "“A ginger cat from Moscow. She painted everything she saw. One day she said: I want the sun — and went south.”" },
      ],
    },
    {
      image: pic("london/finale-1"),
      a11y: "Murzik stands in his cosy London room: a green armchair with a tartan blanket and a bus cushion, a floor lamp, a metro map on the wall and a yellow flower on the windowsill. He holds the white teapot.",
      lines: [
        { en: "Murzik's London room is cosy now. Tom smiles." },
        { en: "He packs his favourite thing to take with him: the teapot." },
      ],
    },
    {
      image: pic("london/finale-2"),
      a11y: "Murzik jumps for joy in front of Big Ben. Tom celebrates with him.",
      lines: [
        { ru: "Лондон завершён!", en: "London complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Уже два города!", en: "Two cities already!" },
        { en: "Tom has a surprise: two tickets to the sun. Asya went south, and so will they." },
      ],
    },
    {
      image: pic("london/departure"),
      a11y: "Murzik and Tom with their suitcases at a London airport. Murzik carries a red umbrella.",
      lines: [
        { ru: "До свидания, Лондон!", en: "Goodbye, London!" },
        { ru: "Следующая остановка: Мадрид!", en: "Next stop: Madrid!" },
      ],
    },
    {
      image: pic("london/finale-4"),
      a11y: "A small plane flies south from rainy London towards a bright, sunny sky.",
      lines: [{ ru: "Лондон → Мадрид", en: "London → Madrid" }],
    },
    {
      image: pic("madrid/arrival"),
      a11y: "Murzik and Tom arrive in sunny Madrid, in the big Plaza Mayor with its red buildings and arches. Murzik takes off his scarf in the warm sunshine.",
      lines: [
        { ru: "Привет, Мадрид!", en: "Hello, Madrid!" },
        { ru: "Здесь светит солнце!", en: "The sun is shining here!" },
      ],
    },
  ],
};

const madridStory: CityStory = {
  home: {
    name: "Murzik's flat in Madrid",
    nameRu: "Квартира в Мадриде",
    image: pic("madrid/home"),
    a11y: "A small, sunny, empty flat in Madrid with white walls and an open door to a little balcony.",
  },
  keepsakeId: "fan",
  welcomeRu: "Привет, Мадрид!",
  welcomeEn: "Hello, Madrid!",
  welcomeImage: pic("madrid/arrival"),
  welcomeA11y:
    "Murzik and Tom arrive in sunny Madrid, in the big Plaza Mayor with its red buildings and arches. Murzik takes off his scarf in the warm sunshine.",
  departureImage: pic("madrid/departure"),
  departureA11y: "Murzik and Tom with suitcases at Madrid airport. Murzik holds his red fan.",
  finale: [
    {
      image: pic("madrid/asya-painting"),
      a11y: "In the little Madrid café, the old café owner points at a small watercolour on the wall: a ginger cat on a sunny balcony, signed «Ася» in the corner. Murzik and Tom look at it.",
      lines: [
        { en: "On the last morning, Murzik goes back to the little café and asks about the painting." },
        { ru: "Это нарисовала Ася.", en: "Asya painted this." },
        { en: "“She sat right here every morning,” says the owner. “She talked about her family all the time. She missed them very much.”" },
      ],
    },
    {
      image: pic("madrid/finale-1"),
      a11y: "Murzik stands on the balcony of his bright Madrid flat with a little table, wicker chairs, flowers, a rug, a lantern, a fan on the wall and a paella pan. He holds the fan.",
      lines: [
        { en: "Murzik's Madrid flat is full of sunshine and colour." },
        { en: "He packs his favourite thing to take with him: the red fan." },
      ],
    },
    {
      image: pic("madrid/finale-2"),
      a11y: "Murzik and Tom celebrate in a sunny Madrid square.",
      lines: [
        { ru: "Мадрид завершён!", en: "Madrid complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Уже три города!", en: "Three cities already!" },
        { en: "Asya missed her family. And Murzik knows where part of the family lives: his aunt, Asya's daughter." },
      ],
    },
    {
      image: pic("madrid/departure"),
      a11y: "Murzik and Tom with suitcases at Madrid airport. Murzik holds his red fan.",
      lines: [
        { ru: "До свидания, Мадрид!", en: "Goodbye, Madrid!" },
        { ru: "Следующая остановка: Рим!", en: "Next stop: Rome!" },
      ],
    },
    {
      image: pic("madrid/finale-4"),
      a11y: "A small plane flies over the sea from Madrid towards Rome.",
      lines: [{ ru: "Мадрид → Рим", en: "Madrid → Rome" }],
    },
    {
      image: pic("madrid/finale-5"),
      a11y: "Murzik and Tom arrive in Rome and look up at the Colosseum.",
      lines: [
        { ru: "Привет, Рим!", en: "Hello, Rome!" },
        {
          ru: "Новый город. Новые слова. Новые приключения.",
          en: "A new city. New words. New adventures.",
        },
      ],
    },
  ],
};

const romeStory: CityStory = {
  home: {
    name: "Murzik's room in Rome",
    nameRu: "Комната в Риме",
    image: pic("rome/home"),
    a11y: "A small empty room with warm yellow walls in Barsik's flat. A glass door opens onto a sunny terrace with a view of Roman roofs.",
  },
  keepsakeId: "family-photo",
  welcomeRu: "Привет, Рим!",
  welcomeEn: "Hello, Rome!",
  welcomeImage: pic("madrid/finale-5"),
  welcomeA11y: "Murzik and Tom arrive in Rome and look up at the Colosseum.",
  departureImage: pic("rome/departure"),
  departureA11y: "The whole family waves goodbye to Murzik and Tom at Rome's train station. Murzik holds the framed family photo.",
  finale: [
    {
      image: pic("rome/asya-photo"),
      a11y: "At the family table after dinner, Aunt Olya holds an old black-and-white photo of a young cat with a paint brush. Asya's postcard lies on the table. Murzik, Barsik and Musya look at the photo.",
      lines: [
        { en: "After dinner, Murzik shows Grandma Asya's postcard. Aunt Olya looks at the little painted cat and goes quiet." },
        { ru: "Это мама!", en: "That's Mum!" },
        { en: "Aunt Olya is Asya's daughter. She has not heard from her mother for many years. She gives Murzik an old photo of young Asya and says: “Find her.”" },
      ],
    },
    {
      image: pic("rome/finale-1"),
      a11y: "Murzik stands in his cosy Roman room: an olive tree and a hammock on the terrace, a rocking chair, a round mirror, a clay jug and a cat mosaic on the yellow wall. He holds the family photo.",
      lines: [
        { en: "Murzik's room in Rome is warm and full of family memories." },
        { en: "He packs his favourite thing to take with him: the family photo." },
        { en: "The old photo of young Asya goes into the suitcase pocket, next to her postcard." },
      ],
    },
    {
      image: pic("rome/finale-2"),
      a11y: "Murzik, Tom, Barsik and Musya celebrate on the Spanish Steps.",
      lines: [
        { ru: "Рим завершён!", en: "Rome complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Уже четыре города!", en: "Four cities already!" },
      ],
    },
    {
      image: pic("rome/departure"),
      a11y: "The whole family waves goodbye to Murzik and Tom at Rome's train station. Murzik holds the framed family photo.",
      lines: [
        { ru: "До свидания, Рим! До свидания, Барсик!", en: "Goodbye, Rome! Goodbye, Barsik!" },
        { ru: "Следующая остановка: Берлин!", en: "Next stop: Berlin!" },
      ],
    },
    {
      image: pic("rome/finale-4"),
      a11y: "A night train travels north from Rome through the Alps towards Berlin.",
      lines: [{ ru: "Рим → Берлин", en: "Rome → Berlin" }],
    },
    {
      image: pic("rome/finale-5"),
      a11y: "Murzik and Tom arrive in Berlin in the morning and look up at the Brandenburg Gate.",
      lines: [
        { ru: "Привет, Берлин!", en: "Hello, Berlin!" },
        { ru: "Новый город. Новые слова. Новые приключения.", en: "A new city. New words. New adventures." },
      ],
    },
  ],
};

const berlinStory: CityStory = {
  home: {
    name: "Murzik's attic in Berlin",
    nameRu: "Мансарда в Берлине",
    image: pic("berlin/home"),
    a11y: "A small empty attic room under a sloping roof in an old Berlin house. A round window looks out over a green courtyard.",
  },
  keepsakeId: "alarm-clock",
  welcomeRu: "Привет, Берлин!",
  welcomeEn: "Hello, Berlin!",
  welcomeImage: pic("rome/finale-5"),
  welcomeA11y: "Murzik and Tom arrive in Berlin in the morning and look up at the Brandenburg Gate.",
  departureImage: pic("berlin/departure"),
  departureA11y: "Irina waves goodbye to Murzik and Tom at Berlin's big glass railway station. Murzik holds the red alarm clock.",
  finale: [
    {
      image: pic("berlin/finale-1"),
      a11y: "Murzik stands in his cosy Berlin attic: a wooden bed under the round window, a wall calendar, a bookshelf, a film poster, a record player and a blue bicycle. He holds the red alarm clock.",
      lines: [
        { en: "Murzik's attic is cosy now. One of Irina's old records is playing." },
        { en: "He packs his favourite thing to take with him: the red alarm clock. No more missed trains!" },
      ],
    },
    {
      image: pic("berlin/finale-2"),
      a11y: "Murzik and Tom ride bicycles past the Brandenburg Gate and wave happily.",
      lines: [
        { ru: "Берлин завершён!", en: "Berlin complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Уже пять городов!", en: "Five cities already!" },
      ],
    },
    {
      image: pic("berlin/lev"),
      a11y: "On a busy railway platform, a kind old white cat in a grey hat and a long navy coat smiles warmly at Murzik and tips his hat. Murzik looks at him in surprise.",
      lines: [
        { en: "At the station Murzik sees the white cat in the hat again. This time the cat smiles and tips his hat." },
        { ru: "Кто это?", en: "Who is that?" },
        { en: "Then the old cat gets on another train. Tom did not see him at all." },
      ],
    },
    {
      image: pic("berlin/departure"),
      a11y: "Irina waves goodbye to Murzik and Tom at Berlin's big glass railway station. Murzik holds the red alarm clock.",
      lines: [
        { ru: "До свидания, Берлин! До свидания, Ирина!", en: "Goodbye, Berlin! Goodbye, Irina!" },
        { ru: "Следующая остановка: Амстердам!", en: "Next stop: Amsterdam!" },
      ],
    },
    {
      image: pic("berlin/finale-5"),
      a11y: "A train travels west through flat green fields with windmills, from Berlin towards Amsterdam.",
      lines: [{ ru: "Берлин → Амстердам", en: "Berlin → Amsterdam" }],
    },
    {
      image: pic("amsterdam/arrival"),
      a11y: "Murzik and Tom arrive in Amsterdam: a canal with narrow tall houses, little bridges and many bicycles.",
      lines: [
        { ru: "Привет, Амстердам!", en: "Hello, Amsterdam!" },
        { ru: "Новый город. Новые слова. Новые приключения.", en: "A new city. New words. New adventures." },
      ],
    },
  ],
};

const amsterdamStory: CityStory = {
  home: {
    name: "Murzik's houseboat in Amsterdam",
    nameRu: "Домик на воде",
    image: pic("amsterdam/home"),
    a11y: "A small empty room inside a little green houseboat on a canal. A round window looks out onto the water.",
  },
  keepsakeId: "clogs",
  welcomeRu: "Привет, Амстердам!",
  welcomeEn: "Hello, Amsterdam!",
  welcomeImage: pic("amsterdam/arrival"),
  welcomeA11y: "Murzik and Tom arrive in Amsterdam: a canal with narrow tall houses, little bridges and many bicycles.",
  departureImage: pic("amsterdam/departure"),
  departureA11y: "Murzik and Tom with their suitcases at Amsterdam's big red-brick railway station. Murzik wears his little wooden clogs.",
  finale: [
    {
      image: pic("amsterdam/finale-1"),
      a11y: "Murzik stands on the deck of his cosy houseboat: tulips, a string of lights, a picnic basket, a little stove glowing through the round window, a windmill picture and a fishing rod. He wears his tiny wooden clogs.",
      lines: [
        { en: "Murzik's little houseboat is cosy now. The lights glow on the water." },
        { en: "He packs his favourite thing to take with him: the little wooden clogs." },
      ],
    },
    {
      image: pic("amsterdam/finale-2"),
      a11y: "Murzik and Tom ride their bikes over a canal bridge, waving happily.",
      lines: [
        { ru: "Амстердам завершён!", en: "Amsterdam complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Уже шесть городов!", en: "Six cities already!" },
      ],
    },
    {
      image: pic("amsterdam/barsik-train"),
      a11y: "Barsik waves from a train window. Murzik and Tom wave back from the platform.",
      lines: [
        { en: "In the morning, Barsik waves from the train window." },
        { ru: "Пиши мне!", en: "Write to me!" },
        { en: "Murzik thinks of the cat on the bridge. Twice now. Who is he?" },
      ],
    },
    {
      image: pic("amsterdam/departure"),
      a11y: "Murzik and Tom with their suitcases at Amsterdam's big red-brick railway station. Murzik wears his little wooden clogs.",
      lines: [
        { ru: "До свидания, Амстердам!", en: "Goodbye, Amsterdam!" },
        { ru: "Следующая остановка: Вена!", en: "Next stop: Vienna!" },
      ],
    },
    {
      image: pic("amsterdam/finale-5"),
      a11y: "A train travels south-east through green hills and forests, from Amsterdam towards Vienna.",
      lines: [{ ru: "Амстердам → Вена", en: "Amsterdam → Vienna" }],
    },
    {
      image: pic("vienna/arrival"),
      a11y: "Murzik and Tom arrive in Vienna in front of a grand old opera house; a horse carriage passes by.",
      lines: [
        { ru: "Привет, Вена!", en: "Hello, Vienna!" },
        { ru: "Новый город. Новые слова. Новые приключения.", en: "A new city. New words. New adventures." },
      ],
    },
  ],
};

const viennaStory: CityStory = {
  home: {
    name: "Murzik's room above a Vienna coffee house",
    nameRu: "Комната над кофейней",
    image: pic("vienna/home"),
    a11y: "A small empty room with a high window above an old Vienna coffee house. Warm light comes up the stairs.",
  },
  keepsakeId: "music-box",
  welcomeRu: "Привет, Вена!",
  welcomeEn: "Hello, Vienna!",
  welcomeImage: pic("vienna/arrival"),
  welcomeA11y: "Murzik and Tom arrive in Vienna in front of a grand old opera house; a horse carriage passes by.",
  departureImage: pic("vienna/departure"),
  departureA11y: "Murzik and Tom with their suitcases at a Vienna railway station. Karl waves his hat goodbye. Murzik holds the little music box.",
  finale: [
    {
      image: pic("vienna/finale-1"),
      a11y: "Murzik stands in his cosy room above the coffee house: an easel, a guitar, ice skates on a hook, opera glasses, framed sheet music, a chess set. He holds the open music box. Far in the background, through the window, a kind old white cat in a grey hat walks past in the street.",
      lines: [
        { en: "Murzik's room above the coffee house is full of music now." },
        { en: "He packs his favourite thing to take with him: the music box that plays Asya's waltz." },
      ],
    },
    {
      image: pic("vienna/karl-story"),
      a11y: "Karl and Murzik sit on a park bench. Karl holds an old drawing of himself as a young violinist, drawn by Asya.",
      lines: [
        { en: "On the last morning Karl tells more. Long ago Asya painted in this park every day, and he played for her." },
        { ru: "Она всегда ждала письмо.", en: "She was always waiting for a letter." },
        { en: "“A letter from Moscow,” says Karl. “It never came. Then one day she left.”" },
      ],
    },
    {
      image: pic("vienna/finale-2"),
      a11y: "Murzik and Tom dance a little waltz in a Vienna square, laughing.",
      lines: [
        { ru: "Вена завершена!", en: "Vienna complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Уже семь городов!", en: "Seven cities already!" },
      ],
    },
    {
      image: pic("vienna/departure"),
      a11y: "Murzik and Tom with their suitcases at a Vienna railway station. Karl waves his hat goodbye. Murzik holds the little music box.",
      lines: [
        { ru: "До свидания, Вена! До свидания, Карл!", en: "Goodbye, Vienna! Goodbye, Karl!" },
        { ru: "Следующая остановка: Прага!", en: "Next stop: Prague!" },
      ],
    },
    {
      image: pic("vienna/finale-5"),
      a11y: "A train travels north through autumn forests and rainy hills, from Vienna towards Prague.",
      lines: [{ ru: "Вена → Прага", en: "Vienna → Prague" }],
    },
    {
      image: pic("prague/arrival"),
      a11y: "Murzik and Tom arrive in Prague on a cold, windy autumn day: the old stone Charles Bridge, towers and red roofs. Murzik shivers.",
      lines: [
        { ru: "Привет, Прага!", en: "Hello, Prague!" },
        { ru: "Брр! Здесь холодно!", en: "Brr! It's cold here!" },
      ],
    },
  ],
};

const pragueStory: CityStory = {
  home: {
    name: "Murzik's room in Prague",
    nameRu: "Комната в Праге",
    image: pic("prague/home"),
    a11y: "A small empty room in an old Prague house. The window looks out over many red roofs and church towers.",
  },
  keepsakeId: "puppet",
  welcomeRu: "Привет, Прага!",
  welcomeEn: "Hello, Prague!",
  welcomeImage: pic("prague/arrival"),
  welcomeA11y: "Murzik and Tom arrive in Prague on a cold, windy autumn day: the old stone Charles Bridge, towers and red roofs. Murzik shivers.",
  departureImage: pic("prague/departure"),
  departureA11y: "Anna Petrovna waves goodbye to Murzik and Tom at Prague's railway station. Murzik wears his new blue hat and holds the cat puppet.",
  finale: [
    {
      image: pic("prague/finale-1"),
      a11y: "Murzik stands in his cosy Prague room: a coat stand, watercolour paints on the windowsill, a painted wardrobe, a hot-water bottle on the bed, a jar of honey and a moon night light. He holds the ginger cat puppet.",
      lines: [
        { en: "Murzik's Prague room is warm and cosy. And Murzik is healthy again!" },
        { en: "He packs his favourite thing to take with him: the cat puppet." },
      ],
    },
    {
      image: pic("prague/finale-2"),
      a11y: "Murzik and Tom celebrate on the Charles Bridge in their new warm clothes. Far behind them, among the people on the bridge, a kind old white cat in a grey hat smiles.",
      lines: [
        { ru: "Прага завершена!", en: "Prague complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Уже восемь городов!", en: "Eight cities already!" },
      ],
    },
    {
      image: pic("prague/tom-email"),
      a11y: "Tom reads an email on his phone with a huge, surprised smile. Murzik jumps up to see the screen.",
      lines: [
        { en: "Tom reads the email again and again. A travel magazine has seen his photos!" },
        { ru: "Том, что там?", en: "Tom, what is it?" },
        { en: "“They want to meet me,” says Tom. “In a city by the ocean.”" },
      ],
    },
    {
      image: pic("prague/departure"),
      a11y: "Anna Petrovna waves goodbye to Murzik and Tom at Prague's railway station. Murzik wears his new blue hat and holds the cat puppet.",
      lines: [
        { ru: "До свидания, Прага! До свидания, Анна Петровна!", en: "Goodbye, Prague! Goodbye, Anna Petrovna!" },
        { ru: "Следующая остановка: Лиссабон!", en: "Next stop: Lisbon!" },
      ],
    },
    {
      image: pic("prague/finale-5"),
      a11y: "A small plane flies south-west over the clouds, from cold grey Prague towards a sunny ocean coast.",
      lines: [{ ru: "Прага → Лиссабон", en: "Prague → Lisbon" }],
    },
    {
      image: pic("lisbon/arrival"),
      a11y: "Murzik and Tom arrive in Lisbon: a yellow tram climbs a steep street of colourful tiled houses, with the ocean shining below.",
      lines: [
        { ru: "Привет, Лиссабон!", en: "Hello, Lisbon!" },
        { ru: "Новый город. Новые слова. Новые приключения.", en: "A new city. New words. New adventures." },
      ],
    },
  ],
};

const lisbonStory: CityStory = {
  home: {
    name: "Murzik's room in Lisbon",
    nameRu: "Комната в Лиссабоне",
    image: pic("lisbon/home"),
    a11y: "A small empty room in a house covered with blue and white tiles. The window looks onto a steep street with tram rails.",
  },
  keepsakeId: "azulejo",
  welcomeRu: "Привет, Лиссабон!",
  welcomeEn: "Hello, Lisbon!",
  welcomeImage: pic("lisbon/arrival"),
  welcomeA11y: "Murzik and Tom arrive in Lisbon: a yellow tram climbs a steep street of colourful tiled houses, with the ocean shining below.",
  departureImage: pic("lisbon/departure"),
  departureA11y: "Katya waves goodbye to Murzik and Tom at Lisbon airport. Tom carries his new camera; Murzik holds the blue tile.",
  finale: [
    {
      image: pic("lisbon/finale-1"),
      a11y: "Murzik stands in his cosy Lisbon room: a toy yellow tram, a green desk lamp, a little coffee pot, a framed photo, a big world map with pins and Tom's old camera. He holds the blue and white tile.",
      lines: [
        { en: "Murzik's Lisbon room is full of sunshine and new beginnings." },
        { en: "He packs his favourite thing to take with him: the blue and white tile." },
      ],
    },
    {
      image: pic("lisbon/finale-2"),
      a11y: "Murzik and Tom ride the yellow tram, waving out of the window. Tom has his new camera around his neck.",
      lines: [
        { ru: "Лиссабон завершён!", en: "Lisbon complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Уже девять городов!", en: "Nine cities already!" },
      ],
    },
    {
      image: pic("lisbon/column"),
      a11y: "A magazine page with a big photo of Murzik on the yellow tram. Tom and Murzik look at it together, delighted.",
      lines: [
        { en: "Tom's first travel column comes out. On the first page: Murzik on the yellow tram." },
        { ru: "Это я!", en: "That's me!" },
        { en: "“Next city, next story,” says the editor. “Where are you going?” Tom smiles: “Somewhere warm and old.”" },
      ],
    },
    {
      image: pic("lisbon/departure"),
      a11y: "Katya waves goodbye to Murzik and Tom at Lisbon airport. Tom carries his new camera; Murzik holds the blue tile.",
      lines: [
        { ru: "До свидания, Лиссабон! До свидания, Катя!", en: "Goodbye, Lisbon! Goodbye, Katya!" },
        { ru: "Следующая остановка: Афины!", en: "Next stop: Athens!" },
      ],
    },
    {
      image: pic("lisbon/finale-5"),
      a11y: "A small plane flies east over the blue Mediterranean Sea, from Lisbon towards Athens.",
      lines: [{ ru: "Лиссабон → Афины", en: "Lisbon → Athens" }],
    },
    {
      image: pic("athens/arrival"),
      a11y: "Murzik and Tom arrive in sunny Athens and look up at the ancient Acropolis on its hill, with white houses below.",
      lines: [
        { ru: "Привет, Афины!", en: "Hello, Athens!" },
        { ru: "Новый город. Новые слова. Новые приключения.", en: "A new city. New words. New adventures." },
      ],
    },
  ],
};

const athensStory: CityStory = {
  home: {
    name: "Murzik's room on an Athens roof",
    nameRu: "Комната на крыше",
    image: pic("athens/home"),
    a11y: "A small empty white room with a blue door on the roof terrace of a guesthouse. The Acropolis can be seen far away.",
  },
  keepsakeId: "birthday-postcard",
  welcomeRu: "Привет, Афины!",
  welcomeEn: "Hello, Athens!",
  welcomeImage: pic("athens/arrival"),
  welcomeA11y: "Murzik and Tom arrive in sunny Athens and look up at the ancient Acropolis on its hill, with white houses below.",
  departureImage: pic("athens/departure"),
  departureA11y: "Nika and her family wave goodbye to Murzik and Tom at the port of Athens. A big white ferry waits. Murzik holds the postcard.",
  finale: [
    {
      image: pic("athens/finale-1"),
      a11y: "Murzik stands in his white room on the roof: a Greek vase, seashells, a wind chime, balloons, his sketchbook and a blue eye charm. He holds the mysterious postcard.",
      lines: [
        { en: "Murzik's room on the roof is bright and happy. It was the best birthday ever." },
        { en: "He packs his favourite thing to take with him: the postcard with no address." },
      ],
    },
    {
      image: pic("athens/finale-2"),
      a11y: "Murzik, Tom and Nika celebrate on the roof terrace at night with balloons and the lit Acropolis behind them.",
      lines: [
        { ru: "Афины завершены!", en: "Athens complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Уже десять городов!", en: "Ten cities already!" },
      ],
    },
    {
      image: pic("athens/stamp"),
      a11y: "Close-up of the corner of the postcard: a stamp with a picture of a big domed building and minarets, and a round postmark.",
      lines: [
        { en: "At night Murzik looks at the stamp. There is no address — but there is a postmark." },
        { ru: "Открытка из Стамбула!", en: "The postcard is from Istanbul!" },
        { en: "Someone who knows his birthday is in Istanbul. Tom doesn't even ask: “We're going.”" },
      ],
    },
    {
      image: pic("athens/departure"),
      a11y: "Nika and her family wave goodbye to Murzik and Tom at the port of Athens. A big white ferry waits. Murzik holds the postcard.",
      lines: [
        { ru: "До свидания, Афины! До свидания, Ника!", en: "Goodbye, Athens! Goodbye, Nika!" },
        { ru: "Следующая остановка: Стамбул!", en: "Next stop: Istanbul!" },
      ],
    },
    {
      image: pic("athens/finale-5"),
      a11y: "A white ferry sails across a blue sea between islands, from Athens towards Istanbul, with seagulls above.",
      lines: [{ ru: "Афины → Стамбул", en: "Athens → Istanbul" }],
    },
    {
      image: pic("istanbul/arrival"),
      a11y: "Murzik and Tom arrive in Istanbul by sea: domes and minarets rise above the water, seagulls fly and boats sail by.",
      lines: [
        { ru: "Привет, Стамбул!", en: "Hello, Istanbul!" },
        { ru: "Кто же ты? Где ты?", en: "Who are you? Where are you?" },
      ],
    },
  ],
};

const istanbulStory: CityStory = {
  home: {
    name: "Room twelve in Istanbul",
    nameRu: "Номер двенадцать",
    image: pic("istanbul/home"),
    a11y: "A small, simple hotel room with a little balcony. Beyond it the blue water of the Bosphorus with boats and seagulls.",
  },
  keepsakeId: "luggage-tag",
  welcomeRu: "Привет, Стамбул!",
  welcomeEn: "Hello, Istanbul!",
  welcomeImage: pic("istanbul/arrival"),
  welcomeA11y: "Murzik and Tom arrive in Istanbul by sea: domes and minarets rise above the water, seagulls fly and boats sail by.",
  departureImage: pic("istanbul/departure"),
  departureA11y: "Murzik and Tom wave goodbye from the deck of a ferry leaving Istanbul. Murzik's suitcase has a paw-shaped luggage tag.",
  finale: [
    {
      image: pic("istanbul/finale-1"),
      a11y: "Murzik on the balcony of room twelve: a coloured glass lamp, tulip-shaped tea glasses, a box of Turkish delight, a torch, a stamp album and a painted plate. Pamuk the white cat sleeps on the suitcase. Murzik holds the paw-shaped luggage tag.",
      lines: [
        { en: "Room twelve is cosy now — and the suitcase is safe." },
        { en: "He packs his favourite thing to take with him: the paw-shaped luggage tag." },
      ],
    },
    {
      image: pic("istanbul/finale-2"),
      a11y: "Murzik and Tom celebrate by the water, throwing bread to the seagulls, with domes and minarets behind them.",
      lines: [
        { ru: "Стамбул завершён!", en: "Istanbul complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Уже одиннадцать городов!", en: "Eleven cities already!" },
      ],
    },
    {
      image: pic("istanbul/ferry"),
      a11y: "On a crowded ferry deck, far away at the other end, a kind old white cat in a grey hat stands at the rail and looks at the sea. Murzik doesn't see him.",
      lines: [
        { en: "The postcard is still a mystery. Nobody in Istanbul knows who sent it." },
        { en: "On the ferry, at the far end of the deck, an old white cat in a hat looks at the sea. Murzik doesn't see him this time." },
      ],
    },
    {
      image: pic("istanbul/departure"),
      a11y: "Murzik and Tom wave goodbye from the deck of a ferry leaving Istanbul. Murzik's suitcase has a paw-shaped luggage tag.",
      lines: [
        { ru: "До свидания, Стамбул! До свидания, Памук!", en: "Goodbye, Istanbul! Goodbye, Pamuk!" },
        { ru: "Следующая остановка: Варшава!", en: "Next stop: Warsaw!" },
      ],
    },
    {
      image: pic("istanbul/finale-5"),
      a11y: "A small plane flies north over mountains and fields, from Istanbul towards Warsaw.",
      lines: [{ ru: "Стамбул → Варшава", en: "Istanbul → Warsaw" }],
    },
    {
      image: pic("warsaw/arrival"),
      a11y: "Murzik and Tom arrive in Warsaw's old town square, surrounded by tall colourful houses; a bronze mermaid statue stands in the middle.",
      lines: [
        { ru: "Привет, Варшава!", en: "Hello, Warsaw!" },
        { ru: "Новый город. Новые слова. Новые приключения.", en: "A new city. New words. New adventures." },
      ],
    },
  ],
};

const warsawStory: CityStory = {
  home: {
    name: "Murzik's room in Warsaw",
    nameRu: "Комната в Варшаве",
    image: pic("warsaw/home"),
    a11y: "A small empty room in a colourful old house. The window looks onto the old town square with its tall painted houses.",
  },
  keepsakeId: "mermaid",
  welcomeRu: "Привет, Варшава!",
  welcomeEn: "Hello, Warsaw!",
  welcomeImage: pic("warsaw/arrival"),
  welcomeA11y: "Murzik and Tom arrive in Warsaw's old town square, surrounded by tall colourful houses; a bronze mermaid statue stands in the middle.",
  departureImage: pic("warsaw/departure"),
  departureA11y: "Pani Ewa waves her red beret goodbye to Murzik and Tom at Warsaw's railway station. Murzik holds the little bronze mermaid.",
  finale: [
    {
      image: pic("warsaw/finale-1"),
      a11y: "Murzik stands in his cosy Warsaw room: an orange bean bag, a piece of amber in the window, a teddy bear, writing paper, a fountain pen and a red thermos. He holds the little bronze mermaid.",
      lines: [
        { en: "Murzik's Warsaw room is cosy and full of letters." },
        { en: "He packs his favourite thing to take with him: the little mermaid." },
      ],
    },
    {
      image: pic("warsaw/finale-2"),
      a11y: "Murzik and Tom celebrate by the Vistula river at sunset, with the old town behind them.",
      lines: [
        { ru: "Варшава завершена!", en: "Warsaw complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Уже двенадцать городов!", en: "Twelve cities already!" },
      ],
    },
    {
      image: pic("warsaw/letter"),
      a11y: "Murzik sits on his bean bag holding Madame Dubois's blue letter, thinking hard. Tom sits beside him.",
      lines: [
        { en: "Murzik reads Madame Dubois's letter again. A cat in a hat. He knew Grandma." },
        { ru: "Кто же он?", en: "Who is he?" },
        { en: "“Berlin, Amsterdam, Vienna, Prague… I saw him everywhere,” says Murzik. “He is following us, Tom.” Tom smiles: “Or he is looking for her too.”" },
      ],
    },
    {
      image: pic("warsaw/departure"),
      a11y: "Pani Ewa waves her red beret goodbye to Murzik and Tom at Warsaw's railway station. Murzik holds the little bronze mermaid.",
      lines: [
        { ru: "До свидания, Варшава! До свидания, пани Ева!", en: "Goodbye, Warsaw! Goodbye, Pani Ewa!" },
        { ru: "Следующая остановка: Будапешт!", en: "Next stop: Budapest!" },
      ],
    },
    {
      image: pic("warsaw/finale-5"),
      a11y: "A train travels south through green hills and mountains, from Warsaw towards Budapest.",
      lines: [{ ru: "Варшава → Будапешт", en: "Warsaw → Budapest" }],
    },
    {
      image: pic("budapest/arrival"),
      a11y: "Murzik and Tom arrive in Budapest: the grand Parliament building and a chain bridge over the wide Danube river.",
      lines: [
        { ru: "Привет, Будапешт!", en: "Hello, Budapest!" },
        { ru: "Новый город. Новые слова. Новые приключения.", en: "A new city. New words. New adventures." },
      ],
    },
  ],
};

const budapestStory: CityStory = {
  home: {
    name: "Murzik's room by the Danube",
    nameRu: "Комната у Дуная",
    image: pic("budapest/home"),
    a11y: "A small empty room in an old guesthouse with high ceilings. The window looks onto the wide Danube and a chain bridge.",
  },
  keepsakeId: "travel-diary",
  welcomeRu: "Привет, Будапешт!",
  welcomeEn: "Hello, Budapest!",
  welcomeImage: pic("budapest/arrival"),
  welcomeA11y: "Murzik and Tom arrive in Budapest: the grand Parliament building and a chain bridge over the wide Danube river.",
  departureImage: pic("budapest/departure"),
  departureA11y: "Dora and her grandmother wave goodbye to Murzik and Tom at Budapest's grand old railway station. Murzik holds his travel diary.",
  finale: [
    {
      image: pic("budapest/finale-1"),
      a11y: "Murzik stands in his cosy room by the Danube: a string of red peppers, an embroidered tablecloth, a puzzle cube, Dora's drawing on the wall, a fluffy bathrobe and a thick photo album. He holds his travel diary.",
      lines: [
        { en: "Murzik's room by the Danube is full of stories now." },
        { en: "He packs his favourite thing to take with him: his travel diary." },
      ],
    },
    {
      image: pic("budapest/finale-2"),
      a11y: "Murzik, Tom and Dora celebrate on the chain bridge at night, with the lit Parliament behind them.",
      lines: [
        { ru: "Будапешт завершён!", en: "Budapest complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Уже тринадцать городов!", en: "Thirteen cities already!" },
      ],
    },
    {
      image: pic("budapest/diary"),
      a11y: "Late at night Murzik writes in his diary by a lamp. Next to it lie the Paris postcard, the birthday postcard and a photo with a tiny cat in a hat circled.",
      lines: [
        { en: "Late at night Murzik writes in his diary. The first page: Paris. The last page: Budapest." },
        { ru: "Кто ты, кот в шляпе?", en: "Who are you, cat in the hat?" },
        { en: "He circles the cat in every photo. One more city, and A1 will be finished." },
      ],
    },
    {
      image: pic("budapest/departure"),
      a11y: "Dora and her grandmother wave goodbye to Murzik and Tom at Budapest's grand old railway station. Murzik holds his travel diary.",
      lines: [
        { ru: "До свидания, Будапешт! До свидания, Дора!", en: "Goodbye, Budapest! Goodbye, Dora!" },
        { ru: "Следующая остановка: Эдинбург!", en: "Next stop: Edinburgh!" },
      ],
    },
    {
      image: pic("budapest/finale-5"),
      a11y: "A small plane flies north-west over the clouds, from Budapest towards the green hills of Scotland.",
      lines: [{ ru: "Будапешт → Эдинбург", en: "Budapest → Edinburgh" }],
    },
    {
      image: pic("edinburgh/arrival"),
      a11y: "Murzik and Tom arrive in Edinburgh: a grey stone castle on a high rock above the old town; it is drizzling.",
      lines: [
        { ru: "Привет, Эдинбург!", en: "Hello, Edinburgh!" },
        { ru: "Последний город A1!", en: "The last city of A1!" },
      ],
    },
  ],
};

const edinburghStory: CityStory = {
  home: {
    name: "Murzik's room in Edinburgh",
    nameRu: "Комната в Эдинбурге",
    image: pic("edinburgh/home"),
    a11y: "A small empty room in Jamie's old grey stone house, with a deep window seat and a view of the castle on the rock.",
  },
  keepsakeId: "thistle",
  welcomeRu: "Привет, Эдинбург!",
  welcomeEn: "Hello, Edinburgh!",
  welcomeImage: pic("edinburgh/arrival"),
  welcomeA11y: "Murzik and Tom arrive in Edinburgh: a grey stone castle on a high rock above the old town; it is drizzling.",
  departureImage: pic("edinburgh/departure"),
  departureA11y: "Jamie waves goodbye to Murzik and Tom at Edinburgh's railway station. Murzik wears a thistle brooch on his scarf.",
  finale: [
    {
      image: pic("edinburgh/finale-1"),
      a11y: "Murzik stands in his cosy Edinburgh room: a stone fireplace, yellow rain boots, a big green mug, a brass telescope, toy bagpipes and a grey tweed cap. He wears the thistle brooch on his scarf.",
      lines: [
        { en: "Murzik's Edinburgh room is warm, even in the rain." },
        { en: "He packs his favourite thing to take with him: the thistle brooch." },
      ],
    },
    {
      image: pic("edinburgh/finale-2"),
      a11y: "Murzik and Tom stand on the castle wall at sunset with their arms in the air. Behind them, a long path with fourteen little city flags.",
      lines: [
        { ru: "Эдинбург завершён!", en: "Edinburgh complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Уровень A1 завершён! Четырнадцать городов!", en: "Level A1 complete! Fourteen cities!" },
      ],
    },
    {
      image: pic("edinburgh/suitcase"),
      a11y: "Murzik's open suitcase: the bowl, the teapot, the fan, the family photo, the alarm clock, the clogs, the music box, the puppet, the tile, the postcard, the luggage tag, the mermaid, the travel diary and the thistle. In the pocket: Asya's postcards and a small note signed «Л.».",
      lines: [
        { en: "Fourteen cities. Fourteen favourite things. Two postcards from Grandma Asya. And one note from the cat in the hat." },
        { ru: "Я тоже её ищу.", en: "I'm looking for her too." },
        { en: "Murzik closes the suitcase. “Lyon,” he says. “Let's go.”" },
      ],
    },
    {
      image: pic("edinburgh/departure"),
      a11y: "Jamie waves goodbye to Murzik and Tom at Edinburgh's railway station. Murzik wears a thistle brooch on his scarf.",
      lines: [
        { ru: "До свидания, Эдинбург! До свидания, Джейми!", en: "Goodbye, Edinburgh! Goodbye, Jamie!" },
        { ru: "Следующая остановка: Лион!", en: "Next stop: Lyon!" },
      ],
    },
    {
      image: pic("edinburgh/finale-5"),
      a11y: "A small plane flies south over the sea, from Scotland towards France.",
      lines: [{ ru: "Эдинбург → Лион", en: "Edinburgh → Lyon" }],
    },
    {
      image: pic("lyon/arrival"),
      a11y: "Murzik and Tom arrive in Lyon, where two rivers meet, with colourful houses on the hill and an old basilica at the top.",
      lines: [
        { ru: "Привет, Лион!", en: "Hello, Lyon!" },
        { ru: "Начинается A2!", en: "A2 begins!" },
      ],
    },
  ],
};

const lyonStory: CityStory = {
  home: {
    name: "Murzik's room in Lyon",
    nameRu: "Комната в Лионе",
    image: pic("lyon/home"),
    a11y: "A small empty room under the roof above a cheese shop on the Croix-Rousse hill in Lyon: a sloping ceiling, a round window over the city and its two rivers.",
  },
  keepsakeId: "silkscarf",
  welcomeRu: "Привет, Лион!",
  welcomeEn: "Hello, Lyon!",
  welcomeImage: pic("lyon/arrival"),
  welcomeA11y: "Murzik and Tom arrive in Lyon, where two rivers meet, with colourful houses on the hill and an old basilica at the top.",
  departureImage: pic("lyon/departure"),
  departureA11y: "Nina and Bernard wave goodbye from the door of their cheese shop; Murzik wears Asya's silk scarf and holds a recipe book.",
  finale: [
    {
      image: pic("lyon/finale-1"),
      a11y: "Murzik's room under the roof is cosy now: a wicker basket, a copper pan, a checked tablecloth, a hen-shaped timer, plates with blue flowers, pots of herbs. Murzik wears a silk scarf with painted cats and boats.",
      lines: [
        { en: "Murzik's little room under the roof smells of herbs and fresh bread." },
        { en: "He takes his favourite thing with him: Grandma Asya's silk scarf." },
      ],
    },
    {
      image: pic("lyon/finale-2"),
      a11y: "Murzik and Tom on the steps of the Croix-Rousse hill at sunset, arms in the air, the city and its two rivers below.",
      lines: [
        { ru: "Лион завершён!", en: "Lyon complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Я уже говорю о прошлом и о будущем!", en: "I can already talk about the past and the future!" },
      ],
    },
    {
      image: pic("lyon/suitcase"),
      a11y: "Murzik's open suitcase: Asya's silk scarf on top, Nina's recipe book, and a small old note signed «А.».",
      lines: [
        { en: "In the scarf there was a note in Asya's handwriting." },
        { ru: "Завтра я еду к морю, в Барселону.", en: "Tomorrow I'm going to the sea, to Barcelona." },
        { en: "Thirty years later, Murzik follows her." },
      ],
    },
    {
      image: pic("lyon/departure"),
      a11y: "Nina and Bernard wave goodbye from the door of their cheese shop; Murzik wears Asya's silk scarf and holds a recipe book.",
      lines: [
        { ru: "До свидания, Нина! До свидания, Бернар!", en: "Goodbye, Nina! Goodbye, Bernard!" },
        { ru: "Следующая остановка: Барселона!", en: "Next stop: Barcelona!" },
      ],
    },
    {
      image: pic("lyon/finale-5"),
      a11y: "A train runs south along the sea coast, from France towards Spain.",
      lines: [{ ru: "Лион → Барселона", en: "Lyon → Barcelona" }],
    },
    {
      image: pic("barcelona/arrival"),
      a11y: "Murzik and Tom arrive in Barcelona: a sunny street with palm trees, colourful mosaic houses and the sea in the distance.",
      lines: [{ ru: "Привет, Барселона!", en: "Hello, Barcelona!" }],
    },
  ],
};

const barcelonaStory: CityStory = {
  home: {
    name: "Murzik's room in Barcelona",
    nameRu: "Комната в Барселоне",
    image: pic("barcelona/home"),
    a11y: "A small empty room above a beach café in Barceloneta: white walls, a blue door to a tiny balcony, the sea between the houses.",
  },
  keepsakeId: "mosaictile",
  welcomeRu: "Привет, Барселона!",
  welcomeEn: "Hello, Barcelona!",
  welcomeImage: pic("barcelona/arrival"),
  welcomeA11y: "Murzik and Tom arrive in Barcelona: a sunny street with palm trees, colourful mosaic houses and the sea in the distance.",
  departureImage: pic("barcelona/departure"),
  departureA11y: "Carmen and Lucas wave goodbye at Barcelona station; Lucas holds his skateboard, Murzik wears his straw hat.",
  finale: [
    {
      image: pic("barcelona/finale-1"),
      a11y: "Murzik's room above the café is full of colour: a striped towel on the balcony, a straw hat, a photo in a mosaic frame, a big map with stickers, a hammock, a ceramic lizard and a mosaic tile with the sea and a boat.",
      lines: [
        { en: "Murzik's room smells of the sea and coffee from the café below." },
        { en: "He takes his favourite thing with him: the mosaic tile from the café Asya once drew." },
      ],
    },
    {
      image: pic("barcelona/finale-2"),
      a11y: "Murzik and Tom on the beach at sunset with Carmen and Lucas, all waving at the camera.",
      lines: [
        { ru: "Барселона завершена!", en: "Barcelona complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Я пришёл, увидел… и не заблудился!", en: "I came, I saw… and I didn't get lost!" },
      ],
    },
    {
      image: pic("barcelona/suitcase"),
      a11y: "Murzik's open suitcase: Asya's silk scarf, Nina's recipe book and the mosaic tile; next to it a photo of the old sketch signed «А.».",
      lines: [
        { en: "A ginger cat came from the sea, drew a café and left for the south." },
        { ru: "Завтра — на юг.", en: "Tomorrow — south." },
        { en: "Italy is waiting." },
      ],
    },
    {
      image: pic("barcelona/departure"),
      a11y: "Carmen and Lucas wave goodbye at Barcelona station; Lucas holds his skateboard, Murzik wears his straw hat.",
      lines: [
        { ru: "До свидания, Кармен! Пока, Лукас!", en: "Goodbye, Carmen! Bye, Lucas!" },
        { ru: "Следующая остановка: Милан!", en: "Next stop: Milan!" },
      ],
    },
    {
      image: pic("barcelona/finale-5"),
      a11y: "A train runs along the coast and then into the mountains, from Spain towards Italy.",
      lines: [{ ru: "Барселона → Милан", en: "Barcelona → Milan" }],
    },
    {
      image: pic("milan/arrival"),
      a11y: "Murzik and Tom arrive in Milan: a huge white cathedral with many spires, a square with pigeons and elegant shop windows.",
      lines: [{ ru: "Привет, Милан!", en: "Hello, Milan!" }],
    },
  ],
};

const milanStory: CityStory = {
  home: {
    name: "Murzik's attic in Milan",
    nameRu: "Мансарда в Милане",
    image: pic("milan/home"),
    a11y: "A small empty attic room above an old tailor's workshop by the canals: a sloping ceiling, a round window, old wooden floorboards.",
  },
  keepsakeId: "mokapot",
  welcomeRu: "Привет, Милан!",
  welcomeEn: "Hello, Milan!",
  welcomeImage: pic("milan/arrival"),
  welcomeA11y: "Murzik and Tom arrive in Milan: a huge white cathedral with many spires, a square with pigeons and elegant shop windows.",
  departureImage: pic("milan/departure"),
  departureA11y: "Giulia and her grandfather Franco wave goodbye at Milan Central Station; Franco holds his old measuring tape.",
  finale: [
    {
      image: pic("milan/finale-1"),
      a11y: "Murzik's attic is now a little workshop: a coat rack, a tall mirror, five pairs of kitten socks, a sewing box, a velvet pouf, a tailor's dummy with his scarf and a silver coffee maker by the round window.",
      lines: [
        { en: "Murzik's attic smells of coffee and old fabric." },
        { en: "He takes his favourite thing with him: the little coffee maker from Giulia." },
      ],
    },
    {
      image: pic("milan/finale-2"),
      a11y: "Murzik in Tom's catalogue photo: he stands very straight in front of the cathedral, his long scarf flying.",
      lines: [
        { ru: "Милан завершён!", en: "Milan complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Из меня вышла отличная модель!", en: "I make a great model!" },
      ],
    },
    {
      image: pic("milan/suitcase"),
      a11y: "Murzik's suitcase: the silk scarf, the mosaic tile, the coffee maker, and a photo of an old dress sketch signed «А.».",
      lines: [
        { en: "A ginger cat drew dresses for a tailor, then left for an autumn festival." },
        { ru: "Едем в Мюнхен!", en: "Off to Munich!" },
      ],
    },
    {
      image: pic("milan/departure"),
      a11y: "Giulia and her grandfather Franco wave goodbye at Milan Central Station; Franco holds his old measuring tape.",
      lines: [
        { ru: "До свидания, Джулия! Спасибо, Франко!", en: "Goodbye, Giulia! Thank you, Franco!" },
        { ru: "Следующая остановка: Мюнхен!", en: "Next stop: Munich!" },
      ],
    },
    {
      image: pic("milan/finale-5"),
      a11y: "A train goes north past lakes and through the Alps, from Italy towards Germany.",
      lines: [{ ru: "Милан → Мюнхен", en: "Milan → Munich" }],
    },
    {
      image: pic("munich/arrival"),
      a11y: "Murzik and Tom arrive in Munich: a square with an old town hall, a tall clock tower and festival flags.",
      lines: [{ ru: "Привет, Мюнхен!", en: "Hello, Munich!" }],
    },
  ],
};

const munichStory: CityStory = {
  home: {
    name: "Murzik's attic in Munich",
    nameRu: "Мансарда в Мюнхене",
    image: pic("munich/home"),
    a11y: "A small empty attic room in Greta's guesthouse: a wooden roof, a bed, a little window with red flowers in a box outside.",
  },
  keepsakeId: "lidmug",
  welcomeRu: "Привет, Мюнхен!",
  welcomeEn: "Hello, Munich!",
  welcomeImage: pic("munich/arrival"),
  welcomeA11y: "Murzik and Tom arrive in Munich: a square with an old town hall, a tall clock tower and festival flags.",
  departureImage: pic("munich/departure"),
  departureA11y: "Greta, Max and old Otto with his accordion wave goodbye at Munich station; a night train waits at the platform.",
  finale: [
    {
      image: pic("munich/finale-1"),
      a11y: "The attic is cosy now: a wooden candle holder, a roll of starry wrapping paper, felt slippers by the door, a checked blanket, a little carousel horse, a gingerbread heart «Мурзику» and a painted mug with a lid.",
      lines: [
        { en: "Murzik's attic smells of gingerbread and warm tea." },
        { en: "He takes his favourite thing with him: Greta's old mug with a lid." },
      ],
    },
    {
      image: pic("munich/finale-2"),
      a11y: "Murzik dances on a long bench in the festival tent, Max and Tom clap, the band plays.",
      lines: [
        { ru: "Мюнхен завершён!", en: "Munich complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Мне очень понравилось!", en: "I liked it very much!" },
      ],
    },
    {
      image: pic("munich/suitcase"),
      a11y: "Murzik's suitcase: the silk scarf, the mosaic tile, the coffee maker, the photo of the dress sketch and the mug with a lid; on top, Asya's old postcard from Porto signed «А.».",
      lines: [
        { en: "A ginger cat drew words on gingerbread hearts and dreamed of the ocean." },
        { ru: "Едем к океану!", en: "Off to the ocean!" },
      ],
    },
    {
      image: pic("munich/departure"),
      a11y: "Greta, Max and old Otto with his accordion wave goodbye at Munich station; a night train waits at the platform.",
      lines: [
        { ru: "Спасибо, Грета! Пока, Макс! До свидания, Отто!", en: "Thank you, Greta! Bye, Max! Goodbye, Otto!" },
        { ru: "Следующая остановка: Порту!", en: "Next stop: Porto!" },
      ],
    },
    {
      image: pic("munich/finale-5"),
      a11y: "A night train, then a morning train: through France, past Paris, south to the Atlantic coast of Portugal.",
      lines: [{ ru: "Мюнхен → Париж → Порту", en: "Munich → Paris → Porto" }],
    },
    {
      image: pic("porto/arrival"),
      a11y: "Murzik and Tom arrive in Porto: colourful tiled houses on a steep hill, a big iron bridge over the river and the ocean beyond.",
      lines: [{ ru: "Привет, Порту!", en: "Hello, Porto!" }],
    },
  ],
};

const portoStory: CityStory = {
  home: {
    name: "Murzik's house in Porto",
    nameRu: "Домик в Порту",
    image: pic("porto/home"),
    a11y: "A narrow empty house on the steep riverbank: blue-and-white tiles outside, a tiny window looking at the river and an iron bridge.",
  },
  keepsakeId: "woodenboat",
  welcomeRu: "Привет, Порту!",
  welcomeEn: "Hello, Porto!",
  welcomeImage: pic("porto/arrival"),
  welcomeA11y: "Murzik and Tom arrive in Porto: colourful tiled houses on a steep hill, a big iron bridge over the river and the ocean beyond.",
  departureImage: pic("porto/departure"),
  departureA11y: "Inês, Tiago with his football and old Rui wave goodbye at Porto airport.",
  finale: [
    {
      image: pic("porto/finale-1"),
      a11y: "The narrow house is full of hobbies: a bookshelf with sketchbooks, two blue cups, a set of brushes, a signed football, a fado record, an old river map and a little wooden boat on the windowsill.",
      lines: [
        { en: "Murzik's little house smells of paint and the river." },
        { en: "He takes his favourite thing with him: Rui's little wooden boat." },
      ],
    },
    {
      image: pic("porto/finale-2"),
      a11y: "Murzik, Tom, Inês and Tiago in Rui's wooden boat under the iron bridge at sunset.",
      lines: [
        { ru: "Порту завершён!", en: "Porto complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Я хочу стать художником!", en: "I want to become an artist!" },
      ],
    },
    {
      image: pic("porto/suitcase"),
      a11y: "Murzik's suitcase: the silk scarf, the mosaic tile, the coffee maker, the photo of the dress sketch, the mug with a lid, Asya's postcard, and now a little wooden boat wrapped in the scarf.",
      lines: [
        { en: "A ginger cat drew the bridges of Porto from a boat, then went to look for a dragon." },
        { ru: "Едем к дракону!", en: "Off to see the dragon!" },
      ],
    },
    {
      image: pic("porto/departure"),
      a11y: "Inês, Tiago with his football and old Rui wave goodbye at Porto airport.",
      lines: [
        { ru: "Спасибо, Инеш! Пока, Тиагу! До свидания, Руй!", en: "Thank you, Inês! Bye, Tiago! Goodbye, Rui!" },
        { ru: "Следующая остановка: Краков!", en: "Next stop: Krakow!" },
      ],
    },
    {
      image: pic("porto/finale-5"),
      a11y: "A plane rises over the ocean and flies east across Europe towards Poland.",
      lines: [{ ru: "Порту → Краков", en: "Porto → Krakow" }],
    },
    {
      image: pic("krakow/arrival"),
      a11y: "Murzik and Tom arrive in Krakow: a huge old market square with a cloth hall, a tall church with two towers and pigeons.",
      lines: [{ ru: "Привет, Краков!", en: "Hello, Krakow!" }],
    },
  ],
};

const krakowStory: CityStory = {
  home: {
    name: "Murzik's attic in Krakow",
    nameRu: "Мансарда в Кракове",
    image: pic("krakow/home"),
    a11y: "A small empty room under the roof of an old house near the main square: a sloping wooden ceiling and a round window with a view of a church tower.",
  },
  keepsakeId: "wooddragon",
  welcomeRu: "Привет, Краков!",
  welcomeEn: "Hello, Krakow!",
  welcomeImage: pic("krakow/arrival"),
  welcomeA11y: "Murzik and Tom arrive in Krakow: a huge old market square with a cloth hall, a tall church with two towers and pigeons.",
  departureImage: pic("krakow/departure"),
  departureA11y: "Kasia and pan Janek wave goodbye at Krakow station; Tom wears his orange beanie, a little wooden dragon hangs on Murzik's suitcase.",
  finale: [
    {
      image: pic("krakow/finale-1"),
      a11y: "The attic is cosy now: a whistle and an orange beanie by the door, a brass trumpet on the windowsill, a red photo album, a glowing salt lamp, a carved box with dragons and a little wooden dragon.",
      lines: [
        { en: "Murzik's attic smells of wood shavings and old stone." },
        { en: "He takes his favourite thing with him: Janek's little wooden dragon." },
      ],
    },
    {
      image: pic("krakow/finale-2"),
      a11y: "Murzik, Tom in his orange beanie and Kasia by the dragon statue under the castle hill; the dragon breathes fire.",
      lines: [
        { ru: "Краков завершён!", en: "Krakow complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Я вижу Тома — в любой толпе!", en: "I can see Tom — in any crowd!" },
      ],
    },
    {
      image: pic("krakow/suitcase"),
      a11y: "Murzik's suitcase: the silk scarf, the mosaic tile, the coffee maker, the photo of the dress sketch, the mug with a lid, the wooden boat, Asya's postcard and the carved box with her note; the little dragon guards it all.",
      lines: [
        { en: "A ginger cat drew a dragon for a woodcarver, then went north to look for amber." },
        { ru: "Едем к морю!", en: "Off to the sea!" },
      ],
    },
    {
      image: pic("krakow/departure"),
      a11y: "Kasia and pan Janek wave goodbye at Krakow station; Tom wears his orange beanie, a little wooden dragon hangs on Murzik's suitcase.",
      lines: [
        { ru: "Спасибо, Кася! До свидания, пан Янек!", en: "Thank you, Kasia! Goodbye, pan Janek!" },
        { ru: "Следующая остановка: Рига!", en: "Next stop: Riga!" },
      ],
    },
    {
      image: pic("krakow/finale-5"),
      a11y: "A train runs north through Polish fields and forests towards the Baltic Sea.",
      lines: [{ ru: "Краков → Варшава → Рига", en: "Krakow → Warsaw → Riga" }],
    },
    {
      image: pic("riga/arrival"),
      a11y: "Murzik and Tom arrive in Riga: colourful old houses, a tall church spire with a golden rooster, and the wide river.",
      lines: [{ ru: "Привет, Рига!", en: "Hello, Riga!" }],
    },
  ],
};

const rigaStory: CityStory = {
  home: {
    name: "Murzik's flat in Riga",
    nameRu: "Квартира в Риге",
    image: pic("riga/home"),
    a11y: "Ilze's empty flat on the third floor of an old house: wooden floors, a big window onto red-tiled roofs and church spires.",
  },
  keepsakeId: "amberpendant",
  welcomeRu: "Привет, Рига!",
  welcomeEn: "Hello, Riga!",
  welcomeImage: pic("riga/arrival"),
  welcomeA11y: "Murzik and Tom arrive in Riga: colourful old houses, a tall church spire with a golden rooster, and the wide river.",
  departureImage: pic("riga/departure"),
  departureA11y: "Ilze waves goodbye at the Riga bus station; Lena, with her own suitcase, gets on the blue coach to Tallinn with Murzik and Tom.",
  finale: [
    {
      image: pic("riga/finale-1"),
      a11y: "The flat is cosy now: a doormat in two languages, linen curtains, a pot plant on the windowsill, a tape measure, amber keys on a hook, a basket of rye bread and an amber pendant.",
      lines: [
        { en: "Murzik's flat smells of rye bread and old wood." },
        { en: "He takes his favourite thing with him: the amber pendant with Asya's painted sea." },
      ],
    },
    {
      image: pic("riga/finale-2"),
      a11y: "Murzik, Tom and Lena on a bridge over the river at sunset; the old town spires behind them.",
      lines: [
        { ru: "Рига завершена!", en: "Riga complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Это была самая лучшая квартира!", en: "It was the very best flat!" },
      ],
    },
    {
      image: pic("riga/suitcase"),
      a11y: "Murzik's suitcase: the scarf, the tile, the coffee maker, the photo of the dress sketch, the mug, the wooden boat, the carved box with Asya's notes and the little dragon; the amber pendant hangs round Murzik's neck.",
      lines: [
        { en: "A ginger cat painted the sea on amber, then went north to see the white nights." },
        { ru: "Едем на север!", en: "Off to the north!" },
      ],
    },
    {
      image: pic("riga/departure"),
      a11y: "Ilze waves goodbye at the Riga bus station; Lena, with her own suitcase, gets on the blue coach to Tallinn with Murzik and Tom.",
      lines: [
        { ru: "Спасибо, Илзе! До свидания, Рига!", en: "Thank you, Ilze! Goodbye, Riga!" },
        { ru: "Следующая остановка: Таллин!", en: "Next stop: Tallinn!" },
      ],
    },
    {
      image: pic("riga/finale-5"),
      a11y: "A blue coach drives north along the coast road through pine forests, the Baltic Sea glittering on the left.",
      lines: [{ ru: "Рига → Таллин", en: "Riga → Tallinn" }],
    },
    {
      image: pic("tallinn/arrival"),
      a11y: "Murzik, Tom and Lena arrive in Tallinn: a medieval town wall with round towers and red pointed roofs.",
      lines: [{ ru: "Привет, Таллин!", en: "Hello, Tallinn!" }],
    },
  ],
};

const tallinnStory: CityStory = {
  home: {
    name: "Murzik's room in Tallinn",
    nameRu: "Комната в Таллине",
    image: pic("tallinn/home"),
    a11y: "A small spare room in Grandma Vera's old wooden house by the town wall: a wooden ceiling, a patchwork quilt and a window onto a round stone tower.",
  },
  keepsakeId: "mittens",
  welcomeRu: "Привет, Таллин!",
  welcomeEn: "Hello, Tallinn!",
  welcomeImage: pic("tallinn/arrival"),
  welcomeA11y: "Murzik, Tom and Lena arrive in Tallinn: a medieval town wall with round towers and red pointed roofs.",
  departureImage: pic("tallinn/departure"),
  departureA11y: "Lena and Grandma Vera wave from the port as a big white ferry leaves for Helsinki; Murzik waves back in red-and-white mittens.",
  finale: [
    {
      image: pic("tallinn/finale-1"),
      a11y: "The little room is cosy now: a wooden phone stand, a cork message board, a big old key on a red ribbon, a green dial telephone, an orange power bank, a basket with red wool and a pair of patterned mittens.",
      lines: [
        { en: "Murzik's room smells of wool and old wood." },
        { en: "He takes his favourite thing with him: Vera's mittens with Asya's pattern." },
      ],
    },
    {
      image: pic("tallinn/finale-2"),
      a11y: "Midnight in the old town, but the sky is still light: Murzik, Tom, Lena and Vera on a bench under the town wall.",
      lines: [
        { ru: "Таллин завершён!", en: "Tallinn complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Будем на связи!", en: "Let's stay in touch!" },
      ],
    },
    {
      image: pic("tallinn/suitcase"),
      a11y: "Murzik's suitcase: the scarf, the tile, the coffee maker, the photo of the dress sketch, the mug, the wooden boat, the carved box with Asya's notes, the little dragon and now the patterned mittens; the amber pendant hangs round Murzik's neck.",
      lines: [
        { en: "A ginger cat made up knitting patterns in the white nights, then sailed to the other shore." },
        { ru: "Плывём в Хельсинки!", en: "Sailing to Helsinki!" },
      ],
    },
    {
      image: pic("tallinn/departure"),
      a11y: "Lena and Grandma Vera wave from the port as a big white ferry leaves for Helsinki; Murzik waves back in red-and-white mittens.",
      lines: [
        { ru: "Спасибо, бабушка Вера! Пока, Лена!", en: "Thank you, Grandma Vera! Bye, Lena!" },
        { ru: "Следующая остановка: Хельсинки!", en: "Next stop: Helsinki!" },
      ],
    },
    {
      image: pic("tallinn/finale-5"),
      a11y: "The white ferry crosses the grey-blue sea; seagulls follow it; Tallinn's towers grow small behind.",
      lines: [{ ru: "Таллин → Хельсинки", en: "Tallinn → Helsinki" }],
    },
    {
      image: pic("helsinki/arrival"),
      a11y: "Murzik and Tom arrive in Helsinki: a white cathedral with green domes above a big square, and the harbour market.",
      lines: [{ ru: "Привет, Хельсинки!", en: "Hello, Helsinki!" }],
    },
  ],
};

const helsinkiStory: CityStory = {
  home: {
    name: "Murzik's cabin near Helsinki",
    nameRu: "Домик под Хельсинки",
    image: pic("helsinki/home"),
    a11y: "An empty little wooden cabin on a rocky island by the sea: pine walls, a narrow bed, and a small sauna on the shore outside the window.",
  },
  keepsakeId: "kuksa",
  welcomeRu: "Привет, Хельсинки!",
  welcomeEn: "Hello, Helsinki!",
  welcomeImage: pic("helsinki/arrival"),
  welcomeA11y: "Murzik and Tom arrive in Helsinki: a white cathedral with green domes above a big square, and the harbour market.",
  departureImage: pic("helsinki/departure"),
  departureA11y: "Marina waves goodbye at Helsinki station; Tom wears a thick scarf, a wooden mug hangs from Murzik's backpack.",
  finale: [
    {
      image: pic("helsinki/finale-1"),
      a11y: "The cabin is cosy now: a striped towel on a hook, a thermometer, a reindeer hot water bottle, a pill box, a jar of honey, a painted sign over the door and a wooden birch mug.",
      lines: [
        { en: "Murzik's cabin smells of pine, honey and sauna steam." },
        { en: "He takes his favourite thing with him: Marina's wooden birch mug." },
      ],
    },
    {
      image: pic("helsinki/finale-2"),
      a11y: "Healthy again, Tom sits on the pier with Murzik and Marina, all three holding cups of tea; the sun sets over the sea.",
      lines: [
        { ru: "Хельсинки завершён!", en: "Helsinki complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Том здоров!", en: "Tom is well again!" },
      ],
    },
    {
      image: pic("helsinki/suitcase"),
      a11y: "Murzik's suitcase is full: the scarf, the tile, the coffee maker, the photo of the dress sketch, the mug, the wooden boat, the carved box with Asya's notes, the little dragon, the mittens and a photo of the sauna sign signed «А.»; the birch kuksa hangs outside, and the amber pendant hangs round Murzik's neck.",
      lines: [
        { en: "A ginger cat painted a sauna sign instead of paying, then went west to see the northern lights." },
        { ru: "Едем к фьордам!", en: "Off to the fjords!" },
      ],
    },
    {
      image: pic("helsinki/departure"),
      a11y: "Marina waves goodbye at Helsinki station; Tom wears a thick scarf, a wooden mug hangs from Murzik's backpack.",
      lines: [
        { ru: "Спасибо, Марина! До свидания, Хельсинки!", en: "Thank you, Marina! Goodbye, Helsinki!" },
        { ru: "Следующая остановка: Осло!", en: "Next stop: Oslo!" },
      ],
    },
    {
      image: pic("helsinki/finale-5"),
      a11y: "A train, a big ferry across the sea and another train through dark forests, west towards Norway.",
      lines: [{ ru: "Хельсинки → Стокгольм → Осло", en: "Helsinki → Stockholm → Oslo" }],
    },
    {
      image: pic("oslo/arrival"),
      a11y: "Murzik and Tom arrive in Oslo: a white opera house sloping into the fjord, wooden boats and green hills.",
      lines: [{ ru: "Привет, Осло!", en: "Hello, Oslo!" }],
    },
  ],
};

const osloStory: CityStory = {
  home: {
    name: "Murzik's room in Oslo",
    nameRu: "Комната в Осло",
    image: pic("oslo/home"),
    a11y: "An empty small room in a red wooden guesthouse: wooden walls, a narrow bed and a window onto the blue fjord and green hills.",
  },
  keepsakeId: "woolsweater",
  welcomeRu: "Привет, Осло!",
  welcomeEn: "Hello, Oslo!",
  welcomeImage: pic("oslo/arrival"),
  welcomeA11y: "Murzik and Tom arrive in Oslo: a white opera house sloping into the fjord, wooden boats and green hills.",
  departureImage: pic("oslo/departure"),
  departureA11y: "Ingrid and old Solveig wave goodbye at Oslo station; Murzik wears a small dark blue jumper with green northern-lights waves.",
  finale: [
    {
      image: pic("oslo/finale-1"),
      a11y: "The room is cosy now: a brass barometer, a little Viking ship, a red thermos, a grey feather on the carved box, a framed photo of the fjord, Asya's pattern above the bed and a northern-lights jumper.",
      lines: [
        { en: "Murzik's room smells of wool, sea and pine." },
        { en: "He takes his favourite thing with him: Solveig's jumper with Asya's pattern." },
      ],
    },
    {
      image: pic("oslo/finale-2"),
      a11y: "Murzik, Tom and Ingrid on the viewpoint above the fjord; far below, a white boat — and on its deck, very small, a white cat in a hat.",
      lines: [
        { ru: "Осло завершён!", en: "Oslo complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Если будет солнце — всё получится!", en: "If the sun shines — everything will work out!" },
      ],
    },
    {
      image: pic("oslo/suitcase"),
      a11y: "Murzik's suitcase: all the treasures from the trip, the carved box with Asya's notes, Lev's grey feather and his note «Ищи там, где горы и часы».",
      lines: [
        { en: "A ginger cat drew the northern lights for a knitter, then went south to the mountains." },
        { en: "And an old cat in a hat is looking for her too." },
        { ru: "Едем на юг!", en: "Off to the south!" },
      ],
    },
    {
      image: pic("oslo/departure"),
      a11y: "Ingrid and old Solveig wave goodbye at Oslo station; Murzik wears a small dark blue jumper with green northern-lights waves.",
      lines: [
        { ru: "Спасибо, Ингрид! Спасибо, Сольвейг!", en: "Thank you, Ingrid! Thank you, Solveig!" },
        { ru: "Следующая остановка: Цюрих!", en: "Next stop: Zurich!" },
      ],
    },
    {
      image: pic("oslo/finale-5"),
      a11y: "A day train south along the coast, then a night train through Germany towards the Alps.",
      lines: [{ ru: "Осло → Гамбург → Цюрих", en: "Oslo → Hamburg → Zurich" }],
    },
    {
      image: pic("zurich/arrival"),
      a11y: "Murzik and Tom arrive in Zurich: a clear blue lake, old towers with big clocks and snowy mountains in the distance.",
      lines: [{ ru: "Привет, Цюрих!", en: "Hello, Zurich!" }],
    },
  ],
};

const zurichStory: CityStory = {
  home: {
    name: "Murzik's room in Zurich",
    nameRu: "Комната в Цюрихе",
    image: pic("zurich/home"),
    a11y: "An empty small room above an old clock shop: a sloping ceiling, a narrow bed and a window onto a church clock tower.",
  },
  keepsakeId: "cuckooclock",
  welcomeRu: "Привет, Цюрих!",
  welcomeEn: "Hello, Zurich!",
  welcomeImage: pic("zurich/arrival"),
  welcomeA11y: "Murzik and Tom arrive in Zurich: a clear blue lake, old towers with big clocks and snowy mountains in the distance.",
  departureImage: pic("zurich/departure"),
  departureA11y: "Ursula waves goodbye at Zurich station; Murzik holds a carved cuckoo clock in both paws.",
  finale: [
    {
      image: pic("zurich/finale-1"),
      a11y: "The room is cosy now: a glass coin jar, a wooden abacus, a box of chocolate, a leather wallet, a red-and-white picnic blanket, a photo of Asya's clock-tower drawing and a cuckoo clock.",
      lines: [
        { en: "Murzik's room ticks with a hundred clocks from the shop below." },
        { en: "He takes his favourite thing with him: the cuckoo clock made for Asya thirty years ago." },
      ],
    },
    {
      image: pic("zurich/finale-2"),
      a11y: "Murzik, Tom and Ursula have a picnic by the lake; the mountains are pink in the evening light.",
      lines: [
        { ru: "Цюрих завершён!", en: "Zurich complete!" },
        { en: "7 / 7 lessons" },
        { ru: "Один франк, два франка, пять франков — я всё посчитал!", en: "One franc, two francs, five francs — I've counted it all!" },
      ],
    },
    {
      image: pic("zurich/suitcase"),
      a11y: "Murzik's suitcase is very full now; on top, the cuckoo clock and a photo of Asya's drawing of a clock tower.",
      lines: [
        { en: "A ginger cat paid for her room with drawings — and nineteen of them went to Geneva." },
        { ru: "Едем в Женеву — смотреть рисунки бабушки!", en: "Off to Geneva to see Grandma's drawings!" },
      ],
    },
    {
      image: pic("zurich/departure"),
      a11y: "Ursula waves goodbye at Zurich station; Murzik holds a carved cuckoo clock in both paws.",
      lines: [
        { ru: "Спасибо, Урсула! До свидания, Цюрих!", en: "Thank you, Ursula! Goodbye, Zurich!" },
        { ru: "Следующая остановка: Женева!", en: "Next stop: Geneva!" },
      ],
    },
    {
      image: pic("zurich/finale-5"),
      a11y: "A red Swiss train runs west past lakes, vineyards and mountains.",
      lines: [{ ru: "Цюрих → Женева", en: "Zurich → Geneva" }],
    },
    {
      image: pic("geneva/arrival"),
      a11y: "Murzik and Tom arrive in Geneva: a huge fountain shooting water high above the lake, an old town on a hill.",
      lines: [{ ru: "Привет, Женева!", en: "Hello, Geneva!" }],
    },
  ],
};

function city(
  id: string,
  name: string,
  nameRu: string,
  lessons: Lesson[] = [],
  story?: CityStory,
): CityPlan {
  return { id, name, nameRu, lessons, story };
}

const a1 = [
  city("paris", "Paris", "Париж", parisLessons, parisStory),
  city("london", "London", "Лондон", londonLessons, londonStory),
  city("madrid", "Madrid", "Мадрид", madridLessons, madridStory),
  city("rome", "Rome", "Рим", romeLessons, romeStory),
  city("berlin", "Berlin", "Берлин", berlinLessons, berlinStory),
  city("amsterdam", "Amsterdam", "Амстердам", amsterdamLessons, amsterdamStory),
  city("vienna", "Vienna", "Вена", viennaLessons, viennaStory),
  city("prague", "Prague", "Прага", pragueLessons, pragueStory),
  city("lisbon", "Lisbon", "Лиссабон", lisbonLessons, lisbonStory),
  city("athens", "Athens", "Афины", athensLessons, athensStory),
  city("istanbul", "Istanbul", "Стамбул", istanbulLessons, istanbulStory),
  city("warsaw", "Warsaw", "Варшава", warsawLessons, warsawStory),
  city("budapest", "Budapest", "Будапешт", budapestLessons, budapestStory),
  city("edinburgh", "Edinburgh", "Эдинбург", edinburghLessons, edinburghStory),
];

const a2 = [
  ["lyon", "Lyon", "Лион"],
  ["barcelona", "Barcelona", "Барселона"],
  ["milan", "Milan", "Милан"],
  ["munich", "Munich", "Мюнхен"],
  ["porto", "Porto", "Порту"],
  ["krakow", "Krakow", "Краков"],
  ["riga", "Riga", "Рига"],
  ["tallinn", "Tallinn", "Таллин"],
  ["helsinki", "Helsinki", "Хельсинки"],
  ["oslo", "Oslo", "Осло"],
  ["zurich", "Zurich", "Цюрих"],
  ["geneva", "Geneva", "Женева"],
  ["nice", "Nice", "Ницца"],
  ["marseille", "Marseille", "Марсель"],
  ["seville", "Seville", "Севилья"],
  ["naples", "Naples", "Неаполь"],
  ["dubrovnik", "Dubrovnik", "Дубровник"],
  ["bratislava", "Bratislava", "Братислава"],
] as const;

const b1 = [
  ["montreal", "Montreal", "Монреаль"],
  ["quebec", "Quebec City", "Квебек"],
  ["toronto", "Toronto", "Торонто"],
  ["new-york", "New York", "Нью-Йорк"],
  ["boston", "Boston", "Бостон"],
  ["chicago", "Chicago", "Чикаго"],
  ["san-francisco", "San Francisco", "Сан-Франциско"],
  ["mexico-city", "Mexico City", "Мехико"],
  ["buenos-aires", "Buenos Aires", "Буэнос-Айрес"],
  ["rio", "Rio de Janeiro", "Рио-де-Жанейро"],
  ["cairo", "Cairo", "Каир"],
  ["marrakech", "Marrakech", "Марракеш"],
  ["nairobi", "Nairobi", "Найроби"],
  ["cape-town", "Cape Town", "Кейптаун"],
  ["reykjavik", "Reykjavik", "Рейкьявик"],
  ["bergen", "Bergen", "Берген"],
  ["glasgow", "Glasgow", "Глазго"],
  ["cardiff", "Cardiff", "Кардифф"],
] as const;

const b2 = [
  ["tokyo", "Tokyo", "Токио"],
  ["kyoto", "Kyoto", "Киото"],
  ["seoul", "Seoul", "Сеул"],
  ["beijing", "Beijing", "Пекин"],
  ["shanghai", "Shanghai", "Шанхай"],
  ["bangkok", "Bangkok", "Бангкок"],
  ["singapore", "Singapore", "Сингапур"],
  ["hanoi", "Hanoi", "Ханой"],
  ["delhi", "Delhi", "Дели"],
  ["jaipur", "Jaipur", "Джайпур"],
  ["mumbai", "Mumbai", "Мумбаи"],
  ["kathmandu", "Kathmandu", "Катманду"],
  ["tbilisi", "Tbilisi", "Тбилиси"],
  ["yerevan", "Yerevan", "Ереван"],
  ["tashkent", "Tashkent", "Ташкент"],
  ["almaty", "Almaty", "Алматы"],
  ["baku", "Baku", "Баку"],
  ["samarkand", "Samarkand", "Самарканд"],
] as const;

const c1 = [
  ["petersburg", "Saint Petersburg", "Санкт-Петербург"],
  ["moscow", "Moscow", "Москва"],
  ["kazan", "Kazan", "Казань"],
  ["vladimir", "Vladimir", "Владимир"],
  ["suzdal", "Suzdal", "Суздаль"],
  ["yaroslavl", "Yaroslavl", "Ярославль"],
  ["novgorod", "Novgorod", "Новгород"],
  ["irkutsk", "Irkutsk", "Иркутск"],
  ["vladivostok", "Vladivostok", "Владивосток"],
  ["kaliningrad", "Kaliningrad", "Калининград"],
  ["murmansk", "Murmansk", "Мурманск"],
  ["sochi", "Sochi", "Сочи"],
  ["perm", "Perm", "Пермь"],
  ["omsk", "Omsk", "Омск"],
  ["tomsk", "Tomsk", "Томск"],
  ["yakutsk", "Yakutsk", "Якутск"],
  ["petrozavodsk", "Petrozavodsk", "Петрозаводск"],
  ["pskov", "Pskov", "Псков"],
] as const;

function fromTuples(rows: readonly (readonly [string, string, string])[]): CityPlan[] {
  return rows.map(([id, name, nameRu]) => city(id, name, nameRu));
}

export const levels: LevelPlan[] = [
  { id: "A1", title: "A1", subtitle: "Survival and first conversations", cities: a1 },
  {
    id: "A2",
    title: "A2",
    subtitle: "Everyday life",
    cities: [
      city("lyon", "Lyon", "Лион", lyonLessons, lyonStory),
      city("barcelona", "Barcelona", "Барселона", barcelonaLessons, barcelonaStory),
      city("milan", "Milan", "Милан", milanLessons, milanStory),
      city("munich", "Munich", "Мюнхен", munichLessons, munichStory),
      city("porto", "Porto", "Порту", portoLessons, portoStory),
      city("krakow", "Krakow", "Краков", krakowLessons, krakowStory),
      city("riga", "Riga", "Рига", rigaLessons, rigaStory),
      city("tallinn", "Tallinn", "Таллин", tallinnLessons, tallinnStory),
      city("helsinki", "Helsinki", "Хельсинки", helsinkiLessons, helsinkiStory),
      city("oslo", "Oslo", "Осло", osloLessons, osloStory),
      city("zurich", "Zurich", "Цюрих", zurichLessons, zurichStory),
      ...fromTuples(a2.filter(([id]) => !["lyon", "barcelona", "milan", "munich", "porto", "krakow", "riga", "tallinn", "helsinki", "oslo", "zurich"].includes(id))),
    ],
  },
  { id: "B1", title: "B1", subtitle: "Independent Russian", cities: fromTuples(b1) },
  { id: "B2", title: "B2", subtitle: "Nuance and opinion", cities: fromTuples(b2) },
  { id: "C1", title: "C1", subtitle: "Natural, advanced Russian", cities: fromTuples(c1) },
];

/** The Russian course (for English speakers). Helpers come from the shared course model. */
export const russianCourse = makeCourse(levels);

// The names below keep older imports working; the app itself reads the active course from ./active.
export const {
  allPlannedLessons,
  readyCities,
  courseLessons,
  getLesson,
  getCity,
  cityName,
  lessonsInLevel,
  plannedInLevel,
  earnedRewards,
  learnedVocab,
  cityRewards,
  keepsakes,
  homeCity,
  cityComplete,
  completedCities,
  nextLesson,
  pendingFinale,
  cityAfter,
} = russianCourse;
