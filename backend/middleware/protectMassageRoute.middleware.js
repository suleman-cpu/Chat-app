import jwt from "jsonwebtoken"
import User from "../models/user.model.js"
const protectRoute = async (req,res,next)=>{
    try {
        let token = req.cookies.jwt
        if (!token) {
            res.status(401).json({error:"Unauthorized - no token was provided"})
        }

        const decoded = await jwt.verify(token,process.env.jwt_secert)
        
        if(!decoded){
            res.status(401).json({error:"Unauthorized - Invalid token"})
        }
        
        let user = await User.findOne({_id:decoded.userId},{password:0})
        
        if(!user){
            res.status(404).json({error:"User not find "})
        }
        req.user =  user
       

        next()
    } catch (error) {
        console.log("Error in the protectMassageRoute.middleware file " + error)
        
    res.status(500).json({error:"Internal server error"})
    }
  
    
    
    
}
export default protectRoute