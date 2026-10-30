import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Is the signed-in user a developer? Developers' emails are listed in the Netlify environment variable
 * DEVELOPER_EMAILS (comma-separated), never in the code. The email comes from Netlify Identity itself
 * (checked token, confirmed email), so a learner cannot claim it.
 * A developer sees the developer panel, every lesson open and every course that already has lessons.
 */
export const amIDeveloper = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => z.object({ token: z.string().min(1).max(4096) }).parse(data))
  .handler(async ({ data }): Promise<{ developer: boolean }> => {
    const { requireIdentityUser } = await import("./verify.server");
    const user = await requireIdentityUser(data.token);
    const list = (process.env.DEVELOPER_EMAILS ?? "")
      .split(/[\s,;]+/)
      .map((email) => email.trim().toLowerCase())
      .filter(Boolean);
    const email = user.email?.trim().toLowerCase();
    return { developer: Boolean(email && user.confirmed && list.includes(email)) };
  });
