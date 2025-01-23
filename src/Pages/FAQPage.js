import React from "react";
import BreadcrumbFAQ from "../Components/FAQ/BreadCrumbFAQ.js";
import Reagister from "../Components/Register/Register.js";
import MainFAQ from "../Components/FAQ/MainFAQ.js";
import ToggleTabs from "../Components/FAQ/ToggleTabs.js";
import Footer from "../Components/Footer/Footer.js";

const FAQPage = () => {
  return (
    <>
      <BreadcrumbFAQ />
      <MainFAQ />
      <ToggleTabs />
      <Reagister />
      <Footer />
    </>
  );
};

export default FAQPage;
