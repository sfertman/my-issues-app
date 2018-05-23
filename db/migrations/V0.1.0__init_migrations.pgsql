BEGIN;

CREATE TABLE IF NOT EXISTS public."migrations" (
  script          TEXT PRIMARY KEY
  , created_at    TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

INSERT INTO migrations (script) VALUES ('V0.1.0__init_migrations');

COMMIT;