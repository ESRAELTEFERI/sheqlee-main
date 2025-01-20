import React from "react";
import styles from "./Navbar.module.css";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

const AuthButtons = () => {
  return (
    <div className={styles.authButtons}>
      {/* <button className={styles.loginButton}>Log in</button> */}
      {/* <button className={styles.signupButton}>Sign up</button> */}
      <LogIn />
      <SignUp />
    </div>
  );
};

export default AuthButtons;
