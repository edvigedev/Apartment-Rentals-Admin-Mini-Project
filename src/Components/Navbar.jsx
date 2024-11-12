import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <button>Search</button>
      <button>Filters</button>
    </nav>
  );
};

export default Navbar;
