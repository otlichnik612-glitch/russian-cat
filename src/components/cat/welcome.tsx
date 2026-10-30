import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  IdentityError,
  identityAvailable,
  sendPasswordReset,
  setNewPassword,
  signInWithEmail,
  signInWithGoogle,
  signOut,
  signUpWithEmail,
  useIdentity,
} from "@/lib/identity/client";
import { ui } from "@/lib/course/active";
import { useProgress } from "@/lib/course/progress";
import { accountText, type AccountText } from "@/lib/course/welcome";
import { useSyncStatus, type SyncStatus } from "@/lib/sync/use-progress-sync";
import { Button, Card, Illustration } from "./ui";

/**
 * The sign-in screen (after the learner picked their own language), the email sign-in, "forgot password",
 * the new-password screen from a reset link, and the account screen opened from home.
 * All in the learner's own language (English until it is chosen).
 * Built for VoiceOver: focus moves to each heading, every field has a visible label, errors are announced.
 */

/** Texts in the learner's own language. */
function useText(): AccountText {
  const native = useProgress((state) => state.nativeLang);
  return accountText[native ?? "en"];
}

function useHeadingFocus(key: unknown) {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    heading.current?.focus();
  }, [key]);
  return heading;
}

function Page({ children }: { children: ReactNode }) {
  // `lang` lets VoiceOver read the texts with the voice of the learner's language.
  const native = useProgress((state) => state.nativeLang);
  return (
    <main lang={native ?? "en"} className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-6 bg-paper px-5 py-6">
      {children}
    </main>
  );
}

const inputClass = "min-h-14 rounded-2xl border border-line bg-card px-4 text-lg";

/** Explain an Identity error in a short sentence. */
function explain(error: unknown, mode: "signin" | "signup" | "reset" | "password", t: AccountText): string {
  const message = error instanceof Error ? error.message.toLowerCase() : "";
  const status = error instanceof IdentityError ? error.status : 0;
  if (message.includes("already been registered") || message.includes("already registered")) return t.errors.exists;
  if (mode === "signin" && (message.includes("invalid") || status === 400 || status === 401)) return t.errors.wrong;
  if (message.includes("password") && (message.includes("short") || message.includes("least"))) return t.errors.short;
  if (message.includes("email") && message.includes("invalid")) return t.errors.badEmail;
  if (mode === "reset" && status === 404) return t.errors.noAccount;
  if (message.includes("signups not allowed") || message.includes("signup")) return t.errors.closed;
  if (status === 0 || status >= 500) return t.errors.offline;
  return t.errors.other;
}

/**
 * The sign-in screen (also "Save progress" from home): Murzik at his laptop says he'll help, then asks to sign in.
 * Google, email, or "Not now" / "Back". `onDone` runs once the learner is signed in or skips.
 */
export function SignInScreen({
  onDone,
  laterLabel,
}: {
  onDone: () => void;
  laterLabel?: string;
}) {
  const t = useText();
  const [step, setStep] = useState<"choose" | "email" | "forgot">("choose");
  const [notHere, setNotHere] = useState(false);
  const status = useIdentity((state) => state.status);
  const linkError = useIdentity((state) => state.linkError);
  const heading = useHeadingFocus(step);
  const setWelcomeDone = useProgress((state) => state.setWelcomeDone);

  // Signed in (email form, or back from Google): carry on.
  const wasSignedIn = useRef(status === "signed-in");
  useEffect(() => {
    if (status === "signed-in" && !wasSignedIn.current) {
      setWelcomeDone();
      onDone();
    }
    wasSignedIn.current = status === "signed-in";
  }, [status, onDone, setWelcomeDone]);

  if (step === "email") return <EmailSignIn onBack={() => setStep("choose")} onForgot={() => setStep("forgot")} />;
  if (step === "forgot") return <ForgotPassword onBack={() => setStep("email")} />;

  const available = identityAvailable();
  return (
    <Page>
      <Illustration src={t.image} a11y={t.a11y} />
      <h1 ref={heading} tabIndex={-1} className="flex flex-col gap-2">
        <span className="font-display text-4xl">{t.hello}</span>
        <span className="text-2xl font-bold">{t.title}</span>
      </h1>
      <p role="alert" className="font-bold text-terra">
        {linkError ? t.linkFailed : notHere ? t.notHere : ""}
      </p>
      <div className="grid gap-3">
        <Button
          onClick={() => {
            useIdentity.setState({ linkError: null });
            if (!available) return setNotHere(true);
            setWelcomeDone();
            signInWithGoogle();
          }}
        >
          {t.google}
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            useIdentity.setState({ linkError: null });
            if (!available) return setNotHere(true);
            setStep("email");
          }}
        >
          {t.email}
        </Button>
        <Button
          variant="quiet"
          className="self-center"
          onClick={() => {
            setWelcomeDone();
            onDone();
          }}
        >
          {laterLabel ?? t.later}
        </Button>
      </div>
    </Page>
  );
}

function EmailSignIn({ onBack, onForgot }: { onBack: () => void; onForgot: () => void }) {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const heading = useHeadingFocus(mode);
  const t = useText();

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (mode === "signup" && password.length < 8) {
      setError(t.errors.short);
      return;
    }
    setError("");
    setBusy(true);
    try {
      const address = email.trim();
      if (mode === "signup") await signUpWithEmail(address, password);
      else await signInWithEmail(address, password);
    } catch (failure) {
      setError(explain(failure, mode, t));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Page>
      <button type="button" className="min-h-12 self-start font-bold text-garden" onClick={onBack}>
        {t.back}
      </button>
      <h1 ref={heading} tabIndex={-1} className="font-display text-4xl">
        {mode === "signin" ? t.signInEmail : t.createAccount}
      </h1>
      <form className="flex flex-col gap-4" onSubmit={(event) => void submit(event)} noValidate>
        <label className="flex flex-col gap-2">
          <span className="font-bold">{t.emailLabel}</span>
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            spellCheck={false}
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-bold">{t.passwordLabel}</span>
          <input
            type="password"
            autoComplete={mode === "signin" ? "current-password" : "new-password"}
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={inputClass}
          />
          {mode === "signup" ? <span className="text-muted">{t.passwordHint}</span> : null}
        </label>
        <p role="alert" className="font-bold text-terra">
          {error}
        </p>
        <Button type="submit" disabled={busy || !email.trim() || !password}>
          {busy ? t.wait : mode === "signin" ? t.signIn : t.create}
        </Button>
      </form>
      <div className="flex flex-col items-center gap-1">
        <Button
          variant="quiet"
          onClick={() => {
            setError("");
            setMode(mode === "signin" ? "signup" : "signin");
          }}
        >
          {mode === "signin" ? t.toSignUp : t.toSignIn}
        </Button>
        {mode === "signin" ? (
          <Button variant="quiet" onClick={onForgot}>
            {t.forgot}
          </Button>
        ) : null}
      </div>
    </Page>
  );
}

function ForgotPassword({ onBack }: { onBack: () => void }) {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const heading = useHeadingFocus(sent);
  const t = useText();

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    setBusy(true);
    try {
      await sendPasswordReset(email.trim());
      setSent(true);
    } catch (failure) {
      setError(explain(failure, "reset", t));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Page>
      <button type="button" className="min-h-12 self-start font-bold text-garden" onClick={onBack}>
        {t.back}
      </button>
      <h1 ref={heading} tabIndex={-1} className="font-display text-4xl">
        {sent ? t.checkEmail : t.forgot}
      </h1>
      {sent ? (
        <p className="text-xl">{t.linkSent}</p>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={(event) => void submit(event)} noValidate>
          <p>{t.forgotText}</p>
          <label className="flex flex-col gap-2">
            <span className="font-bold">{t.emailLabel}</span>
            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              autoCapitalize="none"
              spellCheck={false}
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={inputClass}
            />
          </label>
          <p role="alert" className="font-bold text-terra">
            {error}
          </p>
          <Button type="submit" disabled={busy || !email.trim()}>
            {busy ? t.wait : t.sendLink}
          </Button>
        </form>
      )}
    </Page>
  );
}

/** Opened from the password-reset email: choose a new password. */
export function NewPassword({ onDone }: { onDone: () => void }) {
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const heading = useHeadingFocus(done);
  const t = useText();

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (password.length < 8) {
      setError(t.errors.short);
      return;
    }
    setError("");
    setBusy(true);
    try {
      await setNewPassword(password);
      setDone(true);
    } catch (failure) {
      setError(explain(failure, "password", t));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Page>
      <h1 ref={heading} tabIndex={-1} className="font-display text-4xl">
        {done ? t.newPasswordSaved : t.newPasswordTitle}
      </h1>
      {done ? (
        <Button onClick={onDone}>{t.continue}</Button>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={(event) => void submit(event)} noValidate>
          <label className="flex flex-col gap-2">
            <span className="font-bold">{t.newPasswordLabel}</span>
            <input
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className={inputClass}
            />
            <span className="text-muted">{t.passwordHint}</span>
          </label>
          <p role="alert" className="font-bold text-terra">
            {error}
          </p>
          <Button type="submit" disabled={busy || !password}>
            {busy ? t.wait : t.savePassword}
          </Button>
        </form>
      )}
    </Page>
  );
}

function statusText(status: SyncStatus, t: AccountText): string {
  if (status === "saving") return t.saving;
  if (status === "saved") return t.saved;
  if (status === "error") return t.saveError;
  return "";
}

/** From the home screen: the account when signed in, otherwise the sign-in screen. */
export function AccountScreen({ onBack }: { onBack: () => void }) {
  const identity = useIdentity();
  const status = useSyncStatus((state) => state.status);
  const heading = useHeadingFocus(identity.status);
  const t = useText();

  if (identity.status !== "signed-in")
    return (
      <>
        <SignInScreen onDone={onBack} laterLabel={t.back} />
        <div className="mx-auto w-full max-w-lg px-5 pb-8">
          <ResetButton onDone={onBack} />
        </div>
      </>
    );

  return (
    <Page>
      <button type="button" className="min-h-12 self-start font-bold text-garden" onClick={onBack}>
        {t.back}
      </button>
      <h1 ref={heading} tabIndex={-1} className="font-display text-4xl">
        {t.yourAccount}
      </h1>
      <Card className="flex flex-col gap-2">
        {identity.email ? <p className="break-all text-xl font-bold">{identity.email}</p> : null}
        <p role="status" aria-live="polite">
          {statusText(status as SyncStatus, t)}
        </p>
      </Card>
      <Button onClick={onBack}>{t.done}</Button>
      <Button variant="ghost" onClick={() => void signOut()}>
        {t.signOut}
      </Button>
      <p className="text-muted">{t.afterSignOut}</p>
      <ResetButton onDone={onBack} />
    </Page>
  );
}

/** Start the active course again. Kept at the bottom of the account screen so it is not pressed by chance. */
function ResetButton({ onDone }: { onDone: () => void }) {
  const reset = useProgress((state) => state.reset);
  return (
    <Button
      variant="quiet"
      className="mt-6 self-center"
      onClick={() => {
        if (window.confirm(ui.resetConfirm)) {
          reset();
          onDone();
        }
      }}
    >
      {ui.resetProgress}
    </Button>
  );
}
