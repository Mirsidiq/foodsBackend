import { Router } from "express";
import { checkNavigationMiddleware, checkParamsMiddleware } from "../../middlewares/validation.middleware.js";
import { deleteNavigate, getNavigation, postNavigate, putNavigate } from "./controller.js";

const route = Router();
route.get("/navigate", getNavigation)
route.post("/navigate/post", checkNavigationMiddleware, postNavigate)
route.put("/navigate/put/:id", checkParamsMiddleware, checkNavigationMiddleware, putNavigate)
route.delete("/navigate/delete/:id", checkParamsMiddleware, deleteNavigate)
export default route