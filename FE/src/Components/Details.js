import React from "react";
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, Button } from "react-bootstrap";
import GoogleMapReact from 'google-map-react';
import photo from '../img/group-of-cheerful-students-teenagers-in-casual-outfits-with-note-books-and-laptop.jpg'

import '../Style/Components.css'
import GetTimeString from "./GetTimeString";
import SimpleMap from "./SimpleMap";

function Details(props) {
    
    const oneEvent = props.oneEvent
    const time = GetTimeString(oneEvent.date)
    const location = oneEvent.plase
    const day = oneEvent.date.getDate()
    const month = oneEvent.date.getMonth()
    const users = [1,2,3,4,5]
    const defaultProps = {
        center: {
        lat: 10.99835602,
        lng: 77.01502627
        },
        zoom: 11
    };
    function CloseModal() {
        props.closeModal()
    }
    let level
    if (oneEvent.level == 'A') {
        level ="Elementary"
    }
    if (oneEvent.level == 'B') {
        level ="Intermediate"
    }
    if (oneEvent.level == 'C') {
        level ="Advanced"
     }
    let participantsPhoto = users.map((index) =>
        <img
            src={photo}
            alt="participant"
            className="participant-photo"
            key={index}
        ></img>
    )
    function joinTheEvent() {
        alert("You have successfully joined this event")
    }
    return (
        <Modal show={true} onHide={CloseModal} centered>
            <ModalHeader closeButton>
                <div className="time-detals">
                    <h5>{day}.{month}  {time}</h5>
                </div>
                <div className="theme-details">
                    <h2>{oneEvent.theme}</h2>
                </div>
            </ModalHeader>
            <ModalBody>
                <div className="calendar-event-inform">
                    <span className="inform-text">Location</span>
                    <Button className='inform-button' size="lg">{location}</Button>
                    <span className="inform-text">Level</span>
                    <Button className='inform-button' size="lg">{level}</Button>
                </div>
                <div>
                    <span className="inform-text">Participants of the event:</span>
                    <div className="event-users">{participantsPhoto} </div>
                </div>
                <div>
                    <h3>Location!</h3>
                    <SimpleMap/>

                </div>
                <Button
                    className='sign-button'
                    size="lg"
                    onClick={joinTheEvent}>
                    Join the event
                </Button>
            </ModalBody>
            <Modal.Footer>
                
                
                <Button onClick={CloseModal}>
                    Close
                </Button>
                
            </Modal.Footer>
        </Modal>
    )
}

Details.propTypes = {
    closeModal: PropTypes.func.isRequired
}

export default Details