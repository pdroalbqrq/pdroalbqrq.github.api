const db = require('../../models');
const Skill = db.skill;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  // Create a Skill
  const { userId, percentage, name } = req.body;

  const skill = {
    userId,
    percentage,
    name,
  };

  // Save Skill in the database
  Skill.create(skill)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Info.',
      });
    });
};
