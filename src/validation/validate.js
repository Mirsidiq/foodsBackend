import Joi from "joi";
export const checkUser = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
}).required()

export const checkParams = Joi.object({
  id: Joi.number().integer().required()
})
export const checkNavigation = (method) => {
  if (method == 'POST') {
    return Joi.object({
      navigation_title: Joi.string().required()
    })
  }
  else {
    return Joi.object({
      navigation_title: Joi.string()
    })
  }
}
export const checkCategories = (method) => {
  if (method == 'POST') {
    return Joi.object({
      category_title: Joi.string().required()
    })
  }
  else {
    return Joi.object({
      category_title: Joi.string()
    })
  }
}