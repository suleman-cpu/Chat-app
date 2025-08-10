import { useState } from "react";
import { toast } from "react-hot-toast"
import { useAuthcontext } from "../context/Auth.context";

const useSignup = () => {
    const { Authuser, setAuthUser } = useAuthcontext();

    const [loading, setloading] = useState(false)

    const signup = async ({ fullname, username, password, confirmPassword, gender }) => {
        setloading(true)
        try {
            if (password !== confirmPassword) {
                toast.error("Password do not match")
                return;
            }

            if (password.length < 6) {
                console.log("pas")
                toast.error("Passwords must be at least 7")
                return;
            }
            let listOfFields = [fullname, username, password, confirmPassword, gender]
            let nameOfFields = ["fullname", "username", "password", "confirmPassword", "gender"]
            for (let index = 0; index < listOfFields.length; index++) {
                const element = listOfFields[index];
                if (element === "") {
                    toast.error(`${nameOfFields[index]} is required`)
                    return;
                }
            }
            let dataToSend = {
                fullname,
                username,
                password,
                confirmPassword,
                gender,
            }

            let res = await fetch("http://127.0.0.1:5000/api/auth/signup", {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            })
            if (res.status === 400) {
                const error = await res.json()

                toast.error(error.error)
            }

            let data = await res.json()
            localStorage.setItem("user", JSON.stringify(data))
            setAuthUser(data)
            toast(`Welcome, ${data.fullname}!`, {
                icon: ' 🙌',
            });
            console.log(Authuser)

        } catch (error) {
            console.log(error.json)
        } finally {
            setloading(false)

        }
    }
    return { signup, loading }
}
export default useSignup