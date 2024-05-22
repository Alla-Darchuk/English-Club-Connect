import React, {useEffect, useState} from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import ProposedEventCard from "../Components/proposedEventCard";
import getSuggestions from "../API/GetSuggestions";
import GetLevels from "../API/GetLevels";
import GetLocations from "../API/GetLocations";
import AddEvent from "../API/AddEvent";

import "../Style/CreateNewEvent.css";
import "react-datepicker/dist/react-datepicker.css";



function CreateNewEvent(){
    const [level, setLevel] = useState()
    const [theme, setTheme] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState(null)
    const startDate = new Date();
    const [levels, setLevels] = useState([{id:'', description:'Сhoose'}])
    const [locations, setLocations] = useState([{ id: '', name: 'Сhoose'}])
    const [validated, setValidated] = useState(false)
    const [suggestions, setSeggestions] = useState([{
        id:0,
        date: new Date(),
        location: {name:'location'},
        theme: 'Theme',
        level: 'A'
    }])

    let proposedEvents

    useEffect(()=>{
        getSuggestions().then(e=>{
            setSeggestions(e)
        })
        GetLevels().then(e=>{
            setLevels(e)
        })
        GetLocations().then(e=>{
            setLocations(e)
        })
    },[])
    

    function removeSuggestion(id){
        let newSuggestion = [...suggestions].filter((suggestion) => suggestion.id != id)
        setSeggestions(newSuggestion)
    }

     
    if(suggestions.length>0){
        proposedEvents = suggestions.map((suggestion) =>
        <ProposedEventCard occasion={suggestion} key={suggestion.id} remove={removeSuggestion}></ProposedEventCard>)
    } else {
        proposedEvents = <p> We haven't any one suggestion! </p>
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            alert("Filling out the form is incorrect")
        } else if(location && level){
            let newEvent = {
                date: new Date(date),
                location_id:  Number(location),
                level:level,
                theme:theme
            }
            AddEvent(newEvent)
        } else {
            alert("Level  or location is not choose")
        }
        setValidated(true);
    };


    let selectLocation = locations.map((location) =>
        <option value={location.id} key={location.id}> {location.name}</option>)

    let selectLevel = levels.map((level) => 
        <option value={level.id} key={level.id}> {level.description}</option>
    )


    return(
        <div className="events-page">
            <h1>Create new event</h1>
            <h3>Proposed events that require confirmation</h3>
            {proposedEvents}
            <h3>If you wish, you can create an event yourself</h3>
            <Form 
                validated={validated} 
                onSubmit={handleSubmit}
                >
                <div className="form-little-parts" >
                    <DatePicker  
                        minDate={startDate}
                        selected={date}
                        onChange={(date) => setDate(date)}
                        placeholderText="First select time, date" 
                        dateFormat="MM/dd/yyyy h:mm aa" 
                        timeInputLabel="Time:"
                        withPortal
                        showTimeInput
                        required
                        className="datepicker"
                    />

                    <Form.Select 
                    required 
                    value={location} 
                    onChange={e=>{setLocation(e.target.value)}} >
                        <option>Choose location</option>
                        {selectLocation}
                    </Form.Select>
    
                    <Form.Select required value={level} onChange={e=> {setLevel(e.target.value)}} >
                        <option>Choose level</option>
                        {selectLevel}
                    </Form.Select>
                </div>

                <div className="form-last-elements" >
                    <InputGroup className="my-input-text-group my-input-text my-theme" >
                        <InputGroup.Text>Topic:</InputGroup.Text>
                        <Form.Control 
                            required
                            type="text"
                            value={theme}
                            onChange={event => setTheme(event.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter topic!
                        </Form.Control.Feedback>
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