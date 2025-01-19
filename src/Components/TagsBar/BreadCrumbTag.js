import React from "react";
import classes from "../JobsFilterBar/BreadCrumb.module.css";
import ARROW from "../../asset/BreadCrumb/keyboard-arrow-down.svg";
import ICON from "../../asset/BreadCrumb/placeholder.svg";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <div className={classes.breadcrumb}>
      <img src={ICON} alt="Icon" className={classes.icon} />
      <Link to="/" className={classes.navLinkk}>
        Sheqlee
      </Link>
      {/* <span className={classes.separator}>&gt;</span> */}
      <img src={ARROW} alt="Bread-crumb" className={classes.separator} />
      <Link to="/tags" className={classes.navLinkkk}>
        Tags
      </Link>
    </div>
  );
};

export default Breadcrumb;
