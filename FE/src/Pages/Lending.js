import React from "react";
import { useNavigate } from "react-router-dom"
import '../Style/Lending.css'

import Logo from '../Logo';
import { Button } from "react-bootstrap";
import EventLendingItem from "../Components/EventLendingItem";
import NewLendingItem from "../Components/NewLendingItem";
import Calendar from "./Calendar";
import Events from "./Events";


 function Lending() {
   const navigate = useNavigate();
   let events = [{
        date: new Date('August 8, 2023 17:30:00').toISOString(),
        plase: 'VDNH park',
        theme: 'Welcome',
        level: 'A'
    },{
        date: new Date('August 9, 2023 18:00:00').toISOString(),
        plase: 'VDNH park',
        theme: 'Description of feelings and emotions',
        level: 'B'
    }, {
        date: new Date('August 11, 2023 17:00:00').toISOString(),
        plase: 'VDNH park',
        theme: 'Business',
        level: 'C'
     }]
   let news = [
     'The beginning of the creation of this site falls on the beginning of August',
     'First, the main page was created, and in the process, ears and registration and page components were created without any specific data',
     'The partial architecture of the site for creation was thought out',
     'The date of creation of this element is 07.08'
  ]
   

    let eventList = events.map((event, index) =>
      <EventLendingItem event={event} key={index} />)
    let newList = news.map((news, index) =>
        <NewLendingItem news={news} key={index} />)
  return (
    <div className="lending">
      <div className="background">
        <div className='flex'>
          <div className='flex'>
            <Logo></Logo>
            <h1 className="p50"> English Club Connect</h1>
          </div>
            <div>
              <Button className='sign-button' size="lg" onClick={() => navigate("signin")}> Sign in</Button>
              <Button className='sign-button' size="lg" onClick={() => navigate("signup")}> Sign up</Button>
            </div>
        </div>
        <div className="about-us">
          <h1><b>Welcome to English Club Connect</b></h1>
          <h4>We help organize meetings in beautiful and cultural places for people who like to communicate
            in English at different levels. Here you will find many different places, choose a convenient
            time for yourself, and you can register for a meeting absolutely free of charge. Chat with
            your friends on a variety of topics and have fun.</h4>
        </div>
        <div className="new-event">
          <h1><b>Upcoming events</b></h1>
          <ul className="lending-list">
            <div className="lending-list">{eventList}</div>
          </ul>
          <div className="buttons">
            <Button className='sign-button' size="lg" onClick={() => navigate("events")} > Details</Button>
            <Button className='sign-button' size="lg" onClick={() => navigate("calendar")} > Calendar</Button>
          </div>
        </div>
        <div className="news">
          <h1><b>Latest news</b> </h1>
          <ul>
              <div>{newList}</div>
          </ul>
        </div>
        <div className="lending-follow">
          <h3>Follow us</h3>
          <div className="lending-icons">
            <form action="https://www.instagram.com/" target="_blank">
              <button  className="lending-icon" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                  <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 
                  c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588
                  l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                </svg>
              </button>
            </form>
            <form action="https://www.instagram.com/" target="_blank">
              <button  className="lending-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                  <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271
                  0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0
                  0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303
                  0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547
                  0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077
                  2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995
                  18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                </svg>
              </button>
            </form>
            <form action="https://www.instagram.com/" target="_blank">
              <button className="lending-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                  <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 
                  34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15
                  C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07
                  36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16
                  29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Lending