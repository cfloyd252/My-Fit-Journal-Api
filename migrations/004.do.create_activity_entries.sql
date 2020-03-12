CREATE TABLE activity_entries (
  id SERIAL PRIMARY KEY,
  activity_name TEXT NOT NULL,
  start_date_time TIMESTAMPTZ NOT NULL,
  end_date_time TIMESTAMPTZ NOT NULL,
  calories_burned DECIMAL,
  user_id INTEGER
    REFERENCES users(id) ON DELETE CASCADE NOT NULL
);