import React, { useEffect, useState } from "react";
import LocationsCarousel from "../Components/LocationsCarusel";
import GetLocations from "../API/GetLocations";

import "../Style/Location.css";

function Location() {
    const [locations, setLocations] = useState([{
        id: 0,
        name: 'Location',
        fullName: 'Location Name',
        description: '',
        photo: [
            'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.lifewire.com%2Fthmb%2FYBQuRMKxxhx3Zb3uJ1x-QOT6VsM%3D%2F1500x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2FMaplocation_-5a492a4e482c52003601ea25.jpg&tbnid=7DtHMMmSiwfonM&vet=12ahUKEwi1yYGn1KGFAxXh6AIHHfGaBTwQMygDegQIARBP..i&imgrefurl=https%3A%2F%2Fwww.lifewire.com%2Fturn-on-mobile-location-services-4156232&docid=_NLINBvD9svY7M&w=1500&h=1027&q=location&ved=2ahUKEwi1yYGn1KGFAxXh6AIHHfGaBTwQMygDegQIARBP'
    ]}])
    
    useEffect(()=>{
        GetLocations().then(e=>{
            setLocations(e)
        })
    },[])
    
    let locationCarousel = locations.map((location)=>
        <div className="location">
            <h2>{location.fullName}</h2>
            <LocationsCarousel plase={location.photo} title={location.fullName} key={location.id}></LocationsCarousel>
        </div>
    )
    
    return (
        <div className="locations-page">
            
            {locationCarousel}

        </div>
    )
}
 export default Location