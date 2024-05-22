import React from "react";
import EventCard from "../Components/EventCard";
import { useState, useEffect } from "react";

import "../Style/Events.css"
import FindEvents from "../API/FindEvents";
import GetLevels from "../API/GetLevels";
import GetLocations from "../API/GetLocations";


function Events() {
    
    const [newEvents, setNewEvents] = useState([])
    const [levels, setLevels] = useState([{id:'', description:'Сhoose'}])
    const [locations, setLocations] = useState([{ id: '', name: 'Сhoose'}])
    const [filterObgect, setFilterObject] = useState({
        location:locations[0].id,
        level: levels[0].id
    })

    let events
    useEffect(()=>{
        GetLevels().then(e=>{
            setLevels(levels.concat(e))
        })
        GetLocations().then(e=>{
            setLocations(locations.concat(e))
        })
    },[])

    useEffect(()=>{
        FindEvents(filterObgect).then(e=>{
            setNewEvents(e)
        })
    },[filterObgect])
    
    if(newEvents.length > 0){
        events = newEvents.map((eventForCard) => 
            <EventCard eventForCard={eventForCard} key={eventForCard.id}></EventCard>
        )
    } else {
        events = <h2>Sorry, no events were found for your filters...</h2>
    }
    
    let filterLevels = levels.map((level) => 
        <option value={level.id} key={level.id}>
                Level {level.description}
        </option>
    )
    let filterLocations = locations.map((location) => 
        <option value={location.id} key={location.id}>
        Location {location.name}</option>
    )
    return (
        <div className="events-page"  >
            <h1> This is a Events component</h1>
            <div className="filters">
                <select 
                className="my-select" 
                value={filterObgect.level} 
                onChange={e=>{setFilterObject({...filterObgect, level:e.target.value}) }}>
                    {filterLevels}
                </select>
                <select 
                className="my-select" 
                value={filterObgect.location} 
                onChange={e=>{setFilterObject({...filterObgect, location:e.target.value}) }} >
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