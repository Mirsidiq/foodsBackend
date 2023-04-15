import { Router } from "express";
import { addCategory, categories, deleteCategory, getById, updateCategory } from "./controller.js";
import { checkCategoryBody, checkParamsId } from "../../middlewares/validation.middleware.js";

const router=Router()

router.get("/categories",categories)
router.get("/categories/:id",checkParamsId,getById)
router.post("/categories/post",checkCategoryBody,addCategory)
router.put("/categories/put/:id",checkParamsId,checkCategoryBody,updateCategory)
router.delete("/categories/delete/:id",checkParamsId,deleteCategory)

export default router