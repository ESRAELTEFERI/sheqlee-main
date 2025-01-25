import React from "react";
import classes from "./DashCom.module.css";
import SETTING from "../../asset/After/settings.svg";

function FreeSetting() {
  return (
    <div className={classes.container}>
      <img src={SETTING} alt="dashboard header" className={classes.iconCat} />
      <h1 className={classes.heading}>Account Setting</h1>
      <p className={classes.subheading}>
        Edit your account settings to make your account more secure.
      </p>
    </div>
  );
}
export default FreeSetting;
