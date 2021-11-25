const express = require('express');
const router = express.Router();
const { User, Comment} = require('../../models');

router.get("/",(req,res)=> {
    Comment.findAll({
        include:[User]
    }).then(postData=>{
      res.json(postData);
    }).catch(err => {
      console.log(err);
      res.status(500).json({err});
  });
  });

// router.post('/',  (req,res)=>{
//      Comment.create(req.body)
//      .then(newComment=>{
//          res.json(newComment);
//         })
//       .catch (err=>{
//           res.status(500).json(err);
//       })
      
// });


module.exports = router;