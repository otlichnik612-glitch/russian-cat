import type { CityStory, Lesson } from "../types";
import { trKadikoy } from "./kadikoy";
import { trIstanbul } from "./istanbul";
import { trBursa } from "./bursa";
import { trIzmir } from "./izmir";
import { trPamukkale } from "./pamukkale";
import { trBodrum } from "./bodrum";
import { trAntalya } from "./antalya";
import { trKonya } from "./konya";
import { trKapadokya } from "./kapadokya";
import { trAnkara } from "./ankara";
import { trTrabzon } from "./trabzon";
import { trVan } from "./van";
import { trGaziantep } from "./gaziantep";
import { trMardin } from "./mardin";

/** The 14 stops of Turkish A1 (the story starts in Paris, the lessons in İstanbul), in route order. Each city file adds its lessons and story here. */
export type TrCity = { id: string; name: string; nameTr: string; lessons: Lesson[]; story?: CityStory };

export const trCities: TrCity[] = [
  trKadikoy,
  trIstanbul,
  trBursa,
  trIzmir,
  trPamukkale,
  trBodrum,
  trAntalya,
  trKonya,
  trKapadokya,
  trAnkara,
  trTrabzon,
  trVan,
  trGaziantep,
  trMardin,
];
