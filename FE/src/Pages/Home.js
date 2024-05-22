import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserInformation } from "../redux-store/userInformationSlice";

import "../App.css"

import Header from '../Components/Header'
import Footer from "../Components/Footer";
import Account from "./Account";
import Calendar from "./Calendar";
import Location from "./Locations";
import Events from "./Events";
import Contacts from "./Contacts";
import Questions from "./Questions";
import Lending from "./Lending";
import CreateNewEvent from "./CreateNewEvent";
import SuggestNewEvent from "./SuggestNewEvent";
import Credential from "./Credential";

function Home() {
    const userInformation = useSelector(getUserInformation)
    let newEvent
    
    if(userInformation.role === 'user'){
        newEvent = <Route path="/newEvent" element={<SuggestNewEvent/>} />
    } else if(userInformation.role === 'admin'){
        newEvent = <Route path="/newEvent" element={<CreateNewEvent/>} />
    }


    return (
        <div className="home">
            <Header></Header>
            <Routes>
                {/* <Route path="/lending" element={<Lending />} /> */}
                <Route index  element={<Account />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/locations" element={<Location />} />
                <Route path="/events" element={<Events />} />
                <Route path="/credential" element={<Credential />} />
                {newEvent}
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/questions" element={<Questions />} />
            </Routes>
            <Footer></Footer>
        </div>
    )
}
 export default Home