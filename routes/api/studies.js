const router = require("express").Router();
const studyController = require("../../controllers/studyController");

// Matches with "/api/studies"
router.route("/")
  .get(studyController.findAllPosts)
  .post(studyController.create);

  router.route("/subjects")
  .post(studyController.findSubjectPosts)

  router.route("/reply")
  .post(studyController.createReply)

  router.route("/inbox")
  .post(studyController.findYourReplies)

module.exports = router;
