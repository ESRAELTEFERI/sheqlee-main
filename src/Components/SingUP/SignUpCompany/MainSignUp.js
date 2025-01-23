import React, { useState } from "react";
import styles from "./MainSignUp.module.css";
import HEAD from "../../../asset/SignUp/professional_registration.svg";
import CompanySign from "./CompanySign";
import CompanyInfo from "./CompanyInfo";
import { NavLink } from "react-router-dom";
import GoogleButton from "../GoogleButton";

function MainSignUp() {
  const [companyData, setCompanyData] = useState({
    companyName: "",
    domain: "",
  });
  const [infoData, setInfoData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreement: false,
  });

  const handleRegister = () => {
    console.log("Company Data:", companyData);
    console.log("Info Data:", infoData);

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

    // Basic Domain Validation
    const domainRegex = /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    if (!domainRegex.test(companyData.domain)) {
      alert("Please enter a valid domain (e.g., sheqlee.com).");
      return;
    }

    // Ensure domain starts with "https://"
    const updatedCompanyData = {
      ...companyData,
      domain: companyData.domain.startsWith("https://")
        ? companyData.domain
        : `https://${companyData.domain}`,
    };

    // Combine both data objects into a single payload
    const combinedData = {
      ...updatedCompanyData,
      ...infoData,
      userType: "company",
    };

    // Save to localStorage
    localStorage.setItem("registrationData", JSON.stringify(combinedData));
    alert("Data successfully saved to local storage!");

    // Clear Inputs by Resetting State
    setCompanyData({
      companyName: "",
      domain: "",
    });
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
          <img src={HEAD} alt="idea icon" className={styles.iconHead} />
          <div className={styles.moreJobss}>
            If you are an freelancer, please visit
            <NavLink to="/signupfreelancers" className={styles.link}>
              {" "}
              freelancers registration <div className={styles.underline}> </div>
            </NavLink>
            page.
          </div>
        </div>
      </div>
      {/* <CompanySign onCompanyDataChange={setCompanyData} /> */}
      <CompanySign
        companyData={companyData}
        onCompanyDataChange={setCompanyData}
      />
      <CompanyInfo infoData={infoData} onInfoDataChange={setInfoData} />
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
      <GoogleButton />
    </>
  );
}

export default MainSignUp;
