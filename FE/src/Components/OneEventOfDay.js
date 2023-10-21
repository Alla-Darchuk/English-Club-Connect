import React from "react";
import PropTypes from 'prop-types';
import background from "../img/concentrated-students-studying-outdoors.jpg"

function OneEventOfDay(props) {
    const date = props.date
    const event = props.event
    let time = ''
    let hours = event.date.getHours()
    let minutes = event.date.getMinutes()
    
    let styleLevel = {
        backgroundColor:"",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: "15px"
    }
    let styleBackground = {
            background: "url(" + background + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "15px"
        }
        
    
    if (hours < 10) {
        hours= '0'+hours
    }
    
    if (minutes < 10) {
        minutes= '0'+minutes
    }



    time = hours+':'+minutes
            
        

    if (event.level == 'A') {
        styleLevel.backgroundColor='rgba(84, 227, 84, 0.701)'
    }
    if (event.level == 'B') {
        styleLevel.backgroundColor='rgba(225, 231, 37, 0.844)'
    }
    if (event.level == 'C') {
        styleLevel.backgroundColor='rgba(242, 72, 72, 0.668)'
    }

    function showModal() {
        console.log(event)
        props.show(event)
        console.log('onClick is work')

    }

    return (
        <div style={styleBackground}>
            <div className="calendar-day" title={event.theme}  onClick={showModal}>
                <div className="one-event">
                    <div >
                        <p className="date" style={styleLevel}>{date}</p>
                    </div>
                    
                    <p>{time} </p>
                </div>
                <div className="theme-of-day">
                    <p>{event.theme }</p>
                </div>
            </div>
        </div>
        
    )
}

OneEventOfDay.propTypes = {
    date:  PropTypes.number,
    index: PropTypes.number,
    show: PropTypes.func
}

export default OneEventOfDay