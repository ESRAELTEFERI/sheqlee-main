import React from "react";
// import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BreadcrumbFAQ from "../Components/FAQ/BreadCrumbFAQ.js";
import Reagister from "../Components/Register/Register.js";
import MainFAQ from "../Components/FAQ/MainFAQ.js";
import ToggleTabs from "../Components/FAQ/ToggleTabs.js";
import Navbar from "../Components/Header/NewHeader/Navbar.js";

const FAQPage = () => {
  return (
    <>
      <Navbar />
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
