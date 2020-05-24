BEGIN;

TRUNCATE
  users,
  log_entries,
  exercises;

INSERT INTO users (name, user_name, password)
VALUES
  ('Joe','fit.joe', '$2a$12$PIq45ASIUSfSgasvBI2mfewJw8.GB8je6rbBfO02hWAhFwFPO2QiW'),
  ('Jane','fit.jane', '$2a$12$PIq45ASIUSfSgasvBI2mfewJw8.GB8je6rbBfO02hWAhFwFPO2QiW'),
  ('Chris','fit.chris', '$2a$12$PIq45ASIUSfSgasvBI2mfewJw8.GB8je6rbBfO02hWAhFwFPO2QiW');

INSERT INTO log_entries (user_id, log_type, exercise_type, quanity, unit_of_measurement, start_time, end_time, calories)
VALUES
  (1, 'water', NULL, 5, 'ml', '2020-02-10T09:30:54Z', NULL, NULL),
  (1, 'weight', NULL, 150, 'lbs', '2020-02-10T09:30:54Z', NULL, NULL),
  (1, 'exercise', 'run', 5, 'miles', '2020-02-10T09:30:54Z', '2020-02-10T10:30:00Z', -5),
  (2, 'water', NULL, 5, 'ml', '2020-02-10T09:30:54Z', NULL, NULL),
  (2, 'weight', NULL, 150, 'lbs', '2020-02-10T09:30:54Z', NULL, NULL),
  (2, 'exercise', 'run', 5, 'miles', '2020-02-10T09:30:54Z', '2020-02-10T10:30:00Z', -5);

INSERT INTO exercises (user_id, exercise_name)
VALUES
  (1, 'Jumping Jacks'),
  (1, 'Yoga'),
  (2, 'Basketball'),
  (2, 'Soccer');

COMMIT;