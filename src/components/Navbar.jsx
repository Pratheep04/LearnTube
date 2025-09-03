import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Tutorial App</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/category/IT">IT</Link>
        <Link to="/category/Mechanical">Mechanical</Link>
        <Link to="/category/Civil">Civil</Link>
      </div>
    </nav>
  );
};

export default Navbar;
