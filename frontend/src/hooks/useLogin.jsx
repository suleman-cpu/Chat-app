import { useState} from "react";
import {toast} from "react-hot-toast"
import { useAuthcontext } from "../context/Auth.context";

const useLogin = () => {
   const {Authuser,setAuthUser} = useAuthcontext();
  
   const [loading, setloading] = useState(false)

   const login = async ({username, password}) => {
        setloading(true)
        try {
            
            if (password.length < 6) {
               
                toast.error("Passwords must be at least 7")
                return;
            }
            let listOfFields = [username, password]
            let nameOfFields = ["username", "password"]
            for (let index = 0; index < listOfFields.length; index++) {
                const element = listOfFields[index];
                if (element === "") {
                    toast.error(`${nameOfFields[index]} is required`)
                    return;
                }
            }
            let dataToSend = {
                username,
                password,
            }
           
            let res =await fetch("http://127.0.0.1:5000/api/auth/login", {
                method: 'POST',
                credentials:"include",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            })
            if (res.status===400) {
                const error = await res.json()
                toast.error(error.error)
            }
        
            let data =await res.json()
           localStorage.setItem("user",JSON.stringify(data))
           setAuthUser(data)
            // toast.success(`Welcome, ${data.fullname}!`)
            toast(`Welcome, ${data.fullname}!`, {
  icon: ' 🙌',
});
            
        } catch (error) {
            console.log(error.json)
        }finally{
            setloading(false)
            
        }
    }
    return {login,loading}
}
export default useLogin