import React from 'react';
import './App.css';

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
        <div className="shopkeep-container">
          <img className="shopkeep" src="https://i.imgur.com/Uj7NyNE.png" alt=""/>
          <div className="dialogue-box">
            <p className="dialogue">
              hey sup
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
