CREATE TABLE activity_entries (
  id SERIAL PRIMARY KEY,
  activity_name TEXT NOT NULL,
  start_log_time TIMESTAMPTZ DEFAULT now() NOT NULL,
  end_log_time TIMESTAMPTZ DEFAULT now() NOT NULL,
  calories_burned DECIMAL,
  user_id INTEGER
    REFERENCES users(id) ON DELETE CASCADE NOT NULL
);