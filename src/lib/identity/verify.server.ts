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

const cache = new Map<string, { id: string; until: number }>();
const CACHE_MS = 5 * 60_000;

/** This site's own address: Netlify provides it as URL; otherwise the address of the request. */
function siteOrigin(): string {
  const fromEnv = process.env.URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/+$/, "");
  const request = getRequest();
  return new URL(request?.url ?? "http://localhost").origin;
}

export async function requireIdentityUserId(token: string | undefined): Promise<string> {
  if (!token || token.length > 4096) throw new UnauthorizedError();
  const hit = cache.get(token);
  if (hit && hit.until > Date.now()) return hit.id;

  const response = await fetch(`${siteOrigin()}/.netlify/identity/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) throw new UnauthorizedError();
  const user = (await response.json()) as { id?: unknown };
  if (typeof user.id !== "string" || !user.id) throw new UnauthorizedError();

  if (cache.size > 500) cache.clear();
  cache.set(token, { id: user.id, until: Date.now() + CACHE_MS });
  return user.id;
}
