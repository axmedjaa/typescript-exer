import express  from "express";
import { sayGoodbye } from "../controller/sayGoodbye";
const router=express.Router()
router.get("/",sayGoodbye)
export default router