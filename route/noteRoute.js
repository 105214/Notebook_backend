import express from 'express'

const router=express.Router()


router.get('/note',(req,res)=>{
    res.send({data:"all note here"})
})
router.get("/:id",(req,res)=>{
    res.send({data:"get one note"})
})
router.post("/new-note",(req,res)=>{
    res.send({data:"create new note"})
})

router.put("/edit",(req,res)=>{
    res.send({data:"note edited"})
})

router.delete("/delete",(req,res)=>{
    res.send({data:"note delete"})
})
export default router