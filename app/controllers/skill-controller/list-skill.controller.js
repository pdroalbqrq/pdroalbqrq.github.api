const db = require('../../models');
const Skill = db.skill;

exports.findAll = (req, res) => {
  Skill.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving tutorials.',
      });
    });
};
