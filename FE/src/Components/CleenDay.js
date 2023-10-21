import PropTypes from 'prop-types';

function CleanDay(props) {
    const date = props.date
    
    return (
        <div className="calendar-day cleen-day">
            {date}
            <p>This day haven`t event</p>
        </div>
    )
}

CleanDay.propTypes = {
    date:  PropTypes.number,
    month:  PropTypes.number,
    index: PropTypes.number
}

export default CleanDay