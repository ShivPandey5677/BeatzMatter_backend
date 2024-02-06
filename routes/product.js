import express from "express";
import { addPost} from "../controllers/product.js"
const router=express.Router();
router.post("/addproduct",addPost)
export default router;