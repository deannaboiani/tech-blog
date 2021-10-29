const express = require('express');
const router = express.Router();

const homeRoutes = require("./homeRoutes.js");
router.use("/home", homeRoutes);

const apiRoutes = require("./api");
router.use("/api",apiRoutes);

const sessionRoutes = require("./sessionsRoutes")
router.use("/sessions",sessionRoutes);


module.exports = router;
