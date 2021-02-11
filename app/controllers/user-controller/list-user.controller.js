const db = require('../../models');
const Users = db.users;
const Info = db.info;
const Skill = db.skill;
const Exp = db.exp;

exports.findAll = (req, res) => {
  Users.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    include: [
      {
        model: Info,
        attributes: ['id', 'total', 'description'],
      },
      {
        model: Skill,
        attributes: ['id', 'name', 'percentage'],
      },
      {
        model: Exp,
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      },
    ],
  })
    .then((data) => {
      res.send(data.pop());
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving tutorials.',
      });
    });
};
