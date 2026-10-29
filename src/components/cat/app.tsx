import { useEffect, useRef, useState, type ReactNode } from "react";
import { getLesson, setActiveCourse } from "@/lib/course/active";
import { useProgress } from "@/lib/course/progress";
import { SpeechProvider } from "@/lib/course/speech";
import { startIdentity, useIdentity } from "@/lib/identity/client";
import { useProgressSync } from "@/lib/sync/use-progress-sync";
import { DevPanel } from "./dev";
import { LanguagePicker } from "./languages";
import { LessonPlayer } from "./player";
import { Apartment, Finale, Home, Intro, Journey, Opening, Phrases, RewardScreen, Splash } from "./screens";
import { AccountScreen, NewPassword, SignInScreen, WelcomeHello } from "./welcome";

type Screen =
  | { name: "loading" }
  | { name: "welcome" }
  | { name: "signin" }
  | { name: "account" }
  | { name: "languages" }
  | { name: "opening" }
  | { name: "intro" }
  | { name: "home" }
  | { name: "journey" }
  | { name: "phrases" }
  | { name: "apartment" }
  | { name: "lesson"; lessonId: string }
  | { name: "reward"; lessonId: string }
  | { name: "finale"; cityId: string }
  | { name: "dev" };

export function RussianCatApp() {
  const [screen, setScreen] = useState<Screen>({ name: "loading" });
  const setSeenIntro = useProgress((state) => state.setSeenIntro);
  const setLanguages = useProgress((state) => state.setLanguages);
  const nativeLang = useProgress((state) => state.nativeLang);
  const targetLang = useProgress((state) => state.targetLang);
  // The chosen course decides the lessons and the interface language. Set before children render.
  setActiveCourse(targetLang, nativeLang);
  const recovering = useIdentity((state) => state.recovering);
  const screenName = useRef(screen.name);
  screenName.current = screen.name;

  // First run: hello → sign in (or "Not now") → languages → opening → Paris.
  // Later runs go straight home. Signed in (or back from Google) skips the hello and sign-in screens.
  useEffect(() => {
    void Promise.all([Promise.resolve(useProgress.persist.rehydrate()), startIdentity()]).then(() => {
      const state = useProgress.getState();
      const signedIn = useIdentity.getState().status === "signed-in";
      if (state.seenIntro) setScreen({ name: "home" });
      else if (state.welcomeDone || signedIn) setScreen({ name: "languages" });
      else setScreen({ name: "welcome" });
    });
  }, []);

  // While signed in, progress and the language choice are saved to the account.
  // On a new phone, once the saved progress arrives, skip the early screens and go home.
  useProgressSync(() => {
    const state = useProgress.getState();
    const early = ["loading", "welcome", "signin", "languages", "opening", "intro"].includes(screenName.current);
    if (early && state.seenIntro && state.nativeLang && state.targetLang) setScreen({ name: "home" });
  });

  let body: ReactNode = null;
  if (screen?.name === "loading") body = <Splash />;
  if (screen?.name === "welcome") body = <WelcomeHello onContinue={() => setScreen({ name: "signin" })} />;
  if (screen?.name === "signin") body = <SignInScreen onDone={() => setScreen({ name: "languages" })} />;
  if (screen?.name === "account") body = <AccountScreen onBack={() => setScreen({ name: "home" })} />;
  if (screen?.name === "languages") {
    body = (
      <LanguagePicker
        initialNative={useProgress.getState().seenIntro ? nativeLang : null}
        onChosen={(native, target) => {
          setLanguages(native, target);
          setScreen(useProgress.getState().seenIntro ? { name: "home" } : { name: "opening" });
        }}
      />
    );
  }
  if (screen?.name === "opening") body = <Opening onContinue={() => setScreen({ name: "intro" })} />;
  if (screen?.name === "intro") {
    body = (
      <Intro
        onContinue={() => {
          setSeenIntro();
          setScreen({ name: "home" });
        }}
      />
    );
  }
  if (screen?.name === "home") {
    body = (
      <Home
        onLesson={(lessonId) => setScreen({ name: "lesson", lessonId })}
        onJourney={() => setScreen({ name: "journey" })}
        onPhrases={() => setScreen({ name: "phrases" })}
        onApartment={() => setScreen({ name: "apartment" })}
        onFinale={(cityId) => setScreen({ name: "finale", cityId })}
        onOpening={() => setScreen({ name: "opening" })}
        onDev={() => setScreen({ name: "dev" })}
        onLanguages={() => setScreen({ name: "languages" })}
        onAccount={() => setScreen({ name: "account" })}
      />
    );
  }
  if (screen?.name === "journey") body = <Journey onBack={() => setScreen({ name: "home" })} />;
  if (screen?.name === "phrases") body = <Phrases onBack={() => setScreen({ name: "home" })} />;
  if (screen?.name === "apartment") body = <Apartment onBack={() => setScreen({ name: "home" })} />;
  if (screen?.name === "lesson") {
    const lesson = getLesson(screen.lessonId);
    body = lesson ? (
      <LessonPlayer
        lesson={lesson}
        onExit={() => setScreen({ name: "home" })}
        onFinish={() => setScreen({ name: "reward", lessonId: lesson.id })}
      />
    ) : (
      <Splash />
    );
  }
  if (screen?.name === "reward") {
    const lesson = getLesson(screen.lessonId);
    body = lesson ? (
      <RewardScreen
        lesson={lesson}
        onContinue={() => setScreen(lesson.number === 7 ? { name: "finale", cityId: lesson.cityId } : { name: "home" })}
      />
    ) : (
      <Splash />
    );
  }
  if (screen?.name === "dev") {
    body = (
      <DevPanel
        onBack={() => setScreen({ name: "home" })}
        onLesson={(lessonId) => setScreen({ name: "lesson", lessonId })}
        onFinale={(cityId) => setScreen({ name: "finale", cityId })}
        onWelcome={() => setScreen({ name: "welcome" })}
      />
    );
  }
  if (screen?.name === "finale") body = <Finale cityId={screen.cityId} onDone={() => setScreen({ name: "home" })} />;

  // A password-reset link was opened: ask for the new password first.
  if (recovering) body = <NewPassword onDone={() => setScreen(useProgress.getState().seenIntro ? { name: "home" } : { name: "languages" })} />;

  return <SpeechProvider>{body}</SpeechProvider>;
}
