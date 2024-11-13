import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <button>Property Details</button>
      <button>About Us</button>
    </nav>
  );
};

export default Navbar;
