import Massages from "./Massages"
import MassageInput from "./MassageInput"
import NoChat from "./NoChat"

import useConversations from "../../zustand/useConversations"

const MassageContainer = () => {
  const { selectedConversation } = useConversations()

      const handleside = async ()=>  {
    

      const mass = document.querySelector(".massageCont").classList
      const sidebar = document.querySelector(".sidebar").classList

      if(mass.contains("hidden")){

        sidebar.replace("w-[100%]","w-0")
        
        
      }else{
        sidebar.replace("w-0","w-[100%]")

      
      }
      sidebar.toggle("opacity-0")
     

      mass.toggle("hidden")
            setTimeout(() => {
        sidebar.toggle("hidden")
        
      }, 100);
     
    }

  return (
    <>
      <div className={`md:w-[58vw] w-[100vw]  relative overflow-y-hidden overflow-x-hidden hidden md:block massageCont `}  >
        {selectedConversation ? <>

          <div className="w-[100%] bg-[#0f172a] rounded p-2 ">
            <button className="p-1 rounded-4xl bg-gray-100 w-10 text-black text-2xl mr-3 md:hidden"
              onClick={handleside}>{"<"}</button>
            <span className="m-l-6 text-[14px] text-gray-700">To</span> <span className="text-[16px]  text-gray-400">{selectedConversation.fullname}</span>
          </div>
          <Massages />
          <MassageInput /></> : ""}

        {selectedConversation ? '' : <NoChat />}
      </div>

    </>
  )
}
export default MassageContainer