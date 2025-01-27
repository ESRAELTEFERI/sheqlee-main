import React, { useState } from "react";
import styles from "./Vacancy.module.css";
import { useNavigate } from "react-router-dom";
import TEMPLETE from "../../asset/SignUp/template.svg";
import { NavLink } from "react-router-dom";
import RichTextField from "./RichTextField";
import { Contents } from "../JobPostContent/ContentData";
import { tags } from "../Tags/TagData";

function Vacancy() {
  const [jobTitle, setJobTitle] = useState("");
  const [selectedCategories, setSelectedCategories] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [salary, setSalary] = useState("");
  const [message, setMessage] = useState("");
  const [requirements, setRequirements] = useState("");
  const [skills, setSkills] = useState("");

  const navigate = useNavigate(); // Initialize the navigate function

  const uniqueCategories = Array.from(
    new Set(Contents.map((item) => item.title))
  );
  const uniqueTypes = Array.from(new Set(Contents.map((item) => item.company)));

  const uniqueLevels = Array.from(new Set(Contents.map((item) => item.level)));

  const uniquetags = Array.from(new Set(tags.map((item) => item.name)));

  const handleNext = () => {
    navigate("/vacancy-2", {
      state: {
        jobTitle,
        selectedCategories,
        selectedType,
        selectedLevel,
        selectedTag,
        salary,
        message,
        requirements,
        skills,
      },
    });
  };

  // const handleNext = () => {
  //   navigate("/vacancy-2"); // Redirect to /vacancy-2
  // };

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
        <h2 className={styles.title}>
          Add a vacancy <span className={styles.review}>[1/2]</span>{" "}
        </h2>
        <p className={styles.text}>
          Next and final step is preview and confirmation.
        </p>
      </div>

      <div className={styles.card}>
        <form className={styles.form}>
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
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
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
                <div className={styles["select-container"]}>
                  <select
                    value={selectedCategories}
                    onChange={(e) => setSelectedCategories(e.target.value)}
                    className={styles.dropdown}
                  >
                    <option value="">Select category...</option>
                    {uniqueCategories.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">
                Job type <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <div className={styles["select-container"]}>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className={styles.dropdown}
                  >
                    <option value="">Select type...</option>
                    {uniqueTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="password">
                Skill level <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <div className={styles["select-container"]}>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className={styles.dropdown}
                  >
                    <option value="">Add skill level...</option>
                    {uniqueLevels.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

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
                <span className={styles.iconMoney}>
                  $ {/* This represents the domain sufixfix */}
                </span>
                <input
                  type="text"
                  id="confirmPassword"
                  className={styles.inputSalary}
                  placeholder="Enter salary..."
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  required
                />
                <span className={styles.iconHours}>
                  /hours {/* This represents the domain sufixfix */}
                </span>
              </div>
            </div>
          </div>
        </form>
        <>
          {/* Message Input */}
          <div>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <div className={styles.messageGroup}>
              <textarea
                // id="message"
                className={styles.textarea}
                placeholder="We are looking for a Flutter developer with 2 years experience."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className={styles.counter}>
                {/* {message.length}/{maxLength} */}
                200
              </div>
            </div>
          </div>
        </>
        <div>
          <RichTextField
            label="Requirements"
            placeholder="Enter job requirements..."
            value={requirements}
            onChange={(content) => setRequirements(content)}
            required={true}
          />

          <RichTextField
            label="How to apply"
            placeholder="Description..."
            value={skills}
            onChange={(content) => setSkills(content)} // Correctly handle Quill content
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
              <div className={styles["select-container"]}>
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className={styles.dropdown}
                >
                  <option value="">NodeJS, AWS, PostgreSQL</option>
                  {uniquetags.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* <span
                className={styles.toggleVisibility}
                // onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              ></span> */}
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email ">
              Apply link <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                id="email"
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
            Next <span className={styles.purplee}>[preview & confirm]</span>
          </button>
        </div>
        <div>
          <div className={styles.underlineGray}> </div>

          <div style={{ display: "flex" }}>
            <p className={styles.textt}>
              <span className={styles.required}>*</span>
              fields are required.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vacancy;
