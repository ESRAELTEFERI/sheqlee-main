import React from "react";
import styles from "./JobCard.module.css";
import JobDetails from "./JobDetailes";
import JobDescription from "./JobDescription";

const JobCard = ({
  role,
  description,
  timePosted,
  company,
  jobType,
  level,
  pay,
  applyLink,
}) => {
  return (
    <div className={styles.card}>
      <JobDescription role={role} description={description} />
      <JobDetails
        timePosted={timePosted}
        company={company}
        jobType={jobType}
        level={level}
        pay={pay}
        applyLink={applyLink}
      />
    </div>
  );
};

export default JobCard;
