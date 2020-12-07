import React, {useState} from 'react'
import '../App.css';

const Shelves = ({potions}) => {
  
  const [isShown, setIsShown] = useState(false)

  const randomPotion1 = potions[Math.floor(Math.random() * potions.length)];
  const randomPotion2 = potions[Math.floor(Math.random() * potions.length)];
  const randomPotion3 = potions[Math.floor(Math.random() * potions.length)];

  return (
    <div className="shelves">
      <div className="spot1">
        <img 
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className="potion" 
        src={randomPotion1.name} 
        alt="potion"
        />
        {isShown && (
          <div className="potionInfo">
            <p>{randomPotion1.description}</p>
            <p>Price: {randomPotion1.price}</p>
          </div>
        )}
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