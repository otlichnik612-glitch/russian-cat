import { timingSafeEqual } from "node:crypto";

/**
 * Password check only. No database and no xAI call: the login button must answer immediately.
 * The expected value is the Netlify variable VOICE_ADMIN_CODE.
 */

export class VoiceError extends Error {}

export function checkVoiceCode(code: string): void {
  const received = code.trim();
  const expected = process.env.VOICE_ADMIN_CODE?.trim() ?? "";
  console.error("[voice-admin] password check", {
    received,
    expected,
    receivedLength: received.length,
    expectedLength: expected.length,
    expectedSet: expected.length > 0,
  });
  try {
    if (!expected) {
      throw new VoiceError("VOICE_ADMIN_CODE is not set in Netlify");
    }
    const a = Buffer.from(received);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) {
      console.error("[voice-admin] password mismatch", { received, expected });
      throw new VoiceError("wrong password");
    }
    console.error("[voice-admin] password accepted");
  } catch (error) {
    console.error("[voice-admin] password error", error);
    throw error;
  }
}
