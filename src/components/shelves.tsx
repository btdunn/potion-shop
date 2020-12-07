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
  console.log(randomPotions)
  
  const [isShown1, setIsShown1] = useState(false)
  const [isShown2, setIsShown2] = useState(false)
  const [isShown3, setIsShown3] = useState(false)
  
  return (
    <div className="shelves">
      {/* <div className="spot1">
        <img 
        onMouseEnter={() => setIsShown1(true)}
        onMouseLeave={() => setIsShown1(false)}
        className="potion" 
        src={randomPotion1.name} 
        alt="potion"
        />
        {isShown1 && (
          <div className="potionInfo">
            <p>{randomPotion1.description}</p>
            <p>Price: {randomPotion1.price}</p>
          </div>
        )}
      </div>
      <div className="spot2">
        <img 
        onMouseEnter={() => setIsShown2(true)}
        onMouseLeave={() => setIsShown2(false)}
        className="potion" 
        src={randomPotion2.name} 
        alt="potion"
        />
        {isShown2 && (
          <div className="potionInfo">
            <p>{randomPotion2.description}</p>
            <p>Price: {randomPotion2.price}</p>
          </div>
        )}
      </div>
      <div className="spot3">
        <img 
        onMouseEnter={() => setIsShown3(true)}
        onMouseLeave={() => setIsShown3(false)}
        className="potion" 
        src={randomPotion3.name} 
        alt="potion"
        />
        {isShown3 && (
          <div className="potionInfo">
            <p>{randomPotion3.description}</p>
            <p>Price: {randomPotion3.price}</p>
          </div>
        )}
      </div> */}
      <div className="recolor"></div>

    </div>
  )
}

export default Shelves