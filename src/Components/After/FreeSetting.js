import React from "react";
import styles from "../After/Company/DashCom.module.css";
import SETTING from "../../asset/After/settings.svg";

function FreeSetting() {
  return (
    <>
      <div className={styles.container}>
        <img src={SETTING} alt="dashboard header" className={styles.iconCat} />
        <h1 className={styles.heading}>Account Setting</h1>
        <p className={styles.subheading}>
          Edit your account settings to make your account more secure.
        </p>
      </div>

      <div className={styles.card}>
        <form className={styles.align}>
          <div className={styles.back}>
            <label className={styles.label} htmlFor="companyName">
              Full name <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputGroupp}>
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
              Email <span className={styles.required}>*</span>
            </label>
            <div className={styles.messageGroupp}>
              <input
                type="text"
                id="email"
                className={styles.input}
                placeholder="muruts.yifter@gmail.com"
                required
              />
            </div>
          </div>
        </form>

        <form className={styles.align}>
          <div className={styles.back}>
            <label className={styles.label} htmlFor="companyName">
              Password
            </label>
            <div className={styles.inputGroupp}>
              <input
                type="password"
                id="fullName"
                className={styles.input}
                placeholder="*************"
              />
            </div>
            <p className={styles.paragraph}>
              Leave this empty if you don't want to change your password.
            </p>
          </div>
          <div className={styles.back}>
            <label className={styles.label} htmlFor="domain">
              Confirm password
            </label>
            <div className={styles.messageGroupp}>
              <input
                type="password"
                id="fullName"
                className={styles.input}
                placeholder="*************"
              />
            </div>
          </div>
        </form>
        <div className={styles.containerr}>
          <button className={styles.purpleButton}>Update setting</button>
        </div>

        <div className={styles.underlineGray}> </div>
        <div>
          <h1 className={styles.heading}>Account deletion</h1>
          <p className={styles.subtext}>
            Please note that your account will be available for recovery for a
            period of one month after deletion. After that, it will be
            permanently deleted and cannot be recovered.
          </p>
        </div>

        <div>
          <label htmlFor="message" className={styles.label}>
            Deletion reason <span className={styles.required}>*</span>
          </label>
          <div className={styles.message}>
            <textarea
              id="message"
              className={styles.textarea}
              placeholder="Why are you deleting your account..."
            />
            <div className={styles.counter}>
              {/* {message.length}/{maxLength} */}
              200
            </div>
          </div>
          <p className={styles.paragraph}>
            Giving us accurate reason for your deletion will help us make
            Sheqlee better. We hope to see you back soon. Thank you.
          </p>
        </div>
        <div>
          <div className={styles.containerr}>
            <button className={styles.redButton}>Delete account</button>
          </div>
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
