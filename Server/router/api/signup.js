const express = require('express');
const router = express.Router();
const User = require("../../models/user")


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


router.post("/",(req,res)=>{
    console.log(req.body)
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const email = req.body.email
    const password = req.body.password
    if(!first_name || !last_name || !email || !password){
        res.status(400).json({error:"you are missing some fields"})
    }
   
    if(!validateEmail(email)){
        res.status(400).json({error:"invalid email format"})
    }
    User.findOne({email}).then((user)=>{
        if (user){
            res.status(400).json({error:"email already used"})
        }
    }).catch(err=>{
        res.json({err:"error 1"})
    })
    const newUser = new User({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        password: req.body.password
    })

    newUser.save().then((result)=>{
        res.status(201).send(JSON.stringify(result))
    }).catch(err=>{
        console.log(err)
        res.send(JSON.stringify({error:"Error adding this to the db"}))
    })
})

module.exports = router