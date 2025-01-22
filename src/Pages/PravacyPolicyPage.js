import React from "react";
import BreadcrumbPolicy from "../Components/Policy/PravacyPolicy/BreadCrumbPolicy";
import Register from "../Components/Register/Register";
// import Header from "../Components/Header/Main/Header";
import Footer from "../Components/Footer/Footer";
// import MainLogIn from "../Components/LogIn/MainLogIn.js";

const PravacyPolicyPage = () => {
  return (
    <>
      {/* <Header /> */}
      <BreadcrumbPolicy />
      {/*<MainLogIn /> */}
      <Register />
      <Footer />
    </>
  );
};

export default PravacyPolicyPage;
