import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./CardDataBase.css"
import MonsterCard from './MonsterCard/MonsterCard'


interface MonsterDetails {
  id : string;
  name : string;
  type : string;
  desc : string;
  race : string;
  card_images: Array<CardImage>;
}

interface CardImage {
  image_url_small: string;
}




function CardDataBase() {

const [filter, setFilter] = useState("");
const [monsters, setMonsters] = useState([] as Array<MonsterDetails>);

useEffect(() => {
  fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php`)
  .then(response => response.json())
  .then(data => {
    setMonsters(data.data)
    setFilter('')
  })
  .catch(() => console.log('not good'))
}, [])


  return (
    <>
    <div>
        <Link to="/home" className="home-link">
            Home
        </Link>
    </div>
        
        <input type="text" placeholder='Search Monster Card...' value={filter} onChange={ev => {setFilter(ev.target.value)}} className="monstersearch" />
        <div className="monsterBox">
        {monsters.length > 0 ? monsters
        .filter(mon => mon.name.toLowerCase().includes(filter.toLowerCase()))
      .map(monster => <MonsterCard
        key={monster.id}
        id={monster.id}
        name={monster.name}
        type={monster.type}
        desc={monster.desc}
        race={monster.race}
        image={monster.card_images [0].image_url_small}/>)
        :
        <div>loading...</div>
        }
        </div>
    </>
  )
}

export default CardDataBase