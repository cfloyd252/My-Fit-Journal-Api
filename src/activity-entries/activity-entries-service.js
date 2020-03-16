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
  },

  serializeEntry(entry) {
  
  }
}

module.exports = ActivityEntriesService