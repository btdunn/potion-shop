import React, {useState} from 'react'
import '../App.css';

const Shelves = ({potions}) => {
  
  const randomPotion = potions[Math.floor(Math.random() * potions.length)];
  console.log(randomPotion)

  return (
    <div className="shelves">
      
      <div className="recolor"></div>

    </div>
  )
}

export default Shelves