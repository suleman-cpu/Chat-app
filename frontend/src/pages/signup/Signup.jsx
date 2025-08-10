import { Link } from "react-router-dom"
import { useState } from "react"
import { Toaster} from "react-hot-toast"
import useSignup from "../../hooks/useSignup"
import Loading from "../../components/loading/Loading"
const Login = () => {
    const { signup, loading } = useSignup()
    const [form, setform] = useState({
        fullname: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    })
    const [ticked, setTicked] = useState({ male: false, female: false })
    const handeChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
        return;
    }
    const handleCheckbox = (e) => {
        if (e.target.name != "male") {

            setform({ ...form, gender: ticked.female ? "" : "female" })

            setTicked({ ...ticked, female: !ticked.female, male: false })
            return;
        }

        setform({ ...form, gender: ticked ? "male" : "" })

        setTicked({ ...ticked, male: !ticked.male, female: false })
        return;

    }
    const handleSubmit = async function (e) {

        e.preventDefault();
        signup(form)
    }
    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div data-theme="night" className="bg-transparent">
                <div className="h-[90vh] w-[70vh]  bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 border border-gray-100 ">

                    <div className="flex items-center justify-center h-full flex-col " >
                        <h1 className="text-3xl  font-bold">Signup <span className="text-blue-800">Chatapp</span></h1>
                        <form onSubmit={handleSubmit} className="text-gray-100 flex flex-col ">

                            <label className="label text-sm ml-2 mt-4 mb-2" name="fullname" >Fullname

                            </label>
                            <input type="text" placeholder="Enter Fullname" className="input input-neutral  w-[22vw] mb-2" name="fullname" onChange={handeChange} />

                            <label className="label text-sm ml-2  mb-2" name="username">Username</label>
                            <input type="password" placeholder="Enter Username" className="input input-neutral  w-[22vw] mb-2" name="username" onChange={handeChange} />

                            <label className="label text-sm ml-2  mb-2" name="password">Password</label>
                            <input type="password" placeholder="Enter  Password" className="input input-neutral  w-[22vw] mb-2" name="password" onChange={handeChange} />

                            <label className="label text-sm ml-2  mb-2" name="confirmPassword">Confirm password</label>
                            <input type="password" placeholder="Confirm Password" className="input input-neutral  w-[22vw] mb-2 " name="confirmPassword" onChange={handeChange} />

                            <div className="flex gap-4 ml-2 mb-2 text-sm">
                                <span className="flex gap-2">
                                    <label htmlFor="" className="label" name="male">Male</label>
                                    <input type="checkbox" className="checkbox" name="male" onChange={handleCheckbox} checked={ticked.male} />

                                </span>
                                <span className="flex gap-2">
                                    <label htmlFor="" className="label" name="female" >Female</label>
                                    <input type="checkbox" className="checkbox" onChange={handleCheckbox} checked={ticked.female} name="female" />

                                </span>
                            </div>
                            <Link to={"/login"} className="text-gray-300 mb-2 hover:underline cursor-pointer ml-2 text-[11px]">Already have an account</Link>
                            <button className="btn btn-block  text-gray-300 " type="submit">Signup</button>
                            {/* <button class="btn btn-wide ">Wide</button> */}
                        </form>
                    </div>

                </div>
            </div>
            {loading ? <Loading /> : ""}

        </>
    )
}
export default Login
