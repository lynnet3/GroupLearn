const router = require("express").Router();
const studiesRoutes = require("./studies");
const usersRoutes = require("./users");

// studies routes
router.use("/studies", studiesRoutes); //if using api/studies routes to ./studies

router.use("/users", usersRoutes); //if using api/users routes to ./users

module.exports = router;