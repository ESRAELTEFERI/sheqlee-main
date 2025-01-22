import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./AuthButtons.module.css";

const LoginButton = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/login");
  };

  return (
    <div className={classes.authButtons}>
      <button className={classes.loginButton} onClick={handleSignUpClick}>
        Log in
      </button>
    </div>
  );
};

export default LoginButton;
