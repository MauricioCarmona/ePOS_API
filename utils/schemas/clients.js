const joi = require('@hapi/joi');

const clientIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const clientFirstNameSchema = joi.string().max(80);
const clientLastNameSchema = joi.string();
const clientBirthdaySchema = joi.string();
const clientEmailSchema = joi.string().email();
const clientStreetAddressSchema = joi.string();
const clientPhoneSchema = joi.number();
const clientIsActiveSchema = joi.boolean();
const clientUserIdSchema = joi.string();
const clientCreateDateSchema = joi.string();
const clientUpdateDateSchema = joi.string();

const createClientSchema = joi.object({
    first_name: clientFirstNameSchema.required(),
    last_name: clientLastNameSchema.required(),
    birthday: clientBirthdaySchema.required(),
    email: clientEmailSchema.required(),
    street_address: clientStreetAddressSchema.required(),
    phone_number: clientPhoneSchema.required(),
    active: clientIsActiveSchema,
    user_id: clientUserIdSchema,
    create_date: clientCreateDateSchema,
    update_date: clientUpdateDateSchema,
});

const updateClientSchema = joi.object({
    first_name: clientFirstNameSchema,
    last_name: clientLastNameSchema,
    birthday: clientBirthdaySchema,
    email: clientEmailSchema,
    street_address: clientStreetAddressSchema,
    phone_number: clientPhoneSchema,
    active: clientIsActiveSchema,
    user_id: clientUserIdSchema,
    create_date: clientCreateDateSchema,
    update_date: clientUpdateDateSchema,
});

module.exports = {
    clientIdSchema,
    createClientSchema,
    updateClientSchema,
};