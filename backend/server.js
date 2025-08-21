// import express from "express"

import authRoutes from "./routes/auth.route.js"
import massageRoutes from "./routes/massage.route.js"
import userRouter from "./routes/user.route.js"

import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors"
import path from "path"

import connectToMongo from "./db/connnectToMongodb.js";
import {app,server,express} from "./socket/socket.js"

const __dirname = path.resolve();

dotenv.config();

app.use(express.json())

// app.use(cors({
//     origin:'http://localhost:5173',
//     credentials:true
// }))
app.use(cors({
    origin:'http://localhost:5000',
    credentials:true
}))
app.use(cookieParser())
const port = process.env.Port|| 8000

app.use("/api/auth",authRoutes)

app.use("/api/massages",massageRoutes)

app.use("/api/users",userRouter)

app.use(express.static(path.join(__dirname, "/frontend/dist")));


// app.get("/:catchAll(*)",(req,res)=>{
//     res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// })
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(port,()=>{
    console.log(`The app is listening on port ${port}`)
    connectToMongo()
})