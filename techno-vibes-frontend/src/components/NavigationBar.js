import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css';

function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <div className="nav-left">
      <Link to="/" className="nav-item">
        <i className="icon-lightning"></i>
      </Link>
      <Link to="/search" className="nav-item">
        <i className="icon-search"></i>
      </Link>
      </div>

      <div className="nav-center">
      <h1 className="nav-title">TECHNO VIBES</h1>
      </div>

      <div className="nav-right">
      <Link to="/tickets" className="nav-item">
        <i className="icon-ticket"></i>
      </Link>
      <Link to="/profile" className="nav-item">
        <i className="icon-profile"></i>
        <span className="notification-badge">1</span>
      </Link>
      </div>
    </nav>
  );
}

export default NavigationBar;
