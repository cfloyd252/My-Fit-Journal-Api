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

INSERT INTO activity_entries (activity_name, start_log_time, end_log_time, calories_burned, user_id)
VALUES
  ('Running',  '2020-03-16T16:13:05.486Z',  '2020-03-16T17:13:05.486Z', 50.2, 1),
  ('Running',  '2020-03-16T10:13:05.486Z',  '2020-03-16T11:13:05.486Z', null, 1);

COMMIT;