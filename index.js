import express from "express";
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/question.js"
import likeRoutes from "./routes/psych.js"
import blogRoutes from "./routes/blog.js"
import cors from "cors"
import cookieParser from "cookie-parser"
const app=express();
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true)
    next()
})
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",}
))
app.use(cookieParser())
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/question",postRoutes);
app.use("/api/psych",likeRoutes);
app.use("/api/blog",blogRoutes);

app.listen(8800,()=>{
    console.log("Server is running on port 8800")
})