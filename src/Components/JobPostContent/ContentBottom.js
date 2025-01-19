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
              src={getIconForKey("time")}
              alt="timePosted"
              className={classes.icon}
            />
            {timePosted}
          </span>
          <span>
            <img
              src={getIconForKey("type")}
              alt="company"
              className={classes.icon}
            />
            {company}
          </span>
          <span>
            <img
              src={getIconForKey("timeKind")}
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
              src={getIconForKey("price")}
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
