import mongoose from "mongoose";

const conversationsSchema = new mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required: true
    }],
    massages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"massages",
        default:[],
        strictPopulate:false
    }] 
},{ timestamps: true })

const conversations = mongoose.model("conversations",conversationsSchema);
export default conversations