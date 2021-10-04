const router = require('express').Router();
const controller = require('./bills.controller');

router
  .route('/')
  .post(controller.create)
  .get(controller.list)

router
  .route('/:bill_id')
  .get(controller.read)
  .put(controller.update)
  .delete(controller.destroy)

module.exports = router;