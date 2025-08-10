import { useRef, useEffect } from "react"

import Massage from "./Massage"

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
    containerRef.current.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: 'smooth',
    });

  }, [massages]);



  return (
    <div className="pt-6 overflow-y-scroll h-[83vh]" ref={containerRef}>
      {
        massages.map((e, idx) => {
          return (<Massage key={e._id} chat={e} conversations={conversations} last={idx === massages.length - 1 ? true : false} />)
        })
      }
      <div className="h-[20vh]"></div>


    </div>
  )
}
export default Massages

