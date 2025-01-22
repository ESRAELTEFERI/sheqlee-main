import React from "react";
import styles from "./Navbar.module.css";

const AuthButtons = ({ isLoggedIn, onLogin, onLogout }) => {
  if (isLoggedIn) {
    return (
      <div className={styles.loggedInActions}>
        <button className={styles.postJobButton}>Post a job</button>
        <div className={styles.dropdown}>
          <span>Microsoft ▼</span>
        </div>
        <button className={styles.logoutButton} onClick={onLogout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className={styles.authButtons}>
      <button className={styles.loginButton} onClick={onLogin}>
        Log in
      </button>
      <button className={styles.signupButton}>Sign up</button>
    </div>
  );
};

export default AuthButtons;
