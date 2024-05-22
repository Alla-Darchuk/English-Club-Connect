export default function onConnection(socket){
    console.log('New connection on socket! ')

    socket.on('message:created', message => {
        console.log('New message: '+ message)

        // io.emit('message:getting')
    })
    
    // const {room} = socket.handshake.query
    // console.log('room' )
    // console.log(socket.handshake)
    // console.log(room)
}