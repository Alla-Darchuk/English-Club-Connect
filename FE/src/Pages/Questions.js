import React, { useEffect, useState } from "react";
import { Accordion} from "react-bootstrap";
import QuestionItem from "../Components/QuestionItems";
import GetQuestions from "../API/GetQuestions";
import Chat from "./Chat";

import "../Style/Questions.css"



function Questions() {
    const [questions, setQuestions] = useState([])


    let question = null        //component
    

    useEffect(()=>{
        GetQuestions().then(e=>{
            setQuestions(e)
        })
    },[])

    if(questions.length > 0){
        question = questions.map((question)=>
            <QuestionItem question={question} key={question.id}/>
    )}


    return (
        <div className="page">
            <h2>Here you will find answers to the most popular questions</h2>

            <Accordion className="acordion-my">
                {question}
            </Accordion>
            <Chat></Chat>
        </div>
    )
}
export default Questions