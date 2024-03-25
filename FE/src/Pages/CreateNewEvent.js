import React, {useState} from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import ProposedEventCard from "../Components/proposedEventCard";

import "../Style/CreateNewEvent.css";
import "react-datepicker/dist/react-datepicker.css";

function CreateNewEvent(){
    let suggestion = [{
        date: new Date('February 20, 2024 19:30:00'),
        plase: 'VDNH park',
        theme: 'Ordering in a restaurant, cafe, hotel, etc',
        level: 'A'
    },{
        date: new Date('February 25, 2024 20:30:00'),
        plase: 'VDNH park',
        theme: 'Artworks',
        level: 'B'
    },{
        date: new Date('February 28, 2024 19:00:00'),
        plase: 'VDNH park',
        theme: 'Ordering in a restaurant, cafe, hotel, etc',
        level: 'A'
    }]

    const levels = ['A','B', 'C']
    const locations = ['VDNH', 'shevchenka', 'kpi', 'pheophany']
    const [level, setLevel] = useState('')
    const [theme, setTheme] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState(null)
    const startDate = new Date();

    const [validated, setValidated] = useState(false)

    let proposedEvents = suggestion.map((occasion, index) =>
        <ProposedEventCard occasion={occasion} key={index}></ProposedEventCard>)

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            alert("Filling out the form is incorrect")
        } else{
            alert("We have added your event to the suggested ones \n After confirmation by the administrator, it will appear in the 'Events' section")
        }
    
        setValidated(true);
        };
    let selectLocation = locations.map((loc,index) =>
        <option value={loc} key={index}> {loc}</option>)

    let selectLevel = levels.map((level, index) => 
        <option value={level} key={index}> {level}</option>
    )
    return(
        <div className="events-page">
            <h1>Create new event</h1>
            <h3>Proposed events that require confirmation</h3>
            {proposedEvents}
            <h3>If you wish, you can create an event yourself</h3>
            <Form 
                noValidate 
                validated={validated} 
                onSubmit={handleSubmit}
                >
                 <DatePicker  
                    minDate={startDate}
                    selected={date}
                    onChange={(date) => setDate(date)}
                    placeholderText="Date" 
                    dateFormat="MM/dd/yyyy h:mm aa" 
                    timeInputLabel="Time:"
                    withPortal
                    showTimeInput
                    required
                />

                <Form.Select required onChange={(location)=> setLocation(location)} >
                    <option>Choose location</option>
                    {selectLocation}
                </Form.Select>
 
                <Form.Select required onChange={(level)=> setLevel(level)} >
                    <option>Choose level</option>
                    {selectLevel}
                </Form.Select>

                <InputGroup className="my-input-text-group my-input-text" >
                    <InputGroup.Text>Theme:</InputGroup.Text>
                    <Form.Control 
                        required
                        as="textarea"
                        type="text"
                        value={theme}
                        onChange={event => setTheme(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter theme!
                    </Form.Control.Feedback>
                </InputGroup>
                <div className="email-send">
                    <InputGroup  className="my-input-text">
                        
                    </InputGroup>
                    <Button  type="submit" className="btn-clasic">
                        Add event
                    </Button>
                </div>
                
            </Form>
            
            
        </div>
    )
}
export default CreateNewEvent