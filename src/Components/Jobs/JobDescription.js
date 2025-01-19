import React from "react";
import styles from "./JobDescription.module.css";

const JobDescription = ({ role, description }) => {
  return (
    <div className={styles.descriptionContainer}>
      <h3 className={styles.role}>{role}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default JobDescription;
