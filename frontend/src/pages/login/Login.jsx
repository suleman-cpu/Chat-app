import { Link } from "react-router-dom"
import { useState } from "react"
import useLogin from "../../hooks/useLogin"
import Loading from "../../components/loading/Loading"
import {Toaster} from "react-hot-toast"
const Login = () => {
    const {login,loading} = useLogin()
    const [form, setform] = useState({
            username: "",
            password: "",
            
        })
    const handleChange = (e) => {
       
        setform({ ...form, [e.target.name]: e.target.value })
        return;
    }
    const handleSubmit = async function (e) {
        e.preventDefault();
       login(form)
    }
    return (
        <>
          <Toaster
                position="top-right"
                reverseOrder={false}
            />
         <div data-theme="night" className="bg-transparent">

        <div className="h-[60vh] w-[70vh]  bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 border border-gray-100 relative">
        
        <div className="flex items-center justify-center h-[60vh] flex-col bg-transparent text-gray-300 " >
            <h1 className="text-3xl  font-bold">Login <span className="text-blue-800">Chatapp</span></h1>
            <form action="" className="text-gray-300 flex flex-col " onSubmit={handleSubmit}>
                <label className="label text-sm ml-2 mt-4 mb-2">Username</label>
                <input type="text" placeholder="Enter Username" className="input input-neutral  w-[22vw]" name="username" onChange={handleChange}/>
                <label className="label text-sm ml-2 mt-4 mb-2">Password</label>
                <input type="password" placeholder="Enter Your Password" className="input input-neutral  w-[22vw] mb-2" name="password" onChange={handleChange}/>
                <Link to={"/signup"} className="mb-2 hover:underline cursor-pointer text-sm ml-3 text-gray-400" >Don't have an account</Link>
                <button className="btn btn-block text-gray-300  hover:shadow-[3px_2px_5px_#5d6370]  " type="submit" >Login</button>
                {/* <button class="btn btn-wide bg-gray-900">Wide</button> */}
            </form>
        </div>
         </div>
 
    </div>
    {loading? <Loading/>:""}
    </>
    )
}
export default Login
