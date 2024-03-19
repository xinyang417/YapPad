import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import logo from './assets/images/logo.png';
import rightImage from './assets/images/rightImage.jpeg';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

function HomePage() {
  let navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  }

  return (
    <div className="main-container">
      <div className="content-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h1>Welcome to YapPad</h1>
        <div className="button-container">
          <button className="button" onClick={handleLoginClick}>Login</button>
          <button className="button" onClick={handleSignupClick}>Sign Up</button>
        </div>
      </div>
      <div className="image-container">
        <img src={rightImage} alt="Decorative" className="right-image" />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      {/* TODO Add Navbar */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      {/* TODO Add Footer */}
      {/* TODO Add Bottombar */}
    </Router>
  );
}

export default App;
