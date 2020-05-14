const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function makeUsersArray() {
  return [
    {
      id: 1,
      name: 'test-name1',
      user_name: 'test-user1',
      password: 'password1'
    },
    {
      id: 2,
      name: 'test-name2',
      user_name: 'test-user2',
      password: 'password2'
    },
    {
      id: 3,
      name: 'test-name3',
      user_name: 'test-user3',
      password: 'password3'
    },
  ]
}

function makeLogsArray() {

}

function makeMyFitAppFixtures() {
  const testUsers = makeUsersArray()
  const testLogs = makeLogsArray()
  return { testUsers, testLogs }
}

function cleanTables(db) {
  return db.raw(
    `TRUNCATE
      users,
      log_entries`
  )
}

function seedUsers(db, users) {
  const preppedUsers = users.map(user => ({
    ...user,
    password: bcrypt.hashSync(user.password, 1)
  }))
  return db.transaction(async trx => {
      await trx.into('users').insert(preppedUsers)
    })
}

function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
  const token = jwt.sign({ id: user.id }, secret, {
      subject: user.user_name,
      algorithm: 'HS256',
    })
  return `Bearer ${token}`
}

module.exports = {
  makeMyFitAppFixtures,
  cleanTables,
  makeAuthHeader,
  seedUsers,
}