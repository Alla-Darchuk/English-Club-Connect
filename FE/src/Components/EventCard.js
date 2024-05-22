import React from "react";
import GetTimeString from "./GetTimeString";
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getUserInformation } from "../redux-store/userInformationSlice";
import AddParticipant from "../API/AddParticipant";

function EventCard(props) {
  const event = props.eventForCard
  const date = new Date(event.date)
  const time = GetTimeString(date)
  const location = event.location.name
  const day = date.getDate()
  const month = date.getMonth()
  const user = useSelector(getUserInformation)
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

  function joinTheEvent() {
    AddParticipant(user.id, event.id)
    alert("You have successfully joined this event")
  }
  return (
    <div className="card">
      <h3 className="card-information-header">{event.theme}</h3>
      <div className="card-information" >
        <span className="card-information-text">
          {day}.{month}  Level:
        </span>
        <Button
          className='inform-button'
          size="lg">
          {level}
        </Button>
        <span className="card-information-text">
          {time}  Location:
        </span>
        <Button
          className='inform-button'
          size="lg">
          {location}
        </Button>
      </div>
      <Button
        className='btn-clasic'
        size="lg"
        onClick={joinTheEvent}>
        Join the event
      </Button>
    </div>
  )
}
EventCard.propTypes = {
  eventForCard: PropTypes.object.isRequired
}
export default EventCard