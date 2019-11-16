const sinon = require('sinon');

const { productsMock, filteredProductsMock } = require('./products');

const getAllStub = sinon.stub();
getAllStub.withArgs('products').resolves(productsMock);

const categoryQuery = { category: { $in: ['Equipaje'] } };
getAllStub.withArgs('movies', categoryQuery).resolves(filteredProductsMock('Equipaje'));

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