import React from "react";
import styles from "./DashCom.module.css";
import COMPANY from "../../../asset/After/company.svg";
import UploadComponent from "./UploadImage";
import RichTextField from "../../Vacancy/RichTextField";

function ComProfile() {
  return (
    <>
      <div className={styles.container}>
        <img src={COMPANY} alt="dashboard header" className={styles.iconCat} />
        <h1 className={styles.heading}>Company Profile</h1>
        <p className={styles.subheading}>
          Provide accurate information about your company to make yourself
          discoverable.
        </p>
      </div>

      <div className={styles.card}>
        <form className={styles.align}>
          <div className={styles.back}>
            <label className={styles.label} htmlFor="companyName">
              Company name <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputGroup}>
              <input
                type="text"
                id="companyName"
                className={styles.input}
                placeholder="Sheqlee Co. Ltd."
                required
              />
            </div>
          </div>
          <div className={styles.back}>
            <label className={styles.label} htmlFor="domain">
              Domain <span className={styles.required}>*</span>
            </label>
            <div className={styles.messageGroup}>
              <input
                type="text"
                id="domain"
                className={styles.input}
                placeholder="sheqlee.com"
                required
              />
            </div>
          </div>
          <UploadComponent />
        </form>
        <RichTextField
          label="Description"
          placeholder="A brief description about your company..."
          // value={requirements}
          // onChange={(content) => setRequirements(content)}
        />
        <form className={styles.align}>
          <div className={styles.back}>
            <label className={styles.label} htmlFor="companyName">
              Company size
            </label>
            <div className={styles.inputGroupp}>
              <input
                type="text"
                id="companySize"
                className={styles.input}
                placeholder="Less than 10 people"
              />
            </div>
          </div>
          <div className={styles.back}>
            <label className={styles.label} htmlFor="domain">
              HQ location
            </label>
            <div className={styles.messageGroupp}>
              <input
                type="text"
                id="domain"
                className={styles.input}
                placeholder="Seoul, S. Korea"
              />
            </div>
          </div>
        </form>

        <div className={styles.containerr}>
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
export default ComProfile;
