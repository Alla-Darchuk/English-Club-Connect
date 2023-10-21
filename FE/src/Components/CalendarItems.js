import React, { useState } from "react";
import PropTypes from 'prop-types';
import GetCalendarEvents from "./GetCalendarEvents";
// import EventInDays from "./EventInDays";
import background from "../img/concentrated-students-studying-outdoors.jpg"


function CalendarItems(props) {

    

    const date = props.date
    const month = props.month
    let hasEvent = false
    let eventsOfDays
    let time = ''
    let style
    let eventList
    
    const newEvents = GetCalendarEvents(month)
    
    for (let i = 0; i < newEvents.length; i++){
        let eventsDate = new Date(newEvents[i].date)
        if (month== eventsDate.getMonth() && date == eventsDate.getDate()){
            hasEvent = true
            let hours = eventsDate.getHours()
            if (hours < 10) {
                hours= '0'+hours
            }
            let minutes = eventsDate.getMinutes()
            if (minutes < 10) {
                minutes= '0'+minutes
            }
            time=hours+':'+minutes
            eventsOfDays={
                date:date,
                time:time
            }
        } 
    } 
    
    if (hasEvent) {
        style = {
            background: "url(" + background + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "15px"
        }
        eventList = 'eventList'
        // eventList = eventsOfDays.map((event, index) =>
        // <EventInDays  event={event} key={index} />)
    } else {
        eventList = <div className="date">
            <p>{date}</p>
        </div>
    }


    return (
        <div style={style}>
            <div className="calendar-day" >
                {/* {eventList}  */}
                <div className="date">
                    <p>{date}</p>
                </div>
                {/* <div className="time">{time}</div> */}

            </div>
        </div>
)
}

CalendarItems.propTypes = {
    date:  PropTypes.number,
    month:  PropTypes.number,
    index: PropTypes.number
}

export default CalendarItems