import React from "react";
import styles from "./Profile.module.css";
import EDIT from "../../asset/After/edit_profile.svg";
import UploadComponent from "../After/Company/UploadImage";
import RichTextField from "../Vacancy/RichTextField";
import SkillTable from "./SkillTable";
import AddUrl from "./AddUrl";
import CVUpload from "./CVUpload";

function FreeSetting() {
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
          // value={requirements}
          // onChange={(content) => setRequirements(content)}
        />

        <SkillTable />
        <AddUrl />
        <CVUpload />

        <div className={styles.purpleButtoncon}>
          <button className={styles.purpleButton}>Update profile</button>
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
