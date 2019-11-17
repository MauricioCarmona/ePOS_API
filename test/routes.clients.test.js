const assert = require('assert');
const proxyquire = require('proxyquire');

const { clientsMock, ClientsServiceMock } = require('../utils/mocks/clients');
const testServer = require('../utils/testServer');

describe('routes - clients', function() {
  const route = proxyquire('../routes/clients.js', {
    '../services/clients': ClientsServiceMock
  });

  const request = testServer(route);
  describe('GET /clients', function() {
    it('should respond with status 200', function(done) {
      request.get('/api/clients').expect(200, done);
    });

    it('should respond with the list of clients', function(done) {
      request.get('/api/clients').end((err, res) => {
        assert.deepEqual(res.body, {
          data: clientsMock,
          message: 'clients listed'
        });

        done();
      });
    });
  });
});