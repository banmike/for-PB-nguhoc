import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">Dashboard</Link>
      <Link to="/data-sensor">Data Sensor</Link>
      <Link to="/action-history">Action History</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default Sidebar;
