import React, { useState } from "react";
import UserPhoto from "../Components/UserPhoto";
import { Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "../Style/Account.css"

import HistoryEventItem from "../Components/HistoryEventList";
import NextEventItem from "../Components/NextEventList"

function Account() {
    const navigate = useNavigate()
    let history = [
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
    }
    ]
    const[newEvents, setNewEvents] = useState([
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
    }
    ])

    let historyEventList= history.map((event, index) =>
        <HistoryEventItem event={event} key={index} />)
    
    let nextEventList= newEvents.map((event, index) =>
        <NextEventItem event={event} key={index} 
            removeMe={() => removeEvent(index)}/>)

    function removeEvent(index) {
        console.log(newEvents)
        console.log('function remove work   ' + 'index=' + index)
        setNewEvents((newEvents) => newEvents.filter(
            (newevent, pos) => pos != index))
      
    }
    
    return (
        <div className="account-page">
                <div className="user-information">
                    <UserPhoto className="photo"></UserPhoto>
                    <div className="information">
                        <p>Name</p>
                        <p>Email@gmail.com</p>
                        <p>+380999999999 </p>
                    </div>  
                    <div className="information-button-grup">
                        <Button className='sign-button' size="lg" onClick={() => navigate("calendar")}>Your Calendar</Button>
                        <Button className='sign-button' size="lg" >Edit account</Button>
                    </div>
                </div>
                <div className="history">
                    <h3>Your history</h3>
                    <table className="history-table ">
                        <thead >
                            <tr className="table-tr">
                                <th className="table-th">Date & Time</th>
                                <th className="table-th">Level</th>
                                <th className="table-th">Location</th>
                                <th className="table-th">Theme</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historyEventList}
                        </tbody>
                    
                    </table>
                </div>
                <div className="next-events">
                    <h3>Your next events</h3>
                    <table className="next-event-table">
                        <thead >
                            <tr className="table-tr">
                                <th className="table-th">Date & Time</th>
                                <th className="table-th">Level</th>
                                <th className="table-th">Location</th>
                                <th className="table-th">Theme</th>
                                <th className="table-th">Delete event</th>
                            </tr>
                        </thead>
                        <tbody>
                            {nextEventList}
                        </tbody>
                    
                    </table>
                </div>
            
        </div>
    )
}

export default Account