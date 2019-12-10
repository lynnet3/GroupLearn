const router = require("express").Router();
const studyController = require("../../controllers/studyController");

// Matches with "/api/users"
router.route("/")
  .get(studyController.findAllUsers)
  .post(studyController.createUser);

  module.exports = router;