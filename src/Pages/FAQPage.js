import React from "react";
// import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BreadcrumbFAQ from "../Components/FAQ/BreadCrumbFAQ.js";
import Reagister from "../Components/Register/Register.js";
import MainFAQ from "../Components/FAQ/MainFAQ.js";
import ToggleTabs from "../Components/FAQ/ToggleTabs.js";
import Header from "../Components/Header/Main/Header.js";

const FAQPage = () => {
  return (
    <>
      <Header />
      {/* <Header /> */}
      <BreadcrumbFAQ />
      <MainFAQ />
      <ToggleTabs />
      <Reagister />
      <Footer />
    </>
  );
};

export default FAQPage;
