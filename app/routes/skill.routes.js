module.exports = (app) => {
  const createSkill = require('../controllers/skill-controller/create-skill.controller');
  const listSkill = require('../controllers/skill-controller/list-skill.controller');
  const deleteSkill = require('../controllers/skill-controller/delete-skill.controller');

  var router = require('express').Router();

  // Create a new Tutorial
  router.post('/', createSkill.create);

  // Retrieve all Tutorials
  router.get('/', listSkill.findAll);

  router.delete('/', deleteSkill.deleteAll);

  app.use('/api/skill', router);
};
