const path= require('path');
const http=require('http');
const express= require('express');
const socketIO = require('socket.io');
const publicpath=path.join(__dirname , '../public');
const port = process.env.PORT || 3400

var app= express();
var server= http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicpath));

io.on('connection',(socket)=>{
 console.log('new user connected');
 
 socket.on('disconnect',()=>{
     console.log('user has disconneted')
 })


})

server.listen(port,()=>{
    console.log(`Server is up on  ${port}`)
})
