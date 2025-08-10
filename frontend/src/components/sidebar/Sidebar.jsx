import { useEffect } from "react"

import Search from "./Search"

import { Toaster } from "react-hot-toast"

import useConversations from "../../zustand/useConversations" 

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
      <div className="w-[30vw] border-1 h-[100%] flex flex-col items-center relative">
        <div className="absolute bottom-2 left-4 btn" onClick={handleLogout}>Logout</div>
        <Search />
        <div>
          <div className='divider px-4 m-0 mb-4'></div>
          <Converstions />

        </div>

      </div>
      {loading ? <Loading /> : ""}
    </>
  )
}
export default Sidebar