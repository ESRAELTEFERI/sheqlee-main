import React from "react";
// import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BreadcrumbContact from "../Components/Contact/BreadCrumbContact.js";
import Reagister from "../Components/Register/Register.js";
import MainContact from "../Components/Contact/MainContact.js";
import InputCard from "../Components/Contact/InputCard.js";
import Header from "../Components/Header/Main/Header.js";

const ContactPage = () => {
  return (
    <>
      {/* <Header /> */}
      <Header />
      <BreadcrumbContact />
      <MainContact />
      <InputCard />
      <Reagister />
      <Footer />
    </>
  );
};

export default ContactPage;
