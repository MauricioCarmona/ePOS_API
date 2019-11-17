const sinon = require('sinon');

const { productsMock, filteredProductsMock } = require('./products');
const { clientsMock } = require('./clients');
const { usersMock } = require('./users');
const { shipmentsMock } = require('./shipments');
const { shipmentItemsMock } = require('./shipmentItems');

const getAllStub = sinon.stub();
getAllStub.withArgs('products').resolves(productsMock);
getAllStub.withArgs('clients').resolves(clientsMock);
getAllStub.withArgs('users').resolves(usersMock);
getAllStub.withArgs('shipments').resolves(shipmentsMock);
getAllStub.withArgs('shipmentItems').resolves(shipmentItemsMock);

const categoryQuery = { category: { $in: ['Equipaje'] } };
getAllStub.withArgs('products', categoryQuery).resolves(filteredProductsMock('Equipaje'));

const createStub = sinon.stub().resolves(productsMock[0].id);

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }

  create(collection, data) {
    return createStub(collection, data);
  }
}

module.exports = {
  getAllStub,
  createStub,
  MongoLibMock
};