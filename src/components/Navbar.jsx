import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo LT.png" alt="LearnTube Logo" className="logo-img" />
        <h1 className="logo-text">LearnTube</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/category/IT">IT</Link>
        <Link to="/category/Mechanical">Mechanical</Link>
      </div>
    </nav>
  );
};

export default Navbar;
