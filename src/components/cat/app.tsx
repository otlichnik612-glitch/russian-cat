import { useEffect, useState, type ReactNode } from "react";
import { getLesson } from "@/lib/course/curriculum";
import { useProgress } from "@/lib/course/progress";
import { SpeechProvider } from "@/lib/course/speech";
import { DevPanel } from "./dev";
import { LanguagePicker } from "./languages";
import { LessonPlayer } from "./player";
import { Apartment, Finale, Home, Intro, Journey, Opening, Phrases, RewardScreen, Splash } from "./screens";

type Screen =
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
  const [screen, setScreen] = useState<Screen>({ name: "languages" });
  const setSeenIntro = useProgress((state) => state.setSeenIntro);
  const setLanguages = useProgress((state) => state.setLanguages);
  const nativeLang = useProgress((state) => state.nativeLang);

  useEffect(() => {
    void Promise.resolve(useProgress.persist.rehydrate()).then(() => {
      if (useProgress.getState().seenIntro) setScreen({ name: "home" });
    });
  }, []);

  let body: ReactNode = null;
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
      />
    );
  }
  if (screen?.name === "finale") body = <Finale cityId={screen.cityId} onDone={() => setScreen({ name: "home" })} />;

  return <SpeechProvider>{body}</SpeechProvider>;
}
