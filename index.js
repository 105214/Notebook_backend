import express from 'express';
import userRoute from './route/userRouter.js'
import notesRoute from './route/noteRoute.js'
const app=express()

const port =3000



app.get('/',(req,res)=>{
    res.send("hello world")
})




app.use('/user',userRoute)

app.use('/note',notesRoute)

app.listen(port,()=>{
    console.log(`app running on ${port}`)
})