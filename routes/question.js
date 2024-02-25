import express from "express";
import { getQuestion} from "../controllers/question.js"
const router=express.Router();
router.get("/",getQuestion)
export default router;