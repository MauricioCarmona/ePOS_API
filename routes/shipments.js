const express = require('express');
const joi = require('@hapi/joi');
const ShipmentsService = require('../services/shipments');

const {
  shipmentIdSchema,
  createShipmentSchema,
  updateShipmentSchema
} = require('../utils/schemas/shipments');

const validationHandler = require('../utils/middleware/validationHandler');
const cacheResponse = require('../utils/cacheResponse');
const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS
} = require('../utils/time');

function shipmentsApi(app) {
  const router = express.Router();
  app.use('/api/shipments', router);

  const shipmentsService = new ShipmentsService();

  router.get('/', async function(req, res, next) {
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
    const { folio } = req.query;

    try {
      const shipments = await shipmentsService.getShipments({ folio });

      res.status(200).json({
        data: shipments,
        message: 'shipments listed'
      });
    } catch (err) {
      next(err);
    }
  });

  router.get(
    '/:shipmentId',
    validationHandler(joi.object({ shipmentId: shipmentIdSchema }), 'params'),
    async function(req, res, next) {
        cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
      const { shipmentId } = req.params;
      try {
        const shipments = await shipmentsService.getShipment({ shipmentId });

        res.status(200).json({
          data: shipments,
          message: 'shipment retrieved'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.post('/', validationHandler(createShipmentSchema), async function(
    req,
    res,
    next
  ) {
    const { body: shipment } = req;
    try {
      const createdShipmentId = await shipmentsService.createShipment({ shipment });

      res.status(201).json({
        data: createdShipmentId,
        message: 'shipment created'
      });
    } catch (err) {
      next(err);
    }
  });

  router.put(
    '/:shipmentId',
    validationHandler(joi.object({ shipmentId: shipmentIdSchema }), 'params'),
    validationHandler(updateShipmentSchema),
    async function(req, res, next) {
      const { shipmentId } = req.params;
      const { body: shipment } = req;
      try {
        const updatedShipmentId = await shipmentsService.updateShipment({
          shipmentId,
          shipment
        });

        res.status(200).json({
          data: updatedShipmentId,
          message: 'shipment updated'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:shipmentId',
    validationHandler(joi.object({ shipmentId: shipmentIdSchema }), 'params'),
    async function(req, res, next) {
      const { shipmentId } = req.params;
      try {
        const deletedShipmentId = await shipmentsService.deleteShipment({
          shipmentId
        });

        res.status(200).json({
          data: deletedShipmentId,
          message: 'shipment deleted'
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = shipmentsApi;