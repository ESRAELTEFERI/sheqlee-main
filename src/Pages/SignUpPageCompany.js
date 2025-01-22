import React from "react";
import Footer from "../Components/Footer/Footer";
import BreadcrumbSign from "../Components/SingUP/SignUpCompany/BreadCrumbSign";
import Register from "../Components/Register/Register";
// import Header from "../Components/Header/Main/Header";
import MainSignUp from "../Components/SingUP/SignUpCompany/MainSignUp";

const SignUpPageCompany = () => {
  return (
    <>
      {/* <Header /> */}
      <BreadcrumbSign />
      <MainSignUp />
      <Register />
      <Footer />
    </>
  );
};

export default SignUpPageCompany;
