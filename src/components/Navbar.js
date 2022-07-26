import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import logo from "./SElogo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="Surreal Estate Logo" />
      <ul className="navbar-links">
        <Link className="navbar-links-item" to="/">
          View Properties
        </Link>
        <Link className="navbar-links-item" to="/add-property">
          Add a Property
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
