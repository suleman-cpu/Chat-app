import jwt from "jsonwebtoken"
const generateTokenandSetCookie = (res,userId)=>{
    const token = jwt.sign({userId},process.env.jwt_secert,{
        expiresIn:"15d"
    })
    res.cookie("jwt",token,{       
        maxAge:15*24*60*60*1000,
        httpOnly:false,
        sameSite:"none",
        // secure:process.env.NODE_ENV!=="development"
        secure:true
    })
    
    
}
export default generateTokenandSetCookie