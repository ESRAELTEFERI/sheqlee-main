import React from "react";
import classes from "../../CategoriesBar/BreadcrumbCategories.module.css";
import ARROW from "../../../asset/BreadCrumb/keyboard-arrow-down.svg";
import ICON from "../../../asset/BreadCrumb/placeholder.svg";
import { Link } from "react-router-dom";

const BreadcrumbPolicy = () => {
  return (
    <div className={classes.breadcrumb}>
      <img src={ICON} alt="Icon" className={classes.icon} />
      <Link to="/" className={classes.navLinkk}>
        Sheqlee
      </Link>
      {/* <span className={classes.separator}>&gt;</span> */}
      <img src={ARROW} alt="Bread-crumb" className={classes.separator} />
      <Link to="/privacypolicy" className={classes.navLinkkk}>
        Privacy Policy
      </Link>
    </div>
  );
};

export default BreadcrumbPolicy;
