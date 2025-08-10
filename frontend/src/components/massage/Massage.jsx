import {useAuthcontext} from "../../context/Auth.context"
import {extractTime} from "../../utils/formatTime.js"
const Massage = ({chat,conversations,last}) => {
    

    const {Authuser} = useAuthcontext()
    const MassageSender = conversations.filter(e=>e._id===chat.sender)[0]

    const isMyMassage = chat.sender===Authuser._id;
    const shake = chat.shake?"shake":""
    return (
        <div className={`${last?"last":""} ${shake}`}>
            <div className={` ${isMyMassage?"chat-start":"chat-end"} px-10 py-2 chat `}>
                <div className=" avatar chat-image  ">
                    <div className={`rounded-full w-12 `}>
                        <img src={MassageSender?MassageSender.profilePic:Authuser.profilePic}  alt="ProfilePic" className="  " />
                        {/* <img src="../../public/Batman_1591.jpeg" alt="ProfilePic" className="  " /> */}
                    </div>
                </div>
               <div className={`chat-bubble min-w-30 ${MassageSender?"bg-sky-500":""}`}>{chat.massage}</div>
                <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{extractTime(chat.createdAt
)}</div>
            </div>
        </div>
    )
}
export default Massage
