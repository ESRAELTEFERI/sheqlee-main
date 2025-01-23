import React from "react";
import Footer from "../Components/Footer/Footer";
import BreadcrumbVacancy from "../Components/Vacancy/BreadCrumbVacancy.js";
import Vacancy from "../Components/Vacancy/Vacancy.js";

const VacancyPage = () => {
  return (
    <>
      <BreadcrumbVacancy />
      <Vacancy />
      <Footer />
    </>
  );
};

export default VacancyPage;
