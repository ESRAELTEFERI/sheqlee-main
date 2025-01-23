import React from "react";
import Footer from "../Components/Footer/Footer.js";
import BreadcrumbVacancy from "../Components/Vacancy/BreadCrumbVacancy.js";
import VacancyDetail from "../Components/Vacancy/VacancyDetail.js";

const Vacancy_TwoPage = () => {
  return (
    <>
      <BreadcrumbVacancy />
      <VacancyDetail />
      <Footer />
    </>
  );
};

export default Vacancy_TwoPage;
