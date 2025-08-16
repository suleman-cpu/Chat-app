import { createContext, useEffect,useContext,useState } from "react";
import { useAuthcontext } from "./Auth.context.jsx";
import io from "socket.io-client"
const SocketContext = createContext();

export function useSocketcontext() {
    return useContext(SocketContext)
}
export function SocketContextprovider({children}) {
   const [socket, setSocket] = useState(null)
   const [online, setOnline] = useState([])
   const {Authuser}= useAuthcontext()
   
   useEffect(() => {

        // console.log(Authuser)
        async function ran() {
            
            if (Authuser) {
              const socket =await io("http://localhost:5000/",{
                  query:{userId:Authuser._id}
              }) 
      
              socket.on("getOnlineUser",(users)=>{
                  setOnline(users)
              })
      
              setSocket(socket)
              return ()=> socket.close() 
      
          }else{
              if(socket){
              
                  socket.close()
                  setSocket(null)
              }
      
            }
        }
        ran()
    }, [Authuser])
    
    return (
        <SocketContext.Provider value={{socket,online}}>
            {children}
        </SocketContext.Provider>
    )

}