import React, { useState, useEffect} from 'react';
import './App.css';
import Shopkeeper from './components/shopkeeper'
import Satchel from './components/satchel'
import {Potions} from './types'


function App() {

  const [potions, setPotions] = useState<Potions[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/potions')
      .then(response => response.json())
      .then((results) => {
      setPotions(results as Potions[])
      })
  }, [])

  return (
    <div className="App">
      <div className="shelves">
      <div className="recolor"></div>

      </div>
      <div className="right-container">
        <Satchel />
        <Shopkeeper />
      </div>
    </div>
  );
}

export default App;
