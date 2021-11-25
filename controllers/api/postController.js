const express = require('express');
const router = express.Router();
const {Post, User, Comment} = require('../../models');

router.get("/",(req,res)=> {
  Post.findAll({
      include:[User]
  }).then(postData=>{
    res.json(postData);
  }).catch(err => {
    console.log(err);
    res.status(500).json({err});
});
});

router.get("/:id", (req, res) => {
    Post.findByPk(req.params.id)
    .then(posts => {
        res.json(posts);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({err});
    });
});

router.post("/", (req, res) => {
    if(!req.session.user){
      return res.status(401).send("log in first!")
    }
    Post.create({
        id:req.body.id, 
        post_title:req.body.post_title,
        contents: req.body.contents,
        creator_username: req.session.user.username,
    })
      .then(newPet => {
        res.json(newPet);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: "an error occured", err: err });
      });
  });

  router.put("/:id", (req, res) => {
    if (!req.session.user) {
        return res.status(403).json({ err: "login first!" });
      }
    Post.findByPk(req.params.id)
    .then(foundPost => {
        res.json(foundPost);
        if (req.session.user.id !== foundRev.UserId) {
          return res.status(403).json({ err: "not your post!" });
        }
        Post.update(
          {
            post_title: req.body.post_title,
            contests: req.body.contests,
            creator_username: req.body.creator_username
          },
          {
            where: {
              id: req.params.id
            }
          }
        )
 
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({err});
    });
  });

  router.delete("/:id", (req, res) => {
    if (!req.session.user) {
        return res.status(403).json({ err: "login first!" });
      }
    Post.findByPk(req.params.id)
    .then(foundPost => {
        res.json(foundPost);
        if (req.session.user.id !== foundPost.UserId) {
          return res.status(403).json({ err: "not your post!" });
        }
        Post.destroy({
          where: {
            id: req.params.id
          }
        })
          .then(delPost => {
            if (delPost) {
              res.json(delPost);
            } else {
              res.status(404).json({ err: "no post found!" });
            }
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({ err });
          });
      }).catch(err => {
        console.log(err);
        res.status(500).json({ err });
      });;
    });

module.exports = router;