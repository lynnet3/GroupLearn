const router = require("express").Router();
const studyController = require("../../controllers/studyController");

// Matches with "/api/studies"
router.route("/")
  .get(studyController.findAllPosts)
  .post(studyController.create);

// Matches with "/api/studies/:id"
router
  .route("/:id")
  .get(studyController.findById)
  .put(studyController.update)
  .delete(studyController.remove);

module.exports = router;
