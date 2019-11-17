const MongoLib = require('../lib/mongo');

class ShipmentsService {
    constructor() {
        this.collection = 'shipments';
        this.mongoDB = new MongoLib();
    }

    async getShipments({ folio }) {
        const query = folio && { folio: { $in: folio }};
        const shipments = await this.mongoDB.getAll(this.collection, query);
        return shipments || [];
    }

    async getShipment({ shipmentId }) {
        const shipment = await this.mongoDB.get(this.collection, shipmentId);
        return shipment || {};
    }

    async createShipment({ shipment }) {
        const createdShipmentId = await this.mongoDB.create(this.collection, shipment);
        return createdShipmentId;
    }

    async updateShipment({ shipmentId, shipment } = {}) {
        const updatedShipmentId = await this.mongoDB.update(this.collection, shipmentId, shipment);
        return updatedShipmentId;
    }

    async deleteShipment({ shipmentId }) {
        const deletedShipmentId = await this.mongoDB.delete(this.collection, shipmentId);
        return deletedShipmentId;
    }
};

module.exports = ShipmentsService;