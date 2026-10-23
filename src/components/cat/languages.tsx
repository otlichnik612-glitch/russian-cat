import { useEffect, useRef, useState } from "react";
import { courseOptions, languageScreens, nativeOptions, type NativeLang, type TargetLang } from "@/lib/course/languages";
import { Button, Illustration } from "./ui";

/**
 * The first screens of the app: the learner picks their own language, then the language to learn.
 * Only courses available for that native language are shown; courses that are not ready say “coming soon”.
 * Built for VoiceOver: focus moves to each heading, every button reads in both languages.
 */
export function LanguagePicker({
  onChosen,
  initialNative,
}: {
  onChosen: (nativeLang: NativeLang, targetLang: TargetLang) => void;
  initialNative?: NativeLang | null;
}) {
  const [native, setNative] = useState<NativeLang | null>(initialNative ?? null);
  const [soon, setSoon] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    heading.current?.focus();
    setSoon(false);
  }, [native]);

  if (!native) {
    const page = languageScreens.native;
    return (
      <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-6 bg-paper px-5 py-6">
        <p className="font-display text-xl">Polycat</p>
        <Illustration src={page.image} a11y={page.a11y} />
        <h1 ref={heading} tabIndex={-1} className="flex flex-col gap-1">
          <span lang="ru" className="font-sans text-3xl font-bold">
            {page.titleRu}
          </span>
          <span className="font-display text-3xl">{page.titleEn}</span>
        </h1>
        <div className="grid gap-3">
          {nativeOptions.map((option) => (
            <Button key={option.id} aria-label={option.a11y} onClick={() => setNative(option.id)}>
              {option.label}
            </Button>
          ))}
        </div>
      </main>
    );
  }

  const page = languageScreens.target;
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-6 bg-paper px-5 py-6">
      <Illustration src={page.image} a11y={page.a11y} />
      <h1 ref={heading} tabIndex={-1} className="flex flex-col gap-1">
        <span lang="ru" className="font-sans text-3xl font-bold">
          {page.titleRu}
        </span>
        <span className="font-display text-3xl">{page.titleEn}</span>
      </h1>
      <div className="grid gap-3">
        {courseOptions[native as NativeLang].map((option) => (
          <Button
            key={option.id}
            variant={option.ready ? "primary" : "ghost"}
            aria-label={option.a11y}
            onClick={() => (option.ready ? onChosen(native, option.id) : setSoon(true))}
          >
            {option.label}
            {option.ready ? "" : " — скоро · coming soon"}
          </Button>
        ))}
      </div>
      <p role="status" aria-live="polite" className="font-bold text-garden">
        {soon ? (
          <>
            <span lang="ru">{page.soonRu}</span> {page.soonEn}
          </>
        ) : null}
      </p>
      <Button variant="quiet" onClick={() => setNative(null)}>
        Назад · Back
      </Button>
    </main>
  );
}
