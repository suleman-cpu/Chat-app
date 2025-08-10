
import './App.css'
import Home from './pages/home/Home.jsx'
import Signup from "./pages/signup/Signup.jsx";
import Login from "./pages/login/Login.jsx";
import {useAuthcontext} from "./context/Auth.context.jsx"
import {createBrowserRouter,Navigate,RouterProvider} from 'react-router-dom'

function App() {
  const {Authuser,setAuthUser} = useAuthcontext();
  const route = createBrowserRouter([
    {path:"/",element:Authuser?<Home/>:<Navigate to="/login"/>},
    {path:"/signup",element:Authuser?<Navigate to="/"/> :<Signup/>},
    {path:"/login",element:Authuser ?<Navigate to="/"/>:<Login/>},
  ])
  
  
  return (
   <>
<div className='flex justify-center items-center h-screen '>

  <RouterProvider router={route}>
      </RouterProvider >
    </div>

   </>
  )
}

export default App
