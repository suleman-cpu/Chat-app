import { useEffect,useState } from "react"
const useGetConversation =  () => {
    const [loading, setLoading] = useState(null)
    const [conversations, setconversations] = useState([])
    
    useEffect( () => {
        const getConversation =async () => { 
            try {
                setLoading(true)
                const res = await fetch("http://127.0.0.1:5000/api/users", {
                    method: 'GET',
                    credentials: "include"
                })
                const data = await res.json()
              
              
               setconversations(data)
             
            } catch (error) {
               console.log(`Error Occured in useGetConversation ${error}`);
               
            }finally{
                setLoading(false)
            }
        }

        getConversation()
    }, [])
  
        return {conversations,loading}
    
}
export default useGetConversation