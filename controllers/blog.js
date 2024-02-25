import { db } from "../connect.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export const getDepBlog=(req,res)=>{
    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!");
    jwt.verify(token,"secretkey",(err,userInfo)=>{
        const q=`SELECT blog.bid,blog.btitle,blog.bcontent,blog.blink
        FROM blog
        WHERE fid=1`;
        console.log(userInfo)
        db.query(q,[userInfo.id],(err,data)=>{
            if(err) return res.status(500).json(err);
            console.log(data);
            return res.status(200).json(data);
        })  
    })
}
export const getAnxtBlog=(req,res)=>{
    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!");
    jwt.verify(token,"secretkey",(err,userInfo)=>{
        const q=`SELECT bid,btitle,bcontent,blink
        FROM blog
        WHERE fid=2`;
        console.log(userInfo)
        db.query(q,[userInfo.id],(err,data)=>{
            if(err) return res.status(500).json(err);
            console.log(data);
            return res.status(200).json(data);
        })  
    })
}
export const getStrBlog=(req,res)=>{
    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!");
    jwt.verify(token,"secretkey",(err,userInfo)=>{
        const q=`SELECT blog.bid,blog.btitle,blog.bcontent,blog.blink
        FROM blog
        WHERE fid=3`;
        console.log(userInfo)
        db.query(q,[userInfo.id],(err,data)=>{
            if(err) return res.status(500).json(err);
            console.log(data);
            return res.status(200).json(data);
        })  
    })
}
export const getTraBlog=(req,res)=>{
    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!");
    jwt.verify(token,"secretkey",(err,userInfo)=>{
        const q=`SELECT blog.bid,blog.btitle,blog.bcontent,blog.blink
        FROM blog
        WHERE fid=4`;
        console.log(userInfo)
        db.query(q,[userInfo.id],(err,data)=>{
            if(err) return res.status(500).json(err);
            console.log(data);
            return res.status(200).json(data);
        })  
    })
}