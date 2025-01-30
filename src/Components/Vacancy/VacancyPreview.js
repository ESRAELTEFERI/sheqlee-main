import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./VacancyPreview.module.css";
import DOMPurify from "dompurify"; // Optional: to sanitize the HTML for security
import draftToHtml from "draftjs-to-html"; // Import the library for conversion
import { convertToRaw, convertFromRaw } from "draft-js";
import DEVELOP from "../../asset/vacancy/devops.svg";
import CALENDAR from "../../asset/vacancy/calendar.svg";
import CLOCK from "../../asset/vacancy/clock.svg";
import COMPANY from "../../asset/vacancy/company.svg";
import TAG from "../../asset/vacancy/tags.svg";
import Button from "./Buttons";

function VacancyPreview() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate("/vacancy");
    return null;
  }

  const {
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
    // apply,
  } = state;

  // Convert the raw JSON to HTML using draftToHtml
  const renderHtml = (rawContent) => {
    try {
      const contentState = convertFromRaw(JSON.parse(rawContent));
      const htmlContent = draftToHtml(convertToRaw(contentState));
      return DOMPurify.sanitize(htmlContent); // Optionally sanitize the HTML for security
    } catch (e) {
      return ""; // Return empty string if error occurs during conversion
    }
  };

  return (
    <>
      {/* Job Title */}
      <div className={styles.card}>
        <span className={styles.preview}>VACANCY PREVIEW</span>
      </div>
      <div className={styles.contentTitle}>
        <div className={styles.detailsTitle}>
          <span>
            <img src={DEVELOP} alt="job icon" className={styles.iconTitle} />
            {jobTitle || "Senior mobile app developer"}
          </span>
        </div>
      </div>

      {/* Tags Section */}
      <div className={styles.tags}>
        <span className={styles.tag}>
          <img src={COMPANY} alt="job icon" className={styles.icon} />
          {selectedCategories || "Infosys"}
        </span>
        <span className={styles.tag}>
          <img src={CLOCK} alt="job icon" className={styles.icon} />
          {selectedType || "Full-Time"}
        </span>
        <span className={styles.tag}>
          <img src={CALENDAR} alt="job icon" className={styles.icon} />
          {selectedLevel || "Intermediate"}
        </span>
        <span className={styles.tag}>
          <img src={COMPANY} alt="job icon" className={styles.icon} />
          {salary || "$20/hr"}
        </span>
      </div>

      <div className={styles.previewContainer}>
        {/* Job Description */}
        <p className={styles.description}>
          {message ||
            "We need one to Designs and maintains prospect websites including graphic development, regular site updates, usability reviews and traffic reporting. "}
        </p>

        {/* Requirements Section */}
        <h2 className={styles.sectionTitle}>QUALIFICATIONS</h2>
        <div
          className={styles.requirements}
          dangerouslySetInnerHTML={{
            __html: renderHtml(requirements),
          }}
        />

        {/* Skills Section */}
        <h2 className={styles.sectionTitle}>Skills & Knowledge</h2>
        <div
          className={styles.skills}
          dangerouslySetInnerHTML={{
            __html: renderHtml(skills),
          }}
        />

        <h2 className={styles.sectionTitle}>Description</h2>
        <div
          className={styles.skills}
          dangerouslySetInnerHTML={{
            __html: renderHtml(description),
          }}
        />
      </div>
      <div className={styles.tags}>
        <img src={TAG} alt="job icon" className={styles.iconTag} />
        <span className={styles.tag}>{selectedTag || "JavaScript"}</span>
      </div>
      <div className={styles.underlineGray}> </div>
      {/* Pass job data to the Button component */}
      <Button jobData={state} />
    </>
  );
}

export default VacancyPreview;
