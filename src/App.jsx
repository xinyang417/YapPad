import React from 'react';
import './App.css';
import logo from './assets/images/logo.png'; 
import rightImage from './assets/images/rightImage.jpeg'; 

function App() {
  return (
    <div className="main-container">
      <div className="content-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h1>Welcome to YapPad</h1>
        <div className="button-container">
          <button className="button">Login</button>
          <button className="button">Sign Up</button>
        </div>
      </div>
      <div className="image-container">
        <img src={rightImage} alt="Decorative" className="right-image" />
      </div>
    </div>
  );
}

export default App;
