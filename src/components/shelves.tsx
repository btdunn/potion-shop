import React, {useState} from 'react'
import '../App.css';

const Shelves = ({potions}) => {
  
  let randomPotion = potions[Math.floor(Math.random() * potions.length)];
  console.log(randomPotion)

  return (
    <div className="shelves">
      <div className="spot1">
        <img className="potion" src={randomPotion.name} alt="potion"/>
      </div>
      <div className="spot2">
        <img className="potion" src={randomPotion.name} alt="potion"/>
      </div>
      <div className="spot3">
        <img className="potion" src={randomPotion.name} alt="potion"/>
      </div>
      <div className="recolor"></div>

    </div>
  )
}

export default Shelves