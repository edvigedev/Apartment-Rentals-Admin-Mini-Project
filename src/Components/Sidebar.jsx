import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/GreatDeals">
        <button>Great Deals</button>
      </Link>
      <Link to="/Premium">
        <button>Premium</button>
      </Link>
      <Link to="/Vip">
        <button>VIP</button>
      </Link>
    </div>
  );
};

export default Sidebar;
