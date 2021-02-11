module.exports = (app) => {
  const createUser = require("../controllers/user-controller/create-user.controller");
  const updateUser = require("../controllers/user-controller/update-user.controller");
  const listUser = require("../controllers/user-controller/list-user.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", createUser.create);

  // Retrieve all Tutorials
  router.get("/", listUser.findAll);

  app.use("/api/user", router);
};
