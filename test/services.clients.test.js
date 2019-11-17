const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');

const { clientsMock } = require('../utils/mocks/clients');

describe('services - clients', function() {
  const ClientsServices = proxyquire('../services/clients', {
    '../lib/mongo': MongoLibMock
  });

  const clientsService = new ClientsServices();

  describe('when getClients method is called', async function() {
    it('should call the getAll MongoLib method', async function() {
      await clientsService.getClients({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of clients', async function() {
      const result = await clientsService.getClients({});
      const expected = clientsMock;
      assert.deepEqual(result, expected);
    });
  });
});