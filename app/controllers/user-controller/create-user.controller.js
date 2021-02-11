const db = require("../../models");
const Users = db.users;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.first_name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a User
  const user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    age: req.body.age,
    birthdate: req.body.birthdate,
    nationality: req.body.nationality,
    freelance: req.body.freelance,
    city: req.body.city,
    phone: req.body.phone,
    languages: req.body.languages,
  };

  // Save User in the database
  Users.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};
