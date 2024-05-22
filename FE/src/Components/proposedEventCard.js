import React from "react";
import { Modal, Button } from "react-bootstrap";
import GetTimeString from "./GetTimeString";
import PropTypes from 'prop-types';
import AddEvent from "../API/AddEvent";
import DeleteSuggestion from "../API/DeleteSuggestion";



function ProposedEventCard(props){
    let event = props.occasion
    const date = new Date(event.date)
    const time = GetTimeString(date)
    const location = event.location.name
    const day = date.getDate()
    const month = date.getMonth()+1
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

    function removeSuggestion() {
        DeleteSuggestion(event.id)
        props.remove(event.id)
    }

    function addOccasionToEvents(){
        event.location_id = event.location.id 
        delete event.location 
        AddEvent(event)
        removeSuggestion()
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
                <Button  className="btn-clasic btn-secondary" onClick={removeSuggestion}>Reject</Button>
                <Button  className="btn-clasic" onClick={addOccasionToEvents}>To accept</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}
ProposedEventCard.propTypes = {
    occasion: PropTypes.object.isRequired,
    index: PropTypes.number,
    remove:PropTypes.func.isRequired
  }
export default ProposedEventCard