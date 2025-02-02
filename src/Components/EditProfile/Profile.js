import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";
import EDIT from "../../asset/After/edit_profile.svg";
import UploadComponent from "../After/Company/UploadImage";
import RichTextField from "../Vacancy/RichTextField";
import SkillTable from "./SkillTable";
import AddUrl from "./AddUrl";
import CVUpload from "./CVUpload";

function FreeSetting() {
  const [bio, setBio] = useState("");
  const navigate = useNavigate();

  /***************************************************************** */
  const handleUpdateProfile = async () => {
    const profileData = {
      bio,
      fullName: document.getElementById("fullName").value,
      title: document.getElementById("tag").value,
      skills: ["Skill1", "Skill2"], // This should come from SkillTable component
      links: "some-link.com", // This should come from AddUrl component
      cv: "CV uploaded", // This should come from CVUpload component
    };

    // Store the data in local storage (or use state if needed)
    localStorage.setItem("profileData", JSON.stringify(profileData));

    // Send to API (if needed)

    console.log("Profile updated successfully!");
    navigate("/profile-preview"); // Navigate to Profile Preview
  };

  /***************************************************************************************/
  // const handleUpdateProfile = async () => {
  //   try {
  //     const response = await fetch("YOUR_BACKEND_API_URL", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(profileData),
  //     });

  //     if (response.ok) {
  //       console.log("Profile updated successfully!");
  // navigate("/profile-preview");
  //     } else {
  //       console.error("Failed to update profile.");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  /*******************************************************/

  return (
    <>
      <div className={styles.container}>
        <img src={EDIT} alt="dashboard header" className={styles.iconCat} />
        <h1 className={styles.heading}>Edit Profile</h1>
        <p className={styles.subheading}>
          The more complete your profile, the easier for companies to select you
          for jobs.
        </p>
      </div>

      <div className={styles.card}>
        <form className={styles.align}>
          <div className={styles.back}>
            <label className={styles.label} htmlFor="companyName">
              Full name <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputGroup}>
              <input
                type="text"
                id="fullName"
                className={styles.input}
                placeholder="Muruts Yifter"
                required
              />
            </div>
          </div>
          <div className={styles.back}>
            <label className={styles.label} htmlFor="domain">
              Title <span className={styles.required}>*</span>
            </label>
            <div className={styles.messageGroup}>
              <input
                type="text"
                id="tag"
                className={styles.input}
                placeholder="Full-Stack Developer"
                required
              />
            </div>
          </div>
          <UploadComponent />
        </form>
        <RichTextField
          label="Introduce yourself"
          placeholder="Say something appealing about yourself..."
          value={bio}
          onChange={(content) => setBio(content)}
        />

        <SkillTable />
        <AddUrl />
        <CVUpload />

        <div className={styles.purpleButtoncon}>
          <button className={styles.purpleButton} onClick={handleUpdateProfile}>
            Update profile
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
export default FreeSetting;
