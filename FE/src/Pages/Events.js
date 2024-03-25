import React from "react";
import EventCard from "../Components/EventCard";

import "../Style/Events.css"


function Events() {
    let newEvents = [
        {
        date: new Date('August 10, 2023 20:00:00').toISOString(),
        plase: 'VDNH park',
        theme: 'Travels',
        level: 'A'
    },{
        date: new Date('August 9, 2023 19:30:00').toISOString(),
        plase: 'VDNH park',
        theme: 'Artworks',
        level: 'A'
    },{
        date: new Date('August 6, 2023 13:30:00').toISOString(),
        plase: 'VDNH park',
        theme: 'Ordering in a restaurant, cafe, hotel, etc',
        level: 'A'
    },{
        date: new Date('August 4, 2023 17:00:00').toISOString(),
        plase: 'VDNH park',
        theme: 'Family and friends',
        level: 'A'
    }]
    
    const levels = ['Сhoose', 'A', 'B', 'C']
    const locations=['Сhoose',"VDNH", "Shevchenka", "KPI Park", "Pheophany"]

    let events = newEvents.map((eventForCard, index,) => 
        <EventCard eventForCard={eventForCard} key={index}></EventCard>
    )
    let filterLevels = levels.map((level, index) => 
        <option value={level} key={index}>
                Level {level}
        </option>
    )
    let filterLocations = locations.map((location, index) => 
        <option value={location} key={index}>Location {location }</option>
    )
    return (
        <div className="events-page"  >
            <h1> This is a Events component</h1>
            <div className="filters">
                <select className="my-select">
                    {filterLevels}
                </select>
                <select className="my-select">
                    {filterLocations}
                </select>
            </div>
            <div className="event-cards">
                {events}
            </div>
        </div>
    )
}
 export default Events