import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./DashCom.module.css";
import DASHBOARD from "../../../asset/After/dashboard.svg";

function DashCom() {
  const navigate = useNavigate();

  const handlePostJobClick = () => {
    navigate("/vacancy");
  };
  return (
    <div className={classes.container}>
      <img src={DASHBOARD} alt="dashboard header" className={classes.iconCat} />
      <h1 className={classes.heading}>Dashboard</h1>
      <p className={classes.subheading}>
        You have not posted any jobs yet. Get started by posting a job.
      </p>
      <button onClick={handlePostJobClick} className={classes.post}>
        Post your first job
      </button>
    </div>
  );
}
export default DashCom;
