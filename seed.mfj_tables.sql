BEGIN;

TRUNCATE
  users,
  log_entries;

INSERT INTO users (user_id, user_name, password)
VALUES
  (1,'fit.joe', '$2a$12$sJ/oyX62sRf6TX8tohntjuG205/STOwpQ.xe.Zk.UOLx4imHo1ku.');

-- INSERT INTO water_entries (log_time, quanity, unit_of_measurement, user_id)
-- VALUES
--   ('2020-02-15T15:45:26Z', 8.2, 'fl oz', 1),
--   ('2020-02-10T09:30:54Z', 16, 'fl oz', 1);

COMMIT;