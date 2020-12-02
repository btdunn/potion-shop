import React, {useState, MouseEvent} from 'react'
import '../App.css';


const Dialogue = () => {

  const [dialogue, setDialogue] = useState(
    '...'
  )

  const [counter, setCounter] = useState(0)

  const handleClick = (event: MouseEvent) => {
    const options = [
      "hey",
      "ok",
      "sure",
      "no",
    ]
    
    setDialogue(options[counter])
    setCounter(counter + 1)
  }



  return (
    <div className="dialogue-box">
      <div onClick={handleClick} className="triangle-right"></div>
      <p className="dialogue">
        {dialogue}
      </p>
    </div>
  )
}

export default Dialogue