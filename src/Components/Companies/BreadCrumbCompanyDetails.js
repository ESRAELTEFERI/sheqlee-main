import React from "react";
import classes from "./BreadCrumbCompany.module.css";
import ARROW from "../../asset/BreadCrumb/keyboard-arrow-down.svg";
import ICON from "../../asset/BreadCrumb/placeholder.svg";
import { Link, useParams } from "react-router-dom";

const BreadcrumbCompanies = () => {
  const { companysName } = useParams();

  return (
    <div className={classes.breadcrumb}>
      <img src={ICON} alt="Icon" className={classes.icon} />
      <Link to="/" className={classes.navLinkk}>
        Sheqlee
      </Link>
      <img src={ARROW} alt="Bread-crumb" className={classes.separator} />
      <Link to="/companies" className={classes.navLinkk}>
        Companies
      </Link>
      <img src={ARROW} alt="Bread-crumb" className={classes.separator} />
      <Link to={`/campanies/${companysName}`} className={classes.navLinkkk}>
        {companysName?.replace(/-/g, " ")}
      </Link>
    </div>
  );
};

export default BreadcrumbCompanies;
