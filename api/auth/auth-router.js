const express = require("express")
const router = express.Router()

router.post("/register", (req,res)=>{
    console.log("Registering!")
})

router.post("/login", (req,res)=>{
    console.log("Logging in!")
})

router.get("/logout",(req,res)=>{
    console.log("See ya!")
})

module.exports = router