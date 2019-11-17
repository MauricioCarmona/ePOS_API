const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');

const { shipmentsMock } = require('../utils/mocks/shipments');

describe('services - shipments', function() {
  const ShipmentsServices = proxyquire('../services/shipments', {
    '../lib/mongo': MongoLibMock
  });

  const shipmentsService = new ShipmentsServices();

  describe('when getShipments method is called', async function() {
    it('should call the getAll MongoLib method', async function() {
      await shipmentsService.getShipments({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of shipments', async function() {
      const result = await shipmentsService.getShipments({});
      const expected = shipmentsMock;
      assert.deepEqual(result, expected);
    });
  });
});