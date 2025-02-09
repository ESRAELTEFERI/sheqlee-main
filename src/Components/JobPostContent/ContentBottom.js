import React from "react";
import { getIconForKey } from "./IconMap";
import classes from "./ContentBottom.module.css";

const ContentBottom = ({
  elementKey,
  timePosted,
  company,
  jobType,
  level,
  pay,
  applyLink,
}) => {
  return (
    <div className={classes.content}>
      <div className={classes.detailsContainer}>
        <div className={classes.details}>
          <span>
            <img
              src={getIconForKey("timePosted")}
              alt="timePosted"
              className={classes.icon}
            />
            {timePosted}
          </span>
          <span>
            <img
              src={getIconForKey("company")}
              alt="company"
              className={classes.icon}
            />
            {company}
          </span>
          <span>
            <img
              src={getIconForKey("jobType")}
              alt="jobType"
              className={classes.icon}
            />
            {jobType}
          </span>
        </div>
        <div className={classes.meta}>
          <span>
            <img
              src={getIconForKey("level")}
              alt="level"
              className={classes.icon}
            />
            {level}
          </span>
          <span>
            <img
              src={getIconForKey("pay")}
              alt="pay"
              className={classes.icon}
            />
            {pay}
          </span>
          <button className={classes.applyButton}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default ContentBottom;
