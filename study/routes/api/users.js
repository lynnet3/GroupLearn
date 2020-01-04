const router = require("express").Router();
const studyController = require("../../controllers/studyController");

// Matches with "/api/users/signIn"
router.route("/signIn")
  .post(studyController.createUser); //pushes the data to ../../controllers/studyController and calls createUser
// Matches with "/api/users/login"
router.route("/login")
  .post(studyController.findUser)
// Matches with "/api/users/cookie"
  router.route("/cookie")
  .get(studyController.findCookie)
// Matches with "/api/users"
  router.route("/")
  .get(studyController.findAllUsers)

  module.exports = router;