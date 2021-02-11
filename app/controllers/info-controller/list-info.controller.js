const db = require('../../models');
const Info = db.info;

exports.findAll = (req, res) => {
  Info.findAll()
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
