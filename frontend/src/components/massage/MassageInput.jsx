import { useState,useRef } from "react"
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
  return (
    <>
      <div className="w-[55vw] flex justify-center fixed bottom-[.8vw] left-[31.91vw] gap-1">
        <input ref={mas_input} type="text" className="input w-[58vw]" onChange={(e) => { setmassage(e.target.value) }} />
        <button className="btn" onClick={handleSubmit}>send</button>
      </div>
      <div className="w-[60vw] h-[14vh]">
      </div>
    </>
  )
}
export default MassageInput