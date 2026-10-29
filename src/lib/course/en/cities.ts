import type { CityStory, Lesson } from "../types";
import { enLondon } from "./london";
import { enOxford } from "./oxford";
import { enBath } from "./bath";
import { enEdinburgh } from "./edinburgh";
import { enDublin } from "./dublin";
import { enNewYork } from "./newyork";
import { enBoston } from "./boston";
import { enChicago } from "./chicago";
import { enNewOrleans } from "./neworleans";
import { enSanFrancisco } from "./sanfrancisco";
import { enVancouver } from "./vancouver";
import { enToronto } from "./toronto";
import { enSydney } from "./sydney";
import { enWellington } from "./wellington";

/** The 14 cities of English A1, in route order. Each city file adds its lessons and story here. */
export type EnCity = { id: string; name: string; nameEn: string; lessons: Lesson[]; story?: CityStory };

export const enCities: EnCity[] = [
  enLondon,
  enOxford,
  enBath,
  enEdinburgh,
  enDublin,
  enNewYork,
  enBoston,
  enChicago,
  enNewOrleans,
  enSanFrancisco,
  enVancouver,
  enToronto,
  enSydney,
  enWellington,
];
