import { Volume2 } from "lucide-react";
import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { hasCyrillic } from "@/lib/course/make";
import { useSpeech } from "@/lib/course/speech";

export const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" | "quiet" }
>(function Button({ variant = "primary", className, ...props }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full px-6 text-lg font-bold",
        variant === "primary" && "bg-terra text-on-terra disabled:opacity-45",
        variant === "ghost" && "border border-line bg-card text-ink",
        variant === "quiet" && "min-h-12 w-auto bg-transparent px-3 text-garden",
        className,
      )}
      {...props}
    />
  );
});

export function Ru({ children, className }: { children: string; className?: string }) {
  return (
    <span lang="ru" className={cn("font-sans font-bold", className)}>
      {children}
    </span>
  );
}

export function PlayButton({
  id,
  text,
  label,
  lang = "ru-RU",
}: {
  id: string;
  text: string;
  label: string;
  lang?: string;
}) {
  const { playing, play, stop } = useSpeech();
  const on = playing === id;
  return (
    <button
      type="button"
      className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-garden px-4 text-base font-bold text-on-garden"
      aria-label={on ? label.replace(/^Play/, "Stop") : label}
      aria-pressed={on}
      onClick={() => (on ? stop() : play(id, text, lang))}
    >
      <Volume2 aria-hidden className="size-5" />
      <span aria-hidden>{on ? "Stop" : "Play"}</span>
    </button>
  );
}

export function Illustration({
  src,
  a11y,
  className,
  ratio = "aspect-[3/4]",
}: {
  src: string;
  a11y?: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <figure className={cn("overflow-hidden rounded-3xl bg-paper-deep", className)}>
      <img src={src} alt="" className={cn("w-full object-cover", ratio)} />
      {a11y ? <figcaption className="sr-only">{a11y}</figcaption> : null}
    </figure>
  );
}

export function RussianLine({ text, id, label }: { text: string; id: string; label: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <p className="text-3xl">
        <Ru>{text}</Ru>
      </p>
      {hasCyrillic(text) ? <PlayButton id={id} text={text} label={label} /> : null}
    </div>
  );
}

export function Meter({
  label,
  value,
  max,
}: {
  label: string;
  value: number;
  max: number;
}) {
  const pct = max === 0 ? 0 : Math.round((value / max) * 100);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-3 text-base">
        <span>{label}</span>
        <span className="tabular-nums font-bold">
          {value} / {max}
        </span>
      </div>
      <div
        className="h-3 overflow-hidden rounded-full bg-paper-deep"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label={label}
      >
        <div className="h-full rounded-full bg-terra" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <section className={cn("rounded-3xl border border-line bg-card p-5", className)}>{children}</section>;
}
