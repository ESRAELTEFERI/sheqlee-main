import React from "react";
import classes from "./DashCom.module.css";
import DASHBOARD from "../../asset/After/dashboard.svg";

function DashCom() {
  return (
    <div className={classes.container}>
      <img src={DASHBOARD} alt="dashboard header" className={classes.iconCat} />
      <h1 className={classes.heading}>Dashboard</h1>
      <p className={classes.subheading}>
        You have not posted any jobs yet. Get started by posting a job.
      </p>
      <button className={classes.post}>Post your first job</button>
    </div>
  );
}
export default DashCom;
