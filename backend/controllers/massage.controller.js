import Conversations from "../models/conversation.model.js"
import MassageModel from "../models/massage.model.js"

import {io,socketID} from "../socket/socket.js"

export const sendMassage = async (req, res) => {
    try {
    const { Id:receiver } = req.params;
    const sender = req.user._id;
    
    const {massage} = req.body;
    
    let conversation = await Conversations.findOne({participants:{$all:[sender,receiver]}})

    if (!conversation) {
        conversation = await Conversations.create({participants:[sender,receiver],})
    }

    const newMassage =  new MassageModel({
        receiver,
        sender,
        massage,
    })
    
    if (newMassage){
     conversation.massages.push(newMassage._id)        
    }
    await Promise.all([conversation.save(),newMassage.save()])

    if(socketID(receiver)){
        
        io.to(socketID(receiver)).emit("newMassage",newMassage)
    }
    res.status(201).json(newMassage)
    } catch (error) {
         console.log(`Error in  the Send massage controller` + error);
        res.status(500).json({ error: "Internal server error" })
    }
   
}


export const getMassage = async (req, res) => {
    try{
        const sender = req.user._id;
        const { Id:userToChat } = req.params;

        const conversation = await Conversations.findOne({participants:{$all:[sender,userToChat]}}).populate("massages")
  
        if(!conversation) return res.status(200).json([]);
        const massages = conversation.massages

        res.status(200).json(massages)


    }
    catch(error){
  console.log(`Error in  the Get massage controller` + error);
        res.status(500).json({ error: "Internal server error" })
    }
}

