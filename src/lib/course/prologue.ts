import { pic } from "./art";

/**
 * The three opening screens before the first lesson.
 * Grandma Asya is never shown: only her handwriting and the little painted cat on her postcard.
 * This first postcard has no stamp and no address. The second one, with a London stamp,
 * Murzik finds in the old desk in Paris, lesson 6.
 */
export const prologue = {
  find: {
    image: pic("prologue/1"),
    a11y: "Morning in Paris. An old, slightly yellow postcard lies on the floor just inside the door of Murzik's empty apartment. Murzik bends down to pick it up, surprised.",
    title: "Hello, I'm Murzik!",
    text: "One morning, I found an old postcard under the door of my Paris apartment.",
  },
  postcard: {
    image: pic("prologue/2"),
    a11y: "Close-up of the old postcard: yellowed paper, a few lines of handwriting and a small painted ginger cat in the corner. No stamp and no address.",
    ru: "Иди по моим следам. — Ася",
    en: "Follow my steps. — Asya",
    text: "Asya is my grandma. She spent her life travelling around the world, but one day she vanished without a trace. No one has seen her since.",
    question: "Who left this postcard? And where do Grandma Asya’s steps lead?",
  },
  journey: {
    image: pic("prologue/3"),
    a11y: "Murzik and Tom stand side by side with their suitcases at the start of a long road that winds past little towns and cities into the distance.",
    // The author's own text. Do not change it.
    text: "Tom and I travel from city to city. In every city, I find a little home. With every lesson you complete, you earn a new item to make it feel cosy. Little by little, my home fills up with wonderful things. And when it’s time to move on, I take my favourite things with me!",
  },
};
