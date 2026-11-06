import type { CityPlan } from "../../types";
import { amsterdamFr } from "./amsterdam";
import { athensFr } from "./athens";
import { berlinFr } from "./berlin";
import { budapestFr } from "./budapest";
import { edinburghFr } from "./edinburgh";
import { istanbulFr } from "./istanbul";
import { lisbonFr } from "./lisbon";
import { londonFr } from "./london";
import { madridFr } from "./madrid";
import { pragueFr } from "./prague";
import { romeFr } from "./rome";
import { viennaFr } from "./vienna";
import { warsawFr } from "./warsaw";

/** The cities of the French version of the Russian course, after Paris. */
export const citiesFr: Record<string, Pick<CityPlan, "lessons" | "story">> = { amsterdam: amsterdamFr, athens: athensFr, berlin: berlinFr, budapest: budapestFr, edinburgh: edinburghFr, istanbul: istanbulFr, lisbon: lisbonFr, london: londonFr, madrid: madridFr, prague: pragueFr, rome: romeFr, vienna: viennaFr, warsaw: warsawFr, };
