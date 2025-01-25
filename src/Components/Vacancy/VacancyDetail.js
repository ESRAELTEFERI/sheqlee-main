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
        <h2 className={styles.title}>
          Review & publish <span className={styles.review}>[2/2]</span>{" "}
        </h2>
        <p className={styles.text}>Review job details before publishing.</p>

        <div className={styles.card}>
          <div className={styles.authButtonn}>
            <button className={styles.whiteButtonn}>Edit</button>
            <button className={styles.purpleButton}>Publish job</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default VacancyDetail;
