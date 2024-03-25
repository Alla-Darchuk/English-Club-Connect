import React from "react";
import { Accordion, Form, InputGroup, Button} from "react-bootstrap";
import QuestionItem from "../Components/QuestionItems"
import { useState } from "react";

function Questions() {
    const [newQuestion, setNewQuestion] = useState('')
    const [email, setEmail] = useState('')
    const [validated, setValidated] = useState(false)

    const questions=[
        {
            question: 'Question 1',
            answer: 'Ansver 1, ansver 1 ansver 1 ansver 1 ansver 1 ansver 1 ansver 1 ansver 1 ansver 1 ansver 1'
        }, {
            question: 'Question 2',
            answer: 'Ansver 2, ansver 1 ansver 1 ansver 1 ansver 1 ansver 1 ansver 1 ansver 1 ansver 1 ansver 1'
        }, {
            question: 'Question 3',
            answer: 'Ansver 3, ansver 1 ansver 1 ansver 1 ansver 1 ansver 1 ansver 1 ansver 1 ansver 1 ansver 1'
        }, {
            question: 'Question 4',
            answer: 'Ansver 4, ansver 1 ansver 1 ansver 1 ansver 1 ansver 1 ansver 1 ansver 1 ansver 1 ansver 1'
        }, {
            question: 'Question 5',
            answer: 'Ansver 5, ansver 1 ansver 1 ansver 1 ansver 1 ansver 1 ansver 1 ansver 1 ansver 1 ansver 1'
        }
    ]

    let question = questions.map((quest, index)=>
        QuestionItem (quest, index)
    )

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          alert("Filling out the form is incorrect")
        } else{
            alert("We send answer on your question on your email addres \n Thank you for the question")
        }
    
        setValidated(true);
      };

    return (
        <div className="page">
            <h2>Here you will find answers to the most popular questions</h2>

            <Accordion className="acordion-my">
                {question}
            </Accordion>
            <h3>If you did not find the answer to your question, write it below</h3>
            <Form 
                noValidate 
                validated={validated} 
                onSubmit={handleSubmit}
                >
                <InputGroup className="my-input-text-group my-input-text" >
                    <InputGroup.Text>Your question:</InputGroup.Text>
                    <Form.Control 
                        required
                        as="textarea"
                        type="text"
                        value={newQuestion}
                        onChange={event => setNewQuestion(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter your question!
                    </Form.Control.Feedback>
                </InputGroup>
                <div className="email-send">
                    <InputGroup  className="my-input-text">
                        <Form.Control
                            required
                            type="email"
                            placeholder="Enter your email here"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                           Enter your email!
                        </Form.Control.Feedback>
                    </InputGroup>
                    <Button  type="submit" className="btn-clasic">
                        Send my question
                    </Button>
                </div>
                
            </Form>
            
            
        </div>
    )
}
export default Questions