import React from "react";
import classes from "../CategoriesBar/BreadcrumbCategories.module.css";
import ARROW from "../../asset/BreadCrumb/keyboard-arrow-down.svg";
import ICON from "../../asset/BreadCrumb/placeholder.svg";
import { Link } from "react-router-dom";

const BreadCrumbEdit = () => {
  return (
    <div className={classes.breadcrumb}>
      <img src={ICON} alt="Icon" className={classes.icon} />
      <Link to="/" className={classes.navLinkk}>
        Sheqlee
      </Link>
      {/* <span className={classes.separator}>&gt;</span> */}
      <img src={ARROW} alt="Bread-crumb" className={classes.separator} />
      <Link to="/edit-profile" className={classes.navLinkkk}>
        Profile
      </Link>
    </div>
  );
};

export default BreadCrumbEdit;
