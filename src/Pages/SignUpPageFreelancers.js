import React from "react";
import Footer from "../Components/Footer/Footer";
import BreadCrumbFreelancers from "../Components/SingUP/SignUpFreelancers/BreadCrumbFreelancers";
import Register from "../Components/Register/Register";
import Header from "../Components/Header/Main/Header";
import MainFreelancersSignUp from "../Components/SingUP/SignUpFreelancers/MainFreelancersSignUp";

const SignUpPageFreelancers = () => {
  return (
    <>
      <Header />
      <BreadCrumbFreelancers />
      <MainFreelancersSignUp />
      <Register />
      <Footer />
    </>
  );
};

export default SignUpPageFreelancers;
