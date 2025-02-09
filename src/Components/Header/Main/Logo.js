import React from "react";
import logo from "../../../asset/Logo.svg";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Logo = ({ onToggleMenu }) => {
  return (
    <Link to="/" className={classes.logo}>
      <span className={classes.menuIcon} onClick={onToggleMenu}>
        &#9776;
      </span>
      {/* <Link to="/"> */}
      <img src={logo} alt="Logo" className={classes.icon} />
      <span className={classes.brandName}>Sheqlee</span>
    </Link>
  );
};

export default Logo;
