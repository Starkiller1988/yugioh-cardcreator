import React from 'react'
import { Link } from 'react-router-dom'
import "./AboutThisApp.css"

function AboutThisApp() {
  return (
    <div>
        <Link to="/home" className="nav-items">
            Home
        </Link>
    </div>
  )
}

export default AboutThisApp