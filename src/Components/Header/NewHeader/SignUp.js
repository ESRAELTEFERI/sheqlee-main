import React from "react";
import styles from "./Navbar.module.css";

const AuthButtons = () => {
  return (
    <div className={styles.authButtons}>
      <button className={styles.signupButton}>Sign up</button>
    </div>
  );
};

export default AuthButtons;
