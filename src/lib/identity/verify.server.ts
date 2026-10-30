import { getRequest } from "@tanstack/react-start/server";

/**
 * Server-only: find out who is calling, from their Netlify Identity access token.
 * The token is checked by Netlify Identity itself (GET /.netlify/identity/user on this site),
 * so a made-up or expired token never reaches the database. Never trust a user id sent by the browser.
 */

export class UnauthorizedError extends Error {
  readonly status = 401;
  constructor() {
    super("Unauthorized");
    this.name = "UnauthorizedError";
  }
}

type CheckedUser = { id: string; email: string | null; confirmed: boolean };
const cache = new Map<string, CheckedUser & { until: number }>();
const CACHE_MS = 5 * 60_000;

/** This site's own address: Netlify provides it as URL; otherwise the address of the request. */
function siteOrigin(): string {
  const fromEnv = process.env.URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/+$/, "");
  const request = getRequest();
  return new URL(request?.url ?? "http://localhost").origin;
}

/** The caller's Netlify Identity user (id, email, whether the email is confirmed), checked by Netlify. */
export async function requireIdentityUser(token: string | undefined): Promise<CheckedUser> {
  if (!token || token.length > 4096) throw new UnauthorizedError();
  const hit = cache.get(token);
  if (hit && hit.until > Date.now()) return { id: hit.id, email: hit.email, confirmed: hit.confirmed };

  const response = await fetch(`${siteOrigin()}/.netlify/identity/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) throw new UnauthorizedError();
  const user = (await response.json()) as { id?: unknown; email?: unknown; confirmed_at?: unknown };
  if (typeof user.id !== "string" || !user.id) throw new UnauthorizedError();
  const checked: CheckedUser = {
    id: user.id,
    email: typeof user.email === "string" ? user.email : null,
    confirmed: typeof user.confirmed_at === "string" && user.confirmed_at.length > 0,
  };

  if (cache.size > 500) cache.clear();
  cache.set(token, { ...checked, until: Date.now() + CACHE_MS });
  return checked;
}

export async function requireIdentityUserId(token: string | undefined): Promise<string> {
  return (await requireIdentityUser(token)).id;
}
