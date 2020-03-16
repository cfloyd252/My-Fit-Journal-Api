const xss = require('xss')

const WaterEntriesService = {
  getEntries(db) {
    return db
      .from('water_entries')
      .select('*')
  },

  insertEntry(db, newEntry) {
    return db
      .insert(newEntry)
      .into('water_entries')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },

  serializeEntry(entry) {
  
  }
}

module.exports = WaterEntriesService