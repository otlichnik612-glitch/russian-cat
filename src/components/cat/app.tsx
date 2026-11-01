import { useEffect, useRef, useState, type ReactNode } from "react";
import { course, getCity, getLesson, setActiveCourse } from "@/lib/course/active";
import { seenFinales, useProgress } from "@/lib/course/progress";
import { SpeechProvider } from "@/lib/course/speech";
import { startIdentity, useIdentity } from "@/lib/identity/client";
import { useProgressSync } from "@/lib/sync/use-progress-sync";
import { useDeveloperCheck } from "@/lib/identity/developer";
import { loadClips } from "@/lib/voice/clips";
import { DevPanel } from "./dev";
import { CoursePicker, MyCourses, NativePicker } from "./languages";
import { VoicePage } from "./voice-page";
import { LessonPlayer } from "./player";
import { Apartment, CityWelcome, Finale, GenderScreen, Home, Intro, Journey, Opening, Phrases, RewardScreen, Splash } from "./screens";
import { AccountScreen, NewPassword, SignInScreen } from "./welcome";

type Screen =
  | { name: "loading" }
  | { name: "native" }
  | { name: "signin" }
  | { name: "account" }
  | { name: "languages"; back?: "courses" }
  | { name: "courses" }
  | { name: "opening" }
  | { name: "intro" }
  | { name: "gender" }
  | { name: "home" }
  | { name: "journey" }
  | { name: "phrases" }
  | { name: "apartment" }
  | { name: "lesson"; lessonId: string }
  | { name: "city-welcome"; lessonId: string }
  | { name: "reward"; lessonId: string }
  | { name: "finale"; cityId: string }
  | { name: "dev" }
  | { name: "voice" };

export function RussianCatApp() {
  const [screen, setScreen] = useState<Screen>({ name: "loading" });
  const setSeenIntro = useProgress((state) => state.setSeenIntro);
  const setLanguages = useProgress((state) => state.setLanguages);
  const setNativeLang = useProgress((state) => state.setNativeLang);
  const nativeLang = useProgress((state) => state.nativeLang);
  const targetLang = useProgress((state) => state.targetLang);
  const learnerGender = useProgress((state) => state.learnerGender);
  // The chosen course decides the lessons and the interface language. Set before children render.
  setActiveCourse(targetLang, nativeLang, learnerGender);
  // Recordings of the course's phrases (voice page); without them the phone's voice reads.
  useEffect(() => loadClips(course.speechLang), [targetLang, nativeLang]);
  const recovering = useIdentity((state) => state.recovering);
  const screenName = useRef(screen.name);
  screenName.current = screen.name;

  // First run: hello + own language → course → sign in (or "Not now"), in that language → opening → first city.
  // Later runs go straight home. Signed in (or back from Google) skips the sign-in screen.
  const afterCourse = () => {
    const state = useProgress.getState();
    const signedIn = useIdentity.getState().status === "signed-in";
    if (!state.welcomeDone && !signedIn) setScreen({ name: "signin" });
    else setScreen(state.seenIntro ? { name: "home" } : { name: "opening" });
  };
  useEffect(() => {
    void Promise.all([Promise.resolve(useProgress.persist.rehydrate()), startIdentity()]).then(() => {
      const state = useProgress.getState();
      // The voice page (recording phrases with Grok): https://…/?voice=1 (any value works), password-protected.
      let voice = false;
      try {
        voice = Boolean(new URLSearchParams(window.location.search).get("voice")?.trim());
      } catch {
        voice = false;
      }
      if (voice) setScreen({ name: "voice" });
      else if (state.seenIntro) setScreen({ name: "home" });
      else if (!state.nativeLang) setScreen({ name: "native" });
      else if (!state.targetLang) setScreen({ name: "languages" });
      else afterCourse();
    });
  }, []);

  // While signed in, progress and the language choice are saved to the account.
  // On a new phone, once the saved progress arrives, skip the early screens and go home.
  useProgressSync(() => {
    const state = useProgress.getState();
    const early = ["loading", "native", "signin", "languages", "opening", "intro"].includes(screenName.current);
    if (early && state.seenIntro && state.nativeLang && state.targetLang) setScreen({ name: "home" });
  });

  // A developer account (Netlify variable DEVELOPER_EMAILS) sees every lesson and the developer panel.
  useDeveloperCheck();

  // Starting the first lesson of a city (in any order): the city's welcome page comes first.
  const openLesson = (lessonId: string) => {
    const lesson = getLesson(lessonId);
    const state = useProgress.getState();
    const starting = lesson?.number === 1 && !state.completedLessonIds.includes(lessonId) && state.draft?.lessonId !== lessonId;
    setScreen(starting && getCity(lesson.cityId)?.story ? { name: "city-welcome", lessonId } : { name: "lesson", lessonId });
  };

  let body: ReactNode = null;
  if (screen?.name === "loading") body = <Splash />;
  if (screen?.name === "native") {
    body = (
      <NativePicker
        onChosen={(native) => {
          setNativeLang(native);
          setScreen({ name: "languages" });
        }}
      />
    );
  }
  if (screen?.name === "signin") body = <SignInScreen onDone={() => setScreen(useProgress.getState().seenIntro ? { name: "home" } : { name: "opening" })} />;
  if (screen?.name === "account") body = <AccountScreen onBack={() => setScreen({ name: "home" })} />;
  if (screen?.name === "languages") {
    body = (
      <CoursePicker
        native={nativeLang ?? "en"}
        onChosen={(target) => {
          setLanguages(nativeLang ?? "en", target);
          afterCourse();
        }}
        onBack={() => setScreen(screen.back === "courses" ? { name: "courses" } : { name: "native" })}
      />
    );
  }
  if (screen?.name === "opening") body = <Opening onContinue={() => setScreen({ name: "intro" })} />;
  if (screen?.name === "intro") {
    body = (
      <Intro
        onContinue={() => {
          setSeenIntro();
          setScreen(course.gender && !useProgress.getState().learnerGender ? { name: "gender" } : { name: "home" });
        }}
      />
    );
  }
  if (screen?.name === "home") {
    body = (
      <Home
        onLesson={openLesson}
        onJourney={() => setScreen({ name: "journey" })}
        onPhrases={() => setScreen({ name: "phrases" })}
        onApartment={() => setScreen({ name: "apartment" })}
        onFinale={(cityId) => setScreen({ name: "finale", cityId })}
        onOpening={() => setScreen({ name: "opening" })}
        onDev={() => setScreen({ name: "dev" })}
        onLanguages={() => setScreen({ name: "languages" })}
        onAccount={() => setScreen({ name: "account" })}
        onGender={() => setScreen({ name: "gender" })}
        onCourses={() => setScreen({ name: "courses" })}
      />
    );
  }
  if (screen?.name === "courses") {
    body = (
      <MyCourses
        native={nativeLang ?? "en"}
        onChosen={(target) => {
          setLanguages(nativeLang ?? "en", target);
          afterCourse();
        }}
        onAdd={() => setScreen({ name: "languages", back: "courses" })}
        onBack={() => setScreen({ name: "home" })}
      />
    );
  }
  if (screen?.name === "gender") body = <GenderScreen onDone={() => setScreen({ name: "home" })} />;
  if (screen?.name === "journey") body = <Journey onBack={() => setScreen({ name: "home" })} />;
  if (screen?.name === "phrases") body = <Phrases onBack={() => setScreen({ name: "home" })} />;
  if (screen?.name === "apartment") body = <Apartment onBack={() => setScreen({ name: "home" })} />;
  if (screen?.name === "city-welcome") {
    body = (
      <CityWelcome
        lessonId={screen.lessonId}
        onStart={() => setScreen({ name: "lesson", lessonId: screen.lessonId })}
        onBack={() => setScreen({ name: "home" })}
      />
    );
  }
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
        onContinue={() => {
          // The city's farewell comes once all 7 of its lessons are done (in any order) and it was not seen yet.
          const state = useProgress.getState();
          const city = getCity(lesson.cityId);
          const complete = city ? city.lessons.every((l) => state.completedLessonIds.includes(l.id)) : false;
          const seen = seenFinales(state).includes(lesson.cityId);
          setScreen(complete && !seen ? { name: "finale", cityId: lesson.cityId } : { name: "home" });
        }}
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
        onWelcome={() => setScreen({ name: "native" })}
        onVoice={() => setScreen({ name: "voice" })}
      />
    );
  }
  if (screen?.name === "voice") body = <VoicePage onBack={() => setScreen(useProgress.getState().seenIntro ? { name: "home" } : { name: "native" })} />;
  if (screen?.name === "finale") body = <Finale cityId={screen.cityId} onDone={() => setScreen({ name: "home" })} />;

  // A password-reset link was opened: ask for the new password first.
  if (recovering) body = <NewPassword onDone={() => setScreen(useProgress.getState().seenIntro ? { name: "home" } : { name: "opening" })} />;

  return <SpeechProvider>{body}</SpeechProvider>;
}
