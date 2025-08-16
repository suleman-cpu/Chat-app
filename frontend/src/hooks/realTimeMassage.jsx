import { useEffect,useState } from "react"

import notificationSound from "../assets/sounds/notification.mp3";

import useConversations from "../zustand/useConversations"
import {useSocketcontext} from "../context/Socket.context"
import { useAuthcontext } from "../context/Auth.context";

const realTimeMassage =  () => {
    const {massages,setMassages } = useConversations()
    const {socket} = useSocketcontext();
    const {Authuser} = useAuthcontext();
    socket.on("newMassage",(item)=>{
        
        item.shake = true
        const sound =  new Audio(notificationSound);
        if (Authuser._id != item.sender) {
            
            sound.play();
            
        }


        setMassages([...massages,item])
    })
}
export default realTimeMassage