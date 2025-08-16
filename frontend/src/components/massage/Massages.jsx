import { useRef, useEffect } from "react"

import Massage from "./Massage"
import Nomassage from "./Nomassages"
import MessageSkeleton from "../skeletons/MessageSkeleton"

import useConversations from "../../zustand/useConversations"

import useGetMassages from "../../hooks/useGetMassages"
import useGetConversation from "../../hooks/useGetConversation"
import realTimeMassage from "../../hooks/realTimeMassage"

const Massages = () => {
  const { massages, loading } = useGetMassages()
  const { selectedConversation } = useConversations()
  const { conversations } = useGetConversation();
  realTimeMassage()

  const containerRef = useRef(null);


  useEffect(() => {

    setTimeout(() => {
    containerRef.current.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: 'smooth',
    });

  }, 400);

  }, [massages]);
  


  return (
    <div className="pt-6 overflow-y-scroll h-[83vh]" ref={containerRef}>
      
      {loading?<MessageSkeleton/>:<>{

        massages.length===0?<Nomassage/>:<>{massages.map((e, idx) => {
          return (<Massage key={e._id} chat={e} conversations={conversations} last={idx === massages.length - 1 ? true : false} />)
        })} 
        <div className="h-[20vh]"></div>
        </>
        
      }</>}


    </div>
  )
}
export default Massages

