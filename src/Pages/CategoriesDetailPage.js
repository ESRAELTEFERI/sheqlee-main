import React from "react";
// import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BreadCrumbDetails from "../Components/CategoriesBar/BreadCrumbDetails";
import CategoryDetails from "../Components/CategoriesBar/CategoryDetails";
import Register from "../Components/Register/Register";

import CategoriesListPag from "../Components/JobsFilterBar/CategoriesListPag";
import Navbar from "../Components/Header/NewHeader/Navbar";

const CategoriesDetailPage = () => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <BreadCrumbDetails />
      <CategoryDetails />
      <CategoriesListPag />
      <Register />
      <Footer />
    </>
  );
};

export default CategoriesDetailPage;
