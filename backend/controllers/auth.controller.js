import Users from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenandSetCookie from "../utils/generateToken.js"
import User from "../models/user.model.js";
export const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // harsh
        let user = await Users.findOne({ username: username })
        if (user) {
            return res.status(400).json({ error: "Username already taken!" });
        }

        let picMale = `https://avatar.iran.liara.run/public/boy?username=${username}`
        let picFemale = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const newUser = new Users({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? picMale : picFemale
        })

        if (newUser) {
            generateTokenandSetCookie(res, newUser.id)
            await newUser.save()
            res.status(201).json({
                _id: newUser.id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic,
            })
        }
    } catch (error) {
        console.log(`Error in  the sign up controller` + error);
        res.status(500).json({ error: "Internal server error" })
    }
}
export const login = async (req, res) => {
    try {
        const { username, password } = req.body

        const user = await User.findOne({ username })
        const isPasswordCorrect = await bcrypt.compare(password, user ? user.password : "")

        if (!user || !isPasswordCorrect) {
            res.status(400).json({ error:" Invalid password or username" })
        }

        generateTokenandSetCookie(res, user.id)

        res.status(201).json({
            _id: user.id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic,
        })
    } catch (error) {
        console.log(`Error in  the login up controller` + error);
        res.status(500).json({ error: "Internal server error" })
    }
}
export const logout = async (req, res) => {
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({massage:"Logout successfully"})
       
    } catch (error) {
         console.log(`Error in  the logout up controller` + error);
        res.status(500).json({ error: "Internal server error" })
    }
}