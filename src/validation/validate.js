import Joi from "joi"
const checkId=Joi.object({
  id:Joi.number().integer().required()
})
const categoryBody=Joi.object({
  name:Joi.string().max(32).required()
}).required()
export{
  categoryBody,
  checkId
}