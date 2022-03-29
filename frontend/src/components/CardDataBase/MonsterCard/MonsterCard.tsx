import React from 'react'
import "./MonsterCard.css"


interface MonsterCardProps{
    id : string;
    name : string;
    type : string;
    desc : string;
    race : string;
    image: string;
}

function MonsterCard(props: MonsterCardProps) {
  return (
    <div className="card">
    <img src={props.image} alt="" className="cardImage"/>
    <h1 className="cardHeader">{props.name}</h1>
    </div>
  )
}

export default MonsterCard