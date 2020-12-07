import React, { useState, useEffect} from 'react';
import './App.css';
import Shopkeeper from './components/shopkeeper'
import Satchel from './components/satchel'
import Shelves from './components/shelves'
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
      <Shelves />
      <div className="right-container">
        <Satchel />
        <Shopkeeper />
      </div>
    </div>
  );
}

export default App;
