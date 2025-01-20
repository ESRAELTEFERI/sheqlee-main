import React from "react";
import Footer from "../Components/Footer/Footer";
import BreadCrumbLogIn from "../Components/LogIn/BreadCrumbLogIn";
import Register from "../Components/Register/Register";
import Header from "../Components/Header/Main/Header";
// import MainFreelancersSignUp from "../Components/SingUP/SignUpFreelancers/MainFreelancersSignUp";

const LogInPage = () => {
  return (
    <>
      <Header />
      <BreadCrumbLogIn />
      {/* <MainFreelancersSignUp /> */}
      <Register />
      <Footer />
    </>
  );
};

export default LogInPage;
