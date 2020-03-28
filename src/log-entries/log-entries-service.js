const LogEntriesService = {
  getWaterEntries(db) {
    return db
      .from('log_entries AS lg')
      .select(
        'lg.log_id',
        'lg.user_id',
        'lg.log_type',
        'lg.quanity',
        'lg.unit_of_measurement',
        'lg.start_time'
      )
      .where({ log_type: 'water' })
      .orderBy('start_time', 'desc')
  },

  getWeightEntries(db) {
    return db
      .from('log_entries AS lg')
      .select(
        'lg.log_id',
        'lg.user_id',
        'lg.log_type',
        'lg.quanity',
        'lg.unit_of_measurement',
        'lg.start_time'
      )
      .where({ log_type: 'weight' })
      .orderBy('start_time', 'desc')
  },

  getActivityEntries(db) {
    return db
      .from('log_entries AS lg')
      .select(
        'lg.log_id',
        'lg.user_id',
        'lg.log_type',
        'lg.log_title',
        'lg.start_time',
        'lg.end_time',
        'lg.calories'
      )
      .where({ log_type: 'activity' })
      .orderBy('start_time', 'desc')
  },

  insertEntry(db, newEntry) {
    return db
      .insert(newEntry)
      .into('log_entries')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },
}

module.exports = LogEntriesService