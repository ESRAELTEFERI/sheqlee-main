import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className={styles.authButtons}>
      <button className={styles.signupButton} onClick={handleSignUpClick}>
        Sign up
      </button>
    </div>
  );
};

export default SignUp;
