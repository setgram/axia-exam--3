import express from "express";
import { post } from "../controllers/post.controller.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, post);

export default router;
