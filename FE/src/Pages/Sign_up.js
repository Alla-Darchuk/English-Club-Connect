import React, { useState } from "react";
import '../Style/Sign.css'
import { useNavigate } from "react-router-dom";

 function SignUp() {
    const navigate = useNavigate()
    const user = useState({
        name: '',
        email: '',
        password: ''
    })

     return (
         <div className="main">
            <form className="form">
                <h2   className="heading">SIGN UP</h2>
                <input placeholder="Username" className="input" type="text"     required="" value={user.name} />
                <input placeholder="Email"    className="input" type="email"    required="" value={user.email} />
                <input placeholder="Password" className="input" type="password"  required="" value={user.password}/>
                <button className="btn" onClick={() => navigate("/home")}>SIGN UP</button>
                
            </form>
        </div>
    )
}

export default SignUp