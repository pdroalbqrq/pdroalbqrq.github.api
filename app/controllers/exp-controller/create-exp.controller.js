const db = require('../../models');
const Exp = db.exp;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.company) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  // Create a User
  const {
    startDate,
    endDate,
    charge,
    company,
    description,
    type,
    userId,
  } = req.body;
  exp = {
    startDate,
    endDate,
    charge,
    company,
    description,
    type,
    userId,
  };

  // Save User in the database
  Exp.create(exp)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.',
      });
    });
};
