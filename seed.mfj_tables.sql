BEGIN;

TRUNCATE
  users,
  water_entries,
  weight_entries,
  activity_entries;

INSERT INTO users (id, user_name, password)
VALUES
  (1,'Fit Joe', 'JoePassword1');

INSERT INTO water_entries (quanity, unitOfMeasurement, user_id)
VALUES
  (8.2, 'fl oz', 1),
  (16, 'fl oz', 1);

INSERT INTO weight_entries (quanity, unitOfMeasurement, user_id)
VALUES
  (115, 'lbs', 1),
  (220, 'lbs', 1);

COMMIT;