const assert = require('assert');
const proxyquire = require('proxyquire');

const { usersMock, UsersServiceMock } = require('../utils/mocks/users');
const testServer = require('../utils/testServer');

describe('routes - users', function() {
  const route = proxyquire('../routes/users.js', {
    '../services/users': UsersServiceMock
  });

  const request = testServer(route);
  describe('GET /users', function() {
    it('should respond with status 200', function(done) {
      request.get('/api/users').expect(200, done);
    });

    it('should respond with the list of users', function(done) {
      request.get('/api/users').end((err, res) => {
        assert.deepEqual(res.body, {
          data: usersMock,
          message: 'users listed'
        });

        done();
      });
    });
  });
});