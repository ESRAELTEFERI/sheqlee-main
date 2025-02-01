import React, { useState } from "react";
import styles from "./NewPassword.module.css";
import CODE from "../../../asset/SignUp/code.svg";
import { useNavigate } from "react-router-dom";
import PADLOCk from "../../../asset/padlock.svg";
import EYE from "../../../asset/SignUp/eye-slash.svg";
import KEY from "../../../asset/SignUp/key.svg";

function NewPassword() {
  const [resetCode, setResetCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const email = localStorage.getItem("resetEmail");
  const API_URL =
    "https://cors-anywhere.herokuapp.com/http://192.168.5.217:3000/api/v1/users/resetPassword";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleResetPassword = async () => {
    if (!resetCode || !password || !confirmPassword) {
      alert("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      console.log({ email, resetCode, newPassword: password });
      const response = await fetch(API_URL, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, resetCode, newPassword: password }),
        mode: "cors",
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.removeItem("resetEmail");
        alert("Password reset successfully.");
        navigate("/login");
      } else {
        alert(data.message || "Failed to reset password.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        <img src={PADLOCk} alt="padlock icon" className={styles.icon} />
        Set new password
      </h2>
      <form className={styles.form}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="resetCode">
              Enter code
            </label>
            <div className={styles.inputWrapper}>
              <img src={CODE} alt="code icon" className={styles.iconEmail} />
              <input
                type="text"
                id="resetCode"
                className={styles.input}
                placeholder="123456"
                value={resetCode}
                onChange={(e) => setResetCode(e.target.value)}
                required
              />
            </div>
            <p className={styles.paragraph}>
              Enter the reset code sent to your email.
            </p>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="password">
              New Password
            </label>
            <div className={styles.inputWrapper}>
              <img src={KEY} alt="key icon" className={styles.iconSubject} />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className={styles.input}
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className={styles.inputWrapper}>
              <img src={KEY} alt="key icon" className={styles.iconSubject} />
              <input
                type="password"
                id="confirmPassword"
                className={styles.input}
                placeholder="**********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span
                className={styles.toggleVisibility}
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? <img src={EYE} alt="hide" /> : "A"}
              </span>
            </div>
          </div>
        </div>
      </form>
      <div className={styles.footer}>
        <button className={styles.registerButton} onClick={handleResetPassword}>
          Reset password
        </button>
      </div>
    </div>
  );
}

export default NewPassword;
