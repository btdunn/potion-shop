import { format } from 'path';
import React, {useState, useEffect} from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
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
      <DragDropContext>
        <Droppable droppableId="potions">
          {(provided) => (
          <div className="spot1" {...provided.droppableProps} ref="provided.innerRef">
            {randomPotions.length > 0 ? 
              <Draggable>
              <img 
              onMouseEnter={() => setIsShown1(true)}
              onMouseLeave={() => setIsShown1(false)}
              className="potion" 
              src={randomPotions[0].name} 
              alt="potion"
              />
              </Draggable>
            : null }
            {isShown1 && (
              <div className="potionInfo">
                <p>{randomPotions[0].description}</p>
                <p>Price: {randomPotions[0].price}</p>
              </div>
            )}
          </div>
          <div className="spot2" {...provided.droppableProps} ref="provided.innerRef">
            {randomPotions.length > 0 ? 
            <Draggable>
            <img 
            onMouseEnter={() => setIsShown2(true)}
            onMouseLeave={() => setIsShown2(false)}
            className="potion" 
            src={randomPotions[1].name} 
            alt="potion"
            />
            </Draggable>
            : null }
            {isShown2 && (
              <div className="potionInfo">
                <p>{randomPotions[1].description}</p>
                <p>Price: {randomPotions[1].price}</p>
              </div>
            )}
          </div>
          <div className="spot3" {...provided.droppableProps} ref="provided.innerRef">
            {randomPotions.length > 0 ? 
            <Draggable>
            <img 
            onMouseEnter={() => setIsShown3(true)}
            onMouseLeave={() => setIsShown3(false)}
            className="potion" 
            src={randomPotions[2].name} 
            alt="potion"
            />
            </Draggable>
            : null }
            {isShown3 && (
              <div className="potionInfo">
                <p>{randomPotions[2].description}</p>
                <p>Price: {randomPotions[2].price}</p>
              </div>
            )}
          </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className="recolor"></div>

    </div>
  )
}

export default Shelves