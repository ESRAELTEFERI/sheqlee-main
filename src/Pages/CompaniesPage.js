import React from "react";
// import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import MainCompany from "../Components/Companies/MainCompany";
import BreadcrumbCompanies from "../Components/Companies/BreadCrumbCompanies";
import Header from "../Components/Header/Main/Header";

const CompaniesPage = () => {
  return (
    <>
      {/* <Header /> */}
      <Header />
      <BreadcrumbCompanies />
      <MainCompany />
      <Footer />
    </>
  );
};

export default CompaniesPage;
