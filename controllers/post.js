import {db} from "../connect.js"
import jwt from "jsonwebtoken";
export const getPosts=(req,res)=>{
    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!");
    jwt.verify(token,"secretkey",(err,userInfo)=>{
        const q=`SELECT p.*,u.id AS userId,name,profilePic FROM posts AS p JOIN users AS u ON (u.id=p.userid) LEFT JOIN relationships AS r ON (p.userid=r.followedid) WHERE r.followerid=? OR p.userid=?`;
        console.log(userInfo)
        db.query(q,[userInfo.id,userInfo.id],(err,data)=>{
            if(err) return res.status(500).json(err);
            console.log(data);
            return res.status(200).json(data);
        })  
    })
}
export const addPost=(req,res)=>{
if(err) return  res.status(401).json("Not logged in");
jwt.verify(token,"secretkey",(err,userInfo)=>{
    if(err) return res.status(403).json("Token is invalid");
    const q="INSERT INTO posts(`caption`,`file`,`createdon`,`userid`) VALUES (?)";
    const values=[
        req.body.caption,
        req.body.file,
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        userInfo.id,
    ];
    db.query(q,[values],(err,data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json("Post has been Created");
    })
})
}