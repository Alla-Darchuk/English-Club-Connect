import React from "react";
import GetTimeString from "./GetTimeString";
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

function EventCard(props) {
  let event = props.eventForCard
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

  function joinTheEvent() {
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