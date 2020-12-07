import React, {useState} from 'react'
import '../App.css';

const Shelves = ({potions}) => {
  
  let randomPotion1 = potions[Math.floor(Math.random() * potions.length)];
  let randomPotion2 = potions[Math.floor(Math.random() * potions.length)];
  let randomPotion3 = potions[Math.floor(Math.random() * potions.length)];

  return (
    <div className="shelves">
      <div className="spot1">
        <img className="potion" src={randomPotion1.name} alt="potion"/>
      </div>
      <div className="spot2">
        <img className="potion" src={randomPotion2.name} alt="potion"/>
      </div>
      <div className="spot3">
        <img className="potion" src={randomPotion3.name} alt="potion"/>
      </div>
      <div className="recolor"></div>

    </div>
  )
}

export default Shelves