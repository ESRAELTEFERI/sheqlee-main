import styles from "./Profile.module.css";
import EDIT from "../../asset/After/edit_profile.svg";
import RichTextField from "../Vacancy/RichTextField";

import React from "react";

const ProfilePreview = () => {
  const profileData = JSON.parse(localStorage.getItem("profileData")) || {};

  return (
    <>
      <div className={styles.container}>
        <img src={EDIT} alt="dashboard header" className={styles.iconCat} />
        <h1 className={styles.heading}>Edit Profile</h1>
      </div>

      <div className={styles.card}>
        <form className={styles.align}>
          <div className={styles.back}>
            <label className={styles.label} htmlFor="companyName">
              Full name
            </label>
            <div className={styles.inputGroup}>
              {/* <input
                type="text"
                id="fullName"
                className={styles.input}
                placeholder="Muruts Yifter"
                required
              /> */}
              {profileData.fullName}
            </div>
          </div>
          <div className={styles.back}>
            <label className={styles.label} htmlFor="domain">
              Title
            </label>
            <div className={styles.messageGroup}>
              {/* <input
                type="text"
                id="tag"
                className={styles.input}
                placeholder="Full-Stack Developer"
                required
              /> */}
              {profileData.title}
            </div>
          </div>
          <img
            src={profileData.image}
            alt="Profile"
            className={styles.profileImage}
          />
        </form>

        <RichTextField label="Bio" value={profileData.bio} />

        <div className={styles.skillSection}>
          <label>Skillset</label>
          <table className={styles.skillTable}>
            <thead>
              <tr>
                <th>Skill</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              {profileData.skills.map((skill, index) => (
                <tr key={index}>
                  <td>{skill.name}</td>
                  <td>{"⚫".repeat(skill.level)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.profileLinks}>
          <label>Profiles</label>
          <table className={styles.linkTable}>
            <thead>
              <tr>
                <th>Profile name</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              {profileData.links.map((link, index) => (
                <tr key={index}>
                  <td>{link.name}</td>
                  <td>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.url}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.cvSection}>
          <label>CV</label>
          {profileData.cv && (
            <div className={styles.cvDownload}>
              <span>{profileData.cv.name}</span>
              <a
                href={URL.createObjectURL(profileData.cv)}
                download
                className={styles.downloadButton}
              >
                Download
              </a>
            </div>
          )}
        </div>

        <div className={styles.emailSection}>
          <label>Email</label>
          <div className={styles.email}>
            {profileData.email || "muruts.yifter@gmail.com"}
          </div>
        </div>

        <div className={styles.purpleButtoncon}>
          <button
            className={styles.purpleButton}
            onClick={() => window.print()}
          >
            Print Profile
          </button>
        </div>
      </div>
    </>
  );
};
export default ProfilePreview;
