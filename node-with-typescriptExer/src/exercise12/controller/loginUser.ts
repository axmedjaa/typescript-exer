import  {Request, Response }  from "express";
import { login } from "../type/login";
export const loginUser=(req:Request<{},{},login>,res:Response)=>{
    const{email,password}=req.body
    if(!email||!password){
      return res.status(400).json({ message: "All fields required" });
    }
      return res.status(201).json({
        message:"success login"
    })
}

