BEGIN;

TRUNCATE
  users,
  water_entries,
  weight_entries,
  activity_entries;

INSERT INTO users (id, user_name, password)
VALUES
  (1,'Fit Joe', '$2a$12$sJ/oyX62sRf6TX8tohntjuG205/STOwpQ.xe.Zk.UOLx4imHo1ku.');

INSERT INTO water_entries (log_time, quanity, unit_of_measurement, user_id)
VALUES
  ('2020-02-15T15:45:26Z', 8.2, 'fl oz', 1),
  ('2020-02-10T09:30:54Z', 16, 'fl oz', 1);

INSERT INTO weight_entries (log_time, quanity, unit_of_measurement, user_id)
VALUES
  ('2020-02-15T15:45:26Z', 115, 'lbs', 1),
  ('2019-02-10T09:30:54Z', 220, 'lbs', 1);

INSERT INTO activity_entries (activity_name, start_log_time, end_log_time, calories_burned, user_id)
VALUES
  ('Running',  '2020-02-04T11:23:54Z',  '2020-02-04T11:54:54Z', 50.2, 1),
  ('Walk',  '2020-02-05T13:23:25Z',  '2020-02-05T13:40:25Z', null, 1);

COMMIT;