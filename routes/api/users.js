const express = require("express");
const router = express.Router();

// Load User model
const User = require("../../models/user");
const userController = require("../../controllers/userController");


// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;

