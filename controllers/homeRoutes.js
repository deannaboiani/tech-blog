const express = require('express');
const router = express.Router();
const {User} = require('../models');



router.get("/profile",(req,res)=>{
    if(!req.session.user){
        return res.status(401).send("login first!")
    }
    User.findByPk(req.session.user.id,{
        include:[Pet]
    }).then(userData=>{
        const hbsUser = userData.get({plain:true});
        res.render("profile",hbsUser)
    })
})

router.get("/login",(req,res)=>{
    res.render("login")
})

module.exports = router;