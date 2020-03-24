CREATE TABLE weight_entries (
  id SERIAL PRIMARY KEY,
  quanity DECIMAL NOT NULL,
  unit_of_measurement TEXT NOT NULL,
  log_time TIMESTAMPTZ DEFAULT now() NOT NULL,
  user_id INTEGER
    REFERENCES users(id) ON DELETE CASCADE NOT NULL
);