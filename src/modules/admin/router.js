import { Router } from "express";
import { checkUserMiddleware } from "../../middlewares/validation.middleware.js";
import { postUser } from "./controller.js";

const route = Router()
route.post("/login", checkUserMiddleware, postUser)

export default route