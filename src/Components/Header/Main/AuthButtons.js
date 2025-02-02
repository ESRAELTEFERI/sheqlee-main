import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import dropDawn from "../../../asset/NavCathagories/arrow_down.png";
import USER from "../../../asset/Users/settings.svg";
import COM from "../../../asset/Dashboard/companyyyy.svg";
import DASHBOARD from "../../../asset/Dashboard/dashboard.svg";
import LOGOUT from "../../../asset/Dashboard/logout.svg";
import SETTINGS from "../../../asset/Dashboard/ssettings.svg";

const AuthButtons = ({ isLoggedIn, userType, onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const location = useLocation();
  const isEditProfile = location.pathname === "/edit-profile";
  const isLoginPage = location.pathname === "/login";

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handlePostJobClick = () => {
    navigate("/vacancy");
  };

  const handleNavigation = (route) => {
    setIsDropdownOpen(false); // Close the dropdown
    navigate(route);
  };

  const handleLogout = () => {
    setIsDropdownOpen(false); // Close the dropdown
    if (onLogout) {
      onLogout();
    }
    navigate("/"); // Redirect to homepage after logout
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close the dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (isLoggedIn) {
    return (
      <div className={styles.loggedInActions}>
        {userType === "company" && (
          <button className={styles.postJobButton} onClick={handlePostJobClick}>
            Post a Job
          </button>
        )}
        {userType === "freelancer" && (
          <button
            className={`${styles.editButton} ${
              isEditProfile ? styles.activeEditButton : ""
            }`}
            onClick={() => navigate("/edit-profile")}
          >
            Edit profile
          </button>
        )}
        {userType === "company" && (
          <img src={USER} alt="User Icon" className={styles.UserIcon} />
        )}
        <div className={styles.navv} ref={dropdownRef}>
          <span
            onClick={toggleDropdown}
            className={isDropdownOpen ? styles.activeDropdown : ""}
          >
            {userType === "company" ? "Microsoft" : "Muruts Yifter"}
            <img
              src={dropDawn}
              alt="Dropdown Arrow"
              className={`${styles.dropdownArrow} ${
                isDropdownOpen ? styles.active : ""
              }`}
            />
          </span>

          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              <ul>
                <li
                  className={styles.dropdownItem}
                  onClick={() =>
                    handleNavigation(
                      userType === "freelancer"
                        ? "/dashboard-freelance"
                        : "/dashboard-company"
                    )
                  }
                >
                  <img
                    src={DASHBOARD}
                    alt="Dashboard Icon"
                    className={styles.IIcon}
                  />
                  Dashboard
                </li>
                <div className={styles.underline}> </div>
                <li>
                  {userType === "company" && (
                    <li
                      className={styles.dropdownItem}
                      onClick={() => handleNavigation("/company-profile")}
                    >
                      <img
                        src={COM}
                        alt="Company Icon"
                        className={styles.IIIcon}
                      />
                      Company Profile
                    </li>
                  )}
                  <li
                    className={styles.dropdownItem}
                    onClick={() =>
                      handleNavigation(
                        userType === "freelancer"
                          ? "/account-settings-freelancer"
                          : "/account-settings-company"
                      )
                    }
                  >
                    <img
                      src={SETTINGS}
                      alt="Settings Icon"
                      className={styles.IIcon}
                    />
                    Account Settings
                  </li>
                </li>
                <div className={styles.underline}> </div>
                <li className={styles.dropdownItem} onClick={handleLogout}>
                  <img
                    src={LOGOUT}
                    alt="Logout Icon"
                    className={styles.IIcon}
                  />
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.authButtons}>
      <button
        className={`${styles.loginButton} ${
          isLoginPage ? styles.activeButton : ""
        }`}
        onClick={() => navigate("/login")}
      >
        Log in
      </button>
      <button
        className={styles.signupButton}
        onClick={() => navigate("/signup")}
      >
        Sign up
      </button>
    </div>
  );
};

export default AuthButtons;
