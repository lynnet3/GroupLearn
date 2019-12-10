const router = require("express").Router();
const studysRoutes = require("./studys");
const userRoutes = require("./users");

// Studys routes
router.use("/studys", studysRoutes);

router.use("/users", userRoutes);

module.exports = router;