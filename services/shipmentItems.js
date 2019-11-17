const MongoLib = require('../lib/mongo');

class ShipmentItemsService {
    constructor() {
        this.collection = 'shipmentItems';
        this.mongoDB = new MongoLib();
    }

    async getShipmentItems({ shipment_id }) {
        const query = shipment_id && { shipment_id: { $in: shipment_id }};
        const shipmentItems = await this.mongoDB.getAll(this.collection, query);
        return shipmentItems || [];
    }

    async getShipmentItem({ shipmentItemId }) {
        const shipmentItem = await this.mongoDB.get(this.collection, shipmentItemId);
        return shipmentItem || {};
    }

    async createShipmentItem({ shipmentItem }) {
        const createdShipmentItemId = await this.mongoDB.create(this.collection, shipmentItem);
        return createdShipmentItemId;
    }

    async updateShipmentItem({ shipmentItemId, shipmentItem } = {}) {
        const updatedShipmentItemId = await this.mongoDB.update(this.collection, shipmentItemId, shipmentItem);
        return updatedShipmentItemId;
    }

    async deleteShipmentItem({ shipmentItemId }) {
        const deletedShipmentItemId = await this.mongoDB.delete(this.collection, shipmentItemId);
        return deletedShipmentItemId;
    }
};

module.exports = ShipmentItemsService;