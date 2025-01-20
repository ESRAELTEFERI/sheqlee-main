import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./SignUpRegister.module.css";

const SignUpRegister = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };
  return (
    <button className={classes.signupButton} onClick={handleSignUpClick}>
      Sign up
    </button>
  );
};
export default SignUpRegister;
