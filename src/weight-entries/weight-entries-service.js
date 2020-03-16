const xss = require('xss')

const WeightEntriesService = {
  getEntries(db) {
    return db
      .from('weight_entries')
      .select('*')
  },

  insertEntry(db, newEntry) {
    return db
      .insert(newEntry)
      .into('weight_entries')
  },

  serializeEntry(entry) {
  
  }
}

module.exports = WeightEntriesService