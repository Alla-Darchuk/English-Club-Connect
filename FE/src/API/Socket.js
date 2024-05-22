
const socket = require('socket.io-client')('http://localhost:8080')

socket.on('connect', ()=>{
    console.log('Socket is connected')
    
})

export function authorize(userInformation) {
    socket.emit('authorization', userInformation)
}

export function SendMessage(obj){
    let date = new Date()
    obj.timestamp = date
    socket.emit('message:created', obj)
}

export function GetUserHistory(userId, handler){
    socket.on('userHistory', handler)
    socket.emit('getHistory', userId)
}

export function onOwnHistory(handler) {
    socket.on('history', handler)
}

export function onUnreadChats(handler) {
    socket.on('history', handler)
}

export function onIncomingMessage(handler) {
    socket.on('receive_message', handler)
}

export default socket

