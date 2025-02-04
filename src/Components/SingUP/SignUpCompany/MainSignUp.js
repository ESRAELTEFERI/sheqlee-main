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
    // agreement: false,
  });

  const handleRegister = async () => {
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
    /************************************************************************************ */
    // Fetch existing companies from localStorage or initialize an empty array
    // const existingCompanies =
    //   JSON.parse(localStorage.getItem("companies")) || [];
    // const updatedCompanies = [...existingCompanies, combinedData];

    // // Save updated list of companies to localStorage
    // localStorage.setItem("companies", JSON.stringify(updatedCompanies));
    // alert("Company registered successfully!");
    /*******************************************************************************************/
    try {
      // const response = await fetch(
      //   "http://192.168.5.217:3000/api/v1/users/signup/company",
      //   {
      const response = await fetch(
        "http://192.168.5.120:9000/api.sheqlee.com/v1/company/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(combinedData),
        }
      );

      console.log(response.body);
      console.log(response.statusCode);

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful!");
        console.log("Success:", data);
        // Redirect user to login page or dashboard
        window.location.href = "/login"; // Or use useNavigate() if using React Router
      } else {
        alert(data.message || "Failed to register.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again later.");
    }
    /*****************************************************************************************/
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
     fetch("https://192.168.5.217/api/v1/users/signup/company", {
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
