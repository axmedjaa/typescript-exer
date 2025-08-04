import { Request, Response } from "express";
import { Itask } from "../models/task.models";
import { createTask, deleteTask, getTasks, updateTask } from "../service/task";

export const handleTask=async(req:Request<{},{},Itask>,res:Response)=>{
    try {
        const task=await createTask(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(401).send({message:error})
    }
}
export const handleGetTask=async(_req:Request,res:Response)=>{
    try {
    const tasks = await getTasks();
    res.status(200).json({ tasks });
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to fetch tasks" });
  }
}
export  const handleUpdatetask=async(req:Request<{id:string},{},Partial<{title:string;status:string}>>,res:Response)=>{
    try {
        const update=await updateTask(req.params.id,req.body)
        if(!update){
            return res.status(401).send({message:"task not found"})
        }
         return res.status(200).json({update});
    } catch (error:any) {
         return res.status(500).json({ message: error.message || "Failed to update task" });
    }
}
export const handleDeletetask=async(req:Request<{id:string}>,res:Response)=>{
    try {
    const deleted=await deleteTask(req.params.id)
    if(!deleted){
        return res.status(401).send({message:"task not found"})
    }
    return res.status(201).send({message:`${req.params.id} deleted`})
    } catch (error:any) {
    return res.status(500).json({ message: error.message || "Failed to update task" });
    }
}