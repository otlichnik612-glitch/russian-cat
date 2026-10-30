import type { CityStory, Lesson } from "../../types";
import { koSeoulEn } from "./seoul";
import { koHongdaeEn } from "./hongdae";
import { koSuwonEn } from "./suwon";

/** The stops of Korean A1 for English speakers, in route order. */
export type KoCity = { id: string; name: string; nameKo: string; lessons: Lesson[]; story?: CityStory };

export const koCitiesEn: KoCity[] = [koSeoulEn, koHongdaeEn, koSuwonEn];
