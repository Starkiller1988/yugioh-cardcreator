import React, { useState, useEffect } from "react";
import "./CardCreatorDB.css";
import { useAuth } from "../Authentication/AuthProvider";
import YugiohCard from "../../model";
import { Link } from "react-router-dom";

function CardCreatorDB() {
  const [cards, setCards] = useState([] as Array<YugiohCard>);
  const { token } = useAuth();

  const fetchAll = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/cards`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((cardsFromBackend: Array<YugiohCard>) =>
        setCards(cardsFromBackend)
      );
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div>
      <div>
      <Link to="/creator" className="creator-link">
        Card Creator
      </Link>
      </div>

      {cards.map((card) => (
        <div key={card.id} className="savedCard">
          <img className="savedcardtype" src={card.cardtype} alt="" />
          <img className="savedimage" src={card.image} alt="" />
         
         <div key={card.id} className="details-container">
         <div className="savedname">Name: {card.name}</div>
         <div className="savedrace">Race: {card.race}</div>
         <div className="savedtype">Type: {card.type}</div>
         <div className="savedlevel">Level: {card.normalLevel}</div>
          <div className="savedxyzlevel">Xyz-Level: {card.xyzLevel}</div>
          <div className="attribute-txt">Attribute:</div>
          <img className="savedattribute" src={card.attribute} alt="" />
          <div className="savedattack">Attack: {card.attack}</div>
          <div className="saveddefence">Defence: {card.defence}</div>
          <div className="saveddescription">Description: {card.description}</div>
         </div>
         </div>
      ))}
    </div>
  );
}

export default CardCreatorDB;
