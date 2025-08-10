import Massages from "./Massages"
import MassageInput from "./MassageInput"
import useConversations from "../../zustand/useConversations"
import NoChat from "./NoChat" 
const MassageContainer = () => {
  const {selectedConversation} = useConversations()

  return (
    <>
    {selectedConversation?<div className="w-[60vw] relative overflow-y-hidden overflow-x-hidden"  >
        <div className="w-[100%] bg-[#0f172a] rounded p-2">
            <span className="m-l-6 text-[14px] text-gray-700">To</span> <span className="text-[16px]  text-gray-400">{selectedConversation.fullname}</span>
        </div>
        <Massages/>
        <MassageInput/>
    </div>:<NoChat/>}
    
    </>
  )
}
export default MassageContainer