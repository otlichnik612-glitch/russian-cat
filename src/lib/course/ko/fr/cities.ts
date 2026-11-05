import type { CityStory, Lesson } from "../../types";
import { koSeoulFr } from "./seoul";
import { koHongdaeFr } from "./hongdae";
import { koSuwonFr } from "./suwon";

/** The stops of Korean A1 for French speakers, in route order. */
export type KoCity = { id: string; name: string; nameKo: string; lessons: Lesson[]; story?: CityStory };

export const koCitiesFr: KoCity[] = [koSeoulFr, koHongdaeFr, koSuwonFr];
