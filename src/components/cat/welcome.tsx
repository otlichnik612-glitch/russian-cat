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
import { welcomeScreens } from "@/lib/course/welcome";
import { useSyncStatus, type SyncStatus } from "@/lib/sync/use-progress-sync";
import { Button, Card, Illustration } from "./ui";

/**
 * The first two screens (hello, then sign in), the email sign-in, "forgot password",
 * the new-password screen from a reset link, and the account screen opened from home.
 * All in English: the learner's own language is chosen only after this.
 * Built for VoiceOver: focus moves to each heading, every field has a visible label, errors are announced.
 */

const NOT_HERE = "Sign-in works on the published site, talkykitty.com. Here you can carry on without it.";

function useHeadingFocus(key: unknown) {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    heading.current?.focus();
  }, [key]);
  return heading;
}

function Page({ children }: { children: ReactNode }) {
  return <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-6 bg-paper px-5 py-6">{children}</main>;
}

const inputClass = "min-h-14 rounded-2xl border border-line bg-card px-4 text-lg";

/** Screen 1: Murzik says hello. */
export function WelcomeHello({ onContinue }: { onContinue: () => void }) {
  const page = welcomeScreens.hello;
  const heading = useHeadingFocus(0);
  return (
    <Page>
      <p className="font-display text-xl">Talky Kitty</p>
      <Illustration src={page.image} a11y={page.a11y} />
      <div className="flex flex-col gap-3">
        <h1 ref={heading} tabIndex={-1} className="font-display text-5xl">
          {page.title}
        </h1>
        <p className="text-xl">{page.text}</p>
      </div>
      <Button onClick={onContinue}>{page.button}</Button>
    </Page>
  );
}

/** Explain an Identity error in a short English sentence. */
function explain(error: unknown, mode: "signin" | "signup" | "reset" | "password"): string {
  const message = error instanceof Error ? error.message.toLowerCase() : "";
  const status = error instanceof IdentityError ? error.status : 0;
  if (message.includes("already been registered") || message.includes("already registered"))
    return "This email already has an account. Choose “Sign in” instead.";
  if (mode === "signin" && (message.includes("invalid") || status === 400 || status === 401))
    return "Wrong email or password.";
  if (message.includes("password") && (message.includes("short") || message.includes("least")))
    return "That password is too short. Please use at least 8 characters.";
  if (message.includes("email") && message.includes("invalid")) return "Please check the email address.";
  if (mode === "reset" && status === 404) return "No account with this email.";
  if (message.includes("signups not allowed") || message.includes("signup"))
    return "New accounts can’t be created right now. Please try again later.";
  if (status === 0 || status >= 500) return "Couldn’t connect. Check your internet and try again.";
  return "That didn’t work. Please try again.";
}

/**
 * Screen 2 (and the "Save progress" screen from home): Murzik at his laptop.
 * Google, email, or "Not now" / "Back". `onDone` runs once the learner is signed in or skips.
 */
export function SignInScreen({
  onDone,
  laterLabel = welcomeScreens.signIn.later,
}: {
  onDone: () => void;
  laterLabel?: string;
}) {
  const [step, setStep] = useState<"choose" | "email" | "forgot">("choose");
  const [notHere, setNotHere] = useState(false);
  const status = useIdentity((state) => state.status);
  const linkError = useIdentity((state) => state.linkError);
  const heading = useHeadingFocus(step);
  const setWelcomeDone = useProgress((state) => state.setWelcomeDone);
  const page = welcomeScreens.signIn;

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
      <Illustration src={page.image} a11y={page.a11y} />
      <h1 ref={heading} tabIndex={-1} className="font-display text-4xl">
        {page.title}
      </h1>
      <p role="alert" className="font-bold text-terra">
        {linkError ? "Sign-in didn’t finish. Please try again." : notHere ? NOT_HERE : ""}
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
          {page.google}
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            useIdentity.setState({ linkError: null });
            if (!available) return setNotHere(true);
            setStep("email");
          }}
        >
          {page.email}
        </Button>
        <Button
          variant="quiet"
          className="self-center"
          onClick={() => {
            setWelcomeDone();
            onDone();
          }}
        >
          {laterLabel}
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

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (mode === "signup" && password.length < 8) {
      setError("That password is too short. Please use at least 8 characters.");
      return;
    }
    setError("");
    setBusy(true);
    try {
      const address = email.trim();
      if (mode === "signup") await signUpWithEmail(address, password);
      else await signInWithEmail(address, password);
    } catch (failure) {
      setError(explain(failure, mode));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Page>
      <button type="button" className="min-h-12 self-start font-bold text-garden" onClick={onBack}>
        Back
      </button>
      <h1 ref={heading} tabIndex={-1} className="font-display text-4xl">
        {mode === "signin" ? "Sign in with email" : "Create an account"}
      </h1>
      <form className="flex flex-col gap-4" onSubmit={(event) => void submit(event)} noValidate>
        <label className="flex flex-col gap-2">
          <span className="font-bold">Email</span>
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
          <span className="font-bold">Password</span>
          <input
            type="password"
            autoComplete={mode === "signin" ? "current-password" : "new-password"}
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={inputClass}
          />
          {mode === "signup" ? <span className="text-muted">At least 8 characters</span> : null}
        </label>
        <p role="alert" className="font-bold text-terra">
          {error}
        </p>
        <Button type="submit" disabled={busy || !email.trim() || !password}>
          {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
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
          {mode === "signin" ? "New here? Create an account" : "Already have an account? Sign in"}
        </Button>
        {mode === "signin" ? (
          <Button variant="quiet" onClick={onForgot}>
            Forgot password?
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

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    setBusy(true);
    try {
      await sendPasswordReset(email.trim());
      setSent(true);
    } catch (failure) {
      setError(explain(failure, "reset"));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Page>
      <button type="button" className="min-h-12 self-start font-bold text-garden" onClick={onBack}>
        Back
      </button>
      <h1 ref={heading} tabIndex={-1} className="font-display text-4xl">
        {sent ? "Check your email" : "Forgot password?"}
      </h1>
      {sent ? (
        <p className="text-xl">We sent you a link. Open it on this phone to choose a new password.</p>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={(event) => void submit(event)} noValidate>
          <p>Enter your email and we’ll send you a link to choose a new password.</p>
          <label className="flex flex-col gap-2">
            <span className="font-bold">Email</span>
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
            {busy ? "Please wait…" : "Send the link"}
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

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (password.length < 8) {
      setError("That password is too short. Please use at least 8 characters.");
      return;
    }
    setError("");
    setBusy(true);
    try {
      await setNewPassword(password);
      setDone(true);
    } catch (failure) {
      setError(explain(failure, "password"));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Page>
      <h1 ref={heading} tabIndex={-1} className="font-display text-4xl">
        {done ? "Your new password is saved" : "Choose a new password"}
      </h1>
      {done ? (
        <Button onClick={onDone}>Continue</Button>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={(event) => void submit(event)} noValidate>
          <label className="flex flex-col gap-2">
            <span className="font-bold">New password</span>
            <input
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className={inputClass}
            />
            <span className="text-muted">At least 8 characters</span>
          </label>
          <p role="alert" className="font-bold text-terra">
            {error}
          </p>
          <Button type="submit" disabled={busy || !password}>
            {busy ? "Please wait…" : "Save the password"}
          </Button>
        </form>
      )}
    </Page>
  );
}

const statusText: Record<SyncStatus, string> = {
  off: "",
  local: "",
  saving: "Saving…",
  saved: "Your progress is saved to your account.",
  error: "Couldn’t save right now. Your progress is safe on this phone, and I’ll try again soon.",
};

/** From the home screen: the account when signed in, otherwise the sign-in screen. */
export function AccountScreen({ onBack }: { onBack: () => void }) {
  const identity = useIdentity();
  const status = useSyncStatus((state) => state.status);
  const heading = useHeadingFocus(identity.status);

  if (identity.status !== "signed-in")
    return (
      <>
        <SignInScreen onDone={onBack} laterLabel="Back" />
        <div className="mx-auto w-full max-w-lg px-5 pb-8">
          <ResetButton onDone={onBack} />
        </div>
      </>
    );

  return (
    <Page>
      <button type="button" className="min-h-12 self-start font-bold text-garden" onClick={onBack}>
        Back
      </button>
      <h1 ref={heading} tabIndex={-1} className="font-display text-4xl">
        Your account
      </h1>
      <Card className="flex flex-col gap-2">
        {identity.email ? <p className="break-all text-xl font-bold">{identity.email}</p> : null}
        <p role="status" aria-live="polite">
          {statusText[status as SyncStatus]}
        </p>
      </Card>
      <Button onClick={onBack}>Done</Button>
      <Button variant="ghost" onClick={() => void signOut()}>
        Sign out
      </Button>
      <p className="text-muted">After you sign out, your lessons stay on this phone too.</p>
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
