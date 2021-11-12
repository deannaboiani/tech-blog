const express = require('express');
const router = express.Router();
const {User , Post} = require('../models');
router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [User],
      });
  
      const posts = postData.map((post) => post.get({ plain: true }));
  
      res.render('home', { posts });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          User
        ],
      });
  
      if (postData) {
        const post = postData.get({ plain: true });
  
        res.render('singlePost', { post });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/dashboard",(req,res)=>{
    res.render("dashboard")
});

router.get("/login",(req,res)=>{
    res.render("login")
});

router.get("/signup",(req,res)=>{
    res.render("signup")
});

router.get("/logout", (req, res) => {
    req.session.destroy(() => {
      res.render("login")
    });
  });

  router.get("/addPost",(req,res)=>{
    res.render("addPost")
});


module.exports = router;