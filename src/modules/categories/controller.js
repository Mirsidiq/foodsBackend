import {customError} from "../../exception/customError.js"
import {CategoryModel}from "./model.js"
const categories=async(req,res,next)=>{
 try {
  const data=await CategoryModel.findAll()
  data.length>0?res.status(200).json({
    message:"categories",
    data
  })
  :res.status(404).json({
    message:"not found",
    data
  })
 } catch (error) {
  next(new customError(500,error.message))
 }
}
const addCategory=async(req,res,next)=>{
  try {
    const{name}=req.body
    const newCategory=await CategoryModel.create({name})
    newCategory ? res.status(201).json({
      message:"created",
      data:newCategory
    }):
    res.status(400).json({
      message:"not created",
      data:{}
    })
  } catch (error) {
    next(new customError(500,error.message))
  }
}
export{
  categories,
  addCategory
}