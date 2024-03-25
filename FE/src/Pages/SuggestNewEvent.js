import React,{useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, InputGroup, Button} from "react-bootstrap";

function SuggestNewEvent() {
    const levels = ['A','B', 'C']
    const locations = ['VDNH', 'shevchenka', 'kpi', 'pheophany']
    const [level, setLevel] = useState('')
    const [theme, setTheme] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState(null)
    const startDate = new Date();

    const [validated, setValidated] = useState(false)

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
    return (
        <div className="page">
            <h1>Here you can suggest new event</h1>

            <p> The events you propose will be checked 
                by the administrator and after approval will 
                appear in the 'events' section
            </p>

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
                        Add my event
                    </Button>
                </div>
                
            </Form>

        </div>
    )
}
export default SuggestNewEvent