import mongoose from "mongoose";

export default async ()=>{
    try {
        await mongoose.connect(process.env.mongoURI)
        console.log("Connnected to mongodb");
        
    } catch (error) {
        console.log(`Error:${error}`);
        
    }
}