const socket =io('http://localhost:8000');

const form = document.getElementById('send - container');
const messageInput = document.getElementById('messageInput')
const container = document.querySelector('.container')
  

const append =(message , position)=>{
    const messageElement =document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(postion);
    MessageContainer.append(messageElement);


}
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message = messageInput.value;
    append(`you: $(message)` , 'right');
    socket.emit('send' ,message)
})


const name = prompt("Enter your name to join");
socket.emit('new-user-joined' , name);
 

  socket.on ('user-joined', name=>{
    append(`${name} join the chat`, 'right')
  })

  socket.on ('recevie', data=>{
    append( `${data.name}: ${data.message}`, 'left')
  })

  socket.on ('left', data=>{
    append( `${name}: left the chat`, 'left')
  })