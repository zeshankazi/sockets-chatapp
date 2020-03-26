var socket = io();
socket.on('connect',function(){
    console.log('connected to the server');

});

socket.on('disconnect',function(){
    console.log('disconneted form server')
});

socket.on('newMessage',function(msg){
    console.log('newMessage', msg)
})
