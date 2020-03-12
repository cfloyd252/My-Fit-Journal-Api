CREATE TABLE weight_entries (
  id SERIAL PRIMARY KEY,
  quanity DECIMAL NOT NULL,
  unitOfMeasurement TEXT NOT NULL,
  date_time TIMESTAMPTZ NOT NULL,
  user_id INTEGER
    REFERENCES users(id) ON DELETE CASCADE NOT NULL
);