import React, { useEffect, useState } from "react";
import '../Style/Calendar.css'
import FindEvents from "../API/FindEvents.js";
import CalendarItems from "../Components/CalendarItems";
import CleanDay from "../Components/CleenDay";
import OneEventOfDay from "../Components/OneEventOfDay";
import Details from '../Components/Details';
import { useLocation, useSearchParams } from "react-router-dom";


function  Calendar(){
    const data = new Date()
    const year = data.getFullYear()
    const [month, setMonth] = useState(data.getMonth())
    // console.log('first month = '+month)
    const [active, setActive] = useState(false)
    let thisMonth = new Date(year, month)
    let nextMonth = new Date(year, month + 1)
    const [eventForDetail, setEventForDetail] = useState()
    let userId = useLocation().state?.id 
    // console.log('userId = '+userId)
    const [apiObject, setApiObject] = useState({
        month: month,
        userId: userId
    })
    
    
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    let monthName = months[month]
    let [events, setEvents] = useState([]);
    
    useEffect(()=>{
        setApiObject({
            ...apiObject,
            month: month
        })
    },[month])
    useEffect(() => {
        FindEvents(apiObject).then(e => {
            setEvents(e)
        })
    },[apiObject])
    
    // console.log(apiObject)
    // console.log(events)
    let daysOfPrevMonth = (thisMonth.getDay() + 6) % 7
    let daysInMonth = (nextMonth - thisMonth) / (1000 * 3600 * 24)
    

    let table = [],
        tr = [],
        dayOfMonth = 1 - daysOfPrevMonth
    
    for (let i = 0; i < daysOfPrevMonth; i++){
        tr.push(<td key={i - daysOfPrevMonth}></td>)
    }
    
    let week = 1, dayOfWeek = daysOfPrevMonth + 1;
    for (dayOfMonth = 1; dayOfMonth <= daysInMonth; dayOfMonth++) {
        let eventsOfDay = []
        for (let i = 0; i < events.length; i++) {
            let eventDate = new Date(events[i].date)
            if (eventDate.getDate() === dayOfMonth) {
                eventsOfDay.push(events[i])
            }
        }

        if (eventsOfDay.length == 0) {
            tr.push(<td key={dayOfWeek}><CleanDay date={dayOfMonth}  key={dayOfMonth}/></td>)  
        } else if (eventsOfDay.length == 1) {
            tr.push(
                <td key={dayOfWeek}>
                    <OneEventOfDay date={dayOfMonth} key={dayOfMonth} event={eventsOfDay[0]}
                    show={CreateModal} />
                </td>) 
        }

        dayOfWeek++;
        if (dayOfWeek > 7) {
            table.push(<tr key={week} className="calendar-weeks">{tr}</tr>)
            dayOfWeek = 1;
            week++;
            tr = []
        }
    }
    table.push(<tr key={week} className="calendar-weeks">{tr}</tr>)

    function PreviosMonth() {
        if (month === 0) {
            // console.log('if month = 0 =>true')
            setMonth(11)
        } else {
            setMonth(month-1)
        }
    }

    function NextMonth() {
        if (month == 11) {
            setMonth(0)
        } else {
            setMonth(month+1) 
        }
    }

    function CreateModal(oneEvent) {
        setActive(true)
        setEventForDetail(oneEvent)
    }
        
    return (
        <div>
            <div className="calendar-header">
                <button onClick={PreviosMonth} className="previos-month">
                    <svg   viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.0195 21.3199C22.5695 20.4399 23.0195 15.7199 23.0195 
                            12.4099C23.0195 9.09992 22.5895 4.41001 20.0195 3.51001C17.3095
                            2.58001 9.01953 8.65991 9.01953 12.4099C9.01953 16.1599 17.3095
                            22.2499 20.0195 21.3199Z" stroke="#000000" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 18.92C1 20.3008 2.11929 21.42 3.5 21.42C4.88071 21.42 6 
                            20.3008 6 18.92L6 5.92004C6 4.53933 4.88071 3.42004 3.5 
                            3.42004C2.11929 3.42004 1 4.53933 1 5.92004L1 18.92Z" stroke="#000000"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <h1>{monthName}  {year}</h1>
                <button onClick={NextMonth} className="next-month">
                    <svg  viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.98047 3.51001C1.43047 4.39001 0.980469 9.09992 0.980469
                            12.4099C0.980469 15.7199 1.41047 20.4099 3.98047 21.3199C6.69047 
                            22.2499 14.9805 16.1599 14.9805 12.4099C14.9805 8.65991 6.69047 
                            2.58001 3.98047 3.51001Z" stroke="#000000" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M23 5.92004C23 4.53933 21.8807 3.42004 20.5 3.42004C19.1193 
                            3.42004 18 4.53933 18 5.92004V18.92C18 20.3008 19.1193 21.42 20.5
                            21.42C21.8807 21.42 23 20.3008 23 18.92V5.92004Z" stroke="#000000"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div className="calendar">
                <table >
                    <tbody className="calendar-table">{table}</tbody> 
                </table>
            </div>
            {active ? <Details oneEvent={eventForDetail} closeModal={()=>setActive(false)} /> : null}
        </div>
    )
}
 export default Calendar