import React from 'react'
import { Link } from 'react-router-dom'
import "./CardCreator.css"

function CardCreator() {
  return (
    <div>
        <Link to="/home"  className="home-link">
            Home
        </Link>
    </div>
  )
}

export default CardCreator