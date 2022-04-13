import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CardCreator.css";

import normalCard from "../../Media/Cardimages/common.png";
import effectCard from "../../Media/Cardimages/effect.png";
import fusionCard from "../../Media/Cardimages/fusion.png";
import ritualCard from "../../Media/Cardimages/ritual.png";
import synchroCard from "../../Media/Cardimages/synchro.png";
import xyzCard from "../../Media/Cardimages/xyz.png"


import dark from "../../Media/Attributes/DARK.png";
import light from "../../Media/Attributes/LIGHT.png";
import divine from "../../Media/Attributes/DIVINE.png";
import earth from "../../Media/Attributes/EARTH.png";
import fire from "../../Media/Attributes/FIRE.png";
import water from "../../Media/Attributes/WATER.png";
import wind from "../../Media/Attributes/WIND.png";


import levelstar1 from "../../Media/Level/levelstar.png";

function CardCreator() {
  const [showedStars, setShowedStars] = useState(
    <div className="star-container"></div>
  );

  const [showedRace, setShowedRace] = useState(<div></div>);
  const [showedAttribute, setShowedAttribute] = useState(
    <img src={dark} alt="" />
  );
  const [showedType, setShowedType] = useState(<div></div>);
  const [showedCard, setShowedCard] = useState(<div className="card-container"><img className="card_img" src={effectCard} alt="" /></div>);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('')
  const [attack, setAttack] = useState("");
  const [defence, setDefence] = useState("");


  const changeDark = () => {
    setShowedAttribute(<img src={dark} alt="" />);
  };

  const changeLight = () => {
    setShowedAttribute(<img src={light} alt="" />);
  };

  const changeDivine = () => {
    setShowedAttribute(<img src={divine} alt="" />);
  };

  const changeEarth = () => {
    setShowedAttribute(<img src={earth} alt="" />);
  };

  const changeFire = () => {
    setShowedAttribute(<img src={fire} alt="" />);
  };

  const changeWater = () => {
    setShowedAttribute(<img src={water} alt="" />);
  };

  const changeWind = () => {
    setShowedAttribute(<img src={wind} alt="" />);
  };


  const changeType = (types: string) => {
    if (types === "Effect") {
      setShowedType(<div>Effect</div>);
      setShowedCard(<div className="card-container"><img className="card_img" src={effectCard} alt="" /></div>)
    } else if (types === "Normal") {
      setShowedType(<div>Normal</div>);
      setShowedCard(<div className="card-container"><img className="card_img" src={normalCard} alt="" /></div>)
    } else if (types === "Ritual") {
      setShowedType(<div>Ritual</div>);
      setShowedCard(<div className="card-container"><img className="card_img" src={ritualCard} alt="" /></div>)
    } else if (types === "Synchro") {
      setShowedType(<div>Synchro</div>);
      setShowedCard(<div className="card-container"><img className="card_img" src={synchroCard} alt="" /></div>)
    } else if (types === "Xyz") {
      setShowedType(<div>Xyz</div>);
      setShowedCard(<div className="card-container"><img className="card_img" src={xyzCard} alt="" /></div>)
    } else if (types === "Fusion") {
      setShowedType(<div>Fusion</div>);
      setShowedCard(<div className="card-container"><img className="card_img" src={fusionCard} alt="" /></div>)
    } else if (types === "") {
      setShowedType(<div></div>);
      
    }
  };

  const changeRace = (races: string) => {
    if (races === "Aqua") {
      setShowedRace(<div>Aqua</div>);
    } else if (races === "Beast") {
      setShowedRace(<div>Beast</div>);
    } else if (races === "Beast-Warrior") {
      setShowedRace(<div>Beast-Warrior</div>);
    } else if (races === "Dinosaur") {
      setShowedRace(<div>Dinosaur</div>);
    } else if (races === "Divine-Beast") {
      setShowedRace(<div>Divine-Beast</div>);
    } else if (races === "Dragon") {
      setShowedRace(<div>Dragon</div>);
    } else if (races === "Fairy") {
      setShowedRace(<div>Fairy</div>);
    } else if (races === "Fiend") {
      setShowedRace(<div>Fiend</div>);
    } else if (races === "Fish") {
      setShowedRace(<div>Fish</div>);
    } else if (races === "Insect") {
      setShowedRace(<div>Insect</div>);
    } else if (races === "Machine") {
      setShowedRace(<div>Machine</div>);
    } else if (races === "Plant") {
      setShowedRace(<div>Plant</div>);
    } else if (races === "Psychic") {
      setShowedRace(<div>Psychic</div>);
    } else if (races === "Pyro") {
      setShowedRace(<div>Pyro</div>);
    } else if (races === "Reptile") {
      setShowedRace(<div>Reptile</div>);
    } else if (races === "Rock") {
      setShowedRace(<div>Rock</div>);
    } else if (races === "Sea Serpent") {
      setShowedRace(<div>Sea Serpent</div>);
    } else if (races === "Spellcaster") {
      setShowedRace(<div>Spellcaster</div>);
    } else if (races === "Thunder") {
      setShowedRace(<div>Thunder</div>);
    } else if (races === "Winged Beast") {
      setShowedRace(<div>Winged Beast</div>);
    } else if (races === "Wyrm") {
      setShowedRace(<div>Wyrm</div>);
    } else if (races === "Zombie") {
      setShowedRace(<div>Zombie</div>);
    } else if (races === "") {
      setShowedRace(<div></div>);
    }
  };

  const changeLevel = (stars: number) => {
    if (stars === 1) {
      setShowedStars(
        <div className="star-container">
          <img className="star" src={levelstar1} alt="" />
        </div>
      );
    } else if (stars === 2) {
      setShowedStars(
        <div className="star-container">
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
        </div>
      );
    } else if (stars === 3) {
      setShowedStars(
        <div className="star-container">
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
        </div>
      );
    } else if (stars === 4) {
      setShowedStars(
        <div className="star-container">
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
        </div>
      );
    } else if (stars === 5) {
      setShowedStars(
        <div className="star-container">
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
        </div>
      );
    } else if (stars === 6) {
      setShowedStars(
        <div className="star-container">
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
        </div>
      );
    } else if (stars === 7) {
      setShowedStars(
        <div className="star-container">
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
        </div>
      );
    } else if (stars === 8) {
      setShowedStars(
        <div className="star-container">
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
        </div>
      );
    } else if (stars === 9) {
      setShowedStars(
        <div className="star-container">
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
        </div>
      );
    } else if (stars === 10) {
      setShowedStars(
        <div className="star-container">
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
        </div>
      );
    } else if (stars === 11) {
      setShowedStars(
        <div className="star-container">
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
        </div>
      );
    } else if (stars === 12) {
      setShowedStars(
        <div className="star-container">
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
          <img className="star" src={levelstar1} alt="" />
        </div>
      );
    } else if (stars === 0) {
      setShowedStars(<div></div>);
    }
  };

  return (
    <>
      <Link to="/home" className="home-link">
        Home
      </Link>

      <div className="attribute_card">{showedAttribute}</div>

      <div>{showedStars}</div>

      <div className="name-container">{name}</div>

      <div className="race-container">
        {showedRace}/{showedType}
      </div>

      <div className="attack-container">
        {attack}
      </div>

      <div className="defence-container">
        {defence}
      </div>

      <div className="inputfield">
        <input onChange={e => (setName(e.target.value))} className="input-items" type="text" placeholder="Name" />

        <label className="level-text">Level:</label>
        <select
          onChange={(e) => changeLevel(parseInt(e.target.value))}
          className="level"
          name="Level"
        >
          <option>0</option>
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
          <button onClick={changeDark} className="btn">
            <img src={dark} alt="" className="attribute-img" />
          </button>
          <button onClick={changeLight} className="btn">
            <img src={light} alt="" className="attribute-img" />
          </button>
          <button onClick={changeDivine} className="btn">
            <img src={divine} alt="" className="attribute-img" />
          </button>
          <button onClick={changeEarth} className="btn">
            <img src={earth} alt="" className="attribute-img" />
          </button>
          <button onClick={changeFire} className="btn">
            <img src={fire} alt="" className="attribute-img" />
          </button>
        </div>

        <div className="attribute-container-2">
          <button onClick={changeWater} className="btn">
            <img src={water} alt="" className="attribute-img" />
          </button>
          <button onClick={changeWind} className="btn">
            <img src={wind} alt="" className="attribute-img" />
          </button>
        </div>

        <div>
          <label className="race-text">Race:</label>
          <select
            onChange={(e) => changeRace(e.target.value)}
            className="race"
            name="Race"
          >
            <option></option>
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
          <select
            onChange={(e) => changeType(e.target.value)}
            className="type"
            name="Type"
          >
            <option></option>
            <option>Effect</option>
            <option>Fusion</option>
            <option>Normal</option>
            <option>Ritual</option>
            <option>Synchro</option>
            <option>Xyz</option>
          </select>
        </div>

        <div>
          <label className="attack-text">ATK:</label>
          <input onChange={e => (setAttack((e.target.value)))} type="text" className="attack" />
        </div>

        <div>
          <label className="defence-text">DEF:</label>
          <input onChange={e => (setDefence((e.target.value)))} type="text" className="defence" />
        </div>

        <textarea onChange={e => (setDescription(e.target.value))} className="descript-text" placeholder="Description..." />

        <div>
          <label className="upload-text">Image:</label>
          <input type="file" className="upload" />
        </div>
      </div>

      <div>
        {showedCard}
      </div>

      <div className="desc-container">
        {description}
      </div>
    </>
  );
}

export default CardCreator;
