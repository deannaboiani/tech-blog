const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json(req.session);
})

router.get("/addcounter",(req,res)=>{
    if(req.session.count){
        req.session.count++
    } else {
        req.session.count = 1;
    }
    res.send("count updated!")
})



module.exports = router;