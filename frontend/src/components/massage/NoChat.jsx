import {useAuthcontext} from "../../context/Auth.context.jsx"
import { TiMessages } from "react-icons/ti";
const NoChat = () => {
  const {Authuser} = useAuthcontext()


  return (
    <div className=" justify-center items-center flex-col w-[100%] text-2xl hidden md:flex h-[100%]">
      <p>Welcome 👋 {Authuser.fullname}</p>
      <p>Select a chat to start messaging</p>
    <TiMessages className='text-3xl md:text-6xl text-center' />
    </div>
  )
}
export default NoChat