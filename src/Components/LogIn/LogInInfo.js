import React, { useState } from "react";
import styles from "./LogInInfo.module.css";
import EMAIL from "../../asset/SignUp/emaill.svg";
import KEY from "../../asset/SignUp/key.svg";
import EYE from "../../asset/SignUp/awesome-eye-slash.svg";
import EYES from "../../asset/SignUp/awesome-eye.svg";
import ENTER from "../../asset/LogIn/enter.svg";

const LogInInfo = ({ infoData, onInfoDataChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const handleChange = (e) => {
  //   const { id, value, type, checked } = e.target;
  //   const newValue = type === "checkbox" ? checked : value;
  //   onInfoDataChange((prev) => ({ ...prev, [id]: newValue }));
  // };
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        <img src={ENTER} alt="idea icon" className={styles.icon} />
        Login to your account
      </h2>
      <form className={styles.form}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <div className={styles.inputWrapper}>
              <img src={EMAIL} alt="idea icon" className={styles.iconEmail} />
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="abebe@gmail.com"
                value={infoData.email}
                onChange={onInfoDataChange}
                required
              />
              {/* </div> */}
            </div>
          </div>
          {/* <div className={styles.row}> */}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <div className={styles.inputWrapper}>
              <img src={KEY} alt="idea icon" className={styles.iconSubject} />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className={styles.input}
                placeholder="**********"
                value={infoData.password}
                onChange={onInfoDataChange}
                required
              />
              <div
                className={styles.toggleVisibility}
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? (
                  <div>
                    <img
                      src={EYES}
                      alt="hiden"
                      className={styles.eyeClose}
                    ></img>
                  </div>
                ) : (
                  <img src={EYE} alt="hiden" className={styles.eyeOpen}></img>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.agreement}>
          <div className={styles.agreement}>
            <input
              type="checkbox"
              id="agreement"
              className={styles.checkbox}
              checked={infoData.agreement}
              // onChange={onInfoDataChange}
            />
            <label htmlFor="agreement" className={styles.checkboxLabel}>
              <div className={styles.moreJobs}>Remember me next time.</div>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogInInfo;
