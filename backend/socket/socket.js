import { Server } from "socket.io";
import http from 'http';
import express from 'express';

const app = express();

const server = http.createServer(app)
const io = new Server(server, {
	cors: {
		origin: ["http://localhost:5173"],
		methods: ["GET", "POST"],
	},
});
function socketID(params) {
    return userSocketMap[params]
}
const userSocketMap = {};
io.on('connection',(socket)=>{
    
    const userId = socket.handshake.query.userId
    if(userId){
        userSocketMap[userId] = socket.id
    }
    io.emit("getOnlineUser",Object.keys(userSocketMap))
    socket.on("disconnect",()=>{
        delete userSocketMap[userId]
        io.emit("getOnlineUser",Object.keys(userSocketMap))
    
    })
})
export {app,server,io,socketID,express}