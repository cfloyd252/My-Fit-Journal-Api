BEGIN;

TRUNCATE
  users,
  water_entries,
  weight_entries,
  activity_entries;

INSERT INTO users (user_name, password)
VALUES
  ('Fit Joe', 'JoePassword1');

INSERT INTO water_entries (quanity, unitOfMeasurement, )

COMMIT;