import { TiMessages } from "react-icons/ti";

import { useAuthcontext } from "../../context/Auth.context.jsx"
import useConversations from "../../zustand/useConversations.js";

const  Nomassage = () => {
    const { Authuser } = useAuthcontext()
    const {selectedConversation} = useConversations()

    return (
        <div className="flex justify-center items-center flex-col w-[100%] h-[90%] text-[24px] sm:text-2xl   overflow-x-hidden">
            <p>Send a Massage to {selectedConversation.fullname} 👋 </p>
        
            <TiMessages className='text-6xl md:text-6xl text-center' />
        </div>
    )
}
export default Nomassage