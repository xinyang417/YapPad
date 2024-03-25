import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/SignupPage.css';
import '../App.css';
import logo from '../assets/images/logo.png';

function SignupPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSignup = (event) => {
        event.preventDefault();
        console.log("Signup attempt with:", username, password, email);
        // Signup logic here
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSignup} className="signup-form">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="signup-logo" />
                </div>
                <h2>Sign Up</h2>
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
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit" className="signup-button">Sign Up</button>
                <Link to="/login" className="login-link">I already have an account</Link>
            </form>
        </div>
    );
}

export default SignupPage;