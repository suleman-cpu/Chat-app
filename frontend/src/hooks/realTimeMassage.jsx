import { useEffect,useState } from "react"
import useConversations from "../zustand/useConversations"
import notificationSound from "../assets/sounds/notification.mp3";
import {useSocketcontext} from "../context/Socket.context"
const realTimeMassage =  () => {
    const {massages,setMassages } = useConversations()
    const {socket} = useSocketcontext();

    socket.on("newMassage",(item)=>{

        item.shake = true

        const sound =  new Audio(notificationSound);
        sound.play();


        setMassages([...massages,item])
    })
}
export default realTimeMassage