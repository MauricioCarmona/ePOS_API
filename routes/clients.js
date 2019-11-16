const express = require('express');
const joi = require('@hapi/joi');
const ClientsService = require('../services/clients');

const {
  clientIdSchema,
  createClientSchema,
  updateClientSchema
} = require('../utils/schemas/clients');

const validationHandler = require('../utils/middleware/validationHandler');
const cacheResponse = require('../utils/cacheResponse');
const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS
} = require('../utils/time');

function clientsApi(app) {
  const router = express.Router();
  app.use('/api/clients', router);

  const clientsService = new ClientsService();

  router.get('/', async function(req, res, next) {
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
    const { tags } = req.query;

    try {
      const clients = await clientsService.getClients({ tags });

      res.status(200).json({
        data: clients,
        message: 'clients listed'
      });
    } catch (err) {
      next(err);
    }
  });

  router.get(
    '/:clientId',
    validationHandler(joi.object({ clientId: clientIdSchema }), 'params'),
    async function(req, res, next) {
        cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
      const { clientId } = req.params;
      try {
        const clients = await clientsService.getClient({ clientId });

        res.status(200).json({
          data: clients,
          message: 'client retrieved'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.post('/', validationHandler(createClientSchema), async function(
    req,
    res,
    next
  ) {
    const { body: client } = req;
    try {
      const createdClientId = await clientsService.createClient({ client });

      res.status(201).json({
        data: createdClientId,
        message: 'client created'
      });
    } catch (err) {
      next(err);
    }
  });

  router.put(
    '/:clientId',
    validationHandler(joi.object({ clientId: clientIdSchema }), 'params'),
    validationHandler(updateClientSchema),
    async function(req, res, next) {
      const { clientId } = req.params;
      const { body: client } = req;
      try {
        const updatedClientId = await clientsService.updateClient({
          clientId,
          client
        });

        res.status(200).json({
          data: updatedClientId,
          message: 'client updated'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:clientId',
    validationHandler(joi.object({ clientId: clientIdSchema }), 'params'),
    async function(req, res, next) {
      const { clientId } = req.params;
      try {
        const deletedClientId = await clientsService.deleteClient({
          clientId
        });

        res.status(200).json({
          data: deletedClientId,
          message: 'client deleted'
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = clientsApi;