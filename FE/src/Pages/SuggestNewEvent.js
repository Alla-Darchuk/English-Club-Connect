import React,{useState, useEffect} from "react";
import { Form, InputGroup, Button} from "react-bootstrap";
import DatePicker from "react-datepicker";
import GetLevels from "../API/GetLevels";
import GetLocations from "../API/GetLocations";
import AddSuggestion from "../API/AddSuggestion";


import "react-datepicker/dist/react-datepicker.css";

function SuggestNewEvent() {
    const [level, setLevel] = useState('');
    const [theme, setTheme] = useState('');
    const [location, setLocation] = useState();
    const [date, setDate] = useState(null);
    const startDate = new Date();
    const [levels, setLevels] = useState([{id:'', description:'Сhoose'}]);
    const [locations, setLocations] = useState([{ id: '', name: 'Сhoose'}]);

    const [validated, setValidated] = useState(false);

    useEffect(()=>{
        GetLevels().then(e=>{
            setLevels(e)
        })
        GetLocations().then(e=>{
            setLocations(e)
        })
    },[])

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
            AddSuggestion(newEvent)
        } else {
            alert("Level  or location is not choose")
        }
        setValidated(true);
    }

    let selectLocation = locations.map((location) =>
        <option value={location.id} key={location.id}> {location.name}</option>)

    let selectLevel = levels.map((level) => 
        <option value={level.id} key={level.id}> {level.description}</option>)


    return (
        <div className="page">
            <h1>Here you can suggest new event</h1>

            <p> The events you propose will be checked 
                by the administrator and after approval will 
                appear in the 'events' section
            </p>

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
export default SuggestNewEvent