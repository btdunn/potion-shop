import '../App.css';
import React, {useState} from 'react'
import Dialogue from './dialogue'



const Shopkeep = () => {
  
  const [shopkeeper, setShopkeeper] = useState([
    'https://i.imgur.com/Uj7NyNE.png',
    'https://i.imgur.com/aKNI9rV.png',
    'https://i.imgur.com/6YDjjtp.png',
    'https://i.imgur.com/trFSGsg.png',
    'https://i.imgur.com/6YDjjtp.png',
    'https://i.imgur.com/Uj7NyNE.png',
  ])
  
  const [shopkeeperCounter, setShopkeeperCounter] = useState(0)

  const updateShopkeep = (counter: number) => {
    if(counter <= 4){
      setShopkeeperCounter(shopkeeperCounter + 1)
    }
    else{
      setShopkeeperCounter(0)
    }
  }

  return (
  <div className="shopkeep-container">
    <img className="shopkeep" src={shopkeeper[shopkeeperCounter]} alt=""/>
    <Dialogue updateShopkeep = {updateShopkeep}/>
  </div>

  )
}

export default Shopkeep
