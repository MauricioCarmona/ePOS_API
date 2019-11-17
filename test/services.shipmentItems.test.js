const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');

const { shipmentItemsMock } = require('../utils/mocks/shipmentItems');

describe('services - shipment items', function() {
  const ShipmentItemsServices = proxyquire('../services/shipmentItems', {
    '../lib/mongo': MongoLibMock
  });

  const shipmentItemsService = new ShipmentItemsServices();

  describe('when getShipmentItems method is called', async function() {
    it('should call the getAll MongoLib method', async function() {
      await shipmentItemsService.getShipmentItems({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of shipment items', async function() {
      const result = await shipmentItemsService.getShipmentItems({});
      const expected = shipmentItemsMock;
      assert.deepEqual(result, expected);
    });
  });
});