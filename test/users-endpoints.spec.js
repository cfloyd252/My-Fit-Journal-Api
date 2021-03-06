'use strict';

const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');
require('dotenv').config();

describe('Users Endpoints', function () {
  let db;
  const {
    testUsers,
    testEntries,
  } = helpers.makeMyFitAppFixtures(); 

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    });
    app.set('db', db);
  });
  after('disconnect from db', () => db.destroy());

  before('cleanup', () => helpers.cleanTables(db));

  afterEach('cleanup', () => helpers.cleanTables(db));

  describe('Protected endpoints', () => {
    beforeEach('Insert Users', () => {
      return helpers.seedUsers(
        db,
        testUsers,
      );
    });
    const protectedEndpoints = [
      {
        name: 'GET /api/users',
        path: '/api/users',
        method: supertest(app).get
      },
    ];
    protectedEndpoints.forEach(endpoint => {
      describe(endpoint.name, () => {
        it('responds with 401 \'Missing bearer token\' when no bearer token', () => {
          return endpoint.method(endpoint.path)
            .expect(401, { error: 'Missing bearer token' });
        });
        it('responds 401 \'Unauthorized request\' when invalid JWT secret', () => {
          const validUser = testUsers[0];
          const invalidSecret = 'bad-secret';
          return endpoint.method(endpoint.path)
            .set('Authorization', helpers.makeAuthHeader(validUser, invalidSecret))
            .expect(401, { error: 'Unauthorized request' });
        });
        it('responds 401 \'Unauthorized request\' when invalid sub in payload', () => {
          const invalidUser = { user_name: 'user-not-existy', id: 1 };
          return endpoint.method(endpoint.path)
            .set('Authorization', helpers.makeAuthHeader(invalidUser))
            .expect(401, { error: 'Unauthorized request' });
        });
      });
    });
  });
});