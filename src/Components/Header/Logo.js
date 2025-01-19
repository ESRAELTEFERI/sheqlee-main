import React from "react";
import { Link } from "react-router-dom";
import logo from "../../asset/Logo.svg";
import classes from "./Logo.module.css";

const Logo = () => (
  <Link to="/" className={classes.align}>
    <img src={logo} alt="Logo" className={classes.logo} />
    <span className={classes.sheq}>Sheqlee</span>
  </Link>
);

export default Logo;
