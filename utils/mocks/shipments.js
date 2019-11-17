const shipmentsMock = [{
    "id": 1,
    "folio": 1,
    "subtotal": 248.16,
    "total": 177.07,
    "client_id": 1,
    "discount_cupon_id": 15,
    "user_id": 1,
    "billing_address_id": 24,
    "payment_method_id": 2,
    "created_at": "9/1/2019",
    "updated_at": "20/4/2019"
  }, {
    "id": 2,
    "folio": 2,
    "subtotal": 301.45,
    "total": 118.68,
    "client_id": 2,
    "discount_cupon_id": 17,
    "user_id": 2,
    "billing_address_id": 89,
    "payment_method_id": 65,
    "created_at": "25/8/2019",
    "updated_at": "2/12/2018"
  }, {
    "id": 3,
    "folio": 3,
    "subtotal": 247.66,
    "total": 99.31,
    "client_id": 3,
    "discount_cupon_id": 18,
    "user_id": 3,
    "billing_address_id": 59,
    "payment_method_id": 95,
    "created_at": "25/2/2019",
    "updated_at": "28/11/2018"
  }, {
    "id": 4,
    "folio": 4,
    "subtotal": 167.74,
    "total": 60.64,
    "client_id": 4,
    "discount_cupon_id": 12,
    "user_id": 4,
    "billing_address_id": 54,
    "payment_method_id": 59,
    "created_at": "11/8/2019",
    "updated_at": "1/2/2019"
  }, {
    "id": 5,
    "folio": 5,
    "subtotal": 472.98,
    "total": 355.4,
    "client_id": 5,
    "discount_cupon_id": 1,
    "user_id": 5,
    "billing_address_id": 62,
    "payment_method_id": 91,
    "created_at": "17/3/2019",
    "updated_at": "1/11/2019"
  }
];
  
  class ShipmentsServiceMock {
    async getShipments() {
      return Promise.resolve(shipmentsMock);
    }
  
    async createShipment() {
      return Promise.resolve(shipmentsMock[0]);
    }
  }
  
  module.exports = {
    shipmentsMock,
    ShipmentsServiceMock
  };
  