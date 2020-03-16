const xss = require('xss')

const ActivityEntriesService = {
  getEntries(db) {
    return db
      .from('activity_entries')
      .select('*')
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

  serializeEntry(entry) {
  
  }
}

module.exports = ActivityEntriesService