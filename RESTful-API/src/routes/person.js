const express = require("express");
let router = express.Router();

//localhost:3000/person?name=sau
router.get("/person", (req,res)=>{
    if(req.query.name){
        res.send(`you have requested a person ${req.query.name}`)
    }else{
    res.send("you have requested a person")
    }
});


//localhost:3000/person/sau
router.get("/person/:name", (req,res)=>{

    res.send(`you have requested a person ${req.params.name}`)
});







module.exports = router;