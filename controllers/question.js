import {db} from "../connect.js"
import jwt from "jsonwebtoken";
export const getQuestion=(req,res)=>{
    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!");
    jwt.verify(token,"secretkey",(err,userInfo)=>{
        const q=`SELECT testquest.question, testquest.option1, testquest.option2, testquest.option3, testquest.option4
        FROM testquest
        JOIN mentfield ON testquest.fieldid = mentfield.id
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
