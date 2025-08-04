import express from 'express'
import { handleDeletetask, handleGetTask, handleTask, handleUpdatetask } from '../controller/task'
const router=express.Router()
router.post("/",handleTask)
router.get("/",handleGetTask)
router.put("/:id",handleUpdatetask)
router.delete("/:id",handleDeletetask)
export default router