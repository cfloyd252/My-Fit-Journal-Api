const xss = require('xss')

const WeightEntriesService = {
  getEntries(db) {
    return db
      .from('weight_entries')
      .select('*')
      .orderBy('log_time', 'desc')
  },

  insertEntry(db, newEntry) {
    return db
      .insert(newEntry)
      .into('weight_entries') .returning('*')
      .then(rows => {
        return rows[0]
      })
  },

  serializeEntry(entry) {
  
  }
}

module.exports = WeightEntriesService