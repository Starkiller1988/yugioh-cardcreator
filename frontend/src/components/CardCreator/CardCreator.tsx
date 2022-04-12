import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./CardCreator.css"
import BlankCard from "../../Media/Cardimages/blank.png"
import dark from "../../Media/Attributes/DARK.png"
import light from "../../Media/Attributes/LIGHT.png"
import divine from "../../Media/Attributes/DIVINE.png"
import earth from "../../Media/Attributes/EARTH.png"
import fire from "../../Media/Attributes/FIRE.png"
import water from "../../Media/Attributes/WATER.png"
import wind from "../../Media/Attributes/WIND.png"
import spell from "../../Media/Attributes/SPELL.png"
import trap from "../../Media/Attributes/TRAP.png"

function CardCreator() {

  return (
    <>
        <Link to="/home"  className="home-link">
            Home
        </Link>

    <div className="inputfield">

      <input className="input-items" type="text" placeholder="Name" />      
     
      <label className="level-text">Level:</label>
      <select className="level" name="Level" >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
      </select>
      
      <label className="attribute-text">Attribute:</label>
      <div className="attribute-container">
      <button className="btn"><img src={dark} alt="" className="attribute-img" /></button>
      <button className="btn"><img src={light} alt="" className="attribute-img" /></button>
      <button className="btn"><img src={divine} alt="" className="attribute-img" /></button>
      <button className="btn"><img src={earth} alt="" className="attribute-img" /></button>
      <button className="btn"><img src={fire} alt="" className="attribute-img" /></button>
       </div>
      
      <div className="attribute-container-2">
      <button className="btn"><img src={water} alt="" className="attribute-img" /></button>
      <button className="btn"><img src={wind} alt="" className="attribute-img" /></button>
      <button className="btn"><img src={spell} alt="" className="attribute-img" /></button>
      <button className="btn"><img src={trap} alt="" className="attribute-img" /></button>
      </div>

      <div>
      <label className="race-text">Race:</label>
      <select className="race" name="Race" >
        <option>Aqua</option>
        <option>Beast</option>
        <option>Beast-Warrior</option>
        <option>Dinosaur</option>
        <option>Divine-Beast</option>
        <option>Dragon</option>
        <option>Fairy</option>
        <option>Fiend</option>
        <option>Fish</option>
        <option>Insect</option>
        <option>Machine</option>
        <option>Plant</option>
        <option>Psychic</option>
        <option>Pyro</option>
        <option>Reptile</option>
        <option>Rock</option>
        <option>Sea Serpent</option>
        <option>Spellcaster</option>
        <option>Thunder</option>
        <option>Winged Beast</option>
        <option>Wyrm</option>
        <option>Zombie</option>
      </select>
      </div>

      <div>
      <label className="type-text">Type:</label>
      <select className="type" name="Type" >
        <option>Effect</option>
        <option>Normal</option>
        <option>Link</option>
        <option>Ritual</option>
        <option>Spell</option>
        <option>Synchro</option>
        <option>Trap</option>
        <option>Xyz</option>
      </select>
      </div>

      <div>
      <label className="attack-text">ATK:</label>
        <input type="number" className="attack" />
      </div>

      <div>
      <label className="defence-text">DEF:</label>
        <input type="number" className="defence" />
      </div>

          <textarea className="descript-text" />

      <div>
        <label className="upload-text">Image:</label>
        <input type="file" className="upload" />
      </div>
    
    </div>

    <div className="card-container">
    <img className="card" src={BlankCard} alt="card" />
    </div>




    </>
  )
}

export default CardCreator