import React from "react";
import PropTypes from 'prop-types';
import '../Style/Components.css'

function NewLendingItem(props) {

    let news = props.news

    return (
        <li  className="clasic-li">
            <h3 className="clasic-item">{news}</h3>
        </li>
    )
}

NewLendingItem.propTypes = {
    news: PropTypes.string.isRequired,
    index: PropTypes.number
}

export default NewLendingItem