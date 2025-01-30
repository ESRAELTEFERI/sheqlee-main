// import React from "react";
// import { useNavigate } from "react-router-dom";
// import classes from "./DashCom.module.css";
// import DASHBOARD from "../../../asset/After/dashboard.svg";

// function DashCom() {
//   const navigate = useNavigate();

//   const handlePostJobClick = () => {
//     navigate("/vacancy");
//   };
//   return (
//     <div className={classes.container}>
//       <img src={DASHBOARD} alt="dashboard header" className={classes.iconCat} />
//       <h1 className={classes.heading}>Dashboard</h1>
//       <p className={classes.subheading}>
//         You have not posted any jobs yet. Get started by posting a job.
//       </p>
//       <button onClick={handlePostJobClick} className={classes.post}>
//         Post your first job
//       </button>
//     </div>
//   );
// }
// export default DashCom;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./DashCom.module.css";
import DASHBOARD from "../../../asset/After/dashboard.svg";
import DELETE from "../../../asset/vacancy/delete.svg";
import EYE from "../../../asset/vacancy/eye.svg";
import DUPLICATE from "../../../asset/vacancy/duplicate.svg";
// import BLACK from "../../../asset/Switches/switch-black.png ";
// import RED from "../../../asset/Switches/switch-red.png ";
// import GREEN from "../../../asset/Switches/switch-green.png ";

function DashCom() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch jobs from localStorage
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];

    // Filter only published jobs
    const publishedJobs = storedJobs.filter(
      (job) => job.status === "published"
    );

    setJobs(publishedJobs);
  }, []);

  const handlePostJobClick = () => {
    navigate("/vacancy");
  };

  const handleDeleteJob = (id) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    setJobs(updatedJobs);
  };

  return (
    <div className={classes.container}>
      <img src={DASHBOARD} alt="dashboard header" className={classes.iconCat} />
      <h1 className={classes.heading}>Dashboard</h1>

      {jobs.length === 0 ? (
        // Show button if no published jobs
        <>
          <p className={classes.subheading}>
            You have not posted any jobs yet. Get started by posting a job.
          </p>

          <button onClick={handlePostJobClick} className={classes.post}>
            Post your first job
          </button>
        </>
      ) : (
        <>
          <p className={classes.subheading}>
            All the jobs you have posted and are about to post.
          </p>
          {/* Show table if there are published jobs */}
          <table className={classes.jobTable}>
            <thead>
              <tr>
                <th>JID</th>
                <th>Title</th>
                <th>Type</th>
                <th>Level</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={job.id}>
                  <td>{index + 1}</td> <td>{job.jobTitle}</td>
                  <td>{job.selectedType}</td>
                  <td>{job.selectedLevel}</td>
                  <td>
                    <span
                      className={`${classes.status} ${
                        job.status === "published" ? classes.green : classes.red
                      }`}
                    >
                      {job.status === "published" ? "✅" : "⛔"}
                    </span>
                  </td>
                  <td>
                    <button className={classes.duplicate}>
                      <img
                        src={DUPLICATE}
                        alt="copying"
                        className={classes.iconss}
                      />
                    </button>
                    <button className={classes.view}>
                      <img src={EYE} alt="seeing" className={classes.iconss} />
                    </button>
                    <button
                      className={classes.delete}
                      onClick={() => handleDeleteJob(job.id)}
                    >
                      <img
                        src={DELETE}
                        alt="deleting"
                        className={classes.iconss}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default DashCom;
