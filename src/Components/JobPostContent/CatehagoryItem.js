import React from "react";
// import { getIconForTitle } from "./IconMap";
import classes from "./ContentItems.module.css";
import ContentBottom from "./ContentBottom";
// const ContentItem = ({ title, description, children, loading }) => {
const CatehagoryItem = ({
  title,
  description,
  timePosted,
  company,
  jobType,
  level,
  pay,
  applyLink,
  loading,
}) => {
  if (loading) {
    /* creating shimmering effect */
    return (
      <div className={classes.skeletonContentItem}>
        <div className={classes.skeletonImage}></div> {/* Image placeholder */}
        <div className={classes.skeletonTitleIcon}>
          <div className={classes.skeletonIcon}></div> {/* Icon placeholder */}
          <div className={classes.skeletonTitle}></div>{" "}
          {/* Title placeholder */}
        </div>
        <div className={classes.skeletonDescription}></div>
        <div className={classes.skeletonDescriptionSecond}></div>
        <div className={classes.skeletonContainer}>
          <div className={classes.skeletonElement}>
            <div className={classes.skeletonInsideContent}>
              <div className={classes.skeletonInsideIcon}></div>
              <div className={classes.skeletonInsideText}></div>
            </div>
          </div>
          <div className={classes.skeletonElement}>
            <div className={classes.skeletonInsideContent}>
              <div className={classes.skeletonInsideIcon}></div>
              <div className={classes.skeletonInsideText}></div>
            </div>
          </div>
          <div className={classes.skeletonElement}>
            <div className={classes.skeletonInsideContent}>
              <div className={classes.skeletonInsideIcon}></div>
              <div className={classes.skeletonInsideText}></div>
            </div>
          </div>
          <div className={classes.skeletonElement}>
            <div className={classes.skeletonInsideContent}>
              <div className={classes.skeletonInsideIcon}></div>
              <div className={classes.skeletonInsideText}></div>
            </div>
          </div>
          <div className={classes.skeletonElement}>
            <div className={classes.skeletonInsideContent}>
              <div className={classes.skeletonInsideIcon}></div>
              <div className={classes.skeletonInsideText}></div>
            </div>
          </div>
          <div className={classes.skeletonInsideElementButton}>
            <div className={classes.skeletonInsideContent}>
              <div className={classes.skeletonInsideTextButton}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // const icon = getIconForTitle(title);

  return (
    <>
      <div className={classes.contentItem}>
        {/* <h2 className={classes.title}>{title}</h2> */}
        <div className={classes.titleIcon}>
          {/* {icon && <img src={icon} alt={title} className={classes.icons} />} */}
          <span className={classes.title}>{title}</span>
        </div>
        <p className={classes.description}>{description}</p>
        {/* <div className={classes.elements}>{children}</div> */}
        <ContentBottom
          timePosted={timePosted}
          company={company}
          jobType={jobType}
          level={level}
          pay={pay}
          applyLink={applyLink}
          elementKey={title}
        />
      </div>
    </>
  );
};
export default CatehagoryItem;
