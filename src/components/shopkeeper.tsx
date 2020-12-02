import '../App.css';
import React, {useState} from 'react'
import Dialogue from './dialogue'



const Shopkeep = () => {
  
  const [shopkeeper, setShopkeeper] = useState([
    'https://i.imgur.com/Uj7NyNE.png',
    'https://i.imgur.com/6YDjjtp.png'
  ])
  
  const [shopkeeperCounter, setShopkeeperCounter] = useState(0)


  return (
  <div className="shopkeep-container">
    <img className="shopkeep" src={shopkeeper[shopkeeperCounter]} alt=""/>
    <Dialogue />
  </div>

  )
}

export default Shopkeep
