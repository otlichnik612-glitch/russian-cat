import { pic } from "./art";

/**
 * The two very first screens, before the language choice. In English (the learner's language is not known yet).
 * 1. Murzik says hello.  2. Murzik at his laptop asks the learner to sign in, so progress is saved.
 */
export const welcomeScreens = {
  hello: {
    image: pic("welcome/1"),
    a11y: "Murzik, a ginger kitten in a scarf, stands on cream paper and waves one paw at you with a big, friendly smile. His suitcase stands beside him.",
    title: "Hi! My name is Murzik!",
    text: "I'll help you learn languages.",
    button: "Continue",
  },
  signIn: {
    image: pic("welcome/2"),
    a11y: "Murzik sits on a chair at a small wooden desk and types on a little laptop with both paws, tongue peeking out in concentration. His tail is curled around the chair leg.",
    title: "Sign in to save your progress.",
    google: "Continue with Google",
    email: "Continue with email",
    later: "Not now",
  },
};
