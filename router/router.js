import { Router } from "express";
import PostController from "../controller/PostController.js";

const router = new Router()

router.post("/sport",PostController.create)
router.get("/sport",PostController.getAll)
router.get("/sport/:id", PostController.getOne)
router.put("/sport/:id", PostController.update)
router.delete("/sport/:id",PostController.delete)


export default router