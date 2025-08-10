import mongoose from "mongoose";

const massageSchema = new mongoose.Schema({
    receiver: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required: true
    },
    sender: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required: true
    },
    massage: {
        type: String,
        required: true
    },
 } ,{ timestamps: true })

const massage = mongoose.model("massages",massageSchema);
export default massage;