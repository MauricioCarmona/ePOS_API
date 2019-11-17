const assert = require('assert');
const proxyquire = require('proxyquire');

const { shipmentsMock, ShipmentsServiceMock } = require('../utils/mocks/shipments');
const testServer = require('../utils/testServer');

describe('routes - shipments', function() {
  const route = proxyquire('../routes/shipments.js', {
    '../services/shipments': ShipmentsServiceMock
  });

  const request = testServer(route);
  describe('GET /shipments', function() {
    it('should respond with status 200', function(done) {
      request.get('/api/shipments').expect(200, done);
    });

    it('should respond with the list of shipments', function(done) {
      request.get('/api/shipments').end((err, res) => {
        assert.deepEqual(res.body, {
          data: shipmentsMock,
          message: 'shipments listed'
        });

        done();
      });
    });
  });
});