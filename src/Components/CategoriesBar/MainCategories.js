import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainCategories.module.css";
import { getTagsWithIcons } from "./MainCategoriesMap";
import CATEGORIES from "../../asset/categories.svg";

const Categories = () => {
  const iconsMap = getTagsWithIcons;

  return (
    <div className={classes.container}>
      <img
        src={CATEGORIES}
        alt="categories header"
        className={classes.iconCat}
      />
      <h1 className={classes.heading}>All Categories</h1>
      <p className={classes.subheading}>
        Job categories along with their respective number of jobs posted and
        number of subscribers.
      </p>
      <div className={classes.grid}>
        {iconsMap.map((cat, index) => (
          <Link
            to={`/categories/${
              cat.name

                .toLowerCase()
                .replace(/\s+/g, "-")
                // .replace(/&/g, "and")
                .replace(/\//g, "-")
              // .replace(/[^a-z0-9-]/g, "")
            }`}
            className={classes.card}
            key={index}
          >
            <div className={classes.iconContainer}>
              <img src={cat.icon} alt={cat.name} className={classes.icon} />
            </div>
            <div className={classes.contentContainer}>
              <h3 className={classes.title}>{cat.name}</h3>
              <p className={classes.details}>
                {cat.jobs} jobs <span className={classes.bullet}>&bull;</span>{" "}
                {cat.subscribers.toLocaleString()} subscribers
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
