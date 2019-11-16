const express = require('express');
const joi = require('@hapi/joi');
const ProductsService = require('../services/products');

const {
  productIdSchema,
  createProductSchema,
  updateProductSchema
} = require('../utils/schemas/products');

const validationHandler = require('../utils/middleware/validationHandler');
const cacheResponse = require('../utils/cacheResponse');
const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS
} = require('../utils/time');

function productsApi(app) {
  const router = express.Router();
  app.use('/api/products', router);

  const productsService = new ProductsService();

  router.get('/', async function(req, res, next) {
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
    const { tags } = req.query;

    try {
      const products = await productsService.getProducts({ tags });

      res.status(200).json({
        data: products,
        message: 'products listed'
      });
    } catch (err) {
      next(err);
    }
  });

  router.get(
    '/:productId',
    validationHandler(joi.object({ productId: productIdSchema }), 'params'),
    async function(req, res, next) {
        cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
      const { productId } = req.params;
      try {
        const products = await productsService.getProduct({ productId });

        res.status(200).json({
          data: products,
          message: 'product retrieved'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.post('/', validationHandler(createProductSchema), async function(
    req,
    res,
    next
  ) {
    const { body: product } = req;
    try {
      const createdProductId = await productsService.createProduct({ product });

      res.status(201).json({
        data: createdProductId,
        message: 'product created'
      });
    } catch (err) {
      next(err);
    }
  });

  router.put(
    '/:productId',
    validationHandler(joi.object({ productId: productIdSchema }), 'params'),
    validationHandler(updateProductSchema),
    async function(req, res, next) {
      const { productId } = req.params;
      const { body: product } = req;
      try {
        const updatedMovieId = await productsService.updateProduct({
          productId,
          product
        });

        res.status(200).json({
          data: updatedMovieId,
          message: 'product updated'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:productId',
    validationHandler(joi.object({ productId: productIdSchema }), 'params'),
    async function(req, res, next) {
      const { productId } = req.params;
      try {
        const deletedProductId = await productsService.deleteProduct({
          productId
        });

        res.status(200).json({
          data: deletedProductId,
          message: 'product deleted'
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = productsApi;
