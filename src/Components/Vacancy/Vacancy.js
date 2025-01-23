import React from "react";
import styles from "./Vacancy.module.css";
import { useNavigate } from "react-router-dom";
import TEMPLETE from "../../asset/SignUp/template.svg";
import { NavLink } from "react-router-dom";
import COMAN from "../../asset/SignUp/compan.svg";
import RichTextField from "./RichTextField";

function Vacancy() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNext = () => {
    navigate("/vacancy-2"); // Redirect to /vacancy-2
  };

  return (
    <>
      <div className={styles.backk}>
        <div className={styles.inputGroup}>
          <img src={TEMPLETE} alt="idea icon" className={styles.iconHead} />
          <div className={styles.moreJobss}>
            To speed up the process of posting a job, try using
            <NavLink to="/jobtemplate" className={styles.link}>
              {" "}
              job templates. <div className={styles.underline}> </div>
            </NavLink>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <h2 className={styles.title}>Add a vacancy [1/2]</h2>
        <p className={styles.text}>
          Next and final step is preview and confirmation.
        </p>
        <form className={styles.align}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="text">
              Job title <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="password"
                className={styles.input}
                placeholder="Senior mobile app developer using Flutter"
                // value={infoData.password}
                // onChange={handleChange}
                required
              />
              <span
                className={styles.toggleVisibility}
                // onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              ></span>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="fullName">
                Category <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  id="fullName"
                  className={styles.input}
                  placeholder="Select category..."
                  // value={infoData.fullName}
                  // onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">
                Job type <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  id="email"
                  className={styles.input}
                  placeholder="Select type..."
                  // value={infoData.email}
                  // onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="password">
                Skill level <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  id="password"
                  className={styles.input}
                  placeholder="Add skill level..."
                  // value={infoData.password}
                  // onChange={handleChange}
                  required
                />
                <span
                  className={styles.toggleVisibility}
                  // onClick={togglePasswordVisibility}
                  style={{ cursor: "pointer" }}
                ></span>
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="confirmPassword">
                Salary (fixed or range){" "}
                <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <img
                  src={COMAN}
                  alt="idea icon"
                  className={styles.iconSubject}
                />
                <input
                  type="password"
                  id="confirmPassword"
                  className={styles.input}
                  placeholder="Enter salary..."
                  // value={infoData.confirmPassword}
                  // onChange={handleChange}
                  required
                />
                <img
                  src={COMAN}
                  alt="idea icon"
                  className={styles.iconSubject}
                />
              </div>
            </div>
          </div>
        </form>
        <>
          {/* Message Input */}
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <div className={styles.messageGroup}>
            <textarea
              // id="message"
              className={styles.textarea}
              placeholder="We are looking for a Flutter developer with 2 years experience."
              // value={message}
              // onChange={handleMessageChange}
            />
            <div className={styles.counter}>
              {/* {message.length}/{maxLength} */}
            </div>
          </div>
        </>
        <div>
          <RichTextField
            label="Requirements"
            placeholder="Requirements..."
            required={true}
          />
          <RichTextField
            label="How to apply"
            placeholder="Description..."
            required={false}
          />
          <RichTextField
            label="Description"
            placeholder="How can professionals apply..."
            required={false}
          />
        </div>
      </div>

      <div className={styles.card}>
        <form className={styles.align}>
          {/* <div className={styles.row}> */}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="text">
              Skills (technology names){" "}
              <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="password"
                className={styles.input}
                placeholder="NodeJS, AWS, PostgreSQL"
                // value={infoData.password}
                // onChange={handleChange}
                required
              />
              <span
                className={styles.toggleVisibility}
                // onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              ></span>
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="Apply link ">
              Apply link <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="confirmPassword"
                className={styles.input}
                placeholder="URL or email"
                // value={infoData.confirmPassword}
                // onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* </div> */}
        </form>
        <div className={styles.agreement}>
          <input
            type="checkbox"
            id="agreement"
            className={styles.checkbox}
            // checked={infoData.agreement}
            // onChange={onInfoDataChange}
          />
          <label htmlFor="agreement" className={styles.checkboxLabel}>
            <div className={styles.moreJobs}>
              I want my company name excluded from this vacancy.
            </div>
          </label>
        </div>
        <div className={styles.authButtons}>
          <button className={styles.whiteButton}>Save draft</button>
          <button className={styles.purpleButton} onClick={handleNext}>
            Next [preview & confirm]
          </button>
        </div>
        <div className={styles.underlineGray}> </div>

        <div style={{ display: "flex" }}>
          <p>
            <span className={styles.required}>*</span>
            fields are required.
          </p>
        </div>
      </div>
    </>
  );
}

export default Vacancy;
