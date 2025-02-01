import React from "react";
import styles from "./GoogleButton.module.css";
import GOOGLE from "../../asset/google.svg";
const GoogleButton = () => {
  const handleGoogleSignIn = () => {
    // Logic for handling Google sign-in
    alert("Google sign-in functionality is not yet implemented.");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>OR CONTINUE WITH</h2>

      <button className={styles.googleButton} onClick={handleGoogleSignIn}>
        <img src={GOOGLE} alt="Google logo" className={styles.googleIcon} />
        Continue with Google
      </button>
    </div>
  );
};

export default GoogleButton;
