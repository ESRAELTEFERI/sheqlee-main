import React from "react";
import styles from "./Vacancy.module.css";
import { useNavigate } from "react-router-dom";

function Button({ jobData }) {
  const navigate = useNavigate();

  // const handlePublish = () => {
  //   try {
  //     // Get existing published jobs from localStorage
  //     const existingJobs =
  //       JSON.parse(localStorage.getItem("publishedJobs")) || [];

  //     // Add the new job to the array
  //     const updatedJobs = [...existingJobs, jobData];

  //     // Save the updated array back to localStorage
  //     localStorage.setItem("publishedJobs", JSON.stringify(updatedJobs));

  //     alert("Job published successfully!");
  //   } catch (error) {
  //     console.error("Error publishing job:", error);
  //   }
  // };
  const handlePublish = () => {
    try {
      const existingJobs = JSON.parse(localStorage.getItem("jobs")) || [];

      // Check if the job already exists
      const jobIndex = existingJobs.findIndex((job) => job.id === jobData.id);

      if (jobIndex !== -1) {
        // If job exists, update its status to "published"
        existingJobs[jobIndex] = {
          ...existingJobs[jobIndex],
          status: "published",
        };
      } else {
        // If job does not exist, add it as a new job
        const newJob = { ...jobData, status: "published" };
        existingJobs.push(newJob);
      }

      // Save the updated jobs list
      localStorage.setItem("jobs", JSON.stringify(existingJobs));

      alert("Job published successfully!");
    } catch (error) {
      console.error("Error publishing job:", error);
    }
  };

  const handleEdit = () => {
    // Navigate back to the form with job data
    navigate("/vacancy", { state: jobData });
  };

  return (
    <div className={styles.card}>
      <div className={styles.authButtonn}>
        <button className={styles.whiteButtonn} onClick={handleEdit}>
          Edit
        </button>
        <button className={styles.purpleButton} onClick={handlePublish}>
          Publish job
        </button>
      </div>
    </div>
  );
}

export default Button;
