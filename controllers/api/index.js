const express = require('express');
const router = express.Router();

const userController = require("./userController");
router.use("/users",userController);

const postController = require("./postController");
router.use("/post",postController);

module.exports = router;