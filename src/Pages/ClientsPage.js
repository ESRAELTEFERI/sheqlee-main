import React from "react";
// import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import StatsList from "../Components/Clients/StatsList";
import BreadCrumbClients from "../Components/Clients/BreadCrumbClients";
import ClientHeader from "../Components/Clients/ClientHeader";
import PostJobButton from "../Components/Clients/PostJobButton";
import TrustedCompanies from "../Components/Clients/TrustedCompanies";
import Navbar from "../Components/Header/NewHeader/Navbar";
const ClientsPage = () => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <BreadCrumbClients />
      <ClientHeader />
      <StatsList />
      <PostJobButton />
      <TrustedCompanies />
      <Footer />
    </>
  );
};

export default ClientsPage;
