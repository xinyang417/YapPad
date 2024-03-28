// Backend Imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Frontend Imports
import '../style/SignupPage.css';
import '../App.css';
import logo from '../assets/images/logo.png';

function SignupPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSignup = async (event) => {
        event.preventDefault();
        console.log("Signup attempt with", email);

        try {
            const response = await axios.post('http://localhost:8000/auth/register', {
                username: username,
                email: email,
                password: password
            });
            console.log('Signup successful.', response.data.message);
        } catch (error) {
            console.error('Signup failed:', error.message);
        }
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSignup} className="signup-form">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="signup-logo" />
                </div>
                <h2>Sign Up</h2>
                <div className="input-group">
                    <label htmlFor="email">Email (will be used for Login)</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
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
                <button type="submit" className="signup-button">Sign Up</button>
                <Link to="/login" className="login-link">I already have an account</Link>
            </form>
        </div>
    );
}

export default SignupPage;