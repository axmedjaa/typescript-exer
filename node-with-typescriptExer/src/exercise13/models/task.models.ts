import mongoose, { Schema, Document } from "mongoose";
export interface Itask extends Document{
    title:string,
    status:string,
    createdAt:Date
}
const taskSchema=new Schema<Itask>({
    title:{type:String,required: true},
    status: {type: String, required: true},
    createdAt: {type: Date,default: Date.now},
})
const task=mongoose.model<Itask>("tasks2",taskSchema)
export default task