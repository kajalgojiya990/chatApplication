const { Socket } = require("socket.io");

const io = require("socket.io")(8000)
const users ={};

io.on('connection' ,Socket =>{
    Socket.io('new-user-joined',name =>{
        console.log("New user",name);
        users[Socket.io] = name;
        Socket.brodcast.emit('user-joines',name);
    });
    Socket.io('send', message =>{
        Socket.brodcast.emit('receive',{message :message , name:user[Socket.io]})
    });
})
