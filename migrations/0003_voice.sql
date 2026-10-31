-- Talky Kitty voice recordings (Grok text-to-speech, recorded once on the voice page).
--
-- voice_clip   one mp3 per phrase and character: language of the phrase, character (speaker id),
--              the hash of the exact text (same as src/lib/course/audio.ts audioKey), the Grok voice used.
-- voice_spend  characters sent to Grok per day, for the spending guard.

create table if not exists voice_clip (
  lang text not null,
  speaker text not null,
  key text not null,
  grok_voice text not null,
  text text not null,
  audio bytea not null,
  chars integer not null,
  created_at timestamptz not null default now(),
  primary key (lang, speaker, key)
);

create table if not exists voice_spend (
  day date primary key,
  chars integer not null default 0
);
