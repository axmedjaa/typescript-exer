import express from 'express'
import taskRouter from './routes/task'
import mongoose from 'mongoose'
const app=express()
app.use(express.json())
app.use("/task",taskRouter)
mongoose.connect("mongodb://localhost:27017/myapp")
        .then(()=>{
         app.listen(3000, () => console.log("✅ Server is running on port 3000"));
        })
        .catch((error)=>console.log("mongodb error",error))