import React from 'react'
import { Link } from 'react-router-dom';
import "./WelcomePage.css";
import logo from "../../Media/Images/logo.png";

function WelcomePage() {


  return (
    <>
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