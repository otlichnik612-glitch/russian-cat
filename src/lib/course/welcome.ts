import { pic } from "./art";
import type { NativeLang } from "./languages";

/**
 * The sign-in screens and the account screen, in the learner's own language.
 * They come after the first screen, where the learner picks their language (see `languageScreens.native`).
 * Russian texts avoid forms that depend on the learner's gender.
 */
export type AccountText = {
  image: string;
  a11y: string;
  hello: string;
  title: string;
  google: string;
  email: string;
  later: string;
  back: string;
  notHere: string;
  linkFailed: string;
  signInEmail: string;
  createAccount: string;
  emailLabel: string;
  passwordLabel: string;
  passwordHint: string;
  wait: string;
  signIn: string;
  create: string;
  toSignUp: string;
  toSignIn: string;
  forgot: string;
  checkEmail: string;
  linkSent: string;
  forgotText: string;
  sendLink: string;
  newPasswordTitle: string;
  newPasswordSaved: string;
  newPasswordLabel: string;
  savePassword: string;
  continue: string;
  yourAccount: string;
  done: string;
  signOut: string;
  afterSignOut: string;
  saving: string;
  saved: string;
  saveError: string;
  errors: {
    exists: string;
    wrong: string;
    short: string;
    badEmail: string;
    noAccount: string;
    closed: string;
    offline: string;
    other: string;
  };
};

const image = pic("welcome/2");

export const accountText: Record<NativeLang, AccountText> = {
  en: {
    image,
    a11y: "Murzik sits on a chair at a small wooden desk and types on a little laptop with both paws, tongue peeking out in concentration. His tail is curled around the chair leg.",
    hello: "I'll help you learn languages!",
    title: "Sign in to save your progress.",
    google: "Continue with Google",
    email: "Continue with email",
    later: "Not now",
    back: "Back",
    notHere: "Sign-in works on the published site, talkykitty.com. Here you can carry on without it.",
    linkFailed: "Sign-in didn’t finish. Please try again.",
    signInEmail: "Sign in with email",
    createAccount: "Create an account",
    emailLabel: "Email",
    passwordLabel: "Password",
    passwordHint: "At least 8 characters",
    wait: "Please wait…",
    signIn: "Sign in",
    create: "Create account",
    toSignUp: "New here? Create an account",
    toSignIn: "Already have an account? Sign in",
    forgot: "Forgot password?",
    checkEmail: "Check your email",
    linkSent: "We sent you a link. Open it on this phone to choose a new password.",
    forgotText: "Enter your email and we’ll send you a link to choose a new password.",
    sendLink: "Send the link",
    newPasswordTitle: "Choose a new password",
    newPasswordSaved: "Your new password is saved",
    newPasswordLabel: "New password",
    savePassword: "Save the password",
    continue: "Continue",
    yourAccount: "Your account",
    done: "Done",
    signOut: "Sign out",
    afterSignOut: "After you sign out, your lessons stay on this phone too.",
    saving: "Saving…",
    saved: "Your progress is saved to your account.",
    saveError: "Couldn’t save right now. Your progress is safe on this phone, and I’ll try again soon.",
    errors: {
      exists: "This email already has an account. Choose “Sign in” instead.",
      wrong: "Wrong email or password.",
      short: "That password is too short. Please use at least 8 characters.",
      badEmail: "Please check the email address.",
      noAccount: "No account with this email.",
      closed: "New accounts can’t be created right now. Please try again later.",
      offline: "Couldn’t connect. Check your internet and try again.",
      other: "That didn’t work. Please try again.",
    },
  },
  ru: {
    image,
    a11y: "Мурзик сидит на стуле за маленьким деревянным столом и печатает обеими лапками на маленьком ноутбуке, от старания высунув кончик языка. Хвост обвился вокруг ножки стула.",
    hello: "Я помогу тебе выучить языки!",
    title: "Войди, чтобы сохранить прогресс.",
    google: "Войти через Google",
    email: "Войти по почте",
    later: "Не сейчас",
    back: "Назад",
    notHere: "Вход работает на сайте talkykitty.com. Здесь можно продолжить без него.",
    linkFailed: "Вход не завершился. Попробуй ещё раз.",
    signInEmail: "Вход по почте",
    createAccount: "Новый аккаунт",
    emailLabel: "Почта",
    passwordLabel: "Пароль",
    passwordHint: "Не меньше 8 символов",
    wait: "Подожди немного…",
    signIn: "Войти",
    create: "Создать аккаунт",
    toSignUp: "Впервые здесь? Создать аккаунт",
    toSignIn: "Уже есть аккаунт? Войти",
    forgot: "Не помнишь пароль?",
    checkEmail: "Проверь почту",
    linkSent: "Мы отправили ссылку. Открой её на этом телефоне, чтобы выбрать новый пароль.",
    forgotText: "Введи свою почту, и мы пришлём ссылку для нового пароля.",
    sendLink: "Отправить ссылку",
    newPasswordTitle: "Новый пароль",
    newPasswordSaved: "Новый пароль сохранён",
    newPasswordLabel: "Новый пароль",
    savePassword: "Сохранить пароль",
    continue: "Продолжить",
    yourAccount: "Твой аккаунт",
    done: "Готово",
    signOut: "Выйти",
    afterSignOut: "После выхода уроки останутся и на этом телефоне.",
    saving: "Сохраняю…",
    saved: "Прогресс сохранён в аккаунте.",
    saveError: "Сейчас не получилось сохранить. На телефоне всё на месте, попробую ещё раз чуть позже.",
    errors: {
      exists: "С этой почтой уже есть аккаунт. Нажми «Войти».",
      wrong: "Неверная почта или пароль.",
      short: "Пароль слишком короткий. Нужно не меньше 8 символов.",
      badEmail: "Проверь адрес почты.",
      noAccount: "Аккаунта с такой почтой нет.",
      closed: "Сейчас нельзя создать новый аккаунт. Попробуй позже.",
      offline: "Нет связи. Проверь интернет и попробуй ещё раз.",
      other: "Не получилось. Попробуй ещё раз.",
    },
  },
  fr: {
    image,
    a11y: "Murzik est assis sur une chaise devant un petit bureau en bois et tape sur un petit ordinateur portable avec ses deux pattes, le bout de la langue sorti tant il se concentre. Sa queue est enroulée autour du pied de la chaise.",
    hello: "Je vais t’aider à apprendre des langues !",
    title: "Connecte-toi pour sauvegarder ta progression.",
    google: "Continuer avec Google",
    email: "Continuer avec un e-mail",
    later: "Pas maintenant",
    back: "Retour",
    notHere: "La connexion fonctionne sur le site talkykitty.com. Ici, tu peux continuer sans elle.",
    linkFailed: "La connexion n’a pas abouti. Réessaie.",
    signInEmail: "Connexion par e-mail",
    createAccount: "Créer un compte",
    emailLabel: "E-mail",
    passwordLabel: "Mot de passe",
    passwordHint: "Au moins 8 caractères",
    wait: "Un instant…",
    signIn: "Se connecter",
    create: "Créer le compte",
    toSignUp: "Nouveau ici ? Créer un compte",
    toSignIn: "Déjà un compte ? Se connecter",
    forgot: "Mot de passe oublié ?",
    checkEmail: "Regarde tes e-mails",
    linkSent: "Nous t’avons envoyé un lien. Ouvre-le sur ce téléphone pour choisir un nouveau mot de passe.",
    forgotText: "Saisis ton e-mail et nous t’enverrons un lien pour choisir un nouveau mot de passe.",
    sendLink: "Envoyer le lien",
    newPasswordTitle: "Choisis un nouveau mot de passe",
    newPasswordSaved: "Ton nouveau mot de passe est enregistré",
    newPasswordLabel: "Nouveau mot de passe",
    savePassword: "Enregistrer le mot de passe",
    continue: "Continuer",
    yourAccount: "Ton compte",
    done: "Terminé",
    signOut: "Se déconnecter",
    afterSignOut: "Après la déconnexion, tes leçons restent aussi sur ce téléphone.",
    saving: "Sauvegarde…",
    saved: "Ta progression est sauvegardée dans ton compte.",
    saveError: "Impossible de sauvegarder pour l’instant. Ta progression est en sécurité sur ce téléphone, je réessaierai bientôt.",
    errors: {
      exists: "Cet e-mail a déjà un compte. Choisis plutôt « Se connecter ».",
      wrong: "E-mail ou mot de passe incorrect.",
      short: "Ce mot de passe est trop court. Il faut au moins 8 caractères.",
      badEmail: "Vérifie l’adresse e-mail.",
      noAccount: "Aucun compte avec cet e-mail.",
      closed: "Impossible de créer un compte pour le moment. Réessaie plus tard.",
      offline: "Pas de connexion. Vérifie ton internet et réessaie.",
      other: "Ça n’a pas marché. Réessaie.",
    },
  },
};
