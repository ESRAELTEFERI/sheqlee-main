import React, { useState } from "react";
import styles from "./FreelancersInfo.module.css";
import HEAD from "../../../asset/SignUp/professional_registrationn.svg";
import EMAIL from "../../../asset/SignUp/emaill.svg";
import KEY from "../../../asset/SignUp/key.svg";
import USER from "../../../asset/SignUp/user.svg";
import EYE from "../../../asset/SignUp/eye-slash.svg";
import { NavLink } from "react-router-dom";

const FreelancersInfo = ({
  infoData,
  onInfoDataChange,
  agreement,
  setAgreement,
}) => {
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
      <h2 className={styles.title}>
        <img src={HEAD} alt="idea icon" className={styles.icon} />
        Professional Registration
      </h2>
      <form className={styles.form}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="name">
              Full name <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <img src={USER} alt="idea icon" className={styles.iconUser} />
              <input
                type="text"
                id="name"
                className={styles.input}
                placeholder="Abebe Bekila"
                value={infoData.name}
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
              <div
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
              </div>
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="passwordConfirm">
              Confirm password <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <img src={KEY} alt="idea icon" className={styles.iconSubject} />
              <input
                type="password"
                id="passwordConfirm"
                className={styles.input}
                placeholder="**********"
                value={infoData.passwordConfirm}
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
              checked={agreement}
              onChange={(e) => setAgreement(e.target.checked)}
            />
            <label htmlFor="agreement" className={styles.checkboxLabel}>
              <div className={styles.moreJobs}>
                By creating an account, you agree to our{" "}
                <NavLink href="#" className={styles.linkT}>
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

export default FreelancersInfo;
