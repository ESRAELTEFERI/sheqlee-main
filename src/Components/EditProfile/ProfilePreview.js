import React from "react";
import styles from "./Profile.module.css"; // Assuming you will create styles for preview
import EDIT from "../../asset/After/edit_profile.svg"; // Use same icon for consistency

function ProfilePreview() {
  // Get data from local storage or props (depending on your setup)
  const profileData = JSON.parse(localStorage.getItem("profileData"));

  return (
    <div className={styles.container}>
      <img src={EDIT} alt="dashboard header" className={styles.iconCat} />
      <h1 className={styles.heading}>Profile Preview</h1>
      <div className={styles.card}>
        <div className={styles.back}>
          <label className={styles.label}>Full Name</label>
          <p>{profileData?.fullName}</p>
        </div>
        <div className={styles.back}>
          <label className={styles.label}>Title</label>
          <p>{profileData?.title}</p>
        </div>
        <div className={styles.back}>
          <label className={styles.label}>Introduce Yourself</label>
          <p>{profileData?.bio}</p>
        </div>
        <div className={styles.back}>
          <label className={styles.label}>Skills</label>
          {/* Assuming SkillTable is displaying a list, you can show the list here */}
          <ul>
            {profileData?.skills?.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className={styles.back}>
          <label className={styles.label}>Links</label>
          {/* Show added links here if applicable */}
          <p>{profileData?.links}</p>
        </div>
        <div className={styles.back}>
          <label className={styles.label}>CV</label>
          {/* Show CV upload preview here */}
          <p>{profileData?.cv}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePreview;
