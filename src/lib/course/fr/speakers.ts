import type { SpeakerId } from "../types";

/** Dialogue names in the French version of the Russian course: `name` in French (interface), `target` in Russian. */
export const speakersFr: Partial<Record<SpeakerId, { name: string; target: string }>> = {
  tom: { name: "Tom", target: "Том" },
  murzik: { name: "Murzik", target: "Мурзик" },
  neighbour: { name: "Madame Dubois", target: "Мадам Дюбуа" },
  asya: { name: "Grand-mère Assia", target: "Бабушка Ася" },
};
