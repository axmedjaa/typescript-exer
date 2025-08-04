import Task, { Itask } from "../models/task.models";

export async function createTask(data:Itask):Promise<Itask>{
    const task=await Task.create(data)
    await task.save()
    return task
}
export async function getTasks():Promise<Itask[]>{
    return await Task.find()
}
export async function updateTask(id:string,data:Partial<Itask>):Promise<Itask|null>{
    return await Task.findByIdAndUpdate(id,data,{new:true})
}
export async function deleteTask(id:string):Promise<Itask|null>{
    return await Task.findByIdAndDelete(id)
}