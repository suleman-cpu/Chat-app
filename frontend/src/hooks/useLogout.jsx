import { useState} from "react";
import {toast} from "react-hot-toast"
import { useAuthcontext } from "../context/Auth.context";

const useLogout = () => {
   const {Authuser,setAuthUser} = useAuthcontext();
  
   const [loading, setloading] = useState(false)

   const logout = async () => {
        setloading(true)
        try {
            
            
           
            let res =await fetch("http://127.0.0.1:5000/api/auth/logout", {
                method: 'POST',
                credentials:"include"
            })
            if (res.status===400) {
                const error = await res.json()
                toast.error(error.error)
            }
        
           
           localStorage.removeItem("user")
           setAuthUser(null)
            toast.success("You are now signed out")
            
        } catch (error) {
            console.log(error.json)
        }finally{
            setloading(false)
            
        }
    }
    return {logout,loading}
}
export default useLogout