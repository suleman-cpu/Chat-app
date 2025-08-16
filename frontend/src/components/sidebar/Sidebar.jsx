import { useEffect ,useRef } from "react"
import { CiLogout } from "react-icons/ci";
import Search from "./Search"

import { Toaster } from "react-hot-toast"



import Converstions from "./Converstions"
import Loading from "../loading/Loading"

import useLogout from "../../hooks/useLogout"

const Sidebar = () => {
 
  const { logout, loading } = useLogout()
  const handleLogout = async () => {
    logout()
  }

  
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <div  className={`w-[100%] md:w-[32vw] border-1 h-[100%] flex flex-col items-center relative sidebar md:flex sideTransition `}>
        <div className="absolute bottom-[1vh] left-[5vw] md:bottom-5 md:left-4 cursor-pointor w-[90%]" onClick={handleLogout}><CiLogout className=" text-3xl cursor-pointer"/></div>
        <Search />
        <div className="w-[90%] ">
          <div className='divider px-4 m-0 mb-4 '></div>
          <Converstions />

        </div>

      </div>
      {loading ? <Loading /> : ""}
    </>
  )
}
export default Sidebar