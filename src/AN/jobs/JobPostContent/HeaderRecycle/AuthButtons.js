import React from "react";
import LogInButton from "./LogInButton";
import SignUpButton from "../../../../Components/Header/SignUpButton";
import classes from "./AuthButtons.module.css";

const AuthButtons = () => (
  <div className={classes.buttonContainer}>
    <LogInButton />
    <SignUpButton />
  </div>
);

export default AuthButtons;
