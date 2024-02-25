import { db } from "../connect.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export const registerpsych=(req,res)=>{
   
    // const q="SELECT * FROM user where username=?"
       const q="INSERT INTO psych(psname,psemail,pscontnum,psexpertise,fieldid) VALUE (?)"
       const values=[req.body.name,req.body.email,req.body.contact,req.body.expertise,req.body.fid]
       db.query(q,[values],(err,data)=>{
        if(err) return res.status(500).json(err)
        return res.status(200).json("User has been created");
       })
    
}
export const getPsych=(req,res)=>{
    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!");
    jwt.verify(token,"secretkey",(err,userInfo)=>{
        const q=`SELECT psych.psname, psych.psemail, psych.pscontnum, psych.psexpertise
        FROM psych
        JOIN mentfield ON psych.fieldid = mentfield.id
        JOIN user ON user.mhp = mentfield.name
        WHERE user.id = ?`;
        console.log(userInfo)
        db.query(q,[userInfo.id],(err,data)=>{
            if(err) return res.status(500).json(err);
            console.log(data);
            return res.status(200).json(data);
        })  
    })
}