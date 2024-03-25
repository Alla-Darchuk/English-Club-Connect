import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Lending  from './Pages/Lending.js';
import Home  from './Pages/Home.js';
import SignIn  from "./Pages/Sign_in";
import SignUp from "./Pages/Sign_up";
import Calendar from './Pages/Calendar';
import Events from "./Pages/Events.js";

function App() {
  return (
    <BrowserRouter>
       <div className="App">
      <Routes>
          <Route index element={<Lending />} />
          <Route path="home/*" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="events" element={<Events />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
