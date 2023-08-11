const jwt=require("jsonwebtoken");

//jwt takes 3 things:1.value provided , 2.time, 3. expiration time
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:"30d"
    })
}
module.exports=generateToken;