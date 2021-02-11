module.exports = (app) => {
  const createExp = require('../controllers/exp-controller/create-exp.controller');
  const listExp = require('../controllers/exp-controller/list-exp.controller');

  var router = require('express').Router();

  // Create a new Tutorial
  router.post('/', createExp.create);

  // Retrieve all Tutorials
  router.get('/', listExp.findAll);

  app.use('/api/exp', router);
};
