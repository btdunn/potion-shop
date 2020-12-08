import { format } from 'path';
import React, {useState, useEffect} from 'react'
import '../App.css';
import {RandomPotion} from '../types'

const Shelves = ({potions}) => {
  
  const [randomPotions, setRandomPotions] = useState<RandomPotion[]>([])

  useEffect(() => {
    let randomPotion1 = potions[Math.floor(Math.random() * potions.length)];
    let randomPotion2 = potions[Math.floor(Math.random() * potions.length)];
    let randomPotion3 = potions[Math.floor(Math.random() * potions.length)];
    let storage: RandomPotion[] = []
    storage.push(randomPotion1, randomPotion2, randomPotion3)
    setRandomPotions(storage)
  }, [])
  
  const [isShown1, setIsShown1] = useState(false)
  const [isShown2, setIsShown2] = useState(false)
  const [isShown3, setIsShown3] = useState(false)
  
  return (
    <div className="shelves">
      <div className="spot1">
        {randomPotions.length > 0 ? 
          <img 
          onMouseEnter={() => setIsShown1(true)}
          onMouseLeave={() => setIsShown1(false)}
          className="potion" 
          src={randomPotions[0].name} 
          alt="potion"
          draggable
          />
        : null }
        {isShown1 && (
          <div className="potionInfo">
            <p>{randomPotions[0].description}</p>
            <p>Price: {randomPotions[0].price}</p>
          </div>
        )}
      </div>
      <div className="spot2">
        {randomPotions.length > 0 ? 
          <img 
          onMouseEnter={() => setIsShown2(true)}
          onMouseLeave={() => setIsShown2(false)}
          className="potion" 
          src={randomPotions[1].name} 
          alt="potion"
          draggable
          />
          : null }
        {isShown2 && (
          <div className="potionInfo">
            <p>{randomPotions[1].description}</p>
            <p>Price: {randomPotions[1].price}</p>
          </div>
        )}
      </div>
      <div className="spot3">
        {randomPotions.length > 0 ?
          <img 
          onMouseEnter={() => setIsShown3(true)}
          onMouseLeave={() => setIsShown3(false)}
          className="potion" 
          src={randomPotions[2].name} 
          alt="potion"
          draggable
          />
        : null }
        {isShown3 && (
          <div className="potionInfo">
            <p>{randomPotions[2].description}</p>
            <p>Price: {randomPotions[2].price}</p>
          </div>
        )}
      </div>
      <div className="recolor"></div>

    </div>
  )
}

export default Shelves