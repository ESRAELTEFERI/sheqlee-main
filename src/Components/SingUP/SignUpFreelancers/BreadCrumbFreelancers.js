import React from "react";
import classes from "../../CategoriesBar/BreadcrumbCategories.module.css";
import ARROW from "../../../asset/BreadCrumb/keyboard-arrow-down.svg";
import ICON from "../../../asset/BreadCrumb/placeholder.svg";
import { Link } from "react-router-dom";

const BreadcrumbSign = () => {
  return (
    <div className={classes.breadcrumb}>
      <img src={ICON} alt="Icon" className={classes.icon} />
      <Link to="/" className={classes.navLinkk}>
        Sheqlee
      </Link>
      {/* <span className={classes.separator}>&gt;</span> */}
      <img src={ARROW} alt="Bread-crumb" className={classes.separator} />
      <Link to="/signupfreelancers" className={classes.navLinkkk}>
        Professional Signup
      </Link>
    </div>
  );
};

export default BreadcrumbSign;
