import React from "react";
// import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import StatsList from "../Components/Clients/StatsList";
import BreadCrumbClients from "../Components/Clients/BreadCrumbClients";
import ClientHeader from "../Components/Clients/ClientHeader";
import PostJobButton from "../Components/Clients/PostJobButton";
import TrustedCompanies from "../Components/Clients/TrustedCompanies";
import Header from "../Components/Header/Main/Header";
const ClientsPage = () => {
  return (
    <>
      {/* <Header /> */}
      <Header />
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
