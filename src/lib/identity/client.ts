import { create } from "zustand";

/**
 * Netlify Identity in the browser (talks straight to the site's own `/.netlify/identity` API).
 * - Email + password: sign up, sign in, "forgot password" (Netlify sends the email).
 * - Google: Netlify's own Google app ("Use Netlify's app"), so no Google keys are needed.
 * Email confirmation is off in Netlify, so a new account can sign in at once.
 * Tokens stay on this device (localStorage) and are refreshed before they expire.
 * Identity exists only on the published Netlify site, not in the Grok preview.
 */

const API = "/.netlify/identity";
const STORAGE_KEY = "talky-kitty-identity";

type Tokens = { access_token: string; refresh_token: string; expires_at: number };
type Stored = Tokens & { id: string; email: string };

export type IdentityState = {
  status: "loading" | "signed-out" | "signed-in";
  userId: string | null;
  email: string | null;
  /** A password-reset link was opened: the app should ask for a new password. */
  recovering: boolean;
  /** A problem from a Google or email link, shown on the sign-in screen. */
  linkError: string | null;
};

export const useIdentity = create<IdentityState>()(() => ({
  status: "loading",
  userId: null,
  email: null,
  recovering: false,
  linkError: null,
}));

/** False in the Grok preview and on a computer's local server: Netlify Identity is not there. */
export function identityAvailable(): boolean {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  return !(
    host.endsWith(".grok-sandbox.com") ||
    host === "localhost" ||
    host === "127.0.0.1" ||
    host === "[::1]"
  );
}

export class IdentityError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "IdentityError";
  }
}

function readStored(): Stored | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const v = JSON.parse(raw) as Partial<Stored>;
    return v.access_token && v.refresh_token && v.id && typeof v.expires_at === "number" ? (v as Stored) : null;
  } catch {
    return null;
  }
}

function writeStored(value: Stored | null) {
  try {
    if (value) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    else window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* storage blocked: the session lasts until the page closes */
  }
}

let memory: Stored | null = null;

function remember(value: Stored | null) {
  memory = value;
  writeStored(value);
  useIdentity.setState(
    value
      ? { status: "signed-in", userId: value.id, email: value.email }
      : { status: "signed-out", userId: null, email: null },
  );
}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API}${path}`, init);
  const text = await response.text();
  let body: Record<string, unknown> = {};
  try {
    body = text ? (JSON.parse(text) as Record<string, unknown>) : {};
  } catch {
    body = {};
  }
  if (!response.ok) {
    const message = String(body.error_description ?? body.msg ?? body.error ?? response.statusText ?? "Error");
    throw new IdentityError(message, response.status);
  }
  return body as T;
}

type TokenResponse = { access_token: string; refresh_token: string; expires_in: number };

function toTokens(t: TokenResponse): Tokens {
  return {
    access_token: t.access_token,
    refresh_token: t.refresh_token,
    expires_at: Date.now() + (Number(t.expires_in) || 3600) * 1000,
  };
}

async function loadUser(tokens: Tokens): Promise<Stored> {
  const user = await request<{ id: string; email: string }>("/user", {
    headers: { Authorization: `Bearer ${tokens.access_token}` },
  });
  return { ...tokens, id: user.id, email: user.email };
}

function tokenRequest(form: Record<string, string>) {
  return request<TokenResponse>("/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(form).toString(),
  });
}

export async function signInWithEmail(email: string, password: string): Promise<void> {
  const tokens = toTokens(await tokenRequest({ grant_type: "password", username: email, password }));
  remember(await loadUser(tokens));
}

export async function signUpWithEmail(email: string, password: string): Promise<void> {
  await request("/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, data: {} }),
  });
  await signInWithEmail(email, password);
}

/** Leaves the app for Google; Netlify brings the learner back with the tokens in the address. */
export function signInWithGoogle(): void {
  window.location.href = `${API}/authorize?provider=google`;
}

/** Netlify emails a link; opening it brings the learner back here to choose a new password. */
export async function sendPasswordReset(email: string): Promise<void> {
  await request("/recover", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
}

export async function setNewPassword(password: string): Promise<void> {
  const token = await getAccessToken();
  if (!token) throw new IdentityError("Not signed in", 401);
  await request("/user", {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ password }),
  });
  useIdentity.setState({ recovering: false });
}

export async function signOut(): Promise<void> {
  const token = memory?.access_token;
  remember(null);
  if (token) {
    await fetch(`${API}/logout`, { method: "POST", headers: { Authorization: `Bearer ${token}` } }).catch(
      () => undefined,
    );
  }
}

let refreshing: Promise<string | null> | null = null;

/** A valid access token for the server, refreshed when it is about to expire; null when signed out. */
export async function getAccessToken(): Promise<string | null> {
  const current = memory;
  if (!current) return null;
  if (current.expires_at - Date.now() > 60_000) return current.access_token;
  refreshing ??= tokenRequest({ grant_type: "refresh_token", refresh_token: current.refresh_token })
    .then((t) => {
      const next = { ...current, ...toTokens(t) };
      remember(next);
      return next.access_token;
    })
    .catch((error: unknown) => {
      // A rejected refresh token means the session is over; a network problem keeps it for later.
      if (error instanceof IdentityError && error.status >= 400 && error.status < 500) remember(null);
      return null;
    })
    .finally(() => {
      refreshing = null;
    });
  return refreshing;
}

/**
 * Run once when the app starts: restore the saved session, or finish a Google sign-in / password-reset
 * link that brought the learner back with tokens after the `#` in the address.
 */
export async function startIdentity(): Promise<void> {
  if (typeof window === "undefined") return;
  const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const clearHash = () =>
    window.history.replaceState(null, "", window.location.pathname + window.location.search);

  if (!identityAvailable()) {
    useIdentity.setState({ status: "signed-out" });
    return;
  }

  try {
    if (hash.get("access_token")) {
      clearHash();
      const tokens = toTokens({
        access_token: hash.get("access_token") ?? "",
        refresh_token: hash.get("refresh_token") ?? "",
        expires_in: Number(hash.get("expires_in")) || 3600,
      });
      remember(await loadUser(tokens));
      return;
    }
    if (hash.get("recovery_token")) {
      const token = hash.get("recovery_token") ?? "";
      clearHash();
      const tokens = toTokens(
        await request<TokenResponse>("/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token, type: "recovery" }),
        }),
      );
      remember(await loadUser(tokens));
      useIdentity.setState({ recovering: true });
      return;
    }
    if (hash.get("error")) {
      const message = hash.get("error_description") ?? hash.get("error") ?? "Sign-in failed";
      clearHash();
      useIdentity.setState({ linkError: message });
    }
  } catch (error) {
    useIdentity.setState({
      linkError: error instanceof Error ? error.message : "Sign-in failed",
    });
  }

  const saved = readStored();
  if (saved) {
    memory = saved;
    useIdentity.setState({ status: "signed-in", userId: saved.id, email: saved.email });
    void getAccessToken();
  } else {
    useIdentity.setState({ status: "signed-out" });
  }
}
