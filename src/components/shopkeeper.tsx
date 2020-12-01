import '../App.css';
import React, {useState} from 'react'
import Dialogue from './dialogue'



const Shopkeep = () => {
  
  const [shopkeeper, setShopkeeper] = useState(['https://i.imgur.com/Uj7NyNE.png'])
  
  

  return (
  <div className="shopkeep-container">
    <img className="shopkeep" src={shopkeeper[0]} alt=""/>
    <Dialogue />
  </div>

  )
}

export default Shopkeep
