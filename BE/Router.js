import url from 'url';
// import events from './Mock_data/Events';
// import UserService from './Services/UserService';

export default class Router {
    constructor(authorizationService, userServise, eventService, levelService, locationService, questionService, suggestionService){
        this.authorizationService = authorizationService,
        this.userServise = userServise,
        this.eventService = eventService,
        this.levelService = levelService,
        this.locationService = locationService,
        this.questionService = questionService,
        this.suggestionService = suggestionService
    }
    route = (req, res, reqBody) => {
        if (req.method === 'OPTIONS') {
            res.writeHead(204, headers);
            console.log('THIS IS OPTIONS')
            res.end();
            return;
        }
        
        let reqUrl = url.parse(req.url, true)
        // console.log(reqUrl)
        //login
        if (reqUrl.pathname === '/login' && req.method == 'GET') {
            this.authorizationService.login(req, res)
            return
        }
        //register
        if (reqUrl.pathname === '/user' && req.method == 'POST'){
            let login = reqUrl.query.login,
                password = reqUrl.query.password

            this.userServise.register(login, password)
            res.statusCode = 201;
            res.end()
            // res.status(201).send('New user was created')
        }
        // change user
        if (reqUrl.pathname === '/user' && req.method == 'PUT'){
            let userId = reqUrl.query.id,
                newUser = JSON.parse(reqBody)
            this.userServise.changeUser(userId, newUser)
            res.statusCode = 202;
            res.end()
            // res.status(202).send("Changes accepted successfully")
        }
        //get information about 1 user
        //get users & users role
        if (reqUrl.pathname ==='/user' && req.method == 'GET'){
            let userId = reqUrl.query.id ? reqUrl.query.id : null,
            user = this.userServise.getUser(userId)
            res.end(JSON.stringify(user))
        }
        //add event
        if (reqUrl.pathname ==='/event' && req.method == 'POST'){
            let newEvent = JSON.parse(reqBody)
            this.eventService.addEvent(newEvent)
            res.statusCode = 201;
            res.end()
            // res.status(201).send('New event was created')
        }
        //add Attendees
        if (reqUrl.pathname ==='/event/participate' && req.method == 'PUT'){
            let userId = reqUrl.query.userId,
                eventId = reqUrl.query.eventId
            this.eventService.addAttendees(eventId, userId)
            res.statusCode = 202;
            res.end()
            // res.status(202).send("Changes accepted successfully")
        }
        if (reqUrl.pathname ==='/event/participate' && req.method == 'DELETE'){
            let userId = reqUrl.query.userId,
                eventId = reqUrl.query.eventId
            this.eventService.deleteAttendees(eventId, userId)
            res.statusCode = 202;
            res.end()
            // res.status(202).send("Changes accepted successfully")
        }
        //find events...
        if (reqUrl.pathname ==='/event' && req.method == 'GET'){
            
            let month = reqUrl.query.month ? reqUrl.query.month : null,
                userId = reqUrl.query.userId ? reqUrl.query.userId : null,
                level = reqUrl.query.level ? reqUrl.query.level : null,
                location = reqUrl.query.location ? reqUrl.query.location : null,
               
                events = this.eventService.findEvent(month, userId, level, location)
                
            res.end(JSON.stringify(events))
        }
        //get levels
        if (reqUrl.pathname ==='/level' && req.method == 'GET'){
            let levels = this.levelService.getLevels()
            res.end(JSON.stringify(levels))
        }
        //get location
        if (reqUrl.pathname ==='/location' && req.method == 'GET'){
            let locations = this.locationService.getLocation()
            res.end(JSON.stringify(locations))
        }
        //get questions
        if (reqUrl.pathname ==='/question' && req.method == 'GET'){
            let questions = this.questionService.getQuestions()
            res.end(JSON.stringify(questions))
        }
        if (reqUrl.pathname ==='/event/suggestion' && req.method == 'POST'){
            let newSuggestion = JSON.parse(reqBody)
            this.suggestionService.addSuggestion(newSuggestion)
            res.statusCode = 201;
            res.end()
            // res.status(201).send('New suggestion was created')
        }
        if (reqUrl.pathname ==='/event/suggestion' && req.method == 'GET'){
            let suggestions = this.suggestionService.getSuggestions()
            res.end(JSON.stringify(suggestions))
        }
        if (reqUrl.pathname ==='/event/suggestion' && req.method == 'DELETE'){
            let suggestionId = reqUrl.query.suggestionId
            this.suggestionService.deleteSuggestion(suggestionId)
            res.statusCode = 202;
            res.end()
            // res.status(202).send("Changes accepted successfully")
        }



        // //events by month for calendar
        // if (reqUrl.pathname === '/eventByMonth' && req.method == 'GET') {
        //     let events,
        //         month = Number(reqUrl.query.month)

        //     month = Number.isInteger(month) ? month : null
        //     events = this.eventService.getEventsByMonth(month)
            
        //     res.end(JSON.stringify(events))
        //     return
        // }
        // //events by user id
        // if (reqUrl.pathname === '/eventById' && req.method == 'GET'){
        //     let id = Number(reqUrl.query.id),
        //         events = this.eventService.getUserEvents(id)

        //     res.end(JSON.stringify(events))
        //     return

        // }
        // //next events
        // if (reqUrl.pathname === '/nextEvents' && req.method == 'GET') {
        //     let events = this.eventService.getNextEvents()

        //     res.end(JSON.stringify(events))
        //     return
        // }
        
        // res.end("hello")
    }

}