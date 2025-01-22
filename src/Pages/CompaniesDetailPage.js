import React from "react";
// import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BreadCrumbCompanyDetails from "../Components/Companies/BreadCrumbCompanyDetails.js";
import CompaniesDetail from "../Components/Companies/CompaniesDetail.js";
import Reagister from "../Components/Register/Register.js";
// import Header from "../Components/Header/Main/Header.js";
const CompaniesDetailPage = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <Header /> */}
      <BreadCrumbCompanyDetails />
      <CompaniesDetail />
      <p></p>
      <Reagister />
      <Footer />
    </>
  );
};

export default CompaniesDetailPage;
