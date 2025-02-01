import React, { useState } from "react";
import styles from "./MainSignUp.module.css";
import COMAN from "../../../asset/SignUp/compan.svg";
import FreelancersInfo from "./FreelancersInfo";
import { NavLink } from "react-router-dom";

function MainFreelancersSignUp() {
  const [infoData, setInfoData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [agreement, setAgreement] = useState(false);

  const handleRegister = async () => {
    // Validation Logic
    // if (!infoData.agreement) {
    if (!agreement) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    if (infoData.password !== infoData.passwordConfirm) {
      alert("Passwords do not match.");
      return;
    }

    // Basic Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(infoData.email)) {
      alert("Please enter a valid email address (e.g., abebe@gmail.com).");
      return;
    }

    // Construct user data object
    const userData = {
      ...infoData,
      userType: "freelancer", // You can also pass other attributes here like profile, etc.
    };
    /****************************************************************************/
    // const existingFreelancers =
    //   JSON.parse(localStorage.getItem("freelancers")) || [];

    // const updatedFreelancers = [
    //   ...existingFreelancers,
    //   { ...infoData, userType: "freelancer" },
    // ];

    // localStorage.setItem("freelancers", JSON.stringify(updatedFreelancers));
    // alert("Freelancer registered successfully!");
    /***************************************************************************** */

    try {
      console.log(" Preparing to send API request...");
      console.log("User Data:", userData);

      console.log("Before Fetch");
      const response = await fetch(
        "http://192.168.5.217:3000/api/v1/users/signup/freelancer",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
          // mode: "cors",
        }
      );

      console.log("After Fetch");
      console.log("Response received:", response);

      const data = await response.json();
      console.log("Response data:", data);

      if (!response.ok) {
        throw new Error(
          data.message || `HTTP error! Status: ${response.status}`
        );
      }

      alert("Freelancer registered successfully!");
      window.location.href = "/login";
    } catch (error) {
      console.error("Registration error:", error);
      alert(`Error: ${error.message}`);
    }

    /******************************************************************************** */
    setInfoData({
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      // agreement: false,
    });
    setAgreement(false);

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
      <FreelancersInfo
        infoData={infoData}
        onInfoDataChange={setInfoData}
        agreement={agreement}
        setAgreement={setAgreement}
      />
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
