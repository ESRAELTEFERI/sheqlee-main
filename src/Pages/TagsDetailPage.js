import React from "react";
// import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import TagDetail from "../Components/TagsBar/TagDetail";
import Register from "../Components/Register/Register";
import BreadCrumbTagDetail from "../Components/TagsBar/BreadCrumbTagDetail";
import CategoriesListPag from "../Components/JobsFilterBar/CategoriesListPag";
import Header from "../Components/Header/Main/Header";

const TagDetailPage = () => {
  return (
    <>
      <Header />
      {/* <Header /> */}
      <BreadCrumbTagDetail />
      <TagDetail />
      <CategoriesListPag />
      <Register />
      <Footer />
    </>
  );
};

export default TagDetailPage;
