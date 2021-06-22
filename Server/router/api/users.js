const express = require('express');
const router = express.Router();
const User = require("../../models/user")


router.get("/", (req, res) => {
    User.find().then((result) => {
        res.send(JSON.stringify(result))
    }).catch((err) => {
        console.log(err)
    })
})


router.delete("/:id",(req,res)=>{
    const user_id = req.params.id 
    User.findById(user_id).then((userToDelete)=>{
        userToDelete.delete();
        res.json({message:'user deleted'})
    }).catch(err=>{
        console.log(err)
    })
  
})

router.put("/:id",(req,res)=>{
    
    User.findByIdAndUpdate(req.params.id, {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    }).then((result)=>{
        res.send(JSON.stringify(result))
    }).catch((err)=>{
        console.log(err)
    })
})


module.exports = router