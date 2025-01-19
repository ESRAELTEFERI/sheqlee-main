import React from "react";
// import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BreadCrumb from "../Components/JobsFilterBar/BreadCrumb";
import Register from "../Components/Register/Register";
import MainPagFilter from "../Components/JobsFilterBar/MainPagFilter";
import Navbar from "../Components/Header/NewHeader/Navbar";

const JobsPage = () => {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <BreadCrumb />
      <MainPagFilter />
      <Register />
      <Footer />
    </>
  );
};

export default JobsPage;
