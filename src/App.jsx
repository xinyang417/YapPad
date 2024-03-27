import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

function App() {
    return (
        <Router>
            {/* TODO: Add Navbar */}
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
            {/* TODO: Add Footer */}
            {/* TODO: Add Bottombar */}
        </Router>
    );
}

export default App;