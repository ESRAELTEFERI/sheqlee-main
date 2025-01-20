import React from "react";
import logo from "../../../asset/Logo.svg";
import classes from "./Navbar.module.css";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <img src={logo} alt="Logo" className={classes.icon} />
      <span className={classes.brandName}>Sheqlee</span>
    </div>
  );
};

export default Logo;
