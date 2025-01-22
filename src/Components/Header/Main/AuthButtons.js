// import React from "react";
// import styles from "./Navbar.module.css";
// import SignUp from "./SignUp";
// import LogIn from "./LogIn";

// const AuthButtons = () => {
//   return (
//     <div className={styles.authButtons}>
//       <LogIn />
//       <SignUp />
//     </div>
//   );
// };

// export default AuthButtons;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import dropDawn from "../../../asset/NavCathagories/arrow_down.png";
import USER from "../../../asset/Users/settings.svg";
import COM from "../../../asset/Dashboard/companyyyy.svg";
import DASHBOARD from "../../../asset/Dashboard/dashboard.svg";
import LOGOUT from "../../../asset/Dashboard/logout.svg";
import SETTINGS from "../../../asset/Dashboard/ssettings.svg";

const AuthButtons = ({ isLoggedIn, onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handlePostJobClick = () => {
    navigate("/postjob");
  };

  if (isLoggedIn) {
    return (
      <div className={styles.loggedInActions}>
        <button className={styles.postJobButton} onClick={handlePostJobClick}>
          Post a Job
        </button>
        <img src={USER} alt="Company icon" className={styles.UserIcon} />
        <div className={styles.navv}>
          <span
            onClick={toggleDropdown} // Toggle the dropdown
            className={isDropdownOpen ? styles.activeDropdown : ""}
          >
            Microsoft{" "}
            <img
              src={dropDawn}
              alt="drop-down arrow"
              className={`${styles.dropdownArrow} ${
                isDropdownOpen ? styles.active : ""
              }`}
            />
          </span>

          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              <ul>
                <li className={styles.dropdownItem}>
                  <img
                    src={DASHBOARD}
                    alt="Company icon"
                    className={styles.IIcon}
                  />
                  Dashboard
                </li>
                <div className={styles.underline}> </div>

                <li className={styles.dropdownItem}>
                  <img src={COM} alt="Company icon" className={styles.IIIcon} />
                  Company profile
                  {/* </li>
                  <div></div>

                <li className={styles.dropdownItem}> */}
                  <img
                    src={SETTINGS}
                    alt="Company icon"
                    className={styles.IIcon}
                  />
                  Account setting
                </li>
                <div className={styles.underline}> </div>

                <li className={styles.dropdownItem} onClick={onLogout}>
                  <img
                    src={LOGOUT}
                    alt="Company icon"
                    className={styles.IIcon}
                  />
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* <button className={styles.logoutButton} onClick={onLogout}>
          Logout
        </button> */}
      </div>
    );
  }

  return (
    <div className={styles.authButtons}>
      <LogIn />
      <SignUp />
    </div>
  );
};

export default AuthButtons;
