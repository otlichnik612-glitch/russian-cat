import type { CityStory, Lesson } from "../types";
import { arMarrakesh } from "./marrakesh";
import { arFes } from "./fes";
import { arChefchaouen } from "./chefchaouen";
import { arTunis } from "./tunis";
import { arSidiBouSaid } from "./sidibousaid";
import { arCairo } from "./cairo";
import { arAswan } from "./aswan";
import { arAmman } from "./amman";
import { arPetra } from "./petra";
import { arWadiRum } from "./wadirum";
import { arAlUla } from "./alula";
import { arJeddah } from "./jeddah";
import { arMuscat } from "./muscat";
import { arAbuDhabi } from "./abudhabi";

/** The stops of Arabic A1 (the story starts in Paris, the lessons in Marrakesh), in route order. */
export type ArCity = { id: string; name: string; nameAr: string; lessons: Lesson[]; story?: CityStory };

export const arCities: ArCity[] = [arMarrakesh, arFes, arChefchaouen, arTunis, arSidiBouSaid, arCairo, arAswan, arAmman, arPetra, arWadiRum, arAlUla, arJeddah, arMuscat, arAbuDhabi];
