import React from "react";
import classes from "../CategoriesBar/BreadcrumbCategories.module.css";
import ARROW from "../../asset/BreadCrumb/keyboard-arrow-down.svg";
import ICON from "../../asset/BreadCrumb/placeholder.svg";
import { Link, useParams } from "react-router-dom";
import { getTagsWithName } from "../Tags/TagData";

const BreadcrumbCategories = () => {
  const { tagsName } = useParams();
  const category = getTagsWithName.find(
    (tag) =>
      tag.name.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-") ===
      tagsName
  );

  return (
    <div className={classes.breadcrumb}>
      <img src={ICON} alt="Icon" className={classes.icon} />
      <Link to="/" className={classes.navLinkk}>
        Sheqlee
      </Link>
      <img src={ARROW} alt="Bread-crumb" className={classes.separator} />
      <Link to="/tags" className={classes.navLinkk}>
        Tags
      </Link>
      <img src={ARROW} alt="Bread-crumb" className={classes.separator} />
      <Link to={`/categories/${tagsName}`} className={classes.navLinkkk}>
        {category.name}
      </Link>
    </div>
  );
};

export default BreadcrumbCategories;
