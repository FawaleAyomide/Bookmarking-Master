import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

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
        <IoCloseSharp className="close-icon" onClick={menuShow}/>
        <Link to="/features" className="nav-item">
          FEATURES
        </Link>
        <Link to="/pricing" className="nav-item">
          PRICING
        </Link>
        <Link to="/contact" className="nav-item last">
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
