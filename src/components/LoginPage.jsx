import React, { useState } from 'react';
import '../style/LoginPage.css';
import logo from '../assets/images/logo.png';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login attempt with:", username, password);
    // Login logic here
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="login-logo" />
        </div>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button">Login</button>
        <button to="/signup" className="signup-redirect">I don't have an account</button>
      </form>
    </div>
  );
}

export default LoginPage;