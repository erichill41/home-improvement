const router = require('express').Router();
const controller = require('./bills.controller');

router
  .route('/')
  .post(controller.create)
  .get(controller.list)

module.exports = router;