import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";

const LogIn = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/login");
  };

  return (
    <div className={styles.authButtons}>
      <button className={styles.loginButton} onClick={handleSignUpClick}>
        Log in
      </button>
    </div>
  );
};

export default LogIn;
