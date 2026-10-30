import type { CityStory, Lesson } from "../types";
import { koSeoul } from "./seoul";
import { koHongdae } from "./hongdae";
import { koSuwon } from "./suwon";

/** The stops of Korean A1, in route order. */
export type KoCity = { id: string; name: string; nameKo: string; lessons: Lesson[]; story?: CityStory };

export const koCities: KoCity[] = [koSeoul, koHongdae, koSuwon];
