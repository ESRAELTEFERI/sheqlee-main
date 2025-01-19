import React from "react";
import styles from "./Navbar.module.css";

const LogIn = () => {
  return (
    <div className={styles.authButtons}>
      <button className={styles.loginButton}>Log in</button>
    </div>
  );
};

export default LogIn;
