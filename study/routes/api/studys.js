const router = require("express").Router();
const studyController = require("../../controllers/studyController");

// Matches with "/api/studys"
router.route("/")
  .get(studyController.findAll)
  .post(studyController.create);

// Matches with "/api/studys/:id"
router
  .route("/:id")
  .get(studyController.findById)
  .put(studyController.update)
  .delete(studyController.remove);

module.exports = router;
