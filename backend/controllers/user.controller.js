import User from "../models/user.model.js"
const getUserForSideBar =async (req,res)=>{
    try {
        const loginUserId = req.user._id        
     const filterUser = await User.find({_id:{$ne:loginUserId}},{password:0})
        res.status(200).json(filterUser)
    } catch (error) {
        console.log(error)
    }
}
export default getUserForSideBar