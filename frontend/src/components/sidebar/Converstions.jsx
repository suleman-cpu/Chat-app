import Conversation from "./Conversation";
import useConversation from "../../hooks/useGetConversation";
import { useEffect ,useRef} from "react";
import randomEmoji from "../../utils/emoji";
const Converstions = () => {
  const { conversations, loading } = useConversation();
 



  return (
    <div className="overflow-y-scroll overflow-x-hidden h-[60vh]">
      {conversations.map((e)=>{
        return (
          <Conversation key={e._id}  conversation={e} emo={randomEmoji()}/>
          
        )
      })}
   

    </div>
  )
}
export default Converstions