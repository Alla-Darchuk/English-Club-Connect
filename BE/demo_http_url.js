import http from 'http';
import { pipeline } from 'stream';
import BufferList from 'bl';

//Repository
import UserRepository from './Repository/UserRepository.js';
import EventRepository from './Repository/EventRepository.js';
import LevelRepository from './Repository/LevelRepository.js';
import LocationRepository from './Repository/LocationRepository.js';
import QuestionRepository from './Repository/QuestionRepository.js';
import SuggestionRepository from './Repository/SuggestionRepository.js';
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

//Create repository:
const userRepository = new UserRepository();
const eventRepository = new EventRepository();
const levelRepository = new LevelRepository();
const locationRepository = new LocationRepository();
const questionRepository = new QuestionRepository();
const suggestionRepository = new SuggestionRepository();
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
http.createServer(
    (req, resp) => {
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
    }).listen(8080)


    