const shipmentItemsMock = [{
    "id": 1,
    "quantity": 2,
    "unit_price": 332.15,
    "total_price": 457.11,
    "shipment_id": 1,
    "product_id": 3,
    "created_at": "14/7/2019",
    "updated_at": "4/7/2019"
  }, {
    "id": 2,
    "quantity": 10,
    "unit_price": 203.01,
    "total_price": 94.22,
    "shipment_id": 2,
    "product_id": 2,
    "created_at": "20/3/2019",
    "updated_at": "23/9/2019"
  }, {
    "id": 3,
    "quantity": 10,
    "unit_price": 152.0,
    "total_price": 204.45,
    "shipment_id": 3,
    "product_id": 12,
    "created_at": "8/12/2018",
    "updated_at": "21/9/2019"
  }, {
    "id": 4,
    "quantity": 8,
    "unit_price": 270.7,
    "total_price": 350.0,
    "shipment_id": 4,
    "product_id": 1,
    "created_at": "10/3/2019",
    "updated_at": "25/4/2019"
  }, {
    "id": 5,
    "quantity": 8,
    "unit_price": 461.77,
    "total_price": 448.99,
    "shipment_id": 5,
    "product_id": 6,
    "created_at": "25/3/2019",
    "updated_at": "10/1/2019"
  }
];
  
  class ShipmentItemsServiceMock {
    async getShipmentItems() {
      return Promise.resolve(shipmentItemsMock);
    }
  
    async createShipmentItem() {
      return Promise.resolve(shipmentItemsMock[0]);
    }
  }
  
  module.exports = {
    shipmentItemsMock,
    ShipmentItemsServiceMock
  };
  