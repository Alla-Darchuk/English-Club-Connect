import React, { useEffect, useState } from "react";
import UserPhoto from "../Components/UserPhoto";
import { Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userInformationSlice } from "../redux-store/userInformationSlice";
import { getUserInformation } from "../redux-store/userInformationSlice";
import GetUserEvents from "../API/GetUserEvents";
import GetUser from "../API/GetUser";

import "../Style/Account.css"

import HistoryEventItem from "../Components/HistoryEventList";
import NextEventItem from "../Components/NextEventList"
import DeleteUsersEvent from "../API/DeleteUserEvent";

function Account() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "Name",
        email: 'email.com',
        phone: '+000000000'
    })
    const [events,setEvents] = useState({
        history:[],
        next:[]
    })
    const firstInformation = useSelector(getUserInformation)

    useEffect(() => {
        let allEvents,
        timeNow = new Date().getTime(),
        history = [],
        next = []
        GetUserEvents(firstInformation.id).then(e =>{
            allEvents = e
            // console.log(allEvents)
            for(let i=0; i<allEvents.length;i++){
                if(timeNow<allEvents[i].date.getTime()){
                    next.push(allEvents[i])
                }else{
                    history.push(allEvents[i])
                }
            }
            setEvents({history, next})
        })
        GetUser(firstInformation.id).then(e => {
            setUser(e)

        })
    },[])
    // console.log('user = '+firstInformation.id)
    // console.log(user)

    let historyEventList= events.history.map((event) =>
        <HistoryEventItem event={event} key={event.id} />)
    
    let nextEventList= events.next.map((event) =>
        <NextEventItem event={event} key={event.id} 
            removeMe={() => removeEvent(event.id)}/>)

    let userPhoto = user.photo ? 
        <div className="photo"><img
                src={user.photo}
                className='photo'
            ></img>
        </div> : <UserPhoto className="photo" ></UserPhoto>
    

    function removeEvent(id) {
        let newNextEvents = [...events.next].filter((oneEvent) => oneEvent.id != id)
        // newNextEvents = newNextEvents
        setEvents(events=>({
            ...events,
            next: newNextEvents
        }))
        DeleteUsersEvent(firstInformation.id, id)
    }
    function signOut(){
        dispatch(userInformationSlice.actions.set({id: '', role: ''}))
        navigate("/signin") 
    }
    
    return (
        <div className="account-page">
                <div className="user-information">
                    {userPhoto}
                    <div className="information">
                        <p>{user.name }    {user.surname}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div>  
                    <div className="information-button-grup">
                        <Button className='sign-button' size="lg" onClick={() => navigate("calendar", {state: {id: firstInformation.id}})}>Your Calendar</Button>
                        <Button className='sign-button' size="lg" >Edit account</Button>
                        <Button className='sign-button' size="lg" onClick={signOut}> Sign Out</Button>
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