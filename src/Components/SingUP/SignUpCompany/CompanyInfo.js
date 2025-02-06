import React, { useState } from "react";
import styles from "./CompanyInfo.module.css";
import EMAIL from "../../../asset/SignUp/emaill.svg";
import KEY from "../../../asset/SignUp/key.svg";
import USER from "../../../asset/SignUp/user.svg";
import EYE from "../../../asset/SignUp/awesome-eye-slash.svg";
import EYES from "../../../asset/SignUp/awesome-eye.svg";
import { NavLink } from "react-router-dom";

// const CompanyInfo = ({ onInfoDataChange }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     agreement: false,
//   });

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
//   const handleChange = (e) => {
//     const { id, value, type, checked } = e.target;
//     const newValue = type === "checkbox" ? checked : value;

//     setFormData((prev) => {
//       const updatedData = { ...prev, [id]: newValue };
//       onInfoDataChange(updatedData); // Notify parent
//       return updatedData;
//     });
//   };

const CompanyInfo = ({ infoData, onInfoDataChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    onInfoDataChange((prev) => ({ ...prev, [id]: newValue }));
  };
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>COMPANY REPRESENTATIVE</h2>
      <form className={styles.form}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="fullName">
              Full name <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <img src={USER} alt="idea icon" className={styles.iconUser} />
              <input
                type="text"
                id="fullName"
                className={styles.input}
                placeholder="Abebe Bekila"
                value={infoData.fullName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Email <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <img src={EMAIL} alt="idea icon" className={styles.iconEmail} />
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="abebe@gmail.com"
                value={infoData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="password">
              Password <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <img src={KEY} alt="idea icon" className={styles.iconSubject} />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className={styles.input}
                placeholder="**********"
                value={infoData.password}
                onChange={handleChange}
                required
              />
              <span
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
              </span>
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="confirmPassword">
              Confirm password <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <img src={KEY} alt="idea icon" className={styles.iconSubject} />
              <input
                type="password"
                id="confirmPassword"
                className={styles.input}
                placeholder="**********"
                value={infoData.confirmPassword}
                onChange={handleChange}
                required
              />
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
              onChange={handleChange}
            />
            <label htmlFor="agreement" className={styles.checkboxLabel}>
              <div className={styles.moreJobs}>
                By creating an account, you agree to our{" "}
                <NavLink to="/privacypolicy" className={styles.linkP}>
                  Terms and Conditions
                  <div className={styles.underlineT}> </div>
                </NavLink>
                and{" "}
                <NavLink to="/privacypolicy" className={styles.linkP}>
                  Privacy Policy
                  <div className={styles.underlineP}> </div>
                </NavLink>
                .
              </div>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CompanyInfo;
