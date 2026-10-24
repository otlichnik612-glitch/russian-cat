import { createFileRoute } from "@tanstack/react-router";

/**
 * Quick check after a deploy: open https://talkykitty.com/api/health.
 * Shows whether the server runs, whether the Neon database answers and whether the Talky Kitty
 * tables exist. Never shows the connection string or any learner data.
 */
const TABLES = ["user_course_state", "user_progress", "user_settings"];

export const Route = createFileRoute("/api/health")({
  server: {
    handlers: {
      GET: async () => {
        const hasDb = Boolean(process.env.DATABASE_URL?.trim());
        const result: Record<string, unknown> = {
          server: "ok",
          database: hasDb ? "DATABASE_URL is set" : "DATABASE_URL is not set in Netlify",
        };
        if (hasDb) {
          try {
            const { getSql } = await import("@/lib/db");
            const sql = await getSql();
            const rows = await sql<{ name: string }>`
              select table_name as name from information_schema.tables
              where table_schema = 'public'
                and table_name in (select jsonb_array_elements_text(${JSON.stringify(TABLES)}::text::jsonb))`;
            const names = rows.map((r) => r.name);
            const missing = TABLES.filter((t) => !names.includes(t));
            result.connection = "ok";
            result.tables = missing.length === 0 ? "ok" : `missing: ${missing.join(", ")} (they are created during the build)`;
          } catch {
            result.connection = "failed: check the DATABASE_URL value in Netlify";
          }
        }
        return new Response(JSON.stringify(result, null, 2), {
          headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
        });
      },
    },
  },
});
