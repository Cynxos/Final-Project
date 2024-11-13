import React from 'react';
import { Link } from 'react-router-dom';
import './assets/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">FitQuest</div>
      <div className="navbar-links">
        <Link to="/dashboard" className="navbar-link">Dashboard</Link>
        <Link to="/challenges" className="navbar-link">Challenges</Link>
        <Link to="/profile" className="navbar-link">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
