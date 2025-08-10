import express from "express"

import authRoutes from "./routes/auth.route.js"
import massageRoutes from "./routes/massage.route.js"
import userRouter from "./routes/user.route.js"

import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors"

import connectToMongo from "./db/connnectToMongodb.js";
import {app,server} from "./socket/socket.js"

// const app = express();
dotenv.config();

app.use(express.json())
// app.use(cors())
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(cookieParser())
const port = process.env.Port|| 8000

app.use("/api/auth",authRoutes)
app.use("/api/massages",massageRoutes)
app.use("/api/users",userRouter)

app.get("/",async (req,res)=>{
    const token = await req.cookies.jwt
    console.log(token)
    res.json(token)
})

server.listen(port,()=>{
    console.log(`The app is listening on port ${port}`)
    connectToMongo()
})