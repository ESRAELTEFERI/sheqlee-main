import React, { useState } from "react";
import styles from "./MainReset.module.css";
import EMAIL from "../../asset/SignUp/emaill.svg";
import { useNavigate } from "react-router-dom";
import PADLOCk from "../../asset/padlock.svg";

function MainReset() {
  const [infoData, setInfoData] = useState({
    email: "",
    password: "",
    agreement: false,
  });

  const navigate = useNavigate();

  const handleResetClick = () => {
    navigate("/newpassword");
  };

  // setInfoData({
  //   email: "",
  //   password: "",
  //   agreement: false,
  // });
  return (
    <>
      <div className={styles.card}>
        <h2 className={styles.title}>
          <img src={PADLOCk} alt="idea icon" className={styles.icon} />
          Reset password
        </h2>
        <form className={styles.form}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <div className={styles.inputWrapper}>
                <img src={EMAIL} alt="idea icon" className={styles.iconEmail} />
                <input
                  type="email"
                  id="email"
                  className={styles.input}
                  placeholder="abebe@gmail.com"
                  value={infoData.email}
                  // onChange={handleChange}
                  required
                />
                {/* </div> */}
              </div>
              <p className={styles.paragraph}>
                You will receive a password reset code in your email.
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.footer}>
        <button className={styles.registerButton} onClick={handleResetClick}>
          Send code
        </button>
      </div>
    </>
  );
}

export default MainReset;
