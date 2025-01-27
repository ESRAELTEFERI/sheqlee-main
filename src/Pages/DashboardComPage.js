import React from "react";
import BreadCrumbComDash from "../Components/After/BreadCrumbComDash.js";
import DashCom from "../Components/After/Company/DashCom.js";
import Footer from "../Components/Footer/Footer.js";

const DashboardFreePage = () => {
  return (
    <>
      <BreadCrumbComDash />
      <DashCom />
      <Footer />
    </>
  );
};

export default DashboardFreePage;
