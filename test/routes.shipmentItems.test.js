const assert = require('assert');
const proxyquire = require('proxyquire');

const { shipmentItemsMock, ShipmentItemsServiceMock } = require('../utils/mocks/shipmentItems');
const testServer = require('../utils/testServer');

describe('routes - shipment items', function() {
  const route = proxyquire('../routes/shipmentItems.js', {
    '../services/shipmentItems': ShipmentItemsServiceMock
  });

  const request = testServer(route);
  describe('GET /shipmentItems', function() {
    it('should respond with status 200', function(done) {
      request.get('/api/shipmentitems').expect(200, done);
    });

    it('should respond with the list of shipment items', function(done) {
      request.get('/api/shipmentitems').end((err, res) => {
        assert.deepEqual(res.body, {
          data: shipmentItemsMock,
          message: 'shipment items listed'
        });

        done();
      });
    });
  });
});