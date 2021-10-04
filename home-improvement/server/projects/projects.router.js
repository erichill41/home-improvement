const router = require('express').Router();
const controller = require('./projects.controller');

router
  .route('/')
  .get(controller.list)
  .post(controller.create)

router
  .route('/:project_id')
  .delete(controller.destroy)


  module.exports = router;