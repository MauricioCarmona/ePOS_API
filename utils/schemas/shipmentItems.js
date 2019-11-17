const joi = require('@hapi/joi');

const shipmentItemIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const shipmentItemQuantitySchema = joi.number();
const shipmentItemUnitPriceSchema = joi.number();
const shipmentItemTotalPriceSchema = joi.number();
const shipmentItemShipmentIdSchema = joi.number();
const shipmentItemProductIdSchema = joi.number();
const shipmentItemCreatedAtSchema = joi.string();
const shipmentItemUpdatedAtSchema = joi.string();

const createShipmentItemSchema = joi.object({
    quantity: shipmentItemQuantitySchema.required(),
    unit_price: shipmentItemUnitPriceSchema.required(),
    total_price: shipmentItemTotalPriceSchema.required(),
    shipment_id: shipmentItemShipmentIdSchema,
    product_id: shipmentItemProductIdSchema,
    created_at: shipmentItemCreatedAtSchema,
    updated_at: shipmentItemUpdatedAtSchema
});

const updateShipmentItemSchema = joi.object({
    quantity: shipmentItemQuantitySchema,
    unit_price: shipmentItemUnitPriceSchema,
    total_price: shipmentItemTotalPriceSchema,
    shipment_id: shipmentItemShipmentIdSchema,
    product_id: shipmentItemProductIdSchema,
    created_at: shipmentItemCreatedAtSchema,
    updated_at: shipmentItemUpdatedAtSchema
});

module.exports = {
    shipmentItemIdSchema,
    createShipmentItemSchema,
    updateShipmentItemSchema,
};