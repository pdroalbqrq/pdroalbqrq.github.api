const db = require('../../models');
const Info = db.info;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.total) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  // Create a Info
  const info = {
    userId: req.body.userId,
    total: req.body.total,
    description: req.body.description,
  };

  // Save Info in the database
  Info.create(info)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Info.',
      });
    });
};
