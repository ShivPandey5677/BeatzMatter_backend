import express from "express";
import { getPsych, registerpsych } from "../controllers/psych.js"
const router=express.Router();
router.get("/",getPsych)
router.post("/registerpsych",registerpsych)
export default router;