const express = require('express');
const router = express.Router();

const userController = require("./userController");
router.use("/users",userController);

const postController = require("./postController");
router.use("/posts",postController);

const commentController = require("./commentController");
router.use("/comments",commentController);

router.get("/",(req,res)=>{
    res.send("hello from api!")
})


module.exports = router;