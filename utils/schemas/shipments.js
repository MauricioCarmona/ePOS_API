const joi = require('@hapi/joi');

const shipmentIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const shipmentFolioSchema = joi.number();
const shipmentSubtotalSchema = joi.number();
const shipmentTotalSchema = joi.number();
const shipmentClientIdSchema = joi.number();
const shipmentDiscountCuponIdSchema = joi.number();
const shipmentUserIdSchema = joi.number();
const shipmentBillingAddressIdSchema = joi.number();
const shipmentPaymentMethodIdSchema = joi.number();
const shipmentCreatedAtSchema = joi.string();
const shipmentUpdatedAtSchema = joi.string();

const createShipmentSchema = joi.object({
    folio: shipmentFolioSchema.required(),
    subtotal: shipmentSubtotalSchema.required(),
    total: shipmentTotalSchema.required(),
    client_id: shipmentClientIdSchema.required(),
    discount_cupon_id: shipmentDiscountCuponIdSchema,
    user_id: shipmentUserIdSchema.required(),
    billing_address_id: shipmentBillingAddressIdSchema,
    payment_method_id: shipmentPaymentMethodIdSchema.required(),
    created_at: shipmentCreatedAtSchema,
    updated_at: shipmentUpdatedAtSchema
});

const updateShipmentSchema = joi.object({
    folio: shipmentFolioSchema,
    subtotal: shipmentSubtotalSchema,
    total: shipmentTotalSchema,
    client_id: shipmentClientIdSchema,
    discount_cupon_id: shipmentDiscountCuponIdSchema,
    user_id: shipmentUserIdSchema,
    billing_address_id: shipmentBillingAddressIdSchema,
    payment_method_id: shipmentPaymentMethodIdSchema,
    created_at: shipmentCreatedAtSchema,
    updated_at: shipmentUpdatedAtSchema
});

module.exports = {
    shipmentIdSchema,
    createShipmentSchema,
    updateShipmentSchema,
};