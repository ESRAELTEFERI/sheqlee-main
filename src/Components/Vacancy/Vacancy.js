import React, { useState, useEffect } from "react";
import styles from "./Vacancy.module.css";
import TEMPLETE from "../../asset/SignUp/template.svg";
import { NavLink } from "react-router-dom";
import RichTextField from "./RichTextField";
import { Contents } from "../JobPostContent/ContentData";
import { tags } from "../Tags/TagData";
import { useLocation, useNavigate } from "react-router-dom";

function Vacancy() {
  const [currency, setCurrency] = useState("$"); // Default to USD
  const [period, setPeriod] = useState("/hour"); // Default to per hour

  const location = useLocation();
  const navigate = useNavigate();

  // Initialize form state
  const [jobTitle, setJobTitle] = useState("");
  const [selectedCategories, setSelectedCategories] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [salary, setSalary] = useState("");
  const [message, setMessage] = useState("");
  const [requirements, setRequirements] = useState("");
  const [skills, setSkills] = useState("");
  const [description, setDescription] = useState("");
  const [apply, setApply] = useState("");

  // const navigate = useNavigate(); // Initialize the navigate function

  // const toggleCurrency = () => {
  //   setCurrency((prevCurrency) => (prevCurrency === "$" ? "€" : "$"));
  // };

  // const togglePeriod = () => {
  //   setPeriod((prevPeriod) => {
  //     if (prevPeriod === "/hour") return "/week";
  //     if (prevPeriod === "/week") return "/month";
  //     return "/hour";
  //   });
  // };

  const uniqueCategories = Array.from(
    new Set(Contents.map((item) => item.title))
  );
  const uniqueTypes = Array.from(new Set(Contents.map((item) => item.jobType)));

  const uniqueLevels = Array.from(new Set(Contents.map((item) => item.level)));

  const uniquetags = Array.from(new Set(tags.map((item) => item.name)));

  // Load saved draft from localStorage
  useEffect(() => {
    if (location.state) {
      // If data is passed via navigation (editing), use that
      setJobTitle(location.state.jobTitle || "");
      setSelectedCategories(location.state.selectedCategories || "");
      setSelectedType(location.state.selectedType || "");
      setSelectedLevel(location.state.selectedLevel || "");
      setSelectedTag(location.state.selectedTag || "");
      setSalary(location.state.salary || "");
      setMessage(location.state.message || "");
      setRequirements(location.state.requirements || "");
      setSkills(location.state.skills || "");
      setDescription(location.state.description || "");
      setApply(location.state.apply || "");
    } else {
      // Otherwise, load the saved draft from localStorage
      const savedDraft = JSON.parse(localStorage.getItem("vacancyDraft"));
      if (savedDraft) {
        setJobTitle(savedDraft.jobTitle || "");
        setSelectedCategories(savedDraft.selectedCategories || "");
        setSelectedType(savedDraft.selectedType || "");
        setSelectedLevel(savedDraft.selectedLevel || "");
        setSelectedTag(savedDraft.selectedTag || "");
        setSalary(savedDraft.salary || "");
        setMessage(savedDraft.message || "");
        setRequirements(savedDraft.requirements || "");
        setSkills(savedDraft.skills || "");
        setDescription(savedDraft.description || "");
        setApply(savedDraft.apply || "");
      }
    }
  }, [location.state]);

  const handleNext = () => {
    let existingJobs = JSON.parse(localStorage.getItem("jobs")) || [];

    // If editing an existing job, replace it
    if (location.state?.id) {
      existingJobs = existingJobs.map((job) =>
        job.id === location.state.id
          ? {
              ...job,
              jobTitle,
              selectedCategories,
              selectedType,
              selectedLevel,
              selectedTag,
              salary,
              currency,
              period,
              message,
              requirements,
              skills,
              description,
              apply,
            }
          : job
      );
    } else {
      // Add a new job with a unique ID
      const newJob = {
        id: Date.now(), // Unique ID
        jobTitle,
        selectedCategories,
        selectedType,
        selectedLevel,
        selectedTag,
        salary,
        currency,
        period,
        message,
        requirements,
        skills,
        description,
        apply,
        status: "published", // Assuming newly added jobs are "published"
      };

      // existingJobs.push(newJob);
    }

    // Save to localStorage
    localStorage.setItem("jobs", JSON.stringify(existingJobs));

    // Navigate to the next step
    navigate("/vacancy-2", {
      state: {
        id: location.state?.id || Date.now(), // Preserve the ID for edits
        jobTitle,
        selectedCategories,
        selectedType,
        selectedLevel,
        selectedTag,
        salary,
        currency,
        period,
        message,
        requirements,
        skills,
        description,
        apply,
      },
    });
  };

  // Save draft to localStorage
  const handleSaveDraft = () => {
    const draft = {
      jobTitle,
      selectedCategories,
      selectedType,
      selectedLevel,
      selectedTag,
      salary,
      message,
      requirements,
      skills,
      description,
      apply,
    };

    try {
      localStorage.setItem("vacancyDraft", JSON.stringify(draft)); // Save draft to localStorage
      alert("Draft saved successfully!"); // Notify the user
    } catch (error) {
      console.error("Error saving draft:", error);
    }
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

              {/* <span
                className={styles.togggggleVisibility}
                // onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              ></span> */}
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
                    <option value="" disabled hidden>
                      Select category...
                    </option>
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
                    <option value="" disabled hidden>
                      Select type...
                    </option>
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
                    <option value="" disabled hidden>
                      Add skill level...
                    </option>
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
              {/* <div className={styles.inputWrapper}>
                <span className={styles.iconMoney}>
                  $ 
                </span>
                <input
                  type="text"
                  id="salary"
                  className={styles.inputSalary}
                  placeholder="Enter salary..."
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  required
                />
                <span className={styles.iconHours}>
                  /hours 
                </span>
              </div> */}
              {/* 
              <div className={styles.inputWrapper}>
                <span
                  className={styles.iconMoney}
                  onClick={toggleCurrency}
                  style={{ cursor: "pointer" }}
                >
                  {currency}
                </span>
                <input
                  type="text"
                  id="salary"
                  className={styles.inputSalary}
                  placeholder="Enter salary..."
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  required
                />
                <span
                  className={styles.iconHours}
                  onClick={togglePeriod}
                  style={{ cursor: "pointer" }}
                >
                  {period}
                </span>
              </div> */}
              <div className={styles.inputWrapper}>
                <select
                  className={styles.iconMoney}
                  onChange={(e) => setCurrency(e.target.value)}
                  value={currency}
                >
                  <option value="$">$</option>
                  <option value="€">€</option>
                </select>

                <input
                  type="text"
                  id="salary"
                  className={styles.inputSalary}
                  placeholder="Enter salary..."
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  required
                />

                <select
                  className={styles.iconHours}
                  onChange={(e) => setPeriod(e.target.value)}
                  value={period}
                >
                  <option value="/hour">/hour</option>
                  <option value="/week">/week</option>
                  <option value="/month">/month</option>
                </select>
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
            value={description}
            onChange={(content) => setDescription(content)}
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
                value={apply}
                onChange={(e) => setApply(e.target.value)}
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

        {/* Save draft & next buttons */}
        <div className={styles.authButtons}>
          <button
            className={styles.whiteButton}
            onClick={(e) => {
              e.preventDefault(); // Prevent form submission
              handleSaveDraft();
            }}
          >
            Save draft
          </button>
          <button
            className={styles.purpleButton}
            onClick={(e) => {
              e.preventDefault(); // Prevent form submission
              handleNext();
            }}
          >
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
