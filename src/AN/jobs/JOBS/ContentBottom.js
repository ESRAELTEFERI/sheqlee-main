import React from "react";
import { getIconForKey } from "./IconMap"; // Import the utility function
import classes from "./ContentBottom.module.css";
const ContentBottom = ({ elementKey, elementValue, showApplyButton }) => {
  const icon = getIconForKey(elementKey); // to fetch icon dynamically
  return (
    <>
      <div className={classes.content}>
        {icon && <img src={icon} alt={elementKey} className={classes.icon} />}
        <span className={classes.text}>{elementValue}</span>
        {showApplyButton && (
          <button className={classes.bottoncontent}>Apply</button>
        )}
      </div>
    </>
  );
};

export default ContentBottom;
