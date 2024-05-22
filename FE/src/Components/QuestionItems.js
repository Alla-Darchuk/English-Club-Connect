import React from "react";
import { Accordion } from "react-bootstrap";
import PropTypes from 'prop-types';

import "../Style/Questions.css"

function QuestionItem(props){
    let question = props.question
    return(
        <Accordion.Item  eventKey={question.id} className="acordion-item-my">
            <Accordion.Header >{question.question}</Accordion.Header>
            <Accordion.Body >{question.answer} </Accordion.Body>
        </Accordion.Item>
    )
}
QuestionItem.propTypes = {
    question: PropTypes.object.isRequired
  }
export default QuestionItem