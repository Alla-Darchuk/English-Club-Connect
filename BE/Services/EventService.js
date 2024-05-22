

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
        // console.log(userEvents)
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

    findEvent(month, userId, level, location){
        let newEvents,
        timeNow = new Date().getTime()

        if((month !== null) && (userId !== null)){
            // console.log('month&userId => month='+month+'    userId = '+userId )
            newEvents = this.eventRepository.getUsersCalendarEvents(userId, month)
        } else if(month!==null){
            // console.log('Only month read.. ->getEventsByMonth')
            newEvents = this.getEventsByMonth(month)
        } else if(userId!==null){
            // console.log('Only userId read.. ->getUserEvents')
            newEvents = this.getUserEvents(userId)
        } else if(level !== null || location !== null){
            newEvents = this.eventRepository.find(location, level, timeNow)
        }else{
            newEvents = this.eventRepository.getNext(timeNow)
        }
        return newEvents
    }
}