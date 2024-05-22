import React from "react";
import PropTypes from 'prop-types';
import '../Style/Components.css'

function HistoryEventItem(props) {
    const event = props.event
    let level = ''
    let date = new Date(event.date)
    let minutes = date.getMinutes()
    let mounth = date.getMonth()+1

    if (mounth < 10) {
        mounth = '0'+ mounth
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (event.level == 'A') {
        level = 'Beginner'
    }
    if (event.level == 'B') {
        level = 'Intermediate'
    }
    if (event.level == 'C') {
        level = 'Advanced'
    }

    return (
        <tr className="table-tr" >
            <td className="table-th">{date.getDate()},{mounth} at {date.getHours()}:{minutes}</td>
            <td className="table-th">{level}</td>
            <td className="table-th">{event.location.name}</td>
            <td className="table-th">{event.theme}</td>
        </tr>
    )
}
HistoryEventItem.propTypes = {
    event: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default HistoryEventItem