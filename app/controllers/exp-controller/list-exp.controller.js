const db = require('../../models');
const Exp = db.exp;

exports.findAll = (req, res) => {
  Exp.findAll()
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
