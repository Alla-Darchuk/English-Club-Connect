import events from "../Mock_data/Events.js";
import eventAttendees from "../Mock_data/EventAttendees.js";
import locations from "../Mock_data/Locations.js";

class EventRepository{

    get(){
        return events
    }

    getById(eventId){
        let eventWithThisId
        for(let i=0; i<events.length; i++){
            if(eventId===events[i].id){
                eventWithThisId = JSON.parse(JSON.stringify(events[i]))
                return eventWithThisId
            }
        }
    }

    addLocationObj(eventWithLocation){
        for(let i=0; i<locations.length; i++){
            if(eventWithLocation.location_id===locations[i].id){
                delete eventWithLocation.location_id // I need to finde what to do this line....
                eventWithLocation.location = locations[i]
                return eventWithLocation
            }
        }
    }

    getByUserId (userId){
        if (typeof(userId) != 'number') {
            // throw Error("")
            console.log("EROR!   userId is not a number")
        }
        if (!Number.isInteger(userId)) {
            // throw IllegalArgumentError()
            console.log("EROR!   userId is number but not integer")
        }
        let eventsId = [],
            userEvents = []

        for(let i=0; i<eventAttendees.length; i++){
            if(eventAttendees[i].user_id===userId){
                eventsId.push(eventAttendees[i].event_Id)
            }
        }
        for(let j=0; j<eventsId.length; j++){
            userEvents.push(this.getById(eventsId[j]))
        }
        
        for(let i=0; i<userEvents.length; i++){
            userEvents[i]=this.addLocationObj(userEvents[i])
        }
       
        return userEvents
    }

    getByMonth(month){
        let newEvents=[]

        for(let i=0; i<events.length; i++){
            if(events[i].date.getMonth() == month){
                newEvents.push(JSON.parse(JSON.stringify(events[i])))
            }
        }
        for(let i=0; i<newEvents.length; i++){
            newEvents[i] = this.addLocationObj(newEvents[i])
        }

        return newEvents
    }

    getNext(timeNow){
        let newEvents = [],
            counter = 0

        for(let i=0; i<events.length; i++){
            if(events[i].date.getTime() > timeNow){
                newEvents[counter] = JSON.parse(JSON.stringify(events[i]))
                newEvents[counter] = this.addLocationObj(newEvents[counter])
                // newEvents[counter]=events[i].id
                counter++
            }
        }
        return [newEvents, newEvents.length]
    }

    find(location, level){
        let newEvents = [],
            counter = 0
        
        for(let i=0; i<events.length; i++){
            if(
            (location===null || events[i].location_id==location)&&
            (level===null || events[i].level===level)){
                newEvents[counter] = JSON.parse(JSON.stringify(events[i]))
                newEvents[counter] = this.addLocationObj(newEvents[counter])
                counter++
            }
        }
        return newEvents
    }

    add(newEvent){
        newEvent.id = events[events.length-1].id+1
        newEvent.date = new Date(newEvent.date)
        events.push(newEvent)
        console.log("New event=")
        console.log(events[events.length-2])
        console.log(events[events.length-1])
    }

    addAttendees(eventId, userId){
        let newConection = {
            user_id : userId,
            event_Id : eventId
        }
        eventAttendees.push(newConection)
        console.log("New attendees=")
        console.log(eventAttendees[eventAttendees.length-1])
    }

    deleteAttendees(eventId, userId){
        for(let i = 0; i<eventAttendees.length; i++){
            if((eventAttendees[i].user_id == userId) &&
            (eventAttendees[i].event_Id == eventId)){
                eventAttendees.splice(i,1)
                console.log('I delete Attendees! COOL')
                break
            }
        }
    }
}
export default EventRepository