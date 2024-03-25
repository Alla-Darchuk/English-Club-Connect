import React from "react";
import { Accordion } from "react-bootstrap";
import PropTypes from 'prop-types';

import "../Style/Questions.css"

function QuestionItem(question, index){
    return(
        <Accordion.Item  eventKey={index} key={index} className="acordion-item-my">
            <Accordion.Header >{question.question}</Accordion.Header>
            <Accordion.Body >{question.answer} </Accordion.Body>
        </Accordion.Item>
    )
}
QuestionItem.propTypes = {
    question: PropTypes.object.isRequired,
    index: PropTypes.number
  }
export default QuestionItem