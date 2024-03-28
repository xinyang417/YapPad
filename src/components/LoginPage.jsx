// Backend Imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Frontend Imports
import '../style/LoginPage.css';
import '../App.css';
import logo from '../assets/images/logo.png';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/auth/login', {
                email: email,
                password: password
            });
            console.log('Login successful: ', email);
        } catch (error) {
            console.error('Login failed:', error.response || error.request || error.message);
            if (error.response) {
                if (error.response.status === 401) {
                    setErrorMessage('Invalid email or password');
                } else {
                    setErrorMessage('An unexpected error occurred. Please try again later.');
                }
            } else if (error.request) {
                setErrorMessage('Request was made, but no response from the server. Please check your internet connection.');
            } else {
                setErrorMessage('Something else happened in making the request... An unexpected error occurred. Please try again later.');
            }
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="login-logo" />
                </div>
                <h2>Login</h2>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="username"
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
                        autoComplete="current-password"
                    />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button type="submit" className="login-button">Login</button>
                <Link to="/signup" className="signup-link">I don't have an account</Link>
            </form>
        </div>
    );
}

export default LoginPage;