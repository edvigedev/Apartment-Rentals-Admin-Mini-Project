import React from "react";
import logo from "../assets/images/logo1.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <NavLink to="/PropertyDetails">
        <button>Property Details</button>
      </NavLink>
      <NavLink to="/AboutUs">
        <button>About Us</button>
      </NavLink>
    </nav>
  );
};

export default Navbar;
