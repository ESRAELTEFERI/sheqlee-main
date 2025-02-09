import React from "react";
import classes from "./BreadcrumbCategories.module.css";
import ARROW from "../../asset/BreadCrumb/keyboard-arrow-down.svg";
import ICON from "../../asset/BreadCrumb/placeholder.svg";
import { Link, useParams } from "react-router-dom";
import { getTags } from "./CategoryDetailsMap";

const BreadcrumbCategories = () => {
  const { categoryName } = useParams();
  const category = getTags.find(
    (tag) =>
      tag.name.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-") ===
      categoryName
  );

  return (
    <div className={classes.breadcrumb}>
      <img src={ICON} alt="Icon" className={classes.icon} />
      <Link to="/" className={classes.navLinkk}>
        Sheqlee
      </Link>
      <img src={ARROW} alt="Bread-crumb" className={classes.separator} />
      <Link to="/categories" className={classes.navLinkk}>
        Categories
      </Link>
      <img src={ARROW} alt="Bread-crumb" className={classes.separator} />
      <Link to={`/categories/${categoryName}`} className={classes.navLinkkk}>
        {category.name}
      </Link>
    </div>
  );
};

export default BreadcrumbCategories;
