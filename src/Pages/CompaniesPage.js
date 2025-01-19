import React from "react";
// import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import MainCompany from "../Components/Companies/MainCompany";
import BreadcrumbCompanies from "../Components/Companies/BreadCrumbCompanies";
import Navbar from "../Components/Header/NewHeader/Navbar";

const CompaniesPage = () => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <BreadcrumbCompanies />
      <MainCompany />
      <Footer />
    </>
  );
};

export default CompaniesPage;
