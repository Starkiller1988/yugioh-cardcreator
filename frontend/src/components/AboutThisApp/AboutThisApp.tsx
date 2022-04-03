import React from 'react'
import { Link } from 'react-router-dom'
import "./AboutThisApp.css"

function AboutThisApp() {
  return (
    <div>
        <Link to="/home"  className="home-link">
            Home
        </Link>

        <div className="about-container">
            <h1 className="about-title">
              This tomb created in four weeks time,
              <br />
              <br />
              the result is the hard work of mine.
              <br />
              <br />
              Get ready for this dark renewal,
              <br />
              <br />
              because it's time to DUEL!
            </h1>
        </div>
    </div>
  )
}

export default AboutThisApp