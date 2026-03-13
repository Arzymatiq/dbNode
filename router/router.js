import { Router } from "express";
import PostController from "../controller/PostController.js";

const router = new Router();

router.post("/dress", PostController.create);
router.get("/dress", PostController.getAll);
router.get("/dress/:id", PostController.getOne);
router.put("/dress/:id", PostController.update);
router.delete("/dress/:id", PostController.delete);

export default router;
