import React from "react";
import { Modal, Button } from "react-bootstrap";
import GetTimeString from "./GetTimeString";
import PropTypes from 'prop-types';



function ProposedEventCard(props){
    const event = props.occasion
    const date = new Date(event.date)
    const time = GetTimeString(date)
    const location = event.plase
    const day = date.getDate()
    const month = date.getMonth()
    let level
        if (event.level === 'A') {
            level ="Elementary"
        }
        if (event.level === 'B') {
            level ="Intermediate"
        }
        if (event.level === 'C') {
            level ="Advanced"
    }
    return (
        <div className="proposed-event-card" >
            <Modal.Dialog >
                <Modal.Header>
                <Modal.Title>
                <p>{time} {day}.{month}   {event.theme}</p>
                
                </Modal.Title>
                </Modal.Header>

                <Modal.Body className="proposed-card">
                {/* <p>Date & Time</p>
                <p>{day}.{month} at {time}</p> */}
                <p>Level:</p>
                <p>{level}</p>
                <p>Location:</p>
                <p>{location}</p>
                </Modal.Body>

                <Modal.Footer>
                <Button  className="btn-clasic btn-secondary" >Reject</Button>
                <Button  className="btn-clasic">To accept</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}
ProposedEventCard.propTypes = {
    occasion: PropTypes.object.isRequired,
    index: PropTypes.number
  }
export default ProposedEventCard