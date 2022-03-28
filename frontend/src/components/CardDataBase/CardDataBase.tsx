import React from 'react'
import { Link } from 'react-router-dom'
import "./CardDataBase.css"

function CardDataBase() {
  return (
    <div>
        <Link to="/home" className="nav-items">
            Home
        </Link>
    </div>
  )
}

export default CardDataBase