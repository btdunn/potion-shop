import React, {useState, MouseEvent} from 'react'
import '../App.css';


const Dialogue = ({updateShopkeep}: any) => {

  const [dialogue, setDialogue] = useState(
    '...'
  )

  const [counter, setCounter] = useState(0)

  const handleClick = (event: MouseEvent) => {
    const options = [
      "...hey. Welcome to Masterful Mixtures...",
      "take a look around. You can drag what you want into your bag...",
      "top right of the screen, see?",
      "thanks for shopping!",
      "...",
    ]
    
    if(counter <= 4){
      setDialogue(options[counter])
      updateShopkeep(counter)
      setCounter(counter + 1)
    }
  }

  

  return (
    <div className="dialogue-box">
      <div onClick={handleClick} className="triangle-right"></div>
      <h3 className="dialogue-heading">Shopkeeper</h3>
      <p className="dialogue">
        {dialogue}
      </p>
    </div>
  )
}

export default Dialogue