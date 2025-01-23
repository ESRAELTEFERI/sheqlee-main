import React from "react";
import styles from "./Vacancy.module.css";
import TEMPLETE from "../../asset/SignUp/template.svg";
import { NavLink } from "react-router-dom";

function VacancyDetail() {
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
        <h2 className={styles.title}>Review & publish [2/2]</h2>
        <p className={styles.text}>Review job details before publishing.</p>

        <div className={styles.authButtons}>
          <button className={styles.whiteButton}>Edit</button>
          <button className={styles.purpleButton}>Publish job</button>
        </div>
      </div>
    </>
  );
}
export default VacancyDetail;
