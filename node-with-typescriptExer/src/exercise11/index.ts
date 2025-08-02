import  express  from "express";
import goodbyeRouter from "./routes/goodbye.route";
const app=express()
app.use(express.json())
app.use("/goodbye",goodbyeRouter)
app.listen("3000",()=>{
    console.log("welcome")
})