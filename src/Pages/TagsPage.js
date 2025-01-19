import React from "react";
// import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BreadCrumbTag from "../Components/TagsBar/BreadCrumbTag";
import Register from "../Components/Register/Register";
import MainTag from "../Components/TagsBar/MainTag";
import Navbar from "../Components/Header/NewHeader/Navbar";

const ClientsPage = () => {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <BreadCrumbTag />
      <MainTag />
      <Register />
      <Footer />
    </>
  );
};

export default ClientsPage;
