import React from "react";
import Footer from "../Components/Footer/Footer";
import BreadCrumbNew from "../Components/Reset/NewPassword/BreadCrumbNew";
import Register from "../Components/Register/Register";
// import Header from "../Components/Header/Main/Header";
import NewPassword from "../Components/Reset/NewPassword/NewPassword.js";

const ResetNewPassword = () => {
  return (
    <>
      {/* <Header /> */}
      <BreadCrumbNew />
      <NewPassword />
      <Register />
      <Footer />
    </>
  );
};

export default ResetNewPassword;
