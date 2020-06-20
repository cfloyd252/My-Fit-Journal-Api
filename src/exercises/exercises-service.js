'use strict';

const ExercisesService = {
  getExerciseEntries(db, userId) {
    return db
      .from('log_entries AS lg')
      .select(
        'lg.log_id',
        'lg.user_id',
        'lg.log_type',
        'lg.exercise_name',
        'lg.start_time',
        'lg.end_time',
        'lg.calories'
      )
      .where({
        log_type: 'exercise',
        user_id: userId
      })
      .orderBy('start_time', 'desc');
  },

  insertEntry(db, newEntry, logType) {
    switch(logType) {
    case 'weight':
    case 'water':
      return db
        .insert(newEntry)
        .into('log_entries')
        .returning([
          'log_id',
          'user_id',
          'log_type',
          'quanity',
          'unit_of_measurement',
          'start_time'
        ])
        .then(rows => {
          return rows[0];
        });
    case 'exercise':
      return db
        .insert(newEntry)
        .into('log_entries')
        .returning([
          'log_id',
          'user_id',
          'log_type',
          'exercise_name',
          'start_time',
          'end_time',
          'calories'
        ])
        .then(rows => {
          return rows[0];
        });
    }
  },
};

module.exports = ExercisesService;