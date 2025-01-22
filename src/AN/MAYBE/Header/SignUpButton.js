import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./AuthButtons.module.css";

const SignUpButton = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className={classes.authButtons}>
      <button className={classes.signupButton} onClick={handleSignUpClick}>
        Sign up
      </button>
    </div>
  );
};

export default SignUpButton;
