import React from "react";
import classes from "./Profile.module.css";
import EDIT from "../../asset/After/edit_profile.svg";

function Profile() {
  return (
    <div className={classes.container}>
      <img src={EDIT} alt="dashboard header" className={classes.iconCat} />
      <h1 className={classes.heading}>Edit Profile</h1>
      <p className={classes.subheading}>
        The more complete your profile, the easier for companies to select you
        for jobs.
      </p>
    </div>
  );
}
export default Profile;
