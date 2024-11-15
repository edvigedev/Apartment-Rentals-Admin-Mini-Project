import React from "react";
import logo from "../assets/images/logo1.png";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <NavLink to="/AddProperty">
        <button>Add a Property</button>
      </NavLink>
      <NavLink to="/AboutUs">
        <button>About Us</button>
      </NavLink>
    </nav>
  );
};

export default Navbar;
