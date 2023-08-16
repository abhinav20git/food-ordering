const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post("/creatuser", async(req,res)=>{

    try {
       await User.create({
            name: "Ram",
            password: "123456",
            email: "Ramdas@hotmail.com",
            location:"qwerty dedafas"
        })
        res.json({success:true});
    } catch (error) {
        console.log(error)
        res.json({success:false});
        
    }

})

module.exports = router;