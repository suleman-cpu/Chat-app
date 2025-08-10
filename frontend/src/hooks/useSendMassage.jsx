import { useEffect, useState } from "react"
import useConversations from "../zustand/useConversations"
const useSendMassages = () => {
    const {selectedConversation,massages,setMassages } = useConversations()

    const [loading, setLoading] = useState(false)
    async function sendMassage(massage) {

        try {
            setLoading(true)
            const res = await fetch(`http://127.0.0.1:5000/api/massages/send/${selectedConversation._id}`, {
                method: "POST",
                credentials: "include",
    
           
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({massage})

            })
        
            const data = await res.json()

            data.shake = true;
            
            setMassages([...massages, data]);
            
        } catch (error) {
            console.log(error)
        } finally {

            setLoading(false)
        }
    }





    return { sendMassage, loading }
}
export default useSendMassages