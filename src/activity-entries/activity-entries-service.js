const xss = require('xss')

const ActivityEntriesService = {
  getEntries(db) {
    return db
      .from('activity_entries')
      .select('*')
      .orderBy('start_log_time', 'desc')
  },

  insertEntry(db, newEntry) {
    return db
      .insert(newEntry)
      .into('activity_entries')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },
}

module.exports = ActivityEntriesService