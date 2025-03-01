import express from "express";
import { verifyToken } from "../utils/verifyToken.js";
import { kyc } from "../controllers/kyc.controller.js";

const router = express.Router();

router.post("/", verifyToken, kyc);

export default router;
