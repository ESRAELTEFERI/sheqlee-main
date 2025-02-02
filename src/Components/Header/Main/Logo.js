import React from "react";
import logo from "../../../asset/Logo.svg";
import classes from "./Navbar.module.css";

const Logo = ({ onToggleMenu }) => {
  return (
    <div className={classes.logo}>
      <span className={classes.menuIcon} onClick={onToggleMenu}>
        &#9776;
      </span>
      <img src={logo} alt="Logo" className={classes.icon} />
      <span className={classes.brandName}>Sheqlee</span>
    </div>
  );
};

export default Logo;
