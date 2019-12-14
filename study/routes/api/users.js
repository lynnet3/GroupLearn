const router = require("express").Router();
const studyController = require("../../controllers/studyController");

// Matches with "/api/users/signIn"
router.route("/signIn")
  .post(studyController.createUser); //pushes the data to ../../controllers/studyController and calls createUser

router.route("/login")
  .post(studyController.findUser)

  module.exports = router;