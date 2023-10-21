import React from "react";
import { Routes, Route } from "react-router-dom";

import "../App.css"

import Header from '../Components/Header'
import Footer from "../Components/Footer";
import Account from "./Account";
import Calendar from "./Calendar";
import Location from "./Locations";
import Events from "./Events";
import Forum from "./Forum";

function Home() {
    return (
        <div className="home">
            <Header></Header>
            <Routes>
                <Route index  element={<Account />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/locations" element={<Location />} />
                <Route path="/events" element={<Events />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/contacts" element={<Calendar />} />
            </Routes>
            <Footer></Footer>
        </div>
    )
}
 export default Home