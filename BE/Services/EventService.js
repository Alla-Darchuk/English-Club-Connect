

export default class EventService{
    constructor(eventRepository) {
        this.eventRepository = eventRepository
    }

    addEvent(newEvent){
        this.eventRepository.add(newEvent)
    }

    addAttendees(eventId, userId){
        this.eventRepository.addAttendees(eventId, userId)
    }
    deleteAttendees(eventId, userId){
        this.eventRepository.deleteAttendees(eventId, userId)
    }
    getUserEvents(id){
        let userEvents = this.eventRepository.getByUserId(id)
        console.log(userEvents)
        // if(userEvents){
        //     return userEvents
        // } else{
        //     throw {}
        // }
        return userEvents
    }   
    
    getEventsByMonth(month){
        let events = this.eventRepository.getByMonth(month)
        return events
    }

    getNextEvents(){
        let events = [],
            timeNow = new Date()

        timeNow = timeNow.getTime()
        events = this.eventRepository.getNext(timeNow)

        return events
    }

    findEvent(month, userId, level, location){
        let newEvents
        if(month){
            newEvents = this.getEventsByMonth(month)
        } else if(userId){
            userId = Number(userId)
            newEvents = this.getUserEvents(userId)
        } else if(level ||location){
            newEvents = this.eventRepository.find(location, level)
        }else{
            newEvents = this.getNextEvents()
        }
        return newEvents
    }
}