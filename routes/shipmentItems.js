const express = require('express');
const joi = require('@hapi/joi');
const ShipmentItemsService = require('../services/shipmentItems');

const {
  shipmentItemIdSchema,
  createShipmentItemSchema,
  updateShipmentItemSchema
} = require('../utils/schemas/shipmentItems');

const validationHandler = require('../utils/middleware/validationHandler');
const cacheResponse = require('../utils/cacheResponse');
const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS
} = require('../utils/time');

function shipmentItemsApi(app) {
  const router = express.Router();
  app.use('/api/shipmentItems', router);

  const shipmentItemsService = new ShipmentItemsService();

  router.get('/', async function(req, res, next) {
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
    const { shipment_id } = req.query;

    try {
      const shipmentItems = await shipmentItemsService.getShipmentItems({ shipment_id });

      res.status(200).json({
        data: shipmentItems,
        message: 'shipment items listed'
      });
    } catch (err) {
      next(err);
    }
  });

  router.get(
    '/:shipmentItemId',
    validationHandler(joi.object({ shipmentItemId: shipmentItemIdSchema }), 'params'),
    async function(req, res, next) {
        cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
      const { shipmentItemId } = req.params;
      try {
        const shipmentItems = await shipmentItemsService.getShipmentItem({ shipmentItemId });

        res.status(200).json({
          data: shipmentItems,
          message: 'shipment item retrieved'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.post('/', validationHandler(createShipmentItemSchema), async function(
    req,
    res,
    next
  ) {
    const { body: shipmentItem } = req;
    try {
      const createdShipmentItemId = await shipmentItemsService.createShipmentItem({ shipmentItem });

      res.status(201).json({
        data: createdShipmentItemId,
        message: 'shipment item created'
      });
    } catch (err) {
      next(err);
    }
  });

  router.put(
    '/:shipmentItemId',
    validationHandler(joi.object({ shipmentItemId: shipmentItemIdSchema }), 'params'),
    validationHandler(updateShipmentItemSchema),
    async function(req, res, next) {
      const { shipmentItemId } = req.params;
      const { body: shipmentItem } = req;
      try {
        const updatedShipmentItemId = await shipmentItemsService.updateShipmentItem({
          shipmentItemId,
          shipmentItem
        });

        res.status(200).json({
          data: updatedShipmentItemId,
          message: 'shipment item updated'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:shipmentItemId',
    validationHandler(joi.object({ shipmentItemId: shipmentItemIdSchema }), 'params'),
    async function(req, res, next) {
      const { shipmentItemId } = req.params;
      try {
        const deletedShipmentItemId = await shipmentItemsService.deleteShipmentItem({
          shipmentItemId
        });

        res.status(200).json({
          data: deletedShipmentItemId,
          message: 'shipment item deleted'
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = shipmentItemsApi;