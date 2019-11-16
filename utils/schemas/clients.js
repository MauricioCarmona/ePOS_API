const joi = require('@hapi/joi');

const clientIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const clientNameSchema = joi.string().max(80);
const clientLastNameSchema = joi.string();
const clientEmailSchema = joi.string().email();
const clientPhoneSchema = joi.number();

const createClientSchema = joi.object({
    first_name: clientNameSchema.required(),
    last_name: clientLastNameSchema.required(),
    email: clientEmailSchema.required(),
    phone_number: clientPhoneSchema.required(),
});

const updateClientSchema = joi.object({
    first_name: clientNameSchema,
    last_name: clientLastNameSchema,
    email: clientEmailSchema,
    phone_number: clientPhoneSchema,
});

module.exports = {
    clientIdSchema,
    createClientSchema,
    updateClientSchema,
};