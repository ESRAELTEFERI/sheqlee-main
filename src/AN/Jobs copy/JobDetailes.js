import React from "react";
import styles from "./JobDetails.module.css";

const JobDetails = ({
  timePosted,
  company,
  jobType,
  level,
  pay,
  applyLink,
}) => {
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.details}>
        <span>{timePosted}</span>
        <span>{company}</span>
        <span>{jobType}</span>
      </div>
      <div className={styles.meta}>
        <span>{level}</span>
        <span>{pay}</span>
        <button className={styles.applyButton}>Apply</button>
      </div>
    </div>
  );
};

export default JobDetails;
