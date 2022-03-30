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
    </div>
  )
}

export default MonsterCard