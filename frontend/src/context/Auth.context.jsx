import { createContext, useEffect,useContext,useState } from "react";


const AuthContext = createContext();

export function useAuthcontext() {
    return useContext(AuthContext)
}
export function AuthContextprovider({children}) {
    const [Authuser, setAuthUser] = useState(null);
    const ran = async () => {
        let isLogedin =await JSON.parse(localStorage.getItem("user"))
        setAuthUser(isLogedin?isLogedin:null);
        
    }
    useEffect(() => {
      ran()
      
    }, [])
    
    
    return (
        <AuthContext.Provider value={{Authuser,setAuthUser}}>
            {children}
        </AuthContext.Provider>
    )

}