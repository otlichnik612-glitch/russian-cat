import type { CityPlan, Lesson, LevelId, LevelPlan } from "./types";

export const LESSONS_PER_CITY = 7;

/**
 * Levels hidden on the site for now (their pictures are not drawn yet). Their cities stay on the map
 * as "coming soon", like the levels that are not written yet; the lessons themselves are kept in the
 * code and come back as soon as the level is removed from this list.
 */
export const HIDDEN_LEVELS: LevelId[] = ["A2"];

/**
 * Everything the app needs to know about one course, built from its levels.
 * The Russian course and the Turkish course both use this, so the player, home screen,
 * downloads and progress work the same way for every language.
 */
export function makeCourse(allLevels: LevelPlan[]) {
  const levels: LevelPlan[] = allLevels.map((level) =>
    HIDDEN_LEVELS.includes(level.id) ? { ...level, cities: level.cities.map((c) => ({ ...c, lessons: [] })) } : level,
  );
  const allCities = levels.flatMap((level) => level.cities);
  /** Cities that already have lessons, in story order. */
  const readyCities: CityPlan[] = allCities.filter((c) => c.lessons.length > 0);
  /** Every written lesson, in the order a learner meets them. */
  const courseLessons: Lesson[] = readyCities.flatMap((c) => c.lessons);

  validate(readyCities, courseLessons);

  const getLesson = (id: string) => courseLessons.find((lesson) => lesson.id === id);
  const getCity = (id: string) => allCities.find((c) => c.id === id);
  const cityComplete = (c: CityPlan, completedIds: string[]) =>
    c.lessons.length > 0 && c.lessons.every((lesson) => completedIds.includes(lesson.id));
  const completedCities = (completedIds: string[]) => readyCities.filter((c) => cityComplete(c, completedIds));
  /** The first lesson not yet done, across all cities. Lessons open one after another. */
  const nextLesson = (completedIds: string[]) =>
    courseLessons.find((lesson) => !completedIds.includes(lesson.id)) ?? null;

  return {
    levels,
    readyCities,
    courseLessons,
    allPlannedLessons: levels.reduce((sum, level) => sum + level.cities.length * LESSONS_PER_CITY, 0),
    getLesson,
    getCity,
    cityName: (id: string) => getCity(id)?.name ?? id,
    lessonsInLevel: (level: LevelId) =>
      levels.find((item) => item.id === level)?.cities.reduce((sum, c) => sum + c.lessons.length, 0) ?? 0,
    plannedInLevel: (level: LevelId) => (levels.find((item) => item.id === level)?.cities.length ?? 0) * LESSONS_PER_CITY,
    earnedRewards: (completedIds: string[]) =>
      courseLessons.filter((lesson) => completedIds.includes(lesson.id)).map((lesson) => lesson.reward),
    learnedVocab: (completedIds: string[]) =>
      courseLessons.filter((lesson) => completedIds.includes(lesson.id)).flatMap((lesson) => lesson.vocab),
    /** Rewards earned in one city: the things in Murzik's home there. */
    cityRewards: (c: CityPlan, completedIds: string[]) =>
      c.lessons.filter((lesson) => completedIds.includes(lesson.id)).map((lesson) => lesson.reward),
    /** Favourite things Murzik took with him from finished cities. */
    keepsakes: (completedIds: string[]) =>
      completedCities(completedIds).flatMap((c) =>
        c.lessons.map((lesson) => lesson.reward).filter((reward) => reward.itemId === c.story?.keepsakeId),
      ),
    /** The city Murzik lives in now: where the next lesson is, or the last city reached. */
    homeCity: (completedIds: string[]) => {
      const next = nextLesson(completedIds);
      return (next ? getCity(next.cityId) : readyCities[readyCities.length - 1]) ?? readyCities[0]!;
    },
    cityComplete,
    completedCities,
    nextLesson,
    /** A finished city whose farewell story the learner has not seen yet. */
    pendingFinale: (completedIds: string[], finalesSeen: string[]) =>
      readyCities.find((c) => cityComplete(c, completedIds) && !finalesSeen.includes(c.id)) ?? null,
    /** The planned city after the given one, if any. */
    cityAfter: (id: string): CityPlan | null => {
      const index = allCities.findIndex((c) => c.id === id);
      return index >= 0 ? (allCities[index + 1] ?? null) : null;
    },
  };
}

export type CourseModel = ReturnType<typeof makeCourse>;

/** New words in one lesson: 7 on A1, 8 from A2 on. */
export function wordsPerLesson(level: Lesson["level"]): number {
  return level === "A1" ? 7 : 8;
}

function validate(readyCities: CityPlan[], courseLessons: Lesson[]) {
  const seen = new Set<string>();
  for (const lesson of courseLessons) {
    const want = wordsPerLesson(lesson.level);
    if (lesson.vocab.length !== want) throw new Error(`${lesson.id} must teach exactly ${want} phrases`);
    const ids = [
      lesson.id,
      ...lesson.vocab.map((item) => item.id),
      lesson.dialogue.gist.id,
      ...lesson.tasks.map((activity) => activity.id),
    ];
    for (const id of ids) {
      if (seen.has(id)) throw new Error(`Duplicate id ${id}`);
      seen.add(id);
    }
  }
  for (const c of readyCities) {
    if (c.lessons.length !== LESSONS_PER_CITY) throw new Error(`${c.id} must have ${LESSONS_PER_CITY} lessons`);
    if (!c.story) throw new Error(`${c.id} needs a story`);
    if (!c.lessons.some((lesson) => lesson.reward.itemId === c.story?.keepsakeId))
      throw new Error(`${c.id}: keepsake ${c.story.keepsakeId} is not one of its rewards`);
  }
}
