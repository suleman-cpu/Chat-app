import { useEffect,useState } from "react"
import useConversations from "../zustand/useConversations"
const useGetMassages =  () => {
   const {massages,setMassages,selectedConversation} = useConversations()
   const [loading, setLoading] = useState(false)
   useEffect(() => {
     const ran = async () => {
        try {
            setLoading(true)
           
            const res =await fetch(`http://127.0.0.1:5000/api/massages/${selectedConversation._id}`,{
                method:"GET",
                credentials:"include"}
            )
            const data =await res.json()
          
            setMassages(data)
            
        } catch (error) {
            console.log(error)
        }finally{

            setLoading(false)
        }
     }
     ran()
   }, [selectedConversation])
   return {massages,loading}
}
export default useGetMassages