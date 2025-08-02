import { Request,Response } from "express";
interface goodByeReaquest extends Request{
    query:{
        name:string
    }
}
export const sayGoodbye=(req:goodByeReaquest,res:Response)=>{
    const name=req.query.name
    if(typeof name !== 'string'){
       return res.status(400).json({message:"query must be string"})
    }
    return res.status(200).json({farewell:`goodbye ${name}`})
}