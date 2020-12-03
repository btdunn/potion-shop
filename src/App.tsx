import React from 'react';
import './App.css';
import Shopkeeper from './components/shopkeeper'
import Satchel from './components/satchel'

function App() {
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
