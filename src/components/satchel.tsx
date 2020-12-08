import React, {useState, MouseEvent} from 'react'
import '../App.css';

const Satchel = () => {

  const [contents, setContents] = useState([])


  const selectItem = () => {
    console.log("bag")
  }

  return (
    <div className="cart">
      <h1 className="sign">Masterful Mixtures</h1>
      <img 
      className="satchel" 
      src="https://www.flaticon.com/svg/static/icons/svg/2743/2743998.svg" 
      alt="satchel"
      onDragOver={(event: MouseEvent) => {selectItem()}}
      />
      <img className="cart-overlay" src="https://i.imgur.com/Mm49f5v.jpg" alt="wood"/>
  </div>
  )
}

export default Satchel