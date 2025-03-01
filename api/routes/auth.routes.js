import express from "express";
import { deleteUser, signin, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.delete("/delete/:id", deleteUser);

export default router;
