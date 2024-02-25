import express from "express";
import { getAnxtBlog,getDepBlog, getStrBlog, getTraBlog } from "../controllers/blog.js";

const router=express.Router();
router.get("/depblg",getDepBlog)
router.get("/anxblg",getAnxtBlog)
router.get("/strblg",getStrBlog)
router.get("/trablg",getTraBlog)
export default router;