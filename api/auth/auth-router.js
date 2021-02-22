const express = require("express")
const router = express.Router()
const User = require("../users/users-model.js")

const checkPayload = (req,res,next)=>{
    if(!req.body.username || !req.body.password){
        res.status(401).json("Username or password missing")
    }else{
        next()
    }
}

const checkUserInDb = async (req,res,next)=>{
    try{
        const user = await User.findBy({username: req.body.username})
        console.log(user)
    }catch(e){
        res.status(500).json(`Server error: ${e}`)
    }
}

router.post("/register", checkPayload, checkUserInDb, (req,res)=>{
    
})

router.post("/login", (req,res)=>{
    console.log("Logging in!")
})

router.get("/logout",(req,res)=>{
    console.log("See ya!")
})

module.exports = router