import React, {useState, MouseEvent} from 'react'
import '../App.css';


const Dialogue = () => {

  const [dialogue, setDialogue] = useState(
    '...'
  )

  const handleClick = (event: MouseEvent) => {
    const options = [
      "hey",
      "ok"
    ]
    
    for(let i: number = 0; i < options.length; i++){
      setDialogue(options[i])
    }
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