-- Talky Kitty: what each learner chose and how far they got.
-- user_id is the Netlify Identity user id (text). Accounts themselves live in Netlify Identity, not here.
--
-- user_settings      one row per learner: their own language and the language they learn.
-- user_progress      one row per finished lesson (per learner and course language).
-- user_course_state  one row per learner and course: the rest of the story state
--                    (opening seen, city farewells seen, the unfinished lesson, last reset).

create table if not exists user_settings (
  user_id text primary key,
  native_language text,
  target_language text,
  updated_at timestamptz not null default now()
);

create table if not exists user_progress (
  user_id text not null,
  language text not null,
  lesson_id text not null,
  completed boolean not null default true,
  score integer,
  last_accessed timestamptz not null default now(),
  primary key (user_id, language, lesson_id)
);

create table if not exists user_course_state (
  user_id text not null,
  language text not null,
  seen_intro boolean not null default false,
  ceremony_seen boolean not null default false,
  finales_seen jsonb not null default '[]'::jsonb,
  draft jsonb,
  reset_at bigint not null default 0,
  updated_at timestamptz not null default now(),
  primary key (user_id, language)
);
