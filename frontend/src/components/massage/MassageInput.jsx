import { useState,useRef } from "react"
import { LuSend } from "react-icons/lu";
import useConversations from "../../zustand/useConversations"
import useSendMassages from "../../hooks/useSendMassage"
const MassageInput = () => {
  const { selectedConversation } = useConversations()
  const {sendMassage} = useSendMassages()
  const [massage, setmassage] = useState("")
  const mas_input = useRef(null)
  const handleSubmit = () => {
    if(massage===""){
      return;
    }
    sendMassage(massage)
    mas_input.current.value=""
   }
   const handleKeydown = (e)=>{
    if(e.key==="Enter"){
      handleSubmit()
    }
   }
  return (
    <>
    
      <div className="md:w-[55vw] w-[90vw] flex justify-center fixed bottom-[.8vw] md:left-[33.3vw] left-[1.29vw] gap-1">
        <input ref={mas_input} type="text" placeholder="Hello joe..." className="input w-[100%] md:w-[55vw] pr-[3.5vw] p-2" onChange={(e) => { setmassage(e.target.value) }} onKeyDown={handleKeydown}/>
        <LuSend className="absolute right-[1vw] top-[7px] text-2xl cursor-pointer z-1" onClick={handleSubmit}/>
      </div>
      <div className="w-[60vw] h-[14vh]">
      </div>
    </> 
  )
}
export default MassageInput