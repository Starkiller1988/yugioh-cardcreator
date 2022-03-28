import React from 'react'
import { Link } from 'react-router-dom'
import "./LandingPage.css"

function Landingpage() {
  return (
    <div className="navigation">
        <Link to="/database" className="nav-items">
        Card Database
        </Link>
        <Link to="/creator" className="nav-items">
        Card Creator
        </Link>
        <Link to="/about" className="nav-items">
        About This App
        </Link>
    </div>
  )
}

export default Landingpage