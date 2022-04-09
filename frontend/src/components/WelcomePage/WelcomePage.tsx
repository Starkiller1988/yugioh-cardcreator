import React from 'react'
import { Link } from 'react-router-dom';
import "./WelcomePage.css";
import logo from "../../Media/Images/logo.png";
import { useAuth } from '../Authentication/AuthProvider';





function WelcomePage() {

  const { token, logout } = useAuth();
  
  return (
    <>
    <div>
      <button className="logmeout" onClick={() => logout()} >Logout</button>
    </div>
    <div>
      <img src={logo} alt="logo" className="logo" />
    </div>
    <div>
      <h1 className="title">Waking the Cards</h1>
    </div>
    <div>
        <Link to="/home" className="start">
            <h1 className="press_start">Press Start</h1>
        </Link>
    </div>
    </>
  )
}

export default WelcomePage