import { useState ,useEffect} from "react"
import useConversations from "../../zustand/useConversations" 
import { useSocketcontext } from "../../context/Socket.context"

const Conversation = ({conversation,emo,}) => {
  const {selectedConversation,setSelectedConversation} = useConversations()
  const {online} = useSocketcontext();
  
  const isSelected = selectedConversation?selectedConversation._id===conversation._id:false
  let status = online.includes(conversation._id);
  
  useEffect(() => {
  
      return () => {
        setSelectedConversation(null)
      }
    }, [])
    
  return (
   <div className={`flex justify-between items-center w-[24vw] gap-10 cursor-pointer  p-2 rounded hover:bg-sky-500 ${isSelected?"bg-sky-500":""}`} 
   onClick={()=>{setSelectedConversation(conversation)}}>
  <div className="flex items-center gap-2">
  <div className={`avatar ${status?"avatar-online":""}`}>
    
    <div className="rounded-full w-12 ">

  <img src={conversation.profilePic} alt="profile picture" />
  {/* <img src="../../public/Batman_1591.jpeg" alt="hdhfjsf" /> */}
    </div>
 
  </div>
  <div>{conversation.fullname}</div>
</div>

     <span className='text-xl'>{emo}</span>
     
</div>
  )
}
export default Conversation