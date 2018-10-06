import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="logo">Informaportal</Link>
    <input className="menu-btn" type="checkbox" id="menu-btn" />
    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
    <ul className="menu">
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Signup</Link></li>
    </ul>
    <ul className="menu-right">
      <li><a href="mailto:mcqnyc@gmail.com">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
