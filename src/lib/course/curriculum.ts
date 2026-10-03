import { lesson1, lesson2, lesson3 } from "./lessons/early";
import { lesson4, lesson5, lesson6, lesson7 } from "./lessons/late";
import type { CityPlan, Lesson, LevelId, LevelPlan } from "./types";

/**
 * Add a lesson by appending a Lesson to a city's `lessons` array.
 * Exactly 10 new lexical items. The player, downloads, rewards and
 * progress all read this data. Do not add placeholder lessons.
 */
export const LESSONS_PER_CITY = 7;

export const parisLessons: Lesson[] = [lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7];

for (const lesson of parisLessons) {
  if (lesson.vocab.length !== 10) {
    throw new Error(`${lesson.id} must teach exactly 10 items`);
  }
}

function city(id: string, name: string, nameRu: string, lessons: Lesson[] = []): CityPlan {
  return { id, name, nameRu, lessons };
}

const a1 = [
  city("paris", "Paris", "Париж", parisLessons),
  city("london", "London", "Лондон"),
  city("madrid", "Madrid", "Мадрид"),
  city("rome", "Rome", "Рим"),
  city("berlin", "Berlin", "Берлин"),
  city("amsterdam", "Amsterdam", "Амстердам"),
  city("vienna", "Vienna", "Вена"),
  city("prague", "Prague", "Прага"),
  city("lisbon", "Lisbon", "Лиссабон"),
  city("athens", "Athens", "Афины"),
  city("istanbul", "Istanbul", "Стамбул"),
  city("warsaw", "Warsaw", "Варшава"),
  city("budapest", "Budapest", "Будапешт"),
  city("brussels", "Brussels", "Брюссель"),
  city("copenhagen", "Copenhagen", "Копенгаген"),
  city("stockholm", "Stockholm", "Стокгольм"),
  city("dublin", "Dublin", "Дублин"),
  city("edinburgh", "Edinburgh", "Эдинбург"),
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
  { id: "A2", title: "A2", subtitle: "Everyday life", cities: fromTuples(a2) },
  { id: "B1", title: "B1", subtitle: "Independent Russian", cities: fromTuples(b1) },
  { id: "B2", title: "B2", subtitle: "Nuance and opinion", cities: fromTuples(b2) },
  { id: "C1", title: "C1", subtitle: "Natural, advanced Russian", cities: fromTuples(c1) },
];

export const allPlannedLessons = levels.reduce((sum, level) => sum + level.cities.length * LESSONS_PER_CITY, 0);

export function getLesson(id: string): Lesson | undefined {
  return parisLessons.find((lesson) => lesson.id === id);
}

export function lessonsInLevel(level: LevelId) {
  return levels.find((item) => item.id === level)?.cities.reduce((sum, c) => sum + c.lessons.length, 0) ?? 0;
}

export function plannedInLevel(level: LevelId) {
  const found = levels.find((item) => item.id === level);
  return (found?.cities.length ?? 0) * LESSONS_PER_CITY;
}

export function earnedRewards(completedIds: string[]) {
  return parisLessons.filter((lesson) => completedIds.includes(lesson.id)).map((lesson) => lesson.reward);
}

export function learnedVocab(completedIds: string[]) {
  return parisLessons.filter((lesson) => completedIds.includes(lesson.id)).flatMap((lesson) => lesson.vocab);
}

export function parisComplete(completedIds: string[]) {
  return parisLessons.every((lesson) => completedIds.includes(lesson.id));
}

export function nextParisLesson(completedIds: string[]) {
  return parisLessons.find((lesson) => !completedIds.includes(lesson.id)) ?? null;
}
