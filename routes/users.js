const express = require('express');
const joi = require('@hapi/joi');
const UsersService = require('../services/users');

const {
  userIdSchema,
  createUserSchema,
  updateUserSchema
} = require('../utils/schemas/users');

const validationHandler = require('../utils/middleware/validationHandler');
const cacheResponse = require('../utils/cacheResponse');
const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS
} = require('../utils/time');

function usersApi(app) {
  const router = express.Router();
  app.use('/api/users', router);

  const usersService = new UsersService();

  router.get('/', async function(req, res, next) {
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
    const { name } = req.query;

    try {
      const users = await usersService.getUsers({ name });

      res.status(200).json({
        data: users,
        message: 'users listed'
      });
    } catch (err) {
      next(err);
    }
  });

  router.get(
    '/:userId',
    validationHandler(joi.object({ userId: userIdSchema }), 'params'),
    async function(req, res, next) {
        cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
      const { userId } = req.params;
      try {
        const users = await usersService.getUser({ userId });

        res.status(200).json({
          data: users,
          message: 'user retrieved'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.post('/', validationHandler(createUserSchema), async function(
    req,
    res,
    next
  ) {
    const { body: user } = req;
    try {
      const createdUserId = await usersService.createUser({ user });

      res.status(201).json({
        data: createdUserId,
        message: 'user created'
      });
    } catch (err) {
      next(err);
    }
  });

  router.put(
    '/:userId',
    validationHandler(joi.object({ userId: userIdSchema }), 'params'),
    validationHandler(updateUserSchema),
    async function(req, res, next) {
      const { userId } = req.params;
      const { body: user } = req;
      try {
        const updatedUserId = await usersService.updateUser({
          userId,
          user
        });

        res.status(200).json({
          data: updatedUserId,
          message: 'user updated'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:userId',
    validationHandler(joi.object({ userId: userIdSchema }), 'params'),
    async function(req, res, next) {
      const { userId } = req.params;
      try {
        const deletedUserId = await usersService.deleteUser({
          userId
        });

        res.status(200).json({
          data: deletedUserId,
          message: 'user deleted'
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = usersApi;