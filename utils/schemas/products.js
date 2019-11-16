const joi = require('@hapi/joi');

const productIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const productTitleSchema = joi.string().max(80);
const  productImageSchema = joi.string().uri();
const productDescriptionSchema = joi.string().max(300);
const productPriceSchema = joi.number().min(1);
const productUnitsSchema = joi.number();
const productCategorySchema = joi.string();

const createProductSchema = joi.object({
    title: productTitleSchema.required(),
    image: productImageSchema.required(),
    description: productDescriptionSchema.required(),
    price: productPriceSchema.required(),
    units: productUnitsSchema.required(),
    category: productCategorySchema.required(),
});

const updateProductSchema = joi.object({
    title: productTitleSchema,
    image: productImageSchema,
    description: productDescriptionSchema,
    price: productPriceSchema,
    units: productUnitsSchema,
    category: productCategorySchema,
});

module.exports = {
    productIdSchema,
    createProductSchema,
    updateProductSchema,
};
