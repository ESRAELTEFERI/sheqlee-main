import React from "react";
import Footer from "../Components/Footer/Footer";
import BreadCrumbReset from "../Components/Reset/BreadCrumbReset";
import Register from "../Components/Register/Register";
// import Header from "../Components/Header/Main/Header";
import MainReset from "../Components/Reset/MainReset.js";

const Reset = () => {
  return (
    <>
      {/* <Header /> */}
      <BreadCrumbReset />
      <MainReset />
      <Register />
      <Footer />
    </>
  );
};

export default Reset;
