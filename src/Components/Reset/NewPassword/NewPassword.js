import React, { useState } from "react";
import styles from "./NewPassword.module.css";
import CODE from "../../../asset/SignUp/code.svg";
import { useNavigate } from "react-router-dom";
import PADLOCk from "../../../asset/padlock.svg";
import EYE from "../../../asset/SignUp/eye-slash.svg";
import KEY from "../../../asset/SignUp/key.svg";

function NewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [infoData, setInfoData] = useState({
    email: "",
    password: "",
    agreement: false,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const handleResetClick = () => {
    navigate("/newpassword");
  };

  // setInfoData({
  //   email: "",
  //   password: "",
  //   agreement: false,
  // });
  return (
    <>
      <div className={styles.card}>
        <h2 className={styles.title}>
          <img src={PADLOCk} alt="idea icon" className={styles.icon} />
          Set new password
        </h2>
        <form className={styles.form}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">
                Enter code
              </label>
              <div className={styles.inputWrapper}>
                <img src={CODE} alt="idea icon" className={styles.iconEmail} />
                <input
                  type="email"
                  id="email"
                  className={styles.input}
                  placeholder="123456"
                  value={infoData.email}
                  // onChange={handleChange}
                  required
                />
                {/* </div> */}
              </div>
              <p className={styles.paragraph}>
                Get a reset code from your email and input it above.
              </p>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="password">
                New Password
              </label>
              <div className={styles.inputWrapper}>
                <img src={KEY} alt="idea icon" className={styles.iconSubject} />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className={styles.input}
                  placeholder="**********"
                  value={infoData.password}
                  // onChange={handleChange}
                  required
                />
              </div>
              <p className={styles.paragraph}>
                Set a strong password to protect your account.
              </p>
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="confirmPassword">
                Confirm password
              </label>
              <div className={styles.inputWrapper}>
                <img src={KEY} alt="idea icon" className={styles.iconSubject} />
                <input
                  type="password"
                  id="confirmPassword"
                  className={styles.input}
                  placeholder="**********"
                  value={infoData.confirmPassword}
                  // onChange={handleChange}
                  required
                />
                <span
                  className={styles.toggleVisibility}
                  onClick={togglePasswordVisibility}
                  style={{ cursor: "pointer" }}
                >
                  {showPassword ? (
                    <div>
                      <img src={EYE} alt="hiden"></img>
                    </div>
                  ) : (
                    "👁️"
                  )}
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.footer}>
        <button className={styles.registerButton} onClick={handleResetClick}>
          Reset password
        </button>
      </div>
    </>
  );
}

export default NewPassword;
