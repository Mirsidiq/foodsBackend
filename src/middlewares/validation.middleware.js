import { customError } from "../exception/customError.js";
import { categoryBody,checkId } from "../validation/validate.js";

const checkCategoryBody=(req,_,next)=>{
  const {error,__}=categoryBody.validate(req.body)
  if(error)next(new customError(400,error.message.replaceAll("\"","")))
  next()
}
const checkParamsId=(req,_,next)=>{
  const {error,__}=checkId.validate(req.params)
  if(error)next(new customError(400,error.message.replaceAll("\"","")))
  next()
}
export{
  checkCategoryBody,
  checkParamsId
}