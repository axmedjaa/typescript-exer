import express, { Request, Response } from 'express'
import { loginUser } from '../controller/loginUser'
const router=express.Router()
router.post("/",loginUser)
type productQuery={
    page?:string,
    limit?:string
}
router.get("/products",(req:Request<{},{},{},productQuery>,res:Response)=>{
    const{page,limit}=req.query
    res.send({
        message:`page ${page} with limit ${limit} items`
    })
})
type update= { name: string, price: number }
router.put("/products/:id",(req:Request<{id:string},{},update>,res:Response)=>{
    const{id}=req.params
    const{name,price}=req.body
    res.send({
        message:`upadted protected id ${id} name is ${name} and price is ${price}`
    })
})
export default router