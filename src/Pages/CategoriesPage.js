import React from "react";
// import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BreadcrumbCategories from "../Components/CategoriesBar/BreadcrumbCategories";
import MainCategories from "../Components/CategoriesBar/MainCategories";
import Register from "../Components/Register/Register";
import Navbar from "../Components/Header/NewHeader/Navbar";

const CategoriesPage = () => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <BreadcrumbCategories />
      <MainCategories />
      <Register />
      <Footer />
    </>
  );
};

export default CategoriesPage;
