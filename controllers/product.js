import {db} from "../connect.js"
import jwt from "jsonwebtoken";
export const getProduct=(req,res)=>{
    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!");
    jwt.verify(token,"secretkey",(err,userInfo)=>{
        const q=`SELECT 
        p.product_id AS product_id,
        p.name AS product_name,
        p.catogary AS product_category,
        p.price AS product_price,
        p.userid AS user_id,
        p.quantity AS product_quantity,
        p.location AS product_location,
        p.imgURL AS product_imageURL,
        u.id AS user_id,
        u.username AS username,
        u.emailid AS email,
        u.name AS user_name,
        u.city AS city
    FROM 
        product AS p
    JOIN 
        user AS u ON p.userid = u.id
    WHERE 
        p.userid = ?`;
        console.log(userInfo)
        db.query(q,[userInfo.id],(err,data)=>{
            if(err) return res.status(500).json(err);
            console.log(data);
            return res.status(200).json(data);
        })  
    })
}
//SELECT p.*,u.id AS userId,name,profilePic FROM posts AS p JOIN users AS u ON (u.id=p.userid) LEFT JOIN relationships AS r ON (p.userid=r.followedid) WHERE r.followerid=? OR p.userid=?
export const addPost=(req,res)=>{
    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!");
jwt.verify(token,"secretkey",(err,userInfo)=>{
    if(err) return res.status(403).json("Token is invalid");
    const products = req.body;
    products.forEach((product) => {
        console.log(product)
        console.log(userInfo.id)
    const q="INSERT INTO product(`name`,`catogary`,`price`,`imgURL`,`location`,`userid`) VALUES (?)";
    const values=[
        product.name,
        product.catogary,
        parseInt(product.price),
       product.imgURL,
       product.location,
        userInfo.id,
    ];
    db.query(q,[values],(err,data)=>{ 
        if(err) return res.status(500).json(err);
        return res.status(200).json("Product has been Added");
    })
})
})
}