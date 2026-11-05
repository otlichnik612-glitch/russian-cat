import { pic } from "../art";

/**
 * The three opening screens before the first lesson, in French.
 * Grandma Asya is never shown: only her handwriting and the little painted cat on her postcard.
 * This first postcard has no stamp and no address. The second one, with a London stamp,
 * Murzik finds in the old desk in Paris, lesson 6.
 */
export const prologueFr = {
  find: {
    image: pic("prologue/1"),
    a11y: "Un matin à Paris. Une vieille carte postale un peu jaunie est posée sur le sol, juste à l'entrée de l'appartement vide de Murzik. Murzik se penche pour la ramasser, surpris.",
    title: "Bonjour, moi c'est Murzik !",
    text: "Un matin, j'ai trouvé une vieille carte postale glissée sous la porte de mon appartement parisien.",
  },
  postcard: {
    image: pic("prologue/2"),
    a11y: "La vieille carte postale en gros plan : papier jauni, quelques lignes d'écriture et un petit chat roux peint dans le coin. Ni timbre ni adresse.",
    ru: "Иди по моим следам. — Ася",
    en: "Suis mes traces. — Assia",
    text: "Assia, c'est ma grand-mère. Elle a passé sa vie à voyager autour du monde, mais un jour elle a disparu sans laisser de traces. Personne ne l'a revue depuis.",
    question: "Qui a laissé cette carte ? Et où mènent les pas de grand-mère Assia ?",
  },
  journey: {
    image: pic("prologue/3"),
    a11y: "Murzik et Tom côte à côte avec leurs valises au départ d'une longue route qui serpente entre villages et villes vers l'horizon.",
    // The author's own text (as in the original version), in French.
    text: "Tom et moi voyageons de ville en ville. Dans chaque ville, je trouve un petit chez-moi. Chaque leçon terminée te fait gagner un nouvel objet pour le rendre douillet. Petit à petit, ma maison se remplit de belles choses. Et quand il est temps de repartir, j'emporte mes objets préférés avec moi !",
  },
};
