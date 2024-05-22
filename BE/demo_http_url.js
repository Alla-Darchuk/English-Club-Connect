import http from 'http';
import cors from "cors"
import { pipeline } from 'stream';
import BufferList from 'bl';
import { Server } from "socket.io";
// import {io} from 'socket.io';

//Repository
import UserRepository from './Repository/UserRepository.js';
import EventRepository from './Repository/EventRepository.js';
import LevelRepository from './Repository/LevelRepository.js';
import LocationRepository from './Repository/LocationRepository.js';
import QuestionRepository from './Repository/QuestionRepository.js';
import SuggestionRepository from './Repository/SuggestionRepository.js';
import MessageRepository from './Repository/MessageRepository.js';
//Services
import AuthorizationService from './Services/AuthorizationService.js';
import UserService from './Services/UserService.js';
import EventService from './Services/EventService.js';
import LevelService from './Services/LevelService.js';
import LocationService from './Services/LocationService.js';
import QuestionService from './Services/QuestionService.js';
import SuggestionService from './Services/SuggestionService.js';
//Router
import Router from './Router.js';

// import onConnection from './Socket.js';

//Create repository:
const userRepository = new UserRepository();
const eventRepository = new EventRepository();
const levelRepository = new LevelRepository();
const locationRepository = new LocationRepository();
const questionRepository = new QuestionRepository();
const suggestionRepository = new SuggestionRepository();
const messageRepository = new MessageRepository()
//Create services
const authorizationService = new AuthorizationService(userRepository);
const userServise = new UserService(userRepository);
const eventService = new EventService(eventRepository);
const levelServise = new LevelService(levelRepository);
const locationService = new LocationService(locationRepository);
const questionService = new QuestionService(questionRepository);
const suggestionServise = new SuggestionService(suggestionRepository);
//Create Router
const router = new Router(authorizationService, 
                            userServise, eventService, 
                            levelServise, locationService,
                            questionService, suggestionServise);
//Create server
const server = http.createServer(
    function(req, resp) {
        cors()(
        req, resp,
        ()=>{
            let buffer = new BufferList()
            pipeline(
                req,
                buffer,
                (err) => {
                    if (err) {
                        console.error('Error buffering request body:', err);
                        resp.statusCode = 500;
                        resp.end('Internal Server Error');
                        return;
                    }
        
                    // Process the buffered body
                    const reqBody = buffer.toString();
                    router.route(req, resp, reqBody)
                }
            )
        });
    }).listen(8080)
var sockets =[]
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods:["GET", "POST"]
    }
});
io.on('connect', onConnection);

function onConnection(socket){
    console.log('New connection on socket! ')

    socket.on('authorization', user =>{
        addSocket(socket, user)
        let history
        if(user.role ==='admin'){
            history = messageRepository.getUnread()
        } else {
            history = messageRepository.getUserMessage(user.id)
        }
        socket.emit('history', history)
    })

    socket.on('getHistory',userId =>{
        messageRepository.deleteFromUnread(userId)
        let history = messageRepository.getUserMessage(userId)
        socket.emit('userHistory', history)
    })

    socket.on('message:created', data => {
        let sender = findUser(socket),
        recipient
        // console.log(sender)
        if(sender){
            if (sender.role == 'admin') {
                console.log('sender.role = admin')
                data.typeForUser = 'in'
                recipient =  getSocket(data.userId)
                
            } else if (sender.role == 'user') {
                console.log('sender.role = user')
                data.typeForUser = 'out'
                recipient =  getSocket(0)
            }
            messageRepository.addMessage(data)
            socket.emit('receive_message',data)
        } else{
            socket.emit('Error','You are not autorized, please restart page!')
        }
        

        if(recipient){
            recipient.emit('receive_message',data)
        } else {
            console.log('Attention: Recipient is not online!')
            if(sender.role == 'user'){
                messageRepository.addToUnread(data)
            }
        }
        console.log('New message: '+data.message )
    })

    socket.on("disconnect", () => {
        let userIndex = getUserIndex(socket)
        if(userIndex){
            sockets.splice(userIndex, 1)
            // console.log('I delete user')
        } 
        // console.log('User disconnect')
        
    });
}

function addSocket(socket, user){
    let isSocket = false
    for(let i = 0; i<sockets.length; i++){
        if(sockets[i].id == user.id){
            sockets[i].socket = socket
            isSocket = true
            break
        }
    }
    if(!isSocket){
        sockets.push({
            socket: socket,
            id: user.id,
            role: user.role
        })
    }
    
}

function findUser(socket){
    for(let i = 0; i < sockets.length; i++){
        if(sockets[i].socket === socket){
            return sockets[i]
        }
    }
    return false
}

function getSocket(id){
    for(let i = 0; i < sockets.length; i++){
        if(sockets[i].id == id){
            return sockets[i].socket
        }
    }
}
function getUserIndex(socket){
    for(let i = 0; i < sockets.length; i++){
        if(sockets[i].socket === socket){
            return i
        }
    }
}


     
   


    