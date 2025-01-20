import React from "react";
// import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BreadCrumbTag from "../Components/TagsBar/BreadCrumbTag";
import Register from "../Components/Register/Register";
import MainTag from "../Components/TagsBar/MainTag";
import Header from "../Components/Header/Main/Header";

const ClientsPage = () => {
  return (
    <>
      <Header />
      {/* <Header /> */}
      <BreadCrumbTag />
      <MainTag />
      <Register />
      <Footer />
    </>
  );
};

export default ClientsPage;
