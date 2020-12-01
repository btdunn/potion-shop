import React from 'react';
import './App.css';
import Shopkeeper from './components/shopkeeper'

function App() {
  return (
    <div className="App">
      <div className="shelves">
      <div className="recolor"></div>

      </div>
      <div className="right-container">
        <div className="cart">
          <h1>Welcome to Masterful Mixtures</h1>
          <img className="satchel" src="https://www.flaticon.com/svg/static/icons/svg/2743/2743998.svg" alt="satchel"/>
        </div>
        <Shopkeeper />
      </div>
    </div>
  );
}

export default App;
