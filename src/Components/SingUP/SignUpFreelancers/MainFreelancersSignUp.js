import React, { useState } from "react";
import styles from "./MainSignUp.module.css";
import COMAN from "../../../asset/SignUp/compan.svg";
import FreelancersInfo from "./FreelancersInfo";
import { NavLink } from "react-router-dom";

function MainFreelancersSignUp() {
  const [infoData, setInfoData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreement: false,
  });

  const handleRegister = () => {
    // Validation Logic
    if (!infoData.agreement) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    if (infoData.password !== infoData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Basic Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(infoData.email)) {
      alert("Please enter a valid email address (e.g., abebe@gmail.com).");
      return;
    }

    // Combine both data objects into a single payload
    const combinedData = { ...infoData };

    // Save to localStorage
    localStorage.setItem("registrationData", JSON.stringify(combinedData));
    alert("Data successfully saved to local storage!");

    setInfoData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreement: false,
    });

    //***********Setup for API integration ***********************************/
    /*
     fetch("https://api.example.com/register", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(combinedData),
     })
       .then((response) => {
         if (!response.ok) {
           throw new Error("Failed to register.");
         }
         return response.json();
       })
       .then((data) => {
         console.log("Registration successful:", data);
         alert("Registration successful!");
       })
       .catch((error) => {
         console.error("Error during registration:", error);
         alert("Failed to register. Please try again later.");
       });
     */
    /****************************************************************** */
  };

  return (
    <>
      <div className={styles.back}>
        <div className={styles.inputGroup}>
          <img src={COMAN} alt="idea icon" className={styles.iconHead} />
          <div className={styles.moreJobss}>
            If you are an employer, please visit
            <NavLink to="/signup" className={styles.link}>
              {" "}
              employers registration<div className={styles.underline}> </div>
            </NavLink>
            page.
          </div>
        </div>
      </div>
      <FreelancersInfo infoData={infoData} onInfoDataChange={setInfoData} />
      <div className={styles.footer}>
        <span className={styles.footerText}>
          <div className={styles.moreJobs}>
            Already got an account?{" "}
            <NavLink to="/login" className={styles.linkL}>
              Login <div className={styles.underlineL}> </div>
            </NavLink>
            <button className={styles.registerButton} onClick={handleRegister}>
              Register
            </button>
          </div>
        </span>
      </div>
    </>
  );
}

export default MainFreelancersSignUp;
