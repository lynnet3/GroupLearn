const router = require("express").Router();
const studyController = require("../../controllers/studyController");

// Matches with "/api/users"
router.route("/")
  .get(studyController.findUser)
  .post(studyController.createUser); //pushes the data to ../../controllers/studyController and calls createUser

  module.exports = router;