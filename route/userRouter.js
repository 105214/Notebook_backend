import express from 'express'


const router=express.Router()


router.post("/login",(req,res)=>{
    res.send({data:"login here"})
})

router.post("/signup",(req,res)=>{
    res.send({data:"creating account"})
})

router.post("/logout",(req,res)=>{
    res.send({data:"user logout"})
})

export default router