import React from "react";
import classes from "./DashCom.module.css";
import COMPANY from "../../asset/After/company.svg";

function ComProfile() {
  return (
    <div className={classes.container}>
      <img src={COMPANY} alt="dashboard header" className={classes.iconCat} />
      <h1 className={classes.heading}>Company Profile</h1>
      <p className={classes.subheading}>
        Provide accurate information about your company to make yourself
        discoverable.
      </p>
    </div>
  );
}
export default ComProfile;
