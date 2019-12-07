const router = require("express").Router();
const studysRoutes = require("./studys");

// Studys routes
router.use("/studys", studysRoutes);

module.exports = router;