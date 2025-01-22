import React from "react";
import Footer from "../Components/Footer/Footer";
import BreadCrumbLogIn from "../Components/LogIn/BreadCrumbLogIn";
import Register from "../Components/Register/Register";
// import Header from "../Components/Header/Main/Header";
import MainLogIn from "../Components/LogIn/MainLogIn.js";

const LogInPage = ({ onLogin }) => {
  return (
    <>
      {/* <Header /> */}
      <BreadCrumbLogIn />
      {/* <MainLogIn /> */}
      <MainLogIn onLogin={onLogin} />
      <Register />
      <Footer />
    </>
  );
};

export default LogInPage;
