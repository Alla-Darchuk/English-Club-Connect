import React from "react";
import PropTypes from 'prop-types';

import "../Style/Questions.css"

function MessageItem(props){
    let message = props.message,
    style
    if(message.typeForUser == 'in'){
        style = 'flex-start'
    } else{
        style = 'flex-end'
    }
    return(
        <div className={style}>
            <p>{message.message}</p>
        </div>
    )
}
MessageItem.propTypes = {
    message: PropTypes.object.isRequired
  }
export default MessageItem