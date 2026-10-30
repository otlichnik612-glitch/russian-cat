import { useEffect, useRef, useState } from "react";
import { readyCities } from "@/lib/course/active";
import { useProgress } from "@/lib/course/progress";
import { useDeveloper } from "@/lib/identity/developer";
import { Button } from "./ui";

/**
 * Developer panel for testing the course. Learners never see it: only a developer account
 * (its email in the Netlify variable DEVELOPER_EMAILS) or a device opened once with ?dev=1.
 * Built for VoiceOver: one heading per city, plain buttons, and every action is announced.
 */

/**
 * Test access (beta): every lesson of every course is open to everyone, the home screen has
 * "Previous lesson" / "Next lesson" and a "Beta" label. Progress is saved as usual.
 * Before launch, set TEST_ACCESS to false: lessons open in order again and the label goes away.
 */
export const TEST_ACCESS = true;

/** A developer: a developer account is signed in, or this device was opened once with ?dev=1. */
export function developerMode(): boolean {
  if (useDeveloper.getState().developer) return true;
  try {
    if (new URLSearchParams(window.location.search).get("dev") === "1") {
      window.localStorage.setItem("russian-cat-dev", "1");
      return true;
    }
    return window.localStorage.getItem("russian-cat-dev") === "1";
  } catch {
    return false;
  }
}

/** Re-renders when the developer check comes back from the server. */
export function useDeveloperMode(): boolean {
  useDeveloper((state) => state.developer);
  return developerMode();
}

/** The developer panel button: developers only. */
export function devToolsEnabled(): boolean {
  return developerMode();
}

/** Every lesson and every course with lessons is open: test access, or a developer. */
export function useAllOpen(): boolean {
  return useDeveloperMode() || TEST_ACCESS;
}

/** Mark every city before `cityIndex` as finished (lessons and farewell), plus the first `lessonsDone` lessons of that city. */
function progressUpTo(cityIndex: number, lessonsDone: number) {
  const before = readyCities.slice(0, cityIndex);
  const city = readyCities[cityIndex];
  const completed = [
    ...before.flatMap((c) => c.lessons.map((lesson) => lesson.id)),
    ...(city ? city.lessons.slice(0, lessonsDone).map((lesson) => lesson.id) : []),
  ];
  useProgress.setState({
    seenIntro: true,
    completedLessonIds: completed,
    ceremonySeen: false,
    finalesSeen: before.map((c) => c.id),
    draft: null,
    resetAt: Date.now(),
  });
}

export function DevPanel({
  onBack,
  onLesson,
  onFinale,
  onWelcome,
}: {
  onBack: () => void;
  onLesson: (lessonId: string) => void;
  onFinale: (cityId: string) => void;
  /** Shows the hello and sign-in screens again (progress is not changed). */
  onWelcome: () => void;
}) {
  const [status, setStatus] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const reset = useProgress((state) => state.reset);

  useEffect(() => {
    heading.current?.focus();
  }, []);

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-5 px-5 py-6">
      <Button variant="ghost" onClick={onBack}>
        Back to the home screen
      </Button>
      <h1 ref={heading} tabIndex={-1} className="font-display text-4xl">
        Developer panel
      </h1>
      <p>For testing only. Each city has its own heading. “Start” buttons change your progress; “Open lesson” buttons do not.</p>
      <p role="status" aria-live="polite" className="font-bold text-garden">
        {status}
      </p>
      <Button variant="ghost" onClick={onWelcome}>
        Show the welcome and sign-in screens
      </Button>
      {readyCities.map((city, cityIndex) => (
        <section key={city.id} className="flex flex-col gap-3 rounded-3xl border border-line bg-card p-4">
          <h2 className="font-display text-2xl">
            {cityIndex + 1}. {city.name}
          </h2>
          <Button
            onClick={() => {
              progressUpTo(cityIndex, 0);
              setStatus(`Done. You are now at the start of ${city.name}. All earlier cities are finished.`);
            }}
          >
            Start {city.name} from lesson 1
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              progressUpTo(cityIndex, 6);
              setStatus(`Done. ${city.name} lessons 1 to 6 are finished. Lesson 7 is next.`);
            }}
          >
            Start {city.name} from lesson 7
          </Button>
          <Button variant="ghost" onClick={() => onFinale(city.id)}>
            Show the {city.name} farewell
          </Button>
          {city.lessons.map((lesson) => (
            <Button key={lesson.id} variant="quiet" className="w-full justify-start text-left" onClick={() => onLesson(lesson.id)}>
              Open {city.name} lesson {lesson.number}: {lesson.title}
            </Button>
          ))}
        </section>
      ))}
      <Button
        variant="ghost"
        onClick={() => {
          if (window.confirm("Reset all progress on this device?")) {
            reset();
            setStatus("Done. All progress is reset.");
          }
        }}
      >
        Reset all progress
      </Button>
      <Button variant="ghost" onClick={onBack}>
        Back to the home screen
      </Button>
    </main>
  );
}
