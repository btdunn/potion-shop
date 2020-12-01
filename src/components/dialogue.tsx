import React, {useState, MouseEvent} from 'react'
import '../App.css';


const Dialogue = () => {

  const [dialogue, setDialogue] = useState([
    "hey welcome in",
    "what did you need?"
  ])

  const handleClick = (event: MouseEvent) => {
    console.log("ok")
  }

  return (
    <div onClick={handleClick} className="dialogue-box">
      <p className="dialogue">
        {dialogue}
      </p>
    </div>
  )
}

export default Dialogue