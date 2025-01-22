import React, { useState } from "react";
import styles from "./MainLogIn.module.css";
import LogInInfo from "./LogInInfo";
import { NavLink } from "react-router-dom";

function MainLogIn() {
  const [infoData, setInfoData] = useState({
    email: "",
    password: "",
    agreement: false,
  });

  // setInfoData({
  //   email: "",
  //   password: "",
  //   agreement: false,
  // });
  return (
    <>
      <LogInInfo infoData={infoData} />
      <div className={styles.footer}>
        <span className={styles.footerText}>
          <div className={styles.moreJobs}>
            Forgot password?
            <NavLink to="/reset" className={styles.linkL}>
              Reset <div className={styles.underlineL}> </div>
            </NavLink>
            <button className={styles.registerButton}>Login</button>
          </div>
        </span>
      </div>
    </>
  );
}

export default MainLogIn;
