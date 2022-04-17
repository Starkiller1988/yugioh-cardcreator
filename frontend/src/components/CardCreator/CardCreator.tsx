import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CardCreator.css";
import { createArrayWithIds } from "../../utils/array";

import normalCard from "../../Media/Cardimages/common.png";
import effectCard from "../../Media/Cardimages/effect.png";
import fusionCard from "../../Media/Cardimages/fusion.png";
import ritualCard from "../../Media/Cardimages/ritual.png";
import synchroCard from "../../Media/Cardimages/synchro.png";
import xyzCard from "../../Media/Cardimages/xyz.png";

import dark from "../../Media/Attributes/DARK.png";
import light from "../../Media/Attributes/LIGHT.png";
import divine from "../../Media/Attributes/DIVINE.png";
import earth from "../../Media/Attributes/EARTH.png";
import fire from "../../Media/Attributes/FIRE.png";
import water from "../../Media/Attributes/WATER.png";
import wind from "../../Media/Attributes/WIND.png";

import levelstar1 from "../../Media/Level/levelstar.png";
import levelstar2 from "../../Media/Level/levelstar2.png";

const attributes = [dark, light, divine, earth, fire, wind, water];
const cardtypes = [
  normalCard,
  effectCard,
  fusionCard,
  ritualCard,
  synchroCard,
  xyzCard,
];

function CardCreator() {
  const [showedStars, setShowedStars] = useState<{ id: string }[]>([]);
  const [xyzStars, setXyzStars] = useState<{ id: string }[]>([]);
  const [showedRace, setShowedRace] = useState(<div></div>);
  const [showedAttribute, setShowedAttribute] = useState<string | undefined>();
  const [showedType, setShowedType] = useState(<div></div>);
  const [showedCard, setShowedCard] = useState<string | undefined>();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [attack, setAttack] = useState("");
  const [defence, setDefence] = useState("");

  const changeAttribute = (src: string) => {
    setShowedAttribute(src);
  };

  const changeType = (types: string) => {
    setShowedType(<div>{types}</div>);
  };

  const changeCard = (card: string) => {
    setShowedCard(card);
  };

  const changeRace = (races: string) => {
    setShowedRace(<div>{races}</div>);
  };

  const changeLevel = (stars: number) => {
    if (showedCard != xyzCard)
    setShowedStars(createArrayWithIds(stars));
  };

  const changeXyzLevel = (xyzlevel: number) => {
    if (showedCard === xyzCard) {
      setXyzStars(createArrayWithIds(xyzlevel));
    }
  };
  return (
    <div className="body-container">
      <Link to="/home" className="home-link">
        Home
      </Link>

      <div className="attribute_card">
        {showedAttribute && (
          <img src={showedAttribute} alt="character Attribute" />
        )}
      </div>

      <div className="cardtype-container">
        {showedCard && <img src={showedCard} alt="character Card" />}
      </div>

      <div className="star-container">
        {showedStars.map((star) => {
          return <img key={star.id} className="star" src={levelstar1} alt="" />;
        })}
      </div>

      <div className="star-container2">
        {xyzStars.map((star2) => {
          return (
            <img key={star2.id} className="star2" src={levelstar2} alt="" />
          );
        })}
      </div>

      <div className="name-container">{name}</div>

      <div className="race-container">
        {showedRace}/{showedType}
      </div>

      <div className="attack-container">{attack}</div>

      <div className="defence-container">{defence}</div>

      <div className="inputfield">
        <input
          onChange={(e) => setName(e.target.value)}
          className="input-items"
          type="text"
          placeholder="Name"
        />

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

        <label className="xyzlevel-text">Xyz-Level:</label>
        <select
          onChange={(e) => changeXyzLevel(parseInt(e.target.value))}
          name="xyzlevel"
          className="xyzLevel"
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
          {attributes.map((attribute) => {
            return (
              <button
                key={attribute}
                className="btn"
                onClick={() => {
                  changeAttribute(attribute);
                }}
              >
                <img src={attribute} alt="" className="attribute-img" />
              </button>
            );
          })}
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

        <label className="cardtype-text">CardType:</label>
        <div className="cardtype-array">
          {cardtypes.map((cardtypes) => {
            return (
              <button
                key={cardtypes}
                className="cardtype-btn"
                onClick={() => {
                  changeCard(cardtypes);
                }}
              >
                <img src={cardtypes} alt="" className="attribute-img" />
              </button>
            );
          })}
        </div>

        <div>
          <label className="attack-text">ATK:</label>
          <input
            onChange={(e) => setAttack(e.target.value)}
            type="text"
            className="attack"
          />
        </div>

        <div>
          <label className="defence-text">DEF:</label>
          <input
            onChange={(e) => setDefence(e.target.value)}
            type="text"
            className="defence"
          />
        </div>

        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="descript-text"
          placeholder="Description..."
        />

        <div>
          <label className="upload-text">Image:</label>
          <input type="file" className="upload" />
        </div>
      </div>

      <div className="desc-container">{description}</div>
    </div>
  );
}

export default CardCreator;
