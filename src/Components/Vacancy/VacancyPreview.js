// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import styles from "./VacancyPreview.module.css";
// import { FaBuilding, FaClock, FaChartLine, FaDollarSign } from "react-icons/fa";

// function VacancyPreview() {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   if (!state) {
//     navigate("/vacancy");
//     return null;
//   }

//   const { selectedCategories, selectedType, selectedLevel, salary } = state;

//   return (
//     <div className={styles.previewContainer}>
//       {/* Job Title */}
//       <h1 className={styles.jobTitle}>Senior mobile app developer</h1>

//       {/* Tags Section */}
//       <div className={styles.tags}>
//         <span className={styles.tag}>
//           <FaBuilding className={styles.icon} />
//           {selectedCategories || "Infosys"}
//         </span>
//         <span className={styles.tag}>
//           <FaClock className={styles.icon} />
//           {selectedType || "Full-Time"}
//         </span>
//         <span className={styles.tag}>
//           <FaChartLine className={styles.icon} />
//           {selectedLevel || "Intermediate"}
//         </span>
//         <span className={styles.tag}>
//           <FaDollarSign className={styles.icon} />
//           {salary || "$20/hr"}
//         </span>
//       </div>

//       {/* Job Description */}
//       <p className={styles.description}>
//         We need one to design and maintain prospect websites including graphic
//         development, regular site updates, usability reviews, and traffic
//         reporting.
//       </p>

//       {/* Qualifications Section */}
//       <h2 className={styles.sectionTitle}>QUALIFICATIONS</h2>
//       <ul className={styles.list}>
//         <li>
//           - Bachelor's degree with a major in graphic design or a related field
//           from an accredited college or university preferred.
//         </li>
//       </ul>

//       {/* Experience Section */}
//       <h2 className={styles.sectionTitle}>Experience</h2>
//       <ul className={styles.list}>
//         <li>
//           - Four (4) years of graphic/web design experience or equivalent
//           combination of education and experience required.
//         </li>
//       </ul>

//       {/* Skills Section */}
//       <h2 className={styles.sectionTitle}>Skills & Knowledge</h2>
//       <ul className={styles.list}>
//         <li>- Excellent knowledge of graphic and photo software.</li>
//         <li>- Good knowledge of web technology.</li>
//         <li>
//           - Excellent oral and written communication, including presentation
//           skills.
//         </li>
//         <li>- PC literate, including Microsoft Office products.</li>
//         <li>- Strong organizational skills.</li>
//         <li>- Excellent interpersonal skills.</li>
//         <li>- Ability to work on multiple projects and meet deadlines.</li>
//       </ul>
//       {/* Job Description */}
//       <h2 className={styles.sectionTitle}>Description</h2>
//       <p className={styles.description}>
//         For a career path that is both challenging and rewarding, join
//         Sedgwick's talented team of 27,000 colleagues around the globe. Sedgwick
//         is a leading provider of technology-enabled risk, benefits, and
//         integrated business solutions. Taking care of people is at the heart of
//         everything we do. Millions of people and organizations count on Sedgwick
//         each year to take care of their needs when they face a major life event
//         or something unexpected happens. Whether they have a workplace injury,
//         suffer property or financial loss or damage from a natural or manmade
//         disaster, are involved in an auto or other type of accident, or need
//         time away from work for the birth of a child or another medical
//         situation
//       </p>
//     </div>
//   );
// }

// export default VacancyPreview;
// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import styles from "./VacancyPreview.module.css";
// import { FaBuilding, FaClock, FaChartLine, FaDollarSign } from "react-icons/fa";

// function VacancyPreview() {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   if (!state) {
//     navigate("/vacancy");
//     return null;
//   }

//   const { selectedCategories, selectedType, selectedLevel, salary, message } =
//     state;

// //   return (
// //     <div className={styles.previewContainer}>
// //       {/* Dynamic Job Title */}
// //       <h1 className={styles.jobTitle}>
// //         {state.jobTitle || "Senior mobile app developer"}
// //       </h1>

// //       {/* Dynamic Tags */}
// //       <div className={styles.tags}>
// //         <span className={styles.tag}>
// //           <FaBuilding className={styles.icon} />
// //           {selectedCategories || "Infosys"}
// //         </span>
// //         <span className={styles.tag}>
// //           <FaClock className={styles.icon} />
// //           {selectedType || "Full-Time"}
// //         </span>
// //         <span className={styles.tag}>
// //           <FaChartLine className={styles.icon} />
// //           {selectedLevel || "Intermediate"}
// //         </span>
// //         <span className={styles.tag}>
// //           <FaDollarSign className={styles.icon} />
// //           {salary || "$20/hr"}
// //         </span>
// //       </div>

// //       {/* Dynamic Short Description */}
// //       <p className={styles.description}>
// //         {message ||
// //           "We are looking for a developer with a passion for coding and problem-solving."}
// //       </p>

// //       {/* Static Sections */}
// //       <h2 className={styles.sectionTitle}>QUALIFICATIONS</h2>
// //       <ul className={styles.list}>
// //         <li>
// //           - Bachelor's degree with a major in graphic design or a related field
// //           from an accredited college or university preferred.
// //         </li>
// //       </ul>

// //       <h2 className={styles.sectionTitle}>Experience</h2>
// //       <ul className={styles.list}>
// //         <li>
// //           - Four (4) years of graphic/web design experience or equivalent
// //           combination of education and experience required.
// //         </li>
// //       </ul>

// //       <h2 className={styles.sectionTitle}>Skills & Knowledge</h2>
// //       <ul className={styles.list}>
// //         <li>- Excellent knowledge of graphic and photo software.</li>
// //         <li>- Good knowledge of web technology.</li>
// //         <li>
// //           - Excellent oral and written communication, including presentation
// //           skills.
// //         </li>
// //         <li>- PC literate, including Microsoft Office products.</li>
// //         <li>- Strong organizational skills.</li>
// //         <li>- Excellent interpersonal skills.</li>
// //         <li>- Ability to work on multiple projects and meet deadlines.</li>
// //       </ul>
// //     </div>
// //   );
// // }

// // export default VacancyPreview;

// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import styles from "./VacancyPreview.module.css";
// import { FaBuilding, FaClock, FaChartLine, FaDollarSign } from "react-icons/fa";
// import DOMPurify from "dompurify"; // Optional: to sanitize the HTML for security
// import draftToHtml from "draftjs-to-html"; // Import the library for conversion

// function VacancyPreview() {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   if (!state) {
//     navigate("/vacancy");
//     return null;
//   }

//   const {
//     jobTitle,
//     selectedCategories,
//     selectedType,
//     selectedLevel,
//     salary,
//     message,
//     requirements,
//     skills,
//   } = state;

//   return (
//     <div className={styles.previewContainer}>
//       {/* Job Title */}
//       <h1 className={styles.jobTitle}>
//         {jobTitle || "Job Title Not Specified"}
//       </h1>

//       {/* Tags Section */}
//       <div className={styles.tags}>
//         <span className={styles.tag}>
//           <FaBuilding className={styles.icon} />
//           {selectedCategories || "Category not specified"}
//         </span>
//         <span className={styles.tag}>
//           <FaClock className={styles.icon} />
//           {selectedType || "Type not specified"}
//         </span>
//         <span className={styles.tag}>
//           <FaChartLine className={styles.icon} />
//           {selectedLevel || "Skill level not specified"}
//         </span>
//         <span className={styles.tag}>
//           <FaDollarSign className={styles.icon} />
//           {salary || "Salary not specified"}
//         </span>
//       </div>

//       {/* Job Description */}
//       <p className={styles.description}>
//         {message || "Short description not provided."}
//       </p>

//       {/* Requirements Section */}
//       <h2 className={styles.sectionTitle}>Requirements</h2>
//       <div className={styles.requirements}>
//         {requirements ? (
//           <div dangerouslySetInnerHTML={{ __html: requirements }} />
//         ) : (
//           "No requirements specified."
//         )}
//       </div>

//       {/* Skills Section */}
//       <h2 className={styles.sectionTitle}>Skills</h2>
//       <div className={styles.skills}>
//         {skills ? (
//           <div dangerouslySetInnerHTML={{ __html: skills }} />
//         ) : (
//           "No skills specified."
//         )}
//       </div>
//     </div>
//   );
// }

// export default VacancyPreview;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./VacancyPreview.module.css";
import { FaBuilding, FaClock, FaChartLine, FaDollarSign } from "react-icons/fa";
import DOMPurify from "dompurify"; // Optional: to sanitize the HTML for security
import draftToHtml from "draftjs-to-html"; // Import the library for conversion
import { convertToRaw, convertFromRaw } from "draft-js";

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
    salary,
    message,
    requirements,
    skills,
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
    <div className={styles.previewContainer}>
      {/* Job Title */}
      <h1 className={styles.jobTitle}>
        {jobTitle || "Senior mobile app developer"}
      </h1>

      {/* Tags Section */}
      <div className={styles.tags}>
        <span className={styles.tag}>
          <FaBuilding className={styles.icon} />
          {selectedCategories || "Infosys"}
        </span>
        <span className={styles.tag}>
          <FaClock className={styles.icon} />
          {selectedType || "Full-Time"}
        </span>
        <span className={styles.tag}>
          <FaChartLine className={styles.icon} />
          {selectedLevel || "Intermediate"}
        </span>
        <span className={styles.tag}>
          <FaDollarSign className={styles.icon} />
          {salary || "$20/hr"}
        </span>
      </div>

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
    </div>
  );
}

export default VacancyPreview;
