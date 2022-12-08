import { Router } from "express";
import { checkCategoryMiddleware, checkParamsMiddleware } from "../../middlewares/validation.middleware.js";
import { deleteCategory, getFoods, postCategory, putCategory } from "./controller.js";

const route = Router()
route.get("/foods", getFoods)
route.post("/categories/post", checkCategoryMiddleware, postCategory)
route.put("/categories/put/:id", checkParamsMiddleware, checkCategoryMiddleware, putCategory)
route.delete("/categories/delete/:id", checkParamsMiddleware, deleteCategory)

export default route