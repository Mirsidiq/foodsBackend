import { Router } from "express";
import { addCategory, categories } from "./controller.js";

const router=Router()

router.get("/categories",categories)
router.post("/categories/post",addCategory)

export default router