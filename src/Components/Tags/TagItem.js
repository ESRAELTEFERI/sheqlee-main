import React from "react";
import classes from "./TagItem.module.css";

const TagItem = ({ name, jobs, subscribers, loading }) => {
  /* this is the shimmering effect it renders the skeleton loader when loading is true. */
  if (loading) {
    console.log("Loading skeleton is rendering.");
    return (
      <div className={classes.skeletonTagItem}>
        <div className={classes.skeletonTitle}></div>
        <div className={classes.skeletonDetails}>
          <div className={classes.skeletonBar}></div>
          <div className={classes.skeletonDot}></div>
          <div className={classes.skeletonBar}></div>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.tagItem}>
      <p className={classes.tagName}>{name}</p>
      <p className={classes.tagDetails}>
        {jobs} jobs <span className={classes.dot}>•</span> {subscribers}{" "}
        subscribers
      </p>
    </div>
  );
};

export default TagItem;
