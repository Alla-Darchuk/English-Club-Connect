import React from "react";
import Logo from "../Logo";
import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../Style/Components.css'

function Header() {

const navigate = useNavigate()
let role = localStorage.getItem("role")
let credential
if(role ==='admin'){
    credential = <Nav.Link 
    onClick={() => navigate("credential")} 
    eventKey="credential"
    className="header-link"><b>Сredential</b></Nav.Link>
} else {
    credential = null
}
    return (
        <header className="header">
            <Logo></Logo>
            <Navbar>
                <Nav variant="underline">
                    {credential}
                    <Nav.Link onClick={() => navigate("locations")} eventKey="locations" className="header-link"><b>Location</b></Nav.Link>
                    <Nav.Link onClick={() => navigate("events")} eventKey="events" className="header-link"><b>Events</b></Nav.Link>
                    <Nav.Link onClick={() => navigate("newEvent")} eventKey="forum" className="header-link"><b>New Event</b></Nav.Link>
                    <Nav.Link onClick={() => navigate("calendar")} eventKey="calendar" className="header-link"><b>Calendar</b></Nav.Link>
                </Nav>
                <Navbar.Brand className="icon-header" onClick={() => navigate("/home")}>
                    <svg width="200px" height="200px" viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M110.4 923.2c-56.8 0-102.4-48-102.4-106.4V285.6c0-58.4 45.6-106.4 102.4-106.4h800.8c56.8 0 102.4 48 102.4 106.4V816c0 
                        58.4-45.6 106.4-102.4 106.4H110.4z m0-701.6c-34.4 0-61.6 28.8-61.6 64V816c0 35.2 28 64 61.6 64h800.8c34.4 0 61.6-28.8
                        61.6-64V285.6c0-35.2-28-64-61.6-64H110.4z" fill="" /><path d="M541.6 392c-12.8 0-23.2-10.4-23.2-24s10.4-24 23.2-24h328c12.8 
                        0 23.2 10.4 23.2 24s-10.4 24-23.2 24h-328zM541.6 511.2c-12.8 0-23.2-10.4-23.2-24s10.4-24 23.2-24h328c12.8 0 23.2 10.4 23.2
                        24s-10.4 24-23.2 24h-328zM541.6 638.4c-12.8 0-23.2-10.4-23.2-24s10.4-24 23.2-24h276.8c12.8 0 23.2 10.4 23.2 24s-10.4 24-23.2
                        24H541.6zM58.4 886.4c-2.4 0-4.8 0-7.2-0.8-12.8-4-20-18.4-16-32 23.2-78.4 77.6-142.4
                        148-176l16-8-13.6-12c-40-34.4-63.2-85.6-63.2-139.2 0-100 78.4-180.8 173.6-180.8 96 0 173.6 80.8 173.6 180.8 0 53.6-23.2 104.8-63.2
                        139.2l-13.6 12 16 8c68 32 132.8 112 157.6 194.4 16 52.8-16.8 36-1.6 16-3.2 4.8-16.8-5.6-32-5.6-12.8 0-19.2 24.8-19.2
                        22.4-31.2-104-120.8-203.2-217.6-203.2-99.2 0-186.4 67.2-216 166.4-1.6 11.2-11.2 18.4-21.6 18.4z m239.2-498.4c-69.6 0-126.4
                        58.4-126.4 130.4s56.8 130.4 126.4 130.4c69.6 0 126.4-58.4 126.4-130.4-0.8-72-56.8-130.4-126.4-130.4z" />
                    </svg>
                </Navbar.Brand>
            </Navbar>
        </header>
    )
}
export default Header