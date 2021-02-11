module.exports = (app) => {
  const createInfo = require('../controllers/info-controller/create-info.controller');
  const listInfo = require('../controllers/info-controller/list-info.controller');

  var router = require('express').Router();

  // Create a new Tutorial
  router.post('/', createInfo.create);

  // Retrieve all Tutorials
  router.get('/', listInfo.findAll);

  app.use('/api/info', router);
};
