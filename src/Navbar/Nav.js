import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [active, setActive] = useState(false);

  const menuShow = () => {
    setActive(!active);
  };

  return (
    <div className="Nav">
        <Link to='/' className="logo"></Link>
        <div className="hamburger" onClick={menuShow}>
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
        </div>
      <div className={active ? "Navlinks active" : "Navlinks"}>
        <h1 className="close-icon" onClick={menuShow}>X</h1>
        <Link to="/features" className="nav-item">
          FEATURES
        </Link>
        <Link to="/pricing" className="nav-item">
          PRICING
        </Link>
        <Link to="/contact" className="nav-item">
          CONTACT
        </Link>
        <Link to="/login" className="nav-item navBtn">
          LOGIN
        </Link>
      </div>
    </div>
  );
};

export default Nav;
